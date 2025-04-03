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
    "5QnoPGYeJEHoKPKpafTMnChsCSSnHmFQuuzgUYupQ9YpExGH1jX3XhCZ1zYn4mijyPTZKp9Ey6ae8oUZrnmrVimp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dbGPum7N88HKV3H8DAwJHc97eqyMyMFiiB2UEgvjaWV3we3KkWz2Hi3wTXTEShMs1ibKCSVJxGNDEiKEJiCsdP",
  "key1": "3Sotj6nwJVioS9nfGjEBhciEZoVp2hnyxwMxfywJmhvv5bgqodzswSGTVsA4eyFLqMKHuAbZwQMNqCx3WKht4GRC",
  "key2": "5WwoHDPMYdT1is8HZ4dFTmQur6ZiMKrTydp9u5tA3hh3P2swvunAZ2igxMDViZqzD3fmzGRGiQpMCgP9Bud3TXFg",
  "key3": "2RmERevhhmSLpSiNdwszFX8WgrxGUq9iHEreMbPcefb6h6xe2vo34hBEfFBvRSjH6w6CBwg7RxGnqT5VKDMfEeNH",
  "key4": "ZdgrQd4kriwjoMnS23aBERBGPGwmnwuCzh8o9k9Rj8qhTVAhXeqGUPQUGkmdsK7xhjoQAwJNPWNu8NawzAyUUuT",
  "key5": "3LBArZ6A3ipmPSEmW8yt3H2rBHSepe6TARQ8Y4jg6JDdVgjY1citXyxCTWXXxqHzL17aaBopNz3FV55FNAAJ4Zmg",
  "key6": "2nd6Avw54u27Y2HUdTmKiRZtK35uUdRWx9DyftjyqQvhm5VSzPa47XWnNF4XNdtKECZ32Vsc7WhiYPsjSFMpYZHd",
  "key7": "BpzrGai7eMSjxmwV2Px3569pk95MZXRe8c9BVCDCZt9GTPJ4zUEjo7bbLFeDior7BKREUQTjPWkNb7mZC1Q5MSf",
  "key8": "5VKYpedHVu97fwJgjWFCFmV5S4wMG75GP68TZNXHgmBVHQuWqBX2xUb3iTa2fZKFvXHgyVn8R52YiJA59R3zKvsP",
  "key9": "39SyBchUvPWyKfBs5pk6xqj1Ch8hu1pSeSH4HWcTsnsT3nLdS4LgfejZPZ2nG7czDwGohBCLbvKq4Ze4GQf4QJsf",
  "key10": "2QAG5yqXNFXZX16D8urw2RTBbbFjjqe6sT7ZDLU26vnPCJeQiznfLEyTgYhsNSBFbQqJxgrRvyZCMbSH9icQ41Un",
  "key11": "4XBWdULm8iQ8N6kHtkfJrmZ2FdVLSNYkvD5o375X5B9nckbdf5UFGCkJS1c4YmrAaBum6Tt7HdwgR4LVfVyp3duR",
  "key12": "4VU5dLtT12vvTeemohdb1McYY5LbpJRZ9vYwzmvvRhBLQtRy1LcbNWj1kw7mPaM9WHJ7kCPu195nMXVSLqJvAJA3",
  "key13": "5bcgPZTomsncg1PFYFHy1rdRCxPrd8xh1KPqwviJZpZtC19e2wu32VhbQkdDuZNZcQ1mhkDr1sS3Kp8yDGQpvuyt",
  "key14": "2NkhqNXs8y2q8qTYYMRHTZZP46SPMGDquu6bEwtDDdTxc31SmMZSiDqdnDG7UuRdvttkDrdap9rWEvpxyXWCuNyu",
  "key15": "2LoxU15e21TVp58WRoiCxgDcZ9qGZszjm1VRPA1h1tpQPQawpLqYt7oJwZeRReLqCKnTK2dN8JXQnzqWM8zzHHXJ",
  "key16": "4n24YRo5xmC7AvBn54A3hwdXgueZkyBnFeRJ8p5k6L2Th3p92igrUxwAz3izjeXYencRJRRuEBR1dXr6sLLJxoHE",
  "key17": "4GUnbq76nfP8njgzcdc9Mpf4Bngbfrc9rqXEhAMvi5sA7PyhHJQQBNB8cjxVVVekA5ia8nUGGUnhvwz4irPLtPRv",
  "key18": "3HuWQbphF2ZP4MGQAtWxSyze6qPbiQg9UFPrdbiwCdM263zgtKrF2pVZbSdNmj2hZrC12qQMKfT6paepTneKrvKH",
  "key19": "3QQyQBktGymJpC35HwxryZ9KZ1ztU7d6H9SvdFYHATPxz7Y3B8hMDvp3vGoUCqfRssCP1SXdRfMPQEgeVahs3o7d",
  "key20": "2iFeUmeRFGc19HiR371zf51XKK4PeTH3ktMStxVBMda8LbQGpxEkDrnufavsWEfkZy8akydEhw5Uzx1ZYptPYBeY",
  "key21": "4ypSr4Uw9Ras4vdNEfoyubM7QBE47t7e5PMVFDgxspG2YvVwJtwWknnAz1rza3omPCKxc1FhPjsUY8mUgfXQtX7S",
  "key22": "2okcLbZJSmG7U9fqDj5KGafVjR1MbnZH6tJcTeHv4dyqn8QVUPHViKVjjqgJ3BRS3hHJX5iR6WCABnFzewreqiBf",
  "key23": "4fYQAqfYYZDQXZqXbwRHtVVnMAMfjXop6gaHN5sZbdyYdKQKYPfoFLzwkD5KTZDWSoVaey7NJB5czsyajTt2n6gb",
  "key24": "2VqPPa48TRCwZkkEtyfqpQd6yaKG5rrxx7ga6518VW8CgjRpLZ5Wb3BQ25P9SjfzqBgB1oZEhscYFZ2PcXeVVt5A",
  "key25": "5LsjtT9PeNZR839mhxrRvrdv1TgHrrBA5WfGc4P6yspGaBCMuKjuJjCATGb1j4FoELwCEUC1Xe9uBcQcLPx3NZUQ",
  "key26": "21nqfSh19ArJaj2aqE793w6EsADWFJtr21kqjjtUqgJimtuAtRKRY4XhFTXniUoFvksTEeKUgYNtHzvm9qmZMFHc",
  "key27": "4EpCfM832T6YEVVV9RTZzSjLEArwPFPyqTLUyeJwoDEcGUzrv3xZpgysjmWPoUt4CFJHV7jmkkxJwaYDJe3u3bQC",
  "key28": "654K9FHo1sgQQr79P4PTH7LzaPT6jKac5SLGK3YKphJVkgBpmZcqf7L746Bkx83MAcusE3Ccb6wPSXrAxRHRQNYW",
  "key29": "4DETbm2DQY6kcSUGrvrbR8EfrHVXffL1a6CtbBFbLxau9mdTCm527TaQL8GyqqVNNEMJK74F9NfrJqhiQzqbjoPs",
  "key30": "3qsHD3Z4FNThpzu7BHsxqWD5bvMKDmxsULAanwzGsDiWhvRkvjeyHHoKftaNwzfHMkFdaJWWp7XvZXEJDMpiz1Z1"
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
