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
    "4GVoaSmvcXUdsSLqN6mVisuqvmufmjCNF6zSRLuPuzksM3dp2xMzmbMkyiuyat5yoviuWG7EGYoNmrsysNaCpbmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HtZXZk52sALsBroxontpKdiSMmXUEcAbg65nBZkukQNStFjzb62cuD9pa7mGJVtGtacAEYkvZviCSyHNihg4KRh",
  "key1": "2FXP9zYtuxkf4GnV9ktzUwLWRUHs2TgZttnrKMLUtNzdEwGVH97tDQoemFWCMNXq21ypR3VTs6bLcPBw22KmDKWJ",
  "key2": "3emPAGR4K3X5vbam49DM2k9QKZfqLbZKqYUGqqiZFbRBPmnK8h83t9KfPCkKePf6a76DDEmRvcwTbE9haMVcrks1",
  "key3": "b9W43zLwkNcqxfLg1KEkswdnY4xd8SJshPWvsR4dcjca3e9VSkYLq5ZebzMKyjpGbo6RhJXvv3M83nVSnyaQvLg",
  "key4": "SB6wJu1n9Jqr9Qvq4khCPrnwbYVwqmdXXyKbPNuhZtXCdAUKbbCiusjh197kPxSvgTEb6VqwXX2JpkjWyAdymDC",
  "key5": "2Z4rBmS5QdfcfcUGq5Wc1tfHAieCXQMUzjSmP62fs9Wf14xqdrBiZJnDwkuvXoFKr8MfqvBrvXnbyWXrTRbT38oM",
  "key6": "3n1HRJD7MsrsYzB4oUMHeLbY2zeJjMLWKeeb13zehZ2JwUXQL7Bk58LXuz4QH7SNRfy9tjB4MkZjWJtKrzgrtAUh",
  "key7": "XK7TgM1qDpxrekmTZyiwMSmzJuUMFRpHnFN8ncYkqBApQohpS3Wb8d5tsrF43Uj6vSvaHoRTZWCnNvhnMHvx5Um",
  "key8": "3YyMxRhMbQVNU7ajv6zMM3oAi9bkBQxsi9aSUVpZj2W71i3z2WNXEJTX8rVRFEhu3MM5RXG5A2kTWBiPuQt5Cgrx",
  "key9": "2haaVrKwZK5tp8fX9TGXzU19XjVHCX8V1bkcprqvam3nh5KtJkf9ZS9a8Qvk5cX6DTsUJJugHANkvBLTWMGVFu3x",
  "key10": "wsD99UypXbvCjtZTnSQw2RGyGZYhMtuhUw5BM9CsDvXQCpp6zPkxXXRKwmSiwDJr5Y3RtpcdtLwEHrydgRF1Ew4",
  "key11": "52FRT8dJJX8MQkixCaJ4cfKEz1JRGHY36rUyqcqt4kcTwe6Q21JCyU3W6HLJEzmzSmLphSgdCEXVeHtgrNJRr6hN",
  "key12": "2ciRTDYMRD1VYasw4T2M6ee8YcaWxRZemcitGtotXV7WpLnszWpJPrtoH22uijw5snuKw7Gpy7ZCUaduVHY6eNH7",
  "key13": "GLeVUF2wkEnp2pwtu6ic7iGUEPXPeirtFhs1SWwixo8WYmu3K56VDQNnhmfMcQce3Pc3mhZFxnNmhC47rfdiyBN",
  "key14": "2VkDXZUoNr6QKsTvM6YFV7RJyZaE3RxYC3y2xzY1NY9HYh8DV7xyRAM7QFUeY8ZZmYzh4YeKUiRXZRAeJs4geAEB",
  "key15": "3o5tYhCatuNj7Syw6pyHbtgSzHwfym5nU51VMc6VraFyrWdsWTUnZDHKgDGK7zUqbGUSoK1e1aFd83EMRN3aNDwQ",
  "key16": "2rWakerE4CKXedcoXeTGZzuxYE5TruxB22gUA6AuQsEzoxfnevCSFxN4t8LNq1dGJguqHsC6bVfk4y6ZW1NKX9AT",
  "key17": "5vDUSPsi38oFc4iLiJM9kBn6mcR9dEkE4pKbJiV9Gb7XguxpoiPw5KQB1C2BmuTEbKHYwMEVBQUQ3MjweWdZ1qne",
  "key18": "32S2L9QYaKyQbWDtsVaKNd3c9YtfDAUjE1moo9g18LCsJihGo48ruaQCvC1UPg7beGTuNQ8YKUE2jsxmVxWQQx4V",
  "key19": "4z3an38wqTJ17kCRS93Mr5M1epYTrrSxpV8MfoPcrJXZyG7QvfSb7Hj2MzJfkSq2fzWdUYgrt6AzpSCdRqPviGEi",
  "key20": "26cyzEbTHiuYcTVL97huQMREbbxuM5PBEZ8xPXVsLqBvdpMiDkxPKLSeu3qSBYmgKSJ4XdJzPDd5sV2RXqXz9YSN",
  "key21": "3bsXzwmA3F21qDQSLJErhR6o8YYBQ8Tw39Ur4KXmE7WVjm9hDYMoHT4VEXDqfXtMQzA1hGQ9rpG7rYYHEsWReeZe",
  "key22": "3xNhmbz1Po7kdPGF5Eab8EjWQgyrh41X7bwh9y4xAM9kuo85AX8LCJjRb4trGaGTy7WtqEQJyHXrFH5quTm6cU1S",
  "key23": "uVYBdjWkbdFsHz3JeeztCycKwZkjq2tSm1Noijuyi4N3VDAhpDk7166z2LZ7JoeBjz2ihdrtAz1ubWzU6JZTiB6",
  "key24": "4vQMgapU79x72f6fh3rY8HSYKguBXqJ2FfAb3NYRoQvYp3mcZ2qhbke5AcCmYp21b9aSmTFducc1hP79dEDHMUZZ",
  "key25": "4uvG4tK9oMZK5wwVyJ32VuY4arFNPUXpCST1yGeVm8TRZfZfcwZ8TGLRfW3L9Hnrfx46LCtjsdTBwab9Huv2G6uD",
  "key26": "xivfLThAvJJ81TFSaHYpCiMNZ16jDVtbGgCzfJ4X1nCreTNV7yynQU1TSAsJJKJm727CX8N2MMZDazHLwtJ5xJF",
  "key27": "2uxJAYHc8MsbjiXm2oSnCgrgvmX45fCuR6XoiWBBYe2azsP2ZwsUeJWuW93sc1TwrEgAeqQXvNNM947MNVSpoqa",
  "key28": "3bYbWY8tHhDzuPVX5itbEMS2zknrZ9pepupUC4phrEzoZsD7vVwChgi948Vms4m694tihw21e7oizNqqRkE1YsnU",
  "key29": "5RpbVPJosmJGwUp3iSqntdnygNfGCf59jWNwuStwcRSBFP4sRFmarm5RWK738AZGX8s5bsLeXAjkrP5US1khkT7e",
  "key30": "5E3izK2Yuied96gZNQd8boG9yRR87Mtvxk7BThp5JE6qeuafygcVGiAvyaSfGwwWk2hQhdPpk4xbfmPdvhqMMx3L",
  "key31": "3jJpVWLiJarQLtJ1iJ56Tg3g8jj5fKbR7MiRB7jux5wiEghooEUomnrnZTzrxgtG2BwjeMiRbSrZSu3jTShUaWch",
  "key32": "2HpQ5CmdePg1mfZGAJGCKdH38GqQEw8cDoRzhKkbHo6rxmxaPUbdBjtPGgPpbJBthym8xHwcbqV8rxZHKBRaPUcg",
  "key33": "4feqfKsWAkhdhsuSdUxUUVR7AhDF9gfxj5gJsiLQBYr1WSFnWLW15EfCVf817s1FGVqycB4pJ1ytCWs6UeQ3rsCG",
  "key34": "K1R6FkX2fyRAAAUfcoPBZpzQuSCdaeF2qapM4J7BfDhipZDq98hZVWqgkssuqHphP15d7bfzdSW9KYyDbWJQjF1",
  "key35": "5Cw4K8kHVqmmD6KXJBZRaM9ktZqM9fVfQBoGRTUwKE7kDLjTvMmB9PWH86KKp2oMJr5V3MTq97YkS8vURwyJTn35",
  "key36": "K3S7rAvnYbwEotBfiJRAzoAD3fSnNmypd2caQYp8tQ5KPZ151ykbt22c8VYezfm7P7fbCpqMvtmDvbhnfoYabD3",
  "key37": "2YiFY3ES61b7Y5A7bYyc93wimyyZMXiwfPaS13ChpBha7sMme7k7qnt6vtaUezNTbV8hAj5ZT5d1gW7zhGdt8wpJ",
  "key38": "3GN9sfeHXfWCK3LFVePg9dNpExa1HWoz9smGthkYCG5RWA2GAKXvMRq55ZP6yqKs8p8J8yTY4s757CLKUkNsfjLx",
  "key39": "3SbrcAtpGZCKHr2qH1J9BbWkuo8xfuuvgA6QjXHaZm5V6pnc9Vp9f9ZaVHtcooso5AeWvKqx7szYdRqhYGYv4dSr",
  "key40": "2FqQEj2VXbe5rBWnQnfChUeqKRc79B98G7AdTVZvJRMC7EApC26VMyuCaGyHNsiXGn85HMUgv9NnGabfM28FRTmK",
  "key41": "4yifNYMGXWEXX93ymJ4AmAmAizkNCwNCR5NPjqyJW2T4KQgaZPFbxxDDLzx3ayHuU65i6FmFUpYEbwfXEXFoxKyf",
  "key42": "4ofiNs94jNgSqP1JaVeWjFgLxw4RqxKnSUKm5ZQau98rMiD3RjeAiZoxF9YDp8nNCVofw7C1urBKy3fn6SCJQJnK",
  "key43": "62W5JTiWmvSTEuTYq9kYhmJnWfaYNBpHsSxt2KTkVC2QDedrnSgfapWy4pszmJUuDEF1PpD9s21q2FKat2NBGoeF",
  "key44": "5v1i8a4PSmHmwQMSzQx172zvS46gySnZAvU6FghHaJTWgBuugXUs1euZofep56V8CaLfL1P8tGgp2eMkatp6Xz1q",
  "key45": "zJ2244bGac5dhdTpL5WfwcDDDEmNgZRnYAakyKzoeQq71k4zof3fbBgwhvSF6AqXk7wDd1ShizbQY6qbkuAqpco",
  "key46": "5QvT6oA5wYygJWWDNct52QGZejUAoKW8x7i63BRnvBDFj6VWh4NmyUhjmWqfozx5HtZc5GhpPoC57rRqckL92PUF",
  "key47": "45PowCkFfmuUdLz1La5TZcdSUdjV53ijNbrQ41QjT6rtUkdWfBbTPLkqF7BRigUsTSwZsThHEzMfdToYzJPAb3rY",
  "key48": "2c1Ze8Cc5v7xgYzpBTSWwpUzxnEXhmAvDSp9EryLYw1VxRmYZsorXmZeJ7QFXKjQHQDzXe729dFwxSccAcj8SC3b"
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
