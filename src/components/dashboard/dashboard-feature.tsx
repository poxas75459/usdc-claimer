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
    "4wauTCeFqDh8GTDDAG9P8UDhKNgZzWyGw1ddjCqqVhKzUBMBPbYJoWo5UeupmhXhtoum2qZPwbiK5fmUhQZam2pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yVGoy7M8ArgziGeEcmVZ4MzmBNDx77GJ5GMqBJPLLY7xBgogGW5ECB9pC4JxWux7gdNsdQ7sGrohaNrL9tCUHW",
  "key1": "2mZZePbytAbBM4QM3Yf2PKWotG7eUNrvukArPuABQPkFR548FX6waZXFoKX6nGiFrwBfgmupWKAUzkeB2u4hxwQp",
  "key2": "24CHySThjA37QMKhPnz1BJipz8NErX48KtuLXfCDkaQZADufhQMG9c63iPzj9SuF2DscVKQNFsw8UYnk9GJdWrR8",
  "key3": "5fUnJ5YiyHbx4TKTSTQ4MV6iHQqbz6aYJQBPhkwjPUPP3fqTXBrDLu1BwgoUqRDJ9gf96GwJMCw8aAwrh6eR1ZGr",
  "key4": "2RdzzWfAc3h971NWaL1NN5CYroeqnEsA7NDv8MZP69ew6Qku8yvnYPWysDLWe8LZe83RMCYZZVoNUDCh1faUL4Md",
  "key5": "33tcqYCkeig4LmPfoNV2hHNBMzDgzZLwpHa9jCuRsdHMiiaUr13tso7EdNvm9XMc9ycFV6ytpdAt4R98GQ4ScdSd",
  "key6": "3SaLgC45DPpkgaZCxXtK5ProuHsKprfBY2xLjdaNijtvHXmV3jvzbisL8Df8fyTPge3Z35E1HLdijsuxjeuzjoqs",
  "key7": "4EftZEeu3govwuqTkBHXWKQnbF3ddFdr8PLCtgQwW2BGHX7DAqjHA9HV1CQgTCPqnZdmWMhnYJ9bdygULUZgUNPv",
  "key8": "44W9MdKeYQZEhhEaEh8s36WcthHNh2UrpqX3W4qie3hnp57xi7H4vxLsRS2T6QRNDHfJTvGidGMUk2Li4h9bR6rE",
  "key9": "2xVHCgyabTyHDxYfYNJctd6exzWgB2Hgpkz4JxoABwtAGeasQUqj4WkKoKgq9bZeHnWokNWZpyXZBoZZakLTgKLg",
  "key10": "5y7gNy5arvx1pt5AQ4R1YVGdjLumwPY8WusjvvBqqP8XiUDoabahgZSBhyC7F7wRHV8X8z7yW6LfJ2wTCx3D1f6f",
  "key11": "E9nz6bn7K9W6Afx9m272JmS8KBH2zMUJzHoXJuFjhVVJ2iEjWDu74DKxqFzTtoBaYozsDDPhCSKsWaQ77GnLDqC",
  "key12": "2ZZq1DxtuZu7LJKCrVSLovmeuN12LGmLuRtHL7ihGZLNoQq59quz3tS5TULztqABo97P5nUeCpdXvMdjCJuvWDDX",
  "key13": "2nfS3Att9J7DhEmvDYxjYTXJ2gyVtLYE59Ywg6dnVkd4VpSdBpHxJFzRqAooDe2KMr68Riw6Xj1Qk7iS5dT1cVMP",
  "key14": "2pnEctVn59PAeh6xdVZ1uC7WCwa5j4TBRwj8WC2CkTS3geWy2EiSnuK1wGnz8jgvrMLEUS4w2Xzc3MZPsBNbzvDA",
  "key15": "3YzYCfPyhRkxL7uRgbHMk4xZwgzCwYDQMLDpoQgd4iVebdNWEihLMhbV5cPijceSktrfXEiKP5QgSfrMmfeamMPt",
  "key16": "66tF2ikxaNC82YDKiBzA3C2o6QsCLPPZWBss59MeSuhRrVwEpq1QMt2RRi5QwBVeQ2HCgoJquhbHq38euwqvDmgt",
  "key17": "5uehxwKTqYjosBSNMUjdhJYD1DBLytFsp14FFW7Z3Y7fAF5gkDJ9eqRXgkiGWcuyzHVgs5GK4vfyZyKnPP48aRxr",
  "key18": "2NfZSkM5zXZJQp4BEv7QPugB1FfWT4tDe9fZufZXGxKDNpW5nMKZYmSbSiB8egddMePYyxEwST99vQcLMf3mahaS",
  "key19": "2dHowmphTuLTbWZNAbw1arvckjgb6LkzhwLSD6ZntzKLk94yuSv8b3mkU1GZAefJAQVbwG1vMtbo51pVdu2QXhwA",
  "key20": "4LfM3Kwu9wSiJftBK5vepxfWCXcXXPmFRVahe7bA84iU152awnb77skc4YfL7pni6ieChRQpkNqVKsqrUMtnMoqc",
  "key21": "nuS6QbPznicS5iUkMSix5Z4dS37koZkMwk7h8z2i3dyc8k3zNGieJ5Azs7fwShYvwsjCeXwTyPSjGoAd53xtA6S",
  "key22": "2EzCRNjSo7UfobU7mismNni4QZ7X6a2hByS9M2EE1NEV2XK3D1YvZduTAwrD6LzwziiV3qwHdYwg63qyu3geqKEi",
  "key23": "3yjN2JcRqdMmmEZSikdEi8xvBKFijbrFksrLfEKJmSx6ztgrz5RcZGzg93f91uHqSSzMmY3zKv7XgAK9XsetV5ju",
  "key24": "5iBYbJVuTRgwhhgfAngNJsekgpo1hqdfnecTT1STX4wAUw5kBTbgMC1vDRqHVCZnAja2uE7fi9QsSUoNpRkwm2yf",
  "key25": "4D99tj6i4qAUTzy7x2WSuTYwY6LKSro1dc4c7BK55wQyzM5K6LfTx5jEZgu3C7kM2yUCMHxzUx1T9QrfY4pkZujj",
  "key26": "4ccTf8f8a3HzaRrkXtujDN62iPD7oJGZNkdvFJvscLmGRX6DJ98KpbkUJ5KDJfS9TKBwnaz7gBwNWzsJ1CMfZrZY",
  "key27": "55aj7tV8H6F7Vv6VmvWyiw1pgi9Dkm7S1rMFoTpbHVQQkNFdAe8e25HvrLk17RfNV184tESX9DEXap2jddjEREYW",
  "key28": "2UoLqKdqux4HX2Q3xuZZcUSwfregeCaypwVLyZXXi4f3e3RqXZWi4km8p1gu8V7dSM3ng7SWgFFXz3TBCsaT2HjK",
  "key29": "VKttwfHdeWdZGdhmuBxicMEebESrnFFAk2BoocpXrdc2wQ2LUi9BZtVEnte1UtR4W7HkcxhbfCwJBe5DkLYqa4i",
  "key30": "4jB1qUSkK59BF56oJTWzaLimQFdAYEHY5H85K73nJreHiBYeBJVVEDMjFagU7ZWqESyk7QjBH1y7EPL1hgsR8PuV",
  "key31": "2XxHTLJ9hpJtqKVzK1EqKKJEUkyL5VAuLxDJ3ivxBYQVHr6ysXnuh9rr1y65btfV5M9Z4oss8kvvoTurqGgewbCd",
  "key32": "25T9oMaHuHfdGzWVYHMebQaKkXaRMWVuDZx3uecoYEzzvQPXk1GCNZd8XwdfGriA8kvLLFmuccZMgemb9KSM4CLh",
  "key33": "3f3NYWbhCJiL8zhzMsAKGK5g2FLRtJhHjGakBF5Hcdaa1k5q9Bxmntnh9p9NRCZEJGffqsve3ToUq9Vvb53ZURFZ",
  "key34": "3UzGc4QpsyhFQz3JFQEDjqg5Lvat2LzzUX81aCFyiGKZJmW34DH4iDZxXqWb4fVR1rwsBWoqajpu1Khq9GgKHtrt",
  "key35": "4mKpCobU3zxWziRpLZtDCKGphbnK2eppbDyAcoRdbKuLLnn9HcWRjma5MuLty68TSagDxbZztYgTHppyhAcCmdXt",
  "key36": "faJi9BwRGSZQv1wawbs2tvk23TB8FyoV3RDU5c4QsLcoWNBTaFJj7Jg3yD5q3zjCKCWEx8ucaMtE5LSuFc2eVia",
  "key37": "EuCHKZxNdo6xw1Cz5SCc8XT6rhmSHEroBz9YGPC9TvG7vvFTndVN4zozBJcz3BeGjkkDZCcKHE12D9jvccCjGCF",
  "key38": "2MCH2uU6oJxGQwGVi7K31Ch7ydkj9euT27pmuMN1RBCZdhAt7sgg8UQcauAkJvu8iQhwBq3mQG4DuMwyEG9jyZhU",
  "key39": "22xcWMJZ8J5sCxsqxmPCybrdV6eMNZ4VuQn6RnjMMpcrdzGxRipjSh1Sm1GRCCuuPPSkmfDExcAcAX3EHtDxzkj3",
  "key40": "4oR5h5xqSFZVR2kZMG615wfnLzGu3jeXuPwae3gGV7PT1b2NMZKEyYBFscQH1vBeYUXLVA6Wf7aigPR3Ksr7ETJt",
  "key41": "2xp2pxaVhchLcDq8YGHW3yvBUbpdHMRdNLaTKV4RWX19TfsgftFfcuY2Sv2XrPw2DajfbmqBmiWj77qXVngDgtnp",
  "key42": "24WdwjEahujo27bfZam6uQRBLsEmiH7LKeSXovYni6SBGwLXhVkGNPee2WzAoYt5gmsoSVWPEyZCxiSsxuqHh84j",
  "key43": "61w3gRwh4bUrNojFBRXtHFbFqAEsiAvJE6Qsiws3evk9tnGmhSTzDcAkoDjdW5PHwjaqZ9xLFUmTEJMaggtWvS83",
  "key44": "2vyLn3sN1NxnaZKmBbn7vKmdn8BWKhp7sQ1EcnkgRqScWTiRVUYfKyhC1N2bSs8JJyMXrhiXBKLDKmyo26e3QvrE",
  "key45": "5CDcYhiKwFgNAKa2TpFKjFoNJ9gtbJESg2qNRrBd8xxWLusGTHC87jUpYH2wUV4a57xr6nGxwUsgG54tw2JWhGnK",
  "key46": "4KxrwGUBne5Ht2XTLJfehirccG86LSpvJuGA8tGxRhdKrMTFkhi8X3BZaUGqFvTKV9f1rdemEBZENgu86BRkPnn1"
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
