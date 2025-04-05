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
    "4Hce3xoQxhhuDzWVPPwb3tc4ZBpevCbpVDqjKp6ufewxc8uNeMQmHdUP1Sr2wQPV9SvAfcyGjCSh1J1Q98ckCWqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FuCrTHnggFrPsTK4s5vyLpVgv8C9WAPnFztaNZXgFYECC6wU51sVJBKcoHqWBjTrowYy9KYp96RHLVm842HvVj",
  "key1": "676thJFZ2CsuDuK2huwKsPhJB9D6rE27gH2HTxp3RzVsTirVztu8pqbbmma1YVAeGFqv3einqSaKpEBBFFjEPmR3",
  "key2": "Zwr5HTxqyb5g9HNQ1NEnEkFNbzyqwL77XWu3ikKdxzFjAuacswmGqgGPYiS4VVYb4eGxPWGrW8zPMprV23hthJR",
  "key3": "4Ri5eWZCqH4eAbMvD84LBsYguCkSFACsobzfwYgviCwGagBmw5WjVY94WdV5mxv9QXDyUFqWBSUxrGrrx39QV5BB",
  "key4": "5Zgh9u4cKH7Wxzd92pQzUHwBLVNvSkSkYnpTPvR6DNw5j29As8bjEAqWVogHWJNZYVZetcPFKWAAUSb6p9GnYJ5b",
  "key5": "2dcwTYwWk2bhMWE6hSc5UT5aE8UsfKqAsx7keiiSmrT5G6hfXtCwKNYiCEThLfQ88cp7A2FNt2snx8eDDZELb2w7",
  "key6": "54nD2ws5cwEfzgG5tHMi4nvue37DKi1zDWEi35wDVZ6yLhMnYVhRsAmnZqqnSGfNxo92XzRDpGP1DBVdQty3dRZ",
  "key7": "4fVrHmYACAgb4BxHwX9H4MmJ2yUUrUsMXE19uFFXWdmKi4wFPhZU3b1t1udcdPaHjknDzpCYpSpDGkvq73rBJipL",
  "key8": "3Rp3yhSmHbjLbooB32KxXK51euZmhU6p8XksEK7qwDALST9FPdhrobhAu3Z3UcKdLmnKJ2c8ov9GkJoP4K7uVK6j",
  "key9": "JXNNGAZaTAyivcL33Kg7GZ35RNjyS1CiJG4ttYt9xATRasv2CTxCXSstrkFHXbtbYMmeh6nBc7sxwbjfK7PrPzz",
  "key10": "4HeYWr61EWz4naTSfoJnMrbfnYSjQ7efRKBJv3r8WU7QRJKZuPrfkrJafS5ELXCmzFsLYJ573aJhfQQ3tC8fYT7M",
  "key11": "4Hi1eL8TxD1jRFxsyQD6Bmddr6LmRk8acyfogxQY1GPtqXW4T1ZJvozdmLrj6GAsovPdw1moMVAh41PFa8htFpNt",
  "key12": "2fGCPMy1KJGiQCzjyL6QE78zWqPtyZj1qPn9A2i2f9xhuVmaVwSTKPVorSwYvqefxHKpQq6Qp1zsDnMJsE42N15h",
  "key13": "2W7FYVYMyYY6LyZyeSYYLn7nmtKNx67eQbXTPiaeR8347JzkHYeQnRPk69nWZpx4ogakJ4EwpgKmA6wzVvAsa6wt",
  "key14": "4i2P94YPqphqVfcwQyP212hV3JP8e2obXfZHNoDPbjpDBquBdmDw9qxvXdqP6LE6snbzCmas45nHQYcBm3x2BV8o",
  "key15": "59YWMECnvMAytWUpUK21ApX1eK2DfDsCvR9ooUfipRUrLrsbunCE8oJwePYYAfDAn7uRFHmJyRGrHY4wdNCgCxAc",
  "key16": "5q5JxdZEVHxavrdfUPH2GrFdryornhJfQoyLoMofa9sbB4UWDDA5kR11T2gvzsrtJqwYgCp6956mc6RjtdtxZym9",
  "key17": "3HpTCCxdXyckvyi1AWvecCibnzuVKqWyZQjv2Aiu8wdUcguz15oKBE1uVYzpYwNo8cZ3bSEBBeP45b9owaQuRMFd",
  "key18": "3DgBninrtHt89ToaL5yLCXDiWX2GdKobeqAAmz7forDy7H2UVmpN9c6akQC7UCvNvBXMFsn3vi9Q9TVCmPx5irUE",
  "key19": "494SseCWJ8SEEjkrRdS18Qk3oaGdoPwD3qKHGTV7p8CrANV7Aj9YBcW74sF1uaymHJrsXEBiViF9PpM4DdaVWy2c",
  "key20": "2NpywcvdsqyxvxChmnMN3sVgmYgCFPWqenCWGmtJg99JH9un2YW1yzi6ThAvNBiibWhfHGUr5EYV7xRTfUPJoa72",
  "key21": "48uYENxUjQMgs9wBv3ipjXoYYkefcvJDKdGyMK2Kpkkq1p5LbKUTfkJZLimWFgFxBCd84T48QWf4imbF9fENQXAT",
  "key22": "5UAveFvBvjmR5zG5SmaSEy3MihWNpS4ztLGougaFR9vJKPt3D9et4HLNe5hY7284mWWNahaLsFDQMxTEZRPKAhLH",
  "key23": "3Ji3V991XBPQg8Z5agZNyPd6Dyi24GWJaMZ7cujLWcV2U9XrUgfkfswyv8HvWR7M4KpMDVhmuBsY5mdePkB7FaFo",
  "key24": "3HhKfL8N6xXcEiWXpN8jTFm8Zgt1VWgFVndULnSqciebUMSzkDZebz2N5QSMGVn57qteE8EyhqzsZsMeiT4rJnwK",
  "key25": "4tpEttN5fX6dhEtDc7kZJMviLqBUAJWUWmfBEbyKHgjTvcDCEXFyBKzaygFTG9hyHr2ppm6543Kuia6UT3iyrubM",
  "key26": "5NbaB21mu2RdQG5Sf4geocEF5AV9DqT9YvDMy11qBjyHLd9vakmQzYD6VteM2eaSEso2y7rxJUmVBXq1bSuUsyxW",
  "key27": "9oopEcPNFybfM6juFUwz7Jv6XcLjhDSuvbvHSoq4hzsxpg3Sv7TdfRFH5ndt6rSk7ZKDHEWnMo42UGEmgNE5Guf",
  "key28": "5htvmY3vX5ZMKRwyd1js3QhEwDr7N8WqGfvCHUZLtsjekvpSqFWx6jCpagbzkcBCkGZnNnZaNPFGyv1sw1k94DKL",
  "key29": "5fThXrp7uGJf6jPZYoqgjGYTKCPWUfLHp5jH31w4reYfWUpgFLzGtzwZ9UfrZ5cgEAdX3CiqBFnN7E9iXTK2BehP",
  "key30": "5KN96QfCD96R1XkThbfYaMUz4GYXxKnTEHAcrS1zcQWJYg1Zaka49mEGvUxAHUYdDBL5tduKvjy2HN8s3R7Kuoot",
  "key31": "5SXKA8PEERoaJFhcm7v3deMMCEcC1mXQmiwRHR7rksCK3WTtfNLb5sn7vDhF64isahULQHnRArcAa5JvZ4W8qu5p",
  "key32": "Zkyp3QdnzpvrisFmE2kFzNPeDPMBQJsgcx6sokXeM5v7NQmk5tstWkQk6UUxTX2S9TJghdmuCPLNdjkiZtZhjre",
  "key33": "4DDTc4wGsGxKuQ9n5PezkQhnjRoReMv1PnexF1xvq2wePoAXFi23WNXUyQKY7P8rGoEgTmiKuyHvdQXG3LeHK2F1",
  "key34": "VtbEZNgKq4dSoCbbTdbC5DDZKQKZsgPaBDMjjL2Eg6gH76Z27zmt6t1jPncvrs2Lh1ZixchVHdKuxSBSpFskmDg",
  "key35": "57eDhsL87ksivQoYRWPfKpDfjFkdDf3PvoCLmw4MEpe3TQsEwgc2Fxzod4gFnw3q9p89asxvDvsUFbok1M2x3u4t",
  "key36": "2uGBJJDsi9RKyzrupuTS7Kbi7dsuE1oXXieWfJJn9nJbFJGXTWg3kc5Pad46vLrLppWnFQHWX9dn7sdhcaimyoh4",
  "key37": "2JgLkpMYYNVEjRSkzP5X93SoZmjanbzn5waWgPqP63k8brYQsRJg7quHwQCLUhgz5zgXYsUwj7J33dweFpVf64nR",
  "key38": "51wFjoXjB4y3bBtH8ZzKEjX7423PeRVwTNRFsSMYqwUkoAvY8cwzXfZAW49MBHJnbEHtC5qJYLKB42EfRg3inyG7",
  "key39": "21gqDmfKJK5ggwJKxVK2EJmja8vuUNh4VZZf15co7bpi4jiJacduKbEuCrrzG8y79QJetehKkN4HrVoLB5588ZkV",
  "key40": "C92iEDxQcihKGg5bTzNyXNBCffKcraPEo7dk4wKmru2PBu38jYCGDBeMCa4Z8RpW3H3LVZYb3yw2xSqRr3EzKaU",
  "key41": "kwZA35tYWB8qXnVtrkYohwyp5cDnDH6GufvjivXkGDtPzxJ9hcMmhNu5NpUrhmJpYWS4SKYBEvwL3TY985zMzp4",
  "key42": "k791vCVkWgjUcHwTdR2eikf9CHgA64ZgD9Jqkzjgw4MKdDy6b3jEorQw2836XXK5T5XFY2UcTLDaL3RGiMULpcE",
  "key43": "zL1t8dNYddHi2DZ8xN6Cx2NgQDXjGZpguU5UJDeY66MMAwprtfBKG1RgnE19NpGRw8KfUXLyk2KfdLM5B1SFcmX"
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
