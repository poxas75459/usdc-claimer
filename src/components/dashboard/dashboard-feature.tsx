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
    "3tJxqrmnX4cL8urScAyDpizaoQNYCyBZj1iVeng59a8jpGxgj8asFrfKMsZigKDZj6jkPhGh4gr9HSrEUX7hSzxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdds5gJnCNQ2u1phQrmPPcdqhajFLZtCc49ZNQ4egNnFTVyLMx7jNBCkoFM9CJEnpWLryLxYEtCKsvnEgAPbGPw",
  "key1": "jvo9QWbyE3ss2PtqZXLgfQZNQSR8ayw49FABuSivcdFbiwbmk4sADXnVkbHnEJSwUaAiA4EvSXqGKkKK9ghswUx",
  "key2": "4acbTSmeFjcZBbRMWzsqiv3gNY3ZcP8VXFh4dhHxh8gAU1kyqERRViHb8AtKKjRMyvCfvW6DvSg8A5brDBgMixQn",
  "key3": "4KeDkuaxZb3aHxw9yrdyTVj1PurBTgTavazLQjWPRNSuaTEKiU4S9v8TgcygFQQxwYuyGW4U3J84Gd3sPrMRMpdW",
  "key4": "64LHFVVX3gXzrUuNqWmyQbBqiqW5Qpk9JLUgkhVeEQVrmuunahvjNoNCoxMzmSoDMHpZzEJ7MymCHfaM1PZAnJcM",
  "key5": "2E2MdBF9vvAMDAq4X2XtdbuhMNXARAw4YKNkZJyJrYiin8ZFYJepPxEgeVmvEFwgJ2QK7VoqUWazKAti4Z3M1CY1",
  "key6": "3qvHqnp46qoLr3XT2zAZVDECMju7WVSZds17sWL2rnkpCi2wxQhccRqKLVvHDkEuTKHyL1da2hVCa5zgGtkUaQDu",
  "key7": "3q1S29K5TEmz24R2YaA8nCUWdcKCyXTXYm34KQdCGzwcDF7t4NVRZerFqrouh2cCboiof7xjct8TzFLxRxmLucLs",
  "key8": "5AsreHnr6ASxi4UXB66nPi5wm5UCj8VWr8zFzkYf1YqYKEBA3h1xwJcL6i1vyzrt8qRwSpQnkifHWXqLXTDvEE1P",
  "key9": "5KniXJhCv666phcJRBqXH3nsQdyHXtUPcimEkfWYCQs3kfPNJsqE2rGm78F7KPWA2PRNr9hGzZ8DPGB3e51dqQeC",
  "key10": "3EN9guufL5kMC85V9RvEbYLT4SYUUiFaHWGbDvj8GkCc8VRkEVQ2fDVovWkt8BmnTcjv5oU8YP5YEaMYHU7yRFmJ",
  "key11": "5rqDYrgTUCyW2SvJcVBGPPL4fMvQ7tQBSQcXmnCSLQcSJxQym5PcfFBvjXvS1LZdzazZeWYV8XMQC5tQ535vGxvn",
  "key12": "2MLXPecbRmRAsuE9w3dFz19XNN8YicTdJK32pSRHF3RX5rB8PgwpRiNP8QT3dqV6SFHqNn4Y3eLMtQsYSM5dfcZw",
  "key13": "rsmDqsr6YsbEvxfJH64FqkSJfcHxRw5Ledc7FGFyQaeKRVHHGzNfYStYqrJ4mbuXg2gM1V6nChPomiEQ9WVjTqT",
  "key14": "5FHXDJVfee7EJQ9ZEXYp7GN6SCNirjNfjSJXK9SXoe4BLfu3hdQGnCt2sSNzbCU6Qc5z58maHcZjZFEgTb21Jkhx",
  "key15": "3piHj5nPv1tsgt3EGZc5zEDVqjRJqaKQodzbs121xVhCRXsNy7Kcf679cQZTBAbWyVQd7J6HHjHohKW879FRtuKf",
  "key16": "391QYgNTyiBDVoLHdMgjtH6NzPFrs8LgPCLsuWfPvki7oMpUh4wprpZRustjyvc9LaMSszsE2DdSy9rxsvm8mnjY",
  "key17": "5fGM5YtxqpQCCWbi4rukFXTwQEsbP8jiySqdVPdNngvyMHTALUdCNvtzVEBggJtNhTWKtctkKX1r19SqPxMeyuNX",
  "key18": "45MCXEXdD4aCQPa65Zyzvymd2xAtwGaFovu514ZwasQzjEBskEsU2wtF5DNyQWyYnmeaRAwHGePaNtUG3hou29MR",
  "key19": "xgQNX8eFMLpuoxT43SDXc4Teuz6Q73pTrRjr5fRZbsoUGXTzC3x1mxP8WGsuG8RFNTAFzSbp1YtYyXjiqpZBtYf",
  "key20": "tVsGeJWKaadB5RVdK8tC6EFFCaCR8FatiDjBjye1hqPemufLyrYTswJZMTdZ2CdikvEGpyTHdm47wLkHN8e9mQV",
  "key21": "2tWwsxvwfmepz45H3HQaKqaK7GPY6ZsSEDy3bGbB8ypWsyFdMGXo1KX6ykpnuDkc5ck5Rt9qyUCiPGxcDEEXJ2Nr",
  "key22": "U5w5SZkor9iwppus5BFcQZ7cjk7jqexC6WMvVuThAWauc2qQxWPqhxCtdxZxp25YxkEdHEMpAgh9H8ofvtvs1xk",
  "key23": "gCX3zMt2ZaRxVEhnxXsxxKy4eYN5pK1dCpJYDsvYB194mB7LvbJWdtC4wasTzMmtxjZcbnC9BXzk9zdWXFijY4S",
  "key24": "4XHqfXucU2Fo8uJxYc7acqSzdnDhVbpbqpPkwon4GwXUcH2ibQGSaQW6jfZhHaYovaf9VFgvzf1oqA6hFrAZLSSh",
  "key25": "5aVH9fYN3ARD9Pt4VqDRnjoqTAQKmZ4vKzxqvx1Gngt8mSGm6cfBmHUnpfn7RR6sx8t9h1eWamhEpmTHKmAod9gR",
  "key26": "44vErvckXQ9WWzJ272UKTJ68wjZUdhkxB7Ud3P7bkPEXcXgAV79e2ED6wwDRD9kyrhwBSgfkw82egeCE58htSnGg",
  "key27": "5APcwWD7Vv7YNDcRL92Ltmc6Zicm8hgGEZsy9NxQ3mN3g7vJ1A8XMpstGWxRwTEUciffgF5r4NHHEwhgV77eNAMB",
  "key28": "3JEdSQ5MvA6BWz941ZFygnc3JkDiNjc7hsU5NitxJCcaxfYAcVZajaYGpkP17XPRpSfSRiX1TwNqz7VtrfRTm8rA",
  "key29": "3kShVoUKKKaNxgkughk9wA8H9Q1iX5PU4yd13kvBfdLffDZYAi5kA4SqRyZEK5zAxpcfMGoVxSEDR4nwFpG6DVJS",
  "key30": "2i6S916cuQS31tXo8FhMVxvHzhQPGcb1BiTvvhF7LRPdy3ZjwpaSADGThPVCrSWKYFhxiFQ9FRMJP2tWw5hfy12V",
  "key31": "q1XnvaBSypWWBL6qhFbCjCQuxuk5Dyis6QvUJoyBNBc4kuDaTVJrFbwU6kRKTdKDyyuxdJz4iqKZyhEXF3j5UiY",
  "key32": "3buxX3iF3HaXVeinSmRpbLApL57Vk56ahKECWwUWqf2aCnVhoXY5zzo38rFnARWVdZUeRaPxPfVgm63ezBmEsnWQ",
  "key33": "49vgCc8MK4U3pNMFbq3LU25UvTMVXyKEXy5fKFv44tiGB4iJFvf4D9Z5KkndccwajBMSEwxV4mmNs3kR95dQs4Be",
  "key34": "2NoAhjH86Gz6vst9jr7kTXYBH6TrvVwzTLmF2ghEnKDovZiUTVVooeMAARsKVXnH85D8eKFSXLgRkBPgjPnaVkxC",
  "key35": "3BPnypCoFd1Ccp2ci3RMthSq6QVgSm7u5bEwNVHeSfPzvZP424zKjAv24Sx5eezpTHez3DEr4MugZ9KnqFzRCG9g",
  "key36": "2kvep2F6PMx6FhdwhWcymucmHMDgwfmLoX3aWGY9UNzE6sQdnGF5RD9fVbuaQ2RpVbc3tZKWWwwFWFEVzKPF4T2Q",
  "key37": "KGXnY7EJ2cdme1x1tHrdWVSsECkxDPaVS8AjpPnt8iG6nGkWRfNcYn6Fhm4A37DPRi6otaB4r4cgX2hpLtrogoC",
  "key38": "3QvoFV6xQQZuDXq7ZGCsgN3a5RUcMLdeBW84mqff55ZBjSMnvP3SqAJ9UmbZ3m3mDtGoeBx6b3znoWhteLx6cnUm",
  "key39": "2H5MwABSpMmc9bUtGpfqPvxKHBcwtMYP6rrW7BrUvb1zuWMGvHprVb6LuqNnUd1Uncnx16wTHWXiz4aaKefBhte7",
  "key40": "4dvvwMyVgQJfHVtd1NzcGAtikY5kZYqpUZLKawhiVoKW5A9P6izkqs7gZQiARqUMAe2ozkzK8iyyX4dW9yC4NekT",
  "key41": "RGhuXJgRYZMgWdYs9XFoUftQ5qkG59Hn4qB3HbET1mdsN5DLomaMKthxW5wTV2fJ6PE95fHfgSjgEiAEaJRgYoh"
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
