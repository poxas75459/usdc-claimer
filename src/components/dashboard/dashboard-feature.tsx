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
    "35bCaeW8Sk6ExJPkqQhxyJ181bKiNwkscUkaHyje11NT1J2WS6AiBM6373taSLnQz4fotKVaTQhFEpRZKKEEFrgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A19hyT75W51LTWQRScg2C3sTN38ymb4oRVJZbo5L73qfVysKv9zjopyxuonXzBF5mWTYvky5MUg8dTEjFGzwXU4",
  "key1": "4xrgZm8erZWJvDEEyvaranBAfnFRWzg2rcSE12LBpvm51mqSEB6uu9ZgKHwaivSxr6tZTaS3woLdJumyGw8diCxd",
  "key2": "5m5qGhvMLUuN3av9FYyTujHDbtSBhdZpMdjZtvteLheqr66YPf73paETgxmABAMyuXm4oqrWcRzy4G7XjqBU2TES",
  "key3": "21cSatKo8kbWkRQc9Uha9AdDVy5m5pMpEB9EwKpRr1A7B4s8hztJ2PRKRvQKUr1nasE4FN3TVjfothM5StJPaYyD",
  "key4": "BYjvmPVm1ytGQcS8hoPuGdFeJ7Sv53p8hSHM89HVWF1nHkkLyM2STB2JLQKdwYzL1WFo45tKxyBwzDicxzFfDH9",
  "key5": "38EucWGr2LdM7VztgP41WWJCyt9MsUHwk2PLpUdydwqmJrXfk7AmJgPRD7fGcHodXikwE7rCagwub8KRysJ7dUWT",
  "key6": "k73XevfBpSk7qViD3FcDY8JcrkQY9RmNb2qnXfibw8iq1JwpUpHVARxJzCg81NBNxmU2rK4sLhgtBrFskzpE66c",
  "key7": "2P2BQr5Ea1DHARWTMB11ttim7e7J7YpNwe15jmXAVDMwVF4vE4nfoYYdYtyzc5jUKdsBHC8xkqR5kzem7MQtcuGT",
  "key8": "45R9zLSk669j4bLAC1MxNx9RVSVFpxrqdpg1euVh5r9YsCTuWKnATxgd8YUDoyAWmjYDjETfAx3JccE3BH4enjwr",
  "key9": "64ZzhmiMPE2CoQh6xPw2Bjh42MZHjChPvhKVnY9jjF2XixqUq5e8Co7QEYt8A2r37wroAWAdNkWw5FnDe62aXZT8",
  "key10": "5Ju9ZJUviuxRcF9t1JAu8HLbFDrJfMLtEb9VwkmoN3JeM9eFSvDQbb6mkLpEZbyRuZBVuSEGM7A1Uc6V5wYejeiJ",
  "key11": "3dThVbBmPQxaQGYYD8tKZ96QFFBhkrrgCQi8RUrHEU1FDBNwt2uMS9i7XPcrkkT4cSPJ1TbJp3R3ePzm3fRpSvt7",
  "key12": "4aXqQBYzvGsZ4fcdr3ny959H7V8DtxS4mMPmuweXtsLeXC4D5DmRVc8L436axGa9DKtvzYHf2HiqnHLMWYK7C48s",
  "key13": "31DNxkS554wu5gQB43x9tYPnizh9MMTtYWY2nXgD9oUsqzZRh8hi3MRMWFxKReBHLquQRmokCv9jqi3Afq4SQKyV",
  "key14": "uM6BFeaftTVH42HBzLdC1guyELX47647Da6NTva1qdxUNWhYWGtyBLEdW4mZgK52sLXmHPQJATCUagE2giyKCuA",
  "key15": "3NZqYxU2xAyYDKHN1H78Vgx4J6DcC4JN7cZSRGk2EvyMXD8Q7DUu6Uuo4cxyKj7YVhHfEC4s8aCRWwhcjReEpQ1c",
  "key16": "36honnnvpGnjaszi4Z5K8vd6JEhSYWfkWWwXmBi18GDyCnruUCPQYUR1S9BPpKXE1EJsjXUcZWy5HAE5v8XmtzXf",
  "key17": "3EhmLHGVVJh7fKCAMjvTmx4wxm3aBHbGaNsArXaabJG4C1Nr2oz4yoZwhNEAuEE9rYXConGnz2fgvVyWhvhL8PhJ",
  "key18": "5vVNm9BrxfYxcRwzLXE1DUvuM1H3jmLBiPbGFiJtoYW6CTdpbYqjxY9BZqjgK1rmhKrus6LdS7qcXwayDobVaSb5",
  "key19": "4CANvvHhTizz2MgNAybeydinv9aciJLvfkwewz6afnmmgk32Nx5nzkgYHKq9bnVd3JLxQiWgBSCFopbTPWheHxmv",
  "key20": "5BqswfmduK5JyzsGkFThLH6APdzQ5oWFf2GLCdRfwBn8CDdmv8sPezWWWLeS9Ua76X3voBtea1FVXZJaHXMT4pSz",
  "key21": "3Hy87FaBA38HLiu9UcDLL1PAm6CkQUoWMfNDtrKS37hLzNv65pq4qv5SgiksnH69rUpt5bvYCfmZNfhkAd8RtGzg",
  "key22": "57PU8Uuv7JqjZynvnL4B5YA3ooWneRwbQUgsVfNR2kZsPR742LzRuvHkYFm9Skodx2KXdSzJwK1y13zpEGMoxVvS",
  "key23": "5kJ1HAkKABzBPssknX8QPLqSYXjWjy46sC5H7sxRzJBSip99r7qrXATF5sz3vCFGzcT1RqiapEZhXxpgftj7SCxg",
  "key24": "5XUXmCkX3Ecz1xi47uULxR3frC1D7LCnpFymSiEUZ2jhr5VV8HoxiPSNGMPsr6HK7EhoWCS5Eaou8cVsLkJvDd8m",
  "key25": "3yt344DbpZeNSqw6ryvY7PEAiB61V21P1PJcWzNX7ZieEq5QZLFWc7fk7Af5nhqNLtowb9My22ixPVY55yZSwhgV",
  "key26": "4g85oJrdEVvDVpgfeG8TRitsETy2mDPrpUTpEp6cmazo6BZZRJQHA4ymYqEz1MurGmL5SoCM5KNM6Gtar4aNh5Uo",
  "key27": "3nHjZvoYWK987A7xe5eppUqdoaHE8sm34N6h7NpRkFeKVkJYAgMSXMBFShLZ8Dh8XA1LZjoDXqY3yyiPvBmrHgPu",
  "key28": "3nkRdRrvXxjtraJ1uE473M3QJEacGoxHaivoJA6j6258rTGjEAvHr3HHeDMzDunsXPirSxLYFg97BpgvU5hsZCCL",
  "key29": "4c9AVa1VwRBNH1MkgwWJSjZ2krqYbsvJ7CPpFYvXE9ZmNd9LSa9EXLKpqd3r79gEqZY5U8pSSXk8PTkBZeQJRoHL",
  "key30": "4YTHFEJaNpE3XqUtfMQexeoh8borHD7DwDwJgLAq8H7rNaroH2cT8MYJhvGDc9cYwMgWk3d8eQP3xingtcE2b3UQ",
  "key31": "4NtwMCWGh7TzUc3SRCsYtWXswkqzxK2sPzxNq9oFBVcWaeaRayHDWWLVegbBiBjVggM1tw6RmFgrmjhZz3bVSZVx",
  "key32": "4gA6qsiVs8Ux3EHicwiqdSDKhWz94aejxYyqLt1eoWRh7H71ejnLoiG8xs5MkBH5epsFViqWbzLZAtLoNG8X5Gw7",
  "key33": "4kSYYeeN9AcbbpRtwyJcuoq8Min51ACtcu1enDEL2aXBcsAyobvUHWXJCE47Q8STWuTrUEvihE2wPdmNc2UUvJ3E",
  "key34": "dkyMGTAmx7HDzZiRY8XZubEv1eiTqUGwFbz2vWrLSEQcnsJMEBvG3S6V2b1Nem9vmcxbM3WzENycjBW9Ru7hm9S",
  "key35": "a8SCdGs7SHTWWbkKZw79S9d19b87qpMJGnp9j6RA7KVBxdcjkHm9zAGHjZF4AjFC6iw91Kr1TZpJCgs2BuzDvBc",
  "key36": "65xx2MysysGCnME6MaVRL8gwzPhztczXhTRfVzwGRFQYdyX5k6PvkEA8YDKW7a58Tuu5H7qMpzz7rXBeR3kFfUfA",
  "key37": "4U91VV9GeB2S312Zd9kf84fWZQEQqaSmELmz2yCKcFC2pdAwh75UVf9RhniqrAuZhGmsybjWP7ZZn9eEXD1uxvDK",
  "key38": "1qnDDFAHHGG6Vvae3aL5pyixwp51cgV1P3EyvrD3CequqYcdjDEPp4adkMdvsurDPSSH34uGr8qCPabB4CEcwj1",
  "key39": "4iMLBFqShDKwQaaR1Mi56RnkX2SzobwniB8WX3KjqN17X4aUgDhM1cixd3UQ7zfwDB7WqVyny8p32m2XqrA4b9ea"
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
