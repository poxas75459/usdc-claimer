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
    "HM9t8tGKAWrVM8XQ5GnmABk7FXMRmhUogirqDM7Nohoe4CPpTzHtTxFSc7RJgBK4uuQYgUnAZhcutKWo1EEiSC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxhYyDDKNbLY3i2igm95gZBTtpftdLmmHHMH5Ey4uZit1Vd62ZYRU44DCbZJWPQhqYz4EP798NDxkowuuNMH5wQ",
  "key1": "348eHRYUWNZx2qkiZVVBWJKgU1S9smsEFhiBUpivR56ibuHz3GVQNmD1zEZUJrDzWjujDGwMyf9Dku2bvLSYN7eo",
  "key2": "L78PyfnLdndJf3ktFQP5FLR3BeycKiQjbZWTJ64byGqwHVwzLja5V2m6nMkeEoiMjwXd3pCv6n8WGJF8ex5RSef",
  "key3": "5rZYS5XqSQiCka9hbvqQ3RRMWM18zdKGTXodBohKRiJdHoq657cSa9jcDreqs6rUvJoiZYhvPuJ8mTmpQCyPjm3p",
  "key4": "5GTGR31ER5bvhhULPJXz24YfRLVEKbyXLm9uN58YZ8Cz55JCswMbQ2R7vs1Mt5Sww4wfijdDhWuJmvLKA4ZAC5c6",
  "key5": "4VHQ8nQrwZHfndUUHQJGeWpGgtUA19HdZthmnuJ4K8bLNdGabW7p28PKYPiwbKd2FPDdCD8gJN4Bto2e27G6o3oU",
  "key6": "25nEGGxtE4N9FeetFWYMccrxTSZqYsmRyjzecBvQi43PeCFpTUERtqfBwReETN89YHMgoXFyoWi4W483pxcMP6UT",
  "key7": "5E743R9qVA4RgoCpwTXE9ouk9iwWA4swMD2FejnKacaJ4zrD2FbXd8XY3qy1JwF4XVmp6VgjmbyQV5R77KfjSeAo",
  "key8": "ogHbgao2SEDpRg78fwhTxWNAdykFGYcwoNd42kLfZQTjRF2em6ev8rL7aCa2AdYwnYfAoBQ535g4skrQksPXqtS",
  "key9": "4Kj2K572vqSNrEySwbhAUNJX1gqVfsH1yybJWeNFqDX3167hhyec3etGTm23Axucf6Xq1kTuU1kax3CK8NtAUEbe",
  "key10": "3HAPcVpqiGmxsDyqGAi7Uy57gQxPwCjBW1SKi6bSexi7BhvKiaiCyjTUHkHUnCQgKG3sYaUWsw1yGzoWVZxqozXm",
  "key11": "2FBt9rr1kTzrXTWs5zC7BwwbTHCp1qihNwihuKnNY9TgEVFGzWiUBrpjQzT5ASYc1DPEWA9ypaS2o7ZrGgwRqaqB",
  "key12": "3YkrhS2QpSxPpaYBAqC9kAzJYaidkLvQmLJnqdGFuZP1ajJYiFQAHdZ6vULPfumytECtPHhJfXfiJyQXk2yXEase",
  "key13": "5nr7hawQr94gqTcQtD4eJm55549RBfExhLftFbX2QS58bw7stzASRd1QiEec8GLuoEvmmiiFq4LtmKumsoPVPFeS",
  "key14": "621apGQBP9hgHWjaMxiYhywZ4HmXnDw8UoHsThBtHgyEM4eGyQ7yM7mgYdenHEghy6hHFTSsZn5b1ccaufihfQYM",
  "key15": "57Tf5cijZt1VdvVe9FwxqYPFdhJDynWpm7dxzfWACfG4dDN3Miu1cwUE3vo9gdMGJHdX1MoXcqGPbXZ6e9DqSE4p",
  "key16": "4JQBSRkMndjfDpraP7RigVhC26CTAcznSDCSAqtuKpWwVw9rWfQbPPbAji9kjJ97bCQAvXwf7tGJnKQGfDxP1oig",
  "key17": "5XrgA8gup79naJZP4ezQbiTgGDuXQQcMQq9ZxPZLSR5M3aC7UThpKJbYepJMLf4FH2KYTB8V19d6FYagmAw8q6VL",
  "key18": "46wA3GUra1SN4Br9wgaf6yFDboSykyLfpMh24RjZYcwjdfX4vGjTHhV8PrQYH1zediwxXrf9oSGbVkh2PUcpoqeo",
  "key19": "4GvDHhgVMFKN176tLN2JeC9au2peHwrHvHRBCEArEiNwd7Fw7EeWRETrPBa1fZznagGu8nb2Egxufbxheb7VMu6b",
  "key20": "3t5c2uUuMbBmqzYBiKSZ7a9hRCpcrwUKSRDSsBWqECc38NmZM466bDKPh3CMh5YWzjiZzeC2nJ3cbnfc5y6z9zY",
  "key21": "e9LFCZh6P7CsAhM5vH6UGsUCvq1qk6JtTQTgwJ9Bq7ukERuyD49chizW4QNiXBKfoGc9rFyY5JJqNk5UqDHrhvc",
  "key22": "56D6SdfqhFF3Za7qPTR2NcsVEuDBr1XJQGZJPtWRAK3F8oikjmW2vUG8NYt6JkuMYfsSSdhZD7jkiMGyttqqv47c",
  "key23": "4aCSuro2X8H42chprEWn8BoCCReUuT55RVbrk7mL9eZvkf26eibDUjHEnkmQXXzXeyVTB1WwTvVNxbRsou5LSSNj",
  "key24": "5H7GjwdBeET5QGnauS3S4jMF7fgDKPXhnJR2tr8Ycg5DSntQkbMJJL99TaQqsxc1oEcJ9wAgcqerwz2ZnRCLGKnM",
  "key25": "3HKRaj9rJLLEUb4ArzZTFA2Hi5bmDk2e5sSxVgDHYX6rpgFMKjoEYNL3Nx8N4d9VMki6VfWKh4HpcQtVfMvwAaYK",
  "key26": "38JN3wf3NZD5zwJjLAYnoCt8BUDLNL4k9HHDkkjYzNvQHybgyWbKhmwczXi3fbrwybUUiTS1zQnbQmEg94XWpPmy",
  "key27": "4Qrb36gYDhSsijh52BCuxPVipQFT4Emsb13hrLQFYCep5i2DBYSnHDgYDgbkmJVMVaACg5thBke2nywhNA2h9GWw",
  "key28": "3xmFPh1eLGaLyreDtSs4KFNL3NVcufMHVeX1QWzKra1VR4dNDZGLf5fZmwqY9dzXKrka2kFMRMAMxckjd8MWKYtk"
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
