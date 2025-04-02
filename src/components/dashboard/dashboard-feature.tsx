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
    "4FJcRdfYGThA1dSiXXqTSkF4nkgZYi1S9KX9YW9ssncSrp7ci5uijUgp1zSNiHk2bnomffDfRwCwnyvikDVXMWEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQT6VnGVjb6gHyup8aeKQFLZy44GqRA4We2Tq1fniSHb9X6vj8W5ZVNYWVueLPAnqmFAeGJoAtzzqh3FsK4dyXb",
  "key1": "4wqEewZye9TjoMyg6ju2CSg6F2yzma7itu9X5C59gujsKsgYqciRN4zDTm1GuuXH3szcQYrAM9LPu7BzXLdHXAdw",
  "key2": "5JrjZnivCbKHQvD5uHbdUEmJrEGNwUoRBN4qXxq8s5fPuTZ8JTCRN9HB8k5Yj89giXdjFVtbfjbygdJwtHJzriLy",
  "key3": "QvGHoMA31XCJNTrLD7MWL6nfp4EVQGTMm6dqpmRgVF2nfmZchzGaGMgfDHZNXF5CNA1zV6uLjtu9hCtT6WJo8xY",
  "key4": "65UZ6kd77EKpJNvWKZAAcqvMDCNa8H78SP5tEF2VqWUMynW8CQJteit5MW3m6BQuGy75bEsQgr5fXrTx6pjiLJwy",
  "key5": "3VX3ck3TiKJDuTeJ4PBrPxL4KayL1tjo3CspjrcvcR5saDEx9SJL5kSnrg1megMaZG31efbzEgxcpzQb6oxkvoK4",
  "key6": "4JS1LKDJ3e2yJtsyXKyh8pTChhzJBAUWxJ3MiAsG3qXb9j8Rk75GJ1M9vaanPpqxUXh5MSkd7S9z3inRN5uktWKd",
  "key7": "3RfxZiKP8GrC39VgfPxfbKC111oHs9z6kPDAfko8wkYfFZovztA5Lb7fC8ufoxjytmFnCuRyNnxGSZnB1Pv8KQCk",
  "key8": "5UxuVHF9XevTYkZC86DXDtv7GB4Eoo6XhbJLcYtj3QQzMEDmdRFgWaaQAdy2MsNQxv8zCU8eiU6AXhdbeHyR4Cvt",
  "key9": "2rpwihNJYnf1g5h9D4iWiyQFJ6m8r85nbfGJMzcKKnLjY1AbT8hWrwdYVDCoRHhrEsrwToMP2kzAVkfYK88gpj74",
  "key10": "3d4k3DGt8H13YUNfV9Gqgz2fzTFnz6zzTfiNxe3gyE2XqAWwsAtmpA2V31AWiqnnJd8WAw8URxpTi7TDfhHNcEoY",
  "key11": "4593fjiU4UGRaAKj6zziJyMwNJdy4K6XtsLgtxG574ebPmBDNkqjoLSFqPeua6QnexXkkkoiCCzjPZhm3CKesruz",
  "key12": "5Gs2sg3xhFn857WhheiVZKzwXs9kr2CCaJrYLwhMVECGizGNJw435opQ7RvtwacopY2AceqdRH1MiFUr45KDe9zU",
  "key13": "7gFxdr8pvx7oM2WP1YHbk9fAJn8MWy5d119LWfHN16Gx3EqTU9Agrteviyxjy9iqYsVcctF4DLhDD6HAKtUEY1y",
  "key14": "4WPwVX5C8gmVTjHazH5vDxsfWocBxki6uQAaBMAjEqnCRbahEF78oNVEHJtv1XDw8e2TjryJWEEwzi98MijEU58j",
  "key15": "4HKn88V273XxRqd427Cc3oUhoeWyqG7rrD3c9h8DQAo2iDMCfH8hT12CdtG7wtAz89JqtE4hJdr8XAdiEpTK37Ms",
  "key16": "5HzTxWpiYV9s6AvANYHbjXN493rFwVmfVZNiXc2rZh12Knf4kvKatRDu3mKRMCNgD1JqTyZZVFvBUPiUEb8z4Bm7",
  "key17": "3hyCp6VcKTZg4jqvKkAfPhTmCLADKEkn1Ny8W1SK2aZYT4aRSyWuzRWRap6KB8KnP4WSniehipYXE8E58MRbpx6a",
  "key18": "5dLZrHPSKswEwAGt6MiyCfS2hC8QjhibffXVowJzcijBRN7Xsv4eJDajrLq468k31zpBZNHcfjcMpBVpZKTEZwvb",
  "key19": "2rBHXebL3GBPom4ZYFoWjaZ6FBP2t3oZGuZs9ZMgnXvws4VkBZdnf3zWKhjSWDCe7GSWitcdpQKTFPUgds7dnxzv",
  "key20": "VFAyoM9yJqYwgrvk9XKWMgiFLDLAiqK56nz4iQD1MwiroHYWZ87CaUoVKMoe3zQMp6VHKjy9mdX1osxbdjJanhC",
  "key21": "2RJHkeLzNFmZf66gt21qNSqYhxnpMZkUD5Jg1xBU92nD4DEi1TznNvRNjJMjRqdJVLjRQyrGcZSNp5LjZ8keqKyY",
  "key22": "3joe8ue97ZfSTRK1FzgRjMupQ42m81A5u4bCpJw5LkKoen5Vc2XUJZzU669MmuWLFW2oTefyPnaHYbeoYGTYcfmw",
  "key23": "MUfffod7aFTrMfXjRtxNFNLG7UwV4ySfb2r8vZt5HUBTJVGaEUdYHvHGRmQkYBzEK7LR4gy47TaCbEZkoFjeCjr",
  "key24": "5qHyijC91s8ZRxzdxk5x58361nqAv1ki5gWXVVyqr8JxM2JrsiYGPgc8zSV4ANX4vhnwKXRPzmYnFjkExW6QmQMz"
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
