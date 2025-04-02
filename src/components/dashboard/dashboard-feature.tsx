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
    "57jLWV6eDkGpuPBFvkApydc58p137YCQK3DAqvYEPhRvWXeuceuLM4f18JRoNzNG8izKAV7zxryoTZiUaNc2MPP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24fAzgnixeX1vQUfc3o7UzXtuRyxY3oGLFox1C27WaMrCodQENZxxeaFVj4bsAWPBeAX4sjnpu79jfkQVxyJ3jQp",
  "key1": "3ZtADYzwQASkBTcqivPJNf1M6Xtt6YjUZjdMiMUD6kPJotby5QsAgDmF1QadkRPJW4uHLg1x1aCd3R8EsGGcQq8C",
  "key2": "4cFrq7LpbdNRpxhRAbgA6at1otuQLLTrw8NA8By4YLKMzwKoZP1SspYpURsiuqbsScdxurUZQoM5uv2huL9R96zN",
  "key3": "38cKiDd2hbm49PUXX8sRsUkHjTeBNzR3AeLaGHjvdFssGCx6cdrrchVJ5eLnrrw5uwPNTK4aPj3izak4iS7SWuUm",
  "key4": "2sjXrsWv3xJuhEVtL28zqCuB1cbnUD9Ut21X4fah4FGwNczJxDunzc5iCrANG8ULDSz19UcAs4AwwPezGCR4tA9g",
  "key5": "2H1vf7jtmNgN1wDmms57YD2Btd7GmxW1d1UMXg7o1TF8EMxHB78dfgb1PG8Xhsmtu33FSQZBoWYKuZ4A2MJ7QWkj",
  "key6": "BW5s4QstTwtFtBXC1fbQT2ycQBnSpzVdRqjjemtcrX5ftZXSAA5eYhQ29mh9ubKBBEmNmdvFBLg4otCPebjbxu3",
  "key7": "5VvLWPXLkgz4wDzZuhFLjN2NUyrh6AKXjMrMUqfu52mLELfhHPX61tb1Y65F2ZXsQLK6XZ15ybeMdLPkDdjiPMCp",
  "key8": "4wbj5VWokadLQbA7HhB5fJMgd4Ea9WFzW2CejfUKm74M9Z9Qpz7e8DSJToP7yD9RajUKwy7b9tekh3925f35pJjo",
  "key9": "3hX6EFZi9yNhyNY3YNcBqErLZqYevK2fs3qswxaeh6CuuzWxFChzf5hhUqaGAtoeUzbdog8zm1kEWX4SCbhVeaoZ",
  "key10": "2LTKBcPifGV9TVMx21TM2k9My96XnN8K1jjjPqUcAXzbG9V7KPzDoiQFfcdEvv4X4xhhLNaG2ZSjkBnQS6vkPrhu",
  "key11": "2611BeSkWnNcj65FrQcym2etxb85qKAmaqxt4yjg4dPcEwxntwZr6HtddNTMFj7EJ3qcr9irpJtm9q9rx9Emw2Cq",
  "key12": "2WDAF44zxFB3VQ5Teh9n1XMv3SmJGKtDv1JF5NU9DykDfmn2hyJxnNUkid1TTDcKjhvaQkS7dbUwBs8rNiT4Ka4C",
  "key13": "48jCrSV4XUMahuc8DMrKnyNL1GHaPtf118Nv3J9agVir57Sn8d3KAJfEi7ShCVRA712VXjHW4TfVN95nuGe1NzKP",
  "key14": "2r4BZTjUPxCjgsKYz7XdYquW2RwYuktVgpHm6XZeK1mrC5HjMJdLz6ZU1mNtwyh8F8GvcMwQmuwkCYgVax3PjGQC",
  "key15": "3uiBokCQ8tPG88jE4QKohSWVGqAMBhs2x5GfNSgBXzDTY2gGsUNgQmxBtytZQSQNzuADunHoJ9knYPxByqmLRFi4",
  "key16": "2eBJZ459ieJKwTRqMu825hkFRRryCXuUsWAirnB8wxdsunvqAviNujLfaCvgJeALyRuX7EMtUTNrR8YaJX3XSXob",
  "key17": "5141j2Xp8B61uaPq2TKWFpn9ztUr3miLXBpv83unyn74sisU5bCfQmzYLia6LWV7kQZm9Xn9iMSxpkFSDHrSSQ9e",
  "key18": "2zk3D27KurNc74PxcUMopxS2SUx5kMEp8FCEu91GPUcxSXKdPT5eBgEiPiYHRGXhcHCkHt2kYwZc8fCmFTWRKnDY",
  "key19": "4JRfrx51Avn9mdus8vYwHRQ4trrizSJaipTfAxHNAofqxs9Spv3jUkg5xgXQZz9e72N72nZw7fBzfJGxnSgJZUad",
  "key20": "4WgLyoN6weGUFb6pd1tNkTm2C3VqfxAMAZ2dNZhSc8qmrZ4bJeoRwz9mYQcKGnZfLmsBcwoyCKXjMDuXeNw5YRiW",
  "key21": "5MMKcdjGo4mXJE5FLhs45PjQyvJXvB2wc4LTEaynkVZP3zqyGW7hUw9KnReNYLwxZY3cN4xH4RbsFunG8aGxLbTS",
  "key22": "4DkKyRbF2FiNdwTiM2jD3T2cuc3KF3waqNwQMgGD1AdhgsAo2dQ7Dq5Srj8kNKzCypk4aFinRcDXaGxEJvBKRb6d",
  "key23": "4KH5XvyptTMn1ANiL8GcAnythBQRYfPgPAky7McqaavFH6xkRRGPX2UczoQTgwXiRNVvBwtd96WjgUWu9wVTwNdY",
  "key24": "FG3k23mSJYsHzZRR8N7LCijB1rRibeNWJ51SStA13u35NDdPuhNfAe3vosjTPsRKCKfNzUKinx7KPGHFdf1TY5m"
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
