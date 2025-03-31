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
    "2NNQCDJDqgiETR88KX3PyKBVJ37f1B4nqASNizu54MQLfvamYj6LowvhoPduYbqwfR79dvtPAr6dvSoUZAnY9bYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNv5Y3XnCu2A4NHDnYhJw7wvRhX9vbLsban8rp6ZLErc4YBqzZ6drGU9LWc7JkFB4SXehLj1c7XhFn8Z6iKsoAj",
  "key1": "4CGJN1V2wdNoPJY3YdRqy4oCmM8PYRgT9h2Sf5T1L81gUU6peN8YriYWQ1JWVwwo3XsL2noSeFYPioNNTrhCuvK9",
  "key2": "5cVM3jx9jg87DrH1DzVk2oYURZRXbsd3AcobpKES8M96ewPxo7LxbdtvuaA1uEon3QsJ1Yn8AJgK1jLxBy8wqHPL",
  "key3": "nwPv8ev5D4ajK6XDFTcqvLLAzUc97FfupremAy3vaMhjepMKq7k9hRD8raCvt7RUFgH3JGdHqsxDasF9r1eBoSa",
  "key4": "56qwjMFkx7yiPxzsWDz8LvgJVXW2Jk6aB7P4jE7vJbuQa6iYMqLqqjAhZDpsw3cMG47tZano18LS7xALgyvcHCGC",
  "key5": "4u6cVSsaS2ZinVwPgmKGH1LktVRuz8fu7GWjEwSdrAg9b35TGJvyBstn5kghrP92a4fz6PMLmyAAwrKexK3dkhY1",
  "key6": "5DMB5Ns5rFqzAEsENGS8xMzY1R2eTzanKKWt4RR1mQmWGw4KfbhTDvo7fgiyachW59jePa9KiibjRhtLk9z6Yg2H",
  "key7": "5TUUJJox5zQGYncz6Ppha4AM3veHvHiZSA2gnEVnTNnbDNZA5ufMY1a5fazzDjGLFn2qJQ8ViSDiiAGLoMZAtqRb",
  "key8": "5NCKdDGepy1hQ3iDHFnpfE9FwW8xUY54SHczZc5LwxxJxq6JA4u5QmagD1moBFVoDgPiJp3ExnYfNbh8BqR3KHq9",
  "key9": "36C7jQszMYUsPpnexNpnTAm3KNq6HpJUi4b2QYQW9Xwa2jbRekhygV7QqSZZznWcb5FKydV2vhaFwdavLA63b4ay",
  "key10": "4XSZD6uvQiHAXjdMuM4VEjCmMK4qFMdEabenPAQuocVhVMgpYbE53e2q8mkqJuFBxKYEkVcf3r4PbXcEsXGzHQFG",
  "key11": "64K3DsosFmo52MfK4GRnt5grvQFbGkZ4EBUupvHC6XrieJi23tcifDuzBADHettvTz8bTeZtWtwDvT239Y9LPdLC",
  "key12": "22PaxubkJmPqfLP1TeE69HoqomUrRK1Kp53yCpGgp4HWng9vvHYhGpWBcY8ATBYTQ2RNH6XnSzjxW8dU14JT9Zp3",
  "key13": "5o3ZoWMqpDbpMjDT8ioyXiJcPQhK2oStMiHVnujjC78VnXhuxD4Pk5s5yuxhDEzbnr22WTrrL5jHz91VRxhYPwaG",
  "key14": "3aiS4ouRJthmq9mZHZfym7EY7i3sPEDLCXcxVuzk5bEU6kRiTmJGPrLzD5hiUUfuYCqMS2K2nwGa7254APygrTmM",
  "key15": "28WpvBzKFpatzZgb58wk6AD1oQMPH3Nhc4BgzyzPCSRW84Ct9hrco8EAnM757cqR8WrdqnsWFEFJeNsBPUp68t1s",
  "key16": "14XK36oprwDeLKo5igkHW2Bx54DqzcxyFLTBzn7mD4k42u7EpqL2WNak61LY9gH7TXUoHoienWiQC7LbBeDSZA3",
  "key17": "3vSFFBvVEq9H8wBcqYbSXur9fd7FLMNQLejfH9zGvP3As4qycgwmv4RP4e4NCJP5eejX9zqJjSTG6EvevTS8NR8t",
  "key18": "q3uv9fDZZinxqo6kW1KHfrxmEVdW881RdbAcxDdFAtih7azgFBzri1PxQMaQq4rKbPQWFCox62F7zBDbGHJ7cmJ",
  "key19": "4x9crynNmzwiUvkz9fbX7cAyeQsX5w6o4Ef5bt3eyudGAcEUkeBqj5aGm3KGxdcTLjy9hkJLewRu9L9kK1idREc2",
  "key20": "4y8V4BYY8tr7zk2FrKWKgBjw8QxEjuh5XXc4GPM2p3GYxMsZHTT94rycRR41vwiCCdck1AQQMmLNnKhb3WbL3W1y",
  "key21": "3JFDVYPEA8T8axNxw6K5ARnwRetyD3cfye4uJHTsiM1mj3baPqUGsEdxsm2vzuP2PzwVReeQfv8LXasNQc2cwqW",
  "key22": "3pzwBij7cedadBcXBf9RzY3haW3gJFsN6fH6pz6sfCLFDdqYryfd2sEV8b3CH9BixhVwF29eaPoiq3rPp59BgbpP",
  "key23": "5L1rPo4MWaC8UfERccSMvwqTefGkNo7KT5yf1ATuQXQ6vhECbonrdApiMRNpqr6PTU3Wm1AEY3pb8y5wTVA2mfK3",
  "key24": "AdEPsihhoyUQuMG9N5fYDpVFYNCavU3t7N7m1GqZ9sKXu2UofayBhur2jnDa1bKEPjcZz2wKgzutXrYwZjEoYb7",
  "key25": "37fTbTzZxrEeZwMnxRoUab6Kpz2iRMwWAPaJfQZ1iLdaGMNTdbotdMk2ezytbqKoQzgHTogHiDZoscHD6d5U7zZL"
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
