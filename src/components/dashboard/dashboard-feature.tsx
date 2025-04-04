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
    "29M6MWeLF19GwyszWKJQiduRQ4LfxqVyar2AZKMLvNduBM1AmLEaV45tk17Edw6Q4hFEeCewox2t7LE5iJQnJEsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fYdGbNm2MXycPtd5GLmdszr1mkcuLsiA3jYanQ7oe47py45buUE9CGCK5BzdymcPxis5CeE9Ui9wi3Sf9Y8crq",
  "key1": "3Pa9HQ7meR1pJF7UVx28LHmtqt2GU6zNNyVG1Q4CU8gqyGtsZuDRik3MBcs2yvdfGP7RNA4mp4jDxjbxMivRRjbN",
  "key2": "kurHfZ8HFiScXHEQDrkXCLe3GPPVC7VUXYaX5rMRyL5XPdGjUXpUrGtXgPBJCGy4JAkPoKcUrh3XH7fobRmmCMy",
  "key3": "T7cL5W8rjHJdQVMdVft1bkTfAqkQbAbHUDEygn231M1mpMsGN3aFvJ8uUB3y3LzJmf7VqVuEjCGKbabucpwq6dw",
  "key4": "5Eae392GXcpvZt9NEDq4mk97Hy3D11g1tcT9qQ5gQRUZYhd11fACBd6TxxENCJpeesPAkHJ6R9oS5LSZkrvuptva",
  "key5": "5fpy53EJYekiaPiskQqm7Ky4MyvLDLj1VVB1UU3SDc6DQr55AiijboVyHqTVTeULBdUB7ZqjoBDbQGVtb2z6cNSB",
  "key6": "3kAXV4r4CwRshb23BcKS9itcoK8cKhGg7amKKkpfiz1XaUeuJAz5nc25whZmDbW26fWBu3LfXeaSDxVT7SisTzju",
  "key7": "4FRNZqzxRdDHW7YuWbYDUTZXQQuGHEPR7rPUJZdP1beBxQiHvBcG29VbFcZckJSAd4J7YNw2VRac1PyDPXyEiVPp",
  "key8": "413TkkRsxSmhspMQYAJmBhQFTjCU1Leu6RbNN2sswxYye68b1ZrH2D86TGSkTwLzNG72CZs2P4ZX9mMN1rdPfxNT",
  "key9": "54rYTNnR1vSafDfVSoW9XyAceF6Hfaw3f4Vw3zxHydbztqAZiC7vwLZFNiPqfQzt8nJytnazXTJjtnG9pwttDHE5",
  "key10": "CzyHYvZaqtWMRHmBjVv1pf7MGoC79JfecRZN3aKoYTtuYA8qa6z9sebHsgjADyHr6Ti4pLhmDSmcmmJes2Zo9Ty",
  "key11": "4Ns4qcS24VMFoc7hktnMwPcGHSrtxEwRDQqEEYJRmQZYyBDCm5NVLSzismWyan8n9fQSZMhdXQSc9KfuMTUm9AC1",
  "key12": "4zeo2ZgcCDK2vkuyJMMMGc62pshDeWcQTooJoAHyzZFg4Y1Rj7ffy18ZFGesj86iX2NJdVvRP9zjhDEMr1KJKZ8T",
  "key13": "4XhofzQy9kiugue6rkCdyCK3D56pLw3JSK6iU3emUxa9aGnPgai7qKYAiWHuGt2LHVR4d4yi8UtMC1z3cf2RTprf",
  "key14": "2MJkFiRmKuu8QLXHbVnFkCrLspUiVnkpudRLth5257H9hzUc9WtYUkLZvZ8SiwGN5K59cpkJNggCRhAcumb1DhRA",
  "key15": "2honiKFQqSMD465MLHzKhtZMRT1gsezDfUBjyCfwm3T2SvXZz2mvoHjBgtCN4v8YL6RjSZrxVRoVbNX3KkLg7qXz",
  "key16": "8yb5q7PnjPRZcxWK8h6ZGZpcftHEUp5Sh5smv42p7ZFSh264vXNKznAV9iLkn4hVkbS5gcyDH8ZWVSYtSLdUisX",
  "key17": "5xKR2FhNynhC2y2WVUu64Rcif7jLbJhfXxY2ac3EMERw7DXZEWStSbCD8bpaXgrQXugGAe1bBnCFkxe42uVs8y3a",
  "key18": "GbywteenSKRSAU7z6p2CxB5Ak52MC1BRTphMzvPKo56sKgXfmVKvcyG33AV4C1iVwGR85pbhQ8dvqgTLBLXzY43",
  "key19": "2okt31JAVRLzpxfXVJojq8GrXJdpJDZfQ3AkBVQdLZtzXUVMif7hgcN8fizjYfWPjm6cmTrg9MJPyyPg99ja2Skb",
  "key20": "3oQTYJq6ojh1RtSf1oJpbpjQsQZHHvUZTEzB3xBG7dZx8Qg9QW12fyYgYD26ytBE4qmwvjsU4pEozQsiuG1z5YMU",
  "key21": "66LFkxbw6Lrkzj2WieMahDcd3sDgMjEaPZe3C56JaZnHdvQ1KrEpmoNGM1WuRx4cji8xMWyKeNsJPQ2bKE5M7Hb8",
  "key22": "2abJbU8YPe4kYYji4qn7MrT2dKfMKgZiymuGtqk51GQPXbRjLzbo9p26QBN1cuEacxo5LMCh4nki2qKBL5XZL2uf",
  "key23": "2vBpb6HZsq7L9GWAtYFyMwE7F6xQu8JghKAf4m17kJfrbwxGiLFP4fd6D6WjqL51awt5uahNqTuDfwkrZXBKKmk2",
  "key24": "2zeY91pBen4npamGxMMW5Y4C1mBzN5qkmvBAkTRmurTiecfo1e9svqktUUoWGVV4CLLenRMKPw383QPGgSV5zGr6",
  "key25": "24w2k2w7sJAb97SCuYGkUhBmzQ9wKnqmcf5vjTu2SvvnKhS3UcWiEnjwFeCxkUhYsvtpAWnLD3cgqVKBpiLbhzWT",
  "key26": "45XT9xFt27bER8LyEjqz3WUxC6ywVcN4DY2EWsEgxBLE9vWGL2gbakcrgM4wMqpTkKYKRwxmwJZvxdfkMiBmiCPs",
  "key27": "5fVfVNByBN56ofBJcHVXKDZ2rvDZ9SvnNo9mf8j1rAkZxyNWdah57uG8NQRd6N9H47WvPAsj4nMXQiDN53j9f57B",
  "key28": "4Xqtpmy74a2qFkukpFdsDy3MqVRTzPq26wft1vKLwA5FtsKezPWjHJMkdjDzAcb1zzgQru8ayvYf7gxnxAzJwQ2U",
  "key29": "4fngsnJZJGaVix8iRVjzNiv3fDGccsxx7c42gWASjtmoESKWgtBSuaK3yCAYhuAzuJoDzBB7GBvKydERaShGYhRQ",
  "key30": "5zgmcDkZkJT5iWhU8RpoD78bmxodmhfEah7UxVuV9WCTfnwBaak2nq2M1YMPoHtFkumd1T2U6VMsN7Q6azFKSbcs",
  "key31": "2YuJhaZ7W8CTnFKViCUu1AMrEbw2ApaX6eDeRH4yCSw3sWzbvnLqZdGjCcjUTEaAxtrdKoi72Wjr9CQSmEKHLgwC",
  "key32": "38XxCDpeg4DkptT2kir9UUnQWfZZHtyaVSzgFMeorhM7ioTzUPecNaprDg5JacEVsxfJbUkQcmSbZeZ7vh5WoSQz",
  "key33": "57hCUaKWMbFegRG5YgubFZaqrtdbiZgZGp7wTQt1RfkhQYVgWHpjh3FdTSzCrD2c7L1ryfq1w5HPQtSqsxQWbSp8",
  "key34": "3ZQmWcMwBX8he8Kkp9Gy1dUq8XpEcDHcKrNcCTmfmz5eDgCCMWtVXPVWtTDWZnvore5LL22Ap2ErSVrxsD5Ti82q",
  "key35": "tJzNRgvAywh2Grsc61HmqrPYQ1mLo3cJHyeM7j98a3EbRAKw5sSkPxWjyWmXEwLCThztbmLAByjkVu7vTQSTQsK",
  "key36": "3KP8qB29Rq25aw1FQBvU3sAafe3fZRCEMeb1ZmDv1JjZtmdMMBaMt1CtE4w1Vc7AQ7iKAzamCMgfAcmQpPiHRzq8"
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
