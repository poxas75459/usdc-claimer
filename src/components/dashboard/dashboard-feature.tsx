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
    "55dWYsNQNk8bb7ji6bZEh86k9rJ6pi9uENTaKkRvvUEorL9nCkFurqcjs9ANFD8tULcfgJsH9Fk4d4Znr5woNsK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hd1jzQbvxR6atkF662actSruSjbZ5Myf6ewFSFyp2JJnXkaoDxWNAj3DPzwXC6fQqWysr7yXqJaYxKAmehiwTMb",
  "key1": "5GfxM43Bu22pzmaL99qEuP8XD6TznKGPSo5m4yzrA6maMdEP3efW8BFV33EuG4dw4PMMGDmkqwhQK5GvD1HMHTUb",
  "key2": "3Ehwf9BmJd4vG2KCWe9bHrfNeCxGfTLGhSemFDbSGcC9HFcXTCbggBWe55oYdB5kkADAEYPL9iLG4gLjPMLDGfdt",
  "key3": "PMES4Pn9fEijMjYn1ApNS915HHz454MQsDYfnUFMwrbAcAjnNEN4Njie2ECWiyoMkBGYTRjtxC6juJYFU2JfLb5",
  "key4": "4cwTurNHUpYRtXLe9GfKEWbwf6veA5CfnepJT4W33KGfJUGxyMRTSDkzgYeq8Ruq2QK3VYMewDX4qCdKhQs99W9s",
  "key5": "4VgYvxGSBvVuoWCLhb5i3kX3z8avQ9sexkrCdBqiBDTP42W21uVwYdsZABUkJ2dzjGfkHuTdrLVnSwzdP6rRvAAt",
  "key6": "2Jv9JbuFbn9D91n2iahjAGnLmPDzXL9yvgNpJZKSJ7wqzL5cwf2VvsHSuwD9KtdY5uakEcjW5JrZWhwAJNFtKPfY",
  "key7": "2Ty1cZWhEVbfB3aNZaVkoUvhvNgN2dZqPZRHBJYo3N7ZTdrajSVLN6ryNXxNm8ggARVYK6wPRzP5cYiDjxjXPdtR",
  "key8": "4GdBBvsWWkquXT1Vd39DvCNC4W4mBFACTKtWJVT5YqfToAdcZqPWQ6fcWtuAfCK1d1akh9Vupvo5gz1iD8G7qMW2",
  "key9": "53PDhvap3nM8Hwiz6tF5A5XGGdB98qtGyWCwFFzuA4muPS7W9qSUvqwvPDupWj3Z2dZ2U8wCxMXurc9TY2nbKSYH",
  "key10": "4L33GsPCSbDFqRBwwra5bRfewinUYdbug2JVJXuP6M1rdcdSvsYPoqiBMvJYJsUNc4r5akKDbjfYztag5kkmuPGx",
  "key11": "5NYdthxw8C9CBQCHNPsroTRWfVbZ6aNNLusKkDtxGwEAVNYzPyAfoqzYfk8m3DPAhhvgQndsRQY3wy7zWfiRirBo",
  "key12": "4tQjPAdufd5G5nb1ZDqMDkJC2eCeWBK1Y51xtHSdfE8QXCJVzZhp3gBPyBUun8L6jfdMo9io9DD2ZJC8Bv2zRFpm",
  "key13": "2vADxBZGgSHJZtXHswPLUf2wHBRLtdSeHf4pMtxY4Eghp4ztFf1YQqrh8GA94Q575MDmENtiFjX34QPPBCaoXK2o",
  "key14": "jqtN8DioC93RTtRzezhCLcaHApsGPsfn5N7AHq8HpUzFbwq2n9g7SNEAErAQwBbvFJf9WTZrP1GNoc7Lh5Cv4jx",
  "key15": "3cPSuxq4NDERx5NvJFinDcQxDaVMjy2gQ5ENy2GuRsByM4e2aUQYEgU4q68PMCNQf5bLfmhBHgagGfk93GxxtsxR",
  "key16": "4qrEWcUY2ivfrEJt1tQ49V8mcgHbWL3bHAYghx2onLoRDiJWsMBkoMv2NES6GA9hUEms8k9qgxuRKxD2yZGdBjDc",
  "key17": "3Bd7dXAU8oudPVN218LtvxCgbthA5FLtp5gbHYPyNFFhAPEczzdKJuM6BwFvj9TGgCjBmexMv8ifwx1T8rsKzXvs",
  "key18": "3PesEZcs2TTfButP6v2YG9o9vVBUqu2ZQKW7yezsddBABJqutkmZ32y3i9SB7JF7E86bJfcogmgtNpz4mx8zEu1J",
  "key19": "4qhizUZtgbGz5XrbqF1K4diiWqKDmCcZARyKEQkJgyovXZBVzF3XeWpQtXgoKHdyiq3bPNX6QUvb57gcJYfGnfK4",
  "key20": "4iEhGttU9N5YtA3zxATf1quGVdTWXywoTFrVSSU2GoKidMbaPkEKXtDVk2d5o5ooGX2osnwXTk3JpxHR5T7wSPjx",
  "key21": "4N1nsYW6ZwXAo58Bs6doTDr6KsUEuS637tV1LUhjo4d9i8axQHFe1rP3EzixxgZ54As4QDJ63dmohEJJ25k4QL6J",
  "key22": "42WGS4Z7nFPNzyXjJZaZJ5DsmnGPwoaUcdda4Jg7pCr5Krm9XEWX5mEjzXEvBBbVwmZ7VjMaoZYZnLNaxrRdt8FH",
  "key23": "5BNbWfQUcEymJNuK1MgaX6eiooYwJNXTn52ofdXvQM2naPSWB7fxGc5iAV7x9JCnPUoNWWLN9zUS4QYrGDyBdAHS",
  "key24": "5LSV85cpAnL2NTbfd9vBXaLkMDwSTXKz9ngzkDvMMLA7GF1EwzAQjTn3eD5KNyR75tD4WfBzkzZ2UDUkHL9mRshq",
  "key25": "48hWawhLWob8UBZTUjkdKG2SUBr25yRTevyD9CuHSWLNg4rvTnGBmzQVf56ZdqNPHux1wKEdqAptPzkNnJEdTjNK",
  "key26": "3pvAZJiPk7Rg6nB4fmvderW51jFPZtViLydKHBpWBVenmoPDeWs6uvRL1edgm4Kh6mqqzcS41D9E51aktFKB9dz9",
  "key27": "536ih9i8UPN97myCpZ9VYxfL7BoMSmk572QR73CJPLg43hDD3juBuenYv2m8FeEBCYP1qu4eq7GGh2f7wGjSwdzt",
  "key28": "3f8ihbGpWKVxCicbf8YzTfRLqKGpRwCiQ3gCmmKTdbMy3kG9GEo5ts63UircDSUKp6ZweeVuHj2df2amp9bwZwD",
  "key29": "CMMQZiWA7g8WpZKGuZqm7jKDZkErecfB7fwqDjpHWt6t3eHGTmBxRemfPeTW82eNPsRAVDUMLzzESVMbsSFukPe",
  "key30": "2McMJNBnyRWia5yLaq8A1BTGxrx81P7JtHGPZo7E3fL55LLYA5CrWM44kbiDrcAFsoYPzocTLxzmKRyG9VoqZggA",
  "key31": "3y8i7nP5iXb9jfv8S3wUvozQ5oPYX1gbDGzraHVcNEU8M1QinEgBNVh9zjQMEGZNdQb6jhDRWZW1dmXooXQzT22o",
  "key32": "4xFHAjcqfqpXrabEuTF6rigJmQRrRELwLPKUxc4ZRifCs9cMpXNVpPLxnNENme1UFWkGfCu4s2g2NtFMqLAqmXkd",
  "key33": "5w2gvoQYG3VfUDory2jrnpYH4msTZvPqN9mEnnVMe6prZAbP9Ve7qMD31hoDDEvHY1N3CcoGL8Pe8sdB7SV4fyEg",
  "key34": "24ZPrerLZbVnfzfYXaoE3dNGV8YgB1yUyv2Q8sa7sq4WJznYbRhxbiP8bYbvXfZcQYaGgWD76AwrFH5cn73H9BAQ",
  "key35": "RNsv3c1NwXRhGD24RkxCmiaEyQsGJ2YAXk1Mf6dBsvv5X8FuAKntMcopWYgZsDF496wu6baP8Rz6EUgTad98jWB",
  "key36": "5N6AgduQMid5hruBxHhNzH6eMs3JF2pjcEPQq8LERW1odEGisvoivqf5WZWbQHnuDXPZSiJ56qL7S43bxWFwUiVM",
  "key37": "5DZXod9EJztYPQyKPqrrP37MXycmsEZHDPAd7vxnasdqKDuVND112o3jpn2SbMhoUEYSBUGh4WZHyGCsPjFyuZn6",
  "key38": "3Hy8TcKvoSaKBD9kA4dMHkpFRsFQJ7yoLSwWc2U7RZerpFwnqQYJj9ZBYQzxQPebYpTcJotB2PyidM1v3qcqHFxv"
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
