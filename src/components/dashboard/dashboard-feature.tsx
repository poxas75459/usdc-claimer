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
    "54xeWMCuJozQJFa2X9wLu4gz8Comta8mzgE44AyVL96TZdaV9nouTtgaeeYzmgSm6sLnRybsxw3qmaq2AKPpcx6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZ6Mgy6jLxMXn2oguxVitWxojn13xUpnrZmNoQZDb3i6fTRu23NapnUDoxrc8t1KGEHQFpxXvqUmaP4DHe9cKkP",
  "key1": "QLY4c6F7mDnejc15PZomYncny9hL4qnXaVRzKmmoy3Kced4wgrWJ21dG8rcsuii5bTn1K3anYPn8BVDT1mgV9tm",
  "key2": "4tjUeBGzvvBTs6Tor3qdJCJ63z5P9CofY89u8dBgBvVrRB2ZSVhBcCZVdYJjLYCD6LK8ygQJGNhqrqsHJLiid2G",
  "key3": "4VLVSxSyTe4VLVAggi7obpPNgq2g3cGtNrVA6Bo7a72HxPMxaejYWEnVncFvAxYr6hs1kxdApi6qeJnkJ8obBaJB",
  "key4": "5SYYtuRRbsAgmQNFoSPpTXA4F4fATi88NJpqKFxTDB9sfuzVZ8hhRXWCpv8oPU84rRSmVuz23Sh5cQBd9z2zLCaN",
  "key5": "ZQ6FCsV24GxYBGyFjysC62y6qihrb8noP3CJGDN4ew9twPjGbc78tryBbSNHfmr5qMKRUCVTbGR2jcJUwUMU8LB",
  "key6": "2kB4gNiC1PZ5vTjNiiY8HKmCq4aXamz1AqiG1nVa3pijk91aA896gUuqJckwM36eUpUd4gtbKxmjzDUFFA2odJ29",
  "key7": "2RFzDCKnN2AHqxWFUwRKwr8PfP9Nw6cWkr86Y7367iQqScgMRS9uRGySBFrb73bPAxwarrNYUQKVZE73UM8CbAKx",
  "key8": "5iMxEDrNLPSkaxCznDCakQBNdzSGfj8fo3NGuvHciKAguZxGzhdXPPDm5WBiApEFZFH9qaW3uTepuLRc6ByE89yi",
  "key9": "DoroffwM8nxz5bf9QbZ6c88fGpqdunFM6Cd8BZURrtieMhguhNheZQ3igouYndY5qWYCUVwN3134UJr5m9NNhXR",
  "key10": "44UGJRJ8jqpT2HpuE3JbKP2kUjBjFLkzLdMeZoPpWwHsVBUQcbmvrL1PVbJfiBR63w8rwSke8uY1gVdWtNT5YnV",
  "key11": "2XDi1sXf84hVPirJF9Lw4wZLuV3AycmBM6Jj3Gaf1fZ9tntSP3ixDCwcKAiSkqJKL7ry3sxzfSSUu6UR5adVbcfY",
  "key12": "3Psts3oYLveX211PVnyG1YxS8SVxRnkucF5ZprfYJq517jupvkszQSooTjGQtGQh57QVzNp9SmQAGz4akHPFattE",
  "key13": "5gzW87NLAdMSJ9UpqV23b8S6yptuadZNkLJUn5Gh1VkG36ZiCEbkydi4MoefmmL5hVEuwsRroivqPtit3m7pv2Jk",
  "key14": "3wBYokCxw2dp5xm66MjzUys1E5eRCkXpkzZUHpKtNoUxYpsPqNnAcK1N3HDLuRWCgzExrcB3osnzowKpvr48qYAg",
  "key15": "5KYrZhmUsyXx1DrdimfbUYsFPeyomEBtvCvQ4w14NtrNo6FDgQcWvqqXzMcKPtfD8PtkeD2zccY4RfsVpJd2iS2u",
  "key16": "4aE1fMdbKKqr4xKzgcw1bDmmNfHgSXFgEJkDBoBV9ap1WTEvsWZfEf5BjduVLMdYxNB8Z5j1JhEBj7mCLw3GZdM8",
  "key17": "3i8CdEVj4ck2e6T17KCo1rsty4Vr6jvQ2mQgmubwRnA7js9CoD9u4J7iCnwg6p1fwVrkRdF15YdsRWUgjZHdzrFq",
  "key18": "37ZxJff2UUXriv6rJUmKyLfwDDd2teNGJgrqR9WRVAjQ9NxxqSo7AQcMzKUiTwTordPXU12CESWGLiZ4e3i24jUw",
  "key19": "5JEbMSt4kxbzMbeJN32CZzQcprvzJnugNDsFHogHp6zrmbjLseRvXab1RGHWFm35QErdAGGXFPWT1AsQYEQnxamf",
  "key20": "5hecSD1h4VpYkZ6FYokMSfMqinjfHBSkhsoZnsZRpzPQRiVQzrfodPp9hYwrgmuwMryVeQYsRTeqMbsFh4i19Ntk",
  "key21": "4WD8b1YhZYmM4uom7bni7qnWPXsz2ygbrpZWcJ2LhH6hvWDbrF7vjWoTRyrreSqC4U4JGwyw4WdjTtJauj5DTT9Y",
  "key22": "5Fok35UX2wuHZKCG5HDF9ZVb4EDF5fkZoDmyNXCP8d34rotG6SKapunnAmBSq7nkhBQmVQRcuFyuABpaWuVaZLqR",
  "key23": "2LLwH57x6WNZbT4dimdJycoZA2XNAEfy2iJz5WnhpXpAHBj7hmZjrbsa9qHAHcWwcA7nKb6QwmqNzpZDs9LmhUHj",
  "key24": "5ddkzTn9qZHdb8mS88fUA7YWHjaLrMZtYj1dX9somgdtazKUQv7Vmv8ae9oxf2qmU22fGvYsqqPx6b14iJbYkGNT",
  "key25": "2SBCaV9NS8QzBpybzou6ppqopEGtegqxG9mskjh7u3PkdWbMRGHar12RiQ1dx2mv4sgARVaSTw6fiz5i9HP7cHRR",
  "key26": "2mofi1cyPMeT14q6D4Em6Zk6DYAgXcUekjGgoe3SZLEdSr4D3g3Q5QGFtqgBHmBJtyu7bA22rTcRSTYA8tu3mVbT"
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
