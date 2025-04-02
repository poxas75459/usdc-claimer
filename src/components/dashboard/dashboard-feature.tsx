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
    "4tqknsuYPTGQZ194hNDSYH4E62c65SX1EDb7YkwT4scazDgMciofge2y7jMRpyj8dHiVbmFJq9c8PXvt2uaPGzns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9CrRwH21HZamrTZVMocphVNiLah46V9dNWahnJ4PJV64BSjUiuPAH3Q5SxJkkW26zMFSMEifBxjW9oiXecnN2U",
  "key1": "3JFRfYawkEcEQmWC8XsfNW1GM5bPf1ASaAUcazUXdaJFiHaj8rAPwWXiaJWCefrkFybVuYzp42PG9NBMCrjiD9cM",
  "key2": "2QkK7uzq77sNkPdEYRb7ywkmykV1gas9YaF2e1wbZPANeX1yWnp99WHfqx2ttzeiBG5sX8ZP9fEYFeY2LT61CyNu",
  "key3": "4nSkMAFqUVLhQ3s6GiHXbViZGZ1Bdvyaqw1K1BKkemGg7aC4yXA5J5GFXbM8UxohZwt8476FFCWeYuc6UyqmzRrF",
  "key4": "3h3t2Bwabi1KmCAVTmcdHuYGWCSerUYQSML4okKTG4a6YpWXBud2QoQMtgfv7H3dV7hWpXyNZgiCVs1onpoAVudd",
  "key5": "HXSgKT6DNJkraoRa2FiDcRVW6G5CaCRvQErKGnAWuXDcWn8NQZ4g9ittXwrtSi7Ut8LFw9dAVpfkQqXphSL356M",
  "key6": "4jroHQEFqnxuono34aobAeD1gMp29NaCKMToU7fTuoprmjBqT5gM8yBH2m1zw421UUvEqo8EnZLHdHaSJHrKTWrC",
  "key7": "5A75jnBpxpxnuh1opNTgiraithJHdxZh21x6YYHCApwJyJVZJG4fizJwDHJcNdXfKdNoYtEoQcrdCFVU2AY6uiAt",
  "key8": "3BBVs98CsNLw7H6cen1cyhXi87XVeDGJNpnSSAzoBEWXi5LZBLymLRCSfT6iVpmzHGjW79CRLn5iTdNuwF69MkSr",
  "key9": "KWnSdKt5vw6tzdmjZMNxCafgVJEUh96WVKKDk1Psj3zkp1qw41xchDY1nRTENj7tZstdkcLKXjxSWNx9d6F3kVr",
  "key10": "2Fg2enWBQd5SzKgvApSTq5tofw6KtV7X3qdoZtn2bLvM1TBDyRQPdVxRZ3mUm52REdZyHyu8jASZBK7JgBkPTFiW",
  "key11": "3b5hAR17TMEAKpJA4Tkh5RvBcS37DgLTkQ3rPB9fHS5PthjqTasZU7z4LHtcV2scdnVb3ctcsQmg6kSu6MABVjoR",
  "key12": "SPEYW7rUa9pHRdT4hxiN6ZUuetC1K67SdwhdJwEEeFfZNyWjVN4QnUN38ZJSGTEyv1GqZjW11fBBDVvb3xNtuPg",
  "key13": "3H8c9arTs2fjq7hiQyCp2Rh61sVpbGYwxtWQ75Uygf62J9SybXQSXABrJzTahrJ6VLhVgmNECPnyBu2FxThd4wZL",
  "key14": "4w2Z9sXDmnjkzZZvbA5Lwcp1EYekcrXaT61v2ACyRuQG3xZcpA5jsFzyzHUzqdFeQdG5EC4qU6uWfey3mAtW4GcF",
  "key15": "2nbXA4zdCbqwbgykvVsbW2FR475a384zF8NkDuaujnN9EjjXwobV9ZzEedEgksEBGsrAacuSxsvGwnyZ1EPpvxcr",
  "key16": "2R9CJ3oGMyLm2DgER1RATL4bJg9WWjkWFnZqTkBFcpDqMoUJRk9VquWJU2ANT2pmWax4hstDu8Sv7ULhdSFhnbQ3",
  "key17": "3fKBmptc29MbeJN2BojeALXToeBTrhz48WCKecz5pyBiyS7zMxh8eFuJJgRLcAtM79aMWNxYNgH1gQR4Uih4RUao",
  "key18": "5t6syH2o9zHRXWgqRRw4ywM9xx1ZMHvVBZeY4Hkn5rAerWoRQmp3W1y2VycVV8XFDbw5GXqSVeAGenKT3YYRmNZn",
  "key19": "36XVUeEZ4uXLBWuKh85eKzZSNVZsztpLiam4zq6odgpbWhML8HjUqmScSyptAcDY6Pv3RDs5ffxR9j8k1Q87pYwd",
  "key20": "5Yo6GQt6j4WikdLyTsfvcsh6jivECCZa6nessFJTM7ApTvNGcrjieJDmncxrjtdNBDzLnFrFakCa7JwGMmYmgcxR",
  "key21": "5xGKn1GTt2GVGfTDbQwqhRiSVskGYKfiEyi8H6rhUa6KVkNQMZzwe3tm62yw4d5rmmWMnbudz73R4oRWGcn4dFG9",
  "key22": "34MBVApzjGukR897dRNfo2ofdN8Mbj1ibJorw6vq1CdpSheftHc5fyiZB5nSjNpSjrUBcwgR3Epg3r96UDB4qTFS",
  "key23": "5ym5SSDgtsGnQwj5EUu5qgYu5PSP3rnPtDXDuJW6VhdFfu8p7vBECKyzF5cyNJDe8B4qMZ5YgEMxGCkAQQdBMThj",
  "key24": "2dphWtaKMF1EvzRdnfistKqgr3MdrhkoCpfLtffggFBjWm49igFPY5fnDbtpjWsK2CvtNBnoyGmK57XvQqxWWhtx",
  "key25": "2uxcjhfbTbxamkYAGopcCJKhVNQZ2siPMHx4vw7czCYXhfxSbYAGkyUGYDhTwGjMeKiFZouGNZYcRpEzWuU5uuvy",
  "key26": "DTHtJiMAkdJUPr7RzEfd6NfsfxdK76w6zuv58f8mY5hF4MAbn82eZtqSV1EmMkXLzkQ7BxAbhi6shDtB3VaogeN",
  "key27": "mf53e36fkJiVJm8sZnZvsfBL1NqyhugeWioYEd3d23am6jS9BYgx1rPCSA28sngoXSJewKCt4iqvt6dVVykf264",
  "key28": "4WfhTpSHGr3LQR1kCxpGdtLVFNDyKtrDRf9DPg6tTTBoC7cFztV3JdNymyhqnFTBRLUHBV7VuHRPUa8MhQ1FM8bD",
  "key29": "VsTrNZ5E3r2hjGA4CTxCRuEi7GeXsVwZZPswdfeKrP3ea2YhGebC7sfF4ZdL4ynkqkUY2YTsjGQSdBwvb6wAFYP",
  "key30": "5vr3cpWvj7GySSiQKk9JCvBP1T6ik2V2qex46ZVsXZEUiUUfpsp32ZjXmoEZ6FxeUry1PfKk4wFeCCPcKh8xtQQB",
  "key31": "48oJWqDJidbrKQGwrsoLFjWus24D8rHJXhpyaK6jTGKPUP9d9o55ABhtarZbqCkTt474XwfUGBvGgkbeLEJ84qCm",
  "key32": "WhPwLA3E8EBpoGoCGdFgmTptNmu7jjXZvS5ExmXKjp5iPCR93KEPen69TEoTo9XkznT7UWVH5SrTHnpgkYbVCHP",
  "key33": "5ZSBhj5devBbzAu2FvVejoFcecCiwxD93pV8hprkmRUZc8WdAPpKjzLWVoSA2w1pw8etDRLpogPsNottNNdH44cs",
  "key34": "2txm3BJ58U29VAf9eyQWo87RFWjWLvyLbwLk6HoFhGKPw7EebFWgdur5sumptFbDRJr8gFQMjD3DtZt7Pip959xk",
  "key35": "3vuEwJb3nq6b4FEknRhmNkHcaLi8WdewSBrxb5bvDtGxmH3aNzxHwSTvxs3JTJY23e8H17aSNZnbFXa34yAa8wGJ",
  "key36": "2LGvQEV8o5JXLFjMGTZ7v2aebjyydBYfnitqvT4HCHtivxEXpeLFromtfVTJKjXABp3yYqc8JckjSwFH6PbdL7Yo"
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
