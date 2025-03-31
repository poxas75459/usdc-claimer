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
    "5pbE1mgCBwkkbMQE9XdkB91nZhsrbx5DCHssKJ4AymZmJKVxygFspGYGA9ZExs2tKC8Gwgkch8B2DknGJ9j98whP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1F3u6NDSvR6zSGc79ZfEW7P4Vom2f5gDvNkVTqu4vQDME4QsU4FNQELXDC2KvPpyh3hd3z9kmNigKVEWxZ5WpfP",
  "key1": "3ojFzWNKdCxsBJoUMcFTg7ph1VD2UbsoU9weP43E7nKtxaiyrAmHXAQYTtKfGFfKosPPmrP2UJ1dWjzXmz5TrYab",
  "key2": "Cd8sP2qrQuufUakzafT84XA9tppPuK1TroxYeJg18haMaDs9egLXgdmqzoev8goTNYJKCy8FFXtnMDkTAfheMQV",
  "key3": "4q6HrGa2zEj7HmA93gx2YVf8pbPy8ABirHXKNk2JVvgxUCmxurwLjF28g2mi7buw4yUVYYWKFjdhHvucyMYCnD3u",
  "key4": "YBwak4DnAYpf3G8g6H68GbR3MmeFDSqeUX1UnS1UFBPJYMhebA9SZCEEYNeCt8uPkYQdX4Pm3asYZpvHJ2r733b",
  "key5": "4k5xbteM8MsLhEUGmRXNyr4gZztbLpmFLnsZ7KESwU5NyLDZ25a8L78vkxyptWLf1JsGtuR1QtPGVn23EQZpZDXW",
  "key6": "65zdMjWTMGcJQc9Spu7yL4y4DjuAVLwxcZtLppYbBYB1uicyg9wKBp7SwkVq2FRWvLDqdXcwbvfvTW2Syp6224Fq",
  "key7": "5Vxd1bvCqqhKRTSmUhGNTemRUX8u1cHZUGpwcRwn6Q3NiPD1SN5b5rXpGuRF1nTB3sDTudzoHMtzCkYZT3tqr1NT",
  "key8": "5jghkf4YVTxWCkYProy6TqNSNDYj4Ft9Vkg15wRH9Fo6N8zrt9ZFhX49ybTsSkmE6cdQvy3BXkew1YpwVvrudxnw",
  "key9": "5RaCqf96dX5DemJduTHZZKxA1vGGvvZ4Yc3hkY2AEN5CqjCMRbWktDXcVBWq6nnLkods9PAt77aDEAKj1F34qjYF",
  "key10": "5vPuBw8CJMTa7xu8JhjPqrpE1vjQFTCmMNosJmGQuDqcQDhWruE93X28Uq9cELk9FhRcUeCWRqka2FGyPsFRFBuR",
  "key11": "2gSTnm9ksSpFWsGgVjr7hV67Ncvd3rMN8s4qEDJ1ygfCPAZaotKCE4WEi5pNkCMnSrzijnTPUX4geAMh5YiZoqir",
  "key12": "5tKytjR4Xxd9pxBYL9VfJcd7PZuLM3KdJSkda65oaydBFfsQU4ydA7niFRwYDujtCwWN1xrmxdd72QzLsgie1Kne",
  "key13": "wVqqhGSgAg1s92EjM9S7x8xUBuZTszmWh5WPhfY6pjbWvWLe1rWXmurDEQrTkrpQNEQ8u1HhHwc7a2LLZran7CP",
  "key14": "5KnGZVu7gxVN8BFqUngEfwpfEm8EZyYmKqTTRZdaNqDn7hFH68G28DaNAytVuxTHTHCgaTrxzZsMPKGJWZ4D3XTB",
  "key15": "67RxdX2ACsGwayZDz5L4Rp3PsbgidZqsUgmQfpvvwMwh5st6Z1hB7DZnxf75HgkBJL7MK4TR3RWkSvN3DpM4visD",
  "key16": "mbHxQayZuRLNfRJxDu8ur85eS3TDQagWpHKRcbc1Ks7Rn3tBbP239ftdmDqXjMFQQofYU7wMQUyYe7KaVvusc4e",
  "key17": "3MFKschVycG8vW8wpkVvs43H7RcvuDuBR9bo67GEKLQNc78w4KvEsMwUNJHSk8oLef1ytGdjRBRC3Xcfi32Y9Vqs",
  "key18": "5oBgUmsbUf87qKRFGRAdUqhFzUvMv4wkM3dmXED9sne49mdbsX5xWMZscXFDdFwMyXQRDBrJu4Pn6GDNYfgir4fT",
  "key19": "3zoEv7C9JoHE3Xbf1bHEtYfM92mbjn5DCLtu7stNNyJrsxSiakVcfBipZk99iz3weY2qVNFUtfU37jGbSszVG1aX",
  "key20": "42Hi9VKFyD8jsCXYoDNaWM2pjfkCoW3suq92J44SPiW5qHyVJJiGvMc9qsd11r1gCNtCRZMf2vRszjqnh7esHQTT",
  "key21": "4QC4vxUiMEWeY6RJusbxx3TVDDB2ucwypfrshiZgHLSYeMkP8uyuyGxfanR3uGz9WshvQVwB1CjgeRuA4PhhStfo",
  "key22": "EKU839GFV82CP5CsQJG5YG3dt94KTB17N5BHdYnoQNaNXBbki4jYqA5N81Jy7QuvY41Ljfpf3LpQuMuhVnEC1hm",
  "key23": "47dBbpNXWvmdke8TvxBkuevjcorKoZpKisi6ngsiJvyM8819qGnHS6SJmRdhWKNuvetMGHLFnPjRKZ7carugQqXS",
  "key24": "4uETb234PfZBfxf53ARYiPJwbLudcSqLpYQr9yfXE678MVcwbPSCp5fuBKQxqwx3NP5hvAbtYduXaMSUZD4VDJvo",
  "key25": "rDqaFr53h1svv1FjGZhd2kyXLmZsWumYC97HiJs6Vjhbd1FcHoJr1nuDJRTBCfZoqYJo4pXHA5eoPise3ze6S7J",
  "key26": "uwaWTXFZaxovkYrYcMA21jNjeUVJAuTyL8zhPFmfMkQ7wQXv5hVbSfiw1db9FdFLrLRfGnE6U2i6rcESTGeXG8H"
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
