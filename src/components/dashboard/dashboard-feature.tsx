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
    "4RCS24fNUHYmaycJmFqzLFBgxqR5vQ7vBqHZPhZRruZvpS3NxGNRTXtDwmaV8b8eyBENaGiCoidkQi2jFh4dwrSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nX7Yoi5soGamS2JqeJQqxUJ9jZsyPk2VTBis4QHZQn8rANvG5Kyf51Rq7w5yUwDZ8Xmw1wPTcbJUZsjMVr7Qz9Q",
  "key1": "3WApeup2CRJPSLatXnpKJ99jDz2Bh7hNumRkn3utiNauRGRWGuwGvaczRLtM5CgDkGFY454ChEXz7nCGura6jKsx",
  "key2": "45vPhkzJ7cbtLrUbypE2yh64ge71EncvLVnU55xfgwEbKWEHqgSWrYUK2vZQmD47F8WoBQmQEn7HVNd8m7CgrBYh",
  "key3": "4thcodBBnnKhgkGX812MyA72YnRihtRH2Vprtm9ynsMTqnyBegjTFAC1nBL8k8iXCLdoSDSmuYnJhQFJs1JwkjtF",
  "key4": "ZEfLdmnfNcAMVE3jwb947EbZerLEt6wcrS7bN7wqVRNR9t3yUY3HUdxcpqF1BeVvyt8QYybhPQmvJgqcAKQy7pX",
  "key5": "4nZxG3Dfd9vPURA8AavKEKaZBHXmXUVhuF7CVzbwoateJ9MM3vEoK564AHUcu8Grs7PUzkPnsmC8wXkSFC97FBvi",
  "key6": "54oLDtuCcAVb4jAgXebpLQh9476EnXnGPHSHqeZufT85KJmNoPr5RdLBWHRdnw3uAcvkuqDtWmTnMXNaYF7YhcLw",
  "key7": "5ZrPY2H6Y8rueQY41P52K4vvTVpJQbrFgU8HkhKMbCoNCxtEWH4LceXqdKbZcs7cS9dotvLj87ZfR2rPvhJZhKrp",
  "key8": "5J2hLYLtL2vg9ooo76HNzXeZKRwqNTJXtJgSmykgvXEWvkFi7kiN8Xz7oP31awovy6E1hep68VRmjSVrLhtX752w",
  "key9": "5DD4Cm7zknuh89MR2sJcgVGwtavYYUkAEiyDyakRCxTo3Atd2KfMGnUgVXRudF9a2vkotWQ6G3MKiJPfpDMCBSFt",
  "key10": "RYWF5i2Y3P2SM152w5JpQi4ehCSTL2Pq2W3KgZRvWZ3jB5WL5o37CKwvYgGGRGaiHCt6DZyANAgn8E2tAiuBPDu",
  "key11": "26w8iczcBCxAGpGeaUqwiaZrs63AnNuNaVNtTvSo2kRCNBrtdEcsHuKZ9DPEvrutePr1csEBWCfxnvtPxkTfmxt1",
  "key12": "5Uf4f2kFTypQ4zZyCNS3TnXiUj7dKXAGZ4pL6D7WQ4iGQt7ttiDiYgQyMDu9CJrZ7eh5XYrkwU5SqYgmxkAts3Da",
  "key13": "5Mie6mbMHXzGpEw4w6f92wKGMJdXDfo1V4c9NS5uTbtaUcHgEgJLZGPQ6jav6Gi2Cqqd1LCdkik4yU7SxueMFprA",
  "key14": "53FZVQ1ujLXM3ovAY4TMLY8WWMxCCostg4py2MuNKVU8G299agXYuoBP6p26aPQjnMCi6R3yUGAD5T45J5HwV89d",
  "key15": "yYZ3ozejWEWK1X7SfUvtP5DApCLZBNHidtJ7j9LcHYugdk28MR5ZhLWB9r6qua2ZxRr1Gu1fSj2SWftoYTAo8PF",
  "key16": "8T5VY4VXRZ7kP2YAnkv2RmyYvs1DVDK918QJ4vecqbCGYwzCsbk3UkLDyL11DfbFoohsKg3aEFqWfKsazLUXoUz",
  "key17": "4ZowHufRVRPzehaZScj2HoBSrBDnDeSCnwne84dh2DWTjYtkN9a4n2k4tfggHNf41zbTduH4pDSn4MDrDzL6zmrT",
  "key18": "67JHbwi1dFiLRnGcKmSjvh6axTAFAXo5wzbpoUG8QP1M2u8Wjx24vUTFpYvQAWfrzLQvPUDytejxh6UB8XNbUg9Z",
  "key19": "7rFW44N9qJCUdmm9CUcaDioJB3eG4MVZxSxXeYZXJBnGV8wvnft8pUEpusFm8Wgew3t39AndVJVyCthRJuB5y1n",
  "key20": "3uzc35o9TTuWQkA22KBWibRvJ2ecZ3Ge5466oxwjJW4E8NEcXvEMwHNf2es4zPinXDxexTcnS7di3wGDkhocSHxn",
  "key21": "3JympkHQK6Rrb1tztwh42envaLr4uFHG282oninP6cyzYWBrJwPYumQFXbR9c4czRdnsLVVFU4bgeyC5GKgy6G9",
  "key22": "32ZBfDHRPHt8qiUzPV9sR7opNJgWybRFsRKaQGS9TXUfapCEHbDkABBCGkt57pwC3yhjBm1FZKYyFu9jidgsLyhc",
  "key23": "2rSza8Py3HTod5MTK5iZ9PoLFHgHHAPwCyTHcu4JpbTWGGhN4bxqLwfw9SSAxqkAV4UJZMZ3VNsjnGX9RtZyjMyU",
  "key24": "54GAJE3nvch9RdLMQkWV91TdmQ1Kx5LRuepnT5mQ3f1XZQ3bNrNHwNte1MMYizcVx2Znppk6v7q584fua5An5FHK",
  "key25": "3HB5fy6Re294jKBwqRTSQ8maqHWxQRTmQmfqEtmNSHrpx4AcHCufMhRRPXoBDNGjp4xHDLkMjwJDsH1dyDmoNS5Z",
  "key26": "3PdybQSEW1uctcJjAxgTpk3zYSWSVEYkfjGkCdWqWiYD1jDc1k7E2idoEFE41JwsHKtSf1tAYQR6iWvBtwakSxQY",
  "key27": "Bq7fmqPMmez6qvDiDq1RvjW1gQ6eAcVPd4tWFWM3pLGJLd6pkCdZsA8XrGsSXH4kCtahZ2PFfkoyWyr7F9QqUw8",
  "key28": "5CLDTehAk5X8Y9fukVH5wyczidoZJ3wVGdWDEqwn5cduiEdE3QQ8cQeMwaKKF9FTo3tCgncb3E1fFQHmQYfGvJmK",
  "key29": "vfHviNHDCBsqReUytYvTHcJpiMA6PLjLSSeVTXKnc91LanagHtdgqz7K9LecgVEgzJRyG6nwudfqkam9j4vju34"
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
