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
    "4k281FmstiE1U1oq5AMGP7BPAAdLdkLfZTAWJ5NqVP9F1hkbHkqcfivSoooq4peozh4basKrYfHkoZzNPyx2qABh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rPF4aJahoBEbpyzhiWzEQqg4SzBFGpn4D6c4qk8BJWrnBMWqVWLPdgXcW8HVkE8GXwr3yJ7NKC2dxSPWxsoTxMa",
  "key1": "39bAvg7JqChj3ezwxSXeJnfVnktWA5Dv6K1SYXkC7A4gr3ZfSi8ksHXEv8smpxxpQwBxvxx8tTTKCbnTPsrBdEPo",
  "key2": "3aeDp1QDSuBPHC7KAMCGo1sN8gF1vb6Hshi4f9dCBXxkZfyZigc4qR6jcKjBF5VuwtTTBthpTwPawQzeCbXmj2e9",
  "key3": "5MVuAYGn5fzkLd1LR847ypMEwVsNDNE7TaC3reus8jWWx6mR5obbQD1dqqUzrcqAwGo6kgCTDnuWkXdheKi1Pip5",
  "key4": "38Hx16uCYUd9cPA6BYE9EZ66aTZ2ncgm9jBkTy2oQwRpyygiWYihiDwKLJo5a3E4efz3g9iHho8mUujFCHZJF62j",
  "key5": "4bwsRLD4VUpkeBrfnGb5JQfNUJq3nmQjM6qnkCAfxsjX7SFmJqAyToWtiCi7cN1TyVT41MjBuZFct1RDCHaza2vs",
  "key6": "4i4zYPtutfpq5TaCh4ptoYu4eAHrxPnRApK5kReZLKEmpb5GnCLhH84NNZ3w1c5UXSyBGnKfj8w7ndu1fp57DYXX",
  "key7": "5hcP87jgzfTbRzucqw5ZnesWFoVPXew3foX9eigPvsAuCR91zJswwcfM1ZmBfsZFvs2RFfyyDLSFjzrki1wimvoH",
  "key8": "4panLywioWyfBsGzyQKQgDNVTHzXAGZDe3G7QPbUL9a26thqHBYtLDmUFNH8Qz6SWwYJrjsk2PtvfSfK8biBzvaF",
  "key9": "4NTXjXCQGwm6hoK6EfDzUEF2JuGS7JYubeLs8nQdu6Asgn1hAHtVc8P9NJSYBhxq1TtGb9PNd1j9dFYAbsawKezd",
  "key10": "3gr1u1dgUi51p1B9DEakvscb3sdSR6uYBcE14upF3YJZWC6vGtmdD21tSxA3BHz2XweJRXX8QJrST31J8yHc3Qpb",
  "key11": "ymhCTSbgcy6DVXMT1hoUs51gcvELiKs2Xk9zRuTZ6tDSbmNn9JUkMEBiFcKV1CWNA4i5EmRCEL3e7aoJK8QhmV5",
  "key12": "aDGMG3jEaLuZfEpEJL66Kfntzvq1fdePdPeWoUwv1Mxbp9t1kVPAjDZSDVNbfikfvBnzn8W7nASUhQ9ciSdiaES",
  "key13": "54Rg6hKvYZUZkSCHu1FMX1NXEifP3DxLHQUkSft535ihNVWVJLyXohp5ZDYtDMFWjwcnHFVjyRnCkwJGurKzDdkz",
  "key14": "4o7AUGXcMV4A1MZJkzEtoGfkmywZ7Qw9ShDsgxJK5BWb3oyRzdywM95i511PfdFwurATtTVmXSfJkfXhVzjG3PdU",
  "key15": "4obSirpXk5cnYz1FNDf3H54AR9s4M5WaE7GcCrGN4x5rYK774nGi4wJqRFdbVwiLbxurGG7E5NVt6VZtMSzkvDq8",
  "key16": "4anXWBczYyxsz1y9c1PzUs678PzPsSg9Mb7ht39ARKW4v9Fg1V3mbDAgKEXC7SJT9HQoF9gMXaYAbinNy5ejuBYn",
  "key17": "5y2AmknanUv7kzR71xKsZMV3VjEnwRKdETpd3eR4CGnN1k56wXocVY3KYYjEBD8DAFyZebtJBrV7vaWE7FFg1zsF",
  "key18": "4T5aFiy6aKLGJB3HeAu7jrmjwDXEatEV21bYS9ZdSTUSFRKF2AMPSh3LP4AWPgNpLY13NZPLvNDXSc14dxgSGBhW",
  "key19": "2WcSVu7M7xoAMpEHSdsHzzWYTBN4j2xzQWp9oFVkKpkvik5a5Y2e9iSVm34wF6LvkG75oBwe97cR4ZdunnraQZpn",
  "key20": "66SeAp2aeUgMMVot2JdP9pWcxNT8WaiCg17UJLVzUoRiBEdfPKMuyq1EkG6rYPJqrVBPj8J31zXH1oAP1xh3Q7SN",
  "key21": "wP1tTo5VRC8i3tkzf1VLVdyT9mgqVdghZCgcvhbf4zLHn47qLNX5NFcEoecgRsQ6J2vAB9cEtWzUtvkaSAge45o",
  "key22": "C4GdHh1uo3RAbzeEeaAxCh6iyLENFPZrYsxY97Y28GgcDAMXsJdwSiqErooLGaEKnip7AAFnV1xrBt7VK21er87",
  "key23": "4mq1w2Tz4wFRciWdDSVycdSuUpgGqrajkjbej677Sq8evUjJWkCXRifKDWdL7Uv5WXb3FVsspNPSeniM76877mAT",
  "key24": "52pbeM8GNNrCQ2hX6eZ78ry5UdN8mHd2eMGfhahNvrdJVGGxnkMzKiMEAhmWiHc877nk2MvNqzBiFvkWkq5RZYG8",
  "key25": "1JPLsqxggjL8kaLWS27V5gUzYhN9CG3Qea2WQBWBFqFiPruLJ87d77Y2L6h6gLuBib4F5SuotaTB2zvAsbnegWU",
  "key26": "hiTPMN6LDoNp7WpBiPvhs5CYZ4K7jSP6bYuKfGq2FMA63gA7c2uYfVJX4NS4SPx1onVPtxpNUPwB8FZAqqjbMHf",
  "key27": "2aRXPMofTNdpoJw6qUZhjbcnt5TGWwBp8SHkdsE4xZiAdgqHCqoSpzd4yLkFJYJ33zufcDsBuzGe7B9dBkgxvdhs",
  "key28": "2kmWdarxmiiusBtCixGQgW2YCoazP2fYEhmbxhNnfRuhSqCX91z36BtMNJeQ4puUuTXMMzzwjXZ9QVxZyeSWXpCi",
  "key29": "45QvQqUaGhvrhbu2HnuuuAHigHuZzYwvQNrPkoySv8Cz3KdGrYWqT2yb7ez1yK3zz1UPDZBJHREXtezgtwz8Gmy7",
  "key30": "5S8TWr83hn3DqEq7GP5yjyy7Fu3m4tARxMhc2KqDmcvdnbhgLActqG2oRSCKk8X1QFBRhLNg5RkdDSYLPteKjs8g",
  "key31": "38VmXufiAZgGTi1fUrQ6QVnq9ZxZBk1fLuapxYnN3QVXy2qFYCMJ147dw3xKHF6SEHG4Ef3m1Rc7njRvJmmGKcRU",
  "key32": "ZhdB3mxjjamrKj82KiYd7D5xk76LpDBmc6UZ94G7vhJH1oW62KZBaxgxAoiYtFv4L13SZfRz9ozCRYQoB7knBob",
  "key33": "3vESc9a911bUN9snGG3Ag9HMwvHUvP9UgeyQiBts5kR6W6RxBv6rjgpgeNp7BFweUzxJ8MAm8j5gAvwVpTNaqy5b",
  "key34": "3YJ8pSPo3aNZWKb8rfoVwMbhoL4mh71dGAiiZpeCq8F8m1zG7fhoHYbHWzvqG8DS4KjbUQQkMTK4NXMrHYNRUzHL",
  "key35": "2RmZyGY4AH1sfgPQbh3cBTrmBnzMzcjcjkhTqgfHbovH7VacFnQcceJEEMmXL1qEAz8ZzPiRDqHRpw28oKSJ1P4e",
  "key36": "3YGKG9Vqvwuba465BHeyDszZ2CDWyRE6BJgT81cQVLmpQzSPqSdLkZJH1HaxBQLw36jgA3HYSzKqjpzNEmZK4hpb",
  "key37": "4b5enPDyJMV9K884sGJ36nNFHBNsdwfnfywitAjYKCQPsLumehEX57x3MANfaTn1c4MXyKNgFQ8yhrBwJZrujKsA",
  "key38": "4mf3E5GKWuxZFftwNjHMkuVE6B49PykgxA2AZjxcCJp2WYqyKMDqApUXBSsfMYKKdZh7T5UHeiNqijrzqQTWEWGj",
  "key39": "4NxUSjNhjreowWUEA7qtBFeZsmZ4w6YMJKcgRfQQVpMwWFeUcw66xHCSipr8ZhrhoPe7psnRDsdTFkMVahz7TqRT",
  "key40": "4XhVmiHhwsCnw1BqFb4fBkD2A6wtozgR9HxEaWsBVEsEAGTFrdAxYv5QReKZg3Qh8UTSjwYGnf2i2mzjbBPMMbP3",
  "key41": "341XyfHGKX1KyjMdDms2Kpa7LDr7hEgMvXBeYsNAXYPhwPdCDdv81yoytZRYLmdRzJy9pG4Jmy4YPVk1GwxzvkfP",
  "key42": "qyzJJ3pzHSX6D4L8FL1gi7KNHGHJBp4ebnYaoB8ByDVvhWjVDPTr1xPSR4MGMGQMm1WaBfQAb16FX6518kfCYER",
  "key43": "3Dqa6YqNFtN7voCnfmJiCpj7w7LMVwscWpCn7jawt5MwfVSVtBFPqRbP7R7uzmxpbQtC6TFrF7DveRYt2QS8JtLZ"
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
