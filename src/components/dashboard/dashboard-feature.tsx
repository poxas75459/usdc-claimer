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
    "3FBsEz5R6mC5S9wU4DyTD5xiJx5erTMkpeM4TESRzJoe2Wg1fkMJ2BJQDU5sV7LxKQQVXys1DQW7tAxDraJ3cqfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rr1dGuJkppZhdmbehZtVw3LQGMvUgdXLMQ5e6ehEE13EqhDuczxNhj8StCCHSc2ukP9bbHXBzALR2brmNaa2h6Z",
  "key1": "jvBaXtAArboqAHmRSUHCX6fJ1kx6VtDXQR52Dy62K4ci9Degq4gF1AzpVRqJ9VYGE2ye1SEzwyqwkqUfFiwPdwb",
  "key2": "4NsJvBBDBZjQC3uHp2GG3yLAMuC7gAPFkxDJR3Lm9BvwaYEZoqCbMq3CnXnqMxcnyYdQwJ2wLCFJGjEXmvzXovxD",
  "key3": "5tfr6zqRgrNtdoaNo72NGaaEBr3X9SS8x5CfAReV5g4pqn9TDUemeN59nMGPBA1ah4MNbVeq743jipg8Pb7zVBzB",
  "key4": "5APC77teyWzEBtjBEuPyRz9iR98eN1Q536uztqsgQ4U6r3W5DkVoiHMSFFxSrv1aesDKi2P87Yv191pMZpEztXnZ",
  "key5": "66dRmogBVEKzBQAZUwtdFNe2LhY1K2pggEcJWYyXd3jvr3aCyWd6e32xi3uPnkz2xnwHFrsDxhwm7qvn2dmQQ7nW",
  "key6": "xxD9mm96pFYEcpmr5Cxdz3Gp4JgQcw6WhFSrNNWjvjDMJKBes84PvYsW2XkDXeYb4eLLy8hf5Z3kyUAXbmxXhRQ",
  "key7": "4FbehpEWWhzSD1PUNtVz4M6Z3hRytqF4zDhyLz1xg5XgxHuiQjek9d1GJmPWjN3Qh9pBhGTj2oNyXFq4dqAxJjTP",
  "key8": "toEKbCkiKnr789bdsP1uxEnGCWGakhdiKbuDSmiLjYtGJFj9856kQc5h5ygHX2uW6BrASgyBMaPzuEB9aiEKuZs",
  "key9": "RRCutmovXonWXuUVsJSafSMkCe2Z85pkv6zThLA9pYsCGa9icaALQBP7UncASnNWc8VaYyvAZa2jU9FsbUcMpGM",
  "key10": "3UE6ThsxrzBKsS8ABMhz86CE7HbDnmY6ryxBz9wn1hSr5e2ktXUSjQhYzDRCE5paWJ8LBPJ3XS86wwbQnYMFVQgk",
  "key11": "XL9VTQS9mx9FZciseromyP16adPKF5foo42JYMefgdmDwDCYwvMbgEwMuBqtPyVATRe96d8oWcGBFrqAyo7Xyfm",
  "key12": "5x2A45ZQP5RHoh1zkxud48vES5UpKTzNNVgQPbyYyfwJLgBnaM8ptpi6BitYjCjPyHaczE5n1JR3XbSZtgBcCCYs",
  "key13": "3Rk3AAcbGZMVfgYrKfGTh8cf4Smtzpm6zaguNjom3xKynKxNomuc4ixf8MLc14RGp4UsYKbCaCGrTzsvgQN4XFtx",
  "key14": "4XMj4KQ7EQCr7mZ5NtWEbSyRKkCjY8kDcCKk3R8eyX7RHxCJU4fqqnRhKq2hHnWMxSW7uxrS18ECYrCJDvF3MG4h",
  "key15": "3jqqHQfhnomTppjdeR4idHRiJvNnZ6JqGWRrRjcuh7Ep7yjBB1tRY7AyKs4eVWUHrKs1ujTerAqRHRrzJkZV1348",
  "key16": "5jYAnon8tRYZv5hNfXgwjP9496GBkbL1pLUPZEsLihJJxJCqGSPAiG1ekqVvxjk6rbx7dGy8ERBqY63j2NcaFqrb",
  "key17": "2oP49RciMQwnQPSacysFMQDKCgjux4u8LyTVSZqr6RfG4dob6pC9MPiX21x1gCVreJi94YzvHvkmiGJwZm9sQ3bb",
  "key18": "3DDYWtteS3A6tYqm8EEYpwr9JAqzVbS1PKK8hxxpucfuRntXeG2NegbmRJ8QMjwaXFaiHuVqadm7xbxmutoiCxQr",
  "key19": "2nJ6GXVfSx5zfnSLqafyTs1chm2znm6VaQYGPmg4bZ9Cd7hywekmgfYiudBdtJGY7YZXAFPzwZfBCZALtd4e8mGu",
  "key20": "5Jr2yxgWh4E2ceZZToUkhqnswqudvU5TDrKB4XF6H71YUhgX8zdozL7PGrKL8TiLrDVTLNdUu1xgRUasRNRn7NkR",
  "key21": "5mtUFEG1qiAwm6dWeWdvdg2oz9gxQ3ytBmQVQq69U9FUZ5amfQGT6PJMoUFtwvcWzbK8QxgbJ9vQE6YgQ7MpNo6L",
  "key22": "3Ty5UNh6DanhjiZ5FLFSKcNiWj8TnPtaYtpRRLsrcRLDC37PhSFYDhYtUhAekd3ZJ44V3rBsEku6WRnjeZTzrXwF",
  "key23": "nrjSiDt8hSciU8oN6E6Bs7MN26GdnohUhmkoxPLx3PsaUqqnX2B6NwsixGKn8cBFpJHuTToi5uqsYUBXfB8qMPW",
  "key24": "3ZzcjXoDErsuUjakcj8nHd8omLTyrtTe5SGs18yVHmm8GFBRsNRnG8bEQAZBQh684TkaDX7tnqyrMgUCpf8VwV2X",
  "key25": "59nTpb5qFVXxT9644ghyw5zaPkgGorKnSVypn6WQGuxf5YrfgUT8u94Q4hsDquEErC5nzwALpqj3AQryUQvFJTNG",
  "key26": "2WgqCAQgM3toFvdq6FazsTCXUFTM4bdYnyEeJzDRUR8nq6HhjSuc5vH1kyYVLMoWAoNWyqBDmP9NSL7pziZLXzDJ",
  "key27": "3ZYuGeYetvowJXF1wWaQETAD77jTqrGjwFriDE3p3MrNEfPVoDN2YbVMGnDKRGm7qt3EKHoHtECEcYQdWiZQSYvV",
  "key28": "4SVBn23eLmJzSDxKc3DjKGmN6supgcPpzQr3Q6qogFxcuWQUmo1wKKfJbYTfPctxk2pBum8bEjVm7ki7wkwdDoSK",
  "key29": "BWXxUgRpMb1mpSbcdN8BnyKbG96fnPdZAcCnwgsZScxcGeHptXPBevySZP2qYfXZZk3HVG2m9j4HLrL4pChVdAZ",
  "key30": "UmNgz7LXsQq5FM6uVFhrdTsS1E4F5vzR3uLDuxHkZHxJN6V2GoECZFhnfrpJwGP7G9rP7pVrxmkmYXDaEeYwtTp",
  "key31": "53H3S5ALNudc9iwsfdrJtzVtZVVtHtqMsdu7fsakcnAS26Uxdmfpm3mszaxK5qgKqnnkZvTJp8tTQn3D7UEMBjzf",
  "key32": "r3sTzPspeGPsGqCzjyRy2pXBvydp6iK9LpKHRcVNruUnn1gjxrAdbDkUxrAbmxZ6ho19b6TnSaN2Bpuq7d76Gks",
  "key33": "3gB5kUVCurjPEPTUcC9CTzCc76G59PmACdW6MK3Kufn8MsqT11hBVmQgXDEUW5YsEp6vZHGnCibJSBdcprgBAZNK",
  "key34": "5Zpoz9iTQDZL9ykSEKKiG9qseRUBrjJsJebVMaFpwxMgygciHhg5Wb4vwzysP2zAfFsXovHJtXefNmQwPddoymAM",
  "key35": "4naWoDc6zB2BWCfdznWg54QzAScbfoeu4CqjuKwefv3vMmNH3wpZabztQ2UT1qwENnc6NMBtCVuPMbhoLrPF1WXA",
  "key36": "2BEDwgp1mJ12cAnrZc1ZmJMHwVdKbYSztXgwKKiFH6jU3gzP23eJwY9scU6v9v5xSXno2Dm1iJrGC8PXHeUJfhCM",
  "key37": "gkDajNMhkSUbaGUKiumbLkun8EBQ9Tvr5XdSbhbTAxiJ2YBUiQWaeyTkiTN9pC3N32AvaDFTEAjK71abqsmpriD",
  "key38": "5m6qTXFVD6i19DFhdnRfF8PS5TMGkah1DtMLQm8ZuoviyFrRg6oqcDL6eyPbEzyuTAR1pKpoTSaairjZvzizihvn",
  "key39": "5rtWfRgpiLfTtuBHdRQa4JqEq6t8wwpYEsbZx4mgyE4FjrGyZh7H9vB587nQbX49UxKupj8hiDxveL1RCw9QnV2b",
  "key40": "4PG12g51hg7S8Rx7D1mpD2VdMyFFvzsQpjjpiwkw8L2dNtcn9ZEzFS4UfMhyhd4SUb2h6otrqWsNdfM2XHCT2rkd",
  "key41": "3U2ovahPzsSU6aJp6ziS52SoE7kDWnbRWhtPjH1S5pxyQxQ8167z3w74z9HxRurE2mPojTMMveoRZtw9VP14BXmV",
  "key42": "2tPKmcmSSMmretpW2q5mZTzH2xZdaCvUsrP7JaASRXVf3uDEqxdC3DYyryHKJaN5rn8nSSxTGwMFZ2fFQks7KTkc",
  "key43": "5Qpd94MwbQBUF8nCLubsXxnxRkrHgeNfEicQgL6qESSYgUMuTas2UtCMJPUME9EfNgh6t4BzyMjU1VSEpjnJCDfz",
  "key44": "5jHt1UeJfzr1gYjD1zdcoo93mPxtqAocH7gjX65HQ7idgbvBH1xdqreTZhNaZR7Py7h4ZjKrRiJRwiUXMow5H5uR",
  "key45": "4Lb7xWhKtWfYYct4StwLjmzq6RnYLUChxQgoBZ3KZYjfFiPmfBdF5x7aWfu7v3yS2rtXicz5so3CNX6HUVGLr1yk",
  "key46": "2FSgBA3DFyqXRQSYe8u9oQQrAQFsvjgmU7UdY2fCexgW6eX6gE9Z4hYpRhQwZ9aZGLkqZ2VwLi4rNLdoU39m8aKQ",
  "key47": "2JLfDZQtFrLfVrmtrj3XtxAnSAFRQQEfzsDaKmv2TPU8jvR5p33cbrh16t7kSsCgdW2xjGD4CyGH34Wn4JzcXesB",
  "key48": "5WA4iMJhTGydHMymfyHNHnsmnA41uZG5SLNv3qeiLXe4SL2BZPBNnSamxKi9A9poJsB8uMCeMpAhzjAgpkdvqToZ",
  "key49": "61QcM1hcSLFeAHJdDKTmqUXwZ4SiZEAhCcDAPnEtkefVc2LFSWaVfgNjP7JxuwMm62wuzAps5UazLxpW9qPwFDsY"
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
