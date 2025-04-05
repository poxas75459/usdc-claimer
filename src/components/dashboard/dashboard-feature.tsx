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
    "3BxAQ8MVUsszwtzs4CJDK6QdvUUpicKeAtAgeGCVy4uBhuQCuQi6A7i4oimgndHntJuQzJuZ8ZbQTVcUwa1iYfbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBAgge7dCpcixvCzQQx5hC42uSTxSanKUUSDyurj1WQuwybohrDgxKKxJc7eMkBB1w2pgci3Re6tiVmfsTv4CYZ",
  "key1": "53Db29GF6g1LoL7NdZKtAeJJK7gxpB9oKdBh6EDqC8SCFMXQJQAk66QxGmbreFQ3TyWVXuhxH9ent4sCTnLmWEnh",
  "key2": "4djggAqovqG7K87RaYGm8DGvZy2kUAd87VoL1qf2LvVr6AVgULQ1447eLyriUtpyqztobxkwp2cibdHnx7UEAmSQ",
  "key3": "chLg6NYdpQz2XpuNNJ88MKDgaFDD4yG2cV4wUo4ebaPRCdeuT65gQWNPvFnZZ1wQTxs5VXNiKJm1FtVVV7r2G8q",
  "key4": "4Ktr4C1vfiVxfW4B1N7AKaG5MK9oQvBk5DrmwnWq8ikEqMvpFbL73NoBT62d2vHN6TCFo8Ku4swekyFUQq3JXBDc",
  "key5": "4wfKL5advLcCE246RGtKpGdinyxzoR5C73XFovCfEcBwbizsNTM3QdZ9T7GfbYFrWe72jJcpuwpkSKqTpZRRwfz2",
  "key6": "5FeXpXLQUNEcMHhn4Dpn1Wqvh8GCzDPfGCmxLPNEdiLeDnRE3znSkpY6TmeMeoeK9855PPM8Cz8WBGZYfdAx9Ysy",
  "key7": "fhrSommUQKV3LKpkFkq8ReqXA7Ht59eJmh8pw15fHTCePqPT8Zm1XaKdYSLRgAPB16c8Mg5DxJ992G5C82HST5X",
  "key8": "2tezTJWvtnxNJbxduYmWFtwvr7FoNjDTXk5MqGHu3dVkXsPpgfwvSG8J7QmyuNLbFux6zhJEMteJ8tGmSjRj1H6X",
  "key9": "9hPyZhGhMoENi2D1kGR8EY9F3Eogja9CV41FTgduxqh5tEf8CZA3jnQrqxGBLtmaJJajVUosXqugqMehjmbkfQu",
  "key10": "3zzSGQD4uDn94H2tj5WuvQoavZSBsPAWrVgzVqSQHJmnyomMKibq69PGfFmMYBZGFPppNt51c82oFrgk8jcDCNSE",
  "key11": "2dEZv1ZqSDoRrn1x6sgBbxmpRyLcyBRNx4aRfdgFGDvta9ueFzGEVRCgoLv8CducAiwesddNfr8zmLBsZHsbJuxS",
  "key12": "wSA67y3A9Z7ukSE4VmkyCicRR9tbfEcHRUULTPCHquRe1o8BCzT3TqLT8AZQpG7zPD3CjoWfVDXM47DPt2gkfzQ",
  "key13": "3HBayrMpH43zA1aq3q2UpmM7uTagyFkoCFs7it31R9HQSc5Uo51788LTQwnwgkLTUgMemFfj153EV2jKoz6fJHnn",
  "key14": "34DUxTH5mnQ2hF42oNYy5iFYB379vDVxNyiqxbaTgSa1G1z7SgeMqjY7X3zkF5QL56qLh2FeyR3D6q1UpXpGFmmh",
  "key15": "5W9YLSjV5xRD1X9cg4EqjgK4AWAKmYQ4qjUbPj69A4aZ8znbkwgXqEvm79VuqfCjSopCDAFyLyqxxqcyWE1uqw5i",
  "key16": "4verPgakQGA8RUanxKPChFxPsogdDYKfcKxPSgFrZzuJ4QJycybmisZvRBBHvvXU1dF17sGjYWa7tYF4U31UNkbL",
  "key17": "3ff2nc7JQAeDkhXcGLFuX4iYEgBEge9si6xU1HDtnnFsfyvFtn4La4NqhkQNbTWJJksoGcsGBNRNd3ZRuTkKT623",
  "key18": "2NXm9kPFhYUPt2iyVCw5bs2v9ruEySxey8yFWw6XWLiHj2rTjRLpBwnLQ6PcfUg2xJywUsTGrEk2AN9Sbq7M2XQC",
  "key19": "4be9ky4A1sXqC3o4PFPM8xA9sNht2uyzxfZvQ8uSH2MUeykJhttpuCeTd5u46jXg8htGxyAxLjUMZWLyX8Mdxrdh",
  "key20": "2JgzeLM3U7cz43ZDqPcK5mkNfT9Wd7cH6weF4nU7kTyxueEDt8EVVuMVTe8onPaQat3foyfkr1zjXg4bFkM21MZX",
  "key21": "32q6w86gXF7q7vqwiaQJJfH5NsJ6cL9kHFrNBM4Q7LGr7duj8kjmE7vJwpFW2LHzcHKu31XQCHcVwvKpJCYpWDXV",
  "key22": "5Eyv8WAxHJzG8jWx2dA2DZum8LB8GsC38XgkFcBwvVUKRPeNcYGxAxUoq5nKKh1s2ZR5vKhC8E15dMjdgBWqyKzS",
  "key23": "2RApAEKs3GUhSwAqEFYqMXYmoHyGJV69r8P7pFgvP3sGhfjGvzroznAGTqhCXj86UvQrNHWhkLbFaeUfKLcdU39J",
  "key24": "2Q2rCzMdcR1A7FNduUTUsasDhcAgLY1dAF2DYVjWqZNDouuQFDrVXEA7dXuqYmvaJdorD8Gi41JNMiechzyZeHRH",
  "key25": "5tcaAmzcUVDaXA7HhizC5Cv7PrNrJZZcYLpQTnArgATTXcrTVza8tkd3dJJY7UrPLzQPDBNXSpDPzhr54XG4UnXZ",
  "key26": "5gbMJ1GdGX2hG1zoQKUUoLvwcnxc1rpDTzx43PPeCFWNhJ9bjuS5kbCd9KX5WQAjMXviypLDBLrEu8wtULTW3ysW",
  "key27": "3r5tYyS8rwqz6G6yXrAuV9JokGWZ1zRZqMbH7mSPayy88HuzrNdMcmACCy39Th87S7oQgmvnNghQJp2xgXJLFxAB",
  "key28": "3rf1oMC54iEWfszbVTD9cLMujw8efSqSbrwS1TrUyEJLY5fqfYFAqbYRKNaW15uU6gCdkj7Ju7q1Gu5M64vjwpz5",
  "key29": "5e3JgchtmdLUenGyXX3og3SYiGUZx2aFAzQZZNYVBvMcn8AQ1ttX7hsLdavFFU3bWSkvABKeivuKT5Fscxrvg4Jy",
  "key30": "42wZcT2NXa6JrNZfdGc9tyfCH3Rrn3K388jfVUfVnnPVaWqkdrnhDKZYpM9FGhJAdBk1md5UpFSSPJzpkps9kJgn",
  "key31": "269XBw3aoudp7qfpEssW5NXRLNr9bcGj76ftabEFkWdcHAPNYvqhWd46kAwDbfsHUp1AzPnMruuvJR8ky8iLRxuJ",
  "key32": "3DiZ2s9rMGm2iKKdfRUpUcdkdRHfKw5rhGMokEid9WdNfztuNWq1z6MXVG9ZpKao8B5B3jGBioeby8bPGta4Zrdf",
  "key33": "2qnS7fomx5haaniiQjkvr6eHSmsX5VzeqgvnMnsdmMwgfXr4Z9XP7sqevAkjpCcF2XMAXi61q9hfUoSoEfHjeSPT",
  "key34": "2nhNQza39evWV3AJmWT6zSH7Noq9EvD6rQT6EMdBxo2GbGEDwtn5gqwCmiXuPbWVCnAvfw8gUQ74SRN3Sq5Y7jA7",
  "key35": "45AQtbc3SNWHfnKkyf6i3HBxmTLaPpJ6KMRtZbaWvhqKsBmyg3EUE8Eq2TnvqNc8jJ82KeYR2mWkujUb6LFaFxX",
  "key36": "54XwDunKUAhbJaZNgecoGLJBeEzSZhJ32YMXctjssjw4D3AoDQ8dKVq2hahumSrE7ovHH1JJfWHeevmMYdVzejuF",
  "key37": "4HNK2VzL7hDnyQ2RkTHMUHdvw1VMj6rJo1TP2sFPcSJsZ9839jLPXAMYq6d7p1SGHM1pxCZKoDotq5U33gWfugr1",
  "key38": "3G8yyxcZD6v1ELSxkeWv4H4WviCrweFhvZPWgZaMmVCwynmAtBLdCyZhZLMB6dpiXxFxX1ZnghV2pcJ7EmEvygn1"
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
