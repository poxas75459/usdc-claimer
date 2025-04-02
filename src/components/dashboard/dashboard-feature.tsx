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
    "55A3gDCArxeDtuHfPm9se69Pz8n7XFChy5ox2qnJ8MUHo14dWEY36CFp1Hx6Ubv8cBWGyUMNa27EaA9DhkqMET4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BtVt2NJ2KDh4nVMeSePFzNWPiKP3iymhUWwyKjgJRTpe15CB2AiwnP351qQ5WwVVXBhzAPQ3hzvANBAorEqZ1JP",
  "key1": "FmAtfPjyaqfoAnMDmkvBk38GuZhVcpWepkZ96a5nboinANuUHpvwM1YVb6YHUQxPVKswASfo9GHH2AmqhN5NgVC",
  "key2": "4DN7jaWu5Ph5cxRZMJ712md5h4ApTQHx9n1nEcWYbm8a3Co8FgSmqkDWtmCnjJD3p5Q9EoCK7VfKduJHYpAgV3tm",
  "key3": "2qKwZBrhZWTxAAbFxTqHRVY7Bguv13b9rzffUuzJhfTrChtEBXVjdowiWqaWyikuPpuAKKHVLiVbJrbSr2e5VWxz",
  "key4": "5pJsNui34VCjqp2v3S5Lbdrzw5kuKMBd8P5BZj1RZdgn4eFbv7FPpJagy3sWyr1ubxPzSmW9D3pG7Hpweu5QjD3H",
  "key5": "3ZLmSmMuT1LPnvEb8ugBEsq2r8AAprg1o4maUXpHNgsv4Kt8yL1qTGiAnS3BuWQft3L8swT4YJWkEGcnWgNMtfuN",
  "key6": "AcBoozTtTcaBH74caJntRt2S3Fct7qLgD7WQP5Km6KaE2Eg38edUsQnp4he3ApxYZ2YDiNhakiADjZsqP43wK2p",
  "key7": "5a1LGp7aP3h45qNb8nM1Ld7G7QWqCndNRGaNidR32qQEZhp6xTVxr6U3VdrY9SFoPDDTDhrY1CNj9otXg1yVA7Yk",
  "key8": "5UasyamFEQRw2LUH7mAL7XHzqrtuA9e8jz1kmPPVP4MRvUntRgTEyBjyg6jhjcR4783h8NiMer2Fh7PJEfbwPDL2",
  "key9": "jouve962p6dAr9LpksfSMNHNBBMvC1cRwEJ9UKLwWJDcMGKZM2jhS7nxMnxH6Vk4FKsDBY9vmPmn8TR5HkLcVcs",
  "key10": "54cyH5xL1Buvf19NNBciFrApoCMaEGGMBjLJQdjdaNMxPqkjS352qu7PUSt82MtQcjRRm5X5eUECNUuQkmxVw97K",
  "key11": "3Md3pWCRFNqUA8RfmLkKAQvKVqcNzUopPe8dqBHXuReYWjKZRkXEWudrWzK9QEkahYkkabri4bQQJfymT6QAwBu7",
  "key12": "5BDNkQ11Jm4nkihqyZAALisEhVp2EF2UuBRdV3QZTBRGfgvd9wGxiUqy9kTNDABr7mWX9hK6Lr6w2bn2J9EeFuWZ",
  "key13": "3J1zQzgs7bAXGk5ka5YwUAw1TajrJsS7MeLA9y1hmADmae5aZSMAZh8bnGEJZaowP3wk8vNYaGjAEFgjvjsTapJ",
  "key14": "3YARgUnxHNY4FjrZe519Cv6ZDmNMEWSSgDcGUtvYiNCvbEqzXaiKrxkzLWXkwWEGN6Fpiddj9CceFTY4mudPky2J",
  "key15": "24jJNYbUBY48c9cCJeDkZg7Gh6VBwBMTqmSHcydqRDvQD8eBqTasPJ9kHr3eZeJn6yoUfMaSYEdtNyvhVjGioYtP",
  "key16": "2NRqSZD3zGN9dYTfUhV9mnLZe7mQiMZ6wxEGxmtxf8z2nzsxy3YYeaWtFNhXoxect5bQK4V16yPQW8UFtnvgFY6t",
  "key17": "X56v8MwzBnA97cWwY2fVcRbH1PkRc9dQuj3Eh34phBkHws2nheG83wfNTx1sNavCeWh39jTutQEdftcg9QkAyKd",
  "key18": "65xxQB7GQ5N2dHWhpb4aUB6kQkpPMBuffaQ38k4b8tj6uhJBmc4dYwDCFtMC1npfqcn7ChEppx6FZoQdwAesgBcV",
  "key19": "5iVRQf6JsxHsfMz2WC873YytyjmPFNFW2aS9ykwrS79M5f9oaJBjQERXX75k2q1jhjnhBjgiUCpUKSt5bXCTeGpD",
  "key20": "3ykzH3vUWupcbx9atcr4q9mGFAV7Cdu8V3iybXf9NTEFsdSZkBjLGCK93TxCaW84W3KxumiyhHjjqBPHGAZ5mbNB",
  "key21": "4ZRtstoTjWFB87U9WWXmaw8xYX897SV7jH8kQbuDRmdzu8UVwMiZnQXzjicEpwCgqf3hZRhsbHvX5Dt6GdGJMfXf",
  "key22": "2vRAtpSxo9vEEof5DLxq8nYeVoxZRrnZpLrZsQkbUnzWn5c8LhFgVH1ECTw5GZ9GAhpXzxrvm2PL2RAKms49xcBt",
  "key23": "5bwZr9w6Qs8YuKGHJCAmkmoi3bLTuPJZviUYQYEzSTivkQ17j7uGq2BH4vhF8JWj6btb27ByWRicoBdEH3tBuCdj",
  "key24": "4xzYeZ7YwntigYZV3uJaYH7HsPhpzNvdzquFJubG6ofHW2sVEBP5EemjqBtN1GmV1myn3gKjkJw3GuzSYtEovDVx",
  "key25": "3xuZEq68ZjCTyniZfWRYSWTSPVNKgZfUAF4qBFgWjPGCewB95TzFn7mVvBDdkMQQAwgobHy2BNECVYJbb7dEQTh8",
  "key26": "wQRP2MrJT7g1nKUxX1jTfsn8NnRs5joVtbGLYMv8RDQLddFDK8r7ysjovwvTSpdY7b8BqwGkrvjHa6shWDP4ufj",
  "key27": "4rdDkVKxvcKBCqGqut1eCqV8HaSxQa4FMooVZPgmAGRURPVARBDUE5GdbvzMy5LMcJMuqabr7K1jXG2jGtbvNqnv",
  "key28": "4ikERuJswBpkMjqqezk5mnBWHMuw5CcDReN54vShLvfTocA3rbWCJBXbCMyS4L57QqLzxVLQpUpYzUrYP9VpqNHz",
  "key29": "5vHhawPFEVFzJHkARNXxzVHJ4QbUJ5p3PYKeJxY3xGWw1wA2JWqH43yBYntpdp5onfZYvgvmiyGXTZBHt2cC5sC6",
  "key30": "5okkY1keeq7R1i2snZAg4CEQc4p6hRCz5Ln45QNgBD8gTUvcttGCyPHpDEMtQiibAmcNShzGrDno9VfQ1LQ6iSHi",
  "key31": "4RmJEeCm3K65ByXnV9U1Ah7hAFhUeDoUNTNHraKDQB6XJkzpkXUPB9j1pNKRDKuY54rP2m7ZBsJYBfgvm3W3tcb",
  "key32": "4UMorDQiTCCHUJq8hTEY177BgHYRtfLuCV8LAua7kacvsEySVSztFSUYjsiLRjsUqw9N3UKcZUoagpQJ2MT7G7Tu",
  "key33": "zN5pWpHjuoFi8eKDuFAYmvc9kb47cCk6rYxULm9V9jb5X7hfVsxF9sAy7nEhaBNGqfN4xvnZJd9cj59NZ8vdCM4"
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
