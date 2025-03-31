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
    "3Rz1BQqS4zwj7vnKUcDPdFmagoEqeFMMvPKwc3JKAzNeTiSquNHH91pdaA6gKvQapJnQfikUSHfCCNK2vN78q6CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6U7eSLSaS4GDRPKVKR4qiKFzCKNchquTHGktnuYAC6wjBricqCz6eQ2hC4LHrAEJBZd4HYKKs6AASejP7mAKFDy",
  "key1": "4zy5Xj33JTrwSA2p9o6icpoQ6AAMGPZJtm52Q5pioAW6xMqdVnJZdwgcZyAuB9seu6WAEu6H4GUAUZ7YPfXPiDTZ",
  "key2": "4cjp3QhaEzzJruNQvbN591verZXi1phCY7nL3G4Ui9hGnAa1Ncogtxm2ModNaug9d52GkJDwALiWkyxrjJ1Usv4q",
  "key3": "x5W8uEJix8Txe1ZXMsSd1NowJfjjndPNRo7eDuZ9xKFe2eqUv9NF1YCZsRPAU8Fr9qnZmYbcQZuftSreh8CHReF",
  "key4": "HQpz283jDcFaFZGrU5FQBHPv4czKVvTavzeUSxDn4GR1MWaX4Z9uhwoZ6HjGKg2kCsencBC46VGFUsGr8pHrh5q",
  "key5": "5QWyatJ5jn31fMstXu9UVNREtrJ5S6qYJ4BCKgzBt8MHviHxnidATh8hqAznvwj4ugXTLGR34e1hv7rCFNVxdz3",
  "key6": "2UcshgqQyKjQLTVm8vEsdfdJmivAxvfvPK9suH2QzEZgVrNjdvjGBcM3a7hmWXEcpUitTZjRBQggDm8vYdKwH9tp",
  "key7": "aMEnixWq3KSKU1FMKQArNkNmCtrTQti3epa4dqqShFTaX2iXdpKaUisycwMi49HygffCk5nXqRFDeKzWWbXjBMy",
  "key8": "33mye3kd3aLtaix2tBhJWKQWPMo1ugYXvGRn9PPwLw2aQ9GrmkH8fvFkqVc8G6kLPBb6KZc8Wwn1RNjRwL5s2GCq",
  "key9": "3DYZdmDp87rHCcmdXkWmcjnknq2iwNViD2tZsecELSGN4DcRvhEYQyernQ8npN76ciiKzt1mgc4kv5Kqo7j4BLrG",
  "key10": "vW7NfVAsAzLmHrpJn5uZ2cq12JfX3k4mVPJzEsVK7DaeVx6HzJ1ZBnVmDwBhnqfBCtqQQTXwtVDSojSp7qDbwYk",
  "key11": "64sbQ59uSPXyVTPLDQs7NQ4jVEMiXjtij7Uc8ZhP85ASqJWk3QdFAEGnezxjd61wih5MAmXryEAjXzKJvevLK4xE",
  "key12": "3xnw26DZ5zPUkUwTdX6AM22ezzJR2AjPiqYmH3zmkFGscDwPEkiN7Yg6X7sdpigrhXK79YdT73meu4YVAKWmPxPx",
  "key13": "2BxL4P2pNeikAgV7h918QuWAyLbHL3kzduG7RHyU1ZmAtrmZ7vfh9e1QToG6JzGKFwVzQjVVdkTukMWdBq3wBeTh",
  "key14": "5duMLiUwpdeaBDKSmKFLmDDm7raaTXkqS7tuCQF8v7UoaTLwZ8GqTEEqgSUT67gWtmHt7RL38yWEhvsnsosvoV8Y",
  "key15": "2XEydf6Fn56ttNEBk74TqrHqGiiREYAR7jwwdUPiBZ4jRxu8hsEwi4pYomb57XU5aMhgApyxfcYmFk54ZdCrRtwf",
  "key16": "4puxhBXzGtQp9fDwW3n95sNncd68vYN6aKMLzv5BDA8RiqefqjMYEyz6QFnsKANCykdzsJime3Rx3wwrkhLYrkxj",
  "key17": "3gJJxFF5WDKCzx79N1RmQJqqTvNMxMiHvjmiY77VxC8vRqrf8k8qaX7UJ2ffFkEymEQvVZYCpTTJeJyKrjsxEF2G",
  "key18": "2FnYpu1GZiPUUvfzcY3e4uGiqtM28vyHqYMzsSMAVyYDHcWhk3vtLWMViyNwLXWo1zSgkKi56ZSsUa1gnnktFEST",
  "key19": "67K7zFVa1i62h2vD3RFzMHrUTsrnvhzJ5RiSzzTFGTWdo7knTbA2RvLp35L5SiD18xKuVHyACYp4cBeZKj9UuhUg",
  "key20": "3ZPXnydsQw58yAaBmx8sgxDe8DdMMTvjyU83JZneaPf6rpU8PTVinnBzD7rTmT4c7qZz4rijPuFYTj4JEkoKLXRP",
  "key21": "65x2FJPhwsrgyd75R6KcwqyeKCdcVFwZs4WqYKAZvvSTtrfycxx3JgpQ1h2k4mw15biKK593UiEKv4Ld7QhbDvfw",
  "key22": "hiEsfDVzUjCf9AtbCKVWHsW88Yx2ZFkBf1kkL8e3Vk4gFpyzDAJUk89xf5ja4uY5eqFeJbFnaipGtzNnWJkSeUA",
  "key23": "2rKsJvuRWyc6UjZs5MtTU9Wn6pbHkRSKYJDyThkQPBAKVQ9gtbkvGEuCWNE1TgAEwKfboh1SCmP5sLJetuDNErNc",
  "key24": "tb4WcgSKZr2BtyXwZtnj61GxRA8LNqtjdsQqVq5okYqrddVGjzEWymqw7StDYQUwCgbXVUyymwCYLNJUMgpo4yL",
  "key25": "2dMhEi5yZbJsH9eznFU49eLJwxk15i22u2vbe8Yzn7scn1k9anEJWEuhZYuAcX5toYn8aNnnCzAtv2JVDwco6SJv",
  "key26": "4xQWBZTJBUH9QTQFx7CSbCgigHpiMNh4g5fRXVpxodWrLX4Rk3XaAtyPsgzDpG7mZXYXgdhPzUhky6cG9bWMQxWZ"
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
