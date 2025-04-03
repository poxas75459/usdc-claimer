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
    "5gR2MLxXRU8FDizHhNoCrnPYEp2tA6XwWwy4XzaUxrJNajWuCctCH2z8AvzpuEERta2NsQLKr7F9ko5yWYgfeeSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57g2VxcAgdoigyQzKKCt33BHzQTZ1dTTDQqn4R11fwSsBgNjpV9PMrN75FMX15pno1itHseL9ma95mKn6Ay4grgF",
  "key1": "3Uqw52Yu29NmsoAm2prxkQ8VLpsMio7o5k3FCpeazsG8mBQ8Ky8khh3iZv7ByscVKMDKuMDoH69RfjGgPRbZbusC",
  "key2": "5bSeLLmB16MBJUMUTeDoZyR23nQGcd5GxwCcoEXWAQtXpmECMGK8NoUsbm29hRo8AURJ38oJXsAPy5i4CQzdFxdG",
  "key3": "55DcQCkLxJgfXm1QJYWWbYCk3Psh7Y8dRaChkMqmnHoG9JLC4dF8YeG9DYhcnVZJJ2AmxoMkNqagcofXnRnyXT6d",
  "key4": "45aduNaZkHMkYtCgMytUe5k878AxnEAp5dESodTN9nzwiVgUtUeL553nx4B879QScskDCoPdaxkGxhkCU84dKffh",
  "key5": "3tk5XHawL9dT64tRQvWCmSC6pdmHWvz2LKnwHZJNHpbDtaW8sc8jJfBvmh3hPrBg9FizwEBvjMBFrL2387WXGiHt",
  "key6": "pia4BUx9pDxnmaxGFWwZgjZ54mv8pb4eKNVcU163P358RuUQiY1Hsa7wcQVVWPfFg7FGpiAXyD6cvsnJHZ1GKyr",
  "key7": "4yArQNqz4e9vrrK8B9weMqDiWUYXS8nc6yN9iVURZ6aQyYxeahuDSWWDj1wQyUMjrt8Wupd7epQbTbYhoiek6QSu",
  "key8": "2p4FkMU1pZN1jt6i8G7upQ4HjFZfzWm94Pm1asqfYmfKfnr1Zxqm47i6JfwvkJCXocYR4ej41QZbMppfH8EnDyjB",
  "key9": "53QnjgBAQwqZKCiwV2v5rWDsuYFvrepsUm89BFyfXHwjP2RWcPsV7EVuQFo7G2ZeicJgLSEnkfP5MxeuYpW58kYp",
  "key10": "22frFNDSvuaKpoAkH72m3xFVRNUrSwtaTFouTd3WQpicDUpWb83LtyKZGxj2N5RYs2pUMyW4B5dSSY7QAGkULZ2d",
  "key11": "64JxAhRtqYjHoxJFTzrURPZt6u1CWhnttKod288kC7hc9w16TMTSuQeh13jxn4dJMGQDoVotXH9T7UDwkxzATJ7F",
  "key12": "3sqHfm57tGuZB22bXMjR4BqaXE8nutzaoXXH13jWk3pT5dHrWTHNDYDjn226WE28EaodyUfCz8g3BM1NiFnr41Me",
  "key13": "2NsVMkFsKTum6WcBMXSt9fSt4pVBPfzAHysqRKSLEz1ny28Fd3S4tgBtA6Bm64PeuThzTvRDgucRCE32cofozQKy",
  "key14": "2oahjBL3QWQd95Q3wP83f84nteSVhvHvtMryZs2JatKtEGUJBodsfbqubHg8R7DMDrtk3VNTdoet4FEyegAGP2ZZ",
  "key15": "26ozLdmMZcgaEJWzD1SRaAE9p2LzmrAo7V2ZbxdX7pCKJ2AW1f8Az2c4oWcBrwtd8DF31Lh7dBZ9Jiny6rk3eAa8",
  "key16": "3CYL6SdRa59WKaZ3rBaCuoV3ZU3CrWi2oDCzx2UiQmKDQpMeHZEWuELvLTrGZcZ2gS7CgJ8uVujMhFDycreGr2Uw",
  "key17": "4TspBX7TjJS1m6upNTRG27U2TrKQmXXfo1mqeoimzGxtsLH7gE9anFFKnbpS1rrHukQgvNMzVbPVEAsPiTXc5DyY",
  "key18": "3UN2AGdum3tRA9SN2dFzzwdeTP6Q5DF5Lw3d8JcFkMBpaYfWjiZEEEDCym63xdBzCPf3mgojBLrTAD6X66ktVVm8",
  "key19": "2ZGPsFUsxMDt3nQ7KFVopD9HpZJDGoYsC6bsBn6UtqL3K3JyRvnue7CeGPvrkRMKuYjb9gcvwCbqCq6VFEMUM4nM",
  "key20": "4ha3WueRhx6KyBmEcw7bi7r1zTUYYY1QfzLZzYLUSDDRRF3QBrHrXu9gTMMtddLZt8pgRFeaYFgxHC6MBNNhPxER",
  "key21": "5RRUoTarbeKPNRFXb4A2vkQ9yMch1TDZVm7RVER7QAo35iC1xDPq2shh73M6UDiyjeY5v1ZMc9k4ruEHsjJQ2EV3",
  "key22": "3C3NRKBQ7CVjeoJsFgDbczv9heoXyQsfSzQAbidvW5rDVkBa9BRWKu9Ghancti2et7vTYv62P1ykpe5NDdpPi7eN",
  "key23": "3HuTYnDMiABmVUisYCE78jb6jW2tzkdAvxZChMiAbtx7cGJJKf8BkT7wE29XkKYHgfkJXpkYAfw8oqFd5ebhtcmJ",
  "key24": "46Btfnf6i3NVQkztpagAGSJJfszUjGqfwnfHYZqw8VWWnWZXsNxt5yj8N7gMJ1S79xvMFAZYYJSgDPzQvbfmtfkA",
  "key25": "WtvpMdPEHff4Hmdyw1QRSt9gXPw5Cq9UrCzhF7rJg9zXKfJNXuDM6FERQGXY6Cayr5SuygBP6SdbQvWyD3F8zHi",
  "key26": "5zXegCekxWH4NtTrd1iuQSB1YsD2WrN9BgNPgmJN73WwDQT5vhqyodyLjeQW5Kq9iSJdHcUPKFeTib7pN8AvYK2i",
  "key27": "4fiGDjgg3bzRjj7YgFtF6iQYaJ5FBA6GYNEi72gSAGPaDSqhd5DyK1CZnxByT6LDgkPBrAEmqo9naKiUnAfmgq7F",
  "key28": "213FpssXMChBFTC6ShfVnKbjAiddUCtfzXzMWy1hiae5fvg16735ibTum3ShunbPik1FdrQqir5AFA1QvGw9tpTT",
  "key29": "5ejww2z4rCs8aZoyQHzZE17nUQjtiTXHgUNpioAqxEXMAZKTmYUzXyRchUh6XvUKhJJQGYonCkeYQTFFYZiSAEHC",
  "key30": "42ZceNdnjtgZx4MkwgH6CL53gqMsP239R88PZ4n7GUc4JjmZyJT5UpnJfxBbG9VBobeugUwKRmnnBQAw7bHsnCkV",
  "key31": "tyTBmbcDyfVCiTVtDPZQm1ZtVudSAqdXKyAkbjd13fw74zmJbHp3ANVTr3E4oeRzMQHurpTibK7Um6uLEYpPVZ5",
  "key32": "kJCnz4CXSEF8DMSabHJCcGAN4EPzyFUmieXe2aeFs9494ahKfpxTC6qWGRxs5cNTedmA7XxEhdw98YoPFC21qLp",
  "key33": "7ukyGzHTzFG3ic2op1JKGjYs1b8AsyaVGfvQPenQw1ej21xP2BeMaJaKh9DoeV13pJoET2rJMvUha6CfjhDXFpW",
  "key34": "5hoW7YDSbR9jJKbZjD4WQ7Wrp4MqgSLFYrVH9bzB1mJWT4VySj6HZWJ5u5u2CWask93XvmianJid5nbPEa3Zw9yp",
  "key35": "T4oEaGyEtjfQxGsVUtqTymS4EmBSCu2PE9HMm6RTmrQMEW8MoBt3g7126oQk9RRao7bArQ22H3LMHnGeEBDEka5",
  "key36": "W8XWG4Lak4YCVggM6YnCin77pbiZmsikM3hiFG9SnqFnaPB1LkpYFjfW6wTgaeL8fTJwHY8PqZi5nSk8gFeNDkG",
  "key37": "4VDrJsxQQndHbb9SzxpTAui1GDSRvGfoJB2ptZRmk4poXYfcFr1Q8ieGVzZ1QT71i8NPckLAq8U7ATjpWsBg1m4m",
  "key38": "3K9yn9nuhLnDyqQxxww32ZfuMh5BFMZgyJsedyfNPZ796Hs2cppTWdLecwh3smTYP9gFAet22uxo2DR8t1ohG5cv",
  "key39": "5n4TRxWwJaJ85z88fPJwRR4ZxvJQAxwxPjqYyfjfpfHS4HkxRmpeQVYwvYx3MUp3xMFSNwungLfJtCRPNgF26sdn",
  "key40": "2KKD94PS5Dhtg29r4xR3uDUkxrvPtufP2fj4kAtmhXSzpcBibEJ5EGhkQUqYQKjJHGuFZc9uDBKXLXd1woHzfWUh",
  "key41": "5ubZqpfZF7L7dfbe7NjW9EZbfMKKqSachovwx1NpYkHpHNFmdx1u3WeSyTUD9eP29m7UqyXqYGimxqgwdgvpAR79",
  "key42": "5n11xpY28a2GzaGNKhhZs5QHWsce2aTpE7iVEVcFkTKZm49CbbQ2yqquyZvyYakBBH5tMvDLWYt4MXZp4aZdm3U7",
  "key43": "5TcXfY8HMDkqcRZNf8prhbR9uugtzxyjLnosmtg5qsEHF8Ew7KbYqN6Bc7H6X1GeMwV1eKqqYzPn5qUe2zDfVVCc"
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
