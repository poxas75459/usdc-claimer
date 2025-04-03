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
    "4HmDWox6CQmyZuSiq6KqxQAykSnsHjX1LUEG4vSXmiCZt5f1wKLFiRKX6NGTQjYNdsCWQ8h8UdKcFeruXEevJyrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaVcUh9XVGkmDKhXB5yDuJJBkLpGyoYWkppZaUuGzUqyAWwThmxr6rvWPbmzPcxBjGEwRoa1B9T76fZcoxE8rog",
  "key1": "UX3spBBs21JXx2AKcbBnEKoN3XEiNrE785sYLrQ2Gu7YuHPaC2kzJSf6Xs7ErDQkCEhVxpQ2dkpuWrAze8zNS8e",
  "key2": "Keu2TMpn69qS3iBGM6BcAnFnjNWBKFM87G5JyapeWHhK6qAnzakoPBQ3CtxejhYNrGPDnfDW7QMRkcHdqYjBiAw",
  "key3": "2fjpmKyNzVSgy2ufSP3XKwaFPuc3Wc26eYoTyAUH9BAyWnjJcAEhcmPS7BhBpZqzKyZVd9atV4bcLd5wx7Gp1EZB",
  "key4": "5Qe6bTFnTXemhZsqMMKMZkw2nq75XcN4aHr3Jz988Gmi1MERfuCcrLA9hmFXpJbPWm5coTqz5tfXFRvbRaHL5WHA",
  "key5": "VqmCc89jyFCe9X5xugVf2PV1PP3dyqZ6AUK6TZkzcTGy2oyBPVpeBjByFiLjaZMsHaFgy5THB7ZNnW4t5HZXJBi",
  "key6": "VhEUENVAoYPibPbdMY9A7wNJQ5JMJhYB6RCFQpPm4qBuhjdt99NMKeSk4mMWUR45wbARv51t9gfLPsHSRbNXCUy",
  "key7": "4DFfXH2S84SqzJ7gRWDDTgjtxsirYmAFxRScUrDAqqEUwkXqkVVDbPBF2JfMXymXL7UWuvArRjiH48TZCzKEsVNW",
  "key8": "5r8ZnpYBZrQRu4PsZcvmEYYGLjTwqdZxXRbJMfjPyEahyHAYERR2estBqmqcRSGZGiorP2o13eP89N4Ykvjoxr7a",
  "key9": "3RfRQUF4NmwtQaLrMFdkoVmsnCC1wFMqoYvyQQcxYZMUbFqRk3mefStm3f5XBoutJmWmz1tL9FXorkLi1ihJKpYT",
  "key10": "65Nd2ipbgTMFwSA2t63Mn1sEJeHGmmGexBdCtaFLLj3Cq14k9zAoBkbF2nhkUJXkxh3a7roxz6tuAJ6W8qMuHsd7",
  "key11": "AdoXLfDJykLjU8yPbsZRP9WXBowqPL94tMT2CemWX89qs6sEdUbk9dugLxHcNZQZuYBc9GdVsTsLANaDJymmLen",
  "key12": "R4MygBuq6QyWno7tzF6WkYwF6b8Cyz2woqkaX3wjsx7tg6dxn33ubd2T8dUEwEA4FyLB9gQLwsF23bb9bWPNJq1",
  "key13": "29nzhqdtKrj6qnLYb3xa4gtx7U4qmxEKMqaKvFjdUCJ58o4hNcakPT5rtsmdy8hEs9ppjeGuscW7dZqiRxgqivCA",
  "key14": "2cjcVJ4ErfT8x1oQHYAKuFPX6PiFhfL8r88ZMB6kaWr9DV1bnkYVokQ7n9SR54e94LiHmccVxvdF4H2aQyxmNejP",
  "key15": "3qReoD45UWPafeY9ssCiv2XPk1d9gwXs5xntHm1wDQJRrzD8fuDobjUNAdj61oa4o1hPembMMkg7Ly4oSYKzKCYN",
  "key16": "3hFwyvLLPKwo37Sq3ZUv1f3PQfg4DUZBt6RF3BDy4gV2RsCWN8Tuu9kjohDyUm4rgzsetH9cEAyL6i4N1vwGt77F",
  "key17": "3Zh77LarEb8F2wUo2YcBb9r15ZUJ3kv8w2SB6cwKeWDNMhoHN5U61fBYmSTYXuSV6Bb1hhpCB4SZT6UpyqjPrx8n",
  "key18": "4b4nEsamsYfsiqs9UBLrbwnaMEkBaxoxxKMa9yPke3LrtozG9qh8JN617TYREMCB1D32QYEng951nywwPhNF4eoc",
  "key19": "3zfDEbyYsBVdGgJ8CjN2EhraHRwQa6erAqXPN3sVJy4DScZgyegvEFmzXjeMcLvpLazdZZYeK8my3tVPUsHhvXEh",
  "key20": "hKkedBPGoxxcx6ukLh1rG31JtR2CMg4Nim8T7aamaQgXKCni3RHd6z6YbEt7hsrjihPb4Eo2FuFpRVwcmZjZe78",
  "key21": "2CX8Bhmva5S3xBPMgExv6guoF2omxM5Gb7vKkkQymPKcZkKjcXCiZmmG9B9bh1gZbZCz4z6D9GgpQEPCLSgiD2Cx",
  "key22": "4paYZ6szGcTYSoJL3rLHs8ymekkVeUuUfnT5h6eCMMDnwvr618zkesHCG9Q3KatJCykYpREhyeQM5w5LQcfQ5m4a",
  "key23": "4q5VQMW6WBFgvZ4BjgsNv4zdJgDYWA3VtF5kQeP3vnsgrQBmfrtMn6XR7pjfbhn5ERYTv7QxmR1qx7kzpRvXUTbM",
  "key24": "3BoA4mHGTeJ1jA7jgQo1GAuELGCh2V93uCm44hcTfYzxkPC4QVW42yhPMsbJyS9q5MRMBaTfoqSNXnFZRzTVFdAs",
  "key25": "3x8tA6ufkYDo7wqLhAvXwXEyjButZcp26vu4MexR7nijAzTZ3bXAPdWSsZJdkE7zFbJ3xvNBsytwsErBRnqE5t3A",
  "key26": "67JGHKxmmTYLnA1f1EErHGsHdNtj4ZDBgTPxGH7sca9Qxf2Mhx7DB2bhxpmRd2H1eV3utPC5Jy9SMEHD5bQ6mZeS",
  "key27": "EaCECSvGR31eHkRU5q2r8nSo7upyosegdha4PTND7JeCCJXybYzfWBhHEH2wbxmeB1n6Abh6ntJe793HUWrdM3V",
  "key28": "4rFGoWWxxX4Zi7czsDPHc2bw96Uhw9oymC5dVFLJg3AS9VLdC5bNmhTt2XN9HKZZk9Uz3nLMaaQtYjvh8oHZaX1g",
  "key29": "5u6r34zoGeVFPXLqqSufBz93qPaGWg369BhbW5Kn97qR92HPnTFi8mwG4PB1GofkistWNnQ2w5gvVQ2Temgrw8as",
  "key30": "4LuiqN2uovf5AgVMU1dwxey1wN5VE8H4T7wvHJoUGshk3qm829xUEqNjWcWbiaBZJRMGJgwND12CFbREemfJNrVy"
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
