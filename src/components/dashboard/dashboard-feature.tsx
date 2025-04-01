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
    "5GKVkMcBzaj4XcxM3HXBosHmAiwPfDpHzMtVLPQ6hxLPTkKYEZxqrgrgXmHCY275B8TCzZMn7jjrFqt6rhAfXTJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsUpNt1RL29emzGdqKDyYBMpYpckwUF1N4v5tYGkVehNwpRqo8mzd6ngifvH54NXL5JX2nRNf4q6Ezp56CFGeXW",
  "key1": "5smxwstXQUdzRmL9F37wtjkWoB6DjLC8sD7Pb1BzGx2K5o2TxtCW1NpXEuEaTDvmC8AKYNdrGEf4mTkWHrRD5hwL",
  "key2": "4GStW4tHN9Y8aaSQ62wrmGYS1Ni5PPdSLMQAmJijsAitqVys3UMVB9kjNcRZiT3KTgs8pZkFVfoHbFLZbHt6NH3b",
  "key3": "3gv8EBcSarPBU7W2UAh25ShxxLghME5EYBbdJgCaG4XqkDqAsHuY53NA9DDerFQsvkb5q8cMsnvdAHEcaQB1MYzo",
  "key4": "LC7M9DJ6KQ5UraA2azAUkY3C7DbBHtRRTA66nPfg2rkC9c547DzfxwsgXaBu8mo2AroCzGJRNsT9vR2jXBcJP8n",
  "key5": "2WFVWdJnCB9cVA5fpsJruobLad8on8ae15SRSzQE8Qw68UTBRfVM2bJF4XErZ4KeoavRdhLDfnCFc5A72hZ6B38f",
  "key6": "2CBdPkcQVBVTdqDVzbqkWzkpzLwyCXeXkFfaoaggd5EZSaYxFNnNR4X4XungBpGwY813AkfSQ4GivzjGp5NiYW5A",
  "key7": "5R7pe4cmJna5A7Qs5DxBaxjCzoCLGUiGytmMoC538aagSVsDyRZvMPWkW5erJPMi4uW9wBkVpfgGmd8ePSwbQ3VK",
  "key8": "4FjFg2zVuNRMpVRuev9WLTNXWn6vfKwAfZ65kA7uchXPd5pRRgNrepX173mYQqVw8QW6khUE3KX4tYnbazgDKDpA",
  "key9": "4fKcbfWf736kayDLB7P5ZpN5DxTXhPs9Ru6Hoab1SvU32zxYs8MKAHzBDqG2bhpzfqxYvs3737zLuModDPNKqokG",
  "key10": "4hVNZYdoWq6wx4o1Av4SQ1sbons4gixVQa8vof3PCGqqfPMaLVJd6A7NSvhURXEagV1vLjHAtgkqK1VUB7ReBP4Q",
  "key11": "5UrvV7ZkhJESpgTQfpoy8t5zA3GBn3fYFam1BQhmx6bmnSN1xSU5qmXpGAkmVFbcdkYjCSEFGg8mvczFk6WpspTy",
  "key12": "2ScxWjch6EWnT62sQk9ZJRSa8qefNrH3V2uEhTtpgYKHs6hdBQvt9iKpZkrpoWsMG5z99bMaQxpbnjmVgeB8t2XV",
  "key13": "3miGNpJdVQ8bz3yJM2PRG85atmrsvk69xssLe1UFgaFVoJTAqGbGhHEeqm8eHQ1XXGMHrPV243G4cXfCww1B7zVn",
  "key14": "gqvMSb4LEvAW1uo8uhzpBxyoe37fED5WXEaULjHCHrTFeaG3FsogwXNqFshB5xr4pSwKueCuBtCvYbSaA6U7JYk",
  "key15": "3V7DwwQ1ru2aagLMYhtJAipeRuWxbZmuAjFSHQYz1vbL83WLvtNYwsXtZD9mPvkVDVZ4YNTrTrRMMgQZxFZ8HPUz",
  "key16": "4jTSBZo8qYkX6T29h6SGoi512KDskZ1f9cijwuQqLK9g6Vd6shoTM4Nztf62zhBEctmBcbLYrsThYKHFhWjzUt4E",
  "key17": "3eK1TfDN5XqJrfhVCEU6zjoEWCkgvowcjXHzPVGRG7nSDsncnKJFaW6QAVBpRgAjBb1FLFQ7e1ywctrGTRqVhweV",
  "key18": "4Dczxi6uncFH3oM35qHv69F4xSAsnaqwpzYYkhCoUL1Tf1wwrfMphALYZdWUNQHhGS12P2vapaaDWzvnFGwSS5ru",
  "key19": "4WYKjcqUMwuhVjYfCqMc7Bms9Q3aUoMtKMHxLNKVrjHPgc82FHYvCQU7LcsU3M4uDZtULSo4Tu9mdDGBpQqux39K",
  "key20": "4epSTG7UoMYC4Y6S3Zcitk3FQ1qST9axwxjWgmAYLBAnNDyNbuZQmsHMHThMpAZPWnRDc4bPKwAXP5mbE6g5of3v",
  "key21": "SFWVDN743PuNngzc1PDupTG6Dvcm8aFSF8isgoq3wAaAVdoJRtiFDCktAp4imdkgjFwfxCUg3K66hyXXZeEnTap",
  "key22": "EmmU1WjiCJ6Nw3LRRCVXfRmvntQ3fCGULGdCwhv6jBUSfBdXQUzBQM35ANpufLBemM6LbfKzf3TBH7XUdhAdU52",
  "key23": "5Ju2PmTJ51d6B1ew1h5Zi9Swpxz8PqJijGZGFs3TD7DBF6PCsZvgkPBrZGkPzCMm3sFkDMtBSs5tZJAsFuHtQzo3",
  "key24": "5PfamUgMSfry7MMxQ2zg2A2JQNXmBQ8znK2cyNGnS6cNkytR2Qbhx3h9qk2DngwujW7JZzbWKNfBZcyeeDA3Ha2v",
  "key25": "46o22d32RuVzntqFS7hKBmqPoPW5CY96yNffKAwF6T3p976yXvAjZiiMVcwBZit6KebepX6rebueaiqffwKkJsYT",
  "key26": "3Dg2jYEd7Jf2zzQF57em6RtJBsDjFEmYuE9wDWsxt5SFhuPDEnGtrF7nLuT4ExWkKw8RPuRp1haR5GGbsL7fAVv5",
  "key27": "5q2kMsKMS1JZNMoeRMJmYweJNynVM7R4b1sPHW84zPJR1zxTbjkh3mcd1ZnskTa7vmxh5pUkaGWy4JGa2VjpKDyX",
  "key28": "5kahkyvjuufhjVm6jBQoyWgSqXdRwTLjiDYoqY2buCMu5uaJiqvxsT75TWU9Qupfiwh9dfBQzjC5hmkacvuXH1No",
  "key29": "65MYHZ4KGeKVwYTFN8Rmex63oDp9ufkgbwzJeG9v8sQXUgTy4SrFvEU4qWnHiwLsivwCkEShtBuN36vfs2VDbXGg",
  "key30": "46NyTQ4HU3B96QCYg8V7VVAg27DfXup67vp8fbdChmBLkNQ1fxX6B144CTd4uVGxif4y6ohkxwKJVYbMBQyQuiFo"
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
