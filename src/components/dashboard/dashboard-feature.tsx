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
    "PirGJwjxzShDw1jsWcXaBFh3MwwUEXR3bcMCW5aBuUK3xtJU2rURPhvurSv7eZwJmVacn1cVJKnvHFMuUFrXu5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Js51oCFaqidobHm9UNtqe1ULtiagbEtD4LeqLrCLinQVz3HTmyM4odaJFDDu1yFT6r8RY3LdBqFB5S9TifQ7C9",
  "key1": "5WbRgTd9X5sfCnu6VULCxtrwdwjSteZtSwCXvVCiYp9ciWW6hm7Cpavi8PJeijJbUXYfZA8viZhta6Ks6N4VvDn6",
  "key2": "5qKVkzvrkPk1NYJq1uimAw4X9WBbRTqVGCFDotywsP7492QfvCfcHup66ZiWxgvE9drMTBnAwtTgr3Em5Do2VKai",
  "key3": "55nbxLGEF7VageGSmdvWsR2p1mgHNokY3EGKQoxQEKK2UtfdYFHaQe7WnBdzed1rwh1cS7o33h1Lyovkt73UqHBn",
  "key4": "4tBhoDnGRhesB8P5XpHWfiEakg75GSr3ADr3hLSDHccbuBPojpMSqgr7nvanYoWoByoBJsJL1LS864r7WvxM2Byz",
  "key5": "4ACCPtVYFCxGqYoLTkzj7AFyZdeWKYutpewCoVFmrBKh9tPTqjQd8Kbp9RtwbDcrGrk1nMCh6AVXzb4EQJJXhdGB",
  "key6": "2yP1TLqAQWnMutHHi5dFykUw59Z96NBkma5QmtyTwusmuMmxGPWNaNHrixwapx3qY2qoUQHPomwBRV2HYtQdFNcy",
  "key7": "5mdjwdEj3jPrESffaFSkkxfDW167YCbU6bTBRsTGFDxHiXFx34uWNvEEdkHSNtSujdgPwDsU4PGuHe3VGyRtxxPN",
  "key8": "9EMxvoxwPHQTBYhv2eT3roFUrgJ9qDNH1TxjSdH85bAuaGbocp3NvzusQiBEB139GvXzc4bZVSwoSS69L88fURr",
  "key9": "5RVWzdY8CtZYGxyBPuauDHoGnU35ViyB8y3Gc2jiwMQpTZhcpFtiVXrn4ux1KuPe2B58wD16xDfYn1T1hXfzhSJn",
  "key10": "2bLCKU3iuM3ycx8yvHiyHDqbXPBGUxTUCfXrno75U71j9gm8FQfFRbRY8knqETd9wnXLLQwYAJAC4kRu57kysDia",
  "key11": "5fcGhseMJBdHsoWeosx9sJLmrm3r2HvST2BCv9yos3NBZ94U1xiETgPvnGVNPB3NtbmMDb79LpmUaheMc9Uu9ipV",
  "key12": "29mwWrp1JUAnJVnTcNk6c3E7Efvoc4NqWKxEAh2uA4GQxUeUNaTh7PtBgeuccTGokp1jWS73p5idWAHdRJGkbYM2",
  "key13": "5PnKAhV127wp17SZrKR57EZXq6jvR9c87iFom81oSHrsXTvAGcddUdLay3fj5kr8D3oFgvtRyZqAqJwJLLxGa451",
  "key14": "3y3UFxocjJVie6L5gWNCdLCqLfF1P1WhdrRxUx1xdLct1vYTbWw6xaLYKMGqDB2yoqvEQ13mxFPk1BYBGEEKkRFK",
  "key15": "3hjXDb3aZFq8vi3gzRwmxo1737dnkySQ3JtpJUB4xR324FohJ1XTQCSX1vxmowJQUHqXDV9im6HvzJ4i4EbPHqLE",
  "key16": "4wLpGFqDUbhh4LJU7WRS5dFuZX74JpabdZ6ax9H8L5MRM5xa13vr9svPtbXqTyhWcWgPbkHC2eErg6NhMSczHEoK",
  "key17": "5YMCzm2TVva4HavS4KTxjrwdyKCaWrv27Q6JK22ER5b2vDCNBM9qRRaY4rfq2F4zDY1nEwxL7FihXRPTaEAF6qtB",
  "key18": "5oZk2kcfqxP2sdZmdhs6JDmdWsRJFjTFttqE3nXjtGGqhv6whYFSKWGSAAdG1Kn7vuRdZX7v9fUveAgJKtsJcJNe",
  "key19": "5imZ7qnAM3KpByAKdDMBeNdt7VqfJ48rtD6VSJFvyyPYnxbcVZWjUhzaJmbQkDxuiCRpfxbYr1D93QvHSrundpFh",
  "key20": "2C23KqFunjrZZ1R4bf36jmuhHVWL9TQhReWRfSiXzveE681aaUXGez371zcjg4UPyWstfmimbQaXXXpoGSBfa3mU",
  "key21": "5zz1hgr5xi7F2gNtU2t31ZR4bUVv51a9Moo7ZnMCGvEQkuhHKXcs8A45c5mZR5kDfkLdjNpGHGdm5nnvkwih11y9",
  "key22": "2J9UQkVtpKWBYTM9GB6Jbvqym5aUTFcPbbcEoov4Y352uMp64odepvw8tb8RcSz4fsteFVg8CM2Z4CKVWjpKEgeK",
  "key23": "2QPjT1A7WNfMbLAuDZxWHtZHm742NPoPpVDx2zhHefzAk1jJERD6wABm4oizBSan8TE5Ny4mimnyM8pHGZL23efH",
  "key24": "3fGtDeuavZRzuPbiywxXEgJpxRwSj7JLcf5GC7XffawCWrQuVQ3WJbUP77ixmDSaVVLPR6trx13S8xYeYAFPSSXw",
  "key25": "NKKMFFe8VQiSUZxvXNwUn97rrRf3qHkyQ6wWxYaTRArGsg5Wvopazfg25PVpT29wEQFV1QDnpmFXAQQBMVQckJ1",
  "key26": "3Lg1rgmtUBpxLkRrAfvHw2EV4hKd4L9Xmu7fMHbm7JCdRR6kW1snz8o5TA7UWdSe8gJ9UKy8rnjhjE28rt8uQRGt",
  "key27": "2MGJujF1hUNSF6boLsCVfQCznTAaoC7R6miKXb8zruk2wAegfKXcnFaf2K2etETEYWRY7whACRVHcWruXi1URH5j"
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
