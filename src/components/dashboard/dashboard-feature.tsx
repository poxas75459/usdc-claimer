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
    "3DyQMaZFwb3JYAbdCCyrHGDMZzGyExP6Eg8wwyq6fDxxXHmmbK6YeRLtzV1ZDhJJp3yBDUdqtFNGiQWMJZD3vXcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22uCjk4upP5UgJPqYAZYxUmEDbrFqvEihC2KLaJKhvkqofUtQtKkw6a9Rt7HMLhSjaixAVD5djWNjxq9e1NHMGW1",
  "key1": "2XnNvnrtNzaA9h4wZgUXRnn1JTxpHYoVBPAmfoavCPi6rgCcpcAzEyaJ6xHv985vXaMrj1hjr78YierMSkVNuqiv",
  "key2": "3THkURL4RN7SKS8q7E3LnEYetAwqPh1XvM2Ley9D9ckdW5aKQjVhzi2jFfX6FTWRoajZDVHgQ7sAFpQnZZjC1ZkZ",
  "key3": "dLgbtYfxc7HfnkwpKcgeqZZBQt3B5T46QbHom32U4tjEpKzNLZjm9UXhRCDeTZL2PRSbXiFuKDrMrfMgVdFGYfE",
  "key4": "4GhwPpTh8yShYWNWTSCeRPD9t2a7LvKgHUKc3Y6GbTdGPwRfij2Gwrvnre6n3xmP3mqkXqHWdFBEZCbM3ApmfasY",
  "key5": "2rJmFLLzJg6ntcDoMDNatVvmHe1SfJDpKaPyYrNjiDiXi3CCupoZvwCLp8SXrWaTf53wz3nqVWUSWbG831sxyp5y",
  "key6": "ZUQxrCnnU1PvxesJpEXePJ1SGwAKM6mHP9t6XwuNRwiP3nEHLnenmLSZ4faAaBdfvtUw3HdL6cXfbK9UqquH1ru",
  "key7": "5BspLxyQBm2xq2NHktdAnAbYDJVzPC1w3jd4jKvKFAxzhSXXceC3pvM2oUcKpf7GhKKbc8Msqhe8Vr3zPCBSUFdG",
  "key8": "3H8u1wmKikWzKm4SDtUekhwXygG2gJQC4rCUWSasTcXSHceufXGofea9w1PKCFPEHqLMD4ahAQcBgcF7CiR1D8WW",
  "key9": "3vofmD5zFc5qoZbyMyek99QQgt7ZsnFc6diqZWzWntRaGRYHQN6xFfsyAnrYXgrec8fYkf98pFVQW8ch2S4jfje1",
  "key10": "7YXsmxQXWJa1GSuAWqKsvx4eiYKZiVFRBUXKCkmYEtrDB36C2F1jEsry765DY7cJk4stevF9zq5CCY31ACopd9q",
  "key11": "5tQ4enGzYxPyWLmUtwGQCFooRfoaRvBNQdd4EsT7ALZSQpE8XeKDYrCukdpP5AM5VX1ri4dYkfJDEAU3P6QJbnTN",
  "key12": "3KTaoY6MpUhbEpBuraGktLZr1xGvGaM6Kq9TYCf6YgoD7yyNejxqP5mmQJiQQrHrUYeLmQ1XoCk8hNg8tKuzwc5",
  "key13": "4KmWwqK319JUrDLj7apz46anqtimMUSAtE1nFMpwguGxp6Vtg38zixE1MXsRd2PKayeoqcWk7v3CGF1uHkzbAEDz",
  "key14": "2FfuhN3yEB1v59W5YdaFaJvSKRCu1yCqax9yYEMiepBbYHWGr1qU6xvWe2SFhsooQoCxE1jMyHRCMTV79zcqs9zV",
  "key15": "51x2aHM41Ci4MAxzqbK8LLWLSAC1wtMxhN7W91Yyf5SpXdGpurBZuyNfzGzvAFQXnsEFyu3kkTa2r9BM7qmeZmNd",
  "key16": "2FWRNzmkgy7cj6GjaUuxHyhiNDZusu8CHHjBBkeMEYYU2v2c9b7yKFXKgM4Bh4Jy6Ata98TXwui28gLYcQFr6pJN",
  "key17": "5zNzMMXT87gmbFYot5SUxsT8T959BVnxyarpgFTBnCAtJcnwzfbRjgMakaAy14jp34X1rpneUe937QhbZPgd8zgD",
  "key18": "25rqKFUsJGy3PK5DAAN9eRv9hq6ipfwiK8gfTt119gqBdDF23GtfRdwpKP6WCPrhyF3VXaQbG9DQwVV3wo2k73UM",
  "key19": "42qzzmhpJeFpzdFPdWqmLuX4sDm1Fnig5jPgKU4nYPs98qMQhKMz6QpciSGEoL9C89f4pcpLgbDNmVXHVGqF4r25",
  "key20": "2PQQYRxwzneqKPVsMuqhH3V2dKg6PuNpzu7t8MnFFQ9rNtRjsEV8AuWoMA44je3rnDbetmyttXtaTgZb6EKmVfBk",
  "key21": "x6zz4YLUjDbCmG2EEhpAwoFW8AacEg7ms1KG5akkF2RYb3z8xFLSfH36udRvEyFKkxoKmF3syjgpUvWFhv2Tf6N",
  "key22": "3gwdpdFTBYWM5gNgLGmEoAxzoXaSiDozjbRgUQHWgKFa8ztsS3p1kZXUeY2W5ruMRHQaheg1NKJQd6aeu5JunAN9",
  "key23": "2LvZGuaXpdhLHZRBUxZEJgaoFDsZEMZx2gWb7ZqUoyNqBFPGuCx5TJxXk4P2MMbqwd7Med16vFFxYXduEan15PrN",
  "key24": "3TN4ddPVpGnLQ3cGJSBHqQeNkJxH5pQMw2MQqs8wNjLkd7EJEygvGgnMMmdyndZz2P32g9UmXamYtLa4hC99tULt",
  "key25": "3K22AgG5iwVCPeWoNtsvGy4aiNMEHhn4axANkiyWz1LsU3oofJU49qSH6C61zBrkPLnD1obgzTzoDqjnLcTs7xX5",
  "key26": "2LFPuwuYTZ4Aedk83AnfcfsUNVNRUtJrKbVH8ajCMURWK4HNudG9xtfBL74D2uiqG2TRWaCWFvHQPrihSXHGmC1V",
  "key27": "2f3jdtRgj6id3dikJmN6c4bSydF8SxYcY8kbnDxpxvevquQeB9W4sg31cLBghRr146zxqBYSQj9Qq5AMag9aURXz",
  "key28": "315hjJoNRZWobbrRwidjdbvWUE6gnc6BTnSYjhBaEuwRbkgSxzzJ2CyyQWeEB21Rcst7Ef9LDL2SpxZYanguJwxy",
  "key29": "5h89AKxVoKriEsz7RYf4QC33fGKq9CZAabvgZpoAyWKHd2BcSr58HK1CegBfcghkivKRjonKE4EC1fzozUBQYUcC",
  "key30": "3jSX5TZg6NYh2bm35f47KPzBm5dZWYWnzXp1aFZEySYNzsQezW5KTRD66xooQuHUPDfoSpUjm8RQYutjG2oewyut",
  "key31": "44gA41wBRyHW2GAPuVuZgwCSnh5NZ1eLedYqhWq9ZPhK1S3kRK42a7Mzt5bn7WvGn8yEnRhJscG5SP5dY8tiqHXX",
  "key32": "Fwsm7uJQhDcbukcRuUn7SjUbMozTzEkL2DYiCxCvuVCeejfFhJA7r4NWqdtrqLjwveyR7mUurRsxgNoDUhGRivu",
  "key33": "4kKotMdQoLKrQVyA9zfXM745G3MzApLWpSN39eKUYZTwBBV61cLeyJE8X6EmmuJo8y8zVBQs5CVaGPh2ZTz2Qu5F",
  "key34": "5AmskUZaSeP16X2aFuwePtyMopWN7XytHVpAiCCw5P221m9p7B3n8qnxAjgNRZT3TCfFrp6UBtPn9FS1FdomAw4B",
  "key35": "2syngDTdnJb3YsaUDQfa7QSUSTWmjgHd6HRmJZ5GzYURU3xPbHwGVyQgCCZzerroue4ynUkhVgRajzLZbNVtV3yp",
  "key36": "2wXGTtWqd2npHM8g5vGuMneJmeYgwjzZc1BRNn3oJMq4M1SSdg441eW5LS1NHWLgw3wkqMyrMF6F419RndoohwWg"
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
