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
    "ZMLfCt8MSQwHLzWfchxF9YMox6wY4k5EzYHe2zaRm9Pg62F5Zp4CRZNzC3BCDZgvw1rtjkGZYCvdDK3DHxmcKog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7VYsGVLX2nxkRrdHQTox1V9SNh3uVEqsEYwGuemxVZuzoYbwR75om4WjqSDvgnmccChfSjMdNK29StTKeZSx9L",
  "key1": "2cqoh3CGTrGJzfVhBFP9BSak11aDe4AxMrDiVbdiy1fsRY5YA64mB9y8SHp2USD5suwLaYdHbA1BaK7pQ5wD75GA",
  "key2": "4L8413YNQEN2WzmqtRR1ky9rmUWU1D2fiAEgpEcbWuhgAsr3dWNm4kSuyU77GxNUoNRn7FqSzJEXsygtW1LyGhTz",
  "key3": "3W9wRVD7cHpxbep3wUN9MTYRHu6CSSdr7FibfpcoxxJVpbFih6yKDjNTgn5M6vVdmSpFUTdVHD766JzX54Nx7S6x",
  "key4": "2JQDBUuj6d9LxxiwUSd3FW5zrBrD7dwUyFMWyThN41j2Qb7v7zyMx8TkeQTXtDem2JpkASPbiQMGKSpn5oGH55oc",
  "key5": "4Gks24ktUdeKMgHGTxYtdov7xUJEc3nVbvdeEv4n7US3WK6jibwrugEeGwLX89boNwDLipZwBmQgrt7ccos4vqDe",
  "key6": "3nvtKMEGs9in4rTLXz6TFG46URhvKuptM7vgFAXftuCzCeA1GBMEi1vQgYeHg8Qn43UsS3qEb1Cq8X9UEEE9pY8d",
  "key7": "35yCzQBw5c3zM1nyNh7CsyRW4pjGHaua67Ryecf22x86ZxEV4empFQYzYyzNdb2NG98oeTJw4993weaJQCXDSaQq",
  "key8": "4Vn4rnwUjFoxB1tgFstYX6Fv8DqRhsyqDZSQtpBXMNgPCx1LikVMNHFNYcqtVbcrnaGz2zRBgLunvjghqocXYr4S",
  "key9": "3umNGv8GX1fsLZNtSCCRq2QHHi1t9FaVjVEiDdYtkWVGPzTAnDzQ95nWZXVfAjbYeVZzE6dZarvrNBHcmHV4qHCA",
  "key10": "5YGuwL1KsLK4YeQ3p9g9RVcobJqRxUQj9bXysG6v7udmw8CD2aYqPBya2pRkZogijqFvE4GW8A5EFBrdS9UFCsky",
  "key11": "CPCQviXQ25q9KsS53D8aEqLTqPFTYZXdn33AguhswrXbzEuJAB6U8mHZ9X85deJpxMq8Bmb9cF3ASdiv9CZ2nWY",
  "key12": "2nQJMYdDDNgLsRpWUcsDgDfCjijdXrwSnrfuiyfFC8YLgoggS4VE9uRsbxCu8pD6zWzEzc9mCwWx64ixCbsaVLay",
  "key13": "2W9gfPuioGAuNxipw5JAKX23WYxR62dRtYUcKrKETEXT9gxuXMC3rC7ybGfq3LaLP89ootSYWXKehiLL4G7tPeYr",
  "key14": "2wBD8HgMyxskSzJ3rJXzM34MGrjSG3odu6gjLfhykHJ5bB7XjjzdnzUnnV1XKF8Hgk84hcGdL37ZrFjUZqckYmEG",
  "key15": "2tqn1ez94FNtHSrr71iUXSZD1mBqCzzvEeGeNJdXhT3eddhcbrouM4sJDSHbU1Bsmm2NnpMwVMfMBrmx2QjKuUH7",
  "key16": "5i7KQotySrNmeqZWaSFLFu6Q964v1ebby3Fe8oMDrruaakkv6H5fE6rfxu4vUqEu1MBNBZo36d6ptDaMcuBuydpD",
  "key17": "3Y7Wz51u7hJbish3L2q9Afo8N2XkFdNLwRTcpHUosyNW5r9UBLywAT6tjDV9v7mM7kNVTwza4eurhSr9WvASUdjw",
  "key18": "3EG8wSACQguJaSbjf6MYBCLV185bYohKAM7PbaqEFJnjcDjkACLhVXPoqd8dFSf1oPb7kGE6hWpuDGKUoLLp89vC",
  "key19": "3k7TAShfrdEwBRHnSdxSTN4tWP67JUTEBLFTrhvwz7X9NRwpbCYMuxXVvEZFKQgzr94Lk9HNFjVuzEq5vRKgBe9W",
  "key20": "5A5xQowh5ujP8uudMEFiruXB1fyWV75Vy9a6XGNLojRHFWfi9377KMBLDYS8GDvegNhdoYSVwePjYpewqa7mLHZe",
  "key21": "64TVQXaVdskLPRpCPtu5PNquiSxGg6TGNhnMnCTKNCVrW3RyagN19cPS19kNaa9Pp6BVXTkk8Bz82uYCwjw3G36m",
  "key22": "563h233UpR1382Lm1b15REvgkNx5c3kccWdSHZA2Mn77R8wjn4AwDwpoxYT3yNVc4FXnVF64SsmQ7Mf4zugpz2iQ",
  "key23": "45T1mdJEo5u9oRRSM7cWj8cjARD6TfXtRfKHYhmj7k38RM81Hq4DxA1XW2GhSDL3bKAngz5Ckv7ULtSWtvotx2RT",
  "key24": "5kyP3qASrGpMXTBxFkqAd2qWBd7Jjtwswb8oiC5qBZKBHxwk22kixdgpTrVdo4pd8zSd2FnsKNht9PnKa5A2gUX8",
  "key25": "61qMQA4TVsLyTWBZWEJdxEX7suJcz5P36B4XoGQwrjkzkRXJRYbcyeSapLnWYzbgpjEd5KPweoXDieJvihu6B1oo",
  "key26": "5nCnwRu5nfYThWcyTSnwkoyEeQa5PpEjkQdNz66BtTqRcDUda4MMzW8qngzU9mHPAQdg8TSnrMsSoMJ5ujTsVJjX",
  "key27": "662y1s2oihEuk1gZZK57hhb2RSMGTRnio2EVdpD5jEJnsetWjekhDRPzUAzfkzKZNQ5S9z6f2JB5pzMYu4frDHwo",
  "key28": "5bGHRf2eDaqJzKeqFz5Ch4djz2xFVxVqnzTn7bfdBZSPaVyqzvUW33NPNVkVasBNCfCgeAvWUXNqtD13Sg1iQ3jJ",
  "key29": "2DLu1KT1FFXenY6Mz59md7d1b4Dq2hmH7BH6Nh7HKs6y9YnX329kVkevRxdrhAw4qUaTgCeX3aenwQRoY74f6a8U",
  "key30": "3CdHwPJ5mimYgWLSktx65SHADqTnHqJ6Vi3kHMzxhUkwjehXYVPRZc1hsuT8FJzCEsSPQfok16QGcueg1cvoNx9w"
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
