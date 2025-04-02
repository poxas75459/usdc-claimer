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
    "2r76Fkd93S8hsDXrhdZoHLJZNW69jfwMegLXKMBpnxpBX2MNM2A3U8cZxavwcdvgm5knmSk4t1YJS3DddAHM1wfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gRogNnGtAUMg7d7E4NKRLdKEX2nscpUj63BvGdbfaLCkdfJxCupVfGuFzYAQoNMCRHtVo8L5JPP6tpYqZxCYmqj",
  "key1": "PmTo658r7di4isK1HjCZ9feyHXZ8dENzGeaH547mMdcpN1aEhwJFF2FJo5a6ZEfVNBDfqov3DeLmDvQmp5XHdHZ",
  "key2": "bAiMTskwRbvXFwVVdynapPD3FGXH7hN9YBgttbjFJ7k3eas5wNtpwymLFbYSfKRD5ki9QdWnC4s53gpJ8Q7tVfx",
  "key3": "3z4podJx8WrQX15cSfHGDUjiLCP6sHdsWiTEWzHm9eCzb2bunkA8v2pZjDXw3GLnES1zNvGa64Eiwyq49UHdm1mr",
  "key4": "4XbN6UaZZX8fnERxsvB4q8XmzXXJoNP7G7zceHuatvk4dnSvmx4fx498CdbesTofyVu6NjjdEDbH9PF1Ua1kyG5h",
  "key5": "4ULTRuT7B4ML3ZFosQonMA8kHDYEn4DST2muYZtfvbwBWTLs9YBR69JRD655TkGpQMKzM4qPzrHAHgnXtGow32mw",
  "key6": "MUN8N16dMyevawynPjvYJpy26wTELHjvQWiGxaffyyXh9GstdnAnDsnZHEVwMoyHuxk22JNCGUtM3wSJL2zp7yr",
  "key7": "HFoszk9kWgk5HTsGFz1hLpZKofhapYcSnjsU4Sq5BZ4NcfFs85npMKaM6b8Xd9wh7TL1XrUYx8ZjP39rihzLDag",
  "key8": "1LWQHKQfka2KCLUXHxBwJiXT8aCQ6ZYeuvZF53WfA3WPgp4QxZcTLD5vYArPhFhJQrRCwYGiq6S3hPqY79NwMRL",
  "key9": "fdg2dVfQVVAWZ6cmpPNKe84NjBmS6H12Dg6yUCCNUYagxinQCnLuEryjqgWpeKXffaqPpvzrodmie7dMpP7BpQ9",
  "key10": "3b45vSk7MJUxj4aHLEbWBjh8VNzb9BonRWfv2giuXoqewMLnkwNxz62zHC66CpSTWEgvgdQDz7Abk4nS4DgmY8sY",
  "key11": "24eGRVGbBzWwmaP8jz4XHiGpd112Vp5pyvrra5X57awz7G6mRLjbNJiCtMzeRteWcvMyPuNPi3zX32NZ9TF8nHzK",
  "key12": "JP4tVc9VfZvezuLf699LP1YtLq5H3Snp9B55UQ1DqhdBXkweBo48yrxxUds3NjoU4Tr17jzcGNiez18b5CXVxf2",
  "key13": "sXSzWTDxgPrtS5Xdp9TSjoLAvvyh8qBWQZt9qvvAUk8ohXetBQNPNUcmSWnBNWeqUT494XUryB15NS17HeV8BDU",
  "key14": "4mXtVGAg8awfPGmV8XJeA7RSxFBVMEEVVZZZwTWnbNz7hAfVogQYHC162v751y7zGAgQMDfTv1Ag3wUMY4zRQMZ2",
  "key15": "3yp83JypHb4wfeEkd6jWEUSTCP1xcsewCkMe9Se8LWPYtgG11maXWcaMc53KiErZ5zSHvTMfJiExFc3Bs5Hsp1w",
  "key16": "2itHR9aYptVduwq8NF3gi8H3ZB85Xv3G9gfb4Hp3cB4zku7FiZ1UTR5RjKKLUAaMmouCakS2qfGJJ2cCNftbeY2T",
  "key17": "3Lj9pzBYhpe29x5cByic9uvY6PWZ28ZHddMxs1BZRH5vAQPNjnxU14qQTfj5DdTy219h3nTPUEX9PLMbRjBTBzNS",
  "key18": "3iZkzLqaJK6dkET5hD9Gkw7pmq1hMEeKB62YVLR1Mx9t13gJfkVpi2iqgKQra6VwasFTETfNdyXRGVocCPnWbbp9",
  "key19": "b9pEhMqyvHCncvktrJQsAJ28oWdtg1dHYrmjgV7x7ZxTjH3JH8ZPKH1tYYw9u3sG3rPbnK8LLUr91jL3JXM3mPB",
  "key20": "65spSfDhefKPvhEUnweGFz6RRaSx2iFuD23MRz7qb8MaCgMWMf4GCRKoWf6VnmW3GPJNQKTEhazCz9b9FeFiFWnf",
  "key21": "3DQ8VrA3SHEXuCDbQBvTE3LMLbMtvU1BdryDAs3g7usC2boUUiitdz56YJQjyYCxBsx4uGCUnWs1w5mmz4FArKwj",
  "key22": "3xJuBD1CSR16nw1H7uXp4T2waqddNyhHDVGtepDHgpZLfQ8Thxvha1mBuYDPvLR1vP8miCcT6HLVgC5jmRbR3npW",
  "key23": "5iKcbvGFbmt5LaC2rTWv7icJbxmR1isifwaQ1mDn8QLogRZYm5XJwRwNP3ByQc1oMmS6baLdskLSJ4CVrgKWwCX4",
  "key24": "2CFQmtC5zzx4oYPtDrFsY6yvLx14eAYkRn6bAx4HMwEQHrHTTwVRZ3CaauMkjfa2nqPXXZjMzcCyUyR3nkPJKUx3",
  "key25": "5T55VU2A3bzmYYXZeZ36zPpux4QYLyPTseewQ9xT84g9NRu5kg3w6BwHErxmdXVeL15H8vZyDmyGoR8hsn6MGY1N",
  "key26": "5KXGjSbb6EdakPhdmNQ48sPdCsjunR6H9ALyAFX1r6feVsX3oW7U9ErP9RxdWcdzcZifV938Ek4f3khg7YJ7pTqA",
  "key27": "5gm2MGF1Z1VQpz3xgk2rdWEw87XdshqJRGoqr38aEVWy5aPjjeGxEZzNNc1tGU835eRvLVWHNZ6eKqk2neRkpoFZ",
  "key28": "2fUc3PahXqtZfKLdaAofzU9eu2cvfV9S6Zq28wsjEv7Lb6wVmVeRB3D3eKFcCaQFzcLCR3GiPXLVJ1wqtwRjgwn1",
  "key29": "WttyVKgmi7DvDuZqKHrpmWLYSDr3ARuMg9EZfM7gZHDDfRCEbg2PwcegKR962H9cv4SQh4SvHqEEZbfPrCvknqW",
  "key30": "23937zXCUhLKEKuhesKei6rBQvmMyGTL1L7mXE6XGGSPHbYwVdhYbi1RZKPT5MNxnvHjDLZyKXqNbym5LyY3F6UE",
  "key31": "4wER3gF6HY6WGqZqgcNUY4GdQ3YgqF7i4oZm1FP3JJ1vrgXq7n93PeTVKMSrGAdJmwMNf2421QXqu9Ue3hjiTmWJ",
  "key32": "MAJxWmMqXNXsB9fZx2zfgDt3Ag7ff8svimAukJDfh8EPJnsnxrSKGQzPpez9XeXsnUy2rf1SWebuH4f9c24cwk8",
  "key33": "48tNa2gx15DgyYDZExA8qqZ2QFGWvnT4iPFkj9qj2LWvC9rmcSA2ZcMD2pic3SNeF6DFR7UWeuNZ5GZ1n9RW9AEw"
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
