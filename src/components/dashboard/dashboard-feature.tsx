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
    "FTMy69ST9Z8ZEkR4q1UfCujcB1e1YTQ29ZSKR12SZHGEFgoMj4wicMf1ty9TtoA8P5sgfsskYdfApNYnYDvNr7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pA2FduQ7jja4xfcgCwLufp3QY9tz995eqT3eoYsA8UzHNBfhKsUvYjFTawHHtwjRm2DiGeU3zTmHVUxFJqUmdsA",
  "key1": "nHGYNanQPg7G7rycJtmxjPUyXBiPLZoTKG6197WBDTtMcT8wUp5DCzMKv7mnQmvU7X1RjjJCfGoMrt2VDJhSxhL",
  "key2": "32c7TFD25ymitPZruM3BxbwKLVvh4DN4M6cGUMAx65FWY3FFE1NfWWt9B2FvhmcD6dy5jSGjj9LnAL3B8heefcn",
  "key3": "3BTvgMPQoh1zHVMadkPC5odkUxGyXrYyKszcKFEfSkJy8fJhh6bRP1ZNtTjQTVdmKc7AwMzzoWu4qK4XJLDEBM7V",
  "key4": "5zCCqQ4YJTD9n6djCuspinS79CVnek6e7ke6hp5zDE1b9rUf5FVnVSKh6Q2webmU98wRJy9HPLBZBLqZdcRunrCK",
  "key5": "4th33yMDfWPJdjs77qJShwrztGtfMuSnrtPZ1MoCyUVmp8osEp53XhXiK88CMgaX4rcPMHPpeiEGBJug9EpmKGhx",
  "key6": "4AMuvAPzoNVjHbno7fERVxW2yXVPRh3cGF5zP7nqWcdY8ou3pg8p2tzC96hhcbZtm4wedkFrM9p88Frqwtc5oDVT",
  "key7": "4YnmShxqiDZLV918oX7LHFXPhnDieHCiAKGTpL3KcuBvjFrMdN3CMTBZCCbjdFC3NQYn4NCQLh63nwsxhWMK6SWU",
  "key8": "56ib6YhZaiSbZcEhELaYKboRU1PHRXmCTZqavhGoWSy5EgedQg9DwcNoHWBnXNauMaS68qJTn5ERtUSdACyqocRS",
  "key9": "sFEvXKGqNCt6ceerGgC4hRELPYBjWrDXMmUoUY7tcEnVY9UqXCgcZrJzaXjX7iWxdbMUARTwSoM9TArdky3qEuv",
  "key10": "pJrhdBHnyhDmTv3Mi3hG9nnBji7454AR7inBBg6Jyrsxz6Lh7yqKEb7tgZQX39RegLjT8CeAnM9DoSzzaCxnS34",
  "key11": "5Z6dYBsnV8RqPR5JCju9np3P6PfaL2q99V5uqVHmRRXwKJHYhagR32egF2asf3XZbU5EH9m6tZ3FQEnLBobSZjd8",
  "key12": "38cyVwKBugk1kNUSLwj6XMofF9xRWD41raEFdBxFbzA79UFJDqLqJCWPH9w4DvJjptdwpQr1oSCn5CKvqdtqs4BX",
  "key13": "2euNzVHehBhApVYE6AfQcxUNenMCbn2pNbysNckcs22fBaXNpy3KmLU8dQBF3NcrVSPw9RNzUFQW969pqnhyoDfY",
  "key14": "iSM4C74iUFGTgk65dkEstoyrzGapRtstSabVSiYBJam3rEU1YsZUyjFpCK66eBrybsHVqUSfnP6cJBcTJZj8vPU",
  "key15": "3swdqAHy98aKGdxrV32HZHahbgSBe5JTFxv1EFTaYn16xbsmn3KMczkNTL59o1A1zdrnamAErY59t8D2g2fBUqLX",
  "key16": "X8AaH8FnW5mRaFZib4GnpNEkug6obvoMsAy4FBb9Vo6PnttSteCGHRrP4oXBw5xTL8beF6djFDcnRvUF6C5rQM7",
  "key17": "62GHuUMQtXbgKKvEAM5yqVYr8EX5Aj6PkwjbRCj1DDsyNE2WsTVAQSQLGrdkW4thnoRmEowpvuDKZbHFEoN22Qnp",
  "key18": "3dKszfHeUgKS8D7CweH66V4YP8sXpNB9YNk5QAYZF5fkaS5UpvwnLDwrTBXx1xqjTHYrs2cgrphWS3ZFZmktEwme",
  "key19": "4dbSgJYDEgu6jAZiyTHwr3zPndhQdrLdbSfX4GqeTPv2MGAXQyNS8hvwbEy6LrQPgdm1xmPyGVyUFQTdTa3W1guT",
  "key20": "2fexonk3z8ds77pM46qPbLpbw2iHfnsGED2Lqxd9sf5fPZvkWGT5iSHpNT34dnAGUQTRGevMLWt4feJi7KzSKWYY",
  "key21": "oCfkWzJLN9KshWzPib9MunMemioVFSGALo3RaSjZTNvR9UHzQhfR9Bj7ySytxvhEtqpEgecUkFp7ZMp29pVBeND",
  "key22": "5x3rvriyFKceoqvQT5NMr7BA7JhhMmkC3zSVYiGfAGY9B7rXLiv6eoJ7eAaCbSjKAFPPFEtKarmNp7K8uny2KBSC",
  "key23": "3VftoBfSnwbpys2HRYa13shWPCxBH1berSYLmzgfEqwGguay8jqKSEsNUdVjvgMoPGoWVryZQwXqehHGkeep3WN7",
  "key24": "2XNrvQxKsgEbQorvFTvte3L6LuF9NJHXaY4QerSKhR3FXo1k7LHtzdLBhLVG4KcT17mGCiNuPjPyZ8E31vMUrUGn",
  "key25": "444tLTvuFDPdVwjdW6VWERWj1ftjXi5qYww8zaiiY2gGcB4yohSczxfEDBSqspwpCt6eRy3vu8nbPqd63fcB8xNJ",
  "key26": "3grTCfKkRvo1n91wDNVaNc1Zk1utZgtTxW5z59vYcyKXQJ427hc8MAadvKmvznMWFqdhCrqSxJLU8JQgJC5VqF6i",
  "key27": "3v1d4wQUgoHsEWtzgMPsQ2BDmYVhAuGre5yFJWr392xhqn2oTDRcgTGhBbvbiHzFMQqdTh5T2Tw8HZdn99x4YoAS",
  "key28": "kPQ6Ddh27Hj3zHTADfLuzi3taiqdE4YUhMNBeGSvGewoKKrePd6m1pMzyjs8unpEWudLB3U17ZDF3CEgVSPyetb",
  "key29": "4g2j9i2CnMKkYK3brgNne41knYW877zu6jUbQQMJYRLmXtGcBD91P49WKMmn2tsPe2hkRVmBFd8aVVgTDaP2CyPX"
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
