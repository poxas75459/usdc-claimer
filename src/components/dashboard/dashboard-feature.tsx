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
    "4dqj1dF3PznNccrv71CR5KXpw2Z4UYnE8xdi3Yn7G2zNniPzhWLZ19H7tGvwyVNB9FAzEizoEb7N9MZibWNtrxuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ku5edxYSomgvQsi1m6pRi3vuafoRLNNn7VrChae2R9WfQ8PS3AtfFGSeE4PPr4huTNvkT5SSYarQp8P1gDcgSwA",
  "key1": "Lu4iLx5U2EogCcRtwyjLJV5ZLuHxoNagUbkFApR1CMzqgGW6SUtEoWtZuMb1uJvkXMxZEsF8UDCtiuG6d6Za24K",
  "key2": "3BthcThwfn2rw5EU2JT9gA1grrwDqhmEJBKrE2dZ3Xm7W2k879oxxHbdq3BXmUqP9yFzVsBCuvAUgMh9BQ7fLP2a",
  "key3": "3qwtVry8CP8LSvYzgbH5xEczvuhPjHaR6nCAYY2SFFUwttDd18CrYnrbSGwmNRV5ueTpDAvHMaXCgAzN2HQ6PXSo",
  "key4": "2apC1AqigE6c16Es4ErYV41oE6girDJL5Zu7eNir6LSQgFk8qheLy8m4vd9QrtvosT1EBx7PZcU2ypgtLCbJwrZ3",
  "key5": "2YQ7KuGtgyw8HZizV9vtJUQMVJFwUheiG6gp9bniaF2DooNiMZJYQMhfSxPbJkrQ1ztcyRcdauWznDdgyWzUPF7A",
  "key6": "5D3LdyGh4ULR4ybCz2mfJQm8sNFsYwJjvssvwsM8cYh1VF5GJuEpGpVFrWHMaj6ak4kWJ6RMapPmJKRNVxRAeWUm",
  "key7": "5YC9W5D1wLsg5y1vQSiCEBbgSAC9KDxgZeFNfJzysDB68rNeGNmQm8aFqpacBaZERhbYMZdRS8ZJtnG3yak46f1N",
  "key8": "26Q3Yb6tBJoNtzSJWT5F6FP3n6QL5qc3SZhDB6p9fLNiQEjZ6w3dRargUk5riz2pFEWNKzq4Ut4Leu9UgyP4ec6u",
  "key9": "5kBwiEurSQMPxNdzdT43cjuN1EEvdwcnzSAwxkM7p59DM25xyA5xAXD2DpJij21aPip83b5qBVU63wa1LGhBcT8Z",
  "key10": "59dHu5ZuhnKMFCrBmvLghB6Du3TXXELjQS35tCk7XLJ71r1cmRpbhc4CYUxAYLtNb5qmPV2QLHQfqyUtiNBvwT7E",
  "key11": "2FXVcSkUNAjw4gCPmhNKj6QBarqmkfDNcDFxsVoEaFAuPbCT7fDTotVWwSiL19uP5AaqQf86eg9xtvzv6FXEU7Uc",
  "key12": "39qJC1FAKkqaUcG6aTpnv61BtqnzWcR26KDG5qsjfL1eSwxYTmWY97TVzwb2vHbuygjmYENGpSJ1hxeNmPJyHpvi",
  "key13": "5VPspni8BiDcsdEw8FsL8TQghQPpZMEZ24pVCeTzGvSTJtmiaCF7qqkjA51taTD8M3TwNkHno9PRkZdzWQ2VVfnL",
  "key14": "4UKLUb7wTH3KBmFByBR8iEdNfqqZyNWJvBmGkU4JU1cKpEFhhtMNj9dW367y8DtgjafXtgaXusnbzqSx2peWzwxx",
  "key15": "5bakrtXJkCzcCMyNfPnuVntoJCuwZJ8PFdftcT3JrMpmVabq6DabkJTwQiJ9qqabnJVYW8xYq9Dcy2wAuLBsAo7V",
  "key16": "2VthvXEmxwg7ccrRcSL34XdFL4EJuTrcuar3gdfpyHwwrmxMDkeBLsrcz5XhSFgLXdepLzApY8Lu3yBqVW9WpTUx",
  "key17": "5GU8dHvwBXVzaVLfyst2P8EaMpfUfucVtQgryC76WZNT4Cch9jQwWuoASGBnC4t7PhtZMEpffs2gd3ienmZDtFhM",
  "key18": "rupS9YjFsKeeHkWTG9wCNQ92Z2AtEFxV7GAypEbkYAvJuJdfiCJceckjV3ZGVso3guydkn83nAzYxBcsbHbhnkt",
  "key19": "3Xe7zxwm1PAZ61pyxtajhnGdRp1YhWj3S9epw7MNyTGn6V1gYgcqQZESZvtsdpgB3dm4wdrJgVi9ZZ6e7pimzAEb",
  "key20": "2n7mPbxXzVxcKBB5E11CWkUteSiqpsZsgnJF7X4rPvqkJPDAeRUdaoRfAxYcw6mmzmroC14oymRBizgTji3AcRo9",
  "key21": "4XnVHRonPsJtvHxUKQmMxsCm3rZnnE2Fcbu2CQbyu9kMGdf4bfrQUvgQ1Qw7rNA2eY3d1cqPsuZSCEugvP5g96YW",
  "key22": "4ngpm9mTAbX2a94NvcLHCvYNaA1qjJUn21842CxGsBZAKRLU7Ttkb4MvfUPQmzTvZ7kTrfnGHAhDzwTMvorpcx2Q",
  "key23": "4yfEFLbmtaXeizKngmsR83XVH6nPj9LJGhpuAxk41DeAU7cDgWcW383Xi62mmLKzaK8dkoEx8EhmR3oVTqc7gsoD",
  "key24": "43c5K8huY4dzHbwtGnu7mcuL38Ttna1UR6mQqUzC5Qd5mmmtXrfSCM7QRZuA2n1DjyPRGBtSqnc93aZAvA61AnMV",
  "key25": "oEZxrfKzimKqSpSKD1rRjWiM5NqZUffM81S6wZjB3X9a5d9158SHe14HeJScJgf1xuviSRgQ5Qp3R3SDZJnNqHn",
  "key26": "8qPJowWjiiVXK5cp9HEwZfoujYofnaMxiWVTJ8Z5RfQSqkaHN3mGo6o44yBSy4CtrtKfS9VJr7uPAnH8kWvnCPJ",
  "key27": "3Kq1rcnpoHPqHppsfC3UWGkyrJVvbGCynxXRjrgqvfu1eS9BbK7JFAUUL45xQHarjJ9xN8ytSmzf2Lnd92xH5j7v",
  "key28": "4XM4ZhhSnVvCyZ8NggHpodGUMpkwiXQj3Qm9DmK3PryE1Prfjb4LsY6qK7EfBzSi4qtTHQUELLvEzF8pRQtMcMpH",
  "key29": "5A9hXDPnXBwJh83Ghfpr5R4ULe8n5FupehiHofcU8kPeSKmJTHtFYjzoQv4v68aMxLSM13MTyB6Npa3sgqZQgGVs",
  "key30": "5pZw524R4FGVge4kvLDHGdqZxSKaxsuXLdybyfoQkXEdKNoZQZEenatsNAu5oVcozAzgjSkKXBcf9jgjN1ziuB28",
  "key31": "3MHesUqGz2Cn33xYQkFGyEiXgmobV9MyMNyLfdz2ymXxjAsAf8QpeaEhmtxEgsgCyTzUVQvXrFQitr8AVd4z3Edh",
  "key32": "4ruKq5WTXEi1BChHeccg6BTYwBSbWEGDwHuaX2zsqnv3gRqWMjVuJ4KNB5vkrUBtAdpKutTySJidBdwLaBKhhMah",
  "key33": "3ubLR1qGHBnfK14dAnjYUDx9bHE31av11ZV8CmRD3BdpyC63JuHjTXLJLrG9HRwuaTWMf9A4mVMpynvuEKj5qND4",
  "key34": "5cQPNsFYYeaZmE4RuRuDvtZ4jHG4JzC1kESAnuoEcnC4wByh3S3xwoZzBCajgUoEFB8KnQnw6k5cFDaPJXqk32rH"
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
