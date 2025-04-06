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
    "4uoCV5ShQkbqfDiPAmySHFiKhyHAeziLQHdxnS4RfVb9GyJzLNJWY4LLYq5gQXhLfKPC9Bp3ZJtdiBBGvpyDoNHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57x26oYhVyHawn9PMdBx8EvKD1HRzRczEUJ6zto3amgjwuhx8dDCJWz8KEdLfywvGjJ5v8zATRHq87r5SG6ZLpAK",
  "key1": "3MKyK7RDtpV5znm5irHK9uT3jSzUsp66jqtxL3NDiPsEmLcYExNgvyVNzShRhPSVYp6hhGQwa22dTuR5zT1Kwga2",
  "key2": "4U8mybSfiKvr7JWfAZezncp3m3CBqvEnTpFBSVVwTuNm71JYK6LjjawwbsVrs9jtFv2C7UNJekp8pufkNgVYuHEh",
  "key3": "4ge16RFeSPdAEZSdggkH43cWnvB8kZf2V7AvcjfrihSmfk7kN2pURk1sNFspomRdqnCYVth2nAerG19HiyJcD3d",
  "key4": "4HDwfPaZRcPkrJjRhZ5fL2HLTSiZjt45pmoreiL16mXoNWhN9tc7xGTtcAycEtdbHcjqcNAsufCyFC3PqjXthcd5",
  "key5": "2NGF49TPNUxgCuQZPVRg8yerMZUqUVjCC1q7WDRFvdnc8gSSzCuXid97jsMf8UZpRV68Yth21ghnjzVRMRTeN7T7",
  "key6": "Ts7MdD6Q4GKbFo88e6ugArFQh3WcHkpcLJRB29qpBfNgGopQgxcwRuW8KoyUUAaemxHfXYSkBKnZ159DMppsDdH",
  "key7": "2JXug6sBmXyMfp5xukTuDb3zbGfpLPv5h4fWXnJSmhpc2bJabKu9HGnqqJDd6uFrV5JPLRGfwwmMLak2HAQ6tE24",
  "key8": "4ibqY2YRqxRwz8WEazMAGKDLSsFmZkknQ2mhEgs3zVrzm1xF23NhGfEiyQrwHtMPczEQ33CUBDg6nHLiYc2hqSKL",
  "key9": "2bvCZNTcrrnBDYy8RP74YjoX1Zg9Jn7h1ewGEYeuiEgzU55DE9ctJxLaSErXgPJcwZsteEjL3rCxVZtgmeUA4x7e",
  "key10": "fopC35hU2R2JuKhLm5rq3S3iguzb6N2MpyUamor41uuYEwirHii5mQjboJ9V5njwxYEumJbkSJPdQJxPRhfzVZh",
  "key11": "4sVBVaBqfDzqXVdYpbzog8GnTHbUxjngaXjtFEBT7QzNxe4VkLkSqeaPc1hHfW3jhx45WwMoTJiFE2GfU4Xrk5yV",
  "key12": "2RBHq6xQYh25aVP9dkVBLjc5qcoute7n6i9yQDXouErxEPicxUC187kSKZbyW8HgopaBqZyEjSKNT5VheXB2oq1e",
  "key13": "5v4SCPrih2gvwcc3uMTLLzTFYG2NkjACeKbZremHzf5LNkusfDVBtcc3Jp1evd62ED95vhykkvTgXbzmvAgteCGB",
  "key14": "2f57529i5aDVwxrsCfF5GYq3ozhRgncgBmFV33RGJbUAKomd26r2RGscTmTWB4zM4T9JfXVcRePwkvUrggYev53N",
  "key15": "4fHn4DDKgFtQyx2E3ytq6n9Y5YPBFBABYXmtG1eb81imwmJPv22eHeq2vhWRXPvqzpNN34dg8sqv5AapJ7CHGUTa",
  "key16": "4oxVEgcx9Zb39QqPdeAJCRRLeMgybPuJHdhQCauzc2pM4JHkoWKLDP9EsMEmVmx3TKE2uP1UGW8sr41NMEz8huoa",
  "key17": "5US4pPnfuR5oCCd9xPo7dwt1Pez1AkpJisJgMkm6XQkuG5tJBLzXPeXXgrnRE1SkMXiYUGjZMhxYT7GfBrBYopPQ",
  "key18": "5vffoJeyyWCKo7JJEgDWUe5BDzcZ6HpEv62MN1iwLLDTDBaRWu6PAwdmRzgBypFbkRW2f6akvnSTK6KEWmB4bvYn",
  "key19": "FpXWkR97kVNtntHXT57aPxXKAfhWH3K4qDcz9Jsb8zkChVLjtM4jsZApaKD3QixH6FTRRmXVUGS56e5CPWM7N9U",
  "key20": "5PTaC56hyi95sJqYfmyaYk3VLEd99xdZZbgHapdQgkTWRzkhu8qnBsbxnVagn6EyiB6mBWunRtf7UmTfSARP3uwi",
  "key21": "2Rth9uqWeeVVineMxf6ugz8qf9fpxgf9NXnzyBFj4D34waVyRz6yL1NjG3ihvRYn9jix16VqVYfv49txwpPrATiP",
  "key22": "3rGHePSPQbVghsCJnWiYqGBbAyYobjMA4ycgMHpdAD6ekBeh5PGdSDy974kWroUuWyCPdcfuKDck5545Beg5Aj1b",
  "key23": "22Bnm29zmozhccroKNRd8NQ1XomMxUgoeVUpbMugWCrfm42r6HHi81Z5K77bXB8VSrWpvPUyihGtKRRwC2JaxLPt",
  "key24": "SeiUrprynqxj4M5qpMUbtdjXGCPVquxFrjaLuiBsyyPbsWY8ThZxpSJydnmKT7qFYdz3Z24rqxW1SNczTE7ski2",
  "key25": "Qo36ZjhiZX687AWp9ZbYAiT7T7CpjUNNN58B18gMkprmXYwE76tmhHWtsVjS52CSCQ5WhiN4ow8rSPSUnmFgWAE",
  "key26": "3BdRESQUK1CcDfqCGd7T3rSPXU44qhneWDHuM16MJQa4bgGyAmBZmh4xPhsCVfvNMBStFpmpD11ZXTsT5QZVMu7y",
  "key27": "8a86hB4hDaftK2gy7xkeNFcwG7CaZ6H51gCjnrrxCK5QGqQuQnim9ZmWn5jLhQYJfqfLGyMU4m1YPvd3vpgtYCj",
  "key28": "3DJJGQNzLj2uTXPLcrR4dCdxPkDgUeeCeELw5ssYaCLBT8Q8YU3hxZgcw8bzTeZx2dvxrJRKSLBd8jf1Xs5MtELs",
  "key29": "kCj4TzyJJuQXA7GopscZ9oen1hyQbGZVXT1j9FjszNoeo79uaJzc1AscnkK6MmufubiaYHAosh78vaemjaDurwq"
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
