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
    "4xTK57fVkw9G3s3WcnHG1k14iHKiZL71cuctfiMSU3pgw5ybWCjWxCgnUwG2J6NPusN7iVkzCjKWPe3etLgsaPie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HEkBzBKKquSyGY2wPFr1PmhJqNdnno2dvuM44VcDCV3D6v6F4KD7uHUZ5ZeUcVDxgs34TGQK5wzCPTvfnR5YygN",
  "key1": "2RYvMuRmwF75m5sQZwZ81556jfCzyRti7QtF1yDeyyvkbEG8UbpK8V2qxWU1TmHAQevdxGHuqueUZGmjaukfWkH1",
  "key2": "33MA74RphVEnLSpsfGxsuCxk6HrNc9crY6VZd45NnuSYkDgtNqrxhb59ENtTJvvQS36V4J1b2a9MJLYMHTBzippc",
  "key3": "5zxTepDLdFP9R4CidGEQbc4bNtYcrGrk4id4Xm7EA5Dv7hftjtYYDYUtsTcuEyHWjyhyX9AixgkhxbEtV37tB4dU",
  "key4": "66hMideXnxzHQN8f3wYGCLVNyaaUwDFhSQ4gg3rayeLhEBnHwgTWZG4Q4N2sQVNwjPm8NxCeAy9RLpB4fdTA9y2E",
  "key5": "TSVPyc1y1zYbYhTEWBoGhqR2qs5Qqb4ZstBCyv6pPuyruhHFHTgxr4dus6TsSudrAxzUCZBaZMfMtazFfLqSbhE",
  "key6": "4QjrnKKwU3jMTkPhz1ivsB41xzHNeFzULuU7o7Au44T1DzvfPQwwBYPgv2nUYUgBgDeRwZvKC3Q8W7RGrjpDfQRM",
  "key7": "4Z3mC7i4BQcQU6SSJpmwGLtqFyhVMoS8AvVf6q4VCSksGc3mdeafVSgPKydRCzuNeRkNWbaZC35qpTaPLvdijQCV",
  "key8": "5VvppZfLZj2Pm1z8Ex2rsMBHJHEWRzS8C6QNBi9MosaK1Z5nKdZLzGsvGuNsNvp199PvX362vkeHjTUM5Hgjiswa",
  "key9": "4ZyCSrNt4VmhUhGAN8eKJBqSgKmQbgHymy2XDwJkyY32Rn4xodJhRrys2k2tQpjX8qoaRs41ZNQEUjwkvH35boWK",
  "key10": "ZXqsB6CKdiTyw9GmByMVGpbvXaeDyqBdDsEdnACtq7aEZcNiCmBgENCDHRw4cuD6vr2paCV9kjaaKZSk5m7EhGb",
  "key11": "vdte5sknkBF94tnBAnMYeeWK7w9DxBjQaPrSk21B2ceqjniJL8wopnyYvCKBGYmoZ7YzrQnCqMhcSi8rsjPbyWx",
  "key12": "3VY6ydT3Q7nhTQ1yoSFpsKCmXZSd4mJ2vBYCqYFNthzeFtRZ7m7yYtbuzfRrGhR7S6svdZYsBUcUEvpfi9BPsS2Q",
  "key13": "2EET53boQgqCJG7mofNZ31rfXUoQYTih2MeQuRvi64bs7NcmmTfNtSLEesPoacmDs6Yr9iVMha5ZQYqnbWwdc7Ex",
  "key14": "3M9jAVw6HsqLwDzxkTXA12jv4iX9pKnDhado8quuXT79ZxsVkgmFULwEqvgw36TefJMEjBh5TTQZ5A8dqeATus2A",
  "key15": "5ZjngAo9Ah18iYbETJcm12XoyvfGP8SMKDqYXLWb9YFgY5G4JbnB3dvjH2YY6oCow7s154qFqg122e8T2gxjpgfX",
  "key16": "4MFrH3CarQCzUA8cJp4sX6qYgY25kYAUBMgRN4qo1dDAkvBXDPkq8ctUqfRjHJCt9cTGT59vkC6aj2XsWrK23BMf",
  "key17": "5Ke148zEFXHPx4q6AmfsTtKfda6Eo6mZJWHKk4B8k4YT1LaMHcHzegBwkdh9N5UmJV39xos14BMy4PZ9wKS44Sr9",
  "key18": "5eJfmZD9QZjyVVLDxYPHuTMhvXi1rCYxCCyriwguTbCZB4qm1Z1UhGrmyufiT5PeKQ4oKwR7qszqhoNWfRRYXLmV",
  "key19": "2WdYCQbBQqjZePoBEhJTsE7h9miVsJFkXpYkLvwxiCwm9NTCouYPMXy8pTxu5cu6a7PhDr74f6SzSMbFmCKCeTC4",
  "key20": "3U8JuMo3EznsNQn3Am2cz8UBWae4Ldg6XztR5ezsEwQ1ozdP82rx4CnfLRupbtuinyReDPv5NGqATFzbbtdJKbfB",
  "key21": "51yErCP3Bst4phnPDAEPFnMFDTVxVBnkoYbDkFgPMqvvKJ9FsRgi3XkZNYrdhsb2EshSQR8TdAc4nRz49F46P3xH",
  "key22": "52GXqHs1AuAEvauZGWmrkQ1Ht4jhMdEXNGh4Z1Msn34LWgLm7pgfYvJRpSnGZrvTBkLUEtJVwEfrg9GebHU3kMfQ",
  "key23": "3qm3DZAGUwTV61qskjVJjAfxMENiCWVt85VFUAFSFvyZAySWdp5nMXbVvKpGj9NAsmu6WPMpBvsk1EfmadXiETd9",
  "key24": "H7SGjsQXnix1C6eujNfSfGbSFsVV1Xg2cRtpLkN64xAxzXKhyZU7ScqvM8L4jGr2MMQuaGxAVxEzDobEhBb7Zwo",
  "key25": "229X1Hy4nFeBFEpjHEa91TKkEbLGQKigJKKuyfBHBHtR33fdysdP63kUYEziFkwqMEXoMRVoYBrmWJSDgYnPBDwa",
  "key26": "2CEU8U4PHk5P6GKGXQZk8LRF38U3ZB3MmQ4KTZtvPFmWRfNaziewCrUAXAqYmexXsMkx5eg1dCqCYEv2ewfSiU1b",
  "key27": "5LwJmCQXbtZKwqqrT1izeDLMY443imPBK5n7z26QSTP6RGzEAJXmqfDCAMKXimNnsh1p7zP6RCvkFeoUj2pZBZBG",
  "key28": "ShnBQncC1xd8FHRPRHkYJ6E7Sec27a9TrQPgMb9kWKN78cb5eS5YmWwLVtcojdG4MRUg9KKRTJm8KjjroPuw2G2",
  "key29": "4LtgUbcSnABnwSNa6mvSijom463vztUaLHp7cEDZisEuS6cZppXuNnuRvDKktmWFCRvWHHrhhZectaN9AvP7uLYc",
  "key30": "5rnqxabWy783MBo2mcZHFzJNxA7FxPtSkrD99a7rtYHCrghVRqN1zurY6d8t8uBXZoLPkCE7fXvkqBh8sV4VcieR",
  "key31": "3VbrkBhZWkemd7nT7jdqgHNJWuDWqkqxVu1EcgxTNhRgGKU4MKpPL57Hbv8B9mM1rWp5gmJkgzDyyxSHpSZdQaVQ",
  "key32": "5bhCaMsyA3sPZQ4DPi9aoZGFGjC4KexaiCMGTVDsn6BuSAV2skiGUj4Ee55SaefUv3avzxR2iBbidDdapJ6vfFn1",
  "key33": "4pUy3NjNvK9SrPy6KMUUCeMjQaDBzgtsAiAUXAHUKMmzrReY2HzPL91899fDXr7ohGQx1Wz2CJuEkCaM6M2cN6fY",
  "key34": "47UwYqjzEVAsTfVRjCqw8qFXPBzuACMgoU7BxDgyuzhnFmL41eKzSZJoD3ehurd8PWs9tZWsfXiSuYfcsQVqfmiU"
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
