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
    "5pDmX4sVJiMJebok77obNLTsaDvd19YUV6AgyoLfYP3kNczCQ69jhL1tCAtvxp94MUsTH1BZDryi1nWDgYnjQoiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfAadWdnSbPENb95NVeN3jqj2aMK2PypVYsLwV9yR4x4FjwYitnud7WVv6uGqWupXZX2QhUWp5f951of7hHWqkd",
  "key1": "2uzs8MenvqozPLmEQAj2HCVZDL4B2D2SyCkW1M92HE9hKz7UgJmW1qFytC1Q1kWnxgj6vJw6ArcCpKxNJ3HXLvHA",
  "key2": "5wLPVPsnASReuVw8nD21Q1FHjvvJgBeERXfWVPmkjJmAdWb3EvfemYiPa9sBXBoFWUJguHpTVgmgPqNSzCA8j8yj",
  "key3": "3DuvUrxqgZ9TMSp5D1co9fiLfMAt5ddqaa7kzQJi2CVuLzGfc2sE6EVNxcS4KeDS8Sunjtrr7KdFQS9cuueaJZG5",
  "key4": "4HfeAnZMSnLCLV7BNGPkbsZaCvWX4uvNbeRSFRwu1NkTxBpAQGXnTmjeNQEqssRG3GdvetGhc8kdFoBfjAWKarsN",
  "key5": "53pUmekKzWjvYqV3E3zY6SbXkQyJYsK4LwBnfpRcuHVd6sfSBmeaBUPG7kpZAqkvdb9X7o2sjERXRZkYMDBHJ6je",
  "key6": "67827XrxCNDNRnbyYNmc9qDuWnk19pGAnq3HQJsXGNzuGkJEK2jFxdHGSvoWEmRYbUVLVPNTZzdZSjjr4JS1FFCN",
  "key7": "2x5RPaDzx9EBdi69KvsaesCAGLb5PPXmRzLVDjoVGiaTx1N6GYWrpA5ePuddtjKAgcjSqB9yK7iMe4TcV6Taq6Y6",
  "key8": "3YWLKAyV4z2bnLvTmwEv5SVu2jyMGoaYcEwnZDh6BSxgbPiaFKGMSJhfK8pVzDfwBC7g69g8Ej9riHBMhsQJjDpL",
  "key9": "3oPNx6dd8rNqJ3X4VocrBsABEZq9cNGiuh4xhnp4nMk6DnncztjBKupC9umAixf1ufsL8EDRt1K8R5W2exv5YZKd",
  "key10": "4RG4PhBrsHfxiZJJB82a9X9Hhabugj4yxNVZQ3JrjxvRNXpyH5D9ZDiVeTuvPS1D82gAtUkMgVmZ2yDjdY5kNWpk",
  "key11": "3dfjh4WU5jkN8ZDwXLm2RssjfBHdS5ndSWGTzBWuaVcSfmcwF3f9o5bpwuabujKR4jPXNYa74Nqyo45vwJ1o4ZDo",
  "key12": "5QEo5H19NQN8zdhNsZU1djZAAaFP4YZ659kgMFa9mtJ3Vtj9sZ4m2Xm6fYcEYXcmgGz2Re1n2eyTCybXjBmWhA2J",
  "key13": "4HLaxnqKU42meUM8KojTXoDbRh8cbpeh5dBAVpGJPgKwWWptzYBt24jxDp1ixZ2ce2NjXgqiLkWbxU6zqr9TH7W",
  "key14": "3fxSParUdaX5T5w4uNKYZYCp5QKQwpBeXhXe7JcsPD65WAwJoagjphft65B8Yda9X8Tz9uPNR7mwJdqPPChABzqH",
  "key15": "5EZCxgo2A6T6HrTM26USyVBdvRKK8DELTeuuVmSKeRCef8nL6kepFCMothT2USFiK3u2mwNzvvTJ9gBL4ppLHq1u",
  "key16": "2Pt1N2Nmg2y57NYN3KzTyMFRwTceWTjfGbdpp6DtymWfdxshCKZHM7RFyRyg8Eq3BY1pSuiVorNgPkxMmmGH2PmF",
  "key17": "4tgRkSJEBUnw838xvCiEW55iDdjPjRHK79RPF2r8fYXk2eSnBqtaXnr1qttxVRYzvtLZMAmdkPecjUC96QWyX5Xc",
  "key18": "3PLHwP5XqWe65wgdYHLKA9ktoPKTGioqhJpgxF4CD6mNMU4j3JnAeaLFomLbUkzXoATJrzbxtUWEd4S7iqSzgqCH",
  "key19": "2DMjvDqXT3Wms4wLFo6sbqFmnE9sTTXFXeDLUj12kU94LSwo5Mt3dMiBkzmXcGWrRQN9zahxs4eUMHdwrLxCekaC",
  "key20": "dgoo3mx86frzQ4wEPfjpf3n5PWJtMrR9VpT9nfWTbeXvR7rYssvXLyZeaG9QRJSXjmRckUjvcP8t97PqNz3J7ww",
  "key21": "24Br6nG2dyqGHNNYJPVFy4gLg2MNK876u6wm8ATtsEH9q56FHfKU5PNcZMreXSXh3cCkgYT38X78Wr7eNWqfC4vR",
  "key22": "3ztjBtqaLWES31qgP7MXU8w8e9RXDaYiXamWtsihcWLh3shAxvcEA1GBtdW2kHSDBU6HkLd7vD73YrRCkwjo3E8D",
  "key23": "5hPxdmFLpYWbp6SngvJLmwktPQaMNt4DaBgawmTCruU4ustBNnq1BRbo2hZGvo3GC4cpqorGTp6v9va5HroK8usZ",
  "key24": "251ZacUL58pDQ3MdAJAsRunraoLkaGSwhqBfRihuWU2HixyAAA3VEBLXEVNwpUnJv254FYeeQ8DDgLQt1XCD6uCK",
  "key25": "36FJUBzMdgtWzkF9mqNthBBrbhaicuv7PysyhszsmojDhVadd3SraTHQgGttSc7qzFRRsLqNX9r3TJsEPctmyCGV",
  "key26": "LgNJNSFiDq7CXKfBwB9d7F12qtvHxegX4xpZwYhHBLzJuAhD5eaaxUXaFNvxCmJMj81zxgJvDZHcfbufhiQCUAX",
  "key27": "E9oaBCetAcBpFAHAmKJX7Ci8eQdAGEQkUxvnQRhFoLUkUUBwif6CSchcD5LLPtykvtvjteLqcDmeNpgycXAW9PA",
  "key28": "3SQquuhSmQv6HNpfHpW69gqUh675djTwenYQXedURjuLNiUP48ZYhMuMxRqFhywdoevEGRzRvnyLf54egPwHGqu4",
  "key29": "4idodrSiERbJDi6HjLES4KnXoi939NL6w5MwykeXnNyoKM4G4vCJzkmnWV5cDwE7xHTZbPbbdogxJ8VTDdzFQjRZ",
  "key30": "5wFtNAaCxwr9QauAUcHYyHqJCPHjgy4Jd7JuwvbBZ81ZY9Yy59Limm8vn9eGD1yqxRXeKX7uMkhAXytby4eWAakb",
  "key31": "4V4BLeVQGLfSbXsMtx7wECRuCvhmWDVieuQY9MZxg5VTZjo2paFCPFzwFXi6FUd6XoQKkQ9q8yKAV4HmP3FVxAB6",
  "key32": "3nWvKw5ydTjTwxK19Be5EejA3tcvhkbwnLo7CmXKeCEVuLtAeZmL7XmReGpP2aZX3Bp2ufiWBwh1yRwtNj5aDjLj",
  "key33": "4ox4mxeNxy5hHc1yw3wkLXjdXxJ1FnEmCKYkz3oHxR2USnKkkVkZmWysDoyQ7rSjYRXgu9gzWm7W1oo38xM6tRzi",
  "key34": "66w8rtS7yrhwrgHt1qTUtHe15n2snSTA8xgQPnNeatxXTVG2aXtyoDbtJtwaF4bkJEQ1JmjktnJfCrEkpdnFZz6C",
  "key35": "H2dQpyTJtXj8hAcvndWrTJmWX5ouSiS6BaJvBeZDh6ATn2j1tY6iLmNofrh8GgTrJxMkqd8c3zLcLv7cZy4VJzE"
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
