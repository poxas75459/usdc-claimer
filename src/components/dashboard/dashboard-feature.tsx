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
    "3GKFE1CRtvSEwuP1WgbyrNYejePz7T17azsUQZUXAq7WKWKswMCURXtcBfW8MZ7GvEi46HsiAYwNQqYWymckScgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYx3TwcfcqLGCajJ4MnLZaCEthSSEEyVdSHDYs6VhbxRzsAZh5acc7EnEuP4SSxbmR9m8fb911bGpMRWMrAK6o6",
  "key1": "5gDWAm7NQ5BLdapoa8X3cq5cJSHVKGnH8QGqCCLrmVoq1MPv5X5iTTGETLhmf5Q8YrFALNbCjtGBCJa1ZWSge8oR",
  "key2": "273cskRBEtnuri4uKVaWJMkfnDvBcNsyuikENNEXnBFB1upHfidXsbQPzMjZCR8ZwwX28fMbHKTK8SjKhPkKkkPz",
  "key3": "4Sm5veJpoyjktoiNTWBWsBFbUYnGZwuhAhohTqfsSJnaVJCf6sGcNuzKNN64Dv2Duw5Px7cedMLt8mKDThyWNRP7",
  "key4": "2K4vWXnPWMdN5iJJkpPg6RWRF6PEpeqaapdTCsizk2v8ySn4UxiQz5A7Z2f8WbmPt7CzpFM76bvbYw8VQDybQ6io",
  "key5": "48xV6ft2aS5FbCPHkgfva55Y5yEsG9VGkxvKuDH8mZeZf9jPf6suisDYYE91ouE4Fnd6LRYvA1kKMy47Xy4sYVyq",
  "key6": "2Mbjv8CaFRJboe1MxAmwFSQWbe8WRMggEbQXfoxn3yxVLcikEtAri6NCqMsdj6B1NME8pKArHzXoZABYcdfFg9nD",
  "key7": "3H71dDgXoNFuVqeDq9PVRX2gT4YjW5wjLG6PTjZaiHGKiVnGGvA4ShBevXheHNVFDhscQhPMFXmLrnM1RxBUFZcR",
  "key8": "4BpL4hh6CFvQkBHfQB1yCeiqEfiCEFxLWqk8kRDDWns7j6hNDWunBubRz5EwmrnQHvf1vsZM5cHavp9B2ajfvPRF",
  "key9": "ywkiSA8wyrszQYXGcbXYy7JrKQkzYvFNrEsidTfLc8zZa36d8p8MB4wJ3ycHZ6vroehDw5vhMGjVKzrYQiXrwKE",
  "key10": "3A34QnHssExtyXCBmZm1tbWWQYjxKZsp8ULv4DiSZJASh26YaB5UvBL4eLVTLLjLCVK9XX41x1CY288aQtNzBiXr",
  "key11": "2bCzRmHUwNqSqME4kaHAFnrugLQzWgwGV7La6b4riECfdHZUfi4mUBoyUMkt5biR1Erx1bqSXaxkZcqwp3jAC9oi",
  "key12": "3CKJr3oXw4kYS8mRYzKnan1dFA7y4wSM5HWC1nmp2ZSbUvSans3CKAjV4rDX44ogYzbbAozp1AEV6CbjBbL3y2g9",
  "key13": "2138gxaf3FY6KVdGQbuTwaZqYNtggaePGeX2uTFij79XKvakJg1jsihTW1CS9Enw1iGmh8yH9ou4Hcp9rCBm1B3e",
  "key14": "LXWMFZvBrQjrX8f7tpeKjBXdCmGbRA3YJWktAqaS9vgNajeWDUdU2Nx5DwdZF4DgNmJEnEDnwNQiomNhWE251He",
  "key15": "5mm6YgXcHcaqi9U5yJ64YJcvvKr13AcPb2eSgHMcqDfXkanr91FVdUu4k9XfF2fsJq3ZBmKt9X7wUzLxwVjyUP88",
  "key16": "4HPk7KNj57p2j3BhKtccSH7QgKzm3ZLPnrsGVaDnt2xm2oFWoPVyrTSkKB2QWQRj8t8tGgNhjNsFRoCF6Jb5Q5qh",
  "key17": "q3VFTSGTAfoE2LoHhUJcCuHoU8FgUzfJ1whxPN6qjFQnLhS6XdAiaio5SvT5DJUMnfrffNuN3WMM5yMUTDeF5qJ",
  "key18": "61F9dFkKpVvFjXmZrLui4a7tegXjy5gRwrjqPz6G3UHis82nfWPP2T99gs8pWm2xAAcqGoYGy4MmBu3tFc1M5a91",
  "key19": "315gA26S9YgoRSvsaesV6MmHVcnq4F7URJP1cPNFmZxu7YTfj3v65BgwBVJBEaP4zw3qqTvqQDFEb6TnE7AuVeYF",
  "key20": "3rRMAuBL66Xu9ZLoifGvaW2xNDRXoUaQkS574RGpeJeWaQJhw38SDkPJEuZPGwUKhxK1Y6A7i7FmJBNKNC8FVD3a",
  "key21": "RXQ9ZqCeGQM4urXJXvc5rFrz9wSSUpx2CXdagVN7CAAbicKwEhfSEQ2uzrBD4EjdgseNtbKpdGjLEgWzRXRk1k5",
  "key22": "58tYgWyHTTEQt6YqZzcWe3v2jyToUBfExhiArMpN6Sn9enMPAa5nNXvJVYxRQnNfnDPFWAXbgsKkhQcdWwipvS7Z",
  "key23": "4swQpLNdFfRaanJGCAgWwJZMVMLdJbjhhXRRyeZP8yU6dusyPaG4mHLaThNksDJTJCuUjDBSWZsoJFPzxnxj6WCB",
  "key24": "twNvm1a4gau5JfLsKyTcePxPB88ADBmbEz67BVvpiiarYqBMMo2YTms8bfMzf7QjoWSTiUBt6KzhhuP2q8b5v9y",
  "key25": "CTWy32fsZK6aXYYc99Zksv1PmSPfiHqwmwa41g6X15b4X5DzgTwmSYYbgEdUXjgmFycbxTAFbJBjNn9xdErCsHu",
  "key26": "4JMFmRohYgUm7u5eGRea1NAWPdXoFpZNPSm3Bn8tv6wmpz9gB5cbQCtAq3n2E22Z2qgut2eT2LrdPteyKPoEatXX",
  "key27": "CLMV4hvwReCpTuT8tYM9juAcb97fj6r4WAxBPo7ckqhcFCBhxesL5DFf8k8dzPUXevyuRU7YLbhu7GWvGmMBcxb",
  "key28": "2Mtmo367EnFYUvVZfM3A6U8vmtnzUzcJujVtWTV9Ybf78JbTLEjoWH7WVGn83LZffBVAjnLHEKfBiA5UY31evj9p",
  "key29": "3vXSrmWMHjb9oECsyyPQYVme6BznJa8tDeT1i11j5fGKpnfRaciiMUND5fsKzA48vCmCdv8GGwcrcwD1PaxETj6u",
  "key30": "3i31DuAhNSURTZ5c8y7mbtt1QLCdKVD1dY3gJaUFBBUj5gkcWeTJRBc2Pk82M3qZG6UuzRpNASypmzu9oAN3vVL1",
  "key31": "56EfdQK3YnYtD1Nqkqi7ACMWsRmMZpohoj6DD7BUCQ2QiFx3YXr6cN6MjkSWBDWJS7AWo6ZeoTW15CE4hqZrnrXE",
  "key32": "GFQnv2JHdAuNrupmf3PEdkHtw3dKKsxcAwegTh62rmCJ9cj5vkqCKpf5UwUgTASCa8QAsArrTU58HH8T5bnG3eX",
  "key33": "4v4jpkhSebsyTYWtyVaCPQUKD2YFDRWgPAYjoYM5G6aU8Svfg2NuYLHFyzwB3W5U4RRJgwDGspKFPUiUWuzeynD5",
  "key34": "5zZU9YjhdYXjcZmBKWAJPs1eTP3YYmV7SZVjELRtuvFr3z595nokoSkcSZN9YS72rRur3CGMxtXZtFw48mkwNcpW",
  "key35": "5PD1m8jx8f4978rguCrkidLmS2Gue9uub4PqTqzcv7r5B97CREaLp8WnXyR27R7s5jAzyckeGNv74XR7Q8Q278Lt",
  "key36": "31U2b9y5WummVGMuKU4AuyuofyWNgccDyCngnRU3TsgwA8JkKszMpXrETCaabmhs1UaAyjFTTKJpNSmz8e2PDxt3",
  "key37": "4bDKXBwRp4ZRrfCpQnSnk6dRg7yhGEcoK9vu6zZfbvPVUF3MMi5fwmYrnCnBH6uH3iVA91PCbSju3TWgpUCobnWR",
  "key38": "41xAK2MNHWpLvpnmvzPP4gS6aDCJCtQYUp8pxu3QbjBdaUBAsuqSqvJXT2UL5Fwg822wu3J22KVExqn5kEBhpRMP",
  "key39": "dZyFkHdyhezLZgjcBxEQWH1xPi6DRGjX9YViPn7djfCBe3EyXik5u9KJnkCWtUUaKgZjjaiMunfNEzjkvt5yVpn",
  "key40": "2hLDGLFtBaAiSshbbarXV3VuGaifw36z3tFsBqkrS4kVEpN5vek5peKPKzfSaDfXdjemAaLuYPb8uZvSgCjPHBWM",
  "key41": "41dqQ9Trc1Y2orB6GxCFtsYukPUa5CXuX3Ek36PPhnzuBU5TfnYDJYRrrEkk7RntMnDhQt6KMMYRAE4Q1vYrJVmf",
  "key42": "3zKqwM8Gs9eCyGxY2kg1tx9mNnqCcFxGCUWKFw5ypAp4HW95465AL5MkGM1PfR7fJai8pCy8Dpo4RD4vgKPSBUvr",
  "key43": "3ZgK1FFMsCxbWndvKkH3UcNfdGBm4tCBum3BspMPXsNvhvr93Ku7AaPES1zJGmJBM3ZaK3taKi3WyLK4EtTG6E1X",
  "key44": "2zzq7jWhzhH4A7eMHXUNY3DbKC4y7HAncW9zoB8yQF7ZdUNdVFeXLzCnsDAmUrtomatE4YrX35pzuh4SvaAkabPf",
  "key45": "48Hu5nRSciDgX1mfzrUPCezub26L4vfFk5kqeQJ32ybv6T5pPHsNkYhMHSED7vqoVM1uXiUysbftUJ9mLKLLLFt",
  "key46": "48yaU9gca431UqA7twGKs7LxjRG1HroxSrL7kcb5WAqJsjMZa53dfQTAazkU9pDP6NgitMX43xBw74ZSnWfr6Ubb",
  "key47": "5t1Cm8UrXdB3yGJoojGYsCAeuMDkTh6iGSZspre26MBAYoVjQjconVCjeVYR662L9oahXmMWL1R7ZbbyZzSbjnZE",
  "key48": "5H6DcmZ9azxdnXxzZ8PDqAU84ek4xS3ySXBzGLi5eDoLtEZq9sFjFM72eCsb6Rc1PjCpcC3kT45U9HdnTjqe8wQc",
  "key49": "5Ydx6YPFY6FX5GvPMX1cnxDPbeTGSEAkXtWCLhos5mPgoyBJnYt8pS9M2noHh47cLMw51cjFPDehdZqxR3J7q8Bf"
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
