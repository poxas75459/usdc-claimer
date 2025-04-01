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
    "5WcxTWpBNoBsausvpxghBhcxRjJC8wvL9uJ4VjJ9qhekcZy57sTTfPNvLaU5M9tqrmJgWBE7zd5Ze3W9RAuumdFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21PQbq3uXTxhgc9RanB731MRxYj3dRzBksr9ZTkGL6rKwfX7bSp7vB1ECrXyvNp4Z2NFr8JfXTf4sdPBPZjnSDb9",
  "key1": "57RURHcwyqY72yUyG2sRY39vjuY7GZpA8fBhLWn74gEjatCKi1Mo5XqUe1HESWkniM3yjRN2y1pM5M6TxAL2Pchd",
  "key2": "4ePXZjE4RQnXzBKbbnvdvSERRfPRfZvKRLfTR78cXK2piKpbeCFApN7NtQCXvxpd9rqcEYS7HkfAnKuSqMaK53Nt",
  "key3": "7dfKSXhiAqoX2gRdrFasnAq3JugPk45kJAz4iSG5DrDXGXqRsRi7sXoUfPL2KpzoQGscR8VzhDzTowRsQag9gca",
  "key4": "3FQ1GFwYCRnYV5H2QGTLeeQqH9u3uqkVTDaYbZqBMqbkDzct9GzuQJaRN4a9EkqSBu6SQBK66fpreRHp8YipeEk6",
  "key5": "E9b8NfaLudBfpak1G335dHAFFkPuQDDkysngSLAfd24FbGZg2P8xejQ23KapMWNd8398LiozKjjUVJkwzxmHGwn",
  "key6": "5fqX9BCnD69hcHsmHVaTVfoKfcc8mho8w7NUTHP4vdW8V4u3zJQ58fAJaJbsvSdGK47XY876x2eFZkDkw71wLbPH",
  "key7": "iXHTPEqVh8LoQE3qAdS4uNzoEumPZ6FJw65oBZvTqBeQRXvXqJVGyxJTx2ck7DvcQmbSuNsPYs8nrSuNdZYkkyN",
  "key8": "3SD2mwcuemvsvFj5uLSG8CVUHJS6LFuNKPG3MD32Z6QDFyVxvsYLrmxQRGeEcUCSxxqTGeEgoWGU2mVbeW4ows53",
  "key9": "5hDgMBGtss1gpXTHKrwS4mmBanhwf77JgQCmdkPUu8qL4sk9fUPSrBkQMeiqLjC37sLbAoioHhrA3DP4yNLtPT8N",
  "key10": "5rGgKKS4nyWarQ4gmtdPxnEjuTjMvwwfZFQELoDVUJyPRBFQ22gSXw4D9Ji3g7TSCUEHrdfhqoT2Qo1AQ3o4UpCD",
  "key11": "5nc4yKd39nEUcn8XSKRxEL6wP4aGTH7ryjSPAo1zYEYWZ9yogsaKBktiqLcGCPLMZ7Dec4t9eaZx4fcLCP4VdDx",
  "key12": "3zcFS9tNk1dktbgyGPRUwKKDxxw5ammFtG7QBzMmNDfkUnipqZYMFmSVqixmMGwV5b21GtkqCqsq5g2mjSnYZ1D4",
  "key13": "5yWbfpZCDiH1rwEYJPy2d4NnvpdKdDnwCeKdaokqvUSLDjwgbqLbnY1cbPE7f9LrkjpaPzuBc9Kq1wxHSQcvkmVm",
  "key14": "UdUBkJ7hNAzD3zvpcQQCd7U96dpbCp5oienM4XYQEdSr1XNRmwikFbUzLjZF1k1QnLYP764bMcEd7oX65bgYVWA",
  "key15": "3at1zJ6tSpBPyFkNfeWinWwVoSpB8LFF4P3NNC7PVdW1kPRD5ujq36aycGRsVouFUQ8usMqqKCHxTFAwpzzUgrHk",
  "key16": "FybfgwKpFtBKhxMpPaE78fa8Hxy2jhJiRKghUZLwF5guexJfNTvcuAFvELmTC6tWTWmZ1Sr3qW1DaWydqNvieuF",
  "key17": "2Sm1Hm2jynCQ77u31iiXpgwd7Rgky4v9KBhczPZpVQTp7bzaSqmQniZosJo3MjDXUXbggSiujZmCGbyJziAC9EPM",
  "key18": "5Rpxd2sXA3cujDtZCBMP4HiNUgsB8SQfyTSvSV9g2bvdfgQbNkF1JYWguDJAvC5MVHi43stZdmmq56qa8LNuHFEs",
  "key19": "2QQuSsoBjW7PwNZSbxpbVNK7GDrfqy8RWnQUqjELG3iNgcYiA4MxWECzGxxKCrSE71h9G2XXaU2UDFMohrvKD55g",
  "key20": "sGoY2ZqfTRctGjjzDBAgZa3NEraGJiXxdJAcVVdosb1BPjHCucUaorhHGebxUf6UFAq14BEYxGoAnZHyjNmZjDx",
  "key21": "4jJPMT6hm9E9YmiHNcfJcwdfuF16ANorxkBDVb1KSTaBV2Z8k8ZkDaDd5B7RUXBKuoA4LTswjF2DytT3sckmL9EV",
  "key22": "haYywqoxzkPR2PrcqmV6f4KGnGSjGjsMSTejAPu3Hm6vWWkfb71uAHHn3UusgMQtWyuK9iBbLXce4BUfaHS7T36",
  "key23": "4FWdCgeFnFXCfhGdi3dCnC85KpxQqWqSRvrATiK8ZkMoDMTpJkbQjsjKpQvYppc5rZmDa8cQTD87o6oQkDdc5QZ4",
  "key24": "475KSsThaYuUvgCvH1McKkBiiBqKjTCJwZQTbFpjWuSdbUz9rLmmVhNGhKsC2E6xGzphUKpt7F5ce5uhtRGB5Srx",
  "key25": "F1UmKBjy6eHHC9n567JCq4SmhWWXyZx21wwwvmhYYtHpzeFs5YDDE5KsFe8SYFzd1NGvzE4k2C9ymyNg9vNtH4P",
  "key26": "3o3Uh8JndrRRCHSUbJHtuPJtgorPNQ8grtt2eFqNnFSe8pUhvwyRomPSJCU4YG6oTjZxJzSc7YqyDopHtz5fjnRt",
  "key27": "3h6zSf2H7SWQgftMr3iHz7DgoqAKPAi3NUyxbsswH9uFmTAywyDvz4GFPaJWejQZpdMTJaU6jHQ6uPMKYcf7ujKu",
  "key28": "2ipQupWKLDq1cDkSNFuXh2KbCood8weLkoosHAuApe7R15N2hs2aX2iq23Dw8zSm7tsChiRWPYCmYx4jA6btskET",
  "key29": "5LgHyQ7RWT7MQDh4h1HF1tF8NjQkiDAFjqNpzg7HTebE2qBpqezzrTKtjVbs2u3G2dvSL5Gc4ZS3drV6NC4LN24w"
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
