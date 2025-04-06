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
    "SdW7DeBopdTsxP33jJ4WaAt8yMP6yNxcU3jQcdGM9P9s4hFAZ5za7KNuuCkZ35dKRm3dkT5yma3Z3kY1zrKN8yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ez1tdZYtKaNLUkpFEYTkJdZhrucimCNHzDmB8uqctaaoyTNU6FBkU88e92vLwc8bWEXXXWEekshsqqKmZAEus9f",
  "key1": "4Z73SYL46d6zZdqkVkV6wvcWaRwM6vBztoVC9jj3NcPodaYYZvWkCzEPt8yDxEKuB3SCjFJctwHeb5faAQA1GPkH",
  "key2": "4HEnX73yy5x5Yn5tdSr41FUszFZdE3qybwDYkwWJDUMHEB4xcGWUiseQ5DTdyUWjewnQM5pvFV4vq5C5B6r958oz",
  "key3": "2ueg5WR1tyNvcBRXEtNp1kbkkToMD39AXyGHDcUA5HU5BZTYJKmzkaYUfXDkstmr719BtmRKZoELrPi3r9Juix9a",
  "key4": "3pmLbEkoZe1TVB3yqLi3BdWDbX5qg78pfsAPmsP3HFZZsgnYYG8g5vPEwDBPjLzBbEeDz6HyWzvQ6zBw4SZige32",
  "key5": "4ZUZvPosSEthUg2UEDGsDSDvJTpm6DaNRoqsYYnvvPA4uWrRqmJC3CxGi3Q32ZK1vak3LfZfUTuTYtW5iJcgEz5j",
  "key6": "2uocdkBjKYd611hi8f8VA1yPGmu2C1AY2HjfLXZZxpqWg3DaAhSn73fc5Mdn6tVvkucEDp9Cx1spZ4g4kNWBxC9Z",
  "key7": "4Ho6SSFNuRhDv72teSTXG9mdX4XMVQR8mPpqM3vS9QvnEgovQFon8UwsGnBCL9RCj1UjHUzPQvtvX9zkiWSViaEe",
  "key8": "2A8BggDtsM3PTYCvXPNPeyAMszGxWXkAE1Kx9qsx34juoAYWD6UyG4UWJcw5iQvuzc2h25BdSGA66r1b4VEfMhka",
  "key9": "5cPbXE1TPmVxrE8Ndf9s78vGv6e8hcDzDQuxmXx6SsHMb5fadFaJ3N1FBS7d7Fx71CdakCF31NX8TkTQqgc1UKns",
  "key10": "37BP3dUUQ8a5uSLTDtQw2L5ztBDGkH9kTGemwsvgpbXRaqhiQihm1BETP2JVnRPTHxNwdUGYCYqKPquvb65xWUQP",
  "key11": "u3aW47W2fza2cVA6gkQ9xCpxWKKZvLoso8fwFHBigKEP5C6MnRZPq1MQDgcEspNC3eCzS1TEDKborJrjYpLjTtd",
  "key12": "2eD46gK8jj3Fymr4UU3AjQ2YegPTZP5Z4d35ZT8w8j3m4Wbru1CgRNVPQXFRbvABow4tzzJaM6DYMTyVcqUykGvb",
  "key13": "2jQ7RhWn48xXe4NRzog9BV5VhoJFV2Q6yMdHirCMsRjszyYzR3fVCFzg5K3TUhpE1jHovgtd7zphhirp5xh9J9uR",
  "key14": "E5zqNyDMPeyP1QXTKgH3ugpQzd3GsfpzdPM4A4esYmhdVdtNXV9HJxtbnF8EdmZ71FSd8ij64EPFjSdfA5NU8sq",
  "key15": "fV34bmz5PM84RhLcdwjjniapdKPMBRtK17MH86Ysmci9x6f2FRbkq6WnUk3hiVLv4bHXNkdeGMEjz6J7UXdYrN1",
  "key16": "ao1mn4hhQgwZeChpenP9qCdnjWJzkyhJXUnaQQcmrhR6vCF5u1ajKoVhd7BGybVkQNbAsbYzfA1XqAJhYmNhrfY",
  "key17": "2GhiKD6D846gemHseNADx8VmWQRDyEHcenPotHWNGm9hASkQPxct3oPVHR6Q2BU3n9Edz8A33KaawPV5jrfpXvjL",
  "key18": "5LFefJvQLdW8voRX7WmM4B48qRaDvoYFqRdQ8QDduns33SNPynmTU7NhRLbmCKuqceg9uybF1M8gfCyuJ91Nanxb",
  "key19": "9vXMx33wAKC11bSaaQNr9hAqoVqaBffdRW1BaukHXTN3T4gRuhSJABV5UzVysMQnvx4kLLMYkEGgb7r1pBuDZLK",
  "key20": "3ZeiCuSnL3rEnm1Vxj4BLHQXULBtttKiVRSowsDgr4YswBwMZ4Sfv8VyKydRv3VWbMwav8Pfvj8pKRa9R5KJvksp",
  "key21": "38Xw1erjpNZSR1sbXBmKWUb6qa1cqDqRRYy7aheNsnzffykcq1izzamj6Srwz5frvgYefA2cZPEBFXFYwVaxeXta",
  "key22": "4TYWVnfkzHXLWPmkMjzegEi7N9k8aJECrAkBS3KAjAK9VN1nhcsDWE5LDNxS9PVaA1NESfdQrfC9NNCkjz7srRL",
  "key23": "NyafKrdFWgEvqVJYGJedmVLDgxd3jQsZoQfhw7tHfkHut5CHku2hprTAudNH7e1cgGksCsbp4jK4jae6FBjYknj",
  "key24": "5FgT8z82KUdCpRo7Rjy1DVA4D27EQ6vFp5gU2u9QohPfG7fsctwzwaGEx5Q9eWc7mZsFTTU5Ar2LybYz5dNNyQPd",
  "key25": "3KQveptXr5VFfeDtrw8ZRywuM6RacFnW1ZmKUv5hk4K6V8RVAeh89oKm3nWS5s5sutdtCnkdrqppNzjPEoQoHyMM",
  "key26": "2szrocPFHoztK41es5hY4h5qLKg6WpAzeKYSTMdeJFvReeyENJtfJF7Sm3nFBdnwXp9njkNPEBDHcuTwb4hLLZAn",
  "key27": "FdKoVr7hWsZN78a4XjrcNvq5ThDa1QmuPGyQtwRDYagxMsy5XdwBUtBXwRkJZ6SYi8a8vdhohyjWPRh86P3WQDx",
  "key28": "38W2LGqrWSYYG7Kq7pDfT9SqfoXQsS4AT1wGZ4iWWrxWfsXMiZFVYvzHKJ3WDkJU4jCSnCi2mvKkNRBL3WN6SF4p",
  "key29": "54qY4vvcn4Yj9KD9RL1oQE3GpzTZEK6Zw19mL9vEu5bNJaeciQLuK6Y7EzVy4xeFHtqQtRwsZWjnqXLMLmwBGW55",
  "key30": "4zBvbhDkurK5rB524ghJF2U18m2yQv5e9WsZh12kenGgHsvuBxQwuJw4Lj5JvVBzsZgJQn5AbsgVEZNTGMQ2YihX",
  "key31": "NYiqLcgPhpXHfWQLXjWPNy4oqyU9xqDjM8cyiwcHgYw4VzHvimuKATnHE49nfMGiD9ewZwPcpRAD5QSeT1kV9Yu",
  "key32": "coShBCNkspBdfye1aUCdVhvXR2JNfZvhTWnPz1sNCqyKkov6bL7RuTwKTxUZMfHW8nZRZFLwQn9ZktaeF84i7jX",
  "key33": "2mvYUGuJaU55CmfQDbjeZWWeffm2T3U36fQPnZCem7iSouAH8aYVqaR65wB4TQPz9kPdz2Na5zGYdRQvA1UtjQNm",
  "key34": "ev2tARPNUBUA1ES32eWNfr17fj4VkZMqFVhh8EwZ3rDyWtoRcqPMssRS6xd9Kh1qoHXAsCHtzqRHjB7TGEYXMs8",
  "key35": "3fhCfTB85L64cNruF1yE5sYwoSv3MqWS4bbpuFnjm1Jipr2VGTLwUfyZf2uQupbP6qwnSXqMyfYgKaAZBwuZfTrt",
  "key36": "562EqXucn3SqcKKe1PDcGGHkWjBvykcoZpipszZHchz2LNdvh5qnx3xBaJchfVMM43oo48D73pwmccQRyRMCKFBb",
  "key37": "UkjJpqpXyfQHvza37QMH5qgT9r7jUZKQNpGrUgvUrXuxMwnRvshs6rNsJpoW9T4ZhRT46LkChLAJtwac1dyNpy2",
  "key38": "rFPWZmhvpTv4JR3xVuVGQu2cCAAKT57cij78zXiYzjEUR5ASmr7TYoQAbaab7pdsQNxDVnmNbmqyGzPgJ5bGeEi",
  "key39": "56p3cJvEqp75FfvgHWxcb2GEJVoV22u5tMjQgzZKvNwpUjx6LFvRGR8V13PquMPtBHRXFrk9RsF1EXAMUvWr4Vpf",
  "key40": "22L9DxDKbKtiYm7gEPGR9Bq66Qpp4FXSxNrfu8AJANH6ezirSCD6bCo54RgFA9PB4jc8hrMznTcJpnNVwCNNsgsz",
  "key41": "mWaKSjRdggSLMNxZfwcYLp7pySTGtXugRjyDXSTZd93p2Qa5QitgQyswLZZ7wSXjNrRAksPd2U8bqqTrL1YoPBs"
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
