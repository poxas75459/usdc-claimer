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
    "3YM5cJwWashCpz9D8Gqx2PgbLbwsnbFGL9Apq1q5VeJGCNYSCfv8KujBmo2hRBGWb1ZSFiXzu9ggYRyBKCtTwzZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHyhYWjT7YLXcSwquKk6uZfpLq3Tdfkx47CnsAYCkUaLVtiuRvNoN6hh8f76YRLccr3ozFiJYaq9wVPCfDBUJpZ",
  "key1": "3QLQkzJbX94BYDyBBNjmuDsYJJMaKXMWb1tAoenVTCyonDHw4qP3BqhLDMLVSyzrvMys7qFCj53pKyKLkBrQnHfW",
  "key2": "5kB6VYvMyBdLVwfvFfovXToPgE21R4Prn3CHGrJCGKjePhFULqeBAoitFt1fLCueW2ZaJCGFXr9gMJvq9JtRmjr",
  "key3": "28FcuTv66YWuHnmMqxsYid9rxHANcoEU1KoTgmXP3ZaZEfPb4bgLiMnVrVGX2E2J58yZcGvFF7jyqSqJpFtCs88e",
  "key4": "3JHWV1qDJWrZcuSdqgxUeg6ohSDiRFPy1Vfqsn1QUuL2QPZiPSWXivNNPmXVQgVSYshpGkBXNoDY8jxHCk1UnEfT",
  "key5": "4urwFgtk2hKDoY9SfomSAvWiqQezwwjSKkdMdykq7YiZzrDMNahbvfJFLHhT84MdYR4TjfBAayx5SFmmAer4oVhp",
  "key6": "5Cm5XBMcwC7edHfNf5tWdbDx4PcJdEgj9oxkcf9ZHCrbBVd9MBwwi4jncAkaDQq9HKkTq3n4PnVWExYfzQyKSTEc",
  "key7": "2vVBywn7FewXRAtqXDEvzVceZAH1kAqp3aRK7SGvck4PW14ZMwiLCSRJeGe5bH8jZKMPzXYfyT2wWt2JwKt5waVM",
  "key8": "41UVJUBjr5jM593oZ16SVFWi8SdNKbDAf6kyuhSZUa8VfuJxuhbtXVibpuFdX7Uph5uSfA8XWtL94gYq5egLW2zX",
  "key9": "5CSMhYjJfpgmBVBoeAHmn4PXp8XdMYs34KfTrJHfm2zopiesjNtT2swGVGtmrnXtbPV2jN3MA7NRkyrzihiAiyJR",
  "key10": "V1Y5GzZwLWMVCBCYf7J4vcDNqgdE98WWEyw1hzm1TwR7gtkADi7fChqzWsNBWNLTam9rgo3sHNY86nvvW3Toh5g",
  "key11": "3fRFGLQK7ptBBhj82MbcARzJ39qRsDS7oTHXFKLJVsPF7EA8rtYm6XhduvzKHianvN6BweFxq289iS6CdVdzYURq",
  "key12": "3RW8TSPcZipTuV6Kt5D8EPA112TmKqawWRhudqBYsB1QQALZe5aKUVmu9tVzF3VgAAzd1qaModoamHVJw1HXYxXm",
  "key13": "5eZz7VxfW2JgMr1K4vJrZHEHcRpEo63YK9BpdF4mDY5vx1o29qEpogaibNNAqwvJd5Bf5hoZg7KRvZwpDy2GhyV1",
  "key14": "VTq4XJkpVgVeqg9owKX3UMR4QNts3rLFSdKWczUF7PkK6qjsRgp5ZwkSPH12CGu2H15MA3jvC4KM9YFFLGz4YQa",
  "key15": "4KFJcQFKqNW6nmTS6MeBgvfYc9LKFPK1H5vysv65S67MLXuSm1Wkix5f9hxeXwDpMirudWwFQPVHf5hzzuzoehGL",
  "key16": "3fN5WHvFSJim472Lqz4Dd7jqt8oeuBp6BqYQoc5Cd6EFZi3rY2yD6nDFTJcRLANY5Byxpvcku71PwPVf1pndPvQE",
  "key17": "4fGdnJdpLyGMQpURVRUhfZbu91dAbcLpw3ms6GD96bGnXhECjv8W3brU4tSTnfhR6uXBq8PCbKMx2QPohSV5Konp",
  "key18": "298TVo59jzi5iAYkZa3w7Gh7u9hcdjpVifVev2xiQvL96awD9MmYsbPcnxGMdCgBVaodBsjy3H9QYQD13PWpPvA2",
  "key19": "ApZvkgrFq8ZERuhn13ouH8whQRaAmg6ufj7yXAFfqJ9E7bahwbM4MMvddcMvBf2GY4kxg3usYx1DzSP4mPJaqfG",
  "key20": "3G9huZSRoX69Vvt49pUB1yLsfa6S1KJoVynZz33vBcqXfFMSi6pMSyMeDoCkZUL4HGadQ4qyr43SJrT8JF5VUC5R",
  "key21": "3mm3fVRsQgvxdxuymVybX5HHKnK6aPiBKWGzRX9tLFWVoHTFgqkDdV2LcpYHmXS7gARFomUVnVhxM7nR98JHSdea",
  "key22": "3zUZELF1HXGFQ7A4HdnhTwyGAEKFzujRBgcvoGjWq3vQMtLUcxzJ5iCjTNDmkUXjfAPP1qu2x6J4c3tWPFRcDMtC",
  "key23": "33VGas2jevCnMwcw6jCgj5d15kmnJohiGnFvgPsYGYZsoNsoesrbX7JhEFG5cygz3dE4ZD1e3L1sez5Hozcrw5aj",
  "key24": "5pwWEa49tXqyuWStz5MEKKJsvPoVg9b7b5AudUCqYYhR38HH1CVqXfnDsb85zENALrcSY5M9mHHtDYJossJuMY61",
  "key25": "5fjN1ukeT9miJp3Ri1FGRcU9Yu87sM2jALXkPe7ekDX5eTeSRsoWqtMwRzaedRdom7YXzSbEcv7TB7drVpjQELEU",
  "key26": "2BNVm5ik8R4Tg5MKMaXmios8vhDX3LspKhWxgHX85j9bPxk98G5XGjpG5fNUV2Bccoi3nUeAh27EmDyHdZjA1qio",
  "key27": "5Yukoc7nd2VjfbhajYc6TCyfERBriiF7vB4ZAXG7wWPYUURxaAcpyHkYoN4TcBcS5FLEw9pQcvnwAA4XbekK4hFW",
  "key28": "2KTEVebnxrNGE9XoTQGbXR4LzLf6dxqpbjFXTHbQv6MCQdgQ9JGzjRe33Bg5TKyS2QQgxcAb7NhzXTFo22M1VuCX",
  "key29": "2RVmndsbz2wwtJGoef7N573v4Fei5yHJY1ZZeSuaTj1AiBdfKHWX2pVLCQTvtbdpnPJro3TFHUJGxbW2ZhPnAkfP",
  "key30": "7utAUs42ko5Muj9z6DKEDf8PFnANsgFgJZe79ZQiYNyS5DYh1SheBWiBQaNWRHw2BqpX1usrxNXP37YACX4njcg",
  "key31": "5qVomdqerq2w6pb9wWLQBRvhaR97RhE9svjm4n9PL5ay4yGgjtfUrbFusSXPyBpbjMtuw8PSW5in1TgzEsweJRBR",
  "key32": "5VjhRvn7vDhnRN4GRnTQhrFPCBMyzWU7joBp8mDxtmm5ifasbv7nPfvrQ3fF64pYuTQouevJC7omET4zkviTuT2e",
  "key33": "V9UxT8HfS42tM13U8YtzZ1RAWskBdHkdfjc5dY1NYydkXZKyhNuGdHESw3Kou7cnTifFdqt2udpgeQnL1CtX2Gj",
  "key34": "592jov83FVPrdmtceaCXai7SG5pm2A2iaj97kSqtbtc1z1xWpMTGRChSe1PXhpt214XGxsDVtxHHWoJFi5wgx7Y",
  "key35": "4oYGYrgcJgZYf6ivCpkLGyKnU7syN1RK3AH8aeWqQqhUsiNyVyjMzsEFAJpCm8KuzykMBLqocgtHfTa5iGa6bRey",
  "key36": "2aYMQKVA4xufSeKNhB9kouzaiGtsexnt2Q6xzKtAWAcMXQk79vU4p6dZZmuDMJ7CFFb4k7avRm1TeDFUAY7EhYky",
  "key37": "5v6iGuo4hnyY37humXBT4koPLiN8vvao4u1Ht215DazX93QQeCgFMSqaeax2Myt3hiXTuUeCJw2kEPVGih3uZUGj",
  "key38": "5YmtC8YoUUpxFZqXc5dEJ5aqYBV633yhR3UTQHzmCwzC63w9Zm65acUX9ZeskhD4vkHkUbzv1YgAHEhpaWUCQ7vo",
  "key39": "4LagoDQRygeuEEqMnqqXbiA46Qf35wrGDJBk8QJe6gMZr5TZUrPPnib8dbewDRvZWdVr18gBDB96gK73Rxh4sRND",
  "key40": "5iiBjQkSvYcnnnDZz3p4fVT7i3EZnMqhfUUa8eQbqVQVKaznUfM5g3eDWhoihUGPaLb6Dr2myT2N3TddKkwDxBvQ",
  "key41": "86QGdVSAEayM5wo7wvqQTo9T3BzjMsVhTng6chfCR66XUCFWZQe1qhoDcXa8qxuybbXiD7kEXVCNkxDW9pqbYKA",
  "key42": "43wz6yard1taQMS4GNoXmMitDKwCfG2kPeqjwrqPtgQLAD7ViYoTMaUYAqvwUBbLGoeMgWdggRBroGDJcZW7xPSN",
  "key43": "64AT2hpvwnDRfd6Cda4KiQcvBXyK5FTPoFLe8crWhRHDYx9VuSp6nuAaKjfcnEYHgSBxcGnScxdVyPFyDgfyKMNu"
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
