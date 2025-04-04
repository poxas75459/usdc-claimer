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
    "3meJdsU51s3NH1zwtnxj64CaC7JYoT9DceFoQp6cHj8Qcea2kRBE7zTTRyTp5QPx9Fqnb88izPeh6gP48oNrKQzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibZZH3S6uMNZzQvN1oVucx4oTbfbXaN5akGdEetNSSDqBaeHj7cCc1ikxzuVHbRHPLXBCHJUp1psznpEQzW7cXA",
  "key1": "EedXMowCcahhVDbBSWK4VWi975w9wA2TwpmqECHoYxhtporEdMNHsbH5wwYvVJGzXTyKAENouiCAtjAVQHMEpXo",
  "key2": "2McfoS5D7LHbnAVa42jiakDUcCjvt4jDQeMBHJKKTNkz2LdexxRioKGmzBQdiCSViogbcVxBuGDpThW31uQyE8gS",
  "key3": "EQfvXiMAvDXRc9WpFGLEfDTjMKXMoARyMWAdbLSXE3DfDPZhGyMQEP7zCMVRzGU3J37iDYqJdKfbuhTqMf1gfin",
  "key4": "4Z5LCAPpyCBfBTAc4kQVPQGTJporKeGnw8VntVUsYCyxzPuoknny15CbPWLshzBiuZiQR5s7BEE6NaLAWHQnRiM4",
  "key5": "5bDAo2cua8WBEiqy4ryyyUDSTJEWn39g3AhzijJbbcSgxUewkVbMNaqwWyfUymR37caCbgENomdiW4i1tDtkBAZm",
  "key6": "3Lg8iZXb5nbFErGDDrzfjy3qWhxpZH53V3uszWzKhY5AD6rTgguTAXaEzfKPEqsJTNJmcQD8XwaAYUVUKVcqzR5d",
  "key7": "65oa6ru8uynqGFCPxCsUKfApmFua21vmWd6TPB5YUWgSAf2ez7yy1UAdPVwf7Lk3d2Z7N5WxYYVzgyPBCezveVo6",
  "key8": "1oTW1mitssws4pEiBo7yNYBn5hgiCemwbNAXPjTjpVkLE417AQpjjhArBhdJyATWD5kcZZPk4nT9biWEuDwi9nu",
  "key9": "3RFbRgd2AKxvrnbuEiFZrXzsjkmEy2CBXUAt3WmUpxoiLQgYVXEke9Ep7Ew1RfyQqzk4Tx3WufCs4zLiBCdKeri3",
  "key10": "mPH4KsoXMzALLsg5bVhdBvAKMWGRyXkXhNZJKez4KMw6SaUwQjMvRcqKXWz9gv1xhG9LJPYpyayvogh2M9WKdNU",
  "key11": "57Z49pxm5Bw2RyFRTooWm1bp2ZL29LNY48KH2yaZdgGzjs6p3otswHsrc3vocPzz1hvntRHtW1GHDeFjrv8huEpC",
  "key12": "4bJ6bFYJSeFxpq7a4m59PpJspbs3Eud4EB8NdYKuPCk3EhGuKEqb7WKc5deVUJATf6ZzpcEuxpgZV7JeBwDkGpUg",
  "key13": "2mYuikjj8CkLdofELeUixgf6W3ZUocVBmpAcyTsqyY2j7qCqpLfx4zeEmsbdEbjaxvSix8P7Yi4eSNXGMUiESA8b",
  "key14": "2q7rxZTotkKEySYo335dHGBHiCvQUJqThbHcGiSx61MpoWYttjGPT1sJ9jJBcNackBSjDYPSwJLz9p9UrLyEkXTM",
  "key15": "49Qqyii5ittwhACLTV5uWmBPw6cwKNAksxeQPGTcNRKoRekpra4iCUopwGutAPw34Zc5ebzwTzWbKoQSh5sUQJas",
  "key16": "31PccYfuvajggsKmvx1fEdCkTmpPqr77SfmryMUznrTQH8SjurdNUGmtfc2dzY53CL3zLuUkEUfAzE7JZN7ezeiP",
  "key17": "2EhsC65RGeASJq4mE5jKoXXJSQLG6q4pT3Hx84CrrYaGwbLDUFb8WCCPampgeAoV4TKqTDEZQSNttrfrwzT4usk2",
  "key18": "3yEciJAGT5rimZ4CcSYSQ3itq9sqo8ydzpoWk3pd7esLUJLHj9BXUpHu2d1yuG4ojGC8J7AdvnPjCpkRkrXQWuvA",
  "key19": "5NNnYTBcNTXBTHZj2KV636WtyAoGaN5QXndDu72uw7izdBAe3atdSsRCjfy6SNBCW2nf1tvyQVkNeGDE3eiLCaME",
  "key20": "2KxwZMgxsosj6iifjcaPThMf39hEMLhyVmj7t5FnJc8QkYYUecbywyfyYmEyqpzj9yafUsmv6GX82XPQFt6ekG6Y",
  "key21": "4RVxGE4N6zecYvvCeZh89nrf4a6RaSSMj2TPvpuSUzYSBWzstD9TVf7T5X2daXyqZ7g62grJq4oFHYXG5QSWEBdD",
  "key22": "21TDZJjz1bhZiYNEEvNdD5PTF65nY88gohzaaoYMEmNk2SkQ2MEpLHkqQyF9aJnEr7a5cT82W1W4i4UP7k3Er7kR",
  "key23": "2bwi5BVk1yMzxcWiMooJcQ6sWeJyhp7TdgwDNaydY2JDXzRHE1NukbtgCpn1M4nNHxEyc3pCSPyMkryAmL4Vs6aC",
  "key24": "5b4Z3fBs5XP5jV5WPzgMTCHrPjWEFu87Wb7LEEUfjA64Sm3AgLjjJfTDUyggvgZsEBzNWfUuDKwPf4zkRnyPVmBs",
  "key25": "21gi2FvvyS6xwiq5CDWSnzNdYNWJXApGthGx9mRdazCjfS63KcWiJhMdyK9kYQpWZbWcLPjpKXbcPEJ4NQem88DH",
  "key26": "4shq1KbDoSiGQCfkJB8v1SUd7Hj1kJTJEPfcarn5seV1HVma5fP3Si1cWWyjyiSv1KeVd1PoudfvpCbyj8zmXdBn",
  "key27": "3XGEmHuPstNFaNgj2imDeKzTpCdkpMx91czUzzdUDVSVNwkjyF9oTZmNnRziWtdpf2HSzDF74WyWmMtYFE9GFpJ8",
  "key28": "2kucoqahvb6qDxcPJiTWZDSsLcGBiu51wgbb4oB8RYnKJfTXDmYmJUHPBCJrthraCLSD66Q3nHeBtx29RMQSnsDJ",
  "key29": "CXYh2hQF9QNmGFVJpFmRyRuZPspZjtbzkWHFFt5CXbYNhGz7J5AMwszZ5Fy8w3qgu8wPqQFzWUHQ4JFYUPCUBex"
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
