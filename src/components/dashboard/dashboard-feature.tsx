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
    "5Zx5hosKw1bAGTMzkrnzK4kuegJFrovVLENso4U5SPaQhDU8KtdJFHu1iET8FweC9dhLmZcfVyBVYaGWKp2d61Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4E7nRC3YztHEAXQUn4zjPeYqC8QX6BmRJPJqQBRx3QDL9Bf7ktQgc8o9gCnSpuz1BCjadUSwEHbNeCQPAYu5J",
  "key1": "2HGpDCHBykP3okQZ5R8C9UG8PDiggbp7re7fHjtjjc1NYfJLLx782ptvv63dNJCYnxba5pdPKBGkmvZE9yXczHbR",
  "key2": "3CRZVz2msYVWPX1spdDPUHrcUHrv3tMAnqxXS8qWwzuKMwS5ofH36KmA6dJcrZJNS5sWPUi2gJtL97FLD2612gY",
  "key3": "5uKwmhWDwdwFtvHJAWkkgLQd24JUR1XG916kAVGjQMRmS6emvxuH3Sd5AFBQqSZBgzWXCEERtpJTGVdBFnUKw8Xe",
  "key4": "3jGTc8TasQ3bXEHbURsyLQ9t2CTZThXdEYBk2A4qn7sVQPrPEEr2SFjHH7fGZn1DVfxZku64tqyTJq9uRHhdSBGV",
  "key5": "1LGANHAfuwXZnpYzcmuiC6KmmY99ZNVNCizsrjWcTYWBUHk5x8bQBwPkCwbew1W2VyMJSBeCwn6hLUoUHYGWhdd",
  "key6": "w7FMe4DLCn3LYsLrJu39sfapeBqPkxcaG9mXpHWf81ZE8DEhGvT6xu7nfgfsnXQ2eHqwEcnLAzR4zbBZ1HsvT6m",
  "key7": "3h1GUaGNNC6AhUVxG1XmYqxgxC3z8qKxfQxxNWCupi1498uc3vByDxYVF6RNFLSZwGSaVL11nsBGKzjb9EK4aev5",
  "key8": "4Sdtd6zjPseNuLVsEb8xwaJQmiLQGsPgr6KxcWrij1UfzYuXBDMnChov2cVdEJ6bq2n54o4U55xRhGMNtYhD2r1q",
  "key9": "3Fi9eU6AjvuigYHjAAmL1eVKw6vQBVq11ioTLmDqKhxYVMUi2CyJZEhuzgSyVfcjaX51Hp6ayxyEZewegg2nnVtk",
  "key10": "2ceuoMUWLPL2zpY2eyFiJEFpMbgTGQU3JhHkgzSVTBCARKmkxMRUrLbHWDRWUX4RcDCergfFRXn2ucrMbhNSSeqH",
  "key11": "vbdyzDHjtDPgMFvdXaJhUq1vTfNVqayLkUwJxDLh2JJKQ5THT3Uf5TAg4xN3PVmpSHL5bjEzEX3PgsSi8JZaGXt",
  "key12": "2EjWHBLX9iURuYdpH2sUBkYwsriMk9ZqHARTSupYXW6PcEBsxjUnxQC2miCu6pjqTnvX7Vsgi1r2sWrhWQdfmn1J",
  "key13": "4H99C2fNwWMehWjnX5MubdmCfLKTeGvDGzMmnjX6mx5zRAgr4oohqpdT9dcqZVuzERHsiTQ279aqVpzw4qXZWk7R",
  "key14": "5CSKVKm9rV8cxS7FsL2ij2LvrkWQt2Tg3JHpeU1TbXWWwP44gLXeGfMdFQm8d1e9Q8bPPBoSiESaX1zy85HWVQ7S",
  "key15": "39h4pfo3TUv5Th5LqM2nrFRWEjesxczMyC2GFSw6NyCPFDHLKqxMD885mdkd47bY6A97rzLtsDuzjiF8Njxd9zsu",
  "key16": "3Pcrtdfzun2itNj6cVSxKLRwEA981qPMJvC2wjcPGg9gyhTzkoaJKm4PqW2W9TjM5YbjvmGqbPP91z9ifypT8u55",
  "key17": "4ZHbicteQu55zcKoYB8v4VtZSbsBR9CJwQo9nkm7jSRvWpEU6PR8GT6VG5SYd7fW6voD4VyhUnv5jB5tx2xCn66Q",
  "key18": "2DEpuAUpRajtKxsNLyjjhLgPXmqsTpRifJk9WwAsmRVM6UKoc1xvH6PQqdfHFFGTHsyxWMhoLxmYNobKyAyGGwEx",
  "key19": "5JEXXNGKMBekhe9c7ufJgQc3wyEzjpqbFPn4PgTaq8hGGwJ9aXFSPNXPLtyHdUxUEfZhk3Jgxw17onXZySjJYa1P",
  "key20": "2spRAomftrLJ7gP8RWr9AhtXBHr3x2mM7j5r6uE4gnJVnXFXKGxFSFg7CNVfkYeMUYMSM1CWhYs9io67b5MVBAii",
  "key21": "4vLsm2ES4Bbh12SYBXJAuEsqzafVKu9Cvg7wgCUBfkuMd2WttHL8VyoMwWohXJbfgp7HDrWigEZeX6gE7XgwEHNs",
  "key22": "2SH3uS1VezJT4Dz2174E85MzcB8ppApoUyeTXyRZn5i6TmNLCr9viKHbpj7DmkrCzgE3q5A8gS1VgJPn3iKwBTWB",
  "key23": "6fHSDiU7dBQY9XeCiNyqHBLvsgBmDKWVCS4iqDdbtgTPusWACLM3eBvyJCJX2MLzxmMQGRVRJRn8KY3Ac1Notc8",
  "key24": "31wYmdARhNUHwJHRDPBiQri76ifYXF8ZzyVUJBzgS852PquyZ3dmRcsYiM6ADuz38CgPRfvE8HFdgG2nUJtdHurX",
  "key25": "5xTaBRF82z4b8pQ6Zkb1QY8p78LmvfXRponUWbxzzkFPTihWCt1Msp7o8UAJR2mwiKwB2CRsTeGQ45oBLKVMfgab",
  "key26": "37ajZXUWc4DwXEAXgDqUjBK2e5v4FtGPkxzazdsVbe4ZFNZHXxoj4vAj7MHGR6C8xtFfVthKcuMaoVkzfLEp44yg",
  "key27": "3CJFku5zqfPyrZpCc5VEJDwbK2ve85GDGv9F2KYiuSFFXtrfKx7yuFBms1bv4si1ezcg7Xt8VAXdFDyLfhfB74Uh"
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
