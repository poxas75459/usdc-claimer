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
    "5fUdEev7D5rNdZVjHhGXkWGMSN76sQffSwBRuKfuhiYqKaxSxe9vJZH5nw9FekCKZB3KgcA48qSjJmvbaHvytLvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHdFTQ796fMFbrhb9ehgxcBn4qkk2uiLFJ56icrz7nh9FCUzEG8RMCJZK6pcApwAyAwy7udKQiJWWvByBCeCZJc",
  "key1": "3i1xRhBjRwQGKp5DK4M1T5vshZY6LJpj33wANvw2en77TKpWHgDxajoSU4HVDX5pc6gpiYaKTTnBPFdKvwDno2HD",
  "key2": "4PRAz3RxGrynsRZx3c8wuTqx8VM8FGdkwip8vkPsN7VBRoMMntpPuVGTkhaPxKyrDMXHWhpDj4k2GrEe6n5s3dJ2",
  "key3": "53fZgNwVFYvTyf8oXSguRuryjLU6Lu4Jfd2qzVzZo46vmcEQJhDibUs99wPvdmu4YKhaahLTnVcUTqeENivLNE4k",
  "key4": "8RPzShnVeHBvyMb75G1QmNaX2mmoji1WmXTK4yd5RjVeUSRutheYLcKaDrRLcsNo8cY156oTXjVQoNqyPzXjCyE",
  "key5": "ECgQ68Y8RwaidZyhfKLNSw1uZzjB2NzCFRRe12s9KP7FwJZ6cgPuEchQM7GMCfo3JLaXBDWJ492WbkFpb8QsEpm",
  "key6": "VMMvHR1Yxo4j4qWxMWhzbxCN6iDfKU95hsAJksYy933rQ7sGnb91xYe6RWmA2f7P2XafPDhdvLBhLZUBYtdgLis",
  "key7": "4FapEuhrQKwvxyMJx2mBf3qHtx7VY51Rp1TRAXoT639m4A8jUk8CW6hrHrM4yk5a8yAz1ams5pg3oxycdPWVtCZa",
  "key8": "4YJbPnyMatHDZ1d8Kvs4akQnZH66vMCkRWHYPrrysjq5KW8toyoHyXKJap6kUdwnJStzbTijDWXt5nseAQbm9gLZ",
  "key9": "5Nb1bWHfACnUmU2zTgGg1GnaGs5nQJ2NtCDxSFn2x81Mvd4GzmTnt4c84ophXzo6ENjdzeHUxzgCMrXnZSe6Tknq",
  "key10": "55z2SFr8qpJ666QCYTxJ9ZGvTSd24y48annKrD6r2ug3GBL6z8PvBdYS7nfbM1xKGxrqgrx15sjwb2ymPEN7CSEV",
  "key11": "38fFVitSLnB6HNdLJjhwwchfhrX1EguBWXcbpL21UJpdPLQDzqX13abcQAf5fK32nZGDuDJTmycNZsgbhbedg56Q",
  "key12": "4nSwDxnAYoJ8s7JH4JiiVmQx6gs7Lv3y9jo1FvwbPuJssWiBXAjvyhdFMdSsatSv3urnhphMM2ihhcUZMfq4WtYL",
  "key13": "2SVqpywGnsaNwv55WWsHMC41Qjf6nQE9BLTLo62FiELqzzMDXgxijyF87ygJZFbMySfNDuRgWTfds11fog2mfA4R",
  "key14": "4FiF8h2zfNSQAupukD3tujjwxyfCzLNE2cVCQgHiUG6c7wJpyTjz6Ze6HX2RATjZFryACyavHzikjs5gDFoshe5n",
  "key15": "5sGPH1TzYonGBNJ53NR4bYUJqyDxtavF9avEepfp8YZMJ4FUddP8RRjVPAyot2e7QGKneiPNcZsK4uHyPGoA3vr9",
  "key16": "4ibnyFsrUcswDER6YhEyzNft171C6u377g7LZJud6Wkbc9LhFw2jrzxpQLvVFt7NY3rXWNuLoyD1BbmXS9TpW1Nd",
  "key17": "2okYiD9YECbPphU5X7hQxshbBTE263YPMhYgtD4Di5wcnWhEXgX1mV1P8LCkNgUEHwcbkNm91rdQvfwoeM4akYNZ",
  "key18": "4FLDcxLYLexEBDQRg3xuB2XYZRsoJspeeu69TSL9CsgBFmKM1PjPXKn3LVK4aznFt1TEWy8TNfq9gsdDdEHAcckg",
  "key19": "2hN5gzuU7EZ6133qHUBvmmY9dyecg6NMCXazDZNggPnD9Qtgy8pQ58Fq31zD1jg4ZXRpC7H9di6Ktrm8K1MAjQ3V",
  "key20": "78jW2agZLQGmWULBuP32iGCfUvCkj8tqX5SJo2JFFhbko2aWUbtYWUV5c1c2Xwjsczqkt73vKM9KpQu839VEwq7",
  "key21": "HrPt3gAhf14HsX6762uhxEVNRc1EgipA5Sh1XxBCauv1PiroDgWWcy1SkyoCecPzZn3897sUza7CRwTvDa4cxVa",
  "key22": "4gZeeiYQQH5s751otJ5uRPyPvsXUvqP2LYb4YNUSTafgPqoWeAf5eVw4XcjhRdvuwa4CvX4hUxbPvaDdXc9xnWxj",
  "key23": "F9tcTMRSPGB9cavzfJvDPhw5vuiFmgUNysR2i9SyYyxdrTqG4EvFo573U64qtuWXAyLpkkcwy8Y5MXsih5LerGU",
  "key24": "2cbDoPij9W2zcSHcSf5GkdH1Nm72XjBUf7tGbmAFjc9rNiSZtu9AnVMMKfKg6apDbVb9zTRN9iL3zQQbdei1YjTk",
  "key25": "4uu3RmQHv1XR3zzPdzKpPMZH28mm6Z8MjSGwrdjTb1A8mmwfnwwCorsohDakyWri5Ch3BtSjXb79f6FqfGDqJd3G",
  "key26": "3xYnK9pCe5tpFjCbYBYNU1Tno4TYwfd5tDSq2ijVquPBavDpFsBdNb4cjmptnRe9zSKrk7NpK8KcqdKWUUJrbe7Q",
  "key27": "5XxsBS8M6TnigJT8dqrwEB8jfPGqZC7Nk8qiZzPFM3vndzwCL86T3eN7nVVF26HpnuiTyG4JVwgR8U4Q7SY17aPV",
  "key28": "4aeDr3gz86kJ81Qmy4GAXrjJDw9PcnLGSSyfxDzVbh3Lkw7NjPTrfstWe9k6Cd3YyqPMLp5N35M6JExfd2cYaXtv",
  "key29": "62jbKpPLUJusTUwhtKAj4imuCi7jyve6aia4wzjYymdF3u78psQdVx3Y9eTdimKvvkTGG67soFV6c38prajxGP8s",
  "key30": "4kyoJQQkcaoPB6fRgdDB64znBNpHCY5znjg9kzLGQwbZscfrWiGdcUBeDyXbRQacMdKrP4cKm8PdmP9dEnQW4bay",
  "key31": "4JGG1KXKuhQPfktgBH3jCob9afW927U3jYRDBruCy96DDuWLBSw4pnsqjBfA2o2z7ZV1skmDrAKQN78C7p23X6K5",
  "key32": "2NTXJfNkDixCVmiKmYCCn18B3RxmTyD9UmQNe1sYpsX6RbxsDZKtNzYveusfQUa5WijqTy8hs4DC8DQECvERrVTP",
  "key33": "66STtpXVAhQfMkSbcv2SLCTvAw2uojMv7bJn6EvQN3sJ2bsmQ7LBCnE52rjzZgExwhuUSgNMGDbVnfp9Xmhe2SkA",
  "key34": "4mxwd8UgEJDfbZKEC8FMXiRiuk8n67V4FDJVbtwPkLLDj5D9PWXd58UuMjATBQogAuEmZEeABo6csYcFNWH5xcqR",
  "key35": "5Kqtr8QC9tXWuyABfmrtydacDxbjP7AmzJjUymradGAjx4nRmXWECsdrVrgPz9n6idFWxDbjy3cZpKUHihCjDLUU",
  "key36": "5H3ixhkTa4zbd1hkdwmWKS24e96Yrr654bXQAisLxpomPfD3F7dF4ysFHGJ54L2EGVD9yz6e1gtaCi7LJfRdFZpv",
  "key37": "4phymubRQipzPGGDFMJQxuuNWruyNJqZ3yqAaPMhsGpJ7kbAKK8aNzJoiXN8TPaF6K3rMKsP3qt85GqouBdDm6Jh",
  "key38": "47qwFc5QGXYNmmjThTtF7S56uK33Dc2xkPhfKrCkFiD2ykuZZKqgoTNxkcrQ29U8Z9tCECojwVMqpgjzziViHJ3q",
  "key39": "vCZcUkdLZPYA6K1mTNxufDd2uVstdYG8TFGfDkAQARTfLUk6CoQqAgMTdhh491fgGKMKbeZwCW8yXdDV4RYZxkt",
  "key40": "4yMxpH2t98V4TuGiPf5GjcBQyH7qtnHrQx2GSfxr1ZL9bijEkaM3jacwCEujb7KdtZ2YpvTAuYkebEZ4dux4ccxG",
  "key41": "2cTu3bqpv7AdfmN93dnw5GqQzmtCV4G9oYg8xew77t4tButsPTvEhhT7L4vxbujVr7V9bSjR1A3LeNK5HY5V7E7S"
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
