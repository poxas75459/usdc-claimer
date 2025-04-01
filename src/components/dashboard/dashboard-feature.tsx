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
    "4xk7MstkGUHJ27tZDnR2qfv4DwsSdbDV7bwMxebVmwbdpNhVVhiAfPDKLDMkHosUex8ZgywnzasNwmnDtNs2SFXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCmLQLx3EwiWnZNejUXigr6xjbquqBRWSxFS2Q29RbpxVgRNhPR4dEMHfTVBWfSvj793Kr8qYf4a3k9yQmpnCQB",
  "key1": "4aqb6k5gLnnyggBdGMHRPw4mXF8ReNeWHeazb5A95VMwKoMJHY3ejgvTLRAFkCp7YVM6xWuB7yvcynb8mpSCjr6q",
  "key2": "21uwSMhRwPrqJDYSDLMpgLzDHy9EiVUs1WnkQeMgsgTya9nyoTXoXfTLU95vD9ggpNJH9DTM7ZSi3LGHLdEidVuY",
  "key3": "4VG45fJc7cAFpkjCyz4ZNKp1wJa6kQ8iED1QX9zThmAgau5r7y2Lq3XR1Q6AAyM9vXTv47UsGwXWYqjSyRb1FBfj",
  "key4": "36tA2ArJBecPsKk4yKTqgr8Vy6DfKpyXkQpfqn6YA4FavCZWJUA2LboF5dBggCq9Zp7XwuAaqsMwQBfq2Bk41D5V",
  "key5": "21H6UM58qtx6m3wgfexkZt1pHM7Xmt5nU5qZHiAvy5NfGPTiH79A6Uk6qyT7U84bbDawj7NHTfYrq2cVg8XRn1CC",
  "key6": "5p4fV9cnWH8cBh8pnjY8kExL3kjXR4hhCxxtJ9DfJv2p6Bz1M2HEiLwhp3mqFshyeJ7rVxS8YRLS5DHucVGGzQxK",
  "key7": "3Q9c6xrRsshqepqt3Yd8MT2ZK52LtfenZcFMN3iH5eY5dX1k9H8PybFw2Sbf6TT35st8zSfLHwcrxNcPatVDRJx5",
  "key8": "3mvUAdCDgVuRPkpgxK8oVdzkpVkM1Ft6trLCAsF71evD3jRZ48y7op5smW8xEbR3zrnDaVmfraoS33u7vFM5F8Ei",
  "key9": "4frMCypgNUze3Zfqc81LErqxZpqKBhK1Ejtrdq4QCvbXt869xDTeuCBmvpjvT7AjaSvhZNiSbxDHtuvNsZ6523kV",
  "key10": "p3VjXL9q9Qtwq24ixf43DiC86nyfwUoviKEWiKj5DSzH8bqV5YFQvbF9BPj13pgSvQA5cMSzHiTJzJjtvcPWpvG",
  "key11": "5cKkaoFNM46vGYYMnMxEdHXTrr1cqehffTRzcFfbahSdW3KvkL38en3MPXmfA6831UpDGsNy2GreNgD6BoufDFrd",
  "key12": "46uRCZjf3ViTBPdYYu1CjvYP2BikmJkcQVSBnjXW16Dtym4ekQ1jTWNGMNsNVbWyFpH1HY9AK9DEwBmA6eTLnAs9",
  "key13": "4dnACxQGvdz6q9EaMGuYNNPeZcJfPqMAeuv4qShj3SEcVa1PFxTJNMpqysDmBDJ2c2vQm2JWzKVdepx7iP99gcoi",
  "key14": "2FX3yNbVvcf3cWvcVrVKrkYvXpATs5Kppeyhf3uErXxrBYgPerzVhVVkqHPdaAeMQodfeJRJxa63UgmHWa4DC7j4",
  "key15": "5cpDNjFrV1N2kHSeDYS7MJ2fETJWFC6E7PXdo17iRHqnKo7S7sJJJW6ys1C2mdWkU1jJx1SffqUaCNvWfthXBrhK",
  "key16": "4FHScCrgRHAfenVT3fkLgb6crPmgGb5k7AYzEF9tZeG1Qh5AZeJYVEEHrnPWZuxWpJEoR3qJeqJboDbyhnGfYsqw",
  "key17": "5V2ybmqha3PBfFUVFgKTdA6VwBKzGywHZE4zCDehrKg58XZ5vydMURd3XPK23L7UarMvMHjhiaSJTb9y7oeBrcjX",
  "key18": "2jZXuaeMRVhBABUxnHujqAJ1ASahNBKiVQCvF4q7ncv3r83wNqFCNowQjyRsSmoKLmQXPT4vdHhWFqMVPV2W9wxK",
  "key19": "n11jGsYgaTUbyJxX1ChNRz22eE7w1m2PmpWtjRKniLPD5KkaJBQmvzr19XcxKYJ8sXa37svbNYG33vDm3x5SCvT",
  "key20": "63Hr2eehrf13FLLphVaSMFpF8fAeGKsG3EB4QbeJdbqBBrctzJjvTpWj5WZoEZ8eWHbGZNfWLdBdryZDpTc7RXys",
  "key21": "25utwrUCdeMWKPkELx6WG8H9W8ovkfbg79hwksKrVvwBsK5qMGXbXP6eC4teHz81e7fpYWjtq8xe32Av27bnHpyi",
  "key22": "2L9FWfhiRWEf7CZhcTxAx5yv2DsF7du4DD7nEq7ovsGiY6gFmvKgXg7jfiyqKT6e7Dxd62UocensZt7qTvSjuiJC",
  "key23": "3nxEnDGxco9C1dfiJ3a1u1cXVcBcmULXrMgZZSqzKBM1kVfuKPVGTvYn1WzipbZ7r8Y6sZEfUWUSoDxs934Gsmqo",
  "key24": "29EQqTkf9qU9esAtWtonVQd4DXLRpGf18RjNSSj2qAWy27NCMmtUGuq45bez82hxsZfuETq6Vu6RCeXyqzgu7m4a",
  "key25": "2Cdem9SB6Rc3fDi6dJEhvwR9wwJjgbXA49JTWJRtYafiwLpiSLuurXgBLqgAp6EChHvJeJFrophAMuPUqVkFmdjx",
  "key26": "4q3N1ZUYmXF8wivpKELidTc2Lksq1HJuXMd5jbAsbd9iHCx79zUVAP3LxFLz52FqpuzmWwKePwRgFxtPEiunpqrs",
  "key27": "3xxuHeEuruXqNLNGuWeRQuRDXCKJtmSVuvRUMQNf2JPrAJP978psXNm2UkxcFVZAkRAsvfy7J2btRngufBcgByTN",
  "key28": "5UoruDeWWcHeDTPm6Dxf6C9oUXdoL537G7QLzeM2cPixMwYpzHb6bqokXPj6JGPs5ntEwb5dskEkTURQT5Pvkhb8",
  "key29": "H9LDRoMY4CRX8eLvnRJGMfoZ6RNwEKde23tnkxU4Z7JN7N89kB3PUFnuRvTb2JmZBPdhcz7k22aHLMuyB9RXneh",
  "key30": "21CDbgkhr64rBf7SrYGZZs68A6s9hW6KQrNXoQfBwhaapQzUYUgMW8nRZN136Z4qoDixi9N39ZjL4BxiUD6mF19C",
  "key31": "38sFQQbLk7vUaaFND2eAsVELTBx7ugSANrYRsKkR56CktDKDwxYtACTA4WEFZw2rhCqHB5PtpNaVCQhxg9GpPD7S",
  "key32": "uT81FSGfxHQEVUG5JGYbv8PcjA2JpG4YPumihiDtk4nk37GFtQRnd9YfetHLUkMfBfHbburKDTEh4xEoQrTa32c",
  "key33": "3dbMd1UH9ZBEG9QrsqtmvGtwhnVADHLUcEfGSPQrojrdEz78RrnDcnSMhmfua1HsP9zNFAxtCkSCipDg39UtRP43",
  "key34": "45BpPAoBRx9m3CNert2SSjLcJXcjFLhDnY3eo5kEvw5VYxXgzjnTFvMdEkqmEdUP7zdgscXyfRarm1Xx5SMm1PnF",
  "key35": "4gm9dbocLMsSseSdKycHATjew3DjP2WWyGTd2dHfnTpHcPBCyvyscm29eTrdtLiYj1aF8r7eeuhVwcHU5PZtuHd2",
  "key36": "4LU7UDBuuSRtPXZtoieuHXPYAx2oUM5S7pDB1gKpkQ7ASMixciW8jR65wca3Zm5jcrkHJi3z8SzRsY9C3XDgtiB6",
  "key37": "4gHBtDLMs9bumUKH6Yywi6vtYeo62HPMw6McwFpCwp168T8anUrfgFuFrdELYFwA8y9u9vWF4kGXGAq2mbSmoHgQ",
  "key38": "2Q27FqnFzjL11Q9W12eQD25Ecxnq5AZ2qCDGhiGF6vhax4mhxaX2Q6yNwryoX186M4uduK7CzHszZ3nvT7cRWNPS"
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
