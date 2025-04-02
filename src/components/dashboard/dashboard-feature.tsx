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
    "5V1BjBMjuz8av6Y5ng5dh9XXuFshZhkUiVQwZzNB5pumVqFobJ5EqEFzAetUxzA6MDE7WnGQ59SyPKbsjPqQaQ6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qE2TXGwmfuS99tAPfLXpkvBDPNhuBamQEPQ1aL8Pgqv3FnvZjfkQvjDeLA6ScCf1nn2yUQX5qmhyzDo7MKBnni",
  "key1": "MghBiMAmPqCeWRyPkiWtGDmFBQLPiznK58XM7ffqapsZo5bFxc8ZCCH4bLnxfHvrFniW2oqEFYC1wx6euLTbwRa",
  "key2": "5TWA5XTahWEgfB8E3LarGhkmuuzR6cxfiVXitcc5eUK8ufV7d7uc5eKRF3NuRiBght85zLbTC2oG5nfBCwmCN98F",
  "key3": "5KPhHBUg2ngPijjDHzhUL7YPpFAzGi6jAMksF4e9jgfsXDfNXmVNn7ijTsgiHpAoH3dA3TmVPn9fU34MTftLUBnJ",
  "key4": "k26Q8sJfFDPXbQEnYCMx9fwif9JJFtTqRF1xhQvNmctYmHCHFDR7wSiabggYSNkjMagUczrx9cAh7xyF978GPRJ",
  "key5": "4Bwn9M1Jo5uULnf7TxbpWtpMKuswy87wUDFEnHT6gNfCP2fd4o5M18qBnySLj9s9cbFS1ZmfrcuwwFUihD2FdAWu",
  "key6": "4jYZZ1zjEz2dKd7Nq3gJziZySZonWP4Vj4DXa1ATX51fGGfR7Zqy1We5FsYyypdZpArtR4tjxYtTLToWGvo2MWem",
  "key7": "5zr8ZKLLMEGmDbza583yBCDAPvz849oJaKYhjmfwZWDRsHX93WTWBY7mYqTBvSHjytwnF5cDEYr87eUJbPNXbiwy",
  "key8": "3zp6pYSrjpDBJEHWRuhyR68exmwuBKrWPpqtGuZ61ELESt4w4Rmv5uiok7cYbEqNvUdTLyCQnRPT9nErXpuUMBxx",
  "key9": "4HFuPVqpbq4uci51eqgekZaAnqBzbPzLx7URdudybee3jBSKyeoxpqrPAMZ5SmA9cEK9UCwNYqnXpABhTYeRf5Rv",
  "key10": "NkXqPBz6ZQ7xwJiRrPF6vNkztTXuVy6L62zL1tfXXJoiG6WiyFCZdB3R7NUgZNwdKHHKPFNjJuM7gCbuMoPssy5",
  "key11": "45uP2Q5zU1Lb7h8crH1HDYEt3HMceV8gYr7AZw414qi6Ca5PFaxVfwT9w9jt87ejMD3tvQKMNfA3REWBfHcUfLAq",
  "key12": "45DaezBQnZCSXnydQz2VG746jtBEEERjpCmYL5ZCG2DGooj39rJ8yBjgVxxPJ6zT9aumcEspRD5hCeHLsFiWKEnX",
  "key13": "39V5Mpn4YchPgxnQTuySSCUt8QEvQP3q4vrTqGvRzXayx2v8xWM3VT6pCdZkK5HFbaMok759zKaXiTZQjGzHWivE",
  "key14": "3hj4DnscMSFR9prC7XHAKhJU6rvVX6vvPKFSk3kZiAjHHmGiy8ZbxrSVo1QZvji5rEx2irqvfuSG6ujZ2p3CbttP",
  "key15": "2NtB1M1GWG3xicJeLUM1gzoA1TC4yxn2ZRtonCXGBm8WaPRaxusmzcS6Vw6JqYCJQL6FRAhUqJ4gy5iJRD55C9jq",
  "key16": "5GG85sGpjan62A6hoTkqwhHKZ6SnSnvJLrQkbRo47UXKfDGJ4nrn66kapJpv7JEUVG2Tp8GszUAhZZf8x7BQJCRn",
  "key17": "5GiGQ5Ze2HqREmRvjymFQA6gSCVcETReAkyJ3bewM9HfPSVNvNM81yLEiQaWksHYCzki2qRe6B2xshT6JDVE5vUC",
  "key18": "4LE3TSrK4dSXaAfa73BxXxZ6w862hnkU8yciUhWW6fzBHrgD9d1H9TpYX2beeY6YvX3Vmc9xU5uPEfBwPuVLCeVo",
  "key19": "5TRLmC9rsUBnzakUvoMJnokBDyo3J3g2h7ui3ng5vLwycdCSgcVZBMYJv9XSJCnVmuLsgwk6gXZLA13ESwhakTy2",
  "key20": "299rE6gp6au6xxnKLH6iEsu5KxhY6TZJSJX5r8y8gwyGUnJntRCkJADXkiJGeLvpjJWhpJTjk2Wmm7cHQLhd8i55",
  "key21": "5L3ao1KanGkDh44NaoHiXgSyo2xKpWxSdMCZwzqim1xX8tvi6kAHQsAPhi8hUTMRWcuERxYQVosXAGmKioNtgnJG",
  "key22": "pX65g1FgvyN1mATYgwPtCaV91p9dCCm9F1KkEs6g6wuHppzGL93W1N8oYyjq45NNf2Uzo98gyiSSCdsT89HwMav",
  "key23": "6rs4scvc3tgtPmr3yrC8AvNJsLzCuKsmcrf5rfkJWMQutDnaLwKKXujidxTXUdz6C8h4H87i5wPzGur1nwVZoby",
  "key24": "3huJg1aYgAxPxWL92AS6hksVDMf24C3bh4GM2XEPn5vs9CBm4Wh7EayWs6xHm6WcWAnaXxXnvZMFEaP7rPBkLzWj",
  "key25": "4XyTDzFU9zMYRCS6tES23fJHHnnoFQX45adhLd7k67BQeEC6GE6insEWTPcxc3dAH7MqG9GMFH8mCkXDfjWNcQkq",
  "key26": "4QKQhjTUTnignrGwbgahVs7pPmYEMX61ioboqjniHpdWMoNEMHNp31AJ6vt2h2pYHqSJjwsNsSLuowSPivv5JcJ8",
  "key27": "4A9dMVPtAoUm9g81tqSM8wxYcnATWPHPM2YM3vyWJTortTZGQqUomXBxcsDWqUa7PtN5ETMpPjneM6HCMQ9xbbxC",
  "key28": "2pymgGrLFf7zD4U7DiYr6NcJ6bDsUjgdBcsf2JFv9TyWXUxf82csrXpKCpFHvYKk5qhDrcSAaGotPuwTSUgJqS19",
  "key29": "61GTQXGUrvjB7JCzMnM9ZBVQkifNjCXokrNEeQEqYvKtjP7DhykDQ8iqBPLMRnW6bgYuHsh9b8jBokHc29r7mE6x"
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
