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
    "5i5gWV7zkt3xhJ5DsMwaTQWNfYiMkoNB67caD8n4M2i3i9JcRS5jA2dVNgTwK4MagbXdz7cAvZGNrGYTbSbXGb4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4hk2xXroH9e85JnKqd3GRvv8L1waisdX3skWbbmo1bcAEPGeS1Tmfhe6xs66kc8mdorzwfU2hESFvNnu3GbzfG",
  "key1": "5NWN3ozRMGW47Wq93GEbg6do1hZQ9FXZvwywKDmhLGmVhULfZ5VQX62HH91bmfsRuEEsSPJmx4Kni3T4CEK7cV3o",
  "key2": "3WgPhazWz8L5FyiPduxHeT1SrqM3kHFqhSWyXBcVo5U6hhr5L5pU7nGkdHRazqbcz7Pz6ByCtnFY5D5w3VDNit3a",
  "key3": "5tjx8mTCnXrZZ13DoyUckLmTC5DMFVVVEngobBVB2KAtRWhgigWtQekFfYuQc5Wt7v9i5VTUwzMCQaiRjKtz8eeK",
  "key4": "4dVoZvZDV5KAKH8DWd36eB7pyykvTip5HThYweXNk6utLeQ7s6DXNoGAWHVRVFNADWix9znvR2qRd5gMviJeadzF",
  "key5": "3u4h2PKK5xtinYs5XRmWBzpXGtqvwc8SwTBfB3Tr3Utj2ShGwQd3WDW7c8aHE7pb6HijyUNpN7wK2gjDeHbbTirg",
  "key6": "5BLoGPHza9BX26awbrUNRVvr6EmK3v9Kkfoh23RfYNoQf11JZ6mXiYNJ5dK9C7pXsqNyTQQh94KHNmBnWUxYVRvD",
  "key7": "2WxhC6qUzkVBVU6fDm8yWtAndqFVDkTbWCTw9GjieM9i8ymTUEAptfZuRLPB52ESH8Fd3LXxsB5MSJbXfWkfYtjo",
  "key8": "2tbrN5vSewT43GJxuaR55czCSayqqpaBeX7BworQ2Fq9PKVPa8wKnzcQ84MpeGC1bfGUzpQydyMZXCS6cnhByn45",
  "key9": "36CwgHMs3DT8XrLThkRkwfb4UT7UDPqPC7LJuEpcqwWd3AzHYxkELryZy6sPnCUzwgYXpkymsEmgia3B4oLJCYo5",
  "key10": "5HJXgAxtEeqCjmoVAWJpRY4vuqxeaTPURAKfV57bZyhHpm3BKasG6maVYYvBTeYFW4FQoKLS8qrQTkMCzaSw7TbN",
  "key11": "4JPykwp2ciPSy6hyvzQSLktyNkr6rEAdZjQKpd7cbGDBDA54MnTQxfpASnJjwfCFZb8RyH1uq4rJMNKBSNy7AvAj",
  "key12": "67XADWSYt6aWA8nmpLHLW63Duui3fPHoeKniAHchfrCABVxNqEVQEaLjqxfwqJe4p1E4v7rAUkLfojjDvKgE5SYJ",
  "key13": "2zznuU8jKtALbxzH8tCGkajggMXUAdFvJ662mNTUKPk2b7xhYHAWwnMLkaAL4euf8kNAhM7QcHNzKPmhYDmbfSVa",
  "key14": "cUfm8ws2vqCHu8LT7rXK1Y6WiFUpSQGiGjXLGkkmHcosGmUhN77HWwb5XajQvDtVgU6StTja9EicmXsjzqpNz4R",
  "key15": "5Pd6ZieoR9GKFH3Gbup6aRguC1uyDvjFqzSMHZsT5rK4gxmjHGxFiDSMaKy9b9xTnCNyTYhdgQMCaxLqnswvcSok",
  "key16": "3oLdtJPHpybhgUMihmPhLc3NzsVMiUGQc91tn3Yc1JhNy4reeSSPuDGjGyoAPGmPiqfiSUreBAw2Aidi9vfoAKdM",
  "key17": "uqcLTaqVp6ubCa4L9RELHTRVG2HR6XLeDjJEL1faV31572bpcQkqHKdRNfSGPGwr8ei2FYF6Ne4hRFpDhR7eXNb",
  "key18": "24qTXBHadV6FGoY7n5V8jpViLxeBnbYqr4nzoKJJDwwG9k5PtVky1gMtQogk4bYAibmP8TYu59ZnSjCCajAYsjhf",
  "key19": "5yGGFRGngu3uStkLDpCHytPfSJGxAGyqfgRQgRFLCLJCCKpfGnN4xkFkWzstS8jFKM3Rh5SSbaeGqapWmgrdwmQv",
  "key20": "pk4gVPhZboGki7SZ4ikw6t59dhBpavHDim2n4ShW6yxYrwkCEuuhTZJwNE5ZX8rM47YpFgeGPWmmxQbp1dcjAjk",
  "key21": "5p4ifXmZtKuASj6ZkK1CZJovmrGiVaVGxeTndky9BJkobben73Lp625sJonX8x7WjU4vNsQNBzJRWhn9cEvFQAH2",
  "key22": "48xYCmstJ6dav1uZxSpijWANB4j61ycnCpr2n6gYtj4qHD2w7iyZ399kU1yW129sb7HhFBSHn375zBk3SmxxDFe6",
  "key23": "29iLFJKzzdiaHogC7qg1K3VJ72oEFekWGTPGTjurrZcAM5CYbVFc1JADStSrfJ5pjLQL8FrSD4k8YjtuSPyZrAM1",
  "key24": "5MSEn7q5rfYTwZ1n4SdrrttQ4wqyg3C5AgnL9beb4qvbM8XYo29peQWVW1qyDW7Tck5MNE9Mh9C4wXQAsCxLgr7",
  "key25": "cKSGC9Jxp7RfFuEuLmww6YcoMvcSwKWGaG1jJ8GMdPT1jWcisC6LQq2JWMGU8966hmnyBw1zjoKrTQxgKxN9F97",
  "key26": "4P7J5w7TQ24KczM6uyJSKEKhanUrvPJZZ39VpULtAEnjVWFamHc6AqJdv5B1iVzyUeqMzNHoNsT6cKjeXqsS8a7o",
  "key27": "4WDxjwonudYaQG5Qa8UjMuNwsjbHuzDuwJ6dGtTWukwZuHdu7JeKJu1drekv7gVfsLrsRKC7CBv3MeJwXJAonASQ",
  "key28": "39mxv7vYEN3NgQv7kvejY86qeBRrK5e2iAKhX6JWrjo4BNpsKWkqNoTdrDVzd5munS7TSHcG6XGCrxeYS6ggSDvr",
  "key29": "2EWWXucAAph9vB8r4SeFBXyNDtdrqwuANEhcYVZGSQKJrgBMTwaxJLBPpcqHw2bTyTXPWUow7Kpzb3jkgrVk5DXc",
  "key30": "2pu8sSRW44HWstgzYio4CkNBFTxqLZ6aLhsrgBX1Dx1zP4oo1ma4vQCtMeVzTyaPvgqNv9vUZ477nXLCeHhTvTQ7"
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
