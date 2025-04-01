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
    "2rREpJUKtftRNTcWWsNxXWukonDYi9XUhWTvsfk3BsRbDp9B91vAHeRfrpbmoUdkDkaKGupWRytKfe5233ftEwoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6wtKibdYz7StULM6K9ehz1QZi9pkL4M3eUPqoi76ZtynaoJBAuK1qDFix5RquSCKRATPzCrVqjeojrd4rvEu2NQ",
  "key1": "51MwPbb3cpxv3e2sHLpEbLqXEi7n11h5sD7CyZRJ9PaHkSup5qSTQJC64Y9EEp2uvsSY2bzMG2ygRHVySFrEEsWh",
  "key2": "2ZnFgBRVAsBKgk8mhtkjYb43BPa18x92Js8iD2QVE9VLEUT481zC2XENz8KtMfKzyCFNwa2dSuyEczZqURWeGW6C",
  "key3": "3svMAXU3CUshiwz8eDpSiE4TmjvjFoRSpzSzMm1MJp9155WnrhWc1SowpVMAWAHgGWgUhDda9HpB9bEaYCKWgmpd",
  "key4": "5SZ9ERJ4gh8wseBnTBNCX13WpiujiQijGyHZaBdPHCit6qtFGcH7RCmZdo6yHdaMX8iK2Rv9KXw5WLTtQbbsCnbc",
  "key5": "2sCUd8XSnDVnxNtv6nPzaAFKqQNxwP6KbwEAHgtsXZTyH2amLw3heKhJAWZXEM3dfvhqeH6ExSbiBQKXrdQXTpbY",
  "key6": "56iR688FANdmcmb4trbYVaym4kK2UtQ4dCFD9b1B67Dk7KoVfnz27yoDAu6AwpH9MAdsZNCuv5FQs5m4YZqefXUs",
  "key7": "yqwLNtmxvisEx7Lc6QQafh4Jsp97szhdRuFQhKe1ZpuP7XgpbiaczEWsLB6qyxcTG1YYKWTsidSPy893r5et9kW",
  "key8": "2P7gRp9g9eRhHvEfg23TgmfhB6Ai8Bf8hLSiuvByJiXx8awB2qpnipJXqXdJtA2SHAwWcbWJyAub3zXi5TM8bMSB",
  "key9": "26E12vs8wiGarXu5bdMW6fySCPitVyzj65Qbm9uN6rpXfyEn9qnXBPHdymmk68FLppRkXhTwfWEUFA1TMucY86AQ",
  "key10": "4orTkVXiaZKuvR9eiifgwNoh6J9teF5JxSPKaNcgzfKhyq1ZbFYE4A2kamBfPXYTs1944S47eZppWNXoPpTrxcZU",
  "key11": "txirTpysb11ZkycDTJPkJsgUQRi38pnuX66BBiDAFP7XUtRY7M1RYkDQciFH4L8Xh2bgeoWJppJq1Qn2UPnJoYw",
  "key12": "3fYn6TFTRPDeESLir6WU68oQNWTjCdrCk9TyTc63NGVgU19vCJCvWmeCr3jJzkxn8gf3ydfK6CJqqeByhiWcnehB",
  "key13": "3cYsZG9Kr87zqAHYuqk7dBhr7ihnyknpB3Dgihgyb7NyQTtZEAMmXG6KE5dbknheUw6KED9uH3yMGwtzJKcxSZUG",
  "key14": "4pPmENDGvTsX2VMdEEL8x4xynsY8LbhcramyGkbeKBTWXEJk4TUkkBbLDzo5nGMspY2n2rmuwfvyv6Z5KzbM4jjA",
  "key15": "e1YpYs9G32pYJNdbQT8Ux6HTQ3nugCHq83Mh1utC61MPRg3Z8LwzHGYFsdnAERpmkQEJT8oosKp91Wp1D87kh2B",
  "key16": "31NjMmEjTJqVA23G7KyZ9wVCY9HjpEcMs4WPhNpFtT1p2x5kYfFXZutbhS469PVGuCgnJYXkZskfE4zBXHmZWitG",
  "key17": "3RNiXEL42Tt9727nmunfNVJdfTabGmBVbG4rWgEjES9h6GMeecXBzqhdgUp3A6M33dqt9i7VNmNothkb7uhPcMyX",
  "key18": "5VgTCECPAUNSsmDG3SVXwTFZEmBG7adZVbJPY9wLT9jTmtfYiycRNofUpm2RYqrZU5cc7SoUQwUxei7DKEHdUsZQ",
  "key19": "4ixy4VECWFT8PPNWufGVe6vF39qSS6U6WHiDgKMP2cfSLJPXp1o6FPVJSUBx8dTovQ6S7Qtpt2giazkjMUu3Gg8E",
  "key20": "5KZzWex3NetN8gbWQfHmVLTPz4fRvQaKwmg8S8Ecbk37Xq29nAJnAidVU6Nv4Ug2cUkBoX9kwJCrWAA74H1R8fcE",
  "key21": "tCWccX8gq5qM7A2VjZ7gSmGs8XPepGACePSq7GyVWaU3xz86yfb9XnbrGdtRqPmk7WhPhJXp76UW69P1MGvuSeq",
  "key22": "2MSSb8S9CWAhpCneXJBiY3UTzQfG7gWhuD7276FERvX4VvLhV2CN89ay7fRFxXCgPCQdKm1HoTYdx6dwF3SERpFf",
  "key23": "5zcMmoUdZKrK7EKhZ9tFoH9R36621Q7Em7DWFEr9hvz8ScMbaX3mKsMuXiP1eBheWq4FmRfWmaUVBMWNQgBk2kyB",
  "key24": "3jX4j2FKy26a4EW843DMepuGPveWr1wFnWnHFr6F5C3DKqQHcpCzgSSNqZbBMZorrF5zz15yseNCZAsVLiVGEAa1",
  "key25": "4rZvZv466ZronLM1JyfPAVVwMRpEK7pXwtHR1d2RnJCHBnrj7me1UKpMbociZMaJvK7YDbhbhtgJL3Gc1UXNCxzw",
  "key26": "5rcsa1pqqvk3JCoWecb5XWCQdfHJmYvkbKJMTVQgYvz3D5sVVHsLKQb3scaBi7LJCxHDXUwa2DmF4VmunvdU6Py9",
  "key27": "5zJmFwy3ypY3An49b9RXbiwqUjkrQBnus6HyYaAvdYnJj2jes5s2LQ5dqoYFGCaqDX74BJHYUCQ5M3ZZP2T3BVvo"
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
