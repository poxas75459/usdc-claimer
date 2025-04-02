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
    "3gseLXMKsRyc2GTfuxCyq6MJYA8Ky6VpACYh6WB5yaNatJUKLaf6hXQAzktzGMwVGvp9t9HAkbNYLRrqLaVkvYMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ev76q9GXkqnZx9NFhXf3NhxUa5G7jjkU9JpypdC9ajZfkPQnrk2r6HBKzUvXimhzD2NLV8yBh9YALQ7UuvpjaR8",
  "key1": "3XAzzpviEMHZWm6CWTi2Mr1oHjVng9VPgggMixFcGEMdxdJNsgvA8kUiAjUxLqRdeYc9GhVfdkF5WzCCEivNMXBj",
  "key2": "66fjaz6z88fRWkf1vCCgJwpkL6EwCwqchco5A9a831uDeWHxtVH9G5qv2sw1mYFLJd45PrepWFK9Nrr7gYGp3LCp",
  "key3": "rLMtRW5ghHs4gYdd11763ce2dSRSsYna9SFHUR1xhiT92n1HkqnungT5Rop11NBBGWQHUyVV73mkEQRdvmqVqHZ",
  "key4": "2hAvx1nXH1dE5rT4ftiz62RuR7ttYZBwvMGB4bnhzVDChVHcfbFzEk94NTvBHsEWvRYsH13A9pPir4eVjkYzqtdF",
  "key5": "4BcTMsSqPCXYkvcQoS5r6JAmfrP5PGFwefpH9hKf8fRULeoe56SxzCmfmLNu3ggXGCGW7sMkwstxn4FKhy8vfH67",
  "key6": "5tB4PYMU3LfTHsJvz5hLmpJ28jE2aTwKgjRbyV3w7tngzEknXGQ55QbUJjMAbLBwSnkCxr5kUMx1qs8ABNkHdzdR",
  "key7": "4uLSDiAwpwtpeVi23iDBgsSARL5PMZoVE1vd6vKYpWNsCV3Xp6n6XZZq1W4t4qxU482eDMLFPcMWMaQ31ffm56Aa",
  "key8": "5hefziWCCvNnxL5p5DTwXVruPgAMSzLHo31UsFhc8tMgwaHVLSgbJ8neqvtJXEkv7TCyp9Bw8B1ioqz25Muophgo",
  "key9": "41ENmMP9jACygQHExiFBfsP4B5m2XVbFwnRMGrYmksSWAdge9DbpQA2vebXGCrFxbJ9gwwa8H9KFQ92KmXeztYdc",
  "key10": "fcXzy77UUpuVMrX7p5uwEjeGfoNuB2kU8XRNyH3SwnBoj26EyHoEUyAzh4gtoFb5ZtuMZ3kXXpeWMQtwwA6cfwd",
  "key11": "2HxqFeQzTNqpBkRpN315oTsomtnE86TFAKA6qQzgPa3xCGKKPFuT6RqwY8b5xNbKmQAnNxxtcCGn69dZk2sHgucT",
  "key12": "36h35ifitjsdxG1iNkydyx6FL1pyad981Wpn6ss2uhCuHUoiUwdZVSHpaK28Hz3DSBVboES31FapqXghUv39Ee7K",
  "key13": "2ydXABXC2naT3eKB9xh5EPtLyqy3Qhah2rkAEvyqKcaGyXBnAbkbaovTFfeFnvktbW9JA667K1Qv5ff2XhCHcv4s",
  "key14": "2zPcm9M4YoBX8n8f4XfBiUhzabzCU7RLxmrRgsjyYiQKVdbHkNsNAhdQ2hTrXij6WSJq1rstCCZm4GGgRqP7AxTc",
  "key15": "4bDAPj4t5tsjpUz9yVioYpf6K1qMRFHEH2ivj3Rv3fmKm3zZCEBz411ABBtr422THY2c4TjKfEoGbcp2NQ5sU2JT",
  "key16": "X68a1GqxwQYZ3cBV2yi3SdKDsbftphdNJeDAYe986DmQAVRx8A5ijjSZAfE4pmnkHqEHHMaZciu1TgCWY8c4KRk",
  "key17": "4UNVLRsrWMK5B1UZtweUndLs89xqA1wXER9z7DuDSPB1cmBpPHbrhjDdtRcgsyuyR3YmitpMbPCJkXYZ7sFN2zSV",
  "key18": "4vn8GhNcoKf8y3RpT6wTsdBk4daB22td78dDyxHRinpvqQYCtVAkhaUjU2Sf7NHnt3FHHMh8HFAqKhr7xERYhVSH",
  "key19": "1CB3SY8mLwW4wuP1e1TxE2GD9chgaiXqebUnZYy9WTWvfXEwp4fXgc3c34uA341K4qJQu4WcBUrZX5KpuFUg9qN",
  "key20": "vNkaafkRJHaqpHXLcREgy1FPhhphomUuxdsqbJQJvksg8Ji48WshkCzfZPcx6Lx8mkaAkbfoTAsJ5MxuQ9jPK1b",
  "key21": "2tc2j4hx8L3ZHr2Sz4S3AjBsp7UjuMrkoaup2hD5ek1Yw4j1v8qyc9CeQLi8XTgeaR8FtbGJboYpzhF3qX8Cm6XW",
  "key22": "FMBRgXbuss4AQ34VUWoDPHx8ukZW7KdaKmjCYtWqQLXcUfjPTB8utgfPmHkmZLKteTVcjoMGmPN7pzd5JNYj5TD",
  "key23": "3Bmh214hzddrrW96B2q4qXavkPgdeR7av2EWxQEZCZtYFJvoENhFScYsUPaHqVRY5k8yaUQgUDWzNezDK4owqWyP",
  "key24": "BTjojR1jbA7BpMromv8pviduAyssB8KaXKiRvwFSnHsyy6pZx57hjHJLvc3Lcs8dF8nqdSwQtGBAH71GBHf6Zvn",
  "key25": "3GG4g1EXgQJQyir3fTxdppQMaj8HYNuKCZ4gXRRxeYqTwq4rUF9a3rAssA3P3cb7jYQhqwdQCrtfWF3BfppU6AHz",
  "key26": "YN6zEe6HfLXwAn865obyTYNKomj7dV3VU95AfzCUo56DuxbAvbHdjL8Cf5aNSAG5BUReQVK3sHYEQMGdttLMbsX",
  "key27": "Kznn25ubhy9vY2e5QPsJhM2JrK6DKFA3L8iEtc1TNWSLcgpihrWoNGJ1kGrH3DjjReVMhAoBxDJUCECSxdoUdzX",
  "key28": "2oCDadxLfNLi2TDv7HeNjSMC98ddDzudvCtnP73qMYfcBZvGYUYwRTzpWHDoGm2yXVqzXu8C4tKpBre51H826tRd",
  "key29": "52sbLduCZker8iS38NrRzi5idBacfYbaUe6ZfdNESQHP3Ey5bWtKQwpBL6zEZTvbGMSWyX3Sg39XjnxS72bTJSLS",
  "key30": "bbXKPeGc5Q9zxzmQvj2WyFfpiCSmgSZEX8oXsPWPHC6vMfwcXDZPGjhKxAAKFy8ZGEUpomWhCm95tTwCqMA9Ykf",
  "key31": "5p3mg1PqnMP6a2z1Y9h53euwkM1G7A4Emy6vfMJMmfzcbqvu4EDFYbtFS8u94o9o3s6WkhEyi2ufekZLJrngrXBv",
  "key32": "2tYT2boXMzf9UfdLEZ5xPY4PikXKda4bgZphFPWZ1VG9f97YFCMxRZ6Xrv5J54XZe1rgSQAMSKC1AQK2SETjHvxA",
  "key33": "4rpjcJuRGkcGvN7nfvNPSGBTykQVtrqxaoWrUGktK8JP9phiF7uFtMddafJzYTmHDnVvZkQQe4FTEufTSXgqhLbf",
  "key34": "3QUnGUK3EEEQXoDNq2i2eqc5yt7xhTrnL7VFXbj7QLUqCi1MJpv4TbU8jntWYXz1Jt9JbNdk1iC9EFQyXttFdQCh",
  "key35": "3beqm6n3Wuaf9ArJbxwnBoZf2CEm1NGgNQsb9Rcsam73ebkTKedrAZp9BMqTHcAx4dEiBAX6hpxyQBMkQw7wqWz8",
  "key36": "35UjdR13ooJBEk8dbnKYuyA3NcwwRbHKv7CTc5Wbd2LMe2BAzXMWXzjvntyrgG13ycSzQpodWJ63zbTMsnYrWrzX",
  "key37": "4T7FqisZwBCZsgPVww8kZzUcGLhxXT2K3QeHaf9Ubi8pmiDnPkkAFazRouFM2atbVb6M8PkkzHYdzformUee6tAb",
  "key38": "4YTE9c7Vn7XHFqtR4RJ7rFyX7xJ7odkYA2ZGSdZwVYYLogrhYfeHH9RvxAAfop1Saae4eS7ueeGwp9pTaLXKUrsP",
  "key39": "3yZxtfWQM1wxdedRDXNgQPAZmPnW16p9hcjymt7uYpm3Lz9cYRXcMysVGT7wnQKTvvpm5nxnwEg7w7ZHziLMgzdJ",
  "key40": "8XmBwqgoaXaCW8qMJqaD8E9AT3sx1RcHwGVwPaJ2J51JPJVNSne4HqfR49J4dVTxk9sRyUhhmryjZTaXq9KYG65",
  "key41": "viJscyCMNBPvqbRCPjVF3meXKunieVRoLAZ8kXAbb1NTKRATZ7mQcfSqu2kgmBznuKZUr5oYA9HvY66fwLK9gPk",
  "key42": "4THYW4Nfh2uDRWfow5vjV8HjHssjLNd9KrpHgFJn8RRpBndamYAnyeeB6wtuNCb33JZ8V8M6SjYGJ9uyz9boLcmB",
  "key43": "57KmfuzbRMHemmLHT3eTDafHgNdnnVQWAUKBS217pc9Xx4g1fzkKvMSoQopZ41vVsgh23ot3oswdkCbfm4xtLwT7",
  "key44": "4PvwE9fukujzWqgazwjKhLK6TgLBha478y9cbFyGt9extStGRuuTxdiLF9sTtcXTLabCL4AiqzbWETFbGnjR1LZs",
  "key45": "4ptMFDyKZpyhN6u269J6W7LVrWqXyYrDfNRgtp3gmJUxDsYXk4ux4tkB1XmzBkahs8qdfbsGTEaNXXsk4paQp7FF",
  "key46": "ow9DgLTGXdPzMT91VPQX19wfpyJshuAx1exBPxDRHB7rtJFCHaJ6BiD1ShyigFvtDb1zWTesdGLvTqRzfjvMQN1",
  "key47": "5RsdzKasPSJDPd7HdoRvSf2Y2qkkhXNb5zbh4YhLSYnJzATEhTx6piBmgdA4mD6RMt4msJAweDURPZ1wfAQYdwAV",
  "key48": "668ZFfyms3PMUSp5G1Ni1C8CyEZhUYQoMJTTJRn5FR6AuNdmZKHgezKcV7ZxeE7Axr1dKm3dwnjUtnB5NT4u1uAQ",
  "key49": "3df5ijR7G65cSG7zQBpcJzJfUQa2STMtskVUErnUPvRCD4HKBxwJMGWvnUFk86JYvYy3Z8bn8ewUvoKX4P14QYTC"
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
