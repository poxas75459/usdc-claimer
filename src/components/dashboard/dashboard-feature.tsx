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
    "4WdFiv4kA6bzj97yvyKKX5cpwuRZsxxGjb78EHyinN2uJ87gpP5kgTD4FYsPSxLTLPX4zUV3wcBaAJ59bojhHJAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LCtMwY5nYMwMPkd7rGpfUd33Z4CfTL3xkAYQZrwsWbAoJfL6QxhpdMnvGACzLiQCJZvNv8cEkeX3z188wr3urHp",
  "key1": "3VRaJ6TKYuqALap1rkQhfreKik3RT11G49WrJF9jMkhVwa678G42asGfPFzSGGSd9LoGyFFqFUct3crW5T2SZuju",
  "key2": "5V5WT4M4jzniZQkLRg98UJzMTq7ae2ofEy5EXrTfdXQ6GHV8SpQuMDapnvi2iDebQQrXSBLq65cneKCw2Qq8Zoy2",
  "key3": "4MLN4DzcDjuUHz96DgLW5NAVqp9gWmsmpLRxNL3SMsPGfyMq4TbbqgMd1oGj4w94pYarmyvCcpTwQdU8V813RTBD",
  "key4": "3uBXAsQovCiwH3h8XcXLmEY18Uu4A6oKo2AR7hhFuKBjEiJGdfh3e2nwR39u5ABAjo6zD61BMfxWzkooAu2mCxYm",
  "key5": "9LkzTZKm2scZfBnXLKSQtB584k2d4gqdN5BNGAUr71iDC6Yf6xragwKX8Lz1U9Q2ZRgmJgzQbsxyoMhNEr7Kskb",
  "key6": "5HHDHYaHYxyUs23FHEsLCQ7ouwxbjSKcr9w11Dv1zru4vVxRjcfcJGmAFM6uuVRjumX7RYYBUc6LXqxN1yrYbpAe",
  "key7": "2pfbTfZV2mzce6jbpFLYVGFgc91rLw7adVgkfJXHwoAwzLMMGcu6VJZYHAa4wmsFUXbWhFUVpRGT9ZYzig5oiQCZ",
  "key8": "3Uh1mQpxpua1zbePSGjUcqZtH9U4yhKBWAaz3bdiSeq6fa8XXq5US9784LWBt74WfK5TNJsUUqLaPJYaZpBjFWF9",
  "key9": "23eVqApFpLxpvP1yGmpGneSZoJhP6YQ9Kz6Pk6jALfywB9UMnbSX4QjhT8eLao4RsCL8VZZS2n5cPRVM6dzrEGXE",
  "key10": "21GnidMUGdTaynBuKuLVzg9HYaaJ97YXHXYRAsrR4NaNqvP3ztgom64wAfhBodKmC2XqjJhX7DjaWAYobTBvgoKZ",
  "key11": "GfnbH9hPXJL3eXnttr4YD9GLysg1dAoDHftoEAzS4YfYShDik4UB8xTJGBsDYVpnsbv4EyBEBgb5ZxAAwtfqDTy",
  "key12": "66Wu1yD4Rx3Nj9mUZZWKM7zewqiYMghNwkE6brvhcZVNEXoqqeGYR2zKsoCSeQ2s5JECmF2iWeLoBm1KhUphtBna",
  "key13": "5V17SANH8TiWL5pq7mfvJ8UXMemdtTFcZhRWqCZXzj7LFPn5pp7svavYPvL98KdKFfRj9mv8vvdbhxzbuWUGRxes",
  "key14": "28Qia4N14go3kMb2vXkxjwZm4SaibyqStrLFmChivHx3QGXYRgsNYbXETj7FBMnBbvgCg9T9H2VqfDhMbhDY71F6",
  "key15": "2F7U2eeupTfbKWq6ciXF7KHMUHNDXWEkHfPepUVFPgzg4551KRN5sSq6L6svC7XqeDfB2bJLRj2yNMZ5u3rHwWzU",
  "key16": "38TicBTDqU4RCJEbSAiqVB36AVwC4wTSwvJPagu2HCmxfPrHtYB1Cwf3c3TVzKNJRS9U463PweyGrR5a1yw1fN7M",
  "key17": "4mx5PCF2Y6K9KRxFcQ2iRxCpdsfBLoawejd9iWCT1MePkSGM28eD98wBPsDZdjifHy6CjG7ueV3M31jXugSTJPyr",
  "key18": "cu4FotHWmgphxQYCqNzu2PDzHis7qhYj432vMbNchYfJXokJTA9zdfC6KbXczDpF54o8jfDuf8jVSUyArGMbtwM",
  "key19": "63Nb3Tnw9bhJA7gbPYkbrwWxoSCL8U7M8UVzSN7HEKiaPAAxodAe8w5hh8Mcv4cTeBdD3Vaya7aQYW7cQQk3vstY",
  "key20": "4KxhAJNwWL4sd7CTBBSxTEWQriRPuEa7nQGQhWF5VZrwJhG5gnfAnhPZdz9SurkpJRCnVxQrMDXEqdoTK2Spb27j",
  "key21": "4uGv6wZy3wBDhKatQkowpxrNu9oHvwRuuWNE3VgT5F3yqzgBTifenjr68L3tA9Yc6eq5S9D9taHkhqTzVg7JTBGn",
  "key22": "4PtneN62Gi5nsBV2rbWp8CQwHoBTZKyThmnqRYa9z26UvWrCQweUziqoamumPoDRUbyHwyBXTAGW9KciYqXvND8c",
  "key23": "2hohKFgAwMMecMM963NWEpHnv3WzL5APz1UbF8CLhe343Vi72FyGVY3UYd2f7iXd85bbo5ZepFfKqzHPbVwjunT3",
  "key24": "gcbEcky5GNtqLkFDKzDjXancnnvog3GGHVW2b2rRfLNYdQ98PskdCpAYMH8yQcAeheYNkZ7TUpVAkLvnLk1NkKm",
  "key25": "3P5XbSyfdM4mt6hiWe8DSKxjKgMW9hgAxSC8JbWM53RpcxY7NLgXv8TahZQAmY3p5KysakAzHp1nuKDZ7KQ49mHQ",
  "key26": "QHPtQDqduXiZwZswu6o2xQD4sqDxLEBSznBZ1YvCiP7S2cVpcw89tL1VPwYnh7Ha97rAKBe6a8vaia2a9DXgJhv"
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
