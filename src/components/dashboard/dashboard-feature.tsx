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
    "4Tkjm2KSHustQbKbqQck5D5cAXzjvXkiHCxnosYwRzTCzfeqfugqjfGEPPLmp4Pz465ETVRSPL6VwRGP1BPaHPYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWWD12dj8GAJ1ygNVVYC3hftb31VYPK71xMwvRcGwaEfMum8B8amGR5Gsu5ENSxZrQYPr3As8bbwrD9yQhhrkQ4",
  "key1": "3Dfs9BbXuRwrasU8iYJ8WncwZv6Y9frdiABLEjtdPDvy5ZP5fXK19XoXrkxLHhBoHsL6v1Vf6iVB38EznKPChvt1",
  "key2": "3i8ytjp8iQkSQkKAcXUBSpDF778mSqdnmHVmMd2CUfU5vcB9d2VhkyVhuQiBcanXu5JYXEPqvqotTMDZ2qxk8Fte",
  "key3": "5PHzCJbBjSX9ec6mXnyZrHEjykAmeGCyxb6ooKedhKPWL7A2DMX9ueYuvgDtEwRbJKsdwUigPYX6nh82LZtXUqpe",
  "key4": "5qp1CoGFTe1pPQwDsKH1pff33sAFqQZoNNpMUg57CCvR2bHsCPsQc4RdFzgJzMyeGYWhMcXdf4c9ugYajuXabmPW",
  "key5": "4ne4MsNJHrzrjPPSMbsHYHTSbzckP3Yjb8XpkYEqbKCrt4npMmC2bY2hN3BvkftdQAWo88fJnyXgzLbFiKqhzjc",
  "key6": "xz9b6BeJLCabgCvwizYwXnABC9CDpfT6d85Qak28gWKJ1VXhUm2BFn1ZShWyx7rjG6eqpvDHsNDPFKCFNioSeWL",
  "key7": "4PkVTBMKcaCuAj5vcWbKAMKv1HX3oey6XmwqRvmZadhzXcV8MdpBXd26rWRKzvJRmfNtRPY2fKw2tLHhioDcPDLS",
  "key8": "3kPMYAXkiKo4ajqQTr3auNBJrJfFQw3FBRuH7pBadD3fQiDVwks8XC3BwjZkUr8e7UUv1T8T4uitxemxYGJL6WYg",
  "key9": "4noGuJhqeccTap1Xvh9SLz1uMuwQvHdPqVdeEifNQL58NK9ZnDNBTvxT4Vb4eGmjiknqzHKc115Rn84v6otkqysF",
  "key10": "2nmQF4r9Aw9mkZJGmNfKXjfww44GcTvovstRRxSisUXczzB4CEBsxSQGFYogSh7GcAAghvzTGr4sfQapJAZLgr4z",
  "key11": "4YDHgwy1B7H9oK2RqNcurubWF1A6ff8sUMrE1xGLkdzpYY1qLcWhYietAhLMpHceNi4EJCJX6hX1mtjPgi5L5syH",
  "key12": "3RgasA8jcEpkrg7ita7k5QPaEbVw1WxdxEsJJNZNetDqUCW6GuvGsVdxcq95UcDhCrYzGHRS1EeHjSwMMAGAT1Yt",
  "key13": "3h54veqfBCyL4FsjW8Wquz1TqXuFdikrfdSV2cPxfBAARc6BqqXVoNhvZizStTdWJLuY1Jhuf67ht3mWiNDUP7Sj",
  "key14": "2rjNKLpfeth173TXaKDauC1LQwRSrm85GXT9nisfvCLS3KPH8wLVnkkKzQ91qTStUJdiEqL9pfxX33hN6cmJ6RB5",
  "key15": "37qLmDtqitX3xiAxohXv5QG3nXBBFwTdHkg3bR72667KiAi7DKvHZ55MPXLCs8kbsZR7BnuiKy35qGo8rFAKNhT8",
  "key16": "Uq9QKh1pUfWqooq1hgCuvjGVRXG59pZ9am22k91S7uq7SaWeqo5UxCfa8B1zCRHFcccaMdCspdzFXTWHoKFDDnU",
  "key17": "5Q9BTxhKC7UQe64Kd7xpqEkQQmd2toWSLAobZEDsK66T1sgdWGQqaqsGS1gqUMSSiypDYCDvntEuoeBPY4uHf1sH",
  "key18": "5sfXGbg9RELbu1c565T5AKeaCW5MRVoZEED26BYw5EUry4zHpgGkcDqQupgGBr7UrodoYUZa8foW2EdyppgKU9Sy",
  "key19": "5fPKMXFouxWcMje3hjoTfRjAb5J53MSDS6b7mhfPHF5emg5mcmPcuxXpgsPPsPQR8cBCUdjhmxP9JbNESYbxu94u",
  "key20": "51P5qu4DJgYbx6cUGgJD7icXRuHUT5vmGtbwQtZwJ4uxJZvQpvx85pmNgUgq2NNFHfnyev9WhepzwwWu5gbyxw4L",
  "key21": "2W22EqTwYbSycYhwznugv9NjFJ3y7ADLWvzGYd7L5xdg1tr1PQNRF7AiAeo39XEfQcHAFJ5vaY2SLQrfn6m9nzQX",
  "key22": "5LTVDzcVNLci6s38dTxXezrJb1Tgzffh52687n5MJU8ay1nyhLXYkwHAcrbE7qGXbjj93GWYdJY44Zktx26zwTtx",
  "key23": "4s2TyRiHMecK9omTKHgjHwsMs5eArWVuByqnqvpKJVrMFZMMxUmcZtbP2PryN3mXfVhwzKZVfdskr8Nowr1FqYn1",
  "key24": "2EukpYSsMxXVy3qp4nLiqJkMwtPEfu1ucZRfYsucxELCEUkEXZnaS2uNyRCY6rMPKRMK43n12aEKBsiYEyBC59UB",
  "key25": "5An1GrALVJhMVRhdEjnoGY8WL5uTGFfZRUShX68fEJpnwF65dCt5P9KFVJB7gzW6zipwU9oGtZ5kq2RMtcn9Q71h",
  "key26": "5J9GhTtbN7uFfxp7DLQg2G5vesTcCxsTuYsK5UcL1gW4zddbS2NYW2DExrFiBjeQ9iGHkqdnPKyAEbfGJyKxNYSS",
  "key27": "5oFS37jYzs9upwDmeZKXKv3yDztsxF5BECNdEAJ6LxGafiPDbfVyUTLGUi461ezqhhKDgdTrHQa4vrQ9fMfyq7K5",
  "key28": "3gkPjKgFokUqGeHv1cRP6ogcVCdKkxPuHwjJaCoq18KUWGH9ztP7iTxxtTPe3VJGDjMEtGkiZV7vpDCGb4Lr5XcW"
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
