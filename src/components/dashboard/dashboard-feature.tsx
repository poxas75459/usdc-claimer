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
    "1w3Kheg9ajeSvvgkinND1QxYwh73doX1Ze8ZkGVfF6a9H22C3C5ER35GLWfTvZ1wt8mbCoYGS1KPj31c5CL9jai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZWRAvZiYWEiALpB7QytG7JqqwCkwuJVMkqkz2GFHsF29iUyixwJ1GU5TnrKP2KwZ2mtbYnWX5zRELN5KsoShFi",
  "key1": "4YUMgEE7vAFVB47GoAxFkeBdm53TzoeJDe7ekWv8H2a8sKCnotnkxm2xwnuVrh4JfgYpWykqKRaBshsB2JWJcRyu",
  "key2": "4zsBfTjQZyJopQaMQnZzY8aUkpRJhG6uR8BfKH3UYEGMvpB7ndshtatJJhub71hGcipKB2H4UoEnAwpRrgNvbKKD",
  "key3": "2qHaAjz9dfg1tCF42rxZysv1bmkz7oAG95caeCpyPow5eACpJn6gQGJX43kMfqw5gQvrbQbrnbquaGnPPcXyTNAh",
  "key4": "4vf27VFRtgmwEKEZAWZJCZGA7FrsTsSytKrra145WCsB51hMAiwBJzasgxCeXiSZUgoJkMWvsxy5ngk3oymZHTpP",
  "key5": "4bF9mw73b6dJVitvCAz5v6gNuQbYA9aLyqK6XppSo5WQho4VBcqm1HFksqiadap8bRvWVUey4Lz5z1otEVkzK9cs",
  "key6": "3HkdLxrem9JeeqtpdDwTfNJnedT4bhUiZijXk66K5CdrPqh1crpRfT3Z36BtZ7ZDzni6SWzVr3V4psAyWWiaoBxS",
  "key7": "2vj1YSr2DcvoNTuNJJQDP5oABJjB6hpqhYM19BLfHd1Z7t1hAhGW9SijPrbqTVFqefbp6sKDazwiEMQefUK1zVcE",
  "key8": "3fAbukwKGYgaK1MB3k1dZAZjEmD4vf8GgZ1U7XdfPo7hbRYmCKYS3M5hUzFoWDPKS5QfMuy65G3BSdhpWzrC7svs",
  "key9": "3YdGFFTKj6BKwn8MLPUyGsutX9bxQ7K5gpzeXT8E4Cei9523pX38rVMSaMuQH7X5tMHxxsHkATmdb1Eq238fYuxQ",
  "key10": "2gQskaY6uxpyCrBvrf8znfT8Y3RkwB49wcmc7fPJjkoheqARGW8sLs9EGkqW9s5NGAf8djqJMDoHVmxyC2nSYx1N",
  "key11": "4Pyq6dcUC1vtLk2VGEzHz77MrpZhcShkZ7gYwSXHMyTZckjMz9HbhQf1LmQhSEq5upNDwWTyLcURfFnHkhbDV2Xx",
  "key12": "3yS2Fa79Xh9VQrDB7F25Gv4rqywgUYUPmnmwES9ihMhRJUY5crjvuEY1KsxdEaWfcQT3zNu6QoFevXQ2PgTNDACu",
  "key13": "5CYTseCXcgN7G4M8udyRGhsbu1py1FzJFjT127gJw99NP7xoko5EakhQcRWw2hmHbpZG1NS9g6XUtkp9RdGvV2n8",
  "key14": "62LBwVbUzzjTw64pFwSpN4za5fQB2kpYMdtWEhaKvYVvXbw9G3yLW5x3RCMkMSQqfmd4tUCF5ziemupLeHL9Ljrx",
  "key15": "5j1BCegk9uVYaT72eYt8TAFyyGhUTQGYq44JXX5gqU1XDu5R5vCKXZndHm87seujM6WepY9JgxGBHR51Ng83RNVU",
  "key16": "2GbhoEMmumz6RETQpsraP7iCCH9fGDs9c6YhbupvrkNHRS4GfJA1VFwkSscENV45bUbfAwyfUodLQme2pu2Tbt2N",
  "key17": "2tjmQ4Y69pNHKEbG7tuAWxxpdce6ftewRhNB2HjiXCqimctimqVKB52tEUW6YKAu7QRTRByP24K2AeBB2yEXML9v",
  "key18": "3ogBFirYrwxVv1scAwKsP5SWetdFzhKZ72UGqYreE8Hd5Hp6Rx6UXRRS8id1f4KSYZ4ov6uoLAM5RGstKVBMZPVD",
  "key19": "2r1Qrdpc3juz2q17fvnb3kyNdt6KNfM8VGFVRSsk1ZCYdaoNK5rtXh1DT9ceSM9ffYhpEEFwNVKsu3FSmxfZLTBp",
  "key20": "2UYBfauSWHRNk2mUb9e8ENXiWpekTKnp7JArySe7UHmsC9eqepdm9nzvBS9SNZUvabEUtWFehhEoEtHWXrL7hhzM",
  "key21": "5kN3CFmCnWA8L3i4WWqeCoptQ4Pph4S4THAbDqMA9Xr28c7jDgDznVimDgS9UTMaKGiJq63WEatvKRxATm6bECYq",
  "key22": "5UuVLKXdDxN8HkuoueNEjNmwdqPrRKdbzHoNjy4NRFtme2JJydES5osnQUt32xwwu7iQhLkGNbCAbAmpnEsRsWqD",
  "key23": "2tpanRJPRm1cVfAXSoxU3yLGnpYZDAvccXsJogK4uksgf8bEHCbaj3sLMWmAtkhrNFobxJwFwHDQk2Fn6NKaopYP",
  "key24": "3cN6YLHpAAx1YCF4P8GmRCXAPydQTqf9mWg3dFb9P4ESwh6grEr6MUZ7Mnw3jwqZrVxSh4cSYtWmPmHKmB3xhZe2",
  "key25": "2inAhmTg27w9V3v6UbNX875gtbs48Y9MPXSLmuzr4Ga2q4dW3BqQWX3Z2M3mRfQSP9TZtNxQUSAJPhhGy7WNw2Rc",
  "key26": "41BCiMFAm9r4jKnEceVgcJyBLvWCLowYZ7nJ1HbwRxJakbZMtqDraKHJUCkr9U64bsfxQtDFh8EwU2Qw99Pz2ppj",
  "key27": "3ZSd7Bk2RuxfWK6LitfRgfNHG9hakN2uVhGo7QwV4iaiVBBjhKVkxqGAAeGtbtXTvbHeL7EFeaZC6wvLkrS5tbYA",
  "key28": "5FUUCJ7MkCm1mmruTtAUzuE4wg4XULTVcaayoPuA255Ta7LPEY5ExY1WXPVaBUTGWaPiBD5HzgGskMBrx8Q126N",
  "key29": "5uifdEwgYtWizACnaZHaHHRdMqD8zKXLVhWrPdnk6NKR5SneY2diahMZ3xNMbzSkXKqSfG4fFiWPZ4yVedLQ6FaL",
  "key30": "2RNojS3NufmrYiyu6scCbzC6e8NRCt67vt5BjbYgRu4ZDAtJu7D4bu29eYNQed1hREA14HpxA86KxsSNkR27hH3Q",
  "key31": "RVmkmVpxgfie9inP8o85U79eaw9g9EHNVKoDEMqYgaT8qiS583D79F6d9b6crVZ1rt4qvjVykrHekkGGBFhdL2P",
  "key32": "536H16tdf5xxBLBH91PbaTrgoaKDDHwJC85wkcSKyorREmwQpYXB1ZB5FhipyiY4DpGfJTSNJqV1tJPzqqWX81kQ",
  "key33": "4k91ZS1gaWz4FWPD8Z5EyeyGgFcsPqqobNeVQQa7xgViv7robP7YscBwQYJUonmb7DZz9eksNreU6iq9nKPeeg7i",
  "key34": "3tQdAhUiAmktu2nKDLi1oj2JpnZGMKAtFubzuq5qaoJVJdWmkhg8GmapkF5fADqFV77vhT6S3n7tTNZoQfWMn4wa",
  "key35": "2bJRbExXZo9pYc7HeqvWPK8ntboeNpdArby8wzCoYz1hZDk3wNLYmmDriQyTBeco6eECEGwqUxkcW2EGEf7UhBvR",
  "key36": "4sfyLUUqxRnKDjJzK7kfWmaNkSCDnFB64EfcMoWMovftWHPLvyauKt6bARR2ThdaxSRmNNeLgyimr9cAZPhSH9qn",
  "key37": "2rQmqJcVXdoVsNhAkRRTQwFCETJRU5TxbcYwW9eNoJ5PuAVZTduFquyXzbsVtjRKi9Lnq2iPULErq1UqQSUQzYzZ",
  "key38": "3M61yqDxFsk6DXiL9gCv1PqY2ED3hMMit9zVatfPk8DJm6uBXvuuEJDRCjzmC5gjngMe7a6sKwAp7BSSQmMXwVnt",
  "key39": "AhqmnyZY4G3Pvq2HmEmdgJtNYRyWbqSip55iiAHeyGsuQob1cAjMVR1erjSUqWrQds3b7oVKTkkGqUoPADnGXDq",
  "key40": "3NnR3Yp3zA1vAK2v34nLhsXmgcadQ9FkwDJr5QrQmGx3wxExsTqifPdBpARGhKyjgMiJqq37xF5SV7C2VHTdaCti",
  "key41": "2ft13E19bCVXsEGN5jquWr1Pdvrnw42WncoNgQNq1iP1ipNhmsugmEGKKPx365YG9odAxsHchdnkavCPeEbyEPHF",
  "key42": "4H3bu4spkeWGtJxAkmUxtEzNfj1j4xJt3oZSJrtzcQFPbmkEtENW9By9pstLeee9gjvYtgB3iLMjduk1pyUJaRgg",
  "key43": "31JZBNek8ooLAdeWuDDhE6Rz5Y5DrmtQxFbo3JbBGuG42YfppCZRuFZpNZ7YjHWmHX6Zz9vP94sL9hEK6LZUa8Aw",
  "key44": "334fkzkmACoHKNeUaYykGcvcJubtEoU3Fhw2DydjWtNjfNRNU2QRopcjkDnFMx13GAz8uMqaudWT5Y8RVhHfMH8A",
  "key45": "663roe1Xb96xBQECimL7V4awwoKKT83RXzkRkhgy6UmeooEpGGh93rPyJCGcj3ULFPAkrHvE2j3rP3gEkmV4zt1G",
  "key46": "VP7e7WPAFR9quiteeA9MHYWBFW9tfdy6p5pifoXuxG6cyTrhVC6782RppdvGAjSXLMTqkWvpn2b5WsLSATjMF8A",
  "key47": "33hZSdkeCg1R9yBuRNohYEVJ5SXncoLoBnr3BM9bpN3gRpBXtagFrx2B3FAxeRfgpj1Jfnu7PMsH17jinGTJb5ia",
  "key48": "4Htq1pLCvfrABTgWHVYNrGWdaQHziEuhzj8jiT3vz1z61vqowDerdSg8EJ4uzqGVCC6JTUuYqnuiMaEcAHNujWv5"
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
