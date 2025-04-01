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
    "3Ro5MtRmtXg7QgmK8DdvcBv15MbEd1aZNHS36VBjtyLRgosuPX8qEDt1Qpn7QktjwS4YizxfQwQV82fSBaCd5E7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6EDFYevzAe6YT4f2hLen1nNWtWt388NSsAqQmZR5X1nwwwbnCuoktVcRrTBc88ZQYg8pbn6skUsHuk6um8Vfg7",
  "key1": "24bXqUP4RAdMANkiEXhKJfuEtsyuBoba5QRSDt4AkAQjU8dy9dvJcyTwWGncjcZMHKxELS4amGbMDZSPtWmsTN8Q",
  "key2": "4EXAtGwLi8Gcyvn2aWk7rEruP65g5PhQpLBC21QbtjY6dqkv3ryUUKrN3HvggA2Tk3hAw7U5e8sXveUUbpRaV8KT",
  "key3": "mk7mzZiXPiQ7Si2m1EyQ1JhLefwKaTLeVvZsQ9sSQC8YGxHrpdPb6fwcnDby7BxRfb1sbfRAJ9mzYjmKFAJQWG1",
  "key4": "3hZrSdFf97Xz747NDh5MZvGSMrV7pu4W8tTXQT2CJkgKCZDFULNUv4rbo5xqniB9fGVZCTzkCb8197zsvaU3gYuj",
  "key5": "2Kgc6PpjyvEbdU711ab6fQGLnfiuV84kkiicfFsSZnjvJ4GKeyBwCVVKCZi22eS3eVknJCFWiQmRdZufbB1UTinT",
  "key6": "o4RfmvurfQkwEqrxcm8da4QiFfvvRjYdG31KZAwufCfDRYBAgsBTLmnvAdasDgycS5j5kTPHmSbrwULJ9cbRx6M",
  "key7": "2wJBzjpRdxXmiRzqmCaHXjPfFZzvSVvybw2gALcfGfPxB2YxLxHQeB1g5eCqVKk5Cjkoe34pyTCkUCGxbXFouZDX",
  "key8": "3AJ3c6u8BUCNsLxvR2gZvco53N1HS5cTNKXe8TyPai9S7jiCEpXewLTesm7WkZZMSffmUkQfYbEbfb2MdHcEt6CA",
  "key9": "5b6TsCHoJj7MECfEuCPkgjUrzH5M6nweQ7XWLVt3aWnuyBv8uzrPoEnb3PYwCBjBjrT3VWeq818yuaP6CLv5EVMa",
  "key10": "5biPazEPV1x2qSwsyFyzhka6QCqwvk8EeVVBdU6qkpXEe1fLHqpbxibLneSh8gcyF7tBct2YUmZ5RvQ2jevZogrU",
  "key11": "3AW71zMC2oPkCL7AzpAr59Qad3ELP1k1zAhpnbMDAvQJY188XKShyCsbAgoL7tyG5Wci7EdDDtNCC7PUHGrvr6eS",
  "key12": "CKXc5GC2UeHvyMhX4rnrwv4hsFJDNADY4458JKmKR9xBFy8oRMhByo14yQeGEyNhKbjbsgqJjTt1T9uB7BGeXVk",
  "key13": "2q6pNw1mAEooYNn3bhKoFmPyHDCtE42pvMDNhKdW1wjnFazxRgFkcWJyK3Sw9z7rxeWr7SyfEvPzXid9aV8GioLb",
  "key14": "hvttVSXtQ9194CKqHixeSbMdGSnjQwyEMHKm7f1LwPkyG29hWT4Uum93VMdZhTJQWVDLz3kzVFhZQzNFC2JA7kw",
  "key15": "33YJdTazgKaM4yCPVbX3huZwbyZhhft2jLXhsg8t1C446xzq24YuUE49B4wgq4Hki3LdEj8tXuS4Wgy1NPfmXWH",
  "key16": "5Fo3ydHG4azmHbbpgVun1G9dboFXP1BDLo1PccxfLhrQfPpaj6KPdcgdWfvVE4Mp7vMqn8dPxXmgRamd1b33fj94",
  "key17": "45oqXekudtoP7aXEb1dC3Sg13We82imwMr9nswMYytN2HrPTF1ji8zoTEgRTksskWVnw3fzE7MEXoHGoFyB35Cw3",
  "key18": "2twgALeiErvKh8DxU5TNvbMq6QYpykNx5pJgoWpiZ3SnTv7cxvPV2qDJeXPeG4RWxffcnj64YAFeZXoeAtJbcpbE",
  "key19": "5QxMTJAmWx7FYZorEXSj5AJHvhBrF8RNJtyKq7SKJGpP1NmJ7bnvAc3aRThb4PGuCUU3F1E3ahyQ5ndrDBK2RBEV",
  "key20": "kS3xZpcE8f9nQeaaLp6VZRDjTujz9VxFaoJj3ny3MToak76V78K1UMRx1cSdpf9SU9jtB827wHhXqZA9Jb43EkG",
  "key21": "4TmeJBopu6XnnBZTXhAPt45Amm52fY5sAzyYAvuQKsAd7zGi9aVzVr8enXUYcs5g8UFzR11UBSN5EtTAqLuYFpkS",
  "key22": "3h77gRzF12RwMLK6iaoho6BD5opqBUq5ZuzBWWeG69nAo7cYQeLgdSSTAvRapRBNrLjQFMYVzDxbKZtELFuY9vKN",
  "key23": "2ATP8gb9zy7KTP1CokVhZUUpt9eccK84xkarofmQ7wtoSk3jbyMyU4e1RR85kVeZqZKnLju9HDjGDmc5WBy1SZVL",
  "key24": "4z1jU85v2v7d8Ch23ZkVAZekiarHfWrNmH7ngHACKVpo7iJNASsxCHLGh1EgCgCpRkNrgvVH881iiFth22ry52bd",
  "key25": "2Ex88qL6sRpZxH4ReFXv7Tays7Ci2xd2smG5niqfvJDcsGsUCiRLy6sRftkxfDUkr1fXjC8hZiyAHTHBTHKc53UX",
  "key26": "3dtMXNqRdAxD99SWq1DPEvmuM3Soa7D37pcJXfi9ziGC1aT3uGNTudPzGKWJUyzqhhXWJjg7BbLVHxVueNfLoFWC",
  "key27": "49V1eCnU8Mw4pytZSsV83PiBreKH7GbqEkrfk7tSwTDQsgQ8TzgjZjjRiT7E9GGmL2xkGH6urHJVpWbETya9U7Cb",
  "key28": "8xkQQPYCWsQffJtPNdXZaXvmCGiDfgbwkpd9c2RQ7srbtQBWrd9mpuCXboRuxo4ac22VMaWWrPza86ZudGYZhd4",
  "key29": "4tGmCzx6qT67BtgBhyLnDkGDRGsCzY8eoconp4AWQmkMWhzQd1Ku9qjMHgNUvHwLVmELwYt7ifMHRmTvc4eT8Z7v",
  "key30": "4gchh5whKw49ncwcjtxK5PCEMCTB9ifgvWnYMHtSrUfM6UWSvKSVLUsQZ8TaSrci3t7S2CUWbKnH2BeM38HumrFP",
  "key31": "BAkVMNHyRCYwL7kBGtN2EoXYnpGn7W2kobE9NRi9SKLX4ips3p13YRywqE2paRcw9GDSg1ZmeEAaqp4Wv8mWLTx",
  "key32": "3h2h6TnHqi1fQifq5K5ge7YyJVrhvapsCXbnJ6LtHYyTrSuc81g2X76Y7yrWNjMkE2Xr7s594NHxUhSWoJ9HzN7",
  "key33": "f9t2qWTFaPrkBxAjx8LWmGZfq79EV7dQtLbyZeeB6R2aoJdK6nCnjVFyCzG5F1HwSDuuuQfo8ME9drCNPkey2ay",
  "key34": "ZKLsSrZk9MvMYsexeQcfhEs6VTXfZrjHH2m8d879mtt7bQqyEuzc1mbjMa8XxeTHoPndn4mpgeb2TPDk9KpK4vW",
  "key35": "2FWnHNpdcBn4RSLtNJ53RmZTzN4VjqarxMQThEmGZePsz563w7t9ZEGkTCP92ChYSoPMvLruyrF5MxBjdTLRRNxk",
  "key36": "5c7AbMM47cSmwet2uNvgLRCzz1xzphwtSUHtskp1T4o4pLqnzdDWxxRKvfJvovw1C8qjqSm1VNodK2jaEyHkNpmD",
  "key37": "5WrapezA6RWeqaGNHpbK6fxqkquG3LZGjB7yEK2vKuRhibLPhci9LmNMim5Hzp4a84yCSCGB1VkpaA3KHwmQ4dMj",
  "key38": "3AyoiyyisXUAzURGFrDi6axNMLgzc2ZQ5beJNy7bveEZdL9e44XEm8CcMsDBvPBGpYX8H7uP4siwaRd9wxBzdKrB",
  "key39": "56jXiCb9uAbEDb7yk1UvQfoA7qKsRkuQ9dB2mQBXtmuHQoAiRcwvygEykuWedHg9VeCSYGnThLxVQRqVtMrCGKnK",
  "key40": "4noR4AVEQ6NFEp4CLAGvYcqPzmKzRSpLCMW2oeZYpiiGcu57X5YKgV5rE4V95RDbRrqDBeRDPidsU6n3qsRKSEZh",
  "key41": "5AZVKxGMwgz5oiRLU75dHx8Uq7tijDyP9kwC4nwE167YY3s2VwwjryGT8zemJSJWWVL8Fn7VZwgXhihQY171wK9Y",
  "key42": "5NE1arjkYrKWbKoBRfxB49hyEx6DhoR7LXc8pEk9btVRhkBbEHhTEaZWPh8fmiw6CSHW8FA3HtVZBN8QS2EruNjk",
  "key43": "63Bv1d8YW3F5kuK997aTNjXZ7psGnMEgXYBaQTu9fdJCvFL5T45hRKQjJLFeTds1q6igVAirn7wfWSyP1aSB9b5V",
  "key44": "2Za9aCG9rnnPyPeGu2jk9iid96S5VUhp3ebYkj5dMBZEC6AXUfLJx8UPcRumXthZZ9N21F3rdCfFtmwG751KwhLP",
  "key45": "D49h7uhRkNdBMpthfRbb9U3TsN1NFU9Z5KBgGNPrBRgrNLD1H9WJPx2arCJYq9vifaZWYGhvCYpr7QNRgPxcBCQ",
  "key46": "3pMeebCDNcjL414cb8gnajXFGW4ifeyh1hogRBkPyERm3BNAddTxSCnv7ihbzpKbbt7KGdoMin4e6qUUTGdg6p5a",
  "key47": "2wczoQkohHNAeqKiQPyMQn9dhxQaspLwFVEU2h2TVAszm5sKS8y88gxKUUTYDr8RnRV867Rxcs7gV8FkFESe8W9n",
  "key48": "2cVWzb9kY5AUd6eA3WNG3YRh4hc6VxpFNdWxfrV9XxCH32tNuLus7sFjrrqUDgUwp7fgW5HWTAZ3BS5g7BDnQqnd",
  "key49": "4rVRrCscK2vJETFqG68oSiwhyKj1aPsbRNTpxDWWg6vjH8gALMt43Ukqfb3yXKgsfzVmtpwu3WPifotKMW9uFeWH"
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
