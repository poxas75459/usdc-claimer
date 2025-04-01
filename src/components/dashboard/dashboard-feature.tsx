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
    "2GZCRRrw547cmPgDEVQGToU39zSxrtYtfvy3AQPekGUmz97YgvPkwR3LuvfHMSsNhxdMuB3W75Wh6qvrUh9s4wzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eLAyrWvtZG6dQ18YmJM1iMatt3bDkXi2ixc36HZDVkMxBS5jyrEmFMPz2mTauPVbHLCFAvHWoGtiFrfWrWwTSo9",
  "key1": "4Hn6hsdgEXBaFV5VF75kmx9VZznr7j6yHv1ahnHGd5dxyFw74cb7XEvuVhFG6ysPoxLzmmgiEDkAoYEkhxrybV87",
  "key2": "2GAAYf2DPMUEhyAUG3uWYCmucwNvmSM3Q6zcpohvcHqeCMmS7BxAKGbxegRZUbStDJjrnJsqcGR7fv4SR4UZdKdM",
  "key3": "3votXbxdAtkeKwzJKf73zRvmS1xoUxPmeL7mh7oUaL2iRKwZfvfbNex45pFxLXnrfiz44gcHMVbJJYM5RbtHV35h",
  "key4": "26WqRQrDrDjTFWwBEXP8AzZyY1UrKxAquNAG9gWUnzMNkckcMzAQGLjUrCVvjYkY3qKpsTxUz1Br2AkxFgVzzuxL",
  "key5": "3Tq7BzfyHyAimZUUNUZRqnmB9adDP9cEMZtYZieheAQ9iKpTPqEPwdcNVawUkWD4shZbKHdC14ok14EHdvF1uhPb",
  "key6": "TVpQMdHSKb73r8UuxkUbS9aFbQ4QnJnp8t9kxDmShjvnU83qy41yE4j7jHTNWg8sriwpB9G1yAKynnnZXzks8p9",
  "key7": "5WzWKyNG6LgYA1bUsP6TXtA3gZ98t8H2HdE9qPnVHgJDGfdrHouiD8E3dFk2hXxJw51bCdBUeWfsBZUzBwtSQyJf",
  "key8": "2e3kaiSruTXEzZKrpqcCRswECTiYb6EWxZVY5w1pUmP7SdnkQ7hoW8KMvbd5P8EjXf3nDnK6Nns4VSBCTNMRJsJ5",
  "key9": "4RJxxX4uT7rpJDySJ7qzFEJPF3Ez6J1fge12iEFAMSkaMNvaMUqBR4YciosD6dgx2dNBE7YGWAwXuzbtEjKwC3jk",
  "key10": "5PH2uaryhoZQUazWs8WWDJJYntNVmjHax6vMTcU2aXQk8j6aUuEghPuEt1BZMMijrFudSLrJ7sFH86NbbjeLDYTL",
  "key11": "5dUQ8D15paL2fAm8QeBkck5xp9HFqez8jUBQtqurRUwZNiLTFw5vTuWtPYuvgzjYN2jf5fRGEVuWqG73mCntyk6X",
  "key12": "hfypEJY6BoMgMcnrgfsxAP9nQ6oL9Xkzuw235iVUpvRXBeA27k47yk8cZMNHp1Nnicm4ZDFqwZiXG7V6gq1uGR2",
  "key13": "2XKadY2BKuHqSkX7BeshfdGfgQmSByPRzELL6JXEn1Pd6ChmMhMYFr5DR6EVrsWNaqZ2XyDtPJgRvifXCBDcpnp6",
  "key14": "2foh4PyfTCYwYMvAjqFMuiKZpmnCoZrjSj5o9z2KvKPjwogTtgri4gSWyP9Ri9K7aiRbcy3BhC5v1XpwCkA2t62z",
  "key15": "44bo2BX9YS1dGScsCC5Zp6fMVmF41Mo9RrfzVUqUXrPLBaETDfyjJm5xep8JZ9dDBz4wrm6mzUzEoR9Qj3n6QnHT",
  "key16": "5ZoJhzkhEEcC2KhjjjbPJLppqYL66qvgG6y99nzUCZFRLYKscQCVdByRzDhnGXMCjqvsb8wChokfzW3zSZX2xCPD",
  "key17": "9QqpvLZrRyD8ZdNmdELgFxAjxJi89CDufLU9tpTaRXV9dGbfK8rPet34X3pzP8W7C8ER33aRiUwdxLD9NEW5Xjo",
  "key18": "wN7CVoGTQ5sYY2VXvzK8SUa8dtvp7eoYGiV5dcK3SeCCQ4Wuc3PPwuJqcjTgce1kvwv9VAj4sSfZsuX4paPmoKr",
  "key19": "3eaKoR4ocFVdwKy9qMQfaBVWHxUQeMaxLVoQmhfUSA5ofuQS5HneFEWAGeQYPTBUSjAS7rVxosyT9CWLgzyADs8q",
  "key20": "2vcy6YJSQzHJNV9x4DxQbJ5Jj6bxKyE6uSWToq72My4Jvt5DTLMTNvAX3jCdvTuPnSBHTeJE3cqYgiFkpwfMGPfN",
  "key21": "52AKye1CNVP8pk3XXVMBePxtAcE69NDMGqYvftpoBA7Uq62fCyY6bMPQHifSKHB3dTDz2Lp3Bzs7Vv1nwHiGhc57",
  "key22": "5TnrtFn5XoahbPxdDo2ZnkPwRGY2iWdepw7sUuYBcY8oZgJQjUQA2t4RZvFninQkucMqsQqkpzed3QqfYY5NjEoo",
  "key23": "7J1Qe9yR4U4kKnxV9KEnABp3sjrphmegD6BLkxdiwmEZYdrzgGUNfBF8UELWTxgQ8YrJ8FW5Quv3bcgkLkeKeKn",
  "key24": "5AfSh4fcYKzna4jPuZV4Qa8BREQnT93peX38BVQNZRyw4srRhKH9fDCRnyEaGb4B6J1ky2tgG2LytYXqURpvjgpR",
  "key25": "5SWqCfSq1xKgrAVjXByRdUiTpBNRW3xQDquA8WBmAWYgnQcphqPPcQ5wbHcV6osfoc1k6quvccAQ1w9ELEDUHNj",
  "key26": "4dhofGz1t9rM4QmeYxF9t1qK3BACnnZkMWMQXxYMRSzDnVgyBgGgUXLNBe534k8oY1uxNmedGVYpNPSPbeKrE9Tj",
  "key27": "2RscW98vHWm4rVJ4fvBUHA6irusXsyx3jwTfiTs4HE8FRyW5wri99moHkR8zRFQGQeB1ic8Jhs5ZtGQqpR6bjSyL",
  "key28": "3XYtzwyTPNxu3ARjnd8JjSnCGU98mqHJXgTrWWPu6FrEcGcSapjLdZk4PFY9NPVH2rS1uafaZVnbV4WbrALTxjwM",
  "key29": "4TSvw8AAiX9YSkTQP3GHyZPLcikf5JHtFX7dqAXP7wCiN4G7fGL5oLenN88tM4FNrNumeUnRJkyMYV2xesMbFMyx",
  "key30": "5BGfpR31H5KqT3iiPeYWANddpq9JhCKTTwqHG4PD1KA4dHpmzwbJZ8z6eLZ5Xxwt6UVgiBYNsaJYRLKEzA4rY1Ae",
  "key31": "2hDNhpGHwxou4qXGDfz5VDPpf693GTsN8FEDV8KNeB2NXkfnAFEZZUwiDm9dmECn3S9hurJayqgbwPQ6jDrQzGeV",
  "key32": "67H2hR4tz8VaG4mL5oTzKhjxboPMzKm9VfnSh48yYQ8TAtRy8Hjo2b2xKvs3qp5iJWporjUm8W5TwwjaxVX7Picj",
  "key33": "2FMn9KSM1wAvcq3u22tVyxX3zqJV2oYMqihxDwQ9V3raf1WytkzruoGuEsBjry86ZQjBQjeMobotxtnNPpDaCXeG",
  "key34": "bkSjPsLxdjEm56Chvi7nFNGbb554o3f76WFZaWQoP2AsxxZ8D2Cv1J1Jd87fH3y1WQkm2wGE86agennSx626FcJ",
  "key35": "67UJhgNfn2bCRcN8QktszmdyGYSymoH38gJLaLYaQfi61Q1E5Pav9xhEaTbJe7d8mnSjTXbS2y4Es5Zme7FFLzPj",
  "key36": "43Fpu15PhaYf8EP85fWBjtfq3dNS9HvFiFHC1dqDgRG7NhgbHQ4ZvHU5krxcKCNFum3ekhd3GSAET6AfWbsBeAU4",
  "key37": "2cb2ms1k54n98qHrU64m1EM1mJZf3PRCViqfogtGWVZmE5YjJ72bvnGMGF1qKMg3So5hPcCZTm8tx1m267c3N2bK",
  "key38": "5y5TKTznMzUHELN2TtmWvpDeDTotG2PETuRAwoHv8pjCSfrHvkhCXzDSUonveHprJB2WbSK92v8Fm1Td79SRW8Zb",
  "key39": "5MhUcKi1exppgX2LvqjohgvDy18QK2CcD83sg5D1AHjAmGfJ9n6AUpr35APcGpP8gHhMnhYWsKvpT14Aq4YaT3j6",
  "key40": "3uqaDGzRjAfcX5pTiGHsap4vMujcFKJ57bGQXq3Mke4gnuYWUic5YqSTBPdWAkPqQKXkvq78mksZXiwXuQQp6kFH",
  "key41": "41ipaZhk6SP1LybqX9TFRapwgfejQtE1rdJhe5ww4WgVAWEG48u94VXubqbEDsNkyd2CWcCNV3J9KHrQHc1VcWkR",
  "key42": "3yMDH7gd4K9E2yKdpD8tsFkLHTyNjNbdM5eV4zi5c9RTjyysRkffE7xGwzz3LuFP2czNxM6T9iCBVSCToQbN6Cti",
  "key43": "4nrU3W8o5qVRRQk9wB7D7bbXHLbJzfNmGSAanKTKcA8dPqsTNLt6wXQUYP2hcRAXSBvkYQfoyzRE4Pm5Nf1xF7UY"
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
