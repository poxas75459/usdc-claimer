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
    "5setgPQGBwJkVquT2HCPyhL9Db1k2KEuCzV8Eo8srwni6BjTp4xcncoyXow7jQ3xztMjJeUpPndmVT9sCZ1g2dzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkRPyUQxLBB2zXv1SgoeJxx353mqqVv5jR7aCZiisaW5cbAGtsfnTJ2spFC19Ke4TcNvqSnjt9RwJ6qUFLZEFh9",
  "key1": "3vWS2UDgnRaF7WhzjstDbhWhbNC2enFv3SyNMfsiRTY9n2gCNB2eug18yfhRJp9mtREhB3EUxAwxseFPTiQs5bkt",
  "key2": "324HwYNr9afYPJ5KSerbpApypR97kPDsXhg4LoMh6cGffVoeYYVk3ThqqYf8DT3Eb51qjX5E78BLtSj4QftEdBxh",
  "key3": "2dTBvfGuhhgr5oUCTFZHQJargcaH3uwAdLaXUrhhkz49Jy7GVJNkQd7VJ9vNJhNDsKwKfXF7iDqVSUTPJ8jHMYKV",
  "key4": "21HVnMx5aBgxAXf8hJQCgbpHc8p4UjpVD7he6qHJEoWGKtrJ8dXD6rYc53RRxS399dtLGV64uFtnzt1ExPpjEtZN",
  "key5": "4myCBQVXeRvqw4YEGRdUCN5w2YpfZ4c5bTi3wt2FqbNnronfwJXPXSGqw5W9LhrpMHYEy7j78qhE2EupyTvEQV6c",
  "key6": "271eCJbwTBdD9zp5fPqmScyXKH41Wwmfsju4m3yqVAkJrSZH2gQWZkKayP3seMZAJKp5zikX9EVVjN6bXukJHWJK",
  "key7": "5BHhztheKHa2nhXrrrXh4Y1GyiWc6dDbQHZJs9pkpC9swMQ12nEuCvt6KdNnqUqZrPcePEV2vfMfWrdTn6rTxC3E",
  "key8": "34uxDNjA4oKWVbTPW45t86hBd9J19uzQTAfQnqUB3aekjZVYSgq3jrfr6jf178fyVX5xopp4E9uTowHu3S3jT7ki",
  "key9": "2js5eeoiTpQ271QyHYkgtkHVwHubhWYVeN53Nh3TSxVgoC5HdUdJiipXd2ffd6sZ2LfXn3wP2ASCW3j5EAYpUMnD",
  "key10": "nbbsCNxpQwP9i5HwseM7UV2husX8x3UrfRshkwxZ4AyJh9xjSAn4aXKzfHVuetdCWbLCex862eJXMcM6XfynzF2",
  "key11": "5KKc1yCvswj8aDyrUZJ9u2Ujwj67KxRERcpSNptndKeAEr5FCEdooCJ4s5neMGxqbxJJBZDcu6AmqhWS7xvEoL6X",
  "key12": "Jd9eZnmRUkKRWax9RQwP6eXec7tESBSmEUpFxqaBPGqsubGaH2rqTmzCRjmCyvanjLWvJXFGvt2jtHTPw9V24vf",
  "key13": "3k1hDWoxKZYk7GQyUrtHiBEhyesNxg6fhih85wQjciZJHF9CxZHkBPgRXqCdA17C3GuzvV79xsRDujSkS9askYeS",
  "key14": "5Wdv6rpMq2A5P7aFeWXdP1psMABRz16C1bjxnTy2aZVz5kcRuhp4EGDhU6UNj3yn44Zpt5HCnBwnX52u9j2XZHpm",
  "key15": "2UzsWtvzTzaapwDhs2Gv6iGAbtJKKzcqxLErzpi3F5YHyUUSBULnRmBrvrbMEiEpGgKFyrbDDCZfETkxPgyJxLRV",
  "key16": "3dhqRpY6rHsFHkitE27YSW4LX9a3HvTFWN8fBkQm9wEnXZyFU8gyQjxVwJmUzux3VBvPHznUAqnSZZDwkrtNF92z",
  "key17": "4py9biL8a3yrq4dVnmXvWQ6WL7gkxA8vVBL1RgFyJBNmBeRa7YuQLFnLy5nR8viWm1aNnBpEtj3HcTG2yiqA5Hpd",
  "key18": "2GBqX9NPjUcNnJEE6Ugp3Q4vTTc96i8bXDwJao8zqHUeXJzx73tT2LkvgAGC58ndb8w8Qw8z7xJapzAuu32g9GHa",
  "key19": "585E6gxRoo6zumsykok4BjoQCw3K6i4PVqzzfED1N1BaVJv52kad2W4d1ASMBvJrmgj2GVBanSoMR3NzGARWYVT2",
  "key20": "4Q1reneMgszKQvf9Mr8NAa5M5MbRrpndxf236UASK5LusrZFeShzRavQkC2BZH1MS3xJy3Ce1xrEdxsFsVgXmfJH",
  "key21": "5FMYU3Zhi5jcG39tsgxs8CnBrfrb9WgmEEiSsggtXH1ZGhdg5sMEVWKkkaZiyGtu9zmXYgvgXUMjq7RqWQo1nVVM",
  "key22": "2VGC3NcUrkXL6C3eR4bw5Ce4WpS9qKWxrybjP5huWLDYdK8amgcVK4Yi1qZLBZXrFnXmjTGA3kSrCmKDeXjFrpFC",
  "key23": "48z8RYhjMskFBK3rKCXkQeyoDW86YDnGsZurKitmoKVq3REH1Xbw5m5f592kmT5GhX2y5XJfMBRY871ndxQyeLBX",
  "key24": "KF2F3KrJ2PxmMGH9ABBn5CuwiQrPByqoAAnWiStQeDGkdgd9jtW79N4WXMmy4wkdz4pi2j4qJFH17Cxnog4LeM1",
  "key25": "2E1cgAdcym7UzNFYAmTot9RLUyWTcqmbDHQVk6t1e7WoY53kKa1j1jMXHJUQfkSorjE1NfFKiDF34DxWxPhrCrvL",
  "key26": "3ULBSJfdQWp4pfqD32EnRJ7xP8GC74g1LNLgDhg4LLQVTsia4fnksFJK9aocdS6JWAL2uC3WB5zHExtwmK7v45dA",
  "key27": "2vsZ78KJ6EAP5Gyn87dz8C3rGAQsEEMkuJmw5hNakqYEXooimdB5Xz2xMYvwYNGQpgDeoL37yKfZnW36PeEEBRmg",
  "key28": "5Fd6XMeCXXinA7jCUQ7qnKQ5pkNWd6tKteX6C5odAXa7Wq1naWEB4Wn76C2iS6EbeWDdtLzPZfVnd2XYNc2wkrMG",
  "key29": "3PG2cYt5zQUh3N9B7THssNm1R6cr8MguL7c5Mi4niswZKSvA4CMghTiFnf7j92d6Eef4pHsLaa6ux8Zu2axqU3iL"
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
