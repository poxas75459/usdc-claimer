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
    "5LsNms4aDtZcKCCPERt3QTwnEBsAZtfCz6dRZXAi2MXNtYo66mxjSKA9GVyHFZ5A2E6JfwLM3rSwy7o8Sc75q9X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEbVcq1RA9u8WPRvYpiAk37a8d2boK3JZuRF15uqLrNMM61nW7Cg95wgQGF2zEXc3ke94m8RGYq2DsB9Zgv6qRj",
  "key1": "5BNpsLwRt4VgC7RgtrXYQDf6AWTABBBChRXBDjp86kdbfBTwy1fjuy4dUvVpWt8y2soGWswoi3s95qPo6JnjTFV",
  "key2": "kzWcZiTDdZqAv6CY1ogVZaGijDzeD8ZzteeZPTY8zAJRto8mY8u1mMKF88avvT8DgJ5LqLqrMEeGdzozdkg2MmP",
  "key3": "2Nh66BYDYem88KNrogeU22sbNKJyeVkobs4iAhDJZQfm4Yir645XZj7dsCyPSQ5E5yjhfVy9bucBkWfVmHjzgvaC",
  "key4": "53YFArnFLqfYhHR5dVTNgxiSh6mAbdLmcMuZZxVD6KACuRGjWoNsKo9dCosvrEF95PoG5YeoRDMDEcGke9LY9n1m",
  "key5": "3GGEwG5oambZFB5AVZX9RopfnRoPGgot8gDpC53cBzd1MJ9NvEVmikdEcqQKnSufwmpLBczuEFh7soTVxRZM6DVz",
  "key6": "4uwwxfr8qFYpVxQz578Y9CrzbN9TEbZwqZDnBeJX4rFWjSsbgiCoNVHDyYEiFnkoopMZ4pgMvz3EtsaLNBjGEjTD",
  "key7": "3K9RaUhP35qzt3xmEKppKuXN1C9vmBArVmfY7e75AHUz2jjzUcfXVzwDFkuW4NM14pkCoUHhijJxGxuELNkwe56K",
  "key8": "5JkLtdfnorrGdFi3DEy8jBgjweJTdHk8Pz7U5783aWYWZkbtbTtYXLTBw5JNDu28Fh3DU7iTBvuW64o7LzThyBh5",
  "key9": "25eQ2fJsc1ghCMQCZBKEC8Uh2wijzqsq43imYuxHFfDQgKnNBQji2UYoUzq7ptgMjEMBQWuYx4c5smdG2nM1LYHs",
  "key10": "5SqYTdTco4ckWcVLBkJy1rrpBqyNuhQNVm1E12NxKH6bHnAFGFKnxHegS2dudJHkbhhEuW69JmyEP8nTE4sup7SB",
  "key11": "2jLcTkmQEkoiDL1nHbjYyK9SwJsenUyjab2RSV3Uam15AkigxjoMSBscCyTq6825rdjaoBAx4rfDqfjk8bH4HVuP",
  "key12": "5ftsa7of3iLsUyFScQf5VVzSozrnRoMckHjtDipDfEucoHvZgh8JLsSRB47DnDk7oiDT3HK12droqAMVnZDgg2Ra",
  "key13": "34vkwV137Z3BjUPpaMSxqMxXHPbmsTeDV7v6j8f7MsrsHeej73Q7ACHtpEnhcKSzj46vuMofVF8i7he6c6MA8MNY",
  "key14": "5ipdFL7oTv2FXtbAR5LiQUxvAoMvM8d6vEkyNSeZHW3qNTqe3ra3jkauWQM84nBZstGPqfEGbc7xM8rrtcv2M5T7",
  "key15": "5A6qkXEGyckqqyoKHjuBLSMyygbnUpT35fdBWHY1rWeaR9WozfuJw13koE4pztMNxQCQ5dDfWNbJGEtp6rhfXuRY",
  "key16": "e1hpwU678JFW5SfUy9LgbtWbFJvMzFC4onvZJ8scuia2Y5fAhq2Hp7WUZHBmamN1LxkYWdgYJzgTKsUzG9W1KsJ",
  "key17": "4T569yxU4bNa1vCS7Gu3E22d85nwYJQYBytomfJXtXH6JVbRMnS8ozBh7daP4bKTLtHKrLPkfcCgB5QTfNwZ8FA8",
  "key18": "5nYUrYtLi8q1314Gdrbww43jXtoWSbofB5pWsVPSZ6CexrvoQXib8fgLxKrRXmGTaRWZR5yVsSQFVgLiunRFVNB3",
  "key19": "3UUuteMCMbefympoqipDQqoCRd2FHR9EspmdgAW88f9yy2MbNg5gV32N3FDzkDAEgVHKnNf7XJ9q27cVbm8NbgRM",
  "key20": "4y91BpH15XBNcqE8e2UQXT9Zk5fH62CeVP61M2WQwcS4PFujmpzv3gsixGUaWk6Fk2D6Lk5vWVSZ9FHTCfH6cNSm",
  "key21": "3BefFMAQK53EmfnFM1nMHvhgbTaN1u2ioxGStCr8fhfGD3z4kKiZnDk4oE3hNDqTkwpftkr2ruRR6Ew4H5eYSP4d",
  "key22": "2Dej6vKWmbTWL9bDB3HFFiTLXoBh6C8Vh3ogp78qBwU5fVxSQY7oFhMA8gJXBBWuBEeW4VsBgFyR5auep3mjGN2y",
  "key23": "5YzFaVfQouzWX19sHXdYHyVKqxTZ7aFnfoE8tJHR7Q35sgqS7h83UUEQGLB9XQkG5c9ZuNTtZXaSWs5PrHtkdaLT",
  "key24": "27gc2hNuWjsQUFd2EsfPwZYAq6bgtLposqEAPHzRHexBx8RC1GNtkY1bzcK6Li4Tz7CMq7Z7VKzEBEs1V1dRJ9Qv",
  "key25": "4xm9qpPUoA8F3oTc61WnDZ3k1CWsK1zkLmFYEbowSo5mibBkZJYFWQZgmyahJrtU8veFM4UPCvkcGXX6yBqWCta1",
  "key26": "5xHebD4rNsTT7dZvA8KdcxbksJyLeAwYg7wBo2mmPs2yXzgD4s5QHvFL832Xv3jTR3pLXrrJR4NShxwRCeB51fM7",
  "key27": "TsncK6Su7LuJGmpuJid53qwsv4fwM5uyaD5x3yCjHwsxRAbCt9y8Bx7d2aNeUz8Bc6PS4hdBbDF1JMbGGJJyawE",
  "key28": "4LMXuKjCukqHCf31WUts1AwyDLzhW2wserahhvKFzZD3jE8oTMus54LicpTvzYZ6YFQUbEBo2snsJD8iewgMGoo1",
  "key29": "3ZMdxz5AMWG3w3R7QtywuyZW8Fx5oEG99KSUSesqf85RPLRxqtkRTaEvNKXoxMUHXAANqk1D6YNLQP3caeVSi18R",
  "key30": "Fa3m3Ai12aMagCXUpTFswZU6zR5q3WpJdBmAARQTBXH1J8A8ih8Aw8cRL4FUfnq5zzvPk15hYVTMeWcJQFLfJvm",
  "key31": "2reRB67q9su4nEb1Ez67ceFAiSfEw2ALw4Sk57YhyPXif9rMnorQDg6pU3AJWrLstVma3BEQCgWFKHPd3iWEaqgM",
  "key32": "3ndGWR668QvpKBUzgZEhVQW9YBJB2KFVWsPNp66Q1xDD6nTcToTfJmtb6j7UzT2UHa2u8o6WvkdWzRDNwc2rW1Jw",
  "key33": "2oYsvGmZ7YNbBtTb6HcWhrPxpXwidZRq3kvDUGpwpyFEaSTyx1TqH5MAWKnL3N1hAWf3KTPk2cjMc8nYpPvLPEJq",
  "key34": "5KV4YTKPYhatLLVg6wNs4U1kARdmG77bbAx2LYXGbSe7t4xJcs8CdEr6C1tVuPDiDKw68UzhZVLQeiQFFFqdyqdN",
  "key35": "37b5GhtPBd1VFzdbCARXPpyPBSWp69xvBHHsSvhYkV4ofnwv3huiwLZHiAjMAcUyxeubYq22Dg1YZ6ywz96d3vWM",
  "key36": "g3sngUkTmwkbypwyEnHweWhMGAojQFYU2wPHeetaonzGXycARoEPb17cvH5PXTETT7L7SRcWiEeMTfL7o2AKRJD",
  "key37": "2LNGWgNDA69y4Hojz4hyF6FNVTHJ7ofP1UjDfjBVu7Vmd4WEpr1vnFSMoamgp2T1Sn5niKZTAEk9HqeWqPoV2CwJ",
  "key38": "5nHA5DqsRCeCEbXLHKiewiFMFE34FXXTGuXDpN3jVyHtEAoVGNTFps9qsqdV38njsXLqV113g9Bc619mE2vDiAVw",
  "key39": "dykk7tDpQS72woE6aozP4usPaqUtUzjKQi5ecUftUEGz92QtBSz6qTBaQidDhwYc85Ls8Z71SXMVr6J1XrafrCi",
  "key40": "4nUbaWkGyP3sw1SqbULvErZaKVehLCoESbMtk9Vrb51YrzrSTm83WnpnPFi1Z6ayN5DJiVwCn27bFuvAoUd5LSWU",
  "key41": "2VYNgBDejYxMmhkFZc68K7pfrssBSYv8fsEVCbpiQwLeieoAUfwAsJxVi2YW9owowLZ9EL2ms59fY3xjSs8H6QMd",
  "key42": "3RV9wp3YsQ2nCX3JL7T6exoaF8hpH4UobKzXfEmr8b7NhUdSZy2hJN3HMGhiFzX1arJfLdMGo8894Yjfiap9ffRk",
  "key43": "5dGAWhFSyLjnAeAvE4KbaNnADmAhCzanw1ZphfYsRBUKBTUWP9ZewFdnhcUMczYHAT4fu32mWGWwjXnzrpRJRZx5",
  "key44": "2ES9YuVRMeUQcLv34aRRUKAoh7DP38gpWyBuT2hhrzpHJeMWvABr7Y3mbdT9wNgxqHTq9KTdofgcpfKWyfuSHavV",
  "key45": "4YVG8kLoZXpqSe5PmfyDYFf96qBoHiLokwDbcfMzDhYjneJF9ABd9Exh36HrFFZV113jh1zppMLWQeZi1y7YLV6d",
  "key46": "1seabdJAEy5yyy8UYpT5ADfckWuXNdK2nskynWU782C1rnbNVdswqDGa5opHbwjmXtUcZzHEuu3pfVvcHvnfSGy",
  "key47": "5ALdqwehZxzxVUKzfoDw5sj6hvYuyZQJZWqsj7wzeYNoy2B4EgECtKH6WwxmyYcepRuiJBJv2VUwpgbP4YGuVwsa"
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
