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
    "5fKcfY4DcDjy8xUMqFJUbQXB4zRaXUpkpAi74UYueSfpoifVDSTvEgLShH8GT3QCYirsQHYM36uUSnPkzKcj7ooM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkV2opeZXNAvk2yzrVq2CRCatPQQfcXyezMhcuHefArWyc4tDC9kpXgCcwUaLsQzvfoJpAxu9ErxSujx2ShbQVH",
  "key1": "3pjUcGPRdbEcFohyquc7KPJbDqKYf8TNpLMonc9vWN681gHdBUXYpuVvn7DJ8DWSe767gCX2rcihqYK6QjbSFHyo",
  "key2": "2rsma8eSSN2zyt1NHvRfpwTvuBQpKwTFD63SZZ9z9Q2XnQHiWNvU7uP2qNxSwsDww4uYcEsGDFwQBHXnqt7fbeq5",
  "key3": "2MMZ2JdSizMicE6YyLqsacJ3hPSyMuuqDWCQ1YFmEQjRz97y3hZRWG3Xh2GDnpH367k9P9ks9CKkMfPGJr1AQKaR",
  "key4": "3UjKDR9VLPq9ErEBqNagva1thaMqLbwSdZX4jfk18P9HR21QLZtGV3EU3WyDzACtC1EkBUu5D9GdMKjgBkuJubua",
  "key5": "4vPN8LoScE22TvSmyViUUq2QRY1FsWrL5Pv56WicTx8k1RskUrTwEvqJG3kENHTxsJAeCfNUJLp6oVFj8J91tLUd",
  "key6": "29vm9rajXkcwbt3o2y8Lf271EdHkT2wfS2o7LmsdLDFCB1PtWtJbeNMLZ9C8qMvzsdu4Do1f2sxvk1xjqFYixYJy",
  "key7": "2CZW5GVC7EFEJ8vsW1d4vYByEUs6dPfDtpDyRkTP9sJoz3zmYN1pemSXj86oJMvW78esLmWxi9x6nSd9Vre2Emup",
  "key8": "5EYYTE2eWvvSxHkKu8rMCeV6RmythvyWqCVwEW8MMRuKewDyXYdW3547ckzLz4W73dk6iSgK2rnDJH8fWiuEBciC",
  "key9": "4GwLqtAdkzDAMiSAivrktQehcXd1iEUEHJTWw7SetoeKmNPdXAWGLqmuXWoF4Mss8qYtgG8kgYdqeDM27PGbRyTp",
  "key10": "2WHzDTFUdnHX4rQQYwk6aw83KbmmA131pQbZMvqx6TbaSEFqbRbGzPfw6AsY9YQAtoFxPyLnzNXayw8k8TimZQJ5",
  "key11": "4tSVKheA956TuWzW9hc49faUJNM6oUBK7PcRZCFBKQ2D7u7TeW5rHy4tL7PhJmdcmsnZJVJgCtBcB1GdjiUaHA4b",
  "key12": "3wh8wiwxFL6FkErGPbL2YNHkmHktyRwq4FahcCYbCwik8EEfPCFxCwdZr571NbVKr82Dkkb64dBBofBinRTiUd7F",
  "key13": "35hNd2FSXcZGDSFxCdAd6nkorkVDY5VAJmekYpAUUZd1UsFHKttYp1pibbB2G6JjtM3dar8Qs6AwNmNgVT8WhAr3",
  "key14": "5F5ap1Syu3jefFdjCFd3VQAY5LqeVv4T6qtBVUyfW9kM76jRCJZRzx5DjRsMRDQHPmybygo6qbb8b4RaAiZiSMry",
  "key15": "5hrBKvKoqx3CkdDav1y4yuEVPaVAjN6q2SMhs1V5eZcMhRtJcxVzagXuuKLMt6YSzRQUgUwoFiSe4wfwzVCpDDhS",
  "key16": "3Lg7xTgjoj77FCguTWzWNC1FXeArsdMwuPFMdTuAgBStx3AErTJ9Li7yJGxQeKgWymvD6pELDiTwqcNfc1v5mboE",
  "key17": "4VTL85u3DyDh7zCbLXyEmVtYx82moSzipoVuMyY5ck9UTRgPFyXPuUHt7Xco4J6LTwnRPZhG3u5iiR7jisv6ha9q",
  "key18": "4JHEP7j6MJmYWfgoKofJeTTz8ENvJDJZMt3s9hRHFzSVcLyzp9R3h1gSJyzNsGHfUaHG8fVqjyhTCGt9jhM8zyq4",
  "key19": "4hw56VQJodmi1ZHjUHvU9zUtrAeJMzQRXn2FV9fnmP7HcVfJnuYCjfJkMEW4qumwj5ybEc1FPjVzAkXX2HKTzhHf",
  "key20": "5gcR4ved9MXprDNfyKSQNkCLF4RrRdWeg6ECVC4rrZmmbuP4ZbHoMYboKe9UNnCEhV5UPW4JBL52T6MxoDyTVAmY",
  "key21": "W7iSXJXweCqHaiL9HTUZqD1umpNStX4YEDpFFqDaS5978GmQ8NrdKhB9xRMEF6pkzcKxoBNYxVyykEHb8HHjdLC",
  "key22": "34UsEnZRTsbKuDsmVwyc85BVScWuzwRDcEaw4WvCsZNqarUGogDfjuHLY3zm9tjV97fub6X5MGLYHG2NaJfpvaBd",
  "key23": "2jU3jZpv6bFSmxszuTPmpb1sBQwzC1KpnouAJpBMD4eziejuoqJ32DqBe66PCxREVfHGnzDFRMxDNLuDYWmk5GL7",
  "key24": "3a5WexTEMw7HweET31xyiecADE2dN3AzVLTEzSBwMznFNQqHiPCe3oXmCbfeNgygMvDXPciPYDahstD8oWbCMbyC",
  "key25": "36qXYdEqG2cr5uXqwKR56yr1JCaGERPNEnQUvPxxWm9r3vSNZigmhXnyTS3NpzxMyQsVETUaUbgT4DQCWNWqcNkv",
  "key26": "mtfLA2Tdmg1nYGbiwBbrsiZpgvznUuuPdxkDxRmDCRCZMLpsB5VHj69GHtZKdBEjqDtRb5nW2Soxvkc9Lak5fSQ",
  "key27": "33kKRPTQoVn9TE82hD548kNwgY5CTVKD6SmAXRs4mFWEbgngVio8A9o5Rics2PS8XadFT5YQDPkpYYogfFxZa2Se",
  "key28": "4vqBCWEx56gTRnCdeUQXPS9sA8qtPteZaMccFX29ghXqqGJnLjn1ceziRqM2ZjY4Dy8jEkHjDh2XShPSMSPhWJB3",
  "key29": "r34p9MTgzYwTnRvVoXW4GGXnaZ9VYpUm3q3WTxEz9EhGbma1QP44C1WfJ6P8UrJsZYDr1B9nhqZVKX1xvcWzw66",
  "key30": "5piMyfDkoP7vrKuUPpJmNXWNjyrjs2YMU2YRgXxrEDmFNsXFuob3iHFku8a4uGWMDTcHvAUUHJZQA2C4FWDSdGy4",
  "key31": "M7aSyWPd7sCotuqEyZiutpbYJRAbYXJGbEcgjcfonqG8xqUak6DQ9SRr1LCsdJtSu87WNCXjwu2AKcS6TEtZjjg",
  "key32": "4SqPkB7icyCXnibbGnWHnbNyHpjRsEZuVkQ14KxW2GtrCzxE4tQ8JdHPim7Ww37Yi2VAu7PvhQz9fbgh6ckQRwpf",
  "key33": "2WLM1fyWTrhszyDZtSfvDsweiw5xCSanJKJsUHyC6JqK7d6ptU5fR8xFxPHJf9qUNkw4opjnMcDg5CXUyo6wV4bD",
  "key34": "5vwPjPdbV6oL3ToKHPChYkqv2zNJwAVRuMUC3kgQL6BU2bJLvfMzV8M6NeJyYex7RqQAMMrr9RBkLAnvCKPdtu4T"
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
