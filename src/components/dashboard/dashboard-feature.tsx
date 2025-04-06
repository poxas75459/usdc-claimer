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
    "2aRDZLBJKAYfpfHL3RL2PMWhph9zrfZkQ8cGu5QvqmFmU7sGyn6MV2VNgDB6S1ZfS277Vg8Ay13iDHGQz8ge1ZmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c33D3P9x2z8YfxVHso7x5JkHfD8p843y2bGQtziJdUeak2cpHVEykp8fLFjNJZHfDPQrBtoXRxHepyEV8y3BHpZ",
  "key1": "3iYbwgDbnqbYRLG3bPjGMY16fccGRFckW2nkWSxr5V4PpP2CctAuHAARY4XbZkvw2SZDXbLqDDB2pM8bbk8mTWHw",
  "key2": "nEZUrk81D2cCDAtjmQ5Z2z1kxzXfTrXuxMkVPwiehmZE8XHH7LemkajzZywKn4eaRmdLEiPkfG2sjUUrgT3nMsh",
  "key3": "2EF81mzvDaAbFQ16nbxmjfHj5zMt8RTMghsYvVsz4ULvqNgtgWCZFykuvETwfSLKcU54hoHNoCaVdJEzzPcjS9Lp",
  "key4": "9tWaY7UMCMCHimaThzTWHTdUXEz5JLBAHg4FHCAVZGUEypT7LmW3ivqJs11ToKaNdRnaNZPvcSN2VLwV9y11psD",
  "key5": "3WEM4EhPiy4L8xtLvBUXNv5VcceDVRW6gDD4StHDy2oLEcLX1zJa91G39hwM71vy6MaouuDGc8MquA3Eb6KhKJx5",
  "key6": "dDEvtrXZqjuKN5CzjfoTKqTBxXgoUPDweYbpu6hfC3e27c8f9ZemgJxtqmtTaS9u3xAvquPqbQFsaFJV1kQa56V",
  "key7": "5woEH7WwdJpV7T2KMueZ2x1EZ5cZYvNvc7oU7q5P5f5WrBu2FJe4bDfuBVMrV7F4FEvKG4P93gHaipwH5Ew4JvPL",
  "key8": "4S6KoWFLDKPWYfsBtqwQ51SaoiX5n4dG1Lqcj6KSxbsD8AJFVcK6M86XmMH7WtgKs3JP7geLwodew3qoKWfNPrB4",
  "key9": "47c3qY65qZTNpxV7vqwFqwvdzEcs9oDKN8WwvXkSHxeunnREc6KGCxT1u7ADpL1KnoZotqCAK6yNBpUadYyrowYJ",
  "key10": "3RfmX5ekqqmihD8ybAuYs5upsK4BMdDMfpnnc7A1QszshWYEiP3m7sKz6B1hUFKLXYg2rLuXx3jubc857bnUfpq5",
  "key11": "5B2kmzurMRNk56gYdQvqekeAZGWEjMPtg2Hjs2UHztY3smgPeMg9VDuZPaKGVBEq76dvNLXuVpXGvFXAcTDLoCsh",
  "key12": "5JU3nW3Y1j3pMX47Re2REgRVuWnvSz3z51YcKmhrvyFUpuJkutorST3n2KdZUwxPeFzDBJQCMaGuXRzRHeEznC2E",
  "key13": "EucvNpTZ1kn11t4uhJUQbsSMeekQqnR7RrMD1pdBz9G21nK69yS1EKu5r5EfhpJFZSGb42BScH19yC36pFA7SBM",
  "key14": "7FdmA94pTa7HLEounVDYTmXDHuV38vactRAFm1zaiDRYXdYinEBr9Pfs1XV7J1zfbP9TV7VFSWxEkH7ZE5yNsfi",
  "key15": "2yD1nvZwNnawuGAuNUBUFCBHhLT4frHRBjKM56JtbUWNA4dtTHd6eDxQDLBU1FKdMmz5GgqbmkTNYTBPeCfzk5Wm",
  "key16": "5qAyF1jBTQmiqVfcKg1Tdji2A6mxaqdHkjHcUPayDCoi65h4gznzcXf884ZzuKAFq52LjNZLPHHpgbxgVVad9p1F",
  "key17": "2tUNRz5yaincC17y1BMTLGZR6Xv9f8uMrLUhYMe2RCadR32sCBvCv5LTHXLUgfiXB9MchHK39EJyvyvozmWuwHmZ",
  "key18": "EqWKfXAzCoopRsGGRDA2gCxeC71fLsTi745p5rRxGanTmqZK4Ey572bZ3qkGQEJDcTTdYMjCz2vdtrqXGBMj3t8",
  "key19": "5t2XFa2CnU3vxu4f7dJyi4fhQf3eUkspbECzapV2KTTzWGCtyU5sTAkFCtmSbqCtgovmAyd7hi5zTjim7G2RK57P",
  "key20": "3wek1tCEByjHrMoQrn9bNMhUGsT7D9Af6vxEM1fsrKhVUwrUioGUMEmkoMKRh32L8pArgV3bEogCCCfohQuuKtdk",
  "key21": "5oLVNgqF9fmnRC7MvDDA9bVDwn3JyxfsAH7MaM2XFF1GYwKzduQZXf4xLujQqe2XewKpCMfXiVX61q5kRtcwiDRE",
  "key22": "4PMP8hCMhNuCUEw4WhMotqEQYqTDLKqS2pdfMSWCbibrjz6Bdam9e2uHpQKh1j5Le9vEtJu3BxjEFHxxbGe5Eh3",
  "key23": "5FW4BN5Wxcf3QAbQe19pwwQKPsxf169zCN8JdKoxpLjAz4XJV593ZM3U64ZTXCeMGkscxr1Knbr6bcrsXyrdsKE9",
  "key24": "3DazFqtfxYTVrh77wo8cChKhbZpSF9uB9YsZUnDTaKgUhgMdKy6ShHPJhr6w1Pz7v75dyiTuyahUJbWmHsBuBb8x",
  "key25": "4R4cqK4ug9QFtJT7JnTzqceZA2GhfFc6GRQL4wfexkrcu2vDeWVxpVvE8UTRkq86ixdBGbtowBBtChdLfKfXnbpC",
  "key26": "4iEvAfEb7rekFopWrfpZgX98gzN7wxdeHiy26gwHdAVRGANAdcFFLvpAFKL5pkqk4DpoMk2dWDMLsR9qXMwtzhQb",
  "key27": "5n6j77NECupMYfn71wdvkFJbzttm28RiLSFvAdDYW38y8b2KsCMeLGhtdFDug8SFNjLgENF7McxzaNNGFHXVPfVa",
  "key28": "i3bMVbS8eWUjTVuT4bkHNrYMu89daXoDwjekEMagdiXq2pBJSw3q8b9YkXUJ3scHR9VJ2TCJ5gstw4c61FUbtMx",
  "key29": "5oXCKSjSFKGMSpwYF3EjeWQFdhRtWjg6V8p577CLeDmMkG6pVvJoaExNnkymXgWRkC8nVf9DuowNnRqHk6wpMCoi",
  "key30": "2oSyTuLe6ziwGtgNnfUkrD7zSbXZyp6WfZQpCcp9Qm7k72d4Y9VJtZLF2Daf3UGcbsMcPZLNSqxUbHTXHWJmmKEG",
  "key31": "te4eRvV9REs7nFdD6Y6eUbyfaZ1XfHzsaaViUFEcEpTqV8g8NNqvFi3HWqZGcY1cMGxCNBRMGgq5TxgN5y7PpFy",
  "key32": "4EYYFcs2ss7bFNQVNEmBazhj5ieq49KgKsqSekXq95TBe1XsrxtwN6262GBVECVor6oLM6fEQExJZi9qBJct9p4i",
  "key33": "56aiQNpLf9G5qCS4tU3xDFUMHcrFXmAVWMrZovz7u3DxCVoTs1yV8cejo73HyJT6pyBF8gkEbjgidjHLhSuBZPxq",
  "key34": "662Zbed3Wx7nh5rkzEbZk1WRDmenwgSXwNyHW7hAWGLuvKnPRx4mLyEeJA55mWvXuTfkuEiQW9gNCLueo5aMTjDq",
  "key35": "22RjjguV77rJdP2qeR1PP9oJgEUUMGwTMAu7e2qPKRV8wQh2XNeYhTmgttkE62AP2PP8dcza79ipJbdP1C83EiHg",
  "key36": "C7C828aAhVj9F9hNUgp3cjNWLZzBGASCAJySaweewotnFwBvbT1TAifUMv5N37g1eUqPw7SndzADquqLvSEsBze",
  "key37": "2uq2Kwo4b5dpJGPnGJvsw2aZiHXVdN2qHRKBNSH1E7g6qorTUzPcY3EEuSNsoRvuMKPNiSmkZR2ARkTG1q6C7Qm",
  "key38": "5Yo8SUPjP8GofJD9fPeotvA7M28VU7SeUecw55VBzuRusVntyLD9dQFuUKZS6JgCBnL45HiKM5aFY5fQU41CpAkY",
  "key39": "2Ab6Sa7uAuVQbFK2uwJJ8KrXSoSwskmdPPkWbR71Ynui4SKAD76FZxuH8iR8b1bWQtSs3bA9tiYHg7oah4ML54Db",
  "key40": "27GrXdrBDh7TA29NJzcYGA4pwhjoCMvvGvryNwLUjEQRMZ6H5qMVcAjB7VuxAk71vtZw9v3ECW92YaNqnRMHht88",
  "key41": "3pzCvZRrvuKiaxg14CeYzjGKRQSBHnDmcTgKLKp5ZrWaCBUWmLbzScmFKiqFdVcTUWcqR1cdeR6X6G3rTuTP62xo",
  "key42": "4Kqifa3WsfAmeKB32SdctNME7D8GMT9rxPTvMiJy9PhgwBCsNxS5JKLSSjz8XbD9NpvU4MJFj9YQc6GdxmTDmwBH",
  "key43": "4KYaLwqzosY41wPFFa4iiTXSAQTuKee6ZoSvs45nnXMiQisMLo5mNy3ni7zLXp3RY18syTMMz9C1c32mrkZLJxrQ",
  "key44": "3SRLhzisMUrxTFphGuQ7goV8PPKZUZSsmpsDmTXuhkgANiRygrR4X23k6eSMYA9S6tEUqJmtvijRunV7fTz2UoJX",
  "key45": "52i9WEbi8nDiZjsuqb6bVWUaX4qbEYFbqxPMTZqjckqv3CxosgW7mnyXKfMb1yf4S6vBVi4TarbGdXpPLoweoNRP",
  "key46": "5NgyyxDbVjfHEyY1q9gYi3Vj39dmiBvxdTaLh4tSCeiRZNXFVLHrxKHP1k4j6ZPT6RMdz32feUJQH8R2vuJM5zvk",
  "key47": "4vaCmPnGsoxA2Ra5EwKanNxrBvzZEe94vxPZu5BWQFu92extfKFzx8WTHY4qWbyYGmApdHV5Q6UgMEQp89gjb19x",
  "key48": "2P39uRbCS4p5ZnbPqSYdtHPAQtjRtPE5yHNDb1acZ3A7SZzaYAGw2ydMvMmPaAXxffv8qS3LqjsissrxcEAat5Q9",
  "key49": "5HggMHAKAtboVdgNVzUfKYxbgWzyhb5Kx3Wrt5Fqvrt1wEPPvUUxPPtKNRsj6igBUh4BwB6Lr6qJvH98wy3VEFwY"
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
