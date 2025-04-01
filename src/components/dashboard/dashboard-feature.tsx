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
    "49HdrcBZwbsT4vXi2cMrw8TeL7T76KR4VovMwMEVcUuHR6t3EUS8Gc2a15AVoHJKHkA8HcpgvocADY3hndfLSt4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ekB9ZooDbnWbBubHtCX8AxDH5YXE9PMeUECQH6195H4hGxpWq13XHXGdNzfdnUjpQDAJu6xPnBin7DsAZ3iZHJ",
  "key1": "5mcKscfz3FzEE5iZv6FBP5ypZHy2wPztMNhaDZ98VPbj341yK2npxjtBGLVDubaBNeL98D5vdcgyRnWnK2fYm871",
  "key2": "Az8vHKXT9Vzd3a7Cggn7cXEbDmxipTMdatd25cNM6SK9YcDckrSrF3cMi4U28RvTrEYLo8MYbAkgFx3t1vR3w5a",
  "key3": "2p623L96cJNcx1UhqfVxK1hxMC915cNU624cjdtzydaA5uFu5hMvQcuaBTHd48Ws8y2jk2LXqBMr3Vxnwou5kf86",
  "key4": "2w7iRx56t9AgAsBDLo6FYFqgEdh7pjrwXwkm87Sodk5JhuqBYFH8KkujQJoZrMdpbBiVXM6rqYVZxVaSkUbdUMy7",
  "key5": "58dobwuhYX6gGiU8WWL3euuoa4sPixJNLLKffbsJSCdAuQ4387grNRAm9jrdLcwEoxQDMjNHfCf4xdsttnTQrWL1",
  "key6": "3T6y1xnDA4KZBqUGaSiUPaSPZfaf26YHwUbDZjY8k9tLXvgpweh7fvL2ZqstzwRMW9JsQDA2qQ7MsGmxTCsy7LGt",
  "key7": "QXqZgQT9knXKpdEMjm74Ycjra2gqKktMMP3rmQ19nK8Ywz7QdSHbui5uRDtdWh69MiJEedHtwHnV2ikToR7WXkP",
  "key8": "3BY68EPcU6NA9P34vq9petRUK6SCnm6ra96y3uZ9W4tQzHXoJzse8L5uWjyHEgFmAnqZsSQWm9vktTDr5fXW7RYb",
  "key9": "5EDzNnmNKxJuwVh5gLAHmvy6So2J2LM5DsMhn15RwNzXwMvZRwRqXWzSZSUCQaeEn4jrxUFEPMDzqa9kQdZ4Yy3R",
  "key10": "4AeP8RJKwrxRTheSA7JLnbivJEqkvHnQB3YQFdmfyWcfJHWSgzJeMESJZZCb4FGVCnFJfmxHqT6BGjNNgeoTBcrN",
  "key11": "4g8eHrTnnYNKdfBzwv3FzTgNC6PHJY4hENbhpQswfQLhsj4TDA4ANJb73jPKXHtkp8NSvd9zMyrwKGdTk8SBf4tp",
  "key12": "4JbX7jwM7CeehdrUU6CnDbhJnDqPkhQNqZ3oEsoVmFCAp7KY4CfLJCVHdVbr6BUY572cLFjf8NDWJKGm1vrxCoMt",
  "key13": "22cBQe5T1KG4NQVimurWiWh6UogWMZtF4Y9TcWYyujtngEMiy4DcoUZMEwE9PdrFkuDUEa1kTMj17WgbnrF7YHu1",
  "key14": "3SbAoT1hLfb1rz4ccHARVkVWuvPCL6shbNti6jjZU1V1JG4TUGnQ9HnX7ECJjTbspCMkQwkm339Vjr7tktqFNCCh",
  "key15": "3QKFjcBz15LtrCXxs1WVdf3kqPTAGudGVNkmB4HJagrzE2g6tMo4mFrsP1GfZJaMj7XDF57E5ji5DL3hZza1vr3b",
  "key16": "2vvqPRtjFKAjgqupLseojoBKQRomwWLC2D7DTXsiouEtNem5b67C9h4pKo1D5xKzpoVC6LPmcfKC7BTFnkLdZbir",
  "key17": "uRAKN7p5N7cnfeWrdbCg2YaN6GT58VDhzfakPq5jADDUjh1t7JcGs2Uc2owUe1q5KkR35ecgrCfFVsDhuFCRUuN",
  "key18": "3Qcspq6Z2xjMnvW6guPE2K9EYwYiaT5aA18H7LgssdRDsm1hnbLxn8cAtHYmuzew6pAHnNTtsnQK1muTCmMH1Ldt",
  "key19": "4LRrAUZSUXZgsoFYt4kHVgesMth6rt9AruUvjNNMPahmXJwjv8afLZT1cnbcyj4kFkGFNqX2aa5K1oZCympH8cLL",
  "key20": "WacPH5WthkcuG3AMG7HhHjndpX682wsGg7tMLBQ44ahjzqRXi6r7VAq7T96VhtZ3uL1soi1fLbGygFPxyP7CRSP",
  "key21": "4PRVNnUCeYFfHPBzQKUZWWYqnTmVKkKBDSeocn7N8pm2VcrM98JCV4pts1p2gsUvp4cw2fPfNektZZQFb7wiYg2D",
  "key22": "2vz5VCM3EbvdWj3s9WXxnzfeLUVCENY1xv8RpayXxwHaZ1RocDd1Ev17sksmC6mJnPbqjThvtiuWor9MTXEL7bHk",
  "key23": "2MiXpSd7jDdfFyoj6dbRaKCCfRm5dFg3HdJS1oo7nKWhCFVBH1VBhTkSwEUNKfvu4TQsxcd6tTQTbZVi15gxcb2",
  "key24": "5gaiN2SK9DFcgfG3LvMRS1MEyyenXF26Cz39e6qDuAnHvrPuUx4WZmjzGScvpku9jjDLFavF92PP1Ayq1NCCGgNA",
  "key25": "63CxiBhyayJuMQmA7Sfwe3ao1QarsgkxcYcnSo3mABdedD93EyMXJWnEvDeRerw4d8ZYZYqynoFmGJbqyQcR7Et8",
  "key26": "2p5a96CoAYToXJqQs1AJCLpFZ37QoKvqfC8nGiMtaCGE2brtpydnFcphxgL1HMDMmGxhrqUc6ZSA6rms5RRB8hWM",
  "key27": "43JURz5BNt4GrfcxKaXASdRABZ3CeUKrXdKmncsnZujTxgSx7kMBck6C9HT4BUvVucPCFxr4UJNEmq4ie2n6hg48",
  "key28": "2hgRNQHumZrcNk9sWhtQTNo9BwmCvpvj58vPqhe33irMUj1vCcjmVgNaNrFaVd8fxmnFxu8Wp6YgkYW9zQM91vSp",
  "key29": "2xeUQF4Mn41wbrA6y9o6gCKMTrfDN7UVgXYUDoFPR2U8seVa5QVyKG7Q5HrtWU1P1P8e7pL6uGzHzEH43BRc3sJk",
  "key30": "4yGiLTRxZpskxtUGc6JhLdRd3xLfp1bHjciw6731LDh7NnrHLJijAp88zFKddYLP1D5uqrUQqd7cCS5tERzPigpy",
  "key31": "29UHVmPQbAvG6hhePFGYwTxZeDZbHH1DmKgveunoDnj9ZpXBHBMsqS4KzUEXNEGVmv4C4H7YzsG3LmYFd4cHCaRp",
  "key32": "2fxvcqR5wUVuxdNy4fYxGTp3WrJL5TkJF4FCg9KrGKbTQAxJisDLdr9Nsa6uhmYQJgJmCj9Xvjyc9KeavAg13hqv",
  "key33": "4pTbEpihomnuNQfJA7CEi5ppePvKybvrSjzzsNJR9iFLZ8LPCNLbA2XNuJqxHheG6rMe8vURkZJHxoUinf3LcpRP"
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
