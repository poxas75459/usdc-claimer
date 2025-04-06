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
    "3S2MpXfPUajbrd9e5caPFNvfDEoVQRJCaQw6Tt1R3yscb2j4KpygqVSKiE8xQvyg4AngtsoqnZQZcuLo5bs9H5vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsnYVKPZSxDf4cZ8hJPQ1KDHkiTSpNuhunzXaBjsbaStsMsxNE28AckPamZimpevik1WrMcyQpAu7icfPEkuq16",
  "key1": "4Pt5FmaLjnwjuzvabXBsyp1NrbwjquRFVHewtmwyQVYri4jUWU94akSDWcaPcqupdVMrMCmp7KnZLfepPchACZP7",
  "key2": "2xt6sNf5XvaJoGjk1dUWQ5aeBb4LZg7D3D9o5Y8N2675M7cATGfmpd3AXVnKSsznWM85VSFxe3dxQVjbiLPn2bRf",
  "key3": "2hk6EF41sJtdk6seH7mwE8TKzNGha4arxzjuQArdpraweSHf9L6vbhxF16BrUmG3qoh7x4sdtFMh7oaz1ZBxjnr8",
  "key4": "3cKCNhxSkY1HmeL8te8Do4cHPWXFLvfnoUhBNTwUAVSvNTo7zDc25YHz3QXyRt1uvovz15XdhgNyhmSP1usDKizX",
  "key5": "37at869H8aGELSzQbdrZcxxW7zt6A1iyGGv6WAPeW8urXoXbrp8HHKsSfeyyyinpTpc8rMkfPZTY82MQgySFkMHb",
  "key6": "4GBhYUtoWQ2wkQ6CoZpz5ACjfxQRfaUQDj3yGMZTkV637AxndXfxQrpFTPkUNjki75KiBfB9Dm1ExvNgX5X8KZ91",
  "key7": "3D5pB37U1PPE5WYnnaWSrZVQ6g2pAz1V9Q8XfqGu8hvoyg7HcbToFo97qoG5CvA2XN7YqWa1LZWU4iBCN28CF5G8",
  "key8": "3pJzp8KaoG7FRUVq8Re728FikcKChz2DoSDePZFpcwoKcHFDwZ9WFyzpLaqukZDXvGbgBdM6AhsYpPSBLCBmX9Fk",
  "key9": "3Q3BiaFE4gqWxmy8gZFBPN6StqBpEAS9HYiQc76bPT2WG7qgk3jYPg85xjk4RuLcT7xE2DmYHRJhYR1fMsuv77Vx",
  "key10": "y43oD9BCqqjPgwmrP2mk4cbEPY7fTCQbtEYRCKbhqvZ4LMUSCrdrhnQzyemfJQdCmkErU1M6EsLgCqFn1Ae72R9",
  "key11": "uTwYDi9Q3FyF5aDH5EPBLzNsxjhZf78mtYrovzRpxiBr7sMhG9LacHFJH6eD5HesQrr25VDznpdvZoQUs5gTC2B",
  "key12": "4ANK7ZGWCA18WQPuEWZ9hMVYd7fHAzqBtc9hHoq7Nnz9ST19hj8DvrYrbCHkyxfigccH2SuctYCPqHFpf8JEJf2S",
  "key13": "4NLnpa72V1Qnp9tkbMguPiiiU7M7MfU7AKCCMCPt5vjcdAFCMyMZxQz8kKiooDYUoDfbqDcD9zNQvYgmEHZ3aBUE",
  "key14": "24YbttTgxhjwjwn3D4JvxqVRpGhSEvwJ11hsfGRVsra7sLnfs8kHPFwyGpZxDERvpxXB7BpRwdNp4muCFgebRS7h",
  "key15": "52JZencYwCrHfKNgLUdSu2R3ikmdahoXdzPPE8G3Ci5sKoDF4yzxJZj2Wti96g9CKKyVF5xKpebjUtv9AaFzv24J",
  "key16": "5RwsKfViWtLQJExYSspPVz5bDtPyASBYWrp5ahpryiqutjuHDv8PKywGq3RUSENLdnJJWoy5yabDxaTstD4pQHPR",
  "key17": "qAbrm6TFzepkH5PSMhCSLDqtQU4h8Xk5sMUy8YdcTwaqJkdVADF1C98ZZp87s1mZXJwYt2jKPvoshAEBVYrY1cQ",
  "key18": "2poRtFjKJPmdwdD1U9xBbJJjdm5FWL7St52JGUpkS1AQCnhwtNYrVdgFqSMfukJ3mpb7TwQ4EJniLu8SQwmyGvJi",
  "key19": "34869HYy8gsEJqJQirTJopJS71Erb8oNZqQAsdaGqWoX3rUmBvd9jXr7B95Ctx5QvUCfPQw9JM1iNbSxf9oDZhRT",
  "key20": "2UU1xnHcCZskp8DG561k9XvDgXZKNFtKjU7R1q6RuncBMpWgj4mMjCnZUhHGyeM9MYzV3vUSsFXwGC9vjsNM3HRt",
  "key21": "YUUhwd5n4EoyeSW46jykkJJqp7FdoJmAMro2yv2Uniy9mjofCdrPWuqmZMsnnikXD9QtHRggje2L4spnTQuVtoZ",
  "key22": "5ZBkkjJvMYVYePES9UXQz4pcBwqUQcasXSka4hHZ4oxEFn595C4ZNdw52Ji91qrdRjVe5zHbSjokwWizEt5Bs1XR",
  "key23": "4e4zTeLf7pWGMcyoEamDxepWDyQkEac49GmPFN9GiqjbzYU6RhobZe4jMiQATxPWsbCbc3dLW1LAyNqqQGbn1ij",
  "key24": "57TSdhSAHnGWcTZwzTGMbkvfz5TYsysZaySdtTw7n3FsUn7q4fQ8CEzvD1tVSYTHTxdmoMZkhiQUiXE1YoahxPVq",
  "key25": "2axWS2PUY2ehVYBKsiB9wCjKcw7SiqkPcHXcBUwJraXmcYDgqZENoG7Qofef5TFTqpHyFeYp7tPFCihhxRQZvsHE",
  "key26": "4G7ALacb6Dt7ac8CJmfLPgZUwwDFqrDEkyABP9VzkYEBnRva59XWhj8NHTn8vfb1CpsVfdKtJhVCmkuzCgkcPc94"
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
