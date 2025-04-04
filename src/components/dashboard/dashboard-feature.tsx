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
    "4KuuQ9Jp7wByXckXdo6DbwxABwLWxEjXkJ1Lq2uJbi7toBokvjSC2DEAiDukfnxyG4L7bRHYzbP5WXeCRvp7KAS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKtJ7XwGHom7NcYjSKMNAC13yXVH9iXMVMq6e968DzMcM8AaXdUgYuwS9dXXTEbxa66GyDePGe41hMbJ8rZWtjN",
  "key1": "5E9DLV1xQmt86pxxjdnAY6uHyzvCkjz1G1icy679XF9xYvFtUoMGFkx5pAYz6mypcJcD78aXQDo6jsG67vuR3yV1",
  "key2": "V73yZToShnS6CsouSFqyv4qAwbmNxR1LRTrjqtrxVjNJ3fErjCiWpQm7kdtEiAN1KP2QDPGspAteonW5GRjZaBZ",
  "key3": "nPmiygQqahwp669rrTxfvcvAadUd3i1TnMgvcDSeEDbPsWmCwmfpvXuunwWiV4xhpVQvrrSpJ96qYSh5mGumsiu",
  "key4": "3RPJyQpWWFv4NaeQhce81nxzT3CSTVELuXKympc4RNya1cKZuUPzHWVqqHr6E2QhtrZL61CcAR6oP5JfUDBGRF51",
  "key5": "3cMvbCYRu7q7xmfbTYPdh1vyYqpqLexGc6HkxWZxnoaRxMjHhHM91TheUcFZMLNJ3ZQw4BQgk2LdyKwoQsK858hu",
  "key6": "4fGET7sNt2c5MJZMuknujH97atWNNo1HDqijr8htQ4fzWAHXQzcUwQrysU6ny7bER7U3KzVZcTu4MwiJX8skkoFE",
  "key7": "5Kof1pDKEB27VhbUEBvSa7uzWfRF7f7LyYBPj3PAE6u4aCJNMe8tzar4fxNuKpuUEsAVKz8pg7GWeiVtgeYEWqJF",
  "key8": "399BLsiEfbHBuiTxriSVujYRujXJfmTXZt7W7ohf1TmDeMRobh73Qw622mYZgRAFscEo45XcNR6oSe3wyU1XbYFx",
  "key9": "3hPpDi28pokz3sk7BPC4aj65CzGJjj3m7T5V9jnc9Bf9qk1wcXgi4KoKDeC7iScvVdtg9bEvQCg4FvTN4k3BLwpB",
  "key10": "538uozze9jTifyQeQ8wrph3hxKcS7dWyoqyU7DjwQw9aMWAotHtZCgPZxMyAVbbFU29sv9HLJ8QrGgeuAX3Mw74p",
  "key11": "45iSD5B77Syrj2BCRvLfRpBjcXujCanLLQMeLsAht2kbi1KaUB97afifQmex1ubHMAUWkHfwWhbSMbCogtx3Wbri",
  "key12": "45Ko8NeTNd6VNXyn3qG4PLWaZ22KR4GCpEK9m1E3fMDNp1FjDiU292QvLwPa1wG1x8SN9Jg4T2NAoMWpeqTvNkSC",
  "key13": "4oAxUvQNgFQSGnLPc9gtrmZdbByWVP5j8YrhfPa7Ld2fAHXjBPQ1fKyRCk1Azqcg1dN4XN7TQucBUydjCtjHRNXZ",
  "key14": "4627LUx5VLrg4xuT2McWVCyvfRBhV8JtUeMs56LtCAFoAxSYD1C85RwYNyzL2mA2Q1A9tqt25ZwW7WwhjG5QqbcW",
  "key15": "4jamuEFMA6m7ojqYsbxydge1FmTiXigZsCidUhkTqTHnpL4LF12Lp5KuBwjaE3rpHudxc7P6VTXfaSke9RQoVic6",
  "key16": "2RV877fnsMk7ac7hrg7yoDnjNNSkdsBX6LSqWZBcGJB8kEZz6okJQUgr8KCpQxpA9243TT8iR2uhzPB1C8iuuErm",
  "key17": "idBxknSuip2pvi4q3rufpucCdDpRLojEq7aocpo8mVX7z7Y7CBxEZFK6uJ4eqSJanqZPTZGcNMTAi62B71mRQa7",
  "key18": "3rir9ueixmc4SG1m2Kjh2wJYJrVV3urSFJagpAvJK9FmFwn8h2WW3v1abYFsz23CHuipyanUnK6piVW1wg2Wdczv",
  "key19": "2XXN2JAFVhVCV7aH3VPhqaDC3cCFDShB6x8rJyyg7ssUvxt2ohUvkpCvuCDxGVLVgTgFCjDsBSZmCdb2dnShBseU",
  "key20": "7q2xzBzzGuZJ2LdPNDyGKD8DJhqVHkd6pVguWBiQX7Bw9mnAkaGLbUfCZTyodB82cRYc1e5Qy91DTyta62JUR85",
  "key21": "3CtExqKG5W7nZZJZeyvuEeyWWYqAreiFCbcAKUXAbaKLd3QMbfoE38JmzZufSp47EkxTgTxtpLupXqX5HudsNLKt",
  "key22": "JTMbbugCCxjqbFaMeAN2u4D76G3AeMZyyNBT8eVZTC2D17QaAQkTJfFPqRyLK5cqVcDfvyNchjve3tqA4WiWo91",
  "key23": "VLHVc3igZLMyeGxBQM52VbHQnNqhBFNJD3h2A76FSwut7HZevTTDpxt8yhaqrkYpNEHThvX3agKTGbkWp4bbLac",
  "key24": "3Uc7BMYsmFwhXapPKz32CWry6vuvJrJ7ecLtXrUAETPc5z2yN7EpUmZGUHWpRx6YVo4m2hVJMr1bi6dbGXDDCmna"
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
