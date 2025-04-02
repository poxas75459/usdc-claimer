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
    "4UXNuLWcuS6U7BNn9paeVprXdtqvWr3Vceh8hRXZGB8swNvFWYYMeGx2jESXZb7NHwazy3ayjPJGVeCiaKQT6C3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsAEx9frgcAT2RqhcheviETFcpLXfQzPE4NHCLjjmexx5UQox6ZGpeLohUoKyVpobnYS68ySuvXRGxkeGGRJwno",
  "key1": "2D5kqcFZ9t3AGAh8nuB7KKPcNEAVYHgCDNqFoE3Ce2f9iHBxjLbaLfhCtcbPxjQr41AioUFFeoxG5ZBRKgZUzmBJ",
  "key2": "2wUsKCyfYKpCsQu8y1cXBznVscVhKDdzgugaazAKprSJqqwYNhz9ebSYUro924vyUj4XUMGDm7ofHxAEPoSdDmgV",
  "key3": "5QsvUKsinG5Naz4fPgDMiqUFpiSDN1NxahBGc5KTjfGDTnXBo3bNYRmkjZXyQiKnQ55kmzm9ZUjmpeqPPrYczTXU",
  "key4": "3fiAwyzBEHcu8taXg3jVDJfCSoKJ5dQ5DLMogA7opgPGMrFJW4PKZPLxeB3ZhHvfcikxe1dLGCgph1SzpKP1eak",
  "key5": "5vPF8U433S6waWqKyBCayMpgRh4m7BC9BmEPyJz57yJcUjQDhy88YoRmnoMoisXL6Foj97Ltn49tY9qfzRHeB9Z4",
  "key6": "28jSyxasqkj3cQwCrVuwAoaiyTm66MMrcGFFHGjPrCGoEMpxZHgeuvT1WfqF9LG9b6DK82vbc4iZzRSmMLkb2GZ2",
  "key7": "9LaeFX5VgMvW5ds2QxoWYsMfhr78wXNDkK2StiCRGvxMFxJqxewqLW9pRtQF81VRXE4Ri5rtoyvVLXF7px3CymJ",
  "key8": "24L9oizkjcwmQdoMZxYYHNXi14Kxvi1GWAYKBSvKZX8AgqK2d2vTCSjUr1DYPcgTh9mR5qkdkuKwAL3kizaWcHsY",
  "key9": "2M8aNAQqPBFdAZXcBc2Z2g21XVgDsqsro4toZjMwnSw2N5HLBY1a8Hf2exZPmG716MgNyuehp5pX9D78oADC7DuV",
  "key10": "3ejuaRmgSuyuPZ3gtzmr1JyEpHc3PdzSfrhvdiyHJkBwXpfvodityGJCi36omPgE348kwE7AqadYDU7qyua8T85B",
  "key11": "2aoPv6rov6RQV1divZbh4qsjMha61bqGQYHsHumKoU2BLikPKGqPv3d37RWastDRiaz1oo4hd8ArM2BVy3qUGt1j",
  "key12": "4ZFgHAyJnfddhxXegF47rjyoPrb48Doiq9W8LArfgzEdEcjgYBSZhbZBwEgXFzAKk7FATucBFATNmKEM6QUvYLkS",
  "key13": "3ERBP3PAGLtiwXy4M8dWgi5yR7ttpkLijpjUTaPFenmPq6ymWTqtdimLjjeimuUQSbg31yxP21YxVdYM9jZtQY9E",
  "key14": "3eqHBfQr4NVNUZjRjeoDgAN9Ea5FukK9st7qb6uEKk9Vf8jMgH7Jq67R3bCBGuhHHESRjN6SurmxjRHktRFgHVCW",
  "key15": "yH8RRCNqmseSyfRpKa2hDEmBXK4YMm8A7EKnLFTHT2v53Q6b7nA6t2zc8u59c1PH5CP7KkvkYMkf8W8xzmxwxub",
  "key16": "3PdVvQLPrsMfBUhbRaVevMGVSQnALpP8viUwhgJeYXM3NxE95AyTcpt3UNps7r3j5btkjHuK5XXocFEm5E2Ro5u5",
  "key17": "5Dk4KbYRB139Toxstke6C4XiRxYTCEDMcUyx1b9Q531egJDaBGCgmdtbWVb9Hc48vqCBYa6s2URMPmkWWN7fQosx",
  "key18": "65Wrs5A3Er5y8fw3CUF9ZNXFMGP6vhaKb5B7D8b6C3wwkfpGD9c6CSnRPySvPyCRT1ip4fgeDZpXNwYfDYsD5PuZ",
  "key19": "47i5vW8DgjSF4g9jNXv1i7FErUSvFcw1jwSLnrNDeGrDK4qJNN6maMdEQp7urXn7jhWaznCVLdtrikVAWuY3N6U8",
  "key20": "5fw1E2Shc3PHnCA2MERaB6GKPAd9cYfrPgeroH1bDbHpVXT5xjw95dyWLSMTkMacVGU96DmNSQkXArS6n61NWjpE",
  "key21": "3NEmEBMtyRLb9dCGV9BE1Z5L2D8QX1P3eY3P5PPcyjK9SnhG5ffnK8HeyFKFYZ69WjEYwfQv8c922vuh1DJU33ca",
  "key22": "5RFffwX3x9tZZbt1nZpfvzZ4hJ4Gn69Z8h7rr8RqYyobEiGXNfA2xZUSH2w8C7rUBVdaUAcYkTX8GBLYC1UYmc4h",
  "key23": "5bXtAuPq1SU4Hc9vkas5tdocdtgpz1wnn5g9RQ5AoKT1j1X9z6ezhpr3BHgRLg64k9AKTfEXqXBeEZbi3yTnnUAx",
  "key24": "4ZaSPCjS9Z6cv8YZnwH6h7byzwYWV5FrxRiQFiz8nme5NMJGbdq2v9zqhkc3jRgMe6icNFGcZMVKZYK3jbdQCtgu",
  "key25": "2Z89VJD9Zquta3RXpws5RNu6Skra58WXUzFeANhHkTCzQdS3NHobqSG9NXe3kJMbXyMoxmVNUNXX9tejAFxuP4Lc",
  "key26": "2FLtv45Lt7aqMm4B9JnjWPbCD3HA1b3U1kHcbvE9MhCPbgyCBsQ1ByHFwZazp9McE1L6PajVmJiYN1fBsfEswZbK",
  "key27": "34brRNUGQRM8yhRoL8dgPG8m3UTmQ1cpzZQLyRokaLnn5qgj2mbuytp2BymyY5k2yJhpFqosTEvB9ngEMdWXA6R9",
  "key28": "4txeHospjiHxbJKpUzFVwGkRUdpQkrPzpB3HFtXk5EoTn5QmgxnmPRDtysUXXHJChfoEJzp6f7qrtuGtWHs5XDED",
  "key29": "3RrVaVJ5LwyPvYvqNgxtZi78kDymrTAHt2AvDMqTP8EkUATn8T1KYvFGhrPvEteKVhjYqe47fv6eNZQM7fP46FAk",
  "key30": "2smi7gDmCawjYKfQ9AK97R73zrv8LZCRYyQdc6LkgavPsciz3H5BfmNCUjQ3MuyhjNMwMLkuz5Swd1gxH1fZTx3q",
  "key31": "21NkniwMtKWGzWCvVLVYLk2RPA7jv7V5hmqHYgKjW9n9w3igC9YYFnFLiLuip1wBMcrX4CecnLWVwpadWzHtiLNN",
  "key32": "5DLbX7n9Sc1nVd9W5f5fnhCezFkZE9bW1UiCpngabdUUsBzfpstuagmSjydCPWy1uJLVY3qATBf36p5My3ca4Txb",
  "key33": "2t2sr8qiVaQqSsKmj2R4NEXE89VRGzVoaxX4dN94c5tPY1Dbu5V6YUBdFu8sx7dGUCMCJZzyUxHZ3XAfNCBezrNN",
  "key34": "uaxFFZ5hu3zs9GESUxHL9QsWHfavXdSo9CkNn4KojZXMT6EVbu4KKpKr5yDfSnTVepPeUhjQ3yZ4xKnUg2Kpiip",
  "key35": "61bQz7Vi4JK4DB4QWukooxS38vLazgHDyDMezLPS12bmAaqFFJ3GQFFHmArsqNHikZHJUbjzrjZPmiWfqwDkTkoh",
  "key36": "2MdC2ipst3HDdg6nkCicdaMbzKoHSSASSsuacpFx1bQTkHfGhrqrDN6Ld5Hx1JozguqSFm26WdFre3foWQZne9Ah",
  "key37": "378LGvTXAGkViyMgc9tYrRzNKyFs9rsenjPXYem7iJbX7ciSppxk2DwW8iTEQ8hvQgv2X61NVvnRb5qDLhwm63XB"
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
