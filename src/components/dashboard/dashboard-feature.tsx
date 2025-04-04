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
    "4fx3EFeymTSP5oCX6VabfwHd1ZjLJRSrhkmkcwXnNbyXUQQ55DY8ybHkw6DKD8UKVTKTPVXwNHXAaQGszdRgr68E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nLWnugakVfinScYpiUNMsEnNgpXESJnuKBv6KzcAc4D49cvUGSNCKj5ZV9pMsoWkjFhPvhVy41fkT1UbSwdwNVi",
  "key1": "2buuJUYLsbrvuztSTcAxiFcbdVP39xcYUHuKFo1iqy2btdr4h79mQQr4UxASec7cFdagEhVEL2P46qPg1LWKGrWc",
  "key2": "4drShgkDEWtpFk1jpuNLerF4rwhhhTY57NSaV4d218YoicQaz5MtDw5Jp93i4UgmTk2ZSKaacn4NkzJA6g2GGJZH",
  "key3": "333FLUyYLWuF6XKhipRp5EzwxyRGiiajrr7nPn2CZ1y2sbRmrsLFNsaCQr1sb7P2PujvEwhNwfYFR7K5mXCEry9J",
  "key4": "4TRAGy72MNiDs8zPK7ja29GA6bEtYTjK9TJsHuR6hivWvKxUc8JKzXGrsCoJFkcATjbiTdMMCQxytzWW79b2sc11",
  "key5": "4up5GzQQR3dfof3WE9E939jnCdXpVMfBHfrfXNox3rfVX6d7pc5fxe8pzwPs7qH9bRhLsKbMPSMNJgAmN5S9jKr8",
  "key6": "3iU5Xe9cmsVbLum4nhJWEDtQcyDDQDyqSZvoeLNa5Lt6cRF1hLtX3dPWTKatoDh17JsXHfGbQpREubcHf3zCAvV7",
  "key7": "HYrdCHD9JCNpmqAKj6YL8daaogZPFCNEPkW2cuJMk1pd43oYnGBabYiA8AXVySZGj4Pic73JHxiVnARinSjB9ZK",
  "key8": "29NUPNsRNzXM778G1xsAWXdh7jwyyWgnjUnGp3CuDJF3DLbGk8gx9AR6cAPdo5w3Dd64XeVMzb5Rqx6VuZ1ETCzH",
  "key9": "5t3qTDrBsNsZg1YoEUw7Hp21arGxwd8TaPvLJZpsCqtLcSjQvj627mxQoXFGJdKjPo8BcvCw8Sf59ag6yjW4Kp34",
  "key10": "65mt9PS8SBUVvq6jcHKb4gwFAbJLS5EpbjLnGZ6ZT4oiqR4V16YoCjDdRE2BY8kPVi9pf9Ajq6dBMP1hw26fKq2f",
  "key11": "3Ck96fmBexZFeVg6Ds6Z5derEfsZN7cbrcVFu58hSjTf2ZMckCYstXAkU5QSyF5BDcTcmrQDEGFmVkJGiSrqNLhN",
  "key12": "3HJYYtQqzaWd7LJ5CxBVeU9abdYSHQSngQPSEXoHZkTikZsSyy138UWXvgTGmp3JR7Q9C57YcvcJJLKMCRiv3Mf6",
  "key13": "2McLTAuZCCYRCP9KY2STDc3PzeoN7Sjv79X75kmyPjZn3uR1xJ5vDBuGp4EJ8FedYrg4dess4MPmTMAwfxsnf3ZP",
  "key14": "4tK4g9ghLYEvf9QiX9gRccSTQR4iF1RWUyqDcn11MHNQ2XptdzcSZWdJKD9sc4HNH99Cwj4R5ckHRTZB5yDLnCmx",
  "key15": "2xx6YWH4o9qergo1wV4u4Ptek3ndF5QZheMRHhNZgzdp3YqsANdLUSdvtdwVzDM9krwwxxbjz5vUozm2RAEEYrC4",
  "key16": "3ewjWAnxYgP4N6VthVkV3VNMkiwGs1M9K69Jcvb45v96MsYttveMWVscrRpV2qTjLaym97nKh3Awhvsp5RxFoDd1",
  "key17": "3W5ZAGtGivfpdMMZu5ibhhc9sBCqqbXBD2UV6tHMxFSi56pJuTxCnkRcPzhoxY9nVu6EctATNkEtC34UJrmAbyj2",
  "key18": "4i8wVnGUBu7LqZBGwyhcV23wS7pkTRUwqwDnYUhkwHdGo1sFExEPqQfZv8CvownhRTyYSwxBpC9K5WdDPHY6ZrGn",
  "key19": "4eVPaNqAot6tMPQayZmRbVzmp1xFo3ZoKCWhfC32WFJJcXAytFAtFRvRbAr1WkwKakHBGcueZQhLg6KtQM9bSarf",
  "key20": "4RbmD3Tfh6PgCyYxRqeBGWcjPJZBzCzwRPzrHQGH9yDQt39GV5SSsRbMM5EZYKWwqaZcXJDFe3FsX43EHdVvb928",
  "key21": "BuNnPEZg2TZrW4UyxM4RpvQz28brrSGzczsV36a4YhH3CLBcAKsoTHeuH4a4YUb1JazN9TXNChhNiCHPbPmPvMP",
  "key22": "3spWwSaL7UtZzzQMGfVyxByR5aw4g1bvxcLxgDcHuB6YJA1vv5TMfXbarYzNVYHypk9FDutZo9EDvV4wmwetUc6s",
  "key23": "4QBFNYrmW6gwgvMyVLSP71sL2kyoTSxK3FqyRrzBAEhK2BRXRK7pKJDUnedgL6MHEh8bmpjDAeRvArF8sudLAnWB",
  "key24": "3mygcvs5NwQTF9X5CcwmfWa5A6uyVuyJdTXbjBmrEMgfLTwszbxKE8GctGrLpYZPmTEiAx9StSm3pPbMKNRRW6zQ",
  "key25": "2SitL1CHswfSUBtWBZB86hsLbaPU3fYeVuN7qSGbpmtQ8Y3fnvwJRuncv1ZYqharjotUY483pU4LrR2pEfVP6G16",
  "key26": "AftkPHUt3BGzcMBMitWwpVjQtdQtZ4gqq2daLgbFD7FZnJprCJmbPhT6FAVv6Fx95pYfZTVfmh6iLRaWwCvn2ab",
  "key27": "WdKVouaUoQqdm2uqRmrnFwKQjXkonYrvbG5xQ68QCbFEp5PBcrtV11AZePgt3nUNZrSSz62vFxyKTYYwrXwEMDj",
  "key28": "3zju512mwinZcXbNDHhgsEdvcevhAQpzguN8Q4YEBzEo73s1Kshiok5y5kVGF72qmQjMAUyMvde19a48FoscR8zu",
  "key29": "zfCVfqZkLMGVBidd6jCZ7VAbTZAMNt7qEpCXUdzSxQcAvykHKXwS75cjXJGSisAFg3NrSvbBtMJeCvn28UfgLiY",
  "key30": "NbGEGSHJbKmUcbLj2FpwiCc44CWPGxGVaGeKwKhHnxqTC6Kje41NkZTV5vHV6BG2ge8PDstVMYFGxPjtcP119ML",
  "key31": "5L5sxBV6Q25ZCBows1ixVby4YqNQtMYRfYbiXh5FFvgLsAdhgMMnMSVWRv2gs1m8KzrofjMoZMdBACpChmWDAsZ1",
  "key32": "7UQpFGdiVJ4a1jzucFJZqmMfYMDCWPtqyjcB69R3BiUkXbALevLqLStiZAqbiEY5T3sDAfZHZeWPRMSnmjCs8rU",
  "key33": "5Bkdb91ctFUmjP82wQfEVWjMiB8rdHZ44Hx6JqcEqkxU9SRmxhkPaGLSQiTM4GfH4vkBfc16uaTpRsPm9WFFSBCk",
  "key34": "3iCXP8rKY7CqTJPPKMTQNwhdx2eAcwNsk8PgeYzrHGX32gv7i4xqVrPe6bvfXtShvbdM375e75Qar2hi163S1Ng4",
  "key35": "2k4iujwvAj1c2K2RhvURz89YpgC148jXYoTw2cX3jXHX3LL5SP1mt9yepqLCigftZJ31pA1NmZpRNmHHunntA7do",
  "key36": "5KbHGSg3H4uQ5gnoUskNYCQ543u7wJRVMKb2GtfGUTbdW5ZrQpTYSRPL2tagi8jiSam3qvCfYfbyM7y4pqJjDWAj",
  "key37": "5G7mnsrx6L7EHQE3uGqUpdMZ28E59MpvXr2eHe2cLvK6RCxDhWKgqNzg2Y9YukDKkvP5jt1vuUjnFmZVBC2e4BgX",
  "key38": "WkefpPjW5PkTyJXZGUcnMFHpWUnnWgRkUw8GYKPT1ENpvHFMCMwsWWCTALaCQqrLMUKQ6NyM5AGcrHFRGXvpjBv",
  "key39": "2wN4iBKUSFK4gxjGFWLGjNoccM2oajbAgwz7bPzzgkZzyFEXT1L2LXF1zRSub1RBfNLA4Tk9ZE3GMVDN7VZoanfb",
  "key40": "3UFswJ1aPqcuSg88Pjk2ujVLpu461u4Q9BkhKMErVCKVV6w6GpNX3rgNv9fkdTTV79m8fJX8mJxDuXLxv7H88biV",
  "key41": "2Ms2CJGENYubfN4r6q4LqbJ1fDCVLQ8jEEydpnHh2JHQWFNXRHejLHqWFgrTRyzgp8gMmo9qkXptni76BNBphAwq"
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
