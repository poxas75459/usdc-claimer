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
    "5sq8pWw6e8KS5NKfRNehQTPZ8z7sXTf4Moj3wQtTiu9VtcbCx5nA7YxiVBLXNjtDvs7HvcwvmeUB9T8kMv92UQbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hNa9kQZrLthW8sx5PYT31qQeVNenUwzw3oZFs8urjVM4ux5VBSjPNX3EMFzZwbtL2ywfT8qwXmGBLh3FsGHfNP",
  "key1": "2cGkbefQfN9mmsJH5gZibXTud9ZdAvJjaLrVxivuYhDWCc72fJE81zx1A1rcHftR21oL4pPAi8iQ6DjvDUpnAm2P",
  "key2": "3c7ePuqp5zuaxZsy2XFAQhLQn8Ji3gyszL2oSMbCAq3JrGjWwE328m5HjUN252ghsbiaZQWUo6LonGkUNGu97mJ5",
  "key3": "4hcYaE5AP6SHt5vQVBHE6b6jPzDKrWwjjwfZzNXZy4fTbXgiQ4vEDL7Qduhtca2STY8bJbBGmHKt26zRQmBMf1Pi",
  "key4": "69nMf6VZdMYUmwMRi3muMxzhQo1LFCMBWTZtXMXQDf4tA1y8S4DDuXdkrNqsh8aNexJ3m9spCg6i7kLnYRWejfV",
  "key5": "3X4q4xEQS8rH25TSfRbZ9yQ5TgAqZ5D6QWyGkcGP6L9Dhgy4MgreZ3U8kj3K4y4vqdtsKzAwdPKtJGNf4Dh2sDjo",
  "key6": "5w3LF9znmKLFa6PifFZAiGonHD8rjw5uB9xpvvNEjg3Qqx1X2JnRZ9VqK7d3ndrz8h2MZimXgYpGhiVowTMvpq1f",
  "key7": "2SnJzzbe4mgKfi5ZbxMRvWgYwqnyG3rNT2ZiHfWMqwRSPgdDMu9FPqdp6rrhbwSH4TfWQUhVJ8CKKaq5ySqPezZz",
  "key8": "3ofvdoBdCtq7p6agVDEdxYgzby8FNKNCQcDt5UyJbD1WQ2JjTBhmmb8JGexz3amcRbznVBfgFSZm4X4rpBVWpkfd",
  "key9": "i4KdQ6SvQFtgDuxE1nSVdqYHyeHFgywny8TKPK3caefxd5VPa4VyeuwsAKa41suQBLQFRyzW3uY5LApuCrC7sNT",
  "key10": "4JP7R2pUGinrwY52mQFQVputbeh7neH7Bs7e4xKR56xjgsJNyT49sTg2WSBrVnkcZ9qxpjB1NpddBo8EeAREwgaw",
  "key11": "3BGM1DFgbKMdfPPDDpJP3iLSc1CxtcJCU5DvThQLdeEnNpXmZcHRnGA9PtCh1xQoyvEARfym5BwiJQAaQhuSxLjd",
  "key12": "34YKnyDGoH9JiaS1MQCCj27y4NfVrZJqzRSrGKnScCs9tdTCWNhmmqCz2Z9sYbWFjfcarNYJ4K1QuyT46Sc8U5CC",
  "key13": "2Rx26XJL1nxGU1E6VhFFznTi6vdjwQNuQgQQUygh3dhHFFRyrAk22ZbqyQ2dFUvpFMsLYXrNPDR7W1VAjeTX7wYN",
  "key14": "2swwjuBCTXrAeQcCNrDZr9dz8NXcKM6CX25PqVGYMCKKSV3cJuYwzhtVFNtD4ndgLisPqdYhyJZMnDFUZWVVNFBp",
  "key15": "53hqiq1d43u9gNEZxwr1KKz7tk2w9xnqxJCSk3SX2pZuQfytAM74EaN8wQovUhKNwLg8zG7T7CmfRQG3S6WEa4YM",
  "key16": "66oTnJH8STafkfMSfvmMqR5PGrfq4zM4rDifiYx9Kvm122Cq2q7JrMbMtwfFg9xpHVZWdKGBuYKiPkQS7gFn5Na7",
  "key17": "46qTx2Apt27dfGaVNQz88525zhbsisukMrbJ4rPpREYbAdGCpmXHkeRdzAxPBv4kZhJ4RxQAf9Ar12QZr5oKrhjh",
  "key18": "DyxYfaQDV92YW19HWHdKKH9pU6jtqdY1u48hqZTfwp44gYWngX7S25PwSHaw3DgiKzJmgQEwVH4SNTWiTYxukuX",
  "key19": "4KWoyA4kBNDH2A1ajQxGSa5ctEmanmTur3ui7AqrZJpW6gVkj7Vo1RHMf6yVgGVGDripSPVEPp1BB1Tew5gtdZMe",
  "key20": "3McVLhF76Ajr92aWR8ywtkSg5EJMbNStrztR7hwNAkLrEmBiC9WvH7QS1yGobPaHhXVeppVkn1Wji2MtcY89VSxT",
  "key21": "4P4sq1tNdBkzGT6GESTMrH1ZZ6SF1ousie8cx3uoqciC8AUGFKk1VTdgXynKBPjaqdWCbUNx18QBxyWFCdxt2s5o",
  "key22": "JCiKGhqPFNBKXvHkmx7tN6Dq9d8Jew2GXbj3ZKT7KLuniL6pGL64o3M7kyf7ns3LakSDVJ8zgS6ifKTGLdUQ8iX",
  "key23": "G6XETKz9SjnYAwUyeQijqYh7hSGJVQLNHbeCrMdVHGL39okfWv59Xt11EVEGFGYbfyvTiQkVzkHXNkgea63h8kq",
  "key24": "33tX112fR9m668egh6Wb4diN9P8aDJCiR29LC9nwDx7hdbpHW6TztbAzqRo58p39zDBdyNEvQQenAsnKqz6stH49",
  "key25": "3CqBtzDgG955wqsd21xtE1UGESYAwcSsWZ9xKeeMt7TCdyfHC2WD9eEd7Qy3bg8q6L7tFSsgetZDW3A9kQnY8ugp",
  "key26": "3Avcer8KTUUHqjwBqMNjELZrikRQZtWfeaEjQ9wUggBHS6pJAjFMfycQYhnNqr6jHxFjhznosDgc1nxuDKo14fZz",
  "key27": "2wm2ByBs5Q9z4HTnJE1nhkJCecvGbSPJbP5Zwy75yEKA4CebJPmJPXpLVdHB2nbNZfy3SFHv2CKLuUHu6fWJQLfv",
  "key28": "3JedD6VH4ebFyAZFMYJmeT4M2zxeVeeYkXGeKcamk2NLhjfaNT73e8VgsFqNEKyd7FDA1C2j8KSLMbXdp3egYAFX",
  "key29": "4uYgoezPbhCrad6ZHyTbdBmyfGHi2juAD8DXYmFrQYAnhBsb6hkxU7jDw4BHoA2baWyn1thW5DCobymAW2drjv8t",
  "key30": "2zCe4PUe5imyy2RX9WLQ7op3MKmuqk4sR3M8AbwTiSqa3ps3DAz8qzuygv8DreqysZXwfbDS8oiTuEpvpn3ufBqs",
  "key31": "584SU5LX7nHz5bEvvbgu9wZUabH3UFZuUq7txK6xJESZMFUw8s6pF2h47hKpueDkunx1X2LhSG3Vh9Mfnww8jMNN",
  "key32": "3BWjcWvXCmEjCYfDsyC2nca3Myq4cYYkSs3eGPPe64vFpFNCLuZgXQF12sfexgybpH731ARGrf8vzFeZBQTpbP7i",
  "key33": "1GR4x1GZ5eZ2U2sCb4z9mkNdPaasBwAKNAux6FoJzy8yNLNjUKSz49xtJ6xy3wGmkBBZwydbtjA73feNGu3JWkK",
  "key34": "3cGJngb93dQHxDHtdUhrMmNyzLkoGEwGYaFKYGBXwLm51Xs9CLnH3mGLuDLfKCibZMJT6TDvGsPNEFpAjQpRqceW",
  "key35": "2aUXU1DgWAR2mxYTrtPdfrrnYwVJQJhFdF7jtGG7iqjYXUZdGYHxc6ZUcjjEjFe95ogP1sKq1LuYG8AmNi61oqJp",
  "key36": "4XzoJ4GebM2o8YUh78tiiWPn1yjmH7iMfyzoBxBRg7PK1QBAM47T5GjdBZkiWSJbYUfeD4KPiXSn7iDhvypbFsqK",
  "key37": "3Rop4eeD8mYjtJx3aMatwjyut25JPGRfwmC7XebscgKyW5MecgW7jQDHk9vrnyh4j3mL2JPjTYj1SxD5zfUKi4jf",
  "key38": "3RrkznozRKYqGxFHZzjYZ6o8J9Yjv6WTMJMZ8tbArnJVAX9FoH237QJXG2Dzi83JMzYB7MiwA37W55jhfcdtTu47",
  "key39": "2s4EohDCY4rH929hhdL3EqMZ1xKfQj5EgbrJCw817AiadERYx1mc5cmS1DXHzNHbe4ZuHCnBqFMQrQecQWr6c6eZ",
  "key40": "5aUSzd3rR5XFAHhjikvyzr1XFPwrrfabWBTAjeCe7iW3KUP2qNVHhm63mdVp9ieUsjpqBUrduyK9cAQaeYp9Dxym",
  "key41": "4UfBK6MA9ZrasvBoX42X32z758YAsANyQeZ9QoDTLv6xnB4UjHF5bwkaRVnKnHKKJ43SB8DPnT8Bsb9cYdt9vEPJ",
  "key42": "34zRL9tQFSN9L7Mr2cyVM5bZEPNnGv6YuN77tbgu2eCpyTYZgS5RstWCVm4La1dhhC5T3nCWSTC411NwywZnTrFg",
  "key43": "38W6KSRD22gJFXxLEsanyFTAtDQxHQjJTDKYR5T4SoWTdggshFnuX9Dw8DEzuzRUZoXeGmRW9Sm725esq7tzoaE",
  "key44": "4xTZuUWxao8tSQVcCwdZfNVoEqXsQHUkLFw9RyckiqyqjsLXjmEJ35G35WVHvzy7SSzP8zMsZvxhqJHQnB8FUsZw",
  "key45": "2qi5wnnomHcPjVsRrCsMroHxp5VKnr6yigDhLeWPpe9mBuieVPx6gzTxjjEPHDLJ5GVv5eMwPG1qQfGi1d7vAYcq",
  "key46": "4ubM6Y1N5i93oZdPk3qNR2pSTTC9CPhFuJzGqH9rZ68cMW8mDEgZfJAZ8gmeFkgQg4yYsiemhfdBqghzQcLeBggi",
  "key47": "5kffyEiJtKMvsEMQYdS8J9bVPqSC5HaxBTJsiGbVrRZJmTfpgaDt1cs5jYD3hC7kZAwPg7ZS3nRdrCp5iafaWVLX",
  "key48": "33GMUFVuqcez2Z4VaKSVfH2hb7kfnd1u7PmkR9cb2eNrAfer4qKqnRaaDZTqmVDFDQjt3o2XzPVuodBYi8G1j6uN",
  "key49": "yHMDQog87HUPHVaiLPxuCVV8G3paP35YQvyE3RNx7jyVg89mip7Q5p76D2frnbMBTJpekm5VGALPLzDTEqWodxD"
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
