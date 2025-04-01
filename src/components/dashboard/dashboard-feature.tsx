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
    "3JWeDBAJjQKvmVRPkUQA6VyE4WXevu8uUPaVRdFRfX2EgJcTh9AXnedpuKaQL275RoL3sBHVHNmGBAXAJ9GVa5j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2afddoiAg6GzGAfyZ8JNeeBnAhJjVNM4jPk1JanPfJLdE7THJhxMQAATcwHdVVRpmirBsHe1XVSZiQocEHg91zh3",
  "key1": "351hSzrqb1WKZ3sEY2ceUuEUxtgmbT3vA3VbzLEvek4Dv1JxaTLR6w3UhaZ3TbpWyPL9x1dMEYGuqg8NZtMGCKms",
  "key2": "4moGfSeYQHApi9sFR6uiz76MrhirMTSQs1Txn2Ed1qWQk2Wc1ta12aHDYMj9XofunPHxBJj5AzwpbRsjBkGuzrd2",
  "key3": "3NPGaFWhpmi2bwn6vjwvJEBnhYgvmL92VJdnXQ46UY8vxm2j2wHXrxyjgxM8wQxdkxEc6eQDM4bwQwSchEoCW6cb",
  "key4": "3rFpr5Pm9vGhHKzumBFTeUGQ5HZmX52QNDeZB4WCURngoDqeqoevfR9pK35jfEtXiVofqyAmye6VAPdNn4unJbYT",
  "key5": "4y3bbkmJTKHuQ4bDTdMP9ZH9umGYWi1fwBLC7TSLhtrcBLSSzg65jXHWmSk6CmASxgYUH7y6s4wRgGJbec8udYe3",
  "key6": "4PX2Jrk7voY38qbFsqBCtTvkD33H7THWXUATcTjRp8jSvUxUZdwp5Q2eqyLr9N9tpwsog7hDzn4dLLxuSdE9LW6N",
  "key7": "rrZtsS1Z4jb6ZrEqXCCdYeBxU2UjydHDtS5VtiPQNd8qBjT1mA9CthHSDnSPUPTLxtq91YEsbveV4NkSCSVJJ2p",
  "key8": "3mjJyctrnJdpzxS917XMA2kNFNtUGaCR7FUyD2mpkLq5k5J8obGKBjcLtgTDqqfksPDWiJboQR7qBTd5nvcd85nf",
  "key9": "3LiuJN2LEviiRdjD5cZCkHQnjMxZoDWNeodPKaMee7RbU6XTo19hff4gAEfPzupo9NybxU8xhosptK1ifkC1k45g",
  "key10": "2NMGGHoptyeVJoVwPzszGkhKdXh1ecGWpUcUfULvT5UPdvEdN99cTBYyyHh6WSb59mknqpyarTDVZWiDb81E69wk",
  "key11": "9LpUtpKxf5UkSLUiSbexExXvMMoZ5xo6TxdMAcv8nzWjUjgRrFvT7o96g4ABV3H5MPQFKjnc6XEtQHfCwfQT4W3",
  "key12": "4bFBmxSHtf9XoERsovEhVagFA3waH2oPsLPcksNhJbKaxLwxThz716By5MUhf53gXSsmnPEQP7N3qxwiAh9UJ3K1",
  "key13": "5WdSArbJbXupGSEEX7X2xAB9MYeNGjMR56sv4C7oRJyAUkFNse9db1LoGhbCTtxybqJX1USTYaPvk3xgzQUtZrsa",
  "key14": "2ovQvHFrqMengG2QVwfJg4Hb5bwhkmi4tz8cXyZGsq3bhK82iPf9nfEFyPoE3r8t3ccuGAC1dPALEnmEav21aosB",
  "key15": "65Gu3WXGSKQ4qg6h8dyZqdS6pUBrY3rkd6m9cZa5d3j2mubN35FDqaQtzvRpGAGnxNiJbZBpsBzAbce8B2m8Kcep",
  "key16": "5ijoM7NES91gNicXzsSMWkHXFDxKbefmHHosE12qSGRUsMXEVtCyELW7GdMRAhyNsVqdKyLrFbPT4cW519wjt7hf",
  "key17": "dVThDhq5TbeEfHeCZbcyjoZm2gik27fzJpQXzoNTRWvUGV6NpstxaECzQ3KQLMmwZ86URM7i4f2c8CwuSu6zZMZ",
  "key18": "5cWnwcjkQHBqRCHE3f9ThmtgwhpGJB1xtbZVUnMViZfmqmV7HzpT9q5UF834CEG3pZvRchBkoVMyRaq9DC6T7ByJ",
  "key19": "2SJ39R2G18dKeJNAmBSnBEh9XZ62nY7YrkyVyRaGLSgucUKQ3WDD1MC5fdMaKr8wFPJkR8sDdLZ7WQuHqAf8Gx39",
  "key20": "SbTdSQZwCSRxju8nZPJwhhZN7r62urLNtey8DSPKaGmwN6C6eJGmk39u1WxGkKQsXkV7MNWUk1rjoZQN6ZiqqWB",
  "key21": "2YtDZXW4dVFmvJ1VZKSG4XNsnQKTxhE9ky1YHGsCKb5UZzAH8YxqBQFySKnYgrq1BMWmqVt5ugTjieB7KhxERZV6",
  "key22": "4uQdEnpYRW9Jw6LMFLBvQeg4YCvqWRqRzXJko7BnzyJA2cmXjFjNAL8Ecmb5dX66yECA7EaT4GMuiBAjtGXDd5GB",
  "key23": "625WMsCXsf3YWLydM6ePdpxiCnvgta87XPzKS4KeDkeSxYrHw1DDieR8Bp9eKwZ9rEXXfzsEM5fu24HbNRrLP6TE",
  "key24": "2oXo9u8MHskNBZftmmR9BkghzMiB7BfPthXkYbwGkmn2HJukPWneGf5k2m5dNdmTpfis4SyXEn1aKLafB4wncf2B",
  "key25": "3Bfycdk8nRArhMAc29BBWqYhptQZ6bn567rzEyBW9Uhy6BoxxrGNf9BDDJVrDvB1ZESeBsrNWxdHfyUwm3Z5Bwhy",
  "key26": "5dKKf1gxi1t1wZrxWZoMDspxGDFVuzpJt9uGwsXFBsbHPGnFRDFR1i7QK1z9GxKGkNu97qhRdmoGpX1gphBjYZXe",
  "key27": "UoDzw4s5V2FNkpc7eDtgKATcfXzPtyH8Lw5x69rgPRZoWEYmT9TL2qmsAXTLd5xHrjhPykJNZAkpEw1W5HTnDp3"
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
