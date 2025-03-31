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
    "3awJnJ4YMYbtCN2oFjte9gNx2BbrjrK5WSBd1upGgvsp2TzZQjwfvH9GSpTReKRZ51kTHKVD54nDCSLLCZxYqXuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGRA52r4WX4Gx7xFLFoBrkgbsGFgdvT6cGimTFrM9X9dx1jSoukGzNKKzLCKJB1edg61F32aFkbiAS582g8Vwvd",
  "key1": "4d3SZJL9V731k3ZosFRjBhCQBF48r4TUt6Np6QFBmr9QsAPA6ASUdJNXKYRWjcYVrUFcQMMrEK86whtieuoKZL7g",
  "key2": "3vTRsiiuW2aXPwNF8QWgBhiLThreqD4jqGVp6vdktixtmy9EXQMEA8Za2q9HXrfqsV1XEvzHEuTzCqSqL3Aeju25",
  "key3": "MVtWDknyEx8NB4sAWKtir1LSkhPtd66xFKV2QauTUf31ujVpsqkxPNaotz9HzX2fk2URWCBqWZCRpGYAqN8muUi",
  "key4": "4hMtjW6APxZ6jh28FYQNhspyb7qPMcYBcX9XE1eHPGSD4mEfeFKFAxuCvGbqTQxGZZyLoeqHLfRFNnNSJ4Kgx4wp",
  "key5": "5mkpAdjJAFn3TZYpFGRqzrEtuDToCnvXQsQtMK995c7wgK3xMwSwQT6Wau1SHFgpE5AEMdyK6PLDKt8QQVTzwmJ2",
  "key6": "52E1hH9G2bnXQgekn8gG13XVuy3kwAFJDZHiqvBxjpGMvknT9AHKAsnkpvXUF9pHtcBakrz8UM4cUbEqWtX4S416",
  "key7": "7RFNbZweL4otTHEGD2Y8o9nFH6uwbVV5nJLYFNapUVkXRz3LuGHMFDSXJ4spUrSRHt7qQvVQGBsM3V8T96PFzTQ",
  "key8": "5W5NHxmYHjWNvby6JAw7zSe9rVzUEA3Aq7GEGaucKjHh4PGw384r2ESDurhPQfUSVcVsjaPVYgemRCxL4XDgQB7t",
  "key9": "3G8x3ywWBSPjqqTupLWMbw1WmBbJVoaisKtH2XaemVAsL4QBXoLsfdTMEceKetJhrBCQqG5txZGpvg9SGm3uUJCi",
  "key10": "2ZSLtHfN1o4kzTQKXSapJv2EDo42cWK4sZTiyxUKE2inmwQiXgEwheZXCBzozFWuCkYZYk9a15FDTfbQwH1TEC76",
  "key11": "54TwCNaKo83mcRJ9d1Y2i3fqhwiKwWkpnvCZXQXRBcpQiKJtEp33pihWvH3GFu1Us2knigZdpmYRpAFJwsko2ztg",
  "key12": "oKteKxxbXy5gjfQHQEfoGdcNJyvUqZJtLdfYp19N9d3wj8BjUcoXy5acePiWSegrL4LhSyXZXc4Nyw6s3osZXSv",
  "key13": "33o1RXUeBfkSvGAV8XqNqkrpXDJ4UDUevJYjA4pgyUB3qZ8ihSgPxghCPRn696G4ZuvtXhJvkCdBiFLNQDt3vyex",
  "key14": "5dKBHynoJmCUgNNA6oee557grwhHHNVskFEF25ygFDFr2VbxJ3N8QSwYzjCUfcxPSxXhk2xfXYXrvJTrqKyNbcD2",
  "key15": "wFPBkHW1xCWy859P2bgZeiyP3UT7nq8pMgmYXTytDYmE2pY6jfQEB5H7nFmXzDTHwafvg19HChkvPgewTwcbUJG",
  "key16": "2mbNoM2B7dGU6V1UXDKUsdTYRaUWaPywpfFYEKP9YEzWU1rBzTDWScoWtbwLWFK3gu9mdFnUtcmXEWvLpjkoJ3aH",
  "key17": "4zZtaLkL9ieghYSNnhXEbSnnU8U9ZNbAkJhiz58p121bscayE3V1vdEoTnL61MdmwyPxP67TcAnvGv3mM83SnVE5",
  "key18": "5fKRBmhz21WEp2u6rTAVwuiYBtceaQZoqLX6dhrmuE8noNS7P7wLa35E66SCNN1wLu9MGwY1uF2YmJwZHmmmdwdE",
  "key19": "5Jai9TZJo7vJ42TRTeMNyqg82ihc16VQyTCJthKN8YvCDkzpnj88TqEUkbFr6SyGjG22BeQ9CgMdncnv53QNaH97",
  "key20": "2qPcnLvN8S7yjYYuYrxGK7wXwAXoqu62xZ5bh9oSM7Zi6vXaNx4RYtsoLiHQjMSBeC2UBssZAwZHPDZtKEMPSzPM",
  "key21": "uLbSu17qLdxR8XwTGXauDGeWtJRHPF9JfrQnfpsF8B5QZnp2za7uvqzth758b3HTsQVuvwFppFahd2SkDyZAnz7",
  "key22": "3dgUS3vPkRv8qsJH4AhNxzb4pfJ8V8rxs6TehHE4xfVrsJvy1NXxioSiM4SFuctpkbe2Pv1po7EGY2Nuu8XoehPi",
  "key23": "5JeU9dXBqkBU2waPtUYdvtnoc1r8DNtpPodFgnHMyHCVy8CNohrBj4FWrdhFNTxyAkX1Zhyo3p7NQY5o1AMfRvFD",
  "key24": "36Go3ZKegHAXR1EpA6rzsZJ9tmB5L1VdrZmKdD3tzZtp3Yrwhw67URZUagmj8Vty3xU2NuT4R1mUyn9Yf9tjoYHx",
  "key25": "3Yc9woKsUrAqeNAYLtZaBNYZj6uJdwNkd9cU6oCZEhhmUuVFcN65wmiUBgqnGNhXYSrfdzZmbGSYe7Tz4QWe8dZi",
  "key26": "2ZjZ1bTSs64UARrJ4JGGBym9GXxE5iEmNsbTALsz2KJTyECpfyrkxRLuJFssxZCaAxqBaPEZH1YXzAw7491tLr43",
  "key27": "4t61t8UpHDbuBiqrHR4GW613nRm73uPtQCe7vyDsXQeqBW8wo6mVyi1RYv3jK5cGEZhdxMtuuFThQKn7BrBUCaLq",
  "key28": "5GA84c16kdt4ZM2b1FuEZqu32zapo1n6a3hmTPXsaSZA2yCYFFp5YXiihrjLTRJJnq5aUH7ujDddVThjzWVR2th1",
  "key29": "2bzEfur3JbhmT4jC9L1vHZN8WrEsjMfdwpJzGrQN5LwALAwtmqBidHTBKZx5Fs9jdSg74C27cqqGQVG1jf747Htv",
  "key30": "5aXjJsbgggWgMDaQr7J5VDRU4vozV4XeZrvEXnmszTCMfvSmsqwxNAacSBQ8qEoHuKqynsUs8EWkxqLtMi39rReZ",
  "key31": "66ymPCoBAmimHSDnYztrm8rz9r28T8QDN7KHMhKwAi9WWzELmX8bJrvTMCCUbsnZt9ZSEcrjMG1wn7FeFLK6FDnq",
  "key32": "4LTFDXUoucuThmSf33qFLvQdwS3VNP4w9BDDhHQtmAyiGvCQU3N59bCJ5xNRDeQsS8SeaEZjRhEXm9DJEa6xkvX",
  "key33": "41nczbVNDfrRoTo15v6pzryDskaR8XCM1EJYGu6b5dzfBiwdRxKwMRz5Nbm43ncmXTzTZCJm7GUbVRi18iv8p4Ga",
  "key34": "63ctLQkbe4fT5NYtxT1Ca6PqBmrfiB7Km7RNYzQYHjojnCoJymjswPKJ8XkKorutBocj6dfHViiun46zbbgJtrdJ",
  "key35": "nmcJUBamU5BWYYc1ZthcGNzHviTp9WD3npdFenHTiRG4Wi6ezow7H3VW9SEaqgGPRh6ZiFeVTMw2VPYBpboine2",
  "key36": "LewePoUtTVXcKojSU8NjTu6ySjvtaAEyLf8CZok9APYLkQob6ontMzPdSZUYNCvvU68x7Z24MgB8xEJubEX8t6n"
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
