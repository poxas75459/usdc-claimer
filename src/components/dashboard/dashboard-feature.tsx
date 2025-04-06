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
    "x8qYfRfavZ2dkWgPqxXxk8Xp9oDoTG5NMoDhd2J1XFhYwyUsqF14Jynw5hupDLCJzBtuR1u49tCoD1AeTMVDUSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEKNNdW6GCQxmtHCkGYH6pWWCLMBP4ruWkqxnMFUNfVGM8bk3xeNyNVGy5XkxWWojmkxjoec8Dfs7R1znABzFoF",
  "key1": "5PAHnFTFfg6XXr2jth3ZUjhsP9tXLcKFqBeH4H9boSMscFEa2xYUAkA3ZyL2XYVgWeVpDbfquMnssyugNN9gN4x1",
  "key2": "PwiTeTr9yE7rjgeRuHR6JMxaBKAVAmZ9Zije1LAkGmtEQ1xeXoiVRGmyaDqR5KTHQ4hTW34exQwLHAfcQ4U8gAW",
  "key3": "5PQB5FX1LXRju9NPJnNbWhVfmgJ1Drt4XJ9QpBbGCy8aW6NJ4Bp9KpLVYn5azpkTzXwdQJEeCJDZuH3UPRDQeLRE",
  "key4": "2xyaRhjx6rmV5Jq5JNumjHu1pvycts1qokNU3s6FBuGNQH79tM3rJQfjkW64NP85jkWECaJo7ALcBF2jLmcwuKwh",
  "key5": "3h53Jr4GsNJa1tXHLn72tMjHJejSVBJNgN4LJcgFBR25Aiy8zNUCMbPngSURq2YBCkdUotdLNEpXkRrxTR8N3hyx",
  "key6": "3uuK73aANFj3V8E3NyT4dhPjGbeFAM5oPUcYdjH3ccKjku2VtSK29Zs6aznSxhNLS8fUSjg2fAUvLhfgiUn5aSjq",
  "key7": "PaFVtNupWxjQMr49vvQNLxMPWpUhnkxGf25JtggSmsrk4WRiZv4mYpBrpqpooTj1HwfC2pgxkpfKqEDefRMALj5",
  "key8": "662h7dh8yxxhbJE6T8ErBGevbToCo6sTnqzH7uHH91cbQRfP1ZJWK7eMACfCZEWcjMuQBRnM3UjkXrKhzyuHa27v",
  "key9": "4Zmp5ctBGzKSZWfB7wAqit8LBHWt6LDbqzMsQDhfsbVCSHvnQBpbVtbddmx8TtyX1cov5Qvb5do74r8RsQ7NXx5R",
  "key10": "igvFvBXbADuiNAur1gxyr1x5huRm6rwE83M7Nqju2fo1tYMvfozpy2ng3i7NHKGkZYoyu4rHp43FPkKikxomob2",
  "key11": "41qTrTar2eR8Jha9kShxmhWmUncypC49SR38mwQZuuwSu2pGJWvjWo56TWfMJSdYbcMjEd6jBzWys6VcSEzY745Z",
  "key12": "oktPiQNLNHXesfSH7G3uyGTBeCAiFKJas5RcJv8DGMGx89DXDfEUvmJ1DGSnntmor6n7H1QqBM1wyS2hkk14ZZr",
  "key13": "42LBSXBaFc6Ez3wVUqp1SE2R8QmxS66UbntEkHepMskPrE7NquRMGTBWj2UyDiMe8zz6gWRXBSYPf49P3ho3D36a",
  "key14": "55vjN2kCaLjZ3KSbs2wVvQiZjnTNVypePYZjN1mEgZjkNrsoHshzKaDFo6DMZjabgoRUJUSTiCdshz1wHkKRdSP9",
  "key15": "5aJy5TQ393Kp7DdR82Z5EsjXMdWHnmApipeRBoRgteSKfgSvGpXKqrr1vhgmkFjCefuZWnhpVbiNCStEZxcGAT53",
  "key16": "42Q8Yb9o76v2SDw91Hi71kRnM8xhk2UkXTak5ghzsLrKuoq9VsA7e4fY9X7BDrsEQeLvtyzorZDn1Zu7Jeqb5jpi",
  "key17": "g8qigSmZZ5DvTi9NYhaMzywNBumKQdXjsmmcuoTa2qrEVAHA8j61SN3kgvFWBAxbB1qhfF3dEXR3DJLB1EXdLZX",
  "key18": "4MZ639TUTw82SeDeidxjpZcBU3HwECEQ5Nn1tJ1acwPcBaBjgNMnFXGG8EDM8mFZj1LxJ3z7TnZ2E4yStQA4dgf8",
  "key19": "4u6q9ftMPi32923euDkrXq4bwETuQWiAfS7KMbBMkhxkE335JWJq65KtSfk6p484gPgJeruRU2vCcm7Bbpm9xZ4D",
  "key20": "5yAmYWFHUSSPQMam76x6oXdBSXpCaYHFzbDMJN2yZixDyFVDA36vV6zCwCEdxhSPiSYnTxNj9jiXdC2yeCjgThwg",
  "key21": "h3L53fCN3RtL4GruBE6WGfYqUKbqkeSBhn4tajB38DfSFPFBWgBeyYSBnxZ5WgjXRKf7gfjQVJQV9KvpK3nKbdW",
  "key22": "5B3AbYPtsedz8mGWcy69jnvS18qhw5N9QRzuE45YNQr65EQkmRoNjEX6vZLXJBc2dfEKitZtQi6ra3Ffk67nfZKu",
  "key23": "2TZST2uTcAiRqNcmP3hNjXcnd9MxAp47ziHnmwfmLqtgqoET9kpjG2fk1Z1wfiogJ3a8s35S7cqryHZ1areazGzQ",
  "key24": "2JcCF78xHzdyuZbwgGuHZtves9o7ygiaBk2qKtdKCEaM1Mpiev4XDQxKneBi7nYQPNEdxfxR7vAGxPzmMre6GLFc",
  "key25": "43cN4j8fNvUYUcghrDFzuySKe9Xg7JDqwnVVhHru2Ps8eSciDD97WNJQhUoXpZa9G7QCewRfLewbi8CdJXy8VcRZ",
  "key26": "gG4NP5iPmT2xJNK7qotF32vbGhs28rMPxb97MatWoPs65bubd4wJ4ZurMdAsDm6tmkiHwSXbJ19vg3E7A8DMnn1",
  "key27": "43wgxdKpCcXUmcEMGgGRksMYj2LL3tG3E12MhSei6MK83TmcCRuy6tNFiLdY6kpjd57eTC6DWNtFQmd7nvvifWLa",
  "key28": "v6dc6MmetLcJicDnpXpsrQhPv1yeEUT1EGpjp7GyUZhgfpgzFHzqgzyAV5FjJkkPKVFi1dt9igQGQA1hBuwgfJ3",
  "key29": "2bmFxTMRtebi49RrdBSzfgm8gW2FKrTsg8B5hLmwkqWoB38CMZhovhNmFMw8m8PtviBd5p6ybZpbtVsDahCeLqr6",
  "key30": "5fWXerxkrQmBnvnhdb9gV5UvhWrpKT37mvgfh5pRTbYMcyzCYxMvbbHeGTrxFBfZWU6ZvMfASXhwL4yqi3UosZ8m",
  "key31": "oE5CZZMno3N4NhtNeEffvfPPMYYLHxAjMU4Ls5NteEvvwzgs7DypHtBrJkJ6nqmbdJdGfJKMcYqr1uQTiB4enJK",
  "key32": "uC9GQg9MRh5Zf1EqL6o6Ud4dRa1qjFskaEtMjEHQbjKz6vwmBKbmaydrRLPzecC8kpmKCrQzVzX93NrULzRMMe2"
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
