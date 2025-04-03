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
    "2P4WjGZSV6LKLtywiSLeB2JGMDBaMTzFmci4fx3FtssrfTkp52oJmV3jiwypMUCdUwmnWDwGPmzw4ZN1b4rEzBk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbTZPXPe3qDXf1XEywd6MqvYo5ZrrcHojbPLokDcZHVVWGdRKb9MTeappb5uxsuwBm9mmpGMCPT4vTeaWY5et9r",
  "key1": "4eZzsJfd24MPNSdpeV5e7VYzggB5Bp5TmqvCJFZTJ1vmSLWp79Xz7dXBhNMcNn1RSKhcAA1UW6iqdhftyvPgFHg8",
  "key2": "4h4v3MTFWmxv2JbPzXgCjMPkuT8h3XiSsMx2VX7zTZ2xgG15GCVQF9T4cJkEcH8VycL5V3Se8yvjaR5FvvW8iu8M",
  "key3": "582hMN427UBv64U1fjTs5k13TeWUygXuxzKQpeuqDodoZBXqMCz7SyChchDfAnXFEa7g5MkeT2ckJREDYacKYhVn",
  "key4": "27GLEPEYSHHkG1Ryr46j6C8fQZKKbbwqMPWiLQfdTpvwDF5uG7kcioL6tP64ggSWpnSgq3YXyxQNL889vHVrenUR",
  "key5": "55HuUxgS2yaksmCc55nJx59UMVsJcn2GY2noJwB2z7zDLr4N1cfp65ZDwSRasQBCv99LVkkCsWsyawgNbtcth5YQ",
  "key6": "Zzt3ywq4WFGJCzZuwLvdmNHXkcaNAxWU6uByvQ36c4GB9vii9LNY4orGmN5ep4Vnx6f8LSAnANhwQKP2EifgAJN",
  "key7": "58Xz518EWwXPUxcFQYCnnZoH1QkiJMp6KuHSd15qRs6baLRkqkrhRBFoau6eVzfaKi7xEoHa5yrU81swa86wf6Lu",
  "key8": "2oqXH7MK4Ex3xypNE2KaAtFcE3K2AmEMpR5iAcPmirNMmwpyb6j6NbVuCHXmVRYTjVqWFJMoHN1SRWYbTYQJUAaz",
  "key9": "5UsNGTThD1pP1kfNyzdyYiVtNRtfSa1C1G6LqiNVR322HvzQXNpebAE4gypmpmZDh2URzZkz5pjyiWJKrmRWThh2",
  "key10": "xuNAyjEJsupYLS77718hjL1xb1aQ1aNxc42NTH3HCyqrisz2sHaqEHS6QWsqaF1Lqhr7e6T1J3QoLFd2vDGezWD",
  "key11": "toTQhq1bRMwfUD5NwA8gPtaCqAoKqwBFZVRN8vXbBTHZ8ZotRprtbmVaThwtRzyTwkKXQejdG89EsPR2cEiG75V",
  "key12": "5C9eras6v8bdmv16RLHMbqVxzaRFuvrRWhGsmtbkj96WZsVXMZmwEn4bknnQAdFYos2uoFCn5sQQuywuH5i5zzdC",
  "key13": "2GNMt8YthmRnxyXB5A199BK95QEGkGgxEwNaUKqzCxaP51cfW4UUHvjhQHL9aLWmYAv7sh8F1o6ywGtDFyKP4AxY",
  "key14": "4tHhHDQZGHb8GrRXpUDKwxoEM6LpxLp2JyDEKGUjki6JU9mY53JLXzgdxssPjJtCm1Jk5jX5pXAV2FVdgq3bLAJd",
  "key15": "44MkTGBMXUmPnNbpkEETF4ujpFyf3Wp85MC6MCTPacu7Bj7jUTbY383EzkUsPFDMKeNWsTafcATPRh2Fzw836g6X",
  "key16": "37t4AnsJbd1BHaVqEVPDgreyNTf8x4Y46ppQap1kimYE9Df8xUMYXXXfXViqH7bXypDSU9hqhEsdgjJkA66y6iw3",
  "key17": "3bj2LN16Q16WuiNki4bBeBc3GNfSGV7f6uqx6m4GBgwojgWRNHdZP7CLefi5ahfur7QX2RpU35A2NtVZz7bW2ZPF",
  "key18": "46Qk5PB7qWc43Hb1raHPKDAF3Pqm4aWgwYBeDfXLt26MeRJBBDBwXctLYDuyKhT1NcA1EWspwvuMWcCBFAvJPFEU",
  "key19": "2kSQzmwgyupKWHPbwDMR2DU7rztpa6JyHXWje5Z4tmtYPPEt3CDRFqmW4YEbTFbL36QUVmCLn7G7qma6joLb3Key",
  "key20": "3WP4MrUccJ3EuMdjruBjxKVqdH2UMuqC4AagAZQt9y4dUTyWKzydfBesz5vh3d2EtFAPXLYN76KCwkTH4QcetgUR",
  "key21": "3hPAg3qJDhvHWrRzVboctPV6Cn7vLhBnKuXmhogqpb74UkwoKAKNNY4ZKQSkhaSXgrY82rksdvQxe1duGR9fjXoB",
  "key22": "5jodPkb5vbwStFqkaE9UNZbnkvjYDX33tbwPQmn329YjcLW1kzrvx6js7tDFNFCwWqtnvMApmK62KicKbQKeNiTu",
  "key23": "25hpBdCRmLtcxKtJganr3CW94drPhiGrV1Gy89SaUrWKHjHCCEcjqeDZ6CzVD4hdiYTE2fJdXRsEN6xKVuKPrDxc",
  "key24": "5B1oTZX8mNVTsLbhc6kFzJPGXhs6GznWwhjL27Q9LDwGJfRXBYYjhnA6fEcRBU7gSjSuLpHMq3U44ATtj3q28v7w",
  "key25": "dLGTYv6uSTAx66MHQkXS7WLLBjtJ184wJa244vUcxgxk8F2bfYk36o29Ye8FV1tJLMV3T4crN9uH4ZWsgso8eA6",
  "key26": "5zd9s8SZg1Go11FkeXWyw89FjrvCKf3GBG58KYtw3u1o6quL8eUpYQtrmYvMMEByLSwUdQ8dii22G8kLMYFvRmNX",
  "key27": "3Da355pfu7mf1AZL3ihptxwmUnxyN5rGdX2w1iJ5iRrorb5uFtMcHENgpWunnsw9H9DeQTTNGUWEbPtYbnjKgKNF",
  "key28": "4dr1yejCyvPxmQjhr5cmvenB2J2gzMRXPi4M5g3ChVfq3fQSnXs7Jn5zJGYqonHNzLnfNLthSVrYDMuFvL8Zs7Ef",
  "key29": "aJiVecAza3SyFChZbfnjUbSniHYw9EjT2CN19dBJVffLXuXnRasPUBZPh3ZgcR9FVUuQTL6YNJjDqR3UchnaAQK",
  "key30": "4EgzRf5a1por9CVwBoknJLcd8bZ9jy1ncpUqP5EDbnVpJfV6ZyQCbFvGvxkqngPa1hAQedjTmb6kcaGw75ZbBE2a",
  "key31": "4KfFjoiUaGBZFbksyadi6yN6HasFmHsifWWqKAPv7FBwWgiTWBFSnUCKFB3ZYtT7wC2ShwGi2MbFbQWVzigSHtPk",
  "key32": "weNMAMvNR4MNohffzGMTTtHFZ4ob37mVGpPc5BaSuBSmZL5CqYCaKqnN6pLjqMbG5eSYNxWJayRxNRVNQT6aW8x",
  "key33": "4sAeKAb9QxpejbW4S1kjA5Di9wMADiGgh1ge992zi2uSqWnCFTjMF6bKcgm15jukQ4kgh1KQPKCywJqUGYfCwHhr",
  "key34": "LPKeR8mR1Y77D4uSpxUjgJUdzXakqjLbzNjpjSQkrMtkJSvh2DK47q4XnQ9qZzdsahWAAVMZ7iEn5cHa3iguRJH",
  "key35": "2AfWQFivGnkbDEhiWG2q5qZzG5eYvPj5YBTbk2TYxW4EAjqdoPYrxCXWt4S8MB4XosdDjTg9Qup7A7j9gePr3K2p",
  "key36": "2bwZDsYcqqS9PXd2PJKknFJbseLMVJTsFmbr42DdMQUhyr39rx7fC4oLuiT1qNddVeBEjeHADe2SwEdEMxqksJrW",
  "key37": "seWYCg39DaFnBn71RUU3GWqWHB2rSTT8pWGjmG6QKtfwfpLLNp5RMT72843SPfTNSjQHuWCARPtuMhpe2grCDMy",
  "key38": "3BbgwFXRPm7Mo8PBso1bMxaQictNec3835jPjG3t5i8KxqMzGJ8sR8Ty4jsXnpqwp2CqZs7pApoxAmqk1MNs2X5J",
  "key39": "3zky89WapxenBktYD36gf56ks89A8SkvjAXSjxU1tYcnQG2AoM3L2fm2Ffpep9aksFDfJtNvqSp35mqfToAJvsrQ",
  "key40": "3QtDKy4Fr1qQjBybRgkDV8ZFgy3nB6jsh7X5bLo8XJVYd8pxK9thVF1ahAMG5B2kQqQvjD9YVtUuq3hjeZUk9bby",
  "key41": "3AH9ykseVpzjzyc9df4ktnsNMJz3tcsR5oN3Qak3A9eNedgHJSwqPHKMCB8pWt3ZwByinWvcsnUPkCXbhaSwGsdg",
  "key42": "YzZQdbU8Bg8sJgajctWk4DSsRS9n1oEwVxNHkcPUAnCL4JSfXYGKyTrant44GULnQY8T4YA6ar2zmFz8XAsspXU",
  "key43": "4esoRhZEZ6xb8pPnP1gHzvEic2w276f9ak4CeT1q5zZed3GTeCWqYGq8i3KSQFszq6UT6Cu9eyLKZdg4J3SGA91t",
  "key44": "4XE5qpnWzwroeGQfM8vTTo8cWuQx6G51ECiZkdS2iG6kWinuW1K5CnnegTEDdbwrHbYvtzMf7YqRVCi9wJC7Vbh6",
  "key45": "5Vt5T7oE1MHzgH9A8gnspiRiUMWX2vRyoYRPRoQGFzCsjm7HN9TUziFgW1nN7fPwBA1SW1jZbQcrTFB5sS4eY9vN",
  "key46": "42BmGnZruaHi5Hf44ZXwkhXiCN62p41TS62XAMYXmk1XW8H1vjvSpyL3c2JxgKKhw6hhiZvqzvGUQsAzkxzY2wA5",
  "key47": "BsH3hSQVo4aBuiC3EL1mruhtT4nNAuPWq6Doxc3tQRvEn7z4tcZUbz5KvJRdMxqz4wQF8Mw1w2sqM3GezrqqCEo",
  "key48": "5h6fcgKQDaNnsFsmcM2wiHDUDcqt9NGC7vbTtVBeX1exoWvS5bF2KZ96u1D6MPQn7NMNyLk8bTQM7ZFTRRfvU2hS",
  "key49": "ANLd67LMCm2pnWTVaDFmQZctUV5RVk1h2PAMosNEpCQhGynZe2XCQeLqsUmDJtjGhMPmE1VeDUbknaCPdf62mcC"
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
