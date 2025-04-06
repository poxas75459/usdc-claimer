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
    "codvQpRR8UUTR3cQztFy9wxkKQiTQueFMA6XZeazVpQmzWCrMPZ5vTZix5jwn6UrQDE5ZTGzLLa8zqSwKLQ1vY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5atP8k2xajXpjnd7ax8ZpQZLFWd5atK8NAv6XUU9YxpAUBfGvAC3hQstB95RsqHRhwen8yjP5eEfoYm97EPM4ywG",
  "key1": "2qLw43DCRhu4q8YDRaMg3N2LKHGUySwtF6i1umwxRpB1Acmpn39UUnCRG5cXkNjpK6BNVQRvyLPPKvFHzRvQReaG",
  "key2": "2MJ13zPp9Q58DXcHpUWfg1doTguK4ns81f8iLzTUXqX33kWEzTFp5aFq6j5p7c4jfvf2GUN2eYw9mtRoR34STnVP",
  "key3": "64ehpd33ApnFdUmDfQwrW6rZH3dK2YQWdNxdptzVBtLvTyCdc6FF6ECQ4dj7Dpsjwz9henWAJaRi8NZsE8um9fUC",
  "key4": "YP7jWE67NYt6aqghcPoy5oR8RX58yfhNJ7PVSL41Dg3UBpbdLRxBmdZgVVRBNaaTeRT4h2NwDYVwyy3VX9esW3p",
  "key5": "4sybsk1M4CgxMGPSTQxtrBHTKkfkUnhhk3NksLKjxArqzWuLa21WCZHosARRG65eyRxMcczRoPawm8P3MnxPns8C",
  "key6": "38gryoKNYVWScYkgRRwmELy4eRKKWV2CZCn4kMoaMTerSUE3bqzimANtWGZEHJSWuSvx1sWPb5Lq6HDwRRchfiHw",
  "key7": "5xkke3XAbKiXMgDH3Fu68iKrEUt6AHfB3pom4sA1AZcGbh9wERv4vttopEXg3wbvgrmDZFvdpNyAovvMbtqWronT",
  "key8": "4KapdFtC8FBhBR5FxrNRuVYexeYJ381byYVBcfQc5qhPv62W2oZYMUbbbm3CNizzmoPY1zTEu2Yg8JYeUwMn7Bac",
  "key9": "4XAKPvn7qrhSh1fNa5XETyUQE4a8yBWbUscq2qC2rXyfENoQteFhBJFuCWQhXrLvkbWYpgtEpisdHUTAn4QZsfyS",
  "key10": "23JzEU9HxRoR1M8cFRfYM1oxJqeGU2KiNUcphKKx5ynqS2y7ZWh4VadNcevfPWJZZvwdWdB2WbMofnJDq829wzvX",
  "key11": "WUdH2oW5BVXG2X7DzgWqFAPt4dR1q2ZfftVWmr8u3hgcZZaXK3nwLWs8toFU7vva3xQD7N7NUUmJDMF5q3VBNZs",
  "key12": "VvKUPyd779TP7nUjsEmM3WLorkGDs8BKt3261qefBNjHoQNhQiEV6s5zEiAARRqiBRrj1r2UrwNKDJcetptk2cJ",
  "key13": "2ejtis8iz3NqV2fNdNMVtJEwoCn4qdPwdBccowmqsq3CXu2uEHx4EbU4hTBLVZcpJoRCfrNT3WFPeg5cmx6n8jTS",
  "key14": "38Z5hZy36kmqeBTnkoEa3Ps7yxcCAgvfPvmQViUFZ4J7AA9QUoPZp1CeQeXxfHcdHffwqQQxjYnM7s21K7GAvmpu",
  "key15": "4pkrGJZdRLbFJbdSxKPbzHxN1gXDtC17vS2UiKqR6o8MFXtuBLvq9RZSykUm9JZbrp9UdtHGVnhT9vzEPaVw436p",
  "key16": "49UzJC7uHMFZSRWK6Zg8hHKHE4S6UkLzUfz37xyoDLctEbv4Svj6NfZCpZQDbSpzuHKeNVzLxJiPm2K6EFWPxGKy",
  "key17": "5BVYLwRXVaSgrhcvihUGD8c3DdrrMrT58qNzJZP5dJXn8PAY5DW7uCvRjtkgsjKJCgb5uBHiwSb3gRWyLj9mHuq4",
  "key18": "2BaA1ao13iWWxw3SDBvwgwzuaRcHdrYgbfPtdQUWQt6XbRysR7MeCDJctD4tTVMJAYSYVaP2Txm5jdmoJ6cCjoyX",
  "key19": "471X2pZcCuwEgHLNA8oBq3Lcmzhh4w5rhSgJrsmdcGVbWGxPXJ7xeqn2GBuZgB2GUSUTM9wzYsoWB6XvKstA1Gmq",
  "key20": "3zpWbqQTh16fQ4RykeA5nyozbnrAj7EFjaMSN1UAGXzkrVe4YbZcSwU9spzvEPPwkrvFKHdZV6pGF2v9SpnvmCSt",
  "key21": "3y737x897AUAi4gKkdjHPXh9edRqP7xe67gKbyyKZ538J8C6vSJ8eNmsppoJKDjKpV5zUu5wt2Aju6uCvQzaD9MP",
  "key22": "54Nh11HaeD5JGtSywWc2p5Gex1wKSS4aR92GuuE4u2aWuVr8M4uFjF5ZcwAPwHfVaARhf6c6GGEk1VrXTSyjz8Y3",
  "key23": "2mKrwUHAp7AoFYWcfVr8FaqxHFdCifdeikpapRw4qV37NsbFimWMRwDvTWvN8m3NCcVjDXd88ztSiCdEpP6tCoCZ",
  "key24": "4HVQE559eUtHDVS9SeBtWyJ155g2v3zErRfkiEiGYkNqYRz6bkd5ykuvVDMLyGxDjNq83ayhmVJF57yHULuz2oL6",
  "key25": "4SKeunkdk6EbMoEmq1gWoZLqPBaEZNiX3rBjbLQNCUUDddvwgrZAr8mDxFBuqk5VN3ws7bxKYaZsyxoCjYFyisKu",
  "key26": "5sQgfGb5NGuoKEsCd73NabR7NpQYPB8pCL3bN2krva6eb71pjaGku3T7V38AiDrbTRzzqixunxv1cTnh1Sez874v",
  "key27": "5Y32SqqjSuuBzeBGYQqZCHWzBtSHmveNUWj4e7Qkh7rCss3SHJcxhA6Pwshf2J1ioUNHYqmJkvpSv834Bv8oAhHJ",
  "key28": "2LBbQnVSpiZ8XVJ1MaGnCnTSVF4idy2azvd4sSM6ZeZxjQChGSQhc8mDjfYg4RZQQ5ad5n4c6AGQQMubGA8XCfC1",
  "key29": "39AKeqKVFLnkGvS8AbrLnkLKXjqqxSdpq7Yg4Fir18PjX1iVmcM78oLQbCgJHXZPhB7vCqTDpDZeS8XYg1i3bsZp",
  "key30": "4LbVvSkTHHjfarLPPXgjkczHE8KEikh6reqKHqNGZomzKuadyK2DRTefjWUx3UTu84jHtPdq9f859CxpiAHRAoip",
  "key31": "tjucGo5EdcqdEEcWsqNiNRiDde44EDvUobuhFJC8zZ6vE8s6DCZbanrfvTTpYjBFRHS7c2f97KSnbjmjrChje6p",
  "key32": "2Z7jMfyMGNGYqsyX9Kdeyh3dnPbTrQNG3QMptFYejRRNAuUjTp3HNzDUzPR6Shq3xoczCAXwRynwvyMTLw3by9q1",
  "key33": "48TD84fLe9VZaidGx5cpAUFQH2JzeA9TNzerriPpZwV4qB8LX2B1Tnv1tR5pvpqWoSkJBWjjfgjhRf3FP7ftkyXM",
  "key34": "7zVhMeDnLjyvrqA4uMrtjb9mDMURrCKFsvYtLkWrtWfVHCLS2uj3197kQ6KetB1oNPAet6MPRHLrZC8g4zxn9Pg",
  "key35": "4LWq5ZV9Pp2jfBKJZr5Xii4K6t5FXfRnEuPLDesWW9xn2HbMfbLkQBa6KkX1MA5Ney8aeJv8Xi1gTFKQqNaThvZC"
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
