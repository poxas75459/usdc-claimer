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
    "Rt8xRo9Et7fbU7DXnRBrW2YyBvoc1eV15ySp5mNdBUEDaUBVvMry7XBq3ZvLgHd6EXZpDWHdnbG1Hi528NQ4apZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zs6tYLgVv8RBcUtjSWAH4az1TUkJohxMnP8565VouAGqyAf9cChS45eGc5FB6cBcJH6YukzHYqpwdondXeX6P6",
  "key1": "2zcDK5xrgUsbWKyv6ZZRvcy87v5yCPRjRZCVZzxkPJcVwbcAg6fhBY735MJuXNKnPwtXFc35LXjvjzroVQds2rbm",
  "key2": "4QRBkcMsNE14X5SysfCzefL6NQdzgZUC7b6HSj84YKGhYzEkP7zmym9qYtcqpqb16STvfuNwQ9zMrR2JSe4xpRfu",
  "key3": "5VssWrN1Gfc6gMxcykyDARzopdzduktrC4eETDjgypjgL5A6AmGm7r6EduqaaRcwaKXhtGf5mZH9viBojgVhetUY",
  "key4": "4ohhv1zZZrWDgz942axTVnenV3dLK1EoMpNnquJvSABb8MBfdEAy2FJYvaRdN59yELjD9v9JfnZc3KgPSsBe8TYp",
  "key5": "5J8dKwcEeUnXWVMYSFW5uAyxufxKrVDi1qB743WtTLuMEcwEokqT5CipiKXgrcmuTCEeNaD7134EWkdu3uJqokGu",
  "key6": "5usJGHwYFpjVotPy5MaAHNpBxSq6fVri3iMM3W3LYR5127CgiMsd11TusgHXfmvr8aRHDj5jvsuQxXPw6jKnskYL",
  "key7": "3T87oyQy1rY66zRqywQ8YAHMA6upjDJVooGZ7fELVwLv7W7YRjZnvhNQadd68z3qqLwFtufgqSeY8GF7qZi3Mwr3",
  "key8": "ZJcZHTaPBB65sVVQMMcMxEUdzKCNwG9R9Cip3wVMR4hPzDd1KLpSKQvsVXh4nhUt89SqdDuWxUqKRHQzfFTGsun",
  "key9": "4AdZaAkoLN3wHzBCrvbN1McTQsdFDNFHiJTf3ZTYJiLqTu3GzPPbsTPEUvm8FVedCRrWLxcnjxiRCWx2qnnLu1vy",
  "key10": "4oRXsgZGYmgpjFe1dvykExNT9EWyFAqzfBKNxEPbmK9LzXkTVSY98S49ojNY36TQbuexvvKxR8hjwnUzxqD3KzTj",
  "key11": "5AG4zjT7DXLpZtmRRVX3FnvCPGXJBAmwTYt4nAAqyPbzER3tuW5wyg8cvP9VjimxF3Jt193Gha84njoCj5qArhGr",
  "key12": "4SweRpPMHMQSsxYVJX2Pp6FwALCuEzY5qQTMMaEgBrFXsPmi2vuqmpymuyQFHsFXVbKtnS2RnGxe4T5MsmzMy6sy",
  "key13": "hVVfG2UWUtWRp9ZQekuLenrVFKRw5YnC3bEYsPpe9k2icEoiBhmBrXnx8CeempaRaWsNBoPEopqooxrFDruQCms",
  "key14": "3M5WVvMpS6GWnVfh6Kxiv86LCoygdJqdaRXfeFn65RyfLLJHFRfbbGfPkYSum9to3y79YnnnbFhdug9fn78inRom",
  "key15": "4W2LdTQu5pJsom5xGBR2JFU81A2Yj6ht78oe8A8T5VaaBnuQRVnoim4fFct8q5uXiEfYyfUJzAMeoyvTeuUZC6FE",
  "key16": "QpSeBfT23Kvoex2dTGAdrsTHAKoxxMHJUrcvpqXyUamnfbfBRMn9PSBkihX4JkXjLpV2QG9pmv9WaHyew4H63sN",
  "key17": "2tA6Lpg5RvzJNa9ieBY8CR5oRS5oyFX3vaFvqfeGLioD74dTLL3DkxoaFhJGfDdRj56UPm89GKxffKWWxnMraWQF",
  "key18": "thaMsiWJRLjd7Qs8qGHexwHA3Mq6vjLUgTu8rBcGoZVKq7foDVAR7Sb9KivkSb3WYxkJfrER6WHMUxkdHKDZUZn",
  "key19": "5gmM5xaw1xgcaVbV7MqYgEYtavP1qK9V98ybdaHFee35LCZxkowDKSNTi69Tp8QFTGYEXerkYJGaYhhwnRHTVgZ1",
  "key20": "j35j3GThgwsg4j9e72QWE1CJm2HK8a8Lm95NDUxrNuSSJv63jqWN3PesQUZ7KLBzR7y6gwXsMA63QDURtXCFB82",
  "key21": "3cn1bGE37btDELziHE9cCmoqGDEdEhsYrswjLgHtBhCRpyAMm7Awqs4jn2MubJZjEkZSAzSDjnUrUBFd4Tb8cb6z",
  "key22": "4bTo2Wte37ETrJvcyLJimgv6ZL8n9X9uWU9JFgVkrjvZhpZjW22VQpxJt4jBbvFbn9vtssncFC6TfyprRZfri4KG",
  "key23": "36MWzexKyiHGqtkR6D6hgA93q3Gc1dzyUUmKUM1yZhGpJKKpSYLuLQYcZ6FcfAMnUzP6wbJtQjDZCashJ9eMSgAh",
  "key24": "5exJhZBQ2sWkdLmbVM1UT6K1TvNGxLE4sMecPfwtPeRpQf28TrUg1BmV8JCGNrQ3WUdLK34qWc1WFwUUyhhVFyCz",
  "key25": "rpKTyuX6UMH4Higd5JwVzN6LxpDv52c4gaaBnPuvQHb2op2zty2L4UFRH9nXdo8EVSPNJUqzoHwSRpZQex8sUvr",
  "key26": "5iAEVbTPr5pUorf1S4Qu4TD5KHfziSRQeo74SoNao7Jg2MqLqt55ZBRfJo4rLXCe1Z9e3sqGg1F8h1VLSeYjJgTb",
  "key27": "m99ZGSDdZGrSFCVca1PxFatpmVpt2XExjJLmyntEq2d6hLt18j4QoyedRuVPxd9roEVREqSmT5CxgDtwEXR4mvs",
  "key28": "2tJ7nUP9u3BczpgNdxfkpZ9WTSnCPWbHzcwJjDKFDXRHbj9YKbv648YkyhJMXvB1UgFTFN4ekz56H1VJQksCcWS1",
  "key29": "5xe5zaxKqiAkLcNtw34vksCKvm3351Zf3mVnx3mG91pxiqBqTgWFU1F1iKffEVhzSSjRAtv2xcSAkWHDM9pXdMoc",
  "key30": "2DJxjwCBe9mV59msHUsp76sPZtFaowwYhE9daBJhHumAMuanVkhfSCsVTaV1nTW3mBh7TQD9Zsafi8DfsTDDsZjp",
  "key31": "5vE4qYV15oD7a8q3vtGA7F1X62NQpyiDSsUsbXQgFA7ehyKC1VyLiePevq1YnhQ7tmWPy5rDUcz5VktC5qDxhp7m",
  "key32": "26UEEHVetxUXPDr5eDpaH1YHGyookaRh3cUt4DN5BL3fpZdL8TFBN3mogXjmyqdUBeeCYRDV9kUQ4vs2YCKoYQWF",
  "key33": "3oUQSXaZGGXXhydxBdcwGWd9WSJVvmZb7QpWzAJR7RP9jK6L7KvfW1MdTzGocZwncrqYsgWXx8oCkc4c8h4RFW7A",
  "key34": "2nPf8iHPf8sarTUxw3Na9M2wiBFnvFEP1cTbZ6hGQ3DRQPCFJ9K8tGKnQjAQ2uWcpnKoMr7jEg6SKzBm8KQPqHoa",
  "key35": "43ynZgxaDGbtLZbuTtaMUycfpr9Y9sQvgK4CTvBRa6sBEFEssyDCqdrpn7LZf7mWb8UpGLnnZBs48sb1c1SsxYuP",
  "key36": "5WAit2X4nrWCcWnQUFFZg3Vk1xz2GEYREtfKWnne64SCemAqe7zyRi8n21ioQnNQKznakZwdQ2YgD3ZwE75n5ynj"
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
