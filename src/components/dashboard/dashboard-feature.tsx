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
    "3Ntdw27i7wiJpbkHgKDf7fymc12wVMHm7sJ9tSc5Zt48Lz11PJ18drnAD55xheafuKVTCQ5Dg5z4RkgFiE5fZjYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DngJEobABkfsvNCiW58ayoQvJUdSVJ6haJrM39mmKAD6Phg2ALAMCJRA4CjYCdUAUkXbNeWkEacW6jh6fNpcocq",
  "key1": "3p7eQ6Rz8hXweZX3MJgYviLk9EYtHgqFUHGcoPktT3QKLx7WNo4cFoYpuHyf7nqAMMqbeCqxk9E57yp2xMQQ7dsr",
  "key2": "3Uo49xMdXU6W18ssPypszF66uKssahLymaSFsPBpBy22tMHdYpyzxxnkKWthzxPWfYv395UmNJKv5Y2nWh7u3NTa",
  "key3": "4zWWm7hSXgNHTx45PJC6L2hzFLyTXKkwntRtRqjqt5uMfWKhayNTYmpUqRQ29BLHzXnPW8UGCxPQwgbU4K2x5TFC",
  "key4": "4HkuNrjMirjUh7H6yS84XAe3cxazxtXSkyHX2gkpKMi45N3ZRWScyXYKZgCRD2UKoLrfZP53G1NnBa9b1hyBHTBS",
  "key5": "2DVRaFzZP1Ge1sHSPKjdNixtTKRGnAbj2u433HxwZ6E61HyCWtfbV4VYwkPgvGAFPQnkmhfRZcgMTt1CZc6FWFs3",
  "key6": "2trLvH9SR9mEtjMJo4CrQw74bGCJ8Hrn7Tem2AJ3opGrqiFr4webk8bj9Rj9XLUc1LKKKAZFM978GGZ3UFqghSnP",
  "key7": "59U7HWJwTCWf87Exmej6MULysZV1NosVDL58GfrSjoVga5zgCTaCoUER9j1iFHPEzmp3EycpPk5wHtm6LCbhiWE",
  "key8": "qpW3TwvwRCToKMqk3rxHJFzveQaxBprVr7gh3QzwrC2T2edDSyU5soSqpqAy3xbFDUSSHTjXBVv4PdHR5rK1L9Z",
  "key9": "VXmRfwzMYaK7HkKPYuM5mhiY22tVTTJ23SVx1dBnF6eA3otYoQdTpJ2FtPKSkyvZD7NW7be8Dahcj1psCq16g4r",
  "key10": "5LpQHDyundDdETcs7D9RokNP4HMas5xU8qAZoWoiKNjUbJPSNQj79bqF5cMnyGNoefm4R8HbN3FUC8PGnep8CQAh",
  "key11": "45AkBoRaH6NNYmT52rgqQZwvd3KDgCv7fFq5X7dZo34UN2jrXpT7PrENzESknvNJY2rcbnqDvYbcnqmxSxpHvJbM",
  "key12": "4CGBXmA8Rqnu7gHpecCfF5xFWYt7dmSdLRU8jJcgJqcFvwAbvi15zF7otXnTsKCm7Fs9qr5BEuSuPHj1gx1hxa5t",
  "key13": "2m1gVhccaLuKg1SkeCKZ9zyfUZtNoQPfNeu8Ho9Ke2CCKDiE7arkfJbZLLD1YtQQVYLHZ9oZ1h7rdjZmKXkwG8FG",
  "key14": "4qF5coaHjEf69rmYdseWmwW4qPQBcVyPg2WhHoJ4qkUEXqSGb8rMEFDgSwoxH875KKwUNzpLFrjVLoiBMAgAAkJB",
  "key15": "3KAmvHnhjbE2S9oL4aB5Na2ZyfdteJhJgE8K7D4LggtrhHwKgH6uaVxFT9WCV2tGthvGwcR7xUaNS9nFEAo4zRpr",
  "key16": "sCwKYFkvFc2NksgesqxE8oPWTYf5g8sza7GaALeQsKGesgmMFbUGaJnW9QYVgEddUFGM5MsT1QkCwXWRWV2TT7k",
  "key17": "2tVsWxd1AcRJ6LWj4iznFBaEmpsjdgwVg9hom41uWr1dwhR2RzioL8MX61bFwkoSjHZG8j6M3MKbVyxAeA88etnY",
  "key18": "4qVtmJbn4Zgp97n9Ec2DqQ6kJSDnxdhAUdU4gyvdQEjvofdJkDftoS5Fdd8JEcCitvgD5B9tQ4tmL25vX1VYUE3T",
  "key19": "4L9QSNr87nkxme7Wtq3JXF7bgNY7yCPNxcjChRrxKQgz63hmvVGZkyoUiBygAQaF9UPU4oLJsKbNyMc8Dt792dYy",
  "key20": "2xcNUZAuF5dcQ8vWgijMYVDcMDgCH2pKqqKYyhvXbMX5DhgojPWJtpx9RT6TuRwMBLUonsqiNXy5zyBRf9bpjSGx",
  "key21": "2TF7nGtCmKQLT1j8g6vfbmmzmrCTNe94b9TRnJytmWXWr6NBPfi1tjQYxpJABeQ1HkzM1jgLCSxqYu9riqEAkPF1",
  "key22": "jv4po282tXQKGsJDx1QUh7PQxfH18SnCwDgYphgE86mLY1fodBxYXCNY8LwS4PsQkqZdvgtkAsYVzxm5GwcdUGa",
  "key23": "4jMy8CH85RJMhmdkkaxw3Vp8RvFvJheSVkSyCJ2ZyQNm5fpErumYqvDuirSerhDVvb1mcd1ECF3nc6QGbzjGT5ab",
  "key24": "4oyooRT4SA4V4SfyafnV692PTmAvUBai5zuTDrnLRiVWbr2WjQkwpZKQauAUd7i4k1QkmFnnxZHfW6RC3nSx7DWN",
  "key25": "TULZbwkqdnunZriGt8pdvjHSRpX1JVxsqvamM5uY3RxsBbP9NTq1epErp7umr4BvUnn8JxaAmgBXcdchgCSQ3p7"
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
