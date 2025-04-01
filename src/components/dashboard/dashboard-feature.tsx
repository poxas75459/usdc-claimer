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
    "3aHs1nE2fhvZLdLzp8cA35c5JxtmUDJreUHto59mEpnAUhwZWvDkpGAo9y4ZTS2MktAGUEUvaqxu6qanD13gFo3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3tza1hjCUxM8iykVkidwP9Fd81yaSoFcc9YNQES3hGhfUAQfwYP72DPShFUrWFTWYhHJsY1xJwF9pSRzTEA4tn",
  "key1": "4TQYFDBYJLvZKw8Sqq6aBBxSMFgqAAF6mqZNjh3ULuwyUheH4ekwH8D2FpDXpvnRkZBcha43frShkRofMwu8DFBL",
  "key2": "2PmH5WcY3iA5fN53c9MvBStDqWD5NCUsvABivNKbSp1ZmtZYfRf8gKeryJE1Czfeb73SfQQTehbVCseZpGpUgL4X",
  "key3": "46BNfrgZTsT8JdMDzZhpFUhnaRx1KGyVmhCk8U8C1GQuHGrLqFm9JE6kXiKTNtH8wYd87c3nC953fREFfztf85CA",
  "key4": "7HiYnp7Ec6vgiU3HQ3UQYWYetnySBSeRER9jzPAUFP4T63damYRDtvFWKsoxMuyhftxtUdJDrhbYto1SVRi4h1K",
  "key5": "3Yeanza1wN8sQYLzgWZYLY5U1oPYKcPVZMQbEh35Qy9a2h4ZxZaECMk9rCo9XPJfDhvYBDk4wTdUKjFDxNhpaknL",
  "key6": "4a7dfU7sfoQ8steZTxdaB3KkmtSqLbYUW4v8abHXbGgqER736EGNQbYo18T8BCRqSKdnuE4x1o7yX7n8HZLVuwWC",
  "key7": "5xueCdSd5AkFAkhizwQcomixR7rk7bdqSJ457xA2gRNiNBrw9UMNntBtVHgkkSeE5ipUSh3YBxgvJkdf7uwpm7Bv",
  "key8": "2qdVwuypAmjSATD5S4APMzAR4EmfaHjfofc77J9Hr1jpz3GR9fTxvzSXR59NnF96ThivbRPZugA5SaMxp2rBayN1",
  "key9": "4bGKajZ4smpkpdV488gBasfGk8wvf2hVtELp7GRGLvhH3cdj2mjEQpa2ZDhwZwgvYem9WXee4Uv4okuY2UGJLw64",
  "key10": "2X4c2fQXoo2fSG1SxBMdPr2C4gPe5EGyuNSkrC5b7w2mdPRz1jMhftZcTDBYnqZ7NeEXTqRTD92BFMxU7tk8y3DN",
  "key11": "HiTS6XRUXUZwpdMALhxvnTb1FZqa9GcB6bMCeu4MvqLB8fcxqfpoih7vWYVG3G5dkCtnUt3HD2RDwkBLk7g8oVY",
  "key12": "263arorU4oZfyzQC4ShRrjxV84rGjCtDRra9GuPa9jzLY4qmr8Z7Au6smh9rWyRyDKg3fwTfAkATVGrYEtE8pC69",
  "key13": "tMuaFTLiDt8yECPNJ8knB8c62NpY2JBCcvvtTM17vvwPJYGK8MR69ZktZQ8KK2jsvnKTi8RQJwZkou89uWFaY49",
  "key14": "2qUTsj2yfgjowc9N6XUKCNwjTDcGUwWJqQy1fmyeFDfWhTn971xinX4w4DyGpwGbPG8vLixuEYtZd3UuEtDVXRGF",
  "key15": "3KKGKsj1j26R6JhFUp34Qwfhqikm4hBKtfWvT9C33jU6UNhBuxqMMUbAJ8GHfnLhxyrmfotNhtGgpnH33NzHEgyA",
  "key16": "3eQqXDFz1JGqZEWeMfj38pCcd8xRMP31m1oAtJV7KPQEdRtxFmqwGo1VhPXKhWT2qTyvvKD3nYBSJULU3uo6rFDa",
  "key17": "wXYpVTerzu9HLj6jBnX2DK81BP4w5dPVM3CJtAg7Wb5Rweo4CoorpCK1XgYKfU5ErttagbF7D63DBWJW3SQ5SX8",
  "key18": "5SASuTSQ7vLT5aiA3Nk9wcrhXVKRQoWzV3HHzd9npzeqk78nQKz4W4QRL5LAKnBtcmyv8C7WsgLnPiRpVSBqnt3D",
  "key19": "3pWCddVazbwkoqw8uJWc4UJ2M76gLdVndtdAWPC6UDZqXCibGgfRC8UjgeBg9N1PynKtvKsmn4BVzpEDRpLPBghA",
  "key20": "44A92u5HetFrv3ywtaPTc3o7n2HVqbaL3wrH3kTtGBzBKkpaHgqa2BD76YABcUoAMybCDoAc1szaoYmFoyrLKPLi",
  "key21": "5GPBKmMc3aTAtNUwESJbSQUDFQcACjxymhy2Ybx3nGN6JYv6jsEzyhU8Afh819ZZtczppAdL7Ev3ap95FSWfSvPX",
  "key22": "2prxxyCA4nzs6y3fD4kUe7wQMW7HtrRs99hhf5bgBQJTJjGPSM7PHWa8KE2Jh7nxzvyCstL3Lvv6iumDMrTSPfHw",
  "key23": "2pEwgSRYRwJkZiJ4tUmNjhF7nYeXRTBCsEtBQEpEYWbvPJKU2FXG9fdQpdABs6sujxgYmVCLyo8zgEavnKEcTsUm",
  "key24": "4vafMJ7mQcnt581H7baAf2uuqJ3EHEbN6UeYcQNb219c4DRtGe2LJS9zumdEc4UGwPUiRUabP2eMLMEvqugmJFy4",
  "key25": "2JHsk7MSQzxAHu4Ce9An77XpuHccLJhDo4Vbgj9hdWYcKWQW1qHAtV1UCUVLd3jape4KDDEozyrxShzJ3c3pN3GQ",
  "key26": "5zVpMwJPzjWsdMhGbRjiJJnSPxE3EkJ3uobXXiETiUwNSKvMsLT3qZppQvsTcgkQkm5bXJBvxtAbV971dhkpazFL"
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
