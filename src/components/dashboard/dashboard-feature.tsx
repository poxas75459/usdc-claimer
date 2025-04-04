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
    "a25nuqaePJJyuJWPZy8ZDeexZMNNcjUaMN6p7HohgoEE6fVHDNXnoxLfMjsoH5C8gX2ShmDxct5TFm2198VVoTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTd5H4UYZHFdjthuJYdmBgBtycE2zRv6MdGdTxH8dXp9JpZzPP6Ps5c8Jwuv4aoa3NPbTRgNDVc5BNraVTx1wfx",
  "key1": "VwiAy7iqNFgDndAfKSGJd9QPhidUyT5uB56g9uhMxBx9kV9iWM7bXhnmhpMg2PwB3gf4BqNNqsCcGmqoPNWccr2",
  "key2": "4boBYfs1Q9HAReje1UmeKNsWARBcE24bBZ1frecY7j8iKoocaresoz4PUqVH4EJJzyPWjUBZaxdpTgvF12BNadhY",
  "key3": "5VxKfoDLA33Wjj4HYRmHZnWgMmJsGNsq1LsntjDWSmf2A3dCgctYQuEZZFsV1Xr5hmFpo2WMP8uW5zgkson7NTiZ",
  "key4": "4rhba2oWGQsz3iewsH8GnhDGirbVo3nkqu5cF12tMKH11sDJQM12WDEr9YXkb7ZmN1kjjnf2Bqgk2GaK5CFrgEYT",
  "key5": "47UQmudwQUxTP22Bb5UdPnxazSvabgGtcuY6YrzJcbowTXDpB5zSmUQNjFfsA7C4QRf2dfkQEUFDiVrLQ7uRorSy",
  "key6": "54SvEBR9DomKJFf4tBe3bC1EnKqXSjqeakfeQ5ANyViJixYqLYNHXiaqkpweJ4KeRxgmchY59AnDdAXjdEcYjUAm",
  "key7": "2YdLzsM8gpp6maWhmUH4oX4Ryjb38UnjpbtN11s8BUj3BmAAxoFe4C8aJnSuAAcntsmE3WgTRLxR5RejE7Jt41pL",
  "key8": "EKNwnSMYMVpFCWZ9oAcTMcRnLdCHUVsSxYZ2yuLB6n1eCi7RZ4SFevm1XCqt6kEsuqCp7otJGQoNR2VQ6d5w3A5",
  "key9": "5UVZBiiNg55mM6ToQwb7xwnBb863a3mtccFHTvRxBZVghsk4YtK6TgjkBLAfhk5pCBN6oA4xKKYfmVYmP5vYdvuC",
  "key10": "4i5mNrxCyHJ326yCjemM1h6yREigvjBYCYpWnUQh6TJqPFdo2jRiEPY8zZQ5KzsHHVzDTD6Ha7jAPAa1zXPu1eDw",
  "key11": "5jSbJyrhvwkLj9u7giB6MNYu2KJo6xxAL79VjaqcjdRpo7bPVvScDJvbqsruN3Hw7xsmDqaR63BkDFCLm2Zs4Fzg",
  "key12": "2h21DECKfXe2yiRM1u42RJ2eCFdVWpqoxE7DRye7oX5UE5wPAcXTs2CU8JUWS5E1TnYbgr3HtwibyegtaKLFUQRv",
  "key13": "4ssnpsysoejUWA2nDkma4Frj99s2yUukZqaEeavN9s1133wKQ9wg8BAtxKnE9XREPV7frrHeFaUVo9RKjUHMy8mK",
  "key14": "3ecZVst3tRGuGNCSSGLmU69tzPZoZGT6MPXVYcmVAf1pzRgDbp9fW2fkjBBMs3XGucnjbvv3myJxTLyna9EMDZLX",
  "key15": "62oDDak1aaZus7Mi7kTSeZz1F6pPCQLX4sTDvmwsjKbcuppQQAdk5VNx3vM8EGE1dJ7hzGWvdBUDw7sKucAgDcR",
  "key16": "TrD18QJaEjG2KppdkPzHKT1ENgF5T4MZrfWVeJcgZJ4ECxjZoDUHX8zRzxsM8Ubk1onPf99aVDxV9xdfyJEQfFA",
  "key17": "49BTjDA5WE39wi3Zh8Axtc6YJgBcscncaEaQAorCPAjtt4CPYJzjCJME8J4EubKAdGvQkCEbh7wRSYBbTY7UZSH5",
  "key18": "ZpLjkQZBtqZakELEr8uoaMrqjXxjYXRZ8mg2FJE371mfQR1HnY9XZi3p5vdeUPZ4sXe8eyUxTtNZicYu2UYM1Gp",
  "key19": "5NEH5GE46d9iSTjao6EdrBtHH59w96eZvXBwu1fr13iEFhCNGLBGfjE6st7rqBEYRP4XVrdHNVYKXu4LEcpXVVmz",
  "key20": "n9WUT368g1dtwT17wpzwuFTBFNXWLx8RJ8DDYQE5F3us8ZjwV4HpANpLQA9xx7MXeAj6noPC9NGpcgmjY9ZcW9r",
  "key21": "5zRyyxdKUjQGiVFMjuvfHAJUZMRsFiQDo4m28S9zfBRJQgEQGAKbJt5oomuLCmRw8GxMnukk9kDeBiqDDPLsBM2a",
  "key22": "oPHq7GSdNQdmFqD4SXKyoSBJon3VqCm49tLwmUoegk3WHXpSnXct53Xu9kSnjgR4nYwkek53GeukSxjRgUwChiN",
  "key23": "inNwpipe7rm5xLAGBDhG9GvZaBQaxgHEnj9ivoWTSTbf2ZQA6yoJmg6Jj1hvjs1etqCXy9DWps2nzwm3jdvuTuK",
  "key24": "2TdB7KoujTvDbZoUZrYsxhhqWaYFzSsaxKXHSPJBJTVEPXppM9KXQu4sjsHbZpNomkcsZv57DV5MQEW6DZWv6s4V",
  "key25": "Q5aEb5PuRZ3rSPntK4UppjKgA1T8KroYtPdYhh7yXGsssKxSsTychMCbaj16gmhyMevnqP8HGFhZMuia6go6cge",
  "key26": "35Vf2kJ1ev1qBu3932NE3bo4mm373T5eSMa8QztKd774o9BUGf4uYiXGyATmnfwH3Ruiy5cpNyZPsR21YkaGCLFZ",
  "key27": "5SRRn1PKp9yzZqWGpBj5A2TPpCyDTddieJWpLASwHWLy7M1ukrcxwzFRU5vKQkpYXEXNeefE8nZS9Qu6jgxFN5m4",
  "key28": "3h5eZvRev4pkQgREqB4gWRPQK8Ng49ND5nHNK7p2pNiYthNof72YtDPCPr82khKahTkdJRuw5X3wLMmfiy19W4tY",
  "key29": "4fhTdyoy5GZyrmhU8bUrGpr8AgRhWpSdvVpvDzKReFebpHsnpjk1Z1fZn4spLnRFHbvEuN14QTLnzSfKwqULuR2x",
  "key30": "3xgSBD49Vm5CBsJneP1vaJfzhuKxeAAhbW8oxmcQq3Af9QURQim854NF2eP3jD2JgMjmKvfAXKNqaMXkAkGb6z7A",
  "key31": "5mD4iGQuBinavYt6SfRgcVHJJ2DUG1mZvmdcBRwCC6PqSCxhRzz1egi4RcRpCfeAigSh5ckesiL2HSqpdwkVxoom",
  "key32": "4yrcSvfAyLB2agFgATE8v6STs75WVKnLLwMZ3gpbybcuLJNmvkpGLbrRWva6M1zURX2cpeajheVQmAmMHHTDk4GP",
  "key33": "66ib5o8XUUsuZtbPeabAV57jXq6vvt2zS5HphxukTtxbnmhdrZXJGqAk3ARWfxGS3bNHvN7kbjSW6itZremdodx",
  "key34": "2pCC2wivDeWHkLXzCboQQGKKypsidcG1dcmyzLikcXZ5eUqNXqbwpBio6icrpsb2djU1TFECaVH9X9dhypasgzfg",
  "key35": "658ZLXkkDyiddf3Bzh9wzXZSRfxkX6keRiF8DLUU57qXnH7B4rM25VvuAmxRLSpWzoSi6t7gYXhtb4tdmoQtJYBx",
  "key36": "2CaHcPKDSwa6DPR9jMRcaSFk6CdL682AeG6yAfMUL7xVmkoL9UicBBSxYwQww1dVhUUDj6w5kHNzbkzUxqMbMWQm",
  "key37": "645Z5B96So7UX3wAbXKH7Sr9JH4tVQPUGTAHjiuu3UhSRK1NBPH4bXpgUnB3RGy1Pw3Eqy8MWpSMm86m9wWK3hbC",
  "key38": "5Xm583sEkwfu5W34y7mtjg7MVq6arHheSNsBs9z8kq5EfgdDiGDiKxNvvbAk9CjyQ1VTjo1jjXgpaZo3es8JvJxX",
  "key39": "xng9w2p14JWe4CTKKAxce7Wwop7THyPvLEXJBac5WaUmc42ZSrcekkwiVAzpLzU3m3x8uAWLSMjuD64Lwp9rgb3",
  "key40": "2W2p3Sp2v5pSBRA2Dks4941F8NyttUWQKoZ5mCJSe1a7ELnhqDdfstxkXVxgPhHhipcPoE2A1zajubx7EU3y7PmN",
  "key41": "3iiTyUkXDG795f2kapAJZMnpwPQFvwDBpN9wfN2aDUC3AgUTRwh8gKYi4kbyYXL7ozYjAKYUH2EYYzo9r6ax2g91",
  "key42": "2yEbN9JNqiGVQQdgChRKvjzRhvZG36TQWqubX4w64fxRiquwogmRdipKLuoy7dzMpzACxuZq4n78X3K6nk5km88R",
  "key43": "4c8qEyfDJ8j5TTt9UbqWwbtyF41wCprJsHyKD8Rbph2wGLoedbdwHYgkBQcEQbrjgbJoTiDuSpbAKrkQXEHpZohP",
  "key44": "5AA8snqC9jV8TXMHzKRk6bihqaeYLqx8CbsJcQKJdWiuAFCvgyyNkbmh7SF6CTcAU7Qx7jUC3Fd6SCEBaFVtrrVC"
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
