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
    "4vCuJnijZ2kLJyRmDMoh3bTN8Rq2VyRTwFikWQvEGqdKva6HuhxHUqPTtaRMSFrZZXmQRYMxxEqqB5eWyTESD6rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wxTiwS3puXhF8Q4o5u46rbMYZkCCYHWi8FtScAa14u34btoZ6vyohB8eKqs3TK86nMfDKCY8yQ1NLNZub5MofXZ",
  "key1": "41vwMo9JAQpvJ4x3cSHdghXwEn7jYZHfTEMPogJok87xmW1DF4Lbk9bTjBk1eHrhFJxKepd8HdFb6Y2G9wumgmQW",
  "key2": "2u8v3NvMmQhmmkQ4FbL8FftZ3aJ35bZrmh1vCwHPMg38jTA78t1Xw4pbNU6WuzFDWQconAE6ANh5TZHkHeVrGezq",
  "key3": "edhKGfg6LeMVnKx3pBHmj4JfuvAhKky8Ek8kFvmkraVQ5EDaJrgW5pnYJaVByVvWyXJgT9PNbHuyh3J3MCDk64W",
  "key4": "4WTDURBaFf4vrvqgCEbA4cRP41HrY7v3jRBSsZTm6yL1drZewXyvq3XMfnTZK42oDFnUrVtVAYTtg4Jzur5pU6VK",
  "key5": "4eptMNc1omYURgATM3wAEGQ5BG1ZX38fj2Np9S6WozWz2eRxdYfq7QCeExic1Q17Rb8YSTRkfnMmHpiMw3Hp1duQ",
  "key6": "2uBy4y8UMuJw89iLoeKKKDXrKqsyjSGvWqGiCgfPjoQA5i1XyTiPpNYRvUebPN8XcgAmQ3DipurcuxVYihDkvaNJ",
  "key7": "5HF4gPYpSgNapQ4p6mgRUfsDR1m81fop4pQhLS4uoH1fCD2LtTYJ71GnwynzCqoRvHLnUECg3Hk72G9WkSf8prTL",
  "key8": "5eVWTpftYsafZFmtBGEThNQNEAZ6LCMtzWpGyVF9mBe6hFUfd212nUSpAtPJRPuowGYb1TLTbs9z6xTu7JmR75sV",
  "key9": "3vHQLqnsi4Z8hVtTXyJ7PTGobGce8o2h4ZcMJr8yy6GbgBwVQahokqptbs7Ti1Rp3PSceycnGVvxXSZwfdazXh4v",
  "key10": "oDnBkdyA5fDuJtxDK9pLruUfoLKTL6eJzZte8YGX1biJuBg78iZPJwSDE5EzTFV91CZVLE989NqJJgpcyEuzhZ7",
  "key11": "3SBKNd3D5mFbrToJjMWMrLp1gj7qjApyNeNxVZyEwrUJR6h2A38vMrzcjgzZ4Zw1oi53q9qc3HUTGun8JHf4odGr",
  "key12": "5ybWwbSLMAQwJ4xcv5rCTf3LN2wS2YMGXMJ9cahYJ1gCzjzX4G9PrSnvod3f8pNa32YBjqkekQWTHNpaZFBTks5n",
  "key13": "48xyX6KJGiaaZjskZZJr2ToxMQmGdsre7x1182KX3MenfZFMfFaMUcbydFk9vWakjHdTToq9cJ4frWT7xMfKpwr2",
  "key14": "8Lqtwkgh29BUgGpaeYKVqeJLDZXC6JrRUoFu1xmk92o9JwdE2axzmDXip8Zzkpk1KefbVzVKrUvUYrmEobRh8rb",
  "key15": "3WKWhQYPxEgGPkZbZsaNsXb681KzL7Ah5UceqUxC5uch5qvwNJULMPAFRiJYqVFw7kKpQV5PY3D9UTCF3GywmF5a",
  "key16": "2yyRSC8tUhVgXgq9kDEkxcwqMFdVfqgqZ8DTNYgNotcVTtK918sV2D5TGjquwtPxu9MG1v5Y8FLEMnZdsbkVyT4R",
  "key17": "5Day2UnnDTTFi6a6Fyu6GELLE9Wtbtm1Mz8w7ArFL3wPKhbYtvMfGgSzHZipSLFjgDxKPUaN7tgmwpkSJR51J6GN",
  "key18": "4NuvZHvrKhDhwedBAMegXQrjJiN2mYyXUo7hj7SpL4HeAciqqsfFqg4nDxGdKQkzX4MqPPj8LHh5JMQs3Ne2QHCG",
  "key19": "EsZZt6g8TSrxLrzuz2Dx2HVnckPVH6Uk2UbSR8Bca6FQ5YGqbcw37GRrXeBXSgiqPQm3s1LftCoBNS1qATWq6UY",
  "key20": "59igTxU9ttDLyNH4zeHWg1Nt75mSh3WZdDZ2czp4LpVaPFUEtuZ2so3ymZYxjw6C1rsqeAfhq61tQYqRq7gWxcn8",
  "key21": "4gPLYbChwmmjZTQusT69SqHoNhmNs1F8VXim74ZakYEZotUNKXhNi5SZD6gYHywem2fc9nGC65VXBdeWhSHAHQzL",
  "key22": "24RrmX46hGfWtAis5TMUmVDrUUumYARauEDEBjuxSm3uyioP5GdLP3QgVkKqVFz69v14NHJa3X3ePqF6drMTRYyK",
  "key23": "2e2GSRFLrBA1VhA2URa6CVqaMhQ7anmGRjjAj7KUAoiAup3eNK8fZbLfytUoTD2TcPTXnFyrUieTNQyfUco48iuX",
  "key24": "Mu2nr1cesYfg5eAdQcoFuxBQWKEad2Cy8F49MiWDdtK5MxFkMnbtrQz2mGjD8XcQsdguWEEcUBYvr1AYjvCL85q",
  "key25": "2vwtvBEQkZV9anDPNZ2Y179sdRyWJZ1hRM6CRaQYh9Qdo1P3mppxzSKMTB37T19PtFLbJgrcvGVhqgNu9JSKkQ2e",
  "key26": "3tKjzYecBVYs8ha4kaT21AUGLnxemqsLBEY1vsavVa3sbRWbjQ3NNBjMbdhctUjepudSnd5XcBVo9QBQu2WjmBiY"
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
