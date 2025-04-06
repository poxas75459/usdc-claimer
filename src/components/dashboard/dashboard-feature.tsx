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
    "23pCXMRfjcjDn7FSpQMDmNAipzfyYcUu9Ed3cDaQURQgJaiW3V3gdKisjpvxXzRszp4Kd3AZhijvnf79c98ueQ29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkskqKJqciFNJyzZuWuxbrAeEoBnuVu3PcRxn3bBT3PWpHpoSGT5Zhj3h25hQtYfBq93v3FtAc6CGtMfveve5N6",
  "key1": "3kgi42ooLknzwDxWm8WajVQiB9xcURikR8KgCbUWtretTM8yjrVEJ13zmKpxyoG752YEY9piuJQ9Z3w4AzWAQ6N5",
  "key2": "3YREUkQ5ZGkXmTJrxJBkCzSmSqkjGgdS3FRcPHr1SYZrJ3UKB5zYxKwUyFJejBLRBGdrwF9e9cozZ6AG2kdYTchd",
  "key3": "3RwSDxorgnmv1jxfJpQUZGhoidsLw6upVMDcTTZhBwhPY5uC1DGn2UxNZVeVUTX2Qd3cvPqQNxWBCZNeqqMqRq3J",
  "key4": "3xnaDdebzzBQwefghputF9NYPGtM2HQSz7XeLTwHbasihXfNTT9sErPqrLmtDqTbsSqBFjfBTeNpxofRCHTDXd5a",
  "key5": "4z7kXL6PcqJXWWrQFhXa7tzwHHsqJnMvAZd4oYtvXRDWyRhs44QiacKi5CYaW2NEwasw95q8EddX2TAjCgHN4aMx",
  "key6": "4yJEd8yDkL9Z1u3pYiqyt4rR5YcbhYfxDvFYV4eSS5vGWF9y75cxXsAGtRF5V6345J8tWsjXDP198knSpobvqzhq",
  "key7": "4J7aMH1FbdTHYXSJ1e2G9seS2tpk5VLBsz1ZdzMo4Crr1dJtKVVRsdwmnY46o4Sy4TLokURRZVZBgzJwTSo6sBjj",
  "key8": "hM1DUSRCeehpy3WfKkH5Rkek4MtxDWwMnYS1qsWWYrMUJdsCZxwSaobnFPv9Spipibm6h2SzUDUB3cpXv4v2map",
  "key9": "2qFemvX7SfbXVw8PsbRt91obAm6dH3uUzEL1GmveP5r1RNUZf6d5UaKLfnmLz2zKTZiY8Yap62PTsrba8cZAeGrg",
  "key10": "2m1VSRBmHRgVRmg2Ye4Ng9gWCPUBxj3gQ6TprowzGoMCmczyauDCrQbN6pUqzB1C1YpNih6UoMSHWVdvkRRTodYH",
  "key11": "4Yyus2QU9LHKrrwDFdzJD9oHCcJBHpxdDyYQ4aSrn7RvSdXBAdKrDRfKmQdx5X9kCCUH6cR4z3wXNSU7Yrn1bZeF",
  "key12": "51zii9zfFzKLC7rDTQnQ16PPiuxucFtFXciTjC6sAd9rH6k6xfXHuinQMoL6GYbatSws7KvoBo7tTEs8XFanyuFk",
  "key13": "bk7yDU3R3Hfhf7JSwa2AhLTG9TZ3USCDWxcgdVuk3S9kKMH55EcVtPqccaBVgaCZdTnEuZC7Yu4uVh2kWgRkEzi",
  "key14": "3miktA9RaX1ntXjp7oGbtJojfp41SX5tjwsxTnmqW7dXXaJmBDXRVqpjTpUHv5vxKeK41fBSuTrmmGKG6t82kMei",
  "key15": "3yv2B9aQzKvTfiyLNfBQ5ogc7WKSg5QpC9UXckBdrCn3Gj2P75ze5xZFbjtpFRWewJv6s48xktjz151Efyfp8A7n",
  "key16": "5iBETzPVcX1YGFkdY9D3gpJy3AS2TNd2hz4wq6zjcLeasVJQbAmb5HuwkVN8vrAwiYeNdicQqyoyAjU5HpRTrRJw",
  "key17": "2Zp4zvPucESCWduogyqfx4nKGzN3FdVsBezLzxfQxcbFNsLfeWXARbyJpJur8bUJaYKBGtXfod9BW4U1ovLatD61",
  "key18": "3Wqzvdb5tZ8ujrxoeNCWfgvAyANwwDP4qwin51YCVQpmunetnbswf6RzP3SMB71S8MnDXrxu7TjFpdG2jMTus1uZ",
  "key19": "4W9CXXhwxgJH2PEJ6oNmUZNoWGHh1MHQLfEixCDymDALUp6RExnWeMUHtKm4eVC6gcgkULhp9RWxVmZTdVAC66Tb",
  "key20": "55fytqc8vHa5LpCAHmXjF3pwpVUYqmtbp6fX7C2WyaaCJNb44Sy6QJf3wJQuAzBAmfrWj5Tpn6ed6EvZfhdmskQg",
  "key21": "ipfwQwWADDW9ik7TxtJPdFwvaJTDYYYrTgXEPQiJk5oLifXJhzwMWsNUZRXCakSpbJyTcpZKuZhUWMmsstz8iPT",
  "key22": "3p9z3gh4uBvEgiwEQjajMA6TvRtvmy67tYuciFUb5u8Xu5LmSQJMZ8JD1qyPDiCPnTj3Kq6sH7D3ac6xeLRL9mA4",
  "key23": "3XWxUCSTHANcDsRf9M4yjJNUi1usRBLrvuNgBudFDBZ7wmBjRwADCF5HwaLwcn2ayoCyEBHEoN91uhEYAnxYGuN7",
  "key24": "4YCfHohTi3nDEa6sM23AaYLWV9bQ62kDpt4BwgQrUJ5cTS84sHiLov82FVDiZcdF2F2UeLUJTg3ARsX4N7TkHwig",
  "key25": "42qx8HBHoXEdMHeAeAmdTLvizDneqYXcVMcR7EtZKUyUC8LdiawnAo7mtybbGaZa9KZYfB3DzapLhqoWM58EGiYH",
  "key26": "3GZ2pj722uroPVrKSnPzAyW1E23foTZDzCrieya7Hz3b8LDUBUvwhVbCJQgdCRTchMRi5hZeLifXDb5AqPrXFHXj",
  "key27": "3j7NGqtBz9Xkm87tyoxJW7E4Fbm2oECE7BmPUj6Kr283sbhWqQXUHoYeSuZfWrq4c8Z7DtE3BSbeoJx2SCdASsyN",
  "key28": "brwpWAZEUFEYzq8R3FKjaJgG2fNmU8s7Fsxd6C6KgtSS6KhuqNdH9Y878FUYP7RCPsffcshyLBGE2wgDEpXhai8",
  "key29": "5qr1LxnRqw3k121SvdZSrJ8N3HXwXwH8yjsuA3Jbc9YbErdXdPM52T7QUGDx9krsuMRiYwSd48iwcXXh1X3QjYx1",
  "key30": "5VQ96TpVTKEdU2V8Qp9pDuXWEmoSfErAG65KYwViA5fsqW4Kp41ZwxeY1qv81MN1TxpFN6GUKkmD3wWekR4ZmvC2",
  "key31": "3othKoXqdhHYQG4YGDPChaHo6VaeFUyFBMdAc8yYCSLSjpCQNGcsDaA5RYQq8xcM9SCtKTuHC2r5QDCC6sLt1FL",
  "key32": "PJkLMn5K5YosX4WFMqFj2pzonKj5LxqCcxDzWWzw89MioWYb3Z1DDxeCmpVFdhifWPaCEZKYCxEqhmC3qVAbRRk",
  "key33": "rqMD14hrqFunjV8f57zkY4NebDVD88MoF2eAvhNBjyU2DcxhRACnVXdDa3rGm1NhDbNK2F68EB75NvYwQNKjt6H",
  "key34": "gmQvKfET5b6A2DPiUyc9dkzvFZaeKvoE42Chq5NdypwSdzKC4sZ5CgiFtByxehCywVqXqtFcp7VNFGoLtgFXRVG",
  "key35": "2PXbdMb2NSyqkHyJf6AUhuJU7zKXUrWtUxR28D12fT9ZHSfXitnzmWCTy39irNLZ2nmFoYx1uRs33dTKEUAzZ6ct",
  "key36": "4P8uBcRBpHqNW38Bd7Ns1tzp4SjYw1fGThgMVFDJ4PRckwtFCZf9q9LSQKPV9VeYtQ9WiKPG4YZkLz1wDJ2Y2j7Z",
  "key37": "3mCwEXWHms6wmnri1bpSo19jfVPBqoNjuRqfy1c5M5xs6QcoQVQM2TXtkfXSUmnudMybWmpETyj55anWfk4HqD5C",
  "key38": "4m9ExZiyB2whjrDRa5uco1GJeRnpaCRKyNq7ydc1qoZf5HdKuN2xtDBrV9jnZrSU87dXZ426Tab79mN2etcx1Cob",
  "key39": "3Vud3Li66vZeef2jX8jv9GeCNmonJY6LYoeGTBfUMJC5cjXCHkPU9uiQKoUjDEcYZGrHCa7LBPJkFcsk7SVUwFLb",
  "key40": "58E44sT9jbCKtueR5z9n4Ad2PapH4CQ31FpHN1VsFdvekEcbMy2ofqdEb2oeWp6Xv22UgLtm99hL2ca8cG5Har5g",
  "key41": "5oWh2VdoQKf8Txs6FfWNmtATsdQGonHKXU1e4Z6r6DuyHcaM7zaHvSQfSyHGgam5iLivdtmezuKBHiCLEtUbVbui",
  "key42": "5UedexcXD3Y9LDi35bFHt7L29sjaPheCg1KHXiThpU9SuZLetvmqbqUisyjgVABCWHofdFnVv7Wocog6NqKJVCTf",
  "key43": "2A16GVFspP1Jd2zaCQjyzWC5dF4SGR6bWQU5QKibMqVd9fukqhrQkQMc8Kq8rcnYCLHuSDi5uXpPfJfEdAwfQU3p",
  "key44": "3bHDscN1YTt8d3rDqtZarBfUbvpDRgAZwGfdd9apgLUtA6eb92ysCF22n9CDEGaYYNwVJa1scf16NE34q889mEMH",
  "key45": "2PEabkKUo8CgULfEPg61Et4cRuu6Rqw2nU87m3EUfu9nfXum1278A6xo4b6BueNXnnfPo2DryeVCs9zdSyTj4GV8"
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
