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
    "5TAWcfox7hiobKmBMzYyuf3AkZJRDCnc2dyZnQsxNriPenJo2Eec6cUSGpSQu1CP8T5hMkxLU2DbDGAYLdMAKrtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBP6iRvGez76W5CUwHZcPDUuYHeGrKLrs1oEWRSR9jH8s5RAyxFV8RmXE9r6i9C7qHPJ8Y4843euHZsoJjbSf6G",
  "key1": "2wXRGs9gxhUCDeJwMwrpWcTrRsGvxXKTyw5hYbmm3kdyLG27rP44wYspp2aEugYEYbMdJBhTLZ1BRDdMNsPcXe4A",
  "key2": "XT8udnSXZEKoKYdYZDBiLyPUwqxeDwzAeTirf3pAyZB2bt4JmXTZWvkjxtDueBJGqSRHznSeCRokPbUQ2GApwTW",
  "key3": "3wThKfHrt4mmvW6awRF2N7VJU9zAyS12swWp1EcGmb8dvUs73sb3BqeGBGz52v4PxSLDqX2zGEjV86nX43prtqAe",
  "key4": "3Q1kTMyfPr6CgSVfZ8yHvmC5uzfWz8TcYcRpMGs9GUNZJ3f6PmZ6zkgK3c9SC5z6Lmod5U3dMK6Cn97JNJcBM5hV",
  "key5": "2uh9ygDxsiAPediiND9Et4RXVz73iy3ryFvWL87Se1CGQLivFr84MRvUMZ1t9dXFuTUbCHvRFKC6q31yziekioG5",
  "key6": "2SwQCtbk3bDTBdJcQpSPAE9YBCwkZL6DT95dtDz3urZRs9S59ggk744mGseYXwMcDbhgnh4pGGLSHJFhNNR2nZsi",
  "key7": "451HMpWgN5udMdkCQr18uqkQeXRT8aZXXULBBqwvdhKVYfJtwnvzZsrrCUSpyxBbn3LqvhRVd7EdCRuwcHhwF6DY",
  "key8": "xo4bDvoXU3s3e3vTMXLe2kbRHv9huQQFT5vHMLhiqB1XXEqDf8B9DXCDdM4XcHhBUKtJHDrkjC99j1Xrfd7unEq",
  "key9": "2N2g1da7jPNooXoNqQBdSqXVjey3N6kSkZTwoX8NNoi3f8uQb9NjDNmx2CuCrC3t69ZETDzornEzrhi8KmtHfLZy",
  "key10": "5YbEj9ZYCVmmKsQ6qxu4mzm9SZdPeSTWNdaUyaisGXmM3UxWBLSFkzAu27RbQbur8piDHs6kvAAFKVN1giMQqpmP",
  "key11": "5M2U4RewtsTBB1LBMtTDWtTNc4NL36qxk6ZJBXUh4uaFjKhzwSChYq4wvoMnGc8NeD585LTDKVn2ezX6XEMbVvar",
  "key12": "5vJLGAT1vAWYscDtJzxVgzkGt3559aYLcr9C56koU3jZxuzU8GVmh3Mj3Dc6wDXRY7Vc1kSLk1Z1GLCzSzGK2mRf",
  "key13": "5YNnP2kik8mXKGjHtTmmURsPaqBdU8wbcXxgzMzg5dU1WaHiHkz4aer1LFeTa2RBrpEkBs7txf7wxZbMG57ni29U",
  "key14": "fwezPNLVEg3JTapcBwkZy7djrpahkZvEJGnhZwWSjuEhgaMXHRAzXd4wBTYWSBk2jUhMpGhqCB1JcvpwtW6QgWE",
  "key15": "4gFawU9WPPzqq51CMtrRFAraSHvffWPovcP9Dt8dQS3dfnPJ9qRaa2KpQ3YeeR7iDLG9cZZTg6juEQUCpXaBYUZo",
  "key16": "2cYWWrChZuUQXZymBSieqSN36RJVuc9XYEv4XTKtFb95tCt1sgzdJvqNJBhtV8FKLmDobJC2xKc27pTigeAuHDPe",
  "key17": "4v3kcdkHZVp6YKrpMBG5m5F65mvCBL3H1ZVL8Z387zGpq53q9Gzc4YMpKgtj8rCtRfp8SfFQqW9S49EEX6SyB7L4",
  "key18": "5yPGCHmMANZLV4mPBF7ZitMkUG4P956Lm8DRNKN2KqxQdn3LPHgSCYyGbEwi796VFSEvELGkKmHvwXZyzHXKb3P4",
  "key19": "5hq9ai7DNzksDKhXveEMPXzFSxkhpZJAHMCtBN3j7NVwoPm5TR1rQRtmvZPBUiAxVoccCz4Nk8aGXbr72mf3acSR",
  "key20": "8eF1JyTA7gs7sQMTXkCv87RhcDbWj2oGTnKAiBuS7qmJqR8xCADJsdHRwer1YptpRAzrrrkrdpK5QYRwWRMS9Uu",
  "key21": "5ECzd8d6GSD4tDP4d9fnrMkQ8aqtyyRRyKaLfZwfLMajGXJZazKdNufho74esuMSkZs2yRaTMmk7CJa7CW6YY334",
  "key22": "2Emxkkmf5XCYLyDQWT5AvQrPY6E1euAemC7WXjXXGiG8gk5j5NpQmTnVHWrqpdyhp8ZZKSMEfxz4niCtMMVGwpY1",
  "key23": "5tsTWEgpWmMo67j92BHtPQqosumtHJhGDS8wveXSXKze3ekynKnwGCdixD9Te3mcXAxaqiC7zm7HFNxNGK8fD1jZ",
  "key24": "56T2G8YAq8LBBCs1i2yVwBA9gWoowdcijqmaWVENYrDsgnH6PkYp236V2gugAmn4r79eV34tsFW9ucYtypURMyg5",
  "key25": "5qoaPruyAwLyVZGWurTbZSK93YuTYXwYTP6ihjsdx4s7FSH8iueU3CuagGVbBKW1hSaV3Ax3xQmHx3aPMtAcd6W4",
  "key26": "5Vc28T2mf1RGWAkd1HivrSNZisxP3ntDSTtGvamf6gBX3htaRVfUEw6pwvKpZyAkpwoctf3oapYMgd4eJydcLcC4",
  "key27": "4qZLUYSMMSGjYCc5WCh7pDpH7r1mcJHYrivseDGeaq9WPqAGB3ztvTq16eoE4QgGtXfiujLae6ayYmGT8hghatvR",
  "key28": "2W19E9oEzuxUztof3uuSes534H9SsRG4BTf3UoJgSRVvbLTeGtgz5wXzFjRjJzu2N7paxLzM3xyJ9rVYN3rXSmKm"
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
