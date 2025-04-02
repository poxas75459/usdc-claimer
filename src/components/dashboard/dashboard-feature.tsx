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
    "4kTbSAVSyz5YTNi17niq4mXWFjnPxLfNEo9HWHSB7XSMFNzYxbgPpthmSLe7QwrK5woa9HyfK9MyDemtE7MxtEtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKm9fjfJrhZi2YNTAxQwsi9GEA2vThSTa59ckvSvzbHjfe1kftDMCLHbX24PvaE75Px9aufRmucEk1FpMMvPsG8",
  "key1": "2m8mxaTTueVUewgZCrNSCYokvHkZoM89qhmYj8o1gBL67RdDaQR6erc1guCQmEmzJUFwGUnNTtk9DC7DTcqFC5Eu",
  "key2": "3Wthdp6NxFHuSw8HtL9mqE5L9zzR11AWQkuYwnvMP47ksuVkBfoihf7KogjwAn3bqhGkhr39uSYuGiYe8uz8P14B",
  "key3": "q45V76g2ho6BNFgWfmMWCMChwkW67PBjscnBukj1dBjqsyZXUPprGPWiutWyYHnnXbPnZdvmS2NeoXmrkuYph5L",
  "key4": "dRZU1WPYCQDFoWM5jqQy77mVjrPCCxq6L6tdw4ZcmUmPucxaYwoLWzMUo9SFbpyoFnFRXuupXGxZX14fDwDpzTX",
  "key5": "3NgoQLCkxZu11tMjZe18mhtLM6rMc9E6pKcrr7rLfLcxNm3T3usSwAo8zJ3PUmbkKKQQnFh7JmoMGawy87Rix6hN",
  "key6": "4Sn2saQXqBVANxkkTLuanEPZJcLEYceRh4cTQVNts5pA4dL1axki7cZM9n1qZPXLitfs3WL8YP3wPScdLgtBk6R9",
  "key7": "Xe3h5Dj1RBfZScUnLU1K2jQ6ygYRCN63L9LA6RNReg9De4ULpkyqPma6qYFNyir7Z4Jtrk9mzqjRrkMZMR23kNA",
  "key8": "45EytcLh7NxttJwehZbNC69HTxyG6AijRZewYgznA6BEjydz8phxo4GD5d9juT3i5z4UYR9AjewYmZkAu4cJNLzM",
  "key9": "2bBVqY8zrDWHYtjTMypjn7cJq222X19WTcXbAtocip1FvRBhiUuHvthsHbBeqvbvNsASm7cReG1dbhYtFyuGsKfA",
  "key10": "3Bi2Woo8a1hm6KzSfSGvuGe6WsBfFD9A5ZEp8WrMoWPbmDwQJ3f9P6gauQHUX5dduQLTpre6R8SxUL7yKbFAqQyE",
  "key11": "5AYbZrS5YCQTGPk5uwno8t25r64YcCGXLWcPtx9dVALGSTijVLXRRcs7PzcDWKR1jvZ2xqCWA3jgdcV7kYyupHwd",
  "key12": "3FHe4325wXNYcHc9ckhMLGaf2G1pN2VN4KDGHVMLYFTZSBJLFoErbzUMi1VjXdyt3NTNCitxxeV1HhTdyDP193KN",
  "key13": "67LW19caihf3tNidMf4LeqtTzvmpNJBV7rCm9BCoxxJ56ceH2XGPjZtEQAKNoYX6NFTtFhATuYYdXvcYwdB2H1L4",
  "key14": "3StiSQbFsBLeQL2FV7WK9Rk5jKWHb5xDp2ebdoTP5MzcQucDTGSaUFUZFoaPG9FhtwgTCFdWzvLBP9J7eRDAxyMt",
  "key15": "4wD4HbM9mAjHKdNxpPpiB36o68huuJMCC99EVCu5xP66fDEwuunBALQhWmYMTrho8YymJGyX4yEXrBJZSf5i178x",
  "key16": "VEycfP2dZmDH5RiuWF5sezLbHz5GqNoEZbqwL8ko6ebGiHEs76CDyEwqxmfJewDTBE2yR46ki71ULT338nQ2sts",
  "key17": "4DyV3CovvythZFEuuNVZpjYmbFLgN91w3o2bS8JwqSP8bhd2Rigo8w5FbzqnX2n9DFRgYwGfz5nvV4rU7s7wscUt",
  "key18": "3H5vpUQ3ju4UCBvxL9jEiXBSChR9LVYMzqon3zD2urLbaPGyDPrgiHaLov8R4mqwasMzydAZJ9bSQPM97WKTwkLE",
  "key19": "Hi8FtGBShjAersYAso4tVo3rwT7aTFRYwE6AyWYxtphyUYs4BvtnyHFzgk89Y3uex1ieoHqaa3W7dWHkKi6wy9r",
  "key20": "5euAtdaDAsVikNQFmPpeSxGjn31E8vZ64uk75L9S637dF8QHCrYvkGYkXoyua2NG5HBdapSCKcMnUzKxo9Fqyob5",
  "key21": "5ymhFKLXyY1SN58piGVoP5MkNK6f56mqo3jXbKWwmGcNPcgvV1ineHawnsb2qtev4Zh13atB11AkCDkwifdp9QMi",
  "key22": "5KMDkJZndzLFeLZQAzuj5uoC8vMvWcXkFbsiU8WgxZYWxBDoymwxhK1zNQiRzA4vzagh1z589MpKZuniDRjHvEYk",
  "key23": "4n6mT8Px4hqnW9jvYEa8XAj7BtGrcZvq8JZCj4e1DCboxGgx5StZqe6yngBu8Cs8q3DqpTGbbDpwgXqJUQANT6rb",
  "key24": "44AHBgsJJW6SjhHmUXyfHbN3LodKuoYv2KX5hDPqi3ZwhLS6Gv6NZjGptuzRnFWF6aX7EQmYePC9e2Gz5nZ33Gkj",
  "key25": "3bQuWsGTmBkyESUoiehH1Mug113MHAS7cuaJXsw3dGfpeFT2Ks6xB66XyuZe4XmsSxoUoNkooh1hoDfe4sbTcZp8",
  "key26": "pQbfhtFcMkhuAHGuX2eDczZWykEmsp3TrCyvdnRWYoYwonr5DXrqdkJwsyv8SoBPNrSonrGDGrgxuPdntjN7Qek",
  "key27": "61Ciu21ChMzLw6b4RmMaJdxHND6RQGrPAwC2aZUMck39zw3JN6nudoXP7eTXQH1itTLkNZimZec8yCaPbHBWduav",
  "key28": "4N9ktnWjLrPUcU5DWhSt9vxNDoqhp2paFBQVEQFegiufQ7TttGtES1o9K6YgkotC5UQ9QeCNZhhH5bQkw4Ahtu8C",
  "key29": "5VCPThwGjUoHd2So6NJVmsh4MBERJVNjyHrkD9Awe8g6Yh4Kk1y3s6LXK2inaBvQfw1uHyFCKg2uBdgYXB8fgrHe",
  "key30": "3insWDHYjUM5wa7meRLUT6SnvfAYHN1PwSFU8Jf3wUXdcr588xKpQBiyCsbxSReVqme3RNYhHbTzYvrBEHn4uNcF",
  "key31": "4ZpPkKKFV8mWy9QSD1wwkqsgCZdh5ZogKErGJ8rpWL3JYGnSLcpCRhiuKRHdVRkL8nJgYdSgbP2rkB575tm733AZ",
  "key32": "37G3KadswteW5iHrA6ZUamuSErUHzu4zdj4wnoJQJRin3ZT1R5PpuhciDTdwgnwpMGafryNrq8tN9DovZahbx75b",
  "key33": "3mHJ5edgXU5uDE4Kifk4sEfGyckeifDmJt5z6GPKyAaggE4UV2tbNaoznP7My8R8cDTwGRrGHcALMCDu8yqmPGnh",
  "key34": "5hoTGh5C7DRPiNsBY2zq6VG53KrcS1k9m3BUu7QQ6i3ke2f5MHgCo4KmESL4qgFXn9amGe5LCFcaiueqQK7k9WsL",
  "key35": "2SepCXnDFfiQd5m6yoL61RaopPVJN7UwdGRBKqymALwddPW4LDnrsvF5f6CB81RjxP5MAkzbNvEJFyYZMgPpBUUY",
  "key36": "8rLNcS2TA8HAbiYUk3sTEXgsL8DjQWEXnvmQqZpVrNwQgbhuxBeHhLRWLeJyxKKKP59Se5LwcCRRUyCBeLjPf7z",
  "key37": "2Q4hpWQAxWtw6nCVSuL255LWyNBd7sx4Q2YtcVGz3oNgohgXF3NiceTZ1jwP56J27zv31qiPCWcQKEgS635QGp94",
  "key38": "2NvZPB7j9ej4fRGrFk77fxyUC1oLsag4MmTtdX9oX5xni2gHcZBum8i9B7nStcGdgLN7fmnCAV6NSRvWxjaRG2T1",
  "key39": "2JX6AapssmXWCAmACosRJ7dQCEEFSYwq65msARn6Siah3CyaRNiGkfBrwm9qBt5GDPRR9NBg5CKEQsekZFUtESuc",
  "key40": "osZyx6C8yYqtiAiR47C9UwxkAdFBGoPYB9KnSuy3gB82E67woXXoDkPvLysmaU4f5MNpqutboors6bcvLKE6tbc",
  "key41": "4jD6fTvn6SSQWC8NEM91BujHnCkMcdCGKKXZeRSy1vpG7kQZPuncmcsjEF3syrqNpWnmmnN2Q3j4tirayTNHaDWs",
  "key42": "3F2j5WiCg2wV4HvNNhkyjADzKqyGTEyxjpquN69ujcmr47Y8MF25btUDi5AeGKA5NzHg8zQv56MhQZ9ypUPHr8rs",
  "key43": "4mgqKUUXLg7Npam8zhjAmMwPYoaL6nRMTUQjhGTmH4M4gHPKCdkzU5Zt6NDBWsSvYb5EeycAetnTshWjxaiZim6c",
  "key44": "5uDzvdfp7cCwz3rcr7CnU7T63x32aKyPiTfRYyh9xjLpnGd8i873Qt1X7gDT4RdEy37rF5KzrJs3y2YQ5YgHekAv",
  "key45": "4uDHbKnPb3Lauona7ohjTz7N8k8f6aV4q1VeDT7C452M6hmza2z9RQpiuhbPgxLP9knma2wRnizbLcHY9ztgUpxM",
  "key46": "54AANTfgTEvv4vpKJikFQvnh7YXAkBcP7uniU9KL4nAwFn8Eks81Cmqn3QCbuh3qR7ohrbqaq9KgULXqRKkeRXk6"
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
