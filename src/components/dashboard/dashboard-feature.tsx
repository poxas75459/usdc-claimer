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
    "5uPRZNW3DsXqpm1NhdedSmuQmbrPPBjCMH1MDi7BbDfJAgsQSccdBHdD71pSdRKgmFKC5J8j56CTkik7jWxAwBDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NY58QUYnRhu4vZ955F3xuFSZk1LdqyMeQDc1PqSMmG8vNTS4pEKQ6BzRqQZwfsw4WAFqsckEqvTGE3q8iBofMAK",
  "key1": "BQviE6nVBpppcFggFrhE7CSnKBgtpLbaRi18nhffdTVfN3mHxiRUw5ug5Xd5FHgS1aNiE69u9jZTj7J1xKmLpTy",
  "key2": "3KdQ9ErD6vQAb3PEJYU8eB4s2QgJh1mJDwySxuh5a8iEupcxCHfb8aDA7wv585v7E1nqxT9YTPw5PBtzJnFYgJnu",
  "key3": "DGPvRxNtG4JM3hP56F1wMzZzBfoVvMz2yCr4XaSSpFBU2vp3RwBAa6sJyvyS8KH6nYyWbLNcWsCQWcqqjVKERQX",
  "key4": "38ZxxyvM51ocDpsXAidJeQUDPzYStp8NAyMpqMJQSL4xRx9vLgXT7pLJBhhfjQQr3t8TFXMF9oGiBqHZEBpYdACu",
  "key5": "3sJ5qD2E5ad4BNVeTvGnq1CUQvo43G1d3jQUWL2sYhtfFVbiwNwGDZdRYaWQ1xZe1MLumREzEQw9Nv2i2Vev15Y8",
  "key6": "2kPq6FG5uotMnxCdyEyEHmRWVMm8hswgF7LsyfwRsqSDBKoBXwJRmW39rGX17FD4VsJm4KZgq6XuacLo4my1LxJH",
  "key7": "5kg3xDGrjyrR4MU6DYuijgeuVtUcJfYx11VbLcJxrRrKHjK1Gjvip3x4qp5AuxU2Pb8ggeD7rZXYGJCXZjyuRGyb",
  "key8": "2zJK7DJG2q8P2wz63gop9HbXKf2D4NzdF29ceET7HmJ1B1TT8sk6cKjVVy1AcWbEJbrNpX6uwgujLLCbLYH29yA5",
  "key9": "X72rK3FptkL2EfceFLA5agbDuDN4fca1xES6HjK6EDbsRWHrETrqYdq8eKmM6XqNx5YmrmfJRru3kQyYDJUozMk",
  "key10": "2WjmUaiSUL9A3JmooESNpYdMy7UEDFZm8WmscDGQbdD5XmJZVCeYvQS2rNeqY69k3uSWJWW8jABCV5csGoh28ene",
  "key11": "31TLMdZmiCnrv5UQJ1ccM15YWhPnqGLBGLPgJdaBiKLPjA4JR6chJgqAJCo3cy8BwfpUUH5HhC82gPu4kQjvCtch",
  "key12": "4SyWciymMgowYoTmakSJJmnT6VVJSWZnEwDrRHgjvfp7W3XLhgZVyVTBWzjgvMjQEcL3VaxQfUqpJ4ERZh9n3fwv",
  "key13": "4FxngeSRgLsQ75mHRpXTUJdfdvd3yGpupbcQdQZar61fYc7YXxf6FjobPPxzjrcsLJLDEwpEAdxX99EpbndgDj2q",
  "key14": "4zWYqFxGMviQHXCtfTbGHWQgGCZxaqNCH8uG34QoyGSGEd75tMC5eWTEdD465kqDNrsHScFuzjVV4YumbL6e1Qcd",
  "key15": "3zsEscJvRWGde3KcYQbp7hjZg26pUw7EiivDGhS4HqwsYZ4sVabuHzMT8F3qEUjoDdiTcLf2a6Qa6vV2ki888WbM",
  "key16": "4kr6xf7YpKxkFzB96JpvMGWZkGdmyjQxJ2vuMngSTPQ4b83nYn3GLkXAKHKvWcGAfUhGazTBdpxKX2C7KPqLJWJ1",
  "key17": "3K5ZTinZ5hpuL58R6Wn3HPqxarBH3wa7UEHRMyb65X3X4bWjThoog8K9yS39R6pVarW4QkxxMkPQeEYh3twM3SLf",
  "key18": "5hDjUHG4N5yw9WePqq2rEWdA5sp85ha6rMDUL73nY9Fc99iuB8p8LjpVDKkenyMtoabevVictAEgrvJ9s5SNoynN",
  "key19": "4LupHwyYfkbNiwX2mFN3utUvK5HMA4jafwxNH9gah8o9kCBdxC5yR2LpNPDHiFYhpgYGdVbR8srU3CRZ9K5DFsvo",
  "key20": "51WofHCm4YKbYt3Ewg5BKjc2XiimAtKM5SzYL1jjZRWFZidWuJyFu527mFwt3CRQgSc9o3L1ExGYSACn7NR2r5Vf",
  "key21": "23oGEMuxfXWmn6wLkQGKY8H4C5FphyYYjun8EqhRiQ6j9V3kcEcd6PnRR3GYodoHsVW4ZzgcW6ixT5n3d8wGDQfA",
  "key22": "5jCY7rnxXDK9hv1bfmHoirWrkNFLYeB8AmyX7xLKurk44xAzVnQnSMKufVrpYeuKw4aa3h2nyRvLYozi3hHGjsgV",
  "key23": "fAn9Pp8KSkTKEzBCUdrYyafAovPmhH5okMVsCX4jDABUPP4JsAamWpvvefBRnpZKGcfUFjgHFPjajDTQW7b4yzU",
  "key24": "4PpmSP562c2NoZV5eHceg11CQ98B5cNbffTvEeXjX7PD2fKvSeQK3GmrmLqe2pRphEoutrM2tKgAfAgGmda3jJL5",
  "key25": "E8pM93vvtxK9dXtGsj2BfkxATVX2sysjzHpjGjfab6bWGAsKee3KgQR9GbhDGp1LYuy338PB1x7t485BTVAyCag",
  "key26": "5JB5hRAV1W8Q67TSX8XLCA9cVWQofazWZLVx62oXaXfdoiurZ8BHLCwgE19K6SQkpBPAfU6znaWeDoxotb98kD6H",
  "key27": "2PdqBUqcFbA7VGJ7ijDej1JoT85WWhN3bUjd734xe4r633zq46XnskvJA3XQMs9ejds6DvPKjmAzU1Du8Ditf4KM",
  "key28": "5PPdaX18nFC7RQD9hfPi9uFK131gSfjHiSiCBp57qZbH2aw3iRo8Saff5uwnkjrSMJyYAMUk8zcgQPRmQJtxWTxq",
  "key29": "4kKD5NAtwu8JYRhyy8xcMLmTAWWmKXzbqEcDh9owr3PZv1HCZTFmy9LMqqj6SKuEGzypLUido3E95KVeSgR7hU5z",
  "key30": "f5PaewiAxDUKBq37Zbze1fx4Y6CNcNHn4jRcUHLkEEpzuWHM1nYZzcmTzBURFyX1mHikLesFPUaTjXhFDtvvzUM",
  "key31": "4FJGfQ4VcAaFvqKQo9Noba4tBQKKuqReopw9SgnQ1xtnVrNZUD8c3ZqHQVDk5QoEPX59QdiQXTUi9rDxedU8rBSH",
  "key32": "24zr1vSBCaYgH12xM9Qf8yGcS3bnJWEYDhmP2EyoqkKeZ9ectMy8ijLynn3S5LY8LCjTfxT8qdPwweDFXvfGAuHT",
  "key33": "3TQVvhrZW6Zh3JjpDGkA4N5KpEswwgtaLT9wNss6eNQ3htxZe5dxbBEFWQpy3UAPof78c8ox2twtPQmzamEXrNVT",
  "key34": "39aHBKYkCLGjixrmgH3Z3rMaULvzMrHZupr8XV8zb8o9mpHmXXzeuou9AtJGbB8Dbqhh92PC6Au5SvbSGLKBaQgu",
  "key35": "3KNqZ4E746ZMDcqAEgQHtV2iyfFiHTCdPrMtrAybQvHDh2QFT8K65n3dZiSVfgScZnqE3ux9R9RaptB6oQj5KREQ",
  "key36": "3cD6K3Tr2e86X53j655hCDszUCiZnD5Pwi9HSeav9Xm3Grj1ZRXd8Dhx4VVhhLAU9PhiJH3TYkuUKVs4ifRwWZMv",
  "key37": "3Wco33LjXPHuTVx8uDvtXCR5E95ju5pGHigkirrmaibeeG7D8GS1LdXC4fX4CutNxRXZkLzuTvDEkeZNyv9AiZXo",
  "key38": "5xpAGo5uFHpCL7k2oza2U1gWkEkjT38MuUeX8ydPsNALceHYwvUA5qCamdoCL3q52ChrqDoDqhjd16qH7fWoBaMN",
  "key39": "5zf4hgzxk31G6EQCvbnYQMeJEkuosYU5k9HyHWz98HMc8D38VNeDsBQdcQkYQX1JbTVSzodyLSpZsW7ogw8e1DYk",
  "key40": "3YvAaAbRGrbDmSa4Hx4kduRqmWKvn2bYhaUYnXTP1verQvzpJF7h9NVsJ1ATPbkBnR2NqJz8Tq6LaFu251XQfDF1",
  "key41": "4Y1igawHFggArA2sxpVFU5w9xKhShwG9Y6pMh2ShPaYJ4NtvrRh1TS7Ut4aa3x2GHMhFp8YRGLhEhxrYS7jVEjcw",
  "key42": "3mqLJD1qvmwGd9ZvUjgEjpK7ZjAtNfGjiBVLLihKHXpTwMvcVbyipvAjK42n8zyHj38zBxNSWowSmooqfUr8eeuy",
  "key43": "2YnFYMoxY9PTFge895wcXYePqRkMFQf4z7V6smvJVHxmYEoS5p55pNpDugZwhp258U6d1Bu4mSZp32MjtiWPtxzo",
  "key44": "45wPkvK6Ee7qDPBuqFHZY3HcquDN5eZoK4SPLN3fTAmHH6NVwhYpfrg54wg3WygBSNQmPRgThvDTaDbEc2zF7Loi"
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
