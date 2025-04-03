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
    "3ABKXvLimAXbtkVCn4Z7XFxGfzX2Y4yg6FeAZ5iDZGqhK11TVu1QWrfTQJYnBzKZ2b4Aaa2rfhrgCWzWSaiP5hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnsoCySqKiSVa3hDh6Wz2X5GfD9vTqRkETMCxiYEXREZBL9Sc3DXBxj67i3DtLxQfCFEZrxrm7MQ9QDFh1dE6zd",
  "key1": "635xn2E19MiekVQhmtT77pShXBRamDz6GJZT1WS3JWPupmiTFh5JejdTFwiKWd48mw3Nj8LAHVG5SEiWad8oDkpc",
  "key2": "22pvgZTuSViRE1yg5AUQoftKNFTdAgnHedwQe7FZmTL2kk8jXo91JnN1Huwdf9hJZSfypEuz7VPxzeAzYsum1SBj",
  "key3": "MGixwTzVLRGnHNw9EfgySsi1nCnRsWSnpaKC8bLgFTUWt8ycmrqN7uwrDPkj3AF2jTBBSSYdeWYP7AoETXYRSnw",
  "key4": "2hHnaLNE3SHgvapxBGyCBJhswSW17G1uk2635uUWduN7oncSFL63fgiQHWp1kqNWDBDa7Ej2sMhViymrFz3wuavf",
  "key5": "4s6gUNGnwwcXpFh8pvFcijvJKVKUQiEYQCuVLxCY5mHH2T9pVpFBnQLrVWPLVfQ8P1bxYi2yeyAMBbuff5n5jxrA",
  "key6": "431waMYbQEC8rFXsueWdf35jWPoyiS7tutNHjxur5SwAfpk43QPEu8NJEZ6zUGMVXvioBJUJkYRmtxjyV852ZdAo",
  "key7": "KWiQ1m1TiwaikQqamUdSr4agFUCHi9hgKniQ1KdyPwQMjVPp35zxzmLdURdFry6PGZMZkdMSVubtACYXseC5oY5",
  "key8": "4AZ6Q5fpBJpqbpL52hrKETFMhbrTycCgWHAbMFmEhfJirDN6L2HMXSvVoTFAiotWV6B8iHLYJBHNYHqER3aHNYH2",
  "key9": "52CWrYvhaipSaYaYU8dAZeDuVr3yJvci6x8PCMzbEr4jp2As4TuZwQrRmc6TLUy78rxunELuTBjvhaFDibizaG43",
  "key10": "FiwrY8ABRNTdc8uPGUcwbqJ4SNffbAJmxLqnGt82QtX8LSPQG9CMFwB2v7CbYudK7sS6DiThdtbmPyTSX2LBZLv",
  "key11": "h8w3zAPzKTyGHZgdJP4msVjxjohoghDz61SYQqVK947bVTmmdLkWDJskK7cDzADaLEiChbfqH23ggdTUmrbUVsW",
  "key12": "2vfczK9oHpkBbmu9kB6pkGXahwdbhJnJc8p1uudHPU6djQBoiqjR2VCTJwYg8fmf81FTcGo3dZUTmD1xEJmmvTgU",
  "key13": "Lp7s5KHXj3vEgnGPtJRjGYCHLkh9UmanjnFoGN38yeacd7JTMHvcZiNtCT3ET4RtQPKKaK3jDnxfoHTvNnBJHf3",
  "key14": "3VHCFsyY5hv9pEqwL2NGYDyCz4DPmg9RHsGW9fuPrmXRvpn6yPvVNTuqXRsi8LJFEQSUnBTAEwBf7AaH8z4GR6uB",
  "key15": "5eBQjtfgBG7tRYo3fsGw64zwTXRYzMGxBQgCLkjqFVuqZn4XLrPfJs94SPSg3Gy7y4hWMEDrVRLKhvUH35iy9P4V",
  "key16": "3n7AZpLxDwLugWbVrT7E6QarkZ4zPDju2Tgc3GzD2Y6XMyqXn5N5ARCnsLd2NE13TGexaivPiFzDUyr8ksuYoZHo",
  "key17": "yy8EZ9jDJmaEvUoeadEe2HTUvsFedPu47RZxYbRKQhhCNKU5pipgX22HDGud15fVGupsHVwZaiSngXTC1gtH4d4",
  "key18": "2qcqKNwXukY3wEywN8o5bD37UoZyC4NmFwSfoq2SZmFG6vGj8j3AVc5S9TpgPjuRiF2hRSA6uvhPT8jqGxSyCJdf",
  "key19": "2AtME5pW8iCZPaX7ZVGcEiC3XgCaU69Pg5YEMrKonejBGHsxzjsGLhZdf69ND1oB8tdE2m7ycjcyZV6HL5nM8A6P",
  "key20": "5AKvaJ2SSs1vCcW3KjtaRVXEFtXoMdt65kFPpz7xmtxNjYY2ijqJW6nzGagih586V9AXtt3josynJHTTXndT4W2D",
  "key21": "2VFszuxb5JxnmFHcYv2dCcxQhx3B3kNNYTdHPZG1g9BmqxrBBZiRHtfhYkYiwTMn8253VbLku2gkyAkyy6VcqAdu",
  "key22": "3mjAS8QbpADydy97szNxMhvohqiXMchwGWRMTyyUphFfJPaW6329x1d74NJpt2bNHc68xnBQhJ6QNtm6A383BuyK",
  "key23": "3DEStCuAciCX4YQf5jnHnhXdnah7GECCLwbiJCYazY6f1eokkDjM9ME9vop3BYFCoMJ6zRAbBUHaAwXVG4vRaCmy",
  "key24": "5knnndGqXrjW3pHnAq65p4TbcgAZW1b5BwHEkPY5AS85biHmRk25j1SZBRAJhu1doGdSoRsZg4AV92TVQcBFre9n",
  "key25": "3SytnASFAu2DpbDHKMyWcUXVepQ71ST1cmmrvub9Zpxb9TysjnsBwoM61orfyV21FKSVQ2iKNpL7NS9Bf8kobeUD",
  "key26": "5fn9EC6EiMw1NttRwzrT8jzpNY9bC9RsgbFqC2uYovDc5rnB2br9Pk8H4YrW98fMwgkLYi6f4ikCi4PjoraDy465",
  "key27": "55z5sgQzCXcncTsSi9ofkD7eY1g4TwVJiaTwSYHXan7DpUZxK9fML18xGPvd9K2RADNbfqdxiGbBatANAKxcTB2F",
  "key28": "574SEYgGqqDs3yccMKxjJKQCDmTVycQTPaNkr3tjm2nE7PKEhzRCyAgQNRWSEpZKWCZXM9Tuj9j5VbkqGYZV5fqZ",
  "key29": "5BgoBrTU9cEbMyJPneJDmdHL8JPFbPeeBrgCroPaf3VUSb9qpsfPU6UKaTPwvLfBCLYy57WEokCdW7qKsJYfzsxX",
  "key30": "54ibUKQ3X3XLzMcu2K1QyeMgvKm7hecmLZSnskK4jfUCUVxx4Sk9fmgMMJSb2hCVdWi5GVXK6oZF6sC7QzDpyoG1",
  "key31": "5pUQ2LobTMgkc6XQs1TwsMw5jBRzHLciW4mCyU8vD22kRrwBHBC4fy6GwHeKAn991WwkFeLTh4GtzLc5spUn8HGN",
  "key32": "2bxPA3gCCnvXJZFmUrtmhvvUVeMqcMd847BLPrhUevFoTWfZtp3Um4cPzb3oCAELj6PCBuBdUQGT6cJAiCujLFYu",
  "key33": "3jR1pm6uhGLNMMtBcMYmTGGG5tFYR64eeD4URJ4kSDXxPgdjrHT8W99gDzzcWK2rszfivNLzjxwjrTDekCj2y1Ry",
  "key34": "57gu7jnwMhxr6R4moyk19LFqgLpmeGphATMTV4KVk7AaDmj6BGGRZjPqm4DavdZXHxVq4c6cGftCTBDDGjusXZQ",
  "key35": "eduwDRvVJho7Q4xrikC1nq9Yzf7rUkENVWbYTnNBBKYRk8YQwS3oKaocSCDxhzv2jvQnH2yDZTzUX2RgEHCgE2e",
  "key36": "5xStNHTwssJWtvCLGp9gskd1fstokCch2vapgd6Z2Rc6x3hPyqCBxARhhjwARN4juGHaEJ49z7wUu839y2v7cFdb",
  "key37": "3my1JvQbLEA5p3Y8tJW15Nm2aAgpHrzfSqnVzeH7483D4sbHRJCCfLc8qgEXG2WHhFoiXML2UMAECKUcpxaUCpmB",
  "key38": "4ziht2tH3dUMyZWbsdDGD9zzhSU4hvsjcAepB7umd3hkH9xQVYQum1iDqxjTrofVfSDQ89q8g3nTjyy8reHBYdLE",
  "key39": "2v1oJiH5tunfWG8gbLX1c4Y8YCyU53LxQbvuTaNJ8MoZNmeh3fvEh6hrGHz5D1di2eHNcBsLu1RdwDZYekeZxsoW",
  "key40": "vGSMde7PPzeLS91eUMsuq7ZKLGYMJXQtmfXftGvD9R4sLVCZesFkWJH5C1oiSC5T4E3bw81dirCrxmuzErwVFnM",
  "key41": "jQbHXj6Hu87jS3sdmj47LaiCrvGd42jkjMkCZCZP7zCD4bUT9Zb6Ud6p6pz4ypXgG9PiVATMHQU41ginZBYD9cL",
  "key42": "3u8TbcAAngoxmWP2ueHctmCJHAGebTgNwbpX2pwxsDqcXhVgGmwQfxXrasNT3XKPMWHypJ2JVjTWgKiPNJCtHgju",
  "key43": "VCv7zjaSHzDdnCHfAbD5U4EuguMNPjdG4WTRwrAHd48G2kE25GHJwPQ1NPvcFnPE8nyMKxVtCvPc3gMThX8UXDH",
  "key44": "53DS817nAwjMQUBrJWReNijuVYfwYbvGMBd7idLZuALWS2c5NTxrJwSpuBgQhqEAmELJmgdcQN7nakB7GCMeyQGH",
  "key45": "4bVNAD8M3tVobTcwjMmFtpBm34iLJqQAioCXFN9WQ5kTXsotjNcSrkHXPbK2WU5DdFssBAQGtZUHsQj7BedT1bur",
  "key46": "4yE7raDpcitTMYGVkS9VuAk3bEapkzLoj4YQHEMxZuemCm45zbzV21wWB1XFHGnhYy8JokFpQKGAbQ74RQUTqQoJ",
  "key47": "q75SnMscuCBCnmD43cDp8wohRXyF5XK2FdQq9sAhVZMvoqeSpGXhe3Cm6sadTTPMbzu6vwQo88SUxMqZvvZdvTL"
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
