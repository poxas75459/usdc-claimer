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
    "2XWmaghfPEYCGWSaFzA5CvRV9sLkRdi42xmEi9g2bov3HCTDrxsLWQuBUiYHD4U1hoDkPDQdHBiYJdiftg2DL8C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483BsGJMyUZ9U8ea4ro6mgE8WkrkwNhjVmDW9tXZisv6dBdjuiD7go7iE71xCxg29C4bHtmbXp7wGy3HkLzSbuZD",
  "key1": "3tMn41VdMwDNfyvYSukBjVruzguQC8hHRJE1uNVEQbMR8LzaxY66htxmtjSdi1mv4JbDJBQxZ2P4zev5CuASo2Ji",
  "key2": "5hgwnCzDhUNoNe8USLNqEYYqitk4QiaP2FzGZ5VytkLTWnbNTCSUpttzuLRtjzB6ybw3hwCeNHZqQxMeN8mukJZa",
  "key3": "44vaPLj1WeAgWzoLuQRbQtqouwv36srq7VAQPy2wrGNey6bu84SfYmneCn25rDoxRHoBocw3qa223dR9xzc9k5FU",
  "key4": "3foZGVLzkr7eeZaenJNJ8DLhVP4QLVb7h2GfQuXKFj9hrNqBrqZ417Cd45kRv9hCbWpeTC9QtiZPCM1qeN2to5eD",
  "key5": "5jLyzf1y7xTChAdTWahxCGGwj22FmoZzKveXHLdJRRf8HSFPvotkFjMcNmgwARZDbAmygNjGxKQJ9qUSQLEAicUQ",
  "key6": "2yxVQKWRWqYhtjgaCXiCZaQPPVpSue8TUMn4zhMtKuZciGS6tx3ULYqZxNNjaEgu6iVnNr5ioqebHyBkvSQacWUU",
  "key7": "37nDXJwxdDuVYaXvHds4uFeXTHB5KFiiDMbzs6uqBd4qbtPBGNp974188PLnrokhxMcY3rnJpFvz2vYba1ohBF67",
  "key8": "2uAhy9X9vwEPRCrho8g1mnnJUGjU4tE6d7sjqtfKdb8fCqAN9G6JiRFVyWaNpGGcY3dKsGWWahohgB8851zQrhum",
  "key9": "3BDc5aeKwtdUqMhY6JodDoWhaHALrXkN8ahPR9vpD7WFmtMHYRnTYruqs6u81wDLXj2K6Gs6iZDxwAk9xT73C1VN",
  "key10": "5wbYsWhtZpKwT25VYkcvN18GbdYYQ54A1nGfd9t4Sgq8VyNibedZAr6UP7vSBRRwPAiR6coyqxLedcXfdPpV7Ujr",
  "key11": "3NhQapjerkznxGmR1zuFgqmwPndyN6iGQswesLBagLnBh22KmPQPyoUCaejpnPxyegWbF2smW4689ssLcEXcXSbS",
  "key12": "2q9yqDWetpPYDf9suNkZ5LeZWH52hLXGemgL78StzvL86adjnxmjWDSmopfCsdj4tkgHx5kxsMTHVAgeLjeq5aR7",
  "key13": "4Zrd78BqCm8Rb1zsrVmDEkmVni9GEPbvrdqCHT6gFeRGKY96bEDuEYGBE3KxVqC8GNhc7368C3yu8ozaR3WyD39P",
  "key14": "5esU2CwVtxxuQQaLtATvqWzBKZa5RG4VQLyBkBQTecRcfED7ENNnJ3EDZ2xctzmDBAnUWik3JjXBh5p4RjwhFMCz",
  "key15": "2d3KGyS5U9Jjy3vwbeVrBqmZuHGLGdACdz3UoQSqN1MaPkLZo53S1wN9ZWCDiR7zvdLxykfqaEQnY5Q8xomb6aEs",
  "key16": "5cqCpkawo7feaLCStvdk3WxmQ3REAnv4yUdiQqd4KtwYoP28c1qBvLuuY6mFnnEJdtkAucwkAPZtcDeGSptzJhCA",
  "key17": "2wUQqGu3Db78T6R6bqGZxiKbdVbfj3Q7Etpc41MGfwd8bYfoD5y1mRuwyEjqRnpGYifwUqCXnzU7DC4EaHPbKRuz",
  "key18": "2CF7SicTy6kHXLodtR7ANaYMpjN84remrPQ2CESSQjeZXxaCv16KkivxiDcXzcGF6rTsBH8A8M6TA29hyvaqHQPG",
  "key19": "3pJJgX2kCKKsiefUyV6ed2Ujs9BnXqhymyGgQ7tzDSPyYbvj9967pNVVJzPn7LzUmJciNFCqcpCtLS1EG8e7PhGw",
  "key20": "3bivkffxQWDmSbBCUbgeV7AXrBLPam7z3Cc4XqDNGaksTHZRFFZot1pSovVs42ovTPrh5Xh8TVSrcZaRCAcSU5xq",
  "key21": "3Rm3p2ngk4m7DN6x3Ajh46QqnUwZamFwnTNEV97CPLD1R7qDgc83ADFqGNAxxBXmrUMTmo5z6eqLYnLQAHSwErXD",
  "key22": "46d6v53DVG7htKoSa4Kmv4J2UE8RqPcbRHuLfUVfnfsxEq8V3Kg41ke8dnF8CCxVjsc6Uxm6NY5Ncado7NSif2Dt",
  "key23": "3z96u8K5G1XQYdiEk3n1wjYJkmWsFnNZA3gPwy5uma2GuWpV7s875hsP6Kuk7uP7faUaG62F1TDetpEJxeRumX75",
  "key24": "3PvPk8gRqE8M86RtoDNg3qMHfZAg9hGraHgD6j2Vq8Rcic67TSeEfAX3j1pLNaCAbKPwiXFf4kzy6CQqL51hc2GG"
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
