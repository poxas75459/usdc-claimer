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
    "3Q5BqNJaPa2CwoZcFd1b2cagpywC6fo2MhCcKvhfr67oxCF3xkJrbWsbYRYtAemjrY3TQL4xboJb1Q24fNm7Q3oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGLLzFgDapy4GD6cZFvkrY2dHQ2VM2N2J8uLKSHa7v6xonPrrgZUFPNqPRkndXoJTtMPTWAmBBfgE3FKAHDXUEy",
  "key1": "2v1r68HzuRyykhozo13i1VLjufnXnryChHgUXpGVsS4nANBp4ziZfRomHK2as4ppaKrfaqK67GbmBx1p5iePb7Ps",
  "key2": "PyGZ4aUunRdxRdRCV1eUx5hqN4zjkpVfHG2PvjgQ8Z1yAZQTCJpbkHEUXhxy2ccMVPErBpgGd1nBwSCSRhSnLdG",
  "key3": "52V2NdZuTrTHrXpyDqQFGoJ56afG51guLH53XsALXDQqHdKjx2iU7EhywvqNBC8BavabpW7TFSmJENhF6RSo5QKv",
  "key4": "2Ubuo1PqUjjp7u4iGB3Yq4XVgHUdRmkfXqC6SjToLh9Ti23Co9p67fiBgERcZs8kZijSoasVv25AyK4VRcb44cc4",
  "key5": "5T1KJ3TGSZaUP9MqdjAXjmZn8bNqyes1ptYSkxcx7inT517WyfiQnAKJ68p6dV4Nxh2FWnFqReJ8MqPf89f6jgHz",
  "key6": "NCenf7AS1QcLj3WNrChJrkzzU6aHLqunDWHGrkkNaPbKh4anoeFeoeovUtBqLzc1xWh7x3ZRd98Zg9qUe9t3qZH",
  "key7": "62XJy5HKZEqP9ABJwnobygoYDkwLRREq56vgQrSPr3qo7VDNs5gJ8EDLth6poKTiF9N7Q9z4CfDyY4Dt4uiC82UH",
  "key8": "638rN6YLc5838Y7hzEaqjiSqBkbr8cjKutmMyCNZ19XCiKjwW7EG66ffHZaGrRxV4NyFWpvbcpsLivt79Acsb9YR",
  "key9": "3Xqy5PGn33qbcmqtnwtaRnw8Tsd3ocpY2FNuxMCU1b63GWE4btFw45erQB9aD47hnkYuk6uP2pvkAoZTuAQyAfC5",
  "key10": "32jm5KB1XS19ojXkoXARd1hEbAD6oNkSErH2U36hjZZtNJsBHYVhMZnPsu3oqUd9PtYPSwkGpu6YFk8v55ujTnCJ",
  "key11": "4GWmvUBQXqPRg2kWcZw89WbYRuMxjWA4GDw3SqgLHrNXRftMj7pFj2wZHpTgoLZwXDX9nb6KHvGAUZL6m2BvbTvH",
  "key12": "6764fRBVorPfDkuD1cS6uEhpQvex9AqGcUYCccwU5cx3VdU1fb8g9Vc7s8FttwscE4zktaGPzasMiQLRBqmm28Tt",
  "key13": "4kV1DmWRwjn4b7JSoRMdwXMkBHnJgcUeaELaBJUqTcR741fRLXKPNWHwtFSebPYuiou9yiNP4WePDV4a76pQfhwX",
  "key14": "3xzi2x8zjaxAmcTrroKCEy8XS9CDrfMjJCEVLtogyghVsfc4L4gdjXK5x3SnWihyWGjwJX4vpYR7sQQYbKVcJXz7",
  "key15": "41W8xKj9aQ55LzX4NBJUAoSrzyJ95Q7fC6xuh2YQgcMqnRKVgTnScTniQCh1UAudBcQRiNZJqYzTDN8AYjHtNgYi",
  "key16": "3CN2NrQRi4bzYBxrrPp4Nfk8Ccb3E54ffNgYSdiw6RtCK6MP18QLhvTLxo9Aiyrtx4GZ1me3HyoNsQUZX59n8qEv",
  "key17": "5XbF3j8mmaQv6fhpH77T8HMn4CNbx1FPRVc6VPqVqbEwKW5dXa1KuLYiK7bEsHccRLCZrWEseaHKS2p8bLTsCMuM",
  "key18": "4WSw2BxpvJX315PQifdpfVh3jb2tLQbSagPpbS8ZDM2KenQrHH7VU3CFfvs8fLcvxCk3xU1kHk8w98eEvGbALKKn",
  "key19": "2QPDcs5qgMS5pW13U1hRDh1M6d2umpyRPtqXACBYBfMYoUNbyNSafCGQNTsXBfW3Uxjr1H3v3SjHTT1G4LsyPemP",
  "key20": "4qLos4uKBzZjZqGcPzqSM2Bteg1d54mhJFVdBCsRXenB1gUgXuejzyvQUWP6BsiKHA5Uznavupo6FZyCMA13zYUr",
  "key21": "5TXGK5diGDBmTPXkq9LnF3dwjJEDGsXrhMbgMC8vAF1XSFMfbV9SmNMx25FFuh16DNDj7rYJfgZsEWUj6sB1Nuc3",
  "key22": "4PxpDM8nM8wS2fM8vw3aTxNhLTyQtah2XkFGQhoZq8g3TMphUxC5dpdcY3hRcxnAEgqHXKEMberdfd3Fvnw2TVST",
  "key23": "SKZDZo5a8WLuyzNvEt8PRRGDaCk6Zvw5844J9DNczLgw55dhfsExWSPRGvgqPPueabzFHqcfegTSKHeShaKRKg9",
  "key24": "33ZxJhXwskAmjCx5KcUfvCn6jTiBpaLH6EYSQWb8YFY7gPF8MBEpvztqW39CFbcqJY5frGcJpcfjhN8YX8FAcipV",
  "key25": "5ijTuM4edgR1H9Yhv5Yj6REQKfZGVJgx75bdm4iQj6Wz68oy72qpSebnnmD1VwzUXzUSNWBajkXVmcmJqY99sAnA",
  "key26": "ScqTog9agbSVNBEZiX9DVJPoPr59N5wUrrJY4v7PdFbarNs8chL8WFsJ9U9VG7bTsch5CD86xvYexzB6SQ9DtVM",
  "key27": "3a1px7ASEKpr8YGH9ByKe5e2C1m4PkHNyrc1iFsQZUsZSjUe4KC2jjb1SSSZix3iRwKPMCEg4DK3Z9YTSb12JMTU",
  "key28": "5eTchf3zYd9JJqMHrPUZ3S3gCVnVJCLiWRbQ7q8fQcF5J3ipQcs1xgL8i1GJ3e1M9ijaEjUpvi2g1J8htbFmwUyL",
  "key29": "4dA1ugTDujgND8wRMDKVDVxdLwLRXp2C2a9oagRAMEtfNkEuvqfETGMgF6r9cti3GiwA3DGp4jWcQQki7fnuxX14",
  "key30": "L3UWddDQt5HZdkthHcTte3Z3QKDaCAxBV9d5H1RjXEHtynYGtSbR44iupDCwzBJv3PW5CeXM4menTwqyhiv5MrV",
  "key31": "4rBKb4MNTWZy4MjiTDsmPFBtrzM8DYMfSJuuF9vLsyU5RD1GJhR2gMWFdY6MXZPmJH9RnrhXoELnaVER35gp8fj3",
  "key32": "5ZjQewRHgZWzkVibHA6RanSWiwxc6e4qtb2WKPZ3fviXaArGr9NT7RHiAtj1boarZ6TcUZBJCKzJVGh1ng2eVRMy",
  "key33": "3rp4HktB93NEd2s4MKmRDwhwReW12s26g51tq3L9hY1H67C4QJtLiMegqmQZ6vfcgk4NLTLiRXvNbqLQsjeoHEVA",
  "key34": "5PWTh8ujAnWcQQ6LanGRmP97kkDPcKbcH4y3k5QQV9YWujUVcfUaVt5PaZUJ3mtSyBgcacRKHVG9PG7ac8GEVPxt",
  "key35": "3xAG6FJCuznccTqZt9b3EUmfvr3s7H5X14QmhUBxaCBVxak4L1URqYQzsrxGH4WsmvHhPz3jMXytSRw4VT6uRsy9",
  "key36": "3y2NeV4yf1fVhmnyKSTTPFeDtBQC5Z1jWV6Zg9mzf81kFw6UsUT7RFmEj1YTBc5NYD1VNr4VcaQJN7FMH9LLhEL",
  "key37": "5bxLvP1ZFAfCSHKnjDWGHxDAKdK6pQMNgdohWMEXfWp7BMdnRjwN6AAwfPwPGUo4TjE4wPb6LAQCHcsmFbB4SRjo",
  "key38": "UeFJYXMFdTGKE2fdUzMFFkZSbLMPb7XSSJxKfJ9dZ4DaUu6GnHSMaXcKdXctLxpLhx7wKZweQWupdYTxxTFARru",
  "key39": "4PZd1apRhULHropihn9zqmJnSzkxYSzWBXhAnvrgcQqr1QzR4u1VAc2V65ZYYJL9M1UwWzSFUacxnC35ufzHB5e6",
  "key40": "2tsxscncMDLQQvUAewjAFWFJkBb1mRrnKP2q9rfmWvm12Ypeyr3pJnf7NHXDk5toNGDvGNoEvbCsm1xpaLYDUew8",
  "key41": "vXa5uqUmyeSpkusu5v2RjeWKcHnjqdpYupLLgr6gpPz46gMvXfbPmegQxzeEhwLs9nFUDGWfgMzBUEJV8TN7s64",
  "key42": "MH5ztTchXr1td8P6jYQzM7kS8YddxmXwoCrzaGoN1z7NKWedabWFVDtehbRfMNK6iDNrwoJpKXkBnUouJtURrSv",
  "key43": "3gYif2CUfnmpL9yQSgTaQoMG6P3vxuECZ45u3EKYsfCZCxUbaSjxZ8JDnuKgDrgzmjMuJLrWURPfXJF8YJRCeGow",
  "key44": "4PpT5BB9Rcjhf8SVY43QWeeuNZnxEEWEGihunqxk2xU1HMbe1Me4CtGGoJzAyqJxbhfZ1nAczgAbTvrJPK7yvbRx",
  "key45": "5viwUMrZH2yZeSTBtAaHFnJQgnU9YttPeFcQNv5LnNdmpdXWdS5rDvSs52y4jR8XipuUomXXMqXX5pJV4UNvuPRU",
  "key46": "5rtjz8rNqx46A7De96QhVg7GNZzQq6Ae3Hg3MjqZESrppR36f2mA2SDySz2RRTUbSip524x3T95sUXSo1Uxs17DC",
  "key47": "26grCUodXmEhAH2cXEtU4hRy41Hf1tJzctRvWGbBaQEpvTwkFsU7MxX6G3nzbPGe2PAG6y7iL4ek59XHWGhVSXQ3"
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
