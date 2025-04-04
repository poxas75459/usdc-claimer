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
    "5EWyth6mgG98T8DfHp1Jxvurwwaef84MMBPhJFSXLXT2onAZbKKVnpSf5bSPRC7BqkmSS918mNMcYWpJffhAECde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAMqU1MuhDUgEWHvc7zSSBETwv4N7oH8YxjkWjeK9bpmB7fGyytv6LWkHGiLHnVPodiXL3L1BuSMSPttWbv7MRw",
  "key1": "2n1E23ibFkSRCTZ5wDtGbF5FicnDqZ6HYWQv562KKTE1n7oCQ5hXtEtgUyNDCwxTEXeTPBqYHGPeBmURtwMEPaMH",
  "key2": "4ixULoaoA5HrRvUnphctqoiYNgRu3iCWcHj4vUTsFELKsnWv2ehEhJw5p51N47fa1MvBc6LLjPNJ823nQe4go5Wr",
  "key3": "5fWk66tMcb81wbfDrUNWkeTzauJcfW7gYgnkeXr4UQabKwsJq7RFEs3EB6uW8KGbvGnoJ95MD4KMhVnzsVJFkaPc",
  "key4": "gQrSPy4W7Dfn6vzLzu75S6cnHBrLcVwk6aEKdnXiBNoExZAeGftZHJuwgUhrCR6jsLG9Wes1vzo56eNVK1G82e3",
  "key5": "DfP8yBDsjFaXxFryLhwECBvtWQdrhR15Ffnygw8GuDwH4W5qmKqHMye2o7kRSTtABybcKYYPD6n57ZVoJtZgyT6",
  "key6": "4MKRbQcZQtovcBQBhyrhK142zeYBeMHMntTcnCm17G25a83qxFEy8bcvF1ShvDTnzBzP7C2CaTtzfvLEBMSLfkVr",
  "key7": "T3T1ehNWRkmZsQUfZkKJmJScWxvbFsVCJzNsTgzJEgBM1MzUHuo5fouq7imXB4N7pFfKVeY9Y43xDMgaLFiAA1D",
  "key8": "2MjGvZebUyahJSAbuLFmHFth5WqRBSv3T4w9bn1QCVHB6aF3XN4DWaPbRjFVYZ3zsNU4mgCdJUCWK9NRWYvddoGk",
  "key9": "3HvimDCpP49ZKgkPPiB5igqZ9pwx2nG98ezS69HLYkpwojpSJcHmUsEoCedgP94Xy45NwdisCrJz2qF3s5cm8tPS",
  "key10": "jSDi54Yg8AwTrNAWPx42imC7hqi6BgcLD5qDz5y53P1g8RLuikGqqNKSHeF4YYWc3h5WzsRJyXaXVKwk6d5TAyT",
  "key11": "5BzCYo89BbTpi7jn9qd34Zkvvjsk8ZfvC3J9AYBPS7WBwMtbBXp8dTtVfqSQrfpJG8bx7yyPUpfwrfUsJ2n29Sot",
  "key12": "2BcjEh47TnMehuViuzrMDmHLEJeDXirUWp9QfX8stLk2gH2yyLjwLo6rNs5KqiX6d4oagzi4sdGyS7uioe9NngpY",
  "key13": "43DP6P34tchijWxPgoRKWpaEWqGaJRBNTrX1F8xXJCbM4jYMRZxQ1fBz9rP2uBzXTyNGUEuTSB4bKid9ez9CCGec",
  "key14": "NkfTNCqEurs7ohPWXoSL5bsdkdoBcZiaqdidwwgFYG9XDLXJ4ocDpKXi71HNrntAimUu5a2EnAVQ3msxc6fiXKL",
  "key15": "3vtjB1MYj7F8daB2SjEMshjgVxWE5XwA1p6riLNLttet5nz1cM4BGP42fznXrPKd1X89o9izTUS2R4Vg3MmF93md",
  "key16": "jTr6sfPmFVebxzrRRtXChrpgcP89KcX8f5U7XYCuurrbAZzMYsyeApvRCj1Mp9tBP15rRdvLRbr1zaoBuQbt6Wo",
  "key17": "5x8fA1oLdxSKq6wx4aTCG9m8gQcsDMYyoEZkpgZr9zjvXFedjkpGrfRAL91SesySR7C3TAC4U2dGLcmmibqVYasF",
  "key18": "3e2y7GuTisgg4uUzAijmebqziY8pQWLrXD44wb3K2yhrtY35r7tcHsXudAWc4aJvQxW4jrspAQ3dNo7mg9UdU4Kc",
  "key19": "2VdmuVqUDKt72YRLxq6rWkQb6937aZvpqtXW3BJ9MssUucmBM78kS8MrvUAmQnfKMf3FSuPehfbzf3TrZjg5jTTb",
  "key20": "K5PUFXAsbPZ5u6SF1c67J1Mxiox6FoJgPYW2fNDWkSu23bHQK1xQxYwkUbMA15a8YYUNgNUrGWT5vZcBvwb1CYx",
  "key21": "2gwRo91dyNfWXSNw3q5qnYRJVnwAzL2nZzJDtB5SxMcHoUbw27wjyKcHE8MjzNCpVvpekDN23DVUTeiq7hBskogr",
  "key22": "4G26LG3FvZpLPr6swmN3ui1EZjspZ8TsAPbqoXDtUnxQWZHsTphBJSZK7RmPNMgzAp5VPNRzfheamrq9WzJqAzLt",
  "key23": "2Ychz4UjJnzM8kouMzwAwCiA1H2ZmaFvvvgWsEJRA8PqJE3qvwXELStZUM7pZjLk8NkDEDtggs1Qyc5B4vc6iRhL",
  "key24": "3HazBjkQ5ZLHvZMhesH7yhfKqrNeDbAWxhoiHaRJSfsA4fqzKKRkE56LTThskD17b2vvHct5w1jEx28rU3pQyf5j",
  "key25": "4TZoLRtSh3mAMSjbDYGXrs3EPiiPs8zYYLN7ibDPaoQ7uBZ3BdbykDjQYevyWBMxpMkMnVJRpw9DCWBSi1rXeyCd",
  "key26": "4b1euczxW488BrMNtNnBsq6yCPcHHmyxipwiAz52XD5ojfq4zbC4Ruz3LisjSSEzHhPxuATkGYqyyaGRnVmhYqPr",
  "key27": "3Secgvhib1rc7H6yumSgJUfQiLiVmBamRdtX5zmrRBEQHeuW3Uxfw3zfLZEBFtr7x8bfdFNoZXRYvxzgi7Awfvpq",
  "key28": "iQ5dT2Mk9kB4Qwn3fexv9mDMkWnQVNpCPJVfCxtK8TuTkaCQ4ekwvFCKhH8nm9RRUMTq4qHwjmbKFKspP8Nk2RX",
  "key29": "5gcAQJDxZtvaczNFqfY9YT9TkX8ajhTyKKqa1f1AWuc7vDoAHNwT9WzztMEZPMCggQHzzVWDFaaeGhoKeH39Ahm8",
  "key30": "cAnXkuDR7mf5YrWgfdWvdzDv6kpvuWZ6bibTq1Z24xSpeuGuzgcXpEfREWjjbtRseP3xavx5Ttg7Zk9qzvnbCtB",
  "key31": "4qNVieJfo8eG9CJpLaPgf8WZwZsCaHKPNxnWtc8UGdsMkAp6Us2huNJJyDSLdEXfn8Z6P4h2L4VAob1ArYrjrEYw"
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
