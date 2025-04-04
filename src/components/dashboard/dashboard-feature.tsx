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
    "3k2gvgXMDK1QmvT47GZ7qhbJarXoG6SXzpJXijhzpZK3vEVGnqo8fUGegQZPqB9gCQUvVL6gj7oCzU719ba7tjbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qunLKKS9KdP44doRo53Jr7t2yDT1sqfKa4D7sCaj561ZwnxkpT4eVd1aMMqkb8yfnRcEdnoLs2eTtcDdbDBpgks",
  "key1": "3tRkZCRAK94Nypayqck1U5nSUQJfGHeU7LDf47LzB5JmLBzUrQHb7BPU9tJrFQyawWrBwKNDWFX4yqc6Wn95yBaR",
  "key2": "3DkP98ah661cds241iXfgYsPsFt5io8RT9VB5n3jkY3LQGA3RGj4tRsmyUgRRhfqCP8z11vRnwwgzCJSWVuiUZ7X",
  "key3": "4JHMDTLz5tPeW2pNpgnn2cyVamchdNnXqQwHag3DQKzkiZm8bEk2ugT1KX5ZboU6243eheDb9TVZhAFKaykM7Tpe",
  "key4": "4FgeTDeZo3X3Y5BFpPVwx1oSjj2rAysn45rLQh9idD8QeADebua7fh84MS3HrLRWuSSqhotcYV7Y7T96i3qEQQjs",
  "key5": "2rDZ4gNftk2J7cmJnmXfpqVu16VujsnWfRvNemAcTwFpKmagjm4Znag3ZxvFNoDzwpaqgtXeTCnGk6AfjGnGLaoD",
  "key6": "4hWoFVb5e28kDFY6bZozoto6XEbQUkDbUjtwVfZ3urMk56g6gW3w7mbWYb9PpX4HWotxNwEukgueYBLbbu4ScEQJ",
  "key7": "36bLGh768FjV6cJCqVJaQLE6kqz8RmqJzqUqeUrRsV5okAggkjPRU3S3EihHKNYY9pWvvFRMeZ72nzvz3NcXacvX",
  "key8": "5sUQJ5R6gghHN41gPmxjNuxv92iGRwrAE8M6SWXsBGVbEtny1T7c85GoZqMgqtsZ3MRkwfv453VM7GwSsKnDuUhn",
  "key9": "LpcTSCQPRqzC7sKbxrCJyQdW9MrzEXyrtX2RF8EvBeu2X6V2dRiFcWrcDHFzY9Ca6JcUywjKb1KYfupqNDCZcrz",
  "key10": "r7CvwiTSBo2Wqc6SGmpe6fdP4N8NMQqdujqkxyxx5CzXBMqohAs6gnZFRdycvbhK4MDdDNBnia2UMxx9Q9CvMpb",
  "key11": "4oBJfAxe173ytLQymBaAz8BtrK9iiyq1hUAxZb4NTGQed2vX64LRB48xLgzBUzmbHMfYPiceuguGA5XNBqpneoXZ",
  "key12": "2JiHzr8kzDrFf7NMPcN4GExgxq1jqLJwVCQwvb4vHxZrfnNzT6NsE8zR8hqHMu4bdZ3N8GDwN3t1fwCJPu4q5Uv6",
  "key13": "2t1jFU8NMG8Dg8JwMWZoamor4YWtjHJb3ooFG2S9hKPT2ndNDWHcnYp746Xk3gR3tBLGDrVADCVBe7vZ2YfyUPNC",
  "key14": "4vc28Sv5uMMrKK75vvkWixbBCPU3JuxyFotEpAvGx8Jy9Ym4spFYekE4BSa193NrqzpbhCFSfkcBBB5Uf6Tv3mh9",
  "key15": "4veTvWjRbzXMPpkGWHynCAoo4DL1sQVqDDsKRmYzgnHAsq4yE4wxMM6GqFREaHSuUNQj2gnvi3sf1tSWupQW3zqn",
  "key16": "4KyMuJy6r98EKLtPGve5wErmAev9ok6Y1NFi2nxvGvQrdsVHFr2XYfZrKUx7HduyTUpzgEaFCN6mUxqXuBytp5TX",
  "key17": "4iNZC8xaTMwDBhhtMooQBYmYDepTSRC1PYSVj1UuAV6Bi3c7q54sfHe37N9FPR3ivzpsNPXvFqs1b91TUYeFRadb",
  "key18": "5JQLfq2QjsmruKfL8dTSnpWwm3RRnJdL3HCw2zgRXTWjADUgVJKbHwpM57iaFa34TYPYqLdTDBWKip169ni7QRrE",
  "key19": "4xXf8MiZuR72xDZg6euE2mKEatMyxDRB7BUkn1vSjKdmASb8Acuk3Gfq5aC6YHc6ZjaZzTVEBgwtCe5MUrp6MDrg",
  "key20": "e1zQqJUZFPHLaa64QXHDwDPvU3ZShiK55ZE8LSDoTWSRchTapep921SaLv3ndSzM6hohERFHMaiwBrVLVAtGJQF",
  "key21": "4Td8kLrnVLvGAmSXs6sqo7rttRArgw8sUiQ34t8kvmmyeHhf2cRXvD3pgpqqf86zya5ZmKGxVR7EwQmV8Sf2d2ST",
  "key22": "2hSfFJxNWRgekX4vErKYe6jgGXgPYWjpDP7hUqKv51P4SGkH6mYcS5RKk1L1a2Zq3iJ4tVweBf2RNb6adBXqqSee",
  "key23": "RA9kUzYpne98W3UMg1zDMSgjCt6y8S7YqgZdsXNeAbK57qJPgXz76Y33Y6mTavP8YavgMURVH37sVYuciajdPTf",
  "key24": "37i4QHrNEtSZsJGJcLRoqGTpJiZKYNN8zToS8X7SwRJbG4KPhbLqjDkoj6HWusGkq1pDB5CvCWkgXtzGNbzNt3d7",
  "key25": "5NK7fEpYSM8uPKGTeTrBWFmmWE2eGdTTqJp5QdVjAbcUBjjkgqA9fvBs5AJDdT6gYCHsWRXau6NR5eDNAugDaa6E",
  "key26": "39map5nGFeHLGWqqTtcW8JWDkuKCV4Cvzu1haq6H5UDS39g9carjXctVpLwPP6UYoyrQ8ZQDLAwRUh6PXmgtK9Wc",
  "key27": "3Xz1Ltf5HzFLrNsJTq51R1TjrytNVpwMnjxD2CJ2FmasfmWfBDs18jo5uCwgyUmxQgPRkKHdLDmiv5DdwntWC6oM",
  "key28": "3CtEymTobk9NeycQTYthxNnhFEMgpDNnthttbfLesLDNCG8rZ1QpEVvXuBGj7vS3bVhnLsBQv8vPxWpwLkpK7AFk"
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
