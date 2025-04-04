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
    "8jhHZK2xmvohveXqQp2vJpvGyvRpf1sj6eA31YYeRTfJjeh2GBGqzyedo4yGnvVw9jndwZYcCWKBcDPqBtwsPdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dC5ZsT2714gxUGrirzeqhdcm23is3qAkFQ7TWSnfzNT2gXY1x588M5Q9D29DiqhDy54ZRRXtcL2QZ1jB8PktpKN",
  "key1": "3jxAiyzyMUScZYJ4Zo1TKwrCAez7md7qyCMvvGVtBLFB2YMZSnrGD9iyEvNWTzz6kqrB3FpzPT23V9RTfwVGUhJx",
  "key2": "XPedCMQoeteqdQJEzCKDNVSC7WmmfdFXFSJSW5Be5JPxXYGtSpJA8gcsAn3D3T7T24BrdXdeF1nK2Unu8jomkuL",
  "key3": "2UM9jkE3oh2wXWgUheMioQuMa5cTXhXcTYgoerzRwWQQTny2Dx7WGihfre26tG7fBvXSAGFSKnfcpQfmw67QWHYy",
  "key4": "z5vhHXXkT49H7ks6SzQdzUXQoCSs11HjmJhYmQgrCc26yXXyLuoiF1tkH6AD95w4a7LqqbFUY7rmjGf1vz4rQuV",
  "key5": "4yn17JAQdiuXk9R7gjQGjNsCpWYxVjbAuxptx4pmSa3VLwTFDJbebExEEPZ1sQGZJAK2NiUMZR7GonQDpW4xugUz",
  "key6": "4wBnAVSo4377e3JEKShiAH1YkBiTjrjMABjRBsXQqPLrd7F7g9brPs3yqGQAa69QBErCmgjjeAPtJDTyAEAjqih7",
  "key7": "5L3vL7bQfEUGdEo7t7Ux88BDPa55fdV5ykBGHWnLx9WF4mrWSc3h3pgwPkPgfihELbHdpXwLLEwo7D56AMUaCFU8",
  "key8": "4FjP3UXp45NV4yaescEKNsSAMve6xtPgkycoGVjfQ2bfzEtbb4dnJG5RJf8UMQNs9XEhduuwgPq9Kk6uCyuBrmzP",
  "key9": "51kA5Yi1YYDout5oyJHauhHNvwQb15uKSiHUBttTkLBDyp4BKMXqs9hfvP5zRFSzMXB8dM8ZUat5aih6WGkzDChz",
  "key10": "3AWQDURxQNijkZ5MHWcpN5vGHRSPkQ9ZNbFCHz1xPndLRf1bEyBgnaPHADZ8uagN1vopD15o5ESTH4FeQCTFKSLB",
  "key11": "631p5vvfBjfvEvChkATX46sufqFGfHez6EHz82xTXe3CUuhcruRVxNvibJu4M1EjHCQiPhmywpeVGi9YDjLp8iLa",
  "key12": "3baGi6TQxg3NMyQC4efWYr1PNy1jX6m8pPGrwnyHR1GiKgnn2SqQbMKgmcvsathtmxJsbPVo2Qgg5PddpeqyYhVv",
  "key13": "3SHN9eA8Q4hhAcB543ikiWtS5eDMRQfF9kapkRzmZDeaG4gWiGRmB8ihsG5J16oZVPmnoVEVDgP3FrVH7KHmmsQT",
  "key14": "33Qz3ZsiZGwBq3DcWkYSjsgN66iEBsytfTNizA6irmM9FeLZyEot4m7dMN8wYjGTcDsGaaRpMgjfy3TD4tdCX3t4",
  "key15": "5retZB33NqrEux6wFz8Di7PVJox79Je5EhtXfNSAMVjn1Xx5BcCCijMd7FygiehfZaZpneqVstnUP1brFDEGAoJX",
  "key16": "2E8VP9TanQJhiqMEPn8RD3RDRmmH8STJhqfWaPwJNUaKR5jjZkwc29J8st5qHh1ZWR6vQDN5CBsuDgKhmxfA4bYp",
  "key17": "4a7GjdZajp89g6R1r9kUxrWZ53jfihBoWsCRSeorHG8dPmvng15yhijVYYhEmN7bmyVCfeWxR3cQfP4Mtozh9K8S",
  "key18": "2pF5Hv3ARyQNuLYhUtmcgHNjCenpkHe5SwX2aSYsQ6upGT1Lz9HfCyAJqWn4x6tDWgRzYEeUq2VcfdRn6QWkCu2A",
  "key19": "4f34UrpVbZrxXvLnc7ovL2YtLnntJjDfBZ4EqRGTQPJ5wHSPZHXZnRD84xKex4htpsLvkKHr1CxXncyhnDrLyJYE",
  "key20": "2dgzAKoWHkrNCtdQnFVSQtJ52VMC8UAUKL5f76upNCPom4dFxvzJzthbc8JrWpSSERn8YCFUx3QNUYmwmCwzqPG",
  "key21": "5aGxEm6ke5SRSK4aYtQc2sfaURbYYWsHFC1hyzY1hPMgDJzt3Ha9vEDzNJX5e4f4bYys47FSPDJ9eSyfPJL9gYxU",
  "key22": "3V9X2CkfqiYHpNWxHWzGMofbvwNLereYi4breydmmZw8wGJ39AqXMF8dNcTDE8EYsP9xRe9mV9gS5uvZi25CqXGo",
  "key23": "2Vrx2r2WLNMffq7n3JJqFBjPhzwwaLgK1dota1RnGHxNFquPMpTwnzYq6DUukirCbcvkLkGToxYjLAn8nLu72jez",
  "key24": "64hmh2Tf2Vyf3kPFRHEGQiK2T7YnR2357G1LZsDfidfVRWR1kfmQ55WVt5BL9v7Ub7avGxZYx9DE8jZkVTqgVwE2",
  "key25": "2MtLoDB3BqiCBNYvHVzw8U63o3fwcdEyQZbzjMRJ3aYXTQdKV5jNktFnAbE8RWvzBysd9UQoVw1xUZvENBk5C893",
  "key26": "5emmTQgvLxR2K1pnbxbbTgu3muUwaxtWsXKx596k5p3eH3cQymj5CGmAJ5zdLeSUgoaJjMcgqTae1MpdhwvsmESY",
  "key27": "3KgQyQruewaNkqXHtywUFdXrwujT4LxAAmiNowsuqusH1t2BRArM6SqjtydoX8962DDo7Maisp1BEM37isH8YQWR",
  "key28": "5bfs4nxhsSwv5cYK7NKVRARh9Th6bjm5r7gpLGzgqoGoasVr8YAPe64q62UpDBf5TZfiLBhC7Z4Jaw2a4iMNWDqS",
  "key29": "5Rz3sE4AYGS6ubKb5N2AsZmqRkVmueyv6qTmi5Z8c9YeXAb672iUU3jJFCPqs5pXNF4UEoyw1T5SVcsdYf5Hi9B5",
  "key30": "5KJ4n1J4knqGgLZvVaMLkXhVJJMssAU5RcNN9628bsXsq5ymnoPE1122W72qK62uBzqxSKqU2dkeTPF7Kv4pRxd3",
  "key31": "3M2MEHNUXxuYCjdEtgxF2wzCURhDnUUChXBsTrpY1j65WQyCbLjWvGCmcrMDqMnsdWNvhRyJC46RzzdGjrZQGP5r",
  "key32": "S6ujXcemXFqUFxAgsUCmwZNQgeszvxeFw6X7FDXgXUtFasMd5rEqodX3r6XdWEh2fdcUvwUTEP5bczACkgnevcU",
  "key33": "3WAXiy6iyRNrb8UKgfkKmu9wtcecJkGgN5xNGjmkf54HrgnjG4YpUvxtwEg518eq5VhzqtxyNzvzrSUN5VrxEyd6",
  "key34": "4KaezG4q9vody8QCESsapSh8adrpH4QKb8z5qxUu9tKFPN4hpFHjY9VWTswzdW2yEEiU7Jptq47BpQqYcHr49uGk",
  "key35": "5nYC7LKqmzbYT7EDpCmCZNLRgTQuhse65wD8ZdpEhQejbW1F3S6Az6FDJhXsu1mcgfzdDvkRAYEEyoErYECqNnpr",
  "key36": "8ikzVLJbpjAXKU2zfqFQi7mA7cc5yTjRkt7rdn6ZsQFGVqbbDJ4dho5wKfVeq6QjGmQ1y42WgG1EiNaYWLECg8w",
  "key37": "5pDj5m415T2kydwhuE6vxxdLp2TyzViZt4kfXcHpEVwPxULc5rs21hgphKN6R5XpUZSWThqsn81Eutq2jRA1K2HP",
  "key38": "ygCbhS2QJ7H1G8TKB8ZCtwWgB8QKx38NaKo6P5bsxhnwC97Eh8xiivw2JQnZbX2h4rKYi9g8LoEvMMfp8kj4BcS",
  "key39": "35zDWNWFLwRYh4XkwjLZmGWjwv7N7DGGRmtZF93Jg3rf5EREhfKnsm1ZCnqujt4wuHCbLEVNZF7B2Y7EgANGhzdF",
  "key40": "2NGPxsEKJZzoMyJMKtBcxwBW4cwUiSqLrEY4H9nbt5i7ymr2gGbV6XMpn1GN1YRwLXoodDsiPBv5NkVLKEV5aPFB",
  "key41": "2Er7GgaJYsJ32WPRcHNVUA6sqjSJY6mMv7J3cfXoTnysyaz4dzHTnUAoZSjvpe3QgtwM2taGcLX2jhCeX19tQj98"
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
