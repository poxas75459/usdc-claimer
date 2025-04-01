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
    "5HoSNK8gkiNsTKiHuSozQpEtERjDg52KriDzU4wxVvVeZ2CKQJxb713L2mJLqyE4Si9xEoFM3RUkMPiuYxWvyUqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NstmtDaf47KpCtj7y44RP2F4RBSEuPeh9GmbZEXT39arKa425zVtYYWzANKiKEb2kMchMDwWHaTJ1TohzPjDVSd",
  "key1": "4e37FujNxDTVQW3r5ZhaPQZzfwXAULuQmSJJuB13GrCes5oj1y9A9Vumdo4d422QxwH4wM1NUwakuWhupsRtzBVr",
  "key2": "4B9P5aY6mXUP2EpZsN6jeNA7Ntmza66XPuWDH6GZPNtRYQuGo91jpCQo21Fcb2qtaEhZnHW9Lgtaa7iAdbguwTbE",
  "key3": "5UfT7T7suAaPjfCi74Aq4Kxp3pdzVy2hz2JXyaH2bz8cuAt5uvhwDBjotu6EoBT1e3wPrDmuh3XjAd1r2TgFUWep",
  "key4": "372nKn4DvJEdMNgmJDMTAMuDth1qgHPFBcmi18soA6xQYzTUje3H81jANFmsErznrfCnMP167XtjKuDEEeSy27Qj",
  "key5": "5soZ7HiMbKSLUf4rsq5mcPNd9rBbH9Eim3ANt357zrSCXAiZwjVGDGn9Z3oBxpG32yk2d4vKS2eUS6pDbhZSDjKp",
  "key6": "2EvajjjGUtHsMHCdbsZW4A9Nk9GpbcHdQaCT3f4xjjwZSJS3u8KepqYrUApqCG231y9K5Fb8auqrTPudFSGTb2p8",
  "key7": "3tGpUJUpxtycDuCzQSNMU9QHbnkSWCoaHwiyJczu8Fh1V52JrdXr2o2WuBc3gXm5SQ7zozcTMjZawkFupy7CRZ6x",
  "key8": "2mHhn69v8UmzEzpTA1EF5ZCMC7bFAdR6KXQ3Wia4B8jDpynJEbwzDEoNGmCssx1q2kuSW9QcUnYpdjkybhQQRscC",
  "key9": "FkJG4esuKsz47iSifDVpRDECSyY4Gm6mgiCUFoH4iiAEhPC13Aov3E9pE5M8LLPmLUQUsHE4V9ghx2SHn6XviJ1",
  "key10": "2oHd27qJUBou8VuCobXgV16Zguduph24ebTY21MXkfJqx6pvKmog2XCidykW7PxkxE1MSo5sTaFySfPjNWPpthB2",
  "key11": "2uBAbPiPUDo1hgBBmdZ6VxUHguCoGfMqCL4Xfr3oDk8Z7TKWDzktdasBorjaZb8fjqfuWafsAJaAPxoXRDVm3CAd",
  "key12": "5949kERY9jyxxvk6k5UVXYKLQdfo2kekLBa91EFXDDQqDKpi3QpxCd52pUGXyvkfpeCxisWZ1op2EsZWZtDyuTkc",
  "key13": "5uRtvHEHZTMohmG5gpiaiJJEXNRy6e4yVfcjVHFmouA1tHSeEo6btuRA9Cxv4vNRwqDSbbT7afogYKrQBvK6GM77",
  "key14": "3ehP4GCtqJda1ABEi8q8JdjzWqyaUC33cigKGqHDo4qj6Y1q91CJxwA3N4XAowQjQtxNsXPHRe63Qag6RujEkLaz",
  "key15": "5mWzu57nuZ4YX3AepCarei4ckHMEyJFPXXix1aQGpoR2auHrukjjuaFt96xLsXfNwtLFz72HoMuWkeEnj4DkX4SE",
  "key16": "NLaxvmUCQ3fyrMS6mxfX8wMWabP97QVuQSFHRYv7oZpsRMCeTRmi444wSQKMQHmVUDDx5Ju6np43UghJFhFJzsi",
  "key17": "5c3eXHuhr68bHdPmgjRiQLcUXHGM36JdqVEwB9XjigRTtEnRm6Muw1ZAanwaDL2J55aC783eNMuiQrgmdXHf6Mzw",
  "key18": "2ch7yECEsqgN8HfCkSZEJpfi9prrzVXVgQ4UYicHJssDktT1K27CM2hb3syo9hPiv6RwHjEeMLqUXG2rSFmCJjp1",
  "key19": "4fRAYm9ZYni92FMe5zYwbrxaaF1FjPRbKD9pJak5yzEWSxkeRC1bXgHwhS5QNDpzWPFhVehdu6pqywhExdr4a1kn",
  "key20": "52rkQeWuj7jqDr4zSQJQMvYuVBQB7SxrRdXnY98aZmuP7YeGj8WZrVipzgE3Nhxm2YUSM47XbFQSgQq2tCpbNDJs",
  "key21": "nXzRjwa5CBKzx5ChreqiTrXs8z95ExibNWsNC8bsEpqUZ3NF1W8vPRKqibQeVERD1muk8UPSBYCPQyLyzemwuv6",
  "key22": "3gcfMhqd34kcXtT2fy6NVx7opX9atpBddXnp27CKqYDKNR8JZWotfA4gYuFXJ2eo5Sft5RNh6sQmLuq5wwRrodC2",
  "key23": "2HtmTqoDYoYdf8R4vXf1E3Y9SpZg5ArLFVjbgdSyhX6BzHgZpVMax4SX5KLfq1NXezTaYtXtSE7DjocjsvVH1B6U",
  "key24": "3AAuRwXK598RGwFJfiPBs4NHPC2Jx6RJ4p5RijVahkUfApmgTbisYQEHL8saGBnmdNKQhG3krZUX3fBzMFkVaEYD",
  "key25": "3J1mRj1NFUFJN85tLug7Qh7T9JR6939gg88TPDXZfmRaHoy227Wm5snUskynffJaWgxBPYkE1cXdAsDkAzJjCLdK",
  "key26": "2MNTtttvo3Ui9LYAyECQom3dvnfCRA6QxTdr11UnxcRgnmCMxhuMrY9hpbpC4VBtafi9uUKEkKfq8tZD5PjsKG1F",
  "key27": "2F96fsJKg8LAUgDauZUi7b1ec2GXKEuayuCe79GqvYGgwGLG15KdVcohjUA6ZtPNxEcUPjU6LJsTmrviKV8QGrCQ",
  "key28": "XhH4QnnW1NoSxknNdbsvQMUGpWek7CKi624zPZraLhGPwpxJF4gPUjifgp21Jvuqjy6XDtP9RfQBLejyiA4roh3",
  "key29": "4X9WwXMWKHPPjxqfg8PGJWCMQ9mYGmSBePGuTu4PzMffJPPJUQyfsmVDdbNDZdX9SCv4UvtgetBmY3NhtHZyPy5C",
  "key30": "5PgWuPi7nfiFRF4FoAzEz2YDSxKsRreEhCmXeQZA38s3ubZZysmkoCDEyK9zAAMBR7FQgHUGCKSB2e2GApHxsXyh",
  "key31": "EFDSP4cS3s2izvHaYacKp8g4XzxWd7WUhoQ8bET7Qz9icPPrMCxcwi1p37HdvZdn2hsANBgk9DnXWzL3vEK2w4G"
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
