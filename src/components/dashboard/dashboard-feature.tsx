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
    "EMKV1Ta5htuZ4ywE3cuh4idHm2c2BcXtiTS6MWCkXpMx3nBmKn622ghNbGVnJfntaVubemaXxjyHDwwWxwSmxNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mzjfeKU5SMsrP4MxdPspCUHb5sUWqn7b9tLNnzPR9XzdN3D55U1hH2h4vdguLs12ALeQhSRxKGHe2KoBqZYnw7",
  "key1": "2jQtQ2d1uMUu7L5jmFwHWZKuWqSW81HWQtqU3CFjXA3eGErqr7NQDViXE6MpsoWnaZ4g1RkYFTtALm6idXNVuSuU",
  "key2": "3dMtByBSLNDZJ2Y9vh1VJKq2eZ9az3py8LPJk8FWC1tV7AD8khTPWimQW9KMqXxjze1AYGqvrBr17jSdNj6FNiyh",
  "key3": "38AY8LiqR6T5ikUSTnqqJg8e6zQ49KstHRgoXaqR8ZY2eeEx2iA78cQvaes7SagmTbFvEwyKNXvP7QUSrrombfTX",
  "key4": "3TRJgF7RuiWPjMKbtpdiFCj6mRDt7HB2YUyBRo6KtcD7m1zxrZrnv6Vukt2ttzR3oX9vXc69gsSA96xwa4j54AeX",
  "key5": "3i4imqVXhwMQej6jaV6FaACVhnQ5NMnAXRB6Bqnfn4AZ6hAYho1PmpNsiWnLk26vspPc9jfsLueP2hDRArfTck1N",
  "key6": "2QHJqVb4nY8vhbAqSWSiKRwbcnC9CRxJSS8n9YaQLYgRTrv43HoQ4tAFfBQXEf5w18113ZGGvvsb3ExBxnaJ3ATj",
  "key7": "5orHau2nTTyShADhnPs2HxTxBvkj9B3uW266wPt8V74o2FgJB1orj47TRxJqApPMSPCnVaaypc7HK68RiQDZkrJ",
  "key8": "4L8gav1DmLpxVWm7rsqTjkYwsff6BhXY33K1mRnmu82W9hS2E7aH7t3VF41LnYnkN4zkViVPmr44K85B9QBigjGU",
  "key9": "3TyZvZhoHWJVChPzKyc9EbURUgKuPtXXtPuWzNBKpUDkMNJbF9rYYFC4Juga4m2TTdQmyQSpVR5GKSwt7ugic2wm",
  "key10": "3DRrLsDFLYDM2gq9AYb5e4TgHcBavGSnsBZh2JKtQpK8aYmSTYwykbvS9KjVFKCwXwEUoqdJMVqw3N5AhRPD4dBy",
  "key11": "3KL4kmLJNC2aARMpFexBLd4ikAbPScTRf7j64LHhg6V4WnxUEdwvnG6vGyyU4vL9vbWCPK36GzRyATWGknG2EYTk",
  "key12": "3KNSxh9eHqJUxuh7e4gw57uxVh8aAXjxX2mDEje7adTHiiJdiCJfa2Uhi7nM83kzG8JJshCF7SnotZkgYirjP37X",
  "key13": "27ifbMGHtnWFMW1jWLrkMMa8e1xGrJD3Qf5qm5yBT6rcWKLzzcfUpn48rnUpdLMi7PLuKWqD795qoMnfby1wJBhR",
  "key14": "WLGaHcYJLgW9T4cXGMq9UeMQFpucrJCH6X3Gdv3CwmWmcYtvg3emtMHmk4QGg3itqduSeyH8dcN6Sd78xtQxRYW",
  "key15": "nzToDCnWyNv1Zb37sYJrWL5GZ8LFzRWiAJ5z4Bx2YUp3GPDm6bR9Y4KRnfoiaFLaJX9bhaanXnMBWPEUyqzHjaU",
  "key16": "WUG72uHU65RPq8csbpitUJTMMPG6k7vbHV55LkqkuJUS6E1LQpkbg5zbEPEcCBYBu9Xgv6DT46EUX3a3J8jNnrN",
  "key17": "2RBRwF4Shq4pEogwPi79KXex8wvPM2eVSksFizdaQLUDyd3Nkeambtgeft1W9AeuxwhRSzgCj5aZKVPGF453srQs",
  "key18": "khckcDHnD48BjuVf5d4W9B8uZpmWAGdCaqMiUgvacQVkeP44ZQDceGPKhdFXFft7RKJQajVh6moLYG7aPCP1yPV",
  "key19": "3ghrF7gF4pG5ygw6E7ynqptmHRMVteTbjdrjjqQtmnj6JvYtqPm6ziv6JztYr96i97Jh33X9m9peoaeVEfdeQ3WW",
  "key20": "2xomSqSNfS1ghRmLSao3CbEF6KJa2A7z1T567NpZ8CkFDvfBQUGaAJuDPNnniy66p7AtxN8foJLf7p1vQ81CV8Q6",
  "key21": "3vNmGYUiwuEfdWUXLyuwouCtU6dchYEVtDrWdKAZTaj38wqkqq27mLFnUaiN6jt4qqrgz4miqztAYyUwyje5zZX6",
  "key22": "66DmPUuhW53uqHeeZnBWZGQwKQzZb6btw6uyLRxacpTZ6XsDDidjEpsyEB38a1noyFErHK2NPK73rHGtEiRtfDbz",
  "key23": "hgr47x3ucMMfPM5s35KnhtGh1hLaSHwqhhHfGAyDwiMDBcJdRRVeEmgtZoPuhwNWEyW6RLT5YRJtoaqNeNnEfQk",
  "key24": "63WAUyrqde9RaCeX3zXipuHVHnFLQHscGTpDkEDDWz8duY4UAtY8q3WUAqMhLG9yvoibheC98ssifWtZtgd9ohSC",
  "key25": "4YFcvWjFfvDtFnfqiBHBM6XZg1gN8dQqu9yUu3bABprBTuackZ9QtdHR2ckqgdxbckL2Gh3QqbDPXZx2LCZeS9uS",
  "key26": "56eVgg9g7pLzaVtViTrd3VYq7WHumxU335yMp4RBPKyXKfKbT938fp2X7JJTmRjaM9RjSNeSYPL5PVpsR1f6hixe",
  "key27": "4X1MhpLSY5MwYjvrk3soMCz5qtqa7Xu7UER7zFjb9FpYPCZ3Kvx5oSP73qX1Vd2drg9k7gsG5CeBzHGfA82V3Kt7",
  "key28": "5kHjKcLnLvMNCaFqvSS1bahnGzosBp8VV8FPqKr3z9KgJAsjEkntiWjHWcRcF27AnyNZz1gubpdKdvk93ysfuhbB",
  "key29": "65FNAajdUrRXbcpPFkoN37R1LLcyNqx5g6haepH76MAF5T23Z9aE4LaVQifhDiGQm6ZwbwGD8RazvzxG2eVU1KPY",
  "key30": "4EgcRRBfXB8PGQpj5MTUJA88412fWC67uetxkzcBGttAdRQ435nm6PHKeconXDuA7LyJD3q7AwcvRVrhVnYwpj6c",
  "key31": "3oY98wyD18ZEJv4qpcBaPm3kFAfXrHpDyx4dGdP7iP72cC3BYAtsUH2hcT2aEbqAWqQKxhy7aMRWrRceMKpVzjFs",
  "key32": "3Q82AjXics4rJsQobhdEXKKLVK7yzoEPSGr9D74NjKHhJfxi8AenXCpTAioykG2vYoGqhyCKmRiDWBiiRgnwKjAv",
  "key33": "tYm357G7YX6mhgCpUpQNrTafnRJssb8JgcE7AuqezKkRsMq5AwVbJVX8SytTE2X2sijxyNf4NU8eFuL1BCJnegV",
  "key34": "3dfEUcaZU3EhDUi8Nz46ZP1V5b4D5fS6Dodf2rYnfWPEtkYjSWuLs5VZhYnaCy5cSP5efQddLJzxCxXHMZRv2MjU",
  "key35": "Vui16FWmUbdTYRiQ3j4kM7PeDNGqgrEos69FX3H9sepw7gRC9zwWS13nXSpwReNTzDnZuGcXB2nHkTxnxM8R7h3",
  "key36": "4qPoaNyid92Nc2F9vmEaBHy1UMmkQKcKEsreTxeicCt23Dve4UwkgXTSSQcBGhKzC82ZmMRKrf4GsSi5o56ruDkJ",
  "key37": "67DfrTxdSBQrNA3vWemFK1JJ8N5JM6eQ9jP6Xic3RgSbkDdy9GTDBtJEKo3EHTHFmueMSxfDo5zHux9z4HcajcEk",
  "key38": "3nKxjkGKkXgUy4eRtELtcHrwVQzzZoZ31N32bqtLRuTL8W17ghVMt3BwrkcgDtLsgyTBx5EFMCGEx7eg5Z8QD4jM",
  "key39": "5433ygEWYbkhAqaPXLFXcnYpex45DSGY4poRyJXjnE13aRewxCpimsYwjXzgcmApLYzqDtyaySZFDcHKaN4dBoYi"
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
