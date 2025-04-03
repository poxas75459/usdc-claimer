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
    "2NSJk9XDKqPCgJC3Y6tkSu1DptndVeMF35hyTq6ugQApDVhPGnszcKYR92HzxdH5hPYPHdjCCb1hd5L2L8Uou4fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjYA2z1o1HdsoTw8XHtTaBmGxW6SCYh9ZwqTGvW5N2jA5WP8UCkUFrQZKgDN22CgGWJB5JLsCEXfv5JEKJ7YQxm",
  "key1": "2iPLfJpLb1wi8D3rCAErcSxMFWjewmF7RwHiYTGNYizDFbJVseUPkwWTtaSwiTxC9dTrTVNtvCuHEVLJpPHQaKqL",
  "key2": "5jYykNLZrqb5fwmiztjmsv6dxqVvQVVnyVsvFQrHwafFWJEyycCSuXzPDuqChLKenhQsE1fNJTSd8KBUVstdHrBV",
  "key3": "3EHHJ4Kpo2pNVKf6Q7z8RkJvvEZYUUuXzgLTXi32QXwx5mggaSK3rvrRTJUczpYzQCBqzFsaReTX35XJ7J5biVse",
  "key4": "3toe6sqcuQSjeJTUkaca5xBDswbrkL11xoGst7j6xSTg9pm7YeCepb68zB2qTYUCKTXyKW6ct47CLEpieQwYFcRb",
  "key5": "5hwLb9KwND3Zzk63EAsRUboKSShKTiK2dFkQjsh9NjPsN9JzXiZHtDYGVJrYaJkJJpftHgetosRgRZd3wXTycKSs",
  "key6": "2tzJbjsn82W6AC5r1VU9C8f1Qc3kYT7p9H2uZyxDDRUHFtgW7H2jtg6VA4sUM3VT3cfSMvvLEgvt2dc7KfzUsqAD",
  "key7": "667p4Zn9BgFxgR4eS8AsPXZ5RyTJCAzVgwDHmpodpmzLR22tBDjp8DymBTRMWyv49b9N1a56u3m4oTVWCt1uNLVr",
  "key8": "GkqVLSAStSarSAYAuH5chMKejqXcLH59s5unpfeYDY8HEN4PpERA6N9ZHWcLQyLe4tn9xnFEkw3nSoopjNVk32y",
  "key9": "5ZgvfnRhm4CvL7bpwai4iXA2GhYiDPCyY2xB5651QWKq1chaAqyJybeH918jwVwdpFrb97gdj9wqMGxR3RbcfA3t",
  "key10": "5vhveCuB1JFfCZfpjXK58urbyoSikQr88RfRqxeN8DqDnizUS8MsfwvSGBDmV8ejcc6qBRpNMPcBrEoxbeVzkTF6",
  "key11": "3GkuyDpJbajih6wrLsvXTmHvQCuZ1hAGoyLRf9UBPiVqRfcMWgUZ1eTG24WzFkMpjJnDXFKLNMTc5g7JocbRB4HT",
  "key12": "JzLwH4pyYcvfNsAzeyb86S7kyCo2AJietriRXwAvMYjmQ4eJixxxcMp1gKc8aYcZpm6hgT7oVLQEW4wrJ3pYDuw",
  "key13": "Hr1uzvt2rsA71feEWKyiYQPZVoqs9FQzXiJxcYp4uSETeRfwkF53Y7w8VvpUevQVPfuDqtFdN7m7QGLf9PihiCv",
  "key14": "GXf6eMDYhxmyDztvSiGtHEP6U8CVopt6bd7Wb8vSzV15SvBgBUAMydvpx2jUBjkW7jjSACwNydiQWZeuJ1NnFNT",
  "key15": "5yjrxfahhGwDn81ZcCkJY1Sk5KPFzG5XMS1zzXpizo2YEd3iPRAN2Swm8acMgtZQwzFpJuZiYah6UuDP1BAVXpik",
  "key16": "3BHrBFz2jSNhX4i1qVuJRpot9QfwJ4YPRfsU3w6B6yHp19E3zJyywE1WMBLXV3wkxSrbWRCjSSzj4iEYyJMvyYmK",
  "key17": "3t3M85tEmfVBmoiZ7wPyisT4wXy6haGzJWdHRogVvKGdFcJGx6R92WoTa4JiZWAKbTpv5Fz3AANM2MdfFPXf33tZ",
  "key18": "4B7Mv8ZB5XUJKQ4oByXanKtx7EBLiPGAXw6rEHVFs91651XvB7JBFDkxp5sbXmBwd3EE4nKiqA1KoQP9JSXADK3P",
  "key19": "2kmKFWkhrRaBr9XpyWahzrWseAjar98Y8E8muQ6ReLUXNpJPFUqhB2s7kWw29EaACPb6DoHkkXg4mbHH2gjnUDMY",
  "key20": "5YQqpgnASAoVRj52DFPxYY1e4c18qBtRzVXWgGURs1knjAM5derJwttiKDLJESmtdg4y4aTq6HrQKYhLxtFxnH3i",
  "key21": "5kHFb6RGB4zEoPuSv5HrZ4SMTg3Ttw4PAb8iZTjGDxErokt6oFHSqnnVRQsi8Pv83cxb2BDBEA7u3zJkHF8STvP1",
  "key22": "K45YaXeixmLMRZ6bbbtCetEjukC7gytw4W1GzKr2P8zUomPdbCg8rXA8N38FqfVqTj3CGnnnG2F6qhheGQ91L6X",
  "key23": "5gZNDvcnUKR6mWec9LzfsUn6dxkvxnqzjE8J7HzYRsAbszgPjs8xQ3RidSYMCB5LQiat6NcMWUhUhUTzVfcfhkDh",
  "key24": "5VKd7ZY2haLHo1r77WkJpMFFnsQb5ndbYj5FytLqQBZqct8TcbBhMotyu684ECMLYcXU9nfM9zWRCVBPa8qGRkiB",
  "key25": "4XV1WMi4peu3KgMU8NAwGHE16EPo7hSDQNYX5dyiFULuZpYQhoegyCQiZ6ptP1g9QZdSJ6sdWEufKcfaDLfgy1P8",
  "key26": "3RUwaR8kwqiuC33gwsSbPfAdofnow21KLztB8stJgx3tedtDWEsL5B4fYmjgnkMuMYmbrLHPgQEG1canxA3g9orS",
  "key27": "337TknmKTQpd8h5qyPqLZqT8o7avzZTkbHe9d6739BaFyUp9gjqdtt82h8CTYvGas3Tn7PPzzhZDCvbgHZbE5EEi",
  "key28": "3KWuADijdf5p9t9e54Ec7syNDYGU2AM63ZPwNdzWr89A3ghGwKSFeVbo54oPEC2hFPKYsi8q5adAEpnx8cJhZ397",
  "key29": "4Qtp5DLkv1qv22GYUnze6Rpxp7ZnaaorxbHw3VnFMrq69gJjtkg5JKAcG3j2Zk36ztsuGSrGANe73BCznFBRiFbV"
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
