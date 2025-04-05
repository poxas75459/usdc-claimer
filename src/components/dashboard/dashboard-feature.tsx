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
    "3iQwPfjwnuLZKRFL73A2SrpmzkpAGB8MihPbC2moKqNDKi8KBvhWxm8A25v7FDVNasSASG43DuJAXpugeMyTty7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "658cREifsoRhW37w8Z1yJKFVd3rGSn3TJXHfTs7r2zPHu7MZYjoGzYfLkfKeDxEmshhyDJeCnGgv4vgQdjqy6QEx",
  "key1": "4ZdYfZbL7DqZ3SnnBtGrdat6gA3mqDFFqbyRKeeMv9iePs9yz2JzDrLiWQstKY8vvB3HyxWCiNucZcGKCJJsbE73",
  "key2": "3g7NSHjiie7krXMKj7YbEDWQB11H6tfiYKc2DFGVZqirdMPWnPHkVsF4hzUb1F1p8DmXFgMNxZLg8F3tmH8a2Phh",
  "key3": "5jeFw4nsTdyQFFtuKvDzgcnCgZMK2Hsgm54VAiJiye4u1uf9mkPNyjmd2utUs9GDRusfdZKwpm6yo9ZqhqRZS7Lo",
  "key4": "5rVbxUD6sRbFtSVXfAheRjPUMxQdoMAx4JJZhGGjFYCFBkr46mUvDaSmE9X6kNA8gn7MAAva62zDfpsvb6gWMNHz",
  "key5": "4oUYLpnzw3VDswQybpdKS6qWKcP7xBRxpN4mcjh7NL9WwKzyCnEeVZLcpKus7dcGAP16v19udD1diGV5pNTTEGhq",
  "key6": "34dwm6yv7TwQx7wnzo8jMN36jZVote7woVYFUBBSstHwbnNyfZvoLtCPm9rNvCWqqD4qRk1qoQKjhqFaMwH3hFWD",
  "key7": "3c5iH8XoKpEoCHW1SyupGSTYdfmdv3LwsmQ9a8WppvNap3Toz2SwsxoB9JcywALifMa5dZjb5g2FsvbtE758m97b",
  "key8": "25jMFPGo21DNe6VUs1NLf2jeEzexuuLGTZe2i6r4UUrsh8y2hzBA5cubRGK2y1W2QGNw98NwXTzYxaYJPG2UChc8",
  "key9": "5YPXpGNPK1fSoaCP5kBVauB4AkoCTPdrg23RfRoTaA5W4ispByscZjFcHJp3HimJQxSBHnzYotyiaP72MtDcE47f",
  "key10": "3fYXG5gpZKfvsxanTRMzGEd2CWv1VyVVBJjifsws2KzyujSBE6o5Jr38iSG7pscwWWSV67i4kzVKa9epskzXwZfb",
  "key11": "3mhrkEgY22bKuEhUzWC6nGCtQemTW9oPgrXLHLoy7eXU3tmbiCFeckqrJrJe86ksSVxuwj7cbg3HYyjACSgPq2gs",
  "key12": "3XbJ54Zqh36VHANfgXYYQ6xQJcuBbsFw2bue2o6jv2H5NveZRDd2uXdB9gCLA3d49b4QkiV8FgfkzGgSkVQ1S6Yc",
  "key13": "3zd4qdixiMfvW5ETyktdAKLYwbXGvGYC8EN21wu5nrZTnjMPFfoKZ7zfzUP4ARov4WZ7cV61NAycTUppTPZfpkTT",
  "key14": "2BBDkowFL3kfcBSge2gx5kieAJZxEqMAUAL4qYBx1JHjF1qoCzuq48ZLsbwTHdY1PxYWHvUJXSFgYYVyXffMdZQ5",
  "key15": "59LPcgdNVNbxHkgwi6MZ786A2dGedmWYcVUsBMfiRmvJU6SJKNuFWtJzRVKdRKqugBYCppkgvtJ3cYLtrGrQGkMQ",
  "key16": "4KLCYaNLkjkgB6gGa6SJ3v2yCZu4E5b2L6nAmVPXZTWMcZFbndB1DAq8b5PM5qTGcsW3VtmTv6bNznvyXg14Wugt",
  "key17": "618tprweiJJ9zg9J9iPAd8M6b7H2CXY14PwKXuXC8XAm8x5gwAD2n9zDNedZAht6LjpUgfmcf4apXSPrYG7SfGrF",
  "key18": "25u2wf9dSogoXEQmCqVKaViPvq3UUCJt5XdtjfBC1DFpfRpqqNnz88QR4b44kLBSGaxYoS2StJxH9BdJUKdHUUnX",
  "key19": "3udMPbG7L28WEUWV2f22ihZEycpPDStKFbkjW9dDhdMiTFD6GXwws1R2jZ5KazzJiWtGoTEUPj42MD1v8Uct9zLL",
  "key20": "5jpQ47wNy2FC9K4RpfzEEwqrHDuK18bkgXPNDiTSu35xXcR8wt24Lj4dCEubYdfDZwF1L37mT1JXsvWgYje5BJbn",
  "key21": "xbeUKAqNrbHXwN5iEiaRv8eumgABPnPbnGzXRdZsdqt4UpEEpF4LaZp7JKcpM6LRLQPtZwCTC1TnpDCa4DB6MPe",
  "key22": "2b3e8HQyypFepSWkAxFLCAWdTSdfVcsopVWq1HDHns29RzSKBTZxmdqQA7hNvzfknCnhv2WonJDhYWxrkkVo2dCa",
  "key23": "56HxdPUt9r4xSxw3nQsoAD1V4CzTyqaViUaBUi1XtRwyNoojcWxTFvgRPdhmHDXprFznxECjNCMhtJKGJW1KAuEx",
  "key24": "3kNnCL6oEDHFNj4G38PfYfKfcHrRCEtPNaA6gR4bzN3VwtPwpmZnAESvvJbDpigj6N6huVjnzWCMHhhUNz6QmdKo",
  "key25": "2Wd8fbXRSJqCqQiTGdHBQLTxW3NyRPdKYGFHV2uPK7cLnhmxqiPpKgzdDjETi8vExMKxRxvZgpUckPCmQj93ht5b",
  "key26": "5S2FUubct5UcZGjLqsYfruzeQZJCjzqn5pqJGsbUfsd6Z5gWJ527k1KFHPED3EVsGkjASwtmbSMjAy6m6AKTBoFR",
  "key27": "4W5SxKZE2ytbG17TtjPDx4vaxwZKBfuAuiTGFK88tHAh8HnDm1EXAVKsM9R9HrNjprynUucjKUBfUVezU9iDXwLT",
  "key28": "5BVJiyv1mRnsDoBPmyz4sSAHmU2NGPfyDqeZHAGuaX6wa1Vakr1pTUH2R9ejDLrjCR367jqaanHR7sbNhAGq5q32",
  "key29": "2XMfKs57FhBeuvh47vgK5XDzR3LbXAyxVak7oEzCajHXnuygSniTqtcq4pRFX4zTAyn28myUxXkKpbjgXuzEPVYb",
  "key30": "3YxPGEcnyBpeAjzjKsCm2UahSaMtXYBX366qcw5zw7JUfisMU4eW7u2mpf7pSD6K3ErZoBL7B9dG34Tgi8tz5Txd",
  "key31": "3n4SRu9wEZzbpgTaEphgq5Yns52qdYvbnm7W5ys7u6421d4ERG3AaCJtTRjUhjQfi3naHZX3vEGMhVNW2LXcpvSS",
  "key32": "22TRCMDxVT1VVDDko8Gty5Gr91Ka52398Czves26ax3x3bMzVe2q5AXurpcHGDvctcKo1UedXDRHiQKULZYnhNuJ",
  "key33": "4aDmGjhu1VwYiBMrWP64U8QiEwh9PMzm8FfyMTEmDAwTUuLt2RsqEymtehDCx5BzStNX8p6kRnvEfHLm92fuCszn",
  "key34": "2tVckbM9HtGwLAhScnR15VazyimJZVxYQJuAtYb2cjGJdZqkwaJtBmcaMNFrFjxys2Mw9tzYNV1e8puzw3tr1A2S",
  "key35": "4bn51DQJDXi1HeBsoa8AeeeLYavWNhg4qaEkV6xRMuSnWLW6sQMqKLi5vHg2x7cfkLhdu6ZUcG1bctzgr2xPiTtv",
  "key36": "66BVgWpAtv1vGPoXba8xhP6yanAm1ZjstMUeaey1kHK2rdGABJr473ibXhebJkg4jSGLPjQUh1qUwTRZeZr5V9vN",
  "key37": "5Rg4UAkpPPE95xSYVds8igaiqX8rc9EPJgjdTzurhxSQyjZdpe668jq5LT9AiBuWrHpUNvLgNgMExM79w9DNZKQJ",
  "key38": "3R5ZXPLyks8vsW9D5HtjnFoHQPiT8QiSLz98nGk24FCVnqWSXBfAuKgnQPzMZWW5k83AcVHzTtL2Yv9gdgiZC73S",
  "key39": "2i6P4sNY7CuBtQUnRe4qCQTUfeBNnkDThF7yrb8Fv7zYWXtXQUjodj18ChxkcXGfXYoTwnwtXTvvvZerBEoz2jXP",
  "key40": "4JmrFDGGQp3QEbqzMx16AYpTsNSYUA2dYHsLmvSe752gJ827jTAVhUvw3MGmZ8PvphWbbH95dtxhTFZq2dGbXAbY",
  "key41": "3Dk4osuch6M5nFN1Fh64brmERmPKRqjnLs9rCcgUJzRt17Y1p9p7rR39cCxkPXj29rKo69g2NMc6A86cTXvEU6Rv",
  "key42": "2XYGBKmW4mDC2oaQq9XQVrg3cb9XFggLWt4uhyyKbcdLTfdhKZUtfTsYyP4PkCyWfgEyBxQpK3NAyvwnSKnKgGZB",
  "key43": "5ayoDJF26r3mn39xLo6TfvjDsoGdiHyuaY6EBc3igtqM7iW5rD8nd3fsuigXwKyvSFYMgn3CyJY1KxZYRwMCvpLH",
  "key44": "5ovuN8aFzdhPrB8PYRFEbJYA1r9eKZELtYCsj2StW7U6p8b5kaaGhLhaC99GaPWUohAT4o9SLnECpZ6bv7fFB3YA",
  "key45": "4RjsjZKaZPGum2fumDVzjvMpKuwvau3oQiQ7z7yMrUusoTJ1ka2pm4KHoyC5aGMycQWhRG63RtcyGuC6LC4rq6qb",
  "key46": "21Q3TM8oAFKw3DCLckn9dHmPw4hL2mQP4ooJjAnTcGkvpDDncpx6uzQeFyKMM2JqgC8spgjkj19nSpqKnmK3imSm"
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
