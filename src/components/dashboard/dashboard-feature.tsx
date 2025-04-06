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
    "2wibmaWrZhCmMyyY3mzEBH81uMThZtQfbkzV5iL46LuPDYkqpvhpTwpauHuQ8vpd4JfmCWMYhQhjHKNt6H14rzyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52fP8g3jLUAJb94vWcuz3UayE5ppheX8keAZKHDke7zmxP6fAgC1iPpQCVbibHcpDtMiqcW46hLujqrENh2T2a5x",
  "key1": "4PWfHnJkLDBA1aKDJY477S69VTYsqJc84kKQunNKEq2srdEzp44MRYjTNpsWWjCfXBW2QfbTN5Bx6bZdJt9qtyUq",
  "key2": "bfriaLNUk4CxXLGSm1rNWBqRGezGFwEtzvDfhRNgdYFqVFjiAfYiXroFeqeaKsGPb3kaSDL9N6wmaF1X1rFwvEG",
  "key3": "63fSrBNceRwjd1qRBFshRUnPuG94pJ6UeAaopX3DoCjCJuSLpsJKb8kiyTHwuN4auWYR5qEdH4v2ethr1TMP9TET",
  "key4": "3qfMPmgr6HtnPHFffyKs82KwFtamVGrVY4AjVmzktmxgFo9bsrwL2DpngXNLb5PfqCpyCyDZtQfi6AtjWKNM8Mhj",
  "key5": "ZLHQUesg8a72qH1JEPDjs1jQN9HpgrN9CL5WLfeaJmrKKR741d14794KmUgAGjfFSUKaTrScCRfggcV5uTYzgRL",
  "key6": "yjuc6CtPepCmraTfGhLjEFx6TSZEHfYSmMZcYeXhRweqKPfQYh32vxXa5hJtdbBMSu1eNWLvDcSG4JnAUAGtEDS",
  "key7": "5DXcQAdR3eXAU7ofrDeKde5cdFkRjfwNykFQYuuyRVeEyMnsWTd2gG1wqMmYqshFaR8Ao8e48LSivR4wuak48i3V",
  "key8": "34H2GCFCxrTUALzxULaRgGWAdvxtLVPWvYa73KoG1dCFD7bWicKMX7cSugbVMRU2kEbG9EZXZd5f1ZV2AhNSvBBj",
  "key9": "chPtQd5XYSomG9kyvhXE7uGkEdQ2FCpuDSsHAqMvPWYrydp2BBvXUt4R9pNKghFUeBj2fPvvLLxDAtbWTBHMsib",
  "key10": "ovA777hJ631HEpsJ1h6ARhMX5L8vAZpG94HREQXBrAAH1pVHdQJn6C4BazLFDwS3pegjk5o3zvHYqiEibw6FLGz",
  "key11": "Y9h14FoqC2tXDFoXfLmZKL6uKM5g7csJxxitCF9v8Ed9Ks6RcBeZNTfYfdaF7nyFKhxirnKCpv5WKFGau6bGYs9",
  "key12": "4DYShW9HaMJ7eHNYSdva2GEVx55BMa7K5bnqFxB6xSFxTgf5mH9nRoEPp8m2yMfjp5iJSM1oWHDQLqE3fRweGkDU",
  "key13": "kh6YMjZiKpSmM4m7HTXjKtqX5JPq4edVDzR9NCSpMKAeUkXKJb4VL8nzMS8ZNgp138pR9ce9jwM9DMAKYDygmgq",
  "key14": "5oakrd41nE9ViBvuqJBh988sLrVbAZqgfqhYthB5XfVcWrMjEvZU6iNFXX3XwR6W2AXudL3dsdSFRPVrMWV35JkH",
  "key15": "5YNAXoYMnZ9Ug5uX2z9SoJ4X3uPnrhcdHRHpTj7MzD11yjK5G8Vt2abJX8fmr7TZJUr4vy3yYL4Y7K9SFX81xqjF",
  "key16": "4H8MqyN5FwPAQjKELPn1wEkHdff9ao7m5CWQqHXTeQ7GPeTv1YTp7RdAFjHjnBkQ9wQhQSn35ALDwtBv8fW5xjn7",
  "key17": "5EzqKUTNtesoG58AkaY9WZ9eMYPN5Av7QHnLRczj9bWeM9iubwjkHbDwbjGfvir1T9i3uxNYVR1raP3dUQac3Spw",
  "key18": "3CeBUHeZ5KdGwHdZk3riVEmHngb4uv3rfX8HpCeRcvoveMPBSvorb93e6eg6jZefAeaaeKajjtUZvcvJL7WD2zzL",
  "key19": "2dpiwLA58r6JwEf5u8T7Jh2idhEMWFne1bRUfVCJp6tq7PnmREMg6m2X15TXoVAfNdmU9TSW3dqcXWRHfQLd2Yc",
  "key20": "5ZKa8mfWLnU3rwYWZr52VyjjU58xEZwtDHS8fQriGx7ptSzBpugEQGirL57fcDUBssvnzD7WqyLM837cmLJWAGDf",
  "key21": "3Cetu1nhM9LksiuWXd8qaGsf6UCRqcLuqDxABhwLcgiU3v2997et4C3BGAHv2MozRp5ofFZr67XGJANsbyvswKn9",
  "key22": "38UaJtmWnzFPxVyVkzsgQqppNzw3n72nDfvGoy8PfFGLHdrympZEkqPQ8XzbeH2evSVao1xCRGLLLkN79YS1Lb6p",
  "key23": "jKi9FaLKfLy1eE5QZuKBedPaK46o2LkAbk3qAkpykQYgehXk8fMauYfNpbfeBmptu7bweAjfteKkPAphPLZbw9L",
  "key24": "2h2vJvCj9h2zFcPbUiH8ceuuRsV7yfQpwGaCPWYQDYg4tyBAy7caE2UcXNiRn4L9w44Qcu3bFTXWVXykGy4iUEsm",
  "key25": "4ZdcdpCiCLCNUWPYNEP9rHdKDckSTDvjMzYDCm7BmrQWJCmSBZD9sb951oz3i8ADQAwQZMqdaDR44VLqmNvPNVSi",
  "key26": "3jEXGdEMc2ME8vprFoAjcRxeQHEU6hKHhgHEFxwmwrXM7TKRJ5Vk6ij4rvb8Yi124M7uyU7qKohkHG8buH2TN3AG",
  "key27": "2WCEd615EVGuPZciCk7cV8PmXo77m7h4FzHPkkTxeKBe7Tut8xyWL2qCZNyp2nzsKWdqKRah9NKMGVeRNZyPY76w",
  "key28": "4Zms6scknQdjKVmE3j3QsDSM9aFSb5FqU19NGzRhYVUdnyeVXPwJXEg3AJZxCNkZ2bvcBvLvjyRBEADpX2htyWAo",
  "key29": "WhTiN9VAf1DEB5DfL4rKFsQtJKLiwyBnjtKsuELg2D8bpk8rr7Mz2r7cSEUAGb5RrVr8uejr7BithYg9czSGPaK",
  "key30": "1g1QqUg52RVESJB6kAGDe4PokQTxMg1NxCSfeVPcELaFK34nwQjtgA1X3WDk4QqQjpnyAemtQgd3qAfATn8u2FY",
  "key31": "7Aq8VrffCryXHyebi53Gxc2LsxbwyHrtDDF2mGsCPpLu3P2fatAZwmQQGayZCo8pWxSSrHXzAugmKcwq4QQQphA",
  "key32": "GUiAVqM31h5W9JJgtCBqeG2dbBQRPgtoXoiaEqjusqVXRYDVjMzPTZWUMwSC8JiS4UmNUFYwjN6wJVcTHabRCWu",
  "key33": "4KRoT3yD7GSCeLZSRjr53BFYaAduzYKEg4yfzYHAy2JaquEEnY3DjWo6iYCpZv42nZb4ga7xv1otw2goG8cWqVhg",
  "key34": "4WK4cbiMnYHHegUVPe2Um3tvsiDUWy5DAz4ZLNRubYm22QMExTy1gFN9WQNZBJDPAwcfzwgbQKa7tmra6HeUrwPg",
  "key35": "3KVxSnaLkfptwqg3fPYHwynAYs8XsqPHokova1HvB4tWLNHT4dRHm1mby29e5ZHLNfNadvybcEanTcB6F8rhFJbP",
  "key36": "4biJpsxdfq25odrKxeL9Cey8F6Xe2D7Rzf9aP9q5YHuZz6XmGarq9MGcTK9NQwN3GDoHwSM9yJHHrZkDNgSzYCdi",
  "key37": "57K3fLZs2ZsyBriQnuGjfTA1WzUqNaphTLwBPiAjA57En6YSm5tzSDt5JEDErVQFPXWYxgKQypkQjDNjL3pdkYgu",
  "key38": "2UqQoMqMeUyh1NQJeXUoDeFHrgFbNQB2STo4Fq9qvy7WubfgV6QyoCvJTMPQk6KMY4CR7mzVHVnJQjFJZUh5YHXV",
  "key39": "4CPof2Nob4orVKsY2zT7nAZqDKE8woq95sz8rJKf3syhFRkdnQ79Kd9VRUMWWdohFo9BAhinUh9gKKoxczA92Qh7",
  "key40": "3Uue47U1dJFiFAbS8X5WgzsbPaeAtfhj7AwC1jzrHRfVUethphyyi8hUj2z5M1HFCwxzV5QkMyL5GwwWEPfNAsWy",
  "key41": "5JcD9pAzHC1qLsQ55umn2sexLX4fLwZsvan1qjeKNPe12L6f2fJ8RagMyJEsLJHSPKQkUT2KjYfikwusHACUaGvR",
  "key42": "FakzPFuSa2W8KF9g4wL9bSB7sEXB2C2TsDibcysF2MQGfdgFzL5y2aLuUAB1Cu5Z9QfPGU9vsvHFpyGVmW7bUqw"
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
