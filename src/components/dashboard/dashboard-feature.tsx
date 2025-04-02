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
    "rj5ACgWXxt2LR7BJxKqGjUuMqx71BtQaTHa1eK8UqJYADhJALUHDgieLWjYGYeMoMuVxk45Jh7JkfAgEfgHSUUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91iSRBHXfm4B7n7do1WLWiQjaGXBXj9qzEvFqqMQR9N2F4WfkMh3JnKtRu4e1k2bK9oFB5eqXrkUmtpqb28jnw8",
  "key1": "5wnjb4xq2hFCqEznNykht3SjkUi3U12C6gXmx51VxwWubV1a5N1SewBqjPzBhrPXyHjWyoRsCJA7iY3Aj8GdHG8B",
  "key2": "4dzsWNkwBP82odZJ662iQjwdabGWwFDqaycS99mP3eB54Y8AXrpX7fFc5fzGTN8mvh8zLon3yNKUBMNGPuR2UQXX",
  "key3": "5na4SFvpDcDtmxmz5jsa3hjWTLodQkjyaf7tcGhMYWr8HsJg5jCJnG2pvcpUT53nnxeHhdnvqGxLgyN7oNBxS1kq",
  "key4": "3jMe8SA36JD6UBZkUu7iZTZD94KnuNeX6Kn91oqqgRoM5nqfgksgnQbo5FnLHLF8WG2qchyG1RwnGRZKi3ngEQX",
  "key5": "3T4r2ZfVUxCo9CGmzqjaRNMPfPLkMDriurzf2hcS5zZHYcDzMhS7W1WXJjfCvZ5gNieNb8JzBUeddGoXsDfTbVqm",
  "key6": "4TVtr7VEWoTrc6eJPksDC4ZfZabfCbKmwMAvozENvdWDjoK7qjTZVAeqTc3zyfi5zfUF5YvwCiDMxNmK3kk1TfTH",
  "key7": "EFyt2NhBtAbQKCewPGcwf53SJxLiphFrrnP5BhqzL71KhWdDfpnMtwRd12fkcsGE4tk37JXPG8CzQdkNZgm2qG1",
  "key8": "wXeszkkAf5BUzo9HXxcaXiNA7sSMESLrYqxEGu9aZ9vSyaLfgmkPGyu7mJW9iixasaf4zMtckdQ23L7A9fN4738",
  "key9": "3M4T8WLyvHMHgu8R38eJCLQZe287QhbEX3EryhVteHupdev3uT2xA8HsF1A887hpSbXPE5sjdwfJjLqDUyFSnmGd",
  "key10": "4nmhJtKTHs6qa8CM2yTzntjB3WsATdbL3ZiBNkunvw2Uem7cFfmat7tyFGpAJD4hsBvJgJMYS48y3wWK55Rfa9vf",
  "key11": "4AVtJawBCNjCr36dh7a4ryRv8aj1hchoZLpFC2PV6iFqRdZMAeVzZWNSNPca3LjN6BKAQUSvsMMGF8vCpwT5gDU3",
  "key12": "3UaypF7daUiTABkhCZrTDhbfR9U9ctMKoXu463U3qrWuayccNLb4D4VMxMLsjoh2mDVFSPRMpipTCxmhrj773bVz",
  "key13": "5sD6e4msnjeR1Wit9mrnVxVw23KMUUKD4ZHYeWp7JGfmQFmw5vCuFd9Xw97V42RSpHUMjtkUS7tVDVw4znmkqfss",
  "key14": "43XpTuhG2or4Hy7K4kjoDS4rp91HUiThG26kQa6mxQd5U3A5uJ8m4DxJfZgBRrmDHE7P8bZZsquChabS89Do7wH5",
  "key15": "5sYc9k4u5vtVNcyrBKzJiJz8UESjVUTmSiTfWUBNTtxZFaVfzZeCwLb1xd73Z3e9jb324Jw4fYibuSLPAUxjLovE",
  "key16": "2qjtARocVWKb7Wgs18BM2U4UY5X6uJgA5WjjMvgTF8Y4UfPvwUvLP8bBa62MS2m9tm62y5GysMeQRjFNtUaN1X43",
  "key17": "9HQEysARRDtUdGcBibH2Xb3j6Fw1SeFTfjkWVmajqpfFoowLrrSoUG6qEkMT9vR4qzeiV6hEj8CuFtfhezzz4Wp",
  "key18": "5neJn9EaNGzb1DciJST38Jmxn4a9vuvBPJySaxcanWm8guVC9pK2vHUXUjQWUEMtPifz1SoSZQ7eaQhH9Ed9ZSVF",
  "key19": "4jEyDbzFhawSGewUvo2fzezF6sYNT5WuTYQbzjcD4bzTH6hxqiUwhcYNTujDcoXugLwCpeY28jHGmy5Ht9iV5mcP",
  "key20": "5w4Z5YUQTRx7Dxf8zH9JAW6wJmm5EsK4KfEuzDasDmQuEfgSHGBZuKnDLK2bZ79DxodQAx1ZcT4Ho7fSwiF3SXxf",
  "key21": "3DABigpcXbK9hSZ9KEi7dwU9A4RTvZgq2uEXy4YU6pcBc1okm4nnouJGA6FFxpuMcA2u4n4KhvkRXaFtYSXgVKc2",
  "key22": "639LGCdc8BPzTifbkY8pdj5TepHYc7EQTFhJ1JgB3pBAArYGhpetH3e98BEiGG4Yu8bSdX8QHPkspmWFrZXF3eWv",
  "key23": "5UcWd8MmBdfeeTenddZZusLttivg8T8bm7j4DtRLHn32RddLmGGqpxsS2wDBMYtcrsVYMwjFCe1GkD2CzZsg7yqn",
  "key24": "4oe9cRqYhtQUUAsWsJUYtTeUg5U1tQ6SC9GPXjymwYnFFa4gsnwx1co2y8NVS4hqv5wdTTqS7jqz7ai5xknG28dU",
  "key25": "5LDGygkoS7G84kiDK8ij4fLwYotYQGkAyS4irRCxHvQHG5jZTVhBPFqLGvdUQMM2EFgV2ea2TaYUj51Cpih1G67C",
  "key26": "3sS2ShWqp1qYwQKAREGXiF1UQwjx2cabNX4jvwhaD2QqjJv6q2RzfRS6ifjDwgDQmwMNPRiUZUKy6X5aeDASf71b",
  "key27": "4tPcVe6fEFYwBsVMsfSfrZLznSVwhTNAojRK7j9ei2AhH9Q7UAQgSLid6WN6U29Ygpjg2tGQdSrVPcKkFg2orE8Y",
  "key28": "2vZ71SuqbQA3p1gzHrx2s4pKCbZTkcKVkfYUAvUiKXsd85sLYF9Vf7aed7sZfY2KZmzhCcw5wv5meGim3NAstm1v",
  "key29": "5Wm4rsqKspyXEHp5ebdV8BnZbioueHXWHDVSGaTBLkoCccwXdcjLmMZsUUJXVkg9C2ZHUDBZyiKyCsdecEGKCQy3",
  "key30": "3Axr5Yb3d9dt7GwH7gvMDZTRnJPgRjWp4yST6D2yWMD3VP5hkcipcYPR4G4RNEv5r817H3uwWvVjsv6uHPNfLHAd",
  "key31": "3GNHJ5Pv1Fp9tErbP5vz4Pt4qoUHWGzPJZCWqgXy9dX1aeH3PWornv63hTuPFnS3t8BtUnn3fabY895oi3BSHA71",
  "key32": "5iQZtUsMirt3pNWwdHT5ecR8QptbkWMWvG944HcNFDEg4gh4c7FqSd56wgx4oVfSKx5NKwoMxgcTXUpS2C99nAXA",
  "key33": "RRb2n7AySHYL9Y9XE8EvVN8AZfYJ4F3eBjBx6PMX8V4JWgvBRsccFnN1nimGkFWkrkstPiE7mLC1tkDXRiTsX42",
  "key34": "5GKZWRGsJVoxyYQ1ZyA2ggkVzSpLmsgxpze2spodwsdY4ZbcrPDqugARM21HkfYsiNUj3rYJQ2AnZksXoEdWq13",
  "key35": "krkPFZmfAtNMZkK1bLJgvFtt1ZGhTW2R1EmU73fypdX7PHq26cMDUAZmCggW9pTHepwyJYxk8Bs4CoDufH3BQ7g",
  "key36": "3nBGJFpDj4WswnenrQ1VQEDMcLZvDA8PEYRZnpze6P6JqKiAw1frHywAtsfxTW2Ls9MPnNrsthLS6HrmXW5R6BW8",
  "key37": "2twrNDPSzEGPSaxNjxyZP5Ejwu5t21L5QTJmTghbgZrstefGmA3XWC8GRxSH7xFg2fyQ2DgRjuNxiELoCFcm6DRv",
  "key38": "JAn5nNMhNwVeLbDZK8YFNunHWRipzKLRVSTi8cZ9U9qQP4P2fPWhMSsyp3yH4JU1NuKyHx5AK6UrJ3fmEF6smtB",
  "key39": "3Pmaw77n9qC8VStdiGLxftfR7GizF9zCDHGWnbmyqFtuwNccxwfFhcxjjhxsH6uiFfxwC7NEuMWbg77YxFzKSsCT",
  "key40": "29b6eDBGL78DkBFUYipxq1f2do54iMemohXmwaFtQdWyj9u7hwR1xsHwjB5nhTej4N3b2m2RMUY4RvftHgL96hSe"
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
