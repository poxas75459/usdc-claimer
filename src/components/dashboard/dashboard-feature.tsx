/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5ZxLqFARUQsq26aXwVnMbCwAFU3HXithvYcwB8LcPpEpyQdv6j9oXenR6snvAU5tNYPtvsSmwF1z3s3mTQPe4Xv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ly9UWWPfEmNdrESDs8KjV3x4kkYp6ur1FUxyBmD673gL7sbU3sYb9EWiJ51GxLnofmcRewWjXvNzPwHFznRCG5Z",
  "key1": "5iakmYv5W21v5aPspG41mQub81UVZHtzk8QVuwNvQ4qbVEzo7hvgPuQaiujUFCG8MnYeBvdjVLS4ErYw3Pdq5xyQ",
  "key2": "4pVNEzqxmAqUk3H61xafLMYQNTXE8XY6ywey59J45JE1f9TxxtuY5Jx2anfvHf5irsj3tAtkuXyraV2WZi7bMJ7z",
  "key3": "5PgcPZyevhLgXmuPRGcPUSeU2nrrp6bBVinufP4jyh3SHshcPgPfwhR3jCCJAmpQ6Sdzwi8A7NzgoaQoFovs2Mfr",
  "key4": "39vKU5LCKVitSFWbjsc1rZWfqr4n84XvmnyvbUMYHke82HyAYFq8AZmRimUxNdbyvQCBw1eJZUiNo5XDFTJAvzG2",
  "key5": "GcoCP9zTJAjvYgh6Lpuaayq7B2ijL2pHeeJ25hBJExZRR2uSkpJseKxYyj62PyZ4dcANHJwP2MgbnQk91DjomUG",
  "key6": "47zvb7dSSwRWpQz5YjZmEzQ2NihfAELUy6aCSARRDXfBv65MvPWS7XWonYnjMR93MYiHAjWFrcSDpa6LgZA5UgLG",
  "key7": "dwgnbTzVkPvMv8tyXKxvShQ6VgmfH6fs5Rj5tZKfCHf2T2LaYiCf8fwL5tzL4N38KZT11vwAVnTxZDqd7bqgg1i",
  "key8": "4kH9kP8fmMDP6UkyN4bauoZdpMXciJUPcvpoRqsStFVcAMJnY5eTpct8qXKAwTPH8doK6ksU5degaEngjXp49uza",
  "key9": "4YtsZCP6ZXXjNjKgQ6xN7opBzgUwiNbMDi4VuLomcFzFkBzeFCyRi4rpLM5p8Kfauye1jpaxj8A5ERaUPLiP1ogh",
  "key10": "2VrzyixvCGVuorgFEWqYH7Maer9R6imdRuwpyg2yybvFVJJM3Z2ZBC22ofC1DGeqYA1QBE5k3gjRivMDHjNG6Pw6",
  "key11": "37B8TDoTFBexUwPmnU7bYVskEoApWJnVrLNdTwHoLzES4fH1bR9i9XB7wGGtkhqFY74b3G9Ev64Mrej2hSsJoqi2",
  "key12": "MRQFQjuqzcQEsZxLoR5WWbnUTBk1gAzNrBkhXZ7xf2saUuxbRjy2uTVf2uwWGRtMdaYc5TtoNfLEYeAyQSYpU14",
  "key13": "hMVcv1z9GnS8cwt4pcnqiY7R2c8eKJQuieSWjqyeXdpSA9rEj1u6DZkZxKWL83xA54kpsbpK62hmQNutcHD5fBT",
  "key14": "2cic1TkT6bwvA6f2PhN5za6Qc7YkH2LtvPheiyRC1uSFxhTZyfMd6yorwXx7xTAPg94RcwWQDNFN2ahwd4GgG7Rh",
  "key15": "4x3ieXxcEtmPTRWyuVh4DzeErxLr82juaVP9Qpv8anENPij9fjrdxmzjNMheRC1hyXfFXZoecfUYMqAHFWYk5NVk",
  "key16": "2FLjpLggqYbEbX1Wq4Qwut6ztXuk3BCK9dxKi9YyunhCxrQ433JCkuyAsBVHwuGnbygMPuvpDSNtjoLW8XD8xcUp",
  "key17": "3kPj1VWbdWaZGZJS6e1q5xGy69TkAr4A7mxaJRDNoApXr75K4i122UhKK4kn3qgr387yNgMBX4DB986YVT68uRNa",
  "key18": "2yH3az9AHaL8ckdBNQQeBmTGRLifJX3o5MrERNsLxgsbHJ5tiBebHBKwrCphw5s1nTXJVPMHxFisFuY91dHV289i",
  "key19": "USGpCizE4zTiwcLR1uZtV5784nve2mhTCmKXUfECG29Hq2BKr1YjAheRrKfe9g8vCvpDZuBdKMaVW149gmcDD8n",
  "key20": "4sMfNRBUDUcqVg2mxxmDBnW2hfRY7c4kWbWE7tCKykR9V8Gez9vSSn39ciquG5sXyZ3Asrq8pCTzjLS6ddnjJRVV",
  "key21": "2h41WfBvVppKHcmRUe954fwCcwJTEzKqeAsyA4oqJwjucdLK1FtnCq62MKWrQ8hdrGKyrUMo6zka6VBubdMWzpBr",
  "key22": "E7qbY7zZLebwYexXsHLeRWpAWXD3Qr5t9Nfv9c9XwnHGq5a1hqpGPitefA6GK2CX3kvfBC3dXf63LzEigCTGpPT",
  "key23": "3W5oEUQ7eqsjuLvNAUEi1JjbRA8njZSEQENYciY9TmbDdoRvDPYTYZ4CoVffzQDnRQXk4SbnvKGTvVVTCK4t6cWH",
  "key24": "38q4vLFQAtNMYZfSTTxjrQaLnyFHDL6PPrfyrjoZKafecvy4UuGYN7R5TGc6XuqwUuxZCMjSMD3dkSv3RMvqU5wD",
  "key25": "4FKFPHE3nNXmp9f8TXroMhgZENHBuwtSHp8b6p1kLxiF2Key5xC2xiC8K9cFuGa26YvnCJenDMFTwiuXxCk7Jotp",
  "key26": "4Aoo2n2EY4JnxbUA3MQet6hw8nDQBhLVFty16PoeMSth6fBnP9g2Z1adZcjjHfdqdCYJDMA5CgyJ8pEDcCvS7Avf",
  "key27": "4pBnHK1kfDxjPmq4SzoATBK5cNVZsfdTBqPtng4JNGDfQjNjgSr6DNghDhnMaYb2vDdMRqVZ6ePqbUBR5fs7CJPv"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
