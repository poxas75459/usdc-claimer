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
    "2bpBtW7MwyBRFEKsVbwK21TswA2WVFF24xZgJntbCGCtzKjaphabJzwXERYNuN4CvYHnry7Vp4R8bPccCDaJqFuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdTqNDDma9XoRmsZh6LbV1NPuiiHt6xphbXLzy313UV88rnpsqtqv8o737GEkY7vLxNHFgZHCH6PJtGogbukVZ5",
  "key1": "2sMbtdtAqodVJyRNT3PoahLhThaVsiB2f3conznaSHqhn8GJwkG5LTNfBqWuBmUhq1nCghntepqfSnjQcWKaMSv9",
  "key2": "4NutdqNu94vRWd1uwP7RqXbxyVPZFvSKPMKKYW9D7QxUPmABB3KeYJouqkFq4wamWTeDsq32rnijWm12ywPzo9AP",
  "key3": "54mNRUGScA3hsXoywj1w1PtEe1JnzLsX6qK1dTzxyXxBSeyLQwT5eUDXzmZ37kQRb8GB1iyqer5mtWbmDvSzRwpj",
  "key4": "2KauZjB8oGX1f2rgu9LSCSeoTP3f8GZay8Sgs2YTuL85Yo6Sj6RjF7DuALQcFT7mEVC6bQWPyn5fg737SojKeyGh",
  "key5": "3drUysZVZhuhQSTiNX1QvpXsP8f2WCwgXUKUghUGrTg6HjJzLqKCbfdNQSbQeFGo1CHyQ6wkuBNqQ2sBmSRAsYeF",
  "key6": "2k52gN6s6jARkEGcXsSWR5wmjCiciEvuKg3NHCZepxQJWDeyQ8KST9NW9CpXs1QoUHccLzXHQvatL5kcCLoheRxH",
  "key7": "3KBFP7QKk5rkjzjCwoZaNRLR5jgt7uE1C6UaP9Q1SWRm7accbzU9vcvQDw7A3sgBS5qFQY94Ctaw1Y4TGrTBMibM",
  "key8": "544MwA4QLzxG8JyRs9cfXVa5gQwWnDRbSNDeWZdMB3xQVCYFnZir7YYyroWEtcULPpcMMerjkebFxvrbYAEX2jGy",
  "key9": "4Gn8cbD6pwBMvWPbQkRtuWVqLhsoSh9CarBBRx4FaE3qQLjFqFwhq7AtvJVG8mGzHiMUBSibfJLPWAn9kHC1AEPp",
  "key10": "4VeTRUjpCvkAEjVWxchuZgqpinNJm3ymaoqimShZ1bC8A5v6xA3wwyDYRXDfeFSPmwa9hUVqSFCVkkyBUo4CYcsd",
  "key11": "2RmXhpfkgFxWQSVSFCpdo6f3gmBEmJ2287VAkojfEA5au2wdXPbUR2ioLvViCpCurja1kZS85YpyTCNTFwcfKhdS",
  "key12": "4ysVnZuhC5JgbCc6TsUXVXu4BZ4j1ruCBbdy21oLBerZDEgGVfThrN8C2RshqgmYveK5P2U4jPkSq5MabdSsFDh5",
  "key13": "5hS9qhtG37bNWexkKhXqqudrSqGTj217HJMm3xbzJGrJN4CJVtfARUNo4MkuCrQD3VUMKSeK1sBfKEM5oE5pudd6",
  "key14": "7tCMPnyn6x3DXShHGLmCTtyUCnAonPpTzjwnqoem6652qgXV8Q5wvvtG6QYm8386ruNW3Mxs5SWWofnQZdabatg",
  "key15": "7GZ4ikbgx4qS59RiZH2a2nnucHpyZaJAEznPNotCXsYpfquJjDnJ4SPcoxMjqJPxQefrZY6KxwMgzUat8uQqhZs",
  "key16": "dRHNzor97SMVWSbUkPFJcxz7fTgxtXCZZNainD9UCzbuWuz9ze1vQGV31yMirfJ9FAtJ9oFEz1JPhQMJWMGz4cK",
  "key17": "2Buc6BA9FKZWypFM4SktLD3rj2B5yJbHrD78rXkdQD1VbghZWKUcAmGjo3YCGpYftF5Ux1VEL6J42uzqVhAcuC3r",
  "key18": "55qvERsXTj67teDmaDUHBR7BH46YebLdSa92MbRvZec6jt7DUNaivYa7taqo4fRtS8jhkcfxjD5aitZjgByPdzjA",
  "key19": "54ePjYUUFdAQWuPD2XJcNpWv7VPjraEFpPDCJE5YpohacHZ7HwdZ6WXVjoo4wEZxowPvwneMeLP4Vu24n9qaKNJc",
  "key20": "67Roctu8fcMBsxTPuoNi2iWEwKFEWoERwE8EbRAzrYjpiaXUniASLuSTgd5cvpd4tvv5G92ZLgAJQsFC4hgEZAW3",
  "key21": "5Y6vK6s87dWghesmfAkye2eJpgSnS7G8pSQnjqRZkRH9MFSJNxoogFjDEk6GmNM5AzneEumJED6trLH73PPUtb17",
  "key22": "4JTguxBBwesPUa8wxZgUGCXZsYqMMdajj2tnUo33v6heaeXAxYnM1BhPR6jNdSsM1mynfsjSTD7UmMHAE6BtcJuF",
  "key23": "3fZKbrUHnV5m2K3UMTAuk2JRfgKe3dVKNJjrAVrHnJyDGy9zuZZh8GpVuptkmsZ1d1SwMmJYPf3SvTLsVtQmzM5g",
  "key24": "2Bk4pPGN6PGFkRYSbaFXP5VdDCvQawFt67RXFrknpKV6zcG1qohwDJ6exKevhveKHxz1DPeYHNhAo6NdxW9PgqWG",
  "key25": "4tcDcEgjb2vTGP8th4KRP9eMyqNxVdR3VwWdgLwtzr576xhzspFTkwEGe9gfHvxdj8wpJe7Cw6cRNyqs78F6GLmr",
  "key26": "2XALEEDEWrXNR7H2ZB4iCoECRdzd98NPCTozm5vH2baU38pxZbn8mx1teMngEwp2TY4vyVZMrcKBEyrDfT1a4Tmw",
  "key27": "42nhX6oFaEGQQVGkgeJXWhB45YTgDsVx86FGmn2sgX72jES2N4YBBgcyoKoWrSbCPxNHuAsJXhajH9xh2SNb63JW",
  "key28": "3vj6qza9vKYNXFyePQ5i3NTLssjfxkUrZpUQak5dp558k6guA4xT6EPzaah85CxX5LsdBWBtTyR6isuzQf2vA3ko",
  "key29": "4EbKCHuttyiNjsVcrXZ52dk8LfY7B8xhtHdgEvsNQJbB9Ek4EAASmew5MkT6rBojkFeBi1V6rwTPwEvbNaPVdEBq",
  "key30": "2EDNBFB88JS6ndxqzZgYjvey7dQwwkWL2V1mr673PCxojE83FMUrzJZpc2skQnw15DtfQ5ZcWiu6Jf46cAjHRBYD"
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
