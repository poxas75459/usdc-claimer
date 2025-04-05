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
    "5PRm6EV1vWqYPsF47xZFiHTRv8zrxBLmir1grHiRJpvgn6ks8GmtFbQfWrsjpKBaFfns1mh1LTHwvuEFfRSj8q6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAGggppZFNfuzNjVJX4x68w7GSLqdXb9Cx8dNpeJRo95ktAekFhRBsZxS8cxPDivNQyP6BxJZ6udStvrfAPQuCp",
  "key1": "5uzck426qwKCQu6cEMuSLMY8uzNcY2fsy6iwFG5SyfZkge9bQ9TUd6eqGbPEdPS9uuMGxd3hY7U2Tfmr9uybfiBb",
  "key2": "42BEM2MGj4RxLsaru6rwPDKkjcvm9sFHhnRPBsHVcpRGyPXKCEHTuWq4HsAMRJV7VHSj4GjDzMHBkSLwHXaRz5tk",
  "key3": "2HyYvTYQz9E9XFeXHoVdae1qegp8BULMU5oKmGPokmv1XFjTLsky7xd6eMsMZ9J4ohpNjY5tqbaYa5RhkdHt8wZK",
  "key4": "5AokbYo4Au8knaiq1jFYmRawhXVVzeDxZBnQchaTuuWFKcHpTmHYLMNs4oFS8kQtAcaC1G77oLFWr1ZogMHLGBLP",
  "key5": "3YNzVy4uft1fUkiyhdn9y1tqoXMnXaMHB2h4iEL6T1Hjj8EWGV4u3E6BL44SvaBrHep4ShLsqx4nLbyUnFcJ1Cve",
  "key6": "2F2aMN1sq8vaTkuZ7oRQgNPkKKSdknypyXeNATkisxEHG9Wj1fyUG92stEXeLpH21En8mV2pgHdFjAwSQMZa2b33",
  "key7": "4ZbFuF5hH1CPasrLBRkTxQDk477ZXi2FZSLvGEu4fvqfswPcMVxECf29pY1Usgk1cP1cXj9RWYN9mCao3GkRHecE",
  "key8": "8HexZR9GknNr9YzxoDxALpLnH22C9uusvUQf27vnbJSf1pV3nHsqNiymgvsAs4DPXAVBZhxZKZ8J1bzNoCfnbf2",
  "key9": "3yqdAAKHb4PvXeySNeN3kneaAM18VdRfhFLnoYznsaAUEnjsc6yqHpLXFURHvusagMCY1ZqqCgNEgELhrn6dq1BE",
  "key10": "4srHn7SEMSgdQJsiMRrX9MEDwMyK9xHYXPKL8oEnuyswAgvq1qRRLH27Eg74Ud81VSXUwUgtDTANuHKFw3cuQ3r1",
  "key11": "2J2Ed21kg8i7DWJH9sGpCUmqcNAd9QAYiirZMsBLHdj1YXT9b5feXQvf72qa8TX6SBKm3QA5g61nLy42yf4CPJUm",
  "key12": "2gKbkvBnXUFfjWYh8Q9Myb7ueyrZL5ZyZLs72oaxRPY4EiwRKJGxwdETuEkkJFtohBSgGgfdDS4wMFK96bkcMG1L",
  "key13": "3mBbqbt8LEp75YQEvc6S2XMfReTwS5quwijW7eRDmZen5qHq65saxn9G9xQBzi3BFp98sW9XPnEgKDhD9cxDLhHu",
  "key14": "4MfgdrM3DbMw1YoGUNqsTz5HAfjTa2iP7ovyLK9f2f9kAgn3V2JpZMSza3Y3RUPPuXsTYjuRxY23ShcKA79Bpx2m",
  "key15": "44TEekZ4A1gDxS2Mg4HFMugi71UtFKp14Wwq9trXKXGzirP12qTA9qfLGNgBUYg5QSVvC87RnAssx1sxVkM61LnB",
  "key16": "3dXGbydLKw7qZGt2K9yFmrGxM7pR2ygrQ5v5nzDM25KXqN3BQJdaKaHd4c72d7aMykmsbRDdPUYtPvX8xtj3Czn8",
  "key17": "64eNZt6pqJ1AFUutjjPnPeqM17N8FiB7MpHAhQH9dj2A56ZYCm193Vi2nf5suJNyuzkVzyYWhVcSpjfWepohBNgb",
  "key18": "YTEnevM4Fary6Tsr5NEsgH4MLkyVmvZPAin23WX8UkQnpZJQbhHMsV7kzbN8G5JoD4PDw8k2pNJ286d6pJGpu3Y",
  "key19": "aCbaphr2y2EqGHcrRhvXwKjgNwx2TrBSJ3AzT6WWhaUxrzQhxzZM6mkQtjX4QBaGU5UhQ4pMGkAMsfWGWAVvMAj",
  "key20": "2w1V7SJKPnpj3omaFnVF9yPL9iaQiFL8nVG6ioNNE6ZVN7C5piCmfmCXHk8RvZxbyzH49JCzip18jjG6ub1QzEYS",
  "key21": "VMD5Zp65rAetWeuajWd5nDteNiP66ccmduhRGttew5mP1BC1yykb1uZq31LM9sFzs78yXiSeijNFSCU4vBz9eCZ",
  "key22": "48U23ztTQE2Vqz2cP8LA8dgxKHAXnvNcJgqc98YnnmqKtPpY6HBtuKEeTNnLN4jbrDH9u3VBGVjo1QZUiwN4G36c",
  "key23": "5j1TQoUKZkv1SrWEudirazAdcKnyRdNKPjYpVbopNyeGGABCMQGeP2AZciwY2xwK6tfDscRG1HUw5cJpxScdmfg6",
  "key24": "2qrXhCDeJuWV8JXX81M2otr7dPaNF7KmJeyWQCzaRfacNidXzVs3Q8WtqwofgnSDz6rMrKkkm1jE8Kg9RxtzmvMu",
  "key25": "3VavYowqJRTEaZJuFP9Ea8jU78N2ysoaBGSrskt9zJnvpzgMKg5Dseqv9yseiRey7rVq736KNWbbqmPEYHxy9XX8",
  "key26": "44t72bCD4Gc95mPVpmHrpSKboPf4H7Y2b36xELWWhY6dfNKbvdyBM4zu1dyWn93gdtPtQuoxshoHxnTVdT3jZ6zz",
  "key27": "4M1WxbCj11cBNWXw2RLHFNTuDxAn8j7Zzxz6SipWqnntpTDzwZR8tBYsC9y19Ke3PjxatExAPFSQHiWbXm528Yxa",
  "key28": "4YgUDodBBJeqkHx38YnLvHSCEGhKYatFSd8YGfambawqhneLzVwJS6EaLCK6oJ4gVgcf3ncNjzyaGRPRX2BnD9NQ",
  "key29": "28A2q9uXAcJWG9Px7bkFXhNbFHEExRmAUXRxFRRwecSQuUnvaSf35r81h1V5jhmLm2qfuYD8HJsim58R6jzKCoZx",
  "key30": "67CpSXTBu4L3cLgRixYT6tbST21JgFxiKKceh27YJho4ZSWMmw2ARANZY22t2FYtX8WeJJGabEb8QC6oXrMhEfA1",
  "key31": "3CAdPe7XqZHFGtg5QeHhPSA6uHFNB7ZdBahoxjWP3Td9Z2SVz1XiNDuhiejyR65R8BAeEkATzCnt6ESX3xg7cpP5",
  "key32": "5VJ28fDM2hcsLtyoKpAEcW8oQRrTQmSPXCacUz15S9QoQzs1HWub5aM3BaanzmLSLeNf8wL3w8MzLzm5FDTVi9mx",
  "key33": "5tFVjTaY81csfQ9BnRwMSK1D9KNXoTWopuuaRrr7Xd9ZDCP7GjCmXbS4q9CKdKZvpuLGVE4KC7eAUSE5o6kZ34CY",
  "key34": "3iVNnKcGRLRBUVJ89yFEijmdd35hLvHqNHJECtdX4DVNMbuCQjzYBSpD5SzrM2ZBFpuWyJtVA43HETXH6g24th6v"
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
