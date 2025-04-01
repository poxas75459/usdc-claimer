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
    "3m3jdizorAEKL6Ze4kVpDS63adpg3dtRxWsewM2JWJhhcfawJD3dhfr8FA9dEqdmkyzJz1ng7vMhzM6YDx7crQyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bdreFZL4zwWPiffhLra77nWoZ7Grg7bm9ZhZdKXKjazmSMT4Sic82QhmX4Jwk5UwPtuHnNSNmQqqd7QQTQQDa7",
  "key1": "59dBcZj2GNna7uL97W387dFx5K4CkVLhh5QFS1bKQ8LHFgvH9LShQHArqdsa9gucQxyu7Rbg7u5tsbaGhEkS6kzp",
  "key2": "5TZcyk2BDZLBvVNyLPFDWd3qHBUPRJj8G71ngN8svcaJE45F27PnyEdx98g4UmsAxdKB6PNos2cCZ6hmvTR7hDfQ",
  "key3": "4jZLCzmJ3daUC9iawU8pVWPyUmQkHk22JFtXJR9HQEiPj71dzAjc2RUrHkS7PqD4nRJMv24GmPWQGrDAWfG8jequ",
  "key4": "4L1rzKiF8jqc6KT8dvEbUMJRYM4KrL8ShYGyiKs7WDrj9yybtZd1t4yt6qBxg7wQNidr6x2D2AiLVUhiu1bzmkVe",
  "key5": "5H8Y3sqdfnbdQVwmy5jbduKau7TCK4fCe5uSDm9WkHdqLHZWb9CUwFKJLoTdSzSS4fAsMPobvc47CWJUZSqZGBMa",
  "key6": "2xnpVLex8iYh6nnzmkdbsnbkSX3sYkTACc89iuyvL5VPJoQmK1Z3PWhhK8LtkDH2M2V6RvjcYgogUB4fX9gQfhZd",
  "key7": "5yXBAAahDAfHb79jopJaSU1rD4equpHE81hFK542rEdBjjWvabiAZuG9JMTtho5rgVXohCi8z2iBRXVCj6hsqauX",
  "key8": "mKi6nkNykDZpGLuj7vcz23bHiSAyYtks2QHQRfa6d7myNyE4w588sX3NVNu2hK1ZMTyS3ukwaLx3pMx29JwSFkH",
  "key9": "3JWa6VH2vWEvCKhGDCPT33M4vwDHoBqzva9KCbXMsVmXj4MGAgvrB1pr2ymsHhrNFN6Txs1TPN1f8ic58hh4fbrB",
  "key10": "5XeLGah6ct862yMmhGvcGBaSvD3yCajxnKtM9kMPPytWyPVCoLfw3oKV2mNRetjTiwh24uf5MezDVgGb9SMxtVxG",
  "key11": "4PomkHhXnGiak36tkrML9XBYVXfsa4uuSguvK2JCc8aP5ZqVb4qXp3HUaE7SzwkCRLyPoSPx5bRatmo3HmxoTrnf",
  "key12": "5NK3SoSbPQhAVjgk8DJD2tLatHBvZAkS1ZhW7hirpRMQTr1C5QqoY29ZEyHeargqENhSNMXNPeC7UbLQANaFNv1Z",
  "key13": "hoqprbc2zJ5sN2W1PbddkZTCXcMsWEFAqZAsMcBFxuHqDo1JRT9xdhCtbYCja8yjyGnn4AATXGmaaFWA1SKHXFy",
  "key14": "vd3pCksjDtwgV1Ba7jNqzY4PczB2yrVGPWGwnZAnZFYWXVL2cx3nXXuFVvQbjXRETZ1zfKSHj3dCqqDphfAnrKt",
  "key15": "WjoJ77SU7ZcPc7SVe7jWEMmXYpNCD4qx59MsDJx1uXEBnWx5xe7ieq8FVfHzyWAmWjicD2pnsEk1WEuybSQwizF",
  "key16": "29t89QK2TUBYbganHysTyQztJpzmGG9jnKgLj5pRMyLVVdW1wNaR6LNQPimCANCP9yV4ooufasg9rbqHdw8iRmBR",
  "key17": "3iQ59L65jMrArB9wrbtjCFdzH61P2wSJ4uy2Gg4Kdk3NadYVW57E2N8MVb2CgxKRXVidHay1ruUAHzGLdUMNDg6E",
  "key18": "3f8MFZ2Dw19aSyVQpVxV1h5H2LNmrRbf54bYoH3oRouLWtja2AZ1PaoMqUuxa6kUv3QL48rDNtHYkPXpJcLip3bo",
  "key19": "3oCV2y3bsVTsYP8yjiT7mS8Pd7ihcFYXQfPUXpzwfFSodvHzStGgwtKS9cMPTES3jPMsisvqyUXarpWPCegm8GJp",
  "key20": "2N4muMy8yu4SjfK7jxGAD38zzvSpbvDn3udSDFZKc3yCZ7t6AfQfynRKw1v3d5hRah7tVHstHHyUKdmd8ZyY1RkL",
  "key21": "2QsVJqNTZ9D2McBuHkgGPdBTcxpsXEA3wHkubm7NakiRUAH2S5ze3qSwjztBHhsPt3mKsM7W8FtNsYiQWBTFGvNw",
  "key22": "57WkvNcFCUVaPsyDVEJiTp69o3JQozB3ysAisUsrVnoJrqMib1pRqg72zAJa7zs3tcnfuYpPydW5wJempmniTsrx",
  "key23": "3aYTv9CQoQLboP7hbgeJNwogfmPyD2XXa3qFXYfPEb2AVU5P8FeD6TwjeLzTnT8DupubJLqYjDWuh2UhhjAwEtAW",
  "key24": "2jZrbLtquc5shqWzChtt3RHtpmNUyzH9hymFTsGqjwLCVMJc715H71t4MGg7UaA3bRhu4fNxd1AzbHTLLP3nop6E",
  "key25": "2hP7ruHxVVwkyQH4nEw9XowHPt51HJ2RVLvYaTypf5dtKGksThHJZdvwk6aVbGNCzqZDhxKXM9F2q9SwyjwTmaTs",
  "key26": "4es9qsiMV8oukEeoFovuM4RMyUSLXMtXzt1mVywRPebTE7B1u7DpWbdLmfn2ENkVd5d8FWxQoSAUxHeJ1xcx5kkG",
  "key27": "S9eTky5Sc3CoDGwCDKNSEBv5AJYt1ZnA3AaVxpopqEqbHkJcmgWvBFwpchg4otnUZJLEdY1QhCpe8xPCvExWEbJ",
  "key28": "3wCKd8GaGKXEDNg9MY35XoGSVfjCQxKvVk3j3JQH7TGJghFDx5ANgi9f4tWmXFVPd1dQGuZ5RFrk6HkDur95iMT6",
  "key29": "YGL4rrVe1nJhUq9YmyrA3s2oh7nXd9j6ZsseZBaUgk26DuSBprVgnz4gpaHTqDwVVzbwQT2r9UwjmPitGsn5Bkp",
  "key30": "3NRRjJuUxw5g8o4VmTeE5GZbeve4VgXtFtyeRrssiPMNccRnD4u5Bs32apQvZ9nWjnDMZiCWkdaqGxXpTTRzucAz",
  "key31": "4fPmMqNRw639g8KW2kjchicxpYKtEYhHC1XPxRcWemsxcxuHxhprAGpwGN1WEcLX1KDusjhcJY9tgPmwvQ8tBoKD",
  "key32": "5c1B4LjBeQ78J87WgJCFgfEjiJebKuJ8c32A1uxi2qe8RaSYqKjkPk2xz8ocEUtomtLukfG781o7jU8wcGL5mGKY",
  "key33": "3x92qgMGnqxVU2PCmaJzgRGQimT3Eryfv49SCackcNxT2irwobZ9xGP5ZtyT8r5BedtoYTTxTuTKGZVt7KzVuLxG",
  "key34": "31LbjTUGVA46SuZb6KvFoSiKMyeUEvtkk7hbV2897YavPcR4urxC1D3yq8igDFcewHY2xfx2yPddnhpqeyvj1Yam",
  "key35": "4GG5Wyrq78zPCAV7s4a55v3C1Rj11gdJkFCZqq1Xwu9nyT9W4zbUCSXdxR8GdjwVGWMvxNF3kxMPQLYSo3hCuxSE",
  "key36": "1BVoeP2KhfDWgVZbsSyegy3rizBCNmn9RULv49VjXg5JsRZLVZMBv3UVJ4YUwPANE2QunU3kgpPCQB2GrAeGBrT",
  "key37": "5iVNQVfnx4snxq6nVAaQKLKdehpt5u3TaneFZa6hxJvpDVoKbGHmFw8G1PXKcjzGpsU1LffcqEPrx2MfEAKwLZih",
  "key38": "GEZH9mnyNosAbqKpYuLzz68YyY7pwG5jenuWRPZDMkosv2uLn8e2R7TBsNXug5xSeDkCvBNgcTEyyn9STwzPzyi",
  "key39": "3YhxoQqZBAZMXL1ML5bafqQEKybiwLiGVfJzTwfzXZy5MqrUihBmgMb6wNpyMuGTexWY5UWS2PonN8HyExPRZX5i",
  "key40": "3ky6c4egeBbmKKFideYo7BZdtPBVMbBYags7jvxdrYRwg6xteYMbrP6H2CMPHFECaLcgy3w6KZdB55f6HHFGs8n4",
  "key41": "4L7FhEMT6a3GVwvYLRL5pbsxrWM3yfYoKDw1kxDZRPn2LrN2N46YGA7RJbfisuTq93KwEWNmYcx29iSJZuWy1Adh",
  "key42": "5WivxQarEYLnKVQwbJqkcguRzWuFWefWPzHbs4JA76SczTU8pppzNwcWepXfuLxFQpTiCnGizFToKJLGkgmgnSKv",
  "key43": "K9NWB6ih35LMmyU3rqFoumheef5TgwJXSHXW41vmKvB6ZJGLq1i7VUUSvUnZe9mkoDpfN69dRusuGFkdve94qTG",
  "key44": "55xNjhCAd7Xo2sBx1PK3XcqcniozhTNMEKXteF6frHQ5esk7v9StQtqBNCMkjzHMwkPgKmMJ3ruReFok2Ytsf3om",
  "key45": "5KRuS1wLopqVLcL2eGX2muPEwTaefRNVCa3dWheMtb5MA7yyMREFd7NJKh5Mb1AxtST9iDzYxnKguWF53UyNqWFm"
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
