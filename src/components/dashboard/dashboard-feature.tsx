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
    "5a23bhmzdLgZ38b59RqisVqw6z9EwhEw8NgmKSVv1JcsT6PMXWg2LaXSi8Dg8NyiUsBgv7sJWFwxkKMAhbFRPEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7kFY6Mt4aNqPPXLUGwDUxtuGtqs1ALaJPJsXyDFD29KNbpJx5KoUZgj2E5xSANnn8axrPYwcNStSTqxDVUCMN8",
  "key1": "2cHhiMNE8BpmtptSKK1cKLcbWta5QpsZWTvsA8BYnrtL3FJ6mBuieMwv3YAFxuJy1Jv75NgDcAG34nzjaymWPXNK",
  "key2": "3FhHdYR7SnggUu6L7mi1HKiFfbWq36sgUhSW6oht3HHwG5JLGQmEuin1CmoukRxLqCtVNpkV67NUJCsYg4UvaUQP",
  "key3": "2LUnRNhmUnJjeMQEhPtSWCHN875FsyjoXWkEaTbSSQcmniMsUH5CeSQjktRYgQHxAgYo76HhzU5fzKZ3VW8Rg26j",
  "key4": "3MSykASx38VE3dxvciw2J9jfUU9RiWJy9maFX1X8iJLSpuKzWbpXUHbt1zhhX6hQHm1z5dFDFxyNzJqJv9VUU57M",
  "key5": "4UVEYobnNya7SAAMRchFUcoodffmfDfRaxUZxLbLMQPaMKPskzkYGaaEP6xDNoqMjJCUp5aoVUtgWoVgyHjpT7kD",
  "key6": "PQooiKXhbmJgf7QSvr5GDUe3p4jK5MsMU4RpZPeYoiVMbkBtNoaRr87vzDLYnhwmLQFMPx4Wm6Tf62VacfL5trz",
  "key7": "5TWw5ET23629DKkvdY9HF8JE6FJLYR8BM2JVUbeZuC6KVqSc9i3t9Ua4xF8MfhUqiKt69RdrzxksxS3TmjxLNrX2",
  "key8": "CBiVXf4yViEnWpLLek2SgQGUdmfHyStZuiBjEeKvukDB84C2E17jeNgzPGig3oKdXgrMmvBGELRseJfpBxBb3CY",
  "key9": "2AwMv9tD4Kx5FXou7YmMDM8yBhwME6djNoyiLCWEmssPhzNfw6WJRttpwQARK872KMy4fGgHLg3FDfbdGX3N82eq",
  "key10": "4mHehu1Ks7RNvuoiZzw5pz1eCgnfgjx6NjfvHN2kVYWVJ66eVvcfhHcZkvYiqPZNJAWZ7yaKgyBoWdNBSdvJe6Hk",
  "key11": "2mscfnJoAiHDcTjS1Uef3Ee2gm6VrngvooELbWRPsTWW6aVC8XLyiK1GEaUczVGAG5LxFPqWq9V9jQ18vi3ELdnL",
  "key12": "5tLDsgkhjrgpPQT6mVibM3Pe2kza3XkNFD6Bw6pNp1YkujKX7PeCjva9vfBMEUKEBHbTWc3UGg9HT3jVMRYrTPH8",
  "key13": "5LAzZc7F2QRfd29Ce6tyZTETg36fNRik5X2bshazaH1boEHqqM4oDDM7Vi2ax96fGd1JjZ8rv3wHC5Y5Wrna2HAT",
  "key14": "2kyYYw8k8CQP17DB5wKKmwtUoekuoubT9JRdTEA7vGMG5LYGv5xae9yTUih22Xcsnz3t8ZtwbHM48kwg3FV9nMV7",
  "key15": "59phQaEHmbAohXdf13XqP8A2hTQ79fkus3UEtaHJLRykj9P59y2fVy9y4P3XKh6haXAovfyL6gCT52wqs51jSGJN",
  "key16": "2VXiTYLGa6r3QxwgfRuvyQcbifxncGi26TE8ReSXsU96oBG9kDmSc8je26T6nLeNRXnyrGnJDrZjbudrjsNvMTch",
  "key17": "511sNKTHEWN6hLeE3ZTyVpJZvKWEZ2P9DM1g9wznkJSE6Hddi9LDxZzZB8D5Z45t4uDanbcpyZonFUFpsHAEUGyn",
  "key18": "2fZRnEXJV4X4H889g5MFDFibuSFmaR5VxrGarPGiDiperADrM9AF1JmACvrG44QrC8VB8vo2Y4tu1UNGr8V6o2WE",
  "key19": "Tvr3CoRANFdkyEEnAyhHc8HEwE2DRqrtnz1KfEBw56ZJdKtPUi6wT17cJqxRPc4LLaeFmtR5N21vFncWYvvLodT",
  "key20": "3hezdENQUy1Zej2v7fYufJGqx2pdD47dKjcS2zVzENA5o1HNExbPgxcwrpQkxuFJz4nSiezKKfYqNYwUe4DpZq9a",
  "key21": "5xvcV5gwmHtMV4Eqgaio9hgxd27Y3HDAw7Vh8Syg25mMdqeuAJhMALt9ce7aUzHWsaak8cpNQuLo9bW8K3o88z7u",
  "key22": "2yYwP7YbKjEnCDTpHs3rQ7BSZ8pMvcqG6NJCgLzZgWQNThg99wQp1RwSW8nwmMRCET4us8ZJfAYPA6ZR8xBanV9K",
  "key23": "52Y66w7SYyMMEcxyxjcaHrZKLHKkkDNzk1kopi2UsfjBzCwmMMPYaqXdS5hzKHYUEV4uoaYbqhP9P6mxCrYArLSZ",
  "key24": "eTVnxs1TihSKbvu7L2MsFurZ4e8yL13FBxBcCR61Z86XkN1T9969kS62dVe4jcw5Nganc5M777FUbe9o7tu2QWv",
  "key25": "5riktTDCiVU3LBpWaKEGSaC4joqqYaoYjVa8Yu4xj4Dh9zXJ4zyke525tjJxZVm986iv3iNbhuyFLiQY2Fg6k4T1",
  "key26": "2DJnoiAkbCGtxo5Ws8q5HmaerPLfspfFdEpvpLppNYwqXwWGAP7DUAMRxxgWt8Xse9RJV716S5SbB7BWnHARnvHp",
  "key27": "5utVQs8eZDXWhJ2xixVGPN5EqY9rnjbitiPa2MFQ1m5SXZBhhEcKAoGdiVC7d7DtsA4vWntcwVfKjgTrHeeYCGKx",
  "key28": "2UxMiPjGhonwR5j4Ukm3QxJFzxtPkMV52NMuA5YbDNrb8562ptKLhLAra2QC9Qg5Sdc5hUkj2JUsPupzu8srVFyg",
  "key29": "5TDyUwyvUx9htcsJo96SoJxp1P4MRUTnjrZpYGQiKAWLoXwkdEbmzzsWAjDiEsw5eSwrk7Ei3VhxAp61hrg2QYaG",
  "key30": "65paqAtYsK56Ptvo37vJqZS9nvQKhNjxWJ2U8MVttMToFPsNKmXsXC4akAnqHiJ7mjNaMG7CHwshKbYr7Lb1b7x",
  "key31": "J6681RuZ2hH3BYw1SHfzqDR4wyheWjf7jUdAm351eHxEtVdVFy7XxRERFsESFJbQtYBLABo1r4ap9LP3SuAAHvm",
  "key32": "5FEhEbADBTBw6yBWofPwuadqDqbBEh1vys4JgWRUbkfc7kBhR5AeHVREs8wqpZQk957nYVbJrfpeBfg9Apj8jV6m",
  "key33": "3vxTWhbP8ofVBxgiqhSoJPUc3Afa1hWYZrCUeaZnwD8uc9CN8gi4K9PLY4caySZQmNUzeaQmmTboxPY9vHtRHjNX",
  "key34": "3Bq7qLbehsJUA97YmFSNLDJBLyBX7uaGy4F76tra5tEY3gXQkfkfS2LdsZprRxjb32NWdMc4oYDPDkY9SdJgAgab",
  "key35": "4RGorWLLZRtBynqT24NhE5ne1U7SAYJS9bEgGYVXG63f64R77iiHjw6YUkX3vsS2arG9qTBzGgP85yrfKrKQx1uj"
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
