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
    "3ebjKXBW6jwC1AGeavt3rSF13LEcD9hySkvCZTEWYCBpgFkjBcG16m14wTApSAbRyio2EoLQ55J93nbXc21rp1Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWaCfdwUrhDkfDoowaTJwJ6o3fyJG3Awc77JZpvbfxkQdYukqAniLN4BvDfAXPRR4dh5qZz1HGyecvhL5fhHoni",
  "key1": "3ryJLu9KhE4fBkxv3paEW8doR4XVakMFRnNvq4nkWsCx6kC6yQbWtVpNSzM9t56kBSmfh3WAun1LbUZk4dD61ght",
  "key2": "51m8ghNj6Kp1dTWsMVKWbnfZeygGz5qKJGnZUzVBBwHgSKTN1e3rgE5gK2g8v6s3mTz72UZoLF8Fezi4ZXG1FPai",
  "key3": "5N5j6Tp6u7XiwedTWPe2VjfDbXmJAFmCGf4wjn8uX21DmmYJy4Y1ayTPxBCg843ZgMMBV7EGM1AXk6tBthZbCiF7",
  "key4": "5MmtpGFKeHtLyswhoNmUyeLrpj2Z5hPA3xHBHkFonahTy18AzAVPwpHfVYciCp7qBLGnoeuY8tEnJbA5utc3T13r",
  "key5": "KenUXa2tm3ncwaxDDxN8q5qJgn1NNqiPxpeJ6wkhnuRQkeSVLjTw3fZNXaBR5cTpKPNPtwFMmMsNrJs4j6gYSzp",
  "key6": "5rsVgjwMjmyndgU5qZFEdiCfJ1DAbAV75GwS7D9oErPf53Cx38usYnyg15tX8DqEw7cejBU1H4uAteCCNLzmPAbW",
  "key7": "3JW4iMH3CsVqVG1RsNpAdjginqCmtXpp7KrUGJ6HnCKnhka5HRU44itECTjfqoRSyGGZLcao2EYYneBctLnsTNgY",
  "key8": "fz7VeR92fG3vGMiXPtMkkkhpaeLJfyMqAP6PYMUSTiWSPAeA1BVby3DtnfxFSTGYSuRdJKrjGA12WS5m1nVG1Uw",
  "key9": "2xAgurFrFEwej4w3v8LJZJm7TzPEwSsoDSQKpdpQuv1owqXWDhtQLsuSrw28HdH3a5wbY2HXf4oDtJZ5B4HadrC5",
  "key10": "2EoPEy2LGNEUShSLM8LhyNqWEVhfuVN6KMCgLd3dS39eXbErReFwmiP5ghxcsVM6bvRDE8ct2J7WeFmuMvykY2t3",
  "key11": "3ZBiweUAL5ha76CMT4vPFSxqH3o23rMrXi4Sqmy4ykTvhmQBkBRKKqGphS9uQ9p4fdbaUC53f1p7YNfB72RKguSF",
  "key12": "51cP5WgZKKYnfgcAPbkHjsmdnLSdeSJXHPVwfu6RvScacmoE6idrtVdj9fmHKB7qeRCT83M7bBaTvaUCSLYu6MK7",
  "key13": "3cFRvQJPgvmE72AfguzjQk9dGPajUVStJaKLrUGhi9rpayC5LYbEzpgGSXTvHZDexppbj2uo5ADRytLsWKV1Tf4V",
  "key14": "2CZKQBco2acZA33vHeVGN3J3BcyidrVob1jQL9ftyxCm9zoQNTYcbnVnkeRF9CMgMBmKmWoY4dFU38CnCNNqy1ZD",
  "key15": "4aoDGGEMQahVfEh3cQYKdwACb4yEbDt52cBttqxyWsLDBW5PCo8DvfCbBaTSgpumVijRdMTaim3YLFXAS5D8zG2G",
  "key16": "gD3g15UVKULjAyqyj9Pa5dcWtxsW6r1WtF9wvMryE6Pp29jB3fEUgx1HqFEmCdJMK8cKZSgd6dBLFPjVFttN73b",
  "key17": "3jVTiV492n9GGNhSnEsoVfPWdzbkivsC7Da2gv3dXDGP8s21DyBoRdrCp54Fg5V2DFQWmdbYhhg3XZ13ht7nfWNe",
  "key18": "5i23nrVWvgbfoRrKhtyfwRKepX6wk14ZwX8nXYXxnan7J7TpwUjY7Fskx6UEEatdikqbsszmr8Mo17uSswctDJKq",
  "key19": "4EedMv1X8zFTCzG4dpiSzcncHespYVNSNYPVzb4JdC7SAr3FQmQw5hKLw22kQcuqnYQYhBBdSMiDgFY7yDZPfDXX",
  "key20": "4qP2hdGGnW7iv49nAPwa9uMKVgmL921rv7DzZUYbXTgbpLFyM1xGNyVBF6uiMCvAqk4K8c1itFS2W5hh37pLfZH",
  "key21": "9Gr1DrTg1rhSRBTo9FdQRTdwXZCUYMwAoXBrSjgdyttEnPzfn1qRfapmGkxHZkgCdmidJvmKajtUHtDxYvqxduu",
  "key22": "5orPH6kPDhP1yQzw9TbqemG7bS71AwxYg3PEkzS654RtSpYBwiBQ8JsTkoCpU9TXdE1yYMnWZSAiGpe3Zw3siX1U",
  "key23": "3pRyX4apZQjoBsB88uF5hoPAgzZvrQdf8YX2PFcXQcyNAPTB5CqC4UozmHstW8pdK93HzfVVM2eNDHjsQPRreyns",
  "key24": "61Pw135AA3YbgubGn5hGx3CBgipXoGdmxppP6FU2j41KQp8eHzqL3TFvLTrBQWin92DAuF2YT2cHa7MuvWS5N7a",
  "key25": "2kRePBiHbAKnnHVJq1tfwH4t6VkKZx7BRAaDTgb6J74tBgqzBCu7UVecrS43jNSjCB3fqRhRQMBDb5JoXmzH4mxS",
  "key26": "3JgLQ2bnZbdKumLdQ1J4Q54hF6sAwrXDWsHiyDi8WGCEe2NJHHuvCw55L9pZThz3fYuKCJppGRDrShtjQnDMM1Pw",
  "key27": "2UM5EtzHJfQyFhX8Uc5b3N1k2QYZJp9dPFrsx36UhB7sbst1ZgMCDjWS3Hw3DuK9dz1kANrA3M7wwoJMrRJTeDXM",
  "key28": "3MnwUcoTZBbJ8S9AmBy7Mky4etyQfp7KjsZcMY5ZSK1dXp1zrjRuMWg24W9NzhWQuRcwnHRmKSGcxC5AxhSEjeei",
  "key29": "HkgfzWQQT8SzFtaJrVx4iozu6QZqMhtffwXCcGNvnCKPpCe18BhDSiuuQza3mmVwLj2Atu126LTvWNinRdZwho4",
  "key30": "4KHbpWBbdgZQ8V4znoenps6vG5KPVvTgqrcYJtSPAduN7ptZMiV2HaeYsQpXUZhPP7Ashjd8sXyh8s8bXExgS6dJ"
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
