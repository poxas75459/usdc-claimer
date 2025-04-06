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
    "436rAHK8q5LnxM22sDKotRpddLZr7iY6LNumLHi3WRhYXzYE7yBigMFwEoa3mbrCy5bzV44DKZ7bFZEwtor2tpDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4seUcKiGjsTvx1kgbspuKChojwY2yu27whTahzyuXHTgbiEe3sKjhxvvCC4tw3fTgUx5zXJJdx7RLcLrTJnEgJqd",
  "key1": "2aBTGzD64rVC689RcwADuE7cqo3PX2hTHNAdUEqi7sW7jRxi4wWLgfffncngrMPzerVt9K6DxPs4cCoUT7Rd8z4V",
  "key2": "2w7uW5RJXk4frB3bTf8iYJLh4Bx9FpTiGhgZ95UM3gLFV4e7FSv7wFEGe1RZYayYeZXn93mKg1weE8CvPYeoP3eH",
  "key3": "342jkRatfMzZ7MoK57WtSXoz1SrNPkZfrGJWZDDbghsXb1Gd35YjERwEM6sTgdmVKPUp9pkBjJnZkQ9XdJDtVLj7",
  "key4": "ntp6zCjvMdY4HS8rH2KGQCt1oJxb5RQSCP7KNCPrT5udEcRaLpJa1X1f2FyZHqE5FoemqihXAwAnAfXwR5tWKsE",
  "key5": "5sATwaSQXvg2SDAqAejCYKiHGPxiz8KbpXYoXfMv99dnzXpN5ZZNuUXGQMT1P9UEb4fxah1zfzJ193VUeeDXV7sS",
  "key6": "3fHHVzewwu1X6raRE3EUe1V1CUiaYG3NQA1gMfVkiy7W1DRSkbSFNd1uXZvkUwLayvN8v62xUsbgqPbtYHztZH1t",
  "key7": "3WjjBSnpPKU4naJCgBywqLK5KN6tiSAyubbWzwDcavg7nAMYjMDokZjL7xE4o6vcJyqBLVu9kYQuGyezkvZURA9N",
  "key8": "5xQYytX2wxLXu857BUoHHvyeq6Ybp9AFZb5rE2TqUhVyAmCcUP2ehJGnndf64dmjMRf1CgAxybHFS2kCWmv2BK4z",
  "key9": "55ovmfBG227YQkgoJkomWzRh9f2w3688jB8ASYLXzGDdcCMsJHrmzngUDiuorw25wN5PBKkBsucvUFi6Vkq8ATcE",
  "key10": "PBVYPoJzCPVEJLe5tK9kCyovvLqnfrKxRwow8hFNwZEV4ceKo7T2jnox2gGovh611Cx564xUcv7TnTuHBqm8xpQ",
  "key11": "r8qEuZsD8GQivi91qUZA9FToHgccmAk6UqHh6JgU7EVUXnUfH9tgXTXwM6QBkDdk3fnCQ4CTN4TkjvXaQz64gTw",
  "key12": "5tzGGgvYVE9QL66jstDKPjL9AfUWGibN8UzRmscE8JHsuzF28oBEkMyeZvqUzE4WzoAujG7fq96Dzu9SupUGwU7Y",
  "key13": "3hxjYgKcxGSe9hp5Nx9f3kPxXz9foFLw3Mw49gmegeEsEWsM23uG5u8aNyssuCBc1dMEeRV8PkgfwqL6XHD5oyeY",
  "key14": "3MHN4ytFtP7TuvdhEcemmn5s8Uker611ceyooox7r65LyueQRdkgchd8uSw6m4iYtFw9xZFg5wa7cpoUh9irDEYb",
  "key15": "NCQnPBjwGsReYLFwjscYoFR8UMYdszFq6CtRQDqrSaDWAMT8Vo7enRmtweP3fTYEZtfPe56XaaXjSsxscSsxnyB",
  "key16": "2GntwUrDTVxLrdkdk8VXb7jnacssQnGrAKb4u8wAVpBzoabdCBZYn1H52qCkSAY5bC8RdNk5vjX5kQpVf5NgU5Ty",
  "key17": "4wUFeCwgekrzUFzk9DRz3PEMZXp1inULVrmRzgN5mTLGCNPuWomwBN5YioxEfhmLRQ4iM6W7Bcb63LpNEHAfE7T9",
  "key18": "4q4gUuNxGNVReiSz9RggNw1xgehZu1mRPDek5uqm5BAUgnrJesgj9T1eaEKQREQFE6iEVb5aVo1GaMM4JUMdCaFX",
  "key19": "5f7JBvcto9WUPi6rFeHbL25tWRKNJ2Ro7SRYNNBnVdCkLBNmyDRH5WjWTRbrcJWYnAWS9JsrJfq81i5nkAe9usnm",
  "key20": "LdEyca7cfNPWwBLm8QYnd1BBKUB7YYowhV3UfMLhXNxFMWrza7Lo8x8LMbR9732eYrW2ccDgZa3kSFEYyMuzAGW",
  "key21": "51LESQq7RCemeH5QYNExEFrAvqdHG377Ci5GRutQe9xAhXSWcqjkvFPZ3R6MmJ1wgaBFYyqxdyiDVLVmVnSYnAF7",
  "key22": "QDGWKCu5UeL1uYkKmPuS7GKCbZFHpqJ3S7zP2rrvS212TCHzSSqFwXj1qm4NB43Yi6if9wN1S2aSTd53QXTwm93",
  "key23": "5ucPP6thQtWW3cEFRzZauEXFMmbYeqpDenx2mAVNVo7mAsdiJfeA2ALsi6Q7duRiagXxmRTBJ3YJ4t9qrWMFVJ7d",
  "key24": "5i2xdJ4VuQ7xUfYTs9s6JWKi4qjG4vacSFP2qDSNBzQkmYTT7eatFicDaPJARn6727imEdq44k5xCWBnKFREdSYt",
  "key25": "2qiK8prX1yqDTzATEJBrB6sUSxBrLqtKh5R2LgJ2TkWw1CpqMrSuTWJwpDoCVeTHfzZfjBJvUwaGqrqZjLrKZEBK",
  "key26": "3aMnou6mqdBEK3by2CUR3RuqLVGuiUHHxBkHzuiSg5JkKaURWFz3bnUes5EXxLeggttFyDPpuHswh7qmAPuX8EgY",
  "key27": "fwH9zqdJcRL1CCfUc81QmRoeivK5LzpZrhug1dFRykUkA8V1A6GNnrGV7gu2mNLAizAzjYuUq2T4d7oFWmx5rvF",
  "key28": "3LJqXDyeZbdVc6GqwRmne7hTjba5CxW3GGm5gSNouoPECkVVq2H6gBbwCBJg1nhrP1yRxfN3SPKgkxGAqKfEnGxr",
  "key29": "3hHsV1oYzRrc5hmyMGz7RotsvT9fQCA6gvc4RENNPLhe8bBR3MHi6bQemBKD6H4PEwR38JjyVE6Kzdvwutt9ow9G",
  "key30": "4VXXniFMrFnv1e8s8Ty3jF3ewH5aeScxxFvH5LdWdCBA1XSQSR45764WrQbtr7T9HPEHDpVcnYYsRiPKcGhpZvQZ",
  "key31": "4r724T1RdvKx2zJYVwyWXv8cEfqUJzG9R7yQW6StPr7sGtdWd7MKiJGYZbUZvZjjWFJYLuXTwn5GUxY62xuX44d3",
  "key32": "2uf5N3rLPYVDSDhSTJQJyB7CF7XKCpJjjpc2XopzrYPf1RWQ8My4nT9E3k2W8EWny63xmMgiuPFRgtcPu23cCV8r",
  "key33": "2Ri5RPXa1kRzkXZQhezxrtqZtKgfQVvypFPq68TkJanPKcDrhogAXvhuMTCQBavEeLhEKtDkMzTxbJTvDECby4GB",
  "key34": "2Vop9aCZd5H6xUxEYKzkPwpJyoWABBvnehnxSDa82AuyR29UR1EqQnbEx5syD4GiMtkhwdjpPVjRJcbiJDEZxSPr",
  "key35": "3XeZvUZsUXbiqjQV4wBhLMGtNStHzzgiFSF9yYzJ7uikMJaetFQSNvJLRW2y1AUHXnsGdPSeTXKgqMx4qPryUuDg",
  "key36": "2aumnLkGDSLvcSrzcRm5PejcNrHi3xJwXhyJoQJq89hPPAftoBXYiricLiCZjbSc78zksB8sqh7WFYgYKanCKemu",
  "key37": "nppRceMZBd4uj3wmStYhH9qrF49UoaVMiseED6w3gKcSEbspZoHipQEBYZpbyEmeBou9ewocftcPFoKEdM5SYrh",
  "key38": "32zucJwfgxz3g1rodd9zfkHTLuTCBPe3A1hjrDPELE2otYgiFRF3vcRF8uRgPZFsuyb3C3SL93jSd8PnV3r9nY7v",
  "key39": "g8FMxtz7qKoMC7iqsKFa1VCwZeZEVaQxCZREeYoigNcyX9JJYL7qhXSxtQY1HQMugagTRzAsmPT41gT2xemozEp",
  "key40": "3iffV3vVZ3w9QHGQxZKZvHQEtPTdeMCA4vxoiUUfHPW1CZDHBtZyP1XkaGSaE58LMeKE66HgLi5PYKsGkmmbTpTA",
  "key41": "57YHJrnZYhTkrZTtBW1xJdwYyxx7vyU7WoQYhB47gsibqqnANWSPK2s1E2ccmto73RKWs7QmXB8dDfnqcUgMpsYx"
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
