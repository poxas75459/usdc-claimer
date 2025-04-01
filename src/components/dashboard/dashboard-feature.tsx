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
    "5GDtUQdXC5VpKjgscigeCLtwJXFWvQ16Ya9q57ykJqLZRebHKqibk3jKhKfmvtpjHqCHDYM98TDBkUUhaTxpEAhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8voxcgpGkgjj2zUrrGKKyHLYwrzxU66pzsB6ubniT4A7ao3y5bMNXBsfyVoTKDgWmEHWtiYNTXnXChbvrHnG42",
  "key1": "2DVqyZxjLisHfosRTS4Kbw5hBMYrnX22VFPosrj4mrcuZ6Kaiswm5iqTPbXQ85BBXPg1bTAD4GWuNZE6Yh5XsMVj",
  "key2": "42NiYi2zuG7P4hqsWXSSLK3o8nsnqJktZYxusTDEKjsjp5ynfZfTaRj29XBdvtw6285EvCzTmzMMK6YRUujmXQYk",
  "key3": "ya48E55V4kn3UqurkKGcmx9tTeHBHaRPFHCHf8UXoaob8addbUSo5sQXGKTr7kbjneLKdvtCqxQK1ke3hf5gxPp",
  "key4": "4zTCJmbefCP17szd9Kb9Lir1oNQd7Do6sXJRFBqzZp1bkRLxCBiewE7vbCJRmoLYWZdYYoksSJCFHoXyhtj9JxpM",
  "key5": "2R3ZAGjLMPPbxk8KpMJGxdMYjhHZ3tq9LEzcevLLXVb2QAbVU8Nu1p8bVNQFWbRop2fU5pKJG22HMQPqfkT6uwsG",
  "key6": "2FkBQAZVNb2jXBS7bDGZyXG9TY79H8gmRfxu9USF2bw2A8tmp6BXBN5EqwkgRTSdrH9gH96VHhMMQZ1ifY3jqvss",
  "key7": "2fAESNNZv9mN19VfdGZxYMzJ945kucnDUS4d28cm3o3N3eg8BANwjcS5rQQNBsmcpZ1HjTWn3Gxe1Ac1Ct2RLfuk",
  "key8": "4PDQKtKRtNHDM7US2fA1pmRB7BSphtKYuwfA726hCYuXELHBgSnpadVgYQJhUDzCqHsr7dbv7baDb3wsqgiBD7Zz",
  "key9": "4J7FPQbxRLrhosGFLWSNhS8cjT9ByvRyC14GkGn78kveDfttzC3GQ6HbsDp1qE38gd8dj7fASwdx6b6gVpkNy2s2",
  "key10": "2nQoUjKGP3VZBy6TNSdCNkzqVbQ3UPf5XucNxuTS1RYkssGHovQ552iasRFnNsoGgbdhrcgwX74s7ebFg3mFCToR",
  "key11": "54W3bEjm284EbyHAjEJCEWB5L4yCvXWCyZtnnHXjF9prX4Dz8KF4Yi1yZXUdfUbiFnrYMLvZqhLiuRsfZzmC8Bvi",
  "key12": "4GQQ2RkLr5NHgakY767oR1zfc19LAebsDDTHNiRcPnWvcGrqtr3FKiRPyTx8HiihHqUyiDTJxNZCpbgqomv7JGVT",
  "key13": "9TCVV4i1y4kLFD1W5RigvRgusDauNyCAo7CFdDhaBmGeJ3JhHqZMjQ8uXjygJktwx2E3UgbM5D8aMnkbYkYiFB2",
  "key14": "5GdVhghZZCN16W9XyEyjLYdwQDKd3jXFKmUYW6ouWiGB5VXkVHe6cjcbFf1MzNhArcTMm8HAtwDSj5gRD1Za3f1o",
  "key15": "3P5YbHXUDU25xotT2RT9c7MGAkx3FatnmotPbSeRNizWkR7Ax9foFmkgpZ1HweHhu5dRoMg9wVTkR88Kn74Y2nDN",
  "key16": "52n18hAzaUhiRm9BuTfecwFVSob9Em7GcV5ZGDMnuXELvPhKTxGtEoKphWpgp5yVQpgHhoVVgvWtoBUavrBWQDCT",
  "key17": "2dR99SCC2sHEjUWskSB9RzaVNEQksFaiJFm9nMonFjvzzFURCkp481nNUNmUr4iGf18rdvir51bCVYE9ePvqrrSf",
  "key18": "3mkpR6N3qvT6g1hN5mLptvjgN5NtKvrYTkGBzx81vU2CwC5kZiWJLVW7PjsnoBK3ffwiHWnZDLHKsF6o3E1fQAMQ",
  "key19": "xhuXWT6h17zzQCcpWfJ4KUJoTGWAZHGf4apQj8tidPtJ6YzENNrkFoTsXfwLuC352h2QX1JvduVkJt5n7EqQtyL",
  "key20": "4ZdXWhyh2wGwCP3UTXKr5cTQGcysu5Esn16uVyodMdgud7HWrLfwwGZobU4AYHMa7B7381f9bz9VdZs9yRhxUSfU",
  "key21": "5vNPW46ZAvqBYhAE27YsdgcvS4zZr4WDmzCzrAfMs6hXV7HJnfCBiZw5SxR9E6yzs2kLsHsNEgNozetWxirRtW8J",
  "key22": "355eg1KENFL6r1azE22wYfpVLu7VwRcbiLsSNuHucojfpipcQbikHydFDRLHP6gGEFXttmYAE6ahBTJJt2fbKWwU",
  "key23": "5CsZst6onkVSm9GBq1EmfSkrgC9ED42APSTKLsW6S224TKLtT2FEVwPFLMJykjUGXpdEiPtHaAf3BiJ4pK1NKnRo",
  "key24": "2xqXrhU1CuXMaV6qZBYEJdAsnFdJSZ5peeiRbQoJNvjFMGYyYfgGFMwyDk6AV8VgkXEMfGNWEU3HddMj2h7jJUSQ"
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
