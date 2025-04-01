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
    "4Z1m8pyRppzucdSMeg7zdDAab6HJoB9CViRXUera1urg7B5h9P3SiHwdSQXCp93xQtsBafCvpkwB9ZCTqBScRiL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vyveDgAoD2R4PBZ3bzU7dqfwi5avTY7U7XN2LJC3AYdvsFFEJse3C1jjQnrNLUm4kGKrYKdpMDiFGFb88ZnZjQB",
  "key1": "2Wus9e5cFWHJCCUncYT6wsFwEWfKkCTXk2nJtiwp6b25V7VtwzAWqLvaqfbb5W45cW44Mes2LeXks6ecoQMq1UrP",
  "key2": "6uYM7fehLYwuqac928j18eJ6obgzAN2RdaifUhkvpmfq1e1Usvmb5UguKVahUHSRuE1mV4eXLuZduStNLu4bTy7",
  "key3": "5J9f3i3h6vyYu6gEDPJhrTRjqazsFThk3izsBkLUGk6tF8arBGdDwVpDxtY1C7f5F5v5rAQiGffQeZJWZbh4Ss9h",
  "key4": "B53eES2cA3XJJNTXVwb6A7CuYDPHW1ZUC15hmNgPhLoBUx8UsyDFFmSU6ubaomf8urhmkJcm9KwSqbxLDtaiKGU",
  "key5": "3BkTdRUpso4SDfPCf152WWU18yfQ1u1ryE19rtbwgvR6aHEVu2eSvNv3RFiv1dg2mKTBEu5zyN29aEeoJ9LrFyYP",
  "key6": "wBped1DvFYhr48Z3YAxv5PhUVArHrRFkb9B5oXyfWZLyKLtPX1SphF67iQGaG53GgR2xB9iFoPTor5LkvLvowDM",
  "key7": "4QLaTkvq29omTytgiNZDMwfXLFLDyzFztWKBHk24hm1jGGLntjqA1LtG1B71wURHfqBAwnLJD5JARnFvg42WQa8C",
  "key8": "2RGMNaSQzigJdZCtx717ohnHVkdU2h9W1CLKjD62FhJVDMZk1WQ9GGkzeBLDnQGsEN9mmD1zydxkC7g4SQcyK29x",
  "key9": "36Rh2NH6WXscsKCWf5Fr811kvpP2dU8gjnSd4j1dWT5kACvinP42M1LnoQayXC92hu1CJgepeFHjrjJd9RCmUntJ",
  "key10": "3E3SnNugG1pnCsinEzqwJaTQtF4H7XTnS1oLvPnQifu1RSjpMFYapUn9WPoCw1U2nd9H6Es5kiyLybz8MEWCBRwa",
  "key11": "4VbWRqy1gvU6XvUofipvfpDSbm7cQaWXzLwepZ3a26oqJBVaj1UFnForrE4wWRC6rRgw1C6jAjRmMdyKV8GBwJ72",
  "key12": "2MeNS6ByeGojhiA2X4q537X4HQfhZbZm9nn7ht6udE48Ef12kqbjU3B3z2EeTZbAtwiGgCgTiMtQ2Ew8vt93av1L",
  "key13": "2uAdw5USLGM2hcmC4igxEQSDLpxxu693CbzkHEMx9mWddfhUkUEKzUqyNCk4Xqz39KDd1kcQpU4bLkca2mnCjsKz",
  "key14": "5gMYe11bfk8U1otdmm6Kin7PZRmNfBPq6RXvEAWfMfqyGPc1nz9iAnrdWTKjKDhMDWzpzSnXnTVtYkPHqUuz9spu",
  "key15": "4spko9Ykja1ntjP4bEsVwL8xJ2rNxK5tZ27u6ik5xMimiRs6ueTADSHmu5Zip5o3Wtta3MNyLewkmXMfMrjVDf1b",
  "key16": "4713NnG3zXSwUeiRHKhi7GEt6ePLmhW5zznLairYgcGckLNVrS39qijpjDvrnu5ESRwBAToRKoUPkXizjrcu9zqD",
  "key17": "azdR2ohuTrzqghM2HZCedQ7HyjDkhyenjoLQn37STPTSCKPyYxyiV4Hp41aNqgrszgd9kTHY5aC26ewgbvZezWU",
  "key18": "5BCbtJbxiTDn8K9MzRkWG8jFvthH2WAc4j6grSiF99Rqh4LFgMT9AfC1saic76Cn9hnHC4ot13nepoqLka6epd7W",
  "key19": "Ua4uDWXuhMsqaCEDgRLURHLfVpbEqbdJ4dzFqgBL6PwwYX3t2mAANHYFq14aXxva2Lhwa7gwDX7BoTGuThyA6co",
  "key20": "fdoe1qLAfSD16niqFbfJ6m2aPZRfpq3RQAMg5jHLmE9gHuqfnpjxJPYWfYrTmjsrYj1x2x9hzz818H1S39Mk9L4",
  "key21": "3GAHJTwBFPYmcxagUX22FaniE56hqCmmDHapKrGNXuMUXpQpTbDpB5EYndpiEpK3vudJ8Pci9Z5yL9Qx9abg3z8V",
  "key22": "26HY1GaSYqrJknhyDRG9XJednP3DLWZUKQRTP69gj3CZy93QiefW5YxaZqth4tYFsLrDMXx3gcdVoX2qCwbCWKSu",
  "key23": "UVYZdcx1w3LExA9Eyx8WqFyZuGTCDTWTyWzZsdudEgzjJ6ncQMi63EYoaRxgaa2sLD8AroNvCBRypYNPwVuzJ3t",
  "key24": "5ux2h4x7vU9Bnt3o4vsovWYCDn3pe2G3EhsHbzi5SUHXmLqEBfS77QpjeKjK6u8JMWCfRHbVMhyoTUo5yyJeA2ES",
  "key25": "5e78Qe4QDHAr3C8RVzgf1rACESRJQ8uWDfb8xWNupp54ZStwUU34LWLn9tK3vVsnqvYJpzwAZw9eKu2Z5oTVU16V",
  "key26": "26AKJ8CFA5E81juWUxdAL8S86kxiJCE3QnsuvJoRoNHbQVhnutizMebgSPFp6Mp7GvuGwDMrDsKmgNAU5kkXD4Xz",
  "key27": "2sJG57oCDA7YoCJj2GV25UQ6R82h3o8WdAJwx2XGrQTv4UrGryN2gEWPBcTuL4rnb25GKr8LahwKK5A7TVB7qnJm",
  "key28": "3RTCQDbDwmpidCuP2BWZKwcZmdvnX3uyWxVugQ9o1uDFsqLBbNywcdueDk2G7Lz6rChxPs4H6NKRbfJT5Yohnmc3",
  "key29": "5DY6BGU4bGbB7GZsNNf3UXoukZmtKnvBNRRBdVNbCNBpKyvhnaiHUpgKz8mm3kRfjpqbGyZAaDastjwAueUAqej6",
  "key30": "4KY5j1tcjGhvqoRdUij3Cnb8aG4EzNnhNfuCE7MAwskcNyLx5synmrAzDKdpom4UDZu2biNuivUpZqmjoTKPuxE2",
  "key31": "5u9843LBNVmY79yHEPNK6HW9BZT1dGNtPeHXq7DMdssXuHnwWKWhBymE8wR7tM7aTf9zcu2PQeE4gCEkoReifSrS",
  "key32": "5tnHmya1ieQrQjhbpgN1nmaf7CJecaU1h4ra3NbC763dwBVtFnobhPEuUD2LwDMh1oBcXk8JeMf98pQD4R2qQVBr",
  "key33": "4mvy78P8UHowVWu9fPRaEKkxcBRxDtkUBHhxbwZstskQDecpnKHikV4hfZU2wt4BAzzzSunh23emGGmiAgwg6Fm1",
  "key34": "5bogTq6zy8bTH8JaTGXU9ZVY5mEWDQrUcJN5tfd7YLqJudTrqgzbBADW1UwovZNzCUAnazTX3pZMkqZp6urP7Azb",
  "key35": "4hJux78cPVXJ1YbLR5iEjW71sfaxrKEjQeYxBLuxGUFBcQ1VAMuSa111qwACdw6jsirDVJiVi6QqNjAMieUJpXNC",
  "key36": "NJnaW3b1WgquXdDwveFSdVBVcLXnhkwaTkoWtvfhYqXo9RTgJbPkgqkG4fuUTBLpV34choNyvFiHqpfC5bmgX1C",
  "key37": "5L3LFcSb6G712TK9adG4J8zahRGYHGCUHj2i9qMGhcRXkGE7GrQoem3arJscw25GgCsWLeRJDQ8wkV4tUZPfSYgF",
  "key38": "5pTE6U6pTuzArVRAqwzJjeo2q21TGp4dmXKmGoGBRuRkRZSA7U37pEXhwqixJW6Y5qfG3qdifu3hv5C3u5j34hcL",
  "key39": "5igH2d9QAAf62AaZtkxsarkVBaBbvTSb4tit9QCMKaMNz6pLQr7ZqyV37XhfXMgUARe85zohiGvbqosvRRPHJMor",
  "key40": "Po6yRSyNMcA3Cd1SjjJUUDKAeEUZKsKFGpF6XzeNS1XQvPeUyFDdgkAS7EVB2YpafVu9wrXt7of2bk7KUmbpnNf",
  "key41": "2pqfPV88dpZU9vt5eXhTDMXy3pmUtp7TpYmJJPwMUkK3sVfmpJAm8DkQr93TzCgvSG7EXMrm8w5ehvpoi2Qu1ZNB"
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
