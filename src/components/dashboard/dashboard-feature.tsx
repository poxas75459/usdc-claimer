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
    "52rZkt5rDmeTiuJieTyuJPj7Lwzxctrb8XG4FBCrpnVb2M9ocEtaYsHq5rwGrpJUD3gJk1N6YnGZrZToy3qak7p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56q9GySemHYm5RohqGoEGHVMwbZt9yHRJUDkhzb5d1Jfa623X5rdGJBHVVjhuvzx6jBpK7tmSjoortnQytyTQpnE",
  "key1": "iEcwdUwp1YiXCuCffUKsJuuhrL56kGpLmzRffbgqh39ZLj4XNc3oaFxXHoPFCqbLxK1YUdGdMhAaY5sfjBmedMp",
  "key2": "63HtdodsexmEaAQa1X161K3uGrKgj2Y24LkQKEyuS7eNuKndCQWZkZGoCSgAvTPzq5BLD6idi3Bx6EUNhHXLk1sZ",
  "key3": "3LQJoJjQ1CE4hZbKfXLuj5KeDoWcTFhmZJSaB7VmaJ3PJnhG91ziHDTTj2WK27Sqo1EgBVncnFNLgGWiuqqb68ao",
  "key4": "ThTfcScnhdYSkxbY2dTXJfW9Q8XsomJs2HogJ2UcKBcL8XkfTs7HPwXseK1TiHkyxcPeRtNSsZnDEc2P3uZ7VJB",
  "key5": "5PPqdFZXQaAHtaMoMGqzdgfjZ7sPxkiRtLP4Qzb5yN2rZEqNaGG4YGFL43pfg96MAq8cjD4wdfGYzfMyrEdM9XtD",
  "key6": "5ob2k8r8BfDQcxgvcwE54fsfJpjHqnorFeFhXaw2P7UpqhRTirGhmFdpczCjYPVaZjzB5Lu4nUagCm4UottoHLQN",
  "key7": "59R7F4YF3Diahce9rN6jg5jAy3xkrAQbpfEg5EELwRoqgxchD9WHTxytavee8Kzw2PaUqw61r2coymkPWscEfGgj",
  "key8": "4tHDwz1ajuP1hmH8XJnSkr1HXjDmHottqdcpVt4d3ZwS4gkuVeQFvwi63fJ34pTwHsZh52oTLTC2bRqxQPn9CvHA",
  "key9": "3GBuWTw6PVdHvFeYxRbntBJjMyqWtXW3EyXYtpUjMLgrZwGgZkyGpSbGWL5A4CVSBDTfhkyZVkYMQospq7n6QC9A",
  "key10": "42SAHWpFXSAzjD4SSV6DTLarga5Wsy9CDApLQuYaEXH6sPZGdHjRF9qxhBYUSxCZnxbz26eD2Gtj7wiT5AvggQzK",
  "key11": "3TFMFhuvEeckGczBXzsYxzNpJdhNSHdR21xuD3brVpd7S3riEtZDxAyym4SCNeNz3EvJrw8HdR5mGg77ekq98DCH",
  "key12": "GP8iQqyNPdHDWh2ZJerHwhs2CYtrSjXVCAKFHGNPv4xdAA1PktfSLN4egbPR1VoJ7eSYCfRuHco5msXmQXfvfD8",
  "key13": "3q48y8F4jmVrbMrpj1W7SpRv3s2mVyDatYnDZ8zZfD83ZuFmVQAYUCuRMpMzZkRZE32UrDkr8qesDuHyNgkjh1b2",
  "key14": "3AJRuhQY2ndVCwu3cCt7QxrH1TnA4wzdrKn7BH699QpwV5GAR3KaSaAZGjf1KH9ZU1ABo3JQMn7csTsoAkGWJu4v",
  "key15": "2BjNwqk9n3fsdUJ25ZGjrbzxMNBR7R5aTEq2tVspzBSVfkL8mCVkpPSAJMAavnJ69aR92mWVNKf7Juy83oQeeYNh",
  "key16": "3uf9UDYJ9Nv9Mvg8sw7REkXnzsLDN6T5Xj5J9oNpE7TsPYtDgJM5EavebJLBR6mc7dVHk1WEhoZ4JB5xQEBWgfdB",
  "key17": "54HemQwbfiZ8GD7mVQLmxJhc3bXrztoqBgvhnWv5si2k4K2zUDBs5G7psQX5xWu65bjAPKx9EWPbnbqSWHuRMVxC",
  "key18": "3jpiN4wfdLTKZsmHN8afmgbVxLcfo4SNgkZfxEy9mC4n3iszffXqAYrSBS7kQ1B5CSeqzDLR1bnKm24o4hzPGCpG",
  "key19": "3YCkuxqahGjWfPsCy8AfbK3Xhf2UH2QoQ26edxndWwkNnctLdJ8722AWXybEfhRZLyJBKbSxH4erVsabb6w9BGBb",
  "key20": "5RpuwYy6rUGh6zJf8LHgGAcmupU3CMDSnCXpPdAoNv3q5ch7w97hAkUbJMQvUCQRsxo7dCYm16HMJgavUVARP1ac",
  "key21": "3QwVwFqCCJ5r2bMBV2bNkW4KeiP3T1ComHzNggfqv4UdSPaW5ss3GinvnwAiC6u8u1V6cdwTFVy5CkkV3mbAiJiF",
  "key22": "4y2aTrXFnnkAqok2AtEEravTLdi9jQTPxv2MRT62k7Vhwt8XqSjMooFiJZaadJvikLwTVAXf5YrroTM4b42kMChv",
  "key23": "5sEWZtMsPfrfGKmeFYPddGDcJxJFsemzYHP5iemNHgttHpEnHmNsgNK5utSEBDZeL12vsSGhJrGnCGg5GNougkj5",
  "key24": "2JjRJCMYrGpM38pzm9KCF3wVr7qgRA4oAJbMgzTvBYUGi2s8d19uisjWmctQiyB2NUadGmLE47T47g9yyNymU6vy",
  "key25": "4Eb9vyhhn1mA8y2yotk34iaBRMg8ZFj2hJx2vVhh4XVWyom2nHuci92uZA9fsSS1Mr8zRRZ8d8KqVN3JMPRsiDhf",
  "key26": "miDcvq9Hw1gXgLwF1XfFJrqGMKvwQWcf1aSF81BjuLG2kgKSfU2pfU1ijKX5TZqvgwR9jTnC6f3cytU8pUkFypK"
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
