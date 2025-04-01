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
    "4SjtN53YUNyy46pZbY2U25TjsMjJYKeyCE9qKyLnrJ7xWyTKD4UXFQZ23szCwGKv7wb6iFNKe9AJ1mVhPvtxdP57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMdQqx4nHTas4ZgBYPYMJBLJqSheL2zfNetAMK8MJyF2iL7Xi8pzWR1CciXMzWDVdCDWPL7UJewt7M5o3rDDus7",
  "key1": "4N9WMX9T9ZUnDJ6VjV68buoRJc382mgWipXeNg9AqReH7yqVDeoa7KD2o7d4urj3Bh7v4pgG4fXmC86QHPmFKFD7",
  "key2": "3tSDYdYdToXHzYCGciLUyEAgj9Tpwz9JctJ1WkPKTVqNGHobyvRGfyy5myVU22K3MsGTJV4j5Ha2Ns3kGaUSjSDA",
  "key3": "4uTM5azd4oqmqUbBsav1RFUbrMqheDjqqUXLjjF3CMUrwykVMJtDZUfuebHB8Rvqe3QURP8dH98zeqsC4Q9WmY2Z",
  "key4": "2TKeNrLJyzZBi2nhorsXRy6pParxxdUSQVxaraXQ3qCpFDneDQQQ2vwWs1A2vuYuU6z6eKTqr4CYGKEx7qAC96YT",
  "key5": "5GnsTvFUT7h4HcXNwaFEBoLcHBGAk4NGbf482curtfDeiZmYrVW8NY5DjMTbK2eXnYMedofqDmkhaaDKoR7Lhp9V",
  "key6": "UdTabpB2UwofftRFZSfp7KWuVaH58zT6ozD1hVKwAcvSRCj6zqvreCXKAAjha3gVHdLCYtDpNmT8KWRxoj2xnDC",
  "key7": "2hGkLNoCkYGXrzDWy8fuZ3cMNVGiVZu7WNdd53LfRNDyeibsXae6K26KSYfPens1M5WZqaVymQTee83zx3bTHH1e",
  "key8": "to5tDNLP3k5eY7jGxc9SG6rzGanxZtRwENxLpGqqk2sYRfRDhU8vxoqTtbhvpzrtqKoT12r6Hd7NyiKQtv4S9M9",
  "key9": "dv48KAEPpPeeNAb7ZMXUxZPrxkqLicbgie14UcpkEsSxP1MsgwWxX6WtTvreD7uLbpnkChXhAGXjUdgLTbEapXa",
  "key10": "Lt8Frp5mhGcffbBzCWSwGc56GQhWeT9xX2CgRZ6JBXWTgz4zdYWNoMigGd3uPUZkFYHncejWwEiDrS2SxAwU5n6",
  "key11": "kLRdW84FcXSB7hSY9g1wQDZhzHixECYoifJpLeehYQeVua3T375z8pKfCodpdfL35ePcB7DgjNno3UfVEegbTFT",
  "key12": "524wG8kFgu82NK36736iSvLKwT6tUrZEw54sr1ruR8DiyWpw1PDtaLgEU3v69UCJoSMBGuMMbuc7d5JqrZtTCM9m",
  "key13": "4PQVcrHQEranL8TUZz4w2L9CTjTbjtcoRx6BDnoSwYr1L62A2DLTpNWd4BziGLKpNjM78g2ScoHW55hrrjzqSD5A",
  "key14": "2j3hCKNBwqxHWypiNs9Jw71o4uEhynmdjETgHkUR5LpN1X3TwpjqBeUNfEN7TEM1nV6WohxbLts5fvWFSbDF6H7U",
  "key15": "57MpT4PytWxkBjz97cDE9FEaJQaWEApsvnpTQxHm6SNCsaC1JmKoCJvdYTL1hNKGzPiuguGnLZY6wpAfn9kARQ7r",
  "key16": "H5VMZdftA4uWra9DKXVGW1sRwAMD1bFzPx2vhwVvDmxtmaHRKVao7ZPTe5Dxu8w7L7qHPpR4cfRqCyAm9srtSqb",
  "key17": "aVsB9tEVf7QQ1Mf2fWruQqvD5qG4TH1f1jKYvKa9PxTr7CkiiZ6hCE5rk7HDfNyR9d6EGF2seAbQZB4vHFq7Aag",
  "key18": "QjKnQ3HBNcD9mzAJrJKNcizZ5PxkfcD7ZpHsTDZ1WzXrU24iqaEztTdNdbnwYg9LDDvsvGLYzzxgEqDVjcoWGkB",
  "key19": "Y1nXSPMHdscCXECRz3nigQpx1XdrfJ5eUHECae9yXFt4vgcCD1CUEshzFwSyu6GrLSrTcqXRXpUSptjGhPW2sM7",
  "key20": "FZyxBaRSZ7FbGBLQpWsZvXGfNFdwX8XrePobucLiSrKL839aqSUEBsVoVD7KJg2S4F4UXSS6Y1ZRsZqTp5r1S9s",
  "key21": "4ho4PkLmo8pDCW4CPPPdVwwHzBEcEUMBvQf9UZcGne7J56ngc1skPdJ6qt9dscEZ7fYRKx6Wx9nFkU74cVYiHshz",
  "key22": "mRnhF6fth7s1aynGAf2kaSfXEekKDxym7WkAg6qx1fpSHmWs7yKESrpFRQ4H3n9RxqkKAf1nNhwGyBJhtzYC6xW",
  "key23": "536SR3CB2qrMTDSwadhgrUBNmDdB6DTfn1aVWdpnUXrrpuZfEVQYbDHU9nDwWmChfRytf4Nh8BuX8ayAsHrbcB6N",
  "key24": "2SucgTZKhQhEPNe5dgxagcYhyAN8yETNUedV3hiWh5yzLVnaof7jPEvP1R1BmvyYGY9EXqzQesAiQaXJgCCMJ7R6"
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
