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
    "2R89SzASEoXrCaZrkzwjtB6Xv1m6g156ganRQJ6cAAsNCGkCrsYY8YYNtWyMPnJQrhbfaQm8pSoZ77Ya7M5MKBYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQdgjjYo9vy2iLBF49vs7xMqnQVMjyFrPq5bn6UX1Xybb13fsx2YL5bByL5QRefnCaFzrsebwripuAZ2RAPiAuN",
  "key1": "4xYx91LS1DFpMj37QcRyTtKdNsMtUgypLPtUrGoUgxSR1tR5UJrcer5j2LsZa9DRkpyvwEiXgcqDGhaVcT2zU1Rm",
  "key2": "4czGpSeD3Nt7a7UwzzMLtV3CLUVexPpG42rK4n3hs2aXPxtHsrqmjFQe13toE5X6838SRJ6kPHf556fQEHPmZ3C4",
  "key3": "68YvCjaA5bcBJo2GUroZGdT5yDjH9XKEkDtYPkA5Mey4UatDhY5eDGpZnAqmDLC11TepdudKuKtVVpjk5R1Nwg8",
  "key4": "2mtBXCtwXQCdoRxuhLP3BvvK2F9nGYtrn8vfk9KZuKgUiR3NiaEXNTA4yL34k67qfXJxu1rLBiiFeuSB3TX74iER",
  "key5": "2dVELonghyVnJG91n5ifmN8WhKFYQFRy1s1wWESNfo2JZNaWCdBr2ZJD8JV4yyyDLQawSZf6aGUMUvpUw3RvfLGT",
  "key6": "5w3qKVNpx8NwCM5NziQSyjqoLnor2GCTweLozghu1xPZ9ZKfbjBNT2nU2Hj78w2f7ZKafUPtmiXnxMwL3hHWajjv",
  "key7": "3r1p52wp3rBrCbbwaQRir3WnK9ZRfVqkpxPc8oQRefLxRfGmP9PrbpDRuRodU6pHjesdA135woiygzHsUNanediy",
  "key8": "2LjFpoUMC3gwrzPCS1iDm4ov6qHfMMVKs5JnSNF6Z1foeeAi3CQ7jH1LuXYZLx9awT4mNxpFvDfQLVprVgBziwLz",
  "key9": "4crjQfWtPBSV41ZdE5zjEaNf1gfeB7Pg4715BHTRpL3eqtWHvNt6qN3bDBEmoKLHsBSgEaTNASNwvotwSrBL3ixn",
  "key10": "3wJfYHwfhjD1poeyqEPwruEBrWPrrRjhaAtmumjBn8g1Hxy17tk1hQwmebVpW8ceB2ZYsmGSHm3pgtHiy9ZMd5pe",
  "key11": "2Y4YwovEoucjeKUguvZpdAX6HazT3rWxcPdbZpaZw1noeGrRXZWSedN21icHvxtrGw42FeypJp6EepiypgnF6vxE",
  "key12": "3w1qBZXVMmyKPcwZ6p7WpxZkz7FxMPuWWqBWpBzxXbiy3eeii2RZK8oRgTkGGySW7NfsQkiCTqXPFdy3B7B4s4L",
  "key13": "5dTzNfhhdYECpiZkJMDodwCJ95H3n2d6gvSMr4RMkt6GPhLgL2jAdJiJcod2o9rDj466f69qwRotVERyY5uuCgkA",
  "key14": "2ALVQwGMPtjj8ZFUuEGx25hL5hYzoS3E7TSd1kyxSSwoEXw7h7BCjvrNtdLL59TrzkhyNix644Fbu3A9FEHjoKoh",
  "key15": "2PxcC2vv1f3ViG82fgWCBcQwDevotCBaWNQNMf9rhJyAy3htLRg6FinwndfoFE23TSeBLan45FXr4Zer5G9DqjYT",
  "key16": "4L8Ecypyygo4ZZvq1Axf6PNNicXWhKqhBs33hfxLgTHBekkpFvcMMAdD82pW1vmyhtjdWhhzupdQwMcGDbgPsYNv",
  "key17": "L5CmVTMgTu5fjTNdsSFxk5AYFtjY8xsYk4i6wPKyk5912dQffL3z1dQEkn7u28DgJCaePte9uarBzVoSQbQF91d",
  "key18": "2MY8acAtxnsXZ1Jn8Bh3U6Ho2gwui1xZhi3tTy2rjHd299qGWmgiGt1YM9HkmRtQDAWNz6JkbcJFNGa2JCmiDQYH",
  "key19": "3hQB63m3L7zB629U41wyErshzwDU5Tgc8Y56WAQkQxW3k72oMq39dJWgZGXF7viNTNS1r6mGTKL4QfzSJxeuAPX",
  "key20": "2N7VrQs1CrigBytDPrya51Fkp31Grstd8pGLfRsA5FQW3cJ66woK8CnAAbmnStWmJSLZfgCYjp51XUhCjJjG6tN3",
  "key21": "2VHiumyzuootDVEHgUt4nYEW8xCB3jAtyaFTaAy71BMDYQ5UUWp6D2Vqzyz5WVPA84LEiAUCubqXPNMPVnPsC6uf",
  "key22": "2D69eBKKxGfoATcpe1CFMQPGHz9gWPpdhWiKM6RmZSK585qa7wrJVy5Y8bNuCrnWMd5eLbUWteZhLpUHsjskLq7z",
  "key23": "ghEVeXWNR3CV4E72DjxNxwByGRfPHJLqb3uZdSp7LB2HHPDesYFBjy1HUUc4zWtpUGwXJyBbivAab71m7kTrLh5",
  "key24": "3muf9ZD8VB8kHW1aJ7D2rRaJPtuYCYBJBNSXD558zEzqURzXERxYvyMCgoZSWtidKMDGjsdRjY33LgWhgmexK3JK",
  "key25": "3iH5ndysWJE7eApL8ZzAH1ay2Dspm4SfCWzGbWWYm4th8hJKTEU8F2Jz4EjwtyAAFep2VXTPrW6YfTcHQTidnDg5",
  "key26": "5v2zbYHM9uJ9nwnt31d2wWrjEiTs2UA41xKoHqTu4kMKzvSmVXP2yKaRAsLtV8sgCS93LknzMCoYLYdg3XZ4aebx",
  "key27": "Amf4vQqRuWb8pYprX7qj8DpEHmzKeXSbyiTTxEunok1Z8MX2EXvcVHsGi3hdBC59ffDgAoAHbrf2Hps4m2i54Sz",
  "key28": "2FSFXvd75B6BgaKvCHqYWBK45Fmo5iPLsZicSQfJRuubdMPBqxe95X8w9cwqY4jk6MKoDq3GTHyGjQQZ9e6VvMWo",
  "key29": "2skEmdrVkVw3PvCErrVN9Gmarukj8VazSTjTkz5f2TzQJid4zkDGicpLW1a3teMxBgwCGQLnCQkKB7xVi2MhnFtt",
  "key30": "5ARBtKc1D6kiN7sQx1EbpjXNdSS9EoZniX8LeWNBj8QTEkTAhEMi3LaaBrAuR4Bgf7mW8mPnGM7Rb1tLuxE1oEJp",
  "key31": "3fHVRpCJecvE3kyBNSFzuhPzfK865jkeaiM4N1FzLRqapirdh2mHt914ynLyVnbc9iUcGDfNBvbRTWkX3BfSVY45",
  "key32": "3mb7eYE9PJWca3Vbwf5JRYqjDgM7gzd533DH7M834VUCHEbhY49ifz5gm1QSoy15gzjEchtQ2PfNFFzXYebpskD8",
  "key33": "4CBUWjr9xQ14kv7rJJN1mdpkoSwCYmpsJfVWzMSuVTL295pwtkKpQYgSWot67V4KSwPkK5vvGtkS2gychzaFgDCH",
  "key34": "3qU5W986NBubnv3F2S2mYjLDJxXTj6uVakPwd75K2ZMrCRqEDVZeewSSoEAAUPUM33b4evXeqLVqUQtBc8mh8RRJ"
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
