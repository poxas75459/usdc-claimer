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
    "2LVrp1iyEoVWxJhz9AhtVoF4zQq85axK2R6hDaEPcWLAp3HgrhxRpvd9es8SBQpev1Bx41M9LFAxfG5AgNqUiQX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hTy6bdBdX7qWALbVxf2XkXAjhpgNEk8BFXSymfYi3vZmwhJYybYVHkXBdE1QgV9Be3Z7Vza4XkSXGtyMN68UtwP",
  "key1": "4iuZ7kNhLUWAXhHo1hBKueFVCV8qBHpmhefmFyDdzykNxURtzJe49zRnsAjsocpZ8G7Fg6poLGiEhm2joVJ78GX2",
  "key2": "vQTC1NXySwr6F2zQDS9kJ99mEX8BUyz5YSWFMWGPToQjmNLZuJu6N86y3CrDJ5cXkf96GkksxVicBVQ7Y7NaEey",
  "key3": "5dYks2WDuZanuqfqYjqhWHXBLxssVeCStyWFnyHn6rZrTDdrk6JyXmwaJjfwv8Nuvi2woHWrJq1zFowjGDX4PDjj",
  "key4": "Syn9nTcHk3u4SrbnsNYkmL7ekHSGsdq5PJ85w3y2mj72jMPCwHtqbAnj1v7btzenpNNEDj2uTu7Pxex2rE1AdNY",
  "key5": "2bu4GwyPafK5HcpLQZDbJgbCWjsGbLNgGeG7RKp6Pp42mFKWvJYReZctf2gpns3GFmHRXVyDuWutsqDjYSt62sbd",
  "key6": "2BmECvfBLeeubBuwtZPX4gBDdrfPdxBfC5cFgbSYoyWuXkK5dpgnacFywXH3TiD9aQzpMRC1nenxQ4a24xf3GDTw",
  "key7": "4BNXyQUpHdjF9zJ5rqXyN3CLcYraju9iR34ArCeq8dDx5mpA6Z16GdNa6i7dBVPYFxhHFVnNNMbiahSWE7zrtK9n",
  "key8": "2QqqA4vC9snKwXKaKfUDyMiVWbmtb3WBznK2eirRGgSVjSqY6eV37E3o7FdbWnm3aG6SExXx1Mrq2sry99fzbAuw",
  "key9": "3rvDEybgAgNjHFaRqDgzKzy78JXHWFz2CrFSxRHBCUNu4kmB3SjYVXjyVUpYGpyj255WMPK6ks6sHfpCeVRNQMp7",
  "key10": "4XeqNXA6GvLjLhkZEKH3a1HwU6bqYUQH2RvAsR99Hnjt34zT9vrWcYFbMwmvbvRaCFZttSbpdNaeuKcyDP8TBZ8V",
  "key11": "3WtbyDWtshdmbM16Qvu6yiAm8GQKq1bmYen65zBYaRXML14LLeLHRcBxgB37rLJ4rAyMjdpEdwonqS8o6xxCSARR",
  "key12": "nkHxPd582GKHDmAGfAe3NxJwGPohu722sfvBtGvbMJLKvYpLLk7rUPAsbFxdswYCAH5twejjLUGPoLcbujRoYig",
  "key13": "5SPcjpmKgwsgPqX9jj93SkqjW8j2ugh51kUFeTzmDiHM2GKiJtSXDyMLYf3ojW3JjoKyJJqaQTTD4DTPziPLiUEv",
  "key14": "4SC8KdUCWgh75ujL7MZUzyutZMBJ3hq8vW482RBcbCzhMQVpzahQtN3VG5k3G8QPH2WjgrP6onpp9Ny8bmCjyRKE",
  "key15": "5hEHZyXAV1Nh4afnsXp3ArySkhap6xaEz7pTAWN4ZKL3vtNvhF5QTzvYffgtQX9rLYyJVJgEkx92WzWVz9mLVQq1",
  "key16": "2LbxVTNi5nzqmgVWdgkhaEYGFJ6MDDE8iP8SyHbicL1QeaQnoAiTEGsKXMnHTx7TS88Ce2LegY2XWehzxq7zhMoW",
  "key17": "5F1vLBwjWuRZboZcY91hX5rZyiREuk6rJn1pReLxHGKx8cpp986XT7uUtoPuTYZHQXP9bWpXRw12VgtbiiQoZoUF",
  "key18": "na3yFkZPJtqTFpkiGozcw5UGViA23i69yBLVGd4rtDz254b39RRZTfbornAxDdnJRoQP3PUBEXvkABCECiVxLsi",
  "key19": "SpoJXE8j473mGnLspT4TyiZpSWJYjXMaRaEDPi2sRfht9GawKmcZ13KSKr2RKhRMnour4Q5UHbCHoTpeS4HkVTJ",
  "key20": "3Ccsa7b1RjLUfxQREvhUFM9rZfDZWjWHhKuYJC7EWgNsejgWUKuQok9DhQzX9G18eHunTuLvUyQ4QkHNSwaNpLAZ",
  "key21": "4qvmAfiEcN2a2f7tH1RNv85nAjuHTFhaaj3BgNcQyQiBUkZTUVUaanFDBKQzUrkVM9XorY7UhGLWzC62Dm8nsh2h",
  "key22": "2dzSUVwnmN3hdxdxn63hqTQXApjvdxRWEgk4maa2JYjyCk8oH275sQWwp1qi9zws687sdJa3iYkwkVSTFEYyJ1kk",
  "key23": "4DJVdPSXjBkQbRPFqgQDTPxG6RjJk8kxePwQLhXinBsMtFRKnDJsBBC3Zw1V8qjogGs4iivEXtpq4NXsPQeHE8Cv",
  "key24": "rs7Gao4fGJ2SNViF21tAaHF71SsgmQgAC1ofmT4DLBjSJATS3KQFLxTYoqYJHXSYFT2xKkXA99nqQR4e13uNqA2",
  "key25": "2WAGrYHXqAwpTDnajqZ7uSXGQ7NSj2sFDbYbJcnezsWKXMAaGC5g24HQEbv7xqEYntReCq4RYDsZ3QppRZdXV5F9",
  "key26": "5ftY7oiNtcJanwyLuF5ioq1VDB5LHVi5L5Zx4ErrpjZ7vc9mQDtcqg37ppW1NX8pVFY5XyyDHKMqKucUvzdcorYa",
  "key27": "i4oHqtDy18XAXU3iA2s85CWBcxvEFvrrpcr7s8JGnjajX7voBYnMi35SzziDkVSSd8VDNWab5zRmrTEga4ikYAE",
  "key28": "2RWbZT6hzuUndNm4T8gUKqTzLuQADjRcfUPHfsEEz9PUyXrxAeDP7NPEsXXCthMZWX5vGGevaX18HiaEgB5ejDZJ",
  "key29": "2UKYNTPqqvrUvSUHgZ8CqyhbCjsjirixfdqzKvDeNC2iZZUiSW8hi2mYTKpUo5GgPXzs2LwjTUe4Vx5msefsSQ2Z",
  "key30": "56bMXzM2AWEnE7vyLxHKJCywTke8ykFYH3m7cFbD3Sm5x8fQ2bhAdY4kQ8byvsheYn7nsrup4L7TgcL7Pe3hqhcM",
  "key31": "osjbVpLDCxjLecbZRfwXx11tDtLRtSHuFP51H68GYXHuyafipKKiTX8WppP11bxNK4cHeaRXjucd91ZUg2UFVGr",
  "key32": "p7mDb6aaDPEddC5GX9dAhgLx2JyFRrbh4pFWrdx6xmAQ84Xb8YC13qpZRnRL6XMVSiCEfwrEmKFys3cxb5rDbCq",
  "key33": "544TLvDgmNFuRoBkdirSr27heYShy6ULjbiCHXiH3CDKLccf6k6nVqwSG8odh2JPc5k8tqmS8etyfujrZEr6ASJc",
  "key34": "2t7NmpFfLTjSxJ2co2jSG85Y7kvEnqQxu7qrzRzKCc7GsH46GSNUwV9ubXYaawqfjkbBDk2ygbDyFTFCjis1Fv3d",
  "key35": "2Jnd9Xr4okdjLw7L17GNodTxii8GFLCFJfni41pXvXqginffRCZEnDrZsiMrM2qgoQP8HTB2hnfqVuib9rdtWNUD",
  "key36": "hEkJ1Hmk3BwYGSHcqTCxiEzts75NiXd64hqixzQ97jogEjhngVrkLj7iRwF7htmbjjMymfqsDXurxTxDVWiT5n3",
  "key37": "2yeBwvQnuF89VhuyZ2DRLqjaCnDBVjA8JPtda3xUG64ULRC5cojxN8GE69iEKNj23obNkLEYiAsByXHn66ec9AH9",
  "key38": "KN4UeHRYvByawWwADZyTuXtJdmvp4qn4vutXQW2FZS4zxfDp3pFNThuZCEKuSApXgZMg2DZRXeT4wcSZ8Mk6kx7"
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
