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
    "2ABNjDqHsGvoQ3T9dTxHTGmEWV6j2DQ4MbGfpXHkdfkfRUPJJGEQDk9oMVuKPPBYewaG1H3vogY7ZGGDLZ88CNfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSJNEExBmDxNjtxnfpspC3PLoW3Q8PCJgFqgKtZQ5jsjUXQ8At1KiTMXiSCFe4LwnA2e8L3Tbc3apKn8Kndv9j3",
  "key1": "62AR6VKVEJHo2P4uD9Lwpj2jq8kvEZ62H1pbjurcppygNfBX84LBcyZNkAkhBbtRYMMgjUsWKg2dmVULMrL3Tk2F",
  "key2": "3mxbk7ZcCVRfZB8uZGa9D78djE5xRs6EwZqY1Juqw7L8Lybeezm214uDdknsPxJgyyZLFarhDdaTenQoC66xJCZT",
  "key3": "3bdsR7P5yjCvcH17342CA6wx6QJ8MMECUNnZ3DrtkYSbztc642i3jJ4RUPW5JSQpZbiswzVhivPrWnrA5T86vcbX",
  "key4": "4iYr8n94ewKrCXaFRDeKg9ixHXwBQ7tze6yRwbcwQ3cmmtn63WEecKi6u5M86kHtzXX72xPPshMuJNtfwfuDzLu3",
  "key5": "5NkMthvB3Uonz8DJwokRg9zpiy82wvDybavqpTkR8hCnNjRkaBQ9VHNFSF2xZrQuvrzg97uBWz9uk2SK5w7hCZds",
  "key6": "5a5YVGFXdQK7NfcuW7MaQ2rM11FceRp4cHX2CRRA63XZsJjuEh3r4yDnnAbtYKNFzVbES4FfH5Qp525prWGouofF",
  "key7": "55khadZ7vaN72AveMbbT4W3vGzzUG4Q2iN9XMyQaKfM7QJKdMbDeNURWHeXsLn8UuhQMrNt5dPppSe7A7pjDQn9U",
  "key8": "H7s1Kkv8Z7M7FZdbwEBEGT2VbXXgwXefRqbTySrPMZnveWX2cz93THxtfYMQEDXJcYrnDH7pXHKuzVUUqeLCef1",
  "key9": "53jVy1zXGmEG5f4v16dVSRZQeVzH6zTeqxbDhKDLVTzZVbdwY7HAzFtJELzZkh6r5cFWyr9VbPUonXoJB8uyae6D",
  "key10": "3ReE7xxBZsxjSp1GayGsaxBPtZTRtNsHnmU6CPoDau4uyHHWmMduNiw93fxorzYJeqvgrAYvfgGetZkMKYAhDCrz",
  "key11": "3jB6LnwU23TGWVbukn2eeEmr9AUfvDD2rpCaFyFJEmGgecZ1ZV5vHMPyej3TamP5R6o5VDG1nCmYmEE8zjkrJ5GN",
  "key12": "3M5AmDjzn5FAcx5r4WxmiNi3U7c9wjoY2ijbQGVr3e9Uu5caadtDzP4VVWxrh9TATgrTC15gr3QmbZ8Mhx7GsdyQ",
  "key13": "4ByLrr41K5zjZZUcddngffkVHmWHiVzLScyA6hKUydRxzpDTxabjH6MXMBgjAT37QCD9u3FQnwAEAGkm4dwsToSE",
  "key14": "4dcdgQsNwSDBg5ee2P62hb1vbg8mY3pNWyUxj4RCNUqJMBFsnEahegijTBt7ozxnhk4fEaRPXkGfht13dsWMGpJ6",
  "key15": "9G9ruSX317j9dcDCcUhyTBXfuDjmCWpPXjBwFHcVQpNwkojKREtszeRr1cnHiS8xzqcgNLLRVmacVzeB2gxwewa",
  "key16": "ZokXvkGLuRcaJLdL6TJg6h4mJZcganimgQ3wiH14cUBohrCFCfwHRDpYSFtXzjmGKTrzVTSDNJAnZqBRq6oR39d",
  "key17": "4PmN14kuMPSPiNFtQLY9FauNMkvch6znxyLz5QkBE48DoEiYDGRhK5inGaKKcQ1iVVnrFQfjUwHX1ffyyttFAzUA",
  "key18": "2weMLeWzrdHD23ozaioJfNbAMCY2XbxHLidGvFR1ZXQfrN58o9idLxQbc5kGub4YtV8eeUinMpzH4oTCrzEnTeZR",
  "key19": "4jYid5Uzp5RxxRdnfqujwR7Rx63m1HkfsD3mRbQBBYZYQPUwn3iDB1N1EQu8HfNXNePNQeJ5AU4s7EeWZ5hhh3sf",
  "key20": "5G5FGh3TSVNAwCJK8AccMT29HL9BxmBmBBjWz6jYc4PE2J7Z1ZJzeJL3i6kcfCHp1VbdFvpnaHmrHPSrY7DE9S3H",
  "key21": "3CNcbBbYChKM6bsgGFKmHnomyisaP6XwzeJh8Kzz8nHXF4FJGTvJ94odv2DhUsM84pkNaFruk6PcYET9xgroWH1Y",
  "key22": "ZULZ7X5uEhnFF2WPgoraZTTgZBM8kw6EAVu5N8UzCy7kZkqSyxmAG3sTgmHPqjVpRCBdCE8EuvE9yfSQRwbj8hc",
  "key23": "5iL1giXGjKPHgg4a28a44bm3EPUPQZRuBEmvDTDsxySfHdzxwgenuGvTioxebHPJ3XadQcjxX3eGBSjgjwgTFV8h",
  "key24": "4Yk11VHAsT29mrc6H5VozQSeNjZWMTf4LwsZjFJcbcKDETRcia5uQGn91ncd3yhDWVvDot1iuPCmDfuQeYBgvxGi",
  "key25": "5YjUiqwrQMQqNFasFHCYJGuNMzPiEe8tkvBzLCCvFNXURRqjuyHfhnx6YP8QsZNEYX9fj7ScXmR6Xp1tzBXqKnRZ",
  "key26": "2udEVN68VQP7xTPNdcVpq3SP3d7G3Jq2cAtXznCa52bamBdN7UdM5wiHyGWoreSLDkEuxnfXdS3K7i5SiSNJrha7"
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
