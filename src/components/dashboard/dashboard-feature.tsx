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
    "589wg3e27xBsKZMDMZpYDRkxHbgjr8jSod3ZGVig9AqKHED1XN6UoS13AjoDaC2USAJCjetjSiGUrYV9R7jUQ5bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nvyWskQNA7jn7ZuNWNzBs8hNZm5sX1h48p7nY5nLdFdHJPrmMAM1LAYavKAc39VeEbNkadoYHFt16uE2yCEjcbh",
  "key1": "31HkD8WyBjU3xch3Mr12eUeqgC1QjBFV11EX17cLB9L2Uxtrysx19FkbfmdnQzoy9jA6jc2fcjG9v9objzbJhoDs",
  "key2": "4n48ciruEhvMKYdmMroYxXxitdbbj26cotb7oDWNd9n6Eci2Vogcy3e131jv2XLsoexhTwW86GXzcd9b4BworE5N",
  "key3": "2LzfrWpdnwcUzDubab5aZqT8nEoD1MqJfWY2C7fnbwbPhPva4RzhxrcWvepLqnfv68eVNGEwqCsKVTAgEwAxP6s6",
  "key4": "3E8CkHBP6XJuzYUrtF63Wqsqbify6nziJeDNo4uMVfgnD4EWD2jTGmjXaEKU4oyFGhiVxriXNhmZHhc2q4hRX82",
  "key5": "4yC27AVxDyjbVm2wga5tw5Fyes1z7CuYSQiogsp6HiPfaVewHDbFM9xekRro2tVeNCgC7gFrmeisf8NLrxnXYQtj",
  "key6": "2vPRu1qVejkLW8SwFsJnoFs7BWsEWQvRxBMV9pSpzGRgqjWdTDjsWAsXjp8FZ1JvCeP7yzffwrxzq6N3cQWAWrp8",
  "key7": "3snBnnXLJauHdhAkDRPD1kr1H3jWL8fmX31zE2bARgejL6gVeoK78cRn6PgWf1RFxunNouAmkmM1AvURsZRxe98g",
  "key8": "5DVpS4Wi8ULSoKbMVmn26ivJJ4T9wGw5VmyqzSjSBj1uRA4ANr9dNkhp2nr8oSVVfCzePGyHVMjwx7cwB9cEdRs2",
  "key9": "2h445ksfNpApxaby15wPJqDAPdM7Thszezp21kRqM7j9WV25Q3SeYrLfTYDPh3ByCN2yz2Y87GnoqVbS8umQp5c9",
  "key10": "2eDiF29Uv3rhSuTYBppAYac4PW4tue9a7MY78NCDtKWNHZ5PEXCgjkXCkf8yktBiAYB14xfLPV99jC9SACqewpXx",
  "key11": "58ofA7YyRLLF5fdJaM5XnE5RftF8JPk8Zhz8Z2TjoVkQNf14EMDBSBqCC7ucNYsDuL1FdvaDP2r7SyahBRERTgnz",
  "key12": "46S1o3boSbGXxDtWhhjZXb3HDLSTbtzbXpecrEWoQ4GSkWc3zSyShPQvAw1knnwGT2ftnFJoqfRpiGFyfRNEU7rc",
  "key13": "3XrcRmmPEL6ZzH3XbL94a2YeAU8Em9mwpCE2wWiEftJaXm7JMEZdTWYMo66TDTGjmZxNhSbqn3b6cXnFgiusLRWQ",
  "key14": "HTAWwBDchRjjMudetBPZusssogwQ3VUU3T16HjLzX7D9YDXDDt3QxnyrghsHJwNUeKpmWmtH7SctdsN3iKCaVEm",
  "key15": "2u1mDYhgXD66TsT6iSrYmcCrwSfbQXN4Yovkfi8XMTPEaQPXPbYt2LNd4ZMXzxV2y6EgA7buaCHNbuWUhzeZhtrS",
  "key16": "5x2vPeqs1t59dkwZ8hs2s3kSpLPLnKBMGNtWKBixs49JmXLTYvrUfJV8htH2C8UNQYLzrX8sccQESWHydfqUwpSX",
  "key17": "5tr2WbQj83LxfTFptnz4pZnWYsTFqxSUFsmx7SbTvuviuoafarDtpkQj6V6zZhGM4P4u95Szfv1rySbAhVjDy5eG",
  "key18": "wTM9h9YKZk9d1JBpa6f7znTMgNC3Vm5bF9LEVpkZxvvqrBNzQLjSU5nyTmm1YeWT1QfrHNP7GXXdLHrstrATGLC",
  "key19": "5bxVUyKcUR9E345huRADqPbL4EcXpPVKodF2DnZnzVoaKNBEr4i8RfsfEToxQPCTdqUBnFS4Hfv96F3PxvfD7bPD",
  "key20": "35Aw4dijsC2usB53HuShhLSPj3oGmeCWnnHzqt7zN8X6i2YW33wyqnnfaAEUmxwPfDMFubqk9CTihfdGJU1UDotc",
  "key21": "3jemquiyL24gpsvYHqJRnrpPq3XPCumTV26s2Au3JQxwHw3zybTYBf4jUQhR1dj3dFza1rHTCKoDdWga7bEmLLvL",
  "key22": "4xvH82LtjSvfD6HD4yWrQChDfXExJQas18wA7YgmbZjpPVQ6Y5ZKxbVNjdtmSvAyNrpeKnj8XWp7PcpTmtCPKvjg",
  "key23": "2B55LsVLxUY9YSnXf2T1pM4KeWLx7iW8CsUMkkMKbryjqT6dcZTV4YKGe35JzbHvk3ggzJnproKQWHVS9YoSxZKT",
  "key24": "Yd8mRFKXwSR7ZKw5hHXFHptuVaaTZQSZFBzTxApN6JufDPweueF6B1vgdNWVrnkZBaq7ERRcW2fTfotWWEvKsKG",
  "key25": "51HNU26rNmX7sB2aTVq5ThaZWiv7T6hzJ9vkrb5F36M5aBL5jHQQzNDAxg1yk5BFfsMPaoigQoywVnaot8MdQPBc",
  "key26": "4pyVYHSJnL4c2v91mDZagVTUmReYAwG4Q1DCDmnnMwr3V2mEhKStN8B1ucSjCp7Q4PgbtSUVsP7H6p3TQHuQnVJT",
  "key27": "3AvwhKnEwoLAaWD19bFKB93Qt9uyXhFdhiXVz3gZKpoD66H8sAEKfpLybF8WHSjmrrLagZsaKmVaQidv77h1uck9",
  "key28": "33Bd7vvKyibWe9SLWWUExaJ8V2KswZNP7Jz7cVXETpQfc4JavoUkQpgwhqP7AZoVE1bsQHdyQ211pf7C58GoWuMs",
  "key29": "3NMpavW9MdHi6GBhTFzcVsd3SsLscbXmWPnvTv5WLgz6GdpzNui4L8SyU7ZEziCrgM3AwW7QtyibJ6GW5E4seZdi",
  "key30": "4E5TcoLWv9YzfXFBF91Kv7YAKG3FfS7iHUdCG7WEmKm7Them5GLL8ThA7h5UtNNXEaQMAFG8x7VkXVphVkFCKzsT",
  "key31": "4cSjkpbbBDiu9r1vAA8Pq5YNfq2HPjW1QALnpP6ceUB4eZo3Ek8dGGoVoG1cpaRoj6DjcjEsot6jyv3HrYw9ACak",
  "key32": "4yrgejAPvfW6MzmbB9RBCPEfskajnQq6x5wHENiCtvkF6EHFvyGVButu1NWnPHbGSAZKeMmASYFRWU43XLvF7hJi",
  "key33": "5VdgyEZBSGESB3qLGVSiRVsHQ5iyhmqe4Hk3NRRdwbM2RosZjLQaRYMdGcuzCsqNXZFC5xTwDGA3rnLtJJLSq3t4"
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
