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
    "2et5PqJXF8hDDnoEu38HeuyXyAfFze9zQ7JKMHG88VHdPt2HYGNDTsnzRiVVMWYYp1hn4verCA9mqKggBTGe2pUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zj2uZNJr6RcEMYAmPjAn44GqXLN23nkFUEKAbxgH6kVH1VQexeyyt7bReDrncWU5bWufriuf4EPcqdfKiVGQmgL",
  "key1": "5YL3jZz67wjSaLyS2joJ5q5ZEZbZp1BZPjRXVc2Hj7qn9SV1byvbmMCSYxiJNBGrdnc1yoR1VNZUdiFekSK9ppse",
  "key2": "5dG2Eau6yXdMAk1JmHmpSwHeLiqwvkCQgtCn7PQyxoqPtvL2dGqdMpkQKrZGcozNucgXoY5rnX7xmKitB9eMniuz",
  "key3": "3vvGhx9v2bBW4f2iZtn3k4B3QEw3d2BK2nKxUWHPALpCXKrQUB6tvqbC14fbXXviJQ6fYykKGcAcUmGCbz7Ehyr8",
  "key4": "31AdqgvkJwf1kab5mrA1vhEVTiXReJhaiF7j788kdfWpJQ8cEVRgwbPUT47yfHvkh8dQbT3treN64Mm55R8uvhpU",
  "key5": "367k7Cvpf36fsMKZz9QKsW62GY7ADmJHv3NkcVVh3JN9vaF7ESCmGZ4L7r4sE2b7k2AbhsMHNU81Fh8hy53SXgPh",
  "key6": "5vKwKmGG4LXhwSWNqgDpwxywRyCsgheoq34z4fDJESxLqdjjWQzi5Nz7UXzqzYiMLdn1g2nS53xfSpF7gz42Nkd1",
  "key7": "3CiL1WVJ3hGK1Gsk7BXgE3uB8aZ8MtDs9qg31UMjX2cpokMkPeKgMDnPWJDo9nx1TXaxG6GFUJUzmkJzwJewQf9M",
  "key8": "261thzw3sUUTBC1Zqwwe255WDyZG4aXE8KMPBgE8gKEpnWG7YHTkAbPBrHwHKubbwXkUqCi5ufRytvcbCw2opBGR",
  "key9": "2Ci6zgKYvhtfryDCNCRt1FHNbzKJgdWuphZYtuipUKjMMxcqK4Zi8jeDggH2xy1bx3oMSVWHf9AhWZWnA5ddPPAo",
  "key10": "2PLWdvAo2FPkno6zLy8xF52tYVxvwGkxKqY9wAk6K36NU2FPrzVnW11xFtmqhzRotXkaLwEib1zW82Jx8mK8BWLP",
  "key11": "4pfqvCoH2w4saJF3tbpwk7n3yFBFDcWE18DKw41RS9UGtXzixAtND3zeK25ibdxcGvYY7i66G2NWjUsJzeQixqLd",
  "key12": "5YpTNW3BTobeQcsdZLJWHHz8QRCmKVXWaL9C4bzb7mMxwNP6n4t5PFnxTirXFUS4Xe81dALnDxMizmLYraifDHed",
  "key13": "5KzVj33M6e6qquuFvXxv7t6HXAMLtJCcZ9ZNNF3nz3D5eDF95zyvcaYzYvyFfHGpbMnk5hXyxM7bK3brjuDUxgTg",
  "key14": "3yrfKPXu9FKWJjyffCfKH7q5GLiM4QKPcfP4Fn7qoHerpAC48bzCjTcYfCziBkqGTfd6S1Nr2nmZL6uJefYQs39c",
  "key15": "28RtJT8ry7mSo6Fb7uK5UcDx2R7LHbDhhTr9d4ed84WyNM2Gk7mPQsEViuPdMMFH75GGHKZFuY6tERuJBYQFGK8m",
  "key16": "3i8CmpgYFEyLnAjChiHYwJVevbySPv6j5CzDmbLRPWwaxysDiSknD1tLm5i6SfCh9Ygz7aM8AV7WsE6B6jT719Fp",
  "key17": "4UhbPCH4CHBoMUJPCnoA7qExmhxzp45hYpT9RkfsD3TaThkEduXYwHWMvEMwtGKchoPAvruUyHwrquBsfFmPfSJk",
  "key18": "3jU82vUD2NrgwCqnQSripNAcGuSRgD1yT6THWFCHe6w6NA8RCGa29YWnLbQMq61qKncwVuMbzkoYoydsz18mAH7n",
  "key19": "5vcm7XagAQFmaqQeEnzpzHYCuY4EiJT5RPVjyi3bXvjvKs3yqh1SBL5BPnawjkSF5nEt5EAjTFiT4if83hdCm8i2",
  "key20": "3yepAYHjVsfyuyy7Shw96rzC5nvuxgRFdnAg1CZZJAGyFRtHCmYn5VZqXgGBrQ2JYosteNpW5Qi22tBj8Ade2rQK",
  "key21": "5ivNoNYyEpVynGT4xg1xTogdy2R1ZsvG3aFNLnYK1DLLdfty6Qx6Sc57owroY5DX2463hJZMdYwpgv5PRHK5CRSr",
  "key22": "WqQHzT96crx3LseqBfyK5ZqSoSB2X2brpzPiyTvSEJVPwbZu3zJYkT3Ew7QKUezExTEScc1yRStN9wWCoSs8J5e",
  "key23": "3G9sUkpgogmNbbK4e3urj2Yb56Yif6Eh49SJ91oemNE2WAy2QPGFjWoZmp7RSpuELUgRim2ruaWwPnN3vE7Z4FY3",
  "key24": "62UhCtsEkZKRypMwCkRSCYxHojztQ7k4yL8xnoRUHvin4x3A1316dnwHMDYuCijRwePJefz4Ws3rA9EZyv4kqghb",
  "key25": "4pthdc9kmG51uQmQX4tonWL6FeUyfqCmvEDumNq3KUkNGSB95quMsaVLJqgBot1UKkgewXUB8C9zE7QDCz4Lkfbg",
  "key26": "3QWERF2gvU3teRsETsj34hdUqcgSoADLwUWGZ6n6hVvQRx6QAFkcNG2m1bnfdYHHHJDzpCqMpruHzqhgboLiENQq",
  "key27": "4V4Re6jECKkhvmzxqsdHkRZKmKmChgiQpoejEFaknBkVofrCAVFqca798d7C2VEwiP7xaJPTSrjG2Er2kNoqsX6N",
  "key28": "2MDi79jbKSHEUduEk3seatrvB4bvbo2LHogHAaPVJjQemsE4JSKYq4Q15Q44ncehtGQ76hjebVtNFY1UFrNtLJRd"
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
