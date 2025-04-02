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
    "34zwA2skUa5QQ5hhYCw4oVyUVLou77wpVWRpkzv4bafKVgS5zhDJTS1MkVbg7Srf4Yh7Y61oZCgjSZrenEmgxLQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kHnD2AkuP8sxnRsnCgEetSuDRsU3uv5eNH9kdSX2GpE33VUkityrPhxXVWdK1ATdmiJYmei8e7WYJ4QUZ3FvH2",
  "key1": "38GyRzTQZrW4tTKz2SQe6hX71M1fpiUwWyf5ppgow4XwRfGWRCcM9MMcj7QoihiDqjDjfL9eeeXw8KTLmdfHvo4R",
  "key2": "5kYcjQoABtgezYih25EEp5tYDSWPerpHzvKavMb5iduRqKpaJPKkYnLt3t1YM11nTjUF1cz1wfNtYiK3V2u3Ectj",
  "key3": "54J2FBn6CtDbpGCS9p1dKWSqaGSdbr6k42DPQkFwrLAf8MrYrSjpzQYZLuxJsvF2KfyD912BZCkJZGnJjXHfhkqp",
  "key4": "3tixfhG3hEwmwvXWH2vs2rGfvLVNR4yeVjhpeFAAqhHctGUMwu6zaZHPauap2iCGKzGDLLvRdUudnn1NvReMpgLi",
  "key5": "53KfkspkCUpMn7UXCiZKBwf7CuEBpqjCjpwmpdfAEMthMDdEoMe34EjcThkLptoxiCiRXFLnYrmCbQSgLcTrtsQN",
  "key6": "eXZJFqauM4hqYLd8P5XveyDvmS1NcEUMeht7aNUWK3K1bpoEN3YueXp9HjnZFN5vrKHA1tpGDywNpxep7P7AMo7",
  "key7": "3cuAcGf1qMxtTMYgqxaqDne7LVVf7R8T7dv6DSpLVJNovAFqR2Q432snWdpF25oehwx6xCsq6TwiUyM6TKXGNnPR",
  "key8": "28sbqajHnzd8W6G5ZWYRw7jgTnxebrr3fhinsPuBCK8Hpt95UNkkg2WwjaaeD2Rv8CsrPEW2FButhLC7GUMkdibS",
  "key9": "5RR6YS5eWzinjNKjcLjbLZ5SAqPScKRgoKE5wVmpuat1HHhcEdv3DtTQoSF98QToA174NbxbrSu9fxA68eH4ktSW",
  "key10": "3Dpf5sew6tYoz8bmzv3YXso2y9cwp4KqSjcuhJq66P7mEVbp439mLKCfEyoTb3U59vxPjqCGQBTqoL8GehNMXJQz",
  "key11": "39thfX4zLMRhcr1yCFZUe62oz6FYmiYj43dqrTA8f5L32uMtboniew4W9VcxnqAK876jNhWJZueZRpotzfmMPUyE",
  "key12": "3Vy7R8CnMYysQZZXHG9ENqzKvmf1QnXKz7utszgYqkpyiRMrc9Kk6CHN4onKfdqXhCzQYVzfQSbbhASLWbCdzaZ8",
  "key13": "21ZWbVJGTPUNx5iQQZds4kkzuHh119H9vvoajg7pjVsuXoKzDCuCoXaX81nU9cyirUkNNmxDVeRADNgw21RAeU4t",
  "key14": "55bqy5Jqcc9Y6xS4SjScwVoHEYX3Hn7MpDDKF5VfHXe3VzahCCwJYZ8CrVZrb9QXrsbFyXiswy4FJY79ppvWSyNR",
  "key15": "5rMyB9hBvvKr15QCL8UL34ttPnyTUY4KsYp6LfmBPu7cHBwavogCFwEPrUPoQ6TUM4W6w82QAg7Cwx5yeYRKGvMj",
  "key16": "5KM3VFZtHN8QyneGLLH59Y7sJh97W9SvrUgQefsaxGWypktLQD59raSFHxBbzcsjsH6C2KJxuSjiswtu5uCbuySz",
  "key17": "4rm2gxv2LQF9RX5BpLM6exYuMDPUW9inUG4eJTuPciyS16h1RB3wSNeGQyKtKCBMXzdfGKG24Sot9TKR8AMLvqv1",
  "key18": "2bJ4MW4LNN2Eer1HgdowMmeZnzYJUT61wHN75NTVRdhVLvx6w3y3u8t7ZwoZT7R55kxffZEURMEGfdNx82rwCSRC",
  "key19": "4F6pEnY5pEbu5zyj9dR77jXY55GyPKqAjq85um6p2ufRh3zgoxacoDuwFjCZsJu2dRnpuNvXRQ7P4VphwbjQu7ms",
  "key20": "Fp7zwB4uwuTrLg1yrKQyYqNneFuV864zvnijC9NP5ynP47h69JzcA4trp9AZ2Djfis8NFPWJ5VYBkZbDkCTzYLo",
  "key21": "4YY99e2fL6ry4sohfwS8kmZTvCTmaaXaN91E2gB6n7zi6bdW2xQN5xizPhzsPyipnwqeDVWGDXdiv4FR1A41tc7d",
  "key22": "3X8e1MbULtxsmpwpqTteq91pNQvSEkfFTadeqdn8qLRmY6KAGk94Zf3BD72i59dXq9SehZoEWVLNqEBENbQJoFkW",
  "key23": "4DnLCLwpkPP8KSJxDKJLDahyoa36gXQSQc9cy5uiZ1pyxeU6t4fpCwbMpHFvNnTLZWhYgcMWNdsN38PUBE3B2scS",
  "key24": "58tN7SfNqRqo4VnvxbXVRrEyTYuGSJgHjQbszVN9pE58Afdw6cWfi1TG8m1z43HhyiTEb8hCjvAgqb6QQoKJMif8",
  "key25": "2qyuQWzppGLH9QP4fNJMQZkHcTSp2RJYcEsE63T5jiUb6NXQyiGfbuGuFrvi3UJ8uUzZGHHyn9vpQ6W4tny8awK8",
  "key26": "2wcbfJc5VDUyWinGiVY2rP2fXj4hDEQXMDpdXwdbQ6r7SuQf7CYTGAiyRDYoJYuwPm8CgomTmTequCmako8vQr6g",
  "key27": "2zsiCqRBhC2fXpwksw6UMaiwWqZBpsN7ASqeLtJeUGeRVkwgV5KyGXFLMJaVdTFvdzezqHEYZjEmkfWLzKCpnFkK",
  "key28": "oqyMVb661A5Z3621fs88fuQp9PNbN9j6DZBRpdhRL9akyrXZfUsBC6CFqy2pfCTDNYLWAsYhfFghnJHYyZWBWrs"
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
