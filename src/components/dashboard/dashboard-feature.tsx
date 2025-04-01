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
    "gjTJjfw87SKA599VvR8q6SmXDagioG5sxqiC8QuwrLJCU1SNHMWLsZ7tKvFAN8Xk69JfkvBjkPLi3NHSrtjrShA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7bdFJ1gcFgYaRrCB25ARjmzLeXyZxXqFLkARigfeGUS5QsBjYtCghhacQLg3vHRxJ44kKjUMpGHz2VngCyHoBG",
  "key1": "2dD3WVroh9ShGSMcLkUDg1LsHwcZRndkCdcSDVQFJtP6FCX6bDmnssPAsBvByoChQ176jT2tYaETWigYaStvg87G",
  "key2": "3xtCnzwSaXk7RNE7zrC4gfw5Dbc98YVk2qUCo7CzGMV2VQZwj5rufPyDMNs7FbjTTXhKpZS5p5GMjUt4dCMnyPpn",
  "key3": "CAKxJzkHafGRYKWb9yggVzfq1Jm4L9Nc45hZjm18JEjsfa9xTohqTraFBNwQ67nWrpTzsug5597QTNxHZRDXpPM",
  "key4": "3j7gtSCWA8tWfVr6FVGZFRkkhXAsefkGemaz4p4ixXBHf5mKV6NyJrZWhyf64jdmf9bDN9qEsYUSrpHajsky69aF",
  "key5": "63dAwN4vMdCrUg2rqmeD7EKBdjFLm7DwEVjhB1brxm5vPedrBuuKMw4Nc3efrRmoEKCACqBcxtpGFLQPKmjGD6Aq",
  "key6": "2VUb5pE76GboEHjXm3BHp1HNBy858ciDV57sTTHLpfTSSigwfZp5ZCu91fZB3RsesCU4F8gs3xrv4VkAjR1hjEFJ",
  "key7": "4ttWZVAJmSjf4qTtDMTCQHeYukX51t7DsxnsGRCGJu2Muw8abC2p42fHD6v7sYVk5keaACFEastf4LeFC5VPHimi",
  "key8": "38kbY1xt8p5KDLYBgvfbaChyDxn7omAvakSYNds3Vutw4siogiQV2cbkMSb4J9QRfA8AorjxnSaWtaSRYReW6tQ1",
  "key9": "2x39hCnLCoZm9tWT8jTkTmkMMQNgyVAfU1pLfWqfusEw1NDtnhR7tmeitRThhrytKS5KDZwFeQAxMyScgHkKQd5n",
  "key10": "3GVfKGjmPuzZ8GTEEG8E7UtTn58BZc1JzbN5H9EmE1C2MsQAivBCqaT6gLiCtnMoYCYLvZJAZEqK9568P1qKcsCU",
  "key11": "35nDr8NgPtdSrWmJiWpjcLhmEk2yqmoAqvqUnQ6QrhtLPcz1xFfgFQe2ff4AiBA32TjdLAtyHTupZwxCn1oNFN82",
  "key12": "2DQTs3zbzXTmsC8jh54rCFJeqNgBCxtcyB8ggaxeg3SXTJyngNmHSUCLfXvh378Hx5JxRYckKVsgbB7o4GZFGFqe",
  "key13": "2Mt7LGmampzQ2j6LDgiStDqHofyxvFFaEHwWZaBJZEZ9Xf1XGVJwH9VxBwnneVWyBDALcU8NUGt1wH5t6b3rwa98",
  "key14": "3GybLiMDynbd27DnyV3Cot6mdfRZQdoKUbsjER7W5td6K4tXhtgH6xBzmQK6Euz8KSm9z3ekiYmVXuNjdSdmPqSs",
  "key15": "5DxHRKaQT631f1WwCLsq1ba5QvjVJ9DnH7YwEUnak39Dex2ykEQFJ45w2tJS47gAvAXPwvc538t2iE56DnE3kVkp",
  "key16": "22oAwHuwJxZNMsJuCPFgxuFExM1TNzndfrasDzzDzeGm6wAPBo28H3b9N5j3VogbZybYgUowSNg689wb1ENtWYpr",
  "key17": "4kqqVqDnJY86g6Ux6Az1vmrePN5rnupmTgUWSLffpxVrGf4KnSkQWWLivbEHoa7niPJ9u18HCrhj2A4yz215s8C5",
  "key18": "A5qUUAdqnBvzJriqjZJzCDSY9LS82mHCTqwG1os5kW3Pno47ozpFfxFyz2hJ9VDp8bW63DdnLnib2UayKE4Yuef",
  "key19": "26zTeE95kqH8qYiJAqRZnLNL9m1SWcsgLJnmXKsd1eiYLXcUpjgSATsu8LuWMAaaKTeUWpBJFkwdUfnjvaW81vej",
  "key20": "3CLu2PyjfSBRS3TqQT1nR23AbNiLvyx3LwX5TRBQMQscqnvVnweibWYAoABZwPWobPwYijtzBHR5vLYCM6u1C9M4",
  "key21": "ubQ5fAULVst7Kk8xqrCESrXuQcqRPxMw3XtqcMAxvoQT4DXrcwvudUftVXFmmgVi4TSSJRkJQ1VkLB8ag8EUbAz",
  "key22": "2zhfCBtPWUMh3nhYiDB2VdDTYmPwB3wz4yAto5FXpsz8RwtSGMNX9JXMKvVc9vxQv8Rc9Bmuz9HtKV2eYsxermfq",
  "key23": "5TmPbKgPqn9nHMWryKfz3X67oiWV2CjLURZU3Svx49vFjT3MzsHDKCJJwVdZuk5DriLUGX6wWBD2d7VhixReGWQq",
  "key24": "4PNXcihNBnLhmAukW41qZQACNXpMWzqrafKebbYceqZgNoLmqbftgzJFqCzbekYX7EwKLDZL8zfxCiHYURy7YSer",
  "key25": "4tdpYLQgHPHLCEr2Ragdc1fFnhTXJL9hpC7weD81XejSuX8UBRckQWA4FN5sfDDTmquPjwGE5MxYqhZvyhPsaALG",
  "key26": "4Yon1wLAsr8d6Wprp1jiowD8gK9LGeFMXRCfpUxQb7yq6Yj8knH7kghdn3PnxwPKwdEBiGYpYwbUvkBFPgAqBLmL",
  "key27": "4ZMDhdMSgL98G5Ku84681DWX63xRVweX5cRb4KkB3VPvprWshbXneNhdGLkhBi6W6NzGWfDmPzGx8DNpHFGmdDir",
  "key28": "3XHEQMPgX3m9PYNx6CscJHswwwgMWWNCLwsZJzkbf5zBntFpfJdvKPWNuQAyDbbGrXvBF3acrbhx7Zyi1KntnGYu",
  "key29": "5mE9iRvoyq8UqWx3sJA2xZmU5tjZ9tQb2mG398dyqwi5dAQ6Ef9m9hGNAAmRQ7VD69RuQ7nVtu3R84ThM8TVaodF",
  "key30": "3VfotBLEXFtLNdcaz8U1HDLPvtNqRq4gYcy6iAsUdifFusZa39LpFTi7nJyxFocSixYBwrjTkS2LpFCYt51scoJ",
  "key31": "3W4zKwMbCHMPBs3GjJ6dL6uFhuhKHtfRQhAKRkY1HSzgJe5DReLewhTB5aEFnewhAxCc5LCVBDbtpX7xChvegRug"
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
