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
    "4Nk2Kf9BU4hW2ggR5Vn5Lxe4RRoRbiiqeqDfXxgaav8FQxPhAhtKeqwMXw2U5pAo7hBXqoCZHmCLp6k53ftWVr79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JhYY4VUMSMsPwiocRpw6pQdXDNGHj9gAhEQvXCVrxMzNDDsc8VmMDfd73EF6muZCzJVCBNwyE7dddBfTPAjZUX2",
  "key1": "2sXZrvXws4662F3SGnNWefxW2jetHF1XWBkdY7fXk1DpTXjChv33ftruwrRLU51qTYo4mxxNPYTQsUzWkTFsH7mA",
  "key2": "3nMyrBC6XLfyEJ8AwqKkwBSHZ7wtXrV6G32PHarBxonh4ztNhh7HwHimRtmf5kVYfMAcM83vvkfvzX3R8BDHHjVM",
  "key3": "3rGorxAchgXEAaeGhuF32PiwYvs1WXF4bQ2pTYNJwTGexHyxfy7sYrUME63f3CYTu9y3vSRP3bpd7VBh7SVfqDB2",
  "key4": "5SnvyvtGt5NoEoMRX7ysGt8KPYzn1smyweQ38DxfJcD4TnJxsuk1ZzKZsvc7qkHDLgAoRa91BS2Mp5A6fTRxNv2Y",
  "key5": "5LguK4ivZmd6A2JGiWo1Ug2N9iWwYYUrJqrZuyiKv1MvWgk5hMMPebUxZSoWTZegAH2QPAe2YEo54PzXXt29xMUD",
  "key6": "5nG4GWjuMHct6T7GciGgyDykoM6U1wkmoGL2RNwj2Rjo1XLWgCAxHUWDTsiSaQGCAyFv3iybBCC6s4ZybFiaDCRU",
  "key7": "2cZnMU5H91kJnrhog4Pd8ZaoUz8UHSyUJuXWGmbwGUcU647mmib1iFAFR3wHwfpjcdv2kBdErqTX5f2jeQr6Unwa",
  "key8": "Wg2zbNMEaJRUuQ73NT7stEbbBiqgZTReduAy42YqPuYe7nzMxeSNZzbcizwvzCcMP4ZLkAqzkzc2mdYBtW1EPBR",
  "key9": "5HfXhNfzHfH4ckknj9crmgLcZUMZKiADaE6HRu9DHFw9Lu5DbELPydYJ1AvCHHZbuLTq1ZW11yoHFK1PYbDpc5TU",
  "key10": "3pTMjCdn5D9Rycv8EMU6wENZ7vFdaBdjDzYC2AWQogugv4jiHT5K6RL7FYQJ8jDMneJXia6doUUbyHFobm2soLr7",
  "key11": "67FqWfBX2fcSd1M1cpktKXWVdBhs3WQQigSF36PdnNA3GjnL3XFFSQyXdmxWDUb1d6c8AXhWrDT3ogT2Y6jbdmLx",
  "key12": "3VDaBefXRVj8xkrgSAw97GdbavMxLsoA4JrJCsM7P9Xej7Km7KL53NgxjcgJpqiffUpQZWfwfi6RssnGBquoSSP9",
  "key13": "3NJLH8sWwVCa74kF8tGP6GMvR2ZdV7KRaPo9Cj4BQqqgLbJPJVkda8U31V2z4t2RLn1RU3GLgFmMH8PHfALBx4J",
  "key14": "61saC3FBVcXdDxZsiHL3JfFe34aJRW4E3sn9WQ1Z9DZkayL7YiSTPsjYGK79D8WbVPpwyUTcXxYQupa8pqJcqhh1",
  "key15": "4HgyT6rddrmvW26fVbvkkPoEYDxvQ7BByXJkDPkovEjFNhovNL4QUAY4sRN25PGSpUcfJbAu3WAvuiHFAef6ZatA",
  "key16": "2R369FxoSKCWQGNd4qnbp4qQqZdTHsezNtqmuxTrFjs6mD5xCGfhh8NujBCVGXiDNWrkJhhaK7jNTMLMvEQvyn7S",
  "key17": "34q7JnbZYuTrqRDzcBHnamW8EPL1QucrFCQtrMGoZGa55gKz5KG6ZYaHGFXyoHZaST26QeG7GFz31SWtPEmNqBLh",
  "key18": "2miVn4RuMcjJvPD1hAhC2X54KtrNvEku42zzk3Vxsy6iFwFZebEGDbNJHDi6EXH2G59ZszgrfytCtkYXrmnx5SDW",
  "key19": "5pAQj42vaASAnAihd8G3BibREaQ33L8pxkwBubebBkzno6axLqMM29K4my43vnPpc6Da89de2FXpiR7RbpTP5PsA",
  "key20": "359Gr7edxdcKi9zu2NiuevYtj6uzBGDrTgh8NFky8ETuio6DDr9DR2KazFjdj7Y7whS4FdEKjx8LYm9qgZNS5d2c",
  "key21": "PU7eKUZdR61keBj7p3YHLMK9Q33Eu2sPzUM1kDhQEwuEixBLQ9nFKM6BLsVnLfWNRYLvbeocQWuoqkVZmiTNayC",
  "key22": "2ihexLmUKtC6USASgbgi1RCPbLP4PXtSCsVBxSfuBLjj2LmuezUdziXxh93ydcdd486uxmfBKB29Ddn7XUiaMwuK",
  "key23": "3wyAEdoVCeDJJ7gCAywWSDhAEmkFzgWKsRXCGbk6wRjK8yxjfskMmVwd2fbPKNajy2izTdvdqDzJbwqeZmtYJpS3",
  "key24": "4Xx2ZnjW8ML636vgTRDDagB2MSRQHRRvPTmnMF6Sz2VHBuXCEasgq3TBy4h815Do2N4yrAEKwufFYNzZZosHSFxj",
  "key25": "67UbkqfvwuSnC52cGYQnFS6Bmgpj1ew7xwUPebJm41F18jkmmUxp85VRBZ7FTvqtqpuTxNF8PFGhW8AL3muH48Rv",
  "key26": "5hSEv6Q23nNiaKGfUDeAhTe96gv3KsSyxPpffyKNn3sErm6eG2SpxED4AinkEDqmqyjYKoZas46dxzQXbqnQYRQf",
  "key27": "2v4iRsiLTY2WWrffKqwmNtL65aekjzw8xTMx1D5sboRiedJjsmL3RG9getoRcedz8xWMfqkGWA4xn7uLGiGu7kqx",
  "key28": "2jMtc2qH59hvvTJMSCjyrdN8SzfmcBSK24osiE2867ze5iBPyCELoi43DUXXN4fdyLtj3GzKNVWKEkbGGdBUWSn3",
  "key29": "3VTcLk9tgBFC69NRMbf4gmMynxGW4sADxcL81FhRJ3FvZZyPUYQHxQdNgGoaJg3BiUFTTunLSNPLqhVJafe9YLUm",
  "key30": "4TzD4bxyJVcCR5HELfSCxSTGC2vWU6sTpo5xcqRBAhKos2pPDsnhsMEZCRmvDeD8mM7ieVY9xfFZyj7YfysCukQr",
  "key31": "4HgCZyKuC11MM7Drf1KugbxrzJPsFDq9VJLd2J6CwxNhVNZ2aJZQCARhUCnyhjQy4rV5MiHpQHsAs6o4E6Jrn9Uo",
  "key32": "3GP4eVbEJy6XUKb2uE4r5zUr5cAkEVKcSdwdNqfhYaFEZd6QtN1u2xGQA1qJGY5x1zpVM2REUUchH6gQwbHE15JH",
  "key33": "36zsR84GmFttwFEnc52UVj2xSzCtYLtFkCocW9YEFzyX4z3FJi8qKrku7SYBmPhfHNtGDYJfkkXEgM46vdu7DoDM",
  "key34": "3FgkmgqVPaEC3UDkVTVyicW38LDr1gaCwZccUhpD2agyvt7cQg2f9LrBKya7x9gcunDkSvuGmgf3qYD8PPUPSJqA",
  "key35": "3gQpoEWszutrLV9cJzsk6WjhhDrBKYd3PEJhJGLo4Q3VJp1MfZnVgtLLuRNNWSavURkvHhftzrWMx6XKwR2Vn9bM",
  "key36": "5Ge4Nx5MSWGhTcGR8waDdLHALYCLU7vY3WmuwNZxcUALtwfwspxmTozRYzw3BqmR13RJJM1BpuuLD6yfz6kiav2U",
  "key37": "2hPh1zxPBpkwwLhhZDrbpxyTBCGCif2mjhBBPATQBzcDcVfebkNz11GboJbHDX2MjQyhVutSVkvoGKCRWaMLSK9L",
  "key38": "5s8jvaYGHFY1YGzm3frgHQBb572Dvh5CF5rzY5hf7myX8hUr2TwLkynRwAJE1gWZSDza3YRXP36ub1mp4yFJ97k3",
  "key39": "zgLCDhgKM1Vyvm5vKJarKbqB3Khu3ju9K6rHmSYBgyHjgmmn452vVNZrScqnJYBJT2XTL6UkBDRvseA79u2FfuQ",
  "key40": "61kLvw89jvQb6bLukkC3DkWvtKwUvGNq8YkcbNi2tYG3VtddYQDEtHoPLWyfKg7BkCRcP3zbTqo7hHLDdphX14yt",
  "key41": "3DtXfkd4brHPWFhDKkhB3KSkoEMZBZkQD2v53EV4mQyXgfWGjw65Thq1dFffrrgKYGVg9FZS17t9bQk7rxBHwJLs",
  "key42": "3JuZWtgTm9AyUcwABufZC86iE1RxW9wgsG23CxEBUU7C6MP5Wuj6RWwsoTrAN7dNZm1BaVA5aesFRB5EnwMkmquU",
  "key43": "4qc43hwrPM2aGqoMeBBU72BSk62nWdpdDmnGng1JheDLyt5sH3pNr9xEdof6HyqYBYQKXqg6ihY94en1RoMuiHXQ",
  "key44": "5sj525tYwq9aMkusBYaGUM7CSXPS7x7DYqFiRrdEEWkQn13zK45iJ6NChFG9pJwNtUSE9qgGHcaU8veZpscCRQhP",
  "key45": "5txEpihQYR54Wtibhsx7NiMfYcgqA7Aj4NHGjyjXH8kugP3ERwGDyC1UcckftV42yqupGkbTDwQGghp2GTCAjwHz",
  "key46": "4sSPpz5Hj5EozuhTrSyEe2NkH8JD2ticufrrvWXAqkfh5KJqvHQPiUZXospL4hX38gNhA1AK5NRW99zRZ6pHZPbi"
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
