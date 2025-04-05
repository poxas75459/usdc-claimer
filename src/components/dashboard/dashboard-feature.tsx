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
    "5Jw4GX5PQXhXQo8ztShf6U2ZKVS9M1MDMnNYKHhTsngMvsSUJf6W1cUDgUmrsgYKRazje9mDzfj7iaEmfYafa2zG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVDqyapmjHRWr3EPbovvZqKq1kf5NNgv98TKrrP7NA9YdHGweQ9krFgGF4bT6n2LWHHuvco1MKrcH6cT4yKprbQ",
  "key1": "5EG51u4BHAdW9GTh5qVGUxUXmvyRPfyxDkegcunjWwW2yXBruoh8bBXJiybCYMUasXxyDQa5tYDENGvTiNnVp4Eg",
  "key2": "pf7tJhbquDhVRXZCEMMJJrjubKgDfrnn9hhXV2rpdEAvRrJC12uEmV1bNYusLRybBmXcAL5U8K723UFA6TrZHKQ",
  "key3": "62fBXTBDeGmbsVpBmPMjhq5XL5pAuycsxrp1mcaSxxqpuxwocfmoNvMnm6ycRonZmzLdeu92JrZDmPY9JnUFjgyX",
  "key4": "4jsJtgz7h43gPMjj3r2Fhb5UCh9xpLNQmMwi5zonoFjwz3i2MdK21bygu7gSoKQt9XLkcmwA6EaWwSm6B5PPo32Z",
  "key5": "2odugx6BSEVERYEzLX5n3EExLohiTM3xULfouzeWdEMejsCoLN2ApqzkVru9AwLm3pZYs6FRD29t65JgpFYzBsGn",
  "key6": "3cZg21FkLwWwo85eV66cxMYfMPpcRDL4GZEgFQzRtfcCR6DbX9tgaAPgE5k4Fz5Ze1xxbBr539T3xPZKWLZ27XvV",
  "key7": "3LycRpNCAFv8PAQnidzrWwVwu5Jt7APbpUmGffyZowFvqEaytZ1dAkKm35w75wDUajV4GWJseCVZdha8vxgPQRSz",
  "key8": "62XSqMyfioBtipzwvpaxN1PfrqrfJVuhG2oH7q48q5rmq9jq5dM9phnshWnpEyaZmaakZTw3X93azqV62gjQDtCP",
  "key9": "4Nn35m8jvLmkq1V6KWetgtmJgcHBMrBVatsggs4XpwxHXhciDNHeJScUckaDTRvTi9PYtAjhUtUZzpFjKiZPfofe",
  "key10": "4k3mvyX8THD4egpStUeGrKGFiKxgSNMRTHqZ9SZnVoRBeMpHr3zLtmiGP3w6VnbHLh3urcAZQqdQPiiA2ok4khMc",
  "key11": "4uJzP3PjvB3sXGTytA289JycMtvZiJyHzVPtPyxFXziQMXHZD9iXDjKHpdxLDEUnFMbzF9UY164yKBZwkBHDkYEQ",
  "key12": "HEwhF6Z7UY1ScgVCzVc1Paq9FgkvJAGqW8GgDYo2H2KquJPFYNB8aRoGwVetmZaoJbtuRitsE7u2kygs7RTmsod",
  "key13": "3XoRLedKas8yBz7dPiv1uQVXW2xEfpZCfM4jHTMWhu7mHX7RkmQtX1YrrVMHGxoUeo2Hj8Cc81HpqunA1zFZZod2",
  "key14": "3VLMXFchiRiCxywTqeF3zjs5q2bszgqnazQGadXg3bUWFoepCtdvrT9VKH6qbd3k3c1jSYbtyE7nQeA5oXycukF",
  "key15": "4VxD9WLMLQgVQb2foRydgFJVpy9sD4v787JVLeqhsBdsrkANz9SrYpLKt4ammNDg6xNMD1AfZK1Qy6sGs3MgvPTC",
  "key16": "5gdgRJch31DXV2n86P9q6EfRfATc8PL32xWdHaXT3qnf6AaTAXVQMVkQADYKp79F8mzfHJ3PvTp9jPsm9ri8TJu",
  "key17": "4mEftQ2MTRgsmtZvQmfcVTM2yGHsQ9uDRJjKEobZpChybDmgB8F9838nE8XeZf53ZWMRBZYdD5CcLuhotVhK8Hf5",
  "key18": "hePugSaYqvm541yRx5kvGKxf517Jd8Bwkfr7BGkox2zXUUMLXr8YfNLa8LJqF8URnZSaWWpdawmdTonP148P5Uw",
  "key19": "5ccBiL1GWmGnkncreZY6CTu26XcCGwn4qwyqr1Hhc9YgtHa2pSq2T3EfyAgZgCeTLwraZJaoBymh7iCkLJYm48EL",
  "key20": "4NnC3tY9yrsUwkajSfKTc9QurHxrdXAZbW3Hp49tQaqjzCpWanTtSJXqX8WDqRFTY9HL1f7UiGX2B5cQ3b2vqgFc",
  "key21": "5VzAHyxH2cv57HRG6ZSGjMrh3k45QFTY896JowK6dwvY3Zf7EiukiszH9XYjxZeQXs1a4nNfuqSusWBFqYwnNZxi",
  "key22": "5oGKY4Z1t2noQXxcKPKTY33w26XFEv6eNZU4Q9sqa1paH6W1h5NgA7YxYh1MEyMVAKgxWLykHPmQ7rNoeq687Gkt",
  "key23": "4BbvFALfppBpDTDXRvsSKyqLqASZko9pHsmXHHcsShNgNV8dxVjULj1URVYKGRc4JyB4TWapux5UrEBJYN17F5C2",
  "key24": "3mNCv6MTcy4w2UR6YqBm7aHYvcpbKNKy4JPY9emDSifGWKWN24mVxsf8XiDX4nvq49dRuV8H7Nq17Ks6XVhXasGH",
  "key25": "2Z7d6kL3QAyMhfKr9EUr8wwXP9BMZpDPVW5pM9s3ciFktAdLRR5XmqBJoxaq3SWb4bmkFFDHjhXB1iGQLhXHc7n3",
  "key26": "2JAktLRzKL1R8EQLuchHiDSy9jfbHE1V6dUwVN9jVquSrcinnqJiZJCRrVQkdHJKE7FssCF64biWxK3wwqkM1BZA"
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
