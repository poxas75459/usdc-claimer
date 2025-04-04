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
    "46SU8pePK2fGjTQRBMN7KuEXjHjuE2YdmnMAJDKRPu4Dz1Dsydbea6CtAT3iRSC1V5W7GA4h1gJ3caf4DtsqPhqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqeKQS8bSfYj9yQ9NSD6kKp7k3fcTMVGK2sutEhSkUE2iY6dvJFEkb73LDnhnuoEN9hwRu8HAYigxB8Vu5aVrqt",
  "key1": "66pftv5FFVpDsSM23E97BbHvj569PoFo4y5me7MmjnDhHWbZ6bVEpD7AdFxg67pKHJEudSEbGsdBqW5ybEmLArYh",
  "key2": "5ShuJyLuYxG1mhSNwQtYt9Fpp22y9xukT3vk19y7vkoi2gei5gQacG28AM1mPvFhxKPN2xdRQoa1CaYacaJpgVpF",
  "key3": "4TtL6tDe8cK9nWzGsoD1z2riYpNWVV9Hx1o4RVPsHUXeutwGZaNvpCK2CccTN4RoNuZtf9YhUCMfLA41sbcuRQD4",
  "key4": "5gAGuST1JthH2KNrz1Z5VpYhWgKZim9vsS9ntmdpVoi12xoCQNsZ6XjovghJCMgr2Xsgs14sjZWrzTzy3AVuZrnS",
  "key5": "4C5nMDNHQwigAzhTKaVm6gAQCHagfY9phR6gyZWiwet4zh9vSyyEDyHynADTgjseKFnGcoKqoGdyS8AXAP5tcjNq",
  "key6": "4hUz93kDTeiPzcK8Ykg4fpusJoMVg5FNyPXdx51DkAFHab58BW1EqgyJPQRdYcwDSdngudGrc61KWmrwiMxVSor6",
  "key7": "5UZC6AU3fHnKv6URFgNZpv24PNgd8GmCLRWp1ePJvjZJAAr9Q5btaywedbD3NcmjzNin8kJw1KaQz78vhiMSaYEU",
  "key8": "4ZYVkoK6KA5TiLZ4CqPCmgpM4HpBDLZyFR8wQGvN2sfyecuqz2B3iQrCyVKjE4diNttsev4LWS2DXEqJGPLoQYdy",
  "key9": "5U6VrH3AHeuG7QPFg8RfmwShzw6KRdcMFtnaFsfizuNRMWqfkr6gPuThQm3BtzRqfRrU7HrQ8hDYceWwwYXMzQHS",
  "key10": "9tDYGQg9CEpRd133XPxuQW5FVe1UR1M8h4CgZ6xysZnBeW7fsw566gyCZreEc9YuzV9RftaNcRfvd5v1u8D7Abf",
  "key11": "2yEuSFetw2FoqV1GxCwzN98qZ9sJhhDKxKhhGdpkH1G5n3hM2LqdbVmrxGZaRTjpqqRfKxG7H4jryzxBHneu5jGs",
  "key12": "37D1kQ81ofmGxXNrK8xhCXjb9BhKzdqZd2CCw2A1EPRPZxj7iK13Y3S9eSxi8p2nMNsUB8NatQJbJXdYcX4yELSa",
  "key13": "2qgEjzVbCu9ci3kS8UUmyfpgqkxfZYEpCcnbdugtqBrH8fvzrgeYSdMTwvzZKjx811wF1PqCYRqZT9KEPcYukSr8",
  "key14": "tmEzXTcTjbxEFYziESn2qv7HEBphaiF35D5bYmYJTNP61iRDmeShGsWRjUd1PaAXEghGd1HEaY4pU4gvH5ipV7i",
  "key15": "5wCUNZX9qcayWvDHUUKb4RWYQ8wPjCWfXkxXyyNmbtQoQSV8rpt2DHn2qP82ALjJGCfWjbuYzbVRcYhoqnXsQdmf",
  "key16": "43dmiVRKP8zoUvBbXR4TEk656SkowduASC9Ax7JCDuk4wqUAvY877mR8f4LQwSsvN8WjoSQBgX4EpzrHCxEovrpo",
  "key17": "4VR3HpCmYVUnr8LnpJo1MyN5Z9pPqGLFJwVBzt1WLMLsyLbRd3sW1BHeLSyccYHgccfufojYTE9FaRKjjv85f33F",
  "key18": "4dAPUT6DYcC71ZxTGQX1YDLbi1HkDxa3Ryj9V7adY8AnGc88Wtd5c8TaeTbLMrTnXMNeoxSVMSVnjqeMy4eRNNN1",
  "key19": "5KZqt5xQ99L5YqUepEQeLk2VR1TkcfdA17zG63j4qEaSeaUAwUtQr4JejXxMAm8ZN9ZkSEjxZNvZ72uhigZqqPmu",
  "key20": "zMqGxFL5CY6CH6g62qyg16wqZAsokWdJb659P4QHbUyBbsof9B9FFXU6Wm1MrigYRf4h5r1WNWDsQCLPzBToqv6",
  "key21": "5pBn7mdLEWQTaU8qdL8wtUTdPcJspt6mBLaNREkgJ7Akur1V9hpej7bChGQrtHAzP5gZ7W6yekxvWAknQAeh8LLK",
  "key22": "4P3ukE54QyZuNMr6f3uzqYEFJcNVhKX18nh8f8CpkSUNv451Lm5GCZ5NpfENZkAw7ERwfr2rYjfEVCwyb8aUZwLs",
  "key23": "aQ2X6rYLtP3PiWx4Jaiv4cowdh3Vfo6kDkwURgB1SQyph12YvKbNm6Kdz8i7xRKkrnp8dj3Gad7yt7XdPf5XQ1t",
  "key24": "UNJ9Tzv4Pbdd4usrGnQHSxQd6kbvrRXiq9ZRqmwg3VaJQGHbRCDGLR3cicfKRJncdP1sAZ9eM6hpDPemp21XpA3"
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
