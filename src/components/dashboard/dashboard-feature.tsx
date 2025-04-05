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
    "2h9sMosvw4y2VHaD2kJTUnYvRLxE8RXzn7tk67V469bV9ZoTgH1azYFeok9d1MZ7adkwRdHgXiKVvsQN2B3vhhKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6397wFPfvi7GgND9nqUYqjo4zqbDugQLGSRtvKQ38RFT8kEUJFeN21gQd9gJQFArJbwFL8LTPehRuwHVaaGfpAZ5",
  "key1": "yZ5WVTwTboDX3ZR1qr26PF8xMccKHmypMLWdaN9bD8yNZUzPhncyGh1A1e1xBfCZVvc7GzHh85wtK6uSPYAbGvh",
  "key2": "3TroVNkYkPsxJV6t7owNYP5hUBC5K9HXfJhfSsSLMTveeFNP7XpQfLnatAv4YT7CjwMWH2wzhPMuqDD8aMkvaJuF",
  "key3": "4fismGnM6CJd7YdiPfZDbj1AaAoD4yZgrwL6nGL2hvV77jrtjqBbJkEZ9QiNRi7i6qTYdHcBCL7nPdYnoGiyNQTV",
  "key4": "2U7ih42ce6yAUnRQYs4wPwZjzS9BqysoFRnQDUaUanV8paf3Af5jtAq6CHFb4t7XJRWdWNYuBLEKK1DfLPCr6ksS",
  "key5": "5eLguwoMfcGAx78jxNoX8oityiSz2Cmf6p8sdtfdgFhhRbREdZV9AbEfKfF6K9BZ8kpb7CJ3hwGnG4c4543Qvb2d",
  "key6": "aJ2mGr8RkoShWgDGSL4vXTjkF1Q7F3dwZSD6xDgJhEm58GD5JyQxAGTPFZqom6YfrA2KnmDr3nykbDbicAGY4bf",
  "key7": "3DzQZPgitVieFGDZt2b9BnLDMTYUZcDK9K2oaXYrK9m4TL9QLrMGYWju9WbciT2TTjY9qCQECLEDoxXe9rbKVkFq",
  "key8": "5mVFKw4gtZ9j8zH3ybgVzdygsBQ46wAoWFbQysETuLqan8bFNqo42V5fm67etE8C1ctteS63Vh41qYucjyZXCq9V",
  "key9": "88LshiBtdRiJqqk4aocpmRD7qoWpT5R9uU16NGFFyBS5phBbPw8vLBxb8HVuLssBDqoAMFxyiVqwLnfPuST4qCL",
  "key10": "rxMaZ2tRZ2ELvseCoepwwQzrxXUhmfvVQeM4vS26yLRjg3gEmcnQWkNJpBC1jYDdmdGpynAtfDkUz5a856riD9q",
  "key11": "5NfKK94ge1GFBRsRkZhrhXZkibwqVwVNLNkUWL1qTkQRKHb73ZNkhXEhj2imZjVpFSa35VmBdwNBWUitC87EEhER",
  "key12": "3VvHKB3eT4gHzDNZRHjDaD1S7h7riSbfKEr2zVBS9W62vcRJncGLqeEB1DojA24FtqonbSZsfF5K7St3fS5MXSGK",
  "key13": "w79pfts5JUHX1p7CLXxQUqNhEQXpewr6iYkbyqg5CZ9eLcmhzkp24au2jSy3r9fL5eUjLtvXeicA4mGaorvDf8w",
  "key14": "7tai7KCyKx2Z1uD4hdyMqcX3UVNNVAq4wqikjRwNuxrCLY7Bx3sMTF7zELKcQkvwgEnaekDJNdas1DERwikpfK1",
  "key15": "3NqyJB2tU2FUBKQjY6x8oQDE36ti4PmweAHwiMsAcqvcV99Ehd6m1hF9dwjo6wiDfeduLm5iJhdo1zFtUiR1RPLf",
  "key16": "2aHLUmXmVhWFsq4TQGYC4kuHb3jnEqwG9sWQxRszofxgQ7HwnSQFooXckgGNjsLfneZ3ZnRYecEzvWCgeZz4w6kH",
  "key17": "2LogRWvXbEMmhzjzW37AaRwde1uUujzns4eZ283yoNAGUUwgqmHJDw5BcsEX7Vjk7F4WsWaxrgipR2PW3HrBSy8r",
  "key18": "AZMDWpJxQbTX2ZdxjUU8DrnWzkhVWfYWWcXSxbPHdJRvZW9XPspExfb7AZhFAhJXB2hmzKgZ191nEp3Kqyx2nZg",
  "key19": "5ossfUQzp2uTj1KjCetn6g9UqkUGDZ2b24xaR3PcRWSupeErJbbvTLJdF1f4XEqYanWXWNx92ZSvGquJq6u1NcfM",
  "key20": "5X1o2UjkMkJrpVrymZJ7ULrF3rbiEMeouyq8JperTRrUTEM1iN4ibzDHxkFEVPbiAgngYAa33rXNaxvBr8kSwpWQ",
  "key21": "56y5AV3C1H3Jp34dA17hihaUJ8usfWthQwEk9Z3bkvs4G2Mnvsqgq1TdU8S1iLKSHFN3SLRQhzKmqVaVCu3VuVVm",
  "key22": "3uH6kTfpmmixgjNNJTGvfkBzapjtWDF84YvukHuR4ACasJnuvXjiEqQ1xpbfdYgkLGWrvKgSdmz7CE6fTokMpXBn",
  "key23": "4BJtnALriMMR1rrC6DhPAxwoP1KmPq6coHT3FHchG8DfpCHTQmaGy4h8bpsRuQ9MvosbyQBPoXHCJKydkfPkbt1G",
  "key24": "28Kjt5Bnex4zEBjatfHG3WN5kCq6UXrmXrZrMEqRKbRdTwfApQAa8wfKr8nN16mjR64mroU1gMomR4ccpPkPwc5h"
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
