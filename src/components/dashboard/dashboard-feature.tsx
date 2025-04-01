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
    "5C5m1qiRDShunbe9DtLg5Gw5V5SSFXDy8DckFCzDvrNgMeA2ohCpiXhKBob89sAZEfgrG3iURNnDeLNTHx7bFMi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbFWNYHTucFsCYSP9EpYJY3EPQivo8n4ojpKZCjgnoAg2keUEW9mCUFoz1F8m4s32VRCdHojWF88hV91kzDyZRi",
  "key1": "57oaKbaBqvNAj1abEu27Lin5LP4v2ouASkFrmndAnucjode7HRcfwBeYGVQyPhdFDPUknn2j9iJhAVvXMkfdB6E5",
  "key2": "43jVtungC6FNpRte9qM7UkjjJ31GTjywH579MBLmVjAH17E5mx8VNLWu6Sc1qhCGiLQQry6GTpnkxTqKA1GKT5vi",
  "key3": "3yDTGAn24fFRi1z6xtUzVhipdyfWosqgUoJU7FKxfLM3bWsPzJYRaEcjmw8qBeLKraLSF2BJMUzeB2P2V1guuobN",
  "key4": "5J4k18eFQGz3NByXKCLBoBY4cLUnhHgnAGnyw3shkYUUHqz3i5z2Rzcc1idz1YpR8xhR6DH5BJgJTT4xrumFj66f",
  "key5": "3xKpDpWfuCeTDWVzzdHfJ8DxJ5Uqa6EW2arqnfmgXb53AgSevopF9K4ST1fvWeEsjQKGLPNQyzFEudeyL3LhqWNo",
  "key6": "264WZtSHnfRwGS4SjLwFzeS9HVdByAWXcY5rY42fYubH1a5EJJtukcKgs91Wz4GMKLUqT9rv9W4jci6vKeD1dUGn",
  "key7": "5R69Fu38BCvJteoFERmWJx99bdzHatrVGWmXpQgsVqg2Qj26fCjJLu4ytu7N1GS7vTDpzL9sSoLrD5xnjVzU9cti",
  "key8": "9XsArVc6qCTUyYKjaLAaqSxKogWySgj1DkUPiFejCkb5XCnpVJPNge62SkswX8oxyNs3kzL2rS1PdAX2yKpmhja",
  "key9": "5CDdGdR5Ev8ZtvUyiFJnWysKrdY1pbXH16pvAKPRwHBResLb1fAK7843MCKrc5cNLaUwco4hMhEEYXraathH7ekc",
  "key10": "4Lufc77b1xLujihyULctQ3iLWtbC64ReKbqVMDA2w4qs3tj3FtigvSdrRk6qN9WhLigf1Tw2WSrFQrYSxVimfc6D",
  "key11": "3doUmbWrBJjUw9GPvBCytGu5E4kVbBWT2fJJu2GfbqVnk9sEDYhggJub3ioxfUsqxiL53AdCauEg9sA8J8XZckL2",
  "key12": "2WgjBzUKa3nXeBzmb9HHqrsrZjiSvdQtRacieTG55ZSqiTyhfnihEcHyrewuQysiax2U56K2SfSoKopSQkdZhpmH",
  "key13": "4sRMS3vcBnqJp8d2SnBLB4amhDu1JyAaLaeNXNdmVVNsark4udbyMt7sTWtnuQ1eqtcuPep9uKcDXSLadVmscn7o",
  "key14": "tCMCsVpQ3iXnfwqcqPJisuzahRLJeU1yJ9NcKKN8KgNuoWFb74RBei66QkidFCYDaEhqMWZ2tuPEFYHpPHT19uS",
  "key15": "2BXwqupSyGMHqbryMRtV5r3FhestFBxc7DS6oqHC18skkAUmhiTUpsXoM8CiCx59dnFWp5MpGc1vpyzHLeyDRGQZ",
  "key16": "3yzNSCeSnc4vQ1GojeqvjVvFfm2LRyX9GcEvrp6BAcuRo8K73XHKNP9VhHc86bXQEWbJ9hprAtd7SumC7V6QfQsu",
  "key17": "4TvfCcj2nLvcEmkvUVdWxA8JnkfBhdCyES93BwP829S7KgZPND4BFBbkWm6heqKpmHG9iFSbHTY3MhuSA6QLjtiC",
  "key18": "4KWfFx6aYDa1VxV2x9Hm5RpfVKXJYnfB4cZrDka46NVZbS5SmSx9VxyDZfDBx36YpzNNoioTRdzesByzJQ3pjKZx",
  "key19": "5mTohKeB7qM5AGVJqwLCZ5r5e829vd3LKQmQjTafxGVKZ85uNzTEX3N7838h2hR3SdYwkM7tr5yJri1vBzMm3c1r",
  "key20": "2FyYDTnSWxvFYzaWBcmh6yePDcLJDGhCus1HJJhw82z7iktSXb2tqiJTKx2FptaN3hjuptGnZRnC7L64G2p3fU3S",
  "key21": "4W77bTRgKzpFUheohuaPJZaqAmPYQQdMzcocwAWtKZGpS7tFNCYQ7JSMPv1PPyeyBg79JucYLqTh1bwpQ6Y5chXZ",
  "key22": "4C5rpGRUD3qL7cESDwdkjDdA2MpTgwatuf9aeZURWjgdjVUCcnYbtXeUZnnzkCKnysmobWeeTU43zGU1WtumPswo",
  "key23": "nhddAebXi3oX2asUM7Nz9zeKVhaE1Y5XBm9pSWo3fxbJ68ZyCkj6nXJPYRaZyrb8QNKPzT3cbFcDgjvKd31qa7V",
  "key24": "47BnabJToZUNvV4ZZoVSnT86L2RyEGhsWHiEC381aMz3bd3AaYor1wde7evXvPybGhmeMvdPUP8jVF7pJfQgN9AD",
  "key25": "4bjpswLv7afXZgxUQG16KeAmGkWvnNnQE8b7AeEQbXiUCvC2f58BwGPU1nALiBJji4MULBYJYPmMynL752n3DgJG"
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
