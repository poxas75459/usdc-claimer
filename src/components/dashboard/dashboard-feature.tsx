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
    "66WNUfeDjEkqiFtX9d8R5yqmNh8FgmAeNYmsfTwFWWvqmTV5uTdYswSbRaXMNDDbNi8eDmq51HFhqn68s7b2peA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PAmbFVrxpG6VqpdKdDzmojUZUkpbMKKD8T1YJUdoHr8D5UP718qV43RWpa7oNPY4jAxZvyrGKAsG1PYaqn2Wkz9",
  "key1": "3LhVqmUDwTH6uZJsdafohf1THrVscFMFaZ1Myttswe9hrg95yEh5yEkbyPu6czMiabRtmXwQoF6uEZiWqEqMsW78",
  "key2": "4Qr81chyreDJFdxePGo7pUivAfH4i24ovdYh8SVijaeW4rg3F7r4szbcEZhPZRX6WW91oYWMaXVskSYvWVmfYJ9q",
  "key3": "5Grv8uBnzdYhDkMN5d61YNTKmDtf5JzjCU7PNV46AXVtoDGj5rqBXrR3BUtJk4wK57ndx4Ldk7yuQBi9Mc16YoQ5",
  "key4": "jGK2AbuJBuHhUEPcyd6hurXW2JVKxVkkRY9p9incAFpPiHp4sH3wW1BZDxbpX4yqJcBf7y91XLYVxVPCJrBMavF",
  "key5": "3ghGPRdMh2VVBpfLGoFqksCGt547nu3JMkRjwBvvont22cYgAdcSimffTEE4QgYyg5i3ZF9xXhHEKBSLtQkiqckK",
  "key6": "ZuE3eD5H4CepauLU7Rz1uP68q235faK7uFKCh2en4SLmTC5uxHVmur78q57ur91A1sm1AVVo3wRAKaBjedpMwAs",
  "key7": "YN37DnFNtj62n4A26g8iW6dXjMP4T2NFCokRu1chDXiiZyXusWYNC6DM38TNoT4qgizMW2i8V3tFKNHztNUZ3o8",
  "key8": "HkCThjpH79i62b21B2sSjqKFegcsDSUhfxtUMwq4AUDWDvbC4WjkfQrZNQbpp4EeSTHaijsaJc2yK5jvfkB2Kr4",
  "key9": "5vfps4p8hnLQwQT3ooPuAjL2mRpyFDX2wAdUHYZNphwZrPu7ZnicazHmqkbjcChKWKU3LtkwDKYPCKwFbxwfy14Y",
  "key10": "4RWpADACaPiQPqPR6NLKmWzRjqwTX2or2gbpJWi8FscEwYBvnuGvodx2hX9mATcVdAkBNgGmjLZ7JfXgQQxu6Noj",
  "key11": "2WtRoPN5k9NKoNDfrP7EBNMRxCVpgVyXrcHEhdzbjassj73A3Xdfjtb1UhBMwyrGSGEYnU8rWKfCUypcvknnFDgW",
  "key12": "AVMLo2h93ci2PmhfSkNKAMrwU1BNpbeJn3e52Zz6JYngNy9xtmAPMHeBKg8F5RGhnK4zM1ESFmB9GwFi2jPAc8f",
  "key13": "3LHvUvAUdrpuDQkFd1TnSwR2qrbRCWaurs42T7R1xxqCR7aBBkskm9aTTJKr5ebQKZpNxpXpJhdpReDxYQz7YgAA",
  "key14": "48DDkk2toTstxdmznVvmPF6C4vFX1bq74yPtyWYjeKNkd7CMyLc85X1yrYLrm2VDWBF5z11nfr9zKiqjCmxPsdr6",
  "key15": "3CpAuBJ83jiPS5Hkc1udwW7fQviHALGWDVst998zLXFuAWbRx5dgXhidUjiiBpDTbS1GjrMgA8WXPaBEB1WYp9xt",
  "key16": "56Fh1hENBq6LbQf1AGqJ9wuRGoP6LBbbMVBf6fSnrmjs9LQyVzpLTGi47EjUKURGTbtATGMGYofFxd9AK6wqRNw7",
  "key17": "2dvmiFGjSWMtzLsvANPRt1W9Fbg12xnhe5scT1WsaZWTyv8KgBpLvY22uY6dowHKA1bhaHutHskP9uKUZz8WJyMB",
  "key18": "3PxwoNcHN1kjpjHvDFMSrXQgsNe9nehaYkakv15iExXiBQviaaeYi44uemPkXLe7wmgwyz9fZoNzqBZbt2iYUi4m",
  "key19": "j3KEouy5fYPC9dQv5PMdfeuZ8jsL9Uxzt2jG1T5xTqE9fDLGiE7VH6GiuzkptPHvci9a5q1YN8KaijfPHKto1up",
  "key20": "3NYoTkqm1tz1Lj9aG2jHM4nkPn2DcaTLH1TBPSSVukqEPkpP1tujvXX6RnWzfVnz1tGpPofhDdvvUAkQKFGUsjkN",
  "key21": "3xdtqoZ38bCrgTBATEoGeEPHuCoVC1E4kPNUu3aaLwocb2WDb5owVZGAbph8xMAWGPwnJnFdH2qfcBTeSjC5HChd",
  "key22": "5hjzHQRQsjGawBAm9PF7u7vNZpAWTA9TbyqyHSf3Fz1dQvFRSCGgM7WKCFKqq4AebVHkmNJ5pPxhbyV9kfabPT4X",
  "key23": "5R6gAhUbS2DzFoSvyX3eRnbgqqvdPweycGXovi2bXTDGAMzQM4W7HV4Wzs69ssNqGuMF1NTN1U5bgrhsgbaqqTWZ",
  "key24": "H2L4qj6SuZLR2t5BExMZaDPbYBvo6GAjSwAtcJzsQMK1B7Du7SwGHFxMaFPF9HUBh5u4uKa4KMFViEeZrX6ZoQo"
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
