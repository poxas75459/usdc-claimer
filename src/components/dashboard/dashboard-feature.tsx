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
    "2vDru6GRFMJt9qFbQ3fqyxAFo1Hzx15TUQ8QUXMHMnVdkw3LZkQSN8rXz7vW292F9GGexK5zjfF2QtpLpD9dBtPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Um8q3hQkKmbdPTiH4w9sSDb2niKttVVrHzYSZeZWRoTbDygnoZeT1hijynD33s8Hdi9ix2LBb8CzxpQFen4vkfX",
  "key1": "4g164fA1Q5X3rWxq4sWQ2u8gMXHks1o5ghWQAbKuPsHhAzfX6rnF1QPcQeiYug7jFKPdTQwcSae8E56E5ZVJXwB8",
  "key2": "3PTf9GeftnZBA3cz8w59Sq5REGskNzsub9jk645y41sAZsZa2sh7bmUjSvAhgCvfyyWipesLGGqzoh8BwtHrghkV",
  "key3": "2h4E9Qs2NKvTbcwEKcDTP3XqAHXMMLJykDzZt2kpWLuMxJJq7yM6zoGhsHhRPcebAgYRXqknkq7dgM7R6EhtmD4W",
  "key4": "5tyqAKfEVfccztWWeR7cbzANjN2X85Pq1FyYWnKcdA1shaV22L1RzMLAXsZifCBj4PMdbBTPPXt18yUxk2popoyK",
  "key5": "5aZgL2eEKSo7DrSvARgGsnoW4VMcUriD2izYaztapWmzuren44BJE4zeTSDeCJ7nLmgS2Q51QA2aBGmPCdKE4pi5",
  "key6": "W68mmpKMmZU8LQ2TSKhb97krw8ggzjfG91QG6MTJRMAoaFuXU2uQmePQFmmRSdfu3neWan8N4YH1hkzPfYrM8fA",
  "key7": "5NeCADpy5UVHb2KhTrUW8FhZXhv4BhTKVNxAtvdma8RB455WjYBZ3kjaDGZqDdkrSDf5pirj4hd8kJ96HZixt1jk",
  "key8": "34cwDBt35kP51a7NertQW1r3qQer5cqJoQ57FehG93nQaMe9y2eN4RVxJ3Js8f5jmLJ1QwSkkV8zigGxpqkATqwN",
  "key9": "9dQ3q31FhKU1iu9GXBYWY72LStRxoNzgB3gRTnQNDj8QxQvqUAmNtQfWukr3efh3H6UwoQLWoQkw6YfcoG2bS8o",
  "key10": "4wGtVH8QEU3xPSUTYNuGCdapQKK7R7pchiG9zXm1Bc9nyz4Ayq9nZZ34NzBHnhZhYSiS2TxAaGVWPHvTEgZa2kaJ",
  "key11": "388D64vimeG4UQ7Hu1pWg5sBpSDQzeEbi9wAnvi3gsrCHeDHyfSW1hf4eQX9EFogPWZJ1HoYtHtJSdSzMKjSYWq3",
  "key12": "5Ee4SisMe2TitGN2yuZw8NHQmhfDUkvNzdG3i1rwEzm7uBCCDRzw2eKqwtRhsRUirF6AVnSdJBDjUXwDToMPLx6b",
  "key13": "2VpGs3Hq4ubftnpA2Z6wGfRbVW9DZqTDiosdtJzv5qaSzQW12GbyGRcceGA5Sg9kQbmqCSHkgeUQNwvDqYt2aZU6",
  "key14": "2SENJSNdccXKpQMENiMgsgQ9oUBU2H4GfEaEv7LNXskwMSG8nnBdkhPtf67Fc8pGJLYqg1ZHsnG93gFQ1qhu9bLh",
  "key15": "3N7zYsLGdnkz2w6kNRoKkZQevWDHbzhrYbzhSKmswST7LQHK1kJNB3ZLmiRcUTp1wtPFFuE4GQKcfhesvsgvStw4",
  "key16": "2AcRoAuJ26mmXGhLt8C8qkrH6stY2N6ReR3m8ZJGPKs9DHrw87rzMtMXsJky43fv6FK78VLyJE5VPNjRk2cAKr93",
  "key17": "3C8bpw1iQk5fkASX8bkCqCHrL7EVeuGA6Vwh7Cp8LyTLJpGqxpSfpDtPLemhJFG3TvdRTP8k1sfxR6pMLSBYNsVC",
  "key18": "5u6ScpocnHpCKiK19N6s9rb4LXcx8xggyJagSNDarM1wW2Z3UwACXaqyFw2odWVvS3QssjX3jkUBJJrN42hERVdC",
  "key19": "yH1CVU5eecy7MDgBC5S7WxAwkwuwrrHF2G1NzVQvQcRAtSDVgHDSqW8JtCQJeNzTXvPxYVdFFxPmFSLTBmK8Q3C",
  "key20": "5pk9bcqm9aWrVpfysKT87EY6pub7HCMDZkRjCEV5YkUWDVfi4AzWZLe1vJvd6i3rtxEZ6TMeiudZf2HGAvWpPQeE",
  "key21": "DSGY9vabnvLWKk7xocgy6SimzSDEwKXrsNLmN9iHEb3zTriaGeHHCr98M3M4pyjGvyxdouGnTtBhh7VGRtGdivM",
  "key22": "3rxku2zgLoqhHCT4eU3EUfMUc1n2iT1ibStBFUQKU7EgDS5wMdjy8jS3x1memnWFQ7vYaHfhLKgMRv3WRH68ciDA",
  "key23": "3dg1k54xeWs8RFSnJH3TD3bVmfoftT4sXTbx34HyLivRYWmz94AgH7X5EUNqGceabY3xLhTy5BLjhV8PavL76puq",
  "key24": "2866DNTgwzJ5Ea2GyKHxRC2WzQtt2webrE6z85UEAwThF5W1XCLSpq5xir1BYD2ZeYzfTkmBAuoC129cbgHn1gK9",
  "key25": "wxejDQyyoo13e3ackyXXp48eBFEDfo43Ee3QR64N1G9apVH5cjphFxDLxaVYVad8gtFrLEkSVYFP4LuWeFPGqva",
  "key26": "j1otjg1UrhJfHbyuVx1kL6xEg9cco494bYedDizm3qYaDTkUPiwVZWczDMkqzndkKMBeQuqbNFhqNYR6pog7knJ",
  "key27": "5K5VoVrbDBazGFJYVpobeSdR2QjN81WMpWCAFmFHRdShMuUT6LoYA1A8bGZgVW8DksQU6mPemidq5qFfmcbyHrtQ",
  "key28": "5U9odiXHpm7gRd69fXgNFya8dryCgYA8f8nxqpzcMhhnvgz8a1EzJbqdmykUJgYRu1jMqcm8U3NoYjrZK6JeAvxE",
  "key29": "NNNy5gSF4kH7Nxe3rxexQJEAjrw2DkoJZo147qGi7EW6b4E44GtniF5UzJC56DB6A1gmGP9on3dfxoU5hjWR5ku",
  "key30": "baptG4Vc977pXFiUdcWdMEw2hEUCS9MpUWtRHcapmMkGFnWBBPUZeaZLmVAgn47QNn4XHiSWmYMXib3abdbEHxV",
  "key31": "5qUUBKKMyta91jfu1NTpabjZahwiHPPUcvEV2nLi7PwzG62jPx8HsNUSUxTjmAiHqEVTiERD9fQGTESJNNw2GbLC",
  "key32": "63ZJeuKsDAMPW4DDkissk9s5WJBD5SpBcdMgtFChqWjaZ9JCzZ4v7jFpvmfT8PunNZCgXR1ypGCp9MNQ2sdzJiET",
  "key33": "2p9vipDtGJDWvepkruoktTzSDbz3yEDYc5TTUd2T2u57iHu4zS7kYcBLvLaMZPCVC1bpU4igfv3nVhm4vMHApU2z",
  "key34": "5q7MgGmUfsocjii7iPYwWCG7zVVmJkAxMwr5jN6n8ZiRKXqsX7bTnAmVm5bX5ND6vC6ZwedvPVAJo4jJnt79mo5z",
  "key35": "2MqLDXVpqyJE9DSHfSc1HQ82HesYT4Sp2j8V7HgjaVn9rifw7PG15c15wGNY6XsNS8RPzthJFBfPpbgfq31eAYDp",
  "key36": "4jac1sqdNC94Z8ZSezQB19d8W47zQRVeuzd5J4JwhCtR3JNdawqPbb1qAXNdpmmLpj81dXACwMUPGPU31uZLMKmM",
  "key37": "2FRS92YaSHyGPUSLxEvKwLg4n6JpfS8d1UwoMEGtmw8KqKAHi5P95xE28ZMmLu4kJeXiERoA3UbT9dso8gGgesyL",
  "key38": "2J9tQVT18twhXhcLyCCfTo2FxtuP5MVMgh1PQUrQCGwGAJ4UbVEQeTnR1pzLT4UK3iT9aMjSBJ7zViKeYFcUxZNh",
  "key39": "wPrDADpLf476rHeLbpoWDSYerg2ocuukFgQr5x8H6j4Ckj2EAudmMgzA1ZuBz1aFD8sk1eLmy7aJshe2jVSkja5",
  "key40": "5EKDSG9cLcak2a4Y6PSg2foJLZLzBow4UKqvCLj7ngvfeyXnnkeTUyktXbTyEoEZ1FYkw5DNJtaYQxfHaVVmogYH",
  "key41": "2c5i5mdzoBs3LfYkobc3LqfgH3LNti9VmqJiqD1XN5aALFYm8EsS61FZaqoR7XVgTXaWzhNWxTh8nL6sAgJBnZAK",
  "key42": "57kmcx2yWPLqzm3b8xLHQmCbx8m1reJGx18LDGr9T7HYxVGxEXSQR4kg33gvEZ3wGTaxahgXGfdMXbgUNogEGfye"
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
