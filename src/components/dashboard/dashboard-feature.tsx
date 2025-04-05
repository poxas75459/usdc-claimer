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
    "JqUUea4WTsc91yctfAji1M42rUbS1XzarWXjRRNAkjnwUA3fWnm2f4Mrx6VvzjbYHZmSSuRK53JKVhoHaEW1YE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDNmTcVwP6jDtwxYUfn2sFM3JRyjFWcCLRrnfqkngHUMKJ1gu9XvFoZCsuce51myB96NdPjJV6ofdA4CsDYbBWW",
  "key1": "FxFRGSY7fCW2NPZyDP1wt4U6hKCufdKLD1JJhkTtZRnbQNaVY548pzT559z4wYCZMDtSLo56YDy8QdxvbR3Rr42",
  "key2": "36wfPivTgxG8YYe3vYD4QQEgP8tZYVXKKH2nByirZNYuZEag4bvt85irV3qKgeaQUTPHryER5s1wgknXkNHA1kSq",
  "key3": "5LweavdRqgiNT8P9L2fpr4xDhuDmbiY2t5AXeLCAjt41Up62VYozmag9CBcbJuaQ8ChdDyyfZFEGqtmSKNKnRQwS",
  "key4": "koAakMWRgwcmhwUS99vixfVfKi6TbWRUD6cqK1aMVng5bymEzGtZvHGYBW351NbM24qdNcezvEf3dpK5vWUddEH",
  "key5": "5EWuNdXbNPPNCVfAYyhKcBfAZxGiXf8hVJrbvdWDNxz9joSeApuDfcGHpifqTTbf8kY9KnDZL76vcquuMMwAP5D5",
  "key6": "5t7PkYyBbp3mb4QM6VbooaVDgAN8jhHkeS1uEsNitvQdwPHdTA6cfcDeuG5UDZqmTcnrsY2u8DxzQEqpbu3PjUaJ",
  "key7": "3qrg8fSnsWA2KufnsRUjpJ9KLSkBg9ktUPeJx23bReKh8pS5QZWZvBASrEgJuodUGqT3NUgxLgJ1MqF9coe3kJCz",
  "key8": "432PLjf2xtVyYDi7NToCxGDvCibGAYX7TWpjMXKsiEZaJtchtJENK5shwRgZ3H8bT8KWonU9JH13sgxq8XGHxZDT",
  "key9": "2HKsXSLwHDUyhgf4QZvDAUzgPPJsD4yg6V5VDD676MRTnAUcYyUDKMLfDneDHRoVF8PoL4gvH81oXhTpiSekRwtQ",
  "key10": "3b1FFCyibdbvNdsYkom8hZ3g3WFZV4TULs6L8zKt79Nf5tQLs21KoPHDxJXo66oUei2DbvgQFTiWYe1tQQrrv1vn",
  "key11": "d4M4RoFkJLSqyH1pdWpei2AHsjKoJp2px1ye7WVHnQ9UpNyKszSHaN3qMtmZ7rm7SEnqTn5tAJ8YgQp7wfwsdEi",
  "key12": "2G2YKZVZXps4TeESEtV6VjizKyofrjD5bXv1mm6FhNK2KSeE3ZwgZ283QCnwYqgCDwZdGWoHcThXszdEhYwYs7Aj",
  "key13": "55TTqGcHuCGZe2NZGUQg86rWLb5N7XNzMC6HsPhTJvezyfdsJffHJ9gHgDV5Cggix2LXodZE4eRiwp5pFst5wgK",
  "key14": "4szDvECSwPCfofCqtw9mT9H75ftJh1h2jqe4N1TmWhS3HByRYb1mUdWrJ1YJ5s3DeQtPg3QW435CjLLRfMwV1zK6",
  "key15": "3T4VxLpVDSEpU8v425t2TG8n1516EkDbAys36cv6eRdc9My3Acdgqpywq8NdyX7ysUKxtqauH1SH6t2MS6Gkyzdq",
  "key16": "2Ebv4VP263tKYVsCoK4xuhtcQA7qWYwZQhezYKyE1TDPj6bpJKbyLdTto1tACWDH9UX2XthcNRfvCX8G31NoAt3x",
  "key17": "2DUTXF1nuxjo56ZRsMBYudYCbeQLEFDQZgCE4roGqeBqnfhGrTHpPpCPtockz2QX7tLnYQnuxCSbQgAsGBXXc9Gn",
  "key18": "5sqejNq8ddgUbCUUyejBC4X5Mtc4S4mBLoP7E6Wbn3U9SPcnJkvUpinhyEnDGZwamJZkqqTH4jmnQ6bkehFt6LBN",
  "key19": "3VenemfpX91rEP83QkSb4TifWQWjJUgFW6B78V71f1yzYvDD5QpLRgRbXuyaHKeRzqouwAyk98DqDeurT4zPitJB",
  "key20": "3UReBtQhLQHdM8ntiAM7AuvUodvBnhfNxZj8KmnRS3wDvB4FPS55jkL9c9YKAgd7pGL1ErvAN5u1SQze4wKatiyZ",
  "key21": "2HmRsGZ7A4BdPAmMLCYxjGsDDM4gnUHP7rUnzPb6ZLEuS3523xqqTSXLrmdTuhw6uSprC3vtD7zQieLcXx5iMoW1",
  "key22": "2xFJuCBc4G3HXr2tHaWDoZ6VBKek2ivkuVfo3fcyU8uEJ53rsxPqRj2U8fKvtb4HMVyTjHerBtpXjbJzw7f9Vizy",
  "key23": "3KQr248tGyM8aCggrZiVrvqBudzTFUgfeuKMm9K95dCBJPxvRYs38Uj2P3nPrsCQ6ywLwfSJvDSmT8BFwxNWxraN",
  "key24": "5oBRiaBQGCkonkMGfqwwUA6SceVCun7Y2eQRjXjpqSn8S5qYgo2bxiU3XoAR2yraNzkiTgseXYTNdv93u1Kd23Tw",
  "key25": "3dj7yT4hJ8vpTomq2gUMH3rwoDyXYjdoJMMXtpnfWoh4QuYq3LQ8AXt1V1X9e1HN1YgnTrXhmiZMjjnFe9VgN9Qw",
  "key26": "5FG575bxKHjQf6pyUtVPv2D2Z6eJTitnxoPHHisU17UxWvPYZoK8gFZNjhUmpr8PLYZB33mPzmodthY5gfQJQj8H",
  "key27": "3jYTQYPtpVRdXN14kdqckqBfSRfgaCzL53HBoTH2MSPpbbQFCnVaAi1hVXLJvSMc5L72bBKpgok583zEF2kWU5y9",
  "key28": "4NbMLr1SXyrofa6ydwTKYSu4MbtXQw6bsGjY6eqsEwTYbiDRTv8geKYHjW4sU76VCEV62hqpj8ZPRgC2JVztJcRn",
  "key29": "w6dcGJYysUgot59VzNcv2GytznEThgyMoFevwjokZTVCVHWjUckd5BhF2EXatRutraKCoXX8KwwcSt8o7gtVanv",
  "key30": "4QjvADhpNP2cYJZVLgLoXaGQ54SwyHbta1MzqCG9RhrrLM4L65xRh18TKbW1MnCi91T8sTT9hm7g1znFAU2GCYRw"
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
