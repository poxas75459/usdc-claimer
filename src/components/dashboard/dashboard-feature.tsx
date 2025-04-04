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
    "5o3DNwbs3RAJMQ5ofPeGZXeDYWw2ERkkTEX1kW7Gfg8hQzXzdZrPqWzuHLxMiDQe5sC9jfbsabEsEC6281znrUTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1MpeqJCTedwUe8QsBmucnjd9cQh9vVZY78m2ENYwCgkvWfRdqUTcbgqPqSp1ZirGyi7ZLikHBXMV7AfymPpayz",
  "key1": "unw8To4pPNAE9ERj63UXEBCywPgYjiWbVmXg849d1c29asnkWYBxcxjXmAzLSndasFLJjUFdBkdP2LN5DWfj1CB",
  "key2": "4oKZmLD3X7XhtkCaMfYYW4JAtKz1bQt6PhEkY9Qqp8zY2gp4etqiPpWfU79K1BZqobbjXcrdGVHbbGvwCJcibSed",
  "key3": "2sjCPc5g2pHNXbDBYVXCtsbgn28uVbAAX3JK1sk8a96qS2JetXJR7YKdmR1Azmsr7Qejs1AvzFrANAtn31FW9RSi",
  "key4": "ZcmJyyNgJSsaVgRhth3mr8zXhST8U4EMBQBRxZ2pdS85z5AC7PvtBf9LrkXXy44xcxvaGMyCSfRGymcanKyswCM",
  "key5": "3bkz5X9uB7Fkiak1HmYcyn7QG9ExGNvgvtiVYJy2f1fdbFyTrdsCSx5BmGC9PsjKnaZhCWptPXLGhByLRouKsoZ9",
  "key6": "RNht6p6sbow5B6SwHcLPZHjAqitTyDm6y36mWiG5Hj6Gneqz6nTUk7gkHGAygmH7UL8fJ3RqE7xCL6FGqVVYCY3",
  "key7": "iura28z66ecGRk9FFc64XEQSYzf1qUu6apUaZCuyZPr3UJqwo6gwoAWzjBHrsJzR4M8yWCWjUSvK8emrGmf3xvp",
  "key8": "547V2wPtiDmqPkmULuxFWQs46Gqids7aY7ARSYestC7az3n7a86Mgaw2xWXzUaAJv2ctrYjvkD7QU4GJrVSE7eQE",
  "key9": "5VSteEeP1gVCbhNErrr5XFPwfeQdHA4RnyvQumwy42BagDytXnq1ei8pVqHW6N2rcwAFgCmmRhbvXdGGDonSTkuz",
  "key10": "GTfqSSFXmupoWbxLied6WCTbeAfzdkQ4t8MLAk7f8Qv7Ua9hgFWs1v7FnnwUC5h9LEXwQytVHajwQXY3S5XUsuJ",
  "key11": "4ouL9vBMMEa7VKuTuQtuXeeTnYFCeMEAMoqSPvAqNSEwniB7he9J87f6FnNzzXyHSzHsLLRrwWoazMQjSryfw5Z4",
  "key12": "jvLk4vuQdkopw1ZV578ZMxs3VR9mVgT7DKv74yinuaCD2ygkoegV3PU9ngcTCbfUeXsmPSpZNniQqGNjM7NoutT",
  "key13": "5btC7XJh8E8JGnJmrxaoXcrBab5nbdsuEtd1Lj6Nja6do3X3X9pCXgpgYsMbwZVi4XsKjuT65WmNUTofE6Rns6Jg",
  "key14": "2F5xrTxZMnDPWTHRa6VLV7tL5xMJp83uHw2EpVDYkKQ92LrFnv5PauhktheNc7R1pqMoQi6V6mGL86jU8ZKuLcgY",
  "key15": "4HANEnz8tLmdcoTGyNQ1TXBJUBsUGGB3m3Uj2H9LCHBU333v5oA9Th8b5fKsxyk3DJ9P57iAtZYCY9oNeygGymTN",
  "key16": "3W4svbBowmdEzxNEuRRQrW2CUKbW5A5ox6PpAQC2S3esm6cjXr4Vg9uJdauyxmbn7fGQXphRvSANszrM7pSBJLDo",
  "key17": "3BDRDK9EUYCAnWeXBv1HLnu1wdLPV7rSUgHmpfJMk4guGhjpdipChUsCNhhNjxs4zP1qUzfARGPKQ4Y3p4atnRzE",
  "key18": "3xeJbsD2wg9EUUPC2mda1AJkYXBDcn2WrdNfLfjuj1XcT1yRJVZzAPS78E6H6mmnXH8GzbsRu5e2boo83i6GLvw9",
  "key19": "67pPeW2pE9frAMDsjDpMfMAYAMCtBZ7Dfo4FehK7rbcqRCdSHEjqU8DJKPXgU7exUJQVDsKENWwSgs5rrorAqnVo",
  "key20": "4GKLGTcyDV5pfwnHYBvcf3FYbUjeGuCT5vfc1hu8gEeBxY64vYVWKLdF27x1cWjnEcKEqhp3irNyZbSyF2NS4fXo",
  "key21": "4FK8wXYLu8HgeZ384r3nGSrHoFvz92MWsE8KJaRupmonbFzxko6btuE1wT9Hv9xMSe4Hmn6KRzEqfEp2oBGgffJj",
  "key22": "G75At295f1RgAwmZnvYQR5dKW9FcpWxbHWJGkXoZF5gQHXfC3v64W6GEtVNHNLjoTFGmtDwrp4BYRHwYVomoRxu",
  "key23": "5kL4V7JY6viBYarTAbegLbWgbsHn3YVBgpP5wBxspYeXgVforzdRQGZ7e4TBDUN9U7dTc95xUpip99JEa3Br7CGr",
  "key24": "3KQYyAxUe2GJ925NxhaPEMWpwMSedGdyxtMpDX7Hx7AyfttgB9fmRDybBseGxA6xb9F2CBSUk6urGkE4PoY9VXwg",
  "key25": "2MA4CjLqvtGp8XwSsJByqPBH72S67WowR14xd593n5JMLmqMD2HkE5VceZzMhZUoRG8xtPRK3pJAERpXbCSScLkD",
  "key26": "kYMTD113FMHdWYDqVZ8zd7FaiRyGLY8UjLGHjQRiUaPJPrCfaADRfQy32Tom5bjweA6QUtEGMfXuA5sAAxVAEbL"
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
