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
    "qRQ4KL9dpAJNxBs8ActYVMMnf771PLWoJqyRE4xQAeJZ9qGpAzxMqtpWovxrnfMwxG1X9sfyGqe3d62KC7yGSc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASZq9RBkGALCtpRHCjvrS5QNNX9csLYK3F5CjDrvWBs8ssGNXAUM1YyBH31TSJ5455jvBDY14J2RoJxCHRcQS3y",
  "key1": "2TxUNqKeeWzW9b8PoUSY2znHDzQWQ8nfkQw5PfxaND1fEZAk97Eiz6PCBUVC8SEjouY2wenTptubwnRBFPYLCCaR",
  "key2": "hV2YRtezPbsro11s8K4vC9LuiMBzkTpBA3Y2V3Bfphes2fFaWk9LZBqJ4FmBA9jXv4i4SJXkyoDMWX1tSxetzx4",
  "key3": "2zFBdi2G1EbkS4yU7FdEv25BApMi1Yrs5HESGj8qXJ4kN1ShueoN3Y2dkW5MApgVLrrbW1NCZT3xpqsrojy8NSLf",
  "key4": "2rzQ6LVMGAJs7ZZ3uMwqeU9t1GCCoNQTcj9ggQXbKFCkSvRQ1RRRzP7a13zafWR7cisGy2HsJpvSqLvqpcbFmA7a",
  "key5": "3P8K3dMDEk8D1PRpNcKw6Cvprt3FjG9rkrfN2hr7gEnnKGs2wuunwy8BkRv8FWvF5Pr7DdZEbzRHQ7C6LZYKsTic",
  "key6": "44jnTbndTrEUBUXd1Acz3V56EczuUPwXEVbbi7iepSdoMy8ZrFap6mdnEHzafhoUDK9MMxmB8U7budm9trY1Gika",
  "key7": "3UnjV3NjYf4TjcBhkVB3mMZE8BpN3N3gm77Rjha3hyNxarM7k4XbYnN62nzKRKNyyChYjqE4aXxXTNEjnDiZrWma",
  "key8": "3yXnuLjETDxNUN8SJoNpUZUZGxwtusgFARrLTCyk4G9nQQeun2om228U5s4pjdxCebyMW4CyVMTc41E4sDqDqdwN",
  "key9": "56C5JBXyiZvqoYbD4N9VRXKCDjVbQG7h8sVm23sPwLJ5tzTtZg2rzXNSV6X5sU3HGXx2oD3ZEPpwj3my9nrgDq3D",
  "key10": "4ooTkSSRQcgEEBX9RJZttB4tUuGEfV2nvmYMoKSewFHdKjKC44HnhXKrp1ZUKoh1xDJf3zRJB3zwKmpLwn8CBuLN",
  "key11": "5gXzJxRcNcohDcs8e86uM2AGuwddT1xGjSKzFnbMtHYaE9gru39GCa6msXFNi1bgjXLvBET4WquDftyZ1D3cejjb",
  "key12": "3LEAosP63zSuz4b6pyfqkW3bRDvhS7WpifxuqxByb6ZjKQpQRF2ESVivhqVWjTkjqxjU46RUJeg3gG5PVzN3GnLG",
  "key13": "2eLX2V36fCwydnovVwwUA9McbZo6yS76KfzGxGsq8Y9ZHtigE6RZc6WmBuxRTrbUjZGShKn9C1ZCHx9dq6mnfLhU",
  "key14": "hvy91h3b3xhF47VHZydKQGKRK9srRkSFXAbQUeNNsyubAnyCP5QottSiHbk6ASpW2TPmiQBakQbYSfzoS5RUA6e",
  "key15": "2omAe58pQGea7P2cBwWinKEdnEvrsLysMtXbrFbgw8YqPyEqD1NCDgvxQ6iCETk1GvE2iWCdMa6eG8m7yoAxSJrg",
  "key16": "4PFTVUQge8jXhtDUjsn6DarCLezEPYm5MTc65bRwxGWYaNQk3x3FafGxGpcgFUsRFHNauvYrPoCrkT8QmkV3mdTm",
  "key17": "eHz2MReKWJh9gnssHEUXvrbqRg621biySSPYXiViHqzFjQN9jckKqvriUhDgsHmecB54gJyMdQ4Whd2xqmtfssJ",
  "key18": "2tWUdZoaSwdXRmSneLogKwDSeiXXoaYbTK8D2bAEz6jxFUMDAoVeh6hnnFonx41FM5aDFeKuqEXVfPfYvVbo8MnV",
  "key19": "BiR65i1Fujbqf6SNbhAYMC9F2gaR5PNG86Lb3LKzKyzHzvpmJU7b5Qgmpq1sUe51muLYcjUZfgBV6HPi7eAMYjX",
  "key20": "5b1oePsPzosmFGJtzr4hw7Q5J1Lr5NLt2Y6YxEoN9ghpqGkvvQwdD7ErwVmHoiisoQGRiqgDkugwwhNGpt2nHk8v",
  "key21": "3KN7bhj9fMoYDQ1tLqMr1K4XTa8htFAtTd4UYQqYTLLCKwdQkqm4sg7188syzEgZStgGxxBuJgKrKTPc4x9T5a3D",
  "key22": "3M7EjqF44YnzerFUap64fQ2dFE8MvR6yUSWNG9TeZqexU2uR49Bc49BgTDRGsSuec9fikbTCDRZSvBHkmcYK1E8w",
  "key23": "5cucSqdxJ6X32QUiS8N92XBan2rPvEvK1HBJPM6d44EoG9YnWUMGCZkukcPmeArVc8D5REapLTkcQBeaBDMEb1JS",
  "key24": "2PAHiCLZ6uMj2yNkZrNCXF1dwaPqXJCQMHxx6BbxcjeRmWtnPpSpEaQryNRgcNEJLVwxFPG9KRAyD8umt67gFUkM",
  "key25": "NCyXuXxXsNn2Vs9FgaR7Vsx9Fovk1Ru95HWzvnZiDnYAEGDBSAQR9rvcPkMzL36grVJC5gk5WbWWGrmhDXNxCjd",
  "key26": "4JLy8vVekyjLDtJhVie5dkm7dUwnChpZS7rVjgyYXTsRZyxitgL4LPmnEf4BbD3wN9QDE7rbvXGPTzHoNfBwcCvv",
  "key27": "34eYxAg6MmHe5zJTZtZuEYUnBS3Jn6FBxwHJ4rB7aQcxznf4tjdSwvkm1eivjCc8WNHKSG8p6Yhk4MHRgVFKsTaW",
  "key28": "2deSFqhbEkbnvhB1myxRjG29pD59dJJpLZRrxYczQaEvMqHHe6H339xQxKbsX6gnXNS35Dy6e1TLuEH9rY9smb2G",
  "key29": "3xW6JUpFVn9MtNrNg5V32zLdGKS4wWEVk2xkuAujfcURFmh37GS9osMhwVMg4gKpx9w9KVpY6shixGB5mG948dtp",
  "key30": "tdgwcs7sQQp5ZRSRYmNETQu87SbRtXpJTTaWq1qTQY9iasPWxfPJdGw2naQB9W1d7jonMYaJubgK7DyRhov59ND",
  "key31": "5dCMiaS3sVfLquCTZypGhBTKBvqKN1GwcD9FAHWuV7mrSTzSLPoVWzj4tXP9NQ5dSTQfmp9YfFBfD45cmuUHHeps",
  "key32": "xzGrFjy4j9T6ZbWwqGKV6jqsgb8EMxWFBrWZAXVifiFZfL9LD2wfLKwRYHsTpATjTkMqczvn5atTEVdfdd3gGJE",
  "key33": "4M93Krf8UW85TzubzC8ukFccBVkUJ8cr2hsSwRUHxsTPD3vbE4yPDjkhgEivUGaSUtdMTxZ5YLx3MCvmyiUASEUq",
  "key34": "3Yz562jurd11cwiuR3XtokLXPyyxGUb6kigGTE4b82gt3T36bneQcgrWUv1nC58NeJydizoVmVVkjHGy9yKWhG99",
  "key35": "2PGVgqh6JtXk7LuEoPfwUUAurj4NfXvzEDweqVumBzhVMnZKeag1z8jDxphHvTd31Jkq3LarXB62616wSo2Kx9bJ",
  "key36": "cV6oE72iwtG1AiJhqnRPZe2jca1WVffuXq5nSKEe5duVmf1az3o52CXMyohGiW31cNsw5ChRFEPY2uCqXToS9La",
  "key37": "4KmAbLbxPFRMSAgtcTf7mJYNY8d2pvFWQVGJ1RCeXUebVyMeacBDmNHiF1FhtM2Lmibg2KcHpHGZRoPg2rpyUyds",
  "key38": "3YbXswDLogVcbbDQemPhEfyZLhfzSRApu2uWyBA5HWQ4oTpz2cuWq5kbL6fy9y7ZT5u6ce1Et5xYrntBpAqVEX2o",
  "key39": "2ia2L4WEB1PcKGu1tSwjXD3DT3qzXCFrZy7ei9KSXbVGJE6JwG41kgUHdafUKVGyiQ2ixgWcyJjrbtzveCAQKpCu",
  "key40": "5x5CFhV5mn6GBttcFdKXkFFiKQtmaKTvf9XTBUCA4tBS4fWM6ygjwhvruuwLp7RBiu7Ft67Y627RZ82QJPKejhJh",
  "key41": "4arNS64345pQtmktY2iFKh9cU432Z5rAVFXUzcVz2pK4MuVaqG1ZLkxXDzWafhZuitZB2qWiNryGTwK8vA2aLGiD",
  "key42": "3VscQSNVbtYjNojnjj527JZu2CrB2ctEAVELPAPVzAgPKxNQ4XbnRqM8UppK52RT1R59KorQ9MpPZaunNUnSsExp",
  "key43": "4eGgTxgUGqM9LcJo3PRkv1jWW6481UKoo3UKRuZW1ngy955AT9uojSvS4t79zL1RmzjH18Dqcs6Sukt7N6hvYCLt",
  "key44": "26bKQY97N7gU1gnCgt5YseACBVxBzcde2pR7VtMTm32VjtLEohXC7KJNXC49R33cMnrdArpzunyGQEQp7fVHDZQz",
  "key45": "3pC3Kiezo2TrwZ5vS4Kc9gAnGeoL58eZ1dkiqfZy4Vqu2bPXcFs28hpqZKVzffuQ927TcFuErMgf2S78yirPcKjH",
  "key46": "FRuAPpMDcn2AnPRjykqJ21kJtxpTYZXt4NCBxnBrShpEcsHWg6BYPGe7vztpkorysDct1bE1ZC2RAkU79cy2ZuE",
  "key47": "3qzHBXoTeQBe5u13d56xb4u5Kv6EvTEzmxL7zWfxbX32seF7CzYEcXuoQiy6Y4D5L4xKSir1fqUTqrpKkZBo4RSm",
  "key48": "2sm5dzYF2ApL5H85bsRSFpPfL4epNkizMNN7gLxV4z9NGhgY14sp5vYDkpCtG1yEdtdzvoabH1oekS3psn4enUKa"
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
