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
    "9bgq53V9GqanUk1YrQvPLSmkjiUbWqUAJdN6FwfU46NDxB3hXYNnjTZxKrwdZsqm1WHSxHB9o6WfCw8hUGQG58v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NeqngdxPybYj7UzJWFdE3JF4Xk44qhSYy8zUctCyHnwZvdp7DAjzbTLjd6vRTqGXpv6SZsoXFyYMcxvAgxCB93h",
  "key1": "rbd1QTNEuXrMm7WGBHZXTq1t7LdoiCnCNCxsGWLPR5ppFzrcNm6jdgeGipmkc9DZLmf7JTGQtpnMsVCRuqZNca5",
  "key2": "gD3VNTCv1kEopKb8kgVKLT4jw4xHbUudTszpVxHg3FtBGV978jNnMCsfK1SvzGHr473envfzrj9MEsdRzYG6abe",
  "key3": "5F9MVeKQqXj3q9vdn6mwUBRghcPtXtGyncSpWqrqJQ9tjYXKB1maVgzGqoMDLwuDhnpUZjC5UfyWq3E6ThE8kW3E",
  "key4": "V82YHUy5xaSj4VzukZUxKrzwcYVrisYpX3oFE65NnRSPBErjZqyWomwfsjBK5Z1Xc54hAWQoTQxewB19ExCVxto",
  "key5": "3G4qXCmG1JPN5kMWAEnWnYGhgz6VU3badjMoYUNymTUANPcBPeauL6Rw9FL96cJVSwf67FVCK7CtL6PeKRh5LttK",
  "key6": "5qxGPSeSZPcw2TaLK2dArVsq3KpNhTnm6z7i9UckixEwzhk76h45jL3tzkq7PEXwcZq13rizdEpqxvfVMd4ryktX",
  "key7": "5SVuiDqkS4Jd3EZBBK4Gdvm4EHZknvDPfUUeTG4YA4uxyH4bLRttiQPUduHeavGdTbiprrEupT9wVPzEaiDs6qWQ",
  "key8": "21kFadzaUg3xAssC9dPkdBkDUxizSbnh61A69idytbpURbXVejRZftCcF6h6a1m8uQ3RTgsUrhpVqC85d187VKrL",
  "key9": "26iLBzDJbXbmeyUq5bUaPCvULZH8xBG2ts1zpUJUaoadPzSYgAAmVQYuuURP8xwTxfx5ta7AgkEVvgF9manDLxXb",
  "key10": "8L6vpkZPkXNWHpGegkoT6ot1uJTAQMbkt2SjuxrXAD4e8iaG2uEoTcRzAnN71tD6P1R9FQBu9GFcnWFzqCUADP9",
  "key11": "5JcvG3dtWi3zupHDbaSjPDY3dNsAuxKkf7kpbBRrLonruH4DFMXjCDae5ZD8z1XjTiyqmwUsN4quT5ScKNQs6azs",
  "key12": "2iX4sJKjEjjcZ185na14eiKVmgS3qEKLbZEEPffT168eqtnMmh3MU7PXE9HCS8FoPViiSktcoCV3cUhPCKc1Hnk1",
  "key13": "5piGy47vbU6zhsuVN2VgWbXkeHQQUXUv5K5TZ9xRPgGeLNk37vMMwUJg1JfV21LRFZsk9gn9KDJMJdqMjHfCvmJG",
  "key14": "63KNvVeMKhcmKENHSfhVMxzGULYTYeuapKrLds2KiXhNtZp2UfrzeDVKCU7tAefTXAAu7c8z5rZ4UecGaXY1duu3",
  "key15": "gmqDX2F6Hs2QgeE1cxEjqqDHk25EiRpu179Hcj9kXJ6VvcXCd4xaeU1e4QPqetMPKaYuvGBubU8cPHGvyCQDvEe",
  "key16": "49Zw5XwCQ7PqUCGE2yGde2HwjNM5fUuRsSNNuJEqrRiLUCNrzmRocGF6pwfYe2jignbZHDUfhj1whtcZSdqV6p23",
  "key17": "2T6uzgRWe43buYMfSZEpzUohiw8R49n91VKqFF8ZmXrwVTjacYAzSu3hcunsgHsFE5sVzHkxa86BxExNVYBW659v",
  "key18": "hTTbiU3sMPHz3TR7NJL2PckdtVueC43w6cfvEHLrFMgRvMyAqKwri4RnaqH1VWoKWmXHzuMsosreA3z5DwKYHan",
  "key19": "45FdBm8TLRdtLVKAuGkVmjmGZzGbhhM7zf79n7YT4wagSGQystRDhGHTTSxV2orY4TSMF7dp646yLdewiLYt6ZhT",
  "key20": "481FRsVQ1mUbc3fochSbduvjAkYC3VJVj8zKM68YtWjPJ7ePHfMtY7JSXsSdsny5HU8rjo6FBsB4XfjDfg36LSzv",
  "key21": "28osKmeXb72LKLL58R8sDbJYTxWheUgttSQZ9DJuECoDZDTJW5HtaguF5CQPMbNYij22KG8Jb14Gp4oMXd2VhKRu",
  "key22": "2n3tf66gY9ECgL1VySBrYC6TPuvsV2tXWqvYyVyCnpY22VFSkL5nZn4Riuj4pBEfBJHbE6zTXiXggdRxjDnvTsYT",
  "key23": "4iEN6b8As2zoNCyYBch1kaqv6XNbtDHVrp7xefFS3QQXLHSCnuR7wdxYkSJRDcYvqfZv6hBk9tMZLoMxNHiFDS3",
  "key24": "356NXo93Hsu2X5WgrBnBVexdU1hxJh1SZDDGAKbsMNMraXhM7b9ewoBjYutdfcH55FDjiKxZitfezEp3Pp76HM5k",
  "key25": "62LVb4pfGd1LBFRwZSC7x3iGS7hRw2PETekuKVWBCx57b5Q2uaCSvDDuRpno1ZcoNkDx4uoHCzuccPsKbU78F67x",
  "key26": "2kYzTCXzrykb9GQHee4kKvTwFBYdpiEQTPaiZziXNJWaKd4XHHAFew3EHYzU2tatHJqMRJu4oc37kYmqf1SKZJ5H"
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
