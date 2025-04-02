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
    "H94KmCZypJg6wmCZup7a2NgjvctekX3THJodYEwF5F3eZhbwfUZUH8morKZ911kvRL2t5bNM3rEBVHMrcNEw5dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rk475c7SuuQQhZRf3CXfAbsd2TaaLkdmwGfzj8h1qWaeB8kP5YckZT6KUbpYDwy4XxGAEdUgVmeQWkUfX4HA1D9",
  "key1": "35STSfFCFtwMdoE7EYzJdKbUWujMPaDtXaywuCT2zaTsSTzSDVMGQj3N93FAVB4qEmaf4wnAFgfRCz6Jxe7DhQk7",
  "key2": "VnPHP7GvBfofFpMXtuRvjwC1LSLHXcwXnMj7Pc6uhHcU2Gtfx6Kswou7sMByYq8Z2rCnn5vL1fVKNmzu36fzpfA",
  "key3": "3ENpAwDnsQ4eht86fk5FgbuTzyRRvg7osBffiLK1sJZTyj5DAifxhjKCav5Wb7mxyXb5wiAMiL7YmcNLy5gE62u5",
  "key4": "5dtt94AfCqWTdQgLZ7vYKXjLDcX6Y5hvq1SgFqetFCa3bhq65ztGr3oFPSc9TaiUHPXdESvyVBniiCE5wXRqb1Cw",
  "key5": "4ou87cuxweGZZ143kvp5yuxbS4z1HnjUPjQ4cqJTSC3nqcnsM2Bt9V7ML1PjiPawsV9GpLwav1kfZfvpUz4spPB3",
  "key6": "35LtiQcJfaGT8m6mMhp6com2B3sA7AaZvDyyN2AWN4TEsu1MgABvCTWBvk77BNXARzPV5dKcxSDjvaaj3EAR89GH",
  "key7": "62xqYZV5cXa9qymeTfgrkhi1haUV8N2W8qDDYeeHeoSUjyDpexXfnCxDPmt6becXo5S9AyfGqT8yvazVEjaHbzTU",
  "key8": "ki1EPaTeGe5oM7qDVFjguJ717DKPYo4UkdsCYk4GZsakrG3aJyjdQ5CjQ3CdkU2hmiDGtVrqecJHPLgQy6qeVAV",
  "key9": "4Ls5Vv45D9PNcCzXbLLwxrQKh9hmAp1VeQpKPGJkuPFEWB6kJKdHeKQGHpzb3XDwvD9NYH2GoaKRwtxZ1DqeuZTu",
  "key10": "4RwFooW2u51Pz1vQ9Nw6uy5Xx6B75dkZs78KCRRVjBaM9MzrSu64SckmDChKdVDGwHh7kUJgGVBoB2zcWzPAsUch",
  "key11": "U5fPuS1jj9StgshR7bek2LJAJtsPps9mcyLUj6L2caB9nb26n6Bggg2LXp9iwUUgP1bq47ChLt7nZdSJcAGgCNk",
  "key12": "31YhnXcTJUPJHwq3vYQaUKjF7PCsDUAsmisfbp4KhQ2DUprHD65tX2GeG71YZ6RUi3FCSuWtqLsUmd3hAEXkkSSB",
  "key13": "2VtHtUydtf5sUr8yJB43YqiaqCqLvSP1M9evPGHbEzNEriFfAdMSYtUu8D9ZYJn4Ly7FTxKriSdmHe3kMi15fVXQ",
  "key14": "3vqrAYbfRLn4x9YuihHVYjm6zWK1LSiSJbYSyRkjwNDB2CmPi8ThVs3W3KA55me3SbKAT5HRgVRzfR9g8h3WuXzG",
  "key15": "pMFAiHoSEXLu9MCunGQLdXj1XjC4BMS27NqQLT2P6Z6xdezMuLfwD8iD31Skk5HgUTTScXYVnBn7p7hRWwAe5xH",
  "key16": "2tzzTF2hRkR4a8crcYDdj1wYe7f4bKuDBk7WdBNrJd2cAPrmpT4VoNJCMr9YJSVxm9ovd633Qk4Q2ervYmrh6vSF",
  "key17": "4Eghk5rDpNSUTnvEYAjpuAtgJP8Giwp5ThbndbP45Ngi4KrzTYBnhWbnsz3xNjmumuVyTt6zKNez7SthAN5KSh6e",
  "key18": "3t4iUV7vDHfBz6Q3nsXHmjqEyhm1f7HSnTdwnJfyXiD23Fad9uhC6WkziLYdrfqpuS5DFLaZdna1sQNj5sdkK4e1",
  "key19": "3KKdSmfYP5inJKqNBZdNKRqc7PaMNpafnEKk5VVE4Wko6WBXPDR2hmQU1WdRa7cgzp92PdNjz6UZcQ741YLPbXxy",
  "key20": "4JSMZvz9ptMBd2E3g4fqvvUxuKP7yWLMBqY9eqPKMoacRb4ttZr5e4SMJ3JCnzFcHmgAvou9cczBEwZtfJyyL4xj",
  "key21": "hK1rNV54W5wGKuP7shDpFatqgi353vvp5iYeMTR6bpNZ913gArx4btMWXvESpAAkJdrBe7QZNJyiJiySSGbWU4m",
  "key22": "q4ueSTMALQT4QSsWAdzTGZc9ZpCQPuA6sstGnYL6sMGRcCkpZMtnASDhpi9Z5ry1RacDEmFfrhcPCV99NEhw87a",
  "key23": "2kMz8Vx8vBNAGmacLeyDDfbeVJWRSHF58cDEXoA1Tt8P2sztKuShnQJWyN2wiPfie6Sj4AmiFYkqTHmzAyg2c7Fw",
  "key24": "2xPrhRzA3AhF2uNQcJ8kQpFheUwzAEN5kAVFdizq36hAtNW6hK64tBYQxckezL8XKt49JRdjvkStYtYuwwkAJozp"
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
