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
    "4nYjLwWm3nSeZWZPZqP2oxPpVD4neTjcksa49DQnv8xz4eAp2rP58U1WygHYeXY3dgUhSu5QzRLsnW965S9W3N9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559gFdvx6AdpWXs3ir1oh1jfGTeTSEzjSuGNFiNjTnZizrS9LFFmWdAjAVzgLNpUe8hcbdCYbv7CnendFAJSesho",
  "key1": "4jRd7X3gN2cwgk35WwBsPjRRhD5jHCpAJHcWJmUgvcvFhKu387iUQ6iEw5pjk43YoPmRNYUyQuqwmGVCAJanNFKj",
  "key2": "2ipvUyJcx5vdHm96K8YT2VosdEGpMrw2ZALLCtGUpcU9u4fZZaEWdT39QqCh99CvC6FWdegYmNnZsuyw4GPnVFSG",
  "key3": "Znezjys3jqA2gQCWtgCbMzexuCvPQok9fkBrEd9KAhWfAakv3JXPWBqBKvWCWtkkkRYWcwrLcqqWHHhgsUqyCB4",
  "key4": "2bMiMnmum9FawXnkMnKjNAPtnppAMxijk1xVPuNV3EbqK1AanYUnnJeAJU3MTthkg4oCRGmtv9q2oi1Y66s3ofXd",
  "key5": "3ik1fVRTMkpwRGpi6JodBoXisWXPCwTEF9HfVxkQgxWsEzwmH1MAXx4Nc2TSSx7ZMkANc2wVXCfexNs6MEEUmixk",
  "key6": "5hMGhLf8qXJN5Sv7eYs6WmRaL57q6RG15hexfyzsBZ18i64a6XteQsNvSw6otcKWcyaKENz5JxJBZFBnFh7NFEjN",
  "key7": "4SRM1M3dj1CJ4TzQ5P2ZPBqJtWCd9Y1eisV12reqq6Te3vMRacsQ3ArQuRio4exUJqtTP4WrWWABuQ6wq21sDKVF",
  "key8": "5WBx33np9PCZqmKBP2cNHXHmtZHk1teN2QJ8eQzZVhbU7F8zhSi5wibC2xCAPSdfo7KvfSRvkjpCTYRTS6K4DHfm",
  "key9": "enQXmEz4Q4poiRhmgodnY7EbnHTDXKFBFYoQPTUvvYcW2UJnsShr3YobxKTA9v4qLbk7LiL2twFCYVwWsubncqG",
  "key10": "4iVt2riKGKXBFWimzHDVnjTFedg3u3SCviwHeVR33Cfu87uBq1aQWKhU8tFJUzQhfLDMHsFP1WfCRNVb5ZRoZok9",
  "key11": "5BB5tYXYvwAfQYYkQYs3yLaC5We3VSdzur4fFonNCtSyiEEyLqsHNqKMaT5vGLFMEY2YCygowDpvmq35KNHvpZQb",
  "key12": "4uK7jJkKtfQzecWx7JfhErQn2dzTz3nhNrpVcbrZU5eiPb6qQaZMdizCzDx4wpJPQ4Sit444KGpWPNaNwcfqNfTf",
  "key13": "3UgyYU9g6F2sttqP1TMtZAvzP7Xu8fhw89Q5GQurhU6TWNK4cDDjKyUHxTLJaftZvReV9XZicfdG8GmECZB7HZZL",
  "key14": "5hHRnoypDFcaNqtUM8Bcnvbohd2SPFNbR1fdBUUPScGbHvkwJtzznzjZyME1FDQBxLvKK44W2SZ6ksXczrFBFsjn",
  "key15": "5KsHdWz5MLWBTcWR8oEAAHcbk8yEeKfbzMSpV6ytLtU27Mz6Xo98uhjwdcyTSj8b3icaGfKJYqJnmRzPoa1x3DVP",
  "key16": "3wKS3ev9ViR6vjbB6wJGezSeC778RBe646pGdv5WY7JiNAdPm4v1b99oZkM1oN6NDbitftWZPuavhXayRXQuvFyF",
  "key17": "5J6umaNKQ92jVm5o6xxPzCKMTyMwif3MWcRhWNotb1AHLfbM8UkRUmUrW2XUXuxnhqntX46hJhR6fK3YPAo9EoM3",
  "key18": "3L2j58PZ1S44JwGrN3c2CmztcP6V19LKujcSPyWPfwjs78vmrjuqS373VFR6fSVSh6WyeZKjV1D772jgRaJEm1Nd",
  "key19": "2nNkQ81XPF8JCYY2zY8qE7zSkkuxrdvdYRBoJYZmcPirajs3f97wjwS9YcrtgJYuLfXZftGnbcUvFRQk1Phipsw9",
  "key20": "4ACQLUvoyP5hx9MfDDC65H35wSGGLfg63i6zcXRUMoT8EiCfY4kUani77pj33UBPkDvistTN3deirnazNyvFsnAC",
  "key21": "2CQ7TrgYo74PcF9uwa6sZgC7c9vHENdCzWpHoFRyKUSfaUcd543DwTPo8WBgNGQ3Nm5XEM9t9VgkmBXpUSRBsuqk",
  "key22": "5bgzEebqhgVzVSjYQenFWpHDT1f3MfovfHx8FA1n6ZqCq6xpQNnEKChXeVQJXX3F1dRgACqypH8KRtLiZjEWRbG1",
  "key23": "TAsrf2tTLdkGhuqfgqUiRRGtpFYGjbPGVUmeKHHNiafgeHXvgsN4SGhVckZDfB5Lio5nfMMmFXNs2wtV7eBXgbf",
  "key24": "5XUrqkLw2sAKdAsk1ch8HU3VTJhrkHHAF4tSxXftjHWwQ3fGtawPALnhg35nx94mbgBC3xNWamMZA7xLTtjvAxhu",
  "key25": "48HjSNoLCfDrEbHWM4BatxwJA5ndCUr2MjfoXbdsp1RuE3uSoaXcnjoLKywpDoLwUodvR2usnwfyooysyPQA8m2M",
  "key26": "4KLqQFK2Eoys88VFJhYgBibSKzNuFLdwuZZqbwbuG6xGYG22rES2scTeuG782ibkXC5aiuVdaHF6AK2D87pFnHU4",
  "key27": "2xTjyACwYYJKAAm8BTfinj1i2WDj2qCrNUhwtPj2zE8iu13mGUjMdoCEK5xFiHJTWqRPLQLQaoXnMA9ruRgn1aLQ",
  "key28": "5LYyPobB5ofJzub3YFP7UiVzBF6w6vj7rP6GvWTFt5CgRhKFStC2zUbtW8KR4d79qqkizXUCC6ByEHrfdZA6Eqw7",
  "key29": "53jVHVe5nA7S53vboDhfSLRy1GaG6WubCeUyRMkpmv7RAHeePTeMDGCgDnDj7ZgsxjodsAe2Nag9hX5ZSPNDtdkm",
  "key30": "3UwyLXekWbXx5JvxE31td1zwB4nFFn4jLFeZJwytN7gh1s773HQrXzeCeXxyasx5LAZatc6gXT264H9k1MzjJZQT",
  "key31": "5EoTJ827SRxkK68KELbJdpAwRiVDnRymuQku1wh5z92iP8yQLRghjSgUNbcFD3rjV6DgMUyFx4xmvLhdZdBxVS4n",
  "key32": "7M9zGTxtccgFEqf8KmreYe3JYUrBLhJAjXtFuJAUHNaNSf2yuoupNTQ3Pi5Pv1mTZxgvp2BbXSQ8Ngc7V2KPogN",
  "key33": "dHePeYtQDXuNrEYiK9KPxTgHDbcpp7URBBFrbgusDfzNcuBkmyaZmUQ58Xbnq8wdYhJTRWmKYpgaSJXxKureSQ4",
  "key34": "5FEAtb1yhcYxEqCLgpg8BiWaZwiZnKxGc1U9w88WkL9aU8gBqUgQPJzXicMMAAL87ofoMUnXRokdNW9hWWMK4dcS",
  "key35": "mwZrmw842L4QeEmPGm5zH3JHh3s6Gbv1VT2fDXSH5vMAziscCJC7BuVoH1rQQL4Lo1ZThgTpr6FHPSF4Px613Uh",
  "key36": "26jWGoZs3RWLPyCqAWoKxnfwipYPt4HR88wdXjDvd9bxsNCQcVsK7RzrDgg5pmZcD6JhC4huB3R9Mb7jFsqLxNyp",
  "key37": "3pS5dpnpi8Hk4XGZMYuBrCaXdVvRhJx1nqPUdJf38qhBZej6DsdS3uUmtgZVKDMCv2U7A4sxHGAhB5tq6Bj7wnqt",
  "key38": "5uxuekNHvh6HgKSRSaSSHCayompGhcgoXmWkwtx6Tn9GkV4TZaJMuZHLFCGnQ85RQ1kJRnbdZsxmjxTwA6mR2WC9",
  "key39": "4p7pcdJZKbEWSYktwZ9vRvu26vwHBqkDe7vf38obQvJABTg2V24BKNDxKgBLsrtF6321PaV6u5KLFf5qTmsK3zw6",
  "key40": "4mDrUJ3ppBfbaDLgBBGrGbQyXDYPNqP6wXcqBvUsm5Y7Xb2gvGfm4qxKKw3SDpPoBUuESECuUDP9HLgjiR8e1T19",
  "key41": "4tixieGBgNLv3vwrHb56vUNBsK1n5vzEsHa4YSpUiWVNfn5u2sEtrxF8pRyhN8VtC7Cs8LokCiZnxCRAZueZJzTZ",
  "key42": "2yK8A2Pnf7U29hy7dk8RrVMRYrt1aeZ6soZBbwokmiK4BVcQdtULJNzae2aK4hh55xLCTM3BQV7vvh8fDi8LUihg",
  "key43": "Nns9Zwaws5h5uBHifsr4r1stbrmocQKE9twCeKmfavnLoL94h2kBFRVUN8vzq6dAjCPqeQbePWqyMWL3LK9DSsE",
  "key44": "3ZnohV42nZb7paMg7mNiuVYM85dv4d4iCS9mJWpmUaDZ9Yr6zNtvtK1uVrqG3vUwEuw1XaZwcmAh9ji5AUnu7un3",
  "key45": "8fvdTAi2TnkKBNPDAxQkbyMTC15vkkHZsoRdmMz8ZJ8LgbZT911k7qSLB41qS7v1Ex3kjh8jMF9gVQnsZPRu86a",
  "key46": "3qS1ZqEepwcq5aoDmnMnvqNFLdyBy8h29pmrdraR6HPppWcj5VBuQXk65iiHd8HA1kwAJcnNA7qQcaz4kGJy3Ki7",
  "key47": "2jp6FKSLTXrZVxjVdAHCfqtMDzrYqoSh5F1gcGHHwau9Bk8Q4nVNEkpNKcN6wJL5CWWrjrMhy25EQpbo9KA4PrZN"
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
