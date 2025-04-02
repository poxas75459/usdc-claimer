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
    "39YjhJyVavPhgcY61ceaGr6CtoaEMqwHKpMAnC4MCTCq8vrAcovarEyrfiMAWYiy7wXnqiY73uzv9pgGTzaDQ3eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m3JfUKWqLVYabC1YrYoGsVkBAETTDfm2Awae6Kh5xhyqqEJmjEc1vyMEP8rHepoUkx9ZHRXJJFDDgRkhucyUN69",
  "key1": "4XpSKvp8zBCAT9XA1LYf2huCM9YfMacWPE8if2M3HKpbNgHhAfpt5VsQnjZqbY6cHjkQJfowREqnNZz3eVdgAKJf",
  "key2": "FDu5Pv6hoMu7G2GhcHkeRS1Nz6rB8yf8TiyrBqrE9bt7QTUn3uPFiqff9TYp44BpbhM8wkA9xeCpgdxcDC4CrtN",
  "key3": "2mnJMJWhguxBwZpQjCwA1ExinHhWvB6BaJwFkB9bgMpkNUy2ytAFzMvUY57ZGFwmfaAFcwKY55NBukRZFXcjvuDM",
  "key4": "3dzoY87bSHm3kiZhCyJRfAmyVPmsjmmNL7PzfWmauqWD6qELjUc93ZykemmADfY5SfnCHiW6AGsE4hEAMGHqsVun",
  "key5": "2ugcKcu5nhj9MgVaBjywxWBBBvW6jct5HCuQ3sStFWXw9x81rB1zJmYe9vSMEMHdiX29E7ApaSv9ubqXSdgrBpje",
  "key6": "2vehRBVoWrg6hZ2LFQEwkYyE96dc3y53TM6gUDwoJSpVGRzNRZXYgrq4sD6RzLVKHbhKuX9AW3s3PdGL9etcPp3G",
  "key7": "4wQZuwruXau1xChuy988yMY4fqggNYAY8oxktDjPfisaEBbVpvRXcGotBRqAhnRjqPftfQaxcUwfmZw6KzCQURh8",
  "key8": "2KeRVSjk918B6gmRGyNgStnnvRCDyQoeGazzW897HqUee4nWqyr5jyWQCYkX66YCDx1hy3Jz9g3U5MJHLqyr3sk3",
  "key9": "4HRnNT5WrzrgujQAm54U36D77CALRRooHPZMva6ZpgbDTJG3jJ8ov9naRcLXCt1sQSmSC9jVp8QmyGJKugzsaEZb",
  "key10": "3fyk6dHi78xSuku2Wq7xGgm1WiVsQff6ZWtNEUg7EfDprY7XfbqwMGMwDcLUY8Bi74c4HLa8WfvUC4CCtfYeZN3v",
  "key11": "WGnj19RgHJoKyN3hgdrKmvu6WbcLtKyHCq2Pa967LbLSqiUPbcXHwXhf6e4LfrhJArPjQeb6B1q1Tm7Q2bHNDzc",
  "key12": "2v94aQgJxoaKsjJm6GHTCvMdVea9XGMF3L9BenmfuoYeJVfHtiBfKznDVcsLU9SdqJMSKQCwCejj3QSjfTRymcd8",
  "key13": "253W2ZNn8kn5QARuHh1pbkvq4pXJsETb4FoAYtp9kFGHzNnPTdg2JH1weqkuAWHiknGqMjkeKPFmWCeTdopjFHtg",
  "key14": "2P3Z7ATMC3VTUkB78YxEagXka5HhtyVsjU67YGTCMAf9UPtTSDhahcqrZQmPhpvZsHkzuj887bYxsTHvFhPH42TM",
  "key15": "4EiRdFGnXcJsMDhCQ1KU9fy7qjYJ8ZitisrmbSARPdNdYbn8dCSqRduc5fP1Twm7TWBzYrZy71dQCqJehZmAajyk",
  "key16": "4cU1bdSYwXpDRgqfEXWiBKrMwMYd9FxgwfnA1BrMNuLYUYztFLw4D9Me3ywU9i5mei9hTm7kSJLZ3y4Pvu6WJLfj",
  "key17": "2dmGKuxNNXpKNwipwcuTmxUuJRNhQ5yrRNVrg45jk4fkyMgEe2SmDGBHKko4zruuBNgA7yMZFXgF6hYFQpUWZHiB",
  "key18": "2M8FH3E1kLGVbL3tEPsXEUoFK1rWpq1R114Wgvyjkw1rPQntRsfMhQro9TTfuyyaMiRJ9eiBdfRTjPGK6kRcjdLt",
  "key19": "dwkX26ujtARipXed7jWmbj6rEtiZQ4vQwr1j9xYkUdNz5J8RMRyKyBKbsu97DNam65qWWVi2ipDyPv757VXq8Sq",
  "key20": "bFFpgRotYJf81pZ2KVKz3FbvBv6ZT6ZuEVDsfSWeA49vixM5RgmGn2PPRSHbri5NVcWTxfJuj29ycpcJtAZf12S",
  "key21": "3Z2D59iFNoQ9uURQFx1MknwxYvjJaNjzQ6tPzkWn9YJqa32EKcZv5HcuDi8YyjQ1bP4rbAvtTK6u4HC399eUiFWD",
  "key22": "5B9c6Hef8vCMXKPP92WbSSo9xpDcN1LfWcRsndEqBLBWN5xxsXZ4Tdnz7tTr83j6DjJsNSLUr23kpWTx19yqB1i2",
  "key23": "5dpF8sLCouMHhxehigVvBsHp4XJUMaEe5r9d186yqBDseLAx8dLH9h6sJP7PzNW3Jigh7YVauQ5eymw8C4MkhSTg",
  "key24": "4jYZMyYx3SbG3q6gwP2WXddunoDogntNP36xGf3YF5fhh3WGbeqaLwL1bTLUFhw3rpak4cay8pxSREtmQyQBTEey",
  "key25": "3sJP9DDaitkjiqgNjJ7mGK28YjgwqJgUmNGF6gKAXYrw2ksAjSfZT67TrA6Z7nWNge7e7oJwJX5wBdZcFMQe6rwP",
  "key26": "273xawDcgT7KackkQGhhJDAJ5Dk68rtqmpb9RhpsjzhqsuEGLy18mg19phiJpsKTnftTU1ZVky3T8yhSaK3XCUrR",
  "key27": "4MhhqGbHn9S9mLoKCr48RXZZpyLZjeh7ELpsaUgfSZrf6cDcTeQ4XS3TGKkoAmCYWxkcZ1sHJNZPSX3tveLa6mfW",
  "key28": "45dj6GpqifTupyaUU6qHDYX4e2HaS2oRRw66DasC7ThavTQGNSu8wDUvEepbPPgb1LKD72JHTJJLgGahrpHbQ2jq",
  "key29": "5roSQftLoz9HotLaUiGuS3Lrg2RLdqg6gwi814oyuFbY7oXoDviqaDnHFeXe1WmvHPwgJpyVv9M8Lev3nt3rra9Z",
  "key30": "5uVdimDTRX228iyiHVQUqCARALQtMNrJV8hkw5wTrgexfjqBEMKiu6TZvCq15ZQmLskvw4d13nQeMFFzkEcYeWGp",
  "key31": "p2szhRWtm9M6vhQD1RMtXRdYgwqgFwPckEKwuaqPEMG3pMpVdxeuh7e6ZpCGq3n2WmrUSrwhYYsbgi16h9i7rDz",
  "key32": "5VeyNgp5rN1vfwEySxyHUVz33U3KzhjVQG5mBu86GaSiCo5CboNxEzaBs6Zu2kPBgPvFbundmXmbKcS4wDmCDSjJ",
  "key33": "3PKb4ML27py7CDxqqQQyH1ciWigA5bMvSYCNrC8REKDtgrC2H3qdoE4ucSzJQ88aJpafoDPoHutTRDH8Gn6mAvqh",
  "key34": "6nR4GnxrDUxARLf9DrbYfD6FJ4jDhs5o1VzqP8nazwtYYkdz8EWCrbUyWCfErz7ZVGiK2gTvNZQBc5EdTHCSinK",
  "key35": "2cm4sw9TmMX1wncqSXi42wwJzRBAohugK9Y4JrEr4LLLRG1vjibe5j5vvSzv1p6psLRiM3DpfZ7pfA78xzPHSAUm",
  "key36": "BMUJiGt6EjUCg6AuFhZ8nt6d1oHNWrxLNg6XvFgCxqLL3LUbiNiehtd9fRRpuodrfqLeKPeetLWY7MLy1eqKrED",
  "key37": "4yY1MQC94DnzTD9BxbeLX7P3KFGWdKkLpFeMyDJQx6ZEgooNUedkM6JyVJq7yh9drPxNDoN3HNqqZR3Pt4h58XHr",
  "key38": "31hr1wiucNRmZQPcD74oMfKheGtbga93GcN4ArQ8LP3JzwkzTNVV5QswnMKTug2WsBDfG6RetH4ayydbJQYdnr1U",
  "key39": "ZBA6gYaPYJC7yj93LizSfHw8L6j2Sxvw2PkDPcezJ6a8Duv2MDEXEz2GHt8JubkfFUtKZwa4982PrUD8qjmyDR5"
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
