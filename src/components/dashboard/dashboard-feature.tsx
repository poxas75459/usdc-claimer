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
    "4vgp43ZSuNLsAeevZdgzXSy7ALruTVFZ2P9KGnqbHdEEGAgxKyhP3MsLPehSpdcLp5e5WAH2eykLD6UMzQaNZWH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLQhXhBod9WULdGcE9MtQv9HNmCspUnoV16hNSR8upcb3ZrNLdXwSNLLRQzVRwxsdhHm4qnSyMWREHWEYHrXusK",
  "key1": "5NHZVJH28w3cm9E3htcagjE8JNp7CdHY8qCTmpb19ZzJuUJzfuzFSek9u4R8p4beqA8TBZPNjoGfSSWKb7iECsiP",
  "key2": "3dfNNthip1jTn1iUjn8dVvSJWrJJChkiBiwvJZffiNDU552NBtfWAJGy66n7RtferLV6zKokfdrgnobEpKVhyy2Z",
  "key3": "gy16uyEuDuhixX5WCHvXrYfDyvchtGiGERh7pLwFZW1yPjXanEcrfe8aMKYvX4um6zLxmvSFBEZbAKeoQx5RNLP",
  "key4": "2cuBr4W513qz26TRZPX4n7h45KyCNZQcQJ72KKT264EV1vM1UYTLDGT3VEnWmurdCC9oBXyXGMfJR8gi33JphQQS",
  "key5": "2scUgzxgRw9HHoiFppVgErLbAKZrkLQC9FZFPdK1cbZp7ULYMr8WW31QCjhTHrBzWr6ShGpGocPrJFm9dVS7Z76",
  "key6": "2j8z2Zqmz7giBXm6Ttd9cGwibXC4qTEh6aqBSbK21ztFUsLWnwV57WY2Jk4V2FAU7TMDJRSXbvtGzVpiAQ7JPBFD",
  "key7": "539QhkuHfoL44DrMp3yE48gSPEKmAQCc7V5UyhSMzjwNHsFbaNaMBH5GwQK89FvSnEvTWfAPnjbtCggg6LFsYoW3",
  "key8": "4QSisCJzvmYSdgAVF7Q6KseoQzRPtyusM9ECuPsycFrZaBrFMZaHN1kHp4V4hcAyn5kKNbh9rPPkDDXr8rCPzgC6",
  "key9": "23Ea5VNCKd9hwmqt4rXzUygvYqGm5xsXbqiYdbgZv1qNefEKD9AZYe6w3HwueJqVkAmXi9VwDMXqBrBqusrN7qoF",
  "key10": "9DsgrJiUhWQRVaXEKdNgGGWB1sfcHgtFsdTTs7MG3X3drYXdqPjZgizduAWBiaEzBb3UeKDsk9PKKkrv231hvGe",
  "key11": "BsLzMoSvHgJ53Gq3VUFEp3zXd2PBG9ZFAfZyicHLDXbQ6EmUXHMcjrNevwQPzCB8h3ZMMboLMkZQLnVyKk3fwh8",
  "key12": "yj8wEfqoysvkG1QAkAvXyoK6CpocCnqMG4WKffboU7t111tpgd1pNmCU5cnnrSQMKkuiFRoKASLyPN1KxnToB4J",
  "key13": "3PvWh1TTMkzUTpN5ZV3tYBkZ8f1sCgpx4JABTqzGtdqAC7YUsYK45QyssogAaRW9GUp9jBBJW5Dy785rcxCNXf38",
  "key14": "45XqFbTzGBUKmrGvmJjPEXs5Rr3SV7SEqVyYDXDqLZLiZHH9JYTL1LfgiQkZeFGJExMxYPJgVQFrbw1pzd4CCyQG",
  "key15": "58VGyQj9gFzxoU3FU4et69jj9oyzxo27HLYXPfxYWnrSSgaTw1d6pt1cmBZN3TCJUVAu5Mj9b3SUDyWVS67d2Tgd",
  "key16": "2BuYGWA5Nj186onnCswfxfSquKHGHNJsxbdtB4TUDg6DiMk8e37zqUfygFF5h5C5qfyVEZchUiM1REV9SEJ6vYW5",
  "key17": "2fpLPqiyvu84T8uToJctys46TaGTa2x7LySGkZfq4bLGb4zw3kK5TMZZ1RooABLnXS6E7FKg6vwWBK9BHj4P1QGv",
  "key18": "5pcfXwy6ghqJDRFQpYM27ETEkME2UUKMLHEKY8jD3FPJaqFRBau4T3uPSpEnZ7uKdNZMwXh4Qt6ziJa7VtgNcUgu",
  "key19": "HP2WsUX5qk1xeWfVrAUUkTgf8iFvB5dvwXR4FaDKDHhbxyEqeEAnT9RCf6FmRzAJCXrqzhVfZ8XM4WkrP13awHq",
  "key20": "2vLQKH7YhAicyYvkqtx8tKQqLSe7GWZh9g5kJ4hov4huVgDBZ5E9gi4hcw4AoL9UqNF3Z76Sc6YEN5km9opx4Tif",
  "key21": "4S4FPxuqa8nQGswFyExbT78SWe2o29TmdS4dw3rgZfAbY9R69kXFa2SSQYUEstqNTh47UZYRCMPUR7Dqz71J8x2Q",
  "key22": "4j8i4cU1djzeFScwXdhv8BKWJA7a35PZsm7gxLbpVoY7WKB2Xxk2wZ6FVWLiYuaAMC6Np5Wb3pJ2ApPvXXPJvqaT",
  "key23": "4MC6nCAApTrLNVBRbMftmwqs6XabmvLMjPYqPooSAvvr4wZkdPfeZAC8Vh11jYXqPhENS2Fospi6UffsNHZuxXwB",
  "key24": "4atwZcChPSs7ePoQ1Qp1N3vrACW9oNaRa37Zw3JHgzxjqt2qY3cosUqCA3ZQPxSmfE6j1q8waABXVQdZPX37tgsN",
  "key25": "3ABWbUvQEcrZFzXGVtd1VTwGejzSXcobHzL6JEcprFHCAs3Sb98B3TnLWUcFh236cEwrhxPA4cNYjWYVzKAmS3Yn",
  "key26": "55R2PVu3KyeFzWqReR16R97jN8i3HUUtkKvRBEexfVey7tWb4MyGYqaiTUEyRA1sp5PGckaBG4HFWftePikZ1GL4"
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
