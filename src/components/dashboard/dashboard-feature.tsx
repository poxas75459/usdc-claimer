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
    "3ttP6w4WqNkr35cwC8eUYAHn659oWXLYRSdTA1n2reQrxUwvyzZ5GUtixK31qFtdbQQ8w5krCm8hxiVPtEWKkR6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EtCTrYXVZjc52dNZufTWnUqQTHt44cG1RVU8ZtMShq31MmTZ6DGTwTgaKLZBeutafur46MmpLBBcGqkLBswAVSb",
  "key1": "673KeKrh6Accga5VL11Rs13tCRNu1cwuNehd6bnfCnMUqw2UiZQVDr9ogS2uJwkyXcfyBMFDTDsapW9qarqX1CHw",
  "key2": "21CTH2hQ19jbqTihHLkS5BhpN3wXCFUf2R3dT2hr7CDViFJACXMMASyqskUMipVJxByGGEUj1Q9gGT8rZcZLNR4s",
  "key3": "1UA5qMxwWeidvhueiWc1dhuU2FuM7QXYfDbW8HwXAj5NZ8VvE7c1HeAdiAxqCHXUMGt3FHni5rVjEJcjgCdC4W7",
  "key4": "5ZKcbBGhFdR1rzfTukFyqGNXekNfg9yT9Pa7njjWa7yoiCbapn4NE7Wc8GUTmXhwEJGAG5XLAV6mD2NyXDsCLM9H",
  "key5": "4sTCnMVP8x2TKDsn1AUZ2r6aHHDiNtuDiNj6qiF7uP8VvxUUyfdJMaVZpC4MxwLeAqQuUvVefQ3yxWKByavdZqTH",
  "key6": "3HTtkhY7mYnJdevR92jXfr1Jk8CcymrQHgH7G8PrtHp4whCtv73YrrtDrtMg2xKvJqxLtPqYeqdv2DUEVU8wcanS",
  "key7": "5AAwvS9vGoUkGY9Z9bRcaMxEH4HBW85FfQmGSfBLk7rM3rScBwwv547DFZ15eLG9UGrUyhfGBWCC3PJnCw3HNMBu",
  "key8": "5Tu3MBgmZXzLf6JDQrjszXAkQFbACxhN4BQuJNNtTAGekjzNbg4NWWCSLXcxMs4GjETLkXcAsep2r3zqHJLn5EfX",
  "key9": "5PAaSpfwzCd3SEV1cdsNz7CEv1B9XkZfB1hp2VcbhM8yM4EKFqfkwKtdGWuusnjFCVcaH9Qaw8EfzRYryHSz87ms",
  "key10": "549Vh64LGaBcLykXJNCFya7ss2uBzb2Sh49uNy4FhTmXCvTtkZ3APkGK49z8vHYEGSFm1TPQ1ouZ5i3pQ9Zz4fb9",
  "key11": "4kVvxsorkgQn3mE1LAbkwrdgNjsiBU4fgZpJjE18qFbQ7cPQwrTEXiSvUcdB2hDSb6DCchhmTPbBWT7VhHjv2HEu",
  "key12": "4W4VXBRi12DfG5Hy5fWnSeuZKUGA2THVtGoiwHafbZQBkwoTVWgq5h8JWzZzYKy8AsUPewb5rzvRbM4qtdZkdwwF",
  "key13": "22YemQHMniehbCDix67EdienMAY751NZjjdsF3tfSt2GoXj7gsvQqgHfS8a4H4iHm1f1EWbFBLbpiyWSGwcQDtVX",
  "key14": "3GvdzgbPzT1GUEFzbEsLjNMyeiHFPDddQhTaT1rikMdP9qXYoe9jruVxTCM5Mz2mgBMC8dhw6v3MvfWPc9wNvfx3",
  "key15": "2s9zN7kFk4tY35qpQ8NRyMZP4W2w4AkiaMpP7Pdd3Yqi2Zc1JhrVSt8AFm5J5pkRVPbNCxTZujqZgEjzQt2VWsaa",
  "key16": "26fnwVyWF9hayf37R86n88K83LBN4YiemeYiq9cvQPJLKr9r3xAiTCBa7iYiYH3oP3HmbqcTPdePmTjKS5uWrw55",
  "key17": "5NBvu6QZtDv6YEs8RqtwHHirMVDhdKW3NxqaaspBodB6m58cLwZBy93gQwdzRu1w46N7wqa3vyjqCUENsN5RpCsR",
  "key18": "5EkX8Xm4cMUZgSVyLxiVCsPityv4u25gpxgdqUUkY3ZiTrEwA6pbxuddeMZfWqFULr7Lnd2YezED9ornnPcmmkmw",
  "key19": "2atvN3p6tfGyDRaG9A9qboXHYGCDMED5ehxTYs8ckP2DGxdwz35jUJW3BhmtEbfwNf2v2XjFq9eeuKfiykY4ztQm",
  "key20": "58i23rM8H2zUMtZBdLX7hadoun2iBTCCLqEvY7DHZSHykP8oQmYGvThG5xCQB6KydHARe93DvtfFwS36MUb1Qmqx",
  "key21": "2n1PWmWUWVzjCofGtMn7W1iVJhj1JKiZ1X2G8nzeVRLTjbe1RdV4FMtbJDi5cTqvBJGU6eqZSKfAghbz5Z2rwiqK",
  "key22": "F2AGh5aDfsLCP4cHq4hKVQALo9F1FwCZqQZ6a9wRBvgUFmzYvaKpzb5Zx82HW4ptYFzF2geG7MBRhtmfuY29zpN",
  "key23": "41DRorGfWAGi7xfYThw5QL37tp6ekPK1FksPE7DSF54ep2htKiPoKchiVXHznrHdkNEmu4tU8VKUVoJcqYYU5Ybh",
  "key24": "RrfZtGBeQDMrCEBJ5K3LtVb1njnYwQ79ayUJk8KBqwpdS5o2H1Ba4h43m88uir9kKtKDWLGya4eX1JcHoRJbJ8Q",
  "key25": "4sVBzdgjy3MBLmT142DpHdYiG2Ty7pFJqVHZjACrmLo2hqukXU5FtwTK4ZNNpX5yTTobWjc8zAq1FshJYe5aaSfs",
  "key26": "4UoYFqFxgAnL46794Z31RtHLVYaNezHy6jTWXdvwvW3a1Sc2Zi17fQywFiAh1xSXsAiLHCssdBc4KgZBZXXWCd1y",
  "key27": "4L5kns39iy4PrW6WdMT6qQ2dnWHSsqoeyEPxH5HThKj9X6MCkN3YqbnMiQTKiKSKuWoSdWa9bC1iaGd5GDvD7Aqy",
  "key28": "ERuyfms62pKpYw2MnbqfcFF76z4EXC89ABMEqToVtzsTj1dCd1i5nVGNj3n276D6G86SAJ4mD9tnKaWnX9XBfN1",
  "key29": "3CdLVeYHpxdTLoC863dJi5vP2hFw5LGa37gQRP2nhgwAtM9YxA3mMCuyP3dB2dRD154dL1toxym6kKNPcVMqfGNJ",
  "key30": "bYVC4E74CGcau3eequWGeP5mZq1aWs13LpwGQ1k8dmrZNu5bxSGdgzoH7q6RM3yCTyuZbNzWyor54jz4peZz1pt",
  "key31": "2nDcdjY9Eip6RPJEvNGGD5mZZyNzrXvHyCBr48429uYCrkR1adwQrrVtECDG8rqHbt7aXVtybarwGtkTfvMXb3eN",
  "key32": "H4EJG82oKGuuUFRmqmwvWXfMHQAM5hfGk62XfWKADwQLPk8c9iiKdenLSBNxxzcEcnHMGmeCaehfFxYdJG2g3PY",
  "key33": "3dBuuYGC3DGgt8t5hGg5Dx7JFxXwbCE8tjrW9u8qsQkXjCMrmuuXLCzbSyGSocGLoM3NBtsLoxs1Y7U8Cx65oLUv",
  "key34": "4tWc9L8VtESXbAZs7AsYijekNp5QPmndAk31SsjgPCafrLwEGqdkuVAZFDHg1LBSjPF3tDreDdeX5s9C5ZsbQJEL"
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
