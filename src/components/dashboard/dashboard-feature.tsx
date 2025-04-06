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
    "28ZuEhoj2UseguDDnGkRNrUBCzXDjEYrBJmCgY6xxepNaLbfZDJppjRxJLaNNiv49Dq2yDkpJgyvUrAW1s21twSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STQaEwWqkpan9C1PQ7aF58we16NZXCpRRh9m5FT1BrWLeATB5DCfmY5wWN71aQX6c1dAnUcbNes6LSyVFyhV9Fj",
  "key1": "LRAWfAirxchPRALt57gBnJsP97QDRvEDtph3o9KdhGGw1wcmxaWokKbzTnCTd4S9gdFheb8m5ci8QSkUMduSepq",
  "key2": "5BZosykpzjNsmBwdzHsrCAd17m2rgRKFcAtX62DKYTUACDXauRVprWpE2aTiSVtfRsErTdB2P86e8E21r2Xt1nVa",
  "key3": "4HjmZLHFKHaCb6utfXMw7QXoVgBpX9KxsZbg1NTvFfhJKUkMREnJURrTu8cUy4zc23RTC7WSf3db6HEfQtY9vWtN",
  "key4": "5GM5myzAgG5CKHKjN56tVKZp7bjDgAj6hSaaSBUpZJEyfPghwCEKbSCrvVrAPd7SrfwZ82DAv1qaJ2dWSrfkKMdR",
  "key5": "UZLoNwViiU52vJL4kc1bUNMs7jtTvHYccYS9UP3oVdRuJ8fBtedRjKX9gvoq66weXTnCtUixjdtgKME5q439DDs",
  "key6": "Pe1GwVWKoLH5pidYAYAHhBRebRZHdHm7LZWsFBsffnS2tQqFSQHUPDnoSRFU43dhpDkjUjj2fk93zoZF2YtBZFt",
  "key7": "B1eTAikf2GCFzEjxeo3GnNKf98aGduMgaogmMKku8ReFvcbwfEuoZAr9vcd5moUvz76YYn8hEbca3yLKLtp3vPD",
  "key8": "5tkyNofYef6UuNrPEfJn3dj3eedvhvd8T9rfwyh7TUpgaiLZKqv5C1VFihhBzUWxS1DaKzYDGYsaZaXPN6VFmps7",
  "key9": "2vheSukHyL2kC6YsH9ZFH1XNMjwhgTGKMYJFiN7UUoirb8HGh3WtixmsVWyvzTGdy9ftNRxgTi5d7NSMDmR929Xh",
  "key10": "U5Zm3d5JpZUtHcAvVci1nbxKRxxs34jpXGaWH5hUsMbtDRm4shWqMZ8Zz7S6dsQ3EbMCmKEVCi6r8rwHnoV2KCB",
  "key11": "M2XDritav6nWhhUW94E3o9xKv1ggVg7qxbjzcWrKSBR9wgX6x4M8xkrdeFXLE4qhTqo44S6MwFfkNDsRUKGwZn3",
  "key12": "2ncBdNxbBB52UmTHmr5iubVFLmyHnuzv33gwmMbESE9dPfYLKDV8JXWs411xAsHqSsrTJR2LV8Kv4TcNwNXXnYzN",
  "key13": "5Zx3AxqXWTXjDB3n2NUEcPnAScNM1bK6H9Wfsdkn5i5msu3kU9jWrwUR2KVvzcwqPwCTPsHrj33EE2LzMtzaVdSC",
  "key14": "3abZ13mBBNnHhdTmG4sJbdJBaRpvTioVddaZGvKB1yLqkmSXGmnjigZGCybB9MxxV9Re8qLWLN9utgAfTvB8mNSP",
  "key15": "65M3hYRyhjq1W2Vohm9yr8ttcC1cG5GRnYnXP6P6T9vmqLBtohBND8LgbBAjj9cmiMb936Q3XXr1xjXY4itYyvJf",
  "key16": "TmR5SGTKuMjrGixWJoZc8G2tqJrkgxKnAee44ktAKpFUT6R5y66nBDBFVczjuwRTDb9Ncn5jXkw5BndV4WoJarf",
  "key17": "3x7HKhC1v91WtbcWXVQWKvN8MGXNAWTnsjb9v9RPWT1dq1nu2btBvQovCm7cZ1V85XW2MwdLEF8TxKnJWf56oToY",
  "key18": "63QxPEzt1rfogtnG8nhocrHPPsrpVxpvitUBneRF9quF4NGGaHxCJRYie7FPHY2CfHZYQyKoKofpwZPg8CXrzzyv",
  "key19": "2q3ttHm67TjxEDKToVzxCwkZsEiSfgX3nNQx4t4jNgLP6W2Bw8poaHUXRu3aGfWzRWoipB7emufKhY1Hicq4iguV",
  "key20": "5JwgeFxc2KSLzeYQhkL6umBHfJvEwbVv8k7zyYUcgGwTi5fnWFouZ5HMdeM3CGg5CVCcmUNLwCsZAQEyXfK39bgo",
  "key21": "4D5age2kys3dGJYudFoSwoWRiRuMGihzB8dGv9XaaEg5zNaSrQaKNygkCz7Unh3MTF89BYTGvUQuSBPWvpf8xvGz",
  "key22": "392uiNyHR89beAC5RZtdNFoFxLdvPUEbEnEeDLuDQNeSsus4qN96QdhzDrjEzgYwdU5SdMfs5SfHdZwtJ9i18rSi",
  "key23": "3ARYqR9AE83rcb9Bf4mmp1gYoPcayyDWWEyVwd7A2Z4PESFWQzj1UhRq62msgD2mXX2a1vTAHxwheCjitsA4H1Wx",
  "key24": "pY3DH869mTTfLUwVzTdDtSXJZQLyKu7EGHpm2MMz6pXvSEeKViUtyNbjRss12LscrHufTTdDSxdYV3H9igyQHD6",
  "key25": "5J5RpEVnpHte6c8EdCQ8qJ6NUu3YJ4jDRuAfb3UHbUTRjwk2jdTT6KGbpUKhoiFvppgxcyDzzDogtPGmxMHG26LK",
  "key26": "2xTzk2Fgo6m4FF8XMv8wR5CNzgGCqcGKzhDNNo82WQ4JNam5waRYeWB4cuphTf58sMcL7RKQnbEaFQBMZERbVhXt",
  "key27": "t4tSnWN4d2xHTFuG6TSmjkJUopKp3FFgT1WM14GCxCakUzHVF3AfqLYikDWLyhBZd2XQvZ7c3QT4g9BWQwesuFQ",
  "key28": "yH96s56WAVCJzPQCU88itGN2FxGxrvXqCdvqYayvKetu82Ci71HXhxaeTw77b6fgT9RLkaiHdSKHTz36HxgKixx",
  "key29": "3GRMrZgm5CZhUSNTnTrcebDwAP2P8YM3JwkSHwtksRryGzqpiHUCp1vrX64jk2XAZBxWH1dkg8v1enu2Pt3Ro65i",
  "key30": "2pTbmXtLSQQv5eWo56frHPnz8h1o32GxZiBfZFByS7Wv6eSKSFS5EMNm8Vt7FV9vBVVSqBG9sX1XwJUFT5yYPNu6",
  "key31": "vMw4cGkhmbyFgHuSUY9Ax6HRpYQ4qowF9CpFVDu9fsYpzG3KmzBd5G8b2ah4qU2CQP9YArJNe5GZJCdbqwiFMxd",
  "key32": "5yveQ2j1g48UjHNwiwQiCqgQqXnSBYCZ7gWpePViGLSBMPABt6agbGmtsSnqz7wa6FwGWyMn8CqdgQ6RUPkCzjLu",
  "key33": "3c4HQafibABafaiYjxXhHJdZWJztNEGi2f4dtMJC4AgBZJNqcpPSJQ1N6yQp3JWiZBnGM45LDubQmEsQjKPKFNSM"
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
