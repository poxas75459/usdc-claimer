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
    "2jWLdDSXL8oJxDeYzuehbRvjQFbPq8e4krANRLvLbAhEGNDBq3jsDpoTd49mDNDMQPv75VZUHjnV6MvKFVru4BuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qk8YLLFsrWny68eEbiuCB18KQuhXH4SvBg487fUsMETuKnb5FGaNLVVkja6MuZKo9RZnr2bN974fkS4SP6z5etG",
  "key1": "2jLGRxJxX9BhvZx6y87BxNS6UZbYQJm3JCyZatjVGyTX14Yy7MLuub3RVbUmAfEA5MTXrEDHz6mSuGaVCVnkeTXy",
  "key2": "54ZBfujqPZT212L53rEbZdxqzZfcndq1M68ReH6nB2kEsWr6BJt56wp7tvdCgy58ieS9uXKezY9Y4ijcX1Q2RbJx",
  "key3": "4NEQXVwnPfG7kNv2cjvjSQatSR2hhyUEJUWFAabL3cNhvcWwcM14X6oZTwUWuTtAEtsbNhKuNT3YfF6iwSrYXTGQ",
  "key4": "2722GEu2ANUZrzfcxSfV99EtYtPwiaViQZWXda9wBzfPijYjsu4KVcyfb1N4JjB7qF3Q793PZQNcFoBwRWDhQ8rn",
  "key5": "4Pc7RE9mfGagErurRHXbMP1bp7XpfXdapB3rianzMRjCcsYGTYCt6WVZSpQgdFH7Pq2pkmnCbbh96JuiSH7pCcUd",
  "key6": "BF3xh2zzqZgqckkwcmAK6M3hQyvRq4WCkiQspqMb8AMrvX2GpVY1KhBC3s6ptkw5ztEqabHty3upTrGnXadcM8n",
  "key7": "3jGBkehMkM2Brja6umwSfAxKr9TX9ME77xNarND1jdiJc1WAsGhi2ixvC1pP5mzqQfPCf7V3mhVprryztUeaTxGr",
  "key8": "2nrMP9dJxwH17fJxhJEE3QYRZwUbzUBu43xnS3AH4DyBNA4Vciwrtv7oY3yqj7as8VJUnn9mPUyuFWgkPiFgP58Q",
  "key9": "wGXyQPxgGLWz4F3k1d2prhuEDKyb6emgeRnzSe7m1vCFch8qyTKTtVn8KRCDRMDvBWmdFzMY548ouWzdR5HvutD",
  "key10": "up3e4ezxfDst2rxjBWR37yromp4WmStDL96sJKbBFDaQmbH6SBZThcGgojTx9jwPVfEpFpAKvgcCJS5E3jNuarh",
  "key11": "4ptDWLDT48rYRMX438uP9FEgqhgqiZtyFaUR1subKAAfGv4Ht2yxwZ9jD2iNYGBxAXwuKAgSvQZyJf1zT3wHVAMQ",
  "key12": "3dAis5zJTb62yAU8nRAMccpp6ryoNusJtuNYbP7V3LwvtGFhCAQB9AzKfaVRqmg8xvJcKjHkP3TQyDBkL9FwbNP",
  "key13": "4st5kw1hUgqHbMY1efuXZKkeHevxBV5Y3xPjyiiqZuHnbV8xT4yGCgrXZJxnMGUWoXSPdciH8yHcWv8E6WCSezS3",
  "key14": "2ovTiR2tgTrPeZhiV73PNme5EGDKhLDg1iCwh2jbKP7Kd2MFTt9iCqTte1tRKefm3i1VNwNMstsMYPfEZeGsZHWv",
  "key15": "2ZHF48fbv5ShUQC69qyd4f5CYz319sPhAb5PdwVsjDg2R8rFZF5ErzHpibsmcmHx7biRbXXUjYjsrhzKV4Rmi1vr",
  "key16": "32r5CNHpnLMNgpC8gyA352MWjczsrQ13oymihdMPY8N2y71njxwRbkpsPjJqQZ9fA3AgoyazTbDQYrDxfr7WtVT8",
  "key17": "2jrn5DGABafE6kPv5FuArc5tFq5iRuZJiiUZQEZrPappauCkmhndN2rMELFxyDH5m7GDjqWDKD9gjn8y9CbYmmgC",
  "key18": "5H4v2SoAGkFYsEdSz1A7V2GuJi3uQ8iAvGq4YPNg7cWiP1qPCXLBBgMtGcJi2wTksrXUMFgdWEa41ZYo58WeSUz5",
  "key19": "4WQBs5tQ4ePEKwZrhfmpFkKgLMgPo5m4Tpy4QGe1Zfk2ivUYsv4DZjLUHV2HsUXMW6abHsKhGZeEMTwYAaFHkrUi",
  "key20": "5K8qNTU52BtCskQeki1Bb1ropnTaYqoziMGmzhvVFX2DPkZLCENiG6Pu3rmy97N9EWFBXUZrTDJg2HwGucQfG39d",
  "key21": "2K6eoPTRsRYk6LL8NxkC9EFor5Dy6x8rxXuLmPPakCXREeuDE8zLYeQheth1z4F6vrsprHxNszzAgs4W5SUCNgfJ",
  "key22": "3aSAxqmzA5mJFpZXsb9XdJHuEw59isnyD3u57359MHWe7i5BgPdbK2P9YmHDdni3N6kjvEpDT1Kthx22iXEhyAns",
  "key23": "52Y1kU3Hcg94VL25qBAJFvno9X9DT5guTaQiwBAHWTMRpk4CUSbC8wg9esEUTWdhDgzw8W2Ccetx8jNsjRScdAHK",
  "key24": "4z2FBB2tHoP25UkxAM6vo9AbGe3NDMwDektFVf388aPBrbTkD6dGzXKMkGfTGBENpMP23b7y3kFU7De7Z1gjfrYd",
  "key25": "2JHSADBnSNzcDTx7LhSNDEJh4jSn555EfDP5FoYr9DaMP7i7EeTGDp6de7MF8tVUbA2E1HecwpRjme7mhQTJTGix",
  "key26": "4BMvimNRAvCW9AmaET5wreBcfJ9gAgcR599MN9Y2NyWDkeGNhmYpDQQ4Psct8jKG4MtDJAvpFUi4xxWNw9v6evuX",
  "key27": "3ApgokdF9mNixaDGPkveaP3ZZRvHCEwcUxKk2kNxxgpzkoVjffmeXZY4rji5Mkg3rdZwRKsSZ7eXpD6vZBXaMurb",
  "key28": "e7TC7fFBf9q1jANZDQWgLsZzDZzNkTAMBKYcErSVkbyb4P9uNN91e1cJqKNVX2oDDLr2tFZXPyKHrEUpsxovrs1",
  "key29": "2gaz7AgqZafW3np5Fax6z1vL5iZZHdfzMud5jzadLodfy9JZsFJmf4gDv4SFuDNJ2S4xUxoR9jiX1vcUTUTmvKCL",
  "key30": "3D5r3SLJXK91gseHdhGCE7ryLZU4i8mL2axZje9rfmeUFnaRR8Vi482oRvWvE2wgZKvXHSWDMpSTqBnx21YkDeYw",
  "key31": "2ZHmqM3BB2MhENkbb8jNfx86mhZzKmizGx9bBEkZM1GKNUsEMNa2wjqhdo8NS384RRRiNpR4aFp37GbxUJD6WrUJ",
  "key32": "5581DrM2PJijugMh766saG1C7RGCHchy4Tin8VvwcnPnauL7f9nkAr73WRxikF2h5mZ7sfjfWHbGXgPTtkoW8CJi",
  "key33": "5qmKwD21KCJfdkDLwfQitDcRRPkQbo2HzS616FVJNsfoSVW5Fg9aKFqQVM6f3iAezrhk4nWZtdrvUYUtNHcEh3eD",
  "key34": "4YsgwcdtDBPmmi2nigabv8umgfySDULpLrMMFM7oLkq2SWHg2EL8VjTfAosm9S2uAi9DArgv1waGKuWo55sqpRBx",
  "key35": "5a7jZ71A36YKbrKB9UKxR2ZNiodd8AD9EaXG3w1hSMsR2Hrphu8vHfb9UDxH6upTrqcr7Q3v1NzrbruRg5PqCxbp",
  "key36": "2iPsAhsA5yvtWrsZtDYPpCjukMY5oeacQ4vZf5iJQkJTytLGEgdgfXPQ3SjcW6KMaFjtBGKYLYRYhGeKHBUhrg2V",
  "key37": "65B8GthWbCvQ99PKKgeGTtoQ6yi1UjEWLrbPtWnj19pSuAQawpW62AAQB57buS2HTXTkGBPoAGoRw4dwpieQHFR7",
  "key38": "5jv6Px1Xk5SgDYkwNEHiM3A5bxSF4BnudfULwVg9ihziPXGrgtjZWwtAJqFDBHa518LhfJE2MszKpgSNi771cS66"
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
