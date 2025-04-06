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
    "528Ez7qry3NVhNde76gQ5xANBpXn64yzaH7TU4kQsiSJUbbVBNugyN2nzBz2Nxxa38a47u4ENsA39B1NRtqtyfBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXKe2VqCYPhDb5fRggRc8DwTMniv849uuQTT2SrybJH2hX8h7kbTAwW5R2rc3izs9ysPnYjFMR55356qdDdHS6i",
  "key1": "3re4V78zqkMf5ddM2C5moqX5349fLB3BBfdrHHnDccXqRVphPxHhSfgpnqGCvoFFh9krnenLeJgHWFQJhvM5KVJA",
  "key2": "2BkVFvbmqwBemP9cnwt9e3LLUwbGFJvBnYBB4BDKDHSLBi89LMzpKp6e4emfKPx31dM3Pat1YoTo4VnYXByEpoHf",
  "key3": "kgGzTuKqJk1WY72hnVYmbt7EFeUzFT73CYbbrUearzj7FyGq9oB9hL7bx4twSYpXCrGWtgFsVBFXeyBe8CuzHCZ",
  "key4": "43JfbN7mCgfyLrBczfg4cFQtrm41Tyjpf5tmrWTtkF6Tv1jaqaWHni7cTmFrsHMmLerDSA5ZbjyRueBBs9AzziBp",
  "key5": "4u4CR2Sr5fGeVAAcdQL3d8oMwsgMbz7sJ8ELSvkq1noz3oxt3V5phJNbpbRr1dSi75bdykmnMJpPv6P8QwFSyGPG",
  "key6": "3LtzPSxr3mn6zoWe5DHKSc8oonyd73FTMGuHAeBqG6x6YFTMfajG7sgMx68aEZdmwR7TqqmKQRxzb8GtEMfKuTC5",
  "key7": "3bPakR3xuGLfmuu4m91xwNCJe3ZfSe4oV2FWdCA7446QoiU13GPnjaxgivCAR5VQN37HUR56gwAp1VrtDYmR95ZX",
  "key8": "2u2rWNkCGUqs8mevqdsZD7WZUBf4Ft3s9sCtG5qaPdQVZUz52NDgeoJgfbTRQywAWkQmhaNbCzXTqrp55fJ26LsV",
  "key9": "4EpNMnUzoshAha1Rzk1ZTkxdpecuMum1xmS5GsgKEGYC8hqDXyHrAm6cLZy37dQJca7E2E3AUNJcmuqRKXSwJLyb",
  "key10": "4WrfSJFd6Qut4XtD5NE47v2eSgcFw1MadgXV6LavW1DvUdGZd2VfQdmPiC8uweJZPHLTv1MjFztxfV5GeDEA8cCy",
  "key11": "5qk1NmXzvmr4maSBrd4gQiNiV6HRcLjR6Dzh9r356Vqz7k3fU8v6SGxaBqwq34wSRBeQvKChNYYdmyzPeVJVrLa",
  "key12": "5KoBqLWEtWxucLx5qKfVpJfeAWGwo3Fdrbf2so8C6rqP8QMnAzod4gwgeejLZCDTPexqvbJuaxyCzJcjpCWUd1M5",
  "key13": "5FYc61QZgnxHrwbC9kEEgVLcXq5hHP6Lm9rapU8kwyh7sgZnNSqH355H76VKgj9uN4rUy9AeV2HHLcV7xpbye4Tq",
  "key14": "fkRhJGTVYhHqK3WLjDJzpNgvVb97jQySwGGZ1MmPJt4Qpre3oXQY3bXWg2hfEqyHSDV1dprvDtXCBqm2AFHe7hi",
  "key15": "5QRCgi2gTSE33hnn7Eo3RMynbwQLHu8gKt1bhprKzDc4X8bx1Kq2kBUxBrtb1yKvcJkpsfLyxzz3PPNQBPx838Sz",
  "key16": "5tuW37wW3Tp8pKwRpBmbCzE38xPFChUAnzquJm5Qmg76qah3is5z1T1Yq5eHrinD3o8zRSbdAYP5sX7e6TcJUafa",
  "key17": "2h8ZHyRUEDdyiMGjakZnQApbNb73UJAeqTnLkUqJSYK1fxFQ6koAxFUEYm4zi3wNBesHD4pmxJrS9K7sUCrBRrcM",
  "key18": "1VQVK46LWHxCeygZ2GbYPY4kjCit4xR3rNs8uq1aPrF5QMyMoMVk5PuiLWdBn4MZivLXpeeooPndMaAe1iBb6tU",
  "key19": "5K9Ej4MfKSgZQ1jWVQiBZnj2YmmL7KD3BEk9qxEPJpb3KgqXeHrEqTwbLn98GtLt4T5NnBJSRXcdMuHyQNrW5Hf5",
  "key20": "4x7g3jNd2hDT787cwXAWV4rgG6L9p6iKG98AHniRMBxaxFiXDrL3ymABzLjmpKamfnZdYu6Fe8vsHmKME2wc3NvH",
  "key21": "5ak1hTsQAwxHcornJdy1y4Qxwoi5r2EkfbWSA2EjStDszqKNhCSn3nmh7asRaWoe7csKAvWgNzGkQWFHeeci2TXh",
  "key22": "5VJVaWH88Y4cUsnRV8Dt5Vw12wcAkMLHsFh3nECHnZ1w7Qf69VQ6a14EzLbb8TzhZ8R5cWo21q4vkTZqqiRnXbTv",
  "key23": "3mSFET77GrZ8qa1A52Ek1NmU3CzjgPkjmFJKfbrgp4fxhPQDkNy5nMtZExaaH8UGt8whdqMnBHYpiErY2SaZgGWw",
  "key24": "6uqf1DrK6P2z5tYQLchUEbuYngg9Zfgt6c53T6GJHvhghqmLVRbr3E5zgtpVHe21o9ghZ472JUteH5M7RQYQEjP",
  "key25": "2RripW3MPFR6HDaeYtTzHJdPtGeNEGykRF9Wq1x8JeHEvJY8br7oNbp2NQuDJfTEUv96JASYDQKqDHkc9bGRccro",
  "key26": "64mb6YbpX8dnxxmzFbTH4vQ1upuG5AgKP8qMNyFR6SoYXXNsV49j6QmiL4RNX7LE2FfKtQypy278mycrJ6Kdbitm",
  "key27": "5K3ywNDeFrykLg8cnq4NGYpFWNyfXcNBFAAGSbDiz26mzztrocjrUChpSxwcqMw3UBLADpEnC5oVnbA1Fh5Vz9c2",
  "key28": "xgCkYTVtptN2VZ2uroV3ny8poimQ5EZqcvGBwpojQuvQS73DsSBZkzxF3YCyaPQQabq3uMyCuMjnML2hU3wmbEz",
  "key29": "4vPWrsk3KDfV2V8V9guft9v9fMDrcRhLnh1CfPHtUWHCTBFzscPBthCyJvdC6X9tw3PGqRRvjRnnqePWsed3WDTt"
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
