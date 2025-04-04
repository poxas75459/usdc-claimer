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
    "5TMsFHZayHxzoz1nazKHHiZmDFFEg3pMxvsUa96LgBKqJ8xDCqeRKSq6jZegXPbYzsu3f52ULF5Ao8otndJMxsYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21PGJzNbKNYQHPdmEPeZtUkxpzMGknwQiUCBYmYNNat8SdNE7wEJbYpFomvVyDvMW8EwxKVKPaEgokhYjWABKg1w",
  "key1": "4GAwfQztoceCRyvBrNeohmyyuKJN6PkZ4b3okNtgkzBLzHx2RJsAWzz6wHGMgqaLfAKVcsunRM6FYkje28mNWw7P",
  "key2": "qhaUJK1rB5tpLZQ313mTca8tAns87z2EHbw5ZFgRGg7rNVCrJpEFRUHvz8jfG8jnkyUAhkeZweiBQWL9SE59dks",
  "key3": "xJvz1uL7caxffYy9juyu4HbLvPVGEdUTMaV18Px2W6FgBTSLhxQNb1pNjrE8d5U1xJSVTU4AKMVDTz3z5j9VwPZ",
  "key4": "5qazEsWzvopqJ9SVgPnDcedWoQuDx6TCwfCc1LsEmGZfQKi6jjEfhovQPh5zQDhPap8GNwbsq38P35zbX929DQay",
  "key5": "3vzt7g9QML15nwi2sMDxcyhK7bvYSfP5B2gJMAp2YbjoJdtLmr1zisQDaW2NAZX7L9BAGCxAn5d2NV9jGGZZAvDW",
  "key6": "oZ2fYn84zvR5RyeabBwwwPjShvNJHJUtBLr47fsLsLwmFfTYNpd3pdNRshRhu5wEdMXCmbRZF9X3wPNjZj7tAXX",
  "key7": "2gmJrG96oxq7kyjub8uFfi6qVBCtCxqpNZ9TzG5EADdxETdMCmvTfjUtkVRqeLzb4xZi8y6VBgrRxSJU79EbiBHQ",
  "key8": "4ByEEuVgm2ZJtghzMxe8zZTTUfA5NKR4jrfhCBmte4894fiFCgJ2CAdvbyZhXWRiDFA5DWyWL2DicURWrt2P9EB3",
  "key9": "25ZDuEM4wmDGzjTCvn6KRNfyFFDWqWs3JTayZD9cGQUrFa1F7Zuv8jUpHJSxnc9VohbAbWwhht7D82vkpv6muU2M",
  "key10": "1d9xy5hf9RgMo93HjkBpnkhFth59br4if9jWCniFjT1AGuAbVPus9JN4FEMKkNNu1zsEU3cEo3asXuYYHnidyR4",
  "key11": "3jXbjQJaas3U67SzJzs1DpzBaT3UkBKACiMUXGBr5rELWefNva5EjFJh4n3qYRJ7ovGje84UQdjV1zQXmPun1X5q",
  "key12": "3xVYNiJNJ4Q7svzofvZJt2aHYg7rqv1Wg4aGFyW2SpKdWppXbFngofxFN1f1661rEjEvkpW1y4wxyY1XwXLb2pcZ",
  "key13": "4QwT6jgrMx8tjELKqBpbgPbHky3ZvsHnc3jcoUVB8WtSXEg9ngn3nnTtG9VxZUPUWDgxeBhBU7fQkdwZjdfBnLbg",
  "key14": "jq2n5fwRYaWLX5Joi63guSchwA3nfwZVULrBgoR44i92Lq8w5jy1y3mtAirvuYLmAqZDP6sYeEnqYa9xf7KW3WS",
  "key15": "47eRGabfQpvttZ5hKkAV3jaKmFd1FkkzgKBKVhBPtcDdJVU44zL21xRyrgZ9bJokdzaNCsDFaMxfA9sm5XVrXjwH",
  "key16": "4oueAs83i3KKCmYwTjZrRjctYLHmY28wWQSWQv8Dznm57WXxnpw8NunX3KuBoFciPe3G2pKFecWMMFvATH265R2n",
  "key17": "a5uK8ZiR3CMQ5VoTMC2CB6bNi6M5eXtgRGbWBF3bnhVHr77XXTgW4TrUMYx6H46cp4uE28Lo4S7EDPuwvMRvyBN",
  "key18": "3CYU8SRfStrDLVhCPTrT4xx535Dp36BwBDR8EM7a724tR9uHQTLbAHbdfLw1Fo8iBwx7Wg3uBEKX1KjCfdFm5y6q",
  "key19": "62AVKYXfuEvN4CPAe4rmCgThX4h47Ks5ToGBzPnGzcVsAtx9kBAeEmC9GxrrrHQ8D2zkMQ7j7sH6D8Jmrzj8JeeF",
  "key20": "ae6ocdWXS3DcBWRWWqJgZshvHj3pFWFZiR2ArAuzSJNsJZ1f6TBdCmJaPfotuZLHTnMMpLR54Nuu72DLyh7bWX1",
  "key21": "7RYZRKATxjThpo1piBcGsZ9rQBttAtvT8z1ykZ4ozDiJQSqMuCSKtJARaRvX4XAKR3qLVUJLoekwbuK7fcJHidZ",
  "key22": "2P4zMar8Rz8Gas5bhnGScYtQT7ds6uTSDttStNJvvnLL51d7tXGMgicMsmTQjhAh3RxbrvTEqye4R9eqphaVvKnM",
  "key23": "45v69iUk1a44h1kah1FEKNHQFyJAyWMUL9StrYPL27mQCQxjQkrdAiyYVyTKJe7H5UjojbgbXQCVVjE3XrHtx9Sr",
  "key24": "51ZR1aewjgsdfaCZf73cFfNz39TtdxDizEhckTv8TFonCsvPhbc7CdRTWtTAi6aPxH77auyNJg2bHdS9EJ6udHJj",
  "key25": "2KJxN8WmmZDjp7gHLuftkHbKpApBonyn4hdhTV2qovaA4kvbH44cC6VNntd6qHfqmG6YbwaPmHY8Nz3GhGrECJHd",
  "key26": "381kkEgJMa9xJUuuK9CDmxjaLuTMENRD28Wb1hStbtRtyBCi6i7P5qasZvKs4RH1NMyGFLcw184ku8zp1sFQppoa",
  "key27": "3TTYUh3KDsf6oMHzkXRYSnceXoSsp96EmkPYbbSdpMP6iTESqLwCx95z1WdeskVptW69Vqt63feSZWMW8Qw71oLm",
  "key28": "2o12E7ooLwxWADWzzLZ5XAFSuPxWcSGEUcpSTg626Hkxmzc3ZofV2ZkeFeLDrDfBXYCQRQgatxffdywJuiw7NE14",
  "key29": "2Ec2keMyDSBNK91J2kxqfC1Qs91kQrmYJvgGv5uf1yjj8NcFVnqo6jtSeVPfEP9mUfv5gaVBc3Lwkic8jcxZoab4"
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
