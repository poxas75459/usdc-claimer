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
    "516ZTgUi4CBaHi6jCAYzd2Zf5cKDT2w1sgsLqdvDCuw5MiwjX4zPK4kWwHxdosxz4T7nYAtBhjvbqJMw6aPpirZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tR4H6jdh2cx8FL23gupsLThNNw4P2pBbpARpbLaichmoWvrCvLY12yoauqVnybjWhy7ADVxqnD3rhaGckmMkGm4",
  "key1": "4tZ8YaSCqwKBbPRbAjLVb7KXc3DgzBJWfSJ4SwsBJndrxNBXVdinrjcZJKb7Sc5quciR9y2A8t3f4vYFXdHj3ve4",
  "key2": "2bA3iUFRwTyU5KGvYBgBmHP3ci7L4B7gexiXpZjiW4NqtMCo3cSfqayNrhm7TZik1Sf8tK7xEu2V191oaCYuaVnU",
  "key3": "7cZYjdGSrksdC623kNBgJAPahqkQJqDtYPvK1kVSQY6snwHZfSmpq7gxmtTMjJqgM1WhLK2EbTXgLhik38kTtab",
  "key4": "24vwVm7KKPsKzjimVDZK4wAeduo4xPit5kggn9FgX2Fm36z9G1eisZAkAfu5yVdD8KJq44Pm3gS7QCmYWPvUUwnN",
  "key5": "WaS8PNFauPUyRui8Z4EbVZ4VZJMvytYGToDCbbwra1PV2DetrxvjvnunfDAXXjRLbm8abiFHzrai1jc5X4u2iRg",
  "key6": "TiYBpsNPpsHffBbh4Tj71eUxvrm63fVwoz62bgwN7G7nopdpidzwvggfDVKBv5XtCC9sMcunH3f6HkuTggPpq4B",
  "key7": "2sp7ZTHz6r5VcbCN1HPS3s9VqeHcBFno7BTeYqqqC9wWMUyPFwr5AYjn2BFqhaYS8epjdkFnEvgjNi1GDRTktqrD",
  "key8": "4G64Rczwr6Deomn5ND12VSCX3dXivq8Q1VMESRTKhWSRQ35GVrxbqX4y5PBfCYE3RQG73pymmr1CRLbk6o7qc7a4",
  "key9": "hLuhU99oCNe7byfLpWiR44q6vg8RQ1GxZKECt9GjqVgy2xvskRGECDeAPq2tw3kvXnTDr2FXWXmAkqvrN4UDZFH",
  "key10": "5BfWqGW3nEJQ4DrB2sxECS7Z3VRBGxCiq5SpogpoK8DsCf3dYFiu89qjDxY1Di6Zc7yuZaDswCKWoSd6vNMdWx7c",
  "key11": "3AMHmdMBypHQiEYrcvpkziHh6SobRScpkS5yMg3EcGdiiomK1SNMQJozeL2Pqsgc2z4AJ83SGcx9eP2qJ9rESPMi",
  "key12": "21NyVDC6LtewECvjJzu1Cx2xAetQ2VD7pFkwuDNdT4gqeXZD7c6vFbs7WHgDsTUwdWBumYBKXQenbMfXfVJxvF5j",
  "key13": "3EAuprNDYkS1Rug21VaeGTBHDwX1hNnqdfbgpJpckAjF9jg3jyP6L5JzRTustcxAbjYoWeaE5V59ihTvCAGDhfWn",
  "key14": "5DtZH8r6qJ5tiVsbLKVmpKjq5fMZYxL8PXehSWDMSJXUXHfcCPPacPsoj2WfsGbjMZyzhFRT6P2hidRchc2ieDjt",
  "key15": "5BzX2fRvrS6hWzPaFgKCGTJZkneZrctvf2LFvsbkTuuM2NA4t1YbPYrqdm6hq3p2wUCGxMbKVdCMrDn5qRnba4HP",
  "key16": "zrHiPhCoi3mzqPmufnLvGTmuCz3oBoDJSE9eRJKZywmyYQahoWwrtLnFYcbaxjhxjkHiDka1c5AqUGuLFB5RfR1",
  "key17": "5Ad7XA2cMxujV2WHcxannTn62UddKrET198KFPahwTQs2b4xZNwhKTfcCnBfS1kJerzUJEdRzthaDuYxajNRzW5A",
  "key18": "UDhkAsBZiBcs5ESAeUpxtnfswWPmDQhaxYmz4ppSnCtVYZGUGmqfBCcKSY43aqitKt5wVJ8eNJ8zCUGWNsMwJks",
  "key19": "3TjVJb9ZSpNjEtUEY9vvMr8TjVZVbUyVJboQxzB8TpjFruhsrCMJtejCofAahBx4T7GXrqqzpNj6kkS15Wjz7M6q",
  "key20": "3yMDNkXdUuYwWC59Z13i5Th3VB1NGm2sQvXKjvQkqzFLgvYv5S8spswPYnsAnUEUFDdang59f1ZAi5dihiX4nrqw",
  "key21": "m431RzcozxUhFUUgDGYUZka6uycFYfDPsea8RDq3JjUwJ6Fib3Ta7mwJAAYCET8TTWwktBRKubUj9xutMtFXXYE",
  "key22": "43rFkrWK4b6axrnC5QFdbGT3oTEybwHtRryK89sxf4ZPNr8Lmg4cuR8rBddG3RM8itsL8HzsBx91t2g397R3h7Tq",
  "key23": "5pGKP7sxGeWLeSBWf9xE2kdCemhqUw4WvcKMsmg8uP1VbDRwfRh2ZvVhnDz6wof1CvdNzh2a78Ahzt6rr7EqJRzp",
  "key24": "MjLiJibvCxBcbk5WCnsxUkJ1EvB3esBmCAeyv731EwqGwd48qUweLtXbqeWuJiygwGgpovLd6mKYZPj3GeUmtPK",
  "key25": "31jAuqbotvPwqJDvjUtVSMASzoNEDHw9Ht8L3ZBRhh8aenB9QE7JVHyr8TV8Nxn2ZpeG1gkgqYWVjxBjPXyWDXDs",
  "key26": "3pmqgEHnWnzqfQ8AwoRTpwukrSsBXsdUMv1qQ39hfCxfySWLKktUsrjndhuoRz2q84Au1TtPP9Kki8xAHP9sGxZP",
  "key27": "2y12JAjAx7Bs7a8j8xcjMFeEsAr8HYVczwwGfbn7pEu5B9Se83WM3JjtACwAWYTdfNFctmH9PBR9d6pHu9NNNAwf",
  "key28": "3mP6Vncr4VxU2vwFHraaSLtqdR9TUNH8MkhoBFnN63wGV2unRj4cG8VF7RBLLzDM7Xf4EzJ9UY1MpcwYSgTRpkBk"
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
