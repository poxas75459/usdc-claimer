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
    "53kPSPwWEmFU3nauSWiwevURAdTm3aJ5BuCAz3gnUH2hS13hoxWt5FMdZiBAeHUuNurE3oCzyh5VviswxbyhjdRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qxLhbnK7Q8TKybUeHWczUMZ6ppsVeNexnPboncJJuSTA9kkBGgMjuJyrEu1X5qqtcqZQ3EAM2aiNNaj2dTTKKW5",
  "key1": "5VJBErvUHma2MLNoStH5HFFSEUW8LEaWAZP5dsNVJLRX51jHTTz1FeScxMyMzkbYNpkXhbnWr7PvbMjZWPzqRzNF",
  "key2": "4kuyM3ev39iN294WVS2BWCCmB4ujaRgbdjtp8k2EfZ4iPDNHDpovNmwGcSv9d8ziAS3P9GcH2X4Gw2jSsrk2M7o",
  "key3": "2AnF7H28mdrth1VAzWqNvNVQRy7W7HovxEmRsJkkUEuS6r4bfxv1P8Adv6WGt5itFJc4CK4LTzH1YBwxtWfKuNmm",
  "key4": "3gHeTnCqNceiKPD9r5Y915c3oNv5EfCojGSSemo9Tb69EwpiKAqdQmDXBVvrHvcRAJSDpWiJGfCCwPeSN8ZA2KPy",
  "key5": "3hshD6FPjzN6DN7gqUxSHCLgeQMjEUxcjcjiDN1qGK2n9owY2eAEJ1sD3JfQk3XSx9oFyYyDNsvAWSmdrp1as35o",
  "key6": "52g1vytkQszcSgodDdMZtfncWB5484bpB9vB6RFSgmqMzAgYb9VEhseW981XN5j8jLozz4dzXiW2rAh8tYQGXLTs",
  "key7": "2tdEPpooNZVPpY2VFsConCc5XJ5fdstnhh7Kkg66Drmc1aapUSCybB6hwjNpGhGnAKgXfUNMZ2cSzGg2ZT5Rub7G",
  "key8": "4MyTzqmWJaRYnzLR5kRcH86xz3eBDXr5XMkUmSCcLPjofZnWkT4JZbyeiLkDVt2L4CBPnXptGRAwcv1N9hZHP4Mr",
  "key9": "kfqUgj2a49uQSwp4Z2S7iPRXk9XzENgoLZ886s75ZUMkuPWEewbH28pizCL9Jnz74FPtsiJNpggnFBcyZWG8GJP",
  "key10": "GwpdfeHQEexdDjGsaEGkJzSHy9jBWyGQi6BqPKgbqWE7dR2jMLnbJ3Wk2CACVbc8KDTTZyN6bm7V23Ugd2t85xE",
  "key11": "4utWFJCfuy6XuXFUCYqhVEhZtr3xoAcwxVujaRkDzhp5y1nX97pxG64mhiMZ4mz4fpWyqbLSJvVMECqfRBfxYWus",
  "key12": "4QR6tvVYxVp3HdS3mvH8xMrLC31agfuK2ovdtMsYt1gcE7iNk4xLKBUdsiiA2UTADxW3c1syv59qvbdj9Y2J5MGR",
  "key13": "4FyNZPBUG9bTuz4ywKZovSUAXzR6YGPTUonTnhBYhyJcwcDSpDCQ2hNcxTEEPHg1E8aQNFFaGv79oJSdLfCTE4F2",
  "key14": "2eF7RvrEBm3ZyqGdESfghgaN5MueCDTWFUwtuGBByMd6HsWgCFMC9iZum7x7SZbfj4XbuMQ2vQKzGTmaqv5s2UDZ",
  "key15": "2ztqVwFfZPpa3B8JHZ4r9wrqoWxfLtQxHHxVgBWiNVoH3ECKaGz4NZNAxQXefe74Ka8ouzfyWrXTyToeQpSR31wL",
  "key16": "2tjBY1e8V2dMcPtzd8mL7rPj3pvWiByXxM5Xf1P9jtQKEA7Vhhacd1UNheWQcgQeMrbt4RHw3jjaFsgobGytpkdP",
  "key17": "4N2uUyVZ5BCf2CMQKvdjEey9eELSwoY9ySH4KYkZ52NUgu7G7dZUphWEqUpQMw5GvJyfbifC8Dtfn4okx2J96A9n",
  "key18": "2siQ7i7wYpU9sv9HnpFtZxsQGcGpKGGFDph4whGdtiDehScxzQuf8gzcDtr318FbkrFR9szZGFEsPFXLjdZqy6Pp",
  "key19": "K8Z6TuV5HqTKnXgUiMJLVgwJA3g2Si5BahmbLrzQkWT3UE9CTrcy2tk5bFGfqSzeAdAexit6oej6dSdvtBtyZeH",
  "key20": "5RNc1XXpLLXyrec4ktVs3fnhLUumQAMaWxRrUhnsKfyu896t7Kk31shEpRH3RgXwZwX4wWDLe4gvbPtnsdDtvf1y",
  "key21": "3FbhNGBQRszXCdESy55nzpEsfpNBj2oELiecDcJfhsExo7URnGiCtHcMYZMbkmRaWBuwu9qqZtAQrTKRBUXDiUZn",
  "key22": "VHxYrjNsyA6DGq75QLxo7Fb22px3Xpo5oxAU3Nk7CyxtrdQ4mnb3MHVqc7nrzGw1KuRrwsyQMDch8sgZfso15Y4",
  "key23": "5Tb19Ra1qE2fud3Ga7wX2mSgpHeFvuq4RQrHPYD12zs24DP2q3RVNGqPVAdzGiYDDfhVYAxX9EcyFBqrUXrp1Kip",
  "key24": "kdDfNLsd4MyZhrgZw4NJ815AJGrVnUx4KKTAfvK6o1VKmHWgPXwNwfbeWqeyDUhVhAjidrPqtMdnQGRcvi1Sv8B",
  "key25": "5vBM2MrkZ4zktq3sfCZeoSEmpmGMUJkTv5iCHUwvoidpcyxiSar7rDCuYWyVFc9Rc6Uixx5dN5qq4p9g6Ye6tQN7",
  "key26": "4yJS5W7DEnriwJcV23iKjf335WT7bKoZM5ZDg5sSyQ1k22gJR6ooHAbtuDGnuDbgp6V1wzhBa5jFrhabvHDDBW41",
  "key27": "2hoTXX3M9dcRBcc3KsDjKeDmSzwS4rYZhQQgauYgJXakmBhDL17AGQSn8JgbteRVWX9Cr26qozV1LvVDzDMMxtN4",
  "key28": "3damEAragqYxeVX6qq4EsL5GMvE1CDDgYUpaPUswyHadCB2RdBsPZiUujd4tx61PMm15yJs2N8MUpPAntM9o2sjW",
  "key29": "5xhw41Ypy5zGUAKK2Xwqct23rDVwoQ9dDzhyMZpNQDAJ3wGdUAURo5WdWdPDK8t8gTa7ZPmzyeGAWPhqVqcm2GQR",
  "key30": "3WEW9fyq8auvjTtPsNYrsEtpNXWJoJLqoNkxFZzKnQiBKagRTXc1k5ZjEVed7F11vdZze8oFfctWBqWZdcYQZFD1",
  "key31": "3BsTpi4hhPA4dsjn3YqyY3XZUH8c3tR9gE343Lg22TGRAP9RDjKvMjkUvUDhwbh9ak53WuarNcibPYPR1XnupaTZ",
  "key32": "51FoaWw79VZ49iTfR6pgokwcH2wsD19bQ17xJVJEiKJ544RF2CLyridNLcV6J9UvZNuA5k3vSmFMgbgCbqdnmx5u",
  "key33": "5afXHwXLVZkH2evYAWCrojBQ6qpbjRqQqCcfxWywZUVgYPrFgoW5asQJhtu9Qf1dpgzCyPWAbgiHWriRuLq8UuyZ",
  "key34": "42Vi1dX5TJvJLpgX2d59GeMk5z37urjy2Y7AVGABLhemsH6FRq234Qu3L83MZeAnrt9gpWQDDTXmCRK2jSUf1RB3",
  "key35": "4Z8AoEG2qeqgt11CbF2d8YZngNUtjud97swLWNm4CTT1QH4XLhkExjbCcMrm29v71GyfJHLn6RnNFmKavzoj8uaU",
  "key36": "4LtiWH7vxCDCXuD6Cvu4GPevxU58pN3VhzQzuz4ji9ZrG5mKbRWT9ppbUVfvmZ3VZ1mKad1TKPLh2XzCbErEHk2X",
  "key37": "2UVfGQ5EiHbApyQEHrUXK8SR3UhRnE6m85WPZfffz9b5CZogLFb1R5AQBEGrwyCWDq3upG8qdGh1N52NdMpuvZe2",
  "key38": "aQM8kHhRrHS7bcDRhuWiDp16ihYKF841rVjXgBF9ZWT9UT48m4swqNG6ibh3n9cQMK4J7rPtM17UevS3iw9RJxi",
  "key39": "56fJsEwSSNxrfjt9uqKUvxrUNEH8kv1EXv3gaQASnzWsmTE7cqaDt8cLdrQCmD6mudGhQZdAsTPc4SGvsMhqpkrQ",
  "key40": "2hdCkGLq4LJdJauHfSnS7rRfU4vwy18kFwBvfxU3RJ8mdvZ2hshc8j3HgkqTtB18h56QpHnY81mEUTJec6PYRcxK",
  "key41": "2EaZu964pk5vGVYBxSMbBWRJVTfvREDhRQPtAbAMSfuahFxg2Z6d3fZAWpmLRkRKmQvQNkKQizyMaW167WuTvSBL",
  "key42": "4FLbZqb3L1gzkd2SDxcRNwkMBcuQhhdUm4McYmX7JQ4aKdnhG2cyVquvQr5p4AQPzZHtbMBVr5Q563oxnjMHxPMn",
  "key43": "rz9Zf8XhnEBfkpqQYTzpeeHJwoYUPWHFrJJPwrewneGYeDcFscCZ4qs9bbtwj7ZZd38x6fH2sqDV9Cp4JoUxHeb",
  "key44": "3X2CRA5sC6K3s8WH31qaj9T258BQzA6qJPhtjWvcmpdVog436RueLpLDM1WvcADbVMrMbwm4s2d9Fz2mWwuybYCA",
  "key45": "5Hs2vSEaoUTvTH7UcE6H5ViMacXsTcznNWdb6VPCPQpCHuxJxYPMTBAmQtdF6AJ8UWDKuH1shvEsJXguGgPXWYha"
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
