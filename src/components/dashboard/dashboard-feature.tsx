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
    "pEG513XMSEYgFftPGL9pVvkXCXA7R8iE1z63tvJ2mGztLN3T5ZKSFtfarGWVDMBDKzDnMv4bsNdaGpdwYuq6rtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M9zWsWnGN17nhJWp36ju9nYqAQ5LHE8i1o8ai3uFQ3N1kVRNBoMutL8JMi2b51EzrRNezsH6rvdgcw8oBmFeNfo",
  "key1": "fSmHaXBUtX75WHTP3DfZQjG3fomDSqiysKYdAPBZfZviRgaETrwL4g3nHqq8Ji2oL21i1z6sRZXU6o5cBjjr1kp",
  "key2": "edcURCy5LcVDeFreH3tFfn7ugGFDYrDCrQ8NK8GYt45uAsFbC3ctmQpkTTWQQ4PsJvE7oPEyS4kK3apVXcA7toL",
  "key3": "3dwspLMmvFHzaPVcsVcHH59AdYx4Jg3wRiQXtvnjD7aRxBBg5Lnxahn2KS1s1xnCKaqpa8oZXh8purV6f5rhAGcM",
  "key4": "kRJCkoFurRa5tkGGRiex5vCLY5q6oFUxeuEowSFujKDLq85zcKAJe4TvGR9CG2ESpUq5pvhsvSVdrnnxAxRhtVZ",
  "key5": "2kdJws5wZqgpqJYPDz24QZu4LeWJE1PHZakppwR8uwK93jfZ74mPeKSDxDhbhX4Twx19hkh8UBctujdMMhfKbww1",
  "key6": "485SvDNmKqj8TaZ4Sz3ZNVg5FETLheDxMXLp7WuahyWVyJwY8ykFTf7onfq4fxFA8Q2ffMURJcmPMGnC18V3AgFX",
  "key7": "xA7dHcMrmMmHzFLm7S2x1SyVV2MUxBZ5xJKnFAL1GvQHs2D1qAQvhxtyWyqjJ13cRBvXu6vanTZN6cihrQ3vyuN",
  "key8": "2fS2M8vW9TeeoaVu52msGD1sgRRYmBA6VhDpbRm5eEEgffkecZJiB48Bvr4PaRpTi9DgNM7yeAahVBqaoCJoHKGX",
  "key9": "3yN7hoV2kT5sdd5SvM7SX6Bg7xx8HirQtMdUmnySURFVnNarKQPnPwgxEunHqRTFfh1npNVQ9x1jhVfmkZs4BWJs",
  "key10": "2CkjYuxwkLUUUEjBQHVJmcbw9X133oyYhs8pwwMP4FREecMfYMYEsZ7RevoAwsY6Q9zWVU1mYwT6kaa6w5DtDnfv",
  "key11": "4aHMjVybNMdaWTG6FkAj5WJdSH9DT9nK3J3AkYkMJsNqr8df4pM8wHMCvE3NbUVVAJHwkakk4bkdEGSLpNDw8ZCS",
  "key12": "2NobLJbTskL8jZPfNmE8CNDnkpjRXLjMmwSnDZc33Dz2CVpt5nRtmCiqX1e8RNUFFit3JJRH1mTLynEwRUkeEsJ1",
  "key13": "2mZdq8BuTbWhbtYvDiANo9PEEzKRRgP84c8qECUFWYJ4AQYywoMkUcxGXNJ5gmkC5hcYpnpkmDyC994HL1hx2Hmq",
  "key14": "3zWq9JAUSXuzwS2EaKYfcwpH4s1pbEDLghwR4TVZEpbqCDU1hCd4TJSrUyaiMVLvQzBgFkHzm3sveF4BGjJbh9x5",
  "key15": "3MyRGfu82opP4HqpPYsQCzvUoVk8ex8hMW63cS1cLJ2CeMafP4McQuhZAc5A1MRLvvVHfxYEw8Eo2rb9iJgZ8xaZ",
  "key16": "2fSyFJ4ECvAPYSbostnQM8ni31mtwiSFdw8YizpioxKhn1gzvtzBnfAGVpUZFu1VfLBQZYEoSvL5reGUQtqgH8t1",
  "key17": "2LL3bK1QT1DSroBhyb9nwfaTs3Md5oajRd8hHZF8ooRRWoffKZHnzaZ2kca4Kf2nHgVWjD6nFvFqL6EQs1AvUDE",
  "key18": "4NhFuSuHdP4Xj3JmmMi2VswNgMvWh7cZ1u9mmWeHq8p16TNjnEf5FYaEYKFZgcinTfBSZbHn3pcvYxdSyQSiyzGK",
  "key19": "2YVtLTboACKoar27mnRQ7seVAg78hv8SyTAzhGjAhvL9bHssiwpoewKs5RJA3j3rv3j3jLWaT5qr7LTDDqNDapLV",
  "key20": "5M9PiUtxbP4EHvgQ4nSgM1g2QokAfk61sggfpmTdzy1ExL32awh8hRDF5m5xraqifhwuNWZhQW56egWfmgTzNa4D",
  "key21": "SDCYwmMxJzVkztPEcHzVcFHydyXYt8QbnaXWieVfR2bs1GRXpryHLARtWiNrNb4zjyJkxCxaN482RSchFmMcCZt",
  "key22": "2VPT3wJy7p1miNDg6Evva5vt8KHX31PbUGetqVxdvj5rgYm3tdXtCii5M44bwqiLgzUpSXj3WHe9LKDKsThcqAmB",
  "key23": "2wvD3btzBdR8HA7gxJzrccJ1jkzL9z8yAvn73wfzTPrWP4dUqFi6pv4F1ifwc1Y8NuQcrvgkkVCFhuRpHGoaSjTL",
  "key24": "2bNVs8AY1CMRsYamsNftW1stWciXtfZk2RFF46kSpQ5gNhFPNo7RvUpiRMwCuJCRgBizhixDt2jrgmA71ihWaRDh",
  "key25": "2PcyDhiMCKbMKHLHAR236t3rPFvoEoY1tfNYRfhnUmrEwibXqji1uBMTSdW3ZQoqD1WqzaCcWQ9iMMVaR2of2huY",
  "key26": "2Fovgej22F4YMiZqWydcmtdv29R6r2LLrVVQ3E2CA1CR4SEZezzWpxjUFgFpxN1Wx4MJHMbnjSPUrGK8dfifaANk",
  "key27": "4VKCYA2qTH8zcTpFbzf5oZqz6rSz3Maw1hdWoMCUCbCFHUQmkPj7urvN9aCrina31qr58mPcLaE6ZHCKuh4qJCSr",
  "key28": "2WneC94CXhQBKkiFLg5BDPpicYzQi5VDxFEcq4FdAztfhDpWDYuAmkQYkNTyM4wnq8yewby5vRTm9wk9Hqw5NchK",
  "key29": "5UUc7fUPSSU1D85CUVgzSbDt8iZLwkYHU8UKSpGhBiRpX6rf3St1h9tLYAFARJNx7LtnRkoHnaYFFF4qzR4iWJnd",
  "key30": "4LzUrkSK4XzaQDTryZbbnKpLXru2Dx2Jy8wnSQ4SQYaZ7f9BtgDeY5Pd8ebUMwhqkYuE4zLQtnMSSCUYrx6qaiWT",
  "key31": "5qE61Va936LUbs1PBCqBE1RcbPSdaT8aSwoWYqqfYvPbL8iGYmPA3mJm57tQqrSsy7oe2QzmCv7xgLs7EMeVox6v",
  "key32": "2SLXPEVc55h77gBf8CqWNduhs11wWbvoZHeY56xYuqV8rZPFGxCahRvC4ZxL7gM3bk1abFRZMTp18mJqQyGMaeLB",
  "key33": "nRB67WhySo7JfGmbq4uSfjHJYbZaJ9HBdCsM5PxgiE8fCDZwPD4NXLAFS1BYyekBAHRQweSQZqTw3RuqeZ1EaJn",
  "key34": "5tGadEDXz5i8JJyMzsTugGXujQNDnha5JRpXAL1eyhj3pizQVoqKzSSJX5JKdiSL8hhGFEsRjuKGZVWd1BfGhGmi",
  "key35": "3Edrmohd8mm6nZzy8ADXCjwtuvtXbKsj3tA8ke61Fx2tmtApW3Fc5uCnRexb4NYFwoHavxUMy5VavJa3kvdk5SXp",
  "key36": "4MnKWBM96UDogMpgRJDBEFPQuAbKPbkbaAAwNp95vifuKAiauxSjvfhYgi5MTdGLXEXWEi819mfhwXx5ZveQkSp5"
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
