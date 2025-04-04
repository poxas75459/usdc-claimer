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
    "w6QQjtnL594dbJ5TMDXbf2a58BiG7SC6B6nUVPFj2RtPYntRfwGCWkrKx4u73X1YkHz4U8mFecDCYgXVQtrMMBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJ4imf8F3BRjpSLEBsgF4HPUBxgBXRyEvDorUR2oeKzS9pBxgMkL5NZDw35Mvqnp3FFoqZetRa7fwa57L1eJKUw",
  "key1": "5GENPxjfhyzxxKQUeVReoB6LSovwigiymjksY9oj6ui1Mw34LQ9JzyemH34uByGrSU1qwy3XQdhNMFT4YWndvGUG",
  "key2": "5eLr4aeQzzXZrBKsmxuBDVxrRegvxXyijFRtA3zDfTqkLsbDwNZyW9a644afecUTfkCoFDGjcqvoH8SSmSr6UFgL",
  "key3": "4XPj56MjSyNPQktdj2tm7fDAXLd4xotWN5ufbAuv24qH6q4k3KUvNHL4G9noZbpySrhhEaMMJopqr9CYWDMYfACS",
  "key4": "toRARwaZXPn88ZTRC1SZqCBdqm3VrB1SgkRa4KkM31WDDQnaDtiXwXkx7frUB3HxuKBdUYwpMEgA5AUBCJPBJhm",
  "key5": "2PR7udoijSzwXJnxVnS3jnMDVvNCoD7QB2y7R2kGT5y89Ju685cuM2GQ3mC3MdLRZNGoDHshE97q7RF3pGNbUUZB",
  "key6": "3sHN3pnoakQfjbjftsvZ4sS78sQiHmprWyDtJu92qyfX3Vp6GsSUnfjw2SzRQpYGgtRFCMeXa3snj6pBKdDE7qfM",
  "key7": "5YUY66p66zUuANwUb23GyFjQLKoh3rona6A1UAM2qLiSBm9qCdyo1KmA7yknLzuafYfw8RWFetkFqsjGQCG4VkC8",
  "key8": "3eiHpbkWX8dW79s8dzgSSouZcgqN3unMRLotDQtuG4wgnsj4cKVieaVMw53fRtJHRDrVBZmShURhvwkKKdBnMAuL",
  "key9": "2RGEG9MJBcdAyTbui6vA5DqwLuU52P4pcZhhYCxRqJaCzrZn6P5PEgqXUEUjhDUxpYpdmozCeo6rG7SDbc2raQZx",
  "key10": "2b233nxWRuJPG1nyJiMLAj5TzWu5NEVmoRvwPzXdmSQA33gC7remfaqRsTXKjUvrURFxhLCoZbQyHQyL7w1E5j2N",
  "key11": "33CB6wnw9hiQZ1XDdmFz2aeim29yYAuJbFepcBo2sWWKwf85fzWNmcXPGCDgWBwLXhKV4cCvcRRjCzEocwLsRMUh",
  "key12": "2hMwdrEZDYvyJAEBTy5UU32uA3iV7RNGYXvZACB3JhddjLjUYoMNEAi4jCBaAA4ET5YzH8vKpXZCnWb5zfiefuJj",
  "key13": "4SHmx3AUFvAfV48GJ1Wg3P1LfKhitLrYvstZysgAnzBRozXiBJy13UCCkGeg44aFKognh6R7tpnQMitAKAusTpRp",
  "key14": "5LUZ3sye73TCZJ9iQaXCcoJAU1qAFtf5GLgZqQGEepPbRizNspU3cQwo3ZPdhiJ8Fqne56ifut5DvNBaAwYCkjAC",
  "key15": "3TJVjTue4j8mjkKTn73ET7S64xf6UCybKDEXFdaQ9LivKD9xiauqxmUMcdCtiJrsSah3DFwAqTwnfrWVkn9aaFjb",
  "key16": "pdqNJyvL5HGToCNSUa65GfEJEaoiEz6dJ8Ei3mu6zhfGGBrYiQqeFPgGyNoc8MXQ6HL5FbAgq1R61qeU7FQ6a3m",
  "key17": "4RgRx1LDJw17rDEZptkE7ytAr4M7timaaNjTZSoMcok8tD8ouUmkHeh7dhtFnh24sdq2jidKYfJBuuuoQsg69JyC",
  "key18": "5ajLvLs7GpvLhWem5GAJXDR33phvM9nSExMZcwwuFhK9xJpMUwBjwLpUivoLGFpMBCuF2ac885Hv2Zki6JZdNa4M",
  "key19": "3zXZ3cvHFzcgdKrEkUKTvKFof9Zycw2NgnRLxLbYkuRGVekcrXNbuGFzd2gBqba58Gyf6m1mTF35N2c2otukTwrd",
  "key20": "3uoBxWXsGBNSJhAx1v19bW1ctX7kWQJWoBUQg31hwgsWMbNndr3pka4g4C9WdKyitQ89gRSyruky9iPkEhbDzJb",
  "key21": "3oaB1yX3QScU7539sDpraDhfsvYkyLDRrzoQMX3JkXRRR9nMtbNPpNEWEK2kXyzjnFSyaCJeStwFPT3rWScF9zVv",
  "key22": "22qcnt9nnXtrVabjGQfHETcVAyYHHVrmE18ZvxvuC62ppCCcGYDdAr7dTev9GMUKmbiK3nLsYHL1gh2au79Ndo8u",
  "key23": "4FDW3BhjWCCV6Ff8hjxuLk8Ut1aTSpdo5MTMXVe5gbz5dqepdjFFvAGSmp3nNXuR4jzocyVVR6nw3mAN28svVqpt",
  "key24": "2qRzBzXyDMTsjrQ5Luv8Nb9j2GMEBXyanqB5L7FJTFv1QgDaGKFmX6dXfEurWb1bmwikzMZHdoQypcPNMwZZ2yhG",
  "key25": "66ot4hhX2HBg7pkNanGPFxQS4EWZe5NpXJaKzhjFgSe89BzPWwhWXs2S2p6rnXKMz5cJrHDjxqUMDUVSL8BmyDS7"
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
