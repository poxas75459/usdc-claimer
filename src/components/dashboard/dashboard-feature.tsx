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
    "4Cusyahrb86tATTk5LnKBzq1Zix3isoqAuxLKaJKsnq454nthqknkXhBU4AWaG2yz5SbpWR4exxFWfUEtyrAQ1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTKB3ydzX3ziF98aCAWaTjo1tUec5gNAmYbBpZRtoNVKW9scuofq3F3tEJAd43cLGbCbYiy7kUCBzgaixQB4nde",
  "key1": "4ybeUij23ZqDLD8iXGLhsv5Ub5rfjrViTZU3fntSYuuHCYvM1aTvNRXeNDNTUauR94WpyWL1enZjuWqXVK3YESNF",
  "key2": "2dQfBgPKAU6iRzCXRZfehdkSDBTKEw6CjHuyyPyTkBJSBhSaqLhEuKSAS76TtnUsyJtv9Cs4N1U7Bbz92G3KnqNY",
  "key3": "3zoE4MnoYRspqVGZV5YqjCJpcP1HgMrUiussSLiExoQWiF8BBrrKBPWkcBDYp4Pri7st6qPjT3DRyFSbB2TpVZdQ",
  "key4": "bTHUVoGufy7bTuE6DobxeFt4X9PiwpaypqhAGj8as1tvfe7Cm8xhnpM68WcQcweKkvDwXMpMzdCTcjeR3Mnqi4R",
  "key5": "2NcsKukoR6yWpTZF88FWNhfV6c54orMV6GhrGqsW68Ke28H3hNTsNzVT4eB9crQiEtVCBFjvtGXr19oJPuvXVdEL",
  "key6": "3jRtVNq2oGtzMxFLWRyTotpM21cezEcKrfhkiGktmBZeF7Fp99TdY8f7sc2dr87xXMdtgN7xhb2FjFiVLQRtKpAv",
  "key7": "4XK3fWfh4wigepEN6qJtK4axzB4Dc2dpqTAAAZJfr6PCuDSkYKzGCvitgPQXAkjiGi7P2JAeYkX4TzzbuZu3bmvL",
  "key8": "3PpA2T2fgFndNggW1AnP5LF2SfzQGPYiEkgPBEtHkFXhp5LWzhEHPkVZD682wcNzWqNUt9b1RAqN79bpPUnFYenQ",
  "key9": "3WQ4FawZWs8Zcbh25aSCWeP4EUa5syuqjfaV2agHGydH9xQbf2YxrJ7NWKkVvhy4UCtxuEEy3MBm5V9Wnai5XK1Q",
  "key10": "4a9XT9SNcqEC8VrBNG2uyg3hSUWPY4s73qWUbdeUpso6p5dZCmjLqaUGuErdjkB56pv8sopJSFSkrLjLgevTW8aF",
  "key11": "28BNNzRP5RUw67jjDobdC4MgvMLygYL4eGZYNv8Rysd8WcMbjh9vj43atsgKykVwFQi1SUA8w7EBUCGFsTWKjB62",
  "key12": "2yAq1qsE9BebN1XeXHkP7b9hqAWmEn1YijTrP36HTaCcCN37FQAfq48Kn4GhQkaS6hayuSSU7GbtNUbECGwrfZov",
  "key13": "3hqB7tiLrfAwKPGZAedzGicXyFzsPzMGS9njbWz6xE3kdzXvEYP4V9xjMHcwAJfxcgNtMu6UxYU9VdGjKUTvyEmW",
  "key14": "5Nop79xwTiBdrSJ2zsN1Zp5zUqgp5ZYLTZ55gGwDcc97tXGnGvr1MWMzBe86H7PUNwa3WowAhHMFT77qjBge8sUv",
  "key15": "493CRhGtueQUGs6PWX94A1BTigNKpFDmaspLdt8BSzgQuLqb56Y3AoBqkmvZ64GbtnyZVTStT2zpYsrE8wXvrpKp",
  "key16": "44W6iW8tBR3BC6EXAd1rc5tkyRTeePn8VFGQay8BR981zr8B3vXS2KPst8kcYrEXMsvA5u1vU9QdBdBnqB7dR9F6",
  "key17": "4BaqwnLF6DtFuYyKcDwNTZFntCvEPG9nL8ixziv8iMKCrTBabU7TKPEPQViyb8RYnnyJvkrLXJBcYRd7S2wmYomU",
  "key18": "3tS74viRoVoG94asdgceX636u7UAsa6qc6wEDhRCJkPCbYiBBjQKqghwuXoHuHkbhg3NihW2DVtPtJeS49V9GYs6",
  "key19": "4CSGRSfKqapftCvicoGorqj4EknXUv6iuS8VEMZZxwGwaMPzR74KTyxZSJ3KArtDDvB8G5o6MAomzL5HUnZ7ca9j",
  "key20": "5uGzTQNCrSP8mmRJHEfjQybM6VeG96cFqfFDaSodK2hdbaPrGfVxfqDyMzsFa8kvzNqZumYKXWGwMBMaxsxp6N66",
  "key21": "55A7BqgjJ8AgmFAuxjXuVP4XhXR5B4eVFd2xXKepRKYKvxw5ZH6gNyHp13gYXFcBMtMdiYkCuGZLHWWDfq2ide9w",
  "key22": "5Fp7igGDjtYb3HYE3YSyEytMdjz8bGMFPePs2d6fT42ZWUKp299R4y3FAesYeuUWqDTvhMuLmxhEaCFh8E1ZVTXZ",
  "key23": "3Z2j2AcVEmvnwjL8wEj8zeygFbJpeMCnnDSeQxsRZi3d4eTw7119CMJZNXqGiQ928XbsonQAZ55hH5fpLvQA2p6C",
  "key24": "2LXQLDotgVcBmKYmBNVdBeRLReHGmpCRGehtFwJQTcddbWC5n6uy5JRwxzjm6tXTByZvTo5feNNQrrzS6nyLokD6",
  "key25": "ezrBVS6hsnzbPeQpg3fMACfzUF25T5fr1MonghMSmfVCZBKB2kT35vWhA9XguyXraayK4kjPqvDM73ngTyW3VNq",
  "key26": "2Jt4w5sYYwwwiZvQLLTZWi7GaknWZKeuvEAsF5t14aArA1NrLKy3tWERBid86vGD2U9L4NdsLfhUhtUymRa35whR",
  "key27": "2Xx5tv2vK137z2uhQuqTmfRUjAvEDw4gaCXiBWHyHPKzL9qVZNhZUWY5eNxkHT1t5QpXpegkbaGMyZkr99FPocYB",
  "key28": "4hiZnfb7iG9s6fkkbBSmpd7388jsn9Sh4jS8beG2AwabPZpMYwRR49c19tXjiEK17BJ7fh8ZhciaWuDtzFnArkfn",
  "key29": "3NaC4iJZ1ByGFCaR34Un2iv1AHLySkzsZqw4KK7afbPDqPx7afiNuh4hTmCmp6VDhDY4esEhiebGNcLY4fXjXTvH",
  "key30": "4oiftAXA4sQSU3kHjBFyPKHbAWhf3AMW599Y6ygvzWEquzgeqVBSrgJxSzBuYvc9u8MuFw9HLML7ixUoXhKWhFP",
  "key31": "5PvVvSRDTW6cebFJPkBQyNifbF9S8mDyP2H6SRp3ksAJEFrZFYXunT8vKwYHPni7mbw1Vief6MrmCd9uoCKgBv8V",
  "key32": "4B27cHTqaTfVTTTiiK14qoun7dRKiqB8jhmg7LAJUrpgjDUR41PgPMx6BEfMGL2UCTN6qQ2wanYukA8uhpszhhKW",
  "key33": "3wCg9skX4oNRh5A7NsnWvGEM6MGUPP3BcK72tpAziQpZBfiztB7H5Z9s5zGgb9gmdWkgU6xbWhXN7gCNsZVqmbYw",
  "key34": "4Ff1yjdYQXiLgXL925i5Z6wz9jGJWNCfN3fcBEzciGVLewMtpheNjEa7VMF9WtDCnfAo141DLduZnwqnYDL8Mzzr",
  "key35": "3edNeLLEL8T9zpUTThe7BCGi6NLC6LQ1U5X3NG78isWPSuKewX88TUCUwHMSrrrMYdsyUsUsXh6W9tY1t4zUMxo2",
  "key36": "HdeEDL2Kijc4gyMcmoR3qrYeFve5tZD2gw5byECsVgmHvBFLmPD8kuRxR8RRWCkq6DSDD2k8uF9fiSvQmqKmMRv",
  "key37": "vmm2qeVXDwXVM64fHxPD8zrka5ZSSM4JphkDMtBsshsok3aY4JyBQLaEqm8JzjB3e3Mw8cHzAfxiByfRGUeZK4t"
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
