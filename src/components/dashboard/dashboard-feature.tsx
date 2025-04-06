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
    "fVPnZ7tJv1TdqKvGs9Ru76MwHdi2Gnti4KZSbPMoGWVBDxuKoru95aCGmNJ4xFRwSA5gkcBh4q89kTuCLc7gGx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "564bQWrqTGWHPeeVJfSVrH6cS63LvMsdb3a1VdicCKbFh8UWhpsDURpCn4dMQCgvnkEMn6xKPbP7n6TTchjZsZQV",
  "key1": "1UDih6LZsitUKRsR3pQMKykdMYnh2kyWPMXM2Ra1ziBT2xjHZhb8VGd2cLd8Y2Cyj1BYRqcbSqWASF8VcD99jf3",
  "key2": "5pj8WE8F4hJK5apKtxZ3yjn9Z571jDzPDxhNdEWyGMVH44uffxE7pKUx8yYGzpKWRwPEYELeDgZEUdWEgJch5soS",
  "key3": "3RQFZF7cGXFCN4qB5sQe1Z7kzqoeQUe98XHPJjBGpK5CQ9X99vboTApEqREhuTCLD42zb9rxnqsKMUJDVT66jfQd",
  "key4": "K1F31YaKKmrgSfbM7DfECHvgg4FaRUgpE9JpZejpJLnbhSvWLCtUmaXgP9UzgNV1YH1BQvkPVLBE273LKaaMh9o",
  "key5": "3SNqehYu1K1KGcKLzZLhLpwppvzBFWsESx3EGF3ku6ixwTXyLsK4nCsspZCm27VdJJFMb2Jw7o3tmEyATS6Vm4RB",
  "key6": "3kNqg8DAcBDv6So5osnMxSByBEj5eXagjvwwnvw21ddHPDKYFASDPmCdA3eTJVjeLd8qnh8feegtR3sCYsm5gNSB",
  "key7": "2L7qin8emzxRT3CrsqHnmAPMy4rxDUPASJnUzQfcHr5FzJJBvhquLPz2yReDAZxNzqKrwqhgWvzUKxg5w6jzSRWJ",
  "key8": "4M68R5Vu7vMros9Ua7gGPVx3LwcaJTKcbu5RhgzC4bPVgve9Hrs6AykGGQPjdCTAF7gTBPJ9MHgMFUf2KxviVJS9",
  "key9": "2GqDNYpyzDTtGaoBakc4rPoNycHn4GLz1MCVYf9uECh3Q5Ak6Db2dYMT1MYVezhtKi3KLT2p6BpFwVge8363XpZ3",
  "key10": "4xNhvQifc14LLZYL9LdjiT4xDAVLGfx3AQDH4aFFAqbUzKE85vG2jPLyrHEr4vGfgVfjX494zq2xgRqpKzRJXdPH",
  "key11": "2n9BwWhpRBrzrJB4YdLbCZZiRGbc19stqNvLHbVrYTTc6UvSKGYtdHfWv5or7ac1jcSbE8DW2VmkEebMZbCdRsUF",
  "key12": "3TDADZjLSkNnF6GgDmQyGAzsH15iNwE5GH4dExoxpa91UVsUftb8H1VMGNagnkeCbpW2CCV63iSJNPpgUcaydKr4",
  "key13": "5gkqKRiwZwDacTydA8oZkX15Ux32HgjEgYALmUwo1yNcay5UQm7NaeSX4ERsUKLenv3fJuPKMEDD81HNSs3yVB47",
  "key14": "3AW4cEBzxzmD7uSNho93LkgV8uqRDiMd2C6NEWHtqcnAXHotkfqWMGQ7egdB5iUeF3qP4dTi7RzH4h1bvV8USnAV",
  "key15": "2JDQ4fhoTGrK5bq48rAKuyvAe61tusBSKyJGD4Cbe9UHR3Ly7hccGKwZTfAbjWGa9u7bdgHckLeRnFQCqyEzz6hG",
  "key16": "4AYCe3YGLZntt5QXctLVBgyMNjihTyfmk7gBst65AQDvdca3LUt9HkSL4n8EsttacSCVVTKXX7rVoxvVXAU68Zub",
  "key17": "2D7FfP3yBRb2S9bBQKDH117VLuRf4MxVST2RnnBC5k7LUo3CJUEPUsCuzgACT7EgGn3rnVhbcrWfaDLZUtnDEbsb",
  "key18": "4xnz3AtoZF9Vfry7MvTgS6FepiPJFt69C8ELDJn8h3N9GLEhwBdpBCSoT2rTLxYGFaJLpdTi8AQnucVgjgyfSEXV",
  "key19": "5QjtyuyLt4YAjk6LaqHeGwHdF1nVrARAEes8sBZqkcbWnV2PVqXn3rTwQdoQWkXjw8yxcVq5GBMhVQmzD7c3sbJ9",
  "key20": "Lo3K13VdFp1qoQSoMRwLYEzChgzw5dD8KJ7ojNGzLGJfCXS72QFBBMv3iEytzY5e14vB84uQxeGgadsgaMWsvEw",
  "key21": "66ZecKyGWaYvSVmEctLPWJigDg1iHbqmpovjavsxvnVMR5Xr19ZRyHQHRrTdnHLW42qqgsFNxD5ZqLMeWEjui87",
  "key22": "3E1D5tbjLnsNDwc5wnXNUbdSeNDdVTqedKemxT5EQGCsec1MW3mhQHTV5hiLCBY7DdZ1PSWH1zzbCypuiFskLpBm",
  "key23": "ejeyQtJGBuWZTpx7uAj3vdxVU5dGz5FDaRAq5r6x5bFNRAGittphcEKXoqdAC7pxZZuJWRiRBx4tdXJ9sFuFMLj",
  "key24": "5iASfgGLCtxUb5ZVPddVWfPVZ9M8dpXLExwvDdQmmARy9xkPMXK6veJHhxjCbLvXrdUSCnEC6TxkHXuewRXVa7nD"
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
