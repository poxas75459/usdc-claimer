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
    "2A9ZXzbWWzqioxwbCun28BdM6K6AKKnbKjq6r1SebtcunGQsVkwcT4Ma6297PPU6jJwpbkcvx1HHFNtbU5YdnKUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocN4QQxmprd9vTzCehM8pc5ZETvTXZeandaEeb8waE5Q1HfDspGVCfJmrcTacqgDT4SaV787pZ8gckSD3ojXLuz",
  "key1": "5qbkhq2MqT6zMsr1D8Cq84U7HvN39YWYxz8HyNWq78XhZ3AspzJV3fPcTywLePwP8hmjskAY4PLDpe9BDidAvLN3",
  "key2": "2gpQ2wDGQTSRpg7a89umVxateywgpscC2xtFbnHEGWjJQXNd7Ne5xog3A6GCiJuTo5WLV7LfALvcGkQUvQ3YoCfZ",
  "key3": "21orn53pKkLgbFnqyLMQpW7grgq6HowRpjqMKZiKMngUDAuKnWbEr1CZ4Z5cwL2iZXvRR5Lx88Fom6NpdBkmgrey",
  "key4": "4gF1M9taw8PJmxmSUmaqhzcbf3i9LGiAULkUVxcBf9t6zWyaiBNx4pEGxcPhzC2yxwkjEy9Dryu9B6CYb9CjXCnX",
  "key5": "3bB44CaNJGcGyNoeXeLYzXJSd2tFKMRsMXZqaW5EksRTDGj4KquJZJ1wZ4WrTeyMD7QjFNcF4VnLFSzxfkUfVM6t",
  "key6": "5tNTtjgN6TP42bHKaJfSAtfjq3zvqEpuqHHfs7RjJDvGND8NauHuh7DneCnmmRHdvua9sD3PA1d1DU16W6CMvm8e",
  "key7": "2nkFidtPL2TDkXPVfUKKjDTAZsr3XWjmS1QJS6RER6TfPe7fyfJ9SAdUYnHpy1xFxD7wc3hBFjXshtUwJuiRXths",
  "key8": "5QBDAXeomJrysSY4pUZrDyT3aPxEGbqfSx7zUWooqUZrfQGCuStbD3xArPDkikWWa2PEZpcYWUw71VjNdyGXr4qn",
  "key9": "FN3JRVVESMSFpdUByuBiujjHsongFmdzqoH2qrHpJHJG7t8TT2iXcYkhUeJcD2Mtxf3HWCa74uSAkSCF6ggUENA",
  "key10": "4L9uFymEmdwytxmkKM1Rgb31r5niPokEcpx8Synr4A6XKadPk8KXd3Dhh9SwuiJQqp2hzuBBcDvWiEWRttqfn1xt",
  "key11": "5NViMSFxnSm54EZJwdqbsftWWovHF8NQcRXeqjUqhcCx76qxZ58FweQceQQpPMP81qjJdbAjrkEYQ8yPKHKJn4T",
  "key12": "27oW9YZqnWoPyQbTKa8r6WzHZs5LwcwmqfERULsAYbNuUPV3LDhiTZdZbKEDWEnDr6i8FqvLTynwMNWM3TCp8cND",
  "key13": "2uys6LxMD2UEXMDxhuvtd9p35GTGupVVapdCFhrJcRdSA8qX8NE8GpEBU3NLea45z8zTx67Cnuxne86NpdFzhz4u",
  "key14": "4UtbKZzVieYfUmhtDdoWTYiyXVdWEVrSU8ArtZopb9LQEnY8eVwgeqNRVxUonwRg4sdi5opquMkzpkqePeDmwRtt",
  "key15": "39NPpnauMcMwuMjbfneUztuB52tSKQNpTw1BnbAPJtcZaJqUAG3QY6YV8yci8efnM26S9STroqdhvUcrx1y7nad2",
  "key16": "5P25EzVJYskEa3XoL5b32chQ5huE4E9DdKHd3oRKb2cGdzJByEzCx6XV6ph9Ez3x7iRbp6fFATbVASQEExjQDdwL",
  "key17": "4Wb3ghN1P6HdH7BYXeX4M2NiTSWt1zNgfaa8sLX3TgwjmARag33fqa5SDtGNmKHPwPrMc7oeobeccF37GUj7Ka3b",
  "key18": "4k6nxzbLaBHkFvHJqgcY5MbcuYTBQSgUXau63uA7WaThhVUp14xGFhnhKTSDtqrjAxRLDb1QLZmM3q63mqmjwifd",
  "key19": "2LNHc4R71fKNXS44McSG8d1nfDhx5Rrdgmn5NnnYE5hWsvy8QT2U4MjYEmt5KdSnsZXzBaAvvWw5QFWkExuHGGZw",
  "key20": "WijobocjSCVjgLGHJBGeTpyrnufybm3r85SBxpWmdWvRt5gXhXr5DQzsx4WZdBLKbEb9d4goAJUJ3ERJJU4VmWy",
  "key21": "3Sb32iwaRmV5Js4wHc8t9MrhMFevJ5ViF4WTruwHULVQnZPD7KesJPe2ntGspXeTfSTATLdctRSd4n8q5ToaNu6F",
  "key22": "2D5x9bzgaTq23Y228WVNHfuFjvLnoEX5FGGqeoaMBBukMKv5tQquUe2jyUrBcfD5DLzc8YnorkK3kqcMZnW8MLFJ",
  "key23": "2A8xQ48QDBshahW9muB7epL4Dv4xxAKtjx367P4DEtiH1j4DB6EBzMsDUAdYpWi1w4cGmnTuYC3mv5nQBVQNSXnQ",
  "key24": "3ZFPPLgzjh8Mt3GjPz5B2V92a38CaCsEkSedvTbwfkFtJoraz9ZSbj8Xv1mbu1Z6tSeeFfxKjsDMECSgAUEyDF8b",
  "key25": "4QefkPjGc7wsJF5LG9o5EkYtbr6jktjoeeyJg96F57FSLQAQZ3uoNJEWuDnzikwa2PeZtfGw6PHT7kNshW6UAvsJ",
  "key26": "3qN9zKiyrFj1YsrhEwiJgSWAU8HP12vnVQMZ7z5u7syEwxaHLkJAjM7sbM5FtPmfKRG7chD9EepqxCi5Jfb3D3sf",
  "key27": "39i9cWzULGTKxFRMQZyPXiDJWG9NLpkKNpW8J8Zn4RVzzeUGFupK9hsy23pQNgNFRFqwyayk1bMSGkAA2cPjt5R",
  "key28": "4ePtUfAmrGWRBePKzbgRophJZMms1Bd23HHkp2LPhnKnnJBWsHxhHTk7VeKQ7bCVJ6h3FkHW63p6DFTgHPwKN5Gj",
  "key29": "2ma1Ss7iVWbKBsuMAuw3RtEdVPMELQvpfuxqaKiuqMxctFLo3zyrXRLsBQkQ6WJcNzxUbMyNWVBd3J9f2tMw8kGA",
  "key30": "4pabT9UJ7ffufC8jAKwdtiffZZRRULDLk9DKX7nmeq5Z8gJiN34p336PaiAG14wKum3Hx8a6tKJP4XCct6S2df9z",
  "key31": "2qj6RD6TkWoqLw1NB2XjnTnHm4Gegy4cKdjjiXL1XxHu1sJRz1gXgd81qjvFj9PFctmbsGbHp3RgJCpTcywtUMwU",
  "key32": "2ZXHjqFs9LAJgzydJ4qfYTket7yEhRRZyUztNZobbgqQ6g3938GjgS1Wj12Aa4d8gKZvREoA19wPEMbfz1RZdha6",
  "key33": "2AfjdUMPvC2dYimPcGk9ZwT49ULQ1BictDUsnnezKFE3kN3pejfvfDUbDg7H5wZCrDT895DR9fyu5Hxc3Hj2ZTZD",
  "key34": "4JX739idACzNUk6U6w3YPuqLYj66Wuv1Kjwa9DjfdSpTBidWDzwpcxY7YgYbghauc53XPVPdLWSUuBzyCm1f2mik",
  "key35": "659c4bBaoSQYGgifz2PoUbjrHFgasDDMeVWTmAVjnXRm9dS5RFUVQAeH5BmM84hknXBqefD4rtPwxksFhS597tbm",
  "key36": "3JHr39J9YvU7q4fqn38snEZAE7qeiwpf55CRfbBoDCgLfvVEybuMccv8MUKj1bNresYUmX5MB86WeTnfchqYQszJ",
  "key37": "53zcmqzieVy8HXngtw83hqRdb4s9fMr2hFXYKiwNUm1ChjjiDnr4ga24xLwbt7EeYUSVyiYutBveTrGmxdS5owJy",
  "key38": "4HfqCgvKS2wwNub61xB1v5cEQCVvA8wNNLaDTFhUZAk8YaYvcRo5qduPap6UQBY6s4xH9gpU8zTy3DaoEFXPdzo8",
  "key39": "5BSbtFxQVZX9pvYjt7KxDQsT39CSTD6oJdhfv6PK2X8aW7ZGGat7PAN8vWWpaYmKZWvCcpijgwT4K9N52gZQ9xYF",
  "key40": "494hmLJ67qC6UYmKbPaHD62gZU2hnnMDPN49hrC9s4e8QhGaPkUmKVjSB4JZUDdxj6bq5T22E3hKXNDq4eUDZLA7",
  "key41": "2S2njH8nKXTp7jJZYTdLvXGFuT9obCK33iqd2dNCwxnixumvzDLpiZKdAFnTu1Gsqf8W5tTPuNRiLrtBGBDDz2Tf",
  "key42": "4i8D5FHQN1sVfE9DGDzd53VBaSpCXkSpC1JLcvC7iPyzfBRdfRMrpzQwLrYHhr3SH1cmMUZ5GEgUJQpyRBCeCnpa",
  "key43": "4YGdSE9acbHdJxyGVBGfyH2bLTeKBx8M1dQTSKt1vLxBMsaS6vkNAdkGcMgkJvz3m5TpNqc62ANhKw5T7bLs9dWy",
  "key44": "5y73HLZNAvvbfy3f8cZdLfnBq44iuieSCxy6fxJF7PMGNgxduMjacsEz32XeiqRE9TVVnVJpG7SmjxinTGSN6CxQ",
  "key45": "5ExLGT1X8rwZWFDS4wEmaA5LRzzjJoYa5tyJBqQPTWvBpBDxjUYhasfxYxnLRLNx9vKCkFQY8vgZJQJ4M1tcgkek"
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
