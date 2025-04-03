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
    "4xgyKgbga16ghXhpFRUbnMZZyveyWmqvZSaAs62hyxvzh5mp4GAvbDcwL2mUoMf4SPydinMG79yh8AnWfUyfaPt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hv3W1PGe8MZZgmfQUfAEEjuEfvAFvaSzv8KT6TgerCh9uSXcovEZPo8byybziFZJ83Vj7cQfjSuAXGdHxCfcdBh",
  "key1": "2RtCEkopPwSYuaR46vJkMqY8h8KEdDcnZJxTnvTRMQ7zbWmD8hevYWgyhBKZpgWRcXKHDNNPutoHQBBiDdMaYUt7",
  "key2": "uZFPRWv8zT6YorxFRP8qqGy51yQU98obaKJZ4moAFbTWdgDAzvoRJ54tyVsbdZwvpG8AFT6z1ifTK3tGrCVVnsG",
  "key3": "3997Htu3CCVjJq4T4ryhcL9aaVSUdojgk8pm7LEK5eCQejuAYMbxUAZW3ZE349zakYkLBe5iDsgcHqM46C1Ud9FF",
  "key4": "4xzv56ifKPD2Nh99ZuDEvCD2ScLhCiRkPqAaDERQzazWf4zB27Wtt9uAm6Zz5N8DgvYLi1id8St1nUvoQodnDomV",
  "key5": "3R7oNLqdhEM7W56LubZQhv4jKk8SP4CMbJDTrHGW7WXDmy6FHWxGjLQ2qiZSrg5LK45jhuatcnEsdwgPcAuSN6C4",
  "key6": "58yiBSpANbc7PNmqQws2F1dR5WeRiUst7tFhJVr1ztgz3BmJsoYTumkHh8yZMcVVZzq2QCfGgyqnjTQer8kQM1XF",
  "key7": "5VmowjKCqyXA9vWV4SBxRW8WVWDGq6DCX8oqdxR2janiqxkMwvSUjsVh1eVqkvUeRj7XKAoxZLvmthywP9rWb5cL",
  "key8": "3G3H5m9MXxMxh94g4e9ZmiW5TGkzGQHVcNFbCPrveviJ6T6RwnEA62vSKACZc2GdNyC5KBVnKjJuicBs6r8V52Jf",
  "key9": "2zA263jNYstzjEA3232kYb6gi86uUyR7YFeV5sioeNTek6P8dT5UGWpyJ523p97jaoQ6JhmAANksESTeUGVsMnZs",
  "key10": "2DahtUQEPtVnMJoAEQ7bFp2dwSj6YwVFD8MRbcTiw7XV3gT4jMwe5CibVwgnqP23AsxzvNUu58oSod5fjijSL6Hn",
  "key11": "2FNH4oLV7M3XXQpCBVjNgV92upxm2LsG8RczSV3t5qPrMSKroHKBePqDe5jwA3HEZCh3bDp6s5GV6vZS6pGwnDPW",
  "key12": "5bXhxG2L6cX6RNjeUSWYpDFNoEYqW8iEzom4ksV4Yeay4tsRJEfjZDttbrm4PPZWX1ZPqdw1Aqw3BiPgyi12wt3r",
  "key13": "49qmqpMx26v29wmHXJRJRXs2eWk6uUj5yU1jeCtJyvUjpCN53FuPMiAynrUb4QZJG4QrsRvJws4Z8Hcsg1gurEts",
  "key14": "5uUxmjRTTndbZucG3XhXv1tf3jQ1MGQNEjRWkornfKhary8N1sDYtR3XWWGLtdaGybET1aXEGoJkNYyMnvNTos2G",
  "key15": "2YbVToz6ZJe2C29oBn7KNQnHqyXLVrAenmgtuxukVY5uXFCWWL7rjv9aeKpC2MnfZ1X94iawswoqBKXCVPqfNavZ",
  "key16": "SsH85NvMsyc6N5z21FgZ2kdfzW2bWD3kbPqmdhuFaKWumvs2EKE1rsqdne63bHp5vcEWJyHKErtSN3tTkMhhjtV",
  "key17": "NyK2XEC3hqSQvKkXwDpYHs6UDzHV6VWn8LgtAvsM3LXqzpB42fpMAFJBk4GDbQeedF97Q6ddkVvdRyzFVLNWH65",
  "key18": "5iu7d6vbYVv3BGLjUCxAxtZNxu5AE9zobUBjJXfnNZ8cFHrWSNNCRTDGVUE8YbPbAtobnQXekw4gSM4uRwH7UK1Q",
  "key19": "4gzVm8XWQJY4DBNgj72wX1g8vvYhi69LvmfvdoCjfAj16Pdm1GEFNRE3JnHWiHyfGVorVN1TC5AKFvENN8eLWneh",
  "key20": "5d7vLeQ4dZox9B3VxxyTspGW6HhxUrfw4DtdvDA7ZjkcfphgZNRrHTMUKAHshK2rXwHxNvs7v3UrPft9a6Xh4gPm",
  "key21": "3dp6s4o1g5TmmaXwX2FFfqktBoSDxEcKe3GFi7dRSHNjMT8aBBUVNzYHGBzGPgqMS9192vsb1t9YqNg4zhzF944C",
  "key22": "Yw2RAMYdJrxBbhhRdnKYXaGLz8PKP8edmSwczYqZrgs6Njb2YniTXXPtBqoSbE2cXk2QxGMjksmodY79m3AHwzo",
  "key23": "3UXDcdVNbapwsvmuhK89KXKCEdiofsZBMekz6Zj9pzx2eGpKWBhQ1GEGdyd69PTjEGppwWUUt3m2Pj2A1JW9eBL8",
  "key24": "fdjyMax2yDu7uTdPVAeMmdMbz1PxnD3edCs7Spvn7dvQkNmJigsNYwfmudyUBHzpFAo1d5AdpcVD7Kuor4HxidQ",
  "key25": "5AbfuNZfzU48tiaL9m92UttudcKHSoFs1wZLuSoXWANHFkW7kkVncMA7TJDtJaJoG96VJNHUdD47eLfwivC7AyhQ",
  "key26": "2sLwoyCD2ghawmk119scesjCY7L8A8ZsuAadNWk6TYrSkbWC4WUF2nMNURrgK3bC3Pf8ygHVgjMbF2sy7vYy1KnY",
  "key27": "3q1M1MywVazCK7TmWs3MYcKodGGDjAYkPi7TGmHUChLJcKMQnUfCwjntq4N6pnKRtTq3xvnS47JshcL7xDNB55cy",
  "key28": "2FRGjfCM58837wYgyJhiZRB3riSTSnDvF3qjfarqLGUDxUf3Je3sKNtCrXTQbGz2mL98YfknWTCz9frw3FKBi8DA",
  "key29": "Ci4CC6QhEDHaJomwEFetNerAJW5R5iaHeTSzvayP9iaGusQ6uanX9Jpyecvs1TRjJCikDtTqzDUNZzfEffmzkFt",
  "key30": "5a5JC33WJqfBGY3cw8RdrzVjWAGfLRaCiwjNzaajGeHDhmTsNF86ggUxSU91G8agLxu9SA7E1fjjUFiQz7SCEA5X",
  "key31": "2GWXmH692yoqjcDc95LvpxsvR7NewJW9nmE6s5Zpk19rPmUP3evACfzogh61MFB2MdRmeiL62d1yAY7S3HaCfkXb",
  "key32": "3FW7j3FNiXtgX8zzjBnvanytmFkgpkcSgwS3dNFmtnBBKV3dPDM39dLa96jzVwNdgHjRZ95Ntooj9BSAjjmLNm6d"
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
