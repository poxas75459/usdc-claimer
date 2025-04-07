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
    "EHoSgqYzUfNssFrmWcKnJM6o1hRVz9rT3FCutxzF1LGCXgfT5Jvax9iXd6t7oYzKTJsaH7KA9KMUMqAEiStDABd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2pjkcHqifv2daKRsHzyfFmyDkDpdapqhK75tX2AyLFb4NDRGGnufJGAPTpa3aCyGqWvpvJaT9HiRp5tmkYM8dP",
  "key1": "7w53J3oKePVMu4Cpz6p559yXhsqXcNuVNWPM4q7W8iYGMZeuduPj9rM36NZZ1Hnp7h4KftnxFTt1JRGjpVrQZEM",
  "key2": "vNNvbXzPPgheFieNAdeUQRm6KgmT5T1Gc4BoZPFfPugYo7qwd1QHgAxmsTsCWSwNxTE4VFZREoJhnhFTx5sikew",
  "key3": "4zsMhUjfq1sy2HoJHcNorrRKz16rup4aQQLHrzxUyNk3r1g65gGX4tRgedt7Gigj8PJ9iRUUzAa4S6HZKVRNQLjT",
  "key4": "4XQ2uLNkR8nHz66J5HZtP7WJntwoWxfriR6ohcNAkEo6jHbgpBjUjL4zeTmvqzFUE4c9VgQBRiwCZb98k7JhEsxG",
  "key5": "zK7Hb9Td6pkCsqF6ja1bF8Kwc4RTAMG9zBVw5wQpBxge9FYHL433Fm4MUMZWfwgoaFK8X9iQ86HoesVSrseTBaV",
  "key6": "4c78Agg9sty6vx1WhgZUsKDdFqi58eevWRAx7XFuN3AtMSps3vxQUwDKuDCJLd1NGPq81rXEPC1186YshTJqbiNx",
  "key7": "26MhBtyHbuyWss8Bj9fqnWFswdLk5Ucvk3597DBzmT5yDH1Nth6yGvKP7fo79Zo1cVLc92EgwRnGo9yPrnSA9LGT",
  "key8": "4PpAujaw96qx2jXayD5gbmhwbAjZSjHPwYAbS2bnDGWdQJP9RUz4XC529caoGxFaRatSyvyKs5i4iTevfRKU6hww",
  "key9": "3ALmQToU7M5YiAKjxXme1ysAg1SvtSENASREFo7ru1HVgmX3BRh9YJv3hA2qhqEtR81Zt6hee593EMKVev7uZ6i7",
  "key10": "3PaiQHcpj4FfbUhUHYyexg1BrBJ9VbBFpv9b8EKnV2Ac7cng8q2kyJpuELoxALaXBvSNtgKJDUooMpqVCRPzLzJj",
  "key11": "5sLm5PrGTUDpU2wT7TwcaVTZ9HWYoa7CmXGyukMNnNCNwMpZeCzvVcBxV9W8128317BUHxuNd2terpYyno39n4DP",
  "key12": "2ze1BetYVD71RpjLr1ReBAegeDbGLcotM8dxoqwAPqunhdwCrCZ3wTNvZZpk5K9XLtdKVS2CLm3r7cBg9DB6ogt7",
  "key13": "3tpookJASidnN5cDFGXF95EZ87Pk7SbQqcJAVWgD9jWYNJU9ngeN3QyHCiAbXmXnRTWHtwqEYpBP4MPMrVEUComE",
  "key14": "DEph8sSJTmu6rj2C5C8gJEhscg68nufRjmq18kDMTUzmpCsA36VbsGpPuppw8uLFpGy73hpaXiiH5MzjHegt23P",
  "key15": "3u6ioeUDbLneSQxr3XCgoBc1oNFdEDDDgDsu7RsA1mLWoXskx7rDmEVXVXbtEbiLTmbFhTvwShfLNoHL8PgW4ZFC",
  "key16": "39vxivdxjbAtmRbXzgi2H5SNoT2CrWUxbsigo1aoqvMUthdywumftC5GkNkYwbCRUh31uSe4ny31KNbaF8mAN5wG",
  "key17": "5GvfTVuL4XB3snUj241uKEqAzkZb2eX7ggneQFd39gFCUaf61336xSiHV5ALzTbjrShEqanaFHNR8rGi8TcwEn1S",
  "key18": "4DdWKJQ2ngsnFNcoHmpuV1Kh7DqrcqYGxFCcr7Y4Pr3YZYJNH1tPskGTLRBjo5uU7pvfvmUCgri5bitb7R13PxRR",
  "key19": "56EpWE6vrctFy8XmqjghNAN1CHQubKJDvcdEgnj8TYmw3jhJWfajrScUzomRviqUnDcX1Sijzmx9rsXPkw9ZCUno",
  "key20": "4KiviQcR3AAAGL4JKAQejyXW2z2ypSTq446bbdsYBTtyUua9yMDVNe7CHj2a9Rmgwi9u41E13s8ziQmjqDfo6g1d",
  "key21": "2v9pvv9ontPP1FiJBLYr167ck86YkLmVd2m5m38PbZFG1MAv2AdGfzZGNeywQAWFJN2XYLYLWFgFZqJb68y9j4cQ",
  "key22": "3wgyWRyYRGnnqc1kq69dEU2Ak7yA1z3FuY3FBDoWm1zZ2W5C7xCc7Wbhtw64HdCRhHysSVCn923tH5sLF64MQPUG",
  "key23": "5hNT6a7dUmEcSTULbipKHwsqWXpYXLzsSCGwCWVvVxDnVb5wXD5YsQr856MJmVzJTjWmsXy1mxmspYMVgmqcDacb",
  "key24": "2dF28FnPs2w9U4PZsm12Mt4H9XSvC11GGCxBe4M3DazvHafUttBCdn4b87ZZGPgYpuQSqf1ceJ6XcwGCpjEuWXvF",
  "key25": "3LBxpqD99B5Y38PcT2sQL83k3rpwGaxPxWGNJVA4CzShvnNUQ5rquihHqxGHQ5nF6jT1B37ytdURmmJYpf5kfUBk",
  "key26": "2TW6TNt5Y3Leo4gpzgnn1yNkR58pwfMsW9uDtmMLEMLfxxXJJY8EFsgGYEbamA6nqZc4sPjBXrqDBSEvedKYJdSc",
  "key27": "2Li8pfUfSH9kUcb7qPScHje1gmiNgUpyNMXptMQHjpdz6svapzPJuJrVEnyiRgCEF6jeneLLy4y12TxkoPaqhaHw",
  "key28": "VKqiL3Au4SrNMgT6rocEJxZFifN6sCHRorKzp5FAoaLfnTUEt5wpPeNU4n7WChbAEmgRxDCXZYTh6e4cNbqxN8v",
  "key29": "41b6Jnrjs6gJ8Lfj8fLvnCkFdxYndoRQimShMg7hnfxVAFvMAgEs3a96WvKay2hQQAMSE8xn7tjQYnRedRwYUaB9"
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
