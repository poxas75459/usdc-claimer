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
    "mVtYgJ6EUUEHBySU21HtpvcpnYa4EZ1ts4jNE4oYM4daLD1XNH4fJEWL781BJMrSkhX1QHt2PHjbwqaS5USYqJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cc5iQppr8eC7fQxTP41cdLePYHk66B5WzFndb2Pf3XPg3sMeFiqUFjM5YyPtrtyL8PVNgQvvuRo1Msrkpy4o2U9",
  "key1": "2Qkvkm5SXwqkP41XaJ8Ck2AvXoxspMskzWq76ZsUZEAkonHXNzmvsofpyGApdutht277Ez8qft89ETddHSmwrG2g",
  "key2": "2peaTN1ECASkfGwUTw6KScxRdhEEKtCwyv83rJqP6K9kWfariQHrnqHQ6pg3t1mTC52MetmWk9BYCZXq2XsKgVDv",
  "key3": "3iVgPNcUoteizv7HXgG48xwkbsdVjnbm98w6chVvMWuGA8AECoZrtppeX3ufQTNQZrZrdjcuEmmvUHKJDdzw8WC",
  "key4": "4ZMPYG2GovsSUdJdQo71FnxbcbZpPApPBQcNaE1V8q39MeZVVbqvginmPyfd2eyN4GCtaA6VCFL2Yyz66nci5nrS",
  "key5": "4xhFHSwNPaouaMKqdjz86UfHbgHnKjfYZqKsRmU8Gi8rWpd2DHk6VdkgHCeEK55EEHHP6pe2mnzEoG77LvuGNWC7",
  "key6": "424tzJeH7PnB6q5NYFn9nHAN5DfB73H1QmYBq54YxX4t7p1aoyJQMGFdxj7DT1YCHTBjWUPu22ERmuRHFSbx5jDq",
  "key7": "vVUADZcK7AZdzC5X1teooanrUtu7155qCUpBZF368CYnAh1uj4gVYX5BnmaLFagtTgT5x8eDnXXxMWsNLcdov2g",
  "key8": "3HUxD6oSYzed1sGGf9LrT4k52PTzqM1mntixgg7RRztQPP4AFPe1nNi9nqcpvFsqSdaAJJeNyWAo4dzmq93GBwkD",
  "key9": "4Smdey45MqTxpYj3gjj9v4VTd8HUBcjeA3ULxTa9hHLJt2JjWy65wwZ8TdtpYAneasuYKvynbpB4YZ7FL13yfie6",
  "key10": "2tZvnMa4nP6TdbZgo1yFX17iGZA54T6oCeqnbdJyffK3MdM81wT87REwiXvpuFUMKCMWj1eKKj1AhyF3xN8GThGd",
  "key11": "3erbbAWUpZ5o5H65FAGrw4Kdk8nqvZXMRxspvntFBLnhWSkGYDnsRetnjXGLGmHPYKP71x9fcJ3tLFwpaYmfxS6d",
  "key12": "2xMH7vWaY35eyH5EHovQYBwJKWV5k2JxR5FN7xvYrZMRVoYxP7GLX4J4aNfkcPXhqJhdtuAEqQxABpJBqAX2GaEL",
  "key13": "5iLkGtk7q4Jk8intGRGcfHhD4LpJ4Dc6PAS11oF2mGdLpfBxSP1fVGp6WwNaavwqRH2XkmHDg27WjM35st28WPsu",
  "key14": "51JU9DoDSyQWqm84MyVnRx23TaUPoQXd75K8PZTWd8n2GubbYxC9pV5ZFD8kroSMC7F1nu27xqz8PLfEoem4WpcP",
  "key15": "3XHuF6s5F8KGMYT3aDp8kRR6K8Ck2Lw7wxLDqHFiJvHuwwoXUYoByV4geWCX9p82sbqDU8DjbDPP85Qwqjb7CgyX",
  "key16": "4BSZ39xiFEeeCfb1PKBjxStxrENo3HLWeJs5RiLHJvbmCeHf8jb2oABEfp9A98vJkgHMoQBbomQQLDCoQWxHJhro",
  "key17": "5T4c2xy8qUDshbSaeWMXuvcz4HEKD35nVPtJD3AzHoo2Q13fqauizxFwPrx6kYWY5E2fnsBZEAF2u4QJj6sxQP68",
  "key18": "2shNAbb2kj62xVnFk2Z3u96rhAF4SGvTmPeSFek4gPn34NTPCKgT8cTsm5HVaJgfk6VcSLq5xdBgEn6Jbwy3vfj2",
  "key19": "5hBLG9fEr8SKebK8L8rqnvgfYwDpmVTvkHwdePWgszAhhHbuAdbSujHshbq6tifCLQrJkcUPePtVGxfNDUezALZ5",
  "key20": "3aAe6e5caXELhKaK6ypaEGGyEdvmP35w46PYtHMLHuE5j8nFQ9A6YoQtfUcfJMFL6cQ31RdxsPRMP29M7ANznQTi",
  "key21": "3TNqCd1hqwKaXjCFMXBLuAx6fhAqkxhdpEW1g5wcnj2HGB1w6535WmUAjGYj4GGFhLUbkRJSyDNZZR7qPYoaFUcE",
  "key22": "3jZiUYvB55irPbAJthusCKPoKYDn7vqs9RPhmqRoAhd3AAGh1xa5uLWP9kgWAeScpjTAggiiqqdQKiikAavhyjKA",
  "key23": "4CLhDL4BkWiZrTKHcPLrLuwBiSqAAxNaf9xxZMqRrKyzCAQjZ78Eh9BgAPTEP9BX3EN3FWuWAhGBakQUFnC3zvrR",
  "key24": "2upg98ypb77SweRc3usVYQFKkHaBFvg5VEv93FUtddxNU2VVqGBLpfwbT63bE6CRSzyxWCxUy98HSxypF1S8b94b",
  "key25": "4iEzoLR6G8ZN6V7J8fSUw2sU2sDQRFb6iNGS4FRP9SZVsyA5m153PUG62vjUERsADivu7N5uRwWMvgZi4T4nFxmM",
  "key26": "2ba9LH3AjHiKWspSjxb8GRqBo7qzo8vmXcYrpwJprzEgGVoMLUZiomo9Bw9cU9rb5t24jmpbHZZNZ85dHoHvZisa",
  "key27": "4edEwRs6otch9bumctwD3tCErvQajTJwno7u4Wbek6r8cqyxin3Cv3MSBEvyJbthamMZrJVMfJaFbai5FJApT3mh",
  "key28": "2g2kq9FbCWvgGpbiPab7yF7DTaH14vVPt6tWLfHcxdKLAk5eZuZewQbFqxNTpgvdrQn3pwD28tvmuGttU5GrBCxB",
  "key29": "5SmdLd2zSvBpFHyhpo7aYfuTiLLSndtijQBs1ebn5tb1gxRGCN7FdFPXrhjaW46iX1NY939yavS3sqErhGd2d13s",
  "key30": "pHQ6UaD2CCkShDVvx83og8srPQRaHQu6fEEedEk74JKPaDQcrMCyh67dJytA9Z5418SXN2bi36DYFjhByB6FgJx",
  "key31": "5Dk2jtBYiwk1xZ3WCrjDDVqAEw41bGtMmLBd1Ff2x5SK3aCfcvuX3e2ZW4XcCf1EsVyYr1THgP4Xuk98NnYh7V8",
  "key32": "2CHJvoyf3qhLCv7WTucSaBfYmzVvtLxDve5XdtdVsRPEWGuUqivFtpppsJpCn2vfSvva7QW3MQwMpx5CZsuCMPF5",
  "key33": "53aVUPmhNAUaNT62mzgPKkXLsaopCxpEcDHViXUtKpCfNPWEoQn8NWvrQrfvLU7vwdRcrvca3Mmns68rSEbGA4e3",
  "key34": "5dyKCzgoSg14Uk4HcyhjJs8s3k4iLUXg22zpVzhavQ3NE6hqoMu2HrbT7fEAqV1eMC76GnxdJY8j49NpeexpqpHt",
  "key35": "322LoBVKCEApHeBwscKcqE6g9oSGQnhEP5wLikBaQnvgePTvjt17fxw1Fdf6QHkz7qSG1nspheFFsWDaW9a2hnUh",
  "key36": "hfWfPHHywaVxQnf6VhbNTAVbiuRRKjP1ggpiMTH6q6Tj5dFic16Yww6xDy27LDXxCZxaAoWeu8pbsjjLW36MyiW",
  "key37": "mKdDSsFzM1zN7tLiZtn2YMgRRBXaspc5PTXLdwuhhEaxZ9CaEPCx4XTGbdLRrZPiSrHZibZkvKM941ecDpdQvCV",
  "key38": "5T8SSUTzYf8hRtLzZpKUJ5YLtCuoLa1SmRqehR41sK663h34cftKYcqWhrKDHzDH9vWXgPP62VMqV36tJLoUWh95",
  "key39": "2RQSEHinbhJCvnXVZxCMma73bLaMHrLRxh7DEVVfBdeMh19JB3SNGGoX7KACYb6yXPDnRg8bomVCc2wC9Ty8TsG6"
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
