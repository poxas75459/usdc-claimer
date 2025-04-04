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
    "53Pk6br9TquT9TJ7uw5sa2N7jvt4M9Ts9YHWiQsm8M3Y4CBqgADckYW6muPcVfjbj2SjkAc5aToamnUkhfGzYnH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UeDmJkrQjbbvsxx8s93N1mBJnzPaPQXsyQvSBWLevsoHxVxcUkaSXAJdD55ErhXQjdARNSuMpcUd1QVHoJRDgt5",
  "key1": "5DZUSRgj7o1MUcGAyn3avSMKP7oDtZNgEPkkVmFUcuf38wE1aRHi6onWRodojjEvsGBpewooPmUp9EkMa1699FmY",
  "key2": "3stn8ZMUjCeXDMrwzAESZWC2WyWrq8dggzytXa4kasE4WaZWRu6SACRKa7EgX6nSQs7iRQtk7ZnB1cCDQbdPKLfT",
  "key3": "23ngYzkKaD1FWwFNMzLsSkhE4Yu8Pis5aeJr3FZ4naX9YT61NibfAKAsgjonLZsi9Ha5N47DY5cm22B8s8dkYTxx",
  "key4": "2pFcfcgccphq7wA6UeHM884wLcq6yT6N2NiLzrySKoP8qBn6kXwKwkScqR8KLVwPPpZgjoopnKL6AYvWxZM6XuiG",
  "key5": "3oYz2hSY6gsBV4LL61e8nFj2idYMXpcSN9PCBeSED9evaCQ7d2RrT46RFP45oiENpJX5oYSUh5LXmoepPQDQQd2j",
  "key6": "2yzAQkQ2gRUUWaBvekns4u3LWKwTXKwyzUSpjbQtWASd5waFG8g1Sve3c4s7Pgw9Kzn47be4vo7phJUv1xE4uwSH",
  "key7": "3SipAW8KofyTeDKDVRj9spDPZjUmD7nDcurzxVTUxVy5PS9zLVQ7SiT43yegmRac64Mp3eLrc4n8txWPkUF4fkX",
  "key8": "5nhubkuUWaofMiMHRdpfQ2JCjaM6bpiXVmXfEMbMbbkSNbAG2xCVfQapTuPmXZBJsKmKCjC7qGkCQQeihziGAhNg",
  "key9": "WLXFhqJBiUhd33ztWEbxEJ9526pN4cUsfSyyi91Lx4ZXHQaVQD1dsUUee8i1gNseUxpnFwFuVTBJC1jLMWFMdm5",
  "key10": "22XwqB8j9Tq51sTMir6HcVWNv8sU2Seb9NB1iVwoJKCAsKoAHugDyLhPt2e1irPXdbVxHeS5Kir7DrDTEgbsH39V",
  "key11": "3AApWXD3visztfxbfDF9MLvuWqcpkwjaEzmdqHakSEq3qA4TFFzhaA4NcYVCaUqzDL39EHf5AJPeCesi4s6VHSxp",
  "key12": "2Z9H3u87i1k43UWgdei5cPkTXR32K9iASwvTbSmo1ynzzDSwcnkDUGA3m32k5Bv7BbHdHhAvQ22GdnvZf8hK8b1v",
  "key13": "3E81yrUvUJqzfr7hax2ZNiSEy9fjJCAUcEJGKdfjnFMkgDcYbGp4AMHy3gEjeEGWyiLt5Q99y3byyU4tK7YGmTBJ",
  "key14": "3peYBnKTWyZK9T83mb4QnL7aU281Wp2Nwi5aR4qHZkyLwjKUJCUm29KtPDbmGWkJHu6wtXRgcxji99ibR8WVTZy3",
  "key15": "3BFZiLr3YvjRVMxP7RTz26pAawqkx6FcTDezc5gLwWMw2dVY8ajknC7iTTd1BtW4BfhgM2ZZer6r5KgupsiNUH4u",
  "key16": "n1K7iWM5ZjqsLWwKgqKakSLVsHvNZPbpfYsLYCjvRZLkP1SsHZa1Sos1C1AXkKjhSP5jx4x5GaQx7v8kn7ehYgQ",
  "key17": "4Yy8FwNujrhmedTtaWC4y4av1qVTFjCr1ZEJ9hEDN7y8La8roT1RPBD2Qia7v5nYFXrfkKzPg27Mgvfttw93ux6Q",
  "key18": "4oeBoBLdtgonjT8jC4379ubhukyxcReoFCEKpfiKvpMoMMWqKVrgCH371y9smQfeE3xt9guie5utfC4qzMM168Qy",
  "key19": "43NsLPdESqNUXiLxLaXYmzoS6ngXqBGDobM26ciKZNx5F8Wc4yWzmhVyaWz1SCkzecEUccL1fqWQFB1tUGZ8iojQ",
  "key20": "594DhB6dF7gjXJ45sfjXfd1JzyvCLRh7kw3e1YS9owX7SoAkpZ8ToVbvojsDaoi9ZkuvyTV4AVuCHQsro7y7CCa8",
  "key21": "4GqDxV19DqCJ3t6qgqyvBKCpZvELbJ1G4J3pwRoFhyD5aHVcMgtaHehh3upou6VXgwjSWPnAUgGzeZh1gPBWrA6f",
  "key22": "2DztA24dTesbD8ZsFoX8mAnzd3ud9nMuQnNgNh6rndZpyuhCPfpwF8tnxQwoGw5dZWA8NHRNZjrk6QnJGmRPQKB8",
  "key23": "2yPRh9EGFZRnXFRMZqkRcTLxrqeFGTymK4C5Jpd6GK9jS8xkjEZkqhopSjDRTiUaVX4cVhMMM34owg72ZmF9xXJA",
  "key24": "kchVwSah5cpGNF9VPDGEBf5MRhDKiBT5x1Qp4Tyrd49nXxoUzjmGc1rgHSxj6AhZpmpt3SFVcCygHHgpJz55GFJ",
  "key25": "29PtBPaaVKVDqiKWvB8CyKEksyigzUP7Pp8qNsxEsn5V1aCtdaeMnvUcAZok7m3qK7zSTbaTp15BjagDAgRGuivF",
  "key26": "4nQceYK3kw1ScEkCaFcjFq24b5fHqoPj8qmpTcdfjPD93u9zJgxTgAxLxt1jDDwGJbdcNWE9D9e139CriuzajGAf",
  "key27": "57KJgshYsPaLXzdXKwQoz5nZzWBchJgQV7YQw13PNN7TE2JLkhmC3UUhJsKhbysTikTXAeM5C5UjPWW82SjZTCSN",
  "key28": "2sfD8tCjEvvFxs91UPtXrSKNKVXPGT4kwhRGSfvNMyzMWr6PvsENLqLkHg6ViJWPt6JoDNzMn48KQvvPtvkA9EBd",
  "key29": "WvYmp5Mx2nEEVFNpNuXjZJdsAsm2MQ2KDQnNaZVApDS9RS6dw3TadPizTShnfF4BRv8dixwNUnbEgtkFxr9nfgu",
  "key30": "5bbkdYT1b4cmb43D2VBDPqSWTjyK6djuLebqmFrPaDc5RBGjFFLNbo3UqfN1xFnErf29Dm7vFJTeB1L6SkHXvj22",
  "key31": "2AEE9dRcv4dEJCgsfdSj21NqKU7xEXBR3MDfCjumoGnzcAq4wmPp9EA3EzLkiQYf63Vc3puJYtoefr62be1Zikpw",
  "key32": "3ut43oCvihuSZHxAfZZtJUdAko27SmSRtQiU48dvfyygbn526bcmTd7An2rcekRexp28zQkWQZiTEK9dTu9urotc"
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
