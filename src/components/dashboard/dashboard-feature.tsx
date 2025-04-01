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
    "PGQfef4XM4zjTUnQahKbCj9zhXBFeAmR48SSgyLMDPxR4T2styDyM8vxDwSNP6h4x3TUqST3ixvkYT9gi2j8DJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49AnRXgWidxjd9nc9YPcxAMwRF8S2hnREehKc2uYg9DUK1BcZJZkRu4pcinpUi2T6juQd6pxM5nfvggfGrNYQoT6",
  "key1": "4Yv68oNH85j4VBnKNvSNmX64oUM4qUwUK4Zk2H2f4mTrNtoCFJ2rGSUN8TuSb6jWhGSNbnTXYY9mt81ZiAdSdktW",
  "key2": "4RBP3MdAXy8PBPabFFnL6zuXPGxh6udhWNwoDrVp4MoB3jx4ywfnbXUT8DqA1srBPMYtDdYHD7yPPDWgTBqBBgSE",
  "key3": "23TnPnH9ikV1mmTYKoPQ7tB2v6ZLybXPb1eZm7ThCmJAphsj2q5M3zP5Aw3P6NPoZivkvKbpnWRY1u51b2euHSvZ",
  "key4": "2oLg2imCvGwFj5iSRKacwtoxU5Q6DSK9TUUtZYH4nFGqNZCFrsrwf7mgDTfC2mU71G2BdHn9Tr3r5h1M9hafkFt6",
  "key5": "54sEqN1YstZnjg58JE8KRav4PGFr3aRhMVXuAqD6Dv1xJ36fkctXhGimc1NcDsHYkUDsXAdNPtsVkYyJFhpDpju1",
  "key6": "5FDM4DUCTzKAQ7SdqG2Gugpuifi72MFFJymNB2PAK422YaAWtHyMYq7nduZW7MaLq62jsxjVCevmzQZU3We6itXK",
  "key7": "3tAW4xFR8huiFTdKVTmdE7CwSc6mSuv4JhtLTyxTYJews9TqvLXamVCPCK1cpQ7fd2wPDaT2EUos2erQd7K1mcwK",
  "key8": "61qx8xbkV2pKLaeNpBiwpKNLWXHynzgy8WVCrCpE3JJQQBupa1bHVj8XSTcdYagRstiAWD3WeqKFectHv9WhSfKb",
  "key9": "3kscM8jxGowPux4pyCW3pNCkosCYysnX5UdysNZf6XcmGcpStP6yKEHiDg1QLWE3haqDCiGup7qKc6v1XcfdDYvP",
  "key10": "ZnTgye8N168Up9MZdiEWPt88pHfBEEbk7Pmyi6NMauoo3HHXGvACHGAhQh7fDPZZ6j4p27A6dJ9mHgo2XRSxxxx",
  "key11": "2GBTdHhGRjk81tcrXtM5vky7zNEH7nxAUDqnGYdeKjSTnNkQsxw2R2W2356zMXP7YNoijCYkN24rRpWjEDML1MmG",
  "key12": "EcrXiLyVjZxoHaMzDBsWiLu6UW4i1ZdQXZekNiopJ3jjEQHZFh9ApC8KEejJwTesaqbpUfEFEWw7wABjvbWD5AR",
  "key13": "5EH5Yw6CzUSGyBVX4JueUzq9cdN6sgMakCXdiXdXKuUi3vPb2i2jBkgYeNM9Q8HFmheCaaVK9yLuAV9YTURzBJHJ",
  "key14": "2Sat3FXTmGKRJ8dkG9zpMNg35PZ7MMEzLApTgF9FmJxMTqb7ji2adEXb8FMATwziYPmLNHkZRLVyQrjjwL8Aqe5a",
  "key15": "4dVdrrxFxKGrZg2Y1eKXRfM7Hj9RbtSLZY4bv3dhNWdciKAZQRghsnf4EPaukfaNfH7Tcnox3ir2h6PKnQX5CQq5",
  "key16": "nm1q7d4K44jj9STY1hqmwqH1L5Ggptff5eq48X6wz3qMgAALr7oMmvAU1srdoTPTzYPauzX5Run7vwviSQP1Zkt",
  "key17": "5xK859aoWBSmxpN2W7us2LaavRerriNRXBrC3eCjGFYzRA95Fe6bS2jMjKg7wdz2AmDU8uaXh1nJsXipEbZKFgTm",
  "key18": "2gaEi8Ennm1wzr4a7WffKKFTXa358qQCtGneN887St4oNAWLYFmS8mo441D1KCGnjavcdoG9xPvsmqhNeq82Fd4Z",
  "key19": "4azsu6gzhFCCZgyarHogHkexdAgmWWBcFF6nodXgsdgaMP5cgjr7MNTFZqu2jBGM3Bodx7sZ1aZ1Y4KiQrT76Jjj",
  "key20": "3ZUXLQBmAZbLkAPXK4Q8UiA7heTbtrrHHQjrnWznMEM6g2ty9kSCRggrvPLorPssgJSVfTdjiLXwQV2NPTP5QoM2",
  "key21": "4akAuoY9eKUsmo6M9RoJ54vjUdhQVcrUSZ5t92a7Bfx7ETKDuPi6MKUWbJrMLtbvSF8Qi9oJQhHuFAo3VqiYCaSY",
  "key22": "3hQNbE1j3iAnvAkHSBK2oD129twhjg4jE6pa6o9uF6A1LKmtyignqCvxZEkmqPchD774oZjLnDD6LKRk8jYdYnq",
  "key23": "4gXcPPzzWsrPs3GjcnAW2Y98QfYf9k9ec2NFx5PoKd8myYFvTQziXJgyZMx7FmU1cNf7oYHBjhuoQwXjihyvLpbJ",
  "key24": "5ZeXNj19PJhbgc42jiZqEeAs6oxCbENMxncwPezgwQZKjbGfv5FDYqGrjL1CKN1VovHhApKvjCnCm9LCgk6J5f22",
  "key25": "3t5cs4u8JDocsCKoKySFpAkuiGL72LtCGg7kJv1ddoa9haeo8EY3pzqgH9smqbxTQF1M4Co1u2VZ7JE8NkU35qUM",
  "key26": "5VZDjF9A5mYJdY3PRGBXYs5qnEcmQraU2zjhashQVQx24L2ZbP4yepQ9Cw92EqcfHWsSTEyqVRBbJrtWw4LjpK8p",
  "key27": "3dWE24mYd8t29WC5ZVxXnwSubpKjv8qeVrL3FF62wJLRNuGMD4vdwHfnzsoZ81j8y4jpoiy1wLWbhtPAuXexQWvu",
  "key28": "26YCsi8yCNoq75pZFTzjqJsveEECrH8R1ZwxKf3zUQB6VzhN7jhirZsk91kZqk5QFnNsC4884X8Hduhj7PqjP4NS",
  "key29": "KJpkdNZjjvcDbj7LLsGG7CToq8i1GuJoAL1ovwNVf9SNijpH6tdS5cbEKGRqKXc3rzjiG3UvpHRraUyz7FeNiXe",
  "key30": "33tDnf4sSkrvG6YopHSSVEWiWUJhN6Wp6QuSYofWrXHuatbexMxovMBpgwceU26rPeY4rPU6UUcFR56UDQigauqn",
  "key31": "3KbK9eYnZhXdDyuispP1jMBB6QDjb1xmWnchP7QTcASvRPoCL9bWeXjCLzKaJQEPWBf6HM6yoAmfYvNF31oXB3Df",
  "key32": "euo6gLjRdh7CASFzwsLmBPEoFfDEY4gTmvfuDnsZH6itqbyzoX4C4XarJMTqZA964pGZC9LqUmEp2ELVdarziPs",
  "key33": "ScgGa5xWmSdMbecvWUQFvKEMj3fyXLfhMT1f6JT2XGshQmM9LHWmwHXj7yDzNeP9K7UQKsaoburg6hWHKcuq2Ap",
  "key34": "4Ge9zBLXkLxDrNZDfHsuSgFGFuuUFEwE7mYoEpj1YLcA6PcBzuW51RgnGQYBFXgEkoVL9UtorvAP5Q3uZ3jVYYZN",
  "key35": "3kTRUHHDWFRp5ZJGJbshmZCzcmMQLZkn9RsMH241dShbH1LusRm9p8ftFksyA4h5MpNqAePti5FKPCF3t1KhJMsC",
  "key36": "5w9Dv9fz2XyYvfTHkRYc2wnJEB4TccGTr3PoNAcd9vA38rV8KWkeo4zaVktr7CUX2y9nvCFTGR6gZcMtKYzX7YKQ",
  "key37": "5jKoZWZ6h2kxpuVYCiHPT9pjDEkWLGobzy989754NVWgdZ2UnMgZ1kKybe73XtTWohFWESr9gXenaV6RiyKHcP9N",
  "key38": "2bQ2AJDi5T21At9fESU9Npykr2gFzBqGTmeAbQNg4Bc4jNmLjm7U8qbKb45qmywVfr9tvN2dfUpr143DTPxpWGTU",
  "key39": "5BT8GJfBw6sL7vakkYS744twnDXTBwtJ5vx3C22VbtgtjM63ubTmVPKZUQzZUjiQCUdPPyUbzv25Nmq2VNxM7VoN",
  "key40": "21dXcFFD79gjAPJdzU1M7B1cGC6RZnnMo8LC9VvoALTuSQ53rCBeS56eHqePyjTqh1mqGsNb4MDSPYVemBko3LXX"
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
