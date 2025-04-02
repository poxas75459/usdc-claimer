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
    "5QqwH6qEWPCvTieY5E5MqDCUyGAkToJr3xscJQeD6N2ZGGsAruY2aoBSTuyuE3jDtoTgAHg8siUAotjJJ3tiAeBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w49BTL8yjYKg7SQK3GEo87TVBAsXAw4DPM6cbixkqx5UFQuq3cRMJPPGa3pgQvURWRqQX4JSuFiXRUv4KJt9R1r",
  "key1": "3tcqsdodurLdkJeGefxFFZrfeUXaE8xaDQWyuRomEnq4i3M9n22sEgaoMLnTDnGFaRTfvsHQKGyTYemzsgnD21ev",
  "key2": "3KLsVEGAU3dEfAieXbXwSneVmijMdpvAnpzaD2coYbmK7krn7r9nqh1hJxdB5tYcGPhqAoP3DqWyScayemqDCv1D",
  "key3": "3JKP5WAiYEe7tSryPzK3sFSPjnCWCTWzoHn3PhxwRHeKCmfirF2go41QXgAkiVCPm31J5b8rTxB6U7vunxNK8TRP",
  "key4": "49S4hfxjyKVnYqdbztXMK1hH4sUFb5fwcJDgu5hf2Pd5kjB1ncWKVhVVVxXBxfMVEy5z5SunPbq8VC6he6ytQatH",
  "key5": "kH7UT8LRZhWNGTUELb3drpo5WhfmqVrS1vGYnUFFWGd5ngZ4M4xASGatdpRcBST6xMkGSYyp9CYDDHN5WfLW6dr",
  "key6": "5ELmTcLsL2tNFsQLFGC6AWTtkw4tBikj3X7YiumQtgBXdQXVjBWzhrHv7QmaAhEi8oqymiWrh3Cj6417qPzWWRMy",
  "key7": "4y6yLiVXswBjziqJMLxbRxfAFmrPsiH8kQ6EcKV1Mk5yiiddKvWhJh6vuSruuAP3RyraFGS1MAXUpP8NSawMSLBX",
  "key8": "2R4UQhQqotew2RwnRjSkxSjiL8UXXvTqn5bPYs4YgRMTrbrSsDAHfTgw7RAvVGq6YWT1taN3McCG3hGbcgdaMhpg",
  "key9": "RzWZDGU8xe3pBn5sH8ef8LduPcp2VJc6BbmRRFx2UUjzbUa2eDcC9FNv6wfwUGUbLJFYwrqbhh6cYLTMfmMBtcp",
  "key10": "5JtBzsY7aV21VeN1s6eCKZTkGBDzM9VEgiZiriTCRxjPKDTuf7NDZXBJqgEtZEraw51M9UdBZWCku7UoTYU7cFKq",
  "key11": "4XTUTcFspyjK81N1Ld5UF5WFXab2E1g6TCzQBDXFom5avDAQFQFAEr2tP2gqMi7u7c2z5AVgkczzyoQEAsUdLYQt",
  "key12": "2pR7w5ZorjkGH6FQ7sJjCikAcPgTboxLgfDpfD9CGcDzQQFdmSS3JHt2WviJXz72ZuJYLyS8cYPmrPffZUhSWBQB",
  "key13": "3Td65E66A2Ein16ARunu1EV8PpZH2QppCD4x9Vnt5dL56scVoCtQs7mQzPGMxKQQwoPpe52RMpQjwhwZMQbZyBWN",
  "key14": "zRYE36iZ4rR8DXjtsn8ze4a7obePQqUkyixL5ouGdQFWG3yqBnTcZe1N9xYc9NJMFCsRqLDV67QNwrV59wfnRS5",
  "key15": "PMbBr8oFtZ5gmWYvDVgxwANZePencuQZRnzmGm4Jtw4TKBiDkAvdt3yjDVY9RHuPoS1YfwinAst4yS94GiNmP3E",
  "key16": "4kCL1BWmPdyUDAtcW2PQMEhzU489UzbA2i7bvEUtETQjCUtZi4uNDvo5CQSf6k66SdAF7ez8fUEWgicqN7WhRndx",
  "key17": "gYEgXee756nTD4f1zphXiyRKcndc7vw3NEPFdr8u4hyZLFR4o2pXw12GH419LWpvxnAHy5ZjvEhqAoX4Bb88TRY",
  "key18": "3MrKdbEM5decRaieVuuHRqHYhWySD2kfLuEMU5SeVb3oMVqosJNs3v7Qt9dVNNUDDomYkkM5xR1QpUDx2hZDDpxv",
  "key19": "3QWSrgUqW2eoqApXt1UdauhvY7Ff63a2eeuhD3QuVSnwyqs9fK9e93xfadq189UERguYvsYAQ5scpFRRehojbF7X",
  "key20": "3XrADUZKMryxkpoLezB26GGU52mQ5Uba687uiAXodqzoNdHoVfo4Y6jUFFYt6NDCdJJJa4X8q4ePYXyHp4sjBgz7",
  "key21": "2pJEenvFgfNGD71zHUzYM6h59Jd1fskSUTU1xcjBLBYY3Y1Naz8cdRE3jnafZN3gzKdYxZJztY5vKNSUKox4pdXL",
  "key22": "wCeK5nGjprwgS3WarY1tBqnFQ1VKZaP82Caxp9GCn3xxVUtvHgLaT1uBkfj2sSVqUnSkewN5niAEXSrs66B6NHZ",
  "key23": "437iD6MH8YoULBZCYpuCU1BE2cpknBv4n9nJNaRrqwBPKLnjRimzhAA4TBXDjVjiETWaFCjzdMaQiUPHAWXvNrD7",
  "key24": "5fqf6j1bKNVaQbs3onUMT7ivpzaiGFEAn32Pw2izfBzfvwBUYnmerkpufwxLjbJwZiD6yAz4H68qXEJsPG1S2Sr3",
  "key25": "4LceTg8VH3jAVRGnL13zZ95LNHBbPLKX1tXvGa7fzXkZiwTozszqXix7oCRYz7Km8Hcm1VwW1nm1LU9iA6jqZiZx",
  "key26": "NG76YXs2URg6cn89UScQT8kwd4o9Um2Zjvw89SGoPRpmB6etnPK8CNo9bRvtGwALRddL8TxP5kARPNTcGT2c38P",
  "key27": "cfG15AUHV1s911DstmHach2ebN6VZ3BWv2DfwEQ7mAKBKgtn4hhMR3r1jqsC4t8qmD7pi3acT1ekAoZ3kvHYyv6",
  "key28": "42JwpChq7dS3kauKQuiFpa4v5of3GPAQH6UFLKcYUKYd8AVHyhQxo8K1bzttsxsT7zEiPk1XLEns1oyAzSszuxDt",
  "key29": "5UDuHPSR5WMkDcAqBNg9fx2DbPC7fjzYkjyvg25YWZmMzDGaGVvgSgDwobAmw7dDbYVc6iK9fN8SPNLwn5WNa8ZV",
  "key30": "GD3NcTRGcE7eCP9fZ9gGMGVwVczW6zFgfgwNabtvgFrZKyNuEMtSXBtyoiLMbtPDnv8Ag2udRsoKukQWQXsLc7y",
  "key31": "KNYJEpDjMSfRA2ZsypsQr1qzUm22D8uvmzWsK1mvZA4mtQAJhixQohFJ4E7Sq43k72szpRyRrqKnAX4qfE3ZPFH",
  "key32": "58Hta1RbCSzVKh5RcJvrHWDxFxgbM9HhxuKU6Un27LqHYcb7ykWkUJsLDpvauUnrJ5R15RQFPHPt5Y5KcDKbrPVp",
  "key33": "4UHBYstfR6x51GxDnvrKc5rJBPR1saHGKkj2NBG4B8yep5YddsV5sbhCKkSRpwcRSGpGj8BoC2hNbUBn1cChmbwM"
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
