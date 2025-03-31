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
    "3t2TwUy7QQ4UDLE2WwdH5yNmgSev9DsdVaJcSfpJdJGGb8ZkhaUXvRN1JEsSB6YbhFrBmgf7x38dCJn55g9KzuRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqEkmpj3pLSb2Ezp5i2fgAMCJQJ1kavzQqWAnFbq6beDFbopSYzEUpX2c4QCt3utmJCfb6B4fhY4mAxZTKc7SwJ",
  "key1": "4wwhmXrNmKqfgdMF8GMT8h3fPRUMw4cwpnN5pSJ766VUdjcs71ym31KfEPsvGUXNWgZBx8WoxHR1kh112AZQPWLL",
  "key2": "Bc38XrNMQ2ym1NpNTY1kgTkG7S9hBkWHkWjNd231fKmcRrzthkur41NvoRkpUyAoXgGBYf76jSrQiMZQjTNC178",
  "key3": "2HM6kpBEx1EuonW8TcPxDKGHuiSnQDTZYDYTXBLg9361qrp2DLu9V9wpZhxtSharnb3axP7sa6BMajzH1NL62xwD",
  "key4": "SCWGnphxrfY1tjLFjvG25xN45P1PN6miP92JmuytHhJWeX9s93s9LzaEHT5874mKhq1D2nNB1hRzcRJGKqx75j1",
  "key5": "359KuFCabo1E7Fs2Zn2pnwV1rKDBeHYTWw4Kw77DfG96Am1KyR7muXkzxcVPHY4B53hE8z9XpX7yr4xaVUQRdQYq",
  "key6": "4GvbFSTYyuK4Y4oCR7iuLqqzKYfU95WRtUmt5RN8jEo2kJpZLbgZpyQhUVLqCP9284KjDrZx9RFcgKewJB2HyZWU",
  "key7": "2eXMm8x4ziFx6YPVDAd5R8vGW558C6k9b9n3pyop8aUdzSH2NQMKYtz49GAytgBNBmXGFkkMr2wkmq9ghzx4YmtX",
  "key8": "3PLiDgYp8H8SRB42Upiqhe74cnkmjrEqZKtkPwtnEiDq4DdmxuNVj2xrfwiEwfJ87HYV5Z9i4zx33n2RwmMvrGds",
  "key9": "5P4eaPrMt63mXwjDiYmrXNM2nnKna75keKHdKyz7ut7u7pCzsBN66saoqY1FhWTLdgzLuXK4pyJBaRBE6VELDiQc",
  "key10": "2Zg9K4PZh4P1bjd3ksQRC2nduTjuq9QGk1vZUsX4YS3BdeVEducLi9jNpYyNGXV8VrHjpEhJ2QUpTGsDrXTdmJpF",
  "key11": "3VXVfFf5jR9PEUBueCe2Qee6jstUL65PA1KetKsighWxr2V7hPVYiJFfbXvfDU9snYUMtEYEDLRVzSZkrjBTX8cS",
  "key12": "2qwxGvMTMBbRXeKeBVdum1zgJMETS8keFDFbfbfuuYyEKLVsizpTFB9doivyM4vfo2nfi5qvNnFcUXndEsGEv2q8",
  "key13": "3PXJS1zH4qSVi5YPWAT2u4bTPPzPHXJ7UT9zb5mfc5wShBagiWoGEw68mQicGkXbhjbeYghabKLT6EKbhnrkcDXE",
  "key14": "32QjrQuXFL4hVKTijwPYHzBU41rSfJycvgecrR79vxWsVvvXPS3toKj9eD69aoh5Zx4G514XdSydoi1cL1naHHGK",
  "key15": "4mravgWfWyyLD7JVJCKmFiXmL4Uqoc1eS8S93g3EkVcdLTe6iRVHyED4jYc7bP2GbLjXBrgsvVSmrLBQEsPAgoPt",
  "key16": "53cC93MNKftYi6ZDqsopF5aiXXYpHe3m2MTxG7QMM3cgDU8FkAte5bSHtajre61arRWB49u6QMLFZPysC8CVHyUU",
  "key17": "3Yhtb6T8VDsqPKWcEfZaZkuvmMUsJR1FEL2RwDGxYMjPKtLSQDELfT8NqDFBAXJeFvnhn3LforJHurVB1moAqBis",
  "key18": "2eeYdcsQPgH4GBTMJUp18rqkrxebqtkVpMyV8Ut7shqju4H7eTUWLdSziPUqDdjjvUu14x8Mb1XS45mFRGaRUNap",
  "key19": "3Za3feMuoPWjQa9eNx6zsNfHQDc2CjpcZtEPJTgFXRtfYE9bgbhZdCzTXQsxJqi81KcSBiDBnG5kYFZP6Z5nMXaA",
  "key20": "3cfFzsMSFx3EhNdxLe9qmTD18Ns3Kqwq5tAiXMXG641z2PXitGWpk3RvARfWkaenGpxAy6Y4Z7ydF2kmQ87UorBK",
  "key21": "29t6W5gpFypcxbvQSR2somHtRvxxBytvDmEZJaLdonYGNb1c9NA7Hw5tnkzeZGYToF6YKjZSppf92kkb8shtd7iz",
  "key22": "aASawk4qceqHK6T3QFL9YbCMuPZw3cSyW42rrSfk52UjXd5NXqW7dENeBvUzRcmgoPrByYNMoJqdArHu18VNZVb",
  "key23": "MNoboMp7baZ8DvDNGMAUnL66SRBwT2dUJJknGMpjPV65y5TcdLZboX6J98LGb4ZpTr9NZaYxT152TBJqbrApjqF",
  "key24": "XuLxDhxx5m9xEqRp2T12MDka23vP5SS4AQE5hLk6raWKeSrTmhok9KzuM9WXsgiraYuHtUAuVwXcFbbHhTSB2Y3",
  "key25": "fSrwnnZP9xpMJjoTCJkZKYemhDtteDFgsy2uMnrMYHBPwVhjrGMEbY1UUxev6EzqBR6KPmddcMBW1r3AcfFJDD2",
  "key26": "4diHT1K2LGERatCDp5nHfKe7NNYaPSdt8Ag24dgtmm8mqWMxkHCY49PNjXBzydQcRUCyKZu2nvpSsvqMLzUtstBe",
  "key27": "5q3qdJY72yhRj49yxVTQerfQkDbmevenx42oNXfTqkkWWWcWLoVi4qZ7QMFZ9MayVaCKWmzaqoAPywBVnJBu6kzA",
  "key28": "3xnYEkGvYhNd7DL1JWKzm6nfZxSirJaR2j4qL4R8PbWFioEFjbNHtyobXqSJSyLj8yyRPReZQ7YxXLtwxPi3QeEW",
  "key29": "5qbSx2FWSvLb4Morajf2xzzjUyXJHJybNJSyxBUit566hdrGeN5gfr6KwTTA4bJQeZ1R81V5ThR2uwu1Bn8JqF1u",
  "key30": "3orozgwirhQEY1M6SXDfvd33EM4bVzhD8ne2k72qx5LvYmATQupbRqLeUjejFGprxL5FEdGt1e4Ny4xybzf1mHuK",
  "key31": "CtVPrFfKSYq1aAGeF4h2JXbKpy6dQQq8QMNwJMw1mmGevCxcuxhPQYfMXx19YTS2SwZAtRkv4TBX2T12H9w5dne"
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
