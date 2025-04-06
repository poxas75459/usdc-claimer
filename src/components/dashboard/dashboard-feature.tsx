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
    "mM9GdVRmg8t3CiHfr1f12AKpE6rDL44SDeCJMfRyKuQRUhozKN3Kaepnj2XGP1KGZrQgcp77NuhGcmzNfDeip6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhMnzVR8sbw12u4X9HiQSrwSWm8GwWXXhtaSWdQscNJBbwdaA4SfMhyZeJw6quLevEc5dVDXxV5YX3ShbLntK5P",
  "key1": "3urfkDgDKVWZ6bqZaPrAUUZ3ZifRwYyrSXS5R1uuNYyExHJ15SjEroNm7UtRik92TDLECfbSTorxuCggFWf5t23V",
  "key2": "244zJdN8VSa7Zg1SQdCvp5AUmxs1T9V1McT8WqsGg5Ub3tmbsRF7Lw66KbmvDqBhJW3jXD8jezrX1kqvjoQtymQa",
  "key3": "5Wrj4PMDr667qb8tKapLSk9mYJCtxX1DXnRFUx3trESYZHtPMXs9cPi556rh1vzWuT7GVMnLg5Uex7ghqYwsGPnd",
  "key4": "4SkTWopqoaDXPDPK2sGZ9J5T4XMW3MSbEogQnTDcLjPGkTECB6nQsgGTJCqef6SJd9YgPXhmektsEVMuyFxE6NLn",
  "key5": "hCJBv6KNn5fw2q7CY4QifGL5PciQX6svpus7MA1h34bejQ6D3rG84JHPDeAAZQ2BrJrhzbgxRTpeiSKFhsJFAwQ",
  "key6": "48LuCi1f9dVr4pFWsXXExNM69smfwJvJspmKvs3LiaUBeJxEbi5f9GwH8zFY3XqA35seGj4PnZNoAAv4X2rdXzYF",
  "key7": "3XA5FE1gwwjAWYbAC5fNdqTBHpMZgDjCW8TzQnpHKWvYV6XPXjh7mhnrAVLo5hAQ5CihiDfp1x2NhTKA3cHMtNQH",
  "key8": "5YkVh8pCb57tmPTVYjuQpaicFVQtE22BNxTEdjNwTCrMsmrrVYpjNyDyJPrefjtaAKYQxvBstWh6hmCVwgKW43bW",
  "key9": "4LdBzzV4fYc1kLHno1eYoqmtbh6BDp19yn1YmWgaA3bazgb8C4v1UzfDaCn3P6XKLifvmN9F27zTjuRgHtFiSgz7",
  "key10": "2RDVXqR5Q7XNfZhr7ryJEqR823KSR4BzFBtaTyPFWYiojvf3p43Qi6TsXyFJdcCMk5BpG2Lhohk9ayz6z7GE1QLh",
  "key11": "2TmnxrEDz8F6pLCqrNXeBAfybhefvaGcMXChT3Cj4aU4vv4PY2Zf3S75UUB42hto1shcBDejE1aBSC67hoixhDZe",
  "key12": "4FLbaj7SRyTcB7FFRmBLKVZVrSXZ4aHfjbP5eRF8fLYJThDzSdufQFM5VhhHJsKkPfmjtRHiBC4TvhMiDmBsXVH9",
  "key13": "3ppn946RSwcUUfMN3wdSdQpeJNBhtcJ498Ykdg1p82MEob2vyY2iWgX44dn9H1UYGwbmQsXvQtGFCjmNcYQmnw69",
  "key14": "4nfTG7cuqcohAxH2atXuWdoKkT5YskMXfatb7FiM1kMdohvcjB8Dfciep2ZXwMxfr96AM2iW9d244DRswqjjAyCY",
  "key15": "2bgbBgDf6KiyptrJZQi5FoW4KhHfkPfpDfK7DVebGK9eFdyZCrV7pEHhL97V7yerLqSL8apUMSkxCBUuZTasVRJ",
  "key16": "bPd4vdhMCwgHz3X5ESC9Akw8SE1n5XvhutzQRmyGHv6XSVuEsBDF8zYNBht3EwdhC6UDJe1SfCdWZpdQB1Mutst",
  "key17": "3Nsjda5HHwy4BJEAJ4CkmwQMDfmgWMn9qzoqW9aUrxTrWrP4vpCBZD9pEtedLrFxzTi5C5oLRhs9NG8zbuiTpX71",
  "key18": "GKqgFZ2v4u1tEZHNR3UNJfuvmCXshcb23dHr7cvn7MbViL1ZsoLU2nY8HxZJcr533inGXqPAGK1mnoZvoFXEKGK",
  "key19": "NSsptafXqQFgvkTEfArbUKynTgZgpDE6LHYLp9ZETyCrxFP4WypzK9UGKH3eHrvsu7x1JHpaztSM5eL5nMAzSx9",
  "key20": "3S6WdnKtFRCHuM1MFSLAaxETEzW1sH2NuHxEeUhLTDweXCZWvwF8zDcVmcUe8J2qnn4WbZbLDPCjEeauSqGUWg6",
  "key21": "5864iPf2D88HjQadyQk1YUtVFc8woM5KAXTTgCr3iQNUS8UvUFDGsYssJFbgdA6djGhsNbHkdSWFiYKrZS4uFLRP",
  "key22": "2DtP8aUUaHqDe5JH7NM2gYnyeQKZH55VosgAVk3MZ7UEf4nFZZxCyoDZbr45VpXUEG8xiybu1vgQCh5dK9KNrVVj",
  "key23": "2KSaxypfYCKe4udCcvnVVC1qSQkXZrJcqecyAyb1coPzPe1EtnpbATGzEzLx7f1wFCCU9oFQRUc8Ce3wKwZQ8jBu",
  "key24": "u6GyZLDS3HJswGPTR4adyi9oTofYQBC8Kq1LkDx9LZeSK8DhKWHgUhXkBwmUeiXkXeUNPLQXNLSpjFWjNuYW3jw",
  "key25": "4hDJiewKrB2yzSRLnvqZ4c15zvA6YK5mHW5FypLbzaH9XJ8rSmFVknxCPzWTcMAHDo39mrrqjgAXV8uRK44eieBK",
  "key26": "2awasYwDi1Li8NMtndEsbLEF2kSKRvgEsGwoh6iWcaiRWnNyGgQQi5KoQxG5pPCLKoGZY3fLPjrknnn6iMsB9vg6",
  "key27": "1mu1HzZRm9KhLpUgwPUMKUnZ6hp5HwYbEMJpLLq4e4Rn54qQsQjX1y9FSGMcCzFFdQb5MVkiE741RUR4KuB15mJ",
  "key28": "349Wb5RMGrUJo5caTz3pimFyMk5xBbyzYg8Kg56enENutupwWkMa4JjBEsuYY5SqsMKr6EtqgneJbsNc3DTCjR8x",
  "key29": "cFwpM5ihwcVARgFNwCraYFDzUwkaCcRchiysLSjXnUTm6FchYhpZwPHCVPoySCLttFPteAAtXYx83NXtBqWvafo",
  "key30": "59sFZjzn2nda4r1ezfWug8CZXHL2dty6CHisRMRmuwTZuKgs4gAWBwmH6GZWM8JJr1dVBXpu9wvkaLDS9k5eWkvc",
  "key31": "MjwCoFwLZ4TGgX1c7exJFX1T6rohceaT229YunNRYNhbPtUbBwQwhbB5h7Q37hoZ32Y6t66PQuYoCBwS8Ppzae1",
  "key32": "2FsHsaHFvV1ay5VQ33GaTQ9BASLAY9bnkpKfFmsiV6qssehdrDpxLhH3W8qfHFTSDJDeUcEGh7WE1uTo7SUr85n7",
  "key33": "5214gomheZU86VjpDXwLhTMRxGsGcXMoSg7Xs94fEXfFVvhm9NaKKiZsd541AckeJpo8S84XoXBQetArGjxdZ8hU",
  "key34": "4RSXfvNcwFM4bXS8M2BfZFGAXf7wjK7Bu4pNq5JajigTuCGNjpnosEjCsy3ytJs5rt11CmDuScsXF7QALxihWNLk",
  "key35": "3jMPBj5X3jLHzVqbBffYEQgtZ6ZsqAi6H8354RC4RomVdivE73ufL9v6WhiqzMqXcP93Nk6S7DgGkxvsZe1RkUQS",
  "key36": "2LHsK6eV6Ao5KChE6BmS4nGoN4tdLEjV2TrLbd96CJrWxWpbms5GEVcbVUitFUwXnBCAox9TWpBP8v41LTY5KdD8",
  "key37": "4SZW8L6vxnmpGaX5CBHH3MNdw6UKrWxs3jy48xnKWxzYHMfUnfuqiY2n2nJDVwKGNxDv4norzLBTsbb4kadVzpDc",
  "key38": "2iuFUDvTx7aajjxTtECSDqBZFWx5eRGe4zCq3PkYBoiB6sF3bgg4L2hk18gSa1HSzKGURy4GJbcoJpLp2FvzVVJy",
  "key39": "338KBDNv6rFWH1J56NE7arK8erFRk9JHsVk4PAQmzVugWM6mh2Rfho1R7uwDFYEnNe45qfCZvUB9aTEF3Td6uf8j"
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
