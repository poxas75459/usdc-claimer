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
    "aPt3kuxZNPn4js51warHS3RJLyk71sgSGH4CRbWCqLq21h7M6D5gjmLZvFuMtFhRMKk6s9F5NXEmgShDgVcs9Uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XvWozPUM4R7n7uLHixTgFjRDx9jk244DCMxWhjGQpchbJRwmUen4N9mVbzBcdmM9NwkBQcfeEXSw2okxDSQtXEW",
  "key1": "2AbUGUrcf5wyLJJsWKWC5GUyPAg7Ejpzh3icGK4VaND5GN2t7UKvTnyidG74k93qt7WvY1Swa5FvjXN4iSJXGB5i",
  "key2": "4h8MvcppeNY5zUD5kMR9jNhYDsGzfTkoq81ejoNFJQNb41hYJKUqZPxDCL3Cos3NCrxewTWHXtyH3ZgmgQiV9vbG",
  "key3": "29hpystRjhzqs9CHp8xvYG7FWHowzSe2dF76Z3aEW7yDNg7BVNATQuRySMHq69XXDASW6waqskX4pUx1MRmxoxoX",
  "key4": "4BZdTGPvEmfcGo8cwxM16FQU5PsmKXw7iV2PdL4wQHoGdQ1VxjE92R7AmgR1FhbYCTgbsWdHmPNUY2p9uqR2B674",
  "key5": "RBSLaQETghMRhUggAiXNGbKhpXPB5ZUG8BAUg9BLCuBqdVHAMtG4st9K8MCeYHtCmEzbJdXwrZdUvigQnVWHxjE",
  "key6": "5ZQYRRnwF4m6VQgczg8TUk8xyUj1ZQd3hjvfofTEMbawtxzsu6A74RfnNaKDQAtjLYMR6UVpKoprrG69QBY24b2x",
  "key7": "3koZunj15SesxnpgAvJRGDpX5jnKviuEDX5fy5WzhKPkbJgAiwmSkbLiw1mFhRCMNyaab3BXmJS9xAymi128JWsW",
  "key8": "2tXwC5yEYt4wkGRwPLB8e1cg51Ps2N1Kq8Cq35V5mSNdMGioTuBgvL5i6P9FF9snDAZSAysb8yEJXaPE5f9dPWRq",
  "key9": "49XfNteW45y4ngGs9mt9yyhPhr3EHjvZJumn3g33Wxna2nMknTntHaVNtUGB8iTjV9YVRkjfUg3CY63DT3Le3ixF",
  "key10": "5CXauWGefKZ7LjjVp4kvxXfLNT6QdPDfwvBU4ggkPrDbr3xiRnTPFSBxRw9EPmNdAVuqkKE1PGDQQaDuzNUE6rmo",
  "key11": "5Q4skjcAqKDDFUGDfkjEwiXirq8Vs7asuZSyagsLjUpCfoTtMqDKsyb9ShpsgWpRsvpNd7JQjzjUHbbbZymmyAK2",
  "key12": "3GE5ZEkiMf9RPAeNY5Zqwugz2McrQhmqkUq9yKFpLfaSKm57RUKUS5aLyMKXG7DsxaZ7SURKA9BzzCf8VHvS56du",
  "key13": "3veTBeyRyKbmdDVXep3TYCJ3WcGgosUrPTXxhQDSXFXAJCKWT38whsQqQtGcZLi3xHkJBeraaxyfnMMAZ3NQDryq",
  "key14": "4dpHuaTGrZh19oFYQYLRqzYC1HNuQnT4dXfqzYKEyPDKyowdCg161y9YXnwWUM4JVJn2s8cYQFq2pJw5ts3bCzMm",
  "key15": "5n8sbw4nRNBB3bPRb4jUm759gofXLG7ymrh63pmUAcxSSzZx3GsR8e7tTcaTYwH24uTQVEEVC8v6g4dnrXpFki8c",
  "key16": "4sU1tRT9UyZk61TCUNKinE9nmUHahbcPEQfPmcJFF9FqsBkEJcGjVXCLTqNfLHPPf4nz5vWXBJoLYoJL4H5xquGd",
  "key17": "3JtF3kK95VTSzw3NLineMeFWcPvQbrhpkwQ41Zd5ZV9MdusKYG8wzkFtZP9TN8vmJGwEH75FJrvz4KL1EN8BEiQJ",
  "key18": "9KCFtFvYqr7uinFEj2rwSTFejYHFzADSgU6T2SwzMXZohjrpntSb6AaLNoexQWogvc1aGYt7ADyZi8kjRYTH6aB",
  "key19": "4uuhMwYx9bAnUA53foPJXYkxozK2mLuAnKyEomSrCpRscJqbz5KmLdXkZLFYKj4wA6DAMtden1NuTy4WsXKwrK74",
  "key20": "55iBtmNeXGUhtqdRtqedpZAaBLSw9K11aXph4JFQRmsH4My2nU2Wf48V6S6g4TVRKLshw4Je8e5PPZxDqCiPiiRn",
  "key21": "sMCYauYFewRpZvBaGQBXy5r88HUmgNwodJS5ELEBPKEu8C7oZnq9sMhdNmfjjB7C46S3ks81HQ4Z9txGuvxqXBf",
  "key22": "5ksJ2yv6stmaFuuyaiBQbG6PHSkh6yxNPqC7z3NdG2nAfjUjheF3WGpBuUTc75T1MXzhmwidPcH9LCefpVWCvFRL",
  "key23": "4sW8jCzZXBhF4nNjTPFBkTvPeTsusgjKSn9DxNeNY2kk1Y5xDRVXCvHz5QSJjwpgLBhQUq6tN6zpnsd9ojbaWHVr",
  "key24": "5Watr1FhbuxWkPcY6djtNCYLm4MvL5X6XbCZvE3RBxNpSZVawVr9CoomzsVGTk7zCVApuMTHkUMyFjdgP2Hmct3p"
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
