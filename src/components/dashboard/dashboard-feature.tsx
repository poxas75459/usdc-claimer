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
    "4RPdw27r9xuXBt5EzefC6zh8vM6x6YrHFbQzxQRJGfCGceh54ckDBZSgDoFwViwDBSDCnwwHTYzRGrcDRAfCbkVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5T3stFW7LfnUug5sbpgZHfXSdvXZwLVcgjzQkMhZPHU4uNCKhTETSAxR1qV2nLiw7LNKZosvZLSMJDAAQDFPS3",
  "key1": "2GSeaGixBHXsuRnJxVLCGxgM6USRKG7wbSW2FJoJ2yT1j2XJ7Xs8zJpewQQFmyihivgnqkpR3XcjXunwskyPk4FR",
  "key2": "ky1FdVDv8G93gDQv46tchHZZ2RsRw5W4faTJjnLHH8vnCtxGqDttSUhwtDtoWfMUSyZ6PH1srRya7vybTY6rCR9",
  "key3": "2yWsPchA3XUsnAPp7U5c9tr7ZTWZnFSVAnBqE5hHTy2RP1e5UQ2BLvAzojNXtwAL2Kpm2ijfKZRAw63MTDGV7znb",
  "key4": "3afF2ipudUqn4fcgXZR1vPTMM3c4595hxdSqqKc3WG1wdJr3Lh1Ggh3912V5efahgrpC6QVCw25YaWgqAC64Qvx8",
  "key5": "qHW3wZkbWujFBRTwj2M2HVL1KTEkLgfLo1F3UpP7JVNdGYY1GPsk5prGdHE81CfpBvUBJb9NSdi9V4CFMFrcGLS",
  "key6": "4h9qd3Ehzmp6nY6pWEHXYkqCUDRXQHNQKMjWUw6GW4MoUHYUjsWkmxhU7wU4ff6Jvy4XmvXR3spiVGm6dyYuK33H",
  "key7": "4FQiZBaa4bq1aKUbyYTTUNyishXBv7sN8Gnyf4b5pHmEbwiN9nZMdsV8h3ubTuAirkTPkLwqqtMixm5uSRaYoegv",
  "key8": "vCMvjBmrgcFniLgxwwEaYsv1FpGj4uNQefzYaMZDk3HuCnUtY8EmRrNjfjM7p2C1dPVmzbtigJkUo7utjcYVtuE",
  "key9": "3DfahWNoXYG7u6R9LnaWFAYiJVb1qmM12g8MgVsRWAyNsgXVFL1v7PYTpTtcyQKGepXYGHWxU4V7QgWtipvnMUY7",
  "key10": "2RGZm5Mcv6Pp5DnKyn5MmZ7BVCR4NXcaxqSbZWtYBcuHdTDPL3cCwFn9UJ24tpMQ2vsUuamAjcRt6g3LLML8HADu",
  "key11": "5MPFB6tduSDdrupP3T764eXuxd1hgS1z4znSmmXrCzFqTK38N6U5sFLxrNfzqMWodxvFErvqBLxdqG8G3hxHRogh",
  "key12": "47C1iSXP9JzKEEy5UncrBrDEmy8k9C9WC27M8pwGUKrfwiRaHbTrgP5EvWtwwyMoMna8oGW1vqgk4HNzgoyi7j4f",
  "key13": "3dBUtP39d3rjiGDAyNo68LuE1cuyatu1J6hJMTTWZoypCEeX8MrCAF3zQXXQPDEvN6faFF87ZCB3TbPtXzvZ74Pr",
  "key14": "5pH93n6Aqn3SLXUzeWGYof892RhNy7vZ4CpeJjuHHCdWTDwHe17dqLnPshSDczVBEo9AQ9bwD6JsrngKcsgsxzCL",
  "key15": "43uYKbBMK4rzLRUBqFu2bNb5Syuwvb9yCapp2cdQ1YTgzg3hNKWHdoCKjyPtGgT5x2WJCvui3ujjTfjrxbghcjyb",
  "key16": "4LwRqA4i88464jdbvTREPTgVXYkJScYDmeeUvnKt3LxtgJRBkcrCxiFAjzRs55Gj5mP4xbxvzn2pJm2n2iA2jbcm",
  "key17": "Yj8TTeiXWuACqZqXr4RBvbxsX6zgmMoXubWas5TfoUJoNqyrBpmQidzVUtknLzigvUmbXW5JaV3vLaCVaSk59jT",
  "key18": "4r5cWg5HoNhbJtswf3eBiVQL3PB1Dx1H6kz5HodpRjDJ8cso6eEHMLBPTxcEeskvuD2zwEbttBAs63TULbEGWufq",
  "key19": "2ZTND6SV88mRdJbxw6SzXzuhSmc1nQFoYuKq7TgejdrD6tc2QKRbjFxXXtYdvudMLhgHK2Qmt1QxLoT4Wqwe5geP",
  "key20": "4rAERYYpAEDVT3gkejuvWRLFvRXhPcGphB6YqpKeRc8fQFmK4npcr2vDVMFUQ9sQDj2MgsXVUhEbKLFdtn4ocYgm",
  "key21": "3S35awTEx5UWCy8RdxdCt2W8g2BDuLs9J2z4xrhmQrbYDvDqKVyCDNSWMGiLsCXkUm3seJ9PxyZgPJDEVMfbR5mK",
  "key22": "5bfsA48xrzJ2HDSEa9GdVEc2R34fr8zfoeaax8aG5p4h3UPmrUibQLffRfFUs7QhQVyHZ9LnmYW3g7TfTbM8GBiM",
  "key23": "3dxv2gkt9cMuhiy8MNoK2dY9AMH6MyggGkZVwmG2ooHfNu5G4wFpKAVBkGxiWaVQtb4z1VdQFh7WJGwGJopUEhfv",
  "key24": "3QsXAbUceKRPzWzuTcmaykgSWuHcxV5Pg1MChziWgfiUq4bjtu23ivTjiQhQESKqDxa57GtbcLZQ5yxQr8Niosmv",
  "key25": "2hcCQSkRzGZRjNXSoARXugSnjBXNQcHvjk6Q2d8JJMTERqc1JiqnbotRBe8RfMnzbkF1nzk9YuXJujZfPzzkhZfF",
  "key26": "rLGui48Xt9EJuHa6i7dsQpBBh97zXi4u6PyozbSCSZVHN9QU1rw7d2hX2db4fZH2UzqBsPktceqJCjajXttxuDf",
  "key27": "DvjEfcewQeFXcSCpog3MRTHC4zwaKoofqQiDLJFDW3izaqDrNFdpbvLhASgo8ovXVgGGX9GNntZQjdYcsGk2ets"
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
