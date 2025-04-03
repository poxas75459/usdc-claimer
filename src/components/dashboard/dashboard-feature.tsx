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
    "5ajpWBbR7dPZM7b9hniNBk4SLiCtLoHC87m5w1JoaHKwScxfjpAGNoLHd2oaFd5HSUQHD8BXjYeHcfGd3nbHjDgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XaAeycbfLNaLYRtVvdQ3KqkS7vTysjBFy76rtiMa1pYjCRjWdfV5M1BmZ7Agf6urjNMvn6kaZ33CdzhZNoHK5P",
  "key1": "3aku6GsoMXp9KQpBc6JKsoTJBQHA2nRbEBor9qiEktaLDTfFzCWyahwbCMZms5vrYK6jexNfzB613o5KTsu9KziG",
  "key2": "4gtybvyjmsGgky6YG9HtvXfDbNqeMWkPAVkAqxWeKjRfSvMoiYbSHfWyqV9QcA4UCuocjBKBBJoKq6HbeD8hqsea",
  "key3": "5jRwMGWgjF8AQVn4C8yX3VVBc8doD83xY6QG7F45VRbQtMDzcNWRQ9b5Ash4TdRbx1sWgVVtGza9bYXMQYpPdMzk",
  "key4": "53MYzP33pcxP2aKM9r7upra46dcaGh8isyThcL1npCQoNGjbZYLJ4NQtnV74eXjCLE3i7e8mc4ZsjwWC4oXHJvUc",
  "key5": "2petQkVSwePh3Aq5cxV7HUhnkBKSzvwyaQAQdmXyYGciQ6akL2JYHS5rsA9BprwwPgknHBjeBBUAZQXUYK2ZoDVg",
  "key6": "kMH2FLffKWSBCWtAcBBVWZcrgsNMybWeBadMMAq7Qjp14akw8jJAemsDZWq4UB5cWh4VuCVNW377VDhoY5Fg1bd",
  "key7": "5ztQyV7etJP44EiAbLZC6DJWi89mixMGWQPU83whLRovkem2D5MdUnWoVSqgyyH1NgLbRkM81529keG4N2g74N6h",
  "key8": "4Gz3FfdpbGcL5b9BT88bjeNnH29a6oUAjFMZ35aEETG8rTuWQ3S81fCBFzfyAXkGcuz3JUPPXKSA8LJfRbfWp4Mv",
  "key9": "2xrQucoNwQ7HqMi7Gb3ANpwfCGBs1MBsV3JpGgznqaQJwnNbPJMYb9yRL1aXD3Z5Qr3HfUFeWapRwrQPoxhxeXLQ",
  "key10": "35TtEfURDLgNCXKSqZtqrT4RVx6AAoHyoBVBUW8PzoicuTJWyw1fCtdDosi3NTXjes7UUqH7WWxGz5o9wSLsvTxB",
  "key11": "43vzDbKhnnxLgSj3ubWMpLD3E4hLaRMZfuv12nmbTYmaqcaZmgdj8rueMWWFqswvkYTMPe3PoFAf6pWLkqbY2BWJ",
  "key12": "3KLJK7NbCcq2N8S7hkiQLY6y54x1XM9xwJvmFYgZ9HEupfGJpFV5hz4L8j9NLCBg7Vjj2P32jVf32u6KbSaYLLLR",
  "key13": "4LpCYRkKwKHfYNzRSTxMf4mtD2d2XTUSNgTgFG1kw4W6XLucByTuf9yQdvejwUjhQgb6s8kYW6TgWLqs8bgKu3Ec",
  "key14": "4p26JZo8tm3DUJojLEHd48gvu2mCcisiVU6UpcMG9W9GANwetJwdJKFjJCwdpBgebzTUGfS23tXL4zw3C6x1jHcB",
  "key15": "pjfvhRVr42cCATA6tFUiY1xxFjFB9cq39LraGrSjvPUFtDquueTYJaPb3G7YiR9opeoFAusHfKSjkmBwFb5jeX4",
  "key16": "5UT9PfoK1ptsZC9dZvkJstsV9CswfmV1GdPERM3KJpBX72mGp8fAJZ3ZQECwAMN6FzgW6RfTfdn4gUC4D78YLE7c",
  "key17": "3cRNtjtdzqud52Zv2meGKsDGRZsnHdufPXLjSAccqEic42x7ZNCa1257Qawums42xrgtF1SmiDa6LuVtiYZiEVD9",
  "key18": "aXGQwrfpUxsVHPUDSyxEzwriytWyQHxNzvZivovyo18AdFum13WLjcY4bXzVb7MHie8derPsVE683be4MggGnXz",
  "key19": "67ag2BgKfyXHFAfsAnXra8c57zh1j5yBwBDPR1VwznyuyxUu2dDTBzhP7TA9yxVdHfjj6gTa821pCpHsjaaknKMs",
  "key20": "54ntVzBh5cVJnW2UarpQCDWjbukz2HhJqZ7KA32Za16zLdRrSgeCMXYma6BYPvZJJdUqWq5QUakMrjUMzrC5SfCh",
  "key21": "5T7kCxaya1VR4agS2eQ2DPzwYfP2frJCFBpqTcSNM1vv38vfzCLDDoiw4J24yJBWop3mvSn52JGwJbzNjjjtjLFj",
  "key22": "4sff8Ax9YcChHSTK8Q4LoqCtdxkgvQ3qiLcWopiY1rZ2iBysGVTyeFUpHB8mfJaGSNs1FwQ9Me9pWj8kLSN2PJtU",
  "key23": "5QN7GhHp1LrXGSd78CqRkfnGaE8zuYhAUuZZB8LMA91296cE5qvAipZvPUQ8qCFJLz9xP6NCHD7X41RMgZ2PNMjH",
  "key24": "2MdV9oLUnNK68M4uZTQNTsfTZGjnDSyQzmYqhLku2JXYTRc5kqEHVmxbqTp2wfCK3BJJ9ngjAaXsZRuto2UHH6Di",
  "key25": "2GWskezvfiqEUzEhi1ezUfiqybYg5bS9Rw9ePNm49XzzLhcc5g9WJoEY4Yfo1oWpfnZa8iLwL6KDosAsUkv4FXu2",
  "key26": "2Yj6TMJ2aUbET39ja2ALwXcT14CnymqcKmtweJ8MexJbfaiDJWQLMuU7eFf7scEU8qgGKMmK1zvesdL7czRjKFs7"
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
