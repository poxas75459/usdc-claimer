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
    "4iEF7P1qbJK1gWYpehB2o9yke6Bjz7PiNhAvG7m9jM1Hf9wDzQkCyEg84X4i4Hm2ZkyMwwCADjNBMbGHCpkWH7N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uCpbuRvMXFZndwEC6Nh9cERP2PCoRwvwLsxT9hXgQZbK6r9USYsJs7sp6GDZxyirhV9j2xRF2Lp9VejvhK5HeCe",
  "key1": "3d5dtzWBMcyRKTT5hsCwiArkDA1TuacWk4T2fMo6Di8KYTpptFW4RQpc5xLfsBR7aXW8ac3pgj5B7WntHPtTN2FH",
  "key2": "XwQpvC5fmqzm91MQb6E9ryESfDdbKajd9Vc45W6gsGdxatJQ2rNvR9f1GC5ezsNKGFhpWXySwzKXcL7J43gXUm4",
  "key3": "Tz36vJX2W71ePSxG5Pdyc9FKyxcyh8Z5FtW5Z2jn82tMgKcXTe3BjfvVGAqztsMzjpBmt23DpNjx6usDWGs2rrQ",
  "key4": "2afmsXF9nRJWVTzPM3wsgW2eqq8FiLnjzyArchrY4GLECFVkG7w7ZZ2vAbXxyWzVWsHSztgu4znLpvBfmp8JVR7P",
  "key5": "JeUYcFmNT5Gk1vyfYiuo2echFTRbY99uCJW5yDgvW994VZHNMcDEP99GdcSJaSzpu7jF2NgGjHaLckZSnh4pkis",
  "key6": "61birypsa18txLmkS8uLSwNdUuss4C8z9gvDY2WYXLjbMtKpuj75597SUpt1EARBJUmXcQAsCBceBSb7hMjxmzmF",
  "key7": "6GSRqUn6icSPVgZ9iuYde72NaZD5y7Ccz7uxyvKvqP2qzsCvwqSxke1oR8HUFiVfKrQqoZ2Rc7aS4SoyAwZSKa7",
  "key8": "3p6RGfCtGpFS1SeW1tcyH5MmkNMY2MvpWakhCXnZ1gVopjyqLjgbHW3HpAtn5fBEhuLJ9V9v9SrgsGMDqneXxEcv",
  "key9": "8n57CexSzmGNKdcscj28jdz9rqJeqRxaw4TVHjSiE7ZiTST8Wb9cyWaQk8bZJuHRSJxg2ak26nUkvsUwuPjfbdd",
  "key10": "VgcFMavevtNoDryMoURR5UDMsieHMfDMWj3mt4rZBsiyVuHPySFW9xu2gwzpFNe8sE7aY3S7c7hvfMZjUDPhv88",
  "key11": "4Beos38syEdHb6jtrw2C69y4Hj7ydAsynnZW5p3Zb7jBBTRcv2gvRPxGYRrWoMYSdU2vMoUwFL88mt23XhCsQegu",
  "key12": "2wc1XF5nbv3rBCEwis6YRvPTYYxLtU4DdszdTLTZNCrPtNVtGsfodUKiZkatSZAQZjCAktAWLqeQw9p5MyQezWSs",
  "key13": "5vh5iqs8ULsByWes1wQGwyN94SYbGoHeXiz9LkdT6Lp444uP9uCNnrheNEmXnRv4L43ZfmqTTkA4t5kKvwGK67hG",
  "key14": "3pQdgQQCksZegFCja2oDFTD6XS1RREDjTK2Fx4tbBPPqFh4bGSmF9ZS38XAMag4qs924TjMshaH5cQT3TooLCini",
  "key15": "5YPbcmoQTn4eLSzGiimkHd3BZXoAw5bdk4Qs4AgE3yi86nccyYCzVQQiznaZg14qetHHuR4dVGY3y8Vp5iAhxh53",
  "key16": "4jsvq8dNibNTpF4oa8LgH2efyiPmUqCE24yaz8mBwSQ81Cqw2A8YU1y3NAD5TsvHmZkM9xBidyrqgo4j97JkPSr5",
  "key17": "5omEixj5aj9KacuvKREpYLquJCqr4DSpc411Do4fvAiU9oUVuPGsNSmJB1eLW8Rep9TAZxLPkwDF7LF59eiidoeb",
  "key18": "tnM3u7q4hLmRu9gM6bBdwuRm6MeRQPTFDSAdShjDxz5XSt51Et8qgpre6F6qkuzdp5GGgA5oe9Buf6saqtYznjR",
  "key19": "3TfmytniJe4pKnmSUNS2azdFBYgGa7d4f5NurU7pwXnga6KsYJi8NVDsKAZzsD463N98vRRJqWe2BbzXSTKXuta4",
  "key20": "67bdSEku9X9PJjpeKPGdmBoLtsXbiSVSXmTuiRtU2cjQAr8uZby3E5cgxYhkBDjRbM9CtwKf8x4V62J1p8auQV3q",
  "key21": "2hcFVWXVeP9sztf5BWyx5uYdNADuxV7mkieqDBCVWjDQV7i6MB9uANjgAUrLyZijKacrfZZuhG2FUtv6PfRwN9iN",
  "key22": "661dTon8bkk6aWzTyTeV5LrrobyeDaLm5CNfWhfQYAQ32H3AsafJpbzcEnLbtYxf6oVKtnAFNbsttofegesEFk7Y",
  "key23": "3KchPjHu4MWp3L9RoA1GXKoDV2jcNsS4JLCQPCzcmm7Vm5eckVQ8oLKdJY92YTPPUS9H1pJ1HiSUgL36qZCEqehP",
  "key24": "5feggAGnTq9oFagrVEfNuTeeNqxPKWbPBJWAxRc96jrTQEocK92ASp1UyFnkQDqrheGQ7pmxkYQrwRA1ekGJk7SS",
  "key25": "2CswBss3ESx61z7bhKbFuGqYzYbzpyQAnmMoNpHUG3vRoVHGQRvxNuyqvDSCucHnFL7GBKCpukxd63StWyoKepZk",
  "key26": "3n5ZNtXrdKB5MJMkfXXVN5thzZnncMtJDpkyyAosGqQ1wQeKWeLj1AfqGpidBweFWPtuxnKC1NjEpr4kos6i9rCc"
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
