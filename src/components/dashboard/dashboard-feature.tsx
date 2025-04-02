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
    "5568E4xW9BRQMZ9eaHvFczMWB76rG9jmiwfzbMPT3R2rkeMy5dPUntd86KHXFN3Lg5DKHCbRiMXYJ5BLLuQK8ENU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYERbGpG4v3YP3etHWV32TaQ38khMdCrDkJz9o8PhEq9FdJNnQg4UVXgRBcxub7PcdY2rqhQsWcdRcRRptS9YfP",
  "key1": "2Q6reT7636seDgdtKahk5KiJemvyjQzF7YQcPmwBBUhdfegodiiRkA1E74gPohbGjUPH2izajtfupdN4AyCzEFc4",
  "key2": "2gfMjGJvVK32DtsPsh5jAR3nnfeGAQ3WR4fYVBXYSbGagTYyeVCcpomzDDd6so7ucc8KUsadXCiim72gDfrQzR22",
  "key3": "515aH8xrFj1A8FMgiCpemPCvTy356JTEjWoqQpCbVjR9nVR4TFhJcmQuqz6wiPeUmXr9YHTavWQDdSPvWkyCCQ3n",
  "key4": "yB7n4CNmETyZzyU7KfjZezynmz2mZhTNzDPZR2cDZtksT7KoQb7X7cRBGVob8kWHWd4vXyUTRUPUkj2zTbPTBzN",
  "key5": "5wsKE4RKskTT693sAvews4apECK86343ePVH8JGENxsJa41eRuaY7wyXKkiTNVMVyHCK5tBd5sBLBBpiSTbJAEu1",
  "key6": "34fTc1cWNxAEbPf9RLTkqWwWSzQnBj6wS9VaYFgLtKBMTdnNkor6dJGLDXaUVT2hxKqhNsT2gqUPts3C3oaGSeVL",
  "key7": "5BZzusEbRTVBFGzQA9ijVUDDmNDLhjqy2yoGknMPKscnXCWWQWLg9Cwp5rpuMHBgam6F4dPYwxsHHKKyg4GwdN9r",
  "key8": "4ewCg2grK1Jiyvnnjjhxmb87K79DKp7feQNo5QCnLqK5B1UG6RiXn5oEuuqYenPSSH4AU6zwKpfU1MaLT9uYUN2H",
  "key9": "4e5A2a7ULZgGRtKU1VTXjR5FfR4GM1Xjj5kxDGnW9YmLGiz9Pzqp2FpZ7CT2RtKSwSN7KsUn7iEM8gYPrScoL8KY",
  "key10": "3G1krUgZRKifaJQcP9j5RPfJBr66C8czGWAmjcHwdkGa6UCenJbhaDkZYemCW4Y77QV376Mw7ikq2wXgGBnuDyRk",
  "key11": "4Z8M6pKoa2h3z8QUdPgL7pBkXVdEjP6ojoYN3HvspfTKdjyBNzPtAHSniwRwuQ81cfRHbk4kES6caosTnbEdgCpP",
  "key12": "2h9USA1MRKPnh4h8ZjZ6QrAFkD7nwFRv5yNLofjSSP6yqJtDaSyUZzJMNfMGsfjNSjxuAMd5JiGafDTqEMQDB8LE",
  "key13": "5arXLodKijAzGGPPW1KqJ23u1AUCTVM19fXXavp8t7XFqyhGJAjCJeAYFuVPk1jeyEDqqf2j4AutsBjTg36MySPG",
  "key14": "5dofJn7h9e4kYQoMxxezxWkb89nQMpyKGSnBYrUSwPnvkofuBCMyorA8DjGv5Rny1AkSShsSTn4tLgx5dgLBQKSj",
  "key15": "4TB4gR6H27t3jTj8RTCXBCs5apE4a1DZBsVnorwH6eLPPi3cPDZPtggx9KEns5qAUcbWmqeUeaUUhmhxyaQYLEJi",
  "key16": "41d3hT7Q3QHdJ4JqoyXcEq8vSN8BziN93FLRhDji6bBNJhGRcHQLUfX2aEUZymFyRgrqLdiWXAqPYmrrLK45D9um",
  "key17": "2cQgiJuxZ4gH3ZmN5rfoM7c6WuHu89M5nximkXZofx3omhz54RGUHJV9mdp8Fm9VzGa1QpDAzfybPGz6Lq33Xc96",
  "key18": "2MffYkfxeqM2UKHRLtfQJAwaHnf41pdZMUywzzggiPR3Xm34pSybByKJ1sexccnGSwrP2jsGQTJpDuqZFAWN72ap",
  "key19": "M442Wpk34mcDEa1LWYVeNLmVLE1kjyV1SHarJY8v7iY2WcacYuxScBN6dErfxQSPj8uoCLhchWrAQ9ZvLFUGNSc",
  "key20": "5h9wc3Cbo3cYbTfruPSoiGU1uN8WfhgTtJ9ra8wWEmBCwwhDXH1LkX19UJZb1VwNNe7N3JFKtdqQ9brKp8BCJ4Hn",
  "key21": "2JZ3ApLWq1GRLAsw8w5JmKUKQKAFi4AjUzyk8UGxzJxfqGDRFJvfkSPHUyHGAmuULCZXv4hUuAFX83jS35zGgXgi",
  "key22": "2SkY3f6CBz6cDGAXgbz51ACzDA3fUaVNu7zz1QKikvdHXseBxCEtBDRG78H1TLF5Ff6n4n4KqPxUug4ApC1jYhH6",
  "key23": "5faMLxLev6xcPNxwLbaAKWXP25bETDdBnGiBeknNDDit33wfHkU25VRoKGX7DMsHqtDbyBMJ81dvVKMdb4hhX77Y",
  "key24": "31TWRqWkgQa9HF7dFngpcnnNsmvsQNaNcGaB5Y3eNDc6yMft7yEfTiUmBCD9iStK9RnR9ejAsxUbpuxPcPZLzmQR",
  "key25": "2HuYeWy2eiVKQVHSR49eAzLyFcPXuC4a8RjasFT5hhNFsNQPAjjeV4vGEYPHeD9GLBXHf9YYjgu91jABPvA1uWf3",
  "key26": "ivdtjXb8ZkZ48zeFYFnETzz9xvbzPrb7KNNtwQFUk7WHJNwfGAcc5ZqisTEs2tE3W4cRPbxSfnYP8b7Kp4ebtcH",
  "key27": "55hckuyAoSFzgJ7BKcXUh9VuddzqQUVzg4Er2ZgQn7yj6DRz19MXjdFZyryxFfVFa3bWk753ytCAuzEaXVW5ULwK",
  "key28": "5zKFjzu8XM5e3HXhJDJUDF2KnzW3q6pF5mRFiirdS1nKMxKZjA19o6djKEAfhg9bbwUQzZyJ5oaSycuNMBtsvQms",
  "key29": "2oUmh7J9wwsbFnpLGkFSMyWc54MsEoBEbQp7J21ssXDnUpaoN1gYDWNGDU16SoQovshe3DzF9rJaCpk4hktzpVtK",
  "key30": "5dfgXmESBaWfG76Eeku1Ez1nqs5n6TG84isfroUB8k2nE75gQBWB3LFJjNHcgQgiAxW74ud7pMHSnf9inpEQivxy",
  "key31": "5Z3em4XfiA8Ys5ncGRbNMXD6LCz2G5wydP6mvyTNwgsc6gmKcXeGWveaN4X3V6MQnwbhh9V9pAtR3wGyijVtU3L7",
  "key32": "21krwMDj4wSmWdL3voyMBLhmZUP5viXC8WuE2kJ5oKX1dEGH3h2YuVsMtK2F7vrUfYy8cUGr3d5gFNypX2PGR71X",
  "key33": "57khDF1M7t9eftmBTPjSkQg1hVo2q2dr6XD36zUYx4yh54qzqyL5HC8rHxfWcDxv8qz9WZwgEsw1tVvAx6ECdPiP",
  "key34": "56f2WvHivWmrdpj27mZ6eMN3Zvw4Trskr6k3brv93ZS8MYsExHqbaKKr18dM9frSghTa2yhDApsHSd6ZSdJvD8Cr",
  "key35": "3cZzZ9UT5X3SXpq7H8nw3Zhta9YMytsrCManGPVM7SzbUbn3eDS8WWM6NQZRk6gd19Q3VU9BLEK1UjqM9LxcZQ2Q",
  "key36": "5TTEytCEghRsEsaPFJCaqVFhKmwAukYEBV9AN8eHT3o2QPEMsmVotj1ChkPtPLodTWBQ2y74kw928PkMwRmz1gVi",
  "key37": "uKezW3MZHoMHqnRevZVfDxy69v1fzP4R62k6Xq34F3VzwuDDtLbCY96E8PCo9VjqG4EYycN2djD79LnwBEEsZWr",
  "key38": "3VwxHzwWjyq4mNohsNv7tHSCxzAavbCVsyxPRwWe9wcNfiwDjMGtTUsQZGRw3Doz54f79UoZDJqgxyLDTkG6VgB8",
  "key39": "P8VTjWy4Q3jRK48NWUybwfTZUXhPLDtR9mXmod2GdaaRqpXApU2gFgcaFoK6Dtt8mWVaAsJ2oUZUzkdxQEuAaLq",
  "key40": "2v7heV5ykCPB3XjiNf2TtVv93wfdiposv3x1JsmQqZu9YJKDwy9zaAoSaqByDxbUJdJ1rRKoaMBatAWiQ5Xg1fUY",
  "key41": "2NpyH1F7TufTcJgJdKjNMcDeDXgv5wDgY3LDhh4Vs9hvQNF4Fh1rEQQhLNnJrgGKZS35JUNSvyFpT9hR1F2j5i6S",
  "key42": "4DomQ7YBQptJmY7VV9menKeyxn15cmkbEqynnCLgq7DfsbDPFMg1BgVipCp66QRB56HZxQf1S8dGwGvoF1ZdMxDs",
  "key43": "4pncXvEAUwoK7cNkFgX2gQqaBZLh3iPSgYvTj2BjWwnqGrXwVC3Hnw5WeshHDF4aSNLjEnfs7rJ9fTHnCWQHKrAY",
  "key44": "2H84VSGyPvsXTKLBdYAeToWRQoupaPsE2vwdBUKiLwTN9ccPtojDwL6aQEMzHuBgt5mfTkYWELNus2nCby1QfdRF",
  "key45": "dNrUR1w7YKji5EPyCtgSueGpuAkDMjYiUpjxV4ZdpurvgVatukUaohgeHtfWtYRwAWJ2fVxGBTh3U7uBVoJ3N4o"
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
