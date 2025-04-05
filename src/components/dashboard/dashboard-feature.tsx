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
    "4J9JjfkCePL7CMLzETwzx4LfnLNS7QR9C8tHnewis7BhtFh37oP4rBrV8ZB3tuDnx6dyNAWQjvx3bhzBX2gZucnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESPwnTHCmEBuzehF7dGuDBYWLDriFKF7smdR8F3wBVXTuq2EtouupZUiAN85us5VJKQBiaM8uJ85fSGRQbqjqtu",
  "key1": "5NLuPuhZjEBEduyXubxJxtiZjKFSYCDESta6iZ3dhEkg8RbGXCyuvVvZKBFpwtfWsxCJDeaByy8LLi9rQtEjXA2f",
  "key2": "4zmrZWbQathBKqHivbZj4rnXeMtJXzzZpgGdo3DAAgLTR5KNTYJ94dde3kEkrT8mTjXNbywAvk3UGc3YkzZG4ntp",
  "key3": "2FXZEdjbRMnwSfh5jV8CHLFRcKBQ9C1NW39L39ebUJFoNh4JiqDDpCU1C6JJsv57DeU2p8mkyu3hV2VuppnhxV73",
  "key4": "3T5sPgbGsi2RqriYd28kXGeRjTMSdXBmcvvNDniCHMUHLhCBkjqJccNftWBkufFA4ggnWmUcHzR76veYw3c2rseR",
  "key5": "4M4FZqMdJbSSzRt69r3GJZCPuYGuJ4ZR2VjVrF2WMvqg8S7Mwj7UDqhbSYfDngZQg4JkP115w7xkMy1V6mg2gcbS",
  "key6": "5eAm4yPNKTSuQzCR5tJGms4rpXy8V2XZ2JdiiZCv7qjvV8FBo6FAwtNLeoWsgsG3ay3fkyaE2gSbHPDLp38gLg9G",
  "key7": "2KXWkUY4HpBHAhZDYDxie7Uy8mWPqmoJFJvccchfiDpSvgihZdWM5w9xNy92ABUjjedVbqJf7MPZHL2owb3eWoty",
  "key8": "25pLqcx3oV4FpcjJDB7By7MbqiaS5PHu5c9JEVbxCg4LtUDKZw6Tgnd4u7dsG2brFeJfE2yzgPyj6DiLgwhhT9Rc",
  "key9": "4yTtvVXgNbERwXYc3h3YeobMu7qFkLsdJEWAcYro7bwsTtNr8qUr9CVeiKms3HpXBmKZnUPgadDroxtn6rghLK3",
  "key10": "2xBCHcYmJaGPSPxy4aBhqVd1WSPT3MhdZm3hxkRnv2ewKg86F4gxkZQFxZAf7yAaa6gvSTZQ1aC3YbXmfGBevy9V",
  "key11": "wUS2s2immUrktiM5yWw7RPKYNQL58unVBhMpWFsienWNQ3tp3FoGLxWx1NAEiGQgaXo9XAY7Zm1VhVp4EYPAsh5",
  "key12": "5o8HK4hULSJu4mEJgyfCeHRdUVGcFhYFv3N8Y6XQnHRShiFo8ACU17dLih7XMxRg5G9izbPW5Ww4c3TLDN7k6Kb2",
  "key13": "4sYuUq5sXZoG1AcaAWt6sNfDcNfjR5kfuykAkwTJQWfbKC1KXs5qmrZQhfCFiuYgYuWAkTcFtDUTuCnUbpcsNxe2",
  "key14": "2NjNDNuBJayaHfkXG28K5NedazM1czWu3F9aoJCuVu2TjhigqGyJWJmJDZKrrDqjxPAzyHrpVxPnPkvVqJ3PwbLV",
  "key15": "dT57Def67XZaDVqqPuBu6xTwpuGHdxBdfabewwgyZ3BffU24ipeGGj7iTxx2TSsU3Db95wUVDY6HBGe18DwSSjh",
  "key16": "5sQzxVKaURtFMhjDFR15BoVBzoxvVGq8tpnNhsRvdbMokxMEfwZf6MoL7R3Nk14LXeSBciRQ3qRDT19t49VD2euJ",
  "key17": "5EVsAcBfMo6rQqXN7GetST8PdNdzHcqpSAK3WCKYKhNer3PkqYaNyvZMcVCXaWTUArxog4SFQML23DSevNGapwk4",
  "key18": "5v3mjogowuCkADB6eEpdMCyQeoEsoj1pjLAEt4xNDGz482Wqm1uEiUZ82Z5nK7wvP6F5KaSChAq6yiMFZDUZSEr4",
  "key19": "4rPPQDYTFvzVdTmGtiKMHmpY6fiM6NYC4kHazcy9DwcrUHzjhjcRg6RgYk2986s461txP6YyBizoSeCAgE7okfsQ",
  "key20": "4ku9NzTtoNJBt6jm7T7B3MvmVPvc32VrFuzTUHxb1osSAdKzT7SiGUGuxfKH7nuCrTw4u3wB9ng4UCCbJyy1kMxR",
  "key21": "MRUopPqrJhgLiARf76QFWKuafWmiAsXSPNmVf4KYTrgjmbr2C67EFC1viunt7Soxs58QmN2NyzLZtQGujhhNy8J",
  "key22": "151bg2N72PRqJuPwQmZf51geqMt9zDRyiZKwZ8Qq1XzV6SfUvzDUbFnMKyc5Bu4K52tytakqUXtrHZD7gcRu2GH",
  "key23": "2rKSj44gVATbRDfUv735RLbgUxdHEPjrobzq3FWyimdXyeGNrRFF3vDr4KA4oumd1h4YxRXXLJnQJ4bZ7azWmjZk",
  "key24": "359tcE9vDH2VSTBmQN1Ma8xCiYAruPyKfcjzqbGr9o2aY4MunY1c215j48Vupy3EfkEHu8EafuccQuzBNfaNBfm1",
  "key25": "4vCg1SoScqqghhFgX3rwqkSGrfGXGdNzMZmJAybdDQU2tTQoGCQcdbWLq9nR5ZqQQMqjq4kCQmSHEhmGtFSJoWb7"
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
