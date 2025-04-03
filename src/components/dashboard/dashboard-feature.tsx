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
    "25vPtBoQ6XyX1qhinnPfjq7chZ3JgVxM2K6hLEaX6NWQu6fBGpkUN7JveP3bzqKjvcBJdMA2TKT4SW6joTzbzPiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmQSZicA5QA9AAV8QtEiW85zm6j7eAJdazUSwtETZB9mjQM8JYvnDx6XAAy1Fec6gZ2N28DTKQWfxskKz4fnpyx",
  "key1": "3jrt8XGEC7yJxhb3adzNKcq6mALWPUsXnaTxYgJRzpBmideFwv4bQSwwE5vN4EiAwpsTWm5U3SnETkyjMkr7sH6f",
  "key2": "3dhc1n5ECGBWhQMd99fNAZbBYTBU1ay3zhTw8wujoM2AhdxyE4Y7ax3Uy4AaL26oLTgz46qnJfHXVMYkpNwWYCGP",
  "key3": "3YGG8uHaVsMcCvuKPJhGvBMhense6o4GJ33GdV2Tev4FqPZrADntRwG3CV9FVSFyt8jcWF6avckg6sH3N8X86Kam",
  "key4": "4d6su4J8oGV4AAtBec7EVQf5so3K2JS7N2FqyPPfSxT4obATPyGxWYBZge7Leo3onKDWFnAz1zzCAH3uTGFNzV5W",
  "key5": "4bZutLc4yZ8UY1sdJgxjgwx9yHAZWb2cX91fmadYdHsydkiHJimbjGu3uu97m1BzZ8uozGkqiNbJ64qcnPrU1z1J",
  "key6": "AVfSXmJryAbwbL9wkgES7GyfAsQLHiNzdPdQc8QZncaS4BAuuNx5txNitEMwema8cRj57kRy7SNZ1RVzrMQx2Bk",
  "key7": "2CHK9c8vq4cBf6FK4mjun3eVc9KgjdMkxXwvF3ohrYeN3Q2EmKgE4KsbixLJ9pD7s5x73XMpgQAmDmG7my9v1q1f",
  "key8": "5sz78Bq3XzEjTEuW6ep2cywigBLRWMKWprqd3g5AkxkT32iLygENPSimLQzjqetKkLfyYZU6LAPeBk223hiRtVZF",
  "key9": "5BFUaT1ZouUiCaFmuKf8hKr7JDRT3sMRLBMVoHTBjzisEQQEcLMgDhnf3D6bWDwFhAihm9vc8EC9egtHqRamPYUt",
  "key10": "ZrmC9jzPxywwbjpbGyrYn7opkyNx4nsuGw7vNgaUWaPk4cd22QW911zK3VoGkuvYXy8o7wDJ5rTSnnVAJja3Sb5",
  "key11": "KLQXJZin1ohP2KZ5xS2Z2FAApbwVJydauHwF4PQkG8ZykBgTHTcMdrvE6P9DMdGXaRQVSEoazSEdx5EHAMZ12h9",
  "key12": "3MGemoKGLHJtppnMJA8oZcMT8VCKpqdADF5ysw4caJXSkRSF8nSCu8R45AEhnkAPKRgQ11tL2rqCakSbUQRbSJgw",
  "key13": "27hbe67ECwxD2WG9V7i1yrZUkbUDgVzJafPgRZtDkSUPaLYupKjhLxCWXV71RHLrooRugRpgSet7pjw1aFZ1nQJQ",
  "key14": "5zohJbWSGSbGwCNkT22YuUL7gnNUCoqZXZipbFHkhudzT8MJ9YNin7GQrBvfRrXZgQSX3EFyqgVU8dooywwtEssz",
  "key15": "4g7t68fhxPAVradfgMygUDHFGG49jqCVXWCPAVLS2urg1cwoXrXD69e1ticVZApcuoBQfp4ycuSNztoXqCg42xBx",
  "key16": "2FEP9ZhoLK6YeXtUmeKcQpdfFpeQBosJ5RTwkB9kiHdjfFQ49LbUVzaFvcgA5XN6T3b2qzreJPPpSY12izyZNbsg",
  "key17": "5tmgwmv2Q7um6JQLytaFrPeTFYy28ADHuoudnaTVhChnJ8fJkiAX9HXH8JUm241eJgc1Y6vVZJkipqHuFaR5WVv8",
  "key18": "YL1SwbDU1n8piStvCsg9ixQanQkAxLP6NcY9SM7wBwLTaDZy1TkHWTKGaoj6fwXEjZrtoRPpqTJvWWrX33iMho5",
  "key19": "LtRBVHVaMJX4d2ij1KXXkfqXCaCvw3aeBvJQo5iB4Gq6fuseWCfvzDUiAUhjrxrK5VunJSnCZwbKKRs4tKgu6xm",
  "key20": "474N9yVoyVyhQwJJoThrVrihjwAovHK1n1m33MzW9H287Wek6DdncKfn2483gmfRJUhskq67QLsryXPgSPxmHzbz",
  "key21": "5Ma2e1KY3o17Zmfjj1G9McNEV4oYWvpCRNzJa2v3szJyxXCFnyiB1pjf1BeuQ1WReVv1nw3477PqRjJa12dsnM4T",
  "key22": "2pB5MfBfmSqKG8ecDxMVC1xCbemqbsuBHLrhv7FQk921ArRBrQv2ixtaYHDXiAKSz4wk7LCfsJayu7r6uizEsPUL",
  "key23": "YqMhGQLwyVqrp7ffXGsNwJ5DxzjPaarvqNYfyu3PvNAdhf3FuXZGa1o9x9LQU6QRXeL3k5oxR7jV25su3qA3144",
  "key24": "5dh3rx7iPc3keG5EY3WsFw3AWLGUk6Hv1vd3edaWssgtMXkYgQxY2AhZBzy5tMt8WzdbirxAXRBQy1H3UQ9Kt9KN",
  "key25": "3AADqhf64nQWsi9J3GTU8vcuV2pPNJvza3R3H5fab3r9KUGkTkAFW4oSCJBhtXKp6rkaJ7WNMQvnWNvT8LZnjdQJ",
  "key26": "5sx2iG5yeLVcTR8CBPKWgcLwUYX6PDYL3ex5ZKtFoFrE5J2qfowYeXydYh5JyeM63Pxtsxk8FYG9K7BcPynbUNGG",
  "key27": "22P4u6v35JXQ3XxiNH7vjbVKGTP5GwJBysXVnvqgYq6ytzhXLNX1wf2rk9Hm2aMNMQYuZNy8GRM52yMS1mYvQBv7",
  "key28": "2zzjRGgykcwB2Xm7jCxruUgHQyowuYAvsWRzt6gWDoshXbqULQMhs1NPoFkwvMQ7rVfC46Mu5nqPmsn3YCwDk6qU",
  "key29": "2JG28kT4GchMMuP5W4kVtPCjg7QYaMJX4fbHVciFAKDC1s18zeReSAWRKiyMLVmZYqvW7RK7JoAsZ57je2VG5Z1n"
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
