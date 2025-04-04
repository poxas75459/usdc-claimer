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
    "2P4LD8nFUb5PnZqY1FfHf38TQ3JraJuUKEZxQAVDpmGXX6nXhtT8gvJoHftnhL4KoUoEoWSsWYUyuvGKN6XkZbV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RmCgGZG3a51mYZPhf4KvHcHPKjhkVsXWL7riNQfMZckZHf481AAWVnQGE7gREs6oLjuwaoJi9tWo7BYFFbUZMG4",
  "key1": "5tosUaVfv19UPe9AwH9muaGhAD7ZLzGU35QzYkczGPDYVMyDJyDf2MQjC4Le4EuFavdYoU5fiHL6FFoVK8KqEzgT",
  "key2": "Lvg45vzQz5mvFjm43YYyyvrtQiDZCgUJ2sATWvWeoqeESrDERkDQcWty2zNsC3FrohPRTZn1g3Qdqpb9dF2juZT",
  "key3": "52tSTMKZUuFJszXtkXpNS5ktgcrFoVCVTB4GszmicfAFJtQa2AgmZBs5XgP1N7a4y6TZQpTLWZNq5XhW2VGE2pKz",
  "key4": "3wvW57A9SnMzFhyZkrWaSBC1cfmGFP1PuG2wHegbN6HyNyXzAo1Yd3ypt8s9mR1Z9D4pPSHiuUkN1K5tG9qCJion",
  "key5": "4zQLYYZ1iqXJj3yG6qgnpbGJiYqKbkQ9V99qPTohA4fpv5E1vhgN3QbJ3NMPLrNyBsxxTddmPPwZ6kxYNxqcckFn",
  "key6": "3DQk8JSSwc6umyc8VyzPSLEgwm3TFskkNw543wH3E1CmcwjouZGtN1wgHAfdVtpiT9A6CZKk11zXJtD1TtyRXq5o",
  "key7": "31ZnJusGD8DwBsoUeeueMTTrzoJMycxJioBJB5Mo8zdRJVaspGdJHdad6q7Gwu5XY1SRa5CaMbzj7fgLrgFbgoca",
  "key8": "mY1kKTyuL5VLoYB9QmUsuK1DwhGDKSBoAPTLeyd2ifcwwmp3PjUSMsJDmGF1gKC2Tn4MGbcKpdn2PB5kVDPyjUj",
  "key9": "9GZYAC22vngwG7NAwhfCVbUbLSayciAqR8AxDQmhCwQyqbyG5woyjnemaBsWKPAELkpX9hBAgq8Zd9sgicb6j1j",
  "key10": "3vAn7eSn59NWPi4AZRTEasDsPfpsfaW13KfPsYWm9ZfDWSpePZ6jgVrMtLVw9S4NWEx7zrSPybcXeR9mfD37rb2L",
  "key11": "28khmWRrpj4eTGh7Na85mNiXe7zgcWyr7foKycTpgwbTsVkbJnj6zx4DcqHj3q6qqtH1bKtHYq7t6vJErr2ZYAfG",
  "key12": "3DmnXznQhK4G77XvkYNUbvfM3rzdB1wAfvwpVRhiXahTVb1DGaQwEBZaxmeZWpXfwJwNnuDYpiAZg7jbCgdmMXrf",
  "key13": "3GedsEAwPwJbYbwMMLmfWdyuokkEiG3rfnAEDt8fCUe7GRgdtgiydCBBaARnac475kw3pumfx4jMSzKmK6qdwc4c",
  "key14": "2UDsoATLgZqa8d6hkSttRbEYEvGqzrGMpzuiA3f5qZR82JF3W9HBPJYLYJnCEyfzEssTLUzDUQ4AHgt9HF3bC8Kd",
  "key15": "1XE31n2XvWfcCaHroic52deKyqKxhJ1Jjqaf2ZkAdX46magUA33LnhCUswpuXLqZqJJMSBEDnCPX69f7oGShazb",
  "key16": "51CmpjabFr9Bu6anjSK2qtN8AVXDjYdMzJftQxAt64aQXUC9TpK919exVGk65nexasCsBLsAuASYHaGqgVmfMbvf",
  "key17": "64NTYCihwteGsDZzzriYb2K3Kb1Wq7SMWfxut89ZwjavDiDVcdzaMdQgyRdJs7TLFUUDBsXy5J4SJuh4wqyZ8cZt",
  "key18": "acPow2ZwVaJYpLMkWLoVR7htkkfy2TcT4KsWrSbX6PqBhsGZCmkuzJFFwbjZx54Qx8HCRCauJAkPLQj2tpnqvuv",
  "key19": "4hoMShnyarXu4fKQTk1rjrwjvW1owCpYnwfnYxYjX1cANAZYGtsuEQatW9wTKMT1CykbpF7rxN14WFnn8hjYWRP8",
  "key20": "2SXSk48fb2Wxf3LpVRpfmeGD3Us1v2soptA8vmRJCHDLRcRrfKdfm36pjJQhKVjUJKZYC2BFrpmxWZy9GP7w6Lcn",
  "key21": "4Cd3G5j8EfPg6oPdG3LydX9ytcQcQ2E7Wcj2x9c3Amu971jygCah1D437o8QRNuvuUJG8caDWgWaJxx25bYeLEmw",
  "key22": "3TqWMBpG8XAo2PXy2DAWEHPEGnMNnyeUP2g5hjutVtR2TuB4h8nxU2kVJ4P4qMDRBbtNazzUKC2BtRAmVE3YhdGw",
  "key23": "3U7mq7oJvt7b8vZQt3B3W1KVhshKCCzscwyTp1UV42WSyN9Y6qiAi5JGsFCqJDA7KKSeMHRB5uefcVmMUhgvowsB",
  "key24": "m9C8vkYgBPgMnJdyT19MR7pwuU5f86b2atkzf7yd6rVQVzJMS2Pvbo8HLR35URkg2XftxHRt5hmHEaPfr3FL3Wk",
  "key25": "2o5xxim9mHuziY5wGynKq3YepWzYr8tXiswqSztznb1yRWQgrwjwz8keDiMTKE3Nz86VPCJzZrV84NKdonnoxANv",
  "key26": "rV75diX9jftooQ849nfXVaknkXorAynHEh7s9kyWYdfTFLWSqNidK9H7U4dm46CHnDMXi9pZfgFnfzmabui4DC9",
  "key27": "5EqFQjfhENRD4qy6VsezAfGVW3V3TnMFnqm1rKK9Dpb6TZFvyEJfRWjdYwn2DQG1uMCAo5jVm4TotjvHhiCGDRt",
  "key28": "5L3QLv99bHcqbNgyecS5hSWqegYUQ4twCRRMq5TrFjHwxbWZmkbN3A5F5T8Ap5N4TMNUqvknso4Z4ATEJCYt8UUZ",
  "key29": "4aJe6MENm26wUM7y7Eqjjzw95PM3Zpv2xGZX3JhD62ednpmnvBMrXwh1dMFbnwqnGAGgrKNHorTk8Z7wb3T1Wnc",
  "key30": "FyHKpCLtgke2nCiPFvrRZWMh257xqPPxKynvFzp7ZxC9PMxVr7v1kAGFshKD8Qu7CB4wUicvgij6JPe2q8W8rqo",
  "key31": "5NNf1mKuJtTY7baqzPk8cayYL55idGTZVsJjD2NYK1MSeojECg6kCmJu9tvSXE2px13p7rNzUv75Y5Vmx6Pg7cNJ",
  "key32": "3c8vbxtn7az49nCzGnim31suH21EQy7aTqqLBCitqoUEy2A6Nhw5AhNUgcJCN1vZXfNEWDfC4b8QoFzEHesW8iB1"
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
