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
    "2d3zchYQDmhmEkrpGK9EY6atnNpcB7CnBCLEkDZhqiEnewjjE7bsAD2MQjrDYVqzQHeyYkVYxr4rDxc7zrjY3h9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STB1sYbpiGvThzCPzudPqfvQXNqa6GuCE8m7CupWB6N9xvJXb59xknTQNSTCAKHwhoZKAgoYe28i3yzkjSPssP7",
  "key1": "4Qw6CnNJQ3f7nNY1cTRxqKWhuDsrec54P8im4L8zUyVdXgHayS1jksZyVuhrMZFpCNDJAqzWCvYApHJKnFhYDNjS",
  "key2": "2LCTmK6x7EsdtsrvyykStd6kMA7RfqrzTDmFXuCaHzWAKKfcAGjsog8bnf74xo64bu2pMKp1iRhtLWx7M7xWVS59",
  "key3": "4iJd7eUTk4kDVTGD8DbP4tur85P2pi2b4LrUqPoVMXTb5GGCxRFgzq2YBFnPe6etEsHY9oTkcoyrKD1zVUQ9c25Y",
  "key4": "3yw5UtoicMKnhNAPvSWckpjHpfDfpK7hU4qeEigHqz5XFFp3wAV9hNQvMikKz81NFj6kUuyzPzrEST9qM57F2xnH",
  "key5": "RvKbJD82WduvC2tKVr6MEVb7YffX5xLLRtyHZd6JB2joMepBp7MrehY61FRCUkDxnrUQx1JofCQ17uY7ApL6sHg",
  "key6": "2ggMe1YRq7KceAEH7VZeWQJibGiB1djK49WMK5Lnh2WGavfVHdmKhewmh4JQCh9tnK5YnPGV2Q2up21b3zyUYLSD",
  "key7": "3qp2wzkNyXowwjtHStNkdGK9XcRfeugodThvFBqckKxPvf6ibWFn1kVKwpGyLAsXFgmzFMf7voHCJ2QRXZFnVM1Z",
  "key8": "3e9YsYh1w2ctKxB83LAdK1gNYQRJTbcuowMr5dytFsDthoQ1dLykust73nCBRZwXTqMuBiC8FvnUfke6Cj6VU3JF",
  "key9": "51jie3v3JUaJMBL6wb8LWWg5VZ2gTBUnY6C31BqSBKg7nW95yDzpNAuGrQ1zXFQDmFbRwXcQwf4veNnJeWyii8ZF",
  "key10": "3pkX4Y7rnDNrRkfKcrviBq8FD4aJW5vS3LoBbHEBL2B1pSaJmSPUnwUkbJjuVRAsRtwzQNvNDvoPXJSsiKtZbEAc",
  "key11": "5Ufc6pivT6Y9f6meYTgMttWaVFNC4KdQyKgUsYdoakafKzphKYNZybXuwzSn63Sebvwpm4u2Zss6nazm5ZJRZanC",
  "key12": "TVV8DqEuAVactTNuEJsWHAJLRXimcaBEEq48JrHvCeGLC8u9XoSUBgVcu4c7reyvvaxPDjokmJiUuGQMEooMbC8",
  "key13": "tLMnc8qBFa3ATEW93zTNjLCoBX8v8tjPM78HF34h3bT8AuJmPnha6TohA9VKQyJzUfbc3HyuiUaLVu3prnJ9V6u",
  "key14": "68jovxQaAqhmJh5ZfT4vrd9cYRbsUS1WieJBxbF18No8cV5GkpbVSMsRpmbeJnGaUpMpDQ4HyiDM6WfK2vUqjJQ",
  "key15": "PbQZ4JyU9t3EnDcGtD38rQcuFhsNjofZHZeg2DMLVp83UAm1tsP6Gvsp2P1vXr22MZpXzHYFt6i1yDN8eEt1uGA",
  "key16": "49utug7MX8oeZ5VA2HCayKT5ojZCmsNN6gv8Fcj8QbXN5X7PDDjmLG7Wej1NNuUb7taq4fwBXiivqbVVCV8MKE8A",
  "key17": "4wQSuEtmypaA12w32Y1XGJXMD5yTWFqQjf1W58ghaMUMLDja5bPEc9mSKWfLMHx5x1nSjV79PdP23yLpL8ks2pYb",
  "key18": "KswDznigp5Pu4UskdfkBjFQcv5UUWqaBqX9jcRnYviy84kcMpSmcCBVA8xE7XnaVtdtEHJLDsK8zuhubHiwho8P",
  "key19": "5iDZB96sZ4mnnE1EXkLaQPFCoxhKufFDQyaDuoLVqXTLcqzs2fmXShSrrxAxXoXjvZfu313Vop57aY2sfHS61VEX",
  "key20": "4D2cK63h6Au8Ew7nMA6S5T3MVEdzMS8BFVTCwxAM71T4puVBF45tz3qQ1JqVHzfC1ukyQkmVtdqxVa6fXRcHh2bW",
  "key21": "3zwq3e8LJw3YcQdYPmhPQRYQZgzkqxbvPxYPT5uv58BbZoZb5ojU6LTsVp7x4C4sxiGNMpDJbh9KeX4zSzrzLpuL",
  "key22": "2HP4oASAAGyuB6nu2R1G8our1axoZqekV8kAcGsp1AoedjCpHxjfdffPrvk8cJrymfgsmuAUXGDM1RW5ugLwWbgj",
  "key23": "4qeRJAQwxRp53P7pkokiMJPhUKqxxSKRerUTVL7fEdmJtbbA1HfzGtmPTkBthmRKMHwoua9pLt9CTpaeJKULVEQt",
  "key24": "3MScHSydvd7N1a6t1TUCmHd4MqqqL4G2tXcUohNAi64N6H5j6D8hDNgK1XTBFFpvciMrSpzE2YhVSJLTB1qPZ8sr",
  "key25": "2xFAtzKSqaAWyp5fLYe7qrZQ7SzruL5XbBzn1HRZG3StdaBC5LLpNSSiYNh4QhZ4FjyLDEiByoh5So7uwwbB62GV",
  "key26": "4nYN66bvzhSQTEz1qY8RqZKht17sQppntkPkq12J7D7QWFmpf2QDZr64i2vHEP5CPmhsSdF52hcAkhxW5thYQVGf",
  "key27": "41yTLnxw455R6ZzVjkXMLgRRNDvnJWJwR2CkWQyskhEz1zhYcqkP8vxNfsdWUs7B7dhbk2ake31TqouAWSQks9EK",
  "key28": "5cPdYzQqZQkAR4uJrJL6n38avGtyAgVNbqDnXBmvJ2dAnZ6JsjkaPFDRVM2Ujry98QYBYZZUhLgsCFNdo8fU4t3g",
  "key29": "2YQyt3WF5FxFm2i3sUatjZo3jACNxjERens8qksritaBWDDLkk3MRhcFvAo819NM2T6Uy1HuEJw1g1bv9s4Q1kNS",
  "key30": "5LzaWREfFxbL42NXWqpW25Qu3UncrL2mRfkrGdr37Ui1Bnmpftjw3vfCaNLCAbZqfK39VYdTymj8Q23BvT9gWGpt",
  "key31": "2UmZknKbzQULP9gT88pL3UeugBidfYBUUSoUvd1FjCDejvLzF54s4DJtTaN3xZw4pKJ67tcEXof78oHeuCdoyhPT"
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
