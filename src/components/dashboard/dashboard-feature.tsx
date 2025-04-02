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
    "jwZaXTtPHTRedz4neMG8prWTNmZS4bgKS7wouEC6vFNJtEyXSayGwUHx2C8fFKi364K1oRS8jhV8bdQ8BtQb93Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCswKXNC6SzqdXboE1jcae3dh8n5y9uskoBmUT47mjLJhV2BuxbfrmpFyfE1e9AqGEknJdbuV6KVwPXCG78kSwf",
  "key1": "4PPUySNJ4cx1rJNet8oqedRYP8vyUEAwnVGEVLnU5FEbyVDFsjcVYsYbMY9CPULepLxb17TjkhbjewNEFvc7LCqW",
  "key2": "KtezvuQiU4hS5gPTj9hvpMMEjA2F9i5scsfoZsg8hwX6EhzeB7t38f89dJQpKjypzMRfpYBU1G1Xh9Fwp1hNrQk",
  "key3": "5TGUxuQShcXeipukSmHaTEciFftKTjhyGuwy3MkpxtcNBtAZ5T1AVFTeWnWnbCJ1uXKR3pvoLwq73K5q3bCNiwDp",
  "key4": "3y5wdRVUiSYswvCdx7H7h5UbtLYqoXoaKPNg6WeNmqkU553thWpgUDfdMS2RVqUUEHWq5jJYQbUVv35fLrZjJvD",
  "key5": "53zVanQWAkyJxQpbMvdPxLhj2yxniuYpukGnqeGu1YWSDGneBJ28gy3bFiNcCN4Mm8jMH6pXccnQS7fUtHifyNcr",
  "key6": "ir1zSK1AdpYqjUNtE8CJczcurqppbBU2itBTMpS5a6Kx2KqswVQ5ukkH61toP16rKjQXHbnWC8sBZbLL4tQUfdm",
  "key7": "5QWdYaqiPoX3adR9zZyEqqjZdzLdcE1hHjuJ9uE2k5UvjKMSNz9ZusjtuFmAZseLY7ERnJRXharKuRpm8LpV8MHr",
  "key8": "2LPqfCynpzefM3ygrq8RYquM8fxRWKCTEzqgpCe1D487zQEC7o9kCRDLy7nrmRKpyNAK95JVXngESSJzkcfzkEqo",
  "key9": "511NMhKnX3ZsmMKW6DmcnqP9rcPgkUrWTFXjhWLwE79p4QyqvLwiqNt3qpxRiVjP4SqqDsZYUQMdPrsdFkHEBivc",
  "key10": "2BBaP5v36Ly3VSrLAfYX9dg6amshp914qYAjxj5EUhbRxYfbkTuVqHvTXAjdGHw87G5bZDUFRioY8XeBKBv28gBz",
  "key11": "4skgMa9sewMiLJRybEoYACfmoMt3RMRfTtfyprpZxLk3kW3EPUPFig9SZLzt1QTTU7yNDWRCGsLZipQTPCKSjm3K",
  "key12": "8ENLuDTYYTbwM1ynVq6686fPnGQ6egTfE9mnN8L6dHxSwUuccApy7PRUkDbPCmXNd7ygpyBdt4rPdoc6SxASejk",
  "key13": "2YwUo8KBYFgdVmY6mAhenyLgwKuSgpdXihmoRrtV1hoh3ru3kqT1VjRECKUgKLb8br7UY199ARKC7xkiTUAgK9Ru",
  "key14": "qfnBFzUM5ftp3pBdSjWgLEWBCySBkS5c4cQuzry7kC8VfKVwDWoewECSRvbKR13SWRYrcBHAJrmKXbzW9K7N62T",
  "key15": "3Tr2PxpeiH3WHBVX9Y8L1Fev5zW9GEGa4fzPBF5c8TpdugRwVxMMWnhbnkLcQcR1a68tjnirzKrPq3L79pwUUhiJ",
  "key16": "ec4DhtiQT1T2rDxmdd29oyhtyu37qN3jZG5s4ddKVn5hQyxgGeCAb17XPohhAog74qy7tmQFVKBWmnkT8FYfs8B",
  "key17": "3wJgJPNQrcnfWDVFKJdLEkceXN5ts5W7VavwLdE3HrgjVGX92YzVyX8UExEXU5qc9J3c7T1z6YKBTEsYosGFuXHQ",
  "key18": "ErwTkhKRknjsxE7KUREHKxA7NY4u1ZaD6uzutyaGgpfipFMqteWaZRi43vsJgD8BA5oqxBGtKQ5CLXL2RTYgWnY",
  "key19": "2gKTYG8QKrHFVMSM2kH8yqQCZRT4VnyTAu1ZeGZ1U8FmuvGikDxsUbqG8fiXZ7daCLeeTXXrPVtZcnoUy9m1zeV9",
  "key20": "3tC1qiN51FDsasos4HraWgaYpVeGbucon1Lu3b7RbVN7TDiLF1vuBse1vxchJGNG6T5MRLV5BUxDRZvWsQfVx6c3",
  "key21": "4kDJehj2zsVzYiY2CspkQ3GenNRZ3oRScZxEoqgQv8Z7zTLhb4rtatjU2PxAMy3CyWzKgb2oM81hc3ZKTqDz1kGd",
  "key22": "3BKXPQ6uC6eypvU8ADK3Yyv1S7VHN6yGj6XfJxHvP1K8qbkenJS8mApKfSr2Cw3ziztYUaez4BWstywy7Mkn1Yqs",
  "key23": "5SeRZHkE8k7uJ141YL8MBy1rYMZVQfM2SVVCMy6xV2Yqgb1E9uY5xqGsGbsmP4T27tcXK9ptmGG68YafTqhS5K3q",
  "key24": "2Btat4YKPktHqfprmZJaLpBBnr3eFNtdDdWPBCqsKAFJZ8x5NuzuRbRs2SRtTxNy45onHHgcDwfQdVtBvd9oL9kL",
  "key25": "3HyFw5MPnCNryN5zq1tyH72NoaUNSmznRfnwxuiNu9Hsb9gdPRbmCaMQx5qb5hx5a5mSEmRmGMVrCrejo4GM7QQe",
  "key26": "4AYG2GxDqj7WUGFKAk4umCvH4hzP6TQTvSoxx3yWnHyFF5xvL93MVvigehst4z1xbUmq4vVvYmquUECtVqRiFw8p",
  "key27": "3VDKLw6s5Bop15kpJvsekhqhb1d1oTMwWCKQvdpjCS68KJccYY5svD3jiVwh5MuxmmR8R5dJh4bctJLWu15g7tbQ",
  "key28": "4t5QZ9MMh3h5ASRdySxoZ9irLia1zY5mpkg3C3Vr3xvoj7KXL1UsBqDPDUbEDB5223Gr2JuRjc6ZxSJcwS4wyQry",
  "key29": "3zmxAvMgUXToWxDrP5U9DRkzkwvFDvw5rDRUwP1j13NPj7zP9Y3u1aqenbkpbYupHoUReVMsXAcNZDR3knguieYa",
  "key30": "3B6NuPtFsFh57Xeyn4vqrrr5LjN7VbPEByReCyw61gUDw2K3Pzqe4dZDMUQxKvZ6WXdqAfr3Dojzg9s1gaAxNPY4",
  "key31": "4hbtTEPSoVDbKHP75gXQGZbtVCwbnhnD6CaG27gKjJN2ZG9WKEgj16eCSmcXPCM1fbbzuEswXv8kktGcZKRMda15",
  "key32": "4NM9SZfv1k6P7GvrmgyTk8KFaxwFC7fPkGUVvg235UXf9P5Etg5L24fD1FG5T4Qi6QNP4Sjjh5MjtZKJ5bZRyP9j",
  "key33": "Nijm6BFPGMB1amSn4FhC9tt2YKkfivM5mFDCLgxCrxzSZkmT3D6d9ogLbe5bXkhwJFxeP3uoT43BNZQfzXfcWfR",
  "key34": "3xvXYYEEiwp3PY5yCfmvWQLZPt9zrXfTfEzjYrefyrp99vM2BMAaRZZSF5dKgCWm5er9uZYNS2rYcguBH3MNWybD",
  "key35": "4XyhAaXENJEfA9wztaJo2eg9ffVkLj2fV7gtAoVsESJSKMW2hq7eLyxUKLtNHmKVkXvJprkUAK7DyrS2YyAmg7Kf",
  "key36": "DboXb44ZFeRMYv7vUQ7F5ERRQjfoG96qA3B2TSnLj4RpL5ayrtBYfnJJKf3Ke5jV8YUyLnvcQmjCmpNiTbdzJar",
  "key37": "4u35x3y1acMXqRyVx1VSytQaxpjuq25Kn7Pik52ewbpYcMjWcgE3yfb5iCrtnREcfVtMXuVF6PkRLjgH2tD7uZfQ",
  "key38": "5VKaYQxUNuC1cthKYYq2YELa3FydHV8GFnpNbXD84Cd2AyBMg78PLePwcHqy5sTnC5TAV7mwzvoo8PAMB3hfT1EB",
  "key39": "3WsqQZKg5YNtfTGMbw8sMrzejMZseCaPhEZ3LR5dPFXjQ9U55PWvd5MRRScC7nTFXHahQjrMcPcDHzJXHRgibJNw",
  "key40": "rj5t7ssSW9oeFW5FLzgS8uaK7whQbHfDudjCjfRRBg7THXir8kCjavb6FMY7EiuaafL1xPcGgfMq8wpc44K9wKx",
  "key41": "4aD7hVkLumqN2G9VjH51PacCBXKQYDcscf6byY6BNjmnBvNHCYd3khLWdThXYaexusyWqnu2tsTWhV2Zd3HD6C2q",
  "key42": "2BXMoLdPcprpBoMPtVLNkzbiW5jzS8rVsGSGMZSnKasVHLZin8dUqxV3FWPzR7yggo84NPY1DoxsmQjQ83aRSXm6",
  "key43": "4rzxTG5AwayBH4vr7nREAayois3uaqbdA9ZDHkVf1tWCcxRyuvj1nSSuMBZHeoGi3LQGrZL1KKvWaAC5VAEor8Wq",
  "key44": "2qCBTnksz6rFJBCD2Bhe9eTJ37ZyS7fL3ggBhBn9pHDjB17FWwti4sGUEHmkpaaHN4X2YXPeE8pekEcRCLJQQfMW"
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
