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
    "2pB6vSu2guEdsAvA4Xm1G4HqMKfCS7xSW8utNR8en2kRQSmFYToQWpsv6auCXKYBhD3tmyRYfCoW2aD99V3WcKU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9UQZbNhQTeuQ37qgpTP6kB7p5PHfLhZkqjDNJ9T1FQrHpzuGT351UKqnCZQM4ukxqMcfDh8BA6Jgjky7fiaEEA",
  "key1": "25LfwUeMLVmv4d8mKoaicRzfBHgABje5thCLoReqjWmvwXdDR8K7gomLdvmYW3pa3bsAk2Jt2qxx6WhiTS6D2DvG",
  "key2": "3XhAXgq9xYodeJDoiFcsxoWPR7nEK9YiujyTsMZj4NkfptnXwVke7w66VTQjC2akDH2Tx6aMdoNyr91KcbH9ycUD",
  "key3": "4MBSgQKPfBAWcA9civ9pcUKFqjyG5qUUQsC71FcnrUS3mocs6FNSiLNrvQJqJ7Krmu7zsytQBM5Ar5ADg2Ef47gf",
  "key4": "67b59baBeYcGBYyo8KDUxVsfscVw68kXtPru4suWMeDdxLupQ6UCtp4tx9HbNtnFNow4gbjGYtcfGsdJDM2Roccn",
  "key5": "36tM2G1Kgp4ArTQauRAxqMqtrPmYbt7rZBT5omto9ACTuLJ9hT1amitSpw5kB5DoPKP9sCNiPvLfnQtYbUav86u5",
  "key6": "4VLyh3yhP7P3UHYrDE6z8x6to8EQUUMXSua4SE1WDWsQBceWgGtZjNyryVgkN8RCkC6bQUB9gaggTLo68unvVGdx",
  "key7": "4dQXQQLahDjf9iNsuiGQbmUKGyr2TxQTWczRfevcSUXczKGLtRfpphMQSahtphPYmnnLEFVPkPoxtWKXqXMJJxRn",
  "key8": "2vZWiHqTF9pqD22qX3dwxQQeifC9EQH8bMnPHnSayxdsKxiXt1Z5GoBVy2deSdssE9TbEKyGMAwocR67AKzeHJuz",
  "key9": "3Mdg2GpvfLoq18Py829ty1aDPcf2nUF7jJaivY3NG8oPjENyVkvx8kAaJk5aVS4rQrLPoQXB7AEU1NboP3VAUAL9",
  "key10": "3xUK8haaCHdw9RXsKVipKzbwL8NpjQb596rNUgDAgXKQiMKS4RvfUcPeA9Th1LeLoBpCN8ZVZcyT6XeuGFvpu72P",
  "key11": "27Qz8BvLWgrJn7AuCcMKTaDcMNSaUqEPpkBo3pJY9vzEUeHjguSW3cUfds1ujwbXyoDDoPRk4ac2XWEzedMgZF6r",
  "key12": "3CmiXhwVz5rRtm6zA1zyUL8WiYFq45nMNdak6Yw6VGufrRb5QRKxmBfiUQNnCCCdwP6rxUHrqZBG3Y1in2HHzThW",
  "key13": "5uYbjoBeJ4QYZZqCnoK87AFoszcsqxU3UuoUDh1vKssoMXF1UpXjH7jvBo1wXZq7RuLeDYWDVcQf8F8kgkBwKoUc",
  "key14": "xPxfe2jLpkDdgNcSqumGcRDEmjnp8ajBWxbDXTLno7e9u39Y9aTouHk6q8r49PD3q1KKCtt8Yt8k3Fx53GKRW93",
  "key15": "dAtfN3LQy67izf5u2JnRaMZjKQRLr2vJ4Dh3AFPtSUmxRwA2enHUYYuFFjM6p1DsUDQEPcekcjM2CHvdzNupqSK",
  "key16": "1PHCBMCfrNc1LckUiqVTysVudSzAMde7UkCBsrJQvivLTWjXLkMjBiDUzdsR2YL74AzjDbaWxATjN47C2WsdaNS",
  "key17": "53osDsP3yvLigoJbJ1T8HuuxYFPcaus8KidW6zDGJmXj9JWjSshqWVfzvfjjUkU471sTKxEc1bSjHEwHvTCLrAWZ",
  "key18": "3aQgGvE4d2msnSPTRuoVNzBHwMDvfAgXpZf3Q2KRUSo2hfcVP5ZoGa6cTUKy8C1ci9CNfCmptdMehEeFFd77yNBP",
  "key19": "3EEqKC7EjnuwrbqMBRNASUE7dn3hiubkGEb5JoWw1ovJvhCMv1KmUqSb7Yjd18cnXV7XhCifQaYyFuBz17iKjm9G",
  "key20": "4b6Fcc1WzKAbDUNDZUHHTG1d5zneuq7h31VZt1MrRtjxHkK36YU4yy8N4XQmaBhUV9ifToxrmMDA5475pNvH4FCy",
  "key21": "4wS7368xUx4oQXCSARDEqF1uk5ttRuwuyh5h7dC5zBAzJAMk8dGKoXcSEkZ5m95LirXGHnNQn5EewbCPaUQZs1Yu",
  "key22": "3arRUyZ81JxbyH1yppzAyZV5C94yBFHNapVsW3WtS3X3R9qzPc87Z1yZr3T8An8cLo4EJjdTgtVWJfytaFvgJcG8",
  "key23": "5t3F6M9BirmbaYPV7szy5YsXTJNC6xaqTRbuVZeK1e7oV3nQx57zQNyxWTWR6H2D2Dxz6Z2Rb5grreC5X9Vzwsuu",
  "key24": "2QMhGRcwePo5TNVeJEkLQhfeudd6LrqRmXtBDAETYmZuM8W2UxZ3NR6nt2C6eGQJP8Xv3YU45hwgMXiPw3YoGaXX",
  "key25": "3CeaBYwAtd91seWyVu5m1rYvRdEutgQHxDWfMSZTuqRPWBJCeMBwtxVm9GSiu2oV47yyzzPEe8evwUmi3iZxQ1v5",
  "key26": "3XwCpxrCCRE7HTYJDvuRdsW6RUzt7N8YVhLvm2SbwK8MXR5L4cVrJV9rkGMrrT4FXPt4a1c5hFvs4UsyfRB9P2mP",
  "key27": "2utTZEvbcU5o7VJVENWrjAwcf7YuhKkqLVnGNDmYTKNHKSxXnyFeaGodRTcGWpMLoYFcqvLXcoeG8nUuvxzwPZNj",
  "key28": "Q7QfdTqiCmxkK5mtUTTJTMWChsSEVnn3m4GEb4kfqyuY1aXMd6aBM8sioyg9n75Po5gTgQf34j3SF7d49i5ninb",
  "key29": "2WcH1cXdUkQn5Rdt3AoALTV7T6oWxMVZkfeFS5QKnv4UkR6TeCrJeMf3jsWPmMmZBqQqRKgsczDuaphrWabWKBmL",
  "key30": "j87hVSuPkSLsRC4Jh3etJW74gteSaDDVMt6cRLWygDhH3LJHgyLRLPw77uKvDkjq9PQVayhLGiV4D87SgTA61bj",
  "key31": "coANqCK4pXoR6A4SqFyMYzBeADxfcHju4dphvHfzkQQdc1BKvAay5hb2bns1SmBcK85mqqArtMW8WsGbirokLf1",
  "key32": "3NvugNgqR5eCgXFKK1qyDBbF3kBhqxz6d3WFNqwuJvLju3LhX4fCabzWbGViPatA8zmjvAgMe9RH2M1A9FMmXBq1",
  "key33": "5qNtURizxGiFpNsWFvCj8MXSTDCkDg4mSe6aX7Nx1RUnq4RjXotmFzeGFtjWFSXgRwMbyMg13ixawy2WV4LFvQH4",
  "key34": "4xuPuTi422RE3Q26C5K9HBa664LQHSXgA9yoLEfLn7f2XSR6puvXE547Tf7MH2BNr3v1AcT3qkhBTzxq1uyEmgom",
  "key35": "3wYoi7j7T29Ew1DnwNa741V5PUPiGY94jjMP2sxZ3vKnZLApzbRXoRqqS9V8hpPfJSgmq9NRdUZxHHBLZF7fP6N9",
  "key36": "3TYgNte9ipe5BgA2sLx9z3uXRxnvhBDGEQ7A11ZLdgFox7nCD8M19JuiNiH893ZBx4Q9CHTamLRX5p9eqSRvjULi",
  "key37": "Rv3MbroKW2nhJgTWtzqaxDejmesTcFAuMVf1cavPjbed7U95UjajGjTZDHRxNvVdk85NHoHYTz6z2NtxTohhfuY",
  "key38": "3vqUY53TSijJM3TVRpNgv7pu5idutaN5HfDMZWXnmWe3mDgrg4HnfiZVuns1L4j12o9f9vGWWf41eUzhQRPFXnNV",
  "key39": "Yt7W6eHkbPG5oCMk4np5Fxg1LK5PW93Ko4xxyayiZVDkrzgLWRkCAcA9uXyBadmW41G2iMkV8GLBa7vCvokbF9k",
  "key40": "3GDn6jqnxpGC5qe5P1iwn9qoJakvW9ga4k4gjHefo4nanrtPsuXz42usCLsEFp7ksqUEdVuxJd1idhk3QL6SRt63",
  "key41": "5LnjiDBNULjTacLWujRiZ83oongVBeaktckbE7xX5NP64GVhnYGCvwfzoao2to4cgYL2WdM4jhecK21AEuHXi2pY",
  "key42": "3qA86KYZmA54N1kBFicvbhzeeA62obLViVUckDye3pMLTiSgDgf9w9Fn7ZDC5yn7mKMXe9CrSBknGNDFAkTckD7A",
  "key43": "JY1DR2ioNXmar8xWxx1LUTrVsSH63Edf5QUmHzkFMX6evC91fACd9D9zPUsWRNa6P1RyBwHbuGx3j2LvzbUnjpf",
  "key44": "67Hrs9pChseuKXRoysKdpj4fUQTJbYnrYHzyJETjZxKvA3tKDnaXF3Jy9ZoYQMdyadEJvJY5Bz1VbUB4DCAcQyAj",
  "key45": "2fz1MG8eBhut2yzAFKiqKeDBU6p2xPH82aUTKNQG28Fw1ZCW6Tc6nryXL6qUprRNbbwBzN7a32rng5WJZnUaKYEu",
  "key46": "5GNtJ7mYb2jBWDYFsWJDGK82vmQvb49uNduH4w4cHrHmRVEsG2gyRk7mxksE4KywLxTDJQD7Ay6yYooXB3QxFSXb"
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
