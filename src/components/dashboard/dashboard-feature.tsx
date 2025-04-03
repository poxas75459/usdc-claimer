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
    "3KT1rwFv3KzB1S6sWgitLSsnjZa3T62u7gP7bGLCVe8gCkq2gUQZzUgMivDpo9KHMDJLHnjkVGJxLhQSEDexAvG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nR1p1pUh77sUeRyRwvpotS6SdcKs5RUqAUhfxprMGm8j6BGaFQhrS77hrUbnXMQ3LRLz5TZhGnah56ufkWFupoz",
  "key1": "5ZhSMoyXfLAQwoKjtS9436SKQk4RrAPvQdAGBfvghJ5LJxtNkzNrLVzseEztW8jnWUZPARirdgCRDUvJTcuniBNP",
  "key2": "3MYHo4F9tgvrG8598i5Z5tBWPgsEdP7Ek5mSFzvexzNyruF6Ffzohw3PcinqrFsBQBSSPRgNRW4x7mTQoxbvtwew",
  "key3": "5BuuW4mFi4FXh4NQ5sHnPQ4BYPJV4MDR7PWG95cLHTVfBCwQi44AdHTdsy884jYeEcyYHjKZ7K7couTupVEP5v8w",
  "key4": "5GdvFNoodkyhSPHZbyxdfjA3ie9KZSxrNbP2tghWjV65pFfMSiXye39eNJqMuXDAzoAkon5qa7d56hV282H9HZks",
  "key5": "4Qs12ikPxsQmkE42ZT7fwHvhB21YjiG9xy36bzjYrnAjo6yDx56qbgY6rNZ3MFrkkQmxn9sjsk37saR41UEDw8CJ",
  "key6": "35kSg6rZkAoswE5wbgQNBCXSsy9trf7Ttw6Y2hRgtNtxY3wZKmwBSxk3zfPq9GSEKLAKDNBhuYttPRtFKdkniC9w",
  "key7": "3JBkh7SJzuKAGQ8SQe3xsRMugG5i4xh44gCba4jS9rmymsfzhU2A9BaEQTF8qbaB3NFWSSgFYP2mabX5u5Lb5mUm",
  "key8": "2t1tDDokGoXdMuxFN49ERydKwy9VNWaP1V76mvL1UyaaTVkTPBRf4CLUkzPHzGRmoyUckwVbfrTmbgSANeZn1tDS",
  "key9": "3NX8tXt6AuhgJugVSfDjBFes2S4SVXnKiszpXZjbpfEMcnEieQqFC7Xe3Mke51o17oF2Xtyww4nuYuUVVv3NeYav",
  "key10": "28TpQFBfdQxoHWrM8dp3Ax8k8CWXXzqtzJP3Ppctc5wiu74V9GYiFcKS4MXSPJe4wEAyyBH9zpbQw2ThepASEiSc",
  "key11": "ZxRP4qe6Rg3iEhqGtpovowfQpLcvYbdGK5Se8yr9mbzgcpzibVySzqrQ195g8W1NKzQnMWBZdUeuwwpLvdydQUr",
  "key12": "3dJJsYofvo5odQ8SrEqGhmWZZ4fg9YAXbS5SRDtL1dnSk3cb27MvGX8H8cP8YymxoRo97EEq4t57E1f1v11YbqgE",
  "key13": "5B9WQYJs6u8DZCnnFHorD4dbuFZDiboB4syWSe2tnU7gsupciemKb2wfZuuhqpwFCR48Qk7H5X83qP5fzpgobinQ",
  "key14": "2AdEf88haMYyiwesLpp8BFS4TZG1iFNvGoWB6gJuL9Kn2c5LjNZPq8Pk8cdApcbnQFy77qcDjEnyeeAsNcNpYEpy",
  "key15": "5VvKdanAtR5FhZVJwKPqTSWQ3ZtmH3iN9CEpwWFqh4e21yrjDkEVsY522h1C4D2jJSRbs2s9JsR8rhpz9qcndBPc",
  "key16": "5smwvPatd54SSfbKEk9grkZvhPcvTCAQWzsyNijZech5Zi45AzeQyupqj5JhDxyuXAByRqdn9Lk7obL1c75897gT",
  "key17": "2yUyiBf5ts8UeRwpVDQ4cZxXaRrRz7MUo1AUT9YQqpSgbYwAgMfHoEPeQh6Hi3etj2yEaiNRoFsb2PWzkLv2r72t",
  "key18": "cjC77S2viGFEtuviM3DGoR6p9sMDn9hWwiCBUhd3WMakGwQxZA6YgT5NJzunJ6TkDaYAGhfVHhGdkDrnA36k3y2",
  "key19": "2QXDyoSX65KBznyPbjvoccUURLj6utm64GX96ddcEYrx12ioCkbsZQo4kydndRyGpP7jkXN651UoMYhmZ3zdLD5V",
  "key20": "2ShgZY877cBoWy7BRZtHtqSLan954ppmftdRmRRFejpRFAM55a9BuqNp4AmDg2cJWYKXCaGkMBFLwH9cx3hhHv7v",
  "key21": "3Z2w7Q5iB3sQfAtMosX3aMibivXAYzGRKXXViDJVbDM2FGhJ5w6ayKvEwAhfWUCif1NE6CFdKgCKeD4E2o72XbFt",
  "key22": "2NRAp38ZHUC36wW5yz2dskRP1K49D42W5kiW2KgX7ZfMYK8qYgDe7GhxY2pFJjnA3EDnkJEqceayxEVDTN2uKhg5",
  "key23": "gFNdrUyzTwMKQZKPUE2eZSXAsuin2meHGC6trXkBGGy1FEa36pivno6WccFkdFmTFEkcPzoa8LWMkjeqrHm8gyC",
  "key24": "3mV9PJK8nhRygWVCf7mjYpSM6rqCZmdjTcHCeRdDz3WaWP7M8BbyrNmNUovj9m4J6iEMkE2SvKKU63CCU5RXmz9v",
  "key25": "i8Aiufwwx1saTdHDGkqTfJDJmLCoCszGuWgmErZ2PvQSE86ts5JpvV6VLX5CuWhmUUw9VAHH13Ab5s7vTpyC3hv"
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
