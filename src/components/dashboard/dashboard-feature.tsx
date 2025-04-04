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
    "5a4NdxjP1dNam8qDj5LkRTFYecESDbDhmfCEDFy2oubz6eJgPSkDCrvJhm6enAwFNt8Z8BsYK9bThzBdLWViaDeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UepS5yUBRBf4Grp1WxkCL7LEiFMMNXaYJ7anspcefkZ9xsLHX1ZAzsB8uXaq8SqhEbiFoqJbZQGUekFyRHFp23r",
  "key1": "2XXKTpjLJdVkpHqkDSysCGPY1CUTB5Pw9ivrMmRe2KspgA4Kp79PiAY8sLRD4YZdvW9nQHB3EB3XD3XUB3ci6wu1",
  "key2": "4EnkgyaD19ur1azYiqDdzpYhRdz1PdqMwXouw9pkdY8BvF6uNF2DPA8b7UooXPJ4VDQCzMg3sAivGHNTjkrEdy1G",
  "key3": "3foKEKxMVX68GCJdp8vmbQb9Ctov5P6GBA7FsjqCt9LZicP5j4d972LYBfR5MwkqZwdqEdht7HTkrF1jsuEa2SbW",
  "key4": "5eVyNNK5CunSjhYvuEwxacVHpJsueqFwYGz3XbrF5AwWkSQmvuTnPaqyGVryw9cr4gwGSPjdGgq3xmpybZTbkWED",
  "key5": "2ahYSAuxz4rB4AgVqx8JStgpVxusExuXXrZEXG5fy85qyNs61fkVYe4zMbzSV9Kw7NiNRAWpsjMHXrT1THmHnmpr",
  "key6": "3A2MZn8Da2P2b45GKU6sAn1DgWztxjffAKEfkpqETE5e9ZVwfRr6MqsVbnJV27pAAHwdYERAoHXps1mmAggL6amJ",
  "key7": "3p3uvwu22jGavpckrvsrx9WAHK5Nqtkcc5B1if9EaatvjAidGHorQfCfQc1L52RpFbn4AmmtCZqtQERjDANmEmW",
  "key8": "YAvDjaroZETcTDHZTKkS9oGvroHSovt1qq7cwEAqLFCejvmzBPYrNRCG7Z2s3Lh6qgTqBoYnrXWSFhCPvn6E7Zj",
  "key9": "52yiRMacNrVhbc762MdN17bLJkiHJTrKfjWnGQPzkwceFaFCriCAGj9ebQ4hsJSSaR7RChFxeXRiTxhBNk8g3JzR",
  "key10": "45bfjGMFwu64nrx138zeFpSzj73cDn2GmxhdDrqbSVgJqBCKnbLiHhbixx9xX9qj2WdmFSM47CmaaDtMfCJTfQnA",
  "key11": "5zLz2gxwkiEAtnh1ASq1ETmiNnr6hjFm7QDvYEF1mNbZHxbf577X7GFXZqs1rmCmu3xeBknWzDvPUtS2E4MzNQcX",
  "key12": "2iinpYY4QbQmuMEjQ44AAkLv35E1FdjehhgoyG2wua2LG2eHvXNJATAcTCedRpB5iMiAivsmKCLR76V1HzgwmV3c",
  "key13": "2dS6K8DE7MQwikJ2b9GnYr9FysiY6WfrawV619RknW5ewfP6CSiyZSJmQNEi89dRUpFYCf3ekgMgc4ThRrdyE4S2",
  "key14": "3TR8MTknVTQhyV3M2hvPCTeCAnHKZ276EfzALHENuMzW6Yb6JFaUVD9VnHCwshfUfuX29f7NFrfLZFpFQnbWiRvY",
  "key15": "55Nm7pM1shv5umJ6Ad3E6AwY1asSo8KzkppCYPM1HEA7UqLCxGxrJ1LriCFWJA7Y7HPWyJeuHJQ1WtoeueK1Lpaw",
  "key16": "4AFmkYHSm9dJHkV7Bsam983FwZp3EKWm1ZeMkdkRBeccibihYyaDecDBkTN71tz6HBc9VFkuPfQWsZV3Hce6WBwF",
  "key17": "5xg2JvwrACPDHBRghhzXEBfTTeBaJTs9Y47uGW14gEzfeA5oSxGkCYts69G5bPV32rreKP8Qosk1pRVG6fYbFgft",
  "key18": "44tB9TDj6tEhr2gK7YUSww6SwUAzGFMDLBmJgPP4ynsdTzWMbZVtYBiy7fA8SDW2r1zPKmb5RBZeEYNHm749CpyT",
  "key19": "3uN6nAi5ffySQcqHwQP11knAWupRRSHF6b91w5HNVT1hWeMz6DZXgVuTkZo98aWFn3gzFAGYB5sx2sgWJa6XKzcb",
  "key20": "49PKqs6XQfTkbpD3zJDqHg8J1GyHk9vcN89q7UmJAjH3vVEF56N7Jmtu3buTodU7YaHqhodA9rF3B5ffKFYD62cV",
  "key21": "536pJasvuURUcQWGAqgecbso1FsQntE31rDL1YhB3mkNRjYaQeKrwGdwssAeuZ5snY4Yi7qXfe4PGiaaNUU6Ckq7",
  "key22": "4zpd2ZC4wcBqjjtBGPKtu65r1acJfmmV1bBjG3dRubhGiCgaBoGiePeiGPsD4H81sSzvmmQPJXRifgfms8SGBcq3",
  "key23": "26yMEjEQbU6TFAQ7orZbiePQpLLQGysaqZGYP7jiRAJxg3WxNosjYq1kYSrHnpMHTpZEThSEc1NHzgC69cSANe21",
  "key24": "2jTBjFkV2QtoeDxYyUfivjfLgwPGwFZ9pDoAnj3kAb72zDei1jkaoiJcTDTMZ42MKjSkQBUKiqGgNcHcKNubBykj",
  "key25": "2LR3TdKzqeXGRQhzkmmGKk2LCfuXTJe1YxHruzvsqkwFuYKLE2pY4rhK8SWyMepTM4xLdC6Ga6ZRgE8r6B74cf9W",
  "key26": "H8KSM6PSKvaDhMnuN4jUgeX8ySPHv3yYyU46gSvt4zFZYZiPt6DbXvVBBCtTAJYa7WDF6zPMCSmre55AvVuu784",
  "key27": "5jAhHuRhWKH81eKwZACVzWjyUE81fiiFqp4T5bV2pcNpNWJdPvRrMaT3jiC7SkrhHG8wVXNzwT6cxDgztoDYMjnY",
  "key28": "2q8izYXBS6oPA6Ui7fS8doJVMxnbfsNrxq6sGBWd7Q1PBjbNKrtv4ayyHL7u4sJUcpwpRdGteqcawL2y87yYaDHa"
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
