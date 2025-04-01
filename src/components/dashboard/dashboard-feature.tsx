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
    "3ZmmBrLNYubeN88QV7GsidFhMQ9EjXVyKWSuDrL96J15RXwd78tWb4weoek3tET2yo86si45yvXxRuBDTZe5551c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kAaXJ8LbHc42Ajh8zJMEocQSC4PCYyCcWz6dQLUbZNhN94cgz8n8x271yjLfSEVmsRiEsr6Jf5fTYmeNszQ487n",
  "key1": "4NpkcauAQKaRs7hmi4Md5CHZ4wU6sDD4TdWXSxj8cArghPcDvyxCmKqZ58vJzfNCYXps9XASuchvgUbLKaT46DTA",
  "key2": "3AAgb476Q3nQYBUMKv1QHihkVV89s4wCWTXv2DpnSURwuJnaY19T5igL1BsGo4FxzwNmGEGMkqjC6V1CPf3rnU5B",
  "key3": "4G1pQ2EzGCaTgh4SoP1W8ebx8WaBSNu9KdJWH9wBvUttyhF8BLrJrQP7uKLk9VYwuJwTwn45FbMpgjDoX6CwzUyC",
  "key4": "47LkhiqnR919T24YdrEmTA5rPNK37TZixFt9PbJWx47rDALgivPnf2S7rJogM3KfbAPMbL8yGFFxFBULrHF8HwL6",
  "key5": "4fuKuRWMnZDRKaHgG9AqN8XpWJDqvGN9Cr9mHqoZ94PgZZLCsfsyZte8brj2KM4uyGvFAfKaRJALS8GsVqTjVutX",
  "key6": "3PjywX759Rr9JsMCJAR4UuWbheLayJbBjbdnGSC4S74YQsq8aZjgLnwEgfkEvPYcNLqoyncfnAiAVCwuFLod7T4Z",
  "key7": "5Zh9j8oX6kfb7QozUHf19W9hTHYEhD6KGSLN4dbaLPqemJ1hVtpLKp6Qif35joSP4rK4GjC7Xr9vbEBgGcs1R13Y",
  "key8": "56shmyMBppnkUy26E6dMggcuzCGhky8RMQftNp9q5PdqJofRHRBT67eXP3XMP8prTXnGCckDswnUUusnevqxupCi",
  "key9": "4ry6Pvc1i6Df2mcaZisRJJBNYETNvzzPTB6EdqvkMMkBnULD81scbasAL7T1BaLVrmQdLfWaWF7rmRZSx8iMHTfs",
  "key10": "3NNUtxAB72DgDPwLpmLmtjWonpt461TQ7bjsEhdzBPzHJ23h41qxz2rhJSoCaqf3kmotU4YGgkQGWU3MUKCDdRs3",
  "key11": "3fPvBMZdqCjMf3WTgmQmjCcH6pGCwUgpChhoZKEjtrn2kZZuzvv61AQzsqKpMLt3YKq6ZwZZJLH6CJFx5AoTpEKC",
  "key12": "67BDUJJD6j5Mj3VzNSnhEPVcj8inhMhJXNG5bhyAHdTX9igiwXjX1jVyVmWKZZtVJpFonoJn5FcwunEnkLRr3NPQ",
  "key13": "3TRo87SMSDpN581YyML81kJqvEz86qua6iemTzmrkKLdJnY2rUShbu3QyMci5e69XLf476UuUZeDqSAZrBj3pvVQ",
  "key14": "2LWTciEDihf7XAnFYWDQtQWkZqoPQJq3tpRdydphdVXa66Z1F77PX5QHrUZcHuZZfdAHc2EBwd2rKbfTMJsH7KFP",
  "key15": "5jBsqv8ow7zHVL1Ec9fbDfQWmRXrXLxsVG4UhHwPyKMSymD7ZhZpci7YLDmd4o3ek1VVUpMT52a6c9dtVBM6UrFo",
  "key16": "4qkSEVauKC6CcdLSycUoD96rg8wn2ARYTAXjqhMw6aWfWXcHs88nDfGYuVfiMiVHAovFwmU5CeiL5GuQj2JPDD3C",
  "key17": "3uDESaq6BdcvKRWQgAycieNbDmqYyqA2ivLTSxFYaiShbofTEus1E8zBjH4nzBbo3dy4tom5Xh2Xpq5GSaYMnGce",
  "key18": "rLAD9Wb9eg7nPsdbTuMSamgES574zzsJqMEce5Dgcn6BsSUohmXRgaEMPP8wP7k4s7yBXXqfYhZo3wmA3PmEJAz",
  "key19": "41HSG2EsHVhPLhjWSbUCQLp1552xZ5QV8YuXkvUfGZhNML7uYSVKqyH6GUHtjPD4EtzjhrU53evPY6sXD2J3521D",
  "key20": "3whDNP1bmBe6bgQHXYyeD4PRgQgkRyhEcs8dJyYvWhv4dq6ngP3rFC1CbAzMSijGUUgSCmBWXRh9oPn9mywKub32",
  "key21": "58DEAw4fSc8oQR8jgWRJEXKyzo7Drsfc4YbtWVRTagzP9j62xZgH5MfEKmjECGyLZoofJeGvG8mVjuMSBpXs4qHk",
  "key22": "2aFruVATioRWDZ3PhhUUHthcZz3Scgmidv89Pq1rVbgV53Jy5qfmjUJEjdnBEwGc9XT5Z5zthbqvhxMenfLZqjF",
  "key23": "3JVjTDZM3X6MX15ywASqRSu4gsQCpFWKokP2Xbtq3QfQbsKH3ZbPtR3bNJgduuBFkc1x6MNjmr2m7wqLdQWPzxfQ",
  "key24": "ivwUAMEtjQfxENSuQckH2Bh8xX3FEjPhw3rGyc58MjXqyidawubm38ZkTgqxD6TzoJodoCmWFxcupbDZrvPaEjh",
  "key25": "3hB2dr5BoGDDZWE5gurWNTpjiY3siS56aYbLB4b5qzqsEZeGu3d1rGZRDbuFCv44RfNZ9mLZ8FwV1tq6gw7xbmXm",
  "key26": "29Sdw3c1AgdGZB6jFFhzzug7Dd74mRxo6J77ufQn8NfMsffnWHR6LsZVzgaqhxh2Uc3cbbZStMTYCGaVqmnVZ4BA",
  "key27": "53icEhRWtGaECC7d5EZP6r6a7KaaqQFRju1XFc9xaK6n8giaJFGJyBsizD4YySBhEqReg6hcUWk4Uw8bc8ogTRsP",
  "key28": "3vt4DCgLiwBKZdng2RrFqHY7wjCcHZvXantEFuY5TobHm9uuQP7eEbwxjuBdoQji9RcNzxM2QusGpRNooDgqadRL"
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
