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
    "2RZP6SvMvqcyQCYHJ43mKbwE4HCBLXirGNNHgf5YRTAnqV2k6SxWJpp2o1fuy7cE4ewKQPYWfn3r35LL1fJfHfub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wf7VhRM9YuxpxKsy8pG26Ac3jTUVvm4sTfMoLdrJy6KkNNxGsncRKds1jswcxkK2sJm73VN2sQ672jiofm67qYa",
  "key1": "5bBt8mYGh7y6cP2j81tFiCazFtyQLz5HBGBwoQb1B8WtiaWhUdTr6rd5p1sntu1XGRH24iWUBJG6dFPqA1iFZyQi",
  "key2": "2UnPS7pCHXKctY6VVJ8VdtG66ZFS2m71PVXnw5vf1MPUDjBwEUANhS27M86Y3sGAoj1KgMN8yGPaTQzpNJumSvkS",
  "key3": "C2LbnAG53rYJewmK1t3qtNF34YWy9LVdjqQfjpHQA114dL1U647dXKf6LUmQJcFnVvZs96bThoHtQ4hdc3nvHtE",
  "key4": "25KgwmUSek59xdSTBaPARLD6huFXdXuiAuvf4rdzbnnfyfUJL43aXnVXvoCXnVZkaRCrduwBPPnisiDHZaJ9teUP",
  "key5": "63GtMezcjLbuTEhg12v7SCQLxmFyheqeADiLuagiwbWv6R8Gi9ndKhc9CfChaiqt7R6viF4AwA7U2SFJoyyAY7bn",
  "key6": "TEa4xdgBcHfc3yevXcrX5YBbpnt7ypgnbyDbGZBkHHy5TUjVuxPe7fMcAwPUWxW6VKPeAkmcm8NRXxY2zykyaPT",
  "key7": "47zMgYYqYiHosP49c5NY1qFEfQQDftY36DLryXgPYhuK5ttTSS5GFRKGS7oqXvuFrUXkTTQ7iirn5unoqtLrKhF8",
  "key8": "Pq2kgkvN569nT2GxmmmTYvaMbK1Vz7PDPUDWBX2czT6nHTh8HjXDVBk6qLqTSpEb7iKzQpUSrFwfXFyMXqyEKwb",
  "key9": "3yzcBKgBruH1oE31R8XVceKux3c89BmXeWns8zdvLuJiGS3nN8dvZJWP6m5cPogrDbqFMbNreQJVh2szZhxDALaD",
  "key10": "4D4aLxn6BtCL3RSNc1jCc86kGtnAaVghcTaPJC6Vj1GupSkphpD7hxLCV7jW9g8uVQHq82xvoQzYdsATSL7F5Qjr",
  "key11": "N5aGe1NNpBrozdP3LjzA5ZhQqEfHqUWouAysvzqUbL89YoV1QbzGTtvhYqsCGB5PM47ozhM6SCDmaeS4Mw5zAML",
  "key12": "4UmV8tPww9UuzSkQ74mWAYYt8LgRNay7AXWakNBAqiivpqH5MAH5UgG7JuWyM3YbEfQWXPcGHFhzzw8PEyFeJUNa",
  "key13": "2Qs11cuTEgfb3myoGCjjqpAcTPQHvDb2YjPboHr2E9MtHLtsDgq3uTPAmc1D4LNAYuVBr3ZqnLKCoFpBLuc7r4sN",
  "key14": "4t8SQawz2aGnyJqKDSNHkiGv6cREwqqXpx2YiwggMW1q4ZEiJ1pgbsXUgPYBGBx5pebxUKxMogFN5ca6skCoPhMt",
  "key15": "3wUHhB9bnXg999P2Ka9dX48T9LmXzPdR3qwzLsB6v2Z14Dfxou5KGaUGJPMvfm9tY22X9VEb52Da8ZeLRCAGgp3G",
  "key16": "4ukaozBmb1YJnt48S4qB2XRvVTBQPL7CzXHCkgTBrBSGmJD2XNDDLNhuyL26vHVSAzZb7ckgn4cKQuTmkDmvgU3J",
  "key17": "2KdiB85265PFxAD1S5gYKUU76kCxtgG83P5my6KZ16J7Jt9b2q7GUbg2HLpkhRDUmzAWStt9t7oynoiaeEQxBrpm",
  "key18": "jWmncErERicCrrJuJ3wZfxHFCQKM6bvuUeyEjSCMsTaAT1GdfJVtb8geQKxSFQySMaZ9yu6fLEe4b3QhvfVq2oJ",
  "key19": "2ZQc96qxXK8SRNJ5y81YY67R3NkPTp2pHUFWmZrJEi8amwcBLAtyoAsQqPHhRjDeFB6QPJ8GvXcaeFo7jKxQ5nU5",
  "key20": "5UmrHgLF2NGv5xhDgw5DYWQ1Lrr3PZxLXSMdaN5g2HY3gtLVHEZ5zDe8A3FoiyTd2jX9fzs1672py3X5YWhDcFCn",
  "key21": "nhpJ9yyGKoNgtjzVyyhcM97HN31NkExP8QqcTJvZ3dXSFzpVuq92JnCxf3K5iXWqJLaapZnBUhDoWhi1XEnxHRR",
  "key22": "5si9jEvjatXggNeASGCsb2f7o8z1XukWZcjQ3DoEushcXGzmvMNoVryB4DooDShqW6eUfV3DhJPbs3g9GRJF35dN",
  "key23": "3ymSDyVMv6zkR1xaL6W9NHcEEuYy1Zmj49oW16Kr8cnMjdoxHkWCjq5wE9MWLny7sSQCUr8Ra4QxoWztK7gsCWGk",
  "key24": "3SuDeXyU6ccDvZspvh3cP8XUKsFEdSaFnvLoexYkxJLP5ov5kWMbx4VT2q9CxH1qPtGygaJ5rCP1FMy9rGAxCrmn",
  "key25": "51MUMNfi7qZHxTLFFJNvZYVfDGmhuAqtcgfejAjh3ZmBQr6DK9CJDvjDByQCs6zBHWkvM7Qd4G3tGUtSFij7VWcE",
  "key26": "4oTf52gHRqDnsLHMq9tN2w4KuFM6a7rvcBHXnrpucyqqdofe68rPoCvRnSEoB4HrxiPM5QNR6evzGTKEgkyWxbKr",
  "key27": "HVysEvheBxaNrk4RY8EFRZyfC6ovMWyDiNnDFYMZDcvSJVbBzG3TQhpSjBTfsiDq83eEZAU5AdvCbnEy2LqaAF6",
  "key28": "2nx77pCicKJS2MerGgyMtbWY9Db8z5W9jAppMtw515PZkBAmQHJQ258uDPcXWfiRc8m24NEaXrJf2oqRC4a3SpAK",
  "key29": "4HEduFqvniK56XCEQFpiSmeVC94dBqZSphT4j8b3F8EMaCHzJDpYfP347nzHKWTnk3nuYadNdpwhPx9b3e1yVifi",
  "key30": "ZQEozfHqxX4j848Hys4U8yxjWsrBo2P77Wq1ms9znHN5PmYYvNW9rp4HRxycP61exoqiLnQFKTM164FjAj1F91p",
  "key31": "61h8qzHHwuVyyUYeSZNVaguPNpqG3S5fYCdKmnaknJXFt9YEViZcJFpxLN3SKZT7fViFoptkXoiALyPn5CQGtC8c",
  "key32": "1kkBLSD5sfQUhu2TXxYTMj1uH3etUzsKby1hCnXv311Xx8abRQc15TX8pbnriQbetYzDHQdVgmhzfTBZM2ohN9a",
  "key33": "2TMYJC7i1wEUnLKPrbAt78oUQSr88iXWkq5f6n4w9zAa9cmuv1JV5FCHgHN5jgLjmQu9wUsindKXms3rbgJpsyH",
  "key34": "2UsFBdt2wmHsX3i1N1ddWQbdSx5o9s9pBoShqxid9S1ezzedJznv7DeycHEjfdeTwVtP6eSW1aTYspjufzgsZ1Kq",
  "key35": "2mGeW3bYXswR8sWhsk5aeTwts2MPzn767KK496Bqg6PQwTzvwjrZzKs1GNpxRiTaM5vJzgLLSwRacr5q5GMCXxis",
  "key36": "21TNCVmpGC4ykS4iTj1carrihyp2815dHvxFkNn9cETU1ZDWQbNGm3Jz2bZisGcTuAcQhYEQd7iSaV7b7LEKV1x3",
  "key37": "3GQ93pFHkfCKS663e4VPmwHG3mUacA4jQBL7yh15UtXZufMKTWkWmnjDctPBLWBE8tKV65oomEjf77GaLkZSicZf",
  "key38": "2YcvnGNvaUGP6QCgCjrtdheXHTdTRqJvtRKG3PfDARCisNatJf5QdUT5PJTRhitB2fL6VetEaAxEQtcJRGVoiT86",
  "key39": "2dpbDoK1jsCQH1FLu5Rd7W2qWWk7PH2fVcbi4T7H25qxH19etaCjtEC9gPH8vtzEJiJYUuZuMHewmtL1KodLg4X2",
  "key40": "5aFEqSQ75pZfzNXedetx5ZUQb51ykPKhfotwZpn316MSDahLFqXjuUYKhBpXfFhEgj4NLKVxUcKSUd44Gcu4B3s7",
  "key41": "NLnwembHLfgoQHWiYKQvCuruTvVVq91VN74PeJUzPbtht4rnw8tMwA9CbKzf8e7k4Kt3nPYvru57wEgQzS1kJ4s",
  "key42": "586kQHSkuVDvzrCuwTTfvGaPuEzpg7aJ2aW2yRMMjzDLcXHejiZSVvEwMENvYtBWNgaKWz8i8PkxdgsJoY9DK5fg",
  "key43": "2J1efUAvtpiPJnco1seCPC1J3Jp9APghvoDGsAj5BJzDJHPCYfSr4tkiZ3SkvtE4PwHvm6LtihmtvdtM3jECpaNc",
  "key44": "wyF3xrvamSZuxGZNkV4tm5XHUsDsHZqPvMdBmR8MPrEYEcne3akDxUzKB9wn8n7FXSoWUS1957XPBqjDcK5u1if",
  "key45": "2uy4U7HTip5L2Pvis6gsceHQT4pD9yDQ1WN7Wo4WWLcQWLyeA8PVnYxemP8HwTpiRYttALda6fkowiEVmf9S8B3",
  "key46": "3EJxqD2a1ybxQ5WLtH8YdJQrQjebhfE5i25TUVf2vRh36XrE8yGNd2wRTLLgVMp7RsN6rthF5ByxmR2FoKxqH37H"
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
