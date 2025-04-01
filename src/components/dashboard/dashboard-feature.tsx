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
    "9eD2SJsgbuXWuav4xVnfqXAHi6pWR8RWucraWUnJrmsHLQz4CqGyPJMNgUtH4eXNc6a7b5i32sjJKbDnfKgemJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BUSvmKpCWiLBaRLo4yHrBaZ4ozZoEeyx9n68X13KCqqszBaUzA6dm2VbiQL4fFsfiYbjLwWYHqVkz5y2JcrqX9",
  "key1": "5Cb71mbBGTeJ3XTF47fNabzBM7qJecDDVFvNANjtw1Ff2Hp3sVBiuaPj39hpadkgbojxkwzVvcLn3Ru7MaL6eP2Y",
  "key2": "2PTECDZk1qPS9BRcQ28Z8qmqcKCQaQp49yp5Pbd5dNZ3u3RD9iQeLN9w69Ju432WTiRBNV4myXiYqHCQ61bBd1wC",
  "key3": "WSVb37mfVBa8SarHZ7dfQjPE6jrwG7g5STuJviCG3hijQLQFCQyj86nG9WDXRtVqKhDx8FZP9edKNNsRPCy9hap",
  "key4": "5FAbZLFvYQt3susVz52tfjesdaV4WqGwVhaoK7F9mNJDodCGevi6Bc39YHkBCturUBEiDMK31zd5HXifwdG7qz3a",
  "key5": "ebSY8fdRTBrSVaEmaBxfdkie8XMpoA7rfZwWpJpZGqfepCjrA1g1tmui5UAzBkB2HHLGYgom9FxwZp52dsA7xLP",
  "key6": "4v2HNEZTPvQJSFUiRMGzDLHAH6NCpG76e2RSRYbq1tnrstEuRrBhNFVD2hvmJvRzWtPY5KanFZ5AC2E86vnuusPp",
  "key7": "3mEFXwcXZzE5zBF86hJsgiwK7Uw3g2B4Ydsmm6D6tDwEQJNGPtQT538ugYVhpco76ioBCPrcAEPo9WYDupHNRxnH",
  "key8": "3GApUVtPdk4g7m44kzCsCR4CH9QicRgSm5aErYGrFkPc1Qi6Db6Wv9bLHvbKvSCyFB2bAMi5oSCs94rmqEKXnYA5",
  "key9": "3Xn15um7pkaoPWKGwUcXE2cPg8EYm9m8Qke3jXg4sHHsU7zNsKB83X7FBw34DS6W9BhJrCfdmavJAGPG3LWNd8rf",
  "key10": "5mk3VG24rnhzTYNpRRFrUz4ESpS7HQrVxPcVgKAPnRYt9RQbpdqiqZgG33SEcbuzckvyFZUKWqB41LFivFTg4Fi7",
  "key11": "5mVk6PEMsF8LLHFoQQ7yXRwtmmZneRmiuigFH2D6PrbEcrvFryQnDsySs5x7rwChuDskepoGZg8dpRDPnPDS2978",
  "key12": "2znAFEcNvKZYYJmbc93kp1pu3LoGqKjdVeAjqJacTvgzMcKnkNFr8SW4BMQpfhHBrBxjhnRbdkEBoQP5VXEXsj4K",
  "key13": "5aPnuKMa3p8w4GSAe6okBsyRdKdCaX65ZZ8pN4MnXY3DjqmqWkpaMU2iXZKomxvDF2YYwxwpfGrj61MnmQTf3Sgo",
  "key14": "4MPLmgEsk4hjDHN4oiModypfZVkxynWcMp7zdPbPtAK2NGuJdp3dchkyTPoP5Rdq8GHEa1Ne1oBPpuzyFqkvcnrV",
  "key15": "4e9VMGFepenx6udaSM7nk4ARwHgdFsEEZ6ZAEmWWmoyr5BX1QfmnnExVkfeNJEME3X5CokC9PZ16yUC2XQdcQr9S",
  "key16": "5JkiCJsF4WWES2Jb16XxRMfLfcSSvRJT6QvS9toooqLRcGraEaCmTsKoP1ogwLmJbp4DyZFJKeKBMw6439pihr4N",
  "key17": "64FFeyCjAHgAByEkQhosCwJQjrG9g8QxnvCoHn5S2BEuKu3pEy9ANaKdWNbwP13ksEq6R2KNvzbhbLH1iUA9JKZ",
  "key18": "575zQuFytVZ28L7deRLiCjxCgLzDcdztm8QJXWCidbqGvCVvZfZ1fqLQCKE3PfnqoupKTGMjesNs2gZGoSAdJG1n",
  "key19": "4EnDsipCyems4CriTPnxNdk5NgiB6fUYGidgcea48BH3FDZvgMEZ7Ucp6yqW1vAhrwpka5V9ihLrLxrDpebNecLh",
  "key20": "4rXQsqsSx5QmRsjJRjidybZw6iQzCqJ7Jb8FaSp1yXnBYQo7hvvs5Mg9V75gRmHk19ZgzmKwErnUVsW7G5okaWyT",
  "key21": "sGFEQFciGkDrpVNYcKccPwKHkc3XXiFKEZqjed7mGReevZnEhncryjG8EaG1wofjjvbeBptCknxS73awPGi21WW",
  "key22": "NaL45rvhvjDSKDw7oNiJDqjoWS8BwGsobDzmmaHiuLdx7eooEYBpD7vikfTj5JozBnhBDScUXpP4ETMv7nGd3Mm",
  "key23": "5WxoUdtBapor2nNWT7SQmY2FMhoMQFsivxgiwgbTWQJozg22hTX9M3vYjNJVNxqoufCfdBzjJT1NhNDxjvvp7McM",
  "key24": "4ZyfNuBHAmDVStCptMmdta7AZwqqiQr5DJknmqELfyE3JtNmRzwa4eMbCzsaLpAu6pVYHK41qRSvBAbX9C8cFDMa",
  "key25": "3iHoUZBEU2qc82hRyfi6mt47pmV9hgQEQG7taq3wewJP4cEN8Gwkqh9W5u1xNhVog3QHuYa7UGyT2XH6xdZ5SR46",
  "key26": "816yUU5FxAAXsH9zbnwvkbF3LaVDbkM3KKdtdYiUydhk2nyDpr8vhkKrLCrNjvnjyiMC5zcuApSqdjRKwcAPFee"
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
