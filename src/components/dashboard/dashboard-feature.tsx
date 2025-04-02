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
    "4NjJG6jGTCmbD6qEnYrBF1K4q615PtFHJyUQ6rtB3uq4vppXcgqYayY6hzSZzt3DCtp4jJbs5gwFXDbbabGZEH1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EY4VWvct1t6CLSpBCsTMTuPepEXSM85vHoDBe5T4SnrDsRUFfinPeHG4afKucxNrT6ZjyFMXLPkwEEHEQH8ewmd",
  "key1": "2UExdNgwA3rBktf1CM9wexZb3QG7beUb5e7hAV9RABWPcmjayF1m8RnSK8V7ABsLLzDaV563VE2BYmSdQ8NCDBLW",
  "key2": "5gXpdHSK2qk38yHVFptJKLBvQqhZpBNf7W1azkVgdCePK5caMpSWtAZbCLaNrG74Z64rKv854ggVDVH9Mr7dGtxf",
  "key3": "417uzXVSPYDHFj6UxFG5Nea1415bZjwcrzaVQSm5yy6bmDWgsb1TpoYT63xhsiu6qSgvmaMbjKRReruE7TNNFfi1",
  "key4": "2NGTDBJcRmbcQpVgNvgVr9WcX3TK2kathGy7DhdYK2PGyPAMiCBTa9cdHP8ZLyJ9KgQ9XfAh7cw72DUf36VQc48E",
  "key5": "2XpWZJhcryuVseRkUeJsqwsmQGXMZChfmv2b4TxNFjBD9WFKWR7iCEuVQYhWUjyoBwbzMQ3cRNGCBMMtnMXCQXzs",
  "key6": "49k7R8VZJ44MksizLVQVTA7W4LobV2NXjFfF2tHeA3qSq2QfV95DwJSMtDkSDR9eXFnqqUSNcunLiDgykQxZCff5",
  "key7": "3SqfADeqcKDu4C5HxLCSjXrqgbzXYgLG4mMeKRw4D8sHAWwZYQkr2DfdJiJgxd1PsR8zsEDEmi24VtnxSZxTDWDU",
  "key8": "4Jd1h4UbpSGbHKaEvVnfkhfyLZhAiqeGSc8Khqi7mFKyuYobB9G8TaA1rpmjFf3NM43eZGg6AtaBVZcZ2GqwTQB2",
  "key9": "PMPrzMcKcmd3T2KShS9gNtNAuk4D38Bt7bzARtDBNwHnYCxpKcMzxXzYgb4Ru9eqcWuf639oRAVpdNymgYb5rUm",
  "key10": "3wYY2jZhcrSRrTrLUrLpH1XD6myPSiMBdHd4zH48AqJUcsfHNoGt5jifvf5fDgvfgNixdLhnkCqH3nGbTRpuAPWF",
  "key11": "5p51Y8JpGFY73vggw8A8RuJtMcq45zP22fUCpwoyP1fM3mdufdMgDchsoHqykwQc9bWyaYR1VRHdvTs82wKipL37",
  "key12": "2KaQAxxWTvbyMQs5m9g7FVnRnjrVEuEzJvYAT9tkgC8TtNjn7ZhgGjjdmQErdmA5vcDH3hLdURtR68xWA6FR75hF",
  "key13": "7MHMC5i7Y6RKmpQAKD8DimUeYJSXTdBp3FRNtPXwzzLBSAqyr37W8BMopv4AwKWcCGHfJRMjKJxTCDpPMnNS9GZ",
  "key14": "4LLtzsDEyfuEVcR8uN9WpaGb7p2HMQMJzv6vgvQNe8GdsqwKLTGgpNDEyk6AvVSHgffLbJe5XiZEQ7WJoQ7M7HqQ",
  "key15": "5xFy4WPzQK8NdvDYg4hGAsH2v2SGUFqZUizmXC3o9mf8aYG1R9wKpPH3aCMVn79cMyWJqp47kiq7eN3FpvTeU2kM",
  "key16": "9L5VGDR5wdRH2NHnzcFMMZ8yeQ38BMderzuU8n2phkyzKZq2tRiayBdFqN4pfpebEzUsLYf3hB5p7m9xLRPrcqp",
  "key17": "5xPFYVPhtw7HtEAU11i7Zn6FfFpW56awVKVcDJcwk88HeVgzqgdPUB9Azp6kcmzfWA6PJ6K1vKMRfnKQaFuX4BAE",
  "key18": "3i5cEzqUabJ9Lm1gdGyjcjJEfWtRisZb1ELmpTm3wSnnG3Bcz1aaRJ3L2pWcECpoFURANYFHGvtwMrdxbjnXb7NP",
  "key19": "4MurQyY45VCR7MMdcdmepg22oJtp5a9FqERYi3sdUavjnGEDaAzMby8j8F8XKMHK2ivrbUyJUxZ1S5xbcReg5iuh",
  "key20": "5PMWtX9xRB4fZNm5uToq5QoRtuyrQ5rUP5brcQRyiHTxW7ZRpufxyyfJfjp9s4Cao2Fe6w2EibCNESiycg42xaR3",
  "key21": "4m8cwQbVxutQTxCKkRJj11ooyJWmag9LT8QBxGnreGTBJMaHFAsXd2apvS1UPLc9dU4PPWmSJM3mSMvp93gUhaBL",
  "key22": "2YYyofir8E6YNZ6qr22KGyQdgPscz9NSCZwwaxZ33cRC3yoEw8iY13rZZU4auSucxX8wptCtqWcJkoNVFVp3eDZ6",
  "key23": "5biJCDMwruda9qQLBqowNbg1HfYSvFBFpXCqqLvBcRd8rS4KS4hfALN4c8ZHFxwM6kAtFPxHWciLnDU15ahhCrPn",
  "key24": "3scvajaZFhfeEtPLJKxziHxfZYS5sZqikqUu9mKtaqJG4mZ3cC4viGNoXeMoF6pQCDLcYyTaL5jc93jTmsayJzXi",
  "key25": "vov811C61AAgC8hzSSAtSyELtafhSmQjW1eBpzmddbeMDqJRzeXiUYTd14tsPwu4HMFvVbX9Xo7CrCyqqceRYK6",
  "key26": "4j1NBcqHMAtmN3TWxuvBKS26wGjhoqr7HhvVqzMCcKBymuGthnvpZG9fkjAUPEv6WXAvQ656BNxTk4pXMrXrsD2M",
  "key27": "5PPxo6tH4FV8DmKJhay7iesR5EwVynKkKg8LCSp6WtKaeved3DeHn9upskkH5abkt8ftLDHVPZqyVjbqnTo13q38",
  "key28": "3HjttjfBcgZj7ME7N2fG1wp6XVpEKJJNK6WyRrbRYP1xCJG5rwK7MRMKeC5E6uJKYER2B5S94xe4Mttnvoe4rxXz"
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
