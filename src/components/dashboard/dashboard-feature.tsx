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
    "5tP4axP2VEFZPpXXDVzpJa1CL1oG5P7yEvHFxnfu2i5KqKdyXpttdMHYRASSmZx8diGxb18VeVDG3eYuJJxkK5vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zobHfqEz7JDtTdQ9772iBZ5gR2q1x9FFEJU4XQ8PdSXQ1QhweJyAHc1F9jY317iELFzJSm2tfuugNxUBNLDGWeV",
  "key1": "4v2KuNUBiuZJcYC1eYWJahRXKkhUBM3gFSDVaTH6xakSEeTMEJ2gmudqpMPh5aF7JWm4e2scZCn5u8MTcHU5CcZ7",
  "key2": "2X5enAjuNPbo6PuVC6U6vkYrMTyop5oB7HYyNbyhTEyDMq99MSr3ZvBo23YjAbrWsLwddjriY1pHbfmenNbqBdQk",
  "key3": "4MvDEMrLsuk9Mi5NhVp4x2NA6gyywess5iirvXMuNqTbP9SSiEoN8ozNWid8LMj1yk6kWPc7UJHx7gKCrmjXC832",
  "key4": "3h6aZo9TxkGhMbEmoPywGk9DVz72YHMpmNvzDZ9ZBi6GemjtwyWCbr49u5HpksCufV6ApHUi53xd4gw2MAdPHVsH",
  "key5": "2veGiYsfptH9G8udQccAGKKWzNSF8V8MZYgShTAEMCTH8haJsA9DJU3QRYoDsHgjL6ngUzBnkj1VXjFsaAVDoqL4",
  "key6": "5wmGPBAkZV8fiQQNRZYi2pYjiRaNUiUqyYmAxpyCzRxg3XusjvTaGpKaRgunriBUnM2iNSJUVQjuyTFwxC2BvwTB",
  "key7": "4fckHjLbcbnMDzY3VSQzpobe5JSycZP7g4Mgsfiy6D1vV4LA5jzVYkS6p26CEKvPLvDuMXikV1Bntr81URkGjDFS",
  "key8": "FDhrfNgESL2mpUf8nRFy3rpPjAJSNt5qWCwzepNY6NfdS928XkbMMgoMYiMsJsLkiBYEAGEX3KBfCyudx3teLK7",
  "key9": "2ATm9tDTPEGd7uybFBULJEdNpPnuzQSrUSt5Paz4kigYDRCSj2fizxkPzrTzcV5f9V7eCjuFLqGs4wrxL7nLMeUR",
  "key10": "RXnLgpMd2dQmcUcWkxe1G7fqptZfeMBU3JGkxmqCHXCnKAL5f2RNFEJGkVBTEaGuM8PrTA3UqozkJFqcNX3XypN",
  "key11": "2G6BAtd4ukRTcjQrYgoZT1dN5wuetK3oPYZa7jJukTimjMs4QnFE5tmpra3VfeCiwvf4PAtU3r9FntZj1z4vYKVv",
  "key12": "B5sqpchgAxp12eiexrKMA2FBCAQ29oS6rY9SeGWWxSuLHs6Y8TddeFZ8Rz9bcVHKYjmt3MghKD8rMnQTH3sY8YP",
  "key13": "2GC9Ftr6WY8ucGU4LgJJRdyxRrfMq4QDudEybsuvdHuwDX31V354tGZiWYrbuSzGVRq1oGrdWezpRKoFoAHptyRu",
  "key14": "5EBg3ReMrkPPaiphV1tbNXMEHtgj4EaXSNLveJdardXi9iCfyPRtuqZvmoAj7xqt6XmT72U6nZe7JFxuiLjDZvpd",
  "key15": "3xh5nhuXwJJXZ6yRD7bxRt47Wdrp6KszgUoa3sYU8aRPMcnFe1TLVnF6mhnpFQcdCZau2uWFyMKdsAvrLPEZVjRw",
  "key16": "Fqch7E8Z62hafNgLDXABLVXSgL46GETXfmAxw9QpVZwXnsjQNdSzQkMvCUtf8GorcjafuQjJi3DpmekErzjqk6N",
  "key17": "HfjuzShx3kUBPx7avUD9sE5VFdSnSRYTBks7nqf1ZB3AxJnayKYFfjrgkNGCJRtQSbkqcRnjK9ZmzBjUF6Ff9nj",
  "key18": "2AmvJn2YsCHKxEGY9i9RfcXsgu2aBaGUfeBzwiL4dKanhbeAZkzNJvDzz9Poiz9ChDrYQkmZhTyohqPDjEkNNnUf",
  "key19": "2B6WdE3d3K388NbSKXJABVtBWUFyeFcJZx29X9JXNs67JW2HbtJP8J7pfY991EwyuCAGJCTT4KHEAc1XsyVXnESm",
  "key20": "4da4qknuZr1zfGowQAj2WmV6b7inxMwNFRxS2RzsPLKG89SKp7SmEMcbHKCBAc2Zs5gbcz4AVCYmRX2rMNvp3LqQ",
  "key21": "2E6F84ieZsLN2ki1bMCUgwtxP5WDGsaPeQ7b8atR9SYkpmkPskJyxR14wyUVxR1U33c3PDaCzBrQf9shR1My88pq",
  "key22": "usHs1L7c1mCUXhPBzpkBKnoTc4RQ5YA1x18cpEtmZ9amMF2j6CcJyeMyLNtCpaSpZRDGxEkQv7vzakch2fqMEVr",
  "key23": "2FuY298nyhoTHMLnsWZb9Y1Fj9ryo5DXMGvPRxMNqGmMcfHd5BHnEAhJQpymuFYfRbaiudfmU4eDgxbm9RQubjf4",
  "key24": "37cxbT5Vf2H4KSHgwWgBXnHPaV87KqvCnvHd3QPG1MW9VySPrnETqhL2QNfx4etcCxCfwC3tRA9rrZN6ckH8A1qH",
  "key25": "2JT1P68UTDkh1SUQqqnLPz1CqSRbPqmWUN1T6Mk8teketAcSGJ7padTsfNPLeGzR3k9aLixva15deVKb1xAwuxW3",
  "key26": "stKxoqxX11ygayhcGwDuqP5ysuGdjoT34qkNS839DxQ4TmWrr9KJj2Rjdui3gek75RdRPChNwiQnrAzcPDzn2oA",
  "key27": "4S54nwSHCA3NpgRumfuKPn4E2XgYz4UmcACAwCzFhabBegRSeyG4fAycRcRdpHDefpT3Ad8PryUVSodWoTgc2u8p",
  "key28": "2YKtaGxrwrqRpwEoBC3MMuaUR4DpD2kYtTeBtkGu37iZMkgSiuoWZ4XezXsht9wfVn2FYo3szyh2cSAxHePj1WPj",
  "key29": "31iXk1EgUAwY4gQYzgGayd4BsDiccEtrDR19YvyyBm8dkBQMwP2fzWDx8ard1jZtH8sZvA3VYbUmMG2iaQX2YgSh",
  "key30": "39dyW2yEYUQdGEdzm6sLTyZGbou1KJgxLfZVbLhXx8U4644ua1ZUF45EVt8gR1CcPNTzMcoMfVJtdjg5pMVBoLGL",
  "key31": "2RfUUKdnvuksSyqYR38nV7ZZUpk5gTnARAysZDujhjLEDmgCXGL1pNoFnJqerDywLV8dFAGQceRwLTo7coFtpqfm",
  "key32": "5shJo3Frbo72jqnW17FxqbwtuLwNYucjedcZhWFsKy1Bf19deMYiHL9DSq5duWJgLM23xbPJN9snkXLfyspFVmBp",
  "key33": "4GbX1AuWcbDMtW3VSypnQq1SDWhUCFRzyWThu5MQcfcx4zr36ANMw1C4xMYesrBb6kTBtz3kPr6qpgJD7727ihVt",
  "key34": "zHNp9ftYzw32MaMM3761QfSvUXce19dirfjjxTFr13LQsuGT6x4UGoXbwJ3naXvuWDzuiKFupAoTB26trJCewVJ"
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
