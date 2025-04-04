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
    "4wL4ByZP5KvLeUa9MfVxsPDM9iGYEyqST3uYSyKJjgnrdDwVRXa22aH34XYDyhRVqHQB1pd9A84L14LdB3GcWsMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uxE1sV3Hz234m7jUmcwt6kCfRzky9DLuEswvB7uDNh87Zn5vT3DfAZvW358abNrr4E3HfUybTHNLULnZDho4m2f",
  "key1": "2W5UnfNr9PXD4RCCx8jx4VPUrAZRhaUbJADdZhaSHaYR3grAWZaP8JvjFotzzFKnKGYKvLtgrAHU88cy2Q7VjWhs",
  "key2": "27uqLCMeuFJodMV7ddDY89kfKusaut6LGLXc7H1W95vos7GvJj3Nj7GM9gqYkEw7cKvimKDKXCsfUSwdEKptL7hw",
  "key3": "4K1Ccfxioy6KZjnYDSPGTWXPZpNN8sViTidJbSgNZ8XRdiVsZGUEiZv82c1jQKfK2nmgKHiReX9WSPBgHcX7T4FZ",
  "key4": "4yVHnvwLtEiV2UApDuBSihg4QbLoJg8ZkkPPpLZiFWqALUneDrpxtbVEgS2nUBCeU9o8LssGBuWfGiU8ZHmCKXFd",
  "key5": "4goaU4cSfHvCRVUpuKSgp838guwWJ5dxRq9BuXi7dm78v5qZ9bjBgVVcjFacAxq4WxqGjKMXBXejHABZvUCFEiVK",
  "key6": "4rqxR5VsEpbqNhDx5GvruRTsLkkoktj6YCSVnnxdVjDuhY2JvuDg91L4TcC59wPJKBBWymjak1qfBsDN4fireK6E",
  "key7": "D6yzTRbk88Vyro9rZicHQiyz11pbiGk1EjDqHLN7xyWiyYRDF6kzSQbKFmfxts69TqB7tXKEAC2VuNs4txxDjkV",
  "key8": "4aUvir8yh9QviyXZcBQ4p5KsrP1AW2bZfymouCe4ichvdVEbbX1QB2yEPaQXQ1wTr4Xr8mDq4614ADusCt53C3ox",
  "key9": "3qEvPyjuDCSggwabHhVvoaFa4rAUJryDfQur1j19MabSvY13qu2gCqNC2KxC93GV385X8VSRwftuK3pMjaA856sY",
  "key10": "oXcorKL55wMQ17woP1PeH7WYfYND2Xr6USVTSQgFnVa8DUKAyqUXSiFFVKpXFGAsmArukB1RfRvXpdHPigr8Y1p",
  "key11": "7H8pDHyjb1vSM3ZUGfu2ggFf6vcgjnhzqwdqzJAaBwqjcXgt2ARXPGrFujJdaXYkfuL1KfgUaS3rYCxgUaiucyX",
  "key12": "a6rzf8ePE2MNrMtb7MdcDmNswFnZbX62BtxWTcWuu1VgHiw5Y6j9zbbjgocGF8qXzaVkhodcvNWaadXoh9u8nUA",
  "key13": "2gva5RhRYa5jCaVKnqBuezvSUysYyvSUzViDhyqMzey5TmgM5euGVNze8d3HR9GuUwNiDmsr4y47zba2MFVp5hx7",
  "key14": "3o3rsdR8KAVsYDTyggPND168Z7JxnUSYKPa6GK1NpTx51v1D484RrvFgHbHCANUoD82uUhVpkHpMmHorJT2LEAjm",
  "key15": "287ffLse8zhBck9cwnHeyk2m69RGd8T78At1C2ceW5nW9Y4eDEemyGcDt3wGBjHb9CHw3qiSUwviQY75QQDCrTmS",
  "key16": "323aN53KqKUom1qae9Haw5rLzrLNms7fS5sQ8yxWABKB4qhhrC7ZYzVjic5Rbjq1PZAeE7bCQ6SeUpcVPWd7kLjs",
  "key17": "4DdeFGac2nJBFSjEro3sVSaT7drBrP5DxW8u5CaPQAmavaL4gzPbLuqbUuJvVKgfYPuRrYpE7VvyrWXMJwGpBx9T",
  "key18": "5rz7w4Eq5uHfM46ZGDhnXN4tbPiEcn5yWH3Nwtba7CRaPVRMK51CsYe2uiJTAZUFz1LRiNhCPUBj4Yqbc617Lbwa",
  "key19": "cAMftLkyLgvBPVXAWj6tL3fdAfhMzVug6gvb6jjixFupgbX9pBr1p3Z7vQJBV9CTYFWSrpSgq5NuzowzuqABbNE",
  "key20": "Y1ui1aj4ezBCCN9HMyWEpsSGkRJHQkeVoYbsbdK79rKaciFjFFAdZ3p5QY3HcGGnNrDi3wax31BsqomPXpPgSPy",
  "key21": "2NdQLvCM4jbyuX49go5AFSWAF3ud1adfDyRR3Df5AiA1pXx7uNZDaSAoaZsPeQ1PG3NzcNVD3da6nx3YqqqHmtNL",
  "key22": "349PuFertnPxh9d8KM4GBZnurAuETT5rcP6CPZJCWkm5kBArzQ96LsRFvrttMXehwmjRbX3isJnLd2uH2fjyjePV",
  "key23": "mSx7WvZPbBAJxFiJrevupmNUg9vm9bVB6jMA3jC35DC5kjG6ZdBYTenQA2gxoMY1yFMsojLZyZfU68dmhoDFTX8",
  "key24": "3TDVFKjC2CeqPVbYzhAd7sbbNALPqcDF8PifYkDyG22f6BNrR85Zpq2vjwNfPZh5aZyAhcy9PmHBMSZW66QTtP8s",
  "key25": "4ZLbyNYfeLcL5UtNRa7T3SKUdJsvDMcK2Y2Ypv4dc1i1zS1ZeDTD54XtUEfq824fxb54SoYJbpf7PmFMbCy5Jown",
  "key26": "2BducuFDkPYBsd2SQMGg9yWq9t5PwRRSCModGUzgc6Fk8reREwJYTHHzxB3jy9sWXPKHH9Gvw34M9XGLXYacbDPe",
  "key27": "2E5Texz37KVxiV3rbfESrQrgpUo8USXnAKTTwLHFCgj8ZCPGf2yMBGaqqXQoqSkh4hkp6LfTBsCTQiJXxL5aVqL1",
  "key28": "5ypphmwfcVa8vetM6iMDEQByG65veDFnVWFFKS4cbCVnfcScsSq7XcY5ZC6JybAALJRHsbZtAkE2SEKbrHjq5wFG",
  "key29": "4YvNKhKfL9HAHR28SBzcdcmSu9v5VTxTzwE8fJkd2TtSE4jtgBgJcJuAAuKq2RdbMthCrGNXY7yFPn9vh3ZBS8fu",
  "key30": "4gs3JijPC84gY1QGLtMVQCLFxRoSL4wvddPmRVcY9xXgamCiyGnzJUCn5dy36bn3uQCMAygBunzaCoKCKPuL6BXP",
  "key31": "RwKQ7tLBLFgn21mGtfqBm6kSPxFs9mZCYSAYLp9jZnzBUWrZFA9YBWSbVnircRQfFcoqz6jhetnCUdDXSVkMHx7",
  "key32": "3KoLRGzi42onA8ynRrAMHxa1p1GqrR6ben9Pe7pi2MSzxQ3xBiu5qq5Ukqogy4dMxKGA47kB6AfCk8wHb9n1nJ6U",
  "key33": "4hRKWBrWTFCY36dFiMKssxvNDsgN3vMTyhXWAsSeNiPgbiUDmxbkbrBREt7pRXSD7ouNVR7w1M33f2Da6YMuMXL2",
  "key34": "5cdSfm6ot5NFMoyk5hjBC6TfSSujLbJaJmntuN4A7At3qsLRRGEsxdo6tL75jn3TkvyJMB9zfp8zgkPZVcUxAx3h",
  "key35": "2XrihaEd7EE88Aqtt88cNKcJfYgekNEhXmLahvBYThaD2rcFP9E4JNvab2J7ByPapBgMrjrxYqD2Sb3VeysipjAi",
  "key36": "3vWoxW6wUBbt2pNbxeYssdPAYpAkjwaoQg1MLknvZjn9MPqjuTWhKPV4yP6uPbAdoz8hFKgaPwj95fKRE3yWHk1E",
  "key37": "RdsyWrvHDM3u2M9aMA8jNMZgKxmeE1SUeRwg71JRcAchMrZmRn6tvpUumNdue8LvwnU98CGSsu2Tv7xvtCbdiHt",
  "key38": "4acptsUFUZqvGxV4p8D9CRitdEhwmpGmcx28FfbZumCQdqXkBgJqBRcK733FDQ2SHtnBQDYjKr43uHBKg1VR2hWY",
  "key39": "4Dq5LLF9k9owraE4kx5m5rRq9nyGXSvuDKjpELLwSVvQ5p4WvRuB2bMMU9TCCxF7Dksu5ZLLjjWdd6oUStgdQ8NS",
  "key40": "pNPHr4KWkGa4i5d2JBftBYA6FhCmZ7jEvxd8Mug9J8EeLwniHrJ6EKREPVppydNHTD5VFPpkxeMQFQAXcKv3CH8",
  "key41": "5JDiu8gRjVk8guLUvMtYsFtTJY9qD8wK6BsJAboKodZanxASD1s4w2mMRGfaeSVSbn4Rsmh78CxL3iw5ukcUYZM6",
  "key42": "3C1HXmv226nUjSbjpmWZ48HM4yS9p1ameAbznerDR5mSipxH12tifmUn9ww14QsJD3choZYk8tMRCnsxWYeEhunW"
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
