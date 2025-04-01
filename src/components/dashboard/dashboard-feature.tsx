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
    "4VBHuxK3FjowNMYrTJgYYsj6rDpQFPZyN755h2uYXSXqhafsJijrXYrRsbWY1N4E4SVjYCKJjtRdrfxhyZUe95wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NLWguAgxmTdkceMv2zQe35HLWQXDPNAHbbyxyRenpGLFcuy9SQN9VB526Hub3BVdnQ42m96G1knWXo3ztvEM93",
  "key1": "3H6jpswrEwLecdvkfLXTQ4DrvLdzsr9MKhGgEP1G6ubpkzxjgaRsc4oHfFv1wbBQHqT8NCbowrKbHaiFPDh4hyLr",
  "key2": "5NTzHhMvhzeNDtmssgoyaLviAZ583riJUSMghEuf5VcP5bnho5Fb2CTz3j2Q6w5b1VM9WRWAeNPjPVhhg2MGU3dC",
  "key3": "2X2nvyi1QvTovRwkBPzRYwCbsXzff8NViGdAfLx3BibHY8rNmENoBbcLKmZPmR2DybphWrsxQg4CG2KhJewVHajc",
  "key4": "2ik33EP8GE8ERqEGdojk1MzU29aiaMPSoJQUMyvKZcebXs82G84fmGY4QpC8oVPDKSmkfWb1rNMBseJ3HxBD39UZ",
  "key5": "2QRURuYzgfQvcRTigRQYSK5bsaDzatoV9622JcAETUm1xqS2fYtw9jtZcBpduDNYjW1s5uYoaZBPD5ND7EMuxFNa",
  "key6": "28zu9XrZKftWa9CAwCghYaPyFSarvtuJDgXCwz4BuPGrDAtyZdRbxm6WLVHzeGGszKj5NoaEupLQ8wahFz2fK3sg",
  "key7": "5YLu644hho3zqw2vUvkARj4MQ47xd1hwK7yyZ7KWqMkd5siFquMBBG5xzP9BVEb3gwrdvxsx8Bs8PJjYSLwSnhR",
  "key8": "47GbFVNaSM3YzyYArJ8jh1pxAj8f4Y1AP6BSAdnYHrQ7Z6wgwbybfw96jKFEhq5LNwxkPzzAGKVg8vAmbYXv5ty1",
  "key9": "r2MBfr3iUPffTCcM2FFtVgfKhixNPYWjnQBoYXS7ogzHgsUVS7NUoqCjLWFS9fUbZd9Sg4Uw1A5N9xjAAmQ1m5W",
  "key10": "e7PcSY2WWu6us9DVtAxdn9N831XKKkhx6hHBPJWb59FdrdbDqm2YspaXZdBD6YQLnjino1C4fYx5sazhN56JRu2",
  "key11": "3hBTvcG5M1Cqk8qmWLYoQiSJRN3vm2gfd4ejaphPeHhTNcyrLN2ofGTy7PrZ2NUe18AyFYwA5nahBVpnVKj8wWW5",
  "key12": "fEyQkxPVtgosYDc3c3zdrfApsyMvD9Qp67aNCmwatkAbZW2hVGAAh7PsNivDtFXjv5KnKbaFQPyxgTeCybq2J6c",
  "key13": "4DXCF2K6B8imZqob2H6ZHz8zkLX7dkmXRx8ftPHTDQkwoNwdao8RgGaSe4o3cfiQgj7uM87PQBgZWZ7vwGw7hs2Q",
  "key14": "cyA9LvjSK4ugC2hF3Y9HQB7Wx15zvQENRS8PuhhuWUWc9KufgxRmaPti3db3ewTLi5Df1FrBH7gR6DEAirwmz9C",
  "key15": "2j5KPqWyd79BhmXTzUPu3eJK4YCnvNGqtC52NnJB8hHq4LmRd8Gkdn8e6T1WEitHqqv3hzitCC4LAi7XTpxwuGMu",
  "key16": "3jEMFuCFHyuUN2rphe66zQ7jSbT71KV2vDKwXPwMUcHgBUwtiEa82TRqaMdsSAKqpfnENNQ6w6Gd5pqxmv5bsa6Y",
  "key17": "4PPpM11zjK5tzmUEZ8wdowQuNjaYB3N7xReT2yyFjtyethwMmwHcUGUEcAdNPv4BvUU1Z73K997KDzFmHZkwKCWG",
  "key18": "2bJzosbnQy1QC2Y7YpDYiL6EFWcBm5iXE8jdzNxRYsvt5h3ZVkR8263pzXdVnzmSeJScQPDuAVotadwe4QKABnAq",
  "key19": "3pQnPz3pW8XaqjSHKqXnYXzmqMtXTEk12GR13BYDzE8hV468pAoP6PfD2DQ62sNNFk33QLpCdXgSRwa4WzujPpyP",
  "key20": "2aLVYSimLmU6aXA9chWjjbAa6dep5R2nLjwq5ykbpBEaxJpEbkUBppbNoPQJSG3dLEcp7iexmujDm7rm6ULjA1oT",
  "key21": "3MexRvFqZTWXPxscbVfw8HHo6XEzGEf9kFZkEVmnFtfffLFDuyHYJTe7QMCbX1pdRzwFJ4jBkv2fDMjJzk5dp6eG",
  "key22": "2mGpmzhUv8r83VG3N1US4FfwTzhAgi2MYecdnAdXBy5JKsu9Gift6vGpfz8L4oQoVZRB6SLU7ea4Ua2C7xP8R5yX",
  "key23": "2G6DQ7ucdDLD1Ljci1kXJj54No85AtQ32HE34nWGpTbnBXJjFo8EhBMUk8rdd3XfBPkqtfF8UDdZ3NLbE6xspUYH",
  "key24": "5EtaDEoZeY74Tf1HNKf9V6te3rGxLZceM1vmao3tP6nzG4aK1GdV56PRz3PEBuBm6ECAwPMx9XcPVy4XLs338rZz",
  "key25": "62sTv1ueiG7JorvCYrfyaeU1EFUCjkHEZWR4Pu3Cvc5WuFu6aW2hgTkQAw1cMcLjN3AGB413E1ap4uuKQ5WyjC2G",
  "key26": "eiwkC9eXXefrHDkjJZXHQpguPdbsxmhLZPzEo1x6Ug19uw4h5Y5upwHFE2rsPN7zN6JMJqDtH6hkb3dn8Vh3brb",
  "key27": "ZGBWtTnpMFjXUURN9WDSYsnpRv3vihP6kqPkugjc7bBYT9aqzuQxn1hTE773JNY7KbZh6i1qsSrV1YTUuMj9LF3",
  "key28": "hR4JyCZz2sb7f3oi7CPnFUArqk6AqeyW2SnAtyNAETxZtaLuHu6kxNZtvmQqk1XTDsYU9HC4hVmwrcHavK7MLui",
  "key29": "NJu73KCEfTqrNKQ5CFoBWJWbW31Tu5mrAtWbJ8gut7TFF9w2u6hNh5G4HM2NMtAJBiaJDZbMwYk4VrqnZahKJ22",
  "key30": "5CxBLJ5FFTMLusjzboDWXu9X51ybQkPgeURoKRPCVCe61rstk1hzuepVZYLNNWjfLqzQmSb7F7AXFhmTvbcj5stk",
  "key31": "4UHmdNsTc45wT8nJrhcnXXDxv1mXe8Z9SnzLvQGnKxciaCKxKrdd4xtA3iRus1yCdhArzpuqk9q5vyD9CpoYSbGn",
  "key32": "4PhhHVZyJHtX9Mv12qEfkjfNENSjVkWVGF367mPozUbw8fFwuwMZuy9fN99466pqg6wQr2zFpECPAvi6UP9fAGXK",
  "key33": "3g4vshyChawhmLeL3ESRnB1sVPqwGpFoJaL9ELbVfMWYoSaSX4uU41iPHnVPihkycZdXM3Do9JzXyLzMaHVJRDAq",
  "key34": "fHSnkc23BUM2qJ8vP5HnHz58d5bKz9nxLB68Ji54tKWX42ePxHFHp5smZYC8UgJTukVt9Ee5etDFJ7gv27an8dm",
  "key35": "5sDuNZCKkPQ7MWfMHmtcQyFasxzbacnsSyKeM1yKHudnqQWeNH3uLpV65V1C8tWjP1rRWhDxCj8pVvQpHEj7QFyS",
  "key36": "4xE5f4HyqpnpiEbJLa1PEZGyAnB3eJb1vipYzttYHLokbTu6DD9oVTN4kBsSYQfXTn2iBUdNfAVyPcv2g9aMP1nA",
  "key37": "5L5G9wBabeevfDxqd3UTAuCXAxGdhdntSPZT3JzbhFE4BNsoAEvp4SuL1FEU1n2NCEJHK7y44412tHNsexy3e6Zy",
  "key38": "4XjALNZfFLqLx7U34hssbpeDFFjMFutTGTDvW76G3QT8bgH512AiyQf7pHcMu2UN5LofHrcThgyaSQvmFhT9QJxw",
  "key39": "5b5gHc8SBtRLvWN9vfpLwcknnsmHdWZQW7G4PCYsyBoteyLZuUQCDvMVXvY1bDj2tNiX16vW6jYcGnUGZTExiHxZ",
  "key40": "4fhNV1hj8hoNcNcTBHh2HzUZP5EiL4qmvPkyMr2eHQmVemmjFS9MJ6cfgRUf2qEFM8cx9kNCG6K3i9w8n4cogz7e",
  "key41": "3MRSijk97hWNgYYJsoZ6DDDxCqXvdTmZSWj4vyZW8m8agyUPFF3MrXKpfKyVdUfA65hypeRKCM4e6Pq19UEjiqr8",
  "key42": "4VMnuLaCyQi6Chu1BFkaLtstSW9jBMKKZmfyK8g8qXg49526d8TdX7y3f4GtDZv9aKDofK5TNgDuP12SD77AcR1g",
  "key43": "2544wzZSBMx9BBASCTUGpQkBGFNwCDB65nCNsp95MhReZbJqPVPXEG7EWWN34AFfFfYT8DLkGi6kj3bgaqpYWRC4",
  "key44": "2RuXAA1UUke8hF2yDgrbBNZiBvZLwFy6J3zoq9RfFZSKJA7aqNKi9aro9qTuk87ajT5YQcTJR8tnDfzehp4ubpFM",
  "key45": "CAcqCcPTkoZyyJER7iDrTeHmRoJ3Q8qmCLkmt8pz7d8u3aqTNHkGk67EqPadk5NzsLUDbWVRfLSfa91CiuHo5yv",
  "key46": "5hdM574KJnrV8iwSiykPgRRkwNSYeaoeT46xZpk9oYuocW3DjPzL54LdrbN8vjs9u9t6j9jN8YKfXNqcKWKEcbbF",
  "key47": "2wQe7csc53Qf383hKDEp9A4rabZeApMhJwcmhwcLDDnMGr3zzggkZftxoTHHCJdAPHNTc2tgepgRcFpH39cJW9nk"
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
