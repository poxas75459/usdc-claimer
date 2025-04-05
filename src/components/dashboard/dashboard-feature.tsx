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
    "2MiqobhNV1RTJXBZ43eq77qZ1pHSewefoiqP7zkQL6VKudkejpHSRFFnuJkb4qf85kweeqM4deZrTC7aZtNe6WpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bokk6FFCuXm3xW8cu5XuuSZKt2RdGQyqqAuzGH6KZCjFy71gHCSAy54B8eeNBC7f7ANwKM9eEADqpeWMbLQfNCP",
  "key1": "9PXUerwzJp1wEUuUHmFDuPTQnPdnyP3ir7dg3F4aaDNDfacoegMZn52mi3nrhaZmfVZgQKHGW9DzdZHBpxmxmEt",
  "key2": "5NTXJviHNoFjeQzvB4WbLxouWoVGB9KNxnP2RwnVZubV9BrT3jY1XCsskL7XaVqDWJLFoYUspWwr54fzrA2YoUUb",
  "key3": "wKdjUfF2SdJZLBWS1ybTTg2DWv6W3qP8Rr1mXRgkaxCrnFL4HDhvXTVTD7WADDKh6UneLmuMpFDxaEcFVmng8dc",
  "key4": "5jXEBy8dquTW3EsmHbBnWL1uHEKrmM64XkRSqVU8YFSXVEsfsysFz8DQVCu1ymjk4rhBzbhb5mnEXXGHQUh1Nbcv",
  "key5": "2po58oAmf4XjyYYVZeMvpu4tqE2eZyPhmQGicTp1RWxJquRgDJnAc8MFx9NxcEEd4SMehUN1FYRzVhGKkbKXsHEP",
  "key6": "2MJ3NA8AayAdDtFUcysk374Xi3KpiaJTzAhfUZyfjGQnSbtSMSp4KL3jgA3vo8xo4tTKo3YLtBYMXvLoBjQpjyW",
  "key7": "2qr3aQf9HtQVY6RK7SVKQtXWWHjScaJB4jJWtbeYRdyUvuVdJdCmF4DATEQVfaJN3GPprUREET8SvR1aavxR1vYH",
  "key8": "RXhPcw3ao8gKiRdpzitGEQJhHdPdggLJ1AreQL8AX5AmsK5K877HMSuUtopr4dJSAfUTAC3KTFGu9fG6xKpjbpz",
  "key9": "5bV5mTNNJabYx2g1GbuJHnkVRhXpz5ZnKraL88vBnJ55vxU4rngEuYHb7APDUZJK99yG1UCSrS2Po5iidwHh8y2m",
  "key10": "4tP1kXKLemcjsR6Ab5GWDHYupUqJnrpSL1dezcGexBMoNP29FF2DC6VJHYGubPbvQhc3ybSfrH6UfK448GAbAau3",
  "key11": "4zzvVc4vSct7NjksMfho4nqsTJcj6tm3ypkqhfSweXPKGQwDyWvEhMAKLWrDUBfhLrnix9NZNPxjEUAmn2RV7av2",
  "key12": "4ri4QpEkF9duWNDgcoCFykuztGUUBu9n2mabF77A2aKuGq1UVVthcC9RgQSUDSDSjf26TcemVhWaFUWMaNfTre5Z",
  "key13": "2PgM9HTy8Pt3KNwJX1gJoKnZ5xCSWTSLFQWR3GoCBprJV7iLeY3fFKm4s4BGg1v85Up5UVNwNLEQ3ZfPYvPADD7y",
  "key14": "s5wfHcWuhFCj3MGKkv7BVaEG6mXtvhPM9ZdSQVXZ54CSHjLkc6AJbLMfLFN9Z2anzVT8Wfo94tSyZJaf3jCFbPZ",
  "key15": "35UgtqXRSRmdh8wVrysCu1vfHhTCbWDAFYSakxMMUEKztYoJmqM4CUTMr51fM1fmxfh7cf8Kv24RgBYGbE4P3ACy",
  "key16": "5ZdAhBGMr4Zw8qsGeCQCYGDRCMmnNNDBB224CUN4LPmJTZ3VHwdsJow9zWA3cg5zsCWSuEX6AW5SixHLEMgUgEsx",
  "key17": "2u5SHvemm8N4vU3wX4Dh7NXh4cpgFuqRva6ou4vPzzWJVuEfzwJhNW4q35YnGhbksg3wFq5VBkpts1oRrMhxi3Xr",
  "key18": "3nGJS9DH4F3sjD6jPf7RR7rY1CeQTuzYRZGzYXFxwbu5mpaYbknvw43hFgjiT18UiVYaUwE9M8ke9m1Uyh5UQDRB",
  "key19": "3UR6QZB4hbTNpi1ELi57SuEXGvfz8RFnrmHiW2vQSgzR2XspU7bLYPZzibjWKTa8CVrZfETWTuDs1NzvR1JwPF81",
  "key20": "4m4CLy2G6iy7pAFBRHbbkR4d2L4JZ9pDxhyrfMa2cLU99LXsnMzVPjR4BotdRCvtLbjF5f9oYk2aKZ9yXhE531s2",
  "key21": "33YzjKdqzcBxDwGMmmUxSd28eHJfeg4p3VD9Vm1imXsWv23akfEGiY2MXxJCw18iMqaL1A6BTorRzKXpmBjpuxaK",
  "key22": "ec8VrmgwpWfYXG7xW7bsJmofbrSUrbnZ19EcgcPjSoFzsVaUvEnYrH6wiMJ9sEGwgCaudNPwepD7ZUh8sKuKiQV",
  "key23": "4c5mhDMdampoiiPV2JWkT5yZLzKTy6c1nua17z6qdUssUByK3yN3BMR6sDJsaeiQS9Rw7UXCnxoW2pZb9hfToyzn",
  "key24": "56WgFj1MTMAfM5EFf54S64jRfCbJ25v6PFnVWMj9tKimB4CFKddbHsFn18Kfi6WdVtv5ri2hK6sFRMKfoVvPdGqk",
  "key25": "5srqSSiUYz9ACvLwWKiBD1BdpY92Kn3p1EVSR51bWmJMbWwVv2cY3RmbcyUL1YeoRQ3sjEAYqEehiERsC7CSZhPq",
  "key26": "5APmWqxy5T3TwNhLtzdAEBdigSkmUJVbPCTxLeKyS1x3p85Wzn1hPch23L8CV7rTAPEFLSYLkxmR5SD5aUx4VrZD",
  "key27": "3Y5bWGZfXkBvaTGJnVkB8fHhBttUyediC27CqmtemrfSFhE6WyGCBqVM383AeJdPTzcdA3KUyeVvrXg1sUQrujYf",
  "key28": "3aDRnMjFsnSoU29R9Nb25SVyAvCL95rF1coDYCQiWrAE1e9Z1NgA5XzE2ujutYZhEajWJNKTqyv28vRxGEk33zdt",
  "key29": "gd94xaZNAnkdeP1T3N2DM4yB8TMcwVGFFMAAEVHxgGj9ehej9YaJzMVZz9CTcK2W7DZCU44kgKWaxwVsZsyJ89D",
  "key30": "24KY9DXnU2DgkRj2meCRUtobbnHf2ktDcxdj2itiHgNXwGLejatGagUfnPvzvEvqnDccFrMyMvp4yiVUAULQRNFM",
  "key31": "41oaBd3U9wWve73UyfuZD1y3H1tDQJzLrhUgzZuwFoX4nyapi8JGMnmkXA57uvBf4WasYdk8FyV8rTtF8GTqAZSy",
  "key32": "2iJW7NMYQTVnUyNVZmnopXBUig3K8KdjLnUgndfs9nEMb3AJxKmFcFHSbPekcLFCefkFYBXLgyL58dEAinSVnja5",
  "key33": "xDNYbfkPt6ENsVoR56rA3oB2Bkm4NpP4HPzRe5y23BgVHwbMUtfnbThM8Mhr4NsGPmQdza6FHpkk8BAcpGKqdk6",
  "key34": "4RBeXECjn9U88THuoRVzgGRboh33BVcZhQ2q6Wi7QAT8waZgSKmfs8h8jvnmpKpKXzpDtk1uvWSor5KRMs9N31uK",
  "key35": "5WGLCvDhfZfrFytZheEGedUqEoqL1ZzEArByiRmDvrpjkMZhBCZ8iQixcVkhLdLLWHV5kKmTRXF534HeKQHbSdNB",
  "key36": "5Zjx2d4U8d6pNoVaPaoJTLksjm1EscKmyvzKaRWQyLF39mzVtxfFntaf8EAXctcZenT5wTr4AA7xCUMXorNfGVYL",
  "key37": "5aXFt8CRtcdbq2koSM7v2H1C8igES7vn83EvpPasUXeQ2EhgzvE5vYuGZXXTmu5kRDQT3xechPTxeWvp6iUnUnD8",
  "key38": "4MzhyBhQ79EPMXdqbCThaKdU1BPZaXE5ytvyXPW2n9cs3gtKXApK99kPhz87TZELSSYdEEqrrCXExYJZDUWMJtZK",
  "key39": "5a4YczaLvb77tAMaMCso5QiQXUPJmKvADJy4YD5BBrfxM5gt4Qf7CiQF5yynmy7TXcvNhuPWvg6fYrVDRv8mvLSW",
  "key40": "5izfhtDPs1cFeXzfxizkAQJgrTyUm3SyAE1Rf1fwmNznTC5ZqchB5kiWHL7cpcAzWH8MUPkWuGyid2C7JW5JCJm9",
  "key41": "5zXvcpSaEgYwDBmEkfe5oiBDNQuFKaHEjZmzt81ZsvPP7KCSqGksvE4pr2U12jxL5reRY4zexPVD62JzG3BSh5Hq",
  "key42": "oodEw2ywu57N47RFjEXX8hfFznNBGqTx3j1UkdhEmXJRdyinYmrfzJBcbkXENeasauof4jr6UiznJrwC8H6nHRX"
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
