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
    "67i4WhBUAMrFfwaqBPpD2xyGWYdESJcRqqa7f4ibbHV88y2kCWR2PApVHnTaz8ToNrrcjgrNDfMw6ZtMTg2AgMuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5S65j3aeTx2fFSyK341spikhThx2Ct57P7Bu4LQ1WYS5myUML5JuTxqLPLFmeH5TEXGjaaFL9cz5M2daAD2Ep4",
  "key1": "533feNyzPNnqUrpyP71RN3r6koZbs2LrJHjtZyPPU6AnKXGHgwjCBD1Knf5ofyELWje3wPLCkaDerFLusfggytD7",
  "key2": "2AXNQqZfv1epn2qX5sQuMYCmhipjuap32DVVmGKM1XYt9LwcGs8otxsGsW6cWEKE1K7RNHw81KEzvW1yKxhS8qnH",
  "key3": "22Tj5mv48K2VHUtBjY6jwhsBzXGzcvHkN73Zo6LAv9Pfdt9C5eBm7osDwkDHiHKZhKUHUReEQXJamHsW58rWeuLi",
  "key4": "Dw1VnfUF1pxmeRdbC4WSkameUzfbt2NPJbKmbZboXBx2GjeDVuocVqRnsvDRREGRocHtAFsfAfyWPfMSiUj9wM6",
  "key5": "2QVhwe5DcxhNk9okPey8vBJacRG2g3aSdCjAxHyoz3V1B5xWvqETLfbDKjFSJzRo69FmeLoJfSfE7CP635fjKurM",
  "key6": "3uXesa5iZT1pK9meXWeqr533yiHmw3zLA5YgFBLgAUnCZ4LEcL3BRB7AzswxTC4dqWnbGh8yH44ttgPFBbi1Bngi",
  "key7": "Fp2DJ5K4Cj3biU2WK2x1UudhcDbVag7rb7wHNLXn7xv87kdR3rGZnV96whCKdDgEYYcZ7c3qBA5DExG2pKqoVpo",
  "key8": "tdXia4n5JvfPsPhwA8z6Pv7pPN32QJoBRdxNCfLKCNZPn2GCWJsMMfu6kF8TUB6xdLqRbap6ibTnXuJHcYzxE5n",
  "key9": "65JoETsYvqZu1zNYY5CX5DwfXRSvcxjX8XMELYwGwsVLmCGdzTC3QBJLka2WR4FFAQR3LL1p7QUJV38ZbqxzviVP",
  "key10": "nAQS8uSLgo6s94yTGZkzxCw7tcAuQjbKpnLsNCAsXuMGG9o1PA5kMqhpJq5MZjdYQBvaSZ4b1Foe2NTKMQRssEU",
  "key11": "5t6NmFfNrSm8uhFoBQkpmWXrN6wSQ1oL7Y13qDJvRrbTJXwak6xXEYmSjSiAs1JVji4womi6BbJNJQCPiP1r3jb7",
  "key12": "4UzzTNFstigzaHHUBeaAg7cNvVVpGfoL1qahgFyhwgFMFNDMZ6q6c6VQRGbcmkQ9i5nUcJkx7w5rwPLFeEaxHqYi",
  "key13": "5ZoW4MCRvgnNRiSdPM2Sy5fwmmPKEztAMjkKawUrXrtKBKn3neiTsJ4kyupHQ1oSL4L1f6rRa2Hbtn9WZFPvZb3s",
  "key14": "ssynQ8NH1XGLXRkgUQai1uqcdv26wEd9wbfsr5R5bvL2FBHrwedRXt2dykKiDEhCP1z8JBw8evbvrSUiGeDLGnh",
  "key15": "YZkMgwCc7m2gbVrGx3b5Nb3qj436H5zTcbWR8bugW8g5je6w1fnXXpM8REj9hy1cznKj2EJvj69gpCfjstHA5CM",
  "key16": "4ekG4HcLbxdqsBDK9gPfuDyzi5yMYE7VShwc3zEcq35RXvSfiK5obv24gKTkyLq691Wtk4Wv4cAWh8F6r9uiAgAb",
  "key17": "fkyFDC5KEMv6KDT5NNw4sLonxRJzYDmTqG4V8gWuwA1MybAK13AtxXJqBiXL2VGXScBhs2iZ6Si3oLhKYHyiLAz",
  "key18": "4Ksjn6TULfWUQBbkKwAYhkkhnbMtoG4KqNeLn8uhGuBKyYMcVdihLryagvxxhLqjAXSCRko3z2Dznjq7qgiQFG1g",
  "key19": "3KbNNgqZ4aoQGJN92u6D4awLr9LzEiahPgygrgGe8H6EfqeUQMLVRTVuLA1Vi3EvDJTS5ZYtqZ8aSUoizPe3TNWC",
  "key20": "3gw6ZayANUtBExk7CEjukv9BPi2d9HhrdzCM5KwHrjjZtYQKZPh67hMZ4ryDJYM84bv6n8KD2tB1qzicueyWYB2n",
  "key21": "3basoUZ2dQzwvivqzbBk5J2tbNK3oSreyNYLj7izCjC7p4jTcfUgaGhr5RGbt58SeTugZkA31e1hceyWjaxDEwFp",
  "key22": "5LbDdBdqEBbDBFJhW7hLezFTjpxSQHyjFnhboB21oSM2FfgeH6rgG7QMjT1nwLHVnmbb14BVgHkusWUBEJk7wxBR",
  "key23": "2fSqByGVQtFt37rWPnodD8FjPtsc6UitzzjuETWRXzZrbgSBQy4ptLbniTNn43Bbg8qjKwsu6R7CaJB8vE7TSCfg",
  "key24": "BSRgnAuen6MuEKE4RvXvwu4iYLdwNNrAQRX9LnmgeLonJJ2zodS5ebEUkd3PSTGvXJvzaV6m8DJseSURNzqpnhj",
  "key25": "673wp4LGd6Kkiiz7DttgzgUr9XbFiYvpc7qPRFzyDY9oAoJAfSKP6NTbrVRi5dmqZf14jGivhz2mW8ytn6Jdx7tz",
  "key26": "47tovzuExvuDagf91AF51M2je6C2A3mDhtqkg579o8vReWArFLS53K1wDf5Dk4Tg8D7jjfNi4LyqT4HYn78kBdR3",
  "key27": "62Rq887BF9GH6Dc5AyFBub7MzDJnj2wpBhiN64WCxZAHqFaQLpz843MHVjAg42WemFgDcXYzkQmaFTRMowu6dXJx",
  "key28": "ZJ9GCjuE18y2LnhEMQMDwNJgWD8Dj5YjTK6Bm3XGDxbra1GWQmJzTGoanKENHVwHuHqqRasavpZAB5HExKjUSRx",
  "key29": "4yGsYiE96aFRMCjHivEQkk63p8fvAGBJscibB1gtL8ir8SjD8CimwHjYEY7e9FFC4LxXMDrLmFxvBo2wYvwDq38y",
  "key30": "5f9oK2HhYeWNqfbNihGx4vbFByHdanQiXtmSMWEyjzwDkXXvL1fJXGHJdRFxnuXMU9cmxPsWfPrpMf8mgHN5LCGx",
  "key31": "4Zc5T7HpkgrjFzj2FdMMVhS5gTtuFCbrAGzMeDeF3CRubUKTFpKzCWDJ9hBvFWwNoAqKsgchvQNTt5LfJcJRGNGT",
  "key32": "haCgkNRkieYBjfz1e6nf64NGmFMPmf1xSS5Ub1ctnPiAxutwYHW7QRPbun18wWd8CfuLe3v95fHNHPRHoPP49vp",
  "key33": "3shfC2Hs5erjnXj3tSwhCosA4MRuSGkD2FMTk6QncUFAX6rNL8y6WRDWqk3FB6P3oc3gQoqGYBnxMvUoUNZR3bQR",
  "key34": "32i5BULT9KQowXJBMxpDqxfVMqoBxQeZ9Kv2cnTLry4TZHbb1LFYKo2YF7jBdEKwP58fjitPuf5JbvqDkZvXJcqj",
  "key35": "3b65p4TXRnwQ5ZSZuVhdnTdCktgs6SWGEWpYK8FydxX8wqBC4Et5mQ58ae68cvzg6j7wSA7zUqZkbZN2Z6XmiTQN",
  "key36": "28YHruanJ9kDnqteiKSLDxd8E4jWUJKaHBZbKMkh8VbKViWk1WJuiSvrQHxCeu8K5p43qR2ruKa1khaZHjdHbJKG",
  "key37": "4gAFxveNwkNpPZHfHp4AutPZghUbUPZ7r9QWUD3o8EpP9DhVxJsgZnM5hphqHD1VfeyCKRwsQkJDNrJ6PvP36V7W",
  "key38": "2ZpUig8ZwJVToH9nbjd4cfFG7Yzs1oH1bNnScZBDx4u92BMQA1iJpaQijvviNiZ2zDBs3fKyGgGTmLtzhWPA3eYP",
  "key39": "3Q4BQtqceiQTC2CULGj7y4SLQYiAMRBYMAKMTrJN1xZcQXbankeom8zbpEoTbbLQ9eX6DE2w4mYS9yRiVYoULWGw",
  "key40": "3WsiAGfFFAnFYx8heZVKzbaDwoSVmNHG3BfN8U4GFJQa8noANN45XwmWHq6fSopUGYyzvRfBBKNR5SujHWdrS8UR"
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
