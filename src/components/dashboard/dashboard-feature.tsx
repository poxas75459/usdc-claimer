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
    "4Q7u1BLwd7HLonxb4zQLzkaL3EwgSXxxFeKREBofap2j2PnvuJi39mMPJZLb9n2i9fPRQX2xdnmGBLGFCGP7xFPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABmWpgPuNW6v579wrMoD4LE8gn7SKsiiiwrCMFDpprK6tBmrkAiQuZCPeYqtaivdQLKRfbgwUEs4mZh8crhKtE8",
  "key1": "BV1YvAEwJf6nxRyAN8BzESK5X2C7uqnbiwPU34zL7NJNEDmBuLVcpY3cDCBEagTfeZwxpi3K4aTUiACWGjatnFy",
  "key2": "PvSzeq3ezYbYxV372ymPZ7sHtynCRFt4y6ig6QKh36VBcDZUVQk2so5A6xby3nwnwMyZKJjtsbwwFwVU5JctQTJ",
  "key3": "3bBivYQ873V9LcZdpf5UbeADtRd14FQ1WyPh4uvPtZwHMjyxcYrPkY1wWyrSoXDH8D4MaCJTsdpQJ1v4z6SKceys",
  "key4": "3W3uGTuqMy2LtFsgpo4GwcdnLBk1LECu8A8vfeAS34arAv9Dza1MW92GHNUNGS49eYyvBPLGrBaFHLEZqHqLEysP",
  "key5": "5rzfcHAuxxxjKUbxK9JbzPMn3MxrsyfUPizLoSbvNN96JfdwDcdmM1waouExTH9HehaJbDoX7YA5uesfTkDiUB5",
  "key6": "3AAbLWkUDkLp4hK8b6AtCGAJcLhJeL9sLhtDXUDokZxnjME5X7twTJ7ZTYaKNdVftAQ1KXb4WBBBQwPo6B1cAQnQ",
  "key7": "BjAsxzrBoS7VRboGYTNEnso67mAWUiYXJKYQo4TwDUEBvM1UGpTaAYj9HxoRuicQm488M16wK8BVs5LRtQu7FB7",
  "key8": "3L1AJas2awq55pFgbkebb3KrRqU4eM29vsiaGHmmTmJjKKtzvK14QakGWQmXAEfB1jQ91tdN1nvP6GcLQSn66AWC",
  "key9": "3HhpgE4MF442My3PGQEmrgcSazL6odvfKPJsySy4ikeRvNrVeMaG6c4xUnR4EKFPbz1iXeZEwESWsiDrAKpznLbY",
  "key10": "SwEDerUzDRoeDwe6sKjxBcWidFiELCGLnLmsXx5gdmChTtsFFUsMKtViNVCKHHYwotmi3jd61GDu93x8bnxN6gj",
  "key11": "66dE83vvZkGHt5Ak4JAHBftjzsdpGnJk5RSRJuhWj1iJB1H3npP8xA52Fo5nwbyQCSW9DVSXw4rUeMrGnDQybovd",
  "key12": "4vWAzmXgAztxo2FRrDxkFkbXJSw4q3kZHNqpRyGkhj3o7oqd3ptU8yjx8rtAAkmocamgQ7VApfXppFd4EprKz6Fr",
  "key13": "LG76MyVmwsCvSC5GvXFkFzqWucn5uAfzDaioRQnGhJnpq7eiGYAvCwhjT7qBWAasKgNmjwngSNWirux2R1DzUsY",
  "key14": "pdZVc2GGbre9xh4KspkWshqhroksPEAJ99VtTshnBt7oboJm7xp5P6mMXUESNCMUwrd7pAJ3Ru8fi5b8vupuRub",
  "key15": "5x7gDERcz5hMX7JFvTyWrvsc3V5LLmkZ31uMq6yhV11qegwVGWMYFk5CjJ5Hw4ijn3hVLhzSKe4MV5U72SH9SwMt",
  "key16": "25HwWqkAkpgkg1J7vPfPCNQXjAHmjbCprsMfo7PZS5PRMjLFshe2ku6ivkTc1hLn7o3wTcD2NhPzpz9SGgJrCJet",
  "key17": "2zU5rJkyQenedXt66DhAuXm2dKwNvhGAAfYpZ8kk2W6i3WZ7smL9Qssi1fQP2W5Ea5EZREZpuKdZFqHLqjkFbbu4",
  "key18": "3fWemyFE94i679koj5pw9J9MU3cvPfsP2YVKPNyRw6h933fTEEkJi8KLRfAUHKHiRA6PEThmxb3bjMnt7m61cQDB",
  "key19": "5HC99zdBBRXZU77tUFVwgwwxjoyXebKoQrhUoJE46B6FTc7VkeEF9fbtCWgMuwemHtJP3kjA3vVYsp3d4MZ9X8Qb",
  "key20": "3LuwD4FU1RVFntxZ2ks7CDcxEPreEaRLqMV2vJrMbzRNyFGABpygU752Pw5fysSkMGj4qYcnzaTBwoUcobfaGc3Q",
  "key21": "4LpMYji9hURwmyCGkHDyvhaqiCG3gfNdMsXZNXDTEX1L21trCRVtSEFgcPYy4LCsLHmUyeDsr29bMYPzAiDccste",
  "key22": "5nkQeLqDx3SBnWCkwbzJUEyFLNWvHQbqEAWDUsyzdgFMcqbtHCZoPT3wxydpLhp2K2Vvss5gBTLtEje43dzemRwF",
  "key23": "4Fj3wdMvML4KJ71szgSCnH1Nb1gfovxDsBNkq1M7LGMP3HtqnSDsQQieQm4HpCWJxamQYks2DtTf4RiEiuYNHCpL",
  "key24": "3vwKteb1xWhonL35d7sX4dL9odGvoiau7u3jditiVMvjPC8rnxWzAjjX9JR6ZTBWG2LiR9YK1t5bDg98vPy5q2cU",
  "key25": "53TbyxftwVC24kExs61gNGHmGJVJuD5aeqWLvCJmK5DfmR1zAkAkQydtzfqFBTo8P8kmZahUUSwuK4KatnebXEyz",
  "key26": "3sQJaQfNMyE9zDjpBNdZLJppJ7tpczhFbLaDkKkTD96djQ7NeDzu58D55bLkFA9GqpNMLDvTHoXtjhLiD83jxUo9",
  "key27": "FLsXq6rY8tiQZeyntv3KbT7bHKJ93KLhGW5jCQdR4E9vHwfbKc9b13rGE9XJonrE1HcMKedNAu47yAPxvtZn2Pr",
  "key28": "3sHeC1VmVUQN4YgdDHcqBMue6i61ZTG9fpmt3HLhG8rDERv3PnxHpASkygJTRYumrEkL4PvDmmeHwvd8CngWuTSh",
  "key29": "2pE1Ls7jPB18QZwTAW7KJa7tZ4iDK9jL2HNDb4U5ifKGAXwfzAxudgMLdxkZqtb6e7sZPWmVDr1vYhmj8bWkXXXY",
  "key30": "66ZrxYeHDmLW3RvVMDR6v7njMhwm6zWY7Er2SMMtyVU72PUHRMMUDVWSymwKiuFTgmeYMhizJSJo1Q7YJssLGksZ",
  "key31": "5697cY4ef5UfXmeHqmzDUb8GWC9V4kYHG5fcMQ2EXLoZbBKuGXoeYaSpaXXwXskTJ6tAsczchK6zafuvPShwndow",
  "key32": "RmMcgXeDLDcRXChVh9hpSiqiW2ydk6v3Z319tPL4fCT9oCeVfmeN9NimWqtMdoXixvMgnfgSi3rpdju3yh5vZkZ",
  "key33": "23rdpMGJwb7Xudt6rdzxHa6i1fi5VTxzNwJRw9McDzpW6ZtTzZFxnMrAsaTzM6oFbfKwVpt1A3LxmkwavAiD6z9D"
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
