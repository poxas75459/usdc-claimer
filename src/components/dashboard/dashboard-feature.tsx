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
    "2J45pSqg9XsVuZP9pzWf7zvbbSKnwA3h6up546azb2Z8FHrHxE29nzfv9yaASocGaJgtN9xMWagsQdcLZxCJd435"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ZNVDrLkkdpe8Fyv9PYgkjZ8mH12w1tZtgavqxpJz7tx64ZhRHqeam831mZntNMdBwjDdebeWbdQ9BXQaKHTuar",
  "key1": "22toMYxr2FnJQbwFddehbG9vcZ9WLj9nvxhpqB4rdh6rjLq9n9WqGCgD9tJ6b95xujDhPxJiBdgwXBXD46ows7PL",
  "key2": "2v2mxJnadmyirTN1yTHknzX6EbCZLxQ23FhYYC3eaHm6u71KCmRDHScF39LLGNnC8MngM8AsmbmKEjaQG5Q7yuqe",
  "key3": "aozsE9Wq3B5m6dVh2Tdqcw3b4CLGR2tAUVGDm6rNAbxixpRWBmTF7M85CnzbakKzj3m4JxCvgzdNbWReLMJHHDj",
  "key4": "3xJnZfhAihzwnJ6CYjSzFryBRuX8xdUiNUW1A57VK4Xv1ZpxPEvfGV3iJqP2Ayt9dk7iGEoxAWQjpQEajkszAD73",
  "key5": "653Zu56MrNtTj2jViQ4zBYBviH5yLsUJw63XW1m4BsV3LRYWAtPikCCAZBAarDGFRv8GTnGW7RjqfcdwyqzuYS9Z",
  "key6": "2wfzMChWRJaPKUQqtqEnPbefGdRcZxdmzbK1yAp2d6yyExw8dtYigecDZAchA66RUybHCSbZhBdVqdrkTcFoKWzw",
  "key7": "4JTcKfaRMGvZghrwTqgy61CLo1op1GXKTTZkPeUiNaUoBwR7hSDkMhuqZ3VPoL9aNK6o8XJUyhBchZXApKvbM3v1",
  "key8": "2JmU9bpKPNwvRJV5auUskc9KiDEQ4CGiBQTnMu46T487vaS13C9tWVMjxi5MeZVbpJsJ3r5AciyjCMDbjr8SdUKU",
  "key9": "3aLsJKssVYdFNZF2kciY85aU7dfg1Bb5vNVHFQfpbY5tbcmAXSVvyykV8zJmWawXo57Y6o9MDBe6MRdhi2rBzjrW",
  "key10": "3UbR78ZpqoEfCdheeX1n35jqjuwzwjKwsSPLhp4GMjd2puw4DmUKXs1MtouqqLqRVLgSxd8TPRwHNF7XKoYeNEk",
  "key11": "3XogXHXUuUmjHCc3a4ZC3EQ9DziE9tdUrySwoha9zrQMaGAzU2GFQHQtKZ68cGeE97Wp3NJzRbyi6XDeRNZiKHaa",
  "key12": "H9PVMvE1LW6A4UKUaBBjVhJjW1S5PHz4czETKRcFw9Te8J8j2wfWPbtjm76Rcm5GCHUkU4YSGmn3bwTPBNeKppF",
  "key13": "2xck4iAz5MyrdaUCLoFZWuCgL9pxfRBD63aVRXcPtDtb1sXzGxY7LQfDeipjmm8XZri6gnnEdzJGky3R62GBmKKb",
  "key14": "2LZNhmqjA1Nd2W1STFEuwbUwH28eGawAxHs2x69oDbdtiDK31hrQmb9PMREcpaj1Zz6GgUDsrC6kebBC2vukRJWt",
  "key15": "4aa3RktgqN55audZS8DHLWFSCNEQAmHa9937xEQHdMUz5fu6HsUG4kEaScvQPhp4G8HAJQ52xsM7u592ZQngXdvQ",
  "key16": "wWCcWAgiE6R7e8zmTQKLfW1s53LLVyLv3WBHpvw6qdLiSdTcECn9MG2NDo8thujdPPg3p9ygAhvsE4dKkJ5CRNf",
  "key17": "2ym9sHCywBCC6Cqw8Wh86brYdFKMFTiXG43ajiewwQRAQ8nvT1Yo5rPnX2vHwg2fDWoqYLZu7GRAd1UHYgmGBPZw",
  "key18": "3x1bvhzsP7W9Nb1fsW1iifr2YJxP54nMfr5VkJELujrmhaoJJ7GhGh79cWeMyY4aaPECaPtKjannJUzrarVmN962",
  "key19": "3KNvLLp2BrbLqHKk1jkDyrVeAUanFaX2JC9n39XjK66XAv93BewAeBzzocWc5qzJsAfCVXQ1Yi1KbViTSZ7MopVR",
  "key20": "pbvVg3TbZj6duxdBPfECZcxTDmVXJ3vZuWEUuWcpwgpFAesdFJ5Bqs3V7UjdPSX4Eh4YUUHgUqzEUWdVybYPMk3",
  "key21": "4PHVy22DQAmB2gbELnGXtN7YR8JFHvJRZbAPyqNQjjtNhY1hMzrL32tMaEfp4zpttPYkgphFjykNdF7Gt2b7bVab",
  "key22": "49bsL9UDVJ4QbRuXSBXRuPcevfUmdz2KH2EdLDD5Hy27tcTtD2jsRr4cecrXYkEKP71KyiFusk4j7UrEGre9z5q6",
  "key23": "22MnPjVPjLtTTqd2PZia7h1yuHSwxAAprGYho8AN3s7ezmdSASx2RFWz2dC1iEMZ6hmQtN8PFHqTfjxtyVpiR8N6",
  "key24": "4N8Sm1bFbcvQZBfJdVHi5q1JkcUGyiQEwsJQnoBUArhdrhSh96Hjvz7TAJnNh2bqzH29vQB7DDP2DFUWLwqrCRJo",
  "key25": "3Xb2pmA3GnQkeqbU5zWxNaR79MmJPcrVjGmRbse8KHp5N8hTLrxQTvqYeaPDceT655PohcG65bsdCijUCefzMtH9",
  "key26": "2zQHMcwyFiyVHj4JZ36YyiU61PdWLJu2ndKcLE2244mRmRDrpxyxyQPPUC6vNFEsu19nmxMf81KyiX1Uz4uBptw8",
  "key27": "4jjo3jJaFhdUy9rfbkwQkrmKVN8CCwmYGpKUrM8beyqQZFjUHyf138puKTqdqt3vDQowWfxPazyd6u9dkuHwbNdz",
  "key28": "3HWuFHZsbYCQkExCvPV4sWh6pfgtEhhABCxmv76U8zuAAJJKqBS3KPL7SSaU8ZLYEomnNjxE27qrHyfYKvpKWx9g",
  "key29": "Rq3Y2CQ5r1i47hepDw9jAYnUTCE1FmRefhJqMoPXYLoHY3qCMA2V2DHBExtif5oTiJGnz3HCJA9fbz7pjhmXkia",
  "key30": "2mjv5PYJ2sTpDzL9x6vaTv8FsyQUBgt49idMyoF922ExHW3e13HAjpV5ujVz3jcD9SSg7QpTFcfE1p41wy4JKnoV",
  "key31": "fLp334aaRvn7MaPqDWr46cx9SC4MXK6VPrB3wXwGyxbaf35VWHLm6BjP7srbwaNQNHEZHeMB59JgkvUfsv2BTBx",
  "key32": "2XGMYzoe7F9ftYH8M1F5r8qCRArmxRHj5jCCZv1RUQXsYwkaev8fR5bzVam8zeJeG9mftYUwQXJLoYtqVx8QEGMU",
  "key33": "3HhEvC7GH1Cs4N9RvEXatT7uChgQoRXBfCne44ncqz5xZpVMXTQSF43LiqnEdgRmm8UxUZP2VbaWg5S2YCo65cB",
  "key34": "4o4KqpcQNkU7Zzk7MoT4JZgt6gdv6uBRoyvMWgoUwHFD9FLC4WyXHuLDWggzMFu3as2EpKeX3Qb42AsLo5jKXmWf",
  "key35": "55G9WTon9mY96pMbL7nkfgv7CYUb7yiEdiC2FzvcH3XAvRrhpMtCpeg6GzgTAqnfkjifsK4spjSp1tSU7YhYemAq",
  "key36": "2PZkLzJts7mAt3Q67HSnytKJkwh5acKJMip1Bjdc6hA9ufB8GW9MgCTjwX5mxQY2btjvMSTe8iH49VX5osFxvpba",
  "key37": "2FJhudfwkZ3KvUbYoJGxCHyfhvqqKjHx1Y4ikPMMhi1T9KjiaSYsrWJ1d6CtTr2gG4sbwA4GeA1JoiQjesuqzXTP",
  "key38": "59EecSjZbeY7bUKgJDdmduKNL2cTLTmeZxtRDAbAp1Gu5jHTmKnMnDtv4GSGod6tNyA4b5Mwb1cWhKfteepWAtR6",
  "key39": "5GzND2nsPYzxnA1eCECnTMNxq154vwu9WVjGc4nXHztsH6GjHZnuydw4FcULBm8U6RSQqaGCdG8yQ9PpnD9SSxbh",
  "key40": "yHezFdqg7VDWWUHStDBi4nuUceSLoFaJBoobKga5f6M7c28KNodEyVZNny31QA7XFAXBXWP82r7Sdm79cUyismd",
  "key41": "2CPTjxoh55pHccZ8gQwP23i4EfjVKpPg2adyAhtXUpcjCru5Y7hKJVt3Y2Sqg1PgmSVnw3CiDbn6Hgv7Ukajbduc",
  "key42": "67LCdT6EZtyUHHSbhpvjyBV1sRN3qB2XUjpNx1kYFUzhCi3ybF6GYj39KKAYiFXxfjHgPoaCW4VZe6TZfZDiuLqp",
  "key43": "2GN4MW2u1P9HB9nuqXi6Qe8RrVZ2TNkeGSW3KQHNyysym8cGzCAtVGmPRWbuwcCTUVDqFmEhxeCBk7pN68gAT1ik",
  "key44": "3hw5DCLHcjKdnAatDHhdn4tcLDxFjNKgXtsnSuc5eqzPz7ytggKv5yyvxxKNnmuCsv7H51oW2TK2QGS3o9gf1GMm",
  "key45": "28GSgka5kEXB1TvR7UrPKtf34mssRsLye1N1JQCzr3CMi4vrHrbmy6k8LRHEbsHqyf4bsmb819pUe2HGNddDGqrZ",
  "key46": "jdH4xfa7JcZgya2EPwdQ4x5J48QbwnkRm6TXKRv3211S5XHWBgjAidixvFZDxivXnYaWinuDfqBfyAEZAJxYYVa"
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
