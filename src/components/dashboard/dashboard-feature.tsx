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
    "4DT3QekaDwi2srZ9aCCa7bMGfyHCGAeG2FvuNqF6fdGNM1AR6aFE6jQi8j9Eme3t7bBYviRVNoVw4Dtnn9qjGhEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kTiKZg735sug1J5J93pHPsbSqMxKJP2ozAr2WcpgpRKsauaU3n6rMMyjEs5euJ1zUywKyLb9SHoxHSsovGrAGo",
  "key1": "uwcJdbiGHmtaQBagNLqrmBPjSzrmfrYWomtXZSerDAzBuN4AjKgRFX5wMfZgrTUHCYqPM9XNm96vRksGWjW48xx",
  "key2": "3MguUxtZ6zHnJRdppdVhB7tJrds9sQFt7mcTj24h1VFMeJeow2EUcUYqLeE2WET9twBMq4gZJ9BwLMCyEAPULr88",
  "key3": "4xHc44X4yxzKmw5ygD8CUBWGwDWH89wfCifLLvePeJAi7UKTTSfC1MHETKPBbsKnZ1jcmynbNdWPq2SiyAMF4G66",
  "key4": "5Uk3nvqhrPJ1xvyYoYDjTegeo7rB141P4PtWXoaPEruRDePAj2m4Hk2VrRx4dmJfcxUXG2f2x5FfhXBGuehgaVu9",
  "key5": "5F8ArbjAeZjWn6FwTytWKYmyELmXSjBa4mMpnZrG5f8iGUUjRYyuzaJw6cdbNm5mocbCXbY8vumtRuCkJM8U9D3b",
  "key6": "26h3VYczM6bkR67wSBMYP1agsJybB6xPFD9xpVCoJ3JFc3wsBKxpQiHwvRybzimrbwhaiCrq9hMi6FAsp2ggiAhS",
  "key7": "5es8aA9aFgwvhtnUUc5FExNAJ3oqpBCRnzYkDEuiuCQb6Vr418u72RRUChu3FD4swjPzZVH2W8qGRiS3tCS5kZ74",
  "key8": "5o7xSqw4TePLxLjSsLLGZ659VRAkEtZd8YjL1LqsKkqLtoAQxcbvCWL2Hn5EpRfdbVXpZh3d8Jn13pSaE2hX4nfb",
  "key9": "3DjGA12Jv5wdvZBu5pc13iDK1Rx8wuXRbSDGVUtV7y1wUVwqNoUbHrfQCQQFQg3meqDTaVFHDY4TCBoYWVKNgxg2",
  "key10": "5iQVuorpnCBzjv3YK6f9PjaCB8VpdsguCjPDHFk3eqyqbCiJ774LknAWdv5TehfQRWy2SGJZcEsUp8uj7tyc2CPu",
  "key11": "2WuyGY9YzJUijxCdnDBjRrNdDfi3J1hgnNvSXPyer98gVsVjsQiHnQD3Ns1GBDi29vvhSVKVgyEMFZmFgefuL91Z",
  "key12": "ni3yTR9rLVBtaFMk3pqAu7HSZz4HLfVQSy5k9B9b7T1VsBDex9LYECxVAJkqZd3RFZGTHzXKeN6g3y9DUofaM9e",
  "key13": "N5fuoGWdgp4v1gqQUtRKbUqy67XKxB26QMNBFS6qPpxVKG52wzRpnowhuNnmwRsxNdHWRAKNbfa2sRbbw1xJvTZ",
  "key14": "4FrJfdb4SUTrwxtzmTNtXK3aJryf4cTWaHTLySi1ERmXUs3hpNcVXK6Ud7pWSP86rB8QY6caQc5fhBaddKinBUPM",
  "key15": "2b57vKeDFkc2uXuMtEnbU9bZ7qw64tPsL9eLFQtyVVe9c5PKiMWjNghRLsjYbEmrCTZAaJvs58HZAYiCz6MefXzc",
  "key16": "3MS1EMAcJxvv7i36w9R7JxJSyr9JEskZMZMNHD1YbcfB98JCNZXk4jLfCrALXgvLTSsXiTbte8ktEgpNRnucFWxF",
  "key17": "45mqQ6EFQjRJvoCaNHNqhmkikHofUMqbQQLS7y8E6NcAhfRpRWvMvpa4zw1gWbkTP7jYKckSceamU62FoX6td26D",
  "key18": "3yjTX4evnuZjfjbDPX8XaZYfDiwb9XV7KUPmMJZ1BEvL7aLVx5vL8RbC7n4rP4rBLWq1927ZyJZHWuA7bK7nERaC",
  "key19": "5VauUJTXHwXbkPRjmUBEiC4qohrs99CQhMA2MVsNPiSFGbLZjXPqLpRP115yBNJw2i1iwi1xAw7xfevFFocTKWzG",
  "key20": "Rn7DiZWMyyPnG6XTTHrsjL4EkJVz2KPxvk1Ep84RYXceudUaq9HPB5eyT7YsSGn18cU4V9zYLiPS3iTaoJcoCKU",
  "key21": "4Lp8fA4vZhYJGTsNmFFgsbFsMdjRF7PPutAS96XLLLo84M3syn1uPB2XFHNchC5w3CiPNq4dN273dnApVeX6gDVj",
  "key22": "5k1fgFrwcKBoBcUmkRQiLFthiTtujHoUt5mmUh9YxihJdDuNzQB4HKNM4yPfCiKAmTM1v8usDREtwQJthnj9mgTD",
  "key23": "31qL1mDgdWsUoJ7uX2nX7WK1jd64kqynXJMzMXTGe6snSpKKiApGnec4NQo3h5HywUzVDPvenoVPSj4dk4a34NVD",
  "key24": "2CtQUcvVGzfHqWHR9ZLjiJ3VWhyvvVxnrqJ1tBRPsfnmq4jk3YGqdtzkApq5AcDwM2KwbS9JGYB53apsgkjPKVAy",
  "key25": "z31eXAyjXnjFtSPd6VCkMZqQfRRSNAVJtbxqSKUHGgYBmeFopWbHGvPpqQp2yPsT5zir16wjE99XME32fYai5oz",
  "key26": "5ERtpD3h23bYaRsLmR2Kq22x8zoWYRT6PywPCcCF93qXDbWZk7R8LtWLVh9quNKzDjSdY7WZBfsywGrYuDudWsWw",
  "key27": "2AG2fUk8JRJ2XL2D97CasKtFWDhi9xQbQtWb2oBukcsUHqGfTbCsP1RG9AtSX3TazhjtZ2w6i8QFtx7q9QAdEecm",
  "key28": "5eNpJymnjEzFpXNbrB1DeGwWwrrCYVZPhWGHM6FHYNVsaNdC2Ugdkw8dtkSw3d38swam7CqaMBTVLYXRPe5x7RZN",
  "key29": "59R7JnvbDhiAXDAEKvPWnxSjM4uuWbQSNVRGRATu8B5vFNFcGHSGxJR9UVmzA6BmWN2xXcTpXcFa57H6U9rBtMwh",
  "key30": "2G2oLmCgXp31L8vJkrq2okQDMLDWZzRxzQXVww62WbLe4sniRjf9H3ip17Re5DK1scjF88abB57AtxXxM5jLyDEY",
  "key31": "4CDkeb25qNziTVND8wxwA17hwsgPRGptQ7pDtx1N6E3XUbWAEYPz57eCbWaVMkfwHj7yN75hZeE5ZKGXKxbHgGy1",
  "key32": "4RASgMdv1tqGzNgansaerbBLwgCm6JPRtrYyVpq2pLPTgK4FaRrcJeqPzBs1v3GCjYWVcAum1ZduserqJKyZhfgW",
  "key33": "dUpNs1hWMPNTGHSBA7LAVQVzHm2FQXHx5BGn3uZefU1ET4EwTHpfck4gdy8HJiy6vhKmZNahx1rHKvWkJLVpubr",
  "key34": "2xsocrCkVzMc7PxNDj7nsydC8TCvZcPwh6fYd2BAVs5jGn4e6r5TWdBiL5rc6B9BGJMC42y685T5onxh9FQtgV4j",
  "key35": "5WCgLdpMQktVxdGcGThdBZZCmBMJ1fapCyn9cmMZjhwhkDunobBtthNs9CDpbeTvb9UmCsKBz61KmWxc3893VBDp",
  "key36": "3oBVpU758RJnj7ezHSkB115RCs3AvN5c3Bbz2oAPhGHw76F47ZXkogdPgDCxwPa8xgZivQt8RvyvKtx14Wq8eGYT",
  "key37": "2dnm376qCf66e3vMai5hJxU4p1nykr7YK6MYoszf5F7Fms8weYym7kYs8BDbWvCZoPGEAhXsVfyxKBKq8CrkXGHu",
  "key38": "3734U3gm7Ak7XDquU8eyrHpWanDxEbUDU4oH492kccVsf3tsPwYf6kGg9BefUb4po6TJ8BEdKuxEhX3RBKKBEzyg",
  "key39": "5dm7ADoD7LLEM36K4UrtnL4oAhLGwtoUBXpChDkegLNGPF6xXGsGq69EWFdtSuafx4raxEmy5KwQHcmPGDN1p4eL"
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
