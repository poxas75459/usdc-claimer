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
    "5WNK51EY4UUGXvxEm1BoH47ghxpi2WajAhZBRfCdkWmW3DFHC4kCMh5THep6ia9xCVXHvtgJoAdvr9e7GuHX33At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4gERzAKP7V77eGkMtaYLA5ojQd3ahnUWLbwyWn78yiwSgRZ7t6bJ5ZK9ou5kSQ9G1oeh2ZkErSogdTYid5t7Ws",
  "key1": "4bwrNKap8vnAYqJQ3ZkxBoKuKS4komfvbkCRfYVMFPducjZ5px1vFoSaT3sxT13Ywapfen77b5XG2FzBdeRJmZXX",
  "key2": "5oKkJWs8cgnwL3RbDXfekNsHUyHyTBx5j3aKHPSc8T8xtrgRZB4Af7ytfDFxxTJGeuLVNFt1qx56kzcJ8xxdfmkK",
  "key3": "2tKJ6xgTKWQCN8KAP3WH1xCUFvKrswEr7HV9ygnqAaC7U4i86qMf1sF547fQhAAbGL7nwYxhhbJudF9SHjgJu9M9",
  "key4": "5gSChTq7c5keE8ty9p5o7EEjTBo5ZLS5WDi4ZwHGbLs3EbUgSKtwSMGXj5ssWZ4ku5vYbfcXUGGJttYsSkAqeWrW",
  "key5": "2rYTAFmKGycpg9JiPUSibxsLfgUz8p8hNE6iBQxyjQMCt3Ryrg1Rrs3saZTgzzEdsfyNCo6zq21V1WPUtDrV5vUN",
  "key6": "26V7xLpw8mNrzjDatULoY9jNNfwn5WdAsyi5fHjzeTmXHnzj1H9x45k4AcrgqBzqViedLAH4UbB2RfkeQD6xPPwB",
  "key7": "WM7Mj6ucUprgHTqf1HoAEKVJHyDHKBy6mGEmrC47FJhZhqa4F8TCi2K1L4XiYGKrdvq5uNe6i1ffGTL8ABH6nR5",
  "key8": "3xrHkeUJj9VxWtadfqbDGWiYCaKKaFNu92keHFXTJkTNiycDiX8ZKyRLEGvZtLhRYXj9KKv5WWsCp1uYLiVHmpnb",
  "key9": "4m5anodfBMJNG2QY6k6hqafah96XZBqc54RpT9gomdW4frnbEkb4EHPkF8RoHv1JdVXsiw1piXQ8sHetZLetyKeT",
  "key10": "369Si2R41prfrBzXier8eKxhZXwrPXBswDCkDL7jrUxAQpegmZgpZAP7fXmXXfoLY85GEdXHrdfYLTHpTjfd91CT",
  "key11": "t3Z9JnvkGH5BXRr7G5PgWkMK2GShrUd7V9hKUYdwk4Yt1AwcQqkL2HvrzGBH9Bw9Vy4VCCzxSjyXGmK6FvzaJom",
  "key12": "5zKFe61P569bMhocEiCgfRL7K6AEkXtiFpYS8mkx7DP5CMqoJxqydLK6MRSWBNRQCcENb9JC2tRxq1QHcjtCeP41",
  "key13": "5BFL6Q2muEJ6bY6q51VUtegamvr8URiZrr4zbGHYNqp7SDsKqk2sFZbqHoadUw2pH2HM92N7rACs16zfQkVUU3XQ",
  "key14": "56yukPHxKAqHM3y6xH4Z6SMCBR7r6kXD6sPrWyeNQcyHJLV4GNU2Qkg69VQ8Ftagj6jbZoTiWYLPoPAjR5P3Dnpb",
  "key15": "5cDjVprGPj5z3aDAvaUafhw85xiCjLg2pNDd1eNvDFWWjnHwngooEd88iH8bov3Gky58dnCMuYDtUAKVVuN8SWhK",
  "key16": "rhVAKg4KxZxt9ozhRitbLjaGAaAqzzZfSekFWuacA1bWsH9VnLFHjdZ8duWgewFfbZW8VSwfoq5a3Lwyg6CJtqb",
  "key17": "3A6QwZBNDNsp7PqRShcfPUGKvvASUokftMV9YQpjWuqK7zpyJFxq6HYiiDAWGYcPrn1WvppcerhDfMik2M1j8HTA",
  "key18": "3kewWFysSnfz2raNXaMDXr61EUA9JVWsiYphGGPQBTdCrQQ9KLA6Q8vxgvBJnwq8ZQrDo2JSVtpDyEB3UNrEs5ou",
  "key19": "33FVwsddqRva232t6Vk5oLjM4W3gw9U6GTD1gSBcoMN7uH7y18N8Ca3frVN25KogPufuCWrfmC1HEqmH5qyW1aUA",
  "key20": "RtDbBZX6PwhmmF5Jd4wy6ve4CWQcPhJmaAW6r8Muv8C5nbgJZUdu4aFcgpAsnpVuNrapYGAWvcsuE7GEwViz8zR",
  "key21": "4pichRgg8dQYLvqG34BVo4HZAzk9b8iohoAbTheTrCufRJyWDhXRsyr2cdrZGBnZXPmUhvSkoRWYsjnQushKwUAj",
  "key22": "293PCBh3tQgfPZ5CTyzM945BFDB7VgG1KMKVnAZvdc9K1a1WQBjG1JEYErjYaXd7uUdG8fVDbiWcv5tC4YZCTuAs",
  "key23": "3Bo3e2eCusGHrjDGcU8UVbWdQ2sQNaV4vKoZc4ngdb2U9UnAbzbwQpVbKaSCyV4b8mdDHFoEdD1JnaosMi7rjb9Z",
  "key24": "5e8zPgAZZ6BgjVZgYFaaPjhXPkMwAQXYGT2D7MsXSsFCj6naSUEJChqS9PveLhmMvZsg62qSvYb9r3SSTzkvrpzS",
  "key25": "31LKfBAnxKY3aAzaEtbeECsBMX92oLNdLxWsu55ph9eQ5dN63wPFpRFtC1fMXJGvz3HZrqg3WSgsrXMyRAQcPA63",
  "key26": "3BptBHRiqT2fbjBwWqmEZnTFSM6E2d6ThwWkkcQGfQEWCekvRexV995Vu4Cbe34zBpsrU8M5gkaVc3mXVDp9QnuA",
  "key27": "5uqFj5FLDdPsovsGJPcyGeayrBAvbxhKvxTfWJpLRbiybLaPGsEAxeWUUGmpeC39g6ShxDwkqtD7ER11zi176Z5o",
  "key28": "4TDSaHER4HJV66DDvVsdMttVo1q7R7aGAWmPNxavCd8QQKpCoYSUEF2oJBjfWenq2hZQprNfLeePisadJ6qdGio9",
  "key29": "5wswPJauE2NH8ctuRjMKTrmXnStRS7Z7GYTHFADvf6NnCNYJCj4TCK9gcic1EFMkktpp3SqW9QCr4yocyXwzAnKv",
  "key30": "4pRUxLhN9p8wDd6TefSHywLzjkskdNK6J9vyb5rpTc9by4E4xcFw8MrGnK9yA8kRz6VdveWAJcFX74oaC8Xyo2VZ",
  "key31": "26X2BB28Hyq43hDqqgVKZoNro49yyGuDVDJH3ktn2hoaCzzFy4sANgLfgLDiSneTNaGNXX1GCr2tLj8Fw8enshwK",
  "key32": "CBdkcrGnnpCob18ZZp7dhTkRt7GogdwZ92uq1vKgGGC17vGK9DptDReXa3arhxrEpEwtKgXXpnNm3AZEpCPEUDj",
  "key33": "4dVs1KhgxRoR7HDJHoR2vb3KUECgT34K6Judu9ZhzS2mfXHxVUVXnkfcts5EawmXc3ZN1mrwLCDJk1ZY6G82vWYV",
  "key34": "33n3FFJUHzRS5wX6mybDhcSXz5ABp3a8rCF6DK1XyVvmAvc7KRL95wq3GNiMwZ9oiiGphjzijUNkSZQuWvWdqz7Z",
  "key35": "21HZJHiubvesPC9a6PgG2Cu93sLdGjUTaJAjvKMcbjA4GQLMGcUiArBLwpHoE7W3LAA9GJV5Rfc8XKhvfW3Xxydb",
  "key36": "3EMsifBvAt3YAUcCrC96tiwyibd6NZsNbtc6GzVuWpYo9caxB4YvdZq54QAh3pGkfshBEJQnZXdCHAqFk98wwcEd",
  "key37": "4t4oEqxnCmACgpb2WQpRPJa629MyuUNoVKwp5EqDdB3HsDFzwV481pWjKubP5iMvPxVw3dq4xP6cvNh1gTG2X3uF",
  "key38": "5WER1fXUTGhRnJ5zs2tMTLdnydwstyam6wbowbSZ6MUqc5aGKA4TLGmvQR4aDHauGf8dsrQ2kbz7i3Yh5oGC3b7c",
  "key39": "635qipbsxC9BirsSWosKmZ1z9t36ZEZaxnoWLqsJeEfTUBNPgqC7hbTYJFKUtNECDSrvrG87jZ3Yhx34Dyekk5WC",
  "key40": "4yFCM2w9WgvvAEDgmrc6A4zESLaUPhEhwLAUsSRxenHKzj3wPAT31krdt7FrDQipxhYUy9pNixJWW1WmMHwwSgLN",
  "key41": "2Rf2q5Jt1R5FdB2AiScdE9z4TFdv1aBFdxkKQa1KkKVzWmcStYZYVGRbLmhCYNxjzY8A81GGKoAebSfHU3VoXPVg",
  "key42": "4PB2qVzqJ7KZdUMvzckSRYSDE2ikvzGcxQ6VKzaA3YBnPkuajv15cz6MhNAk8QYudCRkwMQQSg5km4Dffhydi1kh",
  "key43": "4eKkiHwSNVog8vTrRUujsxTzQmahpmdJqrZFPC4DRQTgzHnfKiHm8dBTjjHQwcuKwLgydSy1zBkuCP7jK8yNfzzz",
  "key44": "5xNVPJUrSfkDHz5hSrPk1yeaXVz6c2Yu4hyiBVSP1gzCMEuGWrftF2jAjx3N57ZxwwAfWBq5wUJnqXCmaHALyqXw",
  "key45": "5nW778YrfDNAEQcUr8miQYpVe34eHpZqLEDqFXHpJkh2dT2btUAPnK21NqUNCzbNAVaMmWcrGp7pYWApXWVskxaL",
  "key46": "Aq3gsDPi55j3bp56Tuw8kPcjiruVhiKmSYFxWbJ9ASmboBkNRrhrjh3LtWSPAzRKpzK9NjbhJbkeimg4rHdKFdf"
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
