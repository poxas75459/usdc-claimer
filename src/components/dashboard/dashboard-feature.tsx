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
    "wug2i7bh3aTFRgAa8xDgCz1xD5gpLTypdvrYGWe1UWhVFpL3MA5jCU8tWXQrKyzZgy1K9UJ5VKV7NmYXXKuHsmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wv4mzpVU9Lu69of4ABzHfj4esEUB5qjTVGXJezEzvCSJKKdSSHGk1ZuSYtUYPg6517EL3YKc1rwUAsLqAAS2mja",
  "key1": "3tbLSSERaCxLxACs6fZkJxMf4Y5Qo2UMi7CnxUMEHeKRGo7QDT4jZ5bHgKd7W21AgUZDvfMJ6pAbUfNd5ZL1BHZb",
  "key2": "3BE659rtMS7QNgZ3BxqGEWa5vS9VA1oq4qakjSXZVLfmnnGqbtU9mMcAMw5EJLTA6U1SpJtznDZJ2vo7pPvzcHWX",
  "key3": "3epsJ1jWCGMjwBvwZ3Bs8z1oqwUyBBdbKak8Czb2aC4xnk3mqLNkpB7EQMQL4UtFCV8usu1rQaUyRPnQFaf1dnHg",
  "key4": "3wcKMmkvVBqhBWo66EupZCkBCpjFvSF8VzenGetZoFCQCDj8VKZe37yMLJEDjrCqBDC2i5DpjfpcSMmLHznaPWkG",
  "key5": "3dFkXB635N8WnDFpQ4LJjfhQKbMJB2z1tpkiaAXCyNya4ZAdhnJLfq7eqChZYEe6Z9yidc5gTFwgyAytoXyFRZtq",
  "key6": "311ym6sgdZHDgC4UywvtAeFve8ayftnfbUSHV4Egtd1ciXvRwQ74ooLjxAqSmDd626w6VLA4F2RwdJnoRhK4Cesp",
  "key7": "3U29GPe5HQp3pF1HcFPNHpY2jjiH9e4nwqZpmhVTG8iruatugXX4u16uBEpG8Kiv3AjvH98NkwygXPo51BfdYnZx",
  "key8": "47fjRsbYnFHxEjTtBVejrGZmbLPooGnLhk1vrwRTX5fZgGbg2vBa8ySu1usMaAYe6qqte1FpRcXy5ZTtNnw9bjt2",
  "key9": "24wjFKjSUocf7VtTzzS5DmypvAtY8e1Y8cBnoZr5pQYc55vxf8NdzfUtzimekjcBrbRcfcVr2JSjf2oET19HAZ6T",
  "key10": "3KYUvZjCgJWU8ZP2Ntenm2e85zfKuN1krzQAFyuXEaDaM2fsffhJZQSeWs5c4RDTbU84uCVaBBkK9ZoHfUatiF4F",
  "key11": "uy8B5ujxuikzAsBA8WwWx9zqgAR7rrjSKJPDb1BrVBrDMX8CvJmuiPk7qb36GUWGwhUz24ScViaTtHxssA7HVYR",
  "key12": "2upTqApWdhUreiieyC32skNAM1BEWuCcSnUUWFd26M1K9HgwWCgrqigoytan3mSiaydDVsG2Y22dUaefXshTjZ4t",
  "key13": "2mgVo7Yy3YUY6DRLW3J8u87cHvRMwCi2Ub6PwDZr4cm1W8LadXm9W6mCf9fivAwmaJzSJKxq2habyze4MePEbn1n",
  "key14": "4avMaKMDqAjfFccwrE4cSzUUtiUJznUCbahiSpgD13Gva8Rwbif42hoqgBnZB7zihSCiNcPLS3NnbNVurJ5H1Yw5",
  "key15": "5qLvr3dZ2yZ5HWhNNMLVdibxrzSndi11gwxmPncNcRxHmTUMsvVbF45DFTQXj78aV8hGji5Eit8W9jkxPxxCerwj",
  "key16": "5DZVeo1YwPhVPpPP7WnkunBs4YuLH9PFHAtPWnktrgMnpeBQdzM6seYeFDxEhj9noKPZvmz3iCiRGeRrjiMxaw6y",
  "key17": "2evn6YoZbwB2yECnvjumupTHdADtJTTpM99eziK1WioRVPnhyY7YW67HmiMHqrc9MQWzEtHNqa8ar5ubeiMHU8iX",
  "key18": "21xfKZa9w4GMc3KK5f1RVKtFDmnTwdqLiLMDdwit5EAPk8WMci4oXqAmJdw494PZ4xuKahbiCfq5PXYgJYmzvWcB",
  "key19": "3NAsJe9SQBrFWj9eV6hwGRjXSUvkjGSNk8PBiJTTztpRHEYuAcMvRKJv3b5mXR4wMF97NnZVAPiLBXq6uadwCt3X",
  "key20": "3QmEcUA7szpTrJKC1NhsUMPEYMLV5uUt6EB1BTUsLDBtdnWHmLDiJ4id3Hz2YqtdvzuArZyEGT8ptzyQ9YR9YdN8",
  "key21": "2PvhoyJRpqLWUrYiZUua5XuBv85fe84BNxLtWKrN5fAVU4s65S5pqYsPHWKaCXxpEd4TymkaJT8AhwuSqFh7XciB",
  "key22": "NM3duLyuto5Z9aML5wjU6PjJs2LGSoyqDX2R7yp5t9Su9y5s3TmUF4aEbbTn9FDdNMYcnxyMTd167YPXimcD7F6",
  "key23": "4fz2ZUsCPuYptsniEgCUAJqriBUfCQHxvcGNLWM5r2B8Q1RJ4kxrRJeS2ZavdD9Lt9u26wZQWs5gML6VoRjefwbG",
  "key24": "31gUEw6JmfT1PuxpFAwWC5GKXPy5tUpn5c1729Ex4Q5UaASLyCjMjgJKo9TJFEcYWM9AXNQovHXurq8rESMeZwvT",
  "key25": "5zkSygU5ci9CQH37Wj5RW9Ua74o9mQjii5LQzqjawCTM1HiJHDxTECcCojreGwCurLVJfVmMoZUzo6dE3xYZMaBL",
  "key26": "3Sm1RoLDJnPC3iBgENeHawyn45q11EpP9mK95QRuqqVG1paFWwmzfrsW1mbWWNQs9m4CWpodtLPELwpxAZuQ18t7",
  "key27": "7iA4L2MFepLeFJr2uUTzYC5APEVaS61XRomxPV3fwPE8DXiPQndENLVRDbFX5H1UUfvQXJU6ayYmr7woMrL5WMj",
  "key28": "awUkxXY74R1cAyuGgEiWM1Y9sfh227S8HmRun5b1rX3fxG9z232JheuY5QWQZWiXtFtNmqyB8gdUa4oaNYQoQvq",
  "key29": "2s9GDPsngaZsqF1P6JcYgPpYS1ESBKYh8jdLi6Jb5wAAhF3jRP15b1snZZ75baHRQdckmnyWLCFzV6ZSHW8UoqmR",
  "key30": "NegaiHji6MhsYpYDqDvuncWxy7sge5FqhhrKzBB93tHjKojCutYvC7rNjxSf5BPkmvFYbQgkG4fFHBjvu6W6ME6",
  "key31": "5YjctJn2hchsJbUB3P9Td2DsdvYiWb8RSQ71sk5CqnY7KdAKogcqjFYaYiFHDn4AMVLkWsCaqafGGReTA5MRZL8j"
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
