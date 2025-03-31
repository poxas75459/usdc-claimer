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
    "4Gya17DPtfnxvrXffPiBqdLDrjQciFRazstNAPZBK9FztDTqf7VaeJDyeTDggV2wPnyTGyckjKEc5YeoDYQ7JQdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Vp1WmYMismCMWjRLtxRHfdBABpKxHAknWS78NC6UVLVqnmPMnsyKcWnp6wX53q2mkEZkUKSMPTDVoLVFpXT86y",
  "key1": "v7GSuB2HFFnD3842mgR7KWBdnvV2ifuYJiUnXoXSxn3GLT4WvjPUJkLuPHyaeFPA7TyKnhrhLy1phCGJdCawY3J",
  "key2": "3dMyZ7kuNZzYrjXu9Pe8B68zFGZAN145VittS3aNt3DEBHcwNAjAACypknFzBSZA9F8eRwVpPreY1X6zj862jynE",
  "key3": "4yHQXkzmQphbb5NDEnQ9Xdaj9C3j7cB4g3ZM7zp42td3YPw97pa8huXPbtG4SRmc64tdBeDZjKsvQHrtzSSGJ3Ri",
  "key4": "WmixAPvhcu5KiPdbTUmJNL8Ht9hXDToPDkN6yXtWVSBsBxrXBh1yyugvrv5qeVKVdA3r3BqXCc3VsSKLZtTxsWm",
  "key5": "4GZ71UQF4AbhvS5ftXND3MfabUTUafAFCEwwaETYZUTima54UGfLH9TUfoc5ioU2i8YREaNGh7GmChRH9xvCfE5Q",
  "key6": "2RdHDUkf9KXJRAGgsT6wg1NA7UJ5ejFQWfphiJT2shYTWvYTkY7rw1utemvGT9kPP2RA9YiP96Gtjj2j4ZGffz7b",
  "key7": "C1kPgS58qcofprCcMpAN2rMGdQFQsVyCJ8euiAQZ5a1qLPvKoJMsM9CPYdpBxV7ZbnYYk69Z2jse6SzhfrVmQFk",
  "key8": "2xxpBwrsHDg8nZkvG33aFS9ZMM8i1DvHGwQVUVYJ1FbrLZdVuMg6ja69Zx7j5Cjjv1GRHvye7F6tjNkfarEfgzT7",
  "key9": "5BUuJJze9FNvpZ9kun5ynNR7DG1x75yXAUc1yUAjpjJXDD9755NvoFHBq9Pcfv3UkVcr31MrMQyzTAvpVSHrzbNC",
  "key10": "52C2qdmemsUXpwQY3ZL1hYiZ7bMQ4C2Jh9rxzgGreWR2zGzvCbAdgmGMru8irkogf63rpkFQ9DbMUwZnBdPEXsSL",
  "key11": "4ANTaLJ8RN9nmVm7pc2okmqWxpDbZJSQsPr1aaQbKBkbc6ViQPLHkE9nfxqsGvYs3G4NPoYiPYQbgLsF9a23JrxA",
  "key12": "4Uo2pfSkuBQ22VEtvRusmKJsoFZefHzW2hSkfit9Jr8miPdsvCN7Sh1y95HbWUZKzbevqL5PkmjdQzLwWw5tUKC4",
  "key13": "wjn4R1SyoQWD6eTicuTaRHVP4VqV6bJxu12AVQ8MUzE7ed7zsNGqLeUgtyoZTjrz1ZaP2SMxTPa5c697PASuSXp",
  "key14": "47c6o322yHHibtvHPv46MyHManjN4cvYy4TsMDvCpWFtueSZk9x8wYC8732jFCPV1Vmq3bXetyCZP4Dmi5FKRfxb",
  "key15": "4qxEDm987CozH6qNtfVFjfh2xUdHTx1rUguMn6U7SjuCCiJYN7aRH1dLMJTSfnKp49zqwWEGuavAjjYSXyWSKpEZ",
  "key16": "3Tng2KxqZVpHDcNHx2k31SNMcng1vrNTey138L682kaTxNy3WMAk2cJXA7xS8ZqzhYEW93ZehBYtmZvbfj1ekDSD",
  "key17": "4FfJnqhp5HXSNeJtBaBmVQxGPEBuqUg2WPFHtyZXRzMpyQQEPLAkN2c11XyWaHB8UDfPXBLKTQdPY7Gm8yijp7iJ",
  "key18": "24aLrwAH7QAiyhXKPFr7yhdFRiEvh8kFjW2Uj41CcJR8NJoQjYCdHS4SBTjLfj43Em7iidAB9KTDwxy6cYpbxSoL",
  "key19": "5cDxpBDEScWrc26rNywsDcS29Kp11GFypUYkAj8a8y5Q5AuHEsSfPiHUNYhjufwm2duC6MYNKuPPX3TzwmHM1KDT",
  "key20": "NLzGqEMWcYYgbdzymewUa3hMcmmHio1hGbPivnPw8BYgAv5tecwCqZWPAk7vicHECjgTX9kWuYEwj3SeiLEp22k",
  "key21": "2EMnbTfvGiY38MHwhvNWwPNgUjd1uYN6UMEH3qmU2yK1EdeTtvTtVWyrcMnvo419bUqmrihtEjPop3ikfAgX9ryu",
  "key22": "5PqF8EwXxCTnCxxUgMw1d5esKZemWkAiybrdWWTY12qkqa56naKnXMuEqUEDkxV572hEZ2LUJcDhGWoyFp7RXWsf",
  "key23": "huvu9NipzjTkJF56YYgptiEeUavVg1e4j7a5Q6rxgGqKaXfJWrVU4rcJf5JCQW4sRUP339wpZpPjBZEqHyV4wHm",
  "key24": "oHx9ovV537zNTkiC6yCBhRjdLGzGWrq2UySvoqiVB1cbsp2AhcLb8gCP12bAu5QAmjCFRNo7RdecPZx4mbLGFMJ",
  "key25": "wEJLppet6dqbqHwauYiWjkUxVYBn8Euaetnt5RYDX5k2U2DUPqW4isXqrhcyfg2DnALxp1ZdWizvPk4yCgwPF71",
  "key26": "sBDJ7swFRQRAfYkMm2LdrRZMnypfoB6j1pgtENpLPbsvR5mUzPg4HrvKqB8RM4QcosmrN6CGYuwRHRC2XCRSUc9",
  "key27": "2gERRftDfWxUkERhzvWPfyHXHCrnwFRKFRRUCNe25V63q2VJEGymPeJ2f5qZx1B85xhJ6rdrW7GWRANwqpwhDqtv",
  "key28": "4x3GL8w1Bvg7LTSxCZN7Ykft8RDUD6zcZwbvgMNamtpuz59d86ANudWYqKNFtZ2sVf3XotaLJnfLVxauExJryKay",
  "key29": "5UfrDGA8pjDKMcuL7ycKf3VD8Z8VXbBTDGkE2pm4QTYJPBAPWUftrxRCfDisT4BfXUjNJWpnkD4qA1krnth4iYQk",
  "key30": "auFrdVY5cZoSq3puK31r8CZkmvHYVjHzfm5xRu3RfnbkTMCDAheS2EdpgXtrbnJAsRJfBE4rj46MPKdxpkuPxg7",
  "key31": "5wvostH6GqPSZjhD9MTti5rgabv1KwHjzb1qjMV31DgP167Qt4WEs5FnhzzJWistB9j2NxBUJijb8v5GWgukka18",
  "key32": "5TStcHVjdxoiYJUjv2EJDynhtpX2xAY4BJvsdgRT8TEaPqW13X9hXh4LgXoqDmc18H8KJLjSiJJtVpQG3feqwcTF",
  "key33": "TzKjgGDxMLfquioakW3uY7Yx44t43XKVQUcU2gBcsVXnS18YPWz2E4eVFTRcA9jxXVofgSkAUME4Fmg7kvKvsxG"
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
