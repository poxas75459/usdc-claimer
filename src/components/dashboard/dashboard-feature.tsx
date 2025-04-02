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
    "nRD3Hnjp5CY5Wi8Dh1mqY6hE6WPP1pgcyb6jPhmr1sB6vF2tuveXEmnqemH57kHQdDXfqSu3PfJwu6i8SrkWmqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nHY9k8NkRXhi1sST3UAJjBej2roywexVd74JLtUaJX1FifXqQHA3Xu7XJzJrr7RxguZM9iUfjoKyFkx6rab6PmW",
  "key1": "2esZPHVJwXbRdr3tn9wa6LJq5ag8iyo8zDGf7jv8gJRLMb5C9tKAUDFoZwb265rhnn7AQromCS7chUPaobpNudAb",
  "key2": "2rdaLMxFYRA8vLUya8Ydq7dFQ4pcyEfL1imsvDNKfP2TWYzaaHKhGPeSwUyjnzZXFSH2pa29MobBUB3ZLu1egUUy",
  "key3": "LeJHu1ut9mHxJQEBHfVeqzzKPQ2u1ag7CmKJcwWCRrDTLM1dnnhtTmnJwrpxineaBfCvuLsrT7QgwHezsSNXhn6",
  "key4": "3Lse3yBMmWNsYuQBUqVzCUGoRuf8xDyMW9f1TQ3LRk9ct9gZdV6b4kgCjF1E4LYsLsy438rEGRtQVi4ZEkg2RDYV",
  "key5": "3Cbt2x6zPtzJjyggvAs2AU1HaJoW5ec5PJocCT5EebQTgoSQs6DFZszvGyzxWYaLXTcpzwRq9DgZX4Q2P5ySCoeq",
  "key6": "49W52WL47FiD4a1yYVA28j8GNkE8VznX4gfGei7jtS6z6ptuuQxuM78C27vusNwuSkD1WpuDuc3gRiNRX9Xn7wQn",
  "key7": "Pii9c2qaSwjnRNrNccXsVgUUQz42zkNoxarHi8EjzYHfc1CwS1kYoTdh1F6uRKQaZYSGnuBZ9w3ZFExpoBWCHzF",
  "key8": "3ra49HSjoht6S9HVK7izZxQdU3HBAQSi2BD1RVR9Xmc9a2EnTMBkigKwSSHwanDruNxJPgd6SrqwGKm3CDhipJZC",
  "key9": "66or1J3kuan82Tq4HaeLutqz9CbQ7jGdV3vN7YcfSXJLbAF9zg7nPJjXNAqbyiLxSwywwuVrvZw6vzkUMaXT1hz5",
  "key10": "rR8pPMoeuoz9SjcdRExfdCa86ze2Xe6pgD2Ny4rQTVo8NLSdjB4xV9eMpnBFZQNJK9ABdm8BRBS9iyD6pSC4Zez",
  "key11": "47wXLrpLBimWhsxjMQCZVHvLtqsEPXi1abrb4d5BFM6SPs53G9mnNN1SFWe22GJzZUnpQzG3VRatHkt4t9Vzo9oK",
  "key12": "59W2KiRmm9n2iV3HyTDyVb5mhtyWzrAvJ6Xt1VBtf6YQvmsUnXzJVrya8F7xXkD8NS87iAFi1y4fDYQXHTh2iH9B",
  "key13": "tJunvmADsuHQn48QT1csEUBShLh2YYePsDnGK3LYTNnM8CVLKibBaeJ13Usp8Dn6bJAwur9kaqHcijbKE9DVrbM",
  "key14": "1L73nTMDH8R5snbKGfceAvzvhUZy32TacjqG2X7MMUWFJHRzMbLvu5Eunetp76c9eCpTxNRJCvBkwthKcLAKbJG",
  "key15": "5CEEzgetuZaxsvwsMttKVHLaZMd43WFhZxavKE3cCmTWysHzj92XExowFedc8UBaH8NycGfRuQBbXcT5bm8oW2Ct",
  "key16": "3zYKx61hHtJjgS5Eo9iFbMbKSqrT3eLgDumiZX7SXc9tXs3PUmF5CbfLatWLpNzrFkXEDCCuh6NdHFD9mz7g79Rb",
  "key17": "5KqShQ2SrJVEzgg4jXFMRUFrH6hwD4YpRiMgegyVJrKhAJ4ZZuWLUGwcvn4kAUTXuyvfpDVQyX5X8sgWim3FQ6Bc",
  "key18": "3Aa8Ukrc57Sj5XoMv4otacN15wUXf8E5kS5wCLwqo86UzcgzvUMip2i9RVbJeM1WpEEok8qSQZFUEsqJh5WCV5v8",
  "key19": "3GMahk9iWu2sEeMBrK1kGNrdXwPHzT65atVFRaPB5mGZwW1nuTGWyFQuhBKwkvZhq5NSkUXKBsMgFHabfrtz5rtD",
  "key20": "pFdedtdxJoA62fEbXmGzg2DAXh6NSzR6uf69ALoZ7nWEaSaSBFfQ5n9unMmXFJ5Cs9jkn2GBVzDEVovmqsscTsJ",
  "key21": "4qvgruq8Fn2JitP5MZeH2Pvc7BP2Wg3kmx7qAxhoffxuA1cVaYYyAsVh194aiPQqp21kxcs6aq6KMafu666NYASn",
  "key22": "5bvC54eHNnMT1PhjpixP4oDvdEdULgZfQEVjAbd7zxhNrq2JTH9sxhs2WekUqWRU9LKDcNKHFJxUHtBXn9VxWVpB",
  "key23": "EEZGYCB9ppyTZKxz9e2AjNSi4iaM7Nd8BH7qvLqwcahrzoJYfuH5HRfYtNbHHyT735mns2h1seGuH4ptn5tT8gq",
  "key24": "gEndbp7g9Dmb62JFQGMBNRARWZJNPXQJzEQ4dmJ7FpLbQ23MxPcng5iaUcGaCC2UAnipmZbVvVyrj9vatwujdnC",
  "key25": "pL4b4auLJ3W68nagesZADTPGZ5hV2FdxNcYnXgwUUkX3Nt7LHma8DepCm9spzN9CxaaUXGpocsmaoh8WVnhVjJB",
  "key26": "52PTjdmJjDFPnxPo5uymr5VmTdyZZPbYS4JSLctRmJJjJBUBZUWZ1b6U2RCGbrnK2gEcsK3FmSUTpkXh8RFafsbL",
  "key27": "ayF3PwxjKJUpk6aoFXSNAgbEfxYmcqtWsM8ycV2VS7zXhGp4RaryMotKvtXschwWQwfzt7btSnVREgDKrD1xA3q",
  "key28": "oLxH88brXHLyMn5DUXpnjL9f1pnyfyhaFp6Ga2gBv4x7Y6drcC9tFwbvJkF88NdysXNP5mBNL9aWYTbsQV43FXe",
  "key29": "5Jj4FcH2C68hH8NMPHTRXc88EsDGqYePh9FXtdQN4VZVdx3QyJNDgF2YbN3UCrz1Z5UMYaZc3SWEvVCvMBgir7rL",
  "key30": "395M7ke1MXRFhqNjvS5Lxrxj49ctLDSunPUbp3Yz7nq9vhZEBxQoSUcNPtv39bmvLAyzsMkKWJBSrXjcgnQScXfy",
  "key31": "bMS6sp4LuzaeifSSTx7SQsHRJxqAhcGpAjMbCSCXFw3YwY4DBbLVtDYG9uLoLmPKRMtZ6MmCWh1HiKD4UUmwm79",
  "key32": "Byoyb7a7fVAF7LkdjMUxem8PHxRzFCHcarNCM7HzQNYMKRmz6X1SoGEnbWtyrb1tuV6JefvjGMjetJx4MMkKRgA",
  "key33": "4CHpwPAixCNHhYJUzaCcD4v4kyzcrmSVhoqL9BB9BCzHSRhn7gD2Fj1ZdpxzXeiYBc6iEsAFw9ddpX3q4ApsXnCj"
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
