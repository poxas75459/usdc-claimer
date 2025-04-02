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
    "W7a9HD4JsLWngutAU9NoKYi2SB567Vomdc3tb89ZCHdqifwi62eaEobP2Qw1tudHk6jFxBPjKHRcMCn4HM4W5TH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pXqWDakroXdUMhxKJ68ombhSSEzmK4StkdeZdmxnzHGPrKWqLtgqzWyuxnixMXt2xeVgU2AqEKMDJJbLamcSFZ1",
  "key1": "5W5nBAsR8w1cpp7FKnB6uS5EXwKKzTCH6jZ2vknnmneo96Ec8hRQGUuAP7kfzizoX4LTE4uu5yaou8nPUW7GGGyn",
  "key2": "2Vo1QrrpGC6eT7gN2hL6f7DeagJBuu2cfm8M3xY6tK6w1P68oD3G4H777WcwwFdGnB2FVxedzzLwF35SRdKdkXgo",
  "key3": "aWYdJwFGtr1dzmZPYQKf5p83n4HScQki5JRdti2aoqyvWaadDoB36KzNJLW2MiTLbFWqD5yb3KhKS2GXVGernCa",
  "key4": "NZcYHQjSpr9eGZJhQZqjhU36eCs9E2jGuV1X6hqAaSWGHdKgi6pq3CjSVQZteBUof6ftUAKL8YHoGkFgLRJ1wL5",
  "key5": "2oQH1f21c26Em7aFEqk5XHXACCAw9cty7EJfJYvVhTPsPEVDrAom8AVioSSvHjy1EaAteML5VpizZNhR2EQJP7Cy",
  "key6": "2p4WWNq6nWo2Q7UMG251rtskzeQPzrfZwc2KpNs1QfE4mBEmmopHBsV1PTeGTZNG7nEoUy2xvGnHExowunj2tPtp",
  "key7": "4NCamZQz49MTrocy2R9QEs1qUY7SffcAG4Ys5Juysp7c9aUxe3JeT1rezqqwLr2LUwcFL3tGmUNSuqdoKCnpMhxV",
  "key8": "3gHdG6cLNSFvNPnkfueVS2zFJCbT3HFvHR32dy7WKgtVLjHA6eRutCAU4npJSGZBBSecZe21jjuV8HTmeFgh2x9m",
  "key9": "2XGDEUxYpBPi29k9qCuVmFMdZqjqmJDwinvkuiaF3NJ91QXp5XCNQTic2JAicepbSNgPbuA6NgheE5iXSpc3BCTU",
  "key10": "4kxn9gxFn8zcDh8fiT8YBLUovEfmstS3pVzTBqXn3i9X2h6PURseE7cb8Z6jLxkWe1MBKVoPsqouctnncGJVTK3i",
  "key11": "4KwuuLiq8H474MLbVvqwxDADM7MWSgRqp9f4ajoQM8fiSkgHQrq1hKxF965ZsmyV977nnpUrZfbUDQadRiiVGR9s",
  "key12": "62p8UvcsEXpKLF3LXdRKU1i6Cczj8u7GwV6AXQmEou2NnpP3ePFRVhv8c8i9geF9A5Q4LQcakuA48Po24wuruW1v",
  "key13": "55KwFf5FVxk2Kg1nMPbGq91WuWJh1YKuWxKA36Nq9PLSbTCaUw2MywmPKvpDtGAEryCqT7oFNNqjaM7PJYsi2ED",
  "key14": "5r5WmBvnWiftxn7Av8GNG5dmtEgSABy4MghmjFrGhmz9qZ7wTFp53RSmwsM2RkMCwG9DxCDVwGbvtyEXeAm8MQfy",
  "key15": "R5w4Pn1gYTvQhnknY8udbmsdoR5D6NmxfQ4FDboWX2guZKSajzEfe5hRqEeVGzWhrC11Qynf5cW6qT9D4CuCWVP",
  "key16": "2bhroP3eMVicZ8sqD5AScnDrfU4GX58zsVQEkzYoa2wnkHHRZ4tvCWfK2qd2AwYTVqRKns8s6ULntbHPmA9yMVqS",
  "key17": "4DbpbY8RaJYWXxLtE5QPXXkGQHW8he7VLb2A9QwFShcDvabh9PmSVzyk8fLVbFUMTZzY7EPuwbQegMghSF3xf2wJ",
  "key18": "UY4TdPfGpUUBRXrHs4tTtkJuffAV4CQsnXwhzKudVDDTQ2KfMyWzGZEkYWgA5f89ysHHkSqAZbDTVRxuMBcpnoL",
  "key19": "ym5zGFkAxjVCzskTb6CcXbxAjt3nLj7xJ99f4VHzB2TysqZag4e2994BBV56eMMBTKqCCicaLR1oCsfS74bNFCp",
  "key20": "3tVtNNiu6JcA3ShDDiRWVPcnTsonN693weF8tCnfNQFxSd768tWhRVcUA4mEVv59eFRUBZGJejLRiaeZXDPdd3HB",
  "key21": "5GXkx7sFA81wba92iT6Ke1y15h67ZG1PggM4sAzUAJFxYtZGp7HpQEykE3ujqQCskcBvRu8W7AfMXykHsvDgy4i9",
  "key22": "352HLCjFTjMFdFmcMERF29xiNjnrzQvQiVZuTb9vS4gTgAzd3TYLTMVDaZH4CFjg2NTY8saAxEyb4mjasQHY32Cy",
  "key23": "1tfqqdwsNxpGme2HY7CBUkJJAXVYEbt6ijXFFWs34GDAKVLh8b6kAK4wVq5tKfUoDN6HH8WvnLc5nGn3FbCt7vN",
  "key24": "4t1jsGDvKkGwT49qw3ELpxFsTVcXKCsjdTF31g1xbqm1TMLwPTpN1k2PbQdApW1vRs5XsL8CzP9BAdgNvfi6C8en",
  "key25": "53ocA1t9zYR9MiysyaLCF8bXjCa43AXcTgcE7baQn7xc5FnqtUMFoieisj3RXm73DYLUKUjPKNF8nJxsSHBrrKMS",
  "key26": "4B5dxFvPmwTgq2xKdCDs1t1pRmC1e74Hy8KFb78jCYRBS8fHmoxqMjATren9K8dtxyCfSw8ym6sZJUhbEqWtjx5W",
  "key27": "VC13avkuG2DEYPX5oZUHaGGCAjwdnHfnHuCWJNK7oAMtSHMgd7UiYTffLsVGBej2RjrtVQ9AUd97Tos3GpdJtS6",
  "key28": "ASuaY9f4q1fsjKwEEEK76CKBSpz3KTm2w1hBeACCXcaey9MXmp5KkyhFUuhVraDvrPwGq3xEfV4HgQ26WPXG29Y",
  "key29": "3h2W4VDRmWsRPc1nez3y5YTsBvtt9WhQnx24PyF2rW5fCwsZMJ24dE3tf3FGeJn9MrGz49bc7pKfomx2AaAUJA5E"
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
