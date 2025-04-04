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
    "5j5Sa9k6uPB8GUcvusu7j9aNE4Ez4Z3m21UwwDZoTqAe5LNrrAtZ9y9yzw2eV32NUR1jQ3YjaN4vGub9r1FxJR1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6tNenYyay7TPHkToZiSHTZbi2ukLDJEWvNeQTfDcmpS6oRW6PwQ7CHKYh1uJUvnEidD33Y3rA9AjbvnUzEHBcV",
  "key1": "3xYeAtBoaREjQGCeU3pYTfbCE5fCqssfssuXcReCVLkVT9xDzQ4VUQhX5GB7awXdM3jeiztWhU84yiH6h5Tfq2bF",
  "key2": "5yPUJ5b7j9d9RpiW1pWkRdNBd9HwVkTsAdv7jTPZaKWs6LwhJCt4CNg1i9KjU7StSWME5DXZwBFo5Y97UdCEmkqB",
  "key3": "3Sf9nATi9pGLHRyZQXE2Jd7LfsPc2pBzBnqEW3K2YpTk4QyyxiBf3JXdMXfbPTebSQu9XC3wN1W4evHHBd3o5EuU",
  "key4": "39VzMK1WJZzfv7KzzvugXB1npMVycPe6ja5VLfFFNinNkMFf2TYS7YdVar7EaFLv5Ed9t5ktBUxbT7wPhArqojnm",
  "key5": "SjYRwn8B4jM9icL9pe5tm7cQjEXujCDjL4tCdEG1KXddRPmHczKiW3Z9Ym8xt17WG7HbSdYryVX1f4tRP87ZWwL",
  "key6": "3taRnRwRQhk7TA7LdzsS7Ct7APfFfFVi67o3E3v9LUwMUDosQkKE3qPoQxwh4By4AbG9EwRAZ2sxGHg6eb2QJPU5",
  "key7": "67FvoL6jUE4XaQo3oqPoMb7wk5AeQJNpGJCcmYYNNPenB9b6nKLeoxpM1yjWJit5ybPQde3CySdC2KUM18zofFph",
  "key8": "3rEMsYUMV9VnX18pnXTMxJ7hygh3atvKgXy7RfDTeZc6z45dEW1T3kugVhhf8uGH3QfsqRkEk6q8ZKjNAUG9Hu8u",
  "key9": "5SgHbe8a6WHe7m8KBSLc1xzVD6zyRxWD3NKFeZSMRWN7suedcfYjT5Q9pACdNYQArPxx8BWUWRkqGyuZtjwqYDyr",
  "key10": "59KtwcCBDzwVFG6r3Gf6UZAdfHY9hHRsuXy2W8FCT6FtrVst6GyuZmebhD6wAN2MEmt5GFk6NpBcP9yk6r9CBz4W",
  "key11": "47jgBW2fKpv8se6RLJNzTtJPM9owteG7vJr3bz5xtsNZ67rhNFvYbHoMcXcgLD4yx7vvYe7Rkx4tWJPwD6LiDn5B",
  "key12": "2GSf7CDrHqvwrZm9eoRz2kB2Q9iysfe3JST32xBEar1wkHQsHKuXvrC9iA92kZpqKHrkE4JipR7S5UdD4vGinpWS",
  "key13": "3rg51tygU5DFwsH4BjnJaRyDu5D2GuhpL5gRaXJ2XshRD6hHHXXWghjkEw4zGELQsmox3xiJ2tFFCe1D5aC8M7yW",
  "key14": "2Zna27FRkHWBsMeMt6JTZFKwJh6jjxkuyPyBgdZXXoxabYVkJoVcrtU22UXFafadgEtHqMMVrfNzgvd5yzsAbFzj",
  "key15": "3Sz4yz9jtehgbtB1UdT2VWFQrPphZvBWNXvjYC77G6XoLAWsKCZL1C5Q2i1XSqQbkCgAXzqeBQ7ruegyokUSCtgP",
  "key16": "2hM24GFK5RopyRwBSYXy8QVztgZpCBset1gpi2ccy3hHXGZV5vUW3pbj5EzQxTqtTqEgzLkaJCCpzm6sGXc6bFca",
  "key17": "qLgC7R4tWV7GJMQmJTJfCnNQtCdTDiKMkmtgF9RhP7NsUvZ1BfCGXhtqwwid9EUg7kg6uBe4KLFM3jojEYzkJMU",
  "key18": "EVyUK737Nn2HT22FpRRtp8dLrbGspqKDicwL8NKDkaxtEhdbgNx1kmvy3TCWh7sec67m1E6dUfqPnRKLgf6Jg4X",
  "key19": "57sCifGLAHDu2qjcF8xfPByTcxMQf5bX3bja7a6SJo7DsEBv3XESdYiR7nF4H6MRuk5RPgoTV2cMkLJPUYyJqFpa",
  "key20": "3JLUMY38FbfZ2knQ8tKA1JNmWYBm4yajgkk4sNHtW8ASoik6nj2kWqofKSocJ6CqrGwr9Wya5JzsojvcQA1o96im",
  "key21": "sRiBGap5EiHoKHfpodKBQebUvw72gg1v5Riw9WaXVNayrDb1NhUonQdGbRsRmppjuEGKcUYFLQSty2gSz5qkESh",
  "key22": "3Vdj7HiKxBW7LcMasVXwtBrPqySRLV1HvbyGknbPu23i8vGD6EkFnf6jfyHoGRY2FBo1Gwknny3spzVR75ezJedi",
  "key23": "44qJyDetTyBaP5gCaj7RpedK9aEPS27LKDZubwyYYc7N3ibY6Xy5NuA73a3RZJFLtWU7muWMHFN2FVx5G1YgHR3W",
  "key24": "5cQDGqoRrsokANtauBpKtjWhVCP8NKB4xG5HzsPLMV3KbHYPXAzW3fiHwzu45BbVa54wPWZ6WKiPhn9x2VkGobrf",
  "key25": "4WECktPXAdDKXBL4whwDmRCiE3Pw83ATpMhTyM3atBrRSyERzoyczCSEniwD356RPJo1E97xWf9vcEBroQ9sUkhf",
  "key26": "2QiShyJivP3PiN7BYETQZGfeaGyp1BheFawpvycxCncU78M6FwvPHaWtj1J3cy8ZwdxHDpTjeoskfrqcrDnCda4Z",
  "key27": "2jqrHtHPAUNiBovUc3Fe22CkBX6owfqYx4BLHLD6Xdy9w1z6WfuGTM2LLgXDZqTv2uD3ThPTqqxaXoPewzzwbffb",
  "key28": "3UfN2mUfEYc6dki3RaEqpYizRomsXYrxXCmRLCafUEGrefrvhT1ANLmLNuLbTAGmADGRd28UPAicQDR3GSYo28Lb",
  "key29": "4RKkzztmgoJstn4YQoRXvFaDuDHS2KnkkUfWx5XSUFHFuqvLVMdYtAZU5Z5LpELUhj3oqV2eGiBkNNRyZ2VDRiRK",
  "key30": "32ZHFZNhUFSfthCe6MMS1ZwnTrECU7qVDbUCo8HjZVmwcSQkvCzDDHBjvRFEmK8wyw1ioMRA9muoWKgUhmaR4R9R",
  "key31": "rzhAMn8MwYJvccYTRQ8x2v9DFhcEf4UmXMkTbbQvBoE3CQhKHA9sm4zZdCA8XHT8p3SJaEzgNTuFwDmyw9xdDcM",
  "key32": "wxiwUVbo3LcM8e4GLhGNsxQqnHaoWfEpz4r8vxqLQqjnu7uCTAFgHYk9rvQEjoFBMGMn93FWYV2WRuKJC9UXAjf",
  "key33": "4DjmASGcFEGUhx8cQVPG1yTDYgNa5W9EFuLHpwigtjrGmNBoabktADfsLhpeWPVsg5WgKsjzu6mqHNc2U9a1hskB",
  "key34": "qeJMjCBj4mwJzEzRe7hENN9ww2hdr8gwmscxZS2sd3cit65pGtprtANdMqrK3yzGktrW9jFt7PP3s96yNELVS4W",
  "key35": "2W275VskZcJ2F4pi8fMMsVPkKNWwgW9RL5bNzCUhynHMtyFRrBA6XxKwZtyUteLQ9DRjeMV8LpAdxokYCQySJ6S8",
  "key36": "jMKqywziRCtqgLTkqNJWjCKYc5UDCdGyZ7N3N9Ch1XVHyVVuL591cugFxSWYd337v8pYZREQmj6mpp4VZy2mvV8",
  "key37": "4d4779EQz9c2rzw7xp31M5YrAFVhXuGCfsh16dYXaJWyGg2P4UwobmviNRGe19ppAGK4xJsyz4sbCNVhBGJmSzNz",
  "key38": "5N6v5eWF9FeUsc1dy2cR1p4DZioBNvUu3qowTBmZ1gKwkVQ4Ywue6Rdaag9SUZegUE3PqxJkJNrqZvyxA9ZPjdsp",
  "key39": "2TM56irKmHG23NMctKUUtQoKFVGXZ21XfCYsqRCAwENCYKr1siVopjwdX6anSKPcmveke8YVJV5Bdk6CgXTCLJTq",
  "key40": "3Ses5MKLza1wkB68YQdM4xRbnB6kZV4hdXJLCuCwVurxVWP7hVPUeC3RRN4DLr9S2W9ZrcQTTkm9KB7pq8iqbaPB",
  "key41": "5xVkZcGPKex3hj2UoKZ7fs42XS67Gv7b4UNP7etK7WJyvdF9BN4bD8Lf8n8hJwjqDgrAb7nSJPdtjnT6wJeQXuKa",
  "key42": "14m6f6sGMQ1eWssptcLf5v7uRe6NpD3155tvTM7tABZe23QuL4hoHH7Q6EAY8N2B4FHW3Umi94NF4jrEsya1Fwr",
  "key43": "J84XyN7hvwqAq7mqtrorb2KFAcaUvkmzv5sFzeLFTLQkNCdENssQScxHkBi4wYhNBCptK82bNRR25kYPVaifWpZ",
  "key44": "657BKPd6c3wMZM2VuLY9TZMCAhzF4pfZcGtLsdPWLhosyFeH7XKnf6WR5vUgzxbrebaiCEs2xJovVDikYzCwavSr",
  "key45": "2wHhNbcevvogwfzuapFritG9oL9TXsLuK4PTKp4FvvzjWEJM3irEPgW5PeGp3yx1fCToTQZCiMszjnHxNPQHtJf",
  "key46": "23CE2utpHnGcCK3gq8cr6P7hmw3XkYwm8HGEik1wbMq6chYYhxtZo43d7x321R1hZLzexXdQdZofU58WvgDWyDxg",
  "key47": "3kv9X1ev8DKLZE9ZHiYCDdtnd3dnMSKUeiKpBr251CZcJ5L1BzL55y5amCkV7KiusA4V3NMnm2xKZ9Y2Tneq1TTV"
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
