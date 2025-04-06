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
    "4iH35iBVmZojBCfTWGBZN87k9RHdu8ecMxzkWwud9FkAaDwk1cp55bj7NqT6URTnt6e3kGqQZFwrT6itkj115smM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a4jA4inNoLDbyPu9BB1UNv8xJsMSBYpgJzmYGJ41EskLDnAQF7TsqrquF5qexj9hx7D488irpeGkpTciujBQwyt",
  "key1": "5PpWDLHxhEaXk6LSsxxjTe2kwYq2k9NbznY615y6azRWpJ4zaiNbZKS2Pp1SHRJkyxcmuHFDYqfqH7X45Qi5LSYX",
  "key2": "4faDraZWZUcmokm441iCzJbNEMk7qCQwAhSschVLuNExGB4PYENHDs9fRy6MPG6bUeNCAH3RMomaveBeqSNWq7nc",
  "key3": "4mHYPTcdr6nstQXUwYXM8FGqpRwy1Whctt2753WaPrpjKZVpuBiVMo5NvR3v2AKQoEJW5HGNhqdCpnbgFqJQUHFn",
  "key4": "66T9SnVEKeMqR1ikJsh2j28q3qkVH5zCdUqBKTV6y2BNbUA5bZmvPFSubLTG3bCaRACDQWZ5GAQLZUDdJj6fvxnL",
  "key5": "T2KpXVS1EWAWGKK9SZoVT1boMnopH6N14BQnNjs1LSwsHM6ogyHGoVLeiywc9DvSryeFDKBVkSHv3RMCXCx7ESH",
  "key6": "ZQmWxYMGjD6hem4ChtCqtQgxNA12HyjmTL92X3E96Z3jhx9GRCnA9U9F5i2a5objhCep7RcjzMDv6LtCWiQKY6S",
  "key7": "2zSzo292iJ5bU6jtrWfq2wxR8KBBE3Y8L4czvCsoXUFGNPjnP8AiJ87wqKMUFiiCqtZJWfx9skRWXrV1H1jFyU9D",
  "key8": "4w6KBA2AiJpp3XVL4hmAVv5raoryLyqizSkJdSaCUQGyQhU41txSggfScrPDoUb6we4aSZEtapBqhGdRSHfRJyUZ",
  "key9": "26y3cxwsrp8hKs52iW1mkTK2sPmnccD72VqKrSWLkKUCmi1qAMsqMtnoGrvb4iBx3pdYL4ZkC3eQQvN2fJyJh6Sq",
  "key10": "3KeatpR1SR2pK35XbEyGr9DZQJfFTT4ojRqboy1SGqYmDPjRSuz1e7SrcVR8nkCssitULZC2PZw7W35U5c46QjgF",
  "key11": "4qD2SGLMo14FtaDZnoFeNuMBiJgozrHz5GMdo4XpgZFhMsmdMKau3WYWeyPDWzPTFTqB3AVHP5m67TEDwVw8o3qt",
  "key12": "4sjYMFH9BMyf5C3oiF7iJ2sw7dtMhKanu6oSKi59rtB5X9wWJzVDHTSqjpjMtk4i7Pi6pwWZXBauKonGLs6Z72dz",
  "key13": "2gYM2vhoUaaTkgJC9KJwXPiwd4PYUCKH2BLcGvwnUoShJue4453EdiApkqTYQ8oGSVqcb9bJPFNxQY4GDipzUmFx",
  "key14": "21XdWsn9Bj1c77kd7uGdE9u3X5VpAztytJ7gEQKf1wAY1QrX4ayHPsa1GHbpF3ZmAiWhL1b3PfXXa4ctbfeCNGwv",
  "key15": "3kyyp9iTkXrEAsUCTsQRq6Cd9jYcznd8Qh92FuRM1kstCWwCttgWuxxGUdL6GbJxKnmLSjfrjuCUnrkWgmPccDjY",
  "key16": "46uyUR64UnZptqzqJVSn2uw9RJrMEz7EhXYo6dp6Cgq962BfPUMwkdCFzNdy5Qxs9fu77QWC5uHFtCdz3U2H2DfT",
  "key17": "4dBTSsDDjhhoruMxJFrHZPthycqTYQ5HroLK4Wsa4FsPXgEZBva4KD6j6yZujTpiNufQAy3PwPqEZdKyiWuarsx3",
  "key18": "21AnNMGoSq7Zs6peaNumMT81WFh9PdUgTUASaPowjvbK3qvqZwTe6ZmHF5Ansaz2a7sFgLMbKeYtPtKeF3A9KmFv",
  "key19": "5W5VqFuPhvzNUMu1uNAntemxn3p8h7BvRu8SkNk6YqYwkvTA5nYUZBSd7ycxc9cVF3WYCkCqgukyw5tZja547WmP",
  "key20": "2tTugiNMMYefBFTAVEazQKrRMbuf4udtiwY1zSjiqouQGRGHSK7uhWxisb7mLec97VQmyRQ6F75rZ5pLqLZjTFea",
  "key21": "dZ6z5Rx5Cu7Ueu4GeEg4nbfNWq7HyoYczYvii2gFrL3sNWNrHA9qQun8FgtZmwkHtDxma3HYYZvudawKyNtgun5",
  "key22": "4yJtNKu9yxvjoTmV3B56MxvMYkAqbPuy2XajfN6utEHH4uwyxZ97Aw1avHLapPfmCxoHWKptZYThsYzmexcu7N3A",
  "key23": "4cEXvZsmbtLhc7qa92mtqm8FXxJ9saNR89okvKpPhBNF9Csuhrw9JbySsMKaWZ7hWt1hdp1tHgq7w4f8ax4CNarR",
  "key24": "5qfh4U25ADEzthhCt9ZmopQUzXGULr9gzgKpTcBa4LrTjVbVEPxU6YWRc4NAYDNAs7PE7ZD47MW4Bx5Ry5huBFnC"
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
