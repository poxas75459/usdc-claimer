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
    "5njQrwAP4Wc5PoiXTHSPXG1YgLquSQXFFWUgh79V2MWFptGN1ApsqkekStPjj61AQcJEQrMJ3KyBv3ry3QYSyNxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHoz8sDMMyEPu2bfNkYyb9aetHaqaULEurTHbg6u3vNgkqfhZoii3h1zcyZx8TNnSN82mfzEQYp9q88tkMeaYxt",
  "key1": "3zL8P32buFiwpGbD5i2camNnh179frRFpbo9Xrc4kmuDyYGx6vRfQ2g55Tt2dDNE3e2EaY6UYX6Y2TbmST2brwXV",
  "key2": "4TSEgjdYdBTxNLsdvv7dsfSpNqPhY9MHmAkmMuEgu27BdKrozJzEjwBdCJQgMA4i8nSHuowo5azBnTYizxRyWbJu",
  "key3": "3hJcF6vuWtaavBNLVW8nGzJJFRmps29xZXcin4YvLK1hSVmp2ouLSVxAKrbqfws5NNCkRNGJn43jvpvYab5h716G",
  "key4": "Z6gLfw2yXjhjEVrzhJegngktgaFEg8agB8UfaqSmykfR1PjbunkEis8ato3s42AD9Soh3hoJ279JxqkZeWaukVN",
  "key5": "3tTpAM6HSuQB3f3pAJAMNrCbEMtSuA34TYwf9VcPXxJZRnzx57ADDpunXMop9PY15GNyBcWEwuoHVRVQrPQhj4Lz",
  "key6": "3uZ5HD93X6tWk9N2qxFA14Mb9qWWLUUXSbR8LESBf1p9Ex7mBpHUg52S7uga2kCHt8T4qgxtY546M8CZrbFvAR2Q",
  "key7": "4w64cRUUPXewfNWGeRYnJehN2PWJpR5rxZqX9eFzm5ZbJmxPau5txNpeYoGaTgNeQQ3cu9CyyJb47bdWjN9Uj1VY",
  "key8": "4WN1Nsh3F3djmRpCvpU4n86r6QAW86kDfSc4L9vLByW8P3Bmg3WxeXT2189TiuDbDZXpgiaBU4356miiA73NX87W",
  "key9": "9FtYEx3ZguBXrB9uc76nBqsqby9Mj4v2H6gW446E3RyZiKoFEsQpLCS4fZ11EyqKEsNq6j7B8JM4dWte5KgJFrQ",
  "key10": "qQWr2otnCKzn4arCiJiGMx62nchdeBNLokmRW4eiuiqjDLBaEh3m4PbqQrUXDr8FzeGnPk3ECnMsr2jPK8pMJbU",
  "key11": "4SDuLD4kSyRW2P4e7qx5ijKkWGY6JuNgpkFutQzoeLPebR1K4HTmdnpX3cnFHEMaQ1dtWk2W4cL4Gy5uTnDKPrZX",
  "key12": "2x55G2vSXfKkNdCmPKw3DcMFDuWRm7g7u72jpJH61W9bELY58fGZCQvNieoMTjww9n2zRakqhyyMJksXKUjaAG7f",
  "key13": "45XVJ3j1nPq1Ra7EMNRPKL1dCBJmuuUegzzhoiLZQkjZj5XjgXkjkYxqjpvoA4WHR3ws6FKjuDkhZibxY3XrLRUe",
  "key14": "2TgRjBPmd9m8d3Mx6S3rGsYmhbSUXrB3DCHPKrxwxFQdPCCuNmjmpjgByLfaXB8GtNnHRH2NeHE24vyypPVptb8w",
  "key15": "5tCt4XZcgMfiQJuiQXuFPXMb86VXnR1LPLBzY4734gyqLN8XRZ8gBKEKyXcr2q5WUxZ7hXD3ZTrcHNAuKTj37QsF",
  "key16": "ZgqrRd55RDn3QrVRg1UXorw2MF2Zo8A1AoMUGPK6cWVyZKbVtd1veupvmMxnU76KUQVFiHQLWEXmdfWcxKrWyjd",
  "key17": "4TAmNrMaVecP6MVUu597zFeWR3spL1UhJ3LaFwDfR86rDkRj5wsHKumacdi6ZAvYXaetpvwNWdWGWGffyhFWQ3Sz",
  "key18": "2CBBTjA2rMSDJSKundgbXGYhe5EAU6HCG3TTtLGrnDLBTrLazc48HVYQTnCSgW7sp3MvsbbSWQxaS9g1myG76753",
  "key19": "9s9ZP8EovhMpptuo9hmsickaB5Em84ipjYi9bRNYyZZq4HArd5SUoFP2kTpMdzeqa6YxNtQhrtLzycjnm49apix",
  "key20": "5NTuyo4XJq967qmNsjyMWwkBX4Tday796Ag6mH5JzsdjijytMDPMAaTYm5TfmJrGFqfNsfDLMmUWWtHK2TiseuxS",
  "key21": "1wbEqFeU9t8euxQPwfHmQ4kDQ7dZXkVE7FW2C88b8VFwzi7aTnkdkDGNXKqTJuDL1FqbTZpAiwZGosjjVYwPoLY",
  "key22": "2oqtUj8Er8T1vjZ7Gz2yRC6KwdA5fiYXqUozTfHocWcQZaSywPah3JAU4bTAEsVwXnqi3UPurcnsx1gfWoK6QZyy",
  "key23": "5zq2fgio3wscdySHRbXUZbcyVvHQToe3eZgbwwtpDk89m6mojug6KMewLofM4QiKG7UxXA617EvhjWpnvbfuki47",
  "key24": "5QbZEQRsPAt8k2GLS8Pp881fkB49nC4L9eLjE9ERyHvwxbxNEKV7HTnCxJvg3XJQNwHvXkMnYu41W4yk4FvaGDvy",
  "key25": "2ZYGaoNSvjdMxKxJsFgUu3oYbwZZE5JzhHCLQz7jdJ4styAjAeWck4EyLr6Nv8JiEHzxAaUSNtchpjDHgpD3wHav",
  "key26": "3hFH9R95zMwDtzZi6Ywz5gcvUJVT5N35tbxY8cURNTyAanPhFahvpwdh6SFiSNyXfGdxA5vco9FnA1A6pbyB2SYa",
  "key27": "9PxMGKudktDxknpcqGVhM78ZL3uN5woMF8n9UfZvtYSSRrGzqMVUxjKkc46X182Vfb5zjRYWcHxSPBU63L6Biev",
  "key28": "3CCtB5fWMuiqm3JEP98dcWqDL1oh8aX3cjKMAs6GjSJnk8mSGpBGiyqa2b6CTVPNwa7cy1b27zm3TLcP8MhdiHuT",
  "key29": "3hDGnThUkTkAV5QQ2BXC6d84HQNPz3AX3oJiCFv7U1ZnXnYvUr9X8Zg9h2SowhA8StUvvjLCMf38aP2VmoMcWvX4",
  "key30": "42J2GAs7b3qoMgF45jcStT6CrywjiF1BKE9fb9jiJFmkYqSrxSCPeSiQmNYLxiSJLCWNSe84tEzathxeEuXEMNpp"
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
