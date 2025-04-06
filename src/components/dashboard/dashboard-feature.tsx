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
    "tyW9rPRs7DGRi3utDnjYtYuEB9aHUtu8w5apZKGkMPe2n6AKAqYNywGYJ9PpZj3hFbfEcAejZjdLtsDXnNyCLyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CGTpLbNr68pNiud6QnnXU7Z5jWtNENbsrzxkRF6AtWBVLERQihT16cmSLVMZBQNxzKd7GfbGtXhRCTQgMLWnmN",
  "key1": "UxVw5EnC7WKt2yvsbzh77QDiCciujgjRnkRXy8cFtBnY8k58CH4y7pwpsYyjvVCFMoLCQEqqdNssFT91fTQBScN",
  "key2": "9SYAFJHJ7T3C6Ks1YoojTCzJL7cQVCJaqheaYXD2bwyiXbtC1tJy4GzbinwG8agNbo6r54F56BetvgUv7bY4DUe",
  "key3": "5F4eoP5rWBGzhSXkEGMqQtcmWgFwvGcEX1F3fXm7u2rwU1FofNhkiCGqHveFeoYgZRoDntSTAWgAytSTybJUT1nq",
  "key4": "52WrgzngGc3jor5u5wmr2tqc2qATBWk39Kf18E9xSPBVF5AA7rtQk6yLvJsjyZD21fQP5siwfTQ9TmKgaGANi8B3",
  "key5": "3Pg1o4U5wVuGcU9giYJ1JvJtaYpi6xiRxdqPKdsdwqjzwEiP8zjk8HwqKBxi3BVetaWumyk9Bu5rEki3wY6cysgx",
  "key6": "61pSce4wRQR1YGpwcsFgvDPEf5mTMi63Yg3rP3avi9gQFNjsVFUt2HJrut2G6skXnRE6g4rv4gHyQK6rQVHaeZVU",
  "key7": "EkL8o9j6NrroU13ghwzcnpbMYNu7DUhSNfmTpC16mpTZQm5u9PfxpQmxq9tpUyHDE8AucvhQkftQDhZBYiLXayJ",
  "key8": "5deW9RANcCQrx56w3PseGa4ZVX7CbQaDFWXM7BCDMAbmVYXVTZF7NiqZXw9FmkPjDLncSF5NiZZPbXKZpyuVHcW3",
  "key9": "4Fa1Fopr5Mtf9D8NXhKReUHbQgeFdshNyrLhCnLs41ytj8DzKJ1wJ35o2SWfTWD9aqgAX2r3nPHmrj8x3t26rqRn",
  "key10": "iVRr5LU7kaHPiu4kvyzUYp5UXqedNrUkWRkGvvJBsUXhegZE5dsYrQCuQbniDuwJ3ozH9X3qQ9vEK61mqRUtpGQ",
  "key11": "2nRu847ZwqNBEUECsti3d9XoB1doVWn6b4FtPk9d9KpG1S9JCeqj4AQqkhfGaRwnfxh3f6tCabqip54MsBPagN5v",
  "key12": "5wvSfVgDG2iUkgKfjCvjBRCVsQPrfLKrY1cDPc5LJWLf8gQQR5i2Cuxp5ofuQHzCt89XyGvZTFCiVT1ZE45AsLSF",
  "key13": "3YqejKCEr2Do37hNeGRSYr6ybfJuCHZxENrKVy1eK4GqypDu6e8sVAzHm6t2yLQGqKjNPeuKLLZ3d9yp35KXoPNL",
  "key14": "5xo43BmryH7CkX28cMRrAyjZNyVZS3UQfTze33uNCVqyNgzmANrGaXQmDup421oNkUCw5XtFspSbxZMJUdmA5k58",
  "key15": "5SvWCxY1QshSJMyVvDoBy3REBfLADCfT75wL3PQzvJEB3jb4zGEcWRFHXaErZrNgAwZS4BvdQeHx25Dvnq3xCgG5",
  "key16": "Ks2UFz6gedNKmtXLGPnjCD8qTF3sjp7QtUvX9MkdCNPU99wVsmyr9pGgqZDtAPLy7GLxs5qttzSaVXwCUz5sxfr",
  "key17": "2jPdBN2hCCyTDS2oeDChZ3PDvsWwzF5K4HVcV4jrxS8YDQv1eAU2o888nktHgR9azMRQvEsVNdB6CbEFn4uqZAg7",
  "key18": "wYCBncoQEmU8YoPURWtSmHE5z7fJQNYZRr1kRKPbGHaVa4zwDrmQedCQ95RN2GBQJCohj2iDs7HsT6F7yqgjNW9",
  "key19": "4W8mZWWoZn8k3xd4s3cRKzTSNZfejHTRwsCYDsptyxdBud112JowmxnmUJFSQcFdcVUZVxARaxKY5Uhe9Exih66S",
  "key20": "fJ5YorWiXqGHv2R98Ux4WMQQcszYsZe1K2TC4oaajbHTLTP7yPZhDjwK5tVkWUxS3rHHHCNUqw8Wp2t9iWbyfbB",
  "key21": "3h5HLkZdLsbN6kXHpR1cDd48b52B158WdFUFVbETrAUUWz6orsjYW91Mv3xAW1ysZ8vgH2Bs516Faa3ZuL9Dk1MT",
  "key22": "29uRHJaK5g1S7jMGrjLVZKs6c5CANA6iii3Xz6g7Lz6ztzMGNhZuKax7quZFNKEihWbHiMwKZwPn2txXrXw7wvj1",
  "key23": "3fkRDF28JYcGz93ctX4XYDaF3fTu8Zin8dqkUvWaEcArNxTGGtKMBPpXcq8R36nWAbbRgM91MFa9Vwdo61iE4gt4",
  "key24": "WcrK5yXkUaq3qE2Z9SZzhxMg7VWz26bAzPojiK9dwBG2ugQZfdq5gAKZ1GZnPV911oPZvqBCXCzz7SVJZYLwzRU",
  "key25": "3p9ArYXByzCstedLyfcqHq8GUL8qyPimaiimzD9mczF1qpVS193G3sHBd2yLixd6tFYzCDVTqBermwYPF3EYSHXQ",
  "key26": "3kBicncyBLApd9tHPUB6h55HURDv9zpNV9BnSUyNi4uX9d3fKDkjFXrj5eYWDMG2K6nXmvNeVfcQDnJnfcxuhvup",
  "key27": "3Am9EoqLTkhTE3eSGYaYyTjes16iHZhXoF4KWERSbfoNi5w6cKrgGzquJ51yii29k9MasusVsVDqKFnncpPGoB2f",
  "key28": "5ANv2TfWAN6xNSArPsm1ex2r38mxojmqgY1yv1gyzNgsAVSzwhhK76xh7bogw4NcakSXZqbpNbsgqXKGsXvW4xiq",
  "key29": "63DWnGvEMpN9bjoDNZZRMWtEstTBuVnr5XWjLaoASmnF1rduyRWYCirhCgSViiiKFMTpb5AptGUfV23QjVzzm8Kx"
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
