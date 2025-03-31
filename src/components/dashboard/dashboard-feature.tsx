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
    "LnHfYrxA7WvoESxryBrMpLHjnk8Fo5AC5FfRK4waAv7geHx6guXpqjzaX1gZsfYgrwQTtTG1DJN5aujKMtbAaXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVHQiqXY394AGLr1kzDcEcAEKN7LhdRNc6FzGqWWuFPjjKhJbpKBZ917tkhmntz5TUf32ZPbBGRuBsZmmiWguMb",
  "key1": "2vQWPs5BfCWoRJmGaD3BWAV8bj373Ee1aWc3HM9GYrexBmeWe662315P1St4QPFKPwS66yMCHuwqw1A3CwQQLhEb",
  "key2": "2CGupLPDkqVo3ZXeG57FUy6nA7DSPYDAa6aRSXZRsQRoZETgjjpSxwK5EfGM2PF17QH8DKL9qXV7FG871pQSHnmM",
  "key3": "2nvtdiEzvHcazDrLP8QtnBjrx1Z1T8uJtDxfLgs1bYwPQh6g7y7488NPAQBgxb42znVTb1mxPSEh6UqzrtGwCRLA",
  "key4": "5dfwgUcXbub55YpqhSL6R4T4QV6mv3YzcifhmLJQPYSVSyNBjHiBBhLMYqd6SuoU2prbH2QjUqqtYSXFa3MQ5gJX",
  "key5": "fXFKiXArNCJQ7dv75LedtzZzd6qSiRGsWhwY3zvk1h4NNSGQoLezKee8Wo5X67xfEKoXohtEyLnSaHHGMYVUtR6",
  "key6": "KgvYrcAkoQLoSSsdfZ7izU9gqtfmhzqB6kwrhUcm9VhN4mJaoMFNJCvghwSCfEyFHUxgRFxJkqbcR4KWbD1m4kK",
  "key7": "2MHXJgNYcewLwJysMzWPTQHB42mCLTMn5z9xzdo757izamGS21jpDTrPzk4dPpEQbNDfZPgciEDuoR13h3tRUn8m",
  "key8": "4TqJgJ7W3Z1SMLZUVyTjfsQehBfpAAkj8WjJVJKWC2RjMr1USHzovtQL5E8NNFRZLqSANJM95k7EMPpYhGarHxZp",
  "key9": "28kazWRP6ezd3YJwPGA6QuVkMkeWX3PaaaNxGbvt55VXjguJh5yU8HXU9iazT9mPLLDPRMRVRYyQuKB7xhT8FMtb",
  "key10": "4kBxEehFXxyVz3JVJwZiQMVe7n3qhGCQdk2U698mKQ5kpDUN162WjRKuqLciAnu7GZ7XDsf9UNUkgBrbCCE7hrWp",
  "key11": "4ZF74Fsaf9Df5DRvMBgf7EUqAQ1B92Rjgk696K7SozPvuaWVMxcXu1pfWYgAKMmTnPZnY51RcgQVXpognm47zEvo",
  "key12": "4ZPiKTKbRpKtrDt7u2MHsAkFkgqZYK1axCkpCwB85bMf99NxkSHbDm91ywg5UULZy6auJGop5c8yvVZdG2CEzRED",
  "key13": "rPjWPGDpmcgxomgwgaAsBsvh2w84nkJQGppV9EP6n5wmwoXoh6iCtMUDQBzWw3S3tqiNJoJv7uxdmBXieEXJZrC",
  "key14": "2auPhAGDhQbsRVvcczJTxZghkwHArSb88n8J5dPqcG71p3awJgCvv4ry9ytpraQXvods4omMhckJKBiPotkBLmS2",
  "key15": "pRoJQHMaxB2JmGCcWJHx8G25LmTVoYWGDk6g97xnVsbp36yEoMvdqZ2TaKpURpTwGNXsdEMfXx46wQHumNAtzKM",
  "key16": "3Xk6Uj1UcXjRZmrdELWWFJqWooiRKi2p4497hiCexnFnPtwnNrC3ihhnVw7pMhRiM3KrrFDKnJB5UhLxeqLR781i",
  "key17": "54wpCYg6PJhFxKZK9CbHAgm1goHwHuDwzMMGfbEZyQPgzWtosg3yxFketem4db6sTZkMfdcZ5nEiYiKFJcZfgApg",
  "key18": "5Szwn4rk1kakFgjr68vztzVf573nR7dyLtv3mpnGAdckC7bJFNMHKjJ8QpWaKwBc8AScqE9BkUVWybMAnWc1ki6i",
  "key19": "EabF6qt7i8zgQJm7wLbuJ5Q8ZXADaeRuFb2ta93EgsZQv2t9rBqATGmAEpSxeqj5tdY9cmduud3qeCpwX3YTMJ8",
  "key20": "GLzxiyDLSqqEAbWQkCi4SLYqCitcp8K5eLDgsjxWpyW516tUHsq31QTHu9WQWR1rJzYEWPqWFDbi8dSA3HgM49p",
  "key21": "JXrsfwLcQpAohMYbMmkBdWKdaBnp1j4yaaRRfW8YajXGuT8WUjKv8JxFeSZWnYNqAczgCnUtmrogZHvKPCgJBij",
  "key22": "59kR8KyGffyGhfGcJCxJFZ8NuwByqo73EyZbCs3P1Vtn5HXfH21xUH1KmMXmMe67EerXhq8y19sHPxF9KkqSK8TG",
  "key23": "2DycqSLamjNgG6RXAohEu7jaqaaqhbwFaEihSEkwVZbdCoSxoA1HqcHwKe4dRS8f8JhbCqmbrDt2LKsbaFsbjHmV",
  "key24": "3zzAQZsPm2Ac3THeAParkt9NUwx3gFcnToFjgUWG7cSRupo7kTs4zqTBvmspj81iC9D9XJUtKfnJorpJKLcoWmLH",
  "key25": "3dpTYpU7JbwLwzdTXqz745UdA4aiE7birdEFvW8J9DfwVNo6BkB1AKRRDRm2S6Y3VK8H2AfHG6w5kzssQ7gq56BV",
  "key26": "3JRjCTtvhs9pfu1dBHzXy7ZKNoHrfv2L7d6hinMcz2MaNKaMhY9FXUwE7HbUV4nL7CkCxpfEUZmj9ajqjoek7HGv",
  "key27": "4x62SrMLHEGFWDZKfVJPmGPBE6ABwCMWhdKH2ymSv5wrD1kfDykEF4uYkr5cq7D49ZP55hMKvAUeW733rrQKMiWv",
  "key28": "f5FA95WrGGLn1db3GDAiyCzxs89Gsxo3N9UaK5N9ozveLrEwWTMjcoF651S1hjZ8sx3wM5bTRAKLWoAgWM5Yq6Z",
  "key29": "2m63NRtBd2MtAPQ9nvef9X5QWuoVLb1WJcJ9q1MNPPA1feTeNwgGJ3mjRwFGwtHZyh6tghWb7JM9umCZf5zNkx52",
  "key30": "3ucCoGpPgZRzmUX1zTM7dWRi8DRNssaCsAiSk7Yii9mGBZJ6oKbEoJMZCgsaFEvWawPTGgr55QWfG1FohyRsr6HA"
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
