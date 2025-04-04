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
    "5cX8qpYB5JR1WcBwTZ8rJFeHVwisp7ScVg4Rmen8wszRRZZXmTYmEdeCCK2MM1LM89PLNf4ygTssWt5dgYstgQSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HuByKkqENdbLh2eszeMb2wWUejQbTW7mSwC9gJfZFBbSR1HNmt4V1Wc3vHLiRdqLs98PxUFArngLxEzYvv7BRNh",
  "key1": "4RziFdgH5Fjy6PHaxMxCyPsJpHgjcKhhCG3u39HT3S4Jw5Y89rgxUpFsXVoC46vkcL8qLGH6VEVpjTJYxefVMkH2",
  "key2": "5arxA3QuHoPvrUb8eavDq2WRkehNKz5gBEXioXqaifmZfhKpAacj51uRpTZ1TRiDHAxY7wcyTQiF7ZqpGXfnErky",
  "key3": "2XTQhe12vd6dLvoLxfqdXxEsphkuyYjBUNmxu6YE5WHNE57NzT6NRjYXwcRg5waY9UM8XbxvyAMrdhXn6M4VNrgS",
  "key4": "5QLzwHU6Qjav4F5ygi9sL4cUKomgpmsuvxgjdRw6BUoCuDKzV74sL3cHApTpX1w3bGYudBwTftMWeaFERQoCedaQ",
  "key5": "2dXF5LWiy9uJCwyVWDwukNjUfmjLPNh7KTqYeWYC4BQjrALjAFgWyCGSP3e299Lffve65emchae9JhJ5sgpNPUHd",
  "key6": "4Nafw644QEfTwGWosmtsqigpa7AkVSYeEPzoEyLcAKpu1LuSaRSpHbzCKyRqQLjuRG42t1agYAffty7VsL1pMwrL",
  "key7": "2HixdrMAFwrWr1wf46trMjhmeCNyAWSKRHj42D9QoU9qi59rGhvgn1x2RL1KLoKyzp673ky5inwNQQ3w33mqhjX9",
  "key8": "33kPJdQwU5FUPrMxa3suf4JNSZUzXMQRc2ZzYfcriCfpkYfHPU2CdfPj9v3u9sABfAemmxEQLGb8wh38e84h1zWE",
  "key9": "c8ttTgxXNttKGBUQYNBjJBS7bU19aUBVAbZAtGzxorvfWdrAC6ECQMQdDqiYwF7BjKr5w1diToRhBusTEhLGqfK",
  "key10": "xHhtMx4CB56rZUpYJTAhuxuAF3zQkoGv8xfw2iavBMECnkc3ioET7J8ZC9jea4ENbBBPWXj4ZUX9KbZXDKDXMVw",
  "key11": "2JQAxzakY5hwHcuGoArsV1wKaCHczGMCCwNzU42yoSZPjtHCg8VGmgLhLdCQj3EXLthvBbE1iQVSwpJx6qA73J5P",
  "key12": "3yDDuvGHG4mfiDDx5CXqdNKCPgzxxbXvPjHMbQgiHkGhWsSo9apnDra8fiZAbtstxGtKayWjC4M7xzguT84m28m7",
  "key13": "3PqkbCDPTaEqbM7MRDMrQp5Fi7cr5b6NFs1Pgm21wHGMSXAyN81ZvWxpMJMupxyZ3WY4BgKgZMGNkuHxrNo3hoFL",
  "key14": "2ZBzx7YVyzVPSBc6o7WhMgX2t5bZLvzbRnhGNF4aYZj13qE71Wx5dPYid4VHDjKJCeYZRYhqWvPEBRaRveEHe2y5",
  "key15": "5GUpKL6e4ssy6T6xpwUAG2fPN3A3LfsNzDg32XrGi34PzZrs6eKqXNdK4t1aLhgKwSFHff8DT4T1LMvE2tMiMHwd",
  "key16": "3gKrq9CTwc5e5Hc16cghyBJKw6cDqkn2wzi2seUFyQMnFeuNfKGw7zxc8nYzQuceWHwqRu8e3pbCKXC59rFjZ8JW",
  "key17": "JWyCMR2nHL1VfeS9sEwhCysXQUmxk8PJQPygXZopCAGYf9AKJx41jAxRJmBQbL8m1RHcgk1QpVXdejF45mpqYQX",
  "key18": "34uTNYzgmev9WjBwato6pVjXx6K5nuRmJxKRAbYCCqqf4rvSPQKw7NL4xxbajdCqhzPVzaTxXKDp869ni5jLAnbQ",
  "key19": "43LiahcdtAwT4mbEFmizwK26Sz2TvKiTLf3kydBrj2YFwUenCKLmPxGb1wTWqhbBTjA8Y8VRqoGJXYxBhzJnpwK7",
  "key20": "2Zh8z1XrpVe75fZLWu7EXVoK81SfA8HMZBVgRWY7JzY1fAtR8pdF17buYV7cV94XHS3uiguiafacARrWxLj3SUAn",
  "key21": "3Tkgz24wMKHVxQ1B3mTkW7pSbU3mws4WB4nXfJWELHXdtZyR8emqxMqFZXDMAmJVf4BSTHBUBTxCMyCZZTJUiKWp",
  "key22": "4LCC5zgsNRBCNVMdSURzNEUbSogVDW2DzztMrtNubifDGfiLJVR75DyZpKpFDC1jyLaSva7HiRujFQQe2y5Cu6KL",
  "key23": "5TcJjZ1vMj3eAp9AVW1Y9G4cX1ULJi9sbN85DSWT9kYfpoiGSdJij6f6ekrgAt84nMngXQXoUk99gKTXCR5PrDhV",
  "key24": "MF4JUnX7iZEvd2F8NzsFi3gYaNvWmfDJyBQmVd4ZkAi9hp6dwqB3ESb3wRjcaM5DshqpUshiqu7p4NECVmq56AD",
  "key25": "4TkJzXPctfc2bzjZuEUkqBALPK1dd13aRsxLZv6RN31RbgAAqVabKzh815uEkJBRs7uptzW91SCY2zExjfTL48Mr",
  "key26": "589pXmwY1xcrPX3wcWxVRMmJhPoppVRq6QP9XyjQWnS51aBi3eoiBsRK5F5ziGnBdZYm7gnurJpiioRuYvet8V7g"
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
