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
    "Prfct9FyzepM2jUgWQmMs4v8ccKahKBMmXCS6Zfz1SU93TymVnwaqzBhMMWVZsqRzD2LXWnjvi6few3EH5rvUAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVKqosCvBS6XmeNSK3cMr5ZKF1NYYtGttoNJnvmbjG63A327zsrtuqp2T6Cqe1tsspHnN3UT8F4PD8wvNwhweyR",
  "key1": "49VXUjGmX4eC9nkVBR1pQ88TYsQgnCnLhAbwGbEt3sjE7qtzgPNRekDNzpxZTk8tYsjhLACoU64qdd1nDbkasJjG",
  "key2": "mandr3WwodzfxLxL86z9GPopW2Hfr4v2E2qXgtbRcEGz8MgnUAmXXthsg5YBL9j4p62RyBtV5yTdXgCWscdEeAg",
  "key3": "Lz4tdKYsaNYJd1MDbbv7uUeYoookbQTNCBMEsWxNCQyadTcghAkGPx1i5bJZBrud1JtQEbh3FTqpiPFVXYeRBzy",
  "key4": "4EQ1DDVJhZSZDptCSXc8LW8Gfssc6ZN55pFZqaR6YUvKqQjSLjE783aLbRMRqhhKcNUPQnhtcnnGLQ9hdvxhajo8",
  "key5": "KxchMTU526NUftVrCkX9eTR29KFx2D8tByB63mTcP3JTbLjjSVBQJvp1Qb4AfHi9bT9wtNvdVQZfWBkdfErzUY6",
  "key6": "4QXUyZ7XerWpamw3zToZEBmih6neo4q2FhH16gQQnfgHv453tD2u4d1NH2G34Fdi8eL1faEpVhWuLVvLkkJARc2p",
  "key7": "5ZWmZ87ijysXRnTNmaXn4unNFnGV4QULzcFLaoAZBDYRRNZzATpNfuRBNy9MjHZZTjWvEa8a1LpHUwR1RJnrSvff",
  "key8": "42bYVJy1aGFLzykRhknfshPUnj5H2Y9xS6mWDh87m1XEXojRyaMsqYUeyPLqv2w7UonGciyyU4YiykeNmazWBmZv",
  "key9": "3vhtP7kS2AGvnPLCUDG31Nf69PUy1gK44Eju1oJAqmerPFW2RrSs4mNvxQoDX4kFuFKUhEiGwPP3khMX8L88AY9w",
  "key10": "4jvZ4A1QZyqioAEqhYh6hdkS8QtSr872uJWXmsMKECbYfdddHU3MtBUcngyP5Tgod7yFEGHEL2kurgdzpnixzVYj",
  "key11": "YJEjYD1cZZAxgjnhcFQmTLNRPACCWWCggsi9jUBnAkYA9qobCdu4aDtY9bN4wEhNwkBmn8KAKUUn7HMaHYF5Xdw",
  "key12": "272EDQSgMVb8e4Q6kjuh9iCdMiHxT98q9tu39gQboz6Epapqppo23QixLwrbu6mwo4wRyiCuL5dNjqzak1T5BVdH",
  "key13": "36tHkccAu1MHaj9BqCVZtSPeMXE5TrunrB4zVJKhB36zpDeDqHkGPBSVQoieTgmPgKxK8JRTdxvRzAhrgT2fCkFW",
  "key14": "3WFS69Q9s1EkNZ1VBh3Zftpvic1sbQ3Grsi4hchsUoNJSQ98mgM3KbAbSdbbGMXFyBThaVerT8WgvQq2ibC8jX1J",
  "key15": "5ovt2aiWqaSV98EysSUirdf2ayyUzA4P2PMJSAnRfGcwqAkPvQBv7QAnpfV1MixDeh6FyrkjGiPsQWzfBwtgPhZT",
  "key16": "5L3ZFtvcJF31Dohm1HeD9ug3gVGK1UGq5tVUbcpDUsAhS5mg3YB2xzfxne6PGc7yYFttigYg4JZw3fs9xRWqimYX",
  "key17": "4PctWExzeBtijTQFhREanyjbUc4CB1e72Kqia3iM18MvYGrU4VhuKmM1adg1PfmxQeA7wfkZCjnngZRLUtYJCdFg",
  "key18": "38AdXpHBwJF9zMLj1S6U56tuTBR5sdAGsKJQYwRvZwzXLxgzz5sZWUCt24rTTTAoU3tx4AD5oHcKqgPW7kmdZ8aL",
  "key19": "44MqFAwtGgf6wAgfi9PCk9CvKSjf3GsBroGaQ6AL11A3qd5mT2cajaDiHjKBSubTc9RmckopA2yyc1uDBW4G6kD7",
  "key20": "3CzvLGmGXnCweg8NfuNdY8PWRZ26aSxSFvXggXhA45aFpzhHN1ziW1EyRPrTFPbGQ4wbLhB5mZSKSX5eRa41GGpt",
  "key21": "2HYLjr2WyJ12ztoDeQYB4LDwUhKzbdVjLCKhqrxUYZozazwD2U5eWLX1bj6ui6fHx3jJDh7yWrtTH6Xqgp77GRGw",
  "key22": "35WTEvRGQD2wKYFsEEZu4QY45Da1ZBA7zD6UnAvoqnikhfVigVAuGSGPBtibsjuFSjRiV5aLC781282LgUeTuEep",
  "key23": "dZNURWc5BPXkTvhV9v6NFstNCerC8H9P2PzCS2ckH3pfzPZksp2iULnNj8dvKVvppMVjokwC4tdCNYBPYCgqZjo",
  "key24": "4xsFTywhkobZ4C6EmTf7HzqhAfCWHNpEUsp49b99tbHzLQneWqvxXDBJ7xyHhH3F8HHFie8PmRNqNuz31PmmMjUF",
  "key25": "3moa784c14uiaHphvAzVxmbodrZJ9D21vEkbkXBT1s1axcLNdadnhJh5SUUciWskELEuE2qv98fp8cw9C6XULTBs"
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
