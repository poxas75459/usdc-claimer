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
    "2nXGswivFzBgg6qAFZBqS6jHnZafge5BL39cZkbY7afJR88LXNjymvSiG4wggfPyet33PmMrP3YtUY5g1VCKQfto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wdLGoivHPyxcpefpurXNZ2qds3vfn6zokodD5zyjRjDaPKYrXUF92eQABt6a6VZjxahjsooRRCzr7bRhpHbz9k",
  "key1": "2n5NjiGgP1Z67ui1fBeBGxjYVrQyjtnekUJfmM4N5E3GMt74nJXva21NZY3GDQjx8r9N2eC11SwZGqcnX6qbaCUk",
  "key2": "Xaiu2aWf1teYY2hQpaoQUabFb9YCrkFa8fmmNNtnLGiH5iSHgq5RKiLDVRfQtzS1AGKWAYcHP6VWBgrqbbvMqVv",
  "key3": "3aiX7phzPd5x5AxCjRCD4CWszdYUJGxshr9BFuXsMFbKcrvrqeseNLaZSPz9KYxmJM9242VwVLaQa5aJUBjE7epj",
  "key4": "bwtNEjqpeEVkD36WkrvTQFUrRY1Apa8g89zC24KkzMLHa7JJpde8JZnqvnmXV137xktupYoHKjZn2jYzvMre4G1",
  "key5": "2cjqHxy3ZEwW287mNyH7PWK64EMvWhrt16wKqCADBGS52SD3PFebD5y8EfhKbMDMaR7xBz6ZYwxgfJxrhJ8xSjzx",
  "key6": "2DJsUR3DGYP44eJmkoxNEuxB9wnSeryDAEtBJc8ttzJ1iqtq43UD6r6eNpomBD7DYex9TjM5eDvyTN3Hqt9iVFea",
  "key7": "7mKRoh2PCcHHnH921NkKiMy29oCHjYfgj79UxFdidKqc7wuaYZbpef1AzrQsdZ1PDZTiQ5jNs4cX7DnBj2sdEZ3",
  "key8": "4MZxKNSvLym9mmDLhFTn8MELUDVVXmSbWz9qF6VemnqHuo3bNFHEDPtvegSAqzp56uHEHWFN5QP396BrPf2h9SkU",
  "key9": "B5QGyRKicgQ8vn1YXzC2dp1jmxuwYdvgFCXcM1NVDSyRoRQ77in1cWHBMtaQNxKWZdg9wibvqCD3LwYEN8K11TV",
  "key10": "3c2874GN83WBWqADH5Cip5Me9PvPa2dAc61EJKxBLvzaZnanV9aM19LjjcKy9GSzeRZmciVxL3mh3pv8QsDvJz5g",
  "key11": "5p1fE3KvVUmT1oyEhX55bT5THdBzwhPCGX5keJ7pcrXg41z1AyFN1d4N4c95wAfFJeteHMY42dj6nF5AVRG56V5A",
  "key12": "jSDaJMj2kyifeguU7518tioAC7pxSYrJUTstqJyt8HtC4ZZeKcvPnHGvFLUZ4XqAwsbT7u3XdzorhtwqZDHjDBn",
  "key13": "5ayCUEhybLmUwxHmEpGkbCDiwJe8RLzFYS5Z3Mghx5Cht92LhSe3PXVevVYExvMMgTjE4YTjbVqFwWZnoQk5D3Ji",
  "key14": "2xsoCmHpvp4NzoESCAFqhPaSuiDsStVmAho67LqT5EURBYLbmi5Bi6Q5qe5oPMAHv3TPBs1T2pGYRqevq8vFaZye",
  "key15": "5PxojyXRMdVoMkrXCPrJfWgB3RqkBv2pSzc2FAbEMzrsqE99E8u6CT3Py3fk4XNekt6ZEnzw5tK2g61dCAtJzqYW",
  "key16": "2RfpqBRQC6TN5HxSNwrKSE7qpzrH9jNmE47cg8piVzwP7VR1Z2ZfgWp88AsuGbcrQ5kCiGAx8hBf8RVubgQc7AKY",
  "key17": "4o5fthvVjgF16eYeCRAEge6pSCHUU6RXtMzvjVAYweWoF72SatqR6bam85PbdmbJm4cUFiupRsAfvFMV37AtsoMu",
  "key18": "3tBS4dpWhjZ5qwRQBbh9HYBimSu9eNTcybhcm3SC9sQoULTHhNnKaPWknLbpU85P8wggyZa6KHA1h9HARHf3pPiF",
  "key19": "thyMFAut5cX5nmqvdt6hML1W4YQHk1qC64hWYu8YTXvXwTGZH9yvRziUSvZTVJdPNSsLw1Yc3Tqzbvz6dAWCod9",
  "key20": "2Ypeuv6kHJbq7DCkzLdA5edshYx8B5Ju3kr6ppDLJL23t3J8KxrJwobRmnQkKkVtVxcvmT9pggLDU2VDQcEBAyFV",
  "key21": "4gpgon3dtuxChkejNGSHCb1SW6SrYdixLuyHoDNmzbR3QS7HCY5SHKoJURR4L35e9xsPD56cWshsAqefwNyA1NgB",
  "key22": "2qijBEAsjdiowJXfUepfgp5Xst11ngRD2ybTWfjQvBENWi23qYKLV5u5pqAGPDBKdDByBZGK6MbNhccWc3rojbkC",
  "key23": "5J2WhBuwmytGQCkoUMG3g2edXzDLognGDNaaK4uvA6yP1dqEWS2zStUqEmtMFW6yPkexaoZJ66NZ2jVoT5KBbLNW",
  "key24": "zBHXbbg9h646V8Dybzgjt7evKByGUofbCtWiaTBXNpMs9scJniVMvg2Co1uYw2YKRX6sZMY8HksRieum797YrvR",
  "key25": "3ZRsFEpsK9smBEKeJ7bR8vFEf53jxWPMsCVwExWWN8dkwBDMoFS5ukkqejLVm9PiTteyuQsufioH8wm5CoDhDSF4",
  "key26": "2BgDZhFt3hNS8RKLSc1WZAyvYVnsKdZsCMNmHAGg7jD4GzaJ75EG7BPNWQomZkDMUXKUotvgqocNwibjff8axt29",
  "key27": "4ZgCreRus1wEdPZCihd9T9xv5F7FpTnEkuayWjAqtRSp91ktM5Kxt8sES6RFGn3RGf4b1JwFYpuFtvpL7WWGMe3V",
  "key28": "3WSE55uER4tDggMZey55DQXRtHrE6PGumCs2nyFYivPMUhrzp13Cx8DrezBAqAY7VPBdmQ4Pkaeej7ir3CREEMj7",
  "key29": "2CPXvyoacgyNeu8ScCG3mpmYUrawtVma27Ji18GB22D2P36jrbZNjMRwZrz9vq6RCizDXePUXspHaFn1yyzfh6dU",
  "key30": "4hfEAGXHm34ggqaRjAfdzrv1Gk87nc7Tf6nhfcCJHVNRmC6f7gYjZcm8x9FkXf7CBvpagzqoJfogKp7rp3TeEXiQ",
  "key31": "31ShoMYrVMTF33hT5sCZnZHRL6YCtP4jaugVgJtAAYnXRhm6XNWSxHXptqrn6Wgeo8qhgTRyT4bYr2paJbBZaYjC",
  "key32": "5hYgdkxjEbDWitHpHEbh3HrQkMdh584JW6LzpUhyZhE53n67xYnUBukYmePumZuvkcAepZcn8z5KvSEsakNgVq9B",
  "key33": "2RRLEqLcyC2qujyQPaXijNEpcakaV8ziiE7Rj1yCwUXMrNNfeDT8r22DwcuHKg46fWERJqHGDbyUrLrYbDw1DjaC",
  "key34": "3u9ujNuwbNrQa416zUzuxpvWsq1enHr8JTkybGX6MrsqfmuF9hmuJufbDnX3CnP3BG3qc6FSd6JDN2DboBb45ap8",
  "key35": "pB894geEZw95iYgehb9YtxUEypZnrkRaXvw5dGJq7YEjfqRUeHTpLoC82DjBARGKw7mBDgS25vnZVk6b8JUmwvt",
  "key36": "5555Lws6Vj7dm3sVqQ6mhgB6sPgg2pnJ6JWptCcFGKpJ7Dhomu4a8vgPDtXuXexaP3ncpnWsNRXY6dSokwU6j8VK",
  "key37": "3wL87rLFbcRt3j15sTVch2UG3fco94G8KdZ5pisM1NvZ2PCREub6dNgx6Zyapiw9jjDEScJCVUQx2YkxmvobfeP1",
  "key38": "BV9zhuqcLvyk8J62Qnn2JufZoZesqhadLaLzpsjTnyfCjqkAMi5McQEJdxbtyu4vfxdWxecE7Ai3NRWcHtbmkRc",
  "key39": "5WpDbRDyQS5XtgxKBjmPvWtrUr84RqhssRaUn96deNk3zqirrcQqwNyYrvk2tmfje2EDpgRKmHidQvybqHGwEGgc",
  "key40": "52UdaVQuiwCUEnJWLrkQybi4gFZrhnuuWiDupoQNZw6VUsjzFZpBtptLCUchKexiAvLhDU4xc2hsBLevhnCGWsKf",
  "key41": "4576DyMy2aRxsrT3yekEzz9URibx1MJiq5rdaeUDu1ynx4Xk5eB7hqod4Gq6XaKepE7nv2ijpr6PPjXUW2DyJJDi",
  "key42": "4AnksLU1eck3b1aBpCBW6g1jN1pWYtGpsnKp4vXKX2U4ATLwUW3k4gbyTx1UzJte9NZwRpND7EuPtD8CfBYm9Unu"
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
