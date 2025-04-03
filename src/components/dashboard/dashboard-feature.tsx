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
    "5r2cKSTxDWMySkpFzCRacXkcjavqxugqf2VHpsNtiqpeNA2Jw9ZCMPHfSvszQReHSwfwSL5qbdYbRfvYqJpzGap3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iR4mMNaaNQwss6zmUYyXBAFAnf1cahda74igKayxgiNmphwJyHjUY6EvA9WvaVsyNRL5jCKBp7yMNQRzCGrpxK",
  "key1": "3wqc8sfaKj2Jn1jEHbvEAK4YYuSo2XTPZUTVXPBvPJNUJ97upycBjJuntvzLnmNS2A6y8DWQuL4rfpydp8Dz4Dty",
  "key2": "2QvK4oi3f1FLXzcC5akL2DWqVtUYaCdtoESoR2ez8jLvvu1G3PniFgRAA8JNQ4pdCcSUy5RNPnccitvF6fzNPX4B",
  "key3": "19bQ8Gq9CzohMEiE2SCMo9yzkt3XgHYaFkpux7DoNPc2wfq9pUw4Kpzq2quQ7dKn4KrUB9CA8YoZorGuTy3kANF",
  "key4": "5ZjGLNk5siDVUy8JTDE1hK9V8MMvarXjLwtfXsVFSfMv9RDfmUU261bGVYA2c54wdiveqmJBfQXthXHQyBTBi7XT",
  "key5": "5MENxwXz73jQqXyqkjKUK8NBTD3H4a9j8ZcbzkNZgbKf95vCr1fZX83ZWihMBudUeeVtoNjuVuCJgda6nLJiTGJr",
  "key6": "ovPf5yqg21PSXSgdjEivAfNqJQrjrZG4gTfySZhJPbJUM96c1hkDsZFWJrF2eX25kY8YSuAL7XQZfwPXmWv184A",
  "key7": "5irm7Y7ouuDB4NyWTV4fwAbBWxn8TAqFc4SBh5nReLUCg5eyW5mQieSy6T85D5QAJKrCe4WhKDSGAC1VdEi8fi54",
  "key8": "4foWNpLkavWjZKTR3866McxfpEBukqKqe3M8THQGUDANne9jEbt1npmYxRN2nsBK1JBxdM1ezW1ibnygPo4yfb8B",
  "key9": "4RixBFaRg8KzApD18tEU72oQeJM9tUD9GwpFSB3EZAZhCnKxNHWicup5UZJjfsCKJG66jHBNT1MCKn6vMSX3nQ4W",
  "key10": "c5D93wNx66Rx1GJGG3Dd3FnBejN2VWP5umzdujd1aJ8MAafr8skUMBJV3V2ggR8HMD48CMWtnwh7MRJTXjAKRmn",
  "key11": "zrecH9JxQTWbdUUfKtiUkapMTHv5ELoNmko6dDv2BHPzzSc6NUCiWAJ3DzWzc7xkChnzTLn74EdRgECRALJ8yiR",
  "key12": "5DwZxJ9SeJZEg9h2vTj75sEUY3ABFt8XjBgE4i7Y7aUBUUVfgwgQKGSV7DbPqXDuudUHboc6MVhyxctMA4yVsaYC",
  "key13": "4k2TyhCSbQ8DMuXrzaKgHJFeAVHgkXsAJfWKWU5p6MeVMYwkPdv41DWjUrmoekjowxLkFdjrmp7PTo5gHvAhQTjF",
  "key14": "3q6aNR6jd8CP4KnqLECCJQzcwDoijJUNtf6TfUiRU6cYQiXGeDmKyUznX69kPLVLXw8LwfbRkiUb6BP1wiPikxqd",
  "key15": "4inWa8LpBaWz6nMnfZWZeUQvTtL26H5GfnfhEgidgfUt8n4fVsXpGcBHjxta6CcXgm7wUgSUC1Skmy3xx8YAmYaa",
  "key16": "5Gknr5x1geFom37CkLXUgpNCNJqoNEEsmcaVFBWcEDCn1pydtGfCey8RQmn7Mpfa9pmpmuVPf9GGh7afvGMEaivZ",
  "key17": "3QRAj33EZfAv4AA2APSVzDNXmJVuBMsLE3L2RwjDMkKmhLbBJQ11thBF5CV4L41Gse8fx2A9aiwotzhFjjSH2gYH",
  "key18": "2prgF7YnXowWXMVWfQRmyMJk7kbqEfWPCrN36usT23zHRyJ45vo2SAq6JcCNaaFMurHLEXehMvmjRujJsrj7ficD",
  "key19": "4iwKTHugMeVwD1rKb289ZwVcVvGiCUYrx2Mk13fCq3hcWbeqEmPH5BDCtrpThserpg51Ubh5H373KaXbKwcLdZFr",
  "key20": "5CYwb36yYopizHXzeUJsbTJCHCGgCjt7aMRC5v7jepuA5drpUGg2bNQHdkXcbbwSajgzC3vvDrXXCDtGYf7G397G",
  "key21": "21kUfeo4ZUfuiXtMQJjjj4DyYuJnwQE4Df68HGyheSGM18zekjHG3CuR1T61oEXSNd2FMLbpGbCaa5T1EggknxkT",
  "key22": "u6ozUqprp17dJPmTbuSAgy1P2oPsKCkPu3R8sjK3no8csJtBSK3xmD5JF7BuoHA46J6GtYPiDUUnweSgjbENaFH",
  "key23": "3dToJdepP7eta8QUoJjwhQW2fbsVf8NZnXgGcFXokTNMnhddv2o77KtQGgf7XF4f9JXGCNmirXBvyvni1VKtwoPs",
  "key24": "35PPxF8FGzF24893uEJ3ZZ1nbgN3hwhu6bRrCWfBoiWRyarSJiKAfeA5ZN2vz8Xai71TVgCiA7Eyqs4HRvndSQRU",
  "key25": "2NHzFFbMnHSib5zoS4Pv1ysd3mVb6nLdu2rUThniaVYx9WUTVYg2Hu1eGDQtoTLKoxMMYjwUbh6bUGrEYHJz5RUZ",
  "key26": "2fGTRi73L6ttBG3zPSPjxR4RtM8MFpGmeoG4qdAKgDJFiihVJiku7ToBK79TcfY187dMnubsxhK32MHj1sLyaCa7",
  "key27": "DHXnb9s24TB2DuhsMyhfb2FcBcXNEaUxF8Y1jPYG1Umu2grXeC2GVds3v5yH8oLiwreH2LgbCzSQSteU5qYjZQu",
  "key28": "2dvL74WGgu7nBhs9wTYMtBLBQpFb1FHtNaFcLojGhnNs6ZQnEDPYSF5rUY12r2cNcSs5LgiSWTsCHA8zt3mFv8vL",
  "key29": "2hH1uU9FuECNPggqEK8pgS9DovnBRmhvAKLbfZjmxiYrVwnz4Nf6JTGkBokVWRCA6CDite2K45KXJasgs61h3GdQ",
  "key30": "23kT2qsW3EgsyVzZxgnG18bJHGN4z95jfCLE91vnNBS2N3C9bARbsp9uAtM3HPgF7nMYCR4qQjT9t6pqUJ2ruzzs",
  "key31": "3PNnJXHrC9em6gRhWtTFG6oXPAu7AyHt4y7BgG2NFhekJxCstogeLgKjUVzwWVXnMZnxcjksEXnvjrQTSu3ePCfd",
  "key32": "31w7QFkwkevrFSvt9RoMk5r3qUPajbXzV4fH7xqVpdqg1kMbJwrUBwA6rZhkp9Aib3b4gqya2hHmegZB35LBRmUT",
  "key33": "3R9JbeuCHDKBqC8yxMB35KWGDDY7MSTWnz3NP3HBUtzRfiJ2PYPGQHfLZEBLpjwtpVTxueQVD4YCesj9jUeM4CxC",
  "key34": "yaf4qeJEhKWVtK7NP2cP3YSZ5b1iBqgVfLTe7YPSyUNp1udeb2AxR3ef5an29U7BV4BFga5T16HEY9rLgcNRWuF",
  "key35": "2JVjwmRcXFoeRSTqxJRDNMtMK6fwGEk1TJjDymrxFCFht44WosiKtQSALPYY4s51w2JpYqaUL6ytewKwe77A24fg",
  "key36": "5mYo3YKYUZcEE8W8NfoCFrhT8KymiFPjTtpwENsqDKuJLf3QypcsK3Lmjb76CYA9755DcTq8cvEWMWJMgTQohrT4",
  "key37": "3UhmJ6C3FVg5ity2JbUypBN7MfqkbyDgSMH4j3LTmgiky5GZ4voTvPA4CrxhVHKu44mNDCDosDCDgnHxqLEQRqet",
  "key38": "3xt1xp3ZpekVVRvuvFDYAbNQ1t4rWDhWR5ZKA2P1YER55ZRC28whDGu1Z92zLpmRZpK4hDGVaVJYM36VcQMgXrie",
  "key39": "58ec6bQtKiqY6jn3XTzUMJuyWHu7QF343tPXcdbRuhQ3L5Myk6TmiVf8sQYu8Kkh782XtFh5h5wWiFef9DLRPh2S",
  "key40": "DpURpxPXqt8QNbKDFtFsEYvhjcXSLhKyof8chM8FPqUbQ3ywFHmXTLnTic4cjsWFxhTwEtSqmvqv3D1GSrKYdMt",
  "key41": "27w8uPnXpYa4uLHzgXaxfswzod8MvEdxEr5k4buVzxR7sgB9mf3njBzq8Gcokt6HE8XXqg9mD8aGGHJDb83gehvk",
  "key42": "3J3S9ozxBqcxYJJeuPrn8coyfjYYje5jfUiqWwAYWJVWd5SigdrL24hB9NEQQdc5dfVeeroboJQJVWhE1NmbZYPR",
  "key43": "6zqVeDNbEKGGUxNZJiHdY3Ui7A7rr4aHnGCNqbyeuCaoUE3LDgWTUjcRti4zxuKMdTsMd8cAzgf2GPEgQsNsk4N",
  "key44": "4hS5U7KPuPowLk8vzm4TdMW9afrem74ri2hXXTDcdVYJZL8j2zEkuHcgPQ6gNYDv9GWGyhAEmypzVyuG4ibyatTn",
  "key45": "2FoRPa7q1PC5W6oGm1x6SHxwQh9G8Go51qwuACDLcCZ9HQB9jRzLJwTR5kucY9kcJ1pKER9eF8Bn3yGg7owY3Epx",
  "key46": "4NSsTkqsrGTctmg4NXi9EjhVJwxqw3Uo4EBE8CzQKgcQ58WJUhcMUNFqGm8bwEi4ps9Suie4FpMaVWGxThUhzZuj",
  "key47": "2QJfQQy7NKmcrfggMwpA9sXAft3mDvPjTkpz5bxJfQYPfNBqKJztwG7kAm586RU76wXszU8vSoqsPznx1C6wdc4H",
  "key48": "4fLiGXCtkLjVb5hFDmrebDsYBWd1mFuwJFz2SZuDnYqYDLbu6zKqfydA3dFfmvdgWis3JmsYN2EVFoHrJbkydP16"
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
