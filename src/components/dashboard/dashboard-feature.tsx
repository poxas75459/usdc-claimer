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
    "4kXm5ckoYkG9SJtGwjrkzSRmR4kyJYHyNasBcm8vzgWEgX8Rr3rpVVPmBM47Qi4ijLpMJYkjcNgkc64D8Z5tWVcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVK1zJSywjRz7g1tvz8BM2v1ipHzKg6Na4u8reQQq4EwgXQjSAFpTnb3NZua9VPPVxvU3yirPqzpjkLvwJuzDtq",
  "key1": "27B64x8x5XmroYyDPwnwt3bZjeehLggiBGxtCfsaR25hYg7AkqCMgS9Pm4y3LvSpcNVSDMRCFoFutp3Zdsbqu9jD",
  "key2": "3MTfiyC3dpc9MSLxGujAKRAb7czakf33qRvwvyEM9Xq74LjHNkgRVdakcF6UVv7k8mMToW4j6ApczAm4uUNY1Dzt",
  "key3": "4ZzfSTZuJ2aofELFqts3hChZiqoCoaP2F156uirRTQG3MCfrGHPqLXoe8ErDtTrJkBfoHz78R8vi7Y5FZ5zjR4BU",
  "key4": "5ZCoWca3jfpzsZejq1ivWTmb4s3cLJZPgy9YBX432tP4MzSDyFaTSbjA8BDtTxMrja8vNH8RMHL3kUfDL2VLVjxu",
  "key5": "4K82Ygmn7iiBTsYfLmCDNAj4G6FjWCkTTyae2WPfsYtCM5U6QeUPXBNyDsoBHcXrJmcDXUwdooFKhZVBG5hCJudg",
  "key6": "4PLJ7BAsU47orgpaBBrj1kmSivuHuArEogU2n4rLNfKrWzE6WK4Fd7vMMqzRK54HLieEZPEv2E9r5vMsoZ7LGo9P",
  "key7": "51ViBGL2KG3bj2AC7qZnk3xzCbXozzp2jZsmw5Eg7UWB1DCya3o7aesbnJir1ChfyazVnEn2mSnPQj2cEZ3ydAjD",
  "key8": "nWjMShJemXu6MFNzKYuMXSDNk5JxjA9skaDXoVYC72U8LVqqVTQf4nFspfYsV3vfi7T3PLbiGv4aaHq1iSL5usp",
  "key9": "4MucTqSrFwLqgNf5sqv8JpA95z2czTmCGzVQDtsJ8XuPzrwF9Yh8vwZ9jJcrdZgqNxwsAfBo7wRoV66rTx195q8R",
  "key10": "22shm9ps2abZdVArm15td5QYqjxTAZeyb54V9hN56nYj9mZZbMhWKYmHrHD1VZ3c3N2ZAY7KXXopFfbyy1jtpsEZ",
  "key11": "4UcMhAHczLuvADv3Yif1CSSAp74LfgiRsm3dfBDrcwmpaEmW2odZpPweu89Fb1phqLrx8FYwhpmwFg81SDHMCDvn",
  "key12": "4bdg3cf6G4VHSHjgjqUfbpPWXpcV3nEVuMyyU1uSDoQ8HRNyduK9A1uraBvqaMmTq9kmG7xRsbC9rjdJCuREyzAR",
  "key13": "5qrrb4MDQqESG2U3YPX5ZdqNXVjcXi3h6A1mQRcaTauYaafBaycjU4zenpKmE3Hw4RNMhAgRQeinrCvuTGV69rjw",
  "key14": "nYqaFZDkxdGT6b9RiACTQxM5KXvygA5Yo8M9L7W9CHmUuXRcbzG4AWEqv5EeqK2heu1R9wEg5qHyrkRDHTD3R4n",
  "key15": "2do2Ga3oKoWgKkDmDB3Gfjv9i7oU8s5ktNqRpCahYjToYHSaZNv3pzDyFCsr7xrfV3FFSe1sbHV6L8paGsMjtjvE",
  "key16": "Kk43p6zcndUnzWHmeq2YrFtUiYUrb3nXXEpSgMKehV1QwgV58rCrfqqZz3mo5zBndLoaAQcJoXmQ8qN99RHgWpE",
  "key17": "63fPSFm9H3p6EH5ekXFKgCTs7t7QySeEt1JRkhKgAQNEVpmyjm4uT3aXqhSs2BzkdVmP7VmsGs8DsKT7XEKdkFW4",
  "key18": "494RcSEtcxBVDzWSuKjoVjyVHP9fdnQJpk4x7MsQPvqjmH5MiCJbEeDhHjkAsrgm41vawC3b7utRJe7kimikCYfg",
  "key19": "4cGmzxkpHrC89oqw9T8vws9Qtsjau9wbjfLfNGguiQcA2fpUWc4pMBf14gGnfnTrzbqdSz1LiSY9shcnqdSC2dD8",
  "key20": "3rwpgDUhRtGb7g4HZim3Uc1B5akPZY6w9KkoKnwYJJGXpdiXxJTj62gTvZFHzS8GruKw9jxorLC7YE3CCcqbgus3",
  "key21": "2c84bxCXvbqNTwktNK7N7nps6XftybixVRgN6pYRbztYbxgVkYkn4Bbyj2Z79qqBEYj1xcCqk8EAXMSSTtRPBeT2",
  "key22": "34go8UXwHoyUrJpvn78evPJu5DxEGJrx5G5eEiP25hTG1LbwiohoPEx4W1SdqfNCvJEPM8UeFztE9tyFgi2tkM2u",
  "key23": "4x319vazUjhSXYTQVkzHy9Znv96NYbqxRnJinkQx3n3ohy4Pzmwfk9u5cs2MunDhfNRJ7nddEfTjj1WKHdFnrcCM",
  "key24": "2xryxdqT29br2zgfXF929R3krPeFZAP2SL3rsQATrK23hSQgnZJajLXLLcWEpyMepYPe67axxdBNo2byXGDMihwa",
  "key25": "4AUBgReJQXpES6T6iB9JeZr88WFZnvGy8fCR52tZ17eRb662aSpDuraBMeyAxF2ZzzppERkbRptHp9eBj8JEYZNu",
  "key26": "2imU8GG4FG7uNesSoHiaQvzBQMYtTNrafWUzr5hzWTpy7xT9wZzDM17THpiCeEzt1BqxDBPBioo4STskCiFkj99L",
  "key27": "3rAjFF2S75VcZwVoT965B4VcTDckbonRLk1pCJGKmfJXEEun4D8Mitni75jcFS8eRX7wMCRDH5UMReUY1SHQkZAF",
  "key28": "FZLN3hkw4aeJxkuNGd1xgwSEutbYrdWhrGEVmhuAXtDeDkxfC1Yr1a9Fqd1bGJezsE1dpgMYuSDBJwQ7ozh5kUU",
  "key29": "4jai7MRMiP3wLXWnynqQbjJ69vnAHMzmyYkoZFoHe1t7roz393AkA9iU23AEGKp1yvFSGdJ47TEtDoKZop5gfSXG",
  "key30": "TSaZxq8krCjBD68ipHEMU3WyskCmsfrB3iZRXJxpuyDKnrPtM1yZzrAky3StsMe5VCPCSEShwFfdBNALCcFGkxz",
  "key31": "3DxqdW9PBt7Kupb6aWqgY1wE3Sf7TBsTdxR4ZZ2NQWymeapL81BxMSqFrL7oKNvJd9KutDw14tCt44xusjxzZUfS",
  "key32": "2HbV1RuAvZg9DJH8J63VUugYDYRYscYLAorGwsLMM3cN71iYUJ35ofEGCXiRnp5qQm8Xv4UXYtoZ8mhSHdUsyVPs",
  "key33": "2983uwRhnBtyQsMFumN5NKM7o3hrGzX6cv5sPkrYaipA9uw8utQajJfabqpsUhEXi2EdrVBjWyJSU19w2bD3vrcF",
  "key34": "2DuDkLHganHcJEgKo9cdq8uD8j917x48Rqvaiu3yjH3vVyNiNPm6eumFapSxsBw6h5xNtois2ou3yPD6dC2F6Qkt",
  "key35": "4HVQWEXKR9Cw4HoLzh1WnNd4RiHoFe4TBJeTnbSPXyB5jrLgvSph66P9DdavRHYo5EEyo13Zt29ebYf2DkQmmds6",
  "key36": "2xk9W6b42UMG8f9ZkaGjrfpLJqnT4eYVi5G16GpQqQsscv6i4kc7FsFenmMa13yxj7wyvME6UJ1ecXFXr2MfrL4G"
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
