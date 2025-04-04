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
    "J4CJmPdZZoCJpZEHJydWNtLoB4fr54yBS2E6QBcHvAZmQMN6Ef9VCdeRpDsTwjD3qi53r57p8DmNUAQfqw6aJh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8xCse8xeceg5c27egTpRmPKhZ6RENqyUjUaStkuFXASSbhZygG49btmAk9DiBbewVNbHMsWsw7NeTbxTYRanKo",
  "key1": "2fz8cGy3kaWrDQ1zqhuRLi45UBsWQ6hcz6N9xmST9iUpwk6PhTSeoAJbe4ycWCL4ik8fCGis2XXNLVZN7LV9gtjX",
  "key2": "5RpUiNcSYAk6rW29XqU5hA76Ds45mWcK8fS6DfT7LM9qoyVVWE3j2x5Kh72Eena81GeR6x7BvxCi3A4VZMcr5kCA",
  "key3": "51Q733UEMMZqFM4ELMgaMkFLW3MNPiJjAn4hc2iyFcom72jvczD22PjoAhNCMMUM2yRiFw3QpkkUxPRg1eAo4oJp",
  "key4": "J7PnBVvSyvd4fPnhQGUUGiJDXH79Ar9ZQsfjUaySvrPLCGxt746pB7Cy7LYrjZcYNBykyD97wJpiGjERYu8XmpL",
  "key5": "35AzY7MKZnA4VVLTVsBt7h3Sss9PAhDiW2r2zC88Uau4Nb5hohuNHJGzCWYJC9i4iSNvfCvWuzEL3HyeSxUC1pS4",
  "key6": "4h1ohnjuHJuhMD3eVdigSdgLJYN3wV9y21CFi5jBfm9uosfkpeeB2zA9YnpBPcBaSbZS6zTwX5yizuyuf3i5todq",
  "key7": "so2cbdHwfEY27cc9H5q7iPjHB92gJE7NpK2DvPpEAorwBjCSYjDeS9AKNGRdhR9gmvz26LVtZMs3AX6Sh9hFpAX",
  "key8": "3ZusP1cYERNS9t3rzPA71XLjxjmH5yTwVsRAYcqCh2b4ovGwP8ix6ZwmC4eBRetPdK3e3cCu9NVnFE7rBFj7mTE4",
  "key9": "3XrpUQJBgWJRTgNrvJWaRBMfAFQucmh7uCwqZ7kQERRWwDuzdC1YvNNenbh81dyB2mpegzbVZdVg6yiicMve62rT",
  "key10": "3V9rbwq91zkFnvNYFJmRmMaJMkfR7jwpP3RaTdin4UUdjV9tsBhJyjhxz3ey6RyrkYWUT8vxsMq8uBE38uW8W7kr",
  "key11": "2YZk2bGPSV2Cti5Hw1ondWk5h7LFVJp7gtjmHkBnbSMpZkfizdmZia4RJeBQvFiLAs3wyBz8rusCxbR8XXgHBtJD",
  "key12": "2dU4HTtSozYVwsWaqo94hw21SXMa2i1kxJTXGGwnXGzJ39etweaAvWYUh3Cg1GhWDQExbKZZGHMfEEqgMH4oNoss",
  "key13": "5tXuFfLd1xV9zvNY9bTLvCVo3UzH799bmxwNRBt4gJLEKbDMVMsULZVTXQpb3wgebNwYupiUwU2iBU8RYMZtZVgC",
  "key14": "2ETyo8rF2M3Kmfz1yut6XckhAzMio1Yio25Y1f677cvUs9J3wUKbctmSm2dhVy8RtVPcT18uZaCZCNUjSG6uHnac",
  "key15": "47B5pQgSSx4pZor28vagxoTCyZN6kUFHDqZtXgkeQJnZPwKh1dYyYkiGXRjTBHP7NYXKE8MYdRBizjt4HLJ8FpLD",
  "key16": "63pBJkHxnXzoUWFBnyN68tte57xpPsWn42UAHBxJ1wjRMoaqDsEZyYbwZdBHYF6aeZEoeJos2nG6ygFynu2v3ddu",
  "key17": "92SeWbju9kgTtxUykYo9NBVhr6vYR5BY6FnrzgcLMfpNsVC7SN2bwNrXvuf43KY1VKk7cQw2Cut2iiUz7yNbz1L",
  "key18": "tFXL3mH7ebyzw19x4FvGxV7W3GiprTWD6bBELTKvWRbd9qNLfrNVRtCisuwjQzycHxLRDx335FsWZK88thfxRE9",
  "key19": "2bQNhsbWeQBDvDmENL4isqcB24cUW6k9J4uqcdJv7SSvj1etxvyn4Xq2T8uszTv7XfBxiAphd6CfLdDkgGj4iVyt",
  "key20": "38RGF2vwfuCVbq1eeAJnTv4anDM5BgH3wH6yRQQsybcbpdLVotjFS8EdNUJh6kabR2iumYaKHtnzGhYpLkjTY6rR",
  "key21": "4g3EYSQcSmiGkMro96VVtGv2QJSZjUW1D61krfvyiuWtmQVC2DsTx1sPsUct6uRGo55qhkMzcDrCJaVT8isQ7HWo",
  "key22": "TW2UUZbH2SD4JpnFdMjEg2JHMPxUfeP7S8jprmnW2DAGfzaAHyFZG9LsMqTtEs62FAQxHkssjntFuWooYJnQqut",
  "key23": "5NPKJ66aq4v5pXWpA42upT79QdNwat476dcQHF9mCtfNg49kmb5THQQV3BYXCd4MXJc2iT4irWnj7uU1PmadR5vS",
  "key24": "3TMkFAnBorMvZJPVeDfZWMCAJAyo7BQkKPB7vzmvw5DHAEXbppALpnNEE5f2bPZJS4fcWgAPbzrx7vKiTzduNWxy",
  "key25": "4d53izjXqvgtApfsbAFcTXH5PpxHwecjWZnvCaUeMbr5ASHVHNWv3QTmiR8iQcPs8VxQ8FWE8Rj46XeY3RX3Sakn",
  "key26": "661mcFtpwHV5s9Tj6Q2xVaTHZqjNCkgrK2ZpT2pcWekRpd2HE6Y8Y1CQUJzSTe1MiZXw8bwSoMtDE1rYVwDDMCn4",
  "key27": "5qfXzv7V7Y3NnDucTbbYALtbJPYVEhdxcD11tYF373UfguHcn4KEATAvH3hAoYBmCVzw1XxbmS8majLpsE3U7eNc",
  "key28": "39pJ1PkpFvqrMdynZiM8oxWropbhoPRUGGLYrEVXpyAbXqdMxmwgvdccheyvW3kxFDdGo6ptfavb8aZkBf46mN3w",
  "key29": "61pWC62Ku4MyehqmRasabb8GZpurw96AYkEfZXy8Q1jvd5fi6i3JYHcxURC9BpKfYh8XgjsB8M8xSxcgYvFp984B",
  "key30": "yPdJo7P5wcGnvwLWr9uFpjpNyAEd5Hx6a17hGKmYncdZpX6sqKbxbvt8eXF4gH4GxLsVMbNKSnqH9w7CH7EFygZ",
  "key31": "4rgXdDindn1VVNRZAcy4XzDgbitnDoB99evZDK1PYQFjWm9DZgUeckDtqspqZV3AXSsoBwLN4PWdDRfzYQPasMB8",
  "key32": "57Bwvoq2DThtmAQyJZAkSGEJDhqDycZokzaM8MoSFaGz17qC5GQQrUPUd7feb9jPCDUUxh58XgMM4hqxtgGxDmCR",
  "key33": "9AcgviYSXhkA7nezHAJceV37ZdiEwwgeGY6wCCbueXq4DPq5gmoSAVKKP9Pfe52FBnQ3okwumAveD9YLCCDMmYu",
  "key34": "5csXuej6iwyaYMp1UV5AN4zpZ47c8AMPMKwd4jVhAnuVWnk9RKNnewCHPwQ1psVAb8jbMgyckptY4z1pBJ6z2ovf"
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
