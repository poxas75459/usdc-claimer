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
    "38PMP7gdnFTNd2cEMiUhwV7vuU98nhiTuJZDrkpKNsdqScsp7q2oBzvFVMLFad4wTr7nv6y3TokD6J5VrP9bp8PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWMKoQ4rz2jmdG7dP2WeYdWTLpwkk2t2vsE91st92kEaV68QTCsfnLxQ6FuqxrFoCo9ZFZZtrrhxAGmy5ueLAgr",
  "key1": "63d2n5JoVoShibKtgne3JnLhHvpBkYQ7fCmfRwvjxRXp84Dryr1UAed5HKZYsGqLce9FKCnEcivvsnVvZqoAdmzA",
  "key2": "QEJFqfofcFH7u1GqnsEzwAViACbCh2YodjUZniCYDKnxKgnXGDUAqaRcpUiNSQMnRJAkvpx9snese4HEJJimdYF",
  "key3": "5VGGhaj6PrND2rhAxYQnt88UiNgTVJNfKDHtKRCJDGXtNLoas24NsWiXynniC2HQEn58ctebbQnSLrusxhrV1FDZ",
  "key4": "57gKCvzsvU7iFhm1K82DJomqgjVStiegaTkVvfW54hQuGcetCr9UEoF3fdWVDoDqBhDpoCnHXdpkUKQkcgrj1TFh",
  "key5": "3efHMV5B7xR64MHhj1HaGWSbhhuGpQvcjR8hR6kjUgpCAvyj3kdBPtd15rZvqRHLJY9UVqNWKgLgbHMLQUK7zPdV",
  "key6": "5bbVeZ9eqYKpu3GaBs9VHGAfMnTboZcf2xYjAEc6kpVTGswibyXhH2yqDdqFgH1pB3etA4CMzRADEMTWFpqVWgE1",
  "key7": "6Rm5vxzqxENqv4DG3TBdRBboVpVstfPYXaoQE1hs3wptekzMhVM567PbxUSL7RsuFhk5KhbAKjj1y2VX2Bk9P4K",
  "key8": "2HNH4WnZhp7D1T82BT1yhfUJVNu1wYEXn9FY2f6NLYT9q8UqrNHZCSypVRy7t251BuT1t7w8g321tk1XWhRXzbNn",
  "key9": "4e4bQAdmwx6YftL8KWsDQysWjcHTB5DLmnyRDmB83iv63FZwjJthq9yZxs8dE4H7ehpnvdWnbPRV8pbffNrxN8Q6",
  "key10": "pXsoFQCSyU5qYaGQbd9xEXEsphSgacZe4jECN4mVoQ2HrzAb4DjtZrm5QvnPuigzL8gMS17NoSTTwE4m931pn5G",
  "key11": "3pCCQ1HEtmQbi3jDhqaoCrbdYE1RYrLkJ3hnYYV5qiAjg5ezgV9nAzh5Y6JMdoUPB1TurL6VHy6egzwnMJdhifG1",
  "key12": "4dEGs2g7MUqknK2SAahV6uh1GjFNmTJWyKA8Y3phvfgu5atTrk3f1xdKDZje1WDDm6eE7pMJpuWaQ7tQirEp9SvG",
  "key13": "51oUwoDHgp7UKoL8iJZNL4zNdxDfss2mmao7JaGe3VwQmKN4HKrxJirk4bfrm1gK8CbGKqP1adKmy5Zxz5mDe8o7",
  "key14": "4SkgRc1Ku6GeHoMAxbV7DTeAY9T8n9HLC2St3Aoz68hPAcEQwYAm2WME3MRQnT6BAKR2CuThf87NkDYCXhUunFgx",
  "key15": "4n8qvp5UqZidzRhbcn37otb4mfBJQuZyYByand7vaC9j4Qx53xtqdbGc6NZisYVW9y1utkGweCRTs7tC1vKW1FvC",
  "key16": "4Tc74smT8CiLEBG7qDXjzHqraaB6YcnMM8KfLjLQsEcpKiJrqd5iHvZ2X5JuTzmR3jPDEjUAkQwK7VmV1x1yncQQ",
  "key17": "3GHAUJGLcq7s1WcBY8vf8cjYPbBrpzCqDvtXMMtZz9Ko8g5Z9uAGxtywxcxqGK14pCCVsxvwhR44vwqFySpzC6YP",
  "key18": "2Q59LHecJNqEbrHUjKsXxq5hArGA6hA41xMraoubwX4gZtsRBSDGrDxj6QD6jAetTs9J37Jj2bbwww1Ub8z85A9H",
  "key19": "4v1TNfcarLuWFBW5nU6KcJowznm8kKUCDUJ5fkQivpW6cK6SZmRCAodx7qRYWHXnqB1Z71hEooN1Sn7izeadfNy1",
  "key20": "4GSGs8BFvtJjDjPugrGCzX35gVRDhwEsTa5c6B2msoTWSftqCN6xzEWqV4ckc3RfmaHjLWC1qogFQr3EBS2FomjH",
  "key21": "ZHoRXh2sVEp3wXjhgavCpsYh3SSxRc6unJSKx2yFDnfhRfjXoh7jSfTsQDAw56RzB1uBAe5byQKRiuH91sPtbxP",
  "key22": "jHrNYNRHDzEyRxBw4JSS65kaHQKehSgL54KQ25EdHwNRookyz9qg6ggdimzvWQHidXaYmzToUyNLM3bmkvxuCZN",
  "key23": "5fgTTDAJXrt2B7eGZNgePKvAcgTkaBG5DYZmzWiHpxbzzeCvuSkCQsrPKcChopeGikQFvjzmzcfiSsk6cftjwuin",
  "key24": "3VJDbBL2UhynMCHh9TKdA6kHQZsoCT7LHy3VMwUBpDM4ZQB3VopvvxpzVghasDtFJ93W5VDLmTrR14hBEGUahsmo",
  "key25": "5qYsUPYNFgEYrWaASB5mkeFJ2eEkpZV5WjaqXxwyiynWzDLYPFMan3WwqeMABRxAFookVmHQ89Zbwm2BEgji7ntJ",
  "key26": "24MNCVFeq34g7CbukJnki8dJrCeMAGT92VHpBZicW2Gzu6qqS1FAZMmgbKvNwPNEj3K1omN17N7tEdaP1GCcZoZj"
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
