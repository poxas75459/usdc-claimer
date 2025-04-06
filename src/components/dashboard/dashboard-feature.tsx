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
    "3UhC7F5L311pBF2QrDGCSzDDG3gWfBawkkKxPJ16XPKu5VHumJR2SDzSudB2A6aQJZiGoum8PWkymt2dg9vA5dBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWiY4mTaz4W4e2Miy1rETBcGVL6hYL5mAKMm1efYimtLkBhwbV32yMCaGLeL4SaB2rtN9PqEnZsHeXykCiSxtxR",
  "key1": "4hHwUSNUiqYgL7hLy9zhjqSjXD2SWccNZ6TThTz6BJhVJhu1ov37xGZokVbugCzZ8eQnhrnhSY5FAANHeAFbH5uP",
  "key2": "5wGQt9r5zxkscpuhmp8xxLKVXxnoYFtGAEXHNgMzZ6Gbnmhq4DWBJkdanQuZVy1pUPbRrJLdxcLkr4TAZeLXCoqq",
  "key3": "4qU3yit9aKEpCioSnthz1MVhyKHAXMwzGjWGKp3wRhjVxn765djDXUK4Fi6ezipfCDXYirqWJMy97F7gquZaynWY",
  "key4": "4GQ39mD1g8qv6q15dvv8pqGbFJAvjUTCvsHdhAzPJWxc5AR6padBm9CsvTUuDjmdbySVCkc5v7KESV9ax1LEjjK2",
  "key5": "53hVFckptf2iNzeHgkiCtXK2briKEhG9t7ePhuVV9S39Um8Loe8SZAqoEMZ4ascqZjDX1z8Q14kudvQQwc5gu1zw",
  "key6": "2waz6tzANAR4FmhE1Ccr3fh848fifwFT4gGNgYkieK5yp3VAX8HpMJAb5QVGgMxPVetDGedXYtfKBZC3rT7oDyn",
  "key7": "38EBM7ceqavi6KwGt3LE9r4YYTMDrJZ9n9gbUjzPKGQm487KakdevmQeyPCDrdgB2VW5zwtc86oFKseGWJ1SieSF",
  "key8": "kmkDgqYHvoV1Hih95AjV9i6yQqZtLmVspv7cgSu5zeuWoAWxvdBULMGWR9KCc7LWuJSGmypdZKTcNf4oeEztGde",
  "key9": "DCnvU4vx7r32yCHkaVtehMw8phT3x1CmKRJKkuNJy9xY6PMvic3yh1nE3BTn4Z2NZ4kjvwqnjyb7De1W7E7R6Bd",
  "key10": "5JeMpUbibDtPs1DyC9Rec7EncrU3NPewimnnB6VmvRQn6hetRGFUgaySc3rbyXsqw6PTS37KjBf5KuLAjyKrpUrZ",
  "key11": "hwZ7p6iu9KyFy3jcz8AWKRRBVecwwwZ3otWYMWQJF14c23KC2RoNSg2vNd5kZigTsg1G5nVncvageknBthb1hkx",
  "key12": "UDgUrAkm2q2a4PNnmgK21ry8nvWLwWma5hDtwn1K9tZ4oaxeEGxYdLctjjDLJg3KAa9gB62rNav2CiwN9pFmDpQ",
  "key13": "21gmAZVG2RCTsxnuwoPNdDHTCGqpMzbPfqaJjRaT1R18SRDqpdzP39U3Sq5AUGgCwXFjbXTMwbAbd5erYcpEZKe2",
  "key14": "4uuRqVq1TP2G22akgbBkeHeeqoZcHQNdx8SVe7Z7yYQj63pK5tLeDc59tFmvUVhpDUFdGc9eRAcqLN58VYDq8juo",
  "key15": "4pxBFg31AY3rHSa4dX35Wwg7ebntaK27Qbsmike4AVpuoNc8Y2jGyd6VHa9Z83karjefwUAH1nduhiJzJX4Nv87j",
  "key16": "4qcXmMEf1m9mccpXGMMtuPx6c3vV7d12TJ9euZh84Nx8w2xNtB1WBKUNmHYpskKSF7mAQ8kfyf2jH1CmdfvNiTEi",
  "key17": "bBqTotJNoE3aMqSd3zwB7Hyo4jR3M8FspZVz54eZGXaH55oM1USP48qX7Qp4ZqRXUPGKQNi173jsD2Mr5REwqsZ",
  "key18": "2cZchUdLka7iSc5fPfFUFmsjanT9b5hMpXCoFyYaC4WFEWUKaLatLdK1Ri26W3PUjxg8u2ge3XFpnU2TeZCBghAo",
  "key19": "5SHsdLDo89HtR3GCaTRot9TkKgzespLbSRTdpptxSsHDcab9EV7azemAn8AxtQNwP6LB9dLY429WvekrbSkFbujG",
  "key20": "aaphP9BzofkaZyS2r4TfAyMGqVGwdbiHqZjAmqvuU7SHSAVdB3mCSMpLcuAYnCS4a3VzvkAFezmVswUkWwSCwEY",
  "key21": "wro39sApf8AoKtVDTtXDUKkYAf25m4b1EhYcxqaiUc5Pv3NoPE3zx5Vtap9EwzaYxkNSvy4q2pKJ78SmJCs7uhv",
  "key22": "2WGLhbtiwKwzzjNi4nTHJbSTg6GSktMwXbQ1wv3M8baGKgqXEkQ6EQixUuHwygLTTU5Ce8ZGshgK59tDQ8KpSeWv",
  "key23": "5fu6kYhHcHqcwnswfQi29ddjjpG4VDWAFCSYRgaaKxamXTgZ5dxPcbjdjE2Zzo8ikpYmZJv5QEY5Ucgss1koiH7K",
  "key24": "4EMfEH88WCrWVAHKcx8scoKGn9RMc6V2KkYtd7G2b8QvdLZBFVeU1XJdq7XryKp3L8YGZw9rnXhAUviw8dMy4mnm",
  "key25": "5VbNGTZhEYsmRZtP6p9mzihXud33wCuq32wJ2cppC9w4mELTAChYdHXWVhcgzoj3PnAkmHnxhu5NBS6EW26LJCzS",
  "key26": "2viPyuo4pZB6cP7AWd1fyRgrBWT5brfakheoYUNRhDFwY3R8gWA5zmXpPSa3oDa3TiAAWGpUcW7nsAerHfWwDYmy",
  "key27": "4qYSoT34vNfNXbDUauaEH8dq5N68rGKb6sfSrdzxs5XxhjVhoNbiGsqVPDmP3exkwrw5i5BnqsNeCL9D72wMWLB9",
  "key28": "34TEExtS92pF3DQo1HN3vK4nR9zSmQvb9EVb68ziHF75UKdW8rYnjsbjNTXU9GkfuVySNySAtKHAdDxLYuQf1bgU"
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
