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
    "5C5KbTtAp1NwinYxxVBXKfPoctFcHp1khbP8gjLSJ7iynX3UEuX4n4wwWs6xmfW2kD5Y4EDELCP43aAYjEU1AQt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q3FKnnD3S6XXG2z9XznVGVG8kfdVWDZBskGBAhPmekd1XQ8fXzfUjSqnY8eYeG6B3f17EvX8jJC92pexeWeMTsf",
  "key1": "3wUTJV4pXwwfe2hYkG9BV7VcjbpZHygahPgHipvrkrmGG3zeUBWMz7aqkyEfNMhRDyrRzyhchWyZDhWehn3NDwfR",
  "key2": "5Rt3mL8bG9DXBnCN8HxpxD7WFgTZ4dessxzHc4BcAZC34EB2HqVSspCx2s6f4uFJZxvSNpXCMguH6eeFnuNMfisK",
  "key3": "3ry1CmdYbm2gpAwNL3GKLMJedoCstSNfE8Dzsvrt95AqTnuEto4bNitkiJZ5RP85bAVfmto7rQcX4QfcN89BucPJ",
  "key4": "3r7uwRWWRoTaZc2R1Tfp4ZoXjVTVE2FfksCfXSy1nu8u4djxpzMDDehjZtjj3XQcQHKSSTXkCwrJMZJJXtyGxrY6",
  "key5": "4QMehjymNbAv9aDTszF1UPgppj79JxXKjcJgazR22XPArFHnYjNmByKKrUdLc2KCWdELRo3vEmxW8ovjaWRyMtUw",
  "key6": "46DaDFPS8NkELUnEHm8c2YWxXW1dazXB9PnLTL5FnxLZKf5H5QrgVzXafAZP5ejcQQpLtGD78r9imxmsVB1xhgy1",
  "key7": "5MH6vfHQLRtgpTiTqVfV3tsysutm5Vptg4rquDLuUmX4SorBscAExw8P6T7ZfyX139UyJMMamLHQ8KGX4r7ToGg8",
  "key8": "3jB5L4BS3H31WL15fYkLgR4U69JV1b9zxFyQDquAx3Y4W8EUgDT55E7rstP2QxHiNaH99Fyt8ywaubmSNcuZtBH4",
  "key9": "2SuXUhGFBp7ohC8Ba7ny22Hr62myoNUpYG42J1JLiFXdqdNbzbWDYpjLrfVg9pjMEj9TLXKBsXEXBPCqZbhAU5XF",
  "key10": "4enkLm8Bg2d9W3CXLpr68DLKv2mXK6yU5dsyx8PeFJJjDkMPBDgTMDrRPe3eNj45LpBtHpcQi42SWccS9F7471oH",
  "key11": "3pttZsdmJuBykHLv7Y2ZzuGnxApRPe423d6cA4Aq6GfunrvZbxjsAXdYPN99vUrNXD4a1v8xna2WDG49iB7aTkgd",
  "key12": "3sjR67etE3CWWPhwL39M777DyekoxtEcJECnGjTXg5Kqmcy4aBdCrGqi299eVLWuhP1jZY2XLq2WyBJFMA5JVnqy",
  "key13": "KajqhL6P9qei2Mej6AfCfL8MufSCuycVs1jrhny9A19dbV8ahfTdkcYAe37pcFQv9AoTYp1Pd3bWhWtctLVPmws",
  "key14": "29JHZLS7iVYLAoz8q6fCtLnL7nUSttJ6ihoWHHVRpi5BXre9KcYRC4tXiV7huMVBVrJiwA5JCfA7WCP15ue2Y5RF",
  "key15": "2c6iJzjEAQzgpB3PwLqmux6Z5rRtKCsuDDaziWYEH8airWa8axH1DBxPBV4gDBFYu2sVHh5Cv91buneqLcrRNJzY",
  "key16": "4JQdqyf18e2bZ2FMcWA7ScXUakTvSahe8W7ZUkHgQhRAasy2RKp8TxbBrnxRXxqjNMSdGbmnvqokqY3uuxdhawkD",
  "key17": "3uqN4EY3iKAU9p9qp4FPQiNdWFJKnewFianCNEBS3nuPZE5cEerjv5cAThHyWQXwQS1r66nt5kJFXsNsSEFHeMz7",
  "key18": "5sFLQ9XhZLjqvLbxsA8tjAtdKWZYs6EXS6SLbreiuvWJ7y7zUs5Fhfm75TsbF29JdqX3aZuojqVUscMRHvsBKTJ1",
  "key19": "3BUio83BwqU2TwaK7gedwGJEC65bTFgG11uSj32rc7tzj4zrzR9EHC1dq73prvhvdkKuhbT5Pe8E9BmjZXRQq5FE",
  "key20": "BAfCfGUTeCQwy9x4KCqdqizYYkQ3aw2NkaP3XEBB2ehNGhGeaSVFpSGRa8z12cDxHvj28LS8JgkApCL6RcVeiwA",
  "key21": "4FeVih9heQq46aRA9R6WpQif4RsZVE66yNCrTaGdVc8kmdecRuPsQHLvM4CFEjmPvtMoWUKodWH34NCLhKsFD9Tg",
  "key22": "5Eb6uHWvv8kCVsL6sT1foKEJhg6xhYBgDzB1Kyc8e16GyupAqxrvjGGTqt3mpbhscsGVS762L9nXUYZsZBgaQbw8",
  "key23": "vqe8Szqopeg31wf6u4zSf3UUPcf6VTBUvCLLuXByvBrgfvMf8EK63p3rcg3ntojt4Q4Cn7JAgKX2hKuEMDY9wwN",
  "key24": "2xet7TBg7ySorCYZtgGd4DL2ZcePQQowqTMxvq2AQThKDs2xACsduopKaYmSPmzdPVYV9uZ76DmAVGzjeHy8Lkvh",
  "key25": "5SLiZ9bxYocdG25n339ebbTVhYyzm6AEMzKoeWoBFwYcjgd344Xvk4yi6Tuk48VSqVAVQDXyn3VnpfDcc4uNpEmi",
  "key26": "2D79jgHjWsbJnPU6DTzGuQLSbBHERuo5qiNUYjevWEEQG4wgewqpupLrq2Atbs3jAvCK9rLrs7zCNP7N4V15X3kE"
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
