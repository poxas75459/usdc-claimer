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
    "4kh4qABVtwN9mr4mbMnQf3wr7v617rQmjYyahp3LQPpnzcvviPFNSQJSRjVfeQCWZc6e95zRThnpXJxF8scbc7Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4brZrHMsmc8XMRhziaXDfZVDqWj4Wtjm3rFaFupiESN3EEhx2LxBLLZbd33RtorTA7394RwidDKnjfkYwo5gA9",
  "key1": "C51ci2PJPvDvWMXkJb8cNJ1LhvnBhTGxV84zHWv6AQUinXsdLDtTsvp4kjZaJNFW1dJw3fYb1ch1YW3crCRRzwq",
  "key2": "2EZjRScsvRHuRAa13SGCKvyaXrq4FrdgYpsqbCebqiEwwW4wLW3wQyBHBsvA6WWVdsjRR2rk6t2caHm4Cossbdnf",
  "key3": "2cBA4z37acpsw2aU4wfusUXBNaHHypmHoP3KmatJp8Nz2ZxHLsDE3yqd1PMpNS7chBgMG4pBY7DAMtEyGSd1siSR",
  "key4": "2qVMigj1VQfsVxJrZtoQCwnbTiNdJR1HWSB6oMqKviYasx7T6mWsMBqwBfNCLFVa3zQtRNL3qSPgYUkZeQ85Q7Xw",
  "key5": "5bPCapUWqibWWFYnRWLyNPAxSkjAdMBpL5d5XU1KuNhNHGTUWTVp81Zc1vidwsrDGZUNN8J5hnXo6Z9v2fyKA3rv",
  "key6": "48cKyyDNTogNJSA82u1gMEqvQ8hS3GVSZu6it9BNNesrhNncYb3oc4BcYsgkua1YosEuvEX335exq5nA271bEm9u",
  "key7": "5voMgDNbmsZehLc3UFotJGamFuG1uweJYUugEsMAwUNSfgSo4ZcjzKRDfN6dQq3Uic4eqzj3peKtBk5QiVa9yCmQ",
  "key8": "5wdv1UG3vf9NUUy85sWskXpGepEYY5GSxnTHV3CdqbJoFzqMpgRX5xe4Kc4BJxVt3haWKLUh9ZNUGbJgZYjcJmvE",
  "key9": "4MCtvNBY4jUNkRVqZuAUoMD678RuWivqBLpmd5Dh82ePmRNPVYs8ioiXAADnbRAMHsbf4xsBAVT6PbxPKx5beoZd",
  "key10": "dH32rHAQz2ees6wEy8vpdB34VRCsH1Wyfd2eGAchvgD54WCbcfi5e7imycqZ77zzMjAsQEfTecTbMU3JpeRHckP",
  "key11": "MN1jmNKtR5pMd2pY2pdhtRy4ttUjEWi5JM2dEdj5mQNQquWva489iNDmzV7TZkjxriEHja9wfehNAjRTne6i914",
  "key12": "24PdmW458s6jX374nSfnZBwq42ueg1JKwmesFivtEusSdAi5cCotH7A6JAER2rHpNKYttg3Pi23UVdWbQJi2XHo9",
  "key13": "5ozMkMuKWF4Csk8Q6BKBup3Jj8GWPsxCHa8BcBu9ar4SLpaVf5bqJMenvVRyUoDcSyvJ6rGMMCSZGfaBtjKpw8RM",
  "key14": "5hr1XaZd6cw42WH8FpiD7hfY7wkx2PySsAj7WcHahdpMR48BSmwyiKZLjDGesnwmg9dwDTKMoHA8Pm32S9QWATtQ",
  "key15": "4XgjE9dsBvF4jy5EnrKxX47sJiBeW53mqvCqe8WB2jMmyxxEwxBpPMG6cfK3sgi2gpYfKDLzGQoSLTymSsBKbQNR",
  "key16": "2yUgXdGfKyp64tgNxTNE4cPiBNf5xtWGVPLawVoLBm33ogdFwYysvtQ9HomEJP1Gv257NqdjD7u8jUf4nwAm9RdN",
  "key17": "3zT3FvcEJjxGRt5mhZWTrZwhmw7UTwbMthmbkizFhcq5nReWizAhQJiPKdEV8vnGKpv4S15hWFTPeweyaXDEKgLj",
  "key18": "4ZyGDHc7CxZHcVYLEH8zF41BdjAi6GmCoMdKwyTmpPbTPK9RdLqPD7ah4BkBaSsEChMdQi8ZcXyFJn4sitD7TZqx",
  "key19": "3W4yZHPRF3pCieNuZEkHTZr1JdcHJ6DiERaMay2BzZKeTGmC1zm7PFxTB2AD99NGz7bvo7SAVKKCcrkNjJwKXuBi",
  "key20": "2Gn9At6fZ6vsvefSVRgVM9uF3ZCvNWxdQJfmUVYupm4EN3kCfQSS9CYbNHDQ1TjraQLEAeDCaus7AA3wuoxitPb4",
  "key21": "3xv2ZRnxAFm54DcLV8PCcqEbZy3xShpvx1bZ38eWYFNpeADa2NMKMZX6bfQhyGSh1QHDjWtV6tGjJF89DEM6BcdM",
  "key22": "4SLNqfFX7p2F7PYLQJRnhpe7iLvARyN5JivvWEK9u7d5GmK43JTSXXdYBEWBwexgLdSKYjSMsJNJax4BBnYFu7Sw",
  "key23": "SDFytn3hbdgtSXAMboYAzQ8TxXZL4jeBnUdnr2bTQmkQDhjELsc1Ej3jSgStML3StpTbfztpgZPec3Go9E4HgNr",
  "key24": "2481UfhGUabdvRLH7RsE5YXUXFM8eAu5zW13vrjf3MxqapEU4zAKoQguothyTHGaiXMRho7DdGHVTjExSprdxVs5",
  "key25": "jJTxvSu2sLp1s4yvQVLmt27FVVB9eJp7KW7v947bZf1yKQ1nqqhBaJ1FZWJwwiPcGA9cwg5Fm2azgeApskXzV8w",
  "key26": "a3XkizwnmQKS2HYEHVtziVZ91ds9vrcuiu74YQ8qsfs1b2c3WztyzEeQsFZuEbkw5Y3HcfCrgSu54SpQMFuDo7V",
  "key27": "5yf3NneT5FDV2nWdRT7pcS3y2NytwpWMVZGNves3RzhjJ464b6dLiKw4goyqy3HkAHJnbWENNcw5hFYbxFG2MLBs",
  "key28": "57FufshEUZUnhFWz87NeGChF2Sb23wPAuVq4Vp85rSUmBXvB9BDrnTAok5kosHdkLaoZ9YDyAd3BJFwB2MubuEqs",
  "key29": "3wA9cPZrFmhscjCdUzC2gH8Nv666XW7qMtaihPJSmUERd7P9fDxY3eYhwzKbTC5NHs67bwWSqo2vDn1yzsGwY1BP",
  "key30": "47c4g8JxQ9wCmPu5wyVbsgoWcdzGKuopKgoTgUNCbUnhdwZjGs1Z3n8KRxEP6Z33YozzstAeb6NeG7CvD4mfqgq8",
  "key31": "Bd5NYtopcKpy6GUhM27zwtDxDBzJ4bzU1v89QixgQ51UKm3LTGnu41fNiNuaKx42yQ9giexzTgPuC1gV1JRkvz6",
  "key32": "3XSgSrDY91aavALoBWP5o1kXbskxAd7rDPn471aHdeKgFjLro84qiWksW5xc4btPeTFZUJurNUKpi4LgdhxavATz",
  "key33": "5w2SugVPGCiXtX8ZnLeGZ8Tqe7SqwXvBmMoPvGfzyuC81MA9c16rAKyTymqg11jA7TximUgKQ3V2XoVjEteLzK6u",
  "key34": "55pXbyrrNE7tpHEMBE9MUEdePBbAHdZ71HmGAT8i5q6VpZ3dNRhU44JRSss73CuZJJ6wk4c9NuXabhacC6o3CEbN",
  "key35": "xNWQ25R7FtcKprV8fqqAXhHf7SQMhHjTJU3Ae9HF8V16aV2PLeF3cTUS5SuFH4hdxDQJAD3mKHwS5XhWsRuQHvw",
  "key36": "3XRASS34PL6tmJj6KUzR2iAUBfHWgJsiJ6q8vZdFTUY6Jr5p4PqDUxFhdxJDk3SWf6H3YpdjfxdX9WSFvMmqxed1",
  "key37": "2X592YnNRkGCH4EjLp3LZ3Aa35Xre8r4Ycg6SKJKbzLnJ2sRoDEAGtEgVaFwxWrgT2LsymnGpxKrMU8Fz8hxUf57",
  "key38": "473c4HLHh5X9A7wymd98rfHSLBEGnYteaTtS2xjwJ1VVzSbJuqTfvR8m6vNbk2ciVs98Vozagw9R16vTsQNeZp1G",
  "key39": "16GCoSB4nxVkrDa7o2w3Dv4oEg7JE5nEP7uPWCHozkZ19z2qqz2kgktzFejim6goKU5xyZvyNpq2zPqJWpymDDh",
  "key40": "4LiwF6EPs4smhFQYuFn1DCjfGuHqXxtaD4brHKoo5Z22YSsW1ntre1QYyCSgAryMBxWsiR6QJbtD5qhwxQhBnoD3",
  "key41": "3CvBu3noEi4Z6gWATHGHuTwGHVFp8k8zZbwtG4ieVW6aV1Z2UoEmJ7UAgSV1vCv39JfALDw2dMV7pjTAL984ETvy",
  "key42": "3MJWCujvuWTaCQQzPvQBe56cFBDik1z4bWPjUagKXL9wBDWEtDrV4zs8kHLwVKceDvQHS4SeBKYM6BA9y1v9BkyE",
  "key43": "5F5h4qzT2sTzEYTj7roV8biurYdZfyZiL4MeRgaGkiAmRyX18hwmUkWMGjMmo3xdTzWyKgadNGgtcmUwWdb7UuUN",
  "key44": "2T9aguPmPhmTuGQvym89pSHcEYNQGLNdUpgRjSFcu5ocMgi7kgDSX7djpJn525Ye6J8gUzf4f4aF6DpP2np1gNq3"
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
