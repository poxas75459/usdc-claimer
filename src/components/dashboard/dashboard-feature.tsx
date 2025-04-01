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
    "ShZXULkcRFijTYxiojm2XKLBNAWTzDMx79BSyw22sDGxo1jm3skg8QSoJ4ACis8hC7MrNKxHco2ZpJ2BeesxP7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQqfU7NB6tanD8w7KdViAoZhd5gV6Q53pzwDMi78cZywByfF5xT7CyqBjWzZidsd54ZGpdSiftJ3TCJnZodhhma",
  "key1": "4qtU18n1jgerhohgvsfHCQRXB5ZAFc5L9UZavP6tgPLMMBNmRGLhYEHiFuoeNDgYi9Ue5K4ghCucddRHxcZMnUnG",
  "key2": "5wLq99qXXr149a5tZE3Jxuf33fkGDS2cfGfLg8e3N7Ts3NHy3vpNyuh9t4tx4d237XF8EakwdqrLAFASojFJSkmT",
  "key3": "3H3QzZX4oiAybETPjMfXPsqfER6gvy2XD3cNuCZESari5pNSU7AEJ6V2hSVDqTfb2oQ79eQRVbWj4uphMjGA6mZi",
  "key4": "2XrbNfSkifAn5Vuat9DfZxtd9BtLYjYo7SMp2QMG98acZ6nC1XjpgGEPLjS7Yu7SGrfxSNc7iebj95dVaRRZQb57",
  "key5": "2LJmVn3zi5znYgtaNrY9h8zdYZJagK3L2321u5PrBBWbvfrREGHFWPrjhWmZvYFeexPtdaW4HKNHkambK2iWVbuc",
  "key6": "D58B3982awbLiuGTpwEKCrM9jhFT79kJqQvVqXjoTtCzyAYB2SXgmzDXRdLHKu2pvmsb5zaxXSa8RPKVGPMziqb",
  "key7": "nv8BA7bfyLFfY9ra5rWhLGu3k7GgjRKY7N8jxwk2ZjGUesUaizh7JCuFLSf9ktciZLYRKLah5YyEpbVwabWmZW9",
  "key8": "4T5NF8yEPNoV3EkXPjybtD2an6XxKV7qRox2ztk2NCHN7gngpMz3h53Ug4qT7xb5QNUs7oDN5bUPeKoo1TBBT8Pi",
  "key9": "36hUZWfjXLwWzFw7XRZXyW3gkYc66ogxJ2fQH4gWmdvL7UcN3PicH62rfWcsKkKx2bY5m24zcepGEpTjts1m4WRz",
  "key10": "56Y531rqUb44nXpNo5wJVARzKcXhZLnJztGMXFTxPjyvq4rWDUpe1fDPAnjdTPHQpRf6MdYqmGbZLvyXGs6fbqFP",
  "key11": "2bfXnBGG6DUt6LVpEMnvkSgNpxytKS9AnjgA2dfTxhsVf3AL9U3nd5CGyx1uDXQFFDs1pEBxX7k86V6TY8oPPK56",
  "key12": "4ffVR8hsAEA1piEux5tzNirRwXtNxUZ5tAqbV2NDJ7m9FAoKrKcZCto8qmCEHuChG3DzDoFaSbGFn8nLdZ6D8JHC",
  "key13": "9sRcHtMHhaC5N1SZ4PHwQ9EgMGCsEHN2bgB8HLxC4fpvaJRT1Q2F4JeK1sZFbyANrUoGMZfHNYa7XbGtNkDHCxM",
  "key14": "475XUrXZZ8iabndwdxomfLCEAwfr1qHH7oCzA6RgahcozFhQ7YKEKeoPg53dar15zKceM1XK9bd2riuq4bNLWPGn",
  "key15": "3o2bAfdfdQKrpgD4oxm1CqKsL5g2pB5BF1a5235pH1PoLU8CzUXGjC7b9B7bMau3aUvAEyhnDUAEM9LTHn3w45a",
  "key16": "2BEZBKntqDBu2etnjwFMrvfUuNpYYsXLJbFRxjzkQjN9pREiB7TFRiNFq6A7J32t2BwAhJV4Cojg1FqyTmHAeuBt",
  "key17": "3YQhntPwvv3np5F3MctQRzrsY18JiREcN1T9LQB64MiKwyJCX5H2t9UCyqdxD62su5R5PiC57DaymPWJmrBTww7K",
  "key18": "HyMkqPRZruWePfqXm8wREpAcpbfkg1hdSc2fTMLhbmfEFv6Db1FeHZnfacSuR6oTeGKer1Hm3oGXcDAer4aWdYc",
  "key19": "2effux2XinPFfUJgTgCbcYauwWiJTmaRZGkHrHyiT7cJWtwz2cXpsT9NG6BTHGNPXp3Vgw7BVGScsAACBsQLG362",
  "key20": "J8vfbqmkrqun11A24xzfv3dSdHRN9bEa2gAe3P31MjwYfwBWFQdwjHZx115kVnAQi9sQgPx1rsXL1VH4ZA9VL8p",
  "key21": "3dg2zB14rD12Dvz1mLNNmvjmz5fWG9Ryth3rcTuFg98jHfSq26NRkvEs3VyscBQTVAwfCFjZANVCjnEfL3V7TZxW",
  "key22": "63Xe5W3kTpjiMaCWcEfsS19ho2nnHHhKoK1npFGPJUtmDUKAP234xwxVoAwHL8tgPpnopoZ1DjCd2qydKZDUFczX",
  "key23": "3ghjpBcqADohDhqVbTPfBsGCii9coJqyvRojszmXkUccNVHLysFWhbZEfSvmc7gjKrJZxDzeMvhCRT3y7sC1u7hF",
  "key24": "4zfoZct72y76aa31vaGE7f1u4vN9McJUahcW9MfvNhfgoCKdJDVVkkFVUL5o9xrc1n6PHD5KhjrJTc1wALtnXDJh",
  "key25": "4LHSamSYJioYBG9cy3qEJHWkyrhj8KjaXRNAWVS7z5S4974MjSKmp7Jfusmue3rtVTcyfcQJbxDEhy4F2wa8NVUu",
  "key26": "5XpSpatyf9RQtsx1xnhKneZwsw9SApocE1ixZC6J3ZyZ4mTihZ6qYYu1XqrufcWSXpCXqoWWwJAGzQEKNM3S8uM2",
  "key27": "4M5Feba6duduWgMHTXw1BjoQ1JH1cJcd5oeaFe9ZuEs8XGy7SCgmFHLYdQYM3JMoPZeHuY1oUGEvRmGoevfDp2wq",
  "key28": "4qCbQxLF4tBwejE6iqvvPMQ3cobCAYNcFNvF11RVLXzRTkJP3c7zJofgZeK3EPfu3hMWJcNZUk4A7vgUfqKrX991",
  "key29": "P85zeAwXw8gChTmBz7vRcMN3rcLfxEWbCivhmSRG6x4iyL3WZpFF9DxX41BZ28muHcz3UpV6gg6TdL32HNJMZhP",
  "key30": "41be5KmjArz6ry82xfVJGzyWnx41kwTQcgCnw8ARTsmF1Wbxi5hH3cDQm6HpyaSdLMJr1y3HC6tr5fAXrsJZuG6j",
  "key31": "62Zd94DdA5HEfRJdK5YzJmv2PzT7SdYXcytwhCPQAQu2gN1XaEacCwNJz9SEY7cimQRNzPLVvrvhAksdRukXkYwM",
  "key32": "5jz7FKejmSCew9iuzUuKkNiDN3jTpN4EPzkbP8vP9pYdivvPM2Wdpz7CjaFXRxuo8k8PjtckYNXfMr5WU1bNV3vQ",
  "key33": "21XJu2S3mLLALAZLNCLDVehXNBPeNBkqBgQ5ZHp785rcSadWEKcAUBrkR6NiGcmYRGLmC1trsd7BArmnVtDaygGB",
  "key34": "581KqfzqFENxh7wB16MV9JjisK7qg5LQFSJu7hjpHcgP9Jnnv4vDQ3nyu8wiY74yLB33tYNoJbqArQHWWXbraGPj",
  "key35": "2aHY4ENSEJGtbjCfE2AHw2GiPZwozQ6WqqE2SnGaErJizzPzByieVnCpAEgc2AwcR4PV9uhgLRi3NjN41MmWLP5D",
  "key36": "hrEWvqKeoMemfeYtfFXvxk8EMYiGhPJ3LFooPVJpcif9p9qKvDRh77qDZ6L7815Jxcq5ppNrUv82r1YnW1DeN4n",
  "key37": "3NJERAgan36hG4WgzdsH41LppvdZCQKE3u4YfE9tgbXB7BYtsvToZ4AgL4vCYpR28iHJZpnf78gEssPXuHHL4xJ4",
  "key38": "CEvA8JpcV4xJWHGCaBz4bZu5UCrX936jhhvhSQ8pJyFBkprrnYJEYSCDkhNYQ31nhLzbWpudwrqqYSA5Kc2x9wi"
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
