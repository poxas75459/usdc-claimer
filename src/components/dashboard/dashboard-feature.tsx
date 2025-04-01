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
    "2dGQizQkkDZMWKieHpoqSRESo5HxC1uRZXWAQsPZW6MxvtTadubZDAY4mkYbR7PDg47hyVsdSAB4U9bRQP2anDCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QG5A6hvQLtTv35bqFoRDrnHp8pjkqWu99u1W8CNcYnbGBfApL7dhLFDyEBcjDtp3NWJ8VadHw6K17YwDoxqvufz",
  "key1": "3ezNWeYY7HBZ16si1nkTsVHtFCdsEqf43755dqrfzVeSTNeh2TyrMYtrsdDenVgmqXEAHHN6SwVupp5JhhWCGVwu",
  "key2": "3grJRs68QDS7yNk7D9AFd4f5oSLAwwbM9g53mSSyRwymcTRg7z8kFM8ixq683iM7iB1kcjwN8T6Rrr4mYC88AY4Z",
  "key3": "5v9T8fGTNnB1ehxGiozz8YtgZ8nUT7aux8zMe8jrH6RcPzMvPoKXTy9MHYQdJvbTx6wieBsURTh9rQp7c3Y3JroY",
  "key4": "3P4BgLBz3Z31Pnyw7BHhmQoDSwHBq2Exi1AJS8hff9eF9e3vk7R8FdSY7RH4hQLECJ8r13jaJ7jFqE1Psm2WiHn1",
  "key5": "2hm8yzwHTHNNadMnEVTDXXQiz5x2wSC8jKcmpkJv61pGjumgLGGim2PhvCEFdcS7Rdq2uLNbqmG4Ek95yiE419FQ",
  "key6": "3zPGuZ43wwY79XUPzEHYQbkbRuGNAEc4RJ6kctiKQnbXs6KQFLj8Hy4yg6Hj2Yw5dmtSmyTR7tZhQGe9AQhKxBTQ",
  "key7": "WTJ8FPaqfwzze5atbVGckzFoBoSciV68dJCsrkxjaa9sqviSMmtp7ZAVoh29NbXqh3YyurUZLCwSGVQkapW1mLy",
  "key8": "2RSeFuFBzM2k5GUwzqhAJqMCh5KGYspX1WuXnqUoXnY1aqAfZFAwMiDjXDoYMFbMh2ATww2ooz4Qph5aWvAahP7A",
  "key9": "21KCd9ZX4KKAZRNH1SXtGBZuNVfSKWBHERiFmgqSAuFsa14yDhsnQAN6zkNpUeA4Cpf5AAAGrpgtbuuvtJhiXgH1",
  "key10": "3bPegX8ZKJ3FwVL2LArzJ8qyKfeK3aXjbPsw7tBCfX3A9D8ApfkTX1tj797F1Y9mSrAe315CzR79jMCgF1ZAfcMP",
  "key11": "66gicF2mi4Yi9caPT71xJFz8BQDXSUNcvoyvVbTuJpfwvB95to77RknAAuih9sK2oSAMeMz6NKrfC2d4JqWsfZgs",
  "key12": "344BSfNwA2XRVinJFCejBrYtoRQz7b52s5qV4g4k8dxy8Z67CTAfXTqzczG5dZ43EXB5JXizxsZDTmq5hWqxFc5k",
  "key13": "dLNnk9xchv5T3Kg6sXgKxNqcM9eg929sQZ2AZnSPVuTxQW9EMq135CC1Zi98nqenEoCwpu6sjBbpWmihYdzLPEV",
  "key14": "2FmsQhp7g25dHu8KqctNsvVWTgQQ9i4eGvnAJdea9JyqvfxUQSgpSPfg76WG3B4Kw1tmf7UyFKyvEMCdFGPLRL6z",
  "key15": "4xXkgaf3CMUpQLtXUFGQbqYZZnRPcNJeHcNH2RjHHX4TANNvJUcC7Fzt6tkNuJBDHSkSMWhPYW32bntvY5dBqvXF",
  "key16": "2TbAirNCCaV8NYJXe5d9rzwwkp62WscRuc6g4EomiVAzWb7zQjcVgJhQmfJehFr1t8iFqTpUiktUzgfhgLCoDgf1",
  "key17": "3vKq6MueDNg52fswZHJFCyVdNrB5MLZ9Sd7HjcoXmmxXG4QxGRZtVkaY15NbD51VjmXoMDpGnwrX9F1zE7xY9BH8",
  "key18": "5sZu2jBaqZkXPj1aiuvcp4Y7sEtguyNJuJ1kvPLf8S5LcBFbNXyUmaQcLCzwFRt2mwyj3yu5hwXYjjQnmBjU7Rgf",
  "key19": "55Gv3TQrNisAx1JfS6tZxftTTYs5L6kymPYRqs9LgVkn14nFRJDMmfaVRohJdPn28kYxG3JqZZ44QcgLuDvHX5j6",
  "key20": "3PkaPpDYFuhfoA8KBESBYbmYRkoqdB7kZn3yAP6NTYgMMw6qZzibpAKEtCQUdze6VRXcbfmFNhFoqWxWWVJTKuGJ",
  "key21": "3QvpZ5S3WGxQ3YzDMs4frTCiVyxfjmjZMfhiinaP9r7sWThhGFCuBk7XntcyjWTBZRa8rbVzgovptboJgn67DTLb",
  "key22": "5WNkd2tLvyzMqz8Cx7ehH9mubSx6p2J1Xn3nt5MuFPTBN51t9sD15Vs9i9bkHhsngm7SQFe7fKJKkYTDsW6bLnaq",
  "key23": "4j5zrKw9s2MVwqqJHR6zNK8jyv3eFqaDrmdjirYZ7UGQkywKNxFKmitbTpnvi9PzJyTD7uAmWa34h2M7NTPEH2Ru",
  "key24": "4BY7wFLmfLe7kwAjjHCPasbBRzDWpbM6cUMrL9SE9Gw3sHbeLbrdZYtYbs6XHreYq4UnHyuzoh6egkeaSviTtDix",
  "key25": "2gbtSNjRKvC2B6thADfg7wZQMikaZn7TiyykvHANM37n4HZzRJiKAgogvu7SrZjGJa4jhv2xa4pstbVRnt6YnABb",
  "key26": "3bbWoE4MFbBkzNwqF31xyYut3rvvXa4rRWaxbzvp1vExKLjsKrGAqFyTzac5bkfuSxhLhyp2h7wsbTHrLUeMPbe",
  "key27": "5KWr66AamZiKxu7PJLY1cHcE4ykuCAhRmfLEAZX6oJeDDXetuJVp4xuoTYsKUrKCKCdVoF4LDxBmTA3mkm2hCRoG",
  "key28": "5nA17d3415z8iZmAH3shcVW61EqHYgoPC4GsCTcFhfM9CyCbNZ9jSB2dWV2mv1t9SsCpwUk9yMRefMRBrNYQ8rWm",
  "key29": "3M6WTXugcuPzmuSbyNQ63dpuNJtqwpNfbGKP5fpfXCRkP68Bt1toHUENfLKwCQujYCowPjewP7eXRuDsNaTLSjhf",
  "key30": "5mWAxCdSfdCUHaM5o8cC2HBw3WKCiFWbewLf9M3HBcjcfTiXHxNAkP7REEZsHkkmZ9Qo3rcfkRHzEAMwVfqGiqzx",
  "key31": "5eSHVEd22uNLb63dL3ZxiYPHLCSLGgMVd8JAWx35irVomWaYZgRD8Kz9o1Q3rmAA7cdYhn8CZmMK5XV32UF3vgfs",
  "key32": "cAtLRuwfUBayR5tAsbDXJCe83owJd1hGio5x9B4M5YSs4Rg5r6nbqy6PEXj8S3NiWRDyQ1PsnQSZP3d6okjQM3Y",
  "key33": "4VePRwTiYmfusbHGJymajtjBD6gcGKN2Yunmvw86vj9JETzeUQihvba2hK9X6Y4r9Z42QufqpbMtngmsmZAhbnm7",
  "key34": "2kkq1ZPV3EUZLZEq19vSbst3Aoz7UX6CtxXetCFc6JquaaVabdqTtyCumd2h6PLMi8eifVbHchoKdwTZ6wyyXRSc",
  "key35": "4KoHeJ5hPrML54RxBoBPumCvopbaQg8qxQHQ8bbzeio885UM4mMpy7hAwgHEKGDphdJkkEtQQmv2PV1tGDatjptS",
  "key36": "3KBWzDZUJ8iZUUgRAMEjezYHTATMWtpfJcq2wP7PGY58qt9YS9HhZL8fNV3AiNCcmY23qvQy4aVqgDmxRUgwoWHy",
  "key37": "mPMrgc64FJcR2TJvMB3VHHm98N2yNKCaeo1ypBf4JRS4oEsquKXVWwzxNXAhcdsg8yAQuvnkQ4GW9n5aVPLotbw",
  "key38": "1cfCuJUkYeLqpZXVEY7Tm81iR8snFF3REJurNVqyHLVozT5q7M9sYBZNDeFdudUnoWmiTcfPTdaVDPaQVKZRp1G",
  "key39": "48QewjVShQMSZmub1oZuyHNaY2hAimCL46FbLDEDPgP457YDcnsidJx8ae8qzwEhNZF6JP9q8Vv6tLscqmcvyQSn",
  "key40": "3ixz6QrCz2Zb5awXn1qG6vJcxXiYUrgH6dL2DgDH874FKscK7BrJ68q76m3CZMbq1rdg4LZwPgmfYHLyzVBMCc2Y",
  "key41": "5RthbUxiA9GTn6KwKrBERzgvoJRi4ey3hotspELD6b45oV4ZVET5YJ3BEvZ46UJcaShGQCLvnbaS3rss3z4ibvfj",
  "key42": "5Hhc9D7rUZ5TXVidCjrjoHqwJqeZwTy8ffLjepjq8rPkaihYXgWDSzUR9dtNha5FsmbRQiHBCRGsyn1QqJE78Q57"
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
