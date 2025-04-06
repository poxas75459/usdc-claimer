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
    "4xxk4RRH2AQPerTj8yD2jfckoTFZHUShJi21h93oDTdvTp7kC5AT9h39wptmaxkrgx9sdnDk6Nucq19P1oStx1X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHtC7hJpVPob27EjQMZya99N2Xs87Cymm1BBV8jY8naewsPxrbaFe1BbzuYmDVUeZRjCgAoCJUK5gXRfsiupVPb",
  "key1": "5DqYUkknXWCFi14YEt1raCci7haWYVxVbpZ3SNT9FYhJ8WW9hJREPzEx8fR2rJK6zLreMP2WoZNGtScLmMiuoPpU",
  "key2": "32rXodwn5eBASo1FVpUcbVeWLR3GbvVYy9ygZhhMqhqPUmmNhx43yAPmYwFB5Xk1amh98QDkKRf5BzFwbnzjJkDc",
  "key3": "4WRcy6GGu3HGQQ5fFJrsQesYiNsBDenhZkkmjDjEnCeXiXRfiTxDDuC6bH45w8SVYVYfAmEWxutQqfNMe4DUAeYU",
  "key4": "5npf8phM3zo7D1NgwJyfR2q3HRFpPXcg9MB5fvxymKZXqb6nnNRvhNyEV4ZsQLK3ruXu5Cz1h55Ue5yscKTvsUaG",
  "key5": "3hj6GwjXJrYmcmicyDJVS58xR9P1tmRUyWV8qoaYyfCMKW1AjVu1FwzaDbXrqevfcoMUCueBhhMdcEiBxSC631bz",
  "key6": "5wZ8TQL77JobHwFYPYh5bCc56dKYpzSuhFH5U4zSTzkTHtKy9o5KWKW8NnXmtergF1SS4STi2jubHcFYeeadtrvd",
  "key7": "2KfVfhyRmfLDDFoRCw2PTMNF4PdRhimpzYXcYdPv6G23QM7vERsAXheVmC1JiNTePffqrNNi5VGTywF7cGtAGHzZ",
  "key8": "44UNhxSLxNzWEB6UVKZGXnznSdB5P4Z4n6wDcsQrFabD6MQK2i5cZsdiNLzBAqsdKzHuujSnyDsLEg2ULeH2XZse",
  "key9": "2vmsqqC9HQ432G8t99FVjjs6ie3tJoAAaMBnNovnV9p716WnrMM3QrHnd61W5QXj6AmCK5VNTjmhffboGaGhBAZJ",
  "key10": "BJ2MgrQQiGov6svbrQazzVSwNX7AFPq5uLQYbKLerFQF5xmjxh472r9Ztx1wENzbgRAo7osu5Kc4eH9H2FHiikt",
  "key11": "615774eLpYxaPxFEfyfkQ7AifuGzWDPv1qKAb8raoN9khn892AQnxqHUBgRLmicrXu1EGzzaE15heNXgiwsRitcn",
  "key12": "3ZQXtx9qeDr2Brz1JPyEpPvKDebHwNMzvb5CpkHf8uLnjWkjim2z912ZFGDAGzUNcuEHzhNQhsEFKUd4gHGttYgB",
  "key13": "2kNQPJaqUyEryPsAwKfGa7vF1KSCMvP4JfUYKF3B6mFRKALzp6f2MKHk7evV8tnbMErJDtkC1XH3tvu4hN4cjrmc",
  "key14": "65NoNDRGJ7jaxWPKZNjzwiaB9BvxDNT7G6DBZT4NkR2WG1VBQNLffb8p9Z6K7KTLgicipxCDL4zggB3yS6cENGSW",
  "key15": "3yBpJQf5nzeMo7D6MXjRNhiny1s3Guaq9AAGCN85bD9nor67sTctW8bPseGqL7DS3xX6JYWuBHehPsA7NiCeTpVf",
  "key16": "3gs52F1Gz1rjehftwiSgSgoBBmY1SrQBzbkNFu5iPxWsfnhfX39RiYaegwEiF8Z8rBoydmQCALFka4ztgTdX8nse",
  "key17": "xigwuJMZc8T2JUWaksZgfChmtvc9SwDZaXitrnofuKuyCB2zoTUB5N3AL1FeeFpnx1pR5ypT682Nj6wtdgcpzPk",
  "key18": "2aAksEMmt5Aesdg4C4BZcGwP77PeNTapTyMwKjkPKM6gTVbDWEf9B4brxZxKgmkBetfKKk2q57bqAE7tECDpfjkJ",
  "key19": "XS2uGENf4oDiNRGMykhiczFLB7CQTUVJmHngC5qk2kJXvGNjZGtsYReVyAzoESGmEwR548Gzk4tKWcqiPKoQVPV",
  "key20": "8JdKHgamkjDkTyXyY3y9JxDYdJBDPoetnVZpvuxF7UcXRdCjfD4Jka3GTwMdt4wsstRAEc1pytMKgRkn3RJkgue",
  "key21": "5AihDJz3Bt77yfFxNDJUzQ3jPqH26sF4vJLg7cMH3AQ7dD3dcp6qud1GSoVFKLFi8exKWRDfeX8aF4rA6SQ8TnA1",
  "key22": "3P3oQ1eRL7kJy6QWcLzmZWwXvBZpfkT5FtWbXPVESnPdMS6o2FpiRsz8fb45yvgy6hfGE7rYXKe6XMoaMBcMv8nj",
  "key23": "5i2VmKxENKtBKegRA9kKDnyTSpHrZrKLtgY2bAWLz3JLKCPsxPeCxNt2JTc96vVjDREGn2VsANi2hNjREeHvc1jA",
  "key24": "3S5YqtdGbc4KsefXGpLmpmSkgtnvEGJ8brbiZNWn9RsEUCmhMkUySvTDFGt2jnHC5gdw8NpN4sdabqnBYARib5Td",
  "key25": "61sQpXEnoU7xq75FJnMNnEnSN4MZ9Vio1xPX72fuTNUktfmckfLwKDmZs8nWvb8USN93BBQk6Xh2UfgW2rBpm5yt",
  "key26": "Y1G1GRYJjaiSMDRGy4EBLQqrXcpkfjgH22K6PY6VphgzmfwJmvtaaHa6SaXedthrFjmSUKdD8JcQpcD5cRVBGUB",
  "key27": "3CqruY4P2sNtGNgWtsbh6kEGdo9CAc5wgz5uBA2dw9pSsYZ7xcxbHUQzVuQvqs7cc8uCU9dLKh7cQafm89s9PPUV",
  "key28": "4NVQJaLdxKqVbDH1U2ppjByfrEnPhQBmQ8F6AyJx7u2d7S1hPq2fPKy3Fj9YAByGbEP3YuC7QAPUzmVa3h2CzTJW",
  "key29": "4DJP7ZBJKw5rKCeEDtyfWLyVF5sy9D34bYo6kgpGafEYfKs4yG41quoApDxr3jQaXq1Wo9zCG6xVmzmRfs9k8Mkz",
  "key30": "5Bm3e9g4XcsKjc1yNXsg22KCsd53XAzhXiLY58Sex5Z3Gfe5aW1AQ8knUkGu9s5qLuqpDNzRAgi9taCjXLrK9ekm",
  "key31": "XamHeGmqWw7BnHy8wcybqk74BS7ZgMotcXnaFwRzTg8Muc5bbh41kPhRBj3STxSDCaDLSaGPxDZrPTQFq3khHzf",
  "key32": "4JSXSptkLNZWzyRQYAomMvtNnFvZ65xuj6Q37RHQQfjdCfAYZhtau4w4XWZzWgh2gtKu2feEgNSF3MyjaRjQ1xs4",
  "key33": "4S9at6VehsHRz3BYu3PUz2pNiZV3dqbPqosaa7oPjHev9knQ3c6TGegBjiR7W6uRyduBChKfbuv9GXVU8QNdDtg4",
  "key34": "2tU9dV38t5NdEirosRocVSam2M2jC4kLkdXE6MAovy6QUQauaTNE69SE77aQGW9mKxwWNAeanmxfi8GS8LcZJiP2",
  "key35": "2hPuzXbWqwiPoM7vBMwLCgvt44567fUy3RHmd3YVu166M26HHct5YjPoY64BSXDKD7GK77Lqvn2PNbXzrXveGmVM",
  "key36": "5BnccK89itwftYHXtK8n12NCgLDcXzLsBDRrF7UDYHPbtRmwQr9oZkwW1sGXX6xLK5TKRZxNTxFUwseT2Q78VCkp",
  "key37": "5Jbb9HYGMKMiKK96W9tRkbUY9cjjKCgHGYu7BaNWEtCwDL6qwnBv1Z2yjmKjHsqdyV8Q2Pyvxvo5G4rP2ykVMNeG",
  "key38": "3k6YoqNKBqoRNrH4tXW4vegWeWbUpEFZHEmfViEzTPWDiba5LkBVF7m4RZ5iDL9XgcKaFyvn7D6JAj6rydhYFPBn",
  "key39": "4n6GYKtqeU5UaEDPYVbMtZquVMAyXLCoKRiYAHBcg12myeMvo9926Ctmr4TSUKMy7XRdUkCR1J13RHiEgTma2NJ8",
  "key40": "3uEXnrB1Swe5iC4fbhXWGB4wVvpuWDyH1HbUMzjLuv2cpuYazE2FCLqnABgVF5YY63b5MPE9czKt5Sn2qzv4sZ7V",
  "key41": "6348yErj3CsiHxruFw2ATUNWCDJhYqRoZ1ZNfTKJHSRfAdddbeC6N8ima8C1xk6iwEUu3b7FZ41Xmfg7mrVDh6yk",
  "key42": "2XwH3tXviDHpeKj1GXNRY7pDnYSW7wiGFzbnhnkJeZSKg4zUSBACBfNJUJhstybvwfDUyQ1vbErDNjg8M335X4d",
  "key43": "4DCwncNY5FnoTmNVRNBFemmwV9eXTgDC96oPBMXMdk2reB26TZFgvPVGSusCpBjhJTCcVxhHPSRSe4ktPN6DJCBU",
  "key44": "3J3oP2ZR8NvN9geW8bQjxXdX79bn8TuuoGBG2WuwrHusbZnL1UEDPD8Pp5y7KzUkiEYF1apmS7YD5XQeqNtBSGNS",
  "key45": "5hKhVyorhWBuqaDX9K5sud6wEdtA4SLUvTaXRYVwNQWTCcV8CK19yYXMywCdmHBuDEb6SiNCrCpLgP6SNZyZi25Y"
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
