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
    "PyRU9wzu3QG2xsGDTERZZNSV5SBbaYkHdLzbtYdwCe7HUQ4ApFiiNDPRnjJHpv9RkeseVoChzxKCRJeif82FesU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXhM5SE2g64nax6xfaRWcuhSa7s6zRdLEZnP8ZZy43zt2J5F5VGkf9aspdzrrvHvxEay7cGs4e8csb8AFB3eto",
  "key1": "4TtzwgTMeafi8GbZjfcki9QEXDhrBCmPZarHFeXvzQszuhFvtDve6mStHAdjMyeeEocZEBFcRwsu3UgckUWoZw7x",
  "key2": "57shkcHo97LB1wQcL3G4dxZ5NvUfDEWE7fwGPPPWcxghcAoV1gSjBthfUdWpMyPk2jGiuwvSynmsdbgBGo4KecG1",
  "key3": "5ostZDZYVEMqjwN8N9Pw2dXoYm8CpdRiAJWz7Hfaamg9kWcJ7UK4ViLaDFX4xwrXrm98DTgZ9PvkpeDSWuGCevGB",
  "key4": "3SpqMedxt3j6DHZhmEC6J9dGj3N38ZmQGeVTvfFNjP7RghBp8bbUacLCt7wASm8k1qEWei1hNA3X1F1jiuvxJuYV",
  "key5": "3BaQZWuyWXkjmw5zaw5Hh3xYRYzsuvwWBXTyvFJqkDwywoUjXfEzt7KbEtEDx1qaUBVema62jYRsjf8U1eb9exPc",
  "key6": "R755gE5Vv8UeYWiJdXRZHn8pDEocN62y9qmmFSEKAr8mAFJ3FjAkhxsx4tQ39Lck5ihNqvrUDPADWqumSAxHNnz",
  "key7": "8E7FwTtT8FG5VDaSsLPq9VYN7W5cxRdfUxY6BV2M86a1qiiDSwABPh7FpBGsggDTQ5oGnAaF2Au1PNmMT929oD8",
  "key8": "JV1ZTs8uA6NM8GSessbjhwiLnM9YXr4NmVuRv4ZA1bEpuj3tZcKyqXZfYiPGp98pZAE2B4HvbRTS6N2X2Fd9QiV",
  "key9": "62hBrzLR67KGEosmuA3QS3pZKhSG6GPwAxBwqg5CsQK2CoGLPxHeEAnfhkDWGATYUGGeNjKJe8s5vzLEd2bLnGDt",
  "key10": "2gNaQ1sZC2JXbYNpqWx99BZRC7LjzeUyuGwxPWyXSEXczMMTrAovgjmzaRLYiKupiCZZCkFwz3SdhFLaT1TDy6WQ",
  "key11": "2jJHw12zb3meYd1afY8wYd3vc86NjVmruUNm7H5rJcM6rYYae3KWkWZ5SjdtG9GQhpByrXGqWDRn9SoDp6M9gd6r",
  "key12": "3VCPzfbwHuvkwXrDqjpajGUHmWAeEyhjCnUCcVpoAUD8uRXjtTQU4eX2Rq1KanaiA33TpvZzdEPFUESyKdv3QAUj",
  "key13": "dRdiZBHQZ3QpE3watWkYKJsKrDMUqnowYvEphYgG2Ex9QeMjk2J6mD3NECYyGDKyL1Z4yKTqWPCSgJpsn8QvGXp",
  "key14": "3ZapJU9H85Aix9FghYsY8nWKq7tJRpWtJZuDzLFM4uDKwkd9gQZxY7Smh1r5MBYzUyuk1Mif83D9RAtS7CXcv8Pz",
  "key15": "3KkqGX81NJFXWNZRpgWLxEvrS3wLy6ZWRGZZpGVGX7orZTuNL2x3g7zAgn5WszezWAq8eeKMrayke2hGdUQjqACP",
  "key16": "626kiK4p6tc9zLddNHEoRUeVzXvP3YkQcQxhzuBkaR1eaNXhzxfdNsce7XXkQN2hMdh1Ytv7HyR6V2EfQwko5UVp",
  "key17": "3aHH8cvQ8fg1DnYiQvrhKNMCPRayFhvhp6Anqh9rjByQhgie4s5G23tYBdhJBdLJ9nA6ACu2cpoQoT5tm9pYv8H6",
  "key18": "3UBmw6PtV6fYK3wJ5SaJzhw9c4cH5zRD1tCBhfGwvc9W7YPupQo94L38jRDN7tiX3x6isEbbxKsBJSiMaYD6c1KS",
  "key19": "282L9pgPsLvSXJkUbcGBWNzguL9q1MS1pba4EWwwqmYcynhb3iQ1PGMahRto8Mh4hFv7RBCqZemtY6YmhTBA3oab",
  "key20": "5oBNhG3UBLrRdwBCJ5dFbgBP7KdhwHEcdc2SyecoyJTQgZaJHKSTQc1KUJezWisWBg6cen6dDerRJKa3wEoiTLuU",
  "key21": "4U1xw6vERctCpXHJziV2kFTGVk6DU8ZNrzAH5dBjGBa4hCapw6e8DCtFuxD19SrALZfvw9rDbpEQPZ2KzgUh2ZAM",
  "key22": "2Z115fNg1vNezk3izBY3Yh7PWtaxyGPrggC7aSm43TgBv2SJ3tpYyUBFgefStG1wKPNkp1E2nddfhUtwTnQVQS9t",
  "key23": "4M3eMoSeaq4c6dM9FTfhZGaPovCgYEA19LWHQ2EXWxbhtdJcMvWEKgWaSHn4AkDL3oNbc1US5sqBwFY3eCeuNyEZ",
  "key24": "3Zat3wMwvviEt8Y4ca4WmybkXxH73eB9oB3tqwFTE8y75uRvcWpwAX5pXv7yyGCy9oxfzter5c3NwLAMsQwNmmPr",
  "key25": "49iArr5AsGqxzNn65UKQND6VJ78iYroLo7QZ3MvxG2L776b268nVspAXd9R9qemZ5kj8zMtUNVYeDifvJ9TJEuBg"
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
