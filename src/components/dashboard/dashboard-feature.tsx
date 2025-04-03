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
    "611TLiKLgf1AsTyoE9gLL33n3SReX9rNkDrGgygx47qudBL9yxXuon97ocgXUeQDUh9zSZonpUGWZB81jBqGg6hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUPfr93CiLmJBic9PuLoGWvdZj8bhjbAx39HUUVfGDNgmSRvmyjoSgQ6riKfiQhNt7k7iL252kevJoDwdQjP4Nf",
  "key1": "26eZwKMXT8FXs7ryX5PHkC69KtU1VK7aK86JG5MWPE4QhHZHN8peFfo5S768mco2oyEXn2Bf1fh9ALoFdzv3Khz8",
  "key2": "QHYXsGPg6sehYi3H5QFJjxXoWukEj9mLirX8THzADTir5oMJmKHUxW3ZqErEjwygiFm7vSzDh89qir3KnUmBTae",
  "key3": "4Z9UibDeWWTJCf7d155C5H68deoki1JDQedwM8goBxKLv9qXffddnuKNvsjANpJtBt5kkXnwotroCKU6fBjFG2Un",
  "key4": "2esq8m2yFrnGkcs9JDmxb28HFbujXvD4kfFGboVTMy23kyox1KZ2NmfDC45Apw1ki57g5PQDRrPLWz2wChnrXuCc",
  "key5": "4iynjBSf31fUA5dU1t9ykxd4639DfrdhZE8MrWmxArH6w2vGQF5dLTVt2induwUvbWbSZRAi3V5hXKdHueUy3oaP",
  "key6": "4vdtyyHLDshD2m4ZchGzqWocPCt5WRv7Sh22ibGb4nXeccyQDupuY3srteTumrytog2VBgTY3hpDeEQqB8ovfNf8",
  "key7": "4a7fyVKu1fhQPGDnXVRsHySExtwmXakx9TFoahp6j8DTHNYQpJhLpEZXxhMTzgRD4ZPSfHmTZEdMwT45iKz3U8Se",
  "key8": "5eQkRP2r5UnWL8ScuLzQNQHbdaRo98oGcuKrA5JggSjUv4amXn7MpurC73CcNVejSvJ3SkFc3geVE3wfcJDWPmrk",
  "key9": "5WcYgVH6pmt7nLUZcLZe3Mxs8b8Ja4gdH5fDAmWQRgNsqbak6kGuU9QeBdVAnEUipKymSVJbiDqWRMNY8B3Xy2eo",
  "key10": "3wv7UmFzAW7b3BUKiq2CctXRPDVmTuBbDbbAP4JJSd3uVbXoxvKxvxd8ZWsVkkQ33iDhfyZCfiRYVs5PoFANR9Cn",
  "key11": "2FnXVFcASZbNhP5hC5KJWsHckBx5McrxPUYc2sUxgz7Xw6hRBEmMT8tBUiBA9uCHPbNzkD5Bax4viMr19AcRqJHA",
  "key12": "2cCGwAVh3ovd8rLJAnWfH3gyAbhCLra5J5VyV4pLgpuhAbuk1ztREWsUiPpCsUox3rZyAT6ADnDEUwNAYaE7iim3",
  "key13": "54aqbLrFH4iHkL2pcyKR4Qjfs4NxxTeyx6T5vgtsVAWzLdpCTNugif2tzpE1fwmRnjB9j8vnVRmGKqLyLHY495Js",
  "key14": "4YMX87sGnm4G1Nv2A4Qsq7TfTddXGXbJ1iw2uFZNKMhsowJaHzECTMqeVp9ZAVmKB1DYADzbzASbsbpuqu9qLxhS",
  "key15": "52wD2EqCiQwJRRPGFG3JFAFNeNVvkJe8rXKoAQHXaMGu47gJ4nBzqZWGNcB2ZTqMmh4soFRrEVT6cqoDkv2jWi5c",
  "key16": "zHR3ua3dLLiVvzvKR9w3awmxbHZGJNBLsbN5CwvvsheGNegrCcSeugYNQMv1uMvYdqD8hSmfoBBuxy97QTZpJ37",
  "key17": "3DV3KEUQ7sVLQ4SzEsYVkuaSL28YrQSjEH49z13vxcnnKfFDxPnH9yLZk3L6s7rqVhD8XQKd6a88tRUhWeLhzCa5",
  "key18": "7CkVbzaAL4gYzB6VQspV1181HDFxUVMyhyZeSKorWANSXReAtjCco6U7TzqHSSFzBoWVpEq4NYwr468ue46nHra",
  "key19": "5c4teNij7SszWkTkZdrYTZoxZbPZjt17MzdGsnWTZ8KvUzK8L2uzQYfEjusJZ74Pgo3dvh3mH6NocmMr2Px82bv2",
  "key20": "cezkLMJkC74apthSSwhTSNGmxRPeAXXRCUGJLeCcLVPRhUD42XSvtwrXKwYAFj4oPazCdLz9WgirwMiVBim1oNs",
  "key21": "2Ljy4J2xdpNsM1ErJPLD3FLCgKsn65aaZxVC1B2rku5bahpzNBHwuqV3sGtFzGHgqaBX1gjvbugwzjU5BBkUqDu6",
  "key22": "3LGKTBVnHbHSaQ5KEkwB8FK4SViCg9TQD9FBrhg9LgEcD5cLpfqo8mUFm1K897VHa6Ygk3i2ERMbJ8K32k1Pp8hy",
  "key23": "5dhG6hvWLd8zUyFwtRZ2Q6gHR7xFCES8qfC5FeXwXDGWoMJoi6EAUKhQTLEnryL8wE454H6v41nVNTvK6wza6QZ2",
  "key24": "62DGfgM1u69evxtgEZrytXAbEuKkZrURwfeNVPCENqJ27eH9r6nM6S62h5o91CtGdXYQU5WS1DCznDTrMJskNJno",
  "key25": "rZhzt6bfPoCiFmo4g9LFhHL8yrxg5ZS2cxCtaADjrTL8z9wGL5KpvL56g4QEqo8mvBzHqyLgwkQbmK8LpNEXU8M",
  "key26": "61abjb6sYpe2XfD9EWSSh2H9oo6xMtLdENoxpBwckhvEL5cfiVua4sMmywE2u79GmEf7W5kgin94bjDyVCNfTpoj",
  "key27": "5h1p9QJa7Hx2h8w1CcmSMNMX6hhvhDAjEn7gqouepQaHgqVz2pJWLs4mrTmEPkUb3SZ4NhAku3L2gxLTzPM8nJfm"
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
