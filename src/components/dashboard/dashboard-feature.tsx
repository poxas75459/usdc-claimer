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
    "2TLdGPXZYq6v3Rc1c7ezFcvRrDVz6oQQpkdZtWb1ZPC1JuapAK9paFLBLsbkoeYVatqAnfjBcaKfYCEeru2NsQ25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kjGRGYv6HfrkiaTpXpc2CZBiNTXwJocLntvwi22rNqdQyFR9cXSqLp6ehPsWdfwSBxMz8sofbQHYyuq24eWwWSB",
  "key1": "31ftQbWZZTA1cXPqETopHvBEUk2FmRVSzj9ZjKjGbE5FGov3jAny3gJn9eDeKufVtwK8hcqkaKwtepdPiafGzbB5",
  "key2": "3Hjv4CRERNDjAMGLPfzXnU9TVG2v1U4emP8TjtKWkFndxBvQfFXHKuTvoJPTywyb5w2JmH2fa5qAvLjteQniM55f",
  "key3": "5XjpB2VALGA4FjgdVf9nFMwFjN8cG3gYAjhZz3Wm2PY1JK78LRbuHgzSBRGMC84rDLj16pUYMPdFZNNrCskGq5aj",
  "key4": "j6d2ZVqMyUk6gfq945iLpeGFFfaYPxRVvxyHkFY9BsK9HeeUBfHasBCXYU6CEdozxUnjvHaDQAqh1Dokydk2JaW",
  "key5": "2eFfjwmPMn75kbSGiANmJL5WXCHcTdNGNp2KRiYFzf3nRoZReXF9CWTbtFpSsisUvCwLNTBtE4WZStVvgNBm4tFn",
  "key6": "63eU7ag58XcaLaABhcyEuCCaPH5SuuZXFHmTJGQparEPhYPpVuSyD5GgrJc244Y6wGE5mWCyoNNfUj4R4xLMyEat",
  "key7": "61DJ1fxvNAmMWtLQoRYarvnFKWGt3dwvtPpSPff5VYb6wV8DUckwnKB8g7BkGCpT1WbAYkJwGtJujZBpgP59nsx2",
  "key8": "5fe2JBQ8fjXYaStWDgDfuKpbms2Q3AsUc3SdArkGo1rCuRdHF6ZVgn2fD3cy8ghD2CqVUoBoXbLNq2bGXKczs9dd",
  "key9": "2wi7tCt5n6fHUgGiHxWDZ1ypp4G78QhpT83yA3NwGK6jSWKp37rgXRdpvQYu4dsfKaqDhjoS9PcwxBJsLHBSEctH",
  "key10": "4AFV6vECfYExiejyWStwtUg6BWczg8cXFrejMpYRREMuPAhV9ZU88hFeC6S742J4RsmMgdq9QZyNNhEuHm1MqAtx",
  "key11": "2JEksGZ9bMwca23r75NpPdd8YpqR3F6j2P1gtZgCaSpmVXXPLKg65MKAEPH6nJ6LSwSATN18cnDn6o8yMccZs1Cc",
  "key12": "51pmHaectFfbaPRxUHFVAEcDggdn6YZQnQAiaWcocTunD9fTx5WoFXFL8KDM7fqszXXiy1xspSs5uomhjGALBPvx",
  "key13": "34LfHM7nLux9E9vdAcm4GWTLkWty23qx48hfxTbmVmge21N1jzfG2F1BYFQbfEFLzywRj3jpCfgUYhViTTuJbkJ2",
  "key14": "5AfpqUmsAaZcAtA98DuDzHmP9JJNCnnrGMLw3oUcTg4Fkx4UFGSCmBHRqFEHjNBuF8ciA2E1KgByHgkYeCm6prn3",
  "key15": "57VbbeqmrfcDCpGHu26vhkQ7mhksSfo2kEF2SypzcKEQo3JHme4ypAJJj9sVJ7KHw6xKbVnduw5X8HSfbhtoMiMa",
  "key16": "2rXr7bRQHGMkmUXPeLba2zvUhRNH7ug7YzJgaNfPq4EWqSz7wnUbGXN1YcqDfpbo29GZDqCL1z9mJBb6Kh8zHf1y",
  "key17": "fRkZoveH76oKuUHpSQS9vYMNvPw2zap1NkxYtLEiwYawZA5v2refrQ7QnfU6wrRBH1L64F6SYv3fSz8tyHEeA5C",
  "key18": "56nUjNAr78xDoWKT6EfYFAdbhZNZGm9weby7JCZ1rGPSiCHFfuYy57xxq3rScqZp6dykopxiYi3tkUewtS9Bv43b",
  "key19": "gSd94WhtGtiiTPQkTHn2ngumKwfmXaUg7M9gwa5TSn32TfMkTB7dTUALGa8j5m18rhFWnTU5JynhRg4UPn7biZA",
  "key20": "61sXCAwXhEvEXerhryTgqBGES2F5ndfa2Wcvd9gAQzYS44gycxh9a8L4J4n9dTcDc98ys1QycvWG1UHrusnFmDMS",
  "key21": "2wbyokTYdEFuM9vn9Tx1khPAeiFoLkt2zgJjpbKXh8JTA9rJ6QFKkP3ocSDhTQCkqgEiuv6aHQ3CTVi4rAW7LjCe",
  "key22": "56oLmVMHcdE2sTD5XKbcKmNAn4Pn1Gd7Xz4ioeWrqVoju8R1wxFjWRJwqXDnoGjTYqsjteDRc7m2Nh4fgCR4ihQk",
  "key23": "5qaT8zfXBEXMiTUMsnTshCvuK5JjydioFSuZxdz8B6pQ3jf1V4stAs6vVkoZMQkmjXy3mkpHHPhMsRSrfxUHu8Er",
  "key24": "2fJpmw8k5HB4gEDmCNNgJWW9MuHZYPUgY2DgEzATiA5u4r5T5W625g31dTdy6dgv1Lwy5THcmF61cjTH6Y9BMY58",
  "key25": "4KhRJjPuTBnAn3fmyTat3P6PhfbZHKmKcCobXK1DKiq3yNUZsoyWEjUKCwocuBvfzhpW3dCZRDXjfKRTKMczuvd4",
  "key26": "5FwJeo5ApC7JzsRocfxajWeitZu3bsXTx5QWDmkbVg2Nt7WAid5XpxbvH3zhsAyK1GyyC95ftNhLMJg5yAnr88Ma",
  "key27": "3fQ2PGBikQfNNh1oGMT8c9EdeZ4dTTYYMiEotst8Mr6HDyJdkBQg7cC2SFQs6eWZ7vmegbjxdgHo8bNBXSM9PbZY",
  "key28": "3HPSj4S2Fa2yJKRtE888VUdQjTNw99E7n6McFDQ2RdTjQBcnGYGpNpr1jwxdBdUv21Um77jkEETYaj6uv2tc3VyV",
  "key29": "4QUjvAwyzvYiPkmWLP8pwmfFMtKMGwrzdF9bi1VgvPwNqTk6L6TBBkuvjNeLhdfCZdRVCEpTob1srcBhQRLf1dKp",
  "key30": "4o4qWvfNHJrPQv2YpwNaypNB6na5AxEx8mSpu6JqixyLz7YEShCztgaQQuMN6uy1BNXUHCny2UbxhiGooaAW9f38",
  "key31": "4NxhZKEV5CT7Nd1jC8mGdAuALsu2c1VURL8pHQWfNBeJ3Y5vmMxiFD6WVfro2HD9BwkBfMefWX9fSNhqF79y6cC4",
  "key32": "5nP8qm6MsLG9EHnjh6LmKeZgm3GwxRCLjdDo6UJRrygcFZYb6m9Ym4RQmn6wcjvZBZDnLDf48nyjssEtFy8nMYvn",
  "key33": "2B9VkAygyiPxm5XVykpVPDSpdjFGSDbvP3vjtGEqJYuW5Ge9S1MB8Z9CX1GSFeutG5PUJdcp9oqBwgCijb4JLWMX"
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
