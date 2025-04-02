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
    "48XB8mfQSXYBomExEv4bTvCYAMLjMHnQwqJJwDmC7SBMuYS8atatGtevcQoijkHZq4heorjbfTTQ8KjSQSYjo8YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ee8HShBnsDA6DN2tYpAKK4rYKw55s1gNZ4cVsziLJ4x98WVhcQoEYfUk4QB6wxPuFpcimvYwmUeFi8GhvCfgrAR",
  "key1": "3RkC5Z3HCEqGksYuNd8rW5fhDAzBGdSZajoysNp9dhUVa6MXutTLQ7AavcWDbXfTCypQBYdGrUZX6B7ao2GVq715",
  "key2": "5mwKZgZ45nYe4guxJwc1QuJ7yDJWrAm1yRWNndCVAFgWerKFG6o3ihwqzPLFPqRjA2Vwac4tknyqRrbxMyvFbZKY",
  "key3": "4CdiY2Mo5rR9jZdTdhjCJUXKzPqKiV9D1gaxhKBe7WEfgvtfq1EjBGcyXBj5ux8tD54tS8hHpjR3Hc3zv2SUVywY",
  "key4": "4P4tKhRbpk9AkDFdKeWft2FLVt38EzFVPoZHvWSiErpvAyaYqWiF1o7Jj1yYrk2KcGQW7LTG4dScbEBYdF34Z7u6",
  "key5": "4GwqpZF1RcD4bHfJeL1bWbcwz1sDoWB4dwV7ymdpsigViXRBcTGQc2VkehhTpPu4A4WLqhATugXdAZXPhtKWRyf9",
  "key6": "2buYwp8visQXtZ9H1eC1NVc3A4Rtm4Z2AtYAqTaNfYedunBSV36VVeutKcQ1KN39UsjZmr6qXmVhANAUXD1PCQMg",
  "key7": "5Ska1iUtTYyFztRdPhdpBrReKG5VHHWRT4SkrM5JxZbxtFjWKcQWeZdhwCrF7MZg2z56jQZTBEinU1CFnHvA2NST",
  "key8": "61kbyd5dioDPQgTGWR6yDMM1ew8ZfKB63HzXv138hTEEPahpcYoPw4AmV5LfjCBGdB9Xj2CYhp3sY7Fc1Uxs5PRh",
  "key9": "5dS8dx5ERFeWXus6YRmQ7YHSUpqeewbL9TcFwaAXy43bCC5XR81DXnb4Vd5EpD2NqFNBSMdq6mSEYpGh5sAsv96j",
  "key10": "3sHmr7gStfMVSp91JRJaHYoE9zi49FqPZcc4Bd4rvUPiUP8qrrPt8A1iqcMCKRCu4G3AMb8LC9SqFs8m6yXKDnCc",
  "key11": "61bijDJkNkdpzd95K3CuiBXKFLByyB8BR9uhpaQJEcD7D5xT6N6bDj3DDx4qTm15meVbRAc6HUqx19TAsgL1cngG",
  "key12": "5q6o1urWM6Vjy3f3aK1Gaa4a4JPbac4VJejvf8CrLemJxQcEmutpf8Bd2Jg2cWT4G9Aq6EUAqHpRUP1y4BChCPGF",
  "key13": "QVmD1MevPLVp2QWLytUiRTKKcnHULkfZ1dgab4ujMbmUcNH46EekFv2A19zjQXRpwSLPGF8qtRiJt6qYpvvrLZE",
  "key14": "mC5urWHpqMg3gd7cFnFpE44iVTYhovKyiKqJsfKMxD8QGFH1tgAmJVbTZGsyvAVAvC1nRMLY5s7wyuZAc29vSUG",
  "key15": "4Qbw3sWvgH7V4pUXgBfWPsTSUcWM9fD2UXNKwBFmUFqgqVwKYZgrfDEPQn3ThJn955je3psNvZkWeVabyWWaHBM6",
  "key16": "5pNDtWRiuUUYSpbYxiuJkQAtPhBgeb2PKJE9ymF8hz1QdvUA5VAFh9PWMJSh1ArsJiEDE8my6PUX8Z44E6c2y9RT",
  "key17": "65W2JFWAyC1Qa3LwCtTvNwcuTfR7qhCPyHpi7fmeU8apTPTaVMJsxmhefDb9jAp2wAzARx7QPHbm7xmsmR5qY7mD",
  "key18": "SVtgdNLQfHQEiRdrwrAEcqUbBEdJ3JVkDTc5RtCgPWbqpFZxV1fTZnJhzn7zNh1TzZ9iqsLRP1wdasSKnJ4X2Uf",
  "key19": "3wJFBYi3TfxUYPxVagNLud1wHWC4dA8fz7Uh7WcLmH3fPFVZvqd1wAhvoQmJjEYxHkhNjAWLwNfgTV5mHXMRNPep",
  "key20": "4oTfs1WD71HXBFD8qadDGyjTziYXj6LJrkyu3CJ1vC423zXox7ZEwsjf4jhwSzeQSPXUbzjYdN8EL9gbBF2gddc4",
  "key21": "Z9E5Luj3P3NXpVbG2KFJtgxx5gcQxiqTzZA1rcFabS6JTzHySuQ2X3NwayYFwodMuGVED7ibh2v5hJSP332UwzX",
  "key22": "3kXj8C2SYqTX14QA1pBfmeB2eEDxkXdC1umAcZiwiXnhbxqtVsAbitmZbfioYhmncfvsyz6H59QKyH4Kvt1F4Nfr",
  "key23": "3yqYFMjgk8d3dntYw4q6MCMAPifSk5pbLcPuBi3Zq3shcUeZp2E5LDiEoVmVQKzJz3wGWb9T2hAbfEBWKaUVWU6E",
  "key24": "Kc1KQ1K34Kx4zHAnH8DggCzbioUAMjidJ1uSAjFYVsLobMW4zHGhMKiCGxaegA7ttR1TrMv5ZEt55nZoSEZrtrv",
  "key25": "62FTh6XipEdWn4c6Y2GpB3uuNjXAxaC69KSLoNboLCeF2HiSrw5r2dNTG1zwrf1PsuuJ8atHCUayAcqSnX1zQYHY",
  "key26": "2Q2CmMZoLLfJJ2wU9yWUugrdKRbGSCSQatPwpiSSXoef6G7c14B87oCrkFF58pYpzC4d6VS2reFJer4DnQDeQNUT",
  "key27": "2iwKThz28DigZgajF1yCjFJyu7dvVKSiVqisBSCFPey8ngzoMSgzTLJkXzZcVCTiXGFwqaQX3BBL4sbRBFTQyRH4",
  "key28": "5qJvb1xaAHhbybQWeDHtcri9w99uR5i1S1mMTVcCuUMdbpg36adxEpE5c6zHmx8CpYKdG9zvS5R2hv5FSerQQTXM",
  "key29": "rFzXkRH5mNdvT4rJLMA8Q5AmSKH3Lyy7yy6NVVLbunV8gB1qrxxcu6aCdPc73XUHRYGG9HgkppMZ2xcZurx8Mki"
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
