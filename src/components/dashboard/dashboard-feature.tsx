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
    "Ba1UWWsDXtrUnxWGF3rhneLNQ9dAUkb98ya1Vzk81BVeAgy2wCtLQ37SnyKwYf4wh86dZErowYYvCGkQNDKS3ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WCGGCkE9rwYyHk37yTagQg62EFoKzra7pUmLqSCYUgkJZnea1YrVK2bx9uwYRJG8Q6C6SsgYCWfpfx3ebpwwd",
  "key1": "3iiA2Um47zKuQqoj4dW4UqsoqZK4eXZjyMLTC1g6H8D5WUASemsSyJD2jhWdG8NsWtqT9katZETXXKNptXUZDig1",
  "key2": "3tLJQzRGWZkaWGxe7nYz5cBjqVHyz35nt6yUjj6wHdohPegUXQP2jsiTMQd9PyAt9BBg6racHtZyCHaaCADjDxHp",
  "key3": "2pYzMkxteaFczGAFAgBm22H35T6ZufXtcTQgLkjghUptWeEwCVYLFbst55y7KrHAzjKzNLBT99rvaW7jjcRwbwQc",
  "key4": "5a4QxAWbCjZ5rtLJquHxDQEcvrSUiGHWuwuiGeFUAxX3d4yMJPTz4PxJzprNk2V2Zo72cEoEub6uJidiuz7m61V2",
  "key5": "5tpEy9GwTzu4aLxJCJcwJrSPNXzagwWVFD2N2B42FMfZLsrvhe2ZPtim6cBKXXaKCaM1iC6Xk3Sk3NeEprHHg4jz",
  "key6": "L3V3dHmCpP25d6TK3byGYKov8YkMotcqW5mTbHaAkQFSd416wkzMxtsSR5dKh8mWq83VA3mA5ckEHis4qicQ58T",
  "key7": "kCATPoMdfsvpWjBq6EtDtg9CA1DhdguaKzALYTPfAvjQAGS9oeAouGoGMPXaVb4C3fo9UAdLTrFWxNPeJZ7Uey3",
  "key8": "5UPWsCQ8nRLXBWG4mGxxNXL5abYLFXUCimijaQjwNc6ZsZJYRyh5oQJKvr2xPtHuekY8UssW7q3qwAz7x8AohVHH",
  "key9": "37JnyHqjpHm6JWXdxGEsBsepdoU6ETZ2v2NBFd6Wy6nZkrxJQu3FX1qEoPQFfsznR2mXz4ESArar2dky3KHmFxMH",
  "key10": "4HE4sy5ZHQ6L4Qih6F71Jo6hrQWw2fM22aUbPWh21EBZzrcxXMweKK6DYDthvrWsJGhhitSuPUjtBNdXQFxZvwNM",
  "key11": "42MDjqoj72btoJoeW4M9HunyKvLoxzh811za4UiUdXTNty6EjAGueyByV9J3geNuoHRgZQ4as4nTiCRA4AafJCk3",
  "key12": "5rqpfHELY45QXTwLoBWABPoEktqy4QjKiBytQLonHDJ8BrsmeiKSTgQDswkuJq8H1N7NtTwxbxbgrVmbMGXWb5Jt",
  "key13": "2FV9bzbKhx2MuELaBRUVf8LUpEkZtpUrvLAsU9RyYUF2z4Y8DEXmyBKFxMHVYaps45cP1brcTUeNatdW5BkmMwqK",
  "key14": "3jFLhrEP7tvVBmNMBbxqgWt28b7YFyYXo3ayYpNQMnDWdKQ9xX8PV2tj51feRWmtgbAuYkDoRmmeqjiYgtkwkcHm",
  "key15": "JpMzZZWamCWsNRuHHc3R99YCUXMZzW9TgAdFyKVjq6vPTqLr2RFoT4t8xeGMwhSpKjGmHa2Q91kg7kR9aXFGdV2",
  "key16": "3HDYTFYAt9pJUcrzJHiXD8c5nTYwP7bxVDtsdRCNjFYs7eZjxVaH4m2eZ555Cfg1bY5Rd42RVFY1p1E8h6dnTzzp",
  "key17": "294N4rnL5Yy6DWVsfcvUuvSMH5PVaKiNXNdLi9AyQDPJtpH3s2fv1wTJ7UPqswRNEphc9LNKLGMWJ4aFwYmVxhq2",
  "key18": "3FaSKc741zCXMHCyAY4V1a1TayXe5tyvJZZHnxjmD1svuzQw3JKCPTBwN4v1QxVd6FJmVik33bVFtothRgB6rQ3N",
  "key19": "5w3zt1VvvBNBBLGHmmjkoaoKRkN27eC5gcExVqYRMDft6mW8uyE4voEPs6Pu2RYsyceZLFwv7NXCV1CKm1qXjNPQ",
  "key20": "5idNY6aPiC5nQr2GAzndbaFuStsYsar2x8ECUtmHWoTLVJvC1Ej6ZBcEGuGMTSTFquJwRkJgmdJuRMMcs1QSntox",
  "key21": "4M1Lnrb78pENgdrvx2Ez1ysrh9kpmdGgsamyAJDVXXZzC76gCbDVtnjQ89HhDxQnhSrZFD89o9UeLvXXwcKqFFK1",
  "key22": "2GEytzm2NYqs6c4PmZ4vu5q6y5DbZWiwDUfpSn3BtjJZ2X1uUmeejd7cajPovCyxJxVHytCFtUmoDr5GgtPq85NP",
  "key23": "4mCKvgWUSdgrBHG6Y2DTasr1wpKprvcrUrWrdy3Q9Xjdnxri7numZ3Kwrdp9pp1HBUe52aBmQrHpWE5hE4qxxgtH",
  "key24": "2FwZHmDYNXmj67szeHJABauEhioFxDY82roJyEMcjahNcvg6mjPk9zN3Gh2HS6BTbQKBNifwHxMAfyJVCm9nAhmb",
  "key25": "2UzCASZz1cqsFttFoYUfbmEyN5o9HSebPCagHDz6FrKRZndJH9zN8Rm1JLCE2eqMRmYE6VLYkWTYVKNPeA2cJ9AW",
  "key26": "2acbnQPJrm46NGeR4Bpe5rgNJqxrJu92aK8SD8Ang21vxMRt1juQkNbNZU6zc7buQTvxGZdM5qZYkSzeXAoEabuA",
  "key27": "3EQu4MoH4tosoPY834wwSSTpFGwkYBTRvKaHsNh1uYwQr2uNxicPAcjQaSxWDzKWUveEjtNwFYhL7R8hddcNzyby",
  "key28": "3nxJXu7Sen7DMdJStgUTXUNxL8xtmWRodw1kMNFdAu2muDNe2ge2wPyhWowBsRqb7NvJEmLWHks8LBPCanRtRUbm",
  "key29": "42Gsn3MrYxFGVeYMM6gKvhhSKYKX7WMeBmJerBff2KzuCXig5mPH9S3ner7WXLYJBxKZpixfZ9WDBVC6Spo2Vf8S",
  "key30": "2YmNEYqGwqRGVG9varhRuwF7YUz3NzSUWFLgiGWUhPj3SzMVkZxP7LXTghnSRCsU9ZmTdWPLD8t4eBbKbhHvqpiR",
  "key31": "5USMwbqrugcSaBwRdvajAmeER4z95za55HSpZTkKzSdehQULvSTvW4uYNwFowgXuyT9tcttNh1dcZbmQ1SeX4kcf",
  "key32": "3U5njeBVssbpWoBv3LjZdXwLtCz7Q4WrPJJe1woMuEfky7HUdEWL1zUumrA6YjLii6EB5HEHZUJi4CQuyq2dJAaM",
  "key33": "56mctYWHMEH3En5wfh4YCLwUBGD4JG8WBgh6W7zCNTwBKKCiSFyFGsLXF1N3uVXSVfbDXgpZuVkQNfWk48xdxadA",
  "key34": "4ju9vZoGum2ozGGiaHUH9hei9KmWFQNtfbCi6dLfJ4TnMYT4Nx2ngxooMvc2qqMeg6KVJWrV1cQAnxnkZUjwVJKu",
  "key35": "3GTE8acv3LTXirKugPQYo2HZcxc8aRmoSM6EDZf1dwJPbvE9JfBKJyxK5oKbLh63ywrnnSMb5V6c6HLUUeBaLbDZ",
  "key36": "53nGvYREb8YocB4JS6s1J9UR1rjjpAVitWwWZCZftFCSS17CibWRR3x9Uz9zgjeEsERJk5vyXYkwaYB3dXU1Hums",
  "key37": "4gbq1oyFx1EnCDFViWRXgL5aucBtvXTPTJh4UTYpz111cCbcczUCAtfbqNMqq4AYQE1ozT8oi6Vzct1wR4pnLfJT",
  "key38": "2SCNauYqfhm9C87pf95vQ96vUQBsDo1s1c7zHNdwn8EjXjD5aGEfYv6U4ckhAtXS5YLzM4gM2QM973696qHCH8yC",
  "key39": "C1BXZmhFwQ5rdVNpSkiYn3ypVjY8hdvv6kgj17JxSMkFZrSVAa3gRgFRrpHZVAiXeFF3KN1E8sRSwXjHoZkCJ3z",
  "key40": "4ReDTzG21KYwxJbUtJZ4MLaC1abMhSjCY3FjSBWRg4w4zB7RoUxF7mvBfZT8EsVJzDreERM8rbG5hw6eTRn8puj2",
  "key41": "47KtdgPvZCWBuMigxPtTpXS1L5dgzWvLkGo7fjqQTcbAKogdnEmnP2avN8VUhpCzsVE58PRhX8LEYh2muA6BtR74",
  "key42": "3sYo61jEh2UuAzAfdAMCtRV42X34esp3LTKNBUcfdn8CizZRAUdEzSmaa5R9dNYEqTwJPYZPtxdBG1nDmnFhA1wV",
  "key43": "39BS6Qpc28ttLYKWdEUoDjssUWmg3vSdhkhvfydGVQKAFRLbghw9qS7wQH6nC94iLCTyZy6AAu18WvxxBtpmPEGR",
  "key44": "5ayKsFMMguDFNvuCCkEEQueFGC47Z8NxwJkpQyDYGFsNviV2kogHFaRRw9NjbUkkLzJMhNsDb3RRnrSkaFamvi4J",
  "key45": "2W8HoRFiy94XHGFA5YqVg2t3WC2CGPR1kLQMzoJdMwRZPJAxkFAXkPeHA8ikXZvCboem5Aq9NbgM35uHYUeU9Wfc",
  "key46": "4RBCKU8RLKrhab5MFeLWVH6dZg6KrE4L1qzFU5pUSVrUXjfkCFd9Wmn6Rf77wiUTfrHpn3v8SCQgep92fLMLVH2T",
  "key47": "5wesmrZwUvZwjfU8vu2qh3DkBr4a7dhUn7D4ae7HN4ovaJA1AFUC2bcbVUvLF21tWudSq3AQ7MATbVHAEtsySRK4",
  "key48": "2iXcbmoC5oj1hnsfu634bakAo8VEm2EmjjGLb4UHwNxe3So5SKYCDhw5Rvr76kiCBgjj3wo9YCwxpW9N8Uwb19KV"
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
