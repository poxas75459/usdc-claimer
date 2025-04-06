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
    "5AtZkMHteBH2iV8fwV7eKt25GJ4jDvoo46UAzFzkKbACL4MMBFFjs9j46NqYxikRqJW8ZG8xqHYd1VvcFNohwp8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5GtD2YWvLYHBkzmixssGt1LUErFRTZS3VoUa4s4Qs4oRsjMjTQwLgGaSxLXLBcdQCXegZiAk7LGnMVKfXroXZp",
  "key1": "56FGiTxSsf7ioovZ5NcSswSxAEMnNF1nSZ4aFog3vokq5649NinjE7J8G41uE4VbX4KVt2h12wRUHue1RsuAqLs3",
  "key2": "q8hN3fWotyA87N3ZaGaxgrMxEM4eBPDL4TLepr9Dv9J33sppGEjZ6b3xFpax2SBs9hsaAf5TFAr1yT65Htv1Ywy",
  "key3": "5dhTRy5M919DGczKtGkVQ8wudCHGHsLzMerrotrTRJAygMdS6FpBbaTXCtch1SxTZkMc3BDSKTJX1jqpqdnREKXR",
  "key4": "2dAfQLjvwerwaywJHCp7nRU3Urs7KDSXTv9Mgm8rT9Es7NYHa9t62ZyPDkNYWNBSg3sFxLpw9wyxaw3qooevRNem",
  "key5": "4Q5PPbBbqdLwEnJvgq6ZvUAe4ZrkpQdh2rRyGmPmcprYkQsD9vD3fjUYnrKCARDp32VExSPteGgc9Nym9yzXvdW8",
  "key6": "2KMQeh3M229PLCxGzYrcs6rZ1JiwSmV8PhskEvqcWbVdpMX1EDJCSRcAWTsbqYoGfyRLUGpz2ugRrEXwn8byDk7T",
  "key7": "2EQ2t1Mdi5hWvV8UoTEDHGSnnUeRp3f5fGnVYWUqRm9duEju6vusmttwthEXsCdCDPJgr9D3S1JzEJ5Uqk1X6rC7",
  "key8": "4WntypCzhhYNBjgNqjxDUYazdonxoz499rTUCVKzgpwLwBFRqgqb852GR7SHQ6X286LLueyAjUdqCuzXAbCqEU8Q",
  "key9": "oRaqGBmSiV2ohh2EEYSAF7BuPi4NRKc8atMCA6Xu78bQ1GyeXQqsD2cGHut2H49LKgjECX98J6sdWYsZLh2x2vL",
  "key10": "BvfG7jf2BfCpVnW4PVd1BLfeBvh5QxJ3Y7EQHHRzfBHor2x9KVWtYq8orNS53u2SH2oAm8k7onzWSaFxPLsQhpd",
  "key11": "3gkTuuDUGHpbH3FKCVWNdZC37ADxhDWCjtSQujbfE7XXYcYp8ka4U1fF5EZLeoLVo3A9gEZxw923aPFLoaMP5sSK",
  "key12": "2bDDCuMJ13qqNK2t2jXNBoUKVdqoQpnvAj4SvK85BW8tiq3oAEikBNHdwo9BG1ZYcuwaUYvShcfxaVC9PzLEtkAD",
  "key13": "2yDmMT6Btk2cVh5m6CrhXDGWQxkhzXeCkRsu2L1V2BDG9KnzbUK6QjjhvQnmUsiDbeRQkkrj2mx8q1giKAisVqiV",
  "key14": "5cDYYmzniCw9B27ayi2oVTbz6NUoVy4HWaXraLXa5aT89urbKz8ntkwtzYJg8526CQeBc85mJAuCPZAYyNxzjK72",
  "key15": "3rmNtJsNnyTXn9xYta76WhF7ycR6drTiLAmzTnd2sHVQDtenefoCAwPAzUA1kgnbieKgUQS2iY9ezV5qfX3BsouJ",
  "key16": "a9j6vv6WMJAvNfUGaDNDqMZDbpQEDd3bnkRm8qLpYPoVkax6a1evTq2EYeGSZ94yTruRXwH4xiDa2ohLtnCPFXM",
  "key17": "BQmSUeHfQZ6jnUk8qxKx3mHNvj5exJ7ecZTiwMDWYYjs4xvM5LKEZCzPqwU6B2GESyMCWF2NzzkYEXGFFWHQUSy",
  "key18": "4EN8uPS2gyyPJXngAitHPyNKjjhF1741xXaJZuV6srpfBZvkkoAtNNE93PfVhFFMo7N4d6Mp8QNt9KzXjWJZJAJ9",
  "key19": "4QEnYEyq4CzFKC25mKfW3hMEVVY7Q8LmueSbxixXMXd9zLhcdUHkaQ2izkYD2W3pQub9E5jC6PZRUCk7pqVTazPv",
  "key20": "3kQtVB4k7vP198SB7p3PWPvar3AysCqPKKUrzEFBv1EP1e6XCAfVibhdBFh3ZZjCGyHHKe1yZJGZGteDn8qAU94j",
  "key21": "2fNYc3LD1fqgBtPywrXpX1Q3MB1K1C7vFKD88aJVcxuxBppUFECeGyZbvdA94V2ZRTYGvG5ia3eixe1MJ3fGPeQn",
  "key22": "4iwzH7R27mcDr8pBntDYwd4nV8cLVrwU4V9JWugrNTxqN89oEjso53F5x438jZAYsXPMftrFWsrmevUz7eDhZP3E",
  "key23": "22JdaJWj6i4bmrSDwoF7TjBbMWZHV3DVi1NemzD8bMjQ45h8UfwvkxTsZyfmyJLqtVVgFjdPjQwqdoebma1h18zd",
  "key24": "2qF3hVdXaYginxCMepAfEEgDZTzVhMS4qs53mgoAcc3vKNHGQex1mNFyGwMcyEN6mB1LfyD2uGr2mxZBdtJFqXAs",
  "key25": "2UWq8YkdLcheSWMPNcvKietArWcktnqC8GBPwRfahivQTDHwJHdCKKiHiU84FYoX6TKBRYTTz2qEkQwxtdvaZi14",
  "key26": "3Tim9t179v1AHtWK9qkYFUtJEP5bwwXJdKnqEAC1BWbVPAbJvg9uxThxruY8VZZ14gXPkrbEa47yXwxmBNyxp1d8",
  "key27": "2HzbwywkKK6ai24shTVLYmE5gTEjt4CLLTrGYd2n9jExZQ33KS714WsWJaP5GUr8Mci4WpcrbMC3xP45B2t3wrMx"
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
