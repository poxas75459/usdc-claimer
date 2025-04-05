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
    "2oVnDXqou2syQ7VVDa2ZcWt4wCQjWDp25cbiLFp1AA4YdHvSz2Kk1CKeYH9P4RkZ1cUgyRC8ij2tNicdSymswoT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMuzfoNzY1qg1RdyKCC5Pe3Ds6yimLdtzYLPiM1azLPf8VKQzBBTcwebFyLgYuj66E9k6wLMyU6PW9Xrm3BVjon",
  "key1": "3Qe541NZkEeF2vpNmfgUUT4PHhziWGFTdqKtitkJkLcb71dK2ktRP7XEzxRGNFrLv5jqtAGcmyoeDsprRdiXQia5",
  "key2": "4y1Mj4U3Xvt2RaNPe8i6M1mo8hFThkG4vxUmi8brrtLqxrDLnNBF4naFCrM1GDaZyTbCSJgXt65fgSk5AieKSQvr",
  "key3": "GwZJFdu8VMs6yin3fWr9kbN35MsAtuGV8WJQDY9c42YcHSSCD7uAWTjVbMo9HZMsEcXPo3jhASDVXyEQtaAhT4f",
  "key4": "NYJeHTdAbLwEp2pNV3ZfhMpZeJjz6CQ7Fscx7kNG45QZEkZcXzSd3BpWrZVcMW8EDLwKYsNWZX2jdNAtBePgPfN",
  "key5": "4s2UZGfWsjnkxCUZ9ube44VNE6b959EHY77HYQ5EPhv5zkJC2VUYVo1Gd7iR6Breg1zPPTLtphDqHRXaws8wfAGe",
  "key6": "3SqPuTKBZEqsymrPPFTnWSHUf6E2gbjsQN9HSrFe7sHjDHHDysoq4jnMxfopu35XJthcvL5KMRREMrnrCfby5uP5",
  "key7": "eyXjEip15ghXFSpA1jkr4z6Ngxk42nRLNgrUZJZgjcJFjked3eaP2gfwHL6sgKBaduGGV3LKQAsDnuY8UJrWNxj",
  "key8": "2RiPM2fi7xdNWJLXbxFLzBS2sbrHKWuLBarkD8ukBnMGwm1BYuWcqnRjFNzCdGBeS5BXSttVUHwDVFoP33U2b85V",
  "key9": "63Db9RuwgBtYomRw6vcPrPMAWn3k4v7QCB2CfFCFMjZpbAFG94nS9Ywj6DnKgVvmnf7TUEcDxg8eCFJaTeZv6c4U",
  "key10": "56JGNLcXihgu6fWBPwNCnHuGEvycFfQdZ3svoMrt9KPdsntGuEkpVbavkD9iyjkbdXu62cDeQMhoqjxbvkcKWamk",
  "key11": "51QEgwnwSMim1EZC8ZUKHo9YtTvZkABFM1zrRZEQhPcimuup8brT3bbmF2xvhKrkkGDZTrsVbT51gM4S38oBmrWC",
  "key12": "24YbDW5FUn4BBX2R9UriWz8y1DdnCt8dhLWQc8f3keNj1gacKDbThPFi83r2VLQubpyhzQWcTAXnqoeeGofXnz2W",
  "key13": "4XiVLMrt9RQEnLfTxmGfjr4nVT2mG1nfbP1XDhVb9cCXnJKtPf5k4f8Y4nLApxud6HtGtQMaFSwmW8BDbXNmWvQV",
  "key14": "57btK138q4GTBG8kqHDftebfeuTWQrTnqLzU5qnLpuvYsCqDYKsRqiPVctEb4VV4PnEk1Dt3mQyM8aJrWXTTSXxW",
  "key15": "125yWPrZ57SkiQSL1EBnxBxhqng5Ye2x9aUyim3GxyimV1EAPRfj5F8JuZ4Kp3XAboBudpfbkvX3TzvT2QwnNTZJ",
  "key16": "7xT1d18PkwCBZxEK6oe9AChoTn3ms22woyhY2kWKwJips63AbcQVb2qRRkWpknvgHdzzSuKGUkdJFmZdTqMvk8U",
  "key17": "GJa2YBvqAAvXuYtS5XKj2GjTw4ScybeHnfWvBMy6d7B4fdSnyf4KXT9jYLSEUx9WwL7reMhWQDB6TtiEmRixkRr",
  "key18": "5K4FbLcwdpRyoamBG8h6F2MheYnUaM8b1wbTYbGgZEaJRuvT2qUCjLaX9yg94tTvqF4XjeGPHDeD7EHsjD6mDmwF",
  "key19": "2R7sXrrEjPrzfxfT6W1WwGeZnWiGVe4yuvkUprqVxRLTprQtkxfRSk64WdEKbefJeLQKhBGjK5nKQJ2pPVun4fBh",
  "key20": "enZtdQJiM4vqYCCAXKbUPM5RvHQ8CoxYsuAwcEGddSdm6Zkf95GjqjyZhjdvqCMU6y6HnKtvoHoa6WojiB155fV",
  "key21": "4V2HyjCzgJQxnxQbcqDS7EeKpXJyqhHedMH3S1VuQWsS8wTs8MMD3wdMF37oVzXtq1RC1kLCKpxQgRjEeXGWqMxs",
  "key22": "3KMNTLsD59UtL2Vmm8e3jFDsLSEBpiE9axrLrgFFjXweqsmge5eFevzikg5zx9bVrAqwh9pkVix47LdApFQUnqCq",
  "key23": "4AARmXdfdRLPShgY9bMTcH6zdzr1WVYfa2PAVseExUyfU6VuF6vjTdzbiXqR8PycZGs9Q9gwBuXEn697zTYBDkiD",
  "key24": "o2EH9q7GGjAmVnoTzQ5ZfddquGA24vMNMJX5NLQ4iuwmUnTCCJzqSeTTNoGpKkAcNhhHX2F9zGChyri7fk8MuuL",
  "key25": "26SxTG6ZVrXNBfAjjP9yAS69MJQ6r65VjBN9cWdC9FZvRB4fnjSKgknzeHEosEbZXQenbttTJhm9XLhPpswoBpYo"
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
