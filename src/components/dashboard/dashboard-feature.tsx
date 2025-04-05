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
    "33pdvaP1EDoS4r2nVR8BXgD4Ct6wFdwyZRQEi87VS2fhbavgmxVgnXdVHMMPma5sy4eJLYcVhqdLxfYrzhRvqpnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NpupfnjhW3zCFzBKor9PXsSDCgTWcEvYxYxsJTFMJMU9xgULLzrRwXb3sSnP1mk6rUwNcD8oPH1M4tJNd86MzPN",
  "key1": "3UWHPngUmiHU5fg1sNanFkUN9NM7TmP9BLsyUSwh1B4oSXjru3ivDLMYsGqbUKAxAmnDQP931nw5CE15bp8yz3g3",
  "key2": "5vc3ZZFMd48jMh9bREGuoz4MrWWN1DpR8YbTgH23b22TYSmNiUPC7cHsFRkJX8ZsTdkD7X8KmEEhU5LPCnpMgZ2h",
  "key3": "5bi2q78CLfWReWm9acimpLai9FnvHwNCd7AEiz5G16GznC1X5jRmZ4V2TxriD5kja9NCQjqaMZQndUbZkyUDt2rv",
  "key4": "2ZvPLJaMV5ufPzzYs453MRq6yu7u9ZaJojFSzNkqBtBAPC2ivGtNBbEPaos37AKhHtkhG1zRNbncrBXnLu5a6nrv",
  "key5": "62d7NDeNUhxZED8HropXHq1pQaGX6g8xse6QpVk5eQKAVwFNRjQL65wm2kGnnfxqET9wiyMyHyG3sk6KsfN2TDZb",
  "key6": "3EJgh8dhedqpwC1F49Aq8c74LrRby3v7iTogZULdLPAWARoDMyrP3nFVjJ6fwNv6zLK6asWbgC9h8wDP7XyxFMtu",
  "key7": "3dNfwZBxRLjmYAW51i3ZKwUdRgeaq6qiSmBiZKCQgqcT9SaePAvWQim1iX4S5H6rngBXf3dEsWQN5JnNTScxKa7T",
  "key8": "3PBXPohbKimdKpwLoHGRdmeoWHmEscoLiboVBiCiKGXQBcmWkhfT3HkPcKxcD91yg5MW9r9oFjqSs9QSMEU851bP",
  "key9": "5Bcv7vYEvgbHTXYjt9gRTur54d2yQgFw9gY1CScAywVXiSoBy5kxawWb8X4QtNhu1t6HuyQzChYFYmuk2J8BWjS4",
  "key10": "4ZGQKqies8AGJvjXMjkKtfRGcS84QvhsbaxXjh6TCySRF6pYxPC1RLqrcuoJs42E2LZwnkDv4d9xPC8hNUcecr9q",
  "key11": "4LLKzadAECta7gzB7DACRTKdbxZyrD5ifsot1ErdKoBf4xkRyT4maJyJptDGdfQbfYinQE4kBw4PLgKURpArDFMV",
  "key12": "65RbUn4BDLB9y9EpxMrgerrYcv6L5HGdsHGrKouvPuKT8qkDQYVKrdu4nHqKKaKRz8dBmwnvLp2zkvvqQDUkS6Zf",
  "key13": "21oXuH3NSH4muvvk592bDVHLCEPnNEaXbnQhJXfAWcNYcaahcqMoVoriiMBWaBw4sdUiRkeMCsm7bMCSBPhivGkC",
  "key14": "2fPZeidyke2xqYQacQhedkKP85hWLvmfaMEDex5KpWCojZxTQY7hXhZ79jLmw63jxbPZ78oKED1GzkUi36TKmK1M",
  "key15": "3KP7KrKfwm4eDy3hRanRji7zF54ZktFTLzKEcBt71fE4wGCQ21DYf6EwC12ygJWg36WsuQHANXDKGKBFYAj8aeNt",
  "key16": "5d7C5yrp67WaTGuZqCqazaXDyZ6WxhcPhVyAfN1DF427KyanrxuQFrczNYdapM7iUMBDLavBUMmkTBNL68iCxucS",
  "key17": "3Jnu6KviPk6KHqs179tMGoHj8tFFHhZhawUBJCPxsS7q4Ai16QJWuXqQDAnJN2Evqrz2igRcJArKy56SS7RCpYkZ",
  "key18": "62sR6JCGpBRKEnbAEaqMJfBTPKxfkn6FU91zKXd6Lu9m5BonjafB2NqMXqjD6HFctCnvcFXLsdUCeMMfxk3AoEzo",
  "key19": "2uijvVXdk1pT335U9eR4UPCgfpMBDnWr7LSqTFdLyFXA723UyCpavGrj5cz228yDmk9ZfVvE7T9dEN4PK8ErZ9FF",
  "key20": "3AhA9fNVJeqNJMFmaDHNEzZMMhFsjQRaLUmiXu39DUATLpacFr4d4NkRW7PnhJcn6NVu5W9aoVqfq42wFRiXtjGj",
  "key21": "4KmftdHohRhazFgsuppAGjW5UEp41WU5JYCw5YUc2CaxcLxfMw4Sbq8jr2JdHjAb5DXRhT3UEyo3Fir6QVkUQU75",
  "key22": "27nAuEXUg8dNQUwTdDHmDDXLCajnKC4EG8uth56iZjWCemmKndCDyz5i6UWWWCxabnWzsDyvCLuUFQTiNxmfrGAZ",
  "key23": "3qmGKRJETy6Aa2ADiiSQKywtWLTzzecuCxh5fm4cV1A244fghwVb7o3CxwJXs9YioFsfU1mrf28sV1yDiVbb64ja",
  "key24": "25qXqELDTngvJLqmyF5Wfi1B2LBVTJijk9JYSSwewJwXgNVfX9SSpXVUy89wuGUrfm3FsifmNP7wypCS7Fpv3r5e",
  "key25": "2bPFM8xHezXqFVs9o3qCaENahap5EjwaZjUxmuTNjdbcagZ6KobRpiKAaG7Yj1yYUWApT8E81fsURDJCvjzmhnkM",
  "key26": "FPaj4SKFRxbK5NMFa6RWn8Y44inWnf1f8YYho8W6o1eoWsBvsSZdFCQ5xTchvxB58iAmCNCnuqhpKNHYMHTn3dD",
  "key27": "6giJo2jygm29xADYBYcNsYZCcaew1KwpiToJK51PkaDHLjHAhcTKJUXdAoi1uz7yQdBED1K35NFCML1hqk2dP3T",
  "key28": "wpYeAhEmu8y2VCNwj4VqR8LZzAXrcMW5a1wagVQMpNqdn7RGpb8zmQYywrSg573xR5pB7oxDmxTfYp4r8BUmGp3",
  "key29": "5AwCAmy3x5cCgwjWEeuq3jdTgE52jNQ5buo6mgjR5Z2bsaDVGj3kMVNDcVRZyogee814ZAbHZwrh6XfpwE9gUNz9",
  "key30": "28Egd8d4aHt43woiKFitqRLJdeBE4Q5WSEgokWLjQzkxfW85SpSQM6KcPNNh5oVzXKQ8j6bVCpKBTkLcNXGdahP5",
  "key31": "47dasnGkQhiev4TVwXkvVQFBcTWu6x5GmK556CtPt8NvkgMvZCvBuzxPyYaBF9jcJpCLf45DiLbET5KY2SwpefU7",
  "key32": "4vKCwJfXxA3EgTBsT7AfrmKK6cmUiMzp8RReTZe7nABqaNbKr72RXfJqRbwVPDra62X7w81823s2UpK8Ci3qQ78H",
  "key33": "3RdpnTwy8mMdg6vrQ6YKU7VfFvefJme2tSDhERbcQRV3Fho8gCjGztDYix6TXU2jsF7zbsGF8k9rb9HpX6VmCRAF",
  "key34": "4jU64rVVsrMEa1qrh9CmdoDUoQZPvNJm9mM3se1Ks2cXYiMxQTHyxCrfpC3M4xPqhrZad45dvrG7mcM6oZLEUxiq",
  "key35": "4EZJRSviP3nu2NZU79NkTNbhoMh7kAFmnCXLmnjhwhrwsVySH8o4dc1vJTjrHwbenbEHXG9riAXUQ7iyroPiS2tu",
  "key36": "5FF8atZ8Y7V29o2t51EBQTk8JK3Vp84JcdKK6oWdekmV8tBgsjyXCU1gtEyGQWahFdo2eG5jiWADvTPMzb3kNc56",
  "key37": "3YtMi4Q13Ybd4iy4rdKHQpety3hG3Md9HtMENPFHc18uNHQrTPV9Y2vYbwFDvQqY9yFTxEs3UfikSayiQkK2kQAV",
  "key38": "4DoXqHCREHHyULgkwmZp8G9UvzRC5ow5YDHdnxj94rKAVxPRp1Kxr3weLQwhRQ5DtPcVJpNq3c7nKCnwzxgFsQzj",
  "key39": "5MBAXM84vavrq2g77aAL3YdYbkTt49w2cAhXmepERpGLvUPjcAoaSdvFTj93WDYnkza1CbsdFMthqW4PAyMb86AG",
  "key40": "8CzaCG7UoZv798nWu9JVcG8qK8svVD9vGZSFYXM6zEJS4znDswY876weX3ZQB9CxZefoWBiMjzNjRTRjvFhmQkW",
  "key41": "4YdNtpPNjhMGWTnUQW669Zhqw4VKhm7F5zJ4SW3XzrUNZJBM5VaH3eGFYLGCMamMyGCQB4eS1Pb1xpE7kev8UHQA",
  "key42": "4fjG5EnYcEU8PmjLt37DCTKK4UJHzyGcevvb3kRELd8zkWBZoyeRnwawXYRjoi8v7g6XthJkKhWaiq6Awjaistqt",
  "key43": "631Tvu6mab7e47vRHkjELhwNDUuR7wKZjatnVTPwZQivCixsNj1zX5PLe5RcuZwZBzBGg2mdjSv2jZya2u9D9yzf",
  "key44": "2zdL6NkumEhHr2DBRynDeZsrV9C5MDLiYYh9YHCqGjSfYZjG8LpTX95EU5znGKA9PvpBNK8EdgXDo6Z8ab2NfzzP"
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
