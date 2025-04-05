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
    "4yGxpTtryRz2ixVJa5ZHqynUL9ZX462r2Xr7bN7rk4tFhgjSQ1kJ4XDouacAaLDRa2k1yvVTw38rYpGaot9zpSHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NaRZYUT12y4RGxrmcKtSiDVSAikTHRNYQvDnLwFJLHJLFXmKB8z3nctqPSkHAgxm6U1wUPfyV3c34wMFistDyXZ",
  "key1": "4uz39XJxBFD7Q5Ppao4DgZCtxkhbAwWUayTHutEqSwFcK2rs3i8bm25Zgu4QSMJUu3wgKbjZc4WqhCJgETY3NvHg",
  "key2": "4A8QwdHwRdXMf29pFLxzpZuZ3u8snuuyvkDSmXhynAEnhTvdeWEyrvLhZQndGd1EgX5Htaj4GrPCxnH6gA4HiwMx",
  "key3": "2PRxTyYDninmQUSgq7ot5miiU8z1iHDtfNMA4V6dTw21dx4uGGqyQzUWu3FHRrhpWohJcTZkXM1krJudrGnZXxSM",
  "key4": "2AgtLJo9op7YkY2t4Kz3fFbu85ukVeQs2RBaBsdUvdUWJ4BHR5Z4KJkxCtJ65845M6mgJaAZwKjKnDmj9tsDNaSr",
  "key5": "613rt7rA1ee61AHZwzpdpthjy9eMqDciANFKB4pejSmKpgken7rzwD649NBUY6rqXXtPfzgRFvw8Dtho5GzPoepn",
  "key6": "2rE78QZkfW688yM5XGiJAoUdT9QidtapMhAiE5cmia3641Gdrj4uJZyCh8vGGEFLGHAu96AFm4QbCG1mr1FULJGP",
  "key7": "4bRTvHSC5X9BCktkcoasbXYAM2xmytTqRVxrr9nSejUKUPTxzF8kKwqt42fE52rePoG6qwT6rT57LvHA4xbBZrSx",
  "key8": "5BLk9odFaaFsPg7P8xtuPveCdCFvJ7ZYq9zm4ueiraMdmz5swBGRzbnFeEyLVrLNeU7BXiEgZjjFpXLefDdGa7UU",
  "key9": "4765iQEXFydMijh6PvgC8yoE3A5fkrFDETg1VN3eupYSi7wXWfXWuwkdTyFqAfUVm4imgjkUjA1x4A6GrkNrc8eU",
  "key10": "UsNHfsJQ9jDjocujyYyvfggcLnLdRXfcCpkQrF7yRUcWUs8L2k91iBv4Dwi9zfNLm5QeX1kLvbmy6thQs6BwaE2",
  "key11": "4c7iLRrMTCavxPV5KxxXDUTqbon7btg4RequUqCKPFtnNZGm3mz8K8gMRDUq9uZa8aLWnQYYsk45iyScdTWxnTJk",
  "key12": "593TPBsjA4an3Ly2tLjtruL2xKXq4GcTwAWJ7WppRqfqysFb5tkUVnxGEfmCEQQsbvG6rQdhA8akQo5XGgrmnGBN",
  "key13": "3Y1PndCfzki6vNG2kvGKif5824URFjbfeeRGBi4HSntYK5gkr7kwECNjzdpYqdk98nguaLVKF91LA3nufU2LbVpi",
  "key14": "5g7Zv4YX49tLSNdLiXx12FdoTgoZrRFtsuJFMCzhKt8fnbLpfCDhm7WkGhFrAXQATigpX4vU8RNn4JVUh5iuNu8J",
  "key15": "4asZBC1WC6PVfQcBhaK3j1QHNzLk5NuyAjYrHVcwKaiQvWQaiaLgaKk21StJzrwvgtPi4KpiJ6r583Xe82HU3pPc",
  "key16": "AxWNFvBKuiRvAjzXNnjSNvsVfDiZus3E32HtAGdVJ1gkkU3r1kmJKGp7jAti2nmGtpc31xGdytodCmECyJScoKH",
  "key17": "dEKFoMA57FCoE1tCKSUg7vx7vyv1r2odZCV7QeySfcMKP3BsUceRKDRYz41Q1uAEXYh47a4gVJ1taNsD3Mv8yDn",
  "key18": "US3di7WPkWKeAuETUrx2nm7qxQesFnh1HsyyYQM6DsTTBsXCPfoWRGphpnvJBuCsaoZd6mnHunCPZdfoikqfJf2",
  "key19": "2dFBXuBkFbhR8sg3mT8FV8wGK5R5AQmsrtJMM5652ahHkxWRm9VhBnfh8Qtk1uCvb5uYWYEc2uWeoytdjttd8wK2",
  "key20": "5biczq5yiSG6zAwANuFfQfbM7BM5PQ5NJ6K2pZU8fw37hsNm4heK1px8HRaYohsyGVZqM86JCtqx4sKWRUQ1fPus",
  "key21": "2Bt4dQGE4fb6nzgkTteSYXpRKMMPkwzazGJKRrSCywenWW8yFAytcsvyg6yspNXdYmQVwyMFuaQukuqrnkDiiAbh",
  "key22": "2bg6zNjWrid3wzJPCdzJ7NEyysksJSy96xiprtJipPUta1yaVT1UmAaJQ859XSdfwMaeKd12L8pzsGQHVDWw1QSB",
  "key23": "dY5dB2qfAxSqWEFjGgoRpKJGS3ccznLgthSqNJc9rLfT7gmTy41Vfo89FVDQrMq1nMGFy4PAQ4DK5WR9PW3JzMv",
  "key24": "37JipMRodhXbmfYHuuDc3wrmgNpvA3gSxqJ5yrsXMkCKdRd3cZmHES2Hj39XXc2JYhrJW8PrdicRHeFv1WfnePYV",
  "key25": "4LAL8Pj4hcssCw1TZWMLSjZ4Rv3vRBkyeZJ4ymU1eAwSXsYnfArGwBJY14wSXLiWDxwMKCY6ybRLCQzfYnzVNXQ4",
  "key26": "5EhyQn6LXhBP3KK4Dj6L86E1AxqBaj59mbxgeoCLKqcFPj7ypTHRN9EcjULp4uKvtJUtBe8nXcyKichBvVP3Eau1",
  "key27": "4WAk2nvEYEVNL9m1oHB85f8vELCocdroc3g3osPFhs5XEztrZN77K8JpdjmSQ1eTqn7pNeMwN4jf6E2NuqkSJXSJ",
  "key28": "37BYY9rjgxfWHj3VGnqFFwJbq2sQWTbSUNBn1NWKoxw8GGyxjymwaha5iyfTs98uaznmzskPoMUe1cdzegTP6Tnu"
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
