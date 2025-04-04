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
    "5P4QgS5kQWnia5mvVjLJjZGLRiQmcMGKcHH6n79nJCooAxozvbpNSvAP9sZ8bTUMVFY384QG4JAZEbhvDEbtPiNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39xuvznJ1TVYGQnQRCyvNT3uUF4V2ZZLgsADQVn83x3KsqF2PAsCqQrzdAWvTaUBStGgXqne7YUCLWCT7JNDqcek",
  "key1": "3MA6Hixe7bnNPAs5FzYCdHd11kr6Ho5QGKTUSUrqWrf3LHQaVLqGCCz5TiQBzU5vzdMA6s7B57fyWwXDhro7i9Bu",
  "key2": "2Dd52bGXNqSj8R2UNFRr63xWHiSGtucf4fs1Jv44JUXWoy6JxDBQd6fQh6qgwKCqFV5J9ofBz7pBWkiqziagschn",
  "key3": "ywQr1qmkxDxRVasp7Xah7fA1GiqSFBZ81snLixVV33S9urS83QdVxA6Su7CeyY1yC7v4qjzHM9zzHEJEQjtTUHL",
  "key4": "Huy5crEFbejeoa2Wz1685egZ4L93BHdJwSqrohyUAwdU9QvgHbVxF2hJprHs6eR8zjfp7Ex5QEwKHARbCSaHLjd",
  "key5": "29CRCk73PVimKkA9F3fsr4mwH7LMoiqywxNzjpRoFU9KopRyZBQSm7V3ftKLLqRp5MZB5k9zZSj77XFcetqZQTQi",
  "key6": "4YQvBavCUL13vh5rLtozoKYw1UP1GbtV5cqkVQvbLsDe4dJeU47PBeMab52TVcmJoFbPNbq5N6aPJcahHKS9aXfp",
  "key7": "eFUMaFKtjh8MirxfuT6dL1Gr5rS4PapQLvM8nPBvixzVE9Wf3gDkt4z1vgoWErA96ikTHXHoBz9Gw2Si13AsLMD",
  "key8": "UuFWo4hnDrhijeDUxnFLsYE6nxMXFD2MbVkENKRUPscs5YKXxmAg8xVEjW4mX1XgXgzP9ZsY56hJcYLDvxKq2UG",
  "key9": "T42hDYrhFAzC8c2iSb3ZLRR4VSpajnZfv6WqExUgVcEa6iMqXGogEdYv3ttj9QCcfYEVrm6kPkBqUkLjWjHSncn",
  "key10": "1ryrR8W8pvJj5vb4xzKdnW4zvkH8xteteMGQwhT3ZcBn5Vw1HxRCPbcNzL4nsvfkvAcVNSTinRh7TcrgTV9Fs4i",
  "key11": "5CkMgkemz7H5gA2QkBhQji5cRAUowFnuMxFDvz5mPcKoEFNXHLE9qiFUgVV6vdrUaShafS9Lb7T4QX4EmL98qsTi",
  "key12": "59w36JZTktQ6GbvihdWjX9hv6BVCg1qaTmqVmZ3GoG4mxAZPDUQ7RLNmWU44kgfdrvRzSqAsf7yc4GYzyBnGGBhT",
  "key13": "22MYBCBxDjSmFQeLypD6kffVv5FRVTm7WB5gDK46dr5Vjd2BhyVddyZaNigq9y4QndZ8MHGQXqVT1ZKWvHqDoAed",
  "key14": "2WwZumSre3LZUuCiHBh2HAnj6LRqrLsQT666dmF4pQRRerq9SmmRvQGsLDMJxt9pMK78PvE4v9Ao93qCb6KHwshN",
  "key15": "537dWi6JAMRsYjpn9TpDYhhqA5dmbWvBDVJpEqW7wGbMWBHaiRu6Xvdq6VQQKvPp4MVWviHfsEduDmaMHtUX9i1K",
  "key16": "5A55FP8BwefqrH8oAD5EJfssthhhf8ZG8mNPTmYrunrsZBqbD6L4eeQGdDz8ohkzwwMKEp7ETgrcCtEx6kwva9KK",
  "key17": "sisctQNFA75G5KSvDemSkBc1xW5zk44WMdyzdhee7ACL6z5JYXW7pTYisCR9wi2HdmXwTq44xPoP1XkiHRhZbAJ",
  "key18": "2S6xVyjALVoY2SvyNkvzyFnozFDgfHfgVp4enWYxECtwjyJZhVbMYSG8DtatvAsA7H3oHWnrAaJQ8TEmVGriLng7",
  "key19": "2PHhcNjStrpUqAUeMusEQaGE3JNPwCZPXbZoPFsoRHhhXrMC5j3QEkJWdg8r31op7Tp38jCghMpHE51J4KsvtqVw",
  "key20": "3Fd2wguXpTiRvVXR5g8njGfujKDJoTRC41LJTTcB5nxw17hSHdky8fTL9yzk6zXgRrAJTzWSUi6YaUcRr74NHjCo",
  "key21": "4a6dnSpnnV5mECZ3xMBNYzPjxpauQ5NK7XVCkrvWY2ztg2TBqg88i1NkJgAHfjnQRa1gBCoQ544zCEdFyNkNVgUN",
  "key22": "2XsMoA7xTmJPU4HTrkyH4fmoyKQchrBRY8u2HqgJG9UBecBHNrKfNz1Z4FJefaFPC3YZgQtkoxa5dYFhmtpWo9zw",
  "key23": "63XmNNghtQZ4qN768b1PhoPSfu5iTYm1qdzJfk43fP8yEFDGHq4sxubQQbzmtun4VwizLwUg3ANmG6dkgLb8G3Kz",
  "key24": "5dp82kZQfxqGsycw28f7L7fbxhbdNGSfNUNtHinKfBfBapa9DzkggEqwskWwahLEatcxrjzejowBnmMxPUUi5U3u",
  "key25": "2SHu8T6KngkrvpaqpvDQkvudNwbVY4sUw2fHqeX9Pv4KYhTRkDe1bGvJqS58YhTagw2PzL4emtfcpknZgYwFjGBs",
  "key26": "3NgRRqxZUiPywUvx9BLoJqkE2ifERqAYPM29XThij4ums25tmrcgAyuW5EGxjnEdTNM2FXa9pXYakWpXHPVSKJqR",
  "key27": "xBnVAxd8xcuL4VqkX5CJeZ9Q9ckYpb4P8bRayR64vk7VkGct9T4fiWS38943C8LBsCHQjStHegfvrtMHy8TPZ3e",
  "key28": "5avFExuUMnCcxeADM8B4xy7ASUgGKMHuFxBn7pGvyGmnFjkarFsjASqVUUrQbiFgJMyWK81Qi2Vpd684tzNQnGJN",
  "key29": "55MxhfpReFwTNVgw72ExnC2tzfb66sQ3tgtPrpq7fq3zFGyNVWvuVQJiTQS4sror9rGvo57twNbVLRzY2NmxiiVn",
  "key30": "2rUbAVkQAHG7qWekz7wAHiDSwJBHPAQCBumm9FeUiZgQqgBnyo3KVHV1qGaChWooduGUfRcWSnjzoxgTt4GK61gM",
  "key31": "3kfwpE4ttUKAyDu8KWu11TB7mguanYg5RrsM3ymcPE4iw8X7Xcfuvk47eg8G2YZk1h4i5LeNkohfikXU8eprcy7e",
  "key32": "4yTTWZh9ynFqAvK5jFpXytKE3FHSJAcafYqUudbXKnN9hLpvR9cJfAsVuuW9eGdPMErkBXqHqux3WzH59A7y1vs2",
  "key33": "eQUdkvnwYgzNxXqnLgn7U3MY9E5Zioobei8NCxnpTvMkhzeipNHHgxY3GfVcD49AVwkSiU2s2WWJjqbskBveQmS",
  "key34": "2KfNhp9VZTr6okhmFNBRAEsD7z4CSG9BcmX4jz7Ns25zukSyQjX6K1Nm8BSj2oQhzkMQKBCBTWKMgdRj6nFP7Azr",
  "key35": "3fBALkGjwnjCkAEmH3N1JaCz2UVkd8V8JYpor6hSKo7JZ2SLaPxPTivojMj3k1bjpBxtPbG6dns5ADD2BParSfPu",
  "key36": "249YJWzZeZpWXRZTGwo2S8j1aJSU1Epdpy5iw6N1TDx44hKjx2k8voqqKeWxYB1rGNbpyrD4QddpzEyWRmY8nQXM",
  "key37": "LE4k15tiDHLPZjmySV3yQ3WbeevTkhizhSHZU6kjYy9WeqJ9xbnsuHBA7XrTxNYyxNxCjzxDRCRuUAt79W1R7yQ",
  "key38": "2MRYFUfJvKgcDqjf7BQTm4rq9maobHo3SReMojrTyRBxANAAKvgcYPJ7qzccGnGF1Z9bcPD73PWzfHTJuDaECVYa",
  "key39": "QWuWhiAbeYqQjYaAKNEgWsez4AH6F6zGgUAFQurx4pR19JhDGdnqYwuFEKtup21QwXDcZ5r1z1GdicwrQLpon2S",
  "key40": "3QhbxePMMWd1bNAm7hyaTZv1Tj2oi9sNG6qDRazSmoBVjjV4DoUdqdRezN4fBQZuhPBzLrw5VFc18dUrZWQkPrqC",
  "key41": "5UzsJfsNVXdgJUWF1NbgGVkFEWhusvZo14y6jezk5Vqp4Q6maLz5V9Jz89aegvtt8Ezjkos4jckTxA3i78JQz7ud"
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
