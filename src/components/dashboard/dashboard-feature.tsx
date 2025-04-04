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
    "3BWXzDmfegSBe5kSmmJVhHpYJTUTmhTwShegTX7WQKwuBXxZW4Lg2KPwwKNwDHbwu4EndzFPD4utYEsrD7QEJNHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SJQVHKQkPY73E8heJ1vw7kQHchcFxhncggxXVjbezS3LCTgSXEEhrQKGPftLkLHZjNynkTURAV5tLjasmoPobTU",
  "key1": "54f69fgGj6bNH3mU8sqhvX49AufzNsRMEh5Yu8x5QPKEbk27Zb3d5DaGsynNfsPy6EtFwqMR6NnPhNyULcaBdD8X",
  "key2": "5ko1mCc9cC9pHfv9XW43Lic1ccDdtJ18WAczmCWzB6dBbkSdmxiLVSsQtBqCHerGZP6ARvRdguj6UCSHq6d6ZWEz",
  "key3": "5YdzrAkFh2uUAhJJQqyvfBbArqoeHDt4Q67z8HTCdavXPU4FHEj3Q3ey8LaLPFip1fSUGxRWpmE699bmkkpXsEBE",
  "key4": "2oft68mwh48Rp1v5rzZZYTR8671ihCT2JtmZRmA9hyAVMk7P4wKvJiyGdsDHu2hqqxmqZh6c7Q2wnvHtvUSk2BzY",
  "key5": "3AXPgwo8w5eJRMe4d8D3g5Lf5knDTSc5uCqBi5xmB6o7zHFsr88bNjJAccUgxJh28hgtHfa6B3ZhDZ558er1b4Lx",
  "key6": "3aKJ55zEMMom3xrHwBM2kiwMtnckVw4bMS69Bz3FFrXB2P8wmioPRjV7QPJup75nBwdSXcCQpgHPatWzvy2KJCNZ",
  "key7": "5Ehgm5kDVcYUwSHwZwPJKXGKxGejTZ1fUVCyaNEtVATCv93J8pXc5bvknmNyxAz8W7Y1bZzuHptiaCPbyxJAvY6m",
  "key8": "4H4PwYJsEeH8ADuWZoUpXbTBVG3e3rEJDV4fvt4zJi5jFojbEmKhYLroQpenJfHFog8RjVxLTQZZ2RTRqe119ucH",
  "key9": "HLyqLfSAG7zo7C1JxYH8VzyDZ3arZYsqA8kAxgkNapCfmq5kzyz7E4e2Q8BF7qKTuX852ut3RfZU56ffnd1RnRH",
  "key10": "CRdurjHRFm3WEtTHabHL2wSy9Z2JHtmXv5EzyqJd9SyyG4iiaWc3HfBYG4fsYMG2wdgiTNEuqF1Rc9QRMABsrBK",
  "key11": "4pN9krW4Y6Aov88G4qQHpzXAmqo7BeofscPzN1A26PKqtX6MnT4BHoW2oN7aB4oDXmgyLG8efiqEsCP47tud9UmN",
  "key12": "3aJQMvxjD3KDuCuyxVWck6a4PWxDia4pmqGXZfA1DEJePUv9B2twkxCUKfYm3duYwhGj4ZXNKf6HAxr2piCvM9m9",
  "key13": "5tXUJkh9VYWm7R5oUByvzH4Cf6EeFPP5woFhNERU44oJnEBh7fNd1tDVpSA9Rp9QWtt8tGkUSBUcMDbVues4CmKM",
  "key14": "39gyS2mjHVjXDsBA77Z3BnPWa9xiQS1pcKPmyM2SqzQ8L6LFdfqVwBvVRaNw8m9rc42ateCjW54DtENfgXAUvFo",
  "key15": "3KdrAy1kDw9wnAqSjvZRgKPRpifKCrkwWA15aESBhURmYp7ZSftctsGniDySpnG8bSc3DMYrtvsB4fNvMzYrZgrK",
  "key16": "5JkNo2uy2YUuzCYAHoBWPZ7H75Pj6zgDwQrbAzEUkFKGsbm6wixq2XiwAWJYHoHjfgHVozYpqZbRXXziNvVwGstK",
  "key17": "389o9YSdEudinUMoaxdnEm6ArW169uh477468AyY5ZcB83b7RGBts4ydrT7LrNNQZj7eLfgAtSgLMk7tcvQMNov6",
  "key18": "272e5y2N6egzVd5RVXEGwvT3BbAaRgY3xY27QFj3dGRC8LFkDAgezBgtAZsBarKRECHdBCHzfxRiMZTziKHT5pTm",
  "key19": "3rAaRAMwgrLBsbMwDozJ3HEKSJFLkgZtFsvUavFRGNELEraxPctxJWRj9U3DHTWPWNdtTksm7ToD7JjY6zDzuyH9",
  "key20": "2BNDRS8PvycrVZ9ADnZEE6a9LhX3Uh5jPicNaVopVpzPKNpTtRRurbsp5B45dxW4rL549E3oJzfDrc8SRne1JeuK",
  "key21": "5uGEPbHLUN78R6wF2xcJJE2xjRLwNfJorYPkyEeb8onpeSVVQa5EJUmi8pkWoixzT3ZrrJ4hgkHJ5bJJqTPNUTUe",
  "key22": "2t31SJix7uCrz6iUak7UGT7u9uzZvuSpJtjzDwMrK8KymG7JmkT3cdZrV8ZyFY1L7dupUxPAzYmTa2VkiWXUs3Dv",
  "key23": "27dkm5x3CoUjJUWJyPzyqHL8fke67hpXn2f6XhhDSkYVvxZPKTDCYsQDPjwBVtYuDDAVaSjY8XG16C2i4BNBe7pq",
  "key24": "3cAoHWHcEL6oqXRcMHAoD9MDkZwswnWJxt9kjXHbTa2Pg9yPt1w7uuH23D3tEjegsqDeH7a8MLqe2DVe2A33iqL4",
  "key25": "2bU6CeGauJ4W4xDWnZmHKqUFjVLeiLPM4EqoyZN89byfuc4nj9QSxSURamd97aBBw3jKbCC4DCdGzyUAqnkEGXf8",
  "key26": "3yPpHgQA6zXcixthPKsBYgddpptgBgTpx8Fxty8cVv55JgeFLVCoK7cUwo5nni6Lx9Rqi6TLZYYdSsUHQapeYcAr",
  "key27": "2C2oUNXVMbjWaEEfqiLE16UTyjnxxmijvyejVVyLuHe3Ki5XecFHB31qHfB14RECwDy9As1KgTbFTgCLiynzK7Pd",
  "key28": "wAZmA5tDzr4hZAuPiZdvwG4GYX4QprPonEkaRxaXcAYTeC4B2r1JT6Cm1hMWP1jBciESb4HNQhbTKVtbMdmXpPt",
  "key29": "2daHYwrmSY9pypsscW6eP18BYmwEbkvPudXZqTvBfeGSZdyqtPvYrFn2Di3acNZDdRQtF3VYdoXaxQ8GQ8joajba",
  "key30": "yTHjwDYGPLoPVBj4UfRaHMU4BK8F27j5DEPC88P2yo8wbnVxnXLSNpdJJVZ9NBweyRoFnu7CTAJW5mk8MYREnd6",
  "key31": "2fDbBk1aMdszPhgy3Ce2NzVx8rLuyHTDGk185Q1X4aepJbf4R9iLUTbxzpKt28iXcGgakyjyHsEYdZsR2wmuDCz1",
  "key32": "58MgEaegnuAfMJCmj92ewR812frTAtPu1tCQntRJma5ieKvE87knCNQYiBZLzyxtmguavtD6AJbpDTSapeDUBwA"
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
