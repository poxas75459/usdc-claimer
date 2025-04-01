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
    "JsXRVVNoctP1BJJBsqzLMBKVTkzFimDnYLmtPGt6aVJYoqzuo9HsQ3i3Bc1RLtpynmVbhACLJqpDCKwNpm1ggLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6AQPL4h8eyzPyAqwRvgc3LqyQ8vuAQfoUfEUZwgPufYrCgLedmqBSaJeJZQJYp5vi7N8jP4VKfwg11zus3au81m",
  "key1": "3aotLoXRyCM9FjDCmdnc2E7EN6N3hQuuHCTtaCNJjKeuTmb4NVdzZMHt6Jmu47cT2eYk5X1JcpRgLPGV7Dj2eVhS",
  "key2": "4VRRb9bWoeFAtPbgCNaZ8LaS7bmYcbK55WoAxPJB57Jnr1yKDyksmKq29prKfeWAryxssFNZ6Xaj4Ta4zNnHzX7c",
  "key3": "58jy3xVyC5YE4H7Lw44pvRZnKT7qtXZfy2puAcZvdw39ZSR68aLqE4ciPSwEfQcuqTz6CxDkN8fYaw71jWGdq3YJ",
  "key4": "2dnB9DvvvZvzRNK1mzSoNGR2yNYC5MnS8NJEpLKLa22DBEFKfTyq542oChPqZt8LhKXDxJzJGEJ2wZnY9aEmodbF",
  "key5": "T9TQwa3NVRzHoD2RJeGnYKeBGgwpkbgJ6jn9kVcVAprZtTgDnoaBY8PkVy4SJPFFXyhecr5ztWfBTm8AhsjP7U1",
  "key6": "32sLajZbfbFsU3q8PSc1FHAxhUmk8FVG81Q5ewjFmS3DP8udfTQaoDMFyUw89CcwvJ5fZp8vBvazaX3GCHSLaHZA",
  "key7": "2nHojtG2ECBGA5j4FacQZpiVb6MCqhqCu6AVV6y8CEkF8SCxnZ9yApDFDW2fZhB4aGijqqA5Z6XEfLT27HxVkarR",
  "key8": "5ZViorRRcL1WJmqgGXLeu36zHR1T8apWCz6TRQ5DtBJp7FPDqqhjACSatFwTZRKMQp7JcJmieAGDSi1yY9AgGR1d",
  "key9": "5pxAVrftCjis9Tc2yq58K8mor8U3cCFBUanh2xtLnk1DuaiUPToBYbLvHti4XJX9s9DVtEz9p8zWUY2jFKkgERid",
  "key10": "3PRgtWAUP44v5fxpUiusBKBRF8LrcYtnjrUmXx3cMLUgkyz8m1asqoR91iFdwg8yEr7oWCMKNkW9Ww6YoKC5FRPh",
  "key11": "3BzpLG8kVeKLVrMqJFnXTmsxbwJDmNvuEFg1W65JF6uvMvoMSvpHxvLwwQHyeZaBxLvgQJNnDTehQN8rriLEqocb",
  "key12": "35uDGsYQN7peUvPjTxqHMjtGRG4xBf28BvbH7GauggFuBtKdmHMJNh7Wu9LjVzZLc2C5FgKvcYSWmai3mL8Beo9U",
  "key13": "L4L5K6Uv2tjRNszXSBZ4JsyD3p3FNjWF6hZzQTbCcWu7jYt2MXC8FdtVKUvwnxVekxbnjbFNhmv7NbKir79Hroh",
  "key14": "2ycLUce1raehuSHwxNxDXDAXif1JpbWmxCKV57ecXee7zJQwDjKF86wBwuBkzjrYD7upd2powK8ECC39qWGuQbhY",
  "key15": "4g68VYvpfTEn1x3mFFkjdgJAKpkX8VJptj4pVszkJfrgNmahzCa6EGfMyY4jd5V36xiWfmhv2AtEr32vVy1xGrxg",
  "key16": "4kpRrQxSZihavTV2HqhAzHCvzacdR81vg6SUrCZokVdTq116qmTFQM5sQsiTUHbEnprTojky71vtros3zcRsxJzz",
  "key17": "3AcSnhQVevj3F4QVrTz9CPH4nVZviUTpv6diBJed6j7yJ8KBNs57yXPn6Ha7bu1ASd8LsWCM6J2wXPxgvqhDEzuT",
  "key18": "3SS3puRcnu7WZhS8avDb7vG3q3nXu3vsqpLAeGvj8b28cUYJ67suhatEqm2fKW79cDR6UdBJR4hcmTeYzH3Qkdgq",
  "key19": "5pmVvdNF46YAsPiV4AmdxWW7NyFfPUgbxNDkom7LenRXSyhrNnitiKWg7yioPoLCZEnasxsyXYeKoASv7Pd7fx4d",
  "key20": "5Q2eZ65PnwXQ9pTmtwrhVK8KwMrEzxPgye98h38EZpUSj8939WKum3wMqYd3ttPgdVmh7Que4HgaH6MoVVtQomSx",
  "key21": "2T179qQ9JBqkZLeqKQdRvLYeLHGcomCnHZouU2uETwXMTEqtHmZeBNyLVWmMBmxeuSR3yxyKaJMj8nv8uhK4NErD",
  "key22": "3pZgQ72u8pMQYZe56ann1rZzmFkYeY55GgteTKVoCHQxCh11SqtM76i9x8ektS2qqvo6xC4sPDMJHNEVKcxFEkuQ",
  "key23": "63xrwwRdddVXRF3BUwx19A53oZ1buo6wrAs9wfh7QdDEYhqbsQdaYNaqGQSh9p29GduaLASszGPXaSRqReWv5ivh",
  "key24": "xZcJdiZmt5SqqYVP9G8s4BpeVjETThwurVvhVu7SMYKZAcH1j8f66d4Tk5XNAjGBqP6JWrLq8XDvYaLuxHeVT7A",
  "key25": "2bkRpiRp2sh8H6KtS18ikbSNkCgYfexvb36MEFw1DMC4h7RgkydDrW89oDqHSWFSgexT28poik2h7anUzV3YF9nS"
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
