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
    "5jgEFH1tkwHBAf7bcg1T1XhFbTm7R5w5LbKunLbukB5R3rQBVdqACcLH6wCnf6K41cGEnfcwPyFcuW2QxSMfgu7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wq4cViB7sDyPwanNqXkPXpFumBzehSBaxt4vzKT6U5J5EmrTt4gxQ5LpKuBiWRaY8p2XWm4sjGnWb9Z7nvvNdrm",
  "key1": "57asqz6SaycfUtrMCTsVPXVwTidnAsmHtJNd1KLvYWaQRNmRgj4PVyTaDXpa7c95R8ZuCoRCJE7aG2RSNxmcqZkN",
  "key2": "4fYmARewkZYy7bxUjPUVzC5tC6q8hfN5fm8iUVvUURALNYC9YSd1xt6VZcUjhmf9zuDwxfrEBwcggjg9EEFACyjJ",
  "key3": "52PkPEWFEj8GhcRJBgyJ1py89wCfV6erpxUBk6C1T6RsCZQcbF8MMkU37d8M5WEGTbWC8NKk32QXu44Ywhaw5Vng",
  "key4": "2DCvnqQekPKAyhNWt81gLZbsjcZdHXnTGZQXroCsZtQJZVSMyi9Wenp3eFD5zZ4XTRGh56HthuTVREvXWmwsE7Au",
  "key5": "NxRaAQCq94AFTRsKx2abCyJPeu961NFAXNZCCa1DkuCoxLwBDcfwZbSdxh7WQSnfRnBqtfWanJ7NSJW3ETUan4N",
  "key6": "2YTCcBuicKn7KSN3cpy1a94X3YNcSHG3P83pAMxe1QbYyv5v3cBU96zyxokxjxnL768WdEnCPwFU8mbReajV4Pq1",
  "key7": "3p1YR5VRjdmEqsCXD9edHkeRxUJZpwKS3jiJbG866zwZv72LjwS3Cdv17fnVhfB57AyCpc2TsSfUfDVKUAk8RvR3",
  "key8": "3Cc9dBrXzqXngwdjWoWQzBtZScxqamd8SbQ62si5uC1uqhgo94Vk6FUVTGshGsExRsmsV8F4TAgcWDsmCNtJy1U1",
  "key9": "7dudYH41gt1cD9m36D7VkC98AeQbf9HAAz9Uo6vSKVMFju7URzCTMFQpArebLvQ4gjGG8c9ymrNyy5R5V2h7WiW",
  "key10": "FwLkT6LnwqeNq4TUs1EU32yHGUuf2W98YRPfmAJu4NAJ1p5buyDFhpKcact6f14tPdEBEuCGb1Lr9fXxPJLxqHS",
  "key11": "44z226LP9CXBGDk98zPcWfg9sFb6ytJ2Lh7KBfFeapN6ttrbUZ4LMJH8myXRFLySvL1onid4PTKtJ3GWKCWcVtLD",
  "key12": "wTRB268F338QxS9gq5tB2AhVbtjMxy3K74J9GAo9Nfm3bKHfAy4vuMkE3mecG2HsL94V44AVejmtLTHuUfwpVcf",
  "key13": "46bx3KcA7bWTr9AyQ42aZt3Yo1AAvXn1YcaRqcG82ky3gZcJh374Dk94obvktjEn3n6K8io2S9gWPzpQFnDskQg3",
  "key14": "3W9cthtJ2TquPaMg6ZB2nfGKLu8TTAv7dPkTt2xfA4wcnkRg8sZEs3LuKwCFNdihCFdJfaB15Jb57PhXJtcWaxtH",
  "key15": "2s7HX8esmbSWbpW97TD3RHhfWoU9wVKsCbtg11JXgQ1SC5wzttKu7HnEwp9ZKrAkTX6mMMzeBXdod18zRMDHJFJn",
  "key16": "2oSyggai5Kq9yEYZ2r3rD78WPQ3WGCtCJNT82qTTLUNRpDN6PfQBSMNvcRgNdnt3tSPGjLvcLPctqYG9qotKjfuQ",
  "key17": "5j8eN15SfeY8jVTGKdmNXDUnvSCnRTJLmEejWkUy3rxGT4iTfucEahVuXatKAgLQGYT7YWuMx1HWhjTcS5EMHYXp",
  "key18": "5ZR6KFkmmfCbKj95WnRx4srQzUZLsTKrUWefh36FS6HxJsSi14RbVE19F9hKR7rLWZfwM15B2mMnhyMpLu8CzYQY",
  "key19": "SxVGVNt6MM8ZeBZsB6i1DwFfPrboPFNoPD2mgRAErso9dPQrDGUznXFaZ866ow4Th1k3YFhVqaB9NnewpYgVKrs",
  "key20": "5kaLLY2fVStv5ydpywgyabrvHuzvffAsvzN8KiwPuZS7fqUBeatREgh7wz4Taf33GdqH1vFdL2yq8XqaUAWHpQMX",
  "key21": "3m1nnM9KcVaaK9Y3FQ4doVxpJShB9c9aAGptTUS3HRf4tp1ci2iFkFY1njGus4wsTZ9CDQoq5dvd8sPCQDKA8Jy",
  "key22": "5FrXm2Ao3dSLQCS7RvuyQXA6LC5Hzj6FzJYbkqF68zhTsAkk6USiu3QrFbBKziF228b3nce3gxbwbPgY51fGCKSC",
  "key23": "5MG6cFdVzp1cj7SNXUujS2CqmDYCbvgvwN6MdHr8AB7teE6teG98DwSBP69Pe9DSVhkjQGJrT77ij3zpdZ8tQb7n",
  "key24": "358tpCEzQrMcuv9kwdFJpjRHiGfYaG4v3BVox1u63mnt6NMf2PnHWHiwU6ELn4YrehyCMLnzeccgFPDVi7BaRNQh",
  "key25": "bJkkeKktKumnopQCfSN95Edv5HSg5CXS8ePi8VVn9ibcEsM1CsfBnXXPjkQ2ubA6akvAGSqSS84wPCPctJ9vPkZ",
  "key26": "3X37SfvpAaQ32844HcxzeTCTGtqj2jTheiWtzWkdKh4Y7JiejFUZABqWgyrF91ZGMngjvwqDJ1AmssxLoxksoqAB",
  "key27": "2q6SFCG68FQfuhUChRZsnAP7JeuEFJyetzCXrShNsuQxJ13YoibET5SvhGdGiTdfsHkt5oRgX7bZeJeWnkRM2FtS"
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
