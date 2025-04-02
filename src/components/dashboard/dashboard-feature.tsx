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
    "3D9tEYVK65ZUSxHSAxeQq74kgQvth4PAKQbwUGanpCbfyp6a8UFic8sfYzok2wmmy1cg3wvq341yVpYtpQhQWygi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsGgVEfgzLCTg6mMi7vxzET6HtymDL6HTTGfadZ45QXMjhGXDCuKdnwhTmmuGijCiXujNqfRqa6NGk5YAEAnF9M",
  "key1": "64m74WWrq9LiQ1M8CQA3x7513B6ykvmtstnS11BuPXqo9jF4CAmSBJjUwCqSEqs4eGfRSZ9PtxeW9o8mhnTKLoFN",
  "key2": "3oSTkyuiAt81MRxA1pg7hTjhJRrqJH4utjhioJhytefc4niyF1QA7nQR9SBYMiaWqmEcuDdtgEp5DJWFTpjMN1id",
  "key3": "5Wc5epFiWy2FRMQ5gas8PArAFz5CLSehSyCsn7tmgC4HXuhroJWEZpieTgiM5ZchZEAexFsJbEErWZyFX8pjZhtF",
  "key4": "3xKhhYSNHrey9xUyeAYkRgavD3BxpZhujiC71WUJ6ZooRAhRU72mCesPKZHnhmHKVCkJx4uDjVu5XPaQ5zcUgUQy",
  "key5": "3iZoHebgXvsvHVkvhCbx6vMzKeJmMjGf2VXsJviTQTWgWzuyatocdyqd6wxgSTKYnwADBPbhXwkfJ36kLsg5VZ4C",
  "key6": "4ALypaTkGNn8Ns6n5FQUtyN4WyWDqS3YuKx3FzTUdNZyuRDAqfZr45SJfDx33wHhNYCjkmjLgqohNpycZiDxqT5c",
  "key7": "3CkEexnKLCxZNCbauLUQVMdkdrSnyQdxLPodUXH4bqoJJrNdcbbDSMt1GjqgYpc78ZjHqn2ECMs2bnDJfFCT9VrZ",
  "key8": "8DwRP7G6mCKYRHhnAWdfLcEFQsPzfLBD9fudUZqNNuFqoJYVzETcHJ2TGuYrrpmKk3xWRvqXwhTuGAStdceVaVy",
  "key9": "3d3jm1PV9hehwcoKHLUMeCJuxzWVYbKTt8Z1gcHs8NM7sxFsCoTisFfaYR93RXTw7jjATuwDVywYY2UsXJpYi53t",
  "key10": "d3W7YKDo9qM9B1QCAES3SWre1hhXWqd5qUo99XcFW3ADhkbdmA7tzMwggastY9cbU3mC6c3psawTvXjAydYrCdY",
  "key11": "3ZCK4D6s2pcigUQR9JycFjRd2DudoxV9wyHredRqpx5t2PR1hiqgD4Bv8to13aAmhpsVhmyJEiwwNG8BJbCHoWz9",
  "key12": "594TcQU85cDY82eAvme821H4GR9Wm4yw5AGwfEoYYiALNuBbGWB61MEgtPmT29r8NkC11LQsbjdzW716f9WH55PA",
  "key13": "2TWQZ92PSuWJnuCdgTVx2uz9ZAYRMZBAhGDUXHiNJsaTBNCdYfywGqC4hoLAUpP4LeD9hbV9Afukib5a8ZakNRnM",
  "key14": "PwrcqCDBPgJxRjTASuL4hz1LDkQaQCp3DFyER3zSRons7hHiun45AStgdkGSzRQ86Q8KW7XYwL7zLkhixt6cZnp",
  "key15": "3mkrE9wCAjsDxbEnupXTymUYL2B83pG3KDb8z2EUFyLsunLoR1R2Jxo7EqyLViQY8T3Knm97H9cdijLAsnqJjefQ",
  "key16": "3BEhNQC4JUGREe7EkezpFATbjJPgneJ2SQzVLY9qmxMThZewBuPgmgR8MJUkebT7SXNqp5e2U6yLrdYCaNhnPuL7",
  "key17": "5wE6vVYrAJSDL85iyEum3gqd4Na33X9pPWEc2zcZxZQtuwTGx1wmengZWNnF2tu9B736euXeCPciqDkHWQKdBdoD",
  "key18": "4chUmJkumHUrLDapb9v2zwDW8pqHgzyXKjTSRuxqFhyShprpNKN1ZidRGWRJufejfkmMBn4Z52fcRCAYSY9v8Byu",
  "key19": "5vVRXYj2m9qJYAULnYqyVZMNFQwSPk7LpPBZDB2YJe7WbPTgTPB6hhKSKr8oKKEDHV69Hm7xahZBeWoiDCeV7c9L",
  "key20": "5X86uFapRG8K8kVEnToi63QyQMC9s4YSNM5o4kEBjCpma2o8Q5a4QuKFiWngHR9BU2bEComZNK1oYdCGwB3m6BR1",
  "key21": "38pqfsb6qSVjBSx1AYTsscTmkGYqKtS7PRtK37kwXjeS9mX6GgHbZsR9YcGsJucnmQKWepF2uYKsECk3Dv2Y3eUY",
  "key22": "2WBbuNmRy5QnFbPMML7qxfFknnQEoTuq6VXXcLhYjQgnXCq6JhDAdV75xL8DiKnEHzxzDF7DXwwMZ7ENg1dcv5hi",
  "key23": "3oRoGTTK2AUQyFtW1xDGbn9NWubsaR37fCE1YEkCxL19ypLCC9i3eLcqt35t5NVoWw76CUL7DLTd2HrdE3gM39TR",
  "key24": "589DjMDcM81LEr3enjgU6KhABNp9Bqp6TqoMztWuPQGopUMSspGAsBrHmNAFz1VWjAnrmYpt7A1tdENSsyXvhxzu",
  "key25": "q4bRyM62pBAPT7xRhifvjVxXAPtf6uAp8TxoZCMj2jX1HY5vNTU1hEKwEe214GcedwUeNEFZRRXThWNtWwN1DjU",
  "key26": "3Twkh8sSPm6WuQpb6XQYfB8BuBkv9MY55Q7rWs2XjNYfL7wcnrbB5DSZVd1U8imVH2xracNfChXnU47XHd7sXtKa",
  "key27": "5q7tWVyzDzYoiuPhmCXvfmGHSgb71mXYDEJQ37d5pmdE7YCjJxNhoz6PLo8u9tbJQTYTBegFxrMhVVCwTkAG5sqV",
  "key28": "3HBpqxGAr8U4U5DhU4jLhb2chwCcwxqZ49jq2TwvG9FRTyNeG89N79SyqxFsMoEm1c6DYkEjjjra54pRe6UtezNJ",
  "key29": "2qDSJfYr4mD66Y3otQDFJ85P6S1JRcJjS5Q1cVgZuRdJFwaQoauKvrNTU8H9edbeoqZXEKpJpr5AoUwUq7gnC2Z7",
  "key30": "5mkkNNeSv3RxYrhCsuUWcufoEfjzRZY8DVkiqQydj4HcKoiKzRdEWt7UqvtP8XGsPKp3bRrw9wDMA7A4wkgVkWJW",
  "key31": "d1sXT23pL4sAzbnXTXs2iTfkfaiuHdZEKuX7ngUEKHFiErxA5WFwicb6DTTGKc97H7vpBFJzmv9FBUqgKuJxsq5",
  "key32": "66snQbg7aAsw5bfFmtJPXXUkqhYT8URXVm9nzzx8L79EpN9gewUdS74tSbQYWLsmZw1P5riqyVjjwzpttUCBexne",
  "key33": "35KBPpjgQB5CNJK54bZFCDQ4QbVbcr2hYYptgsvrPffdWtPiYH3rWZwaMJWPZQTmQaviD6XNR7wxG4pzDErFeDZb",
  "key34": "359uCe9CyUdLhkCYCG94UKZPutNpf7CDa2zQ57DUa3JownoC4HE5Ut47cECJvhaMZr3oaMC3AVs6eNKi7ZxcA5nD",
  "key35": "5TQgx5ncDQpPXDn7Q6JkytcRtoZQD8QefK7dAafgKsmuteDMQCk5kjtwD8cQs4TZpDPQZAbppYkdg9GQvERi3ku7",
  "key36": "44Xw1vp8XxYXooY6Ce4uBVbR8SzXo8XK3mWNQrJktyDFbLrJ9WH8FrQsDbBZkopBtXgeSF14HiFtxXxzCjqcxnvY",
  "key37": "wPouCoJTngrsC8PWYgHnwW9RRztCyVZJ9yi32bL6DeGnx9HCpvhqpb4M5CBt8JWWuAzLf1srXVewbQBe3PPZyXq",
  "key38": "P9MGrWTrxbYRvhgtbKPS3MmuLi71wzC1tCuFVaXQCdbWCY88LZRLpN6HCXxeHEeWNqHS2mfyrMeEf8EwBHuPMMy",
  "key39": "2MjrZ6h2naw7tPn9EyX7YHgve8V1PDhnQ9BdvqQuvUGt4wMSEgV8NVFxvqtNpZdGMD8BE7jyq1FspiR93AEYvGxE",
  "key40": "65T8HTuL9aLovm4b9JiQNL4p8ao3GCJoA66FQxaEZp9Tis7vKNzXrf6zareX3a4HfmKGpwKLdRtcQt5MuXjYTCjF",
  "key41": "3h6BWU74oozhKBSMmAh9G9R1iE1o4RU6idFoL1sYZbfYMoNFAemQiANiUpTtC2CjoAZG1zadBUJq3fPV4mjbEsgr",
  "key42": "9MygGUPD67EQjoCm1Zt31dNSJSTUKzD3rRmWnh9qwyFCQrB6pTVBdD3CKrHefHHDEcsXrw3934GgroNSQPWhLb9",
  "key43": "4A38qWBGfo8F9rKSigdA4GHeUXsNfAK2VoqvYBymLPDE8PPxcXLRDjDHW3PmnQeuG4QrNQWL4zW8VDjtZtTYfewZ",
  "key44": "5Vb5t8ZcdJRzUaFAYbJWHPWgLeVMAZJt1MfxF5vv5Bz7tETNPGcCwEEWPX8Spc5Vzsz7kbviSooo96tz2coMVW2j",
  "key45": "46ZmN2RJ1f5fESMow9tpvcTjfHJimkREpgRRYwga8ZFhL3bLgvsirhcXNAekxDtaPcybRZGxQFzAZtKfuSbJZRwH",
  "key46": "2wcisufKxFfQxc2PeHzsGxech8Z6G9DC981yLeFoz7L4Fo9dMpPetssf1cFz3YEFVpa6uxm6WoRQ6T1VeL5qJiKY",
  "key47": "26YG46oqNfxa7f5VFnTu187HWj53jabAi4knPaXdTKFjn89WJPxK3dZds2t66uP8mariA7fGV99WxinZq4iaXbXQ",
  "key48": "3QrBVt1jg1d6o6V12bg6ZVZ6nJkaPH7zC1LE8i7nF6coyuSgcaHxkgffHe1Z4RcHiALdWFRrvA85vF9GNX9LDd3y",
  "key49": "2MkWqJncadBdivQ44NUdHWoMBeXzDkmUdeMvCb2x2W8qM5ip9WLT51vyPoLeiTydkThCf9ehK1YDgf6xnfR5N2tg"
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
