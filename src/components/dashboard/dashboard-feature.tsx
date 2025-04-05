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
    "2nKps1bW4C59fjVDduwwEAfwzyy9JghV6qUpPBGyYnNC1xhXUfm5kPn7KQv12s3cKfUVGhZKKJFY9FQMZGuaJMPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPGLb48kcQb9w388cCNC5DdY9X19Bkjtsjjj1ZeNCVEPXaUtfBZ4PJhchKa2C4XzzV46nPLE1mwQ8gNvE48vL8G",
  "key1": "5HH6E64iTkaGLzvUGTpDP1ReasYwstPxrvWe5Kx7j5Kb2TGReMApPRexSu7vXdCTzcbqiz5jEs84boV2ShimPAKg",
  "key2": "8kTtq7hftNFixDLMV6c1dCnHxcdAoKtrQst3ozTCvJ2NBYvm855zGi6WWCEjrZ6dn9HwBqPFtKag5Xu7fqrsaRP",
  "key3": "3Uj3Zy7VLYTJFpyfYupUPtef2svDtrTE5MScgnXKxCBjwpv95bBGU69syiszzvngwbSsrnGQQhWFDTW3PSYUBYwn",
  "key4": "5odSyJHdPN3oQNMwRtUapKp7z7DtmRiFRyfQfrWbkwiLkpFpxPoWU6agSH1fL4KyJLgaegCViYiKK78D8Xnvkvjx",
  "key5": "5T5rtCfUcRU2ugarJPBxRN9LnSq33sEYufJpppTP3KT4HMz6SubCPgFRC7M8kYuuZTvUCp6rXC3kQSwYxnX5n2z5",
  "key6": "3TBm4frs6361FUCjDqnZv4bpCSCN1pqtMVEceA66jn9iG6K16ajr7PKYsuw839weFv3kLraoxjH2BK8cvuGUYxpo",
  "key7": "4LTEYtyryXGLcX9m6mhUecCQonP6gLGBA5xAz2jt3kkijR2VKeaKJEhX7HJcxX1A4qwrM1HqSwcH1kyHXGhtx5F",
  "key8": "5nT48SXceWh7rTd11KpGGyVzvjJH6LEADh6tADqN2GgXmZvRmsNs7JCWbfmhJfWRWsPRDaKTGdhCG9uhMnrt2ZaC",
  "key9": "Kgrx45sWdBDniMdLNiwSNxSnUc9KQujAdxn1R98wAcpZqFijD5UobioEgCPLNHF3XTivXcFTatZDUAQ8d2isKRg",
  "key10": "5RgtFSbR9jWg4vtewvbdoPSCJfXHjFVmhPSy1rnhktxa8YvfDGthh3D2nvv3gWWEy2XZFCBwdMdhwovux9epAXLj",
  "key11": "3xC1HDoaG7U7HkyiKNPWZwr8f2pyJgAtzLYSM8D7YPqTANspF8wEuz2WvaxnkThgnciZQHLT4icMm5UN1g9C2Zva",
  "key12": "4BxSr3MxxQFzJXee8Hp2up45ioxjNq9hFGnFLjRQQVGNvbcebVvEF2CVjMhK6nhKTpE1WaSAKmtU8jYjB7QoKZ41",
  "key13": "4Nz8VHr2TfeUZUb1ZN1zSbFyvYp3A7hZB3DnD68qbFUC64emGsZ1g1n5256x2GzoYtJyobTcxPAtknLNX5cYyhyk",
  "key14": "3joHGHC1mFfgBdKATtWN66xndt1RgtpeywyMB95GEvuXrhcinTw24NLLEDfe1hb3hSxX3bKxCu5i8zG98kXbJXVe",
  "key15": "632mD2Y5sG6UQwPCt8MpZ8cyvvGssfnQxVq5Sjt94S362VQkk4k7X2byhEPkZYEexzKNtws6E8jqynuXVCjGDd6N",
  "key16": "46nRGDa4X3L6pgyww7YbJp3ErxCmLeno49tsRRaR7pyKSWdZjiv4WMpqqWZP5LjeiTgEShJof3ZgsbUfAdjLY2NX",
  "key17": "5qADcW2r5Qh1FQQ2b5vMYaU8Nw5tSnB5HFXbjiGAqnD7M9VPTfw2z8bdnRA38A23Gjt32NUeuzN9zJ8m2H7TGgYT",
  "key18": "ZjMsec8mkg9SEsV9GhSWEHeeyxSZEzmyQxEhP36wHxfR79EwcU6US8HU9GfPE8SYaS8yyCaHXauzgoEPTfxsQhY",
  "key19": "55hNKg5m6XhacR7Pee4NkeeQdjTGaf8PTFNPAwXkDGQJWYuM3ibd6W2kHL1kGNSvpfbCQwMkt1ijEcpi4W8WTEQB",
  "key20": "xq19w9WqYTc3RDfuazytnV4Mwh9zy6THnATegQBzWtzwcsykXpqjt5Nyz8eYYUmBMZjKnew6f3uFfAVEtGBpvno",
  "key21": "3KTApHumRcX1HLY39V4snBj1Bnbyeq6BthmieGgXszYFd83BagHVazWAbjnzmm6GMGyXEWnVacvFC3XDbrh1zEmd",
  "key22": "25eYrGLRqnq3L9E2bNvHhN7N5UQVp8dyHefTv4MAWnU9B2pKGjW7g1Lce69eTo9KMoiJWuMUEhskvDF2YCQM8tnK",
  "key23": "4Wn6wXtjqbFqfvSyNKjntz4EXkYcTcqFfLukt7rvR7KrkvEvGmBxZ76L4y7NSN1JYj6K322986f7EAo737s57Qaj",
  "key24": "61jxaBd1xAbS9tUzayWgoFcibQ5EWjAd14Y2y9L8Gd9RekutYkyoAeEciP2ZyxeLHVwr7PU7SaDVtkJgLLcjmnbJ",
  "key25": "MWzjauaxEQHAjR1Eeu4aqB6WoRXWsooTKgtEefWKRwJTrgFE9zyBVpdR1eiPUF1yP9AKw8Z576QALygVP9pm4JK",
  "key26": "3VPtBWm93o6STCn4o5R3yEndn4T69Sx2yYh5osE9hCxeBryu35K3P2ojm85Sj354xDnWk7CMbHzY65gNqaRRjqnM",
  "key27": "2YMcGmF9VsjLefMRB7UmMWqTgHa5Actb3RdCzErQ7QiJm3W2qVxNHaDKKwCSbJeNiRzz8MMdka69wHmQmpAg3n4M",
  "key28": "63ZuUsxiuYi7UZyve3thajKtdDHp45EJNDULTQjZHDb8ynYBwMt9pUVJuWskMyqgK2bLFkriwxUkcWdX6jT4LqbH",
  "key29": "2ieuD7hti8yQco5PDLPtZjGk8tNzpsAnogWvEnDDfc38k59z5s3SXem1Q1nS4jKgvZLpTkpdCqeS6uMdJZVMTExM",
  "key30": "67QFEdehaWGUU274PXYbChcWJRHegiy8Rzmn8KEqxXhCEKfmMvZAn1a3ALdt119HHpGkrrpNbZqV9BRyn7FuSXEL",
  "key31": "cgfz2N2V1jCDe64bUz9MzaWzk2gCaTDATqES8poqhs2q2bopMMT9mCkA2oxMv3Zec1SFLfiztzY1GFJAijyiuaV",
  "key32": "3oHu6urnpSRntHRNg5ShKj3YGPfvJ1np1YNAQAtzbvWvbKwrneBuupD3L2EAAXkWAhC4gaemnPtfE8cHtar8BLnk",
  "key33": "FWxKZZYH7tY96nwEaKXLFVYhmAxCQjr2oeNUZjtVKnt3fTcBQ33UXdWXhYMM46SDGDZugeK9PnnhtjM2zywWtvg",
  "key34": "aaNDWCH1D8TRsmeciFhmJVcAiD25vGznPbLDfuWhsHEaXrBpGpXA313GNj2eJojhoEqczPFonJUeGcph4u26uQ4",
  "key35": "5yH8DcJXyTK39RooRrjpz2GZReve4AaCAeyxQWDs1dLL5SxxQ5tWKvKDf3j8iPcWCouPbKfMXp1XFVWbmyTWmd7K",
  "key36": "qpwb3wyvdFc8VqgaDFNdHX1q47co8Lca1dW39QsdrM7bjtMTHxtvMpgHuJNDazYTdysr7yDWE3YVnmctyEQu3Mv"
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
