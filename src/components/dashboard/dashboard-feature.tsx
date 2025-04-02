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
    "4TYKZfJjvSrfb2eopvQpZ2n1hsnZWzDR1LweXKHZmuayHfFSFuLgmZJgidpyvMfKmWNvyBo8C6Kt1TuMH5uPkok8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g7kMMg3hvWweU8wKhfDWYPnkULXivrhwnntKEKUwGfes4Z4t3VZPNqherLAsoEWw5fsXEpXdc5XWtkemWb2L2Ku",
  "key1": "5nNAruoB6EFb5yryQ3JWC4Q8v9K5cGuu3xirFhnBiwW6oAJnS4KdpsEpFV8t2BXt5RUuQD9NwnHkPpxSVQ6AW6Q8",
  "key2": "5m97hG5EKVN2xmN2z7rTMd5vS1FRNHQ5uYVLKTT4i4k2Ls7bVJeamVVeKDyrJ6c6fz8xnJjsFKAUJL5hYqczyBsw",
  "key3": "4wWnykN9p77QNePe3HCsW1wLA7SvNdyoGUTAekVnw3ssUroz4VfGCi2Pagy9WvKATp1BGGSEFwzKYPwnnoD9QMhb",
  "key4": "2HikUjwdVXr6ZjpTVYjtSt3JCLycC4QtPNBkkFfUo5cSHYo2mrpAJwk9TTtoauzZtCdJZE8yPakjet2Q7Gj33VQC",
  "key5": "435QqxVcVgcDUPNZ17L4EC1KPqo1qr6exCugSaRfEq2BS6oavPaoxU48JZaf3meEcDQCwM1JuUSH1gWZxebz7rP3",
  "key6": "4i6rXPVR4JZmjsz1hvPitVdEH7vdwaSzwF9YrPYp7Q5DL1v8uACyP4sv6REpYQ7yFRHF2ptx4RTVT6eTk7MK84vF",
  "key7": "53d3xHSoyWE8tn1Rayes7pHGCFvzJkVYJmf6czsR8bnqev6wLgHKWctiEe6k88Bn7hhVwv8MXSoJhKYnUtcrqR21",
  "key8": "2PqZQnZU74RnjjJGhza8Ukzi1BH7FwaY3oG86MBsuMvxzS5C6s5eHczJDcmRmehs3BiifFFmVA3X4erm7RHKfZze",
  "key9": "2Txx7YKe2YUw9s35ZwexBqQWow5wF45DZEqDzBk276pzH3FGRy6ZJs1Sb983RzscEqwkooPEqZUBpu2NZzhTh8cU",
  "key10": "2VM2LN8bHbfmYpAAZrkS1kHpjA5P4uh8Yr8e8JBjJas9z7dz7QZsLsdxYtvUWuXB2gYkbbyMfUx3RCSKBJ6wBCPk",
  "key11": "2oqvF1sYaGTqrriaoyxKxrdFzsYLj2QUeqF4SN7sZ1ykU4cbKMGrBstqMPc3gfavLRLNbPeTtw3eTsVnPEM3fXuH",
  "key12": "3rb3hy4FXEcZY9fJQjAAstFdsJ1M2HXNyCESBLUk45rAGdY6wTaeHzaDhGJFy8kviSyzZotrqjBZCtU53rRpkxHP",
  "key13": "2sLDDmwU6v3eRt5J21h7WKbXvsF8TkejsaNwu6UbGRmQa4exLNbD35yqYq1F6Vn6YBFthy5F9Pq2Frn6XLzGSXkE",
  "key14": "b6wWg5h9EFx8YgTa4P3TH6zPhFyy3FMTo15VXrgPryRPkMwgqyf6WUeXrQHUnwrBWyw42fLnHwN1WyvMyquKowb",
  "key15": "4b82KX1SELLwoS2hD5rytap5yS9Z3Vw7QWUNFX3s1NW18sx2Dzcm6NqAsuAEN8GtmWDZWhZ6WyJfkG6p2garuyzD",
  "key16": "2PBufD94UnmAJ2xpb6ZWc3gGY9fWTrWh9MmuUJGcyRWJtKLV6zj3JSc2eyBSqqngs1JjCZCCBcw9FZhJVNeBVuLY",
  "key17": "MkJK3EGFBWx4j2HJXj88zYf9eShjoBAbY9sDaB4Ledsw7S8dzLjgxWa86R44bfzu4qTjD9krW8yxQu8TRSqoyCo",
  "key18": "5TS3bdbi4RtsVobvTbh4V5HjPucFzWa2RARYfypnWACCX4hqZiMde5YNr6MeHxJerz7pnz6t5NMa13CputCRWWT3",
  "key19": "337kCJYUgUVuZGnmMF9RAuyvEC8H94bnxgXout7qHiAtPDEjZVFPZLLr7E94Wod34GJLvc7ov24RsStHN1WRpjHS",
  "key20": "418HGcYvbS9Y6b4S19wM2NV6xhTWy6VVeRj9E3EsHuWUFZHMkog7t6NqBABv4jRdJ7GgvdYacvGyxX5KFGshfyPi",
  "key21": "3ReT89KhHRkQ1HEa8jPFFn4TCJmg45AMyNz4PUK4QZ5gxoh9k5yvneUXwifncZc8q2dwrm1b4DrXUg8kpCBDnz2a",
  "key22": "3gaHx8QpzqupNmAg31xZnFc4p1ukPguaefKZmF2WWhw66eejtWxXLLHwgCma9LiXk16tu9F3cogYs35fWSPedBmk",
  "key23": "2RLkHvXehNhH73b15Y2dL9Spufr9ZWMGcjuBriYKSy1q7KJotMocD4uVSNwNcUWQUpqD7FSyRMKm2Z4wsqVN5h4R",
  "key24": "4n87nEawzkTySsMms9t9LwotKYrCS5gPJqbfBLTJMEDpiMeFFkLFnSnz6UBm4fURaJUtTG3JCCHyyAkPCxG6rrjy",
  "key25": "3EkZjDY7XLNGpQNjuYrHQB3fRgHc8AGHcssiwXMudUBTezYgzjkCfwVWtt1jYwmEjYFiRArcas85tMgru5BZM2u3",
  "key26": "4UXF5Dt5HpjVd3TswUiFPHGYH9eMz7TyMcer8aiiWhtorGBdQiQnVYKWy9AmESFCS51yLmnRM38mHBKKReHFdgSG",
  "key27": "3mnEBRsez7xy9bLp676QLqKFams4eFJQH8UQHCBvH8Jre46DGKi8JMXf6aBMT8MJ6DozAo3YsGhips3oB6jehj5y",
  "key28": "4927MvrWz1tqV5AsGBi81VK2UtczjfPcNPFgWNXvNLd2bgkQMMR3eZ5D8Zk7ThBQrzx9szXTFgfYVNB3hzioi5FP",
  "key29": "3LpaTJagRc3VQbCnQh5H3tGcmXJo2HxGYM4Dh8ojYKLxTSGyYiBAAgkBDe3PeL5gvUSUyY39khsub7hLdXU3h6q3",
  "key30": "5RrAou2ofV1KGZXNcjVhz2bxDwpZim8on8riMX9qranfnN1FXiFDcKrusSLDAS72QbKTuFM63QPpGSWFSUd6jHfn",
  "key31": "5MRTqzWGCUyH8VQvtcrXzHfHkyaW5NRKhjr5CbZjDteQCm9yrKRZq6EyxCzDhgz7YXcu6BAM1TjMy1SM11iQmVFM",
  "key32": "3UFCF6RESxaxnvc4PABZZiqYnFboCJKcHimf9YVbSUdrQyQbDYRaawMBRDXiAHNpNqFVNQ9wcs9syEigrcppM2zK",
  "key33": "2TosNp9Dse3nqX8E7GWexY9VpkcLxwymcaDbWTjvGRuEwjEk9EKmvne4SBtakMYXUsFiCYpu15bf9mi9Q2vUbDbw",
  "key34": "5bBUpekhKSUVaJbMVjNuZTHris6BPoDXZ41rLhWaUgDeUDwg4g9UsvtHH9Q5qT3jZ4NqjfsG3GeK6EKXRYtExByU",
  "key35": "2SdYsHrLjVdz1tNBeLS4o44ChnseJqNQQDjazfcFJdVeaFiHQcZVs6PBASw8ybNYhTy6SrihVQCA6APSsCt1imyC"
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
