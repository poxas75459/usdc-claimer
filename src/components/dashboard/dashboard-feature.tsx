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
    "54JyoYWykMpWHFe7D9CBmqonCX3FWWZSzX1eNBtbRB18Q2fWTM4GRkYgcyNeQ4aPLJ4PtFknPkr46pGGomRzUpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64AWAebbSFtz2mEtJeRWiJ6SCm1nFetjZnnw8EFQrnoE6geiUveRaRoxMHmDe4cATNUHUZfsrf5vwWQKv9kvaz69",
  "key1": "3dd8EMKAxafAWT1g9Pj4nLhmJRhb3P7zFMitzUpiDWZmnmiv6c69L95uKhDxmu3DvvxPJdXe36RXf1iHDU9YLYgg",
  "key2": "5q2DXoDqAaxtRqMNs1dWp3zoRSHJT48Fn3mPm22K1oaMgjPyfdQqH82Vr3YDrsZCaeASYkDkxe6Qm75EsJ5p7jVd",
  "key3": "3nGvBCRY3cpCc7r9wi8wQucBRH62HWheNZNf9eWHHYoTP7oegYGw8HY7hT4gXF6aR3SLswqG4ZULnhZvH9XTF5xC",
  "key4": "4Nhd68NCAuuvyB2oqA78wrKSnL9ed2DqpZ7idjTBa5eyL12XzTGJjY1tVEaJUVi42us9QNzbrH7nf2bfjUJPABgF",
  "key5": "41vEtzoTFXKYt89UrGrBZ8AHPkmc374jmx2A83WTycuCmLjdipW8vgwcBFXhssUxC5jsxgbcCLi15jbvDGdUKxQr",
  "key6": "j192iuEthQxuLywgFvdxxqyfHc65S57uFMm6Q8Ju6QojpkgRyqyszi9PtWtYUJRyKwXTnyMyTTSZvo5dW3BSVjA",
  "key7": "62vLxprXj6SAymG598MAx1UkWzeFweohYpttaZWUFDxDMXt7XnXBptvLxkwase9cPMnRHLfyxnG6TNM2PRUGKwJ",
  "key8": "V7G9N95Y6hS3ascF4UnxcQbvFFqr3WWoma8BQ3kU4Y4dttvLX9Msi8pE2ccJRtinzn8xz5FjTu4gB6VTC8iABuB",
  "key9": "2Qgj6hbJGCfxXCPR2evH55HxesFxugUvazRxxuC41R6h6gbH1kXui8mP6pjzaY5EpGw5Yi14szDocumvGp9Zguwf",
  "key10": "54CYkhSgndWBg45tKNmNnaYZmXyHBnZ8SJtsSpLkacuPv6A6Hn21cKCcVJN2FwRBTnvd58LHcqYviYbvaY9fpRrt",
  "key11": "3s7g8NZN2Ja8XFvqHVofLrG5WgTEqMTWNZSzSMsknzJRHVe98XNmnN3ESht6yTAP6hvJn16MLMLxxKFzXMgzfnpb",
  "key12": "huP1otsaBHp6HfzvcSqhyDsDmbX4NfX79zaCYvAJtQLs7aTwSxT1v6Snj1xmJMDWCVSkBW7wCkXVwSAX6MydaGz",
  "key13": "2Q45fWTyKJh6xfwHeBM9w54Srpo9U96eFeiHaAajVudmSayNXGY38H2epKiAJhwFQmE8egU4oKQLmRdrVBxk1Tx5",
  "key14": "4vFCPiToXnZMGPVkeZ1Vy4nZT1RDp6a4X9d8aLWuVG9RiVqVit7dik581Y6nAkeRMThxrZpyFKNShUPV5z8w1qRU",
  "key15": "3b7F61bw2YNr9wkCnzmxHZpMomU7FBDvmSFhBZXw7Hss9yNLun1ywr9nJoDy1cV6pWdFLRExYgzmZ6zmLV56WoDa",
  "key16": "wSVG85taRDcxTgWwJw3TaNsUyMBbgXoBFbUQkLEgqgnwgN8Sy4avBNS7mjgzwNfcZnJN7ZVqEZBTbW8BQovfVFN",
  "key17": "4Jn7iT5NYST1NsWJDgY2CadgM71DxgxSS7R3JbDvJFMtCZd8dQoT2qMHhsF6XhmrCqz9c4Je1qvGDvARXFPinSHC",
  "key18": "2jCC1wRkxpK294P5z1cv7DhFUR8LC3xuxc52XqVSVNwys86oZZ271vW8BdYhJHLhNEUfEWXodMx8ECWhasjhQGDK",
  "key19": "7N9TXQHti142o6HuTGWCdzteqenyoj1JBiSqf1n74puHW76jHrnkvLf8LG6cWmKtZ2r4vHux1FKqF9xTA6LK97z",
  "key20": "4muvUva3XSu2BVDJ8R35e8rHSfkussDicuN6bdEEbQSeD8hPE9CPuiKHA7eTDTpE3Vd227PvypDW2iBsQJzNJfi4",
  "key21": "GMqoJy827SWLZ2dLpjPKM8in4HCLiLREnRZUPBa1EtDKpJHF4VWffvCvs9SaC1mYEJZTSZ1jx3qfLMKqxa6Zj26",
  "key22": "5oax8HHamcW5Xc1XfGg1j7T7uEfNnFW3yxwyLh8DNTMyLmXs7FmEatzjwvD46Pok5hNhb2HyL3eqNUDvs7ViW6is",
  "key23": "5vnXt7jF4iNuVQPyDn3Ew45bV4yDkdLDxWBakEXU14cwnuqXrtjN2BEdgB4W2TEH1FfLkgR4QkCjPafNUYuQEWRh",
  "key24": "vExeLpC2itFE1rT9zhxLVRWeTuXrznkq7VsuHB9CEC1XKK7oDsBqbJpp83JU1EDePUBgd4TE8NStAArKyNjjtKX",
  "key25": "3KvnkRgcKVGidysMXEURUhzspAphLoejRmnNrc3itjmL71Wx2Dkc5kuqfd5v8SZrAyp39F3hDbChriETi8KAezkR"
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
