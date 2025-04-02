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
    "2PiPEHez3UR4oFVTpDakD3W6Go9ZK5r4HYv6BHCA4UHbUqvWchc4Yk6Xu4QRV9JkAutckeK6koqkaGtyFBrnGkMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXJk8NLSLDj3nq1hqVUmWEuf9JkMnDym3RTYkvQQNMf21FnevfjZmkQ6FNRDPjUjVyHSCoVQXFn3LuZmCb5mAm7",
  "key1": "2mJMQLTQHKumbgmbx26bR1T2ubQZdK4maDa4bqqmTQt7bBoe3CvxXamGoyuMsytTSyERYGNSER3Ev77BU7CRY9HH",
  "key2": "2HaFFwTTZsyjkH5gYARZ1e16bJN3oN5P6Fuf6WVbaW4fHAcu42FyjqwSGa6g41JdocJmvfmLNuMcSdpPsTrW9vSa",
  "key3": "43ufu6xt2RRaUayvctpGr916gsopyDw4j3Nk2HdWxxstNLK59WHyHgogFyEgZTbHnNRoBKXrhdyfz55LrWxZvxAr",
  "key4": "2A5QEeUFFPPPHhKeaxztJ6pL1ffdz65XeMNxd9iSm6KjtkrF5TTdwZ7sBb7t7hhhMufyvRDUr3Mpfou7kyd89Ajp",
  "key5": "4ohJ6c1Y8Sg6G3J4YAeZXSPwdesDPMdgyC8uTB6h7UmvngXSrqJ2FCvhcgeVA5wg446dY6sCYTQYh93vwPXKKCQ",
  "key6": "g4AngsKGJYfG3Ewb5fwatdVt85fyZS3wbsRpLUdx3eyBEWuQuAT3JEao2GEwdL15a7wFWZuQ7Mt3U3ficXYFjtK",
  "key7": "5yzVpJQzocpMF3ZrHX65yZAuk2PLizBNoQzUJ6v1wSSXnoADn8FkR3o3o1MEtMoNG8r7ktjuUSLWAYG5DJtQAQsB",
  "key8": "3Q5vCN582y9N1zLuPpDhHNcTZfRoTbwXf3XXTjoZrq6gbAsPU8oS7RJmW1y5vv5DnpcCGQ7Cg2kjxaqVVDDFB5KV",
  "key9": "2B4PTPAd1pCVzUYnDKYBAurweF5Uejg5H9fteS9EdNueJ7mVsrSsxTNp7TwNXYV3gyTdCAjHK7t57DBGmD7EeDy8",
  "key10": "2qs2v7hCneZM8BwqNEbtzV4i8kfExnWcVpTwchDGdwoppjZJ4ybEyfhwCrwLdA6AadTCqMgWZVP2pGJHemtpH7HW",
  "key11": "LvaK185A3SfPLoakkurxfVo7SUu4MZoSEaB2FZa4wUNDSEgkb8yt8DQQ2ELgwc78uGiHEpdsYk5BVW5cpGhECHp",
  "key12": "WL3ozyoKpG1QApLDFxLejRdksmaibNjYvg5XgmmqgZYjr6PVPzBJFyvp3zn8umntiZDAsejisWLsHZcEt1gSFAK",
  "key13": "mwdixFbzYk9eP9Bff8aVUhLBopkrmVtTuNyFaAUtykRa9JCmC2rr5p1W85FgzHqu8GNkzp395fxuBAPnSXh9tYd",
  "key14": "59PmNGLZnexHTv23EyvXugL81jN9zY6KpuTenuFwqakxHvkHQWHXk1wDy352u6WrdCP5m8HZvVb67bcQYywd5PYZ",
  "key15": "fM8zGdc4fqGvgVNXp9PzCJ9GmybXzoFhArJMdM1HxGXJ8sEtiWS7zZgw3wDWLqBw1zxogjgQ57mkXD59BRtsEVL",
  "key16": "4jS4dWGezEW9zvr3XH5ZR5BKFPF5z4RSUUoLsYwMeLd45bGkq3YzbRq1AtYFmTks5A6qfrEvtKCne2cskwdKtWad",
  "key17": "3dDaSw52j2nWhuYCsyGeHAnPQxBpJsnWzDGLjESe57qZhTwdw3bbfJnCRQk6hkgiWh1gBZY4UGJoHWtxfk6NqmNo",
  "key18": "5m2Z2fezZ75f8jJashj5gnWVeCgQei7e95YpS1n4UjKpAtM8Xf7BRKs9Jkn2QDzA5S8hUzPTwTeWzPfAYLudP8AF",
  "key19": "2fs1GiJKByMsahqXsW7vASBdWSmbY567GPxTFvxDrfToVdjY1i89bZoFzbda3biLqB2zdTppfXBdf3jfvfP74Uc4",
  "key20": "tvLTWeyr7ZZBQ6CJhmaBdFAS9HXYJML9YtNHVikyqvbE3zaGm7xDFJy6txaF3fZmZtbgHrxGL6dM7zgk3qRa863",
  "key21": "4QyCZ5jjscTG7PCJsG75bRFQ6LfZtvRd9g7Lyxr4G2UcZouVrh8augpRkpHYgU8viDiNyK9v6cuidA64CuGnAcMZ",
  "key22": "n7HwNtHc7YotLrLMFZDLCvB93jXH8ew3XiBrCKByS6goRMBxahtJekBhhC7X7keRVq4hcX84gRfFyx7N55q8KWQ",
  "key23": "TpKHnFLanBwrrqtKZT6KiR9S96u3j9baryypWZA48JRx36NbhdyCs2RV1Ez3hSwF7eaW4QpfHN8VqxkVJU3CAk1",
  "key24": "2vhzCzmmnPvVgoV9krTiakkiyF6UJ8Vcapmp6zDuKJXCu7Gi7XhJBGgf8HN4oEBpSMA8PpWZPtYVE3bywGbeB15J",
  "key25": "5UQ1J2ncofiJXHsyFHVQUA6xJQ9a74B1PxPPCGMWrDNyyPieAXCLYwKfiMeKXzBk1VsDQYaMMddthenLwxKuReBo",
  "key26": "Ce1Ln5Zy6EqtHhVJFoFsqPEzG2KJ2imwkcExVjEPrQ7MYx12dGfYZJiDKiMxgRs7LFcdp25jqAY39pZv5Z533wv",
  "key27": "ryRTJJaVyXU41mTgwJ3CegbDSoXLPHXYLBG3qt29RT4uBaRRAS9Z2GdESBZ1CUzpFkahott65w3bCkEKQjzDUiq"
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
