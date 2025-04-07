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
    "4fMHr4ZNTbPBUAN26VdF4FVhi6wojHkEfQJLusEbj2HJRYkSxA6MMLr9vVxc4mZGk2snBT3g7JjkLxexF1474eza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5it2RbCLSc4aSFudKnbUKdZNe9exS49jjmcMApR8BCeAV26AuFLefPXY6EpXRiFonND3bizWz6FjmwohWkD6Rr4M",
  "key1": "65jwwra7inYqTJBGtEbVmE7HDC6LxfypKRgcu4fSknAry5Uz9UKyEkgd6YKbKwe9KMPAVoYXv4F59Pr2wwX1uFaK",
  "key2": "42uMhJTsP9bbXRQKSmQv1GV3Z1r3Mu3kxuGWyMDp48sfn2ZzQukxLTqdxckZJfdV1eQ4jDK68yztQKXWVFyfR2ZG",
  "key3": "42hfNgStdAXFiKMnFA7SVamMnQ4rdL63bY7pLzSwLHgSrCK3K2bcc6gVpZdKGR1skuxPbxvByt1bjFeenHvTDQoG",
  "key4": "5rznxb7zCtF3hwugJ26QyCSqACsFCKYyJ76eA7SePfWz9CS2T9iNe7Ag5ECzpEHenHD1dpyNWXmGgCAnKMkXxPg5",
  "key5": "hUQZB7MU762g6xEn6E4zwbukbMDLUjvAPWhtVYu7ArQonTaKrNspgdQvefzazHHqCfPpf7zExJ7SRkwDF6j3dic",
  "key6": "5X18eEhJoPK3oDBTxKTDgowtXMABXJB9HZunHPRrpyRR7U8P1zTPT3amAr8Mp86Ti42picNH9Y7MT5V2p3YgWeXa",
  "key7": "4TCSeK9Q58ceZmkzPrsJhHvYYkS9aQ5pcaEJT1zQMoDTJX6EjouKggH1e4215QDvXi3qJwpcPxY2nX6DReKxJn25",
  "key8": "3ueC93C9yH6LafFvUSUBqm3ZtEnzYphpRLrwqthPCGPsMk1kaaqwLmAXb8131gUmezwyhjSzXJsUehXonUL4wEbY",
  "key9": "3dJ5DjGeYDa1gAAkTU1oeVitauYBa8zNsM8jdkuzbQKpAQKAe41ucvLegLAJXcdfiyFuqHJDoM1cicnbYGTEGSQn",
  "key10": "23MVazpwTJxLQ5t7cDCJ4qtnVBJgBKTVNWaw16VoHSHmEWMn9f2wJm3DgpoWpx7RGKxZc38NyXo8VaVxqiNRM8KC",
  "key11": "5UxcgAFjLtvmV2PrNLBsGAaqDaugn15cHNZRvQsq5XhXDeQSVApwBeXumpYDwykS4cUvD5SgpKyQqcaF3Cktw2gD",
  "key12": "2uy1UaFZJ2txzXcbZgV2kJTMXk9WeypGd2DEzcdEr6qniuZXA5LxHXtL5Num9np8dT515BZ9L9cyy7Fww2PAvYAF",
  "key13": "5cNCL3x5dZFhn7NmB5pUrxQzwLGtVMiVni2uNxJFsGDTjRw6GgxbH8LodTvAUkx9DgaKzmd5qx36ixWTK34MJaMc",
  "key14": "5ayyEYC3Zk41tAejqk2zpZc9Qt2oibW1id3TkQ6HyUDetf1BX2siSMPJHzBX7dBYrNepUBCP6dsESbKnWmnbrgr1",
  "key15": "2KMPiHike1ZMf3ExnSAssV8nq62hsDyw9vkEonVAyakw7AVNfXjfYF75zTe9Pp69bPcjYWPNvoS6aAssFL51YVUD",
  "key16": "un5EFiuo8E8eduxSY1nSTrDVRTLNZjS2xL5V64jtFvz3xpUC54fh8jBXQvqG5FGpLj2f4rV8W6Wt9Xy9AHkqruF",
  "key17": "uvFqki7ztvSWQXT6E29EEoAsNQgWNTCo2yq1NLAZu3zWf4fdj65jfgr81U2Q758JRXRAw6iTjzkTQcg79nr3i6n",
  "key18": "2wQUQdK6TtFtWw5m3CqjHKgD1GZLhEahsy9Ew7Nmg6SuXcnXxfH52jbGF9UAkP77wFo1CHBrN4a7rR8dQk6pJzxR",
  "key19": "67AXQxBbYz8MYQqWP3docHRJFEHUbMK7trJq8vRW4rYgGmfwmEwicCXuc5TjsqmPH85RBqTSSBjNkBm5yAM37XzT",
  "key20": "4XkGhEyBDTfkgZ1keaa3UaDgRtFWi3DNzeTscerTNusZaQjym3cXAt2xcoXhYqPkgnAvwBh8W7bqtg4qf4RgUu28",
  "key21": "3yxrsV4gz9KEijYoPa6G8BRghKcbSqxmtSMj4FVAauDbZeCWrxKodSoCSHgYBhEA8m84N8NXaH66ouLhsyE2eP4G",
  "key22": "5FWi293igRFyTMhyhnJfFkuNFZ58ohvshdxFomX5d5ufanwfDchg39tNYkJHVT5itkyXJ1YPPH9wu7YL1GgVc58y",
  "key23": "YVfjiCF3NLij7S9ZnTdnxyEWLh4roBZ1BqcuTpo7zrr7sajMDfgCGNEZyY21iEUTnK6nUpuMhvTMxa5wXX5TNm4",
  "key24": "5zfzcUn3Kgk6ZmWeSjLBLNeUd6CaaEZfjBkhAhMtNJ4PKdL7aewxNruHSPsCNUMpxLhNsxHBRV6Af1H22fdrT72W",
  "key25": "121t6zH9ZANfdicLWZaZfbA1xS5atexQMTQNYj6Y17BgSypdfuXoESKCqB8V2zRBVDETEMGEmVEBq7dE62iHSQwy",
  "key26": "5KN3hhn5F45VaqdyLRt5473Hmo6VPf5XnGXdRKU4NBV9HususX8wPvkHnwzai6gf387FhucBwhoNL6hgs57rPXg5",
  "key27": "xt7T9ocTbkaA1YU3oTRdnZ7GnXtep5rATsCvQJRwV9yPT94QK9sfCCdxtSbUjMdaj8eeJ9MNL4fpfKHyFJFuPih",
  "key28": "5Ygx7QKqGzyjzijAJNRWf7Tq58m741CsPFSw3pfoWDUqhYkNhKojzvo1EK2Eb1kW2iJ2B35pgi5QBF9eb2tQvgNz",
  "key29": "5eKGboERnQJh4EMgXUuMyoPBFeTcWo4b3opJ2kpRLZnZcLjk77s7mc66gDhMs7Nzs7UkXUREwEupeWgP21FmEf28",
  "key30": "W2Dy14ZxMpzKsJH8cv2n5GE4mYWGCBqaZsB9k9hjm64rsnsPX1UL1pYh39wyRkXpbjdsNgnDiUojJ5TZvtPaWyG",
  "key31": "4WsKqWMAwBiQKyAhhLdJoNbw449HRZ6eFouxrS19VQLnhJpC3wEzvq1oXhXFbt952eNSRW9yrt4TAfhVwzA1P8J8",
  "key32": "4ERCMoWE5zyhKeRxqeXjBkUk8N1ZLfA5v54oe1HPMMbEb2KSrPXZ5946aDrWSGRS5xtJbjCUPpapzAtF5R2uS2u5",
  "key33": "wuefGobXQ4dGz6FWWAHoWCjr6Ufst6ssG54jRo2FRDxJfJZG3FVbRt6ftFKbLbYXWdpn8xsdJNqofgHqaSEkGuP",
  "key34": "2L3h3MWmrLXcjFwU9jFkhoAfnkWLMEjT7bZ5kyegB2Vjy5jS4Bs6B1CcbZP4H28Zs8FShibpiARTcBYtodTDCjNt",
  "key35": "3nnY27SzAaT8UpuAYZ5MPNexBdVGTobZeMsKBZSJ5eE1kSgSCyAEr6nepje6YykD8saJWeUK6v8RWnAHf6ocdEBE",
  "key36": "vXijqM6Fci9dnBp2FQJWhmqcKRAiJMoGT7yW1HbUviEseZK8yzgd4ntXX45t34t3cvqFQrBGXT3rGid7wUv73pF",
  "key37": "Gf58axs5hC3NB4C8WfkSYg5zrQmePSErrKUUptJQPUw2znnuy22gBUqCMsg6mkLkzfWusrCwZoNLss9EcaHCvCB",
  "key38": "5RntTG2RE7PWwCoVwmaKouzLfv4pZZjU1RSc5P8PcCsLkMRB8nppx6X8gopV63ym1uwRkyB5if28WXdAhjcBLry6",
  "key39": "2Mqr8QQG1MTnixnUG83Kpf5VYKek97EiF9jQUto9EAmUAhKdypd7oyobEmwQTSETe3bwHXvno5XTxj25DvHio6PV",
  "key40": "3jFY9D9NikacJKjtM3TPB4PVTdEftx7SAggedGxUVhi5a5HLhB8zBWC9fGMMGzR7A563Abpb32PbWZXbxnij2U4G",
  "key41": "4f6MapeVxmQ2MhCheWQAhPh4TUa8kPgk8Vsc1WFxkM8zR2VcgF2VUvjn1sywbFDfAUAmpATi3AYmXLTZKXnYQCFz",
  "key42": "3TERoA4feDhMZ6mjrbrVi2fwZWGu3bY455eFbk7UKv5NwPpsxy4gJxAGXyK9PNy5CbLguRayUYMnH8qYdyD3ZGgL",
  "key43": "38n8fZ1Aqx5YGLLfbSz8u8gSnE4ebWLD191153YUg7opb1kTfdhGWm1iMXxthjBhcy979sGYRYAmBnoGbWXiPu6L",
  "key44": "4vVeZNydWPPCgjGuE2T261V3zYNdb2SUcmc3pSGu5WmetLQsCL2tsgxCajfdAvHNYnbX2mDpAJsBHHAEUuL6dwkH",
  "key45": "532uuWV6WfDe4yuSMEfve3SKzgwuiyL2XE5JFdDyuCYnqGseXWXv8XmxnmqczMsBpt9PK254ABLotRG5efURNiqQ",
  "key46": "4bjNhxsPp9KXuk19hLuHNHTAQBondRppLA6z71fBeA9DMuBB84LTRXuFUaWrC85FChZRRCCEH9453pgzce72t3Ab",
  "key47": "4A92Krx5MeWL1kDH3rbPEbtSxLoJtK8U7m84FjyfXX5s4wew9V4XHdDWtaAB6b9Sc1wxveMyh8re8cDARao9DpC2",
  "key48": "Jx3fFCHHt9g8uct3WbzU99VhC4QEUSszeQnufTHUg8Jn3fSrjx8BaJ44GMmAYpthCQn2HHmED2qC8ur4NSWXvsk"
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
