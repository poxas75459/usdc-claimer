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
    "5LUm9GXU22K4zktjnuSqxJgpgLw2vcpmHPCjH7nz3GWWMikEERvyH4LRoXWWmtVSQpqytHQx2XYxm5xyyQ8joXPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mCf9rBfgLyvnDxq3q9NRLp2KbhsxkS8rZyN7YaM2Qht4Tj8JYgkpxfubiWmEKRVsk6cwG3fjg1EvDV7hLwgZ61H",
  "key1": "64aiRwHVSALwbuFgysnDCEt1MuTqx28UQF1fN8myaJ1KMcyx9akJTVgqyEogT4frjQ8ehS5PM1VYuk31ZVrYJQFL",
  "key2": "5dmUq2ndn1FtgsLSqFbH84yhR1tmZtF4qWwbK61svAFhNPT9ceVyJpgGih8XVZGiMYtx2bycScmnQhCSnJp66Snm",
  "key3": "4PN5z6cL4X9DTZrq6Z9BZMgkXVTk5bKDgpKDfWVULqq6Bhns233ySL2Pa76N8j1eZqtz4xF2TC1npX4vawphw7C",
  "key4": "21tHQzzTBJxG84KnVS5HF89yA5aCRhRu9zd3isPL2GrGNJJ8fVpaVuiJTMuqda6W5sC4GiUsN7q2rahhPQYfHdfz",
  "key5": "dJv8bkA5E8qdFzVELazcAsv9PLDQkkBbASpmRzTKx3jz3ZM5sJLh7UewCQmpwTri4u9ocPtDYkUtuAbKgvKJWqe",
  "key6": "24GntBYoFy4EdvPnUmwk82npKMNvDMpYXszFB18BzfqLmTHKJggLv71QsjdxZD5CaRwZUsCZvSpWHdMbA9ber5j1",
  "key7": "2PEHE3knLuEDQdYX6jJW7dNRbcnscDKiacf3d1m6vKY2yHUisU3EE9bnTfrhv6qMfzonzmCzqGACsSgJdzrKM32i",
  "key8": "96NDiL6vaZiGypQdf1J6FooXNitJL9RECGhbgfLfMWimaZxyjHvyQ177C6c9uWWehZCfYQ21WMYeMrgPV2F3Qf4",
  "key9": "3C17hbkYdH83t4uZA4aS1ac1p5wJSmtKourHeLRGuFU7HBJLQJ4anuM9piykArWEUkAwgJjU5LMWjGSzWjYt6HdG",
  "key10": "3gYKtUT264ihcBeWGQozR1skkC3BwtL1WAh7ynQhshUZA2M8e89HHwFrTQVDRYMahLckXL8q1AMpTRp4U8G1B1Jb",
  "key11": "NeLPiB3GQdghwgV62DDf715oQNUE2U9p2qiqM4no9bHx8EgUwu6ypKWyjXMDUYxASP7Enzdt593ZAE2E2put8qn",
  "key12": "2Jcckto6qaaMmLMK3Sb1wTg5yzR1Xy3353Vau71aXaCbhARRFboRChWEUzYpifomnjE5RBJcPBYvg4t2a1vphJUR",
  "key13": "5vqKXSEBTnEUUWy8THRvznNgxhkPwwoeUze6GrFTnaKVykG4v9qd5KnTAqfadQN8eAJJveh4xMokdnqHdebwTvLf",
  "key14": "3ZGXGwqg6uGKhdVT5GGyjuEjnGG6FPWThgn8ioFZCPPmfLjv9icXkQ8eEFj7LGV2iRjf8jwbLNyV467kz2GxtTTg",
  "key15": "3QfY7v1sU3AHyDgYVi3Kx9BmniUSB7Z8wzsg1NcQ5yDULA8vxM3LRvSLWKejdN6MMEcFNT7NJv51kV2LyGysMJYh",
  "key16": "FdFWkeLz1nnGGTsXSXnnSGiSV1pjMSDthuYrgV9gkpraGPCER9FPkbXVRXY3eaTU4Nc7pyA9AvtgKV7AmtvK1Qs",
  "key17": "4rUpxh6dWbtWAVHdbohpQ8owjHf1eg1a973eLRugiGz26vEXh7VjgcD2tiBxTJgV5tjH6h3YkSHwfrj2waS3NnjK",
  "key18": "1wm2oiwnYi5TxWe1p1nbdx5VzHRikgd79VCiRUj9FX1akAZdhBYYRjwJJVGNhQERDdtoPz6Q4nQ96Ra6WBZ9s9i",
  "key19": "J8GJEDfQV75MvCDWDrc1cgFL85AB2updv7yDtM5zdkUBbq52JMiZpBX8SsHTcWJxABKnPVbXDdSV6B3uGKxbCv1",
  "key20": "34JzBpWv2vBEK6kyB9mkLkDdGjbUcaMByZsfA4Qdx1ZcTr99tCYeT46HMkzurME8jdnLSh8G19Qwz4wfCsVimMZ3",
  "key21": "QwkvHc94yMATXPMgozoxHfSQB3tzJzETAhm1bAfyc3XZbjhnJvbeMgpFFd7shBZfo1rQnpz63EmHiLkrQkmVrMo",
  "key22": "3F2Jgzx8ddiAajgR4YZgnaJ8uJ2AgGKFSBo2cfDBXiKm2dWPhRzigUnicadRjxL3ywovTEhb1hWVjpQEQ7s3PEmy",
  "key23": "3hLNyAdzkSH6SpRLBuvHXgpiiP7BNRVmsVQDSSnjKqvZLmYaZNbBCbSAbVm7BGY92XeEyAJNzaNwExkyPLVtMosw",
  "key24": "nSidFbb2ka818n9s8EfPsnpthpa4eN9s839xVr3LbGX6ZhzJpugtv63rurwaP4uoScKboC6M5YRLfS2a9TjnAFk",
  "key25": "4CvpPQHWv9u8DSqpdWRRChSjzoUo4vHkvghFBK6krg9vo1osnQTdoWjcQCLejNoGBZCpfvGysJviwPZoVQiQgqpz",
  "key26": "3RAJQCyMbdYBYF3k6JB6JnHEmbrVzicUgnuoyiKFWU7r2UcqctZAgDTWXjLENRZjwa4izuQb12CEJThsKVTj6koS",
  "key27": "2yfUoZmShB2hBBTq6qWJzrVxoWKk16LatoPenUUiH6ygKWUBww58ufuqpPira2M5r98gCudKdSbVrF2E3sZYN86H",
  "key28": "2qAGWw2v7iuGgsxDgb6yRdRsaCVeNAWZb3rKxLBRWKKcTy9nLJroP93baTuBx2bcbPFvY88tCRq7AUWhCUEtHtXx",
  "key29": "2HcNNSZU5qg25h7CpehPenAnH16mxEBNX9VJrBiu7utfSqfowb8jafLPk8iAxfqUGxE9BkH1uptVuhwi3mug6yuv",
  "key30": "5xNaWPM3pBu5EnMYx5otD66g8pdEJmZCMEvHJ4b9JKExyYATNeJnHhCx6v14B3T9toHcFQELkQFqeZ3LnT5qqc47",
  "key31": "2itCDnPHLbyoYH1V7HSsQFPP748p72DFj4tYZ8aALdKJPtKewVdAE7D5CmacLtDdDFxxH9jxYBYwcNLbYQ17Ba3t",
  "key32": "3rLWQLapSQDj4w7TMZ9nZzhetCVc9opZ55VUsEYHYWDCTApQKnMfVJBcHfULNW4QWR9WktUjC4WRorLvV4rncJRu",
  "key33": "481UGc7QTRaCpvJdYn4FCwPWb2zzXSrxb8JNJVTinmF7LYfgGMsq8znmbFZwxALe2TyRqPfi2kQ4kUwnkzwa5ewR",
  "key34": "3vHnRBytDjCY6xw176cx6N87rhqhoREX7nE5zoqrdBQMsuzm7PmpiXDBrF6x1PyoypPTF6o3TA72tJ1tU1YPzYud"
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
