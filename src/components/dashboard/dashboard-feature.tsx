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
    "3FqB2TcjDFiWZCYQpBAjGXkcUiPKRPhTTh6TrrT9SurZBtsK3xJaRkF4CoygHYbuXGSvMsdRj1TViwS3K23HwjTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9irJbBNdV624MJVmovVNKKhREguspK6F7Qq1wynmmKgYotdYduobjRZZ6UvQtEFdZXCXgB2nK7ubcoY6aaTQq7",
  "key1": "5mfG8QmCLXHcLrwHsBkAyPVwxdcsGsRq1fjTXTBk3RSNf41vKZeGgQwdXQ1oACvYZnJiEgpxwtW3ZNy4NcFsWWxS",
  "key2": "4c58owKWaF1oRTfvkVQnRFu4i2bvX3DnDfXrWMP9XedPzqamDJn3TyMGgjrXVFuzKRvNPeS6i9utAWpnXuA2Dhy",
  "key3": "58a4t5HcNRNyucAYCJ4HgH1UC8D3Y54qWPHemJiMCrBiW5st4qWmYZHX2SU1T1ZPTCfoqCNVr9MJEjc5bLJcKp4K",
  "key4": "2fe4q6pPTzyjkxXBMPhPQaXjmrbURMXVBm5Ny8qjEZsL1yx1kWcjzPFbVcLKmicBCcLnuijpf1PwqrUuuzB5ZcbG",
  "key5": "4iDMPRory6ezKWwjuNG6dsBM16oWkRaDLp2TC73tEYsaTNaGNh7GWzFv8Cv1avBiwrfTRBWoe7qdg4tzcc5sod9E",
  "key6": "ymzbG83Mzea5MEoE44rBk1bkXs3n17AMhKEBAnx8ZBJK11qe8F4RENgMeQeRqAQymE6irQ8r5dVLw2cAA66RRB6",
  "key7": "4Rej8wavuegpdv763TBknBX1w5znBYo5LaVyTkdhvP5KnbA4MDivt1ydJjHdZNrzx8DaPuhkUtPXWn88jxKJ14yp",
  "key8": "5UZBq9dRqhy3bDfwLo7UFNBoZJGHQ9boooE3NH2JetMHtBxNKmgZABtNhuKqKXbFse2FVCR1VApKbYRGXwE6G2ip",
  "key9": "4y9fwWeKZrdnGHhAv2Z2oT8YS3K6Eqdun7ucFd1thwsqMtL4psmT2e4FxMUi2WB5aapWvbfvAGp9V729Tf6FEQZr",
  "key10": "2vFAmaGwLa4nuTXL9bBLtQMAdGbE8Eoytj6G6pcBV6QriaH2uz3CkXH7Pdx2BNdhkJEBFKwaPHSpPqtTgzZxctAR",
  "key11": "Ds6NTrdLBrz2xwFjq7nijcBy414SGTaDH7aa9KSrEmdC8kd1bz5siawF6KHLxssF48VoMZNdvYem3qfScJ1sbPo",
  "key12": "3Nzg4poyaajHBPyJ36XWftNvyK5ZPeXVx8Dbqca29cDbosHZb6KKK8CxLvGt46JHMN5FmgeN9PeCN5nF9dL48Qgk",
  "key13": "33rdTyTJZfDmpDTXFRWgYsyv2L5Wr3aTyHb4uWUu6ZbMu8PifHwogGR8bgWVjPXntMwdzQpRz3iX2vocR3KeW54V",
  "key14": "3Mka2q9BMdAxgRkR93tzwMRLi1gakSne9xtuxPb6kQUg5cN9hWQHg9dQrX5QhK8hFm5ztcNayj6MMPnGdPzBucx8",
  "key15": "sbGP3hdcEikk4ga1sqKLY4dXb8X6KrCZMo5y1c5MiuXbimBKWbD5eXGtwgCWK83pAWYoEgMGWbrDq1xfMRUHb4u",
  "key16": "3iSJkUt6eYuwfrDbzTCsbMkNt3PHtKVGHzcXkfo7tSHfqddSwuyXm3C5QH6ZBHjNHBuNacu8Cu6hy2qo75Bdfe1W",
  "key17": "5QHabU2QjdG8NRXEPtbKR4WwGeQFqdzquEf1yMhqb9HMmkHZwh65quNCn2N2uEo43gHMH7rv8VhYBX4Mj9qutKZ",
  "key18": "54CrsZbaEyg5DLs67Q3TtstPVG6ZW3dvstat17kmzx5adhW7iFgfDCSjTPHyE7gBgnuBYkU1tm9X67er748c8BUS",
  "key19": "351oZWnSc2CZt8e7vAhEHwQX3DkbuUSg2z9UZtqCXnt3DX3eYSqbCGmKMeJyv5HeabcHQ2rCbPuTJEkNrbyycNZj",
  "key20": "3We6F1GS52bTmUnwb386BkMxJYLU3pHeK8iYqF6pMJ8sr4ctVJBa6yAJfihtbVV7KF3g2WDbJn8LakcNBjXvLpJv",
  "key21": "s68jTd5YPZ8kHZQYFGgXhQWjSZ8QyzBNN9jZBtfYG7baeqarDmrY6KAi6cVoxxTFbisFHCLq2QEMCz5Pt6nSjYo",
  "key22": "4WywGGmPJJcWMYD3Wq2PoLUBXAqpiUwUwUk6reAhsufpfBGtqgUDnk4k8EnduHRe65vJUt3NDmcGcU1eKWAdkcnG",
  "key23": "2jB1jLGeGKwfig1kyJ5WQPKNfNCEq3Cg4pj9TWzggXfFfAn6QvZotmwKjFP5Sq6XAhC1WDrqLGTCM4JHQozLanr2",
  "key24": "4XY2hYCPi3368t9EZdqwVszAwFwnsLhvH2yjRvonxtvcWiQd3yarC3KArncTb5hhyJpZhYogjExcdrqkHxB7pggx",
  "key25": "4Gtr71uV2556cGZxrtmmfhfuSJ4rvVrZjHFoYGuyBtQ5H8RsN9JQgKCmQcXoQxbLRd3sjjjFBAGqKfRV2sTsaQNA",
  "key26": "4vHQuvjA5VKq8zauAfwtGpNnPwoK1idsC2hM6LfhrytwEM9c5xhvF1RPA6yuAgFxDxtVUdQNPgcM84T8wgjGzT9u",
  "key27": "WngPnCBQZTx85EwHs5DnB5bx3eHiMNXzFACAT2uqHtVETFbitKcLsiFQCoz15wmgQeMoVg2TUhAZ2SDAn6BhpBH",
  "key28": "5gbVvbAHGfot34njHTvt73GW8PqxksGSeaqrhEMEkZVD1LCKu3wSF3goXqepLtWo7JsXEWtPxpq9zSTu3gfeUF2m",
  "key29": "ThoeQ7E13vkAFyp7qYNKh3PvYS4qDaCCWjJ318vdx9L683PwMKJ6xFmf7hvxrYKPTpVAYiwBCCcnHiadvkJWVSw",
  "key30": "4DatnkMxWZFKJdxhRmaaCRoMc5aHsCigmFmoQEeyCHrP3gpa6nmxfdgyiBLUZTPzr8CppkUSYTiJurqbxPTLJhjE",
  "key31": "58NqvnsEL66dpSDRewM6kWWVde5WtdAGy62XGW7hat8qS54FDFCynR22RT6vqNS7GTxf79ZnHzFXDwnEr6v6vHow",
  "key32": "cXN1G8SX7RAfS27aZ4T1KRFEyHLYbb1NkeAT5kakXuYUxFK21oMumKdQSHfmcmbTRwoK4K39cZS6Febj1X3cV7K",
  "key33": "22EBVU4U2wNKpvJ1VhY3Z48CLXz7p2hWErXWPf6e6EmgsBfwXSnTZVB68omYJ9PMWY9pz3iipVwLsdq9tJZMinP8",
  "key34": "2hWbAZTihUkMqKgupJaShgeShCHwsyE1WDcctXciQdjatguYRHAqBD3ZoLMAqihbrwNrHigBNw4zd8NHA643b4ZU",
  "key35": "2RwHVnFmqzuAW3geC3QgHmFCiFoyyysn3dhUjvoV15z2QAxpexVY63QAyxqCjUwnpkuiTWdm8bYeu1XDKAHPwdrg",
  "key36": "4dixZKffEQYuEHojsUrZ7JTf2ydnYyKzqCdR5f1nbL6knzQTTnkUikonDzW8XVCnGTBFxDWjdoA9bKRZhH1EPKrg",
  "key37": "3XjuYGJUHn54VAxHeox6ghwHmAuXtGUZToM8SaKsoRgYWNqk1Zqm1xvPcEP6UijGb4jmetmqJmeAKsb22qDrggcH",
  "key38": "4cZGtGDogbTG3ed6nAZP4j7YbD5Q7PH1cWJ9vJKWasn1HSGQGbHZvXceV74Sn2kssMjRuj53kUT2yoik4P1zTLWr",
  "key39": "4U38ZCqQjyEeZufZTixuFoB3MNXRcar2wYD87HNQnz6w76yYyzkbT9KRhygW2CGs9GLsA4eBEnxvYZVUe3Krqu3Q",
  "key40": "NLUyyPybzVVtgoaUtQDGQ3NoizBuDBkDHy6dPZdmhKoUP3yk7tvKYXB4fgDtsXpuqoVacZr8w1ANCkjQpzZCnff",
  "key41": "3SNPBzURurdEdivPZkehhWNEqkkEByVhh221NRRkwtDauhnGFWqZRp1nk1Ho6PXuG1Ny3KpSr7aKuK6QS1aF1uVc",
  "key42": "3K8By5of6LSGv2grftLCT8LHSe1riXUzjzyG9KgpxEUW4G9aipzof48ZfXMQcefzK8e29k7mq4vWEDmTjPWhGCJb",
  "key43": "9E2Z2x5oY8oxWwXbXoAU2qfF6ZoNxTN8EzCCUNSPSSCaqTbEqD2KyHydoEGeN97CcT7Rxeau4yGpRdHqSo6LezG",
  "key44": "4J7TcckbizZq4HTFS3aSYZNjmrZHCi1he2mppq6TdjE6Qb7YnEcf5xHUq9NDudkKc4bLoYv5Gy9m3bmjMB6DKvCS",
  "key45": "3CNNBmbM85UMBdr595ZgCenZYdnZE2xzrrLwYREQWqghxFBz9SH34UMqaBM9mXvnpMwz1bA9bzVdu1qpSF4e79QW"
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
