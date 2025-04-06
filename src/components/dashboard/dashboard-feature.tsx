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
    "3LEHwhLqnnHBppcqtgyB17c9vgUSRWVKfun3pYAvk7yPKd6fT4xEYHfzSiBa4BFLeJGKZNcJPrm6mx2ByGtFWf65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZQHMMDPhtpKpmjUa7oovP6kwdd15CXi9DRVM5J31qKdfFMPGwCY4M7J2xkxLmLqRRRmPw4Xuop6swVsAsCNvkP",
  "key1": "3neAPuKRsAJsqU3LfpTT5YHbzmeKjcJquTdPujgbkYQy1FJdRFY5ZefW3okZNnJomqTx7KW4wc53uRWfsMB2MSJA",
  "key2": "2eh3stnxYEKrYuiKWxhbsn5Z9XYQn16pB6HNxpg1LXiqj9QKGQTDKSQaPpK9QZTEk9L3BYH7DRk3o7E6YB5Zz9SX",
  "key3": "24GobtbuDLgwmZgXiy7kj5KBt29sPXi2C5rTLcJBsD3NQNASr37AWn7gKgB2fUMZDNF68VUt5KoVN8ab4SdE4sLS",
  "key4": "5oLa7ikhuKiAWszwKBuwWt7wRkaLT9aa5Tv33uuDKcPAUe3PL9UUumUGKWSBg6LRyjqhJrnvCoxsrs7tyB2UXWE8",
  "key5": "4y2q8QJmd6nXrfdvzeFemoPq8RVGvipJJcZcm3LrQvWjXzXAbiUEBG369VZjyXb4xfhKRokBUTy2t8pkGfwc49Ve",
  "key6": "2nQfkygCwkbX5aVoSFrCFic6KxxSY2VXYroLNVmAwFqC9BaqyUyU7ZXAGojZU2qfBi8GqNW3zK5CdoBrJNScPHRT",
  "key7": "2jE3j8PGsEhZJeZLTAoVjrBbYeyxNkQ4AoipXA4r9SmDtajqF8K9WEtcEGc1uGCZKZoNfiVYeNixkkrZCdHkFzjC",
  "key8": "4Q7jNpL4M4PVLXe5JYzkPBYk1jFrBAraCmyrRmw1nkgsEndgrVBK3pGwuPVmdgw9u5Y4zsdytfHrDZKaB8Dyq4Wx",
  "key9": "ibykkXguXdL66U2gvc8kPGCxapMobxHcg6yxk5RCGRB2vrSozxipt93jHhtYmhK3X4ahBp8K2TdXammnmssy2Uo",
  "key10": "5NCbUviToS4NXakJ8DAWW7acY5xRwwHMtq2aRU3KydMiSzM4naAK7LwaS6HdCUf3CpqxWyBS2XsLaQWbDJBGy4Kg",
  "key11": "aMj7AY2Gm4q2qLEikmkHb3oCURLCVXiGBapKWbuTEa5iA3FUZhcCUydnkAZSswLm2h2x6JyXcvvcfr5gB29dWT9",
  "key12": "2znJbrdjbgb7B8poit3cubeBLSaHZc5JihwXqDGzWfzPvvEmx3AMAFhcmQajWRCwqVJFxA44oafu94H6QMHe96Dh",
  "key13": "29P3b9ncsB2FoJ5oUUypzoZWKohxFHwikTqNZ8vQSuUQyTbkQUWiVUZ3powRVysbFCmLGF873Lbzg8Wf1MWjACCL",
  "key14": "y7dQxB1ua7Eb6GrviWUYWNmFKHNiUFCFCRYkBBmLGYxeauTn1SqSbnNHufTB2yMDxixkyoUNgBNFNqHw7avA2Jm",
  "key15": "2UBd5GBtDKGxkbpeLxzHZ5qdwHapzF7ZZVDGjSfiJkN73rAuHntUN8Zkncr5z5Lvmkehek2SoSJi9q6PoRFuyju8",
  "key16": "4HLuUadRisbrDh4UVHcXFwTiGmT2vPbisGcUL3Xbu8JFk4UYKFdsRnRkvoLV45q1JZQZLRd3wMtYpfvQKJvUb83x",
  "key17": "4BG4NhAcyD2xtY1dKhwb1ZucLZ3AVGmk245CDNHcQh913mbuos34wboZZKxFX4vPtNyJZwXAshSwkD5yFTaJmqH3",
  "key18": "2eFgs4h2QCaHvyBDvStiefvpL1tMHjPS2mbmZ7GsRAVrCYhUnxp8bDUNZHYzNRV6zisDQzNzQHrW1KiuMVDShEDt",
  "key19": "4WSbvA1H4d3ofa5JvyowMkaNzM9yZ5ZDTJgMBQiwMa5fgWqn66pu6TWQAssVrxNdV8y7ui5of9rmDNB4FYwsSwwz",
  "key20": "7wFfAco5kJnS3rNkhb5ADQw7asrHSm4pXF25o1muB67YhBVxnLYpwYtTD7DeJcBJbkDAS7GGHgwKQW3jGb54ajr",
  "key21": "4Dm1m2cx15eqweNatzdZzddbC12KhJx6v1sRXq6hLShZ57GFvs3ERofuPCdNyZe5Fp5tvT6P7gjo5krNZ8CbnTZc",
  "key22": "4gQvRGLTWcmMyVgKjMf7kEwSuZF4iWhEuxYoQ5U9TahSYHLvQh1VmcYySP9j4hAppfMfqXikyJydnKTuzAzh7U25",
  "key23": "5N12nreB5iXBS4cd6Jmusv3UnG6q1XK32W4T7rVkaUWoGZDD3y3RoXQsT4KkHzWwchSK33AJURsmE1hdrqBNhkJt",
  "key24": "5hQ1WACpqgGp5yRVeJ2mXN13wAA5Kv5GUm5rKVoHwRFV5zHXs7N3x7RZVReE8iTutFqyqHTJVXTLDnfsJAfRExRP",
  "key25": "3dp8gKus3A9Lm1YMapQ5g36a1dJ5Z1zSxYsiycx5xbiJ7K9GoJARmt7Lf3M8u9tzE8P7MPAQ1Q69ZbvTeHtrFkQE",
  "key26": "63Xc4etwjNQYwSQcd7BQi77UbRRQE9uUAQwSjKQDAECx3GKYv2cGBabrYXDnnSZvreDdGqkdBRdBEjBqQXJrgRbr",
  "key27": "52JHpuqnHnj2BerXGQsW4XYsj7V5pn1jy6sWCFdD82EG4FcrJ5C6owJHCeSuemMHrSkBKjx8cE8SnysFra4F8PXb",
  "key28": "42UETbggnKnfTFxJ5xwLsbgDy5bwb33wtoQhWszgp2QS4PGW9BLx2QLVqSTLDLQrZqjXMV1zQeERCYqePDaLS7pv"
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
