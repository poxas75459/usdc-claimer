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
    "3puJE8skzajsr5z7byhDn9HJz5vNxPTkmx2DxGmN6p7ARPRTZZyPorhSJHT6CoJyEdj34LNjeVoEuvTG3vYjUtLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wW2iFYvKgGj93bvAeyAB31RqvYUp73fSdyJLhGrsGopz3HMtshjLiFu4C93m5XhFwBWgJzJEE7gN5X4c6N6bc1Y",
  "key1": "5RAhbEowUmNp7k65fdYKoBPDpZJduQp1EDVu97qGpKZUvxDBdB6JHWfh3Yx4MGbdC3hmrp2mrDsgbuVbGNNh93S",
  "key2": "5iPexmnQsnww3wcFsNweiCFQyNE8iu2aAJPUuobutRDjrGujQHKnR5kLZAgRLoCyFQZ7Y8E3uGsKKbSrMdsYTe1y",
  "key3": "4YGkYsnVjexvNyGFns8cN5SkXaDMXcNgR4JVaEspdydpJUUy54qu4XBEeo3oVugLrQ5hR8bib8bW5M7FjC2hFnLx",
  "key4": "3kY79Zauk5UVhf47WWCYbJRe78sumDiwr9FJ4YVfkM2avNZNFcg5hBJd5nDJ5hHW8UWvxvRSfuc6MJ1Cf6LcVmmT",
  "key5": "4YraWNEE9YDSNaPYLfw4gtepFHS83JSpaMZgooK1bmjryiekEh96c4o9NsepUxqJ7Ryw8T9Ade1kT8uSbGAFQctV",
  "key6": "CGnd7UBwLd6NjReYWzWwv16h5apuLVgeLn79waJGo7SLpQHcVr6Sp9shuoKYS4SQZo6LCg8DVEbxDzwmCDgCRMZ",
  "key7": "3HFWs8CgUWx7RU4oAQMVFtJiQ7QtGwXENhQuLnCkhXkLMzsXyY9T5nufATe8evxYJMcG6CYsgmFWvPtDFCZRVZup",
  "key8": "61ZnWwjcBWiYSkeYL1mqrwXZKPMgetEA2amQi28YM5b4DLXhZBS2fH22k1sofQYnZgo9aUSTuB2J4E9qLuPmJGuC",
  "key9": "5k1J3fUCAiMQbF42J1s9DHSk97qw9qzRfCqL3HLbphVgxTxnc4bEGcy6XsoTdLpPBoVYVspf7fZVY3zzB8ZiYMoj",
  "key10": "3Y6fTEfhVF1k2hHHzvMi8iZUUAn2a7cNbtoqL7oEModRWntB7ygjct9UgrQNUKBYuifMG6ZUXbZZcH6NB3RzyjVE",
  "key11": "5FW34a3UHeNkPpYyEBiwzD1wwKr5TGD4vYf7FDUCKDMWVeB3NWTxiEpkdiwYkDakBsMyVnAk2q2vEkyn5xC7umaN",
  "key12": "5dH4nFabnsQwLhersxw9Tk1Fy3cHBayH5WuoiG85ttuVuxkFBiH7Cr7ZpmBrPxnE2zSbkMbK2zo5t2si4gz5X1np",
  "key13": "3q9hfVEPkhgpSEkHSXNF2bFaiQo2WkhrCwLLEoFnAXTfv9w5gH13X9uVYE1B7ez6s5agUY1AGoYCJbEwpYxncYYu",
  "key14": "4Rs1kvktRufH23f38NRVJeuqz7cZ3XLqc91NATpg5KjxiMsx5dYsMCpErLtWWb8is8UMyDFmJfp1eMjx3DgL6UR3",
  "key15": "5SKuo43SVxTFqWQYnMmJhsZKLyGfKqo6JgvndaGryEWyy58mQeR4386XGQQht9suoKSBcdAvtFBFBWxCSCxdvvC2",
  "key16": "622UjusQMHz6BT27BpouRrpUCzrhV995qxfRTDYymRhXBuhfJaYZY6eU7w6nVzfMGXJgi2oMGrLTztmAsTL1aDUP",
  "key17": "3j3XgyCYeWKftpTgrnKXfJQ3j9kBqyyPtzBjiJDvNWfhpP2EKLQjmDsnsszJ8MrnWoHcnT21zrNqpvjW3d93CrZQ",
  "key18": "4FBM2NgNMo6qF1WTwSaryzJFpVKXRm3X5ci9kK9bf5kwzPetXyt135LS22DiNAvy4ExodexZ6BPopHkKSubekhe",
  "key19": "39dLmR5bZfr67HsXk5qfjZezWBFehbe7PUP2CrcU1bvCnm3U5Xj94T23fKfawpwLMYXt41RxqsuXdWJ8pm5f9BfN",
  "key20": "obDcbkdLvLRDTwtmBk5wPNfPhJoDAeUziLzeNXJUfLXkWYNvgd2MANPE1F84Dxnrbit6xtLwdA5eoj4vR7WNmME",
  "key21": "4FS8FCwDi3ARsvJaC31Nd2b9R3rzULLjEyT2bnxHjj4VwFVPtXZLNir64J4oAFC76H8ircAT379ihnd9Qmbprh2d",
  "key22": "3nDBokNmyGvj3zREQ5tuHu4UuSakVXeLFp9pFsvyYzzAarBksuLAYXwc8ZoBrroBmKRYd4drWbTqyzaknusxn14e",
  "key23": "5FtsN6dqxFBATatAGiaJjbMv6NP5zbWq9HocwkKTqwHuDo5T4uBui8H2XrvyuEAWvXrdQinUHNhfGgaaPcUjXaDB",
  "key24": "4tt2dZdeutvjYxrpMfRyDNyx9E9AjFysTtyZQ9LtZxyWqgBbpsmfKWd5EdTTURcSXkvR5yjx1p7Joa9sGXdLCazJ"
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
