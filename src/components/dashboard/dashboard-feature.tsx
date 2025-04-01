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
    "3CDPAi6RPGRjAVz7Lr5vztvbpKq1g4yZPYsNQHstQNwi6KUri7WagBsVt1KzNhPEnT1vivzribPDLVV2SsGzpccm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45rPV4xukcyCx9UNBFWm55CGqV6erGi5qbNvUEhdkixsPoshSauJTM1wVDx96YKVrZFsSjfjtYg9qyePtQLAPic7",
  "key1": "2H7NSXb5D4JiK4rnV2Yihc8BB7aygANDLBd1HRTg58mZbfW6CX4HNv82ViodsynkgSsLFZ8n5eopmD57sVKT6Lbf",
  "key2": "5pLA38wUT3GP1yqQJNpocpB4tmevojeEoHCpKkPBtoRFmdRhqieHbmUrK1oE9kqQZ8jQF6ra4FYTw5kPFRs8Gqyk",
  "key3": "p717i7igwhTVpnxUF8XGGyx5HwmLHgPNKAFoeZJYwYWTU85MD3V1YX3aQ4Em96Rxn8XipgufqEZvXHd7mXAXUJ9",
  "key4": "i4UkuiFiHCWwXVAFsBoa6FBe3EyFG9cMnoyzcAHFiS2MXdGjybRqvieaxqoFV79NNhKJVLBhk7Zjpp7W6P1SsWt",
  "key5": "5RRuhrcRjBSbk2G3v5QBNACocwP94tfubffdVPCi3ssxzhhTUWLQiksSKXojuqUBEeYxWuzBVWpsDuHk7ZtyryZ8",
  "key6": "bjCDG4T6BTnmsoTUP78b4YNBdaybQbTtfoQQHUmq9xLHgpyAyWc9orkrQS8eRVTj5Eq6CzjTQnwVYeuCsqhgsCU",
  "key7": "2hXXEwfnq1oYakzhVweHFpdCf2BJoqe7GKLg3krFgUYF9e9ybHZuCDKedWtaKyw9yC83VgwNQtpndvu1ZJxN3W1S",
  "key8": "ZDVW1Pm6ZNqZTVfbrcnci9kmym1yKsCsnKzndWH1kG1S5PR7GqBNQmZ2RVW1fsRjFFoignWeXK3rZJrUJA69Fhr",
  "key9": "45Q7yVH48qpr56hrGGcgHuZdr2dmiVnju9swJNHHZqaNRgjpznzg4uXxS73hax6eunb8Grx4wysZAwQ1PL6ywrdj",
  "key10": "66NhJVFTTXGdRXBUiC72r2d8XPMGkhVYHVcuS5514n9NEs8iSKKY9hJEMLttSn68gPYUudPpziVv9aDupZ6PojqJ",
  "key11": "2xLEXNJSLt4bPtD7NtCcqPnpX2KpJJnZ2ZNBNpewfax37zq5oeynhmN4zHYjeH2aDo79Nixx5arjuYJyw7hQ6toc",
  "key12": "559c5WVCrsmGmFF2BkLwJtrLBK3BPC3oWKwMCU6uPC5TxrPunZqpkfAhgD9onJKq2MkAbMLqQajHrby8YjUjizcG",
  "key13": "4WyEwbCf64D2TmDhnCocc5gCzEc6CNsYEdSFjhWRbh9AdA5bGa4pkpR971ffWJmk78v16coP8hpDVVjZJYZd2FEr",
  "key14": "4wPQngimiyAB1y1WfbH4Y9BMws2AGbh8aqCDPDpV64ohuLqWzQcbmfUUSPD5bJvqpXS4NHLQvZwf68ucK35y5XY2",
  "key15": "2B3kvUfhRmVemhCyZgoq875acAP5FJYUFHYvJdsPtBXyaGvoN1cCsohtgXoFJBDmziHZy31cCnnxitZ1W82NPczq",
  "key16": "2wcibNKN7ZRWAymrLGgtyVDfU2mETYjKJBX32t7ZC7eHPRSERDKj7vaRxFz26GeTXPVUTwjSVPFXezNioL4dewx6",
  "key17": "5oCSnUib7ixFXofUq1wD4edwX7oCiZcu7uub5JBZFd7GQapaW4LGWwJ1YNioKSsAGfXCn76rFTVLv65nNGtVVpfV",
  "key18": "5QhQC1o132pTroYucYdjG7W85vKg88gsMNuPoFdzsLxJh8PCsVrvZpp16ZBEbKHsX5tupmrquoDz8yCUHyeyAqKu",
  "key19": "4RK33Ni8rP6p7TYYqCvpjHKw1y9j26pA9dGNqBnPpacrqX2Da9cEp6UZjmrXn7BJPFQiPzjw99QnJv6eASvq6HLh",
  "key20": "7pzvVtXUTHqMyfwhMzBdZXwbAjDwuLfy1sW5unxyxM2fGnum6f3M2cj7zhYkRXKZVNBzGwmpaKa2BKwtNBQDDq1",
  "key21": "57BGyXPJSefeStvetvL99s27kSHrbgwEDn7d6aJpJRtGUXGXFcE9WGkKb4nm1rTZVA1he7TKpTC67tpegHgMEpeK",
  "key22": "67W6CBXVqER8mWeA8vximcaQu1C35bQvNzupUzDsmNBay7aTAbdwczX8wDKGzPWawLUoDXEhZMv4fX9j1f8iWJDN",
  "key23": "DLP9vWP9phSbR55piyCsKFqnpqMS7G8RwNXZLBgndiUKPXt9wTCw8pMLmqLFTu5jHC7xpmD382MzEryqZfFxi84",
  "key24": "42yHsEh1bxmgo6eCEX9s95Z3dMQGq3HMrRYwASJV4DhnrfvYkbw1TcajKeHXMNWsrJCtDDkH6cXhghG9beWVzcBw",
  "key25": "2sU1aotqxAtTruc9axWL1hz3xmEPj8pyKEZXaMLrR8bmR7qq4Nh1rnZFj6m1k97ik4joq1UPogYSCDNLMMUWY9Ba",
  "key26": "7XD1G6JkHo6GWXM3KtS6Gjs3KZFS5AmzwrigGnTtqpVa8kcjHmLhvnWMyRBugs1mNCLAtoF2EMA9RbzkvSrEAkq",
  "key27": "66fzpvmZyhFEQL7oC3azrhNvG4abvXP5MPLcF9o6tWR2f8t1ozbCHBkxVj2YBVLXJBgSCuKnb4g4yRqZKpvQLr7X",
  "key28": "65EGCFbhZ5rjbTmSz9jBb1Mg7kWtnSp7dPeqfx5AUNHE9JhgE1YA1PPBC85zkNWR221SuiaDg4nWyQsYgFJ7qLX7",
  "key29": "ApyiiCL59Dtnug7bv3B77vvjraafXAu2RuuXruKkg7haRjKFGQewiJXLEbSBebnBLXcoqsM3xjzSGLLqCmMnrwB",
  "key30": "5Cx5KwtkXCaTpFzUZHHzN8QYm2849UfUNjkAFxSmCtxeka5jzjXaRz13VSUsRNs2nC8ot59B7EoH2msaXGyJz5BU",
  "key31": "5vij3gGsBZTjFT67Rq1h6ZueRSgp7niNtSpagmAK7Y1B9iPwZTv4nmJ2sRb4nXqzpjSzfTJZytih6mQdmBkiRxza",
  "key32": "5mRnmnKmXCyAp2CkL8vWUeiC6hhapzXjEUrbcGwvBXVtqhU68uki4sizeZyzN2T7eWGaF3dfUdLVVsbJCSU5XpJU",
  "key33": "559ChTf4twj9UjHLKo3qxHfRBoDaTaiJbVBMt7NAMzhP15vwvS9ptpj3hdm9xznkZKeiaRoDaM8NRFkaEiSHA1yT",
  "key34": "3suWwwLYYgV1HRDhnFD4iTcaYJkwzoXJZKfpaypZSBTKuHPmgRbTEsAkWUoeLaScdPqKAqq51z2NorPAb9We6MXT",
  "key35": "36UPunbPU3cBPjbU8WvVzP1wfRFEbREzquukbEMi3e58vrgdq3zfA9YbCrqR6LRkntarfLCtW9tJvhaPLDmSAfuJ"
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
