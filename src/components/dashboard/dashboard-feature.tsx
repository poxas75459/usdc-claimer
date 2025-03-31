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
    "5xzXixLwYQSRaBCbBc1rxjHDf9ybvaT98d179Sp2HgUpjhm5NMkVdoFTUgZnuKpvFt9Kc6v44BFBDTQSPoq8V3Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4xmdZBFyZCWApzVy4nnkKiKXov98NLek2hMVQgN2R55FseCWtwMKAmnJd7EXt21Am4rnhtcayiHuXAyZYDDqqG",
  "key1": "4cUn9itixobuBpxzf7ArNMxfwKAH1G9QZCX4f6APWVAuagnjaYm1cwtSSnXPZ6nbRiYojD5CkN2Wax8CGpZpr6jM",
  "key2": "2jbeehkEU6GgtYX9tzKLWjz4umDWTAJPRS6E9jAyfAzU2YfA2Zew7psBoCFatYd6vLRUjFmWqJftALC7QktcoXti",
  "key3": "51t3a2D77RofMw57sDwiWRshKCLw6QdvXUBr3WUAyY5aAycGKZ7Ke2RYYvDaF1A7MceHjkf25hXNCHx1gzR25yzY",
  "key4": "5k4gsxXySEEHmacSchRB1HXSqLuFRpbeqfvPoMFA4jfcW3bhDwHpwx7qUKBFn17U3vQFDr66koNmTU11XnkSUkLF",
  "key5": "2ERN5DnHbU9sKZWPWAwoVgSBr5iwjYXUaw9NHrpGWUeHQLjKkcFxetQqt8Uu7DirJ8jaDxPqJKyxDH8GignbCjrr",
  "key6": "4ng7k4S6gSqPxQNoAJsTu4wHjzF3LFoUn8Pj7edZ7Hq6Pj4h78tERVRH96UK2TKr6TTHDtKeVXtjTgLUBWHW87Fj",
  "key7": "5NYaaq9ujP4MKjwdecY1Vtht56dLbMr1c5BssbNCJ5xEC2iWc4bxkf9RL6sdpBiWtSU3GfJrqPLA1SVw5cK9A47m",
  "key8": "2n9TTDLcUKoF9DDdSeqMNtNNvRiyMx3VqmYmtUXMcKV9veWfwPCAAgwzEQcAUNLGgMxhr7WZ17h9MwJpnHvqmETm",
  "key9": "f7orbeSLo2KbtTbdidvnRKffTfthKDAxdy835Jkj4j5sjdZQ5QpDAL5JigMj6iT9x6NK246f2BFkT7ghGsHYiYY",
  "key10": "3VSYPiNPHoCtXwch5H9ANuVaoNP6odu1iu7UPhwdJHaf91gprmww5TVqHHDSQP7BGDeZTBj4SfppZCAEUaWQCZU6",
  "key11": "4e9oausvcpnXez4UwzFLBzLnssKTmSCoXHSRo5cMmMErMuiJtwf5ZsoHst5Zxi6Thv7s6kYXT9gYtktVNtKp5ahw",
  "key12": "22DFpqeZAcNadEGDhBJ3DWLyAe2Bo4uJJrEcH8uZBVar1wR6sjasBhzAbw7jXBLepXDmFMsfwPrTFcb9tMFUWgtY",
  "key13": "3ZxyT8m3cW1w2zPHLQAU4nAbYQbgijRK827Mj3tmmzqvT8UaWw87FpdU5dMJTqgWtVpv4xH5FjfQyE3ep99mP2HQ",
  "key14": "pWa87rKDM9PJQJvgjMP4c61yMYwsmc16a1otk3Jv97uxWUCWFFyPMaJzAhxm19r4v1SrdknzVaZc3Mi33K6JNeW",
  "key15": "38zzxkeuXBwgiqHuCzyuXYDSFaZ7jd9eqWJgubCp9tadMeeC87X64jiMNCDu5jC1ix18CWEUwdyLq4rjdfVyu6Ti",
  "key16": "5R9KGR6CLe1ZqWuk2dddZhqs3Wn2BrFJJMUSo7w1QGh9Ea7MFvvEhQ9tGuKZxeFnpP2hxjmhSTL9uHT3SUFjsPkJ",
  "key17": "44Z3HMkrSnsjEia2teVFQnJsSRPJ4UZHCTSE3ULFKCQN2wnCnzoJDxfFgSjggZ6gnp7dBD786M3DEY46pb9msypp",
  "key18": "5L7UrbYQ1kzTt8wRpoutKPxDw6pNnzCidS27d5YvY1b3d4AMsnrrHVhhLU9hLRWZcgSoVzGmURbTNFJcyQTx2s6G",
  "key19": "kAJwWste8RnCiZA7ERfqq5KmdJ5BReML79AFr5wApCYkuDzFSVh65feogNVgbWE6RdXPCzFMrsSBQZet77dXha1",
  "key20": "2GTeHnq5bs5RyRHHtdSuniVph5BNTJBoJtv6ua4rU8remfuzqoh5aMb2QmXq9c1ZPQQxcbbSyFrUp27wou5y2MZ5",
  "key21": "26RqpWnSGRrZLZ2vaWeyMcsvJVVCgMyHJwXM6cYFgpW63ZTD776pDxdMgziq2Y7b91vdBGqFuqXTTANahmZs9Pgn",
  "key22": "5q5sweTwiP29iJuE5XYPXZ9p9KMCZS2s9N9ZAxf6XCQ1NRcDggkvevzbBZrYBsZjpmNk5iZyFRYf65Vf8ZzJGtzD",
  "key23": "4so9TtpXPyufhpdvViuvM6KSm1SYXXW7JxQSjNNbVNJQq2SKUkEqxeynnJ7QUJND8fAD8f2npCoRH8eLe1vNXoN1",
  "key24": "5shDBSetcRu2F26GxYyNmBVPQUeue8ALQxUD93EH6VDjUTfXw79ZPkqwTYPGzfUDN11VJVxTvBNuXBkTWpbPFJ7W",
  "key25": "2c3mb7cJrSLK37HMUuTq9X3nDNQhwHM1iy4YUsPR2jSvEpo4Ac1fZBUfH7WBELGqHWgwtMxw7m3ZSPwjXT8Xj6F4",
  "key26": "5BMZDZ27DN914VNdFVHBqqEPYbzozuSmrfFkpaVkFVfwhq8sYqjzVkPoLPLKtBD5ipM7ZSCQh7AgtwTfJCvnrmqq",
  "key27": "wAPW663tX1YANFjG1QgqHBPhAYTd6RpC1dKVFZWk5ekiF4va1TdmTQoecNxerx8FbxiVABanbV4kDdD5u2KB8vJ",
  "key28": "5jBWopdGW4STxMCK7uR3RdbX6YjTd9724PmygzucQMCDduWGNkFwtyEaGv91654T91TYUZYkTnjet8eHputwHKsK",
  "key29": "5PdHmP31Zpfib35n9pLfF4na62eK4qUz3jqyxizrMKJbMt1q7WS3KMrb9NZGepwta1Rxhs67vb8zhiDopsqLeSd8",
  "key30": "2pjBiVEZrPwgSBQeoWzLumGdXw8AehqKCER3vx256HMGcpo2PUZNP3zYPLFuV12pg671mnzoEgaf3QaZsQvDRLeM"
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
