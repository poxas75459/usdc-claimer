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
    "2W4Wf2aWBiZYnUcS3rYWMfDXqFXVSsEnAukXVDLHsbUDAJacMcJZpUT8617R6fwwqjDT3fsz3ahJvBb1WST38uAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S187azdioPEA6FLXBgYF6qA2F57oEUSChyaWXQkZHrEwoaBVjmbXuowrmAddrWXQDRUmxJZyBP8bPfXgtVGZigN",
  "key1": "5N6xizLnYH4bd8U5qSDaXvGvEmCoz48chVqKJprrocnawCF8sbwe3KZmoXRw7k7yGjeLghcUTHEzZRR5tpwrW6yX",
  "key2": "3caUkZk4t8shnqcc2a2qJhKy49beGLjQ8SDSK8SG8jgHKB1m5iRFFNuGjKCFodJiS8tMc9vSCwMvTGyznB7FEpHB",
  "key3": "Gdxg7YDXm9EpWv81boSEebUdA2LKV4vdY9ofUuEVyRZ8esweE5K9VA1WpqJ8Vb8Xumv7zWRLtyU71gb9o2sdN5Q",
  "key4": "3ngiL78MXhwi6PuvqWJVYDHQFVUb4hiUe8aTGJrxweUEPmkDd8DP5nmxFjsBX6r4MEcujQThXvembT9PT96Rc9fK",
  "key5": "5vWfCWAy6aDCHAS9LFfp2viRHAWanQk55NmpaEDBiuiAZuZMB9kJrPgjAFjRzBKmHCvc7ipArS5UeaVjpTWxknKN",
  "key6": "2FpLmL6CStVDX3fM9a4BmDQhVYPVxpoJ5C31HHQ5WM1k4kT45QY59bjSnXdHiztSejQ2E3u6rVuZ3nS7uqGkZycN",
  "key7": "38kA5ULSvcBgmxQUGvVW8TmnU6dCehcQQ1KzD3aAGhkksv4TyDRkEnQPJLrmMpj7EZMQ2g3z62XtSqdxDWYELgbi",
  "key8": "3b2mjQCtXaDZjWKQ5FpNVSMoV6gj699ndTSUht53843CroEPaQC2YVJxbrp4acDeVdmbiLyP9U6ToFGeUFGtAkhL",
  "key9": "5MDKQBZYwsUY4ikBtjShgR4WFpsFAP9nvexDV6GTNsicFtVMQnvERVxKMAiZLknWZ6fCRBKtQH7jHpEL4AvMHmW2",
  "key10": "JCPRvGqKdT74XKuUShS43gx8NfTGeo8eCpo4xRGGTivSUxsmyK5c1XHB5K1uoqZfB2TzRGry16wPyWPpe1iCfuH",
  "key11": "5MudtCjtLwRurqMvK2kS3SFkZWmFgHTb88SfiDnA1M8zABC1E7iuxZf7QJ7woHEQvWvaiH2KAaqX7aitK1fLPUGN",
  "key12": "4BA7SsDiXdQWTPTDffDSteo7egzbfZwpk3qXDqSAumXyANGcsmh4MkhzMzjaQ5cdwWTEdKjj5nZmscgBvQV3kSV9",
  "key13": "3CoZsX9m1Q7eBe1MQLrmyUAjzvkCYZNgjd7J6azCHVbpHkoTvByexc1SH3C5KHWXxNxuHk3Y73JjSLFmkKZXd7kq",
  "key14": "2uLciJr9WTGt2frMsvND3pmYkNXTynmXCBiq9zd3BdKHogn2ZUCkoYUnmxpCkNParQMpLf6zs93Ei144zwGUn9iK",
  "key15": "4eNuTqM7D75Kj97JkockVJPjNMosyp3ukn98CDKupFupqEh3jmkpby7aCcnsQJqq15KTsyQLWYFh1F2QddudyGJt",
  "key16": "4SU4GvXm9AXm91KE1J4Vvc5jA7WZspsFM8njFLLWeDCwYQYM2kgjZ6F6bkG9gCdgkKaa3qjqs8bb6L9PoPX1jZMi",
  "key17": "2ybNo8WJggyJDTpZF1HWDM89C6KMHRttuEVyr9eEwqBoHsts9qycFN9nsG4CDi2vfw1EddZH4Th6nQk7gyRzRhXC",
  "key18": "2qbXnL41tx795QTF9gDZTZESfAJBjQLSw2b9nhtVF38d3h32yxyhCikduUWChRJ7xunbtXmZyhb1ZpkmEazf4X3f",
  "key19": "5ui1Z2LFx5yZGhR1ehDMeAQXKbrYijbHmMRZ1XRskS5ttH2WBVT4va4kgwY5EAG98xYWGqKotG4fQdVyPNbhayev",
  "key20": "41ZHHtdjK6XhbVVa9gYPXoc7GDgC144AYtHaeJyXo7o1Aw6JFnazbG5vz7ffbKUEsztWrGFAb5SytSWzNHoqF7ru",
  "key21": "2qiojnD5d6nr9BCME4zvpDA54firY1nuH1QM9ntwoRjwK54mAEJjSbmUamUVLQsfyZHmhLtCqFqtNpq2dDSa14L1",
  "key22": "2rUyEsYsMhYkrfe2beGxddap2xJZcw5FPpGGYxpBc5aF32JwVriYafLPxqssNoVWYgRKBBZWoDfezzAbrEqQpscT",
  "key23": "367FDUG2RgVPZS8kqx5bT5Rw5KSSEEeEu2azdkPgZjmZjHuuuRnft6Y3T7AqHtDnvXT8VtbXd7JKmdgQVr7b4WVQ",
  "key24": "3QbQNzRgWW62dF9c6LHjjog2bdwFEbWj7UqE5MWWciXVE41ZYi29tpp5ZgW73681TAzk7EVPeeJmabFn65WUWGx5",
  "key25": "3Dyh4VZwSBidh53F4q4xcygTpCUQNDJUwC1YcauGW6PK67mEbwLHn8PmZx2d2u4RKhqbHViHj6F7Eny8bmHyaMii",
  "key26": "2krhucfi2QxnHse2LtLmYh5MareBNooj2HpKxuNh7GCbstsXJjPRUCi84d1WEEBtgUHDT2KvzoGTMzxL48a76VFC"
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
