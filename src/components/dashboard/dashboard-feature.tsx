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
    "73MTuDv8a5ELxvhWFa1RxnrMSEc4hphK7v8TzFw2WyQYTj64t9UQ9emLLEVzbmEALJUk4PPEXoNYTCKwkorp19E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xg6dqYnUjkVLAzhkWtMLXTkzErX8kRfNj6WSUJT2RPjnhA9Z2eut2a44WSuJTCTpxYKEgKX2jp1sVHBwvj39fR",
  "key1": "3yK2Q3E2AxvDLCdhRb2RjVs9Xg5R4wmysqwATrJfBNLK8M1QhPnxzf8qtMLZM5jSjg2gX98JDB6nF5y8qEvGixP2",
  "key2": "4xAZFNcipKoQqFDbrgky17HSUHcFAdxu5dwMp5LJqqJEMrWtJfV5g3A6eAzazAZJacrPGU43hJcjyAEZfzNRXt1h",
  "key3": "3UiV3tErpP9x2tFk2F1es9eW9HXzge6yjvufSAz5RQ5xCEgYETV1gEUXetypDTmVx5NfJFvcTTHgtwce7ymvGYbp",
  "key4": "4AsNER5rDvf3wSKEhhs2HbP82p8mtuZrxTQeoZu5MnDDvkUY9sMFN6WR8vor8ceFrYawcVtVNtqMs26MHf6HXNb8",
  "key5": "33GMRhqBXgE1DVR54DGRUjnf4cEHJToZZxPMKnGUuZedc9Ubz2uFmK78hHjXaUvvKiWSLETJpSSkXmhbiSSMg2EU",
  "key6": "38RcJtgLmmCcj6hSXHJ6JP8U8WWDa62TDTr4mPKQSKmxXYRiCH8prKbJTRFvkZ9pmC7WSfD6MsHY2Ta7XapPZ3QS",
  "key7": "4LyP5U28rkci9nTQ8SJ21YQKpgxDpkoDxPt4iaW6DGfiM3ej5vmxazmrehEDdcmYRKAHvfApqVgQEhphrbW5QBJC",
  "key8": "jDnZWKLQ4LTZaAyhCJSsj4k4jtGhPHPByngXLttrQvXqQZ5GSwWzeSpfsfC2DFRZgJR1tvKYJCB4Xf9gJtUY8Dd",
  "key9": "3iePh4TUP5BAUcCbFm4XWBBEkeU5T6WSSDS7R7nLWE1Ajb9SCu3PCjzQ1yshkGwowDZVqtdk1mwQZf8LwdaezzpN",
  "key10": "3fGtZ9L8QoYFSyUwUQyf2GUenipGM1gsgdtxh1namRKTUmUBWM188JL1Fm1t8XfmeXAvtqAqit3Gm3VigEaFW21v",
  "key11": "4VXTaDTdQf7d6EinbRWFxSUZtRDjmCbK4TXk52RtLkGBxsex9Uv9rp9gJSnJAaRhUK69GJBEM9w6TqK773koSQN1",
  "key12": "2VUnq7FkVG5dkJDyjCdJtyyqYYZaL51cfsntUeKtzwWfLbbeEzvhoPWUHaghgw3osWrg7SbaLQWB7ZRQx5vkuMzb",
  "key13": "3BN8fRU7xTmGjabZxbDZ6NDoHV7ZbyvnxoCCVMdKRcGbi9HmXYpc9NHGRWrcpBuBH28dcAxLACraefF9MgS8gYyd",
  "key14": "5qnxSm1UYJzXaJXyndj7pryrybMvpa5m1KB3cGEGmUkpzsK1cUU5YLGqHVTVtNk157e65YusdfVfPqcHhQZJ1pG8",
  "key15": "3hx5iwBYicMLMf3C7Lw57wL9bcLuUHZoU8WngiX9TngC6kxtWREwYroN4PowxkwyJYU3GRYJRQHUSc9AMNXtpPXJ",
  "key16": "3QCfUHYg1pZW5fsubrhgVBiLiPTDCJ59MCz5CeFPYKzHcamyxs2zRFjEGzPLgUtg6sNxhuG2r74WZw5aae8XYSHX",
  "key17": "47D9sFz7czCQWu9dSC7sV6mhcSDuedRmdCZ4hDYc15LtVe64HkSaRecWXKLiP3tW9Ukvnda2VMckKiTs6oBBcaMj",
  "key18": "4d7XJU3Sdbaq6eaFiHXu3oHWvmyPWDeBrEcPed4LUu1VB8S54S8ZRy85kDfaRpsczjTHy8c9sN2J1jS3kpj6ovKm",
  "key19": "2FJGYKcmyhCBwjMn1bkqzxNZygXSXAcKAt3SaeFgybw7JhwqKHgxXen2MKDMMfkZfaEebYm1rGrY4913NRZNgSQW",
  "key20": "2LtNXnouHWXhFvZYzMuB9Q4WcXryWZhPZsRXz2qQ2ue6VXMDUjzTEB5jsdZM1RVucxnfCeGpvM41eRuKu6hkF9GN",
  "key21": "5QkHxAuoJ5NAT3pgmUtu6t7eBsYcRqhh4ygxRfD3QDBwYLFQ1bDm3uAesJ5tcc49Po8MhPxTpAcCPD5YTPmJGC3V",
  "key22": "2zcno8KLPTEqZKGASWTFw29u1HWt6SJjXb2tTvG3vqDRSzEfuo9UGKnHaJ86XXVdwgCtaYvE5vocTDz8mw21r6Ri",
  "key23": "5RVhkGCugwqpwDXEHWc1xYwmf7Uf6pLgYMPKjHnxp8YmZx6h1cFFNELTZDVXFsoRPtQ5S2kXcYtaLZKxzEwxRsLa",
  "key24": "2pqN2f1uoyZanRT8X8RsXXVKQuLWHc2HWBHJ8FzGXLSX3c4zReL5KgUUxU1M3hotCaVyVV2wqggKKhySLMdBEGvc",
  "key25": "31s9n7bqu9unpxcyTBtvgb5cx5mgrpWYND7TEogRi766ahM56NvQnnts4Se1Cg3VxX9sZpUMp1iCe8dCVRjFHxy5",
  "key26": "D3PYrMRdxQecHrPiQpyp4RWLxCHf8WM5ywVaYxMFKoZw4RzUefoekm51enXdtYzaLUsDHD7msHamRkqPvNbPZ5h",
  "key27": "Skek1MmoFWW3QsbZR7V1a6N3wfJrbsYMJEc4W4RKXqZJhhXXx2k6yHq9iBtqpPvfL8vgQg2okWC2kPFnU2cxUHM"
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
