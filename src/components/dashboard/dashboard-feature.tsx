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
    "5MX9i82YNKFbrZAJg2XSqqHDMfrSN9VGWVfotZcnMosWtvYTY1naXPb2XRKe3RDDNLXWKng72cmMQw4bLPpo8Xu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUSicoFyscBSsgWX5FmrcwKKYC79NdcDq9gMuXzY4tQmaS2BQp1gVzEbfY3FhicRWDo7o4c8BMU9xEz5WjExmXE",
  "key1": "484FBPhrc7hLS7sRzoX2Vscf4tDEe4WLsm8FaNSP3eDd6BgjEGSahYcd6kbSvFfw9mGW672SM7jnDPSURc8qQCVT",
  "key2": "3VkXVdinky36FwANtjLeU5r2pdCmUEvY6LQKQzkdZpX58MPQfDfr4KL3ThcKNGja7RJhkKCQBeavmHn6xCQkqz6s",
  "key3": "rw4Zsp9wBsp3S5Aqh7TNXGD7HfKEPGCkEN64WhZBmHkiajbdZmzXkztWXNSwRJ4Nx11uo2wKuZpPS8p2Eb98ZTg",
  "key4": "2SNfZmRFHuXvghM9FaJ4nsqmGGbgds9eZVTx23wwgs6qXneW1LhSW4MwQwiiMozPyGxf7A5NnVLhpkySFHgA1Yq3",
  "key5": "59pe12Lavyw85Pi4RL3qQYr5LHm8pjq1QgjkH93QjQXYhGyjgBiBnphgsKK4QiGmjAwPXhfBXY67RqdY5CLKr1q9",
  "key6": "3Cj9ph5nCVRNnBu2Xmk3FTuuz9SomJmgNJsZvGsxAFVnfP71Z7QJGfRXhyWj4PTtDUSoPabcd7pZjYj7NmpDe7Ur",
  "key7": "34L6Z2inx7WEN6VrizpDRFPjVTmEcEdV4DWn8iP2PZU8fnCwzqo5urgpMLfYEoawNyJgMwzWedXUC3hx7AskkCxp",
  "key8": "441jSUkrEnq8KeFwmQsjY9kXJK53GsHQZWYY3TBEW96s5qtXNrX1rLSxRdXMACXETpm81VD4D7ZNyCKPctLLbWMh",
  "key9": "YRHGXfKKe6whSPZtzXHap7hZZeADGMBHqKLvdcZKbTvemypdc8g1RXNo8bveHRaLYszwzgRZGfeuJQUe6ndHyQj",
  "key10": "54knsreKtaf8AiktcbdcJ18Zn9gZ9vN6VqZUfzizUTSiRuK6AqFD9UwyBJ4JMZsdW7NLogk5ERUovZvb1HxPghhX",
  "key11": "2T7bQwg7R6yL5pXWMmgXMX5NBtxrTLuZsWjkA1vm3ekMn4uhY8D3kRRrhXzRY2LaeX3oTbwUDScCr2ehKa8NXh7B",
  "key12": "ei48cYeiPhYRzMXCk4Y1FatNvyG2XjK8jAraDT6iVWNeBTgujsUmrDzL4jCiMR5pHJBZJNMkUbjX691SQ3kR2Sy",
  "key13": "5b7yk9MSWHg7iJv1YK6QmHDVAAwFNVTutJUYiiNT1FdNm8pF6M2Q3hJAK1GP6PgT9z8s6jzML8QDpbetz7WBHwxq",
  "key14": "mLxC6cW5g2bUGGhYqmXxcCz9FncJ37gjtPPAii6Vp6k6ShfMxCCMEFGgKAL3nxqTE8Hat1h7uo3bZ4EgvMndVph",
  "key15": "5h2ZEswsmPyPvP69DRQQWC8yHHeNmxgqv55DNHNha58cWrWAVTx2aMbmQnkPhuyNMoFLBswpGZN4GQ6Yq57mEqXq",
  "key16": "3FhnCXDx4AaTBE6jtXsFJHg4QkaYgasmtNHn5gE6T2WquAwYaYXDd7JNsrwoVM7m1Vn5PjnJb8Ku1GtjbMPhSsMY",
  "key17": "35bJBkmC18TPegoVkMdmWoGZsAFvz9kxitHq3fKdWSnmX3Q4hLfFWShm9R2YGfno1BdRBiHY1JCzRcDMgX7u6Wh7",
  "key18": "4v25kx8ZgQqhtz44dnMQc3d6EmYgFWzGJ9RET3XJsDt75LqdmL3ZZfL6iavQxmo5YwgXKLngAKV4zK6S9uYWHpD2",
  "key19": "4CrkcU4CbZbZm5KkFPn2Gk9J1RyAJBLUV8NrE8ftj5DqtHTLh9XMGKxUaozedJb6N8Zi91Xi77eXLa79wgzzvdCi",
  "key20": "24KZYCDmrrS6EJMNfbbhT3ug7EY59yzyf2n6DfW4MJejr3LizGvmYABYMLzATEKV4hNhTTX1pLAQsbjC9A1UpHsy",
  "key21": "5DfwsJzVSgrNyzKTsMB72KDrTtsZUceozQHQiMaBEcxCZ1EQaFBUxkGP7ctCRUX4PBvBsnrSc9J6bfKMYGENh8in",
  "key22": "jk71cFRahVz1HSJRTPvDurY6rCojgPJbM9j7sE81mMWTec3C8vbYeXBKfEJqgJYPgcB1jpTBEVazz925ucDhyQn",
  "key23": "3wbTTPf7rk7QnPc6wQ78uMECaabYrRNrfxpxU9knfRHfPcUYtLs88hF9n1FtK1C2bTa8jg1D6Yi2s9NYmJmeyxpP",
  "key24": "4xHDGfDmSzZxhs1SLCTNA1KYGUhuJpBqybUEZXzJzNarhnpYiYeyWv2nhmCmPCBufDmpMx1hiUuZPWGyWUkeHW5T",
  "key25": "4wDASm5zGzsPVCUuzvLE7LrzmNC7kEmkYa2edpvSpvvBKXi18s3GWSatw88nRGQgp1XeCj6QibSyp9vNq8Vvhgba",
  "key26": "5KJrckrPAzr4ZHUa9P3WsaBDL8pPRLa7FF4apezDj5GB9TnCS767XeXXLLDPMRm3bYTEQWHni3m6azXGsq8839fw",
  "key27": "48LznKQG8EdijReXpeyJF6diRCxnVK7tgtSPspfQTM1kpovyyQoGrpRx5GaodpAfQYyqs4mE7Lj7SsBzhr4Eyou5",
  "key28": "4aKwp6ekPxSyEC5FQXJCdU5d5WshYHHxRpjBm6PB1mQ1JNGiVroTedguE8TPn7A2KixugmFeVr4UX1dSafFRtKto",
  "key29": "542ZzsLSh1hTSarRsRHfNXRAHyeLEniqp3xDExiznbLbjcJARC1vyzYx44Drvfk2vW4KTot7bqfFZyUN6DusfRWg",
  "key30": "6665qtVKJDi98xYYxBmgxr9xTYBAFpxnrMfhPYE8EcNLupxd5HHUhrJa68r7NKE81C8ZsM2nqv7n2Co4ok1AE7qc"
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
