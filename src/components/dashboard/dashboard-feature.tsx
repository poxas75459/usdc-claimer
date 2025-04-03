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
    "5FaGDDwcX7WXARuWFVJkxiUT3BpJmQvqzuF84h8GdAn9Z5izmgNNApUS1rHHa8rhTg3zTtzEECnabDnuQc3w2F6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tk4jwcaFvLniL7C5xd4mSpebVJYQcBqYkWdp8tNxFw3GcAukjUSqrLRTC7sEJtVXk2ucXaxqgZMhE3sZd8JQKSB",
  "key1": "4beRw9uFC9wRx5dJsnPEoC2FVcCQYDZrYbCMEh9F8xS6YR2Jcft9MH1dEkbt6PcUfm8qFZSfMfSmnADRPgzvMUde",
  "key2": "3EnwusSnFhwKSZnAdqjnMxv3QKdPU5PDiMqbz8AEy2x9Zgb91bnme5Cuau3oqEBtR5gMJhNoqDDvUGGzHJvDzwds",
  "key3": "5QyvGrrimmkHSoPGFoAZugnFa4DpWJRAfDH7RAuxxo2Cbs54ZZcL77k1oFvydK99kT6qi3atqrgdVpWD8EENgQCJ",
  "key4": "2y2g9V5eajv8xSzoKxpq3cAYFNdzbsooSxB8ERE7qMyhY9NqTbYHuAUcBVNEvbbQZTna4PZSJkPVFE9JzEA9j31M",
  "key5": "4nhVzR7RDJ65GLM87QAfSwRe9ArzHqHQFodQPUQF7cLWQPyQJRCn5EtYBK4mZQwVt4ui9PLQVescDN3GKY4RcssJ",
  "key6": "29B14t2PbpPHMpbsbdP24L2fDJJsFxTLyfSejQrLszawJWQF57QANvmzdBA1CHjBxTXs6eXKNLYSHrRn9LVp37Wc",
  "key7": "69QaRJCKgSSDJRJJiuy8FDHkxF7h7gmAWBruJ6sqQz6q3m4DJnByCkq5mwygh5jzQrJzDQerjwhgXfUuESfxCdU",
  "key8": "3S9XVMtHm7VfQaujfxSoZ1oJS6BZVypJKHaPry21pBHJ1XqK7MfntDvD5YiMya5nLEQhDFaBR1qpTE4JzEYT8QU",
  "key9": "5Dqzm5EuFvSe15GP2MemKa6qzs22AbwXPX9fqDkKcma8F7BGhwsBueVCrc8RhpTxFjSa5S6rTGHPL26R3cLaAepH",
  "key10": "VnFem9YXBnnY53abE5FCZm9sKFv2NXwP3hMuUU4woEvBoa3cjoFTAXPDZupG45ChBXLnunECLRkBPJMP75gsxaf",
  "key11": "2a3W4tarwcZGqjvjiQmi2yhggf46fjoNmrne1c8LtoxQqL23SyfYQtWJUZMMq3nf4sfrYp2kqbqn7dCUpYgh7mzH",
  "key12": "58TXc6i2a6deEQyfF8GqQxwwfQdhxBb1AUK2KaSpJE4u5v3F719JrN1HLFqczteKdq9RVG1G14mViqzMD2m3EtsJ",
  "key13": "5AdWdU1fWV5t4oCC43h1jnMxEsQHjtrW7Zg1ML8v2Hx7KkchkRNU2f5D4vfzPWtQ2QNuM2u9SWiyga2mQNvTSAg4",
  "key14": "4T7T5FGEKG31nZfFcFMn7mwmoHVrJJm9fnr9RnRhwgoiDTaW6Ksjy5xsHAuSL9JZsqUDmMVuG9J2kZNUo9yfkb3f",
  "key15": "957T6TToEvH9bVwcxMSWhRbPq9AwsSsktZDSXVo41Z2wMiDk5TG6sJUY83dZNi53Yrpn9wiEGTwtKfEjN8ciYsG",
  "key16": "eJmszrzkPu6p1GcF2xoUEA6jUqwYePjGk8sWjAKSkyF5ZSzdrCiHUnfr2mvoS2GeCRYaF4ULZ99juMhDoraTxxc",
  "key17": "YndUjs69aAg7pmjbQ3zms5qCQa64cq5eCLse6m6pjRDBtgivX1ShMVVSYJ5DTQCkCCxCzrShGcFqGjnLgpWdjZn",
  "key18": "5cTgfzUb61MEWkwTaBxjjhuR89MRNCkyvA1Ariqe1yR38dicDgcEQgSdWqo8rzer83afXzDMfB9okuj7nidFCQCi",
  "key19": "2NNyh9hFZ954WThojYV51LdntEd28feJNneHjhdLoGRRZP4w5arvsrRQoCWW4v3Cgs1Pdy24NG6ANd6tikVzaaFG",
  "key20": "3huWLK63ub2tKc5jPUvsobvMK3W1UrECWh5cHwDuJjkG6WfA91vHbmDsPyrWKqBddEigbUHdbrNxrJkfRWkEzw5a",
  "key21": "3YYXb52YTZDFGJM2GcUZzffJDn34dNoumbBHjD3kKKfeSBzJw7m1tuYnaaF1YAgHMu5TitNw3wvsDQdx2h1z3g48",
  "key22": "3JdQhjSQZyuJJXQHHHpYrkApw1EVKzhCi6v4YenZy1rfbYfqScYJWV3mcJLZb9Ex7p8spm6pNPpY4LBSfDFCMzpp",
  "key23": "4u6tbdnuYWyPV4Lq6xFGM8bHzswP6BpVKbMYKu9ZGfQN6NFjB5o3Stz5Tnenzbzwi3MPTDrTc1LGC8Nchq7ygkMK",
  "key24": "4GNtKnpKuXxvVZ49EXWTRyimR2VeQT9xN318FxyBmaQr9wtqbd6Lxy83ft13ySQjee32uD3B287uU26fsp8jsK8D",
  "key25": "5iU3UiEeGbFjauaPUQasnF9H4ZtrbAisdVqP5TqrBxLpRbgbAsQT4pCsfNeS3WdED2uQbgbnzHHxef8rXqQsvMhx"
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
