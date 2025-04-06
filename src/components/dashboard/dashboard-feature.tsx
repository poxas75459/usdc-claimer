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
    "3qqpcHxcXs6jqdBKdFQeDdLjygPPh2kaEXFVpBcSzLTA3yss7X6N8YGDshg4SFsFVaa1eagHjCe3h3gayKFYA5zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52euDycARugZS4daFeBMSvSkgLdW4jejGshVyohbhKVNtqvc97nQwQfc1GvHFuL5AxwLkMnszV6dBFUJ9ncPvrjB",
  "key1": "5YPamakZvVMb7VGXmDELr9naamPZYWUE4sfV7zy2w2v14gtQL7BnV36kuGDQZTttRuqt6iju9Gfec4NbSbPXjdKt",
  "key2": "4YkQwN4E31mWqsqGEDqvmEXGNzKrQNLCejbQh2m27zjWeJLSKGL2fmtL1UykBhx2CH8G67uMH5JxeNZx7c5Mx3Ru",
  "key3": "3MR6KYbVCx583Wpvut61pWnvCU2VSFuJFXpAhXcNS54kZDNABnoNjBJqGdQmbhKLHSyaxNnrP1acW2xrhPSCAjwE",
  "key4": "hNicJzsRmPm1AkrWPrqipFmhxiT9m1NotxbKyTk4fHmiqY7z2VDyEvxarPUPyo9Pa5ivhxBdVXaVeWXgBHyhXo9",
  "key5": "4NivWsAj1eDEhkEgJE6rRpGiAJPdmjKUuf8cPvs4UEe9UQ441qce6CxbkqsfiJihMKCx4aNQrmaB1r4X6LUb88XK",
  "key6": "2YAqC3YWoasqKX12H5rPspNMsjbFgPSJkkgdQU2Nde6igA2XnGtF7ANvhzZbLbqSGBGXaCxowXVyRAcH6VumM6pw",
  "key7": "5aBwzKqTKEQAhTsbspkNnTVJ7qeHTS4kWZmZgUnyhf3r4tWgWXtHQP4jKz2enGp9U6JW9R32TmSXPftkVYhK59SM",
  "key8": "5Pnq8gfsq9hthomWA1Mzi2BJiLgotD7ouJkBrTWKFp86jL15pV7B2LSGehq6smMoyQsWyLYfpYzQxCZKjv4oB3Mi",
  "key9": "4E8bgzHdyJQVr7u87SK1JywUpR21knFVCYioYepRdXCkpJQQYWvY9kFajhTUREdnHWZF1qPibNTvuiS3bWTs1hE1",
  "key10": "4i3YH5Fsq7f8BW3BrkSZgssiE84ipuE4iEusvNnNcWLsZMAANvPn3CgJTU9cpVKkcXhr1ahckU1gvdxBNFTxDSab",
  "key11": "Smi3ir1crCTiBuEzY9NN4kg4FcXDHjzQYDmTNYo8nbxbeyPAfpcY5R4rVqHb1DEuCfXqRuPw4uPQxUumqhSqgpr",
  "key12": "HLmJpXxuDDRJcXhxnogR6ccRRkn7Xia6YFPNazS2Uxez1PY4gU4NP25GZ53P8hg3GA61ZgVTEjN9rfgRtmkxiGW",
  "key13": "5haxsL1FD9oR3ovnwWm2uXhCGckoBE3G7RbMk2HBY4Stst488im7bkvKzA4xiSw7PT8NaEh2bs1mpHLpwFPJmj7w",
  "key14": "2qMxAHvK7Bw4GXjR5W8AXE2GC1DRdBBiFrfLht2wfkPQkYPLVtx6fkdx6Nw1KY7q7RHxPcmB5bb1G8hxBUVDupB8",
  "key15": "3UmUiscs5pScQj9ZQnCrFC7NRnnATrxBKGQqpJKCJWE1SYJYJfuYXKTMWFYDy26va4uwSRYAyt3ygF9EiTrMmMUE",
  "key16": "3rYkD77FqrGbaJ7aQLzXWY9YkXJRhyeVX5jUUjxqgvLQVkpWEJVVDYRrFDB84SDy7FD6JuZ1a4L7LVXBfoszCsDV",
  "key17": "zjkzUWy9pynxxvSRYYLtz4Gf41tLBJGDkfZNmLBPoAX1dg1JjnjHj4JnkpQtaFj5ADYfZwuYNybtSBFTx7tvUSS",
  "key18": "23oeesKG9MwpyoAeTQeXov9RR1665k7fQz5CwRuWG5NDaytFRWThHyKmCGbaqdxT4iiQ9jxXrKgPnuRpSyXzSt5C",
  "key19": "5FAYzRSmM57RfC2hbBFvK8s7NMaBNdMiwBPGtMB3GGajAE3ifV8s8uDmN5axg3uBUpFKf2fH7x4YuRuW7RF21Rtw",
  "key20": "MU7Zd3SWNoL9SSBn3Tpcr5TBWZ6ic2GqZyWLnetPoW8s35FFr2cNVpc8cxxDgimrXqAjW3xicrbwbmJeg1F1EMW",
  "key21": "5xevmFE7P5juyngekXvumcq5wbQUJ9JG8vjNP1JSA5hx9gRFYx2xGnZbe1XGAAwsFdTtyNKGvnLteh4TAWt7qwuC",
  "key22": "585oFPNgNaAs68GVkwVEWKS9jqsK1hqjxovBpK6hX6QjkHoFcqPf4batFhTLf27V9Vhq9eZvokYgm4oxRb2NJJBH",
  "key23": "4iWqtZHuaAsWnbboBZNJRrZp2DsUQDzfEgvYPHCyAUHwofqVBmNGxrGu3jz2bNg8UtUnQ9JxbNSnttY1m4o3CHxR",
  "key24": "5PvC96Lt3RJ513d7GRAYLAKg2yU2XHomiZbzwoVqStG9jiUbtU2NkEKe9KZetJJy5xsdFwtiujWbJx8QS5Z6zAYj",
  "key25": "2gm3Znp9xBpZ3Nr4LXPWiznfbUYtsTR1K6GLnEtRVgnNigjhrV5X7AMPyTXnrBZCJhSZjuXLHszWuyYM6z3N5Ron",
  "key26": "9QZrJ8ZkZvUfwKsDM8aGjy85k4CsuiBaDhknVZhMdcc12V1KWHXoEHEw1K5MuWdK5iTXZMhRKPa4nUiKb84qxWh",
  "key27": "2EFZ9oaJofc292PnvtfWrJWn8pd7F6RVfaQBaHzrxV7fRZUyKw41Q75ZfWTYpJnXgit2Q9t8vqNjYceFyjLqBuQS",
  "key28": "4LhZRR5NPQJf1ak2EtJx9KtgsAWnT77SE3PytPDHPLD96gyqTSqyaRSRcZsZqP4nkHW2tqC4g8Dvvvz3YCAG59YM",
  "key29": "5WNzRmi3AFX2bjeJyGgKkopakz4SVykkNSkuMuCnenFnMVkYNk2CGYpask3bvqZuQhfepitR8nD1iPBLuvmY8r1u",
  "key30": "5MR3ARXhPnPb4VgykdrrEqTMkWSTn9QVRpGuAFVSNgFUadSGvjx9D51uqQWvcrBg5Ft5pjaozJUQNRk7sFuZ2w7J",
  "key31": "3ADrSGUPM6aTbBhwvR9fv9BjC6y3oC2pURfz1XCGSE4D7AU887UY6pYmee4AfNMhkVBztbptnFi6i6j83TNMapJh",
  "key32": "4nRF9H9Xybvrt9rFhDD5XNZ2WGAJ8qpanAN74Pd7HZRLMNiFMf7AV1XBb3Zt4A1Fpmg9xmfBxrWjxs71gJQ2CwzV",
  "key33": "3pa1GAsKm1BM8eS875fh86se19fFz47csbEUKhV5dBedo48wdyZiJC1TEnV5SAh8iuSPp6nvJvwS8ZdSxVPUmMJu",
  "key34": "2AWjuJeYypzPeRvA5Xsq2HA8atiPCfdQ9Q1LunDsMFhx1PToKeFNBkBs2SwiAYNbVPnB7qNGoGmEfD3qSaMncThh",
  "key35": "2QNkBU9EMv7PctPY4qQRruho6i9uvDzmLrAMerRJqgTiy559DavbX7B25QuJAkJpGf1jwsYMiNDhH4pF6U5x5Xjm",
  "key36": "JtRkdTW1U2n2jsdpAJCa5bXfh7S4y5zLzSGPCy7RdBvZL92WMHXEWVoX5rH9BZeEUTVYASVNozFue51NJforxip",
  "key37": "GQNYfgURYBzF5RDC5S6BXRzRinQwAh2kLRNntbtUXVqujTCM7xpG1BDB2Um3xFpKjbf2VD9J4M3uoWkwdXmb6dE",
  "key38": "5cqiEv1U95MshTc2Low8aKHAkeTcv7hJRn15WxrxGj5Xf3gXetg4stMQYpgGQGNyzqSxKb2AmsxAGa8tqHucEVH9",
  "key39": "4uDs8NyUBYvsNexnJY8Fpvq1CgeS7pa15BECsW86y6RLpGTe2fU21z7pgLruv5N4rFykZJkde2VWLUuPZ8AYRU5m",
  "key40": "hERZk4hZkUp7sBqg9EjND7D9a22U3GMdub22tDdNkFHdPpBWo6JcP3dvH4MzD7ZX62J3jmTm1irRHLsggJx11EH",
  "key41": "3RXHXmMy7UT78yqRTVmf5HBKqgQdziaigcuWtFgfoUNCU4T5JcuDwCuwoTtGWqocQZhtzfRSEFdJ8gw8SupFy9gt",
  "key42": "5XubYa3zC56CJ9KhjvSfoAYVYTZbAKLAC5PCkB7VjmjwYwCBXR4Fa2d2tdghNSWP34PXXjQoGhgS13kwSxt56pfx",
  "key43": "5yU5TnxAe5oeKrjSL6PB5CWbiEAsWnZb96zPodELdH538oaYZy98j7iKK9TUsx8TJstRHEYzCwPEGW5V4Uvi2YkQ",
  "key44": "4U22cUVhi6F17PCbU7H5wAVpuAX9vWk5KpDSP6DFRNbScoGnHDy1CFnriF3duMJNoMpuneV8uKwWij3yMswj3FVF",
  "key45": "k7ckgrVcbdhozDdo9FHmSy7H4ZqewDfB5cV1TuqrFjNLZDTykL45BEtPgsUQk5reYPvBY5gS4TY5FWXgwNHEwzm",
  "key46": "2g4oP2NiMGGa64sQ5xt4TsKiG9MDxBypB9B9ghLCXoSgU7tHV9udx5AH8vQURHAcyHVvJ4ZYs3KVDv6RChr25gWo",
  "key47": "3rDFzSbfew7kRRnrhUXRhTjqSWyN8m2tF2s9saLR7foZoxFpF9Mc8RLjN6arajXoN6VkDHEJbKFpyVXcED4Nr3eh",
  "key48": "5q4a3UCbSCX6UWwHo3dS7A5bAGiVPQHVheDVPgYzNBhcwY6qsBu9FV8TReFqMZFpiF49kWEmgAadUsU7ArVC5ZAk",
  "key49": "4XcoQ4jZHEab38nfChetuwsuugaifRhn2uGiP4QeBod2BeebN1EVRXXobEu36VGQziFy9q5eX2TM1tX6qytZ27Xf"
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
