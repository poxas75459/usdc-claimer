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
    "yew1T2CtCmPTknbY7pFaHxrDaG6MkmgTzf3m7yspdsSJwtznYdcLk1hZBgXddmsCLb77j9C3iNb65hefDTNpT5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hK8UeNdwESekYRA6QBfzgnbBfZz9xhpM1xfy7yfC2djje5ep5HZMzDip8nUAtZXTHavz15YDaRbJ7cMopURRdhq",
  "key1": "2BUnbKPV2EgJKAHasWkv9Xbig69f22WqUHKNdqUEXFotXxmCbwcVBaLCZgWWD97jbHjp8QYHD6x2DRGZzW9pj9tL",
  "key2": "RHhGaMtwgTfd6VwVcDyHuDmWay2HjPhpimAuWkZdvrXHKmTBbJwPxtbmUJsYBxLt833DrHPngYtRTt8oBdQCwrk",
  "key3": "3NhyNHQETfLPTc5J8wtWhUrtku5DUNVzFadkvUZzunACYBbqCTHAcyRQvPHbbtwH2FYJEuGxZqiqp7joocR4ndi7",
  "key4": "66Hgw1hGavUzipuJzuxSaXyDFsjiWTDfiuMtbXrS7B3Wx6dukKej7Msa6EbDK9dS17nwgfGSGKsBW7ZJ4xpTz6wf",
  "key5": "3VVxvpJVLev7fonxjA8jtJgA91yn8FfvtunJoAoLMZ5Q85zYZdMzaNgTQapfK8XePQaVYogPVFhZ43hTxFcKkU6C",
  "key6": "zbRKvmyVg7RzQ4pvVsw93L4goTqU5BGntmjTD8wD9TTS6GNeYfPgGCgi2nDVQGyr7p53B9bkVHoC7V5NbzPqdkm",
  "key7": "2Bya13DX6FF461BjGEycP8mqmi8hyjHz1CjiADYCQxncaLCuo3yuiUsvmYUCGCqt5reSWozQ4BazwXkASS9VTevH",
  "key8": "ukCQe2N9JkBGbtzHdcveCwCkctLzWqUut2M52sXsfmFxwryJJu6axZADbe4FcTqJLLZ5XSReF6rFwynEiSNP8yL",
  "key9": "4tgnwaExNSQiveEwUKyBmuHPYVTpGPfMHvJgw1tJxAgPNa2baF4QSkK8ipRT1yeQnBYtUnQVcQGEDqUAZNhJzCon",
  "key10": "5bpozUeuyDYMS7xnuXjDfhMzCGA8Dsn5Deqr6KcjsW7ynMK7cAf5LUUWRy1KMe3S4K4bTeVs6KjFsjUbxkfxpzBt",
  "key11": "2jHtJDjbzZvpsbFaaMfotuMJ4gxURG5r1QoZJfxfz71Smucw7UHLys4sEENr9TRBidQTWKZKrVkDeB8sKUvNA5vp",
  "key12": "5J5nRU825cDqaNG4fnAu1Gc6PbFPtLqLGTreqLM3USJEmQtkugZBFhD1C7QvkrKDQ6WvejHsJo3dGcxZKv7Jhcy5",
  "key13": "2F7L1TUbegks159qKifMXaF7xcHbGyG58GZexYwtbKh3oN3bEmkoZX9bmPuiLhPjXReZKUEwbxHd9WEWNQNRyN6o",
  "key14": "39ZC7Wc1FQXSgLxQktn4APEy1Ua5h6yCzsskZpy31FRAJFvi91g7bVopyE4YRh1h9FxBWp9jzhcUkXthXmDpVtDj",
  "key15": "2QRybuYLQervS7sf9mEytFy1bvDDj9DAE1gkX5EHPF5jPt6b1bdXjdLr887SXB7M1PyVT29Z7R5mxXG7YYfxpV9V",
  "key16": "1HP1UN6QNZtCEyTyEPEVDUj6VxBnEDzUkzxFVoUEtyupqCX41CuaeZd5cBHCtKGeodUJE97Js1wi2ctV4SUXQYJ",
  "key17": "4neXJR5Rw4hDSbzcuWTJqUy5D9uimmDqarWRGfQEf7eVaHL1TfY6dkSSqn9CKPMYTYLstBg9X6kAt2967SWkJ5Q9",
  "key18": "4Mt4wiWiKghdpKvuMekaqACapddpGvjHf9myyz1RWxpruRnm1PTDBAoeGxBy83ec8dqdTN72dieqUrcE6YJWpptf",
  "key19": "79NG4R3DPrWsQiFsT8Cvu44fYmeuXdco8wnhTZnut1hZ38J7DoKCahuVgojUyvi7Y78gSDLEhWUjiaUbxTR4ZTZ",
  "key20": "2fKezhxHeuLvpMJujrCmRe8Dir7cmHzGrjZnWAW2yLqUhbEm44jJ1eFfecRmdoUVdZF8CDTKtCsz3aenKBEbgoya",
  "key21": "2Vjeew8ChU457wej3JmUzaA2zt7k3fFmHF3fSbAi3PipH8cV8J1aDo42bCiynFsSgd77yqSjhawZrP5nsxpYxxrC",
  "key22": "4Dpe8AuVQvH22gMjHCUnJyn8ZoaM5vAByTL8WMd9xebb8hPJXbuQpsBgCpq3qCx3U9DNFcFGEXm41EDR2cwsVV9o",
  "key23": "xsWyhpWyaPhLRQ1wFEH76i6WQaapVCwzHNMuFCu2QizzoTTEt2m3ymQU36HfwaFgQprSnaM9dpFn963HdJFoRxU",
  "key24": "3GfeKN8oNxfuZuXh7RTvUHAniScNMHRX2izeMcw1uphBarHvaSYujzr57StzWGte5TSyeppJn6WVu14ha2RiwCZt",
  "key25": "4Ct1ZZmRzMGRQCjijLRozaxr3bLBFFY9Y9fvXPTxfA6ECoctE6sWFaMS7ao9qG4TFTwq8a6E2621FxQo6iSnQEa7",
  "key26": "4ivMRKFk3m12DchhP1KTRwMkiMEJurser9fyyVUoZdfYRya81viX8k69vkS459EqnjBefVChJLUdk9dxmV1zQiae",
  "key27": "4caj4G4LvqWNN6pG3DR6QQ31tbJEZeRTia4chXiFDxm8JBMKZgbPPEvFzJ4WRW4UuCMJm7fgxXZiN7KdW2zYjy9f"
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
