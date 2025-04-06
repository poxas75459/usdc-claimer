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
    "5TmUcdg833sZWNAekQaFz7N3STPyAtGC5VngDcW2Lw8CzvPwKW5hVuQmjYCoGBBm6P1ZJGN98h5UnPHVnEQaZh4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBUqAKt6CTinY5g5HqH7Z4WBwA5WCcNDGGsUdaawhi9d3tkkBdWsLkS89atch5micZvUP9eT6WSNCCXX6oSRjNV",
  "key1": "39AExgjk6qK1eLrittndvEJPsdy16d8YRzva2QMcsFyq9yEcJtUWGpJpuAj6yAb2n9h54rq45PP3Thewatn9f4Ys",
  "key2": "5RK2X2ZCZVxFiwu1wjbsbGqwteaz9qNVYWMq27YHEmyqB1g4jAM4cyD6hUDJqZsKU28oLn3kDTa1N5KfK44cZFwn",
  "key3": "2suBprecs9Ynn1S4zTjM7cR64N2dCD447UxgqFVpQPmesbNZ5FZCyhJvaaFF475HJXfrs8svFpTWHTCRr6gSL8RM",
  "key4": "5FSRzYz36gDybPCRrJeJVDak15634rkR2qy8yp7oUWKc8K8ahaXkb5pR3jh6zbvkSLXttybSf1pMCTpn2yyhKLfd",
  "key5": "3Q41UKYti2rXkp3DegVSbw6CfoA1h7ixHWoJTyCie6EKmyRKdMDF8hb8Q5UTMs5QdMRuc1cgWGbTBmbu5Fh88two",
  "key6": "59DtnoT9KiQUNBGLV7rZPVMcmVs8JTqkyHLrjH37Xb2gjp3m7f1Ygg6BW7RGyjJ4NUfVQfxpX9i587gKvhMrPzMh",
  "key7": "2wSZ6DWSh7i9KcmLXqYzgPGDqRCKyChJWGZFuMeacRKtJDwHqpC6Xrzf5sGnnpSJWv8N4HzbYdm6MNZE4LPwjU5u",
  "key8": "5q6EQdkmbZGfMUJdBr7aj8xJTRp6wAUxnM6sqhtdDbw2XNd9C5p9Syo5LPBCWjMbf7aDBZ5Hn4iKb743ekSG36eo",
  "key9": "DDuzJku2FvXNT9arnpszvxEYK5bbXxhdHDgBBUFSqS4U389Vy6R2uixVDotyoXq6QeAq8tZRWX9mDHeU4j21nTL",
  "key10": "S4J9jzVGTP8uHKCRYUiWc5zmWGwmeUvL3HwX86VZfjYDDDg8rf72Ac8gUBNfBds9o7Ff98tJBxd5e2UPoNsF4FD",
  "key11": "5AcW5p41e1pMcz1oLUKP4tYjVe34naEyafjVGGEWsFZtpT6YM4fzvepworNTi2X3jJRSVKPXmVGRVYsmNPavP8MU",
  "key12": "WNABmhC5FCuW7SX8JqrjJcpTSmwXmAQRNt6i64QCjnpHAqWkCJU3pAghLEoihRKHHuNX2f7agWUUfxEpHaJG3LQ",
  "key13": "DQCEusAePYFeebet7JKFU17NpS4s4LuwhFrEw6ETBx3XFHWQ5ZXpmo2o8hqNhZc2XHd6YVPEsrcPaea1hqmbnfx",
  "key14": "3SVaLqFYqqANaVYQxMSbk2x5kzEdaTVjHBpwy4twrtubvc7SBu2wF2ncC5dMJe2QVA7Ln6mTauD9G9CULTQtfzi",
  "key15": "5KaPLkdU7mQK6XVJzWKExsmRa6Mb2qQ7zGTNAsAJqvrDMHJ4d6dbTXUJMiGJDTsJJe2Ncq6en2fm7741SxuC3BZN",
  "key16": "HrsDpdMzYh2fWcvT1SBbyYafEChsvaMju2AsmXQYHMpYYqUwNXwLphJVWme5q4QK1PyWB5kvqnNnHmbDoggEhZZ",
  "key17": "3K5Zf4tC5TCnNBUiArUMRNdRYFQuSxePycVPrFrg19zPgUDR3294wNM2B4KSUpDMn6rmQov9XFbFYqXs5AaXyMfk",
  "key18": "2f2HcUA3D5ZFcBKh9BTvM69HiexLVMLNdkkeAox6wprbdUAHhnASA6bdN69rZiPkkNQcj6p9Hqs4nieFLpADPLNu",
  "key19": "2o1WDYrePJX7oxHzW5dQH6PmrEFWWXdF734E1aHRPuL6YYdDSD3ScKndH859HNMr136kusMNcYWS3sJ4BzBs92hM",
  "key20": "CKxcNo5m4fhAP9APt6Ld8eEeRTn1PqRCPW66BeH3cJkQvUEsEv1nfzcBtRPejAmz6HrGVrNYxNkqAJWnYJ8ZMdD",
  "key21": "38mbiSDZMjkwfwwcpz2FKJotfs3nPhfAvCYhgNSmsnEeMrGoEHwMhQr5pVp4smYsVYUj5Uy6mN3iACXhUUf5RiSo",
  "key22": "yMvfwsV5DfhCmR7oKGtp6H6589SBywgpaJiFTDobuw2Azk3vxUhUhNRfUAQ4eTufLct2a5SC2SDvityrA61sK63",
  "key23": "2CJUiX7pGBj3xicc2haXwkA996mG4Y3gNpTMNAsSnfz6zr5TXbvheWiWtWwPnbfwafg4UsQZtYxVj1ETBQQoWwmN",
  "key24": "2AfwuKTbxN7sEoVQZQh4GTj1VeSdK75xWLio51e5WpBEY9wKPSGe5ANHNXLf54rYd4xDRZCzctQQcR6cHskYPEFQ"
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
