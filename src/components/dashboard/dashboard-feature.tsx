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
    "4xQWZ71HZRoAWzJRGKfoooDRXXQifHCRP2Gm6QL6QShmfMfYgf6CfSm9vEZwc3sk9tYG6zpLn8t8YxAhmn9X3RyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ep3e7bJ2SVXS5aAUGqCS1sAxubtBHKnnCjPm8XgV8iZGB2ysB8oxCmU1mZkJ1nFmbNz2UiemKTFFfXK8HTvwS25",
  "key1": "4FWszGFvR3w6Zm223vKxwZEzppMRwUHnBpVpzRFhheJCCVA8vSe2KxMMzrhqGazW5v8jP94oyxhiGQE6gj8w5G2i",
  "key2": "xwyRDWPhohve8qG1L7rDZwFB46Jy1zrf2z7odqoumqVn1nQQ6eMgZhZiqBA2SuucQ5ktMVCu5App5Sf7oQRjHpn",
  "key3": "2cqpjySe1xRYHpGbjR8dFT2ztt7RT2yPwTiUUkvjUhXDNV4WydtsCMafzzoMAJDhzjn6jYsCtqYn6XWqtZQxRh5z",
  "key4": "5BJkSdcH5nEyW2VwxC3G2kkpEhR2jYR9oHjPY992zigcAEPiVjfBRP4qeVj8xyifHebm5peGaQMBKXx5RY33hgDs",
  "key5": "4zn13xq1H3LJwJeik4iTGnQiCWZkjpMMPbGL4sCsNJtpdyvh88XQRyHwsU6qhbGAG1jWRvaVUQ9555JjLSR6tCF3",
  "key6": "34zqAJYZWarBtq8PyrcGoXSa3WuFg3NBoSStYUMGJBxJk2QTLuNFoW7sdkb6rm71d7JxUud4Roq5CCxYP2JVs4xt",
  "key7": "4omMCL4TZP4iUjzXYo7mhF6eKPodRw9eCm9nJfH5u7riEkKBuM9gqFXHXJxWSQgeEKbVfN6kDgjRjdEhksoh5BAU",
  "key8": "5aiqbT6MJLY1NXFa7opbD8oYCwRgPcuEfpgsLLowWr2dGZKUFExL6GiBAJEmpSh9TrFdcDzeY5ASkus7fTBenofM",
  "key9": "J6y2eooSsUybq2jrTLWu1fJzs4jLa29XQvmp1H4sAMubGRDXmwRZjD9oB1zAo3pRQTMQejhkHQ8A4dN7wXqLP65",
  "key10": "29CwKxGotFtLXmSqpYibd9f6LtgQK4o94KQtQY6wGqSJsxKoKYT27yNzHX8hLEzM3rKQMHyVX7bMQ5zPHmfhzTsM",
  "key11": "2TvNNU2vAMYkXUuXAcpyB2DWavh21Xv22WDSoeoKuDjwdFhnCn712etD3pHpeTk4cgh23emmBNFeHroHQR2gjDY9",
  "key12": "2i2wvz7mD2auEccaBraHtyzz7ZvCNvTmKw81eFxz1CQdV3HUYQH8UvUy52nxG1pcGYTViyMsUjeu7p3nhFuwA4TD",
  "key13": "3cVxLnrorftkHgbjRNHppcqZCBGKwc7d4QUvKEy7CJk6UgQ66N1rARMVLQMox8bXTAmYE16pLU9m29RMYJsXVWRL",
  "key14": "64e4Uyyu2ieKFS73TRdDTzd4p5E5kuxjeEonuQgh22cmQZusMKrxxa263Fz8aysiQRKTBFGzA5ft7EKsNtPR6Fqg",
  "key15": "4eEo6wgWeuCaLEjo8Wbo9pEdpnapYqNVX3KzYB8JJPQDnSEJ1deA2s8UDuUL1HJwoxPFNVeheATgsuf34KyG6MXM",
  "key16": "3uKCRWWg91WYX9Z9PejGtEs71QCuXCbBx3npKe28UfAfdkHTSWuheAbTaWvEuBSXiHceXnzwNGp691ZdkM5L9dCX",
  "key17": "5PqcgZuZWW4DhKMpvdB3wkB6aS9ayt7VDaECEVeNBjKPKhBz9ojjCw7Q3SQpQqYanAvhappxBC1X7yTLHJuTyRnf",
  "key18": "38cWYovyTu9ynAhPjKz1GYt32npWDegHuvx2VKLAbuVGRr3Kj7Ac4uMPyPLswHGNCqXhVvdER421MZcBS355ZTzF",
  "key19": "4NC5dwB7oTrLFoNuUqeLVrN2bdKfRcUuSYSA313p6WxjAvdeYucwugsrJZ4bWv9T8FY3GzEyRgwMYXHfgbTiNxzu",
  "key20": "4qS7L1h3m7Wg2NVJnPr8S4Kzb9G5UzrKnFpkCiYA8pAXVbfu8GaCdMDuRN5e2YBjHsNnoK9ZX3qm38Z9nwBRWJCS",
  "key21": "3uhGttReyjAzr69aXJ1z42STeKPt5KJyLuhEqBs62u8ct5gdaYVQY4dLBVbLK9xZFCWb9GM6o3b63dKPrZ7bJfj9",
  "key22": "5gAaE3T2yT6iQteCAvvXd7nqZg67f8rkxTKXkPDDmB5uLVcCYPBRcWgJtAKNYgY2dpRDRj5zZX9gdVjspFpktmes",
  "key23": "56aRnqYnKjiDPzcwNCxJx8jC531qgxXafJyVs6r7pQNF89fK9wudeP1gPs8VMbno4i7TUwiFeCd8mjzRPz5Jrfvk",
  "key24": "3x3Qy6uJQ8ZTrAZs9EGzjq9VEUsqbSu1cCpSum3Eyc1EvYZB7JaHGN5RwigVto8HYUgPndf2emuxptrfrg5X5vMk",
  "key25": "4xdhdNWVsaRVrvguWczuCY9d81jVMK3iLCShSyE7yEfroZPZRH19AX6VAdVXNXin2T7a4jQb2M8jHEBPrZtBjKib",
  "key26": "5HbvR9zsKHkVdKmDpmqUrSmU5wJoke5phUPtJQ716fi6MZ9jtciZMHZEN9dsPhmsV9UyLgrFMFXSWeTomm7dC4KW",
  "key27": "PrHWWs8WhskDfKVFCmtxtmijTTumLunKsRhitrppVkZfn4Haegotpz9xk5gTuYRpcpXQ5p8o835fRmnyVjt23Tq",
  "key28": "5o68HwVxBm4QuphBQywmHhCCVu5A4ejFGHeUtKtkvFjcaC1t6NEYSa654XtqNj4QUd5CeYaRKTCdyKPxwJ6nH1Jh",
  "key29": "bnybx6NnmoQ6La4rsfdFk5k6QMJvvfk7u5m74eRFVWFEzuTjaz6xJd3RZfSMQnEXnHE8DLCjAajvB3NEAKwzQqJ",
  "key30": "3ihfPZaKTc6gCX2qVJpFAoi61ffeLPtcjCKx9vXsdL57gwt8hu7uY1G2LBNRimzZ6DtkGrtAt2QHFwUQV7rhZiih",
  "key31": "C8nCVABpV9pi9M95iiwyVnwi9DL7QT5qF6DSpF4otE7Yr8B38V7BkjoMbo6Jx6tRnEabtRuBM1K5Xrihv3gQuM9",
  "key32": "2eWidBudshvberF21y5F8TvnErA9fsgwuks7nDL5DJoWJSjVao3VhTHGrqfNPub4pds625K8a4pyTDdrECuovWmp",
  "key33": "4JumuoYXtQb59TZmUyFfgX35hyXj5GjzGYtZecK8NjBqtvPjvNT31qens5Y8eb4z5jnwmwjqGCNYB9N8UbeDgshA",
  "key34": "QJtAHAXyzAKkcvfwipHkeen89Ee5pxcqGrt9wv9qHuXXTaqu5SCuPEYjPKC31eQJdYARV6PzX6okLXJMAWaGqgQ",
  "key35": "3hbo9e5eNDbLX2AqVNzfcM35mkNYh3p1Pf4X2uGzu9QU46JGwYsp7VaruvcrPNM7tcqs7XPBueMgfdPxQh5PBbyr",
  "key36": "KuP42ghFUcuef7S16RQ7GBTyCacAKR5A1jUhz2jYQLnx22Ye1bmC1ciCNs57m5vChSevPUhBLD72G755xzJ9wSS",
  "key37": "51UWPrmgAQFphiS6SBpA7tPtcUQZVwJR5bjcG38QLVRBfDS4r5tcScuejc4kxZKPFz19DYrfB1DhPTx3LMFwnPox",
  "key38": "4F2PyEGhfPPKB3T8HHz9Qc4wbruMoCMTRbPaucnw38DWbbfyyUjsgTmsuZmZBK7zRabPskg63Zno6KVQMPwAHgy7",
  "key39": "5jUESZpfpQNod9vWLaexrvx9S56iVKEQ3vXcwr7bn1WbGFFUM5fharMjt94j1DiWc3exo9hRD758rpxogQBWXhRL",
  "key40": "291SYmUrnSj7m3B4yS6JcQ8nBanNb3vU6DqJm9CPF9b4798JSZqufGFLJrE1D5YWTzqmNeaXsTmKMhTUfZmKWYxQ",
  "key41": "mHPdFuwVtQTk9N1xTBVT4qKTLRDbpBPPtpftYHUv6Nqef85oJvTCcDkMCdHftDTqnkFZtu2eoMcn6Cv4pMbXhHG",
  "key42": "2eb6VNLCak5AuwrrdgRiT9EYMdNu8eYJpMKcJzsoFNidtoGT8r61WCM6qxJ6t2uh7PSE7gTV1VBLHP4Pjb7XFpbw",
  "key43": "5YDKDs1buQ1ryWLfShecy6jcftZqLubJvkS1zY6XMCmeTXTTVpNPh6aNoyHVQb1zyDbyqi3vt4io4X9xAgTUy1TJ",
  "key44": "51F8Guc8fkHYo6S611rsdRjPMwc21YmWyPFVY2QDkLVQMa1h2MghEPs95TZHFUa92KSNqxNBe4gG45FByfYteabg",
  "key45": "kxMefF4pdDKYUs7kzvbjiegkZgyTKS7oyVwcKFz2QT1wdkTf6wjQZPXSgYoAw3nHd5GYMJbazvx4Qc4CMpXxjTD",
  "key46": "4vJY4QosSXt3v59QqbZVVcnLQHWhBNXRajW83WHQu99TSndswq46uwCF8fdmBdhCEkW5faX5B6UFzuZ5qVkePLub",
  "key47": "4mJDE7vxGczm3Yn2tPDdY5AtZ2brsqtRL2rmgj4ZAP95LNahaJ8TuqkYHM8eyZyjkAsgHijj3wLpaJ4f1UPju9rr",
  "key48": "4eVPVkdV3PLUD9WorPGZR1WxJupL2g8kRnjdP6hzRSjFz5i2VRCDJepSq7BgYrRVCmSFRh4vgYRDVm9XLmuUoqJq",
  "key49": "3kNR8tEQqjRAizfCWnyFegqVTL7BkSmRMNbrHQAzsTfCW73QkmwL7ez59yU8WG98pZMWsgjaEm7qaccJoETwPRwi"
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
