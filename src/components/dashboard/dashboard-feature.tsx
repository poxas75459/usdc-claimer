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
    "4gu4FsZdmGdPLedBivF7bpG6qPgvRQQWtyPZqoKw55TWoPanpMfjo6NSGBKY1KdoamnHm2RHGdePr2LftAtr24jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P9snVMe2MqhhmpywH9TFYEYn2w1gmU7aCceq7ikQMfQ6N6SHa4rSjMvYKBxgWUN4HhntsZ4AQpd12qf51p8nEgA",
  "key1": "4j3noTZWw5gQdjVcW6KRFDVocMp4EBeYiuYG7eq151zADiWd43DAus4TmoKbESBYpXw8dLB9VnBZDut1Q4XYvtNT",
  "key2": "4zoCi6HjqXruNKYYR17h2vnB3Kc6VWTasagYZ3mxJEky6GTSGcPrwpYS3kcFBya7co9XTGiFAkbAzMi8n4joYzUQ",
  "key3": "n2bCXbmzQ62ojaV4acWtb1yDqgw5UYs1nMkZNjm1KuFBzXxyJqFWKyLiDxycQUR3MPnp128QHqBfpBw2We1Jh1s",
  "key4": "3H5sbed2qj5W4We6hHEjfiSkA9onC7EhpzmYhALn2Nk9XKMDbr1AagTw86TicSsLJESMBkHtZiBRGiVaZeUi8Rcj",
  "key5": "3XtajZpVti1au1tiFgqrWW55uoysxB1SnJWKHWTkYiYfhv7iv8oGpKCruk5HTBHTsparcUpFVoh3ooiwx2ufeHpk",
  "key6": "qcX42fgtSUMB89kL7Z8DxjmudqLAgq5wpf7gvtTsyhstwP5APWxFeMeS2B3RovHcCXMprt6WLUwLhSnvgPuhQzu",
  "key7": "2vrisSrQ2FgqRnm1Lg2NwDc7zBkzFoFnVEaE159SQU9MDy5LD7XJCf2wmymBK69btsMxBB1LTWToSMV7UDb43N4z",
  "key8": "2ZWcQ89Ln7JZMrtRarffMusFSfmgXrAqoBSjT4o1RF32Tic9NsjKe4Qknd8FiZF3qgKbrXiRgVZcNyLrNWfGQ4L8",
  "key9": "65KhghxpoFtXZhcKktEVJyrGTXr5v7wiRZynVpxQGqJ68itUphyZ3LzvRTY6xHtxYgDUR3adPekxWPZJ3VBcYMuZ",
  "key10": "5UjUhVq6QCVzFiuL8dtRE8oxGkqGKJ5VukR2KacEPymq3hsjb2Yi1VAKUt6jnzuhBrQEjUzcJSfpxmbVTTXHx3aA",
  "key11": "5RxL4LMBfYUZaDX15B762NVPUsnunjHu9jZwqyyrtaJZfoXsTEko3Tt2ctuiDPDkNWEfFSwYhzjM4pdFYcVFAmVF",
  "key12": "3eRZi71MziH3Zv14kK8K6WE3RJRRsQ6C6XXRFVHEEqnUpyLUZDVGztZBdooNzjAQC1cKiCey4WLUjnzFuyifY4qr",
  "key13": "5ia4VDAuKirQGjWdShpqi41U6kVYouF4Y7ySR87uLgFZsKSRvMfiqJDLW2JxM7iocAACePVu62jx65PC2FFMgA6V",
  "key14": "3QUag3sb3KjRRKMNP7u3uypovCheQuaSbh5GnF9pchRCh1fyuxoEkHtMyjD4z8bU63V7YaJwE7MBpeAhpDdqZk5K",
  "key15": "wNnp4Zq6DqV4oP1UJhAGoGaArHhrgxGxmFD1r9JCoKTKgcaduWq6Btx1LhQuFZFVhR35TyWPDwnznRfAxaofpb1",
  "key16": "3aBZE7a89G1Nw3Z1swMWvWAPJN3fzkXwET11LAK5CGFQcRMAyX81kfb56sdqoDihDevkXTwUyDBGnvNfKtSDrms6",
  "key17": "3t9cpFAjVdYqFb7E1wPKm6EqABjR1GtEFo2486QPT7buehXXrHt2gf3AQjqMrQQjb5opnnCn6EE6Cd8mpiCJfHee",
  "key18": "2oaGNoHehFKJe92HoUkXr6YqstvtAyQPUqfFuqrtLXNjayZMH2PaAEkuw4azTQx8ZUzMZEHYo8YqV9wwnWj83LWw",
  "key19": "5SpoVfxmw6DopyEGgcEDLyTmtysSXoN1ddoNLUw9HbJeXLpA8vhE5uGHtZgN6RhPoA8EynjBBJDXGK3t7qoo8Ur5",
  "key20": "2HZXkyvtPTG2BqQVV1sgiRsJ4bQemMJrfEVwtfDKFzQLobwfH9f8swsb3rQf1SXLw9cP6CJis5f6rSRcyVgaWCYx",
  "key21": "4eBhrPhjf3ZZPnXYMueRbJDmKfJDogatgESgMjDoGn6YgMT2iVqXT4qFscCFb5r2VM6iBFPXJm9BmmB3wL6oYvCf",
  "key22": "3F7kyiAFFM9kaJXEHpKEuYzndzZgUCNJ1a7CqeDekRPVkxJoGzxeLseYVKPjkNnzbwpPuBVnrQmmZWvEn8iVFGpR",
  "key23": "NANTrhxnVvUnt32ZVYu4a1QVVuu5fUbwDFhJzEaXKjAQ1yJFxMwVqtdZeKQufiv3uE2g1g4rcT5XfqBjtBQRmYY",
  "key24": "5gD5ErMiwmtrefbQqELBDzRyJjUTuy9DTPqET7hY3w3VxnPTeDsE3QZ4gdcoC5xAkQHc5bJ3yMuq4fgwsZ7PeZEX",
  "key25": "3SKGLuBvs1DmxSEoe9vRqo1YU44ZQksEj2vWWcvsotxoaMyKufNtg9W2iC4gp2YH51xkKk7SVRmZEZ5bKySx9Rom"
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
