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
    "2q8Hmd3rxWoh5Yy8qwUAjZLe8dTKecbEU2ZQuCX66Xv5fF2q3Spccn1YGFVcCN8oUBeA5C2FCV7WQYqEAxnbnPGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XcnW41ih1pttSASvMfWcPebQXizvfYWhLs4tbBuqbazkhcGTPzEsewDqsbG6mwNfH6dZ32kB6N27YK2dbZeFLp",
  "key1": "2QXVKdnfeZTD4xgNUNsVzkhotSE3HVLS6atiHTv9q2MwneR5PmouqKxWqHh9pVVjnV8LGoBk1XSHWAXUDip3EvqK",
  "key2": "xXyBTNTJu49a2YBN21jQzXojapJoLencqTbwUusW2VEDrDiBpk5SmNV5CfMTjet54THuDKtnDxQzPc4wyZXFTgd",
  "key3": "p7WKtXSs259JxGvvD2h1PkrtWJAUYwTHZH6gPAMBCq3fzg6fLX3UzbkWsUunPYSNTXE8ibAM5FvfzmfMp1fbR7N",
  "key4": "afjgggV7TTPjuSvqLFfmvsA7xSMfF86HyZguRwAM3X9tcpstQSmo5jR9HNFs1LSRYdEanvCRJNiniXq8BGkA8Be",
  "key5": "5ZPyEBfBRAfsxb7gHzKjCHuYqv5QzCUdj7dJqLy81LwTQbKTdiRsCDFtqS4HSUdatWPPnEXK8u4zhbRMBNyTh2RL",
  "key6": "23QKK2iTd1yXsrRe7kWhaXwRUjvjC2HspMPT32rbPAdzsijbVZdnQhr6YZukZ1BhiiFY2Vx7K9ZnbKqMgz1xbLWA",
  "key7": "2GFYca6ifmbPfsnpfzbrMc84LNDqTWi65GY8jbvGP6qGD6nWwGWC8bgDHnPtYFX4FZwbQUnwGZwC39opihp1BirJ",
  "key8": "4BQSj2z9GJXx8CwHzfWqLb5ewzxxZM6N7bQrezSKo4ts4NxLta4CPJs8JF9aL4bb83GRVi8bQMEUzsw8BiQGv7b8",
  "key9": "2wrHqG5wE13auSrNppsqikTR9SuXFD9NhP8TnNWT7bVMP8LDJSoP26QVwseNC5uMJyP9z2eY7qcJHUDbj4xPCG4X",
  "key10": "343RcTKBZBgtfJvkALJxLqZM36uA3HRWYX2zKAh96W4Rznu7NzJ8R9FD3yrizvkAZRR1foP6ozVJs5xzW5ToVnsZ",
  "key11": "5763wuzZsN3ffEq2oYbpTXCfz5jup4nZ4VEFjxjkCvNEBuLDP8uzyzhMw6KVYkkqXhcZ9YHTFSP8fBAD4q4Tff4Y",
  "key12": "3uWyFAvjPX3BqXTATvK1PG92q4itHTGdU6RVEca8AoBRzMTgAyLSVmu5eWjXDU2KqoU9RkxzLKC5YoLkLbAEfFwJ",
  "key13": "3n9FxkLXLm6cUCKuSNxnvniUpEQVhTabaQJ7H2DhAN5dVD3YmdAvcMZPzdxXEFuP3hT4hKiAezTgxST92nfjGR2H",
  "key14": "2kBgL2ohXxTVBM9fPagN5vt1pkMgg4Wk37gGo2upieGtM5HCA45BgxexBXb32THXVtyM31GNws4sHsg9Z89RHuPz",
  "key15": "kJihUs4VuLyni5c9rTa3JMrQN2Dy8fpw8466sQ9mFCs6rUvAMF4NnVPikMaYE5TrVdm9EPmXZUSDYNGGxrB4mhz",
  "key16": "4YVum2tVBW9xmjQvXeGUeJjV1yrkssJwxqnaE2jhUkmgi3uqP3xyncpJEgiTcpidk2oXyroGg3u4TyCUKu2uET9E",
  "key17": "5CETq4a7HbPtDBz7NsWF149q462xbFBy8JX4Z35j25WjPsqHjPUhKrQqk6kfSc18MXETYj1VmUMtTeFU6UQpSabD",
  "key18": "4cK8zTB8DcBz4S2hviGRwASn6EKijUwaVan2TNeKHJK9gKLv9uWwrCPBfmxHYjwh8j9yTSZx8q2nyR4FSJse42os",
  "key19": "5XhN1Mrs46oYD2kt96H3ZqT3tXGrUerapV5Pjk3bH6zDqMayNTj2MwEHBHgXDrgsJiCUoyNKxnR9MTURPdcGiLEC",
  "key20": "3aQm3UuCuXZ2jaY9qLCvNXGsQBPEN3JDxnLvtA2V4AHCRgGzayjSk3ANTy6kzR2Nyub7Xc4B4jLjGNTMJs2v3Xvo",
  "key21": "3WRh9n3kHDfMpAbkRq4ZxQJjxNyWRpyKJw2hoFdLutV3qyKk4KGBpw8bxzvspofdSkBC5quoU6Ga2gWF7kCNTvR1",
  "key22": "45Mzq9tXiLeDM8cp51zUY8wn16yxiiEZPS1ifBKE3bcZLLaVVgsW79DoETWV7wpgi7DmrBYDTAV7gAUrWTDHzbsW",
  "key23": "2h3swH3Jmd5xpQ6RThBQmASEgcPGXYHREQ7t2ZPGfZAsHDWpscbzggQ4b4poWzPqBjXarQZjHgBvBb6kGu15rcbr",
  "key24": "2HoUAfWzSj8Eq3k3aBPZ47zEifndyxj7SYk3z6rXwM12PoVFdX9MaJ5taqqQMvWZMWepZHTd8dr7oJFGg6FDhGHJ",
  "key25": "3LHEBE6AsDPgszj4gSXP3BRVWpMo4qyxEULGGKTpkQxyQWUbTyQHxgcCc72hcu5Ko4hhHhsRL7YDk9zgPXzHnn5D",
  "key26": "5HHze3BSz4YbS7V3RSwsbgnimMHQhgez1qZZzd1qyYhoymBWWPdxUoy5WEJw3vquUXUVwCHEromrJxKMvzrBmXrT",
  "key27": "5AML1MCrhUwGy9SUD2kr7wo9mgzut74C13rw8L2MkKRJ9nxnkkZPaudbYYQGzDeGYofbHP7KnH7bqjXxXSEfyxT9",
  "key28": "4ZfDGxLbG1QBH69ZYvHkPTRQ64GxU1uBGUHoiuhYQiN2YDx3Ba8RtcA87pKtVTe2PsoH4N2NgXgred2DeTKFh8KZ",
  "key29": "3ik7JYyayjDsmFm6WJ5iPbukcwzKHANW1fezffBZtC6jssqrVxHyrohWrzMUgxp45e7nqGbE7UcpHmZDcH7Z2Qxm",
  "key30": "4oYFcb9hH7A7bVhpNjmjx4p1oSVpLnxn1MyZjjUowZe4Tp95bK6QkuZujdfFy457mcXtcWuM8nG39Z7HuC618L6G",
  "key31": "YNemBZtKbD4P8yt9XC9trht7qDqxvBcUcezz4MoRDbnPM6fnxiLqdJ7HGPWcXztp186CuphAQRGF7vWtGKR78w9",
  "key32": "5KLzDWcyGjajv8m4oYkEzsEm3aZJUjnfVXobZhGVHeZwy24ciwPR5cZu6ba7yqT5EMUGG4XJN9PwKEGd3Bmws6sd",
  "key33": "5CmU5fRNXU86s71JP1aHDvrzvkmaSBLhMUTXExV5mHRrKcqZspRCaFmDZLctNWeL8MiaCFhhfvZFXUqHKVAwwRWy",
  "key34": "5QK5PFK8hpxq24smhDAJAb3bUmdDohgLTQYXu82FCx2sApUUwiY8jC9LEPyqVz12TybFTKUveubSUiUezJY59pTd"
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
