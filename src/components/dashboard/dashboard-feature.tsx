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
    "2x57Ata6i93SLChPE1TYF7xxNSLqFT2hRjQsML3j8B2AW2GfUSW8JJSXe6x8ZxvwoiNcoGMjs7ZHBweSsP7UWgd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5bcmqvEr9aA8xjdfW77zjJavHnK8S7fPLdsiKLJyrmAiTBnhBkcZ1AtJhQLwaj5oKKSDEwp4AMTZNgJr3tTEYt",
  "key1": "5emcXzhNURqjR8z5tn13WdqDaVrYzB6FrsCy9U5vg6GkoK4iMyMjysvnNPoK3TKyp7sVLSamDS4o1KdD95b2MFiK",
  "key2": "44VEUYeUD5Yxbg4j8mdM11XMS2p8UWVgjh7nXikRz8epSXLJXAM94z7aLfPB4K71gHepxAEnX6iKYtc51T45h6qv",
  "key3": "51Yi3GLYjgoE9NY9TGeEH8GZ14fiuZzoKS32ems1Qi51vuDXsCbi1yeFeecqFLf6krncQgesmYWMEcw756zkCZKv",
  "key4": "5H97EyM36REiCw4Sq3MKzVtgnwAmgogr1t35Jcfy42CUUQr1nUKNeMCzKYaqjDCKkqfmWU7omTV5acE3Au6LCe84",
  "key5": "3pNHb8huipGgPoNPf94M3tEzbLCw5YHJNERK1bzCfLmXAFMW12ESx6D6P8kkisT3BMbZ7QLXZcZmFi7eCaZkZiRr",
  "key6": "31PWtBFRSfBMNYVjDV6F3y4rtcvDTeAzqqM3NkbyM6zX1gVMEc74LUyXUH22RN9CUVWDR4cTsguuA8AvJHLRGHfD",
  "key7": "2XmEEQwv83MenYwrAyxDReARq9j3LP7AjBpTsLm7tMWQYVsgwmRXvD3Nz6zCUcFKVGa5tvGWg1h6p4KJwXA4Ckkf",
  "key8": "2YAywQvSojVJtdUE8S1z6QSQQSbRMKnLhA3pS2SdAhLcRsPMqfC8XZxLf226KWw2k1UAoqNDdHGS6jfHoLCwiBNn",
  "key9": "29B1N8RyBNNDHZF69XMG5uxYJ6x2HPFLKwZFFhDjCUCZDHav2qjbCmMfrkbziAjqXr43k3A8epte973We5kddcCf",
  "key10": "582GFYDwMLWMHSSwkNqnp3CPaixyWdGyPc1BkNrm9LQQh6PiuvLqM8691i7hTL8UvSvFp9z6e1vCpYLyMASJghjF",
  "key11": "yJE1V9Nm2PoPhewXovdvgFUasapxd73Rzhb9hsFLjeaqfRjQKMf68u1sxhYorVxwWXVfxHSMZfBcBvuEiwzfbYF",
  "key12": "59cta56yhVjrh1qWfG7t3AxNbGc4qHmwqJyvru6jc7sbCBZTwXiPLb6PNbzN2zVj5WB6jgP8tku4RYFC6VThFx37",
  "key13": "9A73gWn63e6n43fGWGnHCCTUDXFA8pS53exGCrmzptqSsv76KT9TBHJtqdAdZT7sL4XtY9Kvyaosxepq6ZmpSvB",
  "key14": "4cmiP5b2atS1wbDgaWumVUaoLsDt2YEYR7hJMDic7JP1i9csF4mwFMBkXnKCJnW7beL1WiNpXxzcGWwQLToFhzYm",
  "key15": "63vWJ3JJqg3sS5hEYGNYCM72jR5ZTYGZK3PAFacVNPVcRiL4AU8RaFYqpD6NGyq2QiHm9YujrhjbNRtECoULZ6EH",
  "key16": "2JJnp3BEEhemUGmUYMdMUarpQYfgrkcowAHNbFuBvRaEp3HxsQwrfJpxyqiJQoQ3tn8zNeDzqiSpvXLgc9yFFXd9",
  "key17": "27PSBWccBU7dVHyKt7QLCoHHSBSqpgQbxgvZLRySnj5p1zB8SZVQVPboA9mj6RmS1y8vcEwCC2NrvznJ1BVeR1tb",
  "key18": "2oLEonRhuapqQMn582YxXdoGQeiRWe4g1UuKCmFcU5kcHkBrAqzR5o6ZcJU9e7XJ8gxTQYJkU1iEjuYvdzzCJDA1",
  "key19": "3kr9yBQXihttmFrmQ8448shmGQC5n9gj3D8N8iZMjQB5myRN7P7m3Tvmvz69mYqnqduz9x857Zq6GPXKy2fEFAwW",
  "key20": "28JhaTufKBJkX4zPpEBjzfZjj8aevCXbud5WV485kjC433TdABhb7kuYUSsQr5W865FekYFdZPkemKsJ3nkHgSs9",
  "key21": "39Eu1KEsadnpmekiBgzh7dxVdpkurMi4XyEzDsYABUrc9kEQ7RTzckD6UQBTvdvZVhvN2EpSewdK6HGGfHpxera2",
  "key22": "3wuTBEdoYGqrQgM1M24dJ6nFTXCAhAF3iAnq77xxnakdpTmnmZGTGx3W952h4NsPdM9C5mKQcHRumZ9h8vJRDQKt",
  "key23": "5LW1Xr1ikvGMfD5bd1LJfuzui1PEaJhi4k3V827wvV2kUbqbgoEQgp5KKNxdjjSEhum9rgarFsWAm6pDWEq5woKn",
  "key24": "3mvSgv4wMAb2NPVQehNiWNCCAQRksLoM4PpVR18tQ8bam7QN3thjMtvEzWaMs7g46GKjfy1JJzXYauDH1zcH22Y6",
  "key25": "4yqJsToCifH5TqxSGqr11fDaQ3GcG4YcJz9zL7zPcUDTdsashH5z97pY8ei44dJLQPcxL1nw23w6s3K3FSnoEWyh",
  "key26": "3hKQ2MgVjJBkQeVBhnR7ipfFyU3NZuL8GtKnCPHdusq3NFtSMjYhh8ZF8FwLG3YPgHBkMifDYH2dApiHqpFrVfGp",
  "key27": "4vQWgZYUQw5dh4vFsZ5o7vtPuUWjkiUJVp7cPSSVKSLC915Y7Hi2sub7pqsNbgXhGWbTSXBBifvS9vxpuzFtJztE",
  "key28": "4t3MBfU1fYNdXg4urRPVADC4Q5YMixSWE382kH8hWZsnzPH65aNsY2yxFHywiPATDxGpwwUQddGtFvgpXWtrQzcm",
  "key29": "2JDL2MMh3fHs2f71p2EZHFr57fmaM3ZZ9kdBFAEtHqzTPeT1uBtwso9qxMjVKoA5UozTckm8dyoKXy9Dtsz9mbBB",
  "key30": "4pRt5oUFzyhXHobxRigeomp3JvWrvCygfaVmWwG4mHxQirVY5NhDBXUnBMYtQGCqQPV5aR5A1TSHNtkYSq9tSxqe",
  "key31": "3Z5tiSKojwGUUg2qcRwzsAdQhxB7f2R8j62mK4HffHryQuYFnYveEEMKbrFzTPi6xoPNcWUqHVSbRgVKZ25UKC34",
  "key32": "58rQYUv62GSGZoNwsv6tH11m2pp1nGNi9PDN5DthHT9MbmLcmta9sLGoG64YbQAmnFBwV6D9G3hAm5Doa72GKDzw",
  "key33": "224HQ4v6Koc7KTz7j5mCScH3U2FoHiJf39LXDpnTDFEyECxTSUK8wxrCpH652edCroAW8Q4irbRZLSjzjrViACFp",
  "key34": "5oTb9BiAsuvqqGwEJfBQ4HrqNjcPd792kP2nCkhAEjNJ8bfKeYgxMfNpMzk8nzGMSUjRiCKTrpwdFJkrejo7KSMm",
  "key35": "6vbdxJWzSdPVBe3igWDuYN2BwwG7t3KdfQCYmLK25bAmfRCQ28oSWJubZSULNmBMcStRoFabFWuHkXCBxtmY5wZ",
  "key36": "YpExRG5C9ubWTLe8tzk7qJY77mRkpmC8XtvHRJSSzsP24UC76gkxHwYJeggBsC1PrnoVV85FbTtFmKDGde7zF31"
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
