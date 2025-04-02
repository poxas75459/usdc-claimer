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
    "3wPewwmY2odu8LcSMD9pYWgSxiGXyiFKopw7T7sjszJixhrzSPf2jDnGDVre79E5eeNggcyaky5WrzvY8cxjR9gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpxWQXFtm1nJfQAt3czMocBgrRKszYNEHzDoBmNJU8y11N6vn4pn6FAy7i7TixVEnebceWQ7Aypue76MNk9bxtv",
  "key1": "26SuHmsihXojDw6TLrFNywibJTYNYAmmLfmhwX9SiRT1N9hustk6kTSUr4sBdz4HkmTMjnWvug9AiwiK9Ruem2Uq",
  "key2": "2eQPkjm7B1uUn2X1AhBkWGwpTGZyThLn7DzGJXXtsqEyh7yG3AtSBiRYS2q9rv1JdM5cjBMAige7YZhsPLMi6kPJ",
  "key3": "4PZpbzLVUzNz5FrFfeqRV3DgBWpWMXKRCF7QfucNepN6Em5UwKWzfZCqk8iw51QcTbpHYyFaGZZgLxrf6MJ781Jk",
  "key4": "4URqky1XBDshhpvNbGWS2Tb18FXgqyCDz3bz4Zh13RscfXxwdUmcg4eCkmtyWN6JaEySbc3pZHGYz7zxo6yMC3ym",
  "key5": "HjobdjMhwFqgubAAHVWhxTi5ZB2GaB58vRcWr4jWzB9DbQRMr59Be4UwB9Q2SzpK64Grca5BEUDGJqvQdbK7SbY",
  "key6": "4i8nZTAj5fRwK5NzT7rmVoAmV5gW2F8jZax1eUqeUdTRnNBe6jmAwpDycY3H33Wo8pdbE64rpFRFTDdsH6imHJLc",
  "key7": "2ZTpLeMV6EuigA24MnL86JnVsiJ3GgbsDvXQj93EJWDNknWD7oaFF31FZTw94LfEwkraU7kte1LuDGNbMTman4PG",
  "key8": "nMEPe4h2ri13R83wdzkVBjyy48JFHsyAUeoG3zJ5dtaTQRicFDB2EX5PzDrUjFCjc9o95LMVJcAhsPwe3SDvqUw",
  "key9": "44Q39MFC2A6R4W4ZrBY6bqVvB4hKZGC48CkFZsKWnCUwWxVLpwSNNTRWtYRwJCdAhcwJCWZto9JCj9kWT5K5QkTd",
  "key10": "2hAhaUhCEionjHQEq8oC3tiPfNrATFzx2d29bUV6MkXgzJzQYtU6DHKCu6Mrh5YkjWvkuougZfqB8weD4m7YULAy",
  "key11": "59wceUtHiQkqiRRjp6CKunnJ97rtJgeHQYM7ugELaDd1HA3CDZkFha7nWPtAiJJJM68Aihjqghf6KwH5r9Er4mZP",
  "key12": "5Umpz1ZN6y2SEBMJ8khi85TfHRtwYn84vzQ4Uy7F92pr1fobbrsckiKStEDbqRC81PQQURi66dBmexGSSN8ig1Xb",
  "key13": "5U55CQZoE7kQaGuNLUvDCJQKrQYxrP7Hx234guegRDZ6HjTQANK3nuhQ4Tj2nQhzrovS3BKDDh1M4nr1GEcHdkv6",
  "key14": "3RPSM61xPxmTrPb6cueuorqcjHCvgEE1zpWkTnosxkDSbH8ARLirWPrqz6RcX19WNLxcpTC7SBNbe7kQnyxYEUCp",
  "key15": "34EQ91DZqnVwxMSKxmQN2qZAjE3mGWeQNiVAdm4pYpLppKkWKBWpM1rACSzDcrL1Kd8xvi162TYbWEYHv2tesrUA",
  "key16": "wieucD6kavhDEvAtF2Th7eUtfTNfLPMUf8dAdxVVKQjppsuL8qYnVXJhkqvfPkKFT7KzyKj3H8NFGuSCS2hYvD9",
  "key17": "2cMNdwnatwoQ9esNAs6uZH2dN3ySFzJYbdMPZYyqsczzuQLbYTfkMq2WmVQ9MXgbk7w7yn7FLUfPLctEC9aadU49",
  "key18": "4ganGETmQTB8wyQfyxf9rURZwvjFQneUCd3xnsk4ossfWXLkDjVhmp2YZDvVQLhCqxSVcJq636kGLQFXQwwQfhcG",
  "key19": "siqwFdRyEjNx3DTgBAQi3HEq8uEo3W4kKj7Y8Pi5Cf4s88npMZphMYnnggtv5TzosK9wiKuaN8TFVbWt53pHkqH",
  "key20": "3JDecdLD7BczCbNdZbxP6Rh2f4hLTq88vYHSvkuNkRWac9Tu827qQ5fq8F613j3yXhsVaaz2Mt8wSSX5ErSQazpP",
  "key21": "5Hay7CmV3X8e3SBtpfWtwSwE1W42gJWY1UoQgMwDgSDyEKybqDf42iSwe7cRTkSxospF17SqNTuNjrrH8zjKFTGV",
  "key22": "xVqY7JKB3xTp5S6og2pQatQiN1XbcK8RQPQLBJdcTwssyognKhm8SFFCNkFrFV8FfXzYtTS5DdJtUkYepvpzujW",
  "key23": "vnBEqrZzHzyVBrq8ueihwaugWStP4a8R795w8ftsyBu5AkF7LnJXG2mTX3hHqcpp3PVNcFVxQRq7MaCLrdQbgTY",
  "key24": "5Thah9jxbVTD1GPSZt4eZen7x84Ne3VsxUndhNfzCcfZ2mkF5jA5RhdcUPnhPTe5mTch6EBjS8adfgBcwGqYnPZR",
  "key25": "4dPp1kvbHAaZeQYWkAs4SPuGomhQkL4fLuoKD2ChaJ31nWRbXo4pBfMeuaGyHMvfSc9CANaJBKpwAQ14zeK4s8xv",
  "key26": "2fBFp7eYH7AWRhDe6R7nhocGGK9oME3et5VywTap7cosFpRLjSfLkDkMcCqvTYa6XHBdNGAiMpJyfKncwkxoe6MV",
  "key27": "5hbGDC83Z4XuNg8TxZ3GATUqZfVQKWYG44Fq17ZeuPS7ShWLE6RTfW57y3uER6qe5EssC13GqqysarmvUVvDVoPd",
  "key28": "hmfCXU3E7yWrxuE931u6HEVzPMHRwepEobjPxGLu3W5FRXhksJapoxsgXaSRtReBv3LEfG3zxWRjdsY7PXfSMut",
  "key29": "3YwVRqEaimiftT6j1cUfpKvev333EFBD6yZEAQg8SQDffiBKX1DGqcu3k9qmHEQbJkHSzpKYBAExwnoz7YPu6Yqg",
  "key30": "2MqShhK4b9VHzdXVbePWZeAFCeyQgNhQR2dCiTBZbkAtheQ7JSun9bL26wU28SKfgAFLr4iyNnNPBHgbxe2UiFFn",
  "key31": "2sxkeq65JeEGpBZ7RBsc3TEiWmvQNQYweg5dfj5yRA8AsVdxwfWCabSVuVgXPs7pAcCgGAtoTfKm6UhdLMLTENng",
  "key32": "2frf16yFo12tNY2LXJWi4RWZFDQ24K1p9dVnZa9fkT7FwHywhuP2ocZLoKYQYDt8kC2KqErQqmTLFskJV2aWx2DF",
  "key33": "2BqbbnExLCUKb7xgWPKk3YvukfLSiYEvp9y8r8cSCgE6s2s5pXjU4FzSEGZjRiBpZV2vzSt4efYSGutoaTxWwy3V",
  "key34": "3MbzKtmfHiEuJCac2r3AwBszu1UbEong5VGxe8GUtgZbwPWCFpbLzXWNPcJvJDQLF7wpUqNnrfGLje2FPE92Gc7j",
  "key35": "5X2AcF6PSQr28iMKdpMb399JBUiegoPeXLFettphv7SShKEyKW52uCGJMoHDS591cUMpypK2Uhso1egoxzeqVS4Q",
  "key36": "2mSG17rw5i3A9D5wxudpCWu81zv6XJKsFk1N5wBDjB2h2AgH9vj146Lj2VzrhobbNcyc2RSfSJaRS9tJkSxcAQBx",
  "key37": "2cCS1PJZiW7e8FT5zhrW2tAgcKDGtUNgUTo9NbJN2zrNjkKY97CsaoSDpLwZTPo7Jx8hLsopRfdCVUSKLSmMoCEs",
  "key38": "4rSRZu9F8VMjAKVkP3NHqtj3DmxNSbWhdbkDdd2Umtg8cTjYtWqjisfiuvQpEuJ4HbkVrbZVJwofMUfH3zRn49C6",
  "key39": "3Nq5rpezr7L7zDxZGqdah4VujpzpvJSEpzeHa34F9bwjKWMsY2uAw8AoZ1GkY4D8gaMCM8yyg856WBwwQDfsBPcx"
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
