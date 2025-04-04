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
    "ADj8k7PUkUAW43JDMoi7WeNCSpJ2m5bRQtNUaULbcfwqhh9miA1QsqekVXvVtvXQtfcfetz7WiSGeczg5LVaASL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4ZvCEKf4tApC8FA1yoib7TLdNGt7dFRt7SJgfKaPSSCrRd4L7g2gYuxNPhbA13VZN4sx1RavgkCnydrBZWKMv8",
  "key1": "4XyzfRacBC2sJqnbYLpTNjUghEVU6aRwUTYqxRU6srGq9k7DNx4xAztvhNExqo9v2UMMhwE5Byag1ShKfPaJCd63",
  "key2": "KTYRwG59KTtkRo2P72DfGVRHUm9ATAEY4ND1GgsNTifgJFRSc2mDX9S3TJVSAsBFsiHS6e5M6PqLAE66FJu3RjU",
  "key3": "3wJAwsswq5nf2YZhceC2396tESeJjD2ZAM4C2L6NLZRfegPvBxHswPqYWZqinWydgJS6sbxqUEHR2PHW1D71tVHS",
  "key4": "2MmeezXeAauw3SJMSrk4zEtLMMZEkNMMvASEVNc3Sc3MnQwqi7CbLjHxB4D17Xtprsnwn6qCmZrnAjXQuz8c1eNK",
  "key5": "1r6EG4gZgJMWLmg6PAMEsVwWiHfNS8fYgjiomDPgeDyf6fYgZmQ153orRvhRPfVzeT8mvQ5AJHwnrqotVZUTgJS",
  "key6": "DHm8hAE7Y5bY7GnfVmNMad34iB63Gq5rPK4MumrL4quJ8T9rvUiefrgXqExGyhVWgRocHRMFpTERrQvM7o6eKi7",
  "key7": "3erExHMtfGwgmZR6CyK4XNfUkcoTaw6eqJwMfd5BX4QcPqWwSSFxmW8J8XvqNdq3B1FS6whCCQ5a3M7bLXSm3mRH",
  "key8": "3SqLy21LoGp38phMcPxEKcwo928c9zdB8bedBFYXxD2ErpVGWsqyUAXUsaTrb4xrZhyWi38KNzdv988NZ4Rom9ew",
  "key9": "3GrYPseJiQgzep89VCLXFZV9yPLChQqFPQPLeJYPcPqPv8txoKSX9T21KroRLt1X8xE1kCidnnWcAiTMhFmnwefv",
  "key10": "4H9FwPMkiW2NmVV11iCuEmfD4wfXBGjHD6ptG9zxQSWbXDCdQN6wMBgstL1JBR2JPnvz5vQHaRPhPkqZyimzHDMi",
  "key11": "2LiMV9q3Mtj39uQnEm7Rn4F2QDkmcxVQZFVyMAxYbypc8HDBQMC2xR6phauyhAwRGHk1VKh7iCWYiEvWNjiiH1iX",
  "key12": "4zW6PnzYGuPLFEo4QueiVRe4JFmEuENhVuDF4Tsw3J2m25wcsLSmM7SCt9MNZcTYUv8VFB9rUvqNo9F7RfJidWXE",
  "key13": "3gc6ZNCwv9A5paP9CKv64Z5rytSFxb3gzTHVbVXf9ykvB71zvNNfukomWsMgVZUeXiHeuqdRVXzk7nW4NkTWCLEm",
  "key14": "3NJXB3VsNM3uMsrt8nRUAbdEpi47yDLrurGdNzojCj2oqPKCYWPDEdfR6rCXZdAkT4YBhHLi1G876vAwJ1qPDR59",
  "key15": "2miB2wkeA88UgT7qqcC9Eq7uFYCWL2hAxr5UyPnC2cGgmUmeVVx7AH4YM6TYKmhwK2p7DdCevX6d7boApnAH1N3Q",
  "key16": "5nin2dg4KSuRvATw4f2ibgG4EgXchs3fVKm9CMifxNu7HypgZCxExwW5BJYSAUKDrVaLmPurRY2jTBeXN7gWqmvU",
  "key17": "4pQ9tvBehskc7X4G4SWc1Smnnr7qb4mADoSYMLVCZePKavPs5qpUUW8BBL2wsjDbgJ1LUYbVjwYv9m1YPPC7Ppyh",
  "key18": "3GJ4my8WZN7pN52JwWVPpFCJMrPezQJFkditH17UeAd45YQAiCi7xDtc6Dk6oHewFsLcH3uuEYmWGmweJ3f8pGm",
  "key19": "22GzWBtz1j14RxtseMe8y9LA5bYRzeyaAQftnra4X5Ch9Zs6wv3dbeF6uiWCCBjukRBiinhfdnT3EUhy68rv4Lx1",
  "key20": "39vY2JKEwL5BN3bLPZcuCxwCA475kERVGzRguciKVVJnsg5et3Gs2g5ZSNTiZjPYssEQ2tYcgTH1x68iHgpoN7ei",
  "key21": "4vgpbWk51LCBgxtbUEuiaGj6rHX9CuJJKg3dAGBqPM6xCwF4ZLLg2c4U7fSExswxAhR7jmRy6Rn3iRndd498pu2c",
  "key22": "CPoknCWCfVu2MHopN4uHspVF2b7wC6rLJKJ6oQmt1f5jiPySBLTXfpciCdGMhdEgNL881p4mdZWu797Ds59EeAd",
  "key23": "25AtmweHHwinKme3uJY2rBeKjgWCkHzHJ27vcJtjKeBHtRYiUCwivqYRHpt9WpbeyRM4e6saCFVFbH8EUCGrkMkv",
  "key24": "4LoKjcpQp1YXi9Dwu2WJFHrMWQ5jCZV4AQJeXcGxH263qt1zP6b9JAQQWC16YePw8BzpEeAiptsqovzAUFuNcpPG",
  "key25": "9qpLj5bgiUkv2yczZswpeyFvrttBUhMDXYjehQfBmwkBYJ3nxq8k38PhAMz1hw8zoSbs5J1RG8FJqZhoLtRTeUw",
  "key26": "5emBFDkfmozUAxcuPSWEeg6PbgkKe6uS4Avt7q2r9GfTuYuiXYfx3EifrUg9YjHrcgQxQNPzcauERVFxcXaWFsnC",
  "key27": "4WxEHsKHTqLF2uq4NvRq387BMZLbUbFsUfpZpsMBW4m9aRFpHYmSrABtjUmDpkvjCHnBDsv9aXSiTQm65AivVQfC",
  "key28": "21ToRnpNJN5naozczLm6tdYnY3ecc78EL9Pmtz3oHKMXBbkXa99kgdBrtEGFZN4S2kH3mZGTGx6LzqTafFB4Xn8o",
  "key29": "5KkyvDg5u7hp1WEvRVMJcts8t1DSRw8uL131tiUVUbEQLog3D9GFce2VQBKyyDriJhcpUurPeS3AAnDfpWL5dmkz",
  "key30": "4hse87mk8EAbPtn2G8SyhbgeQHAmbFVNY8arLV3afCyFKPCrRFNYWNM6SY24os66ayxSR4DXQhb95a328XRX5t34",
  "key31": "3Y67JXyRRfmVGXCCVJoZHRsJgVMo4UkNiqJtvzYo9GxaRCqB7PfwRZS3Dz4NkUF3JEND5YrhEvstv1gkfG1W292G",
  "key32": "5hzsnmAnSHuuXCAwa3Jec4CtkCJhExFs3qb87yXB6kNp9DEQK2Bev3A3tQKyEeyhxHq19s27yzfNTcybvhvi5P4b",
  "key33": "2WBCReXhAeGWWXRHwobrWZ8F6X8512qxbkVWjXkygJnvE4Zo16GDCYGtf5byXYrvSVV9GqM19nfHcVDTL1Lg91t9"
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
