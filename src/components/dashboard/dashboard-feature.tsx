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
    "2YzMtKCoVrWwgtAVu31tb3DSy5ag6m8Xvf1CsTYwNZTcqCJeoP9iB5o6RFz4W7nshXtCPZ8aeHuU97WakmttgWm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDXYea5RNNhExKJExfP9cHrChqATR3GQEcK2CToQCYWZiHMjszgW49jzZZBxeHqSmYAGFVaatjcQUk2w4jK3xce",
  "key1": "5kZbGQPkDSNeZaXgRfm3nVAKcWCX53s3sZRwxLzNho18ZT4gMk1JvZFfmrxFbmp81JqnjgFFCABaYG5M9Bb7YPNa",
  "key2": "2ZWTpqKgRy9Vi8R9EchNvLN5sqSCnTaMG6jQtEXSaYU9wym2qKYy6SWDqoY15jXrVZBdD4cu6asp8xNpiP3CD2QR",
  "key3": "5jWDu9PbW4JrQUY31DC9vUczf2PEUQR4zno23C1Pd2aPViJmkRomqGm6jNsDGu7C7pmJmvsRxDawtBf5Wxw565dF",
  "key4": "m1P5tFz3PY4KcS5muYHUXhjDd4Vgcn8Mw2ppDNSPKVckks5e4J6iYWEFn1bPMXWCo3cstz8YynncNqqQydsQ57G",
  "key5": "4499FswsKfA8JFGAXUDSCCSPaTf19gwu7QboUUfNKmyd5PYJrn8F68kxYGJg8CcW4TFAGVDRcfgRkscgMoAKsfui",
  "key6": "3PmSWgoJRUrti9eKLrzeQ5M9ZKJdThhKPWWMssK5jqjrnhEeQ2A5eQEUkWoCvigBLvfrJbbZW98f5wuxym6a9foa",
  "key7": "5WwFH92NZMCbnaJqVcGwV3zLTc5c52Ui66PdPJYr54bjsmkrXe6dGvToP2cc2jykmb3qznn9ETYm223g7kb8sTZm",
  "key8": "4bnv6JJfuWto7ctUFWzWyG1UdiY8gdFCSx6PfAxa5d4t1VbDfxP3iRQHeWwEJ3K4UnSuBJThA46gQ6qhcf4Pu7eh",
  "key9": "4pEtNpkztnmizvBoKvMqB71L8jdp1yVYeQy2de1nf3nKDPHdQxdy13PfQEgGZyjs8w6SfRL11Qus1gXjEJfyQzHe",
  "key10": "2QH2adQgZaH2FS2sAqo9roU4zF1vnPa9NLkAP2MmnvCCuPHtp13G1LyJrhxBXi7FHQRm8q4bkfwwdWfVEeAMBLVg",
  "key11": "rzpu5gN6KHwYWsjZWTcT1bSvSsYWwreFn3Dco4L6yn1RJLZyxXFAyQTf8VyU9vrw21dTkxYc5BTphD1jCWHuJfU",
  "key12": "2szPj9QwLVtYSJvfuynz8pBkssMrpzf2EdMKUfsxzwqz8zjfYGMNpM7529pBYm7o16hgTyH7HW5oqoY2RR5tPfx6",
  "key13": "3iCR34ftddBBzVyaBgCfa6ArKmmXLyrGFsJhz4Edp2vb9LzP6oanasCPYxrei3EaR2zSuak9gy5nPCPBqMfpUEMH",
  "key14": "B6XdWgaXi1BdK2EqLzeztfVHV6EVsejqv2fWnQHQHJ8g5Q1WZfeZuQah53dnwGb2bktd2xwyf9SHjrAZUwXAein",
  "key15": "5R5vtXfJF1TB43MdMQP8PQP66gWv84sT8ygcrYKv7rN764mi8bvyChK9t3jCEqAUrfzroUr2VXaP8Jm5fPfEZN8d",
  "key16": "3Te2r2BiPKmzjd1dis4h4WJ7ZzHb64DvaQjKMFx4RSuL3akPKZdkibYRFsgXuTdA12287otvNH4814w29oH6qZpa",
  "key17": "4BLmkdZ1M4uzspyTLoCuxQ3HPsNDZ4aNtCnBGY9uUoH5EFhbDx7Mju2FYtbntL1m4kL1UYJoHCqZbqS7t9GeMpUy",
  "key18": "31VaJUuzGdz1eWW2tkeN5PUieeQ4eKBcfStV8CYEpgjefu5xxBbKioN5fGYQfEbEjY7yVpQRRaEFMKkz9MEfn7Er",
  "key19": "4SvM3cxgJLP4G1szSMiZECSpxbxrg1EX3NhtpEXJYVTjtL36cG4V8QFU5pua27kGbqKuc6yip971j5ErACS3rQTg",
  "key20": "3BScp3pP6nKNfQZLAZ8trWLirShTB1F95o2gbV7zvCMV8BG36Xi8ia5af3geAKLU9gGJ9HapNMmxEENp1Gd4dDUy",
  "key21": "5hWbQ2n5MG3QhMBaDQ1j6HZ8ivGP5hM4TvKgt9DbjrV8jyWBuBpBGtcvJ5iYgYaVUquxRuWtnfH3gWrGGA3EZJkt",
  "key22": "E2B29uPD659L32uDUtYYvCMGbZFSTFkMvtvX2KCkyBVCNK8Nsfopc2Dz9NBpCEaKu7PTE8uFhXgm986uavtroVz",
  "key23": "2VNvqA7uKbnEzeeNvRvqhLnjbR54wAU9i4m2TuJ6ENs17FVKngxKPgYHuARF2x7MihMGfccYnTpxkAiVfGciLNNj",
  "key24": "3eibKoe9L6nrWNsNHeChNTtiKwiFEzbtRmFseoi2vLNtH27e6NaNpPX3oYo9baLqbZwvxddDndk4JipR8tUgjAtX"
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
