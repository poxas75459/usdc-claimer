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
    "p6kLF5dJWneL7W6hd6bAodCVkwEY1jM8u6CQReMEkEedFi8Nb8NHTkWhZY5QUp7rHyPHBfHTkB2m5GxBiJ3TYfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bCKfgM996NM7aNrkHaXjQQ7PiX2eo9NisBUfnX4ZVhvFfig8K2PkaNMynXiU6FiACdwrwKv2EsxTqBvDmSgY7Sf",
  "key1": "2Q4fXCjtrruVkQxFTAZpGSzduG1akd6FK7BKFtX5CWWmomzxZQ5XxwWvEkEoQUheiLTBJGcjM89fq3jLmFFEtBt",
  "key2": "Ucp423WWua9iwBTbYyrhRiY4zWHY2dbUEkEcvT6sEJ11uJfzcG7NsrGK39zsHY8mjo1y6PWdG8Jmyocj2qCVYK4",
  "key3": "3FaUJgNtYbBmgPemv6W4pmUWhYfDH3bE1XXRHFGt56EwMfCsUHzwXUE2hb3SGhvPkgZKJqeR8EqQ7SYt6ZRaL7yP",
  "key4": "2pkep1Yy7aST3EctS3kbM6TnZFZkiyfeBdqA2jVo17tGPwxh7MtvkhycBbgCUFLXwYXFDkZo26N5fbcd24JkXQro",
  "key5": "FgQdWCXLdfhrfrpW9fJDVbwATQ5b2RSZGr1JhFiUgcDDenJm4GS7RW15eGsu5zJmXNms6bVuRviCq5guJm1pLmZ",
  "key6": "L4gw7UuyP9Awr82uLVkP2211QBQeXE6dRUuUcdXfasDGLBHBwWFgAP2L2M72WmXh2CrViPfCkhgzSQ6bEyaRfni",
  "key7": "uJ8ERi4XLgPqfwHLQb7x9Qef7zrFTRZgTR5oGr9VbEPyZnFwYXai5NaCRgfW4ykLco5CbdyC4LpqFEY7vjUbbBL",
  "key8": "2LBLXDr28kUsMYRXRfr3fsPMZsEm3UfeVbT8YNE4R8WKKro17T25QAENvRGYPP9vgpMBBqTsn5x8Bbi68XMX2UR8",
  "key9": "65t62QBWpR2pNrKZAMuCJV8xB9v4R9rkyZ4e53eYvdr3gQTcqqJ8UZWBYcuennCsVjNHGWQUWXzLcrVLeJDXrdkg",
  "key10": "5SRkRejN3AjSvaGSr3Af8wvUMPpeqmLrEQHp7EVkhezBuJfkj8UHZH5NVw37CXP6WuMkuqUywQHGfr4uHmiUsRxA",
  "key11": "5cqdpu36veV77Qkb6JWfftpBdzrM6V8NiScTNd12PbGdp86rXGw7djdbMvBJoSWdGZELLBhTLqaMgeHLM7gEQaCb",
  "key12": "5KcGnrfTtcudegySzeGSkopwHfBfuVoVixH2veeGtXyMKpYQLtjc3MxJDuQDyTNqFgeg7zcgJyBC6gU6YksuyU69",
  "key13": "4ZnfXzuWPurqj92HCfn5XLAoj1XN7DPh4SUSQHC71wBWC1kjgFzAn7xqQCehy28vG81GpXkrgSkj6yJZ1eczrESU",
  "key14": "5EU24uDb8RYTeC4FaFXKyywYZzAskydprLMqty6bFmXfmSeNefTyGj3UbMnDW715i43oTsVc7LXbdV5587MtPjLP",
  "key15": "5sGFaLzuMkGBrSFbJTuoSEP273Huk3LZwfjZLhoAQrajUB3eaP62KjwfPRKWQM5cF7z7wWBAD1DxYDmSYQyfmN5k",
  "key16": "5cgKw9EnMa8ZQsrrKYsBHYWeTh3sdNQ77Gb51eAkz766JcvbV1fHMvf6Gy5X88Zh7XEoU4gvzJryTDvbc84SYQ54",
  "key17": "FbuS3iNz3oMRXXYYmYmW9Ugo7n33unD2UzSKYxPumzH11QoMc4rZ9CFUX1dfBj1yMnRj5srUgdfiRnBYytNivEn",
  "key18": "YxuLutmY2oKQBMEtb1aZFvT2MyYNV6fHijf9qgb6RHm1hDTbzEX4dLKLFyj6DWPAoUsRV72FPZTx7LaRJcfRspR",
  "key19": "2Njc8nCiL8jrP8gHXK8AgRkMrvAoDAGX3h4Ma6gGguT2DfvRJ4xkrzjgyBT3dfn9KMQkALvRC4dp7yL3tZ2GrY33",
  "key20": "4XmKdJwGFHTXWH4JRS1KvqKwSV9oCGb9ZebCxeZVDymL3S7Hqrc5dPVzkmHhHvYWuMHtYsMnDHTWZWnozTvVa6zR",
  "key21": "3aUVMzz666i9M61DC1bpGPW8SpPpZokb9rBepgzufgVzZFgFE1WV8Gxe8b5W1GFnGzvcA9oRp3PCbyKgdAvtropM",
  "key22": "2vxXvt1KNcPHAkjBsqRveAHs8bRUso32TYMpJPYgX4wqc4HpCCYZkFnEV2TB1BJSuhnkuZwoz5KibqQebMdssYmJ",
  "key23": "3q8iHyKs9B6Gd67pZkGsraTu4jwGwrSL9q5LA6ygDkCyKhPfTHRLk4cHEEm4TMCbx8MJFikDuMmKnqYqW1r8tGuw",
  "key24": "VrLwRW3eM82nAXLhveJMmU4QHAG9JVWnWBvTREKrKqJ9ENpncyCtpx4992wen83gcJhAgRTzHiVmK4nkxK4NojG",
  "key25": "5bCYWSiUArKu34X2HBwMqUEVEHRcmDxa5SqtLTnuUZLzEuVvo57vzqX6DmVfkbbqMwhrAQr3JSShshnbQWcVjawe",
  "key26": "3vHKtWNbArs77PbdWjUbPfXXUtQi857YyoBWr5DVHRkN6xZuYyWcWKc9cZhbPXc9Q3a5TUwA9LTp2fpCZRDdFikk",
  "key27": "3ka2bDyuVqaQuCQ2P9vdQAY96kP6DgukaSTFBT3pPkGAEGXYLV4wS4n46v4qiFz31dEiyyGPRZAx1vCsUatT72dk",
  "key28": "3FyZjCSoozmRF9ez73gyBKQYXvAfixvUu38AQwyaucFk5Fm5YSVeubTDUYqg6oG66J5vzQHmQwowJRQxJn1MJKgm",
  "key29": "4x3xSfwFB4t8uAL19Nu412NSuwPeXsToUWQFHBii59zBo37Qbtfg8ELymetkpsbUm2yJTDwQbCq7SYKuRpTrrgFu"
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
