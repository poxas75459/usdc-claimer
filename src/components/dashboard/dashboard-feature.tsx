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
    "5goQnuiufn4vDwvwgxStkCLwU299gkq1NUmV7xny8rBgd818cZrcSrzVDKtaJSknCqsrnJFY3Prtta3AtcoNr9Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8TkW8CBcACbVspr61ZPkZXnZtGPhdFD9mX8zo6WJ4FcHgvwXEsWZK7pWBpse5MnuxvCxw8heU2Qk7YzUspfiHV",
  "key1": "5ytc2e4Mb6FJBbq4xzeQhxPr57T3EnSA8FbDVND4R3qWZSZ6ja2mJnqYzdhEkkTgRnvQ8jK1vA4wyN1Amogqsy2f",
  "key2": "AjRkb4AQztXFM4wwhAQVEWc7XrqrR94RjEGhFjtrbDbney7K37rGEtadWLzYoDBqhBB1RZJEYLWKiS69hLCuaYA",
  "key3": "5NEdjfRzfon84RuuNpUwD7FB2LzycHo2rxRA5NysDUFibwE5ZNBNqQ3PX1GQfcn8Qtmw5sEahPDYzCgzmpr8k6gn",
  "key4": "5obxKctLFMeAomebAR8Zpii2npjtEz4yQvRTayDUzvPx2UBPMaVSDqp5pk4bibd5en4eLV58tHyUfuwfVePBspzF",
  "key5": "RZ5sqiMKj1VvJsPLLWHfzvNNora1CMUwytaMiZHPzLpsf9ovQfsZvHCZahUk8ZALJQA5Fds9DR38EtTTgMSiDxx",
  "key6": "3QohSXY2L7WW3hfb9jU9yahuyrC9NWAktuy8VxaBbYsXtMS8xHdKeVMARVyBdgKSzftZ6MSixes1NP6sjJp1HKxq",
  "key7": "4iFXYe9wJ68FLYwdXbRnjTePR23iCHe362crYgzbgmB1BC3U4YpohYWaZYjAb1pimKQGhq1nk3Dg7Ei9ifFXbgij",
  "key8": "ssf2UyxVgxY6XPx7t51bspc3w2P1h3RzK7hNdf6WKwcNy8yCuoppaCHSRCecY6Bd3jMmy84ZAEHJ4CdZEJHPnjE",
  "key9": "3RWZKTnGHmuBsuprrcCPmPDoQtuxMvCs28ZUDd5sbLckeEqj3opbhXBwDWF97iaaTANSCtHfcSh9pgnhezVctee3",
  "key10": "5fDPe9Ej95xFDZNcd4uTd9w1DxhG8z7mdU9HP5GWvEQXnd1AVUzxaU7u8L1e6x2NLcPXorqJq1gNdiTVRn2QkqK9",
  "key11": "3RKo8C2J1jTK54ZFYtcxJYiuof7V6C7k24KwEbhyNKe6Wy75YcJcK3VfaZPebTnmZr4BgtSUjhhdURoRuxyPbhhJ",
  "key12": "5286pZLZTtEkkvtQy2jXdd24sTKd7zZgBm4x3pk2oSLZNaRYA1mqXZsyDQjy1Su7eM78zsV8zyVmQ1hXQtu33k4s",
  "key13": "281WVo48EGxpwthehnvX6iKuwfRrgoZiLPMAf5HogrzoUewLTSWG6NiScybcEb2o9rPHqBuQJBvjaAbhQD3KHq7W",
  "key14": "PJZp28firwvZq6jZn2RHVuUEk57duw6kbcZCMMnmfW184EiJPVzcQDGm7XaQjksgGYBJwVsibLihLP3vyM8fixx",
  "key15": "2pzcx4992TEPCrdBqsN7W5WsN8331LJLcZaGjiCtrjz4jMwqLrF4wTvb6B3WusDmhbc6z8AJg33RS17yhJUVMzwU",
  "key16": "7HZMYsNmsZ1baQM1ZMvPDLL3yp8FBWaHR8itS8RsXGuzQbpd1kJHVgDFrS1BFGLGL56FAkDS1A7wBxs2oBeQnPe",
  "key17": "7nPV7Cf8Kf6N3Q1s14H542XXYDs2m8d94pWodSw11kVHA1o4evmehZvazDUHe95wFe55ZWhk7gq5M6yyyUWTxkj",
  "key18": "5hSqiN4GTAu9hgWRzorZjZGt3iTXbUo7AxiKvD6a2A5meZQprm6YdfvrmKa7xz6RozZmCsYChbGnfgSekYSNiVDB",
  "key19": "49g8JyzUqzzq5TCK7DsFc54GccoJ3wTRAaJJCPUeXwuKkdC6XS8Fe8vLmmt528AoxrS1aZwGTaGLapBK9qRih2Fi",
  "key20": "5yCNaAr4KPw18Qetyhre7eVtizAbKAqpKbZGzmaWEdP1brmk5LY8WhWmyPnDtsENw1H1jJDF4qpuYAX7JDqsSKBf",
  "key21": "5habZmP84Fy8rt92ZxWMqtYfoBCX4sUKihGV2f2B6iWnq6mw86h73MS1Rpzb41cdXKt5GEvX5Pv7bKjvRJH3P3Au",
  "key22": "vsEkRD9rbwUM8FTyfie7eoXqfh9RrdvBmVmtZ2MGeBBvCfMRbqnFaGgCDANL7noaoueUy71LcNFXngg6ozxChm4",
  "key23": "34a6uGDHFWDyfWTB7y9LbN63tAMuVfjfTb5WXJZXRGk2bS3cHUTHq6GGYVUFi3qruahUu1rxRHQXizTHxaeLGWAH",
  "key24": "3ZJzKuQJKHBmMQt2TU8eWyvVjugF23xkTG6i2oZUUsgwL2HsPSzQvkg88k2cWkTSVpLsbLcemscPXfkmhwy1SeGF",
  "key25": "4KCcGS9av36itNHHbvvp8gPkbgMzB8wHczW5dKPiYMBKyZBj1A2GK9Di8vqvFNuGppq6wpT5X4Mfegg9YojNiV6v",
  "key26": "qAtytLQXHkKdhZQPX8zH8KTD8nV1E5pabGsYy8TU9cbvM5afX6LZzYmjJ2tPNf3NLUbGMYBvyUSoKEPhiPS8utT",
  "key27": "4dxVf9WYXZPHeuvzfH5DYwCZHpoXquokvrpc4XHpCZf9LMEWhvqy1LTyuE1JbwpmbKgoEHr9tUz8SEuxooKsripx",
  "key28": "4rSAGH3UESPZ6EbpvEqhdPfN9hjm2vP4yXHPLQCL6g7mAP9d6tDEMDVPmKfKBpEpezU6qwxYqNNgfgRiPUjYdtFi",
  "key29": "4cQThVFDpnayRUSVcjFfU2VWDxQdP2MNeawvb9GqN7dJNBzKqoYpNwyzAdNzQB78sD1sokRH56uyhV1d9DekxxLD",
  "key30": "513k84oCYeXCnybtvsCQQoKxHPZmLFiMa9UrjqMv3zsboMj1LbxHzEqFxsBwnjxgjF6PTzx3BpYD5sychYAkD5Sd",
  "key31": "juVfARN1q9iSkvtmMrFz5FKbrA3hxHVdRbJdWNoEauqAp7WbZmXCmtBT1ETAPDGLu8pDGs48srVnvxQ6UYEWVTK",
  "key32": "Jy7rd7mD95yPKswjvMAfFvYHB1spfMgR2aUeV4kg2Kgypq4wkH5W6nx4b9k6f5AprCThSDzgVCfT2zRsfyMtQhs"
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
