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
    "5Wbk3jDVfa9tnWipxyeto7TdHELh3YoCJoJsWq1LgvZ8EXSFN9zY5oosFAoWoKB5cLMNMhVV37y4LeS2tA6FSpCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27tc6Tva1XVn1kopdhz527aw3E73Mo9sHGnMHK3NJ9CWLsdVba6QG25zKEM4LtWc3Xp9JdJ2kiJDhm9cdFmcjhfx",
  "key1": "52XQ7CnfWWtCeEfemW1PSitjS9nHFU5TugF89h7dzP1VVtvgjrN3gYB7qTFnE6JqTs8SNipWQjP3NoPZX9Voj8M7",
  "key2": "3QV3nKz1NApi2KeAMSa3tgj8SdgBQjC8hfWQV8SPpKQHEC3Y63cQLLaygwiLLEiRffB6KbEuMsooqErkugXRCLk9",
  "key3": "5GH3f466yEpzv5um9Z8uxJM2fe8nKi1YPDJWgz8xCtLJAA3x7wWTcqHeMiyigXBPkC9K4eLSFTHtuRp8bLZCauKf",
  "key4": "ZUs5v9rtBYR74ZBZGSFLCXH1YB1SoaxENyW9tRRVh7XbCpB2w67CB3WwksKeztZaoTijQiD7YvnXkFszL6AUYj4",
  "key5": "5AKYSASJADw2bk6H6KvTVh6VXkGHM9PSwWFPyBnLrgapYJbS2YP3mfo9Qkz5nmUBNsG13ry75tbxTMh3HWKegZpa",
  "key6": "3E65yzf2XmKzGU6Ro3WAGmJoJusa1mZwPbyzeZZuyaBEWz1MCMzWyhCHB5DfUv8KBMLaA2TmENc53G4toYChGsDn",
  "key7": "3VkwvoZEEWxnXs5RpePdxprw6TorVY9tBnLUaL2QcNrBa28n8CcxXDMHA8N1b6DeWrevcVsU8zN74cxwWQTqid6A",
  "key8": "4dq4iQbHcJtuTzMdWYkEUSbwRkQsqHUihiNTF5G96eA6QmhRoq7BrXYEuLp1K1fNPua8NJ6GTQEzF8McKPiT9CNf",
  "key9": "2L2m5kRqMZw7mk7QrxWegJp5N2wzTx7yysX6CqQxiu1bYCK12shEyiwX8wWBLGCLsKVTgh3A2PHDkTaaKE6Sxhcp",
  "key10": "2KyDjCwGfj3URjAXY3MQgzQdBi39YkBZTsSUemt6ZKWZRC3vqGdMvK1wbZJ4sLdG6W5nbnqL68aky94BGwpNRRRe",
  "key11": "2gNTKxvZkZaPNFYQrnPsF6vhUogsaRs57vULT8TusbAw23t7ddqCaY7SqFidUNdeZ4roVisPujuKCwwAr4zuDo4D",
  "key12": "3o8pjUYXBCH8dLwRo6RUsgmgnaAE2d9fQQsm59ZLdqxJhx6eiBemBCaE9u1CmgjVtPsHepSF2hsdei7uVU4XTQjj",
  "key13": "5Gt3SAmvkj6tWaTsDfkMCMXF7DAykfGvpSAugqgd8jQvTnRXsaLWBdjbuGjU4JuAXpvm6Buhj6hwzae9oBXvBdAK",
  "key14": "22r8wPMPq1cmCvZB5x2JiETrrHcW3jvDQZjmK6sJoMZhNP6BWB1gat7NYs2SjaQjiDAouQnHFnPLePVSsS9bRFDE",
  "key15": "5jMShuFwK66NFuEeskjwRnB2aBbume8CPouxAzxwofMuLBnCAuEBCmydsLWrYdNZKvcKzvBPuQVGgDfP9tiwdXt3",
  "key16": "2g6SpPgBZYneis1ftc4Codzh2MZ4iTX2ruYya9dwysTZdVp2zkDgFrRmrqwanembWznruq5QkAwJGUzEzozFHfw2",
  "key17": "5o4Tj3C4UhBFMhJeTe9QDgGTWMPasdTTcdGqzZptpwM6STpQynku8owiByjuxx4dfu18KupinLAZfTqxf7tUVVBv",
  "key18": "hZzda6EAPSoKhPnBQMp9Wt66i2Vs6HMcrhebyKD4xbsBN1687VeLxHy7aXSJVaaKFqGtyDQ2TFW6cxUqv6vkTk9",
  "key19": "41TPfi781TqsY3idAdup9DtDDv3BZuBbYsyB3e77Qpp6Xs2feEcsFUsKCwmD7sVxpr6i5oevsMGhs4E2JQbUfEH5",
  "key20": "3JNX16Ai57DQd6Tpn943KNnT7KvjKy9v3pJmwM3k9CUmSCEK1VHfAe5yMubofJg9CmwqR39Gwu2Js5L8njRpdPYB",
  "key21": "2cFoZJRLVsuRtaGNswSUenjZ8uFhPNwSkq7XSZFtDFXLes5zni6d3hMmRg1CN2TMvWP6VYyGXsqxaUwB75MqNadG",
  "key22": "38voV9UXVE9yXj863giNkjsq1Srhibn2fCqUQpez3x3B2gxc3N4CPD5uxAqDp3HTcFWBkWqjdvEFJWN5taNaMWxv",
  "key23": "3ccGrkZWCn2bw3NcFAkBeJvDzpYhfqoNJph39t1Vo1JYwcrxrZS6PdtzDia8LpW7rPN66tR2kJNSgV4yV2jSMtta",
  "key24": "3DGNLBKifDEYp6CnkA3g9Ykz4gBgHi9ZPu5o9nX2TLvy7Nkwe3wWYKLZWgxPXtqKtydRYifdoLDVRGn9p31ydYni",
  "key25": "5iMcZJdYMzjX6TjDhu7PKUxMwMpkcaYUHgQiDcHvLjpjFDs5iDcF2wU2jCZnHymSjmTKZZvncahY4xiuUURaNosr",
  "key26": "3GcB8fTi1PHnULZqKnezk7T3yYV9xtuqHpPAfwoDQpr1Bdsm6e2cPMX9htuB1Ps6P3pGkJZujhjf4hiGoWLNEdvM"
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
