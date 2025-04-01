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
    "3W4reMR7RKQaFx4CKhY4yDG2aVZ5bfnrHJjnHoax5LcMgBpE6bSA9E2KDjXHSjCpyUB9xKXKpLacTXdZMsFC4rH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZ3RKWuTwRGuMJEKbBDLe45T28CKLzAZTA1AJvZmG6BTvraR6Dv1owYfRWsEA9LFmZVnbeeJyhJpJNY9u4bbEPC",
  "key1": "QY4kwkopB3AjxnfgJWKT6o8oZaSEaYUcGQ6QRWMhJiR6MbtdV4PffvXRdgjdCgSzo3pkkWex27UzaHod9gjZUSE",
  "key2": "2dNYzZmjN9w6vmWx7ASx9xMbGU6Ni1zcS3uyi6ne7bCLw2SG8UBupEnBuSiMswScFbuz89A5mDeRx853tC2k8oCs",
  "key3": "CPSzfNwgjxFosftsvy5nUxtgR3xkn1araxMUXqLSMikqc1VeLcYnQqRY7fkMBrXUhm5PKaLeV73CimxmTPLsGz5",
  "key4": "21MQTW4hbuTNsHcw7KukXZtHwZyXXqAYCFjec94knxo2ySCYopuae8x1kaLbGmMfyGQcLVhcBGcnTF8ymp1UFwmi",
  "key5": "2eornBUYj8d3Vww2pybE7khaR1p9RPikWCx9fQozuuTtqwT7vEQW2UwXvgB85hgHuwjmvWvH9wmTcZZvGjMttLGm",
  "key6": "5MHuXS5vgq617FE7sCEh5S9BEUVw4YwR966otTc339waTYfdJsMiZjcyZbCaHUDsWNM6RWDBFDKpy1JAkabSTS14",
  "key7": "3bRL1NouH8Gb9PGH2CbogbrVD2JHNg7Lk2t1JS6Cn9CZwtTpKm8BxJHYa6qYVmEszcKHYXpbZmS149RjthEThLWd",
  "key8": "2sM2wNcpjJEfhdW3PJwUJ6F7dHdGpnQoDPwQxf96mHaHBtqf2U6TbrAGeW1jyUTce3RafkKSdfyQrNGCh1R7FNLQ",
  "key9": "2Jw87x3Zx5nC9525GmeGtazX22f8s2MCarHdv4PYXufZd58v4ULc8hUuxYrH24sutTowt8z4UxczkTfNH8mfue7W",
  "key10": "3DRAGgHPHKJJCEEtmQCbFaKseHt8rmDETVD4D52V8BNYAyGj4GMtpCeMggESog2VrvsWRuE3Yt2QRobhUWtZmSpa",
  "key11": "2zbRp3R5Nbc2y11Ae5aJLamf1RvzheS16dGjHfPYkPE8s2sy35iXLCRVyMQ1ba81LmKyxM9QnciPo8vSTX4iViW2",
  "key12": "2Gt2r5izMksAfMPYdpc139WLJW4rotCzshbebbbTnhKg3LLq7uh1phM6vnDRdq2gS9rtQb8PYEUqeBjbas5v48GL",
  "key13": "y2QHfWU31R8B1VmoEKrKrrwiNTwHtkc3oDVxrcf4s2CFXvq3AvpYgvUtgcmEgiAzNXKuLXnd1sfUWyZabMP3waQ",
  "key14": "xYqzaiyohNyHsr7XfMFi73a3EtGyeAuCApsZrxENnVdT7oNTNzDh2fmbtNwYV2KyDzp3N3DRX23zGTZN2AihAVj",
  "key15": "4eLrY5DwB9SHc7bJBwPVHa1QWwYzEAu2e2fQApysHaqpY843wTsxwkGE2vGhvRq7qh7SFbQDgZjcqbhyhJcZ4AZe",
  "key16": "MXggAYz8iHk1uVp7y3x7DRt96UkeqMUZztd65uytTFc6A51LuoDNrt1tK7qcTtCHkoQY7JhGNf6PCxgdw8XkjZS",
  "key17": "2uFUQh1HufJMyyPJUcdgNsyKrt956Q3rTxHb3k58e6GJnQ9JwkSP14Z3DPwXxxgnSBNNJvusFnChWU4y2Y11VTC5",
  "key18": "241GjjM3ndnbgDj4mdZoATxcz6YLdfouEdYibrkmFU7Z2vwYH1UvHLVNLxjoC6eYusEic45uPFzcuna1oUujK41B",
  "key19": "3CuMDQnFNkXhhVDQFvYq8Sx9aYj8FZK9KPzKHp7LGkWav75kjqn7nzpoWVZinykqNaSTaqMMGGdejX2U85VnaP7Z",
  "key20": "3MxbEBib2FfAWHXZybLNzHPgQ6VNAcopiAZRaaVEyaVaMZpxH3ZHo8XaxhZzqmfqMQNT6TUY78iXdLLLqnyzU3Wi",
  "key21": "3d8hATkJDFX1Kbj4edxxTD3z7ZngvByrZAQWhRL7fwjcoK4Xronq4dy5VyFScW7ZNGfJbKrX7aNUnqSK2BRnAp9A",
  "key22": "4Ppk9A9xcHSHHgMz75SxkdjrU1bxapsW6Ka4jacb4Ynqmz2Gu3ayvrgByZZf1n29wkYdRBKSQ8Ju36FebbEJYton",
  "key23": "xEkmBqNCG4GUGk8Df1y3YXBXqCwGVQQfzdvsBLkvQN66trHiJzrCumyqTDP1Pb7jKLz7E2d4sYmoRaVuJMsNmVh",
  "key24": "2NcNsMFAtwkcAtBm9fmPaqy3w9tsNedysYyBuYvizeZ8a7QZsAT388sfYTqZpzS4iUhm9ATz2zb84Uerz9kQV4hQ",
  "key25": "2C1GLhgsnDQao3FT5ADmw5b1jPG8BnpaqZp2PTZMcHUJ36hscX7FqPvU5bLXLkmuQHkfM5bcDfP8msNMX3ug3NfJ",
  "key26": "4MD8VzgMbbZw49bZMEwee8XZiH7MZDqWKEdLS2ieLwjqmdeSV9fqznqSPUmkPogE3P6aZgmbuqqCMYNe96x9cw83",
  "key27": "3y8J69hZYCAaA1eGY8oLogdcMe7iTMAAhTNs1giyNQVjRXqq3QyL7x9zCUmWHQTEM7EqwShTB8QgVrDNnBPoaM8D",
  "key28": "HQcmD4GPMF9jmp6rd8XZFqCGNbtuUQT7V6cZbkPaR5mZGCLFN4KpkK5uFH5u8yFhASTrR6mxR6S8Eyc35npiDP7",
  "key29": "5LhtpBYmU7uAdYQHYdG85WK9enVSKGKvrYBPhZWdd6AUan5zJSMr7gTwaqqiMGsDzd1akfKBjNtxYwDwBq86BK6o",
  "key30": "4CFv6e6YxkbVoxQfPYEsJgXDdgTFsPkdecXrWWaB3sT7ZnaVMUL4veFNGs9mQnVJEas8HcKvnPL3e2mJSPrbhx5u"
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
