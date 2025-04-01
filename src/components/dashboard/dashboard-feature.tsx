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
    "52x629NGG8CBtAbKiroqqJkiCVY6xScDD9DntKQLfpcRJJP77BqQGbUGDpz8gMLPoSyDxRcaHoqkTXcT8spDBF6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiTWaVm4cEPfPeCFJmzDHiFYBQmsEGjc8i9kZnGLoLLr3VHwbHuxLKrsWyWBao7xU3Zo4ZwMtuGeUriu6g4kzyJ",
  "key1": "3otJ2hxvjMNiYtKGvSKg6jC2RyANwBw3FRqKs28gZUESkcaCNzDUdqnwTSUvLhBxVRgLVxMoq7b1CySDwTNfjCjd",
  "key2": "3cHaQ9dTbUA9jnZecrveFLtfuHRdQXTVye9H54EaXEDZpW8vi2jVtRTYuAoP7eodUVhm1mVvhjvXouiTRKJrMaZf",
  "key3": "2yH47NodbuwTWMnmR1ZD5J7W6hpJcMKVaHeWUg53mqUfz44oMKNiRWZsSZj5MrgXyMM6WMTFM8Unq7hX5TgBSaG",
  "key4": "sWMBdfz6oM1wVG2TCJFbAFhop4tsyUqJX6teg4qVzwVqkYzstg81i8J9eEf714Y1R9EFvBZwG6PKWecAeAREJGH",
  "key5": "4TTb1pqhSwpi8G7fe8KhrcxRBUkAxUqUK3yU33HrvgUu1ajXXwNJ9WdUxFVwfVbQG6rPuCurLvA5KSZFShawRhyt",
  "key6": "5RCzY8Sr3uZRaaA2wPApq6aQUTHytZdXjDBesKt1c8Ff9g9eoGw86tN3hmbNx1T93bE3T7W2JaKZ8df9CBFoK4K8",
  "key7": "4Vj5W8u2k9Pi6V1nA5j64gjQL8nqeE4xrwX33w6Ej5nm9GqnApWAjHXGpNkdV3GoH787oUnVQjbehuN2p8Xzf67w",
  "key8": "2zJTDsjj6mNiqQt948W24UHNDxr42rNxNt3WbqkW9wtViH1SHXYauBUUd2et4Vjbusi1tXm9447M22iu8BU5JHeM",
  "key9": "3DWMgFGQd3RqnNvD1ALveJ8Co2JCj4vS7jron1kZTuDUbvFe1Vr53PNQCSPJNg9a1sWkFFTrVx2hgRvyjgMVQHGU",
  "key10": "49eASdbrwybhe9MDixUEpA5Bg3HEg8SR1rMYWvyyApv678eh8CfDUTeGzch7Q5qi3HR8TuDn2gxvTR31ddTmtNpc",
  "key11": "4D69UrtX8YspA197HFnVsoBZy4Tu1mHKxo2kZeMe2X9hoHqYnJTNgtaX8MCH92QY9yQpkemVnH3ZLLvnFmhXMZzs",
  "key12": "5zfJhMFGFYJmseMfmp2opuJ1U5XPNAfPGzCXj4ZtL8j2AD6zJmnwAaZ9j5ZnXYarpVaxByw1yQQiG2FFaH1oMtf3",
  "key13": "3vxHp6HQgknUwy8gsGwBaGZWq9YhY6UTkSGLTEgXbpf1rky5kBdsMP9fndqHtSDBCRULGs7GDvTQ5jnG2jXsxig",
  "key14": "5HEbus7WhhUYX1Rsfuz78haM8JymfaL7T7Q1bbUKznNykk9vY8gVv1ELhBrLs4hbpgwubDeE8KGCM1m5rzBpT2HL",
  "key15": "5GYhiPzd5rNviKz7ogN1dE3SjdGt9UhvF9b7a9HoVX5cwxyM3xC9htvTEwhm8A1Xv3f7s77frhqQRJ2egkTSoSEV",
  "key16": "2PikGkhzg1RVTrfp3dYoaqfLHafX45LtGr6VD4Qfef2ePjo6oeRoUEgDVVbrzHFruENGHX5adLr6xLeQnQEh7DfC",
  "key17": "3cQ1eyrVivdLPD68EeRK4MWyqbukmNpqM44A2moHsbUkMvJtkwsU7hmr1huAKKSGujYT3xp7BK6Kpm31zqUxem13",
  "key18": "5iXTDfuT6ngP3nxZuvY76UQjUtRua43KzMke19JdoWagw6aJ6zbzbjdqguaTEWTxQQU3VYENkEjLx3tkUAsCoXS7",
  "key19": "22Xj1w5YFP9zcAvFoxDCjzpnZnq8TkVCYpvU2AWVXfBu32zdaCvKoMTgLaTzpohdvSB7YmxwqdMam2TQn87CP18g",
  "key20": "3ZbWCP4JwXM6zTrTF37L4ZtfrvhaD57X77MQEKznZQJo5NHhghEQH233w5qHanNRFp1oQyTvrAUVnb4D863Zi8y7",
  "key21": "2wGzSRZZ4N46nCotWKSN9abZ5StoRVU8zbVNW3ji8pJW2VFJEKRQcAeNqz4kcCkscXv5Wy4Hw1WzRQNKRTBoyryy",
  "key22": "4XMWuT7uFbQTDnXyaUcPAu6bo8aLZZcDKHDnhGmXnHgUfNa4yfhvmMzRVLEPfrrpxA7DR3G62j9BL7zNjB4T6ELd",
  "key23": "5Zjs2QVpAjiiVG2VDTi2hUDeQx6W9EtFZDBKeZkRRhDPQ39SGxhfrkp5KLC993WfgjPZVMgi3FRqKxh8yU8p5MKB",
  "key24": "5XSawZadTv27Yuz7C2zMg21CK7CzHKRfkMX1jqewsANUzKR97XoMCWK5gjqgJDTaRXkMjFBfMH9x9R5xRsqvvGap",
  "key25": "3Yfx1nvmiJupTcUseUEGT31JR3PR7r1y94LhuUuFZYWesAWf9VzJ1eCkTDdPARcmqJ7pVDbeyAeBUeun8oZ3L5Ut",
  "key26": "2dzfmFTJUVLGDGYKEXMoiLFLG6hrfz31YZhkGQHhpnQzLMnhuxXkSXjwvA7ys3WoiCnnMomyYurMoCpzR1NAz5SB",
  "key27": "2g4bra7nj4wR4hXYKESBXentxwkAgGzC8ogxeSybA3MQfg2X4PvuCrb21J2c8DSGXpVKqUoL7EY7EjsnLZQiZVob",
  "key28": "4UvvPdv4u2Hs9jg8wnpjqVnUNP88tEGGPhNCunTZ6dPA5v8VsNNu4th6bsvGBomtdwMcN5KQwM2KWt1SG9bsQTwU",
  "key29": "Sjp68EMZcAYRDqSoZVYpjNhegEE4bwJFcsG8wrvHLyaebMFN4dTFsAkY786ieWpibmqDD3LHiSAUErx8RHaSToV",
  "key30": "4PEgh7pt4qzaVKW1cbkHdtNzjKDEgjDJTnsGwi28FbUNJwn6L79yb4tmJWWeyNUbz8pCK8eJf8VY59qFwts8ecPV",
  "key31": "2Zc5GKJ8QdfB9FVmfkhEyKTFDNTWqHQVz27vLkzKZGZvVQnAbRoKPem8hGsRXWdbvkvGubdEcjCCJn3qLwcRK6Dg",
  "key32": "41VmzM71Ye6tCp7Xdajp99cpe9haNj2xVJtjnaUSqHJseAtqr9WjxnAkCekNPiipXNcLDbdcd7gj1TrCkncHejqy"
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
