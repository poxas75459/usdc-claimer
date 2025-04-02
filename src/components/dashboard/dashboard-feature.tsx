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
    "2tfnPANLibswKSrZLfysMwrM2PQNELdhbhwH8XStr6V8k4g76A8EkcY8uw14ahgF1u9RqzbQWERraqP16N4p2Ux1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiGjGEYy8DVv94rHUWN1FAUwtFKVbMTk5SzxzZ1sy92rDdbrYJQcVm6fQqzeYUiN8u8odD4c9GcdNo51Erh7UBU",
  "key1": "4Z9Vo5RjAfa1VZNcpxziSjanRwgr3AKwTsSNEFtezSAr3XFRaWa56pcHG3o8yChAj9xJEiDAYRZMGQ6P3us8mwjw",
  "key2": "iaNa6kPCJYuanbkGK8vYWhSUZedtkKNP661V6pgVxUT6SRu82EtL9bnXLqEmnZYZzMbK4gjxxFU9AKZb2hhxbQb",
  "key3": "5a4Jz9swA81JVu5qam8HEsUYHt9XJ633QTnzNmbPkTXPprdGzxUeoHoS11ud2UKTFzisKvAFwrS4idYnL7iW9nxu",
  "key4": "4v8dV3PYQfupTsc19ge6MZRiLRw28FdVmaoabWKWdqW6xxcpeHEy3ECQmdjPhPdJHXqBf2ikPE8q5sBGBKmmjS29",
  "key5": "5Hivhy83FYADiEim2CkxesTh1k2Lqhvw4fDvJXN9Pzxr4jKzW7h9nzLSq1n5xBgafXB6Mm98jCKw8u6Xptq4dS3s",
  "key6": "8rANS2wZ7m2uvHnxp1oKftYiy2R3WEE91F8G4v7eTiGthjAMxAS8pJW1uQ2jrPQtRotXmNQgkZrtSAn8V39WmKE",
  "key7": "4CmLjo1Y1Q8vDZygg2kRJ1K8y4M5fqkkbwop2eqEaW2P7nPCPefyyst4YHTw5aaa7rYicCER8C9rfPC9QHxSAfUs",
  "key8": "66UBi5Tajsr3miomD5Lyc8RTw4nTsgCQeAVGUR3xCvMZc9VaWxRJNbpTGhnigRSFdFEEdkFWKGKzKpt2um8Ux8jW",
  "key9": "5L1zkaTR2zUX8G8WzW96MNiwSEJobWyqiS47yiiFSc6UrL3AMSLfSLMcqCX5ChvtriZY8k9JBdHhH5jza3yGTUYk",
  "key10": "28zqjab4bizJMXbc595mbNgLKuMtinKxvkfzcHteNirfbUmvXL7WjRJMmghtE9E2nF9AaXUSoFVgXrsSoiNczuMv",
  "key11": "5uHvWbpeDvF4DyS9jFm18HxYfYrvPE36byJC2cVfFajdTmUeYCeCMtyPd3itEYyq2MbgpuXXRtTR64ydmS4zXjsd",
  "key12": "3FxcUAcQmrWdhxspBuYWaAgGx7zkAGGR8eYHDDLfB4zkbobZYQr8sJUjYwvMkyHMqVqQiwr8QpKqJC5hX96AiQL3",
  "key13": "Vm8haQbFnYWcVxAJHj19oFVQUaYp9P36fNbG4Aj8ZnAnCisU129qE2vRTwu7L6NfCkcZNiTf6dxgLJW4HXjrqJ3",
  "key14": "53s5BztQMFE9onCfSZTbBAV7cD2pVunMiTSNLvQk4TAEkThwYonB7kGwU4bfDcrczWBEMTdaygyVYqVrDhkiMdkC",
  "key15": "VQWHdsmg7XNzJrJjWGLp4hS2Rad7ZwwDDd7HNJFNKtqZRPvPG6rDe3JK9m7We8LpfGtbbxvkJRFaai7Gw8et3B8",
  "key16": "dr6ecXGgkzkMgDTx7rpMmsBgdxtiXgoFanR57ZpQFiKnm4TJx1zWTB83yRF4jge1okYyu1JDZmD4GwowewUTrHU",
  "key17": "41i3hYaV6fY9FjKeEPJc7ts2DSsnsNsvbKRNkiMXqgKvjHXm7Q31Zc7b7YK5jZUCWgEQrfzDMUsvftFcXhdp5nR1",
  "key18": "2D8xY2TXtdWsWEmUaFbjegHn1pppYm1y23QybdscPfwcYrX7PbWieG7p5dHYSwZnc7gutFLQwpqj88Dfa7KJijhK",
  "key19": "2zpFmFyo3K9nxeB39Z43u1zEKCtmdM9T4vrhJqCBhYvh5CqXUzFbNQDN919NcWEXAmp5NxeJVrbwZxroTgmfUyPa",
  "key20": "5PU9hw1fpxZfy2RH7AqzXawTEpY9McU1GrUgki2WYuuWLctEpEfcHXH5TA1dLNbrVAyMs1GhFqdN2jYUXbhfunXC",
  "key21": "vcGRoD5wkXWf6gk5K6f6b2Ft4V67kFy12d1Gh1x9akS1kqpKgQcWsMF2gpwHGfFf5rjWVJ3jaPvWE5EAVmFCGJD",
  "key22": "RemstkHgk8R55yEYaZn2N2WVPiGzgyjycbPZgbUp1p9zqRQ6SWJyeSkKgNZ47W8LzusJTmz6cuCXm5NnrMo9AvB",
  "key23": "3kRh4DCU5n9qiR2nQT6CJ6sYcVZMNUKKNyf1tQgt1FEZmTR7SQ8QX8pzU96ecTb7nMJSMJeCj4f1Mffw8kH3YJ7k",
  "key24": "4NTRrCLJKTqrVFcNTGND6KEWTchxZ3Bd1gdVTG8emCXNx8653GRU8z1J2jAn31Gn5hHxhcup4cJeHzHLQPCKJveb",
  "key25": "5hVL8fY2GqMDvp324WpGGeNKJm8N6ZtdyehZu43YGgaCBjcxyVbgMrnLYtqBhvoLNgQjU5K1mHC5aTzjEZAHvZ9k",
  "key26": "5Tc5h1TEkBvrCGvwqfZVjg2Mrfa3uzUewRtVAqhctHxwMZECyZmbqkv2uduprmYCooH95V7dFN7p7qVjCGGn8AsQ",
  "key27": "3GrUtsQLccjLVCz9ax3mpKWKuykLCq1J6aQGbGADCYfQMSv9QKdEv7JsoFrG2wB9CTm8ifZRf31jLJdZXrLLVvzi",
  "key28": "4cMsq5NXeVUz5eqEpRq4wTP5AbFkzYiBez1AQHt5pE49HDUtAsZzE5eoGncgwAdAuuCBiJwoGBKg6VxJjV6ueRpA",
  "key29": "4c3gr61v435q4N7E4Tjqya7hUPgLXM95httVZ93YcMbNr5H3NH8hFViuVYeAnvbVwhJ9FBcw21SRWuKoDsZwGcVR",
  "key30": "3SLbbQ1aV4pBmZEXxwmE9okLZRqquwCgy8NFXDbabX6VCXSiPGqJWro7abqV8krwkdm8fRZzbJxKSpsCdXW8grfF",
  "key31": "51s4Hm3viKTUoRfQ6tx7qAf3kykrZj24zhdLX9WxemVo5rXwGTfc5RLq2RQ35By6MY7kaVr4Rnb8aBDyWE6d1YqB",
  "key32": "4VZGxNEAKW5UHi79NVceGY9uTFqqA9xz6FCSkWxuPDiWRPG1iEqRJvNji2A395ad1PSYy5P4N4gstMDYXvdoEvzT",
  "key33": "2Lc3v1v2uNtBrBQKEBJbHKAywfFxTMP9hpJxZTwes1iNDLJKLmiBZcVup8sTdfsb5jbWNeRD3xX7gd9AaDmbmXYy",
  "key34": "3uf78xPW81fE4PwUn9GNv6AcmRFgy7xNV7ei5pcGmeUSSEa1Abk2DmWkZvWwixK7WHJYrbJC2Qszw9ssxZSLvzKg",
  "key35": "4HfzQWUMsjPKo9fdJ8RHg62VgCTghMVYFYnvuwAzZZS3X5DqsXoxaMNYJnL66YEVHsKyuWcsS4tKwopKuzNUqm26",
  "key36": "4VjoGxaQKCykK4Y1iKRLtjbXKj9UhNndUPoHXuDAWxvhz7j8sjoYe88rqi2ZCm5BpGsLSp6k6UmCFQL1uifYc7em",
  "key37": "3MGWwKX4d7wiioF6q17vLakkpkzeUiyBYZCyM1WvJptbS97wEeTfdVFfKhbC1xFVa16WubG1XckCXyJyQ2LxT2Tj",
  "key38": "64U2gdDE1oE6hSSfX8t5j1NUoNnsiNi1YxQbobHCFHZ27ZDyvHFv366YgxC7S8yPmMTVMwAtAq2PnYDPFtNG7iRg",
  "key39": "27hfQgsBtWTh1DgiT5y3AGxzxHLn6xwoAzU7F8UPxTLxKf4h3cRNFUkcNcXksDrRiyaU7wRYdxQLfuHPUMGgURc9",
  "key40": "5MwK7vYidtc9g7QwsaEPy9xAJ4zbZUSRbRTptR9u8TV49iJHxLVb1XN9YXPCpnc8YhpD5ocpaH87nQDF2w4hLfEt",
  "key41": "3SDhxy2MNxxsCiXXD9CYyMWHpaZt7WrNFWtwqdaevc71B3cFsUkkejc4smQg9tvXuqbLa3tjhJdbJ3FLUGBSgeMJ",
  "key42": "42h3bpvqWXmzkUwbfdmES4hD6oMfnC3KYLmpLLfXvXWQgdCpaDHFTZ72A9PfnJbPAuFHsimuepFa1uTBqYfcSRn",
  "key43": "3LttSnVfSnKBPQttfPxbugfeZGPrf6gvZ7MAKcm31X1HLE351UJbfreafa5X6fN2zDyyXaLFr6zugmDakeuU6AaM",
  "key44": "2S8HERGBKaoT79op6hHwmoWNAZAtpgVdDEUNoRFg2h4NSfzNHETrQDkGJnYAgEQm7DFToUZ8R9AmJBDH5v2DYRHN",
  "key45": "2BAiLHT1aXkxRrD71CGV2EL6bpWQNFdCAemdv9oVnxfuQuaCz99voyU81pM9HkYVkzR3H465zsGx5TqpzrqFiCrg",
  "key46": "32L3mQax4Ahrq7zcPj36hbmetVNNbcprbdvhufd9FCFRqHeMS8XQ28UJbUMTYvQPDTncEdoSP7L8qUb9ybYtZwju",
  "key47": "53wbu2V2GmAHPA3owYSfRn7vkQiwA8DH1c8qDh8F5ZgFzHjqscDLRkuqLe9bc3PxpMftjTbd9R6KbM77UbmWt7ft",
  "key48": "ju9fkgoagM794XDU7XCVyxQzHnuLMFu3dbQd3j3MC93vaQy3s3XpeE3Y3GiEKGqPrmmWTPWTGR5eXJFgBTzcX6F",
  "key49": "29eVrg8TXEWo1ur2wxJgBWZbsuXmQEgi6ZUVFuerXuYdGKHmnrpQXtv85sdRbWeqDUhHR8RWqdN1og2n5r3DoKXX"
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
