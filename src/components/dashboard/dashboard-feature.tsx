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
    "fZPfD1G7p5WCWaSMe7DhD4hW7G7YS9wVjwsMoFyKUdyqUA7L2CGFogMVpLSoQCjqrwNF3n5HWoYVj5ZRSDdVdi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vF52XkZU6bFtjepiggHjxmXGrTwChp2rNBwP6jepJT6tfaXKFMJTkzBXoMu6AMkGtmgRFHR5fMA1D6gJFGbxR8M",
  "key1": "4qWAQdzS4yZmNKWS6Qd7PbTzWxZNXcabK4g8stM7radkf5VXD5zdjraANp2TDTEmbj5N1s7FKE5eBNWvZdTQ8NRs",
  "key2": "2iNC1KpaVJe7984d2e7ZLacLJX2nfNuXckyEU5SMsCrYz155NWXLGwZcscGvPRSHTTPxsxx38VyCdeqF8Dn82GPG",
  "key3": "2ZhGzXszfhhfA6ebi5p3Sf8amSEy7oP1rMDLUBhCaD9iQkMwEVfDjoi2HeDxoCeMZHDDgJQJUMY2UNUqBsNSnFJu",
  "key4": "5a4MhNQRLAUinvCj29DF9kBPAgttAmPy7xoWaceD2cnoggpEHifb6YW1QGLguS8FYT2HXGHAsvaSy6CXPBzrnbbo",
  "key5": "3sSXxdV35n3R9JrHtepNNZYWiDyf82VitCpSFyMov5cBW69vAoheQmyX8AZccbKd2kX4gvTszxGqUz5mac1i3oaz",
  "key6": "2qWHHYouqMeDs9WLjftivSK2TyuCv9eFW4knbgq9zbhDtiHUBFsWiJJfDaEfJmNDYaafRyW3FxzBTC1esnLXSvM6",
  "key7": "5CrmJDE6FyVY8qJ1iyZUN6kTrUHXLozX2HNkJDNGA1CeyicNq8RWuUfAEscoZp6TdNHKar247eiriDE2BFihxCqK",
  "key8": "4hqZ2FdVjfjRiRPmbDVvPcYu8sSaHNWTnX4CzXxWCnzy7wnkhKa6bm3EMCRy7JTmoz6Tjw4JoBxHjSp4aL9N7Zg5",
  "key9": "5okTGsZDoLAHb95jLqTWi4XhAuamisGV89fF9CkTCxq2mcryjSiJm1yAZZG4gRpHu8UESPB3wZC3d3hey24AkmL1",
  "key10": "48WvFspywN8JZdmvjq4b44Yd4qD31W6afR8AmRcKt5Qu99stSphsxGhfVwTB8z7k8E3F7eEo74FUHh1PRw6XgmNc",
  "key11": "4Jkgjuvz6c1ArGAyg8zsGEdpuNeXncaTsuEyHwC7HMXKABUNc7VGskWv3nxZL6tV3DnHZ8UN7hoR3CzH7s2AYCBi",
  "key12": "4Smj63mkBdMuVCVjZ19Q1Zy6eeaXchJn8bHtX4KMN1FkyXobdKLSbHRqeynQgBNYAFQVhzsNpHzVAHe82RbfeuiY",
  "key13": "2Jo2GCzw2HayWaW6bP7prtfsm71dcHsQFy891qPsQ2uey73TakZ9bRC6YSjAcmuRtBsGuMiW6cPyYviYWqPnCRyg",
  "key14": "4PMqo5vLVi1hpWmSUks74nQMQCiKXrLCUDAohXKuMNMmwQBwPFt3jiqeuvQd9Ew9qWUrwGPxUyYFr25wGs94ri3M",
  "key15": "3p2vffhHaSYGyr9ojvTyVC38qqxCe87b7RxudfjXWWjyGDyowg27KfWXEwwHwrUSsSyXQHqsex1NHJAdPNEaXPof",
  "key16": "4gFzZy9WCfwMZCaJ2AfQUpH1WBxVRMvYRVZxpDecGQ8TEkBUsJtB4YQQbdPscyDc1rErY22yDYpEF1xVx5DE9TmA",
  "key17": "5TiVMYsE8iAF1xwhas7hdayv9H6sf58BTHk2kT4y5Uef9qhwKgXWSJrcFTDeoF2R7H6gQN373q7TF3oHsLq8h5Qt",
  "key18": "4cakGrzwpJzvAcA1CZheydeGKGLkLpfddG6ksc7k6We2k6JZCy7rXSDmGpM7VWXqEDEFqPZueQtFFNf5hJdWCYUX",
  "key19": "5JoJSrtANuT6LWzaoSU9EBte6SiTMtaGHesa1iamumLru3DD1Q8fPQYbycEJ9YWM5XcHZabRB9Xdupc9DaLqCxwW",
  "key20": "LzCuqo69vXh7y7Lk4Jsdq1XnhbaN56TbLFj2q6rfa2vFLVa6FK675tqnVhqzwrVYReusvvxDrWrY9d2PD6jAUHE",
  "key21": "5Dk34duBdh9AFURyLGnyUPW6xav8Ni4z3GnVG1pvjNqn7fX2nY92jKtFMRUgmbWaxbc5WabWqLeEsTRzXFA3FjTn",
  "key22": "35sQSrTM6ui3sVm4RBnf1s1btzn2EkUs97DCm3YoEcyrQm1uvLuc6jrJu8CHvD7886mnj1bGb1kFRWT37dcFYWiy",
  "key23": "2Jg1bfcyk41ogFR4cCQE4fgdhvAQpuuCrjoCDLDPzdgvAj944z25br9EekJFXFsinjjyoJncb1tqunyGuo2HP1Yr",
  "key24": "5ApbA3XCFCMXBQMuR1NQ4i52azd8e9G5imcY7YzhVc4FkCmiasWEG7AhX28E2z53E7HRBSa5GNrknD1wPp3Nak77",
  "key25": "5rFKXtaMSwwbtLuKrZHFx6djfh6gcwHoKdnYZ8mmDE6RaVooH4cJVjtzYMpoLnLHr5Kz71fnwu7bnBzPH8U9Rre3",
  "key26": "4M5CMXcBP3ZMHqiSvknik8PQu1whUTjfKm3XEvG954tZmJbftK2ktKrxnRZHNKCPBertknkTGWVUkcS9fXbJYroA",
  "key27": "26nu8emNoacAu5mPTRq9FEEenChmk8n6thHJ8XpQTCarHGDhTyGvCtxAMUX9UXhSKS1bYB5GdoANGSkrbqCtXstZ",
  "key28": "27L6dXkX8NMCAP8Fug3yKGLnPxQ71uBjVMsEd3BnmDaWRpYZbanpSrgygjYowQ6HCr35vRUjTw9hBnhNzd4wcTZ9",
  "key29": "3Sv1xbQhFETfSQDRQeuQH9BpA8hkybK8V58W1nqrUPCCjk6GqoVm5cmcyN8kGM8QQ9ZCVEH3r9xTeFDYhwdbps31",
  "key30": "49DudN6nF1cg2mzWxEjWMXBZujD5X4NrtJRSCdgUduhkbTQHmc173x366uySGAGhyVFR6BfdgDmKsGPPo6WkASdE",
  "key31": "4z3AybkVqasAEmRApsEwyHEn4vtAiU6zcUF9zQXbh38C7zQaLfzhXpC4TJW6Z3vihmHvnwUqZQuwaS8ZQmiLtAjC",
  "key32": "5jgBzvbiNGDTAJVfHEfGBbCRXcPRCYbRN9YYWmidXa1TCMjpsSSLL1kMrtazSmCzCjPE2rZrimmFe4qHaZmg9A51",
  "key33": "56RWDZKCLN8kmni5QeUtTeesTqmEdCksVkZSWDtqM411mHBFTUwM7UZz54eMiLKDfzJuQqhito4LZNaVAESdGoDY",
  "key34": "52W7ZSYondYXabz6snuyixrxT54mLdbbVyBSUZzvSLFihVSuPJzkBz3U4ZKUKgbtJ71vBc3zvJ2RdVPDQv4ejDMo"
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
