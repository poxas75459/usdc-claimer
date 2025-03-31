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
    "4YpY6AnMtBNRquaPGMr5oRyLY9gfvyxw9KgAwETCx4APJh5ho7GyKyDNJJVTyYdyqaGeNorDYwhxD9Jx465FezMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRzbKPr486LBQdwWBfVT7fNq9SbhqrZuECT6Zm4RPKcVZ9W7HfdaXS7EVqVjK42yY54p6zXWaEBWcJn9szetSXt",
  "key1": "4ZUGDM156oFUYLZdQGkkwbb9Zk5N4eJe7k2TCmNBYfHd7yAystsbRhnW1er1jRTPuNxYWSrShxzyPG3mLDbcvv2t",
  "key2": "df3kJMvHXcgaJkbLHDTNDfdj23VfksBjAkMuLGgzzcSoaA293otXQW54edu8hfS3BAcnwgatEBNanqUknhzNEDP",
  "key3": "29d2mPz2ksxrP3MjpNCNNgiokRb4AdQ8wG9nSxYqq5udDbWWjfFzPPMqAVVUNDqbTesagBGUforL4ewZvi2Kgkh1",
  "key4": "5tZhXPeEfNzQRf9a5YdTP9Nw5cEr4YQ2AzhbUpQZthQzA1aBNCkWt96s77qtj2KkytGM27GZquTQd3NTMoP1Uzmr",
  "key5": "47qvRADpFigTinNV66RFVx9FxeKjBR2t9oixJFXMG8WkPLBANSy3cFaUDikmZf2NpvNvYSLa5hqZD9LTXUK8Bn4e",
  "key6": "QzWWQ4jovYqUpatQ4e4MPKewowShq1NRskU9niWj7y8gr5a3Fv4AXsa8ge1cqfV3ZM1rBgWMi51RBDggQkVaAqd",
  "key7": "4N7hNwfCrCkPKBf9tbTCGDaE6HHDkz2ipPABANc5G8vjiqVzTBMc6oGMSbYUuyioheA58QX8AezE5sZDqC4sBZ8q",
  "key8": "4rxiQfg6q7ZqQtp6czGTxtZEZg5CgnEtxpdhAvj94sdXEeSCPoekZvErE1seowNHZ6jVhzznTBUqraZ9iGCzunBK",
  "key9": "UFiKsBedWuV1DvHkoNP5DGwefwfb2jKGrFoyTyRfYCg2NYu76bd3MSje4jLidw4gXjeZpHkLXEkRNah4P8CaTn8",
  "key10": "2saECvc9hhwWAwJkSh6kx1L3mZemq6tfp8YDJwnViCuCstJSjKXHcwAVfrZPskJhq4UyFUn5fj4bLDeurnjtmLtj",
  "key11": "2vmgkG9UwYZAYiRnzh1v1rPB6Kp7fAoY8fnMQHxsPQgtpxj1uXkx5D5vF3rWSBcNwpQLaHcFA71obbufbDqtW7iG",
  "key12": "3LfDYg75syT6qQZJAZzwoo6tkUU35kCLj7fYCxBSrcw48yLNtdjVqvDnnEVU3rWceppayrW2fPETDXxHdNf42rXW",
  "key13": "4siD6WKYChJ7avZ1kp9j5F47VGeVxm5HHd1Z92a6NWUC8ZBXu5hXTeQriE7BxnsLziDutN9Wd9WiYxB8VYeye9Ec",
  "key14": "2ifPyZiyQ2yx6ju5WoN8BXh8xa4FjciQjsSDREEkjLPdwaUkYrctAcW9G1C9NgV97RiE8dDwAPUXeEiusoVcKAam",
  "key15": "vx8VLCZZK4n2zkTzLtNixV8uxo5XZmxmpwH6ueLXK5NDmX5M8K9Zj9rTBEaG1WhxjFJZnnrKHqcjw6RnWaw7aac",
  "key16": "3CJFw2JLX7YCB7iy3PvQqkzLpMU5mTFEdBppBBQ9F5jzzq6LQGSFrcmNzmgexpmgxwKkMa2LqWrkfdc9uQzkqnwt",
  "key17": "4ED5w9xs7Txyx6hhd1p1WBCQ85mcpembWSe6i9FXzK1jNuFcxqnsyMjDkUwTC1cg7RDG8zSFgsHz5LpsJE1hHzLu",
  "key18": "3gzEvCzWekAQ2HZZBJLPyrouFwRa7iV6KVTdLHnbJc2MqyN5C15ER7u8tiSjqDF9U4MtstHSPjbFBKzeTmQvLodo",
  "key19": "3hSkf4UJBgSzyQXjfi4PqEBdnKWbekULWcCheWGZquVw9krJxkbJwv8zjRA1Njjkci1B9TCWqDjGkBYTxsZLtKKx",
  "key20": "5NNBgAiaQCtu15dAgvPkmaXkgccqPe4MA8HjSr69T8epQ3wxrJuQKUffXzajPJ4R8djKn4vCBqVZV7f7N3e8kCjj",
  "key21": "4fXRu1Z1wR76YNfwQ3LYgA5HUHgQZrDcYjNcQmosKZv8jh2Pho1KVR83BRH5ucUhzRTueLXZuBTmdBCRTkNKGCss",
  "key22": "65W1W5kW7bMPGEBEcgGMFZbeyFv1HaaN5eQy8sh6oV7ceYSaFiHsccU1upRViQpmhbx9Ts491ZmPAJcibH8QehPq",
  "key23": "2Hi6jw76eMkm1Cgsr4cm4nVkGZCCMtcJyHmeXzyvmEaqo6uBAUBYtHdyVDeKDBwTjzMaL6nBZztXP1B648ftRmgA",
  "key24": "3RM1MQ8xescVbSzkhdjE9qH9m92yCxD3ptxUaND83BBUQT5PqX1sEWk7Bq875YA2NzmU8ieqzFLHBiPsPehYL4ig",
  "key25": "4sodfYqaP2y6zQbW2F2BbwD6pYLvoP65ihEkucuDXx2rBQ2Zmzj1KgfDzyRUYVp5CpETaCp92aew5SV5dPzk2HUu"
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
