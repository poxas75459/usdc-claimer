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
    "3RWQbipa8qw7hBnfCwuEUbc4fwQfiJkjrmdLaMqUZmak7JSjz8skZy66bMSoEirTWiPGo1LnoaAJ5ummKPZZ3TPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjq1jqooJSGPeTfSHYsFm7dZ1du7KcpEfEQ9JM6QqMtt9EtH5PEB3yxSH4UdQeMdDPPHpDkiGJvQ5gmHc1KoH7n",
  "key1": "R5y8iEhoveTCfjCLxeRR4ZU2NPoocpo5M74TavLJCo9Av22VdyvDp9sgaQ4LJPpq3Qkw4eXTsaB5rpgXBDwPMFb",
  "key2": "2PSuh4RkCpK2J2psoiUsqPoYqQgncVFh6uMRHnFK7GmAVne93Pxzt4vUMHMpdCneeTFiwQoQvbm3oMQQLdyP466L",
  "key3": "3K3LuV855crA4ZhjUyi82nJV6Ma3SX5EhKSZsdbJSjU3R9h4wGyR13RHffLYtW4qFC4dZV97MpEB2rRWhbJp5URM",
  "key4": "5wE8JidCJjUgLLtV9fKjy3EDzPd1T2YGWDP57kkJey36uAmv4UDCLmApVMrqQ6cn5Rxmr3ktmZGmjr9cwes3GSsJ",
  "key5": "57MceBLsNZnNE3GoN7x5Bdn4bzYectjXDxAqSSU9RNAdYSpXpCTzT1XUZZFpiVmbkmMJq3wjSeQeiurbq7pubXrN",
  "key6": "3XyXR1HKyicJGwavU4s9ytFQ2p6si3Tp6mCSEfGWNKvoDHxYbXoxbvpDPGvX7zqv5JqpUQ1mKh5VQXCcw3EkaeZK",
  "key7": "4md9EiAzfCiZd8NHcXYX2stDYKRsaewKxKdUTNUCpQs1SpjFVXqdLCpfnvFmdJcLUwrZuKEvfLYp6rT239GLrxJt",
  "key8": "4hNaeewXHrpXXAoy5ocPCSS9uvqxPVrtmX8kgMvb1EymE4qXYcPNpgXsjcXjaZcZPyQAaSGY2T1fapXRCrtagXYj",
  "key9": "5AE6u1vCBpASJSRZZZWhXs4m88mcEc1oPceF2qLa3kFEzPrzi2sDdmbjs4ntcoE7TsjHAWEzXjBsxnZKQtLkppSa",
  "key10": "oX2A4yXJsYXgdP51UGo3b692N8Kgyg5NB7A8qRWLCUjKMQ4monxpawLCQcpKxWGGVWkLTY2BW7VrEMzPrYXAtEg",
  "key11": "4GndX5D2PHxTxpG4LF1m1kjLexewXVjwEyvTPsRJX7Aeuf26sm8v4juAsBVbeLmUH1Wt2mxF4F3warbMKpdcteSz",
  "key12": "UgGiYQQpoRR2PyqQMPK1nFc3oNdPjQp6nyAiuktwXGUggYybhLMNrgfDN91i7AtSTEstRyLcQ5QKbwoiHdaeDKh",
  "key13": "3tVGRZFz22pd5GEnpprsCdGyXgBFbwSki8tbXfgjatkDr4ZSw3FS64V6kYNfgHaS22ppja1FE8s2RWRwdW5audQv",
  "key14": "23fKHKCYUEGZLajgHdbFGJ1D1izmAxuL5rxbiKEXQXocsHbYh5TriTxPbbeekYC3NiyDxSnGhkjzhJU38eSKjbiJ",
  "key15": "4ZwUjCV7jdLYjvtYbpVoxxzfNsUXVqEkz5deLpJwZrnULsna6FW5uS7EZDAfpUzzKJT6WP7cHCd1u94uatz73AxK",
  "key16": "4XEtVpbPY1Wo1w6JxEubzCp49zQR46AAPkSafT6X4EUXwXRMf9LvFB6QAzKEFV8nnsQPBAA84qpSmLGYiJVhtqyp",
  "key17": "39rMUKno3rmb8wouoRNcUZxxu7sXwUedsb8HVmsZHXKb9LPN8PiKL2yFN4LCALSsbbRHxQeo4tPMTbLuRACkKVdg",
  "key18": "5hgMmqARB8vGWzeRnqsA9QixuAPowTKfBfmBZoYvAPE7TrvrUfBpAJiUwCWkbi51mk52hsCQGzQKoJs2eAEdMBg4",
  "key19": "47rRmZkrMXxY8HsageQXG5EAgQLfENgzFcwfKuDvUy5Fjs1p3uWARyNSB3oFzEnY4Hg5h4aVTsEeCckDGk1HQoKK",
  "key20": "3HNU5FrXG2KULtiocNpTxijfC7exkxh5MBQk8M8aQETihNfow8JDaMLARt12j4mjYY1RXnyaCDZobdbcn14cAbKL",
  "key21": "2S5yZKovA71puQnddyH3YU3FMgrmruC8wzMbNjYmi8y12oAV7W3pYRdZPB4wRUX5DACaa4L1nU5qhx6mGkLWo7vQ",
  "key22": "5RdYWe8LrAY2UjmBXWbGcSP9rwzdGAPhUFUp2sKrj6jdodiBuJCoYUVHnH8jSEuUfwPthHFXtXH62aTCopNkBzAo",
  "key23": "3pt8RPPBDWdyog2dBEnXTN3ihuvpFQ25qtrWYL4u18q4VFcE9C435widZaeSBbHnuj6kDxJQ84yTrnjtziHnSDTe",
  "key24": "nH8aaPBTpMbdeuNeSomBJhEESJHQirkSASfwWbgNWRqAxS6fAa95MPDxibXFsjR3HAc3M4x8P3RUBm9urzyAPCc",
  "key25": "3BNKpFvM1NRhM6igDGQFJbdprRk4JrmuDdc78ZF3zDG2hGBs9YKDxRkcH11aLFuKv8V2JcNNotg99bz9Zk7GDaQp",
  "key26": "3EStb7HvBHuqE9e2FwLj3gK5Fv1FVJB6yPLq3cjqDZxvMzWgzhfQoqou4TWiRH7MAc9vJwvEjU5MoAKboHTJuz4h",
  "key27": "3r2ogte71iWqwCfxkCDPsGCVq6iawVHyxKSJ7Wyhdt6GzZcAgRuxASFjVtp2WKA1ypiwcA7BRc5qwRRf1EEz8uUH",
  "key28": "5orPU6DN3WMJoTxr3syxfWpQQdPgwYZqTsNx7PEAk4F3T5dpijLepKjCWtfkiu9guNKhu5YnbKC8YF56i9Pjyi23",
  "key29": "2HQo1McEVAoqXEX7zhhYdQvKrqcyhVTXxHfAGnWLio8E8oZvWh8mhxpxwYj4zcq7VMoyzJcCPomakBjhRNjuagsg",
  "key30": "4xfQprVd2Qc3TYjRcBWgbjv8jtdJTWQvKF7dUXnbdnu8hdjF5arfVxqKvPThC14wQ85m3GaJFbaRv6LqabGGAjXP",
  "key31": "5LzZgs2odbZ2aqZkDECds4z85hsNqgZ12qrpLNNZ1mqWQ1NhYoESfPu7EACfo5bqKvBqfeMdCVpJhxDuNpL4P49D",
  "key32": "5zH2VwbtjfpwTn16ZPQGGRN6uJ3DkihUDVggwHKaH7Zfnr4DN2R8vNWiffWaHpYFhPzq31m1Cm8K23VHQ8r3ewkv",
  "key33": "2zubv8hJFogJg7d2n8iPk8isoS3JkeUr919yth4abwf8dkDaa9h83kVkzoSa8HEHLcykWUopuRWSiYd81fjzCSsX",
  "key34": "35ajfk15uQB8qqiGDBvKX9cbYNg8gVTPD8TZJEJ6bKDizhPhePqjpjzkvALf8SuvYtocDfUaQNSxss6fUefexraj",
  "key35": "3GfUgjRT9gvVCn2kuwgggbgxDQj9A7Z1j2AigVo7mP8JpmfRKFm5eQU6qsyp2No9UW9wwF7rJCqXyLsRPUbFPubA",
  "key36": "585qyL3t83zE6aZGXqwN61CzSRbHCzXZAfS24bTpfDz4QTAjdpE373UbZxdDpqEyc7Zq2YumZkyNfAFCBdx32avB",
  "key37": "jteSRhEXx7BGZQjAVtEVoXCfEFXpsvGayJ987wXmMs3uG8UdVUC1zoEVTmyMbENNWCm7RLSif7CnGquxMaP4Env",
  "key38": "3VfqRG7xCuDyCfpWS6iBCHKsomSUktVyLBYzYUH3vqy1pMfcUHqHsgyVNsyB47fS2NX6X4imzLrLqcheJ6JAAJEG",
  "key39": "2Xr7E71Np8tz8MB16oD2UkyMPA8nqBseKjrS5bqyEKHNA13RJQZjvx3BcgAKNYhCDdVoPdrywtH6ctiEFcCDMsXD",
  "key40": "2HRyQMWTavb9Xtw6paZAw41QbQZq1rQdcT25W6Yzr5dk67x37vAGTWjksyNTfTiHqLV68ZFR158ZC28x1AjUFBAC",
  "key41": "UrPM2CE2EJDUkDaNkjKEE7HzWuG1SvWfBnJNa3NaQVgDo8F8bn2Ht1NyRQX689dkWx4K26tg6geYx6FPuAHiamP",
  "key42": "48v99TAYJJ17t1bF2PKLdrh6euwJnSnycnirJ6cWS6QWDA9TKMqoBDhfEg4VHpNjkgL1Am1xsbuJkZ9LKWr5ta88",
  "key43": "bWRzwi81zuv9XueZGjBDkPb5jgYZuAxf2HgMFKh155zA7W36JtkXdjHF1ZmhoesypDBdzJegnkXuMrFpbqHwPba"
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
