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
    "3gDqhG2weAHKrAYQQDjAjVAuAdksGc9D1p7QQZKewGnEkQQSVi91AESwu3C7YHtmULU54Eee8RJUcVJhW9VJx76v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQF4TiPMMxHgovJuraJSbaw2JsPRX3BtFBsq4Pu5uxjjdwSZYoTtaRe3bfFaLxXhGdGM9ZY4264DQ3oe3Cy8Kh6",
  "key1": "52mSJT8MdNRBxhKp7buKg8wQ6nnT2vcV7q4pdhw5iCMnABs6BQFgGwT12xiumuDre3N4ULqnVSWhaGUFqU87boWr",
  "key2": "36bVWhykuYLPTu2vKyUUVcPAiYi7YAsFq48csTKtiY68VuommYRdefvvaA8yViTT6bCE9eQBmR3zsFDzkzgA33g5",
  "key3": "3YJpRXBCfPBQZBCFPfjeqRKG2EqEUgk8DRimmSFpbmNRkdzmLYxiWTvi1BLKSmnVKoBQgwWMMhSYTH4H1fod7V4T",
  "key4": "F43iczLdextrx7dJ1e1qGmYGza95cY7bamq18NE44NpQoLTHsPJvRRiTTfeHwD4tEdL75YB1geJ7G7AfTUaPPHv",
  "key5": "4MGV68cfnBGc4brpLKECkBX2vifbL8C81t5YayJsAkM4w8nR9m3YEac7ZN4Km9NSrWYxX6LswxjGFLXTZ1r6No85",
  "key6": "2eBJjuBmwuBqF1qtKbKgdsFdU2arekbuPMvi7DQyydSp6kr7opwdFakZ1J1jLrqWc5t93yLBAnRK5Te7bFvEENKE",
  "key7": "HXrsTUuzdt1kBQxGT84wmQjX9qGkuEorgW87QSEJL7TNRdmb6GevYXxiqGPSis48nW4sZpHyfRFqvRnxn43bEw8",
  "key8": "GfLXvGUJ5birjuQdDXGtbaqsbBb2T4zESBf4j1Cme3CizT8gU6Xqqf1t5tu3EjpwaWT4EcG8E8t7HPe8iPimAMr",
  "key9": "5JTkGRK12XybPGauZAeozt6QT61TXNWek4GjACSfpMdCSsxvJBZzja87rv1B7vQdqPuACYgRuDuLyxRuEYvkWiy7",
  "key10": "VYgcsZSpi4qe4LT3q3HjTQbfyZnCvb7bZwJtqYJ1saSuxoMdQ1dkFUAegeeLowoDDF7XDyo9SzHrKXWUKYWnkb1",
  "key11": "3wc5vVgS16f9gDrtbXpVVUhGsvBcvzRVkRQ8DA2c93KZjNJdbSpxW2G9GYxjbaiSvf4B2ypmKfKWYmCkefnakgxo",
  "key12": "5Yq1Px8Q2Ao3NaZjqq5BifsuJASsj8cMyddrRRg7qeJGtxnZaM8PeJRbNm3LVtrcmTns9MqVVQ46vmLmJuGfPY9g",
  "key13": "UKYxyzj533SzFLmxGNBBPmPJnBfeA6ohC5kYU6dDHSSoxq4zwYny8shc1VzxhtMe96hyPVygPM5VPAxgwxnWvbd",
  "key14": "K7A4qaAvYppjYZFN7XE58uPoTuW847gua7fUa6YWT8dgncegScva1DcZksHKECJkCykZYrTTU3152xATkGYHZrD",
  "key15": "5oyMUk1bwuVJRq5sndtUUR7oanoHtrcrdCLQeEFFMTSSrqn4LcMCDSdckbnACDveu3eChpT3KjAY54NmPtonPfZ9",
  "key16": "5xPuK7b2bVzA7PJKceKwb6HkUdWZP6ccqSADQQXFPsxW7KvG1QAps5nvzTxSPkPmtivHDC7BwdkaWPgDMrXHW2pc",
  "key17": "5QbLbmFxBsVNfAFiPyMPyYkHytTgnbNGJrKaqSVdeqPwygM4D3e6sh7WxRZ55EQaWeEMZZUcRfH7TWPqtghMsmJS",
  "key18": "i3YmhMexWsiSTdUCCRxTQ8ZXh1zY2G184Qf6Rz9iQhwb3WrkgDA8xeygyq4gch2HM5k1C87a2MLrJmg5VfPCGim",
  "key19": "3V2edCMGxr99QMs4GA2QzrZnmTSb8gWrBwMZCFCRAfFP1R8sJixTcPMN18zwHB1gPXjxUb8ZEQhsEWLCMqstBj1j",
  "key20": "EKMBnUaTAHua5qog1FZ778fZZuw7dea1kAqa1RRNNJArnU5GgB7tvb4tWyCzUJ4kgdUNxFCyzQPyFkBsUD6cnNH",
  "key21": "56VX6XMqCBDdJ9CxXWMiGR5g6txYyW1Lov1u2s8385SzXcNUy84AFSBtoackrfzXSjq5F1iBqx1U5JzFHGgni87w",
  "key22": "3s9LZkZyoXw88v74zNMdGjxwz44acq4eEUWMVhgPundKq63TdzhwYXXM391PCNBiwTbEFWjMJUUi1PJUaq6MDYRs",
  "key23": "XiQdQcs6wY81voSLucP1AWHhuYwkw5fuM7fpWCMqGTSKUVVpX9Z2Pih8j9M1gdqRdW3ZvX7nk9sZVyjS2qjnaUf",
  "key24": "2JdB64jsfdtSYD64ic7qMvhvqVyvP44hZoHWm7t9KHsxTYfEffQQPhh5BarirNTPM2aPPFBLbiE2hpyNkQXiq7uw",
  "key25": "5ywHKo86DfJDQmfTCrJPAVVG8n3t8NwtvGB6F5VPpRCSf3o35zWVS7coyRT5J5vLBt9bHHF19ku6bXeMBfWYygwq",
  "key26": "i5rWnZ7C2LDFVj6fF7MVoaQ7Y5nD92t1hEzVhWeb8KdP4ykXJB8S9kf1ieqFmXeEjSr4HJn6t8ThmxcuAVBjLrG",
  "key27": "2SJrMD8ToVjo5Wsg6J8S2xX5W8c8nCUoKXS9FGbcGxaMpePiSVnKN4bNy8pvpEXieWakwrg9cwGyWpcP95jqk2EC",
  "key28": "4ZTutoZjoeXDrTgF7qZevjv3QcTRpBkckpGtNKdDW83sC3vZayJFrQvWHQsQ1v4bGjMx3dbQ8kLbiiVDzQ1iYy3h",
  "key29": "45xb6fQi9tTgLAXQ8pcBsdXShGD5c5E8Q6hoPTWK1qFpCq8QFuwLxNRqo3pb58Lp8j7hSmVFZ7SB5NsFs2tYYYER",
  "key30": "LZkEKMgYy3czXWtrSuFGjx6hNghJwMkQM786r8VtjVkQSA2j2MW8kGccQhiTMpazqCNBx6Pg8Finusuum5JEgqZ",
  "key31": "24QF5TpDVyXb8ddcqV5wf97TDjwLNqLsCMM9ivbcMcSsG1GkGbTgnSAFYkks51seVzwExJUW2KzP1YPS8vrMgH2D",
  "key32": "3Fc1GN2dqR3ZuvyLCK9xzsp9dkVMSTnFbCMAFBu6BtFi3wgwqMbgX4KdnRT3ZXq62pBQF38nsyDhVa4kaykjsedL",
  "key33": "2tHNwfa4zxc5BVBVyEwU1sWhtSYThbD16ytioMJELoCUVG4tMp6kMqgdoaSzzucswdtx2nHcdK3GHKuUmaVsmVF6",
  "key34": "5erNLfdT4DyudQ7XeiDrLwSbGsVu7JZYUKNXU2CKGpBmZ2qtAy1RpVAgKs5Y6XqEY4Wi3aFyBM7xdk9SSTo5BbFD",
  "key35": "irqfZARHyytVEkUzerMzuAwt9G3SGzynWPPbbMokUAp1sVNpkWdJgZsAF8wr2w81DZUEC9UcxFYvYCVRu9ruHSh",
  "key36": "5RyxQ6k52QUANtpR9JTPxp4KfG7yEwpWJEuuY9G57owByWWJXLzUEjkv9AvbFBmg3wottKYzs7G3WhpN7EQgc5Xf",
  "key37": "2e94iBTkPMG6tepBgTZXRb1SMZEtU4WkX96cSV1thHNKcbtzT9HF1hKdk2y3rh4A2edZZofesBCGQXvWDGS9PW5y",
  "key38": "28dmUQphxob6jq4Vd2jMLD8nvNZZiqMFNYtUb3jn5WKXWXTfUJtV6Vp9X83Xi97Mqrd7QdDpn3U63y9PN2wvsJAw"
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
