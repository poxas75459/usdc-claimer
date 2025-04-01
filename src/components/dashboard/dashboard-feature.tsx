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
    "5YEQWSQTDHQ9ySxwGKAnnNbAbMGtdND342B6rYqk5FbMkadmf4GuALHnN3yby9nztTPk9p4JboFFspmcfWC3TqnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZF4dMHv9SDTYDy5yhKo62U61ENDsGx4CPMR9oxmaNouKZnu4ZNf7HTLvwEZgp6b5XUjhT2yaerqFo2Gfa2B1TxA",
  "key1": "41ML22xCV9M1vzRZJGLpCmdbJUER7XiwqXKqmeaPCyRQnkwz2mpLfJhKch91T3tgtTiSWjBT87efExbiVzDbvewd",
  "key2": "q7QaBYPnLEJojQ7mML4t4o4EUBuaQHUDB3VVYfEoCSUimQx1gEKH3gfN1wHfRjdFwtvcYRfTvKLQqrWUoggfWVx",
  "key3": "37YwHZBPpGTTNmkMJT7MnG7sUStcnaFcnDRxXF8hFgkawC67K6keKMiLXnEL6KKeSvmBGZhM8hKLwKzwU22KFsdB",
  "key4": "4kfteZkgyiJG2QxW4WaPSUYnMP4ty9YuAggCgsg2RtXa2v3GWReupefSqPase5VPBKKU32dJsWUuFG4YXsJF8Rqf",
  "key5": "4gC4i5mr3L8EYfXDB9dezrjWo91ETC65DPGMJabQuxgfm9pk4b3dhZMvYaCirhyPJ3VXYSK5p3MBacqXDMuraX7D",
  "key6": "4xmp72B8ByqsoM2FaKapJuGonjbjyBqDKrqspd4zWhxnPujYJgfBhyiTzXRPs5PVv5X9tj5sfy9GgZRkckfHgKCv",
  "key7": "53E1JSShmPX3HApty3XQeDxTVF3jQCJLVSE15FJMvjHrxieLF7fNga8vpGF5notmyJ4a76vzt44sKMUBSLAMmdZ1",
  "key8": "wBQfWGRRdJw7UFNCTzGjzacpKvFQiqDKqfWQmQUS92xkU4jDrkopCp7CNUCQKgG2enJjmQvpKaMaTDPbh18KBMk",
  "key9": "yPVQ655ofPcv4ZBK8dLbtMLua8ubedb2orFLFWeboY32R4hGGjFk9m8ovjvfZU4wsbdAH9auuSCkqKa6E4R7D7k",
  "key10": "5NFuLNT4ahyKAGvHXZePmWukVo1yQbxiMPbkv5dQLysiwPuXmgJ7UF4J7NC1d5x7nH6EDhbZnJjQW2zehSrS7n5U",
  "key11": "65FhJ6EfVgb41dSWD575mH7osyNyePH8VmnjTo4ZtdY9Hrv52aejm3cmAtzxT3BcRa8WCpz4wg7uhRV1ye98vMct",
  "key12": "4P5EDRzg2z1YUtDAAxSdqJmoyPwkEF1nj3kKspjQRtPDD81AifuWKMP4LGvWzyBk48fJtkqK4RaQtYUXYp4AADK7",
  "key13": "4UwDzrYYCU2pQMtV1ymrEqpSAgwiTpbhWfMh8wLceTGYk6BztsGs9p41yEYRmzB3TFX8dtaD7C8ny3qBm36aMic2",
  "key14": "438aWJiTx1HZipNsq1vV9S7GB39NhKTSMNhvSrLGhA6aeWWTjCXVKtRh66h5mhULiLuDma1Ez4no46j4NXRqnmTk",
  "key15": "3NwHuxiRwnPWyCvp3UKpu7dbe2BAPPUJpdVmXcQySa4uezX9rRHXUSqvD92NdkXbraWJN7ZaHNKpbHLZhYQtZ9mA",
  "key16": "1pVSjZ3Sbf9MuKouTM5A1xrZVB3XFDiw6BtMQi5jZKN6Mwomb5o2vAekVHy6CWeuwTE186uKswoSY9XrNpBzTc4",
  "key17": "5iLCEws9KZLWDnDF3CGi5BeKMta5XBXHTJK6a2221ByMXyDp1pj9syroBQLdHd7kDa7GTVKTTw96CFUsrQq9WrKw",
  "key18": "4Hy6VA5FvRsgFbY7jEwovQfUJfRZ1pgQbLpoWpjBCgXXZZDD9yWZW5gnSS9KTGTH9fTBAXe1fjUEudSiz2hwedMF",
  "key19": "5f1nZAA2mv5LKhMvuHkag49toUsPbgWPqWhyvG7eVuUc72bkhgGjhMkeaAceSRDvUYGuTsvTe1VDevxp8H9KN3bU",
  "key20": "NXdpHY8Q19FN15efEmPU9Bqzvo44XhKP28WMV1RqFgRvgeTKSZ1q6XtWK6da2Zc6ZmhtkyRvvh3kvsktbccxe7e",
  "key21": "4QAzxN9CDCpSh9fdZoJn2BS6uYqSHj2wB4yVoE1q8ixCU54QfNmUfdjTBKApjjhJ3aKJUi5q9x1njGNjPGyx2MHV",
  "key22": "634pK5ToaEmorJMhCYnoLBVXjYTSD4VaGTQaBp5y9muH2ySX44QZsgtjFn25TtjqRCLX6NMg3T13vGamrafBd7zM",
  "key23": "dfGKqfyKQ8yHnPKnhpN54hEdJ7zMS887bYe2C2a1ZZJEPCpP1rDinhpiLypFisqYfCbanAQUuPWnsL9kwRnx1eu",
  "key24": "UpLXLCW4k4UoZJX27rXpUN3VxNC41wqDaNUeWafHW5TdvnwxoHimnn1JCJcUYWbefZxx18wogeCEWsDqShodF2W",
  "key25": "3oepLnCxWruBUAujXyc5NGW6VLdGSY2MPmauDoHECxfy8domJvkNXMWCUEo73WTNYhmDxZJPAnuZziFbuRJthVXh",
  "key26": "5JVwDtsDNMVn7edYRkhFKY17mnZcUH5DNCHqpYqFYMkL2Esarj9dbB331EzkUKsLdFuLGgDEdTTqFj6nU538qFFj",
  "key27": "2wWDi6gH78EqqwBbHE8jmwG2ipwKWVSB9czVT1DJfY5r3mqsq4xRc4MDA6cQaiV7VGPuBEhZeqPmFPFRRwoqWymx"
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
