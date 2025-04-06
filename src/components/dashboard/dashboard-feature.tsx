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
    "5hERHof3r1ZkjgRu9xmMQQxRN8a1nQF9qk9FgzctBrtkrSXLCzgE6qLpmobDQJgHWzNQhFtyW31HXz2rJkYK1Syp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29m2WXXYowPg1QQxWvWw2AWLD6ARwqcQCbMbm2HqRHdXnMNhjaKZu3w2NmhdEKWGtVfpNfPp9Z6HP7sFqHATsZPC",
  "key1": "4HDbo2Bm3DneL638pggeRKLMjJrVrJLKCvvfUCjtoGqpLW8Ke74Q2tgG6Vj4Y6vW6PUNuG3adx6rP6ofDw2yhSZ3",
  "key2": "DmcxshPiLugGtLo8izreSpvwBiAQBeRDiELvKf4DonHu4SXN2EtGNMCqV6uvCdQRbu8TMdCWxsWRkhdNmZJASnA",
  "key3": "5KMBy3hCpVh6ZG6gELQWEctuo2HmqTKqdaJcjGq7kjRessCGpQbjBugpbuc7Loammg86JrdKz7Y4QHhDkGZWt1T6",
  "key4": "3KPnHaBKD5MyUT2Qij74VCNH9Q2TGmHz8GmdMK851BpUbx3F9JMkNUKC3XuevehP9LSpDc1Cj58v8tSjWmsQ7nMx",
  "key5": "5PicQ1JZHk4FAwoudG1NjU2TkiWixLaqxkb3oGnGFWh7N451bXSQFk3t7BNUhu3GAyAK26YPrznVfaPqBaDEFkCH",
  "key6": "2C3P7ajknUfwkPWp3EiUj3Gz2CxPdGiTGu5pRViSV2TDgzATdW5nbBDNboupHKMWHynR4qCqhpNePdGqPyjZuuLY",
  "key7": "3guqEBkLhYzNcRNuJw4eSbyoRVpFZspfda6qtddoTauqCmaeHiKvw7zhKbe94Agy4r4zn76w8LAzWsK2rdkLrGaT",
  "key8": "5gEpQwV24Da1hxqeKZuRJ57a8vog8FcTYo4qhceAVN8fmEKboQo7sgHmhStajczDdCMmzihvvQjSja1EmCS7UU5A",
  "key9": "5uTEY6cCS8Qh47qnDQAjwRePdx6yw8SZjrYGm4ru8p12khnFmyvN5EuDDmT5UfcRsKNcoaQbjHP4mGaabnGo1MqU",
  "key10": "3fYF9oYswxFyPBrRC9sPuHY6ec63QgDxuG7XQzzbyeWz7jdsMsLDownZbhaVQUHYn7SK2KH8fyjd1qbN7PJEAUfv",
  "key11": "XdQXbUZzMvfvCjfJSq3Z9rumgHAXeAnLWgqAymwhp7jiKmhw2Uu6VSj3wiEPu1VkmBNA2QE8ZNTjiRg1QWiT1Ph",
  "key12": "SHkTNZcfr2CJ1cuysiy5Bjr9EjYBxgsdPcaTYdUKfTo7DTnSTEjNCgpPdKggVKUY8G5euWL1649GAYJPnZBKBce",
  "key13": "2fPhC61wYhxdJUg7SGFVc6zMMRAv42gu7JzNjMLzaAtCrkwWcJkadDA1GQNF9v9cHTPb5mNGbxucRenQrR5NAqx8",
  "key14": "4nk5xgmvJKdaXiJWd3W8Ysei4VvenW375ne8bySs2bUuV37Zwsh7HScuoNMwzqQKrirbdX8zQNSwHeEybzhmz4uM",
  "key15": "31RJ7qkLNbzrwLF88zPwV5HfQ5poyyNYY52snAfaJVBKjTd2TZeLVcoz87xqCb6eoF5mw3FEVDxgsUrecfoPE4LL",
  "key16": "22SZTfdtg89WYq2fbThqRB11aTeQvCBNUXp5LdcUefxwkX1wGnKtx2APvNcVUkFDfiaCYXK4AEUDWUmn8scn4f5k",
  "key17": "4oYw7V7AXpjdVQdpigAX6J2oM8gG7v2PRQKFgcFkx9wqTBYeK6w9eGbyCEmu8XFTTATqkzuGP7H9N2wSiLnN7ZTe",
  "key18": "3bwzqTYQUkkXkojpcGtAvW7yfSfJ5U9QAhWmVwQM89UANydC4uLKAuT552tZyvW6GdfN1ryBBr2NatmECz9g7Hnm",
  "key19": "4pqpfsUM5ePYnDXufoK8fADGs6RDuLuTKoXH783U5rA3qqE9AChxN8RwTVawpXjbqiBM4sS2FH7oh3oE8LsR1nS1",
  "key20": "5P8A6SCie1b9HAkJTWNKyrUDHQrQ1vftpoWVH6FH1PKoACepAoEwZAVeEo2hJ8SZkV3qJnhKo3acp1WCzfLsRMbx",
  "key21": "2J1gg6fG3cWfpf3CPHL3ftei7rVXSqyL3uQ6bwb3w8HpczDeeAimGomCokhMqFm8LpqFhuV74NWWHLDMQkCmU1e9",
  "key22": "xkYBiJNXvxUgwQ2Cr7T5g3Bwi5U3Gf5CGtUFgEHfxpNCcctTYsdUdTWTYPNZuWmC2xSDxK8ZvKQokjzBeHKeELA",
  "key23": "5HL9WAkqad97cYtwxZZX7uAuwe9bE4F1Xz97CGLYBn7djM162W4Jpo1rJi9dRnGEpVkHdQkRgnjJkmvRbyLsVSqD",
  "key24": "4gUJSdrSzsd9MsYTPUkpJ8NkqX4WVLqfQGsm1RwFpmxdT5CC5QCWs6yWZCBqwjYubZFb4AynB1i4GmVfbQCaiqvq",
  "key25": "LoHn9WdinQWkdWTiarey3HXTi5yWTtA5P6pc2BBeu2a95LeCuoJkH7GoURz94WjJmFS8uzbtC13EB7RyXxy7PeP",
  "key26": "32zfkob1VcKYg5nyigzEdymrudphGBjmmku479UKBHZ2uC6EhLAdjCs47K8zqKQsx6ReNTrEdB9S6gJxvgNQy8Ch",
  "key27": "2MWGGD6dLUy9g7KNT1TNLsvfjK2v2LkDKbhaQcQEZLKpjFhkSCrrtEgc2bMfMunrkZ66eCbDr7yxsFApDKnpKK5F",
  "key28": "3Ni7usAnLrF3R1ukKwYsKWxB1i7KB7XauFuEj82KGtM4XQdkwJesmWD82EACzyQSUTpEsXqpjuugcGfM7bLBFaTb",
  "key29": "2vDwvpMHDJ3C6RQyWJUa245NtXSaT2kxx4HhLy8wqEXXEUHxtJhgCTmgieLyNCgSMm2RRztRHJF2MxuehwU5Lfff",
  "key30": "4KD5EJssPg1fxKHzgHCH4twJ6g3bzzYt74Qw3PnZrJywxjTWZsqcKP94vnHJZTAvCbBiHfp2fPfiwNCKgdKRMZav",
  "key31": "4UiwwwhwhmnaDRfX23EN2fYKVajtGTmpnT7h1ATEefQa4iMY5ZCFM46ycYXgwJ5t4v1tKw7h1GFqkW4QvycAZk1g",
  "key32": "2VpB74ut57NFdKQukuaF77vmTepbt1srS5RXjRBAcDTWgPNwirtrfbf4ju3JXw9nSkDGLTDwd947Xj8Dz66UTzyC",
  "key33": "Kwa3gefEwyk9PaX5hkyhkrNw7sTLUnw5vV2Ym8QTfAViPmA4ZekdmuJ6KsN4qwsdV6po45gvsZKb63CaNCWUWpq",
  "key34": "3wQpgUigub2VNmZ46YrXpfQqHycw6c25UE9LjFhuhCXYgvf6c2BsbhXNiqyAynNZJ71Jz7EtJTwmfpzJ3P6oEPFQ",
  "key35": "DVU2ojs74QzKh9xVs5bzcZj1YJPK61yr8eoz9gwhTMv5wsZ5ECyA1uCjRGxchXdo4GdFoG7jNAcJpeGX29o9a3E",
  "key36": "5k7KdScYWAG4GRhShm27YRZgYv6R6iXkmxBhq5Zh5AZCjDLYbYpP3EdCa9tKV9eaEXt7Kfu7vXN9vMZfmnHH9Qe2",
  "key37": "2bXKJZ3J26Z4zV2tqoiKWmT8qJqb8JKqZpW15MuDf2HtV2k7V7qyuHquRdCTh9D3CMpX6Nt45Vw4aMiNAcjqWL1V",
  "key38": "46kiDXED1rqJHJdL7cL8zbEayQACcxCFLGKy9W1e5V9AP2NHvvSdG7QUxWWmtzbXvrD7sSp3DFSYFtu8h3KXxDoR",
  "key39": "24VpdEZJWafbxiFe1SFCk4GgFnZ3rgCGKpDNmoqFJXD6GxCtz2fgeMYGJZeqkRdRV9qNfCUo6SAJXj5GWETy5mmP",
  "key40": "52zCGmHf8e2Mxuu2q6ubp4t7c1ctnPejiN2RZPyGx5o5z7xdRvjtyv1vH765krhKHorGypCPj2qUwcWmefFSkkiB"
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
