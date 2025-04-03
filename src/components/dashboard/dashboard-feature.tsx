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
    "5ASnzzMsuAmpRsbGMASKoWr2kEzFcC8N97Ng6qCrhaC4qRhNumLq2YXiNT5iMW7HRrbjxoGNGCjtHcasiZn8s7oP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMXzTM5sSa1Z6ZbRpEv5fkXxkrPGhdchYzZLM1RoHm7ny4DAZEvvBDb9S37wq77UMrmyX5WnrNXfXVYZaN2gcn7",
  "key1": "38We43Sj8pmQSeqc86F7jxpFXeApvsFvor52KoQ4vs1UnHpk9B6mgwLgHSUDAU5RYVRmjkqTLq5VPpm2fchxPqAN",
  "key2": "65uzyq3zYy4TAwB6XEZUsCZL6ebmjhCmJqofGPi8q77VfvGUrTGreXfewh9DbkauBfKoPN3iivwGZSWX5m1g1khC",
  "key3": "5nxbjWa6KnYWnVkRnFaizUMDfJpEvpjRSH2ue4kykE5jgzW7zTWJySu5uuAisSAPAiwNMm5DonbtMvXXyR7qvxD7",
  "key4": "5zNfYt4DhHPjPfHo7nFrrnEZazm4zpNJgTBeRQm3qofFFzhDidY6xN9kuRbfR45pBmJaAQM65wovQiDNjE331bEG",
  "key5": "MvHdCy1XdBaiT7hRibV9pTmPS4594niNJ236CjESf5LUEQbQ173TjDr95NfRwvvWZShsmGMBQAUFThx5krpFevo",
  "key6": "4huoxh1qN99kQzQ2qHXAgBmvYEUFw9jMAdVyG3RcGRdxCxyThyY7gosh5bky3n1dRhGVCxNW32S6ehKtoFvdcGNZ",
  "key7": "35GX9uQAaVhttr2aJ9QgnKPmsHXDBBzq8D3eQD6XC6Np92ssu6x18tSmFevuJiKLYVwNkrq9fjZ7fRaPCF1k1KPZ",
  "key8": "2sDFrsQ8spKhDgsBJo7qouW5PPNrTfYD4ssEKyTzDwrLdj4ubbbspGW4qHqFojrrgFm9CEqXHzpyBZEBLSfvX8Xh",
  "key9": "5ygcATjBMEkn177aJVCe5kRmyCfvdNcCNL5D16MNZMG4ja8dy2U5Q8S4x9RdidVXyT3hbqvL3HH9E33Fvqmr6xBR",
  "key10": "oUTXPhKMAPXK5joEVMKcU2xdkEdQdMHytfaMEhkvq6eKriBSUqYCxymEdGMPfXr4D5fuPhxr6YXjQUpBHrzUuJA",
  "key11": "4Z9dGuov7iSri18RHoG5yy7DXmJs1cGKVtBqDa56srXp2saELx5LShL82T9p9qvwo1cA1rcMQCPaLxFvPpEW3fW9",
  "key12": "2S47f7PHwroGCxfHxMgp5Vf2Hwh4dxHhCcZ8eyutwBeU9D6gVTwLTkSpZ3RLxDbXUrBuzbKJ3GkpX41R6EaFY9XX",
  "key13": "3YLTt3NUqTARJBbFKzGyL4K63GBkBfDsdo6GzEW1uwct2nVi44kw4qEA7MV684s5WbUDsDR6MNrW5Tx21uWqgCWC",
  "key14": "26vYMvaY3yRKhwrDt4pi756AZdCLoQM9vsGNH9WHdsE1rYR2ZPxzAVqEsJ4tNV4EoSVuUG5Fuq3V9bx632HJwKdt",
  "key15": "61E24XUqBcpvc4Bodo94jwCsNbuDcWSRJMLZp1ER4nVc2APWHfKqNZpDaZiD6Xga939McnUfWEYjaz3rc5Rm1ebp",
  "key16": "5j3rgEywKwkURQtHXhD1ECBHsRX8TexvZzjuV8yDWBW7QhQ6gfJcb1fBiMauUzUCKyz1zw8EMTyNQaSX1GkXUj5c",
  "key17": "3Xd8JTJi4iijtiJvqGGN6h69m8NDVkZWfPAx6TfaqTcLvr2jQmEscSZWawnjR6k2nou3izrHeP3L8a19Vu9nr7Ax",
  "key18": "4rYcYWwaRoMa3UVtYiAYqQWMsUuDzDW3NUKLzq19PU2Nsbv4iTiwbBCioqrrQoS1RWR37YJNiwdNyoXnTgh7wmZ8",
  "key19": "3VMAtH5MJqHae2eCfmocmMiPdCUzrRYDPXAAAGWStZJb36KAaXuzLXcxEJ1EhHxUYwrsvhfDRxFbtLNgYhPcGr8t",
  "key20": "3DozsXFF1g8NXiqUx2t3Et4QSxtYKuG5dnhDbNBo2XhMYHF3pipRMfodHbCDeFDeByucQwzQawATVueKQicTUmtk",
  "key21": "JcRfCXBta3UDnv8gKZEJNmNCaUKPc2PnrKkjns6K6FLDymKmYvBU2zhkajAzLSHijsftuNMeSxDiWghkXWpo1AV",
  "key22": "5W8obTywhpFnr6rRDUEKfERRZ778jDxVECAScdrmimQBZ1Koz5mtL2ooeXbomq6J7t8e8TzJpR8TLw8DLVHsZmPs",
  "key23": "kGY5h9ssrxS3PL9U4p5yxDGYNwYQR7GAVoerKq5upYCssRYkkqiCjZK9bh4rToEB4akijkrLxZTLSsFmrVhmSyB",
  "key24": "3RdGNbjGsYJSnUJgdkadfzmd4GEZSmLkYDvwi3PDQxTNsotGVjwjwxPfzAxe8x3zYdBc1aco2PM4xhGA6fKaqiE9",
  "key25": "4abQwV94Fbg9YS5QL7kQ6tiR5XcVr6CxvfvDu1aG3sefoqkN9v3PHVEWEmRdzoMRccAeK9QgfQ19ZcJAAXiA1KuR",
  "key26": "53rKDn2avQ7yoeRRpUdZ9ZNCsJMisQjF1Fa6zEZ2KJLKsGFDqPRaBiGx43QeXuNFztkJQPHrmqJMyPvTChJ2K7NU",
  "key27": "4Pi38m9g4zaCtC2NsonJ5nekaabNwZmDg9Kz5FxBTapPJ4aE9eWfF4Lb6GZncHJubftNrFGTdQfydTmywX3Dke9m",
  "key28": "3WoQCcRFydhoBpqxevQzcTsPQd2oHYJk33Npy3Qb4XX6mNaC7rRHvw5PberdF6enEwLmeweJTTnKaansZbEDvJSz",
  "key29": "55DBBJvvtjbRdnMPc7QWYTFMBZKBNtnaKHdnk9FBe6u9A3aqfX9AMQd9byNYLKHWQPqfMnbh2ayowrJDwvDHBiXx",
  "key30": "2o6k8XeZ9gH75Wx4nKgSwG2Kwc6vmkTsMX291kXvm6PDukLQzAh9pAenbeG62CPVchtyh5tDefBFiqYhQfiAenCS",
  "key31": "3Q3ryJ1wd19ZmydEEuDVyxqjExci5VmHeY64bCuBCsW9mHSkdXpg2CVJg2PbqTMvePrYu8L2rYcSGDSoHRmWDbdj",
  "key32": "36H1RxVSiKmznchmQGcJwrhNYizerkEEnccuCBKfMD7aUHvkJQUzhk7GTuRC5Pv4mkcKtTai8Uw2kLi8L351uk3G",
  "key33": "otdywY4hom7FN1qMXbWoWPas2MLzUjCPHTkVcdGpVasNNJLG5mmyThpKVPojqhGyT7HEykZuHG3TMxs6zp2ynND",
  "key34": "46cgsx3V1Ca5vpG3jWV3mmDjQchynZhWUEEEHxrTuMg9wdJygKJsY7g3WDX3tyBp7BKJiqZzwZmgazmHzcGM89B6",
  "key35": "3HqHHS76fxsZvePen88tTXmMSc2pNepdXV1hUC2GBpUKUiFx78sDdzPJXPeLux4jq9Khem6VL1NThicyybpo58E5",
  "key36": "4CbgkgJEfYsJCcCF1YNy34FLnsr5hCi3DWiaoteGQf9NBaQRgXCXFeoyfy51DFx82jhdhVqTKX8JXAdMDt2qNcKP",
  "key37": "2wRTNA1BJCGPJ2rGcQUcReMzuPYVGeRVRsqRVkojNFnKfe6PVZmx6JNJNqKpFd9v5akNnid3mB5zaYWtqjT7TDEf",
  "key38": "53YN85ucnmCzyGvpvycJEndKaEor8792be8N6dXXd7KSu7fhQJpZmxuGAidd9P91q4RDQ5zLMdQqBhpVicLu4TLN",
  "key39": "3UoQ53jGuFQc6XUCrtYtVuXgTU9q8tjvRRJr35GLQRknrLVBX56jr2VESxCzSAqeACUL3RqJTj6LJivuEDXLcExL",
  "key40": "2AFXz4TtDE94bjMb59veLu5uANBGEjYqN7AJ9DLDEpddHHg1xgvfV8kaxK45EJa2SU6xs36YK1Baqw8kgvFk37rV",
  "key41": "4jNWCnkm2DRGLHRGeXivUzW9SPB3v2r93du2tkMRHsvQdVTnekrtCutQxHSryTy64vG8RB2pmCs8auWnKFPtg1cv",
  "key42": "5cn3QGBLtbYwiTzqe9jLzBKnmKk4uUKFqdJ1B2Z7FMdgN1j3feUrDZJaFqFjM4s5k62mHmKUeWuhNA1mk3hLLksd",
  "key43": "B9oXEyKRWAFB2ZTejG4HHN2hAFbNdzgaacNtBuCYp5BanSdBBFq7fpWVUAqKBaSLigSdYsAqQUyWNoDKXkFWoeH",
  "key44": "3wSFwUrv8tVBA6FjxXAnns44xLBUyqFwUPcspjGmHyrJpxcZG65NtobVQmUu4fSYiLeCEwM7nXPpTJ3N9GrSEEg8",
  "key45": "3FSrYvovUoEQfUQ7TTtfNg5rtsQdcr48YpezhuaVi1fVxW6hyDSmG8HUjoaX84DUsKcABCp4dH2n4rxyicUuLXuP",
  "key46": "2h6dXyPUtRuMopC4EcTgzrFTwPFMbw5yy4gTVeVQZorQRW7FhkjLEqmdCjctDox87wQ4a7W7KKaRaF2MMx2ZdGQn"
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
