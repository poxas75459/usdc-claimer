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
    "5CJ71mK6bi8EnQYzgiZo3VnaJzFQrWMW43t1QqNfkij2xfhs77DkGSQsMNXNrqjLWJTBteN7gmc47zAiynTR6uHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59AsHpfz1F2LJPkgVPR5fzXFUvQ9DydHX8FbYPyaSwoSkcjtQ5UDJFRi5a3G6ntFahifMoGDQN7PRJ3MFgAPgWAr",
  "key1": "4kq6H6BpYXnVJprp7vLvfu7m31zmS4PVSkhJ4DbHfy71wUpFiBzEnugeTVze484Vm3Hx9cZNjNBcmhWp6hMLr3BM",
  "key2": "rKrTHFKzgQjMaYVjjPd9BPSErhvMsjxPDV6FVdSzZzVSQTjFKhEvTNmSKhzD2H51GARqdaMP5LZgD9GZ8bAs2pP",
  "key3": "4uTMgcz9vQ98tofpYCVvdJ6wUWzrvkvRamx9VeLGPkQ6js98EspRa7FTsyF3k4FttRtWZ2MfJBV78fwGKH4UBaJ4",
  "key4": "2m1aUsUccjV8RdqU9QLMPBkwKvuKtUV4sdFAG96LRY7ooCN3howgmnfPcqjzuxfjguaHMrnduL3X6BrLhavseJAj",
  "key5": "3NNgFNSGrsNXKyZgFF8pWTJ2LnbHTu8p1dycJ8oGkB6ZrgEYoY7v6fCv7oNYqGSCpLsPHKTAgSHUhUoaMnRfpw4K",
  "key6": "5XtoFRvS78vodrebkYGJaksJMf5L4i2D4aF2qEL62jzudAzQ737JRAsiUKWG6xczmYDayU34tS5eUp1hGitxU6ES",
  "key7": "48tTae97RvMbPhWyM8gQ86mHCqK24mDLQqEF9PNRAacM6Sx9LxxztEmDJ9AiTTxJbEKNaqiaS1tmLVCohHkdL7Cv",
  "key8": "4UPVbTqMazwZaBWZomjabVHRDdu2BqNdddDnXfS4horfjbJWiEMexRzZwLGoSR3EXvZScjckhurHfpaHVHJn3AaE",
  "key9": "5McX8p5szmU8P1Xk46bSMDBymBHXEojK4J6TzvLwrva9oPFf72v4T3r6xce6eNw69gjNxPVmW74cYCXqejKNNV3D",
  "key10": "5hnxJ5Ct79UNmExRMNUJa9qesSYaZxVGusDR3a1DJ4vgmLURQvTxywnyWkm19q7SiK8NmvGcpG1DTwCKEyYRM7Tn",
  "key11": "41hEatLNBazUPqzhnM2uBZgFFUvsaJkEWWFZxdSBHxCnwnjj6ouZiwXaiLL9dDw37CPfhsv6i5kAtHGhui3nfHgH",
  "key12": "4UKeJbPxaDnaVs15hSJ4oCNkX2eSGTnKHV2KKKH2fDZf94K8b772AnWUrTAK2AeXCX7YgKqdKx7dmF2qJMFTqgfY",
  "key13": "5HaTar2HDxPajC6nFR8pSrGfqnf3XhdDUTJe53CxRWM8Pmmv2HrsfV5rdpTmpSYCmj5Lg7u8c4vACV7WKzvQYjU6",
  "key14": "2vNJyDJmxvASoDajjMVmyMbQLG5gf6LtGsgcoDXiSMKnxVjyyComMxbqLD1qAaAfXtAThh6ZW4ZWKD7K8qdPHCB3",
  "key15": "2wa1sHrJY2h2mkCQv2B9b414uZ9cArPWDQh4VVjh4FwpWZqwwiEKWzuy8LddsBdjVUwCXwxrqrCHMkko1GiTsPKy",
  "key16": "5rijFmHYqyXVPh6sszNfDNNJRi4d8NdxB9Ab2PipSuC8Rfw8hJf7xreuDxCARUBmX96eDY4th2RkvKpJaRbPbVcn",
  "key17": "5rEhBjYzMsHdtT2UHfGUc6FDVFFCGY8UqgAwG7E9HwgDYbWNargpJPyJBDcUHAQ3q1qHiKRqLnv2act1TGnrkwUe",
  "key18": "cGz4VAseF2QCn5N64uTQXvXhtKiLxaidaKBWkVQJuv96EyggDDjbqoZ3bSopDHg4zdJPE3bgogXyx8Gr1o1cwUA",
  "key19": "3Ga4hkXdyNPmHidQc6bFWPKr4N8RLG2WYsGaUvRrVD3J6kY1okJbpUB2BZSCA6GXtbJJCr189faJDB3dScT5cbXp",
  "key20": "47zdMNscgg4QFFKEALDo57YzsSaPWD1YbeZPrDaUaADpxPb2GVPfNUWZQQcBkyrQNj79jvxiiYqCX5V4ZDoBS62J",
  "key21": "5kwm7a6TTc8FHFYo7VJY8cpt5ZJiZpHiB3UbiNdR2PVn5JdAfZiVQiG277q4UAzzKNcqQ7g8FsmDcgji91VC957V",
  "key22": "E52dPdFWpPkNaiNoTqmVBFpRVCFqXvkQsytYhFxER1ZsivCU9YfE56Y59pKvgnpXXDsqCVmyEQdovaYEY324V14",
  "key23": "5b686f5hXNvbo7PFZPzsMfyTZQNQZomyuvhQuvKnWZkccdiNVHxYnu58UcL23L7tSrkzMARgChj6ML6TTmMNv8FQ",
  "key24": "4dTDFCYRfbZTJbkEAVave3wjXX221351WBfQ2uzq52TW1YTrjm388EBakKnfUtvaVWg4gvXZeLFxLAEc7yWEofMC",
  "key25": "L5owFr58zFg2iawyHSnQFrchyKKvRszzCdvpbgFHm5K3cWAKuWKBhpKJKtBQxhn1wEsWS6aAk2Y8c4VX71PzC2y",
  "key26": "2nDsGtnYUBC1A7Ck7KfDxWcvycraG5byFex4GGd69re6czLFZUtsJPf9JbJchmJ8ruKXJnoNcRXAmoLBj5p33dGw",
  "key27": "MupcEsSbgDx6cxVB1wsH2ccwo4EiKNeYPxA5hjmJeyjaAbdo6yZyQXjmT9cf63fQDUtuMf5bQe4nDeWdAHn6rBs"
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
