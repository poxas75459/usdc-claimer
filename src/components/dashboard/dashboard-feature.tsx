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
    "5UWqVAJLhcetv9gfWvkPCNoeusy87cpGPQd2C7x768eVqaReZ7ND3neyEPP1xEAXoBZGhdJdGiQBrvfyu1k2pGNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTyCbi7vStaYpHs6SAXFSmV9Xz47YpKTRTM6k4zSrXrXqnkEoo4A4L5ky3rwBz5JwF8eEbQNJMnNDUbgjqUq5BX",
  "key1": "4sEdvrRpxSEcL4KNPjYMw6Sg33WhDa311YECypynH8PdgVSMSDzytJSg18eUHMYrQminXEBAjLvMQotFtiPVvkKB",
  "key2": "2QsmTuAdBHKeTmhJZGuoY7yfvMEDo7AzHUSiKJZ3myQC12sfTm2ZP7qw2JJCbHm4XTLmxg6DwKTFm7HujaSfa1nT",
  "key3": "2ArkGrM3UCMYF7WWnpkktX7HBSaYSzgpnNiv53Nzak64p8SEUwpoCMUinLmJAFsdzXZ8MYHRmbAoE5k1Dg8CpCn2",
  "key4": "4HJj95BDKZjpSrHqGdM44CjRDQtbeEUFfBYFFYzH57RfetnHC4fnKZqmTevco9xzZiz9NjJnSacfhruhzGxPyC8X",
  "key5": "FhnpPeCq3D936a976Lgx1YgaW7c6uEh75t37MhddQ5FZxxu2LgVpP1rWYG8DaSJAuts6XHLLgLDAa4RrU8QcrJn",
  "key6": "4mPHV9hDBLyWez1Ra8GbZtCk6d6q48bA9meJXBAQ65Fe7c82dbVH2aPbnbx8HKhxLcmuo3VnEVcmrpRgZrifCN9T",
  "key7": "4dZj9WiCLpEXxqRi2y62N4QqkyiSVy1RPiwCQPM9Ms1Dn1cC8XyF7F78fkX6FGjXoD6BS1GMcaXr837MfyjHa1Rz",
  "key8": "54Xcssv1pt8q2ShyhqikBzkxEqBsHdN52mPhmw8s3E7wUHDxhsJAe3vkGCJkY9YBcWq3S86t14VS7oszNMzEbVik",
  "key9": "4zPH7riGNLHkQh4GUpkjzBsbJkqboAQLJ42zYYkFY97wQZCpdtHKK5CqDjH7GMiz5xbwP5auhmLGfSMFfaPeKQZs",
  "key10": "5ejgt1CDk8Tzo8oY7gFedqBtFuDYhNUMJug196RsedhpGvm7mb9nVZxfFvTvxZChoX1ci7ZTsaCznNvNZwgQY2f8",
  "key11": "3EhntZicmJkeg2dkrRa2S4osxryqThnQYwoF4pTp9d9nHmtYECWPgy6hWDuPFLDb82RJeqSU85ew9HhremkvZRdP",
  "key12": "5exGuGdgEvZACitx7zkdvkb8Z9rkS4jVhXJhzuTq9fiEYvVLe2ZSjgAyNZBfHMq931cJYJ3ar9iovoAA6mGtnijD",
  "key13": "5ZL1erJz3tZ2ZSkV37dddMxDN6Cc8DcaNUZdvfL9Wx8D8oQFFgLcUsapNmWQNrRLYgMm1xn8KvXHq6CH6od3Smh3",
  "key14": "5k7gLNdpmGSkVwDM4X147xqJfwXYHwCt2Qw3Vfsvp9PuSZhbgiXnyfp1DHL7mLQSJwBbiToy3kSbfQsp7QkcVL5G",
  "key15": "3cZcPVsJ2Ncj4i3k7Q5HNwFmzVcDRpY5cQveB6kFVw8dLbNPzBpS17zxstWMWiqTXkJHQewS4kFR5y313heLt5T3",
  "key16": "2oJHt5z1sFBb4BQbuf7vsQqPegnB6xqiZmndYRqQ8sFchcZoxpFftuKMSWDMphmu8aNYhQgQQfFvsMgzavHm7hQk",
  "key17": "3xxALMew879hCi6aBkFkYSnvUkjHWd7SqwicMBG4a4rVZwre2B8koFEo96Wu9WgJgDNeC1pLMiWDKAFWV3UYhN6w",
  "key18": "5NtTR8DNLRyXjpJv2UVxVPiqMxBko8asJhPCxPQBQv3yaSrhxXKmdcDWoqw6ZDZ9uW3rRKayw3gwLqwyxzxzq71e",
  "key19": "3VhUDbuxsWn65sgzsPdX6YV7nAXoBARHgPABEac9Yo4uE19trgQMtBpjPuP86moaUcmGVLhvLJE9LcFx7Jv8pEcj",
  "key20": "5hReZJDvXNPmKVL1Sbg7fhYkDrjJuCPpVcNQjj8FHLjBzamMCTcbrfAfsfZzH7UHWA9v4HhzVpHHAKzhmemjKxnb",
  "key21": "26uZS3bATiPjqe4vss56sny1SyGu9nkrZhTvYidUpjxeg2sWRtBKaFCWrQRP6x8zRprFwtWDtw55BLAA7vGj7XvM",
  "key22": "5uKn7n3AmDK9dfFE54B8EBQ2C7ag6YMz3LVuYGpUreYJoazv4bDL4JsKj5aAVbsCAKPwXGJyHnK2o6ipvXp85Jit",
  "key23": "36q2qkgRmJHENUqj7NTrfGuzyo5aqAqEFCxkqi96yPgiDvsBrhEgoYUFchxaAukUKWNGScZuQNyGULCUQ7hiUzup",
  "key24": "5dJ1Qs594uZ3sqhMGZ3eHhmanjvkgVF9DmRqioFU2n32VgjvtMwgYMXZPbWcDCfu76PE8NdoMmBpCSmbZx54sohU"
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
