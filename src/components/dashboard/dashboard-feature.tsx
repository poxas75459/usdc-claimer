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
    "5dmP2drZCEBBTuL2X2cPCwR8eTSKpFRENrzzGJ3NxuPeAYprLzdjoNuZcrA8otMmtkucsYPBovJFCKuLnxf16DTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbwMG8jWv13VacNwd5jCLUZNws3YSA11xPCm8FNEJY6d3QfcQQVSEWLUuEbiH1qmRGrezUxx2p3CbJsqAaLX9EH",
  "key1": "2nFT1teCeCR68ernuPaLktVZK665QsGy2n9PtJTgeTdG1zHEhJyPMav5UnbArGh5vm2Pa7sCZBBAZw93b5WrMAZ4",
  "key2": "5ecMMewUzkCvmsg6761JZN2AonBv7BLeu7mTwV2fuokitiTQRWgLcmz1oyD559ZkaTyoT5ESiW2uxtMQaRTLvSCh",
  "key3": "2TfmjNFcer42DsKNBLC5vx7kEqEAzinYLp9gcJRcbJ6vJ3uyTAhtmT3Ee7R2WdPjRQP7ggrXFcAExjagcT5oZdrt",
  "key4": "3MX1ZxjQCp5AkNEc8MamxYxneU89J8eJPhVwWXx2LXKx1YxGYHZiKwK3T9TQsxRfPZw4qnUunhAZeXMN3JQpzJUV",
  "key5": "5e9t5BBw2rYApzu7JEoBP3JH5FEmXSdxWr7BktbgNYvvfdSdNHfGCC1TsSSmkYhxUGpjkvHynJNQMSr4i55hxciv",
  "key6": "4bvEDwspH4DxHpMcUQkiNiWQsY5qP7n9DNS3i6PTiZBsw6YYntwq1qSW8oZMJgAEYnGL284Etd3DCPrDAogNBnHq",
  "key7": "5JVMuJkhnUQjwD5oRFY26pxk9rZESqJPk9aEJ4ENuiKJvpnCD1HiuYFdqeiuog8tKXBwgiNp4ZKkwTPFZwUFhBuh",
  "key8": "3Y62v8pNbxc7Tze38xfv1DRQTXPgqR726RxL71hxUVKpTtE3hRsfkDDxbmnyLMstbcJ1B7dq2QinX7jhakY2SewT",
  "key9": "4mMj8JRRddo3QzeP2VxQXgUa5rMqAWp3svGJGNi3eZpAwDSnG18H4p5MjeUcPXVC6CCAFi5mr8ZmVoA5nrLLkT3z",
  "key10": "3kEJXy9p6Br6VRFCLPxjtSQu53AX6vfokuiWAZ4uX9J2dmvbQ7wu3KLxYPj1nomZMjzdt1mF7xSJUVzv6CQX7suP",
  "key11": "N3R3YYsYPkB8SUZPH8TeGjWgjEfYEFN2jaQdNxL6cpw2n6ATYbPpvAoGXjrEC2L2umwmy1CvmYZG8UCzg4PifQs",
  "key12": "5Y6q4dLjGNERwfUBwzh7Wyk3WmygpzAP7c3LKxetkYeoz6ejvwab7bPTg1fZLe522dENRuGx9ASq2VVFwver17aU",
  "key13": "5JXJiQewNM9rTaMb6csGhFQQxeR4XDTzKmwWUcUzTAPsLgnFTRVoHe6Jn3FSeRAEeZQ5jCkHV5arEDFNxDhZSQ62",
  "key14": "F21WTE9Py9PMky3CLhWj7dvtgm92JULQb7BnhmST2wX7a2nJyWqsG5RUUi25NyAJEb5JoxcfUvUxB7bturQfsBE",
  "key15": "2PK582d4YyP8evCxruinvi55aRUm8yPofaqm3MCFXAkTBVrHQ3n5TUZW8NrGMGL7Nnx8vJsUc8MaB82A4A62EK4Y",
  "key16": "3mdUegDwpH5gjGtd86giZBQaB1nA82iP6nGs8McCA8UyiuzCVC6ohDRmrGa4gLXuW1CTiMU28FWbs6Fs8tkGLLhQ",
  "key17": "3Ke4wtpxTGMrWGnugCcUewBbwGjEYK3w2kqgqf24ZhwnAv5L8wdJ3s4cQkSa1jKyD8hjshPZoLjLW17E9zqJjRN4",
  "key18": "3JyNT4gQ7wwnCX6xyhP1S9vsHeWotZtUbDQWTmENrKDgTLYteGHfCSsLkC3QHcYGiyqkeSJVA6KsvYYZxHUH5grx",
  "key19": "5WUWQYWqJPZBfDAbUSznkTvfgmdU3SGkhYJHEUwojrww2CJJzHpsEueoQgptKt8unm2ETAikbwGMUcoPgQaZb6PR",
  "key20": "2pGhQSvxcMhW6r3jw9RthYfXioSFzbtByd4YUVjDuFvE9iNG3xLDuF7cVjGRSB89myLuhXMcDkkEZ9v7hd7J74so",
  "key21": "37R13UY3qBQ7vw89nRarjfTuvFjzKbr7bm9KnyLzFmYtF2YUvYYoTG4F79EUNGBrMqJtnm6ZvYWY6h1svHNHRL7K",
  "key22": "5z3mQE9T8sMzH4VkFtoNGB8NwzRQhiKsbsCrjvbqKuLoBN7fi9rwQDGMn5xEh3gbzDzg6ekcNZ3nD1LfvmFDapcc",
  "key23": "5v91vnEPEvWUTejgbuBhi6ETXzVzga6Ec7tTe6uMypELZa47vPGFiuYqRJjZp8vwBEzADB2YBPuaJMJ39bTQos1P",
  "key24": "3VNveXFxGcj2non12Fam8maUh1nGFk7pyus1n2Lrn8VSwdESJHGmYVi7pP4saFcTiXEBy92pCTPBSpyWY1wr27Ru",
  "key25": "3S9U6AEyBbp89PLdEFdgANbLA36TLUHEzK19QsvPhPYmaoP7UNxheHPF3DiMZQZvRe8gMTv5pbJXETLQB1SDqxyU"
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
