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
    "4YBi4qPdK4DpT3M3JPh23w3yJJxqRJhoHcZuhzmTMA6Tjp5EXmy6DL1GnZYfYbcCSHvck248b7e3pxYbN9HR8bPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFTaxHtxrxgGjRUVz88wvn83VfJcCK3oWpRjDt6tidmVmrpe5qPjuvfmR9APpBDZVrT9wrdhVV2bxEdF5C4FtRj",
  "key1": "4et49TkXi9aiuoZ1tWmCcXVrwC329gsUe7PZjhmBgqbZQ7RecBupWQHMBUMBJEeXRJ7d8L6WKDhcQdtXvjPdAQjY",
  "key2": "2aR2Cj7FRrPBfsBVn8rMJ8anfQgFnh1QSMNsapUUtkkDxHSiBT68mthSLJS9wqshooYiUhfNtcgvYtiv2F2zE4Xf",
  "key3": "3jJUYprzwCondodXeyJUzoUsyvazD2M5Qmr5HTpqSyDyxV3MDmJETc69j3J4DqUWDTpudjUdggo6vBNKiBpiorC",
  "key4": "5ojeh1bVgaT9sxWz7nAcf9F6GtHk9p2RVmVAquR7giCrTeR29dDfAnHvBcdMicLV5D5q2nazrWT7aeAhFgm34fQL",
  "key5": "2Hy8z6DFVqCGD4tp9K15fB9LD2R5RqFTyBMhd6CLgkPcfcLRg3SSV7QrkDdfg92gDpzzi6C4WQY3s98oDuwZZ6yh",
  "key6": "2AnpjbDg4vjDamDTLwowzaauUxyj539TWUqskVX31Y52gz2ZdJ1256zfrd6afstzxhDM35Tg6NtgPJD33c227nR7",
  "key7": "2ZHfsJaVNrTZC8dFNmJ781RksLGAnJEuxVqUkcdzoeJPpwYo32gjNfuA5iSgHixDnzY46sNSFoKZHku2ZuTDuDr3",
  "key8": "4xodb4GSJXiun26eqR7BbKCN9ZeopDb3YW6LWhQ6ZGfZ9VadbfSrfjfsgAYL634cA1mTAAMLHTU3kXvg4avntWYr",
  "key9": "pUDUnNmgJ8jjAfpAAG5gxJC5Tt7R9TrM13UdqphtG463n46Xf7H5B3QQZNGGNjyHMC3y7g4pEk7Wh5jsZ5BnMry",
  "key10": "pky2PZuVf7Nx1i4QJJxUzCqCvWuJQmAGwz9zUAW3RTGEZfuNvUHyGmCnS9QVgE1xSZUimg6hjZ3eNnywqsReiwY",
  "key11": "bcCxVo99v8wq3jaH8G3aHB9WFU45Yqe4W3wusHVPHZRbSKnq3kPwfoYCW7ZEVdL3rKWq9xHRqnFJR4LwAEuqD9z",
  "key12": "3CKcukXzwRvuK1g7uw6aipgfCsvXHFUHSxzuttS2q6HhCdFdm1FGgjx5HAwCoSxACSM6Mp6byVUGkazCJHXFmnBr",
  "key13": "5dtcNcVdi153oZvycC6YX4b7i58si6d4CeQL49QnvHyByMnx11mmf7ZSmrv6SCHgob8BjQCGnhzgaQb9JLeg9gFH",
  "key14": "5o15Uqxu3jUc16dK22t1JzHTqjk3ttnT1DgK2AgHHYtE6AYBGaVxMgqTEHbarwqmrNcXiUQ3RwPKJUkFgwWD89PU",
  "key15": "3UqAhxmYy2ZCAKjXtEhUnRkg3gtHVRkvtrbqd9Jqxh7usVbZg9ZYjsKX2pasndyN18HhWvWAny5S9QRWj8kcZEXR",
  "key16": "5hDA3XcfRSC82SvNCZZskoZ18GuB6y8nkzD4bdvw8MkpqqhRGwQo6yJY3n5T9pLTGEuBiESHEJjTQWEwcQQU1qys",
  "key17": "4RbUx86R925vVJPifKrckypJoEQPwqXN1Ardi3yYa7g2sYe6CV3SSpRRARVen5nhisU4zfJ4wiRTofBQr4igt1ur",
  "key18": "3ZUdrPAhMAVoYbdUFX6t4ED3WzHC4CqK86sr2mbd9ja47BYDBvfkhZBHatJRCks76TXVgKvEQEfBUKrST1qejxGA",
  "key19": "2biF2v9JacVXrhYUFFwkymZpr9hyBuK6QbjphNY838JSN8N4VbdCrTm87dftosXqzfekACKUbFCNsqP1cw1pQMBr",
  "key20": "2r3MxttPND28c6iRcAvyNoHUA5iqg2yCqCQNupqcutMDcngEFCg4KWGmEZ7QfAuw66SkJwbhQrwXnyiMF6EQXzn4",
  "key21": "3pPHgLg8wtyKMRV8gs2hweFaF39iVGEV1G474ejg3WJiPqeuGcvojffhWPJF9TEGEiJf1ZKgsHrwVkigviXKtT7p",
  "key22": "wuAyWsmLcSJ4o47ZHKtjVAN7ceRcYBYPs8Ddbpd5R3yU7rmVSQBFLmzhrpT3n5wA18uLc2Htgv76iLa6ND6za7x",
  "key23": "4ViWxmGTWG1HYNCZ98o2titf61ECYAwiKh3aQDeAo7xch2jdhw3BYjvQPKt98H1Wn22RdBSYn7zfXNb7hjcxiYH1",
  "key24": "2wgXSuHnoV9WzdFNPkcS4DFjNUikKH7qHecqGyhNfyo4SVYw2vRwHyAMoL6oBCQKRaAEG77u7PuQaPTAiGqPQhjJ",
  "key25": "F5cKUejSm4A3Z6gwdYo1Kqf9oPWpGWYRZ5n2z3fkRXJvpKbRA5ZkDYmJsvF4iUewWVFgM7NKwZ6v7z1VhW7J9rM"
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
