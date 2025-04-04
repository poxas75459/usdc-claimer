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
    "2Q9KutTCR2iAg74EmpQ7Da7iE7pg3SbmuRABdg72E6BnJJ2h8bZ6pRNxRwXZYLdc7rQg4dxDFGA7dknhwVTNK4js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhGEXW7LQWjZnDh4ApTsDqJoMJDDTTW2rfH9qnhtouMQwJMKmq3V8pFb5HfvT6SLr85K55sreVdfo3TrXSVeHDq",
  "key1": "WUbGgeBa38ggpFtdFzGUXjRJBvxVqdNwvh2HbqVHtNPM69u8BppLbjn7HWyrbD3o2vAdt4Pp8sAjzG2SEUTZ9XM",
  "key2": "2gE7WqMtAdveJB27p8G4qHzmactP5Abv4Prnga45rAmVDPwi4eA5H4c28qmcGA1QGLZYdM8W9evkVS4TiuQt4aZR",
  "key3": "4jGJcHcZeHowxyuvpDDQ1fPJ7RNHJawiJXZeDcJYTder2F2R6PE4gWuJu3nR9VVaWgf3bQ7kQ66qm1XNJtt8nywM",
  "key4": "28NWHFXSnoUuov5JnqVo2AD46zKtmSvNEQVcXh7okG71N1hzQYaCn7dDLKAUG5hVn46HFzCXQkf6tR1j34RhS9TK",
  "key5": "4QQ4JYacagLcmihr59gXG8FWxjN2XP5ytmJXoizr4AwCK8q9YozEq3EcoM4WX1RSp3DB8bniVGQgqcYP8LRJxmCt",
  "key6": "4rBRnqBvoc1k8EsyPEqH9oqZZbCMBgaQkRt7rThQXXkoCDBLvRXzKNwvLVbt5g7gWxxTK8vcCopqFHut5jTstTX2",
  "key7": "YLm2AvZzW6uu9VdXs3gMwabZaAjsJLW9vsSiRjkRZs9YQxUEGt8jWJ4hCRjfc4Ph3r3dU6mEy1Cqv9JzWMzmAEG",
  "key8": "3gXeNMTHyPyVNcwat6aHpVefMSsh2faPwdNBH8SsYcxVzp8TM49FtEJTQcaDr5mfqWdEb2vGnCysP61VdkB9NoMQ",
  "key9": "2vUscbhPrkYDfJ7jZS9ZxsQ2hTrbd9gnjXoTztCH1fzHttGU4ZwQYG7gahSNcga1QaADKbJ8iStVfK54oFSq12iP",
  "key10": "66fECBVsTrTWDq93g6Vv6w3asKkgpjB1QiunHQ25KvLuFnY8GXem5kz3J3ZTLyfcSvdxroaSQg1XBRPwaRgJwWe6",
  "key11": "4mfGcpwrSuaxcV8akp8P3etx4192sQF4zkKq3zkGX7G2eCeJLxH2AeBbrBr6R4nJJMp3pAzK3AuYhY16UUS3Dc22",
  "key12": "3BGeYoHLe1E6nUfzzLx5VdojrHS2pH9SgJBL4Wo9TpYDG7PqZRnyihJfTvUBoqT2m5ecXSTwaYuqf5RKb2zWTySa",
  "key13": "5tJ1u3EV9CDM7rDHJnDMgjqAdeLYTiNQaGr34Kxa3DZHKnzhkvRc1wpHyaeFWLQGFzTzaRTfDucjjx2rC8rLAiER",
  "key14": "44VbkejoiLxd3E6LAXajUuGFdCDWfeGZnSzphgAdAkNU3TL5Rpq6WqNyYHoSYXKjRtPqgEb85K7DG4sgihN1vRQ5",
  "key15": "rj1U9cHdsx9EJCh6x5mA6XDSqnwF2Bci6rY1scUdnckGTZgtg1Uq6nn2PRw9pAyg7qapYLqUej6QASz8iS4s6Qw",
  "key16": "2sq2Qfi7ezZ5pp4DvvwdNjZ9GxdkFLYncMts57UuB2eGFiNuQYoGhfTMx3RVYExPLt62siAZ3Ltt2yp871idedMx",
  "key17": "4tu6iotSqDmNHHp4UcQzJRsAVGXxUaoCtuB4da8Gz8bXVN9zzRoAPGirDhTpL4EUgePvTeBLm3SnSpstH9UzKeqp",
  "key18": "4duEXu8Jmp8Mohfc9nAccaNvehYLw34C3cPH4AuLajueeKhym7qnj7TDcy4JJ6DLEUUXxa2SNcs2GGrY23hoGvYn",
  "key19": "49bU7xpdmZekzEA89Qf1DXMMRH6W3Q7kxChgsPv1RQ5YNZ7b1p2NNT4rAdQG6yTq97ng3dEPAJPcsHiQM55DY2d9",
  "key20": "5gF8uBxjFCYrctuDmL4fdZN8zAm8GZDjhmBUWeJ4c45khiYgCu9h7196FqYmrW6ji8dMLPZFZvxniiHYKGJDEYKT",
  "key21": "h7Kxi2zcoALpUVoQ8HnSgwYUN1MNEBYYrpGWsqpBcjBDjAvVzjf993tC6Q56sAg6HnajnxJzspS1A1i9FATwSkP",
  "key22": "d4WYDZ6mJUXN2sbLJohfpBknxZAoqm7rquJynwPqs71wVkk1mka21HYfkUc37beDJy42cETDz4vMpHpMfmkUP6f",
  "key23": "EwpytRbZpHQqdxJ1SKwez36KfWzfzaXXRCfEwcZTdwm3BoGUBHxTbXqK691s9fnND5BGeWYCCSRXRYwzjQdZVsK",
  "key24": "wa4chSz7FwjdnhwoBd8rRvAATDSNqgxxx9fWQN1Xfp51fP8Cj6iRxAkib8sCnmqsE7UTuZe3RZ5iH8E9tAc3Dot",
  "key25": "2tSsP7zbKuQcr1K8gDNgC4k5W9vH9g8GP4HDB9qd6ZAbUkMdqtLJxcjbUtpqtxtT5PgiqDpNXbGzTHpWoLNpD3tZ",
  "key26": "4yn1fTQTeiBDaWDodYp7zsJTrAUpxabfXnVqoK1BGYdU2rt5GKsA4sM53YoWdRjJwdxT85gRJzpNsMm4NrJWgce",
  "key27": "2DXSeYdPRqBAsNuckHxreJD3s8Lsc7R8xGpnRN5Pu8doFr9DKcUfKGkgtScStV5M17XdhtDHoCytkkZKwLWdz5oF",
  "key28": "3d3GEzMWVyWho1zxqNKbZZRUoT6TuoYM4CEHoefy8tcqtbJE3JnB2Tp1L1XttYcFzipTxrjeK126vi5YU6PBK5B9",
  "key29": "3u8xMD7H445kHG5qG7RDDH6iXyny7tdPpbFf7DFDFe1cbDjTLGNaSbwo9RV5yFf6GwHBTxa5C2mVbgaZPJWCYLXZ",
  "key30": "2xFS7jwiZtLTQjpyqt29Gf4PzygBRjx8pgdYQkqNjqHMrpnf63fj4eztsuLrpB8prooTGikQGFkLX55mhrvN6kV7",
  "key31": "4a5LQny1P5nMF2EAvs4t9Q8anuNa2Wo2RG6SEjZHxefmpotdnSLutq2Co2Ms2z4J582cvTf7EihbsWaaeEb2VjfG",
  "key32": "5PJnw5Kve6EXxn4kks1JoHtFMBHLzTMZ4SY2WJSQMsad6zwsbZxFH4V9VAnDmmrexFLvd7u1vQGNXJMVuizxfupZ",
  "key33": "4D7zNKzthTcbD46T9U9H7Qcamip1XuTM3wxPCZxpkobeaqTf3Gi6jG7kgFgUowVLn9JB2BUUGDDjDdPBBCKZaxvu",
  "key34": "3trh2YXKSTwNdhFhTPPgT5D61PPkZkV48zhBRGaHbrwtv5vcmHzZq7x8XS3wx6VRNp7i9aeimCHX9dGgvEEXpxYd",
  "key35": "3vHgNePS9xLHtN6YGVZzXcEV6327Y1Kaz4UjdP86ZFW11mbJXP1RLsX9cb8NNoDiWQyuJEwsfvr8D3AvMcr6jLKN"
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
