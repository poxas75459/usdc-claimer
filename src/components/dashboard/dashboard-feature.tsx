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
    "Z1aZvrUop4z9iMejA67LiGHx8BK5eCD2SHZzgz6g82gE5NuE6GZBv6zMU5YcabjTDSGLFo2egdF4TEUxLVdMf3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivRRBiPrNBTNwvVkmqsTEeRv4B2BPHfcMH96dsRV7gagztK2316DMESCu3nLCAXiCi3VFuKf7mBaBTw7HhinvsE",
  "key1": "Ng9XFizaF24Wspr3j87MJDSNaf6KUKiqDHDXuM1pWoMPin19EVjsPQUm75UXxSiHWZJKb8HD6USZghnnc71szS3",
  "key2": "2xF1zZ4xtdGz3WV28X7ZeqCNQ39rXM4naRuHurDpDFZLyBcaiXUWbieKYerCCNrzyU39Dkx4kG3b1QpDpC3ZXa4v",
  "key3": "3qTbea2RUTFFiFh5tL8jEPxjWfyaL7DqAbeaK22Bqr4LV6J7ZS5Rg82SE4kqu9Jg1xDLKubbnUDV9Ua7sViCVsBM",
  "key4": "4ynGNs47LqbVy96QbAZPM7wjX11BtHxk24FmoY9pycYKqqdbwiiCEtrhtsB6MXwq6vaWN5e3cyLeXuimAWWNiVWg",
  "key5": "cvuMCCyksXjJsQm8K9MwTPw3nbcCwGrLQctqkZrMvshyjHWfddsp2i8fyWB2m8CPpVBTQQAYoU1gdV3ensQ8Cim",
  "key6": "SRkKZt9Wmnrz9icwN7LstUJdsHPPFSQgLXHTEbo8FXyFHzvHHs1vWNkhmXx99SVuh747bh3DUMbz1XTNfwSscwL",
  "key7": "4CVzKP146VYRkcd26zF6XQF16sALNtq2uHabs95zneAX35h7VxsoEgtGUdCis6kUfR6eKbMpgWkaaLbyTwGRH6Ro",
  "key8": "3mprrm3m6oet1phDoEsqJYgi2qQmCw73a2Hduyn1NvMh95gEkZCdijgApuRj5L7Q61BtabpsqeZawpWUoMSgSsGW",
  "key9": "CUqvyE2FfN2agUY453DL9beP4Gp92o8ecUoQrqRwRZwXN6of5amAfU9TznzvsC419F4rkPo6HzwwYyht8gonFQz",
  "key10": "25GymgiCieToa6UzJxpBhSwNaWVgLf1JhGbtcExuLX6jHg2ocuxH3wwPWxBbrkDYUigg5QDrvLpaUzbBb4mugHeb",
  "key11": "3Um2gw6ivVhSnnFisVqaEWNpLWmcoaWv9VRC3Seqdn7hDiK2hMjsQ6oawtzuqyBCr9Rw4Us7gMUsqFw2zdKm5iLM",
  "key12": "3VqWE23mDE8GuyGWyTdfjPUcfVH1KjvyDc32TdpKErG3Zy89WXFSWRjq6Zb6cDGqPj9jPy3CTn8tcuXBtHwg16iu",
  "key13": "4VgWetHiwgnQNvapMatWaMheCFL3RRHm5g2m8rH4rQ9SC3zu4YFo7iYqx6tfaL4PuioauR2V18xt6kgKzZbRwFLa",
  "key14": "uDxytTixQfNPmpNpSrWDZdUSehFqKS8zNmkHooZLyZcvx3HA1HnnPE9cxt2bdrnmZK3vMr7KpH4XcLLrFnayXbz",
  "key15": "GnbAHxaB6krWeq2R5b6mLWQyomXeqqKgn2P18Nn5udbGFaAgp5c3VvCQg8HNNZLNrA9zxpEe7FtdmzAWFiKwaiK",
  "key16": "5CQRCFxXAR9sNW6DsmcXN5Nhh4pAFXxrytqnV4y2diRnvNXffSDD9jCVEASipS9BBKxThCimerKTM3JedW8WW7oG",
  "key17": "5AFj67P3fAZhC1qmk7bnTb1Geto3ZRUU7BMWjVXTxdFKcDWmi95kHCvjFy29GpbXwDLoWwJUghMeRgBu7EXeNrfK",
  "key18": "3vRr4bhusQdekqq8nEbXaXs1ewPxQxqEvEn8sgdR7j7Bt63JHzBS3tZVf11UoR51rweZnWEZv8x3sjuFCbUsnWGP",
  "key19": "3aEwA8oZ2M42mnL3neAhyAdVvN9RTnK3NgGGdAaGDXwD9VU1DskJkxiWqXbNUgMJYUADH9LdtC85Cvj2ea265Dd4",
  "key20": "4QALM5pgRjSxLmP5dzrWQuoXt56McGBny64rz5U2vjSRrkaeRHTz6FRjSs6GyVgocbybAXjaa7EMNpAaweXd3U9P",
  "key21": "3ryGJSjCqbYtQ5nCQhghvhgnmJ5DPhby4gE65Co9NS6WyjEX3cZYAyVdVvQCBqjw7eoVcZwmgoEng4LPMftHzeMb",
  "key22": "55a7KCzqXV9LXYJ6mLvXVfSwJaTTCiCDpYjQ4jPkgBN969pkhEmVnq41spJAWdhcUCG1bNnDHmboHqU3p3HafNwb",
  "key23": "3STe3f9w12bPh7KP3KK35W2bEtF3exEz75B2yT9UbUfpbDK2gMyGpQy13sHxG87SkN1tA2BPvmCaNcJQefHj6Kjn",
  "key24": "2PpbahZRfVQrh2aEiTVwNDbVixhr5ddgZiXRVNBMzYSjjGDNJKc2txaCXXa5Wb6fVMMhWyNDABx26FLMz949fjvJ",
  "key25": "3HSEFwQ2Vf7HyYkihKHrmJHCncxBoyB6u3NS8MDi99Q11n9Qn7AHJSjkzj8c5hKwVgstoNEnJF14fGxYb66yaEjc",
  "key26": "3ywRJvt2CTJPyBypSdTVK9Z4nfjkn3CyfUpgfdRZJsYXizRonQesPP7bee2Npy8MetCYukasrdCojQXJMjq7nHAd",
  "key27": "3yL74TpPmYBs7CBGjeELGqNQBC6S5Kpr22hNTPjwWTygk7Y5RDMyywKfBQqV5D42HnSRDgo8BqQkcz3m9eryJPb",
  "key28": "2JxLxRzY2zmebMPPfnvucYzQKdBQVkzdBCNKh4fSs6kmX9ELje7Z79VQQKxxqRkZKV3db76zobkUS8iVYVhfQyja",
  "key29": "2ZVxSakCLDUr76SHHC5JoxBhbAJmBTUGKMUnmBkiY6xJ1yj92wbdZpaMWJzKBkugLJtcC2yc5ByYKm7MqpyMURWN",
  "key30": "5uVhPRH6EtVzfCfJifJjde4pEjBjAfD2Ug4Lt5rEZonWhHVAwGG8rXkUDPVHBDTb3mKa2XnRRL3uQL9FYQVwhVix",
  "key31": "ZcTU8mpxTqK9JS1rL1phtQbUjWzddBga3VJvGDxvm1Uhu2gURYxjZC4Vkdi4TrqMZuuYExyJMhzzuJJE8L8wwDj",
  "key32": "4wNpe7ZKXaMC3qZ8XsZ1c7jJHuzZybZS5jHms7WFy6cj26AmorMsVav9FKh4UQZY2XTjnTWuRqVSFF2C1WLYdn2J",
  "key33": "2oRFXxao3Z71VKgGLGVS3i1hz358Ggada7w99D8xBYwkynQKzWFcRRNASyZSkgkQ5GLCCKB67hfweeQFyzrykMA4",
  "key34": "518kWYcVqv3RNSyncAzK1DFQWvvKdFqosqfbgDnQwMRYHsbf5SvyWCrAMzt74nWRSwNnpRLx8h258RB3JJ69g1i8",
  "key35": "2NY8FzTEwQcu69MwguD56G1pJHhFvrbq9E2a75WvX4oaxbLvUxhcpmWkwpwJSuRfHjd9s3nAoC3W5P8LPdHTCWgV",
  "key36": "2rJYeFpu8Ajxm6frYsFW5oCDJSEmKbChnrhxTEtMtEMCUzwpU9TFJ9zB72ceQhdTBkUXoSpymtm8zVYJVbBPk15S",
  "key37": "5jsehCk9HRfbzgzyRfyBwouRKbxH54ggFQbrhhwo5FPZ4xb5LUVhHKQ1mRdH9zNoFQ2hYysjwP8gkhpiUiynP1Aj",
  "key38": "4N26DsAjCijUUf3pJeiy2m5WxJFuGaNmMAivrjKEDpjRvjCAgD1E7D8WvYAfRVYRM1JNzsto6XwG8SeAmwm9Dxkk",
  "key39": "47HyqC2X2akTRarbc3KykdLMJhkTFntzND67AAcdaMAQDvuya5sv3vcMQuorfzVMyPiir5WQ5x3Etabi3CkM4Z4Y",
  "key40": "5E59mkZQVWDLsjAnamNzYu8MNvLtTJdTgJ5xMNuiLB5zCPEc5CiSuHMCpcrJnbbNke1N1A1y6Eqdm1rwgssW7DGQ",
  "key41": "5GPbZoNXqjrcnTaB449twxS8PcGM3UaSBJ6drmZHbHhTwUzqAesm6jqLzLovZhXzBMPNTV3x9w4nF42f6tL7Agog",
  "key42": "28gdmhbKNCG6b12WiuRWjhHuKt92JP7CtggRWzozp3qrsLuHwsxDso7HUrvBrMgeWNPxvsgzmEWHbphZfAqF1Y6Q",
  "key43": "fGbs5va3Wui29mvo3ePBK2UDrKQhNJinfKJqpWTgvDwm5XdVSC1YJsbGmNMejCxy5EcS96U8XXgcWfBCgsSxJ9T"
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
