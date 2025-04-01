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
    "BibDT5RiP54h3cMv42h9iDR6a645zxuNdwTEg1SxW9tNw1HriEdg1EzmxB33YLPPQSAfqrgXE8mo1H3K4DrScuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZouTSER93fPDX4ux92sDmkPu4da5g2LRN1fBrJ2uoKJdFCQNvHYrAYRVD6Zvxkeox21VkwSKqrM4Vi74ozFkhFQ",
  "key1": "5MmFFZWBRB8psqkKWiwF7rz5QqMQFeoDD7ouzCikNfTgtXv7c6r6sGKcpdDd6Uc3QmAZ9Ja3QkjuvFcsHoQ8gp7M",
  "key2": "5SkzDWn9CaLq8h8ZWLzUm2Aaisf7CXxZeRcEfUdoNLzbSm5qcDfEvVwEtyVWKxHfrtY492FzPCMeHkhEJc3z66mR",
  "key3": "3FNUTXiWBp2sgpeSPZSKWXWTtFy4gmz1HEmxgVVd3C8icq1kDPwFsaZYS4f6Btecg11GkHHFPSPaT7xLdKLYcFhP",
  "key4": "3LZDYxCin8Y1LMSJzSdAQZLqsgVMbn8AQ3bsn3QfjdJBaYZ4E8UD7BAhqLa5vjxFS9RoEqQiUfusUTAoH2rz6cXG",
  "key5": "THKoENM7pEp6AEkRa4LzZHfkeiA4PSwvhY8rv454WC8t2AXDbhsee8NKf7QjbDV99LiJpXo1EWhrm8ooEVK43KM",
  "key6": "675mvU33GQP9M2WWMJQrK4MjFrZfTDhBowsv9zqyKN4LGruerdr5HfzVgCSR54K8fbUM1TLEzeDZj15QM3mPfyDz",
  "key7": "4sriZ7HMDPvNQK8SHAHgGYFp8oYLBGYoqbQ5unnueUS66U98esjD1WSbEcG9QTeoxXouzfvFUgWNJGNEavc6NhhZ",
  "key8": "2b5FWHPfXZErwKrcKnxGw6dDjyUUyeX5Ss1KENrvxWMeTfCeG9Cg1G8iFzADiJhwh1C21fWmnBbAreGJwV8rY8eF",
  "key9": "41CUyr66t8ZUvCLKcnXfC49vdCFnTU9ZscaUgGeMQqF7hK8VqeYoTEjakgVeZcE1ra5SHGgDBoFnF2DF9Lqf5NsL",
  "key10": "5X8Rp6akBQGCWSKcXMnSTSUSdd6U6BpAxfDB5wHp1EcxyDKP2kCJQqrksg8yAxdBqZ1bGWEhZMBryNArPsCVu159",
  "key11": "3TXWwnH81HaBTmGDuv237rRqHLL4rnDgz8naST7k4nCbspZiYf1QoQK6JQgGfzqNYkeo3R1mdpzbxysrp1gert1Y",
  "key12": "56oUG4Mf63K9ThwnyvdDesU8mU3xScAvuqLCq2qsRWZDK22CTCH4ioekCg3gPaMojUyL5QcnbK7WW94jaSt3p647",
  "key13": "4YG5an4RQsMARM5WJnZJ8z9qkubrBNdMYLp9pjmHjSoDgMMxeW7HeVD9sCWcG2MrwTiWeTTq5bWmDK2KgwL9vNHJ",
  "key14": "3iEy8Gk2KpdbbBikqDgq1YnReeohGdSe46oqxMtnypBE3pgfpxqfyWYfxY9Dm1qwcJivbSfvzQ5XwJpA5fJMGY2S",
  "key15": "3LZSgo18XQYpzXrtsmAgGiaZyhgbckMNW6VdLQxaXTGHRJNS2C69XG7DtGE15hHTxPCDsT95jPLBgxsJZ7npy6tq",
  "key16": "5T4pfEgzj5xKbPYKTMHiPaQYJwRhJuiHZmsZXVEjXoTXdVuZocmRF7Z1CL2MAV5xdaa4JDqcKYNFp7H1nkyVyWrb",
  "key17": "Frt9iWqEE3jFTHad47yH9fzV9pHCtyRh2Ktxttn4nJvP8heW4sjZasFLgCwyW4n8Skfbj7NvYM1u9Swwp9hpbtA",
  "key18": "3TGyipUaAJh6pPLKJHXKMPXvuWLeESEbWN5ZH3rhwK8XQ4LgR8V3VZ8o59HNYSNEA7KaftzUsRyCdMwFnywekBK7",
  "key19": "2imd7tUVD3sE4NCxW84i37at6WAPFRFBD2xLVcJ5WdKTYjL3xK1EmsmfoPFNZCXzehNMEGRbmVyoqxf9fkTyqKZe",
  "key20": "537eL5T3f34oAMXbxQuzumk87ewEhtMx6B49ZH4P3n2SyYyhhQLHHrB3oMVTZT7UapozAso33Shwq43Eody2EBqh",
  "key21": "3egZAyyeKUdwrw77vixotTqEmWKPsTGYXYLBcXZY1KL5x9sBJnyrMzJ8HpZiHumPp4rCL924CsbvUzBwXLjgmc9W",
  "key22": "3GCRiPd5gekNvnohvU463idfS3MGQhoqhoeieyq2FuEaz2PvtyxjssVGVMEojG4FWqgaHHaESX7GV1r6ATh149Ao",
  "key23": "4s9rNKEv3iu7VsaJWo62yzPsPrqpXn9f1j54ieXuZNgXoZAJYRwuUuceUuHHuHkGQGehXcVMCNN37LZ5qbE5Mro7",
  "key24": "Y9p6UWnzunwQXif7wewPxQygMDAvzsVM1QvfbUzJU69kUyGYmQmUqJ6CjxdWrDXLnnYsB3cysTLK3PgfrNeaytE",
  "key25": "2T4WnR3SWK38yR5Tc9ACHL5BvAiZsZvner2otRFioioACLKSdU8rViajUTNZ8aAfRTtd1NQTjv8oBvpdWvy2HtCu"
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
