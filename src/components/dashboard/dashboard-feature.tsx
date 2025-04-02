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
    "2F6j9Jo5ih77i6CMkEboYCfwJn9EBt9AzHPZwnWYxCrqKfagqR78Af7NfoQDWScDAjbkWKuSWa5WRfzgmmqwLhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djCPXmHhtT7NtgCPZeTsXuwtCWVEo9vQyu2BD4rCv3yW1sgFr3EJtNNhjnE8Ba52xJgQGGkKBXR77zVRb5tr1Mj",
  "key1": "4HskNm6uDftcP5644FZTsAuoLQDuGwBvxfQLQ79D71R5if5o5Fu2G4iSbYQUxk2KMFU8erLbuKmHpZWDiFbcFuvz",
  "key2": "51TzZDyTEmFFU3GevmE3YD1mCkUdcug9s98H1wZGvuNdx2V2FA6acCSpoorqa8ZdFjnFeB4n3wqKRVyf3w1VevFt",
  "key3": "5Stevg74igTBrZpnxytpj65vcv2DNTnbgT6jAWgewhpVjqYbjWWoQU2q95izSgWyGUoCNWMAeDapfGfBxJuzsDK6",
  "key4": "2xJAkNoqKK2WnZv6hXJS4CXpNSofYJTfztS7XsvvucUkEn8ni2BJM8TbgLAptEgt7xhXQsyiEXYsmUzdsvfuJBTs",
  "key5": "3zJd4vvxP42rob3tH9YvDRCu7v5JhZQa6d73A8wj5Z6f8btUoWqKwqP3TZZPtGeC7M6ig1zCiLNMBoYn1hhaMWUU",
  "key6": "5rLNM8U3csYqWo1ugEQquU1F3MdY66ayH3XUAowPdht2z1CnqgsgGnx6UV7VjDpwL9x7GG8n3KAzpk42oLDZSxfs",
  "key7": "4XA4KCC3JWKhwDRXqZidB6KsWP9GhuJFr7C8LRrAcnNbuhNydQiEx1HxWHkms94kmGULxrz5K7Y4f2vfNPHFcDB5",
  "key8": "oSa5WxKN2LxAU4PRBEVnL8WpPSW6hzpmDn4Za3Kyw14yemTHNyW6SmTmhaCsmzMyeNXE739S12Q1ae29PJViri3",
  "key9": "51KDgo8tuBC7cXa43Dfb94zEzZnATuwveHEZ31wwE4qrBuM38McJiAZcPMgN31AnPQKMYNW8ySzLBY9bQFQ3Gk2",
  "key10": "5iBntaHx1CeUAH8QdSUNqoWurQzX3fTrWjEJHXUQNo4vcGf2w7YQw6YtQhLNufHfFXUUNZjh9pe4RBFLqULjDDTk",
  "key11": "4zjw8wA3wyvLWY4Dwfk17uuP7Xm6yPptEVuGfyAbDHBjsoZetpMLrAVThy1gHej3QR73BH2Q2KZxpYAdCGL62XUq",
  "key12": "3BfQ4GsKDHcf8geHEJA6Xk3DYVVNSjDmRvpmZ7PLZMgoTeKd1x7Gn8cwv797aCcwGjgRbg7SGiGAG1kmJsor9sha",
  "key13": "3kqUK7Ysbt3RJG9xRUjbJjZ4UszB4AkwNJUSdW9ZXMsCDU5Fd4eLV6BnkyEhCkcemzQ9PMMHwHJpo7YhWeSxmQqZ",
  "key14": "4q1fPpJA142em9vE3JVr4wbhsJJNAwzk8YHyRYLGYaTaVYvPuUQunYXfShZHchtL2FEGwDRMkZmyemiiw2QcA3qk",
  "key15": "5Rt7eGFSGHi8N5sMHpZud28zuKxXZsCJoh1ooiyf8MDpyBiGwtEBDn1YHT7aA5wvQZPnZquH7m18F83ujd9AKRq",
  "key16": "5myoGm19vbRh1hS26pzQfj8n7khnUY2pnx3CPNBKysgCz22Eun7QnWJNndDuFmqwd7RiqJxa1MfLvHhtFAm69bTN",
  "key17": "2VAzF67wedy4sQDkzxVJgDJZkjwAi151xkwSEWCKfCV4B9U3y1AY78SRTptsxjtS6qydFKRysP6UgyDuTUcW36zZ",
  "key18": "3nQHKbPabK9M3ifMiCfFAc3wn5hbu4FD6HipmyfmXkips4yPv6SYwxzrdrgvcsimUxJkaHVxZNfvz8QB78wVbaDB",
  "key19": "kgwmqPNqQ185UEtScqjrxzE6ofV2gMb3jQW7UKYcXN9xLV3HD9czRtasdUTy83bxbqHqDbvEKt9kUUWNN7vg3tE",
  "key20": "5amZqHeYgc56VuE5aNRweXMojxvfYkRFidGhJNyVpeCqRZgLo881HeZavhLoHMJNPmKhAq52SSQFhJC19jcJmd8x",
  "key21": "4TJicpkEHnS14WqejWveeGZjo51B33QhKSSYQrfvvVBN8XEoyMNcEgCUVDnhXhwKEEHSX5FqD1ALCArRfW85r751",
  "key22": "4o7W2g5xRuzPWD5mDegzDiYKcadYWZpRsxB8dUvSSBma9ZLm1kVEsqTNPdBhvHj89AuuzTQuWtJN4NFZ2gitex85",
  "key23": "xs1fXTD53X7PL2pSAGmfCgAfQYDrYLJgTcAE8NUkK6i85SmcBcQQ97RabRcp523nGqmJgdbrPcShE4XuKJU8R8M",
  "key24": "5xf9Fh1PJoR9aEXD1Mw54ZsCWBGiQURZ6P1zwrgmNtX2qLT9j2tbQ5JG8iweiZP7uXwVRjHTApFa7czy8FmsD4ia",
  "key25": "2JoWwCaE66LwNg197L6kb6hP4a4RxL5rCnsYEbrFQxr231mVKFkxTcrpxkKAyfTienXLkw7t8Q74BDPZLWcjeXmg"
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
