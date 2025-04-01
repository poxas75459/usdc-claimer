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
    "5tRvgVnGB7TRkC2fdVawwJVZsZtV6DhgJe3aFfh1Ue5r4cZqAe8gceSjz9zeFizEY2m7MpcVkvSETBehLynUx4Et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FUVdk3H8KuVpP8ZeoUicukje8xfE1AuRq1a3U9KsiLAAx2sUqAAprcXv7tu2AneSkeRtFRfMGgYHxAEHQjh7J18",
  "key1": "41D83xQqvH9tgfpJ8hWatkNNgVztUsEvzSjCA45eXK9tixpMFeUCQQcQYF9apvonVG3FQAKvDw3g9ob4TaUkmNdh",
  "key2": "3YSrzMxqe4weucXtHYKn6uwVazjmCh5o12oc6syHQLoidAanabMnAW2gdLoTc7vjNfnWVJd9o1aLxySHgonJtnRs",
  "key3": "2SupJAj27ETwer6Xhqh22EAed9CRM85sPgevTQqi72b1D6877HKuzgNkDSCRaxubgP3jzTUSZV7LW8RHKjmcqknV",
  "key4": "3JFnaHzQQgr5hQ52QKvE1X9E5L8mtztMew3A2HuKBABhyyiah2r2iTZZdaVLhkkga6jw1TMVCjkHMLTThc2skPo",
  "key5": "4AdYk4Y5r8wfderddm7WZDbzvZgeRW2Rk99hcY6otPUxJmHFG6e3TqguRryU5bapsJjNPbGjbCg9zgeyWMLB6qLm",
  "key6": "5S7WnCCv7EFBEVFzuQdbvWBX53NBXMzExojQuS7BrhPGauv5SyZJZ8hw8CVtp2UXhAKcZwiCgY8E9pWMpgm36bHB",
  "key7": "3H3CXRfrJaM3o7V8q9bV3A5XsN2hwkc3NR8TGveyYbmeLFhPzHqdVX3MmEKoMETvejHB4fVb4yozeW227BGwbHrp",
  "key8": "2nsiWT3gk6W6381RKmn8pp1drMw8f61LNHnPcKYe5EbdQwNPYjUn7eBkdVzVEDJTCN8AN2CZRAEFr4od8gJ6u79H",
  "key9": "2g1F11erRRmPDWt3Nj8LQehqCqXndNKhP3homsUbYYnenayPXNTHYDmxxKkuJjSmC5YXAX8hfy7zsNgiSQmedWFZ",
  "key10": "5ZU1NirdcEyLgk6KmbN4mBzCN93AUqN4Xw5iWoMzfZ5TzrDC71AmJbNpbRXPzF1uMUEjMTFaJn9dZzZBUkCAQCYy",
  "key11": "ChHE8cgDtT2ceo33W8px5Bx9fyECTJTz6Qxn93sKvmWHsgQeLHbhcYmqhqtpkugT6cezMNhMzwVrPEn8iSHZnig",
  "key12": "2A7UthmBeJ9LpQFhRUXyarM1mQe3f8BrK4QfsNX1hA83fu2GnU4B2UyWC2YF5TVM8wTotUaTCtDU6oMvr4iAutG1",
  "key13": "3CzMCwEn8fynYsaDKewegwdaiQV4EMHCea9xXR3vHtB7RQCG8qfw4Fqdpaz8yPwjHxj1o9cHSnJ5hAd34hQ4EwQD",
  "key14": "ERwtrfgbxnJzMGZbG4sR5qzwPvzCaTN2KqJhgY8MqUUcPKCd2rLuvphiaHmRr7FktEDH96SWAnypBSxixzW3Aed",
  "key15": "3iSaWEi4E73VdGpkYMMuSLQLoFpdtMmv1qj7SkJNWTuYYw1p2piRfn5LHskvdsFDPh3hdHrt2z6RcVVfRdAs6Q3w",
  "key16": "5tiFSZKTfmNEqgN6QDhg8Tj3X9Lq4dZfmzB7ybeUuKXjmqAMPhUjzDnL1e6PxodoC2Nt13AXPvGXZAZfEjub28vu",
  "key17": "uTt5JynqE4YSV6fYUHh65cP72bxMsyENwChxmPVvHCsb3xb9NDWe4gq8CfeDwyrhE89Juk9F7qyud9tL7Kc89mW",
  "key18": "4hYoNgvH6eR9EeTTaAKA1EYqAUPUAQWKjfwSZYTXWPYj4KUEcsLWsXokCVeW8H5xKdGueo1NJGDR71RumiH93MzS",
  "key19": "3m1U1QwXLzXk5QcmdN4qXGAy7M8BezaEZbhaF2AqWxob6SvXU8NayRtg2UF5CdmPFyfvt4MGqsNzBN4EARWjyTsg",
  "key20": "3RLEU2awB9k3jDmuVgdDV9LaiC8xhDtocJYCc4L3y8iXyGCuasX5VgLzSt6Ud7qzZY1nNwUBin1ytLZfvLhMfVCX",
  "key21": "ZZ9xdwNQpjvZ9FTD1HhDDybEeQkttHxsNsXaGESysDo5yMkxhKNUJFhsffmxx6jJ8jnbJdz6saRSvdsSGqPdNGZ",
  "key22": "rRbLRefatPhBT7VSSA3PoBWmftgQdtcYXzdv3GRtjmw1X6v1pCinRg4mFeJUAkJX72Ld5ihiPsQ2zoyCBQFBfwQ",
  "key23": "5ALwjo7bdLpUQUHg8Mgx389ZJPnAjdSDqZjsadTNCx4PAVwtBJNTddh2nZsPstcWxN1HzwdSqNjjCGRLn7Jf83MJ",
  "key24": "5PgWPD9N9GAT2AYbfh64kY3PZ6yeJNwCLNF1okLERb5kvdJPUk2iehKuWNd9btkqAV4CoQ3BJ53R3YE3jreFFPtX",
  "key25": "59MkT8wtmWNrMuK96CiMr7fWGKMDwEK5qKtFDRJ1tEqTTqAQvfogDgD3iMKCPtLdxtTx5LEcTDxWSbz2ScNijnRD",
  "key26": "3cnbZVCXuDC6Y5ujTRjJgiHSyhvQT1iaJDsznEFdZrjmDE9HirQrQsqayzebcBn8bnjzGafajXj7trCdzX1KfpjD",
  "key27": "2DDavEgKExNiUBpzKig9AZ225xq5NCU654xnjgAsPHg9KVzXpXNY2KHkSdn6CrYv8qTfXH6DRQHKX3cJjpAACsJF"
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
