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
    "5X1qtkWP12rQ4PoZV1XXWqfKsb1LwrnisH4ZVLGMEQtvpRkUs5dRn9SvXxJWwBifJVYY426yThpogGk1BwcHfhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42enicuhCNnzgjJrLsMX4RStwofJ5m2eMzcxyTDw93PvkDHJyRDsHdc2gtLXGAnQx7Wgm9gfjDRoUKioUAHNhSUe",
  "key1": "4BdEHRTYEgfj75DLbtPaPm8izaHtkGWyvv4sdy85ZLyGi7o83Hs132166uzPv3NZqGo84q1j87tXcEGepFXD6Ti2",
  "key2": "5XQpSaFsKsVRj63iwmFcyXrfY8Lka6pkKdjBT8Es3U142nPHd3e8c9oktatxX4n89iLVxcTqxnxyPrxfieqnUqo",
  "key3": "4JhuFPmKXmr7mHdpKU5X6ioFKXd54TqoBjXh5ccjz7PsJmmgdikPqwpe1oSjeUkDRGV3fKuFtrCNFRCoL3SQaScU",
  "key4": "5csaEqUwaj3d8MPoBM9Xj4uRaZnJdRCVfsNKx7qitpyZRUWciWKvnh1pFYnBdvpNnMrzeF3eiPQA7FkGjEVxsggj",
  "key5": "3KEi7FTZHTNmTbaMGBivFnxEAtzJnQYnpTLhFms9zFucz8WWaTptr4i89urUVHyc9qa6YcakNwoHqxMdtR26GHxu",
  "key6": "4gH5tD86oa5CkizSoNPK4XaXUpgN4sNwJLwyuBiTmMSgrxFcVjSTodLaxL1NXQ11Zre4A8Cr7kdVpRjZL9r1NkHv",
  "key7": "3r2bSt7VcjcSXtVq8zdm5RSE6ucnfRiQ2csHgK34gUmHakAPLrjrdioc214PQGhmxsjUWSDcvVDRyZYSQm6ZyDnT",
  "key8": "67R3etRAPmskjsMpqqmNJd3pBrt7KJaV2W1ADhnhLsi9p8gLSmHNcgEPGHa6u7B25pEdwFFyCtUHvHxKtpJxNBbT",
  "key9": "5bdsPFfMHUdbVpm1ArYuQQykotVzFFjWMPbg7hRbFFEdmUarmwzDTXs6ZSjXwczMXno6Ew1YcPUTRXi8FQsS7T7h",
  "key10": "5CDavRUyRxz91mKTSK1zXyMap7zSGSzCC6V5QcW6kqCj6n2p5Rwj9DqqznT5z5Vnua5tuYfv6ZUmYtUeKct7eEkh",
  "key11": "4FiBg8nQcJWzxjDyS1Lk6PVvPahXD5frRAei7UH8L6HQQPVzsb4DUy4u7R8gBxZEEHfMhxxzPh6LR6dZycUJSnYQ",
  "key12": "2atU9wbKQXa4dx7DSKYFhxq6U3rs8Q6UsZdjETX4Z6uDftjyWkqTXTNLaomGW4V9iJafKxWz4wNLfHsbMNJG4J2v",
  "key13": "2wJ4BvohWoCAfQPsv4XVWqqipeyPnQvKozki6fNQVxDUFAgZssZuUaV2aPD2kZaAJKMWoZMM4bfV5cM6k8HgVf6k",
  "key14": "2WdD3ssyMammnHHUS3NwFEB2J4b1h8Q8sZvBAErrhdD5bKFF2HLNEw2ip666m8wCeR8to8LSvm5FkB5XL2CUntMP",
  "key15": "54NM7RBvb7K32xYvxJ62xYHX5QCP7W1rUqj4KrebMhFyWhRpnm6qsEpRCvX9DmouGomEsF4cTrdyXbsxT9VmR1bm",
  "key16": "22miRXkgKVKZB3bA3cwoURFfsx4Jco1v16NftbWkHXVNgnT81Xn6Dsw64vZJXkmM6L9ZJTyoWcNGg1FHKDXANBqr",
  "key17": "2nGs6n4Y3DScxTZxCwoz6vuUVJAKPZawuZ3Cc6qDmM9H99gLg2qRuZGm7EAVzuUFp99d2VJp5Qo1o2cSGQRYYurV",
  "key18": "31k8uAMPWAd5gPn25zcBAC7ECtyQPcFrWMfNZWt6URaFUegoV4Q9pAKovLD8RyTWX2MLPCJKU1qssKVDq9GtyqtX",
  "key19": "pMn822NNtWHerxrMXfqPCRJHN5wBYjWZGHwrWr1SrKBmD5fhL4axCJ85YWxgCAkhFnd19zitag8uVNMRQ7FTMUP",
  "key20": "5TZ6BGjVs9UnwTLDyipoYorBXnuVDLfmngLUSQ1VKZJfvj8W1QsFwgqgZ2UCupT2ebp1SBsw7NwRS8DcrDD9QG5H",
  "key21": "vgVBVpyiBrwEf31r73BiZQxyEFLip9smaRAsD1uyHJKkdiBMrKNn6R6FuEkh4SbCBRWgkBw7HYi3HtNRdrHdp7C",
  "key22": "5pmismmBWdaxdSQsZ3jwBLnGd8KReT7sWvHibKEYzXVvbv9NeWSnVBUY1LDdhpMfZAebAgq2t4imnxGJzMLa4VGu",
  "key23": "3povSdbZpRkgmM51zSGgbu7m3zfg6bNhPydzCdYdwzzHDXLgEBU5meq9oBpraQQqRA3S8aaYAvnLCM5rdcHjfP3q",
  "key24": "5dubc5zfy9rtg6BP4p7Gkp6uurpWWTEu3bATz9sCygny9XESdvVt1HghpXquFZAquM6BbqjC9evP4QNVLwc6jWYr",
  "key25": "p9BAM6etBCuRDkMntvopgF6XWG29Db9Y41sA9ntKSoRo6VuDzFLkiDchEJ224Nz4zSDfRUEPBReaH8FxWUzrwgu",
  "key26": "5dNacd3iSMdbKYNkxTk8kVDhkS1LZurT8LPngRYP5WNhMRw9WsB45WyVWGjzZJxRhb337rQCFrJt5Lra6fZy7UJY",
  "key27": "38pucLF3Fs43RVXt75PuqXNNneamQ7pgMy2Dfjrr2Cqw7tntcqueHgxawjdxTwHZsVv9WdYpgMu4ENffFYZinLJe",
  "key28": "5UCuH3qAqYSmSZs4yYi2VJcGjo8W1VUzzfNdWMdbfCHUAaefSD5rZVtfnTtjEjjoBG29zqZYcmAQsJQ4vCUr37mf",
  "key29": "vsu5HVKaYxpi5iRJoKYhu3ZdPxGyPVmKh3qoViXYpYWXK8PsLiP5bWw7PayabkBGsAxZimV9xzS1p81Ejs18osB",
  "key30": "4zCcpxhzRYMyk3PYHp2k9EnzHWgAkyv4UCfSGuXv29DysmQEYEFM3zud1a98ECLxurp8co2oC733vq3e2jhPZ54E",
  "key31": "55PgwGiMhJjX6ZBewqR867vzG6YisteCbBQBcLeUw5tEPFuRzxxHq7vb9DHiiKbPxtu4GQi6kDfsGLL6oWtYo3vM",
  "key32": "2GTNxnTjTAWTraqGv8g9GGWJQzzfiWH6BoMiWazzLC5wmBGCxR6rzMX8VW19P74VcBVaeuYoFfoU1wfD559qhCuo",
  "key33": "3znzum1zHr1hvSLiVoCss84UUSBh3GgcrCbi3Cp3q6zqUEEzeAHheMhHhzKz6do4ww5HRMTgxM5xymK6H1xNDyDd",
  "key34": "4SWGARztEgaSnP7vkMshofETUjhy6yte3QUiXsseWSmUWZdDdPJRQEfRXem52AkajffHRn57VhgRD8GhxBoh1d1U",
  "key35": "2eQCxeAtTmmdpzK75aT21Uxo8FUrNYbiFPcVZY1E4zsgCmPREA2kYn6Tp3gBuxohSuXcitnFLk3sHRfWbTo5hCNZ",
  "key36": "3VvTFnZELQ8t9K6wjQ1FQPPHq7Vm4HajM3mmQMt2xCb1sQg93eCCZuZRhubxYJKfoHZAQLHiyEs9DTrDEx5BAHnu",
  "key37": "2BJgCh8VCZ9BMAM1VVsaExXeRDtD1wLU8fhJpDREjcXjDmW49DG7AQtbKgCCBsbgzaoGKYBGPJZiDBiSmyjfg4Kd",
  "key38": "3wV8ci8YA5dXYpyZdJWyUECdeaHhReaFdetwpas4D1UXUn677pgSTZHYqPTTTSagqdmN9UKaAjvfxLN959AsqvuA",
  "key39": "2XSwTJX3yZGKaT6tK68GEg5hm27v3fUvigcEVXL2vf7G2BAu1xbRXsEVqPf4qge9o9LUuk8CkxnXo9fnKx7ktk1B",
  "key40": "3s1n2aLgMvpeafwnUuPQJQztKAJV47KLfduHAx8F2yLqArNTQ3ycLLDDPJtiF1JEbNPSwQKUWicfwngDZyuA2jbN",
  "key41": "3BRABjkUFpGbDVkZLg35FYLLJUehcuKMsU84sa8wad3yP8LCigu13Qey4uPV3SiJwLhinVRnQgCYgTx7VNEvnHzj",
  "key42": "bY6k6VKaCvn7Yeuv7QrBKiSjZPraMVzF2ezX5EpHVPH6cTugk7ng9Pt2JchGih1pJdpuuKTAkACCpM9FE8dMaRU",
  "key43": "2CuThtsBAsoSPcASg6MCApKSFMwYy9f5CuBJfPSfgdxJAqBnCedoxgauTFxL4QMu4xkGyzETfP6u2m5KLqjHXg6u"
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
