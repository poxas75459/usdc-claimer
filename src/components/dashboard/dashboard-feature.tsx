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
    "45ZEgL1VKT5sWQSWEBDw9R1tCnSo9HQo77ngpQsNajqQqK4cH32Zq62MP8kZWePu6EaLVEEEeVwo1hQjjUUk5HpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5iCJN2siChr6Ukn2yzhqUerPiQ6ev37HPZ3i6zzZLZxMZhTRFw5yjZV5ehgdTZMqPLDxmL5aFvQLXjN3r6go6y",
  "key1": "5gStizuMsdfywnVXTQ3ZqKYF5uk3cpGEkwNdKR5w7BzYLMcowRUwWGGPaY4WqrK3kTTbum3uqETtbRLj5UoDtPui",
  "key2": "4V8sX2fEHBjtGt2eW16H4mhd13hNNxdieeSZmyJxH2AvjKdptjWTzNXGMzqUvM8bD8N31F21mAnBRvBrTtu41Vs8",
  "key3": "CBDpvuUW3Cn3obm2w39BTQB39UKMDsXNmcPUAQ2LSpQhmSU2R6XrgbuNtdmvxSeHgN6kQjSVvDfYoxazMLEYryg",
  "key4": "66GD6kmec3MHf2ZtDi6EthSmHkxuVPn1sL7eR8LcbjNXJyDpiULKmywXzHYAeQKSTKxAbxCiF2fkvRsNzh4nhs35",
  "key5": "4o7D5DArsiEn6EB78o3dDnGs9jHBxF6DH1wiT5QUAU1gvNgLyWmcGsjfmBpDf4Gspy6FQrNfkH8Df8EPp8uosp5d",
  "key6": "MmNZkccFTqed4EWtFUFBHNXmeGp4wnNENcVaTon3kutbbSYyiSN26h4fcSZ5oeQgMRphHac9b2ki7HJTJ5X7RLd",
  "key7": "4A6RnU3bgF19pD5iKPCSmo8FwaZXtDDez8tjpyWkhs2Vrf8rTfYqys4V9mmKYUs3XPC8sq6kej6kuYedr4mFrXjb",
  "key8": "4VvYUntrbjFRvJ6Byj6VewMoAtb6tZ3C6B5W1iYfTUr4vREEwZzM9R2Dmc8asai89RHF4uj6Uisstno9fJ58Mypk",
  "key9": "wMpHHUUWv93H1aoCsrUnJLtBLrvAX3cNNZNkdobPBUAje6NsLSmg5ojM8NVzWcveT5QHNcge9T6S1p54bU8PyVb",
  "key10": "25RiiTmxtyBoD2TX8DfrWUDyAcBuCR4GuB85v2doHAtnQsdp1mbyieSGuK7SdEGW2V32XvufGZB1DG65oN9CsyPc",
  "key11": "5dGrHgWWW85WiMfEQg6q7NausMZgDkZGDi8nxoDVdX8yPoZGdjs6jmQYiAdStXXpcECM9ARu2YCWUvfGtHeEoutf",
  "key12": "4Z4AQfAscGG2FNz857gSPzMT9T9392ZpWSRwnroV5YM1xAykKoRfaMB2B6on1AHdqkmh32BYkiZb19b3HiK4JzGH",
  "key13": "4xooax2QkNWijvdAtquTYzuKrbmqj4HoSEdt35vjNCPVkUw3WdwiWnt2i9pdw6CP2UmeMFA8kHqu3hmZoDR7ogfk",
  "key14": "4WejyLvriSbR1PU4iWdNeJHZRZBwNvexBKatSKYhzuCu94gJSiJkd9aVggMjsSQ5kx4RmRouRYxUt6uuFYpadsvu",
  "key15": "3UkgXjCXnuLqdt7YTyxTCiyUio2smHRuQDDUoSBAq811eVh7KzPuiBnPn9RoJVJxLMHZga8JmccgRWeov4jaaYjN",
  "key16": "3XVQmuoPzdCwodim1QbjmdtuecGpDi2JfwK5sdRv54JcCoUktRUteUtjpKZa6LqyDwpFUEzRRR4MRjt5d3UE15Xt",
  "key17": "3nUpRufE2oJ3HwEGNB5LRQ5Z498S7Pzbr5jc6reTp4uTB74ynreD2Lnutx2BTgvHT81o83doqwRTn8TzFsQG34PE",
  "key18": "2FBMu7VQh4SeeKMB1savm3HjfUs6Y8Y9qnpzKCEJL26f2rWX7mYmQxgL5yJc9M2hDDnY5MWzWqhR4SNS3jwJbTW8",
  "key19": "3zzpXk4QmbwcRxbUHxzjYUz4iJVJH3FWsap8eA4WdpJE6rwY5WWqw3Usbd15fqSoePQ6CciNPYuJPiazPMdAATV8",
  "key20": "3una7TKWYLi966MAN5Z17iYc7QKbjFGzNcHXk8B4Y2fSeKTk4N2iumnMoAu1LYF7fMd2B4G35ampiGDu9G6QVHY2",
  "key21": "2jc5egDsVq5LmRGKK6U6bxtdMoGuEhaEShNjjCGoXagVHsN2Jd9Z5ApNiSeqUHuUjC2HnPssh5ChqPWjwoHdCcRQ",
  "key22": "56hRDFuLkTSccr2Gm3Kvohe1QcfZ9ptdNhs8X6zB5YYdn4ipc1a3szfZ1SUbhcUAuPaEwAqfzbdFACZ2PpMVFB6L",
  "key23": "2z6kSwoEZUfUWRxf5uMmuX9J7X2geV4QrrRJF3zP1LoVsRZ29sLVqmbbm8qSmvd79VsDvPLqAPkECouSbTX9zEGL",
  "key24": "33wPgYKxJyecfXanHnomToTLByU9qKnn5Rh23bBc9KbVtKYaiL5btG9yMaDCcZcoSwSwUTuz9jMBP8L4rvwYDtrH",
  "key25": "W8k3eXjaoSADXjd6Qd29eCyeCQF8V1JkDNEpJXzgnCnZ2auxidHU2LXpX473Hwq4zAdiMavth9SRXena9yo7dyt",
  "key26": "3U9EqQi1g1dsjUpWRXdECqd1nCMaZJujEVPCMYSCjZ2MN6tgMDhd9L9EUgVruSgTLtAhEn8c4rG2daoXCja1fhsz",
  "key27": "4KFF9jbBVKCAy1LYz8DQYJEbAVGhaiRe8N2cJ3qZPWBTF4ecQMrpdwB7n1rBcz9aKskYhteg6X6wuzv5JVYEM8AP",
  "key28": "rLT2TYZquHpNH4XbhRDbPSUTAyQnN9QnKnnc9dPGVzS4useCD4BVdrrpkCrimLm6MAwwBYca6hWhjfwsotN5yLf",
  "key29": "3toby6EfLqeFd4kWCKudvAzcf3zNK6uszjdPamrzLwUxvSEfcQRnmmPTLbqiccyudfoP89di5cfX3E3iBmkMgpis",
  "key30": "2yFx7Q893AcfALaDxbLMyuYNCFZHLAmGYbwW6HyvjcfiMFXPbz5kw8adQ5rG8fKHk7iG1FhVxzAZ6aA3txB1tVU3",
  "key31": "2YsLrtW3bvsYJf8QEPCWoAViyhhfuvnDD127i49rsiH35Qtnbqq1n4PmHPPyqmZju8WR6XXnb3r285phPizLcf2f",
  "key32": "4P4yyCcvnXdD2yAHzY8YcqD3RiM7w6oZpE8Nto4GMCg3AKKMECKaKoHEhG2bqA6wvVptqhXJtQUWFCJ9VYeEvnYk",
  "key33": "4TAFYaSxLzeKsjdQRKVNQH8rToKqb1SMSfaUkaqs3Nb9Aa9TK7RCqaK7z5SNg9bYXi4d9f81zycyn3RKHF3cBvA4",
  "key34": "5jz5Acf6K7byujTi8Xdos9YkeJEEehYUpkqZfkXujRFKWsWFixAYCYgFtyxWo2uWRczD1d3MunttX5jHhy6NqzxG",
  "key35": "2j4gscuQWsr5foggiasgwVhdfX9f36Le1y2FmbjfbsCTzZSEwBqHNX6GUhHuzjQRuE9QGM7QswXeL3faxBfvJRKM",
  "key36": "4mpE1YwegtLoYqKPpjRtSvVW4WGA9jJoS7mNpSspUP4E4bx59jWtyDnZcep9LQct4rZv4PXxAgu8tF98pQnREGbe",
  "key37": "3sVs7pTaVwQX9KxF5AhQzFbu21yjDvJz2XfvKewNgu3yaHqxvSNuUyAe1oa3iaQrcBHU6idj16e73drGNmzP44Px",
  "key38": "4b8oMDmSwft6zFKruTyVYV7YbayzoY1domBP6QEhX4sehHHPFbxrJeYnJpjXWq7tPfsiDSs64iNTyRGkVwicKqVY"
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
