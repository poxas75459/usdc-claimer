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
    "5nhXQ7RMw4MfjHLYnphHjhc7Aoe4pMQ3vzmou9ZgdtENo2oETVgpGKEtUSD6pec8LAJnxnvbVqWtoL8MR3MyP8aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8T6QdgdiHkSUfihWu7421Xr8w2jYg2qZiH8BWNes2ps7QrgpFSuozQzAUBzDHCDsNzfuei7dFuPg8YF3kjHTQr",
  "key1": "2vQaJJxRg5RzJLM4RnEGcCHCcGs9co8PcV38knarpZSJwrxQ7HuKZVVtPod1VaY64w8kYkmxkY9rBd1E5fW39KGz",
  "key2": "3NCSzPGCPqyAjGWDZ9Tn5jx98kztaFjqVKZuEVEEW5yQFxKHvFD6du1Vg3iHQTnvL7D6qazy4GWCQoTtNRHdjAuC",
  "key3": "4to8LeW7euk2WFevnyhAXkHAPUk53hx47xbK3DvFdUsaa3B74rBBW2YjNMoXxsQgeCGoT47cyy6RJHtg2k2agffL",
  "key4": "3hTfdqTNvUuaTnYxpWULDnHtJPFFutnzH1eDSrNL9eEe4hmteLjTvdH2LtY3MNgp9eGhDKHWErCKunGvFDYGmcEY",
  "key5": "2gtVThM2brjJzUEUF5Y82PVSQzZLwSsNLAWp9ntVoc2jmugiGTsoSZg6YKVVN9HZEV1sn35V3TW4voYFLBiq9qXH",
  "key6": "wVchoY2GWXocnq67s1xwQNpzXk4TWeq4Kt1XLz6gMjaN7pUtYhttVc92WRTQk7qdjHV2wxerhBd29muY4dQifYV",
  "key7": "xzEbnL6aFWHm2j3pqwUfbRwhfV1LzWQDP5VAVouSZVrqYGMAeUfWdVS9fsDEAnaJ1ypesKd3SmA6zrnsZAKJFfH",
  "key8": "4w9qc7jBgZqjxMa55gvADckUuRJcAE6WZUjqsRshp4F9hi2or1LHdvDNr3akBwXLH4gWcvw1FYQybow4RCEbfHni",
  "key9": "4Mbt5pD8c3JVoUBCPDXNVPrcBWDxBktM9gEkKRTc8pAbCMMo3GunzrJk2WZSGWrhUCfHs6SHMgn7SfhwXJfJJR9m",
  "key10": "X74Edb623hnsgnyixE61cZgZ2iyC2jPwZBnBoAy2HeZAhM9nfMpGhHN65ghETtnXhdsggDVmbeurxpth4Looj6k",
  "key11": "5XrM9AcXjmHbC1ZMYDKyVN5jA5HPtkXaTj6vxhKvFkhrLR6D6zHFdDhACHWpvWn8AWxBMQ2RaMAZWJF28GUp6MQT",
  "key12": "4YPBKUoF1CMgpFYBv1XC6LwLUsxw6SM45kKcfVaek5utQqxD1C453c1TVFKBvnus5XkJkg88YVNdqpzoB7CHy7jg",
  "key13": "3qGrGZbkfWK1oE34vWbbKkwhGLBYSzeWmPGMNZ2SAW9di4pBzb34vqxx32SYE226h7EPkfpP7mMxLEfes6ZtsqN6",
  "key14": "391Zjj7cJkoyiCd51GrUzjkcwjUzumDr3qoz9gjeqzVXUgbwnPetj5sKSQCthHoqBz8YEViiM2gMsviKSiS5RzCH",
  "key15": "2WB3fGSVkPFtLGqkQaxf8eCE97U9Kri5VVTv9XECvSCkH9X1ZSjb98j1riVyjMWRS5rDBbtZP3zdrgVDhiDHMgpP",
  "key16": "tJpzVFhSz3698ksZAYAfrBaX1jYL71HVuSRLNhpwhs9aLusR6bwAXgq3zaT25bmFQywn8cKmB9reNEQnRZ8kuvf",
  "key17": "3SRz1rggcbNqwmvBhSPfBo9VVAugkjAa8zsLZZaQcAHDoEfWNJNCut1CdpoxzDeKhLW6Yje4fsNrb9BQbd6Nm8ZZ",
  "key18": "5AeqbWjJdVRUrxTuuJ1BGewATR7whbdWbnD6T5Nr1jTefey7iPKH1r8gsVqLP1nVxeUGzZ9Ekv2gpwsJiYCSwTrd",
  "key19": "46uLrGferrE5DMpPDx8ZYuiQsR11HevtUuKi4cThCkqwUHpCqSyFRrE1rs2BLUVKw9dy5s4fSejjuiPXyshBVKPN",
  "key20": "2gWYovUjaRFwzZGuuAo3HWFG88WvFXYf3WvendisTvSLpBsqTPtqJ3ZSDD6rPJ84sfm6tHAYVqAY7yX8mY3mgHxg",
  "key21": "4mSTShTWSk9UwcG6GZrCzRp9ECSruCKLv6QdBkzsnJaqou23FMpMCUxhrwprwa7PoX9icAqX4An7oYgw4CbWYftT",
  "key22": "3y5okt5qaB9co5ZKdqKtoQWouPmJFGKjbRGAJ3AjZpekGiqNPnN6QXzEAJSaPTgy1hwoz67mdSX4rqZwkbVJo9JB",
  "key23": "41PdkQLUAvesVYjEC6MmRVCqsYyBZ7bhPBcZpseLQweeN3Ep9w87MtzYyCzpfGDuuD4yYPeTEvtkZpeRp23HwAzi",
  "key24": "3JZ9SaRMAbPKfbBgZ9agEcJZtZYTewBKDQvm84WNkcNmvNEhYymRZQU447ugqALBQGH8yULj8N4MNsjxGZV5aHZ7",
  "key25": "LJZWP6fMpitXAKEG9ZhyTdKfzHx7sjkqawckWBfhd76n5W7p4P4jLkFq6eRdSiLN3uXciMCEateqh5uYLryRQTS",
  "key26": "43FVMjuxrUwXeu84NjriR7aUT4XrQp4E9n33mZavQqdM9WmMRS4VBYgDAAnzKd7JV7ftUc2ZxwusASqedrcjX1yn",
  "key27": "41zyZUhh1vPKNNM8g6Q4KHdseZrvpvVysPEGAG3ScMJovH8WD7WoAQkeopMMhjUUqtqZB64TJWKUMVmGncmW8KXe",
  "key28": "42fWLrtNpjpPcvicq8EwhSdmyv45GdbwHwdPcg9wy384MtUuak26CfAq9XVNyeUN9b7fXSEgc25cCgHRGbuEDNbq",
  "key29": "5q7MRqkSugdd4hphL2zgg2jacwd2h83jYcNyb1cJoAkLZ3Zzj3EAtkr8mTzVgcWXcQySMJSFhcbYR5388dAq7xPy",
  "key30": "5NqPESRHqjjRX3fGVT9aS6TeADg5RkkVwr927mnbxksy3f3hZ17zm3Js3RJCDGj8A6P1QSvfFUejbtTf5bKDfYHu",
  "key31": "4RHK9zrBZnxjfn9sWdd44zQ7wP9u975gspfv8Um5r8FF73xHeV81nYY1P3J5ZRr7ZK4xtQURrYggNBh2GxJDqkBS"
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
