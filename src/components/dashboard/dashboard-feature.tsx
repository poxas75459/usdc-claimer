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
    "3w9m99HVr1cRatawv6zft4tPixpxUWwSZZTkyuyaxHhLGeLWsfiWZe7J9UMHfVoToAAqU21Yg3tBaumS21CqaxBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPQuHhgr9RGFawm2NXKU6nfzt5fcsn9A1cVx86c5UZXu3LQFDuaPe1dCFYb3Tuf5ABxgvQLs2eUFffAPJUG7VVU",
  "key1": "4abaaYqq5HXjLcKDKiQ8u2Cqoa5kzN8xQ9pUhqL6p8fb62XvAYtLQSB4kn4SCKSigQgayvuXj3wFKTJXTW6ZdBYX",
  "key2": "PtNQ6fvkRfwbQ7HfwFtEuFVEKMvkaVBZYdb5SjDdRf4nso1bSeDF5mw6MEcJK8VLAHtg8gGjjVJ3G5v9ZQMaL8Y",
  "key3": "4mQHqrAQgruCudU9dfZwqmUU758P4vbiFH75eQWAzJkrMRuPTJbtojFbJ7wsvF9hiBgBTdyxF9EURJQxMLbZUxMt",
  "key4": "47hpUzVDsToRVKuCRjaWp2K4TFxN4UEQohjdKwiRZ9RuxeG834NRUuy5eQRYvJ1hMqg35SsS19FsNPEX4Hfs9jh4",
  "key5": "4SeumeLoRPoJJDY6GdBeqoxRfxWzthDA4JsKPt3QAwsXb1QaUrgMwChGkT3gafcsiYXaEss6HyEAHzGy69DBQGGh",
  "key6": "roEkDb4byyizdsy6ihK7xZrbzGeFTHPQS1doXxcyJWCHCQHd6otE166oMsQSvnY921Uq4Cvibkdei1i8QTwzNnR",
  "key7": "3yjsUyj1vc1SNh86CHLqF3pnesY8jkD9r2Y3gSbpKzvNcMV32ufZLgWwUauCotqXS2oLgmPwCHSeBMKUhs5MgLeM",
  "key8": "3GLGbodiHzGCtzQHzpg7wPCJQLvg6WQtdib97pUGK5qUkVAjyrvdnkEv5PVZAegLowW5WR884EPsoaPWryx7Zsas",
  "key9": "5JVbSGC3t5H8XSTpNRqcAEHDKK5RB2Ee3iL1pHuPyT7XnR3V3G9P6tfJuuYP76ZaZT5cJ1HLmpvH5VWbM8khm8zV",
  "key10": "2FZ3APt292F8TJA4TNX5PEgNCoYJi3b4TyiG1a2oBKP76gddYrF6D2M2WXcmkBjb64n1QeGS3t5GXG1PPZ3eopz4",
  "key11": "621N2CT1AzTKQEWMdfjsUuV3JoxKEFEgWGfK2o9kD4TA3Ft57WNstZT4Tndj5hVfNUiBFtZg9KZ9fuKXyyUiFH6C",
  "key12": "4McouBZbjGgCPymfxMmiZt1MVwAqyhor9Y1F6y2kciBPjigpeXWjiJCmQqiX6wCipdP5oqJJ17Vq8xTrvqLPKFGT",
  "key13": "5BHHKvhgGZXQMWZWkyNVrLfzf4k4Bo52nBCk2tvRqkkydB4S3WwThXRH13zwfq4kpTAb3Wc75QhPwMw5ToqiVgPe",
  "key14": "4puRbP2xwUXk9VwzExxsUFJasAm28iJedzV8XWiccrHSkWXVX6GGDp8GBZBnbVZ5ZU47448MjTTQFQPw4SYdzqPk",
  "key15": "4towrJ755atidgdB5SNzYu9ZhFw1WyK8VBqxxieJqrXgxFu1H6GdtZPHXz6UfjiF1vfqSRwuQNLfp3BvwwExEgEo",
  "key16": "2aLK445qkMAC2x8mNNTyrW3ae4isdh7pWagAgvwTf17Ni6fqh9vy6V8CFmD2vkVHy9niruNGrjx9xrw2Yvg33rde",
  "key17": "2eg8nwFzxKsjkG7gbpbpyKEecsu8HaDUsJB6gC36afu6g4cK3z3DVQP6Q9V1G6GXmTMe2uksYVcE3KuyTTbjnrwX",
  "key18": "2gSJqz9kVWNQb7DqjNaMGfH5QTMBNBfXkNF1xUrusPWvBXa7CBsKsbdrzzDchaCPbfrdRMyj1JwMbo75CLNKUWoQ",
  "key19": "5yCdz75aBDGJfJ5eY6JEZpZd6SRpnLcwTNunmkVKRwH873HXnVUqjm2q7GU6L4HFCArAQ6MFGXKuhBhubmja1CcS",
  "key20": "122m9QuB833eRUpMhjcwiuzdd8nFAWdpW3uyB2Wd3kj5MV7fS4jN9NRCzgCqHJmiT8XCYGSh6LkahrJUKSGWcj72",
  "key21": "2fxBFhzxoqWEWYfW5NRzCzFoyAw4PERWADVci7JAf6r5XZGKM4ug3VmdUdtE7tSjifsLPrqtXU2qFL5gVLf2NibY",
  "key22": "51Nen2cw7s55QE98ZHFbo1bv8xqLB62shrmtBuWbBfHv4j5pjG8RnvJWtivrNLYNEAo4fWkVSVEmNFENAnoyZMFU",
  "key23": "C892m8zrh5ZfQgmkmGfgLL54d4t4GWZbd7m1SNrzj9XNeDui9MVxGUbAwcQspZveXkyQJyajffYKaK5jJUJKser",
  "key24": "22oHFYbBEgNjWcT5YzFZR8fXFfRCc2sGCwisnDv29yy2mQnj4yofLPC2JdFPhfiCfRvGubd4e42k5TtUV3gJGGvk",
  "key25": "4NyxWb3BELsZYsJsktHqWNeqF6Jfrzx6AcHSgPTqLC6E5BkdsiWGhv2PHEjitBqcdgXdtxCiAcAs1vaTSSNcqV8E",
  "key26": "34HPYHchuoF5iXjf7HhVL3Cov1xZQPJQeCBAZ531oLZrmvghnRV9BQrN1YV9o4bgpyVSdKUv6PLMJXQKMyiK674U",
  "key27": "KkFVyruTbK241VPnGrzftdoGMg3z13SjLDQ9bP5tEySMBZdwaVBaC9GMx1UyYRYgH2z5oXxZ9ZJSo2FiYpDUdgz",
  "key28": "KZGMtg9yF2VTfqW4PsZbhN1D2n7KswSxy8DtxKSGWYNyMe6yVy4HtTsKTZj3pHsSCJMv1xeAXc1S7WqaVcdyYBM",
  "key29": "zxS115NdJ8FeS9adKQskyhSx8JKUYA5xyCn9MjmsEs7kPtBxmusgLPuNi9GMY86uS4YKcAESDPwSiBkG6DqfT7C",
  "key30": "46wePTdpPFWqbdQyRpgzPVn1tNmzjGrQ1Vc3EWGhjSdXEJhiqjPQUYto1vnfyaQKjqhTUzZtukk636iKWBwWJMVi",
  "key31": "sMyUc5ymTgCUdztpFeqHWd3WhTWCEWmZhyJExVAWb8WWJBd7vuK51h9fQGKNThSXRwaj4z58EaodrGvoRZbsQAs",
  "key32": "zrPyGYZRegkLdmvGPmc5ty4x2PFacj6zYqxoYULEnjBpXJ6YxtBM7GJ6zRNu67XHYhPiLKdjeFsPzGSnfxHu1Gj",
  "key33": "2ub8dUwp8yToy2B9mWEWMo8dX4TPx2HfovXKbp876Pz7rUT1xXiMC5DBDgvhrTeHoJTBx5ZbCPWnyiudUiaoKKx5",
  "key34": "87Mg1BxUvbpBxM368KAVtiBLKCeEc1TruY6BG9kKHTBb81Q8jqFcskYFNFsgmQhXb2oE57oMmjThrzC1mmMysEr",
  "key35": "aM93UMfN6pEBW7mVtVemWzG3eBgF7mPcmPdxDdfBbxZ8xUYk7f3jnYkgHeASZiWHuroLAh6rzJaQeBm9LmgfHXV",
  "key36": "2AuZoJfWtw7iK2Zhf4EbUo3xgA4g28RL97FQFw5GSCbjUGXhri8hkRyBU6Ddvf3BvtRuCnMLLKv9h3ubM5XijKnq",
  "key37": "3CdM9XYm3XwoLczmiJemMBQLqSeNzZ1Vk8PeQtv4fyiwykQRJArB8Kiv2Sw7uA2PAEf76SwxSJGFz9UvNcwcBvnT",
  "key38": "3ESaZZzjtkS3DLRuXZrn8jpcXPTq8gm4hZwvcuuqJQ7QBeG4LuFhbrAQXMcDQzTESp442jWfiyxUHv9Km5GQqB5h",
  "key39": "31YEMX7iGMdpiPBBxoG2fBoQaYYg891ZDrBn39Z9aWQRqdSHGeT75kpWPg5n91grgn2bWBbGRY834fbgqFiyLNni",
  "key40": "5fRwULUdqantLgv4PsHnuHWKMQrVBiQHBtk9kwkXKjmhFCx9HhkfdHg8tjyNdAQrQSrHXXF14ipc5mJdDCskdFPL",
  "key41": "2yjwgn7KaVg3gYx5bDLU1dij8P8hL1gJboPLnY7tETL2NqXrffg9489Vwh5BntB2jJQex9dfCZpNTH57gx5JEWzq",
  "key42": "4ddhE3RF2cZDw9kBJJUAeKCb9bsUmSzDMJbSYTXacwWVHKJ8J6sgTDsKmwHcq9C57Bf4uU3aawHscmvioZqi1dXy",
  "key43": "2PgPybRZ7dt95HLLzfNSCmb1wwoQXUWiwXMv1FSpQiWGWf9vYxcMNKxwWbg9CKMpDy9EoPPVrmmT9Z6Z29Sr767g",
  "key44": "3o9EpDL2VsZ8GoFaM27n56EPTKnJ5c1WMfuYCei75iEnW7WGkhcxxsXspTfjz1qk9oRko5DGM77pVrE1WMrTNdY5",
  "key45": "5omfZi5i6rKnxa7ZenwdFkmKds8xgsiGm3N1AAzGnd3J4msSScxc2i1U94jHAC1MB1ZXjaqMm4Hknx3vWa6B4wu9",
  "key46": "3MyMtEBfUjUH9PkaKokXifdmmHMxjuMsQcvyMmDP48eLYyiUnzGtHAfpMfjJZr3uns6ezxV8UdPmRDdejJCgN1gf"
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
