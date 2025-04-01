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
    "3G3wKG4XCQyHhNnXcsE3EB174Xjt45JStXKseHuRcC5NyuVHtJ4ZdBGLEWrENBhZeRozAqsu4W7ciHNL8KxFhH8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKBjPCwfkAfhH5AaXRiEx14TufdFYtLYWqXXGa6fpgaRjkfJCMjyDxF5igDbH4LoKbbLFCGgEshUCQBzo21E2mq",
  "key1": "3BWzTYh3QsVZPHsXMpJZEoM6kYYRA63ugBt5msmtwCAKmPCyyUacavaAEdhXBwBk1y2XYvkuRicQBDTBhJnzf7An",
  "key2": "61xJNbcM7nRkBbszJHGFKPouP43nDUE8ATW6mqnpP7B8sGU2kWi1DpPixSxB3QKhwkSgMkncvBXpxuBC9fznAnF",
  "key3": "3VnKypJhgTauSbz935B3Y81LfhUHfXjX23mGvgvLe15Yk4PtwXHzBL6tuCBfYR5BARd4p4aAgeV2hhCRND6ZBRWe",
  "key4": "5oUbPZ3hYFuqLdwt5zFNYkij17E1FCRriTL21mEvXdvJQN1iacuQCa6dkh4rZBDY42q8eV3NKLcKaJBduTAw5u7Y",
  "key5": "62jD83qb97dm3yeM13mQvkbxZHgNw27pbuLuv8WDu7WuwZBtcU5webGJo4L5Nk6VWUmVq8wXLg8SrkaZ8te2iUVq",
  "key6": "5ujLMQnFoAFQRq7s8cuGqcUpYmhKkwYwrytFFFKvyR5A6RyJWJLC6M5nRVWTe3GJWuhYDCEQ27EgtBNV3qFBro94",
  "key7": "5yVDAAv6oHyh8NKx2Ndds2dn8vbEde14V9zrYTAvnjSiL2bkSZcp3tGtDYwFc9AZZ78t7XsTNkmVhRPHRTro3jmQ",
  "key8": "4qqW4Mje5PhHTsSNFbcV8kHGtppLxsHFt19svEDaXUaeGrdp1VWWLez6KZi4WxefD19jqPgeRnsDcX6z7d7hgwZt",
  "key9": "khEXQmmKzGt4hXp18N1BZ7YNsywuCz3qugxSYn16njSxGTo2PXuzFSNWz16fu8c9CEhMHb1fRTPDsLj1jJ63G6j",
  "key10": "2xPNPYHy3JBXEUhwsmUpVHyqskpmPaczifVc5S92TpKEsM7qsXcSZWoXgL37C3YvVYuhd9FSnETVx4kKvEtNix9",
  "key11": "CZjzQQa8aVhExn2jCHkvrwXMkUBcH3e9gRzmaJb7r8EpyEAZ7QTjtQececsGXxD4i5yFJ83pBxvTrgw9TZT1o4w",
  "key12": "5Kt25Lx1uukgEAtVG2PBkmpbUUMAcK6N5z4AunJZNt6j6vaFrwns6evo3xVFR8vnAr7kX6tAGjkXXS2vV3aGUpjk",
  "key13": "5v3Tx48nxHwqBn4MScqzuPQeYehNcSj8zJVQiqwsvXB8TRdZD9omvCDAyJXLYgBQPgjExprigS1M1AbDExLD8gNN",
  "key14": "3ZkQuX6kt3xxSuCSMnWwh3GePheCHws3hLN6GMnNpAoRoNUcNsn8NXvQcCCdDiK3RvRd1xFCDwZCC9xiYzbULosG",
  "key15": "2iEbyubXH2sQMV2Bn8mdkXJymFwHyvJ3mirXgfQMfVEmLoHrKmjoSByiC9jhHpvKJLfnsHGhhzmt3BHm3LZDbDGS",
  "key16": "5atAd3K8KNTeVZpQmbbb7BYdiGn23jGdDpc1q4JyLvLfKTPverM2G5sU84vi3JTfFzPMVk93sN6qMSVsYnvsJNtv",
  "key17": "S6WU4dUNkqYN9zaYQRUE679bKzFhWfBkLo58BofXxLfpCMoQSyWPraHwNwzBobAfW1QNSXF77SiLHHzTrNFS73y",
  "key18": "66TBdj8trG9NTnD4ReCQxp2ZNb3UjhcoB35fNZC9rda7DMr7GCcvMw7vS19g4HQgYUvVhtqpfcaDcxgsV2XdiYMz",
  "key19": "55Z6CgxgW3Vv1L2tuUEfftqxbC9REQDfiw5fLfcPw91mZQvPJ2SEzs3g7r3SdvP1UY8GvazoMkDVHJokbmZZSohS",
  "key20": "49h6EknkzMEvRmiHinCnCLAuaKyYDJp84iUADxYkDvjfdog3rqcpLB9LrPVCk9iT8jV2XMAPcHseKMBnLkcGrSGW",
  "key21": "5pKmsX9fX8N3ULVayfMPDSTp6L2ZM5F5k3oGJjDG9MdiejtVREdvHoMcyLpZ5wHbXCE7A57ewr95ja4tqKzmBy2u",
  "key22": "5ZqS2xwR5gcCZFH39ys1S4uxsJoSx57pNZouL4AE2PdMqXuSdXC7mW8NycWp6fWzGs31WzMxVLpWQV4ubkUgZ8nM",
  "key23": "dMNjGJmpxbrZrqeXLMtr1vc5i8q45Y9gVv78qNvPc1i3AejfaGFogRDunSt5bCxFyiFf1xrc4Mui6UZj7yWZQ6h",
  "key24": "3EEPnfpN2m9Qinq2GGRQ9Uuga4aLWXyBieEz4ymM7PdhzXv9Q7jUrceg13xwSGW6BGwFHGiCkDKaGmVrdtCVpKkS",
  "key25": "yLSogWtPsJ19mDzQfEANwnkRhnQYgiUU2tAWax6uzV9xdUMsZ8aCcLhVLvvveZ8qAQqXJ19bKnaVaoggF8Quqqd"
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
