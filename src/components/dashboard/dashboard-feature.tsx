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
    "2rS5QPUwwbya6APHGmue2k11ajvkDuFC2NWxSfyBEgqPSs5JfNZ4prceLwVESqmciKz12g227ZFWEq11Ba1kbhZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoDUM7sntkGeK7bPLtZjruUKTmqCpFApLyiULKLc63JAED699mTQzd7jHbku4VJYwu1vpDwLWQ16Kj9UvRDntpJ",
  "key1": "P4GbsucNAD5z6dUDZzUZdF8VNTiFwoAng5w6Un1vsCE4aD7KxjVFg6TwzcD9DZgmtJ9gMWSaDjsUr28FxaxrC2J",
  "key2": "4zavCizCFcpB4YMTG7g8muxY8YyThdCQNmD89ixxiN4wA8z7LEMgDoCkZH13YUVNJHwfdu2ugBWxM6v9qJwaZf8N",
  "key3": "kqrJ6PSG8nnn6VuZfhDhkNSRBNFnrKipG7cfNGvrsgvZAjxxWiurptLgASnkJfn5Ky3Y88WVvtmYzJgV3yZ4PYL",
  "key4": "2xKVTMsGqwQuyjspcwA4NxQEuxyJZPoQpa3a5y4jwpKkoHmra26Sd9YvnBefb6pCdRRBeDKXouvXuvrSbzruR2c2",
  "key5": "4rXJEZAzUf9bXtcnLghMKqpWkQgQ9xvrKLQF24pShTnu5aNvr2J43XzFyyJCRAboomoVim2BfQqDbCKjgavG5u4A",
  "key6": "3yaCuZMGcUboBm3DXc9keVtrB9xuGBYNxJJgTjj39Eo5FxhNQEUaZeaKAy8HdVYJAMRCGPKg6kGbKBz1qZXHPJGe",
  "key7": "2agUwuYieSAbYDLhMfj3m8C26jjr7fm8KBmgbTnY3HkHVrd4UHCZrq49YHFAZhswfgAMpSKufqQ4hpPndYf5aqS1",
  "key8": "5LqfwGCZ5JVTGCroy1uzjKbrmnpmt8A82NZ9Hed1LA3vSvKcSwS1kUBxRRYYpdXnqd3t2a1uFwzXPDh3eHT6knfy",
  "key9": "5xBZow8DaLynp21BNWZD33zkkoVaF417nvK5FaPusYEWD1NhRJBwSRyyQ4sm7F7hZv8ntw1Rpjq7Zv9EtfthM9rJ",
  "key10": "3XoVySaEDLQMRgrqRcX9fhfzcpWudrGbSLzqgwFBDuwRz8oSjwcUXJf7pmHhSCC7c63nibpxtrY11HokFVYX3bfZ",
  "key11": "5dSUPkBr2Ai6cUTPbh5gm6SUg3UtYfotsBCjkVBDiKDGSeeszmMN7m7CXjwTcRUGuixemCy24as9guWKoYUf5QTx",
  "key12": "2SKyi1ntM1RNgbXiYQtwTer6diW1Q5ft3NCJP9gTQaNFdRks3vFyJsLLj9bG9cZEYxo37deVLgQYsF9hyAT8YQ8u",
  "key13": "R6r4peUPAfjW6DbYdVr5Yj4AEwwZpmKTpMdux17hzeJ7yVZBscMpxhMVndiB63ekKEVF41jM7Wm4jRufYjaeqbM",
  "key14": "36smPFWDLejMkrQWzPEMAwqGoTgLxLLWbPQmcY4dn1DENi6SnrVaLzM3xzEdLEF3jDYK2vw6PEwMiZwcdyzoD4kh",
  "key15": "46aNYF4YHo8ty6V4vhkEishtbkC5gqeQ6tUsCsH3evh8GC8zKsENYGhHY8vJ7ddejU8TVutaB3iYCr4ERT8REiWE",
  "key16": "5YRXnVYZJ4ZGY1xsu1pCVoVzRaHW5gfSC5hfAwodXugrqWV86E5wn6aToubbSpWJctbv6f2BqtEbM37wcMKVY5dK",
  "key17": "5gC9Ltp3YGgExaxNmMSC75iMD1gZEm5PRSYX8HXZoKzBPgwbyCxz6BTZsVJSPL7F84ysBWZKayXvcHWFTeDCJpP5",
  "key18": "4etAiCZ23QzeGaZcZqAVZiugRp7J3TJcftV1K7zkyZdB6zrc2HCN2tKzTR4gBL6KEFezzsDG67PqpLYW3R6ZgGxm",
  "key19": "4JhW858cENQcXq2GXrtGmnqX5GRZtufnaVVh4UeUZEWsQdfnEm48hcunuqQ7aztZxe7911Q2p152xcJH89ix6PFN",
  "key20": "2AqxMceKQ9wvs2UvqqGn9XDFUsw2HxTe9AZRtckCjyzAuiyLspbHH9ncH58Mk243DrZyQiywToVQdQkSnyD3az8r",
  "key21": "5Lce5oRPMqFe9ap8ZmZ8srFzt7vB558XXsy6uTfbmTb6EBp4r4CittdcRaSu3Bnwou3oWhq2d1MDp7UJByL86BfY",
  "key22": "LxvCtBfjVCHVabWZbmU6VUrjUr4khhNSYy3jfYNhjz5Cfr8wCQG5SgQF3K6UfPAMXkecum8TZhuTKbLuffhipHS",
  "key23": "5WXv6f5FY991NCp4d4EeCZyi3PpY8WdmMnTnfhBRzX9SBdzXm2iJE7X8dzzjXHkoQuBzVJJPjWMjKYjm8HdCRR6Y",
  "key24": "67PHx9oXLjUhLkTHsWvYhYXBuQHA5CHW3zEh1VPUwFyuDeWfoFyHQCZPRTiR1dX9yCKBQhNVqXXmtz9UrPVhhyvK",
  "key25": "3he6CDc63onVVe35tkx5wDxwUH95wEoVbnsmzxC2iMpXd2XQxe8tmdkx8zBid6xnDkzNGe1QsRvLnW9Kyuz8eSA2",
  "key26": "vnm8aFXDBBw2847dzNW9d8hys9MQaE8uA2Ht7kEaj1SVYK6TE6PZUk12GqCgqTno6Bg6b9aMAqnPrQfSxbj2j5o",
  "key27": "4TeQtAXF5dcwfRUer7Q7beCNpTQfVwRTQ69MVL8L76NcjAbVg2eUERdiBovv1HZBN5iGsffVNaRoE4k2uFqCQCnt",
  "key28": "3j6N6kxpmQKyvZkhqhorLAWtZ7bioariJdLvg9Tr7Y3VaYyos3GpNoXrmNALb2QZLPaZGq1nmAj8PjaEjJqinUAY",
  "key29": "qvMznsG5g1VjdmrqaBuLi32R6TXThM1goygkzH7twg1SgUWMWMbYRYZyqwxveYcgKiEj5xt5VPsmmj4kpSGZ9o3",
  "key30": "3DuujrdcJwiXfq7Sor6D1uV3uCB9cnFN4E9jZ9c5MrP7qqt7DCNg7PHCFW34ZbF8EnrKnojfkqv9PCTM9pDLFMHi"
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
