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
    "5qzCtnZSp6okKqgxHKaEefydL8gTrbpYWsQ33GL5shvxRRYvKnMTDKPHRTG6jZQUZCqnm2eBPgNWaenCGiVEkoWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGppVLcr9uAQYwwbo6xAgWHKhpbqjpqKskjwVSx6mCbEhA1pXWRHgAb15rPq1juQaKxKCoMkGrHWGa1C7hoQWx8",
  "key1": "3jgnjTk7SWa8yjgi3hmvQRBKnn2Z8cTPX2rUJ3kR53am4Tjt3DargaYPqSZ86vZvJdj9Fb6nUizmSdEogpYJHufs",
  "key2": "5sSeGqb3Xd2WiPRc3BCJ9oTkKCFa42ggT72y9tsE6s1iatZTF47xN68WYZvNj9AtdgL8WXanNRS5TuQdvVNSpRHT",
  "key3": "m9H1LGktYWLfqUtQABwrXeGzTBgqKSAK8nZjKcHP4gesU636pk42ZuQfEwuMVdTdRuBQESyp7YA7g7nxNtYbKzN",
  "key4": "4AMbhcoq2e3qfCELP9JTUSKKCKxS8tUR3UiDoQGLsPs5gPmTj4B69d9sr6DoAAQuLvXTVGqcfYMi4MbADPDvEdjn",
  "key5": "2xJKYkwtphFndzpZwTehFv2cmrJYeRvfumVbA8F9XHrSuNb6w1PEjmuZSetN67Dxznp9ouVrtCmqdAsRXJfyHpPv",
  "key6": "4huTuh6jgKzM2RkppjGXSCb9xphiTJLdreEUmr9jBMyM5KWA6zogL3h9tna4Z9nRm52vKBFHMiLs94Rjm57eJHrW",
  "key7": "5fYigYMbM1omJxdaqLzarYiZXpeDXeDCLhdB4HxGrhFckjtuLe7qgmAp3furJyQ92PDVuX5sii9Qtzk5qyj5gqdA",
  "key8": "3D5DE5rhpCEGEzcCHpoLXyyitdjJsrjCX7Bd2hpyWGGdqkna9Vk6BjCYAYktt9b1sa1DXR8XvsuGEAidwpaaJC9G",
  "key9": "zgzh4KKmQbn7kFYLDAFsqL7iiKFkMYNz5CcQjJuccvi8Ec1Gcra6bMVE6obXyNvpMvgNWYij2a8vy2zntTCf1gY",
  "key10": "iNVWBR8TL4tt1LEGX7qUy4HKNvJyLyM7CKg35Ns59eeXRkB4WCNFCbbkEHBxv716SKrQkaZMk862psCvXfopJnG",
  "key11": "dpCZxFqQHSmueFNS5H9GBER92afei2z4csuKsca1TsTYJ3G5B1r2nWU8rH8UvFW83UrdntXAqiPqJYSQbgbXNSM",
  "key12": "2djpqAtm9nawiBC9U8jz7P4KTKWV5x2E1GUESub8me71unTUbsZNmQrV9vYnZ4P81ZrepkaVYq6rv4qs5xWFY1Q3",
  "key13": "3c2RVmZFiJWGXmjfwVErpvozmzikE9dQ47xDpT3jan2v5MC1yytrdZMKkuYLEwhnfuLaEAnYECWNxyfzxG6qAf4s",
  "key14": "3wo7XHE8iDAjRqQf3GuhtyjAL794sJyAiduReYx39k2LgjMCrigr3R9Pcivi8PnmuwKCqLHjZ7cM1cjpS8UbJYZ7",
  "key15": "4dygPKWYiqf2Rfd9KYrVuKkj8zGuSXGBpmMDEoHgh7bXw9ufvvVwJCE9HsyZQ8mmksb81C7TyufezPPGAXvWfzmx",
  "key16": "hJQYJJR5WbdZYtyNd1oG2yhQWRCwuP8TqQjgn8UJazMiXZuZrNzwWQipWYnFfrFxNB2HjxxLwJ5sspxrP2Qu6eP",
  "key17": "ydecqBde8FZb8DKcwo8A4kqiD1xznUmShkXz62BS2SPVBGWz7w36GHtC2tMKGgyxxnuSi1nZx4pDsXMg6kCJ4pW",
  "key18": "2n1A2Q9WcTNCqbEdMTt5MBG47cVRCDdAHEFCVJo7n86r1PBFJocvwbqsm7SMZowjS5jSwjnxng4sJpYorNfd3UJN",
  "key19": "5HWPU7c4aEbpNKqNQsDvKdUkQR6uft3cGujBpbVHiD9zWR1ykVi3NMgq5TwD2tymy9JEYPgqj3HMLyrg3ZnW9HbT",
  "key20": "4G9nMxdBDUctUZ953cz7yCNrYodLrHTzpHgbcpbKdCPAdAePSwb4L3YishBTPrz6yY5LszLnG3N7ScZkEMv1SnpL",
  "key21": "3AwVwLiQUA7i1PMfRUPqGC2mzTs7Ke6G5JRcGSgeJatUGjgChJ5TodsBy6sE94JBhq3z9E9vB7CmDemjJnDhQ2R3",
  "key22": "3ZFCF8srBbwHsCipqoVBWfjHEVFguSLKtzaKQ6xnpu7cxW4ABWFYjmiP3WbkSgU6UT8EM4DtTys3WpME122gGA1h",
  "key23": "4LkfnmM31sQ2Z9rnZ11zBGz1y41cMrNtxVrhb9NavV8qAhUTMtSa46GCLzg1sPYyUME4Vf9bhH16NyAGZ2BAY8gN",
  "key24": "TpBhWWmH3LCf5pmfBe9sRTgunNFfCrQAEvsfg5rggYJt8xnoh5QqrHB6EuZryvFks41s6mAjx7ukeuT2f38Fzx2",
  "key25": "21ohirDdBe6fhpw3ZwY6bjPC6s7JU61Dr82duW1NyxzRuZh7cjoXvUEMa8BapzJckTr8h12MTQCStLB2XMxyqULR",
  "key26": "8ksaHgf6ixyxY9i18cuyeQskWK641SGeGZGVHK4MiZnZDUF9DEp5qTPLaXb5wxYcojfb3EcCRd2P2RBogAWVWfG",
  "key27": "4dnaWUQRxiX6bjmqJyM8Y5LVuZMwdZcp31xyFSKG2RQ2YsGTjGDgiqF18Lh32vKRZn7MxxgRRQbhoaAyBn4f3jr4",
  "key28": "66wQreNP4hXMrSGn5RyqoWtTscoFfkrVT6oJDkEz6cSMHe3yaVd4KyJj5qkascDe86BHQWB9uiD8skepjqW59q7J",
  "key29": "4quq7LE4yyEBZoBuRiew3Qma3Rz5D6uT4Z7WHP8WDzSB7xZf1NwuvgSF7Bq6QQENnDVvrhKGtwfnPN25xKCwxhE3",
  "key30": "5wR2XefayFiffPC4gyWwYpDiGUXpvctE2j8rW2csbZspWLRLq7SUf4hVZFcpmD6dgauEaHFvNG78vwuYXPCMnJ9S",
  "key31": "R9cJcJ3oawdAZ3Jo3DtH8qa8vH3fFnPw1VXiZW2TDEcYeLVsYzeE5Qjq5zVotqxJGFAG1JD7PtFQD2cgbabp5pC",
  "key32": "4fHPoSP7HeSaY2YJPj4zt65dZtaT7h4GyGtmZ4n8a8AR8veRwB9vMaB32b7ZYr5GhaQ2wPAb6GpHUa4MNmyRehHo",
  "key33": "JvWPCHX5rNuX19RPk58rA9UHdfp44qKTcDgaRptS1Wk8c2EjrKkPMfmFFLGgQyTCyMLdWSM7Wau8RsPRbi4L27M",
  "key34": "8M8F4ihkEmX63TPq2cDZ1N4jy31oyShqLLhnh8xxAR7skWdqi6r59rxDiMpJqknWqAm1pfpd3eZnyqnkMKexqMP",
  "key35": "3bfgD96D3CDjzwRaio7W6iCAA3QJcy2UP1GyjYf7VMBKtn5MD2ikaZd3y7zoHSmazHbxpo59YJ1r7n1x4CzKysQV",
  "key36": "2PqPZizKzQ5Rye7CFE6pFH71skhGERCuSiAB81Jykb1d6qENDS9TuQdNgC5ptbDYfDKEYaqyx1JAvABgYtUgqRTd",
  "key37": "2GD84KuWwseMpRucbF1LNFXmUoXUwQao2qardo2ZK4ktfeq5oBAaGGLDzNtBQg8snZ8hyRsE3iR5PhiFCyrfDRwX",
  "key38": "QzJznAgw6wpb5YRGzScAukNxjG2qQiZLnbeTt1uxXHRWnYHiLhR2SQLWntjVv5DRbm1N3nYVSBxCbKophsi5U9Z",
  "key39": "5ucXviZs3KEG6tJFHhrWE1Z7o8Xa3gzJUkudoBek4qGLdEUZM6rmAx6DSXHoKj37dRN1J7EXPKoBGHze9yjKWkbW",
  "key40": "3CeZNQj5YTGNPf3xwSJB5x7TLzT7oaFHTr69ApeRg4TE6hAyebixPCLWkB8VD6F66G2gWQd6B2i6PtFTzSM2qmrv",
  "key41": "3Tj1sAABLKHAJYSM4EsSt51RMxGUqqdDSrYK9CMB3MCNREjAwkzvGjRBVPwHyjewntE2ZWTDzMp3kJNTWpdQ6U5a",
  "key42": "3nxy65ePoVJTJpKz4yng8YGub9MXnjJFuAVNTqUFLsgSshNGFfqT6rbbhD7hbzaLJhdtFrfky4YsVb85x5h71wha",
  "key43": "nGQyKQVxgc4bNBea1mXzQ4fT68iVZurXS4yc2e4arhpSUkj6SwLRHC2HhHBTd4btD6NdDSdBc8tN6j4F38AfRHq"
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
