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
    "5vF6DgXYdJALH4zXdyZ4Rj4bVVsXCHvG7JGWSCtwCcyKfL4WF6uWyWh6mtgf8yA1pee5XQra5faAtmtms6BpJyhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVnchMjUVwvWqDAPgz26bVBc3JEH7Ub1qsz9SLmjMk6ySH1RM9k4ED5CCeeGGeTTprAZJBw9KVS1T23oZ34VvfM",
  "key1": "5GkxXD77bqEHbTLi5S13KU2CwXoDjQ5Q1TESBhvrRZBUjCmWA92PdCikW5Rs4i12MhSBq8DV1c5ap6ceTJQAhDdW",
  "key2": "5QfWFZuXFNmv6hhsYv9NAsT3VPLhjfYHPc6k2nHhhFjPsyJNwVonpjrnQBWtxdDNbkP6tRxopRU9aMMHmdJ5DVse",
  "key3": "3KgLqn9Zsz9qbtEUuzx6XwavGGWLFfpUCMBfUg39H6q35fjpCH8JWvGX61uP6rJ9AZqXZruSV9JJVqJLxzNhEZk8",
  "key4": "3yyPMCMDmytmiafYT5v6TuK8wC1iLeWGc3aGuvKjVqhDU9qaKnDwwX4Q1hKfuje4XKdKkrTi5ZjTmCRd3NAhxUuP",
  "key5": "TGwesGECkMCCd7vNEk95KuaVxYpsnB99nBBPoPpwdSNcmMSg5oL19yB6XLZfh2s8LMMRvgmtPYn6RXaZm87GtWK",
  "key6": "gxuSVHV4rwMAt3cK8oBs4BNMnsL7PghHPtZ7wyK8yb6Sy8fW6CVn2nPqvZCKJfCVL92x9PgLvpDBujDaNGsLmFy",
  "key7": "gV2MyUB3JdZVcbLM3eKn8oLdDk6aMKXySd37XUXE1j1tWZu6HjrnrTkfAbDwkCjqdttkPNFUZZf1Ep9eCgDDqSx",
  "key8": "5Bxas4BoTD6FRhFt8Xk2J2XSs7wiTUT2r7Gwi3EiXTtZbHeQW3E24cwDx56iVwuCGARZqUJYNJQJ4vtTj9eXZyyV",
  "key9": "2xLuZ4yHRWBA89CpTQVJLxtKhH9saApNxy8srDP9ojvZJMYhseiYtkqNsHyrhPNR26MLjem3WbqW3Pyc8jxcYtKz",
  "key10": "3Y6MxYCSb8ZmZBkik95UaLXhvKwwAGnSfY3BTfjBah84wSaoJyfVXFY1HR4itSrEk7AKfxk7nyRXXxJun4E8WrwY",
  "key11": "4mQcgXdkTMb6D7LokSvqjZ19c3veCS1bRXvKCy1NGXUDYTkkW6hvtpYM3oknG54NMQvExZaoRLJUfuPKrwbo6LVT",
  "key12": "3RTVAxs7JzwrvWVmwSqrmkGX1SswwmKEhVJjuAYJkS6GPwCMm1EJ6SQdmWSn5E3BHMB8f3vJjVVsZRwWKuWkCSY4",
  "key13": "43oJLWYRmsZAsJ9aVLw3oZa9cr9cj7zD7JXjHbroKEuM7hDEv6qypzT2VRP9b6FtZhix7WWBbnzNH3UDVoKURWXe",
  "key14": "2BA4FBocUcFHUakxCCGqF8mcSGLDFC9AbV2xsGtguGBT3JGP7k1NUfwrqfRoMNbHmbWrHe1FPymAKs96kHhyDTD",
  "key15": "U1qXdjvT98xFSnFwFpJ3m2sK2YxBtFCVZhKgWRiYLiaQVBmZfStWxY1bwvpym7BXKWPickwP6WjTXANVLsQJWoW",
  "key16": "2XwLGGwuaWTmykAxrsxTvLczCW3JtQM114ep6T7urKgSECMLJzUtXmf1SfCUFTmrv19NLUhEpidCEQGUcnq2eQaA",
  "key17": "51Stom6u4VvHmmFxrZ8WX3xRWDq2bpNz66Xyz1opC3bbTPHhopQuKqsJEnc5ZACmuTnSadYXCHttkC4bXqrqCdUz",
  "key18": "SpdyBG9BeUk34S55SxterSvFFvE6BS6F2ECJWMX1knKSaVXfQW4RkaMtZFfBBF4BMAj3XkzpGysDC8nDWoeuSMY",
  "key19": "4bfQPRxsJ523drJszEazU6ExzeWmmY2aCx3jPZCZpSjf6dHeBEQ18QYqTkBL29wJ2asGnaGFjBjZe4X963TLj4jJ",
  "key20": "4m9VhJ3bk5ML3ZSsTkdQQs4ea4d69XLBsVs2w4jM5KyXuqnG9o3trDYuqHRuqPefHF1YrsbrZ2GURwrH7R4puwVu",
  "key21": "61m8fX925kLKWvCctzMkwhSHLBSdGagrVqmfYo6x5eChtMkmFkD8H3w9o1begew1P2qXfWrNZwwY96S2pyrRLBdf",
  "key22": "4busuBMpLMyRefef5FXSBZLsNg8mvJtf8ubPWtMbgZtxpydhEetgu4rEVnUKqK2uiyoywbUTzLmeFVG7j61p6cZo",
  "key23": "4SHQLnYFb47EEeiZp7cGXhxxaHQUBWZHftTMfz9fXrqKDxs5QrkjE4UT4nwHHoryN9WBk6UbFd1FjKy1Zw8ewejP",
  "key24": "46HoyXGaYCvHT5pzvr2aG7XNzMh9QqY5EDHZijfv8MdCPmUKiLevdpSFt8dMw7EomL9bmMpUKgVgiE4nepmJkJwm",
  "key25": "4SRmkbsiAowEYnJegZ27GjC4t4CBjs8nfiBTsUg5c7HFxSNZj29QqR9fhL7SGyWrSCjkxowiExHTFja2iR9JgYd4",
  "key26": "5aHXgQL6TEQMHpLN8XWvaKU5NBbwPMZHAPQQhh43ZZDqKDKvnxmqKytH9EaUvKMgV7RVmG2Lj82VVkpa4Q1UvMLf",
  "key27": "5DFLvdwV9LWwdvwHev4zuFZ1AcXqeymA8538JtP9sq7xCWUaGPTzyqrbJ7vEAk96Vc7CuJhrTMcRrNjJgcooD59M",
  "key28": "DqtDNsX5emRhUyzhv6WucdMAXzcAQeNKwsNjYgRBsyKCJpGZTgnXH5FhfqgEYJpT3bwVTVUFuGPCSXWNBNh36b2",
  "key29": "h6AezdsXfCoRuaHRXJUWGMJJ9wADfReZiz1NWRkJjJp2thNyMeXo9JpNngGXodr3GSje36eXvkqmUU6nHyS72RL",
  "key30": "5AZLqB55kDovPJjNYA6ysdQrvrkjbcQWotGyhMdA5Ne24J1DNv87cfxDaRjQuen2YdeXvTp7Xjwve1hsDLYTtZNh",
  "key31": "5f6LeyAN8JBx954fzizajfr4v3GxeXd4avf2Gxrx1WUztZBgLu4qwN3VtPZ5t19AbV9iVHfxfL6AMN3TFnHQLP78"
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
