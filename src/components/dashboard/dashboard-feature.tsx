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
    "sha6PpEPueb6asxaB79gZhFAV2io9ZnzpxR6mfqvAEVP5GMYBSQArtYzqxChtEDLRZRevK4x4FE4uwrewzvs4o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzqnTpsRQwMtZfdkamH8Pc4ptvMDkacnSrfR31s4pyNcBtG4uY4VgEA2zfMd5mFWNWhTrVEn2UevnempmmDFsV",
  "key1": "2c9mk8pUGT7krruU67WNy5KdpYEyhmZXsSNcKpUmMwas8aaTXtv4ny8oMhswj58LXwaziPpUbobwKsWzPZnkvNY3",
  "key2": "2UVKfvH2xVSyPX4pXNxJryhb6wVhtaGLV6eCQ54EoYbF9NvVU6NEw1aZT4LcDfdZy7YmBpp8G4JgQP9ia3ghkWSw",
  "key3": "4wBGi42rrtK2Zb3jj7iX583Nr1W6HcuxoVJvcNvec7EN7BDLC54Ma8K8t68Uw7sjXTnnap5gub3CDAaKfDenxzLr",
  "key4": "34pFWYswaXFCQJiyUPm9pnesYWokX9UGuBZy9Ko9YTegcTgAXMKEAbDBb26WvDUnW3oLqEPHgfopxcEXABy3hqje",
  "key5": "4TEP2KasaoVRYK1tF4S9r7hCZJsDoHyj2fytPG4CMXUFRaaeUYHW2ZwJyn2gxwRBrw5cPsRnb8ttEQfGagsgiGwM",
  "key6": "4FFDWwgS6uWhb7oYUX41fCUgRC3YdkwwRiDMue9F4QdnGyk1f147MCuBByMh8gd7U2sfN2jkwLCG3jDvbdgKq7a6",
  "key7": "5yLz5TqrRQrxQjr2EZwge1Xk623imcKNdFwFneLhL2KUrtbFoQjYVVN5d6HHj76ymv95uvF5PesgcUKgxgFWDQpp",
  "key8": "4R8dwkzas5X3dTF9RMDAjo6sUhHGNBQT3G4FUXyvQzxZoUabS65BTinGWU3mcVettkUtZ223SsMJqAXUiGN3xqi",
  "key9": "5vTiGMfXWSXzawU2hEYPtJnVAkgZVVgsYo5xwKLGuq23kfKbRWeaGdG2mnzVCUH4eqWmA3KXUwRtR38Nr9sXwUYz",
  "key10": "4otHpknSiGbGSfnRbe1JSGS6P11HzFBGHrhfAk3JZ8g51RzagbjksoaBbSpyWiWNwSCaw1GWaKNMcy4NEzkF2uNN",
  "key11": "k2VvLKaHsfdW1E5t5z13oU3rY4CdfTcV3SR2ut6WAzbQRCmiuayv7xr1Cz53SKqEBJDC3uuxwFqf8raqXhmeFnq",
  "key12": "2GJU5z54sAHnVaaKiskaNiGiVWAZ7XMXMKzoZyyy5wtY7bFPm4YhC6NQcUH5icn26LBVNv6Jt8TYb2GhGkxQNpGi",
  "key13": "4pNq5W83yKB4hwnS5owt9KK7kzEPQhQ23p28rc2YMaXyY3nhRtEsdEE4kotixHCtMoG4QYNwP8yA3N7i9LRncp5G",
  "key14": "GoWQFSqEYwCyXhxW4PmSM1uneRGhKkTWqwy2xi2WBAC9RpJWpbhMQ8ikvo6SHX7KmMB62jFFudsVrDM89o9zaaC",
  "key15": "2zdKoFs8bNLshnHSndXn4j33wuovSTzsAqDjPG7NyGDZSkLifWrCSUCXv2byrTubsLdyyjbJq8QZTT6P5KKdSRNy",
  "key16": "5DU6Wbq1woVKKZLj9sqMXEQwprLsRDTLcPzsJnRJdWL7cCqz4aTmS8BUhPMy66Pzh1VBVdmY2VfH5NPA1CbDBrvX",
  "key17": "3xg2MN5Zx6fEEUezxUERuYEpeVPMWqm7rmzTRQdf15NnpwAmXDzBShcVMMosi7UWTTRdN2yciR3ii11mRmPZTfvr",
  "key18": "kpEHTNKcyoDeCGWEkSNbehQAXP6eEN8xYzGn7bZM9LbthtZLPAg6uC8NT4atoD55LeR92XkGhHf9b7GjrZtuMNL",
  "key19": "3rKykSgzVafJDQ8XnSGUiDi7szrsritkc4pA5AKSAGHMZSHUJgu2ECDuGUYZidAqCv8tEF6wAWKsPzdEVv7cr9CZ",
  "key20": "5Qc9pBBbxoUnoEgU7vmCYsLboJwb3j2uSurhj6hDeuXpdpZQ9emMfty7qAxoB1d37tWhTLtaQcnDnfuzvnn1q936",
  "key21": "3sbhA8gKcNxJYeTuF7X7aDeTwRaoMN51EP8RuFEExvFxvM5aKv8KXXggtdGiqXMh67KWJHdKVCACgvUzteTd426i",
  "key22": "2aVjfayjeuqxnM77br7RaAKYzhZwBaXASBKG94nzEHGZJ7dUMYw7tQXJ21gVPeNPV9VUATbscv5TNcG9FhQSqDG7",
  "key23": "3poh777Soh679unnC2GcDJp2QXMqkDHaDeNe9uqA2tZhL6Lxw459jLHSY6YPUFDmx5NGJD6veoDPNZkihpVx5Fb6",
  "key24": "iXthVZqMcFRWEcTyfo6Uk15XBz7kDVbS3owZ84mLJGPC7VrcoRnBPpWx1TRyLcJ4deNfDtPr4y8LsfTJDjEEpkE",
  "key25": "5z5mquq2njxStqTUfDG7yLdPj9CS6N4FonZYLau9jaJiEaczN7W9ypJG7AXSAt5T6J8xf2beoY8Hee2d24UJUj7W",
  "key26": "H9JCbHr7Th8c4pP4qx9eByG3n5McCTrz6neodsSi9pyqDHhhQtcgRDV5Dkoo3iAD2QLMXD3LgKsqZunjZuNDav8",
  "key27": "3TzWPnxydmAkgtPUtHqKZ5ppox6LbThApaMXremPaXBxFc9nU8KSyiwFw6iZgWCvrwgFuBeZcK6yruvmDne2Tv4F",
  "key28": "ZSwqudk8muonz3kudhZPrGfjJs4AK1K7mKyPMnZWdweZvPcH4oCobjqjV5i9QqTmhPiFzmiutGxyUmEKQ9e1pME",
  "key29": "2Rxs54NHNosgeJbF8btCrF1zkuww5C3a9uPZFtxANn4LvS7uWeUgSxK2Gp23pivwx7E1SPLz5wBPTb4jTCnJQbjn",
  "key30": "3j7E7vzNDJQnJa3vcotgFiXMYMEPKUiwpcBPgLbadRnjqC6wjum2EhuBG8ecMSJhpasxSUdgJBDw5ZLxwfUN4fMu",
  "key31": "3gNo4FQRLGuMZjG7b1KLLvHrnHcHiaTbF2uoR4bq8LC4W2FSHZc4s6rMnQHnsyJtfniZjGSmZv4ox2rZJonPUo1F",
  "key32": "2gNM9Sdf4BndURDfCYy4HabzskGvCYyLVvMTNSxbQAb98icqvYP8ncsFU89aDoDhZQqpvWt1xdKddHN4E1UA39wW",
  "key33": "9XoDpQKXLrErPK5zqXzbF1DLs5XipTtNwP3jMYzL7tCJYTmxWFkNTZaT1HK2C1btgHVBPDW3k1aBwpdVgNRfYBn",
  "key34": "4cmEWu4QSjmoiXmH68zzJcsaS9E4PbmnAwS5v2y8fgto2E7CJofFW5RDmheAyeSE8PjaYU8z9FUaeQWLJisAB8r",
  "key35": "5EcwwhUXy7LLaq4cPq3GKLrPXeE9PmuwJDJ9tQ7951Qhj5Zv7tCxRqY4fPB2LcTVwF1RkC8byq4HXpjCBZbgwagG",
  "key36": "4ER5XHWGftRCF2jNWToywFjHZENFDEbNzizSZxGZNcY8fKQhRqoctNfTmR9wssxj7UPUyV1h7CpVseRdoRL6gBZN",
  "key37": "22YBkCuadTC7xTyy94CLviZAds2wi3J8La4iKMeusb9cv4fMvuZjFwXxJqCUiYsyBoCQgLGndZdwMdq8SB53uaeT",
  "key38": "qEYE99NKe6ZTBPnJjApAdGuhrpdAn7NjkSXhsfn2Rqdof9ywVBN8YzAPq6h96Wsk9FPxh65dxNrL4DpLJrC2A1L",
  "key39": "2EyLsHB6ewowYSXN6JvD4DphigJVHSD9nVjj4gvjf6WdA8ckmHKT5Z7XVjKbVb3YTKJsNy3nxjRqjukXuyRsRKgh",
  "key40": "53BjnbXZdBGydiWHLtA5yLdo2DLtfcdGKY3snYXLY4mxqEuDp9rYmYc5jzaEzptWnpyUgK2NoKCYedKSXuSdtb1s"
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
