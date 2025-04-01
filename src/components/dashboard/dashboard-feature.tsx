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
    "3r9TC4ZQWKG11m5iYLh23tTf9SnfWCnreSw39pULXPSrQT9e1ggGMRY1qrFQwrxTf5dBCjGXk6Uf1ia2gmDM72VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6fqoEe9ocoiutGmXt8o8hW7ceYM6e2UxYuvr3asAkg5XWVNR6KiW2ygGAMyFLLBi7JY48je8DuycJn6QAfjaeN",
  "key1": "5Zc93yk7A52PXjmWYEVgQGcapiXWLKKZyjC21UVyf9trMgSSHnCh4Q7wjftVYnyyowiXXHYjFJdL994byVtjyEez",
  "key2": "2bJPQfo6sdBcmraaK1vJkwFsU1qP72vDHphXe1zsXmrBnCr22zFwzb9dbfBswxVuPui477S2hjyu2jhnhbFjk1UH",
  "key3": "N4ftr74iv8y1JH1AbnvMDrwNgVXsjQ6MTrispN2ebEXsvYj1eoppC2PQ2sMFrSCKMzpDQ6NpCT9cXx5vuLSZdP7",
  "key4": "3D1vKPJRwSbNRfr43PSRoQVGyGQRb2L8tnkbcSWJpURvbqnvizaMR3niEY2pju2Ha3F7jgpibgoYjmpMA9C1DhsR",
  "key5": "62yH7CufeBcZwRs89xQyZ38j2bdjTvftaUdZHV5k94cwMyfqM9Z2uEqGGqUyP7hQBodxSrfARQS4jFn9xDPxt6UK",
  "key6": "3jh1M6DFN7C5povavfUcRB2QnW2eq6xn9CM4mBt7F9PkoGKz6AFaYaQNRMfKcMaW74vZi4v7aSjEKruMBhJNNYQd",
  "key7": "4gfJbbH9UyMnV9sCpQ36Dgj8uijd5SKZGdJSAtyTMMj48K1rDrjveLCqd5qijwinkqqgreutNudikCFHeZTV1itq",
  "key8": "5VZTYTST3AWBSG8UeWbpsk4ugzPhCB9qpQQNqjoUWYpjR9AqJeYHiiVhLJQFE4aXU9fS3N6D3P2fUA8KBf9chyBe",
  "key9": "PEmYWRYoNggRdJJj1ePAVTZ6Ww9yQQbM9aVhJtpSNZpYFQwwWiDvEnpef2Quzz4YZsGeC1jDgYGWG1ki5LEyFDX",
  "key10": "3ouLqiukBzjczfcbNNre7iDxrXBv1Bazys6MHSuCk7CByXJmLx9uSbNH9hrd6hurg9CbpFgypKgkiA6kBKFmLTo4",
  "key11": "SK7MrDanHj37kQD5anvwJwDqYopH1T4DsawjuoM9q1FpYXa6MkK69BChyCgyFTiK39BWoAMhFrWpVpk4qpeKPAN",
  "key12": "amB1EwdANPkTZyFMpYAUt6TMDW1QBGzyKwWDW2ZHqBYox5dSZm6n7szZDYrsWRws8XmB4oTRKsEE9o7jZYKEuZg",
  "key13": "4EN6NcGLw76cAajNxkMECqsGVDpMfAeoDVLsDcXGzu8FYSNZusTx3PjLMXwi6ibayuaNuhxbPVdi47jWDrA3YL81",
  "key14": "5nd2iL1zMogzsUi529XapYQB5Qo8VhmYhec19WyX2CD6ea4NaCxwyPKaHwN52gLYz2EswuZViqGw9QhBrNXpMKMH",
  "key15": "YpZShHT9vr1dufp246Gx1aXjC21AJupaeV82sYkQ7M8SthyormT5uxPnAdTNG58Y6XYf1ptRtq3mktDtArkuqpf",
  "key16": "Epdyuwb4Sw1d2XdAMpzzXLheSnxiyXtBLkhrsFnFY37k7SCAKv2i1P85Ejw2s6EcvcLAaTBmq29kbJwLKUaei1V",
  "key17": "5psZtLC9rHZ1nwXW5qdbXRPDTZ7auK1WWpa9yj6XSUiBBofujaNaKTyprQYcm727eWLUtg3KKDnHJYjKUJfc4Huc",
  "key18": "4NsPTm9CktswmrWofWyHLuPMBX8CigTNLpoAvpdxQJyho9JMGgFvFnyphDRcwhoLdjhemDAE6vEE7wyWyE1uA7YW",
  "key19": "3CAFQLEGcTi5WEu9gvmBQAG9ksu4sFznQ5Gyg46VQDhLTpfdbT26g6JQ24cEDMZEwxpm6Hm2isyHVpiEJttsrnT6",
  "key20": "caQA3oF9P7c6x4YKKH3F2Vw737pYY7wgx3JBeG2zohyJJgdnS5naMkxrgGjij6G23PWGHF7nmwLnqjAAsxhf5ya",
  "key21": "5jBURGJAN6hSjQnSMz8PenRbJEV4nJ24CbyuoebR9LVc1c2LpjTGBipbCQBNYYgV1eXNmbMFrQgaU9rBUsHnCbdR",
  "key22": "4b2LbHpf2416Kpt4TMpi6RxHfNQZ2ULQvwV6LXFuWN6tTLYjVW3sd74D3nNNuw8zBPxJ78ocLTiupy9Ycr2XPnMw",
  "key23": "6LTd31A3YSiEW9xQwfJVPwq2FEnHc17rnCH2gBpoahBx1gGm7tmZUTuDpM64BDSd3Em9uT25wygY714Dvo1nseG",
  "key24": "3Hwf8TD8JgCmX2gRmy53drHSyerCz4e1StuN2auc4deDk3eC2YpdP69j1249REnCG8W4qDSGxXSzyrETZF5G8N9",
  "key25": "5V46xPMzbiCgLSuhPJL4RibJNBVG3LyUXPk878CZ7B44a6iaDJf2nGwGABLsMUK4v4ikPhvqxHDezUf9JedmgroA",
  "key26": "tJqwsdueGbxDrU7tjLoXTRnDtgixppceep2YvWcFK3aBszJqVM26H9iVSANT659azBu2McmQwnAho3gN1H3NV2v",
  "key27": "3ngVUPaTorXVzrv5tFact8qLR4R4UtjV97KVAHBqxmoEdSZKbkNmmDuSZtz8og4pVWHziuPDYT9J2p43fjZ8b3Dd",
  "key28": "66wUKnxAzcj2xS71ohTCa5y59PimxgLjgPtBC6HobxsmssyhaqBfzv9AnfrmF7NUakp9HSAABPGM7f9LtKc4bjVu",
  "key29": "5mPyRNbtksPnz7Y1MyZs68s4BG9bFVHVh5vJ3E9fdMxeeQbtXmQeQkogKbQCq1eE1HztnktJwjUJnUbaaTHAoW21",
  "key30": "EDhZh3m6Uq8L4ShyYZdqZRb9wAfko1p3voajg8pAFz9kYEEo4t7UBBQqVMP2PxWvDXZButxdBnTweMDS5FFepWv",
  "key31": "S1AaPYgpTDwFLVDj5JVy2GETmXV7nZEUoavBBiFa37MNbeWNgxpfdRewzQiYugEXv1XTTMHox7fXs7p9pvGPfMD",
  "key32": "478uXL2ar7ADQz6JPbn9MNZFe62gQbvtqxNhhAhNG6YfkccEYVGuBcZgv9Gz6Vz2aSy1HH6j7y49qUjNWMh6nYwK",
  "key33": "4ggbREX5KqTDUXPJzv7c56gG86qx9bwp7P2ynBzJaqPifuQSzKJ3yLyQUnnA6WUyjURoSn14tdrKaX4wkB9SnEp5",
  "key34": "3zSYHG5eKfva2Yt2Y7iaK5AKBS6uUtwQfqfYoZWcXz7Vseawucxy45UJN8CM55UdvnTbCmr7X42kyGtvQzPwTzar",
  "key35": "4FsPEetrtM4AHMD14VwDLUCYiPNboTKYroq7gpbjMsKgCoWg56gLXenckb9QiKXbmacKnWP8tNYs2k4C55zF4bXb",
  "key36": "3X58SNrtS4a4pawK79M67AzMKc2ofcHLNrZMujUbA2R5KGjGg2SVSZZEejgeV11PuBd9yiGi9m1a3qhvCr4yPSCq",
  "key37": "2WJTuCiUxRw7WDKqjQqBsAA1iuZm22xdJvvkAAScVtQUZTsqEW19oZk4BtYHvnt5YBA7PkEUSxs6awMRRqSvW38k",
  "key38": "5DGdgdMVt3cLSQHXZdQqbhczhQQm36osacMKjYVaB14zPgNBFxxrSmjedEYTa3BhcFsoio66psubWieXBirQwC6m",
  "key39": "5bc9xyZqMg3X8dC5Yb5FsGkQvce9wutqeUrpcUpcaQSnRNEJx5fmasZsMqZT7Kg1dBP4pbrJVw26FoKRaYdsNKmV",
  "key40": "5YJVvRYCQL7FVVTdLYXuyxypnuDEApt8QRxkqL1qhbh6ajER3JNdnmxfKVKkLmH8Pz2HnAVwdxGZuPF8DhcZ95t9"
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
