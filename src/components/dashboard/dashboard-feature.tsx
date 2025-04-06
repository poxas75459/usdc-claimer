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
    "A3oPTw1N3PcSn5fUWAQZHTpxeqbyLyqRysitJwpHoDvRJkEVDpizC1E13raVRKfZubQfXPFaykteyeNgWquXF6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ugRYK5YWFmdTMsJk2KjXZ23KBXCBkhpGaYdChuadhCK5TeJJFkZ27NUAodshMRjS9pCVoocFktJMku4WXmNDFx",
  "key1": "5Xkcu8xz374z1RcwdBiH9qMHVqZdJDq4Mynoe5JfLR8qpodEwBDGeCao9KgcYFsXa7hsuKb6wus7VLccANm46Y9N",
  "key2": "36bLUhxzJb9wuMNYjKh7jdJa78LobWAMA5NhXXEPKLEborQX96CNLHY4yMAkrwJjgBoJEFopnhUdM633T2myoehs",
  "key3": "4WBsonTZYtwYrppbpBf1DjRLBYoia5RKoyQX3rKVSkaixJKf4PdnPvKKZCqTHNXVJQUAksmYJAHhvouDn7WjqiCe",
  "key4": "54dvXFBommJZ7whweBxi3VZT8QY3dXXDant5ECbZ9Wgw5cGhQa3nP1L5NLfG7EAC6ZKFu6hALyryAP6saczwzih5",
  "key5": "2Y5KQ15aWho6cvcmG5KTmVhynnHyGKrfRmJjsUSNP4pr6o8YWAv19zWbQgixDBiHCtsmhPvLt9tV7qTEqb6wftqL",
  "key6": "352VMiCQd6VxiEAwrEX69n8KoZTVcDG9bGsTfaBRhGdvRhD2aqQXARgm5hK6TprcYA8ZuJkZSRULWkriewahGZSB",
  "key7": "5hr8CMdMWJs7mdCTkgyLPKhoP1Yp97xtVEispTiYLvkJPVYejWCJPynyAkaYYiXHq5NE7A38d7B4sSK1sVSzqSzs",
  "key8": "3SNGGNEaQQ9Efe3e6FcGG4PXyAPwxxjmcG5r7cWRC9c2QgCmv8EmYpqWm5aJfJoBz5gXJrozDQ5E1jSApSrQJhiz",
  "key9": "2VyZgBamevtGm8pdyNiYfe9TyCY9VM7DpkggtbcX7S5EcTChVHp4nPJPURD9pcWnR5bc4TAdfCMLj9veJEYbeB9A",
  "key10": "27MgD1MvV3XXexnBCUGqj1DkFhxZtt3J4v7Wu6gxCxspqHMxgErKZuJ4UYPQL858aaiTQJnyZKCpMcsMs6Mf6Aqd",
  "key11": "s9CKayutVqTwVjSMskYwzasWJg1koV5RyVjJPhDQfrt9sGbLZj64DutEKXBUBuKzLLCLW8RcGAJrQh75zB3Wbt1",
  "key12": "55a6TRWe3Ahg4WfU8KN5Yj1wWDXo1fHbnL7Pd7kZz2v4FwxERojD6Kvb7p9RTKcSLidm7bJneU6fGAAbXgTWYExo",
  "key13": "3XxoiUA4RwQoT7nd56W4XW7hq1nGHEhxFg6ass3KvSEta6qtMyb1M8LcPD1Yk8yKKDQQ7gjwt58XsXYVLMsqxKu5",
  "key14": "tJMZVcvBiV531fiMQHhNwfLiwCmwPAPMCbYa8f7QQYiAiEATS3cE6fAeRMW9x56cAndyNyB62DYyDqTtHuBQyja",
  "key15": "qf2Nhev36h8gPyCiDCCCgg9EbJatNCvT8Z2Q5QrmJdcqZwS2U1nfgFf1HPaMLAFKYUYhyeGCwJ8YJpgwGdnoCvZ",
  "key16": "21JmmErWrrRkMN4zaydECWzpshK8GtzJxhw8L4KxbEWBJj6FM1fPdFUh1mgmtQAcEsXFhN7ZgefUyKVEMhuLCmz2",
  "key17": "5Diet9oERm5bnNrcc4qjD3W31w79fdy5WyUVwCe7kHns8fzaQD75rui1PivgXLVm6XL66g7seZYqi79AD7SnaNZ7",
  "key18": "5dTSMS7rvHvUPrNSCzbsUiQ6yJbZaSwYqFE5KFmE2rHq2E3fsfNkcU4UF9x8sK7t6YzNgSHtTqTZSMpn6jpvdsaB",
  "key19": "5e5N3kqBQC3gmWNkwvfacXcR5fjso44nMUHoFEYcPMBv9fNE1Yie2JnUBCWXgPJPvpv3ojk188vLCinU9m1Gu8TU",
  "key20": "4F958ztWJVBJRrfp5J7mSgCFKjLJ5UdNcrcZei2iuHWkwNbgkQ13aioXnsH6M2LNMgkKDPe8SRFzZPbgMw1526o7",
  "key21": "5woJSZGoBoVW1hetBKr7QVbauqDausCKkFwcJ1DrLFo8trk43RH8LiTZixM3aCheVKrijcsLWuQwpK8VKjPXcQMa",
  "key22": "4iFvuK9iT5oXwUS1X79G1xhwEsVfLsDad68SaVpCfv4orc3AJeqLGaNymMjY5DkZ7iaWSZXFNV9ffabzSJGp6j7F",
  "key23": "4jQCmSrtqEQZwVqxGRntig35rxzCZawNEhv6up4UBXLSAs7HNtMqk8L33mXTPFTzrmp6pvHRZUXg1jAP5rBMxEWE",
  "key24": "2Migir1oRMk7SMzot9ikKsoqGbdDypUqt2PWL5CWng283w4nU6arBkGekUgbUQTDanRymxAiq56jb9QTduAPpyQS",
  "key25": "5WZdmf2Eb5wmbeufsSWAdXDamuRLdLRic8MLTA38ycntFQ8xfsAKXUbRBvWfpddoENJp8q5FquARs8LFMZxX89sB",
  "key26": "64nQT4AzThRJBjuY5YMULpCdd95P2HrWVaUKP8x3urrz3yZ1CJZoLR8Zt5daKL5N81y2N976YKta1E7dtxyKwv66",
  "key27": "5nbTF1kh1u4LykWksQ4eoniPtgF6qmHoHZ2MAYQ58QRqxnAYwoHrEZPurKGXEusH9kk1Hz1Q4YcAVvikQtquhutA",
  "key28": "4v6jZEYMy181NUtPsJjAjWmGQpUw6WNN8KvC7R33tmkfmBp7FtRp2A2HDKFqJRU2AdsGGRZPX4eeEEvVp2sPEzyk",
  "key29": "4a2g4LUoBcJGHgXKcMm13XHTeH8npj7MXnc8C2ZoA6m3wgv1bPaaPAYZP1N9TQ82vPoutUwAqpcC9rsDpPWQDXK7",
  "key30": "4gSH87QuWzjn8cU9UZM52KZdTr6sgbjgSRSKKEBCQSvrewT3t1hR62a8ogwdX28syHKXh3fPC5PbkFeqrJUWdVDG",
  "key31": "3nSQsWD9xj7H36TRBymbmrnyXVziU42Q6gLnczYShbUY8p7czAnmM6v9fhoWnAfNLMUJgrtUnVza2e6ibyouAi1N",
  "key32": "3tc9wmp4WgzDZr9oVT22ewuaFAkqZ9UdMhjYsWce91hgRqVE6hicsENW2AdSkApiQA82fsTbEDXgW7snftNmuhuZ",
  "key33": "629UuEz9FDzkyL43iSAPQKxHzC5xJJSABKM4vvB1jNxwF9bohovAXNrtLYxxfY2sX83anf1UfunjtRrFKV1dmqBU",
  "key34": "4XYUc4SqJ61zFqcfVVptJoXRyXKPSircNiDnFJ54pBtWxfw7JqkNdggUWr8cfdRvLe6EVZNWAv2AjNtRTkFVdHES",
  "key35": "4JH2EYAA9eiUw6Wf3LWXNT2LEeh2TamtHZoTD4CSvnY5MsstAZd7XsDUqms8GhwMvPBVDTQz7iyCn1zp3pkfCD8P",
  "key36": "ockTneGUq2DahyioXPHj3s8J23MUMKzxNsR81uevgSiiE9B6EahDWTvH6v7qGtXgekLvTBvr4AEDL6eSfzmhdSW"
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
