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
    "3P3A8pQa6LAoKiEzsdGhaobfUvYPb3stxekqqBqUXDB33gVMy2UKypS2Y334W8DNrcovGAKi7rE9KvP2vbDsG5WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCpipffT9CLkUaR6Mo84RVeSJm8FkAoKt53eRVzHa6DYeALYMXJA6PHSHbKFPqxEeQStm3kevQBcMbqHPX5Qm4y",
  "key1": "2L8jqeGTADz92SeXggWSHK7TRmyvfwgdXo4x2XjnC7pMQuutp22BuNyZeDFcCpXpgTRgyWiEPiGWEkp9uvSQRF6d",
  "key2": "124NzoHeyZJmkcvs7JDVmPmPKqatW61vLXCSMKCT2t6eqB1ro3bSzziNfiGvL1KjFcAi6U5f9hU7DKFSvsYAkuPb",
  "key3": "PCT5hVYDm3bL5rCuFyuKC4kgdXCoHKRj3F4KErgeVHHF3dCJKJDcbsvhQcsSnL7qxQXbQaumYqrsVokyJcphniU",
  "key4": "NK4FfD52AJxUHsXjdeHFLns5Lhjun8ZsdQpkCBFHASND6YQoYDwe9KaJVX8xGgfwQV5ejb53x28sQCE8mfd2kpV",
  "key5": "oRyGUMNYsPW2TcDvCpCm7PdMeThrVBeftJZciN8Z9QwERPY4G7aRdh3jyW2g7eEtMG6zM1YLpALbRUqzSwCx2bu",
  "key6": "2WAava6RrPaxPqiqNtjK66egxpjeXsVxknLCeP9zbC4UfrKEt9mxt7KEkGJ78q3VGgixwqjjZxRQWwMi25fm5Vqt",
  "key7": "yFPFcEsVd64jzqFEH2Z96YNL4bSw818aMe81NRW5MJEboHMeyvHN65Pc69vxP8swLePMjsnYBC9gVf4CZuLgzsB",
  "key8": "2PuExoYZKJ4ngA6j2TfXXehuxjaUAoBkYnU6st3hb2WjBa72C89NHbJ9pH3BoFhafBHN6TVHcYCpSurZTrHFkdvB",
  "key9": "9FboDjsjLkb4vfFKoQchNMwby6LHuUb26PtGzfLdaGvGsTB6JomUfpUPBd77qZEKS8jdNjFXAjVTbrjhis3WLgL",
  "key10": "67efVucA3woHihUxdjjbsxoQAFBaUh5Kt97tZu29A4tkUWZ4zMotRaLAGcTAtpTHkG6qkHApw8W7SBxA24gPwzX4",
  "key11": "2Z7LvqbDyrzMcX4s949NSQ3vp5PTPQBJueGWpzF8zeKTP7N7Ex8J9Ndng86d1LoZ1ZZdkuQoVxVgaLk9d7RUYkZ9",
  "key12": "3ishXcfSLovVi2usw4ELkczPDb3nsb4oeS8m1xZjhFhdzGGV8jUY6UT24B7Skc7aVzvLJwtNTJKhkyCd6VnrYNuh",
  "key13": "5tkoDdmBDWZVpE6Z6XnTct9aiVSaZeW2bjA9WDyRcqc9ioZ1AZys8J34vE3iJtcVJAxfkUriWXcmzpjgaeAnPt56",
  "key14": "33dNKpfyxkcgevv6BPouAx7D8rYV9CzKbMJAA1KaNkXHps8K8UxvP9YQKmsr2T5Sp2JGuSVfZbTkxV243vJAStFp",
  "key15": "326Hie5F6FyEDVkmBWabiBAUpLUWWu7DcuptZDjPK9TgrSAF6dnct1xWHJZxjFDkBXVdR5cEGNaC99tj7P84TD7u",
  "key16": "3MNEwSFvDZSa85P57QAoPGbV826NGvzbe5iVXwoTQ2Wjh4EWu4QC7Yx3Yz4T5fHbRhemEddQFxFL5uQBHbWrjWM5",
  "key17": "2XnshJP2jiPNQAxohSHntqHgUdg1b61HJUF1gfwAgJxxPPZC8gJ4Md8e7HR5A4DDGqGa1BKrMKRkarX1pyPkN4JM",
  "key18": "5aVQNmWd2eNQYktTLFWNnGjWHk9qWDUCizanLE4ZZswxfbSUjNUrrreGgYiQEki5BQYh61ihS6ZJKhfb59okh6er",
  "key19": "KbnP8mf2L6apVq2ZGU3uirQYeBwacGmzLTqaGR3jmrx11HtraswKm5mweoRa7dGgPhUdhEcMSXk1JCm352BfUsX",
  "key20": "3rseT4A4tDTVCMk6BxjLKBQ5M4eC4cPDz3bjui2qNy8KDuqvjvqZKSY1EBygynHxi5iaV934johPU1BitKuiTGUN",
  "key21": "3rvSeyAkgFRmqxcvAzSTueym8fBiMgSRphMnBkgjRKjkpo5mxmV2v5wUdou7yoXcYnqWf8kJozuzDKRUxstyRB3j",
  "key22": "3fbTyNYnQ8L7NgDjR8z46U9KzHLtHpSCEfMbnjasWDq6p63q79EwV5kRM45caXYHcTPjZRQX7wjgnYFYPSf9XhVB",
  "key23": "4fHVxbNiKZciQ42hGTrt3nz9RhXEd7rqXUufLBxMUJX7ojPisXfVHSZb5Cv9e7DaKZ4SddrftQaGKw2yvJJjHGen",
  "key24": "4z6RqWDDLgYVYo9PUpGLDrtrq1kUKZU89ztYuLDMmDBgxBGt9FkGL7EHQXkxEMHZz73SDQsWUniNqqQfT5p1e4RF",
  "key25": "3ST4hkVCKoiq7eSwAsgNyWf2wnqGPaU79QX6XFHNn4dNWtL3n5DjC2x9igXy3wEXdgpYSPHyy7x7FkNQYATWbHUW",
  "key26": "2ckfYsK3SskHzFx6FAWDMGxWue2kKjBJzKZs8kaRufH6sWuUdcsXvRrjA5xR9ezxuzN4tQ8687uHT5TokBnYchz9",
  "key27": "4NEhLPQSmD3s6713nGooeq3q2y8UYnqbGLzecnGsKBCqfAxmmWmwaVmuzVwdL27munpofiGVewu3LTtg9RcN4qAx",
  "key28": "Q9hakj4Nrf5JdQdbJs6uCowo3wDUcP3gWW7hrfjR4t3THKFx2AGWGsuW5E589QaqpwdHEmgFYMrc2puVHz6nH9R",
  "key29": "5PcFPeCyEM5i7snvW3oTk5VsLfNP8LjrJoD3Lw69AZf6VBLDZxCXw4fB6KtiVbV2GFrkT9w6HgiQRajGt8851q8H",
  "key30": "4voEb8q2N29tfbx9RgwSMv4xM8ZFxKdP5pPrhZbjHAET3dMgLztWrMuEpt1hndRDZchdGDSWJrTK2DxTrzKAPrMa",
  "key31": "3W3HJJ7UYUJqCrYiHQdvVjNQgFmKsy36QZFvogcJMSL8Fye4t52wx8c3vgJt1MNN5tWeTy13oYtCVNpvSqm58fSe",
  "key32": "3n3kWqSPwzsUB65tai5AvFGF9aRAJobMiPwCMWBHinuNBJygBSS5Z2i5yUvzLrhci5QVsXZewTSaG4Sz9RRa664K",
  "key33": "61qbFM2Mb5Ruo8EAn8xT4XwCetXYENhzWxQBtiLgVVd7iKEFZwSXtULBb6xoNzczjjo7hYHFj2GHqikDfK6JS3X7"
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
