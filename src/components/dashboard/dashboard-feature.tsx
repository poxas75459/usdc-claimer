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
    "67C8NumMZ4DaiqV3tc7tgSiJw8pUAJu3xWq3fESacqUSJ8zypA4cmfK7oZ2RMtsCQKM4FiLCZHD4s5JKL6js2cCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MM941FKxcyFWXYnYPTwwi8chPEpkLeXiKspueFLTMBRx4aa5KTXUXoPrCingYHA3wtABVo1VcwpfjA7KGGrK7cc",
  "key1": "2Pb2tN4ffWwxFYyRAuZECgpTfeMDCiABVB2o793Q3MHRxv23cSpjuDkcwMVXLALA9vRMtLFJYt7gQ6cqLZiD7gbi",
  "key2": "2xNuA9LQj49nz495xh2jkx3fUTJfuxGftpCWQFPy8kcyUUzR9qHSrvdMLwiqh7wfaRZCWurcgfVsiTmBKqt37ahm",
  "key3": "3SmeSCEpZsmpgs1GeMo1gbDhWgYzcRtbdHPeAhLUbNZKU2FA86csAsWPjaYGEE4dLvdkBvue7YVKCGW4JxYhdSZZ",
  "key4": "2goEXKb1cpLrE9UYdcKcpdG4jWuFZQq78MVSX3iGngGxFPReXrnW2RoLNysyNkn1xd5gciV8moJkZgnefeok5gX1",
  "key5": "4Ej797sNyz5KdVfZTcjmJoBPmrKabpPaW8rcGn3y2qLquvfYJQwt1sJVCaiKZL8sFiAxsDMJ2vWJ4XauJiBvegJf",
  "key6": "4YztPZRhqRg2JEnsUpCcKRAfau7VbHUDvxFv646woRtsPeqD3EXZgpJ5CG72LAn9a38cghNCPSe3MNqNpY3E3rG1",
  "key7": "5iz1opTVAUudRtE3Qxoqmuy41HeofBtYhZuuQZ1nR8buExnrPZwiLf7VsRybn7kz4H1Hto5HasBv5PNQdRDWmTdk",
  "key8": "Uo4HCQSYifJTedqdA1dZBxCwewcf1uF3u43o7aUKGBwYUKB7ukRu1fFXKrbNvsWpHWYEj9RATmG1EAzXLXDAbrc",
  "key9": "4FUThcEiQKcJSCu6GKVuVLN7Nuywgso6vrqmizMxt9EK7hK3cUEZuBDU7bSjezNoXte1iH2fih5yM8zW8Q7oXd66",
  "key10": "1jwtKc1s2bK8yUpTNfp9m1fT7DxDWsN2Mag64KVQV9nUqvxvGWoP1cC1BMW4b2eUmomHxGKxkQa4SShHQRDGAc8",
  "key11": "Jys3koNcME6k37b571f5zk99ACjDMrHuGQM8n3vuVDxftc354ecvFgRQkJxxJxwt9rmszwJcnuMTgdtQPrgQ3sV",
  "key12": "5651s5J41KUBKT1Nxzzvq7nDAbd6fypBNbHoEJ7WUbAfoYJP87aHSpYJU12P3UNKJaBFvw78gHCWUzq1iRMZDsb7",
  "key13": "3pkpN4QT3AoR6i6ctyEd5HPXumy2WSNkfMe1mQS8WK89nVbRZ9jBimdenj393PZcoZMDzA7YaS1tERcV36LUSRG8",
  "key14": "3mP6eXfjoUMAJeQZqsdNUP2d13iZVdLmhNLonP6ZXWAroqVB81PddGhyR9F98s21isEEezzc4krFoUffe9UkXzk1",
  "key15": "2g3ARbYDj4Qs1CCSfh6SUYDKQVPE6sqxrGuzUeCBhGN9udb89irSxGVY9A8RYzj96Xj1PjJYjDKZSG3X8dN4eokB",
  "key16": "4bpDhm22tBhErb548ig1AixMvHaxUmAkDJgpA6pfbqDwACB3SKtAUiwVGU6YB2spFVqSyJ8eJKAtJPorcqdxrioC",
  "key17": "vqdYwxFZTERnNq5aE2k6hZkWv9wM5PHP49JCQtgysH7UQYLy7WSaTZrurkYav3vrUxDS4UMpKP56KXVHsBFgypR",
  "key18": "5KRcXLmUL8rGW4spnnkrhcMAeq3M1NCg4LqKmFwpiFv79iHJ7VbU83wDm8vNG5KKY5bUiZ3pFyn4nUppPctkLs9d",
  "key19": "2vMoLPTqFhWTCNtBtxScdpY4ukarLkpfZhqQ8DqcmHM48PqoryuftHqPH8SZBynwZCUCeEVm8pZVNVUywEDtx6dt",
  "key20": "4ArNi5qRqtQyJb98Pn5dYNcxSStWaQgwYCeeh17cDR5ArgAPdYDW5FDfRgk7ifhQgKiD1tCYmRRALNroVr9h1Z4V",
  "key21": "hWNeFXDkqMfau6dd3px6sMqBD1khmvbrfkLkbdxANpfpcE7ZeAkSSKuuQzkLZRRBhroN7mCANn1bT3n1625nanV",
  "key22": "3idWLcadGPY5qXK2GnA3ogU4syVqY6EZRcRUucJTbhCcfoMmKbyiF5G7YcHZFyBs16XYtMoF72Aebeqruz9Nrdbd",
  "key23": "5FTVBK4vYi5TEtmmA8DxoMJZ9XZwxCMC561wAxE2vg3cfVWxE4QGEVjPwgJhvJZoaB4393NuamMm6Q2QEBMk51Fw",
  "key24": "3MA2h7tVLu1ReB1XdtNDbnESaCBgMMGAAGVh2NueZrKM12sVyxivPHg93uiQtfLkpknvtijrqpnBwoKVvSAbZBSN",
  "key25": "4PX4C6tEtXKDhJBMqrjzJL24CPp5GnprV2e4Hzqdmq5JXcgPSi9HZm6KhucHo6MJQ4errfUaijTTudd5Dto6MX43",
  "key26": "2CS2Hy671XoVVGGJd8PZF4sEWcwj7GzLc1ew7qHJN5qMwGqQxZi6wyYwboufAcTjfzw9en64CWgNeGaKjaiZXPik",
  "key27": "61DCgT1PhXW1GDsSeffmEb87fs1qdvkABAvqKqy7oeGEBVgQgSW1rvdjQDUWKienkXZcasJ1PYZPpEt4u1oC74WS",
  "key28": "4WCawT7sYQSsLgxtiRTnVuq1WnLyhGnatsbZNHYijpyCeJwZnWFrGhUwuA4dQGfUpRH7jLn7RbewFuEhR67diAmM",
  "key29": "M6UXkhxmHTBhxSL5cFYbizhpe7H7J9E1oAwz2sVZ5FHjx3mvuoboqTqza5JDLb4gB5mFPHBnUYvk9exytJ4kdc2",
  "key30": "5feeaqDpz5JUnpmWEBQcRoHaK55MGQd7QeZK57a2kmaFNQ5D8SYg29fRxCNaPWE685gdwQ17URVjwZKskKgGQQSi",
  "key31": "p7QTuCScW6YKeUdJMTpjeSjrUnB4Qy7SniitSZQSJcZW6nTwyh1CP2EaEqE5iirw8JPjkRtPGhrzLRPUdj3BSvk",
  "key32": "4LAo8pqZTc9Qt5cbuWR9pMST7BSgsFNpnHDAGEReWExuMhaZN8HKMquwz71yCkeoibmfvQ6SEBeAwrJRUTGxVy7L",
  "key33": "BaFpmsfUNekCsX9NuF3ReLvuY2dAngvHu1kUd1WL5DUzaRn4sehbBGVFGsXpHFVMMcmzLQLmzDxaW3QZ6c12Ax8",
  "key34": "3xkGV3S8FAvh3bBmUABQYp4e1w4UVt7eWtV6X9GDqFhbgQSiqAYJiyYgZ6eBWPWmRmzWVEo9an2kwnumZypD6Zt5",
  "key35": "5LDp4SAE95Psi6ywj4gMbpg9ChheF2hFJRio83gNSXZhQLsSQKWkQVDJgBkRiq3m9iVezcrRVVQ4aRzXaBXhA6mS",
  "key36": "36dyv4J8qiXi6euqP2FFuiT2WrSXMvPN4tpSgn8n4WERrB9u2UnJHFs9Tdj7WqgQtoj5g4FrStGRzmcuLZ38bFgq",
  "key37": "jEdF3utDi1Zy27jhLpKsXtGmoifRH6LZHHtyR4n8N2AMG6oy8Any9VDgN5wpCaH8t1hi3ebUW6QLgsMHdi6Wa2D",
  "key38": "5ecHTWv7abNoZ7YuAyTMbGMrvMZL2gRaWC1r6BmJZLa7EbMHDx6RHugdHfV67QL9yhJKU9pJsVCLdf2JkKLps2ki",
  "key39": "3xT1pjGKgzReYVLq72ykin33UCaFKghhXwUj2m4fQF3qWtB315T3jfe56WdeezbxostLdFobLQ6FtM8gcyYYUkVp",
  "key40": "XJNGdsnWzB8rMpXgeRrpFqZiuUHYvC2VYokYMwPLJq4ec65Dme28ULEtp8no3szkwvDQgpF384szt16kmdaEo8u",
  "key41": "5LzRe2vxpouD2Zoe8eeML9tNUyrbSqBDipQpDDUpuGRTD8gFF4tAikyaNoqVAVS7R2e1tqsgH7S42zuSG3wH6Gii",
  "key42": "4h3G6tnLGsaf5wiQJw9JUZvwk1AYF1cW6w8oo8LJVKEXibcSdbuQfDG8LCU1xAD2B8mk9PKHAs6Py1cXSdnmont",
  "key43": "543nsaXdGTEvFataTBKP9X38Dx6Ug65e9Dmn3E1RpScyxTgzotEdWTfkVsusb3M8Gifn4hY3FpA8huKSKHhzHKcb",
  "key44": "5H3R5bWhh6nMjMzmMGkf3W4BCQsv69Wtyf52kWiiYT2w7urBrLvCK8tJGyzCLHk24vzwjWsqDjikhtwcFgrejQUy",
  "key45": "wZhnz5e7tTVoJnvj2uSNC58rFwmTkEXzdEqNihcLuj8GLJUvvNU2T1PsrF9nkb2AUTgyg1AyUevEK1ZXPsqRq3t",
  "key46": "5A7FuzY5j7pTPy4Ji1fbHm35q4Qf6si8e7gmW8p1MhtyqUZw2C2KCmfnQHkKbsBVkD7HRHP9zy1yU1ik1sUmRSxz",
  "key47": "3dgrMoMS1EjUar6Ln4h4bdG2iwwuhEdA9RjR9jCgrF7ZX3jQGSSbWB4ikZX8g5hF7oUwZwsyFSkvPSM46cY9Y5Gr"
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
