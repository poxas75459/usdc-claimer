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
    "2VaZVdEdfdBfwerKSMYNkoM1yvMNMu9s92GXWiina25UwUZqyZ3QSrZeNpRWVv5okeA9u5adt68wE6wcGZU1frFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129HeqcCh892Eh8NbUyT11WAUYHAwzkG3q3ZAdd2HJ7PSUra32aYUqZBnwJ8EcoaY6nnvE2GfaybnZSKBUapUmsj",
  "key1": "674S7FwYK9LZErmTLUs3PnH64UWboEEBtA3rkMGnpHYoD6CP2LpBcm3bc3ccvNB3wbnKNSfohHSA7cqo3dyL5bxc",
  "key2": "3JN3NG9Jk3Wr9fpxkt6L2RZxEeK6vC1ffxqiWKpLUMk1VLQdeQsAB1YNmAz23w559ZpSZhULg8bu4ioqmmfghvLV",
  "key3": "LSSV5S8VmXC346PQnp6gmaDTZNyNTpNzY6vmvjSUbqrzXkmeoeb1TZyJuK94Fpfcc3mEAC54Qa4VHz5SAjEWqWv",
  "key4": "2HCsVMCJH2uiwawYdBXqCoygvjD439Wucebps5rZKxKVUXxk6KgPbDMH9imizP6V6y3rPWYGwjxQZoF3xon4z4c",
  "key5": "2YnWLpoKF6eCNcZMgEDNWyH1N2G6nFqQ4sAtMHQh1HpM9emxXjBZ26nQwRWuo295iVtgupewVw7KjbfUsv9azsQm",
  "key6": "gNCYzUG3xTsaNqfXTVXBgXDwxwvNAsDP7vnQSkAJn3TacZTEuGn7TokFcaNVrWZLqdbR9354edRdHx96m4EfJm7",
  "key7": "52hjiSMNm9GDVZH9HyUBfKX3fwcE4CeJv9s66q1ZSVSqumQm4m6RLqRqtDVYUcZf9q5nu5SYrHRtA8XbxvE1CHgs",
  "key8": "2y5FfvVFxVnTtrtVFvfkDWczUqskdcnCg9JzF5qJC43x6aPpE61WzswG5RziLvF74fjmxr4Afp7PUaD6pqK9ux5R",
  "key9": "5Jr7Pt3hDnq6cGHTC7gP7AEjyWmM9ETEyqYZfQgUQ3bzCvfBNdGCYttznjXK4T13WyzQLYdXGdQwq89ntXobNDh2",
  "key10": "4cdVY5ixfzkNJCR8X5pE8mv9aUQfQZEAFfKbLGBjog3yDxwaTzRexZRLfNCKRw4ebjK471rKxpRGVzzpnVBGBGMJ",
  "key11": "3C56ct6mHUhwBpMjuYKEe7E7qxs8JxvvU5hawHqPuPuuhrBfPxXbT19Lv5Ng674yj5ZpaxAGtc57XoHLaVSAXbCa",
  "key12": "34VVrBQdTmAhNvAJ3egsmxtimMUjQnRF8LBxst1p6zM7zobPKoknWiEeppUsPwUodW1QwmmEGeRzw4PMpkL3Ptxc",
  "key13": "eJfUMfJGDJSBwuCSXQZ9nQ7Qu9CHihph1DufrZVR7hmQwkE49AmftaLTFJwmDxY7FerA7y29PnDTVSwDkRrUYAt",
  "key14": "2Q5R9VGTv1nDQYzZQ3pwMp7c1LUVbvk4DsF9kWGugPE2pEmA2uWPmQR8dj58zWxh1aFwhEmVk7g6fr28T6qdPz7p",
  "key15": "2YUYadSv7GbkWiR9RwFYPVSPWoD3b9725KEj9c6yjK7rTCCWNXWB5HrfF1C41dL12bzyLqsLwsy4aA4ywXj6YeGX",
  "key16": "5qEH7jMqVmU2V3n2n2XkLp4JuEHAU8i3pLoUGZPzpVd8YHnZ1whytMqWTsZKmvAbaBV8Adgi5FqEzmugZAiwGnEn",
  "key17": "gjwNz7Xe8rmbszFHmqAnD9xCw9BANQQoMpmUAZfpfJjnnPQ5rGfjAA46EVryjqsi7hLDWnq2RTjGo4wss8UCkVg",
  "key18": "4KmrHXEVbsHiBmRoUxPiWw1cdTXXNGassHVS7GzQE2emivGxNmtDVcLSGh9ZLkNxAzvnLjWAvzGCmu5M6TksaDVb",
  "key19": "7YqSpVZ1ZNaugWSNYNAjY7j4jUPK3gJmc7KCiNFQgm5vyzsgdquQMks6V349oxjiXPhH22LP43hj5oiTubPQ94c",
  "key20": "4PwsmwzghDabwehPRyb6smYymKPyHZ87PGv1FuZSdsgdub5JBpPiH8vBVndZ7Dm9pswHA3UnodW3RtM8psXPRUiT",
  "key21": "5Hgd4gGUeSD3ejd3iDu2JLG2kP5GZNsirv3hMdfkoXoXgW7PWVrX9uCmv7kKu6gShs7MpBM6LWfAWaFidEc9SGAm",
  "key22": "3GXCUsVvyh6gf1K7HvUudn1K8WaxvYRbDfJCRVVTggbeGXhSL2ZJaJfnw1vQzKLUFGZJR3uVZfp73xkh7uBiFMc4",
  "key23": "4ZFdFbYvFGMGV2pyVukYezZUg4ur5PAwzQWxXD1i5ENQ41vbt7CvjWxXZbkyGgnA8Sj2GyxHcpLubvictKtYXgCH",
  "key24": "21ysvjwkgoFEam3qQtx8dfAfqhhD4A2GsmPTRtNfzHKd7i8jvn45pGsAoBQogy1ypbHWEzqFXrKCLDEdEFXw1r3R",
  "key25": "4Z7xD1rvnPK6feicY5mAxU8Q4CU1junYq4GpE9Pqy8YLZXfZwzR2Kgz1xheFKLPMAW97Yf4r1jqvcwa5vzHSuYic",
  "key26": "38hM6ooQQnb3qJbZy6Q6DVtNzHy7Sg678AyUsaEwmhyAC44nTg3q4MWTq8r4J4e9GR1sbLDDKr69Hf54Xvo3XyRh",
  "key27": "yngoTWhV7ZLrFFVN6Ss3jgzUCLoh5VpLH2b6CwMZhtMkhFeSta31X1DYAVTbJ1HD8CaZe45bLhBbrX3QiEgZigh",
  "key28": "5EYE5fQEJigc3kpW4iUeRjKQ6cE6jkKN4BkxFgWEFikHsZnsj6LQEwtRgCEo31FGEy6uvZ5HUdjR3hYowgo1J5ij",
  "key29": "5ESNrcQMCj6rCqNcAJ3HaSSK7ZK4SQ4SbNbS1EqU4DqMMTuabkkY9t7E81RvbEAZdrHx4FsdbkUgu5wXBPPALgxf",
  "key30": "CzGn2iwoB6Eag7hEbY7a17c8UkwzXBLqiVMpvcEejxKWy1KSz3QZ74f99gwPbRgKxDr9pGofWHxivwmF4VigeZZ",
  "key31": "31Qw9BPHcZu5AKKsJbuJomw2qnAvAex6dWhS9eBwj3KjB5nnKWFqo2KELP3rTnEdo7PCsxZBQByrmRG2mfynmGBA",
  "key32": "4wQreLKFZXeRP7jyxbRavjpVkHPYbdQaNKKKAbUZVASFiYQDsrf8hPq4gPNP19JB5gYCG9e5RH1DyfnuKgs5T3mZ",
  "key33": "5NMf25wAuhn6V1P1ntZR5gNTVXjN7oJPtCgPzhnvxu6WpqPEmjtr5zcPmXQqumHsU1W94WQPGUQVU5dX1gEfKCui",
  "key34": "3WwyuZS2QimG3W4EFssBvKUEFQQvvzGc4qEJRbXk8aFMTtbtMjuViWUYQ9yHqf5xsUqXxGw61NvcBaLdRwZub8UE"
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
