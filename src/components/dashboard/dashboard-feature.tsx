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
    "CA6rUq6aRH4jnP4QfDpiBjk6x2yn63QVfXH8NRKcvvvz9i3GSua3LQjc2Vvuj7YbaJayBV1BknYp8b8Ghw1nvji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StDcvMgJuyY7yYvBgtgjywThXVsYF1VoK2yD7LAd2VqLTHYRWd1s1oCxXeRMdirzQko25QeGaKPaDPVBjHuUuji",
  "key1": "54mLesQ5NSoXQDLP7WdyUopwRo6P8jvPyJtES2MSFoBAkiVruBstWKjA5VdgJ2smBGFdKVCz2R5ZkPYEKXD9Cysu",
  "key2": "Zd8Rm1xXsWcdd951dXnZYyaXGx9P8XB3juevsBvm35PjZxA4jrge8cGRECaMJ8247WLgc3BrZ6ax4HwnJnoRtjs",
  "key3": "1NstWJajQneYhRyhDgjUncGEKUZNvkEt69ef2qQnobWpML1d22wcySu1XVruG5D5JspwDRnWiLd115CEMveGCr1",
  "key4": "4usc6MUoJTXrw8PpS6g5Lk6K1aJaWDm9UdpeW8sbbgGqnEBrnvkrQyGVht3XthpV4bXDngNRjD3RTvcHqng6a6Af",
  "key5": "yeCCnWEscAStT78bZiEQJqVw8JLd1PjkZXsXmjCpL8tv5DeikKPrNogcPo5Rz2UZ3zTgucaD2q2UetC2pfKYRmt",
  "key6": "2c4MvxBJmfr1VWKKKmqvajG6xhuzWRMDdkmsk39aGK8oug2kBiJYvumtHYJrNerAWgfdjKjKu32CjqmKdrRJJRKS",
  "key7": "4tyxCGDmnsuhoVkgoZ6donTrByyMBfaNrpYLuHnWsvSGbs5wCVxQ2g9j7M1RMVC8NNF4noEGdi4jSLV3aYUccXvQ",
  "key8": "dvaXtHYFtJhWVR2cWCEZP3knconUdUf3AsRbHPrjRj8AGqPK44sEGgGiW2p5Pfwqeyq44Sb7LfBkVVQexaa2bAv",
  "key9": "PGo6ud93GSFKtqKHH8VQNyYLJe2g5rZHGeG1i6jTR5v2rjNHJu9rh8YZCvjVW2hzQP8iXz1dheNGjxXEYVrJYLY",
  "key10": "hHVruHTfv7TN5DnM8NqFK6oZiWKTtBEX84DfXke3Z5kLe4rHhfsZutwbYtQj5LhJRF6iHqHmBd7sxJbeUtyiL7d",
  "key11": "49PPCAfNtHCfzjqjmXmMVm7mxUSnMDoyrW5ugxsvTnzdrJqFDmWP1WRCeTKcogrhWtT3wxBnFsgz5t8pge63mmof",
  "key12": "538UHzEjTSF8q8mnybuVtVAHUwsFjcRdEwDEowXG2F6uAmv7oW1JbvsSkc1ezPBAkwUy3Jzv76o6vy9pHTA6YX6b",
  "key13": "2ZnhfWbht4RWKG3ZSHmGJro7w9nP4Mghj64KTtTGeUfUuedVRZp5haHjjSvuac31p87ezzJ6BNQQBtHFqU4A78c7",
  "key14": "3XYu3xV7uFikLXrKW4LTp2fTBbTFTQvJkTaVAGHWLGGaqCuKX869Yf4YmDGiLQVVVse5uqSFZQGjvQSSGMemMPNV",
  "key15": "2rJXgFfN7buN33YKCFPf19dAeNmsZG7oXh1bvgvd2tV5fZ3kCtSCe1Adt9hS1ZYVW6ewFyski4LGsUENvYaoSavp",
  "key16": "2LYyZeDQ7LX3XZ2KMM6JmUPJUEuQHnhbhN2QdAF8i8ZyonMNE8uHXAxA2qEyw5BQX8kkEUWLcwKgu5yKQHGo2363",
  "key17": "wsykuU7je2MwibtLuPRvNizpVYS24LvtQupuVQyXSADiofpBVJmUBKMZPAvKMtJTJCDWwDxT7NFisNWwf8dggxd",
  "key18": "xTf8a5ruKXDPxKDJcgwRc21UB6DG1PiNizXfTNevreKoU3VcCGMXbYpYpu2BZRttnEU3DJH6PRUWznpSGjZtLJH",
  "key19": "3N9JC2dCiM8SnVNibjdyKtaBbSzgRtQTQxGnLBnWskPfWTWDRVh9Z45rWViLXdtnK1vvt1tshUAHuBVmKxYEqPK7",
  "key20": "3Ya7mQERK4vEDU5XNgVuiPaWyeYvXukiuv5C82S3GAk3JYVGYXaHuije85SWQA3WKDBRCiuZuYiTs5k1dv8xm5wy",
  "key21": "B8SpCUe5rHFyih3634EcdAe8MurdhfdLirWob78dSVGxNweAjiCu5r6UBd7WkyTbGYQ3VWF21sTAKXHSGV7kiQH",
  "key22": "P9sDsyWST8pjJhBj1SPS9BpdZvoJew1qKitqMHVKvzgSXFNJj6zgfSn9KtzfzNk5RiGopE2TC4cji6JSGePxbns",
  "key23": "4gv6daJFzhrG1JeRLkV8XqbHbLkcms2HRgoyaWismf13Z4xBuwaunSwATwBgP44wqbHP67328kG4varr2gj9AuyC",
  "key24": "238H7wCuCF23NRyfuBB64orAx5gXHzed91kN58nR7baPRauDVxkZSEssYXwByqECAdQ48vGZhNotM7UtbN9TC79L",
  "key25": "2K8SgDYtiKREibaMqDbMZngUaQHxPgXrDmhJcsMejj3AYmmEouWoWwZBAcKc7Y3jU53beB8erTa7Jsjvy7c2V2w2",
  "key26": "8D11RAKeHihfbHEMikXGs9J9jKbASrgNwo8wYvJcwwcLAqjbJ4jagHzmcPcdNLmuBBX2tC3ydMef3QcsywsdxTC",
  "key27": "5GKyNbwT9GqfqKZkrN8km9PDY9hQ6W4vgLCEg4adFPAGBECj98T5CQv2A81VW9Cj2MDd8gp9eZ7XeHNsLbpJdGm7",
  "key28": "DfzUfgvnmdxo3zjBxyLcrjp8fj4s2pDHd2t8ZM44uNgpuvfjHQQvK2n5uKh1Pd8XfmnybMY4BFxkapP2gMyD1ih",
  "key29": "47Veu7mR26Ef69fds5FjmDA7dfMqg5Y3Cc541sWJKYzH2wTrkrsd98avDSUUhfcGBkN1XSXt63r6wmCbTQcxdeG8",
  "key30": "3DeeshoZ6AFtrw5rfEUD5zMnh6DwDw35cPa4yuH9r28kRa4YhQj1YE4mdDtaNjxqYP5Zd9u57pWT9oKypapJonKH",
  "key31": "3eTbFHG8eDMtRTm1W1kBs6eavu69v9XtPaRvqhUA3H1HggugN6yEk33bmQ1mud3K2iX8DpShsirGqGTBii7dxrRx",
  "key32": "5ZPTPC5PTNvV1sr4xGRATLXrtMMMBpMqJsCN1chXmKxqNciqsTcmiwuxfsyjU3tEJwj7RQeYp6uwdYcb6F7cuLCT",
  "key33": "dtcYe7GhLS6AX5kj7gaDFxWevKBoao2KYeXg1fPzBNGGte6nxj8AH5RQ84kGjd9mcnFHv7tQbEK5sVjPYBksv8a",
  "key34": "5eSoKH3nuFccRwBSydiLd1uq2ZmpUras6dkmHSutDoniT1DJ2WQhyXm7v3c3nrjThyV6Qb7WVhhEARSLvzG1et26",
  "key35": "3hJTfQapW7vPQHoqg9o3DWH9VU75mAnnpSm4chFsmikdTSjQLDYNTnyRno7gDoGycS52auUuHbX3A9Bh7qXTjz8R",
  "key36": "2qayyV7RjwPn3kZLU1WWUVUHvJoy99zJUPnnh1EVYUeuTrS8MktKRU4fMvPxH5SHoAV8tyZPL4fGDvzyPx9UCPHU",
  "key37": "4aRuVMDMjhcziyFPWs6Rko8mbgwX51qKETKc61Y3eZq4xHhP7CydieTjbRtthoEmUdiFygvBAKfNpYw5SLF48h4F",
  "key38": "3iSdtWNj9qGT7BD4c1Jksz3tbpW1GzMwnxnxHdamiEvEhUYv8ggUq1vjzvw7P7GqcZ77txPs3YWW7cVqafjHZ64L",
  "key39": "5tN1GLHke157wzY1EuqHqTDmuU1C3EgxeiSXeVH7Dsr1aMGJYzbe6AxdozFkrcBr6WN8w72oEhjmxTXDWEcz3bLK",
  "key40": "3oMCKsfbeYHeXEyns4i5XGgtUf9PVQcC2Xh4La137t7R2fsUJon3VCyMeWtJuDtDQgEg4748w73XJ2SSoocbG7sh"
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
