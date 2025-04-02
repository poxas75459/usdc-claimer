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
    "27eqyGU5nEvco87fKHXdnVUb8YJwhAXhVzN7QMmxkcHJKSJgdhiw2itcwH3D6Ddy2hujXDLyBeu6docoxQbUDU9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v4pt6X69zAJbGgSU5YfiTPt9zNQSAicegMb1eGFsBZhk6mxnbCmgHN9MDyawDSb2n6S17B6BZiJWKHFLBiwYcnT",
  "key1": "5nC2NLR9RZdFkg6c24cHMjKjTLJdFwA37v9QozttNsinxiZqFcz7qioeBLHA61vGSWgEHU24xWnGXNCxX8XGCcTS",
  "key2": "5FxWwuxKwiWjQmqksFjd78FX3fWYG7YHX7z31RTEn9h9sLG3Ty4QgWYCmhdujQQvEndCVj5nAKPpZ3aR6xcYQeb5",
  "key3": "2uNYtzrsoYSMS7LvnwNkD2bD29c3jwvcqkTugyThRJbbYsLfNgoKb3TDKr8kFeHXtu7XXQZp27v7yQuVg8kdNzTc",
  "key4": "5Xmv65Cbk7ifEATsgBqhdbZ3tEq9Q1FmTGbcLVizcJXV7TNFSj9mBXst7JBxBNoMHgorjSso11YKLoVKWijSrRdi",
  "key5": "dr1nZwrck9wi5UQvXsMBENdGcp2L7nPRRt7ajJqmN2wVKoXNKULPPnwY4y6ejCquBoQ9Z7gboA1hg8trZ9yQcgg",
  "key6": "s6aNn8ZRvBPViXuL1tZ4G9q9DQBZxTZfRbnTJevp18sTXE4vDDYk7dwapskAYuECUxLQLPZZn8KNJkQk9SwhUJi",
  "key7": "4bziwdBUVUTkaexYtNvYzLuxtnAzbrKCwNuLJYZ8uE1fGkbuRHHBKUrVjTKo3XcmY8sSV4DqwxJJrgSEoTibVqDh",
  "key8": "2qpC1qa4rL6bvG5kuEt2apyf5NkiZzygtEfSdTZa5MDQToYjTV6B2zAVu51M1a2nFaJhZTbQBwkST3Zqn6DTk1bv",
  "key9": "4rUoBzE7XiM5fkf5h1hfxYSEBYVH2wZVT1vFzd3whDL4Eev8tBDWnytDq2MUmC77hHw56Dx1pYCcMWb8DoYyKK3e",
  "key10": "2BvMpoHGBLgg8auhHLvJUBodmxeNEq2bR2ZYnvJ7uwCHJLG9Be33vwxok7qpSXF7WEm1UbhG6wGeHrwtNVL19sap",
  "key11": "2A8zHvdA9GaE5pS63afVZZFUKHfLN9NhV2jQzHLSkXrPkuREaPNLHacg89YTo8SsfAFHsUhzP9XtFHKvkDHbEb92",
  "key12": "XMopCWZ15gQNSkgqLYkBFgYnsbco968kNPXphq6fTY7cAY5mbACKL1dmfEeJ7QYmWH7y23Abt3VBT3eFyNdoMof",
  "key13": "7BBgrMz7NVesqoyAMqezYoRetKt6FU9inbn8sBm9pHoEjvYyu2Ng17MptGarM2mnFww7ArdtA9QSL6CrLds42Nj",
  "key14": "5xUCF1T4boLoEdEX4Y1wc1ctE1Gspt6gxcQ4zVVPG6QMCHi2H68SPA5xKR1VM3ZFuiajp35RZFJi31PRxWrxRC9E",
  "key15": "5jrvcx3qBmyHn1VCaE7DLhdHUZGatAx1DPbPNRXWWTCqo2itPfLQY6y1ifMQMbZxQ4WbUPHqTPyWvDR75RpRGJBB",
  "key16": "5hsLnSYRpoyvXKsNzUSknukzQpybCre183ro1DVeATkMcKwRUfhgg4sRqz5fkedk1b1ACCfnYncb8Jjv5x18JUp7",
  "key17": "2ytibJkvkvcV5RCSqTmGiLuFRg2DS6KtsJ544mLvjXeRRwzJEgZ4G7wCyDf5En4VD6n1iprirA7QsBkrcM4iDETB",
  "key18": "KDBkku8wSqzoPwHQXNWptyie4hTUyFwDyZDVi3ReZRvuZ7p2ax6w74XuHJERnDwKDCy7i5z9C6R5PPJSQ2Mstto",
  "key19": "2MqHssdgjbXeZaw85CWP3uPXXWXTvyda4df9HQAfDK5unnujZoFoYgXyDxRWKmuKd97p8s6vkN4LMyP868VgkLuW",
  "key20": "tqNvjo9oxhELfwxqR1VrLNWhHqQZErQpaepzdACJABEkFCExjo4HqZWrocxU1TVqTRBRw3HFDEaQ7sGoFe9Xm2R",
  "key21": "3wEfkzUSDRV43G8vi1fS9sFRemgVwjgGRhGPeHYncWficoNSHfQKEpQRPWDbWKojDaHcqGuzoHdcbp85CayoPA9j",
  "key22": "2KMJHWt8ozkjodCV1mFJJaw8ikbZTBV31EJsRnjmAximmyZSutJ5WobqXpM8L7GTYt8eKn7RyoFLrJ8NjMbM4Gyz",
  "key23": "2g9VtQxKLLeYrX2kogHbQDhgCoCvE56Hhe6LkB1iMABFqw8VchPX2B1J4fpKv8LhwNUbiVnfUvoDCWRtrP2JvJXF",
  "key24": "4GQSHMGtEY5MRz9ociJQhu8qRymmivgYbmsqpnVeDAoVtsSM6eevZ9Pgg9eUbsTadkwM51q2sohCep6rKe5bdcfM",
  "key25": "2ManxoVXcFm7zPZX4BReJ62fD4JiuBQw2yrnFnYGGTzHLGMa9e38VCx6dostgUb3sXm9UGzjRpC9j6tQc3keV3SJ",
  "key26": "5P1uWHrSfwFxGeHMrSCzbUzKiBECkeJgdhh4U3FuW6Ghtuv3h3147RfyQbfWNBGe67vihz8KcNbxUavzDPnJxmiw",
  "key27": "21wiSUHCXPoVUyzhza5q72qP7vsuxbeHUdu4jGFEzNvpE2YhZaDvLPEBNeYBHbGktRqNyefggUwBfrkvo9jcMHhB",
  "key28": "2e9emZqW3t1nsg73LMmv2Y7uz1Kitg4GXPTFBt3dAA7Q9zNMxbYPWkhaK6wtyFD9PMMBdMgttToRZHv2L1DjFJeh"
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
