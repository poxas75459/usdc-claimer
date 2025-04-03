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
    "55wkEWEdaWdnhX5tXTUYyh7se7unGdzdnTC1cUPXJC4u215nCSremaY7uxtRtN2JDHUuCyxLknwqzTSVQUvkNbaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCerPKtjZy75zVuSRDtdBBzAKHYP1SzZBQE52YYbukbCMkhxxTAVkC2Ueh7aHVxZ1aoQ5rBoQ4h7DbEskLPsyQk",
  "key1": "5Z5RAJuVQzK7k5o8g7ar7odppZgzzfLdjXnUbfKNsphJJL8F18WdfLz9VR5BwdJWnFMEbUNaw54aSJtD6hwBi5wE",
  "key2": "2xrDzSYRoLfqsthYbQN2WLeUDepXaA3wZ79htrXv4UFdna6ttF1V221HMy4Cz4KJUMpb55qYnqhZP5Rchph8JJQE",
  "key3": "2FR2woxUrSes8LPFzadZ3U8nwF1keSQaRPnyrasHJKpdtwheryRLzMiRJRRJtoKZY8siDZLVreA44cbgjsws8ymy",
  "key4": "3YYGm1NVVgkm4QMkDmF4HkEJHs55kMwxFHLBmsTnj24vSCw4c9v1f9thJgcs3sAAnAB6eqqaFsZXTB2u4st3ZAnx",
  "key5": "Lpvj2MKGqdLFq1qMczQiNuQiQMDanYMkqsG8vTNX5KVgojXKLCVpvek6ygBbS8z8seMgQ2XQSHpjnHfYuG8Buy4",
  "key6": "2DqsRSrbrSNaSjzzBXav9kA9Qt7t7uV1Nd2t7emBV5uR4qJrWr1rGqwPeGqpgcLfxSDHfDJhWFMMx3ifsRpEMrnC",
  "key7": "3mrdVtRF2mCqsfHKmjwZAAFhQ3VJyBvt2qiFKZhTSsq7LRPMWjm4uNMLWkao2vC7fXCPEzgppDuSuU1SRYXK6uN1",
  "key8": "DxKTKRLPnmVzTeDs4bAmTrTFWzKAcoAexeZpK1s2EFTGNWyaNyfycQ7zxbfrzUX5vKbx1t8mgXZCWW9mCLfm59v",
  "key9": "2BLpQNnshqxGtGYCbeZd2Rw2bSVxmfvFwHSPcPZ7k94m6izum3PDN6UK2XatKkQyM9ipFgcGcWGfAyn18umb9C5t",
  "key10": "3p6TSfK57i1NWnUiugr6GUbwypMzAuWqFzgMmH9zUy6PPWguqighXaDvFiNacU2DJMftf1Fo15wZtZgAjrFLFNBS",
  "key11": "5hRZLMMvPdFw3b57NEyfoP9LBv8h3hT2JenSnYxExwt5C96Mpne2eKe7Pd6ejNv6UWLyAAXapGWDbQJ7fjSrxu8Z",
  "key12": "2tofer8tUgvb1Kq1YR7q5NdhVE2Suwnp7zpMcVakijhLccop2pJHQG3jb17iVpnX3t4Y9UhBhXexvxRveoGUHKqy",
  "key13": "4uxMJzMhimdPS2NqubY7vUeWoCkgfE3H42WXNUgczhjWWcF4bavnbxsTmxuCZUCtLjPkTrqiqaQmCCPDdpSU6cqL",
  "key14": "jDJ8cpEPrvmiMNo35abcULjt5sp2mrUL65M2CqDDV9zV5eoFpTvZFuTrd4HURdTJ3j2GofxBK5J14YTTKpA6GFo",
  "key15": "3gCqA7ReuUJC4kuX6SRu25JReEu5pN8DeKFh4YL7SuufnGtqXB3nSRo4Z2syiD8SETkeoE51JqqLMC2YK9uak2LB",
  "key16": "2nwrx2r29vZwovEmVTTg2UFVVX1BNKby1dD71JsPa7bDYb4dn2BFjZcGtyvbFmyfDay3PVS3byKsFnCRSvH5Lpu4",
  "key17": "2ZR61vMbDp57DXYMAWZnn9YfavTb81puCbmpyMCgTYcV6eLyKQZALyUrzBfnsPSLLkED3qY85XZBqSYSw4WSNXeR",
  "key18": "2D3nDsieNnufDUm31N3LudKYpAL2XozGg4sAPLAKYdEq3UDkzvHuPqzupksvN6Esqv3DbBVeYfs7eq23Mypo3xQK",
  "key19": "59Fbacen4MoUJCpfaoFhEiiszXGGjhvqkjnQj9AgH8nrykDtrCMu5z2HvC7awjUiaGnYzUrYQiVyVGg94fCEPZMg",
  "key20": "32gtdHMDsmtfRvvhrR2z2vcuPJPVoAQ4ewcwCPDtEKAA92ciuV65sgP7QrV5Ur5k4SazgeV3ZRxzxKV2gGVkxeLS",
  "key21": "5VRx174BaibREwAkeqtzAXkKJJRTmAgPpoNHmSeYjE9LXefbTCypVqjRTyy42jPxdggwuL1xC4iaN5pgCdNZJRfd",
  "key22": "67jRc7SPQkNtkdPjRe3J23DEA7WYgA8gBL8xACwiRoSEMMoHEVxPFDpeSjZ8BH4nSYT5yz2HGgxcCkcKd6oxZ5CN",
  "key23": "2whNLswGrv75CwV5hVPw77iWZ1BXF9D3jGyCax7kxmASML4b7p88znGo29wjCw3rsnUXzDuyWN2eEmE7KcbiebhD",
  "key24": "2qc8bXyytpDAarLQpsdEt2H7DqUKGHKxXf5zfKM4rDMUytF2pYhUp3oW3paQnGf7rR9qV71kmEh8rJ9HF4iDpLxL",
  "key25": "36upi2ceCk4boFjXRFpEyijXFzT1Wrz5YrvFKhaVBr2YmW9VworRKghtZpVw9Heq5wrYhthL2BLzFA6cph8cKiVJ"
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
