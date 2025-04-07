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
    "4N5MLsPywVKawUiAN1MRA9P4WFBe1vuWpXjRTujkVvapvJGCuzue6nWsPpns7TPgDawPSZXvmHzUnsBDkpxBBL7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxLgQ8u5TyLjQzbnx3LMfkbcdUSwZwxTKst6WuB4QXTDGBBKUA7s1GhZC5h6mefjhMxBVJ1KzZsLTVga6unrtsG",
  "key1": "9VVJD4whdXk5z8HGNQrg35rD8tJ2he9Bh6pfUakm5TUgYsp17Mp6GQq7yMpHdJ56JwADnDx5DyF5vZY79GRhx7z",
  "key2": "3CiWKnw2Gmzz7QevCcWSrupCzwxT5YkcdMmx1TadF87cmucgnkgWb6kUXVtW5tjW4ycidS9ATwNohLerurj3sxcc",
  "key3": "2DsW5qBBY4FyAPxh6YpwyE7ztNnBTvav1mck6mrCZZEAomJaNmtbGtpdXUmGnBAs5r4TB1Mk6Thtu6gALNzk2p25",
  "key4": "2D3ED6E1xPc3ErNE91tejsjUhgQrF4PfhANvSzzzQjKZELNU9C4JmruikTiuAsXhxPGfiXe1iXTq3r5a3T6QbBYX",
  "key5": "39nWa8BZccDdBncmUoWURBod8Lxc2yV7YcGvWYSgEwm4zRoMdfqSVtWu1SHQ1SHcSPAzPh7uEFBU43894TreTyQV",
  "key6": "5Ge7wxDkXpAmWpgLs2CDcBUjx8QfNvFwoYh3UJtKwQLbEjfqYW5XUvijRFfutsmsbDJ3LswKY3N5XHcuL885L553",
  "key7": "3tbSRdFH6UgALAXk2Kxk2o6sCsCgiWq6KdbuufYiDcMMKDSk64d5j66LeC1HvEF5HGx3LtDzpud7w1aWQwC3ibqt",
  "key8": "3hxvzrnL6AXTHqGvcMnQhcHTJCvpLGYgBEBwuJ6DXEjASccr7oxLJR9p4PNoBa1PjgxyKnjdDLuJrwiuR1Nj3mzv",
  "key9": "os4c4LRJFd9SgCvCSiGLgrnFCCgtAc9W4fEwnctnuW1hja8CGogmoDVsphP2kFoM4pGBcGFQXLe3kBxJjK5YSnv",
  "key10": "2BcdcR9QzWooSnGzMAk1mDnmg3kiyfkfKRaK8WyAg1QgtEa2ifeTWK6SWzVUVoPC9itEx5hisNjJtT3efTTjVbAP",
  "key11": "5jAA1u6GxsQBAm7uXTziT9ZxzWcZSfV5nxNozJv2WrNQXcVq8ohaGj6idqHy3q27tS3F1247L2af4edSYdfUWvcN",
  "key12": "342TUzrAgBjpqvPsF1XbzdSeQDS1ftH7N6DDpgW1s8KGsEK8dQ4paDDqniXWreLcS2r86KUobSdqGUciYHMRKms2",
  "key13": "3vGFirdtoiyei3m9t1TVPNibmQjcyUHxRSvX8rH9cVZrhVDpQvAEVGCm6w994mWDtZkCK2PBVLS1wh8wRuWtn9cK",
  "key14": "3N3qmHP3WnLAtebTJQapUgTaE3nULrb1GJfNBu5PYrV2TWrr61bJyuFYRWBssRyrJZjYx8B2mfJk7LPcnKw5fVd4",
  "key15": "4Xn4CsULREQYp9Xbe5urppQwfFUspLzkmt5T4S274uuydF97PWp2mkrgECxHJFD1LUMiK5uyrTEgtDp8bjYYzBF1",
  "key16": "ZBeSEsNqQvWjgSuc16DwpyoyfvT33z72qx4pt73M8P5sFdST8YdKwfyQfY1na3ETXYqfA7SM7bMcgeMyAHHQTxV",
  "key17": "5UBuYKXsuGGAs92AGfw9Rssfq6sJ8M7FMWXn8M2c5wYTGS2oPkhNrGpLWCs4WiQbJLL2NYcHVkdLQX7znCXLhT9V",
  "key18": "3tV8L3nvt1CcK5eYwReUnef6frXGcLEssme8peXbCZNkttAABhN21HS9VKPj8NDXdjg8VDgsRFZ6r7BTMSfLJ9U6",
  "key19": "5oDUrJNvnv6CojCqGYn6BKoSV7joQq4goXazVQPDBgr7QGUc9T5BrbSP6o5m5NUmNSf7C24SfCwGcd7JrYKU7a5H",
  "key20": "1NdwsLSj845JcpNiSDFrYVH5HZbvfhkJ8rfwRqyQAAF85ea7B62V3kYSfcjk9QXqhYoNQqkbFbptbTENsQ1R45U",
  "key21": "4AKwPWwCbaUbwHWpYyFQFBtTu2qdYkEGmK1B8cwy5xaMM4c9VjJ4wc9YaiJ9ycP5f3SEQ9bzxECEp5sd3mef2RJr",
  "key22": "mj1s3iqbuupAJ9YYb5pxKsp1AaKiJy8ctw8w64pN8Z4iUynpBwLLrrLTGZzBjtaNPLNaPrY7tqU9dKvKu3DvxDP",
  "key23": "3dXSFuDuPaB6kwBnULVHgdyWPRpxfsbaP9u7x1FpZjX7dBHuSYRvuGJAsTGsbdH9242F7mbMGYWgniUNAFCaSUNW",
  "key24": "4AVm2iWi6oD735LJz7bUbxQq9Hnkmd5Fm7sdy71ED1cpgXXecnm2oQAk4Jx1fa6qwus6Vw1Mbty4CcfJcQRnzU27",
  "key25": "5Thbx1n3Nstndy8y7WAJzTVaWDkdg5yQ6myewGnTvvrWhJq12o2ih5MEf9sKHQMoFG6tPaRG3mcMJcxYJp36C9bv",
  "key26": "wohx2pH8DjV5sPdvigZ2kMFEwv8SvpgS4yD3vj6ecfUVjbvvk54Z2hkVaRR2BMMQCN9og3Wh86go9BCWHUVqSHY",
  "key27": "4uoD4VwkpcfeSCbzJMBVGStkxQ22GAz84o8oKwC2z571dkCzegsY9ZgN5j6nBWLe9mFviUGrBqekdi7ejWWXyGVL",
  "key28": "RVAv39pjYzg2SKba3miGoAM1xU1Nfty4h8NwkLcdouH9xzUQFSsJuPPoBcSxoKvDggbpYq7RezMiV5ApaEsQqMN",
  "key29": "3tfTsugg9qiKgDHi5xkTMsxtmRg4k7qdS3Q5CNwe5HFsgFXQiT53QNjuPFJQV5nw6X1CTJZujY59vf3szKd9XJJm",
  "key30": "5ABS6AzJN8SRkxM4m39PzBEc4a3Vfk84Wa1BGwa6jcn5iuQbSXZB1CKsYNHAUgKPRPUnYzTGeGZGimXsggc2zSJA",
  "key31": "3AtburdWUQCwHKrSPCyqRnd1v6vsHV1dFeKTWGcKeiVB25uJuDzUrZxJTd7kByFpd1Do4buLxfvxEdGCk38ZzbDe",
  "key32": "2BeJMRQEeUoht1YWZQ7RihdeZQvkPT6vdUs9FPDFpJ8k7cn8JU8FkoewJeahu4qHcMhTsof8U3PAWETxZPZR8NrC",
  "key33": "MNE3F3XdtNWMjcr6TnnksqxC9GKZC6zRB4cGvbYKdchu5kAGfnmMoTat6vi1ByBgCzAKQ5YuKvKQZekfT6JRLQ5",
  "key34": "2eaZz4qzBqnETiqzqiGYXy1fQ4gwCjtBdZqfdbRyvMCT296qjcg7Dq7RenF8z96K34yf8DezU9ay5z2QEYjc4smq",
  "key35": "5TqSDtq3Yv9NePS2cwijyq38gT9ujnLxMjCdby5cJRe2wM2vGycH51P5zkdxSsyDphuAhwyko7konV7RAZ1XLrZV",
  "key36": "oyCG6wNtUAucaorg5Q4xwrDM2nvJUrtbKiSug7CEQGDNCdLRdeRBw2MiHPn3p6egnSKigFsBSY4P1eMp5Witaun",
  "key37": "3r4RWiQczMGFN7JcvPWLuv3hp5kmtCUmRMdntiU8GwCTGb2B2APUc99nTYvePeATyXZkDkPZXv7cx1w4Z52a3hgt",
  "key38": "2X7J7HMEVS75UdpZRQ1kUhMczGg91NbPX5t1Q4JYMiLHAHbDWzLLzHjdoCfjVFMT6ZUnL5Ref1CSs2aiftADwCQa",
  "key39": "5f19fypkrGCpb3m4h2zFmf7x9ibYfsa536qbt8wSDUfRtiR8JN64roWZWEfD8qgzvWkHqZcbudxishfgnuq2QkN7",
  "key40": "5X1Ae11BrSQv4Lz5ajHPPGGi2zCWQgL472BPKW1D86oUin8ZQW7sUZ3qCDwsSMq52JgycwJvWYfs919PFZEUh3Ma"
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
