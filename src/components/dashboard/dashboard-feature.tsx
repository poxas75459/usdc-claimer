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
    "3hhePBT1ebLdJktvJrXQteUqXD3aLBGYCNYqtEY9Xupe2L2qnubCB1N99XcVg7yZB5d7wPj2hwDURujMVhfxESkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJs8utfeGWnh5jbCespvaBiJSTeDyKUR9V7gNibBK1BE8Juk8jJzSxjLhVJrbxKuMrt8G6Ch8PxPBUnoUsg3Rih",
  "key1": "2i6VnTHabjkyGnvXCJCXLHjjXqvCSWsSLf7o6KRJtVPmPpN78fQ8dJWnYRt5yZZsgPjHBwwfsAzGnAebJj4ktqPF",
  "key2": "5Da7smJUj5tLXQmRCZpr6N2XTAfkCri8ckLBofHXXkX7j1TSmvoiZdmuon2e5L6JSv5EJPK5YGhnuPxodcHFBRxH",
  "key3": "55GRmq6e8zxPpWqGjmd4CbakT8qVoqwtPFhhb6dwHq16LNDyGxZTKiUEqruK191fjTizQvmv1KnYTaNfJVsV6qkY",
  "key4": "5CW6LUnj3cKqXBXcxojMG3V1nvkcajjZYMgQY7ytecg2NrnQyUwgAA8hq5pEeQY96pm2cLuLfuKoWi5rxuikXx2U",
  "key5": "3izd4HGWKA1fa2TzV9FpKqcHNBXKcLc8JHbbK6NW1i1Lq3vNV8P1xKKCoEtKrQ1sYea3khE9V3FfccF4VbQWSWkP",
  "key6": "dYAafmb95fdCxhrxXxZQ4VSsYWJQ3SvR9oq8vR6XaxycdMR1ZRq5ybrbRC3YQ6cSsJkLTDdD7wfnNrmcMkjWMV7",
  "key7": "2VDYrK62qqN27zHiLfkTPZyfBzZ9T52s21BrT8jmDzatpRF4pvJ2svaNUjLhQrAykRP7mP9x1JSztht2L5CBZw4s",
  "key8": "4jjZyFf8sbPchi9y4iCYEpWUCJZ8xse3sXC6xDZocNyn5Q7gGSSpTZv4T6s4wTv2G3Ugpjufk6wyZTDai23vhpRe",
  "key9": "3bsESS5ZKJ2x5KqR78oG4KhHfb3gTyyDQTJ1KbcS4DfJyLYSsioSg1oQZnXSNZjsjP1vUVrsNifEkSAWuGrVd17X",
  "key10": "5GCNbnMEEmqbf9TwTushARiwRhewUPbRxF6Si6Up1uZxubsNzD6kKcjyGt2QPcZeioCjpa51q8WDbHqsZWwy3x3J",
  "key11": "5VkQqHoB3QsRGv7doJnNQrSVwMFZfd48yzGVv5CL7phC87pGHGvPVs5V9KAo9Tj9yPuEZG4dLHFv79Y6QtKKVWez",
  "key12": "4jvcW6HbiRdcdcFM7grUQewr13cjL2seZEhfhh7CCNPVer5hU4bxj3WTdv3z1BiR9e9AS6CWJ5EXgYZ3S4MK6zNq",
  "key13": "3u5rFKZYQ9q1fPjgUKTd5a2kep1sBVmP4Wo8K9M3t2QQE7qNoawDiUKtdmeMnp6SvE2V4VZjvKNM73oi2px91Jzm",
  "key14": "3j1XnVazbnjSxwATz3bvfQQGfjhUri2CYfcCN94ZAwuZGgnDE3nJgJKjPqw9A6Pafcz77gkAewwLKEWThbfqJ5x8",
  "key15": "5ePdm1kqRxwN93mFAkAnqW1XKRP95D44KTbxjP8y5RxLF7DfjFYyvduC2qgd9WoyzVSSMhLZfRoZfJqohpkSrw1P",
  "key16": "5aiF9JMn2SmfDPwQHW5eYjijst8X3d55x6cTSFHmVCtZSJ8i2Jq7rQMCrRsKhmSQShSZ7CfUeHK86hHJWRLh5LUj",
  "key17": "381ue7vL2NvBF1XzATSJRWfJpDNkripmLyYwTu6TXmdGbd3y5cAJ5Bs3SyFpwcusDJHYLi1d9T63kJynysMny2qG",
  "key18": "Fc2sbyWrdePidvZwS3ZSPiLPPUuLtyGUBALeBbf31M2bpGtbJy9aD5AwJHd7Ugy7RzNDyNkj2WD1Q1wgd4Dr3eA",
  "key19": "2Pt2CAEcQkqTum7EisyYE2Zd6yBnssZprXnZjSiBQgjAyBYneQQZwmBMMdD2egRPXsE91cdZhRKPyynN4dsFKrL3",
  "key20": "5wEnQ9w6cfXn4qfk8k5iTrqLjEVwgAyuJuLyMU3Lkp7L3J4xvw8gFehkDwjwKmckabo6oK6vpoZXePLiD6UuSvPr",
  "key21": "4XatxRck8S6j8j7CigXmA1cnzYW5WHH7m34J7iNrkragUauVDRBcA9jT445v5VTAyzrLhK16EA3gcTUhfeFFn7Qz",
  "key22": "5RWfgdcd3puEnNfEausYGAxccDtHq33eQHiGSyK7XDQrRfWRwKqUSG2Kot3uwsAEkmf9nfCTLVLsTpDLzBgJ3pBs",
  "key23": "4XtFYdG6BYSw8Lub4SGez5ov4e8PS71VXEGYcDQzjZvUSMzYRnQMpGM8YjuZq3UmKD2JW5ZrguAH8KU3FmLzH4fF",
  "key24": "5yfcrocfUkVMndmYw3ajWqegQ9TDMnEuZ7yqquANKrYypTj95g9LQnQfm2tCw11h6pbdwfrsgLxLMyXbARvvCFTU",
  "key25": "5nvoKLfkAoi6ftW2aJPrbELz4qkfg9Wkk9onRobpjQiD1LqZJPiVg4qurkpyXRBvU8kNoSt4zW67qcnnHppseSBU",
  "key26": "5ZnsnYAqCcVjiLcUbMWxSVvtno8AWcdx7ScESjCHtKvAkJzabiVosQ9uqF9KPSCz8pCTKvbChpNyPBYa4mw8KDQv",
  "key27": "5Vvz1TWMn6rGEGxJvqYAemf46xdoegCyhy2kmunAV2CgUyRvpxqKHmFYUfHLrkb2U4ZeKhbiBz6mWFS3NBR9Qpyy",
  "key28": "3m4JbZmWsSrVS33qeVGSeR84nMi7Akd9rQW3hynx8Hq5uHzkM8ebPgU5X9d4Bys7on52x8twdtYaHrGC9ua39JFm",
  "key29": "3NgEFMynQ3Q9N1SJZgU1wCebWjEoHRXgrPHxoJvKr9SB8iJcgc4PX54mgxyLinsZxBiTKhnZSTuFkde1FmWkSoa9",
  "key30": "3UBHM4YydWXeLbWF4DUrYKHSfaC3ueXvDcuAowCiE74msRA7FmxRQEenPqeiPhgofDTLJ2nwZmBHDo2qYJxnVQij",
  "key31": "2doqt7gUJFYF97Z75A7MjQdNKyJ1GN3z5CMp86wVXJ1qYwdT59AaVEsYk6RBvpJ8uDgryMtJxK6PLyJs8fMxiyoX",
  "key32": "2L1xXm4HQyWWv3XoZgkfXucGzxt6tFSXunsei5NHhDv42yttHgsdqfFa1bAihxfrGq6Bv6dy7jta87ZNCnwtVabf",
  "key33": "2nfHDheEADn45HciPizPPjjsZwYAaum1TpeYmvzBXXemXESKuavVyuNTCQhWJ9iKrwsZFx6mgnnLR4ZXqhhkE7Ho",
  "key34": "3EDmq71JUHpu1avPRbuxqvc7nzU7aLaipN4Kgrn16v94wn5Gg6HBoY6wtGv6k3tWwJ9sdVhxZUq5s2ekVD55acru",
  "key35": "5MFdKqkPa8TPuH19d9DhJSDCfMkjMd7RZsW5no3cUtbVPNZw2KqsVisihpAHpzaWXkpALK59NLqJbnbLCDhHrEUw",
  "key36": "tnyj5bczGLBytsUaQh2dWRJF8HFu2WjhywKX6PWdibSGe2zX4m92TZQbX6Rsk9pn6SenzBHJRjMYJiBNjCKy4gE",
  "key37": "eUGdxUJCaCYnztiUBXNhgQDVe4mRBqRq2Xvy9Mzkouj3y9UqZgjwb1NsmuyWwLDBc2UDTidtViKsBCkfEE4gswM",
  "key38": "5Qd4eT6TUKowA8crfMfcFTb4nQw13qnw7zeYP6LcfZW4AYpL52Gyuc56Fo7mYshspihghTHL8T5W1SkkpkGC47Ax",
  "key39": "jRmiVqJdb5Mfqh8p31wi71BTyqju2MtdoWK1R6Z4NAxefGqghAvamZG1zs7e229QkVkefzJrk8LEenC38KicXVR",
  "key40": "37LFU45cvfmRCvXRK72nGbLNoXLDhDB55iRMiXUWvBGKqKnUVZfeJQnwpHY2PrEFSvdZxKvhcMWmE5jdbR4QKsxg",
  "key41": "5Utwb61zZAyZCLynccSSezrGBMYGXUhCQsznAHGjWVDuojPDNfkSEPGMSsfrd5pMPXKHuD1mDECFK8RGqmoSciSe",
  "key42": "5nDnn3iB7EY26iuaRWNKe2YVGsshAnN5e6Pb5NJyU7tTMLvjs2LbTbgNkwe4DnAy4wMtuAqsmahvwkKcBBtLJa3t",
  "key43": "3G23xFLwNTFBvc1MK31QgvZ99epkCzm7jd8EM3mjSk6xXK9ZqMk2pjDnRi2peWmfkbvwoX33D5AcLwrCoNGHLYTJ"
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
