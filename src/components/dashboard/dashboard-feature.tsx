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
    "5bRPb3QfXHafQYunprxLR7cDMMNkmgfmBpG9yVYxk1SpBQqLUwfMipzGhkSEB8JXX27dYPJx32vwCww3Que8CPe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e74r1YSvsSyFBMoG3qvniBeXhfDRQWfvc4BhrBa2FQANND4WC4PyMzBvKxM5zxX4bHaCoCBTbMTgixqKGW5kezw",
  "key1": "2NbgQsbeL4vr8qGydyqUXWBcfUgbygJK4cNmL2Na4owRiK2SJtRehN4vazrkEtZ4gdk1ZrCLFTmPLSFfnLn9Qemx",
  "key2": "i5ohwE2zb4hTNvUh6U9PagrCUqryASNBQ7PMoVWu4n8s6a1hsvPF3L26XGgMWcLgxsoQyXy2sJDnNA3JGc1FrKE",
  "key3": "63YLnYdFzWmTpbscHgH4wqwHVaHg3WPMF8DG3XZ34vRbbjw8rvxUGe8UURHuUxfJs138Vku3asUWFbZtbM8Td6Nz",
  "key4": "3EvSxe6vJmsTyNZC3rBTZJWXMyvKoA3W6cXyKYxwZP716wdLugMdfK8ktah1gigWhZaCsuhi9Z3STxq2WiTVfoeS",
  "key5": "124f5xYGB8hfTdTcZ8QBhiWknU1fdmV3ZEQntDdmvhuZi7CYZi21AtJw974CfJFeHAHVBBdWfMzotpxbAx84n1Yx",
  "key6": "3q4hYJWoCEpQByPmAVgc9VsHqyZMJQKErjjb3ehTAfLswnDwZqV45bFhcsbkuJTTaHpvVoLMD5B5Di5ZokzqVexG",
  "key7": "65gmt6xQA5EjWYeFza7aJyjDtk5dgQ9iMfJRMQnGvmZBvovZxW27PdqVTUyNLJNijdJEA1WK3uKmK38WTMAEKTkc",
  "key8": "ZNcDho98NFx14H6353Hva7YpHUBdfPZzW7cngB5EJRVbUYVjp58fwqEx1KHD7dM6KGopjKatRi4LM3kQXhKRHBH",
  "key9": "sQUpojhwqHPfqq8sYZF4FQ6UnoM7UoGWf46DtJFn5Bfe1eYgqYiToNooiPbjWhefYFJkMUfjpJoq2djHiUaUTiB",
  "key10": "PHEKmEhFbKbGm3P7c1Xwybiqotyyf4dmXNUyxSfaoSo3UevfhX9QhwUdB6dfkrJhTQcTJjCuNQRwPQMzVbm1L4N",
  "key11": "3LYinaQS9JzDtPJB6tUYSz1tJhjFmNnMg4Mtyii89mLGwvgH4gDmwd2Li5ETVsL4YkNwRrHCZeggcKmuXbtTTKeW",
  "key12": "3hZae9spZNC7GN9EigUKMoCeupwhgYqYqLsKSUcHUoU6LGNv72SzBdynJGAko3aGG5FLuNg45zujtKwcpsrdqmqn",
  "key13": "9kKrMRTXBgu3x239CQS6fYPzeC16Eoihsq7nja1TAt1VzN5cxiXbyCf5Fy987i5feXVH6zS9JzNNEUcrJMzKZam",
  "key14": "3hXXvtJQPx7xzrJNU5hdbYbNL5dZVjVyAWxmt6YogKDJ9CHUw2EFmFZnkcMAmdRiYS1kbXqxpU4ecYpoAwBuucPS",
  "key15": "4izgg8xxkZGxReVo2hNTnBs1RipoGE86pdwE7RRCHEYE5HLwX3aVo6zgNCzQURRBFB6DgDxDbU5HYFuFWLtTTKmC",
  "key16": "3fjcv9u1urjp8WCzdW6Pw3uJJyxDqu9VoqajC44GGDRonP3xYVzM4ZPPbkcL7Eo6kkZmQNMCpejbgkKHaa8mbANr",
  "key17": "5BNcRkBQboHYbP2pLuLeXsTU212xpGU7jnvGTrFTCCgm1W4goE1jMLH66QSScLGBS1ukVLR3Ns2VJnJftFniksJp",
  "key18": "3zpTRGVJtiZWY3DK21sWb3tamt8G8hn96e3jvNk2eJAkJyXJAjpM5nYw7GzKM4nRMYPkMTANkMUEP7mp79zPN68D",
  "key19": "4AUmwRX6W2UeXCHmTEsDVLEgSqsBRzCP5F8iDV7XBWLLGWpzXKcotYGGtXwxjnujZZzj9vBb8mfN42UZZ7HsHWn2",
  "key20": "3wCXRXyyiJzbnEzW8exCxGAVeaz1enr55KwEnQvyzfkpKQtauzSsgnxLwa17w5HAzxdqb9CgG9buvRZByNt8DpRd",
  "key21": "34bk19JezyQpeQdLuvWrbJjWPhZY2EwgxuoHyUaK8zwskYCE5RYQV47zUeeajq3fQsEx5JDThLLagw4GJewhp8Qm",
  "key22": "3KZr2JSeHJk4igVwSs52J7LrL53fD4RwVRTYozZ85ruCgVe9rP4PuzA8dYmmvC8LxQzy7eaDnS8jsEgQTwNNAdwb",
  "key23": "3GcwvayVSYYsMqS9bFPu5Y3SauXJbh6SijB6kcYBHerMsv4UdWPi5FZrZPy3cigjYZwYsniZDgYWqCDHUbbwacgT",
  "key24": "2vdNg3V2KutznTJf97H3pQ5UEFNqfXMPfyL7dV2Wdfbirx72XF19KppRv3UaSg7p8YbK4q3RDbgcWGNqc3PHA9DR",
  "key25": "66jpJJh2inLZ8x2t44ugvVjENVdfkVwr3PLeU8rR4YwaY4xe9AYJkbmXuXs5LrYGWbXh2opRdfpwuv7jYcu77kZG",
  "key26": "2CBW85UpskrSVrGTj9GBKaPeYwbcxpB4JtkVRQ27uZwWkoyr2WXKcV5qANePQRe8fC4ExDkySXyVinq69VuFaRjk",
  "key27": "21ehW7SLFZ4kLeDosBjjUwiTqUJ9nuVJqjQbfehKSLktka3B2jHamXvbmmAQd1sB5der9QWDeXXNY9CbRXhNVJyh",
  "key28": "5fsmjf6yCtii3EcqL99uiBzXMPZRbPa5Ui9yriW84HXKaewknmKGygE9P88YPwKtuJVz6YUhmvczveNPumtU28Y2"
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
