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
    "5Nti36z8GFfXPDdgBiom9aJZmRPaLxyGXqWZYdC7Bog2rPpTv4hT4wnC8ax6dKD8PdASBkeT1Md52eMEMvyn4EKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sXEyA7KK5MaCBukU1i8pHcjrw1RF89C35cmkx3DoysndTybCzqaRbd1BxXEn5gSeowCRDtP9pzniLpjNzXDF4Km",
  "key1": "pNxpuH45U1vWHiaP7NpDm1S2qDpUk3ueXYqEn2nhXCjGbyqdoemczbQotjZXDwBLgN4okG1wexmoq5qCeA1KpYx",
  "key2": "35HHcw6rBktWRxqUdC5g3NNXFCiQsYuF1rFrpJ1F6E1hhc7MMdfFY3ZwYCqtVrXxyRAmbr6zQ3m6u6iowxcrh1T",
  "key3": "67X2N736Yt9Y1XmUQKQSpwEjxmFsxNyreEwcCyVLoiCFHErxyCYFy2fVeP9RSaH9U5J7A5Rz4WUWedGerrn6ceEe",
  "key4": "3m2XbzP2Egrt9zhsqRLRbFU9J5g82BTpivUSnQB2RAy4i7fwgqLLnHvzAAPdspjjhwES2Dbp4mMetNeUiPS8vA23",
  "key5": "2V8YRBc1cqfjKDMNBXoXfwL5BVp5biz8ecZq2BzPRKzzMUq23AQVDzycBMoZCW46gWaLYHaPC2bChiHptvdbpFQK",
  "key6": "yPvneLruMwnPzCQdZswBXsDLp7hAu4vB9RiD3Tqb1EnWjU2EckVhQ676cNVKY2GE1raNvHR9R1GsQ5Rn2U7hL9n",
  "key7": "5REEohq6R7RBgWMXUBUYgxRHZ2Su6VKS8Z2pRxPxssguogEqQVW2fM5QHJXEbriKv35VexgC7HHNfmbZooi5dwoD",
  "key8": "4dXsB4qN1atdxG4U1vAiwNQijnaNxs6yV5R318eJmh5jEYf7WYzu9iNrtBvGMhK1aSW5wJQVtUdxmJgxU5bd81x",
  "key9": "4oCToHYV1PvB3sT64RRg9BZ3eZ9HpCqh6RvuhqShY8qY6z2peChVu8mkoqLUwJtNJkxNos7tu5pk2EGuPAJchgAG",
  "key10": "4pp2hF7qmqj8scANu3rRcFYeZ5q9ZvTv5Gu5k5BTeSYCYkeLVDfv9fi4wTkgoeawopVgzeU8zxB2jGnTyjeCJt3n",
  "key11": "CGrtGiK6dCWLS9pJZtkncxPFdPDFLrHCprEkXWK9YKv8L5FuSgzU5o2XBdNE2iVednWCnngMn1BM19dj7pCHnsQ",
  "key12": "25AgwzRjD5K43HEzjnoj2fZRzypDJ7FgZhvx49qG3CMYK4VpazdeEZDLVSSvTXPfcrxHQHkQck1P2SnRkEwYU9Sm",
  "key13": "3Xdf9JRJpETdov5CQm8f7XJvsj23WjDGAD1EZfczDcVHnv28TR7cpRQAGJQeAHvAfaoJSkKfKWQvudgKM6y2SiPg",
  "key14": "3jZWHVRrPWqkMYtrjUgFZ8E9BkKrMSAxxf2FZpU1rHpbCDka8Yg4tJyHSDnreNdSuhJ9AfXLUR6vt8GH3vxPRkBu",
  "key15": "5HhCV1scXyJnGT8bMV13tUMpncgAUAdRPjP21JF9zCHgBtdtw42YFFz8z2uFxNPhmhhEFwtFqBh57TRPLCwB9bnh",
  "key16": "3mtNw6T9JUDaLAWFNYYLSCDLmHraJYC6AaAU6Yne46xVvFMdsdP9Xk8xTGo7NHCYoTfe3KEq5cJnqWQyMWmuQyfp",
  "key17": "41t9LEMZMTsceF13umm7q6F2hoCv8XSZft37pPBrgdrBcQFvAtFUaMgaC3p88p1kiEWRhLhtEWKEhExAQEUR2stz",
  "key18": "2eUoPLt62Xubf5EvxFp5J58rxuj4LAzzfNuggpUKbq1PsXU5zc4kVu9yCCThVYSZwEentQJnkiD1n9QPa4z4fG8x",
  "key19": "3A1WL52Y6Lw7QVM5R6DSskJnM6nwtBxXnBNsGaoTALY1GsBpc3ABa9w6De8R439Ek6kpHnngQcPdhmGSKowUJQKC",
  "key20": "3UiAUexwm5ktWUgsrMr4HBMhgyty2NnCUETwoixXCrbMwLWG75kvqTqxNuV8shYBMK4Jyhw7xUYnThHfxHfvjx43",
  "key21": "4Z7z3NtxqYdkAvFfmMUHZ2koPi1FHTMCYsjwsQbjcXg9xibqqJwMwge5woeSbUPGqYYx7tYcwYpxobsmNiJuva2V",
  "key22": "5NATWep1NNN5dUsGLmycaMRXvY65L62zTH4qcQAdA38J66YdcNji4H8nS8tq9TUBooC2ngvmsDDgFGh2haqsaktS",
  "key23": "4w3okw7GNjX5tpSFLGWDMA9gic5K7EshyL41sx1ii14ywJe1BTWmUN79T6qQur1YiGGBBbNQJWqC6byir36UgBB3",
  "key24": "9YSqHPrqzgZJUfJfpwWFBQDHvXnPL59WHBspsTt8daDyFLY7bgE7HHiqYzhx3rEqC1YcX4DaKWCVL7YnuHSd2Z1",
  "key25": "2pTLte1ibpowEncEYDtD9sUywPgPS93366jvK4PHkLhFnvGruxpp7537P6bes4R84uxqqy2Ms2tQXjqsPK5ajHFz"
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
