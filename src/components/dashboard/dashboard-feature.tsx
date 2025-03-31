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
    "3AuapzgdBauLPCQaLj6NR1ryET8u5mtREhKhgr8EPGFsbmbL6D4EtEK3an9gz58A8Y9835z8ukpW5Aoca3MZyAPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ccjr7ZiXnX78h4iucRgNgzPFJMWhinpfa5gh9nFKjiEppjBCwDX8aGbtk897D3xQMW42PsbJNK3Yjb3GGSguBa",
  "key1": "MBkE6xg16oyTYi7KQHTYGUTPFsCTU2nzWXn9zdVm7EAvAMetrEmVoq7B6qVB57DnqW5XKS4PLkCJwc9Pn25mVke",
  "key2": "2BMRQ79mZj83LEwJrq2tF9YPZMVQEHKMkM1dR5BbwAGEY7zr1qxdzGacT1NHv7uX1AALN46xS5DW1YzXsEVSZjNZ",
  "key3": "3kwmj1k459h34z6t24FLQnrp2Nr7vK4H3q945pGgvbBQnT49eCCp6veXQAxdYp99R4vfcXBuyszqZXyN1dthfQXz",
  "key4": "41Pn66q6snBQLGo3ufDXs9Zd9KYohshj7QU1aJTnguyZT6A7CTsiH2vsU2LgZLBxPg6kKMr2sE1y8uu9JAvypugi",
  "key5": "55snuQp9ScptsjzUXZdShw4rfeWgcGfGcq7aiZnTvmy37BPrDCxJLVGSRabZVxufUaUbkPc4sHLwdK6AoVHXoudG",
  "key6": "4e3VdS9uZNvruANPPyZ5Sg1hGDjnLRSr6N975KAgfV6TfouUV4zmtP4BF951wQ9mjmzGbUAMud715aGNuAgUHPMM",
  "key7": "4aXZ3y4dhZ7SfgC3vLqZwMbqsE7y4RF7npwynZKhgYJ9vQ7M36uCd1MeqgYn8M3TLzoWEfFR3NvgeRfMyVScAbyQ",
  "key8": "ZfAmEt8ZNFc4AmyQpDchFFaJngvpSCAzsUbxjiBvSdWrMaRhuzWij2tgW4N4dTMcqwrAoJpWRK7bsXZPQ2WQSza",
  "key9": "WfKjn15ZNMe8HJcRXfhcuNF1MNXUtYFEF6woBFQ4JqLUhQeZRCc7SwsYUrV7WcUCFCTAipnEppPEVW26mNmgZx8",
  "key10": "3U4b6t4pHLFaenEmrMs9PUk9TZcBf4RG3iTJqvTNc1XoC5rJhsm3LXJoZJAtwadCo3SmtBChBiFWYACjdHrLTvD3",
  "key11": "4kvjdNuDWEMdqPSJScMrG9QwkXo9mp4tSdEr9c5HHJe3GxZYoKipvvs9dGtxetcVWXDDMt5942XmyyGYeW9Vycke",
  "key12": "4hQ4i7bPGqe3QfjmPcj7F5TxGAjptLnHiHXUBf3FLyNaL6qxmeEGSCgYKvQqJnRwv2uw54Zbb7Espfyn65waYvsZ",
  "key13": "2tNzCcATQW6E3T4dBtewwvxQnvXTYDZ9ufv3hKPFJPhYE11YV1CdE35KGQEchs41W1J5aWe48KwMX3J7LTpeEg2k",
  "key14": "41CYtq78f15Q4zJ4TMPU1txbyh5wEMHks2KAna4HFQsySSXhwVdGjMKXu7d1Tudq5LSQ2GqDSTSnxKn6qLvoeC6u",
  "key15": "P5SQcv7KxFbL8eA8nUNWg74AW5jGbtPs3YQHT2eSjxbR1jUgcKXC1DLX7SdHkZMYMqqFobhWpesdqFSpucEtgdc",
  "key16": "4Q66iqce1wRU761V4oP5j76fSCVfuRABjEKqTJnoiegpabUJ7HFbsEvTdQbTB9TVC4Jadn72D4EXJvhktzpL3VMg",
  "key17": "2vAqj9gvkfiCHKu21xEPvXB4Ebb7pWxcg5rXZkBaaiS5gwuYeihG4Qujd321vZ8aCwfRqQdNG44vH4ovWJemVfAR",
  "key18": "3qGRvHpcrtK7EPesLWRvTKjn9orasMCfFGDsTt5mQrcdLQeTQwRtpPShp7Pja1UUmcZrPfYc7LT4Ex6E8N5epuwS",
  "key19": "4GL4yf4ExfZ9dnR9AaBrxE33y4mxEwRUcyQo8gdQdPdzaxTGo4MNv42rpaQtHBJG1pQXChfRGCDsEKUDdMg8SsKc",
  "key20": "3M9isgrhWQD72daobLvviKVcTvzX6L49HX7ziT9W9RLzDEvJKy9RN22XrnF2h5U4nrZ9VMfFeKHzvJGXYsGX7iGp",
  "key21": "2zCFRboeYgyQEJkmLyRANxJZBZ3BfmQW4vvqLLZWRWLEiPz8yCywFLJfvs62mwXBsKWAiDDuPzEVqRb9tudjetU7",
  "key22": "3z4fn4EarzPe3WxXZ3guquQk4TZG686fBVGmHVx5AkmnTY1hikqhCe2kBczpWcZLuGk6thQ13hDt7M6VsAaSCDgp",
  "key23": "39AcGvqER7kryNCbzHMKZTdVd4VyQcRWMxNzFrKMT6QpqPU4CFYnv9astbDk29TuhZfqipzbbJXJ3QVTG8XfKbB1",
  "key24": "7SSFPtzRjtEaMfyX4AKNCgTqoieouUXJiDrZuXXNUc52bLSxmF34kG3igBdxj2vKemNUuRHT5ANNeEGSXvn2Ztf",
  "key25": "2uxsLVJhRbmSd3pCSchZXcEoQCvB5beLtv77c1XNA96sG2tdPpw1avnqvNfTbcss6YEBd1FEx7byPAESuPiAbuoZ"
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
