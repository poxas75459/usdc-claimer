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
    "DzsTY9t9u4hVnsaB2E4Za7afrCNKpgazMptUv7awrLbkSSvCBX26KYfQB2ez3Ynx6x6vsYmr8xmvmm6uwTSa9Gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDsntA816ks5oFsNh5Vx9LdnJxxx45pFSdXNuVRSrvG4rMp29ppdCYhivdtGnvzQG26exBYMNPznLdmmMPUbj6E",
  "key1": "4nEnzTsfHd8J9hQVKcXbLzABYMyKr3gnXaJVEUsSrpuMWCmC8pcgEnpWAJiX16GT3rpBnDCa7f8EERRoNzdjP138",
  "key2": "54Yq9jgiPgcuck4Vodip2EuZsai76WghMJBzst8dPe8eCgt4juefYF4SYViCyzVZPCyKuqfwwAS6n8Lu64CgmN8W",
  "key3": "PfcUwDuD6mbWacRmgtx6Soh9vtvomxGUZNtHjkeAfw62wVskvnn89comvWzDMmNco4iB9FegrJcppKDNxLrmwap",
  "key4": "4Qi1RcAvLt7Di69Pf6pnPxbmUiVtUHspi3nqpVBgrquWRZ35K6ts1usWNRH6TmA8Vs99FZ2gU9tGnmB3R87b8roX",
  "key5": "3fLC5bo2zdeE5VH6bKLYnf1E96wtihxb54BLBEe2RAsEL9JbAAc7ZWYJjSiwHSKmctBp48DdsBcJcC5e7vAEcBe3",
  "key6": "3UKbBgj6CWzYhc2VTufaqFzv7gvDKKFJjrxFiArnKUAKwmanJM4QrgffqLLJq1VTv2dwR6JKTWh1gYADasK4ZGfv",
  "key7": "4o8gW8t7Y925C1WYhM5U1nKLUGvypwHgPVC8ZxDSkZkmbQXaFA9qkzhGxb2nRhDkCw3xDvG3R3ocJuAoveFGSeMa",
  "key8": "3gnqn5MxxFEJy1jwsvk8cw1xeR8YxJXRA3QciKx4a6apY4TjqcRnXZ8ePtfQe83ZkegUNcGBpeFkrFcezWkaMKup",
  "key9": "5Ww8p1axdziFTL6Ss2pWQv4NwifENc1EDCoAk6UuJQB4DRZb8focPCjgQtzQAvLwBAXQuRrGLjWLY3N8qGS59JHU",
  "key10": "AisN3oenHZgU1uvGeh66tAHpe9gfbxbqCXevSMH7SwpNqcZSS1avz8TnTyeNYKWazCShgGSmsYkPVrLCqkLyyUX",
  "key11": "n7oVg6n4xUc8BhJ5uEUFzPrY9RCHCwLFUzuz5tTwD3tDuHWC2K1WuNZmmbSGGtWGmJywTUCmhz2hateNSiNL4PG",
  "key12": "5sWqPspVJmxbFjTcHc7Ac5ei3wfTK1nYsBeGVSVXShZohW6jxtD7hTt4BoppQ6CjknZTh3hdAGaP3boaLEM3tNxJ",
  "key13": "2bkzhG18qbAf8H5A3sUhf8C1qsYYDuii5GnvH5PMgbzVDGGck9D5DC725YvvKxETingeq6dmYYbXu8KhEmyDi9Qs",
  "key14": "3PBeh22eL8TjyTgakjzUtZ8CPLNo5R1nb8PhwYLRgonvqRqscEB4P7M61RH8ESdTkwirfhCfToFSBMDcii5WJN26",
  "key15": "4h1GXs9yHk8EdGbETZAajX4wq2S1Np45BqrGWPhDYZVubrPpix8x529vvKxEmbR87T3QfFNZgRz1X2zGrXVSeLyu",
  "key16": "Um3LrBckXKeoPi66Atq5kYqG28S9ksnknSVAw2YKyr6zPELXT7BBtv9DsREwm53jC8FK17Z2dhAeMoaeyjMM6eS",
  "key17": "591qqUkoumrdTrk5TtFMjLUS9PvqGWqCfCTKaxgv8tckqqNmfvzurVBvSb7SaZ28iX78Lf4CCG2g6pQLx4jRtche",
  "key18": "4ve6VZbemN9bMXAkmEEnQ5Q8J712sKMmPUuxQjqtgDDR7EtnYGnHdBKbrXXqBUgwrGEE7hDCymjFQXxxrG3QzaWy",
  "key19": "2ZXi1strFr113iLjZp6mKZL661Td3zzHSr7DFqdVMfJBjv1nMdY5UVzDCwWHyqdotmgG3AdUeRuviPh1UV4HZk69",
  "key20": "dUPwxZiPE1bhvA4fN3vpP6BxAY7RSm1hLD5RweZUBqhamtJYmm4P5FMBhvchvuKZNk4Cmpodkqoue9DT6NuLhzi",
  "key21": "64cFgs1PdydfEUUjbBjXsqw2KVaXh1JQnSzPoJSPMEga1YGwo6fSrUKpPuiWgEgwknFdVC35ZgYo1ixahuocCEjW",
  "key22": "5nYUg4eyGaB4pUhLQDc8bAS94bUP6YaBiyKu1wu69KBGtCqJAm9Pdge9t2HWZ7amajuWMmVDTRaZap9KnPUt4488",
  "key23": "2ivEEcPkAMFRCNrYVmhUEvPEDKCLEJ1YMX5NitM24gatsQaqycz1U71ErhTTvMZPwJweyteMGtUEEsq11ABhEuP6",
  "key24": "3MCSBZB9bj1BRADRtE4qBjwEr16HJbqxdWS3boDyEDSWvkNzEozJYZavmqhTAbFBr6KHRcMJ8SfNZ22ua7q8HYdr",
  "key25": "3gnUaNtm9jJ2h67eTpNVgpiH7srPG6hsEjWSZ5Wy9b3qqrAN7AbuzgxHC3UAYYG6C4n4fVe9oSSSXbz4KkL7c7Vi",
  "key26": "5dd9DydXsoEkzHf15rdoEv5kGJytdBeDnsT1Q6HuJJPboAa6v4uvFEHKkqsphLnGjESGV7A3EnNrQPy766sGmyjQ",
  "key27": "2hnRrMumEmw2jZPEB9AiP3yAbBX7KP913WAiFDww8evS5KDfEDkwYiTJLGxZqU2y1csGuVakKSELx8K7Ptq1crbQ",
  "key28": "bLpCAHnRGuj1SeRmSow9941ogBvZH7Re1mu58f9rmSCjpKJpfbS2sZ6xgT8F7mpTPAnaeqz1AbyWibBkx92Ben4",
  "key29": "25xgPREYMi5hcYTBv9T2KwYrY8VFcxyJQFbVQMwyPz9UcviPD5yvYEC8MtFriNv5G8E4aKsiMX4AwRD6AAc8h5yL",
  "key30": "63N8QTANBJDm1xBiDev5zhVDZQN41S5NYRUjVJ2ZjkoavXbjbpZL4vu1i4RcxiX73TSMnQwgKjnuwG4oQj1NLuMY",
  "key31": "BazmEvbAM4gFNnXwXwwGTd7CdjGd1t1ahryH9qR8o4whjDw2LoYqZWcNoxKZxjx53XfoP5AAasUfn9CPju2W53G",
  "key32": "5f9N3XjT8j5QDWe2zTLV2DTNrnhmXKqa7twqWiEnvgVWDMjJv9LKEKBKwDvbwDoLSHqFCfNAcg8GtFyrXuar531d",
  "key33": "47B1qpoo6qe7mQ1G1CXQCaA4xgBbSaHPumiKWTpEt46SSDdGCxBxtvyZ2F5iUHuzRn64dG7sjFyXqodBGn4mB6Rt",
  "key34": "618qxnLaquFqGEpuBX6pVo88d86DYrE96id8kGhJLUr6jzLYsQNeEmMXuKGfLyitgrfHV8kJUXCozVJeov5FXy6z",
  "key35": "orYsW2TGCo2yoSV2VKkq4WN8jvdB3QSZK9d7cCqZXiRDpVSzMme8RgAb8BZeHahKemV6HoLrUi8qQgrMifLyPWu",
  "key36": "2Ti8ktpibiqFhomUUuitcRMxuK7NxN4KqWM17haWHDLFg7RSL8J9NxwYR3Sq2sLwUrFDGEXrqT32Eyb8imGC59L4",
  "key37": "2FCDuDpr2CjydN81UrFWMJHKVHCXt36yu5JyGEtkgMb7aKygpVK385nbm14QKDpmmE2HyCVrze7MbCJEkuqYdtj1",
  "key38": "4wAoW2JnrvdJBgjDmfjpMDaMTsFHZUTFUwJY3cWmUNVYngNUZA9FKxvwjm9qSRwqJ73jPLXaKjg7Szm3agmYoUAC",
  "key39": "ycw7kreCVpPbcFxGU3wLPz3L8nWXoY9MznrYhVMrv6NiN4iGjzSfvr1DHZtqbnfxxh5C3jSwZETBnQoRiz2BB8E",
  "key40": "51VQ7nsUDsBRFkAdBff8a611Q65UvqAbkGYeL4y4PvwuXJ9acDJQtzungEt7aNqSdjahLdBbyzEzJZwyj8NJAfJ9",
  "key41": "4maYqBkmKichWGdxXwnFdn2v6oGK9V8f1iCw8AmuUpWB1JSwHcJXMsHEHfvzXUVP2xTugHGbpDP55enRWws4minq",
  "key42": "e1tQmMAKfatVTrXdxPfwLknrfDJ9T81xFcK64rKh5JDAAEqGj9YtoZC42cMu9YrjnxrYW6aExCEW1Jh9tKGGdcg",
  "key43": "49CLGNyRcibLdT1QUsX2HVY4jCzyhchen7Ntc6fEo73pp6xy1Bmpd4qYwLncgJ4jHD8r2SGnZcdtSG8edzXfMPvN",
  "key44": "5rwnrojWAjw9ings8ox9zcVMVYygjNufn9Yf64RXEhHw7bo4UYHNur7URGpQjmnPsq1G1nifmedN1hkqX2whgDkn",
  "key45": "4HnGZwbDFQ4GHZRv4EtxmjpFt4jHWMsNjVGo2KSRTpyP9Cp96FoFAmQH6xgvPEAKrpYrmYEvQSVeegPnmy1eRpva",
  "key46": "2Zp6ukCKkCsrcSpc6vdg7yRCQwNZ4YxcPH4HoC9T7hKGjWwM9exBf9T7oBeoyrkbnQ1BmJKrbhzhqYeJGSJ6Ghjs",
  "key47": "5fmfjATNybBLgswSR42PvrYWxH4GH63NNjx33eeZkLC75t92vLzJGzfe6jSz1FZ9evD8ECsLBsbszKZmmdAfwJ3g",
  "key48": "2HHpxGrYcQzUTBZ4gj3rTwh6wShed6Y8S5rxY7PurVee6XRndrpkNf9fcVL2yiEFijr7QChdxasEjmShon9jgpu3",
  "key49": "5CQtqdit47SjNviR5DjzCkax4y6u373AYKgmrLhoMPSGJrVo1gz4CJmC3VSSRUn5BwBFssDTSCnDkzJHu4XqwrPC"
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
