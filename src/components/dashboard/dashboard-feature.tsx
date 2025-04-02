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
    "4jj8P11qeJoMqFQG87ni3WVg8nU1i9jHGWv1A1CRANfNS6SsxHg8PDMLeT5ygq62dCCyihSnMoA3DN5gBAGLiKBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVeeTFAr2q9HRXNwopQzGKEvdcaARxjkhR7Ujs6mf9U1MVQnFRvep2uLDtq8fBHC95TC2ULmcFvZLBqZQjzcevn",
  "key1": "5SeY1Fxg14fgEDKk4A64FWgVfaEMcbnAoQ8nmTRnkaNTC3e77teRPzraHr3Rx1t1QjY7M7o89RHdpkXNbmpu8Qfm",
  "key2": "rnaqvHoNKRYTDBMj6j5XgNe9gvSS2G5hKDnSuZKztv4KLdAM6AzQTMD979FQNqK4nBjUvZmMsZLZGfKYGTxbikD",
  "key3": "SaMeQsUsG2Lb8qHQhm1auXMY6jceS74zgY5haPKJwiskmhyTLcuJ4rUXASKrfJiW1cKpZC1AyXFrqpLoaUZFGhP",
  "key4": "4fcHoZCJnvdA112W9g1gpajUHzUxA5afheQz6kcomn59eiRTHUM7gVHH4pR9SfuQ3WfzRgnu2DNrKDZj2wVQwTB6",
  "key5": "3thXEaEwGq7cLyorxuc9rCsEDctWqmEzbRA5ifJw6nL9mFUy5azNVFzA3T8v1tvDjLGZL2t6xhJM6GEN31av5ppN",
  "key6": "2LofWvnLr6CzVYobacyztLBmPSc3CmznT9W4u7jCxZsXmEQSn8tZ1mYfCAutj92HrFeFFmuXYu3yxBaocM7LXnVg",
  "key7": "2cvwQBaekJQz1AxT3brX4RR3F15P5VCSFCwebZ4nhAAu2SWUEjoQjvSH2NFfFdB9mjK79j3qRtXRrmx8aZqCNFec",
  "key8": "4fbVhkzcKYRDvEdxLqR3qhTqW8b3HpKwB7b6iWEKe4236dShGTELpN3QzFxNc2Ccx7fFbcr5EnP1EMGWx9Pd7Zuf",
  "key9": "QoBy6ydfHpn6zLm661hpqejFQxrfwM7MsgfPijZ6oBvxZFb1Aimu2nxfEfyZsBEbcUnvcvMPQx8bW94zZg3Rf4j",
  "key10": "5KPNrH5St2v1XePqZcXBGWGC3Bg73GMPkBfCuB4bQ1rS49msu1efF1QUFu6Bzy5cFvLiwbY9p3VxvnSr1NBvyYmJ",
  "key11": "5SnsEZZuKJvPV95qP9EcTQqw3SCcHwStKUCcaGKPMPkSj7WLuordHpZ7zVpQVUeC759Lj6f6wZyxaxGENVF5etR9",
  "key12": "4LN2nbJkZbbK1dGCFwJxkP9zEEtRsoS3SqfWpCvbDZ743vkugouFFNT6rPXoG4n1RqBypTLi83UqTBtmQ1XYVkvQ",
  "key13": "4Jsec9F9Y5NdZBdoCVuLEafEpPEgPsJv8HpHEai9f6u9bZ8M61E3Td4eQSSkm2p54D7646XnxJ25KgouNPF5u6iU",
  "key14": "4w2bzoCfrqT8MirqgjGR5Dq2dtYQ4zYm1zgEbNb1hchuKJ57zQumMeLXQNBFJpMNQUiR2pfrPPKtwFbxHnqRPDLX",
  "key15": "2zQvXiX1yjGHgJEXjRg73cari3P9JyFQxECmX2dknTsKpcSSRF9WiBP4yY2PDpiFASoALjYqHmaJbxmsPR6Jgkr3",
  "key16": "4Uq33vtvSmWgubmNnJT54JB7KUXDQNj7LJ9tcSBNDafpCYH7DXTR2mdVhnZTUjN4CX5kC2Fwo8uYYKPSkf4fZqfS",
  "key17": "3Jz5fgQBYfkpuChFePjvnJcyMqjnJExvEkox54gF8WMdqmdAUZQfXnVeGB3nk2ZrNnEvBFNDS1Y3RGehv9ZZ4wz",
  "key18": "3SYPr4WnUUYZqzkiUjz4Z9tLvrpa8Je9h2ybnygtXqEwaB1SdzYLbSnipcj78KWuf4FCXSpREhrsfVjz2Hjbpd6p",
  "key19": "czMoBGFnrjyEpppKN3suKSULbLSuquFSX9aMeu4TfWPRzQuphFjPhrkh9PWwtf1fDevB2A9MJi7uxX3k1BypcA9",
  "key20": "xfqJU35eERNRVbdd7sN2SiZdpebm6X3u7EKqzagge8RRGAtWjkYqo99ZC2mDfThuYA6UXYMWznGHzzdfWjiDdRx",
  "key21": "5wJGGmtAau2PeqCS4eFxM5Lng5nEWT1H75PWL7BDxdkGT2fzLS46eTqq7xew3futxXWX9FyuQc7jQp2FnziV5RZH",
  "key22": "3X8AZuJKGbox7BXDsNKynDXvmdivCETkhjn9Skch4XrhP7hqDDp9EjKGkfUF5Uzuwu2NUyCapMtCouNPbfaRcMaL",
  "key23": "2vBWzwwELU86gmR27pyUvrry6dZxgF86uzuX3YwQ4Xi43fSA2GHjSZZaL5sh257grWB6oLxp1UfBRvFkd3XBnz8o",
  "key24": "3YZhkKdEH9gRYDKdNELGb5SBBLhBMFgdNaTHDGFNzYkfEvXjCyKbhWShAfhVu2jJHuX9AmVYPkcRBWVxqTTzwsWz",
  "key25": "3ZJuYrpQX1S5RzVTVTo58SkXdBuh4kA2w6dDwJSdCtZkqGQtjkNYnA7ioC5asMRQJVuzNhRLs9JhGkMiSr3eF66J",
  "key26": "44EWePCZEZ6G3qnwEUGrpACcnPhmm3Mo8GS8D4Y7AzfgaZm3ejCDa9tMpsSgtG3qk4E14hx293tbPxjNrs29cALn",
  "key27": "2LJEtCtxiX1ruFiXG3YL1QkB7ii1AEYGdzzmR8SqahCfcihMnbNDFDzkMJvxjYbgDtsJU85deQEkbv9vGJtoZLFp",
  "key28": "w4bGvwEa8UGKfCFQ4aVKkCFZ8JjR9CjPbZa45CtVwwTZEUqsaVqeqE2QgAk9ypYv3fHFHYkAzTMJegoq7a8HAvt",
  "key29": "2UnaH7fjYhVMH6VkYyezZ7vjmNrvSzzk2CXac6zJ38nEFjMCAR7NvsULpGvRL1EMzGHxTS7vfa1DHjLgNZZWHHXQ",
  "key30": "55GjbJXyQuL7zwTYsQHbNooqQvc9HCbPTEEYYXonTCUPTepbCAwaQbjuQhpSVpxqt8wxet9CsZhYE5A4hDMYSUFd",
  "key31": "3TKKKfXAbHaVJyJsLcoKFFEjxMYePAvEBX99DjmrrfqD7tx96xgStuWRe2YLY5eyja4TtAhNENAmaRdJPL5Ka8Tz",
  "key32": "45DPWiBdvx5QcZTHYZaMtLnTRTB1DLGA2XVFEPmmJezo7nHqGFabxmEpzzRs8sid1gwLCYs1wyft6iXaf9Fvwvjc",
  "key33": "5krETzhpaAcnPu3EnvyKG5G4zDzXA7pGxouJNPPrMVnDxWjG7v1NQETmHJTZnhqqC4WjVGrj7pQpJWKtXQefVBXw",
  "key34": "4PUvBjFJ8tkuBsxX1sfQqX89VLYmg7zDvxot6h7Jbuy638wBufZPRSrsmp3VBNYLCiX7ir9K4tvQKt7eMbkHJfG6",
  "key35": "4cv27wvdpCcn2vdmTZ3oSmPzcrjBAK8pTtbnrwn97CXBLJ1vYL6TD355bVQjdCn5oy9XqQ6ypyR3UermbcpjrGEP",
  "key36": "5AwPX2TLeFdhwtiUQ6EDoCVXmL7KiMEV6TBTabfC95vtE52j21xerGhFbf55Z7YNHKtNCRCb4yEru7MJnmRWx511",
  "key37": "4T7LY4JcAzAj9vTbcQr9jjozmUe8LfLGLvwVTLt8PhSzcXq5BjJZD4XDmE9dvyhWBp9WbwQzi2aTb6H5zH5Vf5Cb",
  "key38": "3fFaNvWdfDGjokTWnRZyK6CUGX5GeF622yD31cq4LBHMxyEeQ1EGxD99QBZELig5zD6nPtNLSEMpJft4cRiPGGyT",
  "key39": "2r4MbHF3CuX2iY9q9pvKQ1XuuFLMyxiEzfwwTNuRrDFXW46D4bxPmKivg7gBV3pYfyGUjpAqLkT5EucdXGxawSsZ"
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
