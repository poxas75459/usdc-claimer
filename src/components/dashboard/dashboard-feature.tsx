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
    "4Zte4SkwAbGvvWzNN2pX6iVVBzdb7aHjDyCf9hLKMiQR3hBiWd7HHMn4zk8Zh9wNuJPH8CAkseAwqeb5nZAPQASy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNVwE299ereNQCNtWckHDGLPq3qm4yHRuapXCPWExhS6P6QA6YX8DtJoGpYBmpNzwdiKG1Htqi19vZHJrUB3gL5",
  "key1": "2Ct92VcJyGGeNzznhxy7jLUmEUPe5tmWEKzP1SggTfnzjctGUXSybam7zKGw5SkE28Y5JJNcPcKs14XRoKDvVJR6",
  "key2": "2VngCuisjV6qKUS4WPxJ2wvAU6vzB7G5Qf8T6BM8b8ok74E5PcLewu1FMYsvSiyjeDFJcAAJQSGjBHoMvPYQohXn",
  "key3": "2iWMtxWBJiNi55PUcgHEodLS3dvrvRFz9SC9SxbyBGPLtqAyw3ooJiw3JbskTjsYFeTAEpjXqYMqmJJVuex1wfMR",
  "key4": "ACb1y2vFjg857T172B6gTRpznU1yxDJc2rPxxA8mCM7zVrXmx8GZBoWfxJfq5Yo6gtkFY5zrTjXPRDPLuyiaAxk",
  "key5": "3ZVUjnLdtQe9cqdgJRgKoiveKZQ7eze5xCKeB9i2iycx47HVMhmU3BBvBfCAeWGCKekJnFwvcT9S7YnR1s7jV4xU",
  "key6": "2WzaFLWSGh5CvLHCrf7vPaHZW8tkcLCJMbdA1C1Gwhs44WtNTPQ6vjnUQSFuqKw3qpKmA5iXr75J7NiH6J3k7YGV",
  "key7": "Axi85ATzsQTBQ2CHeMiyWUGEwQL2kFi4ngJtDvgAhpSeygP6tLjqUAccqcPy13mJnpnSEusgWL6Ft1B8hvuHbc4",
  "key8": "cHgE61HfPjd2oMF5hsvgQzNWf2NufPorWm7A2UfU8MuqiS8osTWxaye6biEfUzQ2T6mYFHvuaX2wb9w2Vi19foG",
  "key9": "hEWQd88ZddBvtKpo2Jd247tj4to7xoqXjvaQgWXbQCaNG4isuVizh3hgVrQQdK5RVoKPJycixG581EWkFsqaWqz",
  "key10": "3vJdfc7vezARzdvz5QodSdLF4iMFXdyf1YvVFHSqnXmpfo6VTtYFp6Y8ASE858rD7B92D4ekyDsbn9VCP2Uwz91c",
  "key11": "5bThffgpoyVeGHWP8oufncB8gcYZUWKnxN4pT4onU3PXejVrweJKz2XjpHDa9ddNx5DmsYFdtwPpGj7A3KqhVsfQ",
  "key12": "2mvMWUBqjJrTWLMHL6Fg7gN1Knag2u1f4wV6JD6iMSLdYWEwkjjj96bTVUbXFZakGCEVLnvj7BF3ELdcVVs1rAB7",
  "key13": "5eLravz8e3tH56Yb5YGppqiUXvM1CUftEaGUJF9tLRfEb5s2WAh1FLNqrXvENg5fqY2ZA37KYFKQVCPM1UmNaM8m",
  "key14": "StssgK2mk6rZJDipsrNhKWz43vR3GVixB75bSxJ72o5f9pDPAGgHvkPoo9C2yKUfLFv5FNExF3EFx2Nbm4CgG7F",
  "key15": "2HMuqBb7RVtpQUBCr1BWQt3ucvPDV4TB8Fab8omG21sCFBEMwRoAZYWfw5KpX6NXBS6aozZpDb2FB1496NXRwxfk",
  "key16": "2kwnkwMyuYmt9HXTZvLm1fnxQjtP7H55VYUz1LbLXM7eDRurFFNpyRKQeh6FPx5iDSsnENz3vhEmNFWw4uoNkvNN",
  "key17": "25XCFUK1SocTTJGqjc35j1ejM8GQGuvY3t7Cytyf9QVzf9huwrtXFknfrouLiYqz8mhzzUzzd5cZ6hJLNJjRNGAe",
  "key18": "3vZbWXBimW25cEpZvgDYbfvenbJA2xtdwJ8jtWSKu6cykaPnchpXwwK5c1sE6jeWdMum3Pty4TYyQWhastT4FhmQ",
  "key19": "Z8M5iGtozGrTz3hLZqtnFTdMHvU27gpFx5x34Z7QEYtt9FatrcfCCL44zNuQMurbHrZ8ebFPPb1da6z2ZL4e9mX",
  "key20": "2x2JgdiHPSJDQkokNZgfycEdregC5PAhiUNwDgEtea3xyfqjpg3eMQH7zgG2dLWLGZzezqHBA31x59nBrT3kUUB1",
  "key21": "4bqdQJM8kfSYU3mTVfvJab9UrvTNkiSzfb8vxV3XSfcUAPsKBEVch3AzTdcBT4nWx9annAA9GdjZxhEaMcu2723W",
  "key22": "4LC1G1ht7gCS9eKKmYZuQqEBc3gV7jZb9rVSV1TtrCGuAxyJsEVXTgPymWUATiBYakbrThJX5Pq3UGVX7ZxpbNu7",
  "key23": "2Y4h2wWhcLSNUFWKppKxseVdfHeJMN76sABwaEDq8m6Au5Rkog6LVTqWrKqoYtNCygGVqw5uJHXEtHkdoDt24xNy",
  "key24": "3Cp67QRGwK843HVcPcerZB85faba4G8KqKJ6cPR3yxUsx8LA6GnAhZBdwH4Z9FHgmU4m1JaMcDcf7UwaotY2TSFE",
  "key25": "3RoWTFUYR2GwmSHdxXc37K9vkg1aCvzPoRuPYUmhtCn3E9fepYuJxnsoPQjZdBnxGyHzaMCJp3D26tdSxcMMQoo",
  "key26": "3u4pzPC2EMTwT4zFyfwMMAuYbQG6kDhy73emUq9wwPGGXDogqohKEdZsfP1nyJ7ozSMZH9uwpWS2atHUkRXYwA9B",
  "key27": "2GXNHN3K9DLEeKrGgn1NwhggmhciYqvomJQMkEvtvT84o1WQrpaJr2i9DzAKrY31zML9ANpKaZCxyU39W2hs2ivX",
  "key28": "5nR4pLQ543P4Tv3kTXmCxatit2C52DiYMruc2Zc6NBHkcDpRykPbWdMpnM4Qu1rtWGEciU5uK8Lf9EkFkHXybew3"
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
