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
    "53He7imWX2H5qhMkSBFuFVysLcsRFsmFVDan6qxL1XE3Mhtxk17FsWBMpfnwS8TApJbftniNfw6Nh6A2YcJ8AjPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYvBnor3LH3CPf8bY4ji3YWRZGitXPqgkuBe1njPeNL7vrGZm9mEtNkNo4GwmiJSRHiPUJauR9oLXKo7fEGHiNb",
  "key1": "2FHznmFjyAedYhH9tE1tBuZTiUANphAgRpwnFuJ6K4Y7DrnmqPf5coT6m9Kh7QrEH13GrVCQcWosTfc7sttZMGFF",
  "key2": "3WXUUHgxtZGdmcecnHrHTpZrEeVAEtVuAroxaTnggNLgsYdSgy5w9nXC1pLAnvwJfFC7xQCrBa2Z9o5dmm8c1N7L",
  "key3": "2amMmM4anUEbGYg4bpiEZVu9WoxvcCkQNwbo2UBXBQCyR2SgBF5dwKyRtQYSJQAADXzrjK1T5dnMFJTebfgVrDtb",
  "key4": "3DjUC9e24bur15Dd89uc54qLHFpRuTMFUG8Buj454isZJ3bGYdLif6ZnT6By6yJH3GtTeFKNSb29fCVxwS3zAJ6u",
  "key5": "bRrtKmdUDUKW8S3SoGfxXNxhPGNBmroAooDbnz36WNPxZPaQekmFACevE5kMtzLC4tdoXDRfvngeET7RLJQENc9",
  "key6": "5aZcJJa5UyDzrrCECmK4Ta19ZGZoCgFgjxzdnYXSqKRYpDftkmt64RwykuBpajkXfa9N1KbcLy6QTM1q6y8hkSHj",
  "key7": "2kFsfFnrBKJJgVwQy6iRhduxZWT5BULxNBLNLgfiWpjXUraz5WuxuzJ5LAKdbLXDwgkKkUsuf3eqCu3hY1RCkPQF",
  "key8": "2YdJBmpabHuWBBbMvzZNqRNFWehgTk68qiCjbAB9vM4WRHa4tjX3aoZwWiJavq9mKWzb61sbs9sxGMTuzq6aV52e",
  "key9": "wyJxC9YxHWt1cpT4x8pk43eJyHrEH3w1tGJ4EpYdhngq2G2uymVL3ier56Pb34bBE3YaU6oWEd3sdEscmehmFUM",
  "key10": "5NhSfCCquDDQDJQqAdzrE34KTxxpRzYhyy2rr4en2FukF1jfZDaqNfh9WG2egczDLtXwGhyREFuUDoUTJv9Jcc5H",
  "key11": "5eoBtmVvbrcJ4Pvf3kU7VELbshH3emAabwuXdp3g1neRR4ec2UUHb4fzZwArweK48nG8d9mtHLHAAffU132CcaYb",
  "key12": "5qFf8GgYi4cSs9Yr74e7Uch2bUWToETNzyTeZu8oU3afv4nfVBAiSMm4mgBaeK8T9PJyNNB9Gq72Ge7ogY43DN5i",
  "key13": "5Za87pNs2E3bQCXPNHzBbLDPwQoNZgzKFyyQfDHCFHdN85HnLfC7Ag1qzbfbFqiMC44DFuHbaHu1iWQxEX4yxwbS",
  "key14": "5xcxHQw5q5pP29zDXYfHtkBacrpAcCdtFabmeNoU2p7uTQj6pM46Dr9Lh7pMnRabfi6uGcPDWjZs6nG5sZ3g1Yid",
  "key15": "2oRqbCZVmmwJvt9851SbwktPN3rSsVBDp3pLTFMAD3spqt1FXd8apZJoJmrRZCzaarQgkEf3WsjisFiFJU3Q4PVy",
  "key16": "4vq8ewHHVZfWW4XVxB2vekXembfEaqxq8ougPujJkaREgE7ifWghPMTAe7QhPArDhDMYJBExaZoL3T8bP7BDtGz2",
  "key17": "wHHpkFLW1iiKUerCmdrwi9GT4rPdv5rqNn7tc6ZXRZ1LQhwya3PW2orCt11kyKTXhg2codLSCPu3C1JnfZCcnbu",
  "key18": "qGzYU4WFziSPXTgRH89Mjfo9wCCvV6efMwgLPStMVhSjfQt1LtcAPiNMbGKDKoxKcHkvbY3zApc3EN6BzzxehUA",
  "key19": "3f7MQ1c7bS2e29XY88hpJw1rD4rHwKQedM9XrjsrufcZeShwPJVRRsBjnTWDcqvSReFg8oXmtcdDv5BwAzsr7pFs",
  "key20": "2jWKkwFTfc7W6RLvYszWdLnsc4bpVEAqpcFJr96F34xqy6G5rEuuuzXJXTCTGxsGJECqLvk2GGYxjb8Ey9fk8diy",
  "key21": "2QZmQFVQLptTuZc1HhdoKgwp4Sf3QHwHDPLVFzpGxykFRFUsCmtXwu5ABtrg2hYEFjB5Lz9gffK6PS86dHdVFK62",
  "key22": "5ycpuKdEfTjtKEMXds46RW9BzWQzhEWzFZFBFF8qeCG1vy5HSjHmaB3sSWRRW4fM8Y6PPoKoZEpEPMupVjJ4Cgmx",
  "key23": "Qx4jJhpUJp48ydC25BQ2AaQ6SEdrijQNDuboiQzBNsvUzRPQoJa8Y5of1DvYnETJFzQUtUBwraWBB385mU7q8oK",
  "key24": "9KutViq7kdkX5eG67tCWpHzV6skepcuVXnm7qVRrGk2dnwZ47gWrCbFs2EodJcSQoEG1NCdaAUfxRtLfye8SdLw",
  "key25": "3UUmYh9YUTXaQdpH6t51JiRQKB5oUcKsU3oMrp26XjNJAnUpu5m6M6ENYkKuaD9BiC4b1ERkiG7N75gdPnF1TZLe",
  "key26": "5kvxa5qRzzBD4jLJieNz9YCTD9yn7BoWHB7AAy2MUpJk4XTbs8TtYgfz2oygUew3CUegAnsbmrhDK1hRCYHAwzJN",
  "key27": "2qFywTNm67dWsHAGVerAhJMiHjJfEjrEzrEUi63Zx84R67e4HxhgPkYauk7DGz7hwxmrPR2sPgDTjmBj5zH1ZY9t",
  "key28": "KfGg4PxDKPqWzDVGUGNEEw37vKpVpjLQkEDjcbjsaXuCYZs1tw4rZaBV3UeuSzoNxkmCLzP1MPA6cey8YfZEu7Z",
  "key29": "EaX7zvC1tbRJiay5zMTTJ1NgJhsSRX3nSsZrCM3R4Q8pe7E5wMETiKxB19fDMcVW9VjGdWmdDHS2FSFwU95YijG",
  "key30": "63U9GvcM7CxnCRNh9KmLt8quSXwUhukbNkwB9sTcaozG29hSyf2vZfqtBD6BuQd8bXKBDRzPpRAJabStMx6qSG7U",
  "key31": "4nLyjxtySibbP62f3DkLcXnodr8BZR6rXCurDJNPPGBxRvGRAdiWQcEnz5rg292CSJNpVZBviWKR25UZRMBAWPFr",
  "key32": "4VCsTxmyL1msL5aYRngBjji4Qc33b3koNXN7Spz6KRPVNqRJ7SNvcTEUbfTr8WUKTD8SSTA2sK83ufyb2qFXoyvj",
  "key33": "4vLFPaotbKy6xAYMKuc8kVEDrWsnwe9SHVfmAPm36qhk6gmgnSqTGrFP57Hud1suQMvG5G7Ws6uR47XUCgjT5pHj",
  "key34": "zqnNoLHBUDfwH6j2As86Xt3hXT7KgFdyqgeDwBwEGVV5PG4owZ4XncUBrCMFQK9qxvh3K14rivQGG2WXaAVdPW3",
  "key35": "37Lu8TA8AcEyr88XDuq8aSuiuF1dNE8eCz6vdYwBWUmxiBw4sd8tLzKJiHM2saSFxchHa4d6bz6afzPdQWNr1XFK",
  "key36": "2emHLsZsq9NNkjStcossoDth6XUtWdgwwDW2ot2YeBFkmwwP76n2FNgNZLVyE3xcqUVtnpqxZ5rjqVQqvTVcGkDU",
  "key37": "5ZeFm49CEfEB9XekRvx6bJtWeYWUPJnNkK7ySJy3Bb8YihZ18Y4nFsZXjJX2ebnTrEyhcjR2HQfpzNG8ND65pYe",
  "key38": "kBk9vtV9moHi6yDVFaJPBnVXvUpf51As8xewVqktrk1PdwqW2EWfCbv6uv4LVaph3cvKp3fB9VvQjzU9Z3bXNgy"
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
