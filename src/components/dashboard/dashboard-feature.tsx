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
    "4U4oBvJTtFVjsChnPZnFaRmNCcmEx9k4Qv2EaQgYN2USxCppyaSBcCmxDu2kDbr79q5unD4XqsXxAcbnvUdwTM7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KwF5SkoznuiG39XGc7s2WnQCSm3mK1UubfrZsaAVupmSh2feutdvcwLfUD56hGXg2JcUsiffbMhxJMxwtGi6DEA",
  "key1": "4CKv2ZYsUfZN2S1HwzqrZ32MibNDWpuFRP6JJjJND9NEEWXEdSoh8dgv7wiLsweoMWLstSeE9xMwV5doejG5CEmv",
  "key2": "2AwLT6Hk5SmRcvmLQquhC5sDgLgLbQV7SNe1ZYG89o7WaRGXNde8GU3gqJ1bEh5T3uPS2d9EpDmEeutE4mcWEAy3",
  "key3": "gK6Ma9GnzQpzPQPaDRdGkWxMaSfA1iF9ggwN4gVFkkkKTazBvY152U3rZ3Ba4A1Bn3K3uxN5iRHJekgh11A3bbX",
  "key4": "4nW4uavSirrtABuyAxLqeyxyYygxnE9RqxSXYtBmWLjy28v6M1VQHDg5evytaBQGCVPny9mfifr27c13ALmwGKh5",
  "key5": "5EgsMkMstEgptfyBK4DiKEzGBvj842DFABbcki8bFWuEwbifaFajJbLbQViH7P3TEax2irouJykUCoKDcKfyd85u",
  "key6": "eoFYjTbtt8yyNVhhU39xdvxauSpssn2PtHV3ivSMUajqBqZRCDWFFwdLqQqWs6QKi33eboRqLdGDeAgNDKv6cX3",
  "key7": "5e4xSW1K5ahRhwTZiKgp4uphftbf8g3y5E2y8XvmZjVadV8ELZSC5rhKrDPS2i1YQiHqs4LXFSeVuUmpi3EKixBV",
  "key8": "5TmFbQQ5JoUrACo1Fm8tZb7pP1AQa7gVh3sob8A9ynaaDu1nzM9mTeFQ56HaNPSCs49mTc1bHwu7bf9ojgvUcDdA",
  "key9": "4M7p7fVj2ktD9a6AqJRBxNdPZPQxiAgRJ7FVv9P45VPCRJFs9PHPdcEq62U8xkXnBms74h8iA1MBJnPTURH2SCAP",
  "key10": "2ghaAEf4jXipQ1mX394pZfZPymEgUGEbPNWgid8wNkjQiBxBQiT8br2rCVGHR27pQcGMuEDUhUsXpd5vT2Xmccfv",
  "key11": "5jH7mJ5SmNWqNxejoyJJ9RKgEWUaNBZLDoTA7so44Awq1gyytWf3Jug3XyK2ABHfGJPHDjSHMhTStMUx47zFYqKH",
  "key12": "5fKtANkkK5wsfesuY1d51L6JcZFFrKDVpGHncWXvExFPj3xZXwXnxQ46UFPXKCtSiu5BzxXoM2UQqLfNFJVAPUSD",
  "key13": "2TZ469dqJSeMzbwBW1MpJTQsdi9cVhKuzFZRT6Ee6PMkf1mY1GeNxKRAZLQw8sUShVSor9SQT9vHbWNjwa7xqapK",
  "key14": "4CexwKKrzvfTF25GR844Wb16tF8C9CMWNjx2XFumDMWjk7JFpgjgQxDhJS3BXGgPqhr5FPtfimHuyw1RimnMY1H5",
  "key15": "Vqp2QAHaNi3zUSD2MuicubJSjxcwwU4ZRiA93QVAan1zUju48bZUmxocMZVDSnS2Nv9M3gwRQTAvjZD84X3DuWE",
  "key16": "5VJXu2kCirLmhqMd6nAShG3jBWBeFF6fXtGSMB7Fwmc98BGi7ynUFwLC47rwvsT6HEgUekKKeiYxQ9vKJ81CWLmW",
  "key17": "F5wFuZCemqGRP5UeBbe9cfKjKgPbij8KCujr1LfoGNCVt7xFWd5BTtFqawucd3nVyd3oFQK8erQ251F7gwjq8eG",
  "key18": "3qPKeZVe1iCbjuNZwUa6sWK6WbMn4GTfGBZRTynrEcZWVJFLLEpyLerFhiCuqoyopqSoZBVh7FSAbopXna8aVytb",
  "key19": "2nCxb3JunwriY8KdzDWj8G2WJ23cBHcmPBQxQ3Gy1YTSpfjjYEncpyLzswTPfd9AZiR1wdWRTKqXK8xxqPstZwqV",
  "key20": "2zDNAqw5D9Va8NhJpPZ5HMRnGQjiWhkcLtiqKgvKhNKWB3jDJtowNPSaBxTv8TmBDd1y2qVW4NEAgC97ofSyfFZv",
  "key21": "EMneKzaet5NKSgdAqNJstaYTWkKpmSveVF2u6Faq445a9ESKoCR5Kjjtm8Ka54pDTyYcwzq6HhwvdTFjvjSgo7p",
  "key22": "4tR5mwe8Z1r84HPa1SDRj5mBfvQHuU14gTG1ubXvx7cqRkaAjPMdA6kKfdgTkbBjcvv1ahFyajNGc8UYsgvwayRA",
  "key23": "2Hy8fCW3iWNirhsZBWwNYh4k4BKPbVKJxRvvY6hNSc2Uh1E8AgjSbVd7W1VSQUkMm4v6CukgCRKnzfndf8UgC4ho",
  "key24": "2z3aEDS1v8pZjvM4HvjUeW8rkHQwjRUpEqn2PTUEAiebY2ZPZtEV3SxwS8YBTc8GqYkvCxpyma2wpgW1xNitT46u",
  "key25": "E9zT2K9LHG9wR124VsWSibpzVkECJGm5LHbNcuQYSsTnJW5z5uTbNnuA63xsSU9v1TLG5xgtpsLendFgGd7WS2E",
  "key26": "2iQJ6vvdwVU8v8vNvzvQox3XMbdGJXmYjLz7oE7P7yqKs39DBrf2DPNnVXvam4jMfUeTRDUKK2RAbuqLWzUfFZ9P",
  "key27": "4y4rbYpXETiLYtdMn1PXhTvf5eXX5JRokdf3i4DhjTi7wSHs6gnoR59BDZqd7QFBc3E5EEFET123kpu3kK6PJQmk",
  "key28": "cSFhGcAp29EAWGDjZNyPB5sMnz1ZbFFmPYfyrgbE8HXWN5Lci7TmpWv1tFaaeNT4jKk7riqnphiwo6QWAy2oyGu",
  "key29": "5qsZHNKqpdR4Z82SErfZh21aoVNABLbVGEnXQXuf8pPE5xjVHcPzDvWEPxRKAmBsUdGx1AHCbQatQ9kj3fKr2zsZ",
  "key30": "66tbdz97XGpM31FwhczvHMbFRaCnY77YBNRZtcnyqxspTf63oXSpavGxo9dsTGW4wxchA7MVo5p4N4GBhvArtmSx",
  "key31": "2MCuuChKcpVKVZXWtXxrBL2t9KeySxLfmYT4KkDBDdiTeRtMkMZbVis5y2HrEHzAVY5VsaHvgcYAuu8FDXttFNEZ",
  "key32": "2WpZDXuyyStVWFYAzDYmhTi3iNmHpYFR2u3W3wW6oKMKTawvc7hwoMvL9eKLMQLpA1Yxqza5psVNZqw6jkaUx7Qo",
  "key33": "WFuL7SsZZaUnGmSKuSsERm5jHSmqEwd7BPRC7NWa11UZqM3iFD5rk7e62aonhvsW5JoEABwTi3JDFoYULwwZitz",
  "key34": "3o7LeNTBge5BX5KfAfB559KJponJZkT5gcXPwMNPBcSB21LfzuE7DSqVe2KeuMeymewTAvBXNgdTHjeWqFMRw6xK",
  "key35": "3j6VKvKhfB5rg3j8wJxSNdx5qxCEdCpfJ4w95iiXrh4grvbmfMXJZcUgWRv5rk18ogHdX3gfSUQKz1s88UDKg8h2",
  "key36": "YVpeTL6nazt7xck9KMkibNNReepELt4PXeziKDcZwuPGMFnQoQwe2CErDgKvhBsgbrqc2NLnBWFLBZBa4PQMkif",
  "key37": "65Txyf9nU5U2vLnecxDscETVnuCPW6KeCzhcY1Ht6FhFccSZtwnEWxY7YqZ4AoDVYNZKv9bQ1nhh5Udcst2DjZvX",
  "key38": "235EuRpfgQUnhkiksFpLxGkp3Nw2mF3CoL36HYSJjLs7zGH55y3C2Kh5ixVrrxLUQWhnvvaaqkXeXTfxPoNzgjdG",
  "key39": "2iipgzWof4qNSaYBcC4VB4NJBjjQVvX2TTAT8tniiVMmEFAcvZG7nSXRj1cgz9XMrw9qqL1YLRP2mrGQGGr5En5A",
  "key40": "4ubmxekX58gjnvMYnxhY85chCWSqgEebym6A7TtjraaGMJ6xxrHS8cBehsR4K8T1eBvwruKUmgatKxeuXXa1ttzy",
  "key41": "5F3rCdatAiTQmZrxt2TkBqB7K8EU7qkxbFh63bCYQKkTcV7Bj67jTS7jciDCxJzsnfyvTF7VRCUus81Kz3SV23io",
  "key42": "3rUfUxdMPLosz7TBALzr3iKhq6Tdfk4aug7RPJqtYMpPiCXfrRzfbmQbmGAjMyLwo7a1f6LAtxaytPYYENu72AWv"
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
