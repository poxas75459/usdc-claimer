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
    "k1MtEVLVGgesxryPCrZ7rFFqUvrwgn36mFNckGRFrKuwPVPjPuFR2zEk8hPRCryqRJCMvSbcXVVdWfFnELFVE78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXsktgwFwpggZp71mVWkaybz5muHP5nXdi1DRYPohj9ymAZRmnJhGrH9hceCRVugKcUz8rruDJ7TCRRAWo2wG2a",
  "key1": "2SHU3YYn2dR8fzMPbUgvYkhz9wrJhWkvZbqSrCseS2HXTJPUWeLULeDXYZcJbMcmBLELdqK89oVMDM1AcR9qpLiL",
  "key2": "4hzEF5Yi7TXAuchF4idwwx6pJdsEaYizhSbHmui4ush2dJFnjNQUDogBmcg2H2QYEX3CZKNm32cFw9M5eupgtPLd",
  "key3": "5nYj5SxCyDhLnVjg5NLLTQNQNf31HSpzAyJctFmHSGxn6wuqfoc2QMqhFyf3MDF7AJEmjojnm38Q32eBRsgojS7h",
  "key4": "4pdyVeSbddETibB2nxwLYbFZyyuiLLfTr2EpKXLS8qnQFmTwK2uBeJ65YXtLb4Pd7kxMknZ4wEf4GuAtxHJ9DeU3",
  "key5": "2aophjXV6gUE1mKCEa8dvQHTXqnNjqa3bKQcnWqxXhvdrzQCttBvoaFE9MhCrdvKNxAcRAazzEDoS1iZwuKq571i",
  "key6": "jdnF1Mc2Yw1DFksckWqq3vMCcW7FVZcUwHUTfHsKxWHm6hnaZjjtU1kSbrzhwyekwUzEoWQRUue842VmBsNV6Xf",
  "key7": "cs8L6eUj2KizYGkfVbHdydk5mv82SCQkxZnqFHdMrcKr5Ys5iFVmswYtrjPS2sFvj1sxKbWWStaqCD3pXh4W1QV",
  "key8": "3PUA5QkhhhoiyiyBs2jPW53uCUNvn1BV4ihuA5FcPnQPwv4AQDEAaHJpdevF52E9mJm63mN9LAB3Q3C9zP8ijbMa",
  "key9": "4i45nVp7Q9UJwfvG8DNtoSG6e4JwyRNWxYzGgNdt8vFxMewkX3q1GiEsXmgNHZucSxmv5NKuxt7TjE1ErNHpHYrQ",
  "key10": "3bPxKeh893uPfZU9uedAFfaU4xiiGSJhPXpk3RUKcfDk3tovixjF95SFmUaLCKnKM5EnX1Ghp2HBc6y61SAN9y8h",
  "key11": "4ngfViyiLNU9WhNxeLPNsiSi2bstE2Qm2wt4cP6UzN7fT4CT6PrGvnoPGLebjBZTBeuohL17eUSb46s9VuXqPEGi",
  "key12": "3giyBoGtW8L1tyavkJi9EPYg4SsXHNnkTuvZV4XsCrzfC1jtzNeSaE1KDQ2jMaZv7aKK7R7KkcHJ1EPDyCDKjggr",
  "key13": "QZDbFPnrashP6nrw46wbsP6dhmPMhZkfK5bv1fUmehtxQpXCrCzn7QjchhJDAwSoVuwQUs3uMYSF73CF4NyGx4T",
  "key14": "w3GrYvyXGwsQgNPydX332DkztuozwxGkTnKZf4eH5dG64F6371YSfprC8eEgFbYZUa61rnSKioVVB3j37zVhkkB",
  "key15": "2CczqrAkhShEzURRVnYbE7f1xcQ4EKdomoL2CLwZQTKd9CYeZhzf7AmPbLWqwJUA4wxBsHTgdLwtVGzLqiZYM7qe",
  "key16": "35eWH9snoujBxqE1HoLsYvoZQMFbvrwm2V5yUuZorjob4sUFzMTo1dev4fZdzxQMPucY6JC2Ex7D66kKap8khv8w",
  "key17": "4G64z87t1H2NawnTEVT65KaYZoSfx5C3H5XGxcRsAAELceDPktKpzxr3ZWKTrtHE8x8RGMMRkdJhDTkUtEAQFHhe",
  "key18": "4DafE1qpVjto3XTuBb9ZwGHwpYXGgC9SEriAoHZsK4HsWwp1YfTL1fa1ATiZb9nGPTM8KRK5hkJuthTzeNkCZo7a",
  "key19": "3qadmSHxr5fE7pYUNA8tPnsaSbW3UnjMRH5uCSsFGKG2DJ9RM332qvFbns8VMh42HgBuerog9a3rXnhG6VPepizH",
  "key20": "3yf6ReGREaPMxkvNHbqzXA6DxjnSw1oZBRuZ31QbEfPe3zYg85KDJ5TCa22FACVosqTxcy7iN65VMB8GgwVvsFdx",
  "key21": "3xCgjXSWE3d5qC76ckxhHgBTwT5V2U6zC5s7BWtZhgj9k9K5x3vM7DSxUmLuaoe3MPMqdmJKbw5LrY2Z59nSGhVc",
  "key22": "cYXFF7v5kXujoDu7wD46hVj1a7Z2WGdEBJvsbPBTvMvJqdwmFny8MJXDpnHLBkT2owaPABrFcq27EgpfUHBuNQL",
  "key23": "nNq4tFSuaBwnHvfeNsB7xmWUy4UDV6rGz3pH18pBEqPmnqgxRgkUsqRadJnMySvaEuoUA6PACRjz4J84N3xfNp1",
  "key24": "Jtvy8gXs4nxdnD7EmL6aNt6JQf3NUAqeESVqsPHHSRBhY5uLcJKRZrYx2ZBwrYHRmz4MUqk2MnjF35M5hD27n4K",
  "key25": "27WgzVqW9fvYam43gADyiBvfk7GTNjBSB9QKkw8UcyDWMiDWwKUZfbjN6NkHRyh6heRLSdgFm1rptR33X6vjoVJN",
  "key26": "5ZWReep8b5h9fWBmShJC3JK7Syspi2rs1xP4KbDVCbfxDBuzCbJTKXLfAioJGmAWC9rfFSsRatBSJaNFiS2BymuN",
  "key27": "5bUuMRn4s9t9Tim27yAtskVGss98ApcLN7RXk5ZUkQavbvjRLyzbxwQ9pDxzm2SarGNAvmZ6hexC44PmJmpCfzo5",
  "key28": "3HpCjeGL6hJhUCE78iwQHeki6xE7YxBDDQifyj3waAjzQDPaW1K2veA8ffdqh1TCtFq4GXFNGkNmUr8bd1B1xxsK",
  "key29": "29qU2wYuqYCH3NuybGmXC41JFuYsp165wdLQrYywWLA3xULMHPKr5c8duKiG9ZsmSNY5hBMv5myWMSvPYuafr94R",
  "key30": "5dtXucpoHYw5Zd6asEqyoPGWJKrw4QMjmAm34YQoULuBo9qjDZsuyVHiLDxKPRGNZPKSUfiksefmdjorizu9EqiF",
  "key31": "21MQJEhZf9yRC5Eo2ns8F7mibjg3G1M6SiosRruEq5ubd1q7KKSgwozVPdBf7CxsQ2UHxnQPDP12FPYxsa2LqGQp",
  "key32": "4JkzXetecgbe2niD8KepzYwcAmgB99XbHemgVGmJyKbL5EtJbk1uxgfvQcpgojrxL4gvPNMqtp2MhxjfrGwk5e2c",
  "key33": "3Q6ciaLUsKrRqBpXeZ7zbMNWrhsbzFBBhnpCnc1idFJnaDDDwtxRfy28crddiNY4uhvcpY8tDjwzrQ73ewTXEBLB",
  "key34": "2yENtyHFZhd7GW9XqX97Sq3gaWDa6e6QYx7JKFvwy9qR9X2rx2TSuSxC3XzS2ux4kbvEthtFq82CWqCxPYVGJr6m",
  "key35": "4vg1KbiC2isom5jnhHEfabhKzKikXfKRitvNJ8excCFSZUHbw1k5tXsyMHoqXibbSf5Y5Aq4gRRSsyjtNFujmdRa",
  "key36": "5AcWvQmvn5siYAeTgdqtb2DrMg4nxecsTnkn7N83Vu3Ee6QFY5rmwVvV2SHduC8d2G4qjQCs4j52s5M7ymY2pkXJ"
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
