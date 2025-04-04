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
    "5LfzjEPihYv8o2tAHWTFk5bKKw8SDvURtYQeXHUokpnArSqCtW7U3R9MVE5jj8WQSEiv4WybgMhRhmLsobbzm2H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3trb9eyw5QyBbRfLZDuGqCH2AYSHomhH7Lex919EmRR9fikPmorNcnGn3RrC8SdpzGfbkAtWnFDFS2c1kHVWkMCj",
  "key1": "d8pK9FAWMS2JWHt2stQKoKyEz3YvkNvjLh6jnGoJiaroC6nPkxRievZ7sE64TmZu54cGwy5ogveauUnoBNUEZMw",
  "key2": "Cyvo5LJLDH3a96bcEJtyaZgeWjmKEKtq1FnCSWFYqw39rRZ1QmfEyCFxVX2grzuQkkgNsQ1eiZw2HWbh8v7ufTU",
  "key3": "mkkwmowHHsrYzEfdQia7RJ3Bq4dwiooGV1XEeAoe98XB537g99f2tfV3EeKfSGNuHg3CcNgLSxW9QwbgCarxgN4",
  "key4": "LcZjoRUEtF1GX3KsTKrj7XxnjYW7DtwgVuehSLdV9r9So6ojZzCQ1wd4w9f2vqXMf5JmSiJz1KKu7EKxe1SSL1P",
  "key5": "525yB5ez8pdehuo3sDQ92RH2VX9sjah7NjLGPDyMh711JdWdj4phLuMh1FHmnA6xmjSVaxR3Kcpu28kVn3UURSBa",
  "key6": "63GHT6MHkowysbWS4S4sLpqPWe3Y5pU6zq7126UH5Rx2FECfEnvJrrVqan1DBXJcGqLCyBDqUmm5Kt3mdkHVrAr7",
  "key7": "2RLNMPvHkHRS7v2qZu3L9PtibW8C5GjGxLSSxp46ozoh1528K8Us6dsiY1oWe4QWWmG2CYGNx3hRwy2mtKWXCZky",
  "key8": "5AYVYmkoCDP4niKRcPpETVTdTpm5EEziAfM3wD6phiQdtAJM5xAStHfbGMkBbc968owTPJCX4qZWrfi1hjE4ziF8",
  "key9": "2Xa7pZvGyerw1TrWFmRMN6wQ9XxFeawMBZx3qu1GyJeacNNpgNxXr2VrLW7w9yNtpJAiKMs9uS4A5sqPPug9RHWD",
  "key10": "5Rd9WZQBv4SENpGJrFUpwqSQotZ6fsHh5cVawgeBF1chX3kJDybv6o6EjQob5h61iCGYwqVEC2dSDiXMD2v39BKy",
  "key11": "4NhzoHUAmkWaJBWoE6GbRY2oerUoiSVgCCfq8GyikpesaCaNhq92W7S25EXVZ8tQcrPUjpTJq8Gvf7vFg6hxxruU",
  "key12": "4yEy4hCb9PwQHR8iHpr1rm3AdW2rLHthbCbxacVWFem16qJ6pW4qrvHnhhtdfzXWmkeRXucTewa19MpVd9qm65tL",
  "key13": "4duGYwbuUJUdvBiYTbFkokVmyUp3S5v8QURwGAqmJhoL6jXxR6F5xF9UdZLnjr17LhXoFxCM2avXVFWAXsWR5GgH",
  "key14": "31YxKdNga7jastrxy1WAGD8HWdghMyeFHaM1bqd4vmw1LLRu1v5BWJoxoAVjovJctTaTkjMj3DXTgYmgifwaUUKN",
  "key15": "4VPVenirW9j3F4XJfwadzSjjwZH9uGZNDDsWY94mdD2KFNZ8MdPESeZcH9kQZ7rcYJxi6unjzgN2jiQRfURMjwgz",
  "key16": "4dzuSKYpEUmW4Qkden8FjbudWCEVYkUtyiJGyPZShfamtriJKgVmfURMhmT2Ba8j4GhSJC3krgwPnqCLSd6pXwzN",
  "key17": "3HWMQmm2vkedbG8RpprsEz6XfM79uozpQ8oxhGyvvH4isk2o7JbjptgT65WLQB5x5KYpMF4sHQLRc2QyLX2tFp1t",
  "key18": "2AQxD9iYZCeqbeuLA4EEt4EB3Q3a12gUDgUhgUdMMajX9MYzfTxvWK5EujEHFXz4wc5sEFRerUcFdct3peNc2vj3",
  "key19": "MpEfmVpMPXiYuC5nd5NWfsYgH9Zspy52A3DthMpKUCXXLPNrtPM1gLk1aUNuFrsz2Hxs7vznzs44HzyZVc9kbZd",
  "key20": "4rkFkQjwKp47qz2VuQ7SQnGC3jm7UxrX5QLLWwXwXBhaq9xJZuMrE2rC14rqv1hjaQKRjJh7oJAjmSNUvhh9ymjw",
  "key21": "5z5cTPV46nQNrkNHdz1n4EdbFFmQrbXMBDYCMoXiA6hMCvNpbzAVxRadYSaU7Y7cMisxMjCY9uwJh8KkHQ1YbqxD",
  "key22": "tQtX6NZs4tFMD8eNrNXMWVzRMdVaj48yg7TNTGWsWyPrc4UxEZkno6v41BQU2iKTTYdNE26tkEwRvMKF76YtMgY",
  "key23": "5p32MD6VK3msWgEtysVukwmisVyZM23eakqjzkxY2zC9ww2Y5USJp8js6b9RuzFky3xMB6oEkX4g8qNAWDnJRs5n",
  "key24": "4vAu7wrTaga6PcvGH7Q6fCvLjbCgP8k8idBHAeR7hakZ2BKhjEutQ9ZUAbXk3vNC3vqrDpX2vnc8Vf7k7T8D5AuP",
  "key25": "5T8FRNiEPwu1Aq7KKJePavtUp3SjucQZrsCddD7Syg7Bgs5QCVmUHpukmmjZ6azfv9EBAehBmnLufAp8WER2Cxqj",
  "key26": "2CzVj9w3DFQYJXdLzD2CKnxnUz4KpuTaKsrajiP2kJ6qA8iZpasygkdycTBK2hacDADw9Y4vF5RsNobjmumxvgmJ",
  "key27": "35QmbzesZQHzTmLx2yFFDvuEBmFN1AJn2ScTCwhww2tPprZwjkKDwS8Y8VxW7YNMYypJx9EZYK3ndWSA7VNSB2dC",
  "key28": "5vLuUbnWeu1gTbSmpkdQNmWQJj82iUJtV7tS8iCXAB3MeDMzZQLpeVYRuvFyqSQ8zrW8sffpbtaXscgP3EgTSdEG",
  "key29": "9p3fNouH814LinQWEUhkN7a2VmXZzPMVympPk37KYaA9uAL3xfhMZkVtwN8qrq5jkHVTg95JB5tCB1ZbujvWsja",
  "key30": "61xKJHnDxruyksGVip23ydnCzYuew4LVpKtfwJ81kSb6LDKQQCfkSdthhuTHzWuh7DcghSqg9sCy7DC53kqAyw2Z",
  "key31": "3yW22x2uqrKCg3ZKtDtR6fxyVW7efw4B1tMz7DvDXaRexqcDRgLHX2AU9pqcBMTCsCtL6oaf3Fdvr8wccsLSEkCt"
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
