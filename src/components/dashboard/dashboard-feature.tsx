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
    "5Q9gNxffQtsUv2Zkb26kr2ta52ywMdtmEFcHuankU7BcjJi4Em2A7dPytym2zigJsw7jVQJghm4kYZMC69ZuWmjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbfpmhsmvKrEe2XaDeJrEq1V8JgmCUpcAsqhD5UzQbjXvr6zLiR7JA9Ws2u7Pzj953fRoYPic9Ns7ecS1WiZWmA",
  "key1": "3pwbnYuQfc4z4N948SUVLZVrqq7u7VExqahFpMSujSBvR61E12WkVQZEZrRyHuNHMgTgEU75ug1baC682yEXDct5",
  "key2": "5RtzoqXasLwbJJjHFEVoqoD2hJDccvBegF8pHLkkg5hKC6BiUrkzuKUwUcfSrUmJD66P8AncFK3VP1owQFk32eDG",
  "key3": "euN7HVoWQhvaQqGZ4CeiHEeRpNnXserCzw7cHEjb6cgsHJbp2iSbcGBtY34nW4w9VVucTsu9mJyEi1aBRgXPbeh",
  "key4": "2aBRza1PumNXxM5qufeddCBsxMRiTp8fQSy1AHEEceCUgsvLvKZkinruamVdpHZtunYeFqkynZUua8AD7qJpPFcy",
  "key5": "KqRepwX5PWNs5n5hmWmJEGaGo3bJu5Cgt3xxZEVNN5kjsQkubgYbj3F1ssAaShK954oL3LWzkLfYwbcdGU9LbYL",
  "key6": "5vthkeee19eov9nUTmU8AP5ugizgXX3MEReutBLeS44PRVeYTRTbtgG3CpFztbRDtx4MBZhAzaAwazvhsz7GBeV4",
  "key7": "5q18odvb67btD6Q4KPUKYvnequYCefrDvBiToEQTp5pJRKUKtXMtvLL84YTUCxFVYkE2ia1FN54mTX4FaZbR7oze",
  "key8": "kZztoDvAgqtkDwtj7YrJGUJgPEsrVHDz8k9fh7yv3kHzXx5Fbt5jWJzUynuye41aKy19zSHYxvp1ecijZZa6bkT",
  "key9": "2ZwzwHPKAaXPFfeUm6X4ovsa8vCSXm9QLycqi2UactCivfBXm7bTRxbrut5qa6P8a7zg7ZuBnby9MABqYbShp2hw",
  "key10": "qn74SscvYUcGxWZFPwLfusBrVfZUpGAUpRG9KhubdAkgBtqii91QHueGzkPS9WNSJwWYCS38SSyGC6foGGYfp9p",
  "key11": "4v37RpYA7HVx1ELQauTANbgWv2RopGeE9fvqaCf52w4m3Fn4o1SmzWLQKHKMuQdBfEk9Kyay2BUAGDC6dtzVH4cy",
  "key12": "3wnPUJ3dZb387D9HhmbU8bLZuLbaBWKHnQywmE1kwMgD7nznT2kv7iSQN5S5kWE6gXHHTe6AfuifTCFsf8RoPgDq",
  "key13": "EVDFxRFsHWBL6MkL6Uie7wUPiFp4f8AYLiFUEfLScxt34YF7rj9i7xpwdM22Qcvmru62r4LDaG7wfK7wTyiR3wh",
  "key14": "yphNZ2PCwvB4mB15sCxaMeexn6ntayDg8dVohnLRMJWxbYPgfnktGXhemeE92xCneR74oatixmPCtGo4nzutEBM",
  "key15": "2EaBqqdcabkQ49M7eiJZPQjCvjU5FCgSTNRAK93Koz6gdrHtQETNYKJ4KSwDefCHfHfHgntkjYSEwDpamhjFgqrX",
  "key16": "4ZQu12u5Y8JhEJjfW4xJskN1zWFyrWJgJ9Uhf9wDcDMLPaBB9oSTetgrpixe6Ga4PgmHzGxQwfkjuBGp34jqvwWK",
  "key17": "4e8JVQMXXUKJa4CDTJU6aS7umenQvYYMQduSkZkJZj7DKdio4BReo4pYKHqcXeAvgXXXZaeMsupWpRmXzB6wyao3",
  "key18": "mD6MHHqcaUg8TV3u1zUreqe4LHEZN76x175dHycmtm8T5nHQsnRURiXAZhDVR2BTLUMBLiaxqw8cPc5reVqEcRN",
  "key19": "4HJbfGBt8uJUFjLbgp2CmVDQzkufWKsL2Dx93SCDfnHqeyo8DXaNDtT6YHhHGzNmQdDdhu1aJ5VPqW3WH26CKYTH",
  "key20": "5BFft9wL85Y9f4gzSaKsNbqv6kVmAYhiqotWVtFAfeFfZxYuzKAJ31Khapzqp1dDV4UjXbv15SU85p7y88yPkc6p",
  "key21": "4NQRUuJEniPDmGAByiKzcn6gVLQU21Arsux8bMuutLibMcgbfeu6Y46ehTCbeZiyqvjughmzocPqonHsuGKa2Jz3",
  "key22": "4RiJY2TeoHXBmaRr3WhUFAmBqsydHavWYxDwAsZ9VGLdx2gpECF8ynDGF8QF3HVyAY44uzWjGvWMR9zcU8V5BkeJ",
  "key23": "C7Wu62VBgtgQgXUM2ovRp5jUeS8yWUoP4zNmAf9pNW1UgUsJxN7o4WiB71qT6TUidtwCui8XiMVTF62jATLTzoy",
  "key24": "2HVDYK1yx7faRRqEa9upK971g1E9iKEXFVVbaSNRgNDT4tfUcjH8wuRH3zmNX9LGD3pkSEfxeVppfujD3Z4vLpkv",
  "key25": "5rhXBGefnKx9oBmYfu237nCewdekRhvXpkK6A6zPDTAHE9MX44ozq2T6ybs3vMn468xbywouWb9AoEJojPdGQ6Es",
  "key26": "2ZpmsdXR5GGjrFuJa8bLgYnMKmEie97XjibYdFG3knMbn74RP3WoqX69GLGxMcdnKtCMfuuohb1VqRULCiMJ6cpA",
  "key27": "3KdPpqk1jffW9Qd7pCcVfmKNv6vgRPvAVZnix436XKX1AJ1gMwnzb6tz9x68mvtAHbzeDWXWwMRQm4gj2ivXuJMw",
  "key28": "2sqVDBss9H3uzvNzSndgmF4vJgwNbzHrVvaMzmpoxsKoEDMHKX69VAA9VUoTDirtaXB1QxhJBDuHgwEwrk6uHM2U",
  "key29": "6WZNGL634MVZYDkKkRpm7nGBPWcFAHLumFkVTPKPB3xCvzjsfmn1XbXLwTnrUS7R1bjmSURWUMt3AbPntJkvMoR",
  "key30": "5cEwMXxyULw5t3LH1UNy15sM9t3KwVSJ5Fr1S81DR8rywu73NB3XfkGhCuKwtGchLv5aMm4eP7po5E3LiefTjKwQ",
  "key31": "4paNuKYuRigmgF61TozHjss8AJRiiX32tqMB5iJNjMu1enz5NvSZ1gVghpjNeBVC4Qjqg5HBXLCitcGrTpikS87i",
  "key32": "EKcwFmwSwsveFW4FBX4HDco1WgyaLFPk4cNfivENYTBZyjstqm4rL3CRRSVnF717wpwtu9dkHh2EK2oP7FKgpJw",
  "key33": "3iPCtcq8yHRG73W1UNY71qJ8g5GEwVckdGsN6TnpbMWWiCDpsmFD6b5spyMP4m4ykC6YtgZEjvuAeLREzPf8v46J",
  "key34": "4nhpRJd8PeTXSnxCzhJoXURTYKwuT2r8RyLghdCfK6bSRHpeZe4HtMijDfXmyRHqmf1i7Hx4b4eftrLzWX6vFqoF",
  "key35": "63vXiY7DQJGv1pzUU8AoLW1c1PFGDJFAMC9P2pda9Ujyt4QAzYM82oGQuhEZDvyU7SAuhVFe15ZEJHNP8q1NFKys",
  "key36": "mwPaPy3zBQtAEhYvyNsqdrQ7arNxdiQ5Aboz1YmFUREfCVJEhockuJJNFvwgXESzkhQ7gedXRBWy3WoiKYK3aq6",
  "key37": "eGG3Ss14SUtTFyxzWtvGPt3RCyBj7PW4fJgnw76gxoWwEALbtw1FNUThm2sRh6A7a6YSvNiAFzF9U6r2mmP1e3m",
  "key38": "54NdPuEDxdKjBfKAtjAa75BShrRMSXYTwpC1snZ3zGc9kSrMhHJiaqZk62tjyemrTuXTNyVnzqje4EtmDajask2G",
  "key39": "5n9wqaLW7cL6kyEgVkd9gkxnKDwkrRcHfmBrrzSkYos9QtnyrLGXadtgDgSDMKF2ZojaYNaQvmSazwxTksLDJq6d",
  "key40": "18EDK3GZPN9cKerC9XuVwSoEt4awhEjc8LuazChVnPcEnCDVwP4YdomGev6g1qc1bbuGjuNzZfnwhM4ihMSUuRN",
  "key41": "AMTVgR2Wcqdrz3XJ97ZGEqn5dAcfMABtpwiBn77QhvwGBonqRNyMAFig4G6mmbxeuUrVQTErkFKQk1z7dwATM7E",
  "key42": "Sdpsc8pfEacCKUZjmQPKCXN2PUZ8shitJcuaTVxdNkwFJGFANkkDeudiWxrA7574CdWFGjz83uAeDTBk4XkPthV",
  "key43": "21dPPYdo9MeGKnx1ZUPr7cELsWBhAnSMfWc3Bzcm5VhBvBdZpk7nMNfasGLEwMJx3wALjPZzWo1ujxFw3UtYWFnj",
  "key44": "4NvUebK3Gr3mnoijADVGrnEzHxmFvunG6vJMwAUKWAdwMGrmk6LotgGmByX9wkb1HYR9JbVMwf4ktrSwcQA3DEv9",
  "key45": "5LAvpgJLUN7PFg41Q1pd7uCGJ6MMza7soPkiP7nbBVAeudseb361A5uYcEEYM9bRAgqen3wyfEFVQj5aBT16t8r9",
  "key46": "vnbsSUmNeM4TXfugDYvu2eD9uMicEChbK4anLnNBTojp8BTMS5gcWNpeVaHvxA7ScP6G2DLorakEV3e98Tsf338",
  "key47": "5CsSD6wASUgRQBEhkXQGxBBYBBvUmJURxZGhok1SYkff6e4yGfWAanfLoVcX7KsQeRhGv6Vz98maV5pKVTamB691",
  "key48": "4oxfJAEiaLN9gxvSxsoRffUxAUt1Sr6JYfefM96qsrivkGKyFCTzARijbLgN3wG6wtRHywCur17dZUKVs6kksp2L"
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
