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
    "3fGuR1Rj5pZX1bRo39DsCAAWmxu4D3eQZbi6Ut7XU9Z4wAj2J2j4MHcEXWQDTewQyRfeAbK7j3HxDTbVZPQhi6wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ehvBpqrbDzsUg6cekgf3agTTd93y222qGonHJY9naQDE65tA2aurSDpjVi9WYcktASMNa4qNnuknrQJtfGdZAF",
  "key1": "2NXWhSQZT9PzafuwJwbRATzcN9R5TKaS3kpZ81GoynjrjvmEStjkCnyX1iu3exf5MfhnfHoGVXDqPf5EmaaPVCLU",
  "key2": "6xSFXTxEHW6e8TVPBs26yeVSThCFAyuMrE2q9gUA2fKNQULjEdR2UosEKJyn4Yz1gnRF7SgqFE7cnQhw8f2X8qi",
  "key3": "4dndWVTCJpiRfZrR3aKo6vHwKodsqM8uxysFJmznc4XLsSeM4bGyF6NmY1bBiwgKotNrgYmfZ4vRactJ4LcTjyrY",
  "key4": "3j1u8bs1tT6giE7AkT2dricP9tShpiikM7mkamPbD2qxsJ6fkvTRqAHtrX4Jv53Ep79wFZBBKsHrqUNfVKF82FpM",
  "key5": "2qwZkeXekT9M8kZTKdEfJ5HyASTkg7ks2z2kg66jUwtuLa9xVxPVFPBmuinuuFDxHR9eYiWaSXHGeW4MJrQ4QQ3s",
  "key6": "2MqEuZqMb3ygQkGT366AZpZF22WBKwSZWdVgdGFZnYEzequcKNE9oKtAUatYR6Xfxk3fbP4fWjnn41tHStLu4mWU",
  "key7": "37XbnGtLKfqnXuvD8h3DZVcYrJqgNzK2dFDUex3KBTD6dnzFBAtXqEzCzoREkmPEaxpATmHBpmBSK7EopgXf4R2c",
  "key8": "4YbjfW9tdig5AP3TKkB45DnxAs9CSQCTeenxaAXUjYZFwjjauTd4xHggBj9nrjTZuPGy15DdMiyeq6diz8x7CjY5",
  "key9": "5kVpnwkL4pv3T1HznrdWUSxhGANWcaSPWdbNyoFHMTgz1brCX8qUtFNMumAJEz6mK1AguL3CbAvxNV9VEQphDeyB",
  "key10": "2Dwr87sC6WF2aGmx7UkUmaAFkR1L96krx1pwVWpDnPzBxX1uo5kTv4roqcprsBEmZogaTpwkccqzBSPJK2TvS7sK",
  "key11": "4DoZeQ19G1tvfBKKUPk4XRFFSykpxwAgtuQfyHW4bzuxcPeJWumMe5dBvttq9pSVFmDJ2nH9Z5xvSc2xzVjg3wmM",
  "key12": "3c39fXVJJ6kujsf4jmcZk5HUT1soeBJyf3wfoBwtAgEpccCBnJ7AZDGW1ZE6QdJfvaotjpRob2Hv2QgSLpCUysNU",
  "key13": "4EryvSAiHfQXytnTsyJAwporaZhrVCEtVycuMnrDEktGPStEjb7qwxN9t2inLcMvchcvmzXWcRni4jD1Um8G6mxA",
  "key14": "xQMEBPTBgj4xs8vuji7BViXFDoD2KeMAPVrhBeZ7Kc2EzJAiLFhrA2rok5vzAxi1AhmvYjKhMGAaAV2kKAYvvkT",
  "key15": "2W3iLexaMjyT5VaKnRykeKRe3z6W3XpbE4YHVkGKrhASdF6WfJcV6kJAxFyLVieWUtDHyJ13gJKnppBwfaBCosh7",
  "key16": "XUD1Svgax3DGgTef5qr3jruT7SdqqkHWf1Z7msfzFT5YoDgsiHsgyQcdMGrfHstAT9YYrrBaus3PRC87T83dnMQ",
  "key17": "2EGHGWT5xJNAz5jVUYPLXmGbHjgVvababCUZJYRW6YQ4wMRN3Hc2vkhSx8vi23nTeCUkSyJacBYaidaxnAEfoqGz",
  "key18": "4zvXHiFs4TEBtZyHWQiGB4DbiF48tKJh6Zwehpd4YG9u3JW1bLx6fA7Z6Q1AoFLT12S7uF82HC64PM8KHs7bTQPp",
  "key19": "3EocWqa4xxWZHTWgw5asXhRzM1d6xBiLcNUjaAyk95wGVnkg6HZwDXs5iFvnSRdmR4HUqdoNgTYHUKtFEGE5mcHh",
  "key20": "5A9v7cMkoMdeoLqsFaGpfySfKVC2r8MQtDti8fM9tzm9jnCnSVGFqxZWgSYpT3BpLygsakuBbWjzW9mxdZ4PSMYj",
  "key21": "25riZU2fy5wUYugxrxRz1rUcjTGiYQPgDF8YwQMeUjedVF77EE6SwXnEXZj3p7t6w366MXTHFHTdkZgCVttPermo",
  "key22": "2L83H8jDwCqcuFRLLGUx97GHBsesVfLdjNPEkT7d1GqJgQL4K4NbDnmakaQ5sctxbLW8c9XDQsFC76LJTy1j5cGc",
  "key23": "3tQznE7sBWNP7PX2PCcgQRfNPWwws2dVVccwTEmyGixdNDycfPf9G6PcmWFrVbQeF6U8wpPPXGBwFt28T9HfjjdQ",
  "key24": "5vLN9gMep3GoxYoCWCmK1C4AjR72PJx3pNyFnqTtvJ81sMXdhj6uAe8UXQF7D82VCwxQuMqe3qaZ1ntoZFfurc7s",
  "key25": "2oo3FL5eWMTW3m9V5cTGRkgRT4ntqJcq37EnVD31jtJiV3dRRzfwWyiZUJZPqG29WEJtUfrhvxXLw2GtDebCfsPH",
  "key26": "5KaR2wQAuVUW8YUquU75KMkHUnJwCKKUzcLAdUbLh4JMuXaH3J38qgAoLePM3bfCwu3yHua5A9zPEUM5dvHzryDG",
  "key27": "54fHAyN9dKWRAtDmSS4oGKgDkVdwqzqmm7iNLRutd2M1DAtrHnGN9jKZySgJ5MqYUzQFHB97GsxkF56WCwHenJa6",
  "key28": "r72u4cW5FgUK6RtsgZKsL2jAPXDb44nY4A45tFmujsRzqxUiVJAjwL9p6nCh5526i771yh9ZLUCTZixvPQAo22f",
  "key29": "5daBUue2dTtKrh4NcgPPK9KA52drmuFahDZg7yqZ1zYdzVZJ5y4HY1iyJDxSZVHbPrsPepufJmwmMnNGW35pCu7Q",
  "key30": "P8BXBVTeHRfbpev1XDywdVDh25o1UAK9rFFa1FUubpC8hgRRwkNK1SkxVCtZmK7DxJuSVJJnUnLtGvzNm24kJM3",
  "key31": "kRPFPMqiYvcKpRndQ8SAfLRvXXbviRCd6TsaAQT2wjfCZCdc7Gyp7tfs4wWJ5UteeKHHSJrAzfmXVeg78CXSaK1",
  "key32": "42xFVYaev4ne28bDfwHqY5A8pMneViV4rRymuGTY5jtmMRDWWbdsTsvo4izTGd8v1Aa76FWWDS6i5ZiQ2aVqMUMn",
  "key33": "44881S8BBfveAoBJXjgFD4j31YE4KCXKipCHCeABm2FL9fSTwWFL5NUsYXcnUZSHX4R3ehweDmLK929WfHD3vBgj",
  "key34": "5VU5QT5DbTq6uQbgJUbhYN9pjeTZzVBwNFHNke8GtrYXmAAt8JVJy8tFsgk4zPxqV9gWMijM6gnCoVKLAws9AFz3",
  "key35": "5YtiH3aGBT7nhj5rP9hvRrRcdcfLzJaCbYbRQGAmipnQ6kReTytfFUPPo5znET9qgfLiA2CjKMoSoiJfGrCufe7m",
  "key36": "EwCFgVBZYxXMNen9oQXRhx9Ys8Lkm9ASnibp1srphfo7umGo5sWyoBkagrZTVb5JMcGC45vPNDF1JNATA2qpebS",
  "key37": "WNo4B6yPSc7Kz2xxG8y4a5Gyd3nqAJDWC9QycxbGNeKUryj4vF1dguGiopAGARExi8fEn12rtwPEHTdi7cFVJRC",
  "key38": "3KtrM3A7g2Lpbdbj8WEyqEzdrZdKowsHm7FyjipvyBTnUWKNAkr39oE8Y5dsaVbvFPq3x9KT95K3W36K1BQLpJLb",
  "key39": "x2xPzzGsWdkj7Q41dJD6riqbMJFf4Jh9QTE2VeaRqyZtr5Ze1Bc51mn6oqDNUT68zQcivsRKGPfeM75o932fmxg",
  "key40": "3uu9x7RUcoL9XMaDhqQhpYV1aNt9fNyhtfeoUBBYT3Bpt6Sb7w5vxYkZPK6bn6gYbuHBEQ6TByimcPBMzunyFUba",
  "key41": "2jANJyYCuswuoiueybtXFvmFFUYYnxtJ1VjG5CqwpyCNqAGkzc9wZcZTKXGEV9zcVCpWyTU6BvxS75NWzCUsTfAK",
  "key42": "4NgNKfAPnznj2i8ioa1Y3GcvoDGfZzGUtvPDKK3Jdic8kUwL4Khp3jS499ekouFv185XJwJSRiL3rsffNMuqWVTP"
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
