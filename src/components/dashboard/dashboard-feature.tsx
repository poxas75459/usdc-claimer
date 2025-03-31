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
    "317KRdphk4V7itp4eSNmPFHbX2X4gCabFH5hhUQyjXuUGTrAkgFZCATe25PeEPnECdYFGzy5CP3aktQmxWzugwNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxtikUApSuVw3xjXN3c2m4GjZ1p67PdMMctze346UnPzARbVZyNfHexdx67Nufbdm69aWWGVEJh5MToJhCUGT8V",
  "key1": "a4f35VFnt4QqfAGo3MJRUqGcrGNWtmQWEMjQrusRxaLTK9cSEv6B8n2yT1CWZYJB7xsDQz1BxCfmc9MnLY94sti",
  "key2": "BrD6kLte3jue4RY2KFRpM4ZDB2c3npbNLVBYkETZwTjzan2qS19HPxiT9gaToVEYoCpXyHB2GAbBxrpu8F3G815",
  "key3": "35KKbAchn9iZBe6Zi9eAXGYzeqMtBPaUd6dENUPQEhRzNZ4Ux153SJH6S41YTenh41cM86WXd1m14jTH9PLaEXiA",
  "key4": "4CwkeZKyADatmscY3WMGcDxiUKb8crytSHbiaQvLof8xJsneisAy65eFQiycWdoYYwD5CfmxBzZ7QxxhT42iE3CN",
  "key5": "TdiqSx8EnMmBeeCDzt6Q5GqCfp1QrBgdHN7PXvBJoWCDPCnwnWDVK2BhLJ7yLG1xdrjxHofq5N8zpFEhQKWutpG",
  "key6": "5qNPjHz5qXeRFQsuWrJVzjWnLM6wvuVbRjv1HnZ41LH3nxiocUEe6ZTaHMatpxU3BWmYWafBc3TccEibJjrzSwRR",
  "key7": "MXJWCQcAoxhfXtQrP9sgAEVg3crsr1huRXPF3e3eorG1pyJF4pWrbkcMx5cRJVptwRZGcM6bLPAXAhUkxJq34se",
  "key8": "51ugd1Vmpt1i5qRnshKw7UBqepVkcwjWiRQ3Niz46t5jXwGYDDvXp5HdgqSb3RjWHaWQjpzfqgybsqYTKN7JCVZ9",
  "key9": "3HAvBwKnPt12Q34F64arqy2zwHcm8K1nmvSuYbYzdF4EmaFHzM8hBsiwQWGDauP1YZfFJyoSr8erhbj2TGCeWJg7",
  "key10": "ao3J3rxj4XHPjxCjmY4TnfBSX9jwf7R5eLDVr1q88CVAbPMFNs3ELNMBPykqhBfbVjcjs9XiFRu62k7zEKMxwEk",
  "key11": "xvEJV6oi5MZUeA6nuixihvP7jExCCtRJpm4peGrHMHbWsa6Vpuc8DwxKSy2wn3iMwgds6nD5vTCXa9SM3BjRM8Q",
  "key12": "Pcrg4AwZAVTWE8Ry3ju3XbQ7GKbEuT7BUuCjThihFQL2VdzW1vTBwGHvuFNw1F4KRufSbJ4ucsMTS6fETwgbpAs",
  "key13": "53BmYavweiGoqgDu9Cf5rYVS42L5DPyYembpbk5EW9uw4evUX6wDs6Lmusr2nUg95ZuxB6BHidEdor9w8tpLhcUP",
  "key14": "3HjzmH1cV3zanHHuzU2FkXGTpSpPUy5QFNUWPKiGBZFoNh9tYewiXk5564EWPtWJEbzVKx3L52nQHg72zjVkWUAX",
  "key15": "PiwokeosyfYSHU6LBxYMdiDFrwvKqAvpcA1B1wksCycMZEwspeJL5QwsNPYkHaYfMa2tXNtink1nmmp7gK8cad9",
  "key16": "4XdWZtvWEAu66HBkLebmg1jtRVaWQ6S4obH349PdGzFJfgSuYJCyKJqkXRzJxKhVv26M6EfmaSwvNtsxhKvTQSLE",
  "key17": "S2uFoCR1s4iiMSbfXE8gqgpHz1q989nZGDXS9yfjhVYaELFYj3QRjfDQwxvP86i3cYnaMfGo6tDC8cwT9S5bMMo",
  "key18": "4xvWYBB8s3c6ro1juPAhJM2h1fXqd3yxf7mwonck1RMdKRNFcc38pXU2pprRgEXiDz7LtdJhwYZ7Y6LNF5rNW78S",
  "key19": "2mjAx1abFc8FhwP4jgKucsqTLedxfrPt5UwEcX57A1k2t7rgeyBm3MAv6DCjWqmd7ggf9eMSzyxKqfMvGNDPJA3E",
  "key20": "4DwHZdckbNPeycPT5BxHAt5eyTkLXwhmradd82TztAFLKUThmtjsmLdWyjxY6m2VXfWZJXd9EXuDDB2dKRhjw29J",
  "key21": "SNPJFUutnzS1AZK5JfXfXXf6qKYoXZff8B6ige9cGVhJzoYQxnTiPPEAqpfSq7X2mtXBxxRJqnQyx6YWeF617Ro",
  "key22": "5zcWBiFDNSssBN4ayyMDBP8qnCbGxQffPAzkVu3eucj58732rWnmjuH84ZWBYsttjoXq8pASK7U3SLrcfMQtaeyt",
  "key23": "2Kr7n67VUbB7dqFRVjWiXmPPmF6FxMeMsF4mgjnoGAuT3oGs3j2guD7UzK2N6AtgxhKfKEEux9sxtJc23N4ft79j",
  "key24": "2kcqCBHPTM96iJqgxgW7YJMLSf8KV7iPU9c7kCAvHvpb3HDqki4nQ5oAnW98PkGcT1XPaNbN2yNzwFQnJMw7ADRE",
  "key25": "4TCSmcukApuRcrTnrXMzbZ8NPoXQkEVgZ2fAPLZHmw2mbBBPhfwcHdPMLaSo2nawvc2yFBAqnQzpMhsummHi2WwR",
  "key26": "5DoJzNsx38u7ViwwSZRqySt16k3PHbiShKvJZ9oiTkiWAexjeCV7nBCA4goERZCPh8YFVL151duUzsEo573zPmpi",
  "key27": "2giWEgXKfXG2wWHDf7mi29LhiekYts5gJ8BR2UP8HEdn5dTqEnJKXa7sAMEDzZ35HtmADEkxthsMVwodxbFJLm9r",
  "key28": "5xe1QdYS3bTQxg9cw5cHR5Lm6VKThvMmNxWzM2FW2mbxfyHkxqBZRxe7svWag7ypqUAF9XNKbshgj2iPCdNxzsBg",
  "key29": "36SaTU8KEn9qBnMGi1p9iCWZVdLXzgiJo5SyAm6E5ZjgiSLm14GCvzPo2tpirTBBbWd6xrgj8rLZDyrsmETz3Y5x",
  "key30": "TYGvf3KWpEnPWSkVAtnjvSithGfgzVrwEK1dHbphijWC6ZtF7Zh7cnkk36Ha94zwZUMwdu8RMUvw44s27LJdUMH",
  "key31": "18ph1ZCTixSnaYQykeTRPgKHeRYsrcwdLY8X12826MQbxxwe5YaZ2EEpTLymoat1MYUzhRuyMef43t8pHtJJiEh",
  "key32": "5AzGP63fDe9XzLvyC9evNF2X7WjccHBtzgJhFJ6iJnFzofuxhWosY69idAfHKN24yeo1PDvhKvWv77FTB75uLaGX",
  "key33": "2CquXdMHVKRVZ9j1yZSR15Ww37k88dMD9cJrWzhharjJa3qMbriRf5QQyaxrwyAg5en3ExNzbkkDH8iqeRMiXYoy",
  "key34": "66sdVa5SJx8oeZrWytWHzbDHR34zUWFB1a169Bm1v4hu4uzszqpy9DRpD3cSoFdNpqy2eR42QwnaVtkuKhJ6L3gN",
  "key35": "47KV4pkpYL7UDmGbmEmVBW1YvrymjKB9iJLJGNdbfoanAPdCMYXzSwc47EuPjJ6LhZMD8QhDZWzXFmBECpFHTsgd",
  "key36": "5bh6KZFm18LcuXViQzdbotDQ8akVpC8WiEd4DQ8Gr9YTcvpkLDnYHjHCrjb4cERR6G9kBx6VWTC3aSb8dcoWF4Ly",
  "key37": "5rUwTpE4ub6At8Rq9hYcrZSLokRA6ThnUNMpSd7tB3ggtVKXmT71d6eRTFUbeZ6Ut6c6AKSFCthWzpyo6uVn628d",
  "key38": "5yobA1ozMCpXGU8C3sVB2a2csDpBt3bq3MjaFCMHzHyzGs3dEgJdTXiLmiYAKvkFpRiL92mcYzHYKvoUK447BU4e",
  "key39": "541LxuTP9vBdLrdykoDL4PQUmsTNgVNbw9ijW1m5y5d8sWK2EttrN8jaMNmpgoMHP6jnKEpkFJrWbX4EgRigYbwb",
  "key40": "5tzSyDtj6heUJQrsyCpi8DbZCpkhtK4XNKJnbRFS6aTdDB3XsvyzPCc7RVtdRWnUaJELwBGbX2RCzpKCQKaZdpDf",
  "key41": "28toDX21on6WyVJp46QCPtFqedyaFUxnfCcqeZBhEz5W1JyJ6M6Zsy1Y145ezUZrhaHWrNbuN2oep3aYLzXpkqb8",
  "key42": "4oU8T1hDybgb5E1g4QbGV88fy2fY8K9TZB2cwAWKBhk9PSqxt6Jm6iX9hSibtkgfjHfLsFU3Bu86G3qbv95hG8gZ",
  "key43": "659v21gx889ctpyqRfPjmfq3ezVdu5iqbPC7moYiWHhUhnKr2LFQQLtn5h6diz8zH78rN1tnJY4HzZPJdnxFrCA"
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
