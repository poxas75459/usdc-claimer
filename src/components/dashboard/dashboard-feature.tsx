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
    "vEdEbV1vxRJBCxH1HSvJekZnaRuYVVtmm2SuRzbUAdYUV93MYK1zRdMrC493LtEB72W4Hc33dcHo8burPSNo1ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kHBuprwMKsXXRSbLwN4bgbjhVyBAV6XEVBCSNTTtasYkczLBR3nTfiDGqavvhqd3wqxy5qABLfYDnRWLJcUksso",
  "key1": "2sAMPEsVwwQpiMpzr1dZU8yHWTgzVMAMHpXbR3EoZUJApKGxQLva5BSPcR8Uzmpci7YpwYN9yfmwQjwmFgbSFSHy",
  "key2": "5pmvqRnZZHtaVXzEG2uYbRfezfgZjxhw8GTVzUvEDaen5hE46137ozmXXMNi21eryj5GjbTfWtiKjKJbWqxo5Ygb",
  "key3": "2cEXn79ZGZaF68VaUJ6x5AzjxbWZJeyBPaPZC7oJmDRnt2XR15QhegJMBL93MVUri3Fm5psL5ZFmrgBSppqvzfyq",
  "key4": "5Lx7foxFSBsFJgdq8DWV8NXArJ8YmB8ecyMsnRTDYn8KFb5xSw4tg3pVQbdNJE4P79EqTD3QtdfSPaXL5PUQ8hA1",
  "key5": "4AHwW2EX1f7769XRJJsrHsg4QFgHSeio68dUPU6kEndYf61U1xR7GS5hSKcZ6ZQQfEWzqpoPqyGgktR3THMWkuUP",
  "key6": "sRjEmUq6h7SnpG76PS1yqptTvER51g9YFFktEN8N6VGptthgugzQ8psBzmm65vAtb1P9ZKyqrPFQhvLfqjk5xrC",
  "key7": "4X1Be8Ufu2uAhxhGRtsbg8GwLgTKgRiEdm4hZJUa3Ac7EmDxXcv4yzFLw4tTtJEjoPhGTazPZfpmB3J6WHgzGAL5",
  "key8": "2YKJFQwWpvS8T74z8GTZ2gG2SxoqbTDTDYDF5AjgUStPAaEimhc86tVEomw7qbidvFPvrdvU5WqksRTVc56rXftR",
  "key9": "2XdiU8uizS9icvj34HQ4vF7RQ4AT4jw9rhFGTJR92EUfREbmUGVLcQpzyqUQZGwNRQZXapx5xjdmqyRdjtzJVR2s",
  "key10": "quGNP8stq8b5wJcS6jxCbmgYruTPy4bQeVsQauuCcrLue2PXpzX8xunXmQ7fbDHjnLnsEqja8cgnwrYdWLuw6tU",
  "key11": "2fPgSCjcziJqLNWkfcA6pedGWzKSAZBoGC1wcJdnTBaEyyiw8Ka5bnb65gqC7n99p5tHvouwx8c3TzRhZnLaomCA",
  "key12": "3k2mos6SvFwHNfvJNAoSC9V2JvtArkmQCdrRqEhfKkf1NDF8bnugM5k17vKNv7Ueb8Yp1j3AZBBnEVU3nBGbr6bd",
  "key13": "2qP56qrQbkVeTg3rJZ67FDP5AsqyujtJpnTX78zVLV9jUzYf1A6J5Hb2hEBEEGqWu2SHN2ZJyPpXdz3MEWwmmWmj",
  "key14": "qiRSMu9VTo2vkDRiMpBFPs4wSgzcZd5ChgUiMG9ik1uRctn13p7ppbMA3vU6aaytYZ3cdLTteWe9hJnL26vVjD2",
  "key15": "3HwJqfriAHyxxzezqyRRZuJixLqzQuRpVujx86QUTipNiZyJESdZu72Sx6c9YPZkCapMHZSqfxUNkgc7emBu9Fa7",
  "key16": "24ewHQ6GL3woUmvZphgsEG2uNuqYpPsNy3s4aHHde3mVJktpc7tiHJBVRXmMEuihP4h1efgNAteycLXax9r6wZUd",
  "key17": "dnCfxUL7m2LaguQPvBi1SYsBE5vjeJ3gBhgMftPZkpBQ9b68coNVcaZZrQaKm4LJthqFgxxajU5Mm6ZK9uVQBAN",
  "key18": "38JQZsa8L7yCDwdLPjswC4nb23EUcEsw6T4fXG8ZgFrjomA1PZmwfcgFAYQTgptbicfZRuMiGyjFgEhjtPuj2hrj",
  "key19": "5gL2cEgjXPCVegtWHfhS2HVCod2iHaDGaNR3LTZmJFAFVpYzxdihLnjMTgKbfrNJhKsC6cFZ3NMTxKNoaBXcjRL9",
  "key20": "5iwV3mzUXz5VYi2p6Sadkk18Fo1B29HHAqYdQMNQnu5JSQ2FZJqDu14yudK9pkyPweB6jitqGtcUBgbbYvGmNsgz",
  "key21": "ven3v6EpYsYz4ACNYztkfi6j8QG2Cm518uS6pobXZPvJL6c9VgASaMGjFBgKBkkggye8BUzJEYGKz2BZAoBeCH3",
  "key22": "3Jp3sswPVYhX2qmJ2u1CSWCD9kX4yfBktJ9nVq9Xwvz7mPtyfWimbyryhDjdbTefMpcZZtdNnj6BK3g3vaAKyX8a",
  "key23": "3tfDR1N5F5SmSruQGKyY3mbnUaZYjQuh6ktGGGCVSvFgBJVNJtziFdmHBxEKu7XyqK3auqPgVcznX5pk79gWBBBz",
  "key24": "Fc5xXGbfQ1o4pvbkh1Mah61dSXsUA9Qwi6Jujyxcn9fb5XR4kWSCx72FJWnip62CvBXSoWLwTbkFu7UFVcxBstY",
  "key25": "4zxZwCREn22PKcJ9X7KvJMManLhk3cRWF5LTEg8WqJmAbW98Lwqbdrm42Pkxbms5epZinyc8i3XXVFWnXcukbtNm",
  "key26": "3og1y1tKTEgL96ambRRMmQvvp5nf7anfDVmWvN9oqNJ7pvtXLHYRVKi4TGHno3bj3DcRyhcM52AvL2ga4eqKHjHx",
  "key27": "5j6LmJcLz4ue29dh755wa5cHFdLYcdGkZ4pdRFzDHozG5sBznovGgw54e9MWaoJBGfwEh5BP7DDN6mXL5cuCH1dV",
  "key28": "2p8YfBVgEcdA7F3uCyngrdjm35Q3rkJWFE92nBG5d2ZvYAGH9De55rBwGEytQg4ZCKtjC7rMkjRchT2xTVKVCRmV",
  "key29": "3HXGqyd5EzRRHGjRhTCk3QqmtsK46HPvqgMeyojbVk2Lnr9ev6tqLYiopUscgt8CDZkwNhpf785jm8s64s4L1joZ",
  "key30": "3wBebUfCpKkDxf6Qx8uJPkcos9SbwgXutabaSR2u9kmQ5paGy7bpjfeN3yKv9KVk4nEWKYBPtXiXgaRV4jDAh5R3",
  "key31": "5e5Th5hJJPr2WbhMAYEHvcaRSkp1qyKz29KxQAXADX4LZc7LpaJv9DJ81vYsq7ueHvjoV9zxv4FdXosYSszTei6P",
  "key32": "67hbEKXtnUihCCuNMcHfar2PN47TX1uRfECXk6XfGHhh69yQGptEDoCYJsihCghERpzPKrGekYcHSjh3rkd9ck4W",
  "key33": "3auDJjZFyPvxXoFCHkMMNdFjtw4oKxqgdKJcAS9DKhnv9HUd2xQp77sJJGmdt5nycWdEGCFjkQHFyyEweieHeQ9e",
  "key34": "3LLNsF6SgPPQUDpdHNHwtrp1LCJ5ZH7HfPHCVtwrnW57kV8UzdmoeL56senqgMPv3rXbZbEqrkWENziWHBUWJQfd",
  "key35": "4QkReonGZ4n9hhmg9w1DeyQxxFUzQwqiWQ35rGAqbNAPby3YS85djhQwLwFVRrE7pc6ASeKzZiceVu1pNoNr1XU6",
  "key36": "2yBnTxknUY5jTEe8WU6pQMVRnnwLZ5HFhBwR7N6T4QjtPqGS7UsL2arZB64xWnHUsdzwNLxACxKAew4BvnQhp7m8",
  "key37": "V5en65ougK7JYnzSCSrHdoE9AKZ1ApNh3pWP25my9G9YbcZXDeDh265DpjbL2yx4fqnWWkNuEnTyaLnobvQJvSL",
  "key38": "2xitKiAskwN4eHzwJTvWsQ3NrKcedFiJYerYPbnkGvxgwT3b8VpMsmRBdbgFzm3LAoqmYxAAdBrsfwovTepdekcs",
  "key39": "cZJWscgFV3vQtYyfmRdMhjy17mwQThbCRdVVAib2ymnCS9TjBC2XfEvKqEyGJfiMshXbbcX7b7gYs447QXjeAmk",
  "key40": "BmhY4M44WEaX58nx98Fg66qbitdPQF2FavUmqUbyQ27m8SveoegR9yoBe39ZGACe7MpnCxD8MsUGFCzjkxWpjV8",
  "key41": "2SirtdrL9bnAUjLwKUcDz5ihbJqsXiokgF8LDVMtEAScfFhZd6UHAFUfPqxswV1SWExAw5ZYonyH775J1Mdvk8Tv",
  "key42": "xG4MW3Psmqe9aut5k7eZDjtw36dsWHtBjSdRyfdFvbRkiqAdnJwWWYuGsRnKYpP8vRavPyAyBpS9SeQcXYxZ12h",
  "key43": "4WPaHjdWjhyhivn45o99FzdikVQLtdDYkqu37imD8LXRx6EMPV8Qsrdoc2xaSoGuyF5qwvW4zTv2DdfSqTv6vTeC",
  "key44": "64d5kuuVUuxDN2hAfRZuF5MBz2prt6gfeZTJ875QpbcQbFcrpr71GgRjc1j4EmwQsb691PL2idR9bq1PKngekRPe",
  "key45": "4mcR8Fbv9P56agqbZL2MQV7872vEo5xP1HACqwqdsCpvCnFSfrmv1omZyB4KYKwVC2bhph8AumnvGx8u2PnaZYUg",
  "key46": "63wMY9nNRCU6X3N42fDcGoSscGhxbMSQ9vGAmFaRQmZmCxjpJMmosrchx4hBBvuEHNUR8VBEBW8VbtiW2yNyKLsp",
  "key47": "5sQ7vSRPZfDVaixvTrTZjoRfpr21E9gLNWM5PHLqzxbeaSGYjF12bzcYDHwsi61ZZpm8EKfFhqAmWtz34em8hun9"
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
