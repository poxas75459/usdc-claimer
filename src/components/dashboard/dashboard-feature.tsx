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
    "3hRrJ1oa8CHxtm3u7kopnHrUN3R6idTpDcENazS8gHc5dPPofEqWGcBkznMFkVRBs3FCjRJLqXM8UUKVZpS21BYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynrKycCMACTeTGFRqih57b77KnhVezVDVdG5HCiss6xcWCjDTNcm9WC7DkQGPNP5kCPBkLfhRxKWQKAfnCpw4NP",
  "key1": "2yDzbxYb485HFquPcqciqdzsnnUko5dYFgdZMJirBk7338JQ5Tz9pC89BGXQY7ioEDFh1vHVSgNwj9qfFiQjGkki",
  "key2": "rZiPZo1YH5H6Vw7aFU1rRJoVL9fqNDZ8xk8RABk7gqLPQq4oG7BLBE2doR7ghELKXVTaLjDyJtXBZcN7h784Cgh",
  "key3": "NfqttS6wNtqHrutk1G98EuenYtrYH2BvKFyQBz61kyecui6wPLN9AZMwFTDNMhZYXhKVD3sFWP5NMRg26v6taAB",
  "key4": "5qhwKL9FQwLQ2d3NMxTU4kgxS5KzsS74nU4xk9aJ2WGi9cv9U75Nxe4kVatisSWFDqRDbUmxk6GTp4fHUgtH7UMF",
  "key5": "3GA3X88hMqVH6R1TXC9MANw1nMXjSC2YaNoRLsK412esFN6yuXYJiC1b7kV5KocVoxYbc3aPRD8EzNEASafD9wCh",
  "key6": "2dES2p6m4FtRbp79QDjVKpzYUQH4NTL4w1v9NNW5keJLpiM61gBxkZxikPnH94tLjSbnfE8DoRPpSBx8gBbRNYxL",
  "key7": "3DWUcwyRnEZSGgNic3vBX4xH7RaraWBcUGX3SLmm6AzknFRJMvKx2uLF82nnZfVh8D8ZJfoUnMd3Cbjt6u6Bqmfy",
  "key8": "gCECqwWU2wpvfj7w3qediCb5JJpbxnuVhoDmjusfkrSSPcW5af81EYoxhW1QGGdGpmAejoLMM25xbhtteZrat5b",
  "key9": "4y5Gj8PTmYdjyXbbkUiD82v4mNiVv6gPhnuLTcHgTjxJSyLRZ74vXTiXmupXAmwrH4HrWPWcWLzSpAAbRz8q4DtF",
  "key10": "wNZ6XncJiRVq5y9Qx4KNBCMdS4332nW5do6wqFoVpqvnA9YREG5oa7aQ8jgnoKNPht3XGQ7tiRpJkCKPXjoAtGs",
  "key11": "nZqGLQ4oHBDDTrS7XGbydJiqAuy9Fe2A3rRLubC6Je4zuxuMgY7gpkyiSPpSnKVRLQNSo6tsooSW6eo66dijUSU",
  "key12": "Pv5eN15mvDiascE7omNrh7dGj9hndxPmVSAFLMrFKjkN2v22CYqUqywLL2miMeQnz1tJqd2BvC4nkRW1Vaodcrj",
  "key13": "5z3LfCs8K4pyzKonNvR6rq4RZXFnw1X1rn5kh45KgBpF4V2Mr5R2vRftBUoazmVTP6fAccExuC1mnw1naX84rPX1",
  "key14": "3tL8V4ovVukuZ81x9cMM5qyAuB1xmoqiBfipKpwFsgvPCvPE58dHH4yQmDT94Q53fktqsUJmhoMbR95cTTvE4qEJ",
  "key15": "22R8zCsUCzxovu2B4Ue5nTm6Qf9RwsAn53veJ5CjtiX2pY6hQPWmtjQP5VNxtvxQNMGudpSX1SbRzt7TsG3vo3GX",
  "key16": "25DFf65CANmexWCMD82hqGkBR7vD4sY1nKJEfjDMqY3QaMqZwh9XUeZAPm8FkQUwCnPo6GDswNc4u1Xcd3QkFksm",
  "key17": "4UJ1K8N2ZkuqxfcfiEF9NUi8DCxeAfzhRjMDurDNeMe3o1cK3bfeRjQj8Sr1FePrhXF2qNqm82yYMRkPXdLzpPY8",
  "key18": "3iyXx24LJfT1JPDGDhAEewPSNxrQN7ffgKFRJy3yj3K22ePR5rtWjoEkTNcGpDfqYEfY141mNZtjyA5fPuH9SWva",
  "key19": "NoehsSuSf3hQacpDj72W9AZbPKakjPLEzMjcDFdKuCfeGNLgn2wTXu8sdnZ7VNgB8WugFXa84uXDz7TpuVsWm5a",
  "key20": "PDbLZZeXDSMJqeZLRyaQKQNEWHDD9okhFTnBnTztRNDz1L8RPe5AyGnQmzx1k343PQ6Q75s6CKLS9qWXoKMe5Ne",
  "key21": "3ggAQobyS4naiou9KE8R62PDux9EYepvUiq6BqbN37p44Yi95WwoZRgr3A3GpvusGh87ZwevQC6jJjtT8K6vGZjK",
  "key22": "2qDtqkmxrMW45QTwJehau68BVLg5sQBmxD6oGGenZ5d3a6gJ7fi4xdJ3CJsTTcH6V3qmuVWFpZo3hX8bYKLrvybq",
  "key23": "3YKGVyktx5AQJFddSQoZqTtjQLQGZPDy2oVURhwYgVk84D6rQpRKNuqTDm95NJ1SaQm8LdLzJ63QRaJBvx86eL35",
  "key24": "oeMF8zkhVhJM3n6hBGSbz4yjT2KdATcdLdwXUc6iEkKR1tX3o3DKdpAPdroogZsx9J3GiZJnmkHkfCNJTRqVV9A",
  "key25": "3STgCsZRan8riWYc25NdLv4H7P4rKHLbfRo8f1P4BQpzrFnoAKmBriswtd7wSYGLngS8jrERoyDdVhfpnf8xCPW2",
  "key26": "5GBLqVGzKce5GMhMvWF7Z5WJSdNbyZ7u47RQvXMzAH8gpXq8G3CYVX5Ggavt4Y2eTVZyEPbjjbo1MTmEqQtikPAf",
  "key27": "2iMgRYpCiWuLmhg1SGrZckaXrYmv8rrZYghr9q5BfzbzLiQVDzNDM1cgXyZ2BZqA9tFd5ooUfDXoCyenPkGjnrN",
  "key28": "qPCBQREcPCg2f5GUSq9uhcnEwcGcZoHTzrswCuv113XJMTHVvkcgNPeffuNak7t8pSkFDez229r7toM9G5j943C",
  "key29": "3xTEESVxzvRGkpMT7iVwQo5RRQ9Jip6froGTU6rVYTe2EUDGGwc3N1Ad1nqXKc6FRpMh8p1ybqXFpAGmZEfEvE9h",
  "key30": "65AskXduD79WGgne2yGT1hY3dxU9uLiDeWMT1sRHuVXJCtftpw4A3oprKEu3JqwQWc6atWZ5NwdgakiJqfy5qhAR",
  "key31": "3tbx9AzNX2nZ9B83FqYwu7c5xgpf9AKNCf818SMTD51XutHxLqAJwthRa6F1qmsKGuaPBw4M1Zr7Vpa7B2epN5DH",
  "key32": "3bFz8rj3dtMXkGjUc5TABdXa54MabMJD7UoJbUvERcGhfnmjccYeNs57jHbsA1PcQ7ym6QiiGaoD8uANjmQVyjRk",
  "key33": "HdSoSCVTKxZooPYsa8vcfNpqHGniie2Gtf4HxXfqa9Wsm6LCH1WHQovvBLDHpQXJKm2jiqorLDdgaw4itvTfRg6",
  "key34": "2SethZbrUr9r1zHU2obWU5x5GecFRxwsUoBS1FFVB4Y6cVnAMnrE4pMnDQQZk9zaZVFh6hjYJcuEmR9rFdYeNgPX"
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
