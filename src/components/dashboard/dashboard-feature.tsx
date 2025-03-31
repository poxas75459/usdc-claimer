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
    "41y6qbui5gzWhaLCN4M3Dg1x9bMdRoxyQLTVFFrFtEnDVbokBYUZE5Q2tphMZcfDN15ba188ipHJdZAyT5V85X66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CScjGLdrxcMyia66WA4mXF6RaX6MN7KAg3RGEi2kidcDKGiRkoXBQWJCHn68cnRFridXTaFW4UPNq5ZugPAowAD",
  "key1": "2wSGj95pFRyLjKYTaVqNzyQ19LwkKyuLCiiwgerP6VitvpzohS9Ajr2SfeXdZdFPmN1A9REB9zqr7rn43QdfM5Q9",
  "key2": "3vCKSe8LTc5ZSa6yqzipaEAkugBr93nB6uddFpp4bZCimHFvPJRXshtSouqyq2nqiUv2gt8QeS7bg8jaSXKaRR4y",
  "key3": "3Fnm1chBa4CQWZPXDseRHH7Zvx2uWrRHp6WosRf3RM5aRnpR7cq2WqsYRtUiiUWghiCEaqrMpC3EqzTYzJPwBnQP",
  "key4": "4CBmyiaDBdFHBN24Wqsy3DaVHmWV1ivLCg8J91iZxGnsfrfae3u81huMw7h5JqrjZBbNRN7ghaSJc92KcFt6YX8",
  "key5": "4Gx1mPLFSGU6Eik3979crVKH3uyET4SWjf8P8ZYET4tChqekoGtxaTbL1ZSNzGcxFub5vja6L6C5qFQ7p9sbqa65",
  "key6": "AL1iZDQ1H1MZeFHYEaSmeDGFVhxdg4q1153S3KQAh1j6Z7rMKuQLFuDKjyaZsLJ93z1sknzsHB2cNjxQasuw1ZD",
  "key7": "3uW13P8ffTVsfhQNwZgrvndpaspRktTbmkrpXC6RiEeFf1LvaExPi4kdHpPHSGDgwXgPKdFr61L26oRETDCxwBXn",
  "key8": "3rteVDGbTMm59f36tH9gZF6yBKSQec6WtfQ2jrVrPy56oqY4mFm27BQyqFAYQrRFWq9ai13t84K84uJd5HokgHP6",
  "key9": "45cTYSvxfBppjGnjCBv7evxm2LGTEbvtcQjyKGAiJAjg8umwC4LooJxmJ5Jv5oaYypQtmBks3QomQZHjprKWEVgh",
  "key10": "2d71eggsppnubosjdK63ggYRcZJZyGVd9XRfLGjZqpojsUHP1Urr2FjfxZ3xH33QktK6qCSER32gGLCYwQ1RuxUx",
  "key11": "33r3dHeupPUG4uauSrWMeHxESGqUJYNsvFCTRtS8RMTWsiRLSbewXaEdeXz8iCrXKTxnLGUn5K5nzuMgEbcRe2mj",
  "key12": "pTctBcAA8iuotQhcesfnY5gsvuzNW6EyG3W7RnsYQcLn65f7UoSTp7Sw4VWkdYHiafV1f8L2baBhBKcpFUZEZf7",
  "key13": "5pCDAe1GpLUV4a6gEm7Lcdk7a8VMgDYAGd9Bpo1QTqg6H7g1wNNvF7zsLwtq4s4TKud86pqWZaEL3hjhnMwEnNGt",
  "key14": "34WZCUcoK8wRCx9gaqmnWuSNhWPAAuEV243UXB78NzBArLSbjNCE3nvX7BBx9oiEC7woWrFSqk52JD76qRSRLWAb",
  "key15": "5BSRxSeuNSDg1oMBBgtop7wHZPuRK2pr4qYAL7iPnjJijdMq2EeofeqSZ568TrYWfaX823tgHbezdogVGjLTB6Ks",
  "key16": "5wb3t19FK4HedT5AHWnPCvP2vLfuXxkKbvYraYkbDPWvGrsiuueStYP6tswGZ8ZS67bk77ZWpTDN6oYg7t5zsLZF",
  "key17": "25x69bFEDq3ZLzYpW5hBbepUnexVmZ7d4jrcycN1KYSdqgz3nx5mZLy5s4HPeMgCRmH7BCpNvpt3oMpVZ8FFEfr5",
  "key18": "3EXNFGfYasNy9yFdxYse6tXcUH2yQoBxGnWibRu97bSicNiKLcBkVikWTMv4nQmuCrzkC21a6tXfdvGBNVTHXuRW",
  "key19": "4hGsLMNQ7W4vna7FtLLrkr3qMpM3EJbDRPNiCSLLMcaAZFKnH3Ydepk4u1kMyTgSXCNrQmPdnVqNgAieCvRwp2XF",
  "key20": "3ZdCcWfT9mYW8x9gj4MPc1fx65kFbtx3ot5C6SeMJHw5outXscc7GU9A49mpEKWHgzyUssuWZDtivT79BDyWRv8G",
  "key21": "3WgEuWiRoLSX9PvDbqF7nU9UM3eTsLsUQ2KdrXitZJxVd5V6YLwFDqFGJZhefRLZM1Ussis5Cuenh1PFawNCvSpx",
  "key22": "5sYCpUH7jkkwCCntBhvvTatzDcZX2D3j4mmZxgQm5KhPVhwDNANZrvuJ5ZCA4GXikrA4dWu7CWP9veEXTGXTphcY",
  "key23": "4titQKMy5jKg8ARC4e5tWPbLGxt51G4LK6Fhazk3ge9xEYDgL2aKAmZC4sHEr2iFSJ8XHLjgc9jVLbvcX7frrGGb",
  "key24": "5Xres6AbiUVXjVfy6Y6wXzJHp6DcNAqVCnuQF7UcSZcNFFSxJ5TYEPYLvLCRtXVnvyCCxZxu9rrSgJ57YJkwZ2Fw",
  "key25": "5WXrzGPSgd7bbZNEUZXRjTSxTjKwziKiCniYJF3Dq7GTxKB3zPZVAZjpkiidjiFJAxUHg3Pinvz8kt2b4L8WauUr",
  "key26": "591rPbU5uoSn23VvLEQ9Rw9Gew7NEFppUZ9e2To9hmokTcgMWuWaqDmJrf2NsCHWWkBsgaWErkh9cA53J3RtJ2hB",
  "key27": "27yorpfdBUjkkF3R6QtDPBVUrSyt8d6k8mC5h9VVaN1FFjnmYnUmX5DpmNWns1NJ7QBSXNSQQpb1ibcQiDAgeSL8",
  "key28": "34hDus9pjCuzChe8tYn4e1oMhmWpPPWbvcJsf8mJRFiwmDgyPqMi5uazJVb18V2LKeyUtxmjWB2po24k1oYhYhRN",
  "key29": "2id3XakapkGbKyzCZRL1aAQah5N7BEVFCPwasbPE5b4rewQwamHH8tUX6sYWdJoPaiZdW6NFVRYJNZkKpsmutAdk",
  "key30": "UzZUJSKzUpPat6ujnRuj6jwLPH6TRUm7LRFFBopoheo9tUGoBVBkEabWLjUg9yiLgDcvoHmki3WDRsEJJk8Mxn7",
  "key31": "2sD94ZZaTASaaJTtk7DvbJ6iAPPFa63sAW1Bv7iagYYJ9t1deNYhm8uQgxJTk2V5WCa3LA8jycrM9Lee7NydpVs2",
  "key32": "2rw25teMb2p8xqH9otUXY55qjvLdfKHbW3UBGyUnrphsAyJ68HXadWkLXqpeyfKT1UuryNWSSE1C4rS2ZwZa4Tbg",
  "key33": "44tdZjwtUNjLocEAWUN9sCxfELiskZidVhDrdiM6AgNMF7qL3cTc8F1Hg7yhWhjGb9D9ucvG3FxyKuEYVk2gfFTX"
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
