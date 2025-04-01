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
    "2YUEVCkvQouijRpQCvajpwfSbRkGaDh1hdKQSQhE1wJHjLL4469LazC4FAi1xacDTaHDjQoqPy977kGuaMULHroS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPUrube8GCS7zmaP56rrxzZ48vXhzYA7QFdr3NMq9xpAUP4wUo1kQ3Fz4WaZqnkT5frnynqhfxjhZxn7LTSWQfS",
  "key1": "5PSGUcyT3s7zBCgxs4cX8e3LCquvbHHzqABMSi1SC3EUKfMN8QM7zLr8cT7Ui8jn2YUCLJqppTKzDLaXj38vqeth",
  "key2": "29eAhfRCKSxY1Dy9E48sjcgYWFoJidiGNvJG8Rb8YY8rAgHZxe5Z98JTnewPpKAGES32TL6PT9KcuHPwFGXLupqm",
  "key3": "NpvFjtTK9yQXHkCUoyhu7db13hydkksESpZNWHBhSgMusHEBENBtAep237yU5HQvLQpQBtDqFGNhvKNFBGRyPEt",
  "key4": "4eorTnTNFPWo6fABV634E6q7w6SUsCEPusMvnPvpvUJkCW9bcpAbuvnJYusBKDR7knHARfCYevC2DSuDXjo5QYSL",
  "key5": "5jqwoiuKyeEW7S6ND5bpxCRFpNVDD45yx3M1gvKe1BBRhnN8Sr3NKTvDNTmUHBHdERcY6SR7vP7N9hXpxRhhBtzf",
  "key6": "5ErCsCKUFsjYEY5Nvn6mVmKYDm9VRBcrsfarUx6pGVoaWapDC3Sq69CPrp2ieJAvF5do85vkazQqb5usa7uUnC67",
  "key7": "4Lp9DdWmUwpeqZftRt13zADpaKWZ258xkiWqqX8q4WR4myPbhANKicFfAAH3ZWJ4vtpHQGMiudQn8aAWDAE6LFp2",
  "key8": "51vAUdrNJFbxqAPXMKENmK78LdLLwE7iFeU5cDU6EPc9hGqd2scnF1bGorsE9svbTMwA5wi47LwFQRv1gXaBdpuq",
  "key9": "4K3TCLJ2JzH4fRCsej29rMhWLZxxkkUfV6yjjv7b8xk5CG61ZsARjW7V6Z4KKfHDLcQTFHc7QWYxZia8cHUaDb2d",
  "key10": "3yt124tGRAU59YrJo9PYTQQfgqTzdYrKwc7h2RWhyqmeqeLGrVo7xLdFsyZLmFMaDntPft24tVW17hHUHSHcTxgH",
  "key11": "5gFZFXrnbXvCjRRafmaea5bBRXWBSRSfckgmLqCN3yhY4pUPadhqGeeoeC8D9x1eLuLoR6UbjAtnQeu8Rn9dHoEY",
  "key12": "5H91dTc5d9w1oNSuJS1NbQuecqbSY7t54gU9zgfiJB1LozGNJ8jgRNmu6wvHjrkfT6Jh11bqk3S6dZNcSMFhZEkC",
  "key13": "QNsjPyNByTYt5zaGD2vMNuhGXRbHUebXhEjTFerdMXAjxVAifUcAeMsU4mAmfMjR5bTkvSb8yL6TRa5Z8PtjNFh",
  "key14": "53rE3RuoD7KriHQ3w9YQp8no2dQ7sC5jeXqjQ14d5ocVBJTC6Ds6gc8CABerapNuwaj6MjvQi7grxotSqZrL9rNA",
  "key15": "Lh6mWqMaD3RQtyHLkPsYTSK2H7wKv9PmqD5gywRLfx4v9HhsPHgRVSm1qcD7yyTd44B5aVESVR6CVdGSK1gVhXk",
  "key16": "21H9DnSCuykwVTEammn2yKKaBGoAi7L5mBYy6onh7ChjBdbkSNhnKgoeshri8RJRGpwEXPSnQp2ziyDTFYZNxoV9",
  "key17": "2GATCZtY3VB2LCQXk9Jf5AU29GogG8CxS9S62CHijcHGPrJgLo6TP1LGEXWk6ZRyMheTEF5ziM88aKKCSNSA8LgS",
  "key18": "5vZ5wtntbpQouVyigHwJ52mxtX2Q9RJFXYaLRhbWCGuYTVDPxsTwy95xehRNx9MnmgXibXRFBuLG4dxfrF6mzXgE",
  "key19": "3Z773XqfU1cMq86b7VVjYTg4oUeVFGDYiq8qfo5YFKYU4V4ikosxDaZyhB2aZyHoecKhaWXbFAEHd9LEXjhfUCn5",
  "key20": "5KcNXTdNgkovsbFa4sktUFbGnoQ7MDKmtcPss5hcVE7XCWn6dRtY4fDjzR4ahasks9pFJ234sffb3PvsgRWZKqN4",
  "key21": "47SX5Y5FLMMiw98XNucWkrJfLaKZYtLyaQNV4Rd9EpiqVQNTtAwrtCe91rXRihtD7gRGjkSZkUWN3oBeBXzBV9uf",
  "key22": "2dYbFBPp6tUZ1Gt4181GhMsg43ozbgFeu5ipJMuVJNX3ksRQDgL9jtxAgAJZiMnwcQXDTuJAsQdWUjeqm5ss4Cmd",
  "key23": "2qzMHdJV8ZjUHjYdo67W1hb6n6LAqER1ZVPB8KpDrHC4Xmf5kV4QBgC4Uzq3XoQWbK9tFSqoGYZpYKMrPiY1mvgE",
  "key24": "jjr79QZR94MAUPaxTiDjCeUQafARdAF5XKjJePZqaqbqo8xU9Coae2qm4ca65uyJVsutwHD3Ai7TeSFi6GXcsrd",
  "key25": "5ffH4bNDZVnKQk9Rdp3GKSni6Az3yTTGzEiiJnbK9oUPRst2wGwJFxxZmv52BSDXj29zAaGHZ2TRwhghNTefD3Na"
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
