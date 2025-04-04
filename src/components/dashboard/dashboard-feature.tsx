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
    "385XiBsXQfkn4PqcmaDjPM3hftp4tUAoXjAtB5Tvrr2MJnob7wdozAkWsZYXZF3PeHVxog5dXgkmmceskB38z3hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYT6EppyANkft5vfh6i31wHrdHD1uodUpyfK3aoXF7Hxqg529ZYqNPQzuL5t8VqD7USQbVt4oh2C44nUvmWVLSU",
  "key1": "3DCt8UKZ8xE4NkWqQLaJ7LLVmjSc6S7M4ZmBxWNQQNpep74w7E2ZWGoUxQyd7QwN1w9D6vUFzMrfw3dA1hQG1XLx",
  "key2": "cKf4YoeUUcVRrWuNdpQmZkJYhMKwwdANz5riQkVj81i4xKdTHQbWPhUQPdtUok2TuXzrgS78bj9ynwYyhgHE5qx",
  "key3": "P2rDM97eRCPtn1qfsJb1UcVbW3sEKqoVFhpDQ3PvPUrvsPpkmEigpYrMaqXViafTAohAmvLXygrxME7u4wHJB2G",
  "key4": "3FLDJHzSLtb9izvDjUtXpwXsrzTTy2vRoAWAPgs918Bzg8EUoGg9QE54TGViv5mEi3CWQ8q87pZV8mz9syHQZ5bx",
  "key5": "4fL6XtuauAkgyo3oofLfNFb747YfurBaanaDoxzxPAS34psYvhZmatoxxiewLfFLqTgMpgqqVZrzdgaxeNYv4cas",
  "key6": "5MRPegL1dKcxxkouFgaxbiBa7fmH2fikUhP8YfbJbXg6hpihWq69DFTs18JRD7eokvy25oPM7XSurmSa98UFTqXY",
  "key7": "5gf5fxLXK3E8DC6VRyeW3owZVLXdU1BX21xmL397XMd7fLUKjMsb4qZqDrcoiSiuDpWHNHv8TPLJgPQD4UDuLsgk",
  "key8": "4c4sw2otpUazVqZJEWR8s9MBukUwfbprrQzuifBxeYGjPNnDsJbQ5VgEu3XnQAPaRot4ba8Vw3EpyxjEBZ4hVeqt",
  "key9": "5DNzV5EcZXXmGKrZXTRVdfZQy2b71pN5ZQuVWJLB7MW1EA4nRdrTYKz7NDqQGjRdZsLJFaXZG3DckNDswjRwekjZ",
  "key10": "2XXaNQg2CtMJgs5UhGgrXRj76E4KPc9jQhPbZiPfYuqzcqbUnbDMES5WLKdpXAZWARePPmewqMfw8T8XN3QVggqC",
  "key11": "uhSArrVYZTCXmncaBRewCwxUKxLusZAPTRqocHqg5raGGCxjwAQrzcFsBnXgvQTgtG9oUWWtJrfdM4x8YLmGhRZ",
  "key12": "2VWMsdXYDA7rxik67xjLvmD4rLj1cdyLRBDEo8DWR4N55k5T1g7AxYvbjuMTrthPrHFhEffPtaegMzmm5LPL11dt",
  "key13": "4EVaJMotV9DdQid5dBBoigHu3NFasm7VCVgaiPnuT6MNAuZJAFC2nyyjqkxkMf4oF8bRLhPrCFxmpNGpm8YgNZWn",
  "key14": "2XSfZdQtF5gQkEZEipVav84n5ZbJD624jPjXR8U5W27xQxxWUiy7FFVHKFkjcJxj6D279i3d2ABYi196tNwSyFzq",
  "key15": "4GRo4mUUgL7CZPBwQVg8mwYgmjx7i79Ef52727YEVkrJzNnSm3p6PJ2im1paU1Y9o3xeVXQ1KfJMjrZ7AhgMxchF",
  "key16": "Jsbzhfg4urL5dwuc2MRN1jGZzE184H1YiDpsohCKTqmqhT5sDZ8MNWys6RjvqL7SMnWXWsMuZU2E6AMgqjFNGNN",
  "key17": "3R6pLNS98JFiVtCn1o6SHodVBmcexuzS2nG6gnforfPUEmvu66N2zNn8ZuqK2JB3zUZ228QPZ616AegbgkKdXnLh",
  "key18": "4HRZwpCZki4xoZTdmkQSvFK7QsRi2gdKVVJSKFm15wBcHnkYN9uuoKfE25oTr6udzvGUH9oZ1EEAycXJaadoJWG",
  "key19": "3qvKCMCCdrGSxohBiwF17sWWZMdUVzibLEi4d6wtEUd4EeYJ9KSwrLWr1oNtmL5Egi1UJ5oiPEsJJPyZjjn3otgX",
  "key20": "5namRiCCnr291ntLAhhK562bc5FA3wkh8wX92Z1Ymy1UFpBC5zMwYp8jXyonvdM5ey4Jjb6Kuxp7FBveshjKsTV2",
  "key21": "4ukhrxz4yxCzxRwpakwF9Swrdfavd1J6qubpwhmuUkq9kA3ti8xe39De1bRNMj5fXUHCjUNmbZc9xuxqvn3dVUB9",
  "key22": "2wMMGEhtD6L4NhWVrLycZ1PCxLUZ3HTuLbMHrMvFJ3JjfUAgvk4PWyAqQDGXEwa3viyTJwP5nrhaekN5YsXcCRRa",
  "key23": "2LDFQ9eH4yMhtfxHqXRxZBh87KwawvSaU1xNwWDXsihadZ2LbCgyd4zzyMarX5ut3VUKGFTG7Bmi6SSTEYue7FvQ",
  "key24": "jQFxV6tRUqRosUgvXnRFyqyQWFw5nvYWBwGcaWoVvKHzShx9m3PCcDCLpoW9EECq9gQZTt5m5AjBzmgnx4mJA26",
  "key25": "56EPsB6WwAfrLH7e888XWLfxayDXnu2QYQhoSDpzWsLHWgD6hNP249tHkQHyq2JHe25NJ5eNm3pnGsfjL5ZV33Ae",
  "key26": "4pTHXLzmk6gz11HgcgvZWLc8kVnQKN9Xh4eRcyKeFSCntDJTTbELCo5r2mEWvZApVTsNwPMUni3528mQ2uSu7kLd",
  "key27": "yGtGdyYo6B5XHhF5j67MvPw2uX2UUWggQdxe8N7axCy7gwvTpscHVPpYZcDTkwfTAXAxUgSd4yML6m3si5p2zaT",
  "key28": "adrhG8EuNyVimtaHnCHUriJV9UwwSKpZMM1tBjvh3ADtfN8DL3wchq9DbEw7ReHWBcNenxhFgtxPTDNHxExtkdv",
  "key29": "4YTbrET2WV3mNvs1pGjAoUhc7kmyDsjmpgGzSx2Apim6E5b7wsbhSUnmHaMh548vdDL3gxzN9KvaGc4QY2REvcs1",
  "key30": "9r4dfJbhBaXf2x4j1s7HsQBHLXY8GhMLSgNhsSBsNru27WewvTVpN1samMQhqcnG3heoRvd2vNibRjH3z8doJ6N",
  "key31": "3CmfDQ254yTvxei62LJgDxwbfDUVt6PLvpHjhfsLgcNiS5xZ9mcoHLapxykc1rKNfhaz4BvYgksJR3u1ouTEGZTa",
  "key32": "NmBzt4bPLQGtnkGTKwdk6sBNoftDwNZGHHC1Gn7u48hgW54tRRydcCMkWtwGerH8KLyPQmSVFvAnqrcZzFVb371",
  "key33": "3RrHFpPG9AuCpf3xUHvLBDUwN9Lru5DNLhg6qZSF6mScmfWXrkQqH3ZJirUaRgCRUgT4Bs8BEqn6XGtPcSpJJGq5",
  "key34": "4iYvyErG3miKHQWaodXWLw8sd7GCWjuvzBDEYHihDnuCzFp9nr6TpfETrmJPFUNmqDZULFdCZCXHb9n2eMjBkxqe",
  "key35": "49Fgf1Kd8DaymnnqkP9ZNDwu9zoMiuk6KT1hySaAAkfJgaY3LvM1nsmZwyTyEvx7P4zfbShuLYfeASkwiwKJtgwb",
  "key36": "2aLXWuUqWJam3eCWqgraKemMrGVSbgZzgEZ8GKAeLnFEqK393rHRCXf8RCYg7M3iU4TAiqQi6PZw8asWyRBKgdcU",
  "key37": "4smQbk1XiAtPQs1SzmiLHL2twUNQ6KvJzrii5fcmkT2wpbyfdSzq4GKpZvMpBsNSrBFY9MzFazZVFWeLfLP6quG2",
  "key38": "PfxkJyoySoogSy4MzVPNnwcE9XtAS9mSoFx2PmFri9BwrFFrboTtpc9axVFEdRrctMKCEvaprTg65akzmvjyfd8",
  "key39": "5sqSEPVY8caGT3uPTEeoPyGW6djBLCjYpUWCR1hAZmDMU3XaatdcqP1TqSbDcUy1iqNvNHy2UhDSma4PysgbCypf"
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
