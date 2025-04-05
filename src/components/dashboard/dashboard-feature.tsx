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
    "2PsKrbXqb9PXWpQARoqw5MSfKp1fdVVzz55HdvSfeCSWK8LZgSbQ7varWhDwKrZJqcffoqnaxxJiFm9TuC9HCDrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXNG3tAEBZna3UTFtcQj5sCA5gSXJnrr6WccEoNnShcUoxVfQbbZed1QY91B2DWNqEUPBTa2rL9k86WWTHwFEE7",
  "key1": "5B5jEnSyYZ5g1ap4h6Wur5yJ2YtA6syGRrFFmwsgjw6swax9hZyp4E1VVhqSuAML243boB5ce9CSrKUS514pvPhB",
  "key2": "64ZtMebSfD8EjRLikZkNEjBJNM9EiCQ1FcMUTcsdPdtcNVQ46jCdFBuCgRoxTdtbJUDFePXbqzx6FZenocC1ARrL",
  "key3": "3aVuMheSCRFzcrBkWTHqWkXfhSVw1Y1WYpLwCTLjdrPcNwcmydQ1hAYU1vH3EXimLAomaQvTCRPkKqH62mdN2Hku",
  "key4": "4RcxF6uRkPWFXaGA81uzzriFbjs6dZeKHj3z75J4QepaDvGDLV7pHA93DRYkctB541nhS9Nrzg3jfyFfJREHRR9K",
  "key5": "67V2gktdvr4QKSj4nDMMmYNCMbY6Te1miEQwPWnPsYzGzxhb8RiFwYLwxLqtF2KPyzSYKpA3WPZD1RbzWQ7gnqKr",
  "key6": "pQvX1tbBXCFhRXwynr5QBK5z9nGEJywxHx9iiNfe5rL7iNUcVeSYvq3WU9T7ALazXNxFb78PR6aBPt3ijvCZoUr",
  "key7": "4rjonBgzQCWdoB7H1wpVFVnz26f9kUywruQYhaeQbWbJ2Pn2aPnDfi1UzSCQBSRwA59vGJrqv4VpLoVg7m2QNqeM",
  "key8": "3TkmvUJmpqDp2MEMvjxGTmXrusDG2oVYAy9qoyhaMf5Wo1Z4UJDBeHZQeCLXFwE9VWLEXU4x2AMnrzByu6K52n3u",
  "key9": "P987bJuJ5kvRUYiFDHT4ByQpfENC79MuvWPun72LdP7CzQzn1AQKxJCzfue6NvEVZoRUA1PrD7gGGMimvoKrpVJ",
  "key10": "48DbvH1jrJpJFSynzqaCLaT5UCQaQWLWPJ8TAjSU5sKecjaMdgeasd9bVzXCNknH9sy48ANoeAtUg5M96p5p94jF",
  "key11": "26HoJhMAAGYakguDBF6WgwrH5EaXtENT8pzXatdaGkqXjvmiYaSNygZKa4WtWULBTE9i1SgzcSEdv82JyC4AdU1f",
  "key12": "5HCKY9w7N8KN5of15VN3efaBPhMbJVnAKvyMKYJM2268cvzDUJhio9cYm2eHHGyRgJRR4vi8Ro3uHwufNLEtFpxV",
  "key13": "p9D2mhfKHHxz9si34AMcMZA1yZ9914CwNWGgrxKP6Qb1g1BCHF5obqcK72ybt613v2ijrN7XiQoQBTTWwqWVfDC",
  "key14": "2FAErQiu25Fp9b22PYxqw64XbaPi6wMhWQdmF9xKLjBHKx6xrmP4pC7rXTnsPDVhDq61Qx1CgFiCdo2e5xqd6n7w",
  "key15": "3okybeDqvuVvDWXm7wPCgeZLRKNzKkoTT3sTBuKq2dYjT4AnZiJ8pHG53CoxJ5HpWnoLj75RnkurdyGYPapSmb6C",
  "key16": "2eLARGT2vvk2wkpAfsZhgJCi4yP4t8c6LVRwFwbqBHrP4MTDL9EHmhps8idJWjWbV8R9og2m8ya6U2FSfRBS1qha",
  "key17": "49pioeqKe2gJPHEwfv9x2zxNjmSb4U4HdSEu9tKjZMkmpiwi41fZQZT3PNwDVXAyScFk7FU51GPU5xBgaAJVyBPP",
  "key18": "maqkKCerSC472cQry1VxVu6oPuF6Gqse1HKMAf9y3JTiSvfU6BZCFP629wVxoFrgj8s1XTUn4W2tEFnouZtz5cf",
  "key19": "9ys562bc1WU88XvXp17zG7jXR5mB5WDqKXJUBnf9EZTaZZsBMJ6Cz6c6KqZUWgEFtVGUnVjhRkH2XkCv6FgdeBf",
  "key20": "2ZeNuVZSGT6hvcRPCRB2UD1hagH568isPUUpPUWV1qgH8pZa9aXbzYYvCKjGR8mezqaxG4Z84JPf1rFiAhQ1ii3T",
  "key21": "3RdcsMu76yCUqeYUoYUJPDmMK99qfwb2GoDziHDdkQW2ZLdDKgZsMJjXMBpJUboFZpWKYcPJCCvuywF2xqY8qDzE",
  "key22": "oKLH3NWv15FVnTGN6jcfHSsWxrj4Me4FExLFYUYkMczuFFUz5RNqMV5JekL2Kj4bMp5vCRvfEmgQzdyRmeorkM6",
  "key23": "3DKqPfzRadkmFJ9xjBgY5W6M8k2vzYbZ6iu4CcYGgnzQLz4cLzT1AXDcdctXy5Xuxp4m9u64bncM7JBiUGar6KTx",
  "key24": "h5NG6JUaJ3cYS3bhqGUoqCx27GvNM3fgvGa1dMPP36RVcHajdvzhi2HkFLxDqYoD7Nuv92u7UFPdt24qArCukzX",
  "key25": "4vkXaugCqZFTM7D1U1hL61va4Zt2GFQ2XF38KTD9xKf5zch1CrAyUcmK5jHJ7gDFKjpfw77Z3SZidtM7ASPoWGhb",
  "key26": "4yT1dAVB5bRGjiqPEJUGfNYkNFUg5DG53Qz2wQq8qKgo4ymBHXXK3wJhU1ypC622c6PwSJ591qRCE4WEjpDXQkT3",
  "key27": "2AQyWxyzwRxwD9SRqTQouQk2oDZY5yE6vFDMBp2vwhAu48p7T2h2BEvGw2y9yn7sC67ueSuaEE63E4CqyUGNTr5P",
  "key28": "5qDwYGPf3pYYzXdoszzhAbJojazFXEEifHmgZNjKpPXbULdydcvWVC5v5QG4ea7dqFJkGC7FrphKZyoE8BsaNp4t",
  "key29": "Q1q9fSoXXrhxctwn8JRF3KA87qstaFcTVArGpFV8NQhdkdTPF2DLm536QovxoQof8FTJbEzPSmZ5b3gL5W43xEn",
  "key30": "5C64nLp31sjSYA2zrWuT21F541f7SF7Sf2kLUtn2vF5A41Gj8E938Basczc3jY2nfnuASDAe4ASBZ6EW9h7KwYce",
  "key31": "42bkGXGbS4XZfMFTTMeTe6f354NnpSWwi2rmwR1KLKQhpdr1fQVuHK6bqEbYBe42Ft6dMmbWWAiP1zv4eqzBVQuG",
  "key32": "46zW7xqdcQ45ZF8p3b8TbxXc3yLZ6MRnNdHHrsTH4ZohcDCuVF6MYCmRpKVcd6gopwxpMGdbdCzqZCXehFbnhKfg",
  "key33": "4rL4aAFXver6V8qnc9UYWWsN7uT5wdY4gsGz36PQvJKAwMAacDdSRa5fnQZ2QvwqwSAko3tR1xSW71KK7E4ggxu7",
  "key34": "EsKQn6jBc2KVS6AhD5mZs2FSXaeYDnwyc1gM7pwVqEjK36e8eqvFsSUazQyUxWvVh6GLAU5j5LqqbeAadDBa6Du",
  "key35": "5m2ptTVGMneNZWnvNvDDS8XYCYi6ztc22VQfip82NgduWJUVhmFErmxWtKJ6NvQKQBn54yPD9KayEXaajktUjNyE",
  "key36": "3JZ6vbrY2EXzhpitzTCP7WirFa7eNBPbXmaUGHQhPGD53xdBEbXbZpJwSKnB1HBUMKiF3zw9pzUMELsWbVesLJm8"
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
