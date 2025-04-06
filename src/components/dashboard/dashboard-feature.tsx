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
    "5S5Lc2rLvWhY4w2oWGLisyxJdE4svcjaQ8mah2ifr7BrPRgctWoUhXv8fSioNAE5Pb7BrtpgMPuP3azaXDDtHcwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQwh6M8cXkriMK4t5VjHSeAVj7GQX6oGs4QtzRQj74CntWp6Y5La6TUshe6S5McKsf8iDWeXWcboQnG63yRxuhh",
  "key1": "Yk1nnmxFwbpM3EoFSCcrADmai2SQSF23xJkBfbn9j8Ab1M9Q8BVMWAtnXHYwpPoxzbuXh8arJ1Gu416BJB7PU88",
  "key2": "5GcrBw2MLV2Wj9VC9DGEoFgNpLSfko9MzjUTY2YBKKFwZSw3g5NtkPkncaGL89Lj2KDST7YqrVgtZjYbXZPw2gN8",
  "key3": "3ZSdM8vhNqyLbdzqXwGXDxbfcfAGGsaqf9q1nE1CrriXLdFmMisYoNfsow29WH2QFFEgbE2ML9ktkK1D4kBaME5S",
  "key4": "2TmwW3oTMPTDTy3k5twBqZgKcDdAQMCzfasw6TjLUinktdFgZDC8E7ee6eNg1UGZevvCGqq9r3F9zu2hy2Z2Tfp6",
  "key5": "2Nb15QMa1kGt6Ea3dMJEGrNVLiycBqpaSun3fADmeDqjGXYnMCNyGtC7mPznbg9bxxi9DkUwePwSRv87u8MLRjq2",
  "key6": "5o3VyHwgZrDcMYgNK9mfWLGHbokGLqa2uCzSMyn48nWTm8FVwcES2GMF1HDWNUjBNqSLVCKGSxFUeygXJg7rBifz",
  "key7": "A2UCBd6zFEAh8C17qQNPYzp9Z2K5XsRVJpCK2aKKB36XAbKo5i6JxWCp8mzWbTX8MTHtuLayHWHP9p1s2L1Hwrw",
  "key8": "5X4mXkdTCyRj1Kpj2Xujc1rHp41ctnFjXU13yjDVg2BXzmF9GZje3imSM2hA1Lt31uipYD9HdvAroAd7jV5joDEr",
  "key9": "3G3aR7X2n8gYBsL5FVjWn22uRV4vGmkwVSpTmpPPf5YfiG2zXTLQQCvDUmhLv1xt1KUu3o3ZE9cyGRseWf7CP2Vq",
  "key10": "4AMoax1WnFw4yv7SU8R71FAPGyp72nKhrEqC75nQFBTYSb1HWP6Jrv6SdwSAz4NDWD74MTkJs1o2GXBG9UJToGSn",
  "key11": "4pK81EX2MToVNPa551DJh3Qxo8Fi3fnpPowtA8s8ZunZTyVKBa3h8NHdyFAjDgSYAb7JNRKpFxHr8sJFkfRGmsCx",
  "key12": "5AJCRHid7jBy8SsZ8zBqbAuX2jZc8A5xrSMPoAKccaZBKSU3SikVS9GzWx5mtf3aCdcHxTdWWA3LFmAcfpDJqSWt",
  "key13": "4rovSWBd9bJmgBACdhza9LWPFKyrgsknPdfqMXCGjFdtQYWrkE79Gw5Yc1svoFDqzNqPX9EUiLm6bSXGojgHFN7R",
  "key14": "4hnRtk3Xn1E1g3nPRLtjCWC8rUnCFRuNpqjQWi2EB6Rj88ALJVSsB7JbFjNKW896yFELEvN5axjthiLaREmRe9XS",
  "key15": "5kUXEjVQBFuYzfLEbvjv6aaRyVUDbwdBJx73YLoWpeYBytRAE95dJGCWoaUzTfGNpAj1MboQm9SRekVFxt9H5gTB",
  "key16": "2V2cToB4SRoLEsV7sk8W6xau5NWMVn7dej3eSyaEeXmvHHzXRBFFHkm8jaNPLpRHwmFhWrpcRTyzXbZhcATywqRG",
  "key17": "4FVgvFQT4xX8tUcKUkptjppt8V6GsJZAjB8db4GqUHRjhwxyr63qEHgdjwySxGHTgn2XSeVp45XEmDmZBqtJMrse",
  "key18": "63EJkUP1skpQUXGw2jvSsapAxArp5ErnjUpMJNmB7yNhKEw4dHQuEgVvjCUUnkibLKrDd4uLLbKwsYNLwAxPwGDm",
  "key19": "3TxJbLfh8apY8dtNPMMqjrGmBscMD22mbE5JdKSZw9koxocuAep56NjLdtHUvUkrLtmW16oczs82QRRsLvS8bDF6",
  "key20": "tdYLGjyUHuC4CFLVgt83P7EiGT9inAprjr4VC1qZ37JDeejP4YgH9LKzquLWQ88UnVnDzNpH7beo4uu84snVtc3",
  "key21": "QecKEhTWbehmCLtGnpVb7QbxEck9ySsWbTN1SdKGYKrCHa4UNhz8KnBhRw3tbTCCskCbHQ1t9VtyALFWJH3QSuv",
  "key22": "4i2ipcftdqZzBeRkbNrzvqJo1pHTgkH6nfNSZ59rarQbTVpnUkc2EnRqMF7LmYe2sPz2RW5uFSq1wvqgA6UY7yJj",
  "key23": "3NEiXrHYJMSuEVft1mDpDK1PmMGS6qdAkGnJPhxVQ5kK78UcoWNsWbuFYjqiv1thyaLsvXz2hbhUywqtnWURCv5o",
  "key24": "3tw8ib51BJNQP764sp3n3twgXTbEKWap2KTAR81rv6aHY7ebAjraLtcm9HZH4ijLQxb2xdkkbvFTCUQPaG6pkXpz",
  "key25": "5XfDmy2cJGSm68eR5ebngd1DztR7BesNyMu3juZbLr2VW3ouXZte1MVUwioq6qnsj5yT95i6pKhMZ8fnqMrYfBUw",
  "key26": "4BSWu3tHTay76FQ3M3DDXyUBmGziDznBPhmwgKjNwWb4MDMeC7d9kEXFjNwRACuQkvmDXSLx1rcQuxSitCeMZEhh",
  "key27": "edVoJzzULDWt32k7QkuJCgatBRGmBd4FzvhNcEotCuC5nEpZsCT8RHKAVJtLznXoD9qbXeYsoD2fHXoQPMHJ5qZ",
  "key28": "2Zf6XLNzJ2An9UnanJuX8JT4Q9XivyB3UtbJ9fWKuNGN7m4bjDLU7iQgmWKzzEy9tSE2jFPfkyvbkcoAy2Fb2xpy",
  "key29": "5psNxcuZ8Kwfqtk9amq1ahEtBNPDrjtMzZrcirLDgierYXAgMVyKiFYUCUeFHYNG5UYKTKuGQw4kJYxXs5GABRbC",
  "key30": "4v4QtHSg3FMXRHfGULwRqRxdr2p6mqYVRwixoe4QxryXy8zdRmp7nkgXhLVKHtJYRcLw8V6iB5XoA4jWog2YtLxt",
  "key31": "2ZjCJGSyUYdScdhaNVLiGD3UpHhLDVBH7Qq5cs2GeHG6xaJoreEN63E9syAShsTepHbJpaxNW2n5Y5wV1n3kLx8D",
  "key32": "4iUcdUUpMRMpQWoWoca5TsvCFwzd3ggBVTq6ET4PtYkEVDLD7shbCZEPHbfJLW6e8Y52JcCV6tzdfRUkgGeDxf8J",
  "key33": "3jC5AJP7sKsGFBjTLAYgKLoJR4EEHaxbgL6XLAY1y5T1mZJamamgQGebY9A8cunWDg63Bgdd6K2f5qneQ1kCZ42K",
  "key34": "3CR7TFZ1JHiD3qGvwJ4ot3UGVmbobpHEeAEtEmECGy4XMcU1yzuLABDGvXNFShjdzDpWF3AC6HW1NmqmCRysrt47",
  "key35": "2eKmNwCxjHBkhrb49ffsM1K9gdsxYHfwE7T6PrNoiEfQ8G6Lo5eK6ymxzCzqJJFqhGbvkZEQLycF7KaLQ1ZadJm4",
  "key36": "4RcGfcu1XsG1p4oAE5YgUg9GZFwvfAfWwWuTRsiyJgNg1KqSFP9AUS2zyF5zRccYsfGwQ4gpV4psV9NBLa3tGrud",
  "key37": "49eZ1pa5vbLjoHFxb7ticuTbDs5kQ6qJ97RyePVY5yu5czsic3FRGGXcNZPJCKGupGPEfatdnX1JRdEMFTHMFJ7B",
  "key38": "34u9hBigwGhP4vHtVH6zn9eUzPSsvcwyEoAiFWr975A7bo7yRcrwtgpLqBFSh2tknRSR1BUzh57CorMJSn814jHy",
  "key39": "67HzAKRRWp9vHefrRiupFSQrfMepMgPwRzDyH1DyPLTo7jZqgC9gGbTGdkDQ2vMshGCWuGSr3gwStNYZJEuUa4Bv",
  "key40": "3Xo66sbETjRyjTkFQvs1i7vyEJQ92jFA3WJ7hsZZW4UqoiYJNsKyaotHbmEoycqxVpzPXxY7Z6PtzHY6AjjHAysh",
  "key41": "4vtEGZLMD7GdtL4wHYMKjn9hPyBy53NEFa2eFNpXE6qxQyCyKTFKqPdiqh4ZKRHxCkJunrRNG72ojh1GGouLyCY5",
  "key42": "cJL7FEBqyJononErXtbF81uXoksP7Ue3f7kzxdj75f26t4cifRk3KWgaDSWGy2gygYtyw3oxzfRqSgyi6gXZpob",
  "key43": "5oDXhF2ZcfLkcGE4iGNVxxJt8PxjPYGz6YEqFqfPBvxRTN15d1nfyzmpKeg8F5KK4xAg71XdAAsJsUVtDrZebwu1",
  "key44": "5Txvb44tdveDEB5rL3RB9p71xgxgfw4iNjNW1MJpZvMb5zCxPncFE6fCqxxFev4dSyQCrTzD2WTK66aLjmbzY2dY",
  "key45": "2jQnFjWbFJGgnXtEcs6NPk4e5JYZMUvHVbmqxHbK8PppFfhSBUFhzZ27JAvEqmMG3FaGaEXcekfc9uJoJDRTUfBb",
  "key46": "4N7f1xhCavEgJ5P82N7bCADbsBpqEfwYMiSUMqpa3W6yKpTdrXKHb4e6A8mf5cZhbgPAEJuGh2EKUidtS5PrMCVv",
  "key47": "1fBN68mWLMRFR84n1vth8RGWFHvNHfgwtYvguVKEdTXkefpXwJLweQVPMX846pjNPQViZAF3eesUEK4UGwyA3xa"
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
