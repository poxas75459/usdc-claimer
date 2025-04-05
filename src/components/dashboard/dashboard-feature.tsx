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
    "66hw32pY1Q7PXtLFgCEUwnAVjQJ5r8QJnRKTmoNKuWHKrCDDByMGKZefaZvHbNY76RtJcfSF4qbryRJdpHYmJKTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMfBkiiAp289w1p85g3phvzDG1Hoan57NgpwzUHrQ7pW8GnSWTPBKSRotGb7ALj7sJPtUMKRoBnNEGrLfmEdPSK",
  "key1": "25jR9iHm2XhUaoHMvrmTnqQivnFisqRUJihaQahYFpiSt54gjbXfpW2bergART6GyQMiFynukiJ3XuHPehJ7i49y",
  "key2": "3i8PhEqZwMxLTBhFQoCV9CNNeJ3homknNaUu2KWXpVHANK4N6ZqUsf1AM6g16X6gfjbHGjHKHUq9KMp3SrowmQSq",
  "key3": "3D9CY2F5UNc24D8rznNCUnw5d24CvoV65Zpua7c55asWvDgTgSVJDCDbeCDWMC59iCDTgTkAnDjz798bJwuoSjfj",
  "key4": "5Sujp1hFh1aeyy4jF4s7nXJXEhXemwxbw54Aix8gRH2K6VsP4zBfiq6c3MetEuSu7uKGxSg16kUotU392ADrugCv",
  "key5": "xKybXnqiD7PczaMMmBBYZpvs1ZTsMuFarWNu4NakHV3zd7udAKAALn8ubcyrXqVxtwbCkSckBh3k4WCwJ6uhZPd",
  "key6": "5P5BBYaKo4mMMEjKWjiPUbVfR6DA5emoFYaDUE8kHB8vAfhVYKDrAW2WRYzH6mRyHZ6GSvPgKUUZYpfxAPN5ZZ4d",
  "key7": "63vV7KMbDJnVPEfvSRJMg8TGgD8u5pLJgJsv58RwWgwomsKHTgZypNKUXv4WKZT63vpAX3HfzcWoNwBZQCB5Sk3R",
  "key8": "21nFDSwk1M95kNAsKEmvEYnbBJFeeXS4C6BpwDiZN5xtvUqq54SCPBQJBisiz5NCXZSVChYGeVmoT71PMAru4Lw4",
  "key9": "5jdnWRheaZVhe27TdT33ijZBQYYZddvkZA9tzgDuQsYG6YCvDCr67YWPTHecWrfESoRjGU4w5ihh3pPYCB5AHa6W",
  "key10": "2uHXw3VVwWvZMKxYjNNjAKyj21K83UGmnnz4HEhicpFZSaGv57x5NP9vzSWybj9cgFixEwiWyhnuvgKMNG8fp6kt",
  "key11": "3SS5kaWjLkci2sH2zQgTcjh1NAhxiwKV2crebJghpyb8VN7SuQ6hjwrWiwBSDRGj4gzJpeKbGrX9SzaFbmhYjDP6",
  "key12": "tZkxovRXxxCsw6SmgNK9fifFSh9EYkR5j6JNVRJVQjudxpV3xFxrYF4yHLqTMADyBQgV8zwhtpfsrDj8HnCnAsA",
  "key13": "5LANXW51jPWbno5PH6hzKjUii8bbeWz72kFT6kXGCBUp3VLs1NLteg3AZ6jkNF13m6uMMTiU4Vv8o7eSPX44NEH5",
  "key14": "1H31LzS2kUocfxsN1F2AfxcnPAfp3YnMhBJxNyoFdQJVBwfs1dMpBqbDk7aVvvP9LQY6f5egW3mrL9wkAhJYYch",
  "key15": "3JJazzDy1YLD1KdweRhXtkyUnMkmBy6tfgxRHJ6cKwvLiHVknHiGkaufyJfiNiuWooPC6noA8eEeZuwb16affrgZ",
  "key16": "yR86Hk8isssEyNR5eZTNcFgnUajNvKUFnSKXbRVa9vGibujTEiuR1r7w2SPK8MM3eDbea3KQbyHTs2DWzx2MmED",
  "key17": "3PWf1XVPEDqypjGDKN4BJa247P8zUt2A2V5AB5hwCX67DzfGCPk2XXe9ySMxv3NJVtTjKJMzjwPJvZRXTrQszczf",
  "key18": "65WGfEeqjGnrt5xiwS7pMgKMhU25fJh6sJEAnNccMy5t6e3vbVBp6JHTpSaUSVe3fysYicskJq9PBBEfc9z5yi8F",
  "key19": "5gxpRukAcEEnP9pe9ZqgrKDgpaW4TWcEeJY9tyrresAqb5rt5PeQtmP1BMpePrQzyVJD9Me6EcM1xRspnYCkZ3Fp",
  "key20": "3BZGAnowxPakULB6xu519oHxriz6ATVgAg6baSqkqxhgVHyg2JaMVVBArACJGjg5KbcQAQLQ7HiBJGFAVzh8NnEp",
  "key21": "2tE3Jd3NJnDgJarvF5gCbZRTuhzFbtAtoVQDsv7u7FRHL9bnuawr4FztUZEy5MphDy5bXtsSC3v3XAwhxLbwJvJd",
  "key22": "4DeizgLd3xnBoW5vbr8eyQSyhK8zYw91n1c2EEJmrwvZzvftuZJphj8c98wwkaAHrYZh4mhYc9kui5RtQGPCLebA",
  "key23": "3g9PKC8Mu1YmGHksyiBLvTxVx4Kr1FhbELsEPz1iUaAJo4hepxbx6MabTVjJqJoMf41uyaYcSY6faL1h7rEwKivQ",
  "key24": "5MZ5NBDGcBZiA2EZG5dzAyjyWmtbiXzRMxVu8KnkEdwaaB4u375irc6HcEApwD3j2T8UbXKhsXe4PnLYNgQbuPAq",
  "key25": "5XTtdiraY2sM7TdMhvMCZkmGtR51gxHCpMNMgFBQ9YE5RqTbJKeiBdgj3WUYbDkjcAqrVxjtoSX3s7mxmDHoq2wC",
  "key26": "4sif9TnMQXmdFVNmxzzue6C73L1LmFBeKxxq159DNqQYAL9FQWc6Qr8WhshVwoDKyQMZyN462MRmcE7DWDhVdP7S"
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
