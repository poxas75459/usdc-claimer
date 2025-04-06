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
    "5JLSJHYqD1M9nq1roN5euJbMB2QPnZviZNKnAr8TrP47CjZFsMGVGtrzKvqGGXT2TKjGuPWK1E5tNbjVTaUZ1gkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRgz8obbGnPjgE4kG8oGrSzmFwkmRRipguX8gpBi89Sn1vyPPwnVA3Xo3WPrT1LpZxEGgYLmo8zLkLfMdAJZuUy",
  "key1": "4XUwxmvG6dozn9Tw39qidzz1TV6CiZcAB3b8QVxV7ppYM4qvEYc4ngqELYFMoBETvEQHniToYEqNXZfvJwe3uzsT",
  "key2": "2E2QDREaWKTAURKTFrkGC4kJWGWhYAE88BW2zVeWwcGYP3aqu7Tj2Xg9cziVzVe1dxaER85nDfaHQ1jBTpVmwtx9",
  "key3": "4wQtn32nJPEi4n1dGCnKoRkxb5jqG6XeWZ5gMpB79YT78LiXGAGdsCyNziRqLjGuqzpiPmArp87St4BVqbFwyq7u",
  "key4": "2ohN4sHNNEMFnUjyeje9UP2iCfh94fVdYo7wngEymPZtiRytCnJ4TAP4wCWDmQsy3egpqcaAAdzybvKUCzL8fNgG",
  "key5": "2thrK8awdpQKvBg5YkRwwNT7efgJRjHUW9hj75Vc4JPYv8itq5u6Z6DQ7scYC855fXmXc8dPFNHf78E4qbfXGAt4",
  "key6": "4NA2pQV1E2YCQcA8ZVstxw1zwNECshk7zmBFybuN9Zof33mFLReKKfMyta9zuy6znbMFvF7efGUgAadBBrJW4AKC",
  "key7": "3nczeKv23DFrCc2VRoFXcLHivjtJ9GNYohKWzNXFgVRtVmYxaDaS3uts66sXB3UPP91HocU7m84KF7vksXYraRxP",
  "key8": "4NqZcQh7ZrU6xza73jdPbW5AzVNauVzzVCRzQz4LaPJ2Ky8f6cG7wd5BZVu5jE4soqLneHh4hASD7SJdEfKnU3Zg",
  "key9": "3Xkh4QcptoCbARHEDhzoKU8ofLtpREU2eRJuv2sCe9H8SxizMsELRc8p8ddpdRB8U9rZksqbFrzwSyTRyBtBomwm",
  "key10": "45zF9HChetJcEMo8RSwvd3FdSgEReRt5U8s4MPtCD2wxfvRt6ZC3TVpV6Vnn6UuZ4MNgnes61rQF9Epi4ikuTZoK",
  "key11": "2pijuiAbv77ettLEKUwN3moEds226jpqx2orvehXrBYpDgiFVrvnEyRPdFMJCzvxf2wQKtu9s522SBd1tu3pnQih",
  "key12": "3aUqcqeerGmEc7RTznQetnWVY663jpPHXALXGWcD587oj3TbyokBXRcnzQ469objkm51SFwUHV6C54JmxGUG6N3B",
  "key13": "2FCfgEeavAjfAbjvoiQztekiuDvE9sa5PjcHURpV7sXUvBQF8FR4uKKt1kdN2FZ7K1rTk4M9jDCR1FwGKhnkqJAX",
  "key14": "3AUdZZ4vCynexWYAz6FP7XSM92xhb8c8xUiz22MNtd8fGihzbPhDqLeTaKtKGQTd4yLe6gR3xEacabRudqNrap6f",
  "key15": "r9DF3KXPRPHT7LFohbAXrAF7givAnNR6WL6HGeZMtFW2AArEatUNbR8usYpMdWeSdKio6Uh3rhVaKoZfmuNPN2A",
  "key16": "5Nmj4Mc9iyJyPswrodyqujCBd1P5M1bNsRhmXw4wRY8vDBZ3icgYMPtnLcVJWnGr1Hxg5TUoejzJbaVHLYfnXqLD",
  "key17": "2Tm82NhyuAYFTmb9SP9Jx2tAL78UotDKhj3ujrGwYZg2w4HLaavaHJPxjHBHJToUxZuVcmMoTitrLMRw16kiY8cV",
  "key18": "2icPuwxjU5pgGWjvFB4p8tGdn1vK9nXRzX3NZN38BHsL2S4gcwEXEtCZHRJaxuN68MhMuCBPuBuFKQkkxmB6Ftxn",
  "key19": "vuCUiDmN7FP3ZksZSnA21tYff9oj1LX8LoDxAvrPMGa4QVP3t6VY68BumEfVgu3VETzaY613VApSpN8HFLXnZXv",
  "key20": "i1XmQ7ut2WbGNNLK757qhtw5tysrNN7dquYyiWAgJUQmrX8XfSb7ZRFX9tYyznAfXRXyW3Hm43apRLPQcvaQ5UB",
  "key21": "5d8cA8uKpAyMmWugREGqDCmCbUnMiACfAeunqK8Xk58b38nUBACfogn7Gbe7WXYEVjeSzRgjQCvWCEVqScchy4ys",
  "key22": "5JCdq4ZrSkKs3A6kmmLpXDHzzdbo8X3eV5zDqQ5cUC59BD1hDUThBBVL8ot7K8mWaAQcatSHHgfbDuyzo1y1UYjj",
  "key23": "n2G7UeD5KRemwdpKPahNi5nFZjXYyL45A5FHctvGji329Wn8wrWwvJCLTfSn39p29XuSkXaB95aMGUhpdpJhdQA",
  "key24": "53UbnC1BvUDVpSPEmTNTEi3te9FzqX3K2nPySPq6G9UoYjZfBHJJyjBu5HVoSKciYMpMieiDPGML4ZUULupAQNL8",
  "key25": "49E81NLkow1hSBBefUMYZiEFM3EigKk8mZbGsG2oCn6sPDvdvKJvw6mZn9RiKMtzn7HgUZxqYip898C27xM3AU1A",
  "key26": "266vGHMS2iyWUX9HyYSrqsWVNZa7udtc56vL3k3r34F3CtSrmm5ik7RAjqiA9XMtbpGFRdnSLjGKiSxtrbuUnAv4"
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
