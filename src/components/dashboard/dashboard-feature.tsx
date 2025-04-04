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
    "3zPvM5QXFujTyK75FjvRVKihXjUJDXUqnQj5igcat1fVbCrrWyUGgvV6f4LvBjmyB5u73Q1N2zrcZbSBTB7o529Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54B3kPPVx34VWGFH9atNeRVaqA8pZd2qHLoDuSVgYPu6k98764C27rkc7f3695zWfVRqquG7NyQNPekxdJ1AyxrK",
  "key1": "2SGDA5aFGdTzGafNdRwXYYApp4qrqcJRoFtFnDWFP4wTsx2PGz6XRxhBWtn77d1xTfvPVYgCyzo3VeDCQbidpGrw",
  "key2": "J4XWWV2tCGe7Xt7oRNY4kdC7Ydi9oK8NUYnEFRdjSUgAxv3wBnRJZzKVhVeiVe1txXBTCsn5WQQ5QTfv2JijXXW",
  "key3": "4Hide4ek5TDzGS4mwHucBM8jFY8iS6iuUMxdUirEj2p88LMccPGCTqaKES5mimCRHrqrni532oMkWC2zMkmL7Fug",
  "key4": "PZfqYX6kGqjMPBBVRTzEzruHnBFmttG8v6J948FL5YiwFaMXut4Dpko8vUP7a6igwiFjAQEh6t8yTbKjNE2UFSH",
  "key5": "5RdhQqPwPeZUHZ2pYwGVwhy5iHXSffCURkeAAxbvzmpNNuJFqr33nBhhVfA9AmVsP8Zvd4uYU6gqJ3FRWvfRWYcE",
  "key6": "5jNpnSWGoqKeVRrM7q8BAjTfB1cAE7y9gzhXimxQ9krshkdsy8kjkTUAqmFsfRaZWXJTJte9CVGdNotQVyM4dJWR",
  "key7": "4JHEGERFghs19Quj8UMZqgkurDk71LavxR1RphteKqKpXT8fPh3x8ocJgx2fWf7A747Npkqartc3wcRBowafKNbv",
  "key8": "3vefJKVcBfwD7eNx14GnC3LzUuUSmEVAmBktLwjeqM7i5iJ4iVLQNW6DdAUZ5CeVBKqkztPBVex8rbXzKPhsYRFJ",
  "key9": "4RwB8w3KJNaYEdrjQvRG9eZUCFmPUMHWohsnLoZB4G4YyNAocvnPrrTCCjkSwKCBVufrfnfFEh8uGiHxt4CdFeCb",
  "key10": "QQZWkcJiaaDthdhgQHntT9mXmdJX1zXnVH8NvPciBRSnsvQTYdrkLchZLpuwbEJMrYT3LCAXHMZKq66e2D1Us4b",
  "key11": "33gGUHcbbteRiBuoYArtkvwDZqbXxNPeF2n3FnM6GAxLjXh5G2FNs2z4dSBXbigKNiNhcizKMfhCzBQ3Z2kER1r6",
  "key12": "43zyvWGCH2mx9S4nJuVagbSBN9ZH8k3NG3wCRNCjVBX8ouCjwECrQMB3vbvMtGCamiLik1MeLb8c8Rna2GB3ZcLC",
  "key13": "3i8nkpa4t7RNjyX3eVmgRQ6uCQ7MCGu4gWuXWT4DhtXRyYam1eXfUAwLH6TyAHHKrmtFLy2BD8YnzBe1M2HjuJnm",
  "key14": "bSyfP8vcba8ztn7ingWbH3N1anDcAkb9uegqieddJSTaeoTYHh3pEigwSNSpmUfPKbjPqQKFjQDChT1TsNzS3iP",
  "key15": "4CxrkrqhiMBybLMWpYhs1WAEjY7bwAjkCspgLrMvvtXUL2C3ckWEZCPgAbfqTyxEryY98d58nsZCAWFzGBQs6xCG",
  "key16": "3bMriJ2K1kY5H3RDCRAtmMPaGxxCDaKMkMnT9PbDCiKKCwJinqvJYpVQ2xGbqnuKxur4urh2pSJMcVxFgtA2oBr",
  "key17": "4CXgU8yxw7wztPkCEyAy8aJpZqixww7hDFPeLt2xjoYoJA2dTK7TUaBP8eB1Hh1Yo46z7AG5Cjo93Dq1fS3t7iLn",
  "key18": "CTcygrgj6nSEo4CYjbk3iNkv1VfSCF3V3i88oC1eK2873ReMScy2j1npRqcQdaKAhDjnGf3iSsWBRtVsk1SaxJC",
  "key19": "2sKpNyDRQaixVHYxtFvhZKBgfJ3TSj9dGZtaTni8eiwxoMKBtkeRfCksqbw4ehvBpmBPYkLre2S2J2DE8TVmMgGv",
  "key20": "2L1tb5eoepGKdfMkEV3QpAyLUjcUZy7gDeJDSybS82ivhzc3iTUSKSNAt5rv7XVCab7nTzcYKR3jxeZcooPoQxF6",
  "key21": "54HHFeEffEqdKa8MhtTQuLNt8u1vfg8VCw9rfdKHsJxMK9Y7793rhm9UT5mWQiMAxMYyxQigbNsAfnqemUAXiReG",
  "key22": "3CViZYXKr25CZ127zJpj2MxTYVqDFWYEBim3mhPQwAZ7KLbRMM9TCLNjaLjgYWgcmezPJ9Wf2sZokynvBj4gDiba",
  "key23": "67pttA6vaGCU6ihisBejSEjFCDVPiZgkHWGPiDNC7CwnChBex6GjkDPMYpPcxjAbS3CXtdkTFZWfNuoF6VcYM6JZ",
  "key24": "3jAagrhNjLpcvnZXUGcNUQyMZhwMj1ZUNqGDM2WcKr7KgVGRj4qqAbTPHZDubQxrt4XXvLrVZRGVwf7mPPR8ho4y",
  "key25": "57rQPo36LqqBPJENn9TDYsEU9p8DEX2adjhfRecQuDoZzRVLmb7yY75sYPLfbqJ5oSsHGjKTRyTFWBcG7CM3iQYg",
  "key26": "mDhN1Bfmvwm31BauJTQFeAmR8ENBLxa5bVP71TLFAte6R82gKj4unu5VHH5vD1FwrrR7Fq647UWmCnTyT6Mq5eD",
  "key27": "4czRirwFR5Uw6rSub87tz6WuxCmxS8vu1tP8WSe93faYyQ2ZQLeRP54pvLtq1wVKjegRoEPGrsZYiZFdPpisHxsm",
  "key28": "ATAG1Po39pS8TJ6LL6kEHcqerZABhFAxEQv1qULm1qGwuAcQnf5VdXZLFL9PRkwtNiC5Z3UXqnGBXkvemt2tz3q",
  "key29": "3on55FEFEv1ywddFDQUVHPWWCHUnBVoG4PM5a2pSbaAiX9rzKc2C2CzEJkPqTZ17njgeuvNXZeovW8Gw9xibpbDC",
  "key30": "3bJG9mRGtV2rQoMPVjoAHQrCKCTE2ynmeEgJEpXFssqTW7vpibuYc9N1FK9D8Z2kncPkaq7Vc3BsikgrveHsp6Ud",
  "key31": "2hgSw8WFr7RuMU5hj8r7gVwUNY7GJ8nf9i6N8DkDHaK2rdyaJjkMmFw9xQYE9UyKfu9WRPX9FkuGNFqqT7AmPBL5",
  "key32": "5eXWydDmKPwJ69KQoz5ZRpnaW3DHnmcz5MwCQKVL66MLnKfKEWtkoT4WEni8fn1UZXvunoGkwCAkracZtjjHqyvK",
  "key33": "4RTct4JddzhEUmsWhoEDVC2NMwSH8VtYvaDTfMXUAgJLcB1s5mDKqem6tEMEXBDcYvDZgRV7dtpsuroZMeT6anoB",
  "key34": "KVUyVy53WNtpddnrdjuhVFj6vzD3x4mBRXXDL8UuwtChh2rAtMajRRfnkapYA4jXoRz1qmafaUnkSJSapkdamgU",
  "key35": "3ASnQj8R64nvGtyyk3dWYyqF1wa1KRx21epQhb7S3ZPNvjjBuXaGn5KajS2bV7kRhEYbVnZV3rHGd8z77goQ3pPh",
  "key36": "4sQKeGV5uaYshsji3RxypmPbpQtTWkMBrbgWLHExQ4VSteKrB4GqRdGDEqijgecbxgHFkAwsQnHgLDRjwBbjYCHK",
  "key37": "M4jJtyWDy59gVSSW8XDcvf12krEPuDNxBqbBdufuiGxrcExQh8hqWhrVPN5gqSNTQJ3SfPXo4Q3EHpVsUsrFBbn",
  "key38": "5qB99rXKKCTg4hoQNyPkT9gwpMUKibDsSeidbiRxuJkDEzpr1e2dN5gmhZ8E4x53vmp1M584UtC7kYQbaVGVnpxP"
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
