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
    "WEoeMRcboYbKgByHGZdgXmLq8JURyBvrnkXPFAtZjXf8aiRnLYjgh2xTytiWNLFxiaPwa9iCJq6LeT6GTTxndtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZLWwVbZtXv5VaHakkc5qDwsVMERrMaCc9kKXiqPvfPdb2H58KpbRuVGNZ7mpJa9zBZG6ZvYUrQB7gfYXKgRvEH",
  "key1": "4REVFLzVGr3vpE7B6yZCuSF2C4LD7SvvRsTiuuB3eB9rkh3MCbjb4oARwfLBx2xTehF44KHjFTs4qX1NdZFu75yL",
  "key2": "2nJ3Gje4RRNpgAJAzUonWPvbiFAjPUdYJwqVEqHBRyPPkfNuy4STTTc8V8w8EfKenhUcSBoGsdWjHYT7NikH6xMr",
  "key3": "VzXXjDonw7tEQq11LkzFd3ZsMp5stXZvE9Znu8c5oQsmnMbNCrssaVrZEPBztMNq8hMv3Tw6iikdSgLSBadTiHd",
  "key4": "4J92fd1t2BtrsozVPwMQcJazoq8qrdFuwLP7tUXwKs77viPcCYVBADDtoFUjSHE6cVEyGTtVQbxaZYYYkU7ZDsKB",
  "key5": "2QjhiST53Ddb7cYx3Ep199tHt6UpWhDXcYNXd1oPuXNDzJ2jhes9GQKrjZzH5vESmKYrW8a2tvBMnUJfDcNnENBY",
  "key6": "22fB4KgN2cpj2sAuwZGvkXawbd4pYVNk6e9sDbbXSk7BB5eR8Dwrf9UWRKoPaSEDZZ4yj533MDsYfnsBZY2PpmqG",
  "key7": "5KQXsnLFHHC2g9XdgVBy4AT4fYGH5MHo59XfMFTXPLvBvHqMfEhxdpjMgUuvynFG2WwXKpYdbJVGHPb5RM3nsTXA",
  "key8": "539uNYs31Q8WyX5JK5dZRwsSdUTP2JiomsGzbCwzqrhknpMuqdrCgSoDxehQnmrkfyXDgy641hnmBBZktftrC3W3",
  "key9": "54sjB451Yxk7uW8HadGCsvX6fEY4t3eqRekbQs1eBg5jByXoJXVNRVN9NmdPF88vQTEi64HYXZzxgZfNocwzwfMB",
  "key10": "5vFBBuB3nHWfeeham28sj8LmHFjtexr6icrEj8MpRgZExuwtypxVaWLRzfNNHNW1Vz7FEwCKBr1kf1tJGEbmVoCU",
  "key11": "47qfF6b9R3tweYfJuKwVc3ZkckyrCQkGJmzzwQWoAKSJ4J2kz36CRPWwFDbL8YmHGvk5cSka2h5Rg55gHyfEhaBk",
  "key12": "qJKkqv4F3B4DqmCGLMmA55QKQTsngtYR569WAEavE2XQPuiy3tH7skv5g5DXrqFLNegq1EE68RxAa59ntuRcktC",
  "key13": "4MLmQg8qgSBGvavS2pQxSR91J3dWYSfgVFcioPsuW68CBNJJygYSeEY22pkLMbK97ZdW2PFM73GTNZEBGoL27Gdy",
  "key14": "4FPhz4NT7c6gPPCPvv8HFKZFcspvUgm8qp19vPxXaSAfzToohafXgUKkFmfDt6TKXaATP5ajNEci2hPeKedzZwBZ",
  "key15": "52WhEnPUarVCgz4qN6nJusu9E5c9T5FGP1r5qqbit5JtKEc8eQ81xvwXacgJqrqRYLqdFydV9fJDJT6RsjTzoDNY",
  "key16": "CXGkwL7LXfRb5SKzWtsUPxg8TEt7P1J1A811LWYvWi9LF8zSqm35hEWedkAmkBXDvzvx5KHtU5oSfwpxRyUpnG9",
  "key17": "4vPcRdqcgiHc5gbmGNojsvQvGSxQs9zP9W9KsnrvXdpxT4d2bfokFWLkBVraJkjQnpMRBCpZ39coRWEjqBmmn2XF",
  "key18": "3k72dqv6QinHJFSRRxz6LLLKCwzMMJNbxgkepArhqeFfsQUd67yxgF7xHD9eoipCPcJX8QHr6KnjSwhuuPtPmukN",
  "key19": "458WsXzGcikynn9r4dHCYXwRe2ranbkpHca2SwL3ifjr7LfVi5NDQkfJTLe7Rvmk9C5uQ6hFPdXVYirKx4ddqyVt",
  "key20": "28CBRvxpRQRrH63Rwu4jv11vAp7hJMwDyMsg5egEe88J86zqscBabaLzC2caC2id7SkNvjYVhaNThfS2niP4WGAb",
  "key21": "4o5919sHKkEuB4GGYC5UbvkwT3UUkFwJv2chMec7PJrkMnc1ZNAKtTVNXwySsmeUGuT3Wt624BeuKHjVxsRqnSKX",
  "key22": "4bx1eF1YAKtK8uidHCWtSmPsRxumRpC9BqW4URp1tn9nXhBwaGcTVuz7jV84MRjVY4b5am7sJckr5hiXoMPkzWC2",
  "key23": "e33G3p19Gse5E3oViazkRY92sDntFDp2632TfPLELdbAtN9ngm7jsvdxvPZuf4P8qVqZ6CwJGWwq4BCoVKv2r2J",
  "key24": "4LXkdbUKusuT6bjpkdEByEougWivduCzkHUYGUX35a6fEhfHSZ2Vuz48gf1hbVJ84Ny6FqcWtJ71JxVxM8aGMAUt",
  "key25": "46jN3ojDW6hZzbb5F7fuuJoBkbAonDZcE8hN59oKC5bpHwqMipGDTdf4Mbt7Z54iZ7sRFchNW5hN23NuM4FAfWRV",
  "key26": "3H4Nmib6hv5a2ChUz3aZqWtDw5MowrJKcfeRkFrgRoXiVxqwer3MjBDA2wx6B6as1jhyTBuBPJsC4jnRbUxzUTUQ",
  "key27": "5YbCndqQjHDrScBByEC6tAjmqDDHwda43UQ8Kt2Mp3WQ5RGuWKW7LpzFVRmXBtgGuWq1XMvGr36BVkr51xDFLLSN",
  "key28": "nxxUeGT7bWq53xkyqAb7h3eVXio1myfa2qvZBs1kcEBaP4VM4u17VKWW1LaE91UgQyfX7hu27Ybs6h3xFm61Boo",
  "key29": "4NCB4QXqyGRk9sBmvWk7xftpbQXLi4jNmSmyaLb5SWvsTu314G3kMVyjuH3eSTh3HSkKgmXaqZ5TZ4tdSTn37Big",
  "key30": "2XCnCD7M7UkrJC5iHRquf7zMqDXLepxLiF6gdBoVskmTqbzgfy16AJL3mrKiFsXGvLJRPLusJJNRN4Rb17Y1cN47",
  "key31": "5a8HgeA6YWCxgoC1pmqoY4EcCzsq1AhXKnDw8LP8mAaEPzrfncDXgpPedG94QLzry3xU4L1Yzr7e6BropYhZN5fQ",
  "key32": "3d84FxP1ma4XXd6vM5pcsRjG1FjaFCN8DjS3rhyDGeQwWb56tm7S1sDav2mwBCLCZoZCC2cA64ukmTbbsSxiJgYq",
  "key33": "4e68QTJtSuYx14nFVXqtrpK5o3YjtEuYVkNjhJdujGvAp8a3rJ5WNEkoL6Bb1KcpsKu8ETLUfkBX77NiJgn96Nmu",
  "key34": "4c4CE2oF9vukduHWXTaGhJEe5FtCHgUQJfNLnvBrQije78wpJUvEbU3o5F3P8znPsZsu4Uqd2yGA2KrndgHsdJ9G",
  "key35": "3WZabypijBoEwuzFbMVQKMBxCDvq3wUpxp7GH8raiNEAYJ9L8HTz29R1jKVKvn5d1svapnuLjE7g5zpmE4kKVLNU",
  "key36": "57Lp3Tycm6SYVDDPnWAqFZvK1NcCGz2eWphFrnH3PW8kKVoMUuLWgHPCWJgS6zUoxjiXgsNsoKE3XmdmjA4mkNVF",
  "key37": "35aNzJTc6zqY2oUkyN9u1Bbn3mHcixDhBsn4xnDix9tqdM8ae5B5ZvLqsoa3aRdLpXF1vKURJ9euPgWeNaNXtK6Q",
  "key38": "4LB8debqHzWwrDCtSYtokvtA82bTAs822zQYnv9YmPAcpjH2cigi2rRKRYvPS46GcHbgdrUdsCgeixGQArxfCYEr",
  "key39": "5hSCrnrzmtVgzmiRwTE7s37E5YqM4BsH1RJKwTE4wngoCHyPyA88swe69h39cWS3ni27We5QtjDZMzSAQ5a9RnGi",
  "key40": "3xuVMJRpsCpNTotkL237jo6T976cA9hfB2268k4zzmsMRs3qPYx7pwADYaEyYmhBVsP4HRsxoSsuePhn2FQTpaTS",
  "key41": "3eskWZL26o3FHo3KsecrMPLXtmS4EXrgn8duerYy5xvpJmfTSieUakkLWvUem93T1MeTG7TEqwpF6sXXha9ijqTW",
  "key42": "BVX8FnEBDhJpmqGnYiFHR7teVShNEeXEBsAh8KPZnQpWsWPBF2z8e8zqkaSC9MuUU2vJXDE3YMb4tn4mXh9wavR",
  "key43": "56oV5dSyahnNTyr93p31y2cGVgqafLAifHBvieSSxRTstMFDrkLW9ia8YSCwEahAZpwokLrm9qLunXbup1Hr5yYY"
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
