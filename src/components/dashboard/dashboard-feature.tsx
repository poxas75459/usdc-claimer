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
    "4vFMRLWuV8qKvgvzqGfFKC4hW946ZtZ6MxTFHE82R6vnMGde3sgK3r8tr5vBiz1jBz1d5aouPN6fzZojjMYc88co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQ3t5nHSam9dTPPSt7Pyf33UV4vRMzW9aNY4joj3kWhxtenvwNtEs1GDhceVcXB1kgn5VsEo5EaqohwRg9iBMLQ",
  "key1": "NNEJ9D7sD6j5CtaRL61BUXYNfJyH8rgM7qnTbUX3Zz3UMeeEvqGTZ8WSqTZ4KrAdqPRrXgaPWZXctrnyJMSbVWq",
  "key2": "3YnGWaddEvXm596jr4uMVUAE24z1f4dxmoeNyGArzvZGMB8ci4GN4XxqgrdXin8G2f8zAtm5McbRivox3iCZScj3",
  "key3": "49YDDYwg6JRmk8s1kBULpLHsFGBaF747gV4DFBgfJmzxHyGLSj4upwY2ps7Vhn7BE2gqBBxzAjErVFWE1HyG6i2h",
  "key4": "2RmTrEKXHjVcboeCnMvYjt4xWUBRBajN51PctacBEUbrNJyGARkSub8JcQjRTykjDnsnGrN3m4h8vBXvoqwt8DYC",
  "key5": "3dWtdaQeWJKTXvhHNypdGxPwZLAbBeMHqft58js1tG6VaHms5GZxfoUEEUjqGmQBnhZyN5EkBM86mGL1qoBepiWP",
  "key6": "4PmA4VWDMBs1NWfJi5YsygV4dUyUa8ZF4htktBwxmgQuKDE2py9X9T8ibHFFpvZNt8HpJh4HkQLm5AJ2e56Y3gfJ",
  "key7": "616tkpAVfU1jcrtw548VKzTL5UeS29oX9FqfbNYvPA8cwu9LGmnzgzihKXFTAyFm98jsvnSAYHQKvSy8z92kV22z",
  "key8": "4z9puM72HBU33Z8RZPLrjGn5vbKqXfZVcEoJL6sDDK5SGgUiaFBUrBHhhd2ASdPtmF5k9TG2BBNaSu8JnimaEFgT",
  "key9": "4j3PCxfptuZmbxjhXMUPCZjM1oDvH8GpZ5jVKgg3xX8ioWucc2rgYjoQy2zD8FSBXUPYo6hfQe6GxymoWcX3vZgc",
  "key10": "3nnVFsWcELxAx8hjiSHTVKQCff9jD1L1wJ1u2s22G9xZzbfMTAE8yxGqLAk1SY98G8RZpEjsLcE9sVRQcQhELPMr",
  "key11": "4akrpAZvkCeBhQf4YDVZXPcwB9Cb9hSxPC57cLNtfWpntQ2VkWPLrMugui6WD6iJ86gwCjASPdtfWJUyUt5QDjMS",
  "key12": "3PucxTg8ZQkSGeJcdMiC8qRFGmFpXEQ33bxLJhua2nz6GpgVxU35wMgJBFhVEEdQfEdTqWBkZGJ1ku95NptpkoWv",
  "key13": "5THmV3y9c4qZGBhe6TTZUkHjHEmvKZi2cquF2RUQKtBfJjKz7FzPFEBHQfoBUJ6x1VChBQs79cfx2qaQHafjNkUy",
  "key14": "2AQSDFk7ndLWLoEh6DMixYiRmZ4wzxdtz4qnsTqCDUE3JbU5KDo2BPunhpz6TEYZQkcXJ1MkbX6RMVj4dR8C1BnH",
  "key15": "5GqFp4nuGddZefZnXm42PhNbvGhrFBHNeNzPaYKBnDsrY2PX7QgLQwUq1L7x6KoYPRtuLgE1xh7GgcevaMGEFQVX",
  "key16": "5udxctxXBTwJn6mzcwVqncfJzE2e2JrDZP1h2XNDF4YE7FbJGV34Pm3Mum9mMybNT1magpW83uPTMA6QSgegRbV1",
  "key17": "55zA7sHLZibbioKDWYix1xNZP5m3w3bJZtquMQbcJrjTb7oRPTuWCgHwXGPgEBqteW2CYtXyNzYhDQC9Cn3xm9mp",
  "key18": "4ymvLvKyj3DMqr2Taci1yqmvK4Xxs7rP7PyZmH7gDKNe86Ua7MzopiDdPiMxcEQnLkqqX9WtLepBeFP6GuZ6cbFp",
  "key19": "46We5k97sUjYgMYpudiGt4855NyxoPvsyYEgFLNRW1ZSirGZQvCDvY1fb2sAx9FFc6P6k7E949bSGvQbn66uPKab",
  "key20": "fa7fVUfmpL7mpcQWzku3xVusGCWSHki3U6RpZUyMEMjvXobvBwNYFte2ZgWVgSJU2cQp5MTR23kxDw2N4XEfjGY",
  "key21": "q1GftTLQQriSQFxZbdp8gUMmXD4D52TYHEpURxrvtQQxMhCGyT15QJWvigCDkQEv2pLU26tTJkioiqbmkj6qZRg",
  "key22": "3brbxBakLPEGAbeCxcNJE7ULw74xRQA7dR5M8AX2DYeShwyUGsb7Ap79957WPZhDHopyVX6yWztp775eQHoeXvpa",
  "key23": "3b6zei29m8Te8Feq8UnTN1E5p6dGVMtagD4SVL82ZhPXwPkbWj6RNw7Doz3bMG7MrMi9vPKnuqsVFfhZbrDixSUH",
  "key24": "dfpbhX2kdBSmRgVnPiBhfqzvVqenimPVmUBV61LE7So1xCJzZc9Qg58ga26p4rjcsnUt9EchUE8XPbHCoBMx2A4",
  "key25": "2QsP8rH9w5gWvkb2JVEKrCoWeA3rfibrMYs6NBnrAYCuTiUVdEbmoQahQJRPme8zx2nhPBxN6N1SKwpmLZmDzyqB",
  "key26": "2t6dedN1cBhJpnRcZW68JgAKvDB5F6K8ujdxQRNtcWhvN84WF4zTMY2pQSX5vUWbytJxPyHN8Y6AxEvmC9aFzUBD",
  "key27": "2JsnMa5m3e1YbQCZkTLC9Lzb5gFMmHSXtPPYkuBz6ksTUbEyuEPr5fJp367d9tspYqyxXzeQJkofH53QdMADspiM",
  "key28": "mV6JuAi4LxCsJYxP3rntoMRFkpXSCwNYYmjWbDT5NW7fBwg4Pv1BC3gLNc5TE23aDtdoDiV5xpcDGnQ99S5cox9"
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
