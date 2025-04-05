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
    "2VFrzcTd9PFEpjiFWP9APdwHS6z9kok8gRh8USqdrgJk2abyyWCQvuvYerfb8ZnXaR4XVPsitMBfUMZ7CdxU8BVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPvgvqGs8oBmogu4LD83Jt3ym2MZPEv1W1c98Ji5CTgRCW3SvcjwZQT1expHtQt2Sn4RTvHJSHCGthwYwMdso25",
  "key1": "44L1qm28tm7yWA9wGgDdVRdwcV4L5TY3nMRWvy74qSAWZj5PPvVri7Jx478613X5PGx6S1yxNgUzXt5C15Vjr1rf",
  "key2": "2oFNA8vbjHCnW79YLjWVTMZFRvv7cTwGbpxPApkVDaBHzAgnaFcbA2vdsJvehrMasvRdZEfhX6Tki77xZbFPuuw4",
  "key3": "49fKoix9MJKsoNqTW15DyahCjmimZ7b8NW12Er1WvxdPjeteeF5MyC1qHvhnxhe1bgUarpRyau5gdcq1rkbcDrkR",
  "key4": "2xc14dEamnPehrtM24n49rhneNkzb4vNMbwqHWY5u1TmD2yUEk1ddc1JatEAqkhaJsVdEQG9fhTweUHTVoG5M6qh",
  "key5": "36tncTjSEDGfkcmDxghCVSvYrdkDJYovC1M1ep2oSaqAYNDT6ziadbSkqihTXksvyP5SFgGnyGVWS9fKkCRjshxK",
  "key6": "2B5wNGQU642BjCaArSjmmR3xydGVCuchacduXsTQgcvaoRm8nLa63zJEjNNAtMCEgVherwVht5Guoo6TUuH87y2G",
  "key7": "3B392EvK1hRGLpMftq1A25GQkkhLuSuXepjWw6baFgaaKhY4r3P8Jxmg1S2Mm8QStTbaJjbgfxhtBLCvSWHapkB9",
  "key8": "4BEC8PW4ocw1ZKZPMCVSwhW7grDRDnYZEwPwxbW8kzrjbsPmqMkTRKZRZmQSqg7cv4tp1WwyNaLBae1PvjJRmkiq",
  "key9": "4peFVH358q6upgDsBkoRA796e4XZCBZGWM38f8nQg52Ca6iAarYbcNa84UWv5T2wBaSgfCHMP8pKPvwM3Sd6qzQg",
  "key10": "5FRLSmeUdBS8DGbcMjpFV3t4JyHzQfsQey7bJ2sSYKfN4fSV8BaFhgA73jUjYBquUSposAqvRg5GSYHyVzuNpzEQ",
  "key11": "4bfmRRrckts4CuXw6mZcAbT5n3S1kXPNg7QNab7MxieKjkLvG8P1wtf7JziTSPbCYxELatZCSdE6KFXG8YNoUB3q",
  "key12": "318EyA6aHFrDneuFr6o3zkisEjRxstFLNYvNFU8e4vvF5o3HhRAMwsNufkSB3DWGtU4aMnUedvefQt2SpUkAC96V",
  "key13": "5HWCGCG2DVrMSxLz71QYRisVUMJaG6WS9wsNofpNES14JZWaAmzrdceqK8WteGCA8MPGRt5zncn7zSaGxTvCGQUH",
  "key14": "HvaKb3y4ZRacqRViLPoRmbtcmY6AaugdojYa3WkConKqe1hME9vyU9NXVwFwEREhiCEBt8najfqggrVwHjp9nX4",
  "key15": "638a45Ju6Zzs2J5SEQ62EBPTxYDdFijoZpnAbHYzyYxTX8HPnbZFSBXhgV27i8VUFGFuC5hMpLSQNeKixhJMS1vK",
  "key16": "9azUbV18A8StqM5jKJde4B9GbaMNKMX9cpJjYtKZnVvBP9UZaZ5KsaVhSVw2xFvFWaXL5TRxp9x8jbk7DUpxmVm",
  "key17": "5kLxeM9RechKLwGW6gzhbu64EttuVBXWrtgrvmXHDHjbFebGcmUqsxPVjWto49QeBjSuomk48WeDTC11evSu7aNr",
  "key18": "4TkSLd2BGRjtiawU4NBADVNmeqePsGcVVfm32BmJDJW1VdxmoDVsoPfbBECfhGovUPPvc2LuRzQTZa43kQaGpsZj",
  "key19": "3HZ9C5uyDf4gadwoGVLTFgN4wvsffgQgP6Z434yv5MZwAuVVeCWa6nT3AgZzDtMEBU4megrUx7sm6QxPbHbkLJA2",
  "key20": "4ntZfaXRg3tPaRTrPoyceM79rmKqB9sRMkyzvzew2wPvJc6TCYMCWQE3gC8kqKDKKKTCY8XLr8Eoi9Vp5WAZwmEa",
  "key21": "48uU8NM8yeYVFQyVHjy4wTVnJuLhFueM3qHW2zkK2pBSV6zAtVE5QiQvBDmDwmTiqXfxaY6aNNdtu5wfFvZjoJnx",
  "key22": "35FbGYPr2wBkATn914ADUpwZRnr1QPHVQAxW3PXFjmVxmGCmhtpXqJYJULcwhEXaXrTNZRQ7KkLZKVSnu9pSBXyw",
  "key23": "536Gkx4PJ4UJn9na445PTbQwH9Gtx7pouADWotXXiTXdPeZnNYJe3kijDi5VThyku8n2HpZeqMk8fxFA1cztDSP7",
  "key24": "ThFuBtVB1A9BbyeUzf9xx7evSmwxHwXLGZYLJDfyEXBrL6G5opMniAgf591r42SPCczAE518CApg2uxyDAJY9Ds",
  "key25": "36BEGPgXTfUVbC9AgUyY3otWnM4BbVhnj5sJ8cebw1jaS6GyYoHaNKpgBS4qvgdHUKVRyJ9Ut9btaPasvyuGrnP2",
  "key26": "5VzwYsVFRnnfXmHWPJaUhcxh1xYTLK5yfqQdfVYzR6BZmwJiqMx2AuekqZXnkX7iJpMBxCPFjYtvshziLvn9P6oJ",
  "key27": "RPZY1B9DyGKHnNqCzg3habcZGhas3GafMRWBKRwPKcuVoTfiokW3ovYyYEmVn9aZT4fxY6ykvVvTqC4JszMv9Hp",
  "key28": "3rGG5rETDaBB7bDLygNV4wBdgPokZ3yiDZhN8aZULJf5CS4Su9q1WS7zfaS4ppYy5W2KndTxHkrNtJT6us2aZ43n",
  "key29": "3gX5Kcx468sW2dDACLnVzAaHK3DByahx1o1ZCpFtX2AJU8PD8JS7uGL4vBYyR5VWZsfhvPawLrptzf2iZ9Wv19sZ",
  "key30": "2CC8qqwPi5NT1Tt5xeemKeCYgASj4TvLa3JfKVcwQTcRtZtMqmySBBirDnNG6ZtRyQgw6vsGF4FJQN8a2yHen1ko",
  "key31": "3KhMjN3EyfUHE4EYZ36gd5EpA5AgMducGVAgZpkMFWHAZpEcWUJzubBv6UeUKrYNAazRDR8HLzp436MfEkbbJNWq",
  "key32": "4rx8MeLp7owhxFuCRWxPyNUg6JkxofLMwUwTFn7HLUt6RYcqCnWiQGitm2e3aQzk4EYpSqW8Tmxh4zEX8kzQr4Ve",
  "key33": "2ZvR6tHPNhmn85SUk1o4hqJ7MXhsTDzZCz6H9sUj1r57d3xAQfjqBkf98L1jy22CVV8wGvxbKbudXFhg1fTJcTyi"
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
