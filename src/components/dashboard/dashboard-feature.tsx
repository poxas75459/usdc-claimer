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
    "2NLryozWT73KhwemgsbT5M2sgSLM3jjf5tj9KSG9WQb6Gh852JbcmNpPb9gRAKe3aFrPijHgdMqzvZ4eXRFrXKoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24u9uKEF9GJvZSF9exMSiivabkeSJXXspxYwWmHMqBAGeirp7LUGGFJ1DnhyGtnKfG9NcsrqnDxACME2JxEoqD4g",
  "key1": "4tDpRSZVD3h6JvtdADPVnHBdkiTqb3kBrq14Jy1K1KWFAAzmcosc6zStqYVheFjkanse7tUUxoTXHwE65sQV5iPe",
  "key2": "3o9kf1NfSV1gUHkZb1DCJoW5fbEb5mWPnTiYcaLoTe5b5YuRS6uYjT7pTuWEgdgEHRGCLcLyexgRTpU8eMQoLgU6",
  "key3": "Uk25LJE4Xv1ppcmhq594fT146LiykHQGtW5xLwUU5SyCfkYNTp1pMHCUjWqB9xGnBT55LQEoJDNUSftogYBkxA5",
  "key4": "4zbiiErDo3tpYcgXVLhokNLxgTQAFEgBEUuJG5sZVuKKhKj5NsmVrDPrUAgJtuCpRUCo7CZrfvMU6AcCPQtCpDc6",
  "key5": "2gJeSZuahATf3aDaxmEEEsVPmUqBcBSEW2on1tSrAA1zmCLvtZhfHCH5w3HW3WGyAp2WBokknWEMAHCuJ9aTXuxq",
  "key6": "sDjeqSh47hauFzN1YXWVtocdG2SzrjbrEqzcVE8igzW66gCeh9vhCeSXcmHHxpbeZzBtAcVVbVuM6hownRY6KWi",
  "key7": "37q1WsEFNSCWeSss11FLPw9MyzdUbzMtTfAu1g7TErjqybL5sPcZYfymGJpffbg9ugUTQQSzDVaYL8tEULzK6s8T",
  "key8": "3GFKWxmBBKjx47JnHWzGZCpU6T9wtjRNsFr8CAksCbJJuboZFeTfjsvBLN8YSL7ergLsC2QuHA9D8D2FJ62Jqj3D",
  "key9": "27z5T53Gi9GLE1JboS25gBuHHk479LWszaZn1Q6TdTN77gTi3XJSZyTefmefMFbNrTnZrkV4nVPBXXs5T3Nt1nWh",
  "key10": "3Rzkow61tFcwo2CXMM3JPs3MLphB51c8hbdErTu8NaSZyJNAx96sbs9kHVr8k9TkmonYEbTVn5jpkFd9j9doP8fq",
  "key11": "3wEqbbxdSDi7nLx8HvARwa1gmjUbpoEjFJfQxyPYFWBiaoX9hEmUQSgdYcWbMurdtR4y52dCaZUCeHEWcQj8RH1d",
  "key12": "281KSUEs8DPY5iL4GaXsirSrjeUZTSW1kGyaBGZGuB8EsoyGspo7AWs2oZXefaKkfCKhyYWVmW1vYTuuRaP4NLHJ",
  "key13": "65dz7945reRMSPiLkzPJeVRBDeHfBRvxnkd4QN2bHM9PhuTDnu5Mc1PniqW7tq2fuQgZBB6Mivdw3832AKoGe8Tq",
  "key14": "gNgYnptadaf1svbe5qQAV3nDLrLsKhRWgLMkjN54ZW6LBWtLPgZVpxBbH7TXrGiVZNvrT4nr2RHvaEaxW7TTWiC",
  "key15": "2kwLTgW8QLMm4SYQME87gUUcB19UP8jVJZUPxv1C9Z5VDAAhHAAbtzNSwindksY3LaxGw6JjErhgdj4nNDpSwg6F",
  "key16": "3WGipSo2sDjUPYrjSAhPUs6mtN2MiDU1AFWSDsf1HWnz9GjmiWLVitzE18Tj4Z64BGJhgLtkCJa5aa8k3G6zXtY8",
  "key17": "54jytMkACNaUw1kXtBkuYRCmnepPzF5tXKUduT6K7FGjKUHKZGhYwLj8Wk8qVb7JLhpBGKuegdzUCn6nwFmjXGwf",
  "key18": "244CM5gst7qPs6Ad4tMecnXecFQwuXoHdyXQ878i4Fbk3NxGEVbFpHceiTkLtjuQZCUw45mTuyLFUChnVZ3dkjm1",
  "key19": "4bDyBFXxAMxtVdxZH4Hb35ptFAtsjgVwnHuRdLgHzSqBGxYo6KNUThrmPyB9rHyX1jPKquXpCriTrxkzukQhhcpr",
  "key20": "36iyznuCbHayZeFXYoGsNGFEHJmDgjFrx6si1F7iV8SqEPV6cbFDSPsrdFRFi9moBZyc6K9LMZ24u9eqnyUr2Qe1",
  "key21": "5j32qfEiThih9hnS9mDGEcK7PZSUKUyLqbTptqjEqQqbkFhTsfdEuoBExDpfWd3CBPVWHBMtbno87WbhmyFbe87a",
  "key22": "2yiCX9Ha5c3wXrdGvb32RhPe85NfNPbGoFqSVZ1hqvjQcBvwi8Lmg1uy2LFothV64i1cxBnXurdTjdTfCp6BDGeE",
  "key23": "2RJaMXpq3iSoYZLRtTBHKuxY8YFUxQqwuDpoffb5v4aVfn8SnPWtaPzRGpaNpUYHXj58Thhx2XTMubEG2CNvnDAX",
  "key24": "4ehZ6f3vKJYqymUNpxsutb6Kj56EuremGKtT3hi59ymGvzXL3WTy45z747XMerXB7Vg7wr7UJPwJs73WPhnEui1f",
  "key25": "4p4UqQ39X2nzN8K1qQd3kYnwWCvnvQawmg7JCk1SsbQhBVmatqy29hPXgfVEF7ssxs2TsKrr4sZq94LhaArRa6zv",
  "key26": "938YPpDo7eiPJwgzUMFfe4DYBr3b2LJCu3yPdbWjcdWX2Uk2JdTTkubAA4eY6P82AEEVchjyBc6qjRFsXtpsYHF",
  "key27": "k9D4YvR5b2TQD42A5yvW2FjLktodWbjn22DB5gC2DJSQiFncQPPDpLmZ79eihMZivSjmhJqugXaDn5AtqrnPvhj",
  "key28": "4oVqYKdbPjuWRcwtNdTcVqhjeMketJ4UZq5kt3gfW2R7nP2vx6gh1n2GmcCrxTokNX5cViB8yWv2gxeKJn93vZd6",
  "key29": "5jvRJvr59kP6HowYQiFRgwKR8XGqRLoT7nu2t9sJnAg2oGmZa1iK3oLqwHZwB9HB7GoqnhPj19qqD8hwViV1zhZC",
  "key30": "4kNUiSv4PhGgrCW19jHRGCXMcfxBxi2zCispXakvLkCb11PRWEksQRuZ92EzFYbM5Am2CC2KiA8RjssvB4FsxhPC",
  "key31": "KeSQutV5vfJnD7b6np5ZK573dZWBwfhdKHLuRuLenjzwiExQaqHQiAg3fdqXfw7k97gPf7S8nmbjJRPRV3wDoHp",
  "key32": "4YbThMFDzvKjKdH5nvn7Cdzj6m8pxJh2VtZEcmCDz3W49jMmVvm4tDZTfStoQVEyKvvnha3ZwXdi4RFrbrhqhBZV",
  "key33": "AgdnzNwDtRqTWQUoe97QB4vLN3MmAg42rFUUskEURkEznixuaM149PUjffkbho7urrARnAGCAE6WC9mH69NFkgm",
  "key34": "5U3GU8AMS8afiz3seSsxcML3aFrmtvrCWDSrKXzsDBcUvDzjbd39hgyFS3ny3Wj8CTDaQMXHbNFyfTxM8FwPAYLU",
  "key35": "3b8Yf55XZKe9u1Kmp2WcmhDE2EU5GfugpFPYVdPXwmLAZZQJk2NpY1Mgy6oEpyGZxduH8rDA21GGVK1nNQE2aEta",
  "key36": "5fj47e38m3oKWnyeBUHwwSTN8iYCt6nA9PnZMp9e4kKZ5nGy58u1FAeEFCDx9nGVhP5wNwyKSNrubBUMFmBigmDX",
  "key37": "5hauRNw9fKbDiA2irES7A7fNz5Mh3d1k1S1LoT9EtsozZg6a8CprP4rrXdxop8jZKMcFfuPPnTRrsNYc63nURopx",
  "key38": "4PeR2pmE28NRKnKeDmBdawmLDfsAhUPLYTdQp5Bvz9sceHy89fHtu5LyxEqTATJpiek8dFK5dfUe51WPcpVe6A2W",
  "key39": "2mjUj4fkUgU9xyv7iaCotrVP98hpm8XDHN6CjdBEQiCC1vABJcBs9oEmqXVhQkVztwVMUEGwXuVHP6a8YZi3LGXo",
  "key40": "5QZyqxcJNed2Ey7TsSmzSF4eFEkb59V1cZBPDpnK3utagDWf39M93cmui9FJkaWYAWNzZqy7vz6wdnvu8UgSLp4v",
  "key41": "o8Nc8TaoAuovxq83V6SsocMfpL7WhtXdczkfo7E5LJZrLUArdHmYAQJ9cjBE9pj2VQjqmMfSthJiCcmMoaBWHRe",
  "key42": "2BDSqJMQNSpxXY8qV7djcGefjEufyT54ZQrvLGAz4rhQHwpzGMaf5tiye7dH6sip8F7MAkuB4dNwpjuaQXJdNtEB",
  "key43": "3qwDnLS59wu3gvqmVdBjTYpUGTwWoYxd6aZ8TJo5ZnSi2LEBzY91n2vKwfL11nfAv6Ys8WH37d7Z9S75C4G2KvW2",
  "key44": "4gidChYe7epoMupjeujZ8XNPX2PZcbhKVJ2Kh9SdunH2QgLN7S8Dy4PwPeWBZ3TiCcWxUN5Dn4fPcxpeN1uLTC9z"
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
