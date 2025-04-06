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
    "3hafLhF49guMRyBUHFpK16dqeXk6JdPLpUhUhmGk7yykTgJpkgx1E9aeiebrCQKHfkS1E7hYBwAptP4EnMTCpj79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kW1hXdpvgm5jPzVH2Mvb1zNeoGRG9fscFtPo2gQSqPZxZ2NjsPvRC6Eh6PBX82sFZHoazq2doAJSeUQdMkm43su",
  "key1": "5HdidXqPT9kfh6RBX5PjAK9zAttJRED4dou2rFCzPFAMqEAtSrXdx5TwcayPkJnvM5JghsmVVnDUt8dk8EgoizkH",
  "key2": "5o8dj4fsHn54xyH4pT7WRQiJ7Yz1K6L7miZHvtqycHxqJsuVYa7YCJ9aeaFh9XuLBkqY1v6b1EpA51XrjhUn8nKM",
  "key3": "5iEvXVTWr9Hji4GFNbsacPLy2FBWxLWgYK3NzJTL4cyhcZ9dwp4zZGPPiQyJ9wjBLctSwYtH6jyFJknDwpSZMgjW",
  "key4": "58MJJYTosaj1tfnPsRZY62QYvtcecUvCVegXhKQDgXhhpoFtxMd64W6zZbTgjKPapPgqDv6YjxsMiYeHUeWBgmtT",
  "key5": "66nJb5R9nonsUM7kEP5ArCtgPJQdRjHnymyX4CRM1g7rExxKDKdi24quk1hUoXDn6d8Yt7KUWBoT3aZvfAw9kmXR",
  "key6": "5pev66gGcy4zNCEgrzawkpbN9dsJk787HWdAQ5Lzi3QA58SghDgArkUz547WQE7p6LhifpXnTsmuinstFARh4rMR",
  "key7": "428TezU1f4uUgkqdEtJpddzzgENYGTNQm6eci2xP6CLQsRj9ffEgWbJTYeSnboBeuGiJxEMCxKXCVfqygvEMGN4k",
  "key8": "5ftuD2X1jMKuHwaQ4EFyedcJq9KM28ZYdL3kzsk1jGsswWux9hk9PW23FN5mqJ74ds2tFbMS2wmvYYzwGwEqSffo",
  "key9": "uWAwjrs6EDbDsFErA7Fx8gnQuwaU4AuzXjQw2PoHsjwDCiN1b3gNwv6zjMMauoM2uh3gZMtWrwAGSp5aZWF3BAu",
  "key10": "5en8oAYyyJXcQuHqgiKPAQoZMNp3uzg4Ws5w3n6mABFkFTveWKH7vpdYa8s593haMfg3QWseWup8u1myerD3ACpX",
  "key11": "5vdkNEEy66bwF4SfhwKiex2PJMxTWqn7iivruTEwFdCGPYenHvgWcL6Z2eWSMfiAfMdUrvSY9KptsWxjey4sdBZv",
  "key12": "4ZbedqsQ1PxeThMenfoC7XPh3vFffbt26V2TqNDtPH1KvqX4SUKh1c5TH6ranCPyUAzRZqisJBGgubppnqEUba7n",
  "key13": "38XsDVmRLEuTab4WsQDVZsNvgpa1JhjJDAw6ieGihs56w1U5vEGzyfXDFasrYz6v5bMQLbf6nNgAStSnkFgcCGur",
  "key14": "EvmAXrVo12KWzNE1FHBFff46L7mqvQPMWmcRbZcUxYyfbPPEb3vogDkU6QWoUhb5HmG61gNHHb1CxNgXX8ZsUwz",
  "key15": "32ZPKRPEZGSpRVCZwxWDk6aMvd3pfZ2B9FPgnVNocz46TjuUN8SvXv4uLhZidL2iS2MBrzTimZZZGd4xtarQKb4k",
  "key16": "G49oXih8dgh5MzNakHZr1EEnAWk7yZfiRZ4ysZJU642jWG7zit6UJEJYAsq63nXpADfzctnQLATi8LD7zB2uoR7",
  "key17": "33rexFUWz8DSU9AU6C8mBcFAkYLV4jjjdangwonqpP56a8VYcgrR4VCP1PJeTc9g8srcJGMDGUDiF9d3t3xs62pY",
  "key18": "E1mgfvRvMAc123GvzSL1Y5EhoBAQT5yNe1BXvgcDxfTzUuxHhsxu2KN7YPWNk3bYydnTnMnNun8JruMP6RtsYGj",
  "key19": "3ddn5cAJ6QGqggLmXhz5QjWi28uup8cU2PqxX29bYdLmwJuqrSnTMcxFfcLNoSnFcnY18a8DwpJnRdSGYbM4aXtv",
  "key20": "2GveByBCN5S9zJ8SV3RHiPRgyNu7F44etcaocaFFvNMk5gFVByeTQM7zPvPZha1acZQ8dgwnVsdk1Jy2X9m1cDyo",
  "key21": "3moKj9JXHVxAZMyA81xGRUQGVZGmD3F5gVjeYs4zuxc7MYzMwZcAHtnJj5jdpHhwZedkcj6KwC9t3QXx7EsqsR5e",
  "key22": "Q3SofQJi6qs3pY1ShnHTPD51Yvmqx13rvcWg3oFA4kxREPrS5CZwguMmzyk7kfa7DUsAyBjAKj8kyrF5Q2MpQYY",
  "key23": "vWvxFTYV1Fq51KHLirqqP9LhRs4Ru8CB7vqzooCZ9NSMT6XBrx6j1zcpXUtX6kvhsNgURs4e8QC5dBxJa5fpyaT",
  "key24": "3ks9UvGYDqZk3fujXNXS5aVX9buk9Rjax9bJH272HMYj5hkKnh1VNdVLnwFvcpJDke9voos81NZn8Fjjm2oUY6N8",
  "key25": "3RZecus2tWXCbBaaPPafuETrHmD3fGuRPWAz4re9pwrqXyCnVNevtFXJ6GUEZrGvA2eqPcqHLCoAi53w49ANYtwE",
  "key26": "42UP937ESpRqyPjdPVJSoVU8L1wXpJgu4GGWp65F5fAyE49wo3j9VGjS35UHpfShNV4eAkJ2g5r3dncirECAjo1q",
  "key27": "ytMZ81uQBFvwCrbytrNP5tgCRpYWvbYoUQuJPVprwCHoP5Ph13AeWSuKUNGtvHPNHvzTnEQv62XYnkdcrykVsLM",
  "key28": "4FAnZ5D9UqY2CfzPeux1dp1z5xrSyrfYApkv6EgQymzB7EHKQFnxWT7WinG3hDNx3r45Q8Xi5hupTNiiufGn196c",
  "key29": "5xo8okAMkXjufJGyFkrmGikKDuH7nLagcjZxSTN8rGXTvQpoT5U5qvuWts31WvHPkqLqE3inFArb9ve3MvSFJMef",
  "key30": "4osrjFRXGhgPxvTtzq8sJL2qkJwe584jdpijJQMYeSPoj4ivSP5wxcmNLmm8w6hJ1fhEjdoauzSDrpESV3HrMY6j",
  "key31": "FCYyJPvRAbLVXSTUCLaVsQGBy9sbS99EibLnvRZddEmvadsaVuANX4VU3XksXQuYFBZmPrHXc1qZQSrVnzhUudm",
  "key32": "2ucqQzny7xweBGsmnX2hYiqmT3CTSi6BzPJtbYhNYp1fKgA2nVcfgZ2PcDWebu9FPrU1LeSXbgUdhUartejLmREt"
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
