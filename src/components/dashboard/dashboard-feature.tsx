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
    "2KbUzA6KCy9FY4TqqMkFuoAjsqSo4JVpocPEfwC6PeBRmf8i9QJvapjcqpeWZaYPecrzwihsLskLQT7y4YpzfktN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swYY5WbcsqtKXQ5op45ELcevtAXTrKV92LAfXCTfDxoRdLrrXQPoWJ3LJ6SY9FCaRU9M6Y8YuDu56MDHazS3swe",
  "key1": "3z19Le83Vitv595dyABnHogbzEWxuyDpMxCrEHMR7pfVmPBg2z636DfeYDAwQ4KW9fLrgPwrRi8nUbqv5WpPcsZ4",
  "key2": "44emmTRspC2Cr5nVYwKF6HS42vCkGkQD8QLf1q9yey4E2hHs1pLpvEPp3B9SaA2ky62qsWTv17Vcc9jCcHKEALtY",
  "key3": "3hXyC6LzHoroqEq1UQxuCcR1R9bcYv6HpLanqTfoEZXzTBfDeDBe4xeyquFSNHdi1QkqZ4ny2Fx7eLtjxgcR8cch",
  "key4": "3QQekiVtzjRQV9SoZvFEcdA5yMrn1M93uQwtcmREAS1N6my9D2a7sviyrVvqfZHujum4EatrhBm4pGQCKrGKqEbQ",
  "key5": "3G9qgMAmP7UhKhkegK1hM5NDxQ1PFJoj4o4j7At52fQ5KrCrxxHPgd4JZsodJU268zwx8ZFZKiiy63hTSUu4L5Fs",
  "key6": "4MUTzzwzKRENrgDs1dpdhG2fZRdfbx1BcdEd12o6QjSH1mquy3tBCKzTQVJXFfFoULu1MLMa26aqVJJ9nYWEocAP",
  "key7": "2PLNT8Y5mtjjwgBj8TjG3xFBPikrq4j3YJVUaYK2VUEq7Gk6VMHiNgCCYjZkKaRp1T6BXTtWvwQgpFadXdMyy6DU",
  "key8": "3X3yiGuz9wQvesk4QwHNg3LHv4Sy1ir3vaNEAE6p8kjUEpBiYgykVsp1ED3dS9oaoESFct8unEPfyBBBaqJa26MX",
  "key9": "ykZz7tYVLCS6gPx1gq3ShQRdAVS7nAvY8mh4Lk5cqB8rKErNC8LfazVaGvzARB23E1CRWpfpbfb4LaaJ274wax7",
  "key10": "3AccDfrUmaDYStJckTijFDaGy3piX6P6MK4rtVVbVmqanjEWrWQESf8rjCXXKWNcjtbuwzHyKCQKZKzR6WkpBtEA",
  "key11": "2TPUuWBjhjYgx6kR8Paqb3UdMonUrWGyNUeiENVWArm1kmadodzkD1izBgaiQ44pa8diZtzRT8TPNXqxcWmoZSN7",
  "key12": "wZVEkSpcKADeDHPyqgFw5u9Q9gv6FrcMXTHbaC3MAcPRc5rJo1Vvo9dxstAz37dhnbTiRW9yuqPbxJK9Mr3AwK3",
  "key13": "2UiZkcbPMq6JPbv4p8GVuDskJmaTHYqCMCBereET62tWqsgjcGwEbVEWB41a1dL1KeiTD1fEpMz52rkWvvmy7gdP",
  "key14": "4ztKprGgehcLHUdoyRifJsKhLWmjCuBdShkSKqnn34A6zqd1NeDixVZbFFw9GViBLGHhBwoQedrZjdovWsbTPSx4",
  "key15": "4FYQbww14Fv8FkX1GUME29nnsvhXyVLJue3nQ3mWWRfz3gHrhLx6e4guny6guu9wA7BN21WporMMTJ2Uv7sh4bS1",
  "key16": "2veaMzELjJGHBMAbnKPvotG77RkyLd4XyTZpZw8xxQgywFuQGAErwC3b81QoVGSAnMkY4DVwK8P96AHeg4gE9TAD",
  "key17": "gDWqMGtPTt2ynPVXwekwrzmvcM3ewu6bjePQdQ3PkDzcxD4BgY4pqZrMYEpjy7DR2864myWzYuNdaBMn7LmKXL6",
  "key18": "3aLvuyfo3yw2EexHpb5xGBvvWJHwyZsPHWobwub7CRpChRudMTzZ6ooJMow6HwRKmFz6KKBUYueyx5Juf2pHNrj",
  "key19": "3sc8UH9ui4U6LnDbzQGpUN5EY1ftDf1mBZVgeUv6bWVJXEd3YQW7ugqaEX6A8agpgim5fqGafFvKt2vHv39acjpv",
  "key20": "2TorPdeXCkaNoBdi1iXnFoKDkTn8LNBdnV2r12NY6RnoRwi2mnqygYAXQPTGySc8iyWGwXZJvkWLNTMAo9gGHaHC",
  "key21": "4KBQytyNrUQooTyhmL9NkefpHRxG8mFk3XnDeMTbAicgFm5wubPypDpBxUGSei7v2xtcCGYPwjeJ7Td6azh1yzx5",
  "key22": "4DqA8xr5CvvkxdhYyQAFW2tzbyLnLxJC59dfRSm9KwUd2XxNCjHwS6jpz5Brewh65LDGGhM22GQYoi9smNkLxCYy",
  "key23": "4ySsdN1eX72Rp8wUVCQ599inqwcPsjTEd1eSbhxMn9swiqNYFaMyL1rNkK15v7btnP2DEvc4HvcxyjuPchJTDZd8",
  "key24": "4RY7pW3giMpTLkFANdyegz3ECzLfQDNgfJBLrDGFtX8ZzMNXETuP5PQLVZJn3ADE6rycuy8ReSzajyGvuRGe4pSv",
  "key25": "UauNjCzxXX5DqDGQzR5WnPY1YawLijm7gLiH8u92q9a1Y8skYLdutP4Hphoij8My7SdmBWEntXf6pwXNhcbs1ta",
  "key26": "2me9LMYtvjaEQnAPxaQCSj46LQ7KzygdxPyxL6VtbXDY1gsBXyfKiyvEyisiiTUgJZwYXGN6cdLnTHvE6T1X4Foy",
  "key27": "3fQtpjyLYoEQeafqMTucYKhVTmHCJKuoNzibdbFP6LmyRApvr1Vw8KUdGjdurL2n7RrqxTkj335pg6YfEVoDbErf",
  "key28": "59B8yZfjGfAANMf9i8bQNN1UacnXFcBMv1x5tKDYhZhSgM1W7S3PXvU7GhKYd46rqnCJKknwznUBcU5MbosCYUjA",
  "key29": "5TB7B9ed2CQspkX5oDW3ALs4emEh8yvNKrE5K7u373ecg7L4aNNjcb1RvLLWbcSVYneWCQ7v536yPqSy5rM3F2Qf",
  "key30": "4NxaXxMprmFNbMd4FQgagtG7wmS1Sp6nUst5JGzdHo4JmB3Yn7szQJkAS1nSUU1S45S9HYWELfJreGFdFxFt5S23",
  "key31": "JDNFxh5ptrJtSc9bMC9mjQoCixQV6WrTvQpFqE6KyznkT7juaPaZkPnUqGAMe8V23XZ8N32WJ1juAvMor41KwQd",
  "key32": "4UJhSyarrmJBboE9mwiWf1Yi7YooWk7jDediTi1mYVwAKLtCHtoKc2qViFDqYREkLKr22gHX8h3D8no88e3fMJCq",
  "key33": "Sw6TbowTU2L7jq3B4G7MTgwkrD2Kb13ZWZAvmECm7U2RjDZomAzFHC6kdnEU8mgjE9EkcJhHBFq7xboJc1TRmyU",
  "key34": "3xyGKr1PKSx4DagAg9ob3o8kUHQhPx9bGtzqK4gTjtsQoqMibB5FZi2sD8nHVzYXnqMZppGvKKe8fHaXVVrSnkAz",
  "key35": "5Rm7gJqBAkVeGn74j4DtKN54oSWqbjaPcSKfQ9AEb6GJVwHHh2asJUAJkGTZvdC63eQpS6sEe6QaPd5DQHroTNnx",
  "key36": "WsM5xuqzTRqHR5UoCcU52xvCjJqfnxGa93YiKS7ZoZoMGeqw3ntWmoKjVfPJwYW3fYvqP2uZPysvGerqdLawBTZ",
  "key37": "2inWHEMa1WrAf3SDNgSYe4x11kvDwus6dfFGNwn8n8y1fXJFg9z2EQaacjLZuP5cYsUG1ePM933Kjy4iZwU7hFkE",
  "key38": "2zDT33kfjTZ6rd8Pn1aF4pdeRf7zLySKQJd57DW7SLzAukQEt2fD5gBUnZEgF6M4g52JqFHYD17poUER6tcdtqcB",
  "key39": "6VKjRcbtDSJygHuRRFLtJDMXQGbeSz2UcZHM3s8qqDTgBZBMXEGfQBYvBXFyMJyPfT4QA53fyykASEGzAUoYkM1",
  "key40": "5esix4KU9fPEa9b6CHHjmozKtp9fBcai3BwgUrbB7CALckNRCa6UJ1WKXBtGeK7A5TxtzufJuMBkFKJ7CuLeuAST",
  "key41": "5kPeAVXKsD9eE2eJfKtwtWzWfZU9fpUpTPMnohZj1vdN5ZiJSCxwDhgwrP9qSiKRiTwn64X9PKn2gyFgPxKbXwHQ"
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
