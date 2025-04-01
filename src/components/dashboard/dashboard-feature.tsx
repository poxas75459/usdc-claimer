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
    "3tA5KoUtFqnr6uNVaejaf9xRtoLA5kZk1MBeWqCybyG87J3P1NUn4rXeeVderyCHFXwL44wvoQJ1PFAwUc3Fq3Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e5gsfxYd2y6ZHHfsPPDDQ9sJpTaGT2tqtevdG633NQHFYHDNbaUeCAbt2vjQW75SdLbUJLzc44FQuJmKUR8d9XR",
  "key1": "4DhTHr6Sf7wxqiivWBDWD13NnV3uKkns5BKbfEVGkDfb4rodFYyPpejGEbirxLFJ3x9yRPAqYbwH5AZVt1mYEiWk",
  "key2": "2cN2rtkKdnARwKjSRU1FRQqai8qJigNkHtmKr7E1Ys6VGPfNH8yYhgR3fgP5ESMGN3VrJwcTUXYTt4biuKWiDvUe",
  "key3": "3NSE3EM2QcSyjBLjxvDRHjVtM9QDnuafEKUaPFZ1jZFMYJGb7XKcTxwAP4fKboavm4d9L7tvzho3b36MtWyJjKzN",
  "key4": "3s7C61SjNyhSLAU69XJ5iZKTaUHQsFF2mSPq4ScRcuhJQvwNvA3hUN9egQVPxQ5xSsRU1pFWkyuqQUgT6YeDPALD",
  "key5": "26hSajyRLZWuk9hQVg1uxvvN2qeUo9C9Z3mXMZweKNM15buvzUUjTc3qD5xXiA8aSRQQKxFvgyPED7rwxga4Aorw",
  "key6": "2ThrKX3PuAT1sYRcModoMuA1htadX8o7DtAx7ZXW5qXfHLZQ7maZPQ8skirRvA8tJrJdx91EVWErfw9U73Urd3xN",
  "key7": "4KcpRoQwBWQqyP4VfM4EfiDFmqvz2Y9mpDbBgyXyp6hzGVxL5yh2cZjVSu6pnZ16Zd1zH27v6bDhVQxRRy1muMc1",
  "key8": "rGfmcDJhYSXRkYMt9BwKDKdLXJcNhT96KjJvTPe1zgKuRGCUNRXT6qjFrKsqGNNxwTfeABQkqy2XTu722fsVXB6",
  "key9": "25ymyh1D5ERLVzQDaWLEs7j2MqSAt8KAYUhcH4wnRi8ffbDXygz6KwzoAbo4LC1CFCA6YhfFXxmvHbjuge1CDYeF",
  "key10": "5vFwaLTTLsga4QNUWdgNkWMEjmEPzb47G1VgtzRK12Ujr8gGkLVGB2Nd7GzaDJ8UvNg6kEXZLrfu2RGY94Hxv5kT",
  "key11": "kQcThWtBUViuYnt7s7UGsvqD4Fo9VCUZFZ7HSuL8f6mAJwaRgfyP3NPXuFQ9MB7Erz7CoTzX9sAsb8Yr5CN6oT9",
  "key12": "29nZzR9gVxesp1SMDaP7CTK89f2m1FcUW4yAUt3TjjNtguVfdMDdSHTkG5kJeJGK9J3foLTQHGD6SCs1g64NYxQU",
  "key13": "4MsEgau2QgeLJAEeQen2dk9sZsGVUg3xVTNbpzgvLCP7DHy6QpdxPDMiyoubnijf2rUKQtVKhnrTafCfoSdXbgWy",
  "key14": "5bGNBUwk15C2EJYP2sA9WjhSdhxn8692Vrmi13ewYdMqcUthHyrodwCM9MrBAXwvU3npBjzdiK8FEm3yTRhKeuzt",
  "key15": "2GuS9iqaXqTk1uq4dHE5akShqtutASNDXmzjk5G4AyQonCpMPEvNDFUzWeLW9aiT1ntq4JTJMHFeVPr9CYnLeJtF",
  "key16": "RBPPvthXvEn2nJ4CFj2mm7SR5omN5Zan5rma8KeWSGL4w6HwffAzcUdfov46nPp46JJzXJsb6vNdgwtXwSuRszi",
  "key17": "pojC7ruV8tHokrUGME82THYH4GFZiqERct6DCh1Zfr1gNG4rerPjoFk47P8opFTxNN8oH9ETdYsPuRdXTRVBHqt",
  "key18": "45QvjqhbVaagziD6hMR1t8kjiP4kHpi9Lfi9V4CsUrpv8v8gs8uHW4sKTNjvWf1RoJz2Tpt7N7yiw5dCRZbyRUEW",
  "key19": "5KN9yZQEy2Fuf3WKW56itYXc2v827jBzKibvW1guYYfXQtD1dWugAmFAF9ECZPy6BdH9UY8hMr7aZ7UYweECrzb2",
  "key20": "4Nk4FhLEnbsmSzCuSC5cuAKWbuncy9zjZxXn6W8cDfxUEvSyvJ7ZAoJZ46HHokCqCbxLZDujgaHJchBvsocbhvfR",
  "key21": "26JW4qPRxK1RfQc2TG5zM2hDwmPYLn6xYnVhQ2a48y2Mu4GwkGxkDV5A57NGdeaetqwLpLoSyrtsh6wt3XRuUj8T",
  "key22": "8NVJAGBgbBhi4st15noahEtqVgJzm1bcyK41cRYA2VgZ7JtnHfTHJnSUCRMbpdqseUZkkzr7xttPAWDcYLgV4YE",
  "key23": "3o7XP9zdJpo6JZdwjB4mrHfRyfr3FPbvhKjTPJEMYhJGZE4tCZSW2gGEkdeoG5K8H4Gqh76oSwTJ8S4KJTYD2nSi",
  "key24": "2KDt547hbseeAjknnh3woqq429iuvJrsBThRig5yNbSjYBgg1XRHY8hz9tKSdErzZ88Ak8Fn6qMJy2UGKgi9M1Vb"
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
