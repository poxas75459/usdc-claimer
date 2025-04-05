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
    "34JxHLC2eD2zt9pXg449wsZYnb2NTmXnsVGwXYkQ33B55mvyWYB7wgXaHdjYa5ts6H4cawmxTrsJEHRWwU4SiJ7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5ojRXkYsX9Txieshq4zQdRudBzmeekmpcSdZ1AkWpduSmYuWxhDh9MvmXhJSAgfYd2VcxRDEZYKvnHj3J9Tny8",
  "key1": "3XkWiTWqqK1tgJvcvD3jGXXLs4jhgeZ6mxqz9JhMVLvi4nrcL6CNAbFYob3MeiGi4A9kcgnqJpDrgMGFGyg3GyPf",
  "key2": "22C1Kjk8nrH18Sh39rF98n7xt6TxLazuFLVHXQL9ALz6vMFui3muoffoxvSMDzTojmKFpMJhYQJUYj7s5PneSVij",
  "key3": "5tswAA3h67GfDmCKKDLZZtMfw9pX218pkkcTmPK7aW4q37nUW6K4vNhTdRpYT2tcsfaAhaQ4gm312EzFRkdvBynR",
  "key4": "4NdUcLH7geYxtY5LdcRhMv55ny5ZrJrbSsaokvXhDjck3XPv2Qc75QjzaEJBe2Wdw7s2tPBayqsLAQLDJ6Z5pYDR",
  "key5": "42wnzZcn5p4rdTymXFoKCnEv5hRu6s1VBXsiQ23EsKqVpc47VEXM7Pvt4Qf9q8yUDceiSkK3Qb7uKqmrJ7QF56Pz",
  "key6": "28mn3kqzMxd9Uf85DVB4X1ZQ28BoqQKR3aCcG8W98pk7oGdo22vnCMyaMdwfFExpxiow5Eb1KvfNBQSFJpNAVNFf",
  "key7": "55H3cRzi85yyLrt2UDYRy2VwkFzL1JKRJKp2Z72EgkDa5tzKmJjSfKhyWFvJzUjiNL7FLVnzZtuMowntCQiXqUoq",
  "key8": "5rES5AHeHdNUcvK2sJDaikZez7LBEW7B11RG6nh4gfBiGFCRC1RG93QcebMv1ogjM63qZ19FJbMjWvdbpVMjGYaQ",
  "key9": "5iPe7qUP9ACSok2Bkj7pZRHAgZPwV2wBN9g4Tv2joCPQ7eUGxrxqRxegQEqXch3Vi3z8cy3msqQTLrJJomXxKDxU",
  "key10": "4SccY2dGgAoHdyLS6LxS6zVhXo36m9KnQwfRWcPmowmbVSpUnAnLzkXHHwo6ahp5vCohFEYitVDC7BJMGWHW4adf",
  "key11": "5xkyVNfJCdPN49oXkEsjuViL93EWGCmMrnF8CXNLPqZ2ZmoJVhcXW4957aFSaA37cfbwTtf67kbK7EPtuiretQNZ",
  "key12": "3ZptaDjvfaAjpweHstdRZJBe5qQQXzjUSPx7nY917Namjpq3Ky6vARPWkBjXfVuVmvLMdZyhhR3UNM1sNS9zGy3D",
  "key13": "2FvPQEAQkLXYgXqPT29DHAkC56Ndch9sjDQG6PrsTWdmrd5zw6fy3sjqTaGWSXq5o3QgNdmbH1sKk9gmZJJB167A",
  "key14": "KRsWyXuDyFG4X18qPhejbC4ihsQGnsNwyRGLXNqsqmvghgM7Ttnu8PZMBCSHY4t8azGim1A953YyKWthvdYMAWR",
  "key15": "3xWtCtbUB9snKTdXPnrTfvqRZNFYgHgoZkZWybSyADuoSKaoNcc37LXFDeRPoJKmAYw6dr155GwsdkodwJzSKdPN",
  "key16": "3UHF7BZUfmyf3F8QUmK4aBn6KTi86PCss8GnZL2E2mtXiTZo7PETJ6Boft8xf6T9jMx1iDKdaZBW9Ya9UJLJ5wJv",
  "key17": "ZLMJLuuhMtcvbtiFaCxwpkKz6Hcf6JY2kvr8e1SBbaxdxctxYivSzYCrZDKhfRX7xAc6ajiDPsbsK9dQBNmXHoV",
  "key18": "3aeNvg7Amu2GoGpXRJMnGvS4ETKBK6TiSivNuc86PCjXPz6FTGLe38J3mdQmNRRGpPsTw4wsi4pndCVqD6ke1X5Z",
  "key19": "4ZSgKUDxwqh4CQa2jeFRDnWMNMrynJ7KAMrhghziFb9bXLWaBi5i8E2jD3bjR2J6dTtejH9Sz3babSAkH2QSjrvo",
  "key20": "3VfzsJf8EDHPX247FwxJLtSqmrZbsU42zqgw3trBtsDngyC5gXk3fDRpuDxvdYvFv9MJTo6xoUB9Kr5JxKn6o138",
  "key21": "4XA6h2bZnFBPp2XPUJTfbbYwecy2xPyLXdxGvbwcCHzPUWzrJXdk941sd1vLzqrXhs4AMmmVPvPqjanCSXXfae27",
  "key22": "2hCis9PmEgMF9jmJxxq23wprp2tZFwKjHrPkrsUMVKPtpYog9wc9XXBkhfVtnpxAGq5zPKT4rw5NwEWCD6aPiTVC",
  "key23": "4VVLCnG8uEq9WoAcKbWgKRWJFfwBtXRfenWvpz7L5N8kTj5S8jBpPrTcicY1dJQkekd1jbRKEK9hbou8Je546ipS",
  "key24": "andVy6M71B9yV4q3BqwvFrAp9dqfsHDRpMN4Xaqj9sceCndaM9YJdryPqURRz8KcQA1fBquwREke65BT1UNi2mp",
  "key25": "gz9hEiWfF3iLVPqrgtT5Wg1p4hTNJzftUbPYbmqMA74bWYE1zg5UCgcURivT2HW5BrWVVr851qzuRakjSfbDtAH",
  "key26": "24MQGtpPeD1LtpUXGYSmvY92T2kXUhpudGVgu3EivUbuFfvfvWWetsKrandSf1fH6bN1uSN3RmnMRUYJM7eGLKX2",
  "key27": "2CZLeRNsy5PNqaXEVuvpc7mycKd9FiEmvzkKbB2JE5RMStkXNYtYmM3t1og8LVFTYkFbh4hHLEkrbzAyVwBJPmPR",
  "key28": "5R8mxVtcZSZVPFrkUxsXfT5GdL9EsqAhYa9hyU1o53b2LsuWDRzfB1KbwNKfwz6uHKKox9jtqWKpezrUdZzbMmsU",
  "key29": "3afmLRP6rVQMMBi8DZnx99mJ1pV9BDWVkwwPo7TstgkYuy7YLWpSgcF5L4aDq7D7WToMjXKG4Vi2uRg5Fo8jy1iA"
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
