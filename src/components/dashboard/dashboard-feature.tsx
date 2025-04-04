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
    "38WRcGukdHHgpp3HW6UEcxLKLfSQuFLCA9w3YrGvUBnKu5zazcePQcqBdGfHawzBrWkqGgweWmF2FySdToFASqVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fUGeFiUvixmkWs8iZA1jQ2ZbxgX58SoztTr3FoBBuydpwwZLoAXD6bnNJmDmvvgK8vASE84Xyp8KAowMCzCS9L",
  "key1": "2WQsPVDPFtNkyAYFZNYKtYTWAVsftmYC4J9MVP1iSpkWRKDuDDfyjx3epXD6epXtLMFTdbshNfdfeM2FMrMKRW3c",
  "key2": "LjCCtyHiXgZ68JCyMEAue37kQusdMQSxbi8nFfJpD37fC22erGweYPoWJEKbe2EEZKQvHKaxRcdK6G66fT3YXg7",
  "key3": "4ygEpGKDFTMyGMTej8NRoDPU8aeSLMXUfzynoorwK6MC8PztEFYmWtb7Pa6t7jRHoB3v6MbAmqfLKkzwPFy2gyWk",
  "key4": "2f2FudinHNExLz6vrL4j3cf7CNyiftKPcPeG1nrnUCPvBQSP5xXqrzW5ocH6HCpvRQgHPG8z7E8vsTBGf7nntiNH",
  "key5": "6fkzit1gCZXEKHTtoJjsvqtQ4dNdg8ERMyssrvxYZNhTGMGYm1Vbm97TdQYpq2zS6Wk45s2cwXfQ4y1NSZEnmk8",
  "key6": "3E1qs8kVnC57mN2gaTcn9iWG1mi9bstTX5ZPNQf1wgBHYKZkHa5CmKXj5KoS9RFQpmtNp66AxYkxhQqrJfh8vHTU",
  "key7": "4TzswQi7NNweuNBAnaHgs1TexWiagbuq1hdN1iSUPf3Uvgknj7CEke15eE4Df3jsLKbFAqBP7c6358MBMmUkrq8F",
  "key8": "4L6WvEe4JJyfxWxtYKrQbxdXyzFYNkDVghjc52ugwzUUPQRzeNrBtgrJjNbtdQP1N7LfJAcQK3Rb6KsHwoYRnKAU",
  "key9": "4me2yTGNrDDmJ1kYpMYnepdvQHeYePsZ8PZvLhkhgT2r4QNZpFx6NYVdN1UFVffUeNUbM27tdtp1vFvii8grEMPA",
  "key10": "3NeGSHZ598VkS8jNWkBFDnreaArFAomyaQ4h33hmTN8HniS233oYt6GjMXeQFcXoFSF682fbXhWoacCDspGiVfR3",
  "key11": "pZNey6QH8EWaGxtMH2vgcJxmH9SUBzXPejwQhHk9BzorJ3b9uE7Th23ucwrNKm1jQ1o281emxmfwRdC7kMy8cFX",
  "key12": "4Es9H8WHEdqcfbAd8xUxXeDbQMW5ZKtRNLUeuH9NAy18MRTyfDQakXZGWhug37JBq3nHqdqVmwKXuVvT6PbE6HbP",
  "key13": "5Ay3WvAwBurSSnit1AGXYCiG14MYNE6CWb4zrEJm8owYRsaPfg3LEwZpnDioXxZc5Uzn7pKJRpRCCTP6hyCFfF2c",
  "key14": "5dDyDsqNoJPdsRpvGdE7nkXqcwaaT5FKFT996uqus1XUKW9YuQHuR7ZwmvhhvxPbHiaxoDGcaUSQzHfT2Q3YzRi4",
  "key15": "5vLSRYCVeysQHJEh4kJ49MESCbvbtdpGS5pv14apbP8s166zje8WTdC9rKVdDSxeot9wj8Eqg3QnrYxfVcAfrPDP",
  "key16": "PPGPpjAi9tzJNn8ZP2WsKqgy13iAQZHajnVPgck39TA2tfHSSb8YP9WQV6swNyyd4kTsgwwFd77nCBNtHMAm2Q2",
  "key17": "3FCqjm6PwpEXuJCZVZfxfiGU7MWDRMxxercSHZajMYcA8vRJMsnK1zbMAaKRBDMzgM7Kyz8JxTWPxmRK8wX6Dokz",
  "key18": "2FqahJ82Mf5XYwgsyQhqTgL2AuZqc1nz84B1c56jksPypvU44ezPRugaAVTWo8eqGMDJXtfNHV2Qx3wGMkLVZ23w",
  "key19": "5uWa5YgDpmmPERPrALgMr2PauvisUMEAsFRMxM2ZRGiECYkQXGxvWLcyiQPMkXDMfF7t42Rsw5M9WPqNSAtF3nBq",
  "key20": "51Tow3HoKRR99KQUdzr3F4kVfydozaL7DAPdtvcPpvvGDzbHX3MJAP6KzBQ1NnurqondswUupRq8mTumnDWEtEK4",
  "key21": "5mWyjYhnvnRLd2sZfUjAPe3Rg4Ze38owxtEbtKfngzW9ze6EbhwKSw8cTD6rxS8frNMkdaUeJ4Gpzp9Ym3Q3wMxk",
  "key22": "skYdrYyavC9gnMsYsiCnSCsosQCHGKhWdUvQEEXLQYAq2GaJx5YNcSjxDGiExxpTYH5UNSZGe4SsLJhfmkN2PA8",
  "key23": "2jHzoAGUbeS6dU2qFez9GUyrvHpRprcGPCj6VWykHgmWRzgd8GEyX5sfPFBuHZxsX1Pnfc2FGDbpSJWMyACkZwzW",
  "key24": "65fCskrajq99kC5ucuxeXg4Ws5yqwVYEahxZ5skoWFuuxFhyjwMe65E9ZZR5CrLhgvnEGtt2nwW3XsndGzBSNtCo",
  "key25": "35b7VForyYQXj4hvkhN8evKzK83F3HFtUHGyzGWt3XX7WWnvt15Lu5vB6HjFbWPJtXV15esYbuyg6oMZ1pXQD4gc",
  "key26": "4ooCy3hx9Gq6AB5353ST8qUJoinDQyz3U52WrTnVRfTS9f7X3Nn1R3WJsdDH8mDW9jgrkNBJo64V2MVNadSaWfSW",
  "key27": "31kcro1UagTzXMHFEHbnewkUKLFQiHGjTYYCw1R4RcoBYb8C9Nkx9m5b9XjmdKCcEn9YT8QXUbGHLP6GyAsBnxjn",
  "key28": "4mX97MzaUqG6nTXBoDCQWyhroegwk8c7TgrLZBmb6VATge3viWFLYgteQ7skAnuGFNRwLKoGx4K5mMEAzYry3vd5",
  "key29": "42JEVg1V3vhhovUDvSPCm5HSxnwAvtP6eKoppwjzm69nfidS87z5EqzKXvzGTRv9Ng7jj3VdqNqCZ3zsqVg7HfJF",
  "key30": "3tEZiEX8yKC9MXJBjJReSprmKdCanWnw2S82WhjHL5neJm4pbCdWiqf9CyNvjkJYFMt2SmE914ZTMKDc9BAAWhSt",
  "key31": "3tZkvG8Rhj1XW83zwUcPXNdHSyccH8UTduH2c5BFxTMvdkkRDaHhsaCqCRiFxS4wnvQ7p89tWoMGib13S5BKA484",
  "key32": "3DvWqxuqMMDrLkZsCaC8Pupb9kT7kDYFaK8pX2L21HBhiumGdJqZ7rGCxsshWFskwRVcZ78ctZypfZjN1DDdzRwq",
  "key33": "4azaCXiLyTqACia9XUSMowLFGZ4JGM6CxyWKaZbJWHoY2HfVgh7iF73wGvaCcJCNGdYBg49qLkHFu8uxgymNyGvM",
  "key34": "26eieDYcxNYaFUozE5RUKiW8f7FHcmvYWLmvv6ySB7Yn4VGcBr449boT5g6GN5g4VBqYiHqQn6iBbX8hUf1pH3hD",
  "key35": "3RspP53JQRW18xk3SPZ4KupSy1o2im12Ep6PSW1n2KFGmkC89nZHSCBeMK9cqvDeXQNLWFcDSTvm2doe6CxU1mng",
  "key36": "2i5cb7P9Dfa6M7hU2Nwi4RFzegSRXLaGqkqX3hmGdXZr3i2KfUTTjDoeWX34WHJSrUWRXVM6UafLFL348VcU42Sp",
  "key37": "38CxmVbnFSXhN87XDeqaLPEVw51fnk2ydM1wqAan2QB1WzCXX5PoafJBk7CBxVRTbDK94YmqSTrDYTBCDiU4tYCU",
  "key38": "5deDbneaDDqCJPhNDvH5EjPDaohoP8fnbDR2SztypqgwB88fRrza2LXENzNgayfRzATYenbG9C5w2sMeEJ9gYrdQ",
  "key39": "3gdYT8ZMynPdVQTP8HhG3X7RHxEi8q6kzBUrmQ8w69eSdq8gVmZhvBC9VwQQUVqTgjtuhBmAorwAE4uNVEiMHD6J",
  "key40": "4QrZ29t5SvSWrAd6Tf4wEf6nc9wjb11sHZSQkXbiFf9zmUHdhECgfgLtcYb2P2stawJhhaTdMqgSL8PQitMGa9Q",
  "key41": "5aA6imm5zYq3PPLJqKYGAXffSZsqspnjanwx7qRVgJSk6ufofSu8Sau2588RUKim6wGXtaHR8Yv78syjwMmfNbpp",
  "key42": "4uRcHqMc2re3kacCckCyyzcycSNM8uaft2szmkaLmWEVTL4LQcab4bwR8Rk6kiUQLKyg8qJnPn5LMzZrVpBAyVne",
  "key43": "3UE4UzErUb6vWGTY9PDSn98CDjWVNqdAN8R2Yi8dJ13q7r7XvAUmqn9cQCL113aU5GRrFKB3nrUrzLG1fmpQdyPC",
  "key44": "6UUcPUYhEkTziCz7bXZGZjvXJuB7jKiUmBJR5zze9u9wetuYR62p3McbZNpE4cB4ZR731Tk5KzMbjPSD96HAh8M",
  "key45": "3KWqeFD2hbxrNxa57jks2YBiHxo3hrosSYRecKcSaPrPHRWGvi42kJKahLWseFQ5cAyU7inXSisjh57wnjeMRMfS",
  "key46": "3tZ3FgaNZ7gSLoYBXsMWru9rLqKG8QjjWF4e5VhcitRGFV1AcVXy8NfAuDfhJoJ2SspHT9KtGDSLg2jGX63rVWPp",
  "key47": "24PMEv8uqhbzU6hqsM252BtqHuYrpVMGzfrqUzyc4guTJVEYDdk7c5Ds2Lff5vW5ffjo4teHAcaKA3fwh7gs1Jxa",
  "key48": "5cG4G61h8uFSBvXxxecTPkVydv9GDJ5eNCyFWqKzhF3xB6Zxcvj9KoovKy6zw7Mgq7YBHcufXiXrKzVoLNqfVJR2",
  "key49": "2rk15x6Wi2ePsWAuPWgsSx73qQ1Ki76mAy1VjoPuJXdNgNzpsWfimgFFVSa3RsAWxTN6KfMFLS4XKJuiayujZvDD"
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
