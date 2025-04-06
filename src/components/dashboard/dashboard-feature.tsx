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
    "3qjpezXyB89gYy5SUQ9v3m8A46WXCNdps3aGBt7EJacRzRtQxmeAB8uxHGrFaWMvfmMBixcuUx4wp8pFdEdu9aqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DugyXmCYh2XmWiVP84wtHwNo6T5KWm43xZX8Xbv5EBM62gBpo7zjTcF8FdFPxPTUvDxjDKDbYGx1JoLExXqd1q",
  "key1": "mSvzZpWKpQF4ARyVyXBbT1Vi6D5Rj455XMH7YYtRAiiW6Dq6DZXe7BnYka5mEmYeAaHaHt1ML6Y1foNUYW9Je27",
  "key2": "67Lu1QhMJtedHK6cJuNDSANFsffQvaqsHZuDHhFfBN3wcmGWLa3amYFBJ5CBNanArijfuVaWHLoAqouXTQnqcc1Y",
  "key3": "5EQ8htSTH4MhR63pbsAiM2twuLBSbmxaEHFAKoPANfMG2sCPp8469hNqEG2bytXP6Bfzj62pQn2gNWBy7xJJpdiw",
  "key4": "3ASFH7yrpd3VsXreXQdratanFtfF6Y64c7mSFkeCHovv3tk74Skca9XeTVmW5UCv2S1E7W39be55dTh9y2tSq1nX",
  "key5": "3vu8q8usk3dqj3Scm9T1WJ6vcYp7wVUtw8CLV8qZVdTLGDAqPLSSkXRtVxxdMZeXsHRLt6rxyaz2nfxUjNKUf5Uo",
  "key6": "5RMe6jydBczpX4rhdtN4HCfWAjEp5jWuti6wGJsLu6o78wUbm72KbqmKj6UDHYoBZDooeLUWndRoCqoJim37d4gw",
  "key7": "3xAVsDQz19PUKNAE1Fv3i9gJfu2umxdHodm7D3WAd11FXdewEk9i4omPQhVotstQCeoNhPirmMg1AQVYVdbN8FXT",
  "key8": "S496wPjVb6JEHTxnCVTNbUjg6JcWEvGj82QKpCdp6oixmKGwYyc5ztvZf1o7Fww8SsUywLk2MW3TJwGcQWspoj2",
  "key9": "2PFYnvHy5sAX69Ymgx7ci8Z17ydGoMw6u24v6P6MjxCk2ugCqAidumS67Jvc8U6DWdSx7H46uudFag8cgdowa9Fr",
  "key10": "cokDMbrS4U5Nz3V6ehxtYpdF6EHEheGF23VdgLM5iCVcYz6Vx16ARfvqFSQfp4w5h29EMSyKDHivPvCibu8scdP",
  "key11": "3Qp6zXyJpbpyzHALxn8XBDhFxXJgZxx7VtV5RHVAu1MuJygP6n1dRZgwPS2DUo9Qs4xR4TipoYLPvL3uzsENrTs",
  "key12": "2y7eTHdaBMyhhgnrFx3vX686rJYMYSJE8Pb85UfEHXD4DJCjirqLJA3XFDijvd6rpHr2cuqc2GFM3jX1NbmaKBQM",
  "key13": "2Vte1tgm3V2YTSGCBtDzntbncxShePW2dKnpBGWigFqiYSrwZ35uPKv7avbrun6KoxDXwnQQHMxCTkgLdFgmf9KJ",
  "key14": "2fVkPxm8mw1HCGJcCugL2abHVzETwuwQjAR37XnWGHHV3aJaK7mmqdGqSwbZZb4iXA92xKqDkjiEF7h9CcXB3hDS",
  "key15": "4JVkewLA2T1dgbqnwz2CQymA5F5REWyGoVYU9WVH6YTxmxWoEgUdk8tdTXb2ABdup7svdW1jLFuyWM1VXanSrRis",
  "key16": "UpYfSfJgqY9c8zvofFfkTFXJcnxn6GkqdeschnMVgRiXe8nvycJmbHhX5MbHk1fA7R8Yrjs8zYy1hLAwKGLstfs",
  "key17": "gJgCuKL5LHmiXHvD1cgibcyg7jjTTBJxn3zMQtcAC2dTN9F2Pco8DGnTXVUQRhxa3fDQfEtYMFB6mAUcdGqTwV6",
  "key18": "2n7SmioLkH6ThKhL6TyzjbAbD8arUwMDmpZBvdrxS2HugE1a8vhRjeg2tqSLVuXAoGe1sUMgwFAg6jeGJPPGwV9x",
  "key19": "2hG9VXAW9EDbKsdbjB7xJMHzx2ZyysmJUmcrV73fFHYSWyyLAVVvrQBnNb6J8abdKA23PkcENDKpevyUabALW5jG",
  "key20": "62KkYS4FWjsiHvMawKJdA1Ay81QSAYn8zqFQry98wwVKA9SbKwU8hkn5fBUmAeJwq5cq7WbL6GgKvYNUp3ctnxvW",
  "key21": "3QqyHbbdunSj699jAVRfmnn5SYKp9YGoZwWpYE38Sa9dpMu29YFmgw3iD8wwZxUb94Vs81VjQpnGurcjP4D6ALQe",
  "key22": "4WYgq4qt6SWUb59xXReR7ARq1wTYYugwS8UgBgQCLAu3Zwq3cW2vumvbTpXu3y7DbX98jw74XKn5XGLCdHgf9JbY",
  "key23": "TZTCPf6EZavEdYBNgnBKdxC5cKSqYvZ7YAmQ3jogjjdsy5FJaRkzKNtxGN1UUSp7nK85JULbSeNUUkvsyFodxtm",
  "key24": "4yyZZXtbyxmL6XaRNHqxUsBfo94onBPmnaavm9JUBpHcNVrZwvrkxnotXcinhHgzk4DQe4JYvDuW5oo4FNMX2DjX",
  "key25": "4uAN7X3tdXtYpPKEZ4xs9zMmAzFn96347GfT9wzu2ZpwDkBHpc6ZANMoq2dmFgxZHynhvmqtjDm7AMjmRPhp7Mk3",
  "key26": "4NKLiTFXT1XnJrACii9Fugk6E4y7kuXJeNw3E8pQYuKAssG32k21VmtZBtZTDND9v4fPkWbCt8d6Mrjp2FMEBp79",
  "key27": "Tg1uSD4GXUcdRM9Q9fqwPkewKWY5pCazrqkDGXicjdgDTs54nS9wXii4eqpndts6jidc6Yo4Ga9HGqLTzpxtMXF",
  "key28": "cgoWPhzAifaoGZBUKszj322LxcsC2qcvL1ExR35DyNYefYFuKhdcQELWoMHVNnnrECiXqh8BK5HMFBQjfJPUSHb",
  "key29": "3dLVmcb2JWpwRrDCdzGuTjfxp32d3P4Z5ZzNArnuQeuqiBnjGU8pn7tSWAH1n5Y4uHayoXFzz1PkmtNUoqbjXuTG",
  "key30": "3LJscfq6MsZJ32JbQ9RarkXEDcvVv6rhM8vzdsYqJtoDyV9cibmfcrVovGQrPVHzDvLR8jKBZ7ZPnHNHLLQ74W3n",
  "key31": "5yWZpNjjCWFsDgpJNMisnRRwAGgYzNJC5zPybArS5e1yGQ8pd76d6M3Lgrp3TgZ4Zk5pk25Tx2bmaFMw2tD34mRz",
  "key32": "4S7zaDHnYsFUtVppYG7XwT4TqX8LXwCayXodYR4QdY13HCfSRhiTqRZXrsVVQViFEByzH7Bhj68dqRuYcLWWr3XP",
  "key33": "5S8Vx5f7YV2yrMf6u1eNCNeUYGngaCkG5FPsGwW5qVAaMogGw79ztw6mvNsfGmfgPzKa7HxaZwyQ3PM1f99XCmWa",
  "key34": "2tjX6wwYCBxHjUcMvs6Y9t7PuqyTTVtJ4tgc9ZJ2abtvojg6c1Ue72HfqngrDVgSM5EYB8BfT7GW7wtgetsqiEfT",
  "key35": "2f3iDpxaK6Mm5Bn87zxqtLMFMY7MfurEaQktYXdtyE7qAHJuhxW4YpptenAyxituqNStGdZ3a78A1zMLPqspG61d",
  "key36": "2esPY8hpnowSbtuPNufchpAebskLfAP7jNAvXnWsSbCihxHPjSwDDJ2BMXdL3jSXosv8MG9GXopvJW7wq6gWhikT",
  "key37": "12A1c81fg83GtVocTHgtj2W7fBvfpzJDUis1VpFgfAf4GrBWzLw2P6M4LmpCpvBuiuLwG7abyNYXVFQyoE1kooGR",
  "key38": "mVdXDEvN41H1b9vBSGfLeoRBAS8BasN2kps9cNC8GGFUZNZSZ4wM6LHL2Z3P63DnCJ7astNi9dzRNjGVWhcr2ii",
  "key39": "2g9NS8X2QnTx5kifnNJSqT5y7toVZjxTv1VWHXpbB5Q5fFJ3NYNG9JQQDQNKtxGHSeK9FwruepiBAqW2REjRxZAw",
  "key40": "5xGWC4pc73zsjwCMy8WMAFjT9cHgxbUDGSjojPsL3VdsFraRJ158dEoQyvsWxh2Di16YZ6r4Dg9wPZUPWyoDiqaE",
  "key41": "3k42qTjbZnxM97mjwGftj8ZXuEVreAHujKvC9KwTXWS7UDxFSPFZ2B2s3tXeZUg25HDkrywdwpgmxhFbcy43ZK4M",
  "key42": "41KkvgfvEqjLVdV71jSnDvuJcD1wfVoC52g85LkJtywheC87kafvZxT5LUp8CLuqjybnS7Szrh9berc4jfKkRMQM",
  "key43": "2CejvjVUuZoJyHYgt3WrKG7KuByFLNN4LeYXeunwiJVfiqDtn8ttEoQ1w3hkoyAfw1diWQCpmgjzK2u87R4bgwwx",
  "key44": "3R2F9BRH55caccavUrRXbxkyYb4KkE2pED7Wrpd24514GGzvHs6XYxykzWMKTP1xxipr2Yoc42a6FTLaQdWGe5eV"
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
