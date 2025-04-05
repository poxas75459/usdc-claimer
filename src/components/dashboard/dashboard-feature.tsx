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
    "61MEsSKzfqoAbUjBrAc4hWyEW6Ctio39sCAXXCC6xKmN2gx27YEYiJ9EZMXCNeBNXYEWWoaaXT78EmxAU8SpCLmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xz5g4Gvq5urmQabtUWpX73bQA8ok9poewcoAvQ189eswYhoGjEXAjdh4XyFg1hc6kq4ZuGs76EePe1SKWKvK8JL",
  "key1": "5Zh8bF6G7y4PNU3vSW9AvckDfT8SK37ADz7uEJWa6BgMf5HZKNXHhAuk1A886eM2p2Y5pBtPvjAtf2XYeR3ndaRs",
  "key2": "3ioPNqkr5ZCLQq59ne4dUWrhFNE6NQy1X2bdb1p9nZbzsjEgVoETssFXqnKrQaHg3rAuAfjAzeb54kMhKir9xELs",
  "key3": "5BDTHYF3o7P3YY8r93RPzkaAdhUjneVNCrG92uieY49jQThYhkvFZgg3xiPacLACCPewq7kp5Jd4z2xAmg4ZcExG",
  "key4": "3ufk4q8ugzNvstuRXDbTiiGM4hsdid1PevtA9Ba6Sn9eae1YhSbA3CnoPQJMHSPPFNxh9mnB7kMw2HW3cgA7oFrt",
  "key5": "4DEHk6NCYBbsYPtE1FJosADgcXwS9cSs2ZL9u2xvRzbsqd4PXv9HKkZTjiThoBH5C3S4dmHasKi7Woc5eR3mBA4Z",
  "key6": "41Mw5PMSSN6uNeteHAUwbkQDnxsLGMTZLE8SXANiCShLGbYHChUZQ1gVajbo5oaXbTt5SMBJgWqn4rXtjtxnE1cn",
  "key7": "41xANwEuTdv1sejixon3uotyrpZGWkMTG9mQYqfc8Ff5g8n2A9frsGA1YXFZbfJwUeY7pjUXzPY4rPkSVY9uFUQM",
  "key8": "H3w9EFUxr7iy5rcJVHCq6VAzxzyatzCToawEpPqXGzNSJG6LWQcEVaCwTCKwGenXEsBQNUbSrCz4UtiWge7ZSNg",
  "key9": "5dnfE6qDmxi4XEfzCSonLJ68BTrgC8hPcvNF8M5LAV6mrNsjGmh4SdR2D8CTT4J4JbKjuAvj8J1HAmoG21efjnzU",
  "key10": "4p1pf1P1s2sA6axg9HY9SZzu3ePv9vdDcbkaBpmgW4SdyfKpax4VLqccQCJdjLUVgbJEgizE8uKkZiGfLaJaRu7X",
  "key11": "21DrdabaLWbc89kGXuSttAk31FTL5XeKPu9GEJsSiwXyRgmrwf8Lt7Sni7Z2vdQkTekEX2cYvmJcMNUpPn6dwttX",
  "key12": "5yXM24r5XjgRVF9oWf5GMS8D5PVEorfLrax8Z2WtkWA4LZx1WnQwmDNYG7z9wFUYTBg2Sw24sTpiEaXsEs2Rnh9U",
  "key13": "3REqKdYFjCukWEcERFithUHt2JAdKtZNrniST5ijNg9N5G3i3y8XGM3DWQJu2iw1NDM8YtBirpc96H47CYggCkWt",
  "key14": "42XwzSb94bdsupPox6Xpc6Rj9uUNpCrWzde84xEDpzeVedZja3CCdyoNecRcYFiN8APH8bLbu4oLTMfNfgydJNo",
  "key15": "szzpH3jaJ8HjLp36aiDsWq3pbnQfMc1Tip8kdqNPXctnEQRS5H6apfdt4myZ3EwVLFARJM9Lb1MhyWyLbbbEBsT",
  "key16": "2b1CykKopBkk9kGcBMSGgzbnUVt4ZutUCqSMBhUFmgdSBU37VXuvr866E2ZAyUqdSK9qY4Rjv4Cxq1VesGnbtxF3",
  "key17": "3ohGR47tVtBpvqE3xUGLDHsagco4BoUHQDBDPJUuREiYni3mxNkoZvtPn7SF19wQvCLXX69qmaJhcSSYHZdgSgdZ",
  "key18": "4nt4UTnYN7kDboxwhu1z2TXpjuUeHiqZHhXHSK7oyS29W4H6JuQnaheyguGP1mZNV36MfSTE2rFwPrp8QBJggnmz",
  "key19": "3XdpdcfUSacjRcX14QagjuyZeK8Lhdrvegu2DBD7NKTG6cYEGYQoJQbU9DeL1whvMYTU8FgCQ15wupvPcR5uFwSE",
  "key20": "4tnWsKu6hddkg8vJJFRkrbEuDRvH21RQKXt4t7rCsro3DYovdzHMKqwTWbkehCdBpTArdyWsDTTX2r2WYUkkQFL1",
  "key21": "2awhMMRZmrgVR6RbYhymjsBQ1U1aWFbyJggBng3C5o4VCGfSgtvRrdU4AzLM1kVagPWJrNatR2rCq2stZhStf8H5",
  "key22": "4iT9ggw8H6RVRSXfaY69pFjus8PC38Gyz6o1rsvEgu2uVv6n6YFRGz1mXcWEoKnwVJpPgUxTfK6PNKb29Frns3LJ",
  "key23": "4V4NkS4uRR6Qmyhihe8gQKmispQSfVfFKH3MAXKufr4aJStgaz1Gi9RkD8GoWsVE5AUz8AjB3D5qPYfNbUHmF7RQ",
  "key24": "4bLjsRtxVv9behm24Ddvr4FdFedYeXQg5MCes3fuPT8FBt5t2EyqT8wK8KrqKdsV2GYmV8czXdKCUVjwQxcTBMEC",
  "key25": "3A93J2QVq3ekrFbyaJ9ToYL9rMwrrTpFedjL7tarFjKUnB9D5Ey6uhzoAq61BSZ1HV9AeMAEpq9cn7WRkiiTic7e",
  "key26": "2jKBcst1fQjJdHpknAXNNUQvPKGocSg6UyJF1JRaPW1pRYj3eWiutZoGYVWJWgyNqXjRCB3N74E4URyGSAc4dMGF",
  "key27": "4L1EWBtL6a5MTsH1yay6tgQgrjRdLdSXp5qGPQUkRCd79oj1w3q2gQDakC81ACUBYnh1A7wZGwbGX712Zo7WGQF4",
  "key28": "5idafvdtZYP7Evo6N59qSiruWzM9HkgZvSjQQ8WhDmPjXgAF8bKpGVcTpktcLVkVtoDqaNDf5xZDoBp24MNh7ghz",
  "key29": "4Hp2WdDtLXkwf7JeAqvtqgyLe9jzMNtcgsBWgftnTxZnDzQ5iSxzW5bm4j9yjhqsmmSZ7VGbxVUZZ9ooKScKtg1j",
  "key30": "255uxqWgRpi3iNEmHtFy2wPQubxHSYd2XUtfy78vH3uuTCg5pDMS5jMBv5akwo14iVagvxDWWnVE5hCDg3D4Jciw",
  "key31": "3dcijKfXJiVX5gnk2KMHKfrkPfXtd58GQy8gWDpbpZoskqfoKKKPRKG5tjGbkUHoupVftrXj9SE2DFysa7QPXdUg",
  "key32": "3BrusfTwkwfiWoR2bXaxY3avmiC2yjUpgrLuoTB2swkgKnpDyXrwMGi68DadQqd4x3kKPEq4Tj1neYBoFZNBmyRL",
  "key33": "3ENodRyziZb7HVRNo49fqgwmU3KYnTDn2B47B5vKwgUbhaqSrpUidXwHVQoE9kyYcEx9ejjSyd58WyVNPjRKhfh4",
  "key34": "brhFtdJRtnfArFdo1xMbpCa2Vd4v8ZQyss56P8VQimidQoEM9XSJWYN2rpzcNk8NSmWWtbpxPrySg4RWiu7mdPv",
  "key35": "644ePv1GrmqAEwJcjfmekFU3Mcf4iGT6AbGFXrkqag5cs6SUvwAqkvdVTDnDxFUUJstczMkhEgB2QN7iMiyXznqj",
  "key36": "64d8ax8r2t5s7TZGEpB3thbmAVYbuAqVaTKAhcUbiCiRrAHmYrRNNKv482Q8J35TCNMteMsq3HhuKKgZcsvNntvU",
  "key37": "3JpviNgBuDveGywrUK9AJwBJFMnJuQong8mKC6uUYZqhtnEpdGyTkn7faDbLnmPDFFt2X8CL9aMcp88SQJXVU1Pa",
  "key38": "2R6FxVJ7XNzMsmoNehjvECUdqAzt4oB5FhNQ4559LAAyRQwYpKKSuxz6DZcLEm1diGefzd35P2HD1ehgsLuMFyLz",
  "key39": "xzNsCzFiSYwoiezAY7vQjWs2gabK26kCFcYPDbJjT2tyZivkEhqzua3iPrSxqvPcyARERj5awa1BoJQebGHjXd2",
  "key40": "2h7hoZFaDvG7yThBtxh6fEgmNNVyTgzrNd3per9rWjKVeHuTxZRnrsrMVP7G4bqXRWi7cS3V8UL9ocLmcfQNFkVt",
  "key41": "4yd2inZesrZcJv3RiEbyZ4JYM6vnEBMi1z9T7QPME7RgpEdgDKrnHjrvSFk4SmKTTmaJg3h15rvQjxgqiju6MjQz",
  "key42": "2wJru6fzeTCZLjeMTKMjWjLJysZFCLhej1Bq4dd7MtSrUMMCjH8k2udzQ9oudmsCm8WBqye5FSzdPtPjzFyqUwAN",
  "key43": "Gyki4bq7Fti3nee4W6ZfTqCaP8JK9RCyWFUiMvHozckjbBAiVuioWwmDpdoQvnU1txGbdPAjNptfcjD2jdN6mE6",
  "key44": "4aXnBCysKsztGAeqjcW8arjhHTfBoADvpGfXDerz7THX5iFBEWVJibPzLRLiiZmbk7ytksq23tqpQv7JsYRL5fEU",
  "key45": "2HVXNKDvcQ4ATYgjTTKfTTgMFAEuoig7kHPBnsYNkYsQi1A8ZQvKmyK8bNq4M8XgbdzvP6oMZbqBcANQFAheAHzk",
  "key46": "c5SLxxWJr6vEnoPb4NFrZYT8Zc3hGzb86dJKVzMEjoki9iMLN4rHzQvgiCFSt5X9P92VHFeq8Ha8zEFjedNy3Mk",
  "key47": "5RQUStNSL1xMxubFywaee2WFxXkzbnvPAZs336sZFxWwmptrc8JLVnUQZxa5qN9MxaLHr9CxLdLHYo33Tr5n9P9D"
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
