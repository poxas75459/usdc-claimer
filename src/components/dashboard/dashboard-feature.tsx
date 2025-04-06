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
    "414aQ73oXynjgW6QjZW6XLzjm59ENXtA62YpRCUrDUEiJukYYKpJbmjqXoZLodA6t2Fi7qsqtvGfsK1EZ1rttNst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hivtrusydCxRuy382ND8QGugUVgB54tH5ATCJgyhWzRGYReE7L9v3CZgX1ensaNHe1EsVGELWa7uYeSNShWskND",
  "key1": "5EMHFstBwDP83yse4CWvJKKt9CLVNjzkNXsDBXgLtBzW2Gmr46TGypMLY3aZjYW57WguP2jWCMaRszuQScqTiT7e",
  "key2": "2ACpVLcCNUcdVNVBoAa1sUQuDj8q7xPtgymGfiChhcnEsfmN64G3BQQ9GJN8CrWTEFfvsBDXAHa4jDxuKEeBt9e8",
  "key3": "4X1xoZoMHeRzT6Rfc2etFAip27Hj3xhMHomRXpgJHndby5wzY7B2wPmLci1xtghP3H9U67QC7m9AzmeS7F3aahwt",
  "key4": "eZwX3GcnUtvSZdsnPXmzmUKwX2LyPY6MbEwGSYayGm55hThozDN4gp2kchT2K5hb7mR5Do4ZbdcfGeA4E69vPSz",
  "key5": "dyTjyDVirZATFQJKxKNEYVbNAP4yeDJD51wNLkqgA4PLUPPkViVqyorHZPbJRVVx8PH5puvQP7Z3jK2EAAjaPPd",
  "key6": "2HRJwZoH9it6RG9zsYxusMAd4NtsDbfVgJ8hrF7AmTSrq9FqnfYPUxM9be8hdLJVNj7VH9gh4uTJJ2vunN4QuC6B",
  "key7": "4vfhfQwP2Zf2bBquY8xVLxAvMgsNj1p6zpd7bp6Ekb1tZFvnrbhtDFsYQCx3gUW87WgDYYeXB28di1mQBNqNaWQ1",
  "key8": "5hJoyhCa6c3T9Cg5YEy766SXCyCbieM5CRQ8ZCHENQSMJde4AyipyMHv84aeyf8W2Fh7QKbb8zaAKjV1Sc1iZwff",
  "key9": "2Wv6kvGnDqdfRCju49ooMeDCriTmSv6yoi7aLNj2oEjDSyEEXbhogPDMeTfzUxwBydofx77BQK4x1rZoExWkZ71G",
  "key10": "SDwHNGCFYHUwNxMb1ahmHRm83ExU2ShqBPp6FbBEo9kyn8MHh28FARq3uwTGDecAaJGS2GNbMDdFdgUEgYDZQy4",
  "key11": "2yNXRWj86HhfPNoehH3D7M18eCFdM7N7TzMVdxkWD2QtyzddKoegzs1ZqRk3reTvZPaaTRzS3d4wiGsRSb5K4kaG",
  "key12": "4cfm4mHtyqr5VdNhSRr9q3wmxTH8evdzUk6zCo5NPQgJCFj86jY2SpmJ3JiZm7eQgNd5BT9AXCeucfn5cocxEmJs",
  "key13": "4a1A9bg1ShwHJAZ3b69KEAtAaxTDjFL8YQNxFzw4hSYPHy6DHW4JupKMBCjHkSUBUaK4eCjzaYc2Rv2eznT4FzYi",
  "key14": "5jpg7fUFCWCFQ5CRnTaF4sMj4gD6WAfRpVWWbvrTg4bf4WZTd25wiTCqShFQduYoPer4EX3182JABfDMUiKELTuu",
  "key15": "5RjrmJcWtGF2v1CDrLijaJp5twV3D7yHiRW7aaexud8BnAZUoqDsqwBaiaGobcvpz9UchWnWfwvVgsbnsfGFvjC2",
  "key16": "62HrJ8gwmVsKfKgEjwi7R4SatmnBZ9juH2sdLqAVXqJjHJqLCaRJ1UpwrXFGJPCWPRbsR9tKtTPjp5NeHFrcu7KV",
  "key17": "53xbpLQAqhtRSZ7vPoJ4jJdcPRgxMzMV21dzVsQBKo7v6NqKNrii4F6tRbhQSxu74UzKegeP4VGEZpsugKWMnfvA",
  "key18": "4P4owwiKfuvK3UL2GoMhLpEbAAY3MB9b7rFiJhiejWmH4tvdbmjkkqUVQ5Z3MmDUHxMvzXFRy6Rnwb1v2MSESxj",
  "key19": "2sAP5qYXwR4ZYumxat6xtPeUpHvuqTbmHVzNe5BdUGgMWsLyPjheHtPy7K4R8HKgDGkd6DMB4UpMGPNtiHtPRg4V",
  "key20": "5azFoxHeAx7iuMxvAgubQPJzuAKNzkPVpjNZhEQQx6BfCJBkKzxvVH1oN45fRi2R3t2FkNQqNVTR7iFYPVcwpnWd",
  "key21": "5bXCrjtbts3WcSXPRLPsNjesidVU1s1UvRxRjRqwbXwL1FmRV6L8FCKZjTaJoWVELbsAtcnayKmXBkfiyZTN9wet",
  "key22": "5JzX3WqRDmsrLJfPp3EnRi7HMKCJr6ov1cXcc926uE83pfhACCbhFWqXSi5dSfDZeTmEtkU4M23qJazp7MnzNwWj",
  "key23": "26y6amhwekShRjyoYwyhpRw8g1wRybxVu96onRzTJg4sZCkYBDFrTh3oYpokq99T8WSq4ojXSqftWRmopDrUzpzo",
  "key24": "5v8vcGKUvLdRQHjZ6JExPZtjhmsP6VXc4oPbkipiEasL62Rz6pcznyiQpd1RJYDzGy2tCoREWaqWTUZAUiA7TKhd",
  "key25": "ejPtVB7j7MV2ZvxkEoxjkX2rDAzWkkv776ueFhVmiTh4iXWhqAxU5X9GPABxgAqzhZMtC5eHKbspffUS5ZeAu9C",
  "key26": "4298KFb2Cd2SjTQbHxEd9UmzELa1XUcCj9PkiGT6CXf7MfKJ4CmuYErQthXYN26oXExSiddP94c16kYxa9T8tnCc",
  "key27": "4wb13Rdwv6ChhFBd9XYvrEa3JkK52DHqqqUYar6ptLUujgwGKHr2wPt7N8zNzZ9ruN2DJzd2Vr9SrWB3Sh229rWN",
  "key28": "269NzfZckDwCMY77Nq6S2YbTj7Ew5ogYvfrj8kqhntfZS6RdMt5rjgBUSYGdG8G1qDWEAP8xtWaPbmVvXGtZCoTC",
  "key29": "M6DJiZpT9x3vEbdSAPFJZvQnRnESZyUrjAmjf1PmJTBnKWzjbPcDWmEjM8SocQH2bCc8eFLherwp8xrwir5dwoA",
  "key30": "DPVtzp3dcnwipS9kJ9TWUVZooSNHJETfNNczoS3YSktixtvYFqtLopepLqxG68SpZAk1fRkGGUUvSRjLZ1Bxc6t",
  "key31": "FqXCKnW77JePdUWLgHZrFUUADVyCiybnyycvvEzqEeTts8byBcbwb5zxiWJSrMVACsTw34oacYme8LhHgU9Mtcc",
  "key32": "43q4tZmF1g5N2zT8RSrYfARBAQ9Gpmpssvu94n9aJy2WcaZvcio1ALsN5Q7S6ik7VUwTHgJLQ962vHCAEsnuChAU",
  "key33": "5Kcc2GSL7ucnoYJAkjo5wDCaJyTFdBzdPFtXx8TGxNquUV9nNdz9vdA8vPtF6spdEKrfZAJnx2bqKHEActtWfSTd",
  "key34": "71vH3zwqsEHScQdPmWFzBdR1AJYNt9a3Q4rZYxVodrCDMfwEmm194dgEk9q5TbtEMNUTMsdmYJ9nhTjGAGJ1d1q",
  "key35": "5TAynZyuMbtEmb6KedGBZxJthjn35TuADboJgUTnjniw9W1ekvmVTishUFf6migvg84bah13nWiLBxP3W4LU4UCt",
  "key36": "3NwKSz4yMp2TAPHZArc8uPTs4pTYnenQ71Xmw2fkUcqMF5ezqqpJa5Hg314oyGrYkGQBueR9MHtN266FTHXKaZhG",
  "key37": "3RiJW8zD4iXM7RYwsg1uAufSPg63QSGzd4ga86ifosH2ZE7pnKLpVhH1uMuncR1WvgMxs892sUTFhJEa8SqVmuQf",
  "key38": "2QwCTK5jRhGC5EVWj1EtsYfthMXKfJhCUkfTnGrV8nPSSNBU9XSKrQt8uk8qZ8rB3wvzUErubd4aKu7jT3ghXFUi",
  "key39": "3sEvzHQJZ73zHBj5dHNx3N6bc9kJidxuviPNFBGwHcfqMESjh2R9UNcrgqvcR3WoxrmDeQ4VXDBjX2uv3JfDkDF3",
  "key40": "5x5ZoxGvDXY2o7oTeXjhHxZRo51Tkv4nEEwVCoNUbb81AK7zyeDKdojLJwxAJLeh5UZhEtjUwpRamjQA4R8ReyRT",
  "key41": "2HmJcbVg6Vm8eqoiLsch38zYAQV6Hq7ySdw1jzdmYjDRVjiRdHSAZ8XwbR2YRdQnjVgG2dUdMWqdabb91v6B8oar"
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
