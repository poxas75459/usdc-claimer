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
    "3gEM2JdJD5HJU4wQq5AMMnTkuqJqXFYectFDgBer3jMjPxJmaUtj9MxFj7Q5WMXHfbTtxmTqoEVzYKp3WWXMJgFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43mZe5HWQ4UNEGpj9LNB3XRi1d73ajAxbK9chFZ9VEAvcMDjmrDwCgSMjfx8ESM6D4gyiMHmFMx6Qf34GCmK2xXJ",
  "key1": "5jZggxQqZm194grV8viLeWmjQWigqYokwqUJjAtuDgSM9ePRy8hLgmY664vMhiG894rP7eiJxTAfFeJkgyS5nRZm",
  "key2": "5hMPB2jqAtk7MNhfK1ue6hanRvT5f71sRVtC8wctYUjdUS1U5paCJtsTS5Pzbj5SGpyuQiADp3nc72EKevfqXSMG",
  "key3": "5r4tbztEDvyXuvL6KMwG3bsiBKoaNjiVcXzaYkMcYozgCoQEiYnGEYeGjYKDM6SREfrKgAzEiXePAWcLU6hQsMQz",
  "key4": "45j8Nwb9ShaeMgahcCGXjGGy58cgmg9N3pVw9Xu4TyK4G4PoRsmE4iMrFEfBXGnJDLWmHZVKXQgXcSMYzpx5vh6w",
  "key5": "3erWjbRSUpHVmcUex9XsyRNnbeb64poghhagkY2JoHWEGh82juYvkx97oBdfBZBkqTETMhM4aqobCn9m7o9P1iQY",
  "key6": "PMy9TH5Eza2uWMRehSyAXwBgjJY95aAKiXmg74STc8Nzq7iCRKn2B8myvHeCMhHEm5wZiex2yAh1yvd3q1BMwFu",
  "key7": "5DsSLggfMGXTNBHYQN3Fie1h8mmTPsE5Zno73a9jGCRgbing18PcEGk7T6hBEL1zjacLhZ94f9ssBe26FrfBsxfS",
  "key8": "fFwJBXh3kVFfW9x1rG14asrvBoJc6HCtry6VUM8vWMrHaqdp19toZwCHA3uNHg3ckmCWLqBdnShJZnhA3SYep3h",
  "key9": "Nycdb7AYPTgnajEdpZWv3L1QMpUVGMwG2xZCqaG6WZxLDFmvEEEkdp5s4gGwg23y9M9ZDcf8rUNsJiY2wF1QdWr",
  "key10": "64heFsAmoF7tSLrecuRHrs9CcRTMkPpaMnGHBkKbiBtCGn5LsmjQ6DVKFs1CPzVenx79dJ6Fzq2Fp6gwiWierbhj",
  "key11": "3j2WUNqhcyYzSb7oPKKiwvp4mhVPXpuNLZYf9enPQ5enNTaD8rVCqM2SRmTWWUD8M34j5Wcaa3YMrvtY7iSeAK7D",
  "key12": "Gra9bGbiugNf2uJps3wRqmoq7Q56FeZAWRHoMFbTAv9LqfqYPJo5kFVBUJpvSiRwoD7N3YbSTeD5gztLZh13HmG",
  "key13": "22zsJuaKsTtfcaMMGYz1Rh8oLX15nUQxTwdivvLDtVcHSoyeyXqw3AZ1KQvcaQNM9M6q7cpkusw2Rp15WykPDGnA",
  "key14": "2f7DZEPYGUmuNYoUx1PXEGbukdpk2XrbnM7tyjUgNZVeQnvuEceB4mqW9GKbB9zBKPVy7jbGhtCSHLa7mnLeeb8m",
  "key15": "3CEQB9ix55vaej8QbXAcPJYBq2QZtGwMXDC6J5qgzNYKTkJF8mHDFRA2ZAYaRTp8ejb5y7fTjjjUhzVrWHfWd426",
  "key16": "n4DFPpb2EL7V3srbBUu7yNbNGAvmNWTwCZZoKqE6a6F7ZkDh4iir2US9QmG9BAxhsTyjSzzA6EibPEtgNdrecc2",
  "key17": "5HnEJSKHsDGpkeyXndTkJ2GQyyPJHGWhWP43JftNMF844Qf75ym5tfU33jyc7RBtYaQdwkLBL6ce6CphwKfuFJUJ",
  "key18": "2uA5Xw5MKvssvy73e6ovXxJzCFwHN9wbGtzes8aoA27KDbAJ5748CKXcPc9VsXipG5R2YXDjFWnHKMfqbk99BDFn",
  "key19": "4m4JmdispFHAcw6KLJ15FK6vKEeVveujsdG987cmufPQSENTSEB82uhENYsZbW5CZ2R5qiMjxbzhCdCNsTWrcG1e",
  "key20": "516FS2DPDrZ6Mb4rKDTnaQHT6W3koGtVZVkLsWYdeprF1Yb68C5GcXhVpnWPGAGK7bKXtyWWDfV36Xf9cYAfrbi2",
  "key21": "2rDkpuz2N5ugnANysnthoTm4GPSrSp4cGuV6tb2SdUCUhpWYAMwxuo6TvF35TaEeHteXaZwLXNxdKZR527ocxSW",
  "key22": "9QWNNCs3vxKY9gh7h4gUL6Mq5hsvYLmtWiVTPP9gQ6neoe1PZjnpgkbfydt8GieWuWGXEpBbuFgZWHznw24RZq4",
  "key23": "2uPtMX8me6LjJ8ibCMdw8RtWnNBawm8sakEmWdcfStweQ8Vpm4s8jpLNEcyzLaLtM7oWEVzSLU27jZqa3WcuFbBe",
  "key24": "4T7uP5dqqVKcRqBLU46y6fS6WG8H7ZuBihMbjcA4AWPfoW7xZTkbp85fhgF112nQVAfx1Lc1TGdsSpEFUUzTUP1P",
  "key25": "53ki6GNixW6VMmodgCn1psMe2uhCP4mNxRbwMPiitNwWqFr98oCcV1WF5tAkr6ERYkKhePhfhfxZYeA4ZTg8m43u",
  "key26": "49ZJUpCdP5s9jT7w4wYiAzfcUDVu239UZYELcS9mKEUDmeQrzjq8fbS5sbrAE5beq7buEPGVp23w6ZEnSNAbrWbF",
  "key27": "5dLgk4DpQ297NEdsWXtDvKQyPT4YdmbmGHFVSp7fGqcL2L9iwbKCoKBB4VkT9iZpfHWDJ6g2RhP5VMnsCVkxCPNQ"
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
