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
    "4TQoJfGrAKXjDksQvb1N7LJ9o87t46nip4baAY8tCibgvuozuhYA46d1wZwJG6oUN9Q7EczxC2pLsARmKq2BuJBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mt6SVz7ryrbMDZVNyrT6iJEjh4JVDBTDUwg6Ypf2g3L9oQCcJrMzGGF9LcyFC7k9hjswJ7w86fv3eBtMiR8DFCy",
  "key1": "5FjGfN3ruyunCaPc6TWAqVfdWtd9LWoDJ7vwhC5t1aveamZmAnfvabhzYWSJBqPbGZh2xEsX646yL6NMcHuWimGX",
  "key2": "3DBzaG5NrwgDNHBZLYgF9YRMb4K2ni8cBwX47fWx6A3hGxHzRYzKqid3SG73huNC15gNiiTaqwubc59wPT8LEWcf",
  "key3": "ZHUovwB9NTXLrunMVzgfYhVZuaWyQ2TzX529LfBmXaMkeHmpDcB9AkrxwkkQVaZnkjEEyCuakWuDydTRFMMzaNT",
  "key4": "2GKExrHYZEfsRVgaiwUUtCDqWqGH9GDJKPnm25XmmNhfAcZ9NtCUgVzTHfyG1ybSnNug79FKt9KB5GjsCxuUe3N2",
  "key5": "2KU5UwZ33Prnui77nsPzYMhGcCnhcLSWv24DFc3dc7YUEfqdD75bmAQXTM2cuJxNsgJUhc25WmCkPVomAxWjn88w",
  "key6": "5LU6s6ZCcFSu738rJNkhLw1SE5bSQTMZ3cQ8nACEcvCGDuKoeLtXPBjr8wV3GbRbJXVcixhssYqGnXDdGUbPfvzY",
  "key7": "2Q5mXBhFsRi1zmtWLoJX6VyZCs9zbyduMcMznXBcTGeAW88pZA1tyQCAPNJ71e41TZpCfyMpHetiLHS9kgLueVxT",
  "key8": "64CAji1YrPCwLaBdnvJpaLnKxYjtde4jGveGAVh4yV9RuMdHNywfXCBEKoPnevFgqvbHqu89wJaFVAmpKPFyuoYR",
  "key9": "4SB6EHb3nownWP72UJ7S97hBUp7Qa4JDkANXoF4dhVNmntSD2PjtgBpofeRanB3YdASKQSTvqHn3ZzcDXz9MAmS9",
  "key10": "2fqE9r5dWjs2gE7twaXT32sozVDzrfziiNViY8Hk5TRKAYwT89PSAdvj1TfEZySxRbrQk1MrcKiV6CFvb6pNXVPY",
  "key11": "2xsDFx1UkNgkkDzNX3hzTgZmek9jRqBMdCetzfpuvN1Dd1Mu2V3YCAQ3YkyQ2u5gezeVAnky7YZWCmbUXhW8uPXE",
  "key12": "sYW5gMhx2LwLbSvHzenwiuDkX7ComgEFzzHMAkZJbqFmbh6Ndz9BRbBLjj2iFK6r2jfGqniGH9bx5v2K9UnbyS1",
  "key13": "66XNoURsU2ibTUB2r8Rw5u15Uq8wmcmqgYzEUEz6W45pspDVrYamUNm8ypepi7DKh4kPiNT7PWafcSBt2XH7iqeh",
  "key14": "4SWCw1ZfescCbEGH9BLcwquHFpa73V3PtvRM645qHEQXwDgLFvtyapXBKkhg9aXQcwvqkSgrZN87BQ1kgyG1cEmc",
  "key15": "2iAWfXsGkS8FfFnq3ySpxTE3xmoyWPPQYZm9CYbVzHarGaNSWqEwEg5YB97ZpA3bTXNKV3zXGpsYtHY9jGqb6zK1",
  "key16": "4sywkebT3qZ3tD4h39jE5rhBBW42n6sTPzppdxbVj1NDPy7Y1u2TRH9uCeAX9jEt36CZV3hN1ubu2PXt9yNM459f",
  "key17": "4QGombbch7sQarnbZG2smFTDFVyKqHL9VwMCNCLnowqvHgGJiduBTATJj89QaaZQX771Ut4MVdVG2oLTRdcZHUR4",
  "key18": "5ueDBosyMjZeVZ5oEume7YB2m87SpoSnuk6BM3QXiVp3se6voTCqnmepV3HYN8ez7ANfGMA6KpB1NDQh6v5uF8D9",
  "key19": "63x7AFVXnyvQuVfBeVAoqMKv9x5BPXn69n6PFdr4pZ8ZM9hsvHvshhupXEV4hfPQJNj2aQwkNXkokW6A8S1z2Lpg",
  "key20": "5VdcyWxGko4rWYkiU2K73BUxH86VmBF5nNjrBttsUaXUrJJM48wQfL1wsqhWXNLSR26NeGGZJgHcjXyMXYs31h1K",
  "key21": "3jNGD3xDgejifrMHD85g7Ms72GjcgBs8uwEmpJEEttp76e2xVrw1FzC3QYMoLWfUcaydtzd4ktrLWBwHKqc49E3u",
  "key22": "uy69LUqhLHnCnvHhKQD2Wz14aPtb39TEh2rpyu5zCjMuSvJqnyw8WipwqCskFzvQbhnCA366PzgNiBvQndGqoco",
  "key23": "wf7g4kDTMzb6XNNFSn2MckizT34sAUceXeTYdx4adKwJ9UT9f5RC8mvvACWtFZajq931xr9wFhb6CUJPTpUuput",
  "key24": "2Tu2iX8UdYBKmteQQAJguyQ9LRYMzke6pQtpeU8cf6D42gMpmFEk13qUFjL4ChCwXDQoNqJoPD5zrdSwxGmY4RXj",
  "key25": "41ZXL4R8nenJz2TgQ2VXADn8Z7ESG5qunUgwTCvo1tWcCmLtjEkchpAdbM5XoWmLrYUe1QgW3UKjcfk2mfAugy7J",
  "key26": "2mvZonUbXXfGTuQSbYn8QYJZ75Wrp9DUrKKXVv82AhN4Z6My7TjCsRR6XBKH8fA2SZeW6R8zN48oQSY3gPpyo5Zs",
  "key27": "2qjQkojSmWNJjQbAXZT4UtXri84nRzQEnihBVQKpNpZqRopGgVAQa6ho8Dn2tneK4R8tUvHAuUBcrKaEmm4fpsvQ",
  "key28": "4Q2kcuj15pyskQki5VkLgHyhgNyn71kJagN5rY5FikcGqLqtcXBHKeZGPZwXwRMBRsHw3pxj8TYBvBFBDtKGPShu",
  "key29": "53jpbpvhQArqakJmRWBP8bZb5uxJJ4SabQA3je32gJwFTn2JovJyHG1j12Gf9Ya59CHS2UUPv91PFpwq2M88hK7P",
  "key30": "4xqNFctzXkYCur6sqrk67fbtYwrTJpFaHfBRpYgKNVRZ3aZinzm45PRi2QDZ6pdCGsB3bNetSL8wmLE4BJsn2zVX",
  "key31": "65sdTSN4K8q3zm27SnCWRFqYB5izR3G4QfHXaGn7u1wuCyNGVZq4TVAA2ZPUGpH217EZDCgTNV1qkRBCHKuiEwo7",
  "key32": "2NSDCUMU4Z7JpxL3E2rmy1JNMAisSgTt5YdqjcU5gYHMi6kcxES3ep9TXyjQVEuR4DDo5KW7Fucva3uarvV1zdCa",
  "key33": "3f9MmM36vtPezANbinox86RNHe557NnGkMUr8U7DRABWGS1Cckg8EaRpuXw8F9wFfNQyA5Np3EFcXE6XEsehom3z",
  "key34": "23wLTsYwnJzRYgMV3gtJtDjyVpPx6dWCZinwdn1F7fvckEbDY9yARamKZwpKJB41h2Tf1o4Ko5zgBuMnFreC7aBb"
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
