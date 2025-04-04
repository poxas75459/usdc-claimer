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
    "3EjtEWGusgx9TkUWbRee1EZo3qoQWGoqEuHATLSYCN3U2fh1ekh2aMPiH7mhoLSykiH1aFSRbzdmURPZhroiwB6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FVQU7MrhQbmUzfM82fig9oDE9yVptmqcxcqaUgynzLTY3BQKh73UXLR1YEgKWYuTFdcH4A3cLYKxbUirgPUQEH7",
  "key1": "2EMp9UbasgXJE733UvDspjHHzVM8ev86EjjGNXjZ13t6MwrPAhYgsx9NmrPPX7oSzHbeBdLgwUzV8EvNZBKde42s",
  "key2": "4LwdLyVoPAjHoAZb2tVLhiAemHPBcRwrLcnCLyE9f8zXPYWxXD8siF6kVCk3sremEd2KDY3riUwAhj19yUnpw3hM",
  "key3": "2gQzLBXR6bKvZ6XbfwVKNVQ2DXVwTruLHv7Er1yWL2EDpS4RzfNJQhqrxSU1eQkvPZpJebhFtrNDWaiBUirs2m89",
  "key4": "5DMr1btaAsugbPvhxDQmRWQAmSL2kbnCAswyXXkGzZnPSofbmLP2n2hEPY68mehTEoNDQsbX7xwS1sf34epHW3tA",
  "key5": "4RjKFccupryhHS1Qxt9PNQAnzKiG3hLhzpHUJ4HLJXLT9kh4keHJ9iJLbuYMyCj9qS4GyjEbHrqNtsgzqmJVLK4L",
  "key6": "2NuVfvirT5h983p9xhER8mRSq2NwT53TpKWZ6tzt2DSr1NnZbYWjDUfeGgXa8xwtxEjBFCdRrj28p9XUE1t7CoJt",
  "key7": "2cnmqV32ngnDwXaQGDF7QpWXHpgLcvMejT7BuwWDpxv4hT4siLGuYCMvkehefgUrTcHjcwRVjqxGTyHkE5uoYaMU",
  "key8": "3BdiHsCKYC8ACA6BeemsJXzZh5kXD13Ui8cPRSAgnrAxKfsiTHop8DPnQRtybQDWkCx57UvNXkw5ofm2DLZLeS6e",
  "key9": "32pDpBguM2wWnxJh3CB8tbCcjgeCkrKphcpKYDxnSMHqhKQhtYUV1gZzrLrQesAbrNH8Bnnt7Hnxn3KzKWJrVs1W",
  "key10": "JKn8WTGxMZUePn1pNChFDy3z5w6QspdrB2zUo4q7qoqKDJw16N7RuQYDJaD2tXy5fyMpaomrRQEQ1JSXgeDGWbt",
  "key11": "4wW9JVSKa9eQfpJTgyYo8xXqshexeR1XjFJJyYW5aMcfb3dHHhk2NhghWco9T4cUWBX46ooqmrk8djz2EvSJdct",
  "key12": "4erXDpGcGwNkEP9BWquj5e5Ub29AJLGPsEs6WAEbZmrXXPuxL8p2Ct673d9DG1huCjLhd3YtvSFMLFiwEszmDRrW",
  "key13": "5AqgzG1m4W4sqfehnL62jJFXG2KkB86rhuBXkoUd3BpUR9AE1gsynJ1FzzeiWaqbBSD8d3tqdAShAJcCxp625JZ1",
  "key14": "2tULpPEK9Zk5ujW2TSCBw3VYfLupoF9LUyFrmeUdSHmZqpYoNqDshkHdC72FpYMfVVuALHrMQHpWe35wEm5kvFqS",
  "key15": "3yS5joG4cC7j8BtN5gayk4yujkQxpLTPffoeaWduaz6gwQqJns9dHzcF7KR59342sn2Njg6pL7NAfT7ByHYx4sy",
  "key16": "2fQ7qyW9SdrTqkFogn8usV9XWK7AB4fy6zuU96gob2hjmH2Vj473UgZDHH7chLFpBHqbUwWaP7DTBFQuKiekoVxe",
  "key17": "3ao4HFEXUP55fkiyVG9dGJqHPRP7QMUBCBRoqvrdm5gHzQXMSAm4SEzp2wHaQoJBDz1EGLqidcRtWwRaXuDMdzu3",
  "key18": "4pQHePfUrJCFQ7bmBQq78QGGZJBshFVrSrxkMFasf8cyHgE7Bu7TGCN75C7zcRZaYsKuD8UfMVCmNpnRHf7QrqMi",
  "key19": "2Ke3afCvrWewfDmi5ti2jVSsrwWiGK9caD3BqT9urHa7n6ZsGbSYJB8TTkAx2HLn8JpDUUkEkaYcnm6j9fwL87PZ",
  "key20": "5ahvRe9P6s2p6LZYDSMFjyRGjzhsSWUAqVf9GCTN1NWcW3iVc63RdANMPPzdikpRSiMmPKtJmM1AvDfGkEHc8kX9",
  "key21": "4aGCVVWrgTPnaGmpYGNA3G1GHbbnJhKB8gSFcKwKXKavAcQ1qejchqbAnmHzEcFoxX3UiBg5cnB1nkiGjyXLQdDv",
  "key22": "2G1sDWdbnrVhY6KFCN5xtQy8rBMgjNcet2wWUF5mN8jroei5qzFitMBWAUzpzmJQhUiUarGKSXjSF6iAbgHLwTqZ",
  "key23": "axrFanKoCtZSzYPWsmuoByqyb4cxESNtn3WsRY5ByFRGaSboWhnV4ZE7gLB5N3FANiUpmmfZCJwS5wiM5W63uv7",
  "key24": "3JGXLoiWXqmtDimn2JG4gjPD1E5xWV1UZTpjmVr2MJmbX59PViJVAcV1K8dKMDtknc9QfXvrR7V7bsKsCateeeA9",
  "key25": "446JAVJv834HMfZHrC7a43FwRUmeCyxSyC2VVnTM7gXdcMvXBzM7GWT6cc5AnWBCz5evqf8k5anVSsPnNYKX7F9D",
  "key26": "55JUdxGHRvUJAGSjGd8E17TPV8GqGGCw7yFsTqdJN8wq4wyCFZnGPptRcMQeZ8m3eatqdP7KbKMmZacL7rd4NbYZ",
  "key27": "2MCBvnbyHBbAxbKQFFAYNCNFSsqgP1HHfKMkwAQXe3NTJjamq1wK6pgZuNbr41VnqtB8wTADRR1uJq7voSm6JMKu"
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
