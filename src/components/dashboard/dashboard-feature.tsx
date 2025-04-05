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
    "2y6xqRqq7Ac92AYEK4VzMeWHGCU3xEWvmu93J7Yo6c8fjozQGZrMq7iE5eBjuGkMokegAJ4aaiETQQPr18eod3Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9kWVZJfxRsw26fkFkdsXdhsfc6vPptgANs5wi9258Zs4JTV2o2XXt92nzNmBsWmafw75ktEsob3nK8fDFMHynP",
  "key1": "x2SB6Eb4YQqkB4eyUt7mdtLZH9gKRucd1C6iaC9J3xSLwqsNmfPVoMdYG7WxLn54MWbhaUSv9Hakoqy96buwHs9",
  "key2": "4zVgHrsjtFrtDMXVmNBpgNFSC4QLhd7WMoMGu4iy6E4VX3NRDjB43HQNSzQB4PsAGaMwpJmD299iVxdmXVYmH55S",
  "key3": "JXKzQsSNh52BEVTUR6jp5rNEACnykWYji7K5Vz2GD4XUCa4XG5ATaagnfemfKtY1Eezw3x1zY5rSph4GvAP9mhK",
  "key4": "2npSHysLcXkeafnXMGynjB54846i76w3HooQicK4FM3XKyiU15WnMNwPxJMJf9NDbYsY1zTgx58EE9upioGwGrWK",
  "key5": "DBkDgicYbze4gCRFHiDEQ5z9U4szw1FfhcS4quqfBVpGiyeVqPrmqr2vtiBnXgS1WCaJ53Nd9QF2z1rLNAMxiEH",
  "key6": "yx3vovwxwowtgRQz4VhGSwtESXd2TSbsNR5yX6RyQ6joV3dmS5wZcJVDyuYWFvq3E4eB1FHinVXwfHbzBVVVJVN",
  "key7": "4BHwK21SMEXqPGKofQA6TCLLSCFy2WkWyPbCnsMBK3Xg5eeXtuM84bDaz2tLDG87gVeDc4CG3VcCD4GMDSK7wQU4",
  "key8": "9xQoGhvX1AfsLGMtaRwKsZZVFkXzDcpW17iaTiuZPggkXDfAQ7ptrjFWiPL2LmY9HFY3pd9XrJfo8zE5K43MGbP",
  "key9": "5qiRKbTzGGDXqcxZ2ZXSNnSkX1fw3e4z4v2PdbAJYVmEBrTEJKXh6zDoUYU8GMx6JJtejHjGDgPKZsscuMd5fQwb",
  "key10": "3nFK6nyD8NJM8xcmvibMnQseafFgyZzHqAhyEHVKU6uUHtRwSkQ9QZ1RkanRVnUU9HWoUtoa8Yyxd7JbwHvn4QoG",
  "key11": "3uC62ixswRbRwvDGV9Yy6WxEogSkbFouD2zr9wNhgzMTbV6CnP5kNYv1HgZS9ZSuHsei7erRQXc8dTDPuX9vqTDs",
  "key12": "66cXr8Zx21JDCoREZaJBvAm3zHmK6ZrdxV12EaKmz8NREPRcmwmihWLcPbGwEDwHzfsHiUDpHZtjEYxZTXW1d86n",
  "key13": "ukujT6xbWKgcPxqgpk4Hv63kECBMnetxVgf6HJXuppgjdbFmeofLPMyL7fDxnbKZzYAdFF6aB9b81Hi4PugR9Fz",
  "key14": "2WYVvTZBsyZM6f5MmaNcAi495EoP95kTmMp1bDvdzZKTCf7e51WhSifRSzHoh89jeyLTJRwazv8zmUi4rmKNUnw9",
  "key15": "2xgHx2AdvBsKrMfbYwdnmqZd8MXFeo4VWxN118UcKkXaEgFzGkNMuwoKdo9FFAvt6GEVWK6JbUnoruyuKPkYJVDN",
  "key16": "cnpzasm6kUVFM5QTYS8apmS9AicUMkrAP2PDzYu5dFFZmTyUVvYpRQR94Wmkkskr8Z3aApQWq2UWmaDwdsZK5e1",
  "key17": "4QXRBC4jdguGLsJydjcYBj1pvTKApKz4JTEX5jAyBa8drzFMhwcgc2eKoWgm1L4KYVvjco4tPGDkH4ZRKTJV2DGj",
  "key18": "35u7oPBSCnt35hQhSks9bhYYgiZLKYMGmvniYeakT7AG43dVQywwsYSyn1gr2EUVR9d2ybdedCGrvHCXhKKwv9jD",
  "key19": "JpiAmfMXN2VWtpD8SPjKmYp2PHphMnCkCykXYFu8SZwBwrRn65QvkyGupaGPEQExEa9ebFVeYqbQgWCRkNbwHAr",
  "key20": "3TnzDhxdRNvdnZGQb37CC2awCoB9S7sDVtoEdqLWYZjo14utwiK6FUUDET9MRw4RkRgcyMDycXFi6uZpsiDsCKb",
  "key21": "3jVo7AYKohj8fHMfVCE6yHLzU2Xa7NPhqAEotzg2hk1Kt3kXR9iw8B77ke96Ai8bf8Rxe9xLgu4k5krK1xHMJnQW",
  "key22": "iBfnN3kvkap5yjZJP9vj4YxqPsemTM1J4tNwEtUsjDknHMnxXQeqDzApXRJuVtW5AU4dWsjAxYuGcLtzr8oKokT",
  "key23": "2ARFLsozFpFaji9RL1ur3hH8Z3D4wgSHLrB8qHthAVSkhzz4csw75XzcpDCUzpvh6R5zkNYioVvbhmDDa6UvVWXD",
  "key24": "jRzrATPkqS8Pqgphnx6fxpF9R6uoNhgkvqmrnbsFv4YDUgu1i7HuT3dVvzZX3vb2aMXEWZzUc7rcMEw5P3k4SZP",
  "key25": "2FhBrEf3UpEbZf4Nasbnun34fRT6uUVnfwCzYdZ4aVoPkSsyQC3LapfGbjPEUBSLo3D7hxHjuoHM7AewaSbJzZtp",
  "key26": "RNNVqQ2aU8rF1MpXkcL3Z6BUD4DtMZGXLi6pmoqDrHquJUGXztvLBMV4XaTF3GPtMQdi9ne7NKKPREMj53DKCHe",
  "key27": "635Zno5RNSMNKeefyUW3C8ueD8RKTcxuQZnYnUbhw857oiSCzZNL1AYWu6WvTsNvMvSk7owgeQdZNbe1aDTkxBDF",
  "key28": "ZMut3VfC1aYFaC8CG7zCPs2GhF9vibgPS6kKWKSVphP56r3sqtncW3951huJA4nRxLBsY3pkzufZP1wPjFyzCxH",
  "key29": "5qPnrQj77ap53wBsWaK3sRmZd5WmaTtFA2VSavVEmFUm1Lgg29mX6Kq9CQwnjWMGDmmKx7ZSB7grv69dKTJnLbCc",
  "key30": "8bHSjgTgcmS9EHChcCdEyJG6x32YVJLAnVYX5nbwLBV3tEPWG1kZUWRksapSr6MJCFXYq9KjmRQjnDQ53CVzZwj"
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
