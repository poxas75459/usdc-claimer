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
    "48fY5svSRmPtxxeuFH62UH3rFJ8HB4TziTNVHpoaDYQ6YsBGMiA1WQAjw9kK3fgHpzvczy3Jo8fcxJZNv68Eb6To"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uLTXk9oB9qERtagzWjgeprmsL1bXJpk5gAiwSGmew7GJckhtDBbQcVdCEGQQhrhG1YRfgSR937hobYWjVWzSrq",
  "key1": "Bzf4UpWBAFcnSjrRT61ds7ukkgpXGaNtqZFoSa1WEk3iQcpg6qkjMXoSoXKxKgKs1NJJ8soVuj7JxBz43FFkieW",
  "key2": "4aAWJZxxcbL836GsH97xrkHMvi4uvPaypPhBrtGQxc1mTuRoEPzgobYtVNmeaQe2rvUSLMjWmEQwCFdAhpXXG9qs",
  "key3": "5z4d9pfEuhgSjwiNsq8QcYbDTri3PA7AX9kPD3X1PbJeJxQrsKaEyXioN4u8VUqno7Wesr6VVTCZE9ScerRDbc4n",
  "key4": "AY6EGBS8a2esTx6UtXGvvc28vZEYRCvWYhcaJCntXWJUGVEauW8vM9HbQ6oFHnoLf7zrZq9XhNsQgGzDYzPYc4P",
  "key5": "5rfG9D3Xq1Jpraz6KoJLa4QtQ8j9ZiCsjdgz1zKGbo2fXFsxsKVS93TNfHySB438FaeurCDfyn2dpGdk4yBZtgXX",
  "key6": "5ZdKf3c9Py7G21KhBXWUsbDQMQaxjfPuQZroCQrCcxiiMty1KwBqF2kbyYJLMmSUP68pVmkJ1Hkd7TveaXKjnpPb",
  "key7": "4gk8bkqByxGZMtF6WkBJvGxRrTD1pyyMZpmR9R1nrWNPzrfM9E2guTygkPiG6iPoBJskQepiqJB8ncpNhw2igYGj",
  "key8": "3NPoa9KD1wMqybouBbkWX3xATAvG8K2BL3ekkEzT7n6zSYo95132RJQbgJvewPPWDp9tukYcSP3coavR1vf5sgRf",
  "key9": "4taKMTK2PZhZCDRzTC8L8XCZhK3PycaEgQ7E87hPTZuqUan9ZV51HzU9Bq1zh285H1AXkNzmFmrP1U31NwMhsuGY",
  "key10": "4hAr5qYYrdLN4PArV54qs1WGCyVzRjYQPvDyDCQd69D2aNhW3ADY4nbPG9znGgEyg2W47P7zeGyoopXv6WfkrBx",
  "key11": "65XvcpSajKQdAcC7wNrnXoHbnpoD4BFd5u2ahdci9X9Mcq2CDiFYEncj1Trm2Ffp2rM239sWtaoPiKKtj2NSkMMS",
  "key12": "5rbKrZmLyoPnMRVkVx6qTRCgqjSL2do1xouMoJQFKYSHBkVgYVqr5Ac8jTDL8cucvriU7J1JWujKUaPXdBhLhbVe",
  "key13": "4P3Nvq5A2hvY3s4cbV18EjiaYaxb5PwrBp2PLtzaMZKiGxFZmJTWUX5E6BVVwSwiMFCpphyJc1dooBmnEqb1n84q",
  "key14": "2UDQ1YFZfFQZi9SiXwAmZnLkosBYc9gbXmd8T4kjoggNHUUATRUw3SJwN7j6Kx1TCVEjsHL3zBJGaGDgA13Cu4x",
  "key15": "2sDW15fkqkzwZ9z8yJEnRqmmJKKGRCtMvGFchxS6yHLe8QJBLGgeSnjAM5BLuQ7FdXZwHeiKNVsfaQz7LDmYt3wE",
  "key16": "3SPH35MqRJQK2z4chWP2vS71iD4mDBSfQiCCL8BuoxbsVWw9ys1LMb3s69py7jyA59H5PWpvrWWoq7m3J71wymT2",
  "key17": "2U9W1b8P5syCidMBYk7YwPNKL94ekZznfXxk2eArBsKtuyNRRbkd5XgutTDFWuEsnT38hM7wDSCsr6vR2eYeiM2f",
  "key18": "4us6w3MhFUMwbiAkztSJuQyYwD7jyX94bJSEtqRtM71kzNKMSGfqaKMe7yELxfXfMB4Crp7xv3u5oY4ZcaQXoDSg",
  "key19": "4NAYowvdC1CvFpWNo8dPSKPSYXqYKGurtF5At5ZCaK9E3rSunpipUe8wgBaVZ7rKLC2S2G8MXQsGdHJDX67Q5g2h",
  "key20": "3h6TYjreyu8JdA5AZkQu3CiEBiD28YFfVKMv3w2yCJBS4by5Q12q4opFx8LqBdqHwoLZSJF4NABH5fRVcH6pEHcV",
  "key21": "wtmcwEEMasq4Pfbb62H77pZPXdNtbg6jZoVsMt6dwscw986fJKJWiD892TSpKaDppKFRYGoiCkNt7dzsAhL2pF8",
  "key22": "51Zp937pZAoGg4UUZWTvE6ptfJN1WUBsci1L1SWjz5yhqTazmDsemE65biCh8uddDeH5B76MEDf19WWBYUn8koeb",
  "key23": "4JSDhEeK6B2R2jJvrkV8L7hnr1FTw5LKCgUP9EXfjuiQcVwxrBcejqySop6LU12nsvpgGz4R336gE3o6qpz1m2PD",
  "key24": "3ZwWvc5htHD4SSGyLqyjDuAzKqnJLUzYd34aMCiZkM9FZ61ehV3gsVNQHkGPdtLeYYccb4K3Dg8F84zACTVAXscn",
  "key25": "3vun1k8kbLqizz9sGer8PiqyJqeLzwRYR2g7azr2VHTsew7XBvVN528Wp6QN1Daixv64quW8uRdemLg9dyttw6fx",
  "key26": "4493bzNaYMHpJFaQytsSuScSCnZsCqd6ZGpBanLKajBbF4uFJ9gs5zsywhHBgW4ZCRo7SnmKdjQjrVcja3rD2rh7",
  "key27": "5bf9sH5cVvXrbKiV2r9Yz9Y9jqQYfPe8BDH4gsgrMJrYDod3jrNnFtuYMmTZ4SEcBQuY4jQuX3JY6J6RpphCuE1r",
  "key28": "25dPJyFthQFiTsJLTC5dLNBNpe1JbfYCWmMzV75BKXTcGDCXuMJdjcWUdvNoCLLXwFc5H7PzM6Wfnae5uQpGm5oJ",
  "key29": "49WzPXuAYCxV6JH1wmTaHsPhbbVYAYHGJk5jsLdYAaqrCQ6RV3MFp81EvvgaYK2SwztY3bAUUo5ZqzpP6G2NNMMr",
  "key30": "4yuwSS83g3Abe7WzzE2h1W6LQ8kAryXct98ySXRh1Yj35vAUvcoJpKs5zry2Hvm6r1bHsnrMDSRBMtYdxWKd6x4Z",
  "key31": "tZwz5jft92vHCbajmfocrUgHM1DdZhLRFPtjLpiU7X4wxAPVbsL9GuazGuu52pErPtnSXqTVgs4arjvdSzLpukb",
  "key32": "64PwW9QZhxvQUbfn86zUijF85T9M28q8TXNQjyBMbCBstG9LoxqCSCMv8jB5NyFtygm9BoauoBuxwgG4LZhJLGhQ",
  "key33": "2xEsrxmiRo96dNZ6yHBQNyswotTaRREy15jvc1YnX4rUsYF8X7kZsDGVQKoj4ygdhw3kP1zGXMV9HSos3Bx97rzy",
  "key34": "U3EgmhQ9YAV1i1kyx6wR8Zz61CA6cuRK21uB6Ksku4acvvigx5B95paofXrrpmmVHBBm1jYGqLp6WnW72TQLXLG",
  "key35": "NbatojMxqB2KDDVXFBXZRw7TuEM3FkQebDsXtCUjkSHvWM6Q73DAx1JAp4uo9tZH693Ws2dvoKpMEVr9uAa4E98",
  "key36": "2PuwFHM4q3CpgKj9CAzqeKZVbBtpUoWyWJ2G9jPoJfHx4BgDBhfsb5TGrzwgX57A99WXevQypCPpo2UcjvwoRVVn",
  "key37": "3mGHDTq97oWz65mmZPKGZRdyf5FNjUHqMxxXciMdwqeGGcR6KPbqushizDDNYtRgAMyLWkpFB48WnrBH5dmYweRD"
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
