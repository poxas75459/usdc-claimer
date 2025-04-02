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
    "N8wYhkytGuy9Hz4LSp7y2VgyXcGE4wFmh3hVRw6QyYj8QfjiT8yfRnxECbUoncc8MqL8xEhJmXDs4pNSqLLufwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55PMCwCgUd9AhyYBCW3bxqEjFrsbBz11SeADyKojp2vUJWBiHThDiT9vPzkD3U82MdazLL3GR38VAABfRQ5Xzexm",
  "key1": "54ZEdnzmZQv5dfomPnpyMtgMawRekNKVaAwkCCJvM84pG7CyQTibk9ZeiozZc5x68y2rWJnH2TzrncTsqkmYVgwm",
  "key2": "5hdweEqR1HbaeVRPgv36qpT3kDyZE9fHKtSpyq4M9Ag6bYkKJepy8UbeG5RiEge33e26dFrH6FPkn8gFoctDEDkH",
  "key3": "5nH33dzg4utNGY9UwVqcHg9agQ9xGCQr8Yr4VBQ96BgiBaNatYrVqJMY5Se97KiJHdFQ6AE87CKamje5D8H3QuJG",
  "key4": "2fX8LxqRtxpi7wFj4xAhN6MkhRMVKL3RNsybKqH5EJuLt3HSeJmtVArKTSCQdnXBM6JpNhpgQAnoK1M3fpeV9QJM",
  "key5": "T5PbzKhajSdjNagL3AtBpuKcd3Cc4QrT5TcmowwGatGVKzQCu1TJz4SmzwgDAzxuBPfHFvMG9ehBMVwe6y3WNyX",
  "key6": "FsMeYpqFrgbiYCF9csyRoLFKkgxRch1hsEKe5WUUpUwppWnC8AAh9D6vyD7S8VyuLN6QH227y1jXwXoq4vvkaks",
  "key7": "Tw9XccoDTgoqLYgvChAGg8KQaYQ6WALMvXUfQyuZqS5w7BUyG6gHM9pRzd7jNcqVPDes7mtpH3k8vR6LreyWE4p",
  "key8": "4Hn58sm5hjxUwVhwMisfofbw2L2gX8e7zrwmg11CPjfeJY93pZm6MfH6PL8esjgkRxrm7xx6xuiannZffmxcUZ24",
  "key9": "3gBxRsrA5T1W1QbSnmdWYKaBsm52NMngcZKkJ9fKM3G6fdYyAFyj1D75Y6HnaNtob77ZgKEmwKto1zMBGYQGPraw",
  "key10": "2NTWKsToqRKaufSqudKqsaB4i4YNwAnLaAtvJAKwNTEALRvFu1XHUu7BuMi2kbKxJwNLjhzCapk1b27VcFFMBF6D",
  "key11": "3LWVAUP5JdRjeNhDaNhwL5tmP7j2ANbwwKB7NmXDNFkK9AQiUvMoGsoojfHTGsaFCJ3Ee6TMVG5Qd6SKsriWCbPc",
  "key12": "2U4GuDJN512dDYTqhh4JJHdM9xRzFH3qPiP5PE9Lth6NaEMSEXD5LN4SJk8BeFuUVAcpLH9nqDRnAoAuomgLk2XY",
  "key13": "2HWo1DYJChUgQXgvXCTDap7WhEyTgvjpUuXYNoxHC1Ts1LUf27U2j5kj3b9vwvbAjFuM7EwGA468rfRhxeSVLSYD",
  "key14": "3usLy5rPYVpCdC5QyZZzdZSBNA7JosFbF1ij84NnWTVF5wYB9QQFcWMzDxsb9K5vMYftDRH7zUtUBTzvDtcXVyr9",
  "key15": "e1h9Yv6amCC5xL8FsmMwFF9bTV5gQVXMJNDNahnnzm2h74EjwjGQjbfKtzUfzXEhm8YXDzRkHMptxRyoTfEUjSu",
  "key16": "qZZyCARqZLvZwbLtpYwBqZwSX9fPsxnGsmnYwzgg6uRCrFKawxve5CmVp8jc87cnaNzqSVPBCJqPssRibwMHuyr",
  "key17": "4ePXLSQPPPor3kQtfmhL8XcJ5aoRnwgW4V5ksinBwPbssJUugrJULqC6JBuFXuMz4x3fiqhwqM562WiJtjAwooMc",
  "key18": "62CGSz8krDqnyjmHpTJH9BPj2Q7werMBB4BL6tmPh8DGoeHq9fueqRy6wFUKpbsFxbTVDXcDw14tAE1z239qPrdw",
  "key19": "4xXDpBJEqPf6XjZq9FgPUn7uKk8rFCM1gQ82oDSD3m7qZTh3Bs8j7YhHgzz38gX8GsNv2EwzGuQoJu8agWj9hXVQ",
  "key20": "4ferohsiLdit7u8RFJHG83x28JrSfCyDikZtnTLS9WHkthYjeGViakrydBufNopBE2C3xZ2zPFRENkfHyByU5BTF",
  "key21": "3s4Y9ChZNR4auBotJdQJk7tf5XVkATcuQbv5EKA9DwhGDRYkGAEDksGTBLvBVoJhew4rZpRUA4XaD3kFXT5WBs1u",
  "key22": "48EYpdD3Gfrh5ucRhVYRgmE466LsnCK2JTNdDAM4XMqRLC1JUr1uVCM9iGJKvf2cfmqc7bAz6GMukM6uMMKbLr9t",
  "key23": "5zduHSsJ3Q6dSbMnZswCfaTqMR1Yz77utvyZUDMiYthNyVTzBR8HbpcL49mV7vA6EwZfSFiE6VjtPQ3WMMfVPxFk",
  "key24": "Z6FhTJguRCJKB8aNxthSUs67jUUFJf7doJysLSzrjePXSA4v5gLXmzRfoXbhPTaZK6F33cvTSuGPFrakaWG7wkd",
  "key25": "2MiMTA3t2JsiYiTu8n96MGXRCUKsiTQwBAUyFypYZLqQxsGZCPhEk9t8oV3pDguwcnjHwdJkKyTA5Kfrt9KRVCP7",
  "key26": "2DJz97DqLoPWFG9BP6WSciJhRfB7s1SzNrDAF9yxNacW3PG5VfM1nsRQyuvvB3jJXBP2QoTMUqre8SS4rsyuG1Yp"
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
