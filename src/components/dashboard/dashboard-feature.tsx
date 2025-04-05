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
    "5GqYApgk9vvjCVgfMK3tbun51YuFahZjzsnNs91ztiVAVvSnnSFeA5ekZZ6wfQR3q1GF5ztaMAAENBYbZoVX9dR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgrUsqtfD6n7ShTVg6yw78Snkz1GzUi8Jb6W99fgb4oPpih7UrGAdZefqzwVmRbsZv1bqoC9LYWs9eYbWfPXqbd",
  "key1": "4gaugYLsXeD4joRmzqRcFix5qWvXy7Ay39UaEzLyj1Ycn5su5KwVeZ6o4bBuxjfpa3mnsiiuqDNGdNHKPAwLBk3A",
  "key2": "B5oE84TcziZYPzAzLB3eNwyE6DFWRA3Go5vgtstEqcf2pmhMcKwCgEytdNGvMXXzxR3pQck1ZLV6wwbHZWS3Kxq",
  "key3": "2LEYU1AahBfmiCooTpEJP4BJEkPz5a7gos8g1erpuyMcyunyYfZNryCxS2Yz2z8FiQ5j9pgwNnXX5PL8ZcPTmHd1",
  "key4": "3huiNWafLWjuL2HBVs1SdDNddFHpqWFjMcWrkov9CjFKt4rtJTozYc8thQJH4xWttNuEmcq7MQcKZhVLQGj1Evj3",
  "key5": "5L4GY5UQfzMGjEPoyBJ9M1bCXuuvoXeUQvg7uxmKNgRPKfDKJCdo96KiWQswy58qNsa2oF4NyYbnZ17yTJG6tCGn",
  "key6": "4inNsPoQ8jBrLuUU27DeJtJjhmZJJkZEqx97UQwrB9ACAgxUCyY9JezAsyRqNtajxZ9SHLL27UTKpc5nKUryKjt1",
  "key7": "57pwkPkYtikDK8vedALiuesdtb6iyopshMMqR2okbPjuXhQyZBGSRVVFRzvh5TYDtM9bWZ4VmiupJnyFQ87EWn6j",
  "key8": "2K1kVuTEtTCTuMMra7M8y4n3qjptoKaLgfxJuDhsAD37TWLq4nMct3XaejXBjCXenyLKHk9g89mNsojD2H9yyBNQ",
  "key9": "2tCVyBJGouazD3rYizspea9HUAbKAmC6BYyQd7kAQtEELg4zTgtiA1qDgywtnVHz74LiAmCLXZ6k7gTyMpWgg713",
  "key10": "5HNZbfj38hLfBrvshJCYdDjGXc4bGdDE9rQvEvdn7nyrLrYh1F7bew5aAbiJjw6jm4qjpMBRm1RzMXNvff3aJyQ5",
  "key11": "4RpHdrd2mnfqKfGRCQQAVYLuXT6MFcx9ZPTsRzfbPXsgYarSnzeV6SS2Z53CurzL6rbH63jitreNhuvpfwj6VYJq",
  "key12": "FdH24bUpcFDznu3pFbZYpiFwyxcVJK9aVP3g5hwJ5fwuSm9GMK4oJcRxG8ysVFuCxwAhV8DFchL51HtZgVQF3b6",
  "key13": "39abkKrnvuWHm9kEGSrVLd6Be2tZRDtsGauPBBNbybJw393dKMCsJghBiPN9bWdgyuvUcecanjGy3icSbYPC1Hqb",
  "key14": "5cVUhZsQs46bqnGBxN1YyYLFG7oSR2QpBRnEJg4P7eywnVAFJQeGQCsJjiDYypKXuHwmnfQQtAujUF4pokKyeLFD",
  "key15": "2FmQEdxmKn6YHXJL4mXppqfXMcHa1evAVcsCsCf5ndeuCX2KejqEYxRt3WePXJtbZhha2ePPbpjhSK8tqgWDtGRk",
  "key16": "4jqKjSuRvj8e9k3b6H7wHKFSUqYcMd7HgxPHGV4zQstsBnckxh9CiMKwGg4ZrS35nV8Mn6G4xXkKtPtaspYMUhac",
  "key17": "57XuF2589SPQZqYv2qAd8Rf3SqFzv5Hy2fThWnbSounX71pJ9rQD6mf7VeDCGy88ATM4UG1JuRPxj3efqeizTmuo",
  "key18": "5desQSjku1HojLqzkLmC6WGGomB85iNxvLQPKyXyarUZdhpGS929H5Vxw6QeDfZHKDm5Uvdomy42LA8DAG8Biagu",
  "key19": "61z55MJThLr6xbXXQje6bZoGecu6jCvMdqGCpRNwixZ59qu7qjZcxHMuxkN2XD8FaRpeu3gtvVK36kXmHjGHLCiT",
  "key20": "ZWfJYgyWgkotYBrmdUmwSaiqZp9JJzvxYAmRpvwrYFDphH8tRPbLVBCyP4J1j6YS9jsnatCaZA2GxHh1rUXuVVQ",
  "key21": "VP6xEjB4tzANJxRKxwNLfpTDazUwLRpKW2ez7WRJNKmzYS8NEAaezEZdDzucaNxzQ8udivo4kecLp9aauiRYkEV",
  "key22": "63op4qDWwAUSC3aytC2msTpwhGGW3PTh6RM7Kv4HMYuHpKbAUJZodXjCJKdX8ThMbAFZB756FL1CdrQdBdHfdrCC",
  "key23": "4qY6YwahP3pHQKnZXNUAXGTZoPndJxyGwARkHu82XbC1LNqnV4AtnA11X1AvY7u56CkipmacHsJy4CkxeYV5z5Yw",
  "key24": "4ftdfCdqUJ7JusBzQof1VN2LvKQs7b8htEDTwou6iBDXR4W7kr7QsascezFsL6mMJWkM9m7PmhWWZy5BhujY6RXa",
  "key25": "4wgiGs1arKvUH1rccxdW4hgC5RavqDd7L58pQzdN2jNbEHNF1tkcCAQcEtouBjPBHKTYoob3fAjnU99dWcvCiDhh",
  "key26": "5jFatA5Xt7rPR846Hj1MHTBo9w8XwGJNsr9NGTESfqhahimtUH3Au9RFthQyA8AUdX9XETLAXixbQ7ioXx5hPDUF"
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
