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
    "2PnVYHiJ1U6pYsBSyxzHY6SfScPu5Ta1fWiYQY1KJdyeRRh3cexnqzEqWDUHNg8FxysYC7gq7i8dcdaJ34pvLtyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmdNsBKJg5xzJApMKZbr7nowrrXoHeo7tJDRqUcZDwt44HeaCj2hL8xCEN4uLMxNshcAQs4PPHauwE1bPBEkMG5",
  "key1": "4FPSw4aWSUUV1oDAgXL79LAu4Wv5X46KMckB68xecgQoTguJkEAKTBmiutv9STUfVzAcMV4xA2JLbtRzHWuc6uNo",
  "key2": "5TttsZ5HQ3YtoQYdNU4RSyUcT5srUnGDoxByfSA4FqF2Ko7hjmtVXrhH6wsCdRfM1D5Mk2AYG2G4HPwgEHa1vAeV",
  "key3": "23gjc8mR62M5n8C3jKJCbYBMZhqCc2uscKWiCWHeAZnnpZsJSDWXPqCE31yZ7qdUmRhjtzen99UZwFDkYtZDuqmB",
  "key4": "3QqQzGZKvfGVRxoepruLmgrX44eiySz8V5dwFrN42GUCMWPRyxX1W9KZniPavz48vTPRzxC7HHqVq5YnuuZCy9sj",
  "key5": "2yeCcCU4QCqdmCgFMX2pfAjN8dpjvwPpRUDf9bb6XJgyAG3PkLcrQKCJG8HkLeYoQr5v12Co9dm6SMkqfd8BgdK9",
  "key6": "3hvdeLxSdoffqNdUzAtcP8mX6FiV6zVSSQP8Z6VnHFZ92pz6aU5Z32dfDvp1QqS31Tmu2gMvfQUfQwqMSsVT1m5p",
  "key7": "4om126KYiDffg64cagPgbPZDz9VZyTW8Ye3AanjDUHfzN563jFbebTa7nKFdqzVwU6kHprFj7BuhXz6BunyshKbb",
  "key8": "5tT3kgZbkfo4y7qFu9KATZmh2CQ8MxWwbbapb1F8jqvnWoFhDYqHeWgqViCySQH8HLWgHWPwdeEFRNomcAWRTcYG",
  "key9": "CADEaCYBNZpJqyqcNtyqm1YptEX4K5qcFUworzg2zP6NoKMqpM7hVFcrY1EmxVnUMEFhDi5Kgccc4PMkvSuPoq3",
  "key10": "25tb7rqgLBKcnRyNATNPwkdG35dqFdNUQe3kVuMJQmwmpHFfJGFTRvN7GH7Q6GbQcyA7XAs1s892xNxKY3NHxpKW",
  "key11": "3tjnqqHpi9S82eYfKkVddx1gUtjA4hu5B5vxpkJoEpTfoaU8RQGgtDaeBNRMuYKXMY42qF9dLhEdDc88pcw83ZzS",
  "key12": "4BYQ61mnpUVxHDvCuXacbqDKE7Wud2N5LmZ7EvWognMHScagQrSsQYmsc2nVSaZcL2QvyhhNkLBJ6C4yoJZmDuqm",
  "key13": "gEEu1SvQB5ozx37L2yrZxt6J1hj92tA1WAeu1g5YZQATVekDmDLCnToQGZHvggdWytau2XBJ9eqvpmHc3udpPLt",
  "key14": "yr7mcBmqPAjCn4Qjgs4ZNsGxY8P7cmXfQ4xCosopNu3xBeKjvusfEZCvfhjKW69PZVqGHfrQWq8cWCM7jHezXmy",
  "key15": "5TNQy3T4r8tRHabJfLmBdgSKj9XCBZzT2TzjwjwNxyAHmpnDNvBhHZBSnZWMt7ooLCHmchvxDXX1coPfRoPMAAXZ",
  "key16": "2gTKiZ7jLF2pm3femkiyGfHp5CeQVHZQMKXbhFg2PgEXCjCZDvdJobJfoMB7XW77mMZASfjVcQPUJxMzN8TRzdZi",
  "key17": "x7GGgTvXeViRY6Fj9UtaknBhXj3ic5KEBMRrsp6MNrDZKmx4hvAgUKSwBspp8TsJHgbQADZWnxaCy5CUtP3mN3t",
  "key18": "4fSMYJtTw3KguBcGFFuj1TjP2ip9L2jBnMiPARn4F9anJzfz7mQJKyHSGcKZi3RScMiMwd6X2iCdizUr2wz9L1q9",
  "key19": "5hs9ukyMznqzCqYpKuDi2apiq6e7qxGCuiHfd9BG7nGiZhjoDJiPR771h7H6omVvnpHtqujQybjcNtBSeZ5KVuL9",
  "key20": "4EjEDAasb7zgyqy8hLrKYPHmLkGZ7PTRZ1NWEX5f3DnCr9YJJeKY3GRL8RHLFJz76tkFfvxtC9z3EhBjvKbMtroW",
  "key21": "4cMAKkpma7eLuMiUugsNKecMhvpt6suzrRRoz65KVeQzwU3fEE27wPAfHFgnCNX7ns9f6QmYeFtoZWk6AcjC62e9",
  "key22": "5BdvTu1R4dTRs7Z9x49qGfAtgCPFPjzKv1EsbkFZ6BydV6kpQwgrJ6esxqJbRnZyKHbyFXarKSqi5CKG186oNwiF",
  "key23": "QNpVqHw4f5DfeSPTp2E1KQUEv7A9s9jnNaMft4Ae9izEGsP6TaaLzQpivoxtPqsmg73XXR5CwPk2gEdH6SJL4Qn",
  "key24": "XcymJpcfKUToJGFxRWgj614T4tXXCGVsZsJYa4Jrz5harybNbBPAw2i5QnWv4qrF32gHx8opaMUghTcBMyGUNJL",
  "key25": "2XuqvBEBiamdVzvj2t3KFG6HJfMuX1rRpeHhf7cBFuon8Gmy8NSWaNxxRoLoysq66bza7ADqXqcasikxrXymPp9x",
  "key26": "49fnZGsiGezRw7C7gmAbq6XwM5K14WxN67NTcfvGmowz7gD64Mb7UvX8LoZv59w3HoRp5BuaHKEUu8Ksyvs2aqNx",
  "key27": "3ggK9bWQ1pymydptWa7vpkQvfm5vSjJJTqAH1mL5tsKQQygBXryC4PicykMfpgNhDmKoL4pu1NEzxrpRn1VPi1VM",
  "key28": "23cW3hmDM2vZS7USuDGRjphayajrk5h6mni4rUMoxSubvVMACWiB9QCu7KWpNmuwU8xQvKbo8b49tVd9RgyaMJk4",
  "key29": "T4uSWGpDxYhBqqs8BWFNwy6RN8iFRt1ryBR94bYnq7mh7dZAMoYirHcXM1KugBhr48JxcDWQqjJuNt6zoKpsZcd"
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
