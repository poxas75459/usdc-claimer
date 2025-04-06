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
    "61ohx67paEdP7x4PGWFVmT3K2sAQuax7S4ub9YrDSihWbj7iy6JmNLNSRkaVLiWSs9jTaqcJhp1P9Qrmt1NH4Jq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tcbczWfXC67M22MmTZvfvf78u1NQMi2UzP7paJjWM8R7MmSifsY8mqBqwBREPgwtiHCJkbYrUicjvbVeyAFxMbV",
  "key1": "5R2vwJ8nikppogPSPZD3aECfskvTfknzcivsjQqx4wx6ryVKXsjjYin2DBo3YLvmd1KZwyi1ebompykgFdFqLm9J",
  "key2": "2CS6hswYpniRxiixZrFr4nRLAxaqGPbLLV9kH3hjwLm55EpirvUgDiAWH8JrzNFmH68GoNnbdtS9koqu5nENxLwg",
  "key3": "4kFdkGgCwdjKzZ3rRX5AvEceZ2m3nBkrBQdSygUy9PEfwyxTLzvhZniffmH1Y1YdpnsETrrc8vsck2Yv635YjYLU",
  "key4": "4XbNGdDDCGzdHwjJ2uVbwfFUiAPrRNwjHQgx9d4S2cHt2EL8cudDR8G6xUekfeAmabmJX7D76bqgMaqji5LxyoL2",
  "key5": "2MddAT7cgWMVAQvMTLXJJ4T5Fx7X1DNKbfLaDrU8izo8SGWR72hLxV2hLgmMFrzuzF6QyLSqzQYVNfvUvaJu3xhg",
  "key6": "3QiMx8Q7a3beqtek6AUmQuUqstAERJmLXmaXL1wcraKbm3ei5LzrWT6N2ptCjEfgtZmxvYLCGu7xXb4BbLrsPKJv",
  "key7": "5YagqWQWuobm6qnW3aFxb5sGjMBg1t4GqKEgXJa9JkD2W8nqYmBqtLdiWnbEkcgjAo1hADg3iuGv6BRTV7GfQMgb",
  "key8": "3nZqHFNJtbb5h7516Cucuy6KFP7MYj3MmYDSC8x3Rc5gRKYRiARY1exkG6uWNWzUjDpnvMTdVCZfeUnAqXMzzCaw",
  "key9": "5XyZBpyKJFnsYuKBmjGhngMbf9KoKzQoTby1oSGcQ4CWvebkLgTPZc6V71qFGQ3jczUtzgGnaq49hy6zyqqFE8qv",
  "key10": "pFt46jeiguGwFz2Te66f87Xv2VpdVcrtdHaRDZhFLQR2fMBdRDLb3thTRurYCJvp9qYRov5S6jR1qUD1nguNYSy",
  "key11": "3pqaAogXFuej1LHLRCF88Y3hKrJXZWEPEAbLrizHCMTXQKkrqLznuKckx6k9vuxRkY8kAcXgWCdTkHd3FbWz2NMA",
  "key12": "2DLyNU4BoY8hKSqiHC63qNEn7caLwpSDBP4SNCj3M8FhhEZzH7dE2qBt62gikpajVvfh5ndYkKtVBKi345vCVdku",
  "key13": "3mM9kzvUoN9VvJWMQbUfcL5Pfcq7AokeE76s1aXd6RwMVxyvvwJ3m2zT8ik1gmirvwkf5qnNXuNR92wQee6zJFM4",
  "key14": "2ZEZ8n5Qm3vGw5MC1q52BmRnw3QjPii3XrjFDsKuJ7FmjucwJyyzrmMoAhpJk2gL9tRMc5dSgV7Rm6gywGhpcqTe",
  "key15": "2mhK2owkEptMvKqgv4mKxpJDZZ9YVE39pk4fNHV6E3dmnFqhGTiry8bN8Uc1w7dpwUYB3odeVJZ7RZk1Rabxzsy3",
  "key16": "3Cn9uLGnEuPxYx7sra9cyz1HgKJtuhVEnFRjmi2aZY8mZKgKUSp1QmnVaeY9v82eHwEG535QMXK3wrWakb628Jfu",
  "key17": "2QKkJu7rdKUszCWhrA3QZBTw78XMZw3J4AEZmeJvB6s88Hvfrtm5Beo7cU5ueWyMc2azpQ27mvXtgB6qjmqPFMvt",
  "key18": "4a1TkG8qJiVndakvwyx4NZxTFxmV3TwTvVEhq5THBXKrdqmjDfWYdcgypxT2uAuRY9Ead7esK6bbXBtLv9M6sHG5",
  "key19": "3dT4mPGNaHewVekf8JRyoDNA8MkXKVXV8i6T6Dktg3wmZuPiCyLfe3xwRZUqZZp2QMzXS6xorTX6kCdX4gBdWgWU",
  "key20": "3VpkYWDDQrFpgB4hwGcqKqrxowMimvXWdA58zeVJAXf9A2nY53vmfeRMGwkmNSzWT4nauEqX4F5AZJDKDVGb4PiG",
  "key21": "5gqAQr9hL6xsyfQAnTgToBWSei1A5hQDZN4vng3DS4WXe5Ut3d4MEF4Ptrvnd4zSvLucxPH7ReNZKcxxFKcubo2L",
  "key22": "3WCNTA1n5AQyrVaS8gMPWgjBG4qzRp4Hvf7vKQyAnsKGYisuJ9fhLr8TMpcdvdX8a2HiPiUfyM6ifVTRAJo2qHHK",
  "key23": "54WyGoZRnTUr9BpHoWGEKdYtuzrk9nF6U3XBVM1pE5aE3pL2k8baQk1qyDyPBM7sjpK7gbGSqgAMztqrPDPddWGF",
  "key24": "4gd65KS3gXRmF9TpFeG46YVgKEbLtXAREHQM5Zm1cCHB1QdFMNGpbhirj7rgh7cHxbAP4SPPwFvuqe3C6PyQpQs4",
  "key25": "25mWTRSojpsnMEXH6kPgMusuEA2g97vnts8PviBgbiHw2fQxx2EPUBkyuJh4VJJG4gtgpJmQRAd3uKzc8EYW7hFf",
  "key26": "5yDAqshUxxiGAY9R94G2xydKL1jN2CxgxQ22bWH5vbbzsWguE14UQu2FUGCvWKsrL9hFFUFMjr1wnDDv5BBEpcbs",
  "key27": "4d4K1jSDa26XDQ3zVX2NE2z2MN137Bx42UoRZ6pmnWhGbypyksJzweF2oKW8YKznS37UP9yQ8nRkhfNLbyq9Lds1",
  "key28": "zSXWevArH2mSXPBxkXKbF5VNyr5UncTYAtLrGX2DQrbBj37wVgKBHwKAsicsJdkdF24T8Sn8mxD1BrE7pmVanEE",
  "key29": "3yQhwyPN9hpvVVA8jQHvgQgjURiWdpMMoBa9erEhc6fLf7t3XdWaz63Dt7yukkao77WAvgxdVnFG5kPhuFqevpMt",
  "key30": "22j7tYE6bWqgTUjEsbkcgvCxkPzoCUjLKUycoRfi6ppWPQqaPX25BH8JFpNG58S6cdZvZkiKopJJ9WsVsoYEh4WT"
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
