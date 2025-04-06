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
    "3f9hDbvRC11C9TdhXkznLzHvEnboGXqTX7hDvCxcTZ4fynnzZmSRRM3L5XumSkSu2eFDSbbiSBz2vQtcrTWrxg3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWsEaqBBYhweSmuMk9FZrrKyUGAVrHNN7BqvSNXCv8HVvMuGsHsm4hHeQnQNQTkZaJpaXoNbkq4NaeAMZWdnuMg",
  "key1": "Uhmr1XGLFK3dZH17srA7L7pboThh2q2sQyjkLeq2FFnBJ1MB5VXJq6jsQ7btvBEzcdZPKYE1rGXKXnahcRrRdHs",
  "key2": "Zr3ov348Nks6e25uP6ySaZMrkTgwr9qeGr752BgKsubuJQcPnxKaSgprZkEcbahgLLHsb5ojRLxkzEGxFm6HFUj",
  "key3": "DcBNKbYoyYfH6GTkGdnZ4v6LeHNzt1RntryHGxBuvXPwgUZZqajhCqn8N4RVAPSk6QzjBchB5fMGNQFHGdTNqMM",
  "key4": "63HUdYXvNKZfK4ZK8g5Wi2iPCMnt2Ds4sRXiv5k4kir3fsaAJpvqS2XTk1XmjeCN9xoQBojevNykMdFdGWMF1Cbs",
  "key5": "9QQz96TSVu8AUyGjqdg7r3hthYjTEhTuVo6h6gp2afFkqUZbYgaDcjjK3ibgjZ8S3rSH5C81UYfJaHshQ8sEd3v",
  "key6": "3aiZnsUs2UqrXAAjcuN9yWKTNW4Mh9hqapofuvHxXbrWmTkC3DumpoFFpCXYDdkrVehHvAAAffhc4JqALjcN7j6C",
  "key7": "4i1VyFK8btAGbSqPs11bMy8EKDwY4HganocRQtE8Bw86J1HRSd2yDSmHVvGDPLdhtm2aUMmcmB6sxQkyi1dYXKtP",
  "key8": "44tkgisjrMVQycTuwev6ugMx2dr6t2XmRWZk8LsPXxw6T5veF5AuztZE1K7yMMEHP7c897v9m6NZC3hoAWpCPu7t",
  "key9": "2nKgYPZbP2jBWsriTyefdyCg4WkCBY86YF83nbXtFUs5pg5atXnrkFboEcDAsCCdc2Vk9QTvqexcn8WN3LsocYXv",
  "key10": "FB9wswXphULdHCLNijRNTLykiRLoBV93LiH5ha8VVQ65i3HWQUGcihX989985vqM75wfdzRXjjzU8qJzzvoLkap",
  "key11": "2yn43JLydYobBGobbamyWkmfwkrbPmDszLMkKYfqjfiDLbThZmUnAgFPbznhuya98Uf6ttwmjwyrrkKoU9mrYEWm",
  "key12": "5qqxNMP5D1hj8XmKwutrRrzNxmuEtRo2an3xzmyTZVEJgTjwqEj45ZmNJwdM2cH75eMgdUZoy5pzkjKTqXaapB2y",
  "key13": "5wvNDTRogeNHEbJCZfYk2xry5purRBp5bp3jrSD21wtbSyAcbUm2ePhfgnDfYNppRtxMVdBdSENkG6sGZHDEpYbH",
  "key14": "5GFqCaimYjtUUWKzWLWwG4BoTb8qajjQiYgHX3c8ifopLiPPVBb4GGpjjs7ieq3AphibsDL8yMjEnimTvHL5dLmm",
  "key15": "4Lg1SUVTH4Jji5wKDSuqMiiuPPJDJQdao2t8bV912xDFub7iLME6aV7fi3qEmDBKTyWYyuZ1kHnDdPvyLDAeXefh",
  "key16": "qKcciax9YAAToonknkaBSEuVhp7nCJzXntpEZ4TidQDJJV3GTiH8n7zwusEBnwFQcBj7ZX1r7vih6G9HZQwq5y2",
  "key17": "8ADu9Zvbf5bXofALurmWipGsHC9gCPaVGNmTFtqozZ9G54QHXF1eyhpvaWj85G1R7e3G3FBsmkEDDgHQvetx2Jd",
  "key18": "4r1EvLyRep8xzrtjV1g6ZnJG6X5LWnJnDUyNorrEmQmQLUwQYyeoG2dQ1qNiNGsoy5WjAuhHVGDEjw7cMxE27AVW",
  "key19": "at8NvUQXrihjiSLrmPpHrp3YomaoMWEyDFKwLNYw3oUE7m3QLiPq6GbdskE9SzQkAPxJvUytKcGn3sGpssLPDvN",
  "key20": "35XeyLCKmTa3ydUKVxEecLYUWvYFu9NuezM8ZjQCnKyWGeeDPkFuYBHEU87dQZVhmZhm6tfsUk7emN6jLu1qeeKc",
  "key21": "5WCae8PEfjeCTd5SvAWCeHr4RRTG8Cbx6jowaCRiTVpFUUsYj2fmHj2uRxyc9ZNENuuhv6bFGqxtPhdMZ3zqNDUm",
  "key22": "F9rExCbgcxxkxCk1kE5jNJbrCtAn2zcFTfp91JAV8GhphSbeF2MVvoCgR527Jp81E1VPLfofXsxw55PKUSHEFsi",
  "key23": "MDeXyYYDABRhedN54PE5yFcYp52iwTwgwMAamP2wbszfkeyXc9YrbyLRVvi1rukaXcjtpn1jk96moz6Bx4TAjCc",
  "key24": "2Ni6M9YCRmFN8T4dZs6G3LKULVvEpZEjDWbXze2MAss52aoJGtzmDMJ2GTWZfrJ6NDRgfKxYUPE4S5Kk66v6qdPt",
  "key25": "Uio8DEBy3mCvjommpXuyG8bbbTd3pQ4aqmWHvEJpfQwcoLcC7vCGzb6r3i1MH8qWycbqNnVicX7gF2QhbE6MBzJ"
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
