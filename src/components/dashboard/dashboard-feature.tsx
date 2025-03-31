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
    "mz79vE7G7GRwMCbXeLYEwK7VvXk1fgKx5SyMm6ff99uatumTBGSMR45JhPT6zMtMB3YA2wsXfJ8aLLaJMkbtQ97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkMZjSVbLtFFmV7crzXzkkctuqTBxo5toQDXScv6qiZSXgi6rpRe9UfJbeqRHUdf3J5R4gkZiY2R72AySzKfpoP",
  "key1": "4pGGbGqfe4uFX6wjsNCSiyY17vtfCppPrDTTPAZwkkCa5Y7VDdwKtTGNo1dKg6UXfGxUVeHLbMQuSbUupgHUyp3m",
  "key2": "2gszwdQzvMnfUdAfMUCUzQSapjx7R4yeCZjxi9xDKYfr7BzNcNdJTTpjqnVUFAkoEZGxCRFZVH6WjXTk3oHH54B3",
  "key3": "3QBXZ8RNUJEiZvwWWX2mWXhFYdhB3Txe6SeTF3UJtH3qUeXbcUVyyjMwTN2zU3CDEv8cL7F46pCah7pqmrkL8EBB",
  "key4": "4pUXmN2Y6U9Dncb7o1rqwDCyiGf6uPrpH3tKif6kCqVLYjJn3rqTovwvzbJi6kWkkfCXYgtmaxBUS16xMguuwJ5w",
  "key5": "4FLshAk4KMA1xVWVtEpwNwyPTWqtyqbveB1wqYHAHEyuQGnaMw2KABYKttgrm7RdXBCPMRJjD1i8xbfuUDRk8i3W",
  "key6": "51B37e9f8nBvpawpuxAGJcb2BoKXd9Svt7sYndEDbHsAk7jLickHYVcQgKkWb75ofJisPrwEWeHRMg2hnW6w9vey",
  "key7": "5K7QvEgSntPvpgkD6aKWoJKcQtYGVLUNKpTuwG4wJr654hnmxLBDJLgyzv7Fa549ewAMr1WBeBZ8bPc545oTXs2r",
  "key8": "3fBbdCaVg2v3S89RLE2Xd9fC5vcHQTHp5FobKoVUSVwfs43G334cfnibFP11V3ZQ2cErj8Vj5tX7WZAcxi2PhJvi",
  "key9": "2gSr3AoJc7WKy5QbR5MdtEwCyLFtvfiyjkGwX4GTFsQyixzbeWJYDpP6RpqrPaQjLoMC64GJRWmSNtePKmidYYU2",
  "key10": "2SD9gND6nd5yuNgP9rSo2BFmpdca9CL6zMbmkLrhJJVn4ad2GZRyoMGBXhsuiqCXuGKt4vmMvPTktHpuhw7BoQ4B",
  "key11": "cjg2V5w17g46qN2hgMHM2oJGrZ96M2UpXzx9BCwGf4thpTYGNRXRBMy12HHCcomsRFFJRqDYxXXNAqDyQK5PnQZ",
  "key12": "4JFvAYSVKKeLNyZY7coM9EwYN3XH8QZK7ysM6ZHjZLSWY1mj6tvarLGze9Yq5gfBXyTLTpKMzkLbgKy5HvXjgGhE",
  "key13": "5sPjRoaStnfN5SrGY95xB3j4LW2HkXUZRfcgo2AxK1DBr6ywBwZ5btP56oPhG5SZ8LGmUaccqcjvW3dUihVqafSm",
  "key14": "3bauowZaLVJPhCwbcVfsHCRpKeXsL6GF4BUCTtm3qhTLnw2bKcusFpBd9rPxCsbSYG83RBdZK2brvNmJdS7RwhH",
  "key15": "5EUA3M9Y1r8WjoJJDthP7yccps8XKYezyrhvEuPv9jtjZqj21AGAgC9iiW7NZRViPgjoV5zJFYGi7JJR25j6UnAS",
  "key16": "tNy2y8eJquTF9b7vFqBtDPfBAVzsjqS6f9waYswa2qcd8yx6R94uFTDuJJ6h5DsRLU3csdUeZkrmcTZSYk3xdc3",
  "key17": "4QQSyauJ4jr9rawoQYKk2Anx6H3VhxaN6s8UP3AP8rQrWhD6WvJ7T2TuVsizzUuBMHNcZ9EN5z4gTZi9Tqeao5PM",
  "key18": "3qxrHvZJ6iRdSaurpam9wQPn1WssgiSX9WhyrEM3jKGgvHXbj7TwPXodY2yQZTmTCV42QgdkAbqkpsEHKCaJnhWo",
  "key19": "3PpeiXkEuwgExAM9adm6haK5E1R3QeTCoGqfxMs3862SMmcXbX3bPpyhW2Kpqkr2KdduGn23H8xouLCqaTULLSST",
  "key20": "rueAMhygQVnYEJQf786N6bbiVaQZTb6YYQuJCixbQELTuahKaN5q3W31tdaNMK9z2in3nmMjzwUiRCj5ig7WVYs",
  "key21": "4GCkKvKssVfphadD5tnmaYZwtqaSVVXfeSMQey86mkd4cAWqgA5SLvSSDWWqjB5TQ2FpGb4Djy66oyUTn1HaXhh7",
  "key22": "3GBXrGoSDNCAdju1J9rh38r3C4AjW3ZcyZ5WkZ8CLpgpZrMDZ7L1zEKJrPXF4hyN45fbWEqFjadNbFozAxFirfXB",
  "key23": "2yeoRHi9ieDDetrtPXYbrW7mxVtt7svPe5N7QxwuCW81qpDEfHFeBgAJeL8AAu7uuK5H8iSMK3zPsFA4PeuxnC4m",
  "key24": "s6hRDjueZTZiZABgoDoFdg85kDdAZi5oWuKSi4QE7Gufbs23JMWci5NDw23s4Mp5nc45GTfsqyymwQgfgh9Q4DE",
  "key25": "5B7bsP2rZug7ZjBZGhno4Rg4nwGCaiEvseRotmYJvXTBuqjgUq6MKFrv6vNmjFQinW9r6H3XyGnMacRqGWSXXpAx",
  "key26": "5cDQpMSN66MRKFjp4f76p6aiDgQu9Nq7JfobgqUhGLd3LENtnFKybcSm4KEdHHRQTNPt9LWUx8yUkncp6qXKZSbM",
  "key27": "5qNLVBJG291cXtRfhnGmCYdJVzkdHrfpkYb2RUeXzPQi99S6K9cyAV1fw6kyr42Gz2n6Luwek4q4yjLh5pQA1LdT",
  "key28": "3NtYFVStAoVTxV2sjuDbszgQR4U3sGvTX8X46Rr5LuFWTAmpBDWoqi5eTQizY3MmxxJJWrzb84oASCxajbfrg9dX",
  "key29": "369NCY1V56QSG4F8yqpmkHyCeZ6BimYwwSzJZVnnNS4YPHYxtqsSHtpMkKQ41ys1Nap85zJMNbznEPAtw5QUXspN",
  "key30": "4Fnec81VkxU8NcHaNLDMJrHBwAoJARsViRo82debz6tuYBdcoqHYDR1bzrELydtbWM6AZXCyXBkQiEzv5pXAUTC7",
  "key31": "4zSzAQ9hsVwr1KusuEeA9bSQSHfM9BZsB6gCpVHnhvPYjsPZddZ49Vub6egd1pzcSyubuQ4DkLzWywXTobzpChAv",
  "key32": "4B7PQTRXghKGMQmGzyk9e5dEfyAhFQY8QEBUw28sx7rtD5aADK9uahMcRGczy9HkKZJsLrsVSt7dY4R6JEupkPfC",
  "key33": "4VmLbtqM7HfNpHmPQZQeYcUVWJ5b5UQ8ppFRZe2y4firL5usvkQRV2T7zR71P9rwSYf6wHwLCiDR53yKZgyV4pjs",
  "key34": "3CsFvXKNhr8pELW2bprXBFJuc4D7NbZ2kzRz9Yq7e8XqsQZDs6Q3BE5FMMzw6VBQwnQgiyJae6PhHhHuY1GLinkE",
  "key35": "rnB74Y2id6pEuJtAiTLkhz9M21VdrjXjoEZ1ZVchY7WorWHUetL3nym16MLipFSVeTybc9vAQFZjHAJKwVNvBHP",
  "key36": "2WELvoPUd9FAg4ZwuLj2KyQTAY4ezoyCxBxwYumoiHjUNdtawwP11JPbL3grKTkEJjP6XUaNT1oBKmhKAYs8os57"
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
