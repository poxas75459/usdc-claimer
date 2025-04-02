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
    "4psjcPjZJwT3TJb5pcN6uQ9yC5jqZ5j3mEdokuxsCHbva7miZuQcBPnVp27hhcHdpLy21MVBeQv4X8LAwm5VXDbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhEfELEYrhkhSUuwq47wenpoSCssk1mSBUwq2knY3jUef3mDpNYqxVizjq49e7SagczSRozmMnCRWtxiu9Q7kuy",
  "key1": "xMupd1zYv1G2aX97S4E6p9o3ABFnUoMNBx4HVT9CyaM62wKp6ifXBCraT7NZhn3pxGxvxcZxZCbB9x5URBbbcHK",
  "key2": "o8JGrizeJjgEB6AoMKvtPEhq3zQfBKVhk2EzPskhG9pMyDK5Ft4q4PYWXZW3NJLzgGamtrJybvUVgKpgSPfXMP7",
  "key3": "27rv9fPtZ7wFNy7hZVsPsP5LR6kJM9jWFgnan93mmu586ZYuGKCAX4LrYr2WymMkPHbS1c6EMryFxMCfN9uj2TNp",
  "key4": "51P2iTQD6LPp9Pzo7UPctZUF79GAThZ61t31eKKCMKwDyWecktWeqSoi5jWXD52hfPt2mnTYmf2c1SaagyjV4RBg",
  "key5": "2sF9HrnvQJuXyua8YPCEnrb8xKMpqUrVsK6PagMU5VbqvvWcytepuJ9Rk4rR26kaBHNWqqAqYPMX3GAMKZAk18BH",
  "key6": "3mKafM3YN7Y1UL1JbLQoEi9jAzLz5YvsmZW5hUfnnmaqPHdqT7Y6xxUXF1gLMXcTHrW6hLQMfBT9nQvd2QBz6eAi",
  "key7": "cFDqqJDbSrWSWNf6StrW8Aeyk1NzsL3wNqx2E3UeC1CQVR1Q8T8irWUjscCxe32KPTFkXLu4FfZqaME2vqb4dgX",
  "key8": "3eRWJFfo9MPRWbLfbEtJY9p31EFG3ZRcSb1kcS4KPXTSmSrjs6qb2cEqh7Rk7hf7F4hd4WGnoXais7EB3VJbDLNx",
  "key9": "5oWkMUqYkrWsj5u2yqJvsBtB5ctripcrPNwVrzhT17FCauEKt4AhdGsNm6SWdLpc361UJZ5fdxbd3XzC2qDhpUUw",
  "key10": "3dbUBpWoP4H2xyhhothgQdk65DT39LJrhyAf6VkouJ3uHCx7YPER5PJsFmzcq3PHK44vJnL6JSNN9HbZ9QDWPRtk",
  "key11": "4NuRDXwme9BgNsMunEhNsZLYRBBdvnGFmKykRmjr2vgUwAyUmkoMbptc3t8nBh3tWpgaYKCHbXB6dYwZRcxGNAJc",
  "key12": "3BC9gUfw8egNKtfuuJp2Z32popKmGA1LHWxcerjQvb64U9tZtAuNApcmPXxgk1Vk2Urcc1ysp5zPqgQ5iKSMWVEw",
  "key13": "2SgB3aSW2fgHQPSrLx5uVe2rkrrPKYGotyZasXv2EevykuszzyPj4sGMBFeL4nzQRCfh35Fq4e3WPkWkwKaEpZVM",
  "key14": "2RuUuojQKwn1Ro6e7rSVJsdYFNRgzqagik5r1RfBtUArfVSbn39u8Q2D6QomTMn4eZ1JvKGvrKjY6C9jZGe8EeqL",
  "key15": "oAyC51fUJxp1FCUbAt3jDCWXHBNkVXBimocW43NyjJMskYB6ufjvVx2Sh7z6gMxa553pHAFxeVVQeaQoQJB8vzS",
  "key16": "4qaSD4G3pT1G5dWgG7iD972pmY7K7sYzXera4zQPbabisZnUJuRAqhVcCf9ZUnBQyvwhHj1JyUu3UraRWFtEsGwd",
  "key17": "3kErU99zTFC7QyuyYw8ZYex938giF2Y9Hzq5dw7Hhqx2JV2z68ebNWvZqrtK6ESWnX1NL8WbgryUcQKzRZYwT1aj",
  "key18": "45BECBJSk3WRrYK1FKo5s8eqpxirWy4RtE4sdwquTGm3t617r4ibVogVBbtJxbfDs3N7JjbGphWT9yQe3hxHyQGZ",
  "key19": "5A4wncdq6srEVmysVpiLg9mSd7gfez8TicgxRLEr7Wai6WUtPon7ggsLiUkfPD33sQhjDHEbSCpz9HkNcmG4jVKn",
  "key20": "5vA7H3M14MjxfzvVtZR6VAf6CS5Cs9updzut487dWQEiRHFQFwq1RjMyJTCz8WbLSMDvVyuc5FhZGo3eFFufLRUP",
  "key21": "4GHh1fVDW9WouvsFab7wYqCYTVbDv8Lv7GitXyB3ienj9F94yCmjDGqZQgYjCsf3AkcFMkRQhPra9sPhuQ3uBHQ6",
  "key22": "5HW811YXkm4AQkqEnLqpkCkUWDt4XpZZe9r8VbJkA6tYYuEniMByDcXBnKNeSRm3LEndb8D2NnMMzGrb7hcGQMPU",
  "key23": "5LS4rgECUgj1xos29oKJW2J72UWmB3gXSpApLWcJGo1GnUgd1sKoqPqPnSULdG4d5Xnq98NxUU4W4ZnmR96Tvkcv",
  "key24": "5j2ChjobzPESUU69n2EtN8PNBW9JMX7sws1weEG51TGFBtAGRrAtfsJtKAMFw2bjxNqXmab3nkx9vyYUotEvtuGg",
  "key25": "5U3tDaeEQ466RfGUknByj2ZTLcXTHn3sXyQqhxX8XPEzbW12FKni8FZG5HyNSXs1kaSGpnpenJ1nivXoFFiHLTYN",
  "key26": "VANBZZQKQZbMMshcqx3jrAz2C8Asfzcuiabvp5qQ9SKKD9GfuxWSFgqcxwPwLpy4GscQKimmrLQyALJA9Sd1Ez7",
  "key27": "3dxjXsW4kjg19HTwjdmkHbFx5G1gZEvUNZyhEDcQcxh3bwLZsGamRioHjGn2Nr17DbV3ZVXQxMYTGuCkw66UEwGK",
  "key28": "yb4W1Gh19XU2agVsuaNLyweisbZdMrMQyuvrFMpaLxiELrRnicDx6rQerZYd26aRJwCNwcJu9cf9eeVNDPnD8hR",
  "key29": "2QKiRQK46WyqLXi5W5u5aM1DGFNWxsVZNsyM5fyN4WEJ18j8hjcY28ybC3o9ouRBS7WYLkLuzMukhxmkw1CbEQGL"
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
