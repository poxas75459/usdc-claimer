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
    "moW2orzGYKKiK35QYqRqkru6LABh2mvFQoe5auFkFZMysW3FyWqSBnx2owX28fFMjUzBFAGqwnxuVjrGYH5JCiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yM7BFdmBE8bJKfJQnBsKLgv3EtB8E3NqhaWJpz1MBvxhCzvuyZetiZYvFFM6uEp8dujgkE9UuZMTnwCjrthSm3o",
  "key1": "4Rsj2HqMZnVLwwqtnh7uL3uPfLmeJbXuNtCVBaEr9JrMTyDCHEk6fFeyP3LiWr25FMuLEXxDgkDYJgPkc9V3WkPB",
  "key2": "24kaGZLMHp6c5sDVTc23JR78KzqPJcRYGd8YZhPcxgWrnsJjo6iBkF3WhE69aG1uEdi158fx92tf5htDCUR2agUm",
  "key3": "2xJzjqiLraYdrVvrvcZHBmicQyBBmakvLWu1whq17pfuKfRwQyNH6vRPYAp2pJLjYbXQiEfSx3eAdhkPFeDfQjwp",
  "key4": "5kZQXZaNnzxxEbKjFnpTU5KZai3apMAVXu2JuWXEnkB5TCsYNAx3vMnAgZXFkNqeYzzC41VV8mSCHFgeuaNRURui",
  "key5": "sYDpciwFCwppbvjzELEnKe3o3czRHtAg4a2T8VCCBV9xhv7jBMHyxZf2SfABHrCMAwUKsUAmdMgSixB7eUGH9mC",
  "key6": "4bx8A5o7zfFaA4ghkW91N1yHffap8sEzgpvfrvdF52EVMFa8a2hAPs2hJVsDXSsrzsr9kYtMXQCmY6Rr69jNnf2o",
  "key7": "7Cbbeyoc6uEjDopzpK6PzSezEdKL7m7368prxKFr647mCEggeNeU6AmnBnPDmkzikmwCgzMw45TjqQtQ8ELX7q4",
  "key8": "4GmwpFo7VdjCsfYjvCKx5oAyL6f5dyMMGoEsghBMFJKaTXjadxKumrnSSAgdivAdv4RbF2ZVDvGPvukkPepNNCFo",
  "key9": "5FxCGUfX3QpXfDV8pCaFr1gexofWrno8aSTfW1keBzBcLK3YUcFiSHb64i2D9CjhaSFvoJyvx1U3uvsdJ6KW4Ssr",
  "key10": "4zuAgPyoL7m1BLgXH4p3rjPVBJV99koeCNnJ1R4XSTjRsoSUcYps9gnikiJfdX7w1dPcbKaZM6iC16WWnkmmJcaB",
  "key11": "4EcaJaEpL6aABeJUostqKCYnEGMsUPqhrVe9toxraTRo5dqjX5AU856EmrNfvQD3bua5YeCMWFAeMkZF3iXVuS5K",
  "key12": "Wb2Vi2yWL2EjBjaxQb48TM4hsCAMYbu8XvwSN2WoyFgttKcnTBUFsBfB7rfQrB4whtJrE3qTUDDDFtHcc4BFMKe",
  "key13": "2RpbEnwVLi3xjoQmPupnYbPhcZZu1XRYZpr43k8DvsCk2E9vFqeHqtEWX1WQP8onk57mWGuw9skMzHmWaWavirAH",
  "key14": "5y8R7QnTa2phGMp8Vdsm2xQA9ViLtoW4PLmQmuWcTq1aRZ3xbXqdr87h3kUkfCngMxWyEUc3pCxj5ZxodpVAUFo5",
  "key15": "5gwpZbyempoyZiJswdKBebhX3DzHCmux8tpsduEvhREA5oAPJYajycD7BEHaLfNGg5rpDGdsVzxnpMaBWaFLkZGg",
  "key16": "2BPU4rZukhQvQfC5sb9XEvmpxcJvYqmgDh6hVTXvuxwf6A1tWzRncxnvvJFCrMuSvDqwkFQEf9tNY2Xa8iSea1Ne",
  "key17": "2krSRXsPyTgmpsVVNniLU1YxAvdYkH2LqGeb3H9PBcd9wF3PUt3gx2AY4JV2XBwv1ThPhehnviza9bssXYWqjSkA",
  "key18": "3kQQ3bwksEiJpd4FJt5gCcCqS8Sqtfd8bsRwRRPvxRLM8md1sfjg3biQ9boyiT4g8dLsFF8DoZorbDGemusHqBPb",
  "key19": "3vVGomJ1CyGgndUUHKo3fUmy8d3oXk282PbNX7eY5FZUQMss5SusKB3UZZUgdr5ZeeuzzFByUNDR2ttPUy5gNxxL",
  "key20": "34A4fKZcTrFHaRiomFUYDmuggnwRYa8E6GzWPWwdEKNjcLNs6C7MhhzCHxvq5njSxawftor9WASy3LAYz62cHoBL",
  "key21": "RYTAz4TD7j4ZeEwfAjhasXwKf5KS5Q8PmhnAJvsyYDBK6C8ZFUDREVZRQWtnSa45H4FcddZEeW6uEnkCJsS5WSv",
  "key22": "RyMnies6V8a7SrLXFNVAX3kJzrQqZDgn7m6sN4R6PSFgzA5jkbMo66c9TqbgVEnVZwtfKyNTTwC6eNM95ihhPyF",
  "key23": "2MFYm3ws8zfFgThsYvUQtxFYozxLX2xmisR3zufLUYMmJsXXQfpKv8HtpbEr59oMd9zwGEHBRQipgD1TpTQt3ari",
  "key24": "3gaSFXrRUNYZwSuUpw3w4Gtn2Hvya9kovrK5TTiJakRPfmsjrjjhvLSeieckBxb8hp76RtucTgeHzGoSiyDzg83W",
  "key25": "4etzapFdJcwuamQ8xenieY5jp8nqd5dYwSkTUev11TRTheEtPQz5gyeMNs6ZJG3UbtQgEHnXzDHC5gseZLAQFkXE",
  "key26": "2Fwug6dwbb8y58DtkaWhATVkJNVmzRmWSYeovQUp7G8S8tfk61uzBkegWjtW1baN7CzdZemuk11G3iDMMCWpokk1",
  "key27": "5B8GR1b64ahBvGP4NqRxdYZyt2ZrymTvD41AYDKZMwxoYGEK6wUA1XFE5G61R1niQSWGLFrYwBK1yD7Bn6VVaj31",
  "key28": "4Za2iityL8gHtanmAko675aoaEkcope3JWthPDSHtjZDAb9prosH7CzW25nc4BHti56B2uo19zLg5Fi3L37cZSqN",
  "key29": "5QbLq56FRrcbjCPeN1NJ2u91L6DCL5HWjJpWzUYxRaH1ZSBY8TMrckHqiBrj9kqTvGZwVDUmgjeNxwgHXESCqpR7",
  "key30": "5M9A8mA6EjFJXwHggVMBgMeHPEhob12PLZ16SVYpRYkm4JLDyEYYyjXVueceGErUPm9nLk15pMBTWzJsJGsFDKRx",
  "key31": "3Jh9qrK5PyVn9J9dKNcdTFgfuBJi4YRBbgAKPAZZMmthhb9mCn3JgyX9r9GYjaGdqRD1uE2LGLeBuR3bV5xEY34",
  "key32": "4PdrzsxvYQjaDMcAtp63Y4fXfwd53Xr1xAKxVuCppUHmo9hgW8iKKXqvn71FP6sAGn2k8fsDoBxVTGJ4TVbSCjxv",
  "key33": "4cGH8dSFjhGuKxPvpPkWvRpMgajD1kbQHdddLG9ixEMEr1NMLGW6KhMm561svThEL67UsmJW1bWLEn4uaN6XzAAR",
  "key34": "26EjmcsCuvdctSLugdiBwqXWEdNjzWFkzcqaT1NPaAQRAv9grkvLKKQt82brCbVLWd6cfMSXP7Ra47Yeuq6Y1Xjh",
  "key35": "r92Mqea4Emmu4P9zxcMgqRTxdkQ6F8EyobPeGRdtdCzzkAyxSdBdTit97rXzZoBepoQVxFhiKuY8Eefgat7CkuR",
  "key36": "4TECR6Uv6KxvPgVDcHgX3fP4igazWPurkSSLFHsrEJv2xmJP4nrfPQxhUvWYQB66FEyC8m7DBDVsF5w1V1Hpm8uX",
  "key37": "ZAA3UmjYmrcES1mvL3jBPG3ogAoZePBrijNK1XQqVjWYTH43aj7DcByUW9YLWCz8rBa8GvvviAGatV9E5mpwCVg",
  "key38": "3VpM1V69VxrWdrQjNR8myrMSDHGT9g38zSsrCEfPTCktSKXDc6Togoz7hu4pk1SGQPm3BXdxMC6xx1k2RwHsLinw",
  "key39": "5FwMdpXuq5zjvzZxAqRwqUq7NYENYueXXNFtrWvh2mCqZQHFZAJQDYhCUub6YEWmUGYNDCNc5abUy38mvAuTFssz",
  "key40": "4LZ9UuFqu2ZoSubSfMHHBE5Mk1Gh1rm8b42MdMPgD4wvjhgDyuVkEMfp48iahpQEHyd2GoeBuRG1NAGa6d3VRGe1",
  "key41": "2diEkJt1pCkh2y6E2KkgcgEV4V52pdAz1zJ4u2UeeABAuoriReosncVHvjpnXRuGHwAPDpf8F2vgSuchdpvE4WxN",
  "key42": "5ykTFKU6gVJ5BpDbDJd66K3fYj9WxKi4qpspyqNkAuJkjcmjQ4EnLp3mdsp32WWyqp4ZhYJy8TnPuLuYjFaqwsWM",
  "key43": "Ddyoq2otKP1aYxeExHR1HidCVoomGJ6WHG2vuit7tA6fmEVPLrAzEUhG242vkZNuXGmaTcnJMYgqx8FrhrhgRVZ",
  "key44": "2crhNfELFxt5KAkB1osS3nTZn44gFFZeVNG9p55TiaKBG3mS9DWziezzkReXMsERBAmKwcu5XjWvusVD95AVvvpp",
  "key45": "gUUZwNJ7Fjd6KTTje6vh7fMiau7mZEsqdbPWeCHP5VmnqAcMfB8fRV7nVzgJsNa7ErumhAPvAbmfLqoptVs85mR"
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
