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
    "32WngBGQwiwydNDdwTPsg5svseQUvLjtagkfY4uG3eZ5uf4fK3TqkeF8SXhjHPc3xLfmasWnwLnkYELmD85eGhcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1smprUNNcY3y3kKdJBChC4y8UdbtzZtqneMEyn76mjBB5a18nMfE5k8RDtbdiHKnyMJ7MXqABvHG8xEtSEPpWM",
  "key1": "5b7Avuys1otnYVTdZ3pxm2fpSbvAK1PQoWU2gAntHUY4F87eeqSY7YahAGCf6nCPh8AHt1NWh7sPsZwHnUj42sJX",
  "key2": "3Sn3iiEUYzCJ8Fv5bYgdWyfUjeYePhBfZmQxJhT6mAvnHsTov6W1agmxeJLTT6PfB299TxzVEJEJWJ32aEWZCyYs",
  "key3": "nrU9vFCVbTgZJJfZRNYkVXFPKe9MvhEo1NYgMNQ66FHdeHpBPfFdYxcydSwD1XTZJehePkoDqPq1g5hm7idEbfH",
  "key4": "2ro6BiadGp6RVMM8oa1pRuYaV9diyLpyERZprLAyTeUujwi38DVcriRqLsJtDaRM7N8YfSnoSoVSA12kpWr5M7K2",
  "key5": "4ky9zKRV5BTqpmJV4x5FGmhQdDDaKtz9XdJ1qsXXZz3sYr3L1FvxAPSuxpWL7WzQbfXbKfAwfK6fNFHPdYKBuFy6",
  "key6": "5s9gr8ruNKYRTB5XFV19naxNvtM9MaTexjJVW4GSwrGeBbVsEn6mSUBTzUcBt9Nm3djYjK4cxkaS49Qzp3nR28qu",
  "key7": "5abdGFDRnXjuFTccdfzwo671ARfUbPeDvDN2HKEDewvZunbmZnfNUMbNJpfnMRsk77KXwUeB6g3sD9UQ2rZ8ssFQ",
  "key8": "59WwGP1KbY4CuVuemiw3VURjvcsKmuRCTjQoUnAjMxEF1ofdPLR1kaioYzopDRZ5jNBjDVPXbnmbPXbtiqA4mWLZ",
  "key9": "4ccKExWz1tudLtHUC5SzaCmQ5XBfR9XNwMgYvjfTv7ogK58kZL2EtoGDCZcfZvcZrToofGwGnMWTswYoZ2HgQp1a",
  "key10": "3ZgUtYDTGYC9CoLoFx1vbPVG26vHhWmzKNFpSTwnsN9bGThADe6DwhQkkCGJodEt5rbGyxDiBvPrg3mzfz5JAqnL",
  "key11": "2hrKD16VQyTi2wypyoRcSYveaHYAu8AtujN79ykhoS7zxvqgpqyDXEUjGwSGRUEUeeJ2dM9QTYrqFkWrTr38nuMx",
  "key12": "39EtMbzpwxSpYRhE4Nm9N5yPsPrRkvexrpNeBEBf9KwqwEZnZrd6Md8XxFVZPoNTpbbpyiUpf5NNf7S8ZhtA6RtF",
  "key13": "4jsaodW9oSS8LVX2nHbL2P3u5Vx4bX5rrT7BtHVoUNNUWrU2eLYeHv8MXpL5GYbPDuikenxhXEfpPZBzMwMZAtFq",
  "key14": "3UxBSnGAk6eFigHT3mBtqXNExaJ1Air6GieLBFweWFp9FppTuTwAv6Cji634rcPfygjx5oSR7MshZqKehDKhQCEV",
  "key15": "5fo8Tb2jGFmQTmZ87SkH3yQvm8gkyLd1rXqNbtoFdA6g1kQJr7jFiKdvb8x6hbczKBQaA6RgEwHeWorkvp3yWdBz",
  "key16": "333sqQeENGsKtLySQ8aYctLkuPs1UXZ9Q8JjrxUgP76djGF9Ueh6DtkSx8fiffM44d1cRCd5bVwjj3xijRg7qfKs",
  "key17": "4Zoh9xFVVSuhv85VURG8pyAu2g7Rsm45pDn9Yt7Lwbor5Jx3GNSC4Y67QdpAcxngeynSExEc76b3bhChuBC1C36G",
  "key18": "2Dvt5i5sbMfBN4RAgr26kaUocG1rQCC4mFmzhdXmEoivY43sD2r6FHmC4xfezPaqxLumjaNgGC9gHnGPAWo3sJFi",
  "key19": "TdvvkRR9Dn9HT9kcFuSRjZszwcgHyH4yz9CFs6KEHWCwetsED3sb9P3eyEAh18zCtr2MtttYcYRZGE349aJ7gL9",
  "key20": "4eVBuTg9JGX63cTPQkT9qupPurfdUmKaPjabMpnKucxGEoPxiZ5vg6pwKXpgaAkMHoG8z9yqe9xCyTNK4CY2JxRi",
  "key21": "4FuYabBXNLugki8MD4emV632RTGmPG67wtY91jfFXWSVy4DG4zRbnSVdX5A2iyzT3JAhgQzC7xL7sbkNfaakamG4",
  "key22": "2Ta1j8u1rRSEUvvHZvLhCZ3mHgwHgTeQ78FCH8BJCPxZWRcF7Tk6DKNRZuTdU4qpHGkR2HsYAVTLjBSUatkJbHaF",
  "key23": "31RjhUJNz4rQKPe2PUCpLF4yyBqA7ocVNyRincqfhWKnQeovAtYibCk8mCCr6cF3Uu5U8U12nHxv8kMekMYHdaka",
  "key24": "2957zT2ttRQzvuoLcmgMojRwSHQz3Fq2APo2gNccjaUxzSqpK6xQgoKfqGaKTXvqjQRJ7Ca9bPLmquFBM3nvMbot",
  "key25": "5bFdY6GmGP5GvTwYc6Zq8QuaCeifwgsiHNhQm8hV3EFNbbreBZew7DE7SFSd2U5oUvWvsLXLSyq2h224mBk8hGX3",
  "key26": "3zDWyKW5Z7qeQ6sfaTCgsbc4Yt2QEFjz6w8KQfc2H7W19e4vX3k2pH9bRr1WefPA7GLpXe4yYnHdaBkqQVLvDc98",
  "key27": "5vV1cetneWCaBp8xBxeaKVemwrxaQgybswU3pNbVmB6krfMtAzFa1UnLjA3ASoVSy4okYmAdjpU4KsHaWjXVMfzA",
  "key28": "gZ6dpmfcYD5XsrLQGmYWaX1HNZWNuyoSTjmXeQZ2pj9yFeASNhUdfMk35AQuNJE2cNHuD9bCkdmrmcXA9SVn52S",
  "key29": "4oF4YXSNiyzpAsh56B7YF6xRHgENW8D2tJGyM8GruSDd3K2fQuhrQ4VCACWwoqPYW4G7B7J7RuUwAK49YA3qttfo",
  "key30": "3coJk3PWtoYB6e1iMz1kmhrKfqJ72Q5UkzWpAuo68qom53FYVnSvttn2oFVjS4c9yZZS25eGDXmC9cZqowR3fxqr",
  "key31": "666h7TovY7P1WZqJB2jTCzccDRkhCzX7QqQvK7Bwa4c17H71EfYFWvVUm4NuMqcJwFrixA152JpaPvygkfU8VMCD",
  "key32": "3cehr2J4hn2jmdBFETWd14KQb6jN4LD3knz264ZEewLGMD9kmVrxthjeNeQUU44JojZPbgb4EbXh1u4AC9bMfKHG",
  "key33": "31JDwt1RVVPDpkg5Cayy5cxiWntA1j8UqxphgnUteuoeaduFQfYTx2TYxUe9ADUwG2W4MkPd1XtATdscsFFwo1U2",
  "key34": "3ze58Vw5voTKcTYGmunVzp9PeX6ZwMh37AKz9kQ1UtgaoztuynXfNrfbpiATC5wAPagVK9tCEMszRZAyuByULNJX",
  "key35": "5u9rS6NNCejdsLtxyTWjCi87Hk8eiKb2Dko2Ydcf3d7399boxPfzM59ZhV32hwfr8ASYiveAuNKcSoLHdNbpmR4h",
  "key36": "62z1dSDo3wgbSd7aebkV9B6PL9wtoaJvuHZog1TZd6QBuJxi5tVDFdib2U75xfVgj7tAY8wMvpQH6npdj9xpXWEH",
  "key37": "4YWpqDtyAtdMpi6ZTRxQB5mFYguQYyqbKLCWMoRVAoaoYG5o7NKcCHQHf9AJCE3KwZu4xgP1ETs9utDyiS3B7HPj",
  "key38": "Pk6wk9oehtkVKZyVYpyZnMpZsNogib9iUbZ64tKCzzjitdyMWJpG1QUwkbqNxsKuYCrWpw52MyLm9frQrHnptHw",
  "key39": "2w8h8jZxGfPzU6GSPSLUTTJNptd1htfVMdB6tJvy53wYoKdewC7k2SW1qhXpTH9qLTGudfhmReoJbu1yQxDcHeV4",
  "key40": "3rpKUGPjWcVjwsaLboZU8WUrAYhWJBTZCq9k99wvEC9ST66UvcaowHhbfRdZJVLM5bQLxfExUdDGn4YCmhjVhWoJ",
  "key41": "4DREKqRYtZKUFqJEzkX7MbdQpy6B7wSTpgcPwNXdZYTLiLwd8SgkXejSAPWVAdca1wzQEgNGt9o7CKjbLfrHHEWe",
  "key42": "636Ws2m9BK8ExH5rbwV8bPpYAadDimbwLGZ4NjXwQ9t3PXd9tkwbxUyYGpJadANx2WPybgodXbyNm1v1pBoqdBTd",
  "key43": "bL8JQVnMu3uM2k8xGtCdSc9sMNgyqgSWtrZkcPtiBihZEfGUiKEJMHyXxMUeTGYTZ4mZz7uzYvs3z6nBT6CaEYR",
  "key44": "5bWhG8cnMRqnKESZp4r9u5Ev5x5EpRyE4io4j5r3syPnQBpPkGv8muEyvFoSXRbR8oYVViCQWgFRScSFKw8gD3Gn",
  "key45": "5RhS6fzV8FwSm4BwUhYo3T27Ln6CLtxHM2XREWLsn5cnUGwdxmAVuuQFsiTGq8BsQgBMT1fPJhW7qux8Ge5jYnDP",
  "key46": "4jqLGBrVKYmxNMR5vMfXTHZQPwrvFKVqGFGgdrSq4i1RkXfutV4pTPKYiWVcLH22kdaTEGZMxoZxuYB1Tdyc27eL",
  "key47": "5GKAayFCa6ZqR7dyv8re24UeoSg3YF9MzzSy51q5n9WxCdA8VHheXdSa7dLdw5EwdhU623PFJVH52HGm2yitqg2C",
  "key48": "4gPR2ednm9oRJ5D4Ho5Bm9yoYN6yB7epeZxm1nQo4X3bz5pggqERzJiezqtxtKwmwhFuRbPuz3ywZ4PLb9QVTSXW"
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
