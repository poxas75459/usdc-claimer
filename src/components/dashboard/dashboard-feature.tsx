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
    "3grRrRQgzWtsJBpVTUL3EmB9Lv7pxVMUShL4E2Z1Rjv27SvK84o32hJqEfyFTMFARDzCmeHGppsqNhe5PUegguZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jbZXY2TdVT4skCvBsdNeM6dfUVyGa9ySkeiM6KavuWUtZKtFbChh1q2Khjeu7QtAVXn7pkfgruGnhvpfjiikHth",
  "key1": "4C3JuPfjGHTp4XsRq8bNY2q1ijWaKKc5k7ZEXAzs7b5Jkj4qAryPbRA2N6DnYJpZNB5xwqWezNKKirkHC8ooxJrY",
  "key2": "4LDJYUJ9xtzAADmcsfLg9NwuWWqsRvri2BGU2N6mH5TifAzSbo1zD4sKzBJaTX7xEtCnNQEDPhEAtger1b1F3JSo",
  "key3": "5A27ta1KPMTRXcskVAsebFpu35YWZdMJKYvVMeEEX128JgugCvmerK9sGpEhdVvgzyGNUNxSHVvmMeouKrqGg5Kd",
  "key4": "2XgtfVEFhmnDKgzWoWsPV1Tr4qvEtt3r9jq8HYFCEWvdxqVXzdPqYZPURDsvScw4tAQjnzf1DtQfAX4yko6tmRbZ",
  "key5": "4xmrwxB84rfdUVdGha8CzQDqDoMJrJzjeBFLzw28YD5BMXGdtFqzxEJSJcbY35pZC7gvSFkqCDxjhBLnPQkEBB6d",
  "key6": "5ppykrpbQJDdFUgRtuwjnnyRfUB7LCfk7FC5da4qDArZ3qtEAu8RfWi33yTecCoXyYSt3P1f499mAhSRGcaQEtbD",
  "key7": "5LSFzbwJ3UjLjD2wcoryMjRuDT4dPrpV7ZzFfNzxRGpXgsge28qGy7zoPC3MRkctKGexmVrE1u8U18W7ph7KVMWT",
  "key8": "3A17axUzh9EZvrVMSjEfNbWLgnZYaVvZeViMM6kSFPwgDvWbvRVqBfGh6kScf5ZLFrwKXM7XTQiTAf9Z6e1bYaVe",
  "key9": "4FM18XKLrgoeB89f6P1WwvLFC7EofiiBgc4P55EgwfaQZuM5kKY5WMi5zgsbY5wh136uEEanSajDDFde4zf1fEFV",
  "key10": "4aFKpFNj45AAnFyNDzfQesrGXmkYY8FH6St63gyUmXwyYHJxJbrfDwYYX6vvWdbVzrhamNKgCERbGdAkC8QkhGGD",
  "key11": "5cmkDnzmjGoMZpyqtmT1wqaVWbn2eiUXi6JiDLiET2Vi3mvT1pv8Don6nbYafJWXY2XRGjJ81fvrTVBqxK7VQFk4",
  "key12": "2wGCY9f5aasepQHwz2u3HUBejHSqgwHywYLXsLtEE8g7YDv4a1NSv26ASJarRtqWcc7TaJTx6Drb8JXG2bGsQuSx",
  "key13": "3ZDSHT3rcX3nSc1wH1LBUAoJBCYddgju9zk7x7pxYydmHJapMfpi7ofJ3HmBAB7RgoooGdAy2MSUooeLep4afxcd",
  "key14": "2rK8eeFuEErTvYkwnRDxHm6gkn4CrEx1RJrfLayhRRuPs3uqnYn3nmELx9rWYKdwbutJT3k3uttyiqMy2k2M6RGd",
  "key15": "4vtNjeytXoRzb7DoBdFGgkCEumUNJ1CE8pxzuTpHjAVAx6VaK3FLqMgrvKdqJp8gVDRaVKaEsm9tdxP1gAYyKzbQ",
  "key16": "5X7WAWWWhvm9Tmm9toYCj39Ggh133FmqUdNA1djRheds1nN8WkjDwbxSpedMsXU1Hdj2pNtrdTbHWhJXVKUDMR8k",
  "key17": "nfHwGU2YyBagmjBBBejR96YLXuC7cYvJRJTHe2FwFi7PDhjsNBEYfD57RzU2YMTRT3LveCLhERj4meTnqqbpQRg",
  "key18": "5WyMj2YbxCL6wzTDcXFvtsjvm6tns6Y42e1KPkTCKSYgN28dYURmhZR4hNenozfBnxifN6xTEBXQETuZZeWkp3jA",
  "key19": "65MjySnCrCd1QT6xmQZcAwM7KwUoD41Bj4aDokBCzMMyumDGR76GrYaFrLZWsfLwBd4TrVzQDuLqdR9vJjd1NcNo",
  "key20": "48ngqWFHKsXBEqFG3iwee24eEhbNTaTR3WfmHQQ6TF7kJyrowBSN1NFuFD2VzkUeALqtJKWwuDgTeCfJM3qQskB7",
  "key21": "3Nth46KjJ7wr5hrdCxZ92CXBfJGN84PGkHhtZ5c9mNm4A5c5yJUwBU1RNAFCmAQmHJGiMWRgQwNB4P9utrg2GBJp",
  "key22": "26D3fGybuXxoCP89uy6os3BMjTkMK5mszZo75t7bSNjKCZphKG1cpzP9UtwEmeJmcgg59VYx1FjYfPLWQyqD3adS",
  "key23": "GbasTykDpUeXNvb9iJD5cRrzBjS5RLwodBH3v5vFDpyXSoV9Wc62VRibBLUrgCoHLENtPk8C6zozt9Ki4YJaVyV",
  "key24": "VACKwdy3Wn6Sncqc4Q5dU227yxV4xfe5Qbbu8bqvVCxrXYQBsNzyaoRZNvQTDx9rTd5RFaSsbY5Z6SpbJf4PZkE",
  "key25": "3B8V6oNy4CwAGHgii18n9PV4Rkkhvut18khsrAqQyCKHEJooJ46HKBykuHFrw4NgqGiQZir4Ti2yWKJ5vycPXbX8",
  "key26": "5e8Q7GubwszEGN7dGCREBj7DFZyTdaRtyT8Mv8fhLGpTgPpmzMLjEHKNTi36Kd9tRMsNYT6S331X8hHt2iCTgKbX",
  "key27": "3hNTiNsM2PKyhBxqLRj9cjpfx8tomtQGMd4B5BvmdPHcTckjEfrHCbnuAiYbLVvXqFQTa6WQyvwFNoRRecJF1kta",
  "key28": "3vSE3jeFUUsPw1be5sRqKSF5VC6zHL4HX2swXARKVdxnf33qJFWvdZF7wfC9DwjF459PnJXZeGm4ic5QJsUXYKbP",
  "key29": "5vZ9csEjVVVsMhTVukCMNm17ydiWmzDQ2ZPk7nPESj6vier1ZdaqxNfXWKiEtqAXCVusWJ2fndQ96MREtmw73y3S",
  "key30": "5CxvZqYQd7nJGRttQFLatbf5Z62zSRCHLnj9rcN7i9HnuySQ6ie7GY2XUBQyhjkxT3JAdRKwhoH8kiqVmmmw5oKt",
  "key31": "3ED44VjrM9i5cVbRjS6t21Eyvuo5u29H6CFTBD1b5hs5pwd6gogyvJkaAwNMtgArsZ22iCFikP2A9yjN8x2XS33h",
  "key32": "5WPzFHcwbKj866qtA5KUhggfugjuU3xwUY3ak74bjyzqTD8cbPh6MqNHbzKax2iHgkVzH69Vh7Smw8yiZrzf5YTf",
  "key33": "35T8udz2tmxpg4CsCWtmC8KzX7FkET4zwnY5Yt85jVpTBH1zcidkfz6m2dLTxijBhotUsW28cXP9dCjEYSns9beB",
  "key34": "5z8vCGT5Ly4HFUs1z7BWUThggTtuYMEkswmPP7vDuoAbet5TKY5tzXKHafjqfHSaUn2jDWTcU9M2AnQ4SHSDKE8y",
  "key35": "4VSXREULqD7nrHjU5P1DnaUPirxvewBo1CmGzyo26iYMfor5p7zUtWW6fxU96cywKqowzS96Do7hN9j84DPKuTYs",
  "key36": "5mng2AgWZJEuLmG77V2VBt9QMczWpTPpMNbanMoS8tMUYxGLtYG9Q9Bs7mQ6RkTxQe5dtMq5md7nd7hyaywa6bQf",
  "key37": "ojLg1j3LtYoVRQYJHNsuDfbKprP4MEDfTfGH2XQSyzZon8RygpzPLtHhNBtb46CTwaBRqfqQeWnYht6zBcS5Rrm",
  "key38": "krUXnRYuUh9n3KXohjWMM4HgB9RwLeZ3uAGRPbzKigt67rLrb4ZKMedDWq6w7g72cQcjBvTSUZ6zRbyDKKRJh5G",
  "key39": "3FQKgWrMKxf1vBwtWDqfsvkFTcvJ9osnsGB457JYF7qeu9EyPMcFReQgKrT7S3J6DqeJ2qEDNx91Vd1S8mioFEHk",
  "key40": "ygGLuqyhS1LfTD1jdAq5zCqeHWXQTPCLV8Vq2BZ7ewTWFx9v9x6RSGM9t6ndm5pqrBrSFVcajCTEqmj2chmCyVT",
  "key41": "22UBk5fygdeqCg67vesEk1316oDQxMsJXsyapxg1uZQ2viskcckzchFiQEXw5xphbvKuFiECL9dpTEHK9QEvSEaM",
  "key42": "Z3Jy5J3wU7vQPSKQhwJKeKHWcfZRBnb3mtaFiEAFZmG7czsZuUy5av1uatCMD96cb4dZ32RbY16E3rHc6ju5jAi",
  "key43": "2hn1MNPnHAUY45y2H6AMDG6BNtKQsisjMsxA6RDD2pYvgzDdH5g67Lzf5K8qrq2TbmqAKnmTT3mU3SRiqX22qsWi",
  "key44": "jiZsstAFfnf6LAeg1qs8RchX49jPAT3Rk8ikq1obkipjtvXiRufVqNx4hGeeQ4enzCptukFEJ1jWPy4d53y4YsK",
  "key45": "5vKZ2mtZJsHX81eTZhM9Pa82btP4y4QV7HMcLNfZXi9QLTDVyCNRw47uKKJiQrbpYeZn56ZJSYbZQDAYsoYMp6Kt",
  "key46": "fi44cxSmXr3doU9ZdSU8UgEHVPh4Yuz2nCLpoD97AdpuKJR5yuhHRXUqa3Vy6dExwDxQ4ofagH4FkyY2d1WGapS",
  "key47": "49kuuMwWx2Row2ncC8aeVt33qwLcX18m9Ty9dVhBnJrdLHU6oMb65EcbSPD9AJ4aSsbCp2jwVZEDC8pcDhwmA6HR",
  "key48": "5RKwYCEFL2Rs1FwsfcRkFRaPUyo5aw6gfCBH72qKd8MNvpMVHvxERPbodNU7PC2hcfRcoBwcGgtRx31T3fMNyjAT",
  "key49": "eeh3JJQRQ5JqAv1RCyJNkQmHjgPX8ZoY41s98PcMPYfzLshDSPjBfmPhBvxSSBNfqNz99bQYkRfCS5XquANU4Tc"
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
