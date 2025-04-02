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
    "6woqeMpxosBQDKNtdLHMA2hL1YCGJBHhjZn1h1hupbzvCfyo6hsriZ3s3ZWskvfAUJ8ErQTMzef8X1aa4JnZ5nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311x4SuviYtt8h5ES8KhXaqQSVUx3JUeAvH9u9cGGuRn8PMSNJbTei6cxqr5akpRHqBvgdcYQmyej7Ep6t9EteaY",
  "key1": "5sArfhKk7UqXN6y1ea3pXuFZAkKFAtVL1i23PxioDunsYfJCVsRhgoEFJvix3qAPDeeYwCFFnJrYwAdZMnGwx4b8",
  "key2": "4csxyQgmiaBayyhUJo2Jgrp7sTCmEvYFwMukxbv8yzWktJKtPtF43ZBDSA28dnLAJhUXkQeDwQmi3NFTBFvN7sPX",
  "key3": "2iSoYYXoyBZdx3sRyrQvEMaYFbdej96qgkVbakby7aqosont2hPDTQjnoBHzQaCzeQyX3WgRRUTxN3A4wydKMHp1",
  "key4": "4KnKvJTyEbN9fPj4HdePajVrCWbkv3ySePs6bQ4TgyGTGshecFVHFNk4W3VLvpTrj5tCEwAp5oU7pj2Mrk4FkUnw",
  "key5": "483GjXwKoUfvVTj2VPqac1JLa8gS88NL8WW1mbyHfcRqSvQ7TtCwTLPcEL6PfvLv4pd8fRUx28PsTkfrHPj72GY2",
  "key6": "4SQ78EZ2k2hvPzkSNL224t3RBsZ5u6mUXBgRNuPinW9Ycx3gAbjK7mZiaU3fhC7HWztimExtNJibZ4DsFAEaxXNQ",
  "key7": "5UjWRLhpGtXzePmCbySTBPkxBmzvQZMoewhcHEX8EJcv8tFGieoKA1XY5onE1ZXSi8uMF768AU9Q66MjVxdnE9Um",
  "key8": "5MfJc4zmQVHvT7CPxYk4EZMd2N8t3VsJ1uncDcmVMBCz8Kdgm75NvPzcVJD1qnrtk9HkzsdcHpRMyjNHLH3kYrx3",
  "key9": "2HVRiT1UpeQSTGNvhv21AEiAsQWBi6mLbkpzq5TaUum3rFdyvSJbWb9miHzkkD4AVdGeRwWWzM1epsTeDJ3gtzwF",
  "key10": "5aWMt1GDvet9osebMdF4tsPD29qLmG7e9pRforP9VzCPt1M6txY8Uamp4AQVQzcJvTzmuDgpzQDMQg8YSYK6Rdra",
  "key11": "3u76UQXxhZKbYSaraTpRaiv2jhE2Vi3v4BWZ1GX8BDzq4YCJnDhacRjQJi2ZvmHbYUXukEgznaHLAa7qto2bwDde",
  "key12": "3WzPSDNH1uZqYyCJsXuEUKJXukJ1TuEoe3EAqikZWTiYzotv735FKpKNtHLTK9HrRCBooUDkqWiWVKizAW5TcMUV",
  "key13": "3Lbn2MA8DFhHZerE7Y1ooPUqhCVn6QqB5AXwquWZBiZax9AzSjoqAuRcQ7zf2Zn5h1yE1WzMV1Cq3uuSs2QyZrG6",
  "key14": "GYhAhvaeGnjGLdZSyNuVBEF6ctTzneaQT32NQrNcPJhcd9tzx1k5vSxah5Ywx6fZN3UyppKqkxLe5DMxUfa6KPn",
  "key15": "23rTFTtmaAnba5Uvyzy5DGayJEgxvwFz78CSF5Mrnniz7kfJNdpdUJyTq8RAXNTG2hHgWj4WeJMBhcx6wuDFEku2",
  "key16": "49p1BF9Qy2kDnVefu3BuVaEfeBJuzHH1FPc4s97A8U639vDwhrbjoAjRnHyYksYHZUc5vNSxWBUizxRQUECUbkka",
  "key17": "4D1BdQBBqyXfS2HKW7cHsT21sS589qBSaYThh8DXCfkrj92uP8oQ3APWg1bo47zeGNnugC3S6rU61xcSkdErYPcP",
  "key18": "5oHJxzWZSY3V4anG8pvBywvmDL9YwhNzKZJisVrwoUjc7JYc31cUEFaifEWmxMPqvJQGadqxpUSS9Ekt3Li3JKey",
  "key19": "33NstxTikTHZsGtJReUadanUSp3QgpPpwaDZkNS3sWAN8WKB6kFr4XskGSGddkEaYvhX4fHRmpbcCFpZQPZ8XpNM",
  "key20": "2MRmfKpZ2dtnZVUwcTMVcuG8jo1dt5wFmCdhrPb9w6ScyZ9qmvEV8MCs1RqcxXGtPVFxSivKPcpbScrY2A9dGxnd",
  "key21": "35qS15xDJLM6fsaWijARTun7SqoW12172ibqq4CzNTDBNi7wEjA3mVzTW3v8thXx7wePvWfgh1ENzyd9EVXJTuLv",
  "key22": "44iSbiaAzNMFRJAYJbT9n73JsQrjqxqDuQA61zz2jF4UmSggMcHCd2exmud9B1nqcppcbeXNpZqoJVfqrjo9UKT",
  "key23": "4jq9e4i3jjNA3PPWxbkBCs2onrg7MRJw7dc9xKbZygvLMnG2porztCtHF453Qz8jPqDPKhu2eeyjFLmnnsaCndSh",
  "key24": "5rLrfwh1bPYc23w2qSdPVRQTU7ZMHvqxeQCiwgaXS95AxHxCVCC9HhHEy7ScSkLm7ah8PrRXpiAf6YetfySndVaJ",
  "key25": "2GmT41oECvaU8JKYYdWEW9g8WDou5zS9YoNcnaw3QNjSuat9HZ3Bd8vL4He1UDMZT8hEF6LpeTKU5EPAN4e1TK2v",
  "key26": "Qp5SL8NpdSrHQTe6akXJ3iomQgfLVPrXQ6RL1YckRUogPgfcNub2jaxv7jpTHsWRGjL9jRbaZ7YDpQuoVYxqHBy",
  "key27": "47mUHHXAsLXkF5QaBDoFS17PfAQcg8TE5kRkmY4FvCUyiqoKG6jdxHVkrghEsE1EFXwHZc2TheAoSzybCXsXAYJY",
  "key28": "5EweqA3hRR1YdWhcLeBdh2v7JPJbgjHtfPLs8UxjA7UE3tyVismar5swq3YCwY8p7HPzaEHzkSNjeCnb5DusqgVG",
  "key29": "4DESimbdh4Zr8dYwDrYpxfT6sKH1DDQW5ve8fehB4xWN2S3EnuQ5FkqRzwuFdwb5vqJtt8TUHKFzNeNG8824oMqc",
  "key30": "3YKEAPuCk79zorAvETsZg13NXkY2d831XV2qg2TafyTHQDuQSP2QjjgFQmc7zFDbtrQAKTiB8VdmcnjJKWLhyRpV",
  "key31": "5aj1WeqBYP5hz6JypimsaTqpxGjjgUfjSrzssyWShoGSWt6AwQ2MocUYm2RFZeeSMqxB28aeYVbPGZzoyzk6GinM",
  "key32": "25jzFUG9HB59ikpJ9ydR1RMqh3micLQVv8Vn9CNN2KTZUGSGLEg3MGFTnr2k4NDuZgEKRLKHbhdfVehekb1dY8ot",
  "key33": "4qW81dZ5XaPyHVcnZcYxCQhNrWMo3ofFH8oLDbUZor4A3NRcNaf9DnExphreVMrEk6saMfR5wg6Htf3r64hd9hLz",
  "key34": "4nsv6bbdYBcUbCgvnj3KCu5ZDXUEahVxWfgzg8QrTdu7wR4Je91dGM9E1biLUFe5YBnK1P1ywEbWHP6XYmjqGXkp",
  "key35": "2U84dSKXrXbEE9Cfc44EVzfXEFajHg4HB5ygaFLmEsXh2c3LEo7gpmDFeFCd8o45yivAfNFvaDnTrunToW4LzysJ",
  "key36": "a5CzSM13MdZ1uSgTKtnx2miC8TDt9m7WKPQBvGZZfs6D3bk5sAHvr88nzk8qAE2vy27SxV3KeVhMicpN8j3p81G"
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
