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
    "4g3WMmytYtKpCvvEEVBk2jizYKX433Hy7wSMAqNEjiQjnfDuoenwSPPaKBmyKfmB7KKiBQkbTLKK7uYnjxKmvxgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HSvrBJVQuP6TKyQNZbT6fo65eahwVPsXeFn5kvy53YpUiJJpi3dDf6RhKJodPsfj4EZrayGxdmTFs3XS5Ux3cz",
  "key1": "frfLjV7zNnXpAkHHoKzKa8cdeSCmmUbRYk5jtjaFtoZcexP1DpC1PjKrEvQWZQXpPHETMH3qaVfa7GsYDg6G5ry",
  "key2": "4zF3DxyPbwaZtyGunprRT7x6Aw2twRxccntyqJBouPLjxyTEBsei6X6EMryfdz3bAczz2TEFwFBGGXZ7DUuXPhcd",
  "key3": "2V63apEdHn7Yi5MpPaCYxSoFWVYYwYpGP1b86vhHuVtJ6gdoa3M6xf8MgetzjCno4K8HGb8tpenwkxC9zLEGcUMY",
  "key4": "2f2gi4QkFxLyJRVsFwS42x6PB44kLPsd2LCWH6M9sVvbhdv3geHJVPpWkBtbvy2116tNuiNbsMrzMSjCCkc7W9Km",
  "key5": "kd1MEorczmUHRhNamhBmDppiw4b9r5PVifJLWJw16u4j7EPsefEArNcoZVYtubz6raS2FsZCrAExYcB7eBP6FRW",
  "key6": "4ahV9q43BsTRK19jTUVxoodTtS27XcHFqVXNAXL9qBhzM1Z6ZymvqRhCMJb1AnD1yDNYj7kHLqanjjDskNjt63gH",
  "key7": "4QfPd1Q48sAMyUr4c2poj1eCAYqh3H78Ydc52tzYSy8fLo3Vqw6rBuvJ6bCuHmMhF8LsM1rbfo1VuUPV6Z1JuL5d",
  "key8": "5yjPmPjG5v9EySvFcbyJ6ENNyuwdNnVwztg1gaadPr5daQUCAWrvtL2feGic6fRru4hvtahGb9gp74449PGKPn1p",
  "key9": "5jPW5TuA7obaPNv4NTGaMbWGRhbKnKeWRvy3KgwvbGH62Z3eH1FJSb4C5dX7xrHfGF8rKyaQyAf1YZfswbPyuDYZ",
  "key10": "NVtoaR5fWJfhEoB4F5xYshDbuKW8zd1vyPJZML7rDeyYmhU8XYUnzTnKMgxT6ZT733FFbg3jrxAKq3tYSNkAkhc",
  "key11": "3qp3MkmQBRvCDwfUb2zcg4FmEMQVHNg8U5hTkbkGRpx4p2GES6yJkbiHBQBu8hWpAJjdHWRJsNU7KjcNCu9vcrz6",
  "key12": "3hBUTZV3sbahuRBhPDwgMeKKKFAhymvFGKY7bbD7rd4x95LDkTUoZad6sGnErhFHYyTSdAqK8g5zabcVXYZpowqe",
  "key13": "5VTt8sfWK3tAqRnoB1ZaA7HtcsUirizifF7ZAmq48zyNVCGotRfcPa81KYhR1bCXyAXPiMuGy8sphPj16RPJaSFW",
  "key14": "2R8XfAMMqRS8eqJnixYamSuZq3EjeZvPL1bQuq8S4XsnVBVLf1j11PMDhKFXKDC7tvUtE8gz7oQdqjdfFhy9gcTc",
  "key15": "JicmMtDt85J2gFJKSrnTnNNwtL1xny1vyzmMsmFwDa7ekzyuzWvJpJK2zgJEoiCciFJhwDEdhKqqaEochschgYa",
  "key16": "5UVtSq2XxuzX4oSwopveNZnL2pSZxn1mrN9c46Q8eyjeCoDVjPNLqnwW7mjVYC5QAWA1Cfmm2zSoyziNLe7aMFty",
  "key17": "3ZJ39VrYHhgEX6jkgrzgRkKDUg6yHvM1Ywc9V2zqFii81xA2y7oCVhBZc7fgxJdVxDL54n9QdViQrRNRUjtjDw1u",
  "key18": "4JSksH5TXx6vMEEWtiuqoko73ZXfs7GdKKv1542mUUa1QqkYT9m3DPKnxRFLH9iTsNJHEyR3g8FUaNXw6aMPbT2W",
  "key19": "2XWe85YWzymMskvRCmjzmE6XyPYbSGSFiTu4r5rhB91DbuWgvBHeiXNwigzBPgUWWW56bXiEofxGZzmM9dffBUzK",
  "key20": "uzvoGCbst4MEnxQYh8DEawd8CT77P9gwmVuFhXQW9pH6ARB8ZmKTWenKBrRNHmW3nBaKvmYQaDjbbEASQbGxeae",
  "key21": "3DQAhEKufbPuwFAeiZBemFUwMdST1vEqCKjBXszEGyL9idaXD2SZn6QSrAcpR7KDp3aToFCn6dLsyP8ft5HRRPq4",
  "key22": "rMzcSzTWZZXqskMoyH5VzLEGhjZZz2MmVMtEcamwCefrznpyXLCRPrg4hvXrF7Mk5t7ZuBhswXsjKFpEVi6Wj4Q",
  "key23": "2jxj8chrvGkr8YvXXsdB761nGuXPdy3JMNFsmxmnTKGMHepUMyJKYsAGsZhQ34t3Tgn2rPjV74g8WeiBU9ar7RTZ",
  "key24": "4XAYENBPJ22STuswPisA6XDHBpSf2zUMsDHBZFT9DmtopTy1HaJd29k3p7n5X7chrHpMj8dcVBK33KCLf4KJpG6m"
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
