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
    "3TNnHLanXgBw782fqAZB8nwpHnKwFAo6WA9GgzjH8KV9scSmSGLH4PPiB6M4VCturQFqHAU93NpbpGa8J4BAG582"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kqWSknNZ1Gzz9mT5DRZhCBT5ucEx26tvZ8WRS41gbdaNgkBjG8Py96ugb4KNbmGgRUeT4y4RbPskgsBvfdeUru",
  "key1": "3yiDkWcxzMySP7wPqgvFyiCE6Qwton3GaCJTbKRpN2DDeoZYHdFp1RypbeYYFant6XXgsPUqshybqc8mum887P1p",
  "key2": "NA6C5nS5VSecYxmVF9Zvf7wZ1AqTs3rtvTG929ae3pYm8aZfFrCR8oLimmpdy5CYPit8gHZcLqWgZdWq6jkaYb8",
  "key3": "WE7cRW41MPzhbWzmW3bHLrAGQzuawMeDvGLgkBTbVbC41iJE57oggMC3CBiCTQqTpFFXDZZb3VDRLvgjhGycVzy",
  "key4": "3xfjcjtT9F6pCLSyZjAz7dxYmEDReHCeFZBkcE53cudrLWuRyN5rtJeWLUsMdzCRmwms56zVrrStVk3dKD2MVSbp",
  "key5": "3FLXhosdmudYRSzYmvFcjz9FLtjkrDvGodjCDtBLnkPaPVKux6gxkAmmHF5tyHsLHiKCZDVpSbCdR48yXT9ith8M",
  "key6": "AArEbdiqKi5pL8bt4bh3hEXxtPDyz6zb7LiN9QfH3QGH2bsRktMZ1f73PiaM4SoGyCSaUgPFgBeEDjyMCJCgXBN",
  "key7": "41qwKn35VhXz4WA8MtUZUWFPTuMFeL4wM5PvFnPtpSAUYJhuH64hfXTPKZcTbek6MRzxjKyrHa6tXXZqFmKibAzT",
  "key8": "5jDRLemt4uugJ9PHw1tzy2Px51PQELp9tsUydEfitf2xNmNMwX7Nq5dPr55wyFE9DaKLSGAbbXxTsFeXanUft39v",
  "key9": "4V6Hh3pPasmDUPQYRs9GcPccUFYZFuP7UFsKNjjGoFFy5imEzfUTPKPEWgsKmK6UptY77hAQ8UXMFhw7WufgQ5uF",
  "key10": "2p2ApuEqLQ8SQHGAzjgvfhC81gN73ps1xuTLnhvBKLzvgqcAFax6UHbNL39Pt3RwFFzyi9AiDKsNJJ1TB5mn7Q3H",
  "key11": "3JT3XRNVRd5b86CjAj2tgeHDbDAxiDfTb71c58ujt9bfpKZjaSUoCakxK19TxQJmBc5jBhQZDSGuvLWueLZX7fvt",
  "key12": "5sA6ZHPQZv2q5KVYYU6A38UsKdUZCUtnHWaPJr72mfyh8FBsGfcsfnCa4328XCEyZSSVFW42vV7RBsaVeHnWkQ6p",
  "key13": "eoadizX5js1UzXPUXX7QhDPxXpNQqF4deHWJCEuzJgNZYuUPZGtF72CJt55BHc4p6bBtoArvEDUqp565otZGhRF",
  "key14": "2xmZF5MQkz7DRr5TCENv1FqBftY9NWP3oBtwPqem7xi3yXJdSdnnHNtS2fq7ULRN33Nq1BtSNcjhGXKsdAGXA7Lh",
  "key15": "X12N7tsVo6KEgTxfRaYxQiLp9FqteqV3AYwXqiXoiCBjPTRZo9AvVMAQ8ByibEa26pBPg9D1psFZRbi6aEADNgM",
  "key16": "5Z8mfWWfms5YxYY3GzkCyURbTFU2CJX6118xAwxrggUP3HrbxeB4EjdAwhCHWTdSEMGDPPPy9M78aEaJK9pzkdjF",
  "key17": "5DxDrzsfsADAdNhWSphEQkokGGsginvVXK9ek2JmbE41WJuPRtKmSvgbNzywe5Qxgzsfdz2ZTVduQBcdWCHR5jC1",
  "key18": "42ZGzM1CvU2gLk3987WAjGy45phRYr7pSaVZjkt8nkRfdRQ2By7Kw9V7zi65JsPXmYCV5aQW1BFxy7hNPFpBYWCm",
  "key19": "3QnCMqm7zEgqxZHGXeHhpX2j1s32g8YQKCKogx484FtiNatbT7Qw2i7FBEJ7AfXwN2paPwKCVKp3HgdPnbzbJLhy",
  "key20": "4jJXPcrGpX7hH6RCpcj8EHe3AxVFJmMvrd755CHTjNvKXRCSHhnw4mf75dEBG6o9oft1fL9XM73pJ86ovMYbxvTo",
  "key21": "3g1MWEz5ET167WFTXRjQGuK65xdUFazMrHQNqzJDz5vFgBGcSaQ8NzBYvxCAqo5JBwtBCECpnUHdSgUpaaPk1XKn",
  "key22": "3ampAdpB3zxai6BrrQj8SFWKJnoyz5WAu3eFUmmy8nF9N3mNptgjcmSW4JRqbvAnJiy66Fcfjzg38nukdMAmMokb",
  "key23": "GCMmm8tGVhmErrFYpRB41y22t2hnkZKqgqi2cp13D3TSfCVh4RD4MPzk31F7vBGVnXWtC2RZmhkKEsJPS6VceEC",
  "key24": "2woVNuwjbwZ1QHv8qEs16c9NhZkhoNQ89ftGhBx9WyTS8TSmUzjzMgJVWDfPGjZ9SNjHPYYGxAD1tRXg4RWda4CH",
  "key25": "3U4gxHBH9CTUBRxxxmxETqSVw8HuaYvcQ1HgDGmNtVG8Z7XkDPWy1k3xb3dgnwQMkh15qpvKo5mXo1c7EDCEGvmT",
  "key26": "4zR181uJyAUxkv2rRhzWoDL3DqUq3SjMLrsVZEd8rC5KzGMKU3k7nQMLAfPoTewRn9ksXe5KeTM9VWtpxHhshgwB",
  "key27": "2Scy3nNjW26uSrPdmkjrjaJgQVUkrRzPM7hsEZpfFusaL1RVisQYgVtR2jRfiqG3T5kckRgZSFbC2mw6UkJrjegX",
  "key28": "4yL99dh6L3q3XM1WNFdtgdoRK6RCJ25fecPdmCC5Seo3RQNYdNRRiTW8DQ3b2gKbmkkxkgfwNkycjsJkS3o1KewS",
  "key29": "Kg2kwSYbE112pSsRASDFgE2HjNi8sXiTMX9hQhEP7kF9fpAmTLtDwAabjxbmVFSA1jXyCDNy6dTRjkYnJ789hQn",
  "key30": "HG5NvxD1xh5rqrxdawWh94RAXShRz44eLpbLdkjV8eBzZ2prw5vmj9f1J8Swt4hyppGuyaCNsosd5Ta3uEs5QSE",
  "key31": "3RiM7BH1sDfER1K9J5nXwGPZZMdy5PRiRdEHXZSKPbXeoyFWgERUwHitVQTBGKmNAX1sGXVZ1oR6VTWwt4ApZR1i",
  "key32": "mMdEM8oKfvBhex9PG2JPir2nTUJ271EBrXiiCekUMaoRbqYh3qPRWfKUwkdnj8Tp3zyW6nBcZ8bXJnTGVRPCiKm",
  "key33": "4ZqXd7wcicfPvvJgQDQxo6AetXWYHsxEEL6ciTsfC9CNhrjK5rpFEpuo3MzmP9bCpS3vWerVS9HUTB57jEXTvW31",
  "key34": "2q6G6xuErtNUpmzT1YBaLWNdkLQhecCDyWRguG7x9mAKiaHdAgjPBUH8trTc4aD32xhdnPg4eEdnnUHewvj7zjxD",
  "key35": "4YfCujnes5J9ZYArvwEafSfTBFbD14Wo4b7LxYsJRsnF5ruasxJACWgq76G5hejuD2kRyQQeEGBwpxoMVHkAwg4n",
  "key36": "3ymJifppuwg4uVyg5LZwBTQZmPfdKWnPpjSXknTFrdBH3kaJpYP1k3sV6ot5QCjCNj2SsxCvQiy4i1mmLWMnDScb",
  "key37": "dj1WjqzjYMDZW6HY6GQSPRPSiyWz4dFrugW6KYvyEBWWSK1zLfk9tMBJpUZr3MwcNWXxUyDvuREpYGyV8pNHYwG",
  "key38": "23pBNs4yCiSNbjMmTmtQgXf91FfJhLVnotRZgi9hwEtwtRkgZPjS7Dqs298SNzkcCkSZxePCruCyLe4Fcx1R4Tbs",
  "key39": "3ycvDTavUuKHNdXrwbfXWVTJsd2YE1mY3fES5kEYwrRYheUtPTzitwWaj6b3itE9Rvy1ywJAJcY6S2KGxMoQEFCM",
  "key40": "2NKshUUCB6BXDTFcbrM1N1GtGw4Pxv3B8qq4EtKnpJuTV4KRwT61mANk8mbPhg4e7nYM334QUsezuNkmg5ti1hYy",
  "key41": "4Lm1LNecRczznAcAEikrNYNYpbWj8CiVPiQTtj6ceJ74q8trGw3H8acV56XaSCJjTJfJhxb4RLsgrBFbV8HYrPsr",
  "key42": "4bKDLPtifEy9kg75AKP3HE4i6HLxwU7LGnx4mDjFYFVhA1QFxfQvd2AcbgM2YvgXLfK2ypUx8qR4rmRH7bGbKuKy",
  "key43": "67jEhGhgWiAex7XByjrXRtRpgSyLEsKpoqHfXNjtKkKLmXAaBTKBsVsH5uojDCqVX3F2atYEdhactRiTvw9ToQQc",
  "key44": "4o6kdYdPrhTx2WJYDeNityAcdbS1AhPHkFSx6e2MdnYvkkmDmiys9spA6UgPSnQRAoUjN9Xz6TARM8KdrRSstBm8"
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
