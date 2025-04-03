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
    "4GwzkSzLMZoQp2adtvS3fHXRJyoTKfSsWgi5Wfbj3RQgvjYkMo9nT5U5yP6BHXUzDEFkMrAaWhVCxuNU8cGWqutL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2sbXRUiKVnhx6onwDp3dRzqPuSDesvepzDNHh65o7sYSBjbHznGsUpkKSFxbiYFpngxpUhZbArYxUZxYK5Fhwu",
  "key1": "2ZgTxHVQbikFCQcP33TMZuLsjdMojEYjpPgBuwZVg2Hk1QQKQsfkCQMiQvgSkNLcbxg19Zb9EmbZTdqyVfNd1ExX",
  "key2": "3NwrB7k18SfMAknHnvNgXcMrRACjJ4BMRwn2NkSR4tweHy8ZxssyZuRcZojPdrcRgFopNDWPQwkVASL77fTGPGZY",
  "key3": "3ytcw1HrJGKsJothkw2k5gMbmBZwaPb1bXf3NRUik8vGUpQdMt7qPhHreFGjU1gZ6HhiX2Zjvqvt3NoFmfeX4urR",
  "key4": "4eH2a5msDnbWgn2G8Bhi2sK9ozmUTzZyMnuNTSVqrFfoyZq2R9YCg33YutUtf9NYdZmKFrZFE4Ex8Vc3hPMe6xaU",
  "key5": "5GgvjPvBiKvvtG9JEsAhqW2NY9wYJ5MzpHTro38xLUPa2tHftDr3A2QdFhvmRQcZ4D8vCegvKyuVCVvdwDYdUEwq",
  "key6": "MYFqqm9mwBPqmTy52fEhiziLG9kofLEF2KNPBNo3bXde4cuGFuHwNzRUfnio3SsDn3khsPaznE9uFK4XeRrH5yx",
  "key7": "5y28aaLUuV9tL7fCr5FBdbyPqV2HBWfEtqZ2rmkHq3HfZTFBrxrv2WQrkwRtC1eCDQz3iMDzYDasPM5fB2yvuzqh",
  "key8": "5z3h6NVD5mhhp7mvLusmYZeVnQQdV9GPJHRYPWP22R8FscmhxqHtVMg3E7JmJVup3rTnCLBRe4U3rvLXmza8ionx",
  "key9": "QbqS4PmwoRwb5mUWbdPdN2we1XPtsiEDWfFcvsv2FhTmJuNRcULHVH6FLfeajvuvjv9NcN2HFEsyFBdqsfC4uCF",
  "key10": "3Tr3w4nszkNujfcS8XWtVaY4tP5D3TUQUsXr7imKiexC1jyZQ75Pniujbw8qRX6iBNzL1r6vAcPGqme14hkskdoq",
  "key11": "41Y1LQ4s7WUg5LpusVfSeANghZFwPfCNazJW1Sa8Ff9jpPXcR1BqhyGYDoJYPGtWNQi95APZRT5VCT7DKaCtBRV9",
  "key12": "4q4PiXihmwkX7qc9ZgXwWmKjjTfT233B7zQY1ScJKREaCXeTuonKHBZpavo1BZ1i2umJbcL4198Nb7kQz9pzGLAT",
  "key13": "5KYSE3BppVWYgK5a1hz2uimVGFhYnSVC1KtjF78VUcJNhZWFkYnKDk9SCq96HDRpekV4ztkx67tPirRYQ3ZqyAaN",
  "key14": "5c3u9Hz9Qs9AAKDLLhmHnBWYXjnCqGuQUP8ZfwZBhiWvFR5hs85U5fN6vYGacsUSDN7wvXbKGPmtVdaL2eDA1KD6",
  "key15": "4YoyHrhgAQAbZwRBJJSwTLy1nWBumC6sSoiEB2bfV29Mza2Wmadb6fv8QrvQznwme1TwuphnbgaBqhUdZq3cpEME",
  "key16": "2tn7378PjwQCfWkvag6d748VRsg4UsocHMmZ9pRjVezjCGBXm924tgW8T32eMD78SPyAJdJ4R1bLErb4RGi3AGWZ",
  "key17": "2rrAzJH19r861gKyxrk9yBwCtZLoraSMc3BN2vgqSqw3Q8Cr7QTWYXJpEJqb3zZ3e9MtYQ1GfuVunYb6QbK9yL7W",
  "key18": "55rcSMNzs8GG4pZjfwftVwAkXJfJ5FCiUHG1BUsvJYM7iQ9S1E24Xrx1SuY5zoFB71FPFSSBPBkufqxqjMPzkkt9",
  "key19": "5MkEgDQMvsFKZH7KiA9C1hvSTBjN5ofRsiQXyTvr9gNyfG6iUBzZ8dKbUE1Bd2RSfFejvQc9KQcdrVgLQYAVSXj6",
  "key20": "2VxyjYPfuPnTPqWt3GeUkHeemLuHDejVqoNLjz8wrLoXwECUxEJbM8KQcP1Y8pxsf1eWuSfXp4sbjCRfH2q7XqPZ",
  "key21": "5z5zS4aB7JUvPvXH1pu2oUBJMqt1uNojEkCG8hD639W3aPizaJuutVmpU5itmQMB5CBnVWRchf1iiKSdzSxts6e9",
  "key22": "3DWxamdTs1aZzZWE43XeMULCNYJM14YcG55oM6MZKPjmf3QxjZdqgddA1ExP3wo2fJSpYWMAGrqA9dnJ7rY4PPLo",
  "key23": "5jAta6Sv6nZDxDeMSahj9iha9sWcQPkemFyhu8ZEgfMD6UgpHB4gs2cXgmV4n4bWMpbj2KfqTdSc8JwKRB2hu1EL",
  "key24": "2MQJzHVvQG1CjNqTAHXPRky1hfnF7xnQwn1iZDraCm7afY4PHTJ28wss7NKbayCuPDMLRMZyWStdjap48VKCBbE6",
  "key25": "3wAfMTLfBY7DZMmvWAUJWgXmrjAMptJXFRF33MANFNFkJs5Dbi3bD3Tg3F5NrNupVadvxeyk2PPWFowc19EBuhiJ",
  "key26": "tUJ5WEaBqNBf5rek4KJdc5rr8xsxSJLwwNQmXCYpwQwmxc8okDiHjeFsypzeNsgSRrmoiXTqsZkMkbdUmLyQ6BF"
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
