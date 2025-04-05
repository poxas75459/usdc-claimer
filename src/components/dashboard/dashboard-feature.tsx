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
    "516gfiCsP6uc4cLmWwwKhobeyzikBhd1j2zQ3FQDArjWBEaQw41eW8X9hTMjAuePuvRsRFzaE8e8CrZVheKaXydu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gCPBJviaJiLyTjPwvU2WpaJCqHz6R6Q7DX6F6BRy97BkGM1MW491VCnhHFjbQLSf8qTEHYqzQ33sthL6WGkBRKr",
  "key1": "prB5e1MZCL6z6XuQy1pD1x4CwXbqvdJUnkv1vK31o2kHALfWbizuV8FNdyXxMyiKyepmCHcV9G9zUnZikw8fLPv",
  "key2": "2ixQGfi2Q4UH3kHvvenYGLBTrV8nJsRPALwrq5T69EGvsWV4yz749u5S8U2uaQfTtKNjJU5n2hEy9gF97oCgKzaW",
  "key3": "3LnBFizb11nbhpUnDTTV8TRKrCHVzKDBku2pb5d39E3su3mzgwRN1KbyvRjWyVZVE8Lt67jD4e5AY5AqBZZR1DXc",
  "key4": "42bZq8G4sJRGj9qJhwUDDC7MwpX1pU7qchkm2mLFLifrT25SX99vP3WgzHbdFmZwsC8FLWwfXPnTYKc15fJ679Jm",
  "key5": "3d3WgHrb9e1EMea7mt3ubrdRBQ2tH2ByZhftZjwvCZcZYL97yqVYJ3qxuYwwK1AZ2mYPt2TKLgcXE34D6qkeoteo",
  "key6": "24fqJDidxYUscEXyJ4XMUwffKpGRxg8SC9DbgPCyn73m4vw8BxsSkBDKsWD8r6LmD6HF7DHqTFyVrdkq9EEUNxaK",
  "key7": "DF1e7AXgYLkC6yAwaYU13cFLs6E3Uo2fchUFxYwDLnRd3KtXRui25nhU21HBxxT5krEo2UKeGhyKb1bFiBHk7e5",
  "key8": "5ukWQX7F4gBJ6CzkZRzA3L1snyq4h959AgArBu1s3Q6HtCPDhhFxyCFFSXyFxinzoYownCCz5x1E7Hvmv3rGZ9gT",
  "key9": "2nfPeAy7CSHgu1XRDGreBcH3kJQ4v1mDzpug22v3SYDJtPLKHS5qxiUbmsXYJ7obvLkZs4ruroRwYmnTrCWcMemR",
  "key10": "ZvHxpeTuJ7deqj2ft2J7gxmP76b6uGCTgVWcDk3APF9o6Xb6mcgfo6Aw6CRQPkXpo3jC5Y3AkRbD5kVJMiQRHRQ",
  "key11": "4p7C1AntojiGnSE2d5wJvk22UuqUDto1wBMMBBsGuQqvYNjswVQuqFX3mGqFef8mDxpUosAgJTVDjNDhWrYTM7vx",
  "key12": "3RSv13SCLTRGhWCVnrLAGwS7oj8McPMpcenJ3Hrsqz47o1gLrEKjnHp3eEqtgbQnWDFrrhXaz2Mgi6DapzcWpJUp",
  "key13": "mWriCDQcr8dcJM2N6p5fUdnJTSQ9DzTJszMgswggEzjrFeDoVGBaMfYuhzbZgErDnMvmnNpVvnCWUcjm4aEAHP5",
  "key14": "57SkSza18xzbqCetedbJUXpX1Djaiw8pA62Ae9k3wboMr1x1pdfjv8F51USN3T1SwCrRfhP1NTApEvyqDwW6yX89",
  "key15": "55dtXhatBkFCUp1pqmJpVUMt2fCsD5sapNYnwXdkorKdPzuMWoxDk9cD4F7RF64gAuiGaXcd48HMcuZWzVQfyFfF",
  "key16": "2RkDTg7UoQt1U7FBy5nJMJ27pKjAoTvxNXs2PPDKi73o9x6QH3wES5iajeeKAhZPVfwceFktZ95zPD4gsy3Mti62",
  "key17": "5wGWPZyAvEtWM85Gmkbk4666WV6dwg7u3NFhiXwoZMcvM4inGGEEKeY3jCoFyBcwuhKgBbCBknEL3P5J9qm2KFRE",
  "key18": "2vXa8mur1oGmohPufL1qCSPoXafTX4VCcpyrqprLSp554nYFhaQf5KM8nRmmDH73tYbHWEiKng8XAb22vW9dVUSF",
  "key19": "5FzEjUsQPNv3p4HuSudesvm3QPNK954widKtvtyAJUUbHcshoynysBMjA5YYqisnb6XexYKY6HxU2Yrb6fYRqajK",
  "key20": "3fSU68Ja3uNx8gAcauLU1Ndj1FbVNzwmyCL5wppRcqLAM64bVU1KRozVyd6Hg9g7AxavezA9y4g7LjreHp89m7mC",
  "key21": "4FAet1Piipjco4mBvFkrR4ApQN2BRzHzp2yQGwMhf7xxhwyV6iokLrmAs8bveVfVwHvzhrj5TEH1vwevSVd2zDao",
  "key22": "25uPNDAAP1GmLymMZSQQ8uYMQoeuKn9TS2cwcQwY5Pvd2XC4oANkfiNL8GmQN18zfUUfPA2YocueqB8YFcVGwC4u",
  "key23": "33rc6x3uCr4xdcGGodXjw6E8n5KLAaA6rmaEK97Qzudo4q32EE6ppgiquzFxpsLYmtSjPzSZws5rxDdnCpdcbACE",
  "key24": "4r1AADyhJA1PidRLjagMgBx7pJF5QyzyvfQxRmknsZntx4i4gJWXfkAtR1LKB29h4G5eRWVwUJANbVA4bXhRDzNj",
  "key25": "2i2eFfooWDgXpGKmKSmUxPkPyRdhfdm3tkvShYf4Pjqk822fSeVqwGGaUCHrpe5WmRefRJWPjRdqHMTouafXVaQf",
  "key26": "2oc3uuZSuPYMufgmeLYsTAx1Cd1c1vFp6U8d7LYEeHtyQxdNYwuuCHYrqFm4Tx6CdXqfJdzQfB9wk2GQQQUPkhRp",
  "key27": "C7ZwUMPAjWFGtst8cNwtPt6mj73mZeYN9HxNS9Eo7Le32RQUQk6m287MxDgU7L7JPdc94H47Ya5amz9nnoVEiLY"
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
