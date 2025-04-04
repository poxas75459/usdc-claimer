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
    "36ooPHJFkXVmmSe7b3qYxVLc4TKSETjB9gCJN4MNzxLffJnABoqXjkQXr31VF1cS1g8TN6WDrxd7JBP7nYvs2RtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vh5GrZ3nHowAazBtsp1dV7aevc4wNJfhaRAQFaSi9otEkq23N71Bt2zBMVAZVwzUf4ybtE8imsracQYHffkNEm",
  "key1": "4sKNAwyqWwdoo4LFjuJnnuAyDgs6XQkV3JAwDRpCpUfXD1VSUiU2e185sJjiQntuo6HFtTUWraWzx8J7Jrh6HsLq",
  "key2": "2TZZ6dLDbswR5XkR3ydkjxAXkmpQfb61p49zy4QUVqoVYdsT8NSrHUWjLg2c41ZK87H7X3hfke6b3JtMgW5fQd1G",
  "key3": "2M9mTnB3yb3LjdubMxT2kv8YWpNyS7yvPrBToYMxWcukKXn1kg8vajojDcFAPkRYx94yxiQhCVJspCrPYXvVcmv2",
  "key4": "24vUduN33BTmK5vxWnNkUHs3mssW5T1RYT94h3zy5gKDuShTZhUq61Zy1t5ssW4G4HGvKL63h1fGUxaLQszyGTG5",
  "key5": "5dTvu68cic29ngTjqgrmjM8vwhbAN2zkgeKqFcvTPwLCziViL5ZCNBRh5eaxLUc8TXQuP2eAJ1Cwg6JJbw45J8Hv",
  "key6": "4EJC8BnU3iew9RzayX5EJxo2kDERGpofBvnx2ZLcpx1d9TEV6skKRYEe7JkkveRaK2fATHC7VU7MnCYqBRiAwHuZ",
  "key7": "3iKgPuYshtFbSNuEMb3cfwZcrzY5qa71NL1jtp7u6GUK7oK7gmVQ2HEvj65uaE9UiEuex9UB2mJkmPyzKMRGcsfV",
  "key8": "5JW4ihsvaDfMMwwQxkyySreLMJeTPjLcfAUQqVi6sNsHLeiGzbQerM3eNCcVf2YMFVXwwKBGBzMbTQahEQRMZBxd",
  "key9": "3bsrLtFk2X2PmWH26XMENp4xWT9L29WbUP7JkRiYQnagW92yiPLYw9gzfypPu89qH26a4o66rZkdFiKajDvDa2gt",
  "key10": "s2H1mx4HNPCnECeM633VSNjhWoEzp8EoGW4mNQMPK8YSSnCb3qjZobFDJM838qZStnxYPz9tTb9S4P8gZVP18Mu",
  "key11": "66JEu7sVX1QexAxHRMvenMs9uo5JoAVnecCZ2JqwuGQYr4xmLSgvPNyYAb5xND15rAF76UHbLFxdoiLavQY5ELtz",
  "key12": "5jcQ4Wrxh54gK5voDsWABTGGUnV89N5jtHNi7z8bEur51NLPQcgs81yvpCTLxd2DRouPPLgv9uwLVizg77LR7doZ",
  "key13": "4WvpBgBhASCTTmLkuDkRDdoPS5APqNDXAFAK66LcG7AjUDj1rf1bKL6fK9bYV8hSf8qxfkX93dtHi8YMfMttm92L",
  "key14": "3GhnZLQBMJjgPTtCr5fYTndEDGjstmr7u837MEmnh52URm6NQgmtoT31NE8XDN3NbqZNgkqV5Ao1gTLGS6zKQWtT",
  "key15": "2bWkLPVC7CjYQh8Vzu8hW8iDPAD6QrjmpdMXD7V9Yv1sxXj2C1gvvXo4Kkiqp9dS263vQvjw4N6aePMRimnMY3qZ",
  "key16": "2M7bYGu1dn5rY3fgjAvHUYuTrzBt15BjhbbSSEMgHv9ZVDeciy2PwxAE25ajfXfq7Kys3Astpag3WGHaqnZ2SxnZ",
  "key17": "4dvX9gw3wHufhFmernJebJdZAaWZrmdesofLoXWZuiRUrEKCSCP12RaYJ9Jf2tySajMa3KPQAHVFEf9gUkav8Q2W",
  "key18": "AgMYWc4QaSrgPw4yKVmHLWXNrfja59hTJdmG7UP3YLWyb7KcYDGkcMnHfRCiA5ZoE3A1NGdXoG8QVPTLWRUibwq",
  "key19": "4aAj1K89ZoC8yqe1c63tJ3zt45LBVfsMrojeWPMc9u5NHB5FVBowUAYx5cwAVAWhnd4gWGADEAJSFzdD4dLWpqSS",
  "key20": "4JJZLwHm2cQZSQzAUS7KGcVCdGgsJy15VgqTLLwS4e1aLWJPz5QZJaFAtkMQpYg9w2oK46kkgHtTHxXDdJLxZEEK",
  "key21": "5xrRaKiRo5N7MHZTsEzji2kJSJzzM1McMdUim4GGcFQsycE1tafjpKDofaYV4q24adHJVDqWsZhqSEKrJbhXRpSh",
  "key22": "5YP6FXQ76UpFZf9T2Mttsi5FsyTBNZKQD5teabSZ5ukeLfe9V2DGijYhDaksKs3n8DoV7DWqAjmbzCnNaGqYkgxJ",
  "key23": "4qcXcsHsZQPqZ5ZXp98vcfBCPzP2yxwiVWjkhUJFPzqatiGdd5x1XdYPAZ5R3nzK5T21wqqDkaj6yH46XE236Ke4",
  "key24": "2xHgEdeTEaYxcoyMRkeKvPBiov2DJUmDNRympufF77DLEwbe3feNHRtGYgi74VLDqsPY8QBG6Lj37M5sGzbS8noH",
  "key25": "2N6NtXga7MmLBsF5EyLqj1ve42Bwv37eudBLzrBtKqbH15yHPk1mR74w4XpzzEnho5whPRVmnnfKLYqht5L3bDaJ",
  "key26": "4X3G1PWYbEGjj8hoJiGRawkGQSzTGB5HMazb3yJ2sZMi8RkGW283ABZCRWzhQceGX4LZ5aaX4wcCf4jXEJW7FsH",
  "key27": "ryD3Sv1HvPbsdgLc85kxLPAFmLDU8SsrviSBjitW66wWyZ4eiZWfnCtMWoUY3FSvTxUU8BZY67w5L813VHF9pQE",
  "key28": "5YcxhnJEP7p9PWCGYpmW9ZJCKHxzb9y4tJGvaxdEsfeEqc7qHrfTpCYtEX3YSu8gNN9fNTUB9ZHMWvEZwJoN5oLj",
  "key29": "4Uy8vQ8bAF4draqWNJCyEZj3HZcZWSYQg81zCkcu1XnH2qLKumtW2dMKQsymZZgFzG5BMcogLLgCkXu6pPLcLv61"
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
