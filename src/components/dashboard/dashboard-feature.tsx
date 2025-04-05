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
    "g9yFp9PArZoHHscMHAkujv7tULw8hCBPmSbYhewUAoW5edXA2iY5gXBmohfR8fuCZssCwsFzuRAAuZr5mKjbMbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53g1dmTPMXjJAdbYThMAgSChv7iVyqsLqhsy2Ru9A7wczvM77aksLLpk5McXrZVGkmahG6V2fPpDqNZm4ANNWi6G",
  "key1": "5Z1cxbbTsfK31eG7iquzTpm2dsfcPLMTRim21ec1s6KCNi4ack9PfcaxS3s24oAc6SaYdzfu5r7V2Ms2emSGzpAD",
  "key2": "58tQKds1rKpUxRjbNAKRUy4QWsUtabSHVZYBdBLq3eXYx41GJ9tbyrpxY1dFC7DwkDNCV7tQtMo4578RcZWd9obG",
  "key3": "3HX22fDHsoenpAfEAWAKfKNFh9NoLB7ALchENBE8CoUWdyydDyJbZJ2pByzM26RGS3Sd1NsrhzqKMtSecozFJ6LJ",
  "key4": "24dXgnJi9kcFez4fZtp2ubSkmZP8U1NXMV9wRbHiXL6LMaGAjZtcXY89TiJkcrJwmE3W2Chi92LZz1ssmbngp71o",
  "key5": "5ByJyovTxnkEqy2PB7WZVH3vb9Wv4MjisbgUGkU5Mrgo5GPVuEHin2m1MrAthnCwTb5UxYYgmxSe6JfC6LL9otQX",
  "key6": "3GfcY5kTdHpaX355TkenMqwihUtXtNhnR37qEWpE315z1RaZPr7tVo1ec3i36gDJqTRkP7uF98nb96ctaewv1p5a",
  "key7": "63m3bMnYQ4jme2o35QZUT425WY4EvDUxf892zEi2ANUoCEq1z978yzjcQSyQb4W1YMYw28AXT444aEQdBy7BEME2",
  "key8": "4vjG2wT8aHLbwHNvN8sYTCz6TEYh9VDW4k2Apwi8MUBbrhy4VKaTphrTCxnyq6r7qrPV39xtZitUDwC98qw2cqRj",
  "key9": "4y2foVe5A3ZpAySWSGDgApZyet7QYtuBbDhLri842FHLvFapPhnNw5hYrWEsqQeXC92uMBG1R4sAKK6UYiGwAhkq",
  "key10": "2ATG4L6jKmVbSh75FVpQEYzMWUgmL3RTMrnafbeLt6PbvpePNxiRZFAW3cqEGEuQT9cWHXCf4bQ2uy3vKHvGDbdk",
  "key11": "5Sysz688qq1oy5YmzqYmf4YVNw7HNxFiuJonSk2dXs4jfqi4bXB2NgfP476Vj9D3SvHor2VdrQ49oYQKn2KKCJMY",
  "key12": "5zThBgqgP7QZGaXWhh1eBZnzA4KPnwDZRHMUcHvz9J6x8tcAVvbiQNSMXozi4uvsg91DUvYK5H7JV2v7q8zkqLgT",
  "key13": "3x4GzPAm7cN9h2Qjompk7pn2ePPwAXTXw2XQrvvqt8ncHxk2nA9trg8tr2nDFsogGxrhWtzvzG9tPceUHJa1Pog8",
  "key14": "3vpRgEYdxYvf1zE9N6c1zMASSoT41vqpCE8ENjDzmtVSbkSEMBb9s6LN2vWmnWs7uFSFo28sqCZpyRzZfzYNfVyq",
  "key15": "3wCLAFNPTteUXQDje1q1wYixc85Ym8psJnjenqiXy2Bi4u7nYbqW8oEH7sEALcXXhMj2eqsA6dzxM2Hw2zphJBAD",
  "key16": "44EaRePdXmNyGcT6RAYV6TcupsUW8C371trJ4Nse5zmLWayYCdmP5NBybVTb6tNLH3DBKcDhP9c3uV7omJNQNF3c",
  "key17": "2JsyDyn6xwkhanrCWbEhhqA1r5MB4sDv8CL3Bsfnp4ga8Dffy6stZo7ojMJt7sPhFGFZDSHoehPyj5wXyxP7DAPB",
  "key18": "2SLKPFRsdYpBvGfJfBXkMLCBkpNo1n2Uhu2TpiaYXUCK5Ztp5ab9ZQ245SqYB8pyTBkutNr3fVAbSss1kU2dMPPA",
  "key19": "3TVz8TqRqgSKAXaixy1f9uaYseUQTyHF54GqPoiXu9VAHSPUwiZ7NoUQv7QoUyVr9JiHg4admnkPnKmFMMNzzqzR",
  "key20": "56dFwNfTmdAsCKaUuS6rwD4xGWweQqt5HsJD1ui5Ckvunyr8n8BtJW3F2EEwCo9Te5De5JggsJF1NxQxRzdYgmFk",
  "key21": "3MNVi4MCD5ZNhTkA8Ryw46H6t5cRPVFJcmHHD7fNM1c1kuVuUgCNJiBEkCj2gx8dt453TnXF1wYTnipiiN3Vgc78",
  "key22": "4LF2hZYpUAYVYSGqiPijRsZQyRGD39KA3Mo4zxdWfMaUsKE1b4ha3UAi6CYp3CmLu81v7RthXsBewpCQgVDK3Qz8",
  "key23": "5GdcPqRbs8Pp4s9ecePuDYNhLB3CCQqzumC85UDf9ebXoU41pZtBbFKVzGiTrHEMKx2udrmrmPA44q52kw96FxXk",
  "key24": "3KA69JLGa2CCoNHp1fgHEnedBGM3QhBrC6ZQJyBA8kSxusLmst2Rzf5jRputPvHZELCCXxfbGvr5R86f7MAN7feS",
  "key25": "47tXjUmiJP3mxVY6b7bJyNLwg3iY6hscL6NmmHJ4dGNCcpSQRQx5F2zaUiFuNmyM6Xf6tMizK1BebuRT5kwCiBoB",
  "key26": "B8TtyzyoYCXvRBEmPfo7Wcpu9995aERgc8HnUzsPhARAXUUY5whHzxoNYgAg6wwQ9xEkNjSjdL22pDwnDrV7LjP"
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
