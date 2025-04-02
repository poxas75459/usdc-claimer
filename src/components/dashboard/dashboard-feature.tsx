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
    "3ne2ezJxHdf3L4LgEDDQFKsuXCndiBkCBiyJA3U2MYR9QdJHdSjNUsJZ9uzs2P9Z3M6hwxSPMwj2wxnhmGFj7c9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJb1GwJE4HZ5HrXM9ES1hBZxqqD7ndG1WEJHCk9ZHq1sSo7oQS88wexNGpC5DbrpfjrPPK1HgfUosHqh9vzSTur",
  "key1": "3XDVjdsRqLiKrm3PKvN3sGpUm2dc5yYWvMfzyE9FJdpPjTLfxVsnstABp86MrkQNuhMfsi8ygwmjmsq5AiAvCqP4",
  "key2": "2j2KuZWBSCsg53vmmmZtgdfPYH9Pe65yrX1CKt4WYmC34BRNuqvdfWrmsEP781A2KX4xQjv4jTHcpfQX4Hssbsg2",
  "key3": "AexkLdetxuo1r1XGjcHfZD2QNi3qr64K927qG9XozFWMcbvrz9evsJn1MLdVSTtHcFxjz95ryJf2aeZisgGz7Nv",
  "key4": "9miomouzHmmtTuFMiBCEb5WroXm2TGXEyimtD6iG6xjTcuR5eQSf3NMjra5NqmrT228Q2htQndcZGcmQ6sTAUuH",
  "key5": "4XuheJs6RMqR3GzHY7woApX5MRNX546C3En4k1JgjDjdoTFF1624Y7aeBWpiDrAZib7db23AgXADqcpNquz9t9fY",
  "key6": "2hFe97rEcVsbhuaQutP33cvLaFopyE4XfgRwb3tcPCRZwQfvmv66VPWzzFssQTqGpxF9L13saTQMmS4nsBp8hJqn",
  "key7": "5BXoZhrxcpsbLnL4XyLD6kg26N2NXtNtTcqdWv8jrDdnCsSqTyGWLYxt1grh9JMbb3sGKA2rnNCL8tXvZTZ9Nqg7",
  "key8": "qMZcY98xomZtC4UDq2ofhs2fySAMtwVbTviHh7smbZMahmZSL6sGwLa2E7px3U7z2voCFVGXQmtKfabfnrKkGwL",
  "key9": "3rqEYBc2bP9VWUjVpDgBhgSZ7YX1HpfMroPMDjvciu3sELH7G2a7UnXPJZhVMgrpj6KXud8t6XmQ4R58Ek5BjSyx",
  "key10": "2FoJDmiMfkfvj3N2eU327Et7cAPpxPa3JEXSZ6YKbC7pA9WKHngyJtpPxeFTDRNqXroPhKiwNn3b6nHNpa8JcBZP",
  "key11": "4MquLAwV4xrREBSQXc4rZGrSwKDTxsQABEsEAD11YCetVcskFirPAVaGx1sGfSh1PAKWRdaurFz4xj7oDcT7fnr1",
  "key12": "2gyVhSD8kNYi6duLjHrf3urC9E7A8RxWBABLVfe227ArxabwYaqv6JKW6NQ4tfeYNjiyuXSWW1Ssv4A3a4WoyMcj",
  "key13": "5GSQHxbPKnNcihwVgB4h4MXcwYeGjp5xm8TixbLHGLthmHnz9GJCrVmifrgEamxax9dXyH81i8vLdidVFicfC4Ab",
  "key14": "5mXUvyP9Q1wUQGN5dgtabs7G6MGLQXBGMmBX5UB51RNsVo6VP5aADvLLUCAi9komyTSkXZFmBqA6U2QxbaUj8VxC",
  "key15": "5wCK7w9pd9KvJk4Z4Ka3i5fYTWsqAqazpuSPhivNCUbhAbaLDKasHsM7tZTsWoHCWiFP91UF1zjgnH7PWEovGbdZ",
  "key16": "5XvFqgA1gdJMQo2VXjGJK5KAw6NLnYsycjgf3geMtQ6TTBcxQRzxb72XPoKeeLLmm5TmCgnkrn4Lc8Xq3XgGNaN2",
  "key17": "4M94eNPQdg76KG2WbK3SWUKusBoVuxztXMZBDJck9mWnEUCQoW8hJELJ8vFwMnCcu6uVYR8roBuE8Ad8C2u9RaVe",
  "key18": "4ZSABwbaJvq2wr1j5RCL2TWagV1mPJiURSC894TPhhcnMQn4ABNbCB2KeJuFftQHsfEmSTCCPYP8uvj4TvQoxq6o",
  "key19": "5Fx9uyZqdSL9uFdXdoqkC75KUKS4tVdxJGDb4AUkGKkdsjTVoSRAUvyXxSzg3yAsrskL98RfD3btNCi5UYx5MjxR",
  "key20": "TG53puXW1DcZ8aFudkFVYWMJdiKe6psMrP9NWiQizi9ZwsDVkawcQnihQdwnQykAs1NcpcbgiDNx3JqDenycCE2",
  "key21": "5VicoarMXiPVfotWEmvpHHEff2bLV1Kv56rrUxGmvRETcspLBaQ1gwqhCCDteWDTecRxtKtnyV6qfkXueYowaRJf",
  "key22": "4HKVGDLFFcbwXKsD8MNjicCtWzssSmNUsUB4aVx9sv7dvrXguXieJFFqoAKNqca6XHFJTKJvkvZ6bHqmprWSAMPY",
  "key23": "48oXooTLxT7LTcLANzVZcSU13DjjHcPdDu875tEzznS4r14e2JQgyhykUPXxxvE6ZfyVoZPsgDYJmxw1Q9nX9vWF",
  "key24": "59mTzqwmsJqVWLRfbBdABUvMCAB1bEAAaSXDXzRFPYhMWAtWijp7oQLci9iq5SUsitccoLYT1ZVzHmJE4QvtfS8m",
  "key25": "ShrUL1B5TEv1H8NTuGhwNGnGYjY74Hfwmh4GXRoYeQzjRqLBT7Tcv3w5YDbWw88xVMNpv1imHj3Cxiew9uBNNyH",
  "key26": "LE2Ec7A9aF7MJCeHwLX9aeo6zunnxgNUp8DKKoz9w6ouskUJCtdaR9qAwM8A7m7hHStTYxi9sZDn6XFcEgPP9fX"
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
