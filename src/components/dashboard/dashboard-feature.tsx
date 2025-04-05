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
    "2GvpH5n8uQLzezVP7kBtCVYjTCPiCZcvPnNZW52v94CjaoTSBvV4PZr5opgBX1dGEXC9LfM8mFZtJZJpLdFYmGdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJJ4WHH1rULyrRm1p8LtggDEPYPopbFDh4pLu9zBDFqUi6kenEfYLcuCHg7n7WFSs9G97bLR3TXPpDNBaPc19mA",
  "key1": "3ZVAucFDcabSFGfe4mJgD4wskF2YyV3nLsF3L4AGghk28bGjSc6GkNc4qgq7kbnVi13LNhRmUdLPMq3gJYykFYzY",
  "key2": "2EYj5C4SX5kEYwFDzdD7GH7dyMc5iMawVzAYbTbEa4uBEXm8BwGgUCtE8sNqGVDWpheJaLqx9vzpQ7a1o9N9yZ31",
  "key3": "57acAo8r8cDcxreYBMd7Z8kWr4YoeTvajAvcPL26GSwdgZfg97GqQwRSQp4BY55JyFwWsDbKwzqCtTMcjg4XGKcj",
  "key4": "WAUMdmJ1VMAR1t3EHXAVB1VemjBs5dko4ywS3o6Moz4rmjxCEDXzeewx7Lw24feKqafoxrcW55voBcBMpEt7C7i",
  "key5": "4aM8RrZdqX7ENVDd6JZuS9RKtR694SY2r5nXmF4WoATLs4UYueHKiUax3JCs7Z9P3BgVjz1z36doJcETqqwG2AQw",
  "key6": "esZWWKQ9on2PCRCUjXMN2jg5p8E5cVhv6gWDaK4yUJeGdrDhagmbLxAVsWDxrw8MWRpirk2tSsqhCccfZPvVRet",
  "key7": "4deQkYJX3e8Rsi269jb9BMGBxTWDdTq36jE6uGtpfGQmt8ZQmpr9SAACjQGt1xzeh4mgTqothECGGJBUKWFL5DXk",
  "key8": "gPJSqeWe2gfmKrqrRv4FaSiDJZzPAR4ZAUfQX2FUoALBNoGHpKsrZsVSjr1DKJvnUN8Pj1uiCimYLU7Z5YorTt9",
  "key9": "4LnaUczaKhCXBAELp8i75kfmVaTeDkqJcBvVmUZDSGc98Qz5NbMp1nCmNMeKFBNAXbKNG2d1EfNAHFLaoUDQRG2F",
  "key10": "2V5PCzAMTSKLeiyDYbCJh4Xm4bj5KaumXGaFLznubEwHTkGUdgjocD25Asx5qF883RFcbcUB37gGDMZmZBkiBk9c",
  "key11": "2hC9WrMf99DUBv5z7QgVzt9KfNLoe7vyYmg3L6yeK34Mr2VztvDc7igZamauGyR4ddN4kfdSdCJVZD7qq2cgGRph",
  "key12": "5h9sNTbhqHgUyFrQPHD92GCShGZxtzY6tuXkm4syqk1Z9UyyPGYxfpb8smsEUuzhXPCFs6HZMa7s66PXfnYb68x4",
  "key13": "bJGiKhfKMQCELVfMHRjuCmrnBW5sRq38eLjWyt46LTAXeTsn6Aj4Czq797ZQKw5JqeEosefxai9QVQKASJixTJ1",
  "key14": "4VxazJ28P5BtmkcHp4wMj1uvM2Pa2wdcouxaD9EgQ6qkjpa9upafvbEdPWmMM5RqvT4miYFLN6wkGdU38p7Tf111",
  "key15": "5BALXeXDLG58HEGLvhoTe4aPef8cH6fqkJux2Gft6qSo3KhHqfLpmmnJWhv7qemU5V4kUk8GTEdv2aw3pKPvM8FN",
  "key16": "2Ms81rhUdHC5gaUvQDGEeWkvE4Cj3GqPgaoZAkrnZNTKYAQ9rjLbn3X4hfSpeikS39XS2fshibSHMBFjMnY778nu",
  "key17": "6448Lf9QNVAY3shwmSTKNi5WNBiqh8doLRbBihrbKXGxAarDWsTrz2kypjgcRq44DPHVMnw3n3Nsj3Usrm1JB8GE",
  "key18": "44iMPuV8yPKuMXfaKt9Yxkp8PBW86pYbqZRUeM9U2Z5oBHEhfLedvPTZiueMGXEF5FPhM2e9z82SKsBaA3xUJCAu",
  "key19": "3c8XvuZy1Fyx5fy2hrMwpHu1go6RpTDHdfJCe7mW7k5or1TCqrMiyT9mus1coUwW44qJBqj1YPfW5z2pncekoPeK",
  "key20": "64MxmLhxjLA3Ehoteros771hxxLBJC7ZX6QvCMHLJWdUqd7KRSYYNXCAh7Nj37hNj5uQaDLnJyiCKRrEAktCxXTQ",
  "key21": "5aMQ6SDtnaXVRRKS74M8wSsbVPzvoqZqzGFZRQcTPxmcnKRyf5tPrWDsWPgau4mrQHp9FZSKZFjaxVowkDRrpe8Q",
  "key22": "4rR4V2xN46Pig2AG5N7jMGxXBrjrWzT35wdi3p2Un92ZnakJDuK3iChXx4CP1Cu23iniLTdFGJq8mBiRx36JArg8",
  "key23": "472C1pxjDCFnS19DjFJHU4DA74e1WGzSbHMU5HhQYmfnZTinjQCVZRPLA6ZhfkHCPL46B3s7Hpf5abz3JGk9hR9X",
  "key24": "8Y7Yj3uEaiSWYSyMRpqy7tTANPuakbYApcNsGzzefYic5r7e2PhsmX9x1JSbGWLrgDN6qYEzADGaP7qzTajF5GP",
  "key25": "5RhgyXYhhSjhqXobGinJeUFsmXdk1xYsZ2pXsp4KqRkwxmbtJ7WSXmrQ2B8r5BxxWivaJ2p7aLjugkJLtV7wTGYM",
  "key26": "cr1w524FDYU3XLd2JQqkktPqH6Wm7sfaruiZPqKjLpetsCTeNGpT8pYxrSCztrXCKWRpuM13z7QXn3zRKAquY1f",
  "key27": "4kGqfAjKzLfZuhUhzvo51oHD2aPAKnwYDHz6EWGuUyvVoptnXJErMtwb5c89gpQzRzctP3eBtJwEArBS4KZb3Df2",
  "key28": "4CDyz7c3DLnfNfivwKDkoEdpSjoAHPA94gEgpiUUrcmCQcwt7bAN25LTmhLAtGsKcJyErkeG9Bf8cQG9mo2DBdTT",
  "key29": "52v3gMRma6FM7u4hFeC2rm82VBYmApt82QbfAyUE5Esb3j88kwQLuaRH83dvF148ZcxWJ5ieHnLySoeXGKeQsoHZ",
  "key30": "63wpu2cw9ZF8F2CgygEdyBwEE5YGBVRDMTyn5qL1HGNLermN9A3BZrz4FECbY3MBjmsx51APTmFDSbik32UHqgZ9",
  "key31": "4bQW6Gu6nSG96M2F4CikF6mt55jLmHAHrk8daEZhJCDn9GNegNSG7VSj35nwcsHf3nF7DiKDMmzWvbkvYKpDSpqv",
  "key32": "xhWgLuRRqHMLc9oy1VgWdEZ7eQvF2bbJosK4N35bJon4mGWJ78n7kLeyVimWCNB8fW6xAxxG7K76YhkV6sfwtp2",
  "key33": "3RKyBUDstK9bU1vhyD4P8xcgmx7hG5VkyWfBSG8G1tpRYa4dYQ493ZhYugKhRQVj4SJNRGGQVE5wGLnnA2q8hYHy",
  "key34": "5at36gPdbhfEjgwBE9iJ3EKqYDZMPjNCfaFQs4fzEajDG8BEb68cpkgoRbiYD8S8uPLk3GEQApQYTio9LjDQJmvx",
  "key35": "4BLMcsB9bumsWg2kLLL7Z4wtfYbsabnFu6FjUm7CY8gBDmx78LH8K5Gctj9o63e9XfBdRxWTpjyfwiyqgeBnsE5v",
  "key36": "55XAihuMdCghH4VjfHq6KuqAwkdD7KByZ39PeFzx9CRn9x2d1vXUumh5BD7vSkYWyrB4rRA6Ldm9V5gx3JhJg51x",
  "key37": "49gMe4RCtgr2qXv7F8nszsVCPK7C1G1DwTa8PG9RFGRYx6nQjiG1WRSKewghL3r8Uqd88uRadNn5TxWsid8C8Zjv",
  "key38": "5JnT8xFpf2Za1u2uHSSHCKMVZmRZ3TbC7dq4U3NvqPAep88pGuAGDCfp6RdYKTh3G5zBgeL67DUprpgoBCfE9oXW",
  "key39": "2QjtopfWjr3HjfQUna4LCHPnwJ8mDpE84ag5NzhAnzmChsVi59NDMTA3MMhnYGDd6BJoVrFMFse61fkW4FxUvLfn",
  "key40": "WiFaGtJsVFcALmc2M5rCQf1kXsjWkpeB2ZnHtTQs2fvb2dCi7V5GQSfu6D58AYRanJRtHLxppuot3Z7gGfXu2hm",
  "key41": "31PXBs1m2GMEGXcMQM9uUMnhWbNHGd2gCkzNzaakeDveXq2jkqrMn6yAo2MG7JpTjRcVwVMEMBKmimCU8KnMvajE",
  "key42": "3Z3tjr9RzWhwFVaqNFWfhCPRrH883M3MoYm7pTJPHUiJbaHYuxnKG6wpscRNESTVU715JzMKokP38qtdQMwjofgr",
  "key43": "33KfJnq1z2dtFq1wejRRnUFjFkEUGSA1Dmfx9mV4n5iWzDJw7Ru1q5dUyVXFLSm6XEr166ZZy5mervrdfURbaTeC",
  "key44": "3RA9sWBhr3r4Latjt2ev388UbdnkNJLRQvwosqaKaeYb6sUjjqWSFkguSiNxe878H3BKzUAcgnCmduR3LHF3bkgE",
  "key45": "fpejEfMBgCYkrScxyZURWyZeZf1Li4bckE53QwVWBAGyvxRyHKSytkkcRdUyt6gBsmUqRyfp49u891JTTg99j7c",
  "key46": "2iixQiNhSGt5jA378UsJ1zmxG5Ai62KDbkqZcrWx7WWwcZTaoXUqg4NrYR6Yq2AVCo2pFexxsHgrCcgJakxmAoEo",
  "key47": "58pAgfL4wvXRLHSMgx2zmoukM7aYe3HekShSRhgo6mH3x4vJpVQM278kqFKxoNcX8WywhbewrQ391ETAs2ydCMRg"
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
