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
    "5JueR7N5D5in6wcjN79YFWpTuy3v1TenuJrk3HgiD1MvBpuPepWRKacF8a2tT56u87c8M9zyUxPbKsFwwPBavsnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kU39aGHGeznh6feWxAHxVDccSMrWa5kLqZGRP6UuTwdN1cpMoaeSFbKPXAF5E1r1foH2k4Y9V1q3uX2szvEpnqv",
  "key1": "n45PeWFFST6aizwKmYNU3CH32nbqBVRaTn8XLbzNs7XApc3PdKmJTRxq6riUb7GvFDn1xZnKga24mAUVguEoNH9",
  "key2": "4yJmTJ9ZaRh61opKLJxbWex3oTc65KmyNMpcNPgtWdYcdiB64gkhkhaL7ZKYwdfRJFzEpd6HWZckX2zm17NKTnws",
  "key3": "2Hd8Ps1im9QQGdbvXK6M65aCzR4S6rDvnYuEyNvVj5BakJotLsvZEwBAUVMbPX79W3Vo8jQ47GwFKgd6dPUKqq1T",
  "key4": "5KvkLFt8mdqLjioY1vwShpEuiho1N9vqd1TTU3U59qDEXn4DyByayUds8RnJq1egk9JGoT1NJhhxtCMZLJecS6Jg",
  "key5": "5qScafbLFLJY2eAVJe17CAv8PFbmnno7t7LCEkJQddMzrefDpowZ7xf12zp9PzAdHSBMy6Zy6C2dM18ML6bLq7vg",
  "key6": "2uf7xDWRX4rMjVkbCkmJUD4LF4oodMhuq3QFQTgU2QK6G5f3VCENP1KBAv8KEwPXs3hBab3UMqzgFfWem4RK9gzj",
  "key7": "5Kjn6otkAHDztChjYmYV1zibZuvqLX8wUN7VWwYGAXwJbP9JkjV33B5gvs26LcQnEPBeNr8QvhR1xwGEppnL5VYk",
  "key8": "3ZimLeh3FhtH6afktMCuefnnwwt6bjDqB9oHHyya8c8Y9TpxoRMaRMoKb5hwrpfwkPva97NFTkF34tDMfXZrYLoZ",
  "key9": "4MuXw1xERmWpLrBwW5UfB82CfYwqNnJjFEvK8Y74J6SFHraqpMATnFGLQDTHrhHuRU4i3aHgT8ZKvh1ryfT5wBGq",
  "key10": "3Udqc3PEga3UVWTkwHGgkLMLDxWurdTtCSetvrN3cj1mrmEuk1DGXwd2nwgDq71vhWwmwvjoVoy6X8e2uaZ8XSwD",
  "key11": "4tTq2XYurYMeRiigMR4eTpnEJdkKXuhBjw16aKvcQvUSZtY43zA3vLmUexLsRCzou2NXzHnyAeVqicnfQ35khJLj",
  "key12": "5sseo6Vh6S7g12CwBydG4wk1JkQHn3LL7cSv2pZVGjr6NjJPirGA98DopDpUBPDG9JZWc7iAkKpoS7hANqNi8MPL",
  "key13": "43P31gfGxVgH4x93c7s54p8mRsTEhFtbGK49cyzgK7qhVqsDnngmoNgnsnUrjFG9VgtEcrZgfHXeT3BYnE8Bxb9G",
  "key14": "5tby1LkqmLAVbq5Xjj9U6jhStw79SyrbqUqc289kbgz8SLZuJMGd8FDwFTXZRAnNohMmP3MeNkdqDmdzfzJaTzXj",
  "key15": "4Mchn7ojb35NBbtpNyDhjzKwGKNChNPUazKsYpPemvKQT2CANczDp8tG7vR8ZCkxHoDvkZiWeZN5MUVfANRCUxAv",
  "key16": "4dmV9mLKN63X7BEk2p47rcPZSovi2zNDE9JVfrVNfrkdbqvZqZMjQVYRDMPKmnpzymGmkNTN3UMc9a5qeqh1SUWo",
  "key17": "5XirJBbLtZowBENvD8Aw3x8FNhjaVShZei9nYLvp2Z4Ks31LYSduZZMTqj9TUy6P2MndSnB6Eg5ZyzE8wxE2Swv7",
  "key18": "5FBaGPxQhg8pT3ZZtbFNDodaU1ZRdk7UC5YFJA2AwkQowTNWa7Pi9UbRVzjwrT6GTtYY52FXv13eULBq2W9pW5Sf",
  "key19": "4szmaEcrrgDaGrNkHVnieiy88cyxHxE3XKmEUoWyPzkz9663xjcSyPbiunm3aaCnzNxS7uPipF8apKJt1BNk2WpD",
  "key20": "5HXMY6CB6dKXdaac74GaFqANCi6GaYuCtGMtmoaVrDRYqyK94FFxAWZEfEDBREmKpsisBat9Ywp34yX46vGi6CU",
  "key21": "4YcnQNrviRrso9738xcmdErDZQusyS2yRfCMb8cJrCd4noBZR7JVVTZ324aMK6ByYFn7wyGVzeK4aeNdchWMZkdy",
  "key22": "23546eq959gBwEq5QFn3xJCiJhecEi2aenUaWcWzvebhVGEMKgERM3JkaEKmtyh3LBiVj8nZrjDGbBkzDSekJU8G",
  "key23": "njY741bCAmPtaQmo8T5NEwvJMoVs74hMMMrNBtbwfqRV7Tb553aakZYZdAWVyCrJsELX4KWhMA4eteHT3VgoDXm",
  "key24": "cmu5Ts2JR87eWdR1G9TMMhs2GE4AgAtEfap2G5Du5frAntoYT3J47bMCS87AgeRWymRuyUS3TG4AghXnfP5sTzU",
  "key25": "4WBLt4GnGF43DPTanMNLts3srQxqNJ3mBrSjzPmmDqz9qmNyycuzM48cBDXokmsUtVYm71b9qAac1MZnMTGoCWU4",
  "key26": "63ovq2rynGb7x3uuRVT4N6juUtUh8kHuFY2SSxPvWT6xf814Tu7GLGdo66KmJvyqxGQqUYfDfSKMMTTmjuADE1Me",
  "key27": "3F2rn4s6LbjCSc3w5EpVLrjmaEDPX6zjd4tiGfGARNZtXM83d3QksBajJFDyNurBkpN6w9TqG19f44RJvAFNWZzd",
  "key28": "jKikz4kjZkDG2EtpceCXhgynj76JEcsqwHLRqpxsFnk6QZgMEuKoUhXVeWGQLtKDgMJQU2yQfTUaWJxkby5GjG1",
  "key29": "2Tt69oKYCGCKoZxRyyxbuyz5tUdjyWFE5rhm3RKm8zEKafHH9VcfY7ka46erfeJxRGFoh5MXhb9GZTEGk5wEWBJb",
  "key30": "2C5uzfbAgcwxxEJrCtNzp4NJrrbkBrpUcQ1RXeUe8oDdFYhymJCsWAv62qSGdddJUVuxv1AxJpBD4QJsvBtH7Tbe",
  "key31": "RP92UPCcK3VhazDxzuw9UMhnzSt9WaJQuFu1PShFt41qumXcgCDs7Sw2DBKyiU5VqZ7MAzVeN3PDa6Xj9x8vLTC",
  "key32": "Wwma5NWQZ3kVbpWM3nTP8brEbhTwjSc9fDufnqzCigE8higz5ciavKuzd8HHMsNjmzFHKvLKzGn6iJD4h7cXCdo",
  "key33": "5xd4JjQRgXGKxvBJh5fgQDWAtMEiFqucz5ZBhMyct2BMijmmYz7MxSfzQXCu3y3PNY2TGHxvWrfnB8T3iYj1U7Zy",
  "key34": "483ojTRmGZTXR42kRz5uSHvwGLTZQaUfMdDLrzB3CwijLfDLcaSryk9ZDPBy8u3XjXAeXP8bQR6tGpJ7cYLjDrt3",
  "key35": "3zHYo2daX71n4EpnPnytDucBHmDmrW4v75Jg3RhNRozN7oCDXWN3RNPt56jWMzDZqaB1Dmu7DrkXnigxCbWuPgkK",
  "key36": "3EJ6U6Vi4kbhvLJMifUuLBipjinA66aGg5xwvHEDMatrMgptMGKtKD4MsGKFGFUqEACqBLqmARppeEvvyZwSkZEZ"
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
