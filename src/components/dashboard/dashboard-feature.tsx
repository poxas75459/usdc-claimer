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
    "4m4SVshLo9xuDZrdCALuqP7eb8NvXUQK17mu81cPmMtQpkmQ8BKbM1xd6BzE1598owGPtgQ5YMzRzQ9YbzpGyeDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7wxpawymDm63BD9jJxGZ61WD4YWdoHv96Rp7gJ9fHWQK1Xm32gUzpcqBmzQ2QFU194c2TgyXVUGJMazRujQ8QKk",
  "key1": "qMHjHkNXNYYr7KRVJWFEjCPKoHjxaj4b1KhdinQpLyV6JkMfnBmdukBrq8oPm9apUjhaoDxrXQHmY4WtSAqa7AG",
  "key2": "adhVyfFpTTL3yz8e2YDj578LqYazU4z6xzYpVqREf4ZXcWh4jriv5Sn7NgRxqSmhobhNuyQytYtV9o5GpmdaWXh",
  "key3": "5HR9tWAkHag5PQqCFYgDepv7NSEtneb9Ssw6LwXhnf5rrvRPXR39v2pwfep1z3td5PRescUjFFpybvnVZM4XYEfq",
  "key4": "2jWVnvAGffGjmNQ4KsLiPttqhG1t3xzkbcEKRgJdjMDFAdKRcA1i2rTgRgto9yy9J6Ktng4Wq4R5xa44ASApx7Hb",
  "key5": "knhNrSdPHzErgJy7cThoJHWSoDhQR1pY57wPYBEfgc7kuwdJrppayzNZ3sjWJRWngB1U76EFhYJgqMmxfH8ajc8",
  "key6": "3n8Vj2AYkDP9u9MdbzX6yc7xYFzqyPwjWuwsx1FWbv5185DzDQykFdM8uFDnduE2dus1dpwjezWg4NNUbazeCZvr",
  "key7": "2q27RKffb2Me8Qmg2aQCroXh83mUp2UFJVFUFAMjSEf1Nd53QeuWyzMhkNcALRAuATpu87iKSx3Eie82zjPuS7Ax",
  "key8": "2aA48YvmbrAW7sutNBTptfm6Uf2MedkUaHZhTHZfEKEUUAQe19Md95YPCjdmVszgHL4GQeJveNjBg9gPstBzaUsN",
  "key9": "skR29YeStoC9nm4xwazZ2zYy6p8Bvpu63Fx8UrrczjHZUBC7xvMefbr2YtmQEYQxJz7fpryyaqYLUxmuQmdNnvG",
  "key10": "3pWBbA5Mqz81qJto4Fgy7ijTfVaXx18ZuyAiWVg9H5kAaYgKNU7fbK7r9vuxpgrLTDMT7nu8GCnkKCH5Ja9DwU5n",
  "key11": "2ZWdFDxPgZf7mvRK72cfrupRLxBVBtbZ8nNK4dx7jpGwvg3PAkVzfbkdscFoBNDzBbW9fa3rmv5LZsJHe1LQarYG",
  "key12": "2nzdVCphV6iiGbcLJt3s1bDJYfKdmkaVtFPtiPZSRqW6PZmDcHfK3c8SKU7Ckx9pRKJiir5PFCAT3CUUubhAdQ77",
  "key13": "AKaMSJSjFtmzN9oxKLV7meA2VF7ZaYPS9wS4WT7guwRZVSGCknAFJkGQLwkkY2oFAAsvnmV4dVTyKKj3M9gjCUx",
  "key14": "4dWRKJbmV4DjdcHrtNHHjk3cXSrpAqmbrV5GWoWCwJJkTy28JaVFpmykokoczPocWc5NnEDqt7xLedzYGbSFZP9o",
  "key15": "3ipQm69qrDe7rLGvqbNKC2ad38Mu87jjcGQX3FZR2U1WX96e9upG5E5BUN2QKHWkDihqLpNAt11tDSjHZrHQp6Di",
  "key16": "4tL1tPUPr57jXHsKxnor34xGtyybrdMUWLK1XVRyg3eXtqHFkVBgg3CvEQo9xBufLfde2w4i7NK9QWNEMvmGvX2r",
  "key17": "4Px7EWZGg9iqZNZcdX13pN9NXLgW1UZnBHqJMSqVmr83Dh1FgdtrUEwZ6qyfgbBKorPdxeWvckbMXeZVcZ73hksP",
  "key18": "3J4jwna8oE8JFCkTzDicQmQ8m9kE2EqsEByT6m9NrpxPoV11WXodsD4PX6WdfPzPSrm3QnRFQNdK9gSrUYniVBvY",
  "key19": "3fvFuJdwJw6pnF2f3rkHyXj6SLkKZZie4UD1wWjaRe1ERVhgqWsNbvbA2YYtjE65J3kBac5Nhi5TQNGCJLviCXSu",
  "key20": "4pvwp5VPKd8uZsy8JjMcKQeAN98SZqBbxerWt2K62bUtBV6zvmiQQqGTbXfbWk8RTkG3dMB5DF6j1f5h4JcZfMux",
  "key21": "385XbmJeMcag7o8wdnWamCqdkYb3KeZ4dNzY8H19ZwwuwqniH4mMfnzDGSSV2AcdX9NzKC4p7xELeotd33RKT7xG",
  "key22": "3BznT3ArE4k5amLc5Cjx6ktrBww6LbpHueormSFQXHT9xqWD1p3BUcSwizdT2BDHA46BdLWZJNEVxLVVaB7m59rw",
  "key23": "4U2tFm537FtPHEfwCPsufJsWfcvrwWJGY9KpgwzJiKkPEnq8mHWeCXT9wM7x6bPhkckFFKbkJni3ESqgdrcRHDik",
  "key24": "38BgSrLmUSpkjy77eLAG6qZudi6H64FqVfxoKhSh4CLW8FmqDX9np5Zir77RmVPgRtGhvmBpNDmkb64o31SEzE3D",
  "key25": "2mJZKVVhagLrBqwsLJx75A6kUciA63jvCvvcYMStguHohknnsywFCJQskDtxUPczccW4QyEjUexs67km7fwUjXjg",
  "key26": "5VTr5WrPUfPwGwpjUKVJuZuP9dwZ36N94scDAeKjyKw76VErKSEg9py4iwrYJEYDibuz77396iJScUiezEhQZ5qP",
  "key27": "5iTUkcDVnEszpnEBkXTgCUh7AYQpvXd27g2QTZQZfdH9c7bPYHXkutag8AGBajFARxBiwyKAycMPwYWY4CEe1dx",
  "key28": "pEKsZhJSQn6WWsuhhqTVUNj9bY8ZVSxJ5g1DvDU7MitfgRXtDuaxa9yaMtejxw4AtdGTgzMysDXEpBX4Zmpoxnz",
  "key29": "54g2G3z2WcXW7wMeqhddqbVCNYwP2juPeDNYiBeoE9DD74aTfRaFH3kdJaEdSuyGLnqz4bPT73WQ7XPR18hy6mQx",
  "key30": "2s29ik6M2jbBMEyzKNnQpzpMQN6RBCi86rUEsYc2DcoEVnDfb5bAjER8jUpsKtjQ3vfhb5rK4FyQ6EP2yPrkr3U2"
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
