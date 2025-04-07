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
    "2k7a3q1JufXxjrwrP1jDhM9wi4MspWsNh7uKrsBxzuNGPpDSPfRNVtkJvz6GXxNS4GtYP7uFRWEmYvqhKW4fqahc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQbyThc9qXPrztJwN1X2m1m1wKtJEaNPqUH7mFd4faoq3gFgkbQg7F5z9tYYZ2Ckgiro3J1hvzYgba2xzeByMcc",
  "key1": "365jDrMjSGChEgG89eWjUGL52tU6UncZ5vPBbzNuuCsa8szxDXuifKdxtZ9hmwJyy2M4DE6GGs6Hars6DrNwiFza",
  "key2": "2hR3W1w4tJnAaULnenpqtcNMAF1sSXQvKuEhrVBFWzfEzmPG3p8cEFQ4CBTDZLiqEv5xV2MhYeKTHifvPxStwYJX",
  "key3": "4qbXs1f8gHLZiYv4beKHrDwC6uzRNh5h6TThX48g2sNM5QmrgMrHDmQ7pNDfYsTL3ZvSzYAY2mRJDJRPPczPz8ru",
  "key4": "29SU7GAHHmrstfibYtQpJrCPUCbGrULDAn81nQXyuZi7NWBF6jESzNaAC1ixVUNg9ES7boxVnrz4ZU9hVXALmjnY",
  "key5": "5UfE2qSjtRT9kgNgUBS7LstUWpQPqrZCB6LEajGv4ckiXskDnMur4m6SV9pDuRb5DrsHWythCXom6xbTBJw4WMjx",
  "key6": "3JxZEu1nP63uuztecxNKTpzrTKNLjJuo1jn74GREYYXkbNmi1UVKc22RqAwDcAddaE9jG6d7gW6oWSap8qSAhizg",
  "key7": "EvgGH6pKTGMrgK6M1mKtt4AuKEcaaY2PrMzdVVGkoWSfLdLjzmmGSMgP6duaq68EJvQR2P92kFobz2weZvjHJ5a",
  "key8": "3KLGUcC5yYmzbEyki2Aj4KrR4imqaJFQYBuBEmicyMp3b5kqbq2N8F56eJvpr6wpAeHmGjXZ4xgSdF6tNCZu2K6i",
  "key9": "4RJd2EW4Ms5YThvmefHotsYZGe1pyCCviJX3Znx7DvWkN2fKZ5DMS6RmsPyddZPw1gWNFyqA9g7hthyx7dbrVxMi",
  "key10": "4zcbfy2GCQS32bkwBF3DaMS2QbGyo68RCzZ9HCPbdwQQep9jRUKhwwzAQK23fJZYdBXTm5s9C51QLNzukKYhZgoc",
  "key11": "25WPkZp2jtXCbWdPMk4zXr59dLunKjBy1fcC7TxZ9BrTgi6tYnpjzT4uACUcwswBfiDGHwcv9fTE8DcRvU5ciEck",
  "key12": "2iJtiv1yyXFh9mnchqTLgNUpTswBeurei1nBtnFRLeyZBNapRDmiuuyag6mphmxyUwFWXhjpj6LZxdEpchZSYn7P",
  "key13": "zG5ABJpmSzfDVjTV9KJypXQ7Dj9Bi8KoHfBWhcqMRPKMirK311hfrci59SNN87ASwFaWCT9BgDGXuAsDpsrBhqQ",
  "key14": "KFQVMnjgoRao5wtMJt7MRzg7t1C7VQzNPS8V3BP7epv21peSUYFnVebaE2AP2o4zQ5B2HqapZz2kKpQxCywxiLP",
  "key15": "21W3SXkmd888A6fwjj5XWay9zWSj3U33soGTNxz3WSySwWBcN7prgFcBLKPzd5h4nUHtKAMp9GtzhB65WS1h4vns",
  "key16": "bmpPbZiyGrMeXtaWbP6n1wVLzDts8fevzeagg8ZEyQ5xdoPMpZk2nyNLYB5zXemDsECcLExoPPRRSSkkWU2mgvu",
  "key17": "5G3ofnuF9PBGhN96eS6BcyEueFhLRa5b4F7h9ansxCYt5ooQKKE3mJPjmukaZFwKAqa4ZbT9CmCHRoCYKbpReJaq",
  "key18": "5E7x3KHqXSj9HnvkHUL4tBV4VDh8i44jUPoocKYaE24n7GPpzi5h52aixD8QX16ckvGADbRYJ9EwavqiWydFpB4q",
  "key19": "26DU6czYTyqVkX6nDfDHhtDEBVhVdqHGseJi2TQvr9M4BUSeh1QuBsZQGKovWAyWoFNJYjvkvhVXtKi8X7jqRDyW",
  "key20": "4V2ker1ZS7Bcu2bbpSTJGr7rHXmLqJZMbd47mXzvxL3NU6VLD4MHrPGm5Y2Gq5nZcnGjXJ1pmwgofGBFBosurQ9T",
  "key21": "33KnuskiypVuhsRNrXkGeUgahZCoEL4vtWQAQWy8Y4vq3zaCZYcsSSJL8x6UGUQHTFbNSNQpwNUSHxAi8nZVhcZU",
  "key22": "4NtbrXjV1j3T34NQQyxPLC3LasgnHGQGKtJCNoFSwpXtcPSqp5MJMNR5UZCxYhKLg7Wm2bFYFyoPeX8fs6d9gm82",
  "key23": "JCqhYsVmg4fJwMvvQEh9eDV4kvSCJRZ31fEBPFMzrjiTm9WVpL47U8D1BVhysWzn7dT846hzvufUTXZHhcYzG3M",
  "key24": "e4PivpqfY243W9u28mvdvHz4Ap8hGLygXB7s96eVWGNLSJVQ6nVMM9EXbRdPHwFqcWs2g3sCUKMKUswbEe6U3aW",
  "key25": "2vZKyTX6ehT8n5mt56dPsMNrDDhEwyegaJ5LNMR4MbAVgeZ1QWLHNsxh3QvWGnzfhAbLXQ4vparxFH32aQD3VJf",
  "key26": "3qEauDnd5Vhkcsob1bwoWJMSv2aUpAhFGdV6jqLbwTUstHZmroZN8XcM7HzUvSg2txk2xg91HFd73uqHZD4P8fq9",
  "key27": "3VDfYRbR2X87PfruDbmGcF2ikhXtF29WBeDnTiLVgzgg8ihxcXadz6GkPRq8bYZwRQCTmndummgHeLKrZcHrS2uo",
  "key28": "2a3FH5ZR6fowyNdUD3Z3iFttUfkvmEtcC46A1TXM11sUbo8xYsaFa83LxARZRoAXJYQwmCZSsJi6DVnEd2TjGRzh",
  "key29": "3pxoExF1SGc6qRimJVhfKrHG7sEhTnSDw8pyVAuySSCVotP86eceY7G4zVTs1UYqEjdKvXuo6XsqiJyMptttMsZJ",
  "key30": "4wF3FyU8nJdL8tRDm7DMSsqboFHnYunbNB2cfyKRzbSK1v9h7eZoKeyaQXoasEPfYmw3LTGZiLRQcHq6aqzm5tnp"
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
