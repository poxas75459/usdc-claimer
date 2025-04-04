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
    "4N4PNhSC7tsnkvAiEwHHN7aerKn7RUACZgmgd4gtJb1GpTvbt826Bs6oLNfUnpy9JQtFVcNkPC1KHq3Ncnt1aey2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2guijpQrfxDPS5vKUq1dAL3bHWcEc51TceEUcTPhKGwh97TXYpAjLbbT3TzcJQpjfpMkKEpondGaHHiwWFLDpa",
  "key1": "fMB6F9Wq9a49iLm8tsnEphF5UWurXUtzrGz4E3WpwkudeHG17EnEa1iZWNSF2uGLxiV26BoATEv6GYbDP1RHyFW",
  "key2": "2XEPRv6vXM9MGPB1xoTAe4oJDJ9uQhc1Y7uMLoB1ngzkzZy6wReqUk9tHedWrrMQEWuZ9FjQyKYVmMnfs78EEegJ",
  "key3": "292B5NzXbdPwe8tue46xfwRmqvgJmnqThZnor9BfE8atfvJ2rNTNJX2STAYvouBMNWA7saJUhS2iVonDcnnD59DD",
  "key4": "3YCT5X1564w6ip1zxX13B2urcxSKXE7qeg19KkR2qUwfE6bbY1KzgdJw9ndQyUXmVNn5xKbiS6WWyXmYDWR72J4N",
  "key5": "5mJx93hp1tYQLPRWNtYwSqCgRjX4Y35WPi2yUBaYJAXT4T77zUUaRWFgBqQg5NhGC8dPoAf5eRDawu6gVrEKfrVt",
  "key6": "4Lxnqt5su9DuDG9mLRrsPfJ9iKnDv3wPZARZ2R7DnBxbtw1ssJD2vBpJU8RkqYcsQdJUPZ4S9XLFqoBVKEcvmdt",
  "key7": "AVrJmkyRhuBMS6fVwZc2YaPyCqa12hYNY5HsyAcTJD555b2Rj6VUgXWBGuwVyrHaG3g3hsBqaDWTkAUsJJDbZkg",
  "key8": "4Zuqyd7txpy7P23D5wG5mtva5W3VmHJbZn7qbvKRE8qpeMsps9q8BRcSEgqyUPy1EtvPQruhGBz148MPGSueXSY3",
  "key9": "2ZpUNYBmYgYoBoUZJbWvFNnSkA9rCZY2osVMbemxVZoUe9DHscFX6THunw3fUkCNSdHf1D4Nb9gd5asJo8KNPB2e",
  "key10": "2sUNjztQAXyaBWMJ5nbNR5RaR7TMX6f33yEgUyCDEnGAD9jyx6BUQuCmAK4B2SFZXAr6R98tkabAQ3CAdvv5mtc2",
  "key11": "3QszX61A9RxgmfDUWEn8mMYp9j9KoZUGkrq4s1mwAePnz6PWN4QaFaUW5cGhfX6RpkaVhmKwgwBN4vaUsBxWsUrX",
  "key12": "2ymwFWCv3FmiNfZtLiqg6zM8czR1mSXoqsepUvuPBAa6ccLuqgiEKwQuPfx1G3vsqQfRgw1fPPB3268M7RXTvUj3",
  "key13": "3hAoaTmzZbDcozkJvnWRBAGkP7hgMhJ3kouAS8Za6wTUd5JT4hHSqVVTFWX99Esib4aKLCahyo5rm8xYj4hN7bN",
  "key14": "3pMYHjV1PjxHjDGx5e1oBc9Ln5mksNTks73yYDPrhZgz19W4LUAXdWti1o6YSUEe9DzpZjLXBnGA4hCDgsiDtVmu",
  "key15": "4YAtykwDfsWXwnELMXGaVkrSqCJhMiMbRWE8TJKGhDYU887WHdYkeagF34s3zwUcxNahyaCxQw31Xn9EEZv1FgRQ",
  "key16": "61pJCh5ETjtAh3GF9ToPXTMMqQvLoHRfjJGoeJUcuVvma6B5whr6rRQP2mkQ4ThXrKBHYXebdjC3XcZ9yHsqwGft",
  "key17": "2SKNGSGH819JyeMa8oJY82MSaJEEgRAMkfyDtwLJK5PABB4XHPAgfiFGaU73SFeEpQh3ttasnoQBLtAwC88hsyhc",
  "key18": "etsFHtVTq1U5BFhvKMBk6MrNHhB62gneFrXsU2jqaQBrvpsh12hLSQjSuUCKsMxLg13rMsKyQrGgi3i9JeZC5Fc",
  "key19": "3QfxESYxkQMHtA6syabawEWPitiwYZa8kF1xLfwTk83Bcc1kUfRsd7wEUwuKLA7YLJb4CPBgFRw91MV26y797LDw",
  "key20": "5vjG2orUAxB2CFTxyYFTBEDPxB3uMFQsixV6eMRuog3V6AMwWHnBgXajCARNR7G8s7aXfeDq3bFKuMJVj8TYmq3r",
  "key21": "3NFQCGSQc24epZNGfuZQXjZAkxyXKsTxTgeq1Gj6H6iqxBpmQVJYAGRgV4f727Hi16XBDZ88chzuzd15Xnu8uMrm",
  "key22": "5TKaUEbbtnbbZUTDdHjGupC8DnKSFqcS8AoNzcfSyCjmc92TywpEi3BNc6zUAZ1zZ7L3eoJZZG3MsqPQbuXmZX1z",
  "key23": "4Kvx1LtC9YvpdkozaSmdEHbq81EMqi7rsPrNioYdhyv7jMVrYZhf7TQemTyZE3pJhE8qtnSCEMzts8xZ7jWNnHH1",
  "key24": "5FZYbhmeWtNPxH5xXkuuXdSsA9sGTcfqHuunNdesRCR2dXc8Shtp2vGxdLsntfRAGaZV5ZpdY9RTSsRcYBPuLUmS",
  "key25": "5kCBQtpGq4MtvzCXmMRtXc4J7qKHNCSjtkKvgCkDt5WbKbhRQcqAU9SQUAMHKuLrRS5M189aMD94NjushD4acPft",
  "key26": "5PCcfQmaEjAg5MigqkLFiHfyETpQt4w5xi3fTw9GHfjAhHxTHSDBnYP3DUyC7ND4icFtLNwoW65fF3o6uBwEoKCs",
  "key27": "24Lh2WfjoHNCryPTAJa4NDT9S77xy2UTBBNFVTWmLXN8wNjuRp95eTA5GQzrkyeQFi66cZWSkn36sRrxmvCMFviS",
  "key28": "5rzHEw5hzWdmAVyyLW89mHRUiMqLSbxYHYV8dZG8mtNJCZmMu3MPRbzzcvws3oyhTpqCRg65wLUqPXoDfphY83Dp",
  "key29": "62pc25WMYnkC5ZMJvsfKVc6dnKeE7XPwPN6cEsvQraK7qF2Nnu3nFWH3zfRuCuPkxbNB6TVkaxEgWjV9t67Stck",
  "key30": "3zKNspLsrjKR1z7a6awZW4RbzHYWR5BUbk5cNgv8JWUSSnomRz5jatuc5xD5CMkhPbemqNq727RhNXTpXdRQLcg4",
  "key31": "dxB9iyswEZorprf6gKh3CFYDquh5EVPXQsAyi8RuZa6cA73Dk1StPF9H3a9CxKvu4moNKb1hCEme16gbkbMcqy4",
  "key32": "49Kfzovozyni5yyUKWWZ9AgAU3xsR82UUbMfk2UNEf7yzC6eikc6pwGpQJz5NLz258Kvs3ZRQNSGdjKeAeGBoz61",
  "key33": "5JLbCGMH2F13WAFYnzPSQ66pyw7UwXqmmsyDdqt3NXiZPNpQs9MJruz8xQvPHUwFs7dv9pfzcbBshp8Xbv8RJ3Z8",
  "key34": "4Cngs12Pne6WyCJFnzrQaYteTmb9DcSy9EShZc46YkT8DD2jzgBTA4uh3Krae2w9Mu3k2vJprbP8LFEbjy3vV3mW",
  "key35": "5rLKpR6xUA5U37U5BsWTjrD48t2Z6X6ph6hBGdFS8ihB69QjphhyqMeSyyPCkoZ6wRtvqswgoRHoA5p6txCbTJDg",
  "key36": "2xoUpcvvUGvTpVzPHabsgvxcarovZUgzx7Ez7w9AScSkbyJ54gDckKkJJ8TyX9BDwMxgdquKYL74p5JnE2kkZWsv",
  "key37": "38tgce4Ec7QF6RAC3JJupuc7X25JiJkCZocdHgRtYZSfbN2YfuJNdWtCb2KeA6QQ5yQH7QxjfD1pwKe4qL2TR2R2",
  "key38": "5HyQYjjctxu8v194AiqWtDzDSijGu7YNy15mM1GGBabm1UKzEDtp4uKMncoyVsEqwwRKtqozoZ4XsL86WUrWq3n1",
  "key39": "4S4LoPhMw3nxTfkXgH9sKNUJ5Hm8Gy9KZQNDSVNtS9RjedoQZnNd6LCKHUqqfRtuMJh4v3kn73eFENtUZ3UR29V4",
  "key40": "2aWF2Jw4n1N29DfB2kp31yD55PVAm6U5GNxjs8Ff77Y3dBhmkf6qzdVbFKnri5rFHfVzZEczDrb7pBL7KrG2TzTk",
  "key41": "3wjNQrXWYn2J1CFWuRuQxX6Yk9MgDchpMkevoUrs3uHsq4pr6GK3cCRhXw4GVnMhDjDu7YRJpWHXVEYwbEx55jH",
  "key42": "H1LmgdD8DXgCrbcKAAfR6VAQyjFeu7fVXE7D6JzDzrVeNCx3J55cGuGpAwXKgg8oG9yvswz3hL3YUaTSncAybHs"
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
