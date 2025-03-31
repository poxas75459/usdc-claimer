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
    "4fPYmvfU4Zfw57DEN3sncrPtpjE4QBStGSQ8esSSp9DbmfNPkTNpSqtWyWPqJjU79jZ8uGooh7WMgDKCLDXrVTyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44EGtSCkeGay1PiXTHpKMLka8SzyViYsN5SMYvZF7FjLYbvZhpK45z95DsGFzXSkASHzQArGitCGEQQb8ZAYMQZV",
  "key1": "TSrNDAVU8fukW3ojMrufwiDRZidyneAWtv2xPZ4x6KZBN3pj4VRdkzCXJqAPrGjkvMrUC3WKK9hQk6fu7c96st5",
  "key2": "YQ74hULxpjHr1uTFTUZYkTemdocHNeCehrAFFinnbJNiaYXcmPyKvn7Bn1wf8zBWhEyLpFq2RFPNsRHT6v3no6s",
  "key3": "53wMuGrArBzzkQpv8m2JMCVKhppcRH1btAznyM6bamzhrgBiHuthvGiynKKHNQtAdY7xcj3RTtEboYhQk3XxYXVK",
  "key4": "3aNeQaznQrxbZmdaLveFAzq5rYqrGuvSSDWrSmcFb4f2pQhq72QJtEVazFCwRiZDMmvJW24ijUZR5D3s8YFKGdEZ",
  "key5": "4vQR8ctktWxDFXD5HdrhjLG9n9NyM1ADCVfUL8tdiL5mTrkbGNPEH1Lppt6psv7EiK9rLfXww2XBVDk4nxS6sthU",
  "key6": "2vQmkdS2oUq4TcdBpY2JJVhe7Da2kveUijXivpuRygmE9jigVQNn87BoRH5rpQNQ7CXtZoEe2x1NwwdwrViU6aQP",
  "key7": "WaRcadQrAim1FaVxiWSHi4gwGECkaWY3QPTbMasPQQ4GrQTcKiqn1hCYdSfiQby5GrjvsToo4dkB27CXceFXgQj",
  "key8": "2mZLyqS1SFey1QGJMf8rZKY6fxBG5sYEVE6XZCxmSQu9KyCo6KbLfqzG72zrJXgWBRs3oP8VN7cwzp7bc9avLKpm",
  "key9": "maLE2GvoWB1KxVDefh8qdQMGQMg4ois6AFuQSPT3GJAMSXmgT8oxmesjZCAbPhSG5zUxkRDipxowfMRK2oTQ1XC",
  "key10": "2RkD28D325TH9wSMthRmdtFmo3MLd6ej5KHLyVNGK7WT1KpRvVAVS9ENAmQTqUTfhrW1JAToxnDyLPDe8kXPGXn7",
  "key11": "3JSX6fYbSyJs9r1ugNooY2zNtz84N9b9DovJuQrKPXvgvqqFS8UCfZAmAft7ir2Yi1SbWz4hDAqbZuRfgvh1ULpg",
  "key12": "5Gkcnu7LtCJqtsyv3c9jYZ8wv9pPDyRo233mUjEYPYEUR7FkJ4NJUJwEpofNMJRdHyENqN92P3Ue86xwH1uYu6pZ",
  "key13": "3TtxzxPX5MyUESaKhR35BcoRcfsQ5uE2XWW3qA12WEBw7PRVzRVpffA4qUUpWHex1sQgZqafUAQTdDXqZ87Cek5g",
  "key14": "5g6aqHyxCbmLERDMQYMZgKXokVJz38ELnHi4MmLLYChRW7cFjyJn7vt5FaTZPwXDBDhPSgfv3KPbC8FCp1vranXR",
  "key15": "5WD7g6CmebeDM1V4E5jFv8UwBkCUr5iqT9cGFih81fXU4kjUWWTgxtJZXCccAUkneaeTyZKCfR3hHDmQoFe57448",
  "key16": "JtmdPkXShJXMXGLJvBRzfbuyX2t2ZR34XEP1XiJj4SytaU5f7WvnXHV2kFns14Z3SFwMzZnt6dn5apPBnwFTAcf",
  "key17": "52191Efx7BDHbshrAK1euQf8znqVaG76rqnAxRj34tssEobuuKqriVydDFWUauNntACBUXUhJCmbJHd6BYUuHhf6",
  "key18": "4ZKED5WaxxgLLQUzQLuhzWZpnATwwcRxWRrVNrPFPktbUHgQxHnkNFsRvBgrBnv7QeHEix4jaScc4JPjgHDt2q6o",
  "key19": "4rPusGE5KkTWKLHeZLdMJsHNzoo5WvCr8MUD1R272jrK6PksDKfpq7Zo7RPVzFNAH2mdZZ34zMo68XpjbT7hMi2H",
  "key20": "51b31HSaxfSfrJNzGjvnNd2uF94W6Yz3b6kpDDSfaDxBAMPLbRRvMU67CDccf9HaqowjZjr3PC6drvnbeDh2ZE2Q",
  "key21": "4hNkLm9cWQuHQVxrKt3ewy6yZp8Waa8xdaVavV9Yz8xVjoevfugMqc7W7yFyb27wkYyPEJwnrV8k1QTxnYQZTsuS",
  "key22": "m9KM8KkrB4fvgnviTcPe93BGnSWEggWq3Vcwa6eYSrrWaz1kxfFxB1pK2eC377zFxHdKnX7nAyqVVs5xVVyXth7",
  "key23": "45VmT57kUTy2hk73TW5NhoWonhtvoXMPtk57Bvgf6NP4MY3qf3JfcvvMc7utAEm9fVs5ocC4pVcujMBruY8P4YeL",
  "key24": "5rHSJWiV3E53fQkZoR2D6evodNi8LPdgRAxnXrkLuafXFhcbhN4XHzp7b1yUm9XX3x2RwJAL1mYdJugASG9wTg4U",
  "key25": "gKfwdfrXgrvNTW8jEKXX1KeFwaGYxY1BmEYQMY6hDeBe6QvC1N9bLT4VDfBFvB9rMNLTgsoPtYXifdagPjxMXY8",
  "key26": "4Fz4YG8T77ALCe7bhhu1coGu9dNPs8RHPa84N9o4uqUWbeoaghmtQkkGLQDH2siaBRxFrLpdns7C9Qhv8MMZaYYM",
  "key27": "49MXhvEEq1teVZatN9wNTZr3HWF76wgsqVY1t4onSKdBoSeJcoHmPGrNSbS4QD7voRaQX64EB2BierTq37dEjZrG",
  "key28": "3261asfu31tw2Q6hpwWFuDyPq1rpvaPB33DXDt4vuP2Tsk51DpK3sHqA3QWHLEbuffoHo1XQBVND688ZpdZZBJ5x",
  "key29": "3WLiYMcR6CYeHE1o2cN96X62VDVeAuNivyVm4iHMGCQw9xmymK1EWofKxhDCZBXmwoKzUnuKPQtGoijPAJ8aJEdR",
  "key30": "UqRkFoptQsLJcW84aQ1VGXP67gUHVZha3cA3fZV84CjGN4vqfo9kr4RRXSRDVKCM96GugP56HJpLu6mcD2rjSV9",
  "key31": "4fdNszQPNNMoEyqxv3gXUw5qkfHkcPnB2XvQRXrqjfE9xqjTMWZ57YtCQKqwfhEAw6gjHTdxfKBuCVQSxqHUQE6S",
  "key32": "5nqWkt7yPhjh9VojGdnK5Mv3wYLx4Ur2Jt1ffuwYQBzZumLFw6cNqWHcd3STA1NT2BSgm7kc91GeinqwHgufnhPZ",
  "key33": "52ozPTsjVPF1e4SZAswLAa2xYwBNT98hV8xKC38rhojwALGDmoPVPnbhepLojYN6Ad5W8o7fTNZzos1oRQf9YQsz",
  "key34": "2DVJAbwFnvfnhFqquWR9K7F9tjN5BDHGQiNVnK6KjFiCWhC9UtgMF5QEVZ3gZEabmQqdJJF7jCsRWaq8CM2Nh9Px",
  "key35": "14Lsm96J84Z9DHNJTv88Ce1nSLjWk1Xokyf6hx8zeLFrDfD6NzL2VK5t7hSYJv9vQXjVQLrTxiedWJYdBKzBwAv",
  "key36": "5DncHW1zmZxZYS6Qjs1bM4JwymWHzAPQ31gPs3M7dwx9rtYnmGmPZE7eQNvk1bixUjs7FWWmi4BC9yp8xCV5iE9K",
  "key37": "7uJMLV6eiHL93TQ32osbvrWip2S7J2QQ5XTUb74ofYdWdG8zbBcihAs75z9aPwRurL2C9gJq4FYAPwSav6esRLx",
  "key38": "o8NHW2h8ztj7nYu68HsVKwc2YCqRrJnaSpnBNPgN4yL1wjccV2cjHjDKrgbcEA4o9nnuwDoqkFd48G61PeR7rUT",
  "key39": "38pL2kDL27q55EXrt1nYWv3ZhCFsG6NuMxKyqykcNPVRhKTRY9QZiD6pSNeaTcv4CiYMG8WTwJe1gK5HBuAfdeit",
  "key40": "3rW5UQo4YMGwUB17Fs8rdiEnCHhCjx2ddCYM7sFPf2T7RR7YyZrCcBGPuva7HTvLucpuBU6YscjNLCqZ8fVDyPbX",
  "key41": "41sQPixwobdqbTZWnXfS25hvzwoKE6bX4mvKbJWcBHmgPKaZ47geLP56Mb3394G5Qin5kuHBWNYeN9m9XtJpBJ7o",
  "key42": "35j7G8SevXLe29igFMsXrNZ7x12Vx4QAH5VZesGuPWfaRkN1R6Ew7M6ZBM48Sjr3oRs6QXekjakbgLSbM67AAZNe"
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
