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
    "oNRb54XS61kWP9d8KpZsgtpVQ1csAPxfTwnYKKXhuMjcgEPR5vG38UCMbMBa62Gj9U9zigmdMxuhvtZmnrnwkF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o58JaWPNCKvnDGDxm9PMnyTAj6F2TmjTPYYYGv23cSRnQHpHvKLXG153RDeNKMniCXFZT4LkZeSpzJgTJwUd7cL",
  "key1": "2nozeKP6apLu3JVGbi455wrnhJWwTfnHM1SpBibaM3GQobbkVypUZUuHXgPDMCwaym2ZkdsVZWg3gXDmFNvvBZDc",
  "key2": "6Ag9cbg6P7D2JuJve819czvFNzjx4t8KgFGD2gsA7Y8Tw7BoSoddXw39H69FRACgHq91uT2paw1bDd8EK256c9b",
  "key3": "36SiBJSY6QCLZ4Vtk5kjQy24r8DfxAEdTaBp5xSZKeViriXwHA3Q6ua9DvWdZzgJBh71AcDZZxioWGnQedMBHciY",
  "key4": "4GS58A1zqkXFrdHoGG3VTKeL2dRRBXBCbsE8pvUne2yE3mxkSBLCQFzK5P6u7QYKYHhSnLiLfU9y7Nb14np6fxYm",
  "key5": "2T3xFupJsa6KDXAiYPAwce64csbCDCWFsQ1vRNQdC5DAvqeFwygeKFyLDTva1TartB2UtVSMm12Gw5Rsx4HjfMsf",
  "key6": "5TKStqwLbUuvyJTtf2KpRKeqnoDvYWjCT6uKeB2RTJU7iqoQpN4kVdoqkk6BJmfXz2itvbQhD14KoQ6kJtoJjWa",
  "key7": "5xgvkMq44uPQUxf6VxXR7ze7Ktn8wDKTPxotPByFpoGJVPxhU3AMWkbQLgGGab8V2icNUjSMaooKEUGH1jh9iYDs",
  "key8": "29WiYtrfxgR3rnrroPjY7NJSqWorUewVVrrgnUMKEhKf3pdkREuJqJ8aL56seHz9wWBQxo2eS4tQH9FXFWkbjKXa",
  "key9": "5hoby7EDmgSMhnrjswpkTd67divyuNvEJDbe9Hdxf7GAtzMSxrmbuDQiCqgQMQ48MZmf1J8c5JXhuvRWCiFo88ys",
  "key10": "4i1zZpoFCegd5bpWtPbXdcXw4j5VqjY5k9axDLCGntgKAdp9N7gCtjAUZDVae6WqU2ViSu2u4HgvCgDnfRiED7n7",
  "key11": "3Gs6kEJbazWCkqgHM5kcV5Y7hZ55QdjoukCaUrXuMKM8nWBkNcJ3AEttPsjMvrNBQsQ4DxFnjEBDkKa2egG16DtD",
  "key12": "3EifYteGsctXiVmjRCkJ5XNAxPmZi4xjzrAGZkS6B3EaL75KXaV9BWpDPhuL71cTLr9j6wQcykmQx2nr34cQKMaN",
  "key13": "ght5Gh1dMnu2GL9bznTT4mv2phvaTwJ26v96AaYgKwRVBS1z8Q6X7cYrXjeVkmfMhwdP5zMfgf88k5n5jbE17nG",
  "key14": "EbFSyZ5mncWhg51wvcaovQDz4NEyfCxxMC5ftPAMjy9ntsrMXucYeidab6NxYp6HAPgPUs9QR5N7xdjiN7tcoHx",
  "key15": "2aJJ8Sovocuh5z8K1iQW7BAp2VHvKiGTKL87exCd7mZ8DrrAsmzqs7NCnyybv362jw4MHBASW4SgSJ9xz43kteU9",
  "key16": "5PkiZwXsjTE3WZDpwbpNNkMXxdPKV1dstqdfCVLjKbMMxKUzZhM7KnhoarpkwHoqTo5iTWxNjWSd4VkX8esooH1Y",
  "key17": "uMmkr5Mwqe2PyAeppS1daN2gjzjDNinM24JcBZzzM7LDsJtun665Ltcn2brKwYtHwYkKmisWVkfjDZgzDEPVveY",
  "key18": "4hjvogU4TiEaJ2A74opM25gcT79EULPY7UcavJY5LNSWZme1UmqLx8LcskJaBnTFJebB3Qfnsmp6poMPynWmWmtL",
  "key19": "4821nW2Ze7bnJPdGzpBfcvxRsq38ewJ48PntkAoRUP4sU6eotcV25Sa5u9J8xtnRPrAarXCoWJyMW6qRP6W3vSRQ",
  "key20": "3K3hX3vagvcS4fU6RgstqdKMoiVXUfoAAQyeJgx6RLZsaLA7CbHL79xMdLvv64g7o8zoqde3KBgqsauMVaPH3vtU",
  "key21": "34xaDkiebxP6QMUa9mgGXjSZaEh89QippTEPFRJRLLo1zBVuhPF4ndQViTerHWFiRhcFTQ5Jom7QAWFdVenPUNVe",
  "key22": "2PgJq8LU6BfcQ9tCS8WzDTxfbW2LMPTS7LMukweY9u8n3xbUe51K8UL5sXPf98UKtiR3apzWkzUnubgcHaUp7ujq",
  "key23": "9GJ39wXq9ZjTQmdd2uTfF5uwW23zC9dZvsN2KXfnFo1Vhp2UT1m13PzuFR2FQFiTokuainwvgyvLwHseCoAB5pV",
  "key24": "4BH5SGJPkkhdz2CoKF1pGWedyQBBMqoDbz65U21AUHmFBfWzJKJ8dgbDd8b1nS2yZidE6TP6Nki5JU38NFYi67WT",
  "key25": "KthX2RErd8B7SGBGM6cKguh4mxamHjqCTxPEW5VcU6bs3t91LXgj3UD9G1khhM1sG34kNbWvVJVL8qgT74G1sY8",
  "key26": "561DrZgDgey221LPiExy7vGkN5V35nqQUbHZnMCaWeEie3A3193FUJ6CeHp8JqjdJG1ydGvasFcmu5bfVUJbb4Xx",
  "key27": "3JXfyibB9Nt8WevgLKNpDo3jsGi6tPLKbCaVXjxcWN45T54bYEWt5TU9vTcWsQg2eTzZEKyDRhPQ4HXUgwagt9wz",
  "key28": "4ZHdLzdU5gWPtmeyeJtrQYs3hyq8p6Yc6n1V9j7fBYC79J181Zh88MPQ9Yzpm9XUDW9Rk8Ta6Yndj8PbeDuBhXoF",
  "key29": "4NYiKMi9oQkBbUvujnAQAXCNj2UpqEGDqbs9TRMSFmJ2LJhJZq2PBUsiDFs9kDQp7JMtLShena7tMbdVFPb5ZrzD",
  "key30": "2c5WcasahqmaGvx1Lm5p2RqMvaEigAFA4Sa6JBy3YdzGgKCxzsvkYFrofoJ8nEvB59SdnkkYPNeQvixdy8qZtzyp",
  "key31": "2K9FsvzPjQrw4zzmjdbrVRrUZbVddyreicKJWzMcgtGg8Du1AwNcLvVADpgK8aFQ7ZeJympiNmcfwMQHm3Sg61cD",
  "key32": "57SYUX8Xxvbi2n4t85ViuWJ1xd5uBpXtgRa8MnX1HfzVHxkGhawWarLHwk6o3uHvVUe6yuLh7gDGiowyHYbdQXvT",
  "key33": "128PdVpCjesdMjHSE2iTzaZbAdJNyCxvgbbsE2x2F2st9pLdmvc2zRVzt5DGDbmhur8nSU8PXUpMHxQ2XD3eYXeX",
  "key34": "2LzwcJsB9kMxrDUkonnpznteMBaHvp4HpzaFbUMndczY32Nq9ooTNCHi7QL9y2z1eLAAeJWXtSPStwcGfjfoxYKR",
  "key35": "KUnavb5wWktkwUPWoj9Cb3yC7YcSjygG3Bw2ZNiTXRZoVKQVJ1yDbJV39GyxCM6PKirvwnz7Mk6rU8CXfxQu6Qj",
  "key36": "39BCKi2j1jnrkuuvA4Q9xraoAeUQXeHiQ3uF9SXqv3Ze4EL9d8abbcazirbpHHjK8oFJ8tMNWvKNSJxHXLNF9vCV",
  "key37": "3FB6MSXf74sUB5CUm8iA7WkGmvPdMTpZmhTZx4xxUfhJZPYdBMMP1e7y7g1kZ6Qoiw5pav7tTvEtC5qr5zNTDLxR",
  "key38": "57QE6N9BrjUcEz8J9e5jRfVPjsc6XW1n2trrkpkDzT5tTSgt5VefTbrvHbTfzV4mDr5nKp1UQvKHK2KuKpoBaVSz",
  "key39": "4M1GTzSCiPyok37jXFTPdDkKaxvzdLo2rF4p6MAVSon2gMjvoc9wfuXSgSJ58yEtB26auZRmJyxr7VGx7VZnFHU1",
  "key40": "3deZ8UchbCrAUtSpT4ZvaKML2Myj6FR19wcishcdDqFTe6G2zXTh14wDKZwYVYuxH3Ayx3bKChtXVBVfY11kVGr4",
  "key41": "8LLaEqDiYQ1LsSeVxFCFLYFRynsYwKgxshuTPmCxU5fJ7FAqpZt7n8HnWU48gRkuFVcLTPMVc2am4pKtsb5W3ig",
  "key42": "2NTdbHKy5wJeTXPWj7xc37iky5tSWvimJPJBqKihaiDY8t8LsijZv5tPFoT1TVcN4nUw2dbcNSNmtCegX1TwzWm9",
  "key43": "3w6fvg4MSpD7CKyay6HhY2Qx5iauCXninzhn2QoqGWh64i2Foob1vfuzTFuniE97w2GPQqABek58cwuxdT5cxaTF",
  "key44": "2jdkQif8F2LdkmC52sBQzh9LCCae2HjptnfzKSdS8phjTgLT8aEXSoRfd7tcAYubLvkFjT2gM8ztWovP7xT6p6jB",
  "key45": "2MPpkaingDQhu3g6ALfMsPeZVTpGkRib3TSSSJ3z3hpEf1BqPrXu9nLry9Nhvt8Rz4wnDpYsdFuqHKRLh5nSBn7J",
  "key46": "2eSK8CuLn5kn2qRMmbMB5TahgpJNCVEQsw1AYR5frrMecUDZf5othJHvSk91EzkNXT4tvhVi9iqQneKziE2HypBq",
  "key47": "3miUnFaJoq11pXobANBxphAy49Y7mHtqae7uPPRupJHBzhLbQ7Bwm2iX6wDwxtfXhKyDFPLqR3omHrUm9oDgEVp6",
  "key48": "58PiSGmbsSmrEqyqUPWWxULhBNy3CWQVEhJpLR2bsJwaJ5rh9k8zSRmckW3DhYWb6werFYDJmsxqgZ1sLcYpbgtL"
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
