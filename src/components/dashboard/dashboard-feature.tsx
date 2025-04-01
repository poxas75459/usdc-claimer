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
    "5843QAdd6P8bUtrgwwabgra6KPgteRre45P1f6cBja6RiQDrGvGBYDsdBUjf9AmWdg23q9ARxcpz89Z65Zj4d9CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PZP42pKPxBb9ZfuNpJMnsRWc9N9XJgHeFXR1CPBn4beNmGiaQNeskThUZeaubjnSnPCTKnWcsmT7hvHZCMSFpZ",
  "key1": "yrbRTBVPuzzbGJfNDjRGU7XCYujZQUcCTq9JtaGAMKBqY7kcTuFxPwiW2L6k7crbkV1WzBymtec9Tr8C3jiJUPz",
  "key2": "67fV5S5g6oxxs7j9sFyQMtgEybssYxqfxQ54SycbPoG1qTngZbsGCzL9ovFsEFvAMqAJw7rhAiA4wRLBbmdsjqgz",
  "key3": "5cTEePUL3dqpM3sHvTXbKbqstdXYjeojTgw47iryrx3miLuM3bbpdbuhFCVyX5RJkYGeBpfzBfqbFhPCRqTkvjBE",
  "key4": "3KoQnkLppifmJx2z19iWea2JoTiwZmqdVeseGdYocV9w7fZdBT18uxXnHGUCdnSwrQzy1p17ffqCJrMauzuqvrvL",
  "key5": "49AEjJyqaFvV8h38eD9DYdpyUa93Kaa6nk7udL82UhUmfBrjkmDxTzdmyzo2XTpuAXAWX8PmWNGenxCZF1GqZ3EV",
  "key6": "3CibzkKvhtrTnZHAeE4RyXeBwHNTYyQJzLNA2TaAKZT1zXHKG1csYhUKVtZxbG9Z7DaVD8mEwggn1vYiRKRuzXoF",
  "key7": "51fETnaEskMMr697GDBpT7CGBwqybpE1mn8F3tX7iwCoeKtzdmUSf6uF3NjMYkGihCEnL5xoTzbdyL33Mv22DagD",
  "key8": "p98HsGQHhk5cFEACKbtiBtvDLuyTh5Yxghm9ZGYY5ySp1kuY7v3GnDTAtC1nhuniHkLgwSzZk674CB78SAyPrt7",
  "key9": "4DE4LahG4o9zrTpTH8X9yE7daXupftPWKGVAupQ6MQugg1U1WF2v96DahEXj79FrtBNemg461GkHFJdg6Zki9FNT",
  "key10": "3hn9wfs6Yo3kMW6hRM75mFdB3WWaGP8wwbCBM93LGGVT3TzPH62YKn7tYrBqDH5Banyx1FPMTxgBdiHJghXUK1NT",
  "key11": "3GYmjfxTrMXxFmhxgnEBddxKLkPaMh8e7yZSenkzZNGkP1BJBa4JLmHY954WEAMNx3wPMRpxfSx4Et71yi2PhuTF",
  "key12": "2itSaP8acwuQ8kCmQPnhJ5xf6SMCiVmVXN2V5YuY74oCERYKD7r6qCwgn4yZxM4RXCu9kv8gULDsmwYaiizDNkM3",
  "key13": "63r63mevsUALGBwbdanPSRCkBrcEppGqh3g3F6pYni3btnvUSGDvGV7C1QbuuTovtbrW6Lv5GR8UfEuxJ5DERuTT",
  "key14": "3tqtgbzn417WSSBN2kMRytwdZFhow9FByCGo4Xbdq2enPdNvdQor7X9XYeRMAx7s62WDaQ6wupcP4cYQbZiTgZAq",
  "key15": "drq3XAQRKtV1uH7WtcTPKyP8CbJBeuiyc9ozLbXMvA6PcTn4W95Z1CVLkGtC6vEnnTiw3ujFqtkcsrBNRNMchan",
  "key16": "5qphwULxbuS5DnPnLMRoebmD5jAVcwFcpkbWAR6knhDC6Xo5EfW2Lo2TWDC3oVpnXJSnCy4LC5PwtApjmMG972ZR",
  "key17": "kcwtgJ1qJksWKzWBxuex385ecpkzdB7vq6G9DbED2HrouLsHX9UPc8YpdhgdbzuD523kA4DR698CkV7mZ4JkwM3",
  "key18": "66j3swwqhPbZrcNLeRejbMrKYgkSJDJxNzn2nM317TfEYxEB36VunwqcKbLaRqQGBWmQ2pBSjz7B326ksveqCAgL",
  "key19": "2jqXtGKz7rQLLyZRcuXYVLKCW1jzkvvAotzwaikZaKp3uGEAs9Aar5HGr1gLwZgP2qgKbhbzEYAoFJBfW8Kh39xQ",
  "key20": "aDYPFZ9xXfbdZKcoFacgBxatJS9ZRdMqR36vBBCfJ8VdMyivTRgioytss7GPduK7xvMpoCwGE8Eq1JkcqLjD7DT",
  "key21": "62eXfMdbLGjLRHDDNWj5xYC7wFPJAXZyW2d88b3MuDMKJ9Y6kbRcuRjUkKXPvQxyWuetvpU81vaUetLSKGQ4Ptuj",
  "key22": "3Xw31u29mnhHS9EMX1Cpopbw4wcXssbb2rkUFSVFithP4LeVfgnyWPF4twZrCCzvqfcQubudmidhymy4FBoT1sXR",
  "key23": "4Sc3Jzb8XM8rgoCdnHrEA5EaHzgQ3tmYu75MaBz4e3bkc2iBEjm6bJaF8r3XSG9yhjyYZ5qnbqdmUgEH7yTg8bmN",
  "key24": "2VnsCvgm9mx7snXCSuQEY7YJbn3UYBoQNC5vJ2zb38XczpXMu8Pi4QBJMpHHwnifjDU3JfWGkEquLwTZqWNAcZyd",
  "key25": "Czf9XcBdUtHa3zSLqgfhJe4w7hPYxz2wbzk1CPg3MjctXAbZkbWxbfFBRsbG2R8ii3TiQDqNpVLY24XyRFHhsGX"
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
