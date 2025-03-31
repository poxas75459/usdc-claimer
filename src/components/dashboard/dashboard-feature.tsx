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
    "3EkYfpaVe6PRHbDo2WEn7UK3g8NLPghafiM1qkh6hyXgRwXdKBeVmWKP2Vur6miA8vkRhrTAa5M5imuhD9nJdSkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46KxMuWP7jfy8gR6A52VcCztaexdor8UP6J8VTijjj6AvEMCbkYrot6MUem2MST1bvUVB3zaoLLoNiN5JuZ1iBZF",
  "key1": "5pLjfPwzxLAJgpnoU9fkyzpNADmjVcZGLLdD7UqEDq9k9bu9a1N7R9S4Zuf6294csWYjz4VBxzpXzP64WzpbVSCF",
  "key2": "3Qt5a7eUP2qjnpXsA3pgfmGCDpq2ifyf7vUreBgiKSdisS52VzHzbXj6azJDQphwWRK8bXBEbxKFECjBRgfwoVVK",
  "key3": "3xEMPWPm957HP3iC5TJ3BgxujbGHLeqBwyuzMrr6dFtYH6Y863AqsKorTA3rAKz55QMRWjuXcUNBhdmM7QjQqbjv",
  "key4": "5ZFfzjjPFEpAJqMVpxEkmUJYPDS7KKCC8FePbLKScWGWmtPA1SQ8kiWFZY57LEVKvaxmcZwBS5b6WFYPinjqgpcw",
  "key5": "25YZ2KgMBF8T4VdvbQkbnT7fStJq3G5p6sKMLBZXu9RhAfsx4LtKXgQMm994EKqEnwdfbYBUEt1RnJMYypbpfBiL",
  "key6": "42ixDrjtF3Nku9R5MB9JGnfYi2LEiNgHhFL17PsASaryUABidf1jYtaKg4Zny1KoEpNxqhXZQJiczKzc2x6SHNCg",
  "key7": "3uaHNL1CmFL3CTeLWJSkN3bMrvpukGp7qmrq4Vh92Jm3zEmG1K35Fs8U8cwNvPyoFp4LiksSf422Pu9sqfGRjzC2",
  "key8": "b6osXYvQ5yBFH7SZXV9UfEXB4YMPPqWT4grYNmBcZSNzY4rdQUo31ES6gqKRjRos813X3HqjYSALYZ1DhSgh95E",
  "key9": "3qBQUhJeHueLJYZ1DEsF2mD72hkbp6TTNoaUv6dUMC187jFEKC5kc2HSLsyi9UwCgxmqg7Y6GN3rSEoHoiDoYFQd",
  "key10": "4fwZqyxht3EXpgy31hAV9pygoXGFNhQx8s1Wh7DzBNtokkBEcSURfgJhZoAu9QCZFLD7ZEQH56jUiab8yHC9sbff",
  "key11": "3zDDkqzysqVPedbfQSKtPMALJcxKJq6xXoMswFeZ2xBV144xd77xB1qDr7E2eqSf7Y5FSm8QeLCRtJGeBuQg3DMM",
  "key12": "49hgZ4AX7vpPEBTEmZz1LKKTN52eLHifDudy8oQZhSuaUP1bqUgQyryCf5uPzhGWG3wKBbybh7iBFdaQQHX18iYE",
  "key13": "22xZdRfc99rq1zrje4qME7MoqnagZ3i1MH4fWWhvKdJ2EqYcHkshSpUeBnBwLW6zYF4uRxokPaEbjcQH7Xiju6VD",
  "key14": "5h4Ne2NPVLc2n2TiVAwAJ9aB35hZzDu8GKBuQtXvCJZUMtiNdiNMHtfYk713VvZ171QxwJAtuop9R8egeKMoTj4P",
  "key15": "UBV54E75s2Sm2Rfg2FZemwdW7cykgjrnFEyKH5gxN3XUZbJzdPqUNDd1eo8J2RnHvsEkzpP2SkoHWCvyYexuetB",
  "key16": "4CVBwaUSA4bChDVEjzds5dFrr76ZmJF5MGjHDXqaRtppEY9TYdRET1DyBGzti94nAn2c76gnXJDM24StxrYqFzuH",
  "key17": "3iaESSuBSRfmVrcxNexKGWRMWWKmbxdBifAjxiHG9YjrTGcSMLCmyfvXjxGUsbXgqEqskoubFzKJb7m1CxtJ49Ye",
  "key18": "35SgQkhzpCxRXfjba1qXBFAnKPX4uW2ropbfz2SRaQeYEtUtPhXPneB7o7kDcsDvPPG3e9nknb4G4fj386hSsUoC",
  "key19": "4LKM2MZEJ6oDR4NKt4o2bkeDbqZVizLygLG7UnH6BFLpzNRnGp2U5cd2Zyg26B7T2tV9DvvCkKgUbw2xYoyPPbvv",
  "key20": "34XVNFJZ1Zc3Q767TrWNkW1KuzhRAXPBmqfPJhxFhovKPVZV7iHGKmEq9nBB9DrjihMNjDSNUwq6UPtJajwLXQZX",
  "key21": "2ucfcQZFgfYb3Gpic4xfucccUeWqydbGxUURMZYMUCbB9GG7ggYiQVEp2h3rtkonh3sUkm6tG49XD6vbwY2HD41T",
  "key22": "2TU5nDakwSLvb2Theewk7o1oidLeMbvqYcXb13KKmyY2hxhAxQy6gj4RQHebLdw2a5r3EErKMdHFdJWSqedmFz2",
  "key23": "i38jsGgze3sGJYgMFi3QWNro7ySHmDshncKgYmmw3YomYhCStdU6jut9QydqMtFvzAP66EEeanSymwA13Yzx5vo",
  "key24": "2WT6niaK5WeLXqTnz7H4kEkhTKPVYgPYmkBEJLqJLZp1FN1xmzscmZoBq8XWxFCEvVaYvcAigDekr21JLms39PC7",
  "key25": "2tb11trPNUC4YvJ63cMbps26RxwMhwkBNsemJf6NzPnm4D6TJ8P4QWaCV9g3cRBS1pzzc6cPuPKcKnuNdwVPgmR9",
  "key26": "2cDaD4bh2AFQ7UYgjqvnHwBZmhVFeX4qjLitZd27XCqJGR877RoarNa8RdhZC4hhSUWwMqrPm8hisuBhw6yWBMYd",
  "key27": "5ZXLcMtzYjLi44QKzhzV7GQZDo8jzdkxSrarUpb667gZRchNu5QPjMFQTRsveF9h3sLeWnyerP5kXLrXZaVxeTFm",
  "key28": "mN2rV38spt6181Yb9AENx4da6J4EYBQTUKExtoD41obydj3dHjKfpDzjEYvQ2vSN1NgD7v5o63pG8Eo9jatQWzL",
  "key29": "5Ud7y1rQzRjBetRoh8974qbhk5SUmuZjo8d5TRiiq2iKAPKx346n6nKGNaULiHdb8onxDTWQGUHag6AAjWEMSS7p",
  "key30": "2jvV4Cct7VkD8KGTMXTPqEwr7DYsALWwpSeiZsNoVrbLjTsd9jhxfEeRVicMfVSTXSqKBFP2iAhffyqGDaGRpxpi",
  "key31": "WHACk58fWjg53k6HVJnQ9nzEjKWqSdyL3ZHgUJ9B1hHvLoNZjhRdFC5UWGfXKzu7wfmn37LNmCyLMtxmScHqeMX",
  "key32": "4Q3iW1YPNmqRgJKjGqJja4BoDcy9Vt2uigQ33VCYDUiK71h9kVTbrquZFg6CRsyvUxExT7ekZhK6osLNaGQkGS27",
  "key33": "4fE6nZa49T71crYqx7RqiRbKhFuC5pRV4fxiN8m5GCfhXCiHbyq8bd8jh5CfzbN7VEJNq9adK44qAQj1sTF4M1T8",
  "key34": "4hFFP884mG124U2VMDJjkZUVQMh5SGsvcP1D4TXRYqPTJMSi7Gsx1nRv6ACTKByLmdQivkdPDKZXeMo3hciZ7Y9h",
  "key35": "3Bxdz8H3Nr6LqG8PCGPQRowmBwzEEEEQ8FKxScKn3yo2dpQJ4fu2FqrKDhD1c4xcYE54x6LguHFyFagC9cXW3w4f",
  "key36": "3nkZ4zhG2pneQUZy7oa2nunewkyo9SjZwyKAReC5GUyPZfK2JPWUiZXwF5D5nfkfPH36jq4mzGUoL5TuF6JpfVWM",
  "key37": "28AMbcNESKzipX8ZSg4aVBp3WSY1hnu56yKKPmgA4Xsb5PFYWUSDEmKmSyGvn9WCTpDKuxA8HDX9FuFe8xnNPV46",
  "key38": "52Zs5H9FZAdUycasRTGLQSKQD9XTfy5axKCfhBtsfymkMZT5NhmNNEdxGpijJjXJ912P9f2tXXgwuxVqgKrFARMY",
  "key39": "2eBv7SmBBFNe299zxnrfgVC4iNGndGdNtGYTRti4d7SbC9pBh1xCmtP3uVp2L7Xt7BhKL9zPfDehTnpSQco9JpBP",
  "key40": "63UEDqpuR51uv32kzTRrnn5xZVRjEjfnBWaT72LoFB59mGsnuEUKMYidmWdZMK9m7XBRirt5En99nhhi4c65bGLh",
  "key41": "3vEHSie9ET3YfiL4brTRymUgyajAKMNF17Ju2jneSC1sLeqWY572aW7iUDaugEpXr1RpGk7m2ubmvUPvADKMbUFX",
  "key42": "27NVjxEWD6AvgMiYUNuxKtyrdExCtouog2nLxRAq1XjkoNLZhrmj4WyAurJdU4GAqmmYw8Vjh3CwhaxME9m3aXyb",
  "key43": "2ScpbJkXDXy7Qk1skK1FgwC7cEagtwUosgGWRKXYb33Se89W3ZHeK8hgx75hep1D5s2YbJNCVUDRsghXCZvxZnZB",
  "key44": "4A26tg5PW2ytATr1thy8i2XBBmKR6zsYxd5oEeGdTBQHYG41CyUarH8foLARExjGXJoxiB5ZH86i1b2bhCKpEFk9",
  "key45": "5UxGsbV27euu1Gc9yLwmp9vgRn7XwojHt4XPF8REz7eSonnf1Qvx86TkSvQHEqwBxEYwoUmEKXCNWo2XsRE4AMf9",
  "key46": "4iNRpbb1vkVGZJVSKYacyEE8F5d3CnVXD7z2p7H9bT39fbvKgusbhKktkRK6UMhe9hTsv5mpMyXwEmLRZjq79aAT",
  "key47": "2zU8Z7j5QbC5LvN2ku3NVGRgCDfvaF6yy9dDnZgF1fkRtg2q2yLHtJSZivJCGQaFxMawau5PMemdvZb8UgbUpQ9T"
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
