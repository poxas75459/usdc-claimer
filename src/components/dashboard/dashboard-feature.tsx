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
    "5728HFFEWeLi5zXZfhu9HzTZNpUNo1ndqtZq9KovGoTdZgHLRoXi9YMm66nBNTTVJ326ngwSCkJBDJ3QDitsBjei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rsb8TBqqp25T8vdiDoVpNxz5dQsL9RZJJQZLpZmUemxVkkdactaXWbtDnzT59wBQV2cCET72PjhZoHiJAVPuyvC",
  "key1": "RkWf4fqjE3Adi8Ww1VifbP9VzR318UnBS62UAReRSYZYkaS3hU4wFTomrHNB7dvDXCHTPzF17L6Lokj9spVaS2F",
  "key2": "2xcvjHUXonRt3tRUauGDcvqbKsWVqhstLL7vDRgJsTb6nv6Wcj6CKa64K47myRx2LMKGCSBcmTZvPPCeA1by88dx",
  "key3": "iXY19QgVJ6ustxQ2ZbusZYZxaeN1crPkhMoaEn9PoL25Ug2U7RbSB2CpKqyEiyuPeSZHaYyPUM4i6zVXDBahN3g",
  "key4": "3fzxyskDEK9kdrXNPBYc7vf9aXLp6iVTqdcap2jdKkEpDj1RQ3aPZErcWwHnjJxyeybkVSfeuNsz78FWSrzhcyRU",
  "key5": "5wKehkW9r5S66gJCbEHtrQj9C8YgCiGo5DMAyCRSyGAsucKxS4KZEcCNSTrfEty8cthKRVxvQ2Je8uTxFbr6sbgH",
  "key6": "5PHumkQ2S9eSn8nDUE1gkcMvbhuqeuyL15x6cEPxxvqNcHsukTHu6LowikLbrmPEeyeP4iiwHjwQMqyXkAbL2Ytk",
  "key7": "31xrRVKaV17QYuoPVAbMVxcEDZQvgnXrweuPg75vRbJXdG6TUz4LPe3h82uVoCkXApL3ktVNFUwaVUnzNvWd1rP",
  "key8": "Wp1cLftfcLo57TSauWWRb1pJtz7q669rCm5M4NrBUALeUKeMGjodzUJPnuWai6ovb9Rv8ogimNaqXVnV7f1LRdr",
  "key9": "2R9s8MrJWTkrz7Zr3jpb93VFsUELAMuZPsCSUeTT6HNCtDuEg6ASCLWjBGNWZGbQ28ZHzTKUbW9LVpN4TYnenN5K",
  "key10": "3hr8enM4nzPWFEqiHFnqd5rEMGEZCvYq5azfF6uEF8eqw8DfkiXuQEgKEdZ7peounWVZKms5ifRCeSHftc5DmYCG",
  "key11": "3xsRzy2ESYn2JbwwVXqnMiM4xiznSg473BAyxsYHczEsPqqiYthBWaVRuiHYKyjZ3GLPKcWQBq6uqEojfbR8nLgU",
  "key12": "5uPqZGtnLHKQpHgNRDurv13DMf2fcDqdU4bHaPNducCLHMSBpXArQ1KJdwmQbhXBHihJ7d7uYc2DDUGbExKCeyav",
  "key13": "5FW8jMLNQSAYkqf4wEja781T3s4DuiN48cgMi7ySX8jm19MqxdcnbzEh2rY1GdPCs7MAW9z1YE2AHnE3FoNjb2rD",
  "key14": "3GzKN1enkSCHCdFgd7uULt9wMT41fXWt9JyC5RSV7CtMHUUn713stJzGJvWJh21hKSzaqKZQvLvLhupy4T5GoCiM",
  "key15": "3kkZ4mmRDkEGLn2AsKLcKPQSmsxdvurQKpMcNKFZJAK2kr2WW3UckE9MC2B6uHhYN13cSV1gQd4AMNGpwaXCXNY3",
  "key16": "246j9ZczLK9oSWWwH9ggSC8pSa133haiLZkoeMHuoSgbJv6xYnG9288Q8fU64gn4rNJ4diW3riyfWW4ymjoNEMDN",
  "key17": "r4VyPoMWVQVMWckZnhifBuTjwohc8gNiGTAUQndcGTnj7bE4uG9M36ujpRCnjenBoxroYK3s558mdoad2SA5ac6",
  "key18": "4M8FxhbpCCsF6gRHtQ1cvTKbARp96L2orkgU82PYYyxtH8DFgYBKxNRroGwqyGj9TMXPg5MnTb1WAqdKkaMG8BSY",
  "key19": "3hcc5x3WCHxJLyPHFKasRhT2n7vhPzEN75wUKNdk6C4SrYxpz7jKUtdaL44Q3jaJ4DxVpqLoWJPCTWc57hbmkG4S",
  "key20": "5h16e1AdVXegSHb6AHyAj3pfZpArDn6ogzjPsgC6M3byPDmpDTgkNHmhmpQMNv21DY1mc1wzi8vshP78tENuQTxB",
  "key21": "3TTtTHvMheWG8qDhYiS5co7ZZsZi2mii6oaFKKLpCAqx59KdD3toKExP76dCAtKVBcG2CzRzQe2HtDdPjMufD4oG",
  "key22": "5AudJ9h6nJafSPcC1kZyDcZJTqq6a6v1Ssp5Xsxn64x7EddJZvpJMT9SJ8CoFJuej9TiNdVTXvN1yFtX3oDxh47i",
  "key23": "VYAvjZWf3rWpZsmZ6KS7RY82w7rV1PAsTfXiy1dugEGN1FexsxPnWiaFiemj5q2P5Mep2ucdKjxomZPN4zouNbx",
  "key24": "64MJPE97RKKVhgS2ADTS5ADS3fceXTE5GCqkahGXMkFueJvrM2sp82BmiqBYJbcR5M7nfoJtraYKCAmd9xBaSz14",
  "key25": "3dDa18VmNKAyGQJKUHmJfR9unG6nUmUX55HD4GiRJw34i5rbVppRa4Wso6Gav3dF4enGQYrre48R9hDznFsoZFHc",
  "key26": "3Xusz7LVdxVpFtKSFwZ1ammTYXLGBB1ahBXk6fLQt4xpFngsfsXvojHL4exi2KCagwyzKvCezPnSdGJFEbgwV62n",
  "key27": "4TmFrwutnotFvyPNQe7agmKXi6aYNomrvFtSy5XuvoLR8SLkBWzS15AicNUUEsaKt7gJZMkEJ7d3ekm3gNo7HHgJ",
  "key28": "2t4DffaRVN5Czzkvh8UKrjYx79ro3qRqtoDx1kxsuq6qE4HnXRn9TRKnzGKM4cwpCWagTATPCgkyu7tkUBMV8rXS"
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
