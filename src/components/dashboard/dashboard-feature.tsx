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
    "3hDR55G2emkhNhNtWbPXeWvDpY1jzN8fFyziYRGZ7Z8esMGfPR56ee8TkNbrEfJgDCqAHjEdStASiVmjh762h2pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SgfWDxdcKNRM3aHc6xTzw4CqYuoSbtz4RKVjByoYWPsbshySabqSF3ftk37A4UCkGjfrL9d9kKKeJ19VbJGaJ4E",
  "key1": "2b4ump5ZLoEBhwStoYuMZBnYzvbs2mbfn35JcRzDfHsnYj1eRCFptmgfKrpDLnrntCRbvhvY5idN7EkFbUAhHhzR",
  "key2": "2xirEh7LbZCSx5z8hnxjConrZ2XBdyeANmNnAdFKnQrYQaiKvMQyUT1ssmVhbAXYzoJeQAe3vAKjpUcssGjG4A2N",
  "key3": "7vpfGiSiXrg4DhigaMnJ8kr4P1C4Vj7zgawLFJGKeR8Te9PrdHxVeVvDysjLFYvbqLbNF8pUFBW2YtcEpH3GL8h",
  "key4": "38uuLGiuHcGeLHNcgJaHi4BYBZKk3bsyo5D1NEEUJsfsbP54P4otDx1137Yb53hM2BteHvDSMUW78BMZpP7MX6oL",
  "key5": "4vanCvmnvCkkZcSMAbey5WzQbYSjr58pLVEKtV1CV7Pq1djFdsszb9euYnfgmuCSVrYwmSKJoqibQgn5Ua8oQmy3",
  "key6": "5nZDxx5ffAxdYAi8NN7KzednjgNa69VLiFM3fiEfz1SzS6pguG9EJ3GXHEz3zDE1XWNcEj8JgUACG51k2GaZRjVg",
  "key7": "3b4deSRi4B971oNNSELeMLp18jn6sy62dCEkqAGABPa3i2TYWyTgGvGCUqb7utgqZ5xazGTqw2jo7sBHzAddPNWQ",
  "key8": "5qf2bcXLrEG8rMfmdTE17X2kKBp8W23SZE2C8K9LK3ZUvnbrQGMt1PZL67741nC5DVxP8aFHMmUiWzVX33btsmVV",
  "key9": "2B9zPq3oGggPLGL4P2u88zHEemXFZmt3JufmzPXMXtB2PggDLEn7EXKaXJ8NPEenVctDydDGmyfqbzbaeJBQxbnN",
  "key10": "46YZ6jJkZVnpgvPnWu6uxXMgVv5EAazbeHJaDpjYbB3G2sPe4EGvAgcHv1ivKvYwz312FjHHjBy7TGnwm8SquYMp",
  "key11": "VzmYCkLXMA2iXKkCee5F83zAgptuodxCHKQSZZHJm2KuVaohM7uHJkwrgBgmw8Aew9EPxuBJYNfWrEi2RJoHCY1",
  "key12": "2p3NcEBU2ZW1wFZepgEZQza7oCefprxqdpD5EATwWJBjzAjS3hdHAqWf2RDt1gXQjSJuYm2yAmky8HFuwvAMyKiw",
  "key13": "4viu8oBAfYWHFJt5LrPkVKULdZLnZrbJqpcVy7TQFgH6QdgbEm1xstrAQUNrK9B6CHYWkWjy55tSRAsGm2cUPV7A",
  "key14": "gpcahEPJ8Sz2HxrxXadAzfzY8qXPBcqf4msAGXi4bASo6rDssMBGcnBK2c81BoJTDQWCUJsEYcL7m3K71EDfRxT",
  "key15": "374dGSzcUZJFfunbLTc8ByRrJCx8dPXNV6Tvc5KeWxJpfihzYQJbUDSqpEas1VG6quJZfhb6J8Gmtv54TJAWP7fQ",
  "key16": "CUBfJxgGFnrJdpe7J9AAeQ7Ja8JR1Tq6WSDdjGsYVQwtKCdpuVAZTb2q8Dpnakw8RrXSyeUnabGuChnt2vKxJpY",
  "key17": "xDHDcack3AGtLqpKTNUNVdsooi2TLGwjQhLSuhNTpCnhztDkRt9YrxQsLXUmFWHzfSAsT8o8na4C58a78Yhi3WA",
  "key18": "4KDezhJkU2yeeijvw98FPUGFABLx3r3t15a3nkEnRv5Uci1Y5agwS99E3sfyMpS5wPEX9BiqCQxJBFLtPhgoahEa",
  "key19": "3kFrfxMDpfMz5An1bJEEEod2FKUxo6k2kfCd3GcGLzZVi3cx5PF1mNRzqPSikX6Zf1V6e61R9qoW3cezzXC7iVd4",
  "key20": "RxUUpEKT6BEXAyioc7gJw4u82RTjqytrdXwaoowztxDvBruuZnWu9kbn5zJPZYwYSuqvSZbPu4nxzsaYXP6Bw6V",
  "key21": "5pCxHrsYGPQWHZqA3fT3v49NEkQDfrrPLh5KQ8FL9vGmiB5HoyAhJZfzAPdrU6txqMYgdxBsowwdrzhGT5wmg3S3",
  "key22": "c6BMhjLQukKtogbo3wMbEedhEUJMkVHtKpFTrrtGxr8p7gMmz4A1RG8o6qY1wCbwiFGvGVMTRkVUDWfGncDEDf4",
  "key23": "39HKcotEHidfniCqSWjvCRGz9NHNLCZqMEMVHEMyoFHsUoHTVQmXorX7vL3HHXMexQQ3JUAbod98ZiwZEJYXtRv7",
  "key24": "25WHfS12sTt4Fg5ymTAoEJRyXRRi3w3vYPx9k1vKXtRfabB54r6tnXuUDTQDnK4Wa4VDG3QYNqJPUeT6GmBP71tM",
  "key25": "SoX8otUMsEsg2diqMiGHvv9n45ENDnsJAZuQv5wRmVho1zqNQ1nu5956QpEJk4ZV6GhM8pv7jaGpgUnUVRiY411"
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
