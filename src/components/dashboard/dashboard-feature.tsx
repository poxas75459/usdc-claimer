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
    "39CZavGyTYfUAD1pXSNeXz4GHwLDGpz1awfqExQMeiJjPoM3KpjwBckHqf6t5HcPsvcbES2tTUWA4f5FXLR7hi7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mu84uUAPJ2zjZ5YDLPhJVWkePvWBcZsUdsCJ1ggz4UVrKeNHj28b4sC1t7tYJAnTiwQMVW84teDiMqkFsyrdBh4",
  "key1": "39Ded4pdD5NLakyAJghS3PsDB9jiu96Qp1Z4E8PGNq9SgeAwfh5CYb6oJ4Ptv2W8vZareZA6ye4xRr7Ws8wUzCtL",
  "key2": "2jH535qzo2uwaFPKr1PCJ4GqBkKcun3bjHgHhTxA8hk5eGJiHdDXa6Ys671vqr4giLYvwToFkAmB3AdSZM63su52",
  "key3": "4yx6aobSzcXACVGvjnoXN18Ftss5XEbkwvmYH1BVZZM61ZHxoUhGfR2fbzHyrdtouTTnpwDSNm3nuzfdSE6v5Ztk",
  "key4": "3dbHwWRz9wvXs2aMe5ZC9ZC9Vg4uBnx61WYHkLu1ZSq5hQNrP1tGkq7LdNzGvWrzRTEsCYQg82SAUE8u2mVirqAk",
  "key5": "3NqgL2bVTojacaDsjpYoNDzVcQ9dVnpDuEA9QYqKUjjyETnJhMfn6QzfBVLhMTZ9ZWbeKFLrw4EwWN49jUWJQmB8",
  "key6": "5ARy3UZFbS3EszDaSxJBnc4pqAkyYcVkzR7F4QdNTfnseM6aBaPjm7vs9Jf1w23o9yhWuztsvdZ4P5CckYbeSu2k",
  "key7": "4icrgWs5zFNvvwQ6rz9CirJRWHfS3c8yxqFw71yKYbuuecCXc65tLWm79mzfG8LhkRTvHBr9CNnEmv4n9By989Yr",
  "key8": "2SEGDMQsrgCerfNBNEF3iPgHfGVrjbx7kVDFo6ApHvfzJR7dhHs28V8kRGucbeVwEoXCUatgHAAnjz8VTcVj4Awi",
  "key9": "5r68uX5cYkCTbPmC1HYszzBss73fWQbjdPCY6UhE1SGKSwbCP1UNBbzFg9WeSeVDCV4zWB4U8CTj5BpgWSqsvA7d",
  "key10": "QEZAa8PQFudQfhqaiB8Z5hj8jmQtuKyrNriveiRo9YBLhaEmUfiM6w8ExAGEMZwbgwYSj1sRnQKP5ftFnqyDCd9",
  "key11": "3kjY84aFouBqcNC2C8DHQrjk1fSVqmRgR6LNGxAQ4e2GmwiLxpJBAoL6d5wLBgSGmiXw6UaPUVZJPBRV4hRG3FEF",
  "key12": "4D6cCN5dAHv9GZq7k7uRZcRP6eH1wKahmLfwsEXZDY3BNBSDLPS2ApbvQy18BksfwAo8LDmseHuSyhMta2NYyvVh",
  "key13": "2e79Q7X9exvrdm8kWnuwU56rTJ6LpKKbaqqg9Pi3ztXtudooKeLHdrXnEXyWbEUuHS5EP8XHCX7bcyU8QpMbhkcE",
  "key14": "xuWUvAQUACsLQDDu7kzFMKUXQqoAhUBH25KZbC6vSXcvpNKmYxLADzAug551AJS1Qfa4foVsm5SzA4HAkgxi2zm",
  "key15": "2EZ88Hnd18qHL3kpFGk8FqftfBM7nRndXsbWJ5pRxNez3L1v2yMGwuGjXYCpkKDfsjnBRwfK2A5o2dptNtxKLVdr",
  "key16": "3vLu9N6gFPuzh2byfEFydPaTypRV4c1frSeYkw4Cn91QVGtNBawBxLbd4yWasVCTy1wg8tkab9uFVaBKwD8pThwk",
  "key17": "sLWgiHD26FxgwhKC9eQX1jnpybjzDVa1G1qX4DNegWuKLmuPuD3c5qXaYz49h4XGrkcX2QZ4v1qEfFo1BDhvm2Z",
  "key18": "5hsVUen62EMJRWSQ1Pf9aARJbKwNgpA2YAWR7ZFNr9TkDiwMErxZLj6hAQT9XCjpLnmbXqwBu4omCeuoALF3YpRa",
  "key19": "4ZCrioKuMyCCVg19KkLtV7iySq77xebnDxEZsJmtaM3GbkT1hmaLxAf2S99hLoqmvnwQE1dYEzi7CUP2nxJRpf6T",
  "key20": "66QqFmwH8CuKN7QexdLryzcbZMNFGcAqH6MSrsaeVo4evwZ91zzjgj7bbbx2BhXP9WriisDYZwrMKnCcMtn91ce",
  "key21": "mb5XGaRxWSS5Dz6RzqPj3XxCj4cLasWafrG4qNcUXpk95F6swH2oocqRjtonRMjznopJX3PML1NNCBh2mGBCNXp",
  "key22": "wYa6oPzVJ2ZEQqyCKMCJPMEdwmWdGzLBnfgxgFejaZUyFZEuhnGJWJqNc9T58gJKsWzQpM3TCKQ4rQQqMdCHY8U",
  "key23": "5NicQsyLCobQr6PMvk8PuY8GPYWXbYXjkWPvrqxYMMhKcW4vmRg23aQYBZLPVLxmPfoq3h2J1RzYSHhGoBYSv4L7",
  "key24": "2ia5FeBuDrGe5US1aTVUZY4P1FQ5mjb6APBnJ6HPDpM7LXsRii5GaSMk8JeqDzQuakVPf1xmR9SgfaC9JUn54Dnc",
  "key25": "c7q5v3TLpaqPZYEyb89QizBD9ibCMGgUMbgcWiYAaUzoGqkfWn9FniG62sWJwXPNXjcEMAKM85aAtfRiVai953H",
  "key26": "5VM4ijwx5K3QDtoZkA6bHPogQNk8rRS48TSDLNtrTF8C9Z3c2Tmumkdf1g1wRdW3QRJrqFRK4m4LXWDKR2CUKnbX",
  "key27": "sCtXZ7DdGRT7yVnmSBcRoVYJTfaC6GR8RfzLBqi5UqqNZVHfP1EXGWcFwszSS1wV3jnbzGPnk6Vfp1KZgAy2QKj",
  "key28": "2P2AvMwYb7sZuc5J1cr2MdVyVyMhhkSFWLLAz41BH84pesbTZZPUrRZ8ucVBesj4jNLFyet9RSNU5SUafNLKrdTb",
  "key29": "2VeMjjATbBHtQKvZcmE3j21eeMNXWwut3PsCudxpaisa6RzdpVYXmuaaRAXVDr8Fyo9zCSu6tT3yxq2y76co6cxq",
  "key30": "PwMmeFL4kd84XaAB1VRM2m24YW6t4c5w3WwWuU8hFnM3pqKTuCWc9BzGMsVLoQ8CY1Top32HqyZqbmYoRa7o3sB",
  "key31": "2QoEyn67mGp5GCg7JNx2vgFv9gugyh1EMyMou3QcPZimcxso8U3iroMwRrCuQoP8UoCPhfd2DB2L4wxTjBJARvfx",
  "key32": "5Vp3WP4D1tYmSr4MhTZ7mGZG5gfBD85VTdFYtGzTARsoJ8MDb6UHrXb65J6VerpQqqvSrfodpMN5xjBRp3CWPg1r",
  "key33": "J47qcwUi3QCg3RZiopCh13p2FvpNAW4M7ccdqsrcUs3A6gLPUQMxYwUQo8knkDZwFqi7CabrmJFNXPhrXbUTHgA",
  "key34": "12A4TebTq9MekwQLdcpPQYQsZVgCNHdCMNqGzt5RZ8u8JZWJxn3wxqFPQCj24X9rfbuhaoLZbrV3aFfGvKExSL3W",
  "key35": "2n6WoVPqPjwRFZbcQyAFavZmDV7AQqdsuuzVDFDBMSBAc16EijeWt394BcyrVRGmLaYeZTZhnn4S4HCDjM6oXG1a",
  "key36": "2uHzDzkDPzsecNZ4Dptkb1L1qrVw4TC2ta1fQPBsJi43s6UNV2z1jomqFcxjRSBgo2FkrtrhXiNTWgcm7SPzCCTG",
  "key37": "38DEgdUFnKk3PR9H7NfXn6FW37WieiV5sXyZwyJ7ZsknysTioqh8Lcn1SQoASoHPcy2FfjM9NYu79Zp89d25rTCa",
  "key38": "3P4SWPtovVv9uEronohPexxbLBtdexByrUaKM6hBprC5AeYfnTTuqjFsuutcwnUy8Lt39JXrwQm7TyZhZy2bwFuK",
  "key39": "5Ce97BrjpUDKaargtZ1Cy6NkghgDQHtyfvNM1hAUooympELhXXWumdAuBPKaMiDpETGhmfRxL69LYfXA7koStqig",
  "key40": "DzNrXXC5s23UZhLdeuR7MNS447zcptMy3JvaFN5RvcZR8zktjgNzU79SoyVkeVXzPiD2tDZUVXRopdgfXLxSUae",
  "key41": "3GT1E3oJ6KCrVFiZ4MmPMRhLyY3W3KX5SRzsVFQRnEH9KpKVSsXmPKQQQt2rgeeQecyFxzNu4BqFbCFPrcZPYnCx",
  "key42": "4sgFQdrx9WWD1Qny95DYPYpQ3AWTsGkNDBD2Uh6oiQofaxapzHy2DMWVNHFa5LNAquHejXddQA7eR6b4fQZN42d7",
  "key43": "RgM8DrYdXv5gyynciwD9Kbw5vt2wBPHnhfX1YfhaEMZRF4CEZ5Ah6WkQ6CQ54pRKtajp1ZbU1jYq7T4TmJkYYnH",
  "key44": "4N57z4kKHb7WtF5WB9EtzSXtQD6Qr3AiHiNZYojaDkzHevyxUw8vYn7snwVNrwFaGr9cn7HHFQirEb1DCB8m7iK",
  "key45": "3QjtSfTBbCkom5sWbtFRbDhn9wW6ojNqaDiFALfXuoKRX4wF6QBipP9ta3Qs3r3RcEzeoc3h4fn1XfojTxH8oi1y",
  "key46": "aUSHeRxjLQ4dFY2DvesY7A47CWTuzLeUK7LZ67Lbm5VLwgYX4VNbL9aiVqEmYQytTDWRS6vZCZFCxQoc1JuUFnh",
  "key47": "5MF75nzAFkHdaufmXYDy8LgH3odHmJ19A21b2k2ZXv7iWkou9PLt4RW5teASXTMB4utDH9PzUseHXXEWxXGdpBPH",
  "key48": "5McLFgag3dMbuPN7xRG7SQh1mJwLv89a61WiVAoiVM3HqLiqR8Mq2huVfPR1gWeLENyGpyBvWhdGh9j9at7AMY4A",
  "key49": "2n6o29WfRi529ZxVoTWCzbkBTSwq4SAvtW7WdCvP6D5CT8w8GaS1TU62jPpkqnaR6iDnN8LSuYenmWQP9o9UdvE"
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
