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
    "3htqvU6iaDLUsAzs3aQZuHP3T2DmWR3KPJrSFj86fXoJokwPqw8CS3thgq1iTucfPkwFMHb7aBNoH3VSyj9Cu5Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mB3gDuMHNm6T3VDLPaUkNveb5Sor5PmtDHZdwmLZodq7rP6u8mqnVFYF27JhunAmXarZtxyupNWUCNhsRyMF7BF",
  "key1": "4m4JzrxC2YgbYVPv7dRrXQE5enk9PZLgNpjCVv9xGiwNox5PXHQRffDdvWSrR5mcZ54WTfjLmsjH7EJaT3UwTQet",
  "key2": "3TTLHCJoCA6z9yGXomU6kLpqpEDgzd6YdXtfWQPHofLXaB7urATCZxSEJLBiPaTf61rNAZMYcNmWZXU1tWWBb6ef",
  "key3": "ME45tyRXHHrXoMapKkuEo9ztAwuVe3QCaQqNz6tgeXFQuVuZh4MoRwRgKuUha8GQNBJtJpfDPW1UiCf5g4LSRxq",
  "key4": "34VRaD9thcD45y6QSUfrLjFNg6SfeYTakBtYnZyJeHpv1B2XG9MjEBGd8sHWGE27CX1mmabPGuDDr4shiALRGoSc",
  "key5": "i8xQ3amrp1aj2kxuFTHqCPkVxkg5dmCmR7VWrMVLoV227w9NqCQux22s9Ryv8GDzTVRbDhQqJr8MXfDhFqGVyk3",
  "key6": "3Animcq7K7ajpkVtKcY1cP4E73uMTnyHeZCRzf6iw6xv6qJ4nHB4a3Ry441tpqoLYKiMwwvK7VkVT9FPNCSYYa9i",
  "key7": "4fsnrh6ybnkw4dKozvg2GTqu6yH7NoAizmpe9CADfzDyUVchVLSWx2JzLnMeM1WNLYYCWmiWCfHsh2FPgrUeH1YG",
  "key8": "4cvVCEh5nMKM549WvBDyjexzF6hdB4vUa5wbx9D66gg1bFwqv2TVj81dmYoe2mbJWr7WgUgvJZkwyNQeukiHgNDM",
  "key9": "5bh4mtts8dHjG3UGrKPr1UWRWFappmJPjGiLASps7RsrCVeLboAhRn47eUzfooJJTpkRKey5zJDFd4eEVsTebS1f",
  "key10": "5V33eyAh3QvtwMZHVHsQW7WVwZwkvno2j7iA26pbLzKsWoWtQdYNMH34Coyz52aZB5G2jGB4A6nWX5DwT22m5Bko",
  "key11": "QD3mhQPRv1t2XdFhsrS56WmPxV9Y94hJ5MBnGVhUQfHxk2tPSqJRaWFCAAWuXtVcGgsmYwNxMmARMEemHWuMVWb",
  "key12": "5oBukikoLH1TbQAu4yqNLF34czKo6hN1Hn2GDaHQuqt64RMCMqSSZ3byLUffmwpSaneE8zSbTSozZDVH34qfY3u3",
  "key13": "4khNoXiQRmKwPAehzCFaK2k2RmzQ2SVUbALadxaCMq8WVUrsiC6hWK8sy2FwzFPHbnZW1EJoBKUGkfewZh1JkHUD",
  "key14": "53ZcSWxPNgGYvXkJkh54UjS2X4JjyH3xoZBXadDWsVycFyhwRA3K4MQ7PXn3jrF3pFpE8Q34NazUCjWDbjJQVJbK",
  "key15": "2RhtjHsBVRiri8jDzdHXm3NZQ5N6hWys8C26CRhdmUTpBJ531udNuy3RB5Ug5WZHoYtMwPBmUjvUYuhJhxSB58Yp",
  "key16": "21YZZ5jTApeF1ESPb3xQVAHp6PciDSkkp4C2966f2JTjM29cu4Kima1MFzZt1q3CW1sQumu2MifNXFuupo4NwtfS",
  "key17": "aieP4YJKSK6wmWgvvcnuZEv7xYQLYGqq4MaZ9sihrQuVfcsVJUYdp4ND2yC3HdooboLehPLy6wEmNnr84deSkGw",
  "key18": "bMG4wCc8pujBeeHZhVAWFeeBUCBfxDMgTTfYjnzPtPkAC7Urzw5pVjfULV5Appq9iHM5ohAFqitWxLqrZmFt5fZ",
  "key19": "kCr2AA8uBNqrWG8Bn5dQX8m86RiisJAfdcguGkjAzVUsLyrpmifVy4XSvLXj4WRcPBunGTatJQQzN8HcAEeuzoM",
  "key20": "3AjYiA1uCKCoi32u4HwRpcQvxeFVqtSU44K8P61nbXzgniGDvZKyZobv491aRbkA1MqNFPXEPPg5fFfz5QCeTSiq",
  "key21": "3fr4n7a5FTDuMsaxka6EhnH2qbwjvHMMPucfaFi8frk9rDNVNkKZtiiM67AZUNDXrURUSDZkavC1eQh4WQDJ4dTB",
  "key22": "2dPBTFxYiWRsgY3vUGSWJopsnjZBVcRA3Ta2ewZuiJg971uhvN6gqRMUTR13xZmGddFjy4Tt76RBzf2MnLCUmnQR",
  "key23": "4Ac7jzBHHBcr1AcGk9xv3YHSwdB67U8an3QoAdX3TMWGXGDi77MezUe8rq7nxzdHkqgWBujMxCi2FdKQ8JXYqKqX",
  "key24": "2mi7KepQoVfQKbMSvpnU5gF29JBFuLe4cnCgi9n2k6MyhNRKZCfmdeo4L9mVLDtV6deppGonwLqWByGVophtRft",
  "key25": "3BdVgzV1vGfk3hYtf7X1FdmUdbQfyqWudC2K3Xdcfa1FRr8DJQnirf8ym8EXNG48jhbPXntBVzWr9T9fSxqKkwa3",
  "key26": "2WugarioRWHzjQ5hgxRXbnsdWewMaoN3v69LBcCLbv42WXs65aXoeF73VnGWekWXHmwxaZ79N2qis5YmmVLpD1Gj",
  "key27": "oFTiCDWbnyT9p7WZmgx1FyXSYy1wWyVfQb7GXhqkCCjZFoeETJBpwsuNcAWrZhAGriwRjrTVa8nGvT23k2fk1Wc",
  "key28": "3LznpmDN57NSk2DmnMsLQFBNkTUcooTjbRdj32G1GoD64HWwQeAVhyfZn7wVuxMTaBT1XC6hEtG2ccESJXPfpBqV",
  "key29": "3hd5pnJwpw7jymAkkNiGCUW8tjjSgmBQREBFy5rBByojA66S68mf4TsUAzr29bioZF8NjHPLqoYDdsrhhjL6toVG",
  "key30": "4yTDDAR2KzP94LNuDHn61Uhy7cEJ9E1mAZrMqdhzQQzoWR7bT9rWqfpG1ERxkspWqTtRwcoEdJvUVpumGWjK7yov",
  "key31": "49zQdLvfsz6ZP4fn3c9rwMeRNsWpgDsSnNHaVEhXzxmsk313EqZfaHHnfxXnVKjZNnM12BsWPgeso45CkBCJXPrT",
  "key32": "3SiZT6me1fjM7VyVc8GKHUJHsEPdcqyaBidvRVFMYMsBTGS7CBP1cyQMEbKysjEGh6Duke6z4AHHicVw6HjKKdoo",
  "key33": "2qvnHS8c4t6rDhtqdnQbqgQEDaQScptqhdiCehHTseGB6smCGsagw3WViE1uXzenwuwtBAkgkkWXHtB6kmdJZcjj",
  "key34": "2vSjV15MrfZbtJ8r5oAaYuLyhkh3cUvKHpQTPuR8nwceQMAHXiLF5edGQvy4t8NWLARvEwpsBooJH7FHdqn9odpy",
  "key35": "618RbiXVPkRq62hksrypxas83Ht7UAPMaZHhuUbYw6awnHwf21KFYNpd8AMhouasLAVk3WA8Ed8u3JDjn4ViddcG",
  "key36": "QNKjhzU7sb5jNeQnyHyExj1C2yAtM3AeqiPxURTCFU28zgRvBR7TJudGtdstZXv8SPQLc8wZWaLSXJe383Y2dgZ",
  "key37": "3itJELvN9cpdGUbu8uAh8phX9id6uQjWYTXjZ67fWDLSxvPNoFokwdSG8ojYohep4NV2ZEZ6nxP5Jr6u1AFwQiC4",
  "key38": "sfknLTWQb1avt3fYY51fv5mL1XUHe6jMu3xiUwE9kcrsEk5D1nRKJEGUUqr6XuiRxw371pqwrS18wov9eyBtGai",
  "key39": "2FjXAyMY7hsNurfysjE75wpv2xvmopHjqNqEFMwbg37J7ddfj1MS5MigAJc4gAANbZXv54ZgKuD59Y9ZKA3vHr9Z",
  "key40": "65QVHr7QzfwpewkzPhm2vTroTWsAKHAwJ75NxPrgfudyonWxU6hVPuHHnFb8apAY5as4TTSQ2QEJ8w5XJcMYAtPu",
  "key41": "5Po4WFE2dhRZtndAMMdpDqsqpC1TGMTp8Z3iFpYdxmoq2nHNUcKTpx3WgwxMVW9kjbVBpQXt3FiJeLHWu6s66RRq",
  "key42": "26GojuvZiNSvRWsoNJA3vWpMS52UuJKaV3HB1VfG9d46e8FjV12jytgU9ZXyNmS2VuTohvXG1BuMTyHLNaZrdAgG",
  "key43": "94K3QCDRs4kpeCjuC5XKVSM6WoVTec8hsaLd7U38mgg9d6mSrEchfvtdvnDevCv5mVX6cSPmbhv65dmuRzGtpFa",
  "key44": "4mQ3p97JR9zGYYS3kowPnYpgCb3ShHG6sXQsp2jSmeMyWAr3y57vPkqfWWXvuwynhuyRdYvAPodokj2YfdHxvAtn",
  "key45": "3GxGVEbaVdKaDE4JmExSXfMkL6HrtRNnsjFEziSnGMysbmE7i2KwRFqDZs51rWhNGr3j2yrx8dvBcCvvuFHrNENY",
  "key46": "2bhsKnXhdAEjsDKB6FaPWa4VkuuXSKEE2uEPEiZmpfBkza28LpK4HVwuLquVAkUwDUEA7HmY6u1B1RKCpgEFi45u",
  "key47": "66chYQ1KhgBJP8uVvyiZ7evJcgh81GcmiHdJbSPvrptdX3p81pfexrVg4pixkh6m5147nSjVKqjhxnAStrA3xyVM"
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
