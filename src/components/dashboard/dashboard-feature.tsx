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
    "4Bs1QVZKefvtPQKs77GvwEawr4gSer7m8VbySwL81XktLtF5qHY4RoDCKxXnwmzZrs1r4KnmBKK7ZbcNfS9PgPH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bi2dvm3YecrgqBmo6iUiPZLfrabymwdHPZRnxEtCC5gRmcV5pEWWVHbSv6FFuKXetx243ZN2PvV9PVFcgDJMMhQ",
  "key1": "2vcQ2Ux5odegNrdm2wVfhaztk8y3ckRzYj38qCaAbW2MBnUnNyJYVsHCSnAh7P3scprCxdpNLmbGKeA2uiFE3Etg",
  "key2": "5qN1VZ9vVLxp4YNTorYSFXvn1ch6qg4vBA9Wjt7kXKxxB8xAvewcukzrMsiuCdAsgDmpe5vbUd8uBz4PMpyWtcWt",
  "key3": "6XyEPT2n6QMTnrhrKgxgExhL32QrvM69hkcUDxfhMBMZ7Y3iLYh77N8rNn8gzSLaB1GTSW7SKdvsFyE4MDEJ2PF",
  "key4": "3R4JU6wBxKbv1gpRHozA4sEjvMDXRz9bdNxoX7yeFRhgwEooUmWN6zmjPYq6mjNDzYwP3wpnHtEcnTM3NSy2grYd",
  "key5": "4LHkzUzqT5YmzFLD91Eq4tGcwanPeKULuPnhX3QkXjbjpbpG1NHSwah8Z31w95PuuJ3Va8QqzpzAbykV9pf1LgPX",
  "key6": "DttPKhpEs2nUvn4LzuRbY1TaZrdiz4no4YBZAtG17u3cnrrJk1C4jK9kAb6HvfJCbFGkSUfsU5Lph6fA1hL1PAT",
  "key7": "PnGD75g4jgS5cC2koobT31wkTKf96rhvABjLZK4xXWbLR9XQgzMJ3sPqR8Tw3x9QyRuwAEBHNq3W8YiSs5E3Qt7",
  "key8": "2PTxxFVd6nvPyYi94QZjpZ3oBX6cKdJNDVtnHJbpzX6GFRpkRfH6Q9H51x1pVp9GQcUFdWFCnLXA6iJF6nV49kF3",
  "key9": "7nB9aKyhUBicNwyesT47qFT1AiCvMLR5Fy117TTvmAEnRxp29vyoBCtLh5q34zfCexEXAgoCLth6dKh5ikXACYx",
  "key10": "2yKmpxZHCAvrhgfBBNGBd6mHk94PyCNwJE8wB2YqjXZXMH46RGPoQrzhSQ9bWrAgjhbiaoA5Y1QSZS4N4B4bGa7g",
  "key11": "3jo9rktz3LuJXtnUXPq3sJqhBK9XEEaKj1fqPqNZoWcg56QHEBBQzuprNuams3H56M5KusBQLdoeHZWWo68xXjdv",
  "key12": "5iQQcNV4HHNeK2rNE4WGaq1A1GkTeLKG45tz7c1x1szvNG5e4pqVHhtiiAKmmadKEkdiMqngdAcMYHGNc2ZwuAfD",
  "key13": "2C5AUq53Kg1WCdRos2jimo7ZwbRpAsEBrjAkvLSXSRmEftqPdcUT7EPQFDC4rQyKTJkBrm8WCx63vwG6mbyPwaQQ",
  "key14": "386eYKb8P7uSrwn1VQs7sFszQCAW2VZx4uq7V6Dd8hVhEWGRoAgzfxAoE43Zx8ZfioaTmakEosBxonGHACDWgnB2",
  "key15": "2AmpMUk3vVHkhaFWMXvZjAyy4DD843yFPdAx2MZi1KXDpi9FSGGhpEDdwNGX3zJdNfuDc4SAJf3bS5jULiEKUE8A",
  "key16": "4oVP7i2FYwrWK1rr1jp155Py5YL1DeKja92nVYRhK9nCZ6NVn1yF4uyAjQ5dW73hjyrMdGL2Jqc1ku9ARznGHuiV",
  "key17": "46h1KvxGmbfEU4mhJqXKE5hgNtdqynkNta6k2pwKkFeHDie539dbbPqfQjtmz4Ubnrppz8E9GSXKMGmApL4upDXz",
  "key18": "TmdG6vj8zYoEmNxQBCWyn5UgVuwW3VsBpFQqTWxr69KmUdKrSrEfH5eVMEf2Rmd3XT6mtx36JptbVd9ahWVWASg",
  "key19": "3bzJTwiEtaLJPWz5xuS5wPvTipsfToZKXDc8T5ueKjVGRp65fwwRhsLsBwMKqu8frozLiSTeLhGNRZcAoSqLPAZf",
  "key20": "HdCfdiE1TUfaHjfCkaJVyYxNyo7J479VKFoj1d2cGUNTxdF3jTFw9ML4Y1cvaRpVpUg5TQXPDiVehXuuW1vNuTL",
  "key21": "cX7guXWG8LC4kCwfmAzVeqwurDSdNcnF5o885mx1zewbxXPisw2e8WmDXemyiQkJGhMjPGGcvrbfedZ5rkWsh58",
  "key22": "3SfzbTq9Z4Nnj1gzaLXcn9Qjitk1RP89ynGmnGsqQUikgVyGuDtBhZfgmWxu5i4coYaQLYdfnQSq7BRfkWLv6L8f",
  "key23": "23bETW6kz7y9BH3phrANhxiUNF6W2AbmDrXs61WYnt72JY4MpEr4jKiP1oromTFk5JUb2VeJQ3cGQUt7KDUxwoZL",
  "key24": "3WKYgxd3uRX8uRxztd6WjA5ePC3PUsVGAnbJNw8UccXkiwtr3pZMEyL961eFHGfUEeRcu2DyiQgbbtvBEys62cCT",
  "key25": "QBpgqJCKbFVu2tkec9vUFEZXjTJxKdKEATjXE24MYDMFYH6DYq35hb4u2yRMVnCocVUMYP4UxdQHXfJCAyavip4",
  "key26": "4196cwq531XZMh5S3XwS51FDgN2DGRrPCYonV6HbFHvGtz3Yr5u6Tom3T1ktbRdqzjVBXWnow5tqswiQdkrcpb4b",
  "key27": "2SnneWDSqyWfRZcVHZTHxLD8zFCykXBcCUGuo4xTUScAAcFSUE14psojoQhTE1ccE98ZKGTEoSEsdFfXpYrZhemq",
  "key28": "3K2XckJyGhPbUWBZnGg9aLr17qrj3BzpV2CfAMNsBE1yV9nSEtu3zC5SFM6ci8xBwuqiQsSLP62hqfWQBNZVUbbZ",
  "key29": "3Gk9opqPSbZZ7j6LsQfcR8VmxwJBcJtugoeJYUR1pXSMi5JH4fsK7TEKi7ZkniaWKKWmdXJGHschc65KvcVkPuFt",
  "key30": "2GbzM1MRNm4QarG2hWV3iKDyAU8Rez3uDiCvKuCqAwk6ZN2zcHKbPi1qMRWNNp4TANHwbrNszWZDATKfD3s6P5Za",
  "key31": "2P7XV2Tpwxnmz1PrYy25EMpLmyDY7tnfPsZ4zmta5NBVanfewCWcSfvWisDKdrwbomdGLRyF8o2ESZAieAf2RniD",
  "key32": "4D1iBUEVdPFhDA2fw6JuxApsSxPppYtxNuvQCJ67iAk8aGGUaTw4aouGj6HScuUsAfZCMafGXAHqnYtNFhCHzyvW",
  "key33": "56b4pMXk1NagnzcUpHYM6qoWMAWkdRYZpE3vTRHmNg58hnoC73XxsN4AH33EL8EYDRZnXwCbM2MpB9zgbpEBVrFL",
  "key34": "F8vPyWs92VNCNbHXAoVv7WCtGV4Mf1dgq7M69hyrdsnsj2x8BsFLfPi2hJ3U9RpCexoFpaogXxUBVTci8UpTEru"
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
