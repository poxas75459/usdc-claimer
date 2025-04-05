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
    "3U2nDgM7WzUsaeMQSRhrP4R69DBTXGpWTHtmqreuUiRJFh9Dpdmy1GL9gCCNTNTWVzbXXUEQGCwdnbzr2pM2zXia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43qMMbc7Hg7yL251ZUhBmCHzLvmqZkkjYviPHFNBfRbMYck95xDRmTZDnkiiLgQWKLZtUCGkeVPfGLC51hvtBHo8",
  "key1": "3mKTF3eAkoKCXYCsUvyufAqU5R7eJktF2H3XaA9iLstGH2JZjcu39J6SZkJdH1wjm2NYNckPjQhZPB1wjdF87h9L",
  "key2": "67MdbzAab1JSZ6etr9MJ73DeNivGyyzoSws8FDQcqNWSRS99s6yJVNx2q1vJdkoZg3QCduZzeShWXJgLpfCTJ8XK",
  "key3": "5m7tiAyaLFf3UsV3abB3cCyrZVat9kh7xRZQakzsN7hSAwy68eqT2HCkvR4Yrq58qh9ZxArPhD2Gis2Ap1pKobzC",
  "key4": "4SF2t8mJMLc6pfmj2oF64mbCu38rziB5k7AFbqxk9hrRqE3xcKy7idAQ1ofUqheTSdMh729wzaoh1HEjqNpsYiuA",
  "key5": "642qpvcgLLsExBu3nJTXVt9SmtLpqoZ5CGAFcWWbLZeU5FRaepMU3HLpAFrtGcx6oGxQjPe3UhEav1qAyGRHVPkw",
  "key6": "4y49oXLR6gKPbufQXhhhTPuCoR1HYBcb39prs1Vcp88ycn4on3PFfPSc4N4tTFpH2dv3QQXjjVyTss6WbhSnabKe",
  "key7": "3f6GNfHs49YBA7p6ypYTW7er9npXa6UhWEMMVEk6KqAUagCas3dFFhbGNQnQwRfeL3Y19AW7BWZ4pqTRKUFY8mzb",
  "key8": "44aMYdcPzjeeWTxZtuK98HmLBQACqM7tV8SDDmv4ibdCsw1w3SqqBX2683oB8ajSRLjTaGoUumb2ZgTamAg3MMey",
  "key9": "Q29G6nCBtFKcKDnfVvpPJbm8syMg1ckZQoUAcaM7tbwevGZ4ng8jEy6TmxCb8Vetm5qnPTfRQKEbu9vQDc1WZGx",
  "key10": "5KkUyHiLYP17HdGtJyNP7wSVqJtbbQ7LQ5mD871Gh5LbAC7RGRz43r8Gt8w4x1NeNs6YGAVJst9ni2fVw1tRT1nd",
  "key11": "62i4FeU7RcUacjsKKpHUz14MpHD9Xa38YTs1HYHmGeGgFMhjXKWvJuJjX2mNYvFa5y5PZdPrR2aN6MwXVX1RkRHb",
  "key12": "47ktCRLYYRoAvvZAKxdycSpk9Jap8aPYvXHgzHt1GdpxT3uinSQD4dU8N1v1TJZSSfAdWCmyQM8N8zezK5PmZQxk",
  "key13": "4aZHrQmpTyKRbHpDvaFowhj5GA395b5SZFbLApG8zXvRGQ9MGHVrw1HRrhUu5p5s7QEG55cdSe2XxdLpf1Chn8bW",
  "key14": "AwCWPjyNpuaF2jAUy5BG8yeM2yTMgdtyiTuJUathrydvVta8h2BXBB9SDo8gNDVz7CvSozrGPRWquySjCiHiAEg",
  "key15": "yTJgP4ncWjqk9YdAxtnCTqnQ3HfGRLUsvJbYWe9rVxUgRo9joSCSCFz6GJQVxhZgwyStDK1zPhfMX1oN1jnv93C",
  "key16": "28csgHQdibmGwPzixrStL4GFNPYhpGCVZguMbLhcXvxfo6Gp6L5xAfNW5pxvv8yHwED4rtL3RNLhP4VgUfmiKtyi",
  "key17": "22f1gdZZCyRzTjntEpdYXdk7mYWJKKxPm31gG63RjK4nkJAxvhowuDYRo78x6w3kPxhLVBmAjzkQmajJRjwNdn4e",
  "key18": "4AGE5h8fVvSaEy7MpFBqbLtbaoAGHKL4e3fHhwqKSAgHL6hre2BZQXD53xzb41g19hHVu8RTpsRGTqPnnshfKaUB",
  "key19": "3GQhym3CXDyFNL4mUvA2wyENSmVTF4WaKkmRzFoF1KbKe6iAfVa8BHD2JToMjqA1JBsULVggnvBpvmB3EU99xxD8",
  "key20": "4pbuDcJgJdtSShL4YuqE1zcCZF7TLYMGxGHcJ1kL42a31c2Nz7e1vxRKdHWPSM3GCzkpF1kMqcF6dCfdMbQphJmG",
  "key21": "5CCaP7h3TQ2QCG39Ht81uZvzX6gmf8cX455MBekDj3zFrYwTqsy2Q4zNPuGCCSvv5xkNp7WKixte8VC1sbawWZ6b",
  "key22": "2fqYwdw7uefh425on5JrEAPNgjimzCnfbEafVwiSUtqk3j9ZkcDdQgp9H9M8DkMXawdgNuuXHW79A7TiYm1HdC8t",
  "key23": "uPRtVNCKev4WnUWW9sV53KoqEBnbJmPNJkoUmxEtVvdysRmr1RPDZXCk8mYMqSWGKzSvBY3JbqGWNSHwDc9RbJJ",
  "key24": "5w9v1XsgfchKkvKwcMNghKFyMm3ZSxWsjYqcLrUnKtVAfQcUHoajLsb2JpSGxmkXNGsAAEhva423bbK2W2S7wjF5",
  "key25": "4Mf6cEuYRZ5FfrbBtGap1axBnLK3HuGey4cAJhv8QJcXAjhUEXNeXoX7QsYDWY6FQZy996iQ9odUfFkib7tejN7R",
  "key26": "66u6yiqSxrg4PFXg8PdsSZc23TAcyBdoHHvsNNpbBFmRveQbvqH9qHUvC6yTjzZWnickRqgMR9DJY272VSoZkofh",
  "key27": "3kGXh44WVzug9Bvyi9QFFD9GE3WYS66FE9GsmDerjzf6vUpQGMoh96BSfANQP6MS1NufAC18f1opXLMabwNSkSmD",
  "key28": "3gujWXiDrpc7oobMqv9kbuPKf9V1oPjt7nP63n1MgYn6RMUKujz14fA6NbYuv945RDhU42R8xKd538qs63ooJD7B",
  "key29": "4FoG8xL91bDEz2tuTEQTNrfWS8W8XAFL7sENokDa1zG9WvaRivFL8WjCzwEybgopUvGuPcX6Pz2oNXNTn6Btgr2c",
  "key30": "3hfDoFSGQyCj7TLJGTbreXJvd5gWauUxrEvMZNM5Tu8HvajBc82UjpgwQHMU2XdHXFpGeGDfzWEopZ7NfYSWRo6u"
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
