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
    "2VCnqUeMBWkga4ATtUttcPQTv33krgtMRVZHMX7EmXPKmtFn3RqtzUjzn4ABk7dRRD76ZVg93gugN2V197sGDYph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JV3Ls3nK94uY77DvsffiPQX2uivmXE7P4yFXCHfhQLzgagX37wdGqAt2V8TpwAZ7EvcvAWTLxBT3b9vgD45zoG",
  "key1": "3f53p6LkDs4LZx53pQnrzaSXxcm2Unaa85i6CNb2MCd1LxapKu99YzNc8r2VFBesaQ46yCCeP63QEpiMporoiUZB",
  "key2": "2DvXdNgdYM4K1Hpv3RFpdxzjTTJg8UH8KG4yWF6BAU4CzrZ1o1BQjmHddfmgjeoRCrJWkXpgVktxTenzk4w1yAxn",
  "key3": "4cUUwcSEuwMxVicsgv7DNxLhwfD5vNx8sJtrSN8UD1RdXnQvsSS1gATEThAUrfcNxjCcg5T47LSxPRe93yriPuP1",
  "key4": "5FLJpMyKXTFRvpfCXRQGiQVz2hmHeFLdSnR7JENVtyFnn1Z56zWR8qnFaKMBFxDiXN9UDzuemxyLUn3cGJz5UgxW",
  "key5": "3LW152XAgL4ysnSLvAxs6c5k5mGQ56uMuwEZHnK5zVWgXQFD5aCQAMVDkTzewDpnW3ScR9MqQeakbtGTUVTww4Bm",
  "key6": "ihgtCkWTbTyZfXC9WPx7C6ZE1Zo8tiAZ466VGbUKgbE1pKWfDviUTABjCXL8Vw32BmwjU2uYSmV26fc3PrZk1tn",
  "key7": "5KvoRZiiaShbJMFiAaLKmJFDeaqbG9FYqsz5QQ2vtjgn7QHeUVgJPWgoGhXxYhbQwg5PwimAgiCgiVraDwHviHSv",
  "key8": "5fd2KFqcN2ZEfzB2TsZUdoB9fhQ1ahSTxZQJaHhsV1Mm7E6uQXeuXokFms3yhsSGoqHrE2BkveuATxYorn8wjeXq",
  "key9": "DxGXJhjJHQDYawmmowM3i4xoqkoNDiJVenJjtwh8taRWgxBYK8MVz171SmrkBhNMyjxRZbJc63GkXTVQdWPGQr5",
  "key10": "5UtWAyzwxJYPjxuBkvZ31kok5GaWDBFDbWxR1ieV82xAGPhpsnA54RBFew5wN3TkjZWB6orttBhoFrReLjcToiXe",
  "key11": "Yw6U5RmiA9HdTD5GwFEUXeG8HgT29nZKoefzMNJZTmsTjFeEt16aAV8gpZWUCPxS4B1VTuTadj9cCh85SduSC2g",
  "key12": "5B4DTcuQFNYgrms8V7dStCLfJjcdXYFCZ6RvXxBQCXAPPjUmw51eS4cyKhHEny5EKYA5P69wyebXhszxvLzV56kc",
  "key13": "331QKinDTjmEewx6cxEDYeb1HBtj1xYwQriRdLL1x2RfVvh7wf8wvehCXzoWV8ZKuUkiCPmUo3ERJUGccBt81aaK",
  "key14": "vGumZcAshXutr4iig1XWmbBQwyx6BsLQWU2s4vT1LWK5ycqPVWGEQG5CoCpEgvXZHEBjQFJhWGYfoDVYriWBonP",
  "key15": "npx71pDAMnvmhx62wLCT9LQAju5hUxgiZxEnRjv87XGyYgBFsYEch8DAELQMCUaucBxKGKqpgqurCepm2oeodTC",
  "key16": "jQZcCWSJF4VM9bpKBRaHxkgPVNEgV5fUkzCKdtH71u3ZNkocDDytm5HC97zmB5poorZiyt4Gji1r2EzV3w2Fngb",
  "key17": "5TgipyfwnyRpgXzgyteJfzsLwvNnWoi94YPBCcr3E3YuJS3hfi8q9mxcKVvYpSEdtBWwjXEfyarfhR8C2E8VEEHX",
  "key18": "4AeGGcw5mjiRmz13FVSa6YbSGGc1dSe1pAxyEXTnPmCfSUKehLi8SVoneDk9dBLmhDZxJGaQDVWJDx27cixV4Ebs",
  "key19": "4K2joadXoPViQ7aasjgxQKthrJLgrKo8fJ8hSFbcsfMXMPQFJk53LJfXK7JLx97N5DrAcjxdu5yWFkd5vEokRiLN",
  "key20": "Y5VqqzQogvQjwsznEfKYc7MUT2roNFaxAPtWNub8cjfTN4c8mkYrJNEEpAV5vfcQzfjgseQVsgS94SzFaDEo4F3",
  "key21": "44ASSoLYfwL6YnzkzCNifJBKHwfeN9dL9dXtjeDhKKQidVRA5gApu5ERJBkw6xxYxD8gTw63U9UtZSZCLPURpY4V",
  "key22": "5KWjC4uX9yvGpppr98euXJubS7Q2eEis2kfVBfWniy3cqvX2WWnJnzTvAsxcUDtbFNjsYNAsMYz3ZkAGeiBH2x24",
  "key23": "LHxAp89hYBUTP6yWGs4MnfjK8MW3kzAssdX6nvuAvi3rtT5tx8N7CZF9WyS1Y6HVL8cvBumJBHB3i2Es5XanB46",
  "key24": "TMpEmTmnCqKRQuzDvS7zd9RjXr2X2uM9nnLrEusmPk7sJmZvJbEbHVrXyyGWURW32eFCxFhrpQd68WM9RT8cbRE",
  "key25": "2yhhiGB5hEp8Pd2uRx9XBqgyT7bcFmoDEyaCuFTxBNJBRJ3KeGLossun5zWLWc6SyUzFFpz381wAMqbCd6LtZWoW",
  "key26": "4JB4hbkaqTpFX7HSneLw8CbbteZ6RLufV8SfxYsuWsh1ATjV3W2qpBYzPMZegWdsUpyTeVdqQAUVtrZpSTmj34VU",
  "key27": "2j3Ly8zoZo1UCe9uraSFtSTJ4gGtc1AaVgRHvkYohfb1DCwYBqZEjbnwp4RERJ72Py1F3Zky11ubna7XR5GiUX6M",
  "key28": "3Jzu2vHQP6AJxkouEz6iBw33fy2ZY5hvGPm6wYGV3FMZGDJ6CYTuoNNSH9LFFNYNxA3ZcQCi7oQUhWPMmUeBezfB",
  "key29": "4CGE6FrXBUA4f2vbX2uFjxkL3Z8i5rWAeemJUoQKGyxaZPYFVTGj9daQhsAMfWfxPvjPq6up6SCdboTtwKMqi5Jq",
  "key30": "5nSyhu6ZVQCZc4aLxSZs459qpoiiuN9qi3jEv3kz7FWzf1VJFwsLvDjqHyi61HLNcdMR6znBxVDygapGNgGgCmgp",
  "key31": "8tC9rLQyHu3HjY9arEN2gf6jDGp6U5QDP4AneYRRPDRKpjp2uUnTMRj8tUJU9zbcJNVoHukJ4H289xThGBYxuNp",
  "key32": "5Xn1Fob4cvsuDNbtqf7TQ1Urimtn57JMaBwyFpum6VUews6WC9R8bzWVX14smB8APj98HQofBU3ksbgmFk1sYtd2",
  "key33": "2YcDbcyYj8eTSMM5dzUGgstC7Jnoo6QZQMBfsZRkQx1qhrrdmKoXAyYNLapzc8BskRB28gFVDK9WtQmtrMs3VHJE",
  "key34": "21UurMXRNfEq58G2w3gWmmEtHchD2Z4fUzYxWEfhHc8BPSMGkEcmCSfzrsjCnHLbtzaq2fcTCpC28nfVmA6fKw3P",
  "key35": "5psUxDKohUSftA2DaB3ewfSHFuBoLSfb9igHhatc9BreaAKwA8veki4R6NVLSnhWAcRGyi3PRofph1qd8zcWKjmy",
  "key36": "3WhWoPBENYcnAXgyc7LY21XvwouxVgLq6d2ffR7qGvUY3GBE1iREhqxBDPm8BTUVUy9kJTuFGqDKEgjS61kLw1oJ",
  "key37": "5nq2GgXJJuz2R769g5UHAQBTftcfHt77pedMbh6hVkZTeGF3xCAriKC5PRXPVS9jXjRf6aqjYEPzJ4Cwr7iyCAJF",
  "key38": "2MCijHr7uHDVcWbB3sxVyGw8iLdXkhpyUJuoswJvMWLZ3jqZDjDcFqvD55U4if3D34PocuhDc9eSKkX5bJguEeWx",
  "key39": "4qAbJbFuQh8v89JwMzBLgZTJYXAyiEWV9H37AgwQccH8jXQWwtaRyB1EZMQ2TzDtLj9EEG56KEiM8v5RuLBAPHCq",
  "key40": "562XEJmmLH2gq2hcBB6AWNBeCed6YWF1PVDxKBYBZvTZK9JQazkXwQLEUmL4yf7K4N2RG7UjN2423KLFEUStT88i"
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
