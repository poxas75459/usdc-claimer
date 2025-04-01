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
    "3UY1B2xYzBiNnCZfaifmPKGSH6qLSyV9BFw7wQbno2uSWDTLM6rjCtLz9MLdZ97CByPxG3Rwxm1xe73Z7c8g2w7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y33CgnBUwBXeimZA3c3LjTgCawA5svZYPYYf3af7TAWWQXLriTpFUNHZQEpqAvzvwZtbRnDrjHYA4d3LfbZsY8w",
  "key1": "4HJP1eaGM2JGty6rZCraDQkLw7ATKPP7y4MWcagM7xQrqDmEkuJ4sTYdvYDQ4wynmq1R7JKyi2fw6rGPxKteeQzg",
  "key2": "4VtKirUJ2jwKUDZGc3WTUKDBuCSESgTnMkLA88juvSPqr3kuqPLnKwBwwW1diXd5jstBZWjnKMjoC19pW72uDaUF",
  "key3": "5Zc9W6NM7wVKj3FjLcdkzHMeihqFToHjxQGRv9caEa2uwf6XcrWNTAqUpAipNeDhPh4YuZY6TMxkZASj4HnMzucn",
  "key4": "2N6SGyzvgoQNNogJdUVTXJMqAUrkqjgiuBZWsmN6KwDeXwZh7JwwcagP4ntyQ4czHMEwVJtAj2SPqfraJFA9PSSJ",
  "key5": "3URGkbuaBfjR1Y4j7LDMYjGuFmFNzCP9JpZcEo9bo7CPXvRgAWMK5eVJ2LQBRaUsiaGEPAEopNHyZjYq3VGTdfA9",
  "key6": "4ZovDRkbP6sodRmGJnvN1EAFXTax8cMeyPFLFa71nR54Vm6qikwEwwd47EaYEyiDaw4WpXnR9Ea979AmVYB8ney1",
  "key7": "57K7MTLMfv1syadsdXwQtVYd8oMYQZ3yf8iz2kNwh3T9VbqGW8wGkVmw62bY9GkmSsMM3tsM2PA1DWdYYqEu69gz",
  "key8": "65SYwirNyrFU8tVmjXnntbvKTFztB4N4h5JQYQXf9N8awU8gbGs6aTprJkb5zBizGuA9EUQUF8BPsbLhDpuHgVBb",
  "key9": "28BmFr1qXDgS9scv8Ttf3ReAxrG8cy79sE79EvS6v5RtdfegQRQbdTu78Um3ee15UjNuoocUmkNYB4zziaWqJmsx",
  "key10": "3ErT8Sz2E8ssyo28TcQZhbqz3EMskqx49V1fMvFasLwgqLX6aYNG2WRD7pKtrb3GN7UtzSeq97cj86VgfD7p9PKs",
  "key11": "47MfByeJTtK9njCHQ3M78KEcX8Lozd2yaawWoXmHpbMS3Lrg4KTLa6Rb3etvXoWjowSxwwPS3yLmkCL18xhts1hM",
  "key12": "53XTenaDqPUPxUmwWeXBFbg9eYquw8XT464nL5emxf1PpJKKJFVXX68FTRs6W229p5GYXix8fJt1dnQpTcxFhHCa",
  "key13": "3kmShV6xy47mRpTqA4Dp2TU2Uu2ZkWoLoLCzFptnhyGYKZp6SV5DC5npDbKP8bTwZURPFsaWQYdBFuK2QkCCGsqW",
  "key14": "5NNNhiCQCayruWLC2ooBZicmGeWq19wZ5Be7jECtd5sfP1mVRd5DjxnVj6D9TEdwev7yW5R48jVWXj3UA5fZyqS3",
  "key15": "5m34AVKKKMaQpnJ1dUXCNe435Zf75fP81yppcZeZXfm6iV3pkwHJmFrywTcFm6Kmo8GQVQPQaipW5gVRbhsPycwe",
  "key16": "2EFqzThvHEEbD75UfAmic3iM5okSoRmamnpnPqqda9PQJBJkGpfejqi9TRZXh6yHG5vT6Vy9ofxp5TEFAYxPYHvM",
  "key17": "DTqRVWxaKH1Hku3EFdCgJgw3Hqt14nzCkLPpPgDmbQ4CT5vi2znGAr8DUPK3mvBLTW1URWm5WvzCN9KAtFNxdwe",
  "key18": "2ASM35sgo38QbUAo61pzYmsvxM44wP6YZAt1p3dYaYuHt47iX6MTWznHDHtv6pEuKMgvSKLNsvEmZ7vgUAB19PQ5",
  "key19": "24AAfLbDfNoYx7Ee2rgaiaTarU9Xb1ZsUJHmVNMEVDf5cyWr1HX7P9PSYSdGojWLT9W9gtkM7kjveXAPUUzr1L84",
  "key20": "2Rtg2tcykpSPDd9hUMLxTzxyjLCtvHsPNXS7nGLG2ahPvW88zDouE1Qp96giSZZZbkWKrnsmPbQTLKidVqtaRpV9",
  "key21": "5kwRSt8ZyBC89aJFXQ8DQuTW994iZigSpsde4DMkHfjin5TGe5jZYRYZxtQHrquoM6PeGoB6pqWAZCcPhQTmxApp",
  "key22": "5TgcihHq7KJtWmRTJQxk8bopqjW6q26Sgjf8fxbuKmr6FfWirToVz1RCFNQUfXReYbQF7WpCmmp2XCB86VHvq4RX",
  "key23": "5evzAyzQc1E4VTe45rR3XrWcGHpf4aydyKY5NFicPCWvffonSBKh7AhBkMuz7JHLedzfz5SNn1A3FpJffkTmtbXg",
  "key24": "4GBK2vJ2co69P7H4nVZtyvLdWAFHqoWF7Vn6B4imepfuCroCxU6Zzp1tQ4CskWV6HV45g9wj26kL9M1hdhDEfnwX",
  "key25": "27Jk3XiJzwsAxnHD4kfYncdzktujJmt8GhzjnisrQNn4V4HhrC547PcxyKsYLWceoNSnKatuKTaM2a9AmEUqDMPA",
  "key26": "5hDFnSUvCDAF4LePEaGEdKeMh35AhuiG2eSkktosYCvEhE6XRzMXZsJFLKkkPs4TiH3xDTS4wkGBR9N9wYEbJTJw",
  "key27": "2wQ4qfGT4WCXep9epwa9FwfjYjK3BQMQKvsCbrKTpB9RR4aRFSQPutfRWp4XoKU9VM6DukuCF6bFGxXGLJE4t1iP",
  "key28": "VV4vXqEmpsF2VZKsDH6GeCNCbSFMjmfNxvuzeozp8Z3sDnchRCwsxGKrtpJ9R1oJZc1NczexeJ8qNYBhMYMykpJ",
  "key29": "3SjuNvNVsMaRYVkqLQhuAWZ7B7pvkAQYDjUXZCgfCNsfbjUsD5txrgc73ATAdc9XnL7jaVetDoPTPkgXXeJWF1mN"
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
