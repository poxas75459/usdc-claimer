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
    "35Tvpe1kXXxJcwkPV6nHA6T5cxTg8Eypufq5LcPZqk7z69YzreczwVBRpy2AGxvKX1HSAwfraATwe63XHxj7ttLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JAKLPaBSwKMi4Dj7T13xuJNQah2cKw6XVVvuGnG9mmogJhwXGMHkytUo2fHQ6GV46ZgD8vuTD8fBdcSGqe6cdE6",
  "key1": "2eMU3ythZnQmJH9cNduXtnLVhN3FRK9qySpntj1TGbdSUsL8ELVbad4WmhFnGnA6BGWxWTwg2gkhjaxxHfK2d8V4",
  "key2": "4Qf2aQ3qR9E3iWn9cExaHBNQznzvfn5eibxtyKHtx26Va6EenfpzhL2i7pybvnxaRKqJt3JQYydUTpa1XmiEzkan",
  "key3": "46vtvVKmfYNbEsceYNPG26i6fffs8XZXiurYED2mfGckNBdezPWmyZTGCBAk6cCoAQhDhb2tAinTzSEfyaoPKq2A",
  "key4": "3AsDr5Lmb5TmE2hRLACzkKoTzzwbKt3yrEdhERZVsF2kjQRV17K95Yrf51V2J2bYBhPmEuyZ9FNZG9Wfp2nPQ9RQ",
  "key5": "vjXgqzSmnjo4V1mgB4R5KsNk3BDdvtbufW8oHn617RnTy4sNi5FziUeiWzmjsH3xberZAa8q2VN4ZA8UgNupnhP",
  "key6": "2VBiWAZgFLYYmHvCPXzc5tUbKmEoc9g9J76HonpzaScj4QfS2TGQrCWRhQFadCcAnG2qzhcmWvq3ucWEG2ftpafb",
  "key7": "5zSk5dNs6SHEzsTEUiPDCERPsCGNzYb9zTr8mJqGdzgZBZuHx93iE6r6HaS247dfUhDj91ZWofdrBnjiiQPUoDDj",
  "key8": "2uS1D7kwj66gBFXPvvuP82d9LSt18D5pjEsxu5c8pc57ZY4mXvC9F5qBPU18XGYh8bTp4SaEKAdt2vJMyMie6eZo",
  "key9": "2rrArqiBka5WR6AWYnBNd7yuXjQeKuPztHR1hx2JUaC6nss2DoJpL3vs7iP2PTTDew9ohCENCumEMbhsqmq8s6tw",
  "key10": "3uieUkaMj48gJc85exQrXUAvtGY638QtdvDaonzvPmhr18kbb8SxnLjvtrB9j3mnmNgiAebTTzqVS3h6VQ7kAFwi",
  "key11": "4gdb2SVnLTPBUkVEC52rvKNPxrPC2ftTSwzsx4jbyfyao8zYctzwrh3Y1pGJMfYPX7xgF138chBXYqz87CLGiDZo",
  "key12": "3hE31bxU7PH5nBEr9etgt6YpXrcsWvPzPtGDyziiaAeJ7bpapMZxknYCkrCCYrjujRj1azfGPjGEQb61HmUgTvPJ",
  "key13": "58jbE1ew12NvE5jMbbxckTjm1z1ZmFd1jpJKVmsw9Q4Buzy9u4D2BYXtPfVEQmHQMVQc9raUPHDKCaZXAfGWUGjy",
  "key14": "5xVt1TqYFjBHWsrt723Zitwpyerf2RmAMd6WGbVMng1eA2KJv5m19Nu3VjXpDU2QcvhVkn7xL3qV9uVKtJhMcCeG",
  "key15": "5zLdTpttgNXXRG1iTXanEs3NwekiBuvpZN6oC19Gu6ww72BvZAoU75o8TSKD9BHtve8QeXKWYLMnxrp7mHeuWzDt",
  "key16": "5dJ3ff8qHNgvSCHPHS1Qv7BVtv2EPEDVvkQZwKQPgHAGFz6JiBHZmXBNz3F3gaUjDEL7fpj4UCVghMTvavQEuwZ2",
  "key17": "4DqqZn9d9TJUL5jpiX9U7KfojaEWq4QF5Yv48wfrmCfLRmn9wixrixLe8rBXK7GNTyEDeDqZ6TGyErQuXvsPrPN6",
  "key18": "5EpPRCvstfxKGWMurcGaTcQUz5X7UHLDrkvN3pxyKQRMg8gNrMXpSj7ssHo5YneMnw6kNGrDpF36j1nH6Qc6atb",
  "key19": "45xrH8XkyzXEGNuo6bL82W2Up2Cim2DwUqZASHcssrKPLf9h2kMHGaycGP2R7LgEWYEiGGpuZDAvYCwUwGfGFAmR",
  "key20": "BTb3x9PHwcRX2eeGdFRRpF49oZSUpG1ThPtz6zd44hgq9FrtUUK9VXKJpsDdXdAgp94ZUgXQxgAKEfCjZyHWMoe",
  "key21": "5cL78XbM2znsH6zjtgXi151Q6enjBcNc2vLxGuLJ2U4Ge4fVfGW6hZzsauG79sYT7Yi1X8K51cKWCymNVViPJnBU",
  "key22": "PrPrN8LafhoTS26ZV8VVfeXKBPgitVjjKPmJpwKg1Q6eQPjBNq5BkmwAU5g4dBomsUc5steV8TkqFNi5e6uNiZf",
  "key23": "3JpUb6TYQ3VXLeZSzxcNHM7JYVktQvjxM1xQGFQjCE6LRfjNYHS4Us8K282FraH7Qhyxujqar47m4akUQoTyEu72",
  "key24": "5vS8hGqm2xqoynXHPSfv63HroB7QXLYHq5ayKuU89ksN64oCBeDiW7j1zgySmbpemR5v4oRrQjsjLgo3Fu8fxLAS",
  "key25": "2LWoChdYWjvUAeCgnU4pDLcCLYtexZs1iHahjgq1poaMDHgyoGePjbkeF6bGenEoFTEpCeyk1MUCdMdgk6yBMFEF",
  "key26": "5iV9whWGDV62ua3prPkatnVi1VaAnDHGrhpLodVX6e3ZCr82VmshMx6YP7HBeWuck2tTXFueL2zMEtoiuiQ8qHUU",
  "key27": "3sqSd1EHm7ym8jJpwwuAXPWZqcM4JdEeALryckivRJwVC8U3sSiKcuXWftzDLLM1S1M7ApaHxVfVX8QTVcx15Zfo",
  "key28": "5H4SGxQTPsXcmQCBAMd7Wq5r6EuH3Lczk19gDHPSdxy5vqoviEVKTWPa3pCXXGEN8k3GwUpZhLWL5vms3H7TJVCv",
  "key29": "3wWYAw7zN1hnzBUYnrWCuKDYgDFbkiTnQDSCkuCtfWyZUJ1BRd6GqDMtVF1pV6zSw8qBxk7i2jVPu4TK3D4GZrBd",
  "key30": "VCbsbrDCbbhcQZv35ctRUxLQvJ2Ydozzyf9dr3hZRYoB2zjLzyvjs323To7GAkAPNjEtUCGYYAYHn2MShp8nqPc",
  "key31": "4dTNEz2vZJ65fitQZFa1kXWGdVQV3TtSiFXt2F8V42ogX9xz5PjLx7bpgEku4DUWfQcVXBqGBtxqWQNijyhy3DHr",
  "key32": "2pus89mWwvQavLJKR2fFqj9LiCz4RcNV5Ze5pYFhxvw8ZU8jnpmkz4PxeHgH2FeaBPEEhMn3Rupzp19pKzuhXhaW",
  "key33": "4CEoY95t8zznEeCt11zgHhAdvy9WqpNBDkohKdvKf4pVXxEQxzyb2tjXHKmdpWX2FNkemMFV93Eq9FzFpoWCcP3b",
  "key34": "35aUDmhPobVkyyKkTVid6qfjKYXeW8ui5ZZVUtUS6WPPUMbKRRTz59b1ySGWzZRi58PBHD4E9C4yXK6XrN1NQyEj",
  "key35": "1V3vthwymsP6nEJDFpChN2w98tTP29RdiuioaR3cEvnivecRJqKG384BGCyquqStpqJJWdBr1BgBVunqRMYxvvx",
  "key36": "2mxJWvrG5GQkTcfoNWz3jaiAqDMfRNyEJKzxVLfhT1BiSoUQjTg2Qi1w6U6adZZ1azCiq7HSaR28iUPXX87Bg3wB",
  "key37": "4ipZKEpRkgtqArE3pA6UJHbmpzs8GJ6YbWKrBnr4H8mreNa968XVbDMvBH1EsHZ3mHTaKAfviwEb5iwYqMpC97pp",
  "key38": "4ThVy7fySht3BVAixECmx38TRMHPfkrCTwSAfikavuShUqtnbt92mKSDp9Y2uVeJCWGrvASVVU8yw9SedpQX5Yjs",
  "key39": "5WcZvvr8y9iwchTwLmXh5H7UTDZGJt1ae94fRaXWnPJC9q8bBnQnYWMpg3ZLavuWyvKvSnwvBhFhMyRmpEPwKhXG",
  "key40": "2JJ4XSKVcbULrffGNpsLgVe4jCHpQwWc6F2DT49cHUXLgFxdKvw7UP46fDi6YKqmYZgSgWGtg3xqdYRAPFsTTJru",
  "key41": "2pGakfFToTSztuBPTcJ6Ysr5jZzYT7sGk9F9uJKmN8XovrNFxHSpSTKZVqA6LyVgXVxbC8jJLetD7EdzgE5ubxEB",
  "key42": "2HxH2CWh2LsNczTiraQakwZ8x2xTro8waxnCSjTyUE2BrCCk4wJ1WDZtVEbRFBfnUTRRbmheTJFkmTBmWobiQPFQ",
  "key43": "4GkEjkrs3Nx74pXxgEVFz2jJTgKsKZy2gvNTSoMFPkrWs8UGgSpo64bA3FXqvPNxe4rrvDGvKGod65FDkwShrhSH",
  "key44": "xScNJ7cWbD3iyQPy4oty8zPCcrUJbzMJhm45tsA6cDswLMr8qv391Bv1Svdd7UFuD5Raa1HBApe1Mz58bGTpBXr",
  "key45": "ZMaDe3v6GM9XmwGwDGkBQd4PcYDs3oddotJtw7vWV5npC2bftX9JNioi9E92T5cW574fvBx8oZ9ea6x9pFzKShz"
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
