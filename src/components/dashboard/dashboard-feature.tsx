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
    "2qUUE2rY7Wp2AzAJoeNMnpsh7dk5TdRTHhWuBBhFrCowzStevZH9Tpfb5khAypCQXLbF4iRkUqGQN63mLp3fq3U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63f4Lp8S9WNbTfCE3uMhoTzaPc52K42b13427doV5x1jpJkGCeWxNToUwarqQ9V44b4hzqDGEEdX6hXrk1Bm3edB",
  "key1": "4uREEer3UBEYUfrWsZojCX3orJvNrUzbKR88eLf2vXD9Yx6Zn1aCCFT29fq2hGGyhNnvtehiZjjyBxThC263SMBH",
  "key2": "5JBBqpTYnSm41UcGw1DPqYpvkBxwsPMhEP3kuT5jn1gKRc8q9yVZmcSaqyFNKT64BFW3jqA8vMAfMVBEERvvgoGx",
  "key3": "5LHndrYZwftVUqFvg6ogV5AyZbMwZ57BYipdexc8HGY59Csgm1ACgcWh6Ge7v75yuGp3aEfbKRtsipGrE6j3J791",
  "key4": "326YSnteDGDyvkvAqqAuJw5Aw1A8DtNtHfmquUJHTQH9pK83i6MBKLWkUEQBgFYyQBGa9123B54mQdaaG39y5SdV",
  "key5": "LW6cBkqUMu7WNp8WJ7aRFsjFqmNWhbNzy84RpckmymLLZGQtQGTaVLJm9VQaZTXVqoLksxQZdpy4GVq6yu3Lakd",
  "key6": "VCLat4Z8NZx4ynwYyFrMi8FUeHVgz952Qpcq5mM9BgYk2cFgiNVRJVgVSJjxRyXrvBePHAmXJBis65jm6aAqW5r",
  "key7": "2hNLBvocDDh7PnpCoCD9YvBtVt9tpgp8ysiB9EqXafga9pU1Uws4oA3tWsZbRgBzygQSdJXxPszqXqEzTye9vMMF",
  "key8": "XxXHct2ioLNPUic5VcW8bjUm9dsiks5Jr9DZFeJycA7oMVU7wqL1aJD4xtyTPtobqik8fcbMvZAQZN62aFQvcmX",
  "key9": "36WafJuViAzuBBqtUG4y9LJDyhr9XFatYifj2gZMWbW6jQDddH8imfhdwXK2zMj4GrPacevp5eAdcpqNXnezmrUs",
  "key10": "45AWfrsfzW27y4EWPKwG7wwh4hFB9mHjXwfzfXGN3bgqPRxYhEA9EQrVvvgJfDUyH7PDqBR9bU9CMcA4SwzkKrWx",
  "key11": "2Nq7R9Tv71Kejg3AW6eYtCA2nEopXb857gCgKhoDipo1d7V8VHM6xr4YZ6g7jwhZUoh4ev9AgvH1XmHHZFAibz5f",
  "key12": "69B4Fu282uEZaKbD6vzcovbD1DPqR9m8yNza94A7qB5QyE7yFsb8VPUDycPBn4Yc339nMBT3dPvj84a4MaPkUi9",
  "key13": "487ERkux5ZTBgmcRJg5vk9jUkAfJXMMeXQpAits1fvpBtRyyoRwatAGG1ThrAfD4T93wgj84SBJtwm6cZ6k7bCqA",
  "key14": "4a5FSAoQ2yrtqQv4zktdzG84gWB8TgHDRbpMbDtz8NeZRiDg2yDqGeDYj2vfFSrvcQQUxz9Z6VCpyxSXhLe6ftqi",
  "key15": "5Bgz2SSrnRnGp9JZ3WxupopgncLQkn7DAhgE16eFKZztqyzSy14U7W5vt7BizJec2cRtpq3HN3Hfoi7V2sPtSBat",
  "key16": "5RVPRx2KhLzE9b3ckRoY9nkchqwLBsFbcyFztvBqKU4wdrBe6wK5px1eHgjP5C5ceH3WgNv8bi7qnpzRRDmqSrjV",
  "key17": "MkC7oXkCvDF18U2CoVFH8wckbjWZ56enjmFm2qXNjG6XfDT2Qd6scDuFUGLKSepCPgPPJRsiDNepn7z6uX2gt6P",
  "key18": "3jHnuxobKBbwKESNjJT1zPSHykXq4G7UhzpcRjdUP4UYK7Fad7pRbbLJwAC8oxQSVCi6yJJYAVutnSoHuLesS4H",
  "key19": "5TQDfykU9w1dv11qkaC37R2SRX6tcRxqS8kheW8tyMsdi7auhgwiZtmtgdcatyZ4nm9D3Tkvkv5EodcqbRQeeFqs",
  "key20": "5mr5eLSzYWmxszHKDDbDBzkmD9WXDgaSf5VK5omycpNa1tArDsMsP7TMWu5pLHmSEzv19XTtC8QQRqzUrJ8mNyG1",
  "key21": "2DBw1c4qcr6uNPTLzs4on7Kp4TtsKaef6KB6JztDDYP4gEPpLWwmaUAL2yFEXu8JkctnorFmyBwkZ1ETu5Ry39R6",
  "key22": "219t89ehzjnamUFFttMPgV5HzndkExX2dFyL4YfDr6ZNsm3nvcgBM14hgpFzM3MiPZcY5bDPVoLaugryzwRRtUwq",
  "key23": "4yvsQTUaagi5pcChNPw6vzmFKoCWxm888FNTGNeZPLYYExVbjRny8duKhmexrTCWtyV3yDYs7NjeyFQZG8kLJyby",
  "key24": "4uJULFrps7Ek2Ykn29nSRGWDD4quph2Sm32zTJfS1YMuxD1YGKsdR7ofLv9sHBBtgEpj3gL1RgGhxdxP8uo7PC3w",
  "key25": "5G4oesZCgsd7FmXLUkCvWSordaNJsBMFHaAQc3htd5XSUKB8Mqe86zus67ArTBmX7i9GmS1Pf5RJB8acPiSsTaU2",
  "key26": "419eukkkpbcetYQroxXRiqvAzoV9Pdnts7Hbn6KBejoshKBQyYmYLKgxGx1jMTvDgFdZF4GwZzTkyFv9kiYfaZF5",
  "key27": "3UWEuiANFtuNpbRnKoRZ7ch26Mrx14gsp22q8rZwyyT6GH24Kw6SazPQdT4pktdw6gBm4EpF8LE1r1XreCQcTneL",
  "key28": "3EKrYDAJtuW3yHJ1pB6KnUJY45eah9r3wNB6xxqdpNA47P6eau3aDtJAKnkgFrV9mRu2obBvztaUnjFGCQ4jhnQZ",
  "key29": "beWaMDS5U1F5hiesJvz1btiLu4p6fMtZAPsm3QXogCYgiheTZTEv8atBnUSh7Eaf22CDxdtRVHc51MLMPkf1b6a",
  "key30": "5QXHCpTNAqGSM3GukaeWeeuCiwySDoynpWzHzTy5HAXL6mbnaYXjJDQrJyN8hJonCDvbyvq1vkMbj3AYmJbQDTCH",
  "key31": "33dWpid4LBYny9Su1E7uutUvwR9D57oU8basJWx8i8Ugev8xCgaQ6WvNZ89LFrYiVsYMFifcenhFrkZ2NJ9Kq5TD",
  "key32": "4B5Ss7JYRqs2zF7ZKQJ6QsuNqSJHFaFehyhka99X5R1KUstzstLe7iRbwMHG9FzcPJZ4k8PSUoUzGCHoWd8787bv",
  "key33": "2MfR3Mi3zZBSK2rtAgb5rQ5YZNs9y9RvxJGvwWNXmmSezoW7feMhD1sx351dCa9cyqyggyiFjhwbkRHM4Pqbhm14",
  "key34": "3CktmC9CQAP4bpexGax9hZCgKpPEpvjAhRD68eueb7AhqJzD8AukVBgTxR5dHJ1NvQaSme58VK7DnMfwVc2Dce6Y",
  "key35": "32yxbsnUfsNrJjLxWXFvPUoUejsf65vTWH8TokL88pgzrT5j6QJ6LuAkhda4NvKzMwqFvyFZjyvYHxtK7GmYMVHZ",
  "key36": "BZD3PRZ2zPBZwfQMvr6o5EJPtXRRgy4Lts4VzJFSpzrRLgpcVTYxUk6cyCXFovzoZ6snaVZNqZLhQodWPssDYUo",
  "key37": "2nvWjaqChS9dVzUk1UXR9UJdhWGBtCKBtvaU9E7yKJLdKxy4GpLKRgn5qStcGYLVb1f5jxSRfrDS7U2VzuxUqLkQ",
  "key38": "2nsT3cxdL8wWC1zvj8QLzUEVUfRC1odR86sMWd1J6D2Y5Pbrm78VtdWD2ayXmptGuMHTyco7zcbnYvsNSWeUyTdg",
  "key39": "5qoxhZRwD1zvFGTFciraWp8WdCJPCLB7cmfnHN5ZfHj8myRGLcZtsEaWbdxvbo8DadwdsPobCMhfKEnaLHHgMUmB",
  "key40": "2fsMJjUFNTuCfSxLCTc4wCfHrBH3BGNu1EeNfzAhJAkxrXoz74xZreknWTdiDLGkie13vtUdfE19FBSrqUDA2sGj",
  "key41": "4B71hxKGvc7U9fFnxTa8W6yVFx499oLPfjZWVraV4D9FBTyZUbbk5QepVcSUrvqxCYkXdbfAK7j7WAW7X8Z9UTpf",
  "key42": "414bJ36ANzg9d4H1xppabUHkgEJVJQCW48Cisq4FKFWvxMEJrciF3iirNBvMgCPw6Ud3LuA6pEN1kKRdjWaKLi62",
  "key43": "3MmhrRVyKfcJfentm3ZRqP9aNTXpZcCKZDWtbSwGubpZvwLoCiWLscAnTy2muj9pRGGqtw3wBuuLZTyYDvYM9qSf",
  "key44": "4zJzbGAz7Dmt4CTEVyNZ2wP6VNa9zvyTVw2m9XnJnb5htnaW1EsHn8B7L2BbseAYNVn8VHWvZ57MNZc8yAX7vaJU",
  "key45": "4igE6jCPs1xALfs7NNGxUoke6m5piAaakDNMGZNPaBu4w352iFmv6KNWC99QxEEB9uKdw2i4WtCNueqBiDiDK7CL",
  "key46": "ofBEx2Ao32huPLABbH7uLHJ6n4fVBLpbhwLjM2cZmxrLRXV8tNiVSzMQZwfoHCEy2E39EAo3oZZ5Cm1e1hGrXyH",
  "key47": "CR3a9Aa8ZUjrUuUvEhAnyfNBT2odeDLfus4xWwE198dDumcYQdY4SgC2MHHm9Efq1DkEdP45mED8VAsuqjK6SHs",
  "key48": "4Zry5gdEape2vHV3CcGnwZ5bkPad5YNAHFmiDAFd7VU9UAP6KEqLL2zyimHcJTLjKx8BuLjiCBVaTuhKJBWGkMJK",
  "key49": "27FThsTbBZhd77DkPgxvNz5uozYFk1iDNNWRJDHFF5PhGRuZWvzuvh8Uayfpg4K5bAs6J49DFvXkneDhjxzKp329"
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
