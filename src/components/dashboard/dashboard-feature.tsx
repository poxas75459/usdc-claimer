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
    "UCrHUHNwBHXAGSK3HsbRm4GuqEes4GcopYrExkM4Q7EyM8fS64gMRVrnR2ddoDrxnZWfnWW5XzQueg8iiUg2zbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5goSzBzB7YdAZmSq4FdGYftu8r1sw5K3mqE3mBMNo5nmaFPHbX3hh6wJH1akcijmhPcHCaqy2pcos53rPxp5u2cC",
  "key1": "4mqDweqzNWuVxBxDvNx4hWTjRatdKBWSFEFMUzFp2BWoXTQy29HoK6buspkwM3d1P9vu6SPgk2F5doGyTTJWBKQ8",
  "key2": "4SabdvX7pXgVghjgfo6eapDC6km3XQpFrcZ1WKfJHS3WBZgb1BXby4TS2Zx8QLWaoHHrfnoqi94KfaGM4RDWn8f7",
  "key3": "4oExT9bX65wmzhpgAstuyEshm1SdfgyycRPLM3Ezuk8X7o6bQ145bHoweCRP9hyNVEFbXauaQeCB6KpzqhH2GKaP",
  "key4": "5V3x79Ya5QMFQUQ5jsYMcUQhZb85Nxu1on2r7FuSuqjeJyBEg9rzXB4m3a46fhLG2ScRoism4RCSySmM22Bp81Ky",
  "key5": "3GFqoAqfsmfCEUi2e4De9Hya9vgnKVX2Wa3sYSqXxAPByTdPXznCGbuydQPesy5GCa6VaJujZnvqnAsjKBsZ4Whc",
  "key6": "3L4NAymFJiCm64ytE2M4fWzdgq27FLhk3wSpYrQgufhSRzqBzYb5sWn7KoiQtanxZmMwVbWgZUCRuUPgZhBLqKMz",
  "key7": "67DfWoyWLj1BtBtzQmHP1bB9FXuEJyCHfBFnYzc4sNnmPZqaR9uGa9kzAc8f9PaNBFXLLBnzZWXE1ZDuG8DCk2xR",
  "key8": "3GCMow11t1j3byQ8QgsekPHC95zFBUoCjDq1vkXw9qTnGbWwuyZ5B1YZgAzFccNTDsqWyvhgHjD5vLrB9fia6ZMi",
  "key9": "6DGHYcYEhrup8oZtLXTgRUWKLxeLGFK7YcpETk38cbZiT3auKcJn9y1ws9JDEDmubzxoj4nYwjKALVJY1WxejfN",
  "key10": "3y1tQ42WzLzcmKKpqqZjHGMTRTu13v73nije8QEBfop9fsJHEL97viFCYeNjiHmNJXGo2hf7AVmnZM1wJdKvXCRi",
  "key11": "3dFTeouz6Q9wRE8ya5yq7fWBSrzCtPQ2wXDBqQNvMroZz7Bep4Hy9J4fZVSnaudsUnjEiJiFMc2h98AxXDxcJGwR",
  "key12": "53ppXaetqv3eZ1pNeMfKoHsMZaJY5X6ZbZktrZKAaMF91ydXvq6eK1X8jEVC79zf9ifebfELnXEw9uNvk4rg4xRy",
  "key13": "3cSJtco2Yfdd62QrTErWx5UjEGb3S4S8MrKeN8nwGEe3ymtX6DaL79feMkiL7MSDGvuEbjMk7ucDWCS7GU54CYsD",
  "key14": "3CmZ8Xjw2Cv46o7MRK3quU95xLbUVp8SiUviiLpGy2uTpQdZVPT4ReMRdMkWxNwfuGLngBzn6p1cpmwsASXFX6v6",
  "key15": "37k3f5fCwz5dpKNpm9wiwCv51fU8ZxdwUAEXV8CMh9g278EG2JH4SPGKXNi84Dz3HydqFF3QWHkts2tqLa83tBeD",
  "key16": "5r4kxSxrKM5Cud9Bki1cJezu4wLjkpZh54hmzRPyfkxui6Ys9SD4tjQj5CchKo7om6HPPmkCtRujggTFyX57qkun",
  "key17": "44665ozAcKyo3RHZRRyBf5PW4hRrwaXhJjB9q1uyUQ45TTMLf2t92PssPxxLGn2xDhJ5p81bYXPvJ56rfb6QiKR3",
  "key18": "2jCmUctHYDj1Uw7QzeRorHADtAL292a2wgoeHoyj9K7khqBZtGEEEWxNH3TzznGhK9KFQ62Z4v9v1DmN7RmmofcC",
  "key19": "26JJuLsNiFkFUhRa3Kqszo7F3ZoXGch7eD3FTsVW4cKTZd5UaDfnoFbLqZAYPEKvCJuHtHrDeKfgBQPwQ8f3cWZN",
  "key20": "4bRLmMByFuKTL52D17hfHbYdWXZ4hAgfuqNgCAzfmT9wtGLbmVU33zef9JkNFP8ZwaFtkzeRhPi3heDqMcHDvj57",
  "key21": "3LEPZheziRH6NvqexdCyavhrVVqxqRGfHtYhRSzLbGNXMEvL7rdUGo4ABZTk8KdwUWeiE8bhpfmfXdg1sZH9Jc4w",
  "key22": "4BTMoPSQYnBDVWL5yagQM27pAE4WynyAveZ2VftAychoxuEbPYFq8CVcLdeb88AZSvToBry3tmCHFSt6Roj6NLF9",
  "key23": "5cbH7RxVPCBT8BJdLjQADchyfybSFa2DVms5xiLjRKeS8zn1ypDWUAAkkLigJgeJE78DKAvynwaKRnBhmtEnoLaq",
  "key24": "6hS1jtT58244GZ8f9ffA1tQJBrHsqqs2e8JWBCACugr2hSp9KDi1WyaGd4XtjPFEBbFJjJVUoHzFafbUDJVAsP7"
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
