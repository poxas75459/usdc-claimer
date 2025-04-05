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
    "5sMfFS8GKMNRsKyommEtLREjhkXRmsaxy1CfsndVog1L71RzHC6VpFjf4NUcSD1K2zDe2RMfXGjewWFm9ecUVQVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WSrXm2mSKwZCZ27DMiy9fW4w8ia6xytomum4dN52yfY1nfsENQQ24UuJVDTuesNjdSWft4dpozDaLKkQcz2UZ2N",
  "key1": "wASGbS5T1AkxpawTqoCaJ8AeAqNcnLfzAgnwyPUMcq1Udn8EuofK3YSDvkKBWmpa5oeerpH3xbFMwzTT1DbhC3e",
  "key2": "ki6weTQa6H9NEDjzXGwWeoYR9eSuhNvfkNAn652ETjgtFypxmBUVqdBLKpYmp9H6cSuzz66FZm39GXXc5CD1ajx",
  "key3": "4UoAWmoss3VH5pWX3BhkTLW5nL9vGkXD4MMdE2rXQhcvGi7b5Jj2N5ykzYob3A4GQbFXtfBipDELS6Myz1ZiiWfg",
  "key4": "2HZbGkKm7ZX8HTjUu6wk7vd68Pa51DJ8sf4KP5PxrdNPbnRjuscVUDPhufgVE3R7JUCDVxsWKPh9Pe3jm2RRBXoK",
  "key5": "4G7c14deQkkFQsUDLSQpTKpr9bgchcA9VLeRX725LcFe36nwEgEQY3ffkc4TTvgdYbcpCXSofnKUvzxjy6tvbqD4",
  "key6": "3gN9oYK86L7RFGvajZfGrLnFgRQW4G2Fa3dig5YmEK33J9DweEZtESWYLxiVKXP35FPWgFaoyCCBtCKBXNPzutVn",
  "key7": "5vcpKu41y8f1HB1BqTGSPJ5jnuwNpEVf9NXVGRJZeSbygAXxHd3QqALNB2wvY6rxsfXJmXLSrXvwyrc95PRkGHjC",
  "key8": "2PrwWnokk1CfaKGNvsX9tCT2UiVBrNgLsZ6qvrKE7UX7Wa82iT3PvByieWbasCE7FYXWjNF7v5twQbDrWpLfvCvj",
  "key9": "4tnXtp8iV1jZ4SvVXPTmJpNJrEhRD2EqT5za5FpLxWJ9Kgmxpuc6zbgBiMAXyn4wSS2qxwyTWPL3Hbsd5w4Deg8K",
  "key10": "4DLRpXHNP7Q7Hu8YFwW3MxYt8RrdkQqEWYMumu6sYeeK6SCcnZ9xKZfa5RjCUkUkj3oB8urm1JjmaefuZqhfDRcg",
  "key11": "2PMLViJJinHqaNqBnoxu63vkG1DzHjkMBE9XwapzedL49F5uadLF4ez1t8htDq1Jtrxz2p6PobSbSX7A8ndQepT1",
  "key12": "uhywq7rzhe8bKcxzWRUfQ3cvivTriJx39ctbdoNBVkEifPESAF2UoWVbqpvta14nTfXVzv2PUwouWAaFmX5Vopo",
  "key13": "5TD7jsVR5JddJR2NxMb8EgLXgGnVj1M6ge4qYNu3AiZNcKFgnNHQLc8oJLin5LAedniod3T5ojGCL6WvSUoEY8RY",
  "key14": "SWYpUnRBu517GTfnQ9dFh9DcjzvP19w8e1GrFQSWHN9RyjGCP1VLrmEjJ99urdkx7kG7fNYx2LWFV2gf6xjN5Db",
  "key15": "wXgqWdisohgY7bi3KNbmu9TdMbRdXYge2KHiios12KscYGBwVKKNkiQhqMdia2wYG7973v8VRU8sX5GF9L7YuwQ",
  "key16": "DyjVyTdNCPwCEHrk3iMCV8u4aYXJxu29LyYQAsRHdZMc59iKjo19sobyWYNUPzM3NoG2owE3pUrRyQ8Nz3XmiCy",
  "key17": "g1S7US4ndxwcqSWRDMuSi2rNCRLn83jdu9kK92wGngra4JXsdJTeqffsZRvewCNbp8Nv8Q97r4jYXzN75Rv4vxU",
  "key18": "T2dQNMrNj54ESAfiUPR35KG3hd1JJvMM9QJJEwKzp1xCxcjVgRhTct2DzyWSaCXZQqJ9r8yEyySTGAFEGVRdbx7",
  "key19": "5eWHXMecmmJYFa3jRmfHo2swNgLozFoLnjmuJKMWudoar4HQGE1a67KNBUd8uvsnwu33u77jrPascFfVQ8aDK2Gy",
  "key20": "5FwrwDnGshaD8DQMv85eW8Xd1ZVYsSg9CCDsFB96d9UvZBRA39j7KxmqbiSz9sPUibUKgkVQAsEFm9ai8sjcViP2",
  "key21": "32K8xU3qeWdHEXokEgragLnM3mtWxycdiaaiBSmjvfZFZqeG5Y2GGpcBoW2rFuWFrY27kEAJNXwKpejy1vzzcJef",
  "key22": "PHYxRS1NsN3kRbDLGFgU7McPPpVQBFCvnVNwgRVEDtZGVp7U7JriLAR7ZNjrPshPsharwU3vsKBiCSa4SvekENC",
  "key23": "2EXgc4TGq92e4JhBTyVURMGwRxEWNt5XUAzoZNEiT5njBjKw6UyYm4VEa7fCBPGHEoTeDo8BWogesUfUpzT7Cyc",
  "key24": "4hYBMBprsMDp8NYJL2WjkdfbDnK2w34hLVEe5Gtu3P8XpagMKzxkQegs6NXK8dmdTkyiXehoE5NNXz6d1sGSUDjk",
  "key25": "52ZM5zqt1NZvJqLi3mRhgwjKMiP2bBLRzSyXj7ovKPVfZDttoHkJk3hf5MwSjLjsjvMHnW3P1MxgUuxjxPrRz1fJ",
  "key26": "3y6vREk1pby4kgM4xVe9wkUGwzKy8676igNFTfL1R2G8DbwJRbqMnkVskzgEJCWd2f61hSdQ7cnjyrYVroZ7uK8r",
  "key27": "24uFE4gCwfXmNZqvor9NRtVD9qPUD8pWZbHuN1zkCdKa9E3pbi7byrHZrCUmELpQfZQk4Jr3bZG7d8b7P1Uhg5SS"
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
