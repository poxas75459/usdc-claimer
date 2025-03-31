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
    "2bqEgsFDhme3BSah8mPkx8oRLuYN2XMNSqWkKRaguZfbyB6ZzfeWo2XZ7hQ58amM1vp5kMtbt7KnwFsEACJzihHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFKm844JeFPAQyHAJBuWyLWf3M2op8dkqrz7hWcBrjY3v8rjgn5SGTqVrwHNM3YvxrQr983mE4GWDyinDNXt6S7",
  "key1": "QSdZqjncvB2jwfhEDeuDMSsD2NVNzAqvyhct3hcS4h5SUYsqfGzrgXTFk8GSd4qF5qDxaB7BUe1TqGd4SRdSMdm",
  "key2": "3VdkViTkTHkh6jJ8JrmejHzzYBNGgU1Bvnu8ZPovZBy4TYR3Y89F4Xaf15ifAJ1QWV8brtJMKtXRzBN8jM1eVtVy",
  "key3": "5eS4frzvFkXZiFVTAJdrmkFSXkVVVtCScGZ8Y7auzAfmha5BExxU5BjZrbKyKDmsySJYdU1ndTThVn3a4s8xW4Kg",
  "key4": "2KABhbyvWBPA46Y5KuodbDDcJ1SkA9hjKwbY9YXdFX3WCVhGkVm62cQ2DVV9cdqyD3sF2oXAKK51FPfTbZMXryL8",
  "key5": "5vRur4Ci3aCyayXPfgfodHoYtbs1NjphwSTn2fT7AGax43wkdzWWzqUuPCB8G1tYr6FZbbY4sseyj1Qnsxya8vjo",
  "key6": "nB7qaJTrnMXVtnKFFe7TtFwPeH9ZBXF8K9chhz3ywtfisDhh7rdTR9rsqTANDEwL6MNDGk2MRPzQxHBWzhqPuFn",
  "key7": "3QKdNjT4J7WYwc3DRTLoU2TY2YKC8ghJUDSQvFVQb88SBPoZyF4vWBHrdndgcWiadAeqmFTqsdFcvhajkYga3NWr",
  "key8": "fzszYYvBL6ocQuAK7CG3D6JbyWkLRXZrQAZDam2aKebasAXvBZxF7m9HxcUefmKvgGm3XoVFkaKArgCPuMufrtL",
  "key9": "tD6RvQKSip8APGfeGp62tLak8pHhwNmcAddKYoQ1ceFWAKms93N5c6hqHWg82FQfc1h2Ay2TumWQ6aagsmRPhFQ",
  "key10": "4g2F5rt167h8mS3inG6Gki8wEeLWwYkFvzVpoRVu5ynzyRwpu9Jwyq5Yn8zpML1jQkC4DResfmEFuakZcvSkE6YR",
  "key11": "4BG5YhAXj5SEXbTrWftRTFfUSmZHHrLfeEUMua3iA5qAiNUV5MndvRj6HBRVbUsnUXYFtm7nXwZydfrxpXnGPnht",
  "key12": "5B3cJ8nqPzPARbth28jV6j5wy4ojRtuUedQKNGPPVfAwxFMrH3aPvrq9CorkExMnziYsUua1aTjp9kvmdbP2mFDb",
  "key13": "4FSJDRmaV8mP4oyMJb2E3byF4E3UVueRpNKzWB7aQsjvdVbbkFvDLLUtUMCMytUAnrJ7izUDwCMwwdDvttjxbaF3",
  "key14": "4k1eye9NgFXCsU1qvyY35aqcAACUYoW1Ptb5MA63ZBhhjpAsJMKJKsRRaCH6ofQdokKPsseWCncHEEMSJ4WZ2eyi",
  "key15": "3H7DZbnccVTwecDScN2YNyQ6C5uiw5wzfSBtfhfbijtyZU98qNyvizTvojF7SDmGEWtXXYrksFzWJHPyXQR3mcUZ",
  "key16": "v8CYDV6MnchGkwEScv2PJf34i7km81veUcR7EmTH9qJiTnwUenHsz68Sdvcfyr7F83JTjG5D8jWxzTQVdyZmoJc",
  "key17": "4fX4saf5ftFT7xGPiM3oadn9tVwEBWX1KtPsTNzEbZWjD1H3BB3yk8uhWzvVgrroKRWgCW9t3mcdVvu2mbneBTgo",
  "key18": "25cuvJM5EgN6zt8sjVQXTYviDHyBpydYYFsQMCxe2Mg9uKpKeGWciZ5xCuBHA6BW9ZJxR4Gh91Y3be9Gcsnzk43i",
  "key19": "4MnMkbbwiBz1GvgEiCg2E2FfBkh6W3fFh4CLFqmZfYvbL4KhaQkeM7retcJpCLZFNDyBDGm9MGRePv11f8PpqUyR",
  "key20": "2oWKUfsAcaYe75wHDhn6xEFJfbAE1jBwSdTfdazmrLAx7B1XjWm9qibt62gigHVUEHjFYJbTapJXYm2yCnd6tuNk",
  "key21": "3L8todHiabX3gNqYkXn6gBf4eaJPa1j1StE78j1quMkpXNeujXkEp9in2LqdvS57Wq2fhk9VyDi3mzeko3Xah612",
  "key22": "5JCHBnTDge8F2gc65iUW1SSXBc3kxMzUazHpFU9HSL2huwZ5nsbBjAFYiDdkuNjY1xV9ffLkEQUBpDG3F1TMfcdW",
  "key23": "41zdmBhneH1MT4m9uUM4HC34DfHufRU5fAgZLYPehy4DzMKJ9GYyGm7MxnGc1Wv4WTURtNZBbVLn7ZXtSSpHG9ni",
  "key24": "B4qHsYAxeNDn6SQPYs8AjdDoF5Vp3LabxJjZpayAAPRuQWMXoGBEcZtDX7UPoQ6v1z1oGrFYpiQh35GZGHi9Tmk",
  "key25": "42TkayuwdJ5AkpzfkPFDA4EUPzhRJHZNDtahzF1BFm5yPNG73tdKFsRqJGRDxouwgjHZfL4Srzonyua1hnBgxF2Y",
  "key26": "3Uvxdzhu5d7KodH6coYYq1eKvNX2kKqAtq7NuEimfVNWHnpMK4SvgaVzZmPCEwih1BJjrxT8QAmWXRntpZQX6Rdz",
  "key27": "E239xVqzz6R12eZ1KNL7BqaCC2CTtWVrZ1qHF7erb7KyKzmFXpa5WrUAXJXU12uQFhZxa7TGPFitU7PLWHBvUz3",
  "key28": "2222fozBJZ8SjEgSaDtWt3ucvxFxuXAhDHTFqCsTgYfEt68gWxZFMRXp1Xat9ZrMovLzBEzYMWAxM8Cmvg7jdRcc"
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
