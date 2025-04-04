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
    "2zkmyKuDndnUtEc9L9XW9p9KE4X5kKVNPMA4KUQn9gQNiXgQrDzGK3BrTStHfdY3LLYozQL9hZBu9Ffgv4thaxjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSHLNPNcHLp5kHtYsxYZjb1CfGJYnWrbhJn2DQ36cV6bPWaoq9nac9NhhacUWNxzcp356aKN79MEF2F47aCA3Lf",
  "key1": "PjzamhcCC1aRyt4kvsj5n3ZQ5UDwNvyxqEhe2grZt1prm4yw5xmLxT3dFapciJbv7aqJp4vua8qQ3sez2gTjcn3",
  "key2": "3Zqci2aSwrgDDFqRtc4BAKqbce5fBm94iQEjLZe5tFU8aooUbygYdaxMvjDxGZAt1STg345AhhExJt4mUDyaNFAh",
  "key3": "4EECZqoVvt83Krtbci6JH9B9aqeTTpknnwLjcvrZeapgqAFEvEb694UH5oeXQY8jo7uwukMVcVR4esbFdoRZxH2C",
  "key4": "45YQdesot4LEiyugkCrPG4NXxzNeg8bX7oL7vLXrZjn2KtApfWfu25xe5aN32sVD5EQfFuUKp4aCufBPwr3x8EPP",
  "key5": "2pfWgekF4wASRXy5ykDvjhFJ4brVBCVksAqZBrm7SgF1GswdM3UEVBjPr9cRJNGPr9xjafGNzimyqbdebj5jZ3kH",
  "key6": "3gkSEQzXk76oGdWuTgVxPveiHBE1UqdrtGUdzsiHcRGk2PNnKyX9EgJLMsLfYhfowd6zbu964SYdAZU3e3HNtH7R",
  "key7": "5bjKxCJvK5iDnoXaB3exXyJFXNkSuBaZPAyQGja6BGaJzBfSVPPB2vsDQ7XTRi3A26Mt5REwo576jqEVNVQT44Zn",
  "key8": "44eCnPGQaH4EiSNStZgjGua2NBWcxnUcx3rjLPCNg2o8hqatkTdQ4wVTSi9aKZjFzXgnVMharfVJdh1oc2UKDq7g",
  "key9": "5V3qCdRVi5gQhmHgveHRaUL2dLEJpspNwe5keDaVh3pLTGEm3AB18D6AR53o8mjsyP5nW8XUsNmPwXeHzryaHHp1",
  "key10": "36TiC1ZCua6Ch4HdefRfqSUGFNpBovDdNMUtxJqrkoaMA6L7KaVFLj1J4nw2w5iWn9dftxaja1NH2oKeF1V1KCjV",
  "key11": "5aWm1LdFfFw88wkzXfdtAyJbnpwzN85QFxx8Vw8Qfvh6MFi3KJT5mxJSGB9rp4aCmhTuSBBTckyN3phL632UBnXv",
  "key12": "AE7f25L2fwvec9yXHUykX4rTv36w9E3VebYqhuLdRxgesPQ3Ms5T1cDmxqGNPgQfZpqavXUhbjB8s6VWkeTuuZA",
  "key13": "4Z886zkAh2TwvSJERKYa3chTaXZr3sFiyFnTqsCdp9FDqobkZ3mWSwptoBz3d7kcRuVF5bLhq1SrL9dk4WZPz4wC",
  "key14": "5A1b2UBeJo8Ga96Wpqtdhpt871GHXnj7YkPnzDTAWUXYfcfThWisyRvMCCTsrX7fTe7xihe2Ke7CXDWVMZfo3GS2",
  "key15": "4LrJ7eHpgQKq5tmRjoQjwVDvqecppprtzkZtWpCjdVa31UvCc7fSdunAZjv83z5uhG7wQikspWdf1fYJ6G5D4QbF",
  "key16": "4JnspMnccRgK8ydh3ACgxLXsVPqspcE9PL1fjJaUTrZ2XyZpN3dDWC8uQNicmRVBjRr8rnedCyFRnUFqwkTeAbnC",
  "key17": "2qApibe8QBu6NXG1SGQxfV9Gsj29uLWcZESrduPFjRYgJXDP9Wpitom8eY4peAg1YioXK4FYL6uJU6cmGpSaxiZq",
  "key18": "3JjBwgyxWqTmPodfsfFqYEVd9UMyj35yGj1fdKLqx34xcytHoi8HBGeCHschirZu8BocDu8PkL8fz2GcFUY3aw3s",
  "key19": "zwJFLkE4ZQiw38zR1GQ3LniV3xYrtXWDyqyC32WtWsvCHfoMgGDVJ6F8M3sc8m6ESuERNENBhQNAuv3BQeFnruB",
  "key20": "2Ep3ANwB9ShFHJHaU5zj1r2nNehS9hcURN5XTDGPojW6gSie9vUMNR2VR2FamLeBz5tH7ZYk96UkRtGaAe17TScJ",
  "key21": "3XZucLEKMLDTBFG7dDuZwmirAdkxn25mB1scJoiCYrkEhJsrKGTeBXBJcPPv1XmStmdwp4fSHZ5sDybtju4XNRtT",
  "key22": "2H9huQh8NQNvZpDtPmLMeduqvaURXEs6dFHLQyF72bbdk2YsjVvZX7EhVUg7c9QLgViYjxz7myginUXgumUuTDvX",
  "key23": "5xWaq1H6uGDXFMgXEEAqfXMCxYVzX8nwqyo7fjcMM7TrT7YtQX444xjTELwGTTY7z1NdAJ7TawLKDz9JDV9872fq",
  "key24": "WcnbJ8HCRUxsL8jvY2U3fdQsi2Ggyf2JscKQaGcakYFQJgM1sSWedFzKvRf1cX5rBmtA4UarjaGkMwzwHwg7jkB",
  "key25": "z5GbCxJHavckDfoxj91Xgb68FE9urjtruG6VhAHaMAPvSJVinVaJ1w7UP9FDuvyH5sjhQKr6pBmkDTyhMS61x31"
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
