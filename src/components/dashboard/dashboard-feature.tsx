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
    "23DmcykUZJkMQEwNNsNxBBkbAazUuaA5JWKp8RJokzKqcQzNiNRqUoxer29tAL6Eiv1qw3YF5st3QMzkRVzDvi7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZibRmHxyUwzyamZu1HUmrj8zqfMeFq6BWnWQLyYVSGASS82ZRYFvCUk8Wef8nHP8mjpYPpuDmECXc1asKNH7KW",
  "key1": "2dxVQPQNsQthfPQgB7ndxkRJTtQcFUMq2UvhJrjVhxiw2ZrvPyCojVM2uuBrKzXXycPAG7E4g6kdGErV474dWPSQ",
  "key2": "5X7bdQYdjb8GRkYwqq1NzobCgPpBMfPAgxbuZ4TQeWamvUQkqRyqqaMcD5TfpTZ1ZizxGQTRciM1jU6tPMzhmKXk",
  "key3": "5TtPwFi2R8NGZby7KF5xA9kGtjKupVUXq6y6Vq4VA3WkoKwPKf5RqMJbTirumEBPsxmswdAmMXnfjQqB3qCnCJtA",
  "key4": "CTVaksdkkV777nSDtfy2JX65Av9TVnfSAngxm5wzJJFmPWqJnm1Q6WpzogcsvHxbn4PWBsKD2jiEaCDjbv96W3S",
  "key5": "67L52U4iwMAkuWRpbDQV1Uayfa9Tz2EsxABMk3mYmZfznDRmC9BCRdsH3xhviFz9qcQ3FyJgMZeUeAMsppUS795w",
  "key6": "5Mb7kCs46pg6jvEHp7M8iRPCmnVsPQinPF3ZtDjS67nhyVbzbY4hkJBPrgxtBE6BuvdZocq13RvW1ryPEYRJUbQf",
  "key7": "seMf7MZwupgkvukaYi8y2TLvZuqTCvSPe7jqZVqSS8qjEvGAv7qMAM8GFKpvfWWKJ8fBeXRd4vbcgsZZVQwPKGj",
  "key8": "5jHnbS3gRzjYN24D5Gj77KKok6vcPaQz4YXLHNPq3x1rGagz5n1qGrFttr4ndPXBbh1gEkgRU3aXLRnW4qGyjF1w",
  "key9": "2dcBfLrqrtnGbBDXB5sCxmbyWEA7f9j5BGUokC65Wune3B5ju4o9HiVEASFxXeaHimqN8Ny6sjHvQcSioUwK8g1m",
  "key10": "xxLUfkR4uBeWFtMqHtBjzaNRe4dkXNxtSNocbEe4R3HjFvR67v2wwfje5biHL2p4vR74HNMySP1ow3KXFiBNe2F",
  "key11": "4GuD27d9szG98q983y6jQu2y46DwddJax1N4Hb8HVKT1MNnp7Yzhybg9eNYc6FDg6EzDXiXjaJAumKPG83rgDBTF",
  "key12": "2HmDvuRXAEFpw17rxLKAgMwfSG8L2yTELeBeCYsQuLbHJ9Y2ohsfnopBigwokiStqiaeeKo6rCs2K2qCGUwguZJS",
  "key13": "2BL3hQEygnTNPRXtHrDtU6HLq1N7VUDCWsW1PXJDPuqtf7uX8jaoDtKt17iWuxWjcWrNgECLpbquYmfy4n7oseNt",
  "key14": "4k82Ry6smBoQLvppiY3DBXLwNn8jNLWFnZN7CNRizUkJ1wLzbnWUmZXEESgv7jY6aHejW6c21aQXEvZqR2xSTboY",
  "key15": "5x4uuRQ6QbCShnYNLNq7YFcHFCWNi4PwWUiHsJdzBpNg3zfh73kurzvbTpFJuSKuNfKuB2u4js2X2GTzT1bTVYZr",
  "key16": "4SWwcZmGQxcDW4TBUw5HFFrVkNSMjzBVakCsb1bzfe7CQFvUTFkq2XntAUZcZuVCDPbcGMbm6kJDDReY3UNTBrGb",
  "key17": "2ZgXDxjfPcUBCT941DMbdAmXVJZfjtYr8VwmuLmPEyXg5qqJbvFMCWr4LM8i8JmnDJsqFR3RdGeDHDEwmoCFH52N",
  "key18": "8wt6uvJ8oj3R1x4MKU3KTeF5McBVhvS7yZk1iV4Sxf5JaND5WwuSh5uKmBk1hKeHYprWBmb3MCaMh8LwuhbHA2L",
  "key19": "3GPQtGtysFvD9Q7N5LKG7qjKPVYfg2QBmGcY3Yj5Hp8ftndMKSfACG8WtKdgFrsJR4AVQxDxTmpMKRindU5UX9M5",
  "key20": "3GqkWcqJGuuLktE1kRUkhFMeZ98dyo9eS9j5MRtPQ8G824c5PQ4sVZo7dFCLgbNFKz8r8DzpVqPEREjMRBqgyx3f",
  "key21": "5XySb1BXGUWg6iCpF1wa6fQrc5XTyP7p9yAYr3zv48mBqPpKWTC77etiazr3H4LbHeDEPiUPQqRPAJc5kMf83PWd",
  "key22": "21uCqxfXVQSwSU1bxGdve44xKGcVMT4D4uXdSK7KURJFk21pvmLrPYq4PBc4tW6tnEGMJphXhcopN6t7YgFNmrqX",
  "key23": "5eVGifWDVtGFaBaPjzLaCjvkaxohM6CsApuHx9w9NYo85mBMLswvEshcHGPDHZmptGf6GULjgiJxHwSgyYCweo9u",
  "key24": "HLvySBzC8cdppcJt4xgqjzfRsxyVMeY4y1fHUCTWih1BTRPdGsxEnqnvwtwWZmRNH4rypGUaWpLQLdDWZniLkDQ",
  "key25": "2iLoi9MsZBR4NkmQPJbFMtRA1N9HSk1CiHg4XJQwL2mVFYXfyfdRhR48YSCoZFvr8zL6nEWmUDEtKTMgGjYD2U3z",
  "key26": "2P8AXaihXxa5vK5AseWXGz6ECe3jSCSPoTCBH8oebiJPfXxd1NiCWTkYAnsDubvjRNB4pXkJ3pHZE1jVcgwtWsii",
  "key27": "3tNoHt9FEyk4tS4KWWwtjsx1RKgvhC96hsUnTnrAoRQR8jt2i5wbHCogSASq8wBDF9CWbhJCTwPKSrVCPL8p3nuT",
  "key28": "2SmdqjsHeybF7xSdYnxwHbmf77D6ez63FhgdURewqR82wUPFdfuLcoBf6giTgFnoasKmkyAiWSmz5atgVz6JqyoJ",
  "key29": "5Y1Ao4S2Zt4AXjsRqHEkMXmCF5GpohBxiLtC2TiQddFd5rcHkqt1zd39Q51jhHPQkbDVQB8Ps1fzjG6Nsq2tpDXc",
  "key30": "2KtfKiiX4jGcSkhhkKhsdzPiDatKdQXKPcRdVjGVShTh2noythR5WkYoKvp8zZvcywrCc59Y6Ypr6v34kWVjeGVY",
  "key31": "2gVJsEkhknNMfd8ZLGAjFD4RFPQ6CDhb91Y6wnSVmDwq5XnhtsAtfAuuJgQ4R58n2hTzLTruJdnumwZ5FYwy27TM",
  "key32": "KBuAHPuKNUNBd2hHRAeD3m9DHtx1qeYYU5jNowvP81muL11ao98p7sHEYM5xcA8qzoqYrQ335owyBdPytzUVhLP",
  "key33": "2chEznF3hpd5q1tzJNevXwHfTTNy2jySpjSDohhSpMdeqLpnMUexB9CuqabriLbs7Vp32RrgDQxssKSLo3SGZ42T",
  "key34": "32ATigwY4vDForSnBKmcD8rpWkfM2Vn8yGJbNPhnDor4F73xToQB9EnyZ3Bd8sJftCyYS6NToSzg3nBtBgYcamcX",
  "key35": "WtPTZ9Wa3CoK5CaZ5Zjx2rhGFQW7TrwrwRocPSixu9htTuSShWqn47EH2Zc47Jvhugazskojt7zjDsCmbZdZBg1",
  "key36": "4Y9Gm3RR2Ew4J1u9fg9RvYhGXSscwxRFU9RfZ7YgMo2HDFjR5TV74ev5pM4Uc9g5QfHbXNwqT9nj98R6j8bDx2ob",
  "key37": "z5mSsPrhc2mSyjGjex1TnujGTvKznRnLg9wFCbQLptTTNB9Cr2ytXJLH53vYL73QS1swKksxbkyrnimGJy31oEd",
  "key38": "4Fh57hbBdAGMCAbHNbEyAtTNZqcTmUEpqGMtCwCUqyQEfDmTWSZEBc2jPvRZwumGmnf9dEwJDvCbQJvQp7znWEGo",
  "key39": "55ZPrFqeqqjFhMJYCxKbGjaoZYJ6B8pprxjG7gJSpJFuPFYvWgYrvTdWM7P5gg4KtxJMXQ36UF7HW5ES75n13KfF",
  "key40": "3EptPJUGU15ZBEiaonopdom2UkFrnCUDBTDdHvHPYxvHfMLrrgKFTtzFx1e7sqZGersr7vUyMiSmoL4b5ig1mKHe",
  "key41": "2Zo9pn1vRKzxFz4mhckU3PJKUtPq91ZaGwza5AoMG65LK33PW6hbkgWDMthKQQTsmsBE8CUZRFVvUpS1bfkzhJSz",
  "key42": "2NnJzSqP4RcLxows4LFQ9rawMLeq2x3mudSusxGJYvACzQMqSStsrCSn6QicqrCABGpBQ3RWPiABSUfizjwaVzta"
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
