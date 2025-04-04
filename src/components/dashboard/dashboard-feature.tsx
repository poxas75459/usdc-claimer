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
    "3yJrX1viAsz4FcbsYEzXKLmyDyVMnR56sZf9qZSG25pMQfRBVZJPnYXmCeLdox6cKPJPiWU9E4GN1hfFxNYbtcLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qLbcUZuq9zmCauBZ2tmbhgrRMEzy7T4VdXQQPMwnsacYyXpYY8CbaNZt8FxX8imbdCkdaZfJkhvAdN4amPU6yL",
  "key1": "3C8PVW4S1S58KtSA1sqrCHhY3dRyxEVt1oXneNPbTkbrFxPiqaQuc85auMHs5AgMK2oTjmzDsnDSeEtPRbxCmvyU",
  "key2": "3u25FKfpuSCMDkVQLW9WCJubU8BfGBJka2SWJe3PyksXkBLvs6gGrTKWjdiKVdVvSvKikDTRP3ByhMYFVzmTcyua",
  "key3": "5mCQJzjcQk7zpyfGxrGh5bjybHPwFxeiknzqteiSYpQHeUCPwrA81ZPRa96jseYmYCgNkTY17RX7phZRNarBSAxd",
  "key4": "37dKdmtgzGcEZGfnn1tsqqF7CTDZszR27wn3vwUsBmTfbi6rCd9KvcJW7i1vh8Vb5gkhXbKF34JgPnVXE6CUEPzV",
  "key5": "5vxwhZDkvCyrvVGehWeaWdVD7DfW1GBMsreJyWsjU1p8yw2X8cDzNWG9oqKwFeKXHZqXUAafN8dgMpYgJmGhdKQH",
  "key6": "5kwdz7fBJrk6yvYYATzFkWqvRFuWSuYAYFZWavqsoF1HdLHe4WJBPoVSYCEuUxb8FuERN1HaGhB5uKqJXcHUQwQi",
  "key7": "p9qc8uwyqmCKoMLJrsptrN2mQ89ERrCqkpE8aKQKLL8gJwoYPuQYQzXN3Z9zEnUpWVpUdendUQBZGqCnMLtGxVn",
  "key8": "epRFPP9NLxiJD95Ci7k4P7iFbdTGRAQQmxbrELr2idXd3f5Cq2jXM7WdxnwPmym8eYWaLhHfsbdg4M5BAStwCc6",
  "key9": "5m7m3FthqJowE4z8Yv3KSQ5SyN44VZpv1Yqvy1UpPMgWQKCU8MMQrGe5uWtoyCrf1TLoov6v8zv1gBf1XeTCXGfh",
  "key10": "26c6KcpfFEac15pHdo8nRpCN86yRJhxHddsyJSxCVSkboHEz7dwVsAWhtLkrm76f3p4sahDnMy11kp1msZ9waoa1",
  "key11": "4akrzJrA3xYaSLx2zBAZmLh13vvgHCYS9LkhpRGphLhfvmq6kT4wXhD5m1m4RK2S3niHqcProZaJS8yruNvk3J6D",
  "key12": "5SQPPV5rG7soXy836cCwbNn1d4agy7AL8wg4XBtZGpjhJdWjizLxSvugK38LRDefpszh1oQToa5esoiPz6hGyeb4",
  "key13": "2YkKNsikTBzBVWJGsrP6pBVMiQhWPnWr22MRjbc2UBura22TiuvzYZgYQe5gVmjHzfbn9R4EJtwrNJLsguxSfdxL",
  "key14": "2tZCKtnzzzfVup9do2LhfedkW4TUFtoU46EegGVsfV5zw986JJ3dVEbPNuFLCww7DFVpvYKVyBAYNFKfHShT3ZsL",
  "key15": "41TCUv6GDxqtZKa7HJeke9tT6u4DZnM227e1LHdmuDoWrSuhQQyBNE4a9dH9SdjkKUbAiTSqVpFZdna1UGwtPZqo",
  "key16": "29mPUtzFEgbnjLMyVQFc4yHSeeWPN8Buvn1W7fBRpk9imnRHfuCKt8gvEmLn6FNEtZxA7R4kj83KMxM6SnxPZbHv",
  "key17": "4Y5DszVfsDtDT2xtAiRMZr1KQUnKBTcMKwe25ZDGha3QE8v6oTWWLVCScR3oY63HfkLXfsF98Rm1DJVcBbZNvGgd",
  "key18": "j1rF9SL9gPkTfC8Dc8phK8VnUjgVvFJ2tkA2nytWVvzB3CVaAMdyHqprXzWpUHoUCyi5vaz4PNGLb3G24ZxE8ZX",
  "key19": "2zGk1SgPsxgS8EvbqFsEdsmYiR6MNwrC2X8d5fVt1iWUA8VtVny5yantUyDB37sLwMtfwU63Zgy2BhV7YeEFWch1",
  "key20": "5aUrwWCzP4JBNhgsyEYWgdGfUSPYauoYszUBZ1vaZjUmKwbikKYr1VwZhA4DekpqrWvKr9V2NTrq9u7oj7m9ZXd7",
  "key21": "65LRuubvTqeHPexzkGF1gVpTZ1ZXVcXhi1C6FKUhdpaYtt41NeeE2VVn1P7e1KpQjTZBusz8eS4jk2xPgZTNLqwo",
  "key22": "2mfzXJxcVveHZX85ETEhS2euZfBBz8pRe5axSXe9oZZDEQu8ovktEN7x7FEgbwJKDFurhRAWsjiJMoCV3x1gcdkU",
  "key23": "2Yc7WtJxNUzkpyWnXhD53uM6NmfubDJYwWi2nRbpqELCBpNoqdjRmbV9WE7tV1mReqgsicVsUSHfUfYYjPpKh9yu",
  "key24": "4SWFRwcoa8cWM97wSH82HMFXnR7Az7ejxkD7WgNBLHVspvqTXsrAAhhr66HxcJm11r4yBHTmyiLjpA5LFHZLBKmp",
  "key25": "2UXoetbPzQQCifmpDxvT64buKM4b4n7UCk5R8wJfwrcmYgQQ8scU36bGzvucUiQi8z2XdVXUAT2vj9Pd3iJRKHET",
  "key26": "TyqSPfDSBGUhPH7BmVyWSNPyzqGiVgZ7aXJRw7bsGfsuRhaAUpYiCswC8hbZW99jpMMmUShV1Q7jicPBcTcpbHc",
  "key27": "5RYZwoYiTCUzBcbT9krazw7ZJPtwQN9Wn7frdwDa7Li5WrbSgK8sxMyeLMUMbVPzSH9emrD7kHapYBbBEMwWeRoy",
  "key28": "4uw7oUX7SsKhg6ourzs63Q3yFbyP2eKd7Sc46Hv1TbxRVPWq3qyeWbdhu18JjzH2c6qsNiLWQceLRm2CqZrwxahi"
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
