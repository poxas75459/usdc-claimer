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
    "5ZjyCCh9GZRTQ6fnzb6WJ7wobqHchZ9ZNLLj8YsvqXsyp39HajXsjdSatRHRBDQDWtPThN8C6QhFAYMeLS7iNjnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwFA4ZKwnGTkyH1GPcJKrV7YSN3r3huLMii3iLiFRMFXvKScaQT39yhsCNwNsk2rjK8WWfAFycPp5wwh5FFdH7b",
  "key1": "qAiVq4zEDh21ou2jvSJj75ovmEkCAi9qcZxqiYuU8xGcJENrK596sLautEvs4YM4AH6JJJs6S93JyjwWTUHY3i8",
  "key2": "2kARtHDGhV9Vz3EuAGi5TzzggKgZUE5ho4KSZJvzA1sEWf7kgErtBh2yUC3SyqiYZHSNrUW2urpCNf3o6w5vAfoj",
  "key3": "257iKKpbvjCiJaPPLNcrQyUAHFi2s4aptRBob4Uiw959ib8hGwzEyV6h6gTMGs1P1RnF5y9Ve89wsRoDFtMUy4jv",
  "key4": "2tpuM8PF4s4boQ69NhEsqyGYAfBAMshHpSov4W8yGZr7kgbtLzpb6qK6viV4fyGNyw85zoEKtZWnYEFUT3ahrGxe",
  "key5": "EC7vWZgaUXCzSUgNhXaCvVjsEad6U8rTF26UhSmtpBAREkgcRcNCDSkDZhPQJERYjWY3YzhLf2JxGhaNDdnkyHc",
  "key6": "36Vx17FE7drQe5FjM9hBtSHmZ4qe14nVtozzKsr519rHBe4XfJqzL637c7ZGXtx4XKHR7PqRCyaHYY8GvrNSh2AT",
  "key7": "2k7ppVZfQYftcMoDZLZ9tK7R4xPsn8suvogfDyCUKkwENLtt1nfJ7NW3Vk8QzhghDJHbZmiUn7kKVSLa3y5skyz4",
  "key8": "4KHm7kSpn5F2Go2rruaAdjNHo4jRaymNbmX2y3Qofpj1hpLLG2mHJ3hADQ25U1ryty26ae68YjRFFGfjC7YzMdXB",
  "key9": "53hsA9YtWCcd3Xmvp12UPdkUqaxVPaAmA9683xpLaK4whuuhAAbgMcFr1Z57pswKQGQ4Fk1WzJh2Ya6gnWN7s3ZJ",
  "key10": "4sGxqJ2v7422SACFdsFSrymeWjVN5WDYeFc7am2K7ChD1Yg3UeAjqTWirN9oWrvNZsCQG16hfr3vWAbj6XY6FXoH",
  "key11": "2ax5JMzVfDdU2mQPapTH8fha6NscdcoHmLRsYG4LwF1wadj9VxsdJ1DA4dX8gjNpMppaDnwmEkaagmxNE5Z8sLzo",
  "key12": "yVcgyA6SBmbhgFP8G2NJvECAZtnYmTgZShBnNeGDnHxkLUACFhZohLoE9RT4ZTUyjZHs3aiwab6WpUsfiYGS43m",
  "key13": "2V1DjWBjszBwVkQGXpR5GhfzkFJGyTTcASnW41mHnviVpiCXGKjgf7AsYRh7TU4bxFWZ67z4c2W6eBzgwMY9eDjQ",
  "key14": "2VcfKLr5bJvGU9kFmbYZfhcM8bTqE1SpfcgUx3Wvc18kMA2S1NLcy4hSc3y1qTbJvLvansPJcLTtmdw3SCrXcQho",
  "key15": "wR1xD1J3evN7FTAim3sUroLq4CJww4SRPmjRZsunuR35jTRFRMWGyGeiUm674D5k3feqdfsNDZ4PcQ9FBXk8dKR",
  "key16": "3XT6MpCe9GHUWg1MmyykRdnf9y5Wxoyb1tLXgsxKUoRandQ3QYxPrZL55icHSeDz9knNkkkAgRQwXGBvxCbGuEaR",
  "key17": "2qu1EShACePBTqhS8gMgPbpnaUEkW9eEpSP567RpV4oHnzNNFtZ3dDxVCM2d8ATYVWYGaxCTS3GSgy76jTKQysrq",
  "key18": "3wiE9MKn2xnTDCLuP3zuKaz6jjjvtqWakgPbDXpcFHbuaZRGVz4dwEa1r9zmWymsNMEY5BGLj5yJxBLT7Jyp2Zey",
  "key19": "4FDMMtvxxnhrUQnNU5YufEx7HXWAuK8wrpoAE545keDrmu45fU8zg97KmsFEdkUXrmvrzRp3X2HpcEnewdZtKVPw",
  "key20": "3cJpGKNrr3dC1V1H4PYH2crbw8sedMm1hvJemoD2knDR56GoTRA1mfGy29szEA9o6aLbhx6k2fqFCrUPiGoAuMrA",
  "key21": "28prtTHfy9LPZvx8p6ZbApCz5U8QLr7FKfxuG3scLjgcWgV8c1mWvi5Vb2UG7ySpSyMQndQJMbQGd8XkLYDZCGkK",
  "key22": "5GZTAkcs6sSsNpzf5c3mtyEqSUJygpMmP8TLMVaDmMjtxW9o2Q1sKz3gfRygtupJLhsZDnWqSQeW8X4HkCnajdF9",
  "key23": "4KpJQHtk7yf4Mv4mJwRaPDpng48SV2PH97qX9navrawXPGYuRTQaicfaHrXczkZv1xDuUffFwP4u6jgjvWZcbDRB",
  "key24": "2Gw58tchPJGPtbts7s8vBhPL8FLqrYgHjtUru9iVpnJ1qmpBdmbw3fkMugxTBXtpL6E5QG1Ev3UGsfZ71KZFnJxQ",
  "key25": "MyGEmduTVWDb7qVfkEkxLUhKCG1UUDDVjrS1wGNtGa87ky7imBghovGKQDkotEsJJmYtyZfbnqWZ6sqXEsyE9JJ",
  "key26": "4ARi8iUMyFuPmdHy6Es7PHcf7Sx5RRvgAKZLdVFMNHHcGT5MKFkqkxLSCNqjHsNkmbgWHwxGGWKMYFgCXgamtkhq",
  "key27": "UgvrhE1VFFATPgpDnAzxSu6GSLT7GTYoPHbJiiwnFZt6UVxDcyzWRa7E9FyLxy1K2W65uLcRGWzn6jgZ5pZSuHD",
  "key28": "4sYbpuWFGvsu1vRDLGMGJisrUfvxMmEQYKthQcaKwyE4YPuZ6oZcvRHKDrXh94UFDEBp6A9fnjc3axt3gjsvvwGY",
  "key29": "5dW2tVm9osxQRjujToGPXN8f3VVje8V2vqLukrs24fccbJDyhudjJ28cuNgJJoRHzXtmXFkg8NQct4LVxxgsX5NH"
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
