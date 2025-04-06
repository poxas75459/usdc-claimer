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
    "2tGzETke5jeZd7v36bqBpQQWjhiH2WnvRc2HVnBUrp712jPHVCnydM423ydHoZWR4c3JzdMBnqjDAWBYgHQPUgU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rB5Uv7orSo3xSrWptV9q1ZSPThwPKcwWLXiH9pe5CjxpPXSWS4eCLZ1NGEt7akbKmHiKcW1417uPWKbCoUE5rJ8",
  "key1": "5oUoWin8YZUP2J7GEnM73TCcHDZAWtvoUbRs9YBfS9j7D8GGqXymCde7Ty79fzLvGoBRdd6SwWduDTAtyeX6J1dc",
  "key2": "2ce5KF6h78mrGPs9BHNjsr3Khj6u39k8nryyqnvZ856bRnsS8bJXayHjprj9E6djWVU8jHzaHnF72yHLXwVu56dp",
  "key3": "58y1atSRAANtyhoME2WULStimpc6DJzSJVYmpkyk7J9vRe6s1P6sVZsGU3KajnQ1juqMM354EwxfUZzW3krmjaLJ",
  "key4": "5TxzY94QA8RC6hszEh6bWnFXHDfCPSN4DR3G76iEVG8w9YnA7FVBNxJHhLYsLFu75Zj4ZaP3u4WqAUKMD7BVA9vL",
  "key5": "5cJLWcSdGB6A8LJ9LiGf3sv3kUNc9zgEkXiGAdFeBcQR2ERpn3Cqxeco1QMhStJzWERmd1yRdVr1hD9eF1EwKJnt",
  "key6": "4ZMR6uP34hEoAMapMLZZXyivQFuRfTrKH94m8pkCeZ4k95YcwqSk5DqijpLVQ3vCu7vWUsmAvcG7ftMeLqok3Rce",
  "key7": "5PaCL9ShAXUf2QeSHbAi82oYjK9dhL9xLUkFZVbsXtRnoUddbBzVLjigqr9NT8es9Bx4PRajRhfXVdQrxMuG2rCc",
  "key8": "5a5KotJjXz3ry5LAw6WpsLyUMhyHHYajBgB8EHhyFCfwbsjRhVpiPXDkjq8w1fPxVZssZnonZfFEVeqkGk9o2WtC",
  "key9": "2RfuB2Ki9ZL5xSvCrxBrE1SGLRTrTFtVa3nBDX8z3CAeNE4AxfrHD1pS7UtoPBqXEC9iDfZmPMZW5iRCBYeYmWGB",
  "key10": "2Hpv58FumG43cM3qG3AwXU8MJvqy2owqiFvZLhDjGqVLTMJ3nouexx7zCiEb78NWf92py3VLgSZDWsfsepSQ5eYU",
  "key11": "5gcd86F2VKacpLTRZbeYDb2TgVLKAMC9UC9fhZezrMt3d1cPUt2eS9Y3kkNrAUzqm5GTpPJpZZyGM1n6n9jEcc8",
  "key12": "cJZ4gFDuf7LtkokDuBCaedfp5hNzBmbocUp6qYFXL514TfTEmhkuBnGQ87PRw5Jd1NZWaQyuCQ2gYFQZQNcGLQ9",
  "key13": "scJqc3tGewfqBTfU87h29MYtiZe9kbD21n7tAwWobcgGr6H2y64LRkFWJu9miFf3UATgweaDsBNEMXr5rGtyGH1",
  "key14": "4B9y86CQcyCfXTY7DjohQAt5GKpLASPivbuQnmRQMrepGHuaGFRUogbZFYpgRz2WecDkhJ3G2ZEr3TSXHhj9uNvp",
  "key15": "5g85zya9o7WFqvNeNk8aBSHSiWMwrXAj7oUcVAiuvYhBo7atMUKorSW1Hwf6mQkw3h2MqAxwxmeLaRgDkF8MsP9o",
  "key16": "5ydn42iTpUNGuX5Zqcz7BVveXLEX4MSEFGh8pR2N3cLQ2PK9Gsyz12yJp5kAwuRbY3epGHsdLutWRkZQeQLPmcFW",
  "key17": "26mDbyzubpRATejuuzG9NXGJW5dAVEkV6s18xHdSFzwB7M7njq1GWPQ5WgQZAQ1QJtcd8y96XFxvwjyTfVcZtdr8",
  "key18": "56BQupBMQ4w55JAs7fAq49dqAJdocjbrYffVGgcVw69ZoEKGqRPAhTC1jofkY24h4t2w6zqg1hvmcX62wbHrGgKg",
  "key19": "EZJg5vaF4sP9r2rWHvDspsdHQFYnVtFyCkd17KacDBqsLp4zHEuzoFgJgdWaeNhy8Su5m1Yq2fiZNEVk5rj7a5d",
  "key20": "3ZuopHvN457cZKn9rWo3GsAqYuzUjn9LG6ASuoaCrVbJtaSFcvpi7gDrk9K2aWBhLpnwA7sxABa6YUk8nned8Wjw",
  "key21": "4B8fwtPbC9vzoeH4Fytpih86LDydai5QZ7irNfrx9Lb2z5eoFCNGQP2DJo2ijrviRCJrAwUuSV3NerKyvLXMifwb",
  "key22": "Hoqn9ZLUgeTrXU7o8uHkxjDNdYe1YhFaLN8JNt6U16wthFy2epD7ooZyZhPnBGva2dMfy1dfkLLE9rAu7JRGrpB",
  "key23": "XAfErnqpoG2wWQinfoUStYFjZMsDvmT27jvUrWk4NVVfE8y792JSyTC8ZiPeLWCBaNThsVMyE5cqSj44daNiiWe",
  "key24": "2UXpjufhzkfJMKyqB4A5kHpEZVvTcBxidLJV2ftkqXfR3CEiL7ngMpD3PDwrPZyzngvWBxqDpYztZuA4p91z9Gg2",
  "key25": "479nKsgZuXebLp4cNSZjSHPD75V6m18GinDDcDNUmz3amGoFLD5L8mhZhyX5sjDgWriRdDTCC6oaQH9ox8WN8YrW",
  "key26": "42bfBf3xF1ouGxtWzC2VCkDDWezNe7PcR39kuZB9D2wtwK5By9gNtqV2VUad4dTsD739emhRP5S5AsoGVuWb6v7s",
  "key27": "9ETuR7bdR4ju82J6xDfH538Xs1xTg2ShHf1dkDW25dAcAia1LeW1GzFU8n8Aab6bx4ZYY3d9QpEi4hp473Vds1F",
  "key28": "218q6NP8grRFVAHLxGW9s1DXD1Rmi8LCcvW4HBNknohT29BSEzQSpEeiiamgS1LxSqaEsSThwAojLLbn58YVCkis",
  "key29": "Af542pW1ihVQ1pxLTQSGdqxKZDSrgWNpAVgdVhpg68PykC9a6hddQQYHvii9LKE7PY2az2koJ4tEw6ge1V7YeWQ",
  "key30": "3XafPekmXijUQqwDyLTs2Gfp7ecKxvb9CqzGGR2YtXBEEqDtQAuEg4vE6yUdkeqxvtti3rYXAZBuXQyY8aeMwtW4",
  "key31": "4GDiWU5aTg627ANVdJfXVuPNq4gVKcadNdoEBcwWz7LfvatYrHRwhNTWbPKKkUkzR9Pzr52ZJHvQ27LiPKmzJ9sy",
  "key32": "53mHrwsMnyx2jLJEtspGHH8Yju52vdXQzjmbMdEs2BY23rhWbNztSZZfrYWxJC3TYgrPPATcsxPjpvN7SrikwAub",
  "key33": "393iCUAkZJStzUE8jTAFNr1bNUnkwgb5tPjCEboiBoES8ftBuiv67UwdEoJnm1g5qaGCnrakFtFu2PY2EMToVaEv",
  "key34": "2qyV7pVGfN9B3XFEfdWfeCMUzyL3kV1kh1RUhnS9AJtvNou6B8TkEBxvbuaWeWshQtj55mT5hAZoGdyMj4CUafDh"
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
