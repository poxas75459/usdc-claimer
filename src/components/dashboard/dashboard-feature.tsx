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
    "5amUZw5SqYUSi27uKCcEgTJqPYG59RAgMXSG7pBL1nsLGbaStTwzqBVoVTcb4SxVDTkUxwBdPquVPuMh1Ra25EtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbLesgPqQD2oep9kVEKxxyoz3dJjREhhC3MDGVHFH1MjD7BcmNVVxKuofKZ9J5XvpEXPmVG4ih9gbbWfVLy2juc",
  "key1": "4NvTdCYGyCnYQqxrxQBBcaxU6QKNVbKTQxFZ856hEW8wPB94S2fFPqzWsu3mwkR63b45guKRbnhSp45rerCFYVLq",
  "key2": "64dNFfizQaUJbXCsr5GA4SmmxzWHPHHrHiTKNtSxEiexhfcYNj3Ys9UN8mJQ91Cf6iJxbXGwkeCLNZRotYrcFyvF",
  "key3": "5t1VWWaAcw4iZQeGbtXXVAnE4nSaxLuFpoV6X1cofKkWoQdkL9HroCjof5U8J2sEciiNBhUq6FftKgVmbdweuQCp",
  "key4": "48Do7s1DYKLtzkKmSbc93Pd1WWUKupjGGZELsKsezreWURx8cSzWKLW2SPL4VR2AJrD6woHSno5ugTa4C9dfFbZG",
  "key5": "61LHR8ncbUAQrnLS4hZAnDCjUDfQmYRbFD5d2wJmEi9Wz4BK1yBFf65HbSfhs6RkiUrVuB9BBGf76HVMd3VJVrmm",
  "key6": "39GxeToy5d6Leh3H49KhxVsE5VU6qWdTKHSUYpr6SfsPoV6cyfJPpGiAwinrFr8J2MhuUBm8TEgUeoN74nctnqe1",
  "key7": "5zTMwGRLqJBzhBp9krnTVims8VavdJpN8NjuxFfcRRoX84VvPUPvWLoAyBGuHDznwXi1sm3mqPp56oirp4UToddc",
  "key8": "4arxHV3G48m6eaJG7bRJJaweDZa4yUbK12yDFYWwJWhYX6ZZT6K9UJqmSkRR76kpeVK9Szv8etWkXK1j4ENuS4V1",
  "key9": "3gRCLvZPzNLKxmU6W5DrF52ehKNGunkXFwkULReHoMTCFwTM4Di1g8ag2GUiMf5xDqmTkqyusBdWLKhyMRRAYM95",
  "key10": "33drUuyttHhafePfzEsbRZsbQTbFaXWGuvR2EWAwmDt237bxD8wwQkU3WCgmWSvjPcgur4Luw9cExSDdhoqcPDjj",
  "key11": "62JFQ8oba9o6YfjmBAPNmLh9YSCWaoCThkemef79pom9reak6YMMzGMwvD5vYoevHDZuRmaXX8N9FGi4bUmAKukS",
  "key12": "3jrqiZfhKpyLEfZvc88sJ33hoUKHxFYcyJ3pZBNtDUZBR3mzz3kkqrWeExgsgQgKbbHCrKgdaakE4CY3r9YPj8x5",
  "key13": "5cpMoQ2cj3qb4v37nd5MbBBNk3w3STLJ7mpHrFS5frsGXky3BTDNVtibpeNAoBDG8TkvZek5HLLf9J8smC8XjtHi",
  "key14": "2N87MUibngTf7Y1YsNqc1mt1sAfKyzX6nEH8qyA4SqVouTf9ALC1pwDM7evH63j8bGW5DbNJx1vixKcdGTBePLUX",
  "key15": "4JzWbnF1BoULhZp2nJYY512T1vVCmZkyWeKRAnxRZ66XTYny96T8LpsUJASqxs4PBUqYPP4hMPwdC9cc9M5yo2QC",
  "key16": "5he1rCW4fn7UHpTcos3Z3N1bLLim1fCWQEtzhge2UYxSe8286WQS5kjeEin7pETyU7hNrmBs19Q151RD72rZEAFe",
  "key17": "4BJ4RXPeAK3Tm4ZoQqUAjVKsQWcXa1HwSX8FrCsHcGxrhj6i917aCMjFrB8ijjfMGuF7g9qtc2rQZMfctpQbU6By",
  "key18": "2xP6aJuTVS4hBHs5CioYXGDo6SCjqz2W39gHavxvpwVgf1wY4d5wrbGmN4HPMt8TbkbQPH3SdxsjNPGV7DK5B9Hh",
  "key19": "TyUXoomnmfrN76TWQGbZk2n4wu7QAxNZWy2V9gbcFGr54eem4Z13uhhjAb2oWAXCjyYJUpvZc59JMfwcrQaMend",
  "key20": "37awzuXJfiJuvTmHH7zhRVT5GjEwaTAjKA9DsEYNUyiUqyDKVDzwJvD2iTRCrfehYzXk7SZWzs5iXn6PgodYA9i6",
  "key21": "3mcm3dNnPdKs4MGZA3XYrhs2v4f92XGxsZypStZrivq3cMd7iG1kaNE8fHsBakBmCX78tti9Cks2dyyyw1KfvTvN",
  "key22": "548mMVz9FgYoLV2JDXMGK7XqqHFoXtu34BNEKYQzPxGW37tfp1wdYj4r9HsiSQMtHQZErkNVMdgj6YQa5Q9RhZXt",
  "key23": "5LeJmzMiYLNn9nZaXaehGTmXoQhwsaq3884BaREUsecFsMNkwMVVXWpzoW3S8CZYYKyAgPcsMWbzXJaPEHwdDMdE",
  "key24": "25Bp3H3nJrBDZytKkkvZsQA8LbUmjaVNuqLgYFGZ7TW5CoJAG9Q1g5Wi88wfB8AoKfULN7igXJuWhNMfpm7zK1Gc",
  "key25": "26wrFWULPbMNPTyejsfQp118euArLMV9mHQ8ZTp9s125z9CDGoVoiAisdyBRadhHm6g63wkfbLa7NSbP8z54xFMg",
  "key26": "TgPfTHqSQbeZfoAuujDN9T58LqcmEgfWrLgsQt8LkdxjvrkrkDevTofihisATi7nii3fM9nfoUxooqekJLAvdNB",
  "key27": "5Nr12vkLrN7DnNCe26pkBNZvAnAgQXdqZSofbZbZg1ghRuYUceb4MxtP1rY9TudSFuSdppyZaYNfevfqy4bUrAoE",
  "key28": "FUEEsYLLCZBhf6SyxCNbsE5TMJCaczLRb7HgNoj9fzHDrACwxWnKqpVCUKPHkgBXj4ytFtWjhMDXJmbsDKhP6sh",
  "key29": "3qKDH1PbHj3KxsxSsr3AMeWRY2nVUFohwTYQfc7aGodTXxoevGcrcosR4VMCno1nrW8dovzYPxYjVBN64GU1anYT",
  "key30": "2J5vL2U4jY2a7faypwX3AJZoHM5hgWu19i9Na7zteidWp89Fb55MnJdsYtnhRbEUTTijVWKupFgwp2ArvMvEE6pb",
  "key31": "2RT7sYx276yz7aUmGxjtNNxDHnjtCXGWzcUcjmLbfqhRExVuMCXYi9eQzVFD293JaP1CdK2VjUVNWoCYV66REU6Q",
  "key32": "327znYNtD7TFkDkWV89ReKRMtp3tFozpnfkhMrNdUwkrZVZaK9fjkFb5MbMQ29kaS6CqQofJK9UZKdUgvmT4tsCZ",
  "key33": "2eVvxNrkoeBA1fNrSQrGU4RmyUxziqQ1upudgJt4uDayTZGGNhBJ9vYcBjAu725WQ2yewrUY56V177NuQMGqFiJQ",
  "key34": "oLpboiQ3PXeyQhETUH4gtvqtGoNLZXhpS8k56dJraQqqkkHe8G49jAHkiDcRm522wpVdbRCxUbVhKYmF84k3GLU",
  "key35": "2q8dZW9ua7ksG9dt5AhygA8WjBaw8pU7kgHrQj3gtRRi1jHNc1VC3iv35yhRy6NcoJ9U8wyDcxMBprGhB1zubC77",
  "key36": "4ZTCteoADjV3cwt96Qayh1Xkz5aTSCH5RE2HHn4UCUdqjTtW38xnDFMKMyhMr7fQTDiVQiFcQnBbFNj9FWNk31dS",
  "key37": "3qaibENCrN8Pk7BntpEbZH5kjPZPGx2LT8ns5RhnccQ6bfLXfCQr4jkR6wQ1hCusoXPPt2stJ1w9f15hG4S9cv94",
  "key38": "RC9rYv1eNPgju6DjDJoYFkSkDU5Xi9pV7AevWABhQz6RZesKsZE1SQfK8t7VdQfR4Y4z6WnoNbRnH73v1b5oWmA",
  "key39": "5JvoYB1yYSMUJoqfmhBNFEXS4wLGtg44Bgp5HnDghNhooYKJ4mdbmjJhZWskj93p79q7S4Xfha9QhCszLVoG7v8M",
  "key40": "3p3VXVH87dwdRpbnoaHfsM1hmkwrkttc7U6Rsa7HWLw2jD9y8f8E8KgnsbunXzPA2iYBd5H7NiDBCdLu1qvHyQiU",
  "key41": "2VNMwBBpGNnkaU86o2ZK2vjQWd3TZNdGYLLqe8DH9yS5vm9MFjRQ1bhtr5QEHc4vq6JC6q8LQZHGmNDfCu5e5hnc",
  "key42": "4SK7DM9PfC15cazz1TGBfhmVHYM3xfTqEwNZuXaKcubG7swiUPcFUz4vKWFyFphbMUUmHGNfuNom31Uwzi3oSxha",
  "key43": "3KnbYAwjyBMSiBmn73gJ1ctyjhwzYNGQP7GnA4kFEkiYfvRiyk77VpwPTGPV6EPjAQuCSiUMNPsMixF2xE62U3zp",
  "key44": "3R4t8Z74cGTZdi95qGkPnshDGufALyW15Puq3nmQ8ggkjNMn7iED3K6MTy1B7q1WX7hdwmEL1PhXkcsf5y4D7vB2",
  "key45": "22NYMP7AGfmTjw4KCqT7BuQG2DEM4ehtSzroDSHUKFryg2xrmLTGk3G4zftF6AASUBNhk2kYSckuCXDaH9MVBHHT"
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
