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
    "2ZNVF5haDsiPL3VxLAbJ27x5o9xiKVSQfhpfxrZXHpVYLQxVjQtsniut5pVWycLya2LZ4xkGZgmDScFXJvoZhX8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvTrMsV7dj8PvsMdrdKWkdTybrhFGie3nxnm7NJPnnHP9DCw6gKY6ftoWLkh7rW5xKVxVcrL4yX9TVyAJ8eLMxb",
  "key1": "5xTyyhR9bQH29QwFC3AZ9PTpp9pbW84oDirG3FTPS9BUinQqiCA3GQrjkXcam37B5T5DzmyEf9R8ex1CU6gUK23q",
  "key2": "4SStSEcxykrAM7V1wquLfv8iM7zh9TSnf4bvoA6NmZgnGnxJdg4XEnKyyo5h41YSaXcnxzvAVQKTPeLHPwhQjJPE",
  "key3": "4ixL9N8QMz1z12KmqgmDcWY7x9LyvRrCDRS4SdEKoGJrCz5WwNMmLxAqXFUNnapifpYMEpcTpWxY3jABkkRaHV92",
  "key4": "wEKzFSxXA4BqaemSnvt5QwoMsAXmnpkmQm7LYBpKAJHSRM5PzbSpPtCXYKLkHUxnCSQuvie4KSs1Xmib8P6zAXi",
  "key5": "5pt7D2PNTTxsxoFDdCBwZtQ8ndV2wZP7NiwjpGix4uyBqhJMdQGDpwCZAQaXBhHQjuEgsrrZHKN3bncMqeVPQeGw",
  "key6": "5WYo5PF8cyjxpTKmgDN6t1xkicRyPtSFSuQnKm388CK64V38YRV4LhvMThGNEKqGWqXNaW6wHwRN47FzK9tDDhX1",
  "key7": "4xZkSFjWKQKLLxXWJ1FeRuqZHnEwfL6RGB9brUyam6XqL6Bhyru2uduBsCW8aohhruW3JtsuMoMSjsyhCqtFBcpP",
  "key8": "3qX67iz1VAgmBYewSWDtmyTN2JaTRbASre4M3XHwWtoFiD2VtWxYWU1RY6TuJNK4DLAyzQxo9qxt5f3GgBGqng5f",
  "key9": "3yb3faE6sCjewEB3sN9sf85krLgCtbHCdTTBt1o3aFpZNtkfJhede71XysZ1KpHKHUp8czq5p5t5xgSc4cheVf4a",
  "key10": "2gat4jZmefy8DU6SA44Mfitt7ARpyjDeVEMGAEEiDMyN6Fsw8hghwvCqXQCLGUY8Dvzp8C2mvsr2bLkAAjMkbBUK",
  "key11": "4zzomLNaBZJRCFnSCXjbMw9EbAS6XCneeGMhP2Gq3ra6qnZXLn7x3cWsrwdDD39XKkawct7Vzx9ZMyCV9zRrXd6J",
  "key12": "4z9idocGFUzAP3uGEYVvze8zeNRiHfRrLNbUfbEzn6TzER6GmBYacEHLmNKy6tLkmNwfmoKQA6XbUCHr2SAUmYqN",
  "key13": "VHLAsVKet9jfKRhDA3aJRoKUoxXG3Vy1uNWQVNFTHgtG8PyA1PSn5wbeVqNfyfds84XXqHDqvLMw3mD9k1NbFsP",
  "key14": "Z3BY6eex4VfuPCnf62ZA55VoofzUqCDxno1t2n36cVHieSZZtwjcXvj6ubiTRRaahJkgxanQFNZP6rTJbj8sAP2",
  "key15": "4tyUSX25Hy6cZmYB1CgM5HKjiGQvybp62ZbBihdKZe4TZvVYwZSPwSLeNpwc4rm195fXhMgBgP1phcTUmP3QZfMh",
  "key16": "5RHj3qULXc3RFSQBizo1LJq2U5qbpVaZQhKVDKvweE3SJLrL8i6wR8JTYNF3mtdbhsrFs4DgiKcSpZAKui8suh8n",
  "key17": "4QvFEyfcDxcyhFoQmrP3KtxqMs1HXVXanEP7hXMju8mchR5Zfv6RCUXugufJADoNXzj8QQ6g7BESmdL97DvmLNb8",
  "key18": "aKH8QKtbpo8u4EC8KrjEcncL7Mgqtdu9e9FZLw6Ej9kfCSzQoTNyVg3GYK6BHitgv8dMxovUVf8orqWauqgGyqt",
  "key19": "26yFtUzJ18mn2MSpVM2Zx2Ks5uqdFfHe2wn981Zbphb7ZL5kCo1ZzXxtjU4otjhbvB4GBiudranY2G14r3gh6Tts",
  "key20": "2WAVVxNbYEtq2QGRv6SLogHPiCPknwaRJeGziUpbe2TyRbVnJMbMafR2cmgXLoyC2W1z58vEdzJmyKpwEKmbgXh3",
  "key21": "4W3Mq1ZHwTjPSX64EyJKNX4RPmJKE4xddS9CMcsfAFtcDhK4PWpXX28nkZ32vmT7z3fBzTZTESA7c72FviNUcSkN",
  "key22": "2wiji5MtSXs1NbLQXne5QrLrm9EFwz8okrpbGn34fFA98bD9TinRjyzkwrpqdWS9B46CrL4Pqb3UsRbVFfwcrQT2",
  "key23": "bGKAWxowPhtZA7cMQeymWxQf5MNibasdMH46unkpkg7yeaRXNTy9fByfb8d1JhcF9JeGu61SyBYkAXF8osg8CSk",
  "key24": "9DZmUTvLkqSL9QYoP33ooAMgubhwYT2XVUnBmBJUXHgiLYBiWvXXXM7qmuVXwA7ZzxyptnGjyN4dxnaCEucPPur",
  "key25": "5SKqg3bYiLoyHfurNAq2QfuzPEx3Qx9HfU7LJBaHFyLkXPM8L4JUX2C5di9gZ7rUXyxtmPUcAWAUPzAaGFFLKJtU",
  "key26": "3yCdj1JmeygkwXbNeNApLDxKN52j8RhCtD4wB8xM6kjK94iNB9eMeYfiZ2SWACwm7a9dbbMBquQrTLbJdekCb4q1"
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
