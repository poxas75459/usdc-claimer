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
    "5dCSWZPaoSXtyBkVZNBRDayCV59p5TYKMBJETAjyxezA9zrEkXc6jefFCcsfsuxTUQ47Z88LPh7qjhbM4AV4spCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zy6uUL61GBWB5PdkS9nui4VVsZi2E2gnrNttV9c2wQZnXo8nnkbftLbBys2c8yGCaYa2KbWbsjPTGARfxmYRV4Q",
  "key1": "K6N1Eg8jAf2oHCgxk7ikHrp2DXpd1fPovnRSvi7rpHzJHFZ5pQ9oCHdxRPhaGZrZFVGpcyqLyZkEP3G8ordRgCF",
  "key2": "4eUQ48hMYjnes9grja9fraSbL4Gu39vRpMAHUPgsbpjXFfyVfg1MVTG2n8cr3tXVLimFqkED6WAEoycdgfb6acgK",
  "key3": "2CB4CuH7MaK3JjtTJFXHCM5EraPmpzS9zqP6F2gfBx2ACkbx3vB3WYNvFCA4D2oyDhLsud2x2sVn25XckhwuhNoc",
  "key4": "4N1P73V2mJ9WZFaHdi5NvGLXHrQEqzuARUWmhjwjaFWEpGxXJpK6qE3D5z5LJih39xNUnZPXKF7V6VzfLdgvy3yM",
  "key5": "4NUMzDBLwvs5tb4TRqsxyj6humKpLKkZJDAzpsn7CeZjJGrSVKX4FjUgL3SkBHytNj96nCkC3msTdjghM6qCGdha",
  "key6": "3pCYGxfQppHZKiMfe3iTDrwyMHbCresmEnW3idXJvfHp9LCbwdZ2k9AquKfFu5bHXonfs69BwWcWq21pzoUwntpT",
  "key7": "42ny9wY3bm23YBZa318Svp9qzm8HmvHj8LA7igsEBVTTrKXF36iz7MTnQBMu3p53QbEAKRih8yUEHAEaq4yjDKMP",
  "key8": "47FAPGKC718M7QEJLxD25hTVr1FqRTP35wPN8Wx3Wqd2FospovVGXyvzb7qNGntghpWpep6z6fr6UUB6xd4d8Bbx",
  "key9": "5D694pZtLBrAdDNdhYg3wh4MTVrHv3NA7QweMsQwbMtzwmMUWWMSbHXbqeu4ghgLTANsN9jffdVJf1NLaBEnApZs",
  "key10": "4fM71xAMuaAGrPE2UioGd9hrgiJ6fgbwPCX4Xgz6X6M3LuwFTKQxkDY6RtUpxZPx3dMZQhBcEbQCn52A5bY9qrfG",
  "key11": "4JKg51Pkixj7SRRxwdCVWCLCcTdsNfz1c3pCCyZ1yRgb2Huk3u53abm4atDjaj7dTsG1NX5i8y21k76Q6tj74Aby",
  "key12": "5aHMuonX9y4yR6Cuh2LvA9yvDH6VXBeuMeV1Xf3YedHzUkEDqSoxwQHGnHUup6iRjMZJZgcGxoetE1v3vBQLVYbw",
  "key13": "3zNqefKQVCp7NrLj9811zYAD328Wsca4hDfUFoVYdCrP2PeCNvb3rfSBRVkqErZQwpR1oeXoKNK5tCjrYWjDu94t",
  "key14": "3ywPXfNS39WLrr8kouaBbhvE9xEYArQ5zSgkAR7ZwzXcuzdig1xb6qQkWc3PEWHkg1sNQ96c1VFShQrpwnUQHBCZ",
  "key15": "5pMkRoKZ8jEmWLVvJPmW5zwGfYKPrqt8nPEbBxYU3fR4SLikyDMx8EjFd8oQzE9EoU5vyu4fbArawFJyHQnu4xJJ",
  "key16": "9aga8DiQwnngKAH9aH5bPFbGsnNPf4WdX9P6cZcnsxnP91mFkLzpWEdcz1YPUGUWF5RAyDvdTBwvTM42tcZNxgs",
  "key17": "2HVWbhDEpNw31rdWLMRkHdP1raw2pWfvtHnqrWUMFJVrH3wsaovMVWScUfprzGSgSikRpS33idRXLsurMdHz2kpD",
  "key18": "22q27tUdcfxpevUruRVvBTeRHpJX7ia6bJTQ9K4VAcFFMrmkoAv3c2FQyBVRBW3tcHAGXqLfUGgyFMT3MuSZmaxf",
  "key19": "7v1hP4pjzVEZoDz3QPjgGTiecUzfnBjjQtau5pAYKRCtCD3sSByyYrZ1dqsWSZMnznRbDm9w9f5wD3Mq6d9iBMU",
  "key20": "MaoERLsDjsvQdLpxw4ci2J1QgHmjzDQjRvJbT4H8jZv1Kg2Zh26KT8YQcFMWnHtXHEpDHrjkgxp9XPZCo71WW42",
  "key21": "3BRDPyjRqqE4JHJ8qxq5qZQfRNg2MjGTJCjxn8JpouhD79Nqwy4krtnUMnLgUwuvjfQXQSDKuuAXS7vFdmsR4bV1",
  "key22": "64myTw1q7ML6up8wYsZaLpF3U1bmMNWXjcLFZJuYPFpA1FnvcGSU1NCqJZmPSANavny7bWyTp8dTzUYqcrpAXsFB",
  "key23": "5eEEhRJTyukUNyfm5cM4hJmafHgvfosNfxaufYauszbBt19ft3cBeWjtqCWskZUJ7yfLVhKajaaYYowBpU3o8wZL",
  "key24": "672CsdyoJYA214zwmnih66j5pCqj6tzgAiZRkW5FY794M8uMckRFKxU86FSfkhY5RBNVNCBWLfrHrDAJWVy2gxxj",
  "key25": "5k7BSGA3eHd1CRATCiTXTrtNGbUEvaXmMrjExxq8aKEQdLc1wnZm5qJbTmn6dtGoyKdv3CmLZE536uAGhAfgCATK",
  "key26": "5C1RiuvGEVaFSdJEsxL7RwE31cqUkmTxmN2grn79zxoVQAJ7JcHEfVnGyvx9VdYCWJxXy3nzNvnzo9mJvwgQ2sVx"
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
