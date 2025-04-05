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
    "3USWzNgE2R3juJMunKVWdFyQz4bWt8aUQ7sdKTndfUf2n4J2KXo6cCzgRyHLicrkxaAikzPQwCqLfj8m6vYkNhLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mq2HKJWGkDG46n7hxJaYabqVqDjV79z7Ps2yyjeLkkAEXykX5LXdXNTzH6TonbcZP3gWYwAfup4bkc153XA58Ci",
  "key1": "5Sfe1Qq433Xf3s5cuEsntqumVXaY3Y67HooHFT9MvWtZFTy3AJC5TWGu1bVY9W86KWFZTTNtkioTRDeCvtKoXCk2",
  "key2": "2NswkhAn2dpF7uHGgN9BpiWY14EX8anLKeetW5YJjYe5vZroPCTZuk31UWmTKn7ggm4oB2s7RxbVJDi6ADsdR4kc",
  "key3": "Dbyi12hARL4EQw87Awcb4uTdbUpSVJGeXVsu1KFuR1cuzonrEYMgs2tHfYmv3NtGpXiDLm2YMj6F22Fu7gcRQoJ",
  "key4": "4mmn5NTcLxUEi4aFQydmfTRGcMfMnSTrca59ayVjcrr6LpPaxaxZsBc22jZTrN9rFiRhitNVyot4HZyCPhNQUrtZ",
  "key5": "3wszw4UNn54YiUjtjJiAgUgvrapL7Sr5zHGWGPtS862vpGtAER6g3EcM3AeMdaPJKPWva2JV8C7RRV2QtPmsCR2u",
  "key6": "214QqXpmKfaAWA8F8RCyWLhqZZ5wefkqZXYP52xVCfFT58WBxQucGT5mpLBPTeG1MQtACiDWXPhHfyfqVCXMJnkf",
  "key7": "3X5LPEiJZBwHZojsfyugCrFyNZ3cPN25Gtzcbp93U4GobK9Lk2GW3FovAeotukNLqyfnDPHCdWnmiUsUrQaoqmZX",
  "key8": "2qrjtGx86nuKZhE3avLF3LjUQ884zu9JX3g1iH4zLvhSK5YJ7JiRCZjjDbapGakaLeya1GNDpTpobPmbh9hN1dg1",
  "key9": "BXHNowqdWrcj9ksq5zt4UXH1UHm5sJ1zMyHUenBNXvLDPuDiwGCRHATmpNr9USLZT66uAruxKaUycwNNLGEy9d5",
  "key10": "43K3JsZBF2pDoh9nE6XM3Y3x2APd5Vc2CrU1P46NjU9o1jjPXinG2quV1j4T79fWKjrk1Lhk24ZkqPydpAP3sqD2",
  "key11": "2mUoKRRKsp7V5gPzYPEkPF23vHNxCnVmqgBHwBu92TN8fgpV4Cvbg6UcHCa74FZ92ee6pRQZaGYsLYsgxGCEbjrw",
  "key12": "c7AAyMFf97y49gGnb3pLPTj6F4wcYRNtD9uonZukGfRaiWmuqwcyQ55YfT91iMp7jEBnatfXkmnGxYGhKWtKkbN",
  "key13": "5gXCnRHqkSdQReThBagHeNdYsKBbjhbsFvgBdRgYQwwQ9oeFQDHjik9aR23mdUoy9bv7pKBJHPoyeezuMDCT2KxE",
  "key14": "447UKUJe1yVtmtimcPsoJhHfgJhYt8fPwTzZawL8YkveRCYu98ZxzSxPxJMUTkEQgBBNQAkkGbknYpphmciUGs9V",
  "key15": "ZzW94yurbGtZT8u4H4FgwByezLK4bmDr6geW9dkhub1CtGnh6cACLWUxHwrusDAbRVzSh6LkfhirLBHYAZWaguN",
  "key16": "3fns1XvTDKiQawieR4NkiaJPrCYdzZt46VFBDYpQ7ubGPbTbbeghVJDzxmLrJVnbXP8dEZ1cGA1iygLo8LmZvATF",
  "key17": "t8aBUeQD7o5VvsMbkJaVfKAKsnEBifLtRsBwXu8MMMuMGnUoQFErcmPATNxNuWa4BNPG1fJfMWZsYTXJ5xEs51H",
  "key18": "GPNjr12kW8TcwsBzYMd6gn1rkKM3AiKB58j1CgprH1AoA87wv1c2W27FhmogEFRUzrXwpMprRsyLfc1kVwiYFN2",
  "key19": "2LtvvZLzbjpvXE9Zwnv36SFRPvw5zHjZzyCHt7e51uGE9q1dF82CmfhZEUxetCARboUG2Mv6v7psjfaW8xDEGg9y",
  "key20": "5imPkWB8Q16yD9NwYb3MsgU2hL3BPbkfzNzGdEy7QD1zDBCEdZHKynp2um2rnyvgizoGg7rP6pVACu8ALfZVNQU8",
  "key21": "3J2kXY4VaaFyeHhPMJjE58HX1wMPWAX2sLw8uBogQdNKEg3ip9dmxd3P5F5XDzUdJ5wSRXMipzHsp6fNmTUqkDeT",
  "key22": "24XvvB2Br3uALdzLnMG8YXucrYxHoZuyg3XFLyJXRJmB4AoBY5ffaywcTrxiLpxv23JfEu9wDyyp6K5CaSovNBuD",
  "key23": "Sshov4UskMmydyMpm8ZYHBHh4GN9ty9ZUo2N1uVKn2nheWki9eSiQDLMpeAbFegMKKn35WuxVwa9H4tpGiWc2CX",
  "key24": "4R1e13zo3doqNrRSXTzDizj5crn1bRc3fBknfdobv1XzckUDPxKRDnf9gZptD5KCS9b4VYFZCRbohq38LRDetZXz",
  "key25": "4S8QJsyz2wvxBAaymAmZCWMCKvAAy261yg9Nv2xe7VpBwfYzLrNmErPDpyVhbVEXXFPBG7WRyJzUYEWb8wFmbJz8",
  "key26": "2byE8h1vQCB7Hn4f4wJiioN8eQNSbmywuWc1Jpzocay96vBhNskW45hoXf2FZG5pMQ6pYKKrShrFbV8FqjeiF2DM",
  "key27": "B77zBUCdVpVaYjYz4jPv2nK8BvvDjPpHYMTME5XVVfrVaz8n2brWQywnxcGwYQwu5jXPC5deXim5jniHrQ2yncT"
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
