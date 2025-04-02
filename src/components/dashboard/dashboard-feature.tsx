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
    "F8prNRqzCnpGBhCk4h1uX1y7Fw4zFY2Ak9wsiLpTbWTco4aAs5Mxj5ApwetjytKeihiawHFHxxbvYyDKZjo2bHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "brfv2XSec1JGzFWDDponDfpb9eN9H95CsYy8f6GGqpeQsyfC43sLZUz3yDjuUMHoG3HXv75STLfSuRJFpXyEVhk",
  "key1": "4QNkvu5UUJouEa1VDEfH1krxFjSeL31zyYUqg12TjSxhFQauqCzvRKuhXCAfq3iEKrxDBqrydfvDJVguaAbPY1tY",
  "key2": "47U7Kq8kg8AwxxzVFt6jBhEMrDS5rUa15DtVUzxezQ2M7xPM3kCK1sYSsZQomn1JsyLVTiYjPshRDj8rJRefooXS",
  "key3": "3RNrrcd993NFHSqL2TsrpReFqFx7qptadU2qbUygRHxQ1WKYDN792snd5kThxwFRxndigN2cK8cAaA6KGXu5Qpg7",
  "key4": "5exYcr28kDkqpMf5mjQq926aS7PkopKcmC7AbbPMF2vNZSRcpbssxav3sh9BGFZqq8pgwHU7JAjWoKqgscMrFriL",
  "key5": "muKSmMKVkXBRrL9GACKZj3Asx4JLH9LxW1rUfs2Wv61hPaZHo8XQbRNgcd15r8iSkGJeXNKp7jf1yVkuKoMVcvk",
  "key6": "5S5XFcQfZfARDT3gCzdG12tnK5Qjvdu8BP1svBkicqMc6xxcRWrgZq7HSX4PuJtRG5A6fHznr9kWVZLjuW28M9qH",
  "key7": "3dmdvJVjp975WpS7gFuyrLTMTQbm3uTxB36kbYoa4Jd8QAw7DiTXhtQ1EHbrjeMXQoB6eSvd5TNfWze3KHuxpafX",
  "key8": "4nmkj49P1cYkD3TsoSjgUhirZyanrFhiFnvZY9rX6A285oQnDhiLLKDMukLhbdqU9Z8AGqv5UB5YXEA7zNcDYv5G",
  "key9": "26bVGa7G3ot6Kk8ENnJeZDM3CHxDeYGkxqPiSyH43tcUPRK7qjuLBBc45JLcQ3wvkkhk8VYMx1vzuynSaBKa6SoM",
  "key10": "2N7VkEkAx247SjvHTuw6F6QwTGj82PHswXRAbBRutjZhSxUh8X9cz9r2fV9NeW1dMrJcZCRfd1nga4FWBu2w1Ucc",
  "key11": "2okfUyAUcScPA3LzK9U7FWNqRKYDXfdhnPo2y2j4cJFPFuJgvP8DTebqkj7LP5a6Szv3yA7UB89J2qU5KNhdS3fb",
  "key12": "3xVvk57YCgXhL6CA7T3vYmGxaMoyz8yNCLRjzuSNZPMQCJtitk7THaVk3QcVyAkmYn91p8WY5pgtY9hP9xUDuF2C",
  "key13": "4pnLi5jJLjK1xTUeFcUmUkyrGjuPkA75Wc8cufheaBZ369Poau4ApuVQV1QrnZxVYY8JwZ8tAktZXwMeMpHYumPz",
  "key14": "3wQpyc3vWTdbfx5d5hEJ94Lm3rL7gZvP5ZYX4xHM76pzogB6pgjucmkvfTozpa5DcrU6FQWQgfRxek6rc4KPAKbW",
  "key15": "2L1VSsZjN3TFncEsvMYB8MWAJJrHemNcVfG8EpqYshw2Za3UnCdp9G4ed8riZJTkGvgXrCmVUPasPV2WtJHSkpj9",
  "key16": "66SV9M2rHGdyHaLb7dgvc9gQ8R4Q7UKcHSdqPykbzZVkGVUscgQTqoky8nY1M9nKnTJH8gfaVB6JsUXw4T8s436t",
  "key17": "23kEwtthMMtnmGYYeYQvGKCptog5QgY2x5GJRVj3bLxkG7Vk97hP62XGgzMRNLhecWCj6SEXb9Zgaf4KdsKUptqg",
  "key18": "58xuurqxhG5bgGyCLXH2iDjTVBJzq6h6vDGtAv9s5Ag5pRCmdKKPWXZDrEwXyovqPxrkU6kEwHeca8D5pw1uSGwN",
  "key19": "3kQf5UAZucYAxZkWR143qgsKZVDsUmfJYoPF1DGJAERpgqWnY9Wa32aDKHGNwcorgt72mJotTwRYpK8DvNo8Dbus",
  "key20": "5MY6LyvgQFxZ9G4pkZ5e4ojd6XWKGZ2aS3AqSyokoTCjpts92mt13YGGScMkTEdLHAqoUwB8oaA45vsDCv8mBoXm",
  "key21": "3GGDpKb9VHgZMJV3eyNohdFGAhMWi6iYjkSh1KCqQDV3dFBfCBnC4WM9vTmcFDbmuAihHSsBfApAe2xsKfooJkqf",
  "key22": "4MMRwYkPcHSQ97LzxUnLXL3sT5mu9YUoXuuobaASNVNXtntgCWTopCKqc68TJ2bdmh3kmBntezN3C7QrZSb8H2RR",
  "key23": "5Xed12Pn5RJtE64yp6fDDHHZ8uuP5orVwN14E9reGB73TBRtTHdpg3qvMqehD32fNHm4ZVoiBRLE7TtwpBrtXYhS",
  "key24": "5tELMastkHdKSJfwfWPAvXRbR8PVZ13Q8P83M2GEbC2CtZQPywo3RBCL4tAFzfw8zwtS3avzwNsoUb6vLHgwLrdz",
  "key25": "rowgUTPzgXMSqWc7C72PU2EUgRhF2bCqiDhbw8WLSinUzvMghu13ZWXSje72G5qdZYRqDSPnT8ZT36w5q5QDbko",
  "key26": "skyXJGXBUAZWoSGQF6hXQbDnRwv7TkDwdABjUxKFnkJJbTZwS2TuDeKMBjdFUybx88NBEUow5pzHDJWvadPbxfn",
  "key27": "4V8RWRYuDbfBgesxoGt7iANkKvKA2RoSuyy9F8M5basus8S6jwK1eSEzz5fPoCi84kyp9KgcnLNRjXwocPpA6XrH",
  "key28": "2YLuYxXnGd3Zy9zfHXpkNnrqumB6pU5ygd75y4edU5EdHsRMzGXByd2hiT4yX44WqWG4DQk7byPgz5VQtvwB838K",
  "key29": "4wb9oRinjuGhRFYS6Hbae6CFossbQgZBbYYULf5SpNx9NfP4WpQWB4UFjSBNMCtHdbx1LbH63DXz8buv6NVdM4kz",
  "key30": "3XWJuWKewS8fyEKWsstDC5shcMyGq71MHzUNtU4CtjPChgHLn2P91b9cswcVG6opULtFPv46ea1GTtohvvcxxWa7",
  "key31": "DKQGChnYsdWtezp8yNL4oZ3QN1vWk9oa98tDSoUrCeJLVHagFGLzrffDrNtv2YR5bVymtVERZBYhhdssPTgbEh3",
  "key32": "3KfgUfzMEerTqwm4xttfkYyneqCq2SgZBqRbsF1522pQZp51afrA3QtRPjpb1rrjig3YbqNDWEcVZxHs2cRKb2mi",
  "key33": "2gRdpxrMwAviPEhJUV7vupJfx8HABA4hwCGyoekD7SGVSMBhqeBXd371y5ZUa78bFJWDvaNL5cez4HCSzjTfEnq6",
  "key34": "59bMxJKVisPqwj2D5NfbjvFPn5aqYN7qQsURh4SFAFBjyvAUpc7r3QjKkcXdjjsQp8cZg6pbv9SXW7kzyiY2g16q",
  "key35": "4MkxE9k9Yu1g3QbkrVgsFTy1msTVDZTm6beZCtDPGw7CeZMNmgnvXUa9totkaer9m3mwN8YNRnBHyHCrjXsxw9Fq",
  "key36": "rBGuPAnzPV76axRp25khwinrkgyssMjd7WdoaBUEcuXZk7PdUtLohAcGoyjpaXLdwbB1va79EwgUe5zWic8E79k",
  "key37": "xKjunYz1MLZz2oriP86tjej3RK865Jt7VtQvq6RSVU3p3pmXdHmP3tfeufYB1ndsvaA7wjpx2jBff3ZpaKgMHUe",
  "key38": "5g9DJFZy7hgEa8oPpAfxd8p9hVjABqCSuJ5DVD9kNxoHBtgHCtKdgVz2UXAvpxcPe7FDesgMd4QsDe5gY1Z1U97R"
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
