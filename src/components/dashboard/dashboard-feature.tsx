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
    "2GSYhps1jaidQCKXciLYrUzBoAe5SWUv7Pi7i7ZHA9X7KxTizTBUozK9ZRiPBe12vCjT83pu5HHkfsq8YbvHNftL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNvPRpWnY8cpGxqt7geKSCHCULttq2rDuB1pPnP4urZTPnvE5uV4JPBDkKdxy1qRznXf1YFrHz9YdY4H2FfdCCo",
  "key1": "P2epTVdkQfed8h5hAjujvSEFpwPFYsWbsjQUK6Rfe1495f4wZzPwXnvxZ9FXqxXD6GRoQXSJKFjzC6xBePy2oVX",
  "key2": "5PL1v1hZUtY2QaCGZqtZzZMPGcbDj9ogboK65mPhm9BBLu84zAqwk4svk5S44wc3Vu96MBAYJe2aU1YQz7BwkE8E",
  "key3": "NjdVJuRePfw8YtiDfrzizYm8GMtkWCDbpkGFBHAMJjopcoVN5y4i46jzmDrEZnkkg735Bp1AKQB8JmR6Pz3gu8j",
  "key4": "5Jh8snzqxDTGLVFXwthJRwLS75Y4f4csPVrjYmCewQ9QDjrRwEG9PQB7zQUFvNkq8NZkTNu5D4VA5XPgzd6vYQ3K",
  "key5": "3xY42VNprE5YV4usqq5MBL329B329DZBcee4CvrPBq6YKeqfTFBjQVJMdReXxaw5Et372CfW41phao4CdLkAM4xz",
  "key6": "5iGkUnEtoTSNZbG5XuwAcyTtZdbwdbueNp6NbcWh6CytFbxhCfXfPsM5rF4DwhqQdCiBQzNVCYAFxDQHPdZ9xrNX",
  "key7": "3CuXujoVMMKpqpNRMaApRrpzgZwovjnFdHa7JPYsFv647dQcx8TXGegvXGxvpH2BrRczu6uk6f7XMfFQQ1REupF2",
  "key8": "5xD99gqTzy1Lik1CMhYuE2kdfwPCGvy6HngLA7QyK3ZBMzQUya8DL3gdoF12Mv9TALYCUtWfweSuFKPG1MQBEE1P",
  "key9": "2VYbyHHeKEGNaPybpYZYUaucRYtbU3VseXGVRRCEgCGUDSXdQWLoJiWc2ua5kGHCzuaqukiRbt1YDYNTFWCkKutq",
  "key10": "qFneHMQMkr1vQGLwTQjp3JZnHtNghTqKP1Q9sT3piC9gvcVHTqTn2f7jJDbpExVKnisqtNZ57kZLYtYiEykqA4e",
  "key11": "YhC86JbUsM3PmoFgpnckmRQZ6kyWqu8dCL2nrmLvWujoxhHgXNQrE7EuXcB5Sr9oXx1HnTEYruwniLJfvSwPowR",
  "key12": "2kS7KE54c8vQxSR6TipCFg3P1CyTbUxtNdbBRVv37VzyPEzHa36L9LLC8PSoJbAg62CA2Hb7XkV5df3iUHsRvByv",
  "key13": "2thVYfwrVFWeAszZRc7vVMVNyCn9jnFxqw48qwtnGaS4DgizrhTNVdH2wCRxdKAFfUDxPEYnt1ugufjPxbupVgF6",
  "key14": "2vzKF4Cdc7XBfMvKEQp5QBqwJCs41ArDVJ86XtBD6fHsxNsQj9ZuaRLs3e8fBcMVL7Hj6CgLY9gXGAkC3FforxL1",
  "key15": "VtM34yMuUDsyjXbwVS6pWBsxVTa9e7ecaie2p7sff2GpNVWsMiHYPMgo2444Ei6yLhdg3fLnZNXSiAcKzvgcsHf",
  "key16": "5HjnTHWcnz1ceeGaTFxugVaT6FyomBiionud75dBmqtfyYEjjNR3f7TCYoxXa6q8LgFZDpqVRSMVAgTu7xsr8ycZ",
  "key17": "59FmurExkZNBsT7wrUGxqrGH13aATMwNz3MuxbimBF3pikoR9mBqoufAU28dRf8HHJQaSUUdqbia2b79shFn49yQ",
  "key18": "4vW1DYwVy8168kMy55KD8oo7bekTLYAYasNtni7a9dzZM45aWoCe4nhoex7ySSt4wbiPaBamSSGKwFhxGjCBRJ7X",
  "key19": "5YT88DSRvnGbpHsnJNdYX8ZeV5fpHofvAXGYiPbNLnWbdMEnzZT5AYkyKeHkSuPoqoVYgcTofTyZD7zTiofidtyL",
  "key20": "3qRmAaMvqVVvE8FXdyjfDjoBNfLUtTbBN3Nnwwf8QUiZJLnTNB2VN9v7eNphPCcktmRgRy6EsxWYjJYWXSxgHDbh",
  "key21": "4rsLLTZvj1TxC3isaZRohGCw5Gzyw9QkkD7ndAKc2dduQM94hReQ1A1RbGgcDY38vj43oKr3MU9AzPvJy36FL6nC",
  "key22": "4XWG2WsfabxcvRioQ8eWYvh6bous8x8Tem4Q5mdrj451NifU74ZmqEWtaycTVZH75KS5Nv5q9TVTd2BeW7h7mNHv",
  "key23": "3Jhck17wDiFdcRmfbXKUiD6vPBaFtetWPHfbSayWDjiZ4CjM2VA7E8bRMuuSZEJEbwSZZLT8qHidY72RTG8iogMR",
  "key24": "MGm6sNXZ6aUVYDbYQLi341bvRDJ9vs1WSVLaRmoq1Td7uRyv3C3AeCP46BC9Q5Qrt1QewDcfj6cqemkxVcDigug"
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
