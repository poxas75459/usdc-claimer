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
    "3zf38p4UgH8EhKTNgDuducJ9dHZpYJnPGYZzRBNzgoNG4A5E84GmK7EgXLQyrR92FyvZZvjjU4E7sjYRrSphHKn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQJkxDTHpB3eL4BforkDxBScnJcdNXgTkL8iuQCgM6vMgb5eAvfkFkpmHdxmQ1LHh2QTW6upZg7ZgyoCLspMXwL",
  "key1": "4qUQtzuzCWTzPpTDXKsZCV6i3qYJZHvR7aHd4HrrzptTeqW7GnoaFsrVBzUunGSakV9Nvus2rxspXUjNNjuqJ3Lj",
  "key2": "4Gxu98WGXFtE6HpLUKjS7yBcGAoLcV5v37EpUXuuKpdvAfXH4g6U4HWJFwtVv5nskAyfUPTpQTtKp3FboNpvxTuF",
  "key3": "5Y57McHuS1w6xHW6NYjgZbsftJ4e9fysmtqN9ojQnP4eGtcThPPW183YAY9AEtMMSRsByH6giVSSc2ttPpUdbjq9",
  "key4": "4XSJnChT9R9M1P7bkKRy9uevW2sN1545FT3orEUrSj4bcntcvU63et6wcEKxUWBaTByYiYbS9KmkCvcAHhwYiRuU",
  "key5": "2vsCb2AQKMN5n5ForEGZwfdyqPspibCcUC7WT7YdF6iFkL7Gnt5f6hTSj8AgXy4CCy3rdD5AXn9Q3guMrheX8uDo",
  "key6": "54PYrAHE9TvMBine67abZyrxoKAbtua8ewcD14L1SfYjyFEwbAX9Kk7JLw1XVhd3q2XNGZ65Nq2cbjUsxu6cBR8e",
  "key7": "MmMX9mAWjvV1Mnj76qiMPZ71jhbzX8D5utKS27LGPLvdte6NkY9dCRFRjtcNprEc2HVZABseLyrCPxgJ32PvFwJ",
  "key8": "4u3Hr21dhqP7GxrDSGb5T4t7FkEXqmsWyN24EXbKPeoxS3Cz1c8E65jJjjq7hHCMgfY8a4ojHKft5yxGg2dV3AD2",
  "key9": "5c1vV2SwCpg8PNY52NvK8Bbmrb8S9f6mNviHBRdyfYwYtGjXdGXchEESEo1ZRA3y9L8hXgjrMA8CHbKffrqwWQi",
  "key10": "4w2Wqj4RRyZNU2m55ZK2g7evPzPfB3sFwa2ZeFdbD6ToeuQN84gViFZ1BfR52spZ8qZ3wcsFxQ9pzm8JvhjnExzL",
  "key11": "497XWY2qNHqwZsmQ3xcT2nu1ctSF54KQMPif7moGJAZmQh4g6B75Gyz66wiwfnP6HMzwPJznZRC62Zb7P3sPHEqg",
  "key12": "61RBiVc3TZspYiJjFmNCmsG5yG3BuVQnN1bkiSKFytamkznLc2C3yLQd97DsUTvKQrvTkP8QvJLyDD13tT34nv1j",
  "key13": "56mbhPZSCB587dKyTu8SXcnFySw4kvx2FCzEg3cAwt2i5zHBDpTAtym3pHJhE37o6H3dAjMdT4C5MdZ6RDkPXbss",
  "key14": "2TTdYrq3XtVcJWGDnGBNVensSFVxCfFe4UAnWK2H64BTmnyajnjB4yWDSisfMAyk2Q1HQLyNdQGMULnGdUuPGaZg",
  "key15": "3RrmvGpazGVnm6Gf2xTugmxhiD9wuCY9mDzdpKH3ohaGh5sGgLShwLPTGRijS8BCmfzq9a2Ykt77GJYCGCjuiQWm",
  "key16": "4SX1uwSB5HgqwNERZj1HD8s7tf3Vc96s38iNAPVTVdibCg9tBpus8PkD47Wq7FVtLLA1jNtDk3aJHDpSYwDc1FfU",
  "key17": "5VnH9b3qrTLZB4wpCWN3pMM5D63n7ThdGDRSvLjN8V2BkiKrWmwqTZwYLHuRbUYihevmJKZXSVvvoFETiTKuJMb4",
  "key18": "RiRjiVWkkds1fyFhTft5mUqzDjyKg1Cs917Ld47taBBjArB7vMFyubKuKcoVVZnxFKYtCDw98qCQXe5UQY9mkHn",
  "key19": "xZQ2CqMn12RBn1DAwyxWLk4sZMWewEMkY1NG53zPNhxwFdUQX8jE55GWPzfvcrxqDH6BdqcMdqRoZAS2Qc6sAA9",
  "key20": "2q4GGhEwcM8bshLBVU64pyjDz27uS9chwC1K8aF1Z7bS59cZT2TNJS4ihxYx8vg7B25Saw4yLwvvSGM4j8z67h8u",
  "key21": "4WL4DbMEZPohoeNbMwychorUynbpo3tPjmcJodFmgZbkw4XxH7hDQ2vh4eRAysp4k8DsMo7oSmrequktStr6D4bD",
  "key22": "5jv8GEjwNvZZjewCrfr6B3Gx6Ymu8w3cnhLaCLdm9rdvMcXWzWygdHAH8nc94AbpiZQkzsxvDD2aADG7wXUtWia4",
  "key23": "25QgxtznNYswCNrJmbx4GCRcXDBvu8vT5M84uobxuXYxR93hrziNv9xK2KFatEVWZNQ6CWE79eobd3D77kYALQjX",
  "key24": "2wid1M6Ef5tmVzwYsGvja8Sj1ZrjWsS3sXbo92xTQW6KAFQQbTZxcLjgFfijzfALQXgq5e9GGCqqtYpiYjzhb9eD",
  "key25": "26c6RjvjdCQ8wJsikX74M6ETWAkcgKPCcnU8t6D7VkpRNGRfhDdYaHvNy8EpmtAfGDA2gvKMxGDEDtBBhnj5s9te",
  "key26": "43oK6pRgWtogbyx4PCnMCtKnsDAm3BpwY8hNLCCrwqreHZVZ5dtjxYvTESRdJT4bsyAifWzDEKymXD2Tt1KoAabQ",
  "key27": "2bqNyZcGD36WqP5za6WTHrPLzQiuvyvpgdDFS14HRkySd52z2g6Bkf45ybLMVkiWUkiq9wHDGr8rBE7p3VUJGFVm",
  "key28": "3rdSdFjjhRSdjo1s4mDtRAe7x91Kin2wEDMqDJvUDuvVw2VgeFph2xQc3xquJ6EmyTZiJvgXcuk2oCoB9mjtuVP5",
  "key29": "2CxMoWbW6wrq633U14Da4MVRf1AvWrpMCHekyF7jmVvf3jTsz2nBA6nMScXt4inoqQBLtsWiHJbhqYDqoMNYim1p",
  "key30": "5pko36dYajBF1iffxcVZVo4h68AhHgqQMgYRGLLu6J4GuHh6aFP7rb2dvgDaknt75KB7nS5Ui25dNYG3jqdJhon9",
  "key31": "4DQ22d66zbUGteFRK4C5gofGkB6jdy97g7xpo6sFMjkXdqgsANuVo9yyRqgSy39t9tbe2H93gnuTyKTpqicvDzFn",
  "key32": "4UbnUEFoyqHX3YgwjtaJum1GtPywEMpTpPm4N9ksBgYerA59bCCFKvts7KJSqCsy7UR7TzhMGhndYWN2rdmiAqtN",
  "key33": "3VauxcbENmUgZxQVVhg8tmXkvbMFtZ6mNX4bRUwLZfWDXB7wnpNJTaDCWtggdKxeC7URABhvFfZwdSoT1XZzfQt",
  "key34": "hXhZMv868pNnBcbamLPZetG6k95VKjJg9azSPMxcgjXuGpajf6YEPxHcVDqm5unjEvKFTMBURNRYiFW5V3bixWC",
  "key35": "5QtEr5et4ndM8RhnQjr379R7gSD3mNmc4uMfwGWNPrefjm5ZVLeuq6N77W11xzJWdagW28TxeC95JKhMijg87wUi",
  "key36": "gMB9GZPQkSmr6xsLQUcn72UPeH9tK4Bn9tQynxhZGLdC4sfQunicuR1dugLPtRGs7PLtZPXFwXMkuJchqBeYS9e",
  "key37": "1292xdSpDAGMQgpceJyxMZDAdMZyxs5fNYDE9mMrAKASgNVXrzdDjVac9gH3ZrcimdMtQt9ZpW1Joq52TgkjuaiL",
  "key38": "4kpN23uMTXVKtskcA6DhCUWijnsq6n5AGJb7TcuBoyT5Be6UuS9NBwsWxcAvT1ZYPxRQ1GYg14urEaU9GqcygZy7",
  "key39": "5UNJ5hWxiapfqYP2fAgF2sjQ58RTWbYhs97AFnJ8AbMmUReTpVCgRT6H3MmaY2d85Hd2Pt37w3m2dGyr3opLuwW6",
  "key40": "JLCktGqwHuT8EijQL5SB5KDTKJQv1TBHZNHQWyTUC2RmNwwocTfDuzKg9SRdrtAngnXD2QsgUapLpwB8EWAx1dJ",
  "key41": "5pSrQ3XWrZKY9n48Hn1fCLTc8F7BNukh2nBPMG3j2DR9DsFBDNymWDNJifuoXPbeUUkqJGiNffAfNXvvFHcwcKRm"
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
