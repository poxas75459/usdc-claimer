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
    "5fJLmYdR9E2usNvdusnKmSvzy75HQMDbzSfAK3RhJ4a3jP3TfTcMJ53AQZHtftETvBePooeoecCHyP6msygsZH43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnAuDv4o6ksnkgDrT9QwNKw2CuzZ6oDjMe1tCsW2XmLR87SE59zefSx31THCGCcmXBEXN1DWfNAvQ1catVJgzaR",
  "key1": "5uvDVXyo5ZZ4mH3afMRYu7RWcQoK2vzm2nM6azvc7NjrDjNW53BBPvjcBWHdmzd9kNtYxTtUKscZ1PjoAP6asqLm",
  "key2": "3ZyG1Cd7Vmp1cr6jRn8LWYS8g4bMZnxPo96AarL46FzttPXCmRsc3rpdwEUDdxZ9oTNdysWeGnJThNmCt44vNe5f",
  "key3": "oCPsGYSk4RxGyVoDYFBonrWjXg66h9cLZ5hYn6Xdq7jTdZvotzk7dZCK5rWkN6uHfwkxPCykgKBTmgL8qQ4g6S8",
  "key4": "43HuFnnnCR6oekMESErzXErdYiVnUcZazXtHGE3kQFdRrVLJsVb5KWgA8nd2NgHXSX4CiYnp1Cv5mEwL5ZBztn9m",
  "key5": "29JHSaVpYAi5cCZA45fsS7YRrc1X7FcqPXRW9NEtNDFrwZqgd246gHsGFf8rxU5x2mM6NyUhhk94ufV61BeEwcJn",
  "key6": "4fDU3NZ9pFRUZaDZL4Jx9HH1APFM4TbGDV8cxVQy36Pb5VfUm72DCRC1Pg53VyKpHLGxmfcUgtctKrPXQzX8aozp",
  "key7": "26bU74AUC2TJAyxveaMqhVj686T2y7Z3Vk9NN8JktTJtEhR9ygLQFoQtwMkp6G3xy1o8TmowYMRiRsam75eJ72QT",
  "key8": "2cijnnZ1b2dXsNLVtQMiYFHUq548WQiFz3n66JoH7poHfTJuLWRbf4YxbqpThPQ3R3jjT59rnArfcBboB9VvTGeH",
  "key9": "4DGhna47VBLe5SmWmWgJeLA4CSBzShqhEjMaw3kPG2qxZS6uweEn5vrdEveyHzxEYPuYNCkUsbZ2Vv9bVgRbKCu7",
  "key10": "5zU7zHyagUo7p6JWP7Xn1QQserDRM2E9C8KkL4ZEzS5h1wsZLibpHRpuQMHLGWV3sAmdNxsTstKu7dNdG1H1jdHU",
  "key11": "2xabpoz4PDZeQNgJPnkuyQ6rvK4sKJUG8QZ4BbmxQG82MVTmiRYh8uHP32uZv7dwYr6b57uwohTUvimY34J3uVFB",
  "key12": "CFM3Q4Ef2dowAdyiuLQmX7NjjWEWfGaMJY4iE9SohtGZPC69uHiXPgQUrdnZgdfmBNRRNtaSbw5K3axrqvcKufx",
  "key13": "4q2tKQHEHnSvxtdPjR6sjLPhPtPtXHNiMRKWutYBM1WQ1NSExZaFaE4emqzJ2LHk1e6AD14KD3nR4rSr6T75WX9C",
  "key14": "5BcdbZ17mbZFbkDD61CnqTtXNVPvnY8tC2zTsNooSRXdJ3f6g5DgYWxmWGD4H1wjMojekBLsiaWbbjEeeZRTMW6q",
  "key15": "4CZFqFgnn18osLd1L8eWwHS8jqWRupLxW2tUeWaKZNETQoX4eWEQh5XbbhUeAGpnRTLaJQ6QLuQizRWBu1r9a7ey",
  "key16": "5PLArVArFDdUdXjud48Wsa7wnogsLdiaxFunSjqouxoAgPBQ1LS3qUBjffEywiDZffhiuMvnjnHsa6UAogSTfoq7",
  "key17": "4KhhEeAuQYJR2PfprrXMa4T8fT6byGmH1kybAdUbGhjuovqDQd26RMtyMNazBmzS5vKWMeSKDa3VDevtwtEcxa6j",
  "key18": "8xoM6V6QhAG7CJxvVU2JeThM1QWVSiC9tYs4uHTEp8EzMDmAsfot5j6w7TpuEKxXCpsFVFbugAVATRc5KDnkLM6",
  "key19": "2g664o77AvJYTvYp6yAoopvkt7DovqKFLQixWvr3vWaSUKJPCeyiJNqMExW2T2rxHK58K9mosSRBRzj7N8nip4Kb",
  "key20": "4ywpGnivamBf2N64oKWwExCZqk1eZispeAsHuTFjw5w84Tm1VMv9A8Hoy7dyXAeym9JUuLe4W3iVfLsNyw9zRGCH",
  "key21": "3gwMYPPG4Z4myP8C7PScP4cm6wywCTcSB5hhUdESWEpNDDvuFJheB9KxCvUJ6mikN3uVVebP3bhLUKM2yqfdALs6",
  "key22": "2KydyWLDCUQXsNkb5RAh7oKyE4X4SdC4ucY5jYxyhMh3hW3NYJYuG27XC9QcjgjHCkXuvxFvhZThZ8GH3T1gjTSd",
  "key23": "zn23QV1Lau19mWoyzGLZsGauygS3z8PPRCFBB7VJNb4yxPJLLJdvYgcp1R1Xbd6DTkjHRF9W5wHV5smBQzmYoJQ",
  "key24": "5aQP3ZQj3HsftrGudRTqtp7ogp6iBdvjKVFJBpePiL2WCoa7e362s6DJufLb3gbDtMiFLjmAhKCuKwvxrXKmCtKp",
  "key25": "596js7TmSLiMS5pFJMwCQFv2U7ssGS3rC3pfkxc3MGyZqPLFohqtMgBJxrjDqYg5YQ9qmJSn2q99o1ohquXF8p4i",
  "key26": "YpTLdZAY5rCEstjJUWTLcV6udiudrvAbYNDTcRidvkLNRPzaivxZmsxPdd5Qjy6KJGkL6WKBmRFxbPmdDeU917r",
  "key27": "NiCL1zie5N9CGTDdLH3kfmkZ4ZnG9kYWd1KaBKpRKizHVkFNG6CcBx4kaomdT63pUDyoPZ1rZruJJKPoXtfLjLP",
  "key28": "5kZNh7LbMH9C936RdByN97zzt5RKJXcsRCR6TxbDYEnjPnA4DAr7voYfYeReJWVaytMszDTxTe7ab7G5eoYzn15b",
  "key29": "DHReq9YXxSuD2GYHDRoCtn3vzf1xvm9nNWqM5AkaQSMXAaNPR1metvJQEMkJnsdRo3hoc3PjN1rcqu2FgCx3gyW",
  "key30": "3hcNPs8GLM8Qnzhr297FfhMUrpiWspyWPKRrXUVgGFse7vbVTErz5NXWX9nLz7osB3fyEt32oEZQN2GhmDb5WCS",
  "key31": "4SarL8CSTDiVkSPeK7bRApQzTRkE5pndQsS2YjN893pkJEGb8JcjAmjgpQyhzrWoCd6zU7G9RWmub8bkdyfMuFrr",
  "key32": "23G2W544NndXXyRWWzDxHNhATqzAUo9vHKD59E2wXpaWvDRL2aDsbYvCPWqHETTt68wBa5ubzxPWLbptE9Rfynfo",
  "key33": "4a7Bhi57RKYLA1iUn72p7MQDbe2wBHuBD699XStGhXqJgKB3JT72PTWL6wTPA7jLq69cPBj22YJn2VR2P9RiR767",
  "key34": "2WqFPawz5YCUz3FCqcPtZoxwbrT6p31H36KnK5ZiddJ1a7NHkqhQfCshEzmy8EuJGtiEaTqgNPLu1zc9hGBHjaiL",
  "key35": "e93jrDw5oCYro75HMJ1EpxcoKrfLDNTR1GtcgMLrqfZgw6pbRRGXx5TAtrSW7sXhoHm1Ca2Qf8pewpFtKTtj6HU",
  "key36": "2oozdvdqxnEhRUEZM5ECyD7jW2TV5hRQE4kSqBwDZiTwaDpw5JuRcfeu3j1EACLnrcwRrDok4v75YAPnpeCufhUu"
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
