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
    "9KNw7YfGvn88fqSrXS51BBwSWjycxsuKEqJuccBHRbyeULST1iyuEeBEgc34bmLRkfmvh5J8QgGSCdRA7rcFvCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63M8dvoX4Z5T4p9tpii3ujwXaPZe71TuRK2FgJGzkscCZZQPWxWSySusoKoWmM97ABL3QKP1NZrBoJrw84fWTaZp",
  "key1": "2Mn8dWfK6xYeSnMNjeCeD4P58fDgHN7mcaPP9NrdXvNPZPsCmrxerG1cqCcBQkVNnaiFJu1tNtshr28EKq9xcctp",
  "key2": "3fF43fWNnaShQ9zt4dcMW7uQsScckQHKaEAc9Ze1Jz6T1YBrHeVQvtFXDeDhQ3tffnZABUtLDgRXcinzEcjCKJDd",
  "key3": "2yxzAKpxpjdKGdfhykeCt4hbjG4pzpQ4ND4Zr7AneAuXQfNYsHZXCZ4SfrnNKkHnuJ8Tx6LWm85g2oGG6V7M3hEj",
  "key4": "3BiLTweBTcgPShdB14N89PuNKkh56cTWYZ6eQ4SbfNnUNwjNSPYRFmgWWaweJ6ovNC9P5Rdq63CbB6mDcvDfmMS4",
  "key5": "5k3H5Dp7MCopWuZt6oCaci66ufAMQJiFvWaMxMXtokptPZqXfNQAJEHNNgS97qz3q5XZ3EnLZLosbHXvZyR9NhTc",
  "key6": "67fUYTEyz5UQVN2EzsEFEXpyMwdLSc1gMEjwgZTLzXeDLd17grqWAp8aoNe6pVkWRzf2tCsvVsJHb9xB5hJfT3JA",
  "key7": "2fa5FXZVS2G78mSyeASNGreQnRbgJpPZNpP3smQQ5gPbwrYUd6H5EY75i4CpiBweAwW5S6DsbtZFY8pZ4WkiP5EE",
  "key8": "TwmdWyXn3Yin15y3bBHCEJbaa1TVJf6P5vGsuHFqasHPrerLwoNVGvH9zzgFfPbF7kJCfqCkkyuEvG5sy7kHt7h",
  "key9": "3dKmGdzSqa4ou93T8Mdq3ku7tZSQiieH2Yc5jyXCwtad96PqCV1RrUVtSFFL4NiUAsDiZmaUmFZiLb75H4HYVyRf",
  "key10": "2TLcUG4qL68VWrFDQbzZyn1whZeoV3E2iKHvJG9u1YA4PW7HbVmiCQjqVMCsmHWgxaGpiSHHT1nLGRwkfhBBENS",
  "key11": "2erU958xd2pmq1GxAmKMDgjBoWWz9snbMQatRrEZBrGpgQi52xR7qkVGRhqqpD5AZuT851myDXm8hBQGsyrCdXx2",
  "key12": "38Zv5ykeHucpET3Y8aqeB3vbUSp74xU51JZ3TP7DS19XLkddmjMeLSPWnKjbDeRCX7VTwUhLZA89SdRSJfh1JuUT",
  "key13": "5GZA6KdCzpv2byYBMBputg2ZqgA2o7uTjTzCiuT54rS8DQL1TvhXJ5CKYVuWAb1qFdxZTznnqNUUMaauqf3kdwk6",
  "key14": "4QdgXq3pC52xYde4nuXbqFD5H21oLhBXJMLADvGephGNdAUYj72UdVGYX1XQEhC1deEaqnAZyDkqcivcbsCGQLFp",
  "key15": "3gjc2bdFAK4pv2SMj3taLHYB4TNqwnBxTpyd1Qzb9JggK4NLfHxSfV5p3JNWzdY7XqRVJ82c7pcxqpiMS1Xm2ctW",
  "key16": "63KJvBkH5u4SXNivYKVymndn8ZwjfaSedvbTci6G3zrqcCS72Q9BA7ZB93RnXpZ3CsSdPUJxyw9d972nr7UNkG2y",
  "key17": "2YrJkFXn742FZiv9hqpQ7ytXpp5Ei6KhmjRP7AeiWZpti2ufV1LvotbLY1Vn74H9CkSpWv1id2KorKggeYZSSbff",
  "key18": "55qRrLkjjf2pntR7amyXQpXb5MZawg7iNxWCddz6hPgV1rWXAfjoqD2WKmehbucHGPhD5w8xB9PhKWLmf44G6mGt",
  "key19": "4QetXYV6EWqK3wxiHQVU1MzmrDT9vnehF8EqZigrmtok3NRtGiPRya4HiYd7MBVwvQoNLMRSRc11mABABSofqjbL",
  "key20": "379Gkr8NPHsgcfTdtaNqC7ezgetUFLqWBsDp2kNEd4dPpZuA6fuXXwP5WuxhyRyrbMrBDj8AbswMtMphVd1gbiEM",
  "key21": "5oHADH2cAaCNQZTfCGQufYxCfn1qTWxnfVsNrJG5mKAM8iEvXhCNrDJVki7TQsuDuxUVKHg1NeLb2ki1PvR7QnU",
  "key22": "4zW6GywSybx16LgowbF4zLXn156U7rFKAhAvZtHjGvNSkBHQ2qVSTxKXNPXNzF1zCZwkeMQP4aT8bosJcSwRG7pJ",
  "key23": "4opsiSHumtmhEnc9Ai7WFLdbUQbeJgfSHGyMWY71tnNz2VGUSUcaXopUcXWCKoHkyj7AjRT4EzphcKeYQPz7Nzpo",
  "key24": "2H7qdM5vPrwsuEgkrpitHMMQkZcZcCNX5DzHeWgTQk9utzzoZxp4GQw5T7AAW39mZgRcLkMjURh2GV3u7kp6KtW9",
  "key25": "4TEFiZ23FHzfjqLrR8YAAuGGCqGhGL9i8JquUd9bn89cqD6DsCxtAWT5fzSGYh2tiUvZZXCSJVr3EngkiA1MNvYV",
  "key26": "4XiTvP6YcCgEPE1enYw8bDbtKT5Hxe8K4zUyvzd7VjtbLvewXtHfJmS9QutBisHYkfedwDVKV5k8PimQw8rvptii",
  "key27": "5rxJsKm8vFjSSxKgDYYTippTYoV58EucJYxPGbHYyuikcTPH74JPsSSYFVa9FTKSrEL4oJnThVB9hY16MdRYjQnq",
  "key28": "3RKQpWHQeDjTRuURpye2MidhjFHdwfBdAtT7bn5KrM7tJfcKKUWDMepi9UBt7G9Qa8BKa6LoPoMXpW7sqDAS5bEV",
  "key29": "2djAHW2VypeZ616dBqjWqnwvheqqjZofcWt94DJXa6ogD9wLkE1cSNZLWyGAUPe1Zu9F9rXQeZ92nffVLcznRELT",
  "key30": "2aERE48SiJc3BMz4iY3HAsaCXpbDp4GyqWvhm1bahgKBkv46DxKJUDsPcP6e7XXmZk84GK84GRt9FwnvstKHA4TW",
  "key31": "MJNpthv84XNdXs9QL8LsDWYCwEzyKGT3mApo9oRBcCNvZiB57MG1rCc7bS7teHUAxh5TqNecGrFkqEMhpNZvYQm",
  "key32": "5sjHET5nbFdMk65xtWzajZFViGAQvEahnwksH6BmWbuH75hZaYQraPDyDGL7y3iDUEEdXkgZN2wKNSB5hzjHEdzT",
  "key33": "3kwbbEm8DDtbPvz8RXshRoh557npo6gjnR642x3vgEHjnNXgkZnkprcRGjFZnPVmzdgh8JxQRnRVrpdeTgw5BjZZ",
  "key34": "5S2eN3UBdvVRCguoV4TFfbJtmbjX7UUnqvrd8hWGv8njVqT4oCWrNnGA13qn1mSXWjVBzQGbewCbQat93TXsCCXs",
  "key35": "xLNwvsK9dceQGKfoCxCyti6u4KHoniCXRi1vXvXy2uVYGSY5kBqfE2f6H4e6vaJj3kgD7QBwaZSqoemy4ZkvEgr",
  "key36": "4ojgapkfNfT8gckXDdagNGWqkvrzfGCCgrZXDxYUjTbv2JZoZ5ZzMSB3eGQ3zCaBcthRoAV5vSZDd75A5kfErChw",
  "key37": "3VzkXBNKBHjGSv97LwRVj8bmPUh6KYk5sdBHsLE4wXCQr4pD4ADxiYLtpArFde1Z2ZvckgLeVwo57HJtfxtEB54Z",
  "key38": "31KbtH9gmwVL4rL3JArct8ffvqZ6Etb1mby7osLSqTiayRKrv3KPZqLuCFSzvPHv4kBFDDLdarHWXWg6Y9wUM3v9",
  "key39": "5KQtkP6wDBuDei9PZHW2avPDZftCfDtywLPyxYAKseLMdzAav9nCRGDZtrXa3XMeNsodDqXVxM7tBuofv8jwLQqA",
  "key40": "vGqS2epWQyvhVjUVSuYtqrfZ7GMcKQ6N8ch2qiJuzN2gNWq82RP4JnvtRdenMNh2jh3zB4X2B5vTypevmKqHjgf",
  "key41": "2jfQdRQ89TAspq6g1H23Vg8j8tMXyDt5Kz6hze9MANmG8yYuJsH5czjLdrcfFwXqMrN7zWGxhGbJRH7maCJhiEWG",
  "key42": "3YGjvY1vVtrksGspcDyNdy5o9it8qTyTosABakvHkgYWCDvoeUYuaZYcncofAmaS5HAdSk7qBiYBzFs8Ug4dTZCT",
  "key43": "3BcEssG4TX1roVHrq6y5HjLcqz2mPm8ynnHRq1FRheqPvaPUqvXu3eoiCBP68vUMpYR9YfPi4HzK9eNjh3xWizW",
  "key44": "5rDf7KCGkrdijX9DouSw2h6scZcVQBi58tiDkSfHPe6D5RYezZPhnkaVEYMsybYDsNdCAc8TkE4eKaWvzje94Yv5",
  "key45": "XRJDcjjnMmgUQjDEFa2nij7hZhiFNeRnVH9e7TAMPRadUiKf53yr8AKhLcMQQSLpYbGimTXY6kCYZp3xfsoMwa6",
  "key46": "2m6AGYzWcuJ8ebEWqc13tjcWT6PdBgMCD16bZXq9MsrAL4hBBYWnwtiWujj4uXWt6rite3HHVBqYXSEPjBQm1UiP",
  "key47": "4hS3Fvrdkxpte5Pv338zDchddia2dxLBr3R1jPsKiLcCY5XRchpADzjA35PqBW2oDnDnkUdgxKM1UFQ2YRANPDrr",
  "key48": "3UPWpqF8j9EWczLXMBWymDTHCjjCVSVGSrCPrrbGhASB4cDkAD8Hh1umLwxPeqF9txsDriaRCdcM7hFr8e3PSzqY",
  "key49": "4CmVdjkJpkE2PaBJqVm1g8WJ1kFVaepipTxNokvchnh8ZQxocxPXqcLZQhf8jr2gs9nyp3bhJHsXK5s41ukPufuz"
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
