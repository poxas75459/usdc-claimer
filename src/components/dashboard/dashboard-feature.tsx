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
    "4i1wxdeTchCxEmfpM4EsuQgJvTwFeZf49ABxZX7hUGCThm7XXoXuMKdhp94LywNeyJMCiEQU3nvEYVgHPzsaqdtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XbAJ3cuZCxj68UKdoF2bheeGFdntXUyzPnfsHD1ns37eXfJTLg2AthAyskZEgpCigTd2K6DXh9v8XviiXrQZ7k",
  "key1": "4AJkmQ6KkAbvxEpYV9pY1a4fGJprZ25WRW8B1UBYTTbbP9APC9cAF5r6sNgrTbtHc4Ecp9Xcp2uxgHtGEJ1mhNyH",
  "key2": "5jQuHXwCyHcHXugbRUeiMsnaMMGKCk1vavSyyimqF313BTac1otdXytYLnB8FaLbqmcwtzTy5jwFmwfvcWaRUwCo",
  "key3": "5gtNbgRP7BC4AAw7NQysBzjfysZXbJh6nh4KkJ5SoUsxSiCqaERmQpvW7taZqhHBjUUSipGmW4EjiNB8ZpVwtsek",
  "key4": "486VJ9kmVTtL2rgbEYeNn1xsRohgrtJCoHdV3XmQb27jXYyyzrDycP7pgKszm5yeoY8ncmHSguHCS4ru6uuapaF",
  "key5": "4cGMv5CHvCgB8H97ofqnnWq6brZ7wrnZmNLhmMWaneDAPEPMUwwBKzcweS9Zcj2sKPw7Qm24YmcUwNPbPvvaj57q",
  "key6": "HV9srRvVLy5FCwUMUa6bZvMq7CsniaLoSrSAdCngTZzv83CFr6VcaoXfzntnqkB82yg6sAnxH4zkaj4pkyK9Bh7",
  "key7": "S5aG64RuNM1wqs1LohQ26cSxMgmCxgtguQDXW2n6CnWJ64sgssy8DLu8SPd7ZmUfT53smqkuyb6129M6LCBRQrd",
  "key8": "5LfWrc9FEXjhiunywveoHPghttV4UE3PcVw46H7Wj8Lq8gWLxQ4uZStNLX2GQi5jnkP7ky4SJ3wNQp7LRBkGcZk2",
  "key9": "5oKZgFSomaFUUzQzQYJ5zKRMFVcii12EvN1vH1LhWXUP81Ejh3kBfcys17DbvsPjtW7kMw66CLaqwyEKUaNPrTpi",
  "key10": "2zVYFETkoLTpJ1XuhPEZhmmMkNHeDuCoxtA5koL3dqRVt6QCLVx3qmGHKdPUbKjoVNQ9tP9Sw6FG2magxiJ6vwrZ",
  "key11": "2cp1BsBDEC9JXFLHhKqgYaYMjN4SgtoGsECAXJtKbPoka16TPoCNUY1nJ9fmmb1nXhiCQubrvpwHE5xS6d3E6aMR",
  "key12": "4EmQk431NmXGsN5Nktxt8Awg8GarUcfdhEYifLJFt3JSH1zu88Cme1rBmQ2hXGU77ZsKqn6aYbHz4nkezjwV943o",
  "key13": "36qoS925fcAy1nCAXuE1pQjFd2yZVVTrzEFXwspShEY9fNzApjRYiFHDpiARavDfPhvKjzzBxPLNiPywn6kvVQjc",
  "key14": "5xCZkYPCqekThTzvec54AczevfNRH7kVpHMMBK3UVfMW6EFouasbg9gz7oeiV3ynBNmr9pjzaK7vL9Cpn7YNePUH",
  "key15": "sFmUybdJY8xJNhnCmRkK37B8YLrxEeRnjeVEqHiVXK9D3c9Tg8HY3DARbCvdcfGP5UTmzfNpg5WbQcWfxvKbn5j",
  "key16": "3SvsFH9poX4mfUXkWPXLfyMsrUkkPyMGvd1G1j7Mjv7ZWHEkHhFFXEfoQo7TQrUFsUKmVHuanCQ4i6M4RMuqNULa",
  "key17": "W8Vx4rUuRUd1azApowvynuW3jT5UuVjLUhC2zBsMyoWEWbaARD68Z25rmb3H1YZ3LdwFamaGYahCdT5xWbgz3HD",
  "key18": "52h9iyKidjVG6VZq5dDqStFTNQ8BpuMiuLf8D9HiX5foDqxmoGGTNRGnbBjRPRK2WYMGEECCfjBUzo8HWsiKXc1Y",
  "key19": "KsP5vGHmiMXTFGgCGSNknG6UYuatzd3nYdQBG9sTA94q8D3ki7Mc9MyB5ngtP6HyYF9gPhcWzVfkCpea93LvnT7",
  "key20": "65tRNW1EJPH24SjoJjaHRA3ZRVW9z5Hr9yAgzYhEE9bCyK3e6jQZAC663TRpxE93fMsKxjoSdqvu7RH8ZgUSCKcu",
  "key21": "3Qo4g7G3QpkxmQhKmDHuKzEYbpXDCPooBg2g3XaLMhYELPfvGxqc4ijKGt82NtNEKAoD9gziXru9u73VcFaMSTGw",
  "key22": "5cX7vkDL8yUwDgDcWJHZbiwtgUFPfPUDPuWtPxxcRZk31Ap8ErbQ8yDHMx6YrtHcYD3UEkm1eWGqh4xSWNWGurk",
  "key23": "3f1Zz4xGtJZWPgBd9QuNgxRqRqGso3Zd9rRq1jgwX8WEeL4VUoMHgVPos7bLFX4Pg2TDCdANp433tkRdoZhSpoet",
  "key24": "3RB9MPUaEhYuvzSv3tRprzHNQ7jJBWeSxwLbzpJoaGruNUw3Xc2DppFozhBUbuv9qD1Fr5Cwb8MqHbtk3bHQmxvZ",
  "key25": "5gpQiiBG5HH8N61wba3TLz6oMkMpGNZaF77VVKu7YU1bgGGdDfmwjniz6wLM8QGkMiP2evn1yAXM3yEww6xvVzca",
  "key26": "66rBQpKFEK7zAY2Dm1S9DHKBhGRBV2ToDv27kx3KuQFAeXiPt6F5YKjTLEJDeMBDbucydYgMkj84TG64rPTRk8qQ",
  "key27": "3UqhXkzXmXE9iNyW5aypxGDkQzLzxRfYgjYYJTzG5fnJYiNhRbG32EPg4arMghJaUrAaFiDKnftcFxFkrFDVvj27",
  "key28": "5XRk7MvQ6yiNETqp2E5qN1z7BUEzMWsLRSTLR6GU3idEV8jPiQYpKBMuHgpncVag31k3bc29TrdJj994JqJcQKut",
  "key29": "4WMHzhzTvVayxrAL4QiLFQumLPfwKHzphi63VeYLqhRh5FyFe6AHbJdeMhA9MFDnD8LnkrBTg98HRHtaBR7qnxT4"
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
