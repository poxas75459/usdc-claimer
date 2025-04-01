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
    "5qPWqRdZfxV4MqCjJTk3o7ubchEMVLLMDxZyuhnFrxiU2QF3EAUR5z7s4qJykUizMtbXueAhnHD5pEtjC4hoSLjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAF2hEoeCW57TgY7tTYnH6Sj5GfsQwBZjmtFEpLXxntFLgwfBnjGYkoqjc51JEAnke2PHxrFK6XfS1yf3NzBEca",
  "key1": "3ZHDNSZSS2YdnMMaaGhTgjQfCaTy4oMvE6Zf2bsyfdt6k2Vec6V4QFGpG36SWnZbKrDNBtRgbyjB1pzUFwReY4bb",
  "key2": "2h1jeFcv1VVwk19dTzQZB2k821GyCWVcf5ddzfkwEjrzgG1xBUuPQCQowDtEEkGu8TF9DEBLq9Cb6FguVBJrmbch",
  "key3": "5XMikE44PyNzKUCuRBFawhAUcJoUz4VQuxhAXece8g6mee9xDrzYrvKUTLvV3DGkEGXzDQWS4b3VN3no2nKutHme",
  "key4": "33sRyNE3kQvkDZM2rmcECJERPn1W2Ndd7ZaTYkoNUzvPzH8Nf81m5RfV1Vmqc7r8QysTK9LK55ARj4XrBLChZtmu",
  "key5": "iockmyG14E5adfES9Hv8tSRqbRLZzT5DtfjWBxpnzjMwT4xwyqFpeo5K7Hvx5MotjkyhaBvkm5iTSzj7VAPZoDh",
  "key6": "3gsajhiMyW7BadL2bYwnKPLcLA2soabEpnNac8WiqWsaFU7PpDSRHuoiFKswKf4CLdNGuwTBYddjKRRM46xBDReF",
  "key7": "3VLNNCb2gL4EzV8S5Wj1Ep2vf5Y9TjYF2y9AmVYFM4RMNTTp5gmskEnX41Dm86zQ2RXKCPZtKKZGVmtwJAM4c3KD",
  "key8": "4XsnsHroPDPjWWua6kTkiFdrKDFdcUnmrZtXheoDYLqLrHfpF4ZKMHSVJ6MtpUxMkWNHdPpkHzfYZGymd18zzbs2",
  "key9": "3WYL6Uw8KmcoLDV5aLSbyZTesRXJKpQQmYX3i2CGZZqsqiLnix3XWDSm8RMueKCHgfTcJXJMgJwNzv6Q9ajCZ6BU",
  "key10": "4sAdgN8a7FikNgz7qzKCCfjdXMLtZC1efyRBERBzaAJVqGs1ywHP8Lk7UErQJZockUga2LbkfhMJLvfkPaSrD4X3",
  "key11": "SbM2gRsE2RbMmBqLYDhASXZafbjFxttawajdBR7Xa79pwgKXZ4RHn649jXvufckLf7tGcva7QkNuS59mequGYLM",
  "key12": "4VZphXVs2mwg76PV3kLkKHVmV59V8H2sfsREXSzL1NfDeefwnKwfHyjK3rgsWcjBmHwKMdafmpfdKYcv3CozWbUN",
  "key13": "4jisR3heDgg3hYonE7HS5yVe2Y7YarVoZSfMqB7ZLZKXGrvtURmNTEMv92RPqP6cDQhG1c38r6suQPUQv2eZh4Jf",
  "key14": "5PJYbLN1xigbuBUdorffbr5BsfHGfFgKJPczmvtW7Qc8s4w36gXeudmVwWdJYJQo6dvqLn2fuBKkCZvjW3oYPSFf",
  "key15": "3YvQCd1MUCr3SAZcghYMnxfUV4UtT4SqNLQp7DLYJrZz6ho7q3Qv8uLSmNuYQyp5W4XriFtGExmCZwg68pikYvhu",
  "key16": "EKZwVNu4evGu17XxGLrEr4b7jgsMx3BaALUGBjXXyncfeTzqKtnjmJGLJXzJFeGfL6m3K2qE74vUjj7NNo6ELcr",
  "key17": "2qmzfQcAqvykEJsrojHys4UkvNx7caxq43vSLfvG2RxrPLE94umH2bgNrisdZf1K6X2FFPnB7tie1c9vSrPCXKCG",
  "key18": "4UtMK9KMmbddJag6jZ3m7ZakoxBh6KQkPuiH2UasYkofma8RgTFqvX53uaBjGsdMzHpxNZxdhQgwkkbScPtKCGKk",
  "key19": "3SyNoRvcuBSdjmxcKvsV7JzDZEvjdNLfvfj2uFYFRt8Pt8Z4SPfJNhBRtQvmKG7Yfza1dt4D3LGsGHcokvzac9Ko",
  "key20": "5ZvefjGAmGPr1bMtwa4RHF6fuhEyx4jbMBfJpJEbqawPfXxXVbHrwEAhSR2CfjW9vpTBD2h14p6o8ifgUaJPEjzw",
  "key21": "3Pe9GPfqJpAHBAWdzSChkBtEPoQUbZvie4QJoquMHrEifUuLMAVtQmEs1ubjNcrSq5fBMnTvbiew37MQwnZEStbd",
  "key22": "4SisKFr35waeN7k5Dm2PJeFNjc68EqJDwapD7N7H87XruqxATFGNoHxCvfawtfNArjWypihQxtV8yrebHJXEZaii",
  "key23": "4zaAyrVh121jVwzmMyPVNHEioAL9wSKs2tUv8qn2fa52YavpWgMUk6ARYQNGTKSbGZF5P19wesdJGDPmCqK7Mgky",
  "key24": "61ug11X21UkAMxfcC9S9127TjNHF38wXwCfYaYnAGjuEYqtwumfHGRmWVEJCzxGwCwSLPD2QRXJoQxEhtCc4u2Xm",
  "key25": "2Dso8W1qe8GSwNDvXZ38FGVokxuMTBm1cnfK5FAQVay1RmyedAFvQL5JxWstnAjvMb1UmWRUmdGVcP8gwWD5nV82",
  "key26": "3eoszPeqm5VfCHdaiZqy8neMLjJQbt5JvoTX2bUf5aGQyv83KmzwMhHeandnU9BSqizvFBnZqbAHPUisWmkKDZZm",
  "key27": "2rv1P9sSeqjsLTriBBPdUWHUR3Z3aYigT4og4WsdcdhvoVZHhAeWgLNF1JCuvNuTXCeD4viSVZg8oF2ejiUbm6rB",
  "key28": "1eg4Y1RrhdtwNgpcC61QWMz7cKRBaUiFFmyYqPG4M3rAK6w1vyvxEnbdHz2i4CgQKzHYn3kqYayqNhaEcSgH3ry",
  "key29": "sFU91DPxXkqwEBPBfbo929KcbY9FP6qFXjuQynr6ZonMaxjx991hP1jZ1vocJRAAMuP5jYm2ht53nsX5H3W5snF",
  "key30": "rarQGVo8Q3nTRJevm1KLJn8aywZmjSafuBb6sa6teF3EhxBcowmTpRt2UzUt6dGCLAUbqy4WuHorNhi6zcNJyJc",
  "key31": "q6vKpbYAzMWYwsgcvwL4NuAyD4JHCYEcr8DC3ghmft1curUrngUp8gGRgdidHZAYH3r8EXHCyhRWYdKuUrRbvFK",
  "key32": "4uYzej3gt8yZrPAjt1GRB7vBzsWnbbWbTCfyJsYw9zAyrSk568er777rF4z25xunJcqSxGQ7EfbUpjXBP7qVdRXv",
  "key33": "5TnmYCS7jF4gkwCspAJ7ZcgZ68UyX7oFZuxhtuPLSxDdaoiCN9K4ePfBpWvduoa3Tc2A1Z2DnVx8LfsRCgKoGnZn",
  "key34": "Atpis9ukTY7KTLizwSMYaT4GGgyFpzhMTMCaBSFraQyiZmWZvBntD2koT9QYuR9N4NtpVMGFYBQD8AHj5Sv75Ks",
  "key35": "3K7rD4GRMhPui5PpQD8oZa5j58BbayAMrj1PUX12jh9W11Ccd7SCcrfEK3VVCxMQLZje9A1VYMfd2ckypisaVYYh",
  "key36": "idBGyYLNSutPyN7f8LLE9wbH2uNZPtzBeYUik69qSCTvT6DjjHryVWbX7YEz2e8r8yrgTov5HNJJCGRNuGZdKbC",
  "key37": "2i9EsUVxaqkHPv3tAAE5kjc7zntgQeyBiDjdHJsnmUcSfxamD1drd14Xew2kMzNdGsuiSb8evvCEd6wz4awCuv8w",
  "key38": "5pbsSnBjFur6VeEc2fMbUvkHSbsNEVcdyviv5wvCGk5xhUazhdbiFDp2AYBZnXHeAQGA9XcMt1yYDPggcrmGgS3r",
  "key39": "3CE64DsjdEi4tgAsTpFr5tg1boEUfiwGz3KwrwFuMFTJtdG5pk8G8o7jgbKTnJVurK4vDr3HTRQ8KsFRbS96Cs8c"
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
