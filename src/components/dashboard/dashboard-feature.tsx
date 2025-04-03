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
    "2wez7LDF4VtY8n3BQNtWtEhmX24RJ7vv574r82yCSyE2JnJNn9VBkzCExKrjbg5nAYcU1GP7yEyCFqhVYLvBf9DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4PCASjrKuUd8JYjNqHcKsbccZRVuahMvKiXkBtth1BsthHw8UTZLFcRPXnhFCQuLiKh4H8XXLDjqKKzgj6Ns55",
  "key1": "2gahKEUtpyDp8usLvsFjH5kfPcBD66SZamF1eTQLqVBAY24h4pYxVZ6L4i6d78v8oVTufRQyxxTu8qLLWAUjb1Cx",
  "key2": "5P3ZxsseETDAwM7hYgcTCpEzJmM5FEUi8BAbw5Gpkvjmj74iSAUJYANqnSNT2wDGFj2pmsrA6sUcVEPLruJLSxsh",
  "key3": "GwFJWfWTBD1UK5DEAMfAmfkmaBs8L7GdEzf85J6NoFJhKnbfBDFkagGE3dSsn6LgPoVRkYZjGzJJ3MEkZ14kbDR",
  "key4": "umXYHXyT7wtWv4VPhLUkLnLjQuCZ7y9ZNmF1PbVQFQb8eoGDbXc6ZFScwsEZiHSdt3CGrsKvQAgNbwsp1YMmdvp",
  "key5": "3d3JzUvh2kgPUbPGzM3SWWAV1iNwWzoKbaeUyoN7QK8XdYMYR4qkbvRrzvr5cTgi4BcBh5MyrYqbK6wLLX6E56fN",
  "key6": "5gXmE5Af4eRvC7779gymdvuxJmDAL63bDFBjNwwxDzNypMmVp8HT4hhGdK5zePdG4buw1ep44DAwFMffnZobPmS2",
  "key7": "2FYfeeTciDp1UXeGtwn76jSu73vW8bahMm8qg6zs5pQt1ni29NmjRuR3nJoQUkueQ3nZmjjcj7RcBCQ4Gyo6o5h6",
  "key8": "P4KtwRPpMSw83nED6zBCqLnnsWKrZ8A5tjNyNnjbfWMwZMuoX5ULL9gxqY2VAgyEUyjDyaaB2jhkQFHpTr3LFjQ",
  "key9": "prbA2FZsoNfzPpndbw6smur6dRchJuFgfdyVnf5pi9EdZkh4ZrdWu1CdXT1S1jGAJYYH2xkaRGa1KSjkBWaP1tY",
  "key10": "29EGQQaKVuPrFzmpfFj9XZntabHytp5gR4Dku6rCYu4jzmQ5BvUVHMYmTiy87Egxh7obGgDbkTDBq4kBmH817G5y",
  "key11": "5ZYWmDWAKD3VfihXoagz6Kqw3g12iwAXtCGH8VExf1kBQkRZwP6pevyYHaY36dL8zMSSAnHvEgicBHUVaSSTWbe8",
  "key12": "4v555So4tuxaRd3Amc2Bp74XbMsDCsYvmq7fS8AohKB6Rn4pWx4VFF9sTETUUnFyJw5EDKcfqSBgNW8uMQAd4ia8",
  "key13": "3w4UwQ8mZxyQbb96n56rW5hGmqPB7u7WNVxvP7mmQKnySbCxtAduFBDTbQ5gXJH1KWKxyMB2T8oA3Wh9tX4jyFv2",
  "key14": "3noRt1XWzrLngaVvMBEHuyTbGMx22eH1Wn4c8XLWtyCYbpHhcyw7sb9UCNLWEEapyNQpxoofZntHLABCFYPHjt1D",
  "key15": "5JcStZAHcpXLj9BG29oin2iv1afaHRyyJfsei13opVU83g73DpwNdxsTkMZAdTCVzZBkqX2dERRYqKozhe4vdQ1j",
  "key16": "Z9uLUuk2E2SaTpXTc5fYjAgKuQScxXMKBQQofBvb8nAuR1c13ehtS6NPQfEkDWpZGhmro4FPjJa7tuYThytvS2v",
  "key17": "56a4mQCnWcF2AXq7wAzDFCa32tYT7PJrSR8EgRBJonxaLU5v2DK75ZVB4VgfNjEYYz3oq2Wsp9vt6vrozNpCCfuL",
  "key18": "3GJ24FZgtLio5a59fqKtiZn5wQNWvjHzoNG2HEnrWzzCw5kpg9UiPtWSyKPx22wNWR67PvGwDhvsKne7nZDAB7S1",
  "key19": "vU6ccHmDdu6fYaywvJkhvwtqB6w25GCFjvNr9SSq4JxaKyjZ1qa2ug61Dtn2Ymjr3o2ChHfPag3PFmnviVAXhwD",
  "key20": "5LVguTLprcrEi3SoQ6Pk2LJhaFTE8FZht43fQSi8MFZDCvhWUwYA9Nts1b2MH3Q3Ezj8XmyU5fXWBvn8o2hq6okm",
  "key21": "59rmokitb2Uq824p7SKwX6KzgVR4hWTNEiRz4mR2kFsXzRG68MwKrEM4xotGyb1if6YVmKwdS2vQihj3wdpN8Rbv",
  "key22": "4DDbw6ga6UH2P7UtwS619oaB7TMYd1ySKpprtQr6LxC8me4F7pboDSn7E9Ch3UHEgk8RBzsgwf1uHdTSG1TMnkgs",
  "key23": "4DxAzEccR8Yr5n1ePxbEcGaTVpMrwaUgpAdgJivhPja7quadM2CwkUYcQGFeqU7TdPrkBx6m752dZhw3AXUTsAsR",
  "key24": "3a4K9nhXvB73TvUoRyp3FQ84XdyXPhmbPZBVPsjeHZ49Nm1jN8PrVW3s4Lyj4hLyHqoWGC7TTh5QLndjF5ui4Jxg",
  "key25": "2PZvoRhmow92p7MGRdj2fp9a4swXHmrCZfnGSWykqjm3vL9PFANEW7kax6wXRorAdaNx1wrYMBBYEweYikr5Z27s",
  "key26": "39WMHmJAuXf6cztRHvBPVquMVLJio3KNTMWv4kaikrn17E4i8RpadkCdyz8drkfmmPDaiF6KWyf3d9AprZdAkVAH",
  "key27": "uaQooowUBmNs4idB3XYvrsZCc1ZNLpMx9nf7xjt3D4YpbLgp3VTq4JnwV6hXxfbexkACk5oB5kRCryvG6AkGiND",
  "key28": "2smLU9GSCKAjFmnVfrwtM5xwYvLMRyM7McufemMk7DxuKX64S5uUn9wGF2ES6vaEov6Pg7Xob9PPNaoqhAS86yYV",
  "key29": "4hNoZd4Nqg7azoQzQD2zCSgbwAkFpfxYNnULh6cD9Kb7nB1PmgcUMkimdAfVRe5V5u2ocf61MrtqSJNjR7ZSD28y",
  "key30": "3hwNa23SoajMWwp4G3zhz2emzFnnWpZxaizrHnj1W9ELmL7sqTS8UnMUCkZJ2GpwUyrN4JXPjhRF2MByUKNFEVfF",
  "key31": "357szxUaqWuJdN2mRGqXF321MvjNXy6jD1QUhoocEPFwHhicBU6zgiHfn5gaVwEerE8z7BkSomnJr2fAxmChsBkB",
  "key32": "29cVJ43UenbuPwfq3VG5aHeR23xgxFpNsQ1hjV6fCdyW9yhgsHMc2FFTtRSoEnZgwFDJpodciVTkprLXSFL8RFtH",
  "key33": "mjatc5woxD2kPqkyjzsaiF72wUnxckHcFykF3ZwkodsWt55T12oBTEVE1nYnNJVo7sYXuitShUZ9sb1CQHVrLeY",
  "key34": "4PL7M1M3spq3ExtdmCzKUrdxUXwBsxpcA1tabSsDqSiWGv3FsJLRBC48J4mNsRmz6ff37D85GneZr5TzQEwj4dYK"
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
