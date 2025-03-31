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
    "3QMVHX5dwAHXr7x28TvBT5g1sv7928pY2nDt2PKaJgxWAPQGSpwtvvRyB1SoZ8K6XPuAFqyC1cSR5hfaCn8z1TtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f65SsTNeSUd2Dy2R9z7RFrdGw1VwAvoHwWB2QQRrPN9MWiMDb5VoDAAHU6xSMQLeV1au3RAfBRZuAZMpbKAifUT",
  "key1": "5tE6w6as8yBbBkVcXZssHzw81jYhjZ5dsRBuaU6ByoAxoVN4xTFrKKiUiaYNQdzHhqYM4zihUoA6Ez3947oR3gnp",
  "key2": "3LEbU7AXLqWjYyK1Ftt1vvsHAWVtP4r4bVhNmwsbBscw7xnJs7muWSkvBbWpHeFwAy1gNPo2aT5URfKqoUXJRtFY",
  "key3": "3gLAxNNrt7bDUabEBQrM61egAtjM9KrT4g29RxVJq2cCrnFsXKBF3KnwfnqJPCK2Z6ZFHrxrUax1CfSGNbag5WLT",
  "key4": "29JhzFaDoXwYJjQAyTvUzRH8ycKvfEXT6aPxPFbeLuiFoDQrDDXfUtxQV9Pv5evMcyvULuWLimcbw2mBdvhap2aq",
  "key5": "4aai274vHsf2fwBwvbnm4GcdKmc6rG8uC7Sn8fcAsMJWCYNPy5eqqzCL7f8xArKJjcG9mEVzCsBy8fZFvgRM3WAH",
  "key6": "3WeTPbNXN1GdVe4SMj2tTqhABVQCjbt9A9YjyxdooLX3uPSe4Qp8ay5sR3PgCPqADoCGA42ssHziS3pVrGeKQPt7",
  "key7": "3tNCiQPaPpi7yhdoAEiwMRAhPAFNujBp9mHips31gVTh1fsFNqPJVhsRAEu42wXynxv2EtTvEVmThV2kwqNG3LBm",
  "key8": "5tXeTjZxMRLzG4FVvAt362S9soU3XZPPrvhEVegdW8TzH7k8NQ1UFRwXovyLcKvjwvF9VSN71crnjsSf43cg28Hh",
  "key9": "3Jn3oTg979SswgPmM6cCdhgxUzKuPhJyks3beXnUJu7xT5nrgdzAnKN9wsQ6W9xVn5dPCY9K9rRZDigDXkFUuurw",
  "key10": "2cL4R6UHDEXMc64C8JxJLDb4V4C8aby9xR8t58WJ3gZr2mTPV1HjtuKvwd8Le7bt3Mi5oMn23B5DZFBVKWrM66mg",
  "key11": "5hgiWVJAoW4FrGPvhH8T95nCmBG2j1qDkQYEJAFLUnQS7iLGXg5PWv1nR6L9topwdEE8dkFnCnULDYdMiy3LgY97",
  "key12": "3H1qGA1NwnWdfcyBUETPSwwVLDpnRQ4HLhaZ22zLHUri73Qm1tYEXAcKRDa9sXqB8CUvTQCUG4ksM2x9x18bNHcn",
  "key13": "2ochVk3rA9X9izqwgMo2tnPvTdKQYRxLzQq7Fcnek2wRUkmhXqLCYntnshy5L3cPFfb1L7iebYr7vdFkZa9xtZgn",
  "key14": "2RGVKjnkUkZ2o6HxS6zMpn8FxVuhRaqDnosLGFimTBV9E3ngjZr7ityJU6Bt7ZVPCzF6VTT2sSiSEapBcaR9CMLG",
  "key15": "3uajdiosEf6GwL2RG48wPbHBn9PPHxe79Kd8n2vgmEwQy319zwKvdjEKPfugPCLctEhLq2JCZsnykfBYCqMQuSRk",
  "key16": "4wV53K5N982nDRLrKWCY3PHMFsBBjMa2bk6ikXjDCETrMFEqFgCjnpcKPSfhFjrgbggGP7mHHkfiUQMAKPNuHauN",
  "key17": "4kFHbcGF2kFE29PLhAKNC4SV25oB5zLRA1dBUGC2ZcapHJ4djNEp5XGeF1RcsiUSduGKyc54M7oUh4H46gk3UoM4",
  "key18": "AQEBs1S7EZtEuefqcf61WLqbQUvAZjWjnjMsYxAhG6eBCcV4yzpvJv4s5WTzdeku6T4ZTGnnTKFUQEAm14isc5w",
  "key19": "3FZkGe3xkgBNdsyVunUqD7JWXFq6gYaoqQcnBvddnr2PY83NNaVRTZbytG8Jp9gs5urPTkMZadqkDEVpscf7X9H6",
  "key20": "2ybfXD56XKVXfc3xhWomAwqNSpe5yVDx43xUJp6VJfkXhcmtE3NVYbLqnrLccBRxx9wvdPoim3cs2jajUmUWxSgd",
  "key21": "TNggEF5UZyDZQRys5sBrGraWaSgqv3EKLHFi2PGKFhDqPFcJKZydJqVzSnh3x1C2y4EsBomM5ikPoxesbZF1qeb",
  "key22": "2FXguTCcmQkb1aLcNRc8prbep1svXWBurbikscD4SLQ3NDhts5B5ysM61MJV7Bd29pZdk4vVzpuLMEatZc8rqKzE",
  "key23": "5bKnzLPpwPcuspL9axW6JjdDot6ERRQKPa7AgZzGZGdwTDq9UYxHE1jTBm4jPDoZVdP5Gw5NZQ71CV3RTzyrqpAP",
  "key24": "43yosuWL29W4rs88XwLzpxU6uceXk4wiSa6cHMTcNBLyfmooXnpoNV2JZyrHZGkttmU2r4YBNYyrVyeYeNNUHm4B",
  "key25": "3FRXgX5upVrhEKZpt5S5yRsrW19J1bYJMKMF625XSsZbJNrwW8UF8ggwcJ85w8NtbwMMs8bQPoiSiWjYDAzB4H5h",
  "key26": "4FFbgzJY9zU8QxVYP8sLmxGU33CvQCBTgUyCN8VozQp2T5Xu579jzHEyRVSJVqPQF9tKt3Hz29nDp7o5zeAdyJ26",
  "key27": "4HVbyX8ADtmoLFq8EhS2dWikjiW4NYqLYLrEpz3HsBybBRbNANULG5X1vcyumBBy7ZhoXXCx7rxwraFr2s2rN6WW",
  "key28": "2WrLPED2pPYRjZSQCPYNmKiarSCrmu8dCT4EVfWKyrxZUrWwDrhpxu1g1Wi7CjgkNSPwmLqsbhduxbKXaNjXMCuz",
  "key29": "5C1NPkKR6KgQJbnTxriXe3QGT7AUiy5hQeYhZkPNrZcSn92D7mWhrnRWPkY3KN3Wb3MR6Z7HaPiaNPhxKVudhUt6",
  "key30": "5YaFfTsXFRaVqQRt7XFm6dGqRMSBhuM7dpud2D2stAq9XbP5o124UGqCMNaM6Gq97kLpER7eVcTwZURVUe8jumx7",
  "key31": "4jcDGLnztRUpWgkTdbVaHZ2yKe1PLduAd2SXyhnacHPQaWdFU6CLP49V8tDZwoHSm5gHG2v91sV3tNmooSQa9E9i",
  "key32": "4qXqAZaiWT1cBtKnurUBfvsadLtXBqjfF8H8XeBg8pFmK6HT8EaYmRbZ1Kx8V9yierLTyif7vvX6st9nbRFaW2ja",
  "key33": "5qXVP1YWoKRJxouXGFoYQepVmHHTLxqBS66GEaXBB8NBTcXF8AcbtmTbQ1jXY8D7sNQRg5ivfxExsKNqu1EcEMAC",
  "key34": "4cipL5Fb7Z1cyvkRhcb2Dr7QnzgAbuiG4PyT3s8wtTwHo1Q59FQ79AMrAs2iXdrUGxpo8fsixnCqzpz4LuWryb7q",
  "key35": "2jL1YZXytA9WFBZMAXWmUJ7aFJhrp7Mho9iYpBZ2HHeufxJp31PijJkRc7xdTN4Nn94WWReWhwqbqxNGscjpyw3Q",
  "key36": "Evu3g5nJRiF4Jw8gQTtfekpbQZVLPkvKespKX71N44iCzdgjMUXwEbqaWGvD3ALNbZpHtC1Ux2oo1iTqaULKuy1",
  "key37": "iXtB6Z7Ch75JizfM6mbdpUZUo7ABWCXvw3RjcVvwMkPgonmFLwNoKCDe4DxPqgsAFk2YPi9vjqTAbSfvmps67gS",
  "key38": "3QVWMv26HY5tvJECqYgoawPRDSzQsMMkGebeY3gR5RntvUnFYNsEDneL4sC3mxNi8k5VEtCvT6ykun8fciqz7ayX",
  "key39": "47bjwpigMkErTDrrM1vdSqHs7sstgNUesfVt7x5QTdWE6LkiKNiMDwkCBmL65edyVbQDkPQ3Y69twPQZgcSfe1L5"
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
