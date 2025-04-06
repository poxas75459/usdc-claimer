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
    "432ukxXjpAjimxZiZXJcmtz8M74GrWgUvXPkdnKVhfV93tDiSqer9gC6qTTtPs3KjDzfM39N79TxH8Jeg4vCS6n6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyxhpSoeowULz1LLs73RhDqZcVQCEJEGsg7g6p56onnvBZsRVPGsqWf2dz37gQBesDknVic7f56aKmU5KT9j3LC",
  "key1": "3LS41yZPeGzbRDN5zrZ4mDQPiDLiBjRNub3nf5XxKEPx5op5o9XxeESzKNT7fjuzsLnUey42DkWEX6WBzibeXRKH",
  "key2": "3gvaLDKKSZVEZ1JFKByTkDrtL3S1ry8xzMeXpxvtxFpHNgjdX3p9pfGkf2ePz7vU4CzgjaB1Cc3SeGckuGHW3KU7",
  "key3": "2ez9Js4Cg6ttaRuawZDhezzsmgur4KNopVp1U4ueDnJnBTfbw5eA14UDtymVbZJX94v1vC7aWEiV9xVfA1VesE9E",
  "key4": "4zKJHLahRs2L2X8VmNEukPgd3ixwN34ehepiX9fPwCgaBY652c2BFFH9uVFCv8NTxESJukSLMRVF1mHYZHQdFP8j",
  "key5": "41ACmGZkqUe3h1D8AnVXfapgwuZUD22wN5nEbsQUNx5erBnQNru3LZRbhpvovZH4GkaGJ9oBLdLSujkWKm8nXtNs",
  "key6": "C72QYiV1EyYyMdnHa46zB983GdV5dgaDdUR2jro2YWEzYp4BATJe31HVfGiPT9DQvw85fFUy79NNtTNGNjpkdZc",
  "key7": "3yoVm9sXHLrQ4J87Dp6WwsrxLDQMxDDt5jxKFZnmyEgUB553szZ3R1tr32UqB5ps2hfyyYNNyteH8yxr9bngvmHg",
  "key8": "sWKmVDz7hpn5jAtm9ThsFxM14R7G2AWnCFT7NB1yQG5Fcs6ahHHRCEzUoYEMW6jXQudPH3qGiGFk338NawFGRKG",
  "key9": "EwKdBUyroP9JiZX1RcymBrsEktyRLCBZ59dNTbFvQnsVSTJ27vyMdZQbfrtz4PFq9sPRtwueuxPiURh584TSKsP",
  "key10": "9oCr7fFtzC4jncLrCJ6P5uDnQXkgZVPA1kfNJgZ2KPWeLwRioXiHgE9qKzFtCneC2zwcCc92sDEsLwRKfp3STuC",
  "key11": "2Dw5X1AwdbRaM49pYxjKuFKFeQ8Q8d4LRr2pp8H56KzynpTswMn3Lr2tbZn4CGxuDMZcFaqKy4jUjGsrbDHf82M9",
  "key12": "3FmrG3GW6kfJfxYsdQAo82yqwmvbA34BK45QLgEACYgbpYAnad3VpVF6hLTZa2Bc7Rd1qAkaFkiFxohCTtG2rCH5",
  "key13": "3PGgE3eLz13kcEmbSnZkhAMBGqb2153jnEKJJL43eSkyknUuFvjrT1Wr6kBaEijzFeGfyB4UujKuaT2j5KGDAg4d",
  "key14": "3Ge7iGHGRrAQcrf6pJU2YvrxW4Mm9av26J2Y9fPhyDfNJNU2yw5Q78xhmL8S7pcP4wJQEFBNDPY65GeajBYa1D8u",
  "key15": "48Jj9hm5Z1agFoPyNBvyY4RFVFV4mhnMYNcy47foSrFDwdqxC4P3FxdmxFnpLFzuwRKaUauf31oyXXZxxmPXwwsJ",
  "key16": "3bgkFmnAMobbaqV2b4Hp6uhJNue5hzt1Myq7dLnPfdTsCXyKZuecUr5geaGsF51GScty7Y9qNP3RFoVR8Dk4oG1e",
  "key17": "4GSnsyXPmYKUSBYC99H6RTnNyqQxNPTMqp988fj5FmJcqPL8XnYBydYKeigVNhSU2tJgKQ5YVxuoumRgfbXpgFBY",
  "key18": "WCuK4jYofXLcaYHH8yFYdnyc3PDc4gt9JdsgfmbZQRUAJpEKTWnUo33jDneCdvc7JVvrRaFRYoeoza4RR3djfwC",
  "key19": "4yoGn8HPUwZ1zXH3mDBRR1bewmSeyvtsVLV2b9Ht1KQyaPLzZgWy3Hrwh8qkSDmV3i8gxGdAhMYEHEk7zyiZWJdS",
  "key20": "4jfHF8RBZ9c8B2ykKN7s5u28VHdX3K1vNgHta4w4vJPT7QbKeEguhtjnd6X88MLqk4myjcKWf6yqu5gVQEPHBYZs",
  "key21": "53KyQrGSoPKbc6EJDDTVwa8WB4yQhBGEA7tCS8JtcQzU3iC4dwGo6EUxtCQxsXGukBeTKFqUcFuGZZQadrFZr927",
  "key22": "5epjKchE3wKev6rKeeJhZM5Esr4HFMQ4e3Af7mzFhyRMBcoo9QWYm3Ljoj9jvzM1nEWYF4TJSim8ECYDNRgcavnG",
  "key23": "4xFMZUmfgELmrrA85mArx4aKt5kHxsfLY1aJeN2fCLcy2qG1d6H35QtfAKGd7KSWJZY3LyNAeXcdaJ992SzP7661",
  "key24": "65mUWx992tuNVANND7RiYCH8ZojoHx8kbEcE6MdxPLbh3RNoZGzMt5mr6SRSGoAEh8jMbrMfjhS4yYVF6cREcAEj",
  "key25": "3jMAHTeUhLj1dhdUWpy3MGDSTKrohdaATuLEVSTrGKsq6HzW63nMQaPbELKZmNtLysBkjy7dNpp4W7kGBpLSRYHi",
  "key26": "67nKr4PfZpPVtq7m3rndW3tFFrQVcNRtogUBQ9EoGHWkZfohg6bdnyozBmqKBZQHz1EH2AuTxtX927Ro3H2V5Pk4",
  "key27": "2dS5cL4raa6PS68HFGU14BGHseWHJRggm2QM2UUvraH8DoyH7L5N6orjF47AsbTebFigfJgxmdUGtKJbUQtWucm5",
  "key28": "5arHaVEvzjVXjZ8kZ8YZzUdW2Uxjd3wYhHpD2roUeqXhZE8kMJ9xgbAAWNCwdx8AvBfbwvsk3XyzJ9cVGQPir9DW",
  "key29": "3j4RypHtJxvagExBpYdmwWsCxpzXXBH2r846hYQQmtHdjQDeRD6NaRaeVFdhwg4voMasR26NFZ97qSiVm2yHo9Gs",
  "key30": "65rU9XY3sCH3zJcXBVGZF5WErmgRSycH4mg8zJwjgYZwruWamzimqFDk9J1Js5QRG5cr5cTMQKUzCimXhXQjo1QT",
  "key31": "gAj8PiVdPY1ui7UWNZMvAxWv3e8kuaK2Q4wucmvrWA1vdsPbNL5DmVUqShyPRUh2Y9DeCaAqdNoeYa7eafz2trJ",
  "key32": "2JZ3RELnCXNo2CXpWCDV6mS9rUsSNY4NzhJCNKx2ZcqNrEur2Lr1YUKe68p7o1VNdvn2vstdvyKuSo35xRjbwgeN",
  "key33": "3sQf8UvzRyQnatmxtYki4qYWVa7Hk9EHnSZzgx2ZBVUyoT3jd5CAdRWvrVC3sPToT9WjfGR2eG3nsFNKQdqRpXA4",
  "key34": "4q6GgvPXYcUkZSWZpzEBHuCgYwvF3aPiwNaotXb2TdrTLkuK15tKYPpgYPxDYPYo3RrzKzzTKqQYXLqSgB7f1b51",
  "key35": "5MYntXdwQafU8VWaFQEd4rXUrvFa9rxqrTTjLoUUFUijmyGZc93qRvTKLywSXLqEG2zrT8V21hLTNvoFucW49Can",
  "key36": "3U6RUSV56qVQFABLZNNADwLqd6LBUNdg52RaZqgbQNFFFhqixZfLrSQ4TvoT1aucxKts69g9yxBnALAnhhoc8fF8",
  "key37": "3QTBQo8B1Gj3xTBeXjfc3wKEwrmhD72DLxCDXkJp3WS5vf7fiFr9HyQp4ADHAY4REoprZ7DudMerjrtTUdGcBgxg",
  "key38": "27g5MXZfH89fFQMMB7s71FBEEQe7AXztNPYha5SFAWxrnieRoDtwMov34RnAJzo9f1xfY3SEs8Hgjd7st6mmLHze",
  "key39": "zvvoKEEZjZSuw1qFTqS1sjKhJJ5zseVzkXQbUoFUkqHY5WcStcfKvzSDnsJmGEj84ZSqR3kU2SK91J1VdHZuyxz",
  "key40": "mXTos7TQx55rm9xvPoZDmawBzjRuL4McHLggVYbgXwdWKyXs6TVPpUcE2ZDBv48mn7jLJ7cKiu6vDBUFgaxiVqq",
  "key41": "5hWE7XLVftKXQDEq4S1fteojyr6nSKq8AnCvSrnFYdUDYz12FndVYmzDNrg7q9SePFk1wFffdnWLnbEo1JbPEUCG",
  "key42": "5KHAQd43yCKKDiFufm2XcW6NxEBF6YW5CqJKRgBZ81R1RrXzv7E4MkoiNZuKDbVJBX8MhkXDBKxE31EFCz7LCreY"
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
