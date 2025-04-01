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
    "4Xc7P3DceQaWzAjK79MwsKoEZC7pn3PAWg2i9r6VDeQaUzjw89VWzZ4hbaxPWtDkWxxac6AwbmrFT2Xp49dAKBzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRnmCKpXaBrfAw66TjddE1FvAGkSd9guhJFMsMCamjLUesH8v3MwoUsTyeXCxuCU6sMqwfhrQs3BV4PH2szyY1h",
  "key1": "5hZAySVbJRv4XjtVp9Sn2abrnCyvWArcaQv9dJYXZriWdphDSzAnu2W9JmaYdrWBPRCq53C8e9NnPcRd6oD4eRZ1",
  "key2": "4VNfqJX3PXeGCfACo3ndh6cJ16tREQURD9vztywNgadgksxkqG6nRZ3ch4x1pqtpfy9zto3GHyuURngPeGGUVMFr",
  "key3": "mcXC4J6YpyygCQWdMgMB6TQ9ZedYfDPj7Tw3LrJnZeSVVGGeRNkccoog4skDL72WHcd2e6pnboWgpWfyux53EFR",
  "key4": "5WhQHqGjQmnmDZy96nCJj9pV1WM7HF5qdzmG24LMZBESC86iiTwNe4AqHLAmp6BAR98F3tjx8KvQuzmLjbMyBsXZ",
  "key5": "447YDHSmxNEZmnPCGi8T16FQPPXdy2a4pKb5KMYs1pq4C8T17kbxRKhZwYniG12PxmZE6SDb4npTYfFRHDJiPg45",
  "key6": "4WQCQVixazQUet5svPongf6hZzwVtfceQq3g3A9zdHUVVyuDnc3xVg2xyB8y9WbVh4RUZBwSZ5um9vRufUEFfPru",
  "key7": "3JdTyUHoNiG4rc9MmRpXLTEGpGvPrMggm47whrhrBcjrfcVfrMW5diMShfwqXCK9J8gfvVNtznH6Jte5SHwk3rF",
  "key8": "3dJoXVQJ3uLr8ZnFtszHhjMNzGvzWutqsLHsis1r35n1NWYR866SGVZFJY7J2pnAQpt2qrquw8tzBFo9kbXQ3nQM",
  "key9": "2JztPVJRKBu7Dr2gG2SjQDTJbqqotjKESyfa4bsnr1NSQxLD6Tt2HH2DC3G385MsbMrkPwRGu6zk3N26bYoCHFP4",
  "key10": "5Jziivjn6mnmZKriuaX9wFzdjXGYP6jsG8cbrd99R2PunkBKkB7bXoCf18umjXhBLRfnCvSvwUq57pK5wyawtRcJ",
  "key11": "64dsbkXUGYj3JDxRqDs9y2iy2w2n3Wa1TmzH8ee3UkSvRqErmHdJ84Btr3h9ENuhSrZFRoK2ZsEKbTtp6NeppAxi",
  "key12": "5aP7wbnVR3wVpG6uyi9DY2xeKnZfFhaxvmCrHr1HX7KhNaBGM3neCryr1M3LBggisDe3pHiKhU2qNB66d7frA4bB",
  "key13": "54EjWEu6mywGN6S2vboBJ1MuHBwN7PW3GzWx4BMAx44CBBVcsvEJedpwddftxV3Fb5GfxAs2fLteF6i3XYWNay8m",
  "key14": "5T1NUXTi9rBmG41GSaGpRoy9vwNfkuLrEpbHuf9CUYJXjVqvegihU1cAucLLFEW8rNzMhbEPTWv98txxoSmHWadd",
  "key15": "4T1C8tUeeFAr7wC34d7FFPUBeVtSGWScfeddMBxGJrySKGtKyMR6aj4Nt2ZeRnm6bm5MADZj5VnwDXcBDK6gqgzK",
  "key16": "3aPG9yZfRZ8x1kgVw5faR3wj1m2GdiWxtQWyYdjmFCPmT6mTDYXpsrCaLsYLE4pSAE4sobLdCDs5jSXm4k1aPzyX",
  "key17": "pQfgHso5gU9Cthfv7rufH9rTLC67XLuddnqWtXyPtEpgdeJSufr6RFAB5Cc86t4fqAiW3kvq9esuFeBv9ndqJjX",
  "key18": "3HapxQWGUkJiaR7v6ikeFPhTXjc4VoFiaTD51QbdjVofx4Zrov72Cbmm33BPz63qcaNUdGNrhhU6fkYu1QumbiyF",
  "key19": "28WN4UEsH3iVfsNFNYP9QxpQe4g9qNtDS6eWdNowbyVtTPPNNtgXUP6shtdvKXbdH9gZx1JavZcBJoGmRgov9rTJ",
  "key20": "4aifN6JBmdsUeAvacdfKzAwmDs6645oSeYVMCZqSPPK2MHUicMp2pAxyzxN5mdbr8ffVeXMU1WvdZ7v4WMZ2W5FF",
  "key21": "3og25rsVpp9ohhe2vVUwma7Pxf1Ypgn7u2sNuBRRpAhcUjARHqKhYwLjVfGxZxo8KrgFvfKNHMSHBXqvY5aUe7nY",
  "key22": "4UkyCfDoDK8KDkakgVJhQH4mBKj38a6bfKkoNia1p3QMyCZ3nskWGcEnXA6rSrKRi5zNFgstr43DKHYYdTKFRt3J",
  "key23": "rD4c8dGVYruSB5eP4MUJnY63Qezh9wDZ1L7GomGxkymTuMkXhueBswCYNmyThW79JFR3uBGjUJcY2wTmrxdf3tB",
  "key24": "3M83Rreg9hDVwT7RGqPU5Rkvv3g7frprRuhwf2sSjWbW7ByAbdvZ24njwRXfGWqMUDJ4t87HPkbWLhw1PCinPCXT",
  "key25": "m5g47ZrS7SfuTPXgPz4NyLsRgD94nVTgoU5MgM4XfcQChCYaAv7DMZvHegoFYzVecSQG56AttDixPPsmS3snZSj",
  "key26": "2Nerp8MMoDnhGA22iYVbMwJEqJm61cM9zGL8jd9SPxDuGdyKyK2zsBxVYVqawXin2G24z79heMamKVifTqWuwkoD",
  "key27": "5ePEAMz5eSYPJwLdM86ZnYwT9Esqb36yWukHNxsynCKB6TgNyJwGG3L2KGsRDfstuYFrBVT2ecwqJ9SJe5ANuTxU",
  "key28": "2mYbmucXoTrpXG5o96AeqzVjAKMSD8xYKwYopxveoCskTZxAidBJdjGo4b6oBva5TRuVoes8fvzmpEaM5A3vtwLj",
  "key29": "3go7SAo9pCZLLrCjdM4CXxmFQs72DHvrTUAiMUpDxy4uvESzqR3cBjtdeMMQHaB1kv7Qji66tmKYDL4bj8oLLG1M",
  "key30": "5gtwzxssHrpEBgNDiU9tbMw7E9Zf3wNDq7cwtSrnKHGF1DRzGQRoAJonPetmqRmViQsgUk4YFtokRsAr9ECF7ZUn",
  "key31": "619MeeVwZsxTZq5SiEZNvYpKmAprgvehxPfaVBXbUibqDcnH8TCnD57ps1mjCHUvbRiMpAqdcb5GkVJH9dezAWjx",
  "key32": "4F6urzqRC7eEeEP8UEQPNwRKFNpMGVdbfYNMhJ5aV8KrLYw7JRfL2nLUd4P9FTiDqg6B4qFgx4M3NFYj76AdFmvu",
  "key33": "67NfxKyGh5zxhg6wW4sXXuxHiK65Yz9Tpshyzb7tKXUA6Uxu4juCF4tLFMyDg9FDo8fa61uiFc3CxvjsDSp56jxq",
  "key34": "3xkGP4MwuukRMdSCKQFAZLXTU6eyzpB2Bk39D6HotXX4kC69JgRn6M3DfG22NAonXAbzJRjXTnLe9z8Trr9KLTHT",
  "key35": "pTykKjfhRfHwDZr8zimd6zqHzzqBE3idVqHrjkx9FUMcH4XuaPXwjMSUW7eE9jv69xi2etD4ZQ5RFJsSibu8NVV",
  "key36": "5qZVGTK7wacZJzGYBKbVs2VswN7VevKBT5kXzwQ6JwftQA4hYcZKQA7kuxGEfR7ScyZ3Hkd7yNm3uwjaUi1GnVh",
  "key37": "fEEqv12oN64ZSE4Lq2RU5Y2niBMQrLToKj7g2ADpEYNtRB2FHuuLsq8GBX29BtHokfL3BmeoJXnbFMQfAjmrqRA"
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
