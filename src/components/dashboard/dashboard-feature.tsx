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
    "3HLWosbm9QX4cQgqKbruSZYDvwi9P9sowiK82p7tNUngm5bywTkybZ96UBz1f386YU7Afde8c61FLGsHnTHtHSNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWw2ccRQwzNh3rniyPYZsQF2fVjpJN2aC7PnXSHH1iY1XgLUiDTDdimDgbK6fPLgRLfvd79oxyE2baS8dYPjvBQ",
  "key1": "8SG8JhxBxkvpXy1xZk2ngCpJYJQDyGTdE1o7VSw3oLGfBAT4Lubd1R5QYg25138AfQyg8CPSa2HETLT2cZy8Pf6",
  "key2": "3nTGG8HrRft9z9qzy4dijBHj71fAMHaBm4h8wze716jtDtYdVk3dK4SfLBG5vENwMXqefbDhdZFWeLMEFNGjWXtP",
  "key3": "5KjkAFmSXjq8kye4aQTvogHqHvuMnBZG8LRNv55gyB3ktese3N6pN2PWBxWjcoR6UcomRAAEbSbiqEwGD6VzRoHH",
  "key4": "23jk8gPwrf6Rffdqi525TrEcwJZmMZukq63ViAtAN2DuvxerjMYahNmf6SAVvFSCqXWYDbaHEmBbRY8tKM2gohza",
  "key5": "64zFFWDYvhCcKtcQgCaSTsU4FoCQLN9hyni9qJeKFXAaLbc1bV8SZsGqncaH2tr1kLjHQ6YX3GN9uXztukjJBaj2",
  "key6": "1JeRzfULP5SFYFp33pbuTgDGjL4MsysYbv9ttXYLGQqXsYtyaYSNo69FJasrDQWM5dDDT7iaYxH6zpMoLzFxvpS",
  "key7": "4mC7LQZ4XMhfzrzjQXH3BdwBgbsyMw9WARjZLDr4wAgjLPpwiMZz2daemN66yhQtGfUG19XWUyTi1x7ZLP9r2Ycr",
  "key8": "5sDDbPWtEM5hvyhPSXewCWqoBR9GAThSmDqC8BKdUmbWTdztjNNVUECPG26rFbkwrpTLJ7ePsCrE5FQfTDrRVToB",
  "key9": "5o5rc4UkXAnQxB2cgYf9dHVq26CwwvTU87ax6D7oqcrqZMhmcXNkrDYUkas2zGk7vh152d9qrj2nLLn8A5M21TSq",
  "key10": "4Rz7QsJtLLwKe9zW5uKuiqnvcL8S2UMNxMg5CxUMSrjriPTEWbeQnhKSw9JwhHyT7yhv7nLMqEcskW8tDgEmsgHi",
  "key11": "21ejeEErWGDPFDacjTr29EFPFAKEzLeLh6CPamNqY2hAFCzMhyYVaupP9ULjDAUHMxVyrNF9A3S14pzxkebHNLg6",
  "key12": "2cjegmAzEb6kxrGn4rmfpyq5iPmjFwRqaVDkbqpzf1doKwXQo12pPHz63GVKZmD9sJSiLvfGg5xT7pdKXUniNgia",
  "key13": "3jChDBapcca9ZoKShw4846yTjei4LwNEyuH3atpDS144nHp4bBWDRzfZfPMqdF6hyYAAXVPV19KNcJmFALmgPSPU",
  "key14": "5VPx98f1UDJHxvXguKzizzKaaHurbRYnPfo76JMW6XmcqDn9hXWfp6yx1VtTjmyFEEncTghpkQebPNdRMeC9QTF2",
  "key15": "5U2HPARALLUdHGt6PoVivTdF8VNVvgPHQ1GPZtbpFgWvEu5JUndVfML4EWW5W8YWbMBaZPkBxg8HfAUr7SmESB8a",
  "key16": "4bwJveRaoewSF3VQxKzaaqCik1ZA3js8YWhADHnKgFjiJrfzxFupSo5Aepd2oncX39tmLYGrEV1XjTo9PN39kGyk",
  "key17": "5ctw3obSW9yQYwdBmu5jYpRQunSWLpGKs2cbVjUrK1yVxXNCrw5S9rc3EAkFsk11EDhSA6iWTme3HMSMy71GuuNF",
  "key18": "5zjx16EnmEck2XtYj4JNtgfie5fUSj7wCU3wXt1tPdKttShx2VQtn72MANsfHPGC8C6EKwPtPgL6rh2Ux5BdaJRM",
  "key19": "5s4vijVxDJt75k55AzPRSLHZTR9guaS85X92M6pG8qf1MUA2np8542faZbvBLxMQpVHNGU1Gm2i8ge7Dogps7Ekj",
  "key20": "7sUgx7Y5X2Uz9Zmvy8DLLng8e6JuWWshUfRVKZEsAJ1FjDUZ1VoUvTVfKy2WfQVRXQSHujzCUEGmePpf1SwugHH",
  "key21": "mAQCBsXbRub2vQfugpgpD3tqMyUi9xEjRse1ZmmfeQXXbZgfeBFM6vAVk7wEwRVqo5Eq1117vG9pdmfV7A8awZW",
  "key22": "3KJEWaG4JawrJY9ySdzhuZPazY2c1yiDoUBHd8ZJgrzaPrLeUrsf1eGTd61eMtDYuNahyeyA56WhkY7Jj54Yukmj",
  "key23": "3Xe449Re58oAsvj8ruLcLdgEvMuHA8P3KPVrzsBmLTDkBdKKeiAqoUU2hcNwJkfo9NodbfdjE4F2BUfE9L2eEwTt",
  "key24": "3JsqmjZDp5yMNnimQ5JEQErxjDTWDjYQrPFkz8J7FZwKtoiFjPxHpVXe9Jw37xCydrxir1EzXvGxJA8Voq1xtpr8",
  "key25": "4jGeGrunBLUvz8osN38YUtNs6BDXW5vSnBPqbzjJqRYoNcyiLXCqrQD6AGpZ7KwVZtg2QHbv53bLfXkBU1oa2ogQ",
  "key26": "1Jx2AbUpoXC3h9X2kpPGK8UH71qiMTKdysMMvZ5xt8jwsrfGA3mpeS44wRZsntVHymnuNQX2JVpSPj4ew38T4Qn",
  "key27": "3Bvd6eTDjZXy1ZwqR6PGrv8KfxqkeWQ32Fo34ojvdbiL3kaaCVSe5unEDQtXLg7pGMNhc2idnY3M8W8BRqNT3iUy"
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
