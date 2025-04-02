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
    "3vRyWB5vXyeCdXsjzp16vfavZMSkBe81DqoMPVUevBnWhxe92dwYzqHUAQk77kEvz1xKNiUq9mft4ukUVqTRWFfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HjZxmyTDHnxhwjT4KENrzYodvgURu9mLCxHb7zLTgjcv8TcWqKxKvjY71nyftnt3JA51SbbHMEP77Yhv2ijS9Cb",
  "key1": "5jbdMLiCBiQfdZKP3PTFjdTw9fXydKfkecjaWDHbn7ikGXR12ioGDChFnwk5BntRLRY63erUUs4dC95qDwtrahMp",
  "key2": "63npZMe9howTvzD1v5KBvawUmw5BH195fC2rivjTkMAdYfWuKFK3SDYTXyrohPmPNBYfJfEsc4xqmi8UgGdNnPGj",
  "key3": "5DzVqexhe7KJqCXT7NZnyQuMdbUctiRHN9DJ71fqFy2CzGeMEvCqWuFDyADjKx59wLGcc9A78DNSqRkqxTWUrHtq",
  "key4": "4W66bwYVFcPgd1pTMNWwcovzTpZxL6MgTXa24QWb4cZV9Wd2MKseVyxfXv3f7CyFL8eGZzTzJX3sFLU1pyapsjZf",
  "key5": "4j6bY5trPk1kmMHM6PuchULoLhkqSkL5RCVGhqYUiLpjBuyNEPhESphZSSLXx5VRgdCZLix6dV1mUETu7DMBnbo7",
  "key6": "5Nc7Re7YBaw1ZyDgoXFRjs1n2fnxgoRFUauu82ctKpAG96Vuk3YDtKrYSJn1PdfrhkHajXiZnPQZqAhpvtRJwunN",
  "key7": "2jKGzoQBNPzU1FAuvoDB1LPyV5bCq4CYk6owAhb36dQmvmDbUyBcaCPVQ62A8xws3aVq9Se1QfaAgtkjcgerJQKS",
  "key8": "5urDuAxoujM2cpY7gs8aesd3YqrVaGLrGcMn71xVw9cJv4jPmghsQ8aoT6aUrNvkn7rrmbWvxSii2H5mCwisamqe",
  "key9": "2hekhoktwJjoYsvD4iKy373gnwp6xYT57HZix8AuYnMGGaMtgCHvBNmbFfiZkuSYPYWGXcSojsfothnFWHccC8G9",
  "key10": "Zb1YUGg2L8E3yAJumHe31BZPcwGDj8Z2TDPUY4QuFiyuonBiHHC2y31HGJ3o1PS23tYu6WahYybdwuZRW8jnD1k",
  "key11": "5AVM1ijJPamwFUf9qqPeJ8jAACqX1JhwyVhhCqKaayHNuoABkH4caCBg2qgZCNEUFArjWWCDd5LhMdYHdfXJ68TH",
  "key12": "23hkd5ZCeuUtvxvus1NUNFMxQJaU1JmV5TwF57zEYqxtBF9H68dJsDnTXgaspHPm4br3PrvgxB7TRKxciNPYHTig",
  "key13": "3TZjuzGKp2waeJTKjnMzfMLXAp28RnfbJmAWzWhCs63jSPK8iSnBvNEREDgg3m1MNBxWBeNmt2aVWmbnGfS81RYu",
  "key14": "4pEVpovA8G1Vhhp5gfBgysifNi5uVZ5dW4fMAPqin5uyz2TQEbzFiqTk8VAABgPQ4pKrNCGkDXtG296S5Tq5PrDA",
  "key15": "NEhQG4XkLAo1wf3MhnpYrtSwE1MN8cbHBkaxFXMoWR2daUvn7XbKkXTYw9LGQm3pd2soc135FF69nBmy7GiTfjj",
  "key16": "2LNMc7Q7eD4PQAv5c1KaMn1ZnPhehxu77Ayb6ZpShxCVaAqT8wshNjDLFD4JHUnXFfoAD8c7imn4dE3nY9zSU2Kd",
  "key17": "2zpVbapfVyFZxWoK1tDw7oNyJViMn5HAhY3uWWuV6DrYfCureJz5UQTkPdx6zeFHhqW2Z1UX3wqQ1hfYLLMoYG5F",
  "key18": "38hAoQhCL4fZgputG7XxTth8ewBoAF3yqxiLwDqzQdQWBSrw6gGrCDyyTgnbauEejMvYYMGmc7TWt6Js8B8JSvvn",
  "key19": "xBc3LgNAW5ukJVikvpE54fcFHFaHvhhcpcnMTra9dZ5h3RiKUm1vfQjrk78mkL1WUZ86EtsX6vTe8BBrZNxau8B",
  "key20": "3Qj4JdxiG31xpDQ5v4THEBfzsS8roEcjfvoqqLBzz8UGgwf1iyp5ie1UPyTS3Y5yHhQWty1QZTKW3ekTKmMyUZ5P",
  "key21": "cETmFCDuafVtHaxnBwWSob11foABnfqc64ttA4cnA73AiEqntbwEFmcXpsFSyoL35FbLVBY3Q8eTcLxdyiWF5Na",
  "key22": "5CHt43VnUyLrVdtN42NDNdeQtZboykEZATueZZADyUhGppvNTZ46cf8jUb7orFwF8wAjRH5fzPxosUKxUSCG4M4g",
  "key23": "5SekMSXW2tfUfpiqFVtGYteUDKTCSiCmrJiv9Wqe6vN2QeR1oLnCSyMrN6NeNf5EV4WZrmApLnRti4Yu92Jo1i39",
  "key24": "5cLs282L3S1fnCvvh13R34M97LE3ehA6MuXSC5mVv5EKvAgZwFoXNmtoFwM7TWqebaL14hPPRfUettFFiSCvvgQv",
  "key25": "3XFRhoJovhbbLFNV2wczJFqgUoZhk5LTczBJCzWxGwYTBUju1N8KpLdxKD5yAA8GyVZ8kuBkTfZ17CwxHdLD19Jh",
  "key26": "tFE6hBZTkkxw7iR9agXNS7AkdJXcgsPiCRHpaeatCmRpMZjSH3MTrXphiKGuQ5ktYGFRNDFQedti292pnznH71W",
  "key27": "36w7vSMjTB67bKfZtpGMdUhYvPM6HghtCp1L8FBiRuzVL1HrsxELY2otd8GzcFGNRVj1Zbhphv93hBvjqzaLnrdK",
  "key28": "oG5YhNFuBRoFKdxusinvx4fN41pNt9vxuajU35x251eTznsA6njZ2AAudxwV5pVmrwUTmQP4R5vM4ni2oXHTFHu",
  "key29": "5q5MGQeqAHgUvZAWpVi4Ykucy1VWsCfSP89qPCy2Hfc9rpFK3fF5UUVCCTwtAV7vZiKnY8ApGAPncVksCo8zAyWB",
  "key30": "52VdP32pYMdYgTkmJ7MFeFzmrY5ytiKhKGnwSnneHwA7QvzEwFeq8dJYeERzkQWN5XS4vmQ7tDWMDNFEZM1C6eQY",
  "key31": "3beYeuJtr5yULRPdjo9YLwAdBjWiBVgbe5uShMRZfaCnfaxjpSZo8bwRyVfsZQ1EZUSMq1fSXfRv6bEukHrJ3vsu",
  "key32": "JhVXXUMd5kuEqWb96BU9JMcp9cCq1sa1LxaX2dffafCfqKeoKSKk835X9zbWsgnSUAw9XvUWQQDCzMY2zPM2en5",
  "key33": "475sL6dMHUMPgkgtYkQGEJ6mzQGSness2vFQZV8ei7PbwPtej4FRc8YdikVCM4VFA7iMDgycpfjxx2z5RtKAMQmW",
  "key34": "3ncHCFA8dN6iBCYiHmrcpRK6VCtxGD4v66dk5yWBzhHh5aNYg2iCLckbyqdXYroHvHLpiY98ArjUyx6tk2cUacrK",
  "key35": "125PUx2DjyKMBXcyjH92D7ZY45vAEGpwR9NJBKKFNZVPaAbzAvUJ5UX9BhkazrWWKW71zef2HkQNkHZ4JiVLGm6z",
  "key36": "BWR4wqjzPNjeqShSDuPXm5FQjEFLYnid9QN1p8d4ya3isZAhhSB1sLeErjQ6t8LofNxvQsknvkkuaVBeYdjudn2"
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
