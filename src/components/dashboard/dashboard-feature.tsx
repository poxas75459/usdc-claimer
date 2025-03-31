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
    "66RSG9A5guaH1KsS72Acen21fhKKqRYacZiWQPuCmtXQbqEuv1gjxWgTQGcawUwbN5VKGgpj85dWfrVs9d23qg1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZ4YW3A9vV5iqbQTHvEebViqUcT6BG7fc9aZJr14Bpje5xJ9pr6SrzWvjorfjc1WfgPrdjgMWoY88RMHmpTsg5z",
  "key1": "5CRnE8LxrMBkFJBs6yJ2JEdQXLazUSLyw2k9bJiVxgV8UeVKfnP3sjNvcZxvEwQGXsM5rHvnuTRcmUkXYofrK3v7",
  "key2": "4NpnprqP3mwztMN9WGWgect1HYLmnSwp5CMQPynNgLKvN3TjcsasA7JjiiRoLMGRbtytWmeFGKBqbnx14y7Tumqr",
  "key3": "5T7fEW1pxbPgokWWeiuk2RgTwr2CZbTHWQS3qGZGjZYBy4eqGQmrcG1hy4hKn6cWZtKXHQPMZ5D3SxcSUDPcW1Rh",
  "key4": "5Nmc3Qe2LpZRQHzGQQj96ppBzsdS5TKZ9pnfwnMx4UCFQqzgiVndek4Yhhko7EW8LAZCB2XjTJqpsMLsBGYKkCM2",
  "key5": "2zfzGQDvtbBbDFD6SwQLasxGAnMg9aayuXoTv89bmTAnvRcmjEetSpDzUUv7DG4wpqSfssdLEFjKWQtbncyu62vt",
  "key6": "3eBWLDW61fXqML2EvvRLY9ZEomXri5kLR5TkUEtcWveTnDJifKwmTdtk7zx3nPh8vWP3i751Zf97m4ftaGwKytRV",
  "key7": "18Xs3XtA2GcRcMVygPAoK3MNtQTpRZsrmZ5xZvo6WCHFS4rocw9FTJQEDqsfuM45ofcvTK8fUz7UqBgXrAd883g",
  "key8": "xuZFrvSseTj6UjCS9U2Bevk8QiH6snKcM4GV7qaQMAqwS1tgBPKeULFcyiUUFsaBtKxfczFxhUPhbTE82KLsqC4",
  "key9": "4rb6cJ2kaEpT6UFhkM9guEHNpuykggC83LbcF3zjq9KR12Jx9SaMiyiSFFEXSm6GKMh6BcGTTCqAF3Yoe577eDDs",
  "key10": "g58P9Krm6sCZP9fvHuomRZRdsEB581aVKP3gJZ1jrWtsZsxPw4NWphZc63qfdLt8xv5wc5RX4DpGxwv2PAWFqzc",
  "key11": "42Uoxn6sMEAopKjGdmFRMDWcjKz6XM41hyAFXx9rMvEdFXZfz665KNV4U76F8yDFm5KWkRFGhqBaw1UVt8CSx8zD",
  "key12": "Pfoo6sR7AMS1jbPtuFQUVMeBjQq7K8kW5gjNEwfjMow1GFTxK4GyMzmDonnqpT61oCG9tGM78p1wwAJ8UXqh2ma",
  "key13": "59PuT7BQnzjUoXpfse3YD1pvmoRZvL1dxLkVK65RTtziCmGSMHiLXX7TDgv8NQAzZPcD2eiLGkwYeB7fT5Y9ceYZ",
  "key14": "4fDh6w1aggkMWWA1ifhAuF65NeK9zqdgA54qjWP9Y9vKDD2Rd8AcYw6BD6Ra6RxHFaWhWANxYQgMbEcMnnEkPKag",
  "key15": "jACMCn8PRK1Y2XmcMB3xhXcTGZDuCuXDYgJbP8HARgPXBoiDyTsH1B384Q55y5gRNjHPTfRAUghGbXNBkFVuh4Q",
  "key16": "2U4JACxFBHwkjDPQaZ5qYWJr6kCFbHt1GGWwyCP7yYj8HmaWc75ezYftizoG49kVwUyqixDTwCyCSPHKZdCFkBkS",
  "key17": "TB8rEZ3sh9dDHYrStKrhQj5yCMa2DLV1WzjLNumCRBAFQLPaPqkrqH2w3n6Cm3vbqFHmjrMsCepA4whZpgX7PGx",
  "key18": "63e6mBNRB7y7TyWhL5SBbBHu8uNEkTV7DHNbLY6YwxTZaV7iTnqEV5veq3YuQyEPsg5391m1tggobZ2CaUtLMDM3",
  "key19": "dyUpD7w334E8dAXW5d6TR6BFKByRxkL4GPbsLMtUDxWXFfPhYY7AQmQdKfneauXJ1umX5GTgW9V2KpwSbQyEDq8",
  "key20": "46uyDtN1HTK7tZqj7dxbBWZoW7QWHj4wx3QrUFbueQFnraRmRBaTR3bZtb3ndGiJGubVZyxJ6WoF8xLs3AFHUYRe",
  "key21": "4kYoaze2E9zRFR13sMsxhjBDMeb96B9zg1e4K4UvvyF9AtHZtbNLKeb2KfnSWhvQ74TDYifTiaHqUouXQGSKmCno",
  "key22": "5PP41DXdPuxdADtSV8wSKjiahvK9dKXpFCGVHhzioxGovxBaKtaYiqGfVcMFcjaMW5CKumF9DhGqaXGB25u5fZ8C",
  "key23": "utY3fgE4YEbtnprfFGj8gFUtHPiBstDeeY9E9pCD4Liak9kwMRiM5WwPTtAs9MKz33E4sEQqk2wd87oEPipARp4",
  "key24": "4FJJ2KBRT4YrcSA4DHUhpKH1wCuq4QCpu8gJakgjsjLJVFGuC27kkvmw6EPSPXWA7jHcfmGqKr6CNZbrYKkg7GYh",
  "key25": "57BvVXFP3EAQrA56TXqCdJFVvNFN6FJ7qmMJnemhZAY7EP4Nd8kpLJPvyCxZHHEVhtWh2SDeXNyrp7378qnRgn6R",
  "key26": "eFC8214z4N6sYr9KUpo9tHe15g7o4n6wDvUers6GEwChGvneYJVJTnFaY88b9i7qf6xgcFRqxAZgcpKE3fVXX79",
  "key27": "Me3DnWg9Tfw2eUiPSJ1nSwcupunBVZgY7Xa9YKFAQcMCCPQQmcWgpEWFGXLzJLeoPYfg2LNnRuohRs7mNo88ouB",
  "key28": "4fSW5BMNdcnxc2wjSQ8EN6RKyo29fzKmUKoHXk1LQ7Y3kws9YDv1c3YC5fQok5YPUosztVCNH1xRKo91ke1rLZqE",
  "key29": "3mD9meHX9c8py397WXsK2LqDHWJvrt4kaBrZAUYVK5jBjxvsyCT1M4cDhqEVZDspSRu5orxCu5CjJdwMERjuezWs",
  "key30": "3cH5wLZ1HL7W5dGoa6JBv8tYexvpz8Te3CHDKQRni8ZuRaZNy1KRg7hxGJZMzqrKq4BvFJXqcQUR9L3BTSQetmmM",
  "key31": "rDoVpqEbjUm9LgXG7Jzmve2AkGyUFZ8v2oCuJNkmaUKmCiFYqCcQhi3rpTyjyUTr18h4khLGVGeZz1pqJWNJkSX",
  "key32": "2woKUCfKoGAwYjw81oL9PYRQNDdyadiUqc1Ridp3Q18tkKGwPmtkNncN6YyQ5UyGcgRNgRrwWghn7smbrnbjpu7X",
  "key33": "4EPbdRtKbMRDWRjVRmZeNF2A6untk8qJER38zhEGXPbrnHNy3cdEZQu5efnxPngByyCTsEEbAsVv6utvaWXQgtdA",
  "key34": "F3WrN2SgH3VbdaLWyttmmQMKH8noDvJu3JRaehn21t84Zc5aSXciVHFah6uELC6Ftnt81cEK82JXQEQa7iJH2B2",
  "key35": "dZiLrm1zRwbDqV9n9MruWZBn9UQHHPqCnatBRFbvwNQdJ7i3K15F3uVXAFvYeE8HgMfUMD2SEdsxRaiBqtQ6yZ5",
  "key36": "3qSYpcDhCLrStqVfaGUA31XQ9PWBWi8ck3bdjL4tFJPSsFa8kSV5HJBor72qqDYSzCBuAPzNjCLto3J4hXyQT8B9",
  "key37": "3co6qevwWJm35P6LGsbN79rVwNczvkWrTBNC1jfk2toaHrLSZKSGnxvXAAm4ZET9yKMGroWtxHac6XJwGVLQFyU9",
  "key38": "TiRN5gT9ZeWYtNVWcFbq9cUtkBGJUV5NZ8cKYRh9wkfd51PkKjQwzuYQtf1njwFUmGWt23ww3Mfmj8aopTsRfAT",
  "key39": "2D6ERdhr3Grsz19jyhKo9ypm7ukcMZMmy84o6ZdFvZNqsxMXVuJj6f78xbdewAMEuyhTBgiqdZ1fyaThmYhYoshY",
  "key40": "3tn5EeF2Ci1qMDGcHTnq6fv8etiZcjPJK8F2taTxop79EfZuJe8v3T62QNaicQ4zCS1v1StgydTUPqT9EEPKyEx3",
  "key41": "52ZSyqaxQNYJ8nbtxH1SP9LUd3XEm8vF69b2JqvgeABnfPULdbW6k4PX7NGswuXJSLKTR8Z9bfeoyk9qu3sTgfzm",
  "key42": "23Dm3fywwniarYM6i8xpbUzhZ15v8mKzJ82jvowVK6uVS2W7zzanN7iqBrRk4YNdYTbsa4XtA9QpKgvidDhCsCf2",
  "key43": "4nDBv2fByFUm5YpaNyz9JRxY784VvudUrja2YQQo6XLeZLVQqAhTUEZoBSz9napPRt2UDLByLRxHMAnMM2ygB5b5",
  "key44": "2SyYpWoDga4creErwpF6RuWik62Lz1nwCmUAPFTEoL1Ncq6xwdWJi9B7KYTpa1vETQqjezLCN6rVNS3ypZAB1Qp",
  "key45": "44YLQP7Mf4AnmTwWiQSjEpvqCuedEPywxvofMTyxKBpKxgGLZ9kjmSNbfjzkFryJEBzdmxaFsX7aEP2PUjZKYBaE",
  "key46": "2egjuL8HtQovkboYjE13Hs7SSkgrCahuHv6KDWVosbSaNGh1k8ZvMjqohhR6eagr9ZJxm3VsZRbBBnZK48nZwL8P",
  "key47": "4qri7qHXL3sH7Lf4k2n5GgwrfLA2wWE9LHd91cxSP1ejUWA8ofbKQ1cP1TSgM9N7Ft6vZPajQzZPHxhpRfyBmMz"
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
