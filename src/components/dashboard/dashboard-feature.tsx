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
    "3xA9GCXZahjmE2ap945PZivY2ninRSF21Gvm5tMdke6AyRQ145ouaXfakoVowx3HweZuatYcJRUmBHobqydb81eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akMFLHP43kpBpnFvSELCeKN8p9CPXXbhk4dm9r2YforLbqYgYRvaGdPC7j2R147FEpUBJStBqXGjQAwtHjLzSpi",
  "key1": "21Q5kt2ozKWrfKBQxVEkPC22ox1MjRC8mgrWu2rCudyx4fRQp7uqaYuVYukAQnPETEhRYAqzsAjiwGRWaTPnu7hx",
  "key2": "2yjxL4ca5ZRSHPdxGmEKrKaYmtpZS5MkXXXyCHM5cfyJ26FByPgG7EjEKXELeiEGDHWbJfZC7NNYqiTXPKPNR9uq",
  "key3": "3gNS5vcuFeo9dY91VyinkAQWDA3emxtLdDagvfFtB9L7MbXM1edtWA66yQf2LpqUgWWfEzMApnHg5hKWWyQrYpAT",
  "key4": "65xYV3P8y8yKtYNWAKy7LQvDGJYEERd5TKrREe2ZUw8SRZm3CQgiRHnTspJdV3rWViZsLFmyApp9myKbRwFCedhN",
  "key5": "3FHeEtDgA8xcXHpwjxhnFmgTdUYS93ca2dDQvumNjWSStUnodLTfLLoWCbkFc1uLoqnhLdP8hgb6XRuF3TiFcFWs",
  "key6": "Bs4o5MKAMw1PURnibkJUy8ZbYrs4yfwdPSi9cdLA9bwGiWVkQVr7H5xtL8zQ4rdUPKrpcHXDMUtmoyLZ7fD51Xw",
  "key7": "4HMPk2JjBiBjYp2XMoZrE4CLDEdHwM8i5937UrVNohmY6i4nDPFxdJibVm2RCV2kWjyoVJe2NuBU4nEb776yoJfk",
  "key8": "3uBxxxnM1SEYgAxsKftab5pTb9MHDbGocV62PPDYERFHPZe5yna2RYtaCguq9WktX8QDtijDNasGxv6weiQUZybq",
  "key9": "5pUMikcF8i29FNt8VHKSfAuFfTjAEDAt133Ho4kEgt3F8h9M4qFDWt53EdCBpMY3TMd6n3RmDQu9R86U4Ebeq2n3",
  "key10": "456AbrcNSrTj4vgB9kGkf7i9M4KEMWAfe2R5kkHQwkPe2pViaNrfV3k8EqHXf3LaLg1AxM1BFmSQVxXxmjR2vZUZ",
  "key11": "WA5gEYMf8TYsmnbZdQV96kWbUBEMbPFBcZozMdSbpKU7QoMtVpnz36hnuVmV8zkmv4Qk2tEqEMJZbAP1an95BfJ",
  "key12": "3whzBvft3SaJwaayVmysQQJowwkfrC96gXj9GTR5u3iHKzkE7DLYs1niC97db4YopGMJqy9rcSzg98sgRUwWtwj5",
  "key13": "3swarywFCbfiWdiTLAyQpnWtDfggUuf6qwjYMS89eisb3sUvapXxjyUoNanckKiVYp1UqmFWywcJ8ni8d5MKq5Qe",
  "key14": "GUShMCiFRKq1MwmCxVWJUvrAzPBmPHJj8VRjrXauFY4nk8oQjWMR9dSBRx9t7J5CgiCTk8seaiCVfVdpcrqEZcc",
  "key15": "5qmPhzMywftyobyvBPxoA9LnvLssxSocEbuxtBgG9LrL2n3d7Gb3Bqewfz6PcbKSg6q3KiWtXgZMsuY27QvXF1As",
  "key16": "5Rr9Hzbkm7PzZkyV6xoCAWpphfFNJ5t2NkAqtiNgga6Vp6fdxSaiCnJPhLQdBrqNqhsMs5qEykWE5WfHNLZpGpRD",
  "key17": "2VgsWEp5Dgau2qMLFL9Fw36WoLgJB19UvSmRSWvNGjoL3AxtPrVU32Wg1FGiWGUmvf13pNVoCa64bSc2vjWYmruK",
  "key18": "3LBn8m83iGAjD4qE86j7Jegwk4y3V9HepYvf4fXqEfrjofXybEFgLNb3GTiQe2KzDpNzNU7LUFucYMc85v345VMo",
  "key19": "5TX4Bs6pDhbrn6XCfKWtXpJjKyi4HCeCfsEBj6rPrFWPmmVMSKHYJPKHb1pcQEoeAVYHAD8V5ksamxFEoGD9AnH8",
  "key20": "3a6RLrDVpmK5w3CrzSuiGFuRKZ5WRH12DR8g2N1gx3yasLrJj2YkJ2d4aZWcQToGUB4oue9TpF2GiisigUAZBsrn",
  "key21": "3VPWZdCfrz1AAWtxmQa3HLLf9s6RuBnUvvvym9HPU33eDhGKaWNYYghs4jSnzHsQedoEnQnKVHQAtv5FHmoASbta",
  "key22": "zvNMTjXzcjXXxAU24auc3KRVXkZA1SHzQshdmyXxWFAgBJJEFyf1jZdmH6eoCrY4fK2N4LVvU9Jn6qNxTsqJqA1",
  "key23": "3q2GnCarBdeZreogs8MN3v8PVfCWErJ8pUhvRoSpAHLiJof7oegoDkLue7kA3d4BB2EZ7NXsGHreHYN2E4rxYTf4",
  "key24": "Hqsr41Kz5royh9t7QSABVGzwHGWvvQ9Njpv5hNRELm6vUTxnCmygcPmBLyDe5TXFWsHBED4tf2f8vHrABZxfSK6",
  "key25": "5aqZx4y6pAjJaRfDWLju8FGT9UYqDXCsiqCKgeqeHGS41HPkauzxKFUqSke8bC3NPPL8xiWf7JUpkpy4v66v1ME1",
  "key26": "5VUxJuQ7vsJZ56guqajW4VwSJazvxzpnUhDtbc68TNsBEtx569ZkfGqQsd1vgnME4F4zptCnaH91isuJhcyXTDov",
  "key27": "37dhp4RGgK5ewYRW3qGg5PsgDYXtjid2vb59NnCjqyVSQK26nw1F31GXDZ5Ly6gA52e9v6kHrH2UvEbe88yUvXn7",
  "key28": "3neGQePMgG62W9CK5KXW1GjjLPQb457YUJ3G97DcvQaYZtrm16Bd6D2z4Ux2zQhMguUbAkt5go7yzzi5KAoZtnut",
  "key29": "2vHA79i2VL7a4eNno47iXY53jWNwqjt7vknWRjMz4otgmX6uGkKHCSu6btVY8NJzAtr61cYKWJsMDHVhmfiFNFkT",
  "key30": "4tqFwyrWq5TBXsbUbHR8pM1XC6ob6qbztd7hrRUki4KmaSCq5LSsi8Kkipm6UmQzvmCVBjJJabdiUGTM2gBBnd1n",
  "key31": "2zWjK1pDqRtFLJi8gxGegaofCwtd6UKX6M4VPLT5QLsLwDDAgKXhAKdNfZWqzc3LMTg2B1Z9DiXmvw4FTQW8F5JR",
  "key32": "5RqxpBSZZnZ88c1rrxUjDgTMvqo5LzLHUQCDR7U2iTqs8DTVUSdBq4SYwYZWZHDAhXLKTdb2YuP3bzsKN1A965hg",
  "key33": "5KU9gRbKQh6gz6LyyzLTZ9NCmtb5wqkQUoaNCBEo9tVAPtaXqJfZihNXg6kYTAiMi3eNJfpmToBs5Yo9hiGo3o84",
  "key34": "C252CBn4FeH43iSzNYdTCRfBdZoXiaR3jxuYhx2vBo3WBEix7kob96uCNQXyRxoPAKZqgDFyHz7rWR9dXAMMEEk",
  "key35": "5tHpa7GFpiQeRwGfWBwk1SMm7VPmDZatCeDZQu6fr8GvHN4MVv8DJ998h8HrPfFM9irjCwTR7cYJdqFwSU8MpHgN",
  "key36": "5QDonxzmrr3VhTuotEhwu2fDD3dJqFcezJ3xd56ek5PGFGwSLpUX1SJ89fx6ZZntgdTr5d7gEaQgkUHMmURpdp19",
  "key37": "5pm7xdhgkh6k3siaN1exo8UfMLaUw7H2dhhBoDHqgxMu3qDafTuNKzFpb3PtbWV5FRwyXAuR9yt7Ezys4G5P94i7",
  "key38": "47LGqm3cWc3bzx1m3saJQRQU5FM7d4pu2taNcBQ4LZ8N6vgJqF7aZ9i4VN4fqxLMnSECZjXWvmHDFZAZEfy3XmhJ",
  "key39": "5WPHHkBhS2PyxBqvbrvqsYQLKvwZYMdfRJayFNPg4YY38SLz3eRs5RqmKU9Fs29rp6BRhDV15f2exQkQJhFzGxs3",
  "key40": "4VTGiZY4SS9GX2EUcmEV6R2QrQsLx5vdpqsqS6oJZPEuRUbYiptMb2QAGpzinsHt6Z1jN8Mv7cgDtQ2MiJnaucqs",
  "key41": "4Tmt7Px4Hiqwa2k2h6KGr3MHCK9rLfqqeyKMzxN1UgJ4NCSiC3xqtdjtW9QVW2Zb2e8ZZFEiBi7D83V1UtKyWrDX",
  "key42": "61wYSHFmNmGQeR1o9AuyYAecucyAoh8r5hF1K3km65LGTnnCKjpDN3cVdMiuEtAp4CCvBaGhw29w73nFbS5XBzpE"
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
