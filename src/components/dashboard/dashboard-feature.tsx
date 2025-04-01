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
    "5rUkjBH8gKxtYdS8yw9vMEu5sKTm8pL5tdWkU4b47k3EdearPypkcdhoEVJkSQv4Vt84qVinsgMHuKSuNq1AzTxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5byhpyeKqUJTHfcYAzYqSg1EdTMwiyywVTuvFmBpVZRCp1Wv6KF5ihQg4qGGmK56gQ5J2nS7D6ABngFWH3xVkS51",
  "key1": "2QfAdTiEyw5ye33P3B4thjqivSLz1RvoLC1juhaqtTRHtXGm1DDtqmcLswV27EkjqUcUgB8YoKQN3i79vFYc52rf",
  "key2": "5BPBTGjCrWL7RVBpAC8MbnHKwv9pJbMCRjfV7KZxbbNJUQTqBfjYm7fKNPMvzu5q61upjBvySuPrXSzE4NSPSMQE",
  "key3": "3pQ8wmryMcmaiKBE142L8o1e15u2NaHSqPQbhihKNk7ntq3kKnb6N5v3eBtJPRtK5ZGGEhRnDHaTrdbkggce6dfq",
  "key4": "XcEn4X53Ag4thMwvCkPoT8wmbph6EH3AVNn23LP3QCWL6hcRoqyk95byNTQumhjXcJcq5CxLJwyLBHVUnNxzD2J",
  "key5": "2U2gENZKgSWweoGuScVHXEmuev1eDbquyuWE8wZjGfZYg15xCuesmDke7fD9nAohT4UGtafs1HmDBAkVQkqreh77",
  "key6": "3PW4xR5UU3gg791baMQp3HwUskRBYZTZq4JQz1cnVRmqANSsZUoLY1kCRW7uKLgb4o9fkN2SFigUP92WJBt2qxVe",
  "key7": "5CvyU1NRwwpP3QH8AexsJGUoF4k4nYFgv7K37qCrRrFBgf926KgJwXwhpSyvmGEAAS3ck7uuAi3BmawCyy91yNY8",
  "key8": "2HS3Z1VzLcxcedDiWxmjkpRnrfhCDq9FvRwY1Hwh5moBVPB5eTtnTwfLSUyyc48jmRpJ4QPztjmTBksQ2xDjDaG",
  "key9": "4vZ6W19rKZfWxSetMcVxKuXiLpJYsG4i9ZbYQ6G3yHmXnf2Zc34esn9mUY8G7CvTxL4426bPCjoadnsZmAeWQPU4",
  "key10": "4NhaYbS2hfT9LWB2MHp93nysBaXHquna95i35uEpu7EWthsNA3754THrxb2tMpRq3otexmdDqfvdMtPDWKuMyuv3",
  "key11": "3cSv2RZ7A6jNQqVLFSPFXdAqmiwPXs1zYTc3343zGqbbr27UwjgBzcf4ikYioyf9uSj9F4qeM6kHZK9m5E4cCPzr",
  "key12": "5dtExNzybCbjWCKZpDjCwGxVDke6bioUjPmzMQtT7JLZ9kTtwJXefoRYN8eCRU5kbiuigmMbEHegSMbS495TwWJH",
  "key13": "3ccSgqE19aFWoBzPuFrxSQeCm99qft3pPKQFdxhh5zvPn3U24fooWFGBoVhCLxjDbkhVDFRtsDrGCpP1QeLkJQiG",
  "key14": "3suJyVTMktUA74vZ3Z3NYkTXX1WSojuAbPLPGwd7C5wmzHYwBPfAdM1U34V9LwueBKBLWf8gFNN4kVv3ZTVjGtHh",
  "key15": "38tXZnD2cDp1DngYbGkHMXgZ8mHoPeCACiCz8PWLaZh3Ak4gM8mvnQoFbM7GEDRMR9zFtpC6n9CkQTneQrDyGCNh",
  "key16": "3AuiQDnrVAn3chkK82a3PWPNzfVJ7hpSit649pEfpEY5gEGtXNfYjKX3XBLPjZTpsB7JmELh5GyoRB7gDk8ZQ6FG",
  "key17": "9WPtvT845ZhptFYznmsQidAZ9iehpVBEjRZnHniuFqDnb67TAngJMMGiTzjk32w2nPMGdQMHSdKVkBKFKg1mBnt",
  "key18": "2wcvBwWNGgMdgZY5o6udexkqdKDS5Wcke16DW2g2J8EEcHiorn8wjk2hKu4RHqVfTG7y8yGjeDpHZeiCjr73iS4v",
  "key19": "3HULnU8AKudQfRQMHYS6BUVTWnLJ5ebgjMq3j7SokPxB7jAzVfUKe7XeWWDZkydkkiBBpZkybedEXPfAvFBjwR6v",
  "key20": "3ZVEf9DdVwpBgqgbsgKTc3ZVAWtfRXoS5MzjT8GvWmLhRQvVZM9Tcn45WV3VZHgYcp8nd4woFThUtNWSwXBU5KiC",
  "key21": "4GhKeDMfxTaM6A3rkpLYR1PTYj8s169SsAwVW4AuLcoSkQ4CUhSciboQirJTnKyUM9echybmD3B1SPXpoD5hNUrz",
  "key22": "3BKMGcYefPnzgfGsNXZeF4kKGz5Tti8jbVhZMrNXsaPeNmhpRDDS3tBcNtH1RdftyTRHGRnKKP6X5BFoxEucJe3x",
  "key23": "2BHBbH9TjWxGZYWbWyyhxJbT3WXmcrv2VLb7q8W778Gq7u5f5z3rLmwKR245n2tqa11EAkJim1pzNm4snheqzBPU",
  "key24": "4B4ZFvi91hqm3mRkNZjTZKeZNr9SQcuvvSmQD88doknaVqvfeb8f16LmTLTYkQUAgtXETi2fUtyU5fvSkgnM2TPi",
  "key25": "4qJmv4FHthCQabDkqNYecLZoMmS29ftgYxinMyDzv42LHy9kLyPA6PtRSfQzGs2FiGCqTfvTUMFtXiXRVRfxs9XR",
  "key26": "5yMC9sTxHLFBzQU6UnBmY6gsPEM1wyhfabcv6ap1Sw7pWYhNWMUvrihzR83fZHpcybYWV9t48iaJ52jF4YF6q8mT",
  "key27": "4gaRLFg4j32AJpxF3VmiVVRCqM7uaLZMBLnPzqRzwwJHzKRa4jhLjtsdNJd2JTwqmwn4CHwZtYQE2tooqDrNJHf3",
  "key28": "2hxLVUpP1Gwkx6SDSA4brg8wfGfuj676aJYM1r8AF2qXVVAxQUtASuiYzheGqkZX4x5FFCZ8Mt5MPNh6qEYhAcgr",
  "key29": "5jn8UTBcFqRnRo1bZfXMJQzxzViKP8Wgv6hesinqfVoDCYnvCJAEvjtX9ZTwpTCoiPBgPxcAfayS8xu4PfNLXjSN",
  "key30": "5sKfEqgxFTy7bDR8ZoyvMjMD4ryEVQtzQeQoBbteCidd9yYPoR1zMqh27TMP3KWyqBbs36dB4MUDgvhLFNgpJiKk",
  "key31": "fSXnsJKi13hXpXc2rj6rFmVLiYaWtHDJq9AXjTPyEwKBe6vU7FY6BNNLF9z6bkYxh58JMCPJn3JdvzBgnwtryRL",
  "key32": "uf8k6ZDqBBCLuFyFV59NXSQWsSoM5pQmQJzu2WHr2sY9KcDfcdKqoHuBjAeembmxJ9BpQ9Xvnmqrduyf2bckR8W",
  "key33": "21QbDHX6ZdrkMBKjqbn3jZFsNQb3tZhxEqhLc2K4bwbiXAMNtsjNgGbKen8w9BesLtEaEazwkFco8BKY7PZicGuj",
  "key34": "219Bdxqm77ZAe71ZznhdWefGU6yVYyuKhezKY5zBf7FSaWL4CDkCPqrP8Mtvy2bactN3naJzMq4YZp3T2DopnjjW",
  "key35": "4Lagbsejt3eLPxz3WA6QZkn34j5M1B9HYe7xcX8t1KVsgCawe7Sxoax51jFvBtR2XbdXH5w32cD5NTAk5mYdjWLT",
  "key36": "4BaBgTL99FPVpepQxbu25MX9gJJ6SyGzyV1XVVpwWsU7zJdmkWe1h2UpZxfqAKChDKRyPTa8N1ngJKdqdsY6VQhh",
  "key37": "4wEcFEq89J6rCWcw4kdZLwAN3eQsW5TkHpw9Fx1quTsR7tPFHesK98qC6oygRKwvHQKafrDTVfNUkJNS2utW6Tik",
  "key38": "4Li7xKRr2um9drp6JHGJcXSur5phXzBWLne3mVBhFtXViWbTHiDeadeHAc2Q8PdrwtDTePYznVihLwcFnkQB9Qbx",
  "key39": "4Vt2bew4HSZ8pSq51nBaucaCBdTspgf9h3ZkCnbdvn1scQNRSusG92REGepSEBmVUM4VR3GedVbKkaNoq8YXbx7V",
  "key40": "4XzdZdTwZ9EqpwbGCNfgsBS3TM5AUFSMW4tk6spivobpxnF56ujZ6zazQZmnU5qjAKevV58WsdzrUnSBSWLTXUja",
  "key41": "4YPekNNXUL7exXCVuhaUmQCNgWgzUD6qpgqHf1QmRyuPbWN3Je7FxtsVZZ2MhLBdJGNA2NHcbETojj3jjctrfRWb",
  "key42": "R1xFFviyD14BoUpxzuMkyAGtGRtfTsHM1seP4wy1yjTr1MU77Duob1xhAgFgynSP1Wbc6gzbeW3R1EpR53C3gRL",
  "key43": "rpxKJSs3outHnpgRQzjTMojZtQGtbGJa99VBstqbGqYsKH21RAVuqURK4EnnkeEgbfURMVLEr8KPBZix3CrcyNX",
  "key44": "2ADBUy7hAwpxyoKWQJZZwgLjiHenT25mPpFjPuTCQXQWRbNVeYKsdW1y1oCiSzDEXcQGurGd1g2JNJhcH9tN3VQ2",
  "key45": "dhNp3eX4SzR2jgE6bdxEqLvFQaySiSV4JpTHV1Ta1UpBiKW1sMXjRbkQ6TAz8jL6mVtGL3pMkPesS2taTovx8uj"
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
