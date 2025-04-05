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
    "35U3GX6mDf5GHADXwwYWCLTTzaTefS1ShTQ96McFKTk3KAdsLjP9jjhYLjN2w1j52ePbwucVA2XyxAbsrmaDguvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrFijKwFP38ASLoWfieBfq2x6m59VkRTPZsZvNpspRh4ySJ7g9Nw2ANUQZGVGggs3UsqTscnrDvrhSGTSwquvhA",
  "key1": "4fDNF6kvZLGNK8ktWT7fyAZJvK6aBDJE11QrtUNDruur3vtyC512SwrcYa1NcDeByFcyAxX5VCax5ZRpa69VhPbM",
  "key2": "5NYL7bvGAHzY2RUg8gbAsCFRQ9YjUTDUVgBTwyYkfMZVteRURUbMyWqVEkg7z1uBkaBR8Q8mNRtHfeqaYNL5RCA1",
  "key3": "phfhtwcjPjuNH2XKpyunvSzjogFwBUvmphyXQn7fERZF2qU1gmhYpJyEqnREXbew2LHXmhURZkx8jSHBVvFibJz",
  "key4": "2T8Nnw1pQVJs8ViWfQxdieNF9ixzTj9ukS9H59X9Q9EcS9zFfmuPUG271nyUKBassn2UCfaQ6UNxzFP6iukBu7LX",
  "key5": "4P4bPJtrybWWkZaC29Krhg9usqgWvYQ25vzVjyGdzbSamwRF8eXE5y8vh8M9uZ2a2EfkCebDCUaPfNYhocYfVAcP",
  "key6": "2vSheSMSMHFLgsXxz9543sWntisWQGBgty16zyWkHFVdU7jPipj1k8czufdVfmzV73Ggdj6ALEAMbvko3XKASDGy",
  "key7": "5AdUE5C6ybupVDrgLYzHm83321bqmcumsiMAxesmSD1QXkncn2LUsECbwZUrAHQg7nnPNotroPWQhoePH6PUwTCQ",
  "key8": "4TpnXMMBvZA8NDr9go1bqsXTXha5h4sfE35L9XUr7ucN2GNfa5PShoJwk4mN6r7v2ro2GVwEjRcVpouVSJpp1nid",
  "key9": "4TcnZZN4dNsHssB1HSoiuHguCgd7ecVHqLWwDjYEgtHmMjBz6qf5hgPwdhagupbyFdytj9mvZ9ytzMxQuvSwTLV4",
  "key10": "3MZnYZoNQJcpG7ncCCSZ1SbcuTTB3Kz2Nz4M1ssc2WsH7eQjLiT3UWSoMzDGzFf7udtbiZJZn8hE7XBQnVX4T3e2",
  "key11": "4CePZmtq5sSYcUnBsseXStzxQmQtejuP9UuMg4K9AM4Baw9i8XRhFnPFJbQmsvWje441jMMn7CwvrtpKmoDaSZEK",
  "key12": "XEJCuMeLEmWT34hYyMXpa8X2opjc7hYNFXPN2sWTcNGWVC22Pokwi2jGyqVH8dPkVCHShAnJsTc7K4fF1zGtivF",
  "key13": "3S8JfC2apa4TZjUkiyowSTgsyFj4bsupa2nEeukE2Wz3rrJjBZU7ecAmaPDjG1HL9KsJeKi1EsTRaVa1zdQreuwi",
  "key14": "2z2bzTySgt2zGA6hgazp2C9e1VgJbM6xaiB8iMz6B27KhGUJC6S5z8X6qrxwUV7ioBi2m899V5JhB9tJEWRvZR1F",
  "key15": "rmnu2YLu8448ZUd9mSPA3ZFsWx9RGxUpqhNiQKPZnZeE5Lr6psmE1KJ5eKZQnNidsdAmP1S6RYfzg7RyZghTJ38",
  "key16": "4xGPpPT2KqCeB3QNmPCjWJCJZ66MNChKJtNjqJcQEykuHmBpHfjLVJbbuVS4myG7CbF2PQxPDTyG1tL1N7Cwe4vH",
  "key17": "21HxBh7sLScTok6tH8Yu6ySPMRXewk9bSLigcoqnLB8K5B7wwDiQznmuyo2RZ6qft5yjbve2QdSd3M9cAuNkQFWh",
  "key18": "2h5TwTc2tdtKCrz1XhpGmPyF7nEdVx6SzZ7AJskNnrAj2tWi5Xk28UPsXzu6ykAS9PwGn9rNeLuDYDhuCz7Hikts",
  "key19": "5c4Y8q9cv7f3tC45SfPANJBeTwmvsJjvXKi6jcGv2r5F4GmsQJpeisRfpV1vPN2o1sUdFDZtgsehF6MFrNVQ43vH",
  "key20": "5G8cjYXj6WVia4XcRme79392JYyJZma7i3NvrQkxPPwMgXPFeH11hXubsqxZs9z5NqwDoMuqAWVSWGxXuaAUhtE4",
  "key21": "3Jfb5SzdjJ9dcZDkwHWQNYaHQC8Fw3hG2DugjSjeuS91o9AiVXc1jzfmwhSRTpUziSjm9tuP2EAYieLAbzAuqEjv",
  "key22": "2iZzk2HkXxV4Z1HSUQwN9oCnTNdLDdhX6XVeTB226rKGt87qPeQfgK1UKLh5fngZESm8Sdunp2vCdEeonwCJSJFW",
  "key23": "2NGJYSxrxCxcnDKCj6oDL1wur7cFKGrVMjRRHWY7JgKhn6GCNvYTXnEoh87EahV794ymo9NWsMdTouJN41zRYvj7",
  "key24": "3RSX2qeUVbdJqFPZVGbX6Zz8woLz2DiByPGjJoJaYAoLKpUXFiayozpfrNdKeZsTyKm3A7TH3KFwQ6uJ36sKsh8y",
  "key25": "4ftPLkMXzCUVP4VtmKTBsGw4AR6rB4Lptbak5fYoA4CgDsfNXD5jd8hFscZ1XXHKcDgdpZXUNLtKE8w1ex7bH6H7",
  "key26": "4ZWM7SmBgKbEP8WuFWvpUFy8B19dKqRGtEXaKfNyYa6LyxDtZe62EKAjKfpAKUQY9wgsGXZhWAvFLDt9MiRSNfQa",
  "key27": "4feaDcnkZpk1D9ZpvEMUhiqwKELgrBzQrpdS6g96qKpiSk6pE5d2QkzkixYW9ucJYvckiH6jQJNtXzzknLXjDgnL",
  "key28": "3C1k2UDxpehL1FPwcmnF8HPxkx4tnUrSVkNDGyawB4P3ZKbWed9STEsJVR35uWRXKZpLcJpWtDWnoRaygxF2jqnU",
  "key29": "3oPXPb1x9FZPgA2szPTBciyEvM1FVT838AFrbPkWrLTGdMSS7oNi89WZexW4xZQ8SJGD5C65DDkfMcztDG7RM768",
  "key30": "5Mu6HnnTUzf8KSgQ67h9JpdjbTtRj42vAKxeZR7W8yedNgznPRWYb3txcXvjnauLHSZYJxqyPd81EkGNJuxFfXY7",
  "key31": "62QsEVmDj1dZEFkHJ5MFyFd9LvLnSyvhHTU6sgiQQq9dgHE2bUFSKV3J87a2qCQDg8e9gkGE88pHKkfGutJ63THX",
  "key32": "486bkFhcNxhiwQD8wxfSxtTwPTdUuxXt45aS6D8YoLKMQ4Zm8B9gkjD6LMyB8fABd2R4cS9EbicAZjxs2viTQmi4"
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
