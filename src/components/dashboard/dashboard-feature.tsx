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
    "2uAxn3Mg6gWhd786UAzQawJJz47ZWj8yJMumi66RG4jUgzKDtMBdhkQYq8auTQJrfiLcc1YsdAeXvs3EXzz6EM8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7jYcs7DxhiJHYSVo9D2JQCJCwrspHkVoQQ1qVr6RDm5LMkpo55Ube8uGUwna5Ubaz1STLpSGv3J5zAa1hbeZis",
  "key1": "5AWEUovUdCBjtDQH6bHzdDUJvR2SRroG5HRJihd3E2ReW9iuMqSRfotsBWPibjWUfhmAu4fBFTHf2KcE8SV2QZ1i",
  "key2": "3XLRqk9kUBMc1s6MwEnoRN8k5uwi1DQiggMBSniNkBLqVPfPH4ZjUy3TapLcHog3Nr9NcJbRYZEJ2VmGAjojJgi6",
  "key3": "4uT1Pnj3K6F6hxksR8QGY5LY6PbcPavB7yMN76ox7Cq2pUEusER4jg68aiV8h1JJpQjKAskESqdyEpWyK4a3Zwmm",
  "key4": "4Fqa7BJNfJNbQWYt3FGGKHvyxZgk76ZJ8AB3iKQdkMHyvivtwbhtmDe7XtfiPLyhueiwV8tAJEANH5nJy4Vctx7b",
  "key5": "2iUyMsdS3EZzUa24GE6hrCJRR7QWiXf7awC2yDdx4xtKcV5U4grTAd7rRmHYsmYCxhxADLZmwqVsyfSgPnh5XFTi",
  "key6": "5sXTozjGR5Cu2LmopeaHqFbSbg1KFip8h1rZxreXFDQk2CrfL3j2nstcwafTENHnrHcQEC5fWrQem17JHNTssiav",
  "key7": "42s6Vb1hgXJbQ5ARyoQAXr3NffZhYRyQfzGnPY4Mvt7Q3wPkzMVM1pGeyrF8YCDMDc5yw2zfZdiExQGokTZokcoS",
  "key8": "4XAirZdjywTNMAC2oJ4ixoguTpEqZEKZLq3niCx44Z8psbBe6zBctcUCredcreDBhST2PY3Lbb46j7Q2KMsY7G82",
  "key9": "3GBnpdgpNWk5s1TAizvpaMbpsGeMWSN8mhDN52MzGbRGGimAXJ65F7ZYEkr8JdJ3WzV7tswRwFzn15PiYbyDMxAN",
  "key10": "4dkEv2MS6vFC9Jm2SzktsJbCrfePGD6jsrLTHWdGEAQMHorz29utd4D3nwVJrWUDqbewLCtrYMdwYkVzXv7kTCdi",
  "key11": "2qfDDvbhMwv6ijcVcPxroReLed7vgzcVp5682dCdcjvpneZBbS1PcnJCuxQCRsF5RTfq3gRECfsgF6x4KUyFAsj",
  "key12": "21LdHX17yE4BBYNEhrSULb9iCAJc2R75YHL1iPazydx8vYZ4dsnyvVDpj5gZjMNunpMdHRHXrNzBsDFj3C8XJsB3",
  "key13": "3Xekq1W2C5zhfYArCSkeWiFzHXGCApM69X3GmEDeCZY4AEwGbyWo5mvqenqPC74UvQF4mL9NSx6MQw2ARA6en5WS",
  "key14": "3ykv1JNe8t6yzHQywdJwNsFTXZz1bSHGNzk73Gc18xw7M7nuH4X1v8vGyKjffXXNt6Turf1xYc9AZxTgKSkDoSq9",
  "key15": "9qfxDKj7JstuMboqTiT6nsf1PUBZniLuwGaaoyvqaqM6goMxbYfRepdEnGjHpAyqYQp7c7NjhTD57ZeEwbXWS17",
  "key16": "3GRa8zA8ZzSFPdyzXPLmmFkrQyJBMh4RmaQnyumqFonFPHQTGEAbT3GzVZfNvZno2JcSWy99xPHQVho3EqcC66oM",
  "key17": "3o1jDMasvopDkCn6gKDZ3dGvtNTWDEaKsCVWrkEqNEMYmd6sSSGwzV4z7Tyg1e3hvVDHPTSJkswhchCMqDEZBcjC",
  "key18": "2jZuZQU5zfzEg5YjwXwzw2yfSwziQ8oUQ5JXmgM6kv8p89PWsMuYbw9e7LV58gKcs9g2vR2RYcJgSBU3KdgvJZxw",
  "key19": "iowkh7a9X8JmpbTJQkwSPiGhPHpcFiQ4pXnNimiATrf5jzaqq4TBEXEHUCKHiMNsDTNFZ9QG3PLtHqQqj89i5Yq",
  "key20": "64eEmRdeaqQ8fp6ofN1twXBVeUYgjY9BXpgSE21Vjbwp3YBvr2tow6ecp3VAyvM2WWZ2UCWhq1LubVPUgkdHXkyE",
  "key21": "Uc3XJ72rvXPHJp7EkwfzU2pLnFrqs9NfmA3sxVA2o5aVeJhYufw7gysb6rFGZhSrszBoCgqoGLWs2yvVRHWKNKo",
  "key22": "22v2PNE5P7TNSpsMB552NLsdF7LBfSfkvVujSPQ6KoV13d9ULMn4zF4ED18nPR2FFq2DaAkCTtLpkxLpTRCQHrok",
  "key23": "JqeYmqYGPbW4ZpQqQDiKkUMQpcd4WjYwisN9rwtyKLa4F4AqG5xYU6RHL25MAepoYx57JNMbSQnqj3NzJjDnsNp",
  "key24": "3a2S1zoPgRMqCiXG67h368rvMbDziqGvAgApVjFkUozMoTSDRij9R3kcyK7ehoHU4DuzXVGvfW7pec6sgB8bLdiG",
  "key25": "3bF9GdcCVU9oEzRLesQhKRzz2MBCa1ziBeiu2FsAknBhSzzzQSA88BuPLR9YjCytEEr3cDGEmjnMH4ZEqsH7DGYL"
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
