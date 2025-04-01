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
    "3dKxbDXj8xTfUxJouWMQeHCH2W5XyKUhExTH6JmJK11QK8BteEyuxvvFCUQhcrbrzKeeAjKGZkH8FYwX9Cw1jWFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtjpDsekoegajux488CVzuzitRf2a2WV37dxorxY5BC7rVNVM8n9JzdHk4aGn2iJZJBAcu6Zrgn2m7g6y66WWEb",
  "key1": "s4Ly22qzmD56wyVD7WVuAXEa2hqAAVXzfP2hsE96i9rBngMVrDFLRDzKK5iSgzFzQwpYE7tyB7wmg1gXnrMQPLW",
  "key2": "3sypK1sABrh2NEdqv33zaDrg3b7KZYAbpUkZ3xpGrK3z387bv8EmdPKygwSvcJQfXaNVaUwn5M3x69vAtuLjUNN",
  "key3": "qusVreKuqgL4bMSuuvm3qLEhqdDsghhtdqPg11dpSbHbLRkAL1xrf26eWPxibXCwukKBYbRy9pTFTp6jhydqpXe",
  "key4": "EFJdFneFHk8WAJ5opBG8pTgZZoi432xcQwHnF6d9q9TLJE7mpKpjg4GRNmE9PVtLJqQxGALeFk7WHFhSFNtYi9z",
  "key5": "DvATfYMPZJZvCXA2udoJfL7ZSawGApv6SFmBqRqrzQrH2B3azqBj1faQpKPGDFn3fwN8KeVBg8y3fRwfckbwFUS",
  "key6": "3MCWPEeogGKspDFp85yV7SnHykp9MF28hA4mbziwPYSeDzUpb5jvHDUiBjsbicnumZ2Muae1sczYjXLQxFy1mdbk",
  "key7": "3xuPAPnEYBiag7uwH6kC3pM6xFoSQz8zemd1DB8CPZaBgXzmT4Hk6DSQGD27wggS1aEPeyJBTATpdBmV2TRffajm",
  "key8": "5pc1xga78d8AVuvBFuUVT5N4hjG8fuKvaFTBFY8kuKh2GrMFDcvLZiHxB6rr3RXCWtQXQbCKBuYJsaMAag9muYVb",
  "key9": "4iaEfsFstp4PwzdXaq9g823tkwRCtckeNdBwBBj9ic1RyMVMxNBm6rZFauiagf4PmZuFSGZ2inz1VCvFSvfDDr9W",
  "key10": "3n4QaoJzsRV8Rjyjd1EFEV25AzYuEndgv7TLuBiM5xH9enRvKM1dbptsr5aPGEDefw49LCTNUANBX3aTTCeDeWwC",
  "key11": "5vKFMGFLjHFJKpxPbfJ2auWdbdtiGM9PScWB7sCFqjySeYZoaPwDmnBSQCQUBszZUvB6WAyejCcQ7hAQ8FjfTTCN",
  "key12": "4cji27FMMctYRhauFJHNQA3WofcxvBCvcYaFsGdLfXRVaNHAVtTpLoUAggL5CHbMAFVM4J5qA1SC939RjTeCZMXN",
  "key13": "4yEo3V3aCuZ3d8JJpespKuLQeYDcdssEs1D4jA1qvar7eMwn9tbKLcshh8pKxANDn3cyF2sBFxRiJziWSSdHE3kM",
  "key14": "iVrtscitdRRCUsRt9oY7M4G1UNKaCEfzVH1YhZHWkTkAzUsYh7kPNF5cJecw6zfsMphtHxVkAXs6ex4fp97Wcdc",
  "key15": "R6M8m4MM6AiXfVPz4WoeGBvqg5z2jEFKXVY9UxBiey51qmGNpPtEEJRQWaT71fxDA45KK68ztGAdPd5fycWjaN4",
  "key16": "36GqGV6vN2KDD1Qvx7xiD4dB878suJmm7658M4X3jJFpSufvoTan8NXPe3vjQ6LgCHVLsAXaGYyyVBqTARMzwbgN",
  "key17": "2sqFQiG55tsQED7YBZWYaqTXKqLpM5zGPSmN2fg8rUTiFq2EfXpLdRJVNCE5hefjxFEQxw2RFWDTUAr2pSBg5eMT",
  "key18": "mARcmMh3eQzR6rrqn1H3nMn97jfq3sNeByQsxA1qE6tMVEVri9tgSwk4AB4Z2yJ8R8PMwTEyr1cyraHVVbs3S8N",
  "key19": "3vMN9d57bE4aPgNLArYH83XFSudAnPCXvExU5dKBY7M75NoXPF6obaVFxyj5EuuFnpoCwWSD5y3UTsucYD1oHBaX",
  "key20": "4m41VB5Jt8zCQ3RJ4HRUgq2obeZ8FF7YiFZZoiWh57BzM1rdLJCkt4KhhVe2oKVFp4Fzf7YozhzKbew4vR63JXzF",
  "key21": "nWAv67uGT3mXV9FEmvKCr22xiDeJ91u3MhuJM5C2mksrEN2Z8xdkwpLkqqx1EirJJWxLW4HkgdjvpbAtTfDmudm",
  "key22": "z8qtzAAo9yK8xcLfg5XB21qHN7rTHVox6K9yGQAuXkWgEzwpaVZ5dfYEkSnS4qdAg4NtiAQimgtpuviMEHzKfsh",
  "key23": "3VJvV6mAfCaMnkMZBbsubVVkmE7X7aW3yqwrYrdYA6zHJrw6VBziFsHLaG8Lr1JbhhBrJjJLeEUfLtbCGULmgN8s",
  "key24": "3kYjmiuhXj4jJphZ2VEGBqXzsHa7srtpStmzBWFgHQWCkZkzdZ6wzXbdZ46mNHPrDNJuRAnu62KV9BF9KX1WvVLc",
  "key25": "4qbPi69bskvfFUxGCP6SmDyjofdCRtRXNNC6x52CAL5h6gQaAsZZpcjN5kkrCU9YYBvbUQHYQxmwNkcEEgxQt8S2",
  "key26": "ATtnRDHiXh7dnQ6ohTLNsq5Bv6jEeAf9WQxd94MqMUrJUa9tQXzTAtu2NqSVCuzTF2VJjtiaWtnxTtTXbPpGHBY",
  "key27": "2mRMjTD9FwiGPHQ16c9YKyk9T6RRw8x6nn5Z3DSkBq8XJEaZBsa8Sc16UZB4MYSGS6JBQ8dB5UWJ9uhpS21DJc8h",
  "key28": "3ohQNnGV81Lr14BuvVVbW8W8BrjmqXpo6G6qQRT7n6mYPmgqY1dz83Yw1U4btRZkK75jG6Y1JEnwKvgyRagKb9FZ",
  "key29": "3Y7Z6ZvRfAboLLKjzD9tMPyrUhrwRRzuLRT5voHWZsGxiPQGzw1JSU2A9HPLvu3namFZjW4kMfieZAxetrqfCbm5",
  "key30": "5dpi2rESLXUFffrw5f1Y2LsQZTE63q8WnyT6EHd8wrL2QmFYeZJY1zMAqyv8QDYRFeYcLowtuU8UCftku5sjyRfb"
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
