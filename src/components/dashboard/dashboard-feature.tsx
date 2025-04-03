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
    "3G2AMTrKGJgWRX2wGfDHveGTZ8G2Y47GWCiqmmuBFi2QvCJiw9GaJtdKxBo39UAev7TMUByygdAkigR2NGmypCgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7gbacxcHmeC2bNSN8wEFFdEJ6G7mXweATYQ5fTJ55inhCpazkZKCpRFGZawEEkE3fbuvPZUFE7kXzQLy34m1LE",
  "key1": "37YW4B31Lk6v6AchpgHAiBPiSrqfFaJyVoypNrDC2Pc12aAksN8NQYJqMdcJQXEFTdVKrEGUaNLfAvbD6yHJ6o2P",
  "key2": "241tqkBcEHz1jfymzt2Kp8u29eiZn59qzPCFcyts3WDe3NJz7XZbubFekRhDTti3WMnJoACypTGk8pxvo14qzSX3",
  "key3": "4XZdRWQTumWa1ruaLUrL51ToeDhdVt3nHKmkRvzSqv881js2kZhDJXKCfSod2CYPjLe6yx5pdFabSgfxYR4zgw3a",
  "key4": "39K6sp2BGkUbSmyJPrpdBxCrX9GdmSP4MRcEwtF9VVsN27mHoVPz2u53sfJKQiocCJYnAgAJLqDDeinNFMFMSmxa",
  "key5": "3m11jL2b3sLqwduCnD2hS2TEM2QywvyfaRuTHLZ9QWDwGqxZazZxu6FxsCQm2gviVjTPsJ8EkHWN8LtRyY5yaoq2",
  "key6": "2ErqHCjTo8SCaG2sz2GYkW8ovK4yhhUyfYMxUj1vknogRb7j2ZFk5mGitTWDRr62FpLoaVTNaseWxgyiZpAUVdqL",
  "key7": "4CffC6WkLvhvuvpGV3hvApUUvMdAEZNUQUeSgyKxTGjmS4BqDswMdz8EU575aHk2UhTvoqcpW1tUsEKBwnga3S8",
  "key8": "EUrh2zYHNCST7hKmTHd5wAmEDFJARkKwF1vEKaHpRtuJvtvYv8Hkd7vF7CB2J7nfmx6bPFooAxV4n9S6s1SUaAL",
  "key9": "4LHtwPAdkMCGTmSZYoWx47DKzY574evSWtyDdZ9PPbhwGi9RrC3QQCxpJqGMqjwqdB5cVR2iCmbR1rkTi6aZ2Pm8",
  "key10": "2qKKKMror3LVcBqWB9b94JuKkEH1zEmD9jGMnpuMKTgLsEhwyz5NP2njXSztP4ZpHgREdxUvVbYeifXqjXvu7DDp",
  "key11": "32dwFwr8TM5Ehz8M2P5nRdnvvE6SQR5RFim1esPqDVMQcBsqvpgFR9EkhybgfofbtNTrEb2LX7X7uHxLUk6u7F5d",
  "key12": "2XaNmKrqGjDfiKBEUhoXnVs8y69qMsCEgNozFSdLRLhLDNN4hLdxt2ginNQApvRKLy9QVj3nvu5ichrE3fgVmNpq",
  "key13": "5m521uKMDahRk6W6FPUedy3KiFjbc1Xy7KL8STnpfRrFzBMHwLxkQd7283JCnqKkUMet41JrXLfEkn2iANF41VFb",
  "key14": "5bEy6daDgrx8tx2AjE4a3Nbf9siXF9Hop8KpGjTWt5RjwuvpuBSaZU4K2QZrKKyvzkbzQ94HXshrmNtB8GcWcrM3",
  "key15": "2RkrKecX3sn6uYfZnhYR3eJy4iwgmDDE19MUveSLa4b1xsr3Vi2qLHv1dA9SZY6BvToSv2BVFSC6y3ynGmCJdJQx",
  "key16": "3H4KiRN6hwzaDRbgnqvLWHmvXMf5cNChJTufgM7nxxXziovKbwtbFhGQdYKQ7bQxggN9p5qP9hVbo4ddj5ppFj63",
  "key17": "4oqQj6qYG5DYi9N7ianVSxYJsPrcebasNkun5TxvNjsewN9MXr1pFyLZ3PZkx5kiKcQgiYdLj5WWceECJ1bupWtz",
  "key18": "3x5bZY693i2yDA4KMPEvzUkiNioH6ksUr5KxezWR77X9wqytpW1KhB6UptfGUn3XTu4cS3sj2PyLkT7JqHEn9Exw",
  "key19": "2pfUiHSfqYzgNaNAgwMhKdPdB2R1vkkjzZKGQXLwSsXRMDF7skBb8NcWbBt9Trizoqf2v3bmvdHc3pLyLwbudLWv",
  "key20": "9e1EozRU7eaCtytkdkJskdywBB2gQ8gbVb2MPWwX76nB8PBi3NVHDJzCKsdqwdD26M16ed1Nu9NrU3TdhjEyXsW",
  "key21": "3PFaHG21oJSELqjuF9KLmeieVUQQm6GDi94jRoi2jm1PPvwg6zgPit9a8LEKyRzAfRHSmUNBNv95PtN37C31u74W",
  "key22": "PAaFvJ6TYyw5fux66FNUCLZyJmGM5mA7wcGiDZkLzAdpbbB7hXCaT3e23BWu6pt3USWS2yTTrjTRdMqUXmUbYMD",
  "key23": "b8fd7ZQ8MXf9T9cdTXAzMpEayj5gqXZ8jTkY8ENGjEAkWB7f2pcdFVS2twf6CUM2k86XVLXiTFQfmQaDzihzZZL",
  "key24": "M3fSdkG5JSbeavEtkgwuXBNQyGXvtUfGCrWuw5wRHPuf3z26GJbSxBW4FpccmY5pBvpfRwns8BGgQAdzv26RxkP",
  "key25": "5PKGWQNiwwHbsV5wqEggc793uPukYhUPY27po3u1Ws5cWorzHx15pVMUctHhuJH1doTPydvWBwqANhhc7swEUY93",
  "key26": "51nvhDLBkbb6r1YLqg4DfNc3SbuFx5of8pAu4iqQufukoTYDP3yV54m56ves4omMr863dT8s4gQb9zd6y3XUSSdS",
  "key27": "22f9wUebjdNFysCgacx9391E77DbW3FGPmkUNqdqiYgfhdy7cNkWHQFegZLwhbt7bsVRmLS5e97mBzTrHhYoeHLR",
  "key28": "3sDT9u2BpdVsmBBnejn8rc4qev3Dw5biCq1xs4osRupsXRZwfM11p3ymE5GGUhZzqEQvYT5oKEySeRLrqjuvGVXh",
  "key29": "xX5QuvWi7oGBPgsaSy6dTiSCK6NqLTW4tszWpxe1oZZAakuEqkE8QPaYkiW5wxBdE74XqGSdDDndeA9QsXFwnxL",
  "key30": "2HLXEEc6SAEfibVkWmQnBq6NMFDbxNPjQiwjzMzCvLRDbNMP3YGBmeS8AkrDXEESndFHBF5uU1zFvPNQFx9ECN11",
  "key31": "64n8pU1ZauHZzoH28iXpc8QejWvgivYkKhTnnyYoAzsLdCZ7rZ9p6TRWyaZmZ2mc9uGEYfRDApm4t8a7VuqmvRxi"
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
