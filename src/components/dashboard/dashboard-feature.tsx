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
    "3Ww1YopTgPV3jD5qJc6Gm4FPSrp6fgYfhZ5uHkhxFDfEZW7wWLCTjinPGBNAjEzXtK8FvCFFXwzKgUHqpujEfwaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBKdd6FanQ2FHcJ697uEsfLwGhFCpxxThMP94g8bj6Q3JTu4uDyyWBbMnbuX9R6Q7sa6jPJgUYx3N5WHkdTzb9S",
  "key1": "2Nzxbb2NiG6RKdkxEJLPCVG1KNrvNcaiPUzfoHE9EaTWX6gSAzRCwALG4oHwNgdqPFd3Hnp376xR7s94XGaJer9U",
  "key2": "63c2n4LTj4QHS99UMYNEemwsbAnqfY2mAD64QUWcAwqMnPorCESsRvaesVd5PV67WfobSJA9JPMZkh4xv86pTU3W",
  "key3": "5g8ZTwmiazbuLvQmTAse7568xxVVBdGeAWvefWrHiyjLDmAMXVdJGnfqeQ1LriFGeM4eCuxqaRnMbeGuhSdD6fYS",
  "key4": "uccA5e6okucuPh2samTqRx2S1Erf1WPQJUVYaRMEMH3wM6mq9hxjnwT3xMMh6DHd6A7RG4XKXN68nNeyyAuykNJ",
  "key5": "5Kp5K9R1wD9bu6L8szDVDMNhzMe8V4GPBiXs3eToXuXU6fL67Mt3hMKUu1WR7waXfpfxFpMT9VeNCAqEcBNPp2GM",
  "key6": "4kdgqe6q2oasaED29vXi1Xzx9ucaUkYs4pioPupxySQPhAjCrMh6mETDe9qpd9pWreZzEH76b8zQRCWym9aqhr14",
  "key7": "4vRHqHDyn9X6wtzFmAe1H4b87DQnaThpa7xrKkevCpuNpo4rcd9w4LgtHNu5eqFfLUeRbZJy9BVRHnwk5xFikYVG",
  "key8": "48iYy74ik8cezb43VGjftCT2bu74Y6mAxfz9pRJp1pfVxLpbtzNzRoAzNBZocMfDzsCyL2hPXmYETugYCf6jkk9n",
  "key9": "4pqKW6T83aG6rDQbcuAe6NMiXtfJffJBv2dJMH4eNot8iebfpJSLx5hWPuDbzHMKvNvGxqsZofzComUWfmnjcp9U",
  "key10": "3Ar3VwhzAjU2JBAk9wfGWZ7gTxwuRLTBivwr2XmmnceGNcETxWhqeofBtu6zhduvY4JsSZAZj3in8EPxvqyrfniA",
  "key11": "3nnWbbeU62oVJjsfh6hcmWd9tNg6jP63V36ubzuwoBSeszaRJLZWcjCW5rfqYzjVXzTML5J1qivPxVtwM9TpCTE5",
  "key12": "2kCGpxHDw8GZMN9LTCFRv8TCgMyhU3XKSdhRLjnKjd9ALKimH88j3rz4odrQGbrhqtBr3Ce3We4EjsUB3WoGdLma",
  "key13": "fDz6kVNEUjeWxR97wVJFdhih7NstxgpUiyXcY6KTctJLHFyux1sPSs9PJXnQWCrtqcmUiChjb3uR52zbHkFUXcW",
  "key14": "4pGD7jgqbbQa9YACtuahDXL2zQvFXiB9rrBK7V5nfMYJjHrDSDarHCSg2dhWDkRBwEBamtuMbRt7Er6ww5MjtCAt",
  "key15": "3f4Ts8sWgMcEWM4Kv7babiNGFCymXN2G3L5jozdBWiG5zTSQmwYQPFp7tSbkRBREEKy5E8sHm7UsLUathVMVwPbf",
  "key16": "2z2tCVLNim24dhEzTGNmkdgnsZEGWWCVxTMrjYn7eqHJienn1XLVJD9AdFCiWs4Wkm2tT6cpFmB8S6G91Q12dFRR",
  "key17": "3WyFFbkZvAB6fHCymEyfvd6yRCuSU58qUUBD4PcdTg8syb5eXnjXjScqCTzHrbYMWYpByrqqz8n1MK5i3N1Knp4u",
  "key18": "dNYnEcuBGkgV6ppwnFuAg9BpCskDELeJzasqg21aPzfmqXUE7aqrr7SBppgyX3F8G9hcSAxPu6PbvoKUtfKBtj9",
  "key19": "4QvmoJJiECYiUkwt2w96fCzP61BWyF8CBrcrTexgqEvEWpqRphagrA2PZXbMZ1os7CLtUVzX2EvVrP5UR2JqbVc4",
  "key20": "2ByMsFiuTngamFFAt5ZTDNCFQeBT7yHLK5FxCXwH5ky4HUh6WXoKvEj2o1taoQZsvPw2BSLBFf8LbmN1reShZC4a",
  "key21": "3opsATwNwdEg4pajaAGpCjhMTnSSu3zAyWopnhDvqzmTbTAULQmXjGyuU9AexGsudyHSYm2mXQYaSn5vYdi6Fonm",
  "key22": "4LP1BHGthJiM3esCxTwD2kexADUTQeQU2rh8i8ZUJ22qV9v7HMtu12R44QLbiY131NypkZrj4LLNBqGg5GGEGsks",
  "key23": "34Mn3i9Cz2PJt7me5ZarVsKwm2P6VvNvhUrwJTewx8noy3e6FE5uEfaWXUjoeQEP1aMAnKRwyd3PLCpSZuJfvbsw",
  "key24": "mG2W79EqoTtTd9yjekxXUB1aX7VDsCNP2hqywfXxkBitstCQvnX9Tqt5JZadaJVpXx3k6wQ5mV3thTbB1PNtcss",
  "key25": "4VP3ppsYzA7rjBXxac3oLUtyEK1n5544rvcbsmn8B2X7z7WEKtTYRXYsqrNu6r9cZk38cRXVBGve2gjJbnvdY8N3",
  "key26": "WStAe3GVhUG81vE7u14pXsKXPbJekupCkYZybV1ErTsZpENNheh8B5sLTQCcPyU5jEeCucNKnzQieaFXuSs3TmP",
  "key27": "3Qz5FYApuSVJzHtxmiarEBthdRZTLXeQkQHeBonxgkkmupgh7xGXhnwy54ZTgC6XCewopwsszhaLrk2d8vEbWua2",
  "key28": "4GkwGNyfT62RpaPos6G7CbQRRrDvMGq8GKxGGihkppmwoBxVzH9kfaoKrKSbuZzKTKyCGEcENPBMV8Y8hqJcmwsR",
  "key29": "5ef27dDEZxWNC5HjYzbupQB5MhFhMy2CbhF9o2NwzLpaKpaAuQ29ZUeXaEQfkPYJimZEKnG5QkxC8h81TTHWrfQ6",
  "key30": "57cWnHDd9bLuqPuSJwCmtG5LXNnCiiv3NFy9nYE3BZqqiKCbAevMbdQiKjeYLZaLLbuqscfxv7dznzJhcAPVihwA",
  "key31": "3KbuqMFnypAUPub9rEowm6XygwTVhvFZRdTsZExry4kKz8xFMtFEVDAZHriPEBHQLDMd86G9wX2q4eiibCp15iF8",
  "key32": "5x4WBskCzvZxL16RQ4YeRp5Rycy8dVpfFuXHMatcFXAJsbboLxP35uiA7iwYSje36mvs7p6XfP1SLVG7mAZ7GGZW",
  "key33": "3jssopeAck9xbpe7rvjXvBiK5nne5XYL46BKJXLc1ac5Dd5kdK2mSxbXTXRMvUh39qXKM77mCzpSGLXaeRf8Lek6",
  "key34": "3Ys23aFGAccnxg38hirqob43ZysbLKgzxihjxjQf2TtinNLEpXJP1pvRgARLHy8KADiykThLrRnohsKTrdJWnyYt",
  "key35": "5c9MsU2L2pdSU3PSLjpfAePxLb2ZDSeYDaxHE2AXrEuEhcndjcKEzMipHm68SiqJvEmaiSFwKFWLwY4um6Zh35mB",
  "key36": "4TgkLE6UcVRNiDKdeee1D8VJCXtdofBTUhV1vEGNkwciG5cGqu77h9D8wUwTc1DJMND9zqgcix2p7Ug9t2gKhHQc",
  "key37": "4Dpnh78nWxHW33YERGe8m37icMRhXrrCDfcnn7o5jZ9t4gk1k2X42aNmXxocXe1zovABqMjFRCybP5nTosGt4sEC",
  "key38": "34zeMao9htys7H7ZETyKZ1hSf5UM2ZqmixA21g7P2t7La5Jrb73aaPhU2M7HurToLz8W1u2P2q9yHXLaxDUDLMYb",
  "key39": "4WGWVrGGk4PTLWBpSvMFBh1g4fHYjtzx1qns2Ed8b15WuBHF8QEU3WkJ7fajQV4z83JBCAj3y8y4oKhGRFsxGskz",
  "key40": "3nwTHjks6fk2YwDD6zPnX1AXowKuDRqAS9WNoXce8vKBRSdpmDpQt1VErNNXBZdwrxEDMiyqm8wqMiZ5wCEUXzDM",
  "key41": "59VQekfYHoHrEMj1faM79xJ8MtGp8GHvM8uLdhvHKNQWJF42YzPapJyKi86zeehNKd3N96oAj9doyQGbXMAQD6MT",
  "key42": "2iqNJuEx374na5tmuhxUW29Aww2MG1isPoU6st6EmKvMcNeoLsTe8gTC4bUWsFfV1cGRrTRoyswAUtqTZd76DjhV",
  "key43": "4A2ghxAK6C68P9SMeKaGpz8matfyEqoUosYF6uATCRuvtRimMDxcmUG72fmMTkjKqrVekGGKaaYqbBJU3qEMEhaZ",
  "key44": "2p1RGm7T818sNizSZcbNmvjBVN1RjdJGRF4QhcktVSfDpVfJcWSxprx4dKx2fzwBTG4ojUxmUkAjWEYmJU66xH7a"
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
