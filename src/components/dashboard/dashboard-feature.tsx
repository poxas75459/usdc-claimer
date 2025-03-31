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
    "63JMhVzdTsh7bFoL89bUypktSpLFHNCtygcuZg91L2QWt6Y7hjtoB4P17F6uW67Nhoqx1nN5Dj1shUx3G6B5W6y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373dxHKSfhxiU7m8d8Ao4SBQoWKr6KG1U6m87dwU8g68XYj1qck7C34VGu8dCH7xs7M56V6NCEPMB5JefHkuQubf",
  "key1": "38JF9CVWoSkhefkzXkvXvdPgrvnHDA6G5xgxM8Mgje1Npz5XotHSE4spgSdWFJBJhr3RZrWLiefMtgLFck3hTtB4",
  "key2": "5ESdnsdv1GcNjbPdTv8yF3JGJxAHts6zNWoCTnYEYHmxWx7UkLt1NwS4fLdtWFcttmJUHvt3QDLg6wcbap4kuJet",
  "key3": "32vhedNUD19zJgT8Lqs9YZh1cuvYvBjxbDyAVFXeVovaNmBQ6oA66cfBV9w3kbhJmCihgJooLxPuSv1pQW9s4zhL",
  "key4": "2bVderySsW4fcojjKWzZEfSDBZLSjqqufXvZ4g5ujd568DjECQ5kAaXFX1BQEu53n8mQ6t4NGH2ubJsUtJYPHyEU",
  "key5": "4rnZaZfADzJ1DuEhRYv17jHH73piE1zGEuzrE6xuUpn4jzkmnzGSdnc6d9Jd5prXWG2d3UCm1MhcsSdxAXDTV5XH",
  "key6": "4gDR4gdjyDiviNve1PXcVpaJCr52eQkBwHxE1MYLyyXd9WxHPeCLWBeQcVhaesoLtJZvJC1aixw2FXcW1hdtZs5v",
  "key7": "4JVPJbaDFpxDAyXJBQc44mtqe7nbMUizNeKKsoSyzKzsve2UD5ZkPNSoaLhsTpzpwRwUucEZzRiq9RnHnUzFFzit",
  "key8": "3fXEgrftQbTSXyksekDquQxtcLdrgnhsTRFpDLfdDjbAAdGh8coe8zgFAm2h9vofeBPzsXjrYRhP4udBcjK887N8",
  "key9": "3yB81V8NebvuXebWMHwQs4o2n3iv8GrkGhYSbDiGPKAJaUbxTYJKhjxKGMgpmhonGZX8sTy4esJs8KU2QrZZ9kwz",
  "key10": "2XkoLb2mjifdeFNTT88JMnz5mpS1bR2hvNjfUT9VYs9TipS8STCVTdPc7cqGoHB2xF7V1HnDSMytiy9PmCC3L1jh",
  "key11": "5u6w6gd5UyTL6cHMrsBZNiAVx7qXKHQ2kn9kAe37Sgw9NaPnqUj8s91xSEyt7nPiuEk9bYHHcs84B14rnTY2yRdG",
  "key12": "2MERtKjVxYM54QK3buqMLRFwWh5buRAwZk7Zgnw5sJKg2XDhUUzndrw8oGXi6vRMZG6ANm8arAjmR9GVwk8Ddswh",
  "key13": "XDUziV6AwH1vUVEdmjGS65tD8F5rDAEunFBs98k5qpqfR3DcFCX68QRSCxVYmiqC9Cs52nzzhcwSwBdiVwdyYVB",
  "key14": "66YgWsRduq1RfnrxYQrbE6deRhgKL8eE7hub4D3o6JitqmpqBfPX9K5sPerUKtUPQkKFzo6qbbnwTaT8ZuqL1E5z",
  "key15": "2pKcyRHvjHzQRJnzxyTGPNvR1FYLTAtsuk2avjqhgMA1HDkhGqEvJmohJTBJ983H9Dc3dpT6SbFGqYMxEtCoZ5YT",
  "key16": "3bUEVbvBKPBQRg9wAn5ZVddNXvS4DRFLZzYsANLGikeTePWbCD18JMJh35B8dKu5E532unY3SA763dc5airnLpjv",
  "key17": "2zBxordmJGer17UFMRFg2imei3QAWmCPLdF2A9vpKxFbAzP7i2QMkbjWVXbS1TTgEk5wext25rKYAPcpkKRQo1zG",
  "key18": "25u8APn4geyDgR9pi91zSh85qbqBrxbzhupz1D7A3UCrVYjuD6dVZHqNgzs4QRQKbzsH6Q7PwmjA7vLmrLXyVbTC",
  "key19": "3phjH9QvW2pxqXqAoaNZrU1SWdQH8jN2SMwioB5C9M9u7W4Z7Gwjj9X7Egd4SJbaBUFUWYR6LVyqRvWTkYc4pSu2",
  "key20": "3UpLcpjZHGbQN6adveFQ5pAqUk7b1f7Qy6Jc55ziqKQcPZniw2rdKDW7g7SboQdvmM2m5d9UXBvVGu1wCvY2yd1o",
  "key21": "31m16kUXa61xExR9DwviYSkD12j3cqeWTGunQnMECzRdvPB1Zz9me35HznD6FK1dWQTvwMDVnJTbpFqaFaeq5GZJ",
  "key22": "5oSXDJAMxt5jhUbdD95yYFGu1hP6F3niabDY4AVcUFgvJ7MeMpxrbTb973SWM46TjdS14TZF92rVq4RNArGD7vEE",
  "key23": "58BV8QdTJf1DeGJgL89KTsyPCepzuS2cFQpY6miqwpsVf8w5hwXtwP3zjZkAi4JcaUHwjC93GbMePdGKFCusdEws",
  "key24": "2dGVRDevkWgxkyBeyNR5mv5FuxauMJx7TLZrhwuKLuAiehH8fvUdu4hwwxvth59VtUW77yuaqBiFsgGTYMBSYvcT",
  "key25": "5Z4pA8ZH5UHrqpNBKzYihLy2uGnpQHp3fbnK3bqSmGobPs2SoyywdYu321NPy8uhYsm4S333YQQ4xT5kuJeV9dX7",
  "key26": "hF1xVYcstQDzX3bvqYQN1C8w47QvQp4hh9M9W6xyHg7PbDBHjiJVmiFhMBssbSTBr4FdfARKEY4ybwB9zxn6Wre"
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
