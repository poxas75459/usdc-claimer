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
    "5Aii5BBfhCPQo5Un3dXvVsfxGj7mUj9tp9YCfDEWC4dTMXC5oCLR99MZwppJRoSgjRKg7xZMqu9Mh7f6cFMbFNFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYq7tXLqwkPZpf5w6H7w2jAi9BQLY9By1hgdSW7kKyRX21prWLgnMGWpMByJhpxh2vmEj6hwBstUuLKCkaaLe3h",
  "key1": "3RS13iHauDEj44Fmuo9HKM6QrNEcjnSEK5zJWDTEc93pvDjHSUCmXfeHxCmwQTZkfWSbBgiWWHQriJrggRTWQG7w",
  "key2": "gGQvuDmB6joRA2NC4dSLyHZ8cdBR7xbWfQWdArTSVpjhYg7YuLNGQCkBqEmeuwLyW8kgWm3EvXduZGx3wHgp1ph",
  "key3": "4tGJUqBJKuoa539d2KW71Rz2HigjgXd76cUGMxGddR6jYTw7PSgrRG4qbNULTGp81mC6cbjZXoPAZKDczPjm69QR",
  "key4": "4uAYnrqKmoJceoCQomZSCvDdxN7E3S89atRj3KUxYU1f6b2BbpWoC9zpBCMS3R6XDwLq15VsUdfn4YWBmxpuwf8z",
  "key5": "26rvvF9qTY9Atrc98JQnh8L5LCke4aistdCR4fHbKiJwqcfZRN17vZCJbGgBTDGqNYvZGftxUbfvrZTFKD5rvug3",
  "key6": "4m9ncHQFgvjHrpzpjC6aPDQA3c1f552DmziBVv2vgrPSm9vNC2vesQRRNya4DNdLVNaJWDpzmrCVAoK3UTrgds3W",
  "key7": "4HQCgCahbCEukphTqrJ1SRSGanpTdnmeXbE68G6CxKjC84oBkbBnvFyB6cgAJfiUg92HbRgKar2LGeiubkJnkS7e",
  "key8": "2niZ3KzwqxGGsT4APZaVipAZpLLaGHUTFLzXG34PknJerG9tMWC2xB4qNHYoi2cEEgVBApoimsD2jCiwRk48a7T",
  "key9": "Mez7ks7L8yzbr429go2cvdPjUyr6qFsEoUouTLRnqV9FQ5wZ93y3bxCsWwUkXAAaqxAHXd6kEsS1epdE54SHJt8",
  "key10": "2X4nfk6sTFAzFkqpZVgiupCacP8cZiT67cCJ3CUv5URvJixHrQzDFtsWTmypsZEzLrXNWDYQ7dqYjRQFhwG77JAf",
  "key11": "4umFgJauGw3tML4phuVhzJ2Q8MyZta1RZK5YZ29TivZ83kAaxf3Qc4ay91sJ1t1tuFLZXALL9o6SCrThDw4k9XHx",
  "key12": "2J1SR8Fh2qfYqE1bdVcYVQgQ9C4euLV9JCbbUfVKZN3MTYyY91pZ9XKZh1WPNvu1buuLwuoT9JDa5iYn8tC4uxoi",
  "key13": "5SDHXQTKKVMsLvntVzYrLMV8iPc9M7h5Gq2fSoTzJxfzzmLJXu5B4KDSop2nhvXxE9fYfeHPBY6w5fs7nVH8vvxN",
  "key14": "rVCLAkCiV4Xx8E9ARZ8bkV3Ffaq3ABDehZcqfZUvnpepUwFgMQwCeXb3GwFUyT886rmVZXtsSU2WqZZrLxBdSEf",
  "key15": "pAM8p5v2BsnE1nY2UkqgnqC4E9Qoa6kp7Wi9r1aJ9x2DQ8gxx9rckFFtFapso8PDMxpCCmVxp9TSWij7jeTYs9B",
  "key16": "WmiW1WDa5FpCoMTV8eQhGmRbR5qCbFsNQhCbKUtuKcjopLfEfrhhb9k3PcB4jzC6xbF1iB5nBXScsxH1qFNPVjx",
  "key17": "3fWRGtZaSaoTvQLLfnwMkhJuNJW5NgPBTq1Qxa9L6RZnWH92HQMeAzJU3tLafbfkkLF6uFq9bFBWaQZg2mut4pZr",
  "key18": "4BJzfiqDVnTE7h82FiUAC5Q7kZFwap7zuXDRUBrk8nv3x8v13wwrBsdrYNrmzXDvNmxmQWfptrz15RcP7kbtgkv2",
  "key19": "5yLysJkQYY62h5HaixKhnEZxzeTzSr1Rfgzn432dTdceP9hSmSNAPEshsTQuHaBVEptW6kuGExAdrUb4RphtkA8p",
  "key20": "5HW31b31hGp3SSwXwb7Xi7a8BQKRKVmtg4CC6DiCDUdTvZ3T5mZvCtxprqdhznLEPLT5Su52gxpHHmXGXWiELTSr",
  "key21": "31cLrX72TYvK2qbjirj48BY6axgNAaHNiWgA23QWEs5K1wa9d62Tui9waUhhMxsrAC8LDnAYvuGvVrHuCare7FZ9",
  "key22": "VBpT1rJs7Gw6t2s5sXzF6qyVbVBGDr9piXVWkmNpRdcKB1xsDYkZVQRihTUma7rLzXeYbj7PTjKzMchofQb2ep4",
  "key23": "R4DFGg7Z9GGKktggdJvAppbL2apKzq3dXetxs4JXUKXTAg6cqYHaDqjhJxfY9ybZE59xAVvAa29LHsiRwaUvJRo",
  "key24": "4ZSAmET7DgYeRQEjcddBLF5PwJFFdnCVBtYXBQTDxWFkzhTQm9oh3Zy91K8xYG7PTbdMPMEKqxjL2YsTgEZExJJe",
  "key25": "2ETFhnAJjHtezLaz8f3ACiUpYVxbLe2pf7RA3wnHL1jjcC6Gqisv4kgapXJht8M22bZ7zTmgQ1de8YGMcs4k1t9X",
  "key26": "3APbQBP9yMh81RkiRMxkMpvt3JQiyffyibxAyGRmz4vbXiSAoCky4hvvKc4vobswckKmVSGQcFiDymmLVNkFSo7p",
  "key27": "3LetDX8aWFbQmctA9wJMgcv8eye1ransHFhJaTSjuwkiJUWGmtmwq2aCYsf7wmZ8qLWbUd8ng4xCdBMF1yHV1PWH",
  "key28": "4FBgCKnLtR6iYtjY1pGVWajM2i4t6XKGE8z8WoT49LoAa3JyBYj6LotifVf2cTEHr9bx9U3Wy2ZmMzy2UnV9eBfD",
  "key29": "533cPHVb4GmGVmHBKaZ2uZCqYg29q7jk8rRxvcAYmts1Swc2BU1n86ZNPP4QatZzndeg1FPKXQ6UepV98TTPCjGL",
  "key30": "2FM4i9vbGisJdUvz79kawnH5dFeKZ754KNBgesRGTfUYWmD2E3aQJdi9gWo5whmz8bnSYkQfJvt7fMjpXgLnVpN7",
  "key31": "PwVYjJg7uJoa423AZcA8A4P6fbjKGqRKAHkpbPuKhKiLw8ZxNr1G56mAPRrMrcRRTSKGHi9g2gNM3UMLFcNMqU5",
  "key32": "6SXfdag5LKTFRdEaa3qZ529VyU3Z1dd16abGfAZshWzdSH5wJgKWmJHo8h6uXTEN2yzrNCti8ipraWrzmtcfs9J",
  "key33": "3RR79et2B3vAVq6SDvMBv7jbbAmgVEyvGvxcUjK7TYyJsQKySuNDf3VEt41jjViRei4Cm4LYRdEj3VoFPuhn4vJM",
  "key34": "7F3D2vUKjVR5XcSmd7c5L5kPWvueMvUpFB61VUPwLof87coyRGW6WQaUHVkJWjKYGkYimQnTswsCHqNMDZYxCUC",
  "key35": "Ext9PGQRkjkVYptNbJwFhTDA9oTXdmeTmeoAeNLdvpMTZZniXEcqpNpGCF2nRn7prLbpvNbeVoxnyfBUHeQhCxs",
  "key36": "3W5xcECVs7uEZA5fxpfC7iXZ4xDwdvtY26JQVZsuEwbsp4qr8ykwcLzSsfRWUMettCBqwWTJHBAYeoU436voAhvd"
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
