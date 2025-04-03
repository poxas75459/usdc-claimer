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
    "3wt5N34CdHs9qALNw3eVxtjbNuHHc8bouie2MgDT19vgZrhTYUCJKLs3TEAEoCQywTUU7cux8iBZKuahMFxUgPP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsfvf6yDcCZYjFuzmrQu3bWCauxvepaQUfRchTP48sN7rsFbv1maY6wY7qXP1ugTqDUh1iH5ENZvW8ssWGLVZHh",
  "key1": "5NGXCKW17vLeWZGmRmXFYbHN5uom3y2sUFHaWgKPv7v6DPvadeEzjZYggW2EUxbYMqK3cxq9PV4xUfPyjHjPmiXx",
  "key2": "5NSCgkp7oMH3SN92RsA7T1eKVqyChXkM66EEeQMruSvoLttrBStz14Wq5K4FHZCwb5uVwxM5yt1T1CwiFGsJJ7ET",
  "key3": "yLHEGx255B278i3c9Yc1iYEXAM6CSWCCZquPmQKatvyKy7ceESMm7KqXn7zcqKDFHH1mWanXvPVt37MaK8HzGcD",
  "key4": "5RtFEk3GdKL9vkEUwjokvyKPnj2DdpgCbz7Qnh5SdeyarZ3WTZriejzqexHwnYNMq88XmtFofDLW7DwvyTr4gvvT",
  "key5": "4BradYkEPMsGiom4LJUwQ7H3aLfTtDjZ5SYsQBFhewHjkqMwYDuzkcsPLXx6WNerM4TVZV7hiACijuTBkVTLRqjP",
  "key6": "2WPtV4LdjJgCFh4sgX2WN7kgFYwWjz3tbwE6CG1B2VSsWgj9o8U52niaaP5Jzr2SrVQhRr3TcPadissaNJVHZrVv",
  "key7": "9CEhAMDcXJ8C2EnKdvbZCoVbrtBWesLoCKCuPbNwXF8sUJnG9wZ5Hx7p2rMz1aDmfKt3Nib7tchLfMvwYdYfqH6",
  "key8": "hVnfaewUks4u8bepNDJiFMcpm563j248T7GbzQbjkrqBAypL7KQ9NAeJsvXkGrUVaP5Xukb28WfcxSKQqyZYZRm",
  "key9": "5Ud76MjCD7wiGFB76WBxLGCM4SPYGNnVboQAshsseD56TThSA8cT6C7qmn4ahzVuS1ubhxzhn9KV5bm2q86XtnSu",
  "key10": "47jY85QFKAzjw8hPWMdXir6Kd7krX6fr8K4XHYgdNsB3Z9j5GLcDE5Vq9BhKdM836NRzgXZJJYXvxShhK5yUg292",
  "key11": "jG539sGpDvPNZvz6nLTo3QoTkWCx3CPV6Dd3F31sPR1C6xXiUArxCniT1byd52XqX2qX6xDL8kJQdRD2dbaDewg",
  "key12": "3itfMLyHjaGzsup4AVXySVvaVyj5ncaqPwrZZMAUiJfMhNNp3QnvbpMqKXFV87izzLpn4rnCKds3b7v9zakzKSYm",
  "key13": "4tZGf5JMPYhdUXcng3YGKEa8SgDN7xnnNr22tHdVeTpQb2DzawE3yQsTy3Jj1zD4jMoy18rJeP7u92bqy5ebXjBw",
  "key14": "41qyrMDMFw1huXEM4yvza7GQjgWa6GpDP26WL7HwogbVFt27VoCY4M9TUMUpWLbSwommBuMNAsYPeY4y2nufJscs",
  "key15": "2wtsfJntWzoyU2pn2kXcEfuoCGY9Fj8NHvePwPPaBzXY9dttrcZcPcy16K7yS4EaP3G3ev9MMZpohJrp2dfY4WHi",
  "key16": "2qZVZT8WbChHo5nhByqR2AYRQQDqFALBG5HcDCdxHNTDx9LrQ3KfFtn1p67uJqhcDyXt2NhnHXG1rPWjcj1tE2Ng",
  "key17": "4a1ChEuwKQTcALoD6hP8CrMp58buaQVCVWHM3dZC9wyLzH2Nu9r4hUDDivXVCKsdVmt8Jkw89FtvecsX5RT9JjRn",
  "key18": "2STwr4SEMaMgy6mkiPPnaPronVgjTHDWDS3yeTuFStmvARhbTap7iWsJCBhpVpLvyjc6Xb3DJqA4KxAPZhaFiVjg",
  "key19": "2uQ4NdJ6V1UTKTLcW9Q2eDaWozDB4uo186tub5cp2wN59V1QeyAezjZB5Ec8G8vVBDc6zEWp8aWgKiLJHouDGLdy",
  "key20": "Hvj1TyrgZqwumKhehVS8FsS6e8mNghrkRJrQWexnzRX4rfhjwLt3RJioG6MyqM3DB4GTLt5hviwhSfSQGdCcv5s",
  "key21": "2pTTHp1x4D1DhEcFGAeFc5ZYzpXg8smbrKQA4Th4d84523dBUn7idCTZWJFLc5wb1UUn3pzBWksn4Pw7Vbi9vzo8",
  "key22": "p81CUmyjSb4V9x3AKuuNr7vCLmcPJvVaGMyAuEXa8mE93pNyi3znsVKEkwCA9Rp8SMAcmvPqkPZGfjZDGdqqqaP",
  "key23": "25LF73ydyFapCyej6swJ6zpiuAxq9KVgcdYh4oN4APvxsgY9QuFrq2neQrE7nF5JUAMVpyqnk17YwX2eGWZ4H4m1",
  "key24": "54awQjJvbByxZNbrCGbqQxHgubWGhVaP7GT4W7vBzbmeVr2nb1AB9JQZbiRmcwbMxCHDaYcJrREAiVPyLbAseFbP",
  "key25": "44qHar2E28y1eMWkoiXyi76fkoxrdtpACRdEkGB6Vzs52QYJm251hGXaQy6QXSQLw5Hsja4yoY5NgNcfCYRoRFp2",
  "key26": "yHU5Xsmjh1hYB1CH9yWWiePUejxpQXuzyNGvt7pjA5GF87LbZTLEADFscL2r3KDkWiDNmruyntR2YSxn48v14hc",
  "key27": "4LJ1YYxDt4vo6rCJre3cPmA3Ytg5T1eBvyPjPbmxuNdhoikidyvG4jQvia6iEWu74WwRMnjfJn3nJ5WZZ3fuPboJ",
  "key28": "3C4hUet1Ezf32nVNAkkkbMEbmXUCw5c6LNL3BW6zhEHay72kEFdwj42KqS2F4hTU36xeJ1xAxGiKeCc1RsfphUgP",
  "key29": "3ZsprUXUt71eYSJjFaPMeG79FFw2R7PLUNpeGEKou5VMrZ1oRUrsWWzX6EdeLYtKtJ7anYnNd3NVnC3GFfWx1ULe",
  "key30": "ray9AAPCWP5fkyXTnh54MLjHdxYsfhNXB8nyA9gv2tDWAEjez6b1ouaqABnGv8TCmeZZNfdHfDr8XVSwaq8qhGN",
  "key31": "5D8r6A5zMsReFrXBABCAzJzchQesnCbniMNZPCuNv5N7a1T6Kb65aDZD6THdvP8zSeHaovCRyUkh3uz8EnunnVhC",
  "key32": "4PmvmApULaYHWL1xPMVrc9w1fs8fQnGQNfAfx9Hb69LsN31ZAQu2d1NBUA2YYxYVNywVvyJ2TMqm1k5FrenQ1hvE",
  "key33": "yLxVUpsa8SppV53VTSGP2HHGhK63P7vK33Kmtvr6aTr9gMiCR6c8XSh6Ghbko7boCY15bNqZoqSk2FAZTU6a1Uq",
  "key34": "54yyMYHv29MtwtHEkX3KscvU9ULMTczXMQ5ECCwqY8yfT39kJsA6mtwE59TdA5bp9MAhpVgVZQu8S3EyibNRH5EE",
  "key35": "412AVGN7DDnkbgs1TxFBc7HRFqz6PMW7Nha78GpUbhAwb73qaFcMQZb6FWAPPDFcw1dcBJoMx4mXnciFRmMvmg2R",
  "key36": "ZFH7q3btmHPpjXVGJhVY1qhVQ5ip6ygdhZFYBssq7nHkUcbbrzdYasktC6yTwp9RwtwsGTY86AybizxphPobn7v",
  "key37": "43Vid9gTxi1bBbuKL2ucbowJAxWBU52s22Em861nKk6hSQvTX5bbApYYEWoywhDQvcxbAhGAc4CfseZXEYwWebnK",
  "key38": "WqME3eMjmPpNPZeH5Gs9xNJr7zLPKyP4wqZUbLVpD3hy38YtVpk9DhyAdwQ9AXM4KLJ6W2ZvdCaQqgT15tQ37YM",
  "key39": "2cTeqP7DrUKSNJxs5s9zj47R6zAQwGheg6c8W1J3NQVL8BfULPRTvhzTyZj3bwxWM6TuNWe6ed4Qoig5i83L8eyf",
  "key40": "61oXH3ezeLsTHe2JjzFXMzgCxThhwHAMD8zTTFnFcYa5JxXnz82KTmK93qcLMRCGbiisosVxU1BrjmUCHKF7AMkF",
  "key41": "2MWg934bxZv84FKGYVeb2JVhn3Haf1waDLBSWuaWG7oivEXarMQWxeMyBuPE6gAD34VuHtLzc25tAAsLxXy782qp",
  "key42": "rkC92JsUULrBCbB4BL9oVbPjfrdyJbyisKNRZZVX8TZznpAQfp7tskStTwQQB9TtFFmbVHpu5HGsPj4K4eiKs8K",
  "key43": "35cq5eeHMTnJQbTVcNMoEb6X7UBLhhFim2QExqhJxGVcgvqeSdBWhx83k2gsr6YuwqQru9zto1Hs81MJ2hjusrRq",
  "key44": "3etR2BQmZYxeXFuLvHu4LD861tBJHcF6Ekoq9sEZy2cvWhdj3dZHVTqe9ZqugQxxatZyvLwSUVZmpYnLLJLfWdeX"
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
