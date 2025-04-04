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
    "3CsmzFso5JUob7DyVriWTf3VdRoYGFwERujVzxZLd1dMz1psRaQDi9aQyasrxQW822VoRL2fXQ8qSqxn7RT6Zk6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dakKoozr6trqoKPSZiiMhRmNEDL9uT38qaiodRWRCcd8hjJiMojtcutb5q36CgXoDSK3jVqkmJ2pjA4e58fBjB1",
  "key1": "5pJPf3d3WsCjp1V6rJckSCHKWNRfoaQoqCSR9iXpXASm8mrDZsN68TdYpRCg6Cp4CRjNK5EE6xXJj3EXkMeBytiP",
  "key2": "5Eh8JE38dPnZZ3JVhusy5QrHkUe1v5S4vGnjEs2BLRUYbRnMtBMHpicVRSMiNZDQFFVFsaR1cD3VNv3DApjTUHs7",
  "key3": "4YGoBXEvNJsPPEQp5ve1KYmZyMRC6Ti4toxPpBYGL5ahDBjvCS7bmsXSoo4y2LBqne1Bp4v1B4L79fT1ocv6ojbt",
  "key4": "VNyvCfcq1UitRA38zn7EHRC41JGpyvtFzf9trrQUTd4Y9o563a315WCthSN74StHMQBAxSMErsJ5Ad4JSM7U2FS",
  "key5": "j7vnehbRrS2CqYDbjLrtDFvUsC8RobEZ3okka8KLKh7KJuQJ6V7aZjApPcjzVu2d72PNHkmB7taBV9dePorRfsv",
  "key6": "4Hv112yr9cL5KxhAoGD7nxRhQ99ZNYRpaPoekJAey4nPmeqXkHJioPQKpu9YisLR3jpuXtvDsg7kayST6mpJ5Sn3",
  "key7": "5kixk25oyzao7YRC25jth8jtGCzG9bHp9qAvjAkyZAGGJS5ZrDLteB3Nhda6jtLDN25RQ8DArH75nGafRTCmSHnL",
  "key8": "6fwHH2zKx4qaegtKAdovA4sLPUGaoKi5VyHu9ZjWwE4A6w3cpNo89gC4T5AgxKXbYtN1F7TU7hrsFu5J3vR91v5",
  "key9": "32jdNMx9Ly9xv36zkgC9x5icdD21ALCQeRiFT4t6uKngMstFDbbDb7xYSipJXeHTnSLJePSWqhCuL6HokVj5x8iM",
  "key10": "4X25yJDZTk6mHpt2oNpMjC5qauy8MUZ1hNfENFuus9XgspoNwD7mXZX3BrSGJfUL3ptFYKG1C2182rxWWdJb2BTb",
  "key11": "5v4fMrTBgX4oa5ZtCAMkU3bsGf2Tq7acteAhfyTMzQAYzEbjqUWU9hwz7iDc9mSpm2Ta9gBu1n7stFLEKgv8CZu4",
  "key12": "2xtx7194y6AvtZgVbEezerX1XVrowf9VJVe8DM3AyNNT9Gfsv8kt6vAMVrqBZCSDWAQV6Pkk2wRh5pawEa9khuM2",
  "key13": "5Z58zBJkzomFLb66H2wJYiKj2jSvhEBp2mpkSPzKGXmNVhTYQNtHqbfFtXXa915reZUpo2ssgGY2YDttf69LRUKd",
  "key14": "4f7infWTPyYsnF1AbFncVFb13HojvAsPKa8oBKXYQ7KUotuphRqDWS5s7uUyn3peVeMXZkPrzHEV4v9MD1yejsyy",
  "key15": "afpcgA5WBePmcjcEUk21SMuVCr6fhQWGLeLegL8auj4szGQQ8UEMJH4oWuXbwS9FnqYjs9iWhw6wC5XfP2yDaWP",
  "key16": "261f12qJx5Qouh2VZsXRfGVYSkjYcTaP2yFsraUVm2qEwwWaPyfNKJn58dmQmZxqFs6cshw6j2JfxJKTUDTJ7AfP",
  "key17": "4QeHXWTr3aeW8rPupB9Dxv5Jz9qU9etYmSueAESYFTfExppktqaqrMmRXrRuhSDpxxfV9KSeCKBnt6C2dFSNdn2E",
  "key18": "4J5rneMU7aKs6Yy7fK2YJCWXhxaCpHbmDofsGjFyR1rTk2UoyrMsfJwUZnn4D6ymkdDPNi7QGXBZoRSNFQmKxp32",
  "key19": "3FhmBNUF5pMPgGfuQAFWEPowrw64gSLoUoiEo1LgwQMvQbayrgJ6XwGZMb3eZtoBo7cgkeAGoQ6tsCapb86ogTpT",
  "key20": "3zH8ZYYnVZ8JfL18oWgrdo64Z8zvKzBoC4AQ9BhG7mgDYikxbKzukcaVAzuDndvvHpCVjgZrSFfHWYHjfpMkbkxN",
  "key21": "2Tr5QjevqTqRNDotsUTfWdPeWQ1FNYoqrWXEEdriutjTNXeKBuWwziJBeKV3YvPrtyaBJdS68JK6qNbwR4CcBj9U",
  "key22": "CpmQRhm4AmeneoQF2d78WNzbHbH2vUYZXswU3WBiBGvUVPAqV2fNMpAsMWRBK6Wrp4YZVjvBXa29ZaWs4PHEbZM",
  "key23": "owmV7rHxTcXgptG6ZkgiVqriZJHruZPXWMCxZQjChXgxKTRdxncCszLmXwuforUCGQWmWfUHnWUAgi4zazuCDog",
  "key24": "37iSb3H6QqiLQyqPgT44SGcRkejhp1ztPRrZ4EaYfhmCFFSPchMbfyxDBDWTMvGUMXMN19WFfLtmBb6cLXowEqhq",
  "key25": "32EWARMbDsYM7s7RHVPGSwfrVGXshwxpv57bFBbnHkp225RY7SBhGxxkngA4B8GS9P6JwfgbJBJDst4nkwMYYimg",
  "key26": "532mLcgqZC1BpodeFSNy3q57yrtX4wocZFoxDL78h6Nk4y7nmFEQhPD9yxbkEmqkejcKYWHujDMrKfGwQ7rw9CvJ",
  "key27": "27rq5XuYqxrHZt5MEwd6ujfbMg3AseDt5JgMuumYAtyrpUjSf68YwJjxKWJvMdYZzoT13a7rVv14oeV6yfG5UVnW",
  "key28": "4tiGCPh2ptmgxHL6nbQ9FsNhHJhH8WwFfv6vzzLNdTRyhDmfQYF8bCp4LYsq8yxJjFFCp6zCLxZcFMRfNVLvBsru"
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
