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
    "5mRj3DQ1GvLXmkUU9TREv24UByo74mHzRngzcizqhfBnn8XgXD4XhJs3YxtCBmzjTDNpfMHTwVGNEcNGSK8LQEf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YLBgHTcEkaZUutbn1QYjfjMFW2JTBSEWF9VZaPYX8G2mRJg9xqw7CTBvW8jnttm4WJzCrQdjyLZ6penZhtnywC",
  "key1": "4q3zD7fuznsVbSHiuq98QnY8z8dHcfWN17SJ6ws73zsDoaP8T2KiEXDRQfsTgW7ECt3NhqEkJCcSGn3zRc8dUQ5B",
  "key2": "2tZRMgHTirgExBQXreRvS9jjxLv94HTwUtS4rFvY2ztvYke7mEE6mAcZRHT6TN11NM89DBh5h3ratHSwHaLUdZaB",
  "key3": "5Je281YDfza9nRpk5n1eSAp1oKxL4x2AMM8vL7Va5AbR62k9HdsCwp8nQ86ytucomJUTXUQN8ByBUS5XVano97c",
  "key4": "Pjmp9e7dV2PJo2bNc4pCsN4TyEXtAUbggH17V5BCSk7Us6M9KiHcRu4CUNToQ9YvdTKm1rHe6VdrNQT9woenV2d",
  "key5": "ZG1Lyxb4vT7wByd5GLkcnmydbL1oyek75ACe7yqtDD9nm7RjdK3ANbYRGGKX3hmaxgFfokdcNmjPkb3HK6hmUBL",
  "key6": "5muuRCeGbDWh1B9EtCK9S6PJu92t5iMDqqkDcBYE28MFqU6qdcgktrf1upVDe3U8dUanw2cPRAJCG1X2SV9ZtFX7",
  "key7": "5FVxKFkATc3u1d4ioLEhVSco8seq5HSmc783ugHckj1VYsjtE1m78maSFLRthEiSqx7rT4zcbWADoMMwhsd1PAD3",
  "key8": "5gsmDc4VGnBLSQmdsGgevgMGvnNAzsY2pJt87meiK86C7YxeTMd458YCqiAB3MzPUoaM7MQxnopgiQCHdm7hofL6",
  "key9": "ufmD8ANkmS1s7WioemhwpAUkUMDVCF9s7Xb9teFuFsT6fDR4rJmBWN38Z3j3fJpguPdcdVtwvuoGbvaSC29kUu7",
  "key10": "5YhEqA6JHf1WU36xEvqFUnApB4DdUcxCLebDrxhDSuTarhZ1466FXWrDL7rwc6t1RUFiSm8297rY2iKbxKMPTLyu",
  "key11": "4a4VbgBsvEs4QYE7WYGnbFPyMpnrURhksP3bYj1v32429Zaq7jbFZAzT2JxTwcwzzsMTiM5oDVouwb4hibfi8uUT",
  "key12": "3GF8qgc25NdS9r1doHQQCkjKPmmd9VXCUHZ1mDXEn5EbwWPg6j6RVqH1e1asQVCGzMhWKWkiL5TNRV27HqBn5xD2",
  "key13": "Jc2K7FgsdN6VRbtM8YXGZ1LdWwoombV73snMpZ7AjzjxGgukSQyqCLhmmiEy8QCMdoMgwLD5qLhK26dRTgYt9vv",
  "key14": "5PBfxwrK7BLEAFL6XNoUb2auwmjnXiTSn3SPqS9G4QVZ4onYt2JfoyVmsoWXgHbtR7EyLSycip5it27ne3cyk6kQ",
  "key15": "2mpweLEa7uG2XSUDs5ewsRcnhizDUWjbTJMGidvdcqt8jjMtdqRbxbZsEj9i8wH3PvFZenjkGeTRp5bAZrEb9DHb",
  "key16": "2ZGpaPvZExXDHBQj1sU8XtbQAZLspL8PP6KaKWMRmsShudkV6tiQhJvNYVQSoBstrJut3bJJjGEAk7zFNzEzt5U7",
  "key17": "41QjJLK6H99gDR54AH5RpXr7AHBsC41eX8kkTjrYB7fu7zbGgz96oU14a5Qv25hik3nuktE6kZR9WCCuyzFkr1aF",
  "key18": "61WURYyRH6Nf5sfjWffhBkTWu4hy2Eavam1Z3LhdH9NhAgMQX3vDt37JBp7guN28vhxcHkVShkz5K7Ad9kDtKHYF",
  "key19": "57a8YBopeSXErwGbRkDvLekoDcxVetvNVkmeGzKBhnahQHkZSVTRs5PdLUUUJxFJdWRPfS2DAeXiscRsNffLCaTo",
  "key20": "47gTSJZj1TyZwDq1GQ93g8hTDYbw6c7LKQT7Q1LdSwwoyHBgaAEqUSW7JQ8uZYYgT83odicAB9AZypaPcTdqvyW3",
  "key21": "514q8tygB9LK7KAfWYWXDZ4U8R6nuuUJM2qUuQNik2GgQqzSgbvmWs8aWaaWCJjWHDjmyDWu6hEDutKokRwYcZWm",
  "key22": "2Sc5Mij2pnEaRx1Kv419ds3U8mArgyzZZd9ZTumMyN7ecsZ56cxhdqKpH5FJ2wSVdmNN49tZqSo3RBc93mtfxWLJ",
  "key23": "AGMFGoAPgqSRW7kWe5wM15QRgZQ2KQhMVBerz62NPvBsJpdVtph4mvbkmDr3MAymNjX8FJc4A4eyxWqBtaJxp36",
  "key24": "4YzSqjbGBCCmQSBJgNkiTVXcevWw9yN1ru9pqae2crSPgqc7287JUtePCQBDNdeFHp6AvCd8nN5TpP22DRw1vc6r",
  "key25": "5g8sJW6ttYGGDh7fiEe45STBhsBgcEzYFGAQkX7NBhfibVs2nxKKKA5B8Ehne6b8B4oCMmMwE11FrAgiZJZrz9dL",
  "key26": "29VavfQVTC4S2ofYQnFuLqZMDY7w3x2VMgusftykMktXEq1X1QYWpDZQm6FFvKqpf4CQWFWy6bSZimKD1HVWF4tv",
  "key27": "4AKk6Z4csMdyLBJNB1kEuJ6c7CjM2GkKFg19YNgSSCtvpdqW8jmbAVkqqrccoSwUoeyKDefsEkE9JCv2xNHDXpuR",
  "key28": "3ArPgJQw446hxKaXZTHrVtSidUUgtbcAv4dhGySme5dNpYYNHYCVXuPe79KgViEDYgg7Wpk4GSUranxLZptYLEW1",
  "key29": "3x6MSaCajQiyxs6uXDQmf6MtnyDW6PWogjSis3ACQvmUhDtNp6tTegCc3vCTf3WgWwHoefyoXAj7evdafnrkRxJC",
  "key30": "2thzFBhiY2sJ9488M5sp4AeK3RUFLJt3Yxuhe42q9UcbcxZbUSSHCwkN4q1jtQCWTjyyFE1cswxSFEuAfAfFXfFT",
  "key31": "5wt8QoNrabvcMFiwwdh2FF7aNVxNreMKkSRiLRFtKWzjYr1fF1BsiCFWwey2xNJ6vJts7Bz69E1jdcDZ113pmCPS",
  "key32": "5KtDim8uGoSbwZDPv2iombwdpsEBdgdxhQYw92zu8WfMafNEuD5rzvJNYNMuroVYEFH45g7sdVyJn6LEMka7av6h"
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
