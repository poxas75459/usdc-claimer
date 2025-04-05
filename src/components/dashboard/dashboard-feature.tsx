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
    "3h1UcRcdz66YWKbV2k3ryQjKtdZWaVDgrub3jEZUR4ESLze9B1WmGedTZH3gSDxaRDodc5Ke7UYGRXeMsFP66EGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCRc5J7dkxP2DMVJduu6UgxYraeMzeDhmufGgioDfRcUFCvV4zMTsB7XfVicsw4Ns3oqbSoxzvRLSxRa1r9LG6H",
  "key1": "RDmBgUUDRzPVEy2WoWFthsaSMxWaoho1K1b9FQ4kCSrdgisHLpvW5tQWBcgSpkm5X9jpMdhjtMhXee6NeTzGGUs",
  "key2": "yx3mpS39NCZoZiiKy3CxXfMmHhLZwuRmazN75ooq1PCjZmMDEAMcRkRGZYZe6ycCkf2aMw4dFgBWvmk4rhUp2sa",
  "key3": "3Uvi6K2RyUncJvv6eHHWu37vCuJ2kEYyRraJDsGt2aUtmZGeauPVh4saWP1qvd5CLQzPfKufbNYhdaDZQdYcDHad",
  "key4": "2V2XwDnh9hUU5DubhMUrLPNDad3r9we3eYoXPkFYcW2NMxbyBwi1zXiMKuQmXLAN6NesdAWH67p9fKJgvMim3vv3",
  "key5": "4wLNtE1sR7fpGafqSSDgr4UyzWKVg8rFbwCG5XH9SsSHQZYxEzXgbQyESXzvCKpzoLB5LPh1j3qxiP54vMoFF4so",
  "key6": "21PNhvYGd3Bj8CUxr2PBC3bUVjZCPCMxYQo3TMBDPU6J5yRP3eJTYx7JCGJUJFWrM75FEJ379grGskPmpgrTtfoM",
  "key7": "28ytvLUYFYmU6nEtrqQG87VL3XEnYicWeZaFsG7dygWGUby5bBQF5HVpdzvg2RcSXFVogCGJsheSHoysmYgkK1Ck",
  "key8": "4aqB4bEBcDDiRcBcssn8eMRb2BZ4y114F8omWgwzRCGtQGgAw6RH1wAXAC3SWU7C4QCFpvByr3khwfrE8fx2mmWt",
  "key9": "5u3zmAF7JYNPZYiNRbDcaHut6muF4B7K4fECmxV4icKJ2LW5eo3U6W9sPyrqRsPdMtj9SMUGSwuq2YVArZW8rzLT",
  "key10": "5w2ee9Ei2dgaEYNB6YXcJp7Mqqq1WpecfZMUGRfFJjuyUbL5duBr4XuBMBzTkMQXo83eJMrs4YXGBqQB5You1gHz",
  "key11": "2MWFGY2iGXvdKuqUZsU7gLBSRNKDTmGxYRvwnzjWMgkMiK36KSWsT7gmKJ7GJg8PqzRWZ2VMBaWUKrdoZrncRGMA",
  "key12": "122gyno1QW3YfXKpAZhrMrwCgDsuCjBtxHtwphFWbgbtADjJkRhh1LWbDaSrK93SUe8TmccV3mWwHnx7Mrasbhbg",
  "key13": "2Zkrjoq15L8TdgTv7RiAykPuYwXE34Gtv9ziW8eAQ9JjnF28FRuKYZQS9qDRYpr9yzyiiBKfusHVmbzxv9uEyYCR",
  "key14": "2V6Fzs5Hv2cUJoJNqEL7hjbNX3Fvi7MbUWWCj9GmGyDPTSFVCKEHZBFunsH7xGt9bRfuhdTiQRJda7W5vzxtDKyb",
  "key15": "2vKhQbSNTt7xkWWu6y6WsibpwaTVXxDohPRJeUoKi3HAqemXzf3rz31WXhw2tU94dQk2VB8oFGuHkJigr2Pp4MWC",
  "key16": "3rbjoJNThTjAAqaXyvDXQ7MRQPc9LqkQpn9n4PA4K3gbonBo9YkyWWPoQhtigFDbfhEe3XQPRvvQsmGqU1qhzeSc",
  "key17": "3jKDTSvXPqaNbtDPbozuShntShrNKTgHyvpr5oncoWt9VUgsPApamk2ULWMUp3cF1bYemP9kZKjFeNbhTowz7i1P",
  "key18": "3QZhYD5ZctPkKGYGYdb67JcehGE9sFia6DxavnNijbAGS9eK9T8EvCrrmPvhkzmVgBRwNNr8MHZk8AYSsCgZXPG1",
  "key19": "2ewbR2SsEzYnxbYfKzd2dFV4M1LC39nHFJz5aXzbZMgqgdgFouANwgd8GNDwcV7kf4kudgqcpv62rMXb5eUdNQNf",
  "key20": "4LQMf2iwaY5Qsnv2wdYQbwY9oYoaTCzxwv1HVXFX7b3NtVnZCZuv8B5enrYSm2NNxpheuCeYgRhMNnCisDSvaZ6W",
  "key21": "49a1Tw66eUPZ2Zci7WCaappGcH663UnRJhAiF6mrFk35sW5rzMZZvVvcaxLnU6agnbT1DMSmjP9PqTVK5rmSMzpw",
  "key22": "42jVA1YjTD7sajRwK4rnwxHiMX5dkuyhgqKMvv83xiMbBiquke63q8sHmgj9m1z5ecofBh7pKvjzbE4WcdEGLxtv",
  "key23": "49n2Q9kh2pwm3vZv5EsrikwahJ6FrVJHsGJj85qWknPYry44opZa5wvrnLXSDEjgiPgYPUQmPNqmHKfET53f4Esq",
  "key24": "hBzbMnxVWBQYHdrXbiAktD6q1sJbm9ag7SpnsgJviQcWXqNUx1RsN6drqEujG3vpCyamT6JqGi7d8HYr9N3Uwdy",
  "key25": "4dM6GA3YF5RVfRh2Es5USjuwE2ZR3LssGQjZPRipj2N8Mt6yr7AxrMTBS12GpEQVzdJYDLgiaLzL6UuVwVaMusTg",
  "key26": "4iwJgW4C9BXxUwLsE8BYaPiWjCp1s33fTQecixbfpqmui7MnFiQ3ps9WH4pUGq1BLyBfHJ6S1aoasA4VVubBPxwS",
  "key27": "2yXrcKr5drrnEogC3nb5v9urjqtC2sWoKUihYUjpBcGz1Zq9zsRkwpEXeLeVPR52CCabbP5vMKeqeeNUi1RLcCPp",
  "key28": "2UDrPvj1o9L26b3Z44uZx8QnUcpQifaKrtKpcfK5XeHWfkhcGtX2Fnkav76T3PBzWzrb9XVXPrdUhZv3kRZN94id",
  "key29": "4zvsnDyAEVNjM4kjxQQ41rd4TWUNrt6mz8SgSwgM89Ktn14JQrKjcWgXDboaGS5seEHcDcZt4qkUERvCV27sQhqD",
  "key30": "515Pg7HYfeVshbcLi6hZpmt7uq3oUSnGfbL59pPmMG9mSBru73wjh1VqKv8CPKGzeELx2LFuDEK1HtK9wP49b61v"
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
