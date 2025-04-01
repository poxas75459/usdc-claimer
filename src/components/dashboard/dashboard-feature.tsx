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
    "49yx4dbwKhXXWWT9ac3qxgamSeTmVanNjNSbBudsh68e2UW4ThbAYR2kFoegmM2HsjUAKyFFqU28Nf8tsUvqjWsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YW1JvBRfXwVboHbrUX9yNYPvspzjMkcntG4qxzAudwGynqBbQCzhDZ8bfAG9gwiFbGySLRfcvrz6oBqfnBJ9rbS",
  "key1": "2ruvhUCAzSUA5HcMGxAX2Ngz6HzTpqMq7XBynWtNTgYF89JCPejU4Wpot2WszCCPzGxBRgAQrtNiuqS8FFPvagPL",
  "key2": "QhjkTCHDDNVfZdaq677uxtTogbE4sT8BQ64pfVg4hGWdkD3oG5TQNTRdABT9cTakeLHj9hJ9UuCqsadY7gn7TUU",
  "key3": "kV5gR1ktqaeKzP2UVPKmDwHLe3JpYBDJctAkRdjh5kL8Y4P4yY6FZxd4WMxoDeP2hB4uXhNFCRPJZwYqh3Ns281",
  "key4": "4ySXXy5NBAuPiUSNGt5hUNKn8XyTqw9EUFNKTEfML9B6mw8xmk6wJyiefWHrjhSg5j6MqELH8GZRvJxyUhndPx9L",
  "key5": "5xJrAKdCRAE3Eya1m37fLjN4AvSaMbmepwraeLCTm3SSJUkYXMyXkGgPArKYVBcrU75BWxtGG5rsZUCiw2RrtupY",
  "key6": "oTg7mv3CBYq1fLnLKsQjN3NRWAjCxYFLvYo5EVsmWLSkfjazUodQsmWnTdRwy5jsCHPQ5BaR68MdLwwLos4mBnY",
  "key7": "2gkNdjyHD7P69WbErqfdFreMjq2joNKpVCa8AmsVH3ZBMnXW6eb4h6AJf8F7twTXkGNQ1p4zRsD7Ji8LVpFYr5fQ",
  "key8": "2SMRpziHA1pJRLibZkiyd7gPbzPwANf9dbqor5mS5K3BFZmty1SXC8EmBdZMhFQACzYMuBSJqSLauRaV62zGpjiu",
  "key9": "GLAmvVDh8bL9SgSW1A1QxK3qngwG11hHp4JXkJYa1MVWZrN9MAXMcxL1482FTKcx7dSH5NJNaG3TdcUrcHbPY5a",
  "key10": "5eQyp2Qv4XfjsTSn5rJ8yge4jrFhFfWyupZp5GVnLZPwoQAy58STQ34Pnzhr8gcGbQvNw4pcmgCvGrQSGty8KBeJ",
  "key11": "4baT5zKa8jTuUeqqAP1w9BDPrA2Wcrjx77ZxpH8oc1Jcrm4RBfd4ThDzG2Ho9NrvRTZHpYRbWNxDrR3uXMrBefe2",
  "key12": "4nDMxe6WPkQB7XSiePEtm3v7eckLSf64Rbri8oMsJYQi9CLbGfURPHXmdqbxUchqjLATXpZetMeBiMDPKFf5DCoX",
  "key13": "4RTcgJYWXNXTyiwkHeR6is3tjpXVuhjT5Bw6qfREbUR2izk3TS5ntqpuA52saUJFjGa1p4wTKCXFuBbrUfBXvAt1",
  "key14": "4w1F3A2W7DwYfcak18F5hJXFpR4xZNtersd1UDMLREbJzbrs1monipyDrnzcte1fey7D92P5CNJf3K2uKCVx8wLg",
  "key15": "5joiU5su3sm6fnYDZ6HASc5Zywi6KmWyiLvpNFH7R25uRDuyxLDyfMJaF4CbXLKfTWRnMN29Fssj8NHKhyeag3F4",
  "key16": "47qeVrFBfSFUbiRSRMAqeCv4695aL1iYkxzfjSzohQESt1chsKVMviiEtsLMHZ4ZU5VSqJ8S6Bdrhe5i2MtysaTA",
  "key17": "zoRZ5aVpoL75dv8j1savGdsqcpQQJGMQ6nRMkPbMk5x4PEu8LZRfYhpPw9nmHW3JiSPMPZtrQTWQLZGU8XmoGEk",
  "key18": "1A9cU7dVt9MqgE5x1DF58ZpGNrms3WKcpu4KFuV7k1cEQSaVu4pHEKj3TCv7VnuTV5urBBm1jeu2WBuxLipan3V",
  "key19": "Xnte7Pg65rsERi7VyGReDCoJ9WaQzH8bcBS8PxdVJ4sfT3e2Fkncu3KfjyXa8bKreSGRxgRGk2pMsmjJeDYJHRL",
  "key20": "A14mgPH3tTBsrgwXASHgx1KgpccCJwaTzbWGLJ3D7WXynBH9mQo8D1wT9BDX6zprEx181vH6NraVX4abin8qSHQ",
  "key21": "LC5RaJtHXWpFvdh7SAmMhAPKWF9Zn9fdo7UWHoSYNc8S2KxgHkPHALZNJU8NzpSX97Jcx3CyynVzXzcJjMXCHB8",
  "key22": "38y5yNmYHpXkcP8wSndb8E64LVNxwjDBrS3Uk9f5h4Qz5tThWq745W2bMppMWUNxfNhDFJU3qKveih8QDx5spidR",
  "key23": "37ZpkKpAsS9nkUHDvwFgXTWhagV3qqACjP227jhEd8dtNyu89JN75RLj2ySXGMpiLnDspct44ttX7ykNovoNShrN",
  "key24": "5UUjfu1Hs1q3w6k2SEs39drhDrNgUHqMzGW2qHu3vwyFkBbpspeCFQAuYJzmzM3Rr1rD1p6KuVzq9kxZQo24kdBq",
  "key25": "5rWLjYPZN1U939bQdAPvSRBMEAAGwoii7rwE3yrTh2EN8EPR335BrTp2LTtQy176QSox2qpXER8kkoFjCnSJzcJN",
  "key26": "2DYi3AeBFrWBQjBYpqWs2oqn5SULdGszQim5KVk7sx3v8e7hJVrxQboUSWgMZrq3DeTL1ZvK2kcZ8erhz3Bjpajc",
  "key27": "4j1A7JgUeBXpztRRqBCViX5bksnfNrzhtQdJbEXwB5HdijThaSnwLaujfaspTJT6821vLNddSsTctCaT3VBeLqvK",
  "key28": "2DK5Qo5X7jokD3v446THbj5ssDD7x33GPixgfWYdcqatts7eMQTkPYB8dZsCLAtH6q8ik7R8UFTHo7P7AM6ky3iz",
  "key29": "5fufNaomj3PtMBTp2H523TXwsmnSGn61QQDAxiyMWt5yXop4gohgxQruq99ZXDkQGA2YKW22PEZrUNtNFYRkfirj",
  "key30": "5bQeNdZaT6zW7HRrpM1FrSEss5ZRuUks5ymG1m3n9gSfCtthcs3JHRM8CA9tXzJXcJf6nLnns225LydhoGXawCM2",
  "key31": "66U4ssPMWeD1D7GxHGbTqZoLrvGTkmdpEDgYCjK9aV2UMPwpVrZdAVPqX8ZQ2jpuH6HfHUNHaHojd7Q7MLsnFgKN",
  "key32": "GL4SpEjUtAMSiSRXe61h4nh4acLGfFr3AZ6tq1T5kTHwpstriNNkRbJnWNhXaGiays2YL9DVCrh2m8sHT2UyrWD",
  "key33": "sDUmvQ7QKpBvEnRHWzFd4RfkqJdHX4FqvygJfEoMaFFBHxwygNDNSWjC81JL9BRi3UPpgnGZrRZ1msgbnden7TL",
  "key34": "55ivLsTFqjsZzxZvdtotsuNesoZHKgyUdPn3ZEZtPr2NbSsxYsRav3hdJd2MQXaQg9UV6YSUSH1YoY4pw4ZBt2qi",
  "key35": "3h7fkqYJWu9pgboGFHgMM2LmZWp2zBeJ5XkdZYmLkPa1rNJzaUPXcpb2faWKdXeFz2XVBqfRs8NGZXTLppxPjK84",
  "key36": "4PjHkmLuN3EYPf9sSMfefoAtXW9XL5o5aAkKz4Sso9PScXFBkGgqcZFr53PaVqZ9GmgZkAzmk1G7oAu3o8TxAuPh"
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
