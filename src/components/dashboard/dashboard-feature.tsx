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
    "xfpckeF2qieKQMqiYXUx2vnUBZoVPCNZpayUDVSNN8YiShfZkrHTQSVjhDhhQSsQoJ572Mz4arNYxTZns8K2ZYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUHwn2awJ1gEmBSKoqTSpDgLzwmhscNqXWPnQvrDqwkbYBmoRhuR1dyBy6u6gkhkchdPyNpTUbCBTv7oyCThAdu",
  "key1": "3dr2GQePv3KvvvChWA3wGrqASv8yZQaFTKzex2NRNEasWxMuYz8bz1HZN132uWQHKddd2w5mCzPq2v7d8EfMRy6k",
  "key2": "PqiWQbvMJyEAnAfP6gmQFuJ5ZyKGMTZaPm9pFMyGfL5WyjGHgmLQnmngWQNfWZJCcnEWniSmSeNPWYRidUx64ya",
  "key3": "2GQCqo7qDJBtSeYuDqK5hj6AVPD8GSjozq37ZCzrndybDwDRaqt7pHCSwMDrLpXLD5jTQ1TVtGFeRbwMWnf9Hmzh",
  "key4": "2Utki9GjBWXUnfmrk7kKF78iD7c3xA64JuVAgK6XTD7TMrSJ1pcVaW7xt4SExRAd2iJX4CytQhWyzjC5HZZi1yJH",
  "key5": "ygtbd8ee2otX1GkbvJvHeo3BTFdvsCGjRwqf8NhZJgGZUqYtQAWWntADGzbC33FNqGfAqiKJ4oHHB2VzLToWTva",
  "key6": "22xbimcx2dhpumzVjzC2jFszsAyS1HNPWt2MPn64JjZydAmTV2zq9Higda1yoeeuWHpr4mXdEqaoNaBb2MM21jNZ",
  "key7": "4W6ZvZUCkfwdcDpnST2BRLr6ubEqGc56WjrTq4D72keWhQd1H8gbXXxCXsNdhgPBzpfkL4doaZG56n9u5UHqYvuM",
  "key8": "YsqRykAXj6CLcgUt24StE4yeEuotStR8HXLnCoHVstULTrcQmLdmQ6WjrLDSXzYmYfHE4Za9MbCyxaiGnyFPTbG",
  "key9": "brfmRWkFg9Tu8tL1sBkCrWP38baPkXbTK258ewyY8FGvMG5AVc2RpfNWqNCyG2pTz5zxvTumi6zv8KBAXv4faWm",
  "key10": "45zLGL9y4Chc5We6eLQbREo5UbgcPdnL2NbrHEnvUqpHVA7WRt2g7tT21i23sb4sk3tdUNwpjhgRgiBB9my7Cspu",
  "key11": "4KZyEXenWYua3WegGqvKKZrY8bdthh8uUQUL7YSEArAHFftNpkvWwD6ZZgDVPieEgWAeJ9i8QyzeHADCEP69s8Cr",
  "key12": "4Tnw3cJdevvafvDuJPtgwUeHvcNoZrKyadLamLWU5MCKBHi566amxqqU4vtX7RFZUn6z7Xh58uFgq6X3J9dSjgZY",
  "key13": "37fi4CsKkykQNo5hLjnHkcE2gMa8BoyUBUw1YnYaocF8Ak7gCi1jNJRJD67zE5RNpWZAxwxYBGWsCRCgHP2BVAX4",
  "key14": "5dnNFTSSWCSp7JvaJe86eshyEncngEuHmbvGSdEGLbqxc5VEzGJRMZHpBEpFngojdDxMBxdyRoKquZLZRg1doEwU",
  "key15": "66jfNh8NzuinYoayuakhuaJXsF5q3t9NWUGgVC6yrMWqABYut3t7eKYcgmxTURcd6cWhkqZjdgBvj6Xq8hJfK3oD",
  "key16": "qu1SGk2WitaYi13w7ipwRtRxAfFd9iq3V1SsYPZBG8zCiaL1DfJX3h1rgbWGVnKg8UhZhDexRzW7aK8SQbhVVA8",
  "key17": "3cHRLvq9NFfghkZXLyxT44TLEAqC1aYRHazz37jhC4YEPe1dB95QG5QwP8qaGAvRWJqSbFAgqSeB7F7TZBwWCrba",
  "key18": "52VUQ4iBFRbXzh4jZUfH92k32DddARs96895bGcgakwuuAhYJ9s62FqtbX2MS2rPZmTpSVmt8Je45UQWnLzd4ZSr",
  "key19": "3tU9GK2yXZh1NgqG8smZm8Zv9nxMR2CwhPNs2bCNVSRjGozjTBoT2ArLzH659vzWdWhPs7Z5sBkA36WapmAcn7YE",
  "key20": "4LdfQunwNyuVAEDNJccEcczaMaEnwQnuAshCgd7wnXiCkAq6v9gnB2FW8jJrbbpAEtcxqMSAE27zFXTxtWBghkqd",
  "key21": "3aeMUfY3dyDLwmtbHTAHpeywbey4R2U3Dsta25LcF8pLt69hhUdHP8pg1wmfsex8mV7MpT9aZHCU2re5UQTUmcrC",
  "key22": "gijMzEygg3dRV4uB9BFdtye2ugUMu3Ux79dr4wd91oDJwtSMegmEoMcgL5qeuVSskWYknZJV9aiDi97aqy3NqXg",
  "key23": "2vk1RwRg6yzxufS9M5EMLsb2pqo67uqNeqSj62bihwszq798NPdveJrVN6kRgV1H3U8ghdyk7QL6LMYfxT1qp5kV",
  "key24": "4YH8qAMRJZDwQoVXb1u6W1GvwxJqMau9ovjS1bCMySAbzM1YXw3ETY6prZLFvZShkuEbQsFmpX5Etz5U45vjd7D7",
  "key25": "3g4Weo3NngkzqLWbdPj7ooh48MLmvjRNngiypTw8kM4ZpPVrJNZTNrUbydHEr2su2dr5ezRhL7UM8RmHDvYzWhrw",
  "key26": "2sSwH6kqNYE3QcAxxDiczHvNkpcPGmgAQwsrBpxX4ZEUCW9oEtCKxLwLLjd2BaTc12Dn2VkuCdDWGnBtKYMsDjkr",
  "key27": "5KkdNYxbs9YdGohdXNm4YuwmSDoN31Btr6CC72KuPt2WtbfTn4k3GQbJsdrNFp4TvXPANSQECeYVR595Ly3HrmYn",
  "key28": "3d4mHcdEYeJPpirngAscb3ECLhZvttqhR9AVyGC9jxkEnRDMBSv7EBpTyPHba3nvYTwNMFZFC7N8C19F23n5Dnhd",
  "key29": "4xZkBUSizmvj5W65F3Hz5DKXgcBbQ4AidxyGs59nHMADxncsGv8JrLa9ubw1DX7ZaE1Aeh4U6ucz1rsWQxD3zYDw"
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
