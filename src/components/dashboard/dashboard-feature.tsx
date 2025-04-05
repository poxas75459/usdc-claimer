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
    "12nhtFgs63e89euyEMj7ES58qyLcfWV6B6ZichSxdfv46LyBZwoScWGiCkeYck4wt9phsoT3XkJPpD137fPsX1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1RucuzyJfjCrT9VdnjGQREsFzyn4uDdWWatitAiNxVdbRYtQyo2Yo7jPMUbV2pdFWHdJTW1QHmdbzH4XyqPnWr",
  "key1": "58yjs3e3U7BvpSVcEyj2nyT8aAvbfywgxMGYQkp7yg9mFuc1h3GTD1rTFcbtxu78KqKioghXyULp21ZJBG8GH1KF",
  "key2": "39dPktHKfbJynaWU6s7pRW5Shse6u85ZatKTy9gQTrMVX1UjBynUnAseRZyajebKNNBBJas9NQTSjcjdZn4EqhAG",
  "key3": "5yPagB9ZnJoQwCpd59BhettPPvyLJ4kgJeEPBzpNV9CVerTPSobqmxTSmYqWPeYJKXtfiqzCnfSwN3u14M7vqJV7",
  "key4": "3eqPfP3sjL3gBEU5hBXfLLiMemtdSVc3VK4B3GMvr2Lt39zDLju1MDf7tgoM2NZ96LZP1VKfSDsd7KGPYKwz7dh4",
  "key5": "xPeQqezGqMmxeL6L8ixcx6N3dvbR5idnwvB4uAxFSeattbnSbuSpv3LKE2YsF8iMPYEZ8PybDJxfpzGFT6xnMa2",
  "key6": "5Lvtm1tuPE7FR9qvkRd2Dxcp32duWhXEsUsdEEwZrpS48W3RGEWqvU2JPatR9h7NFVsCSipX7GxsjEoEFTbRVPqW",
  "key7": "3jBYfBUkJQz7ymC744AymnBreuedSpVE666DyASs7CaD8RicJ5xo2zoSKq1wtXTbkD6eNh2oD4jc9ytxRNAHY2SD",
  "key8": "4ZKgCehiMT6YnyR8tjtGbuXMxs475fnrCWwHZhLtkyKWXuMZFeoQ5TwcdP2A23Y9xsXeCB8X2JamhGKGZkAozXN6",
  "key9": "z2G1kEeShE1eF8CTqezH83k6M8N3zmAemQG5Sd96XKgyFNNdJQ57GGTacbPPiLvPE9RfF571WrXWP8ugpLkBFPq",
  "key10": "62rYEHETThigc7nkaPtmwwCjEewAvy1QiwjugjrDBLiLpzAft551WVTnGxmfLw1j46bDZi3mSvNYoEweubrwEHT4",
  "key11": "3nLvY6EGf6em2FsnL6D64pUbrpvWo4wssiTiGzWdVWfktqoUU86XYjH4YEaNgkSdLLriGiG4CLM2TuSGC3aE1yTM",
  "key12": "2hUSAEJ3wyvfHgLdemXTL51tvHb2jpsQEU4EYTRRU5QFJmcZnv7ENY1thi3TYA5ZhAUsabuM11p32gcEtpe8BQEo",
  "key13": "2uvGN4dLgfzmKjbdfUQvs2y6ZbyYqEZXNqSJmsbB9JVHRo2ZptPbdKMCM3uiWL9z46yd3dNru8V8W7PEPX9f7Wbw",
  "key14": "55skryoNoMLaX2fuczsowMRFMHdFa2cQVFVh6D5mE6DZwDoAwuQLs1JPGH7hd3VXrRLf4FBS5vCEevHCmLHDhvQv",
  "key15": "46m1mBCW2k7aTiNfeHF49Vrj4pj1w3xHpYeDMqBvFKLbVZT93GLkBtjCUcnmKDu3nqXMTjKx11xzKuv7raca3uKR",
  "key16": "5q51kYajmasmMg4Fq6qZsDydzFb9V1XUqxQtH8Zv3vdr16xgb8gkYUSRpSEkGiKHsDYdwARt5zYtCqQzhy6u4Zsw",
  "key17": "5Esd5ohU7r2GQkoSkhAu49bVb2oCRHM1JtsFi3QD4Xb5JwK7hy28b3QeqYLYnVTDfbbxj1eY78GCDTYZkrSWrB45",
  "key18": "2saJizqgcsjcUgLirsos5DZPMTga541NMYH45QsY6Cjn5UZcCPp3tMvW7wnZDFYx9mvGLfJxLBm8vfAVFSa9mGc2",
  "key19": "2LVz7y3buWsR4sgrqhWrM44skxXvssmhuU9FbBUb5WFevwxBUM1PXohnmTqmDMoWit3haM5ejsAjfG6s5QMpDoXG",
  "key20": "2M1tF7CHAW2zHEqeeWHU94PTcCNc4tZ6CCiXUaA2zbqdETWXiin6Xc9cdLWp4LxYnAjfhcfAy8gwFMzKTjCGjNm6",
  "key21": "3N6n1UeERSjdds2hw3KJoHUWPX2ieHqndBdqu6xzatzVS9QhcismJugH5dMDvndZ1mft6Kousi78EQKBSiUVSGWj",
  "key22": "5jKMPbSxk1nV7Zswn6f6pQp7E2hP3E5qUgNiGXCUJruDuTtcaFg3XPxoXZgEA7yRnfgVW1uiKvH2MUeaFnqTCd3G",
  "key23": "Uc7mfPfSQCbg7A8ZMkDJhKPycNgQX44BZ3oFbRvsVhgdD6q9hUHpSfWhpau2nbmgZBtYMZvaVz8mxkSXn2Ey9vm",
  "key24": "eXC928gb5sEPwi2x4GX7nY5g6XQdokWhfGBUmbEgdaQ1acBN1BPDqicEXwkHDnVHgK1hixn6L3aHBL86QJ4Qmq6",
  "key25": "4BkqTcAJr5AHEZoqztMFjwnT1sNuNezfAQhi14huxFsZrcLc1C4tD3V4x7yxVj9cXpqTgg54Hbus5jY7igoKmaET",
  "key26": "3UtuwuXgy2hXfKBMxeMnPWdeTbHeGmgxfbCNGQD1H2Gtg1ch8MPzQfmZD6VvHLBNbEcSUSK5PRD5dcDRLeDrjBuG",
  "key27": "5M2rtrPs9ntGiAf9mRd2a4axD8cudo7MhHo2RidMbqBkF1uGmWT68EnuFDag54a8MmvLhnTqNHdrLR8v1fqHp4kd",
  "key28": "4ULySaAHYBH4nobLZvAXx9oJopGjNatn2gmZcYmUFgACauVBwhBiDbhssPBy7PGWkT91KLcrZEddkeA4HM5fHLvW",
  "key29": "saiGT3DZ9uE8qd4AvmtfhusKDNvrenGFPCbi3SUZf65ywo61nPiCJDBoLphybT25oGtHy6SeVgyaAnZZxWnXPH4",
  "key30": "2NHmhCQCYwJTN6XABiLrHq9Vx1nMrK4KRatCk4E5CoDXR2MsqTVufV1K47krBaB45tJHAjhtXboCnw2Uq4UcGwZD"
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
