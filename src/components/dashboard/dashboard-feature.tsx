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
    "2pbfSMwMYAQRM8k1tc1xxKWB5bevZYcZKydMX97yNqvN7LyaKxYiHQDG1uybgq88gSKFonamjCMUYKLxLZqzTjcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUMgDWgHWcBR3Aa72uF2JzNDcQso9oyHouCNgLLRWcp93rYmofrVBfBfGXcQLWX9b33NujZn3DKQxS3L7tieoZc",
  "key1": "2J5jwwF67svmib6Erm4hS2P5Mpfy5S64nH6PMurES1nHZfdfNYL2w991PcnKup9G2HpYa2e8vME9kKU5Qzc6Moux",
  "key2": "4jJBfrmfgUgq56UG6M2CvZQA2VyadknwMuBnEyRsDqf2B6jhirLBQAGnvGpTykXR5wQW8Cz6Rf6buHf998ujuQo1",
  "key3": "56Uf4wYML7TsN1Wx5LErze1sppyEUJQ3X9hZPDsD32rCwN22JUxkbepCtQfG3FXHA3HPbbsKBcPxaZwAZLzF1PgY",
  "key4": "q5bCHVhrMshNZixtbww9JJu9pvEJqMCdvW7wZN4VDw4oPPvaN42r7PFugBMyM7i5Roq7FYiWWGks2VYPo5SXczq",
  "key5": "4oLvbf4PcCvWoXdqVtmmeq3SexsXFcbGFix4uBZTYszfsv5Ncmo2jaRUvtrt6VMufWywQwu2nUdo3izDgiS26i8b",
  "key6": "3ua4Za7sX4SCXwLfDUazqsiB64Rt3pKYKqzwDbehoPqZGYFyhAf7XPQP5SZHmp9Jg8RFwrYLZxHbKJyKGKKFc6m2",
  "key7": "33k2c4E2SXE6xnP19nYpV7WzWyJB613f3eAW6hL4ngZFChJAK87RqE68MoGdWqjc5CjiqKho5qU72qxJTRUxWu77",
  "key8": "WHVoRxV54wMDASyKSCmdTBEETdLEP5Lj25puy3ofAhTDt2ZUsqhSRgKjLWkSn8YEUeGReTM3b3c5CsBkhmsjwNN",
  "key9": "5ydHkBSLALDyEGgYbwgGajZ14jg64RCpsvnwmbCbc9WdNWhwKRsL6L5Mwrt4VAsmF43Py3Hy1P5c1zFnRFWwUQd2",
  "key10": "5S7yV6ugZPxPkwTPYqFnV51AcrTb2nMnh9TXq3apbTuZLxkFvm6TWoBtvsbVDc99nBmzb1wTGrBCbBWPiAXr5AGE",
  "key11": "4o3cxg1i95Y1aTf2vySsdetxkxTjxZauDMwHciK2cCkqCTAornzyHKW4xasncfPV9PQmYhVVNyAtkAQnvj1uTHtW",
  "key12": "3DKEwUH2JXymRzNBxqdDFEHQv3hJcpQktjZjEmAkvXavpRr3LcfJ5ar4KRNvZnTwgmEcr73cEmgGCQ7GzSYb6xsZ",
  "key13": "QYpR6SSKJamTFH8aEwuQMCXXfwfxHGeyx4uvE2ZA1ycNcHYQYu5Jo7aG2EmLRxrQq3dPuFL4DaE2YLWcZfroqX7",
  "key14": "4tooau8eBuL14T3YyGhfp2rJVDD6jqwYzEdTYrXrcLe72CuiMm2UKmBDRYMQiLRrByuTNvMeUR4vaQPuz1jVANCB",
  "key15": "4XuYafjDY4aEDnnrF7iE47HFk9um3BSyFQnY7ERaXCCGaKwtPN7fXgNiFUugzG91Sui4bv7afBEMXGr3ZU3fisjV",
  "key16": "4GHmLC5srydu2HP6Zp3bvSJALYojtkUBPHr2ijoNRZe5ohVqqnF1nhkDekJrXPBLbHLmDf7Z6KhLYgb8eYJGK46H",
  "key17": "E8FHaANqQNKEXWkPEVfSB3gVdgJFDXzz7X6iSMs7eLcrkU6YRYqMzRgMtGNrEKXZSgKRMrT5r5xLJyhZc6tDkcv",
  "key18": "2vS2rqeUqBLJiSmAXjeyfiY1NMJ267Jbr9An5uBb2ARjqbcTRwsQ4F19CN4aq2ZypXGnRsq9P5AZHqvXSQLu7jft",
  "key19": "265yKkdxNAxNYUXmjsnD2EGwWxNoKWiDT3D3rLTrtsKLeC8wd66idTRepVat3YnrHoRvxmg2iysRCVFhWF7N29xd",
  "key20": "4s4iqvxBeAeaB2CvqDqudERLfsyTJKEvb9R7vYocUwbcXSEryGjbqcdnbPbXrhS75oMbqV41J2y8tJZmi5JNJRf4",
  "key21": "2xWcctZpWrFcsN2t2WRNQQ9StZ3NaEcyxKj2jehZbX4DKYr4vF7Lz9WeFnS5t2JMzL9e8byZXHCZ3QffUcYr7QC3",
  "key22": "2JxdKANWrPVybqDPeLFtmq3YaUepH2RpZYSiYxjjD3my8oncjCfdawiux5K87gbPtzUeJQadizbN8VqGQqMnjqTu",
  "key23": "2KjrhXHZgEhS1XyFkvcK6s4UCq6AdAaCPYr14LbSqBhnnNF52X5FJ1cNveW6bfrsctZiUdn3J6tg6FJEBo4jzSeC",
  "key24": "2mkaoziuLp48Pd61kno1GfqdcKQqujEdXXv1PHRLdt7upUxG1kxKB1bHDR2Zd4t6hdgGth1UgcZqewfDXgN3GdEo",
  "key25": "3ovZZTmKsNcmw9Ywhm57B5ft35WGUna7Cyy1z7eJziFR6dSpMZ2AwPtcG5gDxat6YeXVey2J6KhpP4SC6f12PB2Q",
  "key26": "4LY75WF6RFFyNmR4py7Wx84zsBxNAhe6PUJ1rdYPHoH9FpMPC7ujxy3HFJxYv9nhoTUAc9Qt1dpANikvzR3k861D",
  "key27": "339TSFm9FuKMKte6MM8c2SkGGW4UAJRW17m8H3AqrB65FUXDpDswWiatF5u2G9dAXJapz1vBSNrPqVScSAtQS83v",
  "key28": "61Y8S5TaXwyeHKHUmfNy1pM9hACVtLZNBjzpK3zsbFbDzEiSLdwbEj4cuagX1ex5UXodosnF1Rm5MqsHrztUAoCf",
  "key29": "3AaQgj8xhXG47P9Vxcfdupi1A3Q7yS5MsjW6AZKLbFEEEwonujbunLh6JivD5zHVSLyxfR6Z9RogMXpJE5L9FMz3",
  "key30": "3G3SRVF2UcdnXPuYcJQsfdQGUxvE6kb3vaWrxXX2N67UE7upy8WhkZ6aauvGBBsmZajSdiM2vsJgrH8w5yyEL2Gc",
  "key31": "3898c1JMq8j6PZTFxLZvBWoB4eNgovK62SLD5L6wB9B8NJdfGhjQ6Mbrs8o7eg4swyXC3sJsdirEVBQ8vMgLoXry",
  "key32": "5g5C8JeXGNEb7viFdE1vy8tv9t9A5wmhinfMThv8vrMt1pyKbrPH9DEsicUr563rMZEmAucEcNnbDKojQUJbiD6q",
  "key33": "3EXzL5yYfUZ7CRic3EgfDXBhRh9BmACtpDU6Tjp5F2wFXkepxTGwvUPPcPaPCsM3ZD7hw2KoQjGmvvk9G4R3BmAT",
  "key34": "4ANePuiFgW956HRL9i6wn4dZnpHRxSMN4WKbH8jFqRN3dEC4PZ6AoyvbCAK3wihFowEWvoFmyAsYExgFQ9Quwynz",
  "key35": "4WTEBuntA9UbBiCZS5nPA96ua2VxNC6gdGVLzcmSE6NFeZmaJeJR3DDGQy1XBzj86CaDX3CqvQB91Xu9ZfGpBnuK",
  "key36": "39U8SnDxWfrhaaeJGWcby2cT2zvxJhkmG5WzLcdoWFyeQ1xtJGNZx4R8roHuSfdDGMv4huE6724rKtupYBo7CGc7",
  "key37": "foFFwQcFhLQPGirps2NkwvjRcGhvuRJaNzANofqUDsuKXQScJQGtyHP95YKEPk1XXEfYoPQ2QbVRtSTnd3gnbQC",
  "key38": "5Y5LNTXPikqZdgkTJ9T82dpT6Z7HWzXhEVw1GJpH8J9QR8e2wdGkQcvAyRKBZ2jBdHRmzNk9gGRfEeuXoA3oUauG",
  "key39": "2sghvaSAYVfRauM2KHMmAHCJ8ANnW6mBXd77hDt87TeB4mXPHmb9mRcTDh2pBtCaW9WEvKBuSNKjkZk8wr7baKm6",
  "key40": "kNufo8ayeeeDESNvjaR4CivPNjZxq41erPg2vNRVBeN9Sc8YkWEHTeu3JbVFfXfBgHf8eQVSxpzau39Jus36B3n",
  "key41": "5Gb7VtNh6faZakYUPyfiRYf1AfDqDGn8R8SbCLcqvbNLmgFqwugnHNoqrhtJfcR8zARUtHSLaFE3BxDJMeW18ns8",
  "key42": "2Fuyq4uwXD25YQ88Yo5KZnjxkSvPJ242oJuC2Z616j8r3bTLDQDavNAQ8wTSTpEzLeY6Cr3N5cbD1Hh1xbfpA9Jf",
  "key43": "52c8PJ2uzzCDhLoMMYjFq4L4maQspY1YrGA2on3h3JHMcZFqnYdbz8wtzsVKDmLpoNK2f2zVkMZaZr6i5aXgGeQd",
  "key44": "6RrRoEjgTmWLyguWZTNTJn34fPLtFSR59iCMEicUPVRD29dJimr4u4eefTNYcU8eiMvzsjZoQ5coSeqDVEyfCvS",
  "key45": "5EL7bFVyK5GAvyogLeAhRV4QNxMrPchWmvmKXP3o3rtbd3pJ7twwQim8PwkvP7E6xfqJT9JWE5RsfHHBK2nmrYbw"
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
