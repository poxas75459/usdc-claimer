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
    "3c2Hg9X2EHvMKCMj7wnouQrtzyELfWg4bZ7LpSJf9KYwLg1XNQXAF94nsdAf6E4oyh6wp6qGSxtjRwFUSCT7bRLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1GKVsDxM215575QDWg2FJ99w4bhqwTuLcbP3BosDbJq1pcuNJ6qHfbMCV3e7esA1Cx9XsNHx3ae5x4M7EtoKwN",
  "key1": "5cGdDdBjFz6BdzeVJcrj3og8x7LZzRm3irLwCAQ2eFzytKAV2scMV4qM8Hiey6PZMKePPF4exqmprxStUWgxpZR5",
  "key2": "2sJBFXXW2QS9s1Toe5HQDk2np2avV27kkpxEZixcRbLrtzKfAfJrtk1LA5k822cdQuUKBF8ehaYP5RzsoAMbm45j",
  "key3": "56A1tCcMbodgHdCy7g7uSzzLeshMQB8iDJKCENHSghtChzrDskXa1tP85ySPaGWorBXYRmKzZem7F3Tf3RY1GEro",
  "key4": "5t6FYDMtPi8h7jKBTqDYYjmvEfajiFaCxW7oZqxH8VBuE8hEChUVirt9EXmuKgXk2kaBc5A4a5tdmzw4ZfAZX6JN",
  "key5": "3JgRqzket7tQc9YTf8hjg7VJksw64hfiAavWzetetoS3ZWpq639G6Y54GAvo5d3h2yajsg6jkmgfFnXnRH35bDVa",
  "key6": "3zbq6jchkKwJbBPYmxj9SwouM9FQZsCe51ENACQeAu64ZrEN4MH9NXq89qz3cUDKgnjTUNMKkkSsxpse3N6bS5rb",
  "key7": "yQZA1mdb3erH2pEVbesvQ8cuR2HMST1kDv4ntBSdN2Xc7brXtvzpNUmA57SWTPpiawQtQPNBHxffRD3L6kFt67w",
  "key8": "55o75r3nU6bdL2tkCzMhxmXU9KMijXT5DVfNitVnhWqLaGT6ExWUvY82oh1Zh8M5qJ5ZGY96cfvqFAAHaNDRtMpw",
  "key9": "fzDfDeSpNYtUTYYYs1nTm1TNEeeK4KJKbM9bqzoLwhD24eH7dxRo7BDffxCrt2wwqbVtD3y8xu9DpX9Yd9SXUbf",
  "key10": "43Fdca7BtckoVNxc2gfDFyHmeTvd52HuqaVqbRUGK9JujaDH8AaH1nH9GxMzHGUDcKjNW9BdsuGEgmxTfSetKyEG",
  "key11": "d84hRtnKRCGnN6XH5eSKFkEJdzkAfXKZbWGcV3oBT3UwVMuPgeM9owTSXtxCtHWhHRpau3odX75hxNHmrQ6LU4n",
  "key12": "3sBtjQW4Gn4y4qhks9ttdR2KuCMUYtyTF39MtVfCfUheRa82FXZpn2CG3uCaj79pgaSEt8bGEgMryVHLHXCxyCwQ",
  "key13": "67CmVaBmMC9xz6egsjqUBHiTdWqaW8JHfrYV59CeTFHDFGroiJ1ytiY5pQi7ACDHvZ8WDbVWs8Vm5xUi6TU5WoHo",
  "key14": "gUS4aLgHjwn2NAjz8DW5JFBSoydnRci6af347obC5Qi1cuSywJLHK9ALSroJQSB1YdarwUwLj6ARhbMgKif2LkB",
  "key15": "5BiSf5fTCHCnw25mFMDT8c1kYN7FATEBScDQgfN3xPxxvsf9Fbw8rkjR35Yq5BWgtWXvJ2VB2abtAJDqnPf8BM4B",
  "key16": "2i9yV4yv72u4xmsh1i86Dp6X6X9K7v7XpSt4YEsc1962nBuF4t8G8zRS5TR8kqDVUWLpAYnmoBcwyybWvNTJRsTN",
  "key17": "u81TBKsL2wA7L7i4E34F6tKooRmH6F8D1BTTMRrH8FDuhkotRD8aYwGH4Q7PBVUzfc2tr37nksRST4WH6QqAEgr",
  "key18": "5xsesY9akaY9NPZPxgGLUUwG1KB6iiHp8oZq5BQXKLtim39WbAPUMB7T9kMRGYZZBWyqCG2VJvJrr7HS326xo3Dc",
  "key19": "59gcbufx3oZF3Y4dpYm7MrCt38nvNg9KTBWjC65VKfPyEBbSSHQ75i2ndCtrqo8iKApAs1eFdv59zdPQxWenWJwE",
  "key20": "5Ntwsoz59NFUKYKGaQsJKzLH3fRxviAHSZRtUif9ZcCQeaNSDNRm24EKec3Dkg1XAnZgkKjMvyhPoyhj9qLb22qM",
  "key21": "46SsimM7kzHCWni5AfatUm8VavNRmmwdza6eASS4ULarvFpjaucchaTfFedQWqv46SuFaKntNxZ9gtCzp83Vpjga",
  "key22": "ufaj6pQYZg8o8K2c797foVavzwfp8DZ2EJFzTfrd71pgvZeZriec1tyTZaTMtG1mah6GW12g5c2BetszxoJu1nJ",
  "key23": "2WhnL7C7QRwxahw6JKD6RmCf1wR1nfZhxWrh3wmoRHAMT17C4h4ZCmoTMJVoDoi3b2y5D9wNwUdQ7gSo4YLxjCxN",
  "key24": "fciCGiWcRamghKJTKaXg84KM52qCC3C1hqoicofzbmnrUKadGHer3xRn9S1QKT3kpqLfrsVtduL82gMehwHPBS4",
  "key25": "3SNf7VLS9B8ayvySquZPQFERARCbQyLMW7CtaPCNaUz7iXpGcgFQ6JZycneWT81RzozTssjJa7GN5LQ3osRctcMT",
  "key26": "52iYNi2pqyS7G3wzB1ivdU96USnkUyVv3wKp5hUSJCVg8QuDMaeoaNjgcJBKMpw5DRNfYaYEToRN1NDL9CF74L9Q",
  "key27": "NWLK8uPRVQacKkzABd7jdmbCo4LSPDp3Hg2iam4i372GoBZtn3NwQWzFaG1zZyWqE6mgfA6tyeZkWeEGr17mgJA",
  "key28": "61jjum8Lu88qxM3Metqhptgi7M6Nb3qCS2ZsJ8EHAqYuHKbSskZfNNJ2eufLzcioyLYLmo8fFxULFmeJ3zgpHeLm",
  "key29": "3skRCJJTFRmhViSoqCrSPCEEZCYS8ArQh6wwgDUduZTWqcH8tRNe4oimLBziqVaLcFP3XnG35Q8Gq8DHaKg1gtYa",
  "key30": "2G9GvduxuE8LkWWWfezjEjEoraM2ECSjXYckrLfgVwR8D72PCWhBHviDjAJRQaqVujsiKebeUEnvgAGm6jxCoXPW",
  "key31": "23XeVRSg675xivT6w3aCgNCjR2joR9srTHZAh8BHr3P7vjjgNBZYsN8VCm5ZAoxx82eaxiveKAnrMNw7eB1TYgxC",
  "key32": "37w5SV1jgDVTVECa9TXwFqQa7hYsCiBrhEz8eUi7wpNoanXaqfWWREaGJ5LRbJgEwfmW2mE97b5f8S2JgCxeQTLx",
  "key33": "2gqi7f9CRReFPhfx4TDcWtSxTZTT98NvtWvtg2Nj3iGy2H4jsjNSJDowLWVhktV91M9zhusK32Fs52AaRYV7aAip",
  "key34": "4XTx5X7T6S1ycNaGH5Y5nUmtehdCYhyJBVvQ5PbfEsPD3AMxNSnrscH8PdK8edie2YRftx7BGqb1aBXjd1VBi8G4",
  "key35": "5cBCpvQZ31DHTsbRaEAUrZzmFZnii5fhSkdXr3SNGo4Yn87NtQRgWDirTFC9sZMUS2fN8xCn72VPRDXrpTWZ6ovM",
  "key36": "3WRKMWFyPhZDcPqo3xb6Ymy9ZeJuy695PgMxtdHtYgvhzm5gHFdpUPeztvATyxgc6WBw5c3XfedU7T1gA6bpU1zt",
  "key37": "5Ug8nSX9z9JWw8N9PC3rzB1q3T4x7Zxgwfpxxd3AAYpx35AKtb67RhiY8KGfmwbGhKwGe7dN8QFEQXXVRHNX5v8Z",
  "key38": "WsJeeYwFpDwwQ2b1PpZazGp65zjPoDDhG2jgDjyqZjYHDQCByxGKdqVRTokrUfktk3o9Cm5B8WByRv4FBZBs32L",
  "key39": "Yoh3wCv2fVvdrFifDscHyAL3UtPwLKq8yx14A9yboNxCiKf1ZRknAu692Zp88L5EmKa1Pw9JpESedWunyzR3NMb",
  "key40": "5bhBSMRtBvE4e3wtA3nCPvYFdJbc8hkoQN4LnaY36aj6iQcd7EgLQS98huY4xAsHozarC4WPJozn8B9h6Vcg4svw"
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
