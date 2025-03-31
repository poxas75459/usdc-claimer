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
    "3rr4WuhSgxPzQ4qmGNmHMrNefRNea11qkhXkLMaJLrbqXNCjXmQhN6MVAfrvJJdhc1UEkkm7DovND7sgyit7Zrfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wpPNxFfEyhdb9h6pYsePew9ySHVk4NjqsjFc3ojPKq9tXSLuLsJj8reYcxPm9pfRmgdq3kh3P9aCv29ytWKBgqb",
  "key1": "3zRFR4pn4BteiofTnfgaTGMCKGRDJNTvfZyZDfrNN1UWypK2gk5fmombamvoKivd5sijHhx1nqYqM11WKBLbAXcf",
  "key2": "3LVyfcqpvwXvL1boWQsFYRNGfX3JpwNSDtt2esNQV3juyEDjZnx5YirFn1pfLHd7udmzfwEu2hC1Yh77hT5ezdPb",
  "key3": "2DbH4Fzs33VqUaKowNnFCqM148TVsoSh1XYt3S2qG6rjendi4kz2Trx8jozhYN4QACp2SrzuMyJMtZGWkXnXnvmT",
  "key4": "5Uz1KJkTgp2sdGwYt7N8fnwJ7KTjb5ZmuvNe1xdieLoeNsfeBvJs38QqxxT2u8UU7TUDzQDiTwdhztu5gMErF8a",
  "key5": "4htgmhJoPazcFYPH71E8hEC3JA9WxQhAvWWNX2KHTeEFWBRQiG9WWVSh1ZURBCNVnfQCarShVBYA1K1ycJpuHBUg",
  "key6": "3okrEe6hRbp5jaK8kvTnCXEuBFZSePS8jW9dkZFyncYVVZRCh2PMc1EpZgKGgTTvvXFQ4FomiW7Z7TUJQsGfWdJ8",
  "key7": "4Cr716VTbEDaMgWYSmDv3qGUyc6vEtrvWQEUbgjW2eBQZwHLyunCVzxtHsjXCY6CAzjGg8B6FxQZEQhdtVi6Epym",
  "key8": "2P8H418huHpasW3mer9otzB8gLVpFbShAEJ7cMehaRv7D3EnNfpwK1CwEQyTEmPHfBUbtvLYTS8DzFWTnGHa1i6S",
  "key9": "3j7sW18vNE9t1cuawf3oP84ARhC5u3CURXVENL7Pb1N2rqtvp6jrvQX85NdJZQhFrGapBfJsVaaB6fU3k1ubW8EF",
  "key10": "2YQvfSKoEXLMgp73R3nY6BmTEnWd8Qokhj2Vufmcbx8rWzYDeoos1Z2pKGyKh9cFAMFiU1tpuAq1yfNWh4CgfrJv",
  "key11": "32bmKSNiu8pHTTuSwpsXdQYppTN5n8gW31XLr2Xw5DAA7fZN2FPyQdUj1yJDkDXVPi4W15qe9qCK3GW1yniH1fB",
  "key12": "3Jdygg8Ji2zUPUwCkNknaNXkSEJUR6QDqfcsMyuRU6iRZThHjgzBHWQpuG8QoyB4euCy3hdBHa5CihiW6Ype4P4H",
  "key13": "gMoaVeXzMr9jexoSmT7hLnTWnAA11NbTUDsqg2nwbmzotEei5w2NzBXrx1NEtiawZfkfzVNqHfRBL2LDqaKQiXc",
  "key14": "5XjwHDB2ZorJsVFVwt6oao5vPuqjarrXpbW82XVSK3mPEL2Hr1934sp1HGdQAzER18n4B8y1ohBRHCLoxcQfZ6Xi",
  "key15": "3vLqn71Qyj6kzZXubLVf8wS9QQNrLbhusbto3nwqm9r9igW4LEafgTqWADoSY1xqqkKntZzx3k46tgEBvQWtYFTT",
  "key16": "2SKuEuhGJHx8cjaPWSATjkoJfmT2MEnXGqjoKz3hd7c2znBU9Vz9AsnfTd6uSaca4n7FmJZGrvfRLkoL4ikRRoXA",
  "key17": "5c85wxZ2HBUjKuSZAmjifQPAhxVPU5yHrDXNRm8jCn9YyfGzSh6udYb6S9rLH87n3gDEYHVb2dYsWHUxb9AHjnQc",
  "key18": "4wAs9fS9Bh4EMfvbCs7UT6vzALfNdMeT1MApVc1wF9T51oR7zJKdrP6LJMXkTJvSLrA2Gv8drgXGec7PmAQiMGSB",
  "key19": "64V6KFkdCD7p3Mg9ex2HYUHiARVrKCHuUWnH7EiGwtYS4PPR7v91VBgWcUHzm6P9CBVtWtEnVGrUZHxtmTxkzgU4",
  "key20": "eHGXnMjDKQ2E1UErmss4s7h42aPnqpMe6CsSgQZWXEPpjDAxCd7eKMkqd8bpC1RdFGBF58TQevCuBYrAHRSuDPW",
  "key21": "Xc225JXuU3sTtMYw9kBengHjQ8K5Wob4GNW92JJUzHtP66HWkbc79XBUnLYVVNBqCy5uRTgE415e6JXz1BQeyfB",
  "key22": "ScAoqqBgAb8c2oZ9NuKbnLCUajqqcp1KCqGZD6esjrtSbMRC6Lb5kgByBhMzADefsgMvnk4UZxMraPW1KQrKcvP",
  "key23": "4gMXWGmUcffHcv4VEgWofaCVcdCrQyXMJH2HALqUTQy99XJ1pqaKyRRJC3aavEyKWmC8rNjWaRDwY5zQ5wPZnQvW",
  "key24": "2JsBuoM7e4n5KxCvFV8bUkdRsAd1VaaHfEMScYezdQacLynBRbFSNKj8eVJuEffVUjy3J7YVXg3Xad9TTArVn7tf",
  "key25": "6759Fn3BYsmPAPUwLRNJutTKjmFMo9v4XmF63HAqSvc5dMJzDzRZz1itjRW2hxUyeu3yS2RvfjYx4Gvocx67aCLx",
  "key26": "4rNY7jiaMabShSUunk5uYGcRoiYMmGaSLsYPUF7KV1tQy6Aj1nNqugHiqYHvTy8XFfvm57a5U6J6RKEFVkio1spe",
  "key27": "4pcNpcjFtW8Se1GBhjrcTWUztLzZxw7tYELB9Dn7w9saQZzSXNLuxtJDy2jye9wcRgs1vcEVwXYjJmHPETCj8gYX",
  "key28": "nkM9vMY6rnKuYzvGRVcWV62HerbSNaS1Nd8BUwxACjnEcVNLQpf2a4YnqrJSxm2t3RWx7grw5kYyiZ2KXzEAxEh",
  "key29": "3DXZQY8ZQCJgccjdPPyVsoaREbBxkQeiWvoQ5PFTCZ8aWwaV2FjptnY7DrDUJJWVdgUDjLGjiJjNiUzaA57UT8r",
  "key30": "4ZGTvgKDmA4drpTBaNAtV88ERLSGSbpvTjni9zKF4vMuwWRoPG3ByG1s1ZScEkFHZ4wsVh9cww1Sp8xXE1nTaDHn",
  "key31": "gYfUcZddVrXFf7kLbqafSjoG4jtjMpcd3JrcFoYeteSo4ySdurkGJZEyvgGJQDFHf9Pu4R6TqZVehouv9vwJvws",
  "key32": "4YX6T4xHY1eqsPKfGv7BFbMYDSLE4fDZAG6Vg36JS8H7AHpmjrQt4uRWvShLF1cXoawMcZnRKJQ57bSW7YcNr6dy",
  "key33": "55PbbDxHS9uo3BQKV6ZUHMWa9qMVsmwE8a3fngzJkRNoyG62U5udZxP1EAwzadMUywQJHo5ZvNT6aJtrY7g2FQWr",
  "key34": "2dFQVEAuzqpA43fq4B1JcWBNhb5owCziACYsvGRiy93a4jYqNJELbtRT8QHAH6RrUch6y1CyYyTz2L9pTcunWBeR",
  "key35": "2QdAGmNDnqZTJn8Fph5VZwrWisbwEMWihqsEZaA5YydAnLbUmcmHgrnaey9w6CDiDr8YSdsjfKX13Ys7MSVJ2BgD",
  "key36": "33cJMxkv5xJBmrGs56FnkRhw8ebe5QAn7VwKy9V1TbPYksaRBHLcxMTo4pkLjmNPq5y9DAsvyzwWT1iBPsKXRBwv"
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
