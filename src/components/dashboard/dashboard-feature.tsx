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
    "37NWgvB2mW8awvx1poEaJWmr16Jx6nUMA5GWA9w7tLKE47tr6mfo5FuA8MTD1ebM3ha2BNKWngSptQQR1oCd7iyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TX2Di6gdR9yFM8n9EGQ7sw6YG74ZfCrKaVCywj79a7ATRECNTzM7xfDKvNkiSQPzAGECPLhpNVjvrm4EwxYhriw",
  "key1": "3zgmmGiLQKsS77h5jLPxGRzf4hnfrgjF4j4bxrKS4g7ThVUBH6nTs1mDrJwcvcYUnswscxwbpwaJHSSqcQTcRCTu",
  "key2": "caKZjvYC2AeCjcCqjRuD2uE8WDrk3kwmdUa4oBChiNWacNC6L85EE6Xu7zvzudH64Qt5kR4oEVs19vbkDRoWuvA",
  "key3": "4qHi9nkc6VxFAjZSvBQEAX31W71yYp9EjhuN1buXf9sctiFJrR95hyhc2bckm2ncBAdrAmN1rQzm33BePz5RBSqS",
  "key4": "29mgihaFPb8XDvvUwxbVg9uSWfouLfqGf1CEQw577turNevfbrH5AU12rVaM738Jq1x3i59CcoeKSiRzLwMZCJLE",
  "key5": "cwjbeRzrgMFTGz9n8f99FcvXf9YqgMubgtNGLXxYbVtDfMewRTCt4qT85TrQU31V93cCaP46uYEE5LdgTA6dzGi",
  "key6": "CZVzojaogWUfqecd4gCx7BKQuz3gLPWC4BaRZTJJjGiC7AQPugukNxauibDz6oTS7pKiqsUiZK8vZW88wFibgpe",
  "key7": "62inTXzG2pwE3LkbaBabnVq14VmeNpt3TohiSaeLfh1rtqm7N6uBpBwaFpSsdvV9Y1EhYWivDAaiKZpuxKKiDRRQ",
  "key8": "iLcus3aTg4py4i7DBnJ1CxnEZYZamjrpnEn4LUatNh9J7pTmSoXB3M8zG4Q91yQhMZ8nKGhdMPbWJTTpVB55Kbh",
  "key9": "5EqC8tZy3CBSsDepFCc9JwZLjXRcYWZ2MGKSeecyJgsPb1vWXe91bXVbPCGnow55rpdYNtBVaf5cX4QFtSFExsK6",
  "key10": "2aMtDD8xbfrCAz3fTrHraRf4mmLVBZUdwMeJJaVfrunP84gsDKcP1Z1bidN4uRe8Mnk3Szy4rrzLY7QikETZXJ68",
  "key11": "2wpYuzMKFwvr7WvVd1wGsRdC4dJNDcBZ46mqHmgti4ik93CYwiuekDmXvzfhwrbsdpPBKqxoKAhGyFdqdJyRHqSL",
  "key12": "5u2L1FLWC5mP7dCMWqXg55GtKHQXE27qi9qWWxLgzX47os5rW2b2YMfioKGLEeAjy1Fx3rLR6WqjNREivKdQ4kxD",
  "key13": "29cyS9GSCRrxvNBR6hfxp713XqGH5VghtRqyHQ3D9RLherkoXV43sLa1ygcttJUDjvZFWPzPSDMmmZZ6vRaR1c7B",
  "key14": "4AC6Wb7y7xqRkS59z65FHzVU3qGpexKBqvQKrsX81tB5WSpQ7u2D3qtUVu9BtqT8s3yw8Yr2SwKBWrEJSYYh4ecD",
  "key15": "2Rhw2Qukc1C9RfHhFcQRUMyfNXhJWuUjtGXsHGAvZFWkTCsHBnoLpwm8yZgRTMK2S1AnLmcp8x8tLdBsqDDAQ2C",
  "key16": "91YHGkkqSBgjKVMsg59mcJqJqtzxfN3YKec9Cquuw8yX5AgKKrk1RvmbMyZmp48FkauPUWmJipttvqVzoRydVLs",
  "key17": "4N31cQf4EZLs6PotrQDT2ck1Q8jxrG1T8f1h7vbJtHsDoWQbh6FhEYRaRPsKaxdoG6eS2g7NJbBaC7eMHAujDDiy",
  "key18": "5zwQLyRt2NtUTz1szLauMgZdG4peL1EDyULABNfKU5ohxfbJRQPJejV1tGEBUta6emhzmNjfv6T7yCr1ybMmNwQn",
  "key19": "3qVaWPtMEfV7XeoGu4qwnKD13xPDW9JFaRdEAnjrYvxBQpNK5NJBGiFEY51qW8UbHNe49oxvY6ZQZaoAng85G69H",
  "key20": "5C6smZx4oWrfgyukG9KpB342r82AJeCAuNzSUCJpZKbWZgg8UHm1bryGtrggXfwC63oKLY9rCchhhCooceNuZMmP",
  "key21": "5Ag3UnVNoWiqidaWLsdmEJa3d8xV7Eib9dWN3HkgWoWRfdyiweocBHCDfNPd2qMyBA5T6EvV3Z1Nj1UauNP1bvQx",
  "key22": "55Dkun41jgem8pYCzSST9s7rpKFQpGy2AWV1m7C8iejFxA78yPAecdgQGd48PEWEWmg48nexY6ouieNtjQRDMCK6",
  "key23": "3JdnK1AUDUEZc9Yt2QtHfiyQBiedsMvNesgnmsdYgwt7DHmiCC2wMnr3SorkEics7N7ePcTmk1tzDrk4N7UY8nnV",
  "key24": "5kj8FHfZGNqWVeispjthzuSzEQcCJ7B35W9red11GuGnv2wmBPYtYk7GBFh5McVf4w5NPAjw2R98Z9aFTvFKxXbY",
  "key25": "3UGUkVrCcJHWKP5jczCZvwZxdsukzkXoRvJZodYzzHjYXTwNGedkbvi5gsUrcKTGFLKu9k5b2KwziyKUmscp4V34",
  "key26": "5fyHZCC9LEGenn3GZP81fJXVfuw64BCwos5btKcH16n1wU2EisyCnwdvCM95kkhDEirYsxoJaXbFuFkpXWDiVcPq",
  "key27": "3e2nizHfkpNR7XH5FqS2qDDv1iHfype5GhrAPkhQHxGQPm6DmxGk87Go7oe2Qh25tnUAQcnhX3MqUDZdfQ6WMBJp",
  "key28": "5WcPumKXRKo5JJaHeJkwrCrrHCGPta7eP4uxBJKn1VMvsnNAAtWtfD28t29mannts4UaG8P5kDDqizefPzqV5rqV",
  "key29": "484b8GRpNnaQi3EEstASynp9KXngNcmaQ61fvjB7DcgwVXN5ZhoQNKHxQn2C7o3AUkZ3YHCMFEGNTKbS4Vcra176",
  "key30": "Zek5qh6n9wLT37WshGoLRsWHBHo6AQ8prxaj7eeouSmTVkANX7mAdZYCrVNwzmxt9u4jcFQVochhX8nCJLcUEVd",
  "key31": "bJ46xZNYhXBevoc2A2Uk2scU8QmuGPVQXofceFavKgKmCsMhtenPR5REkriKRWBaBTtjQXeV67puxufVAA3Fuzt",
  "key32": "5hP4m8uXr3NUT7vp7xbHSV4uVmsUkkhTYWFiAnqaqB9G4TMXDuvnEMafcCdHou6um5r9joTRvo34ZHL6owaCUTGd",
  "key33": "4odD8eS68P5wtS9fWYigow6m4Y1vNrMybBSwjjYwxejVJbVMzJMe6gh7nxKPSTVjTQEJc3VdXzq3JLQFCcn9CL6u",
  "key34": "51E4KDhtrSQjqiWXrNEA85bD1k3bnjUh9BVSZCH9trbx4DvXwWopmiwvU5xP7cYBcQc43odmkxcFAVDkLVa4nHdn",
  "key35": "2ohfEEJfp9vbERNVbbwsDKL4J6brh5yP6QPte9kLj9B72i5xmYNfmk8k974AWUfrAUAoiDXh86CVvYYTZYJZPazc",
  "key36": "56rXvR7i8pUdD7SCZKY2tj6VrEhECT4jyU2zE5uKD1ez8XzifuJEfJDYRd4CxEiir8mNZb3SBoijvomWXCUyoZ2Q",
  "key37": "Arf2AUZopL1L3V5udTCPg7zagsJomWyfc6CPy8TpLxgvM2Qg2C2hFGtSEYs1ttjFxw3nePp3K4AAw8TQfySz4Rc",
  "key38": "5TRosjJYzoEJ8hMDSGF2jbe6eUhHdYR754YnSNfzWo3br2G41HiaskZdDvFtGfF7g7iAdEczJ4aybaw98z9WgkfS",
  "key39": "2UUcjo2X6TDMmnpjMdvMdwpNQmuQi4VKvb5fYhJd4nXJYnCuZUEPAWXXdkPxKWR753d8jNvTPcdAxAkxxs4N2aws"
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
