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
    "3o7CEQknjVkxPEbFq4hGUtd1RpdBWYJEh2PqbFkWkpb3jxpSksH6gfBJrLbWHGKnHon1JTKJhB7BJxazjYTwFkKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NUcW4E8F53VML9QXn37s27eKpaahfAYrQ2MX62fakMgTU2jvNsK5fX8a3CnrMDVV5yW3vwz5yHrtBw49SE12kiL",
  "key1": "4UrhLFjsCd8M9Jci14KMd8zMRxaJwNQattSaSUDFSvPpSudh8tn6NzygzoCpiFqUKGsGZd7LH6A3RtFJvFopEdPn",
  "key2": "3wieGXiHHcutmSyHzbz5TSN7bNyiwsmsBwfEv8pDsN8Lutrx4hLmmpFriv2E9Kn5o8rLKGK9sBSfKTJ8wxQZAEa",
  "key3": "5XfjukJY4GuRCqMeekyybb9an9iP2r2piPcYZzYZBMX8ZceiymH6Frpu5rA6LEteSLfki3P1AMT7253nuZfJCKcg",
  "key4": "5rbW4wocmxCYXcM5YXDhKaJftiEah5xQNv1DBXefUnWFABjzcp5BYyRqQmFEn8814jtMS7bUQ8H3NBKwPmWQmJr3",
  "key5": "4XiZ51v74eSdUn27DkPPuv8rHTENzLYM2woEuhwPBBd4KfYYJKFJq1eScgfWFUPvUQDK77KingXGMbKQMyoDXFxi",
  "key6": "3DkLyxBkrMpVLpANgzjbGSyJaCzCAQfB2asP9XrEXryxxViF3WY8NtEXPuC9t8H8qKW1VCZLph1fVRWmQAgso3Kj",
  "key7": "5MUfhTnMSfogFyGQc3BdZpERqZvXhv1AZik7kqCMWWjsfu5KF8JVFpCpVwc4LgqjcTfKawwCdpoHtCuLFzGB9yCN",
  "key8": "5YeCyQi3Z6LrJKLE2P99kLRwYbZNrAu5e6tUGvvh2BCtBVUoc4p7RjfywjDToRZYMADtzwxcukU7mGs3t4yx6cT4",
  "key9": "2tGUAkLyoiuLYKSnB5upxdZHpTUUsdjkjX59hQR2WBt5zXaTtjrjxVgXLUvMYVpBZ6DtGoNokmMDBwNWjgVCZzCH",
  "key10": "2fiUiNGExMj3SBuzUrSsCUwRknKxrZxS1TrBCLubTTG9MhvSgJh5pqPqTa3RXBXqAC32637C2b7KEBkzKLYATBoA",
  "key11": "3LyTjv6MnGQHcUDHFLLHa5HqgxvY94KUsDa8c72jWbC2PZ5VxA7xA8rdEYWJYBLntizq9G54REV26YdLuXiZKfzE",
  "key12": "ajJ2xCNVB6BHx2GojK39FR5Z6bNpV5HgLyDzfSM9ENMjxh7Sdcqe5JPauiAXY21CNiFj7r8SYLnf22RMyY3DAE9",
  "key13": "2g7DHnTtJpXjKKSAwpcJ4CuKG4aGS9umQZnTm3pYn6kvj83uFmyxiUZcLvta65DstQNaj56NYjD7TyXbuEwbBfzE",
  "key14": "2fNDBE3JHaWTLpBh3RQnxkRMmL6bPfz3LrnWYgKc21MoYHpnbBEBLxuWxAsWEKYc9soC13GN1DAXfApuxAJhRgR1",
  "key15": "26F1e5TvJphLq3T7YLZBaoVLw1u5hK3KdKxCu6Nbsoq8wzGmZjXQQqYKAvL5BfecxrC2uxeykme5uMYEz6WjCPC3",
  "key16": "46q5jUgPCsScobg3ppder8MgwvYKp7G69Jwj1cs28ijaJHhTsEZBka4UrXRq5vmjDuVPpzwJy53EdSFXt521E5hv",
  "key17": "5mzUdg79613RrBBsECzos1ogwNDMkvj24nRsi1WUHEAW87hKQx64RoVR8hssRkzp6TKRStKMDnEkmPN13Y2dXFWy",
  "key18": "4hngthDMGJj1FxSnsUFzF2BmXwJE6bRAX5FgKFYPLSALQNvdZWyEGJV5z5G8cCKcmEvpMZV1j9wi3z81utkarbMv",
  "key19": "5ht8JZywnhqdJWqshY5bCfpDSt3jnePj69drxusWideBJY8jcjaWwUgt6VifESoQ22tqYeiWqG7xePp9PrYgk4o9",
  "key20": "51GFFk433MAewPx2NVbgrrHCizfcbFN7fajANagpzV9dMjeHozStUa837QKCztEe7XoM2qwc7XJ8VsL1FZre5tH2",
  "key21": "2qBPeZgMMvgV9JSAYiPawB1WpXegWKY2CHECpq2jaYwy1DXn7VqoVY1u4ea9pSk28xzwsPtrUsnbUByFLKsxrD4J",
  "key22": "2GHjJ8B1CqVhPtvcP4wPpTLJWBC1wM98LPASXP9LLJgUSq4ocyz7GrycsZ3LjdD781jYG7MVx8vio76t8buwj1sB",
  "key23": "3qczqPMND35NfzL984u6ekUvLmGDWFZNAaoZaW7Y5PtqrjjwhKdqLiFdMMR8oJf8ncFW5GA9HgVVcStkTXbo2eRN",
  "key24": "QPJZCYHRPEP3uPJvxCXuSPKsboiMxC8wM6iXuGiYqkeTcwZjEybD5wKdaxV3E96U5Hv5QcMZDRX2SPvJ4dDCYaN"
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
