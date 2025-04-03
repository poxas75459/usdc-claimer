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
    "51BZGjM8wst64zGr9NBZQuvQ69AQhHMECtam6JTZiaCczmxUvdKn52ZPdnRwsPm4cVCaTPLkisNK8NeFmfqug4WG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyGwz1qagzvQzKhTWTG4TGLJjc3hLR7MnGHJZ9MjksEDuuibfpCDwuHsCrYrtx8WHruVARvNWyZfZYDrMWDWAqM",
  "key1": "2A8cHeT8WDZvouHp6obP28a5o4iKKnJn8jsfSETUNUDMQ54c5ZwnVQhh3PNWa9XZ4Pb2S4XFc8cuwXEAHoGa28GZ",
  "key2": "BuiaRVR4dhF9tXCrSK3oV84PBnfoyycu5JPptPhUfjVRgaETqLWJJHD9NGXGX1sm8CDQz1A5GQzvocCJzUFcm7b",
  "key3": "fieyAyWXrzvuV7XpCGh3HNKAUAGT1EUgM1Mfkb48EpNjNMga5nLAW8Z6u9cWvAtMd5HwbTj2Cu2uTJgKeMzaRYA",
  "key4": "GgUEgoL4SD7A4i26e36NuRPmjJxWQDAjYbsPnskJ5pb8MwVUkkywyYUSbgyGKGHbH3N2iag2aV2Roh3ymKt2ESW",
  "key5": "kAycoSQ57i4xh5o8y2inL65Rd2dBr2aSzPg1uzTp1CgYSez6tdKnao8krswa9bXy5xbbeFTCb3QYTuDNwQAk3ao",
  "key6": "2xSvLMAeJLt1SJyj1ad8QqsU6rgUd1qMnHpLSGragptZhaNRDwuypCbD8u6Ey5ULkrns1S4SxdJFYQpvE9MJnoRu",
  "key7": "SfUrtSDJP2Rq4o8euGBqDSucX3ABN3PJ51FAmj2mySuaP9CMkeSzB7M8ChDdzreuSunxw9WrczB3TppRtsUXin2",
  "key8": "4Ee8pwoS1pLRwSn1YUda5AEVtTnawopLn3yx8YKjNNAdg4EVKn3BPHekJqzi59uL9uGQMQx7UXqfGURzDYxcrqsw",
  "key9": "jS6jWJiwqB8eZe3R5dnjr9rmaypo6eGLBHS7JKqmWnTkTzx3oYwYane7Tjx8RtutWLYirovccRiPbCHS3NFZyox",
  "key10": "5HrdDfYJ7uDT7rJ6adkyhqWpXLze6umKLjWhvxREThoHZ9UzXVZw2eANSbgdQVCLYUXss4Y6kxzK8GLFvnMq4KKW",
  "key11": "ArDS1vBMJiPDjjNosrVriQbTtsnkhuHbLkBe8FUc1myKA2eMxEA7c3F9X5hSEfBTetDnm8aEd6UgMDhsAYbR6k2",
  "key12": "5snhSEBMMBFuHJ9fFbe2NDDWCfZQXxWQPpHgd41iTnhLKpyGt2SJudMHbhe84R3nau7nPjHDQzHY71YRjgFmsP4m",
  "key13": "3vf5tvdXsXFdVEuLpJAaaHbxc9NyTtnjsHCRTFc8DpktR18NCCqQRkVHevPg9hyNp4AUjvqhd4S6ocBmHEjLosut",
  "key14": "35qz9NLtCJd3QmXHvUag9mP7V2tAmk781dfmbsEdQe28nDwVap2fbLESWrR9C1ectoWftk8832baoQog8L6p4Uz9",
  "key15": "3pa11h23QsNjb8rp5YmLAw4wUYQZhg2YYCQ9qht5WKWWX2DnjHz9kRpHuxr5k7F69UB3Bj1Wccf33DLMAB1TKxsH",
  "key16": "3K2uca27KFuwYMV4KgxHpJDcEqGLXGJW4AWRYGySirFFN5pgC41XF7scK4SWU7iuQjeqs1LfoF2xrkjtnuavekdh",
  "key17": "3Pze9dGwGv4xELXanX3z96gCcYuuaXtTKYxq4A17xgXeSgzBkVzg8javPkJLy28MX4oYpbR2D3GB6LjPUv1ELmeK",
  "key18": "UkPYY5J6ATzjQvpBhFDY8WV6KNoLz1tCRbr3j2g9R8CrM5VV4RjcRqTEPxhPqXDGtHt7h3yUfYTdzmmnJDK3Xd6",
  "key19": "3DjY1XBCiDvq5iu7dCngRqaQquN3XhuZ3HdqUGLCzCMdBeKiR5maofQhuEb8qKZ9R2RmXEcWejoM6HR44AgWLxmh",
  "key20": "h3T68B8rpPSGz336YZzVo2fvENwanhpC4VQb3aAwRu4UDuv1aSJejbvajE6EkuDn1ymbQ5C39PUWvDj8tnKwice",
  "key21": "PBThw4cywLA5EaH8ntHwfb3Rmg1Szj347EGDjM18nUnJ8YEAMuFsjzLmggxbNdfPq1qcG5NTsbz2AFmb4pfGuxL",
  "key22": "3oH3y5NDY8c7GDD9gumvBCD8fLovk8HUy57neRCfCVnwaqnYt2e2nZayNyHbxDLRVBX4XJi6MGEDYJGyR9CL6nWB",
  "key23": "3jKpZgaZ93XJniE5MTQkNwstF1f1wTq6Gtkmt7YaszeM1EvzRaRJK1qZTaA85KWoDwiLHdRCBGF5DtAFhM8Trotu",
  "key24": "uQLKx4HjGpqkq3UknxhP7HzncBnLwX6gtj65GXHbJhBJGkXEAE3E6yh3tkVo9fchC3VNMEdEVnJRLZFq38EBvX8",
  "key25": "2SVw4f1PbNqsNL2Nc8Z1oZPJqEKFCPQt2YKpBWK618gU2D2x5pP6NLdmvpQSJetdhjVw1fqxFBT24XG5kbd22xph",
  "key26": "4f1TqMkZKAMjbkMXoARC5qTNzTgZM4yYDZYUntesntJxKhJRwNbQN9xadxWArXoVZpEbputRBcWLNPwJHRmRqaxM",
  "key27": "4D37GTjsg4YgcMLZ4Ff8K7PAXCKG8e8xgBuTVyoESnwcax2PdjfJm6Shp1Li5Zput9w2sVUpLF2ppdn6RH7sPSUo",
  "key28": "5f7CLdZu44v7qJsbo2qGqmD1BQDUkB5g4UKivu7UhXP1VrZSWWPnzGXSGceESzxZYKjq4ck7HThC6XnzLPTdPu9P",
  "key29": "5W4FVCBbW8KrbvqHesEz6x6Ynd4N6Y3EjgMNCCE31vfapv4Ar71PPow6ZpudMGCoEfXojRq8eE2ADqEkPa4B7j2i",
  "key30": "3EYakWkn8aXADbCeTZZ9XxbMzVTphBDhrBQETq83eWhhcdz92icEZ1thmtU82i7W3V9QqBpTtC2CaeF7qRJ7syP6",
  "key31": "3csiNuPVY1GRPkK7hL2z8asKswCUpChhNHnb3QujR4ax1boSy3irvhzokJ7FEYRiW1XhC4RU4BAcmGgjFfzNSJR6",
  "key32": "3ET9PYvJcNsRUMxzuZKny9ABtSTJQjCxDntXeaW5czas4GpUgxfSJB7CkYc2ea4YhWF4tHF7kqbG6Gv82R34sEGr",
  "key33": "4MDdVs77BgyJFNxRudtfZ1HLB6yZ3Lq2aiBAK6GGb2pXbNHeReMG3oQBVPuauc1C2GKqdLXi1fbndvdYgG6FYrJC",
  "key34": "4Zesb3RsmupPtfKv8NpFBhkJHP28BvjxtRfLiAzxYBH4Xo7DGWzRR8SkNbbbvtYGNvKNkjBkX49138qtbgSdQ6qP",
  "key35": "4eNPqgyvKPzMikZmvfySstcBiLWLegkwgC9mBfzXzNFie33ZXjBUZBvHT81H4JJquQesic7eiprPPyfHgpa1VN5s",
  "key36": "86twcxEGhzBYvj1R6xmBj4kFza7oJB1gpZnLgn1VFQpXB5auHsFMMqe6GrsmmVeHM83rmgTQjGR3rTioTh81v1D",
  "key37": "3Tgzo6AwBnTWAThbQAvXKox81BjPdwXqmy4GGbFox8VvtcitnyqVpNr3dAGnpG6fhuzrXM9QxiJXmJWpowtLfb5H",
  "key38": "4Wvpt29SjCbmUL571XUr1Nv1MZSmHocmj2j5E3zUFyxNHuGz1YqGePBEDD92tD4n12DanvGiAYFyQrBNYXcoGsuR",
  "key39": "43koaVRfqViSZgbmUjzwJ5GiivwT6QYwNMQNk5B2nKagkuZ1j8Urh3qmHBoPoVGb9qvAmTg18c5oQwwNhhQgGBDM"
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
