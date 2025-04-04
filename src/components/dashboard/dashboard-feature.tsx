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
    "64nW8C53QGEcaRq1DzyTDewRwBrjTzGZ5P5RcUFMs1YafaiW7E3HoAeUDsqA6sFb6HTbXJyHdTX4eehizpUVAngZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kxPXXf2uMS2GDMQx87KCLK2VaukvZXGqbXR3gRd1ggecAPBpspy8SPwtexRue3qq7kUzYwjhjTRktXmPqULz8A",
  "key1": "4QFWpe4GAzxQy8CcdX5rShd4ZUFaVF7Jimp1KLTH927nnAjRv4u1AH4rT9vyfmGkYzvfbX6HM7oUezxChtYJFysM",
  "key2": "GbztibtX4GU34y6Xd3s5JAuq3pfJSte7EzZtBgRWTcx4t3b5CmsA612Dt6RHJkJkw4qytiyjY1TKjyxnmfD1mBh",
  "key3": "2aY2ewKYkXW2oUsCdYQ27kwzhyqgGydw2iuMcupLzVoY2KfDNcQYH1bnRQTSV2Zm4SUyfDXB2BTAwBYt1BnoxYV5",
  "key4": "4Li8AHW7CP2GkfFxfkxw3cpVoPmvJQ4yM4GfZTBtNFTBbAT5eLfiKT2BxHA6qevkn4WPs2CjS9ZVkYCsBXYWjcsy",
  "key5": "2FSjoHpkdfxXje4qe4mzwzXUuwjKGmTXGatesGsdE1suTDKgbfZyEJBeGDY4PwyxeAujLYKA8sk8deXJ1ELZRBRf",
  "key6": "G1enunCfcAYU1xEkcF6CgafUXciL8czYhrnfYtu2g2sqXEbYWeUvhdB3HFp6d1BRvjbBCMhWe7zh7EKN7diyoBV",
  "key7": "5mGx4NRGmh9aj9HhtCDTZ8EW55EnsU7FZiSqF7Bx8JENUwdnjjbeD6vjnsZWiYJP6NXUi9h17bcfj7EmR8G6TVU5",
  "key8": "62g3nvL6gBXAQfEDpgFatpqZZbqokgaWaNZwFjjB2bDSUrTYMYKXWVLFXKCaX6JpJ6L3EAkVMdN87WwPAqnXUUzu",
  "key9": "YMbFXyJWUAaZnxaUpgHbmM4zaqzgrFWHqdwenakSSd2Nd633a6x4HdtUAE2kocA4nwXYPA8oUbBSn9mgCKeoLr7",
  "key10": "2E2HF8zeysgS6mbtcKQc7ZidrJvwfTGob5xkjM1yfn9HtP9GcsqxBAqibqKjYbP5ajT2jBuXF2SUnE7RaQPUcvHm",
  "key11": "MxNBUmguQ5UUGwScvBM9iszXyk6WKcn3jrxDqh694UP7rNVbBXx6Nj2ygec9RydCzAWotgPnWL9pivMoEFbF9p4",
  "key12": "FLLpFRakh5BqKQbxyiNnjVvTmNEzTU8VCm9uH8Ryemd8PEGk7LEPfwLn9kCEYPAT9Xb4Jy1UunhCXs7petB2Ycj",
  "key13": "27RnYubXwQLNC5kRZnRaupiqrK5rrquectqHDj37wY29HvMXj7ghoX7fgvmtkxPbXMefbdb16EszirWQfbRrv332",
  "key14": "4joqDUSQjUvCQsNNnPtNUkcH94ac1VvLNu3TmUqbkRk13bZpwtriG7DoRgJA1c1A4fyf1NWSkdVhDrQEzm8kQYVS",
  "key15": "4wKAa3tmAfYeNLig3cgmj3ubKP7x9eoFNwh7hHyC5Wnm8Z96MHi7RcxB2bMV8p6kzvifSbpPgZYbC3tTbZnchLtm",
  "key16": "2FvMddMr39LtgcH7o9DbjDs7ZePN2YpJzpLuvXSzb21SmWP5AdRaQHKCeFjNV7Pp3ZievVkwp82jz6h6SCKLpsAS",
  "key17": "47QerXqZiaAmYBZk78iJQiY2Aj1oddhLAudNVDvJX27mcf4Utdegc6UWw3yycT585YDnRYUSXLm9fkQmQEK2GXMC",
  "key18": "5yw5FP2cMQPe4bxxxAzrMGsHXdptXG4vcGoJkLu5fjFEvoZe3DR1Y9aZ7Jo4ooA8pPab4wKPGDFWs7NS1q31eyCZ",
  "key19": "YNQcFZJC4zwF2JTjDjEQ8zVF9WKeb1L1iQp9KhQTyh7AkviLbzvbwEAu4yq2PiMKSKLfE4DNj5EMBbE8NPwyeTK",
  "key20": "34CRPcBk71H8wXogGd4SFZmUTfen6d5aPzkpsvk3hSUCYqEPvJqxbuwpMwpbf7yMwS1QeycRYZT3SfSRQ4JMiirK",
  "key21": "25h7TbgMs7MjZqr5p1bX47RkvYNSbmRGvQArGBLWvGMGhxKi9rTSTBqpAKanoWpNzWsTVNrUgc8m4YFruUvV2YER",
  "key22": "2oSzKTbFZfhPzgRzpue2rFqZbxxVmxkL2nstXKoRBHNwwEyLPNwZmXrk96VEbYJWsgLcPkULExFYfLhSNbUoztAn",
  "key23": "2EWt6AtxXrvAcCbKXMFKyT8Sc1M6QBuFUfTuJ2YQUVKxMZYbGw7SMMewQuxb1J2ppWq134ek53nKmGqPMyQBeH7Z",
  "key24": "5r9suzV1UahTMZFm4zsV2R7Z2Ds9ThTdzs5kYzsA1RT2RiZJhjtCWaaVrL9sAwBJhUGfur6rtAvBHJ9exUaPRWUS",
  "key25": "2McXRSc8NmW9WQj6Z6WTXsfkq5f9RyPfoCVEXYf98qFv2ZZbW7aKVdDuPAbDtyhUBr43UTrpCawLSG9soPLU6Moh",
  "key26": "2KXVA2vVkTXTBnTSD4HppSyJf1pvfosH1VhN9a7NEttFB7x8y2U6NfRjfVjnQTWQJ2dRrBq5Mi52BTNA59fuU6C9",
  "key27": "3AF7hoWfdEhvUjm72tChieM4mRHFojJbk3johYNZiDdycPD8MdGiGtGe9QXyquSN5h84GvrnjpxoWykg488kbjSP",
  "key28": "38o3AmVyu3KWznyuHzoC3pvinBkestnHpysbg1g4SRUpt3wpPKJFDgR45AYAXK11pwpQqyG4zsziJjtFpq31ocZB",
  "key29": "9i1iLC8cZKteT7zs9UgqyPycBwcweXrJqYrA2FjHf6HUenNUV1UjqouLzEqLbteGUzUPUEx4PEfSGNwNQZ2u1p9",
  "key30": "2N4MxmMSQeAkkWj6aDTumyqTLHznspybvJbbjDTEbTySxUo2AskdBZ78PUBXZyupvTqALouqKHh86ZfgySss5XH5",
  "key31": "525qZm1BUk5p6HfGMf25EA7xhyJ8kxJUceqxt3bUEYXgKquQC5FoEPnnHvwWsceZatw3Xj3KS63wvzsM2sEMTymk",
  "key32": "5fYb5ds1Se2vRFPv9aksLwKYeA8aAMzujGTjUTADKGRp2TkkLEpnPHwn5ok3ffaiYXCVHs3aGSXYNqiJXzy3CBka",
  "key33": "ypdVEKQor7z46N7m8CHYhEMfnLbEgs2gujUhExZ1fYkz4NxdppmkiKyd6cMYW1biftQ5K3ECbLAXeELg9Fy8jVp",
  "key34": "63wjoueUErR1WDe1AsMApgbCHCTirtgZDQcSJqv81TLFKmD2PARSF8utgV8JxnqpAFbasdxqRcZMx1hCUVW2F2iD",
  "key35": "2sTKK5rtWyK4RHgetLEXozBztoRHjq77EfnswGhfgXYvvD8x9BSuJZkJq9wZyZ6k463hZHFZUrJZRYSYqmMgHacN",
  "key36": "2ZP239kZ5pZ7Xyzhq78d9GkBnji4J1M3X65caMpzhQaXZVqv4vp65qUjnBh6zf5sRYbWSggfGzpNsmYLkNA5k8wp",
  "key37": "34TKdEe1HGKbbSRhbaR6Tta58dzEqbRDWoVWqTWWrobY35U5LfpSBoN4iUvi2ViEAcXHtr1F3gMKEgLcXSttL41w",
  "key38": "4aYRiyGgTukEq1DciuG4BM7BqufuZQcfomPZ33LoWZvadGFW7WhDGzXAP7EMQdvq3WqB9dn3sahJoGACWyXNYqnc",
  "key39": "uawZRBsE2xjXVCGq1BNBvyzpKoRfmWj1uoeiZuVpS9wbGFwWMh2W6L4XFLWpzNB2viELhxPJZyQLPPpBEudpEWy",
  "key40": "4R2styQtEPzFU8PH4PxX7NEHCmtsJkRwTTVJ9NEkvdKR8djQEkgT7qBNFNQsAVU5xGqHRj8pBKb5hvpghzaesoSx",
  "key41": "3QF2c8SMUJWrjZabb2romkaBhKC6gxAc9hbtPA7zigecznDswpeM96dqkLNFr5ThsiFQS1CWp7N4V5oow2zQTbek",
  "key42": "2Rr1y9qZTEk5Minc4ewS2BGreNv9pNciU7xjh7LG91Xe3LD8WGy887EZo2sLa5Frv56wQa3PCfbSx2x8mhmqRrFk",
  "key43": "4US5wV5cThXYSAtsFm6tyZSWr8kuMuM9zxWiai1rW5qL8mi8r1FBQK7rkBSTLyH2K5E2M9bccvidXbCwJiLmECFZ",
  "key44": "5D1M4My7ZgYA8z6LxGSNuTEA3K4WswqS4a8Nxg9jH5rUaQTpnouC7yUUVqaVHCY4pj9XTgjpR6qfUNoTSDKpVp7i",
  "key45": "2paLWVqtUmgaeBvxHE2rTfPu2hUkstcrH9cFVvMRibhbL12we7KbYMNR79PaaAV6Wjra7XJKBEV5MmkzLKURSzNH",
  "key46": "43NVaqo7WerfbuGkyZ175YKXdPKkSNtgLEzzqBHFuX36zGju5z5amLb8Kq1wsRDQE6cHd1NbDs8iWPenRbYFpbas"
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
