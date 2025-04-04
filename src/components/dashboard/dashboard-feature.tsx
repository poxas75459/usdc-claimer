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
    "4FEUa1YAHAza6arTX979BSKHg2VorXYUC5BQyVvTSFZpx3m1EcoQCqQxPbMV7HxnZ9a745DHoNzYBkYBjn6MZfnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQvdVbftF9KsxHRK3bo1jBtfZLCW6FkknqPG9qqjXa9XEfuLJcGk1ony1AbMVRNvh13yY7J7tF9UbBr4SwwAWCw",
  "key1": "HF4FC1wSj17KYykQ7wDZWrgmjJUJDggHHxvtauZZJh3htDYJ2hjxtc6FJpmwdActybjZeSHymD5cQvYbzBaGKVw",
  "key2": "3fjBFBMXVhWHgJ1Cx6PohvLJY1aD11tZD45DsAGm6Wjr35NaFktEqav7UPTDc6PA2RgYJo1EZg6aiCFPUVVgudQT",
  "key3": "4aKevGHLTNSivE8JX7AvbdpbYgCuv8xbradXoCeU91LUfCx1uAFJXCcyMzqZP21Yo42xoNW2w9tjELjAyjNVdxZ1",
  "key4": "5yVUM9VwDsvLm8JBh8yezJS8YUQohQpGEwQZmGGAHBF5q9Kg7v2dUUWPHJSeNEXQeCAiUMjAEshS7Ey3g6oypVTu",
  "key5": "4my8M7nrRq2y7JThkNmxxBMeZAjjRP3Lu2hDn2upmq6L9E81a6bfdPGnCz42XA6RXw7WivRZAsfeVecpmka81jrr",
  "key6": "4xm1xh4Dq3YffMTqxz6CxMQhysbPfdSLEjzPYyQtUrhVSo2PbrUH7WQJ4fqkqFuZdfoMQkb9hquT8nCBHi3JvfKB",
  "key7": "5nnprWK96HH1KhgDUHmosoudkvGueXXqmBBpmSX7wa6LKLX1J1FGVa4hK3uRDNY9n6e9WWzHYyjsRjKiJTStWBnV",
  "key8": "3iCYGj8EPJN63XHb5hZBeLfp4okXJwgL1L7zdUGtppcxwJrTiF3vHt1Q2W4sdiWWABSuGuPQ3Ytagw529TaimqkD",
  "key9": "zYSzKLRZUc8ZMVenVdDawfq8GR6Q6DSnamLbze6rhQu98rFArxYuYpAVfTEwKUiq3GfXycbH8MHfYdwMDK23UXV",
  "key10": "3ZX89rJV7W81apBDWvCuCx47bPw7jzrpFZCAFUqk6zb6A3Mu1PuwfWQiNQYDFdQtcyUi73CiJUFN18EoDehdzQRA",
  "key11": "5P4896cRow262pT7V1qQWpAqFRasTDunVynjFDGJTynuRk68AQUS8L7rPSPcQNi8MEPCvMC63YWvywrDBEEkzKrt",
  "key12": "JyPHJtrxdgH7wALVjoN6oxLpmvY8nYQKpy5ei9hg9LmxaxovB28abn9JS4kMSYYzsToRKzbxMUwQ4zrihTBPL5V",
  "key13": "4Q9RT4yJZHWDicJd5mysQyc2HHaRs4bRV5JkvVQ3AQFZokm7rJuN3vDsduTxwQYYsb8pzZJQfT2PJkwv6Yp8cLex",
  "key14": "zAEr7gopZ1VVTxkMTeDLaKLaLLucXzWRT8CSk6aTci3X6VdQC92cxaXV4FgK358DcKawboSnktJWd1CEyQirLoq",
  "key15": "3x6KLTG96Gk54msTMQhJnU4sisEktrzzGoNtoYkQwjWHjBAXyWE1HtNYPMmh9ErXkLFMUzeyXNjQBvybKqMwDz4k",
  "key16": "3BxGMGgBom4ah6SNHV7ZTzT9rhCwv6ebWt5Ud56Tb87uGMBCwCYP8PXii2o1N9u6UyS1qiHWQtBHLCHfBm7UHZqr",
  "key17": "5BBoN6jupKxZ1dDjzogMGeRogHBscCDX78eEfW3fSzcfXrLGEzpLpdcn5okinBzKvCyRB62c9RaEydQ9TeL6cAcd",
  "key18": "2reQG5EnCNvrCYarhUUrsbfHxc8mq5bmcqzHGsTGR1xPtsRYhUHPud12mU7mQpJAXXAzMjVV78D6oXh1iPpNeMaX",
  "key19": "5dEbv2JMPHZZFQe6svtngqV1Sak7q5HeNLLwQAWpHJTuDq86rgouxurYUrsdG2GfB5V6hvWoeuxxr196wQ4fxA5N",
  "key20": "3348MBxsr8Lh6TjehCvfJgs84UvGSR8BopdLXUmfowq6ZRpGQbEDtfRUGSG2wanKgQnpqk6msaZnnxgdmPA53njT",
  "key21": "2J3XwmjDwjdjJreoavJjDAAtcQvsPv4LP4NfrtJGCBA3CF6eXesQcyhCHHwUjYDG1MJWiuTgaGQMDiw9wgWn2tmE",
  "key22": "3dV77PKbFxe5Vx64Yh3pqtiUF3cJEHHKsXjG1yMPCoHDEmBhY6n27bDKZp3JH9Tu8rFcB6gGeeB1xjfjjJSmX8e4",
  "key23": "4kZRYyv1beF3mmLr7zn14u4sa8nPdp1ufDFZAu11rRPK131ERNvxNS4eTstvAFcATkfYWUFowY2EW5fg8PwfrFsf",
  "key24": "23bLAhrx4mfDEComeMHnufQHRWedoZoLhAq3XJ23wJSs48gUF5PE94EWNrX6pzbbRLdyTRuTxU3qESpirpeECmHz",
  "key25": "3msp8Z5DMPfvYe81kmsiBn3XfTs13ijzj4YXmDLQdgWAFtQU3QC9FZjjYLc73t2qmCoLqfwAbbJ64WGyCf4BPFbY"
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
