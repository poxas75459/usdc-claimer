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
    "rF2J4UsUsMkbVSqh3jaSgTD7MSoieyEimc5fk5QyMQa83WNgWdax3zTBpcjc6RpdA1RbiM1kbeNQLZDPMu2jffe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9r56v4A2X1Ffzm26tcmxhtZXuQxVAXuirdvSoSwVD2hoAPfhznXEKGAZ3Dy5nHfrXkajkYE7aZ9VFdbv9C9pdo",
  "key1": "35Yf9ix4X7UxpStjRajJsGjciMAqajRPn7mnBk3BAPYMy5Q3PfhxwXGCJYkLx6SYMuCCSNq5Jwg1Gv1xusGeZjur",
  "key2": "383K8WfMPVUKj6ze2Z2No5goUynzRm1WsYrRHfD68aV7SLUXQmYVKDuUiqPeEUipBGhhTbJVQNSCDjHup1xgAxVA",
  "key3": "44AGf5kQErTDD1YzGMqnivi2MmBSkGEmez7MkqFaTr7DirUMqL9dcyBmmAc1BDQvUGkMFUksTAtuVny4muT6pbzt",
  "key4": "3yFmciENXGZWogeabnV3bQSzdGrmGcRBAh88exAgu6gnwVm71oJWphAnSHiBweTG8fovPdYmJbPhHz37qNCuaRFK",
  "key5": "4LovgZiaeW97CnJ9xFMfTNV2DHVwuFQ1PN4FvhhYrnWx1wixQmmJ18vwyoq2F5eoUSwJA9NRRS32K1ZQHS5toJsx",
  "key6": "5r8Q8uc3fv6gAggWVEB6tbPXfJtSFfdTDT6vv5p3gDPMYymbv6vh6yrMjmqkXbpA9G3La3hsJur6JBGGkgSsZxun",
  "key7": "4dZmSJiXcM5UR73e4BiraoHBZgobGeefY4cvofAkMkcTfzvkHNjQyFXYuZKy5vA92Y9XNnqBWhBj5M8ydVj2ybWK",
  "key8": "5TXw3hGVQHg2UZgz1WkwGeyQdj1QUezhzMaFydyj6dcVxqVFPH697rvDJ5VXUvFkjXzdbqENtJTxuFV12EMGpmQR",
  "key9": "5e22FWRDePrr3X4nGem2VJKHbxoDpfCsRLhcvP45gZbMrbChzbqaL2LC192yr5mzLQtkugWP9BCnD6x6aBNKfp8P",
  "key10": "5CLBh7Ng9bRBgZ4NiL9TrnptmSayWMFHm2iPYbcXUmUoNFEQqBicJ3DovaavZnBgvQdCkxBbr4AqT4MDfjWY9GMG",
  "key11": "41tYD7pQKVgbDethhuXay7mGRGvExtTWhpxQRS5eYCuaxeqEXX7R5RVSnmdLTgUXgKVeSQ3fckB3vkXocRgXct6u",
  "key12": "4eACaHHTCitsyFKyRte9HBcj7Y4grEtJVyLbnq7ACp2Gn1Xb7CcsMSphUPLNs3xMVak1aMVY6PiegNKRQbSpBtRz",
  "key13": "4HB81kKSgZxrRjGQRNCCPcH6TCCxEwHyoa1vYwNRtwEvHXJum7aVT54vQ46W2QCGnxRzD53e5EoHkBW6AhCkyYNe",
  "key14": "2BwkF3h65ZZPeX54zoojnhSewoUamRT5WywbmUDRkDtmvXdJBoT1LfGEY4JHSKtuGqceHUV55LV2G2TNsqBTEGAh",
  "key15": "49kdAtzLcduFcyjZ9ixSLyJqRw2FYDbHKgrbpL9omkTCqaaQdzrCQ8mtt87vJgNJSs1TCDzqDTcKZAvqJtdFmLYS",
  "key16": "4LEM2X3XdoSN6UVqBXspPeuu9VULvMqp1jYWBBmN11YRAjfrLm8AatVQvcXpMFim6U59c3cgohK7qARubsH3PcVM",
  "key17": "4mPs5uhiNYNgdSMhAZErG1PsNudBsxUfoeeobY2dcE7LqEWyiqFBxDCSndPDbinq52ohAHwuqtkXUQG5C8UwkCNr",
  "key18": "5k1HD958u3j8KoK5YerQJ4jkpJHBCMCXroLJyzumCCwHm4eJNYoxeSHHDHWdZN9fXqUzRbvFm3GUMwY1NKaoQdYP",
  "key19": "5ygqvr36GnB2PwXJ8hBVqMBaRrS9bXd5DmyFoCPKD78pBSDuTcXqEg4WKFkua64k9WL8ZKFLA1yfPNSwGDJR2wC9",
  "key20": "5qfBEwDDXfmZkHZzDWUmLD3knkkygbwf29WoYgWWNbRpL8PTjGHgKpGpwy2bmaiASxnKnwHHJGaZH3PXa5gAenvA",
  "key21": "xSVenB3u3z5zuHqHobhLjvBub55UpTii7jvaKR6bnfFeoy9qyWft6BV3hfTPysxUyddMZKbFyUQGj4zWLuhZ2dQ",
  "key22": "391tpWTMgWWQzYEx8vgsxV5jbL6jZ8kfBHZX7YKdoKBZG2qjSjfZQM7NkbEmXmikHRgbJYgGWYwA79qULoMo4ugS",
  "key23": "3pWwCzuUJJA2k58xa6JQ7jFK4YMmW6USBTFki2AZxJ1dHsunGtGh8NAKsumhjsPvhxZm6dWMZg9Gs3rf4AbQvzXo",
  "key24": "RsVQQcfJw7stk6Wykmm1uA2emao6AcUT3yWxxdEEi7BoTH5bP7xC4GW8ThgXwpNK5r7FKKxwTidzaWuMHsTkohr",
  "key25": "4S8JVfVLeKaNby6DFo7XsMTaegvg8avoGBRpFbnzQ16u4cwCCJugpPYvM9mtSnGFU4vcNqogRwbKyycCv1sPzr5R",
  "key26": "25Dcqc1X1AtAMkMbJ57t1w2dD6AgeoerPxbNpSrGFoAWn2UJYaRW6pL8eUHrT3yrp6kQzg5mCez5e8sfNuDUMp2B"
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
