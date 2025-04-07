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
    "5LyzYr5hYhbpn1Q6ee42Ar6eQ2bsuNR5kTmFjvb6TWfJFc4ym8BBePBTfabf5oQcwA9HcpzVQ6Tg6bWRgBYA9pi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7gwwu9uEyweV2r7XNz9vrofZLBBAn58N4p1p7iQwP2HY4ATQtvEA6u4pzwCd2sWJtxGkwwPKWKAVWaiMNMcVTu",
  "key1": "3uhkuHtakfDFoWeF2za47NdhdB3DB6Ao24yKjydJpsVBNL7jYbtxeXRXD1KhaXZiqL2NS77MJRaMtY6MFL2eahHi",
  "key2": "5XkyZZ3EeS7T1a5maPynAVnobW9N5uDHQCHsQUVzo5jyV3hoNtdSZ9rnjehuH75ANzkPcNWDDDUoT85ziRhztJA9",
  "key3": "mGgspr9EGMQL1dshK8w81Hv8eGerXb5Wp3RavNWtyTvi4YYJTijjGAqaBmK41YLeLLxoG8dGCpJK2JBhznfXmbM",
  "key4": "344hP45K2DzxcnXwrLVgwtB7p6fituNu3GkAdvjga1hM1HccTLn3XHtUSQBawYPAZFLiySoNydfiQcbfa9jBSoac",
  "key5": "5ExecJfnQJaowSgQkXVbhuKZMKDMtST9iGccjfPZgnkLdQCg545TvsrYqmdfKDTjP1sXxXZgUxca5i7aZCpJJ2E8",
  "key6": "5bX54gmW9ia4WSb9fxu6qoeWUt8s2GuDNSb5HbK3wHhJ4MfKWBadm44VoPxjQZ2Z5GecQMxLjxWgHrw5rUSbg3u",
  "key7": "2QPJM6BX5y3hrJx7YALA53WnXa2oWnhx7e7YYtj5CNkRPETbVmTknJztmB5QVnHn47F1oceDLJakh2XdKRtub2vc",
  "key8": "5Z11Ecg2T9tAQy6mw7t6DUr8NCrqRDBCJb7eAU2LXqjLG37HSCzDT13guz5YJqjNhLJ4jCn3ULVFotqBUQwLnJog",
  "key9": "5X7grpejWj2D6mSGkAjuHnj6vqbaCiNkaCNxj8Uv1jqHyDvvYCiJQ1Gh6f8iRqAqL6mkN9YtNCuczpcRV8UUpWJ7",
  "key10": "x89T9SfMy1goYFwUw1x6Mq9omACy6dx6Zeg1U73brzFqeZip9uMDbmGduCd3nVD2kC8ewnQaNhTdmzyueMXFTDA",
  "key11": "3ucvhhUtqZQ3cX98m11AHN7Z9UCRRZLZs8X8LQC19LuY5dVoHNw7qSfieHszsFALRycmQQhYdisc6LsfZj7oWpcP",
  "key12": "3qwSmroHk7yS1pwMXZ2486u48VatdRmjMD4Lcbv8ZmuxQFQJXpT9xzBb4WuUdg6aVk3sEompVK92voBt1toDtF4H",
  "key13": "4JCDGB1MyoXQggndhc6pNQNGkMvg1PrxDT7wTDG5Ddkjw2TogADTEshB4CTQ2iHnMmYd2bhmUhiGxruChSRUaxUC",
  "key14": "5moWZUXgW5ceuV5qzvGEh2NLb6G2MEwm5DuCWY7CC9n4Cce1HrU7JwZitrcTwPSu3tdViaBxPru8X9jcr17xe5V2",
  "key15": "2KfBA5atQvD4QyDiG8o2nzNyME6esGEVpiwjEsZkJ9xFJ13R5GdM2gLtWZS8JceMyLG9twyPHiyFBYC1ZfMLNqqn",
  "key16": "4DHbehq5K5qFfQp1u8kn9bGzdFDRBxiUj2KTDKv1F5A9B5XbgJGoLwhjBh7w2jwB8HSSSzjDgqQjDMQY1d6u32uP",
  "key17": "84nSmvuFBycLU288uhz881wcMr6xUNX1RMgv9smAsxdSBfMR7GewJKANSUgiThWUUQ1yzQFTQqVh5nUu5e3yFVi",
  "key18": "5ggPDXC2S92TeohnS2QFwuGDhEJR4d4wFghWH9Wb52sjXdPZ68Te7cxrnzJBf2RoXj4DyQp2mYoyrYPpmxwxzDAn",
  "key19": "4mGUnxVQ7pPAkQiZqfo9oY6uoVKX4kC16Fz5YCqSxu4UsrXtZed6SAeZcNvXsWTBoLKuoDkPanfGV7GVGUaJVrg3",
  "key20": "4Gy3kNX9hfNPoqv2iYDk8yptQep1bDWYRi3po3tJCCZ1T9fVbLck45SvsmijaosAfLgJSPdbPT5P4KbTgfvdUY3r",
  "key21": "DEq3pBYJF98RzkjACdQ5ouiU9GyRL1smewA4QkVfpknzitdjw6kto2umnos6CNFKrpZhuTJJrcxBpoXrzuDC9LX",
  "key22": "3nSGkGMuketr3BRxGTtSNy9JHSNpRc1he86wB5E8QeDNVj66BKxPMyQvnAu6FVJc1YNgg7nV5LDirEkd2PH6bC2u",
  "key23": "5NCZ43dWU1SBg3fHhfBH62UBSjWjddgihBCL591JsDFaAojZ6EZ4BwVnBHC3dYp7UqpL4ETfj43eaP9tKAzXoYrP",
  "key24": "3i5CpErB8x7qjEbmpUeyRwBQ9erVvxZZZcLhu8vWCwjXR8ypJsxffDdW9mQgUmFXkNiHGFVgvup54zgYeKrzJEPB",
  "key25": "3p2nUsw6rfeDQS7C6RZUfWwABDYGzfcZ4ubnM7XTCrd3oqEqepeJg6FsDbFU9uCp7Lq8LFoc8SiwJh4FBjFE1UYA",
  "key26": "4kfTbtip7Wct194wpPju4HhoVhyoTHoD2uaYAevcH1ePiW3cxibUvnpPgkvZNckdCw66wyt6yjR3dQ9cZqHzDhR9",
  "key27": "21xJTjYwNC4ic8VFrVMfWAPujDwh429jE1XkmpgRJGRMPVgydZ5TByiasAU5u8nM7cxzr9TptpWh6eyyBEJnaQTX",
  "key28": "5NeEZ8b9fNvripNRsrNgb1gKTVVeYBm25QycUysEjS48jqNsKpKtLZLBnyphh7JExBvcZNYfVhtyAvigYQj7aj2S",
  "key29": "3JARijJn7ZnbR6ZeAXDwYTqN2sgGqEXnUHjda9TQKpUM9Fmv4JSXMhFRpeWAUVB9k5fvBPLf3tA5juhwmCyNXRUM",
  "key30": "JGWHmCtda46mfM88N2ehHiZb4RgaoCguSrmrQAD1nGySAtaayBU39hnrX6NmLkptAdgE8eZtdbsfb8m1CuWR3Qu",
  "key31": "yo2mB1H2SPPWQz5of1rhrgvaEwESUBSnJdvY1R9WMsXVhDyTK7g4aDqB38KDLJSyZv5szeoCDVa5g732p5yTetc"
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
