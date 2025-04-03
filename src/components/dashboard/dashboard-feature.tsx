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
    "2x2dDctmQvkQx6AUuQNGvvVDZrLq2Q3n7t8JuPW8iNBuHNbZMw4fYypF5XXFFGS25tX8HdfoMvLiEADyc7GgDfU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EU2UhiFsm1LbZu3gBjqvuTZkNWiy88K298kTADs767VLYL8wErigytgHC3EQdPQ1ViMtqYwgVfi5chmDBTnFYV",
  "key1": "2KGRT7opnSZNLWoX5GfU3FuCYvBgcSXs1tMvPkoA8N1fyaxifEVAm6e5KUyxPzJpHStVtLt2vp1dGbgctkcWJ4Vu",
  "key2": "9u3Lwz8uiKiyFZYdJCmTaz7rabtrtUBHuWJPKB5mwQDhMYoBQC8oZftBycDVbGvk1Y1ZHjsgQa8hC8HgAqRH9B9",
  "key3": "q8xjXUPnNLSw9LosLuyVfpATSqoJ47U3xUYzkW8RHVAxojQvcqYCGrFrd5i9akohLXhmQg6x4bbG2Joc22wecBR",
  "key4": "zFiu8Bsy4xUUdx5fBVJak65w6MsnTS9UhMCDTRxew3h73bkUSKmUGMTDY9TcKPDifP3P8tKdPsHTwQRNNLVA9nC",
  "key5": "h2PSw7yu87sYRGnynEmGykFvCvN2Ziss9GdGr7ueMniD9mSrMaP48aCBmkD8MFRVZZiZU3q6aZ1iDVPuPua9uTv",
  "key6": "3hoyAfaKTqswbfDZNQNZprFkNbCTEXuvGqZhPBrdQi3zuGhes5fPsKu9iTGkFDsxQJhQtT3WEJqfsT4THPqZiDEk",
  "key7": "DTYU3gcbYaHyEa8cxFPxBpQiP4WCWA3J8SMwwJfFNrEHgVBQjUiXBQLNec6aDaScuopjHupRpuRKeL1HXT51BRA",
  "key8": "4nPUXAaP1jZtpeUm2QSiazZNwfipeVePu6S97B8Ns49tG6iDMp4Uogzawe6gFR8YZnXtvXevZT4kk2UgkefyYzfG",
  "key9": "5vkwVWeZoBzQ8LruEtVu3b9FPkVR49T4n3FFxUuTZY4NKuHGPAt3uak5RKP9htDTB5WktXMR5cSE4PyyaNUkmSij",
  "key10": "gXrttnDkt8tdRF7UgZKv1VBXVcehrFtrMs4JJTNy6YgneZfj1ARZG3hHFsxCytCoEt8J4Bny9w76KSW7AbGZZQ8",
  "key11": "3CNfRMvn7sX3UNDpQ8MxhGutoA5Ufwu5ALAXgUUHNMUwQeR5U2EwgbnAEJmVuqkJBhSbfb8YQdunGx4HLvCh5bbU",
  "key12": "61Rkb27UT1c9tMMks6ncxDRYyjT7Bneyv4QWjhrXayqG4NtnEPZevbESyV67EYYu6PEsfW1e5tdeCXKS1BrywchJ",
  "key13": "3B1r3g3APKVhQFPD2trLE5qm1JURCR1udAe76FjMV4g4YGbkrVvBHucFm269PPf5aMNEZ3ZJajxaSoCXXeRyN6XG",
  "key14": "5L3vTnmaVfeKzauaL3LVbhBcegg5LSdL38Xwqk9xGEToQ3cppmqjGTd9LhVa253Dg5BjicMPRTid2DepJCygpMCr",
  "key15": "3eKZFZGsBoUgvPBZW9hPeq54fpiKYopnWuC6vir5d9FhMM9Y2tgMYWfWDRp6tGS5ti2KMp5DsryRHJtb7zfoevCp",
  "key16": "2kfmZiCwiuahabofidjdHVM6bqBewEJTVyPxWHYyMkRyqXatDfPaehQ1Uss43e6dYpkRrLCGdNGDGVwLnPKcG7fm",
  "key17": "3SsUCkGahuDTfwXkEDPiwBVDi29RUAR1Qu9auW2L3qowJgDYXMPsV7c1AHehdNQ7sjDNw8QuEg6ryWoGaR1KYGz5",
  "key18": "3hSRYP4b2NGpWRLdiECyZdtzDijPKP6kJzwh88eeBRaYhPi7QQYQAabesYTfvVWtP3w7CRe8PkeVZ7DLfCRf7zmU",
  "key19": "3uGzhcS1Y8oy1u3kNdQQHJfqcPyQT6NqpVEUgyVVF5dd9bsd5XWY4YDgFw9yASvpuipfukUQmDLqSckebzATxRhY",
  "key20": "2r3LtyEnShWTRKpPEGTZ2m6QkLTsjMkRFmbNF8z37UHSNzUCdzMbS4RksyjppkWYt6MPeRfzamQomb6x8pPbVgnE",
  "key21": "3gbitrj43Y7B9VwJN1rbtMJTRNLcTEz1bU8yXUrMhzEmHD4J8cp5mELyCu8z6wCuBJP36exj8MktKz3uyot22qPe",
  "key22": "4pZdCNVxmHzfzd4BzBE5D4rtXQCpLKQgfswDpNFU9bHN332dZpbwuoKThZ57JMFojYwN9GHRDNT4xqt8XUks2bEe",
  "key23": "25nUHepJrGQv1SFawcmeJ1utVukZcwz62FyCJGS736ykasroSSzReCZUsTxxVDKKV2rQJpCixpPAFEg7w9NAQJSZ",
  "key24": "R3BPzVd8oKWFeGhbzYknpxmjcUthKbBQRsQmsxmfdMELHxNspWAsPV168TH3vaTtoiFLMxwxh3dfWprMbKqYCvb",
  "key25": "a34kgiGeF7MVQsTUqnsUnMewjmTTiLd4TcDoE3M28aTFe3t4M9ojr7xBE7T22uSvH1Uqnbq5KGQPtkuEVpEi4Kk",
  "key26": "4QXeZJRL3KyzK7BqdXgx8xUH7QcgnrpAXBHbT8fJZQYKfitS9uL5gJC6xjMrS2Ctc5N1DUxgBzwgvx7girup9G3g",
  "key27": "3sAdeHdivbTFBSmvBGcaFzXgqEsmZjTi4hxB2RDPuovXSVPZr28GvEcNJzYhnKuawGq7VzGbxqdQsWeCXehde82g",
  "key28": "2crRP835eGcEpEkBftMAm41TECP6h3VVKPyboAKKXfLwPHUGNdKVboerZnWNx2QFdgtMjcbqZuCVrukaiTBEedo",
  "key29": "5rfJXHecc9tK38AJTkH3hKt8qhURRKkKGpNw4zgrws7Dpj9SYvoNpLaG7oYCbuSGiwGehC99fmXViDFwTXSHgBJL",
  "key30": "3KFdCiYHRugZ2NcbuwGHGBBbxrj86Les6gTVfZQTtRQjaiNJbs4LrJ164ohTAsjyhJBrJ6XG3mJhrPG5cdBVsFMb",
  "key31": "44HMnHWYAR162Vvt8oJkTix3w9WTLt3kC7oS4G32nKKBzkDuARjisDQjFxAr2MHxnQ74pocS68o68aMhqpfqEHY5",
  "key32": "2U5XCgbawwT9y5WLBVjjwUJLvWUzD2sd9cd15Bp25NnCMcdjsqrxCJHk5RMn4ZNdwmVqatWESVVc5ycRJA1bWDti",
  "key33": "3HcSshKA8bygi7AWffTSsW2pfw9hMhKbb7oBU1ny1PcTpux1cYbZAaknJuQnVaFrsatKtMz4Au1kPBKLmf7ABxZz",
  "key34": "2Jf81ccJvHAehbUXXMA2fmaA6mf8DvE81CY6TCVHKhvqEvsn73Smvue3J35kkGrRFLJy7Z8xabyCTUQwgzLWEjvY"
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
