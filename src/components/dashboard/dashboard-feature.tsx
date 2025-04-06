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
    "37rRmCE5oriPygpeyM59pbNQSxgRYjmKL98CjPqb6UHfZw6FVbxCfom4fiUAxJFmRw4Hm1X9s3RZH6a1362U33KF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJkBhhYK5Z685mv6nwXZgev4c7E1idHbmxXVKU8qX3N8kaN1ZhaaV9wWRirQJHQwCPw3BLboVJjHkKkyxK5PKno",
  "key1": "51tYvvZVucsVPbcGnX49iHeUQ3iMTjWhtN6eTHhQ9DJV62A9GAw9jwP2MtgqafP79ekziL5sjLAio3o2nqLcWha2",
  "key2": "4phv8CpBLpDEafc6WWCwsKQpBmun5LwLcYEP4vcXaCXTvZMgHGasmdZu3sTW4EZzNe2BUz6uXCHQM1tdJQnAo9qH",
  "key3": "4Rmxv1niKKeUpDYeF4ENaQF66PU4oBorNr6W4TZXcQfrF66vtBNcFKzxezSJbKgJQ6r4oGFQ1y2Z2xkM1BuATo63",
  "key4": "4BTwSpgi9itynC3XUTTo1DnKDxbSfepu7BjNzs9tA8zKqJZvb4dorAd8bQ39q9piq6k7fUkoNGDDRx2F3YypUTf1",
  "key5": "YWc9MCUdjrTuFkj3RvoLRLwP3jwdijFsYunEUPxiCreyoMtuA3LntjLRVSGhqgaSHrXz7pvBdUpnsexj7CcUkh5",
  "key6": "32tC7vk5XXX5ok8aFLn8K45RTtuvGXkBpFWbzcrYNWy7WqbJJhscdoHuVNWpkEvDbGpnSg6e83BU4cKfH8iqewF1",
  "key7": "2TQY9xfA9uHxS4uyZHZ3PAstALv5JEYncdNuJezhohwSj2rgCq7YwjWvKhtkPUqPMVFUCusXi8pud1pvpLnLrmAB",
  "key8": "2g2b3H34AesW66daQJf3tnVrVkZxWcFz8Gu9zsUnkudsSVdovHpiMu7R8q2RqdNbKRzcB5ZHxSWqMbVj1ELX3EQg",
  "key9": "28DGBKgwS5AAYvpg8SoSrvzXCNkTVJsCZyGgnm55H8BuzQzW9PD5tTB5PzR7fsWu9ATsmvjXGtNworpMuguMG3Mr",
  "key10": "2ms83swVw8Frh3RLV5YcKhLdrTBHs7FRb8hxeMMvGghxJPdJnq5BrAifjcLynJrdpkHwNLwtaTJdm8sheFVS2CpX",
  "key11": "29FAVRjB9HzKvAC3LQfQCNDmLgZgBmxiptPWjquLniibjHHRWjo5E8zZcFRXijwPqsZ8Ar8UmdauW8hf311o4tiq",
  "key12": "5poCPMbw8yd9dVYmKK6EuGRgZ2ZZABoyAaiJn51zZwgV8XzkQfyfvSeQYJnya52RwXFHJBCz6DtWD3x9qGzuoKwf",
  "key13": "qHhTnsevv2dqBVydSmzFo1QR1d5MovtETUFoaHQ1YwULzxmoq423a1Rfyka7gXX68WupTW2vCfPoria67mjm255",
  "key14": "2xXswLgcA7ufv7YS8M1xhubjnw9AN2hmBA1WTHEjYHeftHnQ3aiae4WijiAREshNJsLREvavY2QfJWdYbWwSgrsE",
  "key15": "ycaTNcJJYdgKGkZUEB6Cdq7AZoFcr6CT8ayTe9hBkHvZsELoqu1jckwsWeae23xMMiqUe66x3AmUm6KL4fMtxgM",
  "key16": "2DXwnZ83jfKEQpUHGYRSyZk7LvewrgWaQLCz2YaSm3EQx2NihXuP5D7JD8CPbJGFYoZxwJH9TT5Cqz5Po66YMKua",
  "key17": "2UCBXEso2AsZAQNVCKacY87i7FZYoyepAyyRPnSL7mSmXyYXTaz8VCPbFdvQdNTNwREmYr8bJEmwdviFzZNUhtcL",
  "key18": "2ofjNJiVCzTLLH9n3hTYyqNgUFSyZccKRf8mWUKoG62bdvykvjR9EnvEgDPeD7bKqfd7VEhTgcJCYWBFSVP9SRgf",
  "key19": "2AY1J1sxo9p78qAC4SrtdXoUCwCgAwcsaQ6qGo986ahQmKm5AR82nYwJRCp7Ms6dP1VFpNUTk1bdDPPY3X8v3UVB",
  "key20": "EXU99uzjMxkJ4uYRgjfWwtd3BkSwRLHwJSRmsyuX4fiAx8HQ1M358W3udNcYhuECaZEHEJpicZn3MPcooKnCF53",
  "key21": "5XQbVAqWCgqyoYHhPqxHwXWJ5tw1jhv6SpnDyyphMKWsiCrWtLtHMgdRFdeUG9kmDiG4HZE4SswfxV8LTqS8wan8",
  "key22": "3Und5uoc6whCEdaxMZ9dFuHH2vRNk2VpKTYNK7TA6BWKzhF3R59Pz2VTKK9V4MQAvZEs7kaDz79f46Repst3wS52",
  "key23": "54SwWFZza3nVmh5ymKgXyisgWysuLXnYeebMCtsLnT5mTboFGGihMSGx8S9qbzt9v8Vubo8CD93f2P2dhWhorDd6",
  "key24": "3h6isZJ7nmiFDM8JH6P3iutec3s8sbFtmxVC97pTtWNKAUXf6BFS6n2qMRbFzuXUq4VrQudPnj5oyMjrW1X8udFA",
  "key25": "5gms71Cejj3AFFYuBE9x5B7iWfyNs4nmU55Xi6wss4fN2LnMvbKRAe8girJ8Akdk3kqdDDRwnHAAGtaRvzCeuTSJ",
  "key26": "5zRyrrusrtDaHCXgwS7hLT4Gy5uFYxhB9c2bRWmPmXv7xVt6sHwhavPVLhu4SR4affN8jefVxtkKXzAtXUUUrcEb",
  "key27": "5CecgzDPiMrmLYi4PQDRGiCnZ97MH4ksDsmhgNWpRV3WsTPrW4XWKd9gdP2ZtJbh12XtXXJD8HBJ2VeP83GaVDVV",
  "key28": "4xNACGmTfH7tp3nSMK78BVdevsyhvaUxrf8bHrHPXHDQ5F8fxQ2jNLepMzpmMvBQMNQuwyjVtwsG4rQgdrWzdNwp"
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
