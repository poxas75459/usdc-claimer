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
    "4qjLEusaYWPHTod9QJ7mAMyoxMRZPk8GFTLd64TYnQyedXwCqo1s2uFgCdv3JiRp9d5e5iydPUV82ENRGDbH7LBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zx31ZUN7Eq3x7wocSBYP4GHc8xUhwuDFnQVbAVdkgz9SmuLLwg3nXHsdy8BVKa65M7BtyY3dMu6hGbQDXEzfffq",
  "key1": "2AUTqx1xtcGwRP26r3KZsHR1yhmpVaa2wvNVCTHdDZE3nRWbdskNe9eDBPxEf6wg5ZanJ2YLKg1QHt8DdYMnwQgT",
  "key2": "4r9Pdg2sJ8YFVoLFJPNezMZ2C1FFiNcbwHnLoMjTXfnnezPwS63tXM1nXEAJi3HmddffZ4grCojER9qNhAmpsgrw",
  "key3": "2kN4s9rqS1Juups3DZqZEup5acHT9jAgRkGqF1RrvusE6xaK8P45kNEJB3g3KVoewsDbQKq1MX6ZnrdW9XQrKTV",
  "key4": "36ahecpGuBsSFxzeux1qpjTmbjy1izHnVqr8ZpVtezPT4GcTS7tQ7KqG9QqFj4A8rCrDFJbgJA1RRxqFgpZRuD1Y",
  "key5": "34DkxchzqkgMZFP6ZKPgHqG9FYMDRY73qtxWuPGP2thHvwJPSMhd4BtMBuHASfmGMTqZbDFqVT2HzU9osjn344tx",
  "key6": "nJYDd5EuR52i5KwGuV5MGjh3crZq24eD9oViPEQYf8CVdfuoFU3um46EaW1M4chknjEgHYxkaKo52RfvfgRC1dt",
  "key7": "3JT4s9dgCutEMgEYH2ZETNS4gmKekBh3tWmtyh9r5rCkChr2yRdMhhFE6k7UaYeMDgN8mLpMH8ofvNezC6MYLReo",
  "key8": "vTTYrimG7ewtpVSxKoi77mUdB76CLnzHNmDssaBYbe3qBjfNxZFKX86MVQ1ueCHAGDX9Sab7aJCRB5TGbR3ynYq",
  "key9": "34b7jsQU5YHUbZZowjnvNMwq9gtXRr448Vtr5yDc189AknFu1UwXxVS9GUV3nZAvZftsCFNMHoMs1jr6iTfobsKv",
  "key10": "ZqBzXfPh25zHoVDtwc75LLMvy26TqzMaATiz4fZuHbyXqy6U1n5hcpkHcS16qYNagpXRdAVh8cEYQgcgBdP1Pw6",
  "key11": "5AAiXfxka8R9LoW86gcRJfjT1KVBDrbPpYJANFx43cNdX7dcR8zjc8QSf5M6szsa5SCnAe8M2Pan6M6okcravcTb",
  "key12": "2WamdtfTFKxSGgNmRuHPAwoxGzBysTELQnaZbgcvytuV4aA8nMDJnp8kd4v7RMGnA3YnwTb4rGDTskWagJxbXLHt",
  "key13": "C2GXBkkJayqibn6DhRjpc7iGfZZVHTQoZ9PcdADeYYgCTWdKNrDTjDLh43mUJyv2yEfGUPtrprGrsmLGv6fQeBx",
  "key14": "7h1hrVTVcxADn2n4kZZbWnbiPpLFX6tiDAJuKGRuGhk3HHuVsx9pPcdYauCT1qSdFqAAS5ugtpiwMoDVFsGdR5V",
  "key15": "5cPcebdR8gBjHGNqBTRLrK7YL62WVvnpH9M9UDnb94azgFxNu9Kfhbb4j5ZMoyhpXmU55rx2sjQMWsyZZd6N3oJf",
  "key16": "Ex7dQ7umBseqb5fYd2fqTtdYDmueghsxdQArWP5LH1Ep9yQcSeFuNg5BUWqMi4ymySZGu48mYvjGMTcpMSxCk9f",
  "key17": "512oFk8oCywVaHk6BqbFCjaWnxhdemk46WdFnD531FZK3naPkjDAF1AQCig3WF2EPzc22bPHKxpsT1iov2j9GYBf",
  "key18": "4AWAsx7k8d37BcPCcEmuHPGVuPcbQ2Ckszj7HjXetBE4fZJpA8dpp9TXoStqAFo55dMEjpgPmEoAL8eoLTuMz5C7",
  "key19": "3YCATX7V3cDYfGUmr9EFJD5ZmZokL14i91xmwPWstigBWXnMPQhAvzeAdg4T6K5qDvjwXjRQJPdMc72zfAjdn3Jf",
  "key20": "2pFfBbHpTFGpy9GXnSxjX62Bj3MqiVVjLvNbSXkKKGLBE7c6bB5M4v4yWcyXxUjaYGkX8B2Jd3L7DUd9zSMNtf5p",
  "key21": "3zBFvEFSR7iVYP75oZmFBLaVUCxatYhqgScxsdyMw7Q2tc2FhmyVEEsYhNnNqZ9Mxq9ZwxjoZbmmbPzbx3xrQL7u",
  "key22": "58eqSoBTRHk6BZ1gigZNGY61mfHXviAyX7K1VNZWNkSeQv1t4SNKEkSUSHBU8RpPoV5u4XNZChWEwTpM6ZDwefU7",
  "key23": "2FKjS8YamJnryyTuHj1AR7BdjJz7c7qCEY4bM28XGzYrDbjgcv6utsQW8bmUdDArNsinefxrmCSewG4Kru7UDcKW",
  "key24": "2z8JddKjEpN7XLtZWMmVEEAet7bt1D4Tz3fyYTrA3JvA3mfVZACokfWri3PiNdxMXHAwWUSwEnx57DZ8G5pLPPoc",
  "key25": "4p6K2WcZjwHKGKbMGo2Nqx1r2SN1Hq9SEB1paAHiUsvwsz31DnyrF5mv3w9zsDsRkxdUaVMprp7MNSHNVdbWrc7A",
  "key26": "3eTsYEncugrZZ41XnCc781JntArHK4GARK9MYYRr3kY9i68kDsBcxz334HFC65V23uq8gjQvENxky4e2WWoH8TAd",
  "key27": "4BbEqvSuaVnBs3p6g8vkyqiVP25ei5DH9F6CSguzmGvCYp3sWm7pgNyx7us7i8VWEESLzHKryE716c9jXeKin8Zv",
  "key28": "3r32NsXSM5t8AzkmLWmvQPtLBTuomQT4NUA5qHwzoEGDsfDfXfh9aN7NMAoHyrZKPLvBDULMjc8Nr2Y7CR9rw9gL",
  "key29": "m18DRtCv76FHu5JzUPByd4ZBDpkq7vrHDoYmze42Y6csvC9BTkL7HwfAheSvWy2yfbh8tLtfXuvXfHeV4Fzqq6b",
  "key30": "2G25a8uhLdNK5vhthUWK6XvAvKVrRLkXW7DbeSA6q7bJJiWRzChN2qWS3dMMCnayFXbQuSwZ9hMW3GwY4NPo6JSi"
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
