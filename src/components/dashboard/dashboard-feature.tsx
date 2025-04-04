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
    "2dMF56G6kJ872pK14V9eiMheuwQEmDkqu315xqyAkLhbzm8i7y7cFvWTvRqPiCcE38FLQdcwrpnjwSUA54uR44Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BaYPApdPKvm98uSGRCJGEiwfjtHWZVLfiTgEXYkrgJttXFqZ9uo8xLpYvmMnYwBtQACjaKXv9hci6Fjhzg6Bmc",
  "key1": "4qmr4vgjrp2j9UdWCBGGeHr75UWGrMw2VNcbd9CVSsyxNrqPFnhHfLs59yxztiVVe5SPrjKSewtXX2vyLmmjLJWC",
  "key2": "4FP57tpF2Rv7Dbe2KaKCgJ9dzu7n8mnY4efM3eX3oK74XqsS6C4CEv5QqwW2n2cMiA7Rzmf73UGDMDkDK8tq429G",
  "key3": "cuZFw7UorYfuXUnyVGvgeRBNjAMvoTt3zuzABEvW67xnfmBZLHVA6gysYzkP5Httksacvq54jm5BeA3mkJQChLP",
  "key4": "2gMeMSb4dihEUWarRVkcgQ2pV2dhYDXZwv3dFkkbsSLhjac8QV5jpcdsgMPGhHDp5XZnHZ9bdJ2jwVAyqztju3Cq",
  "key5": "5krZHVjkLdC8znnEsPD7BXeqMcX5QifYQapeWYk2gDtMuidCPevpbfFAtgiWeGkRK6u3mzy23BNXhvv9gyKq6Kni",
  "key6": "4kfUtgpVfb1NixfAPBSbesL4UgUkcRKVy4xBUs4ZA8b565bjQvWGK1NRAU6NtnF3eXrN6A1h672n5FwtPVqh8Nf4",
  "key7": "5PAv7JSYktjY7CDRVcRoFssbsedT8w6MWfVHBg3J5N2F1Pb4nKLbKcyUdeVrdtT4PzSz6z8n79v2XbKXjRjTdxhv",
  "key8": "4mFeLCZe4tvLmy5bS7qJDjkt8csbBoV55oZ8hrhe7Auof4sxDJpuydDfcV7pMaB6rkXK7bTVGgw7RASdSPcjmBr6",
  "key9": "8rrQ3M962BmuNgedKXcRUnbXFxQhiDYvayLL92S6T76L4rCvfkE5z6vvwi2U4Pt7bcDmmseMegz6zXRRxWyHJUB",
  "key10": "56Ajeq2zVZVVSY3KQrmGduzbxcKsFaA8LPKJQYL4qeooSrv7gGJsC92GpVRbfQTDbo6r2LqqZKp2Mub7siVhAVCi",
  "key11": "L5xreVkLRkUvdKWTv8iKLM8TKeC4GPW3z8uMZvQUz5R3WjmNwmrnLizMaSLUZcqT3aGgGq5Dbfx89AHncRyaBTP",
  "key12": "5NZAHNuJEBRfrnKUtBJ6utrtgbwvHJjLfqZAeUjPMbyyJFZCeoucxnrnSyjurpcLi9AE3AbQrQdprtPbTYsffZaJ",
  "key13": "2nwf4aym5oVkMsbMqf58WHYScP7mRCiwZNDHd3u4H1jpqBb4vA782KemY2BRBxNYKGAfeqHL5ngrtUzttbtLoKF1",
  "key14": "67qQhX6DfkQikpmK4dgsPRhk8jYsuUYMWkSHxBfvZmpJzweeEzbXRTJHxs2c77XVsfiNHhrjRvP9mA2m54mbyy3W",
  "key15": "2b7ZLRr7MSzMfnoPYoVyypq9Uh5es7BgpzxukhjqSqWYJkqzP4CfFxWBEuCRwuUikthDpBZDzppr7CMddk1rteFh",
  "key16": "3C3hkJ1JZE46RQpWxpoHxVaHVrU23vXiWh4jg7VRyiZAEbK1bi6jaZuGqDrbgPSZDm3Cegb5drhYzoP3SSkJufLa",
  "key17": "2iLapAAycJnMzRiCFJ7FBU3RBp6ngxmHava4DMZiMLWvdSQ6f2XBaHacVpVnBFD7ekgRFpJ21LUQjpBBfPRE49Rp",
  "key18": "3yZwGj4MAuvWtBPVAqEYNavdRiNKawbjXuLAf7zi4edADBuxD4xyqbiFBteRXZVo3KoHpPFseGn1G5qNo9WKg5uC",
  "key19": "3Cb9QUbjG4tKerY7TSqw4KnX3erNgJ8A626iV1hDz3BiHN6c43BxeicQJqhgd1b4Tpv73rCXj6vYxBUoMk1zGJ47",
  "key20": "ZvUjFAcjNimyW6V7NEuHuBSTCQeHv1SqYLskbWBawJ6Gitn42Pj8WgtCQGzEFynJVwRRkxM9fVLHA3WWd17ZfFf",
  "key21": "5QvwY36ofnePHgmP7KASBhsxJyvuUxv6ChKVD8jLVPmaHawLPsmddJpWCM4uzkrEug1SrLaHR9Lj3RtUFZjFTMoZ",
  "key22": "4qfGUmRjgnsaUCtRAJrDciNBhej1HmE8FZ14tx2tgVwxgUvxSkKapquqtyopuZ35uFwmyoiaCYBFkvGtWM6yr4mK",
  "key23": "5LnVj5sLPBo2BsmPVsALHrpuEq1xbXLTHpJc3x1HHsjrcQtvuapfkUKJ5uKUH3Cw73R4cNwHdJHZrBE6pUeyvWoS",
  "key24": "4KfMFaDz7PxZph6mLeeSwfPoSMehFTcR4ePErGb4Pv5cU8NzN1Yge622Z1tQo6C6oAVyktzP3bkgxmKHntCBP8fM",
  "key25": "64cxWZXxCKsN4cPzeiWhw3TJ8DF4SCWbw8ZdKvBakzNvULjG76kQaZ2Pi5z6AwnCRyTVJeKmyiswupCMbTm8XtAU",
  "key26": "3VZuNRELErGr2jNVQJq7BSVunN2vLeXRKkDnfSv49KRBfUaZyvGMtXVUwgJTFnU6ee7kPvAMSguneaSPgfoNZspc",
  "key27": "4y3N4L9SHu4iwSrMU97oaStcFbNf3aj3fovUiLFYXyazd29rmr7z5qNvom4ZaN8LU4ivUTe7sUbdfpgNPSVq45RT",
  "key28": "5WF6ahBJoJjXFt7v6QEobfLixAkzHX4w1rwaAbHtYPwa6ekLdFZtmcMj3DqfJifkgJyGYjyQGjS4FQ9ahAPa7nfb",
  "key29": "2TAWz4uaQrGBZKkWdgWWmMgJdUVznXqiwA926XmJo6b2KgT74Dge3fPP1Nsk3cMDgbfDv1hNCPAQ8AoAw8TdXJce",
  "key30": "4TewzHGSSLnsCuQVkcX4f94Sv35w1qLnpSYd4QLj2m8vAbwKzNPZRht9AVTaWcL47CnVkku2GzusRzXXxPbHJa4U",
  "key31": "2YConxYYR6WVxjLupYYZiURWgTDYmXjT92NqqbVcTLwTphwRdSHUEpZhbZSs8woUzApgzQ3oB75C2ub7p7Ymmt2M",
  "key32": "2Xg7zspyVKKQf1NcWrcjMy1EkyFf9R42Lwh3XNwRS82949han2U51FEEbBq8Mgp6az3vXseUu6mwS9W8uYZjgcf9",
  "key33": "4EDbm6A3jVks4F1fBPmcP9F2PseQoAcF2jJ6RYiRrwcN2b9GQB8nfdyTpXEpZYwahDCirQf3Gd47gb1j26e8ujB1",
  "key34": "4iDpjyno8HNGWWazpmBZRaHXrndzeAoe8Qog7RFuL65qCLXLF5X9apRmBjsSYBVBdCgZ42JXtgwspbT2WfuhwaG7",
  "key35": "4Ur5VPtoQ9rkWpwnShM1xMcip7tWXBRUWdkEWQihR4Gxvuw1PKanzEHebpT3nmyuwQhB8tjPnFVxZCRFAMPV6h2y",
  "key36": "4jXcWgQFPEG2eYYziE7LYQMgHfqqo61Hesp8q8PN9Frt6tP6WBX1mjVn5P22Gm7WwhmfD8KDdhYsT3LpTh7TtzjX",
  "key37": "474koQk8Wzuk433RN1ggbQX4YgESpFxGAWK1qX5vUUfwodhRAwaEcqWgNyPzyXU6cBEHJEhCKedSddJHRzMEFpqR",
  "key38": "8bxakgtFC5hJCY4D4K9zq5e2rmq9MWqjaMZEBxyP4biZxc5FfCT65yaBn28k7u23W1YmDBp6Ak9hHo2vsydFM3c"
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
