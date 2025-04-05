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
    "4YReBFjwSR6vm8kYWbcfkCqm9J1UfUHVMozfJuKYHjZqJvRtL475tUTBzoUcHokBNBj4TEmxHPE8DbMZUBMA86H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfPMhPg8HqkWFvo8QLUXK89SULqfC6EJUnf6LmZTEZSkohMQeGUosdbuahHR4NtjpMgX6Dzxw7Wwen8QRrSTUw5",
  "key1": "4NcLpaKXDnH8pSLTgyS14Wpf9uFhFcD8wVQw3evE5fJLauDri5HtpPrwzCGosmnJDSGY2QBfMLN7MXsmcos1Y83t",
  "key2": "62DUEwHAJQJCGMy7TzKPAyrVn1te5LScJggHC8PkWWYZ4osHquMLRrReX5t17rcoGkZb3JqHvZq9DgUEu6pSshH",
  "key3": "2qbwNKDsLtYc5jYaDYwtWnC7E61rmMewPP5hNY5oCMMTNNcPQLeRmbfAAvzDUoA2PxY5hdEWLeimu6gqDsYcgu7G",
  "key4": "2AnszmRGnBFNcamScNJhVXBSfDGbr51SHaKuEjPviETUCJQLPpmR1PoXddjKGapqFfTcK2oi1sY4eiSCK3Wc54er",
  "key5": "4JtzQ4cFfn9AYy3HjJrpSm83EqZ21s3Z7SLuX232ZWGMLy9uDSyNRn3CtukEQEgJ59KwSVu1Q4pLHrXsDnujHheb",
  "key6": "5QJLfKLHaeDfJbQ8XqxEbwGELWyQukvhB6TS3G3tfvySUeHftsDhwx6LKfLkm7isPyS3tE4Roa6HXMdhZBGPwiyo",
  "key7": "5isx7b2FwfmtZyZpeMGmX4W7xFmjfv5fHPJdvfJGZU6xMwf96Zegr1wjcMgsMP61X2PTkaVShSf2wZ2pe8cb2PLi",
  "key8": "9SyADVTvi8sW7H51AEPDLEo5ea92AkqYaSBDCYnChyQ3P2u8uzdSuusLm4vebNcJZcGLp189aiVvVpa9J5q8nbz",
  "key9": "42RWFF22wRRmELeaJVibbsDxYdN1dWgd362WxWch1gsGcJdTw79uh8q2FnJ2aS8TKR6sCM56zzPpeB2NLqjcp1Z8",
  "key10": "2JEqdB6DZJuiFM7oZCNUf2u1oGBi4yWLGFomjmLTTrj6ew6ZFoLDjtD8LbeUgnuy2CCrXs5Cxgvc9rhARd98zFYY",
  "key11": "3s62uoYbmD9UizSiwm3nV3nmpaFRvEjmS6kug6Xc2SFY5kqZT4cqy3m9m2L2UopHs4eHyyEh3LRmjZZYjsoCymDp",
  "key12": "sY9VkgkJrGiE2T8dmVHHBWcHxAGTuTRR88vtxCpgQEEbuKM5AbDadZ2jMz19E1rfrd4F4fNS26CU723iDnYa7by",
  "key13": "5g6u8pzys3mymb4wAU8wNxqmWpW6wAKr1fS737LBuaCazpFPPVjH4yvEHxdsfS5jiDhTLFRNJFU28R4WGFEUqYCP",
  "key14": "2QzwphvzSudihUbmcFasnczyz3v63ZTgedav97HGKdjxSKeZ2AeKAXd11Qg22hYsDLCvBajp4wkw8V9r6GvzbeJY",
  "key15": "5HYMAsEoJuQgFDf8qnvWatytcEdqEf4GWEaXjGFFxDmvTrgqmH3j5nHqhtTd8ot8GYK8KGjE9YzRscUSJj7ELgRg",
  "key16": "29UaRumTNbbBiesz3crasxwGy2sFU9nhR9QBHFJR6QzMJ7yvXj1ms1fj5FX5QGWMkgvgATKGd8HUt3wo4oM4fpcm",
  "key17": "4S7wCBNPXHFFQFhBMgkgiU3GFvcj1A3KmUC4xqKrYVFfsyrcGXCgzQNG9zX1Z5VfhWGcNLdDdmJGySQLMnCiYysu",
  "key18": "2NwhMJxzcVPBXMjqHMy9M26oFKC5cn8xDzsAAVc6829tLjrkzWeKpdkBv2vc9N9Q41FXhYEyXMuwgUkW17g13WJ7",
  "key19": "2u5iN954i2cDtgJV1EyQHVdukPMtaqsLYirbadSyY3QMkgrHBaZK3pVtNc7ujEz17vGaqG8dvvBmYY1xdUTrS4yP",
  "key20": "3Gk6ZytXJ3y6FuqWNdmF7tcQVxf5QYJojCP6yBH28gk8C9HYdQgLQ44X39yUTRMjvjtfQ2YwXnjAM4yuGbHs8HrS",
  "key21": "2978TVyHQVMP9X3wfQ4tBZTARNZhdrP25BsfbYk7z86ZAMKejbMQRdbGAUomGgm47RPD8FZWuNYkozaCKt8MvZnV",
  "key22": "5ar13KFgM4YDXCnJo1jTX1eLgUATE9L4ZuowZoQBQW8R9fbcbtTLY8Z5Jt75rWEct7n2wRQgcugmP94UNTz8sv4h",
  "key23": "xJ8PkhzoEEHqHd84xbUqXg31w7GtwBGkNvZWfG3TTVu9RLi6j83yhGBcvvNgzrLeAALW9T7LwVJJQ6Sxq53LnVy",
  "key24": "SGUwkkfpPYYKMjMjoTxU65YUkCdamXUChgpaHARsZM4w5YeFWNSUMUiDfCFEGLHozNww8rhHwv6yrGsS6TT7TQe",
  "key25": "5UgUae1vUrTc3Z9ZU1dV2hT9H8nmYdCPHihUx2ciT3FsSumDfVckFhUtW86zhemhiftVFTRQ9kvrKgjvodwo6bhY",
  "key26": "fUuqgn7Ww3UcRwAFSMdxB3U2BPNxwSejcQ3hPj7ECwNJB1dERJcpc7VrGt3T7n8vaoQp2L6PjsQYjypdtmmXhVt",
  "key27": "4W8EqR6iKhUf3cHsCkJFNc8x25D1Txc1KZ9i8QVEQB7t718Fq7ueAorvMJtxBvxFU6fYmAC1aDyjL71BZ5XQT56i",
  "key28": "4NzckYJw5MZN6hmJDeu2bcfmFtcZhb5GwLwrYSKszSFkTKwsaEWHKE2Hng7DvsvSUs5ajvjYH6WTLthHzDNwREhm",
  "key29": "5wBkwFmRhLnjh1XRd6n3r5Ex4cqmkmRgGnGm9fexLSSU5bKN1qvgmQeq3CJ74iVwfDfBhxNB98g7AvmMo6Q3r4RG",
  "key30": "3vxGGa5De6aZtfkXkcHAN6SEahVRUdrF6mcPmJrhWUQGq2UayhsnAjc3t7ySMh3751SFVpcqqF4QjhpT9rrnHftj",
  "key31": "yLNRouLTeDTM6Hj3LtLJeEY4Kmy88aAvMUq7xxSmRha8Hu4DhgLYoHna2rtxWX9pfk44cwxsf2T2bKTw5UifC4B",
  "key32": "4N2ewXhcMfaKZZ6g4SwUpgQXdCudebnaPuwkX2SXbyskJVUkxuHGzFgVP83SsQkxWRUVx9bxunF3WCx2qixi7913",
  "key33": "62Z5oo2kocy9FHWH5ShfQswscmU3eHzZUBYiU4WTTgtG8yZWsFohV4gPBeagY77Er5PLxkmPF7NN5eEY2v8LdHqz",
  "key34": "58iiKTQ3q2VkquPooASqUpSumRrfgTc5GmovFZuG72ZvJdBuq7pF3ESJGcikCvnp2Y2m5xYNmyD33gXNVHvWu3D8",
  "key35": "49jzMgXb4DysZXaffDRZnmTsFbg6PACjYHpgfycHTWWZHFL6dcKy6kxYHsEJnfvVfSkAQUrDuWALoNUKDEhEZEfd",
  "key36": "4aLE3pD4z5UGemh73phv95ysmSPWMJCz7tuY3b3RFJUmuNu7szPHa1HsNtHQ6xUxr3yCZ8rbDGsmeNp1n1gThW6k",
  "key37": "3nn9Ev65Y2hm4HtYXtC7a3cjFPRF74kS545YcNs7ERwBLasa8o8i7Bto5SkuDNhkHCixemWMQwnRkQkHtk86y5Lq"
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
