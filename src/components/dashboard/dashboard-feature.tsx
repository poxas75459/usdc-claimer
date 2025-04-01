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
    "Fg7oHvQsoax6HhvYSWzmW5NGsxXH48Crykd9VhvrntRP98q3bp5RNfWMhe1yJ6PbY5mJVTNSygmwXDdwgoNRzPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ax92ypKgnSre8Yb9dWfedTnFcUEYd83Hyq7Gf1Zbn36eY8tzuftHQLB1eusxUxx1id95CTd17XSRpiRYxdb3MyW",
  "key1": "4Y3zYvAuHek6WmxcmrUPzCgazh4NJUYY79Gp8JuWj8xCWnFCEWCLfLbzxAau6jwEFo44iNg2CNSYNJAy1SLsV5se",
  "key2": "2Uv9a79AUPJUpjcxZgE4uZyU1sC1iC6dPyLD884Ga1SyJmajPHwKaGGW3y7CnfoQQYpVMXdGotVE41weXswJtHsz",
  "key3": "3sjfkdCBitBQ4yDerSynG5wCNzzuN46UjV2EsGktt3C7i1czuAaUK5J4UTzDvbFgPmjZR3786qGZgbLr86xybsef",
  "key4": "2sfjv7YBefxBErpomPH8CeSi976fDUDz3GHs29ppxS75jZ2dfspd3XFYV6JVeSXXN4QqxZrZQehk9SWvZQcGKWq2",
  "key5": "5ospfE8ZmRpkK4KVifTaaWf8MjTsNaNRrxzvWkatZsjx2RyFq5EE8aBCDkaov6s46N7uNbvMJYvgjvBh3RxoFLwC",
  "key6": "4bEHLSbYSBGXT2S7cCX7akzRmsozmXyX6wHJRYYh9DvaGzBpQfNZn7AB9Tq2aQWCJZS8iHFUUhtYq4sTGZ3nuAPt",
  "key7": "u1WPAwNruvbb6wFx1yNchgFkqHe1LQXUXu4HoiPwu3DQ4TSQykS81MmVHMZQR38szEsrEhjL8hXFU8zTmRhm1r5",
  "key8": "4wPu9KKq6aFakm5fCN6c6wwnLWNjdBLpaxLGeKgfkNEZ2vPVfeE7vFQfh5q7TBrV6sEUogE7kgF7gST3momvZsaZ",
  "key9": "5aE2zodhBXxpwi1jN5ydfhS5GGtf8gnGqZynN8R3aRumvgo6HwZiEQHcu6gU4ZsC7fnBRUiWAU72c9jiwi39FCCC",
  "key10": "5MxQZd9N5kFTpcpPRTL9suXqduVufrn3Qoiq3CcQEvCWnZpKEu4sQWrz5fiLR4N9xHTUfrNGHp8Fx5ikwPdCxv1g",
  "key11": "63t73AxqcRi7jqkSuappX5Ee5faSR92SSFwPREXv5KSSGsAxDzLd7jf5WDxCDG9TvGQgLsLH1WByPdQZVz15Ziwz",
  "key12": "5TbnDLagmmmkmXbm6sNta8gYdP54FYY14K9LMcbGvJebCvxHryg4SFeXSVn67ZahwUoBSZCmXhZGHgqLcHCjXXpr",
  "key13": "3xFTR2t4rknFBRhLc9xs8vyw26yKQMCJTehFVs7bzqxBvUxqhzMxD1Gi1ERrQQV96v9sX6bW9xWiozPfcV1YsbJW",
  "key14": "21ap62xmKS7JjNATkwsQ7SgsRbAHzbmHvckVXPH82eqw27SKPx4n4DP5HGPE9Y6JNWS4oBntsPtUJoMkoDS86Rk5",
  "key15": "2tPTN75t6M6Cgw1q667wHjFRfPWASs3BoZ9vr4QbfYjc4MbmqxbxvGYvmpX6NDp9XpDNLtCifBCr4hNWSDHjF4H5",
  "key16": "2e7ahAvAp9htJGWkJgaoUZha22M5hYSU8YFBLEFP4QXNHFf7rxQhwfUxJTvEBbH1B14YM2c4hQdXu1Q9NfhcJc2n",
  "key17": "MeJpmRktH16Erq5epPLDFxZSn64PXtjHmzC2Z7Gz9ydPjSPnRUBGoAaAS4EX47esTtLjWVK8F63jzLXFkTA5HUj",
  "key18": "AGL1ruxQFgn8SMHwxVWy6ZNkhbYHHU3AdZhWr5zAxgLKryNAyid1JdWtXaZGkTYsdbXX9zmnDEGxbvarxCYZTUz",
  "key19": "5oBKJaLyBmAWN5SEVMM2UbQucgcUK9xQonMfZNnpP5vawo3uPUogVHas1tVkKoPQg6RafYnR32Bgco7gwGQAQgKK",
  "key20": "4Xe5Xhph7KRqpH2oCgLYGEaMxQtsH4UQc17sFRfike45iG61BAdvgmiGYwy6f395kCQmUtSQfGSiwhG2iktdfcP6",
  "key21": "2QYb2sn1Ri3b13KK9pLkpTcm6dhC7bNKwtXDuRRyBGzYp19huKKFEgZqJPjJRKakng82z18SNUAyUAAro62Y71BQ",
  "key22": "4vSgNC2Zmr4QX9dMsRkUoqHUss9Z156PofDy3JvoeuYCbdFE2kF6GGcXqhLUQrF2QrBZ2DFgKJPLKbPuaVE5t8ky",
  "key23": "515fSYHCUXdQfCcRgtjajSchHPFDito9ZAC5yuemSJGkTR92R2kWpJ77eMFZkanVUHgb51gNcBRdMSbgFBJPsE5E",
  "key24": "nZNSrkCi7Tgpj9DoZZwWPw9f2zaZeY6dngmvXpCYYB1A95nvD1woGSybMM7Pvt1i5AhztFKPBYqedWibiuBzXCE",
  "key25": "3jjZbPUjSGfgKLcQro8mHfnEvGvtqBy1ZoYXomTxVMcmm7jCDtBBrHw3NRMm49NrStZHeBheweFbWXS7ktEUm9Bz",
  "key26": "u5bdSJ6MMWC8eJoBw5sUzjTizxc8pcggFdCZxRs1QP6be4jBvNiQjDbKB9cLN7WZ5Yqj8ZMAC9tNjzKVcK7tFdY",
  "key27": "3ck7MJphNsUdQu3SkkruXsHkuJj7en5sb3xHWFy18Sj2GCvKirK5zxTZNG3AbRkJF88GpTauej38zHWagzTHoYpe",
  "key28": "4JvsRwpxkNbYYr2Ro4BfGzX5Ru58PSuyygGvmDoKwRXHYbF9Q1TRn4ZwmayjwrcAoPDrZfHAZPW1Z51kC2Cf7f2b",
  "key29": "5AeD3brwsMSzn43bE53D6oVCLqKqxmtpAEaK7S9M5eoCXRMn4YLZc8tWhkmShj8pCL6gm2y7JF3hEdXSxTUo4q2c",
  "key30": "331o3wDhTZejhSgDm9fNrxZ7dcbiGhGadCVDkpvXpfLvZ2tHmmsMpu4qdz6njq9rpbrovvArrpamd37T8M83R9ER",
  "key31": "4vL1QYPv6An8C8D4ysBupwSYJT1Jnc7xhNRfhPKc8TPaK671xaADfnQurXtFm2wn3v7emYFXbbPYvf6YCjb5ntGd",
  "key32": "2jUSUsGTsYcCMWjtiAEcQwi4fuuqoqasjuXRenUjnJsks6XFjSN8FaHbFt7gh1Jfg5YKpsbBnHqqr8vSyK8vRFeP"
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
