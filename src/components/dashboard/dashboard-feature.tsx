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
    "2qYxnvV1baeq18CwNg1RsdbuLULUuL3np1S3KYMa9UYFsWuVcNSz6bVd46hA3iK9ZJXCptaCmVJQjnotUHHjakB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M7VBDGJWEcgTiZoo3oxUmAhGDuiud6911Bam2x6esjRBmEXDzg37HHC1bDymwaLeEUuyYjSQcY89sMxXeLYeYU",
  "key1": "3jFhwSg5YGknY95XixMyyBjm9o14coXeutiSUcUcs7jf5ppGrj5SSv9W7Bpgf1UUycK4nxQmHy1qB8E9s5SpZhZh",
  "key2": "NbioYGM3shh5cdGT8s11vnwnpAjjNCos414AnpyYBtBRqxsLKsADzgfBQYwzmYPZkzBSBAfmedTrgwscVQSuwd5",
  "key3": "52LZGHG8xwCQEW79JbT3T8uWSqKNnqD9aVdRR6X1Hng52PRvz4iyFuKxM97m9GBKFFRBbM9Xxgr4iTQo6SETdYT8",
  "key4": "X2Mhw8uhRGctQ9gFNVbTwoTkqTTa35hCGHFKucsDmhVkZX6qifkkYmP3GS6YS9W3DsvJLoqV5T735ET9qKDyQt4",
  "key5": "3N3KtobgYuy1bUXNcNerYweqrVTTdLaEnXEFxbL1EENy9ppQ1agE1muvkCxGX2CGVvzZ8od5u1MG6wQkScfCsUAg",
  "key6": "2R4482gX6wDU9ofi9dXURno4r6nG2xXJL822ef6efQ2MoGPWgRt3orBSciqYFJKKk36tMxhTP6uGRrM7Zf9EPBmb",
  "key7": "37doCxhtXq8CvDaNMm7R5tFB8LEbAZpiAsZLMTDXG1Pufvf1yu8oVVm2CqN3rj2Pp21mQcC2Zp8TtftGQ9TXBRx6",
  "key8": "6op4Kg3ExEM2rmvdvLaHFCjVu3dypTUkwvoLpBwpGCFNujFPVFwtW86DNZMLszPi1VNxMgG5Q34oZnxZtg8NsuK",
  "key9": "3EEnTwUbw5Yt4FNgUui9b76kE9cJNf5LdcEZNPj4hGB1n3mPVSGzRLfJHmU2KQGNQauWYXrmxetxzbUNoNCKVZ6P",
  "key10": "4KAPftF1NE8cXtZLm6zy34YQUXcLEvLLsbTHg8Em8x2NVWmPDr2AEwpQV9ov7PU7yjUPAhcyTB19mDSWqzGxAWqN",
  "key11": "2CJNTndmuhfEbDvctAufuQgr9fgbaB4HdhUAsznAGB661jVKKCdQEt43cV2mZXAQ66YqjdUbLgcjCxaF7C45AF4r",
  "key12": "56UsmXayLBYdwafsowNdfwQk7EmCbHTNh7uYa86xj4Zxxd7vfYmCpQmL3f323KpHjUZ5Kzk9wG9XvSSZ9YmpTMMr",
  "key13": "619sWjuyZ6hYrrxjkbchTUgV3Yf7NJ8n5yx15P1YXFuViYKkFf3k3s1Ejq29oWp8TrXPje6LT7exftvEntGwcNcc",
  "key14": "4cAVaPJQwoyB6Qp5eenEYEwWoSCTs2uFEVB9ynVt9VFhSeyNwbGgZyJ3CvfyKfHpztJzZNPMYiHe9K4emTa1iPhd",
  "key15": "4xLMyPjxrmWzSbdQot67gVrbc5P12bAo7zF663upKUXx7kWKhbCahCutFtgUUiuFauoECqe3VivZCDzKs7nZeRP7",
  "key16": "4rQXh8H4CwNjsaicaqjsPV8soFNjEwvMnmLn3CkyPFHBFP6oiMqHd2jcPDXZiTvFTkssGpMGRv7VVRHxJrWwqEXE",
  "key17": "3QdWW2H8BXydwCXugTwE6aCjRd922BbNuV7611X4nmy7pbgHWDG2pDLpNpemC9LEvTXNERhnbLyD7CGZpohytPc9",
  "key18": "25e2pg1A7ZvpGBFie1c8RrDJ12Z5g6fRePVxcYS3JbP1gaq47AQYhYMbKECd9TENZ1CH7KQq2SLtedEUNh7SWNZr",
  "key19": "61N83cyvMetVMbvgF3gXB94jrgH9XMJBCrKGHq8BKpunjdJPWxwkKHwxevQLh27eKk94n7DwDAVM3S8sivW4JrYU",
  "key20": "5n7zewGcSo6Mc4WtX5Z1PXDEnaxz7JV2quDefCkqJcTPTxr97QLp84PiaXSFd9uHJcaKMwJDba79mcHaJJTHeR8U",
  "key21": "efHcNaCDt1xfTYZaRx4ycmsvj5wcw3sg1LCkcRkz6vRhydxjjorpKKmZwikvSfh5c1TXMd63rEpExtXs2o21jf1",
  "key22": "3bfVefCqAHB79jkn36CLxzzRsupJdA6Kqe2dxqAtjYpmVbJUdA3YuTBPVVkVJAvA4H7DciRcvYpWzkpeNwBkbgKv",
  "key23": "4yzwrkHy7HmAWP4Scnvn3rfwGv5nFKWq2EFZUsC9TynpvRpkxwWdDeYckVmx8MAqr5XXDQcUWzyxSqvSCiQKq3p5",
  "key24": "2T4F7sRW9bqUYWQRZwzjHQZeNmhXErJiTs35rbrGLhUbXZUXAdqigNyuB62rMo6hs9exiNjmWDVG59AAuJxtvUCS",
  "key25": "44gbRUSv9XgacxKbdNYzGa4u5LHEpAsyCikNaBWKQWpfLcYtjmrg9phjFAeUzrST17X4dAJCZiF4PmwpFA6sp184",
  "key26": "4pJwUL1S6nMbK8yU34arw4qVe4NfJuJ3S3bVis1FS1n4v7KwUsSWvzLEaYQcX3NATYqu3kDmiRCNrMDNA43Uzk9e",
  "key27": "3VuYzTNxRJg1qJeTX6Eof4mHc7mJB9ivPDUYBZbxJjLVpjC29t1rdM3aWZCVvHpJoSqF7W6Gs1gnbndWfN6JNEWG",
  "key28": "46pnhhcc7t3kxKP4zExZ2KaYfVqvcsq2NuqsCfpKSFgkTvZMHJgCRWttYtBv5ZH8rjS76eRMiBMBxXYfP6WNkQqd",
  "key29": "wFhhq3GumMWK4dG4c8oeSNhbEvxCpbvbaEDavcS4CB6GPm8iGeJWY3Z1QN2v37U9y47oRum5V3FYw7GdnaVEMNZ",
  "key30": "q8GUrETsftG5Ad9g2mjbq45dZmrxHwmSJ81r4vRExcRxYsBvcUtoXavApBXFTz35JjAWzdfPsqm2MAuiMxEmkXq",
  "key31": "2LWeWnFUezDrbvDxfMsfptdJtPK9SmfTe9qX46ZwCkZ4QjwsSdJdfKVeRxBa3pTWm5q4wHyuXtoASSyjNG9e84CX",
  "key32": "42bAfoRpK9kg5eD4upyjyyyx9mK3gGGqPYUfVV45FMrDQDFHDTZQMh66jUHpv4zr9CbnWPWqCsTJo7r6WgAmMonM",
  "key33": "3H26KheHk7o5XPfTVsSGuz7yTSPjCmdb1cXni75Rt1D5iYzB2KmKiNNcjqwEJfDJRdATowxzbYdpFXZPSmSTf8je",
  "key34": "2znjoVDeFoF7c3g2HbmA6hnZAXsAUD24WdhTuHLPZwgEqA6ew6gem1U2nob7ix4aCCAYPPj5fgAyzb4D9r6th9XC",
  "key35": "3mFsSbLXFPHVF897D6ZV4RCFNEEjcZDjC3G8tm48ftHXxgto4YJBHBuckEjhhEhxcKJeat6qPqrqCGAwfxtfaZg3",
  "key36": "4VNtiQhQp7DKKowqSiYJSrbZ51rUqU6zUCX94zmrfP2DvuYkquffhe4PVv2c8Xw9GQRUbTPtt33B6nKinz6P2ihC",
  "key37": "5e2hAtog5vX313LVknBDKvQVsTFgPfviCLFTNi7Qx7Dnc3ULK4wfSFooQU4tHk8Hps7bTxkyFxf9MWKoJgNcJ4Nb",
  "key38": "5G3ta4v7vXEuoTqn7uEERVbvjJUKm2fCGHe4TnVTTydGRCmirALB4aKZgHw3dbLCMmGZwmNSHK2abyCQJ6CUwUeb",
  "key39": "3EhX7ZVaRFEcw8fDq3iSyiUkB6Grtn8NdU5juQmZ1e1Mhnk5X7UtJhE3555EYeQyL3HAmSJ3Gd9Z51BMidxNx1Zj",
  "key40": "5T96M1UXtQ4BV5AANhrd76aZjRo759PHkynHRTo1Gmo9CN1jSJoNA582hcnQ4EpZfFxbcLjgGKiG7rt3cHRQaGoa",
  "key41": "5YzVPs7FkXi6zGPgKx6saWXzXtk8YNVUEzkTPBy8i1qsSt9mmCeMLigKp8VV6FNgj7eTyc5fYsQn9uQMLt1JH2F6",
  "key42": "2n3qfeDnQMAB3A4burAu6WZDnPsU4SdoEQZi8rsGsSf5A7ws6VATHfhBD1JX6ho8eWVnJNuK1bPVRUQmthXx91Y9",
  "key43": "3teiGEA3YG9FA86MB84DviqV8KeGJyzaBGL26P5aNgcsHrTg6xLsDEi7UHULFfU8Hn1d7RkTtd2YEv4HtA7dakdu",
  "key44": "61TonXBkuw85Kx6tPksvJ56gbDL2rBVmGSTsndjGSAB67XVBfsWxc1i3K44vdmpurhpVevREEJcTujEiKY3Rho1C",
  "key45": "3ich1PqFctvFUrPqRcgdiznnBPCRCUQkfEZuieB6aSPKi5pd4HvGWSTz2ppCS9TDCGLCyxBW8pQHgvS79vrLd2hS",
  "key46": "3QcgcGdeiSFyiaoLV9DtjJXFx3wFY79jVRT62TmDU2FnWmdH86Mw8fiu9ae5BzvbH2czjjLXRwUw1d4MGGSDSbGe",
  "key47": "5qAtNnxvHCq2k1gZzF6Vvx7nCyremt3c3WqWeDDkv2enfA2cNhupGFRBXzTETrZno2GPhxMSj6Zg8dBWusMV3RpL",
  "key48": "5uLgoTitLPUoJrgszCRKqQxtSKBPCWhjHNmTovdQgY7126992kB828ystdSRnhfzqAYUnDjKopsb5RCivaDvEY12"
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
