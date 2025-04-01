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
    "jAsTMjo6ctxDnBV33h2MdbaWoBiPuUwYWvMmZCtd48NN8jZpv29WupLSdV37bE1tgXgqhx5wR8E8nyNzdWCnGbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45v5tdcr4fSW9h7xaFhnmHddhHcUE8SjE7Xq7ahvvtTTettR4kWdHNaWKWZVs39cDBHmPFm4ToD5sEaTu7DkQcKZ",
  "key1": "2ioMExpR8A4r5WdMczuNvLsvCzwgCBKbhwA2LEiQYXX6NwjFySAxfEi8cScAm2CzgWF5jemHaQCrPyhhd1mVTwyM",
  "key2": "eYJpkTotqnrpXrNmsp7vvfjFfsUE8X37TcudtCagGREkvcDkaJGbLieW7hao8YPB6XtJex7YaZENJLjWL3WtTBK",
  "key3": "3A57dxP2ttYFqc5EhZF1ZyxyJjRaQpRdxZj2wruWr1DduYgZwNvCtoXapHAmUiavwbLHg24urzjCcYUsaUStpFZT",
  "key4": "5AGfHqCe3DTrCEixG1FYX9f5dE8At1WtsF2JxPdagN6QktqGhdQU7g4nMXmaPJwtSdbiFiBvQNQtMYFin7VDkRBk",
  "key5": "5w9jwfuBHbiu5B7en4jWWi2szEdBtbB9C8HT9orEBptofu8UHLme24EBMMd4a4eaZuFBioKbpqPKPXqp3dtWyUB6",
  "key6": "4KfJAHejw4hukxZDAvknbwDpEZz8WKr16Cytix2uvYTuVgVNW12yeJLPLrCY31jdoDxyvcpRGjAo9zUrd27seLwG",
  "key7": "4ttEfrgEywqDvdkfTxB7GXNuTiHjNB55vg71FBZT2NV4uAoGdAeaqgVBZDL4XFzUphp6Q4vdYEDcgMy9JvnRphNd",
  "key8": "3tYHacE5d4FHZNs4cbwebWNHdn1ABhtxPPsYWUrFXLd8BSf87xQZkLeQ6VNfPo2AzX5BNoCih4zMir323iQDbeFY",
  "key9": "32LR4H18ujGsgXxykAwVt5MVdUnUoRt6UT2uPFvx1zvAQgfJDKXieYN5ZbL9s7fAKzE4Vi5nrdwXwfjYMNYeEeJX",
  "key10": "2SjVTE5uDhTN4XZXKLjxTzbw7bHnR2SnE1VwHwxyArPzmRsF3wKv8tefKPMGvSQNyqQoH7ohbCLxDb2ZfJAMnw7s",
  "key11": "5a2kJdufSzDA4ftLhRHQXwfNjNyrWeuSkBUUj1Jc1Mfzr3MUHQTY9Yq9nkRyYjoNAbBZDNBHsevU7pQ9gU1ydVDj",
  "key12": "5oiPTrgwEA4Y5dZYSP4DsusxxFaidot2F9DWmYqAfZVjSMErjbqp7og4ydTBh12XvNnb7o6heu7zKRZ8wRydbiSF",
  "key13": "GADdzB2UzbCNdr62Kvmg1hK19fWnmELxyxrpYRwtcX5ANFT9B5KuaFc8dNWqGuYXTr53ThxWKxU2T2gwFV1Wx3d",
  "key14": "9dprvUiSeyPRvPtqijyWxL5Bg9N8cRc7noimyAzkKGSEZ3JuNQRDfXmnhdtNM1kyVpNCGiFrjREG3cLE3Agz9Lr",
  "key15": "5gyRoUxrFGU6tZSDr3hPNehbzwWvbpMp5by2kFETffb2JuczDHYmugikWtMFwjowo2tUUb2q23Aid8GPjemcVeBF",
  "key16": "4UpUd7DA1rZF8LSfv5X2jofSUcJ1MxixEWZVnJrg1bEF2Q5pSeGTf3Jo7XB7as4weDG6wT2qN7ULfz7tG2C1oftQ",
  "key17": "2MSRcv4KWf5Pq7N2iTE16j4aHKuSekaLj8a5ybRcp22tQZmryY5M1utiGpnvVWpRoT37N4UmSM9EPu1FLZtQaVqG",
  "key18": "5aVtKkYdV23wLzmm3WyWMi9hiwERSkVMiB2Kgb3T18S7oU34y11uwmJH2eEFQna3KrkAbAq9Z4L95px421uRiBL5",
  "key19": "4tRZD5cAoKZoMQ6h6KMZXTXR2i3TxEc2ZHQ3jUJEQYGh7J7zHXYbiPBt76vTsRDdx3YNhh5RHH7b9jqyLfxYdynY",
  "key20": "5DhSdgg9LB922mdDX2hN9LmJqorRR62YJzZoE7Dpm7gSNsqVJgoHEzjvFCweGTYwhFB1TmNueFNwqs4S2RqQFCnR",
  "key21": "41qJcF1jvqFhPH1CtiL1dFVD7FJvv8jvS4jnxWomEU8HangW79biQUSQjPUPdyc3Qz19G3isjX26dueqpJD2ZLUw",
  "key22": "2wZc54PPWhWQVE43g3oztzsG9J95unUJZRV1TPW9eUYPJMsr95U1QrpziNMH7qjFkSGAVfpddueP7wLr5Stjhv6F",
  "key23": "3qZ78feMShWd5mW3yQc9ptZeKgakRpCDLG4C6EJEAhkw7nqmzX33mnWbWYnheum39HYuEfrdNyZtRUFge7oBLsUc",
  "key24": "2Lg1tQb51xCCAEu7ouVsRQ2EZxygQ62e8xwkvCdmqDaphFc7T1FHXB5GWawZXT5USdDGQGh1p5ZFQRuGVg8S19wD",
  "key25": "3Xgn4rjs2cXgygDWVWgkCevTgkXhfjMoeLRhVvpLbPCNA1ipW92e6J5K7qESbH1ozmVdjCSLNU19gjHZYbFfdQHd",
  "key26": "48MFmUeF5yPRaeqFj5T3ZxiaHZaHoAXYo4x9hYLgeQwuewBu4DJVSxAaE1jPqGDwWRY8QF3kFMd3YPwuyUMQ2Lyr",
  "key27": "4qhFZUG8vKfypZWccExLitUGmnZvTdPe9fGYmxoEdBuQEsyYAW6LhyTw7Z6GvuqBKV1KWB1qwe3fiHNPVFNqiZNr",
  "key28": "4PnDTvQijWRGWPsTmUVX5Pg6tvTN4ZMiJP2x6b6t2CQpBH9d3oYohk9VPDSbNAXz55C7r4GnxCDbKUHobeRQfTJ6",
  "key29": "2t1P2oXGozpLy3t1fQFSEfRWowrAVZmkWMBEUtSGHWcN3oKeLuSDHNRqJjc3yTP314L4fMBhAf3FG6gMn8WoSe9r",
  "key30": "4hwAMUumKsuUj6RvwGZYEdbkjYzypqvxWoQY5Ujih1ZBYjFgPthtn2M1qtSZfnqWzFZzxjDAv9SV9YumFvCthwaP",
  "key31": "JhJ1b8g4hpeirgQmtGaJSfq7zgUbF8eLmSisBRjvzhERRohkQJHdx9j8vEmZSJHMhwhgYCqFnTcaw55dsSpMvsf",
  "key32": "3KKQ611QXCDKNMX3u6EttkWNbkfMAwfhGrtSZD34qMPbdFosmq2fJPG7oQHXSMKHxqSuwcyqAFR6TQh7q8nqc8XE"
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
