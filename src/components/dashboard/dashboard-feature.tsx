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
    "3k1uVckaHt1RZPcgwn8UJUnUU5hXqf15KCyrMzBDYQZgQG8oN5F2GY5Kv2YakKQNtHxE21C4yUQzSrkDcNz9hLKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qd9HzYhBgkXbyZYH7PMa9AMhx2aWnn3uNuyDU8SaYxLnPmHTf9nXNShizQkqce6LrCZWNj4srkYdpdZG7dNKRyH",
  "key1": "3Jo8TE896tPAF3oGSqBUnAPJ7F7wvHjqoRnYxKoPyYcQLYEAKaUmf4CHKytLiYsHMhe5XeZ4UiVDbuxdCvKwg3DN",
  "key2": "3s2XkB5rk56eHpUNYUQL3cfNED4aUkECWgY1TzW9FSSZ4hFefrG2dJbAXPnsSR6H73Cm8caLhrBSRUhKGJrbTbzZ",
  "key3": "H2FMHBkzgFVsx4yULtRaVHpMnCUdf6EJVSsW3AKwDfxjPMbufFko5FShhSiCkmxrsbQVnyVYv4tfrSxeyvTBeMt",
  "key4": "aAwiXrnBxR2GSXqn3hKWUvB7nX4FBnz2G2JeM3aoeEyhG8yfhV2w76uZaT1AELEUy21fAMmn6SNPSBDcagRFFJ9",
  "key5": "5V7YjpYy5peVGnqeFZ5MvL9mHtWMamowvMTBd5uinsDWeqs9JxrdKU7QAPNH2LarXM5jUg6YmS3aAqZD3byMbvgS",
  "key6": "4xRNLpewswrLfLdg9SzTaLpYjrA9WwaTE4yVC9rpJC4FFSUzRcpPMrr5BPGxJ7CZn9mAxtUG15wzxR7gzeN8nbYP",
  "key7": "2a4dFdDHEeFWABjKUFPuh3qBog2pdnHRpWQZa6Ca7f1WXj1xeg5gZTr8cuP3qcUU2nTVajhAydB4DfVi2gieurTe",
  "key8": "5JhN3h5CvZP5gYR2ALEgfC5DgBftoKpKtdiSfq7HwyahSXU883wynmFQM9mnXy2yEcHwqVaHxGtcpxzw6sKhghFp",
  "key9": "b1dZv81sZzay3RhPDa3ceTL4v7k6PkSbUT2h6YbR9oecdHsfJo5c3316wZuFTBP9Rv8Fw8XfiFGjwgxSi2uCG9k",
  "key10": "3KHo2mxNzC6NkBhqUtbZgZkW2ZxngTnS5VMfZKSoExGhYF1hSEY8hk5tmGgwwP884Gf2mqSdFDibd3H8zGXdw8yc",
  "key11": "4rKgvUACR6rABo1ipbRbVzNVXpruCVjrLb7y66BzBU4DuoEuvwhbzTopGx8JMrKfVPauN3xvxMrz2ZbRcsUXDhHQ",
  "key12": "245p5PPyxahGr792kEVs9MtJjVLTHcx5kGXGJLSKGQBcHnXCEdE2CVqt9hanUFzW458xX7DZNHLUzYvzYC6eu4rC",
  "key13": "4bBWgAW64ViJibfhnkfQowBKcM3hfmvkYpsGWJn1e9t5aTE7h2A7mnLnXd1vPgmtF2SSM4r6zUcLNqTKByC6M7CG",
  "key14": "rYdod8HmEzMGyDcXb1NdUfexHUZdrzhuqHUqtHLDb7xXvHH2qGRp4WqMHNbQbc8oABHY7M9Pk86oyTLZUVK3AMc",
  "key15": "5Pf71m5LbPLu6hcJMoAvmuzV8PcjHcwJ3EcGAstFHsCVmZKhNTnh97oC6Y3udLAfMwo6dJC3UjqG8gGaJMym2XRR",
  "key16": "2Zy6JSoG4jcknL6dub1haLpoSvAZtXL3Ri65t7Duhp2soAV8BzUxkF7Y5gYdxtkpD3VyB3FfSMhtf4Z8ZMpRjVu2",
  "key17": "Frbwm77CSUEeu8f3BBwXNXiQJ4m7V3PxNkGdRJWmHBHtVxfXoxNuevTStmX9YLh5G2ntGc9u4hF6CaRoKStsP4J",
  "key18": "5yVhNHxqG2yupjrhuDnLrpGLj8UzYCnf15ka7nxLgNjyRvLarRZPScpo9e3HDkherbUWb12fyDpJcFcY1HBkHcgg",
  "key19": "nrMbJ9NndFC9wvY3RzrMPqLQ1j8VrBwhEGLCPwHim7wVFzcu9pe72vjL9ZDMs795UBw99R22LWKoKaobF5rrp3x",
  "key20": "4o6AhrtCJz469XDGVNbLyRzkJdxLdkKnDRUUtYfs1HrXCd9XU1b4DpXZWHRKy3H5q11KRaAu4otygWL95zmSwDrg",
  "key21": "6376EdXZgM8V3gMWQEz1KafnTGDrZB64q5akt6fN7r7LL3o6fKvD7idGhnyRYfZEtnKHYkndHZqhW18vAaH14RH6",
  "key22": "3dXAjdqjrLLGGnsxACf5dLDZcVEzk9euWj9GYE2oJxeMxGj12bWHWSWyKuoVAwgVozYarw7yNsdZvruemGn8bY9N",
  "key23": "3DEbC9dRGQW3AJrpmk8Rk49LCAikXRhinpGzKePfrBHGCNKHibjjYmuun6m1r7MaSPb2tE8cpRUH52yHbMeo5RXv",
  "key24": "28FSwxU56bzUfwVbUwzvcVXEe9Jamisk4U8wHxu8z1deWrhagaH1niAkSQVbhWHGxUXaY7tuDH3f4awU1Z5itx14",
  "key25": "4evVGutxmoAsVQYttnJq3k8tRccAaBELGZDPuvXDvJLePo6vwcj2ASGo54xNNWyGdyg3EarPQAye5d8XbcdtTskZ"
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
