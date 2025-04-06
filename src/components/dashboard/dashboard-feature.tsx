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
    "3K3WHqGrHZu4QVfKMWrk8vyt9iM2ExPneTxGN1L6AEwyfXTNpf5VCLeQMPMuVZRvdrT4jWUMSjkmJVqGMNbR48EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWW7JWyEEiNQ8tSqDcRCKRzGHd8z86ikPASa2J6884dWKwgcDNDKQmxgDJfVAFroGF4aR2af3bEFZ6F47zcbKno",
  "key1": "5Q984JutH6PfbP9g1chWAFE3THw93ZjEAW8z44tQkdUFHJvPSbvsCU1rMxfs2LGKEXpTTNj4CNtXoM9rnNwGSvkH",
  "key2": "31RtjopdW7DwvM3LuNHw6W8ZEuqsQeshegNArB7CctVg1EsuPE4jopVxLyENjoJWrnRRxfeDVzYy9172d5qmNatw",
  "key3": "64V7hC7cagFTU3mMTLG9Pi1Wv7ztBUzyGHxTkGKyNsEbsscAPXLAobcTfzJNtvvkJK2cB7GzRgAm9rC1hwqJG25e",
  "key4": "5psr8kx45XkZ5hB29DfCy63QcSUEmUxNLtCaJXZ3ddcbbs7LvvLPDx8ACpK3NUGc41GbxHA1Y7yZxCc2eEzw3bYb",
  "key5": "2smUioQzmugbSyJzu4aDzpG3dZZ8wqaD6JMZ7kCFN3QcerPneYZsHTV4ADttEHYPg5zqJi2B7D6XGiSmnhw3Mxty",
  "key6": "3x678x99NXSBPZb3Za2QveVQ3nFRHLSgUx3ZXXWL1uFjoC7sJzt5P56cmMM4tFnbgYzoTHgKib9TEji1icbmxQh4",
  "key7": "3q1JvQvXvy3Gu6NMKKCD73Hj2uFeDC77uNHzrH8HxhKanAihmgs1CYLzWX41R3rhgCfau1Sf5rF4HtFJWiG2gqRD",
  "key8": "oktWrkv5s7JMk5CBDPu3FKuuQji11rSP5NRYyVuWEHLopnvpCPFGoeTbjova688EZMNB1GJRJgruZq39BZUVpn7",
  "key9": "DccgrVozH6ywttq6ow3W6uXwm3HCvfx9MSyRmsYLfTN74oPgtoE2JdRDEfNzzxbjnfFosnXb5Cfr6hfSPRznCLL",
  "key10": "63WRYQBddVvkt9xsxMJJrjDvgBgKLEyfK7CHQd8KQDWGZRiFJQGGs8j1iTQmAf4H9znWWu6TMnSpyqcvL4MvTGi5",
  "key11": "43kMYU6BDDgdQKaYTHoMi26DPR63dReSCMHL1AtXndaH7ehEBVjtXQrUkWJh1Vc7fbjUZ3TEBQLHdK7N23TaVPMX",
  "key12": "5NXkDcFGKGXHDpnANC8gw1o5WkXgmLrTpQTb8AH2gac1UXtBtc79yhkfLcQU3atkkgD1a5JhHjU48Z2VcX57s4xJ",
  "key13": "jx4A9VUWnF9HEETsjcfpHrobeRk1kSFzzHBRcw197Dp6548B4PFajKHaAAAn2EqbsXom8hK6rzqiEnGxPxV8j4B",
  "key14": "xiFZLyXcNMmeAx5LZ4rhUoM5pHmVnfML1hoFuRyFhjWgvAWyU3EdCrjBEYc7QZpQu92edB3nabHYJhgwVrHmbCr",
  "key15": "3fats6fWuECZjodcCmGNJYPb1mKBQujuLs8HCq3dMFctNdUNN5Ume6zLEJAnykTbG65NN9omsjZ5WSPHg9DGL7h8",
  "key16": "2pMBX9A7fgN11LXwbGgyTS5DkFg7hbYcvfpXtAPcACQTQKWUhHjZKuJ5s5RYubZ1WDfZQbEGcc21yKyKwS1Jtk2R",
  "key17": "rjZ9xKTq3fLVSfzPn6xvHLpZH3vGsvvtwFfNAjva2xz4atwmGEmtdUARfT1qtQEMF4ZKYk7LwnwwBSWhhteeu7A",
  "key18": "5gY649bxFYP5w9XKvv3DVQLsBXHMy2bUZAnupYeTE9rezTnYpvLnHnYdk8ejwiri23Z4UKi2D6XM2yHcfmmgcYWm",
  "key19": "KLtdLmQwZqZ1c6n4SZCN1AR1VNMaDH4UjHWMVUwmm6mwD8zkTqSYbraQ95iNnn3NMMUiMJHYCJCHNnYkud9UWzo",
  "key20": "5DN1co5cvJj8cseSRGn7YzQ5L9WbyU8VQMyCcJK3GsMTrYVvGSGq3LWzAcBDnC4Yi4VE4bcqFoi39CfXaAYrbvuC",
  "key21": "3hsm5BqZ5vhJ88Uk8V6SHSQcSR9RqUFsK67FZR2dCFdzMcPvLP9C57wgFyq3L74br4jQibnEGPMR5oRiegLFrfr1",
  "key22": "625G8h7mp65pSWUVUiB5WuprfykM5bDiTKtjrTdoRitFtwyGue2MjrS2BzpuJx2AuH8FxuhSgECM2kKAGHhAYnd1",
  "key23": "56ZdJMKup2Dnt7yAqqCyrweiyBhSQ4jTLRJfukDJgqVmDtqNeu3mNYWwHvUyVRqaKaLVGtSuHTCc7gpRy6A4gmnd",
  "key24": "2wmDH94i1ENTNz4hZBxaNKdRMMZ2RiXwLUYEDuRcpHhwb9ysuPA6pSCHwmDacKtGUPoqTzEYmR6GzJQfnwGbE54v",
  "key25": "5kssoRV6UJS9heXy8Mo2v8WreouW3cukEVT2STt1iHiMcBJmzW3aw5zKcb4CBHZZwysRz2L9mBJi4cJ6MVKnptrw",
  "key26": "3ux6hTj1EWYZbekC37pBDuKeCv5NP71w6yxdoGy6ofZQhVCrCQaoocdBoWWWUd1BqMPiohZ5jFeK3Po8ijAx6mHq",
  "key27": "5NSfS393PMg4rJijE1cqwuxkd2hDP9t2S8Eqhc7fvAScUYqEjDG6ZjG1SQHmRjzi3SsbqtMnzGz2p7YgH9XiPnxA",
  "key28": "5BPn1JiWogvEnj9UQDheeHGn3rZe5LnPHW8gokjK7y2jZaXjQkuNWnh2VZ5AnStHzh1jpju4dJssJYu3Lxg2KicF"
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
