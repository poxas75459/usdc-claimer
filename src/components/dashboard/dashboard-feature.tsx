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
    "ERsnrwUZKFHXJ5Mckt3MoyV39ToeTcQcpxAjySMbnfTBpygv53aPbTixaq3X7Fqjz6ZpUkN3QBRCmXyGqTvY49W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BfeXqzNpPzVAZTK8f9R12qPnpG9Qp36Bom7LYBxdGYK7mhZA6vb7gGjW26PdkR5hyaGbazFoajkfZTvJGvFTmE",
  "key1": "5WDDNtrbXUJgjdbM3K6bdyoU1PWUZL77PCWtwaa4ACwvJm4jz6Th3x5aUXgygvozX34Rzinp3MCYhWamsohDvpAo",
  "key2": "46vqpJyMVWGtQXqVeCwWQUvi6p6LXC5LHpz3Hjqxx6Tf7rA3Vc826BLvhgXN4b6eUx9eAyegRPVYj2KkBbi6dGVS",
  "key3": "NKDgnFcGh3hLCBFCJvoVVYBDJS8qy5er3GQarGUY4PcAhd6Pt2dPKYTrbU9b2kjfw3gkDQBYkUPV58ecZVoX79A",
  "key4": "4XZg7R5am6gmqphBWhr3FYq4naoXb9ow7C7By1AxLXYYGRakLWhDeNEM4iL8jPXNqKLK661vVUUqaj77j5rBsvWQ",
  "key5": "4jXVC8kUfJ4qCVMNH1xA1wnTMzKKjWhe7tdVHq2byZTReDGE8jXyTsbD2Ry22gcUAR5eqNAiVGntExHxjZrMKoDS",
  "key6": "2t6mkhmTp6V51gLNvYnEK4s4b6ehJLpBvsYwMPAzyvkxtaff6gzd37HxsjRKNyW2cPKbFf5boc3tVXLmzhe94KHD",
  "key7": "3ZqNe8VEPniTem6qE5w8iQZ4UxpEndEZ7iaAqrFhxfWSj1yoetboCYz2Xp8JikBd5YiFLDYV1YiWm1ep3MEDz3PM",
  "key8": "NZFXmKBXD2vTowAUZERwzKrGoK4B4LkQGzBygRWDoS8r1VbuR5aiNmADyEa13zw6VCuFuPzGub3QPfZrPNEu4VY",
  "key9": "3BBDALbcRN5NoGCzWDHgYbkZxBxdGbVJAMWCimvzvisQk7gMFRhbD1QjpeFWKBTLZ7PM14K4jMCyUUdUPNQoiBnN",
  "key10": "4JBGsRG9M4D27HN6xZEZScs1VEYfd5snC1k2d8eeN29HxviEWTZhWASWKmZVfUeAfhzAJw6ajQuSQBs2xej3UJRx",
  "key11": "1m1J45WDR7K1xKJEgaB2pSwue5L6JYa2jJXgprKnWt8SNCLGB7Nh4aQxV2FYVjQyo6VhYfWZEHAHa4Bj7vU3dby",
  "key12": "4wgWcYNojgXQniL25N929PNVPUUaAfMMAhJfSiTTsLomcXMN6WScvvkYFraPTHjxR5L9uggzoB8osVvrEf3sRzZp",
  "key13": "2QFdCcAgYY9qUzn6gqAkN7TWaAqPQV5WmeshTbuux1rbvcJhuPifJTDZoaYWQGwFEtbFxsdUNpbaCS1CGvH3PpU",
  "key14": "2fK6RsLrhD4oyxcNL7xjpFr3dFsGHiZoerJnmJEg3CLrpBoSyZce3gRADSQueEViiJdJbkRuRb6HCknnz7YKkG6i",
  "key15": "61m4v26TqD7dkadQG6Aku1batFX8tpBpwQzwfQmYavrYaFQdvUNy4f99m5okuDy1jFeW5yp4PQdgryxbKCJbttWb",
  "key16": "2D6ut5njqeYhQZFutP9496u2F56tCfCNPCzQasbAmhX1f7A6ZdWingBo7EwBUBfULJC7LrGSmtuye2ML7WvJe6Ta",
  "key17": "4ifQe1mYewSeyvuysETzinrUvQmdMbTdZi9rmK3HqeXXqbfMdPGeZ6M1BC4De5fQNyMX8n2XgWqyxx9nh2SUimuH",
  "key18": "2NwvJjbQE5roBBKVL1fmxbMc7kfJpfZhgVwX7dvjfankEuC1Qb8VmZd6KqLrxrFJ3Mk8QLuGi77d2kU2MgYuVQFm",
  "key19": "3iBK8PH4pD1my6jUhN4M127e2tM93WA3GT3yhUer1fsYZP9dPHiMQDnj8UhpDFC3sR7RnbvYPVGvdyDzYNKuW54P",
  "key20": "3yW54RtCNXgz9FCtrw8A2cUTLJgYKQDZBjwUP1ryrMYc25aJdBQyxF1pEyre6wKyPxvEiXzCHemJS4GTtx7fseAq",
  "key21": "2vkL3JtQhsht1CLy8vSXoQmKTaJpSwUuCQg2CKbDK9BJLH7VnDuq4xxhzgRRM3yT7MxsRrtHxo843rmdxLz55DUL",
  "key22": "5fQD6AgNR8xVjtzmFn6XmUoCH4hnmLQiR5Fv9aTi2Nk1PQBujNFXeLujDnGPF8CYW324eQ2PA7fmxdoKJxhssxff",
  "key23": "3Y7Kb9t6DyF3ATmmXtUU8X1ARANV1gSRgLBehRfLtjvMdX9cYnmn9kdktKtbGyS81gqzZyxvFxSXDXkkzRbgjU8J",
  "key24": "3TM16j8awdUoDqu2pnZpBUWiAbTmwpoHB4zUUkNNrMAc62NC9x6BJcdUkthga5mJVLNXdEqNmrBXH2VeWi5aa12K",
  "key25": "5iLqwtSgQd1Tuh7Z2TBTeYEncer5i881eDpYeCjuJQjwzxZdcG6DpceBUqgHUgaX3p9vcmAco7mXBjeFv8Hq8z9o",
  "key26": "3EV4z6vMe1sBRJcpgHhZhfBn2a4192hqb3uua3EGqcwJ4Wjm3F6eNNoCkwEKNmu367dUDFMMNLW8SJVXoMk5xr1Z",
  "key27": "4ScN4gMemVTpuyeD83GoCXStJH66q3FRuSSccLt6NtcXFFNja9NxFiVBESwoM9VGbDctbnHr7L5tccq4rVZu5ZKL",
  "key28": "5md6oXBPyPhXirJqR2FfBfUSuif6mCg5UtzAKHaEyPm85RfnuB162gkZoq4x3c5xiZRhVCbnSK1Cqw8Heteh7MKH",
  "key29": "5VSuv1argfYJZcZdC6eemgkE4B3qi3Dj8zAmJW5yXYcXqUyWMsMvh7EZUMMES1bmZng8YkjECYfWSeNoavj2Q4S1",
  "key30": "5LEAGq17NH3ycewd5MSZaX9VNsMn9rLuEkDL8CwDHKkQxv7mKpZopXUxMGi8L38vXV1zBrKCjBPQqfRuS3vJ7RR4",
  "key31": "3prJh91naBbyLDpZU9D93vDNTgpkGmGPBQ9dpET8hqBNmLZJwGUeBquHPygehMtizSzXdWgDr1FJJU2KrUipRKwC",
  "key32": "5Fh4QKT9G1L4Ss2T3jgddVFeGau13VwRS2Sm75U2Zgj48swYc8Tj18PL3xY5Wj58AQcZS3QGJqiTRbid1XGpNUmv",
  "key33": "26VKjsMrbnNaNb4gy1PHtBQwfFRoasaQmBJ2jDaS5DtyuNag3RnnRjmdrSCGSHw7YCQHDkrmY9P9BQxNWjF2W74G",
  "key34": "4uJsF4cns79iYr862CYZwumxJXBbtLL7oFdB8FoYs2LqLna6SFnY2cFcFKfjpUu18LPDFzLpGe6ZSVwcQDsR9HNC",
  "key35": "3W6XyKhC7VEDZCcZ2tZN4rEC8QKQFR6yTHrEbXzTpVJretBJhSkPBRbcVEnVdhF48oLrZaN9LktjMCzswHqQG38L",
  "key36": "2ZaHCqqcyteCC3yr1Hw6cMnUxmB2yG1FcKZW8FMBUkAxM413rVCPjq8315hikFWFkQauP9NkemhTVDn1tMYgdhGy",
  "key37": "2eTZwyu5UySuCE6UrW7u3WjNBAYe3rRoS7Y8ZmT59QhPBpdNy49tjqq4tUgeUtHirZq2swLYaf5cAm51gQh9CECX",
  "key38": "pZLdqHSvsKXPte9ehCwYEmoLdqJPNTuoLpWwqc2bRbKC3gWEDZ91MuABqbmkq4kG2ta2uecmdohqUkdHZ218b7e",
  "key39": "3Jz6AmfGhLftNXGfBGvyAogEbmCJpy85rV9G9qRvXSRJr1jHHib2pnapzga8qS16kgwYHNyJQMqGgrvwadMbqk5k",
  "key40": "283ECarafzMvu4qZbH21GsX3Evbm8qVej3D2JgDGxE5cFXVojMd1XNsUHa4vnosNjeeCbnjJtvagsGAdRtsNHxuM"
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
