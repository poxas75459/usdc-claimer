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
    "2JVn3Xi2tH1XnoXjTwogehhDDaE2yXh2hZthYWEaJFoCzE5Kav6DvsXLKvngLuaLRvmUWpNVbqzhaVkZzLqVBXnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "443xAY2spwaWN13V79ksS8Ca3xjxsq3HqCZRRjN48i87nJPMYiQpzLVR9aGXBWzbTHAFaPcCjthWyhMhvW4KQVKN",
  "key1": "3QhFh134RJpi5nceNdR7GKCpJaWBgJJrei9HzJyeYrsn6gvifBpw2TKXwRbKjb9ja5PMNUBK8xD8cVQcVbyhJu3w",
  "key2": "3uM7K4bUzor9iG4owu8pdPMKsUrHYe35z4cSPFhPF8Urw9bAED3yUWbFmTw4bttui2GUDNu6uDr6jyyVPhed9g38",
  "key3": "54SFkPtPKmhG9faVkUNii3dEcADJ1QorGVgc1r7mKrjDnNcf4oX6afqiLBMYrt8QSPnsTxBoTSKZADyWxpyrUpkX",
  "key4": "GYaHmSfvXtBrobpG6Z2R81VD2XnJt4TVws49q9Q2rvDgQYgJ3AQ1iTrTLoARthA7tQLE2DbVhb1bUbKBESiEALB",
  "key5": "w9jrkmAaConfMKRfWt6dXBLSsMcaqLispgEiyvy8dKyFXceXfXPQYW2tZJMiD5hdoYcRECyNtPZMPRSGfkSkSod",
  "key6": "33xsstPRHTnQwfMXVgVaD3xQXZakXr7qAFzatC1b1KHJ7QhHD8GuvNAc1XGGipCf9iwaqUrgMrDiQqg6FJzhpz7t",
  "key7": "2r3ZjgQ14z7NY1AkqoLiZpumKGyrsHfC6PFHppjnHmG3sdyiJCkRh7W8mot6c29ENCNX9s9NuzCUXW8MmfgpaW22",
  "key8": "ohRvPdRryrcWsWNKKH2XQCQ4zmaWxZwZ8FULecoYBWB75GjQmtQQkAFqoDR5wrLAqq7sCqKXEC3iwmZnCDx9VGq",
  "key9": "523PHpXGBvfJdXgYtQG4DnLpDucjVzLQmRAJhJyE63sg6aWEn12ZV6v7hpVTtZeqmHVPZnG96TCxx8uTwndYLEGS",
  "key10": "2pdzqYBe1yVTeFqKcVHJSWvLjrJgC8rMMdwWZXLVMyZqJpcgvqav1dgKdAGV4yzeuBB2weArotbT8UWJA9zDKeZj",
  "key11": "hH8NNGBcXUX5VXv3Z2s8GonE4KSuNsWYGZ4M3RJMnRfV1N851Anu1RnxDYpBQTZDcEuiAH2C6ZYNrWQzZKqwNJA",
  "key12": "3bTATPNyxNRr6vctKb8Nc2G46PDLrwiZzVLTDjPtKrwxPNSTELBeC3AuYzWb3NGunzyCPBQ6Xv5MeHUagbw3K6Jg",
  "key13": "Cj2ocNruPUg1Dd97PmNjtfvgH7ZPUoFx8BSShCjn686Die17qyPgTsCH1GUeVavnMoEhoK3uVptaTvr2W44zVfk",
  "key14": "4jvhvcTbsJ3FBy51L9RG4N9E2tu9KLca99K7zbTV2DVFXnNPUsuLqivLQVeQtWsrHV3gfU5DMDYgpu8qrbUvi6CQ",
  "key15": "4nHhPzey8yeK8gSwF2Fn8H5EkV33m7u48WwsY4fmfufRMeKosuqNAh4t28BRjbk8gCtAbgCuKB1VrDUB7KBZ2CoS",
  "key16": "4hTgvc8QJZss3oiLuPmZonNUSBJuHATrBca9rJrFMdF6wKKfnv3fX8BcPUUjhzpNT5UfSgqBDp9u9dPui8q3Woz4",
  "key17": "2fEH95XCgYFTLs6SxEcjdgthnM5HPcEseFs9om7TTx1gptMjaYu1sskouLy6TH1zh4a7pxgbTp9PwTG8XVMwB3UK",
  "key18": "4MVTZQHzMCD35uGRuZ276PHA8P2U4WmKk2GLVwhLNprQQxHY3sVdmgJBYBhm5FgRaUm8YASHYSQCHDpDybSfHJmJ",
  "key19": "49He3QuXSj352nzFTuxmJPgDSTBAetVcmVp4DBNRzrTJbwvxX7csGYeRQeEzqVq5UFsjkUELweTAK2ZzN1f79G63",
  "key20": "39qxQTLBbSKmnNbcnNUUHwsEGYzTBkULth3o6qLNaNDTsmbdEuePyDsDMhtpu9eDLxrELjzaJYAHvW5vecMcM4Yo",
  "key21": "4dPCupzKLrHgyPXYd2kkkj85Uc5aFL2pituUULjfpfd87fJ4Pe4BkLmrsKq5tAPKKS4JuwptarwdLXwTr6Zc8HMR",
  "key22": "5oegbknYhXvfyeGzRoH7Ssh7jrQytDtxrezhRwUcz4PFFRrtGx5p5RPbVLfxngvY5h84GojdKEtJybLQNqa7zQcr",
  "key23": "XLYoryEkMGpP8uVgkhVv3xC6Z6PMb4nCpr41CotzQBM8c6X39dZY51Qtw6zsWb1jLUeYobrECrSviHzcBhELKd9",
  "key24": "3Jm38dcL26jCAyjjXceZBECzNhrKRX6g9sVgpLvG2Kej4BApjAv6y1SexK5vV4LZNKEffg4EGJy5ZNMxTfYhkaD4",
  "key25": "4MeWok4RqpzBAutHtcxHTW6kKkguVxcaAMfsJcpBo19wJHMSxhxozayfzWy7NFEzZEExE2rQr8D6aDoMqKkgjVu",
  "key26": "4q9jv9kF5CTg6onYNeQxY6JVAh9HTDYsDCq5WVaKxsnQgk1Kj3hbcnPVxzYjnhirSEQHgVXdmNm3m4DngkpDRtzH",
  "key27": "5udfKXWj1Cz3DKsHKKoE76YFpQhZZrCESHErmFEQx6pAkATqjuHQgikVnvAm9wMh1r1SyXpR9KKEptNwQNDpG7zF",
  "key28": "3PPG8fZ473b8424xa8qV4qBXgQxUbKUfsqvKs4jhFdg7TpNQXxYaRdHB889UBzAgs3Efxww9ZSFF9kVht651p3GD",
  "key29": "2kNsCtJr2ozBAgQuGv2QHZdKZoZG8EKjybYExW9za7dZ1QQ7uob98ue1GzMciPEwUxvXpe4aJCEXYR2cosThquX4",
  "key30": "3hgkFHP6py4PdpKmYCNby2P9UMo6Ns9fui5hrN5FDX2ZAU1y4BwawvnhbPMJgyWPN6byCg95BHyfPqscSHDF1mHP"
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
