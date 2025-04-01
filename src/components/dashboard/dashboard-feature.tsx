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
    "3uMKouLVHsLTff9T9Ciz5yrWwTCaGzefgK83rhC7wcSZW56eVt5ibnEkjoi8m2q224Nv2sjyVR4yrhyTcWGPT78u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNCY2uBtcKe35F5EJMLDAM43YiysVDWvyH6a7dppjUEcWEVMRaoWPkMKzEKEsuf5KpP2mDKfwkwN6RYm9yJJ9Kt",
  "key1": "vD89JsucWMgUf1TQCzQpNKNrtGAMBNK3WftMQnmeupHhX4A8aj9FSJCHT4fjNtS9rrX3NnqRuKb3uiUp3Jg9TwH",
  "key2": "fKPNYrzBgXToW94zfEjARuWazpvRMZHpNX8G4CLVgEWeFFLxxcgoXvynv88BC35JDBqcRURM9NJmLo1DDY1tcqA",
  "key3": "5oHJ88GLkgC8eATdk3NtJr5uW3KUjvna2zmzs7QBPc8c66PNKxFQ53CrMiQVhbGFm2zkTZetLwbJ6qqahbAr9sry",
  "key4": "JsJ1airxEwfajNZK6dpr9mjgY7zud3d4VafRHKjS42QnDFx2RBvPdZqMsbzPr6sQjdHp1g2NXt9ekDMbuw4Q7rN",
  "key5": "2s3pAA9K8uC1ouDSn1oeberjCBDsgcvqu2h2V2RibDRZgCaoBtnvPNcq6QHSVfut5xPwpo5geRxnMGzzy2oUZiKX",
  "key6": "45Hqm3GNGBdUNKVkaVtBpuUagofEXemRWgsG3HuDxR9bxCSJDuf3CYdboi6whrBDHMWhARHoTEJsR6c29FuteGgX",
  "key7": "5GUoWu3KxsSabtrEKMjAEW6kuza4CcVH1voXvu6HDdgN9Ma4sm1q54J4WqCyXfXvJsNim8ZnJYQE9d5wVATbq94v",
  "key8": "41Mgx8hieqUzaxVyWKL8YeTC6qtvpsa2NZy7sjYYvt4BtYPW9FtjMVRrvB5zwpMg53UDQw1hsV8HjqTynUwbEMzM",
  "key9": "5M4Hh2f73DMz5cr86c5ofnQfCsqTzAFFJnB62NFMH4n8hLacmJkKFBi8NUA975cW9UT2nngYn7ANAPh1NvFsk9cZ",
  "key10": "3a4ydFKqBEYzgtoP9mAowbdio8BZraZVPoAVd7nRpC2kxTAzyab4XSGcegHmWG3TobyvGKumsfj88dmuSBjzP66z",
  "key11": "3YDW6ePW1m65vzMbctWXoxfaQ1zqAjMPByfRXvmsBC3hmrNHwgmdcWDNGJWFNAfWcFL7KeWSQYPzZidyfmPAzoku",
  "key12": "5EGCSUQKuoNNCnSh7Du76KscSpnbpBow8kqnMp7fJJcQxGAzyHxoB4p8Uoj6yFv9SRHKxjaXHA6azp9X3nJVF8Qn",
  "key13": "2MKpRphyYwAaifnTaN9svKBc2HXuXhRqkftXnFqXPPN2bs8tDg4pAL7Z2VQqHhg1wpqvduaZFojybg6uBC2p6zHv",
  "key14": "2Gcm19yBLXhdtCwPyHMUq6dodaZAHhG4Q9aBeyLgfa6gpr3kLLd1s4gnFJAUB6hChHdh5LbZDs9rH6q14ms89qU5",
  "key15": "EJLqzx5dqchxJF4snjP3eMVbBFbvpWGYRskPsMi1gevwj7wVZgErKWwXFrVL42L51ZX8PNLvHytxBzJw6ic2Lqg",
  "key16": "4e8wMjbNjKnCPX9zMDedmG5MXCJNewq9pZWn6dJBfMsAyTpesfFD6PCEVeNBv6Kxumt7GowfWPbLnjniFeRzAibL",
  "key17": "5ksWqWzYuF747qgYLMKHYf2ECc2Q19ZMkpnViB8KCax6HVdjubNbP2QNR6FHwqdbnoJgP2kiT2r8y3hmdUTonA6y",
  "key18": "3kfp9dFBWKRAhmifyycb3iCViArUnzB5et6onyHVwGGmoTXCSAFVGkdNXjMzjamDNbsVZKXQGn5AmJU9FX4w7Atq",
  "key19": "5BBbuxsBRR4g6g6HLjq4iNyoL6z5VFxENyhEBxRbPtSeqdyAZt98YivqkQtA1ziHEGPHzQL2FAjnwLWNh9Cknyov",
  "key20": "TdpVmsYrbiZCSqcNvdoxyCPaiNCwwdue47yVuNCyxgskJoDmc9p44a65PQhoCe7vU3kQpPVUzZkxqNiCJWK3U8y",
  "key21": "5dn3ynQSzj7MBDxGaMXEzTonPCxK15CKoqMT2RFshLdf8HYYfXNH1HyqwJ7awoDVPDjPgTdce1NXe67CSXHKS4oJ",
  "key22": "4otLe284vNbTEbnRogJJMULRUwo9QdfaEaheV9db9XX85LJWgYbhJm9DT3UKPCm8QLeLbz2uMsSgd3xkdh5KhGAk",
  "key23": "5W3qFtmDDp86uvQXzFBKGvU2JifcxV2qjPn9XLTNLSZT5peZuqTb7aGeQDNosGTJA4pbpudFzoP8J1RQA72koYDw",
  "key24": "3DcLxxR7THtVKPqwtn4FGVXrMAnt35VRTVDnTFKqVMh5UMfrzu6zwsxadRajqTaBKupduQFFSXpZhYop3K9S9fjL",
  "key25": "5XxNW6ZRaY18YenNgUQABNu4PGPX6Uq88p3DXRoYdNR3hMgyunt7LDz1hHdBgBEyDhnEu1LDM6spCi4HR6j4ofxw",
  "key26": "2g9pzktc5XXMRsoZsVpBe2i2YQmfQuTPVVjXoEuhPVJoi1Lj5YdSNEQDNFr3wUejg5SqnHxMC1Fhp7wW6rGNYUD9",
  "key27": "5JMRseDpAzZxbvqQPtAk3pXnuiStPPYviZx9hEXFS3RjFyyFaUsqnrZRezKt6uG4oXkanoqvSm3UDmZ4UU5RkGCX",
  "key28": "DBuU7NWnWnJZGopdLM2mngZ78URSxvuzTHexgDaxcksTx5ZC6NZsmSrtsBe7KrmQphfLdhTJCeXihP3K8zhVX5Q",
  "key29": "m4duJwSgf11iWJ113hS2tiqoPeiiy9PMNkbQ3jFpkQxfPN7H9m4o5vcp976dm4hdWShgW6eyMnUW5be6dECc5Fe",
  "key30": "3iUYRghUyXmYLRXAxw1L5Dv1koQaXyF5oaNv5WJ6p2wwgiBNu4amNGcSzuPyxkUbmf1TQMRbXZr3RPd1MAs82Dng",
  "key31": "66uASJ4u4mkzf9YMvYwGZsEzHFqTdSRBbsUxKNuShvQrikBWZ4t6UKxKBdGbgyeAUxdjx3RqbE6SPWw93etK8zNb",
  "key32": "2AuF4GS4paHFNJnsSTFKNmPyyAAhtzkyXGRDeVaLZYTyVBrHJ7VmKPAaH61fK9Vp4vovQqxSwd6pegPSUQhje3Ut",
  "key33": "34gnAgMaZcxavHivvfELUsKjYbL5WtaaUke4d9AiU3NW8q6SaaDS8iRhMGrWqZ7QH3VtrhgDFH8cm1izfwcyayS",
  "key34": "2t2MLVnr99Ud3xrKfAWzQLJsNmyamejBCpMHm2u5ZujJHPMeRPzfX3StCrZjbQXushfSEcdStuusMWCoqGC1Mtv6",
  "key35": "2QvvLi7wkMKCcTmBoRdpohENA6r2FSxn67ZsW9fmkos64NNZ7a8EqA4xa1x5G3SekeauSgNsjM548vgbrRYyHegf"
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
