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
    "3re9mX4J24XyNjUvPeugB9VoM2WtXQdWQ1AzgQxZrrAgmoJtWXudEi2QNF2jZYnWDHRZ1yd5nFoFTSjoHZBs7FGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d9RNfrHx2BqAFrPCfgcnr3feqJV7adAFQ7Dmz1Ag7LvzVjHQSDPN7RcLJ4yo7FZMnmyrejFNT5Qurx2dLEEJVVW",
  "key1": "2kKBQuNSoZS1GnHw6s9H3mP5aWnrgtkepUjiiLG5kYx9XTemNTxHNWYx3QKTDeTxrn78XJHZcB9dGokgPCD22g8q",
  "key2": "4hmsQnqU68SPH4ukJJUqSRszLXdoWjGLntMG5i6yhaaah24En5Hh6rHLveyMFNeCp2zwEcFYUP4U1bg2qH9GU3VG",
  "key3": "3hNXHdcS1UYqRQ12D7em8ope673xFRuW8HmaKRf7xBQKnwmMYvDKVeL7Z6jK9yXwSisLV2uK4VmC3mTQCW8hFiGW",
  "key4": "3MN4F4vjrzcwVcW9aMN5T2Da2RUqy9TXvXePpfzh7H3iBXawSqAKLJADTZLdDXhkJB4PX9dUUD2zRVxkXH8bNaWA",
  "key5": "sngdn36m4fJvP4QhAhD93TL9SpFvfkVUmJ8Q3S2Ubfc2uN7NA822Fyd99JWg9qZ66DNYMWn9zDrqCvZHP7GeoMG",
  "key6": "2Uuh473KLThnpH7Pww3wQJ9rVo67J9m2Jk2LSvknni8zvJBdgeWV1YshfU8u3oJjCoyz1pzVkJM2Ese8qU52dPxi",
  "key7": "5HwbAv4YAyMQtYpPpM8Ab4bCT6Ns5RDqGjqAnUz151LtbinV9ZWTkwzGnNe86xkN3yWGeS9vzvF33QbYNBULjW8Z",
  "key8": "4b1d4mLiQe6a8rLgYoTqXKrQT7zXvcDEgWiKe6DSrKYtV3fWviPsnWCiersvDD1DC1RneDLxd71pDiGL2PS1RCnF",
  "key9": "bQtJsrbdNa7WC7EM4D9Ye66CCFXth7jrpj86Yam6tBbpMzRuG2AVJQaEVEzfTToUasRVf471wLEMx15SGwaXc2J",
  "key10": "4diwauPLSTqFSPEEJBYFfZ1wTaKJc5JRrvEa8iaUQz4gLgWumwrrSTdwZ2MDys5eZiceJwCHy9CpK9A5fWUc5LdY",
  "key11": "2p4ikbSuSgPTJqbMGfcqGfFrg9gh8gnLwCCbSpYWueN4QKSWp2sRrPTq1tUaG8rxDLmzSNA2EnevheWtXTDjzRDw",
  "key12": "66T5TckakvmUYjWetfBuZVUnxxAtcs2Hw1UNMoS5WstvxbJxexUDxvhsxSdw76TtmLEhoNW2dd38n6VrGcfdou7P",
  "key13": "QC1CEfss94qnERiP7gxCKFPqt4LdHbdjRmwiDYj4STNj3Crr4qPfvmagHGYRbRFTMaYZAG2j2wwGZMXRDZdZyVq",
  "key14": "29PZV5kNKUixN1n6So1KWHDr5LNxVW3EkNaHRi8NsRs38xUrrjGtfLduNbVMDCMQfy4vHxW6MZ3XWofxWZQFof2J",
  "key15": "3RkkMwsBnq7pTTkBkJZ32w3nDQ5PdhCLu586CDL1LJBrX8VgV4oJX4e7cky4YkimBLPC1wk4yZnyUesBZLB37DqY",
  "key16": "4NWTJfNQ797j6qM6jP7FRUiEqapAMAictDJTF5dau6hLCCNCQHYy48WsiU5tsW4R2fKd28xemhRMKjTEuK1RsYiV",
  "key17": "27dtY72BBs2M4PqUtXFE3WX96ZBP1hHiN4Mz1uhCwU1NtzvrZEFVXiZ7NXombn82Wrnq7im3tyAcwQFPXdYRMj4n",
  "key18": "5m1BKFPmUdxci5718HAUrxfWef7itkUaYPXyr41jBqSGitXG3gYTGrv2yfzeaEDWBEitHapGcrV1WLT55qzWej3L",
  "key19": "Li7rbcDqk5zX12NsuDnMyrQHpPJjHB4a6McRWSRZwu6MK3Xp6odUfVNUrPPCYbEo8VjqVpx7TEGJSqVPeNskpTT",
  "key20": "nqqWvTrD137LpVGPdp1C9aa9G4f2a4ohcF7WsYdMNyY9ApGV85d5WNHXy5Npgr9Rn8ykTADDr85MpZRKio37LQe",
  "key21": "3GdeKDWHbjgBRQXL1abHJMPo715Xh5KSrd8scncd2LZstJ8y8mEG9VkRHJTPXyArXarMSiN8cGNWMHdu6KkssK1o",
  "key22": "51Rvy7mhgfQVpCGuwsZQPeqVvfKN13jDPjAGsDpPVPxDKcKxQifTDutmrPUr56yR4GoGVcaJgtYuKQ9gzwkXES7j",
  "key23": "4igMnNs8QodbGq2sgjCEAc4gxX1bNuu8imVxZLrfvTbrUgrgG4JbHYsWDhoSM51bBvY2whr1vTqvmSzVHHWoJueE",
  "key24": "2JKctZqudNuW42rijRf6V1L3Eq8Csgg7qjZA2zPMSaufoS6iR9nyBRYwqt9MivoeQKeXzjzC3u5Aotw1nTcEEqZE",
  "key25": "25Ujwms5bRY2NDJPWSLtFxA9xmDEELutbQWPkcWL4xEvCBg35h52VXTZhiW6fA5x5NeKbmDW995GBjaenkRPxg8X",
  "key26": "4Uwx95svvcKv5WkjbhAPkzzr9v5rhzVss9QMMMVkmjMS8oqCfW8uJzkkqoLbS1dv9ukm2b1UrCzUizcVZvMwem5x",
  "key27": "LonoVfBF5mjYgvoZPCPotNsGqL21f6XFAGszaFjvoV92vWwo5e2f7cqy7rorpb91AC1oyNxAM22NedUCaQKNG1L",
  "key28": "2L2Bbon8nfJarDimaEpwPfsfVDfAmcQKjv48EMmn2rzNMpMmSKNxyve7g2Q9NUgjhqaJdP8cFFp9Bt8fvbvfDWT1",
  "key29": "2hMPuJsTsYGsdtR4poruiJRxngZjz5rrsiibKspoxrfzYq6eNqPtSZvZmRV4k2kT1LLjYb9P6i5knkMcK5EcJBR4",
  "key30": "3CSoYYeJYysLGCQHkd6Z7HF3G53sqPn8ZCks8MemkPvDYAeE5psfMt1VyPCyxnLuDkDATo2Q8Sbkv55s1tgc3QkS",
  "key31": "cAz2FiozTuywU3oGLn8rNxjhw1R5KAEEPGPtLvx9hNUYmFE7yuBDA6QnCsEGBJmV5vDXDsXRdebH9mva9KNcn44",
  "key32": "3ZisJUv1CdYT78PLpFReMY4cwx2wFUPYRuuAD6YQyugWECC9hM19h6k1vsfSQi6JXY6FHA21PgLhXBCeTV2i3o5y",
  "key33": "MVukHfGtT9xasKK7vFzTmyQzVYapzdqmT4GeXcXRF3rYmDjZKxxgNkLy7TcP2FcjorUCfS7cNmzHaDjWyyT3jJ5",
  "key34": "mwdg2ETSSmQnme6ZZchfSwHjXSGhvNvJbti9QQBV3QxmWWk4iSst6kRLdqv7fRupyRnphc7jfZKtnjfZs7GYxfe",
  "key35": "4LY9Q7ZDkLAkPvTGios7bFdCBgffpGWtmLXXUgNvhfjTuWUAy9KnK7aSZwaeAGYc439EJ2pido5eJMivhv8mvwXy",
  "key36": "576nWgnWm5C9YvAx8tzahXVxvzdegdKALsKEyEAC1X8M8kKEfCDGcb8necvhBq6G8e6Nfa5HWwk8rVfr4wsedkN1",
  "key37": "3ogcu7kn9BgMnLoz3JqmMkjazprxbpyB42tbjJ4edrgxx4t7QgB5K82i4AEEvPFWeJzAfP6hNLFQsiiXhgM15rU1",
  "key38": "4geyhsjGEZffpzwMpp58DubsMiEtZDCL3vQwUbGVZMWE3iRcxBnScoEgoVe46mvzbnCHvn6r3MjqNbFAhszKA39V",
  "key39": "22SkS7Jj3LfkL17UCajkxzPw4Qh23wr2GuRDXJpbjBq9UuoAS7bP9Dz41dE1RpJ26RawfX11eUdF75yUT1grrxHd",
  "key40": "43nB9mxw3ePKN45tvvPnYYk2Zzn5CS13LQRwBof8RNVN3yCq6az4gQWu2op9sEGuAcWbCGF5a6rp4LPxWYP1HsLc",
  "key41": "5xWh1fdGnUYoL9V7sTbnRnhKuA4TAGcEkM37NbN3JFtF1NQDr9L8miJ32P5Eq4krSuVWcL5xvM2ZHtqhQZhmmW6W",
  "key42": "2hEHfkhvCVnKcXC9FFk2EKG8sftF5PKStCK2zy8ipFZzELRYzKJqo2MJAvYwpuAaW3pyGfP27XUPzGeZ6429xr6q",
  "key43": "3KF3NdzP8eGZNEpndHo8buXGRogDogipUWfQTre91j1x8htYuHtv1GfMUYhoqSnVARoVq2TzVHFh8XJDPRX4RhRi",
  "key44": "46Rauyko1LG914wKLjNTfEwKMiZgdbrp3qRhNZMzVBAtGT5gaQ3EEFVKKGnyBsvpnMMkHBjPpAftwz2zUF6QNcaU",
  "key45": "4JFRpxvG5tcyUR5b2nBvD57NHsbknEtW8NhSiM5YQJWFPtxMWcoBy4xdsTYAvVzL26rCV6X5WCx6saSkLJmVScLe",
  "key46": "3NpaZLW5b2JNiZeRgLuMkuWkPbFpVWAsXK7TiLar9UkMXPty75dzQVBiaiQKXqVBwMJwy7fycuHREHv29jCJX4ds"
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
