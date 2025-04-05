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
    "3JPjRWAN7ZzckNr1wcsQmu8ndmUsGwGy8CEhWXLZCYpMhwojuznB3RtdB7EWrnueNBnJP3xKbUZc7rhpt8ySeDCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NhKuTdLD2Th3mK3k6UcceHimwcbAoAeaAjVUzFvdTHHTJUE8t7okKDyT3QpkGdQszhhrNgqPgqB6oHai6DFs6x1",
  "key1": "45wctE22UwH3nsceqcteUryyFJvjnadWCzJhTBYVKLEBQEQm7J4roUALC6iFZZJYZ6K1DCgZkqpR9e8v2AgFKLKk",
  "key2": "UmzPd646hQHPX1ritb1vX51HMaPdeyhoho3xhGz8kjZorsqmMCJkyn7tiDyitEEsr3xqLzxUoF3dJX53wUJu26r",
  "key3": "8hqAXTTVPvTMZWaozgFqBCkVBWyF4tk1sKFgBekJdLtFJegJ5Rn8gmchzeHRusg3bGNfE9ZugzgKSaNQ7PEhpSz",
  "key4": "5DdPLjLK1oixSQCtDuF6oBgpro6hGp7dCFVM2o3yxjjuLHKc596EoYicjYWpU54GB76Ev7CtDNeaA5L7r4auWPfs",
  "key5": "4RXs6UMhVPjiMu89shJek1To4vkME7mednw6XS5ZL6Q4r3wYdoEk3kVyku9HJhC4jQvjU8GFz7G8HFATSMkYcFQu",
  "key6": "4jeeNrYP2zxTZhjmgGJB57cLUqRnz8azHg4cAY3GE1ErzfhhK4Soxo8rHqwVyyp1yX5JCXaDtPxoWAYKDVZP1kAz",
  "key7": "9hFA77dC5DBHGrNMvwSSr3TtATmUV8KCPRr5UDXe56g4MLWd3gaKzqNiNK3c9aq9gtCT8WECrNKFdE3ddRmkaPC",
  "key8": "3vSSRHW8UyxUgYFsS7J8RJa7NVFeBxVfFkWaTxLfJ71vJwSLR8GijQfz6fzb48H2AgaxrR8VArTbEFEfALVcp9Em",
  "key9": "5Lbf9tcQwVHBg4osfhDFNfVdbCuhJ3X2nWTfRSHaWb8fjHk5G67zJhCdDezeeLQnkfqWZ1UjaYiMUixrHwUFFbM7",
  "key10": "5Uxc59RjXjmz8DRu71NYZ7mKHextKTofZJg8vfac3sFaEEhxTLvFeL1XfVLFhm9uhePqjjTMxDEQNWoPGAtCjakV",
  "key11": "2xewjSMKy5NmMtEpA47DbTNnvfxj44dSspWK3Fs6D8yayZC6ZZN2R6BEinpUMbCNhHwcEYekJT6db4oB2CmpnUnU",
  "key12": "5TCHwyzKrdEKHqzUqB8xdK1eg4YZu46i46evnwLRTDKt9zC76qLv1qvoptL867G5Z19TZzJZpPqSnP5Tf1Scw5FZ",
  "key13": "3BkWootwJHLPaXu4mLAxo4ceJdLvNJrv8JBtZNt1fiy8bzKvgkPV6s7ygULCgRUqpJr7wtSUUeZSSUB7m8Q74qNB",
  "key14": "2TzZHHpnpHhg9ZmN7xSA9NPSFAWXu6AzJkyLZ4YGry3MzSeW4jVT1huYeAUXSYPnt8Dz2zP21xCELhw6Wk6MCcFU",
  "key15": "4YdYkHgHggENHrChucYCy374JfCwu2qx1HTcw2HKemkYQMAMDv8JiShCeGw9zuB5tk6QVwzPJpGKjxDEqJy6osdb",
  "key16": "UH2WKEjiUFejbeBc4rDfTDoqQWToYKv9oT2836eqT65B9YQCK5puBQgXP15c5vzZE3xvqRPQ5jg1C7q9PGvwoNi",
  "key17": "2d9ycAiL5HAqSGW3AHQxAHL8gCygdqBZ9u7ihVuK9KfagvmquNMK2FME72hpVzSzQ3bDMLfyN5pCUAJHafW2Trtk",
  "key18": "57yqYqACiYgtjYCqtAPFNDPXTf7wzFPkrc59q5h1HwguFBTNS4T6LGRdTmduQFSBNVn72AD5wP1HzqAvneUWGrie",
  "key19": "jZByTfq2ixUCKy9kwippqQNGqPrtYLFLvHFrXuVNA6fLS3if9dH8ujrF5Zk5mAxBrxEZSdAqt67UHidZVLv9HVb",
  "key20": "2tkaY6bt3e5G4nXbZbpYm9atYYcXwcyPDmWhqXA932jMFVGCts7sTHEkSgs6hrk4NM9nXysxay8c13W3kdHAPaKe",
  "key21": "3UPoqjHA8KqeWP6KvBxNtftEHjuCNRijRENYadSYtakdKkEVHahuuV7NotwDMMUyRcKVZkbqdV7KTpTEUoLbpPLa",
  "key22": "Sizpx71LpcUkAWQ9UZwzXsXoinaecGtc3x2fEUxELsq7ZEHKwmxM6X2YPyTigdH1YL8TnmTrNUCv478qkMpdAZP",
  "key23": "5BH1i7MRonbnq6vzWqWEQaGqp7JffJ78EhAFWvTvGoFfEdq9muZdAuXfdpXhEvvFrfpJqP2qUXmyxzSXwuPmL75v",
  "key24": "5esdrGXf4HE54kKWb9XZfSSSxXNJruW16sgHgvmDJ1TVtVbLGwHZZeVu6Hm5oUUfEjSTyF1HWs7HBKNDHi6tiQjL",
  "key25": "4kFfZ8puQN3NBUgMKFAGY6ay4rKDdcSFTuuw5mVHizAiRUz95NvBrUkYdjWXRxXkDSjUUxM9tYgobdU6ZCdxHv8e",
  "key26": "gUif6RtNvFLt4GTGamgDtUDy7mnFSPhwQuvAxUHfSwhMAYJ6FLvJ25K8qAJAzJtF1LC46eQv51GpYi3NNMDDxkQ",
  "key27": "2c8UWsAizSS8cnfrZ41dTt3Kdedq4wa2M5gKcq74byNz3pXNLDQ1gacpspEaWUpatGHUN4vFhsLKcUVacAzVhaJw",
  "key28": "oFkrrBXEncL18MAupQQaKoEMZun1L5QLeDTgiQo44MxkUrjQUKpXgCz9KWJVVBeVjPMCwfD8894xx3Tub8CP2cN",
  "key29": "4av3D9vM48LsCHRmsAEA31vNdDrCXKSMGtkCisjSCECDZGPjZETTDKvEB8DNK6w7xieX4NnEgNxBYzNk1r8LJC9p",
  "key30": "2sdviB6nCb1Buu49T7UmbhGX4bFQijGV7jtEz1hiNxEnLFSqQTQVwg9PhZuwfCdREjX7vummDPg2WxvtvgCe1Txk",
  "key31": "5YT7wEhWLm1qNB65zgMYy5vEQuDEDuyuDU3EaTWxgdwkwNmjmxHbMnhr94C7oHq1mXo4Qqxh3mUDfpZabEuMBfSm"
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
