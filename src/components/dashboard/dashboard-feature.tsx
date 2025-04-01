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
    "5oHZd49BW5314CJ2cb9WTFDikHQroq75gRqaKgyhtGWEo394Y1omkAGr75SGgp5RFZ48xU6pd5srJGthiEoCfa3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDQceiDC2598XFfDjDLieZm1h9jBD6YL8jAzJyn7vRb1QTUdhGyBtSa2Xjum3HoeVZKmD82faNHFSro1WBmmB6J",
  "key1": "5hBHKQpfSgVYHXdG8AtXUDJxZMo2BwQApsnhYzXEJBBuSEEV5RR5npcHzFWxmr16FCErCeap3myrRzm2x7Z38tRv",
  "key2": "3BgSvhR9uKyEWFeY53jq3YbJwdkXBX6A6dPYxWpMLC4HHZeJuBnTbLigxreYTZEgkbn2YeJxkXhsqni3wy8MaLNN",
  "key3": "34L8C7MdBFBw2uo86Wdxj8vPFHKck2Z985RQNF8HX7HxvnApHW5KEFYWRpxYNyLdvAJdbR766bnG9FkSAYd8y2HC",
  "key4": "4Ed13rJzTvEkJDdBYwteWcx5JEDEwytJ5zZa1mbHhXkfRB4SKeb6mRnqNfUWs2Wc7RF5XsjyoGwKmp3TQJEeJJse",
  "key5": "36SizGDhrcnnyDqDpTYztzJFER5QtQLKr86EfreBYgDEKnW7nbpiGTzTFBfFGcDzBoUTwRhNPkJRBZiw4Evsk42F",
  "key6": "4KqZJ6sCTzq46jhbhBCNqXiWxcPHXDXd4D8s9pTPQmDk1TnziGF5dfGzY1txV5NDo7QW7GrKc3x81dAWntjq5o6v",
  "key7": "2qPXwiiD3qMSY4xbN8hzLvpQ9TEN36UDvwMWaCmbcGhtegShecRyXBFocX566UE5UdfLAWh3tno9K91S72qZwLEy",
  "key8": "wRPrbNEjh68w8LFPx15AhELW1bqetXqie16t8zzdnMHzo6TLKx5Uh9kJnCxiqV12CrVh58FdY9uKqAyHvmyevJy",
  "key9": "4gRKpVUDofCgfKr9Pr7QroSkwSzKgYv5GkBmzptHq5b5Pa9fMZyYzHNtdocRdDcScF2PAbXTLU7nTvYe5aW4Nw5J",
  "key10": "56qmLzshY2C9Svgk4zrXahEB7T5DgjgbcfHpraJZdD45KoKWkqcFt82eRfTvpHiEdpLyLczxNuDsNZyXnAJmEM9v",
  "key11": "3QCy8sZDhgJGymsVxy2d5DuDsBUE5HSUZSgwP8w5XZYp2SW69FLxY6HLukNkrUsDWzXT6QkyTZDmiGBpjbgqLsgJ",
  "key12": "2FRnbKjgZNcgEYNUW9baeXdCtzqWVspjXxvdzxGLmQoaAx254xNKaxdZS1Q8FNLH3c5RD66Dt41iMymufqVcNiJo",
  "key13": "Y9EDt9wz9HLnhd5VcBfYQjYtYcinF21fvTfB5HN5rGUXj8U1C6c1L9S2JeNKG22nfEqGj7N35svajmHmatoQZoZ",
  "key14": "54RDbXyjSUb6kMCSMjxyajcWXVhphTn3FyWMtfDbASx9CjyyfwcpeEnXti5wok1YpgXnDv5UXByu9UMZVmhNwoLJ",
  "key15": "5CacFS5qijtaC8vRjNcpS4s2wD9S4SmPPYskCsBASdjKuWtMvBXGN7FKn2BLqb6FYySMcGa8jyQVpBYTRC145YU3",
  "key16": "4LbrgiUVRXAX4c8xWQUshqzREY7nTgcekjWN93Gvy5x9SCh4h1b98zPPgedaYfjJCczSefPzmxdQo58KtivUT9h8",
  "key17": "4WF1KjAP2pesQRBSU3mbq815NWTDh9pRRKxamnkFRkhNTTKxKhV3eX2x68YPMXyPxoHSpZhiWYt45MtYwZFpRExg",
  "key18": "e3hhexJXFjxPWGFmNG7Cp7mi2gacXZ3zPq6hQ91etNVgf1EbFsTDs8BRVRACVL62AeCk7Coi6PywCBvg4pDWH1v",
  "key19": "3CVKUrgh9st49R8S4ByqC1W3g9VMc2XMdDm6SR4MgnqMWTtXsyECAyMANPuY3JAGYKDRxr3P2EBwUyAtDZJYUNJu",
  "key20": "2BKz8fLHndm9gu1tyzc3djeHUcqmHKJxTAXBdNF9Me8wKrGYitwCBi1q8KDwRpmSjt2ZnCk1TGmMcMSmXLhyENQo",
  "key21": "dFZz6zthNqf4sry6Udw5EWFDyFT8sKZDP32X6RwWQJmU2i6zKjcFPudLzteceyTswUQJawUA3XwYqqHa1bV3Ne8",
  "key22": "3yvvNB33hzCHRir7S1yEhKxUb8mbhGFEGpzYMEvh3HeMTT4RnJgyoQ4X5dHetALtQmtg9GSKz9QrviQ6zrRm6sTB",
  "key23": "ZqNpYMJxFyb8X75MKYS83Jdm5bNzQPxBfGcZY6GNcBe9D1pX1s5ZLCj3DJUYAEDTsP3MYDCGdsUgf4wDDuLvszA",
  "key24": "L9TkufdWmHjpHVsuwcKd1iTAw68dbLb5aEX2LqULYVPiNTfMGy5SXPjQzsWnai6jv5eMjjZ23Q3LNtxPxVG1KPj",
  "key25": "kaPfAmdgjbGsGCrnXqT3QLJxwbHZLpmLqKhuwtnn9F8CKMH16pF2dqvQBRBrPAVbjfuNtmBC1J7XwXZVFGxrGgJ",
  "key26": "654pzUVuzRJQx2zqw9bjbqjMgnxw6JireK7gAMnC2cu2jLCiq3hh3wxxs4qi4857aTaVVTjqbWCA5sxH6rJhy5Hh",
  "key27": "5e4x39HcXK3A6kFWk3WEoV9dCMWirErgiNLffGQrfinBraBw3MkEN9du1TpRW4WUVLqZC4Np3fgz37FDKpV6odbj",
  "key28": "52V27JYCe8gesHbZVUbW2A9HZbsPiaSbkESxr5GXWa4pB6LQA7G1G5gnBVKjPA2YpjNg5aD2V1YXdjLznswShcsU"
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
