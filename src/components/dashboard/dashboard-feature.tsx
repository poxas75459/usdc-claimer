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
    "4EvMhmo67on8Le3DNvXN7tp1ynjNyja5HMeqetsppAKFyZSmt2t8YVNJZQGJFWicKvRXt4MAbicBPdwHqTK7CbZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UbtuLxKXLeRzmN8j8CcQ96hgv5y9fkYm7cxwyEjsHu35WmbNrn7v7jAz4BBKvnvBxacowtiTC4YuR9dyfvPPSnd",
  "key1": "3dWxtUTK2rnSuvG65SZuyPi5jbLkL2GyUtXkT25GfBR98M81YDmeUZY9MYtJL6C4vgytpTHPn7ctpvr6iGxJEkpX",
  "key2": "5yhfr9Vyw8cPMDALF3wtPiD6eddLG2du9sMCw4Jm4QKtxUfV4fYmsCS4vGmGhKNR7Bv4oZgh4amSfdf5xrQykoPt",
  "key3": "2cz29WvkwFHBkFUmbzBQVMjkFcUCNYmhNgeaQDnQpHsc4vaZ6bnD6owTBxgB4oYeNoCrtR8GKiky6h18LMJX8unU",
  "key4": "3VMLDztBaVpFFqQ2WwvwAAGDwmCydH8empAtA8NGZk3Hm1Z2djnYMXBSeTzmzEqWQ8N2tcW8AgqznXHcAxktNYAE",
  "key5": "2JmYnZTKYsMAnm75kDEJKxaxV7hSn3fBMXfXgKN73z8VQFCXJH1sV2NHkPSes993HQXuB8YKzyR1dmmGTriK1Gh4",
  "key6": "2vB8AKuHsdMMjhvuG7M5q7m869ZyzYgvB6qC4Qq8aXxYKRi4VxXXKV87KhLD1QoD6Us1uV2FvkknrNKbZWZwj2rn",
  "key7": "2TAU6VkNpZ18WJ5eeBtNzL46iFNmzxMt5KmN73f4wjeNhrnNv1Sx7q3BZj8arMaq6NTvD8e5ySdyranuW3b7ER7c",
  "key8": "3ZXctFxczzW3mbhojqcGjqucBPYubB2rtxk1i2UVLUf86Gyijv7KYRMwX8hP1157qb8RUrNrwNSd1efXUeFyMh7f",
  "key9": "ZiLbECnp7j1tYbBfzgGjS46kwqw955M6dyJLVEKwTd1FKkoa1AXnYci95yHZYkwcAFyEsBJVS2NNe66NhnkmXkH",
  "key10": "RZbQ349gBP1RErcj5m3sXzd63PhihRV7b5rmJS5GC8wgf5PheEMhRPxA6CXji5a5kRTQMLaWNhP5AppwknLLffA",
  "key11": "3b5mskyKMTSL5BYB8D3pktPKPu4Ktfiz66x6BSDmWUpMxfEjsW4UxyVQmGTx8xZUHcLXViuL3M3Qx6LK9AN8rmM5",
  "key12": "4LC9WKF4kYv8AGBhhKZrtQzp2d5sGm8x184eWGv91YLrW7oU7JUmiuaz8GA89GQFFszMbzEufK1SapJhEMjZLqye",
  "key13": "kKkHYsBeRpM9WcqAfmyuKTerKoBA9SAMNqgttKswfsBihYcyMn5cJYfbRcqMZo7DXyYikHpCX1TAwUqf7VSYk4B",
  "key14": "2dbj5vVcwLt1vwTxK9Uy12c4bwdMNDuMyCQ9yHCtJ7TG64urzu6X84dRS7qgwnNA2uMYh2VEJ9ZW5eFonREXHDs",
  "key15": "2QcGGKVpQ3nYDHzXT14Yy8f5d9iAJv6pQ6n13iaFgXEdK5qhA5gU9nheYG9Gkec9E3V24To5bUZefYaxhvHWsW7i",
  "key16": "pe4fVF8KFf5sKkDtErRqnrsa9g2afbgVqmoKGyX193QWq5GTCgZnbWTNLbohQA2QMdKSYLL2Yq8mTcnMfkbxS2i",
  "key17": "DGUWw4ZoAP1JHiCooSiKaqxTEuEE6rbc5V4F973CSeaomPyoNBdfCfJ9NkgnufJzQVFj9kY7rWxpp6krfctDsfX",
  "key18": "5VM4KzxMw1fZFbnQHY623vd42PedWsVzEpJS879EcjaCtNMAvxifSvBzho9raJmFsqXPVYUz56zNSABSPtyHmxFb",
  "key19": "2QoWNNuMb1Dk5QLj1eTeSVfEYVxgfKjCdNy8FCQAc5qeMx8fJbmPp9dU39yApUdszFzwJfAidQY5TdwbvVJKR27F",
  "key20": "3biC2uhz7DsUCuzQqtXLwFesF9Waskfv8Kri22B11Fn6fpuTArpHNhqzn2BmcidY6D8ruLa8KcTNeZdvbACzA2n7",
  "key21": "2WZn2cDnsAGn6a9ceaPLe7Wc1grQbEwc3ZSj6jwEytGTG3XWuhDmfEqbUgxzkfEGkmug45441HE5N9yfeT9yPWTD",
  "key22": "4o3wnewsUQJ7ex5wpnuc1ihMXsYo9zwKEigc8dpRoiwCBf7umzjPKmFsw5XUPthQ24HHEXDVRsDjhubXzb9ac88j",
  "key23": "iaTAZpQxsdoutvFRfLgnWRbnM2zHUSoDZJ4a1nfYTeMwBNuMQNejr4HTycnevYMz3uDhFWB43vLL52ZaEGx96tn",
  "key24": "3Qw29k5jX1F2oXS23a3Ji6c6Z7XB6pYyQ1dWEcwy3sYcvTPpWQm4HF4aLima3jdxyEMVRhgKBW2hhzPhQpbDAEJR",
  "key25": "4x7vTnTGQmnec8wawnogY9XMytpRqFUgnHbCmSfmTZ1aArAgoVwHuZsYtfR4o4NNtcsU4FZJmaAJ7rnnFKbeiVwa",
  "key26": "212LQVvxua74qAEX9xxywC6SVJPW4AwzLHvEQe2k4dtziN86g7z4GciySNC1WhtMP55Z3va1UCfEQhQ63fKrfB9T",
  "key27": "2yWaWhPWma1GSs1mLpuYNVY1xcGJfZKqrcL4rHXYsX6DdrJjDwAfdWkYUrftBjrwWods4ifrTtUfk8i3Xrboffta",
  "key28": "3PcVn9iPksyNL4yGaX6XBgJm57WwcZxvxRcAzjsM4SSgvyUG5uF49hy4hn8RUYES5q7uHogs4d4wE5jzFs7rEje4"
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
