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
    "rTXqyGDD42H79t3816HTCvb7Zr8Eqci2TxC1cXeoaT2dmPwVnuQURD6b3UnUz3Gscg6myE4arz8HvRjeBTK1LK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmcD5iCNXZPVEuMiNaDpAz4yo79AvHCAy45U5QancCXgdXyhnCoP3RKVrmJ6v7mKzrAoT51XFC1mGftvAB6uQaN",
  "key1": "f25xmuxBCGVh4A3UTvpDjYLNGdLNuavbyQnaBDEvVWLTn2QCw2zHgcmV2WMMvZwr8LZNGqTZhxdUongXLi3WPny",
  "key2": "3TJPujn43QTezVWK6wojsp75E8UkoxT1U5zXyNPbidqHZHW2JUoK9WxQdbNpJZitbVChpaSwAttb5GcZ3nNDmW5m",
  "key3": "wEWJyhtjCNgWr9rcFX7HXE12mwr96bc4876pDi2C5JjeCyuaohN3LbTcaAr41m3wxuu9KjX3Mh1Cp8RqiBGKSpR",
  "key4": "4Cb4TEseVPJXeCK5nXom2gPf85463ci1s6c92hp7v7MMvzFiWHPhhH9VT3HgrDgXEhH8fdTjxNThszjpkiURPajE",
  "key5": "NSKqG5khadKsF2CQhYVGnMuKXVvUu9kxMNrzppBKCp1JEGTyTq3KyDKWzYTfsAoT61obSedNZvzvFQMJ4QR6685",
  "key6": "3NFUbJ6zqDM2sH2EiHYiW2J39HKjbEdxiBxoPtmujZjrYrK7WeEa9TjJ8GYutU1jjacDUxNz8bK2iXf8w1Ly4ZHw",
  "key7": "4aPawmc3LHTxy3NQciUxEEpsoq8Mist4KRJfu9PLdMNwmwJ4YJF9cKiYP1C42Hjq4DUcmh7mwu3KRYYwtcLct1zE",
  "key8": "5kXuzB1QjTqTqygHcHA8PQmpA9a1WuVVJUuotJ41GkhTXg1oZY4H1CvEaYMxYJdzXzrMkjjEofEczVhnaLkTfAMu",
  "key9": "5R5m6wB97csc4SNatqY9kcEHYLbxACJGnzV25EsfV2GgtcAs2fcwpM1QX66GHwsyU21gZUQq6D25HsPbs3oSMtCG",
  "key10": "3J9TVmjut1868RhM87HwFrgiu8K6JP8nWhwCVwLx6p4PJWy4kMBePjzozns7uSJCPug8K7tAr2Gatt2HpJEhMGdz",
  "key11": "3BjKN7LdnyDALQDxgiFdc6TQQXpiRi8KfEBMcd4ecjQ8wnb2Asgg4HPEUomvSi9EzrMM5RzdxmrodTyLxmqMvMBe",
  "key12": "4QJtBpAWssSPhJ1YH3uHAG165CEBLhGFyBDX7zbeKANAfPvcQD6fCkGnz37n1967gYZCAjhVEQgwU4mSqRuxTJgN",
  "key13": "5oN6DmQ92SswutWk3xBm5b4XHvrPFXqgD3CjsZ9Ge6Bc34uNSTe74rJb8ognN1mRHAJJZau5a4cKVc7BfMpv2x1m",
  "key14": "5abTdmapxvtiUtXgGGNSGnJ8LXKpZAVLKaFnaaC3uzYDJg2HPxnZtMoqmoLoxHdPW6BpWDc4xa6TdFjU2VcsWJNh",
  "key15": "64Bc74jAm4L9aXJm5eEf9ELwMkPt234jB9aLVETdB3Ujf5JL2EWTjCP3UCh883ip6MfQuRTMRsbChKNLebBZWe6R",
  "key16": "4FteLYz9onW3CGSBMFyC22N3mdcqtzUoDRfEheLSHsznTezr3Ls76qnECNCdSvCSyPjR5gre2RTc2Zmmew3B4PwE",
  "key17": "2etizFn6PeyBX6PFiLg3nNi3BejewhKnRHj981w56S1YtY2HLHzLQK5PDRMcWjSjqaJ62VqQ3C58pkdrzTqyXETq",
  "key18": "5nuWYFhVe2gPA8eRPJamSvhMipHLtGTTtBpZyHSGD4pUSLXwpP6w62R6wW2j2WPTTEPZp31ZbnUoMVptxdcA6MKc",
  "key19": "s7bQKhRfKPAckmoRC1xubNdTopsiCBvxBZkjxmEbsmoiS1TsLbDFMGn4c83C6Yxav5UyQmAJcMRonp98ecYBtzD",
  "key20": "VafeJPFyaznBVHT234sGzryAhXnsX6dnpfJkRRdQXyeYzDiopUWGSei2YPrCizGiF7Gvge1bqWJddt6qzjWkNCZ",
  "key21": "54XeJ35WeLZ5HN2XqrqsQAVDJ9SRbw6Ny6iX2KZLkSXMavt6jTmRUCSzgiqgzrpV1NWXdQew79bWU9EQegiWcQG9",
  "key22": "2JCcuCK24gQBWjYr1L9fTSdLK7YRvdWsBG11viBifbKMeLiR96n9LM3ZRVY7aHihHT4PqGL59VZsqNFPLcpsFPtG",
  "key23": "5LBuZeYA8HbhiMhdVuDNYjtydeQDgcH1wVe4wdFRrtFM1drifN1r1SLtZuUooRNkNV2WRbxzugt3x1WCYvQF1mnx",
  "key24": "2mh84iXvMgFs1BhcSa38CDRkkiADSqBbPScR3Kq5ivf89Qj2vGfdHrP5JsxhxuXdBnvzAPKVCXwjTp5ZyesZVvEp",
  "key25": "4mUwZv11oYuHFvXM3wx4XzZRCAEKSMjozsTR7L4SuTDv4PEixCZLAZJjzxsi5GNdcpMuaEsheG6q367mzFtam3Pz",
  "key26": "4yNYSQPxj8TsX4eioZNFJK8wMbWqfy7Dm1GZptFpVhMLhpry7r14PYTJHfzBeCbEPmLAk4h4UV61DeL2ku3jwPJ3",
  "key27": "4tMmaLj4JZ3JwDZfhYnt864Ci1vBNqDUTD6unsjwHPcanSPXjQPzGhoqssbWaeX8u6bS4MJ7ztQTSDHNwDLVFPe1",
  "key28": "2zzG4Fnv8SMMzBpP6AAokWPtej9byG4s1Bgf3p5tCrx2QngdmtFcThr2sYaYyPwAdQEX6u9BbRM29uviSseCrrDj",
  "key29": "5hAYwD9Yg55pJnLeWHeP6eBEuGUjuYAEgpaWWYzD5kwP6uKcZoFq2wKCgsxF3xWLaERH88iRtmtLfZbmwvk7NSZr",
  "key30": "6SEcjtN99zPg2UjdgAGmQYnnky7CBt1xW5Jbdm9ezyRtUZ7yQrxXTWpyhddjA9ULX2a1zeEUvYdDpkB4exqUKvZ",
  "key31": "QULMrSauqMGHw5GBA6JUMML2HWjG8yZwsmCR4R3dEPqKKNdPbBUFsVMtiCrTMAaYav9sdQJUW7aT3PK1f5k9wNB",
  "key32": "51BiCoUwBFDMndHrGdaHhfbxHjR9dxeVYsH83xpNsLMkdQQZeGeUeDnR5NCec9aPjs1kFvGekUTm5HswqH7Xwmye",
  "key33": "4Jex4nEt3QNnLb9jGfkfL97maKv3cejdyY7WJQdw5vNwmw4BYCigscCwFqW71wBifdBPsuLBXywr731xJM8RHTNv",
  "key34": "2P8nVZUsDRCVFuisqBemyD5U1UVShf4FCmhEozedHJa5p2SfRUj3daeJh27hNnwUVKRywneDGVkmZKsvy1yt48uw",
  "key35": "2z5FeMFSwhndQiREVvswmTq1cdRK68kKyWAspESBfbVELvuCJVbQVQvGnNY9n1oqqqGVqPQFJ8Zyvkw3C4f5gUvr",
  "key36": "38ptj9jdWSCUXkAtkjz1p4MtJiJozSKF8isjEW42F69QRFcQvCUDuQZrugmZQrzQRv9fL4gLkbgzuxXXzfQVAQ5u",
  "key37": "xqqVFZ1kaRoL3hbDVhxzGZ8EnZdPDivqVFdPZTyYLrZriG5v2XV4jmmA1LJLcjndWoQV719cqij64Fi8t3MqefQ",
  "key38": "38oGWH37nx6nAUWLfHBDU1Y77pzkftcZomVWwPoUbBT28aaNThFW95MWPKXteVtUakxa14d8saBGZfWt34MP4HZd",
  "key39": "4ecVsgfkdRga4xsyRau5piypheysVtC5xDczzNGZ4gbzbtEk3wR1J7tQuvUdfYV4vVqSfPAiH5GK9Ed6vwkVKCyx",
  "key40": "3m9LC83s2X9PCba1Q6797es62PvfiiQaVoPDRgpCSf3PpaqDAvVDqidTSvFZA6wwxjGRf1Fe9Q48kw9CwB4Nt2yJ",
  "key41": "4oqZXpKMuJPVMyenVF1AcoWxwQaUyEja2esn83aRySkSKw5sw9AEUFNn5okuBW87BXFdvM9iVc5GHNhTxSiXzQnT",
  "key42": "5umnzCXzT19k7xzLDx8d6XBcYw3AE1sdKeLeZkF2WmeigB9eDE1XAL1NQKBF5s7LjP9C56yzcpCRExFS1qH8zeGa",
  "key43": "26wbDw2Bz4RgQsEuZUKJcXgmZxYWaUtNd1ubvGb2S8BRbMKoLqzyTH73rgyvApxX7RDNb7VrcZXhvTkUmp3SirKq",
  "key44": "3wZYwxziVESpPr7nk1caGxnJX1dFon5f77TTjgy8VfAXYyJrrPV8TFeDfZaEa4mW33qZA49MKjNAEmdQpPHPsuBn",
  "key45": "2c3mE5GGBJaZ5RRdVncxSC87rGsEbmXcvtCY9Hf2tFHu575YMd8hegSmPfoCAEEDjD3ewxoWDF1diiGS415tUQWo",
  "key46": "27KHgoPjzEoh1psER986T9YKFccbDWS3AhzZ274g5cYkB95TwXkQ4XE7cU9f4fZonLj1NP5zo3693GWvnaBN9Z5C",
  "key47": "3VH5YYZisQfKL9KMwUExPLxNNaTnNADvuAmxoNoDrvb8Uc7geB7BuKmnnD1veHAwmyDtxtUf18jLSiULBdqv7r8v",
  "key48": "38axjKoaMz7k6JWuMQ1Q6qXvaGMNizqeQETzRL2ztwCHYudSCLmj46RHpJgF6aqmSZovKU1G9Bd23AUCMBWPJ8FC"
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
