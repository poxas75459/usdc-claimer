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
    "3dWFcXb5RBNL1BApm3kHPgXZimh9deqcZpKBixeAiszynfkVtQdF6xgxhQqerqn4KkTTTDybqneJ77fYhZPRtoij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crA3i32ox1wtmPyo2e1CxGumzuJ6PVD4C7f49fPRfRY1UAwnu5wRMqMQHpUZtRRTQotbaTZ4z8jpmRxfpUrxPwg",
  "key1": "3efiNocdcXSJc58724uzPRfb6UUC98uAxExKhtM1rA2Jc82sSij2d7sVBCvesfxkdxBttagxCayHA9tSvWjPCFoG",
  "key2": "5Cv52pgd3k2pnmu1f2u3hCHPLPR19hWLcaWdcpwLs3Vn4tzkbGX6n5D5zLi1rSyW8AUwKuuWwrB9tvuMA8oVSvrU",
  "key3": "2MFt2jcDw35AtfnaHRR9X6Qq8p8ajcQo229TRU8N9AsyMCNmiACMXFu7jXZoyVuAYRpKkwfAf6XRGTL53UmtWaok",
  "key4": "najLZaW1z2zzX1o1e4ui9NqDmKmFsvRCJcPV6ZDNZFgJgt1gsSWf9PnqpwnNJohVXAnCwkeFMt2ism4NjBpDcQS",
  "key5": "5pSUXBhqLPGuVewRF7kpvfaSSwe1FjztyBuLxbSWz7jtd3KDGvyKymW1g3G35T5yKhrH2hpBurQ8WrkM1czx1JmY",
  "key6": "yysyRxpkLMaaedNEbbbacAAu4Y19Zs8KSy3NfHnZUmz1juoEHD3AFHghGQvLMKUEcb7qtCJLYWjnm771Bm1YtpQ",
  "key7": "3Uc3VxuvwFxZTBgGdf1naXDyLKxJp2NN1FSzhbqNVkxyn8yA5DZ3jri1gkf1z3f31TawPzsKdPwLmEXMnCPKYzPn",
  "key8": "2VsewMQJXE7jVNWk16crPXXEV9M3hueaWNfwoGscdEFyQGbo2hTRySqMdtTGAUE5kTtJKNNy2zdMrwNEvqK4vKQ7",
  "key9": "2UnwWYb2Y3tiYnrFwkJPaPFGLcjARBeaJ7NP7SWMGfnhCD3oMYW9aKyxF4QLhmi6EyiEpq25Q4yaGMVSdHMAwFqH",
  "key10": "rNptJbDPAEtMxYEuexFfoM6eTso1mWo62KRwUvmzv2tai71Ue4hQ6HovASqkiDMQgEmF2ZcMcqBgm352EhiUnGm",
  "key11": "2YfUb1ZmiRJ8MUhEaowWsJHQKXZFx1bYbeFXm5dt9hHGftYwR6qytZ7iSNanmdBidWBSvUEaRA7BGmJetA8SY36x",
  "key12": "L47LqaGhaJzEYB2M6MnQPpgr3PXYeEbTVe3SiyEc1BriacL1U3WNSwinAFwwusHpcntByzzrrQ5SCt28YAePrqd",
  "key13": "5Ymnvwa5ZuGVNKdHJ7yiEQ1XfJwCxF2EnSoJ383SRm374AKZ9tHWNqoBR7pLMDNEGcvBADd4VupGxrToufKpKcG9",
  "key14": "2UY9oHrLnX2Aq9JFUsUDeanRoDZQidLuAVsfJm4GtLh1rarCMyZrmcYJwnnXVGRWSnFZQ7ZGeRK7XWcpx2Y7q68o",
  "key15": "49wQyf4Jv6fcHZDMwJ9U87XzQPiKHVEZSE5gmMVb1CYs4nBY1K7ArZkBYQ1cPukTY1RZDERbkZKYMnYkX7dgCZ5R",
  "key16": "4DQZ2eqpLQFUVCEUUnhygFkdBwPuw4fhx2DuzRWDu8F6kMCF7y524yzfLVCzriXCwT87sSAqDbZhmzobk5gBvruc",
  "key17": "4dNtanPCiYsrDm1N3VqpDGzaYTtogTjsQsuSp1vT26hK2bgh8TFqQ2VxVcB6r5yzpgifyDq77CHFAHmqDVEA4fqU",
  "key18": "CjkuVhBcQJPmXEwAjyfYp8xgtSWY3q4GBhtZnvXfefJxR6g16a3DrxEsCgXKTRqhLtr1pjyp1fXbX9ki2QaTMz3",
  "key19": "4KeKNrwJU7N6TnVXteK1zgeo3BJejMP94jCBUMhRKXgpKmygptLPr8iymUyi6xqwcfDnABbxKWoh1eQRJawg7Rzr",
  "key20": "4yjJMg3eknGbFSYP99sY21p93abaMHsFTYDJEukrVm9X4hLbwBfQ6CUwPhx1Adp7VmqcSAZfJBQrXEe1TB9z57LN",
  "key21": "VNJbEBBjxJB3T941yBn2REcZod7SYQCGy4pXufh6GyXngF9grdS7stHr1pcb7Y8RpuRdQaRjR8DyqYrFXJyQo4V",
  "key22": "3TwMhezhuYqvKbHrPKhxG3YeETvtLbBDboh6q9zo7DcrtuouGtbJ49vdxXpb2oF9Yy2tLiPweJEVb6SVnZfg1WWo",
  "key23": "22Sptq34yna9fxMoRtx4ZrtxSbJqszcjG8Zm3s8gEP2dSXhbE2PiHVit75RdEK3cDQKguiZeqAK8jQ18kJ4zuvBk",
  "key24": "2kNDVFqX2RK9vBaZV5ZTPTbUF8fAweVBSpmzD5ijqXLnKHwtGyitorMa3AtnadMkyjFdVTuMEgLWfo66um2L5KHE",
  "key25": "4xbJruRofM1oK7eyW6cNmjXsCnXajvZ4xnVD82jN7Ugbc6WEsWSmgNFTkpNBjQdwA1zA1m7Fwme8Dac34g7CXyBe",
  "key26": "4rKWZ9B7Jh6RtTj4JhMLNhkQ87Ki3g4u8hDkZZCzeieWvhudqDzcHwgX3jdpNYUKo5HQp2e6AoH5tWjPuM5N26JR",
  "key27": "454jGgeUfk3bYRoUi2ALjJi9GW6FVDj3LgJxx44Rm7NoFn7HTqazZoyBU9UAXNXhyuYWVUZUu9589rH27ndk1a4p",
  "key28": "3hRvPjGhohjPbB2W92ofdZp5MqWvWwRZcJge5WTe41PMKry8xU4wrQci3ga8tgX9vwayWvQV7GCwpHcXATUGSLFp",
  "key29": "iXgpN6W5zm6v8uEZV1iXSisaXUnJSWG5qeBHyZpuzfUA7irYCJk5Q91m3LomZEhkkHBjmUCZJbn4tMWAp7QBzLk",
  "key30": "41iZEeXW5TsfX9SXnjwDVM2uJgum1ApDiHoj5JAA6WYtLitH8pPJ6LZfPprqxPwTSsLBSGeyFME2KYd7brrwv1tb",
  "key31": "3JuXukj1HoLH7xVVtKgsMucLv1FseUVyyfRzEUJZyB1PYVs494jVV9F4sHUb9aGxFsTjTzpQySgJDCyFJJfSMHfR",
  "key32": "n6MGz8ZhFnfxktnmRiHjEJMCaZJPmF8jUZzseA3WUT7htvGxetnNKzpYaENYymPXqPTGHL6yfxpQ1HoHVYJaMMP",
  "key33": "2fTvx87te7NJjy5ci2RVahdJbumQ1UDzxqERsKj3vWTpZ3LdrdzmQxMLkojZKrGXHdJWz2qbN31qMzbCWPJ6nUk6",
  "key34": "2EveSiZH2TWC688qvcjuwySDhmTVaPGWi385qzbb6YeEhuBXco25YM55ftkBTvNMtgqu5JTQjAEmCiPATV7x2dcU",
  "key35": "3bDFREGkgJXWy1sUiyQ91Vw95Q7uHdUy46fES5CAFb3YnVKgH72pvygnxtVDor3PFpYfxxSNB71UEPHz6HR4jTur",
  "key36": "2jok6x1e42xjuXAPMMDxeG3dEWGSGbmnJhHk7HxcxdNcAphQ5WZYEC2dUNvJNRHZAc9qFGJ988nrCossgeqgM6EZ",
  "key37": "4ZyNXfn87VgybEuXgrf8hEyEmjxULAgAWCffZgzReC3Q56zonYTeKmjaBpZy91zS4E16tp1wqR6sNiK1rH7WuXtC",
  "key38": "5BiCUmZ6zeYSdh1X7cDwo8zWkabyxF6ojUPTtXB31AbofkfXzJUxpE1RuKwtdAzmdGwiCAZEpTA8Wm3bnncDMVaz",
  "key39": "3whkmJq3KdUUwyQAPiToQLQWaExNg7mXGj73J1nQxeqZFChi4H1Bse1Lr2KJrvgfyL86E2FDz5xBjZ95Gzy8ws9G",
  "key40": "21SP29CKLr1xz1tUjsRvZvDhtSXHK5Skndu5GzwEEYpKxseLiVA6uUt22J8TMjmJofNZSWzPjhpsy8V45nr2SNQj"
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
