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
    "2NJf8guyCfWsHdvK5PNB5AGhtHj4iY4mC5qqSbVxi9uNu8WpPvpxA8zfneMCgY2ByM3UsE2yB67mKJEQmYKEe1dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rwq2UnHVfQZ2E6ZRhf8M6UBregERSu5sTdY7m3XVzf4PSrWL8bE32UbiUNVNZ3ohYtcV7DzQRc652cUcNRcXUVG",
  "key1": "DCB35GQMQFaeeyPDuraPvpesrdXyhbsNw5e3ba62E4aMKbVa6orc8DrdzhsSbSjpMFWSqfbJryNokVUU6b5zo8Z",
  "key2": "4mXKExBWwAnaxyGT5dJ292hVz9iuacWe1ZBfNdcYdPLmLhPnQN21xmS1dT2eVwpotYPiy3BWDxm8bWGxhLMspx8U",
  "key3": "65oGQBb8WakFUQAHytSVGTA2aQocXywDuk5JT5XVjHNwVtR5HkRYh1EAWu3BZiv93hZijxaNRxy62AuCnXxCKzSz",
  "key4": "2RjtWusCZLzUYUgFg1e6oKDx85k8vBCU4xVsx5c8yHZWXz5758DV6ZoTCr21Mcd9jYwWsHPqduuwELDsFpT9U688",
  "key5": "eGAKUA8N2ogLEK1qy1FBuG6FtBPtN9PkTDqyFwdAFbeRhn8MTb4idnGW52mb1juQDh1SaAMoF5wdgWG7ecoy87j",
  "key6": "baEu5SZjXuZQcuos2AbmXjWGjTJLAAaJRVW9eFo63ca3nrPZX6sksvSkCKBwhcYCgxC8eC7WprcxEEpUe2zkLHj",
  "key7": "4gP9QJPrne5X9uXiq6i4hwqQmEAejDoocbLaBf9HVuwZKTDdcKGp8MDLUqUf3CDX63H9gbh5G9UkdZhmHkqY6Sv7",
  "key8": "2DJfKWvBhPdSPZiF2SLPMfCS9BpjMzhEs1iGw6rEPhxdv7jGsTr7BFfnvEZGeLVoDTr8SVVkzen8aZneNbVJGCry",
  "key9": "j8WrcQ2fBeTruUGhdJwDKDsW8Yjj8XL2ZnTudo4Pnb9ULiC16GRtSd4o5HXYCnYrLyr5t2n6sdkXRYpdFbLMbP5",
  "key10": "2n339dVHSq8uTLMtk6o5hMM3RhHYXav4cd1vcUjCp3HoUzN399U7MQXx5Ztwfzh3kxWHQTxxpFY4rVoLV2ZU8nsJ",
  "key11": "WujAuj8WhMuVQfe9gn2Gu8uZsvNHRrumE2G5TXdHntCC1hEygxeD3nifegr6oeGCR5qw6cmzXdamqzZPS7xAKVR",
  "key12": "3XQ6rmF96B7kxTKroZ42BmL92tW86JK1zw8pD2q3RToXhnyBH1qor8uJaqnKwWimQpLoYZmuyjjFULhcY1zPYnNd",
  "key13": "5Fi4pyjfBCMdjPufSRuKPhdCF9B1RY8wSXZzhcUV4zqLE7xQd7bRBLMCB3E5RToMT1mJr8jWDc73niS4CP2771t",
  "key14": "VDWvLQa6fovP6QCCP2khSHwNk8CMcqjGrWjiLciPkf1KjtRNBeYWBFEHYB34TCpBARQcFfP254mgbPzw4aaXeUd",
  "key15": "4n1k6NiYgy33dUxdWTqvV7mtNVo3hMhPLnaYxpLsGiSez95R2m6B579q6y8c1RUYbXpyb48YRUrYBEqZYisaXYY4",
  "key16": "5zLdBxnBCG6b7b593CMKhLsPYStaKjyoXSmoaxyvYgdQPcqziUpXriQ3WLCPrqf3tgtdMiWkEgLCgdxSRB3Z48FV",
  "key17": "iG5r9Ntho2tfas7HVHwZKGmXm43hbMytquHepYPAqVSmknACHeCpc92b7D6JS2VNrDxMas5h4t7P3rNLUYe5Qp5",
  "key18": "44k2hVD6mtXamL5RpSP5YCPqfb5dDn4JXZJv4BH5JsKy5T6GCAdJtCvorKq75tUvLXTiNKE29sHowywP7D3psFC1",
  "key19": "yVy4VJcT5Kt7YtKt72wgtEsrK9cmHXqbgV5opjMTC9PLPnU5EiavFVXBgxcP53TTMfRvG8XneiVxMngjaTVoBVz",
  "key20": "3zRNrKZBZHBcUM51MAQxT2JysZ7SV3ayJyAcZb1ovhMyk6rJgNGVvAraKNuXCcCQNyN8RoihyDy53GHW1BMtL5Uu",
  "key21": "25vRTnrTxnJwWMY2UV62gdjwvM1haXzs8xgustU8Xz3Kjv3zWVwirK2pKeSHMygyDJ8QL2CkPdNsg58eyeRkf6E1",
  "key22": "3txvYiBsQLKUaJZATLg1aYxdmMKn33dFvEkY4qFLpMFE5mhVDgND2wDBzxkVuEEi6UsUcb9WncVSvHxkx55oYSaF",
  "key23": "4Z2DNvTSfPvi43uTKyM5ce8o9wLNXZJ3xzSx4zKAfUrdFBNzqKcj1g8qxab5oz9F23GEVa9sgL5WcfwSP7EJY3rw",
  "key24": "4WFisuqgb1uQoZbRu1qf3gJgnirQsjRu7zs7ceybybk71jTy2j3D6UjELPbfbyDgaCDjuXMoSB2VKcjznD6Uc7rP",
  "key25": "6VekG5sikQVt7wJu5MQReQp92CdfQvkUnku1a3oRsZKxFXGJAuDtBwVu4jSK3H6d8jEJf683DZkZjHHPdD6Tepg",
  "key26": "47hM7ihWftoa1SG4btmZDrQaUgdiWMZMmpbSYPzfvgK2sdpA9vzosDXJPHDSYgjDowYyKRBaB1CiMs4TDZ57BZcc",
  "key27": "3NQvMUxA9zKgWajiUXTSys4GxcXyrZikmUJZFiaN7LsLFG65BR6YYWtJ7bYidLnD74Agwpxrt8pyU4u1DQtKW7Ym",
  "key28": "22b93N4bkAEdjtiYvX4D3q4qJLazZR7ic3wwRKZGj7u8ZCnr3JtqSWZWiCfNDZXSENfVbRfqhPaAXcKsyeqq1V6y",
  "key29": "2WuCPhFGwMrnRTFdBCjaGoeNojcTUAJf6r1cj2UVsCfrpSx8k6VqpmR5C2ZpqUJdbT4d4VQE6uyAqdLnSNwn4mAT",
  "key30": "3uJtrBxtomZuxEdavM8W5M1bZwCGWvbq5LTkNYtbPxUKeK1SWmfRnhMF4iKSCot3BQtAeKVjha5TLo6uwzsnSJVD",
  "key31": "4LJkySgoMcn8XHDX97j9UtZAMua2Yxhoa7MjxeLzZoRMXAePMv9QWcpjphwt8DTPYAEHp399vuaMKaMHoWmAfx8w"
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
