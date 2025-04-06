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
    "3VNFKBHFHbb4CbyzR7jxJ1mQrLWYKtrD3BH4Ac61eg8nBaxdkrr1BDUtx1ceEtmUBF4nmFbh8ng6HXB2bwfKh5RL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rBfBee1eN6XSFXi4hmhYtdT7Khk6HWyDwf9xaCKWMTYJHXVRi8ttsAPg5UZToPjAj8zv91ZDo29tu9th8iuLNLp",
  "key1": "5QmdVsdyNHEcG1uhpo41Znxhtn15F1CyUzDWBhjNK2fxS3RKUNP3Xn7S743z8wUT45pGXNVAzwuUc9nXYiEeDGSr",
  "key2": "3SoXV5K3ebD1xxGUDUyQ4YMqKvAKZJTKVopeQm8VpAfqEAexVw4f2oZHh4dUgatPYzdv4raQLLJi2i2qtCdEoMDf",
  "key3": "23sKFNFrNbyrzNo4GE8LV3uH47ttomYxyLChXtd3S95sWaFC1H61h2LGQZ71JkTi2dv1vwG3cmFFwSsxNLpEsT1r",
  "key4": "2kstpv8fuvw4MRgQgfbfKUr8mhhXh4ph4zbdrsrD3gsfvw33cxhKQxb9LhMgCEpy9iUjc6rv8srXSqDtywRwMzCu",
  "key5": "3bjxikLa2pmCi9dsTgG6tExXeRsaxy48zcWtBzFeiBhqRHfy7N3FXQZniKpkCg1AEsvCuBfr7eATM76z6vpP7Va9",
  "key6": "46chE2bjH3dpAizHWNyPVdLKRRjLbVeCKpBf8QcoAmQ5H1sL8ziF6tRtKtJnn6NBZKEnVrAcTq8US91EBp8mQ3Q2",
  "key7": "5V75t6pdB6BF35Ly1pz12J2p5WGeQM5CZesD78HizWGfmecp88aYhgy2G1Ke6nc91ipG5n5toAgdTLQYWCYewptj",
  "key8": "3NsPDSu6V9iQbgrpXNBEbK58BZjy2gy8pYX4q7V3tjQxe8VitTG22TDjaMWcLdWFJHi74pKGTbdz7aYAg1HAwhX4",
  "key9": "5UgZXc4tZGRJXxhsKuUFWwSnJP8te8pUwsq8i3RVVDw825pUgacy7NutLiVWTZCeFfCBDsteWoLvdBN6wWNeqhpj",
  "key10": "5BpqM9a4gF9KugMMb5FGbvR6Xrkz8XTrwArSmmMPJZ4fuLoTdfhZtd7WxUwm4uFjBuXJApoPoZMvaFCuYAMbqU6E",
  "key11": "5LrjAB9hiWjXxmRWdp9MXiPw45i4anNtRmQ7nG5giDfmbw9DYnyBEUeBMZP8tCsueXsatmoU3NZ3DrjRZezjtkB4",
  "key12": "2f94XRLvfZhZ64NbCL9qMZmjtemVFtg5DjybXTUCm4zrWeHehuUTEm1dBzup9x9FTaSxtFKqtrTrToq8ky7zKCor",
  "key13": "3wDEs57G5nmFDNKNV5hnhPKMzx48Py4pFqVCYNekRe1rXgUnpeep6SkgtBMhUxwSeKiTE5P3YMMNiAsQ61CaHAgE",
  "key14": "5KvPNauatRVyzhecSi8HrBsybfPFUADJZP1etXSfK3rYCkJrguPT3p2p6Cvhhkj6peXoG8BjSfFxna2fqCUTUBdv",
  "key15": "NyH4Egkxy4aHgob4tfYfh3cQU6ySH5jRJDCgEFGRcUTkkM9ZGoFk4Kwff9BDw2yZGy9Ge1FPzGRsQcddcRWhrAQ",
  "key16": "32TLrQh8DnosSasAP64j4dbqiQQd4E8tELgbYwe6h69BYcNtEYy1QxxwhwcN1XxN7t7p9FLidv5dTFdvGj9WNR7g",
  "key17": "5DkVUiQJD3YsNtn2qazpiDhbYZNmgdj9E97zXTDALaEcBdUH98rh83ReKzVpHWjEuqL5Vz6wkvcU7EtyW9hYCyMX",
  "key18": "D6kyyFdmAec112aNnxG1NZkR1JC4GGeYC5wRdyWBWEnrtLWZXN7kp4PeVTMdupVX8ukA81ihCN6VtncFyEBNZBT",
  "key19": "H22bVMkRnL1iGDBABe97ij69uCWGn1YY293hLGix7sKoDSjXtAmmZ2vXUo13ZhFq5aHj87jNu3jMcfm8kZfpE9w",
  "key20": "5Ufo5AEigX6FXA3ktJ1An3QiwH87xbhqCGqdCgqB1c19y5NtmcCJnAbrfaasS3njJJ4thnEQLcTGdyouYfuT7Eev",
  "key21": "2kQycynit7qGeBv2Mg5T8zjPNyw4J8EBUoRtbPgbQXK3Gv4a11uAqkWiWPoFmT3QqGf5QScT8nTnLRcaedANsZer",
  "key22": "5uMpK4DzvaacNcK4Ma8X47n1Y5PuE5cM2GBb8bouoJpwgCWp3GqTg3Ck8roYWPxAiqHQd5iL6mwRfN2x931Ly3cr",
  "key23": "2MdPSXYsUT17S1dcsMXEBJDqamxaS1PKLKKhaHFTnSXhGCUhhKJmZAoznJfax2e8aL93Hg2HDVRUsHKFnoqxbVUG",
  "key24": "2zDwAQDtLsKTzAABv3eDkh3psKv8uvvpBx1TQMnP7tWuB3ZBTavJJ1QKeFzgJhKjhK9sj1dTGGiiiH4igT1Kywhw",
  "key25": "HxdiyvynGGScqT9XAqQZXA1mjfFgFydDeDzwwYBvP1sYeuGHKWKrbs83h1W8XzK1iz1Z9Kco1s2Zu3cSaDLJvQp"
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
