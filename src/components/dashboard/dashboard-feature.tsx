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
    "4fFzNuLFjqBWk68c2HvLTAobPiz5Qq5JounTV9i5BGY3TumxoD4pi8tGChs3HzymzRYG652t21RR6ZfRWYe7QDYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ZkioPZ2ice2ugXymcZxLKfrU6wPq3gPegCBi5HU5NiWYeR8LJkHxGpLtsw2vXn1JffUp4QdeX9dKuXG78tMYpw",
  "key1": "24qkwD1Ln9PM5CexxU4LxDcqvC5fyqBwKEwRx4BqPaMWNJmom9taNamMydbYnQH7NdbxuiNN8JNqZy9jhpM5VSKR",
  "key2": "3oZwPfeSqoVuH2gZUkvN13QKhoe5Ku3oiKmG9X7oUgg1CPXb9ABstJc4t3GrdJKnRMBpXonnwcYvF7Txe9JXzp8w",
  "key3": "5FmroBEMdYZewm9eEgVxvUxEZY6ohUjyQpNcb3FM4gE7ZoxXF56vGmP1UPpREWEgKpEPQSSxBaC7ZykdSw4a42G7",
  "key4": "k3bkpUyfKq7STq8MFnL7bRpXdVgrM2q9RQ5cpHi2cJ29GZfyM7QwczBCpPS8JQ9PtAh6nvKzhKQSSFusHZBdcpe",
  "key5": "53Nvy3oa8ogzXHLs92gtutYULDqVmkuRZ5aoJeiW5jQGqeU8kuxEFgp5wKax16VLPquQ7HnuUCNnw5K94rNgL7b3",
  "key6": "4DekRzjQFv6eydv5qSpkoRKtyDaoK5ZZpDBaTjoHeZwBhupT7qtNoW6tW1pe4WA2AmSdfXhVaPaDWimSYGM6RUJZ",
  "key7": "3DCjwi31WUCPTtzVUYX1cGx3h4TXB3VeJuw4bnhhJeizGi3usHYutzcqHdYmRHbjFuG9YQemmwh6UaawnK4uMd6x",
  "key8": "5R4XyHqaMTiMLYL83gzYc81kekghYs7upyEAukMciYN1Q9LWdW9PTDvW8uqHcVoUqDUiQiTeHQ8R5nQzsK29VZzv",
  "key9": "4eRctJmcC33xiX2mmLmQGE1D3dNrDeHTx9CzhF68bwDurKkWSHMyAErAT9JAkVV81f5ANRLr9h5fFy4dVuR4M19m",
  "key10": "2Zx4EM17uKVtoDSrgiVTQvmRkU91xom3W1ci8KfPZUXnVWYooV6CWB1R2aM1dB1v9YZM4NLYcH4ZK6XQh5YxNKLV",
  "key11": "5Hb3z4DmRuEjviurGjEDPJyvsJEjjyxBa41wJ77EgidgnqmoWJqRrZC4Jqr9gdFxcrVdr4PrXiXPENTebc4dp8rn",
  "key12": "5i1Xr1GR6PQHTmVNwjNyWk6Byg1Bymdzbd6P2q51PXYJ1J4v7gY75hmKmFSNim2z2VVZxcyM1YxKnzMs1usT6Wkq",
  "key13": "3nMcJcySFTRwc2Cs9ALbt5CgExswz4JM1YLur6ScHyoyCeJVHu1fz7agyxtrZwBok6tjdoH4TiJ5NnUD5bjafWFe",
  "key14": "xpJJhcpb7ddbP1HbHMThn2JJ9hKdCr9g8SAp7NTo5czVeqeb8RBCZrBRaipDGLJ84AZtAEzhQHvXojYUUed593a",
  "key15": "2KeKFcN6ze5VQKTVU3wEo2vZTw4yLCV4yEk1D78E7C3i5z2gdf95ZQDg6KiFrhQfz5bE8p1r3FxFFYbpnjbAdUML",
  "key16": "2wm4eYAyLciSSwzoicJFBu3uEAak63RjoboTtiZmHZ3aLqEjqj2o51P6GeecFpXz26hFnnUcZTmkpnzQ98wt3Qom",
  "key17": "3tUqG4RZdSGnQKJnvAEtDPqrEC3ewXQZZmPL6BUKmNtcfRV4gNxPPzDqSjG4YQFgeY9WZgRhTAmzXRgsr28M7fFu",
  "key18": "A56Aod2yjWwRWmuVRoanNyu3ALPtpMVbL7kQSCgrZK1g6Rx2ZSsVgPa6RvWtFBubeGy8c6KtwGKyh64qSDf7xg2",
  "key19": "2HimTfUcUve6cSMEqo6UWpHSmKogCMVf7QRnuYyBkMgdh1xCu5AahWTt1ZaGBgeJ2pheKHJQpNjfQ8wpSiNeyDNY",
  "key20": "4umA1F4a9iZsUzSfz91YVmpPgo6TvNug2KQr68nSNNMyFVtk2vJLZHLtLQ1DQacpcPr9Ee8YeFs96gLhfG7kgEhU",
  "key21": "5neSxKqqyfnjWQ7PyyZ1rQcKSTtQiaR87RxYwaeELF5nNTT8zyrdSPamCeaWk3xmwYYu5HUQ5VYNKKVvfNLGSvSM",
  "key22": "pxshcUAie4yNZP1uLsUt4oSgL4fGnGVXb9BzXXenWRGb4wdV6Kjo7yQ6WWJHHcr12kkb9eJah27HgxNaKni2D2r",
  "key23": "2cFuzxk36wi4ccFnwyCWZUuTXD9tUrUaB5K9PntLft2Jt1osDQd8W1mVb7QLV8MeqPdNYVMfikxLvW9ffCUM9AUM",
  "key24": "3VvbVAqQoYFzoto2rJDVQxL6KxAC5sSZQhsGFVEEbhCwLxh8jb3nYEQ7egijbaKJYpG4iL9a29dCNecyxdvbYezo",
  "key25": "2nQoavEZHkjY3zQh7RjY77AnpPkfEgV3vheFauFYdUsgbBGXtq37pBGJ8JyJJhkqyUPHgrVch5UV2bUXExuvprh3",
  "key26": "4xrt9iGccRhF34vmFMGLuEUcUiHeXMbLJhV6k7PTyzg2a6wvC7ZEEmvpR634TNJinDtF7JgaFsJQbzCrhUCbi5zq",
  "key27": "3gcG6nT2UFGYkpP1eracbMBMx7K44QWvEpwVz8TJYLAvkR8QfUGV9K31eid4S4esQbjVYtkpZaymPNfW5BG24BxQ",
  "key28": "jvYGcKYjChJ7oWMa6pfUn7rAJ8YV795E9h4eymSoKiHb4yphgCVNurS9Te5t67JMwXhfaU5v1Huq67YE57qrZeT",
  "key29": "4voNpqwfn9qFzr7K4ZhcM5p5zMpBZ1Bfw8gqw1sJ5GcTAHq7RNbTEpx5FCqSvwQ2tGV87WggMYpLV1dnFYaXLZGh",
  "key30": "7Xa8Z5yrkrwrWqEgHWFnBN5uzyGzKP2y1WjsCuKyZFuva3ZzE4jmFhLCDm7p3jpt1AzWeKT4R9cBFaYj3yJ4LKN",
  "key31": "gjXC4dAZFU1Vk3qARbYwvYBd4GsYCPFLyTRRGQ4J4q3QnsYGLdJ53JFCBjqK7PJKowdJXvWYiZ4CfR96mYikuAG",
  "key32": "3bPP1Gc5PUkPJzLGc6cQ9iDtuyqm1om2VLeJDmzjLBm4Z3bw13wfPoHjxnbcPCz6asQsWbLvV78KfR18EqNmX2Zs"
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
