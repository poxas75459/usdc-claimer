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
    "4UZzDGUZY5yKaeGCFyZDwUUkwixn3vKQwV2vSjjZEzqHB1BRLn3FaHkUfXQq3wXbbxNNa1x4vEaDu9zspFs5sZEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6XTar8GfokoQC4sXn4Uz6Cb2ZoaMgPnpEkzoyC4Gqy5P4TYNvyR4E7EsfLKU5D2V3FBmpUteKsCcCrTGS3XyFi",
  "key1": "43qE5AcKNHMu7xwMptAEtSgiynupfWHZ5Q3RLYwGAR5KhWbpp2CqXHmZRSEvJvZZ93xXxF3SUR91jrmpSmTi4oDm",
  "key2": "3Bob5VfAYmN1hqKPcBJnLC8vu9UbC5WyB8L9W8pyUNuctyULAew2AbQ6veKpiiiPPjc4AgpkBeFDLw65wFKc1RYw",
  "key3": "4hLTYgp2eRbtpvE1vagEAjj7Vi5dNUJh2AkP4Uw6TXrtjQVNffB4hUCeXSkvzKYxB9hTmyC6G8YH1npPkZMDMuE3",
  "key4": "3QGiCz4wUabk484esswEZgFG6FpgFaoqjHcULaGUTrbNqiNped2YTMnmm7adpSjZxNKBVGHSFxT5wHCmm8ii81TG",
  "key5": "s7c3NYj2yvXDU63ihgbsKqJZbiQr1EqkaBymkn956jhbZKSux25FJ2NLWz1G2WsW4sTucN2kLwVTEo8ciRWqcsw",
  "key6": "3NDJKfUHL6dqMuRbth3DuFzfoF7myMryYM3LzL7L9dx54Fmy1XTrD9TcvfuAkdQLb67qtE62aMGvxX73Cxmt5wJ1",
  "key7": "4RjkEDbkia6jDCMvbkwzdjVTRRFbekd52wYPLBfdDBCGquxS78fqoAm6vsY1NdKa6geTCvdUdSRQKeoPpJx97VLb",
  "key8": "4Zap9VwhAkN8pF6GEMk5KSaQhB5UNipFaVhgvwL84gFpyvFd2mQCQ27tEYRUBJyAekzGKuw2CuVNJJyaG8uGEzhq",
  "key9": "5rBeojbDJzhPEVgpKe5dhTQcyzCJU2hMrogNxPgFrjH2Ch8sRAzySSdgPVQx25xowseFmAowW2oKadyALqXRrG6t",
  "key10": "3y4WiU3TrBoTWS1c99dwmTJvEgJ3XvukwYju1dbLYTcVBsApaNNxFJHtMALusczisss93gTkVqogteYjrX4md1KE",
  "key11": "62Jmt92sYC8b8hEfUyPbritYMHeoxwrmfQy3JTwXyw2K9wFQT8pibzpmZf5nS4wQHd3a6vwVeAbkCJ4poT3pthbW",
  "key12": "FQATSCVPg3Cov8R1mYSArvxA2523fzyw6diezSHB7SGTSByGuvSCR4zpmWxgW3HJRAhzgXnWVQcG4ALrhKijGgp",
  "key13": "5kN6c4i88wjCFagBEfeuSaW4LdJfJghP1ZMt1y3k4etjB5eJp2kc88NhHnRaFBM6vk8BcBzga8JaWN2dodSY1vjQ",
  "key14": "5HW1uxjPRJPUtyd6R6Eeetsf1y4F4DW2tyfK1UXR7jUP8o42QwNm8tUBNrNGZRGTF2duZs3FxzvERYFc2XysxkVX",
  "key15": "6nzw38br7HnjzNx3JK92nzkcQBSFFXZTZWPAf3eU5mK83JssSDyXeBYZCvpxip5RVNYW4Y2TPFJfx9NxL1FSto9",
  "key16": "5bpN5oEiUNjdiPynw3C7maUZGXwn3zxRat9Y9UHqujyTsAGf8RhtzDgGUZFGHbwTRD6BT647GuCi8GvNKA9fVmuB",
  "key17": "3aApUpGTC23iVD1brxEZj3NFdkQ9orgSRS9ULJXmmSgNqxL9VU4MvwwKVAwybQW9w2ULwURDhesSXu2rTg2NbfLt",
  "key18": "5CFyx7awcvCj2wZGiJUKPPz7b3cDLb9Mkru1HAxdc7woYadumLAfRfSVGPkY3Ym4WinVSEgG2XGWVZqLvLa31uxa",
  "key19": "31qofYCNec8vPpq5T2nDFzZHcSV8ptFRdEf2XC5WxJqcpEW6W2pEKZdzUZJPSvUSL53ijyyMDoDVcEHJ9m9GW8A1",
  "key20": "XpSL6eTrqmnDyNmESnKbRQwsmSZFfgDzx1rPWcbGSgHuatCtaLeUHQedgEFDFTAyMo7crGjq5qAmEX1chGUzaCp",
  "key21": "3YNjfR2XAYZZKuwNFkrSDb8x3t16ivuwbHLkqsSdnA3KmaA8iDxGNrZcJCXxZrwcLt8Zs5q6vQYLDYKRwJ4y8ejg",
  "key22": "3Nkg56ZiHEUFUidxJuKNh54JNEHiRDGxCfnhHtik6zSzZStBHRmuHT2HZPAgQaGZrBTLmYhjoq6Uy4AZWHc3Bv7H",
  "key23": "5mmgSkvPCo4nxTEk8PJBws11fc4tEuMNdiVjPaWNkWedSECfM8JrdJbhCE18XaLY7Jnt7bNnMZqSmDf14wNgF2s5",
  "key24": "SL3UDax2i5PLcxbt4fqUaxSMLinjCJ56v4VvfkG2Tuo4zrnqkJUjoj5VbHovik7ag1ZMY5msutmwaMMyoY5BHM6",
  "key25": "Hjdc1WxrDPdY9zM8DHbkC6UhnE5eM42ADgFjG6yqk6sGvpKT5UxFhomKUNn6J8bobRoy7GQLuofmznqKP7ahG6R",
  "key26": "2i5niMSXaZeQtaup9mPReCNMnzTeYf89kbnvbbwXEVqixDRqCwRpP6jabxuzHZS5TxNHaQfSCeh5gEyhkdG9q8h4",
  "key27": "UobUVJ4Uu3F66zK7CXLtUcRELehTqnX1Q59Nwmtf1ZLfkxsM8AaxBNo9jpxN3PNmhwRxhWdC3X6eVahbLfva8b8",
  "key28": "23UFj5rbH271ZiXJEgy5efZbDLnzzTBAV8SgUpX6eC9wmejJGkAho3nCJrmvSh1YEPgLKywW6Um9CKz7BceF1mZ8",
  "key29": "23gz9tfvnSTKZ4gobCdVVDX6yC9qrJGRrfHY4HdxvG8rBdrj4FS6oxGysw5BBoBJvCfZnwVkWy7oMwfyFpum7XKM",
  "key30": "5b9hEqDDyQsCdLKm9W4aQ84dyN7ApRLvPxXwXZy1997bLDynyqpt1QvSGBLoepExMMrgfMj13QMcwH3TjyTeoE37",
  "key31": "QWeiyuw9Htng766urwqzQrTKfvPxPxjXZBUhR9Qrg5WH6JgFZ4U2HmXUx9GnQzmpndWi2S11oUm7M6KfvW7SQCy",
  "key32": "YoCS6s7jgDBetqvEcUbXK3XFstLZPKtTK96xHRcCCzjg4j4R1SEZfGBCKhqB8YbRFDyw1ipQSTYmfeGffYEyE1t",
  "key33": "2FDmb3qozSjS82WnLi7KPD3Hm1enuevy8hzGmamfVTGrEDDyfzJVaW9rWtEq2GCgeY6rTvPj3gC5prsP1udYmrWQ",
  "key34": "Ew4mpWz94eyPoZdBoJ9gPezCWuEcifqmAKdcnA3BnjHi3V2LEsm2hxCDWtXB6zBSSYuYMbcc52s5fhEc6PkCLau",
  "key35": "5pCMXvbgDQMyS7Rk1u8C9sHagFpNjgK4sYP4VLTEynSi8erAUUF5tiB3WeLwNNkkDkPkuKjLa6MxAnrUE74o36z3",
  "key36": "21fCdb6J3JNWxu68qDrgFRSvhkH8RxbXxu5xvCauD42L8LmZkeY9s9DpniSB9Z9L7jq8b8onRpT4UxSiYC5LV9Cq",
  "key37": "7puZRWu2KFDBzn3exB4wWZVkdDCBaUvPLFoQ5MhEnWY6rCetANTrj4DD1wKVML7Lg4ej1j7jjD3bJycj2vDzCpy",
  "key38": "3Y3DVzDpMTHYXeN16bKYuRtB5f4UD65q2u7ER3ejSctGuWkwksw28omWT35PUrU7bBkvfjwuMVu8NfK2QWuyHx4S",
  "key39": "3DboSf1JqptVFtQyk7iU87Toyyk74KsyYraqbmZ9p7Cg7CxcQTqu2izgpj2g8BE6RH5RwF8aXSw3H3i8Ud6GRmt3",
  "key40": "57oqPSeAyQtayMJZ1XUTLsHvCkKKiTt3e58vLnM6rMAqr8EstkZogQNCeHfhTftbbzCgGxbaBXZLt2sDLw6touat"
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
