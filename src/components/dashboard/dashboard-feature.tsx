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
    "4dAv9ZWBq6736G2nZm9zdU5HF7uqunmB1GnuLauAme5mhhbX3ZbiHJE5gknxSLpfJRedAETmrG49QiPqnieshA7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XB6VfpprZbVsLjUWCewJfGRvH7Unp72En6mEFdkzwi6sefQnvc3F66Ly23a6Ksah8hrxayhyeWtg3dp1f8kYxMv",
  "key1": "64hr1LjJzwcwe9HeBHUQtkZr3NcaXDLhij45CkBi4zVDwgyz5NC5kvubkx5m52KWQEGn96w5hMtQ1ZP6gp7cyMjF",
  "key2": "2d9vbuH6YwxqcCDCgM9ujKMZeSuuhE1UdqyArPGERZ4cxFnfvQWFGiWzvneHZmPDFMdHP3jtwyGh7GhWGCeCbUcL",
  "key3": "3CuDGRox29AUGZxp2LyjTBZuia66bdTBpm7tmEhaagAegJnr2Psi3JL6oYfqyVqYFgw3Qie3EQQrVfnUBBo15kb6",
  "key4": "4zvnhDZwEYV2EU4kpRVc6razSMYVn15Am5V7zanjM486cmnY4DnkpKneuTayKY2nYixSRGRsv8ARBVg25SF23b16",
  "key5": "2k4qSqcc44xcgxsXiFHzvYXhbN77vxL1L5MyzyxjwRZSnwpKAreQKuEgPjeP5ddvwMMAQUnpgJmyjDxY4cEemhMy",
  "key6": "KckCTKDTXzMEztmiNmxYJ8spVxibgHH2DjYWWZbN77JL8RogGbeTMbD2Rw6wKPqQrmjWNkqdw1wiyEWP44EGUie",
  "key7": "4RuskiN5Q8EF5WLTJqrABhDnoaDx8KBdNXh8ouZFxpKdQum5Eh4zV2rFJVXFcR4Hhtpt1ZPobTQCdnBBVA5j8KmS",
  "key8": "4abJWSqf2C3DkLXH7xE1mndPesM5HxQYWwqWVvfDy9WiDmJKMVb75XjMNyzYV5G4YEYZzCquFv5d4LZH539G1Vh6",
  "key9": "3Htx3xineH7DGYNHXotuW8wqiaKV6jZcLdRniPVE1biQPEF6S3LcNfP92gA2LEzMrry5GuecSXsHATVPb3thgPmE",
  "key10": "4Paj7YbMGBrABmkSBM5cLBcZqHSFfiYDH1DGYUbUGKcAVqxunHyauTMxN4hFC8YqgGep9VjEC6Cv6kxfwU3e6QxV",
  "key11": "31eVaScNZ1YTwA46jeyDkw7UBjn6yXSGXZnue4zefJn2DYRQ5BqiYzaVFuHg3sDeuLneWMM5kdViWe4WdhT9oTqk",
  "key12": "3iZi5i8VqPR4uYsKyG6kZWpadH8i84ozn8o6x23jv6zsSs8FeVbBU8DnHvMPf8J83aCoH1rkcdQRtaECDD2NBKyZ",
  "key13": "sURpQwpiwvhDCvXtwqwYQacGBRctse7wek67384k2JudheEeHaPro5BGWo9MuFzXLdsbQpZWEsNyKtpxPQNddQ1",
  "key14": "2T7y1A4Gbb6sSPRCFiPfrBVdBPvof5LQbcL4ydgrCvUieustYDqU5QVcUK32qxwxJJAB9hMQJqoGbX4vvcBHb4Ls",
  "key15": "2SB72YeQeTr8MMWwb3caikSWZFyAKfpZVxvJ1DekP4SDaf6ugGWytAaFRh9HW3dZVmJfQmSBvrtiGH5KVFetckQZ",
  "key16": "33hkQCUNSKpSbEk91ra6hxhhpNhAedmXDm5oZ1TDwUrYckRrpARPYYQVAG1qFAtDQn4cg2xRXashJ2eg1bYY9GzU",
  "key17": "4tpxA6dAfWVdxCWeqEgf9hijEJunzz4yw3HqjjPv7YDQ1Xag4vFQWDAWE5mHMcV6nMrfohNcnHUhrzcffCd4SD9W",
  "key18": "EQTuQpYqMJ91XVnr5pLkvfzpwzQsxvtVye1pV8j7QZFQQvzQnYYqHey3oFESsn9zag4zWsyp3tNfgxRACedt99d",
  "key19": "2NaJAfKUJzPRBJLAY35BUY6m9xqWqe6TvetXpopo8szayzNUSV8ejfcFfHkYv7qpoPxnZr1XMaC8RKmDJKBQaA7e",
  "key20": "5dgcLX9RzffGy1DJzAPk78yb1M2gTCUKugTMbc7itVNRoXDqv7uCHxt52WGDv2iEWJUGZ73Hwf6SASVDh7D8L1yQ",
  "key21": "4vNGB7PtSNJDBi4RwDky8kceqN9yDYj49XDMcYHothPGnqnRt2Ket36PcMESwR2TsQyXDeMP83WStyfgDZDNajAf",
  "key22": "31B3GmHMa5VijEDwcwisRfjSVe6tE2vkTryMhWH2pwvDCNfYzwvPFSG5ZhHUFcfjoGyvD9A3s4zRHX54wYLgd6cK",
  "key23": "kQoFCpDJ8HLjf9pCgGufg9gXw91UVwTE4oHmSeTLXdkKhbQsjuc5SKuziR3bQF9hU6e3GNApDJbTQHcu7PcieaZ",
  "key24": "8SFg11i3YWYUVfc4GhiRfzP16UXGQoQDnqHAmQjXMk6gGQ3K1ptskZpWRL5uuuwoXN6YfgwpJ9XYxuc1pbBsCwD"
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
