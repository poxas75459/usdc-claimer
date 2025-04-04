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
    "5KabMpmEXbyt9TMTuQUrq7nw6e9nvwvgEeuZ9rXQvJEeN1gcaZ2va18uyd7CrBQvjgsyFVbwbRwGd6GeVzNN1tLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Po8cfrkJNBTNp5jkgiBQtHbs7ho582TNexJZKkChkNSfYAURP9oAzA8swD6TQENG3fHMtY6UNk7UcAF33WoGAK9",
  "key1": "4jmwzcurGEDPyC5dWB4vhPPxFSduZ3eGG1maSYDDqLMWgsYiWDEQvR3X3fuWsXXXy6sQ6ZadPocq2AtJ6aAGH7jx",
  "key2": "3rCeZHRh4Tnyb2N1yqUBGuTbAEviZidKwWwy9FAzSESGWENAZD7K5V8UxJTdHjYJ2RsrKi3puoFgi9eeDkNGx5rg",
  "key3": "5F2EZy71vM11etuuLcJ8SMWGumSXMbzRz1hCpa32Sbn8EQfkqEqZSxQqhswBP3avabwy9kyWiyZem7TUqWdZoWAy",
  "key4": "4ML8pP7kwytBnX8L9s64gSv8b1N217GcAyeXSydgfvCE6grs2EHhLCDddRg9dYfzxGyJfqRx6vcsp5Nc5xP852Mt",
  "key5": "4xzQDPHmKNpuvPLov2p38kqp5toGhN5JnVdHdsDwfG6kjSjggKMgUisrKgTR2yZLDrprmPLKEn9yBnRJFiVjVJDo",
  "key6": "kdqx1M7v5gG77YJdKM57MAhi4jshNuTB95WfVQmiNj6q7uS5UCgvtBFA33x91AMejs5pCMYwcsBfoJkV9UofMYQ",
  "key7": "59MnVo3g4A5VhgX7bwB46piQi7eETqerSbWooicUw1KSpWxbFPWNfs4MehqHrgKLphpZQmpoGC5rEosmMebj6pfS",
  "key8": "5txCJ1SJ2XcLwt1E6Tfwuh9VRAFRQJmxjHTV5KnuhUCRy7vScqtbMtXKvJJYbSDxfENNmzdgGfmpT1LTocp18hME",
  "key9": "fBpLMiyx1882u9CuknJkMp62d8sk4LTMHESiVrw6cpzzkt8ra2M37HdkuasEcDH74hQwz2Ff8N5vKsXRpXKG9He",
  "key10": "4iAhKSvqa4ScJeiopxwi9nz2pjcZovA4xp8bQRazgiqTVWvTVYM2CpsbBA4wYLvgcaM1w5h1jqrBkDNYK7PUCe6y",
  "key11": "2hW9Wy697s1tmFibnWNcyFfhFv4RZsajyPF6B6H2zF24sMFbDmjg1YRHZeo73EkRh9xpEzBdCbCx6VqKnYQjj8Y",
  "key12": "5T4doRSEqGjFxMkQmvWocV8NW4JnU1dYJ3oy2LhYT2cVSNk4fS7acXrakkSwUJt4xY4vtq7fVRZQ8h9MMoFAW7Yr",
  "key13": "4bPpUcdmdxzmexYJtxBhs85uBr6XWc5ZFe4hpBbFTKZH5trRDmdfENTrUKyS3BeqwBQcE1KNcvDdgsYv931L2ydu",
  "key14": "4VyBrURKuaMvfGzLwCyVh3rjxWSbQALHo2gKeiNJdXhMw4M35FQKLbt15f3UELZ8fAb6aAMi4pnxd24KX11Bmo4m",
  "key15": "2r2CFx1EyPHM3d8vr5mJykUxpEQDsGsa3NLFstTWnK6ZX9L9VpVyt6pPutUvs3rcdGHRGocvncPtKhsLJyg1i2DG",
  "key16": "3aYz8fnKXMye5p4bx2ti387ZftcRcG8sKtHpQ58fYGM7XabYWeeSgynPjTR89CGSQxKKueH9mD5xopchHakFqWqC",
  "key17": "3BpRn5AKgZvtDAL8seeWDhepUvBBxVqyL6XxRAyBrnrwKdfbXMeNELouZiKUmNN6cJdakHp7NsYyi18D2KztsiEH",
  "key18": "2N87aDmafTTundYoWLLe5SSydRyYKenhJmpp1fp5LEBT5ZSPu3dwH39hixj4WutMefjLPRgtqHa7xK6omncgK8SS",
  "key19": "2ckrJGz5fwoRWsom58GqLcpqHKdfUskSBNJpRqD66iQ5W8TkFUvdeBszDD5iTfn6WJB4y5jBq54Wspb7YtnMb28G",
  "key20": "5tnSdFukhM1pouBuafbEos5WzE4NZkZDG8FBH4KbTZzMRGiVaCkdqknfU9wYnm5hNFU5tWyqLC9dA3PdwqC6JVKW",
  "key21": "2do4WSBgqEG6H4E992sE97zwTzzF7CbKQaBwx5T2pqcZYTMdk4TUUPtBfQYgKr6yG4rwPr88ovwypfqZo5a4V5Cw",
  "key22": "5mdSHHkv3WtTtimd5dGi9THeujgg5ti6qLyKVhx7BjFyCnKo2QsVhfdff6yTVrSWWsQsawRBsaN5zwrAaPjVFWev",
  "key23": "suy2RaPEdQEXG6simJnoFAd43ztUd2jQMMsLohSkMbbzr28rkic3984Dr9SiEx3RQELhLxN9XSdUcvQ4G2y7KSx",
  "key24": "5uswGRFxEh66Y13CKf1AjMwxGxpx2LeUmaUSGf3CNerPkzb8ZsD86YPPxKb4oYm2x7Rrj52TsVnKh6RxeJ2X72xp",
  "key25": "2v7LkwqVSFUW9DfYW23jffyPX8uUrUd2KkG1CqCJ3zsK6YZMe1PcXqZa9SnM2zSE1Cw1pFaoHfBY8fpVk7Tdpgj5",
  "key26": "5ZhRTQUge73diBENpiaKFNuNeAP3iCV8Jtupj9qs8ZLzB1ZPSQV16Gvvi9G6VezPWhkwh7edhJg3Wx2wfVVqKVEj",
  "key27": "3btq878U6YAvzgnHR4YDVL8JaghXfgBreFfgfRjX2WKAWs2to1paDXnhKCnz3zzvEgQRzFZSy4DW6mBf8QpLgajK",
  "key28": "Shv9VTUfs3Fg5GBDZNgQ2boGURyNGZsFbP3ZG4PPq8EeJpLinh1LNHTppaFKoZA2PzmhPrdf1AUHFrZ6yzZf5Bo"
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
