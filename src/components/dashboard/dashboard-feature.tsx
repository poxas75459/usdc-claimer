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
    "2YxuKrCeHyrp9UPtYKAovsAJYXGi5q2BnsYucbSqZ7CxV9BiKx8tMztnB4zK2EfvugkgE8PMixVYuFnHF4b6Y3EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SuyEr9Z7gusqCrL2nd5uD6CDbv3CXDes9a2nMzP2KLcAtEgLaM9dNN6T4k28Yijf6BiT8WanGA2cfzPYs9VCHra",
  "key1": "4j86W7iaYhsSfhmctnor55ff25oLXfSW6vEg7saT9m27mLx8NQqhB35iVPQ16Y6H7zfovTLz1wUBs9XMKnjtwb5e",
  "key2": "3XZPktw33AWQhKxGmANXxo2m8HbunJBxPdM9sWqaeZ5n4vVheLmW9M5mehT9aak62iRk6BWFAKre77tPiPFBgvbc",
  "key3": "4Pjx26Jm2LwcFygzBPdwbGfmkFhy9STBPVK9Zso6qz6wGMCeZNBKi3XqWQCoAFudQrepHf6DLB3JzUuGgq2sm5iz",
  "key4": "5ZGagRNgGJcFSyQSXTasiVYeckTbykR5pLUw59NbhaZ1r137QXgHNq8jc5jQZw9xDgXNoJy7zXRugVmW1EHznn6T",
  "key5": "xL6tdJbr37RaXwuVhH9QDo8h56QbdGaEVqnw1env1Lpg7osZEe1ZTBXA1vz5AMQFf9SbTTGVrQSuXNzDHvQGGnQ",
  "key6": "4Dpp7t88xZLkq3hGGrbSx6hNL9YU8NdorrhakEz5zbYDxLnPs4UF9vxDpefkc2BCvBvpu8DktmNa7eJ2S6F4dJMZ",
  "key7": "85fNPoSxX945PbPo7g9GsGTPEbSRV1iKgDQtqe2QBdfqBMriQYPoSRKFWjmcJhpL9Zv2xWS63t3VMqpaucUPnmD",
  "key8": "4cm7duzqn6fDQJ2a8qSAnCuBNPFxk9orQzomgjk5BZ1XV4QzuwcdKKocqd2mM6Gn9f1YJatsmbzGZGZVWWZfZ2dJ",
  "key9": "2XEGug44QydboYVM3v9gRvubrN28HfwVAP8YgoKCmbsnFWsMZ3GxLdJ5ZPXSvwzCLemhVPsHPqKFe31WrSuh81f5",
  "key10": "38tWM9G58B7REMLMjL5sbE1yiBtxahfCvaw8G1eDKZgZ4QGcKtyYmUsjXJfJFE1AMi8cy45arNiV4qbtQoLKPt2E",
  "key11": "5RVY1LdX5UfqfFBvcuMXtvi13epYhVoXBr9969Wc46oiyoXAJyVcuHYUM3xhrENF2tRY4RchbGiR6PpsYzCDAQ8N",
  "key12": "4XjQvrvFDe3YVNQ2wXrJ2NuN8dWanUQQgxYf2E89zf85kLpiwdVPEqmRR9MeKegXZBPUQyvq5LWWEE3GDmxVfZp7",
  "key13": "2mLwuVGdmhimnyuT1d3JSaPzwwpEVndpotjZdxk4o68F1U94YPKRXEyiSrRgbKKnQmqdZfYKFrgk1yZe651K41c9",
  "key14": "3ekSVDTAtV5Wd9t1ngjuN9msRdfa8NbUaW6UGby9ziedBM28LCgGDvhHyNAn5qDChGPYrkZmZy65nZerror6wgJE",
  "key15": "o9EEj2XWzo15bKsNkPygN4HxMDVLwLyezNd6rbbaPidmHkZASR6h2DTS1eZHwoE3BkiPefogma2V1aEJuK25SEq",
  "key16": "1xm9DNcFJ6Qk2mF3CQA74vcSqaac5jQ6TpEAhETzi8JNNDfUgE2wDNGoiWSc8i9EVCKVGjNPNKdBhR6QDCWnGAj",
  "key17": "4KMu4d5PMcaMTpj3E9WtVduLgWuo1aXDDGT4cTKRAtfWXecgFiBBFjr6tHQ4KbYffjdQtD5uike1SMG75bvc564t",
  "key18": "45aYbpmXb9Rm34WdMQb8HwcCyWtcthos2zbRjRejaUT5YkBoRtxXCVg5YhWVF2i9yAGtoxsTJkLbfRHWaNwayN84",
  "key19": "55CAqk9XMJjRMhnR3dJM9Fo4RToBQE2bC8JFMCjFG8Z5AFKFxq4GfaxX6aW8sJRsTTUUBpceTWuYBcLKW3rGkt4B",
  "key20": "22m5XuwtMmAmCGfH8VNiu3eY9EGV1QdYFSGD672wZJN8zzN7yzwVpQ96i1wnGeMBt1FTXBZHKWz5BPEjuAQPJYyU",
  "key21": "61mHn1fG4k14PofD9he8S5EYyyuo2fodRcj72pkGSfHhQ6eBioKF6HDu83erv6zqQVhQw9S18h6utG79wMsE2Xyc",
  "key22": "44JsjBn5fyWugvsV63DKYpV2JiYLtLJM7MQqX1z9WDwdDxdspyrVLvyPgYuAingDWiV7S7eiuhmuRZDhsYv3pbP6",
  "key23": "28Smsdq3hyuyWzp7VcBDsjxPs2P3SXjjWYkNYM29gkRLaDJt4Wi6gGm9Z1YnrTmTfAmPswDg7r7swfZAnQsrPkqP",
  "key24": "3Lgp9gLZJdJw9GkJj63mwKCSnAfWicfP7V9ZaGjrg1QnjUkbNXh1Ca6tqaamNpnJRxCgZKiYNZPiy1new5uRxPeY",
  "key25": "2dJs6RKx3o6HBJrPFvXCdEw2ytJCnqTqfGnvCdtugYcURR28AaV413PsnSJdAMkzaMnr7CCTTWApFDsmo9iichFN",
  "key26": "3svJ8XDwAqVVbBA3dvspsVZ3Hv6TS366eXpMt5ZYHGbsMmsDUMMPxQqeQYY2YorxQa45iRaRFVrKeEctUBLjGLp8"
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
