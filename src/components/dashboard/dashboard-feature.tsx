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
    "57JchD1Yjrr6X6GPSZzqA1yXcrLTdJdt4wDXS7Vkj1mbqmBXVd9XUfHLRwXVzRwX3GeLmThyNHsY1RSGJtwjNjHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyKZwwxToxQkeA4vMPitPWJHe1dQEJViXwHJ4i6dk1UVhoBxiRgpmmiLHgfmraJtSTjxcbNvF1EecspZAR2PYZW",
  "key1": "2SK72H8Vo1PBPw8UHcE7diRAJiSL5AsGRhDFRt82npwda9GH2m288vumkfrtZ425FaV6jmxi1NSXWrwFwXHJ1Zdc",
  "key2": "5Md31CZRrjLWf5g1iHacJFFUeNcZ9BuiYrAj15azs4LhNbXqsA6zMUwqjJ7iLoJLXC6D7oPk1ovcipa31jeG6JNH",
  "key3": "3LdrTsCQChpqGCUT5TZFMQh8AChauFiphSTrhgjqaQBnawZQViSzLvtnfvPJCb1h1sT5CMX2KKRkhA7c2hquUYfq",
  "key4": "4cuhE6A3TzsZZUhxSDDeSzbJkiWZenbDrxY5RWGkotug3Lqg7FWwibyBkgBLPQ5xUE5dNe8U7nZSHyrBGV2Fa4BD",
  "key5": "5KhQtSBr4mLAYvQUHPa9qYNWHUWG3QgmZBhWmovvXJ7aGGHyPRjWZyqTmxSMbcYtf2AZtbqyN2zMkYtR3pC6ejPa",
  "key6": "5ut2gnyfvgpygF878RyQ99Czbt5fWZUuMgaGKoTpWJprwk8qiDacnTzTzbpgbxyAvXgg7xopa5bMMn7PR4TsC4Ag",
  "key7": "4RA7vt6a9anSSiQ1hzcnfaFKC8YhXHa4hkje9STbG9DpyVJ6diEsnFWLjtt9enYTwiYVWfVq2KTEkUpLytbj6UnF",
  "key8": "4rmLGxdoB6SiCfViHvucXokabm2eys6s4Nbvxts3T9ToxRE3aJDvsBnVxouyWiSK4YgVGuZ65nqpAz1oY6LVZojs",
  "key9": "28mmd18GMyUJV3mGS1aZxoZgxnhxueuHBBd9GiFF6xKY5YFDb7pqMDUfhSL8JFpvzfxBepz6gExhDEgaq4oh66Td",
  "key10": "Z1UnQLymyT3cSEjBqHdufdCE6pdU7WBaqce8ZQEYdRBnrSqBgP9TdTWPsfgNwYkjCs4ewqPkS4eos21ti3rKMT3",
  "key11": "2LHjisZ47QVSVkaV7Ktnoysff7ZXynQGhQJS9TyWNmiBzQbaJyusM4qiKVLP3jH2YSQjivuvJUQ7z59vxX1V8hso",
  "key12": "4aufp3S8RxLcKoLhqTHdk34NcVTBWe1kisYwZmy9ibfizMjQyhdG8MZbGKxDfu1U8ZS4n9MfWQRzw6NeCyGD7KE2",
  "key13": "ZgWvu8w7fcqibKWrpvEgMLMPuqRFgaYaPRHYqts2m5Qn6ARxVnShLXN8jg6h8JZHBgBf8uawAuq4amtrVHvYNjB",
  "key14": "5frHLUNXAFGjeu1XnwM1AJRFuRBswute6hFXZgxt1tCiK5F73B2D82zVHUSTU4T9aK5vJfq9wL7ZH63c2bnHas9u",
  "key15": "2A7K3CiVmsAZtTmxrUwUZEeGYrCouwzavHhvCsazzuPBetTYoxfxAY9AH3bh94A8D2HW8fr395CMGENM2MC4ZFEw",
  "key16": "uLUhU78m4UssdyViyMA7K5Dp77WQ52xjhKS3nk3nCWyV9XCrLrGux3aKAMV8aY2n71ZrDKCARd6ZNZbf7pWxvLJ",
  "key17": "36HJHMFXtdPdoAd9AYCW3TKt3LFEEfgF8TnPbTMESsAT5S3hFRf2MHmwTLGmeEJG57HfsVsR2Vxga3MSq2h9PK7H",
  "key18": "5VcnXTpMyVoPtySNSEpYP9CcgTUYgAyjqyLQFEFTgyK1jUPRXvUk5D5c8LH56euok2wpLJxpd749rFFqftH5cqzD",
  "key19": "31cYh6AYHdXTNBhHwRaccMZVjR3Jr2WbWVQoUUn5ckoS9DC8fTHN2PfwUoh6iSj8nhNiZWW8mcPVnZ8wNtqgYbm4",
  "key20": "Qjju4bL33Bhn2nd8g8JQSYw8z5QPoeZsUhHSQbqGBLaDr7uZ1mBaNrTHeJ4emCLxajE6HYhGRTWyMGD3qimT6nr",
  "key21": "5K4wA19th5hEN5eK2E343ssjfs1r8BjZvdNaBBkMdkDDM1zGXm85DVisTFyx4jEBNariKMGbFJsiZJ9Un6Jk6t1P",
  "key22": "4Y1BpLLNUNaErCVKTgcNNmGQWSt1JDZa4Cyi7RpuJjmPuBSK2Fw9b2FGptcMVQxN85vmfic7UrZGquMDn9oTQrNJ",
  "key23": "4WueP1n7Y7RkL21t41vvXHqC9kguYZdoZwPzN9R8bYntHqtZeAufsgbAYM5Wjs6t1RQaxc4RzeWvewmBZwyMwmVD",
  "key24": "5JvZ4KjjCwFsvH8Ha5fhpzH7izeCHNJC5Fw7M1M4JDhsjSq9gUkS5vCr9xHAehEBFtyFWa3RNTNeLKnwNe5sm3Hi",
  "key25": "3sak8gJBWR84NjWpX1vsKKVtNDsfqmdwvXzxkKbP1kfV5CanKsFzyrqbcYdXuoy1JduRjEa4ibZGTd5sjBpyDiRu",
  "key26": "5hXvEvUkgTmmJKqppWSeNAugMzfd4WPRz5YENxj9S7TJNKtmzXoLMMNyxoPVW6whWtPaPHPh1u17kCYNi4niATX9",
  "key27": "5LAkaf8ozNyxikRwMPg4vNTsmLKE3RqLibjm9jgDhjL8KRP1Lwuwe7QkuyAMJ47Unm5ELCc4wWrN7RGVwhnXsw1V",
  "key28": "3CmCWnDukZ9x73UakihY18LNCmqwzsT8Y27wBUAaYRVobyw2EMHJug8gr5ivLZkkqBMVpGmcERbp5GEdesjEWcEw",
  "key29": "35D3WQgjwc8YNAQVcmFjEjb1m47a6NC5RHG9JukPKsNcJHu2cgqenv6fMvBSwkT9tp31dULdboU52fkkqFTfvqSd",
  "key30": "2tREbsktJLr5pg6wvMC8rRoyiZzmJrAGfqUTnU5hep9zfoikrTX618PRcq95c2YJqwVKWjUZqcXDNkRHgR6ZQn7d",
  "key31": "2Zi2U34Qq1igigqs3iiHzYPyJEn5B8NVhjzKBenoZTRGSzFCnX3AGnqjBHUeFhuD7QVMQx9fFJ8V9bwQwJKV6ebv",
  "key32": "62fDYnCpXgsPc3JRVXKUvLR8xUCiHNRQP8Xj669sAADo2tKMAxzX43ZkUvGNJW3tNZqhqq7yAh7jA3opRT5G7QQR",
  "key33": "4CiUdDd3xdDTb7PTqNVWtpHtwSqozSaCMcNqPJwPHfPWjaa6kyj8fyjxRjfj5A3tFGwFLeVqGLe6VtzbjHJMx4dD",
  "key34": "2pHwQTmhMZKETmqpBR29sDCGbq3BkoC5reRrZhaZhrhFWaJY1qVSX6sHHuRmqWMshzGszwTaak9S3xXXQuPPC8pM",
  "key35": "2XzGFBqTBBF3Use3QUj9LHrr3uMpWMEy3qSDASyMdL36PYCoS4gTB4zPbCUxKQpPcLv2ij9PP7h2qXhrGbJRchgk",
  "key36": "4DcjrHtVqeYPC2hb4ceSdh8pjcVmLCZJ7TrisERGTFkErjkiwx2vN5j3V36d94GavLJJZr1t6cWn6hFCxZFgKbvb",
  "key37": "5cJ3JDMNtVEEdkZcmQQEBtjP1sufdHs5bS36akHdTJAD5iYfN3wCkwWcLuvmSbj6Lc5nFvQbJuCVq2MKeABUWkVk",
  "key38": "VxtvqdJRZkg6gofEUarMWeruHSb1wMfgTaHkLm3dL568qYdo1VHnd29MPNMVc2Y76VSyqwcB5e5fL6HqP4FetYz",
  "key39": "CMBNGxiuQRY3GEpqiZMqenQZu6KzaXH5ZtyAiZ2fWqYaC3TqhXW3VLny1MZ8JYnCioray7aoyYnv7nhJoDRsNKg",
  "key40": "4A1YR5VAJL8W5HEPgJ1rgZGLcpM4b4YXFAfMtKnEVssNwsDe83Ths1XckGpjnm46KMdxEfdX9E5TTUtJaihi5aot",
  "key41": "3qDz5MXW2XAKY4EG92x1bJT71APrpCpomKyT6EVPM9kwHuaT2BjDJxjjjAigrJxVgoz6N2WqcrzUJQHeyGHy5Wcx",
  "key42": "5NuH3KALqwMMrA74EN4XVtyrDQd7pP2Z3VtpncLjKhPARa3UVu9TdcmQfDknLf351NSGvkJ2pKBDZ63erHYYzvwp",
  "key43": "3diw1HDK91ZwTbo4mVYYUJi48jC47yixeUnQpDCj5YDngfC5WYYPDbVJhgcnAsFVMyFMsX1Ys5Di4C3mcsVYZNzZ",
  "key44": "2JMiLJQ9idRX6fbS5tsvCsWJfHhVJCRvWBXYhrqn2uxHJNme5rH8GRDKhGp75UQtBnU1Xo1CRGG2thGkDNKWXXoa",
  "key45": "56WpZoyWzqDWXz2usGDgPrRmgXqF4H9JjdYNgiQJmfMoQkyhhC95pqNHCnKMSczBZhJG1aWvhWEmZrj8HE7KqHhk"
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
