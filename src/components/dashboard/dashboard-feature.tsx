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
    "MhSMBV6S3UbJBk3FaCaN99ejgnpa5FSjLZvTzcL1xRT2PK5x9Jz1WEssgVx6V7WEAm5HDmwWTogZXxQ3pFaim3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmgML9JQVPQ6BuEiZzTtDVCZqyazDUhQDEqP2xaW3Z7yCiij8jsp4317DZRawVwjhvHJreGW4Mbqq9pyEpVstao",
  "key1": "25pQyzs7r6wmJnrCoTYSaFSGHER52iK8YrPozYmF1EiMDMs2Xwa44mwynb4zzjV1AwniJtHg5tCMz4AToJ1afYsF",
  "key2": "5bKt5Nq6F1Ef7eUjP6xE8taiEARLn9MFZQpnUAbgBCQgDPTDNixRnbDjMnUcTEcDdbGL1vUa9RNPSDf373yCdzgA",
  "key3": "4gyhs8EKLj6A1i1V3ijesSxUrsFocDDw8fc7p8n1a1edwcnH6E3oYMV4uWectCHPWKhhqJxLb33x8zwc2gKgmSSD",
  "key4": "3hWEvQ5YmYTBCBJDspU4s6AcN4KxSk6A8MSLAPPzr8YjKssiMDVaVzxvZoXTYAX3RgMXwrKQZhnYnWmTE1Rcm7ev",
  "key5": "prr4ueNTuzhyGN4XD657gLZXDzJyfUAxDLJQd85eKSJRXvhaoTiHpnS9NwpTrgKafgGnPyqTy9Euq96r73wVUDE",
  "key6": "2KciMyF6fPYVTyBWZs8mf2UtkuB28R4wmqkpaZnBe4hKfNEM7uwTK8fUmdw6KB5kMtLdbfCh219Ww5LifDEia6Ls",
  "key7": "HQeH9weQRRvTf9pYTqu4TZkreVd4seoKA5HbWj1fzKtW8mgqbuZhhQAkziboTjocn3hKtsCo4hTR2QPLCQThH6W",
  "key8": "5FW5ydWgXYDhiPieNyQcpuFccs4UFrBKHUMzXXquYXESC6CDV8FAQxwudvuocHT58itE6Q8d8AfQj8wD4owr4duj",
  "key9": "9MKbv3DDjFRVFJpzc6CnLm7eDU5eQn58sqLbxNSymEUCJsp6nkyo53MPUt9Xd8zJLqSfqESiD7DNzD3awJadeCC",
  "key10": "4J15LuNAzJakcUvYqFWNSLrqKVJP5bR3wMrAZHrPcrLzvQSSANjpVNVbmvS5n8T3oYMVLYYM1D3SzaxThqtJCDrY",
  "key11": "4126u9yWEkvJHkRvgfd7kzzu115mN2Qu82C2vtXBEWgu3P74TbK9SYjCtkSJKqkDgRHbp3JEWVtpkCiPS7Hg6GT7",
  "key12": "2YEnRG2MeRDzWrEcFaoCQJU7sdg2LL3jkETm8mnaEhoKk9jys62LVKYfKwoTuvEXdtYRFe6G3sVJDZosLXmseDgt",
  "key13": "3jp8SgVBRzYukrxR3hyq2GeKVCPes9hxqW6difXyMhiqu3vxRXLCe2k9bJito9iLxwHFH7Lw26VoAcy7nDMQm7i1",
  "key14": "66SFx7b7FpTxgPseT8tNrwGcJG1xHzXgmmiM13WgBG1TVt7cuywnW7rVrkiSDthpW5kyfrXmZTEajEhd2ZzW9ArV",
  "key15": "2mMqQ3ahN3Tj9W9fuavM4hjj1Y3dwqpY1wnawPyCwhb7v3X9dxcEH8NNa16yKPvkfVVJs83sNc4UESEMuPxa55RL",
  "key16": "2uvQSW7J6hFjgXEE2XA1VU1HqwUfBD8F24MEyQetB3LuxpfDd1YrnvHdjjfPac2S8m6SZWga6xmMyih3d7oQYdu2",
  "key17": "v1yWnStNmjXzr7Zfsgde7VZP1wtCfddk9fWZP87Jv1kccA1UhrpEfiBdmdQDqTADCbhiMJ3wTVgidcrbfAFFswP",
  "key18": "KbLbRuYpFNiPoWQuRezWriRsN6ZkhcMP7zD2TdhEn4MUHpQNPRJTYF9aKbqoJWBPukSPYmopYU9wwZJtboXBvWi",
  "key19": "48pewf5ALN8UbzFw4dFkyxhcUMp8kpoQTuXqGyQW4foUZHGXLSuytZndx6hjKyfDLtcuRqZSeRGHQFHk3ceehZvM",
  "key20": "jPtFL6qv912AVF8Xy3Bu4w65SX3xM8opMECwSBEC1eq3FSJCeSawDPPThhE5APRWFTMfLpSBAKs95t4tEu1LveF",
  "key21": "EUeKvGXDvoVnxoA5CQbzBKtcYWC7LxfMAJ1GFaZfCJDNGoJjVKvb78aPtVz3D84PUCiQSGD8XznkxXoJ3kLZsUa",
  "key22": "45XWoG3tS8hWuitSGSYTK3V7KhwwmPCZcLM26V7Y9c8Df1Q7PefepBRbqcj1rDfst6Zj78teJRbRaFTfeqy6xeiB",
  "key23": "355hCPngJsFnyMCN9fnSRPA5DcHneCdm9GiBb5SU67V3qxBhVJyVdYRGtx8Y9FP7ARhC5LT2LaEBhm3cbQn1AQ18",
  "key24": "55CtpHTWspGPgh2LWyEyAEWG8w8jNt36qNwa1mPZFKuBoDwNdK4bJUSQqjX26hDDia8o1FikHAt5pSCFDuvjUkfE",
  "key25": "5miENgqg8gzfW9thEhxpNxZzb12GNjU8WHggvoD3RsTJ7KgErnmaTteM2HqsTA4AsGKqsmR98XNkGXg3qM6iqt5s"
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
