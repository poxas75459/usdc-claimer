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
    "5ChZmLy8Sra12w7dJ2vPtW9t6Ekmh9KexT2Gz1oJ1FvV4fsHc6V4xC9BqrfTDLQVC6tfjmkttEZKwuK7gEimRBLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSFnsHBRzASo1h7N5UZAFEsReFWVhtMdh11Gd4AevpshTEqUfH1MnAaMVMXdSDoQcZqrmB9rLKGNq6yrK8MfPA8",
  "key1": "mL8zQeRCJyPUngfRcCDFFiHXUPtjTUqApuyVEiRZZVveDrZnNShhAjHUrkboJTEGsHAKwdQ9cfSjnfM2kcudUuA",
  "key2": "53j19zD8XgzWYLdv95vs1tmSH4zeEZpwaNp3cGV3sMYdSGEVtYyUKJbBSdEEC2T4SGyaY72sdsHgWaqd127tUFBy",
  "key3": "jcv7WwTk6UeCWgsW1yKC4NLfAWg1dzifVwrgLRxz5dENuen4gSJit6soX3UswLKCmZPBeaarzjhHwi9Y3Qjow1a",
  "key4": "2T1xp6abejfK4WahJsiBzDVzcisVMLwHQn4eQ4jLvPT97LWWhRKTAU7EHU9iA5qHnDU9QXumT9VkCuEkdh2FfPu8",
  "key5": "h2ywtpNZBcnTGBZvsT7d4HQVKuQvhzXDkRgvgL7F88VEvYSmpPr3jHHmZZLCeYYi18CJR3trMEEpr52QWHSQjo9",
  "key6": "4bLkEcorc4HSFEAXrkjS4XzR1SNVHaqoPe8h6YUz5oGWgmS4JzoJS1bznAnSL6GqzwKJ9uJwnLqkow2E9vtWBi2c",
  "key7": "5DSVhQ3tUVWJadQWG5wqWi1yPHJQGhWH85SVdxektb1jRqK4AU4eSSAncQFf6yFXUctMhCinMJLQqvXuzxxDqLop",
  "key8": "3NGUbaaSUdqPdWM6K3mDBz6dAfwuNSPnfpHBriyRccQXjCQFJVG6Guai8tpjMRNsR4cJA6zuJVkadW7NiNKFNM3X",
  "key9": "4zcytkQtv5c72M6onATJP1jkLvkx7i8XBL7aRtUYQL2M7LZ2gFe5pN9ggYAXhTVS6mHya2kFab4BfByf6hfHzkJe",
  "key10": "5yH6UGA7fk4dWecDYkUhEEEmcmb7kqaWpEvVPWdi8Ut5jXJrZV8r74dAdZwdgymituTPfduZZ5Gdqyj6YYb6KrFi",
  "key11": "3YWnzsk479kxsUvAc6WhsncHfKNn2pMHArd8TbbogszDEDw2NihF4CP149r7Lau5h4vWjEosnv4sCAGWdBaN5y9L",
  "key12": "5235QoF4UgDm7P7ZGtAgKVmvf2bM7UspC2tnT6WqWgsbrDPdjvx9nPyVXerzfff7w9dX7CccshiZk2VNMBpAsTFX",
  "key13": "5JjmTWBwiJtEVK5XXwhgj3RHJ8F6kBH5rMB3XfrtZDB47SN5TVqd2w6fE2bSMk9RqkSxVBUSFZP2e4VskmRNHR7k",
  "key14": "LBka3KihoY5uRaFYJFwkB9tCB6aWbGLDZhUh2ZBJaVbvQCgVdkrAPTcPh9vU9LdBWCv8ANturKujpq7bBPimiis",
  "key15": "3mUXAJZyioJtFCB1gSJ3JPkhuWrgZ6aaXDaDbAr9T5v7oEwgvVupCr8iaSn3Xtt7LaoqYk7MSrTf8GT9vxtXGms3",
  "key16": "5r4cjK7oJXeKoredXmNK6veh6a4rHn3xkcCfeooV4obPvC3J7ZeEde2JBZ5siSqhNE74qKpLyra57y69mW5rScwn",
  "key17": "5hq8BUkSeUKrkvhHYoT38wbJcE7BFzuHCCLam9TKVrGedbFYzDJx4q5C3bAU4V3mL82JCTwGirvgRNpiBeLLMCJF",
  "key18": "5zdMXzH4keuiutcUa4yybpUk4J7M6TLrnvjTj4DYywusc1HgjvMgTRXLcdzTW6naBgyM5xpykWdDNd21EonbAhgz",
  "key19": "37g8j5Ggr6w6S8UXCjKuGpe5tCUPxd5VAKfGRqaSJ78YPDz2MAVCU2jfBc3LpbFUKjGZRu4XoDekWEcW88y84Z1F",
  "key20": "3L6RHSjHZ3bk3iw4MvWxXrpdecp887mV14cvEVkhtxTAsNqPxSqMuw3qPaPahxcUruATG56mFs9PhvcLWwR3pSTz",
  "key21": "5jknHyDSRqcspXaZMyFqTjwh4Rm9Ch2ZhEqiS9Kkcmb6SqM4cKk1qMj2N3bUczd1e7RHZnZdYwJKvP5zB8rapy4p",
  "key22": "2ZFVNKXD3YoKgj5yoh7R1uYRZNLRy2H7yZCVMTC9rcBe5osgzvFpbnnYShTU1uQfLtUfCqm6NsGm46hE3hdGswrD",
  "key23": "2WpqZUkEfRwtdg5eL1h3PsBaZKsyQdLZN8kzxm9GCpMbNHpBMNVNM6vsGk812sjdodFMTWWcdqNXXLxQn5LXeMK1",
  "key24": "2RoKp4Ag35c5cUKVMyGBt1E7F7Q3gUdjjnSsNByTEMWsxBuUJtnnrJZMK1RKTxLcexdZaGW6hsmRACuqAao2iaMY",
  "key25": "51qoszZ1B3Du99WhYbKi1SDE8nbDaCA8z8Us3Yjd5iEPQdxG1uv7FDPHSHtFfAc9KWcNLAprbv421hzkhV2DM73x",
  "key26": "2fRbzt16Qs9ecexw1avn173J8pxt4eBtM91NameSmzSdMk4jNiF2Pz5NQENJJydinEALnFrvu4pxjSac4VmHnYtF",
  "key27": "5ixs4nhxkpAQTzESCtVKGAK7CNjQxDLqQpPB2mz72Vid118jcEy1dw9L253u4jWkV9mgcrTNwYH5zajbx2HENFVE"
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
