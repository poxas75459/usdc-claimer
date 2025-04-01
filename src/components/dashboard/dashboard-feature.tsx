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
    "4kUiS4RuDKUtc5Yn3DyjAzZhUQ54q8iZfpudYFb5WHfkypjBER2yQsCDruZVuFNJbGpVsgFhcZwtKDvQRp1zFAHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qeg5h61RHqGXvJabuCTE2HXMR2JNLKJA8ZieDq9oNw2G6EJ37CVhThAWirQSHK22gvsRui3DbPnwuRSBchu8xaK",
  "key1": "3thLLM2N4YiTzPophxBUshu2AisUbg2WiQPTNPJ8Fr8cqvBgB7K6ArKXY7FVtm3QiLufduUm3noSiGmahZJ5eH6x",
  "key2": "BQDtgoaByjFu9PqknJiSbrx1o2rPc66bASmC54qCWaSFtUKrCjhcvUcywCEPF6ezZT5KnD5QtXs4th7YqpBxdNB",
  "key3": "3yZ1cjYqkTrGgBGszRMU3Y2SkVHYhiKHG5ynxY7DfwQspcvXo6mWhcgJAaJUawNjv3zVo48mhUf5p5sxLa4uK3Yn",
  "key4": "2RJRPBtQkqTyH2J9iHf38WAUkRFZwzMMuCEQ3Hrp3oQcx88oNepZURXEVNX7qHp2743WEhDY6M9ToVfV4XT5hZzx",
  "key5": "5S3HzxASx3UVe9PxYgR6HM2hf6EatEpoMgrB2RC67kh5JCVeSsxYzorXzD7aZGQNw3RWxadFF6pLPUznVHpghdcP",
  "key6": "3Sjs381rqUwogobZzXdnf1BREXB1uRU7u2KcYAjYQHzUUdk5Hr8ZeBoguuzScFrjfKSe29g5g9ma7W9tcB6EPdBk",
  "key7": "4Bzumh4KnJWpbWPdi2AmWXeYMDEZnrW6P4KHg92vXysbdKejj7wdzqsNanUc5xAqqiA1Uo7ykQ2ZxfTUeYaJY5JG",
  "key8": "hCkS9o5odPXRxq91KA8uRYUoeBHsu17YAArdoUwPnmb6XxFtFSzTVqUgA8JEeZmakimWfT8SwEjnsjJEvAzKBfv",
  "key9": "2BCTTNhYSLjMxufCBzifKMtCfWReDsbTWr849feQHrdMNf2q4Xxp4BNJ6VM23WmNonKjbgRgvZtp5yZDDca98bBm",
  "key10": "ZeG1bJu7PBuKfwpbQT6dTmQ8SFmmfBHmLD3mNeNSA29zKxZi8zJrfyWWjf1SgE1HW1DemkdAsGgoymYV69cVpax",
  "key11": "XjAL1yacRpjqDbhTziA2LPoL1NCmsR7VcWni6cPKFCSA3RH7dPc59p3isSGeBzXDxMhXmU5c1DBGbgo1AoUPE9L",
  "key12": "62vmRAkPvPBfH5vbbtj5jxbRHm5gHiCZxdTMa67Vo8NprH41y7tFSKQiLh2UpWDyFZsoLGRyPih9bZYu72j2R1HR",
  "key13": "3K1niPXJuPoEw5euzL2kpXf3QSGk3iszbUPagHfvcBQxqKXXf7zfpV5QDSWKm9wEoTf2YJG3tVj9SobMgNgXfZaP",
  "key14": "xVpEtci1d4ZfxZvUwxP9jGUEU5xJaRaVQLwCentkBYTA4CSTDdR2XMfRBUa6brjdnukj3DKzRzhNrpxW4E9ASe5",
  "key15": "3nrKThGKrU9VUfnHhNWR8bBZ2eEq89wykPoTsZSx1SwCXgZXidDtSEUKytcVrhdGikYdXGqVGAp68X2pS4FKn4Py",
  "key16": "4S85jPA4dfTL5wP8Dp7T5HQBeyo43tEAGAvk6xnZJ6W3bokJoHED3HwVXDowZSvXBnXBuwq6RUDZz2PJNZHKrwyS",
  "key17": "5zwTUmk2dUempoM2quj9NbmNpBbpm7ZJA3VndEokPgRqT4HsMDz5kihpb7aSZH6eDQ7a4bYy9ny8PTLfpmLmGby9",
  "key18": "2bFXZ5ywaX76Dhe4uWkkNzHD7aPekz1Akgt7Tp1wi4fp2cC3HgtTYUW6UbFBCe5Znn8jU2jCp91ab9Zw73Kqav2d",
  "key19": "34UwZMz6bb6oc3FFA3xXGf4HRpkprXnXhc8CETJXuYFoRC4EXasVL8qZve7i9kfUYNjnrjrnsqNVriVfgHsue4zY",
  "key20": "5cbJmPksaQu6hhWSGq6QxTntyaM1SK2adRNUHWZDh3WexgGjVqZvaByr8XRfasHW8JPjnpVmE6KpXZVshY7ZJeby",
  "key21": "3GvENTC1UbfBKHqZE6VqaCYrKCKurWWPgYNy8mrhAsPofE6WWiHDwLhMJY9HEqxSANTiR1w3qgMcVNLzqUPmcEQA",
  "key22": "3iRz4vkL4eCeRMS8fPfyDNJASt8sysFchncYUF377YQMTN7L3cWnx8v4TjJAvSxL5AWNg1PqDNW1n7WkSGErs8WA",
  "key23": "3jdY9wTAQr94VFjZ6XDkpTmqLKNeM8YVxpCcGfo79E6EJpFicSgKQehY62bWFvS37YUaufZLYBRfekz7Ah3vnppr",
  "key24": "35q1ro6CR1LUGmsfLgmwkZ9HMJuRHJw1wucsqhFY45GhNrz6FmCnSmLdXEYkuwvLwCyGEB9rKo9DGJ4CjyjS8znd",
  "key25": "2QY1tjs1rRjKK7SBeYTXQEi9ShHdDQwGDaUhCAyUx6JqVyVSxRR5AAnaRGtsuphg7FnFBWNFKCcLwQANtL2jTVKq",
  "key26": "2H8MYkwFV88zUFoRoeV6nKxpdMCQsSv9rqgJ1NXd3BJPjmJdt6St2vFrQYSKSSDeEH6fsr7M4B7z8ZrEAuWbkSAh",
  "key27": "3HEKaULbfcWEGsVPEwJiP2iHjwaJZXC2BPchZTGfHkZMTNzvfmro7HoTRWM7n4fR5wtjiB7Vw3S91hua93Mdwk9o",
  "key28": "twfArViFKfJfhEUk81QCb3AEW8jwneUqU59ewLxCFzMpbhw3A4VTUcQG5xrPKHabpx5R4Av1ahAAJUikPHSzgTH",
  "key29": "3fBbJ9jqscXbL88wuQF4TVfHXbXq5HynCP8t4gf4t5pukAF1C1Nd8RL85wbTgAJ3omfnjL8VqdSxtnULWCEZs6mg",
  "key30": "2GQ1J7Vg6kfz4RebxtqauqG3HDGXuuuN3eEuDX4snt43FMrm1i4gUG4TcLfP2W7wJ4ciQu2rNmc7ovhKuGmQTSPp",
  "key31": "Nw3c8YXENATDk2RzGfVLQDEFfy6G2vzweGKoemerz7f9f4kJxBYqi6GJguf2557Bw5kPy4wawAubcDdxkS6sEvm",
  "key32": "26PGqXfS3eBtkotrujMacnjTMksBhJZE9K11dUS9FTa69A6KMEY6YSfD2YZfnpiG8ReiZ7tVmaHMFDvWtdm6mvt4",
  "key33": "3tkJVaPosirytxHeMwKRiamG9ccBwHojk659ovLaLRGPimdx8r45HWQohEtJpud1SqTFUpUqXkR5ZvQt3954bP53",
  "key34": "zxZoSyQW2zk3UG85EGqAji8U7iF6A8Ur7ud1HqZCHtwvmVHxeHtw7AVxnKysEEfgtn5GAuYTu2xKZauH2hSNed7",
  "key35": "65RQjJJZBVnYxiZdGusYGDi1rTnUEPzfjFbMm7VKM4BnRpECxKfktRVUECKA6FnqxPhNxhfqzZETyGfbTGcwnxDz",
  "key36": "3KsjdS3uJNe5xRTD3yJFQ2XX6Kr5Sd564ZpEpR8CZ3cL17HhMBEGRjnNuHQwZYggqg8ZLsyq2EgpbCwqLDvStayS",
  "key37": "2ajSMwLqSgiyRCvBLRJCxpDVxon9GrHMovqWwcnFJqN4ymkAQyFxsoyHnP38hKrdzq5NS86Cj1QXZQ1dapnfswM8",
  "key38": "3deYVyESYUNtTJrY3jwN2VR2CCYFKo8TNMZTfwhzjhMnhkneZxNitTALdPXdfahPxxrbUXe7Es7N9S61xPQrEoWU",
  "key39": "48hBeJThsptaKf6nej7E63iVK7WZ7R2PUk7KHmp8dypVNF1JH3UHvQLygvMobKtQ1YXQxu3P5go4rjztg2qKCUir",
  "key40": "2F5pSEVimHc1VFnVUiP5qqxTEEeb7uJZmgZgXAPiQqQkQY12FGxWtnx3mjiKQySamqVZGafirxQiJ5gCaxydzbpT",
  "key41": "5fvfcwyUEfafeh5CjVN6WttEUmRPaPCt7pfn8s8VpeSHuLGQTLfgNP2Ts3LS1CrYdzQHMdm2GJGBfUyGUNv2aZmg",
  "key42": "4DjB1dZE7aXDYzBMBte78PiB7yfxTRcQi9Sd9gMLdHzP9DbBx9LpeqNFsfhge8G1TwMGqQ3p72tAXZjqEKUWqpqx",
  "key43": "3Mi5Gp75Rpz5BUHwenM949BCG1GnGGbj2SCCRqPynMRAERxwJuU61EbNFa8cjZmipLzWVWG6gwc5wL96fkTNF8pD",
  "key44": "5uGqHaCpJHcsx8Qxv2S8Zdp8p4pQgoSMij8ywSWMYeU3RDJeAAEQF9Lu1BwvsTcjyQWVFLp59EhGF36HVJJXSxcd"
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
