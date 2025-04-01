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
    "3A95S95X8UMJnKFko1wSi6KMSjB4bBenscFBQs3xBpruyzn7SuW15TmV1iqiWsnSaxY3D39dCfPr2twQwkEhKvPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msdCoi2KE68umb54K87nDg313X7dv4cbVftA9vhKpra8QLEDKgsPnskJQVeU2yaTB18YoVKwrofQ5JStBB5ZGg7",
  "key1": "5yPRJncJZQxsoNkVm4o1qX8C946KBANWW7mQtgMzJUYzdEWXPkA7hc3H3AWpb5CsqWujoZYZr7z7wn6TV6MNA6Tk",
  "key2": "5re2SNvELJpbpLqX4DsN4xbxkPqscarBdR7MSbMYmaC8dSwqxWpCsD2PHCGkkP3irBpS19B1mJESR1d6R7mwz2zW",
  "key3": "3dVoXdp7CLWqWaTYsvUbgRXNSBwBvn22BFYDthLD8mwVkzuSjvrrzhd5aSxkW32Q4dFnpeLGoPr6hRb7dW9iKYGJ",
  "key4": "2863FrXVrR7FpD6XtxFKF2Ct3zgMtDPAwegdSqBT7sDUcRA8Nwb6ksG8Z7nc8xWhrBNirivcLMw3PT4j2QC3YcBS",
  "key5": "4w43Kg4KSMAJhwg4ppeicpDVZv8JJiVGggM16cbFSkpZpCraaqogsWYqQRGcuzBemLcsmnJUy1hEey2g3KgqhtTf",
  "key6": "4T1SfM7LKU1bqiEbVhd6si6TZZNorGAEgirGmNWddKRfeFWmgPCzhfZLBgE4ZFMsmckfVrhQRYadfcbHNbB5FN4t",
  "key7": "5suxfFAU7Afu9LLfUgEPu5HgrZk2nB7upLPhGxj29beEoorUsh6aGPTm9zqVXJ7JAUZWyznzJsqkB3FXN8FsETEX",
  "key8": "2RMte1aH8WrDYG9QnmtynvJUAaukmUBGm7NMEHVF4aj9ZvqPLchF3Ve84gRWDzYWwVPxELBmY7SFKgu9xGxnjL3k",
  "key9": "4a4Nyttzj3YS4yp1b5dTaM1mfT7uxbX2E3gVQyFYzNjHZ6gp8QgofZ8aanMJn7KQq8yvvGvCPKBVdkhAC4EX71Ju",
  "key10": "3Za2qrih6RLvBBoTC1vhcC2rdbwkd9BNyLJEy4aYSeT4i66i3cFYpdvjMhrqQYtF9v8ViQkWViJnm3Lxs9gDNZJZ",
  "key11": "5QYgrDvNbgQgQQVx2qwpNLJb2AzzgKqEasFu6x6RcvKHLiDoGoFTMASPTtX3qyTBY5TGcNbm2DKtzRPzTzrpnbsX",
  "key12": "2jNnufyLK9YnZ5DiWNjToCC6rcNev48v44H72rCU2AFynwrdZXtjvcnZUigsxqQzEuzYtWuBktaWpJEEuF4J17W9",
  "key13": "3Wyze1jw1yJkTqYS9yq65BjNQ5dsau78J1ZBxGvwcVKPcxQqBnokizpsqCon87uGWzx9MHtQkbsQBARR9kczn4p7",
  "key14": "mVbKfRxjUn7Rpgr4fi14bKSTEzahuNDRTBrrF6JZrsavVkcG1hJ1Q71AFmFFaQBA6J7JUzqmFws2ibDPRC48Bwm",
  "key15": "5ffeEB9CJ3vyxe8kAvRmKD2g2Fjdn3CQNxv3JuivMB6F6vQKfhaGNwxSsS7VE7BBpjsp4AWPZGaTnMZMiJWPHZaz",
  "key16": "3tuLi9u37KRxFXC8bPiQLZoMeW26h4SwvpAnD3NT5RT4XwWbFF4V9q9Ua5neVf5inYyregoz4ve2L5dmVUz8CRo2",
  "key17": "3dPf3Wj8LA8qb2zUYmersvULxhxydRkvkWkoK7TdJSfiCp57VakhK6MY9ue7L1MbQRuyFRN8XYrFcGfY6Bn7xdQ2",
  "key18": "Rs1iHxsYEP7mhpuL2PsQ7EgxjVyxTBqcSFsUpL1Nc4oqVdXy1bEZB1oD5ZDbrKtrL5YyWRH6S6NFDhyiyDG1PD3",
  "key19": "3U1SCkiiXyc5yMTLQryPiL3MAiQTtCV9w6DsfdyVHJSuXBsggkcgeyuper4ESeMKSasbngYVAMGs6pXqAKiHmauU",
  "key20": "5dMuExxpNo4raFviv84E1Q5wWJxAbmLTsqjkKp942Uy43v8vLwLvq3VfvPTqdu21MsHLuMncwxQ1AYr6f255uRqV",
  "key21": "5YxLgcFpMjFiCHaL1XFYMrCp94UofjqZtDh6Qnhnc4f4TQ3eChtWVDWATVP3TuSxFNe4i7rWKTrvGNxoQMDwvzie",
  "key22": "5TLzXXn972oxeFiiAB6rtTbD4uo6EPmcKRmYeHD9DvsXYm21RoVztyPiv6KvbqVmGaXTYn5Fv3JCMqjkkyjtDX3e",
  "key23": "41UrkifJq7q2sFoRNCcLcnCdsYeBhC5TaHwvQg4UzWawboJZ4vK5MKmnFKdidZRdpCPWiqyXqnLnCj28Dgk7J3dN",
  "key24": "3cnokkWbwnzoajSKWJBfGCQvoxnTLQDT2b5xKieqSRPLeLs1qv1hGLZ8iRjhiXwfRkHb2poRmbSVZZp5ajU6Xo2K",
  "key25": "te3LVNzKw4zL5Sh88zFYE3Gc4jioxrwMoXw2q1jDqqdjHoHhYby8LtisXQ1bFec97DnANyruaheVQhVT9dE88BZ"
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
