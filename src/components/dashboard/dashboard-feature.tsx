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
    "3hv8DCrGddbuz9q4yCKgNaccK7u4jegTMgEYx2Fq4diKPbEF6xN7y3ev2FRAbaVkAHbiZbpVBQr7ha5k8Wj52UVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8gVzFj43Y6Ccd11GuDr3GCKxjgcfAppPJdZbqkoVpSHCEUdXAbVcGJbKGq8BzkBvY7Jr1AGLU9vgh96Mrzbjho",
  "key1": "4YKACbCCRbYfWugAJu4RKYmGAFtMKywhMZG1t4gdxJg17gt1HG7JaGyEz1PbFZFCzCMcBkhmTbGQYXoMLSfYfwBZ",
  "key2": "3tvBicHMqcKhb3TR5kwqpStES4puW11STgz3oNcvhBcuGgeUEEMKgjE5tGk8FHM5WR4YRaNQf6okB74uw9yRq68V",
  "key3": "32pdiLcAxCptf2Sx72wksK1EHCY3hbZpTryxAgAJwjcepoyyit316bLeD74v1LSqgaWaHmGgZseD8VmDDSNYeAv3",
  "key4": "3zJnj831LmfxevtZF1XQFQPVPgkBtQ1uEe9uZRHj3QTtbsNu6g7wkCdzSSnLeov9QSD1Ekj5tsWEJofQMHMW2riR",
  "key5": "2xB4LmbCmhYdKf9gwgavYtSG2hXTW1DqRFRosRaiUDimQjkXpE1dnzBurkgaVnAbgqA6Er2pnFx62RecoSdudFHR",
  "key6": "5GkgrJTjLHYkb9zwTbRLMcuqwPvzBy541pGqndKGaVW5XLvkQYfxXtDSbw9dFfLAVGBe3B9sLRTW8r6z7VsbDUKv",
  "key7": "5Bpz7PLq6JCEd7YQJSgY26WjofZXZ2oSmKh1RDvYNatRd9jdYZiZVkmvxvkuFH1ghYCH3WPzBPW8HoZQPFsbPddK",
  "key8": "5LaV41Xp9o35n5mUgRxgndLtoSKLpnpayYzJMUYEKamR9ZiLXcQ9E4LUCDDL6Wwew36UJKrNSMZwXeJ7dXnJ29nu",
  "key9": "2VGT3ZqwEQSH3ThG35Aqurgd4EztsA1Qhv7juy3qDTHWaVv4hWYsR38F2NqrvJBerwcoioYFsiwegkBJGxDcQbsd",
  "key10": "45jD5gi51Wfxwp2o3vgTvgJSJj4wgq2xXi248XF8JWZQt4M4rrmtVyJ8cnHkMfqEbSB94ddJpg7LKpTUWqPq66k9",
  "key11": "58GpSSeFA1vYWQb58TEhrwYGQgA8ZSYPrjNBDJSr3UV3ZVB5bjUVNstVatZSv7SbnqfQ2emCHHv3Ppns38RyGawz",
  "key12": "nqf5Raor7hRoZ7W8YzSn5SjB7CyXqMJYKXCmspTWYaovocVuYJ6G8VynBqiAoMtyGhLDztsyfU11C477yUwsZkz",
  "key13": "5q4S8KiAWaxBo6qvfPnciBfxWHD6c4JfuRA2hzSkctmUj8gk8NytTAJ1wr2nRDBuTwwTDPapoami1QfTs9BFYVfS",
  "key14": "FCES4dS8KM8yKKrLPPc2FWtscfpApmywEsZ4pjTXnvkbxSZRp8wD1B68mE3BSY1Hn4tEBJyj1os4KUn8rd4C5Rr",
  "key15": "RkFALzHwjQTBaMhZLGo6aXsbJDephZVXYnYbvfmPVBDFKxhUAKFwY1m9YdyJmEg5QvnccBnqekgZZ5S7diauDhw",
  "key16": "5XoZH7ohef8qaiev1bwHi9iPnXcYjcfTLcWPfdt2jyuPRSv6s7p3EWGB3Jxef7msMmDZ9Ft9eka2Ef2B6mZEqjmx",
  "key17": "5pJT6R1YWLPk2bgGV6DeEmjfV8WaTVNXaJYGv1TuwndhaTksLn31utN2uPMZK5VJfhpTcofQyfQ1Ti6tqLRADXMd",
  "key18": "4jMJ7LTTcN45DvaxXDA3cCtdfpm7CLSzotG1zXr9L2pQDEbkppHw4t5QPPR7U7JuPuy4egTFi1ZcvNMp6TnLfZ3p",
  "key19": "2H2XWYS26uScYyP2efCjbtkchp7VFTHFmyp7kzPpd4JLUfbohxaEwZ6c1HxdFBLUJwKT2kBRyjFM9SA2NEWvdYU3",
  "key20": "3hEU7y4WuRWZfW7V2Ay2pEQadSvCAKhRHr8AcK9oskKyTDifpn9zB62sSx3z24L8NS7LkL3eFPjWDqiyd66ESzAe",
  "key21": "4eN1TcyYfCXccB5ePtYL1X2xBFbBZqs546Zxb8zGmaHAkCcZyq4i19SB6LZmVC5VCkcBFY7ZrLMfqUKJ9EBekWrQ",
  "key22": "2rDkuE6xS4SNbwD4M83rV6PaUrXniUP8WBLMsbTXbXD93CMMsyvh7P9FuTN2TudCRJ63bnZ8PmfNmKjs2xgd5Y6s",
  "key23": "3JYCtAZR5EDD4Nv8RLqSusFgd8pXzEH1796DUbqNopEwY5vpGyhyuAGCx3AGCaszoPz8TW87z71cGrVCMaKjSDVh",
  "key24": "25BfeJKJhGXRopE58bTaNV4WFsPbNUBjPCmS4RGsUui2aQ38nzw9yeTUgv8UyCdxv3T7xf9TaVLFXsf8VpTTXUVh",
  "key25": "5RqYNeFR38GsxKF6B78j2Uu9kC5UTC41oPVZA1cq2CWW3WMYDPsjzQPM6kCEL8rSzUCECgVdhcXs9Gt8YVtQia7d",
  "key26": "MVeXmspme5c6ciyEsXVQSLVQZZGLyGGF3EqQQ1JVdvs13Gf4RGmXUk2pGRd4GZtDEosxLNHn8QCBvMpXtnpo6x1",
  "key27": "2tKaSiyvQpSdDiZbvdrMhupUPCKMdTYYCXMaT2VFHq5GLJNHCanpaMmyk8uYdKZrWbAgsCPv8RMhECMunVotpLn6",
  "key28": "DZDCz8CKf2YEi7iS2wdiuxB4ZkrA6ZCcxaRypXQjZWBUoNGCqNwRSCY2WocY5jJt33NcieTvQ7qLS5SRzb2zBDm",
  "key29": "3w5bhmMutto1qso2pqSFimn8X3hQCEML5GLGmE9GLBnJVQu5zU1PAVpPnKeRKBaadjt4E44UBjyMGkwaHE1L5EMJ",
  "key30": "5dSmd8i1Y28C9rX3j9uoRR4QG9cafkYmZSajWccjYaiuz2uu6DaxNh4ZfagWuKVW3aPTov2A9N3cgx6xHJsj1Uwu",
  "key31": "64Y56fC9behiG1QEbPwVkMqJoj55FQ1osDWZoxhSav4ymuZsAeAoqHyyFPq5bJTS75xi92oDxKqN2R3VseB4SLmb"
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
