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
    "48qGVth2mKX9PWVfGCxZErr6gKn1cpGVzGzTVXRBAp7wRGzR19mYpMs97FwmajZSjhfjGHQHw3iC9an4esHrAqnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "292Ys1mx3nFWCi1zSDJyJMnYkExzQXRcCYbFe9Y8h6sthSzJsGPSJvEFqYPkatzRDej67983AKWbXQVSamNM5TZv",
  "key1": "4E6aCLBLz9DagTMD7eehEpy1CHibFbSMrLrbMZDQTt9DB9VT7NdT5PZAPi3JpYNjbNkC6uDBMoPxk85oFeJQFkSX",
  "key2": "3KzTBHexn9hjNJvS1PexqzXGPhVEkqtVtbfagiZP2e37oVB1hd62HvGRrESTegnE4cQEqXMmjaM1hp8oWoLqXHoS",
  "key3": "3UGZHFQL18fvhaC7B4kFJeEgdQmeyQ9y8sXGtomiAt7TvWj7Go8XctKxi93GK5PXkNTARYUqGzjjrEiKNd7pXzCT",
  "key4": "2gAaUBMuKzRVhaNyeadKsYdybx2praaiyWmSnwib4BA9uBVyRbP6BdaHDdyTEn3zEgpKRHte7MUU1zsRBvBfGuAG",
  "key5": "47ZALJzKiBt1TMXN95kKXLDuZ4WE96qhVXUWVZgQPmWEkt1G31MuJTVqx88Ek2bUeQcVFwspu7NrYi8x9Y5CUmft",
  "key6": "4MHRcLsbyZfsjLunzp4dANCy6NuYV8jdZnXxrpwsawvCCWu9thb9Y4jLNC9tt8PXUab646TRZ6akyJxqpwzRfVku",
  "key7": "3RiHBhWxq1sDHpjbRSyGfhyUHq9P4w1dmD8yKCFd3ggm6qzNpWvUSuCWM1ocokE7vfNZSuLyWzZQYMMvKhEgdgwi",
  "key8": "3ARWGoLqLP7uM69rCQZLpHW54mcmqS3hGkquxqahv2dkW9iiuZ67zU7gFJdtPBiUxf8wgxeu76gSsifVmovcKwsK",
  "key9": "4TiuJwYiJDdNJf1nCiH8RKKkgPLef5iFk5Ycu1Mchc7AMdwtb8W4zgm24nWnGWQt4VTAYsHTtNcjqMttWxKh9Af3",
  "key10": "4pjZEcvYq6CSZQgptw8JgAvkWPc2h5WzqC1SZeLRKm5w4wEVCAWECjhjNv2QHzby6rUF244ffRb2BSXbUjjuQSGe",
  "key11": "69Hp677wCaea8zdKB6KdZpiN1gPXxocFtbkSjkjhVv1NKVV71BkS41FpbozWv3s6xqKnD6zYKwTq9349zD1pAqZ",
  "key12": "46HvCznYKNJPSYzURFqHC3AttVJCqqzfGTLh5xVDYXnE522svkbwmR5N2GWhjPkPnSaxTnACKTubZBrFUuFTf2NU",
  "key13": "58fzeiJAjLd56boHjSF3r4BsHPCoD7w94bph9vBoGH9EswJzKqKai5TpVbD67eBLyYzfzbuLfCnMJC21zEhwrXaK",
  "key14": "5iyYxzxGCRvB1gY7hFf68SGtooyueCxp5zYnEBnvW2RgCGU7DgnKJmhpJSFHDuntdWZBC76BZ6MMhdTUxCbvaK9S",
  "key15": "4dQMNNdmLWDciZDtSUxLqcZSvG466bPupacB2QYDfYaFjfvi7aq3m1YCNjgT1rG2XAzaaiWv8mr3hczbQih2sx4M",
  "key16": "4fnZ6gGnTnsoiaunhygxnLgBYF34REdmqa7gZKSstiXgGWah5wAXGMxviWhze5hLxLvYCuTdspF9FoBCaR3SHpAR",
  "key17": "UypVpv2VrEgoxTc9iCVLqd8vFEyvBPpBZyFCRZV339WhGr5gmrsFcEkXdtzADSpJCXe5Z61nBR9TsechmFwLK1S",
  "key18": "2UJAcj5LiYrL78exVWEApgz7uYZNkfjParKfKvjmQRXMfe1bEZwa4dGfBUNaXmQzmNHGioQCB3qRWV7gJH3QtD46",
  "key19": "3XhJbxfZBoYWXU9hnTUYTMhbKhCNLtZC9w1D2japZYr2nCX6uwHJq9Ce9RSrD8BDAmZPkr2THymeVg82eozMU2sf",
  "key20": "3M7Dqji6k7wg3Zk3zGED47TqucNARBubNfxbYmJSMp2sg2FwN9mhrYLHX46ULHVGBQu19xRAi6Me9Joc2x87qDac",
  "key21": "4S4XuMzS1hwe87rkrcTKW3S1zM7FFvZmjLtmK2TDPp79UKCTskKKhPejRkhnSqbr8oNhYfKdrhhBL1nKobH9QJC2",
  "key22": "4fgdV7gugFib1ra54fuysE437p4qSuAXybfvrLh2wizJnF5mFb7BoPz6YYfiitoUWWE28atoWGQrrUoq624vcotA",
  "key23": "5DyAvUYzRhyGs71tZUJiQEAcGpKXeJuocTK5xNup7KW7HhBELE3XkaLGS6PR5HnVj8iDNNke3PvYrK7NooFB6HXY",
  "key24": "3tif2i7fiXqUXE397G5LHDtJUH4qkCFTdyrbzj8djz9pLWE1mXr4Ze13wpwHHx1iTnrUTsndEiQQ7PLyv6Wr6UNN",
  "key25": "G3JH3oh4JoUSk1ASTT14mNBgQZ5kN4Y6cUo7wdqZzgeLsrV3zcWPEQXhPWuLpTAek671wD17Dk47uB6Hz3e3HG7",
  "key26": "4AneowB2iP3whG3yB87xNf3RwGxjGykJARPsRoLqyjUFYRzkcZPs7CkEdM73UwC8uf8r1jmC4czDErEuosGi5LcX",
  "key27": "3fbHkL7PiYfgHgARxgMYqcQQ63LtQGHFw9P8YBJzTmo88c8hCCFVUxnypyuGvNrDFoHZnJWwDMbbVDYfEPBf7Frv",
  "key28": "Ejz9kajDjPy9r62axeoBY7vRsQ1kgL7fNQNR8kXosN2yhuY7YaKkjjp22b8SVCb1kR6aKkeuzU4jg9WHowWN5vc",
  "key29": "Ut5iaMgaPaXtKMgjg8nkGvmb9XSDh1CddKxqWHm2B8dUBXcMKtqkgzjZK9pkuvgBPPVJ1cW9BKUfKPhcDm1jDrD",
  "key30": "itheuw8Eg85BqBobo5RwTEZKoXzeiu2AJH8yYSsr74zu1S2qBayqe7Bzmk4Q9SAobfuYq3xVCAdbwz9v4JDaqg7",
  "key31": "QTtRT4bnFV5fPNGiaEJVFbneVBmjw14uKNiERNPvkxbJii6wYuP3T11xd4w1eTcJk4s1pe5azp7tPYyqiJ6hMpc",
  "key32": "3BNa8JotSwscE9WbG8dpNDW2vsReBEMu4QUydAQVoTp9wBuyM7e38GENWmuNRENQZsiFPjSfHeAyeYYuERgQJDJ2",
  "key33": "3XYQcMsMyptUhTUiqdy1QrBkGJqpC19h81jyhuRf2Nu2wSs5rJWPG2WmibV5W4corVLESwsXNgTgwjWcBtNUS69F",
  "key34": "4bFtHDdDwau9jDNE7Dr3MGZR8tUKoCnhVCVfxPztw2WEvyxCue6mEgaTtHwWJwZbD5VEuu2pWpxiz9U7V7sZrN2M",
  "key35": "24d4bhojzJTgZusAPZUvWnDnEWLFfJJ3Fj3Su9VMvB9CbRohu3LHbMmFcUkEoqLMCQJi6mohuYeAipCDNwY4HrRd",
  "key36": "HRinjABTG2pW5DWM7JWVGcRajzk9fSrXq2E2TUNrmWk13d7ui6QfsSK5hdPTmGSfjfxKSYCuVfQyUMfWoZvMcPh",
  "key37": "3R5nwJoeyT9vSxNywk2EGFkvRWxZUD38nc9uTUTJXTmAFb1piwaufuXDtCEEn4CSdc76VcLMHBYTRJLskZy3XHdu",
  "key38": "4Yp6LuGqgiNZbw54AWF6QJk3CWVraJdDBEq2z4Bw3zXgrouAv8o9hmHSRKZz8Rn3S4raUfJQJhWS2uhQtU33SA7t",
  "key39": "7KhYvBH4mATJjDsEFXU8uRXdVDm3uq4Cdy54txVLZk2U4UgGciovG5Vjhu8LXgTNTi63DeJQpKRKNwKXoPSYzpg",
  "key40": "3Sh92knVf4iUexeXuV7yVQB2f7ZBS1H9ELZEin89Q3tsuCWDEPPFRzr14jfRxHiKj8pTPrgFS2duRrP435DzG9mP",
  "key41": "3Sou3fyiDWak43KJqqWwE8PqRgjmoKyqs9ULc3EijsCAU2iAxrHnQz8CRJRFP1PhqkoWGtUAjPV4oRkVffELZZqm",
  "key42": "2Ry6NfUrAtkm5AuXFBbCS9Gpy7zvQ2ebzYFhJCQKMzKU2vGWB24bUf5JJi4R1JczPH2Rj35RoNtUKSEJq8C3w5fx",
  "key43": "41aDkXmjNY13h663t9DqA2DFebjvArsCggwde2GTcMapEodu6WVt1xVmm4tnDLMckjUPG1B4ov12nDcmB7izp1ii",
  "key44": "3hti7tEEZ5LooTGDMShS57xJVxAbyZiq3BDMB5aWTjYtZdToWkKXwxN5eukCRXECc3GCuMDEa88khdhqj2D1bpjs",
  "key45": "3bgMgoDALYVF3MhZp2E2XUyNaNVPesHesFcVDN9TXJ6K5uByJcDgdLsqAx3WhUeGN8otMXXuXYVzieWBed4bzzHJ"
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
