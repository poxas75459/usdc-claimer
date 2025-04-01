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
    "674uqnaZprwA5mDtjMnQGZKD9n6aiuW3UYSF5miFY4AqG7UHvZDRjhsfACAtQQHLGb5LyFY1zo1LDysCRtjZd5CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqFZp9UM8wFQVHV95yX5JtsZf6iFwLkhTYbeGqCu69Dxm86G4qMprWseTX3G4221MrtAZ8WieW2s6C6nZoPrmZz",
  "key1": "2TK3N3Lsx4ZKhsiWGsFbcqiWvrmS9f6QhaGKup8eTkh35yzB4AFdrYCum8dGdcFg3KkkHoGnsyfXj5CHpp6o3ska",
  "key2": "3bqqRpm3bcTdeYbbD8BXkNL7cVojFkG6iNNxBCjZ7XbeLbzS5vb4YEnv3dxudrWygGabBuv1wHCbVrh4cGa8H2hA",
  "key3": "62Q2o2yhKVYG3vLqD29hYctTuJJGrcri3RxA3tnD2dksfi72MADzDqsi77C6r69sVPc91W6iCwJEAB87fPXMhcfX",
  "key4": "41RjPRcBRWpd8kfFF1KPnuQ3q4e7MW5i6h99fBM5Eqyo1PPji484HTxemcGCZHY1ZCnk6LpoPamaJrc827AabZse",
  "key5": "2YJd9ATN9wwRKjN1NTEmDaCCuUTrCUcfqtCTQBGDVVwb7WMQPRq2hcvZzQxm24xAfuHtKyXep8yVn4NjDk38dCRb",
  "key6": "3drgoT5AaVbXHnxF5FLgaD5rjD46FGRUyWdTL5K9HNAtVk9iezxPPa7oqLbpmYjS3eSMRNECU6nS89xuPnPKzovj",
  "key7": "5TehHrdkgHmTkcPjJmiwCinDa2BKxxVd1A6dBvpEZRENgAirtgrwU7C6RWZAHsjXDtxF1wev6mkPVDrYfVW3EN2t",
  "key8": "4b7qG7rB1im1zhH423mwfjxPzYJpiZvi8TJWu5kSZqVRhT6RZzyxLxH8BdzGLD1H5Ef5wuJtF4CgBLX9e5h7Gtme",
  "key9": "4j9Pkv4SHMfd8pPKatMzwbxkBJJoN7346zE6FLwkh6KZXa77TKWTxEaaEWwjSXNro4FmMqF4pWacAMK3ESjnYzYb",
  "key10": "3WMgJkVUy11RZdUxe7TaufB3tBrardcnU2KjwcQWs3y251KyNwkHNHDDhJmQCGfcuz9BatPH4jSKhm1bbhwtkjDQ",
  "key11": "4NwE5tG9qv57Ry1Mj26vtNiJHpdKyytgw9x9v6yvbFw64zppQn7qEHZv399ZkGGTNcktkEA8gqfHQHefkkavJrL2",
  "key12": "4cSXGUQPzEpAzkP3iUXtzTS8cnVSz914QYstb7qT1JH1Zf1BuqWPAE3qjXWzJU3jCqfE3gE4nSvH1wsyiZKmfabZ",
  "key13": "3kEbgtmCKH4XnuN5xUxbH3P7wQQFhgxGtbbbb9FY8LUvun1JyPJ8o3Q2np3gVC4yCs7GPaAKq77zba1BK7n2qixn",
  "key14": "59HX9CXjQWJZD3YGgmeNZuzctA1zEHnNaackqQXFWf4fzarnNwe77DLWUu4p85sVbjCNRFKVgj8bVdhvJ4NBgy3f",
  "key15": "4vueaUkDpBK3EtgnvK5qHWbJHr8AduFeJ5XypEwBSt9xgcrpLSsqhzPs3xikkHuLbYYj3jwj7B9b7heEJNj1XCs6",
  "key16": "2qx4h9yR51cjGdVDUdbqCHp5shdia3MtFJGsdBYP8oFszSP6da7pDMAGdWK73m3kX3QqPQjJu64jeciB99EjCm3q",
  "key17": "26UnRhxeARQNxqPrLvH1FgNUhbCncRCsiwqrs8uTyyA6gtzXbJRpTNfSn6gfXbcVzf73BjD2wtQHAKqXoq99PNAa",
  "key18": "3g3gCKQwAfvkcnCpeEpWjX1a6vDxdTkVTKji6PK6orwYqq5ejVAmf2GfpiLYdPsx2EpsfLdyuEV9A59MRjQZzyE2",
  "key19": "26jnurgJo69uUC3rxrsxCRiYcvs1gjdEiBvU4iHSknYS2hYquF48phWfLzNj1Q2Hvu3Qr2v4vvswL2Ghi6ifB93M",
  "key20": "7jXQ1Lwuc69sgETXYEdb4UyaJrWCsoj2Ss1AhJee4fif1nPpod2JptbjzZ4BhDvxGooHTe5t23kwwqr4bkr1Q8Y",
  "key21": "5QFpbk41PwTMjZHmF7AoZUkYfui4bVeRUBPNMKYswkxZYPmw41RPB8me3kiUSTFiHqhw97mnemHYK8sYAznbQXPy",
  "key22": "B2vB4yJWJDYHjVYP7HbfCKamB3Csx4fMobm7qpWTYG6bigyGdTiFHTwT3h42UhhqMw1Dw2bKG88jhpmgVd1ALvB",
  "key23": "4bKtXgE3yTWeEpCrf1bx5hChQ45EQUKzMQneMf4RQtcGX3PVtpfqUK7JTqUsqvrpA6wqw2e2VzNLAE16Q3Fga31u",
  "key24": "DKBDScosPEH4yEzKE5js7uNz2qvKckXTd39peGEgsn7647cFzn3RdNJAzJ6YkQGhi52dZdUNFqy9WpGSBUKGoib",
  "key25": "3sz4JeqG6U8dVC5FovemH5tZdPXeih68pKL3tcSkoGVCiFa7vVrWTWA6tsyhonLGDB1FVxQtyyzE8przFKGqkRxc",
  "key26": "Wj3VWn5jxLXiRifHKjFnzT5Y8G3PqY53yWgumu2Pbt4F7hGMyb2FZQKfgAuDwuJGvcupYcckH5o7TyPwhkDrr1x",
  "key27": "2JCfhvkEqQv7C656AH9Dkbo9ELypjG5XJh928eHN6q6UV5AoY4ehbc4iJVBAwYz2QLzyPtdPWv7oqjG2AZXMviYQ",
  "key28": "2nrAcPAhcq3TA4erDCtnXcGKHGpPmvzNu6n1hJZPgHBcDCugQFGrHNAbDKbrYSnyRoQgt5jvsZ5RoXrjabtPwMMz",
  "key29": "38oxHLAzb6dxCxi3cAgC7TJ7pXHEU2oES6RDBqWM6u19Pj9QK7hxBYjPJivabkpR2HJPie9koRWY6JWWRT2j4f7h"
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
