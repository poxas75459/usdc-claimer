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
    "4B7QiRf1NGTL2wZXxPN729zAkPyzSWGvFNMei23nZVJSDR8rNiEjvSVV7cS7byaBCvMdogdbfopdLySngtXmmCbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFzrERDHcmhk3VouDxvEN7dzn2g9vm9kKTB4EzvDNkwP9XiDJTn3HDbcNnkbYBUdb7SHYNUh7noA3UARarqZrAR",
  "key1": "24tVTh5gr6X1DvoMTFv856PRR1P6nuoNfVVpRyGiheaN34hAae2aiPQS6BKFodfRJQXATsuCrrursns2iJMjCvaY",
  "key2": "3DknqUmm8e2QP2B1vRBnVZg6dTwjERqehbNaMBFKrmH2UsbPC53rHquMHDaCLPbymgBBYGxVimTisCxB8HhnUv5c",
  "key3": "oC9bMXr1Ggx98XMMgw7o5jB9mjxJ7M5HxE7Sd5SmuCF2KFxCuMLFQR7VaPfT9kSq1oN66r9LZvCFftyBbp3Krmm",
  "key4": "2eF2GTSfSWz5et6idhctBM4Q7qaxQs1W8hwzxsHCwgfsweQ9Bfe1Uhh6WWSytN77QaRCFeCRRZ3bf8Ej7D5En1Gp",
  "key5": "oKT88REG54DHJCGuanGjo4FQRpYGYpTVVeQrt4fXS9rhpeRGSHD6BZXxiikev5VT3cfioBiH6py33HhmtDB6vze",
  "key6": "5mNj4qYDWuDM8B6RQy2pZG7Eo1MZWnjpy9utXYoCPQWzZ6ZWfM1Jz5v95ZqvhKLjpsZTXCUCAjPu4u1GXfU1x94C",
  "key7": "5EqdEKBcw513Bwd8doCRMKEPL6pkTp1BHn26cpB1DHaxX1ihG7VPuYota4p1PCGjxVVrTeLAvS17qWyihWSK5R5N",
  "key8": "37kU1BKBR4cbUoTqWxYq8d8GEwtpGZ4sCsPcvT11j8v6pFXz7BtxT4QgFBXEtKTvNeZcRvRPLxJbrf9KzzFTxrAU",
  "key9": "3qU14iD4hC2Pe1sBi2beA2cZ7MdY3ji5xzHJRXnEMsDzEb6ASWFq3ownTMaEB3iJNGaNWPLvX6Z1PswFbRcZtE4S",
  "key10": "d58DJf2PViZp9zfcGh6Cbc991WMf8quU2RQVNRvccx7gVedx4rbAcuJVX821WDe694PpUSmaVRUcWRmNimVeMPm",
  "key11": "3UAp2KEByfHv5tfxNMwTTqdu6DDrDs6oDQhqbCzRzMu1FZRrkFs9dUMgB1WWjZA6AFw7hX2iEG8S7HVuxrCpt6rp",
  "key12": "4tjxPyKRPd92uV5VYx2rF8LS2AQTU8BCUVWu8XbiYmxWxhGvZo7UdDSbBXrArAFSdm77pdBoL23SD2UoESAy99S3",
  "key13": "2Htc49NzSmJkjKGPyUWsE5WtMdk1kVMq9hSK3aLKHRgRJjw5pKVyxShKnLW6uwu5MPCStGqwXoSohnFbG7as3vfT",
  "key14": "4mAsu7ER2raYQTC34em98jbGtRwnqqLnc7BeWBNDnzsSkPVHAMHvinhbygz2MBzFBtWTv7qCTvpsSNWnHb6yLc8p",
  "key15": "EsEEjJBjgJMmddNpGb1C5YKyczoA1UMSzenbQ63kjqTGBPbh4KKEohg2yZYs8f3BZzfPo8NPngBiWEF5toajH17",
  "key16": "rEak3GT2eVVmckkoJrkKNpDE9oz4se6yZDGNknugwbYanYomwXSgYR2Mo33AoxwWEoKi6wFt7d6HfQSnZbooGdJ",
  "key17": "5k4yAYSVZBzbVVpT4DZxZFCsmvt8SGKuzaRX5taPuVZo6gdpM9dLrgtwfLHrxJ8jNf22ZRMH94bxPypbndnhEeSu",
  "key18": "281ZkdyyxAfVqmMZY3qpCHgdPQ9ei9Vafw2qtcsTvRND2PwyDrB7M8VWCvywT3CKZ44DHedFjrWRzUNrhpTmTgY9",
  "key19": "5knzTrZuMdjnAsnn1AKMo3gu1Wuz1p1MnQDeEr4seZM1PjRtDgcSYZYpYjPuFy3ofMehsf2TT1FZuuX9wDiKuy3x",
  "key20": "2zkjuMcGE6bbD3g6mfErJY9v5vzKgR3H2xLSRWb92UXqn3kUUuGFQzUBmRMiiQHwEbhWuMfY3Sh7Sqeyeb2LPWx2",
  "key21": "22XYUspPZUpAyjvjdKmByNkPq9Ccqze45rsJqSxQxvX73ENckc5fcgbzuceMtkiAwTdno9i24mo9wEoJ6AZms5Qd",
  "key22": "3xMgKJ4s235KACq7W7Fm1uo5rgXC2tc9SuGP1DnKSGbCWXiW8gMmrvZ8LWrHMgVmAWkRVhNpvUhLJiEyTkFXS3KN",
  "key23": "5jx2qdJoonuFZFi2JHR2NLez8UiZGST7WLKfdH5LCsrRg6pKPo9Ezpq3B8jaAYDZNHWoMJnMz7bJPR1Me8A2ik9t",
  "key24": "2mkQhcb9VPjmCg7eoMLXHww9Qpw9EA88BiMPxLZGbnCEppiPiguyTBejq1xF9CJwqorT58BJYKQnnQnspJ1WLFCS",
  "key25": "2xWKrR6Sq5QeMQjb51xbx1nbwNPgm2aF9w2eVhWubN6ESNQi1TSnCWw1ZD6A4gqyRGQFj9jxkGU9svh1cNVnViGZ",
  "key26": "3tomRvj2rHfnkdwMUGXhqSwz2neXH4ghJaHNgUn7oGwKwqv1wb7zNajmQjKKJ3T2DTNMEuTzYjvf4iDipPaQqa3M",
  "key27": "2cKV75Vphb6KTCdWFHRURtxUQrj9x3hXCP2L7nW5Tj4LWbhozLag2k5E3WWuKqyZDpxLXC8xtwYb89tvcr38eyVc",
  "key28": "4Qk1nazYFALn9pKRdftbNv6Wko9W9YJPWethCFL6MANscNK45VmkUDhhHZUgJGnrJs6ePuuNKbsJBwaAvUnxZ7yr",
  "key29": "4d3u2v6AxwXkshxPBnjhMyJfXyfqWKDuMovxypkNg8iTSdNXNHuDK1osbrCx2c3LhQBSqpKyF8F4riZprh2vtxyg",
  "key30": "4evRydHBTB4TK389HAnaqsPWhHsF2hzzoL9aVAdGLCi3kjbxt8MDMzNXYoyY8j7hC73xbSCBFwN1Sf5GrFWAiiev",
  "key31": "2icAhX2ngAxXxbpcxKP1rmA2FPwAGXtaCf9C8P77Y7JTgXdtdPxBrXNQ9vK3hiV77f767sto9ndXr9sM1NXLtS3j",
  "key32": "4yiaSj1VmYwn2eVBRwScc2cNkYbFotWgUGzu1VKheriHS36DztSiNDxujUsWLDQVeMDiYqEnAkShksCP9TZmsrpj",
  "key33": "5wZtVrWLHoB4VWuh5Uz4FZqVgcAiYtVw1cAWj2DpceScqLgG9TSdgeNpzr55L7JJw67nfA17hypPVHH1qsB1bzPh"
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
