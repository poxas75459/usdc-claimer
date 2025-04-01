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
    "4Y7aJKvjX6Qu9uHudQZ1Dz8oAguQQq2Hnc75NjL7Lqj5oji7yGniNhecPZnkTk2P9VGbdy7EGmV2DyEXqPJrq12u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ECoUEu1Ko8j6AS9no1Wx9aa7TG3pYtCicX5Fzcp1uZ78FwNKXR3kLNA1ofppg7RPHTCetcdNKEfQNmZCohnWs3",
  "key1": "5V23NRgR5ic2itvys4dcf8ZaTCFpKJRpLauszLcH5GSz6vMwMkFxERMmS7QsTy7VPpcRe8tHGtT23DpwGU4nSKBJ",
  "key2": "5DxQ71YfLF1XxReQyHks8NeRY4tMaz7h5Q7Zcarm2YPtmLHPPbCrUjaLYXeSFQ7o5xTABWtW9r7LrRWTguHfgE7o",
  "key3": "28dom3WhXTqexVaRezc8BT9tcuJ8JNy1A97WvmiWdHQhNR3kWRTiipbD9ZjuUvhkrEdwarqXWCD7JpsnkMpQh1kY",
  "key4": "2FcAcwwGc2yCzsXwCcomidig1aj1Xpt83McPCormv7aLBkrsuZLVnJ6fcJpp3HaWfzvUCKPvrL3UiHVTL8fDHrFe",
  "key5": "3PeCn8KGwdUthZ1VedNAvrQPGqtmtaDTiRPMkPMtaPGfDvgvLCKuc724SXz4WoYzw2YZxBCZcornDoWkUHmZJCAf",
  "key6": "4LsFEiskn6XjKno5A2LTKFstBizUKv5r2GzTi6vaTAZmKFakhmhmUqVXQ46GaiZXrRwZX5SPSJWZ5mqG9NzPaczi",
  "key7": "ata74nK32PaMgRT3wa2caPdMWP5SpL97phxPSuzCjXWnuWo8rZnKWonMSHtu61vyi2wPuKxENf5wo7ieoBLfe5m",
  "key8": "4jh8KPuTpX4bXPTkDwzTEPPfhYyUNKeygF1BRxDfekJ4s5KV1EQnknXHpaWjGpVUAMapjzZtED9hibyBKM1Wwv99",
  "key9": "5Mdv8JHhPddP3YRtyseQDu7iBiVMsUqAW9BtQ6BEFeCLYgxUQmspjkZsJkNMW6SU346rXQSrTSkWcd2xNMKFFHaN",
  "key10": "4bzPdYseYvu6Ro93dqHRZfjBnD5u6n1umWitC3R2o2B5zi1MxTq8eowBSEU8EfgcYv8AYUNtjV3rFsvMXgp3nSzP",
  "key11": "3Dhk1cYRPoMz8h2wK8R9DVstjFXvTLBg2DgrSW5rMTRJVKhu36fY1sHcsqeD2DtWDBkEhqtVPut94UVESeczxBjH",
  "key12": "4ZP6rUqT2eJSjMGtYGJSDNJnQbFmAVMubc8xonwjSYdn26MXVBbSRv8nE1w4ii34kBRQ2XFdWi57jJoYFqGiNbZW",
  "key13": "5vMTzZDeCALmrN7AormBqdUgmzZ96bV2spxo2rGjfMaNjSGdwsbDeV14NzZtE6H3RgRAFLE4eCPYjmafLrGjCEYN",
  "key14": "2QGJz64mctSUqyUUDx4V3MTPAPvxhXgPKmnRfz8MLqU2QuDkgSgqcm9QW5AafeykAr3ZbStKCHCrJhzLoau49RNL",
  "key15": "2T5oRMZMRpQ87sMEctgd3j6hJUrP5Zq2WhuSMenn9nCrzGHMqBu3GeZJfLffHHHu3H3Q1nTLj9VAkC8Uh8Tz2dgE",
  "key16": "5gfAUVDrvQS9s6gJcg2SV98cWZbkWVQeA6hV1Cgk9AewnEnASGJzet23q7rvrmMvGbj6qqVAaK6BJC6w47y2xZmg",
  "key17": "4RtmZkerdkeMbDLDGpWWxySVVJPHy6X5EDZ6biNMFJQEES8pVpfKkKiXrfbwSNzwVgFN8YGKp9pVfMazwVi4BE1s",
  "key18": "3sjoKkd4VMsxTaLMhN3fy9hP7xnkBCRENK41xhDRWsHLu5JxjKxdBsS2t16pYPbSgYqaSaStxCHZkwySHNRDXA9j",
  "key19": "3T5EHrkoLBFpYsCCGcY5zmJCNTPPsrrt3WhXmtwBnR6n4rdo4tLimLtky4rzdPEssdsEAYarPRmxrhJYfKNaDGu2",
  "key20": "3annSjGZZWucSzneG9MjAQcxkeesa7W5ButfxhJuXNotTnX8p95JBdC4P5eVXBg4s8QmW3P9mKo71YPZx1dYEJcc",
  "key21": "mVhGodzFwbnxLpGgPBtRgdjeMWf3yoK799BqnRdLik19BbNqrPZhFNLDfEqYT9jzNGFtXGNs9DtK7uPKBh3AKPv",
  "key22": "SnoLPvemRjWT6sfxKGPrwMgYBibha9RPCGX3xWubKgooYoUkGhipnxh9EdXZJcPYRTEGpkSG4R95DqWSHxNnH25",
  "key23": "4Aw93s86fuzJU1KaEZjTFZktBw3co7B6cuxkxxXpgFqwwAaVtHkabQ8w5zW7NMfJCurxYiZD4e9in5WPVANu5TpF",
  "key24": "5w4Qs8vSWguJLvRF2vwymaJPT67zdBAYfLWqyBgATvveXb1LeK7mKzumRopmfn5ZADVraB6v8xzcRyt1rpAGADHg",
  "key25": "2iswPehUjEGtKvPaZYiC9QJmL8bFDfTQForeGfnpwMLB72fCdBfyVs1m83q4uZwZS4Tx8KaTUrPZRJk9xwmSgPb5"
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
