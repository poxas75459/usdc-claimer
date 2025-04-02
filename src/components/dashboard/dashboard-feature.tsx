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
    "4CJimA3pr5m42giU9rmuweVh1DcNojwkoj6TJp6zHnvixZbfA2DE6wGdxTN4YAAbTuSJGmasdEjcdrKoYFPDyXyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56voBSuFBCWjHDsUzr48VkKuvY8DoR3favywKiqEReScT6Z89VgqjdkFB4tdvAhwtvRFb8wK6uA5Xns32QnDtiCd",
  "key1": "5CbeTsj1yR1E7GPpFFZQXPVuzPU4Y8HripapaeSSefwv7NMkrqjp2JrfwccR1WVcjFt82gP35MTRGHh1SUmGUBNt",
  "key2": "4SdnmYqHpkK2Q4KrcvvjKcBryBm3uRtzaq8jSyE4H1sBUugRxmm6FAsLBJh1YAYbwYC7FWLMt3xAMt4JsmjPc7Gh",
  "key3": "5PviPgSi7hTFreSgqggk6kYELuwxkuKF8q91AP3S2mCNN9BWTxju5PaAyiouk1ak3DPmfGWe8SzLRVn7UH8bo1vE",
  "key4": "4Gk3u8rgtQH6YvYKrZGHNqPZYgfqHK11w3HB1a1MtfEVHVhGZJXrXt1LZX5iQxkRe1uQc63Rm1eMzpd1hvVdqh1o",
  "key5": "31uRu1ZyUa12JabjQxVSMcAC36wDqamg1V7SUbhV4EY2iNgxfbfw1m9XjF2akwaaJzjfhhCYuRVFr8VAMjS6pcia",
  "key6": "5BD1i8FPAKEuqJBikfJSEQ3eDRJijwn9CSRgj7rG6jryqvprP13zNLu2bEYrrBURpNxWwqJpuFcHxp7Ry7kGKihv",
  "key7": "214yV3oLWU24JtoUKA8npmFojrgPvf4YeTY47USAT6DAzotGn7aiqnhr7rScZSqYU15pBeaYBJ32HGxHKGZDEL4u",
  "key8": "2gocEkGxNVgFcmP7mWforDTR7njNbCW7iwNy67btVKgqxC3fGChF7ipHPhkGvBBrBSHscNEKwkLyTsFQhutDj4zt",
  "key9": "2gdizUvZuBH9bgPTsX5zxWcdEYipSaFLisX2AydwcSyo5NFSmysMu7NxqPD5nqjBZWXW1Ptv2GHW3PKjztDowv7n",
  "key10": "2ogNkjgdm45x1qYLQ48oiPSfKuGjTe9utYJ7CCLoZv84GSofryWRGXbNEkt3jD6zjaR1t2qv3QG1n1oHqAgtWgR9",
  "key11": "WwCnNnTry25BHQnmzmvxhKexAvop4wisqLPMYpGgnMmGE8kHBqeEY8dDwnm9HPjQmYh8xMteoAumiQLWE3m4QKx",
  "key12": "3npZqTpgDSBmNC1hGt7D63Go2vgunmhdmSMBvggHV8xTzyGDCwHePd2KLbt6vi3cyr6km2AVJUReQF5q3Hq8QaAz",
  "key13": "5STiR84BNU1FXBvHjdBA5hD4ajv6WvfodmQRpnAEze3BMV2ERiupRrkkcDRXuYLizi49N9vBJDnEFC82mo7XWjZX",
  "key14": "3sDokpz3KtcemLbEbegqGVL3NocFv9aRnjQcdUG3khBe5UMZp4JFKjMB5jaP8KquHeoUVkqwQVx5Dtshh751VsWc",
  "key15": "2UzaoGd5HSJ93RYtkA4ZMnAyoszEmByKRPtESjbsF6tdvtuHKefTVXWpH835sj2HU7gqATk2DCKdWStBkPdoLAai",
  "key16": "4RZ8uJPHmvQDFGxn1A79F19r478iRziSu8wJ51FHJ2SMzPxKJU33B2r3htuYcF4apLQmLiWAhgbozp8hJ4QTksyc",
  "key17": "42ceNp39oQ4hphtXim77ipxSVtpAnReFCBrGCNBrUzZbcdacoc7mVmmFxT9gA3QX22eDJAFt9qaKqXUaGd8sQXff",
  "key18": "2krRQHjgR2jfneHjCoYYebHq3neQKZPn2wB2Kt4AHHbi3dVTRnjQEM9EHo3oh7j8Z3FGs5fMnGdsbuRGQMs95bWV",
  "key19": "2GtVzqpZhnmXSpeg6ZD9XE4Ru38GWoVUJFKrvk7noUziVnUmD89gs1UuNrSauQ2ggE29QrZmipcAsZUZXoiBuCsw",
  "key20": "2iqd27E9K3zapgsUJQpf6CfsC73ikVzLn2dQyAdQ6oyHjuMu3neCHoqF6c6DSKZpteox8TvTKqA14mThUop3E4mM",
  "key21": "4e6SGNbDQPwBmZj5qxq3EJBuug9uYXEcqvkSBR8Z3xuXXAAedJN9rYgVP1Q5g8Eo55H4ny24wN8nzX51bQEfVLe7",
  "key22": "24mYMX91h1Bd5YC5WA54N5YAEQVdjrm4ZjyN8KehkmF8YC8qcZNzr3362BrtfVm4QozdC2sex1NCn73nmTgsGrYy",
  "key23": "2JzCKN2EKVHRxqmb1ronwmLTd2c1bJyRoomuHGM6oBPmX7byHwp1VqYb9TN96t5eejofUeZMafJppwZTYCSL67mM",
  "key24": "4XDP5989hBEcwhM9oyLRVYyMdaWJYsAeccy1LdERncHe9qXQXChdB78SyDyhmLCRarJjErdTvMgJwM8KvV9HEHCw",
  "key25": "5kFi44as9bw2VPoUQub5nfs6TEbA9E1xdSpEHM76rNwfVjtugnmsbqb4nbqxoVSYZCQBXPBMoQtAzHUWFFPWV3Ey",
  "key26": "4KfgCFzX2qQ7h5po7V34KiEHnur7cVDCAGTUrTnEdjRu2hFMF1UAJ6povXDqMrnDYiYwJ1GvEQ3Uec4oYPpgJZRp",
  "key27": "47cgRX8Ry5bCEA4MtJzq7SnZDvaxR2AVmjDWqzdyRbCFST8MJV1BkLDrjdkFkiKbcsg9m9b6mchVWzpjtChCSMas",
  "key28": "5MiRih3C6m51s4mA5BPjYjAJwA2LjnYq7EjH43XYD8PQ9bcHgBVphYgkb96q8hzFpHsLX5J4bETRAkPQPePGsPA1",
  "key29": "53tGSPXbmxF3YF3LCdrRLTiHvCJigikKzUCjGQbhKFAaEGdgFQkeZswo4Y4XvFi5XMLVrMmvyAg2gr2rSkaxRCRC",
  "key30": "4NqHWcT9PLpwo6b5MuVfjXoSNpGPxr8KsMhd5WQ1jPKXpDHSEnjRcEzqHn8dqdNCyaFHGAVrxJfUvyjFsmep2u4z",
  "key31": "VzKiCp9zcn4Myz5h6rA4SgzynoZKjrxyWmyMpm9S4TQLoVterYBnaDMBWVojVzg4praFKuRw3u4HrBzTKyYRaQx",
  "key32": "42Rdxkqo7AZv2yhz41ZqQtM9oymjjS1yFq3MxWjzd6uzUFYciTkeCXiEvgqm6RwWiRWUjLCyqEz5AKgpGi9vJzGE",
  "key33": "MHrhVtJsBmcvYxGU8DWdqLjmWiQ66HsRuWGYF7JjQS7qcwV6dNo56xmZeJoMiCZqpEZ7KBhn5QcT1WbWZiJCwg7",
  "key34": "3SrN7yp6o4VYAcbn5G6hy5c77gp4tsMP7EQp24CFMgaKoSoRftN5cFxC6AxBFezyiXSfUAysNpmFbtSA6d9fNhmd",
  "key35": "5Wu6evWjoCszAYswzGvBDQxSLvgrqJoVH4hs9ekEcvTfGWcQ1nv23AgRVWtQtYgAp6xh8DK8kupsm3xUuKVMLHoE",
  "key36": "EJRWx4ev6r56XiVWTk21uaBfYzwM486owa3VqjQfAwaLzxArgnX2KeZ9JTLNxAnbQ1pqyMgsf4satPMsTyxcEvp",
  "key37": "4yZeeRs4iEE3d6dSFwZKfoGmihvDJjMN94m9MxdYBH53NXgiEBcW6fBfuavzpynp9dYfHKhcxaYVAAHS9cfUdotn",
  "key38": "Skx5UPcQvdddXruNteBQ2JsVDZE8cXA8WKnD5aVPu1vYQjdjBF76zZrHnApueBW91o5cMUeLwPLamUvCgor1cbA",
  "key39": "4m3MP4uZCw7UdNJw11XBEAkLv2UTYv5cTcJLqC6vosKq29peEg8tt6mu87RDwsCo4djrmWQJiqAVsDcaMPMJZPqf",
  "key40": "2gu2iSjRNuzzyF7fpgYVZhasY4pB3pcHhrL31EKmcEkRgTgvgMoKMVSLipSUpgFunN6W5MeYTWnm6xnLmqT3FDTW",
  "key41": "5L4jAhvivYAvpVKS9XtmP9swbWG3EWprvYYk84dWPpdefKEKM9rKoX8KczsohpQxqDKVdAUPFE1m1rWnJkw2L9sT"
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
