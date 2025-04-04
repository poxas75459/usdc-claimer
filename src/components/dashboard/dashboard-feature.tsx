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
    "5D5Wn1cGndpTCyE9wZoQnojxzTZU24U2nKnKxff3jnzCh7jmMhaoVgaunBtNSaZhkYG9xYk8ydeiSpYA1c9g6Esj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HA4XmvwTT7PCgXLn98tN7ZC6NtaWhkaUg8ZRxSrA9PdUpmPvo3THXEfPNcjrssTxArmWGenqsMWZkbz41iqehN",
  "key1": "2th1NFFdWeXX4EKwb1XV9pLFGsMyzExcYwcJaEiYh18crWaNnDCdgJGQmSeqYGpyvxD5puWW7wNyYqVAECPhNvoc",
  "key2": "3BPtCNmd9ZMzZVKjqdD9BwqkVCReddT1a1d2fN8PWcJMkGNB7yddYfEEUK7qEFR73P5CkbancJKFv2UZ1N6tuo61",
  "key3": "2P2wxWVCk1atAEs1igKqRgUSRxEfHTmPm9E92VrnkdEyAMe7KnfJWkX5ZVUHuC8bpbq2zbszi2ihA96NFQBYc1Na",
  "key4": "5YL8x6Um7XfPEkk3m14x2mVPrFnuAQkNJx9C8NjAfu5uoyoBVBG4S2BQ9nkTeG9t79JxDw7n3EQA7W1TchUVQKth",
  "key5": "5XQbsK24tZQKhPkkXtymgQzyC6LrWCySCbMVfFwocb6sjf87kjPb9tcKd7HZ19doZKcSf7E4eSNTGgZcXT8VEFSU",
  "key6": "575xwizfn5Ni24YCZdpkj6JDbqYwcrn6jfZL9u3uQknH1mowXGAU3nr4Gchr9ucfJAhFfs3RFd3gDioywWzyQWZj",
  "key7": "3FeimeeNEGwjJaC8X3SYvtFcuxSF5Cjd2FH3Q2FfA5Ayudmxxji7GaegygWDLfRVMEHGGu1LNj9vLtzZaWAZaEjc",
  "key8": "2iU8bh2jHT1NTtajoouKPG9BRMWGAZtBH4grhEGNdmSc4zrqDZXsnaJqtuLJVM6qXya8EzSjYsQ61TucggNTHTpb",
  "key9": "2SiCEiTkbnkU2JxmnzNT12qcsnS95mM2bKcAe6QnA9bDQKn3xjRYkRrxt7EzZ5sREfmNU5y42vyTQLLpbLZmBPTH",
  "key10": "Ger8rkctr1ecWYpToZXkb1zvz3sXi9jon98SHhvPUkuyYK8AFC7JhDYgWCCMfFeQPmdVgsnHN892PZQ3Xp1uWHJ",
  "key11": "27QPKaZkw1et2XEPXXp1V2J1FVQvbDnNwYFfefwAvGEMdizMYc3aECBhTxmwQg7FdUzqqahvwraHRujoDoJ6p7ch",
  "key12": "SCyKzrxaQqT9u8segNT47WbknkW6dtKSaUNSY7aw4KXr7fwosQp5F48HZ1YYFgVv5gXZr8PiqH7qZpBmqMkBzg6",
  "key13": "65sPvnT8oAGe3QwfYqmwZvnGASMsrjwGqbmNpzwEuMLL4bLu6RRYCesknjMCTV2JaryZSUmoQo429YiXeqxveLcn",
  "key14": "5qTyeDzYL4czRxwWiDJn1hA442MxeuJ7NBWumc7Quc7zJ1FwnSAJrWFNRUCYmBWuzUPKWSyZGmumLnyTWbCZGQDi",
  "key15": "4cd1dy7uigPTxDjB6arquuQRqKMjzcEKCBM3Zdb7brTM3wAeJwH8qESeQFTVqdATwnM6aNRSqWZHsLDamarpTXC7",
  "key16": "4Gv3s9KxBLua1h1x3qfX8X7AwZ2JnP7tdK3q9VgPkv7YTPzK7sR1hXby9H6ukC9k7aiZgcDwLoDkzKce3uq6ZRZm",
  "key17": "61y6i8WxxPP3qS1mfQBxHjXTK4mrjrQkkeUZae347HDb1tq2mNTnsjEqrRL1KE1LDzPHHyYvymfTpH3dwuKH2xzM",
  "key18": "3LUDCBcrcfBC8pqFiazgKiAJgpoUW41NVEc3hxrRQd3GFsS6k9Rummqk2tME9VKuqQQCH8APvNo8p9TgMoib3K7y",
  "key19": "1n93w6xrTKsmBFFgAfSYvS4nzDREgDc7JRLWcS1zJt6qwM6Sww2JiFncvk41ahqwWyswbSkNct6xtsaZsensKqu",
  "key20": "38xs82PKazBJcKpsQdvXkGbEwc8xhX59DdT2eZvfLNYzskLQcjEMWDwMk9BQP9tdZhBZSY1DEA5vEWtvcMf1ooEm",
  "key21": "4Qhut2kicb6Ry3fjUDNV9W59amZPjcxAckVtbguDkZ8mmkNCMx2XBsNRhKYe21mZmpDav72tSKFKEbNZ8hCCYAsY",
  "key22": "38sJwBXt6v248iXBMWzzA99xDrE43dbkPUTG4M4KkBZ3kjHE6f4vcbporPbqZYH5Z9xNZNu4DSaBrdqVNjJnw58p",
  "key23": "qnpo8jsUhVnTc5f1A1DB8HHcGdFUQGaKFAFEMRJytSDsRYzFu8RipiRw6JkkjuMks87cvqv9nWSUcJM6Rt8pR7c",
  "key24": "9eK2aTmjgXueASZw4ydvnYe2HAPmz1dB5YD2pCmtpj6c3UhWF8eCzXx6LdTmm2mZC4uMWoZy38z5REwiS7m3Nep",
  "key25": "VcJGsXUT72jvYrwMz9AqS4fiU4e846fngzuuvpEVGPAzewDWYx4YhyGN9muNNYNRPUTNeCrp2z4g8sF8aAJ4UFc",
  "key26": "5ybauHgk2qMMbHd45RRmLZht43J9cxBbvvjCxJkJjYPQyhaSq1o3eBLZAfdo2qjEKiBSXYGnJTGeJXMzDiTVCXzE",
  "key27": "4AWj36FT6kMfRTup8zo3bn2Gqi1bcsVrds4bCMuhxL2LRrrJ186TkrepX7YfAryVDe51pfCsDYhT9XL2MTCencMe",
  "key28": "jgJG9sVgvfCFEoDohLmwp5CvLUMSrRoognmoebn5srbyqBFXhN6RtoPEJRwebyszq9dmXs79pr4v72JjEVr5dSo",
  "key29": "mLeNkqhur1WtJmqA8XUczDupEJLrcwsME2Bm5v7eoeWbxhsWW5ugEhiZpooVPPX8S9BbFuh8t9Emm7rQarvPEss",
  "key30": "5NzDAaf1iyaiyrBRpC4kLabHN4ta91MsiKmDFxZgkL3gpRU8dm8ti8L9D8w24BpcJJEWMzfLvnQfvWHP7jM94iSp",
  "key31": "2k3ZBaUxpdipTqjAiifgtobWkQuFAEWUVv6WaDL6ZfeSJZtMPveV79Kxm6Z83eAokq9UJgn7sdfKy47rnkf6KFja",
  "key32": "HWFdfc1e9SGqsHFioj876HBPq3DdVSrNJ9U3CBtkjvWfzL2d84uPgGs4Kyj57dFk6WpX5m6x46yvKRu7zBEgzkN",
  "key33": "5e7qPNw8GUZsDkiUvbheLbqx8PPGPrUZJULMqGBF7JrK1MLxtsb19B3VbXyf6e79exmVAu1sj9max9qghpLQwBzX",
  "key34": "CknoDjF86akKoEkwmHv8uTN1CFf854AdQreZwEpWoBjN2LDLoq4rCpmpby77dbw7z4U5QJwUByc81AnfD5X9wnK",
  "key35": "5dnQ2tPpHsjdzT6KfHPpfLGtTEjG4dmsx67mUrQ9u37igakmxUe49EYkBvZXJqAnAi7drNpjpHRrEAYLfBw7FU5c",
  "key36": "5b9n7mpLRdK4hUZPFH7PukR1SnnaR5jx2tDNrkwrcNCgi7CCFnDRxa2KwqicWaK6qJwhiZSEQAHKQWEG2WJ7WNa",
  "key37": "66vDm74ocNPqmeBpj3fRLRX198zapw9QceJ8edBTnPSJwMhhCziei6YM3GDmoJrRUdZMC3bGPnnVgWdV4bSAjTwt",
  "key38": "2GyrkcP4SRLCbWLp8z9QrkCcwLiEtKSLzhRyqpjPTkgKTYEtvKBMqZYUXdExCztcEw9LSB3f4bZJdiZ1g9H6Auaf",
  "key39": "58xcKCoRtYmVJ17k9vKkgLuv9Kfhs4UtRSR7XAABf4xqGekLswQwcH8EjA75nQtRZZW6ujgU1aaNuRmxnEcngXxy",
  "key40": "2oQ8jBd4dQtsaYFuxAPp3HJ4HfZ5dF9THcQRa3Cnt5foUXuPiEhB6MVsRh5vfxUT8G5LMeid7ViWLXKjhwK5odJR",
  "key41": "GfJvJ1WPKnvhrxuCyuk3SvwBRRymo4qVFMJ17GMAytdS7WbBivgiJq2GqGTd6AGaCZHngGVzeEFTxFHSfvYUshk"
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
