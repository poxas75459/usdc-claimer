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
    "5CwKdFV9o9WExe1Hz3tfimkLapQjzaccX9Yow1Up5Nzco2h1MbGyo5bzDwe6ko1eswBgw2nzAQbnd2SAWT4MZHjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AU1fakxWHrybUuN4oAPPbjy5eaoCEW6TCqvBK6KmodjEaMvMazocNYQ7Rtu3kmsh2NP9j5rdP8H8xqAjvamsica",
  "key1": "22Jf7xAoDrdJidk8oKvURU2H8Pa1gZJE1vnXr8AqPdKhdnBEBamuSxJrDQM2cspEzXmdMDQqQpwmYWJrFezZbDiX",
  "key2": "5zyCp4itsmqnn2UzPv431cjBRNtBLxz2YsgZU5R7MR4N2Pnt54VzmtVYKsxRk1UxskrJq5F37S25EWs17CLwRuut",
  "key3": "3qT8pgcuEQVrwxtwJDk8UpkbLPobHx6b4ZTUz94z8V5LvV6E32W66LwSVuCepjHjrdj9eFU6gwCtxcmQredz7Dcj",
  "key4": "4yDbhnmCtqkvS5uMyTHbuWm9JqZDLct5DAWZKRJyXrD8PdHv6McC4mpD7YWF48vVNg1G3DcFDk3aSjWYhJL6em3i",
  "key5": "27pmJvVJdANXLvay9ExuW73TmUdvd27oF9XLaAywqrJhorEW9KTi8mWqUJMnWLppdBd8vUF99QrvveaVXeCEnWQZ",
  "key6": "g51FWTRNzqD5rD68oTF3oGsPFARZ7AXbPndSoAsXNgJmyVSZCNiTe4TThtQ62VBXHv9vFaX2JBx7YnAt3dabPSE",
  "key7": "3GWVfoWzUe6nh1CEpHoUZZJKW8p1URMkrS6MKPWixCjKyvEPVJmjb5jERv8LXsZk4D4C3SCxyRPCMPfQZEuARkGu",
  "key8": "2MmvS96sMDUjYF6LxfdACUXa85DqZgtnBs4u3JFLW3Ws4paUDpL6wq7cfMHk1a38hGjy4f6Tk7kCudiHjjpX53gr",
  "key9": "4Mvm46sUw5RV1za3cge9HQEdbiEeNKHp52EXZP6rVwaXdPhWXPeyGJw3KXXoPjq8emXgtJcbvUmEetRGXZ23Mv9F",
  "key10": "3BmW3iSe3UCBNqZ7oM8T2eZXxXDBSVLmwhJU9bT2zMpajWrWhQuzRXp989ipf5iXqkctMX3sfZVqYtEVqMFHSzR4",
  "key11": "2prZjnfMakXGpweniZsT8nouviGPkK5U8v4rH9RxdAmDq3J9o6As9cEs6J84EdBr95henn9JAdr171SxqSqhrSL2",
  "key12": "fqBSK3pm528TtxzHHBz6pabDUXSRKFX5GJVjhzag1UT6g7yZiKnsuyfQ2TqMRtaqDR6zKbMBnmDPMm9PPF558Pm",
  "key13": "33Y5CxwWCQv4RkTnLVwgoS7bb9VzAxxyqZCvjKG4o9GZaGGPsVzcgynHoY3q7m7RiV7mANye6PRCyPRjbsY4yczs",
  "key14": "fNWiNTz9X3MiohxmHiBTBknwBbiMBpgJZE63o4MKurmEKAVoFZ8XmS4LYCciwxRQwkvyfWTTPXPaN16fbKNmzw3",
  "key15": "GQYjTn8956pYk7P32Z3QtkPW4amKf5LF4U8mkDeEWX79k6zMNqGeCZq3uttFzCBUCv3C3YWQdfXT981Ca36VSY2",
  "key16": "2RJq7rFdMjNd2AxdjWmTMb67SJyM82KHjSCVqTNs7ERcu3DjvdFbL6WNsGdLjrNGJjmKz177v7fesSoDYmhC3YCr",
  "key17": "YP2iMFdHaN7q1of8dPSn1kJHFd58f5gWFSJFVQcHtbZsryRU9zS6BncBAWtEZLC5qQAQAUdoB76dADxMxxHZC8m",
  "key18": "4uYBtoLXQZFFgETVc8974Hhmr89kzM1rcWvLABdiCnh3jKBeHTFJuAeVpTZ2F9YKkjeLvWwLzersbSJfGXmSczqH",
  "key19": "3hXaPwJdw8df91sNvVrh5JKzUJjpGh1s8royq5yi2oJDv3wKz6WdrPUabnFc5ZDH4HiPguXaLUmsAgT8JEvZyGWY",
  "key20": "t4mG2CVXCvDHJdsi64EojTR2YZSEhBTia1ThkyeDNKEYsygbr4hRqxYyeSvh6hfkgFu7B8tnvPmvfdkXz3uWwQv",
  "key21": "4cb9QPZS9cWjwmP7qdH8LsJe6JGAfVigiuXo8mBMbB8ynNCYcoYRmwVAEvaNpvDKNx5jC8gHmEtLVJx1EUqk3fiU",
  "key22": "RgX9L9vx1gTFEDUbbzaWKJog5aFv6JVYUqJHXsDapPuDKWGtrjUNZ2BN713p2zNAp932soXuvfmy5pjTbHn1LZX",
  "key23": "5Ka6iWpjKaT4Y7eoXta3qWspHH92aNTAXudChgBdxVNMGwdgcjhzhjwopkbZMirVyn2WdeqsqLkFq1uSbNHYPKfb",
  "key24": "3ipKJbWXUYCcNY8vqvxVEoWBMHrFboScux8Hspea5s4a4oFXMktPAWWtDyLAe5LML4oW6eZkAdLkWbD8QthBBKh1",
  "key25": "yHRRDe8kMHHGA7SuJddgqs8SaWRgzwGsTni7PC8km8oynrYL6yqnVWQfUBU4LQfEpbYiz2EGNiaAHuKhUWAbcfG"
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
