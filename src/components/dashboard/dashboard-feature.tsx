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
    "JNgwdEXwxDStuJseP7QifeozmaTAgdyAosUtqDZ4CWrbkM5Y3KKjJLxDmaX5vnT5ibRZQqW8QMgmDdYzP5NHjt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWLeVWKvrnc2i6mMLETBCmYdktr41ngkHSHhXuE3pCjYjbwH9UPkzK3jCdvGtYoxFTchdkohxMCK4LEVdX7GYpj",
  "key1": "3HqMxPqzw8y8VLwm9eQ3Cobck2mLLJ2w8FWDiV6gD3AMWhMzp7JAG8ysqLASMWNbW3eCKwnJ4QzQTAD4ZXn4crMn",
  "key2": "3ENzCRD6nVgAcmV639XF1kCQ5iS3qJncd1ncMMXzTg9QzVA3ph9ynXsswJY3NDMBJZfrFNAR8ivPpVZz5rhAkuvf",
  "key3": "2gRgC8eW2yK4tXPcjL6irjWw7fUkZc4Uzyx1YKfYAMZNcwnJxVGvjYumn6cTdb1Xjw3oh2r8mBFGxqkFkyQAci7K",
  "key4": "4omaMc4b9JoX3bcBX258LH3pUVYjuEaA1PVDgvew9QgkRUsjSJ3i4XzcEdWG8ceqMmvK1c3bEGbfYJq4VonqGcqH",
  "key5": "5H1nLz8x1s4kh7MXZiQY8V1mFySeXkxKtw27GADbjrJGPPRVBeEtJMWzAs5jS13veSmYYMDcmb1Y99FEVBZXhp3t",
  "key6": "3fn8Gr9jz2k8uAeZmhcQNSdGiDWkzWv9SEZWhb5kDDhbP3gsG6o6QEESSqvuxVzutbqUqCeYuWeGiWK7M5i9PzqZ",
  "key7": "3drEeWWHkSgDcvj9kW8b2eGh9HBc51QJSPmiNFfuWi71J1PyaGtcrzfTuHN9SAsdmQXG7LEBNc3qVRMDNDK8oNCa",
  "key8": "3eHiLU82XQXDUrxFzk1ZZ2otq65ALat2aDmJ7u5Ph158oRKr1zZcS5SRkmYjjoay9EHgQBZZPxszrNgxuxUXyXvg",
  "key9": "4sbMexPXnBFFB8umYhkSdSkmFc6aMJmz9xm5vkFzZS3f4zXskgMobSzvZRcERQJVaBmsEYm4mRkxBMFDC4Eg9yCK",
  "key10": "2yMwXZjv3UEcit7TaLCYLoffCmatQN6aEDzBoQ2qdE68TRmsQ9zHec2qUGdbfSnrjNBwf17WovgBYk5u2zg6Dzqp",
  "key11": "oM2HDEk236fDn7Z6eFFscEj6MWjnnUMpHiz72UKuVFXxTAk4c6SUbJBYjrbUx5pogNnzSmFjnRzUgSutB83hSnW",
  "key12": "e7cm2XXNnGimGZLj86HFWUyNmq65nXkrNXAMBcxuC9bXaeGYYU1UfLNmDTMfHasQpk9WyEtcrTirLytxmRf7tiL",
  "key13": "2RBNobqAZXD2asGoejQLiinfKLNEJ7u3Cz38zXzGzvfUepP1uo5ec41ejjYC4hJ1rcqz7CFAWvMEv2BJ8Zk2hfb1",
  "key14": "3bbDbLLDJQsvkHT2nwHTmuyLzuZSG3ZSqgRfyEFbGmTHHDGKV2pTJvvnpuHTQrhAggBw1oDsw9HPSFn1xwvaVN5x",
  "key15": "2iyAoCmTwNSLje8Nn3kXwYr575FYrAMBz6K1DNxUAnDHEznD9C2zWDAt1uptTkQFErZPxBMUi83FBkU3BdpVodm2",
  "key16": "5PTxAE9P2KysoZZN11gSyKVCs6ivuRDubEjQHMLxiFMTKKMnArbFEDgoMkm4n8bKom2XDr3v8zybAkK33ZnGyRaP",
  "key17": "ScsVv9S5iQprPujjLBuRoEFv1XApiJtJG7wZAWtG8CpY3pjLaNkxtQnwkh6cf8c1zhP13JtkNxGFUeDeM9BEkBD",
  "key18": "4dUqFfuwmbRgCQm6z4vDYASpeK72RxobCpoNEY2yjAAqP2yyFGGhv3gcJDtDETTABpnXdXnVKvcMP19kbwSoP7nS",
  "key19": "47uNy5eJ4DMJd7X7ucRps21v7R1HRBg74fGVTqPiKa7SdgNH8w5d7dSWpCLvwkfp8AVEsBfLjCeXWr833jGpJXXA",
  "key20": "2GgHsht5gyLm5DAfp57zksSVkewvEdAVqedq8RvpyFz2EuU5BJfvrrV4fStz3cz8JqRXbFCviG4FCbhmQPRC7Wgw",
  "key21": "4XedWz4AQDRND6831KQ67LHH2VKJN6dYyJMuWExPHFAf1bzDLs9STbR6VWhN6psWP4PC3MAVcr2yieAbzYtDCtpM",
  "key22": "64DqT1SHsLZrKKknVoccmeKcwX7UYj9MZ5QzhzM437gKLFg7qutyyha9CkVbJ5SLWpnZe1j95PCCp6Xvev4pb2Ki",
  "key23": "5DLQtRf6E3nsBy9aN3TCAyv3oTynqheJbMDNcTT22PiiM7P3v9annkBSoXzBAb5bVo561Lw7mtdHuX6q5GwhWUFi",
  "key24": "4UuL8PhabtfnufSW1axxEdLJ7MyP5ZgqzvQsL9S4aGzFjjeoYkAdTrZLVJc4ny7BEj7St5DcFCPVaCwVPmD4hdKh",
  "key25": "ZPMXJDPoDoBdz6HMdodXttiLV8KBTRd2m7qmqdi4hJtYvCqkyj7TMryWuV3gz4NxeDXbkj99s49UkyAhMd6aq9i",
  "key26": "d3aLBy8gEbLuYJzVnsYbKWWyvgevCXrHVqjiz5TXoqHJLNDMHaWJC6WPDNSayC3t5P43G1Y1FjWvE3SXge8ebkp",
  "key27": "4mGuMpS2YWhTUKu1cvyhQ2ELKBpntLQsJmx6pNkyxm3meBU1qFEV3caGYqVZhuZMFn8fFnN187dAm8tX5YBsQmrv",
  "key28": "2pFaBmpTHgdz9ngyu3ZRgRS4XLQTLBd9k8vK3EeLdLpfy6yWvwx4d1it7bAiBDjdoZ4Bkzi6AVwQutXBXa36FWXr",
  "key29": "36WUWytjXdPukFRDoVSG7eKHBK2fphG28ZyAgkTTVyFxnPrxGLNZ6FDEFm67yusSXgzEUYoPeh49XKQRvJqqzED2",
  "key30": "4v8YvRNp3TN1bpDL8JKSw4AezA8f1PX215oebek3J538sn2o2yRAx8gg1PmQ2Y3eNCaGwDy6HPCzjpjT34fjE5kn",
  "key31": "5rX1pZGxLujJZUn1kCKxwFPYYgc4f2VcH3M2s1YB5joiMLixtik2j9DymQGxN83mYGR4LEf6eu5hzkkRzi9FUQn1",
  "key32": "csjYS3UDG8Rvaz9jYr54f9G1s2K5Z3TgeMPLsMpu3xVDqQ2qFTFJd8uKdDzuYZjirbKotYHLMZQVdbu5fzeYjna",
  "key33": "3PdaBRZBv9DrYedp9tTuk3hxCKMYV3YrQhmYQ3MaRmvyJYVBXSqEoEnyAcULps87cUffhpzUfVrmaHyUAS3N6CJS",
  "key34": "5NxDhZnE2gGVxh4vUsF49F6d3TSr1kdyS9k6BkjGbEyFmmAD6c7xMFkmm4a1wRc9Qg4jcD9ahkNe8QF9YcBkUMX3",
  "key35": "23fJD2GKDvZh19G3fYqX8kJ7ThJ42zgt1fRp2Vs7qxJZoNdgLgayJ9ariPjvD6mywUMbAMaErsnHe5gYxMoLGQAX"
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
