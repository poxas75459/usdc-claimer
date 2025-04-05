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
    "4T5d2GCccwAR2NM9WtBoCdrGEcXKNJNFqF15ReBxoTE3aWQcPkpKqeYqnGB5F9zLDh9cpRP2cU2k1R7Ffn4cN15M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohhkQhoZWCn1Hunb5oCcm6dKeFpwz2axUpvLCHF5vY3k8Rqu6A1C5ktT91eWeq24p54u36AYhxHVWyreFHr4BJV",
  "key1": "349mXmjKX7WP6MAvrMbduQfG29KqVTaLy1netKDanVmzRX4QMXmF5DuYSGniZyd1F3THKMC3uXstWfei3kdnbcg9",
  "key2": "56ST9quqEWYqGmBPfxnbnUhu6qVNaEwc8T5rCSJAS1qqfHD51Nq6p1yuGGve4H7iC4QvtQLMJxvAjWif5uSZR5AS",
  "key3": "UV5zABqtv3ALzp3nbHVUkLwNyRTKmpfy11rVnyx1nc6aEP5RVEQ9cumwLbgs7nuMQPmhfb4vjPagshr8xKqcVJ1",
  "key4": "43cfUVWL8RBZ5HJm93fwB5b4qzCZ7SQKK4BET1yspAqc9yTcq1GVpQjNfWF8WpnE8Nznb55EHqiCm8GLdcHM2vFx",
  "key5": "4t51Nbnoks9RdvpkC6PRXZCK1cKKqDmTtkQVwbh64YWcTst9GMaAqykhM1aZpWUUmer9GUPoMTT9Bos1LYVEgFRr",
  "key6": "2CXcwnJjoPn3xcKdH5N4qsQAzFxTV1YvQX3thAZi35fSHY1JMVSDYVkNTdPZ4nqeqhzJu7WjmVkf5WEAbsPx2bud",
  "key7": "WHUsRofa5RZDP44XYCRa1cebozhKmYZ76XdL5igX6xJrQojkE5JqZgpiMuMVUJQ5r3LCPXLKcHwxmVvdEUbGdbE",
  "key8": "2WCbzuVk478KsaFFrjPHZmDuyUtsX3iSgcKnDC8qLERypu3MmbiTRy1NEq6yDg6WvpsV15z45S2zVmV7gjbm6icG",
  "key9": "3n4RV9zPh2kvBHGqxbnHY3G15hbU8cac4dfENDrMdtBWaWpyrmdZNTQXUrFNMRJz9uuWYZpjCW8voFpf4gamGCUc",
  "key10": "4ocfZbrPhuP9J39tipsU2rUhQCsqTgQkevp3U8Vzf4AgjA3aEv8fmj42Te46FUqhPmENisdA9qSfpaj5aUAA6wjQ",
  "key11": "2LZSJzhxSC5ddb1dSYpjejw5dQhr4Uc4VoiCLvXh4HK86cbXRZKF5vy5V3ZTN11h75hJLTpRi3Wp9jdv8GKr7di5",
  "key12": "4fTP3GeGDaGXK1nXUC5PTWG5FywxKF3QvFJ9Z7WE1Gdx48FTbuDa4Ffsxp1dJDGEXjLxyri8VCrE4wAWgqC9sHsq",
  "key13": "47MWzb2CZCPkzACmQ7sM3d3236CCBXbiVezvFvx9A6EFqxSeYoogSdPrgVABvSNkP4ZkJ8qedFHFcGqafSGUKhB2",
  "key14": "5Hc4d52BFYrHyecozpaZRKv4MritTST5ikUNCGaZPrAKN9CHDJD9DeCSUUFW3eBtVR1YFF5fJSRFTT1buN4xAZ3w",
  "key15": "XE3NFLJcYoQix8iv99cs9nCCaWFzkBdGGmqqB7mYjXP59YRP2rE2Jx46Vw6JpfKvoGr2FqAfhcbPeMdmjdKnz5j",
  "key16": "2Dunepb6cx1sJyipC8QxboR4ifi8q9XsDzUG1bJjXmEaNUz5H25dWDFemvfv4jLD5GRAJSNh7XCoTVkhBA5S1a1D",
  "key17": "4zCAmryHxoHXEhCQTY23G5GmPAKktA4iMEWkFSfpLR1cLbiTcW3e7THxeydjp9Tpy5FVZr8wBBoQgY4MW88fKnjk",
  "key18": "3gSj9JhXjWcz6cq539fmzxFeYaQ6eRbsQZSYPXWwmUpLG83vaZgvhEpWvdjFjyjdcZzeLxa3GFkfssHnQNSFWWaY",
  "key19": "3vz1whBbEQDNrfJvyqM5mGoYcS96px2GUx7wWnxnVryorfVSiixjpSq4fZbcqJCzgx3YRiNwsNncQLBbuwa1Vx1e",
  "key20": "26zmJQ9J4KwyXWbezW5aUd5zQ9Q62vKfxSduuXXqp6Df2X2RVW7N2sbTasjuzEnneUfz9uKrCdXwgiRpPEVCdzNs",
  "key21": "4ZtQYj1wtyG2deY2kpYJ36jsNf1gyMVxXZWQGagqNTfxKxqDAFGFZC2fdJ4MNgxNig65gkLE3XJQkaTRx9DgcF8A",
  "key22": "4B8vuZLPMomJuEYYkipSPVdPcU5XT8rjzEvMmXtdNcNQVLQyjXqHFn7KdgukVqH9qY24CvfH9zJ8qjzSNTm4uJDH",
  "key23": "57wfmGWeFgtRaqwFs6DYpyHhb13pz98iFyZ3H5SLqineQ38C4eA1t8AjVdh3drtczNEafS5pKraYqTexF8bZ1iCu",
  "key24": "pJJFKjhAhEhqkWfejvTiF6uqMigf9Uj8hC34fds7FErzpqzdcJGLDaLY5noUmaMsQmEKYPAdDcd4g1qvE4RxANp",
  "key25": "5HtP7rNmUuYF7bwAUZmmuPncxvty5r94XgrFS41YmJfmdCqS3YpKYqVQGtiWyzthZY5isBmrSL8zzTuYx9mbSVji",
  "key26": "kwHN6SWZn3BvqFDnkkkWj7UXF9kw16h1PDj7tGMjw7Sz4QNL3QCZJVxZYfRaKcUioNBs47xM3W2h8WFcJc7Dg88",
  "key27": "5nyHgShT4vyPfG7M3YsPNuJMNap88Q5BYtyAVDBRioYDVNiLdzKSCCySVcZ9BJ4e7YSHQJijMLyWrM1bUxW8Ff1Z",
  "key28": "3arsVyEsxDRvLeuk9smRqqSsoYFu1MqG7wHFT7xgus6GkL5REPXsF9NKurAJy4ornPFs8DuktqDoLThqa6Bxepuj",
  "key29": "2BjucpfKvehvDf7ZosmKfPiQzibvtziLwxQATpG2Nbq6jajZ3iuYkGyGTYYZXZwJLs9gZYpeMN8xzxCa7RPczM1Z",
  "key30": "3iVKozXFV9RpEH5nJ6GHwWHrtq6dV5cbAVKLDzijAMHSVrbsbJXfyqbyL8KbWHbpYN5WYStGXygiRMdt7e61wcsh",
  "key31": "5Sha5axYbVzfVdMAokcgavkuEvQSNxxypNWtPGdg5rqrH6S7nr4sLztfmFB8X5kqDXH4SU41dXoyFXJi2mbqa5HS",
  "key32": "2sqoG4ZktbbqJqXrcdbzUrJYzFPBiyTfjnUboVzZ9fpbfCWF8Vs8yaCQS4mvdJZ4677bGjTbiR4TLE6sxe14xdYf",
  "key33": "2wdBtqSPsMiminYb8My8xBin1FEihebHnPhLpxrKeg6joqoNMgpN1A5A2L2JwnXqMxyEyVuuLu9fR8NjxcDuGL5X",
  "key34": "B6ceJTqmsVRNvXHqhgsNDZiNBxqSu4uU27wFkYLHFZHpPsU3bKfxEeGVTb2tY9qKV48FXFzUq14sFeXbzfhUE9m",
  "key35": "3eHoSWfij8v1E7YWHhonA2R6AiEddJ7dhDUNxZksSXg2RdgPTXhktYzP6ipMzEEBh64cLfPWwHzKFtvcxDUwFHyd",
  "key36": "2WVW4YNAmv1ap5R17NFHwffSH2PUqdFLiTmgLKgTchGmEkQubeZQ8g4D22jVQRZj26j5Ps8WyuC8WtTKeg2Pr1un"
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
