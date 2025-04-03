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
    "4oqC7Jr9Z3REzgLVPqLBGVwpLm6dSTwJDLC2SLX9kAQzRfFgYMvoE4Z6j2FDogQgMLRgyqmdvVS4EKWCKpJKrGXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmZ93E9tzKM6C8i1vNJSnMrbg3JiUEtdcarihjniLKZxeFqdtX4CekJuJ45SUhTcLJHMGzuTLAe5FcmgsikZbFr",
  "key1": "2AF9ua8F85bneMvbFpzXt6pexooenqVhfvWVST7YwHsRqksMsLzTsTW8L7fiA5vCZ4GTUy8PwuEqJHQ6J2Mu3DSY",
  "key2": "24jDf1f3PfqQLuXRtQLSRjGTEm1XxtUjb7zBBM9FiRYBj52MhHgc6tF941SHru9TWjW5JQVNYAbLjJ8TCDP2gyPL",
  "key3": "5WDxJp7GehoSFLA3uBiGmXx9SGXr4HwoyHxWmE5wZYnZXgn7mRSbyJf4Tvrc66MZVcVXRs9GT9Mr7dNv2tmhcMPx",
  "key4": "2e9Ttfd2AsTffttddKVRUMy2EU67fXPtSqwaUEuzaBztHWQPJzZKx1BECa8b19YMkWVWfCLTQT5ZcNcZy6pZPj46",
  "key5": "3Wpne3jxg8PnS942FtqbQFfhtisKBExX4VpjbQSNwuLiihdNHZvwCYwAhiAw62qHTDrH1Zju3B9ByATR2ytTMCSQ",
  "key6": "4k53Xz4o9Azoa5rb4MLsTGL9AcuhN16fF4WsjnvcR21bTsvSzUPvRAn5E3SaKQR6dXVX3jA6xWAaUdb7MZqvUDKC",
  "key7": "PKh84tVhtFBMEb8LuMAPSK7vYsJiaaeHXuJSH6HzB11ApYNzt2L8kjHVWWFJ1Cm5drdwvLWKqNca44aFfDLU68W",
  "key8": "5acrYRcnMSniZLvEiANvgbDkGqSwLjdesxbqwsYRdgAyeps9UhGJEziPzCWakjUDz542LeAi16Y4YCDbqdUubZR7",
  "key9": "adNrEi8TFiXDD73SuMyenKaQ5B46xZyayXEHYV51ZkyRWGAQvtNFAJ2mTYu3sStQAQoiNposuFSfoFnpDkQXrqQ",
  "key10": "2D728aJEiZ1Y7mFjrw4JRwePhExP4Yzohz4FAYdaBaMpTWPsox3mVhiyY2XurK25Jqj9ApJu2pK9kEMu3Q36q3Tx",
  "key11": "3ewZLzPpqwBVnZTGVWsUfCCznq3fryxbf1X6tBEQRiihMFKMAE2QqZ8jbsaDvdu6oyoFNrvmLF3B57zsokoztoXp",
  "key12": "Fv4wEcbAG856378hf8B3HaYTkjeh3mAXryPeYGLmK7c6uJqX1uxA6ZZAaBuPgJ7BAd3Pv9FTdehPjdVstvHivwe",
  "key13": "DyzoPVXZxvPKw6nqAjgpT3ABX98Fvm9zD1tTJUVSUCfpG6e3h9Z69LURvWssXWfbJ8kzaspXU5g6HQKiy875cXP",
  "key14": "2d2bBrMQ6sHmncTugsK1VCgfGGa4VjGXH4e5x5LfHBM93rhiL89iiGEeWtPavq19gTEkfeMm9uddeaejbp5LcXsB",
  "key15": "5TBNszjLh5QWB655YFo9whkcqyY7PxPKF7KYyyL8YoUWC2SZwvyw46oUrNywXucDbAH2tBtZaZGthaeLF2jFtwxU",
  "key16": "3y8ZbanTzXEmEzPLHNquTNjNAN4fos1NnkkB6tZs8jNR6ivGWLdmUzsxgn2jKyFrwvJwgTvTqzNgBBHVUfVrX87c",
  "key17": "3vsRjYk947cHEtwPdehd9eFGHyk8scXHXX1jmrRGkxDmUZopMxjENgPbaKWf5NurzEptaKuuFfGbvUuWYRuHLnkB",
  "key18": "3ud8mAvpVfaxEiydj9F42Pmancfbq7iA8RwzThRPx2iUDpeDGv9GuGRRqbJEx7HeFaSKP5muutvNmRacNUDpHWcn",
  "key19": "45hsovBdAe87QVgAKLQGMBkjCa6Fg6xvHkmZXiM41xrSCGjqAYFvaxCnYHngAtye1NWCarKW74YhfVPfFKrRMY2J",
  "key20": "123LRvh2pAEQxvq4cE4GJoEjKtwAiJGoY5s5A1KCAeZL6hxuHmrJU7qFcuuoSc4HhdfxpAXFUGXGJZngeZEPApmx",
  "key21": "3R6aHAbdT544aRx22HJY34cMEx1iJbYo2N2fsXv11U7Mh9rQipmXsQ8zgmdwcEvnbtszxDP38CwT6eMmJ9s9BPPj",
  "key22": "3ZAisf91nc4UMdGrVcwDdBqXSchkoSdsAtEgapFZPm76oZBpWatJW5bQtzPGRMjEahc8Vqmu3BL5qjzxMxifh5sM",
  "key23": "3a2bfSMXGtTAQrzgpnEntuasTX4Gu65Zu67BjMnioWyycvu78fFUQettQisxu2S3ojrEDEFmsv4hgJeXhKqP4w41",
  "key24": "sPeDwTk3RQXfVu2u6nMM8zVz9JanCJdnUQFFFdP8BK3h14AiMS5dm2EYU1CFrVgNYquKHMsz6cRzKexMdvGcmdG",
  "key25": "396RHhzPacmvE3CvKow9ASRgGQjftsNVDjTw2H8pfoqSt2Sxcno1BfTgeDQGsZhMxR9nn3CZPESZBSmVCUNA1XDr",
  "key26": "59ebrZe7Kop3zLMjNSogrHJeiN1BTT7udoZdiEbDksB9XA2ktiDBrQNoovpCvQyU9fjJyp3cr3rznGEXUza5V1TP",
  "key27": "4mWvb5oBpR1QEnkdA7jDYNdXJCdokwGznudhZkAKfVfZGhfVv8aXgR7AVqLajLjZFHi8zADX34dRo7ouDF6mL28p",
  "key28": "4QPxX8FcvAzkMuAWGWhBm4DvdF3sbyb6c266JJoKEFwiQbNZ2dgZsBZMzs5ucekxLXPoKWwGEPboV4k1J9shCr5J",
  "key29": "4SdGxeTeFGj6yAXLa9Nz15fiwDDvJ5PQA7YsaJFuz1BGCrzUuXbfEFVpPj9Ekk3E5nzuLGYaNmXiGVrG3rrBBCao"
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
