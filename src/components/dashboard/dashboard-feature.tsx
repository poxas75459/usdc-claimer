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
    "61aYW8wpbVoGBE2Cvh4Zp7iFBuqJQepciXANfkea8QQP9agiMogHgYNRqbMSons1xzupsckusCBZk2qS8rNuce7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CoqHcApG1xRgL7aDpMVJytxwkV5j8dk8JUmDByry5LdKEkaELfnMyachGButPVqUtDgimBuCywdsMhCUi3mJJLE",
  "key1": "5KqTmwoWQPnQM6kAS35VVaiDfUnskKKj2b4CyYhqPwRmszJb4iEsPi7gBRwfCQMZSeQPYXU2sB6hs3J3KNNejeWy",
  "key2": "3wV8Camc7b2WjjRuJvrhjEsNt93Ck8vtiGrhWhoGPDBKVwe5dHhbCwjXAWYcTePZXgiBmW3edycDe4rPxetoJdRZ",
  "key3": "4nd2df9SCQKErPDZwgsAkUdD4F4jsey5P4j23y7oMnfEL2X3HM3uzvXYh2ZgjqC2W8SafoT3nhSH3Rqve4nQM3Ge",
  "key4": "iymR3r1sCKCJB1g3qtjFr7x1aJ8TZhY8Yb3MmiV6o2JaTUyPxZoAxddLdmFr7twrt64hyXb9nWSsyzxbuLqDKZt",
  "key5": "3kUk1pszeeFgKfLqf3xiNGYBX3dC1VUu61kD443Zs2uYXkNsgWk7BupPXshZAyTJk345BQrD67UiHihRsgC8YqqD",
  "key6": "5RptkY2VrnkXMBdRPULrftsrant34KCcn1Upwhk4gmFUEoTP5Ee5L2AkLRYYvFgpkZhhsEMXGd15bkJW5Yu8Q9PY",
  "key7": "5Dz38s3LHPGrXPy5F8Uvq5FLdFZXpTr6pDHsLBd9AHfZB1HnQZMqdyg5ZNYZWV62RAeR1WkXStLWbMkgQ9VSLsP4",
  "key8": "4ZzYwY8ymRszo5Bmj4dFRdWQScErYNZhn48RjafKkSAjnVv3b7RA8ZLWCUNDWNUhFe7scujC3rudQ3WEFBdKzfMm",
  "key9": "4YPLRLbsGh6gdTLQZD6gnx7Fa6RdcU8xCFehqGLDvuQvWUU9XcT8EZ2GMGMXx89kmEywZsLFn44GnAi7ML1sRqbq",
  "key10": "5Kkg4okpj5fYcEV3vsk7Cs3mxtWhZQVfduYSTGf3QmCBaWeo2BnNvmdeeLTH4vsKDvkGWcLTLK41orKazvQGpzj1",
  "key11": "54iKPUxv5xNh13efenNRPdgcoEkF1bK9i7YCesswEUSECiLfKvYbYAi4KQL6MW7cQw7QLHPueThNnFvYgmztoqdK",
  "key12": "4zH7bhfwbr3SSTt9H31aYcb33NY4dz7iPw7M5T9wjv3msxPPEs333o7HQZSzhPqkaCcSw1DpmBFyq6k6ssXw96VV",
  "key13": "5S8rfZa5sVHnJJCgBfGsLGYHxFf1EkeVBUdYkAbaWx19huEJosV4D8jYU3yLg29efnU6Mci6SZTQ7mtb19G9s3EH",
  "key14": "2coEvWFawG93TqggVVzDj9k9wGbeCYsBevw9LgS2nQ5Qyh2Vb8qRU8eFg5wTAsgxpooAv86TGN3yXpKEa78iaQsH",
  "key15": "2rawWwMZGfjxK4r4gGHhSZPk3wNh1SdkG1DH82jJzinosyQm3gucqLS2rWFiMwvJq1F2sUV543mCABH6A8ZYS4ds",
  "key16": "4EXuiPhPW9SKz5gC8QC5Q9fCwsZo2kAvCKLGLUescwUS89YkvFSHn6qWVdv1AQDV8Zi4sFFnQw2Q4UcPhPFmY3Ed",
  "key17": "TLAt1PjT1oaHWMqYZWcDRTPNzHmi6C3c8jMN6RJWTYtyHsFzss259WiuMYUAdL8qdiJLSMVRnUL4kCn8YQqapPt",
  "key18": "55ym3ZuafkJpmPeboTeNEjMgsMvwsJTqJRjySUDLaj7yZxNpPFfBKrkrF2UiypScbWYY5kb5AVNXGpBJadAJ2z74",
  "key19": "4QQ8gvPS6UtMn9YjxUuSb3QyujrcyFyfJYvm78qLajqjhytFq3QR3TqSD8nAa4kiKdDvC9ahGv8JiS2VzR5Gw6qC",
  "key20": "2LpW6rjK2Kk4knMFH5n9215PaDMGBqDH1wrG63oLSQfMVSYhBSoW3MT5bV2UMuvaNwFG6Sd3TBm4FqixhG8SBdxf",
  "key21": "cbDtwFMTxYCe1iZYXAQNEo45J5dB5qkbFZQkrks18Y8U9nwxCwb3rdzWVtLdpUkNgDwvk4XvsRZKSbCV1apf9BV",
  "key22": "4oFxqti6qmfyhWXXmFnpceQrDrtaeSBiFL9hviTiSGKsjXKYowJhddGP14B9kvZcvL8wxLzmSc9LB9gxbXJa4Jff",
  "key23": "m58SX1XeLMjP42Zj3H632sVJ1tLCsP4bkK4s7Rbcy2sSqtBLR46i9uLKedyG8PjGYmonb3RCM3mFgPi53UkUFLP",
  "key24": "5Hd4nGz3GtafxPuyy9SBn5sF6RTpvua4UgQLZPc3sn7wkbc1ikZ8JxzFpxbx4z7BFAwZh1cK7X8Cjkd41KgJ6r5A",
  "key25": "3NB8U9uLKK1kdbxzZczdxLPKpYZhYubBf2UE3YXnbkdLS8Aj97wAxe6eQuyfvLqj9WDF1TJnurraM9b6H1fPsQxJ",
  "key26": "L8LsrDKNh2Hkc9sjCT7npwnHdy1Sc2x4s8vYki7UXBcQM5TNc9cLtEGShSmQRmUYGKhfFq6h3WkW1uiRNBoA5mH",
  "key27": "4dneGgeFzUeoh8dw1KGMhnqj4sf1juzXYT1swCwQBnfUTEEMucBfdcVR2EUN8AFLfj3RnW2tZpWLK2smkEmJVGnk",
  "key28": "3xaPjwLes5EQC6AH7kG1xH8qbv36uzVNyfMAwkxDfJYfccBPnimVmt3BewWWp2Aob2Jk8ErAjoL79wvJVWn8G3Gt",
  "key29": "4MTWXME9CH4mLBYk2GF8qqhFsNEUbrcoaoJq41ykvcyY7CS2pJTn9sdKQeBFRhRziXfxiPBAB2ExKS2btpEyH6CM",
  "key30": "61oYnwNLzZNsiFDk86w7oErswrsQNuxaKgmyXBjMswdq7VNfv9F4vMVZuiL1LvXctmDQmFPnA4MH9i5gtKVZKGsk",
  "key31": "66W3R6jSLw3ean1myifDVcexMzitN7y627GiBcrfDLHAUuak6DNNfGrTA35SZyCyRcE45WyLa8a7eRSAL8DrTHmU",
  "key32": "5hwWEUy3MnbLAHG8yq3MCyKGw1W2QjZyvrG4GWNPnJByPvk9dZaMRLJfa6A4VUdR6SB33K3Lt5tgquccwhFVGsPc",
  "key33": "eevSUJQZuoAeacrrtSobWDHHnJeKuMMuLwRJCnAVF4KPJDqHAFkcdgmuR4NgAcDdN5UnbqNNUvPvEkpfizeoxv6"
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
