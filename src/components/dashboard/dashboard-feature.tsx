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
    "4uLNSSbR9KZ1Va1Nm4oT98mZYcBdYMVGfHvLx4YGEtxrh1VVmt9cxscGVRMBHueDHzPRZod9JGY3yRvTb8Bu2Eu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8UsEZDxnwvPYB2HTE3LCfqDx9V3yRENvk6rjCy8CbvfmjxcmXigPNGPMJP3LZNoNkda4bY2GFuXr2Jp4DZEsD",
  "key1": "3AtqZfmF5SVZtNtcyvKnWQvnLz5Ro4UNjKLCBXS7nLv5DFbcMS9xw8UF2U1usd1BuEJvtxfkcmcJWFnRUpBejwcf",
  "key2": "5SPsG2S5EoUHUfYcbECdwj6RTY9iM11nsn9At3neqk95YAApEiVLGEQoByY7LS6DKHw8w5fchw8MKiKJQdNeGBGm",
  "key3": "kGqhU1YP83Aph6TmAkrhwGSVvr2tNbMnV4AaEWrQctAGgz6tWmFe35axns8hxw7uU89Qxd3vUZSwFmcbKjM68A1",
  "key4": "9DdPgWkvQhWvWL9HydjKiko1Fje8A1hPFx2CpSYgRZcnXDKWXcmsjfhXZPQ3jgBFTs3eANnPRzWj3prX4oh7VNS",
  "key5": "2V17CbtbrMoL6p1MwPhfDb96B7kKxYjz4amj8ygAF5R5dX6vPeKKbY2fFwHSMbqLi3KztXBrzkki7Wogrbw7RUNa",
  "key6": "5cVuZvQ45xDnZkA8eX3DQ5sjoD3JHUss4HaMifg8tD8vTxtRBHSfMSVSjPzhXZEYTALk2khLUhj8FaHtaQFQpjjF",
  "key7": "62h1BexnjjionptF47gmfuCZyXYgs7RtGdhPFb1osRMxiYbnbjJdbdcakAPhEUSxcjCr7VtpYfxzM2MEuzi1rzyx",
  "key8": "2T3b7Nf2eLLBi6XdZxpQqEB2LGwn1dCMEHrfqWbsJSLGo282Z54MJfwbRtehtBMBTn5EZBx3Hqd9NQK2hykRAh7j",
  "key9": "2jvkF29sF5aERyVhcMjpBmD5JpSsAiCwvMGjo9jptQmTRCF5zCUP76xhqBF9Fp22tDZSaBvgKksNPVzsXgPz1KzZ",
  "key10": "5Kgh1uLdaqGBWwm2xi5FkUQYUUChia6YxxnzDgPiWAkkzN88RiYRYma2JCBrFYb9vafqSAVdB9EzZSRqrg5JWkPQ",
  "key11": "5XBrbAy3s7XqiXCGne6pRuGTPXh9A2WiXu4GCWv57u2sLVra2wBgPZqyJsWmQppVdD3v9fsCcWMMB8iC4UDwLsHp",
  "key12": "3gSnUr3X1FbtgKJRhto5XQzZuzgJ5C6nVgCHcCyAYD6iJAPcxaC7Hi2AERsoxewoDQmrK8JFiALNiuxz18xbxShx",
  "key13": "3ypAdxMZeh9BniKSXAJRiHzRUmHZJUkvMVkCzLgqXjMQbbDX4AyPxHhroW4nTwKPcSXWLwnedVt4me3pmhxvNXVn",
  "key14": "4fhz4uU6yotuTc2JC8mr1UFxcVczfzpD8aTyKnjkz6cUjMNQ8F9krMmUxwrNE5DN6skEh1BzQ9rtGeECPdaihWSE",
  "key15": "419GkuyEmnrTzheRNm8UyaFqPiD2swLha8z9iFNiGA2YMxMAoevycCBMLQgBGi5Kz1rvhpXLd61WYv1x5eHUeWSX",
  "key16": "5HmfPPUUAiiBXbe6PK6EfvWgjmZ35K7j2e6uA5mXQwpkZ5mU8pi9eKddop5faQEx8wfZa5Z1Jw3dEZHZ3VsDPiPy",
  "key17": "2YDyWQenrTjmoWMh2H8cMz9bcAd4mWTNgfiJZsrjqtcVefnS2p9xBRDBWhP3KLCugC7JumLbcbi2rKz6kK31Bomk",
  "key18": "2V1MXEGu9R2SbeUe6UEAkAK2f16RrwRYdgbo13VfgF9KjQCjMMWQ1FbsW2t9PxiWZSyGwqfMGbDfbdV9rfnfWB9z",
  "key19": "37Y1eBhFapMM3KrG1dcJEPb4hG7SWsKzLnSJzqBuoGod4FUSGQHzvzcznAofrQUPxwk9mkpf9FMgAxenPycGGXxP",
  "key20": "5VFbM9FDGemrRzgQxu8HWyC26ChBtT27Lb7Bc5jCkEQrirCUgap9i1x8cLdn1sXyTwFEZk7KZ9uEujHXsqhtmpjF",
  "key21": "5yXZ2PfxijJgFeSyhyM5KGJRyhMV7A482jXFBjrbhk2wVJbGdqgP51uKUzJ3zkLUSZN3KdkXd9Kt7FmR3VhPxuAe",
  "key22": "5e6WXtuuWhhQN2uoy7kXYfpHifHkbxUNXidtjzu9QazsqoNN9qSmBuXdUjBRve1JaJRkktj2vaFmPF4waf3GB3m6",
  "key23": "YJTE8JoDyw34RA96Y89VxFjZ25fy6kHJbGY3MbJKMo5fNja8W2srrGWyJQryJCUsfTX4hg1nGgVi7NC96QTbgiY",
  "key24": "46NwTVpEXseXWmpDSfrY52AvUnS7cSdCogU6tUrQ4gk4zxDM4zvTVAXca6jGXcFfUeiNzVVx9Z65WturrrBMcQdn",
  "key25": "3QWvzjnEAjik6hpKYFeYhWNWzKdmWHiakSM2EUcLQpwtPX37Y73jvsNFbYV685yXwckLzE91nMENTQMs4VMricF4",
  "key26": "2LVznttdegxEA3C6NDs4SWBfvacXU42DMDth6PKU3bkBUwGhMTSto8WWpg1jYhvpNRBKbujYV3HEYNKSBSCnFT9U",
  "key27": "5X8kAm2eY4Q6qvtpBFVig4E2eT7rCE1TniS24Njo8XoUJuuKfpdkQJh4KdSftLeybCdXXxpLjn4rs637zdbR9oUk",
  "key28": "2iLXgMQi6dhU14Dt2VineD1mAUS5f5CS2uPgGwm32nTVn5jKmSVj2E53FrekJPk48PtWK4qnyNZfjs99BWtMWTPe",
  "key29": "5EYHAUMC3SHjYCbh4YPBCafvWVwacjSNzE6LD9pLddRrH7xu4gELE9B3xX84WMepZw5nVUXJumQGa9m93t1nRYwx",
  "key30": "59AhN7rN8Z7cyJfLfu19MSrV7cq5pJTpcd9Q4N4M2o8Y1STKiMopDSoRdwv6KbKL9HQ3x2dzGVuwjjj7V1neyMXt",
  "key31": "2xwuzhnq2VXvqMhzjxL85eyWKFn3GR8opVyijseBcmRQoFAi3eJc3hYXaLjXEdgE9kEkTuPCqa3k9qgmtvFTHR2e",
  "key32": "58MZE3G8J21h2yHBtxDXx3zv7UJuHUQ4HfYrJKy1PuA7YrRSbxC7UwPoBJXUFcAyJCTm6nA4T9wVMfEvtgkpwpAG",
  "key33": "UC1ukUrAwVk6FwEdcfU1gKgm3etpdpp4HxihWekNmjgdPtEVYZey572RW5dY5YBwQkMzVvvnbGzB9BCxwhtJarV",
  "key34": "3i7XN6pAZyrLm4sJs2FYMZUxsUgVWPijtE6JzpZPXyvGxdmp6PHuu2RmUvtgX4JUKMq2iLn3JbCgW6wTyUMoNBj6",
  "key35": "5WvaWMf6Razd9Z2zicLrQwzsNAVChDXKzWLm6CRTtiEj8AxacRyzJ9LF7C29EBztFxtVryoGYP2r9PN6SjrB4WP1",
  "key36": "5qEHQgFhfUChpUEqPbUCQscfYbWKCA7rfXMHsRhz2f7tv6h99t3d2683ojuP94NwZRG8Aotjpqwhds6VAmHN62i2",
  "key37": "5xbfah6SF3opeaZz6QiedTNRC8rTxJsCUy3KXkYbomrpe3kDMdejzHUhEEzbJRxE4XsH2SQygbnAVvRaKsUeBFQk",
  "key38": "36of2Kv9q5k5XF57ipqEedAva7F1nTSMjXdXwMTN2FH3Hpyje7XoqjggRVRwtnjVerLFZ7hpZo3933uHoxvs2xji",
  "key39": "59kecQeHzJLWMo87uCpEw1HYCfsJSz3chQNWqTzktSubjAELqfoJbsayYBiRFeYeBVCFcw6S7j8oAQn3vdfNWhSE",
  "key40": "2TCENt8xHiyYYfEGYq7qvN6wX9i3W3NErrMrgskH5vRPbDZUkPDJbHv8yQij4vwyjN5KtAaMJdof27NXZrsU7gHb",
  "key41": "4MVFvDz21w3ufY4iwDgkUnrSCJns4io6MDoY6ji23qs6Rbnyy2EZVUT7LxpXVjbhRLWoeoSbiZrGD9U7iD8uDPGC",
  "key42": "FsSBxVYXunNhspNCw1aPqReE5KjGSCX1wa2HKSke9ofJXeuMW7KzY51sk2z3d7Eyg1tH5bFo6W8XYM2t4hMLehH",
  "key43": "255E7g51LthBPNh8hWsbphAXMnGp3zJedHMempEnpqnXEuk2Szi5XHgYLPxHGHNixzZ8N8GWcafqDbw2bcQmUEpJ",
  "key44": "DHH7N3XJ9nzwTuhboKPtBKLNaGvzo6fBeM2f4s3e4DPLAaadHbA3QcUkv12jHDJQZFxGuquQMX4J8aKyN4AfnMe",
  "key45": "5dUb36kaQe4GfuwNXeFa4q79pavsNNdHdZhtYVVqYLwFaSW2KqkBbkEcF84C4k3RCmKVAs49FspAXTmWzNWoNZTB",
  "key46": "4N11LJibepLin8FdFGYWTrNizrNDPqmCWPYQbvcHZjsa3irjuCmCrKbQ9hQMpnZZhWD2KeUmXngnYmuqxxfaqg6M",
  "key47": "szjV8FQ3kWqr8P3iwBtGLwtEYErBE32naZmvBPDbh2J1xosPGAjQd2a82voCbTU5o3Wq1WrzhaHdgKCoec8thnC"
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
