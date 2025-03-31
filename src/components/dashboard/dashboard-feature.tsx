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
    "4qB5Mmx1c8EKwYHXYCxHwNJm259Sxfy7Em41KX4kDbkdYTRQaR7LP6QvLmZvQvLubBRCtXJLLnnb4yj9tV5QJ1V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QbsRL75prHFDScdcRShXkNFUzSDFygv4LpsmN8BXK1Lt1jVXepgA7s88Bpc9AZcNSyjHLjw5YCJpp882Pt7apX",
  "key1": "3ZvviLpqG139mfjHgjGyCVmX1BySYydtr187zpoCnSMPPrZwJHGqpNecTdKae4ucdDoKBvUZRgTWn71d3JbvcAnD",
  "key2": "2JbJJA858rSkQyC47kUS4AgDdfXYKM6nu6hNKxxibNedCnSxb7dnihQwYZig5y2HKfGkFhRcBT3kEDDLe3L9YfBb",
  "key3": "vUoas5Dk2yzJizDs58bp33AqMouhNcs3UcQqSjfNDgCgRBKdFLiUsaYfri6kBFERyEvbPGz28skFf8P6n5jhfqK",
  "key4": "2LJSzgzew5Qr5wxgp4Jew6NLjYShmAerHprtggmgxCSHp2H5HwQvHBqW5YguRx1BWEP194LJm8Qn89NL6RcdYeLt",
  "key5": "3bUugXF5TN9XgEFZBHTTtk9ka6n67rdWa5VohV2ZtVVEQC2aEQFh2oUVNrEEHZ6Qbx6eZP37T4WtNNEUiNiVjSbC",
  "key6": "488CoAmRU3wLxrw2LFGQzgmxsA8V2diWcwEQX5iupvQgYozKW2u2GGH6EyVczyj4qkEz6wUDr31nuuCTAZBjphEn",
  "key7": "MBMYqopciyrJzZingtnvNfs6cVEkvbmTD1zztYHwZJEXAaNXi4vEDckJU5fwz5V9JRxH5si3yNgrCUtfS6kMyrt",
  "key8": "427zaYM4DvWHo3BZV1xd9rPVoc5A34TFZTaS3hLko97YWJnwdS3ZWvFTyfLE2KD6RAUyLHS6ZF5WT6HY9SCDCPns",
  "key9": "26Z84haCkPadriFcPYtmE7R66y9E4mxRvhBUMM9WNmo6FJA3ZgtmENBjm9vosQ12KUEvRKddrDCSCVbDrbnqejL2",
  "key10": "APumYLJynELkXgmYtCFMJBcDN5iNqdzPWKrtfDxWW27Dbo1yWtHEeaMi8Wfn17Ko4h8HrQ6hBihBq9FaPFh2MZf",
  "key11": "4oiVbcVQt1kuZPuoNh6d43jeScVx5StTAHX8sDyDVuZdTWqCNKszNCrfrbYQEninXQFZrtbpLZFMKjSrgMmXDAx5",
  "key12": "4fHQbxDwWnF5dNrzBjTYzH8Jz1J2mUWYU8GmQk2VQKYGzLrQ1jZP1WC7hnvHctEScJd8rEj6K9prCbbf12WUVxxZ",
  "key13": "5VXU5Kr1LV2C4pa9JZDe4nQpjx2n4kW5iwGoftirHag33Pve8dZMWhM4oSXXDSQsQXd9s3Wf5mky16DP1fomojQQ",
  "key14": "h195AEyzvN13cbwu8uZmwJ3s9n5BFBLaF33cb4fkaMun9sahEtrjV3U2hvZqZqM5Y3LBu6D4nrTrES1cnETUQay",
  "key15": "QcUgND5b2E9BoVVFxowhE7XZ8dgHxHq2YDdnGRz5BEoXU92rBurgGYuVSbnwwHuXXE8ihdRaMAKkoPfwekptGKy",
  "key16": "44i12W1brrEeGYV8cKpf75rMBwgkMJdwCpTpuDeLG6mFdaxnE37FfVk6aruCj4ZTuZv6VVLc7to56gLtXA4ZJQRb",
  "key17": "4s3dsBaNNkjvY1npFDVLffVyFqFsTPpBugdx8C6LgJfSDgVw2Ajhs9qd1gqwFNvbeqYRBwodMPxdbm9LfkXq2kxV",
  "key18": "JEKEtLen8yU48z8Y9o5pQ7yP7bP6MZ5AEcw5xxNBfTPXnrqtFDzirM5rHSPsruEinLN2H1d4rXNNeLNDnmTrzGw",
  "key19": "3W2JRCeXRtBuAAQHCSTKYs7zCPiBsaDCG9gxaUYJLKNKrnq8T36auoTHMxhNDZrv2W2kSTxNB5BEmHAGkc1jFzfN",
  "key20": "3cSLryg3892oS3yEkW2wuuTaqzwdeusruz46kKB7Cpw6RSnzUQw5FDLVGZgZCWYDYR2MyWjDAZs7hwCHYwmvJaYv",
  "key21": "67L4J2QUm7JuHMHKNtNdHnbcs3nKTGD3eEghQ7edeNnQbYxqoS7vAS7NYFnhiNQZncg3X9xu7EGsAwTjhpAJQvGa",
  "key22": "2aGL6GVtJsKmskAFb8JoUtfiCL34NBM9stXGeSmWVUyZNAvkugEB24gMS8CLfgqFpZW7SG6bFrTJcdd8F6pUQyes",
  "key23": "3yTKgWaGXqjP7AdrG6haTZExbzhPnoZ96cZgT1E57kFQ3ediihEkxhCZ4Kqg7kzmFBkyinmLfcezcEvqVR2VYZVx",
  "key24": "upwNDYweguJo6nae8UQqzFmhLtndqeFsuw8MbxrHAPJmN7Gqt1QUxTie9BLdXKzhHeZ6TqyTDkVzFfBwTgjWzPN",
  "key25": "vXgbh2zMAmHYJXQYSyqkSZFYx1wmjphLHLqbSVgpQDoUDM5bVdWPCkgyehTX6wRCiBr9P9a9kX9H41r3UDaUaPm",
  "key26": "4hz4eABQaqtwWJXPwBWCkCKqMrpousr9V5ZMyJzyguXgQSLBRpsB69tp6JJe8gWRbFXMqyt1PircPytGuGidLV5U",
  "key27": "2MoALeJ8GCpQdJFDHUx9jG7Ai4qzyYHomQH5sdAMwujQVCErWJZrqbHXk4qWqZNhXwJZ72RfBefZLYNNomzKmpxP",
  "key28": "eZRRkhi9Unm8CjKLC3iQwr9gr1qmUqWByxkNa4UY1GeYzjYAvbaES3JVNFaexCmU9B5vURghL2g8esg52mm5njV",
  "key29": "FxybMU9VjnN6M2r1SsFLB1PUdcp39j2aotjQfMoWJoPrBn33odsh5pndfoyaRAFtXySC3ssRAUf9nct9M8rm5rq",
  "key30": "39gpDpig3d6xHSZ1gUpN8erkgNvPzVQQJKkHeS9jnNeAZgXrRFqVFMXP9EApnaWCWQ9EoYrws1q7p5MyQHyZjeSC",
  "key31": "4bRPtvVJQGyZPK9mPS3ZF48st3j8XDBWzSteokbejVQGWUNRvDrwy2dSNj2F9Pa4gXWeJ9qoBdZEwpUDXb259dEq",
  "key32": "2iiGQgFvopnEsEcZyqTMRPDnMwfW34yxFCTwHnQXcRNyeYF441rqogkKzcKyEJY3ysYKbZykG8up3bdXFuGwZMwa",
  "key33": "5B42WyGKf7HXHqFtxxvuNmFJaZC9V3B4sdEpF2i4nCCQcW1o7b2JmbNAiqfAbtPB59RSKjCrDHf8quSZd4UYTd7J"
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
