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
    "M4cTfp3QhGEAJWNq8eb2y7jpkr2CsuHBNgpfCvPwMYoDJtUcU1mcbYhs5PFKf3fc4Dx6aQjygTaD15sDj7piv2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4219WQeC6FouzgvHeZWVF3pq9PqnJrcRXAH4g5x2wsEnib1fZBLvF1K3e8xW67bzCji5rCHwBzkSKtXPNtQEbKxj",
  "key1": "2LtpKHqsxVXNRyYHEUBbXY8xF5fSpWexuEKAvfGZDmsvGgqzyVvbLSXMUmjnBRUtiQ425Di4W1Uda1xQ3uTkrwPz",
  "key2": "RbZNoBX57RPpz5zxzNL5LvDZAfmWHkq8nCNFrttSBxJngDBEeUsLZpUFbQXGogPbyhhHW8mQt3K45TCf8SsJ4KB",
  "key3": "5rgFRaEUogGN5BUaNSstjqZmJhpoSinjHsx8F3pjWo3zWGjnv7Vr5RU6B2EoCUwkfJhY7jJSZcgi5vyqKkJpsT8L",
  "key4": "27AnFy9HDYH7er6yeSaFV6ZCfvtrXwH3ptbSBk3TEiJTq888poLbAfLo8GgApv1t41vqhC3bJe9BCqtaij2tEkw7",
  "key5": "57duevzDRaLegzJsHK31zus6s2xGCzifvubSqaYNs2noNDy2Djqg6PvF1xb8ZKn57kta6Ascjiq3Y2iwmgKVARxc",
  "key6": "3ihBNeLsZx4PB9oMosKjaGvFU7PZMzM5jbBFsFkVDndYgT5CZaK2NnR2RLFn7Hvkj1wagkzDnxfzeXjHyuEJrQQJ",
  "key7": "63EpFRkHxmhhFMZFzq5ESp5a4euvVB9wTshm28raSX9oTjZjKrj1EPDYptrtT7gEZ1QfTQqGnVw3yyJ7FDr1ggua",
  "key8": "2LUKkrm83C5WXraXA3cda9fXnqhAMpfaJesNNRWBtxhBGz51yA4ESALxqSmnAmxqTtgY3stgbMf8ou79nqHGfuom",
  "key9": "5sHC9csXR8MyhEfbRPhgJ2Nt2mmjfoFaMmdQrdwcsW1WsD5j6hWTc537WEupt4DUkaBezUmzGr9JLRfSTXAuHFSz",
  "key10": "2F7gPSCtfhAXNruJjWAk5dwzxZ552x7XdFKJzXQkttxivnmgR7tjMwfpVB8qnquFRQsQ74axNG7n1wehMTUk9G7",
  "key11": "nG3Tmv4s5MEPDEW4m2UBBddtp6BomWwWSo29gEnbvuhjMSFPT8yBgXMAi6rSxzbskNdeXHzt9saG5iDpmpy2bM2",
  "key12": "3C9kJutqaCQKNean6dA7fvWvmABaNt6NGs4AgHdCeraX7Cnq2bzCaYmAQXkxTzcQ8VNL3tknLfbv1BvZxDvmZJs6",
  "key13": "RgeesN7d9cT2u7jizpNKfETHtibmmNbFJFFAHUVM6vzuVgAGz2FnoDfCmP7jrDnMvUvSa5odxsBKkYAVCS5qDqR",
  "key14": "38UyyVF5UTBhS2sZLTiiN3xjkZesd5oDTt5MU2S3VNuMEyuZgPnXioVQ2uXTdHf4rqAAGej6KcsVBSF9fVi8DEBP",
  "key15": "5c1k2Zdo2dZiLanzux3X8WKnkPwTm2fzUwu6sEPN6YZBAm1pSFaFJqzy3PzSNDEAtivd2iD518SPR9Pq1pdzUqAw",
  "key16": "23R4ikmKuSKCeZjco9viicwTnXnVVXjzEncq39qAZWSx6yYqEk96uwFXfXjx34K4XysTSRBh8RJQ9WyjP2QDmZdi",
  "key17": "3jn1KFnmaf7GiCq21HXxjVSmJ6i1gxuHh8pDGpnwFz5KmbKYMEowKcNBjsBrVf66WXXx9uHGQi68UrxPiTpYrPXo",
  "key18": "4fJaQaw9GhydwuKW7i1uSJMNGMxyRx41d57x6YA9c7fgsPctgo2tgaMuaUm3zT2Nrm3nF3QQz8nRLBTA6n7mCk7G",
  "key19": "4kfqgw4bnoZReG4p4gnaJhxW2EzxRxX1GeozuLaLWjbdmuy281ksynB5rKjjB8w22pg77aGi7YWVkWsvFzJ9eCMB",
  "key20": "YupYvf5kR5kVwq59DHFT8PSZRjTeF2DtxC4DkbE6WezAMGSzGx4kXaq6SqKwpV419AVpDJyG7yzkwjtrGphKSou",
  "key21": "2YbfKaJxjfVZ2h2Jy2ghZ9nd6UfkTgRTxxg3VBSVyXtRiUdYGSfCVKQmd4ZodJ2mDAYv7zHQCSM1t8d9NaGDvR4m",
  "key22": "3EhmKZAn33S7iTCVgzmUbazWXHYq12SY2ETVuCd4PDnVA9KTsUSqdQNYWjycEAx67CfizP6eyYpauv9HSR8wFnbc",
  "key23": "37xUQPt7jSMgmnmTYL9vTq9SyW7VuvrrfiiTeVDxQjUbwD5djckHo8t6Cy7ZN8rXEAP8HXgHAdzge3VvYRjLJRSd",
  "key24": "2ZZe8syaC12hJ2nTgDT2VppbaMxdFtkoSbz2qCJJ5BSi4ASW9P1T1w461BwNKF5d85MGLc3ShGtJxZP7UCfqdPy5",
  "key25": "4WwQbUF2Ehw9xPXnvgzBzuoxxco4xpR6Fv2BmWmEyF4ZzHUQAN6SaZJb61W6PXVLzaP8mdZ8UfePugDp5bbPzVNz",
  "key26": "vB9UmpkUcA6QcuYxznQWvjTdvCuQN9neXdaE4V6H8UbFCdMGFBoqv4iSkZ8zt31vt5dk881dXWeDNSCaXbBkFea",
  "key27": "2VaSJiiixC1xT8BUZpsjDfEz9Ffg3jnN6GvnhEFztNH8h3mQTSBZTC7QjYs7uXbzErTFQENbZdcuB46kz9SVVrER",
  "key28": "3Vh872KWXJ7CshJVS72erBbZDhPbnhAMm5muQKUWU6KzoSV23hbr6yrKeokaLfq4tUZye1hHLQFU8oABhPQ4GJqE",
  "key29": "XZQYkLu2LHmQ4M3YiD82XdLyPWMf64Gf3Dv4N14sXdPZ1QhuphseixpeCu84wBddr4vtCsrBRRVgA5PhxQpbGh1",
  "key30": "8exiRMcxePNW5kdbGkcwkJm2u96ahUJd3ooYv1WCnZWCnJdVSWZVGNGNCpTHaiwDC8wg6rCGXwhcMVPsLGMExv8"
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
