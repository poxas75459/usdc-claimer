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
    "3xMhi2YQUJedbRYoaPSTqa9y9H8mLk4MekdhS1Lx1YPMQU2jM6qCWhsuEmYWPMgCqMjnNx519vSXpbqYAKSCqz1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7xMMQgmnNUDPRm7Gjkjb72SvBkDx9k4imRjud65jUssxNqicaEozSJDD6RKvAcVje5eE97kWNUoC5ifpz6PViC",
  "key1": "WniJ4MbiviVbwbnfTWWkcpGCSZsW3iJd3SukwAyvEy4zKMPQEYMkfE1Q6tBPmiDUkXa56i1QU3dsAR7iDeSQzUK",
  "key2": "5yf9H3oSn1jJag2esSzhpVcxZNGJX3fxwe7HnfKQHrSQny9iqMJzAq8SKxZFfXw7za6gbc6FRGxR1ehYt3Mj7CNe",
  "key3": "2ftmFjqowbUhPqwgYTJv6ypCB19Vzx1Kx4S8qvgQWAXUdcKdNF6QnJzGaK6rc4Ws9jX8r1jeWw2pXRsg1WAfUrm8",
  "key4": "3aMSQqEQMCqWQUcepC3SDYWJs8HPerCfdbeVnWUbqdB2jqpRp9sWiqgi1yzW2aqDS1zZ2nysNWMixZHMWWyqUTBd",
  "key5": "5TCiM4w8BiCt45Jkv2d2ZhFBcdRiEZj6kUkUNrKWiWpNr3AuWwcUZoRDNDStaKZo8WVNnuGQ5kBtYxywUrmqXBXp",
  "key6": "3hv6r2NePss1sKA4nGrrgr6kEJ91fdtDKvSy4ea3MsZr8F7MG98vrrm4YNquMhqjtcx2YkyS6P5Pynby3BzToi7e",
  "key7": "32bsWnvj6VyNrJ6abEaPXmMZT29hrLhvsvc5LwLeWgaQEixkeQHJ3QWrTmfsP3vkrRih35osFrvRpkmma6Se4PLR",
  "key8": "4Be9xTc3Ew5aTYB62xuFaj8gUSY3L2dLPPKzRZFSy8FTGufL8uoZMpSXX3ScJSCiwSa79o8RuzJHGiJNxoiW2rsn",
  "key9": "3d9edFgcjGiFkDsrb1YShKqPbqUp1SLUav2ZzJwHB3euB6wYqVxkQgn9RhmcDmQ8EMJz9H6SA4vh999wNcBvt8Ry",
  "key10": "37PMRyXTeeZh4Ua52cBRuUppxK7riKYuTgTEBfBnxPEw24chRcdq9GTctaVjChwVGggF61b7UPxuujDDwzfdyZTo",
  "key11": "zaxCU5hC76rgszxmEvjd6Ecjzsh73gNFVgcNkHGUwQiYpWBXhCaByWAT25Li6ieEPLgYGXxjDBunTWUduLLri8f",
  "key12": "3mXYNNX1iFwdRJeUjq3pyBRNpd89ktMcrGTzZGQJVDssUpa5q3arTnz4AngWkAEiyED9xTVg21sSv4DW1koHdRZb",
  "key13": "5crYZLHKeXNXbw3CveCkHY6VRARUtYQ3sLTa2K4Ca4rXFzBbKzppVCipxnBeAx4QY31e2SEh3Ha5xYzdGLjyp2eq",
  "key14": "2y1tvG7LBrPJgZdADL2B8BFuKF26y96bZD3D2HaLTEFw6MBVeaaHWXsudwZA5s5S7WqpXEdQdKUSiTs9Uuh6Sqda",
  "key15": "3H1beqhX4oCWTJTCEAVHHyxY7CeAoufREpVDZbbUcxkes8Z2DQmUAqHRePHebQEVHkhFJnFvgeboRMewTH8C5ZgS",
  "key16": "QyziUoWCeXoupSDPKjJsg6ZLknQQZRce8SQ4bpb3cABwFhyGxJqK6SLWsKaiea3aqwg6fvFcYg3KFBTFhSUTcRN",
  "key17": "5YurwJcPCPnMT5c9hMuJWc8vKzVQRZUNZnyKM298mrLFD4kmL7uRP6FFVhGWirv7CKuo9Mzup7WtqDESjzTxZBmC",
  "key18": "4iNWatv5EnCCeT8Rie82NMcpC9BDnGZEhT7DYmaxUwek2UB7W8ZnNgwb6biCWxqN9jgKfrMegpZzrQW2rTKHJzw5",
  "key19": "PTFhgSPo28ErkZp5QzgqYzJv7MDusRrxXaWSb6E7ArsEHLwFf17g2ENwaKMawsQ5pbDtUJJhiUqfkSGMNLF3Gnu",
  "key20": "3Az2kSEW5a7Urv592PqHEVdkKwzsQbTwxVPC3gL3mh665zfdrbT24EQi1CAvyhXebQnSSvqYDV2j5at13MiXBETG",
  "key21": "2RTjEBFB37pn3Jo6A5qRWN5xKWSHHFXRtELuY2MMJDFgCVMnANJ5Azr52sAFyCBjw53ewEMcQ5yBrqaWVZ2mC5u4",
  "key22": "5xKvxwiendhfj614SVDQshSgi4iz5V9vn3YaeLQdd1drtwsm2ntdAs4fFZeRzdPjVvA34MXWDSMjLnFG1GA4FzaY",
  "key23": "21Voe4BzPGfqMHaBV4QWtXPzZ2BkfDLgPoZPTBtJn9tDLwwSVewnYvj6m3icEcTgkxZcwGWaA5Zp8jreTrB1roVT",
  "key24": "vEgJGoYW2pD9bVBeomKRqPsLaSzoXdpyrStDSfbwt6GXC1yRMcQFvEe4QVcgcUEVjYbP66j6S4y1chc5KUAGZ3u",
  "key25": "5DaPJyjVok89YDmB2taP1Rsz8gmynjpWiJsKUkzMVyMjzD4MgwiniCrDHKDxxofgHs6419vM2LMNq8t9bqyxjYRH",
  "key26": "2mXDqgmCcPTaB4VnK3rCDNjNmjE641HJDjTRHwd6HaaRbvJsVwMAThuc8va22detxnPkEYN4EVtuBesqukv4bHnX",
  "key27": "3Ax1fwReTz1nYnqAFouPjsmYAYyuZ8kgj3kkHvNbS4MuXPku9c9rjiiuPDj9vKhbyvqPgMrZPFSEmToK1weSVd2k",
  "key28": "41NgRkuijMStUpMgwtW1H3rEkd4yVhKYvfBqJgysgvp96jTiYqr1T5ShRzNKoANEeAACd4DjhKA6XRtTNZa2gScG",
  "key29": "4iPGygkzSus6XERctfwUtUSY1nzr5Srvj6Lahk4RnCanXF4Hfnh8qpBnnmCSQGWMuNQzYrNM2nLJtmeUBBggfieX",
  "key30": "4u5MGUdfTXh9GtEGw17sA8c2K1h7BvC9hxbB4PqNpsq65wGPwCRbMB9vAhvTZGLGLAZMHHce7aWaquqyYtfACNVZ",
  "key31": "1CUhR8wtXsfFgBt6RvJnDdrTFteWPpsj9Cz32feeZvyF16LLcSiBUtSnm5UMP8AFpe51KNgzXgsrFAFHVSJ77am",
  "key32": "458sQd2awcC19VTjnr3kfAz85Hy8pooS7omBrys3jPn6uq4ARmkurX2o2AnyVHpGm9iMj6ePHnxgDNLXMeD1UEWK",
  "key33": "2gP8zAmp8KTWztYG3vqwCy99wHE5TQjp6nJ9dQkUiEyk3vnERcXxk92TbDxWNffKb8Ko1uAEMRkchbTKQLFpjzpJ",
  "key34": "4P6bYEAxhXo8H5PXwJsa5kJC91VeVqdN5pWrubwhwetP78MJMu155hzyrhHW4zfF4Dits5niGoYmwqKPzajBAUd2",
  "key35": "4KPe4hpKiy1x86N1t52BTLHudLuWApoUjQ1DNmb4wLkwPEU6YkRuHb3FXcKxpxziVpofPTw4FPiTZGYv9vPN8twr",
  "key36": "3DRQWqnVn4Q9XWkApCPvL72nWEWGG8SATW6CAUQj2pFabngHofBNup5Pk9YY5XRVApRY7nevSWhV7siGaUbC9iSY"
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
