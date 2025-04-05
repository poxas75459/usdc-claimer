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
    "46NToZJbuiQdF9MPDts1NdmjCeJBFeXfJvrVSAvybbwYYJ9xe5u7Sq74YnZXV7CSx5aortXq3kW4h5i2aWNj2dot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qgsdCJqSy8m8B8AYN9c65GAEYFxVwX6LHfq2zYK59yta8cAb8vyE7KvhbULwBtofxpd6i2zYddFmLeVYYmrLVm",
  "key1": "2wwQygEq8ULLjBqGzLw9vMZJr83YUQGnQAeYqZuqNgqyJwvcP8z4B1NDrDe7T6CGe8suzRqp9NUPQBbXm7LhrS7n",
  "key2": "2XWYFcswKHSzPGYTEyqJqTaX8CLmdJck45NgUwHun7knUWwTLsWq4J5gau724g53uQftQqUmMNTivkMLx8mWkxGx",
  "key3": "3yGzooTLQYoxTEpS61ar3GyiWgiUYHTMkjBVfs8EY3DGKvZsFqLscDbTtiSm7iBsQNZRfR5shdP1aYcbqgMyHpLo",
  "key4": "66gcP1n8uDDRpRjC8xzfdQc8Uu4vK31WjymqKiAnyaUAEYArAh5Gpy4q8s24QmipcW42akQzq6ub79BYQPYKiwky",
  "key5": "SxPzaQp8a4dEP4uzkXQnjinTnWndpAcJxLYTL7Dy1tHxgCuuZocbjxNvnRTZAsh15qviXHojQV7q8zz3QZSEm2d",
  "key6": "4RjnjjvWyivzJVQD7iT9u6cCpyrbrezC677EQE25Khg4bVWcfyqhgFGaGQUBytvibpQyfmf4xVLjrT3uskAKCdDp",
  "key7": "57GswLeSqYSecZZoaCpirNzetTrp4CnJTGaZsbWUY25jy1krhqni8zqDGFmSWpCzHaVdnTvShw1fvusXVBDArvR7",
  "key8": "3DsZYnEUsQLqLAjVRZg4t4tgU1EBVtYPcnVjk4iwrZDZjiYWKEuUV4d4UXf8aSy62dgRZ5Djgjx5kHM15ZrN3vSZ",
  "key9": "4Myf93HZT8Zqaw4VNj1BgdrWy2qyY7cGJzoBZYHMUSisHeS7YBUkjQG4HBmUUudjvDs8D29RTbZJUf1LMiUxMzaP",
  "key10": "619Wa3pR6MSZRM6VL5SePRsRNjgRAEky9hg9pcquVAEgWRT1zLb23uaQ752r931EzQyKCzJ2SoztTg5dUeWRdkqE",
  "key11": "3suPDiB4eUkERJaqxAc2BXCHQBpw9T5FcGmBwJF9psxVuipk4EgxxKna4zsyD5FQfg2uJqbQwbXDGrnbJBindpzG",
  "key12": "4kXcLR2mrh1cJQWcPREXnGgXzUPvF91dCaFbFR59UdZEJ4UgrgrunV3hreBasWMFNMgJrtFQD9pg7ht9yDLTSF2q",
  "key13": "2Y4Pn17BET1vGkctowzB8fNHBk8FDd6Hs53kNoykZgHxrRqvPPxH1EgTNw7wvtqiUXJeTV9v5be114roERsz5or8",
  "key14": "231tqmTekRMu5ZstgJHvC8pABZNQXdwxdjXgNNQkTQuc43H1L4MjPSvSkcxgiUDJRpTv2KN8VBGdwzce4t8T5Zz9",
  "key15": "4a5CeG1RwfSMRDB4JCJ6jM7ZdvWrLXyE7GbTHUQ6k3xEK5B89cCLjicvhqbpPohuZtv7grzUXf9oZfn2212xxmhb",
  "key16": "4Xmss9oYo1uX647aPp9Zbxmhat1NPPrEgBzizPf3TqP8nhb4ZiuqCGyLSJPVLd6LvpCjht2AKaGAfTXHVGmRsnxC",
  "key17": "2NG4B4Uox8Fmqa6Eh2NytNnw2LcgpRc2HdWKabCe7Q7myh12QSN1QRFcZsbE8xQTA8YBCv8USj7MwPmEmfRPKogh",
  "key18": "3XkGhCaEt2keYwXSnYoE52uo9E4qshZiLAtbuwP4foDuHXCZMAMac4EBTpWso81UtQkb4kxBtwrAY91K4PRDki39",
  "key19": "2sqybakavCt53mcvwob1LWAJsp6K5XTq72Uyt74f9nFTo7S8AtHVSNGvtRXcKoYbyN4Ro6XUs2cjjkATJorRRfRo",
  "key20": "515n3ZswfdqFGXtfGggtUyXijunihYr7tkVkbYfUyx5tyBKBD9HtQF3WDUwKNBTvfC6XVLcVUZQcJoWXMpBhW8AY",
  "key21": "3L2tkiMixziA9y2gfPKivrVtsWxDmak5KssSeRy4MefUJaaopfgHWTH1WjFg22dePXJnh8fUAEkhpY8CWHaziQtn",
  "key22": "39Uurd3sqPo2H6zVECfDMd5aqUaYJdyCdVBzY72fJ11pMo8ksS8YC97sorPM2GQz9RYurvdq8HavvkYQHAGFzuR9",
  "key23": "2fNJs8h1V5BZi6EcyEQtydQ95YxM85qKLJCs8PxSUYV6J9iUNHMDkBhJ8ZnXvJbrEvvT9WFhfS5yqPEre4xgTHwf",
  "key24": "5ppe7javEEUF8WFMp7NGbboVS1LLuBVZusEVxr1mziUGCbVCWgPquP8ZM43BJnF25VxzUQbwiPienRgiy7RnoQVB",
  "key25": "owWFD8UFH4F6NgFAeGM525njUSPtqBqpY8CeNxUjzJVfmF8xbSK19iC4txiNMmUWhqPvEaFPedEosh1YW6oSNhi",
  "key26": "51yjos226sJeoTfM48Eg9HUXCFf3R8vAHXKpGtTCt6C2PqVH2n8Ndmc6bUgJG48KymaYJrvfj8Jk18sh9auag5is",
  "key27": "3iWEugq7aaAMbxdQibBuCxZBpermt1WqXydiV6RwJLEvxXeRJowkwKJxxNxEwoAGPWUHgUScWhyoYDvK35CTnjku",
  "key28": "4zXuE6sqt1xzth353teui2nj5XmRuvLqbyH6E99F4vJbuhzftCnbbm7tCoRuybQuTh5mH3mkhrgVgjXX4EsCrQGt",
  "key29": "L39NxZC78Xy1rNVr25gAE9DcUK1UbyKPrT6nwaSMtnwa35VnNhimFEoX84acFYVaSQ4ZxUgTN36Adz2oPayjKCX",
  "key30": "2UcpZTBeKpi2TfUmWK8JfY6BXat72vUuVzLdu4bKNPFQby9MsDijyEDAthUFfGgeYwxJmHCf1GsNS2Uwpc6idLH8",
  "key31": "2df71coawaYtRPvDmkxXDQB45wyT1qaSRUr4ud2GNxoMRNY1UKwNuNe4sZAadkDcWj34z5zaWNwzsKgnLj1ecYce",
  "key32": "S6NBwerrLHF6woJexP3H7iyuUgWq9hVMcWGzR2wMybrqrYi6vuvh48pdyc7kZm5PbtNzaNnECwVsY8PrvjgeLky",
  "key33": "4iRaFNEjisQVP7ZWhH9B6R7EhyDGPyC6NCprxcVtynVpVZEEru6zbEEZnxpEW3o3ZUBvSGHCYXZnawLyiRK3jyMe",
  "key34": "42m78KZveJ7P6iVndmd6zUo7jKJqfwHbQM4bw8dbShFT2RqDS5EEbmjzJmKPwikCMSobNVZLjW7284jwUtA4Trnq",
  "key35": "5CAivoDEr5h4MWSv2ktWffFz1bV5w4SNDwgm27jfdFXHzTnJFfAjLHgiqdkTkNRdtFizt1wXSpoqJEETGWYofMEZ",
  "key36": "AwYsQCr35tPQCMFeHNTfoQ8Z97jyze7gFfkkG8kkr2UxCj73Hp1ioQmbA2X27phfFjmEpou7QUQtS7dSUkA4TKw",
  "key37": "35fivGnaDvTmBJ2Bcjh7S9JYDotZm5bwzav1YZskCMNcrddzzyJGF5Z4UFAMg5b5kCFCgaYGeN96hGwAEyuu5Dm4",
  "key38": "65x3MzrKLiVbXgyki4wyTqfoKP3mwSuUDDiQbYS8s1iPjzrnrsg4FajkA6f7BPGGR3QPEZqtbpNGhgZ4hvEPEULi",
  "key39": "5Brwyi1FCv1Td79qGKNerDxxsGZmEQRmmPaGJLLnwyoPkBj9TqhmgzVEfxWSe9ipmdXHQGhL4r5kw1DUk4E8eDtx",
  "key40": "5FgWX3S6VuT4gpLniSZ4VGZ7WEVBLxekHDN5U6geWX5cXpVYQyCWtKQrcKqqmz8EsDuW7oigv1DwxrmXcXreVB7A",
  "key41": "3bHPnG4m1wcPduPfSBJ2s1YLrGbrs8dtWKZUcmidwGqk3HPieBoZNoHw59o5jkPZwV7bspb324Lu2iasA8jFkGqD",
  "key42": "3AjMw2AaSRHKQ1jWBeo2oKBvD4NCgdsKjTpxuc5dc89WMfTd8oYDbfCxPPApBZYm54ubUefRwXEvmPSjCH3AonyE",
  "key43": "2wBr7WDzt6MdiKt9omufD7UR9HqvPKf8aFLeGDmuEomoU9eF9phA8ZNqDqLJFLc2ZHUuJuHiwP7UtsRvow3RoKyM",
  "key44": "3tkhdsstM6aSFE1Lp1JBvk8rsXkqgNFpQw6S3FNboa9GhmcRbQCsWNAFmSKCKycVhpcHEZZhPZYggnciDLPNAX55",
  "key45": "5SvRUNJNX41nMtaXaZbBQpwqVQJdPPaioVodVyYgtNoymrcUCRsRmKkG7tZ6FxAkGhJGDVdL4M45NhykC75kMUBw",
  "key46": "4ctDDxZUzCsEkxbqMDvZSWTHML18ViwetgaGfaNhfqfAHbfBFnh5RS6WipPoRardRNDtPQJ8JzVfmQCKLgqbqBsL",
  "key47": "2NngUrm13q5WhYwbsd155MBjQFzS9UdLVKEeMmvHVznWh7nQpxcEFAeFKrCw1VSxZ53S9pRmTgBnGDVG64so3Btn",
  "key48": "5MNo14BJSA7DgButocfc6e23qiyLkp4uXPiVx8GFrHpbxQKG4TBvQVucdh3ZMEjt6mUL1QswsCbnWho3UY4FxNwe"
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
