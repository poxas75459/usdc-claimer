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
    "tNUaVd9iPrHHA9nHrVdSnUj7KNbeeHDRwdmSHezpUdXVCUGJD4imBDYCUYkuTezEBFat8yFjYbxxxivtmatS87S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DpxFHk1VS9yLPuj3YpnzBDP6wvwEoEybzw6j6sNJwxk3vBjFbnFaB9Kpi5xWY8AFkdsycqrmayMiinhL2z9yb9e",
  "key1": "sgPUAqsVy2UAYvvW8x2QvFz75bbQB3x2JAiGB4WbuwAwrEzgTvEqmy8aVzVR8vBo5rq17F7fYaP9QxL9v9GqHcv",
  "key2": "3mG7JuwuAWH2ZBxbji6dqMvk6UDxjP7so6JmjMB3TKAJ9CHVu8v23x7iKo4Letji3WNb6ZcdCCeWYBWDHSMs6rQi",
  "key3": "4hgB3PUEsoRbp5W9wTQJBGSahTam8GcgkPkdFEsncPsphzEo7ZoGsZ3uXVP9QMgwXubt6YGcgvWFsFxPfXNXrznS",
  "key4": "56iSKRrpumkUAreGhmrznjw1MsSPy5wSzCEPrPr593DcEDt1BNzsaoTMQ99Mm68CEx7SgMwBpHUFJuL9kgMxHrRb",
  "key5": "45eDabAM3dz2pu36ZroiC7SXMrtBuxAM6d1gMP3worNqdG1Y3xGPKypArBL32MtMnLiMRofEYtQ8x3TANZzX1kRF",
  "key6": "53fKouUaLEcyu8GtkUygV63KCrfqs5fH5WP8rd8jbg3j6DCeUsux78Cw1DUBTLYzogcysumDjwUmmftCzHMvAtjU",
  "key7": "242jPK8NMELNUPbSzAjXEeWCLseRNLy7zNZnBL7TD1GeJuTFuQtWd2eFEJ2Kao9D7Z7eumMJgHTFUmRjJG5LkiaK",
  "key8": "ZwGgbMv4fqfKxxAtG8MfVWSKZqkxFPw9w7yJBAEDdCKZHnmdVT3gHCjKMxERaxvbuwiRScJL893G8dE2EmEjCSV",
  "key9": "4YgH7PpXiJuXu1gmmYKp4cYz2PhhUFLffhCjvhEk7DX72RyDoa8BQpyMMP9PD7oHRGLBVC2Wt2saT2w4kAnQELgD",
  "key10": "5oHXdngjsXyignRRiF7uC9L48JSB2T49iRDDEyYnXihHmCML77VoCbtHiUUdXEuZMPaVJ2wPAUeqaDWqyWPUDVeE",
  "key11": "5MbBcB9HMLXcNw1FYcNfCgXtH4kKNUqRHJDfoSEPAMBhNwoe9bxiMRheDs1SfTExLo5y6knrSyvAjhM4QqByJquF",
  "key12": "BU5DNoVpjCxwhW9EGxcXMQNGjLvhB9v678McGgbQDFNbU72FBnUMajmGRJfivdvVbrSgRnAR7hWGy2yrhQAG8pf",
  "key13": "4v6ZwYk9xk6cnFVzUJ39d1wmuVw3D4b8xN2i8wrm4g7krFTgKxwY7iAz9czHMGzPzsZHZKMsQ6p4uDdHGbzeuk87",
  "key14": "4uUXTmCXnXLQH2GVuh5sVEToYddYXhw4uvU4uAicYQQfM8VeZcsz6jXbpxF2ye58Lew1Cea4KLeSG66S3LtaacKd",
  "key15": "4Jz5fCxuY7MHjKPdTtz1wBsvZ4tUpshJ7aB2nPobtPhTt6zNtr2DpuMvjoNVcn7MrwtdWMrPiz7Lo3ZK8zt6eV2w",
  "key16": "5nrvs6UxCKSsAda3ySmiaGm6Ytbbscm32kKBLVWKZrF4z3HJAhTzDimKfArJDSdNSBqJwvNu4aJ5eJMWxJNfYdSf",
  "key17": "3AzxsLWgfznoeXttTyM8kY6ctXkNcfaqzkunUorqGHuUsVW3BhwkfP5HtX93pg6KFZuLE7yFRPVdPyaEQNeZLLkz",
  "key18": "4pyiaHVPYNcKyw34E6Yf4XHYkeHU1543ArCDUVDkCcVAayAAjgpVjXC5xeiMgDRQ6BaH4T3DS57RTjCAohZE7JD1",
  "key19": "4AiLi9hVAJBGbdiTvxDvJ4TKzKADExpJRJYweTMaV68fzfAztz2BSM9bG2Akson3LvxA88sdubDMkkU8RJMFRFnq",
  "key20": "2d5bS69hiRtoYB8c2tPQgoB1RzyBRfmhVNmHM61CGwaxz51vhBS7NeynK66SRswQE3oMSqDPD7g6BCp6P7sVzdQf",
  "key21": "2A9SvfKZG4FLeWvgfagvFDGG4RhuXpoRcpCY9ZB7oHAFoW4JevPFnbhV9dqZfXyNddLeoebhw5zaa6xUATkiLjHn",
  "key22": "3MTJkVmwiYD5HZiuRfzD2sk3qZy6svHG5MratDHUQKyKuTrmhvnHUGkNuA1sGdw3XGKLutQYfRfnMHTQA2MHhsX9",
  "key23": "2J8aKsgcpCmxQPzh3tNxckW3hdbM32WAoSwVdeqQkHV5k5PpnCtkQoFCTMXz4TJmXmRgxghtWrfb2UwA65iTuTWX",
  "key24": "28gafVL54QNGtDa1F95Av1iKHHnhvTDnowmDhJDzah9YVARb2M4RZLfiKq9DQ7WwCGv936pzM66gxR7acMsSh1ou",
  "key25": "5HsX6VJmvWJK8baEVuBsnNiCmgRZW8qGSQ8ffjj3wR9LnPq1yVLhAQsEpmi2sMkps14bn5ZH1xmdRis8YSSCUgR7",
  "key26": "5xMx1W4DzUHyWnBxwXvPfxdLJhnfMPiTervLno6E7UUpHLkiZogidRUJsFT8Ss3fGxhkPTzsgLdKC5ynCDjJgXVu",
  "key27": "5Snx1jB7pfxY7DRtvxAJDRj4JRDqEyMupm2pHju5GYpQ7fJDMPrebe2mqUUSgC7NXiqCaeFFmnJ9wtSJD9BLypRH",
  "key28": "3zAgroeSLRaR4NTyPhZj2pX4r4dtgdcXXNKARatUaRYwdr7csthgA4p4EGi2JxjNgGLxfjz72Z81u365ret9RrdM"
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
