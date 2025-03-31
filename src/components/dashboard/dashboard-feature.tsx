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
    "4b2pGTLhJZuFaVRDf1dYY4xdVSGZ5fbY1mxdngjG6CdPHDZ3n4K9dBq3gD1tsrTmZggbF5a8iJ8kQiBc8LtQyqfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5TKjtFcHk26zRQWibedeFpwViPYJcCjm7MvqihP6TkahWBiGX19yVGBLbbsUFzNMuMn7Tq3FAHYNjGakE6kDUM",
  "key1": "4dVPovJ13Qc7ogiF1RKFggUWkHCEaa26Bd75yfHDxytykBM69CmAJMBPy6Y42ovxcAMWXWpjr3mQmLMSykDibw1C",
  "key2": "mfoACHXKHx3EP8RHH1qzXGfQGYV4Johqjc36zSceD5rzBTyNxfSv5wyV83ZNabhazZFSFbJgb4GSXcVUc3JK3XX",
  "key3": "26KqiYhcFtdSmSFixsrwZcAtJPEdzQ5ejEWtDT1yiNFXCHKUdFjNj9TYcxVz9MFBtooTay5wRn9zbJwh94MRKJeD",
  "key4": "2xYHpgCoiSzBrmmWssdifS6UDmcgxoidzG8v5c5aX3i7D6cVUpD9RQ5xnvufTJ8vZQ93TR7WqDS8S3ZH4xH4Qkjy",
  "key5": "5LfiHVGPkZLVkGgYrkQcqioUFi2BS9z6711Q2Tz8Cg24y6yJGeZuTe847a1Y98kMGL4tuSxpFEXB27rRP5mM3Wwd",
  "key6": "65htfHv1NkwzJDDvHqGuwzQpYmpaqG1U4kEoZcrzKtpR9PDiBvyGLZ1EsAEEZuHzbQXvJLPvSVp8FV66gC5et8M5",
  "key7": "32uEKRoVmdLcDHUYFgjwvao2kAoXAUZCJzeqHkPyDeWWzz6jFdLVPj8pVQvCPEEDcn2rhvjgyD5eoNRnMDA7KdD1",
  "key8": "2YL4gERLwqoSPXXuR4XKEMWWu6r8PLm5nraWGGdLMBQ23cB2euzvw2qNB9DrzYQnPHeYLHdvkMDKePZ6A8DF52Lh",
  "key9": "4Ne6dXE1iwa5Z3ke3ELa3p2X1F8aNRKbSUzVuK7gvKveBqoTX5LCXSfUCARfGyti799YumoTqDgxD3StZn9GcKzV",
  "key10": "3tMKcoJMHRurHerpmT7jvmcNXa4vaXUYZmo1h1f5wArX8BZbackazQ7nubJ5aDa2DqsGxboA3JHM1dboaPRE8zfq",
  "key11": "3vV7acCyaquWTVi9sUeiLiT8FJqSsmPGXCsKqZY3AhGYJ7aPyMNMN6GZkme1RAq3otvRAK6VABynnzj8ie1y4PKp",
  "key12": "53NJzBuL6HuBvyYPKraVfJuzWN4KkD5vdXevy6BfWPRi1pnN6Tw8uvg6Qd7JzXkGFtgN2xRiZDUq5NYZkPj4zouz",
  "key13": "255b397khvhQJLsn479qWaZYwFhdhvQ5GbEx8Sk6G9uswTiKW1MZfpvewfSy7cYYYFS8HkpD1DSYunhz6NKdptnG",
  "key14": "2ehiu31U7Jhdmki7FGjmVgdp4nC56xZBw22RP3zdEL8fkSgReWmkFsUqBrvoL5kcqhJJv8xNSuDjyxc1RewpXPeu",
  "key15": "5QRADJz1CJizi1jGg9peqtBnDd7BJs9rj8bs2JR5CEnHtuqR78MEJxY9t1ugdLMZ2f4ydzDhmw4JbqZzK7X5ZKb",
  "key16": "5whNzbDLYxbhnb5MSJ9DJ7RFZLqTU2nA3YdiNYLnCDyDXczW813mb2krjnvf5kMMUD9hwNEuZre87xSgNoYp7ko1",
  "key17": "2ZH78AzhwjgEdzXRxjMMJVrACHHML7QsxWgEosxkBHwAJ83cWZXGAcsMtcRx4VoFrgW8B6CAnAmb9JwnPAyCjdH9",
  "key18": "5eMpRijP7GDt9ryzypTy8ff1Fu2MC2M2PWWLqwJUhua7mZ7KVY9xXh68dzUbehdS51U4CGqd5o9ePhKDj6qVtYZN",
  "key19": "1PjCisx4GqLf7ckP4KjzBbdKgpHe75iyX6e3kaBXx5YaSjmdL2ai8ff9kVCNoZy5Bu4pFKf9NW5BJuJq2HNHFLR",
  "key20": "3PvWDqLz5JGKMkomAMtubtETLGbfNrgoFA9o3udv6rkboj6cYMfSDTW2skeG87Vo5drW6UD5pyGGKK598nfic7jQ",
  "key21": "3qaajvrwzY9iPGU7PvvPqK6HZGp9eaS2vXTmD6JvGRysko1iZGN2QYWGPBd3HJneQ7VD4PjfPKnrbFJ5Zhzsvcka",
  "key22": "uXGSo9U134p3RMVnszPsfVfWyvY8wY7gCTnP5RH2djccvGE5f45QY4JHtrf8opGAFRj3SQ4MN5xapQ6wmTzBau1",
  "key23": "4yCsbKRWQVdeu9Zbe86YSCqzVYP7VX2uGJuzJ13D8LKRzaSKPAohoaHY3hcPtmbrQxFarhvxBPsjorVa8bJGBYcn",
  "key24": "4DUgbp7D5sQ2R252ZJ1DfpKx5yYtGd4TD88hdGyNQf2MMjDw2Lo3BSEemdAcUHCWTmPPAdrXfdhDjDHfHk3pN7bG",
  "key25": "2qaeuqXkWS3HrZ783sEnyw2jWt1uFWLADC4JGonZ6qVr6tZx4twVCFmkoJGf8iVEdhM7UwFqmy6iP1SWRL1ouzi5"
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
