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
    "2VJgs9FJazZ64SqaxJ6vsDRkivvyfgAXsikP5ua5m9SsrQzeGdBNavMGjEtR3LVcDvmjRaUfG5LfhRJqMvQe3u83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNY1dMdb1k9S6Z2MgUbPW2RsjTi3gPLsbUe3THHJB1PsQfZ1zpE8pQymFXTKkKxzqxd8r5wZ9tGjVxwAFFRUzWR",
  "key1": "4aZs1k961PZBmBS5TbWgtubDG96cGC5qhdxVUt8YrxiAySdgCw6Vv2buZies9iDshJJtJHz2ZERhk4HiXnsMJJo4",
  "key2": "3TUdJrNrtD5bK95JCd5SSaKd8rTbTw1mjtYosHxTNLWwyqg5r26HRN389VPYoMEoLNNGWP1GscfpVYbPdbLwyEu9",
  "key3": "4mvDNRM849HPnKoeFW5ow52tYBP8HmcXZAw8tTtbdSrefv3qdA1LGcUePdQNd4pe1djXKY1qd7zM8M36MGp4qEAe",
  "key4": "437ahh8kpi81Ptwp7XDKxpmtGzUCrRYDasJR3qmJPVzU6o6itnWdSXZHXt15h6uizU9EPNvQKS1zoBNtf1JKGpwu",
  "key5": "46TSYLebmV9RWgB8tcFtEav4XQvCZtGLmFnxo6p4CNPtXkhH7HrFsRnwZKsfkJEgAgoqCpmSNuPcMecaQP1vu3Vd",
  "key6": "2iazDvqhsCCf2WKAwWyTwofHvzPs2Mkoc6zprbBYjz4fhBL2ZzZivqDf5xq8eDcQN4BjUzJACu6CXzK5v2c72gDr",
  "key7": "MdADHatFt6hjKLjVPyg9Q9x3HWbDc7Ktnwd84LPSvDQKAyndxhnAPUrTSKYUJysYjcnpjJ4pHCRRVX5qhmr6iPH",
  "key8": "2uayQWR8jJx9FucKMiboVTpW8eyBqdNM7WFnjMYFM1Mnfc6stWcdy7xNAFWaxftLpy2b6ahQLnSsmLxrjvYC7c2y",
  "key9": "3ztFcrXf3uMSkvyWbogLcBAMy9if5FVobkhqaBYncRmEfZ9t3rFjkQNqvxgxKxquBTtJimZcYPkoVZZZvYxajXtz",
  "key10": "AyU8uv4F2bjXs1ThtiU73oLurLJr8E8TkVeFgHn2B6nhX2hzVxaqYJVvQ5gxKrE4MgTXAxNZW7U8MRVdtnQJgXU",
  "key11": "4DDegAVtW6artiu6mfcBit5hGB52iv5ZN2cpwv8UdwRCpn8Wp813C7SygrmCmWuwjRDSSAzCh9NPFVEUJWwda782",
  "key12": "w8dbdjSxerrof96iCGAwVqDY2tEyqnL8WmapWNiM3G1QdRyyFme9Sc1TtMS7zKSEnUZbjFYyB9ywrSHzWFgw5xB",
  "key13": "5eL1EHYuF4cEfrUq1DJ5C6cfnDqui2f4HbWG45g2R99qEmime1ThW389cwVhwux1dQcjpLjpKZXVKBmC45mekvog",
  "key14": "3TfMDs8Ckt7ohZDAHHaDvdE7RSyDXFuwX4UBmFjT5z8baaJ3ajgZyRif2ts9QBARA3PA9DhB2QP8M7rArZuBruPM",
  "key15": "5LCUiYLB27DDsiT9ZggF9qDrwVcQ5GG4U38xGUaTEuPTC4S8H2wz688WTU4Xioyqqo2jrt1PgpS9Nkbzh4bDPQcV",
  "key16": "2xuPxijqE2PKtFfMA1bEWRhxGaxs1kUbh3Hf1KWAX2Nm8QKXon8MDCQcvNS5FWgQDEAqszyPWjeH8Bwjhksc356t",
  "key17": "3UHuToze1mHor7wdGkfum1NBsavp3uVYusKRQyHFF6JENEKP5jApft54SpUdrSW3zDdqBFVT7PxyaEwJYdS4FyCK",
  "key18": "2iuv3RkuiJBSjHYDFgrecWUaBZfmEdqiXdCSY8vTKDsMicqQBbBDCp3NYWqpaSK5V4Hn8PdEVWtFY7AUtY7wwtXy",
  "key19": "2nf8PTWpdiCEDds2Q5AFdecCXviSRw5L8amvLDneknuBnhfzjX4YD9ZyBZ14QjMvKSadRaPrJmdpHzmbqSUwmHJW",
  "key20": "yyMxnnpA5J1iBuCV7eUDcTo45B3YcnjAr5bh5oZvR1PJLYpVMWw8ZCxEwrJLdxwX7CTSY8aW4tebtYL7957CKQP",
  "key21": "UcmvEP2c81DmSAkPKg6wTf7AEWYsqpybRHSZDesSdZLKzPfo49oMKd8MX4aJpj3AH1YviUFM5XH1aoxmcMUTiLE",
  "key22": "5DNVRDnMRWdVHZUet4k3B9fwNQQtGhXC5o8DcifTVM36ugQPQdPXSnNjUnd2h8pi3nJhSbZFkPSW3wy4VZjbwMQE",
  "key23": "5Zxon2Q9rGJVQTR8AuyrKY13hGrVzytRYqGwW348Khk1zJAPfdziqVytcdvsKQHDnQzjBBtg9Um6ueAWKnjMypCE",
  "key24": "3QNXT6PaAHV1FUFaJdT9JeVHLvxY1XjjJtkUrhK9yxuSkXNiaZbpEMrzmN9TceUhbsXdBgUc5tgoj32ikyvnYuXy",
  "key25": "4fgGQSXGTiX3M7DaKkFa7u11ZiJWQ1WfoYfZnCo3MYuWqg2zVZCh8vCF4CxDRzYnr38HsQr47ZaVoNMeVD7eLJGY",
  "key26": "4hr7iVAQDrvEci2WgPH4iJJXNfWqaj2oaZBAj15wswWAvLFDFFBnPdipuKmRvCcy8rU1CFh5S1p5nkWeAvMHTJ4H",
  "key27": "5CLHGEtjSrnDjbidm8g2ZC7L7AeRStAEZejDfcEjWeacKaYZJgqZA4kSqhEqhCiR7tZrzny6L4jf7FeuJDmKZ3Hf",
  "key28": "jeWsrd372qtnUHNNvUr4sZDT2dMstDL9AH3pViW32XT33dt6mja6PK1XKLZ1ZvTS9zbnRST5yPXMTNuAd4eQTYA",
  "key29": "3eCHu1RxGUybZEihGRG7gAGEngJWX74ANzMaD5RJLqaMEZzJXhjZvcWffC3iHU4Gh3ntNZ41Tm6Tjqm2WER1Sf9",
  "key30": "24YkKhkTzDbeX1iRGphBNT8Jc3jjroqhxNuFdjBMwKswpXow1sgky34HG9hfTAa5iQGeLgD7z8nsSP86dHcTU1so",
  "key31": "5QC8Neqj44ezGMtAyrb8ZQERJLY9cy9c4UYSGgxo9CX92QgpAna1GvhmHpb67m5ULUe4Zr96RHdG7LTBC8tbBJBj",
  "key32": "3Bph6X6EEj1uYm8jDC1AMs1fmB1uDaeepRNHCiHA4nmh3pfkef1Em4QGsU78SHo4KGQyGtHFpmU6s41f8PVgJ7mD",
  "key33": "MSj4sNoPKbtviM16VFspXJJnQjxRVFgLXW8bQnAaY6ShncxgZqcGi4wuRUsz1BMw9Gwg7QC64B74WpZ5Npy4WMc",
  "key34": "5ncrnWrh7xGMZifyqMD6D2skDxSCUuSkn9NqvDLi7ShcuaBNfYsNDRrhTj5BVTYYcxSaMtMZj5jhnQwrBrEj4LrN",
  "key35": "2opeSF7idhzht1pe7zoXDGY3jghayraB9vziCWk1718HMZmX23jSo72xAqPtmrxxQgbZbHAoT74P9MuoAvknaZua",
  "key36": "56p6yQVz74LCzyt68MJMRdk1DhYfKZMLqNn6agDVyEcxNWbzknbpRudLPoXy9xfKY6xr3fnJwMA3gN4RNVk878d",
  "key37": "35qBfFKA1tSrsq95qNZtgzt93uvhjdsh4DSEDvDNBoGngastrstX99CuixRWXABwuo9pUpJJSpp1KcQKKLQtGsRo",
  "key38": "2H8ie522TNHnmeyWGkvEqqkvMbViiL22XNXrZiBsKhSN8RCHFCjYo6RcRGinRvbX8fjK6ConiLYr63TY4mHEaopH",
  "key39": "3iiX3nFzcE2ADE1mVpRZsrRrX5kRfyLfMx76Y5FitJjxNFqvP42uVK4xzoyA5DaoJmNjv6gQZshXojTaTkhvBL6T",
  "key40": "3tVKdVRUT3UNTKVUCzNRtBPzdKi7V3LobV3bsQpa5JMFJAhSxuqc5BuqwYojQMpiSuMTaKKjsS1iFwqj3WLMWUBx",
  "key41": "2zQMa3n56xWUjd2FZ3FHndwtG9sfJwN4AZNmUP76HrYDgFiXKMkxS6nCtHJLatHCNkXaF1AABbm2qge4z3X1rWkV",
  "key42": "hUBQW5eSpdrZc66V4f4w69pLaiHYevevU7uMTrKYxhZHXLzyoKHFue3eQUDkMiY8mzXURJc4xna2GRdmwGHs2T4",
  "key43": "5qb2yGmZz4Dg9vrsVNxpv8YvRLrhbY9dQSvjAFjiNJdWMTWGAvP8eEL7mCeGrhse7EFq5AzGvGvmSck6rvHyJ4Dk",
  "key44": "4zQpMZUYCPSvedf3BBx8eC1QzVx6sLKbarsCmRSC5noaGkEUgUDWihF3zKtnQrSaybKmxxpH513whoTgsK9E3wcn",
  "key45": "9t1YVi16Qq3PCy91ZyQ3oxfoWRLhBAHHMc2LTwNuWLhwUXCZWvvMAAAoJKgwX38csM4s1ye3Nmw5A48GtQFzyU7"
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
