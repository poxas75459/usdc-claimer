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
    "4dKV4X5VtRPFrAfQhjCqCMhzhHbG1xaLJDB139FyYBoGji4EyMRaTNqtSBMwN5dcUu637ciBXWWT1zXBmeuJ77Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vPcMQuPHdV3P8u116nPuN5YPueNx6fUQ5rYvFT4YSzMBhZAZeHYFhVKsmRt1DFQrVqG5BvoYMQjCVPpNFEoz2a9",
  "key1": "1njBJwPMbt2a8Cp4onqnjfQRbCdvLkNvVx7EcYUXfamn2LZbRbWGre7a12MEVh383ekZopHpzAeLrMNNZDHDC59",
  "key2": "5bT5D5UBMoRUj7XkPwz5f4wsCfcq7hPubZhmuhnpLw5C5U5YysEQyqSbb6Kx2hePijk7oXf1RcVzNmJPxeoeocGN",
  "key3": "39cKqiCGL6LHtn5KtRbPyoXNFXwRt2yh7oPLrzijcwP7imz4GpCBUr7TvRZEnprBY7RzQKFrA14RwTbDytGYdyEc",
  "key4": "j9G9hrjw879Vfp39QQ1WD5upQcvTvY1vEZFThRxEkKrE6WqquxXgMDw9oP184qv84BxxvcWNgfM1G8JRMdzzxcy",
  "key5": "3qwEbhoed47X71QAJHe17SZmLgRLa8gzY49beqaUZNJW4CLirTGtEqXPvGuYp9aqzzGkQCLnMfQr5feAs31RBdKe",
  "key6": "5zJGzVciKBm4WNUUiU8G3fusNXYsTDZgvdiEtvCn8JNaFrBHBU5ttwEaHYBcx9AbHndR8iZRaWCKBrG6BLCGfCDz",
  "key7": "3Nu5Nf9UVvtLS5pSEZuma6JHWTaukHexLfYMLWdwZtfX5Kg4wHJ5QJgaHTKRrj9y4KgysHDzCYjoYpCCV6rYwYdH",
  "key8": "b57LgsQESJghdiFjZjEdMrjb2mP7h1PwmjZUhgnaRHFy2NFJWR5qeyPs1nR45tBuwRMLDSnbqmCAfwdiymzL3tz",
  "key9": "3iJwfG74f5j1SYZc9Zk3k15cX6m5mKrkfJ5hT4mC2nUj4Kw69L8echYTKB38hKFDw1UEKHsXSjmvqNRNtBRZST9k",
  "key10": "2f6rdMaAez9jxTVUSEAWQaAyiXeXcnwrq3X7YozTQTtvbVWSzNtfCs9zVpAihuFqn1MzeQ2LZw6wdB4N44cfvaa5",
  "key11": "5a1fLTqk8WFNSLRMvzmdwXSUV3k4dP1KuA6mRkV2Hj1DxZJR59Cgx87Luca55iCK5gTkc2yAcE3zXJXTiQd99jAL",
  "key12": "5MVygeJJE9batxNJP65bDTYHx33MEdu8a7jdi7MXzHMb45rcZSYqpr2LLf8vBqQSY8nowWtyZEA59Jhfg84vNLKt",
  "key13": "5Sr93Jnu2CZPBh51sqaoMkuu6FtzWTcC2g4sEEVhV9Mw9MTykLDUJTpwrJ2fNPqdQV1KYFyArVDjefzbbaM5zJq9",
  "key14": "5h3EBsv6SSGY4JtBZuD4LCS2obdxtEDkqVMTPWudtZqpS5PN5x1F3NWvD4UyxszXZz4m6xYGxE48fHHGH65Q2ko1",
  "key15": "36bXdsDcPdXfKywwC8TPXWPNnAz2dJs5RxkAVQKBocDikLb7fk8mKtGb43uUep1A67YdvZpxNCCvyW3f4erj2SzU",
  "key16": "264KWJG1cuU6BUyifdjhF6N8HjBU24Gr9gDE7Y22wBY8rqngWo4KzxufDVGkZKqBN4HsLwspwWcc2NQVBtgJ4cEF",
  "key17": "2f2qZDQudELfpYZ3yFgDDSAuA1PZzEGjqBJRFvoSg1YwREzWk8t2ZZsoYp69yf33sbmsxbj7LjR4kiW4jKoc7Tm7",
  "key18": "zir1Z4KkCScTVCFU7GgNxqdGFEDyf188SzQErETRuot63vGbaeacwF8PmBPpgHXEqgbpxEkim2NyEj4GNZKAHHW",
  "key19": "DWzuf5uVy6tT3675zJKuNNKQtwWCr7EDRkfvcxzwqv2QNB3e6HzNzGo9hJWR5Xp3PkyfJp59BLPgQAMbSjHFQWk",
  "key20": "4MNs12PF5VQk1mGJ6LScWX8jvj1tND1s15ZyASkgNtB6EsYjWRv9bZViTLTzUNzoYTRUsKtBQg65qxBncE7jLszQ",
  "key21": "5YNgV5FHxA4QY96Wu6bmtrYiRyAMkZStPG6gj7oL5VfVrF95Qn66v1UrJQV3yebXrG7K4D1g9BnAqRtSYczmbRXG",
  "key22": "sSrb21wqveT9eXikAuvgMSsUSdFKfBn6BSY2tvNUeLp2sT3oDAmZTMXK1VFEW2CdvKGQSKmtvEeETTeuNePojdu",
  "key23": "4cRV5wT78jWgRtvsF2W8D2gUZba9nHz6vbyk3W83LV8JFa4drfo4PTRCLVLNFDT2NqhHGcQM3g6TvBibUJdXUaJD",
  "key24": "5ERMnU8gAyVwDwdbeCjYG4A3sPAdMrXBin6zMW7kYpCYaCzykX3AaDtFK8PD7bJkeoYELjxeoeKvEQpmZpRNsa8R",
  "key25": "fei9sV8fESXG8CVbCjxuSiZwe1fXodaWUyvcTkoMCBUNNKaXunWmChTwDqCw167aCqxzGbURE6cmk3yz7iwvf8P",
  "key26": "GiFvzstWNHowboA5hQxZghJuyAoz4wBkpNySqEmv7eL4kWePXdP44x2CCwtcVnn2Aq34SQumeq4P2jCLzpY85NT",
  "key27": "2AVZyaQi6ByMjmUcnBSn4D4HbeDcQ6hRNTbTr2ByXFuwFZAcFcJkdWbYMkty7Z61vCpF3PLxtFpuobCH3BmCyd9C",
  "key28": "4Ee8WxosCmTRFjBcbwqWBZmZUVET2kfaDsFNVmGggWyrz7Qm6PdsjHy3effChQyxhdKcvqyoiNBc3iD6ztRnk84R",
  "key29": "2SK8JNb1sK2rCKrf19NcKNx2EqJuaYYYK4f2SS3WpsNvDMoHPyNMwk6rJR2qZY4FiPndbfSQRzVu2wLexfGnk2sG",
  "key30": "3eyLnsUZnmHGGnE5pPEkp7ZhtEgmaQpr8pPs6xUvCT4MNZXGDBAqQaHy4hVQy4YfzJ7XkBhvQLGrniEMeK7LRKWS",
  "key31": "3ToPQof5pwZ6VXNo8RJ7dgTNn8swxdes3TndVK18aUptv33NzFYcgYAbaWtUADaT8kJBERwM3xHejGgJmMi7W2yJ",
  "key32": "sJecpCegRoFCCwRFmiNGLgkodjviHJo8uRnRR3uR3unAvKWxVQqprKMCNUrvACYzjevYnYpX8byVZQuNQhVdg6s"
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
