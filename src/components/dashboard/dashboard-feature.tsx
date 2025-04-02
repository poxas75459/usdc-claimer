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
    "2r2MRjy1iGLPpVcjEpiwWQbkS4J4V4zW8mF863Hi2CchFbKSZvnFstYFk1FLeQgabFk8mF2xyfY7gcixsNpMtrF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iu8FG4w2VCNZer5Mt3SPXCFQDSAZpjEeS2MgPAdi2Ek3xMiQ6y48rqgPYKapQPUoZ3vR3WPYBzm9L62Q8ZFbDej",
  "key1": "FyGbict7vsZbfSb7X4v9WvtdVo3qvnvVesXcEfyf3GHjXEzj8rd7GeKJjULLsDCxvJaxoAQbLGLbu93zYCSFS5U",
  "key2": "43ZyYvTzAEP9LL8u2kJhKMRLzYbPGcsugztPLTk4vt1itB9ZwYiq3C9CSaGX9XPd8owhsE2WJGCM8VQ8tkVrFtfx",
  "key3": "4vrwaBdFXnb32f6rxoFf1FccAhzQMtc6PC8AvFZZ8EySHGtoTA389cjAieogmunA8aSQCtSHQXDquyXXc1CRBY62",
  "key4": "2pq1WMXEB4xWqzEozVCCsNLgaM2Xw4gCG6MYwmTWKkhVmAQJVouXSYJ5QTkhwqxrLEan1JaRekjw9U8JoDZK5qJV",
  "key5": "i9akXURZ1YAviyEJwW6h26U9abKNcF3quzUtqVLCCbdhdFyspqhvkZWDM63yvENstP4iNgun8q3e8X2U1if9LNs",
  "key6": "2EdxcwuedKo8VwPebeyBpjJuWjfYR9eDDVi5bsYQn8hQvxwH8AuMYYE11QQebwpXRyi742ikvCEnaHDeLK8R4re9",
  "key7": "2k5NTRPhG47PKqqs5sgyCfgLRNuUwtX3UZhkeGFkUiGrx6MzxLDmfSiJ9ps5LEaq7YyupUG2SC1cu17PDnE5kUxD",
  "key8": "42AgqVXocQ5bxEEXD37Z4JBeNQTTrMEXZ16NVAMJngWqgGbtwwFMCe5noHBprYCqfhPcKwA4T3sqmLRqDEdLFUHz",
  "key9": "2qfKn5ewsefSPddLGMTuEh2qDkYFmXH7euopm7wwE12DHc3GDPSfdTt1TDESuuUAHEsPZ7p18KNWLvFDZSrnY4h3",
  "key10": "4y9r1mw5QFF8E6qkZVqotQhCfvPYJ5rWh4D8uAnyTeHmfM6UbTD26CS2WRoxzXdtTNW3smEZWzvwRD8Bg5LT9963",
  "key11": "4UmZA2LEnYvMbGsk762GEr9ydQpfBqwArWLX2pbt2x8hCNRrHNrd1e1t86XSiv5fAYVifNBePXJPYZt9dZ89csHk",
  "key12": "2aGPGg4x3qSYyYkNNCGfozoguDaKPkf53wY7FH5wvmhRksN1WVhZpFg3umDipXhVH62DWRRxbnJsUpbRzLCT9Aqh",
  "key13": "budRWAxdwnnu1LgeaVtAJUyCgyb8WrExzyBoRwCduWqia1PDXdYju4RZPRpTXm1RKJuPgunoEtHNNxDEcupfkbY",
  "key14": "25UVpFVxEkXACqJAjuUuhp1bNisa1hCDRGVwL1KoNKMwHnCTAN1HuTRzdAJQ5zpyggGL2BDG3ggVbTeNo1hnXFkj",
  "key15": "4g9wKKjN8ni5aLXaWkTo72W7fymn8nVafb16yjqooH1Nq4qPGioLkjwRA9U6Yn9uxzMY3xsAoufNNrzZjxisJRuw",
  "key16": "4Y2KwcSFdiV8bEuGMJRscJf64k4xsinPY1EKE1kJnGWvtk7pr7nShjHtzv9XftJXmXGAuuNa8Gnh124ebiXVNgqA",
  "key17": "5jKoMeXXcTUDeQTXijCC8f43TJtNB9mH4eG9e2tNMQTngJ97wPXYAVyXJaNegxtUAGo1fxiyz7sQYRSAkX14npG9",
  "key18": "3qjJwyHcLSdxenpkW2CnSz6pqXFvDRiEvAXU36hEwEDov8S87ZSTJsd5hc4Lo5NRGZhiupwwZ3QZX2KKhpJBmGKS",
  "key19": "2qKLTgQfX31RhmAmT5e4GPeTf1mdC81QXuDte2uSf2XpezwBjSt5HxwwZsQoZuCHLpi3kvy6fBfwauqk6b7T7E3j",
  "key20": "3y3ZuE7xJgvwc5wqNqMBokkFxpaZjm3jH8LPM9erGYipznMuvcYmeRdcm4svPkBkHX6CkjuqN8ymBoMHK65T5G2G",
  "key21": "apXaq3X8v1MDZksshhTjGtHCrUveqXWy8eorofnP76y9fgAVM9C8xqqEBT3tAxSJbYN679hQyy2KhSo4byXi2C4",
  "key22": "4J4B3ceBEfndFm7P4qNRDQBWRTP6exsVKMgjBMcP2uuz6R2ntbJnFgofxkX2h4nmiJYqwkvLibmnVLe8N38kmZrf",
  "key23": "8d8DCJ9w3B2LJnA4RGreb12CK1PZAD3EdtELGYnBoa7qFoNcq2jWQt7t2nLG1G1NfNunUWc3ZSpp4rKqJgsjM42",
  "key24": "4xWryPvE8LNhGwNmHr5SDzYtDxg27yPGmzvNH4v5gYGx3o83ongfANksxxQyNuf2CjSikid4zMkvpfyaaasECJT2",
  "key25": "3eDaTGddFUVTAsvLkY15k83tGKFntKsELPJQfLgo6y8SCdUk9ahxwF6jxcfcmmJ4hWmA7zyv1MSKMfD5UZjjL354",
  "key26": "XDGLCWyyzJE61y2fiT8DoNR435xkRgHPvF7G3YyKmG65Niqa2UebJAmhzp1uaGJzFhHjWu5aJNJhpTCpR4XwmYA"
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
