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
    "2g6HHqvP42BPyfVQTMs84rkH3gpUDUEBQhfXSgZiNB8ZfVUGtEv3KNQkF4cQ8rverdQodS9FCqLktPoC4ovPLd3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDitu6EVcE2nt1ds4BqBd1bthqaC76yXUmrHiKtvQwfcU4o5QBbUquvFpoQMF5nsXBFemrHbV8r4WMGtKt15DJB",
  "key1": "jTGMVFetxfYBEG3K2bCBo29GE1NTyinVpEv9tqUoHuM52ydt24DeurkVC1UERDdY2Dr2VA2C6F9jnMeZMDHhkoe",
  "key2": "93AApYfDR3VQuQWyyPCk9ePD4LnQ4VTnTugwPMF3QKv1S6rGxP41W6MRDZyWYA9eczrvMAujnMmQkXd8W9t5kis",
  "key3": "5MT54U2cyySNuvmWT3GScY2mRMBBad94fXEaswJaYRnNtNTqdTuvk5ynFy2HvGNqDST3eo1nfPmJViSvCcE7Nwgn",
  "key4": "5G2fmHEJp1fw6zECwtCj8GmYVscnZjiBAYpnUb8kSRHAG2QVjpfrNzJEkVS9SazmiaV4ZEogRifzNjfVunKjEZBq",
  "key5": "4n8yCHfs8EYGxYykSSfPmtniKfAvKMSSgeVbQDGina299jUKNTrP7VPbuoauKCxeZ9uVtst6coFxhQHJGpTU6MML",
  "key6": "5zaFRDeJfT7XDCRCVxVRgB1AonuJ4kp2F82ESwhCTkd7F5u5ame4Rs259NoV37Unt9bU8kjtdLFPr7XUQXRNJBmF",
  "key7": "5wUm1CujUudFaih2HmrCCZ6gMCXexxNZPSjTiHZns5wxwE6i29EwtPfgevBGc2FVo6MyyA2HFro1pVvaYGdhaKZq",
  "key8": "23MxXGT5H7uMdXGVUbHYehN39gm9HXXxmHvS8gqeep1dXDjSSXXXF3rB12GtjJ6pJKLHZ5nkaDCATNapjQ486jVq",
  "key9": "4v2NevcGJddUKRHsMkZu4bNPHqT9i9ihxPLpv77xdWv54Q3hsmNiKWFM5bZdoTKrWm6ku1YnYyxVciUWChG13GJ3",
  "key10": "23EqJQscNmTGJ23uShBaBGmCQFLJ3zaXHKaenRRNNDSfPnmUG62MVx54STqreJvBXoSzhZkrU7nGUNyEJdnKSP3q",
  "key11": "2wMMsaBXHCGNm7c4ViXXFvUM63rDhj3qqywrMeaPycpSJi7Mo5hH7kv2VYq9jzX8cGqDEgHPTPRCj85eZoUNKMYq",
  "key12": "2MGCiKfzX4ztuXeqoPCD3ncKHxceSMFfHCyL1xQmioHS3stmDdB4gK3yWEPFYgTg88VaHKWHBx2QzYG1oudC8iuP",
  "key13": "2kYWHFZGfjR7kUcWjd5UV6oPXdANuviKzBva8AfL1k2WdLRQVJtrkpqPFpKs9NAk4g1zMp7Bpck8Kn1MSLMEVReD",
  "key14": "3e9R6ZH8USrfua7q56SnrgB1KRaiHnKKRXikkTBLdYrpKweAC6q21uywCZUbk1x4a46r2ypoMWdmsoYDZaJ8R2Tk",
  "key15": "2MXGNUPFufjAGa9tUxv76cFKcBYXpKQSznFRSNJ92W58LynxdHPnrUg3EczMt3cdzYJGgD8Nnck9iLP7fCVCkKyb",
  "key16": "2Y2iwyDkd65nYt28DngYUrsrNHFQ6FZX63rcv1HFeK5iT4QD9qWF4sFMaVkChtR1FLrLBoW6EGcb27FaSXH463mS",
  "key17": "5thshCAePjhd4iN5YCWJyiDhddEnhp8FafxQQmNzqRXsbHy5sf9s67RU2KqS8NbJWsYtqNCcy1E2cw5T6H4PHyAc",
  "key18": "m7Kxr6W76BfPhp9kbtW2rByqMn77QDV2zqZUgq29C8X3XV46iohNjvmL3Sm3FLqJGb1xUcLd3Y4TcM1sEjkd2ze",
  "key19": "4KHB3eneShxiU4zz1ydt5sLsaYXsK1XZSiqVMLS1WKnhgL8K8qi6Pito74i9CvkJdubTu8Ma7YfKcL2NnxMPxJRk",
  "key20": "5YGUWKSPYqM5FpsA4rpiXxDAkRGyQMSGFixPThMhECXmesvHPCVxu4p7TZ4LdccjBQMnZrrM89czkBL8RZVp863y",
  "key21": "3AGw2AMaVVEbhuRbUxn3cmSw5YP2Ha18Eidw4VvM9uiUfTwN2tPNpKEQJoYdsY2WPYoj4MWHG5wW3hN7oREaQoEU",
  "key22": "zUDquzYTsN81YdnYtdz9sWjePG8iTCEqo7PiQZptG13zo7RbCcJVm36T5Hq8zgdVy3egpoWhiNvvhPNvvDz9QMN",
  "key23": "f8ThW7oxLRe2UmV3Jk6epVmjmGgugQamDrPpT2wsZycdcoVsh1Zvak4o62G7cdPk4XEYoBxUie16AeZP71kXgge",
  "key24": "53FfDFJcuSFGRcdiiXZAXkwmFMeduNJhcUXsMnwT86mKTfjghhrVrxYW25PjUXq6iaZijix9JVzEN8kNMARYAdtU",
  "key25": "56Avx4qadqHLnuDfdPhhkDj89KrU9LuWYk2Qdn4bVGZ3d2dEgR8jS9w5LB3Kx8inDKEArsaPPhASdhZiRdYcVsM5"
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
