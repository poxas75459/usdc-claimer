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
    "3tQfjn3Bo4sEUsooJoxnbMJBGZA1fEvAHKpwPBiU7PJrFY8wFukh1etTyF21mjiifDDzsEtRSRGkCXZFkhVejWXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHaYNjGY5DNkZLbxPjcHToUtmNc2DBLtpSLMz1baX3sWtKy43wpRL3cmr6MSgpUpEiiCXdUd8JQfvANh32ZSxhX",
  "key1": "2fzc6XvapSn8NoKrKH3AYdmYby1Kg7Xn3WDuCEkHr3cTNGSSQXebyJ3EaSfPsnWU7uNoPwwS6Dv84rVzS1MHkbJv",
  "key2": "48wYaAkGqZ62ZDC2TMFSEidwezFTXfxj6SL1Y8vHf8ZZYUtVrLQf2GN8SKG9XapY2eMYFyu4RiXyfuFZChzisfeJ",
  "key3": "5rp8y4JsezUeh2gvDFNoA5jXrdJ4qYWWg6jdWn7N95hdaWMuUSqPeC136d6ZTVWYkdDDUXffvdtuxPDGzKqdoUs6",
  "key4": "4xaSy1V2qgftcsEVdp84exNjtAhp8nmdQ8BTSchjZewkGqhLxAkXVwto3SmbF9SDGwBHBE4vegeF1YHmyNKhRQZd",
  "key5": "3L7zeqLp6gs6erkX6deYiGJghLrrdEJgMtMRRJiHQMZNsjkJ7SNAnfTf5NsqM4XbG9Mq1xTvvdpDw1E4dcMW3je8",
  "key6": "4AYq4o43ZhMZyPXsQsywNLACqjTU1aiQscxAQfyZbRV9cGuKzr8HzXFgb7C33hTtkbyKLBZmvZaAQZmETrXBDmKR",
  "key7": "57AVDdbB6SNhqSC3pdRGzXSMSK2KHyvGDRM9ZveMjmBMG57NHjca9uwtfK7dBNGEwsrWnc2sksiFRcyJKcojTZBe",
  "key8": "2DpPrRwrPY3y7UjgGRoVFqVEJsnyt9LzxPj2HmQHLBPHoXdbrsk5hx85zrvGdsDZHW2yafPNpR3g3F1ZQdDmNs1Y",
  "key9": "ZBkhPnV9guZchpiXeRZ7sAYJib8BuND9fpEuQ1UC6XHQmZX3f5RPq4N8gGd1HdxBjN9xxncEE8M5mNfvrN3T1yU",
  "key10": "29DPoGogU2BLgWNiwmXwakax7G2xUxFYaXkUMyXbELurktZfsUAVBBfT9VCnEgfJbZYXGkpNmdHTq76tTkPrYghf",
  "key11": "5hDK7VCUamLmZ6YkFZ5DBsFF6gyxB4Q4HUVJtjwyb5TA5CCkVvuhAdVoZYxjEUpXUh6M5xU4tQmi6JLZbzPHf5Gb",
  "key12": "2DKKujJyom6KJurmynB2sf7HLWEFsnYGHbdsTMK9cFqLjrC5e6FkWwHJeF9UHT9UkF3qgETJzz4R4H9M6R5XW6E7",
  "key13": "2HdeUkcysUeATbKiSdZP7wKofdiHQZ9Nua1mJ1xqLDQRpd4Hs11E2PVKkVFEDVb1wVTrKyECuiy5ggMWMM4y68kX",
  "key14": "5bDJ3ibQntexpQgd1erq6nKxZY6P3ZGXdiLWGTyV6occCYMiK6f5PXDWKMXY7hW8q79KcDnXmU9B1MyBr7Xss1b2",
  "key15": "52SEjMP9Hj7KJrXssEAFAxTFYUDLTatDotkFWVPsePMurscsQPqpfNjWVVNZ6HRbgQrTyHjDB9PDJfv64WeNywcc",
  "key16": "5sUHpXFnuFUg7j1U2Vbb3efiAM8Suo3sRCMLqaJtLtPqb2HGQYwvafWDJsGEJTk4Q4V3D6BiaMDUstGPcozg8K51",
  "key17": "2tfdwTaBvyTADgZSLEFM71mVX9rVNQnrimtSRE8i5E2GEKUx3BJ4KVhmLwjyD4Ku9ZqKxMFbKderDw4WYkSLDHgE",
  "key18": "2eSL5vQD64Utz8Y2CgoBayuyg42WMahJUprgtAnLk5qDzhXdCsWSfR9EEhThxKX55FPY1hau4LpRbF4uyk3bnDD3",
  "key19": "4yLvPUqKNNP2qXDYCn8sL21JBWMgKeZVdwP26q1MXhPbNqMB7kyosd92YbrFQytnMyRRJNovSHULB5RgeNLYTDvp",
  "key20": "5oXa2Ue6FyTWorsAWFn2usnk3jHmzqNjPri1LzTge7AMRmbmmuiTyggEXaVxZjJkBtUPtgwTVUvV41mDHMukrvbf",
  "key21": "3YxQPPs5mCZuAUTY4gtBHn8z9Md5DN9p3wfmbCm9gVoirXX6WT2v98z93VetwdJfysFTdkhosrrTSFz15F4Vf6eT",
  "key22": "3j4xeV6NZM2pNo8BRoDKi8zABDnvsyyJxP4bVRSQH6YFgp6R36AfWqBwpkzCktczqQzGjpgkLMSUcyZ6bGxmSsko",
  "key23": "2RLHbyMSxKynDvCasKMUQKQj54bQnHc54LTpEQo2sXe4u3JbQZrhcf5PKNbxgv4pWhzfuoUJnonhdEyZkT4McHgC",
  "key24": "mZ1HKGj7Gukx7tXtFjZAGxiurAQEKfMqmDw9GBCUCQFBaEzPBQJGdU7m5dRowPSHzc8ugt2DSAFin3neJ43i5Bj",
  "key25": "4aKqJd2fEY7Aq7CCU2uve5onH9Ec68ox3wEb1xNbHmumn2qGfUHbFTgiwbk5nPDMTq1A7YMx2cgbKptrn54cHPUA",
  "key26": "ojaoQYJ8s77Eu44gqHdPaeykPVTpbAnSrHTp28AygywXiKbB9YqTrZooESUV2Yfxkgi5Lf4XcfHMrE7VoCBETH6",
  "key27": "taiNKKX3KrVSJPsN7QDvd1UCfDaJxJrPyZvFrDsRxN4j3nEVXQnksPB89btb9bmYtqKWkLFmEy4bYEByLTBFJ8Q",
  "key28": "3JwFQFaUwECowuSpgRq1Fq2wSNKkF2wQWPF3CzidaxmjFC1SscZz9B7ovnTxEjuwVMLjzpGkLEFJ2xvoDyxGJctA",
  "key29": "55LPo6mhLYektfdffguZ9fNcPsnBpE6HKrXLDFAe61MSskBQPgZaMCZqjgjvedYgREJ2uCEPre2eSpeFkYZkYRwv",
  "key30": "3J7C2GqrWRpU5EDbdyXwcyUhbUfRBxdNHd1b9nisxc3BJhqFoU5bjf1Vea3wv1hPy2cfFfJkhPH1eFFU8ETGX8cn",
  "key31": "5gJefwUg552JQcjHi44xdmPHeJCXf6hwjYkQ4AGnhnAe4M9oiVSpPyUCfzsCMHwmt7o2uE52SzMYcKXJ7i1X9TbJ",
  "key32": "skh5P3mg6TZxbiuyjEiVVwe6bt9eJNv2z4ZgdkXFww4EnAoXPsZ8565J5j6B33ZvTBgn7D4tbucMiAuUWdThBje",
  "key33": "5aw6R64srhvD9v5rz74P7Go8YCa4NceE8K4fhZCTfNa2ebkBd38k8w8XqaQ8cQQ6itpVFdnBiwuKQcVh2oSw3jJb",
  "key34": "4j4QEf4VaEFGJ71HmxNSyaQi2Bp1VYtrvhCuzajSDwHRb1dvn8mw9piSXYkQ2E43TzCosZD8rBZBpmASNEUsVZHx",
  "key35": "3J6QpByoKNAi4eJjYAMJVJYqYkgMTid5VXfR7xdmSDZ2sA9VQGEMkk2m9NxQXAijdYZuhWhrR5QWnCxmQRNThREW",
  "key36": "wnrx8wLR3owYv6viXyDuA3P787HeJKCpwtk2T2aPp96EC6TpAJc4BnVBtUQihb2yJ5Zs1j3yLZSxkssyvaErNQ1",
  "key37": "2Zd35nokgnBJMWRjeU7zUFiiEdeRfcpAxgRm7gxzmcDSMhk5J9KFUyJ3K8Zy82Pr3qR4XUUd9mBkkXYM5LxhUp2M",
  "key38": "39BLLYBDg1o3pTPzB9z9zRh3ScGM93k1syyZenq3eszSzjXHsNYeYDDWjYviQd4MjSpXmErXsvjLFFhqdjC1kujU",
  "key39": "4pzY3oSsHNv3vqGZz3RuH3aX14HsZfBxD9ZtMWWjdXx1wWVp64SuoxF1881GaCxfc4xkTqRXwNsbKJ3cQwCQxf26",
  "key40": "65Hii2QdfRmuqBK6sb1v5mT4b4gYZAMSbDpMi5KNUMnL4FWWoKU9SX9rASzHiA169QtPiSpTg4sMMsqtGFGgzqGr",
  "key41": "2ioYUpcgNXWAhTC5GaWpRD5tGfq7pJqfp3HEfSnnBinB4ojXLxJJvjFWw3VtihRYQuCSPAToW1TRUycpoBtroq9U",
  "key42": "46X9pH46KgzwpVkjQnJvCsmmgFAegfPdeXRpj9PSU7bU1A1reJuaGoCTe3nDfkn9vymag88tsww4chhCWWwVeMh8",
  "key43": "4CzNgRD4qHJpLeZAeQXcttHTCDQW3qcP8gL2oH3Ui4susFYgB5PEL6cSFMst9kFJnaVoGJbdJDczSQNt45wizhD8",
  "key44": "2AUUWeZfXtJsEuHgA5Ti4cvfw3JG5ArQHqFzzhukzJNQgPQ845wtXSoMQLJoanRYkBeCq5ViQJ2xoYcDfhUDykUN",
  "key45": "25mDC1ia4Ro4ckZisFEqZmrt6SpLPbjZS2yzjJvL1hNHKvt42KYxLGipCkSMGnbGMhif5BHbCZ3bUFU3wZjTxYJM",
  "key46": "2gtGBXkyBHTFDnNgeu7JHd91xhfpjJtNbxjmQwfN5mMN5pnyijrBRFTCvdXQaJq3ZraUsiTKWwnD6HodtMaC6Z3e",
  "key47": "5f5SKEeNU5rNuDZRsirDtJ2UNHiXhxGk4jXxfj631U7vvB9GffSYuZu6VqG6AyuhPLL1zX39C9N1hVUoriEvEkx9",
  "key48": "5YoaEwRfisq9T5QD3sKvfpUDgs2T8mBGG1rzEbNQDAAGxhSEHjEwhtrmnKdQXvLvEHvYyHCdm2LfduQa3TuW9Nr2",
  "key49": "3UW1SLLMwhMSw1ytZ76qHTbEz4Gi5UmgriLXBSTVvJgYahKhwGpVLYkYsHs6r5QaoVcpJ3SyAcXcChpC3WQWamcf"
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
