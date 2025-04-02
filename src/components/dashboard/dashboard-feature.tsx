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
    "2YpmPpDfts9MTZUuCsMBkij3Qyfp1Nc3LRLGiRjkMDj6fxC7HzAcW7BRu9U8rXcxrm7WyD5nPNfH5aXb9oZQwarY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "276R26ajoYxJupX9AJf6stdehTgd5XdEG7KFUbMFDk5qNcw3BeJpoDa6M8oBiQmvMKd9wXDqcf4D6T64DGP2VYmD",
  "key1": "vBT9sHeGqoMZnwXSaJVJaVChgMZbtTyTehupXeTcunG3P4JvvXvgvLaTaVafJqJx71tWN4hiDNW87rqW64VhZpq",
  "key2": "2H2nPfeG9iZ26CYy7eyZumsVtrahzoQyM7MuQFqgjhEbJujWvvSBFgbt1dL6VFPjCwviMyncxQfh56ASqTRtzC22",
  "key3": "CR6F4Jars96xYNXuhZ8c76kEFb4ztFjsEGdscPHhAZzWaUuRRwQhAmwiMzMXk1F74GEgGgsV24KwJRWYE1bBuYw",
  "key4": "gMctCpBDsyoZoYMJ7sVAgc15benmMcLTWxm2nVCTqMcqPNk2XS6ZFbX3kzjPrVtDCCVgUdXFF7R5a71JYgo54Y7",
  "key5": "4SaJvMvapm3GGPLk6PjFMzHBFDXSFH486GDsfNbEoY3DYtR1W2sK5m57BLqKwYrq53ngNUFFxTJ6oJGCLDDnwXXa",
  "key6": "1YRhCefiyHWp7pnqzxGNgFn414z74MRJw2cTzUNkzaMx6d5T6ickgHrs6a9wiq2Z9heQx3aFsZnK5gutqapZirD",
  "key7": "63Npxd1EQknyQB7QmbQtkAFrVUA23F8HnjdgnsrL9Kq1HxuD5gLryfYYAUpVPDG4Mu4nkTsUd8Bpjg7fApZwHLxE",
  "key8": "4gq7jjvkDVQ9yc7yW6UxQGroJ71sWNpdMh9L6RzBtMBFWaww2xc6YRErEaow3sWymp3geBHBsU8oYrwG66ucpWtm",
  "key9": "24euwmKCuV2Kh9jy4C745Q1tzDdXKk6BhUVDHEmZbE662ewoiUXJtGu6VMQTRfMZcjGWHYgysunoKorjHXRkD2XS",
  "key10": "5zvWFkA6wL7GU9eunxgzfvywSLojHrfBDq62G2m4FYefT51RiDNKPQ7t2ggKB2B9PAJiQwuLL6KoUHva9eMX1Mbh",
  "key11": "457fbRDkKgj15ZGVgNqX2ingzpCEfCp241kbuxWah4Jww2x8fEo4k9pD2wfLF5VHpfWo9LEpQ6HbuJHrV54fqU3p",
  "key12": "5qrhoog6LkGE2p2pnZEU1BsPfgJL8ErVn3wGHDf8sEN5rWV7weNxPHXrfTTmiXPr6PtufgME51NLgJ9MAttv6KFd",
  "key13": "44xnFxFDVcLGW1bDrzH4N3aFUnBVJeF2Cbm5gz6GH4FpjqQ9kvRtr8sRFmtZ8HGTNn8pMhptPvPcDQZzySPbUJGb",
  "key14": "5Q9ypTvebsJ91itDcMbnRSgK59SSi7BS7Rgz68SB57BSSbL7J544ZMYsZMT69S4iAKtieee6czN86kBWG2Aepayo",
  "key15": "5KXaaVT76HX6ftVwKqx6oeGbcx7oUdpV1L1ewfcn8LHYAsZr374LLsf6QSxU86VNxJEsJQDRG8K2HxityMEScoyr",
  "key16": "bAwpNXf9ALd8txW3Lg8csF6E2Dh1mfxJuqN17JNFenPBjY7CJrxkjzgvbYaS6UmLC1Ym8TaiS7horXK81iua8KQ",
  "key17": "2fD9gtzPupvEoqTt8ar4L4n6MkEuDB5qaSZvrrm2JsjnfYieDzWEMfU25Q3CJPn9Q3QavndwbTbwKjmd95VYt5NR",
  "key18": "3DjnJ3Y6Uj2z66YnG2hYA88n2L39paCpAhQPqCgw48qHh2tm18MQjoTGyr2ejSLZf7rbhyrNfHtmpmHePNDvjKbk",
  "key19": "Bwq53D936nPmgzWj5reNRYbck7BkYuFNPSX91mCMFvLS5uiqeBJTH86JNvKhFgZ2rT9X6aDHfVd9Je7uqqbrRLo",
  "key20": "3SAsDSPYYxb7ZAvwp6W252EtHEmk77rsKLqim4nRGtPw4ZX4N3Xnb8D39LNgHWAUMweWj3WEex3QSnEYMdnQSiXx",
  "key21": "3af1gfuCDyXrE5UXptjQqNTQWriCgUG7beWGo98tLVnhChQR5TPSkYPExNqPuicYTPp66FjryZweqjofFa2CF5eJ",
  "key22": "22Kp3i1GxZo8XSTyQrUmVPCBQA7TRKSc5cBjSuSM3GUyWi3ao1E3kUe6TXhu2u2xNEbtN7uhGpsSo3dZ5SNpFgZU",
  "key23": "3bSeDr8EQDXSHrR2syb64ukMQKZdp82vRY4Tz5vyKgVVA8JjvpH2xoWX7emH1uPJ9ePFRJji4wgw9WG1gpogwNUW",
  "key24": "2ePcX4hTkRgzY1zKukRAETsFXfuaWF1qcBS4PGgnXt3piM5sS9hHWLUchifhxAnseqoph1LRDTvp79aNv8j9AVVR",
  "key25": "3uua6aor2gw5XxiotwtuXWbN5S5pziQwtBZFe7JF1QdzFir3FkmW93qk1KLcbqaMiaFpJP3wNEC3pvY7N5GhkM6L",
  "key26": "4rPqHAvxZDjmChxjEkLcBQwcHYP3Vc64oM1VJkg2z3cJk27DYyNsoSgkx181kXL1QcZpHUFVogiXsRTAM9Ek17A9",
  "key27": "emgtyzMq9t91ZZiVtGYSMLqLLLij8cTdxWDjvSP2LFaGxFnL2HT8X6sfVSWKEBwza76soP7P5zdQo3khE1zd87J",
  "key28": "3HxNSAuRyoAb8dUK6xUXukFZW3f6yRnz9YnjQjNBE7ymQ4SL5PhLCxvXbu5x2wxUETfmsRshR55q8CV8UYtp7Qcu",
  "key29": "39om3w1oZd5Q3MfjAPGF5KgJEkuUCcnwVXCxjUh13jafnQyY9beJK8ipAUwmzD3jTd21bmjsK3LZ8jYrdBaD4UQ4",
  "key30": "23WmixZZBV9rf7yZJrmiqHxzHpwpzRDgagyr4MrK1D9WxbL12DZ8WKLniPFmK81fY6k9UZPtZac9P5gC9uRH1pmq",
  "key31": "5Giq9tsdmSo6TkveCfiishHuTeHBEYY6QuiumpW2yqyuod7Rsg3X8QQ649iGRUWjXnfH63LaP6SXKYFNLpftQu1p"
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
