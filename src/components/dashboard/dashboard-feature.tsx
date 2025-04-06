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
    "47qz5wEWJ3Pvhetxd2pLYFAvzfqSuiFM3GwCJ9u5HqFdNiVM7P66zahuRKo4P88XTtW4zdfT4LdaDt6Z6ccqbym1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDxwt8UDEmfv63QdB5J8joS4sG2dERQrt3puJKo3CiwQYr2FiD8N9XF1Xr7nSQ7JYzN8xvXGVfknzDj8g5ZcVEH",
  "key1": "5AYVw3NEo1Ebnx4xFW1hzNUXSVksPEquto2RyjFUEPjbJPTLvGU6P3oKXTv2fFYN3ChYr1dkHGTQ8Sb9qLLSjXgu",
  "key2": "5TtNKb22EjFir7eXQUCYggp1pPt1R1PC931Z7gKhKCKykM7MRzs8BPxafPEEypFfe1yc7CtRA6SAnPvEajn8UXPd",
  "key3": "2TnggYWqBB2AXSCfKX2JUX2F2hmjGZdi6CjZgu2LzA6nMB5KACzBXuCprNSw1sTBdJv5pghwZAkYJBTkmJkdu6UM",
  "key4": "5iRccBWXiG47vvVK2xaNdSTyJecdNxG6KK5twtYyZfR9o1XPPJxEnW3esdy1SAADteVJGk88vf3EchRuqbnLqHbE",
  "key5": "2yuf4CoDBkWSuNzyfPzPM5DrFfZwgYGkrmqqt9Zos1RM569sfu53nAEzf8nW6pTWo9byyKj6yAEn63VAFtNQYkmq",
  "key6": "4txum5uy41NsyR1i95cc2cWoSSmxPGfyJ9kU9aT9yKJh4UMjSMRRy1affidaasf1kJK7mqbVgkatUEt2CeJajuFc",
  "key7": "5w4VXmJrDZQtad5o4StHd7Mqjvt7qrYanchbUYi2ZkPqAcb7if6WFLm1TiV9MQ978ydW3x6nSyAtcjSJVYXtpVLn",
  "key8": "5o8ZDgHoNcB6wKhgKJxW75hwYanMM4fLv5seDDXnsH9mWa4SH88GwYkGDhKpJNY9FkKEYcmZVZ7tnZAbc7C9NPpq",
  "key9": "4WyQNGmQ34EUySF7QMv6zQDmWEDSKnuksWTsAQYk8hh82Q8WJzHrrs3bchSruMc1MkRiWCyiNyjLx2djXCVVSMUM",
  "key10": "4MJtfYkUtVWMYALfBHt1ZY6PUEZWBpAPsXwGC6EwfDgq5MicmsLLDDmnoQ1rUWSMCYC2ma5eX1ctNhRR8bu2BBMs",
  "key11": "5kKAWpvAUfjmKYobAsiPXuux6nQmZ9uQ56qya4qdu7FgHGqCfDFQXCHdcmf44wiGvH7FeYLxtFofNp18kupfrbgZ",
  "key12": "2J1zktyzbm56k3P8WUwxb6PJFmahhoGdQ89r1We1Xre1X7WQYv6YFBMDogk5cvobcr9M6tjkzt7RNvuDC3ckEhed",
  "key13": "32Wj3o1YGDGk845NwRuBFsm8jgm4d9rzHN2nM1DxHT7x4vZfyKYCcSRVkPDbfzzvYQGn32R21JdyQeePa3yAXFLh",
  "key14": "24LBXuhMW4Qew2qbjXNjHHQeeN2EgXFTyHTnqQZX53zs3Tk6AYcpuaauSAbQveAj5kskpHh3N8K4TZCNxeuNSbiS",
  "key15": "2FHcYw2pUHqgNWYRxbKzFwFnUhCMyDBpc3cAo6SzgBuyAwP7ejuLCWZgM4MTmxvuexTck8NjFNfwNr7SBGFtUo56",
  "key16": "3U8s8gC2QLqEUpD6s3EQkh1JCSzyBHvhruS4pZ386jhdUAod5ngJmkEsDCKxdmwKpakPH6Jm5j2ZxcbDWK71huiM",
  "key17": "3kdBJUMuCeg48o3J4Z5zFb4fVtGaEEr8s82iCT2rT3TfxpfGcQfuwCRVJLYo4PXEuaNyHGW9YKgD9qGZ1XPS5UDH",
  "key18": "36k5owjSEVVaFbeyF7Ba89kDMK8qim4APWug3Su9rSAK3Zfb3DASXkbqVieoC8jRQ3a5ELDMg5bWzyRgYNdsVSC",
  "key19": "4nyZTkmYGebpbm6eAAgiWWKXEwGYydz61gCSdnHoZk9i2wzqyuCSkbNCiNRb2ReyET86LsKugLs16acykMKmCDA6",
  "key20": "4Fo7mgc2zV6BmrMwGq8NAGGoi4YZm76WJM6MTVGqzdtTeo97xEk4QtR5RkAXwmbDvvctmCF97WE3M9KJcBEB2qkX",
  "key21": "AeDjwfoo5MKB3DgwtvuBqXqYargB9cgcKnoDxUP8n1MS4SRPkg93ZHyRZR8at7DV8sP36LYY5iB7oidhEMxKQqd",
  "key22": "4sNK927Md8GVpUd2S6PkTHn9Z2G3AJXPo1gaavh6SnhMNuDLfZch7fSFPFu3xVdTivPnPcC4iyen616EKtsuuuyF",
  "key23": "5FMK6cnapz7zcrP8VzyzwjCSNg8ozzGLY2fHxfdbpv9WWjQikPZfyRtNsRcoRkNLJh4qJTcACxvegxhQmnLXHV5g",
  "key24": "33FhHryRDJfcNjKNWEcdJs3Xj4e6RchHjBeEnV6GUQTugVFxrejusP8Shsn69iNSnUwANC1oKUtWmKugJgpr686g",
  "key25": "31yKwkyvXtVUmw3zecbyboj8bZWsom6MRrTZptN4uE3aQW1NSv2gPykyPwCcFoJUv44nQX4zuJmwbhY6Tm7Rhb4w",
  "key26": "yZ1uhof4y37rUTQeNRgwKqyws7XLFt5GFkAjdJudaZDxdkMPY3foU99DH3Y7yDsADb8yzmYLR3dFbynhHdyJ5nS",
  "key27": "5BP4fwCoCheJDcz6VVbxJP9hwZ9wranjhPpEEVwDLwNbnLtmmQ8iuQbNAyxEnCZzK7LtjpL3gAFap5hVJZL5ddzg",
  "key28": "61ZKjpRgtPFGntGZ5Z2gXeK2mVMMLSttKHEnST3AQRS9LNKqjewq1qSKXpNHeNMxDMadUzDMiUnHfKjXh5xvbAXY",
  "key29": "3291fbEy8ppgbMwpv4x39FAYkmy9Dhiwu3NUCdTLj6AfkfmzuXm73k6z1GV72EFk3B7EdAkPoSzeQGcQP8DHEEMM",
  "key30": "5zyGXBo3yb2dgtJebbY7GVds4VE22zpUJLvgv1vMdf8ZprGFVRDcLnuF3Fh55JAgR72CBcit4w7KGWaEp9AJUyNi",
  "key31": "34eZaVNZTkRtuDogLbDPDwKKQ64rjndMPj4KQTiynaQmumA3yftNRtQBKFZspMyFkAuCJr74gcKkPYpbmTLCsT9f",
  "key32": "5otPkKHAnf2y7xTUxoqQhSgRwDNd3LZ5BiqkdC9z2USbkEHLkKaHTGBWqjCdbWQd3BwsjC6uj9ERYqbszT2Xjor1",
  "key33": "42pcMc8NQMRvbPMRdc1WYFxNPY84azyzEvRFcuf9fFA5hiLdMGGUTG7VRQHEB5Vsw7Dax7wACom6Ws9jZHe6MVhC",
  "key34": "3rjaZTd32cKGWyrxcKvDkTMu4tCjP3k3DtS8f4RmEmp3uncz1nu2vvSdY9Y8dRwuA9f1VMhYNKXM22x939oxY9hL",
  "key35": "4Mb16zyzrbDRM1AMBkHFKrqjnfKwXMaB2GervHdjj86Kec4uuVgr2q7TAeUcGZqQeK1WTQcnbHoCiiEkujZWPBD",
  "key36": "36bAmXspNjWyPrxhYU1XBycRkPRZt5dfCtQhfibgNqYuAUZEypTuGdjyjQsNrxfBF1rrVYjjMRXyNYG3fPRe8WjV",
  "key37": "42FFapeqyavVjdSzje7gswtXM8PiL7VN1KHj7Tv2gVTriMzUUgKiWCSJRm5TMoxGzJfeSd89NRxVvhVf7wJGyzq9",
  "key38": "5NGEyLEAgMNbNPVYGiq63NmtaSgbr6X3Q35Gy8Dc9TfCpKeZqVi6tJrkrjP61fVyhRhDQoCSJWvx1LUtXvPRnHPU",
  "key39": "21tjbwe2tf2RCysgnFVhiKbdaFwXFpkgTb3zLzh1D8HRhVDCpiFmYHddBjBPwbPvsnPPqjRbBvNVnfqApH3vex1L"
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
