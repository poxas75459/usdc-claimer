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
    "TRDALWND8hryyYVsRvSZt1h6mz7xbmFVZevuByhF6jj8bq4j3NL1LUnJpzsciuJFcBwB9qmbLUPSMga5CYDU5Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEWBGeFAAjp7cJQYZeeQTwoJAmz1oJjyDhD1LnE92SBcTvqDFo3afNvYpG4CDCTNP1f5BGywMcvBRmbPVmBsuC6",
  "key1": "56rmMTuPqNHWKafYhx6gxgijLBCQgbEPSf4XgTdQ1jd6DA7EWFaARdgmAoyFUuHD8M6PFN3NUoG1zABHNR24Y5YL",
  "key2": "3ao1yFHxEjmgkWnW3H2NxMnPgWjeWpvCv8rxaaCKsf5x5Hb9w19RvD2wLsE4tn8ZnJRKXZktSxQRvdGrCQ8RFbvg",
  "key3": "5W6rRYot4ptkSUyk3r17Hh5nyfNWb9k9Cw1dQLbFU5v7peyNsA7KGQ5chpRaXirsTt5aFeVgcYsiDJzVtUvo1bSY",
  "key4": "3dMA6NQ1fzeGdqEjs2fndSSY9xfXp1V1x9fAnDVJbYVTkMeHGRvCH1eexQ8gUU28w2TEDCfi5owjVvdMDddYf22m",
  "key5": "hNrXs6aEgHdyewmVuU93npDSLx6LN2ziVg6YVidgpkxSsc2DGM1rVgU87QJzYZ8oJdYHPS4HJJ2kTBPr3d2auqR",
  "key6": "4ncLPRCgqmX1JDbggQCzN4koLpJaNhav794y2P1XB5zaDHLNgEFN3W51gF6CxxQ2EDUyHxtvqnY1oB3kuusRnDy1",
  "key7": "3PDzfWNLejf33FgJSJK9fcUoz2gZAKmzuxkTVQgJGsA9VmzXXyjx3utyWqaxoh7D8gr7mChBVR55xQNvg64JbTrA",
  "key8": "3ULPHeJXBCwiMQbNKvbKUHK2spQeoRh7q4rxBrM1eRVUEtKaErd6bHRegbAb6HNvu3JqCgLQCQYdhw2N5LxjHR86",
  "key9": "1h68Lm9coiHAfiZKQNHivENwZVuev7KbZupEvaTqS6odGj1VWLDmMCM1QoNJBu7gAHy4Hok2AWH9jDsdaU7S69Q",
  "key10": "2WGE3jugone6XLWFVevvqSrKTqx5YpxeP1WZR216DSu77obeyQ8ZcPt9ztzGY2CsJEJB5S1YqBm8WUkh1Ypur7si",
  "key11": "5FZKypa6RaaTKXe5B5c1TJBFQjDv89nLmTGiVjENoQi7xcXzN3hEZvtXHnzuMyMyjCcsnAtRiKwJfspUPP9t1zE8",
  "key12": "sRrNUipozv8XEFoy8TwCaSpxfLDJJVJ6EonGJmJLr5ir8ekjV5Xts1NfHLb8ynsvvMXFrHZhQt51QzUP5u9vaD1",
  "key13": "3nyPEer59Si1aVznBsr7QcdGEhbHnyTW67eJQMRwM4PAPLZADFfLM2t55FNRhuCHx2UzW8bMc6UGVNGiatsTd83w",
  "key14": "639rG3Hbxg29CtgNcVHr273bp9tgFxB5GVNGqxj5QvUyCF4VnPLkWdz3z2ReBk8MvCRcxocXNwteSft3vGA5joZL",
  "key15": "4au31BQkFyMnqT5WVRenxSTbyLNKWgq7iKZK5y5uvQETug2aPgSwrec5dujJP5R3sZmFV7Dixd8o5Hov11XioN92",
  "key16": "sLBMSw3QDhgNHa19wcPPbDNSBF67y7zgiWBxJ6d73gPxnSvS69CA6m8fnULrB6VmzgPTkmcBhWNJnuRsY3Uuijn",
  "key17": "2nXnC7gDuVZrP3nMDxtesdLSUuJxDyKeLTPzq5CkafEymGZyuNMww9Rkj8zhfbzc5Yq33xQRJMtr8j1xFJ8N3yRY",
  "key18": "4svtFoiXnsrJVnVnJu9RQtYerTJ8xZWwxBfUG6vvF5LX2VzxTo8NqcdoBfDC9yeu8FnaMYiQ6W7o6Wbo3EPTUrKi",
  "key19": "4TadJ9C11whdRtwQntKXf5WjkNg7VpSFJTTDg5ZRQyLae5pbWWabSNcDBWH5qvXy5vkgwAAtHKMzVf8Ymcvm9m2J",
  "key20": "4FP3kyo53Q1pKSWhWAmAPc9CxGydzdAjZUooBL4fKe3h4dMBUDLqgBxVPup16jCf9CTRpouvuSCHGs2zY6zNUokU",
  "key21": "3QmQdNY3WEjtVPetYQ8Pz95VrPGRmf8qpVh1tu1ZC7v4tfY64wEdERRmrwZHU4wWFAxSuUdMzK4uxmisJLajqihM",
  "key22": "FZhWW2YeiQEtNX8gGM12ebfZtRivgLTbRgUMZ6DCnX13ZGnT8qwdzFf2wmEDK1pQX1Tm9uN4nQGCXQQFtaSWtDN",
  "key23": "2npGGLy5We9h9q5wBQAkLevG8uuSvnQVxKVQPEYn7sTBWhkfHD3oeciWJ6nXkxR15H8xuyrXxqwzYqCSTLeJvBs6",
  "key24": "2rnrujxohg4zYkNQ6e524JNu13xKzEhJ4uBPw3oB7kPLEeDDa6y6MnF46wtEuZqfMLZCj7SznjL1iD5u1JdGA9UP",
  "key25": "5ayD319ALL7coEsoVkU7jr8edXbZTwhgtrBbQGndM2h7oi965uDqAbFDgvxcvbPm4uzPU5r5SdzuS5AwUUBS4nwe",
  "key26": "5azYnVvAGYw2uBy75uKLngjf6sNrZUogX899z8j2noRQW9frAAbT6BF7YKxCyaSHnyHTabXdvbNY2kcyARjLoHu3",
  "key27": "67UQEm88LbntzvPFkrw9jiAxWRqn5MpS99xndcEAHxQvGvJfkBAA9CmePvxYxmkd4pPWEx3aECq65MydKKe6Q8dA",
  "key28": "44sLH7EfA7ShipZmptZer5pwxyrUMCxNZ1UbG3UhqG4NyTbhuopBMc4zWiSwk3y3WrqnTJ13Rrkqq6fCa3aeqy1Z",
  "key29": "2cinAZVms43EXrcxS3Bi7xvG6AyDPikzKZwHFvofVuepmFZzodBpLCtFvPie422phCqY1N26A9mX4mtwyY5FQNgD"
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
