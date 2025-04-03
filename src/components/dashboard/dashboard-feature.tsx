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
    "4181JFzRMSRx9FGzvwpCjzSXLve1Pk4nKu2ZuAAAfHWSzhDQY4SMbuKHD9kwUq67fU5KVq6VQNRMeuu7QD6jjqfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r9rNXMMAtCrfzANxY9dmsf46yPEG5K83qS3bRTibKbsQrFfmY8vvHQXiTKYDUKqnvaRUsAvs7eEKWgLrsZbqzCL",
  "key1": "3qmrqVsqtfxdkPLbtF9kQez4M7C5WqH6VBWSMGkiHNnfpGGPo8zb3MgL3ujd5s66V9Bz4fqAN1Az2sDjc3YMtHsy",
  "key2": "qgEH1Svb2PfJ85gZ6TVurrB1t4wiKrUUUxDLkG5CbbWo3CVTPND37R6qmdvzB62FraXsmc4MhYhBhckhqTajQnr",
  "key3": "37s5xRdQ1sSWScHGiAjVfMopTNF6wjnbegw75PxEhgztCP3b3n8aLLfk9XiR9ucYnsdAN4xMVnS6ci5oFTNv5k13",
  "key4": "uePRRkrzAm5WDpb7WRcVJSJWbUUPb6guyQUAWV9ck8cNADDHqGvVcK5E275BDNDfd9E4Z2tQt8ivwDNxH4PjtPQ",
  "key5": "5eVgMT2DwTSWuCcF4RrQ2kxSLZEHcgMfk5WuQqnvhDiow3zP4cB2sN29F1VsWkLncNeJym1JoWxqZu41se2bB5wR",
  "key6": "5eet399vKcXXZ46ATAVaSvsacV1NfEQ4Ap6rTf5BBcyzWKDgivEYPsmttV2AKiWzSr2kX5hobibspGYo8C4rTCCr",
  "key7": "5tAAFcVnHjUF8o6UiffrxaYuBd1dFcNZmNJe7Kw4eqFRQfaR9zauEhaV2aa45joFw2qKkEud8hs5qLwkSQHKTmFV",
  "key8": "zzVfTh6Gd6TAReS4fHVjgMZMfFT9kE2knshxA5RRnWnSYdLxGUwt8YKQARUxpdYqeUZAwc6jPdvxoyFhYsPNgew",
  "key9": "3Ge4ykU7bXQ355bMNRJE8Ztt9HkfoKWXzkZPSvNQRA8CTk4R59p4JkuP46ucXzKdxnvr2ahqibMHiT38FtgbrgnQ",
  "key10": "22HesEE3h2gjtnKFBjALxUQ4SCGWq3CPQH3Eb2XMGroVvcPJKksvdqETozJYkb9HUceWxDMJLtMQwrK8tJANvWYr",
  "key11": "2FhL2Jf6ia8zu7D7nDL4UYMhoW1dbcNGkYsGiotowrBU4Erc9NMDKiZZ4w3K5WSLkUybQsvCtUWCJWP4QHhqBoqn",
  "key12": "5hUgihTZXy3PRrma5wepo7xD8dSkKHVJVrF2oCRXBuQe4wsqR8JaYmmXhUoQkNxhJRZBvVGuHT1NGTrfEHTgnrvn",
  "key13": "5jJuboXzKpjSxDnwbGtVwHmCe8MZFCx1VYqMWxE76tapz68beDg8bbGvM89GxK65caaQiJgPRRe85z1BcSBAErWk",
  "key14": "2b4YYUjmZKaWxwKDEmXHtS2Hf16XKxqCN9GHR9D4nLVYmiW3hESrV5EakU1zSMFrT4xe9YynBJh31uFGft5hY77w",
  "key15": "56KjtAAfBttuvH2tSE58kTKhpw7656BCtebUqc73nJLAc558qtuq4cZSmDoJpHSWiRXA9GNxzGJQ9HtaxDPjzuQQ",
  "key16": "2wvEGw8BPMESnreBwHfMWua9mcHmjMywAHXVWKuZSoZRDdV3Dc7naQnzHEn6bn1e7ZkZr42qqT79A4mRGBQewmQC",
  "key17": "5BGNWHoeZVPZuZz5XzHy86a4tyP95M2e29pQHhYrWX3F2FavxFJs2K31xasVLCaowZQsAemTjF8DuX8UzQ8dUMSY",
  "key18": "3t9mPbcpNv1j2Uk1WN64dkcJQHfiiRnUgT1SQDzo46EdkVVhNaipdjEDZqovwX4dXNf7a31wnnuwZDR38mS1hi7a",
  "key19": "fWafUm9VDbZsAT4Fe3pSF77xv1mdQhtFUJb5tcuJ2sNdXHqBaoVDR9yx9GPXnZD3WE78iC2tKjwwJEsxqBrgJ2Z",
  "key20": "2G7s7Fz1MUWra3wKwCe2X5qtbmd9ivtEhP9KEMfxKoVuT1qC8iYosFHp1RLH4DCgESpuer5FfAcRwbKtqyEoUVFb",
  "key21": "QsYTpwDuDHkyx9x6eEM6LAjRcaz6EBwTPWKhNBbkF3Lv1tzAwuSqALTFWoXwFBXb8RwtehaH8fSdTZk41ixjk5F",
  "key22": "rP3QEztq3sz4BrFhvFUng8i9StJhdwLVBQvGH2Dc1YsKDzrD6wEKPBZ2oZWgPRAXPyJq53CxWJN8S1AFgJGcyCP",
  "key23": "zvA6KyDPcGMn53ZKYP2Wz7CLBBrarsRbstPWsQKLrMq1Pm2UGhFouuGqeoH8bG46y8Lg8hxrH3fYmDub3kct5ts",
  "key24": "2EgvWG2UztXbRZUvprgXgAa4A7foFiT7JHoUJJSZmPETocn4YRpQdLSpignWrocJjsdaTTW5XCmikVkiuMVpLMy5",
  "key25": "33ck6GjHydduXz4a1MxRGxqqYXwNrm4YiczfYyk1aUJPecNYndrB9KX6NoDRkAihDzuRZs6vRNFGRFmXUCjuKpuk",
  "key26": "4tjX2Yg2gPQFE2NeNfMsHeknvArx7QckL73WurmPuS23E4SwDypczR9pjRbWTvnT9WsXF2X8mwodsjpUyq39HZhq",
  "key27": "4gRZ5DmYeWXRNqW7gze2YyYgcjX5mdeg7ToMWcTMJ6B1aZVwPSSbzD3T998dDHJnbLrgriGX7LPuE6wZmn3uX4Sk",
  "key28": "kw2yszSSdBD3nWEWk5cTTP4iM7D52QPqhxNWKysKoTh5uwByVPNYTouM1vYT9XedKHTy3u36YCiVGHq3hTP1pt7",
  "key29": "4HbD8gfQgTpxvXY9wtm8oBJwRjCTNg9JfxPSDpnhRxRuhzeiGGFAg3rp3FCYzRMcP4UTqGwCCba2kvhCDFAYPSAx",
  "key30": "25KEnsATTCequFAVYhuqCkAbPD7mJZmSGqQQ6MpP1pDDi9vtJBndA2TXzGoDoKT8uPdEEAQydm1y2HXmwrHQxy4f"
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
