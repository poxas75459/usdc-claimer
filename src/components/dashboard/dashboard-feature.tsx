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
    "58woaj6q29ZDHPY72n5gKZL9nkB34vFNptNhWdy3FMw7eg5zEjkBjf6Hn8NorffKnBGTGoi5KpS9SoBL4UAGstfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3roUoJdyCBm8w4J86urG5JJuY7xJKQRSmAtc9wZ65icL83tPXjeHBvW7zH2RbPXQvrjmLseBfGV8zPR5jewQ4CXB",
  "key1": "2EGR1u6TLnt6Ubc3Sg4XDTfHw6yHNnEVNt1A5AtHrbyQ5x3RPvsRE1Y1N1jbJedffJ39VwYH2xAax7Ctfi15DHcS",
  "key2": "4V3YGDw7cPhACbwAwL1ZrEBSsT9QGuePeqdo9VyE7JpKu1rjX1sFRHCWc6qeisw5WwserRTTuxiqFdSsFaAiMab8",
  "key3": "5bcqbanPJp6eVmLTqHGryUnKTV6gvUCNsp6xRZwvMvAZp1XgdMKynbtYWqVKS24taSj9qcjcXmEgB8kcHvhA3inj",
  "key4": "4NLZuYA8hN8tT1cpNxRF3HqrRzoEAZReGK1HCJUT2jrTabEK3YRoomopqF88LaULre6ew82AYizGqYDgqEJStfpE",
  "key5": "5ZVSwy4NVaSqR5nLyvAVnoZ5g9KmWkdEMYQ5MEr4ypRWzJ5eBvtv7RX7wcwZSKjJdLxrRk742Jq2nB1o23U2Rh1",
  "key6": "4cmJwPmJRJ34CpMb4o6wRm7ybw3SokZiND6MH7d1FqW7nrDdGw6Gw36mayUQRDAoA2L9WNW7XWp8vTp62PZYEiam",
  "key7": "66CeCWBpT6YcK27RqiExTGFJyBnZJm3UpaGCU3VphFHZ2snYuJF6584apFkkCzgB8ydrDgiXPuSeiyaK5ofsZyT2",
  "key8": "2wYbKk39VdE8cxZ9qPjGcT7Wg9aoEpqvEziVccgyCrK4vtgiMMKS1Kf9qoHAgZrkfmqD5C83nXX5vnKVJVrP3FG8",
  "key9": "5diJp74EVj2iPbmZk6J1EdTKc1o157evo4WuyYszmwTSNW9WyNQ5znC7966RvofH7ESkVmgYaJ5uprEL59zZ6sSu",
  "key10": "3Hwj98kjZ2ZCWhju9WfH6o2ZUXMCc9f9RrT3arfofT9jn4LmCpEyGF57d7gDrVS5sgsXyh5ftv1H6yr7LFAs1LrK",
  "key11": "2f7X6gvSAcCp9gUw37G2E8CVYg5YEPqzBRnbWy6GzaXuVFcWbc6orGJRDWup51iJqVT4fdEzEA47GMuHwuKabLn5",
  "key12": "5a8moWVSzyK6MSBGY8YmzpJh5Xj9zvJa7HL2PrtJL159gLBrCMAzUwZ4qVAZh5TqGaVY3MAH5znEK21sBjYCbPu8",
  "key13": "2RbBehGBsgCQ8Zpyz7QPC7w2rwT7P65N3qfUvxV4DN3Q7eb7ENzvyrAkyQH79SgZ3Kkhvamtx82o1v52szQHg4wi",
  "key14": "APX8tC9E5RPebR5s4Smv52FFPwKvQjZZrcypkvxTzVNdwecdBLQAnkiPsT3mwt9wNu1wDki6pwW3foRE9QWDeE1",
  "key15": "4hN6VrwhapxXN4zjxwurXVM2JAjFDaPBzbGth8FDWyzbJmwBskgWntnCgAiws6RseoGCBaL8UVR6puVwvNXde6M6",
  "key16": "3qMbf3wXZbikPMp1kLM7Wc8fnJEjQh89rfxSxe4bpWdmtW42MHfoC2EWHBeMwZyyJxPhMtyqrZqGDmRSPrbGdG4h",
  "key17": "3jC92adTJXTXxTsoTrKZowNinhZNFhUZcv1uXUibDkARigHcv9LsGwYNumzRrcvNY79FF5fLXXwdVGRntVtDwL8p",
  "key18": "41vLqypdZva1Hz4oy3mpD4pb62vf3DxdCKfoDFn2d335zrCBjZT61nq3ou5fjJ4pacH7vPnQ6fQLMMikQ4PP2iPK",
  "key19": "5J4VohSRWgxePtWSqruEnxog2WEf8CzATsH3iNniNvU43Gf59it7WqVvSFf4JpnGSPc7VYv9ZAZiKGtQTHNnuzte",
  "key20": "32SXSc2ekYGMvhGHTf9QSaZGZzondCNHx6xiBQ2D47gg115557AsVbNVzY1UvaXyPKvAWoxgjbNmi1XmXF5zJBjp",
  "key21": "LwToRXPojAszp1rN3G3jFMsdhe73VZ2VtHiQouMp49NeRjyKfWDUeqsJMfyH1tZLNuRDeW69vjiHgfctshA1R8L",
  "key22": "3Hx6oYrngsTdCc62dsPbtACBCM91X82epPpAuV95vyikfb3MjjZrTMGajgSwKSCgxAwoFFM6rfgiq7yELQkpeYrg",
  "key23": "5jKedCoeP3RpwGmdWxPGC8moz8AxoT8b1dwKf663f5JrjzWgAqvvcYD2bJZ6HZ8e9nRMm7g9Lu5CU9Wbbr7hkee2",
  "key24": "5HQS4PMW5XLBgXAyJabLh6PCVdcDhfSqcar1H65XnsU2mRh1kyYs5uVjWKtCQb9n9aP1JiDkan5BnsiZFA6LiLf9",
  "key25": "2ytBk31x6aRREQrZu1qsDK9Kh4JgR5zf4YRMqGgqdvfUY9JCLCfpxg1mWMBRjB61M7TzUvJh7eSXPVF8Ebv9DTGV",
  "key26": "4ikmQyGfAi4iqPT8gr9DbJJAvYGuf3NgBqVKXFD6wQ1UGXVCKCznq7F16XxNSMqRtCALkNy7rekDz6Zp5ZaGDRxf",
  "key27": "2v9G2Qpoopojoqd23diqQfMwEmB6TreTEgCJY12BbwaNAN8g6erwjBGyLk98uSLz9bSGStGZ8UZFTumfigR8w25v",
  "key28": "5eJZQnZiEMAYJcKjC6QXcXqyhuKM58jevAMEZwTXd3qBrcZrtNpBpp2yiphUUfgTUzQbsY47D89SwSEL8Yqv6hSx",
  "key29": "41VT68U2s4KzqY5GFCLkufzsq7ahoCQ3PpYNzQFdnmPxuVabuT1bMbxUqCAGbMmw1xJnoaSPJ2jJW4SMBUviFfCV",
  "key30": "2MiEx4Aq89cDFbmpBMMsWgoYAQmtuQ4rC5pExCLjDrxLtxGf2DhCEft8xeD3NygTQCoXUpuLAtCMp8aPvfwtrAEP",
  "key31": "31UczTMtf1JGkbg93HuVHDqgvkqo3efcYovna7TZqixUX2Xs6Kh5rLh9S1TqXGUTeAZCwawrmaZfE489XeHJajPq",
  "key32": "3fgKFPXhG5vp66My7ExVzTNSy4CR8pUFugJkUZ82LT8SThHHXFihctMKNbSANEAc7bE92KBkfNWNa5XVwP4fEnYf",
  "key33": "1uhwVoV3DWN8bg5wrbdmhdmcrm5NJVgczaPH3qH5SXRCM6wooJZ9rQaZkhxKDgPEgwKfG8r9MNyz1MZoofbhqvB",
  "key34": "3bjAfCvf7ZU3FkMvz1mueDT2KypymcWnMiKnJcfFEuCo9akgeTzzMmh3JWcDxYCVk1cpU8f2d1ch1Hv2SwC6mKpE",
  "key35": "2ESxUZga8Z3ePHQe8D3DicVz4XkfktzEGyJJFDq11sUnSQiY2wcLbN4zFhEsUKBzPQNfdrpGiWWSPCHPuKa1johY",
  "key36": "4uofSUGgeFBpmMfrXPyggPzhYpa5wR1XBL5jEPT1ghCvZabUWKWHoGPCVfndgHS36WFLVGduC6HTP1iLeDCRqwgL",
  "key37": "2hGeiSDcM6RjbJ14CZRC93417mciUuLyGecEop46RuN7Umbx2hwUFxag7NMniokPXKVYZQNKaeELupfVs8su3rGV",
  "key38": "4dxqUNd5jpWqUAdBHTZZbYuo3MJaTzhAsAFwcS3vYTLVVve3R3PjNmVm1mwXavS6djZgfvWeMGckun4gYnU9XrXe",
  "key39": "4sNUfqEdMYfnqJ5aQtKJ6TqYqaGQV2a3zkjJWLjVerhxUJVFXodhZN3LFagHfzeyBPtof79EH7NVbBcVuygg96d9",
  "key40": "2xGBuCxWWdbVKrnQUHYdnodFUqh3BVZQrqrvCuMTSmwqoBVgw6Q8Hz8bv4foQb3qdNM1sjQ8iZjcEu8tjftM6uV",
  "key41": "sT9hZ7muF6VLZJqFkxdWdeP6BNbEkghV4LeMHFdnEnVbz5VpiYxGNsuNa8fJxzw7rf2eGnoyhvQ9JEJgBXRoFgT",
  "key42": "3G6wPEMaqNf4EZe8PjPehvv3DM1i6rkFSmczSuBnxhsxSaBgJBvVw1VVhJzZiaHd9qH9yv8MJ4ueNTAHbWBf7bYr",
  "key43": "5eogW3pZenXNS2c1u33FYdEugnvdx3Xjt7atAZrqKLqJby9tyXmvY7vkhbjR2C2Ge8s93PS49RkDfEwmUXtR5Cne",
  "key44": "24AArShyMaonSyzpib7hgwBiog5f77zBZxbh4CkVAJWPubWPircW9gfq5UswYAXRyer9SoTBdXfoqPvpSxPFsv62",
  "key45": "2ART2UAUJxmkgvCqsrebpzg731pNrTUnQQJzBA58Q52HekqkAxAdSBhCZToHDzxBPC3P4zHGD94xq4UgaBZ6cUcD"
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
