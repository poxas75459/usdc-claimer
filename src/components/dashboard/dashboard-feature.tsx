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
    "2FHyFHTPxSKpao1y1tFKxMj9A8RowYko4X7UfhQufY4aCE7RSy8hRfDMFvS1vCTQ2YewNgEQkpyptEtwLF8gHZJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7a6gx8Yj4SpTu38AMCJR9BJgccMchMLNbSHSkfGdt3wMJtonUaPVCCPkFK51CGNVmYLaAzvc4HFidJcEaB46bV",
  "key1": "3bwsA2oz2bxZUU8qNHEAZ9P38Pf34CqxtdJetfFuaJ8gYekcVVds112xLyEJQSWV5ocFQ71psf5ps3YqaRez14Kn",
  "key2": "2bvhcUze8Xbbmbbf5vdA1dTHewbYte3rfJoKc6DpG9c57gTLd6wrS4V9YFXnzkAR2yY2LMChw3VD6t4M1UHcnwTz",
  "key3": "5S5UTFqCSfoT1ZEQAgLnvWWxpWojjEcsVDPc1p2uFCZaEPSfwMgbJXpUNAYdx3p6kjZTDNw85aikQmXQ5rPEn4j4",
  "key4": "63iM8WsNBpi5sZET1qAaW3vV3MhybF2tHzk8KPgmgqSW9TiYKWazD1Lkn4hw3aQR9gCGchEDHvtTA5ctPbNRu2aV",
  "key5": "EBxXYT9ToafnV937sjcQgsswTPXCeU31G7HNLV4Sgag632szDFE7nBakqcnLVKNF5KziZSwSYnkyR7shpnZ4rtB",
  "key6": "57NEZybKSdJeV19msRe4fZov6uLLW8yfMYccGkyb4jBV5cc52pz9gZ8yqmzJ4QNYmK9KMakoTR6RbSETAe2FBADA",
  "key7": "3sZSPebsMVUY9wgNC3kBfiDxVq5xuFZtiYY4xECFfSVyxAMX9dexvTNJhMLK91o976i9wXsq9Da55tDHCWxE1cqx",
  "key8": "k7trjYGiEDKsSeT3EKmxXD4k1yVKnyNEPTgTWzYR1hSwH1BVFUbYG8wTD1vAKGfp71j8EitEgVzdGxkt3onHZ5r",
  "key9": "NFshusKoF9XpssHwL5n9tzV18qCCncRNitMXAxaCiSb9V7tdtPYGgL4ixohyPMHngijEDs9UaETR4X7pAWKzCD5",
  "key10": "2Ho1xKqNUeUVbax9geaTZTf42SBk6Yez656LQHXxAK5rPfqmjJovxkTmAWMe8L9SWLrrxKqToWuPs6M3zLXj9v5B",
  "key11": "7sd77ADPbnHZjkYQXHmWRsXvAdpkNuvd5LjNamhhvB34U98uer8mPhFv9eBDs2CCfV8kzLRyR6Ru9C68XL68CGv",
  "key12": "3t1hTWaRUVnhX86gKFipWJWWDCeAb3qkk6BcSJndYWgHWV5cV9PXzqpL6e6zYiwTfXisyKKyNGQn4PvW45SH5Xvb",
  "key13": "3duo46EBVgyyJZBHH5YwtSw8CZht5qk8Hst53CmWi8GygatxRYLDeN2afyCvj7WavEGFpyyD1KsMdnNsA5gG5292",
  "key14": "5NygZeFbyWimR2Zy2QBD1WhaTthb7LU8wikRxLMdm3zRtv4NgNXJLv8yPEpCf9vLaQ1WEtwgLznKqSzLuiC6jWCe",
  "key15": "3VceXv9cpABQHHGN1vTm23iCvSbVogZmche94t2A1h6nML4ydeCVa53c657Y3R4SxX3vueggc9bb4du9PipgBa9a",
  "key16": "2dVDUDfokqLi5JypeHCQY2TB9odGn8CM7oH6ZU2boH7AXPFczMz3ydLmRVrjkicHLHLHTVG35uhTYR55DdL8SxC5",
  "key17": "4B6ixmRY7zriQfzdJCRQoPdswpAKC5ZF1CH9GiUCQ1QW2S2sYwfnpDgJYdGrQDNnzaNYzZmijRMJWbnuH5fxgmfK",
  "key18": "2pcDx7nTZCEA8DNUzkb3vog4SJen9aCkgYA77GkXoEyiT8wEYmyjE5qF8PqXF8nYft734JLNPHUDskys3yACxs9m",
  "key19": "4niSAwSQg5LSgWgwtrZCNft3STLWdBirLh4aTMWCM7WppyJjzeHRWmtbyP1ZbcS8E4NihVxJFdNTCf2Syg7kgbtA",
  "key20": "38JxJZyX79TtSPYpAT9hGSer1HQ7QQb4NU82Fm8LqXjXSYKjRNCtC3yFHVpxMFzfuUM8XoVwb1UyZNk3RBAQgjjo",
  "key21": "npYGDqCsRNKGEDPwb6GH3YaHQarpKhKUmCk3W6ReEHsPaSDcuzxqoQCgcYJb94kWmDqZyk75SxuAdrnYMkDz8wU",
  "key22": "2iiZ2jbRnnUsTTjDkt4MWnX9DkAaQZa9GcU9fR3foyyW5WaB9RwzcQStxVEkvLjxEr9i1DDQA1BGhKc7B6Ex1DPK",
  "key23": "4kCCPKs9YDgonVzS8a8ikrJxgKqbZU8cbyCuJ9MsJb3aV1ptRWiC7wzWyVb78ZrdW22cbAoBGScrdnYweFPxqvJZ",
  "key24": "3DhzsNxVG269rAaK6eMCosjmUEbSK34Z4HPiuVDGR5ka5bje8JiD8CmzoANyBeumgVHhgoH2RKdYGHyRvFdfNL8X",
  "key25": "2U3b5CnaFHvzaX4TGueGpXEJdg4y7HrTXcvrfJXv6NPfehJVk8WjBbe2e6CefoV8e5cdrRJjqykyY5LjVhPrQmtE",
  "key26": "5jvMjFyE3nHv5SGyZpGKV6EfL8c8Etd9UFXBaA4NpSAPrUh2mDgh4fwdC7ciUjvS4ZZLZNfiZRxiiL5sHuRMVZJn",
  "key27": "3hQZ11RAtz6BituHYgHtnvF6MfQ7twVQVFbKUCoWSpirnq4jA5BvR9yyaGy9FYorRwUFiCKQ649P84SK8q69zBt3",
  "key28": "5LeVpuYs3SYLbyWsxxJTJZGoNT2daUDYFmLJmm2uUG29gFvdaEx9ke33ZdCJuevSLa6PnjsdVBkk75oxuQFtRhk3",
  "key29": "4KdgxF7EnqhYzDCy1Hsawed6FhBaRCJGT6RK9fXrFbGEceF573u7TxzbKkddUeT7aVndQSKE71svQs7oNdptKiZn",
  "key30": "2UK6pkmHM9fgSs2RRend3DJCYEqXdwtK4w5wwQf66zUMHModJSGqGWJv1NGwM7e29C4qoqu9ktzsetfTjiqRzDiG"
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
