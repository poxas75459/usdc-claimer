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
    "56qh3caTnmAPjRKRZro2jmihF6dTw2KY9YbTRHgg3BZGXASwZFT8Ct9uFLr6MioC22RDzDfpz4L1ScaNVdEuWrpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XhygujDCQCYCEAYL9JD9USBDoj5d4wVw5nJDsFL2HsyU8PuDFu1PCK7MVp1xKDshn4DE3UWRuwv3EH8fUqRjvsM",
  "key1": "2TP9Udp1MDynvmfVBkeA5qTwiZeWRzGN4cq1j5yNCMWDqQvB7nycCfdArVHDVowZ7avaQmjEWz5QiTxnf9yibkvb",
  "key2": "5uGFgk6dCnYCv67SMNcZuXB9UnhnVCmzRZSikJDMpFX64paW66HfnyRXzGdNKaF5ejZkRdkLs6ePTNtn174eDgQb",
  "key3": "5y5occ3nPQVHBivQ9HH78WzGof99P2xJuCSjFSMnaVw7H5ETp55XqtCrJNuaYfMJ95NeJj7ynfLS8fRRfRKDojZk",
  "key4": "2s9x4RqYkJCLy9DXmdG2Q74jeMrGPpMsssZkLwbrdR8e9pYMNbAzMANPTpCsJadGcWuMUzaw7AxeFtRqRSiAREDn",
  "key5": "24P1TWaPjSW2YWZJrwTxSLBz5L2ectd5qqFmkbH5C3oqu9msWTLAWF2AiZ2ZPh5N1RhyMxzCb1Y5uPAbxi63cwf2",
  "key6": "VAnzCxaL3saJADJvEX5Ma2R171qxM4iMGFBhL6aAKSZ2CG8i8wTpbdoiXonbuVvgtJwdAxx4GAG5CCyVWszp6Bm",
  "key7": "GvXe5sSVUbVLWjcqu8KUGnjBsad6XwwsFWDhXnziNn3o5jNvWsr6C5xj66sKVEJbS5MnhbZ9UDUHBjCQGcRYj95",
  "key8": "2BZ5YQ5cesDKD3cfHGD7zdt8AbU5Jyqm12sUsH9WohWUzc3KfciyPzoWSnEau7jRDP6eFibYGhFvuY2s7dh1MCy9",
  "key9": "5SQRbnpzvTJYRUkvUoWxmHBjz422HMznKF2nuo9B7npRDgzx9AFAkQDZaE892SvmMwhns4jNJds8cdY8w9oX28Cf",
  "key10": "4Xt3SmAe8ounPyvRBMKW8Wxm3LDo6a2Lj5Jh49DWv5Zh4hPMeKTFGmJLaLUW2tNGcr4aVuAk1oPU5jMsqZP1npQD",
  "key11": "2oKGjMaBVhH2QLAYVXxxhaeLGGb8u9Y5Huf3PKuxNVvHmSmuyCvRv4Kaxniqs48etYmEdL2dFFT6QWnGhepmZ5QS",
  "key12": "2iU7opwHMXsRTVRRRbuvdy2GQMh2Snm4SXwr5u5b5yKVKS8jYo1MSa7NET2xrhfy3RHxi4qxNmX7iJGEmPvMQhCj",
  "key13": "55UpHZxEqQscGWwB8ioJAierFCcHFtETCoYK3cmhuA7mARK9tft2E7MBXWjnFPUh7wugqdPLnD6QKbRbisbbaDty",
  "key14": "33w2Axjn1n9jhso1SoT2cAahyJB5QxiXtPB3uFkAaLF8v8ND9wViU13Eo9AA4vsXkDUB9ZF85E3M3dnuXocSUorF",
  "key15": "31yXVrp1ocNRB96kgMzPGyYqcbWHwaMxh7UBRq4ysA5Gpqtn8srFhgJjjzWfRraGouSmBtyvBBJrEHt6iBJRXWTL",
  "key16": "3rCRx7DRrNmB7AWX79hB54MWDiHr4hLSTMN1EQxVjy6gEFDDfqzXmAQuLsHevPgKkt8ocBqgo2YZQWk4yv2rqyGu",
  "key17": "2CXKcLa38VxdGwXYWcf2DKDp39psi4FjvzbbM5muEetDKNQawJbzqLbUkjXABXZ812EVFf27d8UQJ59dhPxkpUwz",
  "key18": "3xB4wHAhyopbzWFKTPqStwmdz9eqaHSFbh5JGLRKgRSkFWrxC3zJfSnaENw1rTkjoXY65GkAYAGkL9nU3KoH3LHc",
  "key19": "2XGVYDYCSB3iD5dTPcPCbwmsFnbULVtpHgNVMdvfehSDYKY7ET7FDrmJtf4UXCyQ3wifD3i36RgQRaRaxnGKehPZ",
  "key20": "dVDrYhJu76ySN74tqCRyNMfESVc9geijfg7wQhqwFgHRzmHESWx24qesv9MbyE1XpZv44YQVqXRMPG42aGd9wnH",
  "key21": "2X79nFHbwtd4mDt2s5DCU2e5fb9BraegbNuW1gmcqXYFtwGbnsbm464UZpoK67U24DRRQM7kaLGaJm41vHYXNjXa",
  "key22": "417hobrvVNUkZAMawcZtMWMEny4amLinmu4b8Sn3ipgmikaJP8bjK2RmzKL1MNJr5cjsZra88Nh5Nq5ZgUmJj4V3",
  "key23": "658SBfkKtmN1oeLZQg787CaQn1pnRX1zaFoCKRq6fW7u75FK3UCBY3dtd2TqKhMVtJy44QtSShgVCQFHDdCCKD4C",
  "key24": "3DwkonbW5EHeRRqt7cM9B4H2kRJAw6TbZQZ1azYnCGTUvvox2bWkxZstPhe7vutSnPHzt3FWKSAC6oxG3tfiTHjS"
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
