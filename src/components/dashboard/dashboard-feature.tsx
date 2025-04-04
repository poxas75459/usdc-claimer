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
    "3WcHz12AFpG6ZECgVRni8K82eoGdd4B1sFczC4NzqAUN6QsHfJKZCBwdfWJJk5KTcLAWzZpvcmrPnBnNxekzTHKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593nQATwGQXdiqvcy9vdhU7mHbsWqffp1dBQ19sR6WET8m4M5msvgZxLSXEpCGtDoVBS2qo8PeZfU2x47RZeGyK9",
  "key1": "62eQ7av5uMp8p8FacmgLLP3nLa4pZe579vfq3VjHS1Tj1HZWPsbvHp7xE4dTzAwksVXbT9ax5MDVxwB3stPasGss",
  "key2": "5476UMqbxuAqtzM1F7hzho5mAFnKjXNt7g6ZoEMdbbiJwMot8cL9MgUUScLpoNDsaydWCitYgtfZD7xn2bpGuXGp",
  "key3": "5i9jXPoq3PF149AfMvDnJz3KJ1AwGL3up8ukWU4kjTiszyUjCvTn88dMnNYnfAnApzS3qempPgpEQPYTZviAzzKK",
  "key4": "2himWDmPQMkV7NT3vMru13f4Qc8NH1xSMA9YjepnTix9ck35k4zEy5AvvoywFwVA1aHN9xYVHf3FSr1przEoG6cM",
  "key5": "43SEHfXFahfo5qyDqJEzgybSncgC69Y8rNxaPLpdNU8BSya67jnh5JHUAXKBk34f2w8NKsy9qxPg9hbDhcB8y91K",
  "key6": "3BnUuJC4GcU1BMvJSGXJ3PNUHYJ5Rwshv6DBabfzLxP2PTHPZXkewq559XtrzzBkzng6CDsQL81WVM3tuPDx4GYW",
  "key7": "3yNobWrGjStUQEBmnCJ1pqypmxcnCj7WSkj5hSTwapQkY5tDaRnWAWEbkP5wjjWs1akqmzPDZynMWtnY8uQfKiyr",
  "key8": "2mTEXkgihTykmXfn4RYsxZF11VjTEVhLLhS9zfEAeCAH5MtRFK1S1bjqLAihKuCDUiQ8H5wRXLifqNNNTYkh61Jd",
  "key9": "pwCqcZ3Sk32f4aFoF7VH8nm48xANhV67oZQbSvN4x4hiPdwGKYKum3wFSwuGg2SHLyDM7sKwZH6YHuHKfiLf38u",
  "key10": "38ZoRUjiwu3UisUxU78as5BaRpzMHHfkkkgNoW4nHSnfA6MkTX1FV18nLFoy3N6JAUzhqzdj47vqRhpjfnJsvy8i",
  "key11": "4Dn6rSxUCnQTVApEXsdA5VF8twNrdAzWcYHSXFy1Po6n8FBRuScxjywSXa7PVBo9sSYJLYxvvemDJnudyvSLmiZn",
  "key12": "27VYrofKyzBctgrTAeYkUxHnx6HXkfDp775n2386UZ2k6n25H39w9qd7cNunnpkZCEmHmLA4UBuQCg6arm48Ec7w",
  "key13": "3QgN2kmL1NS2JYfsXmX2cjB438ittHWC4iVJonBGX6U5sVB6hFPcyNM4uMvzU4W81q4FPWbf2rEhy8y3DFAsVJN4",
  "key14": "3u2pNkXjzzYVSXKQqkzcgDCooBnGTvDyi25t6gQsJSSmZuv3BVk5ufqTgBwP9Eo3f5Y8pTH2234ESi98x87ZTAnS",
  "key15": "8ALwwfAcSzG6ixJsBAA4KeFqpGmoaZCKGEHWRtLKhUQs7i9WEKhNVkAqKxMURXfvcGEgeXphhStj6f6QZWmVmMk",
  "key16": "5fKcbXrdGSZifEsdaaTrAE1WEUDtbu8SeZwsPJfk8DnVCYn6TfhwAqnaDXfUtNtLKKFZPYC5rXiFwzuK2FGCeXF1",
  "key17": "22EWyuxjWiKgacBLnYKmZLaj9nbfgbJrPpBZLTEKCeCrNnVomWUepTBaK7Ak1XZWwz1BQ9eFQGxGyp34XKDHUgk6",
  "key18": "3ugSE2cBqDFJbZDqBP7cmCoK2QVRc93vWU8cRwkbw5DnqgqcZdUYdSe3w2hE1wfWwzDwFCQrV3poJ8H17JTj6XZ4",
  "key19": "5gprg4WcGVjFZTurJdnKQp2nUckcMpncz2bMLwmdNs3Nv84PJdJhP5NwxYtg1oscRLoTZ219QiJuFyHiAKkspuW4",
  "key20": "3Lv8HLvEgmesqkJu9nmjtJ5GC8WViPbY2KbnNBkfbZZmzbXQxkKnCvRXbfZTXG7kCSCn3W3ztbQUQxtJVa5WQUMR",
  "key21": "5vCNzk4GsMBS9xf6ZdimBmUsE61scByFSbqfqWpaqWFydgoM6VPpaBp8wb5DcAKnARMFLZy6dvz62rv8DhY4UrUN",
  "key22": "43LRyHLozD5kPXm2rfbfro9ZGR9AqBaAqza1AH6neh1BofM8qvz2Y4wsdcNtipENnpmpGQutsjj81YxLxkHENEnU",
  "key23": "2VWE8FPrEZ8AxRknT1x6ZrK6QvovmmGsf5zLUoZHHWc7okuivPUtYD4gs5rDvZfvsHQVjyR5mCV2m8EYLaNcjg72",
  "key24": "3hWrHQCNfCNGkGkZvqbJYvreUoh4ZztMhHVwZZQUhtfnigw3nSnFpokRKvQ4cQFx6Xs4hCUHN1W7W8k7augsaD8R",
  "key25": "2M8Tj1SR4i4zvTrGYpgoRdFJcpw5N4nvVL7Kjem1jUrBtqAiWNLeC4swM8KJxMCJ4anCadCVG5qy3QzVEG3JRtm1",
  "key26": "5a3H2yZmwejK4BbYtJz4HNu2jNCCrqNjaM43zwbG8mmWqzS1KkmdYfpQ3mSqT7jWWwifcT7NJikWjk5mhdAWWBkd",
  "key27": "3qMrV48iG11fMozdmxe71YLZ5hTQVGni7hyaDrs2K3rvjTyER47h5sTwgxyeaixMqN9eWawtjSd3qiGo651DaQzJ",
  "key28": "4w93GQgPTctgVPzkKWPhyCNsh3ReHnN9Zzdb5UySoop5sxfkhkTKRt9knqCRSWUPyzZWErc3jWdeUDQhFFnryrmF",
  "key29": "4Bp2RgavXYh8drqK6iyf2rTBpwXf17va9wjLvFRbpYSKfsqSKCWMNhzwL4LygLpY8brghZDX3Bc5jyoZuHuCHXhv",
  "key30": "2596RF2UgucamMg6gvwHrumFyPpqoXfkEujhjo9cYiqHDdX51TT3rvbA8FuCQU3shrWdVFKDvcSRUgbJGQGjTY7U",
  "key31": "5hQQRz5yDQP1JKZdraUXFADRWNQi56V1mJs6GtLV3NzBpQFWVrRgojRPQuATo9Ho7oTBboXLjby5h6UZzKMjEM7W",
  "key32": "2cUk6dYmuvQHKBtGE6g4FZNKrFCC5yfiiRCBFYQN38o7PPD1Gin2Vyv6V2FHx2WT5mfoC7EmtUonTzfJyBuwLv5n",
  "key33": "4wQon3asgtpjBc6cqS72NdaMTf2qWDt5V32fczKgr1NZq6v9PyNoMYpLJr66qFQcGGbydNJnNgWJHEM174dPUVut",
  "key34": "5pS7HikSPfz2pdU1VoKBoR8VPoaUH5yeG5xbrVx3ccJsKZnmNGwVUBoDpbTH3L1vWH4jgUawtgbMtWpu4nxZBuBJ",
  "key35": "4CucWmXyDkArdEsGFPJbFWBdCvEoZ6BFEXBe6SzsEcDKWSQMayGaNXRHGZ7p4DvDk4ghYeotJA35goFSwvFwRDD2",
  "key36": "3WHMqQRBNmUESUq6QxcDkLTR2s92T5aRmiqSM2o3TqmDqC3Jr3VmYgYPyQ5bCDaZHfvFhzpWozEg2Rbh3nA3Tvhv",
  "key37": "41v9sbtJvRDYLU5WEa3vsn76iS8ktLUkryQkEYnJTBuKjbMRJpGG9KCxwfkvcyUSBVRy5T2Gp1KT77veyZjbbczM",
  "key38": "3NK2YeawwJM8qdCmhN7pNDT2yCNQR8wVZJ5noaL68ji63JwH3MR8gAEbuHyT5bftF8RaWkwXB5KdPnorSzH9SJqY",
  "key39": "5iXcov4p7jQ1wLcCbomdLkJDcNMpi2tBGz7WVchLyhbxiYwLVN4Pd2jo2DLUXHbaAmNQPxxDedcswe3aE95Le7DX",
  "key40": "3RoeTHSuthZfynVXEdFcfTdbFXzjfejFvhYRDDxbSR6MtdXbUiY1zMkn1JoLici51rEB7jkZ5sxxKimSupSFD8XE"
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
