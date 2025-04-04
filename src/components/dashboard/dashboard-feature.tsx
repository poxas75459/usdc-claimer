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
    "3iDwsMxTj2j9S5nuXVsQCxVVwgcThgh4TBRK4wYAj28jjNS2thgK7mEW9QPir6dbCUMXHW5DMMSUdXQhiA1G6EJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eYNroHXcBzZnf4CFtm2RcWuP9rVhuDDEcLigHfU7FNtnVjprYdbY48qhS73F5sugiUWCxLvVgivT2AUWWUyUxtK",
  "key1": "5aVfDvSRWnayKKU9wD6L4dFVsjHCttDcefBvoAseXM6X3BmtQZmEW6qCmGYTQoeY15VE33NCSCPR4985hHnqAbLj",
  "key2": "54L1p7n5ayjhUFrvkJ1wqr45tbdnXWbdiXUXrXmxaUwUsNy1PJB2dsMvk323SDF9MScNVdKWhBdaDTXziNFh5Evt",
  "key3": "5zT9mj2bALfepk6PFgkjDMCmBqD9swgdbSuhdFFa1gB2UbaEPzCcLdT4K6FVo1cS189qCY4wTniSJyQo4zQcFzy4",
  "key4": "2se6RZBymvPmoKzp8ha8vo9y1YgHvetfsWoe65qg7PxPhfMAGh5apt15tbb6e5d1RFDrCP2QUo1x8vMzFGexWnFt",
  "key5": "dG7CsL1FtTtmaojJHXUoiW7Urhevat9LD7SuszxMvoYFNMXJkiekS7qn6t8dG1wgKJH3Yq5VgQpePDMLR3vw7cN",
  "key6": "aUW86KLdTQSi2Sqm1pv5RG3DEwXWW8heRRZxqEwoANajoBcNvSVX8CvQzPy61yKD3tWfYVYeBdjzMT4f2uizh4r",
  "key7": "2jMX6ev4wfYzyZatHz3dKLRwn8hsZn27wjPsQtnT5PMX2v5Lco4aLgmYCJ71KqMzkr3Zvoo8SqCZq92hSQ3CQBJ9",
  "key8": "4dVeJMfe9AhLUWtBTspiJAD4XKcRdJVFhvWPAwTNcjhL7z3cVj7Wnc9bUhJA1cKTzU54c3NVh6AWePS2h5WwrQuk",
  "key9": "5mnwpMzbQvDYowB2ARXDVbxQzQ8rHsKVmsNu6PNusrdEuJVqF4gUMii9hKwS9ro6dRCzpnviS824u19ZZ7X8tdMN",
  "key10": "CBjrmx9GncYh4FPt7d39JqrP2Mp3qP6AbsS7bidGB9an7L6XLDyqWBWEHoi5NHq1god5C1bx2A4nbWW7VndCDBE",
  "key11": "4RJYaCYdyM9ebszGHZFTThwb9kYR5FSbYfJCtfJXjAWPofxBiUBS2NBhjr27B4wQXH1EdfBXQdRCJQFceYN7Sbbr",
  "key12": "2cYeNkfpXYPSMQ6XnK64uMzxG7ftg3co1546zJ4xBHKnR6ncSoXUAHYaES14UuYaPQRTcpTF2qFT6EfpW6kEAvth",
  "key13": "52zWTKAbQR6woHcFyqLc2URpZy1CWrU5FVxKzeEeVaZkAo4hX1L2eqg68EyFgD1cz9g2EwnNvpZrXEFC8V631MSS",
  "key14": "5HWLS1katqwzEtTJrFaHDGBWr5TPSnnnPwRu4rb8oYFCgrS4gRhbakcHit5snFHdE6F4c1ibVGhDWhLycebt61eT",
  "key15": "BtPmNk1NqbRDCrcLouDSbbPWDSsQasjjvreTaDmBPqXzHiK3T7Lfx4bCwtgJvL6X8g4sx8UYqBgo69fQKGXdu8K",
  "key16": "gdY52dHUz2Eqjc1VzkoUwDxsJQCFWyEtfNaFSEuvAydUhH2VxLvp4xV3jf3dUtC3kSF4o89Y66JxXSS1eGoawec",
  "key17": "4PRGwhBWg8izoNBqxxYYp3ESky3FoT2ebyrJHFnPE8YMUN4XDY3S8DeuHLxMMuU4xFo9NtzAo6n7NCNsZfLUjnT6",
  "key18": "P6LQc5waEhUxHWJHsrkz7yqXTd2Yq1P3ifN8UAgZaVvo5T3edJSZr2HrXXX884X2L92TXjJfVQeGRZUhbSQxFPx",
  "key19": "KLBgE9e3f1VLGEkQ2efMnN3uAcJwVCr87AbQQaDHw6QiHQ3fSEchLvmyuDnh63Q6LnABSgHw4S4YyHw7TmMjKN5",
  "key20": "66RnFxzbNYvquoGpWvM1Mxv8ihvcj1VNcdhW8XUdZnRHttL38TBfzizsBxnJZRVeWKYjnpPMYL8tKVkEJL2Z73ks",
  "key21": "wvMSQJTYziuDSHb9hS7r8J8SdnWwxjU6nsQMkbj8LwDnTn2qCJ8jPWUL4S3Xj4m7sDBxteAhjQ13MeuZFp5kAJ3",
  "key22": "3nf661PLza7cURCEgMQqVwkGBQ2XoBWoEN7kPD2B7E3J2G8A1SSYC7TpM15L4hjpXJqacEm5pTeqi9byAQdEMfRe",
  "key23": "CPQHkWt23UM5nT8EsebTCAfPnDCCyXCAar2JGnXapVwkJGKx8td9uM3fjD8kzNwUg6ZasP36ixXFSyC2NmALeaL",
  "key24": "4hmWY5PYnQHHdbgD9nwdd3MWrQZzRoUyLV6MCri4LJJUkbHhx2eZfWAaiYK4Qdo5V5Zjzcupeez2i24msdGHbwNF",
  "key25": "41fwKUXJ1GzRPyuZyUwDpXTEUXHTNDH4KcSUF5ihSk1iQg8g6Y1J7ZCbfHj3mhPxxb4cZrCxrAiu2c9rbrEs3H9Z",
  "key26": "3RUCHgn8gG24vKVJgaxKJDsWt2snXLEPTzMeYqAXPmKsfL7VbUfF9ZnqxjXrQ5BRcjMkLVY6pZMF9AG44cbBzRVk",
  "key27": "6tHyTqtNywtdW83RmRnU22j3EuXPuYYZZy43q2ALwiMpoQ5AfX6Er2G4cFrLsVM8kwPgzDFEK51PULgSqGBK8oR",
  "key28": "2HHkmdh42jBr2ticEF5ETgEMJe5ujKxs71Yp1E6RtTu7VSGK6cX1N38nwEUJ6m416J1w82Bdm8mPpnb7mpz37v7a",
  "key29": "2GjHPfefrqm7Uq9RxQAqVU2Y3hhKR6JtPdni8McPjyAuuxzysZ5NwEiBymkQ8Fxdpg2uCQmKZMaooS73aqXRnM3M",
  "key30": "5bu82ApicQyJQEVWzpyow5APZELaRev7SVBEPG54omettXvgN3Um1isHLxgAQosYZUeGczxkhVoDUVccmbNYUBcP",
  "key31": "ydwSiazaHa75R5RQoAQ4zZqH6ctj7jHXoUUtxazfyr8XoeSxWXNw6eJiN1NSfVBCYU6WgRR5CaSJDcUY8duSkNA",
  "key32": "2fDZxwptGNq8dbkM2vGM9cLD1tSMExSvWDnbf3S3n2K11BBHDtBxDXXPDYoMaYnokKp1M3y3HouqZb9Hwig5YUFA",
  "key33": "49n21W9nLrirkdGGZoQHr8spua4z5cLdk9jnCbWVv51FXqXi4DStNZg8b8Z94k9J69vNmH2CwqKHb6rJNziEeLrq",
  "key34": "DCQSwXhvo48xTKH2QJvbqBaJaPCZZHASP5DYhX8x56CoaZGGFtQ4HZqGcapfzh14o3a7YTSupCZPcLLxVPmNH51",
  "key35": "5EPANmqfzut72iX72ijxw2rzZSHA1x1BoMM74M9dJDZFsJfkapv1srQ3mfWgjm28aEuauxZAygCUcXXL9XEm2HHg",
  "key36": "bHZMTySxADy7Rbj2sQ1c94tM1PsSn1YsrD5XCTongSEkGvtCDUsm6v8zJb6oaGdUvf9yKMB7x29vSd97ezzvcjz",
  "key37": "4X8rT89jPkHqpPhqt28McYz3D5xD3BDn9H7835JNPL4DsQ63t3KwQMWd8N3qJEZgzmLT9aRzCpAigdTB75Z7BuWj",
  "key38": "4UpTuB5ZdCgioSd82WJUPcsEdHNhAZgrL6nLBpKAL7YCr6xghgpS13qT9j9V6tewoYCRNLNAtqAykqmKciHsdRAP",
  "key39": "D6kvg61Lhork6oXUS72yEEAf9A2uq6Lv913BmgxqAS5FgjaKir9RPxR5BW3FkzyeXShAnu8Y2No5ZVULKhDrRYA",
  "key40": "28qAjboYAjwbj67PWnqHMt1CY52mZL1acZkiCxwgbryNkPeE937Av1zYMjhjSJF88YiSCZHc9V8T2UBvn5TieZJV",
  "key41": "5ZL2oYqxh98637XGqTN1RapS8ydHh6GhxDwRqQDAm8hu4b8ZEcmG7GJXygjR2hVmBWfvdjqjjcb6HEHReRJYj3nj",
  "key42": "5eDhTDj7xTfLdauhYP9M8XG1j63xgV8GzrBReJfDAR6rV1GvHaRgCbCwnWjRYqyfN8umDxXstgaTxUhkhrvfHb17",
  "key43": "3uRYSZYvGG9Xdog4tywTYzyKdRyhMDgzE9Wrgpx5yBHoxbPhY4KZwuzKmX4N73VT9xyWetbDBJTiSuy5sJneCvoe"
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
