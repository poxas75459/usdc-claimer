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
    "BDDeeLv1ikFUAnRDYY87N2d6Z269YmgGqnRn5YuFkrzqobdjHsLNRL5rDmxdrKz7UvDS3QgGdctrJMakj98Xm5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kD9X3o4Q1wobDUFL5UdM1QfvYAAUqEdu22KdZmPc788TnE76xfTn8bYMWaPnVQDLEokHBefYV7h2CvoefkWMdS5",
  "key1": "5EBxzHfFMmq1FsMrEJfHMzebGtmho3MF8oQAJ6q1uHZBZmMFz2VswXxjnQDtWZeqTkLCdF6W6tGoZeGTcpVvCvxi",
  "key2": "2bh7V3hFUdVx19WGRMukdEHbuyenA1mucnNVR8KksbM19wzQ6PXrQPJ2D3LRobsqvEugUa14y2R5YCXbJaamMRPc",
  "key3": "CPJYvEpkCQwBFMPgWdTscyWXqGXQQVeGai8r8b4bvJWVQoDA7guNDvA5PaRivmnutfQhQtykSKXVGT4V2nQ6wKj",
  "key4": "4F29ragCmifXi7XNdLm3oaaFtsCmbBJkKhx3HfC3UtrSBZiuKyBqSqDDPpC5E2az44PhizVA2dMFeeiBzJNzwBPc",
  "key5": "43GCf2AKu9j5Aum8HKdxPx8SrT32xVLCHS9TvchuhZaunGomdLGbBU18xuegWddRwPurXfWbwipBWsDxDqZPsvsd",
  "key6": "3Keh6z4WF9pJJ5BT5GopgrZZvKxgEgZ3PaUSKjvKffm83ySZgU3KNsVoM9vWXRhGoLGH6cTPAra1W9qd3sg2YUad",
  "key7": "4fUfJ15A94hbv6JR4Cb92d3Pn7mkKeVZfXKgxzC4pFyx87CBP32J9wDk9SN3Qb9EGFtQnSRWfJc11WimPHe1Hrnw",
  "key8": "2e1zriQkwBopA2NMLqyVah7WL2LKTshxx2QoSWjNKx54fbyyr43CjQrHv19D5b8RgiiZ9J6w2yAeYybbJ236XaLP",
  "key9": "eDr38WYXa5tjcWPNoRaZ9FV9A2JGX1ZAGy5uYRNjTdpafyQVPtQ1FRcmuajYEgMwkyiyZ2s6bgJn9MUn2LzN4Aw",
  "key10": "3s8ZLaMUL9rLbmWiF93dddPtUG2pH5Jeguv2q75AnBaGXWnEbeDxa3aWTBHdF2Cgt6txUimLPeHnxmS7vvwP8JCc",
  "key11": "WTe2ZBc7GJtvV4fPzkmK3NvtUfkcNqMcsJTCaG92bTb3sNs6U7X9HSgjqY53wcw3WkctH1EmcaX1KoEW2p93MwM",
  "key12": "KfECrs7PyVbfupwaAnBf9fDbuTtH3V8LGBrVCNDwhpx5kAUiNtqRHdgu6AykkMTsNCjHRpPVr1XXGacsY9j7Lhr",
  "key13": "4RyCqitRFbHKZfK18G9f9Dye87vRW9hUbNCLvUhL9k3ZkidGUPAd5mWXrNNCV8aeXTk4aKFFNh9PKa1FTaBgi6yi",
  "key14": "2j8zA4H69YezPX3fbaHYdPB1uV6TYbCQHkGoMXYA3yhjr3zHfZM52RCYKTbuUA6fGiwdmbUkyWM7iR1Zb1Hk6EdY",
  "key15": "5vfSxy7XE4xbkXR3YWymmvt4u9xWHbcSTcnKVTgdQ41F85npiEh3xg6MaeXuMEtvWvCakSgd4ArKJoBbF2Br8sBR",
  "key16": "51zRRL1dqJ7aWqu1DH5v1e6p2tZWqAuNXayqzk3QCuCDQuACKEpHP1BccyQtE6DHK6W3jCr1niTv2WyFM1ziNh4a",
  "key17": "5LoLUb5apoiifQuKyuHkc29Pqcu5ce1pk6zMK2rsRJBQDQcg1C2udYLPB61oKCwu1WcQ2SmSU9wiy4vKp1g5E9Lo",
  "key18": "wuDB88JnPG3U4manxGM3JfR7MPujYte5oyh9QUaJuqmB6jmihqxPTL5fywWMSviF6HY8UuPX6TxXq9T9vMTJyuv",
  "key19": "43Zco6Hwys4PBFWZnWueQk6SkoC7frK2UHNv7w1jCidZbH1eoMpehK7jN11bh3yvJpysmuECpg7CF66zNrUDfFk4",
  "key20": "2HQXB5n7a2ZRy5K7ASBvQQtJX2vmWmpbmzLwY9vCyRpN6twR733JKAj5pMzCekPsZKs4V8c23HX2RZjAqvVzqt4Y",
  "key21": "5F65TUJQffrVsAyCuMKtPDzN9ujtHM6iknbHcH3w2cZJQsurfZEk2twwaqEaa6Jzb1de75rjweifq6VARduSpe6K",
  "key22": "3URB9iHgPuJxoQWus88YCeikTxqBQVyzKYDYDU6wnFH711FBwYJQStMJsEAeSETtx2tF9Z2JVP2YLXiCtUQxYMni",
  "key23": "3zVSYgsEc43rugfNv7RkQRcftkSCV8WyutPA8JNycip5VCpB8SeULvZdecLgdVR8vjahEQGcqzcTLAiJ3omo1HG8",
  "key24": "2XTT1UdxpEcMKuEVy9LXFBcJsc3LVPSWrFHRVtSEA3mySKHeANFjuxMVM2XuGJfYqSUCvAFt1ETpbTUQj6SrSZts",
  "key25": "34XMBzUQRQQz3LxC2gjecKJKDyCtNLqFbgLsRpZ16uWdUWvGBovbWLuj7kMSEj84gKVNTNBFE3RVTDe8wTret8oG",
  "key26": "289yyp5NsbeuECrYcXJK1Xfkb2M5zgmF4YTdTQDJvWSxb57oetwVGMAB6uYRRt3HjNxdJqMN4FeNKfgweboprsxK",
  "key27": "54hHez8tgxpn3zfnL3C1DDiAGTXZTorjzdAKQvfhwEeZgPmS7fuzBWRYLo5Ynr7pDGS77tek4uyveyVuZXa3UCj8",
  "key28": "2LjcCVs5Z46ZLy3HGj59MjFYTc6QjEdsCeUKvb3GbdAiv2P2m6gmyAPkTjB7Xtgd5wgGhKULd2xtogziqWvroaA2",
  "key29": "2SVbvxBXqw1Chw5hbd3dDYLNQz25KX73h7hWgqfjpm2FV8tHjwVV1VjRsrXBGgSEz44BMPjqiNLzSZy2orGZF1vL",
  "key30": "32XKA9CoUxzuwLaKEDquRNZP6jgATANJsTX4zWLP2AreGGFjBAvyxdo1rUAy64NFZnJDcqJvTYMXm2TtTeT2wxNR",
  "key31": "puW9b72A9HU5yye7cPeC3jopxxXF5umW5izUdQiZdSXGibUmQwvEN9rr9AiFvv4NK8r3X8zvUNHGwxfoHLAmLfB",
  "key32": "367MRz3u51HYAaYjA5nPPthNVBA1HVc3rt2ghEyRJVSciaL5Wpz5R7J2WhGixhkLnEx99Z9XjLuqMC84TNJAHVSc",
  "key33": "3SiLpiVE49brH1Z2Bei5pNGjFi7w8EuS9LsMVg3KuFYZKKGpgjqGWsvAWWw7Bz6A1qvGyBf8PaRwR62Ci6D9j3Hg",
  "key34": "PwYbQ6WB6oUiWVYRSQdzReW3BttUjfyaZYFXvaHZNgApXpQsjW2Zz4kzCH3cPWCL3aQkgzwLQbC8VzLEeAfwXEW",
  "key35": "4M7kfh6PNMGDofeU7L3XyHUPxKAFca4tNqjBT2JV5vmqdWirabWENvYgnkAUX7gVT8RdoJurmwLskdUAySanpabU",
  "key36": "3bNX4YaQrK4SvDt7syXiG15JrXjNsvbc1TfbSLVM9vQLwhSt7DnKxqsix5pjtk7hBuv8pi1LQg6QErZx1W6cGJQG",
  "key37": "MncS3AtTDLv3Sz1gRrR6V5CKsDNp3uUqt2TgC3XUnF9oCFitZ5gpe2gUdPA4Pf8qX47hg2gHSvzxrdyS9ZsDZ1w",
  "key38": "25qguitCmoXRCCAwRZoLKbRWxokjtseRdSonqtPRWc8G6rHTk7XUu4vuECA4HcxjWv6f2xRsqQa56shjRnuLuvMQ",
  "key39": "3nW7uP1sNLRSZD9evVtRbKcA6Raq8mqWSWctyG54k4c9iNKvuanRLLsH1xs68bw68g59J7J7hQGCgFW5myjgPBsD",
  "key40": "bMbQHng7GhjrMvdwTT3PSYeqaCw1pDubh8ioqK5e4ZkCwXU8FE4QfGHZD3fFd9Z9KyEztJVUvnr7roE6ucohbAd",
  "key41": "5Ut3ov3wa7Ko7SP9sGifnpNU2xfNQJHhei8LbdbV7YKJnuiuFsJD3awEsbD5ncqH7aKCQ6Phaizj34GhJhXux1Qk",
  "key42": "gyx8jakw4UhTWzUuqX44T6kSZbdd3fXK4vKGdKBapACJ2NJRSgYYWz2nEQiSwU3hYXiZnbnuRbrTkuhYhgsDNtx",
  "key43": "3bYbgg9KPwYwUvjDfKfjtFaLKQyq6N9EE8pAe3F1F42AKuFgp8oWark9R3mciLNyiDb12wvMGPr2P69QHaQeq37S",
  "key44": "3JUR7QJHHhqTrkrESvg2v9hU28Td2BUvDfSuzqWKuVyPRKwfKBYup9NtobTFLjDGompAaH4mprMkJGzpx6P6gNNX",
  "key45": "LeLMNvce79S1dV8tDszkF4hTY6BVRkh8iMBQ8zHvrLLpGNZxxW4xwUZR4WiC2uwXRregCUWh8yekZg67EyH3ibz",
  "key46": "3xiwwkuyktNWcyCZTKdLxkotuvFoCWqfxMka1SaqJTg5ZP7YPzXPaSt2o9W781zYoiDHoZyJyscFurBE2748fBi7",
  "key47": "2czRmH9M5fy7Uqkf7d5Ja5ZFxZnvR2KeMyr7y228z7Feo7792SeFhZCr7ufZsf3SZFMdrebbzLi8AKZAwv5DG4zP",
  "key48": "3TELVzJX9AByGjugZVmDbaSuimRpqgSWANmBsqDPrxrjiuqDcJAWg644KadT7oAju43QrCEhmxbHpb5cpaKP1sy8"
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
