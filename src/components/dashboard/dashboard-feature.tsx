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
    "4KfFNr4hozBzwgR94zSxYeXY8frextdDkKKueSqRfH2Zv7ZhgMQGpiVDEspXrgW2sCQjkzY1J49r2GaMSF3YAReP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKARK6bEBmRP1ZuWsdQnEHwyLJEd6oaNPqcH8J5pAMdnFLY8Fb21rVv76QFfPHugLcvi7ZUWby2ghyPWCouHUYh",
  "key1": "3Gp8NH9VqwCcZqUJaULh2XxjYk66RSxemQ9QfhjUPPGVEoPJVPoDpvi1jGtnbqabh5WUZiGiUz5icS1DnKjRDEHG",
  "key2": "3msh343Z24YrYwKRkiDL76ZPLdfaEUiD4pHTY5Q1JUuMAatUn7LjgtCMyQsPgSgTvoe4gRHiasiDQjAtD7QAnv5b",
  "key3": "5eqc1couPJcXiF4T7Q2n2zb7vLjpi2puiVcEUcQfAYTe4FkK9x8EwQarTZ8yWTubAmtfxv6TBKUVvYChUVR51RfP",
  "key4": "2nx6vKY22peT7Nb76QS4cBWXUxEnf52jW1VUQMNduLtShcc4YoovJ8ag165MZ4CRzSQ5PPNRkEa9dq6XXVNXMbgH",
  "key5": "3YP1dayBh19D9usZJLS7xbQXXAszaT5QQzYpwD442pwgdrBkSgRT3zd5hBoEyw1RT8FCj1tHxY5GLyLPuzSU6jPf",
  "key6": "3ZQ6ipKem11ENZK7tdCNfsfuuJ9GEqWFBMwBXfV3UcCTJ4GD7bpmWapR2EhgmsgCjb4o5EozbsXCP5wAhFbJHg7j",
  "key7": "5UynPrwzyYMLBZ6yV5SSFzTevygD5zZoE7dX8494DiC1nXq4Una1Y9vKG9AfZoQs1v5Dmxy35P9zGwtNvbYLECyY",
  "key8": "3JGb64o22iDmAxmEVMrWks378chpggyNAL56ZvU5P3575BUHFSaqVeSYwfsd7zov9jkjQrJVQVE2BX7PKzQdNnfr",
  "key9": "39d9R9K4FcMBNitq5HHjvhmmTL1PzBihifxLcwwURbwk4RP1AmHg8uE1MMXNCEDGVA4DZHKjQvbiSKZ22j1HBhFL",
  "key10": "4pnKJyzyPMGZ6DjrvhS3t8FWdMJiXYRHuJxJZcLhxz9HiqdmqCi6jLJcE7P8uqe1nNoRJuFNQJ1t4ZEeM13QYpNo",
  "key11": "2ZxqsKZX54Lw2Ps1cmqkTNQjgcSQqNZA2eQMAewj6BdamCmwEDb9G2yGXmYy36YqCofyArHh6pJbdWRkER3cXWwv",
  "key12": "5yaFFiszPCjkrFjV1KjeV2SEaLERw6sD1eUtuaGoUtmtW8K3t6iZJA6Xd52H5URgagmanQXBsCdPYDy6MjBJGfjs",
  "key13": "JFUjcqbxVLN6WuHE9sB8s3WHPvWoWD4Rnr41x7xMvJPgDmB5AEgZ9MMxSk9rmU2MJ7WPhXehqjKPEhF6dAUE9R9",
  "key14": "4xZtwGEDSoUnnNEVWCybToKHU2kWQyA59MLNK5DCMiavpKET3i9U1xHr71CNTqDEsTyvZdqqjTZ3jJD4sHv5WL8h",
  "key15": "LWhKopRt7DFsLxxnz5WNuh9ZFmBTC82mU2Sd1Gj7gofjeP9eJUBfMXzMWkkZ2mVVFDH2z26AgoPgroN8imSHtWW",
  "key16": "8PbNXFBhijnZn9XSKiadk4qvyFv9S2LuWfUUujdHTadgv9xjx5MjgjNDMe9nF7vSUAa6Uzxbq5M343dPZB33j4Z",
  "key17": "4sVMSpFavXFA3od28djzv1yU6LDa8oF7sBnYA2YdgErCd5tRubVeE5bubNjS8uEiCs3TqmsYvHpWMtdn3F134YFe",
  "key18": "2PqrQpgE9vatyapLP6uaaDrA8Uzyvy1s3cuxAa7KrEsd1dd1U7L57rynVxXSnL7qwK1s2SHaDZmTbPBRAua3SMW4",
  "key19": "4copFxLcawxV69aT27Q3NYrpVNZoPyyNpREVCepLynDG5jom3enYgSqyc792V2hoP95iBw6zxcAKbfgh4LYa8RLe",
  "key20": "3guu8RnkH19y3MwzdmQs8k7PemrP3tiyPBv4QkzvfEdcd1VGkEojEXi3Wdep8PtaXHnMTkXnyfWKUkNkrd4CGo1b",
  "key21": "5hEPEfsn9s7NZeu5rS6a2PzbRNdvYQZ8yfiow43iySUTWpJwuFzEyUq5eoMP7Q6EF5yTjB6JGg1FdVp2ckZxN6gn",
  "key22": "5AQUL31YrEopKPKdyHnVTdqcXPAFHrockc9oWCr145Dtuy5KX1knYpHQbWGVf5qEuCfTbiL5fmCL4qkTvgvjdDiH",
  "key23": "4quHyBV62vu7Rps8ofnQBCLpwkDQTzRto6Rwc5GbhVNCeeJyiwYgjSPMK4vRK1TkMy33jtWxM7ZU8wcEpKrMTsuu",
  "key24": "rE2c4Zv1BM8Bji7psWWKb3Wkyhb3Gq9Ph6mdivsxYbDgaAdbwCvj6VUnV1J9Eo94HhVEEAfKznZ2yRfB2n9wPVV"
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
