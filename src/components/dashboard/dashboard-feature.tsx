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
    "32aMtkKHMnmvGhL1TUGsKNXpy5qBAXrMh5gRZkdWbWU49P59Nhoz7jK7eV5qc1pzbYX35xNUPyvupL2cmoeKyKh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQ6wiKi6GDw86gqjCfQ8K82HHmkHWgChaTkpjJ1tERxoMi387JR9SDmDif3RDJcapaxTdSNEAgjFLH2C29o6ArP",
  "key1": "25fNizr4USrLrCaBwSegc8GqHV1WkP5JCNARMZ6fX87oQVBcpsYxG3cskHn6M1yRSZad2opKdwiX6ZUJJ98b5WbE",
  "key2": "mxSKoGZNFaRNRKri7eLmSraJxHKPoRTGUhhr5VhY5xqEyRWAuUXqXJaKrk8Fth4aAcipcmzR95UozR9ZgjkSq48",
  "key3": "25krsnFX3MawdkW88s7F4Af4MHQRqLRPrFFtb1dSr4PPSEJaVVFsjXRzy6ds9uMFbkfH3SwPss1Cm8EfZbLu2Jca",
  "key4": "3Ho9PFzNeKrzZkknP3qeaFZCuXfv7yRwhh2BEVWxxyPhWs76vXszYhnjcEEJwFoLELBNSCaDCpj3kDTADGUYmcVm",
  "key5": "2WjnujFcoyJajFZrw9qfVKPj4ujRvPHFvDg4fZdyjUzAZxVuMt4YrKWuiFs8uJGQogcUnUNG4T7iqq4LnDE5cecg",
  "key6": "jhXDN3Xo4TF4gUqpSkyXjXXYeDRfdei6tb77RRuUPHPfUJqeqYY3pxDM7L5uG5sTKQ3r2CaikRYhe2dweSLsW3o",
  "key7": "2XQdNjZENqiqT7JiUd55Fv5RaYMGfkxhd7By9XAHvVfAm8RfrNXFuxBSyBpNsN6BT1fGhFr3VffC2CYp3dkGSn9S",
  "key8": "YV5W9XsxSgeZ7UvuR3TD99LnGV9hvA3NA8dvZoP627LqF1NmAqb8BzzdUSHvwBTggkyF8BQf7sJ9iVySzDR9gGk",
  "key9": "3wWSwRCPTMzTxcpCLN3Z9KrZAfeGTXLEfTGNYsuX75Xr9WHrxrBNYnLWZAkxEUkEepUoQ8n9JiLR4KHmBJXr9tDN",
  "key10": "5qUwMj9pNFFmHymUeAX5GtU3UoKpjHKNw6HNAXy6ev5gJpQr7GxGiPwvYNQMjENgMHFEDwuQrFAb6ZRnYf4XxbWr",
  "key11": "3ghqeKE2ZfgetKYs3JS8EHjD4BtQtbLvSwke4CPkFyzSPoyV9xvhKPT8oX2oJKVC7TrnWcPePDHLC4vWBYmcCMgd",
  "key12": "57bHY2sZbZGKdFcvN6ELv4Vji1btyMpjhdZeWmq1AeHqCqkyk5jkxAzFF6DKRhceH1wGQrHXsE1YESDHbqVhf5kf",
  "key13": "29FBVSTs2NYeuE2iQMNsN7x356iVau3avmxkgLPAfWk3zpWF39vvCx4mMTsxmj7sYtcgkPCU3ZUQsi8Sc114EqqJ",
  "key14": "c3jsgziMk1SEwnn6d8za83GV94atptkPA8j36SqcSiXpLri9MD3VwXXpVXdgacK54FdGyRVvycWLkoB48iUcvtZ",
  "key15": "5wjTih8sV2QxiPMfb7UcyjyWV28qsAEPw1rWbFRWKUJfoUNbrxP3zgRXAGGvMAp3EAQfLSLLzu2g2DfyEMyn9d1V",
  "key16": "xikrAqkkK8hDHJTKRr4itrbU1oYEaxhQpNWdAjpchVNyboL51no1Zbb7nqJWFxhSnyhzWdUH426CXGG1PngBxXa",
  "key17": "mt8Fj811kbKuSHqgxCZkK2ANSTjboUv55YVXnLzYrGnE5jqoErhwnxbqtdJmtXfhu24kDBE7H5ry5ZnJN6suBpZ",
  "key18": "2yVAt4cMbhAyfcK9ofPXkQLmYH5ddEGjp9cQJrjHr1mbHNxTEzk4dcC6tLXvjDjxmspBJ3WHVWjBFoeiN4WN5iUk",
  "key19": "2pMcDBiRMndd8evLicQbCe9us2PP88UGDmkLmUUPizW79TXZbN9enrt6XTEjjpRgaDy9ciCW8JZMPcVuTK1VdwXX",
  "key20": "MnZgXc9tM4QaYPqzAqGVbd6VdyqeoprrHrMf7HnKTqxZ4Mx74us4ab4m4G7RbesL9rxboJApFgEyyXPign8SaAQ",
  "key21": "bNKJtowBhqSqwgK1To8ADFHU3SptkARuFeZz6LjxMj9LEddrCU3TDeA4mU2w8pYeYcgEQdRqnWfMVPVKB4nbbSw",
  "key22": "2tLEdurwgGdeRBqRVbwGR4PyiSp7o9rzKrDstsnoPprjBmVgYEt3hBMhphB7runuBxmKcPTsGe9Ekc1wiFB9dAc8",
  "key23": "2BSiKpEjczuyKJ81MDTEmRUQwVwSw7GVbApoF4YdNiukANxrpjRQtU77baSCTnty4HnhgF6eyYXyrouWpbWBYSQs",
  "key24": "5JWUDZp9oZ253CBPFhKedWiLv4P8oUotbhG1r86NzB48TZsophve9J6vXfBTrVb7isb1QFWiYZmh6KcGzBzQHc1W",
  "key25": "2JfcYFUyJjKbm5pPKVvx2TB5fYfaU9G8FuTZD9K6aoFSqggd3Bnf1H6azpuY7mDRmjJn35n31pmGcXfvM8foAVLS",
  "key26": "3HeT1yEKcNjaL9Zf6GkYYcvm2DFAJfoLVeMKC93ksdZetnVSpCe2sZVjrCRivrzJfMczaC9VjDQLBi7Jmmg5kiBN",
  "key27": "51dd1wwm9KYTxtoMoGRtDMSqgUbobAgr5sWk2qWNUyxRvSqcAhdQ7hjzfqba6QqsoB5krdCijYtE6yAH3KkXnw4c",
  "key28": "43kesNRppJ2mzdCa9ZRsGjtmeJY9UysxUMVR3r2nyNue4zkGQQHCCGPAvYruCy9jYoEUvU4iBTrD6kP5pV6tV4HF",
  "key29": "3YvhVyNsJCKNvQxoWxUCJ7VcP9aVCYYmvTYZz3zs2v9NcBAVrDCxZvcSTtgzrQ7WUnw6GPEGumA8PV8CzfRLU1ia",
  "key30": "2Y1LGMHFEAu114VDbgRusiFE4z3PeouYWY87gQyPk66zGNG1FZoC7SujBFtiR8Cqhx5N2eZwvCVAfacavSFJ8EVG",
  "key31": "nEGZD1t4Zs47WteEhp2Jsv2c5BpCtcQojgz2TgTxk6QeACYy6wHGc658LUvgZVq62iVSfz2W1fTJHKPozdcvTbP",
  "key32": "4xeuH8uqh8EfT5vetHgYEnNhEdN1K2Mogk9fo2F4bKFqNqfdvvWpj43uUHvYLbVrzC5k1EmAcL84v3U5oUNBePnQ",
  "key33": "WdRMpFtZdhhKY5Sr6YewbcKSnfzsAtBCXixbr1UhzUPSCm12RCrE4z5mZzegZDjRjkTv2vU1GeS5veNsTj8Rjaq",
  "key34": "wWVhxD4MHatZKQWsLkzHSTkjDNi1AXF7XwD7Rr7ck5oNCu9tBZuLyL7QK9ENJ25NTs75F91bojVnWZBRxCfdSMd",
  "key35": "p6YS6hhpibVLBAP9CizqW42xtyrb3moCpDc4huYnqhoEP4VpWW8xEkqeJ3gpnqQtHHwG3NkrzDZKuyWbXjc9BbH"
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
