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
    "313JgcnaGQ2xn5SuEVceVCqpVwsPhw9ntRWsfkBjVoxZhZuHhr7E8aZRSbbn5mD4tfnsKw1D9nauyzbrq3feoyGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCVDS8mHki4Kp1tW2do974NeJq6hbDJdCH5mv3vduaETxUopVaGckpaGr3uSYhZnxTCtLTbSv8rYsytwiVC3QwR",
  "key1": "33NCjNYMqNLf8PNY37P79C8yFR8QuoGkjRPBk22Nh1Rg1iGDrDbtLSEQo8gbvfPWeU48rh45nSULNeKLpNx7gY5s",
  "key2": "3CkGXU9Bi7v3gFKxXvdge5k47BVjKYGnxMJEkAy6D6VHt4HS7CqK2xPeCXEQga4TsxUsWaTKzP2z34NQvujMrpid",
  "key3": "vPDXQJ9z1haoHGutCUceSEAWrjXuCVv5bwnbvJEXULxGCirqLZKihJ4vz2SDStTbNmfQY8shFzNwHC4xz5ZXZ75",
  "key4": "2q2emFGSZBHSJ59S6xRcBbRvJRPQXoRyRH83wQRj4xrBTvFueBRRrPWWYAkz68MhvgsADYsimeY2xJBhWT7d7hER",
  "key5": "296X4fx27e5f3YuwF4GUgjFF6BTPQC4RBoEbA5HeWhwCts6tK7LehPhT7odWTmecjCNPCL3D8q9cwFi4cP2mzYz7",
  "key6": "2CEvfRrR7cYCqQmky7a39LiCdotVoActjPLfkart547U2oqjLs3ZnnwAJXy67WhpM7Z5cMSDznvPdxnSgWGAFnAd",
  "key7": "dJEgCobH92tk9kpW9D5ihEg7ZZWybDretYWtmZqp2BBYqTgaxHsNa9x1AeH8jxa7zSYig8faFN6vuojuZEJBZwc",
  "key8": "WL9QJukgop1SqAqSg1USUJQPJA7RZeZ4tomRTk7FFbAK18sykLhNcfPnMaRDRJsssg83f7qEdHYR81tVCsL3d66",
  "key9": "2vhJz3URBRmPsiLDXjnXJ3bGqTNWeB6pr9bDfDXBt511aa1S5e2xyiirsnbtd5z6hvgAh1mvBB3fWygbNVhXBksd",
  "key10": "4EUAZLCU3fJGDhNDw2JSH9uDMRsXqGv3F3k6P2dq3KbqX8osoWy3YBNMYp8vcPL3mwf21GxFM93WdxD6zmbtXfLE",
  "key11": "4a8xEZSoSSowen53c1cPe9zyBdXP6MoC3w4j9bFNitJAw5Q7iSoKtM3or4mzyanu7Y8gGM35Bxme5eFsKBZMN9M1",
  "key12": "38ei14TsH9vGkemfdhCW5ACYM433xL2QdqJdb1njWWYaXyApaLvezz2QHZpZGHKb3AmTLnPHTUH1ciCBiuMURWR6",
  "key13": "5esVb4MzyXwTv1QvmsxsdyZNK128YQ6EyjQ7RqpwjWk9ZSEVqay46xTVMqUA6FwGLLW9KEeTZR55VAZsKoJGjjKQ",
  "key14": "U2WK94B4kYa8vAMFNr5kepNfYGpUT3AyNqf5X4cNCdx9qxC3B3CoQ7UF8GP9VhAwg3eKVkJBZPuTVtZwZdFLWG1",
  "key15": "4JRpDpYCm6E62f3yoxp9jwVffx6SiQs2L6ozLVsR4urNmV3oZiLf1HwZD2Ja3ZW7iiGvfhLVMvFqfAvqUsR7Z1zX",
  "key16": "31mPsJMSPtjZgpTEYtTR7nQiRMXbjQviJBwZwtSzhxXsmYiS2banJmsgBdumYuoMt3j6qZvZnhGmNSDwEu8zpxnm",
  "key17": "5rCg4kBc3BobpAoTG7uB3LxLtcfUmteYft3y2vKJ6SgHjnNhdmswpKa99Yhocthx7De46eCSo1a2cr9etu1PM1xT",
  "key18": "4rgUeYFCpKan3uwT3pB1vs81LJ1ChhEwZNq8RyF5aCD7AcqRZXUYEorg9KrHnNHeLVELhJ2UD4rQRDiRioinNMhB",
  "key19": "Q15AmrPSa49ABZx7MuDNpJf3kTR4PMRR3wSt1YGiHcaWJ3B6XfqbkHRc7SPvwSiauRQehHUx9Po5jBTuWzFNiaE",
  "key20": "66HKqKE4Z3RvoUKorbdcgYVncKuTDxMCPnHtsYZmdEYSfxbrzhQhMKAV5ZcqEqcKdfXXxMnCTicjqS7E56pUnDE6",
  "key21": "4Zvz6DPYAvGV5j6obgM57PHyQcDA7Nt8QsZDajrxGTWKhTw4H8ckybfSXfG8oGrvMmFnKf7JRRBRgM68NsrWxK2K",
  "key22": "2Qof6VYXi6eZi6B4sUCaNAdTBFgxry3sHMtNcnBxS2M1CiwmgjwfdBo2uwJ8ZiQLdtL6MpA3yVpCsdZV1uCgeiqY",
  "key23": "3UgFz4VUSdFGxryzM7Y3bFwEy2v7eq1AbgJEiXrc7koiJ7YGee5iN3ACMc1ffBmb4ayT3tzVsS8CwHbb25PZsw41",
  "key24": "3vkoyQPDNkRHQr8NQ8GZVTycteQAuE5x1Bs4ynhffaeb1UnrZzZbs74CTJQwux88U2zDhm7zufZunmBG6ommZGAN"
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
