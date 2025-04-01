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
    "4vt7XTX4x1KsyyezYTuLKnAigASSdp6N7DACLVKHn9mEMVRQZA8pB1aMwCapfxKaywqGLcwkiCYgVZUjomVQi4pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rak2gcEPtPoNjWkQAVavW7SW1oSckkPBGn5jTydqQxfRHae14ftmJyrJwfai8mrhEgzwGVrVHxHtAmhRohJ7Tt",
  "key1": "266HskLL1V279VNZy5H6FeKjopZ68K3vVmkP5QqeRfuhjPFd5k2ARSZaChxYG1rPVabLnTW56SJTsDH2A9Jj5b5W",
  "key2": "4Uwh1hwzsNf8CviPXC7TxWU8gM99dJRkcF1njKUj8a5NrK8CUdqSEPhqFZu8TkyG5qRXvCDk3oVekvHSyCLSXrQK",
  "key3": "3eh6e6sWaYPwpM2fL3s656hNe2t4nGM7SbUCEhVqF8xrwaqeUC2p1iUCTEG9wPoSXadhEF9TaeijwaqCPPAcnE7X",
  "key4": "W933XAxt3Kr5BkbBjweRLRU4J1tbkVWaBXC9vZ3nSHoyN64mPFUXgNXtQiQA6YBtxhLAeqpXjodSp256sZbbSPc",
  "key5": "2wMynS4A3ZKnS21mcMveq4du6SdSXYgydvF7X9hZSiuY1ksiJKZyitwySxHkWZFkRMqNfrfkjBKqJJmTev5HMZMY",
  "key6": "2rL2zXkAMeESonAKb4PA75tMKS4vAFjUrvzCQzRZjru7Fs13MG8tFVki2dnKf6Tkk8XHiHCCrvdWLgyJ5y3wWvKv",
  "key7": "3sYJq7qkQ3m8MEZKeTGyKR1GwjFvtVVnEvZ53Qr6545P9Gsu7GTthxmPyELGzJFZjNrtA61p8qh4VQ74dR7JShwV",
  "key8": "5xwwDDEZVkGBk5TenkXvAWPRoxzLz1aT3Z7mUTGhaar3n7vaEeNeo9dN2g414FkMC8uVwMYnH5ehqqLDPqVSW2Pk",
  "key9": "55zg7YkRZqDLqraBfLL2TLrTaLzQaCqNLjTpnceQ3Sxu6zmvTR2ChriKqvtDBCVjbrvA3g264pxCzEGUtftj5RNp",
  "key10": "26hdmpyvjqMbdP1kqq1VxQyiPqGsW6DpQ9bSrF5N24wT8F3RhvparQVkPNmD1W47jrNhHcLs3JuLaHjns2ydUGQR",
  "key11": "2wjpQyvhiRhr1vafNXrNqZFDoQ57UTDkw2sjkxsoVriVcQ2Z3ksUTNaoDzMGHZ7dH3oAey1Q4ikMw98VJadDnaFs",
  "key12": "3rtv8TcNgJKjTJEswjkxAUiNTmzdtSgVmoBhM8FTRJzNebybigCCcLWLwvyqw3XXT6WmeKhqJkAUTE5XqsZWEn2J",
  "key13": "2T43ofhHpyBZK2Wf5TbKJdhGdAHQAqcD1LAosPVKsqXCzh6SDqxN1E5o1txZE2YYzL8qXwmyURtFKPDRkPkrpPZn",
  "key14": "nhhTmTM46T6o3bs4wy5rK5qtNupxeKsWz4roqhkW32AkGMo5WFTJfDNJvzM8K3R5hGxD3rG7N9d9BxS6hA4aFaP",
  "key15": "2t97eP4BMztGwH1wujugv2RXQFSSCnVa1LAsWSbJQxsnhtsKUQjStuEbXbV1N3dK3qkxgMz3aJ6Ubb9feYSD7TrM",
  "key16": "JAZkBBHZ53D1LjSGZ4ijpCmSGng7wncGQFXGaugBrvNaA3h2d4Am4MtdFQQL1eWegZ1esjVeoRP2V6z8pXiSkDq",
  "key17": "63TLBefLCN9keqopf5ozpHPWNYrNgZEHqF4u9Zbtg3hWDcLf4zcksParC1u7JRuqQCUpwWQzHxLydeTgzqDQn3DE",
  "key18": "4s3XG88qFKTNoAeGM8XYTGJ8jX8h8UrRW9CJzkL1SnXbsfMCQpe3rkm7qJptYdf5EyZH1YMuJssrmXn95hiW5csF",
  "key19": "q7RDrAvJRmWRqcPqbhYEeFgoZeUWxTX1Qe2cdqSgnkqmKx5KwV7YLjz1YtHpvxbsVLmX6spu5MWCgE4sHqiVpSU",
  "key20": "3uS5ENnxhv2cnAi5HegZxNvvVjxrzgGKL7Bd82pSyVHZBsF8Jtx5svrM636umgwo515mSum641BAqUaQcmGGXUfa",
  "key21": "4ENtGexKNX5t57j48KaoheyFR9EqVuMj6oBQxoQ2qyXUWL73QYzNasU5L8JGfPatgayHxMbibWM5r5GL3FGL4oPe",
  "key22": "2WZkaND2Zm4BVZW8nfXCvLPnSmE96GPAhXEDWvbSvCGRuuDw4AHK6jVVJxsD5gjuBx7DRfo2tmHymmmh5r45g6uT",
  "key23": "3KATvEtGPNvtC6wTTiLF7Z7ysYRCjAH6WFTVBuYRHV2dfpEJgBHaLsokuye6wncHeX5PiYS7JUYbA7hhz2aWk7Dz",
  "key24": "HPy9t971MdZoMyyaY62yicrW6xE9YAXDa2gbxVh7DaFHgXpNXrGpyaWVu9frttbRG4j8DhsavHPkcSoUb9UQCSw",
  "key25": "5CaF4eoqbhLDx9DkHrg14VRHCqdqywHMEh7Uqe42ygm3d4PWb6gT1tLJ1MvkFkgF4BEUCV2amB99siovB5rCHSxk",
  "key26": "3cYFcemvuu4AmeFkGrAUY7jVkqAVhCvJGBak7UDAiKBpZin2S9QNRJjmGM9uHXKNA7cxvYopo585CdXEF3H9qmp2",
  "key27": "44G6hgzSXZcvgDdT2tqvec5vWypV3RKdy1PmiTbWCYXE6HjT8exYKhmLjuU9F5V3Zqxs4XgHDAJtL5u4D9bHaUmY",
  "key28": "4hQUZG1kCKbXF5SAS6K2GSsjFtHpzzJh51su5eMxvJ9pQPJUcpv7FPz6SptB6rTEPs4oYco3Wriitkk4MqRx9zDr",
  "key29": "3hxreF1mDQzBbqN4e5G4i2tEN1QjMUEAscTuRkGoWDQerXVQah2uvDPuZidqT1T3hrvXBRuAH8NEMQwUtmkuk9By",
  "key30": "45sAMiRr9aN61apbsSdCFYQvAzhLTh6A3fEpgyzUaHLVmXhEMGsb4fXzNLLdkxGZvd2UfxyQ56hWANwrUH2SNVDp"
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
