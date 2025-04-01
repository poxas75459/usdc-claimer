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
    "4oaR87XF5Wk5Kb12yhu4Yduhty68hFa8AWY3maPo23aCKV4snhZ4ZAebzBxo2ZBkBiAW9Lzcy2Vkp6dy3ftinAM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsVF1kzLie86z7W9fSXz5LLGva5pakW1aeS9MHdYNzpnxCF23GsnDy3R1QyinPThLpzU4FMZem6WezxwaFurJZa",
  "key1": "2TMQE1nHtNe9D7nLXR8KAznBqfPcFVEHLaAYwEH9NLqtiJjK2x2KBG2Q1WckWiWXX9Dy6BoA93icQHRV6bqohn12",
  "key2": "25DBxGqLjQfZ5VDjBt6zpikBhpBaQarD15a68BiuCEEJJZ4e71Fevw71wySrXZipCB4BkUXmn1ZBgDGPNXBA6XYs",
  "key3": "4ZNCMs5ZKRuWLQZkF7duc4Hc55hKsrSYfypUahsh34f4G39mgwtcwupeKBBWeeiALznVH95seNHGUZKLuw7c53cH",
  "key4": "2xtMYP3LxhHr3uJWfJ7C8HnrBNYJC8X8ut5UvxhaMtQ774PT2nS1dpnvh6GFmACd4p2jYznWyQ1HvQgQGshQxqB8",
  "key5": "zTRMFcSnRHi2ZtU5CNpvrYAN22y5S87FkSK6fMgUyhi4xudUvKC7TggvEkJ5cNbNcRtbcmYfoALjVCWMRwG3t26",
  "key6": "38Su73QQ9hW7KNCj9MmsRm37JSVU5XkuvpQyxh5FBDo2tESJ9AkZrtsdocMiP4fdVKxV5GbW9goaeAgeP7MoVmsZ",
  "key7": "2CdNAbAjLUeYEUtzp4nVA2ZAU5EZ5DAJKxoQbFk5N98Bphcv2bSxCBc3VnCKmfvEMWVr3qQWf5RuRs2hwjGAPmV3",
  "key8": "yTMLHuocfyGwhzcwiXaPYR8TSswvReJA5ycuvNwbsbrtvGdQ6CtD3nRHgebnqcqV8AXAQZHTcAt1FxRQshV5oUK",
  "key9": "5FSHJMn6feSojVY7wSoWuuGTncR7o1k1qq1B3DY3VYzgeQRmxn7ZD2jbXNLE38kcXgHGDsTySGgBijfhb9UH8iqx",
  "key10": "2MqUrFnvJ1vVYLvCktQRjtwQF24zfMqEGMj8AqNg57AxozenvedNAXxd2GwkmGkpCzSCec1UejLacCp4yAgVVtVs",
  "key11": "5dtiePXcEp6C58HhH4249EDoB82LwaLAqQjt7iiSeLghvSjggze7shQu6ksTt8WNuWoSRNFNksUxxhfBYpyd5EAk",
  "key12": "4apAtbMXh99ktyC6AHTWGWm6vJsjdDkpECN8PQb7drHPkzv7TqaGNTHHvHsj64u1fCzpuekCMZnMZdXS1d7HcFLs",
  "key13": "51Ubc9tUeqTpQD5KuwH8LaefHMeDtmPsusngQ9pctxBL8vEPov7TjKhWGX5e3fK2BbxCu57MZWtu27ZfL5s2dsCx",
  "key14": "5o5swF1A7f57zjCVwDoonJeH6HQ6kuvB1tCKHGex7eroLetokkQnWacAF7xZiWQWtCj56FgULudMSXeswKsejHVm",
  "key15": "5V2n1UKNQuMH8prxxCM3ToLSnUWFs5rGwquBJsE8xnYeKBui3DtugQ4HyeJfTeUhHxhV6CDFyZnhBRgyUaomanjq",
  "key16": "2LJy76QGMcYTRc1NPUGcgA8q61ZBizrer5G22Fe1LEbht7vY1T8GvGkUvAJd3Dipi598kK62wWsADaHzNa6VWL8s",
  "key17": "21scg8Ttf1kUZFqXdJAZMugVbLAQH2rnkkaVapc64hG2paatoKL925H8DvaczbFuyjbyFnBfzhhpZxwNUDruuLVp",
  "key18": "5N2QoJoVTbV7b4q2aFG5kAHZGjN4zvenCfV1YyanWrBykcTYkJVQ8fXqFDhYU6fce7Z3ywxGra9Fc3qbaLkAuhWC",
  "key19": "3DjDGQv9nNWcviKZc7rqUxCUrawKesUuiTy5iXSoDWkCXyYCExF3zzuUj8MDvw9ZL8JuFtVUw9S7UtU6pFaWFtfq",
  "key20": "2XP6HG9nfHm31QvvecGTdQf5tvDYdp3UAUWhp4PXzR4vmonzjncXeRmCFqrsizwX5pSbsfiqxsvG7P24M5SbS12h",
  "key21": "2jwBx8JnnsDSPFF7Syd6GWrPtPX2pN5qQrSdkifupWVVKpQeNbHKxU6NgYBBHBLvttgjrYhAXwwf43vhaweC7BGi",
  "key22": "2kACiCnueMqVYyZaaDi1PBv46ptmxKz6AYTcQjqNhYiXKxFTf9m41dAwYimbMr5uB5y55dndvThb6tNeuyu2L1X8",
  "key23": "4htK84Q5bBzU8BSEFUAZwfRsSRteo9szUXmj1xu9dBNX3bFtN4RNLv5fZA8bAy4mCLN9GtMNYUj8FiESF5unGkZe",
  "key24": "54M1ykVvDtuBWxnqVEeDNJruRAV8yCr83o2Uy2jhWqsn7bjMesPRnN8XqB274N2ZWjTwm4iz6tEchAdQjdMuou2Y",
  "key25": "2qcXL42w7jdVpuSuWbwpa8W5iCDVHYSho82YcsdFek5VYrr8269BQmSMkftVH2hiSS8m1favGW8eivagibmm7rEX",
  "key26": "5C3MgvqR4sjAefkwB6LDLVKBSaUj9kQKUkJwjGVwE8e23XXmiuJrExkywqdzwXCsfsRomnAM7wvVqGuLy7jARToC",
  "key27": "GyJU3zvRnP271g973AUGTV3bZtMyGcPqsJGpM3fto1CcwYsiYa6GHmS2YLYPrft15p6HnbUvTken5pNXSo4XrLZ",
  "key28": "3MDREKuGDmpccdqbmduiAtYPFvz8hvktFTs2eGM4K3sjSXvKs6t3zwy2ALjzfUBCd8oEW9uRWE1YTCY3xFTUZ3C9",
  "key29": "5sb72wSSQsT7qCYtwSc1cq4pUPzWgHaXs5oRSAo2gVnd3zbqUagxKndusuU56zgni2vUwd7R36CpKSZUiBaDErsw",
  "key30": "2bLjv3wweVKJwCtak7QdwgvXNeVK6hSCPueuCPBNS6NuRjYc1FyyjxsPTgj6proBzWPLmx4QKHKG3LvJiNkhpaUS",
  "key31": "23oUj5mtdkZ1ixKEZRfwdCya5q4AswKn567zEyewFCQ9HyvhV22KQFUDFWmTHLL8HbJYYHSL9DzgqWFGMzwhX5Ve",
  "key32": "4sVqvQfMkqdMYkchYgQWFg5EVCc6gN9ToBmKaxpXArBo7pXnFMqfWPZZNeeTUXCQJMoDrELCpCvoeLVipXEd8EEn",
  "key33": "4bAR6CrYuqXTAPXKnnLyfPCAj2d1PF2S2knkk71m5ThTsAB8Cg1STRvzm3knN4hMYFQQrinF6hA5wbg5VecpPnUe",
  "key34": "3AjcsB9ozWnv4KeghnE651mHdTtSLEwZF6LZxKEHPg6M9BE7pYqy4Eyr2PAvYgdQoufBJv3Wyaqk6nLtSCCTJpDo",
  "key35": "3fga2u9cZQWFmhvNkfWpXcd1GcNTjbDwoNUmt5USXmgG5yN4qUvZUM2m8VZ1HDbyCtueqDMqq1AUGPAdE72sMLbD",
  "key36": "2zggLZv4WSiatonRtQpJuWk1zS5SqnLMkiRv32GXyPtcKr285ZjzUCMaCpW5XxefWFptNXaEe358Dkceo6LZZ4js",
  "key37": "2KPn5w5Jji1qTBg6zQm4Q5MYc8LM1RUH8a2iyonkaUenLHzDWQ7b4zRCGgh9ZM2TeAAQY8tTC8BickHuMPjjt9Nc"
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
