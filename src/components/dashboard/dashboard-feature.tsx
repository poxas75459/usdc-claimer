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
    "5hZZwLgCTEnUPTpQL9t6DqfPmsdeFoiBG9afyjtjHmer3JqRuzbtR6tFAXwMxD3CaHAvqNt97exGJYjfGgNxVzfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NadjHteAVBZvGPkuL21vxbB93yj3USDBx2AZmR4b6vxLkxdmc6WaeMC6GxQDNahEGoTbjqsLWSRwG7MoKatTG1L",
  "key1": "NrMwkGLtZUjThFmCQbZHZ7nuvsJ4kePDgLyhF2px6tjtbvWRntdyZha1jPynNvnXUQMAQMpELBbiUpuh1yidqdc",
  "key2": "57J3R9aP1jNzNEiGvbYpxQuFauJUEbBKXZLLoGcjurg6JYEg1pzBfyfLNxPfdThS7g2KWtRSvPGjxnoW9GVthurW",
  "key3": "46ztRU2gtCrEYY52sawMzMXsghsBdmT54YjF2iPvEnWJDWBiy2iZAKCfprvPxFt2ybY3GDf7dYx5W57CqYWBqSCd",
  "key4": "2k5tDpcBEtHfA6SahcLjyzxgqaFcXDbVPxJt87ZyjpC3k17P8msEHkMfJyLkMSj9KfWtD7dCTRbDzfUp9Db6XxrE",
  "key5": "5uTYd5jVKLotVeSJsDTqvWMXWRAU4EKqWsRVyuWEJxTmX2otmC8DWbXasgysk4WuVCUgYRFE57twuA8jGBHbitqQ",
  "key6": "5fungasJNQiJQJy3ZT7SWsKSnrmLEiCLkFDcafJ8F7L2ehRZJPfWx4sBcHPMAv8598MgtTE2FZPddbY8fncW74SM",
  "key7": "63JEPQUKKRbMYkT8tsBDPbZchtR52FujpLzHu2YvMLyZzApZmeiqCQEYbLAVpW8QqkTsYnfYcHHR1dTmDYw7w6Y8",
  "key8": "66WRxstjJedbwVpqg1ruBWz3enCjNnhajUSCe1jT84WAWxr9Q72Xzv4RqCXiiV5GFprEhZaEMbADuqBfUbLZWWrn",
  "key9": "51wLtHhRyYyFH13J4BBhXu1WZJj7VdcKbe79WuHQnjbmoKPMmnSv5HnG9ZACeqSu4z6q919wBAMaFtd1GYaF5Hkd",
  "key10": "3DbQmvFBH8p7qRsj2GoGDtZS9mL122435E4LRGHm2QG4jC4ru75Vc7zFWhRfXCXoYNQCxESWHvAnZRB6wZhan3MP",
  "key11": "4KM3P1kb5bN24QeTdiFJrZ4jXh3u4k44xbx4dyqmfpVrgVZEqcGudcJbxApZDeTewzxMfCEtTD73RHJT9UYy8WUK",
  "key12": "5KYmwWqt8jnHtGEcSBitX8ScM2i2Jx1PtWFDsZuBsehDswrJPCxLD5LhgN7TMSqSTi7rjMpfTeRyePwkhZquXum1",
  "key13": "5kv1CzJhWmhf6Zx1HK9apeKVcxzJec3LM959P8cCWMiFTNUpVe6LbEzZh6EgeTZ2dEAk4nzTos7ft58R44611Eek",
  "key14": "5CkMGQz41p8mNZgQHdcPPTVqHMjE5Lt8yPt3eruNLpTa6c1ZEmtTG1DqA6ELn8eZfQGLAYasKnapAxpmh93fWoRo",
  "key15": "54Fon4wKBUw4nT7PGUhaygmg5DXM2FgDi41vn8toesZe4JLn4AYTut3Ptjh45Js5AH3XF9EqWFi7wXEirN9vb21R",
  "key16": "2w5DFt6nrbTxqdCU58A97Jy5u1Q6nsxoYRq3n8doYUnWNjdKCXcdgEAgWcke22DQXtAucUj87EpdxBVvZaEStZtp",
  "key17": "3R8in9pTmFGjC2brYFrDE8GewZNurfVtwqEKfUCKPM9VoAbRYYskPb3Miuj3TAP6HqRYJ7nm6DrWo5pj6FkQFBcW",
  "key18": "4ZN9F4BymJN7mL2pj3H4uucRJX2KrBSkaPbJ38YMsz7JrZWH8Ac47nsivmVpgRjaKuaP51jdWUcRHS14SsRVLuXt",
  "key19": "2WWcG2hpsGFE7JLG18hDtL25XKBPkHfy8eRXPR8DW99cbZRoZeJPERjVVnZ46pnJpZVzcAkRtE5wgTKroLgF1XSV",
  "key20": "2idw3pEUixA8ktHad4JXwjA8H89pzpWArsHtftAeZp3eoiFacLrCyk1nL91EZwnYoHdU4rr9XsVxLfeXD6a8vDBS",
  "key21": "3dgTCsT8MsNBFb4Eiht6E6NkzALtQZPEBESfSq1Bb3kczBxDsbhQY3oqufbHZhgNGW5CWW7DDtBZAMFETEWAo2Hv",
  "key22": "pjKszq88nWVHBe8XusUXeWWzGz5kyGRi4mBgmnYbTVPHzqhTCXa8RMwPLAuZ9D7bRRvCSuK96xxgrpMrGAyBr3r",
  "key23": "22sXPrvhk5EzcW2koa8dwmmTQYTBTwiLvWsHFnmWxG4x1Wfkw1XBECGkxC3hFQRmtiGZKNW1XdeJgc9xDjDKgnQW",
  "key24": "FRJ3JekRPsZWUzKeMHhXhYsD66aZ2uP959U2BJ6Ah4cCg8LzGAhteTcRj4s6cmxjecaNpDRfPP16UqZ2Z87VTcs",
  "key25": "2rcFTSMuo9t11bwuug6AvygyeUhqFbn6gce1fDGcprCZiGE9BG565ipeJjwL8hrPgxYi4DeiUVmTfP1pWNCHo6Xw",
  "key26": "219fGuAccdDb4jz6iEzCvVtdYo9gLQ1vuZrGuhwwSMw81yPpePBRtoXDNVAztNsmqfWjdwaQwBwbSnGSaQYPvWZu",
  "key27": "4cgBXgMpWrzAWsGAxxNa84mTMqXT2vbiE2aSTqovXGX9fHPPJx8U3osDqAuqVGgxPZXdqfe6T4JwDiBZveMFG5SY",
  "key28": "5b6hhezgQwMRzoSEKfUygkiEZmNJMsVWpnKzvASGJhotCzSARrCKvfayiC2i8s1ejhbWh1JxUgVF8ZTAoMAjixzC",
  "key29": "56tLSajZ4b9rqboTAmSmiggpENJub6CdxHcR1HjcfK3But9cP32bvNZ4e1XvAdG3KRgkUQnAjVPwecDvoGSGrN5n",
  "key30": "mf2zhEFAEWeQZVXen1nLebpTf6p62RKJV7W2AkB44dF6RhFxQ2BiKejsubMyZ7YrAagSJ2wwkobCvqMC7adam7y",
  "key31": "3N5Mfqgoz9h3eMZSE51k9sebA14Yk5hyMtHrsbUZg4kJh3Qdv6AvNfDZpgRqqGr1Yz1nn9yJZQkEfgP7GLqde1gU",
  "key32": "42eC2Vi2pYj8G7qmNBqw656LwghToZHxs6w2gmcxVojfUmn7yN3VniDtpFsbAXoVA45wjvf8prNcua6e5QUdq4UP",
  "key33": "2dyNp3vgz2t2LJApyXyXHh5csQSaSxrXyM15tQNiQSQx4QHNibkrqigdAbesFMjq9yHVJdESn9Btpg8pfUr9pnXJ",
  "key34": "SrXLXTX1mxJifQoyhxtTdHebE6YTDAzXhq2J1v1cKq7jewZ5sVEWhKm4XewrtZ8kGzWmvibTYqrp1ALXY2eHcPi"
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
