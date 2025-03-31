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
    "2CHR1u7GV446yVS3zDAM2hGxUvPMvMsJfGsoRz8XCspXTwPw21WPvkikqiVRCU14jSh1sZGhLmQANkDPzA81sVyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7RaJfmQmWz6ieAFRYqdSy56ToWaMDMvBYi9UDAgiqyB3Up64Uv9oGai7eWynmpMVjNGVGnbfYQL8duTNT27F94",
  "key1": "PQmR8dBCgX1QrYSDky4qsydtnP9znaTG3CuBoUgEDh8c2UmiFT9kHDLvEMra9EQRVPU77ZoHnsP3dApE9FAvqGQ",
  "key2": "EZoc9DbEdAAsBKSNE6yT175F69rJHMgFN8HN9KTDAgwCMB6zmeKnjLRx1Fqe1JjrKAPgrGDZUeYdCvVK3sncsmU",
  "key3": "3tAcnYeCm7mGvecGLNDLrD8VE7PHm6StoBb1ovCdnCGVhmG6tQo24dXhJi9CsvewpW1rqEyetinYG3bbepJxuHZ2",
  "key4": "4A18KarxKenhstzZmeJmVTaTTwQiKRSv8rGPLEJjoynWxGCwv5kiCNMzvPcJJQ9a21UJmK1kkPTVCCN6hwrPPfPY",
  "key5": "2BrgQ1Jw1ADTNy4P7gz3asrJcUVEqguqJCzw89Grnmrj6J4pdYeUa8dpnJPkMsKxnPvqVU18fnEzSgLbKWT1AkYb",
  "key6": "3CbDUXHMaAZYhSsr5d9szrn8w9WUq468i1v2m7cDEPwEhbXTe6huqjoYxZTSgAJ9xh23pGkQ4RgqoxkJ2sENBJwa",
  "key7": "3qB7yEDqCaeK4BRRCmigHgP881SWjmFykBVeeMEuAxPHtu7DZxkF89wkYtnMoEwN97NDUxTFAu6FpKuzJ4LBRpJn",
  "key8": "3UbDBQkeTWaYVVCbo8VCb3MByW1G3m5YgRCxq8hGFBzrHuPr3tFE82M2sPzbWAuyiDeaEFscwoadAAGvQaBML6Yj",
  "key9": "25Nu2qnLMZkvvvG6jDrCBowsrPLhGQ1iarh9gGcLz94uhzNSwMn9TpgTnxDCBMouuzPm2s9i2j9UnKiBLSgrYaFN",
  "key10": "5J8VbnvdrE8rR8mqVAgFJiJcDQcZeQiX1sxcpdpcXFfbdXKGVQvi5twRp5ZtKTccA38dGrQ9XvimLrE5SY5mtehL",
  "key11": "5GyMmqY5sB28PYTtLmEWNxQMQmofdi7Z2oPk1toSRoSsLQtTwGS6nGS41Ksadn7qGBDgZxBwbrqyECf75B3yxNzG",
  "key12": "2DE5ezBk1LGBRXSLPa5Yeeqz8t6WALG8NJ5i8XngRNwAaVHP9uDaNyApNXuGuTjNTrMVgzaVYPjoGWZEKkLZpWWa",
  "key13": "aBRHHqfsGKYT4qji1MmEM9qAg7bvGDYoFZHji9t8wSyyvoEye9zS9866DZ2DEZ4nLxbieHu6aiqN91mRPG1kP8o",
  "key14": "5zou3kXP91VVDK4BdPmGiU6RQTxFT2BXYRR4MX63T32xCHxtgeu1dbZpiJrkXGS5wjzHBoYzS41KhjBLHxzj4Bea",
  "key15": "3ZKLrk5fLLET26vBwM1SqWrvxKYMXqy9fEFQYfy294rBoPysBYi5XNtCXvvL8vTTYywwUpE7Hzza1Sq1PmrLUVV7",
  "key16": "3XSd3PxyZiDFfzhZ38SFWwnzw364ZFdZYkzYYkcq5e9dijbdeJpqoTAQcAFJjqPM5ZaK2JDK5Q1Ye8PiBtJh7nuS",
  "key17": "5XtYH8XJPCNd3Uq89TtPmYAuans4hPqMEfqTy2c3oEVmFDD7199g7NFHGFgmJNnZ9ajQ2pFVBQiQqLCcFk5mJJtA",
  "key18": "5HVsFrA7uPV1XsNs7kJyRs5v27dh9j3uiwKhVxpzpnivkbFtXzebnjfpGUowEBkFbNfTzfeccycHeAhdfci5gFj8",
  "key19": "5LRpLHz3EYVKMTGoShLgabuzZdDx2oFswAkNEJvtiNZKbrbYFUfpc5KYu3f13F2TAvwtQumqVWEXLh3vvvS8nWmx",
  "key20": "2rfuR4AcQdSqujhM2yhgWMmeDREx8N1LZ3snw58WJZu65kpsSrFoEeB57URpiWiY81nsQBTJaG1g44ee2evxi9Q1",
  "key21": "5Uajf6sweVt2HCJKRQSXceeYXzdrnPpVX4MaBfj9qg8Grm8oc4jgidfXcVBPMZeyRB4sJLSBM9Jye4e8EsNApVKa",
  "key22": "21XJLh2gLcBKZPDnBV7oKw46QLDH65vvcUeashEhH1LWsXgxeSWU1c3X9GoFDS7yXYAY1mpyX7CmgF2byxX5tQjj",
  "key23": "23CFDRUq8P6HKNDHGk6767fewDDeMZXhbM1sZ3tEwsAJeDitSyA7V3T5HfujfNKQooDRcbdAHDUiUW85Cnoo4xvQ",
  "key24": "53JERvNG1ymfEtm4M85haqwEr4QckHsWbyy4Z3upudNARxXL9EtM4gtDJFNJK5mfctoH91y6da775iCaDVhN4ECF",
  "key25": "2vp55HRwhMFtgx26PbsfeBxcLk1ys3boiW36prEttMJKiuUFPfPqP7Hgi8UaeosHrwrYVr8hDVxdw3XSixXh2anU",
  "key26": "57bc86rNg5bJ3fYFqs34V5BUPeqK9KRBWUJQf9YBXP76ayUPyjsQbxTRec9htWy2rmubnbfh1RpqKYWk3nLCqLbj",
  "key27": "2iTR7LCk6qhtyHT79NuTTVAzKypuwkM3NjsG5tYCnbBRQ9i6mojk7a6LCsNNeB8Mc5PsvLGB64WDAfBmv9mei9fg",
  "key28": "oTS8okd5mL8g9Qc5DrLp7ShmZf3yFNufiGaCfKwkDhxqoZ9xSwnrPHJ3d1Ks8Ah5wZpxmem4cHody45gAPvACrr",
  "key29": "4RNhEfgkH47KWnX3YHZG9xge98kUxSSQk8Xwk55SHpTFnhzw8dqUtknLFaGdhSGn6repzWsQYkRkK2PhCjVyueR7",
  "key30": "24GofAJVq8EHKqqxEw6mDAUQu8VVDXPmVJWDV4Gzv7DNLwgvTkvuAXiYAceqBkckddPJz3szE9S6EJnvWTD6o8e7",
  "key31": "ErmYwdDh9JLVCiQjdsrjx4xx6UwV9gWfizM7F8N5PdmfFxdvwcQxh14QymYDnJ7KuPvbW1QHES2NbsWpHQ8UsJK",
  "key32": "XdQFGr23F4SK34F8eEe5iRQeSiYWmUxCssk4nj5e21H5xBffNL1gjcmFRwHhfw4u354nT7fuwchBd3xNtTVM5e7"
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
