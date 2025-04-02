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
    "2MzDSC9aTW8PAdoz1i24MS35sZRvSx5G7TcJCSw7eZcQzFYqXsBaT8vrocK42n9xFrRSx1U5ysDvhUbjvfUsGqCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHtTAmnMiwhgKKVei5RAxG3df9PsC4WERrYGCVX5A8UbtUCi4mfC1YDSe4g9QfkR6wonHL4mtMcY8F3e8bwZvJ7",
  "key1": "S4Fbg7USMczLdyWaqPmn4XipNwPXMDy8M5wTWNRbbxGgP8PEXo7GQjDUhLRa19yiymry16zuYpNLfwdjpJExGAn",
  "key2": "3t9TCerNZE6cvh7k4YMgsbnPVNowRytT7eboDkrJcW3eVZun7LPBiaCVBULPx1KARJYvm1mnX68unK8PhNUDyqLZ",
  "key3": "5A453FbUVxjqWVh89wGhGFhZea98LKPRUFwKtSLo3PXpvxGzBkkT7gKsemC6v2bvZX8fFkEZpx2V6bjc6hW89r19",
  "key4": "5GhKnjQ4xyF2SkoKvtd28oJ8vRgdK31ih1msXJBJxXCRB2w5uoxNzvaduLRrBdoP5Epkk3HZcFc1p6afT2EzmirC",
  "key5": "4C3STGHhU7pVcDko51S1kq4Bo6NPdN1P5TbAysURpHmcd6qZLAaJJ9hd7uzeakzQ3QrKjvGsjA2b32ZFYzDTM9UM",
  "key6": "2WBunbCQdQwYGqYfmSST7SWkpf5v8VZvENPvXb5Fwr5dWXrGx3B3gsoXvsSDFmbQn5uHyY4Meo4N8i8Ppp1kxx81",
  "key7": "3GiwbjLswE7zbfcS3B6uefNT1KA1wEwh7HqrxrNQtgxyimzCV9syyUeoaHAV23GPL2veJjnqWEPedXRopkCB1uEd",
  "key8": "2riHrffWF1h6ZYNJTTKSmY2GUxGDAP1FVvdCJsbKcnFuzvoJ8ej9KicCjWE6fN3rHMmBP6MYCS3Hvxcqsz4HwUxc",
  "key9": "43NmU1wMZtiQPdNHubJcRrqhY88LqCAJLyCkSm8NrXFNUHPmBEbFaY2LtTwJa7ke3Jiuc4fgDwuwhrMJ6rcbcsvo",
  "key10": "64mC8iZNmgEa9kkLqTDCBdKvLGkT6MYe9xvX82S2AZJ15HdbupxK5hAJ4gPonxqZCeAjMxdeEqesgiuXkChLJpKo",
  "key11": "4ptGpdWp8PVJzSUL8CLdesy9gYPJ6S8qY6Ypo7KaXdLVRy4ij28MVbpaLPdEATnrAKhXPic1GrdK2PC6sZ5juwG1",
  "key12": "3tXQ6Vvtbk2W97YijHP115Hoj3w6QaU8REGA4CmCy8rV7858yUFzMupb7NGcz74gFwxoAjmMmsHaduU8N7EAUFCi",
  "key13": "3ci9E1NKM3vXMfVMGJtqnypqh9TzUyMY17CHvm7xKmWeZRnrZdttmcKPbwkajmP71AuUDQtbhXKsbvvXzxdDN5FU",
  "key14": "2jz4aE3RMygPqEKPdQqjx4E37jpfhEoeEmsbY9enUupt8pFkbYPRZanHx4rk1k3n8Mmy1C7ZkoraWmoq5L9K3xWD",
  "key15": "5Rv4LBiRppv4yBVaF4t6bJfoenc8X73W6sP3scxQYYE5qYBzGMf2BPWqvWopEF3Tx1Vf1Jb9kX5EW4uRELKs7Wdm",
  "key16": "3QS5qYzEdY8S27pnJiLnTEcPfM3TKrsWFmKNG3SdBPMDyZWL39i9y5B3agNZ5xvUr9rk653Z7vXFQTyhtx1ZP73w",
  "key17": "24sm3xna5BanJg5H3LkCXgfDFQQDmWbGqKGhqeN4EMR7zedabLjB5fga9mZsTGqM8uT15jj2y1ewxEajEkTJu5o8",
  "key18": "2DdxxTSf8VeqvBGCPBWLcyFkjxnCdMv1nmCL26iHw4pKJCgxj8Z7qeTj6k5wz1sMVPtEk3RHNwB7ThVP7pcqdCeM",
  "key19": "5bPnJAowyNQGnUwfhFu5X7C5UmghNpVhWhm5ej8rqa8egyf1aVbeHctga9RWNh56nmi7mf9eTmXatqRLRpdxph8C",
  "key20": "5eFXCqbGeD6vCN2zsWqYfeqFF5GLCDrzp6sEFmyt2jZhA2wq4Co9kTdK4Zmm9ZcuXNyDHnJ8wazTRrJ5xDWmtMv9",
  "key21": "3Qw4TuSFWHMBurpH3TcB3oPfcZ4VxV95phnPgFV8QiHvH9A2unySBC2nLk8BmcwC1uH1jSMBrmBSfKgkc2Dx49fP",
  "key22": "2NqD5JybgS5DD3vJpcnoeRE3ntEQuPbZVvnyxf3qR9SdmN6k3EtLYoiZhJVbHLi4udR71cK7AhdavrnuSpxQE9KW",
  "key23": "66DVXKpGPbM8nqPjCPm34QaGWgsyPC4ahNG5LCkypas7GtUQfSAg5nLFgCxpYMZZDYJLQohuuGRXAULWEQ7hVabB",
  "key24": "16e3kyKEV5PQXTXQb7jFXLStQ5i69VvCZPPvWnFKZvxdUDzMtfgxCbniqwvXuBzo83g4gyo2EPhGZEQ5TQnG7nm",
  "key25": "25Kfg6U7nGtUEA45Tf1iHhsqFGtSWy62cqpdsTFSXBK4R9Xjpk51md5FE9E7GQM1fQU14A8fvpB5PBEZ1sQXTuWR",
  "key26": "3yTxPRTdomgYiN1RQhTMvFypeMnLfEmKc57J8bpz158e8nreycij2hgmmtVsGzioZy28Tpq9UFcN3rP3jNWSpTCb",
  "key27": "2T9NhFLzSTkpv8j3vH2r8jPmCrkHb5Ad1PJbmXYFvx6kBLXdPpxW7YcPkKJXye2TBb3bUyGhhQjULuezQMYiavK4",
  "key28": "3mDKfQRk7UsLt22gc1adw9tFfJkZw2AGhcunxVxT82deADDNffhxEre8vS99kkoLwRMHt4exnsEmm2U6WwCZBTqk",
  "key29": "m1LCWSPPPKAewG5S3hpUPBsdpZYoGCEQiimryk9b7SdJDzyLXbvQ9iqK2U95UjY5hi6B766Ky28FGoXmoCB6QqT"
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
