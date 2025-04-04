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
    "61C7UhHdbUXdYgLNPakFBxWr3XA6NbXYRQAopJpNytFXp4v6WgEBHKeFm4cMRrsyfDAh8HbLy4LoHtb8s3xdRK7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fgCDe8z8ecoGbJyKJpx1gFWr1yBUFWmDjT3ryRqymusEDpxmG25BgkqMK7pwbm8pb8UqwMAFxM8KmziRPLHNS1u",
  "key1": "KzgTHMV8M3m273R8VLYGThWKcKD1LYq78LbqsFKVxV8WKoGHWrferKAUvNzMJjseMsGJ5gMQzE4oQaerR9Ef715",
  "key2": "3zYKtKeuBw1Lxy4N74aYpWT4nQoZUwEAjuTZT3QsaeEcXpEyTrYeCSPHhFebn1ZP3qZUqFh5exFeuxFneEUBiHcy",
  "key3": "2pFsifMcgF146sRYwpPWtL7jn5RVLBcmkp7Kf9eggKHTwAKizxPvkirLQYb4jfFkLPU8jWjRd8RH1FFnfeB4ZkVd",
  "key4": "5fHdehnV5Rr3zRwLmg5ZgnCMWj1c1oPAQx5G1DkU4foqvCRJeHSz5XXD7y43aFcJtX4RS4m3Rxyt43WxBmBYUzsn",
  "key5": "3qApzUjfHE9PanJuKd5vDWXQQ4PZERbHqZGABCHBoWx27CxbVF2GTP36aYz9eXk8KUMGcKQiobSdYPHWiRx1GiSB",
  "key6": "576hGMDogdzCgHJX9u37VbrzcMzkfne2yWm7JbCatYAhyNShKhXxKBjyJQXW5FGZPQZTWUEFasJ1hmNGRDBHwMye",
  "key7": "5g1K6TsPPHXTnv5XiPBcjjGPZVcDYtzYsKuKMp4JPDH6ymKjHLMqebdydeucetfoEP5gPNMnRw3crXsYBSD4Verd",
  "key8": "4dVdntLUgwiZwH3MuU6wZfE18133oZ2PJazVoApPXW9xUpFWbdbN6VtCKH2R35i5gNNUqcJ7sYuMWfvN51abbiQy",
  "key9": "5fWNhFdgmDbrdE8EmUqPFtp1tz9MzUsLJ63yPvjRCQfh9rmAidpTDZTRiCj9vj3LvDw2dxcaRPXpYt1UKxwy1CGb",
  "key10": "2fzV5ohAfmNTAu8edVevUNQbe44nnCrYufDwZCqqeZjP7NcSPuZbo88CnrwXJ8XqhkyJ9r6LacNZ4Jygj8NmY4Ab",
  "key11": "4MxHpWoS6a2sHWwP7mrsPrVZ9rZtpe3KftGMM2Puo3BjbhD9hxW3NeXcdKAqJruN495Cioo3G1bT755z9kVp5dAL",
  "key12": "5DnxbVBTkW7fK92y5yEtpHbcY4v2kqi4m5e7M1DzPoN28MpcMU11MgkgYZ4q6gDVWcXr3ES4ZRHzT1zh33xccuxS",
  "key13": "4i1tmapG7WY56YDKkUUwe6kwNsrMXtK5KciFTVPJh4hWWjQuoNjtauSMdb24KByCe1ofdjdqnU9v76KQF8JmmZ28",
  "key14": "4ZwoA5QGincnJPFAPSpEQQFeRFvp5rFFZgF3chR9TcaitJ722MGWY6yLZ6gCKQ293optHdGeLDyCeeJ9EoKCgAQS",
  "key15": "86GsFdAwRa33X1qVyPfpjyx82zRAa9KxEnHEBy1CrFVQhj1NtNTYFFDgpiPNAXGh7KMbJvcFzjGEnwpg9qS3cDp",
  "key16": "5H8MsBQCrPWVPxWfyrnwbQriVwYu21kmqThMPQTNFTjFTc5zaLVY4ej9tdhfQKy4eVLZbAykw16JhX6Ai2LBrUuh",
  "key17": "31HbtJTtX2A2jAG8KyXbCjLASNw5TgKExLTTYMd7srkCf9FMe1FSTyvSu3ypTorLxBNLdtyYmKK5GsCD7vYkWYTg",
  "key18": "5PjGUevmNFFLdjpmP7dLpF5zMq7sUCpUcRhcNd6jVjq2bGAD4Nzk2kBN6FJbyWoVgY1gWp5R5aivrG7gPLeHeAvu",
  "key19": "39k7Mv6aqqeTjgDkSBDE2mXPHJ5sgFTvSVbvpFy5PBB7CssqtYRd4biAFZt7twsWkLJG9mRNy8GsdxWaj9kyFeNi",
  "key20": "Jm761Q3GqsqGf4aFnEnBX4AzLVo7C4Qoag3wyRX6nsTdeUuvzg4V1yU92KDu33ESMpXS9sUuDWEfnL36hg1ErDh",
  "key21": "2u16oT3snv6jfxFkSJAxeY1HDGmGrYz376FkJe2EPBy85aebKRqcGJDxEsUkDfRZyBhr8opfhHeP5n4UdV3fkhM3",
  "key22": "5BBb6396dz4CymcRcEG1ogoSnAAB9uRe3MqC5b1wP3YuKETNBGnPCUywNLZCu88HLf9C1YHAozuHgE4gxCx82xYs",
  "key23": "5WRjMhHToTumeZWM95qnLTK8TyqbgJqhCY6uT8Wzun2gFdXhiM1RvUMdS2XascKdLeoU2d9UQR1h8maEFVrf49WC",
  "key24": "66PCQQJSMDdCfXKzz35EkVsehj1jv38qAgTJ9L7pcU9MQkozQwYk6miNzLfeeVvft6y3bg5DLTCUJ53X6zN3Jnkd",
  "key25": "Kkm5yXQzUyei6sYCjQWciyaZ3R5gZrMTiw5fcoKXkTEK7hqbLxYWBeh4qXoX2uLDC8pPYxQQZ4WhxfsumpLUiqA",
  "key26": "56Az4p6a3ffcmMtKWUawPf2GisvQY4Rr1x6be3aXidMDs3x4CHrm3SRZrH1R43KSP6jdP7dPyMvwUxjsXBJrXHZs",
  "key27": "5ZKX6mJ45PGnMPZusknLmboFzFuwFXYYDQeqMvU4aKb7opkoXg9sHFLoPthfaXz3Lo5NUK8nvH6oyVvRq2QU65yw",
  "key28": "kWSa8fJxgB5VthYnHHX1Y8AoLzh6WVurz2dJDCUGvc4mgRXK2CAfa1xKWmBpFg6bumgMZmp1dVyT3cXe5BnCvya"
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
