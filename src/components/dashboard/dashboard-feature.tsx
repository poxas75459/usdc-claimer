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
    "3wk317eAvXVUPmLvmVueGW2CXpWbas4GyVjmrJFMzt8mCpju4dCyzMX1e1CnL5KfcEkGpewWgZLZzAqz1sCvk8YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u2q9NxQAe2Vjugqht1GEJpxhHLAMkb4yLPA2Nyh3NWuGVjR4vro5hqxLqYRXaeVGE9ivt6knyWqAPKFQuhCbrqK",
  "key1": "4RsuW6M79uRgG3BCX81TQPh3bnjL7gy9hyZiYjMq1TbKJsLoJW3GXbEWae18veqYvMtpfDMPRKqp4zA1cA9d92a1",
  "key2": "44KQJxCjYe7rMabxHk5omKKLJDLpkbpv9MpwzPza3JQgsi8WLJtXPKSun13Lvti4RN5F4Mv9d4UbY8skMp7MzEYq",
  "key3": "2TLG2TYhk8wFwGPsdNvjRTpi23DVLsjmz46TJ7WpuiZScL5T7bw83gGqUZi192r7HVpX68qHUf34Kss8971yfwWD",
  "key4": "Pfp2MQ8Fd8THcYxxfWKJiZF8UsVzth9bihmq842cF3hW3VxYddGCdX72Q63ZMWv2MZemY2VHEJeEGDM736F2JgJ",
  "key5": "4KhGXwrgdHK7uw3FaNpPu4zq66TiokcPSsHN4BCHkeHM9syMwiLo3jyrHFB9FLg5ra5KDwdPHZ5HcBAXFpxStxZE",
  "key6": "6Bgi718gUMy2KcLMKZhDRShGz5JQvmce2uDe8mGLKmtsVjXT8Np8o8U2ZmfQQ8FV48ZGs3axKgBJcdbx2Rd791b",
  "key7": "4GvUuSStQPuMKuP1UkiEBrQ3a3DUkZbqMfGB8UxukkaSqPJKJeRJgwm2wSVgM54wau21sbahEVay1nWmvSVWPvEu",
  "key8": "5Hx5LJd83oNyvFPPFLadAGH8eznHf16hqZ61nvo7QMeyXJCHEyhWDmYer85KfignmoSXbdzKrde2V9iQQ4z4WWyX",
  "key9": "2wHhngjuagtMqgKrr4Zdtf4Nno7gHU1PQgekt3ib3VRGv458mMBBSyrmy28DtCT52K9pWWVzkoCLo1U8GzLzPUJL",
  "key10": "3AxFS1wWvicxbz2ay8rXf5X3EsxAKiuBv793rQTrAaLUFcb3PHzUYNEdRTvZQAg6fh25vajpoEwfCwgJYetqFSQ9",
  "key11": "5XXHexsdRBn3nie4BmEP9nEuQNaJthjQVQEoBZxfaZMxTghZDyRiwR5v6KaoyEc9T6h2FVWsAQ6oKSr8hRdSc4Re",
  "key12": "a1kLqfxo8KYCvqnKJYBmVwiEY7aANbfpH5sKfvQNVZJXpuNrN11u1NxeWCBvVqHHfNn9LHdwS7pp7UY9hihB7aH",
  "key13": "2CXE4T3iVH611j7wHZwkxPBMJwsQ5NEXPCu8jPpW38ugj6ZYXgmDGxdpie68bsdRow45R1UftqphmHtXZPUxanjn",
  "key14": "2NoWTwTDSZKH8MWbZGUfDARHEG1Aa8nnPcpPkyiuaqCPKn4n5iMSUrfSjwfn4htPaLVWcsSgjmJAC3VuswfzRGwR",
  "key15": "25WZdHjbTCL3ocHRr3YAV8exikz4VaGNfyggvZpg1HvJed9RR5fyNdYs2UWdwv3FM6ALd15qwAELVqxXGuRtwRr5",
  "key16": "MxevLrACn2LMiGAViG1s4VtEECcTGyimXoMT6LAwLSXb37eXQ3BKSSKNG8PYq7CsPzVo49e2g2TsWrMXGzfzB21",
  "key17": "tzTSneNk5dVaWXzFUMiuxr1H7v3MFYS9gtS5g3jGraA7TWZgTPo6UUPBGWeF67mWBqfeyMYzEat84oi4jXzoJFs",
  "key18": "J4q7upvhgu1ZNA6ZGscGHsN8LRGGWBS5PziM1Lvo4SusiAt3jodXNCdvmQGGM9whjsv8AsaVg2eDm1prashcUFN",
  "key19": "WPMoHXhimRCcL439MaE8iEdetiJNijRhXCVnBoGWg2L38GUXf5WwHwDAoMiPaVkJPDN3UAQaz7KtEZQpBCsLRXM",
  "key20": "2HHwisSv1jo9xoHqD2bAGKttPPvjwVYTt7JtC82ZM3bJvgAtf4nQp2dGQufKMM2jLnP9QTmw8zst8HSMxp488JN1",
  "key21": "47iWdh69CU5XrzECFVp8UEiFg6PoEQ6ZnxTcf84DJfUrnSwxz9qZdMMHQt3P1GHzv67vX2TzTE1Ev4WNLPP4UNX",
  "key22": "4AWcBv4Todb5pVGJc2Q5Gbcc3g2p3u2EbwAUdzuRinzVUNBMqguHFSAXQ8yRtincbPtbfLstfsrMtoiJanW3mVcD",
  "key23": "5cor4cVN58nABf7FiNo43uxNXtNyJjuuLRTiQTAaPNjprMwrBDpWmgytGCaeq2ST5MRAu94AsuzpMF22bnXzGLF2",
  "key24": "3eUSHeqYAuxSwrbq1sq3cVuFkBZ9F9Ygpwg8wA748wsKZMfn4zdFMgz2xUmGCrfLoU6bCeqq43amEQqafuvZH7Jf",
  "key25": "3emYbPWwqQT1gcyXCt9tdbyyvBWh9NZBJHrMKwQRMPLL7hmPZwNf6DXUejgB29yn4KxKEaJZc9VNWhBCMVdDnmun",
  "key26": "3huUXnURpThER7BnMGBkk9Ej9MCZDX6iBgp6dP9vvLKNbG3626AxKcCidmeskCZTG3C2JUyzXVtJw8dzV6ePux9",
  "key27": "48GDxfFbRJ4oW2qyfF3EoCzCzBiFkBJVgf1XqZcZ4BUUc1r9TQawkkzkTQUj4d35AtJ63TA6zHoEJqyuGxsRAqW2",
  "key28": "28Ch6PcfaGuuVab5wmFitdRD8jPGhWKnwssbmyFAUkFofKzYV5tSt3FuFzYqQRZ4b2B7KwwbR3HnVcpvJUoFLjbG",
  "key29": "5jVhtp8Z7aoaXS2BkyiiAcuYWMG7aggKuaUG8bMJWi6dyRTvSxzR4gJXHsuCXFaiAJFmM6a3kKcyrZD5CdUXZgbS",
  "key30": "3i2xE6eQx5Y2SZCGBu94fBpZivFrmmHRir3u7TGovhTcWGofDiyPFdzAJ9v61jtECFUQPh9WJ6Uy7MvKv3hTUZMy",
  "key31": "5huEsrbCG11ohC17TGQ5z4eHpeXsSNWYPWaCfr7UqhtQPcQfd2BFbhbvDv1YvrjFUbManwzq616k5EP7dU7o5L7P",
  "key32": "Qesp5991i5apq8nDPrKs5ZQJ89tg7LsUm1TUQJLxkfkwMBoxgeVL5onesNqfHnE6tWMbEbGkiBw1yQv6uV7Vvik",
  "key33": "3QszFQZPEmxqwMHW31NurioCc1jXwR3FHLbc2T16rvnAUVg333U5RVna383FDh1SNQ7erZg7SpEZjgywBtxCLq8V"
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
