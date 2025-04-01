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
    "5cpq8hRofCMsmjLz2EQVKbvMiukYZvvHSPFyR152njp6ddzLXoQDJZxpGNLxavXhoQXesqk1xEzhgf87xTu1wKSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJa7pvVBeM4xY3apNEe1R7cQi3u4zgPVhtgqFEDPBvVNdT8CZURa7YSGfeLzGtDBTtDcv4uqKwfuorNL2RBN19S",
  "key1": "5WKLMCtSKZCPSwP8mmzRic1XdgkxSi6DXuTG6sqNHPDZZREbvJYwqSiKbza3t8iCtFsXdxfKg21Xnpwb7E72MuLp",
  "key2": "6Hsu96Up733nvFP4cRAdhEoG7acSS5Hmxvzk77dLY5b8va34MUnyvMawo6D49KHYVQHBSzgWAxHTEtNegg6z8u3",
  "key3": "7qxvXSHacWZ69ghYL6w4E79hxFC93tfwqFiF2jjUErHPHZNdabKapuno8ZyRfaQS3X15UXAVC5jonxjXQoUMLko",
  "key4": "TE46mXGDfkvHkHDSVNkWdTvaPDSRgimZtNEZb1pB53kAyFsvdTR4LeEzMKHjVTSNwkYvfs3Gyu1gTCKY231MpER",
  "key5": "qapv4hV8ZkfgHr4ACADdeEmykNoHHFP7YT6uBmfUu2mzpiUJpdwaeKyFnDWqmkwmyzCLP3E9UEY4K1XAoGmc8KN",
  "key6": "45Tj5ZPEb969avfv3LFb65dCU3ayzXHwVyxDR3frvddTMhD7c6ETg4caykm2P4Nt1JWCMQUfy3cdCZBKXaAzqzCK",
  "key7": "2UT1paW8nZTDqvJ8rxvZ5DPr8uwBBeUGs9iUpRo1wVDjTEzWiRTT3qJaQBnp3iXD7DxnmBh1bG9n2C2pxuJTcRoD",
  "key8": "DgoDR8HFNrpvvttk1rM36bs9ymMbZAYEHRDGuehy1KTT4NkNkG818z6E1Jr4Swo4FUGeuxKU3soH3xespcMJDN3",
  "key9": "mRKCjfHyCe5RBBoiDFT2PMRXebR4QHUDBaiZSQ8BmvZZCjeaebQRtZWnBQodEE8nD9YacUrcnfiKD7BV2cLsFQZ",
  "key10": "5YD6MHLcrdJwEDLUv7jiTwkpdo19NBdZEsmANi25ZccnBkmW999o8XnXM3SMRJNHPASc7e3kcL8v6CkYqRTmoipb",
  "key11": "4QcttJGGtSvoVaSXCYnzZh2rk3t1EeyM3oFyAoHL9oqi9roGgWNcFQQjNESDkQkgpjQdAtT4xC2Ahhmb1Gd2YcTt",
  "key12": "4iUvJNgme3HFfjfNEhwUcMruLLyWjDTnq682jbVxUCUKBamFPH7nkEpXMR7rfuXgJTd4hF5ZMheT5MnzjpVoMBAE",
  "key13": "4XR1nMvooKADgnekqiu72WwFuwPuMGZfNimjKJjHxH3UugBn7VXnPReU7c3Tyn7J8AQRZdGuzGzfW6e3u2wh9BPg",
  "key14": "25fFGWtiehPbh9aYEzwiocvVgJ1LTH8R9qaTKrYG9LeDPJAkWRfLqTPBdAbL8m1fawarCRpSreFUZia2Qtzni3Yr",
  "key15": "sbvLGSnwmyS7A4i7YsaSLDZgu8UVLzvRzNr5aQsWXLiKnAjUGJrUUvWrcmVptco3joApDHtT3ZQAjVgpFt1aAaE",
  "key16": "2cBzmMJx7QuvLraUNmd1SgJUJUwV8S25pycYP1nNyr9G4mjYR2CzaD98ahwVJUmKUVYVzFy1pQbtY3PCd9aDYgYU",
  "key17": "3yxqTpbUfctQwjWLuv6WgZaxyKQbMAWWAWyt8mosi4pA46ZmMZ68TmoUUCWPwHJ9QqiFFntbzNGA9qL6vpFP3Tc4",
  "key18": "2t5XmX2Zhrcv5iSp1cdqegubNUwRtPPG4mcDit7SFvnGK9Gp8hyhSGRcgMqksYsGGQ7U2MAxt62m6t6LuMctLs1f",
  "key19": "CGZUePcHpoMBtiX33Fef6gdmc1He1jkoewu5Qf67BnFTGR8djJ13Ba4VGA4qT48epjHEB9dppTrGtvihAaWPTwG",
  "key20": "3aZcDP8Lbg6R3VAwPMw7ZUfnv4idxtkVPj5zMiQWg3anJoxS1AN7xHV7ajfndJdTp2gKKstSP5G1bV4b8uBH6uZy",
  "key21": "2RVnzvmihk3jnPq8p7c3s3BWTDdCS339ibhVk5iahRTxJ1Az2wVzcWWZo6s7ae8E7WdQE8nPZvu3drDch9H9z5wx",
  "key22": "41JMokBAkDAcnXbEyWKeLbMydqX4ofQAwcw797Nb8XLRAGJeGLPH1en3fsxfvrodBjqqBZn5MtcLqd1jWVXnhhMT",
  "key23": "22dGSqQQkKR8mfqtnxjWqVscJiFPxbuNmQX9rMZhzLqYbrG37bn5th3sJRSuKU1uud6R7TV8EYNWDo8Cw3Fewf7q",
  "key24": "KwXm3popP6YbwuyojGSvi3vw9hmULu9TvpXsKYftEVHF2fzKbVzVPVPrGSoH9gjE4fo61Zvhq9Z2kicuozWRWsk"
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
