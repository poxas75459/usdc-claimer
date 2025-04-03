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
    "b1GSyDKfVy3Xg4zFLKEBoE3QRfGGAWATc1NnBenrXpnEFyGSMR9HxaeXcg8hAKjJNvbV8txGqQ5w5QnZ4ZFWsb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBcZ8MfH6BLqkoDbDHwCN7MGhhdUV8d3DPrv9qiUBi1nyLeMSqhG4q8vq6ukpY7QEQiFHoMwn2AX81HuyiqSDBu",
  "key1": "2bUXZJT485BxXeFohJaVVyFui6AMiKwcFRMG7qAToyenecEmdYzoHAGNQ5UmuWrC6Q9XruYLdu2sWg9nLUqJJnSW",
  "key2": "2srtYA8sK4H1mkuWja4XdY7E9mP59XHKyp56iU47a92GxK6K4DbVB5LiC6AcctM7PW35mUhmQktY3PLMc1EJtDyr",
  "key3": "4NjMEJzkUWYNhiegVBHZPLMttEJXgbq41pcrgVo5VjKKTTSbVHKjYjPqYRpjvkw5fwWEnv6JTEpSqbKC9g8hN7AK",
  "key4": "2CYDYLBk5mKgQqKuY2D4kxTzqGABGnEAmvmzhwQ3Kwt2AMV4MmWMoxLo19F4VmzjY9KkJEABqbKBWESH5omHez3a",
  "key5": "3F5AZtAVeJbf5USLq2sc1ifArsqEA7h3ZA2RA3JEjeuRjSDbRf8HTgdtDXCQkfdsbFcEswDqPJMnTHbJMKs96zvU",
  "key6": "4UQGr75Het4yJ6isPfazFpg9Pb3EWK1qH6MVR5MC3UaA5JjANArZsmrn4sr8PjQubiw23Fq3BJhgmUWq7xQAKPee",
  "key7": "5q8C1YRuShNQLQZrDUJ9dhQGDdWCm1SELybuVFYM49yc4Cj89YyqRcwx3XjJHL7BpnZ6WJQ8x1kgKyeRbeYRcwyc",
  "key8": "5XdSVdounbLn91pjd62gu7FtSBn6Dhnt8xJ1b9ipqqUgv4SguT64Y6YvjQy9syAqyWqZLNgSsJJevHCxP9ujmGWC",
  "key9": "2w5GjYHmCEcmUDrUqknbWLxgYLwLp3yCEHovBtBSjocRmj4fKZaPL4xrXBUeeP28149wBTp36iz2kgqD6Bw4sEqt",
  "key10": "7rAZhm5FLR7gWaqCgmfLfkrNsBQbvfXkRnLF3o4oE1qrsr3aue11mmT1Doj5TNTNfZxhL8AE9jzWqzsnuYnsFCe",
  "key11": "5HXdEL1UovSSaqUhx2LzfRxWGU9kCxytxg8LzFxxizcMaZwMGDe3DF5QwVjeGt3wbV46btwRsFLd83E9u6qbu2bX",
  "key12": "3wF7F6Ha89Bv3KCxzHt5JYT1LxHWhXhGsAuHBcnozWyXpzcyYqYzrHt8tLb1zSgnLdBhFeMH71QeDYyj6Ch4d9CM",
  "key13": "5xLaMsx8utEEEGe16osMvtz6orkMGjBpVq81UjQug1gv3ExgpJyRZQpJVxaxgY8SQWSmnysSjj7cpyN6C34SCR8w",
  "key14": "5cLY8UqWg79m83gd5cFCdBK5QTdGyp9Jf2S7tjE9q5LAMPCy5g2dr2oCky4DBDkmYZR95iyvL4qjbXZVGKhTVk2t",
  "key15": "5kHZJV8zbHdpgJuu5wcSvh2ALCEsUCNE44oUp8RWS7zxLZENSbdptNPyNSptq1ko9KxRFGR8hUVz1bcoq92dUaUk",
  "key16": "5TU4rEpYc1rVnSzo2Ebb6j4p1YwfPUX9MU89SpNaXrNogfjkJG9A8RceJWM6AsR5M6uBHJ2mdKdhyETf8ELrD2VS",
  "key17": "2R3iW9qE8uhRwUWJX6sz6cbYUm3TjcxdSxabJ1rgRZX1usxLFDi41ptaZgE9w6goQFxjUw2B8uVwVw67e3ZqZAvg",
  "key18": "5K9NLJVTxmukZMBwBZnEWzNH4fwzCJRZV44jJxXDy3XpxgAUrdJJSUk49CJx1xwS6H5CJFuyRp17gAyaYEfxidjZ",
  "key19": "3oAw1noGZHjsUknyDAoTvip1GKEsZeWi2LfUPFSoTinA4LbBtZYvf4v3qnvN1Gtj7w2Pbr33XXC881EXA7H3iQaT",
  "key20": "4LZtns5qEGsKyKfxtNwRBboio2WrVWjQF2BnFmePKhHZyYwHUXE4pJHmwMxp69wy7RQuZBp9h1HBaEA2gt8VkZPR",
  "key21": "45qh7z6PyPqkJCbgPvbe8PjWvRZXTMCdX1rHMyUiCioBugEWF6qXZh1Gy2b5AYME8qKesfHZPt3ZMQH6Y3xoF9Xm",
  "key22": "44izDVE8x8gMEvgKZpeQJ2gyN3d2QeSiXXzNK1sXwnEaseoVa965DAdmwb7TE9s25Rse3VZ3wVhtCqc1o45zyPXu",
  "key23": "5StDY1bjqh1skZfSUnUr4vE2Bvrfbkv86ARS4JEqu5BYjEYFtKnkGQ2RKpyz7wuwjk7rJhH9NAVAjgvwAnZw1Rf1",
  "key24": "4AzNuq6fLoZ9aiY46HTCKHHATZQ3mShK9jv2HdAFJ8vyfpqv959KqKfRDEaN5LkMRwXFych8PkVT2hmaew3jkLwr",
  "key25": "61JfkEefz4URseomzfuJcTwMfykfbUMLWd1j21Z26GTc3xobNP8Qwzw8V6GoZQNtfHC2Sqma2QUnSCK8uN2wm7oa",
  "key26": "2GAS2EeYm4zDmVgw4ZfaSiAeskBH5bRjX8a8NAZUMS1nXEqUu5mjaV9bSLpix8UDLgpqvf9Ma7djCw4Z2gingdBz"
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
