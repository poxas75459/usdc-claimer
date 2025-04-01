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
    "uNZWvmAZ3anyEAMzNU8jbELkmykQNbgfX6Ya1crYyfoZHF7ZepRZipM8w8Z4YvjVZrh9BVVGgUHyGomWSPFEKwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fv7wHqTUVVwvMS2GHzDJbUrdMxUwciMzkrGUxmZ2af81rKnzaT19kFjBMMyNetW5fgpxDPmDqhErwxjATQ93uzc",
  "key1": "U2J3pFZBE6yBr1hZYx6FSJPddNJZtUz7ifozAZMqFGF6j4HfGSZnhQVZhX4bqMVVFqhWrdNkqeChhiFHm2TPawX",
  "key2": "r9oMJYUxkn81227GQfS6aDZFc3J6aJAMoCWfNGtpPRaeiTiixbbg4mqqR9QDda1t4iHMdszSVtyuapESFDGeMEH",
  "key3": "2zQvtS6NMVaTcu1FgCx7fyaBoMAHtc6DmfK3bEvXvqdxvcpUavtXVQWPJx1ao1v4scZkpKtE1uwnQMK2F8KihFnq",
  "key4": "4cb8Le7eGeBCafGpgYB26BTRpwMRjgwyvBnh1CjJFJUjfVWYBk5fWXRJYydTrqZgf2CYsLUPpnCDA14i23AZUhcA",
  "key5": "5VpBV3onkroVVawpFGgwgmBXiwhndgoQf36C7r2Vj3MgBqPgm1evUu49hewd15nDYYtZgxFCyhysppjZ1Bfdnh4X",
  "key6": "4MZRkAFWbbpcjH5dQ4ccioB2fKCPAkH8AbCdZifid9g5egppVna8dRSeuLUM3UH9kKvts5nfDt5QkYQAgfPPNphH",
  "key7": "5HiRoNrbfjqqn21Awh8aRMEkwSv9QzwMESYzo1m5mQdR78kBT8VGo5eJR8FyUyAE3xZqQUzgfFRq5a9CRsmzEknP",
  "key8": "DMCgS5rVK9WTiat2VrHaMx3RAziJEURoXKk2cAa86bZTGLozMkRLmuQzF2HEMmduwfvBqmTQS45pmgMPm8UqkAi",
  "key9": "46L5z2T72PoqC9qpnuPiSz2fMuvWaSTNmhvTtKvyRVDaxkk33WSkA7dAhWqwSGS2ErwBVRZMizS9n4iL8LLsiyet",
  "key10": "212TypnagfsntxwG1KRaHQ4HyKRhaUKRc2751din42PhxRrT2YvafhcwD6smR4NQEWYHPR6mGx5fy77FCyyGiD88",
  "key11": "4rZ7dMPQ7jbWgz4hxJEjoG8TAwUM2QWjQ84oQdu8CZoqqTZ1Nfbk2RTTphVA9gz9N59N3ejiZgvf4uQ5q9BTTL66",
  "key12": "2LhLZ9L3EUiNjgBaXNTo4rRTsqLDtRmabYYQqW3v5fmUqWzuLD3KnUmrv3TcvgiR85PRiaVDTbkN5ipgTQ6zdf7g",
  "key13": "4pLrgopXjnJxC9sj42ntWVhpHiT4CYZ4JmiPpzFNQ3MmNSJcY9cPcxXxFUFvRQJEj6jJscq6SEcV8iWauQiWko1Z",
  "key14": "2pVGzHM7ijEozJiyV7Y9ayYfPjNb8D8xongvjcoWGx6PVmAGPewpAgpZDcXDAvFecKuCd6H65uBkYu7BG9epAyzC",
  "key15": "2QsiTYpFxRxbPwXHqPgveEFsmUYUmqeJXKzbDNR8f3b2Z2wkNpQuidTtb1oTdaCYG4jSPadPD4A7ttrCWRw8oapy",
  "key16": "nzHJNfXcJXfNXuszH6Ji7JGi4zTgtX6k1iP28ZnZgUHkKPsTgiWZ6V1ASxKKyicVJYT9w3TAXjAqxFas9uQJVQt",
  "key17": "3iJhMZAKQ3RoPuoGBtaFSFe9ErE8nMkh7Ui6bLj2d3EpRDjTNYujc4QDgJcHpfB5SG4xihcoLxwT84dxfMxYySqx",
  "key18": "vDD1K6ywnmvdUKELcsQf1zYcxZYv7g24kYrtF3gb2FZFRs4NocAjEAeToutup4Xe9uU1AcW38XRz1DCgkEYv8ZQ",
  "key19": "2BgZFnky7GApEHowx8nhAjR8uxr2mVfFykQdMbdQHNR73jGY9kMwKgCobLriC3ttmaDyfJVT3VDpWb9ChJTnuw5c",
  "key20": "61HrzUmsjJF5wcqDtBW542MYfdWjSR9KcCnUnDHDCRSfkfhRB1fvi7SQ9eFiemYgdf5cDsikcZBWXCmyoYDk6Q8f",
  "key21": "4SPhXTH37xph3ZC5iGXeGZ4UnPPsaCSm6xu9G2tHcauhUWzv52MWhUt5qJUbdUJBBJ466etiYdopPLuT9CVZHJxb",
  "key22": "4vtCfcQjZJ1ghZnr67LL38XyCfppPvboYRBqbzXx7USJbj9j9byhEDCiKiwWCBGZnttv29Nm6jJioFhg7nT58jaG",
  "key23": "cAev2eWfZxiL5oE45X3Ac1LZk9H6yaQR9W49CSfGsSeidshwk5Y6qPcyf86UqJg5CAMpDaEeZPJMsfdSKfxhEwm",
  "key24": "3v6nRs1aG9RPc9X7PMYNXb8eEkFrLu9dAbKdQCEhWV95bHtxXqKkeTdah6DSSGrw2nVa5yw8N3g1Vo2tiSEbagW5",
  "key25": "5tAdAMfeFDhE5N7vvhRpuLCESBBvQYsGwCMeKx9B6QzPr8AzQUuQ6mdbGxvDcXCentCiBesnkq7Sr4ct4sVGjj2h",
  "key26": "49Pat3711PpMHnsct6XFiiBSDBjbyrfsj898sTKSURzSucKdbj9Ruja7C9AQe5yHcSbGcjkETCdZrRUYdDtPzAqg",
  "key27": "3Xbg7KH8jyYZyYpBjotbBvYyHroyoXB4dV7AbK2zS9nU8aN4VAh5xjneX3yBG9MFbbKH3ZzwgAk8vjB8cVDVpPfN",
  "key28": "53tXots6qraJGtEWjjfc7dD4Z3LEZpVaRxVCZi2rn4SEYFfyp8ZU6N1dMuXFmxgCR5CvbzVscBh1y6DH2Myv86g5",
  "key29": "3E4rDpRytLY6DjGSMadNSDXEnYR3KRsmk4Ya5RcN6pDBLjsDkQ6GmzsHR2o1EZSfRHHPjPn2o5qBj7fqSt1fvRjN",
  "key30": "Nry6TFKtY9C5XPexWXznYukj4xc5iRb6GM6QVDhhapgTnzdWabK9XD9ayfoJeHvvvdBmabt2da6pK2kdzP6Yuvt",
  "key31": "2oEheMVuJXb4mpGwEGqCfToQpCmwwLZ4KCZprpvMNBoJEKuKoCroMFmpz6DiCBBDtwAxKicXk2qkpah6mVD6nAA6",
  "key32": "4M7r34uPRCSzMYkWBAsB4cccYNMWCgYd7ssax5smaHJJ3tTuFdzE3PHrEbHPEeZb9fUTurr8b3yKgjYNYxpVGJed",
  "key33": "bNjs84ZbWgX6XuMwe346UCurhYUmkJ5vprkJdf5Qs9ct2BGyj9av2rN6KLumLNu3999uzRw1hZ93LLG52uGjeix",
  "key34": "2xPknm6QE12gWgfh51iWAb9LVnrpKc1megCgfXqQ3SoToN8cpiSMSnS6iL7KBqr6i9X5qufEoX3VgFLgrXmze8Py",
  "key35": "2B5osbMPLMMiGnGG5w6NmxThCiA2cUXWFbXjwH7Q1tHuquekejitsqGbMnR1yeZkfNqXKRR7K5JXHGNwNXJ9XUfX",
  "key36": "3eNTUr2GTvpHFqk5f8h2iKceTj74C8PkcAh8LC87Df6wHBELbCsvS12x1YDydjqiR3hEpPdwXeuDKGBNGU2q2qfi",
  "key37": "4xirryRddN72jpDrKwmLZ219wr78uFanxoUxvPwyBKuKzJEAm8HJNEtU7455UTSJ31DbjhzyT7EbrNj8E6k5Jeis",
  "key38": "5ZFB8puoe3qjmRpwGmKxGw4XkxmGPgt2kGFzeWkc1WkEKJQoNm5uXxPynj8JLTLE2jfpy8fCdSeU43kRdC4AbWCR",
  "key39": "5S5RHX9JCkGXFAzucGC16dgPy7TNF9xgubgCBYJ9grsKMKupiksCryjEqNnJhxg3UcQ2MsB2HX8P91Fq9VH1dsbE",
  "key40": "4fbcYayT75bYfVK2XVhFZia1GuyXSkgNozFfT73zvit38ddDbFi8DGbRqbxBV3oeZDvsQF7AAvYAqjfGKFoUWpVA",
  "key41": "3zMXCFMopSvmLPvrBfnDimeQL6ZLTxN3MhGM2SwJt3bbjVN4b8T6JbJNq9g3VVpPJBcNQFzZVPjPL5Dg2ZS8EPnH",
  "key42": "27hfnF37oH27fCCGUV44QzK5aFENWmE5FCQnSHodzFTWQtGjPdktBpgTrMnzCAue9neFpcMrrmQQFCFbTyMgiG2L"
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
