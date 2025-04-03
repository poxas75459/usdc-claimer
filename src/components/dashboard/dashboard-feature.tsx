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
    "5NKo9ZUnxm6aFy3PkhtYtL7KPjfL7U73ib3MDFvDmbJtPVJZcydYZa26XC3gXX5rqW2bXYvBJi4eJMzJJPsDFJxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RHtZppqzuxeVHSK59iRd71FineKBB1t8VhBYQLYckpXHyzv4Sp7pg1DupZkpSASd7i9mxTDjMvTnmc5EPnyLLma",
  "key1": "44ZAXeSYK2bDQhpBVCMMFfMnFFEkRAHMqzmf7gPKSkB74QVqiS5MoQnzA1TrjGpoy3pJZgyju2KcpkEb647EMXkN",
  "key2": "5hWdvwufK2ogWcjeg8p6BvmHPDmEii8onx5TgPNg3PVtWNM5ne8rpRkPxTp7RquQMjDCevdmnPMyjX2uXhEYqMT6",
  "key3": "3p87mq6XrHronqyrXmzh5eedET8wm7xWCgWpRQK1UBEvppXcp3kra4EyfcievTH5zTLn6zkYmcFq6viHnCWAYvuk",
  "key4": "3E5CSekX3RaLpjozhNQ3iutuUiaBHmfXbgqAuMFpXSw2Rade8kHVhUhh4tm7m3cYrDifqA7UtdTG6F49kCRdZwcY",
  "key5": "nwPAyDMJGDPm2CpkJisggcDz9WKUYPy1WVaEnAdyJpFSyfhKNGisnUdv8vbsovy63jmikrsGHKQAiWJvkBgbFdm",
  "key6": "2zu4V6usHFSgykwv8guY5DYNXGbLkzKrUNvJ1iRDP9d3m3W69t6hbKB1Pn9tAXMRLEMKFrtsuMyWMGNzkJ7XH86U",
  "key7": "39WRFAXisxayZPp9HePoNQ9KeMzJfhBAaDjT6Tk6LkmbgiW6Wc1uHE8D6RzGFsAFY23DGW1socHDanxB4cWzGrD2",
  "key8": "3tBgoT1FTXcBBmXzrePHhVuAPEgCFjPC5Hqtjbvzfzs3V6vcwoRDJuSgUyV9S2uQHLRHQ6HsqFhyJ5xots9MnKkk",
  "key9": "s7J7YE6hQ7PPvwmJfo9heVKbVQkUjQZjGMiUTgn9w15RuUnvKHKviURq86EM8EnEaoMfaYSvnVVpyvmpb2AZJc5",
  "key10": "2sHC3wHgaxKhbsvXpURHBGfrAwtoCkJJbhfkgM2LsNirhn5QVpWGe8qNYwsZmadTCFwTyJ7rVxUwtAiae1wKsABG",
  "key11": "647weYfrZEx93qxhRTzDV8kJHcjbnx9rbz6taA11x8ePSYaeMACFeZBdvCaEmGJzssCjx7ph95nUJU53uMU17TD6",
  "key12": "ucrg5u4qenG2NXahneEN28GMeVCxMzea7ct5XSgcDQsQdfy7nmhjaZGCzxboUv8HBi67fG57oC3wVXmH85rRwgC",
  "key13": "2aG2WZEapprRhFFbj4imEm844c9aNMuiQRYSW3jKFjbWWnXtZh31m6JkavaZeCkGDUKBKPVLxJ8Cb3YiTyyusEsb",
  "key14": "5eonRXm1iSeqdm7app58DePTCSZQZYksPe16JTUAcvQR6FKRRWNbX7aZNhukHznGdNicMHnh2e4d96GK73f3y9Bi",
  "key15": "9sQXhmr4su4djF4P5aXhDAkgdVnGCk5NRowAAxpFWxhYzihCn6bQytq6t6otshbBZZvy7uumfLESiwvWrPqKWio",
  "key16": "2HdzhxfgphMxjYnq2J8kQ1735G8PmEMa22CdtyfT3DfiNvJtZQ2yAfCFH97EB8mN3eAU1cezC9ssHEXHsAbRikdp",
  "key17": "65pqbeYmSNuYuUpsdQFBPLG5HBaawnZxsNcGC25khjEE41TZET8sJVdbpN7Fxd7buX7NJC5vg964NfHsj8AwcXUF",
  "key18": "cRoxZ25jVYoJ1frojh13dkV9hx6mjk2BSb9iHgcKpzybjjRxK9VKVMoJP6g9WLVTaQ6ioDdygTzH4piWfUDHzM3",
  "key19": "2ptTPQyBwp9qwf6bPkkDHLLzunQsoHVD41o678jWbofyW3vQ7kGR7WqWDF2ejUgVhQxw6ubEyRmWoFVst4BP3fKq",
  "key20": "3hDxoPZhDgnXkodY6zu4f3fNHwGtEstgsebefmmhr6RhMwnhs4czo1q6spetrJDxv417p4ufaWLmLAnhCsxQkXgK",
  "key21": "3aBU3KWhm3WXvi2ckX5p5oJmPAmi8P4Vn9EXqmCadEjy25ktSWHvQKahQSVQL82hjD1n7Tp6SQjLRcxFT5K4ARci",
  "key22": "498snh2698GL3hYvc8XE2YoPCjyzZ6UzFNsdiKpPfyYkxh44A4RRqVt9NF7Wb66MrW9FwmNZawi92iAg1ySN3ast",
  "key23": "3EJ2HKTQLN84i65NUNv9yM1NmshyP8rrw4GSFqLC61YuLgCdxNvYafqiAEf4yWL6VvFycEyXpzuiWwantFMnjHk4",
  "key24": "2QMbBXgbWi5ZrLpqLxNJoGh9UqfY2n7X7egqE6rmtG4thZut1XZibCNLe6ZsE1ZNbjnVKwxLurTBWSr6xAXhc5fe",
  "key25": "wyipHp6JzDALTaY8DzDGsbCSrNHWqhFnaREa3QjPWNZxjJL9jG8ehWZ7kD91huhwcLpu7rxBUXPZp9E8Yveaew7",
  "key26": "2vxtwBMSEPd4Q7cSQjY4ewtFEkX6Sup3YPmPY9gWUfv1CXLDgkwkyc5YTTRPXZx9cFWdXKR1aGA6nZFtuKvg7Mmp",
  "key27": "3ZrJ76s1WQX8XDnaJfDzVtCXwCF3f5PcmaQxhGsuukUZ6YbR13N4qniRyrRFrqU71C42vJK6gzgSVTJAZeqxfmqa",
  "key28": "W52LEVaSNMyoJw7zih7Fq2Um3u5hd2ztUYqCKTVHHk9nr6Mdd1M4RYgV6P3bdJB3vGuEEixdc38DGvhEVpyWP68",
  "key29": "3wZYJH1vEhkQk5Xdw9yvWDzvtqNmBmLvBCo7wrSU58TkPTyb2AHkKd4dTt8QxubHHMsf9r6CAqqdWvR3tEMNpGzZ",
  "key30": "39AtgrjU3e9rUXkd5M7NFhHzN9NR5K4qKbQkAPYkq3Q5SH4cVvdMwkxHj2kyy5mbv9gRUmCAq1hUddTqfVrp2wiT",
  "key31": "xHFs2qx9aWxhyDdHRgp4ZMcfG9cUba66KUzvcAiRVe2TUp7UFQCpoogcvowpkGxJguaYXSPEkeFrepLKuvg89JR",
  "key32": "2Vzg3zHSHvzcsjrF4uhZQ2DooK6TPewJgBu6yTNY2XspuDiKrFowuH7sGBeaiwurMqYEzfW9i8i2qrYRYTJ7nVpv",
  "key33": "2QbLD7xNBRQJed781FPwNP5VYmULMdHvCuJUstB7iz1kZPU8pahb7HrNqimGVsNUsbduvqVdgcQ5fzYz7SfdHyaZ",
  "key34": "CASj2hcJaw2DKvrAZkEXHeXHTKckgCbWKujrxwvHUecF8L6MGXjfsT549V1oy63VV6rZDFz4MEbcMqUycCEz3wK",
  "key35": "7x8jn3JsasQk4QKpPGvEog4kRPV85BQ3jHGpHT92wAKnGo6aDeocxx98czjNpTaxm6KLaFV3h36FeoGM8ujXeur",
  "key36": "22oXQR9LMd8BeuqF8uAjMy8CLLPrFs7FJUVYE2BLRtiydacCnKxZmkYvz3nPxGqYB2aQpSWmdeDFCiWsBjhZzJrQ",
  "key37": "4vhoue86aUtfJwbtiykChjjXB7aBBokqyy6Cz9EQonbigyWP7gBZsRQ5shWdK9bdjeRwuKikYpUjXVUVSwf34NYG",
  "key38": "4Tv7SkFh5a2M6raT6tdhF2YzERtrHBhcWccdVJ72jdY22y7Mngt9n8pZHKzib5qQVk1D9N2Q5inANFRN7eypLkLm",
  "key39": "3gAmJrzdNvWZjVCWqLp1j2vZPZcYoRPmtBDbYAgYwQZyiJJUou6xahc2kRLSp9sBeApdkkTLCAocrQj5satTz7oU",
  "key40": "2unDCusRZncCZs3y2SSaQC5CpJYtYZoNMCwNs5wB9ASyWMLmeNFJoif7XpsVXg6ayGsp23s5EJkCMuf9EvUqzrSK",
  "key41": "5NhxR1NzGAx4Qh8rw4M8mnUW3FGKawSKNPMVhHziPKXHbBm1o3VuQC9FeWpZ82n9fHMYQhH648R4p9FkndiSKUhe",
  "key42": "e5YaiiK27V9o2YdhktFUUfqohnyvReMzGEBaMsu6LNpigBRzG5CpYpQwCQzTaKnYwhSg1Qn56MyvMrwiUftgZdi",
  "key43": "5mwiWQxvG5aXzLy6wkDmBjboSpGmox8Auocu4ie17fq4G48RGs63R52kyfVKNmqrwA2eiLwG64mby4P734Y9GyJw",
  "key44": "aVExBj56XQjfW88EAXf1KsXByxFmrfSf3k7jX55XAUemRwk8JJrJNbWV8CP9zfmJyurF2bTbn2gL5vd45yaW2R8",
  "key45": "52FFDAtyywgKqDE3HAsfNqqtGhQN347B9dkL2RXDY1rJRmE2RBcSfoPLYzCqDExEJPfoPGCirWL953aaPDsgWV7H",
  "key46": "5rmKRYgiPNxNQWigkuNSLMXrd8TUThGzbjb534Zu1HRvffd9CFqnattS2gWWu9FkU3zVBRZNWY4apZAwrfWbvdbe",
  "key47": "2U5STTRZbaMAZ9RuCe2ztf53ZFnc3zZEiGueR7U2K9AGE3vgzkrkpCWCqufGTcDVirbiuMNjkGpxAD78NcHaGwUu",
  "key48": "4jLGzhpRRjd5Frz713YXqCNf2rbE3k3VoucFHbDoa4t8Y1zePPd2RW4y2vsnUr7rXVXckU4Bw2PERm6JbiXYTRNs",
  "key49": "dk4oK54XP4dVeG81otiFQi5ZXiNKjK9qFFuCm5wzNFkaKSu99AzqyNTz1Fob5XY6N7CLR1PvujwtdUsQMzudiPH"
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
