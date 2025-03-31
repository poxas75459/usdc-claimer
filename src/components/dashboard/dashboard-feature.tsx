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
    "64uy9mAXpgAiaB2mSJF3KRKqMTTSpHFwDaU3WyCBJkbE7EovMJfJCeBh73QdZATv1oWs5kyS8qWzD1T8SoptmqBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofFJPVK3m35qVZ8rvL5PeHKossoLocYtbeQdHWFV8967mP7aMzFTiwfpxcGsgCwgCCenUKBFgkYuyAvKnhmpnAk",
  "key1": "2nM8aw4uFwuTWGH1SaLWftitToEbnUXKFwyNaU9mAsHsmPTXXzastpjm8uxvHiY6a3MKWLQGA3kzHGnEASYHt23A",
  "key2": "2B359wjvG4hYkgs87kCRbV7HrBP22DLVzXrVxEURZdQ3nNgcjcJHyz3DQC7X2M3kz3gxEpuCjpAMvtXQGST6fLEQ",
  "key3": "4W7v7opguAABGHSPeVX1SEqC9CKaucftKDHRuLRmqPDTGPFZU9zuxUHszs52DXD7UnacBTBX1SYdyKuoqtWigAeg",
  "key4": "4JHhgwdvY5D5N3toCVJ1kzMj61hHxg7iMgQ67uTBu2NrBSiqkDoQrL46Y64WzNyczZyXMj7He5gYWXwhWSS4XKwc",
  "key5": "46gzeN77JSwVaWWR6XmAXSfZcB2MfJ7ki71cF8vb11H79Jc31V4v5NdsepAQpsf7dNVGyNdsBzgFe2D8ckMURHKg",
  "key6": "5ZCBxcy2TLVSeaUpJQwXSH3UNdt9D8iH1iVak91dwMUvSpMhuXF48RikhDmEi8fYDenxg8j42JEpov226NFGZRdN",
  "key7": "KVuL7ifzzLQmnexChjsYNiJxUVHLp93agJ5f97uzvFHTsPDGZBownHzJhfWcpefQMWLuroGFjQ8vy59PjWftg6d",
  "key8": "3fQMbY6HNU414B9gVB2rQ9AREg2JoNyJH2JpRYEK1TR1mTPrrh8GFmM1MkZTmL7bbczWY1tTrrvZtSvSqwGucas2",
  "key9": "2ZeqeYdvZVKkMVLWn1gtVqQxnbnqgMXLdEMFY5SYktkkfwDS2eGH18BKswNU8aKyRiGQ1oLa18S5fNboaRAC7RDv",
  "key10": "3YCpHd2nArPT19PyqmwMtkSAFe4Wq3qi7eUpS6s8Bjqb21vPYCrEZqXHBhFAbWTq1YuKmetcd5T9nkaQs681N2tX",
  "key11": "2jCr1T9rVvojA8s35KftcvBdvsRxQiK6TdLxjCgt577f3JB5qEaughAYa29NSRjr2JAq9bPfBuaQ8oq6jzNWhp6e",
  "key12": "2m5AW6KP1Fh5zXL43kB7VSNzdWHQ94M5bvj4DEy5BxRGW6g1Z7peDBQw2BWTGbhVX8VTWKc6EYtarqU5gyRxxM6G",
  "key13": "KU9h191yDgegHs8RjC7w9nyL847RsPH7948Jdi8dNi44NwdvoNxC8Xba1kErbTwuWMvBSUSPYLDRgUyLn6xndNt",
  "key14": "2ufuWKkkKzULTbq6R2C6DkZrwtqdpZ5A9dCJQMUPEbJRMoixQECCHSCZEjCtexNjKGrvdnLY9cQWCRQH8VZXrPep",
  "key15": "4wViwk29W8FEWUbvTfmSdF4pozyEAJoyb8XjTeToBgvQnUPnuG4Sw5p1mCX7VdnMLqQ1AYAqbP6dVmR57PgjAi65",
  "key16": "2hDW56RLs8oEimejLLaPSEGgLe5PKav9CWxpGhpchjjjsoALiw1zu7BdrXAbzQS284WozVx1FUENk3mP4yJFFbBi",
  "key17": "5CQThMjvawtXADCJHm7BvHPJ44XQQTy5iYS2pU6GCp7wbzet5yGfkNQsRkWhA2ef2daiDwKsbdZhmWHu7PswyZEZ",
  "key18": "5cM9qF5k57a9Ur3mvknh66aCnspi2k3WmcAf2WRsoomw81iQTdMWD9tMC8Lji9fmEtb5CSqNWx2iWRf6xbu11Len",
  "key19": "4h1LNk2fPfRSegBBDVyLn7xmB9iQPKaMrS9qU5JPgTUL2ukR3W9n9w3RUdunUrSkXdjSe4joMeBY4DTNZoT1ko9t",
  "key20": "2Tb8pF1t5AvbvhwvKo2ngqj3uvUbXr19qgw4PmYPQjpyXzf6rXcM5EzqtexjDN8xMUpqHWBWUUMDaKN86BsojVga",
  "key21": "4Zyf5bXHMKjVGq3KcgRge4ZQCfD9tH1D4pFWhoB5vJW9QsRbFqyJo7EmkZhoFDg8TSUoCDFUkicWfrfSMJdHd7wd",
  "key22": "2G8aqXDnWzF1z2xXsJAHpP4tyCDmnHyrxy1bMJh5wyJA6aoLGMAEfWia8ntwRkvKh27HNLtP6LUVhziFwYc6yVAx",
  "key23": "3391UrMDMEBawuS8N2oG3ukFKunt3nxvjv6Tgc97uhXPtbxkfPWDum17zdyrmvKXBL6fVmXMn182tyuQZMeaxqL3",
  "key24": "4dcJ8QdkFRDwyZ4AJgHhenBc2GXzPfMn3Lbas8neTTwo24rJFLWwYNXLECFehkfBwbTFroGZKqdpBHWWA51X22pg",
  "key25": "2De7EzoS3pP67rYMmcQhGgLhiiNQ6b58yNBko32AivP7gPxtMn9uXug7yAKYpgEjGD9PgTJWCHsSATiowmFjLGBg",
  "key26": "4bxkchHVMTAsNb7yeHF8J4Au23EU2psvBEn2QY4PswFJqk9mzNHwUrafd5JYqQXhL4AnyfmsWeGK8GNvCVHEC513"
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
