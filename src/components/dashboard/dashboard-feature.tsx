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
    "3HVhRXbx9gUVUnVrQFL1kL6T2ccf4duQrGoSpfBb1MdtTQr9daiB74fBRTWsCLLaNLHisKefNxVFEYpt3SthKAeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XzapVMr5uQ19EUWeQjE8j6CBsMapDcstf5GtwtTmXmxea8pqBkPHDfiHyFxKpnexmZ3GfY8MiTjZc5M63AoPR3L",
  "key1": "cgbjb5XFvLm41SAAN16nkS5NqQX3pvtCq6DPb5bF39kfsuBt2PqPbecayUDXeuzZcZppnpANoJ64RcF4DejeWhG",
  "key2": "5EQsnmZzWMeb2xKSEJmB9bnLmgQP1AFpHExPuJp7cxjXs3TjCZRFDvtsP6X7hwvDxJM6hgK3ktDNTt1cD9ZAJLYw",
  "key3": "3wtBXFGHVAviiigVJ6VLctQS3eU9hYUe9acB4Gd9eq7Rwo9cF1nRao2ouSiZSPMA7pNTxoQSk1AKKVuNRFXudYBb",
  "key4": "4G8EWaCCUH729K5dTB2RHtAHUr88GfmxYuPzwyApJuNCKGkfQ8fTVn89sMLQkuqDxh474WTDCXVn52ipPNnpnu83",
  "key5": "35QuPhrfEtpSMGkUS4axJRiffjDtD6u3TSB3em6H8irckvFi2BpabrNYvmTFmThqovKhuMPj4wmMwJHAAX4DJxeo",
  "key6": "qkadXx7qsW9Yf86B2Z4Z1WmxfCPH6hQZ1p3ARaXiY4MAVcEcSUf6NDU12fz3uZAPAzvpdfRJcG7hpyYXrLnr4r9",
  "key7": "2JJUHjdTC64oqQRdLcBmDALPYHpF5TUU9FNHgdgoeTje7zFG7G6DPe6XHk2pqc7kHFUNaWJo8PRBKQZQbTJotTSK",
  "key8": "3hREAkvRWBy1wgGup5BCrSmXFRHh4YKPQnDQ2ejPrK899BBhcUZXHK1DH3jSJvwgujCRN9fdLc7tVNMVjnGnfFSF",
  "key9": "62e185Xr55C2EjchLx1S4m7sD1QmeATnLfbWRyABDRbK9pgzZAZqxoh7Posh5mHViJ6MtJJy8mNA2Uzb8nrG8mja",
  "key10": "9bjFPVfQjN3vQrDhFDcH5DfFH5NDqwHB1wytabhw8vLtsgWe8CmSWVsU1YRHKMvKgBsMgtPWre5yTQY3TT4Th5G",
  "key11": "23MabTJcdaBugMpCSYeYz4Ziv2z9me3MwpQb7uKqHdQ4NqpjhfhHVGd2dGZR55TLyPQBtgC996dYmFZvNu6Eqa7F",
  "key12": "3V1RVF1ap2y2Ah9Jzo9bwZVTpQugpCnJZ4Jo5LDEGbRKAXD7yawr28sLFkTMWhw5cTgtnChHmzwLZG7Tv79oy2gg",
  "key13": "7iXwQwqLY1tQGuYgN1vmfnQUothSPt1JwxGTGKUCuKByVRyx16htjaQdmsMEkoQooGinggCTg4iAEekSsQjyRAk",
  "key14": "3V2vfyCXvK64b4637RwprS2rLWiKUVQvSVPGrKUHDUmurwACGs291PVRoUJ8EApYTh1TmgQmK5vfW6Z1UHAxaBBM",
  "key15": "4zUiQjheiq9azdYsemBnzWvGw8xxS7UPzTXn9wJ1LJwKVxX9GKqfhdPUgii2YcK1bopFGbMNsXsJoPD4XrUJvSoB",
  "key16": "23p3eqUj2bDs7sdhqRznjVUZiZrYjozJHAyGVoMvMkV9JztH1rgsLPzpTEGb1DsCFQiYQBnM6M1jvuD24fv6PemN",
  "key17": "5DdRS9SotyiHa89bg7CCQhUd3BTTed62q5oSoBL3JqbvN7Yz29FW3RarRqU3ruivGrDMXLb5gv6LTCMQaPYebLs7",
  "key18": "5YTATT7Hqkb1BLvanTQS1DM4WEmdoD7rTkQkXd8QtyxjVTPRgwViJGDXq2ZhA2Gz9VQMKpwuuEDJa6BXhHUYo4Rt",
  "key19": "4vibX6mRaS3AaDxxJr4qbGEfHXzypm2cmgvby8dXeTJkEBna5wmPAKHtpF8x3ibNzg7mTzZXw3ZsQRZCoQtiPCqT",
  "key20": "DmQg1SP2AetgSQJupdFt6pVriDeNoQW3vALKVVA1iXW6KEo8Mg9N6mXKYSizJ1Gu4rF4gDSaKULX9mJNc7pRdi7",
  "key21": "CrwyjGv6CigGaYW8sDQi8HpjAtiqaEFe84exi7QGkVia4XQYhfrgFNCe5iMQxZE1sJBZpnt3GU1CdETsx6dqahs",
  "key22": "65wmbxJzUo92aRz8RTa1v93DHh4QZkUxRkwasvMhrFnXCaDyMJH9eRU6EEdxECk4CwzESLkKyQe9L8J1oWrN9y5i",
  "key23": "5NQNxy5LtrUPBD5c4NMNsJSr3DUSvKEaersTj9PxcYCJncH16vLJikYxwmwAZ96FrmnRsDjcpQfDhKemgraocj8u",
  "key24": "GNPvxNerKTkQdYXjDtncTvFMoDHTNh6jXwzQxLhRYJe5wdV3Ft68sBFmQGhEikZG1sFpKHv3ytUvvQuSzra4xGL",
  "key25": "3dzwEtsv2Z1htoHzbyZXDvgb11yB7KUt2nUbQkkQhJtTrULGV5ynqXfbktEFQnaRFDXKSqUihW1gZsehpwjq469V",
  "key26": "3WeVmK35HVgekguxR7hqmmjDxGFSkvib5DANK4NU62w8nL2NdJK4yCshj1reHqSsrHV93Ux7VhTHnpaQtcvk4AkM"
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
