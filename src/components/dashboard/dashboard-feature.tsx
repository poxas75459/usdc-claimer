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
    "Sh8pZfwVUHfEYsFWQ9N1v5pF387mxPjbmB9WrpzWzdM3Tz2nf1vLqFuRNPVxtdWxKMNwU1pm2ZSGW2SV5dDLJZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGYTAv851SGzQoV87G64jCwBW279t7HYqNqdVDwV5FHz3sJVPpb8LyoMXqmAQDTVAuUXjBEfMhDBCMiFunvRKuC",
  "key1": "3GErBgD8qprjFW89V8XtpuYYpZtBozXZhAGpEEigWEdVgn2JztNPA5PSyMLgaLjjg1iiNAa2aiuEV3mry8FNBdWL",
  "key2": "4Z2hTBN7PN6xpZseXD6M6BMd4LR2GVRaM7s6wvpHDkn7xQGRQgoZMJaMNxhngGSFnccuEaPHwuuwknS7EXXtjDRH",
  "key3": "5iif5QWYJuq4xvk8TiYGxAXFgCVSqN1178NpjFUx2tjsdbzcfJbCarreeMmr6VZLzMiSV5TSmodr99mHF7mV7NDj",
  "key4": "4WgfRPof9uFYLjQLvPuu8qUZc4YWju1CZs3ZP7A6ppXAJkQUjjYqZ1TUcL7NFbBExeiThibj6BLx3HZGxCvLmUC9",
  "key5": "BM4jaDmsRdNbtG6ko5bMHjZP8WorQ4mQkKzoqZfUcZypizVvc7jrNNS8FgTrND7XHEwu1mTJCLN1cesps4AHrsk",
  "key6": "uzewkdtCZDA9xf7EgbCm8Mx5Mdmo5HaLbm846sXpWC3Fy5quZQTtdTRgYXWJbE3Ya1L21RHM79kcvGmjCard4Sm",
  "key7": "5wCgzEz5iEMaapPYQCiQbxyrVDZL6RkBs6eYaM4QAthWc2uVHXuAiS8uN2mCffrmCCYkGfjVHUikbeEjEs34DG1w",
  "key8": "2CEcoZMsmDoNywLah5xaMuE5iW1komgMkdL2fQ3syuP6uUeqR64VQNWU7HgRtdJz8bNtWaPXLir7gyvjefxuu17",
  "key9": "3s8oeL6dba4dieAVyB9w7LdxsSK2K3Dbfr2ekpYcyUCrNjkNcjNTMTpXgThr9jFFkLFKRGSMf491dbDsHiE4noZ8",
  "key10": "4wE4ddzWeJfRwHy8bemMuKgXVfXg37aAi6U2TLhtRPuHNzsta2pchjL6tWSk5UP8r88e3iZLpVyfwgx8m8QdG51H",
  "key11": "XW2MntpG8w8HosARDQFravgWZXmAMV56oJgJbbFLKdVnSLjR5kcajXsLy16SibDfxydeCFHjopCTa7yNKGreiYJ",
  "key12": "2sQX8KHspQwFYaZQu3Jpv4Qn9NUujKaqnRmd8sASguLt6NCXFKFn9ccwn2HwC8DUDqr2tUXXDQ8TzsZ6VVvSaEtZ",
  "key13": "52miCBw6USTtveDKRfx5gz3vFv3fY2F3niidfq6kunumtKAyVwqG8HutAdGjK2rxWSUGm9GgGjv6n5d7aLZhe3PK",
  "key14": "3XhkpR9HFzMdRGh2SiuvcKyVBMVYJfgw2umWEogVX5boNMR4m5n2cTvegjvo4KerKrPcwzFo3ib9H2KwCLUqseZi",
  "key15": "3DpHN6gFx4jqXe9PoE5d1DczWsY5bASyg6apweBUvpYBfbMmKFrzzfcofkCPwpVSm5LXqutm1UAiP5nE993ERwJ8",
  "key16": "4RbpoFauN3DaLAGmc3N7crxJQUfwAVyUc7bR8obbJoB6y4TgkD1oBGDKAa9vqCCE28SQJKd8YWZEH85D6UwEvDuE",
  "key17": "2DtGzkDDjKvFTgJoRNkSyH35oUYwXhTBSB6tngo8fbojQo8zJv4c8NqT33ufhrRxK4vWjwaspEgU7u3q2eGwv858",
  "key18": "4PUSNrx1mBre5SbDkoHjhA8KK78JNGZBV3b8TnHEXFpmjWFNBsNtaZ1B7GxnizHhUibwSxnQh3jUCtWaHudYJZfe",
  "key19": "51ocQYTkX188BbGLaqcBaSjMZYthsB2ow622TnPomss8aTraTCJBfN2YLsAxGpTGLqPLbuzRZSoRQhQeEbmptTtV",
  "key20": "CZsCuWaj1Lwmuz7zJnPTRRmYdUksoAp8XpnvrTJNPjMaLAxTC8BSURs3KQ9eXPZw7HzsjtPsN5hx7w4stMboNh9",
  "key21": "vM2uDJfUXe7BRpDXgFk8CCZ2fFhWkhNS1F39Z2KQxY3eAbTqTAe4Hh1We6jQruY2P9ggKcCsskxQ5sYWcry7sFT",
  "key22": "3RMrPYja3nsbfysMPM4cKn2vGphrYSXfMMcTKFv7Xowy1Rnn8u9mmm85jCG4fHnoZ723zTqqU76ZKxXAd6AYX7E1",
  "key23": "61saf21G6VRkTVPBtQJFnknVPcSB8Dv2DnBQiUPYMHYRVwFkZfUFdn7t51Y2goY13etpcNkPAdyaG5tJkHKhytTw",
  "key24": "48SjfFQpJbskeX1pVXF8SpWeGu3mdbZY7p4ubMwJrdRGmgbEfnhDa8kYWqS6XbE3hQ8n9LoFXvV8BS48eGoNvYAw",
  "key25": "46urCM1ms8nWLoU9VcL9PVkeKvywkX2FPhdGoa339PzYRW5ugy5BUBPMfSDRCY8mu4dbsRBkKUnoP2751RBxZ4uE",
  "key26": "63Y4SYNeRa3CVtL6c3vWVPc5fTdebdXKwYZjMJLDTa1tBNem3dvdQBdcCXgBKotM2fzUKa2Gn1nuhyjBvqD7rdSg",
  "key27": "24X7K2JpvEhiDs5Td4LaPyJQMAgWM2oGaCcQE6PAFmjDcXP6LKTehypJoxUVHiCfz6HAShuvWVJt8AZ54WmpkWz5",
  "key28": "4kSQSXQmt5CV4w2uFMcYN5SgBi2Lzs7EfxdtP56eD88am2cwoNdpMHLUCDUm6CuLMNeFJ9YbCW6FMQLPZZVjw6m",
  "key29": "5uqNbQxjyB32hrNdxBZUHj2A7FzRvcMTsD2KyT352qhpak5stRgZq2pDwRmnCSttnEeAQVRyVqmb5x4w44woep1f",
  "key30": "5YKkwCEemGHdD1o58PPqGpGptNYamsKJdZovY1XGBye4H7JhG8yU5rKuKdaZuJ9zhE9C6HzdEYXYmLtkW76XmkYb",
  "key31": "2G8TSu54FpLrZvqf4EpTKhMW24K75Kaoh3KfHzqToWARyJohVfrTLnvgqsD5dbhgCzu4Bn5ervMrvY4RzQYuZ7jP",
  "key32": "2acyVqH3g649rnxaopwUojeaJaHmdctNSP5xTq7kAn2Dgm791SQzQnzLzZoxNT7eYBE8GhNHEPGskCFgoKT51Jgh",
  "key33": "3xbqZ2MuELJgUG3YSQANsEC7A95A9hc1DNg7XSGGnDcfoMYoiXj4sooKVh83A4xDPjq1y8yrZ1aH3frYoSzGeRUR"
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
