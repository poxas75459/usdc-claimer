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
    "5741rEqaa68EhpvmvCDL3qZXFMMSEB5Xfut6KS26NZNETprARYAqx9vgBpAQn3vnBvP2KzwdshL2W9ymx2EcBGou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjJiB8WuDUr3xikXFMFafpp7To3R3m6LbgFuALTietiBW2ZgJ72oncUUhoGLWyLr6oA66HnE5Wzpn891gVwCkLB",
  "key1": "4B1hVNStQjSmH5GubkSCiSjqe5EMWmbpKobB6rYejkJokEvyf1XnVJE7yobXRKcKqXhqqFE2MN3VCgJRyeSpAQRJ",
  "key2": "2LzobGjw1RxuYrKmL1uoZ1iLzV21UoF53UmkCgXpxeqXVtR7SLVkiUYHXMjLYZbnpswZ98c9A4Qbat7NmHguP98T",
  "key3": "dgxmzyMvprgbyU3LwxgNj2t8JkLC99Sp6xDX9V7QkcnExFR8fRpLMNZofx337TwQ6NAgvj8n5W2ru2yVPghW4Kt",
  "key4": "5uU44FiNwSWbn5qXP6omT1PGfRYGzXt89hrT8GRc2BWTQS3EZba9cwnk5UPSwZRtQQrMKhdATqti6EwG31B8rn2J",
  "key5": "3tvyKxfhLkj9UVNTdk33NC1kJ6VZshvgsFtq2C6Vi89wQ7jCTk2YX1nnQRmhkjJYQbrKfA2LRV1dhdzFTMHSKMnK",
  "key6": "2Pt3oudhCdEC8g6vggwga24o2E5KKzck9Wj6p2FBDZSA5AxtegSXfQCqpRwLvX6tA22Fu5TLVTRM95JkP8bPUGmC",
  "key7": "3tCTEJB3sMBQ6RB6VY2MGp3hiEHX96cMxFKWHJCXwGPgvxcUcHV9z5wUTaaXTBLj5i7X4RkKn4B8YAKHYRiadE5m",
  "key8": "2Wg1WmdPQCawcwXnpqWiMxWqJtzVymis4kEKpTQb4WH2fE2wNqeqyDgABQjNR4RF5uZyYrfZ3jb3Am6uEQBp7j6F",
  "key9": "21Xuc4nKgLgvVhRdYH9WEy7JAuLdTwe85WDF4XtvzyD6JDo6HvDPZXhQ1wgfMyVZqFuYkwgLJEaEfH79HcPNZAFw",
  "key10": "zEpuDvqfcJqqD4nYm5E1mqbUy5Xge2XGHCeosNbWtBiLynPUmahYdqusphN3dfHC5B4Fi4Cozmc3CC7tJWZacHq",
  "key11": "2RNzWAf1xrp6cGAtgmqt6XJ1tkEYaiBM6dVnfU8DT549cpdFfFJgU3V8SdKzb8NYggwoVmfF4cY7VTvkHW4P2iLo",
  "key12": "4si96i4MTX181CPBDjUNvZ9xW3zFv5dzEGbsTRS7yTQ7r2angwdkPPUTwDCmyqzaCTvhrWpTshGTT3QgpqNRDq2w",
  "key13": "3edbmmG7ixEi9g7zbKSs3FnTE5exDiqtmuH8jdQVWc35itMCPNEArhLnVmj4wvGC9CNjHrCYPgJoqCysxw37a626",
  "key14": "4CjQcFWaTixgqiDEgBD2gKUMBp8YNRQ412c35VkaZpAbohgLEYox2YjHMLgYChfiMHU5qRVmj2gwghtz9qaEuvg6",
  "key15": "3iYWzBSx7jaK2GB5Vyo3cKqRyEMobr6LxJ9YwpTuYkLYomxLrUe9RszbcFA6aF6r8qKoN4cA8Dxv3Zoky36bhgju",
  "key16": "33hL1N188DvvLpfYbXFdE6e3XCwxNzi1D4oh6HNkSQBRVnHjyZRiwReaFS6d4sttFxNrg4vffthHb3PgB8iYQw8f",
  "key17": "xzekk26WaKuHumWHvSPQBVWqRtUER489fkxMDgNVYAAxSVSpBkgCcaM2sGMehCKwk9GinW3a2Q1fCTYmEz82ogB",
  "key18": "5Fkt1ypgW9JsQgQoYk6LWdMTa93xiwkZpWfxg5bXaVZqmcxQ4doz5kmSR5oFAtxDCiCLQWyc686aoTfuAFQZkWge",
  "key19": "48LNQi3zWhFPusrDrbMGSyn9dYpghxZRFDwqfN9smeKE75E54siQCKPra7yGxVMPB5F2p5UQdbDrU8sRQkCjetcQ",
  "key20": "45GEsPjaNcbgzZcSBQ3Y4TKR9nUWmuhERxKqq89HGHzCqTCNTJARsKWGCEuQeWNgW2yiUzjVH8SjbsE3JPY6vLcw",
  "key21": "4LT4zgQNDPdwu9eyeksNCeNWByJTunwaqTBFEHn8MHWEZU1qBTXxYemeuJ5oSNBQFxxcirQqroJchQ3NFobz4vdN",
  "key22": "4hDQA6k62PJPPt7gRRhCTi9MS8eD4MXHRTgVEF8mH7urtKN6yRbzGgrhtpFohDe2fG13omdXuAczXLqRRVX7xYZu",
  "key23": "2DVxyiQyGzougxbU3YawJXxaS2tKzcf3mAxJZUK3sy5SLygHrnVFEJCDj4hauE1PpU65tgNSjdWiYwx96XcWJXaM",
  "key24": "45gHT2eeEvAQuLFPaQSwEdKPjEnXQ9LvPYzYTL1utqpm4ZotzRES4fw2wMDz8i2N2cPLgrrgp6xiG9ebbE3kLymG",
  "key25": "3xrKdU1maFZaN15NJYpCrRjx7SQgLA8h1XGTkYXyziEfXyrvVtmhr8tDhSZQ4Zzt3YiMMyvUxnjPMzu5pQ7eGb2u",
  "key26": "2YVox9eJkUbB9HxAFubvs11bFJf6MtbmkXZ3urdDKqcn3ewwfrNeqyHzkbXdMPhCQGoo97sH2JmveBuCp1Zz9fh1",
  "key27": "54VxMqKYiqYXAcpfhjqxNwQpv9ZBruZ516gFobiKrYopDoktfXzs3rFe8JjJqgPjjced4hPG7CE5xWExYRhRBPwY",
  "key28": "2XrnR6XukLquYM6HYfBaFBWqQVTnPk7YdoR3SbKiUZfEXJRZLZjDCnG9A4V3hqP2MQLLE1n5VT8MQwic8PfsrUHF",
  "key29": "zL2wreAwQcdCD84UvSpT7hcW3kzF5JDe1aZFnDHgofd8ip8fp6FmwjpXeuYpthY6iTV5iPavRwVZS17RLYEY4pH",
  "key30": "57ucZ3LpiWSfmPGiWz9h7Mmry47fA7d9NpP3oe4RBwiGqjcRovUmZ88tt8E5JnT64CgZd7gkYubDsR14WDVSUKkz",
  "key31": "3S2h2J9q4XgTYkLrv9u6JeNWGaVEZA9iA2Zdeb8bLgKRDeMNb9HyLgoqrFx3DMbBsfUYu7JLXuf5vvkSxZ11xox9",
  "key32": "5GWFUwrt6YUdWMmDuYVdW9Qe3uEDXRBLrESXeuZukpGzzYKVoeQLxjUZBcSf7imJGwa56iv1b1ARyYT6dWSqJqYS",
  "key33": "2e7Je1aEouZ5jSbB9YUK6PW56nKnJnfJNoCsjMK67ek2NUmhhspv6cDCbgNQfohMSP9mYhvhTd2yEVpUDA3vnx5A",
  "key34": "5eV1xUEb4ibKrqfeLtGngfX56XTeubkS71mS6QKD8QEkvYez83n4f5scbNbndFyGBN9wWtzQc2L797qr6qWY22wJ",
  "key35": "2R2v83feCZcM4zfBzps7gHDh51KzJTibdyjc32WRsSuT3BemfGjgsDpazcVUXiMRWeLcVYzVhkiiMPZhfK8mVdsk",
  "key36": "4jRKXpGmMQQv46SVLoEZfyWqWj1DPWNMFXdFo7MBeHzFce2J9dhv7DbtPecuzAfivRw3TcR7Zg6iyEHxJfJYiYK5",
  "key37": "4S7az8XPqYvSTa6AEzQTeYo6bmnDUPD7QNgWRhYsiMRf2ThKycEn2PSsGjWcvuZqrUJD9mE9PSuPYJCcz2bKt3Zw"
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
