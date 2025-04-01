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
    "4YCBwxXhoC1sL7R3TwkDKB6y3fHDEpUnxWFq7LG41NMHKrZWBtnVyEsmAVGLQdUusYg5WjgVNFVtE9L1BPDvzmCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CjB77XmZ7dbDyEWPazUG5fg9XNhC31JVEUF24YFpSP8YW6P8XkUyQ5SACXy5KAHxKmRHftaxJFxEosuB7PnhTX",
  "key1": "3WbmVmU6Vu41QBpmkD3wm2vsREecz4jt2KDGAp7fsoX9bQBApwQzpeD17snb9KEUzmxEUBQRYPpcQyQgAHVbuZQ2",
  "key2": "3TGGTiNZ74svvPJKeqFvNv31R3wMXXqzKH7WFyKxwzRsHvxXfRvYZd5AjGbzBPpNWWQ4EhHQi93krAkPdtdhUR6N",
  "key3": "3WXbJy3q6h1QaNFyWVp6qbucgLHy5UNXV41JM4DUc7cEJvPBX3SK8UDV8NGvDqrcKxxJU3SxmCyoKZTatxcLXHcE",
  "key4": "4zYaSwXurH5fFd3MG5F2dHN1L3MErtSYiVfMMsx5LHZ541UELjaztNotrXugxBUHCauMAHsYjQJin2WFvYB6jj2Q",
  "key5": "5TKaiQTiXcZVxcMLRWGRoev8QLxxX3hh28jGqFznq6W5XAkQpgk7qnn2HBzg26jsSn7tdnm3EU6zAnGpNUF2okyk",
  "key6": "25rMGyfTQVuzCjhKyyKNATZDGGhdqohG55x9LCLGYyFTrvjbScoZkgs2kV7X9QYRPj8HgQBP4sm7SE3Yu4ahsTNK",
  "key7": "Yj8EtaoMzLG1Nw2TxCAWsXnChgxvet4LpKSynsp1Lt7FyLoHPWpnB4RMVmeXPsciGtXSF8n1n2a9xopJUDYpyST",
  "key8": "5quWtPmm3h6fVJdMCn3wQ7dV6XwmGqWqxrJ1ccUPjJ2RwiDPY3nFXpTWAnL7TqU1yf2JrVDKna2NYjSpMNDCeiWs",
  "key9": "3s9UkRYVe5HENmcUpNxdTYuqSKdM7ovnaUUjUsR4wVsc7DMsjtD2iCekjzoSUPQNhq5C8ZfdxVm5GQ17iinDH5AJ",
  "key10": "fTaGJKSx5eBRD62otqnEz4VL4enLVB28Coqs8K8Jfjy2gsynWx5EFCvQ4aJ1PC6ienDEWVNaQ6SkbV15kivoVQQ",
  "key11": "2aRHTTVr3rSyP1hXkups6tpFjcTVaCc3r3thBEkNoKDkMvJd46cH2Xtqnw314zCftGsoPLpbuoBJzg5fi2pYxznv",
  "key12": "65mePuDETFRrKPFtc6HjK8nQQzHPBWZsguRdHaghmNLSVxj99HKiB5CLXMVcL4tXz68U8nSBhkFQGDomQ6tqNUp9",
  "key13": "5WiVTUVYzS1sk1TmX2g3QxMese3JypjiKG33vJWmy7Dj8L3yWfs5T2hrHN9F7fR1kux4xYCgb4WSYZngU3vGsvaR",
  "key14": "3kvHig9voMERRVERmnkYSDpEvF3QTUuKfQypew4Vo2q7KSGd2mQiRYhtzHYEGsGY3ZcD2mweKsRGwgNKNPJjLmgd",
  "key15": "5Lu8BbKV9jDaaHrhtXxehA6kunC33yT8m7K8Xd1XQBN98f1fqJi59kLSky6Cr3rc4KcnhsgyUYPvTGbNoMDHgNso",
  "key16": "m4GbdGq8yeKTsGHZyf3a1cZhtdBQaqnxfusFhJQGkCPG3o3F7Z8qiuKwzE8p4pUccqFodm28oRyTVRyPmk33j84",
  "key17": "2EQxzHhPpu5z5KRR6wgbSevaCSZKk7GrEW96CdV25AFcGjDZMAUaVYHisiG4ficaJYLheDeTkqzGFcNd9pBtPB7x",
  "key18": "4UUKLZGwxAGAsk5s2ozcS6iferckANwd1E7pWCEWs5epfWkxq8iRo4BLHKG2uy2zhEbbTwyB8wEZtBBkghdpkvNi",
  "key19": "24iJgieedB5B2Typqm8ShGFv55TdFYfhhVJpfmi2HbdaEpcYF6oeTd8rssD8558dXcjTvZvauG56vNz9aNAT4ybz",
  "key20": "ycbGGzzGdPrCCPZA9M22GCu6ssFrHNZTkr8GLvYJAsTKb7urjGkZ1m96RPYjNtrLRpkBwfxL9bhURWwxKLKBZmY",
  "key21": "5uYAgNH1kkjcQM6D9hpXUAjPSVErXXJEVCVj6nE4QwcwiZtA6SeK8RSMRXcYxNrXMoCBzc6peSZLHiTjG8h8PkQ5",
  "key22": "334fTGgxCr2S22bDxWVrgtCFzicEXTwEEq4dfuz62WPX1AyfDQ1ML4Qrz954WcPvctxSVTAoMYbdSsZx6ULBg5YJ",
  "key23": "yz8KMpqXrrjUEdMa1jpcsm56pwHuiYPNJ68KP6WpRjoB1ibJMiHMAccDcuguvZjAiVQGbm36dAPH1VFHcNnteCz",
  "key24": "4Av73qAeFi9gYxQVnv1SSnjr7jaCPmwhumg8ch1eu6ez3aAknGoghh8XavZF1sTDetC35gFHCKYyZ6KJk9wLHHpi",
  "key25": "2mA3Bbz5PNASe8TSxxs364hfmurpW61rmHw25fXPzfnwaUNXNPvRQFeBXZ91EUsL31hCHsDTernfAo4n8EFKiyEP"
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
