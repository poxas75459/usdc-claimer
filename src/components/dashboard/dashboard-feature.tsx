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
    "28Tg4voBBnRVJaejK3eS4quGmAkgTi1SHMot3h3wsxuW1Fsuw8HGochf7swuPg66fdm4KHZa2AqcD1heq8NDsSyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4SsY2iuzC1ayGt1tkhXcMNpcRp8JKqrkeds2kLR7ifBGN1qtJNohHQNR6e3YhFkgVwQqWrxDVFmHMNmjuJNAWT",
  "key1": "4Z5ELzQKr8a3oXWfUtaFr9CG4qdiHBtEudqU6pxwLvGbMfBSwDUD8jHe7DFA7M6h9WnbZMxirX1jf4WRFFBkS2Hu",
  "key2": "3UNmATzYXovWZG6s1BZaXsZ7MwArAGENSxirHB5MAp6xR92ktGn5wv8B5UYcakXZYEA6CaEaQ23kqBENfn2fn7BX",
  "key3": "5YZPczjCK3Ypx8CQWJztxu7mqG4wGUNXYN4JMaje6wT3XiqGUBh5MK2xE3bsnXt5xK1acxndn8i9oLsMqixTFPCF",
  "key4": "4aVyehUSCdmTtedCPjeye1wUiQcgdkNjCDmuZjieiVqWdPo9NMpGe5hwJWJtGErXm7AcqhTFw8WacPcmxvzNviKT",
  "key5": "3ciiakJpHH31LwsLA2oy1B1FYLFyq3yhAED3ZnA55tm7b5TpVebdKSr2HwTgMRwRmuUfpZcM9o8KftoZpr4PPF3g",
  "key6": "3rpptnRwUWx2UxCbLEJTp1tBjQZptWjeL8dBj6uYuB4FmG5HNMQ6YiVxi6Wc7RLuekJYnMJJCZ8PfrUZkxExH5pH",
  "key7": "2mkJiPvjvswjS6QBfEXbos9YWdbpA53Xn7C5V21fh5CTiD8jbToY75sxBfVKSvEtnKRyZvXHYngCHTMthX9T2zd",
  "key8": "3xBcNJtUxjnPeAaHZc6pcJn3jQYXKKYcZoFC9LndVrparKxKGsVfCqNhEUSob3ykVG5Hy5rTfiUdiGuR7YTs8xH3",
  "key9": "3UvoxFowHXzHbXx6HJ3TMmYKtZXovmVyHvJrUiBPE1UKrYSnPCj4Ak6udYKAZdK5n5eaW422y8TBN6LwyZzJsEFY",
  "key10": "5ZmsPe5Dwh7nmCYfyTbiPobtVwTx7kmfZAzJDuWRFWXQY4zwKE6B24ubva1nuzqThYeZu2snqrAs8gR3Sjxb6p9Q",
  "key11": "jFNXKdLZx9SR15TWBqoLfHFaPKzn5v2bx57P69cz3ZXtJ5BpubRjLifYAdH4k2UgR7Rjru1bS3VWL8RrjonMN4s",
  "key12": "4i8kFWYNa6jQN4uicMPEtFP3oY3zwNSiBeSRJaGciKoX2VvMramedRuU8rPPmSWsjparthsHXqS6oCL9kviNrmbJ",
  "key13": "PgwmK96oAPM9nfT1yj76T8iURToBWVRtHDvEvKbtFLKwYfT9zLAfTcqxsrvZnf6WZHCBXcVdwupyd8pQBveB87e",
  "key14": "3Tq8DGm7vFhdy2NCqeZ9Pj9MPuepQULZozsvaiYy5c4pwuN41nhrdkpPLnViQjJjdoVkXhbrxMsXFycNEPiAChjt",
  "key15": "3pHEqY9HWFCYpz6GuwMuEq5NiSA6dnnmZSrBrhH8D88k4xqNqAjkvfT5sXENtPtXgHuwXoz52yCbqhLs1Dw4yzPZ",
  "key16": "4VDF5rMnGKQecvThi2NxbGNkvpxybvjYbEMvvMkEdmrDFN7h6TiTya5gfnxHpcdE5UyY9TJpGvWTUJcaoeo7DhH9",
  "key17": "38Hn9cTzRqKw9eLdczDofdgFe4kmbwZ12VgcPZ7vfjNVg6huroPW32ZvggMSMzrnrMDvXcXW9c9LpryYfAqxDEv8",
  "key18": "3sZcP98oeotjNTcHCkdSVJVsCodT1QGiXA5BkNLBbFTpFchXB4Zgnuh7JDERcLw1rjF7jg74UXS92AYprcAYvkGj",
  "key19": "66sutNKzB9V5r5zw8wJrBpQXnjLwrF7gRQLzxnwF1takpmEPD8rJddz4F8Kmqau84CfkhJLn4UKUXK81JYCYN4TM",
  "key20": "5tMtsm5ffLYsDFaoRv235vwr9PC4kaGeo29PnpVXMSzcWDxw1b78qvhr2NMBbFzH4wgxkgzN2AJDT17bpsxytTnf",
  "key21": "5EXvkyerGpPa628azxJj9qbvhUu69m63gXGQViuLPjuAw9s3Aw9yW6zaov3GXukPmHdygAjCjLSpom834f7i4sh",
  "key22": "4h9dMKhDWiedRgtXMrikT6qdBUzVyHpJegz844Aoc13KqS8zSyeJxiiHHmtEH4B6wxjgt1KVACjyi1JXejUdLiu8",
  "key23": "2htYZUdDz53gF7UNA9pnRxPukf7SAthatRZiQUFEa9zTdzKWRyvGX9AzkPUCvqQJZLY7gFSbhZ5A22FDkBW2VJSL",
  "key24": "qzFZvBPFsU3NgS2ymXiB8mTEP22NRJnqresmRKTYTegXGF5gHj9koiTPVAym4Nv42pFVpb9hvDAw1cHfcn65J1t",
  "key25": "4mePNgnqhQT8XdpL2dC6itDTtkFfaiq5kUPz1Gy3ZBTyK68oemj142uzwqLdioSCnRXaTeAbxMWNEYVwvWAv7zEA",
  "key26": "3GBfUQShxBJiiptV7mKeSbidfyPi9Q7QvKiHWjE47oUCJnA91BUwjG3KzgFptxBf4mcJUy3sCAjnZfg7uR91JZWD",
  "key27": "gNhtHP8JP9EJ4ah8jpzk9dYLvFZUEVY9XYTJ9cAwjdrBmrKUhbrm5EzwYcbMX8CZ7C4XXzixtYp7Pp8p3mekLWi",
  "key28": "5BdkSQekD5t76RgLmzH7fjvCEEWcWJFxjQ8ku67ULyYtJj9pKqfBtUt6WqckUDT5S4YizhBH4BLbrVCbvWUy5v4X",
  "key29": "7mVA9yUUy2nBSKuZSYuzRDcETcNPs9piFCDpbcLZLe2DApAuzGaRxS8nBMr5aNmaMCXjSqmfvbhwVjzZ61TpPkP",
  "key30": "aLBurxcLPJrZFDnCQQzmTGE5uJPp4aJwTRbdhPp8mCnCGKJ5Di1tTtuca2bvMtZGgEehj1MxFyT7ZP33n6nkw2M",
  "key31": "2zFfja5G96wyTdnWJbjrSY4Wz3CGZzZqi5HUo5d1fTJ9Pc5qV2B1JMqSvdm5rA419Ayv9Cj3PrckiiDAKUqYQaE4",
  "key32": "2GsNvQf559zLn6zpo1hj5Bkym8GybBgg1huvMxFrGbaDLn3tMHyuQZi4p5Lo9SFTrwgi5b7tZF3eELBT45xhyYpZ",
  "key33": "2ZgWdMnWwQMnMAJt96ravufkmyTHmZKZAqL7qyKwH6iCRn1FvbcsyK7GbfjPMkFAt41cpFVPyjEijKcaHcT7oqPA",
  "key34": "53TgRP9QgezfjAMRHr8jNgEcsDx8DHJmMMbihUiQprRExEYb3SdKtjgPfZAJx4szZJZMpDKX5BjJX11oti5qHeUW",
  "key35": "3e4VVcgBqRyz5TzNBZKms6pAUaLTiyQV4pv2EhRBmyzLeVB7MW2Z3sheohVDAhtpA9SEqTg4Tz4hNfeMmFm8UxgL",
  "key36": "4ARs8P3DcuNzb5VDgE2oTjXqzGEc87ZgFZCezP2d5qp8bRckGePb2BffEEPRwiRg7CwZbhDgisgK8RwfVS8XxAXL",
  "key37": "4QmWZg1JgaGzP6Dai2bjAupviKjEaJ6HHV53CjcEvJ47vuWBagS4cwZfxCnZ71hy2rGKu4WYKjqAuQ2WoFYJSFTs",
  "key38": "Wsr7PFe88GK1d9yHP1KfRFxnijetBXi6xbi5Lij4jPht1WgJjGEYWqpw5w4tvHvPUjCRzoAxZpeeVUiLfuf9E7j",
  "key39": "MzwP7qj31Av3tF9DShWREv7ZgRCwq72C7kckbYmEywpCYJ6V8GPKjvP5c4ZsoN8Nj4gyxYPvRkAAnDWZ4UPEM43",
  "key40": "5MTeWKpmBiaXnjeTzu3N32kfk596xwwcX29JmbmMJfJUVemJrhyGKqnMzcLcteP1xzwLWYNXB7bNH9tEbso4N9ND",
  "key41": "2Jcc8mPAv24kT3f7UFpJXr8nEAaJpJATyKm4oFRWCNJYXmS7zNC3cyCHbVWy8B6UiXbhc9nYRthf7THftVHUbKJu",
  "key42": "QU3aA3RJFGE3P7oPrDBqAQ7deU99Ctn8my7tXkaXeY71eRXCgrqMmua92TGas9NxHkJdooTvJt4YTsfCUN6cSt5",
  "key43": "268HY5n1QeX1dy8MKacNk3HQjDSgHeBQK1BPvbdGVCyoMjLwZCdHsSFAkSSYRgDgSZtaQZQMBox9mPxTKco2c3db",
  "key44": "schZSmY3xfAMpKAwNgvcrMLQeKib9p6TfnjMA79cL4JgMiNqucr8bGhnJgzhJcn4hXwwPFqTm5ExGoumFbHZLvi",
  "key45": "3EmwvfFqbqkP1y5kTNDkVoxSUcDhEEw6rsp9ZMotPBKctvMNyFjGZGS32NNKCJ3FLkpe3ZBYygEtBGCSUusrfoqp"
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
