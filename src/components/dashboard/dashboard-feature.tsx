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
    "3s3jumKveH26LvNpoe245MU2FbYcj8vv7uPCzC5C4tp3MKFCwNDYEKxPDKFz51LFUZsy9NGk4vpC5cqGurHMSGGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aob4rpYysVfCr6W3gfEZfP2wsPFe5rFF23UDjvk4MAH4JjjXNAuR9J99DECxDpBfQY46kdnb6QhxjfA8BDHTKk5",
  "key1": "3N3nJWZQHsCy1KWr11haSMNy2ozM71yCdQFkGHRvnF8j9fLesHVE9HX5yPAGZ3LqkxWvmtaKCj1YT8bwSECV8Bs1",
  "key2": "5YaxpQzdPHeQhyAXfc3PRTijATvGBH1u4zWugAw9Df5oaYVaeFBPSz3f5GFbAyEj6cL2QkwdGQdU6MuqyKbmgA7A",
  "key3": "2A85mM4hXGnPGGr4ApNioYtZpHmjecQwNFb9zj5icRWdZ6SXD87rbPh66SoUANZcXTvvj4X1gZGQNqAoeCBwCGyi",
  "key4": "4afCrnXNTwHoQbiTyW2jcUUCSyZB8JQHrJEX17evgA9Wzp9wrEBDw167V1tCUDu3wJ8JxPLC3uFAyTGryofbmrch",
  "key5": "2mZ4LgpYHVRaShxmnqBGqsXsAXK53gcijEdpcHv3vANsgVijSLi43FJACYi8WhUiX18wzUZ3eie7FThKyrs2yVXg",
  "key6": "23HcZCuG272G4EcHkFaUyADDzuRsafokz6vzuSxBJgVajbXS5weW2QBtdbcP6vzRjSHmywAeRsesxz75Fbw2faaV",
  "key7": "348M4Lz41MAkRQgjUBxab6gcjURVymx2V9wUjrw4nQdEt7rXipZHztDPkjhixL7mXyhMLkuv9AGnCN8JAa38d6Ab",
  "key8": "4pRocaqztjWGhAvhhB72dA738xbSDgTS82WLqAc4eyNHQSb6ewd58tsMc8BqEWWn4YnCzFmj8Uuk89nDTFASYNYY",
  "key9": "5YZrXygBvwTUAjopeKRbaDae8JvRU6N4syxFkwWz7gjXoD8RhxrKUUvVebzLKqAQT6ZJiD9pp5gQas4i8PJ2SC95",
  "key10": "9q9UvQghS4VJqqB5xmaaBVW7iNPg9R3JaoVthmysbh7eVg5yDofgxTRRQESYf36esxUHhWahi2cmYkLrZuFsWfS",
  "key11": "392PZnMDN6ppxGrT8UJTSHcwt73JaK9BBRCa3McmzJw3ZPxxAoXAuZaXfsFXXLmJVjALhYHu7LcR5KAsMGb4e512",
  "key12": "3z4hq7vgLgbkr64erKfVSD96BUrWFE6t2Q6JNLff5jevCFNcTbjoUGBG8t1tvEVVyByDkcgegRYart2pvJqCHb5H",
  "key13": "4tHwXv68jnJjumwQbyGtW4qAfm7CETeyZKi55762GSz9vVYDJoA8FvBLZ2ZEK978buipR2Dmcyhg9DAt29omnUBW",
  "key14": "3NBHi2NaS42iXqFvnk39dfLG8XqWMyqCfjxLEiBRke8WiocRi1TvowELqWU11uVP3wGvf9v5ix2hqaxKdisDAX9X",
  "key15": "F2QLVuyfzJ3LBLYGguaDWFViegzb33e999c5Zy3WvztQHgwH1UyEW8hVXExkCUFQ3yoUYvkAbJmrWpisV9EWhnZ",
  "key16": "3LMEzEEc27q2f676YC5CjJ5My7i9dLDSfCFGXYPEQwyr7FRcXiLzwumyKH24D4Tz36rZGLjWjXdhnHAxgs9sEQK5",
  "key17": "2aY2bStjLxhn6DW54sBQsvCuVm2LLFC2jFUFPdqiR7DyXF5y3Yds3cHcADCEQCoTdRi3raFHiBBtA4W4tTJJPTih",
  "key18": "5krDsAHK2WvXZQLZPd8ahtKYayVxpVK5cV4FX2zFCNgMcwoJqfvZ6cMjbzCHjvcak4maNmUinBtxLZ1uq8hXxKaR",
  "key19": "vGT2BSx1FBmXWzBc5McNnr1KS6xhfu6ne3NqZUXobHvswprMhax2NDtPjGBa29Gmv1Dyfk1Sc5W81Xo6LtQv28B",
  "key20": "AL1hSfG4oHrmXRQCX5yY5gV51e1R2SxVVH9mxyL7hxEfLHrNj1BekZ45U9XktbAEzm3EvKzfCw8kVyP6ZXE5hfG",
  "key21": "3zCqd3b27CcpyhpjZZhsWgmse9tUPiFmz9FTKPKvUZzH6W8pcwoykA9mke7JjXTCkYEAjYV19drtoQF1AfGWn5ED",
  "key22": "4PbRz2iB976o1zgZNQXW1U6abc5w4VXWuqsRKpHrfi17YLcfb4Hr3AVMZ7vQVyaLKkmGDjUhPf5ZVoKj7vV7SSF1",
  "key23": "gtguhasnbT4ueqrcuRhXYi5YeXiTpJ9mN4SDBPnSexnTUkPoLBM98EmPAk2PzKngFUVhjtkg6yHWswxHtx7Xfdn",
  "key24": "3yYa34p8Fry1Bh6CH4uqEhTL5ERwrwGKZK2pTc6jZZRGsBPJfNXFWpRznLzqcFtikhehxMMaYobCNrXrAmKPCtYt",
  "key25": "2nwRoQFir1tkVwKnpS4idyfBWd8Fbgey4ze1YdNB1Gm4MW6z4uJEm7jHLsBg72GJvAeSZUqY7TmxUKnrP6vZ4X1f"
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
