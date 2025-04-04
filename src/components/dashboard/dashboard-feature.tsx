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
    "32mxM5PN4Umts7xjxcig99HSzZRHzdHKUs7ZYBjjaAuP5NNrWt5xPpavGHgmbT1F1wqWKGAg1psGnNt14r1X1NeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L9wBTuftHvM8B5wXsGMsWa9Pqto5rRsiuda5rhvHByVU4SBbVHJJgez2aSW6S2SvmDjHQyjnYkW4NSNgktwZkes",
  "key1": "3F42ww74m2UEUxnzey8gFi1j5V1Yrmn1neWybHQ4W4seDcycy8bm3Rz1fxaP5ZotQdW71djFAoKDQv6d67ZZN3wS",
  "key2": "4sQ1gKfW3SRhEWqZFic3KcsgTow1wi5niWW4ihGszjhznVpxiXEZEK1HUHHkBdB24jp4uAuQMRavvyu4zqU61Sxi",
  "key3": "24ZViFF4StkEt155ZQCHfqLYNXuKnyxLEWkzQCmJwjsURrZUKM369uv15ga26CN2SfA7Q3Ce9VjQdZmhKuEfXPyc",
  "key4": "DkGy2EYz4Aa1WniktAEF2oodvMTTBf37hUjSiYfTTWDcfEz3PEmv7o9ZSdwsrEN5adpV8mtRaggk8sQ3A55QKCD",
  "key5": "5MwFxyMkCh6c2v5JPsc3haWBk6LHZKumCiHCcFWdhjsiN5GXiRoE15tHsGPRCf1z1uEu9iQdBYkvwQ94WZxase1",
  "key6": "2BEVemQVgpuK7L68cGLJMuCjGwtnz7uNEyKnaiSpV9gGLGEHpmiQKWcKWA7fLXq9PmF8LBWz3B6pQKGUK5tz4hGd",
  "key7": "3Xd7jUf8C2R8zuphXpSvm8Q9E58tepNVPe24MzbT8w8tven11wBDQ6V1TywAQkV8VBbXGdmRQqZpHyffiFrU92dY",
  "key8": "63kJZbCXCDmt1ZBSmWnujYzWe6VR4ocacxDSkHKbbMNziiJoZYNhS7N7JzVtuWadani7nH3uRtUBXjAR9hbRenns",
  "key9": "5ZVkm1aMyAq6NkTWDCYX27VC2CF8Qy2ZLyvRPoGZ2txedM6rqmasyZR8W4Y1jEkSZDHmWcVnb7WAKbDzRTgGfLaU",
  "key10": "x1Kxj4ZNTiuYx8NoLrfLP1A28hX3KuT6kmR13LXGiyDMjD3dxr88fV8MisygteVeYUKMkq6YZkRRpjEiwZWG4ug",
  "key11": "3nfAkxkZM3SBbUSaKL9Ju8939q8239iWERmp4BBFZdYgLBK4bG1Wch2fNPdC4EtxRqmSGngFPbARbpq7B9MgahS8",
  "key12": "n7hkaZU94CKZdwqBFYHBWf8QqHofNBq3NxTRQxmjnpxmEfKATHx6oU1Yz9bdhFE1H68oYcRG9KzcTAvgvLiC1Vb",
  "key13": "5srnV9gGnzkLrUMJJKMTxQULbwL2WV3sL5KB6DsQLZkQmv88g7eNQDhCBHcuJPWWQQRkcrDUDUsnxyqtEVSvKQyG",
  "key14": "4zRkwTHj8eVP49KK2TcxEqQd3pJXD5Ax1oqsaGpd83hkATnuPYYuVezyt15pREvRWxP8PQsksvHLq6otKTgNcMt4",
  "key15": "5b2jeqfJTdKtu5sUU9fvvnHCohgd2ShPuC1Er55LuDtRmuZEJQC8j2SHruz6Q4CV1nn7bDPPRgr4WTh8Qvcj16T8",
  "key16": "3hNUNXdHnGNUeLZYiCALicn5vkP1G1V6RrqgbJoDJbFKKud3VBUpH6msdqtYvtPFinUFPCCMGmgEAjm5pUQ7wTW5",
  "key17": "FwuFrq4JZLuEszeTHfFqK54sBfgCmY1Ve39z7wCAJDBNx7mAs7YVFfPRC5yiJKVUr2dubaki4XzHoRkk5qwwZ1i",
  "key18": "T3TJQbPkRjr46596pPacHWTCWHWhPVkdzDxCfkbopqSX17TYSP3FyXQucS9YkBDFqzK83DzQEDQx2SjWkkk2ZT6",
  "key19": "5R1QW18g5gKwg4R71NeF8Dv9JoM9Fiqyn57X427kRAGCEvXnQhJowJbqpR5n4AcAgNuZ3ixkHuKGC3ogm1vLeE2M",
  "key20": "3JovbypNDs7veYoK3qWPRAUMjcLEuZhY36sHB5dhRDiW8pY7oXFNFTsMTPu2qzxy254FkyJsWtweMKeef68D6TMS",
  "key21": "hXPQkGbbhawQBQmV4sMLmHW99nA4KeLRFPfitUecqVPJXaNwCXN5oqzkQSDMnwEeRDEabVq8GzS5UwtW2YtqnRt",
  "key22": "2nfvG5rAVb6wnddUkFX6Sb9gUYxCSUeKzEpB29SXWJxrk5WjLLqGxTukhgEZqL4iZbfYuY12fN6k5Bo5MjPSPtJc",
  "key23": "44cbfgSgkS8KMqanWMeB6C6p2RVKXE129Egk5tsqkboAx5rimSWxLgUR8vgTZ9KnV6LaG59jQHpudSwLZhV6z5wK",
  "key24": "5KEBdtm55Q3AJZRHPVuVGHM5wM1gCbfbSHJkGQF6UDVV7aXZeUJd2P3iodJ9hJGJ676Tf5DPNjYNbvZsB2T9CQzo",
  "key25": "22j7hvTiAfGGVEXRe9HhLVPnfceeeePR1c2jPVNJAz8AuUariR9Nk7cASeEyr8rVe7eaHmPXhsajbAUJwfCwD2zq",
  "key26": "4ngh4K6Ffm55eWsFmhvLV52rJEW45GfsUsSHSHZF2HcuzzsiN2ew8zUPSJffgu9odKCV4Nua8ibG3zhBXVHwT3c9",
  "key27": "2E2sWYCjF9TaLE2WwXdwKLFiY6QxETvufHy8htEcgzxFskBmvMA1dFaqgDQ6VR2VAzp6eDJXtDmbFYhKJK1sgBiD",
  "key28": "3J8WEaiAeTfX7t5bTKpxM1varwgp24ryQ6UjHJqT5a7qsuZuZXwkE73pf9np2RYvnSGGCVECjX4ZypTGiUFc7WGn",
  "key29": "4fWo6Jxppt2C7CnHku4bqsayQEq5KMC9pGLAaZrRrZC6S2NGnhWYj9MYBNCnjRvZScN1Xuawk4McejRny8XTPARc",
  "key30": "5RX6XSX1DqC7C5JEqgnZv1RgXjtpHGJX5U1BrS8Ei2CZKPbGV4kELENtGm6nxevGe4xS5LGR8f9EgTdLmXggXbGw",
  "key31": "3tbGXMKF7vBm1NXceGaEm7PnketUUx9u94JxgMmJRpSgxX7H9cpf7YHc3NxYa5qyiw8rSJDHJ6L1ZWrEsoKfZHUR",
  "key32": "mE3moxnzBdYiDWnKUUpyVfeUUep3bDGddwP42q5PGH8owfCESbqMuSfdx6VatszrbvhfpfVpw58HgY1tNqsq4bz",
  "key33": "5qRYJzBsXSfyDGh8qgGSQLwBVFobB4AcqXFEjD2kDuST3i7vSg5yQqsAxiSve5i8d1bt1hoaDLrf8j2uXFGZyE5R",
  "key34": "6ZkTYp4VijrCzPRyC7vyyW49HQh5r88Z85Z1VJJdWPKcJePvgm5VxNLCEPhcUCb5hHiTXNgZUybcrCUitiHu5sz",
  "key35": "28mcJpZhrXnSqfnW7UvH8uNyHegPRsEbK7vQbcT9BrgQvAutUCNysZ63gcGZrQqaobd5F9Grf3onon5ufVCshWSy",
  "key36": "3UkTGxUPvstnJyLd5S156t6rSt9tgaMbbfXoatZcNRWistovX4kuqFR84o19AmPp3zXTLZ5vHYrfpsYZ9QSkcdUr"
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
