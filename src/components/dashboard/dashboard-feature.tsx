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
    "4WpdD1frjRy5VsCtWXZcsF4t7WUmEhJr9Lp9iakthhXbwwj197PvAQ9YgPkDJXg2B9R3bhVX4REUs5bmWbiSNxUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Da8NxHyvYEp7kT91sdz9emYgvzkZ4CfwThKoipWYfkXcgoTkN1tUTqQBnWMsekXRJZ3xvFoLCtEAmLSpiLYMDFM",
  "key1": "2PfB6HGNjojk2SksXj58DbvoAU1Ze1CpLdV1x1krUU7wc9VZvKDDhH88Pjhc27DPzu6iU8gsMo1aQ2JLE9gZJc1j",
  "key2": "3Tch6dmSsx2eoj8VxeceHCdGERWLTojzULtNf1HmzerZcS2ihsxWTwrTFRX8exnGJQEYEGzdnzkGHkeY2YgEfxtU",
  "key3": "5uzWu2z8GwmKf6hbmkBmy1v2tavvKs64CWnyufG6A3Qzx2GzSKK3txfCDGtvkQP9daHKof85QZAjiyLTHUonEdgA",
  "key4": "3JCK1BZDkoHQ2AhiXWSCjFUEC3nAegmdvBSxccMn1fNkmZVqeYJaAD1BMcyfryCehE8aWTQriLXEzNySHbgsn54Z",
  "key5": "4kERdbAUU3MxGzURjcqJAsKQpP3NyvcToz112sLeEnL6CVsqcnKTyF29XWhRvYhBuo6TNrZBFo5WHHEovZUpZpia",
  "key6": "2jxA9y3iwsGreAaFwGqywCeKjk6czFSnv6zLK93Gk2hNmzfXnq7yDkSsq1uQyguULQ7vHW5PiT4Q4EQcgUbyQTt6",
  "key7": "3agshDLJXQ7aWvyF6Usm4xzrdEtyfhML2R1hbpnrrCkGk27d3TgVcAx9iYUHXfxjvarxBqeU5abrdBUobxKxFEJp",
  "key8": "3oTZnpKoZZaeXTrHpB2x8buxSuYMGnFxPysVB9NHJuEaPvDu35hwADEMNAzQ6JtLNg3CY88hehHkwTA4xUV9nzWs",
  "key9": "F14F5TWvTtt1AswYewmacrdon25kxwFNzqoA9587JD5mwrEcR9wfcYhmQ68idzDd7f8YDSgtaAcVFrDGTJ1Lfwp",
  "key10": "2wvf7HHFxGT3HDmZvEAJPnm99aBxZgxe8KjZhZUDVM2o3fpyupYntwXzGakbmYagzvk6hPxWiAdJAczjUHnuQyNf",
  "key11": "5GSRv3roje3K5MMJ3SXbFQxJQXQrbyoK44mW7atAEnJu8BFnSV3nKz1xVgPDZGS3R2GYg36D4NxnxB4EnGzwr3AQ",
  "key12": "m4sSfnkgy8u4Hejgm2Dvub47LxyKAFEohGwrCE1fM3af3kvViXBdn2a9N8S2HmHN7wrLHp8ANmQearhC2xn3ZJb",
  "key13": "3AjBQNuMcDGDsXfTF5FFPfsKhiQMqYNBATbxDeK92xcFH94cPyA2DD3fwkfPvQMTPs15r3f6bk2yc2iNCTZ3Yjo1",
  "key14": "5NaHVGJWKYF2CXoLYTZw4raHKA4oJztvg7dKS9TCMWoMaeEE8o5A2HKsnEBN1oHdHkHg2uw4ZvMLmStDXNukfrEy",
  "key15": "2HpAFhg6Z9o7dQDhdSeafo3hAwmfMjPK6EfbjVWTjngbaANkxELfYeKayxc7ZFDGhMeKDksboGbWbAE4Vjg1VUwT",
  "key16": "4jxs2PHTaPqr4CLeih6KeqKunY3r3rX4v9a63Pfz7PqPJbZ5bLF6TFQTkUYtYA6DpcDrzcPhz4SCbHyNNyt79d9L",
  "key17": "gv9GnG1YJL9VEUhYBrhHNG6iv3o6xbAnnkdCh96i88vrNXhvWQatj9ArgZ2FAiW3zpzEmpxwR6s8FySd2PJcAfh",
  "key18": "665z4fZzJrNqyCu4f6xtDaeAfWrxKHCN3FxRHN3wFYVTeTNcjeMvSN6V4BopNZBuM74vr4Ku6kqieKkHSunHHfXt",
  "key19": "4vZe4fQq7heKpY8rvTGfFrMRV17veu1xwngRSpTTWhkTJSAFYQKCNkK3EDk3bqTdV246N4bGDttvBBSkKjKCatdJ",
  "key20": "64L5HVjoZM9X9waeUuJ4kBnBmU1DstCzRgcr5JTsLrriC3GLUCc6e3GKRsd73JzVHKq9YTd8pSDuTzR5Ns9AZHfd",
  "key21": "5ZJJXfEGyUpGd2BVz1EKBgFc8y7kYkDEt9uJ1QT71BxAU1GZyCURkTe5iJMZwTcMKNp5DfJGTwnScLX6wJeqURd1",
  "key22": "35FHFFX2rVERRikQbvQ8wZS2JKrbe6gGLHw1HwzUuwFW9AZEjBtCMcdF31KM2xUtoXWmi86U8S2HUnYaeRH5ZNW7",
  "key23": "46VABFY7h7RbiziH1PqhgLNjd5CX9vkpnPPiNwA9wAPhMv6FYDB5C58QGLebVKeLtLQJChGdjewC5S3CAEWtjQGV",
  "key24": "3WX4KzJY5WfSrt9E9HhjfvRsHJi3FpwCBZMqaE3AMfSBkpvc1k3xotReFMpBo5KxjeX232LBxUow1z7Cd9odUHJK",
  "key25": "5Zj9SiPiiRDmGpctVdZvQwgtNnA3cVDrB4AmexJAKYNSw6CZzUUEoF7JRQKFVRgqXU3FtNa6iQDJxEzwyPeqfVxa",
  "key26": "41SwoTqqLjQ9fCsRTT59GF41Bw2sGvLFiC1rvaDdTNh2bdXGHq27BdhnhWKgV27GLz9P5Y7QDbZCda2cDUFRQcLq",
  "key27": "35qrAKTCFZh7hVkokRjC1VjtTdh3BBUXLcX9hgF5UNUbKcAWawLRSfXGNY2PwwhauXC7S3J9PqfxRdSmxnDodQJC",
  "key28": "4hNBzCDhUgVqA6ATuGECsqt5i1o9bBv1UbrBqKibASUZENLSCDscZidoTtmFQVNy8h1hp41RBDsj8w3WVqNPjCYZ",
  "key29": "BcgsNiDobhxuuuRSoWwoHUsra7MXhzpNJfeYFAr1Ht38zez9gLUgyLYKnPb89sUhtyqVa8PSEWeAG96CS564Hrc",
  "key30": "4mLm19Ex7c6LBh9fcKcmXboXPJJJbzVgC8nkzPt4PptKH2dfqv2ccWTriXTriZWhorDqv1squ3FeeVn5VTznQwP4",
  "key31": "2MPgX9AF93mSEiwxgNFSqqn1jArjXH53CnXNkN8NQtbXMQHm3kL8i42koXvRKVX3nvhuweWZzqqTxRQSmycMpAQB",
  "key32": "de86RghWDPQQXpBQtEhJXWMi4PvfuazZaja4DowM8TtgpLNA5rYySvJPFoXvzvC214Be4twTqdTcLF7UM4t5M1g",
  "key33": "2WWeA3xDUBZzUqqCQwh4XXNSQhFRbaf2d6npMT7HWaoHKSsbPRRYWcsxQBzX9vfrUu9whPxDjtyM1R9eWSTdwnmp",
  "key34": "3QaU4CwE1PrempW3z3uyZFPNd16tDFFyqULNEFwyaKrhAcRYaTkoSo1UWAbaKvErWa6jy9tARWtVRRjdvRiARefB",
  "key35": "Pyd5pEqNWqBFCE72c4QZq1o8iPS9A6iiJqBcQTLm3bNswua7fL7TBxLhvMYnEvhXToxtbpe3ozoSWCPGcPgHnj2",
  "key36": "4hQgNg5cv6TQ61xvd9sRUGowH54iVLtHc2wipn1fzc8329gxt3oGxLPNojtjvoR7Wx6po2cbsFyQXmba8rzSfzr",
  "key37": "38VnKHvntCgNcnuKqDvkBAzHjoaYXUEAzGgdjpxg9Mzgb5nbFra96ZJYP9V1qC1pqL83wEbgyvqBjQcUFfyt8ftf",
  "key38": "4CgLrY4SLEfk1AQTY4v5zYTeeBXMQFrPVYYRU6ihdk6CCx96iZwAZTigaV9k9C5CrPkj2oMnRqrQAhRZzLnvJB5S",
  "key39": "5ARNCwS2ghe6XDJDrZSnuK76FvjAU1UDv4ecJoTX2db3GD4bLv4DRS8Wd5N62NzHLNeLQhvotccYLoZfWyWzFq7b",
  "key40": "348DyQwGjGBKQpLF2QPRLjLFEg4dqVqtdyq6NfyMziY7d6pXprYNTEepL8xt2VbV4YzTgvY5RarTHQq8QM1rzzMV",
  "key41": "4vzck8yJ1aqpbdqLdTmVRyPzH28U9iPc57XP4V3en4Ac1PmMEBFexqUe6m4npATyQusXUgpMux2eTqbzNrEdjX4C",
  "key42": "aDKhua4pX6y9ws9xVWyTZHWndpMVzWqJXn8D1Mg5h28wP5EnN1VRCi3iK6s7LZnkrtGFmurA38vRGMr1StxXJWW"
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
