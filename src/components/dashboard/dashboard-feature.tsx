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
    "341HGhG96N1ZyTqYqzjPGFi46YWK1Vruy7EvEQpL5UX9qwC2KgojpJbtU5ay5sLSheEp1XgLCH7mZ3a4thu7vDNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54r5Btygc2rNXq1NMSZy8onCgrzjG4TUbd7vFD46Rwiy5ycoPLwQRHshp514FqzcnFo45cgdGRzCTrtvt31kCt9D",
  "key1": "4xSzxtCNHzbKp2tAEdE9fJzmvFPbDzCEgaszwZJC5FsrVsjsHDm6WsQcheZTiP7LrHc3YEtzLnpSz3q2WTsF9nwS",
  "key2": "3kuKWj71FrkAAJc3a6M8cmjb8LPDGNiNSPZJpQgBt7sH9vdHvpu1qENNZRLsx1zPP3QWugaoCbF1EPHhqfujgTYT",
  "key3": "3DR5meHqufRo9iggJyJctvGwMLx4x3C5vwZMAdopezeKfLq9RtQPTNNHN7EkJpzF73gyPm4sQjvYTPEoqzAEpCcZ",
  "key4": "9hSvUtxxnu5xFT9nuvCML22A5z6YukpjkzeixP2ebwm5DfHBpuqBHr7sz3cgzuNVXWgcJirK44Cj82jhxyDynRn",
  "key5": "2GUgEH5prEqsUU5NYHGHJKzSku6nKVRhkp2qgoQuTsB4HKYiZMU7ECSmXbAqY4mMqrZLDkf8cFAV57PwTv2YpRNC",
  "key6": "3EHePdk3VZVdq8kpqLu5M9U17XRHyLY8mT5Wh5hvZKLSvUdsLw1CyjZDndynb5M23sQNn8qtUQvTpfshQNyVdZkA",
  "key7": "5KtcSPzNi7GqJFCsF3PqUF3A8eEGZoxSPRqXWxutfEYeWm1gthz1trFrtmx3RKL7VHRg7PF6Q6FPbuFUULaDzaV5",
  "key8": "31cW4XA9iQ2N8NukELLRtZ3Nj9uJhHTnPVqxkRuJKwyeynY2nGb6mavxaXfzpJSbn3dwaBMvLvbTLSc1Kp52Qjyk",
  "key9": "2ctGRnWmAu5BAuXp6keyLc1rDNWVDAKHxx5nsDiTAPem79P3NjR1sbEtcytCQY36yPMLA92X2ZWAweSFMZnQQwjQ",
  "key10": "2rwGP4BWAWsFhAThFiUQzVLW6qbFfEwTWgxyyZWs3zQ2x5FGFg37UacHSUyb3p9euSxvrKJW7eHvBA7D43cipjGK",
  "key11": "4xUCrXTS4pWjYDCgTPGYAVYqVN4K2Xx5Lntkev2b88fPo8jf6gzRZZe5ynEu4Sg8hFG2uLNuQFSVSqeSK6RwMNHM",
  "key12": "4xjFLgeqbze23wWzf6FNSMqU5eahF2U7VdwJUvJPhaE3tk8wppHn5rDFMyAL14h3aDnf26UP2uU1BJwowjojcRQ2",
  "key13": "Dp6UHefbbQAGDSH8AtjHLeYTMS2bzeC91BZkxXAQ3B7NkRaDz22JCyD8JHESZ1KXxGWahykorFmnxHqhvNpz2yT",
  "key14": "2eXQh41tBVvDGFCwRi1dsJHrZQAPELoQBUsspBusH3wnYrQe11BP1Eubok64cwzHVZycJLg3QSkRUcw6z4AKo8j4",
  "key15": "5zz51Gn4imr657S1z6xZPKiLFyxQ5okHct3De6rbfJx2HcUiN6Dse1irbdKPSwT2VDSDKdfTRCFPeRj3JBR3iZ51",
  "key16": "2qwZ8Rtr4pjThwef65YSAhwqyuTcMdsUP2XoDRPtUFesy6kcvVowrNtg9bdZx3MWWno2UCYxFiboTxTGJZHaen1m",
  "key17": "2bjmJZXiENnTL3yEr8CaztarEWCMtRsSyrf4QUDQerxCFcSvuuaUyURdLBr7c2VBMBFawobRMFBZDXC8yTjuC7qw",
  "key18": "3sKn6mwxXK8jco1h9J9JPxukvz4dGD2AkMiGdR1D2zVWfk61h1EuG1ZCFEEmyvFu2sUMXQ5fsQnxenVJV393WgL9",
  "key19": "3g9v7J3f2RaZJGzJiW6TJoeg1ntX3uogzjaR36DdX9kpUpVDi5k9uE2Jdu9rwW6d4CLUp6Ep3EDQnS6f5UVgr92G",
  "key20": "5ecRNhRpDjpDm7ihrMdmUp5CrYixdngFFcbiWw5n3iGUJFVBQcDswuKYsfMcWqpRxN32nhZbBoFYo2RWHUeXmcQ4",
  "key21": "3ZDA8fk9XequpSA5uWQZuPM2ayJ3er2diiG1rBVX43LpnQNmatvf9M1mrqdvCtkqna3v4CGhWUpzfECpcgTz2Hpx",
  "key22": "2Hz26CfR17jHvHr2CE9PyE4As2u44972fuPFSLEj74Di8i4JHw7X6mUfPD8UmNq7t41SJVPL5d9SNcg3C6H6QLBZ",
  "key23": "5B3UWCvQSJT18bs72PbqEygUBNXj5KrnsQHMrA7cwCVC2zbH8cVkvTVbuJ1VsM158cfVFhNjCC16Qnfq6sEgLfaG",
  "key24": "3cHqBCAkSc8BwrSL4QBAKhXVrwcbT6yQboBTujPUxBMimjDAMe7UP9b8mWnuSa5vwgz6U9eR9LcMLKY9XKwPvQ5A",
  "key25": "3pMM1RtefxuPWuW1igUQdgm8sRKzKoHwsUpmPAmtjcNqAsAcj8mVJ65jmbBw3MQ372tW5xX9ZbDvR5SsaLgCYQkk",
  "key26": "5V9HDigGVxzfk93Wt9FJBsZzTPbmjTp9VFpb5qxQsFyjbG7aZSwo1s6DqRNwXMewmYE3urY3ynPQaR4TFcmJyhtb",
  "key27": "5v5Y2MpNweXkfKHS3cq842H6R75BAoVhoALn6wh5vWp7i87ezcGFWbuSmeWvRUVE9XDs4EwQUMhqoYYXsyPmJoZj",
  "key28": "4XYHQX1JbsxtZewnLerdc9dyx7WEKttxzgxo2hHfcaSevLMrNXGhpWxTJZj9Qzrnsoc5vse6FBKZKMc6PTBoWHKB",
  "key29": "229GeN7bCNvmTge1Kcqfe2ysYJtxTTJepduQNM82kJrSh8MDDfV11yrPvcS2NfNNqMSSaotxNZDaMzG7cK9jd6Ch",
  "key30": "5ZX7YmYCG6TEKP83E2mhBoDojsEW8fo9f2JWLiRPbnYuQyb4ARruRRHZ1qFHufvu5VJuqdcjtqQdiGQcnRwG3AjB",
  "key31": "5AcF4ZFk2wt61fMXG88485ijCHLUuA5kYGAkBFMPQmi2q5YVaswV1WTrvsgLjWMcUCSHhjcyqtJop55cqYc1aWku",
  "key32": "4czDZBpz9E6xsyt2Q9UNXV57PRnMCXgaALCyNyiiPVGzxeEvpRpCywuSC7tfEXPdwsD4oqVgryL6vRfVQgZPcAna",
  "key33": "5W1pNQzWLVzLuAjCx7yvpRAw5W6unYvxrECcZshf4UwTjatWr9sPL2xXT1bJzKAYkqYc9D9Drx7rshREu6BM9Y6j",
  "key34": "3LpjDkSkwa6DggHYXqtdA5DkRXTy9K6rcmF2rBexZYA7TP2Qf5b5xEkG4hk3p43Sm2cMdXA4HBA3Bz9oWwWXWsgM",
  "key35": "4bi8Q5Ci2ZmtopME4LqWhAcd25a9bJpws4g7A2H8bw7hFeNtNXZ2G8BZh7qnUjd4AkJ4J2mbbrj5XbqAAsHSu2d",
  "key36": "2cwy6wZ8KW64zMS6RY5LsmejLzG27dDvDRNkfatLSPx4panRSCjULC8GeYCWqGMCQ1xkL1KJdUpTTGcNLnodnymT",
  "key37": "473i4J8EMSu6P35cMk5q64wBjberfy6z41MiHNTYL8cEFLB8YUX3x6Wqxpdwuwr3b92izHbCkaQqfdNM8v6zLuvK",
  "key38": "4pwH5QhNxC6T4kzB1EYDP7AmBecLTqwg1LD6whY6sDNiskm745f4eCTTPMZ1nEHPVgPxAJE7eVqSyXDu327bpuuJ",
  "key39": "Cuvs3vukr8rrQBoQYK88BG3eUjtc534ajnp5kM9GFPEK56Qm917ATNcgL7GDU5kc953kBxnvfLYkGd3ik4wmts5",
  "key40": "2NCJ8Cu5dobEbzMv1KvdCv8A1qtSJULmRdTfsGMxoNV27b8VqYNqzgL2bMUKkXJ57XSEzEYNRajJeov4BcEhYaTa",
  "key41": "28sXLy1w769QA4DTgNStbUghJNuXfhYQ5eWfaW1nTZ5LFUagzwvHKijrihxNby2UvsK2ELbWEnvoWdnvAdBZUWMS",
  "key42": "zFpBnqz3VfbB9uXEd61aDnNt7o6yPDWQKuVKs5DxnrxHGrA3Tkj4EuQRDrFfuq9rQGxq9bX5qQZijNWsm96W4uT",
  "key43": "4KWv9MVEL98UdGcfvtKcokNnk7PQ21TWAgt1byWeftdmAGxSYSzLMKxRVrTpBdp8o3C9Vy67EM3bRiR476ihac73",
  "key44": "45tZHRkEF8ZDUU3FtGjfTH2jTN2koC12zR1o6AyhzeVnjRme8f7bVYDuyF1F6zKJRrsLMH9avBkgqvFuzEBGAqHA",
  "key45": "3Ddb9FQaVGRWrDayFXuhggWhFMMrKJ7B3WkjX9rJJYF2jTEX2QZxqB8ddDXCUPET5HzNM7uatBfuKUemzHyYLhtS",
  "key46": "4FbVfMYLqo6CDDbUBxXm9q1xvBPw6Ec2EMyc3XhYdEE9VJ8sc8N6fd1sFrkY4b5WoWH7ZTqRNDMxMhDHn4snVjdY",
  "key47": "5a9fM62Yr1nTu3kfws5vBqibe6Yv5gPVWHAzVeN5kP5bZGjjatrBjYATxkMMCKG8LbmRyKfzrbR1PkuCvtXCRbNh",
  "key48": "ZQGNtPuffU394AbJC1Dm62dU4xqP8Vq1Xm7ax2M92jTPxPvnbvW4RgC9RMZZUY1q475vuAvPqEH4h3fzjtPmgwz"
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
