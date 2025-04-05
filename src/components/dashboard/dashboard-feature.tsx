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
    "4yGs3emK6J9JNF9nee5Px8TpSqmTw8jPqm5JAfMLUijmPa43qfgUdyCyxiiw7Nu72Q9566yLgbLpbwM1GzkfeqiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5yqSKacm8cqofAjiYj2E5nG9RdAsDxGZ28858eNUPPE5zyGHHaycdqK27kepVAdkf7yZY48rCxhYuUTUh58g21",
  "key1": "4VfEi5BY7q54P1YMQu28dnXniB2A74rXLnZktt4VzdLgwRdwtKrWDuXVqpk4kdJ3QqNFqFGoX7M1cRch3qpZwP1N",
  "key2": "27w76jG4n9KUv3Yhze5AD9i1DVMY8BvB2PNTXSngMZX8nLKMqkqzsZPGouYsgSYF72aJ6jkw5smj6uu29ExBnoW7",
  "key3": "3dmuWw6qdH9AgENZC2QMDLDvvEVEhkp4CHoetnn728aSrxLHuvWoSWFx8HpGWdy42B3Mb44suEQBWuxtqtYgHnmW",
  "key4": "5sctxJJFANShfr2BB48rV9vLWRztkMEnjKQ4vDkhKrLgqY2MuEybTuacrietEWbNXLCXXWynXjDd8NxCDz8zZ3bE",
  "key5": "4tUrHV2PvFLQnJ4JQoq3cVRrPRmcQXWYTuTsVzsp1RZdjEo8FByzdPQHwV7NrS9Pep2HmiLZk7AF9oZPzGUEdrMV",
  "key6": "5aVP9jAPVNxYYMs331U7D4yQFncvMXuzH6ZUeLuvdjHLWM33hmcT1VU8bTXZUzPHi23jrMpMosv8fqqwdq2srLrM",
  "key7": "5yTgvLSvvzj5XRJTvkF2ReneupNeGDSRqdh4CJDE2pnHfnb3oddTpk3h51uc3FqK6VHM3kjakoVsnGehMXai6Es1",
  "key8": "2UvHTGYGQZv1FBDZhL4X7gqiidxeB2cgfu3kepQszBHpX1Pr4YFKRbq1CmV9pNE88WjhiX86y4mddAjm5LtAsnw7",
  "key9": "2W5R6rMyRFAkphivMckQw5cKof4pVXvXVSXwdyYtcN8o8r5nxC5X8z9Q9tWKGUUazTzSGyT25LQ3kNxuGXGVbdoL",
  "key10": "4kxpdxLDUZMkZdgcCEkRYpRZYBe1KQ45oghXpvkw5YEoWx12DWXToCssnAJknbYhZLb4VU99kvdSSpv97YfueyyK",
  "key11": "2bQ82BphQUNckvntVKgJTuDq4qeam5nyzr9Vi8bHaNLszR4ZJDcvXrff315f6JxcdZXUUFbRRdCN7GR5MfDhWWag",
  "key12": "2cxLPneG5TUaj8Y4pi1MSdSvg5uyzvZJTFZri9zeVcyjfcMLHvu2Ek3ABNVtbmHdvN4W6e5u51CeSAyMhRnB1qsr",
  "key13": "2y6fPKrJ71va3v1cPRzdVt191hys4voGnjWcWQQ1XNgNFEj7zuQSBtu99iRd6x84eF9dZwYaskVyS5JD3D4dvXLq",
  "key14": "4owxNpWGvmDhN4Hh1g1ct9ierk6vWEi8JrYBsX1Ev3M4jpChftDyxAJrWnJtsHcHxJAiKGdsRDD6o8K2TQbM1n71",
  "key15": "5woAD2MzEyrtVbEGbswGaDbzv2yvRa7v6V5foGvi8K3mDekiQTL7jQeeGbjQMk1gQVjUGVjuWroStc6sr8g8xyTV",
  "key16": "4yxzqUdnZyt1yw17Dmz9VaGRVLupkb9vTan2VVtaHudNJ9dsKDF6A9KD5FDx4hQJCmGUuQq15cFRXaUAxWwb8scK",
  "key17": "3qWDWZQUm9a6F7idsbBSLnHks9pDNVbgVvgBzqGMGHpXXgB69KZQAdRB5QcF4kKuMhsa3wGa5zDpsnqYHVNpsSZ2",
  "key18": "5uAAPNVjFN67psN3jGcrBdBYmTpoVFoGmcD2zELU8GBtqAxvSSj5ob7vTJYdczgtkcENqMZDHLtpUvb8Wf6SN7EM",
  "key19": "3t62M6Y38QKAXx5uA9vEiC6B3Sf67tWuPufMqXd6C1F28tmTAzARQoTnRoqKaVbWaVMbdYQmk8ecfvRVhrz2TBzb",
  "key20": "3fXNkq7RVcbsKFaYjqTNfQ5m5hHJrnZ75DAAACSsMGe8iFV8QYYafvNqyp6Qc2iq5dtXS1Wse6GpW774CVs2pzqy",
  "key21": "232V42WNBFhgG1AaNz85NhwoRutKNPHVPUSFMZLBbTGCYiPzh5J46N2sW74ub2Xq76icoAnpFAKi6qTj5HRWeAk8",
  "key22": "UF6iswm2ssZ1N5eLoxveY6LirDrnTDV6YeCs2jSu8xgWhvWHJMTu4dkV3sCMwbWra1AaUevYBKfK8Y4hZ2TtcRZ",
  "key23": "PDWmf71wZ9u7R7ChoCAisRzvu3fMDmD6e5UWA8jcBjnCSxXyfPvakNox4WWZwC3phrh9H6ZsQbU7t6tPaiDxCwo",
  "key24": "5eY2NoQM1afJkaDRnHJTcXnfcqpJN6YB7PVi6tRKQmM41Lo5LJoxxcpPVwSboZJgYR78oS6coBcypMJaCwALY5Zr",
  "key25": "2EHU8ehj2WZVT9NLXZyFu6VLWZZpSaxiyNpQSPoWk7kdKpufwt4gcxvTopUqwc21y8EVhYGtaSbteTbnDimkmp8Y",
  "key26": "2WWi8XRU3HP6NsEUUxgU7KxR9LVEgyp2upE3yb5v6tZjcHfXVzcBZQkXauvqX12EfGb2yWUg19G9vxT33CvTRCqM",
  "key27": "5t4mAXok6BWzUZtKw3nP1CJFtTPq1DveAP7vVqhgjbQHjEmvfab4M464MjGNt4M5BGN1mfxh7GCursjxqLLdUoGr",
  "key28": "M8Czq3nNvZRHMfNHaFGEmhokdBLphhcmrr83xaSx6W1NATWmjuz3ns7eejPCUe64WxLJap6QQJsXCGET7npYBsa",
  "key29": "tCupoNhp83HZKhX7qxmoByh2KW12LhyEKQQgvMtPstNMDJuA9DPAiv8mJZ3NdYCz4SyeXHHCQoF5D8VS3CHYRis",
  "key30": "6EQPneMpuYBZ681tn14JpLx17ivux84m1FY4K4aD2YqZMsThzZD6wWbd597EPC4BGnYH8bvDQLxxua1wmTh1wrE",
  "key31": "3MX5Cd16Rr8m2zaerSurQ3W2UfntkCbvZPv6QPALT9jbbzXAgLJDjwHw7BBHhfwKFjAovhbDRDxds4Tur4EuYRC9",
  "key32": "6GJVfyHEozMxBSQFg96kSZeUnS1Xfy3uKrmBq1WTGoCCREDiMudxKZ1zaA1T9ig3aqeRgKHBYUAanXxnvfZqAVu"
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
