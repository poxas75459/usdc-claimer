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
    "237BWbmw499JBVucBHTubMdjDfh8iuosMaA9YzX3AwMbPAZCSGhdtmXzCAdEtZKBvy4BGbcaimSATWomVTZwyR1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K5YMk9TC4btbmtKDHDdVZjoWSSZEGoKBRW4qDFExAwaXa1F6Qz3CauFa1XF9bLM5uBc3CAbaWnbm7xTtCnBgwvP",
  "key1": "3iPBYEkQHDiHyFwhqE7LMUqXhz8CkJeL9UeKgnBSUpPoQ1adgEm8Xa2Z9pNp52u8ABaADaTwFxqqVKkKQPizJdJ",
  "key2": "3vNguEPERzq5YYiSNY6A7VEJ3kcxbEk6CVpUUax7JmsubozjHa39LDkY66x9LH7ugWQ9u9EYYS3X29SghvSjf2dW",
  "key3": "4DguTNL7XRRWjdPbnv3miRNuULwEVYd24NxLC3NtRfKYBwySf8xZ8teniJxeHKUxdn6WJcr1WB6vEekkFXJiCizH",
  "key4": "2L6DewYvcoPgfWhxxoWStunamUNbBKkUg98fZ1RM4fcGYGntDTbRxvM4yxVobCiFw5oVCPHSyZdHf4QBFTb7yc3s",
  "key5": "2qihL9C9kJrc2JX6gSsBZxBy2HWwXSHJaqwVTndMYMrYMk23T1mujtKzGFZhWuQfoxNJFAPNm1rfKK6rEmwnSAsQ",
  "key6": "4Hzo7xLY1xU8AmmqkQw9ttjkqkYxS2vEt2LsbV1owKfFTBhKLGzJYG6dfwwc2NM5iXKprrBEbLdQg2RFREi91JhY",
  "key7": "tGLvq8f7WYDzR9x7VaXErhGNq47uDFhivmc5Dm3hQftEjiZp9df452uqfaxwuFrXAv9jsbRq9o3d7USjBxXV2iQ",
  "key8": "3hkaUuj5V2S7B8RNnwUfBB69gpfBaJsEAJr5i6fwwfAPZuym6rFwDgT4M3avQhbRckZSmG3N3w5mwhJXoKgDNQsx",
  "key9": "2WMBsK9VWoyq2hRWNA5EGgwMrLF9cVPFBeH6Fc5Frc59pcWrE6wSwVHZvMnWwoQ3ypRactp6bptYBNz5nKq8DNSE",
  "key10": "4qxGsvNs7bK5xSgXmr5f4DitJDdAUJQcKopS3ZyF5Hm4UnG1GkqAEZnKY5L4Qwn4wSszfFDRGtMbKSRQvNpfE4d6",
  "key11": "3ETMFTpeUEsKGEjnYHHDRgQy2kt2UhQxDrWaJZgoPh6rg1ow7a9vEc3XLJHJWevrtgrT9oBXK7zqCbqFbP9NDK3e",
  "key12": "28K2M8SGYbfeghegJPrSUZsAvPPsGtE5zz7iwx3NCcbYSk76P9ud9u7CjAX48CcuUTSf3gPrY2U1XzZNhk2gJ6Tf",
  "key13": "23F8yrLQjYp72ug9UveZAG5kZ8hL54MsGDjENYq87qGqdLMAMVE6EyUoStPYA9CbvsSszGbELFED4E3QwMJY2jDp",
  "key14": "2PRMLrhbJw4wQvJZcCesjcYyfnRufyU9sZxL99iAaBHV2FUnb7c7LMkUcA4qHXxcbrxvFnExzhWPvdDxghXNz9S7",
  "key15": "3R3pkXwixWbju3KcLmCU7ermBA8sQ2cAYiXREN25QQBo2FCrHYsNFZLAg8uQz2yDjsKRWXAZZaQBzfXndMrmBLHk",
  "key16": "585b9WC9qsQXeZvh5uXst1sp6WF7VWiomcEq3CY8NEY2UrL3qBv5s3ExdYNibt6uiyMtMjZpYNEpmWwhgzYBPGSa",
  "key17": "4KG6raWcDvzyECqCL6xHTrhmvtA9a1rBETETHjaMpx8mYyXp48zwQF59ij7xZANAa6ETAnML2D7zkx6PLyo2JwCi",
  "key18": "3w3sxWbgPNsZDdZ36P65XzerSZi4Q2yFvgdLdt9gmbvNqMkS2CNKS8534jyy4Sgd4JVetn99wcUqFmoM93rNABxi",
  "key19": "hcnhX6Nvi4cdpa83Xxd6FE5fBNBBWyVbvcThGXfTWtNgE1aXrndpEnPuSGmvK6VF5Ed7z4RKeww9k9amhJxg8DZ",
  "key20": "2wdggLM9TGNiWgnDeQqRY9y7gb5KtT5Rum6hcUTF4PWwxzh7koPtFuvXKezYYJ8NDFphyZM4HACyZfaRDqzEBaqa",
  "key21": "57vXdbPFbq8EdFoTw131szLaaVySvTo2ismktTmxaBUGiwQTAL97cqdten7Kp2NniTmdoefZoWKBMXSG4uFAcfWG",
  "key22": "3a2ydCNhCakN8eeseituXYr1xbQE16urFeRnfDWvYF2KkAxaMsxoGspP5J4mxj52EZRskj7vx1T4EySbYA3EX6wY",
  "key23": "34ThM4oHAPY8YdWjrJN49LxReyGRTThZnkCtg4nvaQp5vsK5gsX6GVKkmdLcbXpo4WsFamUz9SFfzUy6PBnGFdJE",
  "key24": "2pCdZtqkqT1qfdS2fcoqr1PcY2VSyguggcKLCUVbvKscjTWbJjSCq6fJTLSvXWEyEoG6B2U2WgHiMGr3y7rS7G2E",
  "key25": "FZAcunZeZiHBrAEejxJoQnkAtVYyswmJLXBgDcQhzia4QZvhuPW1niMRuM6CWjcupUVefM5oVDxGXTAAs2T5mJW",
  "key26": "iT21YLrTHKujLwsSAKMpR1inhwyrf2FcQRKA93QGaWyxhSPn599HnXx1FQC3fvQRE4xfTZ8iRWt7uUdKNeQCKGz",
  "key27": "rxGx6katFj5uub3GVENs1J8CPyaYcCHQKCztRkEw9Axe7HpG4g91DiPwZm38enk4UtqPpuFb9wZxuff1i19aHfT",
  "key28": "Rm2BmaHRcoQZjAYdMKtQsKPPNEw7DiBcEFT67HmcVe2hMSkAZvjLsxKKWumSGhY5gPxrvQ7DGNwGMnAyNZ8z4Eq",
  "key29": "5NDvX6damRpxUD8s9WaTZ6ZuPBCr7JhwUCBK4wghMqYHPPQZZCSGwgwXrnGBC1wQNALEgrREv5hPX7sWPUXe3oLi",
  "key30": "4KANHssL4hHUUDossE4YBrKsMdfas3TFkn5T6RLsgVAkBEgAQ2RcyYJzap3hm5eqNBHYBujT5Mex7ogWxRMdkZt6",
  "key31": "5EJZC8QUEDxAMon54YqWY8RDvi9JqLdosxvF7CJUM8HFep6EjDAUYyJTdWx9aBeF9iMNgrqws7Ys4VSUwG96UNMe",
  "key32": "64xG2KmpbbhEgwvaNDCVQu91XicLo5rnpMQA9HvQYAbQqrVjrUSaG3aeVYjoDvXK75zBoFh463eTQTebY4CCA6mh",
  "key33": "2K67tdyp15ZrDBhDkkHkMuV5PmPmZTENV7sN1A7Y2Li1TFvMPFqRyQh3sDCceM8iVmB95c7qvonAUBfuRTCj2Z9B",
  "key34": "36qVm5PAaqSXG8HXr5p9xHMTSKpKtjVz5yi51WXaDTJJKkwqjRNdDdq26jvodYTbiQjWTu2aVKBhgAVSarL5uTNZ",
  "key35": "4BW7CHAVdNcWpLqyUhAsTzJHZAFQZBTk21Z9nK9itysannQX1H1toEvNHyFG6wZxjwmH4bxGYbfSQLVHftSuuVCh",
  "key36": "2Ve2TxeKJJFEy7bpswvnT5xX5t48uTSvYfiEBe3WFadBw4mvYQQE2HVHQQjLgMtRFvweLh5615eFSUjne7RP5gyV",
  "key37": "2iN567qgAuYMJZ5q2uxthfPh8DzSCcLRhunWTiWUtRTLfhKTbgS1n56HQNXJcyxd1eYsMXQppCsgG3WAKCxytFbv",
  "key38": "v6w4y5crENNYfVmr3BGsFm9LQyoW4SPbx2V9AzNwWf3tJsFyxXpB6fXHB1S1GatSxPDwLRsAAqdCTUkxmGcwWcJ",
  "key39": "4xwu6HGFUS2eYS2dNvkBAAaNNiH84ZnUHyCn4gNLAWgofeQGLM99PMfJBpKXkWaB2271bEyT3jLxtqwLL5EduiiY",
  "key40": "3ZuWEQsvs8YEHhoU6VPncgUFmwJ8jojFZFVRiUGb2R5D15NZupBmC9kbz4YsiJw6iN5nKiqR8GjvwpZA4DgEyVj6"
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
