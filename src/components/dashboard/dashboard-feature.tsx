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
    "3PqjUcgdSuHGEcqhzePWh9VKpTi8eN6NQTFGXq5YT3T5rwxpRAyNrSw59jXRaeK6t7JJbZYXXSUQ2k9ExWMGQYtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gZagfY4FjdjCbQLeQoNMwpMHcoGp4uSmZLGaLPoe6AnL9WXG8QktvD2uSZqnBLEjxMpkBitm43f4vXJxVppSvxX",
  "key1": "3WdPbBGZUnkFjJ1DovypdQHjaUxVLRaHcC3SSozPMafmJtJZh3bREUw7Ymy8FUq7J6e6F3K1qJtZutrqQzu4yhzY",
  "key2": "3oGPakGoui48Ag43So9wbaE8WaYq9UsP37rzJj8eNuGZhPjMf5wZbA7gU3sWEEix7oir2FNh41BdEfY7QZErj4U2",
  "key3": "4sAuUrUa31Kz9TmpejMDbvo65Aa1poTzxBCHEsJ95tFhhfpmmpvTC8WaFaVT3WpESqQtyLDWm57n3EcdU5GC995z",
  "key4": "58UC8ncPkEwb3yDqoRV7d32HGK8Dm4proyYL2K1j2ueLuhRG5RgZnLukP74i5muLZ2YyrvVJbzRcxig2mpjSU2ri",
  "key5": "2UeMrQhNEA8KwymGzYVZQo4JqonfzWKHbEAB6q2k3pA7LgSiQrHmaySvugWvNrYM4JLjqCypPcvs5jckKYyqGkg4",
  "key6": "faK1Y3ctRsRNY9dQ7EmhuRYmUMx9oggD9BoViDkYuKDFN7YiXvxhiRh55n9TLWvGBvTCX61mcj4t46GBWSt3HvY",
  "key7": "mFJDjjvQn1kFfbYH5Xe8aeeYf2MNtYSRojmpLhMNZPPkMQikAQuFV9Ze6xf24jZUrFDBzvkZcRnjiDyhiUas1pm",
  "key8": "aavpRWJCPWo9Wg4PZbjbSFPZEU6ra6AMwkrjNE2EDy87vdYWK55eNoeZCdUL4bB29C9VWTQ7LhohAV8eKBh8o7t",
  "key9": "2XQa3MYBcLvJi9qwV9L1ZUbzEo2hew6h7voAVafEJ6avyYrtThHpoxgxLFnyUyb4WzgMgcDxM2KAqf8KLrLqbRee",
  "key10": "5F3ExE3D7LnaD6fQ364hk2FaXGwrr5YLoo5pGha6nPiKBeoMvtw6BFVc7Mhp7sJpJTdNia77df2fp5idFf76iAb",
  "key11": "4nBUfnDB8EVSoR3dqyPJm3RUMucwd8CHtn3mcTqc6y1zVcNtcTuRHYkMUjc6o482N2LZZXXf4JgHv23RkiVoB2Jk",
  "key12": "MCsoiV6WR22YTf7ruCo87g39Q7qYVr2wvf8fgqrjN12H2aCenWqXPrd69zgtxckMH3dUGDFH2REcfeWdzdKqTDk",
  "key13": "5XLpSeJDQJD2HQGtE6G2VEzNojAyCKRwTdXDe4Kszj35M6iP4j2qrAr8r3itaiTCLmyHEqHFpSjjSUgekd1MEYgw",
  "key14": "4Re79QBmw3Ps5px3ZdcRkH7XdpsNg9PEn4NHfMGFNin8cLr8o3nh3skvPfuwqWu8jBpspj69aa6g2Z71GdB855Wa",
  "key15": "2hJqrVaxmBaTQRMnrba6Wka52BSd6m8N81hrYzgzEofNB2AjbH9Y6RTfniXtwWTzjtv5hfYqn2Jmqkv3kfVHZ9Bx",
  "key16": "2wb9SQVNozvu89AZGuTvgWP8Sio3HGf5LxeQjQ3N96ZfYrDGe1RKybiESGsmPWXZFK8Jy2sNJchxpJp8iX6w1Vm2",
  "key17": "2qdWBwMCTv4rYsiJny1XxDiS7BM2BfEd7kT1HKZTBLXaNJNEHW8JwehcdH793YEEycFtrFZ8meXvYesGWWeDKTRn",
  "key18": "7isv257SzxCjyk6kvAbxKsVtxGLwFit6xQRc17zUQYDp1mFBsTPP8LttXBQRGn8nFx6dMKvFBrQ1CHMkV2Z9azf",
  "key19": "2txuXGstSD8w4rKnRG1DZRB2L1MKK3RTcrM22biaxjjt2SnVxK45FKDSqKtkzRfWH6fZZRdZNEioTmSYgauwwwH5",
  "key20": "59HVdugvCo1qoYw5T7wWXUvawnfmukG8fDbykcV1RABVNcZcnJMJNct7L2uGND5Pfu1b2dboU8NdejyVhDT4vRtU",
  "key21": "5bEysSB45rbSyYS2YadAhdnPJGYCVgwAiEJMDBbARVyh9nTKt5fsGWCcbYrKFimhJ1ErLUYrXtKQMYAayT7tpP4R",
  "key22": "5UkXDuTPLBA1nDaA4GsbCGocgcbw9kEx7CRhZjzYmHU4UjX8dbzGk438H7HRL1afLqTNNEftNSfPZWZvG34HAzgk",
  "key23": "22FKNncb9gykyYVnRwY8WarYF9CnsS2KYnTXaPwTBew9SirsdQEurQpr97ZVis8TZYqNdynDKTMqL56Un4px956n",
  "key24": "5gPJd2HJKCGpG4p5AsMH3JKNk5UgJsjbbjtFgg7sNiy3scw6yshwCW9HY9dLhr7dviyG2aJCxzECeJwV4excQHJd",
  "key25": "5C4nbEBvssr9zf8smg6ECCytEFsFdZPpgSLP7A4AztUq4S54v8yoBAmEKrLtssCKzY7yDRHeHcNVJuBMKbfxzeyr",
  "key26": "KhqUj58nvRqqE4RjWGjbiiwP3u8gyokppdKrwZDcJRWEAduDnLcr4woM8Acn3HfDXNhNQDEffeMnE7v18tgX1wH",
  "key27": "3cCNJC527eetiuPTLPrPtXg8MVn7C9ExVKeJHBWKfmmM9zUESzcRw92o3HitxXBrnrDvdrzrW3PnQQL6wMhjrbBe",
  "key28": "5TXA2EmTwizPaGRPFbAjP6aDjvf5AuwHYTEgc3wwiUhFSHq6QU5U5gcejeueKBxMFVwDkCR3UzqJiW6NM7uqGUwj",
  "key29": "zSfgCXvJpnnMr5Kx7rLw2XE7SH8jKhRxenQtEFKKJ9h77WoXPTk3iuhSeTR97GaxMSuoUdCF1WwqHRD38qay4iA",
  "key30": "RzDqhu4znqFu2ekJVydUybMv2PiChP4qTixS9APvndvEJbmxGzLkCzEWEAxfD8whrViJfmFH5N9ARci8wKuR6Mf",
  "key31": "54kcMqBUbvarX3yahAbhiC7xa7BiVymWaJj1ME136VSyeG8cERLhPi6TAzGdJWjdKtsCZPaYmrSs8oLhEhQ22vur",
  "key32": "2ZFunfokc2nAg9X1hsYQgwajVr7j9RM7XjqAZsCHBSkTQB7ZEadU1tfhMGfTHycfCBuLs3dJcAhdz3ZrjTeMNcLi"
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
