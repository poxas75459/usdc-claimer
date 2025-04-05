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
    "4kLmA4h4SYu7FnRUMNdbuvpWF8iD4xz4PqhpbhGZLiywJ1cNFKigVabAniuJHF1zJvPxA5vffUWTRYJ8G5abPEZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEKmheicmZyeENAonAbEvD9s2HLG8vRVxgZM2xdf5wsGzqugFpnmiAnEDs8uRfQjni1z28XSogHmymdGNGrJPtR",
  "key1": "4SqR9f6AEiuhNk3LJcVgp63wnLy1EUjJxKCedfP8j5y1kWVUChtkFxo6AS3VY4cDWLibwB5gmKsDRKZ5bmkq9cdy",
  "key2": "62gMt7kpJEejEHNGzDu6Z4PGw7zccaj2pGr5ZaLmiz7A2LsY7Z6drZ8meqrCFDmFUtaqAGL3ZmcpDmfexEoZ5r5b",
  "key3": "2Rfm4jcQ6sFBZp8ePnGM17rn4co6KEcLEiEiZD3sSvCcyUQeXTiU9F9Jp9GqV58nCGbAHRmvSZcvU157yuq1Kmob",
  "key4": "72sX3AVB1U6vLo3ej6kD8asdHXxgW9QPmcRcR5sM4nZtpm2bxbdsvnhA8LXT2U6avVMdq8RTrodtA5R4qXCcykD",
  "key5": "2H8thvaTo6HVf39NsNXYMLpf2u6p4UgMSod64VKnvcKmrfWETwyxt7ZLLh3vg1n43PZAJfEhbHC377SKTmjs6rbx",
  "key6": "2izXmCNJAoreTXXZfGfZH2Gj6wRQxHEnQLu36rWxbrCn16TFy7oHLGTFA1YeXVx8gGbwRucwkWnteqE4Hq991c69",
  "key7": "2pB9jeu3zn11yy3nLtzkFPxF66HfJfpXh3NKtRhGcJkTwqex1Qc8qUmEV7RkHy3zmQGS5BCCNVUUYxPzwhpeKbjT",
  "key8": "nHY8fzAFrHZrTpHK6pWj1JsrxiREJ2oGoBy8T3Q5stECaxLWrFPCkDAUidDM7vdJ2DEqbXyNCX6ZVUjTtmi38M2",
  "key9": "3xfuiKKvSs2dbanZVBrPp727eUQ58gmkNfM3B6Mt36dgppx3ABPtawfQnWUwbQcXbksFwxis7Hdj5JQXsgvNM8H2",
  "key10": "2uHyHQEtuymB2i1NinhTWxVpGfngL4hnBDQUtubqwBDYhn35JDPAL7cyaauanYc9raMLtZuts6a31xJgGVkEA3h4",
  "key11": "QArJxR3MgL921SNbYpNask6THvM9o5qeZnsNpXMvF43WQiwSdMdGNkGFGx4TDrPx9dSeBWj8QDiBoTSErx6qg2z",
  "key12": "rEHNx3SbJupxvYek2fE38JQ3g6JGv6t9xDupKXkAyqgkGsSK6pdMFzmWK7HpxYbmVafU663jF4VzxdzSBemk7wD",
  "key13": "9XmR7fKAK642PAiFqn7mLXaq1ErXPv6Eqthj98vhb8No2LCwYELdx2bqxhT3NC5KTg7fRPtyMUyMaxV5BNv2Dji",
  "key14": "2tX7Z6UeWDveKfYD4Y24TBN9xav7dKeECoH3gd4i8Y5u1gmRC7bDCmbrqV1MkPoThyt6QPSML9wkW4jb9Dat6rjY",
  "key15": "TVGBMcM5FEkUPX9PwR7VZ4YdAGDaHVvcsaBpAeBG8H5aaq1rkcJLMDK9MqaoF8jVhWCKtyA7KFHDjM9ifrEeQFL",
  "key16": "PNLWZkRsRUwFQstZqMK3dAWGzzQqjL4TkvTzrZzB8afDzeTueP6cwiZtc3LR6qE2rLkdQoV5uGkJKAQvoPzZG2o",
  "key17": "6T3JajQay9U5AZSinN5TLn5S3HG45uBUPt7jroSM22buwPX9z6TzDkyZw4v2J2MYdFwNGgGhLQizwEmJrxLWUPc",
  "key18": "4rWAPMi1594giTwi8mejFFPyia1MQ4oT1jMYw66ZJq9rpGueEtE9jGt9dAnuipk5izQh8RsxcxNcb9XyX3gJ4FJt",
  "key19": "4xg8cPabCgUtSEoFCqVk7bDLdp1Vui4WF94GPVL6FAGppBp5Q4R8KwsYX47tvFf24KYv5mYW3ALXgke6MkwpY98v",
  "key20": "2jE9XofBcpogSsNKYn8EMJ5zhCWHK3sbchoh7sfmiYvu7Ph3XqJyfSZaQ25aNfzEDvHL2qXHDwAHgU3VhppyMqEt",
  "key21": "49vK9aKe8PtKE8Q4r1E4oCVdH6XWy1VmMgjivDWmPR2ixo8hq8gpq8NWpVQg9aCQcHaUnKBGR5UbTyeT6x5L5MS9",
  "key22": "38oJELkF3AbQXcb8EHUiTmVnozGBXzqjnoVzipW8T9QYkAh2ybWz8a4kb2smPkudQNwRXPF7HqBszmjnTqXcdeaT",
  "key23": "2zcxeqW2gLGsrejHsDVef3s7hD47pZ4ap2neu4PCKF9spJq7WTEmnAdjnrt33qDSfQxakgncR17RobWdF5iwgLru",
  "key24": "4r81gfR5zgf2Vy6vzuN6nVi4Kvfj9ctykfPraanU9WaKZGQiJoVFTfN7jwZiNZUekBx3ogPQ8C48mg259zEZLohq"
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
