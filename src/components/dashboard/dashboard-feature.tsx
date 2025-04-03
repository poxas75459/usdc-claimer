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
    "4dcjd76Sgv8m3ikC2RFhYXp5d2puzxByeU5o2JzVZDFQuViSmXkMgDiQ4X9Wu82PE7Yinw3zM1NJ7swfhFqcNXkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRdWhjnmn3Kfr1Vyi4tz7yrpdD8zdAYyY8wdmMUogTPPTgxgwpDRFhU765kthJe5WzpjXuSuDELcNnSEv9v1eg9",
  "key1": "2KJJ9xGR9HHhYYjwWWt2zBNTLeHFhFp3vEeX6eSTMwRRMeXXFtPnRo9KLMXzzQm6ZrcUNNcwkyMiuzeoXwjKJYsV",
  "key2": "4wEYTJ6htdLbh5dwCRWc4ZDKx7CaPuyhxEe4X64wP2HrhDvoZfQ5CyjZAgyxTj67rknUMtj8g3wkvMgPBwqFkdL3",
  "key3": "3BMuSqf56iXcUsK8oGNetqshdiXK6JGvvTRV6gUMWQVMTwHPq9Y7UjaJRckXPcAeWaaaP8uHTqRgJPiYPaT7wgoo",
  "key4": "4svhpMiDeTmXJmyA77guhKrQ4ndkpVBGy1pW8GKeZqbwG8pEPbPhFTaZn8x46WEtJhM74rLmLZopKoRyNq91gmzh",
  "key5": "63rgaa33PshKyqwaFtcToWCSp2jvPDoYbx5jytvDYJ5zsrXcHmuHzCAV2sPmruKeAbiZhii4fqNhNMrnGPNWy9NQ",
  "key6": "5soKniEvF25uTgLwvRMhP7jM2NzELW7Axrrb8YiBq1VXctnSRaUtPWhok8JBNB8ipiHnmpf5qgxfxduC9zBHY3hk",
  "key7": "4EXgwUnRtLdCJB17Hb6XewXfoJ8vCUxZLY5YbxudqNGS3waDrwNjxu55drCNTsT5tAKnXN9oAL7i62JAWKUcsWR8",
  "key8": "5bWRjQMuwSVEzTP4pHjSZFdzmjPf2X7eN9sgvoqfdLJYVgUMLKiLF2G6Ky3fz9FqbbNzJu4zBCPQXGqUt98h5YMi",
  "key9": "5ECHjcDUcfAPa9jLDMED1wFhzbdhiDbCvWaw2oD1sr71HjGAdyTnfjQudantZF9qWDGoe6XfDePqfMom6g6FxJp5",
  "key10": "2CXB93k18niYm1g2GEdM63mR9hLuM12cQuRHuL1YZMCueMSc8FPnZjgBJaX1p154UrDwLVNf4JLRsytqWE6nHwkW",
  "key11": "2wn9kHgpK5eyvbfchWjMFmWHpBRSQ3eR7bJstsuhPM3tkgSFo1Ttjqf2wdqtxWeCbe5YBHUhuhft96UTKKazCD2E",
  "key12": "uKiRWBrRB1bMDMqvsdaWaf5fgwncTPZkNUtsvz4KaJ1r1rZe4TvtgYSY54gHiUSsFc9MNJHStzp4RghjRmZJ6dw",
  "key13": "4xryifUP8ho5NdJPvVKKssYBqe9R5Um4ut1cuVxEqvNhFJjvEAriJw19k7dt5thkMNQGswiNtwJhVr4PNFNjcnmU",
  "key14": "3kULoTLSGGBjohDAXnNgxJUAzWtbPDPkvT12i6cy5hBu5VeKU2szeMuKvZSztqYkR5aQoTsGAHh1j6C2t3JRTGoJ",
  "key15": "4a8LBs3V2FwS3FhrMgsA52WWEyrTanqsrHAugSdMRLKym9tERV17yvP564HvCk7JBAWYmdsse8N7PSF1VzKCpwHf",
  "key16": "GKyTWLjseoLqdpPBzYnSgxmt2NcX3rWmCXdWF1YJ4EwP2P5si7TZywom8nL5aGyyzymzUqbmnt3da5pLHwguyZw",
  "key17": "5nB54qMseWj48LCLgzwu66MspMvDVXPwwHAaoHdavvkKAi3But3jYckEkXgEsVQF7jWse5VtWhE6vyY8Nf2KDKDz",
  "key18": "36jyF68SKTmcNofCef1FiQEnPgazY4eMihqtJTXgh5pRQ9hkKSwHbvML1Z4C8iPkLo7tjZve8MDWZRrheobzKB4C",
  "key19": "3dTfeA7y65Zg7u4TAhugxAcSENpENzDaKqdjfWEi3vquhsRS42PV2MYg19Edosy5Q4c1aackZRD7ZDNhbJt3xzHz",
  "key20": "5Xea5PLzt6aTTLYM2BfmrCchbUPUJSEKPQD6HyPnNSBdgdKbo929uwYCF2yiQ6PZRQPSsdGyyrU5XeWatwhV4EfN",
  "key21": "5aLuGyMpyjj2zP5TZtjB7Lbrd8wvoUuqd8SLQFNVs5SSwGDD59va9h7VuDG2pGds36mAdNmR1n7U6H8dpaPHNHzg",
  "key22": "4JWFu3VpP9DGpoj2Bdmbf1thYyV9JmScUdhaaSma3GtifaKByj9RkpJXNVaFJEYxCy6KibGedPZezsU1JDTYgCXy",
  "key23": "qvQxkHHWk22phM1qygBiCKtzDuJUj4E9BkE6sF7Wti6Jqfcv6X6sLXpnXMeYj4MHhAMirV215qPJxAixbVq2hFP",
  "key24": "38qGXmngAsCtmiiDrQDJz6F6vLAT2LSkVKqL4XgvU1KvCwMfk4ZU8NbucZExMjn7j8eG1mKLHhDAzDh6jzGA2CXA",
  "key25": "34vmxBtWyaox77aHhaxt2ugd3aogtCHTErnWVKXsy9j2pPBJBZYSVJkcH85p7fU6Um2xL7hN2ZWADSxZK2W3QsjT",
  "key26": "2DyfckPRUHipA2WsStFnY1UmYk8n5bErvi5LGoNQanGkicQXLh9FmJuFVquTa88MZnVhUhiy5jUNVg31dpQKkE4M",
  "key27": "FpcA6frX9bfn6p7RLHGMDMEqNpXibYhKWdqUJLx1rijBTVmVfECHpmPmr2xiaq3fr3TJsWdTRobdGvWMLiJrfzN",
  "key28": "5bmKKssrBWi2chJE3SiFdAQbyNfSzgWBs3KcVAdo5HWKAqMAdbcnWb9stBF65ZdutejgWGCrWuTkysjuwVDVQ6VQ",
  "key29": "4tHzPkGhYTvqtwJZGxhiq97ZxdCX6V5Tx6wkBzX5CWWAcW9qneparA7R42qQ6UG9Bgr46TGL4SdE6ZYBYtGzyrfK",
  "key30": "3HKiY4pTYTTbAEtmP6SY6zGHTTFD3SvwNmSC1L85wSJ6qYwKHAyykbgJTTFd42vhfpWQdfsEVyGWt8qumapfVX7n",
  "key31": "4vNUrh1JCfRY5yMY8FqfhhnswASxks19xxYMcbPdr6t4LhY8ZL2F5i1gVaiFFMYywHFnfiKrynEQLcGxEbMuG9vN",
  "key32": "Yz6hVgTHUnUBGsX3jDzb4nKuE1EuXQygV48M6tr9ZzNXLZux5wB3QYTm43qFbaCyrruAdMUyCeXK4MdWWqHSQuj",
  "key33": "2988xM2vm1cXFZcpk7k3A1pNeYb81qcfxnBN1YPjcJz2m3soow3Rs8oxSBRYSfzVFTFmP5y7JeLmkEEyiU6bk4xb",
  "key34": "2qrgkfW761sUZSmubCYJVAycfHf7p5bTsC2cHRvc2YCuLCaH6RPnUydhMjTXWSJrgArz3gK8fKgLxpiBD6m2xVN1",
  "key35": "3j3BdLACXNPrNFmzdqA48seXrfugnfFU7zWPRNxBRZLz8J4SnPn1TsiCD1gvjFaS2U64PVWTywYcTkgUWbapuork",
  "key36": "4bxe2wCWExcAM42psZJwGtDgbgHFh3vV4MQvTfR8tFmxPuRKqebfZs28W55P2uMdpWhToo4WZraUaDGhvk3LrhNB",
  "key37": "3gdDWuaQLtZ1hVNMw463geot5UUSn4fGoVoE3RRJTdV5C41pDcevAfUbYYoB19ifpPHnn4ANT54fxPKCGEV2ThZq",
  "key38": "2mBGB4i848NjQVFWYhFfFrkNSEUdau9uHAzSJY4gCYqe1xcvRnkBvWBeKGWsEZKLUrwekXNtw4fo5qy3dP9vSTa9",
  "key39": "36Kgpqi3ziq5TBteACmG3RVtqH439pt3BqCvDDkstPqbXHbgrsDyTZ1aUgJ8BGX3P1RKsJp4H5iiPq3Y5qs11WN3"
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
