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
    "46SnTBDv4fBZwCrnPnib3SnW2WnHjzJWj7RFV5oq3XtAAQvATM9Lq1ACGdf8uCTCLBYWAwBnLkxtgtKuvH7oQJq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TbhJQaEJPuXhx3cCXpAmj2xvr9b9SaBFt1LFFhkZ2nHhkc3STPnKVyMm7uuUq1PisS2GgWi3YW22fc6jKjUCWDs",
  "key1": "5JiuTUd2ARzMWKjWjtMH7R3TwcemGaBnhmHxjdT55ahTnkdoDu3ZbiT9GSeY2sUeBft4XQZg9dM4tpWu7Nu9gS7Z",
  "key2": "4zJ8SMm6KvK5UZpJU5p37KJhvHJGzM5ft6fY3GG5ezXcf51tkWKz4YDyLBdsyKKDYmUAyWSQtA7MH345aFdLPDWo",
  "key3": "f5zQhhvJ4eb49qZvt4nKSfwmxF6fuDaWge32AVWYpbz6f6kFw5FadJQcERosRujBWBTicrJXkpwFyv8LTrVfzvn",
  "key4": "44KMPK968zPMB4j5Qc6hDrFsxGWbgemwwLB3bBUF84JbwsqTiDvrTyWFPudjGf86uVkWikJB9f5aaevGPZVbbt6W",
  "key5": "2htisQ92JpkseAyHZUke3phqe28QmWYd7F7tNeEeGno4aN5J5aYBubESGgymWUrp9LPGwNH7BVYyqHYv81VHjBLL",
  "key6": "eshCivG2u8EXaPMHAYf1Cub3F2h1uu6B7d27WevuthipVFvy7Kdi9gYypt2EVMf4DbHKs1uPnbZJVGVuSKhATED",
  "key7": "5FGrvxccsGWojqZUHh8F1C75EA9HkM6E6QABjGEM2Tcy9dvrZVJWvioZ17MJvECtWxyUnhGGgQxpbK5iED9pcsNa",
  "key8": "2XKjK2r1mW5VpXhV8zYEyLhjRYqod2ahU8Dw99aVaD7p2kyR8Yu7Xf8hagsNGoxKVK8Bkq3yMLvu5ZkXpxwskrXt",
  "key9": "4pVj9vwZPrNT2aM2rfpBqMUVMpbma3pkjwEiXhoKxESuT7M2RjAHapd5W6AHx4QjML2s58YN4pHHPYf8XT5rhSEm",
  "key10": "r2GaVKBPbawbXrRP5gQ7Vi9eHCk66duRkUVLgU5c4bPVTKizwotwyYzkPHYbq4GaTN8iVUKZSkseWodmD8EKBeP",
  "key11": "2RukUXtmFpbxgkEPa4hNWdWPieZeYMSBA2UfFEBBEowKq4NsvZ5d7ZQpviEwMFk7uqDWqhtwsYeNNTUZrKNd345b",
  "key12": "LvJx3kyoCAZ9gbdeCRfvM6Jejvzo6QqLReqatefBFGj5wDNfzaL3qxy6yrdfyNo6yrrxaorecmy45DTXsmKUZJs",
  "key13": "21FsMvf9ywEp1MNSdLZqZdM912QQSWD6U68ZTP5n1MBifRfFRq7rBJHW1968XoNFdYVf9GdWQhw64NeGw1aybfr9",
  "key14": "3b5FdniWQtL3fQre3cvoKR2pitPDWAVfz4TnMXoBbjFUAy9Kcv1zsbNhjgsfcxBUDxLwCra3o9e8fJdJcJ2SraQ8",
  "key15": "n1Sgtt4wRj5JLmdxNyLRgLY47vDCQX91orEdar5njeVoeabrm4Tb4pgXyJsqhL7A46YYnihqjqVAtgMNcTjtdft",
  "key16": "43FVd3iqhHjiRk7BLwhnnAYAhsKYtf7NW6JciWCHc5bcfzxx8joP51d3F1oPLXrp8YBPGwFsgwjEhuSNGKnux7Qf",
  "key17": "HLQUiJutuhrBD7DgkZVGwvYJZFaTzDidN9JeCAUrvm7ydd6FQGpqcivzse2Zj89Q6M1NKTfmrgTpzeuU3LjQYVr",
  "key18": "312HUz2JgLUHsXpb4WdoF6itYtrZmqrBeoYkZFS9gkPtQUvbJ48j9mWjRZrzCfdgLAvbPykc3z7xo7DeQWFi7Wfa",
  "key19": "2ARUfFP9ANUY1e3EV6k1MEpsZRNWMZvVhb8umZMGBrDAPRTPP3tseXK9PKeuqTQ2sTk8LRZxJEMYhtsBAVEf1aTf",
  "key20": "4hD6aq4VYfKAgdKMCd5qk1mvgYMCZ57cgFo97tBQs6HCafjozVPo2uv1gcdtWqUVjMHWLN9b5huHtgqeG92yF1Q1",
  "key21": "bCg5hDR4jD4RWRLwLujj6jXLGaS752WjkC2mo9xkssYnim3fAc75MWRUXF8UrwHk6va8E6MGNCYafdtpkat13Bf",
  "key22": "4RCVG8tFWMbkp6ArHUEZK22EX6WLw1YF9q5iCobcCr2v6U2fNKaHAWZCEXRgbMakwc33uzKN2NkR3a4VhXAEXRoY",
  "key23": "4PeKY6bVW6ZarECAGzEk5vNTeURRDvEdeKb4onEMCP6bq6UGccqjnPwPfjq73p2h5aiG8pyL3b2FaYjMWVUCo9ro",
  "key24": "4zxHaMDh6vUxq8bddfvTLgJ6PjqPFG6MUcy9eYPsTepUrAuWRE36XsZFSHMWWDyZq5B23SAosX3GfjMXwzYh4iz4",
  "key25": "5X57vs9z9hdZT9wUZziLzw6rX4zNnm2E19UAMnqsXTEPDNDdf17S4G6gyXwF1aVpAYUVq2bzCvx8y4aLmjndsCtf",
  "key26": "gbYu55XjPCGttKum5ybTpfvBiX7RheJbkospcFE1U55U6dtQNhrMn7jc4F1KEfxxHYXz6pPZUSPBicMcDURV22E",
  "key27": "EaWNQBKt9khaqNDUGghXQScvwTC3peJqdUeuWNir7r8iGKfa2fJ6nJY38d4jewWiKjSuGmQbcGezgxHo2gaT3CA",
  "key28": "qKruKTMpqWufLG75eUidrqnGGKx6gKdR3qP5ZbhosX1kZXYPdkyf76rWupCaKpA1ugEa8zNRp3ZpRMFK9TdzF1k",
  "key29": "4PPM2bYFJQnSdZ3CcCxuALVuBo7iJopmPgj9EvwHzn1bzPBLkVExUNJFTtZYFAZrgJzVRxULwi7G8scUhLFmo177",
  "key30": "5rSK1bVrJtu7bpMeiS3mZGBQ6b3DEyHhNZt35qr1WpMzJxdA2vopfNQv9a3zt8jH8mpy1Cdqqrc9VqMPyf7FZq7g",
  "key31": "2uUDSf9E6Jp7jZSTr52KygKWG8FHD17RftGpTNUoHuhgVinwxs4UhSXmdYC58dZXFqPb14TUqxXZSt4jgq7wMMWN",
  "key32": "4ScZPe5Vg47y1C8HAQ2mHWfEMQ3cbNuEeeRRzPuyzhSW8QzsnwS4XEk7N3pfPAWds98XgENumnoCarfmVphNu4CK",
  "key33": "3x5NZxiC6asraBekGki6TxdVPSG5VppZj2ArQbAcLYV5kcDuvJQvXABztFH2drgGuSBtrkjcWKmzKHa6aXrEg4RY",
  "key34": "5UMps33ZjPzA6tDeeMMFBTp4UVSxcLWdNw51bkBtUa97WZJsSuyriwp4XfTfXS9T8ntCTijFZKoS2hQ7dQ5qLJnk"
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
