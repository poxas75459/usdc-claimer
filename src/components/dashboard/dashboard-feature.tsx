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
    "5iz2tHwRVz4WX6V4rJdGHLAyYTuGweFk5CMehyncJLj3BP9Eq89CT5EBJMfkGjUESRwbExaSDSxZ9ysFAPzWPWXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yk6TEJ2vomGTJgSTpZNQ4HXW4gGjreepxiZQ944YoxskbZ2vMUz4EfPf46mSF91F32HY9jHRvquJ1XFMtqSy5r8",
  "key1": "3QQYY7tdQU4fZSRhWmMwk9wces3W2xcyCVbyRpkps21ziKRen868CNwJvu32BsV1jyLz5qvrYgSiqiwbL9dvJZJ7",
  "key2": "3M7fJiJ6gdxPoM5bLJx7YVTqpgc3ADf16rAZ6V8Tv6gBPELAYwMDPSFwETf9Aw47HtgQJPZez7rz1y52GsQzkVZK",
  "key3": "5NHGiMu13yCazWrd8oG2fLQfnGzJqBneEL48X5LDkkaLptA8Cy9PUHmtfw5p5VPGzwZjDYqte5RY3buZ1Amu9Bfr",
  "key4": "5hF8xiKQ6ds5u7Sc1JHyTVV4PeridzJwRxcMLEzGtdq5h6rCJtqVHktekuMz1GKo8oddj8YaR7SyCgwGQ1xzNxZg",
  "key5": "3pFq28u6XN64YLDL8SjtxfHcz4xMrayivEimvjNdL1wXJW242z4DLAq2JsQNR5m4i9bPgmc6CG1MdoshBb52MBwJ",
  "key6": "2rFBchqSZeDxsWa9D54iBQAjfi9CyZmaWsHXqqvFZyPpsbgsFoueqBtjmG9RNbm1G4ZJNQJ2MFq6KaHwjJsB2j4w",
  "key7": "ByKSdSPmM5PovMM1FM5x1gpNsiEmHfjuZYyDv8bP7N9Z48F77oNjmxC66wSTroAKNzoh2W1woG6hJ1YAcGcTAkE",
  "key8": "Hwgx6y85UqRHTrzzYWyfNcBd7VDQK22Y7MDF2gg1cA8XjmvJzd5m4MSuDQGDT9ZCQ8VVM243WE98QP8YpPztsfK",
  "key9": "2QuoemJAipdoYFZAKE7PBzb35SXtdHUkEsg5KBX6F4VEw6Km3vkXpWCSnrwvRNrfbstzeiUjYPv6zN4gfG2QreD6",
  "key10": "3TLJUKBEnSfjAEDP1tH7tRC3SboYdukN66c38X674fYrrZuQc1nG1twzBPfNwkE1RredVuwLoGtuXvYZwEWLTsM7",
  "key11": "2YqQBnX9d9UhRcf5RqLXaVJWVoka43UThSuKqwLrEBHGpThGQPpTNxVvhsahLKHXt2Q7Xn9JyzuSfyPKisYSyBvM",
  "key12": "65dEdbp4Pys151GsXRZsESVxAbzQ59hCXYDFULSEMBxbXkMH7XhNvnBG4TaRdjRGyb1afzfDSYBL4wFbjQMRoAqD",
  "key13": "4Zycm4gjFQ3uRRguGmtuKuZv7T2K6ihLjRaQDNSRJtDsKHRg5Mr7MPv3wdSALdBMNBoigJ9TQp3JrTPEpYAt1NWe",
  "key14": "3y2QZg3ReJBfJjzpS2vyc8eHhTPT2hrDVYhvVFHyEKKeV2ACnFgYGXaua3JDJotWyAhahpSspfFGopQ9JtXv2tDX",
  "key15": "5DdytXrhKkoBgdapWZE39qs4zj4iB1FSyzXE2zCsVM97KfT41SoDoF5Y37NDrEm1XErLQ84vMN2gdzJNSmH6k8X8",
  "key16": "4UQjw7sPr5dB6FNRYHjvojr4DVc3hZgmzjaQLjwDLG96T525gxZWbSNfFTVRoomMdjhFwzNchLxtswhsyCzU8TjT",
  "key17": "4Z6LaZ5LgVxApdPbtTc7edu7UZcWvjV8nECK8KZbL5HoAspLhBNsMVx1ApSyFmDG227fVLGLc3G9A9enuqPr5eov",
  "key18": "Vek6hgbwkGq5idLGtJuwq4shkgYEmNzz9oty351s7ewD5GyKgQ6y2RofBLeK53shobKP7g1mtwQa4d8d7Jxh9BC",
  "key19": "3Yquj18vri5Sv5PzLz2xLyhA6yadiS9V8bLzeyFJCquoNf2FoAMTSnDv2ntEQqoBZn19eognufN6hLppFdTFSnxv",
  "key20": "5cyKMTGa3MHiuwEDccgRK5eyPghx5TpRXePmWeJvXcQMmRWh8T9RpDv8GnX2W4RagxnhzhUDCUxBD2XJMHEE6LHS",
  "key21": "56ocLgyTjaJrcDWYiux7xyfSqFueK2MzP6KfZXrrjDGtZKydn5MaW7ZQdBPEyW2EwBxC7gxfAGVk31WoLmwWTpRb",
  "key22": "33AArRM9XQf3swGHm2z41q3Fh3P4PHFnAcFEyesvUZTYnbNzAmqXMcvyuyRocvkXZPxZaL13MPCZ1jwwsNQHWX4b",
  "key23": "5zdCe1qKmjjbqJNNxMxcJ2cEZzBeoxt8HzfMPizdSgJoRhCUa4sacZChsgqkNcsNgcUQqCRLKCngqMcu4fEF3WYz",
  "key24": "4ej79ERjsK4Ueer9bwSfLUsG2Juuq5KT1fLB1DL1JGE7PpbYfpYTB4ChxCzQX3Kc1NVbPrcUreHncZpJ9JrVDu3h",
  "key25": "2Rram3cPCTMBFtvFeCVKhocVW8QVSQrL4BrfysbHvb6r4tQXZrQYtNA9etJFX9XhhMrVmmByzviBzX2aVcuxgzpx",
  "key26": "29fxbtunzcMK3b8CiFNSjFMfQ4YUCewfJi4zHejTenixRoYW6UJJMBmJNsw4GE9K2ueyBudYqdFnVWHZnvbyH93v",
  "key27": "3fhu6Ct3ha2Dw3cbVueJiQm6wLDNr34EPy7MGVUrm9i9qSNbMML75Yv1xkn6k1DajNxrpfvDKmkrC8qedEyFQNFU",
  "key28": "5YhfCdCDac6MYB2sZwWJsgp496YaQfCKNL5VjNb4EVCjYA1VTFut4YPaw8ybvCwF1FFYaDq3QErtZLuLLqxbZtyZ",
  "key29": "DqqbeeZyscUjiRTkWiJFQedoTyYRLLdg3bxmM9ShGixQnJgRkHvRryYhSATqXSrmUFUS58Z7JvGCJQDJPAzsxud",
  "key30": "2onWrkkRkpGefqHpyoW7MjHpghojcSGqdHG3ovzuQdfhgDibndWvQvS3cVtvRB5fynNcVSocnEYeief4RTPFPqeH",
  "key31": "5wPyoM8WNdp2xcyYR9t42whK3VFFyWqmrhwDXmxf16ijhEruPPcvrGtXqHBYBAiwqRnmYZozsRe18umyG3muSyjY",
  "key32": "3CaH8T4MohoewgzDyTNNA5cX5ZJ5EDp12vnddvAU1WrXiA6h1qW813AhUApjYeYbCLHdUxVthqWk5n2zU92BNNQw",
  "key33": "MP5JsXtPhUVeQcErAKjwfZWQEuP43pExme41QcPooy6UvNE62gL34Har2pwqK9xDPFpX1ukzovME4SEH4rd6jGJ"
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
