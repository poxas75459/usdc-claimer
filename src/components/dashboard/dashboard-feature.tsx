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
    "5KZPzN43vD9fTQNskZq13zEwY4wVSkJsX4Xywti1p2zHED6EPfzxrpXBtQZWJYdUrF6utojwuEAd1r7HK2Ry5quS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dC8P1hmG4zM3TzQjZeiTkyKWaF8YPheBNY2v918fULhHBZss21s8kwQJgf6CZfsS746YdBVWLjK7tVGGaQBDpHW",
  "key1": "2ba3W7zMt548RAScZfn53Zxzsr81Rt88jqaenBB1Xf1x49tMe1ynTQtfKaxZyKDEQaJz6f3Ugy7RrL2KwRkTSh5Q",
  "key2": "2FV2PA8MLg52chnjJgd1j34j56j7B2V5KtpeQKiUzACbrGLYoMHzVbVHT2ww78P7nTvLvtcZGrXq7ojVu7d6eKiw",
  "key3": "2aPUmZMfLLkxyoiaoMVmvEjAm7HPJtYweBdsRYPVKPWtfvjQGLxGuz6QswjPThbyWN8ytawksHVH9g8XiDRfcLFm",
  "key4": "5SWHDmG3CyWPJNgREeNFBVhQEYekqmY1NRVs3aKjBANuLsT66gnL51E6N3bhZrLD8kvEVAyNqiSrNedMq3Ux3ABc",
  "key5": "466KswC2U1GoBZxvvmpEU5SpjAJjJGbgmmuFsv4wpTFKWWkSDvXQhrA2p8dEAxfKUEkGUFDrtSgcH7bjYVxbqEWH",
  "key6": "2ZYpHXbtGqMQnjfhsN3Lo7YAzs8te6r2Wyi7g68NXaFYiMVxcRNAfMMZcyhxsxyzMVcoXPUhCqmYHaMFwyjXhBBL",
  "key7": "46pi6HWJGfZoDX4WneRYnec2zDJ8x38BLwYWMd3mWZNXB1FrTYZA2kN8Y8zrQwxzViGydUJ15KUKVtGFe4YGQHWU",
  "key8": "PmevKRyLVYyafGsDEht2bxS5xjpTUPVbKtxuh6XaKH8vfxpbK35J7WsZpJfycbyuTTMbiySBB8o2omDXeDGDTdW",
  "key9": "32E5n9nM2zncz2Sdm4z7fk9HeHmMSVDCAw4V2mtTgyrXncWkPwLcP6riAQTxDvvTyaV9ygEtpAiJa5qEn7J6qvzL",
  "key10": "rs1sCqzfpuWHJAvbACL4bshXLpqp57CB9wJq7HcysJ6y6ByweTmAsiirA8hs3rnU6awtzVtwJN5JFekMXb5zbVN",
  "key11": "2iEsj5XDjzNiHdMhpFmLVLywyCohAzURSwQ3nKMwgKoq48YkABzo2WZJgQj3M7cu3Ji4SXpT91VxKiXSJA2ThaAf",
  "key12": "SLYvuu8aCwb2KW6kzJ1dgyLi5RM7msLMno229FTDJHpd2NyJUog3tALYFCoXB4f6urSM5QhDqFjfDe8cndRL3pd",
  "key13": "5XcSEMjUyvvodS3QFkfixVgpDREeit1JU7d6ke64qftizA1RY7Gss82GygwL3EVCZMv57jVXpAddruYnzj4cymLe",
  "key14": "43pMt6JVtm4a1K8fTeAcRbHMH58VFCzY1qVfRjSmsiYHSM5Q21xQDNXCs8JLRKXZMc3ZYVdyaudgv9fjwY1stFk",
  "key15": "4DfRpn4ykaCMgmeyHECf3ce8G2YntgCtvzVudF7BtaztwcwimYzEMussuwRrWbdJSrBLBzjWrnM1tjGnhbtZ4Eht",
  "key16": "4CMJzZgbDGserVmYtStQkjVckDqLZ47xR2hg9UTsM8x6bDPx3FcywenaAUioqtMmsS4kTz4ffCTiLJs1z5J3xcu3",
  "key17": "58JHX586Yp6Jbd73a6v9dgxGdX6JNhWnm5hXuyELBNfRc2bjN7GwapyGorGjSJNx9KqYWPWaYHMd2arMB3YHriaA",
  "key18": "5VXYCXLXWcR5A57MpHV1KYXVEujScShApGL3GjAoR2eW3eHSY1fXUJ4QTd7hrVSDe2Hx6pVPCTvEqqinDdbKxiqZ",
  "key19": "4ZXHto6szrpx8TRnHDAENmM7MtB3KJi3KBQbSs1wV3x4SdM16PdEMgbswXDnu94X3gxL6GrQsrKX1FonCkFAq59d",
  "key20": "2EjrZbbmex1WSvfpYZ1Cfjmhg4232ibJowq6rqs5qzy8tiRDvFPWCpkpnjBvvhfp2yV1thDJtSqDTMAXKnJ1n4dY",
  "key21": "2zw1VCVVUNwGMksqrDfMhFQrdoQJMGVdif3EZFvD7YfKw4SLGCh6oxdrFBFJwjcTZXFu84XG1Vigv5LxjcAtRDR1",
  "key22": "4kKaqGydbyQkLkF9jxGnqAw6SuGjcNGF3tdk88K7inmqTfatS3scMyk4uAofMdUjTfKp1YqaV93km7op97wp2aGw",
  "key23": "32D5943P1BvMWUF52mi78jhm83VW78CBq6b1mxy7ysW7WbcrhcpmaBw4RpnYFrfzsdfWxR5Et6a9eUbnyEqGeo4Q",
  "key24": "5pqbARk8jnbviMxDUHScfvYiGBodsg45bxkrnbjZTMv6bd7qrdYsNtSA6rXyEmovhcNHy47Z2RzWmoGDUsLbqnce",
  "key25": "3PLFDHYyV5AL48Stw8YT4LEjhzVAw1tRVHCW8gWDxAeL3RFoFAtSnh6szKVXsd7ENAWuDuTg9u1n7A4GBE4rS2uF",
  "key26": "2kFPbzPzEUEAqt5ij1ENB6jtszXf2DiTtTFX21rsTs94PLtbyMWuE6jfFADNuqdFea3HA5P3bGKKFJ4MXuUG55Dt",
  "key27": "287tDht9xtcfDEuZqwSo5owDFHudXJP6dWxqnBU9Tc4C2kPMwQhoyLicbfdnSpSCqX9N4qyqzeFA2yXLiU5VDR6d",
  "key28": "5vCmvJq2KVf2K8NKmQjFw67uVoSYtjdihHduRAj4YRPf4soTVBdPqjWKDc5K6wZ7Cbq2upE5jg3J2AJyFQWZT9en",
  "key29": "5zQxwFdq2gG6PVvuF3YmG1dqUmvdj348Fg4sFA4kHsMWgZkhTiT6nmpmCFwJLVdS7PsGExX17pYBU2xifPjhfwLm",
  "key30": "5Rc3iJoKNetPPxVAjiZLztdUEyV8a9evjrMF1qn5v1JY8dnWd3rtUVeHz3i4PNms7vBvHJD2cKBtuvEVs6tfQbQG",
  "key31": "3Wzo48U5WJGzkwwYhNaSYjsGQ5wMPk5L7FHJ8kpoNQem4BczGyqX5p98HhoLjePkbtmC8HzSejSPoXFXPnXh9d2E",
  "key32": "gWSM8WrRv2rRTFAn5g4dPvtPqW73P792gpAwAqMvVJ5zfK85LTD3aEB4CyG8C2vwt9ddBeC6BwJ32dyzjGMpZev",
  "key33": "4VdgDiyLmDfU8eq4BCCDma7WTJsMoNAh5RQkwkWtqaep5oBSLpys8mHhvKQDjDeQWHpRRvPKmPCifPmxEJgceKmS",
  "key34": "4qdQBAHnS9aFdYrhxJNcmyh6goYje9uXPmJ4RuNDQqp8L4mxWcCjT4CuqzQtq1ftr5QkmaEwV1DaFzrzpDcK8BRE",
  "key35": "65zbXEEUKGR7r6aDmcitYmd7ndUGcj2GrTgrrucy2NY4AqrhLmfLRRbv5zQdeJeE9me1WVyc8vCioSt58kL5ks64",
  "key36": "22BVmSQSFtjvtfCzfL3HpiZkYr5CZCvYxurgYqbde6PkfNQAcJRboMhZtSPxJkGBh7psDoWCvo1eEFvpviwx4dqx",
  "key37": "3xqZ3svFK3o8eJNu1saWYbyW5g5Lffex2XeqTDQYhq8FRrugsBnNXdKvAmD2xVaPBEvrxZAVJ5AbyYTv6hsijefx",
  "key38": "5p4noLk4brkzBXV5VL7ac7Lku4PbQqnuM2Rdx9QohVQGbc2jj3KTjozsSTqA4kh6HA3UgMaxN8Sz4QKiHc8xoyBH"
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
