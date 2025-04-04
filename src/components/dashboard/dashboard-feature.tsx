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
    "5bXYzinuRjST2TNoAchvuTweUkSCWNuH2sbnGUtakCAVDmJpNxVAZVCi6VuREefSjtS5hPC17EfKzpqD8YYgewqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWfbxNCaigY16mXsDtmTuMEiouav5hqMwoSFvbACn1S6JNnXPf3kNvYVb5Er95ncipL9GHhgNdSM5ujUaeGrQZY",
  "key1": "4HjyCCjLyN4icfM77eRjLt8tAHoJKGS66TdjRqppZj2R3ab7CX7r8A3CGqyPuGVjqj4RCSQNk274CsXfhY6MEABR",
  "key2": "3M9zQydRSWg4f83CxGoaVwFgn5XnvfZu2xyBgG38PLyqp17XFuZUhWUHZHt5iCFT9eubn75dZL5uMtN5zDo82z4e",
  "key3": "46VF4izRRnTg87fvt1tSmafHL8QLDcU7JnfcjkqVkKb8nfoGHrTiJhR6FN1VhQST8Q5s2sLUcMXqFfDF1ZJdeH3s",
  "key4": "KjT9erEcCqenciSZc1GAJtb1zWtraKWKDRU2iWojDCTnx88BJDWJefShqkj5aJeY1gLfCgaEV7ANYNky549YbP4",
  "key5": "2sMuBctRSzKc4sKNoz7sfJFWNHcWXLNKdzKj43LDyzwx7c1Erq95F7Y7CbSGi1V6yDcM51jjVMvTV3oJHiPEbTMk",
  "key6": "2XR5Tyd1GcH2qLLmgDoGX4YBLSxCSUPjsUXbzRNVNQWwCL6HPLTadnv5yioHW9WNLg4qw6yfpoimbYsEUMQPKese",
  "key7": "3auWfsxRKY2MZJ8xQbhvebUdbUGPWxWa7jdUDawUb45y9tewENpgFiAwCR9ZbKdAWS2MJAHWDqcwhERPeJsNAz9m",
  "key8": "337d8b9YhECDovvwy4ftBvMKsDiyemwSn6F71DtRcTcVNN9rfgS3eKaV6GNbUSmMfT3EJoAtSmTxFDand6qkYw5t",
  "key9": "2D2TJiUUjf8GMPALMzBzeoZFV5MM14Kriq7TRD2jTqzHEFkwm2zUx1p88euS47FsJnABb7EAE2Egao1CoAdHTZc2",
  "key10": "3eM5oRsSj7N9D3Z7UwYAKnAKxLvVbTfZEz2QLPoPZJn9Pv71fs4fLEQa4PZH5bwPG6ub6VZeoCB6K5SXXPGwoMSZ",
  "key11": "3cgzxbqydPHQTkAbJwQ1BQekmvRR7Uckcaez8MrAW7ueS3fi7vcecFcYwwnoirfC7p3eQnZ8KhP1HqdjjJ2rgfbc",
  "key12": "4F2BSeNRY2XvTHxZXADtxZwYMJ7tYq4T8CMhZqkNL3CoUhmq1zUwCvBE14u3ydzEXZr5iHc2ogvMwAWuFnNn3nen",
  "key13": "XRbP8dmYbBVAf6onxGLiAFoUW2NyR48oefnbHwYbW5nC1oJMZxiNE34ChKwGPLvUAL3x6L7oeve2A5Ln1uR2Bwb",
  "key14": "2JGUK11wPSVXSPbJ9wRMoB6kcyzaRW44kNRBp8AeQfMdqPfte5HrT37MC6vxoJGKnUx31pdbgZfxyANF3gbq4DTS",
  "key15": "4mJ5BeAuRFz7hDGEnVtQV3MXeWV2hsb1kwo5W749G3Cqdv65XLB8HGBFvuf8GVd47sUi62X3ZYLERVwfp96p92v2",
  "key16": "4f81pZ8AdLjpEuHkKs2xLt5kxD1kWpwiXw5DT2wJZdLuRc7qLdbkqXePAepThDUDGwPhjb4Lu3JAbZUezpfq6gxj",
  "key17": "5reDmpuukUrRkF8DeuqftbAuiymznUA7Q9Ba14TyLuVvGG3Joz5Wz9aSeFUk1PK9wr3Nsi5c6Yv18AKd3bcEuyG5",
  "key18": "2ijR33jDx5Ed1Lfs1jrhRTUkkjxcz7d3N2S8VMWAUgmWR6WcC8gi6Vfg7qUXBz8ewi1HLPpNpXwAWiqZ4GjQfRnh",
  "key19": "2SHwt8A6n24fr8znRzTcNDRRPctU4i4kZqBiU5Km7FWkarAkZPS5FnrX4Bko2nZ2tvFDtLtUBWpoQ3wEDYLkcoXH",
  "key20": "2yuBDCrXqexVwixS1qFE1n4NLYha7KezcFe6EKsVE6Pd26MmL4eWKRnDhF7CmXGWczHNnMH3pQebqZNyGKomsUzT",
  "key21": "5ZTCbgCFRREGkmnbgSZopEJLFJxgy8V1eNLCccaPW8L83ikyyDrnxfz18fo1KN4P2pCTyVGyLuMxUwFy83oWPLE6",
  "key22": "4Jeas6Y5twbcTeWF9sEY6ein6EiyXXHHugGWXZJy1Qty8bP6DFbJq8p6s5qvAutGpZkYpFHzNWh7KFsiLYmzFovR",
  "key23": "5FfS374Sonc8Hje6Zof9JStX9Vs8g9qNDcdT7zLjeGdH3uNpW45NuVzy5G8MPbN63YhFuFkeAiyPDFnbiiJepWuT",
  "key24": "4p7PitGKZdzUwhbtr8EhTg4tLKWyix4zc3qbGqBs43hNax6b7j2FzmB9T8T6ZsfSQe1YGrNvUp5oTbaHW2VKJxfP"
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
