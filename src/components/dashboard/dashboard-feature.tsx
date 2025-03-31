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
    "4YbPMhKgCsCvvubUufDhJQN56VU9ELPV6a5UeoG38NLtTJNXP65TMEBiSpm139gGdUnooYZWUX4rw3d9U2aaiqg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dz4RanV3wdGSWLsNzeyZDnnLazpeUgcexwtMPRKHnurTRs5emjHzFPxDM2Ymed1EgnHm1hLpG7itG7yFDKkyqqu",
  "key1": "2byHxZkAQbnLbYJyACzUKAvGMSEKBhqUHxnKqRW8dyC841SKmVJZfmgtvbTSEzkSaUTBsrx94s61ZoNrX9jvQANp",
  "key2": "3fPtKc3AJNJAVuFg6oMDgZT1PuxyDWwM6Sh78H6abjepR1mApAMJ7vDBhyTkqw4ZpCgjFGBGr8r9BFCyLs3HcxbZ",
  "key3": "2gLYFpL1vsPWxYpg93rhy7wNzkXLR36yd4fiHH442sSa1g1LZLq1fCbx5c1SxFQ9w973zhsSUFTi1oAFu915dJed",
  "key4": "2TxKiR1EU9jDstmHjfGZs91VDHN3WxGuJ37ivQnoT67X8i4MB4GtFh3Lsr88UmSMzcAxVDSrxtmdVUt3D7QaFWM7",
  "key5": "5FHpLUwMvNFux9sS7j43m3ufUVJiixMwTyvrwGJJovMtBW6vHBZkxRr8Uk6Ya6Bo6fRGXxaeUjuEDYTu2UNEcw1t",
  "key6": "ttU1HcB5UzzFRmvGAf595GNSoKGnnqVUt35fQxSufMtxaHpxX8MUpw99Nn5FFZEMarbNuKorPXJTpd6z6dvGvZR",
  "key7": "x39e2DpWB1w4aq2xRhFd2BQbDb6QaGCg768FStp8F8QAw3Pob6SghY65dSd768rN4Rjh68cRfJakzAycN7NBqS2",
  "key8": "vSydDWSSFT9XxYdA687jpk1vcD7ab2uVa8MGq9sugg5StBV3SfRnTc3YQCYkhhz7sPQDvVmQNaAGSxHn15mJtdC",
  "key9": "5WVnp2CL9NSWTASa8UQaN6kNdg5sjtEvshrfPyC5w81A69tRw3NTQMda2RAVdo1fojXvRKcYSFodXc8Pvr7Nr9Jh",
  "key10": "5wCg3arKTMadqC1WbsyUeEd6axS8xXNXE2z6kyprK289SWyYr5Rf9wMrTArvPvBa8zWpxHkFxY6vE7VMb85EpBy8",
  "key11": "4BX9v52amE7qECgNVkWYdasAWhoLJd2woRQs4rbaMNponmXkkwbLL8kC3oZbH4VT5CUZRk8ctPVmeaK1iTRr3DBo",
  "key12": "2tVuCGv4HMYvuvBQqq4CfZAio437WVdy2eS9Yn8dfBeTDzbcmjTWFCpZMz8UAABZskWxdQM45K2R7GPxGXNvCP9p",
  "key13": "5zj2sTtnomksEpePiFMT8X9CuppF4bfxU2iUFwfQXrNz9j6VFJmAgv719CuBbE88srGLucEio8jycQWLRVJELGsR",
  "key14": "5y7VzXFMWSqYhmzR82nAYXbM4F89yBhNhcxL4mwcYhygcEtyp2EYetwkJizKf6H56Xzquyw7Lzx82tsaXPpTKcNZ",
  "key15": "4jQWYL23g7XXKhAsSgNqRezf9y1cjyz6znFxFYTMfdHDtAcjBbfzxqK5PnMb2nrCEE6hzeU7m2pPzQsTRyaU7tvn",
  "key16": "523vGmru5Sk1QhnGAjhh7JGdNcgCcgj77cGWpCXREd3Xi5mJnrR2eVwnPgGi595CBCGezBimbAjejGLNKbiEjJXQ",
  "key17": "asPZuRGhR7XBQ6jFFGqBv3RaXE5kGSXjb2jRS3s1XQ9Lwmbwb6R8PgkhP62j2beET1FF7wi3bRok35pgj6rQUTh",
  "key18": "5PVGCU1Ni237ZfxnRM2rLfoUVoyyrqErbC4RcvYPEK9ecAAEeWLquV5gjRDoEFrnqMPSRjiKHscGWuf5ZSenBYMZ",
  "key19": "2RgJtvokryvWHHe3mG8TgUfYHR1yatYp5zfgKz8qevzrc1akc1wgvYDbq9A4BRBE13SmmyBsPTTXNcDSXbqrH4aR",
  "key20": "5PnfP2sTTA69JC2ixJeYFDhkkRVVwBbcDCcK1DZSAmEKVEpucRBvDgFiKUCsxr2VPVjUo8fNbqCfmAYfFTcWCNFh",
  "key21": "4NmyffxRySa75kenheXChiKJ11h61MX37cTcatcWGtGfd6YT8NezwAyg73wT4CHUTp6aAvVvJmXEF6VM6CA9RchX",
  "key22": "2SAAKS8thZCnnwy2owWn34eoFCMP6wdhpGqbmrULRshYz2xZ5sZu752ewzuLEGYVrgEHbfTqhfEXKt7SGG5xVbTf",
  "key23": "WYiCd8HeZusMFNCq9pDfqAczEpv2RgPrqwGo3prhdz1FhBN1uoNa2ULRa735we5CcP8mjyV4GidYMq8YjZ3VxCy",
  "key24": "66oMze1AqwAjFocPxUAPpTGS2UKrobNUxLeZy9FFCiD2FgUV1FZSiv4WQt1kShqTfiTnpykMkoV3b1pfnUmacaTL",
  "key25": "4SN9EQAh4rkeu4vJHwhyM36CQhtA9Gj9D4o2beUppdKB145D1g7PDgfB4wbMN8oP7oQ2Waj5rNYjARm35Tsi9duF",
  "key26": "4Uva8xPY787XrjhueayRktsj3TKTDaVzM5DRjWZqAhkFfNAsPdPaWexfhcxM3WFZWqPeLNby6Q1b4aYbEYPZ7HNV",
  "key27": "2YjoDEUJsxkpBNGNRnM2FrqxE4hSH3xpGQ7wc7CTZzxNobAcUCDCt7Q2TBLv1Q2QXyXVxMbYXHHHBb4sDbvDBU9Y",
  "key28": "5fMD1gu4cCgd5Etp5hm9L43g93ZpRPxQHZCBJyRLmgxicZAbPga3JTV9ScT1aThyHf4bY85a9E5XkupHctWZ4k6K",
  "key29": "49HfoeV8yQn7pG91XnZ4jHNLjG7waK6pVaDWzVucjBggcb1P6d7bmsXiVQE1uedgtWaMsBCtr1kfdkp53ZATtBg9",
  "key30": "462ziNhAN1ezVrnupJxUz9zPPUDJ5zTkY19gt4oUa5iDwM5eMDffDgJfjeu1UYPwdATf5QPcMaK41wLZqoEDwD1W",
  "key31": "5cv4XWEB2LQ1KSuScWoWF5YdseEGjJXDgjagXV39FTknF3j143qS5yP3qA2qPYKnTdtuNzpLwHVBmkStCdbcPPqM",
  "key32": "39dUp7JLMxFhywrFcmn5t7NbHa96i6TE7pDbvpLyakbwbbVUavVDfPk3icogqFgtYyPkzRWUWctRkytHw2UWQxma",
  "key33": "HCMdsMdmSphsz4d3iefwytTBpEBPVgHn4HQidDoyZ4EXehp4EfG2srCRNHVptNCyFniQaKbEjDydNR5pZwJ5whg",
  "key34": "3sekZPryYCKUZXbAyPF3kA6LHkJKNbmn96Y5XKsBiNYKX1CR6zQsRsBUprkEicvMTCA5Fz62HVf5MBV5NeShhRPL"
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
