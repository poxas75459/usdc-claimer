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
    "4ggpGjxcJVpv68rYaJEr3xRWmYCCz6ocu8Bm7fidVHz5JoAQD2p2EtrSGtobbXY4L7EcCrCnn42dChXo2zPg5YNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3AJ89ackWGe3xmfXkbj2w8WQj8H3RV7znPRDGfZbNJdgS91sQTmTcRVmAovKWELvArwjmJfpk3offVDtdaVhvj",
  "key1": "pmiqzVuHqrRJj8kb2XxNouPQtsnZ2pVFPCKiRYagNez8dVXnbMMVLBbjynZe7TgYya2XiWYFMhw79vLBQVf5MCX",
  "key2": "5jn2phtAqZAvAHS8VyBthAP1tfEgofJAe8xEpzoGBmEQXNMaKno9AGJP42iwJus6oZ2MGUbj6VFwL7aVVKBeAcFm",
  "key3": "4pbcGoXmGTitsQLHSYwuV7mNideFWmHtr5TsPFJyKaEYjSeKebYEr1pg81rSrixi4eD7cit1eGwtTFi8Gw9MdRht",
  "key4": "HcJfTdNoVZw22K5jpdXx2jhUb4k2HZ4NDeqvYGM3zB673nqjWYKTWxU4qw8Zk7RqVLtvC2Xjm4Vp9TabjCSWH2z",
  "key5": "491m2WDnvyET8TDCHEDjC7wDe1FKSNsbGgyCiPrb7yWqWvndRARv4XL9vQJBKXAncBgTv7uoYqDaPobWtajpRFTs",
  "key6": "456M7iqxZzjbtRdMhWBMuk1wd3s78NXxLEDhmknZsrxJiXg6mQf8PunD4JXmUbL3PeRTTrza522ndNPVn43pZL3i",
  "key7": "54CeQ896cJVeaYYNhuvrJEZ1Ys2fvv8ow7E8noUmZGJmwzx77ETaZ1dbkKacnBCYijERCRQKpB9Ti7BqEpEDaMfr",
  "key8": "4JpCwk9xYSrGhM5P8hs2EotLHg1LrbxHWtLZEwrZep5tQx5Q7L1FhH5hapisUvKVFXadHFtCPjGkBgvXodQd43XJ",
  "key9": "r6Vdt6tviWRdWqkmhAKRCV4kQMCpLfwScAaf2HnSKCyXrSxcQv9STMau1ehb1wDMr4HRw3RzX823ADM2Zx34nJK",
  "key10": "NgMmz3bkk8oc1ow7SAgirkQRYEcRHcdeWRwsEXoJG2chqmn4e5fq4HqkFeyswaKFQiMfMexd3LVC3zYq2HmRMsu",
  "key11": "5RKfXBdaUKpLqrfQ8DXWgJfdfhKeGWBnYBL97tgmhMGyvv5zJdL7juzb86SprUyjMFAb3wAFU2iiuYpKhUWgNarD",
  "key12": "3U4wUxZJLT35UsAyoz5fyWE8bBF6N5Xjewa5zfSBfew8SvwimyNMZKrWfQ5KyJBdof9HzoESAGDuwZHFi4jZPd8Y",
  "key13": "4E9u1erijHdKKpvRT4V3XoSZ37d9vbqqQDg3vQ6NJrj35uRVtuxVtXdybL1idnUWpFSF1iUUviZbBaTF7nxAAxvY",
  "key14": "5doh5f5UiPZbMXn5NHPgjVejhVPyee8XLBKhhcT6G6RBTAJAPfnfpi56ByTmmV7FngST9krFv41jNJbdhz7aLV9b",
  "key15": "MqFX3EpXEnKhVXF9eNDgdv8aW2ALP4swWjBzbeppdGWTBH3jUMRGJDqiDgzUEczB8wvhCBGRq1gTH1v9HJ32UoL",
  "key16": "CfgqttvMRrDKZHPQTPcfsSR1yC1pTy6iS1m3kCpwKT3yT5ppU5AzhK67yepwuKQfWWFbw4GvUqfcK2oUy7Z5TTK",
  "key17": "3xJji6yHqKBZQVM6JRRU9ozs6hEDsj9jUFxFfb7KVbBCVXGGa4bM3HoW9vpQH7LY2nkFohYyVpHJn2GenAC4iYDx",
  "key18": "3NaNfMEi8YFpKDmedFEemZws9rXxf32nHBBsRkxCshVJ6qAJPND5xkZJq3DB86QRuHYQQVncXMVc5TPHesce8SPE",
  "key19": "64apfZu7qUBExCVqFNBqYFqpsFsg9Tc4zUzCLXB4pRJ7Tqd37QKDQ79vdTZ2QTUb6t1ksdQkEPqX1AGKcq8z46rx",
  "key20": "5NoCdQ7BtBKvuZ3we4e7yd3AmZfzj8kM7C4VBrbE4Hda4vkX34o82m5wHEN9ZtXXovoPoxnT55Na8KWNV3v64zMC",
  "key21": "5v8GXNmkQN2u5t1qab2JyLc6kBzmBkA1qvMyQREoNTEHFhktwMrKcmAQ5raXDNmf3J88ziJFMjwtWViREzLUxco3",
  "key22": "4H7T2xAxWy9yNb5toCNF8UwUefgswKpGJw3ticyrBN55LBMEPDV2pK6kb7WwfYCJfX17nDWwH8oKHZji8k4NPDw6",
  "key23": "3r2gss5QPKDzNb2LRyvSTQDcruJRK7QBpSKBPZ2Lr98o6CuwHDDrN2PZBugKDGS16LRgzE9unfHDsGcSkxMhgkjo",
  "key24": "5jEiy8eD8C9AsxMcGcCLZ7N8zeZfE4tALgujzfHQCDAPfv4QruJdWwhcuk6mjHEJMjDPVko4LJSZZXJY6hhggFSe"
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
