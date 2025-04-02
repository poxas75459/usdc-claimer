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
    "4QqLeQxerBPVJimFxfSK3JtFgZG5SQvjFoF643wKCcszFsfk5q2L5nwvT1nrtPJBxRGnzuDrCiwWPz8YKonm3oxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bof8rbZC8Vn858KdwmguFudwp42QZ7qoEEUQEtZNpoYZZZ4oAzFYEt8j6kSc528S67jM8iAbS1TvKcLUvpdK4cJ",
  "key1": "3zJjTEMzzAXPCC1uJVLYeWLr2BJ1KYJNqvMGxHMbfAQpm9epB8J7wFLS4AJKeKD1b5ynmpZztDz5Z1Mx6bM2q6Gi",
  "key2": "3xRwj5A9NrbdNmbqGFzMyuQs64UN2ECu7DZhAJEVSSNqm2VgtUSHTNg7AMWLDqqoPvzQBhiVeKs4FL7vtVNVQ9c8",
  "key3": "5eEfGm3rHt4Wk6ML5tjzzRVqPiqywdjeGD6pGqCv7vEPcpDBhZks7dtjCiPbMotw1fPxNqyqvtJ5HgxZjovHNqc8",
  "key4": "3gTpzLET54hVAAyFbnxVmHjQn7p3bCDUucHdWdfsgk8NmK8EoUyUWBbMbbNqpHXxT4kteEypMGJdUuPxB4CMqgqQ",
  "key5": "2r9ADRn3hYqMF4GsX6bFou9zxYUKMPQeeXChXjKfmkM3LbBXsRN7RqD9A4TH5mQ97SruQDcRVLZci3s3rm68Lo8M",
  "key6": "2WXvj5NDbeF8sRbbPDKo2NdFBLXcP8TK8ZT5ikDJ65maLNTza6Xv5SFNLm8pJtuM6rpegQrAC9HxDUbPse2SqeSM",
  "key7": "4YGHS3AC6Pr88Xbc376ZmVu7fj8TmtKbj5H2Q1CNVShA5UscPEZhMYFnw5VAjVJhYUYbxeZqGGoVepMchBHac3zh",
  "key8": "3mWNNxrx1JdjtYEREo9ML3zsMxb78Hg1h7MLCdW5nudv2Quq6eLMJCTap9aAXXdQ66FYsWd9b86F71k7s4mUpb3y",
  "key9": "4nubWtTe7EnCe4SKwrGyHRGFv1xy97sJVTpfiCYjjjFzzzXpc2t1jaMguSJUN3ziXnz3sqbjN53TyPwb6kuf6FNA",
  "key10": "3SMTcmzkZexoEtRN8FNAQKZMzgj6Tzdx77v8nRSZSB5L4dQM8niNRZk3kH4wbcFgP9uWuQ7acZGQAR9LbAga3ads",
  "key11": "4JPvnRgNbnz45wF2qSk7XMxrsQFSayx5u1Mmf3gHQCVhdfBGCQcoE9smLQUwVrmg7UkDMPsW8c4HxATJNBkprJru",
  "key12": "52BgHjfWVjaj3wfNSpEy3hns63Ad2DgqG8nmoWKr4khvVzDCuxcFqxxY3TEXSdJ3LnYRWyNwxoEQogdGmjw3g4AT",
  "key13": "nmWyABFzRAPNxNLu3sHoJ8M3N7z1vgKkRZX7Ks4Xv6DFJRWxT53YVD15V6gBSB82NFDVLhSh1mJZNy9b5zMaELi",
  "key14": "2h4vTetyrX3swQ2E48cxj9cNboXqWuxPdSCfW2moDCCPwSsdPoYvBvWaWdK5QoJWzh6NJFWoFRFLAK3bXDpLzq1p",
  "key15": "62TZ23vJDUtGiUBzcxPL6r9JbVgXYbCamGCXcKvnvE1kV3p9rdLdUaZBhYCuXScxPFeUZW2SauR5Rt5zCeafLD9o",
  "key16": "Vif11fM3UqnwgqbMowTvuSwGbKtFpQtiLfxDGJPih1nwQ1CQRZkaoVB9YKDgnYCKrtJXSjZoGgAPt6K8M1Lk4eU",
  "key17": "2tdmE9Uy6Bieg1hrDFvv1jMtY4SWyT6e79ffjndoGktDKhpdKVS8wbZsMCy4Fh3HDkcPAxmB2ejVPGMczsRneCMu",
  "key18": "4DbJUupRgM4tVtzHWoeoCERRfyy4WyAXtUhFmcg7B8BAWQ7SH4277w2LNgVv9DqASs6EqmtjZphQ8KFYtDhH8k9F",
  "key19": "28pDpipVH32CTeeux5zJCFSojL25y9aHZr92qrr2fXy31ZU9cAQ68vZVmEdRncM4oUuRH7JioiJmoP38YPp2oTrE",
  "key20": "49DWU1oMdPj5JvRtuDAH9RsWQfRABk1AzPPdq7adve7pMSM2nfDeV6MMLWPS4fDfTgxzRshZX5PpY5zpDMXza2Tx",
  "key21": "5BwoGCPBueacXNRT4rBCcfuyc2TBVyMZ7PTK2paKPjj1q4tSWde1AUGCPn97jrGiUxGgoMko3zyhG5s5CMatmCSV",
  "key22": "2kcbdDQE3SSvaUL7Vm5mJWehxWn522GdxGZqFwZLHCZ5uDiohTggGSyse62nWehMfNZyKUJAaaJ6Z7HBED1Zw93V",
  "key23": "62HdQjsgoLnikLeYoVsGVHPWwiramBtFPm5Knk8zvfTTYHvevp1q7K6HF4x7k71igJnFRsedNPZNMfP6jY2ecPuf",
  "key24": "rTqLw2UJR7r2fmN2rNaKNYwnHAaX7HfNUHHkWJhM2bja34JbGLf4EnW3ANULDjuhou3k1SfhWni3bdiMwpo7KHj",
  "key25": "4e5fgQRoQQhf8GasorHxQSUTt1RoPDVjbyUBYv4tBgFY1zWMZVFwfLbHbDa9utBCjDfJG6f4vsXXekkj4ztsV1Vk",
  "key26": "3Y13nxeR7BPX1g8thxXmsNwdnZcrGBgAnyEU8rANwevjCAkaBzpM58PXjmrP8hBr3Xjj3GTBjkv1hCAiWj8x857h",
  "key27": "nqoT26MujvHw4AaUBkf5jRkovKBgAwdnHhiKhFkm9AeRA4tKGu7uU5wTdVu4Gqs5cEKeEF47mi5nFkwRdaqPS1X",
  "key28": "XFZh6QMge61WQ7nZKTSRoa4dxNDSd9NcEAkPQp9ApDSFpkM9krg2an4tahCz4vsdDREz2sZjc6FKpXxnVfALeJM",
  "key29": "2nUqaceKecHKWmukKwpoZnHLikxJVZ2ggi2h9ozzg1KNkZmSFKY9imL8jGbv8YC3EkQqZyqNjaSjVrkE3U43np9u",
  "key30": "3Ch5UqJuYwza8yWbktmvPmfuctpKdMedLyXxXKCKE3n1vTytBys3EnkLPo9tWLcJZvjcfA1gQwaPq8TWoJLEciKZ",
  "key31": "2irqG2jSJX3RcEDqytQ9VLJjMYpLKZx5xfp7YECsEA7eGUgQVxHsfHGMDGLHDPQi37ei8WfMS27C5yd5VZfUTtyT",
  "key32": "3UGNVs9XCb2U3La4c2EBMiCZEDk9KUbmNUcW75paXhi6EkbTGePrhbVKgr2XZfkcGwzXpA12k7LqcZLChkhQqKDB",
  "key33": "4xkJLFBVvtTcpJ5CARAA7bmbYfRDDPGrhScFzcKz1ScorVArxbBzmVswnociebwycNjiPWKJvsNYiS4UdXsSckEQ",
  "key34": "8nmrDUbCkBC8eCX2i2DxXxes5W94ReesKtZVaC5ZLva2RjmhfLqmYxhzJDDq9uxevKQrm3RMH9aWTjv2caqYC2A",
  "key35": "5nMhWH9mZRAP96TQPJFxqdKZSN5Vhop1G9c9fG46YHFg5XWWH6hiAR8xSHpcSqrA8VGo28Wi1PxShiu7p5tUrE4V",
  "key36": "61zfLHom8rdYfxjqJmwTNn64sAboEXhZMs3w2sCS2uMugM9VUaH45A1orMt4Hgo2Wtrqr2hcCpjBsxFf2e5zY9SZ",
  "key37": "aaoz9G2wVgatfJe7YSrEPbVDchSUursygvjH9h7HBpQbvscPQU2NhHRN5T8QD9g5caXSDHkiBgecJvmhqMXJ9Ci",
  "key38": "2JfrsTkQ5zKeQmTzJFpaBtbYzUU85QqqxXstsDiDoo89k7pA6waj7455PW6AqZHJmDB5AzWviEL5LL36fy2BSPvK",
  "key39": "2i7C4uAGSssFKXUSVUaLTksmrqJgzjCXxeHhyjKponvbEUdcdKxFwHjutVLnkCGTzcawa33k5iDgV85xiQEv677",
  "key40": "to3ZVfN2gv87UXpEuuC9fehWRDdDfqcHoDsZ2wqwHN1QL4XgUGLG6A7zFmJUAu8uvJNwNZNosryDdC1qZ6yrXXA"
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
