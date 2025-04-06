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
    "4eX8CDYBi4eyo38fb6DDdmHg63bra79zLc3DbQdepYHWCXYXt7u5hnsBsVSCF7fBewQaVNyeG1CZBcEu35T8Vump"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GKrEGiWoZGgFZD5MT9TGKhUNkNRVGnNWwT924VvuLfkSZFesgsUhkM1KtYUUUjwCF9DXrXsVEoTGz4juEDzZ5K",
  "key1": "NRxBemHGUMtbF1iHogJ6ipeTQBALBiC5z6YXFCfmnCDA7kgTjWodz8nmxtJbeXuwKnNBp1YEhNypG7a9cxaCdZ5",
  "key2": "5HeRxnRQdA2tNavqMGZiZdu7QqVhXrHxqn8mZKjpcgs6K5btrdFfN7UkajC6nc3d1yCVzFgCe4oAUPa3xYkHYqRu",
  "key3": "3Zrus5CWeDVWN5nkLAuHswBjzDQ72mrXK7UdPaWdkd2D53VxLwAQfuJa4nopbov1PLRYF18wAAF4NjgQCBiu1mN9",
  "key4": "pZfWa6TYuL7HsQ1xgfgcgh5nPDNmedJoD8gR35rryQcGX4KV2PHxxbG5nQ1c9puvTC4fdTrBSFizWaEnYhfQQaX",
  "key5": "2dzuA1LyCE2U2UcbzUYj2qj1igznTNmhvVYbMgXuU7XM5jGkgGwsYGihAyetBbY6F7AP6CHfgma5sxPwzkHYkoq3",
  "key6": "6vg13xnXMzLRtHdnT5VndsBP2mH295M5FsVpTz9rSpYZqYarUtMJfHXAhcGcfi9phXKDKM8HvKwytjDLD4YgT1o",
  "key7": "4qNy4uWXeMfpV6GVQeCJYFJfuYuRngGgowg8JWWDAQCQqcNFZbXvJZVR8iJqzbDjtw1VJJuPc5Bp3hUojrLH2D2K",
  "key8": "5JqUYK4kKhMJBK6AxRUstKBscGtZ7yT9bD4K1xxAxLdUo5oapv4gv19Y4qcfQ1uh5QJkJiRBRyp8S9RKz8KpoUYP",
  "key9": "4xYvyhbSKhRwUXVFedqPpZJ3jJMNDyZRvffE78ymeiPQuL7Rk3x5rr5eriNnaWRz3EQwvXpSxw62YhyGJ9xbQQxg",
  "key10": "57wz8jfw48y2FPvHZpfpNmyoLmNvBbgh2cxqXpJZJTVADcyRWgtSw1qTAcSmYUwQMc6RPsWSQ1wMTGA7KSykFPgW",
  "key11": "T3HRNfU1cdsGSiXqZKVYj8YTVKMx7E6Y4YiW7admzQH4ofnA4baAW9U5y2sVKCAfBBVZRyRN3AJ3wc3d25QEQAH",
  "key12": "3CrnvBZGrfKzprqXvDCAoDuRoMd3ywNUf2kFPgQNyq1fuMgUWZyDeZe2Cgf9sabHmmgBsctx7ugonE5gMjW9xL4m",
  "key13": "3tHYHuuqyHBe9sxaoQ5cFX7A2e4kGHY5JNTyjiRkRAfVxtwoht42kLnUvrmvW5mQAXFNam8X4ffZxzF8fxbaVjYu",
  "key14": "4Vouuv6Ct2FaTx1SwohZaqXQhKyoHLb9bAr5t5LZ6Vytce66FYyx6ipYV3bb3shjc7hrjPafCvU5kWEYdjr6cMve",
  "key15": "2HZq4zyXZARhX1KxFCgZ3c6KqdTRwDP32gJmgP4grP9obxZesk5Gc6DMcP6BgKzaR3jox3pkRqPjUwp9bzjCbgqQ",
  "key16": "32iB5rkExnAbcWZADfAzTpnjHj4LDmRSm2MdFBHKUovEJp2SUC5rb3nXWJihFW1XMssQUHV2UncpmXwz2oh2xwuZ",
  "key17": "4Ey7P1ENfMgi7prG9kd3pw7eBjvcan4JveA82DXY7NFaewZi1W3fskAX2bRDkjCRyBHc7VnzNFsnpmBhcFhhgqL8",
  "key18": "4RYMAnB9c2cN4QjgH4aAFt9pwPpQadPwu1v21KJZVscSNr6sthMDq6svuZAYKxaQ1DZwf8gHL32bWZj4pdw4z3Ck",
  "key19": "2TSZNqCyG2uzFsR5YJBih61GxiLmEMuhceVT9izadY7BRsqCtBsK5omeBMrCW1yM5SUQTEmxXr5z95KvqXS7Nv4H",
  "key20": "2M3nxmeagnAMPJDhySb5YqpaM4WThstf4YbzzBra7aX2UsT2AHLEYXG99yE2FPBmBzDsSoxtFpx3iuh4U8hVLnz4",
  "key21": "qcYg23UtGXTFg1GiVwBdLr37EzBdAfrYRpYbj7QKQzw1S4ZQiAgMKZr7C7ZctK8uEp1Jh9xwaeXBZNVTJK2b4qZ",
  "key22": "2Q8McXEeUPp7WbTKGwnXEfWenAXT8dP1Xwoy154eMy51dzgRTvJa7hMjwRTJWnpSNCL1yT3mibyxrruWBJiZA8iY",
  "key23": "oLLcWVgZgjx9sKVEo6VF9prgi6sgZoEtGnuf55c3fBF838gxThaKivzo7xMHnZdjzZ8RepN4GmyUPCEDcJHrRyf",
  "key24": "5z2vFc5Bj9xuDuMQf5BggKLQF46VjFnFmJA3cTAbWB2ivRD9D43D6UPdxoCRDotkodDqd7gsmSMGLiyNDyWTHUjS",
  "key25": "2pfXoCbXSVe8ZfiUBSRApF6GbyvdSiBob9QWZTeajxYqS5UURXHBHXFh8h9ZCKSBjRTUr6ACg2DwMFg9hx2h7sXV",
  "key26": "npXoKsmQNqjtvtjyvEFQ1XKKZXm5P4fUz5PQuzzkw3qy1VrotYgnVPhYQqLBeNtNAAkA74UBsVvb277vM3KNGYe",
  "key27": "2nH7Z3mK2GPDiTf2VNKyTdsnzjBUDESKYqiEuz2oPXZAmXNDxr74La4LrebejKT4rYpPPZrGQc8kT5QbkxDryY69",
  "key28": "yQokALQT7tjks7h6z6Mp1aozN6434HFTAVd4x6yZk2oxUYhYZvsyHyCX3fZ9KNka5vi5RrGHk1u7uf2iSUwgNUE",
  "key29": "4JyzN4P3HwGJ8AuFxD5pQWNQgJ7csdmGwiCPTBddvyuG75QJb6XnT2FS62ioCNQMhcRqFfNuXa3dDUh76sC7zt2n",
  "key30": "26vrL1M4d1fWtLBzBJShi3yC7teF8ryMVCDCjX8a3txC7y6ZjtGvQQDH4CfJQ63jrC15Yak7KdRLc7yZVyfWbBRZ"
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
