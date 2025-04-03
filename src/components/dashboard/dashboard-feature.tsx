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
    "41ZVw65rdpNuwP6rfjm4YAYeuSLV2rpeMv1NVstvCFKLFUcmRaH8HeoCUpbQmcUdjwa7DteQiSNtK8FR49ENPh3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7CvNbnCNFx23p347Mp3CmDXBDeNdCg6EMCSfSUeenQDy4An2DzrGsPJiY8AC8B2dUDfBDhNiVRF6T3KCWFtyVf",
  "key1": "SsY214t76yeAcYqspYLrf9aPSZhk6L3aPrXG7qstrVzUN1WhaHi4aKPWytE62ApBiJJVwtNVe5kZ1R6bKgesfrB",
  "key2": "5MHXyfeCkYF4CcrG59fT63AfY7yFCpxRA6E7jirnbfz2mto5MpYGJByicKom6CETdz5uThttTPBb9HzddSzk8Nb7",
  "key3": "3RNZcJsTCMV856G3a5myq7XWNK26Bf5Afnok4pGi7bAF3TFJAz1xR7MpZ8WsckKuiKRKcvSeZhoK7PNYqpLi8E6k",
  "key4": "34Szi72s4bxphmwmd9CmmRjAhrnzZVyJkuZKWwCnjEruEyD1S9RfKs8BQ6RNGTQZgLuBd9HrTS7Z6T1yPnV7VWHk",
  "key5": "45QZey2WXStFKKU9VUXp3cL37pKY1RRximWuVY5b7CiRKMv51b9wxZ1Ki4SoubhvTCxkrFj1jbUMh9KyyRkdSJRo",
  "key6": "2DjndS7rtvqPHbmS99rbfMsbjGdVJyeixt7ofFz8kaQu8C5V6bfDk6aVyQt1xfSnV583hCSZWFUaVpEWDJ6keKNQ",
  "key7": "4Tz5L8VpfSM1c1RobumkRiaJtD2suCrA7rNvYuntsaAZYAUv3BQMyZNVx8WWL5n94r3fBNTzXLxk2jEb4F6hqdCh",
  "key8": "2KMtCPShicNtSagzNVG2inMxuvXgU5mAJDfRjbUx97osRv3cesN6dXCc73cNnaD6ibUvrqXXUzy5u5AMbtDZ71MX",
  "key9": "4HjHayTvpetDr4k83qgWyqs5jhW1BrgL9iqyemkdg5PAM1JTK7SXEp4RPqHMh3V8av7aPbUKFMwfkV1bcNS4gznR",
  "key10": "2yEYBEQUMbCdMh15AxKyZ5Avgyeicg1NGNLFpLg8zNeXqoGkgrECdh21qTiGyCvYrRgNGdMtoJKFnH6svANev7nP",
  "key11": "61h3PMWQUAkfVrdfYT8QLdtLujhaC6kwPQP9ogsfzQN9bLddbrM2rjDrE8XK2af9ysqa8TstHsQHBgdhJfgLLGy8",
  "key12": "5V5UY52anRYcqx7bzCUW1w7jLatLgwGGJcXek2oLhWqitDj6iYLVCMYGmBJ9yJw2ZB84drJhxhCVganHA4j8v6aS",
  "key13": "4MyE2pVY4TftrE3YU6rQPiytRRRdYWb7Q11g3h1ixohJRkmAmoVpPxsQWyafoDMtwmWrtos1DWvJa3JRabEsw2pg",
  "key14": "4o4DmK6s2nmaX3BsYTgSnyzcK67zKMY9DpNQFLMwgf6WrcUnjyn5ugqVPSh3mvcm6b5um6zWU2zuo5vk9qURfWHv",
  "key15": "4hVSuyhXs53FEaBcVQubYwm9wTnVAfexcBUx8FVfcSHezJwN6CYyQV4QBAZAiyDxkHBJqGw26FpBhovFs6dmytYH",
  "key16": "BNni6hcd2BLJdwK3XU53JbzNuhNYytAqm4rvDDwP1cDEE3anYY7XdFeDe947ZPNbuZkaedeX6Gn1z7DvokpgJYc",
  "key17": "2nWTEb11R6rVGnoLpdAECvivFFkUmGqFXkVeHdESKM7pNbzQHgBuGCgD39RT9hEhenHjfCTGc9Ef1e7SkRtLzM5K",
  "key18": "5ETDZkkLFZTXQYZ8akZHG9QYQqimsKwrhYExvnyKLP4zYVztUXYxYBvN98ja9iwmP9ktSHVZot2Ar6NX3Ri9kLCQ",
  "key19": "4WYjuGJhpMpUT22L4MdBzhur7AQY4e7Ss2595j3abdUSZTajamAUUyQzx7W6ewX77sSMqhHqigSbQqBq6JzQWBpK",
  "key20": "4wtirX91Gm4KZV4tCq9vGHrgGokudZTtPKqNQPPMv7LMKhaULEaomthiG7u3G2p13UbtWG7GtrYDWStEWAYatNsT",
  "key21": "5fdbNTXH8R7Pna3mUziPt2Byh8T7iyS2nLezYhi97ogksijpBh1rCVLQ7U3C9L9UA59G7EegzuicPa29dGPjbmYR",
  "key22": "58Ua1yvqHddXQ3C6XvSGAaYshs7S17xn4usxgnjFDGay9rKmTTZCSavHoeNAEwMRwpKu2Vpz7RBEQMoJ6nd2RFwf",
  "key23": "3yX61mofJjm2c9qCrysDC9mUaaFnbCGJRLF9YFnD3seWn9FxQkmMaHDANrNExbUZ2J31iuZry2MPRWtdCbVPpdeT",
  "key24": "2ZKiVcrshJau25mYAPEVYaCyC3J8jghEVTRe9m9bCPHSPTYdZhNNtk47iqxox3eLjdSKELGULrTNiJDByVvFWY9g",
  "key25": "35yzc3y5qwhg9nwcRWiWfhAUJKaCPtCThMgzx7hA4bMLzXaJ7ExeJ2S3wUUMLdGLxHCB6kZsUbvYEFYCFtfR6dtW",
  "key26": "3aJMyKi4jx1gj6wwf5Xwa571wmjHajYNN2G7no147UCiCKJAdhqfNhVaRd8TPMN6RxYeAA8Gxh3euYLFTMwWRv5h",
  "key27": "4uK7s1bYTidyJfk73HmPUzpkJMtRNbKyYSvMwPLcVcXY8gSY3HXdKoFNH97cFrtCi4Tkj3NMUs6oUSQmB2G3YS4S",
  "key28": "j2zaoHNLVcnKTKyNQMvMC3LmgwURRzKupRK74Sy3tPzjUxi6QrDULnoeTyZSg3YkDttg8G3ncTe3x1sPGXStxW1",
  "key29": "289CgKrCFBErLJ3YbMxA23YWZV6kaGvTYAwpTBfvZXMa8JpBs89unw7aqKzA8969VjWoZwYgPQSzfdrwXxf7iXaZ",
  "key30": "rnPj61wgdjRuhvNuGP4RiR2rNo6YUUKHQv2YXJDooogLaSGzXP3rkvjLoTgvg9FBoixnLY54GkyQSN9n1aRFtHW",
  "key31": "5Ry9cW5f92K3AdG6xXgqsTCjzMkzDiboVB4DFjPfu6GxXdrxteMceG54C7ef6uVEPgJfv7999gxfGEHKStg88e7v",
  "key32": "44nHATWf3eLdKTrcNXvxaS7jdi1qeoPi6MZvdmnP3Ne1W1MjkqxAgUQTUZyi9Fjhot643oepFtL72arJWh7u7V7D"
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
