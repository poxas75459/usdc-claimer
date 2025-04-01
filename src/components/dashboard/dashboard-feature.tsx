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
    "ueLCDnjnGCcVsKKq8e55rJRcGWdEYFB48iePEUAuVpGwEWeJyWz3muN3kvXWTxYTyhVvcZbZqZZ4pS4QahuyRu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nM1w6ATJywN1ojGtaGE4Vrh1nhzVg1diPswet1CdvBrCLbbbCQchP6XriV1RuF62pth7o7bWAS4YJcHjxx5wDF1",
  "key1": "5U8FjMpZXLppoiBr4pHnSo6NpoHCpi3spfBW4icF2dHubQZTKm86rdAFJ3aqKgzVjNMeSHxeszuUNWQ5JTmw8jDi",
  "key2": "AfJo86BAagbeWeMLe1NjQXtUVU5e4axFXLn95r9RuJaPqJqf9Nj8xK5JMpniGRM2g3YqUGXXow3svHApxML5Upu",
  "key3": "4XTUmFr2mXpMvYb5ev44ft6J9tYk1sihc5YR1H5XMfipaULcDBSiB9C27ypgbvsczB8mjFz2c1GRtxbJNzwML9ZM",
  "key4": "5GzgVG8cG76m1QqKtBQAyGBAsDTWgzf9VcwmQ5SfHuU3zGY4m1XkfpbYGR5imc4Ax1MRH39mj3MQt4SBARkovjGw",
  "key5": "371iyAcovdFmCH4298DB8seTtGMY6yUUXU2pDTUU5F3ey4Ys7vvHXzBWLf6dkLQ1z8fSeiJr5n1QKG7DdStFjXKV",
  "key6": "4mvVkTyGuexmB3mGThy4fkFWKHqJnAZaWTbTMuwEAh3Yjg2oPWjKiX8hpS2faehh246gfVbH9j6xyk8y8DrRbPRv",
  "key7": "4BdD8EAqFT6CbSiMsej2AcSCQD4kzQpHRNjge3d3QL47rGttMvW52eT62HgQemydcbtvDffivrsZKH2Awuaf3gi5",
  "key8": "3iw3enpNDnR3bDdicDAKQZUakpaZ52SeNyrAiQdFjBw2K82xyuQqrt7weM1kS31gbzZsxo5rjX624tLu53yt4zCP",
  "key9": "3GDMCgMbZ6Fkwvbov4wybeMmrfM4vv62PWbsGsS6APziit4hoGLhVCcDm16S8y3UT1B2Xtv9AZhEH7rMA3TcPvP",
  "key10": "3Gk438LU1vtL5FkXUp2mcR2qweUshsCwj9u7RyYwrKi7h3JLQVQ1riuULs2kz231GGgiYotP8LeYzP2eeSCmxRT5",
  "key11": "2raY9JyWqBrKwjUQJY2SmCZ1spmLzpUTn6wxuXxwfGgTiy5yJy4U28eDytmLn6hhFpgPsHvrisNehYiUJjfjZ1sn",
  "key12": "3Gz2Z9WoEUxmTgSZfiguxH14AcS9sxVxoPQB2mn3ahhpViLZbutRvLYkwuGHkS9KiWFHrA542x9vVVD45wwM4Vh9",
  "key13": "R4wS7rhJbGXgncbCBttt6Xmbz7sRBDYPhwFUUxkniWWRMDqVY9urnZSu6jNot3tK3gRxp4FySQJKNaU4K81Zjx5",
  "key14": "4gCU1VmEhPUZpj7j3dVkoepXXo6xsmSq5nA6tBufkMTWzxP5qJz9vhjCijXSHqpeQUuZ3bdhHPHEt7SPyS8MGaPA",
  "key15": "5JWknRfbzY9RDudAWsSVt7siC5U7D19AjrRwjxGdoU1hNio8NurosvYkNYybmiP3MMFf2HDK2aL9y1uvcFVwTHhH",
  "key16": "5Q5ay6tWVU7k9fQ3K7AC3J7m9esQvoFAjCsn4qsZ4VUEktXrWRiKuhRUKis1jh9MfrnLDg8rDnzuXak9DFsFmZeA",
  "key17": "NVX76tXoZWo1Am8c9K5ZV44to2VHDDykzLJkA2GqBTpG65WpfFkgyXAcJVcZ2ff4M9h4DJb6XMPxZxXTGVW4pug",
  "key18": "5a1df172DD7kGiwkRrBtKUDhHks8a2Cfp4Z3bZ6PZ3YmqHGr7NzD2PBRNAT5g6epeiotHRHEc9ztdVA18N5AMKTx",
  "key19": "2y6orX6sGZXZUEWPz97QmehKGUo4Gea5zszYTERWGmBJfTEGbFwBZrY8MJkTkzF8sq4XGRJdYjE1QxqSeHyDApN7",
  "key20": "a7hJMnLjYyXoG5Ep2q5bMLAvBjcBckkr6D2KMAruvDRRTXmUywuFLHT9qASFsofcPjwD4C2JiJJMeYvDFboLVHJ",
  "key21": "654S8voje9g2eNvRhcTAotMwjGxJaMZ4iKjYXXNugDzkmxUh6TmkKoxCySJBARrfwhDdVZ71xxETNZKsTiWJJd41",
  "key22": "2p783SDr4UaALzvuCSiJyrJ4ovRe8Qts42xgyxsxEb5acQS4hNQfSEW7izJRCvur8BLJ9WR4CeuDxfe6LEAo5Kzh",
  "key23": "3uEBeUSGJtMyPHX5bdEqg2AiGBjkYmbiycFCrJhkhFVTkg2vPAAJkHCBqEAqrKdTE75V31XCyeVH3PfdiKJATWhj",
  "key24": "2TsoiooNR3gAKxDWjzQtZPWaSkXcKoh2bKDyrvSXehtungNjsFWG8Ku9UNPQVNnuHvKcmQDPT725PH4h9gTFCiFg",
  "key25": "5hU1PZuVt4By9TmDDp2tmVutMS8fpUvUVXGX5GAfBF7jaZHh5fLZKHFuy4ZYw472acvAgq4ngxdNK6hm3XkUqz1W",
  "key26": "2quFcegnCYRkAPXDaMvRnLwixD5NqcYhagqTrqrCuCtzT8ojzn992T1TvDPArXpooyTRDhuCK7K75wQqVpGrVhuy",
  "key27": "hQ6DmexBaaixakT5pXojhu1YCpYY8QhziLPoc4aiFeNn5LFR3dB91HDLXauLSHXrTbwFD847xYkNmXvJW4qZT8p",
  "key28": "2F5Hq32HiqA8cEixtNKsdqJ1U4wa5iHh9wDFv1aLXV58LfnbxqZVKE8EY5H4fGRCfqN4dfCXQbahHff5MLfHKwAz",
  "key29": "4jdyG7JqPEMoQu5CY6oNZ5UJunt2YXHGVM8hZUhfhT8nWp3fMveMNVBCUJruWjTu2LrqV4C2eSVfaSHHPeA6Kmaw",
  "key30": "2xt6HzuA5p3PYgWABtyvtiGfZRunoaq9fNeDTZ8vGRBn62tWrjRUp54Kn2AFT8Ga7qvtiC97AU7eimxwxu8TB4GL",
  "key31": "3arh67goP3abnoY6dymYzvN68QmdBCp8e9q78HiUZrxXS6oxu3gkN12DjBh596Dffx4h3cLFxC4hrnVRe4MNk96V",
  "key32": "34r8aE344AmcXbSGfEjisy87a9QS3fBM78D9CsuvrLRWqx6Cib6e8J4VKEhGoAHhZ5eV9oFyftk9KfbXbBkdTB6m",
  "key33": "3hgZc3bmNYRxUqA3bt9VdEPB12LeZWt9cqpu6Z4t6u9eE2kAK1uF8TjLLecNK8so6g2xZ5Y3cyVT1y5QsNVmZ9Bm",
  "key34": "4AoF78BH8ED2SNCqwWCsNmwUR982usNJKhMLXUB6d99wgM9xPgT9s9y4t16uZBoFdnsga8f1K7KNYEd2vYmBJ6oR",
  "key35": "W2J2zxoVLb2HoJfdT1LLbV4FW7UfqM1Mjjknnc1Ms4Jpq4S5m5fka3uqjab4bBruVzFDnicRW5jLUxyZW1nokNu",
  "key36": "2T7az7ufdWei9VWv62iNMEahQpCszB3eTYa7NYeyPzKfKFUWuGdY3KJtZo1LgoCEKGZrmu8pPZW2f9ZuWRmAYKPF",
  "key37": "24xnJopBF4xLomENesvkty16Lgjy9VGe7nSDwwDYZneiFP9rV9qSSev3MqHpGN95kphYczpXGe348nGBwHtQe7rz",
  "key38": "4mcQjPz3KYRAVTxSgTVxTw3J8M4PmD5v4ttcZiTXYwdeFhJnmBhb1yX8eYaWGyHs5jsryZgoSb2gohiDypxrNq3Y",
  "key39": "2NjVDeyywavBQLtr82WupmfZZRqbJnACez41JD4HuzQRhseA7VTne4KHCJeMh5gEAakZe4BXBj2sYCW8AUXSEUxV",
  "key40": "3p2SkCoDDExan4uMgjVcTgcmgkQKjqLVjDJYrWcakqqK6FuVL8xZXL4WVkdXumL3Q2YEN6LooGxEoErP1xFog5zi",
  "key41": "2szC33WdagNVdH2a6Qpyoyp84eFPpQCuCYfC6pArQYi2RkzmB6PiJUeDdo1MSJiBCQSqebDDeRy95xY8gbxmRrxg",
  "key42": "35uvQxZsKpxA1X2v1L2gZx8WoEhaDUFuNQsmkoQitFaie5vqVKx8PWa6LVDz6Kry6JoYTfKxR7saVMZhAr7iv3zy"
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
