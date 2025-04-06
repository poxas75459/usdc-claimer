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
    "5PifWDZ6996xQgk6djVfXV1EPXSjW6i4LD6GSfE95SPbdQMYfAGc6P8LGhZBsHunxt3H1LBz2xtmKLZG6P8aBaoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K871zG8imGwRbYn5JsdeNSGAQSPGnwERkNFngH8qpKZpoiijR6enX84Bafnmw62w4r2zoYUP5bxNDsu1nqLvcX8",
  "key1": "49CwPRDAZaQSk8LKg1LoyS3h7miGUCyira65XQrcpkS5N2rBmPQZtsgCr8cwDRUooLBozRWAiWpojFyd7aHEAnPs",
  "key2": "2nhoihBt6kuJf4aC6hod1t59E4m9E91TBoNJXYsxKuJUbH3FiF3B3rxKm6ScQ71jSor8LrxhKVbDzNFkbL4Vby9w",
  "key3": "2snzsHhL1eUDc2htJPJGYMxoLxoHjHfY8h3sPpxS9TNwtFjzhQKWqxBWcjyiRRGY9JnHEVcDZLpv1BGZXAHYyW18",
  "key4": "5UtRhLoNpMFnFEAeATwnDUVsNnRY9aCDfHNR6FnfJieAjkymue31JR5zYcrAFGjaciGZyjuD1SwsRCQgL1sTQNmC",
  "key5": "62HdbNcA9mDjFB5RbQBBKnk4YJP1WNWjnXhoLoKv4sCdjTzoX8UcWsXg78htQiDzX8NyNR8x2C21FFTEQHCfyqbr",
  "key6": "4FpuwJfC39dT6ZDBQZ9Hd19wcfQEKcYjrBYYaDBwjqxoqrwQJAhMgKRy9dRBdbDPKAXWzVzBL68rdjBH3yGbUz1t",
  "key7": "4fYnjTNQSK5GxHgvDCY5S18vcQj8hWanMUy6uowYnEUsCyk8LEoeV5siSs193u8FawNo3qJsTwqi2sXh4NGtXGqj",
  "key8": "2ACke7WRHirhL48AYhCHBX1ksJPemA2CPpM6qJxyTwCb6huAej11sppAQMRCkMD8V83HYrsrePG2YjsJ4JUt6vHs",
  "key9": "4gwf8JkjdyjZK5yh65K1GyQG1qdbJMWVdKf233CetuDwVNYtvwGKfFpZoaMne5S5od1FGXg7BpHrUkVi3bYw76Gf",
  "key10": "5noZa43bnErtyFQDcGZmiJeSsgLzd2GxVpkHRKy5oDZr2jF9rLKDXbRVx7MpZp1sXD2y8DjS4vmDrJqLq3LAuzon",
  "key11": "49QDwdiHQro5oWcLLxBDKQ3dihV5kM9uRWdctey26Scnfhvq4fLbEib3fyEvoTD3LKt7MQSLtuCbhBZxVRBZYgLF",
  "key12": "4bRtB9rn2cfaLFbjjUGPzWshs3p97rpvJVCZFpXXgGqMSfKgxwWwje8KqFgYaeKRfcmZsu7H8Wb4tG6KYvsdpTQJ",
  "key13": "4VXzu3eAKyFYxgagSMZThvQ9pjrhK8h94bBKBtpccmx2p3kGnKeUMGME7vpAPukjYEnwTAchPCACPwmfpwzgJayA",
  "key14": "4JfVQn2SiyA5pzBcAxYazNjy2oHjW6B4e3pe2KpWFF9cpDUL9kDzTr1T4CYmXHH2xsBBtB17xvGCu8aeQhRc1iVC",
  "key15": "3TiY3co6K7MTZSgHfVikXAvjvqbSr12wkUM4v6LdDBLc4nmHSYRJvywfp7qQjP7MtTVjGtR4x2EV3g9DwerVYQdG",
  "key16": "4dBVgzmoGBFvyExNoiycFDrLsFLDPYZ9eppHTkC5EL7HAvJHvxv53dfMGzUbud3mMs11cT2QhAKc1f3kcmNxu1Vk",
  "key17": "2PmF89w9bU1VCnkN2GrgKnfodMdkfwoSCh4UDDQ3s2b8STbeVvPYwtEfENbY3LjsHVzQEQzpGSRwTBB54j3tyfuj",
  "key18": "3xQ7dmtk9uaYp6TAzoFhGpg5rCDrVfPBCFMDuZm7bd1o4E4Pjur6JGw2gBrTqMEwA4h6agmPeWupf2ZorLkmnGgE",
  "key19": "4AkpikGdSXeceZdisn5jhbP1FfymTcAhtdvTKrct6arwD4hxKqFhzJ3gpA6q9mp2esLuqK3rfEdvsP85VJ9W7zfD",
  "key20": "3KvbTLXguqWjYgGLWjKiNgnCj7BSg9u5kKEHHWRKRBo5aSyH1LZeRaxPHiVzNy6eqNBQdWzTjy5dQgsctC8RqT3b",
  "key21": "T1qAncS3yuosT6BMp3mavQw4LheyJET2tyMVNFyKjgiDjZYzwNMH1pffYYucGet41zaibzqP1Kit5JgSrmn4GJd",
  "key22": "ca6bDG7dYtRie4JZhmeky6WubGbY3ambLzyjU22p65GeHJZbB8PFAmjnhuF4pfHxkhFXpLo6y12KAn4HQmUuB2H",
  "key23": "2Ri14e99ZARVA8y4sCkoxbMyYGxYqL3CTe63ewgbUHsciJkJborLzCcUYbtC7sQLX4WVbgqdZgB1FcbzPTnMpxHf",
  "key24": "Cu9v7xwKgkYCk2WQwFZndtTr4egaj5xBn4f7KaAz1sTk7x5dUdciQXsCUBiDzjjei7pWYz7BF4Mb2tsLAP1gSqN"
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
