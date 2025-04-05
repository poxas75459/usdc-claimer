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
    "28r7fVLj7HqAq4np9RRfq2pJzBruE7m8Xfcp6QT55JqZz8xe9fSATKTg8WAiQZdpCez4wBgmFUu4QhUjWCt2EJN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuHGGQn1eP5euEfkqD7RKXSEpJF2DqeA8d8FZ5pXfTKznN643kqz72QhHWZcSvaeKcQtfACcjKiHoH365yUPuY",
  "key1": "4MpQDeUTuGc28t9HLfkJRW4ygFzXLj9ERavkL7wZDaLob5TL5NvQN7wPmSHdUL4ZVbK5jTuMEZCdUfVAXBWWKmN3",
  "key2": "5w84YLQcSKmz9YKRDzZhHh5Go9819d89D9TcAQxGanwQyn6QbdLJZWMJ7o3MDeWujCu8qwcu6GFQSaCcPUyrFxxb",
  "key3": "zrhdCqN11FJXGK1tf6YG5sMfu6CZSRAfxdNA1bi6RB1ETCnC73jT8WrDnSoR9ehQXJ6kKHLRRs7a5z7ecPP4dhb",
  "key4": "5WSzgZyxDXU9gdV1ZjkWRk3wmT6FJDEjmXoYV277usoeD7WjuQrYzmjpawg1E8QJm431dbvf6VCrzFvg9gup8KMn",
  "key5": "88VHJePuZnMFumwMCy87dzWnEhtV2gdcgmEY7YdSdxBCCtHTeteRjxmsRcZ3Aa8kxUkGkrG2r2wSSQ8zLrDJ1Gn",
  "key6": "5vfDDyEcUFC2yz2Y53uTY3ntrQgH8rB8gq8iPVGKV7HDj91JAEKs45QEzNAENRepfTbmKzmwHZReJopF6PR6zsch",
  "key7": "4c6vzppLK3CULSGsYxmcGioBbUdZWS7rqTqkb8L2x8f5jbqZfk1tNYb7gBjikWKWmB8T4z3zkX4Brsjo14iETSPx",
  "key8": "5aVZMXLE3YFMNXN7XbEqLypA27qeS8dWjdP8T9cgJQicoa3pvbTYV6J8EYpk4Lb1btTSAqqX5PuQC87bXjXfjJF4",
  "key9": "4or9DftBXjnTZWPZSfPc7fGdDQ7uLNvWLaj48tfSYChDGEYTjYsRzM2VJeA1tDjg5AtjGRyHf53N6W14VQ8URWAX",
  "key10": "5VqtTxhpubCNsvho2NEHB7xm3ZLwPc83MFN3tiXCEsfxf73vCe5QN7YPRAYpGZ1JbBsexSUZ6f6ng9PWaKmqkvBQ",
  "key11": "2K3UsusE2S2mKMKYx8qjhtL7or4eXvoAWRdV89ajRAuXK2riqCeyuEaaxd9214msmo1WAEfHcUK7wQayJdogdKbi",
  "key12": "4bQArtb8GgYkWQdoJJ2HRTtRXFPLvmZPkeaw1Ef6Fa6xt53ZNC3yeofPiPkLwxTUnHkCnzdy1HmF5MzfDX7V524d",
  "key13": "2sdmkMXnXydNmWYU9FSkWycQRj2GNdWeRYYUdDeGDMRWCNTmwiVFLqzwTwTqEendr3ytPujFKY1QWsb9Ag35rmKY",
  "key14": "5apNNnCd65UukcQg8ujuKi6duoGQaSCEJdPXdTsLegcUEyfDnf7qJFenYRCZ5oEjLH382oFe2GKiVJeT1s8kiHe7",
  "key15": "4UjAMMtLVcmC6vA2RUeBWMxLDtbwS4WYhmRkty4RqXLftxBp2X2hTW35P4SpPC2ygiXJV46iYyrfnaCkbNBnhm7S",
  "key16": "2DnUVBys54NgGWCpX2vx3RaHjuWgUbA3JPF7Jsae1BBJi9uQASoSHnkVtsQ8bUNaCj7CqimGqsqbyCB6sWwjwrJf",
  "key17": "46FYnQEb2NmeLYkMq77aPUh52kL4gz3PTKcVXDfCNahrVZyLGDqJiUddLcV83FhuxR1CFmb8jM3izoJx7H3ytN4F",
  "key18": "5wMzgbY7dtsw1XezDG66sh9ZzLRUB1dgfhaDWc2xNS2Z1TUSB3TAue46fnKMuGkZVgSD3bxmdbXGM6XKgrc5425J",
  "key19": "YLVYyRoyBUsXRVq3MV8XzPrsvyWjqsACLMtXqVoiC7X9FAgnAN3Cq9xbbF9LsRTTqJGRiYXkGi5TiAXzqqfJuMb",
  "key20": "4UaqXPAMDzqUFgf77USPQb7iYWm1ofqtMadiJxKi7QqmArMRn44fVTusn6cFyxVaHvU3P8K3B88GYrd6RoXytd2x",
  "key21": "34Yvr6XasR3fMqcYcvA73gkemJVGawKPLna5gJTtUnzRETwrX47rP4ckKGGyod8x99hkAUkdSpRddPFiyrHxHQd2",
  "key22": "54eimjqhLtYqckyhXFR5Sfp4B4CEuYEx5Fgn4CStkg4bnsn4meajLdWPKpCvCAq6MGrfdvoe2HAGnAWYhPUmecDV",
  "key23": "oYspy8YnbHiFHWXwkbr9UqkeK9o4c3aqbANvvww5LRH87XsgUHhyNkJZbpfpXbfKutsNnxWPpFxm3ZfGyu3iEHu",
  "key24": "3GNUwrTDidyAjJRBGZC5KKHxLrXgFvKH9mc4ABTwqhx8EwpWjUyB7MSiKWPuorXq4DD4gNTMyV3vLktwnuUaBpYr",
  "key25": "3vymPA16TeGuyT7KdwaoPNm6HHLuNXMcpC3LLF864a2TrwDgFfev7cvmAhnz3U7inYC3ovwwMqUift1oDcLZunk5"
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
