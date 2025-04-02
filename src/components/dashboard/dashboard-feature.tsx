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
    "5WVBVFMupsdoV3tLm4SkPJivi9KwajTDsBXyBPMYxaEKgnuPUYa2r5AVzMB4PAxV7CJtSK6FdkwhLDfZ5z5es4vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJTvkNuoNrddXbB4d2E5BcwiagPARfi85bxg1yD1S3z8yXUAYKo5a89frvbV9LhTL2guDozocauCK68b29T82HF",
  "key1": "54SDEuaLN5gnoJnTcVdetXzwkS2vUMVycNhtW5BWx9jcyuDNYEeTzv2u4UUDCdttS4HbEWj27iJ1Cw9dTkKtCaF7",
  "key2": "5V9GAgUnfx32foQZfdydkwUmUEZRB7Vnu8EUQMFMmzXP5AxSNd78RgWiriYoBgDGpqc1X3HTf3HsjHP8qDXkMLLY",
  "key3": "7ZE5AhXXtUSDrxw6ZwL56TLFDj9gTuM5rMiJTtKjwuvpoVJf2mYbxXvbwMkQqtXDptvcw8BByPPQS9iYNgNEEAy",
  "key4": "5ePvrhko4mjvafFrPgRHjEskEFsWHbmgWFzjKjV2jcG1oDe4xk6g8wcLKbYrAvmJSdkTxmYCnjSwgE5gHtJJRMd9",
  "key5": "64gJzTfrQMyXXd3sCp5tFJkSfsvTSNEeWx3qfBBsi8hQRXo1yZiKzrxCR1KUVj38nH48TSwaULs7TU3LtsipHFVN",
  "key6": "2mdgbtR4BGFPFHuopwDEBEA9Zy12rsELLMUETXMy2AFm8uSH83NsPvw6NLJzrVbi74QpNtYN414CSsPPRmwnvb1j",
  "key7": "5NX1wisK9hPHyonGRAoAEQWTh8SmM8HSqV8nTrtUWbgC4nLpBZrSC64CGT2oL4mZfq2JpnG3Pg2XC2CWr7PWxtv",
  "key8": "UUd7ta6J31JCvWJsBZA1ubHAMp2wJnjuoDphMzMTw2kMvUDF8GWeY4n1C8L58hjeSqkPbzJFiMWJDmLEVfNTG54",
  "key9": "2H1btQMAJk2AQsuLsxNWktTPVmTTNw5Xmpirzaw9dprKWYfo8xHdW1aorpkP4jKxpuwHG8JKTgjZg4m8Mtp4qVTu",
  "key10": "ZxrgCDSdRxFBhGufhDWXWx3uYxt6kfK3Lacmm5opQWZKWc6mNmrfnkxord44MRKh1UhPj5Xe7GWTa5mQmYKZWpG",
  "key11": "3NkhAeNymucuSQmZRN4D8fKSFiyQAEmDDYEAJjMjT4yseQ47APRGrokda9D3Aqx3hQrvmWx63xtAfWoycVEhzXye",
  "key12": "QcxT8ExgpCaQtYKe95XSPC4GdLyvjuygXCUxXDXhii1pGhqSz3sY2P3qi9CTxZ5EGLjjg2tqvxDi1HGDitZesNj",
  "key13": "3KQHeYjJ61jPtMCfGv6ZjupES9EFefx2TXCJFHEZGLhvq8KX6VCF4vWU8E6YE8T3Rjm1dDwEiEixttVAioGSXrps",
  "key14": "5hJGUcHNzEaiJF21UtbapZ4859QL6M9npN5jjzqZWPPHM6YWsu6YygoNNnMAXvMDNU32HYdFUhhs3N23ahCFda69",
  "key15": "24T31nZGCGMNEJnqsddomgyZhTu36YMDpPkyai1FUzVSmAR1kmXsUrEjLn3zhh8qfougpQva4vZ5FS9emyBqLowD",
  "key16": "3hWkAigRgV6JfCUkPXca1UpAwzruQwCULEerQgyGdN4yxGxoEK9ACSL1AaZZufbdmNWYYu4Fn9M7ov9soWFmGs58",
  "key17": "4FswAsjWquaRmziY2ksNuvXZ9WSMWRfT59e7VNCnok4fTPBGGzyAiNdiqvPyVm7MW3Uv4PP8ZJHyWryNVfkn5nh7",
  "key18": "5qC5yqfz7o6VaGxwhjGD89tSPmTRbxEzZiFUV7v1tVAs7NgcEPexJubwVBW2g9w4gaTuEsDYBWGuUEMvYnLGqVwq",
  "key19": "5LfmAwSzzuSL4XwwadyPCUAL9Y27955nEDq9k7f3iS8SZL6cQGSzuEA4wWGuJhqQJ6uGwzyPiacuqtcB9bLXpBZt",
  "key20": "3XniEenLLVFKDJDgNLpJVJKUZMidtY9iTnYDXtiqa9qcALLfjP3CkXiXkL5U9gn1AW4UB5YSwwtePogQvkLukhHv",
  "key21": "3525PRbM9W2UoVaNFAEvdSKTAfRPHfKVzMoRRc3q9JgA4obcqScnYW5Scc2qSUScNGjq9rsoWMcGwV9XtPHRiTP1",
  "key22": "JX81PNh5RH56ffTmWmAdtLzNZUsiAj9Akwu4JbKTU6iVxXEMekKjSUdbWinAP9aBdAia6wAC76GvF9xRpmwe9bG",
  "key23": "5R89tVqxuCbW1AftL2YwtsUgxR8Lg9FWLAmasUZVCRTTwEDTRFDAE2TEB7oAtCdkejfNtCktSc6sYHxAr7yA3hBS",
  "key24": "5rjMF2Udo32JtN5umBGmtrrheGFWTs3CRQZAuR6kA4njfx7D8XEPEF3jSZyjTUF5SFa4gSYbNFcFHe8MutJgR9H7",
  "key25": "2ASTDP1zSsLzEQ6UjhpugqFXz3zQkxoAczpmrWDFi5kWK7DRwufriNnnhnrpqjRoR3uAuV42JdSLxz3zpf44NBUA",
  "key26": "4Tdj1QPZZCtZzhLXhLErMSt8A4PQp8Rd8DjARL3YaBoXAvhYPZMgW3RNgcqPEtBZwc3q7byzwX7B7xSaLYkLnAa8",
  "key27": "2weKLHGDjkvg1eFQuK6ZpbEmx9FPkwYMzw1wvdA5nzH8LTYSQDG8q6EkJhVmq33w5YtWAZLuNYjgPkkcC4tcTs6F",
  "key28": "4QEugg846z2KZoY3jTT2x5o8XUcsdvxGsWyNxF3LD2bVE1Js3Qgnh9DP4fFB3v5MBs3MbGy4mvG7iS3hhpxX1FTE",
  "key29": "2ehdegzXx1Tia7PpZcQVtetbrWrKvsVNR7LJ8CMXP9uDG3rqTDN48JYnxsMjDzDujYTKcnfLzRaALFhpb8dUhGRD",
  "key30": "DnsEHFNFGu42BQddn4Jk28jCfVfkBC28ACmXL9bSYz1uzhWHDjKenzHX7yKChTUWNDKThoLccuXz8g8VhZoPEbo",
  "key31": "43v9F8t8UaE8mKNLh6aPWrrpgPU1yxACnDTAEWS4tMA1auyjLDx47GjW2yyD1SHEAgGs5EWfG96dGqiMLEZs3SML",
  "key32": "2ZzmhsjL2hGnJ2N9PGuYchdT2yer6zwCVLZg1Tf4vTXP6K328PTzR3o7UC9fSkCd6e6gNeFwrTDQ8AD9CV38oSzB",
  "key33": "5KBoCqUSvDGTcdChQrHuXnMfSLA58D2ftteENSayzwxTQ1cCKVy13vLBo8BkPyLThSfR7HBqRnUUfKsnQXV3QKFe",
  "key34": "LQyEqTN1RgPX2k8TUB6mJtxuGN6YQgsiwRqNdDMeEWw9YqWaK4Q4oaSRrhsmMnGGHFXNwas81UFwX6GX66znkHs",
  "key35": "4Vbbgyucqm2gvVU4Mvohb5H7hNjJCmPANrVtukHbHkqNuRWxjPAPLZLsaJ1JfT5yb8dD3MU54Zh5BFHzwAcSNoLy",
  "key36": "3WbzjbA957FK4kvethjnKuQzmwkS6fzLyaNGPipFHsbdwtKMjCCktNESvmvgbeZ5GKptrjuVw1nKEC4CRBJA2Cjo",
  "key37": "2ynXbVPYGGBCwc8yhVy4R3vUiXNRHgZ7RMyRZiZ46ZzgBdCDJ8fqaeNjXZKB7As2ByUPyZy3aL5AxV1TohRYT7i3"
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
