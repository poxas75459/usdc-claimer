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
    "3cWojoaaJJUwkAejWMBBJdwVADvRoAFx3FhUWC4YnWAm9fC7WCWEvMiD1d7kFrkF4rYTPkQKR9GHUpAgFPGXjrLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5eUoBojc7qCsz8Nep7iQ2nT8Y6eyEfXxukdQ6tTJmqoUjR2MGdgQ2keMxp7aKUffurpXTEZ5TH3NzL8XEjULbq",
  "key1": "4GS47nQuUfZweoXtwCe1dJpN9w6cnYZJe24ZHm5WtEfXaHhBZ95z2gK6qYP6MB4qmTQnSiyzqTqwVZQDdoybtKoN",
  "key2": "KWpxBh5Uh14Rt7MBcuGS7hrS42AyEkL4ZwNjoahKamUjQ8NejM4kMe54nXfpjoqEBpCd8zxUjMNEFA6rAV4ghAD",
  "key3": "STuCYxSE3CmVmznfDiBVreNkE3aPJgfd8sazFiYdCgHiAGAU12ym1vidctbj3dJqkxo21KuMcJMj3rD5MEoeGMu",
  "key4": "5qwaMhdFrNDksZxe8kgeMZaASaoeZmTYPKy7bYWJM2bmV9ZKPvutKqKyNZCzFPxqPanTwdWrbtbZVUq8qFCgEZsa",
  "key5": "5hxVwKTe42GPpttDAHMJsTvXA7vcdRbmKFNPfeT2QjGyd4oAhZxCt9fzuo1zDMxEspmdT5ormguRyrWGpJDpG5oB",
  "key6": "66CERt3mgHtTFWEdoRx8iSXqGDK3S1EYXxWHYHBhmqnrQwjVyq2Ly1W98imy3bi8tveZWcUjqs4YyuHfmpbq549g",
  "key7": "2xm8DMt45wvzZ8RnuJ7co8GzWC9Bp4HNkcVzCkndgqGPpG9aUf4F2sscub1a1jQ7XC5rxDZF5TUVsWQxVU2WANDY",
  "key8": "4RKEBLrxuEQZHMgzRGAmrp2YhK4vuXjxGWmV3kni8YhFNXSGgFpGGNUhQY7299wXwWQ4puQcXxxzp9DGh2yTSVpX",
  "key9": "4P48RdH62rWAbYzRcrx85ZBQAmEsWNbPZ5KoiLG7zHcEcPFsb5qcAqzRzBaviBQ6jQKBZ75tLa4PHAWrEgf9WMWw",
  "key10": "kgoksiQ82g1siX4EpPLYQSrMe9MM2mVTjyEvGwLBJ2GvU1ZUKdmGxYF13yj3VUGSpTSk5W69EUC4tubK91W7LAT",
  "key11": "4fQZ8cDUhLGyCT8BJ7za9Moyg6pabx966gMtM79Dg7b2TsNXbUFrakit8hLJykK7SJ4W49kESPb2BxavjoUjma5i",
  "key12": "3xaQ9x5B8zgssMJJ3ubL3ENg2QNXk1kJbF6VM5bxq6NpisJvGB8Zb7qFr1vzX2skBqikP1tQ8JVoUGWnEqTEQkLy",
  "key13": "fmitVtoYB4FtyL9k9hGVR1BiBJvvn1uiHdZkKrDnJue9JynnCRFTQzvVKe2E2fRgj5VWW4kxerNyDk2SkLXw4GS",
  "key14": "3UP3BVPmUmg4Lo4yidXhCiJBjP718BZMS1k9bzzBQzWozBqsgdL5LkVBUzhcKQhVjMrG2ghh3iQM2v42mH6vu15U",
  "key15": "3nhDHx2iK6LsfEigkkdzuxfR3Qpjwz4LG8dZaPMBHfRj5WPZNg55ri1YnRp24eJ54XKnQY15XodyDq9WjBaqSac7",
  "key16": "4hHqp4UwL2mqq7gcc3ePjbLUTNaFjTjefKhqkt233HfV5S9xK4jAG8tgZV6wpc4V7v4YLQWJqGHXmZDZwQLMkCAM",
  "key17": "4M6JvEA499pkCkjnr25hUtsnvTTvBaGmxJ727tduSeVbo1xRdQppsC7Jfw79SNZfVBoHWrhNy8t89VA3XicuxyjP",
  "key18": "5dp6uNz8LMhkRVV67tpSSQdj6wawyVc79z1BUeck3UY8SToDTgWHttAoRSpgA9CPwNJDzH8ibEi7YZe39yBVDWxN",
  "key19": "2SpRNjupAFDysCiZwz1rc1SBCYEysQ2jwmTqR1eLm2uevbd5DftZuiW1KArdARoKZmaN2doWMj9J2eHdjAHDVbo4",
  "key20": "2SWDuhpfkgur3RiiM2Mwy6GwRhuAMgeGtgt1N5NhMDdU8qEpG3gf4GTHfToj2u9Rzsq7wAJEipDfaimGmmS3N8Pk",
  "key21": "31zgXJLjVHra4FoBAc6YYzwfZhLvHrFkwWbPUYJkjqM1Ac71NwN1RBKop9GsHvT63ycMzg5PE8oYmKQ2uKHQNygg",
  "key22": "28A9M1esuAifjZHSUi7oqGydHcVXYuyQELRnqLDrPmfvtnEQ7BvYSkfESeC2bzHJ5J4aWQRRp4ASBK3YDfmq5t6S",
  "key23": "4ifGn86BKhbDgNMyzFYKCgL2jWUvLfN6hUxtQ1CQ8giwyA2ptGYakfRt1ftd687Gd9vHrBhkhnp5BJ38kHMTqySa",
  "key24": "4HLiCyc3tqgbGDHXcVDFPQssuKK3EyfgTkzApo9rGpQPAZbRrEY5K9pZ9m9ARzpH4Nzz9duUhAaApmH2fpwRtfWj",
  "key25": "2tahuDkKcN38W9cG92PDctaMfCiHWy5RigDj9udJTAPddYt9AgcXvF2XC6RLJG2YbLuYYYJo9QM5NdSPEB3pN59r",
  "key26": "2TKtZSAXT4Zm8BxFc6p9xVkGc9DruT28BfCzUKrg2mWLCBU1R1CeYtuCKzMwrYKWxybKBNCYnNxM5EQ2fD8cvXbN",
  "key27": "2pbn5ogdiHnviWuN2yGSf6HJwHYM5mn2iDMaUWqFf932XVmu1W7TjpxGtexcmDbbjoHkb9jPfMNbXGvKwt6ctqo8",
  "key28": "D8ECRk7jh8rrzrv6QMDMLCGHp6SMcuiVzHbWq534D7jbqrCULsv3rvwgP7WW3TJXASAmiKG8sy1cm1dwqQUqa6V",
  "key29": "LQxEoACdk34UPijsSgdiX2r1rGvh8iQaJ5rRXKEUKv3EfQAiQktgr7TirH1EaVPeYFNqMUipbJVmjYWsSQFVHpx",
  "key30": "jppdn3QivZXaghjBnHcyDPUsBEWV6Rwb8nA5SwshqmTUCyBv8JVAVHJKVjSfXmhD2VhHYVTSxEdhY5f9tedpdbo",
  "key31": "9p1pqqa5cJnQ5xg2wNUfimsVep3W3GtcfZ5VsJUfMdb9DfTo6bqkHB5jhj21n6SA9BJZZsTMh53ugr994miiZvk",
  "key32": "4H4vYAuV72WU2mNAX3f9WEP3st6B6GReqLhWdTN7Vj1tJFXNzGPSmRjuwBswwyLhi2F8HVHBaeGNbVkHhdqPFYCt"
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
