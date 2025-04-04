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
    "3smQbJpDXWqh85seN7epKh2YsVVt7ki98LAWyNJ35yHsiuLt9UAdV1r2ZcY5sXXMC3qeB8vBidusFSvU8f63JHrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uC6eiL2jumxWBpqPdwVz6yhRQMrrN7oJuqnfhS2tdn32TStk7qXdkqmEQ7tvbbBdmqLU1CkY7UaMeo1Bu2SV13s",
  "key1": "3iTHoTh3ePQxBv5eT3SBrNhwLdi6LpWoJh4iHPsRqKEeUJ5jZQn97NsmH24a7qukLgC75JYum2SCoQdYruKccM82",
  "key2": "5APbAvTi3zQk3U2obxrST3wAHdVoo8wJLPmzCmFjuMjC7sFpb6ghmHQs1yeBCqsLzKit53u329m5ELvY4dFVjgyK",
  "key3": "JBtmg7D4K4Meb63xPw6FH9p6DyFCwpp914KnEfKgj8uzX8GsXaRUdB8CjNPHSRYR3uWP5rTQsh72GvfFALJhDsk",
  "key4": "3V35cuPvv1H5wAsksaamUDTpEvdu5s2p34xtpvQJviymqRe49QTkDowiuUafcTrpxDxCMfVSy7ewyBWmi2H7ASQg",
  "key5": "3e1purwa4SQX7JFenAzaP9br2YUuiGUWvpdsjxderZdTYDF6wp3xN3XUcvm3gKT4wbqULq6NesYRaN21RS1UaLxC",
  "key6": "64z6kva5JcZ6HdwELvLSv4jSevgVjSJ6EvdHDQ4P2zy5S9n5YC8am9Eq15uxJx8JDHrkdNkSfvZoEG3NDxajLi6g",
  "key7": "GtbMfvpw28tNoQMkx1yg5zhZtstFGcW7RKCo6eyK7BVhbHNrMPU1URUzUKz8VETZGqNWcMuv9N24sran2yNBjSd",
  "key8": "4gETdHrETTo1R79cBwpT1ahB57HTn5gdBaiPax1E8y2tRdne4NF9mf6LrBJ2EDWXAbV8T6zQSz8nnFX1h3UR8Jrx",
  "key9": "3mM7VNsYHVM9jLQtqnehrceUhTUa2pPwatwLJAniY1WPGXYNUaZK5SMoksLhL16eUZdcArUZnppnb9MddfqSXawN",
  "key10": "3HbLdETYikHZyFWrNXdrAdDxzfYNYwWnUnnB3GhdEFb7Q98SCuuJzwh4F4qMGHSkmXXHdCYpTU5rvnbbjBgERKhN",
  "key11": "3m1YNa8JnV8BVRVhHKyCWCH5nxdbKkkzzprDgM2os52frhj2aPkPg3FepNeFRZdGtrHnXo3JXDZ3V7X6a7NdF4v",
  "key12": "5BSTHowf5jQrzc5higHWSECnfwRbab7B2Q2rtne9vhp8bxEBkoqQJvkp6aztAAD6h982D2XhkjHczuTPng2pLbhx",
  "key13": "4HAwQHtmJ7fYr9xw8eJSvNStRgpG1A8nWujz7uDg3ezKAroDsfDDWWDvLiWMwY6jUoTEg1vmLZZy8gDnzd5sEtoi",
  "key14": "2yZ1sqykXAtHBdRPefU2ELLivFmg6PC7zfQzJ5KCGzE8jzodSJRXhE5ScbmRs1b7t316zQWTUi3dM3G5bFgTJEDC",
  "key15": "3huyfCZzJsNbLr5uLNkTC3MYGHsej61btHpC3fU4kC6U8GxHRCyM1FJqrxSBVNRo3mKgrSic9NeMTosYeP5FXxBW",
  "key16": "5oHSnLsecQwYgtHyJ86GV6PGEAMQzgDsYFFS9jFK54HgKPDQb1FnYApSRtJJAbezVxvxCURNXh173oHEdwhAvHmm",
  "key17": "bE9XFc6Rn3i8vPUpuTfAd8qYQD6fR8YiqASneeXHBE7PTMtKvccuzbpZ6UGrrUF1gejQzUyF5tzfS6ajsp3PYxA",
  "key18": "5He1yUdCd7ksMAqfqVFMG1gfyT1kGoAMPAantctZ6cS4uMz9WAYD4wsdVRT8Dooc4rNEC8uNaosMb1JZ4y3df8Zt",
  "key19": "652CsuYb2WiH5qTGrXhzufCFhjGgrEDsAfMmu6VFC9wghCnP3MVYhq2TmME7JNErjifV7c2Z7u9sENBGGGUhe59J",
  "key20": "3iiPDPnKW8B3hRtKJfmgQfw6xDVUuyF3BcJX9nsj2josiEnnTTABrax5Va5RTj1BvkNkyXFRi1FcKU78sMF4HdfJ",
  "key21": "5eU6NVmDBkfhBHu4bFv8AnAi7dWh3xSFvkCXzge83jrQYVBbkRKF1WhguEAZYHSi5GGGesahwQaBPWoexdhBFQHz",
  "key22": "2Tdmk4fAn22yiHHbN53VG7zbWoMYLK7qT1cyadmgRNf2Nta15Ft3aBpY754KocNGrN1ugFXPzJkWotGazCQowWjn",
  "key23": "58N1Wn5BcZNHcae9FVrSbpN1jnUMaaSGwCZf3eLfNBWp8WiSFXxHYmkAMAa4uQNcaPnZsV1LG8pdb9bCtiDGZdSd",
  "key24": "4jtcg7evJGiZxhArKJGuYcF7hbZoNNYq2AeqGAgCApz5Ynm8hrCLWuMU3f9QhUboPw3EkZ7rJP3jm7iWjf5ZsLo9",
  "key25": "vCNyXNnbv3RXzk8py9LYnbYaZuYEuuDTJVijUE92mqGRwYeMdxHQeJZft2iJS1Ai4ZNiaBjwBkkvej8mPQzkMR6",
  "key26": "2TUq3A3d8CKjFXeTUjeQXZhaWLG4zMZcW8AwVeke6x4tLX2DTPzSTuKpSYzdRfbAvE4Je192CBa3B5E31hXXiJuR",
  "key27": "3NFsG8ZK1ck5ast2wy2aza3ZXhYysKxi22VbKF35U73wpQohVJngkMrmiU8rZ6Xm3q7EdEi7aZEhmNcx2XkjEXxV",
  "key28": "2eKWq7ggL5aqVrNZU5dfzKQHmwrY7HT4UWfyf87hR9RXVAt9nXbDpa6LjjotHSb8oQXGYDySzQbpXXZEoE8wkVmh",
  "key29": "3FzJWtJTo3j6CDZqoyTGby4MJVFSB9Ba8hPfR1obZM445fWzJVnnWAoeN4BQBxsRUpFPbSVrS3FbfGd8BGkXuV9u"
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
