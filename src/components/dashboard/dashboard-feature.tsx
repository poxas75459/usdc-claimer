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
    "5YXZu9PYbT11EZUspQASbmFefDe5rqXgddrskV5wKtR7p8yy1H7amcPwWyoDRimEUvz2L9PjHruRhcTqMeuzu9vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UJ3hnaw5NM5Z6m57rRET1c8hqjafsF8ga2mQKhEvsSjRy6AcBsRcdVV8DTZrH8BBH25gxJbdXRBLF9616v2LU15",
  "key1": "pE96Mifq5AoyP8CVpghk18a9qgrZndEaCBoMjXE8jwacRep4dozG4aV9usie2r6Sd5mjkMEPqxoqVL5rGaM7LWW",
  "key2": "Rat4PSnS1FPyX5ZUzbKeC4Ge3XXrmnTDWHPP4xcFKDoWAWUCBYL98m4gMH7dzy7vgGFwQik4Ab9C9LUcAdwWk2h",
  "key3": "4YtmjNtwWQB8aUSvLnEztuzGFcZX9rDdQjFWeLXQjTC7tgwm7BZDwWhYagmfznSzWUJ1sdNNU8Tj6TiJxLLYM9Cv",
  "key4": "4iED1Yh1AMqRBikws1qbQALoRo2FsScFUyDHdFWb55qx7fhryGXHkW5z8RVRYE1SHEcf8k9QzSWEqcgDqs3jHLjj",
  "key5": "3XRkJeYZvqwPLuKhs7pXoJq851aQhTNWydXTVYpSvHqbUCAHtDsiR8yjL3VmMje31TonGamuEHdumxUL5EfhKFJq",
  "key6": "5zntbyjbJtKsMMUDa9JoR2minpTaLJW762BhcVZipDxxSv1JgxQadDqxrKGz6YqAtEC7NBXX45DTmB7UWhXSFo2a",
  "key7": "H3UkVzYm3vGqdoDxFFkHtu1LcGBFf6KmHYRYPcVEH4qHf378qHA7RY6t3wCnMQXT2BxuUFErZnMaVUQBfzAjtBS",
  "key8": "44sEGSUd6GvhD1DYDxbaCAKrNGMa2tj8DjYYPGwSys6tM4V5r725XRway5RVQ2e4bK7spQ89mFsDoVzsrNRdd1WS",
  "key9": "3qHq4dSZp5RMGXF5h33s9yVpXW4eTPmLQNYSb6k6BXxdRqvqx9WtJYEt7KUs8sT4f72jx7S6NfFE47Vh6SY3LFct",
  "key10": "5qpbZ659hy1aRpZRJYoFNMd7Gb7SWKuCmqHKBUNTUscrkASdPoEaWBRnkSZLa1F5EqX9ZJB3nnux9wwDcaESWXjR",
  "key11": "2ge5fiTvAPs3RJihDJ64GrvnU5hqHV3JK7m4Hdt7B7ti9ZL3tnGtkbe6a76CU2YAEV68kAcLj2bnLHECVuBKDY51",
  "key12": "deqnq8ocFXfeNHZpSMkHDVHCKKeFuyK59RFfqJCsvWEre1oKJggzRan7m3RTxFybwLnibQMEh6gAN5c5Gh8bytj",
  "key13": "3kHSGC1G7hxkmYZnBbJzneGCP3EBxbGo9RhH6Md97thG6iHuuAFToycJiPhmvzKLDYMKNgLncZY1FDgWREb7pnZY",
  "key14": "GhDxMkUj8RfGuKTBdJ74AAKLjzYMVBuMEDtnJ4jekhzqgCRWAAv1q5BNFEJHip29GGbanfXYbZJ4qEfwWu9ELLo",
  "key15": "3ipTULns6fGe9JH5tPxVj82BHjQAq7zzX7D8oqJwwem8dZqUtbGzbEx8TGN2dcNdgPPjEVGsshJfdujGqRmQCKcE",
  "key16": "ChxcYMQuwhJYVn4p9YFqEvgAJKEJed3juiDxVjVH7UAiqqDgj17yvnyrrdbNyaCGBWDt2vBTWbXHK1JGnYRUWP2",
  "key17": "3U1HkDqmbF8fSG5GXcCqiiqzQL7oApyMCNjZXvrgRRWeZrBegDcM2UJEdnJuQVQjNVot8gLVB3eouBxb34J2mxS6",
  "key18": "3UAxKsRpv2iotXGbguUTrHWX3H81tvefbYJ9arNUu9g3sZQ8zQwtEnLh28GctYqAZNWRTsh317HSur69gUwL2Tni",
  "key19": "4uEBJveRJdHqvJZJLaY9x2eDWWrPg83JoyGeGgZTAVPbeiNPDUetzxATfVFptcnUPjMW3gQePWf4V44JQoDhLVUR",
  "key20": "5WzcySiDg2Df8FNiof9KiMjSgqyD6Pg82qoUc2qrRQXQFDEPMo59M3nPe2ZyLeSgk5tCjEhCArRBk9KXZ4rbmqKT",
  "key21": "597cVMfWasKSVqP5s9U76pVCuJ2vmRGvkCw7TvGENScKztEJpoMvBEVgy8xCTAWopJ4z8qyh6jU6fZiZPZGJKddp",
  "key22": "mCLkJhkMcnhPUy2NcUCqCZFEi98c5Hhy3BoxELXsD95Jp3TMC3avxM2YXmEaDnHzL943xDYzFbiwT4zLYdxVdD6",
  "key23": "4v4kJi9w25TiwfBLhG4t9kM6ERJKdx2iYr1GG65e3rMZ7gmjERCDQpVPe74ffAWKQm2eebbuECwbYzQAceVjtpUr",
  "key24": "63Y9khjzBfXRcjswABcVBbAsvsBoH811ZPNaWL5sDkahZtBGyXB61kGi4Y5M1DWwhKurLggWcf9XemDocycWZ8AR",
  "key25": "2bnGCXJ2ssHJerct5U9fRtQLhmhAvK7WGa4ftgZG2kCfAVsXLRi4mY19v1hgos3yWJW6BbaBju8E4wbkBFyxrLR6",
  "key26": "3pxyjLuRSMvitmHd78eFRg1nRYJKLSscoWkTc55KNWqBdrcsmbzReyjzxrxbU3EarpyR6wCn38ufSW8chUaJoEZ9",
  "key27": "4McWVNSfMYHByKQz5XusgXYHdo8VxJxB5aTJVaEMapCvChXZZWyYpBGJKto3eSqZgGmNTztMivVQEQeL5RRVY9iA",
  "key28": "2cmjA53Q7Luex2MsB6j3CeQfBG6kxo7s6MRhwk4MBk9XZB9gSUnfNUWDRMfV74cvesnTcoya3k4YUQTVj9VZZo2m",
  "key29": "PcJkYn5mpgvpGYbjvmpb1bAU4WdxjdGptY1gKp8aucAfyVHbmgi7XKzNQgB5izvGkoJcreDo44qk2ctyHJbTzTD",
  "key30": "4sDNvFTKvj8pB3XNJTEortecMoHxYqTxSSZwjFh8Y2nBkjyeq3j95h7bzoxrs3FucimgVorSCPQyaabqZrbdeGPu",
  "key31": "3v1dxGRUiH7ar3y7zwoqBJLWcL7s8qXpaegCQgQcjzHumv854dArdCvuaXxCZsGexDP7iaauhecun68iVFMKo9Si",
  "key32": "3s5wuYw7MkwfvsiLVVDEMxAzMv3gPYgCcL7eC73vgasbCZa4LTCUYYSCkd8JHr26sWNA7RBSoMY4LPsmM1mHPpCb",
  "key33": "eYaKapZkJUoaHPKTDDTiP9gWwnL5PEpLycyDBh9ZDmWQj9hbUWcK2JP4Emc3waLBZZVhJ9YGf9Wf3k3iHP6LX4Y",
  "key34": "5WdncW9dDCumzSdgxwDVECjSa69hwVArVk6DiVtBxCZ2Em6u9AmLcrLGmXZrP963wnmWBJgRTP2uYKsGZcSqd7rp",
  "key35": "4gDgfeu5HA7MNEQ3jPrsqVfKv86CjdELcPzZuCmpZEuE9xGXYavFsdBz9rFSXNh4rwt9siRFwscpWtJYwDJ2oPvN",
  "key36": "464nczDQeLtf8Rnw8YN8nuMyZCxWAdHc7pBdFMGj8bYAX43SU6pBXAx76EbttysTGvwcThKs6unNkum875U77Ptv",
  "key37": "4edKGYhcid4VbtMeVQKQmVeGLFDez8ynfhLwgixhUPWjRiSzaaXRFNj9sfNVnzAct4YK2x6wXZy688ZSd891oBis",
  "key38": "54i8iycgqT7fP8yKy67BnCF87C1GDjYBBXqLXgr6Z3PaF7MupbbrpZqZRkyYH2bkkb6bxdnnNj8MeH7raJBmym5F",
  "key39": "67BZ6Tir3xwnQMQ7jPJ7Wy5HVtXuWUwbZq9q5cy2SRZCX78xCwKiHVdij4LCqgCJTA63CAH29LoVQUMwPspio6SV",
  "key40": "5Dur4VUt9iS7Vw9KS3FbeQTWKnjKbHSg5xmZUhBNMTZ6WhwJY6ddavXE1XLbpQLZ78h5E1eNsky5Wq7rhwTxp4Xk",
  "key41": "66M3CEniQ92FNZRqGTkmeB47hvtby9KFzCcfkgLu61DCY3iTwgGVyNLwRrBPAXxecmN9ZZY9VVZSiMbGGXVUqXx3",
  "key42": "3wwZygbxfaPHTeKnPVCESfrrPwZHU6NUVmha9QQQVbZtNkCdTjS5TBEYv3QR7xqwMFbYCoeQasULRhDKBVaWaADR",
  "key43": "2dw4Sf1UcgLZm27RWk7H1GvjPRfJjqc65VUoxJXVMw3J5SBFWTAYYTAP5vyPvpP8PNweidpMg4EXEUDK53cpe8jc"
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
