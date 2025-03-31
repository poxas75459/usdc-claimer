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
    "2j7gEeZBe9rkQSx23JvPSA86qx4cM17RvcYWphjo4m3xWbkVA8jZJg54WfMQ71jNNkze6yyPk9iEy6TPnSnB5sFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBfi8VLCsn4TKKBT9tCPm6xUCEr18zwxH3feEwYeMxds1kyCL5HJeTZavkrPHvCdCvkqxCFoHw7VkqCBjs4gwwj",
  "key1": "5wVxZxJTieCumCnw6qGQjMFUmuh34MZBHBLVM1ot2eAvKyn66JZpJwigTakn6hazmdYCmCrFYfkzzaHfv17eEVks",
  "key2": "2zG4rKqQEAarABjBzdLPDYH3hGzYnmFujvk56uxRpo63224kBTbyHXq6TbKp7eyEFh45iFDiPrqv8icZwCsdxfLY",
  "key3": "4Mstp6heBz3b5GQgGXrCu1JA8SB83kBNdQFXn114bzreTGV198buXfDUk8GoWD8fZbovR81nxDWvxtXWCShn4p5x",
  "key4": "2rHr2KtNVfQbBCLy51q7Mv5FFNnudSwisSdbL6JYcuC4x5vcCFvHio7rq9XGQx8jsoMBR7obAdqJHbhFFDv36Zb2",
  "key5": "3KrfpvWQ7p9JGFdRGfZme9X6UqkH2gMVf8Mksx26pkajppumzbmwNvbR1JFMxPw3crZdYBk4Y2yvW36MUN7UY1ta",
  "key6": "5qWsEDWoAYDscWvrGxdgWWxcqH97ZMZaJ7vmAmuNKQ9he7KZ9ipD1UvqwmveRewLXQKWzDk83JgqHXPWnCzd9yks",
  "key7": "14qEfTLjMnhcNtPRCCV98y9CSUsZYSDFevD2BN4i1VxgCjVZfo64Ck8wL63foKL4SBLdsKo1tSZf4FsDsr6Vw5G",
  "key8": "4pei26AEpv47GGr7t8taYGCiZHcMHDtA5JMQo1K5PngekeaxiRxgZtyzzFJein8U71x62HEi8UDYuwH353cFErGe",
  "key9": "1ogobGphCVfWB24URKoYB29WcVPfQ6nweNjFSpwKgb1kAxCTxg3sjf1UBACxJv5iDrgbgo26xmTYvTWjxgY5SLr",
  "key10": "4MWyKgKfo9VeHPR2PYUmzy1tEdkEz9LcbTFBZkbsoDa6iYUVk9voPYvykKdqtEG5u4TcqUniuCWwNzRJ8LMzij6R",
  "key11": "3yXF5gWQb7iw5BW5s4R7ohxKrivYngxwiT3h9YWyD5b39YGNFyD3JHLm5FkWddvhYSJ1WizLWaG1RFDD1RZND7JZ",
  "key12": "2QHK86TKF6AbWLc19R4aRvTT94XvoRpSXP4LhqxozGefQczzmyJtS7edK9FnZx5zgMLxrJvy6Z2weLyh9mFAS6Xs",
  "key13": "4jbMx96a2Z2oCAa9YynW4TjtHiTVQGgNHrUFy7Gk7qANuSSQhAE6UER5ESpve9waRUoP2povGUQyrToS7idegjz6",
  "key14": "5MZ2psZ18PSZTyUryZSP8tNoWiyteBcPegrKx5WCEAL99pdcuwETrnKyPGtFsAo2c53318seMaoayrtkEgZaG1oQ",
  "key15": "5ju537wehBQfH1btyRPH9iStk6nhCVzWDFuaxp8LpzE33h3zguM43Z6Dm2fQwA1XVtPKRHZPKEUHpGcWDt2ddJyk",
  "key16": "2FUEJiKiMgND6icdXLKvhrwynwXExFTwZVBEgcvp2K1cZpn63bCMdZ8JcLYjx5TVXkjkPfYmxp7wCPtjx8D7QMPd",
  "key17": "vv5DqA8AajVz9pzZ9LRggEmXZPdT2eTM12RgCnj714W2QrLmJYCEiTZAP1R5rkqHF4xXGB86uYd3JMRJtMNyPQc",
  "key18": "2N5ELCUEjh13JeVD4qW6rsSzX5aia2t4CmyXvfzecbzfMJngLKszrSy6ctdmafyKsLTapVkqusFdkMajJ3XzVSmH",
  "key19": "f69sNmAwoAGrBLNQhRiuujwNXJgceod7dwPEEogYkJ8QSmWJ9JXV8kXzgGDTkbi6SEW7VrFkejeDymWvvby3jRU",
  "key20": "3BfMjCv3oaP6EWUHeN9Pu4Vk2v1QQRmkJ23ENqDz5MfgEJvELQCyBJjyrfDD3b3K9h9ujbPZiTmuAjFfTVPmkyP2",
  "key21": "2hbGff65jcPrQv1nCtGThqN8DA9vm1xGXUdfEL7mfDhb1gxtYcaYJycRek8EixBYQrJEpT4NHdrCcX8aWopDWQQi",
  "key22": "5vA1N9iHZMiJgtUgdD51PYMyi83ZMcJUqqsT9dd7dAWWkwXDxFzdAo5ZY5YqzaoTNXAKX6n7f2KRwtUMm7SdSmc9",
  "key23": "5mfaTJhaLZADE86NkTBrBAGXyjsrDPzFf18YZxNvGjgYYM3YxRtRojEPi3b55B2BZrWwxkikzqQgYYxffWGiZ1EJ",
  "key24": "3zini4kgk2KutEMnjF6hFZ3Z3zu89XiGtj5sX7yzeA9Q1thYVGdDnJhpFSHsGC8Pwyt2JRzm2upHxraiEqr6ZnWR",
  "key25": "4ib9bnB2We8UHGDmrH5kY3cHr8oHgkxTCinqTmXBzemzktZffyqJKAkMUxhzhexoVeEUHpjzjKrEfLTpePnaLaYG",
  "key26": "3RD1P5H1C3WFSjwYk9yaqSGNm7vfHCdKNdwM5BbTvY55Cd4JGct5sptDwHXWvrceBkoF7rsYupALCEh69ch7bcvV"
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
