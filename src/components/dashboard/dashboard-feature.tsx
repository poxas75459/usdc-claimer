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
    "4onStG2xe1bfLUUKGLQEmNTuHFVAi4CFYFM9wtkqmtfasuRXnacEP2xdJPw66Go8inMzFKHqe7ZgsGErfrhXUKi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtsATQxm7iiRBkA6BQRhFfLq1yUiJiXjmLh65eQTGtWRiRrMT4Qim5JzykMuHhDVVcGyq4UTxgPbDCQaavUQwvm",
  "key1": "3xF6frPe49dUzLyvhq86MNxW9HsKEa7zruPCdSMtb79w6v3CBbDYc7CSzMNBZ2dvvLHA5N39oYJ2XjfVBWXcQGc9",
  "key2": "5agP3V15vqRrBTuBRr1prvVKAAF9NLdEskj5SG8X646ZrckRrBwhSrQ9P5MgGHu8iM5C6BdgFfDBBgkvVYLJLSwr",
  "key3": "fSPA1azseSKzESDgBvLLVocw4iUqkYcyR26gMN7rQ7DgyuPGyi7HJEFP6Ts199TwApXevY2359MsF4wmFnpYKaM",
  "key4": "411PjNRRfaybsW6SzA8zq22jgpLDXrQisWVX4gFDvnocb1DTrFMJHiZ7BWKLBYyTLR6EVZanotHqDT3Hmvt8k6Hn",
  "key5": "4bQXJbB1uWgBz3FqPeHDbEXVhEvrnCFKp1Wv3SG1skqJTgFV7nL48CmPPXhU8j9EAbVF3deRppnvhYXnAN4LQcz9",
  "key6": "5DnmvoXHe6iBHmHnvCudVDJjqYasjuMJeUGiqvPPk39j4enxJco3RrEbuMfemRtashnu1HJgJJr8GMHruEMdiUAX",
  "key7": "5AmTyxifVVXQYBCT6YvgzQU1zmh53jqDhZc2uCjM5GmZrC7WVdKEsvWpkc1muvm8CRGDYq26PG9XsAq4K5iEVgRz",
  "key8": "RrvxasLbGVDUtQ1bA9SXbW829QQndpY13DCJvUoyV4zMkC2cM4Ws9aiP7W56kxgyCdCEGqe6NjW4VLieahTKzvw",
  "key9": "5qqFNJVew7PUPgC8XtzkRxiqBwpnnisnjqXGkworKfSp5MjEizwj81MvXbr4m1cv6bYJEN1fmDdShWVqoGVRuW3f",
  "key10": "cjG34Rbz1C3jwdkCUqNv62YtmtVdRmWCfccQBgESorLwGwpR5yYYU2K4n4FeUDq9qxrp1neRkGvYcABiemA7DfD",
  "key11": "RSr6Si26h6C4ahP6unruoYmt13kkJCDMNVcU2ke7qjYWoEbMrcHKqPjg2p6YadJxYGWFCDGgqURGYYzMRGLMwJC",
  "key12": "5UNN4xTpaQve6FuNDWrnUFRghtTFhb75nXSDV5JqM9sWcYCsFXSZXHzRe8XFesz1S3r4Y2ebsZZb7FuddVtSPvbA",
  "key13": "5D1mx9vVj78kzJiYHcqggyxYDptkrcJyHCPeAWRhPbDH5TycaukfkPicnb3dMjefLE2HyL7R6a6EVqC4vjuvX5bg",
  "key14": "Guvas66YVs1qpPm8zQyuBRSDptdi8gFu53qH9iogfVnKPzPUqWwjXSzyde2aixHcyH9QwDd87jfjG3ifo36mwL6",
  "key15": "2q41witdxETSCjkPKyLef7GTwB3F67SeeskmWeSugeVmQAud5VPU7Sq6Jpd53cYfKYGumd1PkJHNdCHobL8sb6NJ",
  "key16": "3wRLeU6aqFSUP7kfCn9bwELETbf4ESFL4YUDxZTLgJLW6DGwTSBdNiZekLRfJ5U3Eg4HpRpyu4dxrcs7eiarj8XM",
  "key17": "326jLF9tASnLxr8dTBTGep1PVKJuQVPPohaDSm2VNSJ4JofvPb4WFeVeSLCL8jqXMGw4a6UdPEcxGygvJeFSbzDW",
  "key18": "4iH1U9i71aMaptod8nCCuU2K2xpiDCm9esVcrTXDesD897DMbiXRZF9dtBEXp6tR3XWCdEyPqkBr7vhUbE54VGNK",
  "key19": "2jJJh9c7ub4YaRDznCB6SaGuixvAqDPKJc3RSJ8Lz6cHSxbP9DvvUzNQVpmqA9PPSNDLMkvgb6TUytwbzC9TUP2k",
  "key20": "2DyGHjKN9feNNv1W6CgMCoCdv1dki2evnq1aiiuszeaMZm8p4yLH71f1GQ29UfV8vF12wcWzfZ7o6wnbRDq2i6LR",
  "key21": "2ZXCFLnSNxJdvdHFYc2GqwGRHfHYankQAJkRFvACkkG8fcE8CkWmfqEKwDX6Db3t65vBdto9pxKzL7dwS3T7gYM2",
  "key22": "2ay759Tx8Db8LVTJ5P5cxycwAPRQyeGoLXFPT6HwU7tgScADGknakCS3PYsUo6sd1ULjP8sZxnXRzxT13ioraPpy",
  "key23": "3C7VbJbXAYK4Ns4c2Eeyi73ZZ9FGQB4GitC7zM6zVFnEqntC92Tyx6kEpjhnHTTgtDsgh15D5v8MupK442pZK67y",
  "key24": "4Nq47zHayhNS5NfRckKUyahMPEkkKwNi3PDub2Wtf1QzKPkGqvkPGFNQxBfJfBSgaezVcB9rVfoEnp9ssMD46Th7",
  "key25": "2piCbbArY1fBum9kst9Wna5EfkQaaYTwCU4VEoBpYDhYcCygYkUc2cPcLE9eSNxeNnfkVDCkJWZ8gXqxXBZbhy5y",
  "key26": "3Sd3ae4jeDZHwxM7QrPUjZ2pipnqjYG6D9PmqYGXBhRtQJK4PFX9BGMYtGMd4q49bpM78mhqHSpVKHN2ftbmEra2",
  "key27": "5oUktdtatNw42ZS38V61wMgj5eTNdTmUfDusT2RxCDUvNYqd94gwXN44ncBRiWRdem1YQHy4mEpoa6ggvKWoCu64",
  "key28": "3wQkjsahCA68hSg3GvsHLPHq84Vz2TC5gHWoqQ1ghynt8dzTzyFXzDw53er2QbvkRFsFHjKFnoKpThPjrKw4gUNQ",
  "key29": "4QEhpBfjJNtD31EvDB3D9CppnTid76MkC4LPnMJkLXmTsjnKUDziqpfKHiaD2U8MeEqoBjmaJVmJWv9dLy5J5oZQ",
  "key30": "ouR1X18fm7wwho1XcXvp2YXUsp5DkxnNohTiTab3z1fDqxiPGTj7dpoxJYJZBtuF5EE3yxSNRbFsKRXwoUYmd8z",
  "key31": "3S5r2zqxTwpkTDv2f5PkyE93Hyb3xgUTLNo2ksK9GoLLPuJ7vtrrU5ocPt6AgCX3qE97gWedW6NMghfzdH8chFot",
  "key32": "cELjafvN2orN9du7qrdja3s5tNqJXjEtWuKVwAZo3Ub7RrC127fLKUJNgPNGiCMu363VZwZcR7jrSmNXFKNdPzd",
  "key33": "4nxfLuxtSE5BbphJyMD1sFGMy4xAMRWcPK8kXxn5MFSFewffvE6WN6d5TVgMS87NRtfPVixDdVS3xj6KgSKBDWnA",
  "key34": "2kGc5xcJ9HdE9YPm5uBYyYiatm1pVUPw5Mc3i7m3AejZk7Ap8wJLmndNhyi9K555Vot9foN9jXaPkN7EX9E1o12b",
  "key35": "3sbQNh1PjQPFbHmgrnJQjw728Tao3fQPX3bD99gywaoaPRCffM41ZqF677mWromqE5rTSZZaAsHgH7H531H1CZWX",
  "key36": "mT1LRbzmMAo8SWAm5yaZvQQ2BsSpdeC47ihd6YSvepC6sSXz8pFgzWs5sBtn4D69z2fM8VuWGrZpVtb4Xti1Uc7",
  "key37": "3jYntQDcnUoeL7YBRZHqHLrajcF5fMPjLDqSi6CKdS7QE74y1Jxmsmqh3vKSwTXDCK8hJ2QGucuBYGV4B1nvKomk",
  "key38": "55RpsLFfxNKk1JBmWwzNqwR3sbgaxhj4AC3LQ99YBDyYPgsegPu5tuHRRJiryqHUeFt2EDtfY7fUdtTweVR2d6bk",
  "key39": "3iGXXtt8zBrkJuThntPVSCq5QBwpKDie779osAmJVqpkWV1hCzqhC5FQGiTnrTXr8eUPge92DBU9AG6M4opBL8Ed",
  "key40": "1RYmbkDf5N3N9Auy4gpHjcLczfraf2y8ysf4kV3NMi3vfnt2S3wtatZKwasBzNTCyLBFDZjDA2XZFimxfmhJFTv",
  "key41": "4Se2sycSBnhpys1DeKNDBgncCS7z3BJiE3FazyJihKUtc9fr3ntc45xLy2Uf75qDRMnUDTkPK7fYftmqrAEAQbyd",
  "key42": "3b1FPG8TGxjhu8k9aMVpHTM4DbduEGP1FTDQcfh5uWkf3dpsKEHSaHbjxcFwrWdHDg9oiaY3Ph5mag8WTME56FhJ",
  "key43": "3K6w3gpameTx3WPuM7Gjuh2oAkWsrBSzfGo78RUMkyXbWhy2ipQEkYm2QZSas5pBgVd9kEyouhBYxCApFxfvHY4G",
  "key44": "4DPZTHnVtVvy66Grz1oDHaspczb6hxwzEYjC99Py5wtMG3XB8JLWXdXYRV3M5UYgV771tTkS5M3Nnif6BPjuCEYN",
  "key45": "28Rq4XEMH9h7w14o7ttYDXkbziLaYfjtdZEtJo46To1fPPbL8GPT7tB3zVUNAFkMzBrEX9T7oPvQydPJRNRnkhiw",
  "key46": "64WG5nHQV6CaoW4iXTEGmtHLNz6LvP77nQKojBuiMDRetkmQNR3NmQ6LsXRJpbyM3Dr3LxPdBCzaZ1ayXzd88r7V",
  "key47": "3KqXjGu6wLkHiJiAER5NzS63dw8Z4o48ZVac9mu2fSG7mn3vvxjSdTQSvQEAyYEv9wGm4my9Y7jc8bo9ECs2wS4r"
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
