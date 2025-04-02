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
    "kTLvw6bx7kXzTZxM9hVY2cxPtUrYyngrRzpwuGPoHuHha3hjX3p2PBFfZfSuG4tJRPbCv9r9nXQjMoNf3Uvs5tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvKvhbZ2fydChpvq4P7cgXTMzWghSeHgaHBpRj1xjdB77sGLaawBvL9A3jwN4iH9rmGiSref1tDmXDhpax9JNt5",
  "key1": "xdzMAkZ3xsr95s1J2aJpkiLAF1pmvs4AQm2Arm4aS1NU3sQR5HauZaov9pRDzkViuikhNLh3KxPxYBQvraazcC8",
  "key2": "QVFvVitxuPKEX5nSxaVT9PTHy8x8BEXJ35hCYSuWqsKUFdq1rXg5HFPYJZCQT26uPYMoBTyAvjFaTUGKBeFwgWF",
  "key3": "hewwM9PDEqqa8eLeU82zrUnKYc5j79TxLT5s6Sr2ZShmq3c6UsNSsYTCEvEjJLHJpBfLJs1gNvQBVQBpXNExQMg",
  "key4": "3zn6NmrZLAAnRK5PYADizesTLWfa2cWg6i9xmGkgNjRSJqMm5Y4AJLozgUYEPFwXJxYE7y3ZptV2SusZUj9hZatV",
  "key5": "48jwx6JwXeEuyG2ynkyo9REThWUu3o48HWcRDTya4E9GsCrN2bDX3hSa21veMT11JDyym8t9MtQqmeoSeqbE2Spn",
  "key6": "BD3Q8GnUCHsvXMorKbroPjcYU9cRex5UmBLZPXPTzPqeFz33dEBYQr6vFDXFBUWU3M4VwDzLUQDyoVUZ7aTLhJ9",
  "key7": "3GVG7ETR1ESA4ZoG1UGEcntCJ3oscD7DAFDYwWHA2zTuoao9CrV3GuGk9KNrFUTZ3mB62a5xfa4PpUmkXsusWKyh",
  "key8": "2m8jr2CJKeTcXteoTtCaQwDrYQ2vvJeErfCwE6cnGmd5dEorRmGa2NwcQaS2xDYfP9pBrfmTuvX4BVMUobJMfgbz",
  "key9": "EbeTXc6CMEXoyeBzCbxw1v38M6ncbkiezNqS4FXA3yBPskGUGL2YFpnv37rvw1HC5JTwy1QBUxBW5oHZU2PDg2M",
  "key10": "2Qv9mquCM8oVRsRSyzCULRZp5j5sYtXsGK1fNPBjbTztHRFcMxLuT7sjVnwfQHjw3YEVMJxmaEF2CXsFxhzTrD9U",
  "key11": "3c1MBWyRt4RhjZkAEgiV7RBSpm8YFgTdReYznWNQiAi4XMt9m3LrVAP3RdSbhMgquxWP5u3X3ZrVCXDnmAenA4LY",
  "key12": "5E66Yo17if3sc6o8R6zK4GMjEVbe4CiLgtfGjCK4xTZMowUB64FsAR2H2pCCCuQRauYrRRLfGn8wh6oP97ekLuyz",
  "key13": "4MciFCNEhKxe91Pa4B7bfPcP31RwKrRzbezG8KaroVrwvo7QBUZfUHLXf678ocSVxVt84URGRVjppBbPJmShRok2",
  "key14": "2XFDWzvjHq68Mzu6MPkwbCjkYmm1GKPXbbALphf7kppbRrsG5eEpciMhUSrpNEP7QbTT3rF7DpPowkWDQP2covAq",
  "key15": "2e5SMgRh33M3BbYAqW3vTMecJEMGyZoz4EyfcN8222Sh4sfagXr84KZ34x9sAyCBNxV6wy1464jZFQNczzgNoJb3",
  "key16": "3RNwv89HkG4dAXqshz9MksLxbdwmGNMQ6agqqyiqFNZNk6xd6EcXZKgCFnzeqJgkFWxWcYQ9ZstJxBFFKPQbZXoL",
  "key17": "4hmBXGTy961E6ST8GYccWzSH4nZCGG9H7u1HLnCeJuWAxE1wst5ZLVivaFda4qeoQWpmuw79bivNU9jof3CPvQci",
  "key18": "5Nc29vkFVBfdnKEDFhr7y2SaNrinWDBvn7AW7T5ajGFdn348spSgFwQc7qm4pKuBnjiVEt4bKQoNWB2JrFquZNjx",
  "key19": "2mMsvPaqNSZhZYQrEHtUcuDt5ciL1TR5KCrqvdHwpsWHj2h5wUc5Vbk9vgw3T9McvB9UuY8JfJkNsWyUQfwtD8hw",
  "key20": "3BZGBFUPZBmu1DvMGMp4REkUJW8KzPr4DmNzr8n6EqjmhR1A7PVzzAFMhXdFts91tvPpemFhM8RkE32sPg5D8QFs",
  "key21": "4KiCQFtGoDKBWbrToze1WymTVHJX7NUWg7woXv6x74uR5XaZcAZ8sjS77akuRh9ChBvxE8Li3s8sRuDoKYe7rBQz",
  "key22": "5wxByUwD4x2dwcMMiVgbQ2ZZJ21AiydHkVTDsXcb1gHSLocSPxUa36vQxxaGshGr7NS3fYziEGfLiffczr9kWBpY",
  "key23": "3dgukVptmaYuSm4RtYQhbJfkj6bmPtYBFcqeJ3AdPHaegfqsrCeMxHqMotJohT7nSoKBSURHh5aCsaXphvuMy43F",
  "key24": "5aZ77hfQYp3W6w8xiEWLJnbk9ZX5xLj2EAyhnXFY9ikr2VcLjXUVchZTD6Fiz9W1XeAEyNWptYirPKUcDEroxUEA",
  "key25": "3sBgcPA9Ajkz45ic4oCcNrT5cFvjRNdsNrrXBvhsubxExcPJYHfEuuWLtZNK6DksMPUVQ9DPXhb4pQNQ3esDjeed",
  "key26": "3FBMvfNykjPAU1TekFofNXaDRFvdZY4ZcTWpvrRvbdgwdfUC1N7h2tp1v6UXvnPKZkmbTKu4HfX2ZDY9yfBFDzfo",
  "key27": "3NfoyCGYVVzxyjnk9pxfjqnDSCeT7kxo2wRBEmjdj9ucMmvcTKSLxSAZAWYmQfAzqfL7WSTVYfEi8D7Na5nSH7Kf",
  "key28": "3QqwFxxavM4orZNsiLYCb3WyMxRCFmsejEqtU7zFRxpp2n6cjA1Drr72WZD7zj1yXR3tR1TPQnyh7pNXiyYyTmJj",
  "key29": "58MJhXDboCvLtLkqx2wGDEK2WjeW7VeVdB3kTSwStekYZD5sq2GUWEG4JTjnSGA8TP4L5Gm8ZG2PrBwY5TwGyXR3"
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
