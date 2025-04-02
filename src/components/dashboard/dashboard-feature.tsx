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
    "idksH78B9164UFFkfPCo1hMw45J8kjz6uCHzC6nUxCBe6bnhhKiGWe1Vj7JvUST7W3PeFcRF4gDZ3kYEDu9FfCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eVkfoKhuszJq96KYido3JoNcJSG6XRMsmoBMFzJUm7WqoNYQvbEgDmAipdfPGX345HiJJ8xzYy8Q6ZatwDMFLbJ",
  "key1": "DpknAyCsBcAxDoMS9TVQKR4kkRczZBsHcq4bNSZxee7QSNKpzRcDJSuu7EFKwQkdCZpEpjuVv5ruVtPHohVVwxp",
  "key2": "59tFgM43GR47uzGnLmCJS3BtntMV6nSodJDhTU797qxZfjzVTA9BjaeU5Z6JfjeGn79Pm8Ln1krdKuTGuqzddTiZ",
  "key3": "5ffHJCJpcueFjuTMBdRdea7r1e347WnLfkDWBzXGDrJWjo117uQ26EyfyeLJLhD2rTTGWtc6wsaHngZrDzDrH8qD",
  "key4": "3ZwUoJESks5XdY865MJgE3rY9vYT7STDekGWrndRJYibs5fWfN4BPrf91JdgAWZuotTg29eCCS8zo7T4WuJCWv1L",
  "key5": "4QtAijsdKGiU9kNsxLc3CXXoVJcD6RekYTizEp8XDDVnQwCRFLvpeVRxZ4unC1NZ2guBKNVKqKbkZzzS3VCveP1T",
  "key6": "48tLAeETuMXLtnXfyUDWgtQhLRSc1oUxfZZPW7exSS2QqT7NAFooYLxaxnJnqiH4VvjVYgmvYDVUjnX5a1PLfTNH",
  "key7": "4wA9w9RPqBuaoMVoZC686F7NsykyiVM1QQscoYn9y9b9snauvMLER5NGHA5rgwE8nF5t291gPGwXzSDXx2v6f1je",
  "key8": "3Fc2rdqsTNXiD397Dzij2DKJ9EYpoZWVUxFadW1efT5KHpkSYwFhk5JCa1TTUVJrPUrYLGKJjSBSV8acgriVmacb",
  "key9": "3kZeit8BpamVYBjjhAst91ALQB1vUK7v1p9TwXxoRmA1onQeLKijeMzY1YPnsiWuhQ4BCVwFbuYxC744cY84crH",
  "key10": "6MqnWqzBHuPUAJFCJ8Wuf1wQjKF5annAAA1RCZ3B9EewDPjudp3H9e6DHhcfF7H1mptC49EzAdn12izGwnVNRCA",
  "key11": "4B8NfRDQHx58F1SmXuXdsCq84iWxMQ48KERLAf8PZzJz9iqCZes1f2dzxxdFkuudVmVroxX5g2nZoRfzmKzxjKPt",
  "key12": "4hh6uZDWrV7Cj557NDVbdYiqMA3qqwjYRUCgJC1sm6xYJoirWzsZt5oxdAzjZDzLQZ7RWsFziQhshYhhhTYK4YKr",
  "key13": "2TT6prhSQgQTLTiMskkhFYL8gwNaToQzchxUTmNbNgQR3YcjagDAYaq3mwGkBAm63yQJApuFkD2fJDcchjp9KJH5",
  "key14": "WcqhLSojCTCP2iKQY1S1J7ra3DV4FiV6UxuPr3RkDvFPw5j6k7wYqPmoXL83yeUMUix2kaHQkAib5A6VhC7Gay6",
  "key15": "2SfiWm5fGJnqmcvb7ZfS5FDgwZHqj2gZpBzwA8fMue6g2cpMhtpFD1eizAShMECPmZuhuzUsKkRYoQ5xUC83c8F3",
  "key16": "2BYAQLPTzojKkvU56nVDDGcyAiLqLbHASkVq7wQRxXRFW6aTqAhEnpzAr8hKXpdULp4xLf19DdaSwgvAZ4y2r19b",
  "key17": "3uAzrpeyAVc5MckHNtwhv9mcWxaBMgwUSpf7K6r2gP1eaDGFrqRs5QUqeC323NctEsLU9x6uAKSi1agR2vzTXtyv",
  "key18": "5Rt9FenvjqvHrR325xU88LzsAQKFc8kfFLe5JFJftMi5YMhWYmLjCwpaYxEaW159tBskGTmqia7qrnP5XVzEkwW7",
  "key19": "3TtjxGGBt67jcceXDbjBnRL8zsCMrLzPFkZXudyGGTzj14wE5dTbPqRxhonznpvq4n6vbY2oyLMu8jHt8Cpp8c1p",
  "key20": "4BgWod6WUf3ZrLxKTw4ceowocfRxnMrB6qj94vu1ghakVLUT9sd6FPq4HPrYrWeWj3JC1dLNAop1PbPeTuS7NGQC",
  "key21": "2P61PJGJxm9CpkRxjuSEEhnmSQji9f1cU3HGkv3LCUzAmoyi1TuiYr2QArp599YeeaCZCcQNsrcwJ9LLE4iHyagy",
  "key22": "5qkYNiCZc4JWN8UZycWVmLLS4vzmNWmbL3xP384mnKe8sTADpyuhTtcNDv8ogJKe9yi6VEbycfz7H2uBeBpCaFTY",
  "key23": "3md5yaQxmGJ1g7nftcKs2296PapVfjtU7mFZorfbHRT79v4SUhUYC5DG2LgCmbBUZWbx1r4cEYeincuMv3XFrhV1",
  "key24": "2V7aqFMB1yrpx43XogDLZPjQGfKv7VVJZBxq6eg1fdfG98MDLjfFs2GmvpRNEDagyFDh6yX47WgjVMo1LGRDAGSJ",
  "key25": "66mpos7QtaoWi67igppKskKYyHMMAAX27kuABUEj6XKMV9syGiuHofoT3XbJmfkXQto5dMrQsgcPW8TVLFo6wmcq"
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
