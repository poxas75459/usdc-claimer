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
    "62HiHaa459LD8vTTUZr3kgQyu7eHCcwzjPxhvQk64drz4nw4rmR8U3Ua89s13MEkwx2Wtw6oBfAwVQ5GGYbRxNA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GSEzZE4Z5oJFfF24qAvsjX6hYzC5GHHkzKGqSN832QF9vos2uQZzd4sot6j7VbZsNtfVgN1pX8ScdDtvicYnJ9",
  "key1": "CqeiwEsJhyjTDK9VcvSYE2B4cgFV2SBXE9Px1Jq1PeiWxDQyehtFz3Y3Ezy1bZ463xNe4xdC5HxxdmYUcdsBoHi",
  "key2": "31gspeegSEAW9TaAwizXXhq22oJzz85Yz3tMuuah9j9GUkSd34ATGbKKLJcTXTqTzaJi7dtkm1ta55iQgMYyuYMk",
  "key3": "24QNEcrJiJTYRARYgK46vLBC8BB1XaRN71xpEuiYSyF8h2N1BBCXifqopSvXVYdeJSRdZAv7hFWwHpnPMJhGE2Jk",
  "key4": "5mkKHPV12zrczqsNatzF5yYnVtyARjPX7Vm96b8JvKaJ7Wv42Q4Y1Y9GjXVTTLgY7LoVdBdT3fiBKuZ45VuHoPHA",
  "key5": "5NjhpcqkYXNoFF8RPESVQ9Y7NjZRjYbNP3avASTPY8xawX9LDnDgHZCQDiJxuk8TbLASACyYvMMVFa64e1nsB6HU",
  "key6": "z6CasFAsLzWCZPZZsDthQzwRfy1WH6PD2w9vUmrq67DSyy9JmJ3jrywoGBKH8WRQ1RuLsaqZEaezYnhFQJDodfE",
  "key7": "3RHv4WZw1N91yoYfeUUVJgtZ1yvZGdDfdFDrie2nCQPW8n6Q7zGfdLEvybGQu4yiXkgWENSHJ6x5MYFUnPJErgkF",
  "key8": "2NUYEwQVkyAfov48dobbDoctYv8fiVonnti3JBZcKz1X4HCfx2SKoTtEnBiKmMBHR42MnhYS8SmHN2N4dvvi9PEu",
  "key9": "JxCvhbwm7DqageZtESjZFGBThHKPtHATM8PCnxgBbrvjMUhQdjSWUaigNMNcHthYquMVpvfTKUUAtKvmeh1hEmH",
  "key10": "4KXkKzWcc6iN3mTfqhp2NyLi7zCM9xVsNbZz8K8cnibyMuW8LNo8FNJxZNozFoPSCFQWRtp1YGp5mvkpAcLhEWoF",
  "key11": "46XmoPgREDfUw2tToAT3RLzi2TNFx55LJhYt3oWRvKVt3vjMwdXqRUAvr37Bc33nmFpgvqGpKgefbeU5VZgUTFsf",
  "key12": "26R213EX6CK55JQvc6cQgNfqdHqZM7B2isZzqgz1FcvyizVW3ZDV5zR6es9LsDdnyRhMEmRcVzwe5PobVit2k2W5",
  "key13": "2Phbn1Am2gDeLz6JHoeuRTNkLdNyMTze47gC6sZ4aXwGuPX7mFz5A5n8kv9tHAEd82tiMPZknFUNznS6T9iD2rP5",
  "key14": "442sVJVtzzjTQ78W1w5JErdaLA2HAaHPzZa5haYpaJ6iu6pcrKqzMKSD2P7UUEveSJKZTxKWjUWsBSQcLRQVoZEn",
  "key15": "3perfGCo5bTsg8Nud7VbVAq4SgvjHX7tUpK6QyyXd8NGm9WPXGWbYHci33TVZ5tXJ6ZNxGDJQM6URuFGeHSmuCbr",
  "key16": "5nL4MDFbxnhH3cAcG7M89foYX4bgTWKrmNRq8VxYa7XZrTXTDDq3ELNv4Wki992UWJSvJJ8nrnKNbMHQJaLNM1b4",
  "key17": "4mRSVbAtvgAiSEm2qcSCdxLC5nPaxmBJ61hTJRSTGf97VpNP3JwtAqPPfxn6oa1RsvNWqpQQ5ow7ZeoX2zcsjnpC",
  "key18": "21uyr2yrWTM86NKFwsNFKWCySKT3zjsREFEgCXooxuwuvCuhXyPsR6sdsQU2BeLgcmzLfqXCEW3WCsP9HxcqKWSN",
  "key19": "iXMHWWGpou9MRDpJ1KnyNApUEMpJSiRR3w9zheg2m6tp4qWPejtvDm2sRGbRCR8i7bj8m2d1hDb8Nxd6yxkAMqz",
  "key20": "2K9SVTi5JTd56Vyiu2vACgkNPakVN3FyS8AywgTqFyHHpPemnEf7r6azJ9BvWv5MDhcxCqoCL1opYJKtVPu3oa6q",
  "key21": "3L4f7gdryqt8FaFwexer57KjvPEez3EoQdA3YU3X3jkbsBcWzLFzjjRvLZtU4c7GJUgAS81z1UKGX882QWs8tawp",
  "key22": "31GwJD45bqtfVQjkE7AV6eJKh8mZGHWFpNXvFubSYb5KnBHeLbtyHHi2SAkkFQsfBwuSvQ41y3AF2QzvHzMc2Jt8",
  "key23": "M3eLW3GbChZrWpetMDe95CXJKmKP8Qi3bZjBg96hbkNxFcCLHNn31NKQe2NJdFc5gyP9ubqBv4Zj4rotRkibr4q",
  "key24": "3QBKKGFFZ2irZeGGMyVdnLLhcgP4o3eAiuM2xjEcsLWxYcZDBh2t2bxq1cXnQmvqymFMkdAQUSyZuoWSQu3HQzp2",
  "key25": "2eWyEyL9FGnhwib3inMTHyYpJgYUegoLGaCUw9b5zXMCQvcA5mUVmBxccwWE26MJ9x5EYFdunuQFNLqjDoSujTgu",
  "key26": "444pJLMqn5Ax6XdAaDQVdkgQgZZVWn5v1SjpjWE3sH5VRbfgeiXZNdx7DARcmeGEW6GGnyUaRerSmN88YyjQfdLT"
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
