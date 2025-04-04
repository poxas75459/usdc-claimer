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
    "2Rdwo4p3MpK4QyRjvkcfL78zZ9M68fnJSm4XNJWbbFSffWy7NFgKiCbN9RdniRdjpEHWWttch792esWmGzNjXVfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpH86Rcjg7UzkmZD7ZANYkDpyqsucRgdXnssLkst5y4yq4oHUbddbL7CwhXZ5nh7qdiuazmShwLpDeh3yqiLRYg",
  "key1": "V8vm7gMjYkZovQr5EspVy8zX1v43G9veYPGBWQh8XmfdXra4UNdt6B1aC7jNpqsFebRfYxuwPLHcKGDmWruF7nM",
  "key2": "672nzMPKaktprjURsNWdbHBUSNeeZUJPezwB2jfWdyh74fJj5v2DEG1yGxNFwjLJReZhAaeH9vARqfp3bCRahxZ8",
  "key3": "MA32FcbAs4sWLmR3eScRrQquy92Lf5GugVnrgr553f44Hah4jXik6eEyXZF7d7DATdE6YgP5pA24BsAxPMtmLrZ",
  "key4": "486PBLkmpA5iVVvhgRrBtcNjmrDP2pFZhnp3xzoEV4wHCaRaLmnaKjVh4zP8K7fhrTdS1tM6qWDbGcbpudo92sbk",
  "key5": "45yLVu1Ry73WSoT6C6a1WxTnL2PhAnTJYQ29CntHgBvhwZ9rkyAazeoASAkKg37sdRx4AdHsn6uFK8qxaWTnAnU4",
  "key6": "2ajMw1SeqxSBYUCyFcivji54ie5eoEkCh5KrGZUvRbLwzdq5Hjf4zhPLbcg4wVNPcd1u73xJaGRHpgWckgPznDXy",
  "key7": "LFxq7wxy9B3TSNUokEVoz49H6Pit3v93cmXsHR1iGQEL9iBJ6FKcHNg1o5BA92xDET23qrbatMBmGaVA1BZ57xw",
  "key8": "2dU91JRHzmxMV2kSkcYG23SNHNj8nuvSzBBTYLXbqKhu3BGE8Xa51z56GKjj9tfufiZGGEHLXnKeK8WeUjMjHppV",
  "key9": "2aCPWxzQLf27rByuL7kjWTnAugT9V5k1egkUeX1BKw5RA7rH5RCCEt4MZDgr7uG4jmX9eirYtVr97tnbHiEA4Kc9",
  "key10": "3dFL5gc8HA8fhqHnkVtGntXvPBzt6ZUKojE9HnXEyibFnAouQaJDnpYjqd4EgH86vJYtQLE68CAyAMtGxVK3THJk",
  "key11": "2oESMhkmCRshEsnkDk12vadKpdyQqAm1wiLnvPtw55acn1ozfh8Wr9Xa3hgyXtoPBXjwJokcYUVhqXifHw3fg2Xv",
  "key12": "4bMKEnNHN7nMo8M5xkBrVHj9xnQnSXVg9nBS8RgRFhJdeoEEAcoWVBmMuYc1LcrX3GMTRUaCfvx9zepECtm3rPpq",
  "key13": "4YYUFY9Jn4K4DeRPTCygtHtuTJydgbGREzxoTWkJ8ia1pBn2EtUVNp6fk7jS95k4AaGts7ePA5xpqyAytpj6r5M8",
  "key14": "4UHnREiFH2q4pVojeewFYmAKD1M6zzjC3QSRbKrQruVigK41UrdmyQ9i2aeJQUbw2HUho1CMf2qYqoUwHU3C4dyz",
  "key15": "4nVtNvcH4yzXxAQykpBfA9ohNzZY4zhoVK4eh64fzsg98x1Tr82BwFr4N5xCigMYqXPDdipV1qyaLhHXJ82hLrqN",
  "key16": "5KnTLcyzvKGd97GXqevw5qm5Wgokg7kowtgXLSxiGsQvWLAvwD4jkcAiMp65yn3V4BQ4MCwdeiSjr1Gsj8rL8pLd",
  "key17": "AhF99bPiLEFvYmCSKVnDwnqS1bebKVcdzws98h6rd1jtjQ1cTFH44o77SF75T8tht3DEAj7nsbRGKU5W1Hmbskk",
  "key18": "3XGdNPv79jtdkJgJrRenjoQuHfmCTLsvqn1ujgHX7RmcKtuhJoHHbbUx56HKMEyxhnCN9rptLmgRYWcMnCg1cYAd",
  "key19": "jmyQtWPTbPTmEok2dPeeUYAgRTyPsfXvvmqfM8HEtGoxePEiLXsr4Ww59xoNNLJgug22k8WvWqWSf3XaAw5QM92",
  "key20": "5MkaLvsroxaqWvoiqcuMhtyHiPBPN2eqW8TSgSSNxwMbF7dRcXRiTwEKVyfb2u9UH6kiK2u6fUeigm6sn6BNgqvG",
  "key21": "4CgxRQFC5HsrA1t6R8cqpBpmi4cF775Brm6f6n6LqKRZ1PjqZkkAXAvgMvgzFPnP987332kAyNiSm1FHaqHnq4jt",
  "key22": "5q3FqEWZVR3MVF46BWCCJfMfVyEER6iZqdwLhUtmNpthzt8yWqvdhf5j5ynhVcSFc9KjADPEe1Leixy2pmmdqBj8",
  "key23": "4FqdqhUzZArAwp5kULAW2xpjHrgd4R5Ak3jvChs4N8dLBDGAvxfLSrErjcaAb56SQbCmxXdTQ7Y9kPHBVQYtkXAp",
  "key24": "Z8k76RA9fRSN5k37jVZgLHhDntoM3FCKwmkkbPKvJWNTEE17Xv3cLFUS5Fqzh7Azmpj5Kh4H1oFXyBHAo5AFjKJ",
  "key25": "4odEM8Eso7VBZwFVQqhTiCb7XDPnFWHdxPvGVdLi8yirbFMF4NbEbZ7UP8UALK1ZU1Gb5VsEzvE3RShi2rMwJ3km",
  "key26": "2zMcHAHouyxn7SkYexow8V4Uw9R7bkAQbsh6zUzTC9xDxWx1miBZva2VA6ZNQdfatcLuPwc5tbzLJEaK6uKBuSJe",
  "key27": "4WmyGiA89DfJFEeLt7HArmzkt7yzSxiJEBjSiXdB4oCtixdKmSXBJwsT7cBnxtA5nP2mmJhvqfu6MA7xW16VGWJt"
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
